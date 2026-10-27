import { defaultLocale, locales } from './locales.mjs';

export type Locale = 'cs' | 'en';
export { defaultLocale, locales };

/** Address of the web app. */
export const APP_URL = 'https://app.gotrasio.cz';

/** Name of each language in that language, for the language switch. */
export const localeNames: Record<Locale, string> = {
  cs: 'Čeština',
  en: 'English',
};

/**
 * UI texts of the site. Long texts (guide, legal pages) are Markdown in
 * src/content/. Every language must have the same keys as Czech.
 */
const cs = {
  'site.description':
    'Trasio — plánuj výlety pěšky i vlakem a autobusem. Spojení s limitem pěší docházky, plány, záznamy a mapa míst.',
  'site.tagline': 'plánuji · archivuji · sdílej',
  'nav.features': 'Co umí',
  'nav.guide': 'Návod',
  'nav.licenses': 'Licence',
  'nav.open': 'Otevřít Trasio',
  'nav.menu': 'Menu',
  'nav.language': 'Jazyk',
  'footer.product': 'Produkt',
  'footer.legal': 'Právní informace',
  'footer.terms': 'Podmínky užívání',
  'footer.privacy': 'Ochrana osobních údajů',
  'footer.cookies': 'Cookies',
  'footer.licenses': 'Licence a zdroje dat',
  'footer.mapData': 'Mapová data © přispěvatelé OpenStreetMap',
  'footer.rights': 'Trasio',

  'home.title': 'Trasio — výlety pěšky i veřejnou dopravou',
  'home.hero.eyebrow': 'Plánovač výletů pro Česko',
  'home.hero.title': 'Na výlet vlakem a pěšky. Bez auta, bez stresu.',
  'home.hero.lead':
    'Trasio najde spojení, ke kterému dojdeš. Nastavíš, kolik chceš jít pěšky, a Trasio hledá zastávky v tomto okruhu. Výlet si naplánuješ, projdeš a uložíš.',
  'home.hero.cta': 'Otevřít Trasio',
  'home.hero.secondary': 'Jak to funguje',
  'home.hero.note': 'Zdarma, ve webovém prohlížeči. Aplikace pro Android se připravuje.',
  'home.hero.alt': 'Trasio: spojení z Brna na hrad Pernštejn s pěšími úseky a mapou',

  'home.features.title': 'Co Trasio umí',
  'home.features.lead': 'Jedno místo pro celý výlet: od nápadu, přes spojení, až po záznam trasy.',
  'home.f.connections.title': 'Spojení s limitem chůze',
  'home.f.connections.text':
    'Hledá vlaky, autobusy a tramvaje v celém Česku. Ke každému spojení vidíš pěší úseky. Kolik půjdeš pěšky, určuješ ty.',
  'home.f.plans.title': 'Plány bez data',
  'home.f.plans.text':
    'Plán je šablona výletu: etapy, body, poznámky a doprava tam i zpět. Datum dostane až výlet, který opravdu projdeš.',
  'home.f.map.title': 'Turistická mapa',
  'home.f.map.text':
    'Vlastní mapa s reliéfem, vrstevnicemi, turistickými a cyklo trasami. Zastávky a místa přímo v mapě.',
  'home.f.places.title': 'Místa a hodnocení',
  'home.f.places.text':
    'Hrady, rozhledny, jeskyně, restaurace. Označ, co chceš navštívit a kde už jsi byl, a dej hodnocení.',
  'home.f.record.title': 'Záznam a archiv',
  'home.f.record.text':
    'Nahraj GPX nebo KML z hodinek. Porovnej plán se skutečnou trasou a výškovým profilem.',
  'home.f.share.title': 'Sdílení se soukromím',
  'home.f.share.text':
    'Sdílej výlet odkazem ke čtení nebo k úpravám. Začátek a konec trasy můžeš před ostatními skrýt.',

  'home.steps.title': 'Jak to funguje',
  'home.step1.title': 'Najdi spojení',
  'home.step1.text': 'Zadej odkud a kam. Trasio najde spojení i se zastávkami v okolí, ke kterým dojdeš pěšky.',
  'home.step2.title': 'Naplánuj výlet',
  'home.step2.text': 'Klikni body do mapy, přidej místa z okolí a poznámky. Doprava tam a zpět je součástí plánu.',
  'home.step3.title': 'Projdi a ulož',
  'home.step3.text': 'Výlet spusť, dokonči a nahraj záznam. Zůstane ti v archivu i s datem a statistikou.',

  'home.showcase.map.title': 'Mapa, kterou známe z cest',
  'home.showcase.map.text':
    'Turistická mapa Trasia vzniká z OpenStreetMap a výškových dat. Ukazuje značené trasy, reliéf a zastávky veřejné dopravy.',
  'home.showcase.map.alt': 'Mapa Trasia s turistickými trasami a zastávkami v okolí Brna',
  'home.showcase.plan.title': 'Plán, záznam, nebo obojí',
  'home.showcase.plan.text':
    'Detail výletu ukazuje plánovanou trasu, nahraný záznam a výškový profil. Body a etapy máš přehledně pod sebou.',
  'home.showcase.plan.alt': 'Detail výletu: etapa, body a výškový profil',
  'home.showcase.points.title': 'Místa z okolí trasy',
  'home.showcase.points.text':
    'U každého bodu vidíš zajímavá místa v okruhu 250 m až 2 km. Jedním klikem je přidáš do plánu.',
  'home.showcase.points.alt': 'Body etapy a místa z okolí s tlačítkem Přidat',

  'home.mobile.title': 'V mobilu i offline',
  'home.mobile.text':
    'Web funguje i v telefonu. Připravujeme aplikaci pro Android, která bude fungovat bez signálu a pošle trasu do hodinek.',
  'home.mobile.badge': 'Android — připravujeme',
  'home.mobile.altWeb': 'Trasio v mobilním prohlížeči: výsledek hledání spojení',
  'home.mobile.altApp': 'Návrh aplikace pro Android: detail místa',

  'home.open.title': 'Postaveno na otevřených datech',
  'home.open.text':
    'Jízdní řády, mapa i výšková data pocházejí z otevřených zdrojů. Celý systém běží na svobodném softwaru.',
  'home.open.link': 'Licence a zdroje dat',

  'home.cta.title': 'Kam vyrazíš o víkendu?',
  'home.cta.text': 'Vyzkoušej hledání spojení. Pro plány a výlety se přihlas.',

  'guide.title': 'Návod',
  'guide.lead': 'Jak Trasio používat: od prvního spojení po archiv výletů.',
  'guide.contents': 'Obsah návodu',
  'guide.back': 'Zpět na návod',
  'guide.prev': 'Předchozí',
  'guide.next': 'Další',

  'licenses.title': 'Licence a zdroje dat',
  'licenses.lead':
    'Trasio stojí na otevřených datech a svobodném softwaru. Tady je přehled zdrojů a jejich licencí.',
  'licenses.data': 'Data',
  'licenses.software': 'Software',
  'licenses.fonts': 'Písma a ikony',
  'licenses.name': 'Název',
  'licenses.use': 'K čemu',
  'licenses.license': 'Licence',

  'legal.draft':
    'Návrh textu. Před spuštěním ho musí zkontrolovat právník. Údaje v [hranatých závorkách] je třeba doplnit.',
  'legal.updated': 'Platné od',

  'notFound.title': 'Stránka nenalezena',
  'notFound.text': 'Tahle cesta nikam nevede. Zkus to z úvodní stránky.',
  'notFound.home': 'Na úvodní stránku',
  'skip': 'Přeskočit na obsah',
};

