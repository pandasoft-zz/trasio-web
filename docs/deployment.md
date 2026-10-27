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
