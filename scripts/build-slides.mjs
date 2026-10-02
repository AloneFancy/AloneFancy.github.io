import { spawnSync } from "node:child_process";
import { readFile, readdir, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const slidesRoot = path.join(root, "slides");
const outputRoot = path.join(root, "static", "marp");
const dataRoot = path.join(root, "data", "marp");
const manifestPath = path.join(dataRoot, "slides.json");
const cliPackagePath = path.join(root, "node_modules", "@marp-team", "marp-cli", "package.json");

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

  const result = spawnSync(process.execPath, [cliPath, "--html", "--output", outputPath, sourcePath], {
    cwd: root,
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);

  nextSlides.push({ title, url: route, output: outputRelativePath.replaceAll(path.sep, "/") });
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
