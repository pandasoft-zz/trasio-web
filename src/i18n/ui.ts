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
    'Trasio — plánuj výlety na jeden i více dní, s poznámkami, místy po cestě a spojením tam i zpět. Sbírej navštívená místa.',
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

  'home.title': 'Trasio — plánování výletů',
  'home.hero.eyebrow': 'Plánovač výletů pro Česko',
  'home.hero.title': 'Naplánuj si celý výlet. I na víc dní.',
  'home.hero.lead':
    'V Trasiu poskládáš výlet na jeden den i na celý týden: trasu po dnech a etapách, poznámky k bodům, místa po cestě a spojení tam i zpět. Pak ho projdeš a uložíš do archivu.',
  'home.hero.cta': 'Otevřít Trasio',
  'home.hero.secondary': 'Co Trasio umí',
  'home.hero.note': 'Zdarma na webu a v aplikaci pro Android. Mapa, spojení a místa pokrývají jen Českou republiku.',
  'home.hero.alt': 'Turistická mapa Trasia s trasami a zastávkami v okolí Brna',

  'home.pillars.title': 'Tři věci, jedno místo',
  'home.pillars.lead': 'Trasio použiješ na plánování výletu, na sbírání míst i jen na hledání spojení. Nejvíc ti dá, když se to spojí.',
  'home.pillar.plan.badge': 'Hlavní funkce',
  'home.pillar.plan.title': 'Plánování výletů',
  'home.pillar.plan.text': 'Jednodenní i vícedenní výlety. Dny, etapy, body trasy, poznámky a doprava v jednom plánu.',
  'home.pillar.places.title': 'Místa a návštěvy',
  'home.pillar.places.text': 'Hrady, rozhledny, jeskyně. Označ, co chceš vidět, a Trasio si pamatuje, kde už jsi byl.',
  'home.pillar.journeys.title': 'Hledání spojení',
  'home.pillar.journeys.text': 'Vlaky a autobusy po celém Česku, se zastávkami, ke kterým dojdeš pěšky.',

  'home.plan.eyebrow': 'Plánování výletů',
  'home.plan.title': 'Výlet na jeden den i na celý týden',
  'home.plan.text':
    'Plán je tvoje šablona výletu. Nemá datum, takže ho použiješ, kdy se ti hodí, i víckrát. Datum dostane až výlet, který opravdu projdeš.',
  'home.plan.b1': 'Dny a etapy — pěšky i na kole, trasa vede po cestách.',
  'home.plan.b2': 'Poznámky k bodům: vstupné, otevírací doba, kde se najíst.',
  'home.plan.b3': 'Místa z okolí každého bodu přidáš jedním klikem.',
  'home.plan.b4': 'Doprava tam, mezi etapami a zpět je součástí plánu.',
  'home.plan.b5': 'Délka, čas, převýšení a výškový profil.',
  'home.plan.b6': 'Sdílení odkazem, plánování ve dvou, export do GPX a do kalendáře.',
  'home.plan.alt': 'Detail výletu: etapa, body a výškový profil',
  'home.plan.altPoints': 'Body etapy s poznámkou a místy z okolí',

  'home.places.eyebrow': 'Místa a návštěvy',
  'home.places.title': 'Chceš vidět všechny hrady v okolí Brna?',
  'home.places.text':
    'Vyber si, co chceš vidět. Vyfiltruj hrady na mapě, ulož si je do seznamu Chci navštívit a postupně je odškrtávej. Trasio si pamatuje, kde jsi byl a s jakým výletem.',
  'home.places.b1': 'Hrady, zříceniny, rozhledny, jeskyně, koupaliště, pivovary a další typy.',
  'home.places.b2': 'Vlastní seznam Chci navštívit: tvoje cíle na mapě i v seznamu. Co projdeš, označíš jako Navštíveno.',
  'home.places.b3': 'Vlastní hodnocení a soukromá poznámka ke každému místu.',
  'home.places.b4': 'Z místa rovnou Spojení sem, nebo Přidat do trasy.',
  'home.places.alt': 'Detail místa: hrad Valdštejn s hodnocením a stavem Navštíveno',

  'home.journeys.eyebrow': 'Hledání spojení',
  'home.journeys.title': 'Najde spojení, které jinde neuvidíš',
  'home.journeys.text':
    'Běžné vyhledávače začínají na nejbližší zastávce. Trasio se dívá šíř: prohledá všechny zastávky, ke kterým dojdeš pěšky, a porovná spojení ze všech. Často tak najde rychlejší cestu, než jakou ti nabídnou jinde. Funguje i samostatně, bez účtu.',
  'home.journeys.b1': 'Ty určíš, kolik chceš jít pěšky. Trasio hledá ve všech zastávkách v tomto okruhu.',
  'home.journeys.b2': 'Deset minut chůze navíc často znamená rychlý vlak místo pomalého autobusu.',
  'home.journeys.b3': 'Funguje i do přírody: k hradu, rozhledně nebo na začátek trasy, ne jen na zastávku.',
  'home.journeys.alt': 'Spojení z Brna na hrad Pernštejn s pěšími úseky a mapou',

  'home.together.title': 'Nejlepší je to dohromady',
  'home.together.lead': 'Místa, trasa i doprava se potkají v jednom plánu.',
  'home.step1.title': 'Vyber cíl',
  'home.step1.text': 'Místo z mapy nebo ze seznamu míst, která chceš navštívit.',
  'home.step2.title': 'Poskládej trasu',
  'home.step2.text': 'Body, dny a etapy. K bodům poznámky a místa z okolí.',
  'home.step3.title': 'Přidej dopravu',
  'home.step3.text': 'Spoj tam a zpět, ke kterému dojdeš. Na den v týdnu, nebo na konkrétní datum.',
  'home.step4.title': 'Projdi a ulož',
  'home.step4.text': 'Výlet spusť, dokonči, nahraj záznam a označ navštívená místa.',

  'home.android.badge': 'Aplikace pro Android',
  'home.android.title': 'Trasio v telefonu. I bez signálu.',
  'home.android.text':
    'Aplikace pro Android má výlety, místa, mapu i spojení. Data čte z telefonu, takže funguje i tam, kde není signál. Změny pošle na server, až bude spojení.',
  'home.android.b1': 'Offline turistická mapa.',
  'home.android.b2': 'Záznam trasy přes GPS telefonu.',
  'home.android.b3': 'Výlety a místa jsou stejné jako na webu.',
  'home.android.wearables':
    'Nositelná zařízení: připravujeme posílání trasy do hodinek a stahování záznamu zpět. Jako první Garmin.',
  'home.android.altWeb': 'Trasio v telefonu: výsledek hledání spojení',
  'home.android.altApp': 'Aplikace pro Android: detail místa',

  'home.open.title': 'Postaveno na otevřených datech',
  'home.open.text':
    'Jízdní řády, mapa i výšková data pocházejí z otevřených zdrojů. Celý systém běží na svobodném softwaru. Co jsme pro Trasio postavili sami, dáváme zpátky jako open source, aby to mohl použít i někdo další.',
  'home.open.map.title': 'Vlastní turistická a topografická mapa',
  'home.open.map.text':
    'Mapu si Trasio vykresluje samo. Je to turistická a topografická mapa Česka se stínovaným reliéfem, vrstevnicemi po 10 metrech, značenými trasami KČT a cyklotrasami. Vzniká z OpenStreetMap a lidarových výškových dat. Celý postup výroby je open source.',
  'home.open.map.link': 'Czech Tourist Map',
  'home.open.motis.title': 'Hotový server pro hledání spojení',
  'home.open.motis.text':
    'Spojení hledá MOTIS. Pro něj chystáme balíčky s daty české veřejné dopravy: vlaky, celostátní a regionální autobusy, PID a IDS JMK. Každý týden se sestaví znovu. Stačí jeden příkaz docker run a máš vlastní vyhledávač spojení pro celé Česko. Licence MIT.',
  'home.open.motis.link': 'motis-bundles',
  'home.open.link': 'Licence a zdroje dat',

  'home.cta.title': 'Kam vyrazíš o víkendu?',
  'home.cta.text': 'Naplánuj první výlet. Hledání spojení a mapa fungují i bez přihlášení.',

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
    'Návrh textu. Před spuštěním ho musí zkontrolovat právník.',
  'legal.updated': 'Platné od',

  'notFound.title': 'Stránka nenalezena',
  'notFound.text': 'Tahle cesta nikam nevede. Zkus to z úvodní stránky.',
  'notFound.home': 'Na úvodní stránku',
  'skip': 'Přeskočit na obsah',
};

