import type { CollectionEntry } from 'astro:content';
import { entriesIn, splitId } from './content';
import type { Locale } from './ui';

export type LegalEntry = CollectionEntry<'legal'>;

/** The parts of a legal entry id like "cs/terms/2026-11-14". */
export function legalId(entry: LegalEntry): { doc: string; version: string } {
  const [doc, version] = splitId(entry.id).slug.split('/');
  return { doc, version };
}

/** The version name of a date: its ISO day, which is also the file name. */
export function versionOf(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Every version of every legal text of a language, by text, newest first. */
export async function legalDocsIn(lang: Locale): Promise<Map<string, LegalEntry[]>> {
  const docs = new Map<string, LegalEntry[]>();
  for (const entry of await entriesIn('legal', lang)) {
    const { doc } = legalId(entry);
    docs.set(doc, [...(docs.get(doc) ?? []), entry]);
  }
  for (const versions of docs.values()) {
    versions.sort((a, b) => b.data.validFrom.getTime() - a.data.validFrom.getTime());
  }
  return docs;
}

/**
 * The valid version: the newest one that is not a draft. Only when a text has
 * no published version yet, its newest draft.
 */
export function currentOf(versions: LegalEntry[]): LegalEntry {
  return versions.find((v) => !v.data.draft) ?? versions[0];
}

/** A date as the page language writes it ("14. 11. 2026", "14 November 2026"). */
export function formatDay(date: Date, lang: Locale): string {
  return new Intl.DateTimeFormat(lang === 'cs' ? 'cs-CZ' : 'en-GB', {
    day: 'numeric',
    month: lang === 'cs' ? 'numeric' : 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
