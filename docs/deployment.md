# Deployment

The site is static. `npm run build` writes `dist/`, and Cloudflare serves it
as [Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
(`wrangler.jsonc`, no Worker script).

## Automatic

`.github/workflows/deploy.yml` runs `wrangler deploy` after every push to
`main`. It needs two repository secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API token with the "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID` | Account id from the Cloudflare dashboard |

`.github/workflows/check.yml` type-checks and builds every pull request.

## Manual

```bash
npx wrangler login
npm run deploy
```

## Domain

Add the custom domain `gotrasio.cz` (and `www.gotrasio.cz`) to the
`trasio-web` Worker in the Cloudflare dashboard (Settings › Domains &
Routes). `app.`, `api.` and `auth.gotrasio.cz` stay with the app.

## Headers

`public/_headers` sets security headers (CSP without third-party hosts) and
a long cache for `/_astro/*`, whose file names contain a hash. Unknown paths
get `dist/404.html` (`not_found_handling`).

## Dependency updates

Renovate (`renovate.json`) opens pull requests for npm packages, Node and
GitHub Actions. Minor and patch updates merge themselves when CI is green;
majors and 0.x versions wait for a human. A merge to `main` deploys, so an
automerged update goes live without a human.

GitHub auto-merge needs a ruleset on `main` (Settings › Rules › Rulesets)
with the required check `build`, and "Allow auto-merge" on in Settings ›
General.
