# Trasio Web

Presentation website of [Trasio](https://github.com/pandasoft-zz/trasio):
what Trasio does, a user guide, licenses and legal pages. The app itself
runs at [app.gotrasio.cz](https://app.gotrasio.cz); this site is planned for
[gotrasio.cz](https://gotrasio.cz).

Static site built with [Astro](https://astro.build), hosted on Cloudflare
(Workers static assets). Languages: Czech and English, ready for more.

## Quick Start

```bash
nvm use            # Node 24, see .nvmrc (Astro needs >= 22.23.4)
npm ci
npm run dev        # http://localhost:4321/cs/
npm run check      # type check
npm run build      # static files in dist/
npm run preview    # serve dist/
```

## Structure

```
src/
├── pages/[lang]/          # every page exists in every language
│   ├── index.astro        # landing page
│   ├── guide/             # user guide (from src/content/guide)
│   ├── legal/[slug].astro # terms, privacy, cookies (from src/content/legal)
│   └── licenses.astro     # licenses (from src/data/licenses.ts)
├── pages/index.astro      # picks the language and redirects
├── content/{guide,legal}/<lang>/*.md
├── i18n/                  # languages, UI texts, helpers
├── data/licenses.ts       # data sources and software with licenses
├── components/, layouts/, styles/
└── assets/screens/        # screenshots (app.gotrasio.cz, design handoffs)
public/_headers            # security and cache headers for Cloudflare
wrangler.jsonc             # Cloudflare config
```

## Documentation

Start at [docs/index.md](docs/index.md). Agents read [AGENTS.md](AGENTS.md)
first.
