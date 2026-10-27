# 001. Astro, Static Output, Cloudflare Workers Static Assets

## Status

Accepted (2026-10-27).

## Context

Trasio needs a presentation website: features, a user guide, licenses and
legal pages, in Czech and English, later more languages. The site has no
user data and no API calls. It should be cheap to host and easy to edit as
text.

## Decision

- **Astro** with static output. It has built-in i18n routing, content
  collections for Markdown with a typed front matter schema, and image
  optimisation (WebP in several sizes). It sends no JavaScript by default.
- **Cloudflare Workers static assets** for hosting. Cloudflare already
  serves the Trasio domains; static assets are free and need no server.
- **Self-hosted fonts** (`@fontsource`) and no analytics, so the site sets
  no cookies and needs no consent banner.

## Consequences

- Every page is generated for every language at build time.
- Adding a language is a config change plus translated files
  ([i18n.md](../i18n.md)).
- Interactive features (for example a live demo of the planner) would need
  extra work; for now the site links to app.gotrasio.cz.
