# Website Architecture

## Goals

- Premium, long-lived brand website for MKVSNX.
- Static hosting on GitHub Pages.
- Easy expansion for unlimited future applications.
- Shared design language with app-specific content.

## Folder Structure

```text
assets/
  css/
  data/
  icons/
  images/
  js/
about/
contact/
privacy/
support/
terms/
build-book/
pro-kp-astrology/
weather-atmos-3d/
appel/
games/
fitness/
health/
media/
index.html
manifest.webmanifest
robots.txt
sitemap.xml
README.md
```

## Content Model

`assets/data/apps.json` is the source of truth for:

- App name
- Slug
- Status
- Platforms
- Store availability
- Category
- Key features
- Privacy/terms/support paths

## Shared UI System

- `assets/css/styles.css`: tokens, layout, typography, components, responsive behavior.
- `assets/js/site.js`: navigation, reveal animations, button ripple, active links, footer year.
- `assets/js/apps.js`: app-card rendering and app-data helpers.

## Page Types

- Company pages:
  - Home
  - About
  - Contact
  - Support
  - Privacy hub
  - Terms
- App pages:
  - Product overview
  - Privacy policy
  - Terms and conditions
  - Support

## Scalability Rule

To add a new app in the future:

1. Add one new app folder.
2. Add one app entry in `assets/data/apps.json`.
3. Reuse shared styles and scripts without redesigning the site.
