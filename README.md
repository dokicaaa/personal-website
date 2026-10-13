# Jakov Spirovski — Portfolio v2

A minimal, hand-written starting point for the next portfolio. The redesign and
project sections are still to come. The starter reuses only the original name,
role, portrait, and contact links; it has no Webflow or jQuery dependencies.

## Branches

- `main`: the original Webflow site, unchanged by this setup.
- `codex/portfolio-v2`: the independent v2 development branch.

V2 starts from original commit `7acb509a4901d8b6afcc974e0592508e6f14446b`.
The generated HTML, CSS, JavaScript, and About page remain available on `main`
and in Git history. The new starter is a single page.

Commit or stash your work before switching branches:

```sh
git switch main
git switch codex/portfolio-v2
```

## Develop locally

Use Node.js 22.12+ or a supported Node.js 20 release (20.19+). This setup was
verified with Node.js 24.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`.
Vite supplies the development server and build tools; the site itself uses plain
HTML, CSS, and JavaScript with no UI framework.

## Source layout

```text
index.html           Page content and semantic structure
src/styles.css       Shared styles, colors, spacing, and responsive rules
src/main.js          CSS entry point and small browser behaviors
assets/              Original local portraits
public/              Files copied directly to the build, such as the favicon
vite.config.js       Build and development configuration
```

Add new sections directly to `index.html` and give their styles descriptive names.
Add scripts in `src/` as needed. Never edit generated files in `dist/`.

## Production check

```sh
npm run build
npm run preview
```

The build is written to ignored `dist/`. Relative asset paths allow the built
page to work under a preview subdirectory.

## Publishing

This setup is local only: nothing is pushed, merged, or deployed, and no deployment
workflow is added. Keep the existing site's publishing source on `main` while
developing v2. A separate preview deployment can be configured later.

The existing root `CNAME` is retained unchanged as a reference to the current
site's domain. It is not copied to `dist/`. When v2 is ready to launch, configure
the host to publish `dist/` and deliberately select the preview or production
domain before switching the live site over.
