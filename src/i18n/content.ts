import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './ui';

type Name = 'guide' | 'legal';

/** Splits an entry id like "cs/connections" into language and slug. */
export function splitId(id: string): { lang: Locale; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Locale, slug: rest.join('/') };
}

/** All entries of a collection in one language. */
export async function entriesIn<N extends Name>(name: N, lang: Locale): Promise<CollectionEntry<N>[]> {
  const all = (await getCollection(name)) as CollectionEntry<N>[];
  return all.filter((e) => splitId(e.id).lang === lang);
}

/** Guide pages of a language, in reading order. */
export async function guideIn(lang: Locale) {
  const pages = await entriesIn('guide', lang);
  return pages.sort((a, b) => a.data.order - b.data.order);
}
