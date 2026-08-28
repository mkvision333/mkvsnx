# MKVSNX Developer Website

Production-ready static website for MKVSNX at `https://mkvsnx.com/`, built with HTML5, CSS3, and vanilla JavaScript.

## Architecture

- `index.html` is the homepage.
- `assets/data/apps.json` stores the app catalog and shared metadata.
- `assets/css/` contains the design system and shared page styles.
- `assets/js/` contains shared behavior, app rendering, and page bootstrapping.
- Each app lives in its own folder with:
  - `index.html`
  - `privacy.html`
  - `terms.html`
  - `support.html`
- Shared company pages live in:
  - `about/`
  - `contact/`
  - `privacy/`
  - `support/`
  - `terms/`

## Domain and GitHub Pages Deployment

1. Push this repository to GitHub.
2. Open repository `Settings`.
3. Open `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose your publishing branch and `/ (root)`.
6. Configure the custom domain as `mkvsnx.com`; the root `CNAME` file preserves this setting.
7. Save and wait for the deployment to complete.

## GitHub Pages Compatibility

- All internal links use relative paths.
- All shared assets use relative paths from each page depth.
- No build step, package manager, or framework is required.

## Adding a New App

1. Create a new app folder at the repository root.
2. Add `index.html`, `privacy.html`, `terms.html`, and `support.html`.
3. Add the new app entry to `assets/data/apps.json`.
4. Add the app to `sitemap.xml`.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static file server.
