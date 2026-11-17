# Content

## Landing page

`src/pages/[lang]/index.astro`. Texts are the `home.*` keys in
`src/i18n/ui.ts`.

## Guide

One Markdown file per page and language in `src/content/guide/<lang>/`.
Front matter: `title`, `description`, `order` (reading order). The same file
name in every language is the same page. The guide uses the Czech names of
buttons from the app (`trasio/apps/web/src/i18n/cs.json`); the English guide
adds a translation in brackets, because the app is Czech only for now.

## Legal pages

Every version of a legal text is its own file and its own page
([ADR 002](decisions/002-versioned-legal-texts.md)):

- File: `src/content/legal/<lang>/<doc>/<valid-from>.md` (`doc` is `terms`,
  `privacy` or `cookies`). Front matter: `title`, `description`, `validFrom`
  (the same day as the file name), `draft`, `changes` (a short list of what
  is new against the version before; for the first version "První
  zveřejněná verze.").
- `/<lang>/legal/<doc>/` shows the newest published version;
  `/<lang>/legal/<doc>/<valid-from>/` shows one version for good. Every
  page lists all versions.
- A published version (`draft: false` on `main`) never changes. Every
  change, also a typo, is a new file. A draft may change and may be renamed
  to its real date until it is published. `npm run check` checks this.
- Links inside the text are absolute (`/cs/legal/privacy/`).
- What is still open is marked with `TODO` comments (`<!-- TODO: … -->` in
  Markdown), never in the visible text. The Czech text is the binding one.
- After new terms of use are published, the operator registers the
  permanent address of the version in the app admin, and every user accepts
  it again.

## Licenses

`src/data/licenses.ts`: data sources, software, fonts and icons. Keep it in
line with the attribution in the app and the sources in
`trasio/docs/reference/` and `CzechTouristMap/README.md`.

## Images

`src/assets/screens/`:

| File | Source |
|---|---|
| `web-connections.jpg`, `web-map.jpg`, `mobile-connections.png` | Screenshots of app.gotrasio.cz (Playwright, 2× / 3× scale) |
| `guide-*.jpg` | Screenshots of the stage app (trasio-stage.pandasoft.cz) with the test account, Playwright, 1280×800 at 2× scale (the trip list at 1440×900). The example trip is "Pernštejn z Nedvědice". The journey, stop and vehicle screenshots show live data, so take them again at a time when trains and trams run. |
| `design-trip-detail.jpg` | `trasio/docs/design_handoff_vylety/screenshots/` |
| `design-stage-points.png` | `trasio/docs/design_handoff_body_etapy/screenshots/` (cropped) |
| `design-android-place.png` | `trasio-android/docs/design_handoff_android_v2/screenshots/` (cropped) |

The screenshots show the Czech app, also on the English pages. Replace them
when the app has an English version.

Brand files in `src/assets/brand/` are copies of `trasio/docs/brand/`.
