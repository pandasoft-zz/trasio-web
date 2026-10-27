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

`src/content/legal/<lang>/{terms,privacy,cookies}.md`. Front matter:
`title`, `description`, `validFrom`, `draft`. A draft shows a warning box.
Values in `[square brackets]` must be filled in before launch. The Czech
text is the binding one.

## Licenses

`src/data/licenses.ts`: data sources, software, fonts and icons. Keep it in
line with the attribution in the app and the sources in
`trasio/docs/reference/` and `CzechTouristMap/README.md`.

## Images

`src/assets/screens/`:

| File | Source |
|---|---|
| `web-connections.jpg`, `web-map.jpg`, `mobile-connections.png` | Screenshots of app.gotrasio.cz (Playwright, 2× / 3× scale) |
| `design-trip-detail.jpg` | `trasio/docs/design_handoff_vylety/screenshots/` |
| `design-stage-points.png` | `trasio/docs/design_handoff_body_etapy/screenshots/` (cropped) |
| `design-android-place.png` | `trasio-android/docs/design_handoff_android_v2/screenshots/` (cropped) |

The screenshots show the Czech app, also on the English pages. Replace them
when the app has an English version.

Brand files in `src/assets/brand/` are copies of `trasio/docs/brand/`.
