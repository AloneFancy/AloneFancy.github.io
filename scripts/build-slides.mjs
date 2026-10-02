import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { access, readFile, readdir, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "jsonc-parser";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const slidesRoot = path.join(root, "slides");
const outputRoot = path.join(root, "static", "marp");
const dataRoot = path.join(root, "data", "marp");
const manifestPath = path.join(dataRoot, "slides.json");
const settingsPath = path.join(root, ".vscode", "settings.json");
const themeCachePath = path.join(root, "node_modules", ".cache", "marp-themes");
const cliPackagePath = path.join(root, "node_modules", "@marp-team", "marp-cli", "package.json");

const settingsText = await readFile(settingsPath, "utf8");
const parseErrors = [];
const settings = parse(settingsText, parseErrors);
if (parseErrors.length > 0) {
  throw new Error(`Could not parse ${path.relative(root, settingsPath)}: ${parseErrors.length} JSONC error(s).`);
}

function readBoolean(value, name) {
  if (typeof value === "boolean") return value;
  if (typeof value === "string" && /^(true|false)$/i.test(value)) return value.toLowerCase() === "true";
  throw new Error(`${name} must be true or false.`);
}

let themeReferences = settings["markdown.marp.themes"] ?? [];
if (process.env.MARP_THEMES !== undefined) {
  try {
    themeReferences = JSON.parse(process.env.MARP_THEMES);
  } catch {
    throw new Error("MARP_THEMES must contain a JSON array of theme URLs or file paths.");
  }
}
if (!Array.isArray(themeReferences) || themeReferences.some((theme) => typeof theme !== "string")) {
  throw new Error('"markdown.marp.themes" / MARP_THEMES must be an array of strings.');
}

const enableHtml = readBoolean(
  process.env.MARP_ENABLE_HTML ?? settings["markdown.marp.enableHtml"] ?? false,
  "markdown.marp.enableHtml / MARP_ENABLE_HTML",
);
process.env.MARP_THEMES = JSON.stringify(themeReferences);
process.env.MARP_ENABLE_HTML = String(enableHtml);

await mkdir(themeCachePath, { recursive: true });
const themePaths = [];
for (const reference of themeReferences) {
  if (/^https:\/\//i.test(reference)) {
    const url = new URL(reference);
    const extension = path.extname(url.pathname) || ".css";
    const filename = `${createHash("sha256").update(reference).digest("hex")}${extension}`;
    const cacheFile = path.join(themeCachePath, filename);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Could not download Marp theme ${reference}: HTTP ${response.status}.`);
    }
    await writeFile(cacheFile, await response.text());
    themePaths.push(cacheFile);
  } else {
    const themePath = path.resolve(root, reference);
    await access(themePath);
    themePaths.push(themePath);
  }
}

async function findMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findMarkdown(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

const sources = (await findMarkdown(slidesRoot)).sort();
const cliPackage = JSON.parse(await readFile(cliPackagePath, "utf8"));
const cliRelativePath = typeof cliPackage.bin === "string" ? cliPackage.bin : cliPackage.bin.marp;
const cliPath = path.join(path.dirname(cliPackagePath), cliRelativePath);
const previousSlides = await readFile(manifestPath, "utf8")
  .then(JSON.parse)
  .catch(() => []);
const nextSlides = [];
const nextOutputs = new Set();

for (const sourcePath of sources) {
  const relativePath = path.relative(slidesRoot, sourcePath);
  const relativeStem = relativePath.slice(0, -path.extname(relativePath).length);
  const route = `/marp/${relativeStem.split(path.sep).map(encodeURIComponent).join("/")}/`;
  const outputPath = path.join(outputRoot, relativeStem, "index.html");
  const outputRelativePath = path.relative(root, outputPath);
  const markdown = await readFile(sourcePath, "utf8");
  const heading = markdown.match(/^\s*#\s+(.+?)\s*#*\s*$/m);
  const title = heading?.[1].trim() || path.basename(relativeStem);

  if (nextOutputs.has(outputPath)) {
    throw new Error(`More than one slide source maps to ${route}`);
  }

  nextOutputs.add(outputPath);
  await mkdir(path.dirname(outputPath), { recursive: true });

  const themeArguments = themePaths.flatMap((themePath) => ["--theme-set", themePath]);
  const htmlArgument = enableHtml ? "--html" : "--no-html";
  const result = spawnSync(process.execPath, [
    cliPath,
    htmlArgument,
    ...themeArguments,
    "--output",
    outputPath,
    sourcePath,
  ], {
    cwd: root,
    env: {
      ...process.env,
      MARP_THEMES: JSON.stringify(themeReferences),
      MARP_ENABLE_HTML: String(enableHtml),
    },
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);

  nextSlides.push({
    title,
    source: path.relative(root, sourcePath).replaceAll(path.sep, "/"),
    url: route,
    output: outputRelativePath.replaceAll(path.sep, "/"),
  });
}

const outputRootPrefix = `${path.resolve(outputRoot)}${path.sep}`;
for (const slide of previousSlides) {
  const stalePath = path.resolve(root, slide.output ?? "");
  if (stalePath.startsWith(outputRootPrefix) && !nextOutputs.has(stalePath)) {
    await rm(stalePath, { force: true });
  }
}

await mkdir(dataRoot, { recursive: true });
await writeFile(manifestPath, `${JSON.stringify(nextSlides, null, 2)}\n`);
console.log(`Exported ${nextSlides.length} Marp presentation(s).`);
