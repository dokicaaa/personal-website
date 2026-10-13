# Jakov Spirovski — Portfolio v2

A hand-written, one-page portfolio with a monochrome visual direction, oversized
type, and a floating portrait navigation pill. The page prioritizes mobile apps,
robotics leadership, and website work, followed by About and Contact.

GSAP and ScrollTrigger handle the title entrance, scroll reveals, and app-preview
transitions. Inter Tight and IBM Plex Mono are self-hosted through Fontsource.
There are no Webflow or jQuery runtime dependencies.

## Branches

- `main`: the original Webflow site, unchanged by this setup.
- `codex/portfolio-v2`: the independent v2 development branch.

V2 starts from original commit `7acb509a4901d8b6afcc974e0592508e6f14446b`.
The generated HTML, CSS, JavaScript, and About page remain available on `main`
and in Git history. The new portfolio is a single page. `public/about.html`
forwards old About links to the new page's About section.

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
index.html              Page content, project links, and section structure
src/styles.css          Typography, responsive layouts, and design tokens
src/main.js             Font imports, entry point, year, and Skopje clock
src/navigation.js       Mobile dialog, anchor navigation, active section
src/motion.js           GSAP effects and motion preferences
src/project-preview.js  Desktop app previews and pointer-following imagery
assets/projects/        Optimized WebP images from the original portfolio
assets/                 Portraits; the original files remain unchanged
public/                 Favicon and legacy About redirect
vite.config.js          Build and development configuration
```

Add new sections directly to `index.html` and give their styles descriptive names.
Add scripts in `src/` as needed. Never edit generated files in `dist/`.

The retained projects are UniFinance, GoDutch, Sync, Pulse-Stop, and EarthHub.
EarthHub is labeled as a concept. Client website names, links, and screenshots
have not been supplied yet, so no client projects are invented or shown as
placeholders. Source URLs for migrated imagery are in `assets/projects/sources.json`.

On screens up to 800px, project images appear inside each project and navigation
uses a native modal dialog with focus containment, Escape, and a close button.
Desktop previews respond to scrolling and keyboard focus; hover adds a floating
image. The native mouse pointer and native document scrolling remain available.

The Pause motion button disables animation and restores visible content. Its
preference is saved locally when storage is available. The site also respects
system reduced-motion preferences, which take priority over the page control.
Images are displayed in grayscale with CSS; the source image colors are preserved.

## Production check

```sh
npm run build
npm run preview
```

The build is written to ignored `dist/`. Relative asset paths allow the built
page to work under a preview subdirectory.

Run `npm run format` to format the hand-written source with Prettier.

## Publishing

This setup is local only: nothing is pushed, merged, or deployed, and no deployment
workflow is added. Keep the existing site's publishing source on `main` while
developing v2. A separate preview deployment can be configured later.

The existing root `CNAME` is retained unchanged as a reference to the current
site's domain. It is not copied to `dist/`. When v2 is ready to launch, configure
the host to publish `dist/` and deliberately select the preview or production
domain before switching the live site over.