export type UiKey = keyof typeof cs;

const en: Record<UiKey, string> = {
  'site.description':
    'Trasio — plan hiking trips by train and bus. Journeys with a walking limit, plans, track records and a map of places.',
  'site.tagline': 'plan · archive · share',
  'nav.features': 'Features',
  'nav.guide': 'Guide',
  'nav.licenses': 'Licenses',
  'nav.open': 'Open Trasio',
  'nav.menu': 'Menu',
  'nav.language': 'Language',
  'footer.product': 'Product',
  'footer.legal': 'Legal',
  'footer.terms': 'Terms of use',
  'footer.privacy': 'Privacy policy',
  'footer.cookies': 'Cookies',
  'footer.licenses': 'Licenses and data sources',
  'footer.mapData': 'Map data © OpenStreetMap contributors',
  'footer.rights': 'Trasio',

  'home.title': 'Trasio — hiking trips by public transport',
  'home.hero.eyebrow': 'Trip planner for Czechia',
  'home.hero.title': 'Go hiking by train. No car, no stress.',
  'home.hero.lead':
    'Trasio finds journeys you can walk to. You set how far you want to walk, and Trasio looks for stops in this radius. Plan the trip, walk it and keep it.',
  'home.hero.cta': 'Open Trasio',
  'home.hero.secondary': 'How it works',
  'home.hero.note': 'Free, in your web browser. The Android app is in progress.',
  'home.hero.alt': 'Trasio: a journey from Brno to Pernštejn castle with walking legs and a map',

  'home.features.title': 'What Trasio does',
  'home.features.lead': 'One place for the whole trip: from the idea, through the journey, to the track record.',
  'home.f.connections.title': 'Journeys with a walking limit',
  'home.f.connections.text':
    'Finds trains, buses and trams in all of Czechia. Every journey shows its walking legs. You decide how far you walk.',
  'home.f.plans.title': 'Plans without a date',
  'home.f.plans.text':
    'A plan is a trip template: stages, points, notes and transport there and back. Only a trip you really walk gets a date.',
  'home.f.map.title': 'Hiking map',
  'home.f.map.text':
    'Our own map with relief, contour lines, hiking and cycling routes. Stops and places right on the map.',
  'home.f.places.title': 'Places and ratings',
  'home.f.places.text':
    'Castles, lookout towers, caves, restaurants. Mark what you want to visit and where you have been, and rate it.',
  'home.f.record.title': 'Records and archive',
  'home.f.record.text':
    'Upload GPX or KML from your watch. Compare the plan with the real track and the elevation profile.',
  'home.f.share.title': 'Sharing with privacy',
  'home.f.share.text':
    'Share a trip with a read or edit link. You can hide the start and the end of the route from others.',

  'home.steps.title': 'How it works',
  'home.step1.title': 'Find a journey',
  'home.step1.text': 'Enter from and to. Trasio also finds journeys with stops nearby that you can walk to.',
  'home.step2.title': 'Plan the trip',
  'home.step2.text': 'Click points on the map, add places nearby and notes. Transport there and back is part of the plan.',
  'home.step3.title': 'Walk it and keep it',
  'home.step3.text': 'Start the trip, finish it and upload the track. It stays in your archive with the date and stats.',

  'home.showcase.map.title': 'A map made for hiking',
  'home.showcase.map.text':
    'The Trasio hiking map is built from OpenStreetMap and elevation data. It shows marked trails, relief and public transport stops.',
  'home.showcase.map.alt': 'Trasio map with hiking routes and stops near Brno',
  'home.showcase.plan.title': 'Plan, record, or both',
  'home.showcase.plan.text':
    'The trip detail shows the planned route, the uploaded track and the elevation profile. Points and stages are in a clear list.',
  'home.showcase.plan.alt': 'Trip detail: stage, points and elevation profile',
  'home.showcase.points.title': 'Places along the route',
  'home.showcase.points.text':
    'For every point you see interesting places within 250 m to 2 km. One click adds them to the plan.',
  'home.showcase.points.alt': 'Stage points and places nearby with an Add button',

  'home.mobile.title': 'On your phone, also offline',
  'home.mobile.text':
    'The web works on your phone too. We are building an Android app that works without signal and sends the route to your watch.',
  'home.mobile.badge': 'Android — in progress',
  'home.mobile.altWeb': 'Trasio in a mobile browser: journey search results',
  'home.mobile.altApp': 'Android app design: place detail',

  'home.open.title': 'Built on open data',
  'home.open.text':
    'Timetables, the map and elevation data come from open sources. The whole system runs on free software.',
  'home.open.link': 'Licenses and data sources',

  'home.cta.title': 'Where will you go this weekend?',
  'home.cta.text': 'Try the journey search. Sign in for plans and trips.',

  'guide.title': 'Guide',
  'guide.lead': 'How to use Trasio: from your first journey to the trip archive.',
  'guide.contents': 'Guide contents',
  'guide.back': 'Back to the guide',
  'guide.prev': 'Previous',
  'guide.next': 'Next',

  'licenses.title': 'Licenses and data sources',
  'licenses.lead':
    'Trasio is built on open data and free software. Here is a list of the sources and their licenses.',
  'licenses.data': 'Data',
  'licenses.software': 'Software',
  'licenses.fonts': 'Fonts and icons',
  'licenses.name': 'Name',
  'licenses.use': 'Used for',
  'licenses.license': 'License',

  'legal.draft':
    'Draft text. A lawyer must check it before launch. Values in [square brackets] must be filled in.',
  'legal.updated': 'Valid from',

  'notFound.title': 'Page not found',
  'notFound.text': 'This path leads nowhere. Try the home page.',
  'notFound.home': 'Go to the home page',
  'skip': 'Skip to content',
};

const ui: Record<Locale, Record<UiKey, string>> = { cs, en };

/** Returns the text function for a language. */
export function useTranslations(lang: Locale) {
  return (key: UiKey) => ui[lang][key];
}

/** Path of a page in a language, for example localePath('en', 'guide/') → /en/guide/. */
export function localePath(lang: Locale, path = ''): string {
  return `/${lang}/${path.replace(/^\//, '')}`;
}

/** Same page in another language: replaces the first path segment. */
export function switchLocalePath(pathname: string, lang: Locale): string {
  const rest = pathname.split('/').slice(2).join('/');
  return localePath(lang, rest);
}

/** Static paths for pages that exist in every language. */
export function langPaths() {
  return (locales as Locale[]).map((lang) => ({ params: { lang } }));
}