export type UiKey = keyof typeof cs;

const en: Record<UiKey, string> = {
  'site.description':
    'Trasio — plan one-day and multi-day trips with notes, places along the way and journeys there and back. Collect the places you visit.',
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

  'home.title': 'Trasio — trip planning',
  'home.hero.eyebrow': 'Trip planner for Czechia',
  'home.hero.title': 'Plan your whole trip. Even for many days.',
  'home.hero.lead':
    'In Trasio you build a trip for one day or a whole week: the route by days and stages, notes on points, places along the way and journeys there and back. Then you walk it and keep it in your archive.',
  'home.hero.cta': 'Open Trasio',
  'home.hero.secondary': 'What Trasio does',
  'home.hero.note': 'Free on the web and in the Android app. The map, journeys and places cover only the Czech Republic.',
  'home.hero.alt': 'Trasio hiking map with routes and stops near Brno',

  'home.pillars.title': 'Three things, one place',
  'home.pillars.lead': 'Use Trasio to plan trips, to collect places, or just to find a journey. It gives you the most when it all comes together.',
  'home.pillar.plan.badge': 'Main feature',
  'home.pillar.plan.title': 'Trip planning',
  'home.pillar.plan.text': 'One-day and multi-day trips. Days, stages, route points, notes and transport in one plan.',
  'home.pillar.places.title': 'Places and visits',
  'home.pillar.places.text': 'Castles, lookout towers, caves. Mark what you want to see, and Trasio remembers where you have been.',
  'home.pillar.journeys.title': 'Journey search',
  'home.pillar.journeys.text': 'Trains and buses across Czechia, with stops you can walk to.',

  'home.plan.eyebrow': 'Trip planning',
  'home.plan.title': 'A trip for one day or a whole week',
  'home.plan.text':
    'A plan is your trip template. It has no date, so you use it when it suits you, and more than once. Only a trip you really walk gets a date.',
  'home.plan.b1': 'Days and stages — on foot or by bike, the route follows paths.',
  'home.plan.b2': 'Notes on points: entry fee, opening hours, where to eat.',
  'home.plan.b3': 'Add places near any point with one click.',
  'home.plan.b4': 'Transport there, between stages and back is part of the plan.',
  'home.plan.b5': 'Length, time, climb and elevation profile.',
  'home.plan.b6': 'Share with a link, plan together, export to GPX and to your calendar.',
  'home.plan.alt': 'Trip detail: stage, points and elevation profile',
  'home.plan.altPoints': 'Stage points with a note and places nearby',

  'home.places.eyebrow': 'Places and visits',
  'home.places.title': 'Want to see all the castles around Brno?',
  'home.places.text':
    'Choose what you want to see. Filter castles on the map, save them to your Want to visit list and tick them off one by one. Trasio remembers where you have been and on which trip.',
  'home.places.b1': 'Castles, ruins, lookout towers, caves, pools, breweries and more.',
  'home.places.b2': 'Your own Want to visit list: your goals on the map and in the list. What you see, you mark as Visited.',
  'home.places.b3': 'Your own rating and a private note for every place.',
  'home.places.b4': 'From a place go straight to Journey here or Add to route.',
  'home.places.alt': 'Place detail: Valdštejn castle with a rating and the Visited state',

  'home.journeys.eyebrow': 'Journey search',
  'home.journeys.title': 'Finds journeys you will not see elsewhere',
  'home.journeys.text':
    'Common journey planners start at the nearest stop. Trasio looks wider: it searches all stops you can walk to and compares journeys from all of them. So it often finds a faster way than you get elsewhere. It also works on its own, without an account.',
  'home.journeys.b1': 'You decide how far you want to walk. Trasio searches all stops in this radius.',
  'home.journeys.b2': 'Ten more minutes on foot often means a fast train instead of a slow bus.',
  'home.journeys.b3': 'It also works into nature: to a castle, a lookout tower or the start of a route, not only to a stop.',
  'home.journeys.alt': 'A journey from Brno to Pernštejn castle with walking legs and a map',

  'home.together.title': 'Best when it comes together',
  'home.together.lead': 'Places, route and transport meet in one plan.',
  'home.step1.title': 'Pick a goal',
  'home.step1.text': 'A place from the map, or from your list of places to visit.',
  'home.step2.title': 'Build the route',
  'home.step2.text': 'Points, days and stages. Notes and places nearby on the points.',
  'home.step3.title': 'Add transport',
  'home.step3.text': 'A journey there and back that you can walk to. For a day of the week, or an exact date.',
  'home.step4.title': 'Walk it and keep it',
  'home.step4.text': 'Start the trip, finish it, upload the track and mark the places you visited.',

  'home.android.badge': 'Android app',
  'home.android.title': 'Trasio on your phone. Also without signal.',
  'home.android.text':
    'The Android app has trips, places, the map and journeys. It reads data from the phone, so it works where there is no signal. It sends changes to the server when there is a connection.',
  'home.android.b1': 'Offline hiking map.',
  'home.android.b2': 'Track recording with the phone GPS.',
  'home.android.b3': 'The same trips and places as on the web.',
  'home.android.wearables':
    'Wearables: we are working on sending the route to your watch and getting the track back. Garmin comes first.',
  'home.android.altWeb': 'Trasio on a phone: journey search results',
  'home.android.altApp': 'Android app: place detail',

  'home.open.title': 'Built on open data',
  'home.open.text':
    'Timetables, the map and elevation data come from open sources. The whole system runs on free software. What we built for Trasio ourselves, we give back as open source, so others can use it too.',
  'home.open.map.title': 'Our own hiking and topographic map',
  'home.open.map.text':
    'Trasio renders its own map. It is a hiking and topographic map of Czechia with relief shading, contour lines every 10 metres, marked KČT hiking trails and cycling routes. It is made from OpenStreetMap and lidar elevation data. The whole build is open source.',
  'home.open.map.link': 'Czech Tourist Map',
  'home.open.motis.title': 'A ready-to-run journey planner',
  'home.open.motis.text':
    'Journeys are found by MOTIS. We build images of it with Czech public transport data: trains, national and regional buses, Prague (PID) and South Moravian (IDS JMK) transport. They are rebuilt every week. One docker run command gives you your own journey planner for all of Czechia. MIT license.',
  'home.open.motis.link': 'motis-bundles',
  'home.open.link': 'Licenses and data sources',

  'home.cta.title': 'Where will you go this weekend?',
  'home.cta.text': 'Plan your first trip. Journey search and the map also work without signing in.',

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
    'Draft text. A lawyer must check it before launch.',
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
