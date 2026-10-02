# website-main — universeinvedors.tech Root Site

The root website for the universeinvedors.tech platform.

**Live URL:** `https://universeinvedors.tech/`

This repository is deployed automatically to Cloudflare Pages on every push to `main`.

---

## Setup checklist

Before going live, replace all placeholders:

| Placeholder              | Replace with                             |
|--------------------------|------------------------------------------|
| `universeinvedors.tech`              | Your actual domain (e.g. `example.com`) |
| `[YOUR_EMAIL@EXAMPLE.COM]` | Your real contact email               |
| `[DATE]`                 | Today's date in privacy.html / terms.html |
| `[OWNER NAME]`           | Your name or company name               |

## Required assets (add before deploying)

```
assets/icons/favicon.ico          — 32×32 ICO
assets/icons/favicon.svg          — Scalable SVG
assets/icons/apple-touch-icon.png — 180×180 PNG
assets/images/og-image.png        — 1200×630 PNG (social sharing preview)
```

Generate favicons at [favicon.io](https://favicon.io).

## Deployment

Connected to Cloudflare Pages. Push to `main` → auto-deploys.

See `PROJECT_SETUP.md` in the repository root for full deployment instructions.

## Files

```
├── _headers       — HTTP security & cache headers (Cloudflare Pages)
├── _redirects     — www → apex redirect (Cloudflare Pages)
├── index.html
├── about.html
├── contact.html
├── privacy.html
├── terms.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── ads.txt        — Update with real AdSense ID after approval
├── css/style.css
├── js/main.js
└── assets/
    ├── images/
    └── icons/
```
