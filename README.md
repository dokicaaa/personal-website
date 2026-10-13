# Jakov Spirovski — Portfolio v2

A hand-written, one-page portfolio with a monochrome interface, full-color imagery, oversized
type, and a floating portrait navigation pill. The page prioritizes mobile apps,
robotics leadership, and website work, followed by About and Contact.

GSAP and ScrollTrigger handle the staggered letter entrances, scroll reveals,
and app-preview transitions. Inter Tight is self-hosted through Fontsource and used
throughout, including navigation, captions, and other small text.
There are no Webflow or jQuery runtime dependencies.

## Branches

- `main`: the production v2 site; pushes automatically build and deploy.
- `codex/portfolio-v2`: the v2 development branch.
- `webflow-v1`: a release tag preserving the original Webflow site.

V2 starts from original commit `7acb509a4901d8b6afcc974e0592508e6f14446b`.
The original generated HTML, CSS, JavaScript, and About page remain available at
the `webflow-v1` tag and in Git history. The new portfolio is a single page. `public/about.html`
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
Keep the server running while reviewing the page: images further down load on
demand, so stopping the server can leave an open tab with missing images. Reload
an older tab after restarting the server to pick up the latest page and asset URLs.
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
src/robotics-gallery.js Five-photo bento gallery and accessible full-screen viewer
src/typography.js       Pointer-reactive letter weights with stable spacing
src/cursor.js           Decorative desktop cursor and contextual link labels
assets/projects/        Optimized WebP images from the original portfolio
assets/                 Portraits; the original files remain unchanged
public/                 Favicon and legacy About redirect
vite.config.js          Build and development configuration
```

Add new sections directly to `index.html` and give their styles descriptive names.
Add scripts in `src/` as needed. Never edit generated files in `dist/`.

The mobile apps are Base42, UniFinance, GoDutch, and Sync, in that order; Pulse-Stop
remains in the hardware section. Base42 uses the supplied mockup, optimized to a
transparent WebP in `assets/projects/base42-app/`, with the original PNG preserved.
The website showcase features Grizzli Igloos and FIRST Global Macedonia, using the
supplied laptop mockups in `assets/websites/mockups/` and linking to
`https://grizzlyigloos.com/` and `https://firstglobal.mk/`. EarthHub has been removed
from the showcase. Source URLs for migrated imagery are in `assets/projects/sources.json`.

The robotics bento uses five supplied competition photos. Optimized WebP variants
are in `assets/robotics/optimized/`, with source names, dimensions, and file sizes
in its `manifest.json`. Each photo has a 640px version and a larger version for
responsive loading; images load lazily, and the viewer loads the larger image
when opened. The supplied originals remain in `assets/robotics/`.
The gallery supports keyboard navigation, Escape to close, touch swipes, and
focus restoration. Scroll reveals and hover zoom respect the motion preference.

On screens up to 800px, project images appear inside each project and navigation
uses a native modal dialog with focus containment, Escape, and a close button.
Desktop previews respond to scrolling and keyboard focus; hover adds a floating
image with a small velocity-based tilt that settles when the pointer stops.
The hero and contact headings soften individual letter weights near the pointer;
the original word reserves its width to prevent layout movement. A decorative
cursor ring expands to View or Email on relevant links, and hides during keyboard
navigation. These pointer effects only run on fine-pointer desktop devices.
The native mouse pointer and native document scrolling remain available.

The Pause motion button disables animation and restores visible content. Its
preference is saved locally when storage is available. The site also respects
system reduced-motion preferences, which take priority over the page control.
Images are displayed in their original colors. About uses a shortened version of
the original portfolio bio in the animated statement, followed by the portrait
and toolkit. All experience roles, including the Base42 software development internship,
live in one timeline under About; the Robotics section focuses
on the team and projects.

## Production check

```sh
npm run build
npm run preview
```

The build is written to ignored `dist/`. Relative asset paths allow the built
page to work under a preview subdirectory.

Run `npm run format` to format the hand-written source with Prettier.

## Publishing

Production is hosted on GitHub Pages at [jakovspirovski.dev](https://jakovspirovski.dev/).
The repository's Pages publishing source is **GitHub Actions**. The workflow in
`.github/workflows/deploy.yml` runs `npm ci` and `npm run build` on Node.js 24,
then deploys only `dist/`. Deployment is restricted to `main`; development branches
do not replace the live site. The workflow can also be run manually from the
repository's Actions tab.

The custom domain and enforced HTTPS stay configured in GitHub Pages settings.
The root `CNAME` is retained as a reference; the Actions deployment does not rely
on a `CNAME` file in the build output. DNS remains pointed at GitHub Pages.

Before publishing, run the production check above. Commit the approved changes,
merge them into `main`, and push `main`. Check the workflow's deployment result
and the live domain after each release.

### Restoring the original site

The `webflow-v1` tag points to `7acb509a4901d8b6afcc974e0592508e6f14446b`, the
original site's last production commit. To restore it without rewriting history,
create a branch from that tag, then change Pages to **Deploy from a branch** and
select that branch's root directory. Keep the existing custom domain and HTTPS
settings. To return to v2, switch Pages back to **GitHub Actions** and run the
deployment workflow on `main`.
