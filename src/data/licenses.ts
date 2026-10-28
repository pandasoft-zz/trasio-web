import type { Locale } from '../i18n/ui';

/** One source or component that Trasio uses, with its license. */
export interface LicenseItem {
  name: string;
  url: string;
  use: Record<Locale, string>;
  license: string;
  licenseUrl?: string;
}

/**
 * Sources of data. Keep this list in line with the attribution in the app
 * (trasio/docs/reference/poi-v2.md §5, transit-feeds.md, CzechTouristMap).
 */
export const data: LicenseItem[] = [
  {
    name: 'OpenStreetMap',
    url: 'https://www.openstreetmap.org/copyright',
    use: {
      cs: 'Podklad turistické mapy, turistické a cyklo trasy, místa (POI).',
      en: 'Base of the hiking map, hiking and cycling routes, places (POI).',
    },
    license: 'ODbL 1.0',
    licenseUrl: 'https://opendatacommons.org/licenses/odbl/1-0/',
  },
  {
    name: "Sonny's LiDAR DTM of Europe",
    url: 'https://sonny.4lima.de',
    use: { cs: 'Stínování reliéfu a vrstevnice.', en: 'Relief shading and contour lines.' },
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    name: 'ČÚZK — DMR 4G',
    url: 'https://geoportal.cuzk.gov.cz/',
    use: { cs: 'Výškový model Česka (zdroj dat Sonny).', en: 'Elevation model of Czechia (source of the Sonny data).' },
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
  },
  {
    name: 'Copernicus DEM',
    url: 'https://spacedata.copernicus.eu/',
    use: { cs: 'Výšková data mimo pokrytí Sonny.', en: 'Elevation data outside the Sonny coverage.' },
    license: '© DLR e.V., © Airbus Defence and Space GmbH, Copernicus',
    licenseUrl: 'https://spacedata.copernicus.eu/documents/20123/121286/CSCDA_ESA_Mission-specific+Annex_31_Oct_22.pdf',
  },
  {
    name: 'CIS JŘ — Ministerstvo dopravy',
    url: 'https://portal.cisjr.cz/',
    use: { cs: 'Celostátní jízdní řády autobusů a vlaků.', en: 'National bus and train timetables.' },
    license: 'Otevřená data / open data',
    licenseUrl: 'https://data.gov.cz/',
  },
  {
    name: 'CZPTT GTFS (data.jr.ggu.cz)',
    url: 'https://data.jr.ggu.cz',
    use: { cs: 'Jízdní řády vlaků ve formátu GTFS.', en: 'Train timetables as GTFS.' },
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    name: 'gtfs-processor',
    url: 'https://github.com/0xaa55h/gtfs-processor',
    use: { cs: 'Celostátní GTFS autobusů sloučené z JDF.', en: 'National bus GTFS merged from JDF.' },
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    name: 'PID, IDS JMK',
    url: 'https://data.pid.cz/',
    use: {
      cs: 'Jízdní řády integrovaných systémů Praha a Jihomoravský kraj.',
      en: 'Timetables of the Prague and South Moravian integrated systems.',
    },
    license: '[ověřit / verify]',
  },
  {
    name: 'Mapy.cz API (Seznam.cz)',
    url: 'https://developer.mapy.com/',
    use: {
      cs: 'Pěší a cyklo trasy mezi body, volitelná podkladová mapa.',
      en: 'Walking and cycling routes between points, optional base map.',
    },
    license: 'Mapy.cz API terms',
    licenseUrl: 'https://developer.mapy.com/cs/podminky-pouzivani/',
  },
  {
    name: 'OpenTopoMap',
    url: 'https://opentopomap.org/',
    use: { cs: 'Záložní podkladová mapa.', en: 'Fallback base map.' },
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    name: 'Wikidata',
    url: 'https://www.wikidata.org/',
    use: { cs: 'Doplňující údaje o místech.', en: 'Extra facts about places.' },
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    name: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/',
    use: {
      cs: 'Fotografie míst. Autor a licence jsou u každé fotky.',
      en: 'Photos of places. Every photo shows its author and license.',
    },
    license: 'CC BY / CC BY-SA / PD',
  },
];

