// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales } from './src/i18n/locales.mjs';

export default defineConfig({
  site: 'https://gotrasio.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales,
    defaultLocale,
    // Every language has its own prefix (/cs/, /en/). The root page picks
    // the language, see src/pages/index.astro.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // The root page only redirects to a language, so it is not listed.
      filter: (page) => page !== 'https://gotrasio.cz/',
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.map((l) => [l, l])),
      },
    }),
  ],
});
