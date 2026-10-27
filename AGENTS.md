# AI Agent Instructions

`trasio-web` is the static presentation website of Trasio. It does not talk
to the Trasio API. The app is in
[pandasoft-zz/trasio](https://github.com/pandasoft-zz/trasio) and
[pandasoft-zz/trasio-android](https://github.com/pandasoft-zz/trasio-android).

Read [docs/index.md](docs/index.md) first.

## Repository Language

Code, comments, docs and commit messages are simple technical English (A2).
Czech text is only in the Czech content: `src/i18n/ui.ts` (the `cs` object)
and `src/content/*/cs/`.

## Hard Rules

- Static output only. No server code, no Cloudflare Worker script.
- Every page exists in every language. A new UI text goes into every
  language in `src/i18n/ui.ts`; a new Markdown page gets a file in every
  `src/content/<collection>/<lang>/` folder.
- Never hardcode a UI string in a component. Use `useTranslations`.
- Use the design tokens in `src/styles/global.css`. They are the same as the
  app's (`trasio/apps/web/src/styles/tokens.css`). Do not invent new colors.
- No third-party requests from the page: no Google Fonts, no analytics, no
  CDN scripts. Fonts come from `@fontsource/*`. The cookie page says the
  site has no cookies — keep it true.
- Images go to `src/assets/` and are shown with `astro:assets` (`Image`),
  so Astro makes WebP in several sizes.
- Legal texts are drafts (`draft: true`) until a lawyer checks them.
- Use a mature library instead of own code.
- No component versions in docs.

## Task Workflow

1. Branch from `main`.
2. Commit with Conventional Commits (`feat:`, `fix:`, `docs:`, …).
3. `npm run check && npm run build` must pass (same as CI).
4. Look at the changed pages (`npm run preview`) at desktop and phone width.
5. Open a PR to `main` with a summary and a test plan.
