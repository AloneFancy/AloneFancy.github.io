# [AloneFancy.github.io](https://alonefancy.github.io/)

Hugo site using the RetroCSS theme, with Marp Markdown decks published as standalone presentations.

## Prerequisites

- Git, including submodule support.
- Hugo **0.158.0 or later**. The theme declares 0.158.0 as its minimum; GitHub Actions currently builds with 0.167.0.
- Node.js **22.x** and npm. CI uses Node.js 22; `package-lock.json` is used by `npm ci`.
- Network access while building slides, so the build can download the Marp CSS themes configured in `.vscode/settings.json`.

Dart Sass is not required by this theme; its CSS is already compiled.

## Setup

Clone with the theme submodule:

```sh
git clone --recurse-submodules https://github.com/AloneFancy/AloneFancy.github.io.git
cd AloneFancy.github.io
npm ci
```

If the repository has already been cloned without submodules, initialize them with:

```sh
git submodule update --init --recursive
```

## Local Runtime

Start development with:

```sh
npm run dev
```

This first exports all Markdown files under `slides/`, then starts `hugo server --config hugo.toml`. Hugo normally serves at `http://localhost:1313/`; if that port is occupied, Hugo selects another available port. Stop the server with `Ctrl+C`.

Build the static site without starting a server:

```sh
npm run build
```

To regenerate only the presentations:

```sh
npm run slides:build
```

Running `hugo server` directly skips the Marp export step. Use `npm run dev` so newly added or edited decks are exported before the server starts. Node.js runs the slide build; Hugo serves the site. No separate Node web server is needed.

## Marp Slides

Put source decks in `slides/`. The build scans that folder recursively. Each Markdown file gets a route based on its relative path; for example:

```text
slides/marp.md          -> /marp/marp/
slides/hoi4Clone.md     -> /marp/hoi4Clone/
slides/team/brief.md    -> /marp/team/brief/
```

The `/marp/` page lists each deck's source path and published URL. The generated HTML is written under `static/marp/`, and the generated listing manifest is `data/marp/slides.json`. Treat those as build outputs; edit the Markdown source instead.

Marp options come from `.vscode/settings.json`:

- `markdown.marp.themes`: theme CSS URLs or local CSS file paths. Remote CSS is downloaded into `node_modules/.cache/marp-themes/` and passed to Marp with `--theme-set`.
- `markdown.marp.enableHtml`: enables or disables HTML in exported decks.

Optional environment overrides are read by `npm run slides:build` and passed to each Marp process:

```powershell
$env:MARP_THEMES = '["https://example.com/theme.css"]'
$env:MARP_ENABLE_HTML = "true"
npm run slides:build
```

`MARP_THEMES` must be a JSON array of URLs or local paths. `MARP_ENABLE_HTML` must be `true` or `false`. When unset, the workspace settings are used.

The Marp theme named in a deck's front matter must be provided by one of the configured CSS files. Keep those URLs reachable; a failed download stops the slide build with the HTTP status and URL.

## Blog Content

Blog posts live under `content/post/`; the theme's `mainSections = ["post"]` setting uses that section for the homepage. Use Hugo page bundles for posts with images, such as `content/post/my-post/index.md`, or a Markdown file directly under `content/post/` for a simple post. Other standalone pages, such as `content/about.md`, live directly under `content/`.

## Deployment

For the first deployment, open the repository's **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.

After making changes, build locally if you want to verify them, then commit and push to `master`:

```sh
npm run build
git add .
git commit -m "Update site"
git push origin master
```

The push triggers `.github/workflows/main.yml`. GitHub Actions checks out the theme submodule, installs Hugo 0.167.0 and Node.js 22, runs `npm ci`, exports all Marp slides, builds Hugo with the Pages base URL, and deploys `public/`. You can follow the run under the repository's **Actions** tab; the deployment job reports the published URL. A workflow can also be started manually with **Actions → Deploy Hugo site to Pages → Run workflow**.

The local `baseURL` in `hugo.toml` is for development; the workflow overrides it for the published site. Hugo may report that `languageCode` is deprecated; this is currently a warning and does not fail the build.