/** Main free software that runs Trasio. */
export const software: LicenseItem[] = [
  {
    name: 'MOTIS',
    url: 'https://github.com/motis-project/motis',
    use: { cs: 'Vyhledávání spojení veřejné dopravy.', en: 'Public transport journey search.' },
    license: 'MIT',
  },
  {
    name: 'motis-bundles',
    url: 'https://github.com/pandasoft-zz/motis-bundles',
    use: {
      cs: 'Naše hotové obrazy MOTIS s daty české veřejné dopravy.',
      en: 'Our ready-to-run MOTIS images with Czech public transport data.',
    },
    license: 'MIT',
  },
  {
    name: 'Czech Tourist Map',
    url: 'https://pandasoft-zz.github.io/CzechTouristMap/',
    use: {
      cs: 'Naše turistická a topografická mapa (PMTiles a styl MapLibre).',
      en: 'Our hiking and topographic map (PMTiles and a MapLibre style).',
    },
    license: '[doplnit / add]',
  },
  {
    name: 'MapLibre GL JS',
    url: 'https://maplibre.org/',
    use: { cs: 'Zobrazení mapy na webu.', en: 'Map display on the web.' },
    license: 'BSD-3-Clause',
  },
  {
    name: 'PMTiles',
    url: 'https://github.com/protomaps/PMTiles',
    use: { cs: 'Formát dlaždic vlastní mapy.', en: 'Tile format of our own map.' },
    license: 'BSD-3-Clause',
  },
  {
    name: 'Planetiler',
    url: 'https://github.com/onthegomap/planetiler',
    use: { cs: 'Výroba vektorových dlaždic mapy.', en: 'Builds the vector map tiles.' },
    license: 'Apache-2.0',
  },
  {
    name: 'PostgreSQL + PostGIS',
    url: 'https://postgis.net/',
    use: { cs: 'Databáze s prostorovými daty.', en: 'Database with spatial data.' },
    license: 'PostgreSQL License, GPL-2.0',
  },
  {
    name: 'Zitadel',
    url: 'https://zitadel.com/',
    use: { cs: 'Přihlášení a účty uživatelů.', en: 'Sign-in and user accounts.' },
    license: 'AGPL-3.0 / Apache-2.0',
  },
  {
    name: 'React, Vite, Ant Design',
    url: 'https://react.dev/',
    use: { cs: 'Webová aplikace.', en: 'Web app.' },
    license: 'MIT',
  },
  {
    name: 'Go, Echo',
    url: 'https://echo.labstack.com/',
    use: { cs: 'Serverové API.', en: 'Server API.' },
    license: 'BSD-3-Clause, MIT',
  },
  {
    name: 'Kotlin, Jetpack Compose',
    url: 'https://developer.android.com/compose',
    use: { cs: 'Aplikace pro Android.', en: 'Android app.' },
    license: 'Apache-2.0',
  },
  {
    name: 'Astro',
    url: 'https://astro.build/',
    use: { cs: 'Tento web.', en: 'This website.' },
    license: 'MIT',
  },
];

/** Fonts and icons. */
export const fonts: LicenseItem[] = [
  {
    name: 'Nunito',
    url: 'https://github.com/googlefonts/nunito',
    use: { cs: 'Nadpisy.', en: 'Headings.' },
    license: 'SIL OFL 1.1',
    licenseUrl: 'https://openfontlicense.org/',
  },
  {
    name: 'DM Sans',
    url: 'https://github.com/googlefonts/dm-fonts',
    use: { cs: 'Text.', en: 'Body text.' },
    license: 'SIL OFL 1.1',
    licenseUrl: 'https://openfontlicense.org/',
  },
  {
    name: 'Lucide',
    url: 'https://lucide.dev/',
    use: { cs: 'Ikony v aplikaci a na webu.', en: 'Icons in the app and on the web.' },
    license: 'ISC',
  },
  {
    name: 'Maki, Temaki',
    url: 'https://github.com/mapbox/maki',
    use: { cs: 'Ikony typů míst.', en: 'Place type icons.' },
    license: 'CC0 1.0',
  },
];
