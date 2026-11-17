// Checks the rules of the legal texts (docs/decisions/002-versioned-legal-texts.md):
//
// 1. A file is src/content/legal/<lang>/<doc>/<valid-from>.md, and its
//    validFrom is the same day as its name.
// 2. Every version exists in every language.
// 3. A published version (draft: false on the base branch) is never changed
//    or deleted. The base is origin/main, or LEGAL_BASE.
//
// Run by `npm run check` (and so by CI). Exit code 1 when a rule is broken.
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { locales } from '../src/i18n/locales.mjs';

const root = join(import.meta.dirname, '..');
const legalDir = join(root, 'src', 'content', 'legal');
const errors = [];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const frontMatter = (text) => text.replace(/\r\n/g, '\n').split('---\n')[1] ?? '';
const field = (fm, name) => fm.match(new RegExp(`^${name}:\\s*"?([^"\\n]*)"?\\s*$`, 'm'))?.[1];

// 1. Names and dates.
const versionsByLang = new Map(locales.map((l) => [l, new Set()]));
for (const file of walk(legalDir)) {
  const rel = relative(legalDir, file).split(sep).join('/');
  const m = rel.match(/^([a-z]{2})\/([a-z-]+)\/(\d{4}-\d{2}-\d{2})\.md$/);
  if (!m) {
    errors.push(`${rel}: must be <lang>/<doc>/<YYYY-MM-DD>.md`);
    continue;
  }
  const [, lang, doc, version] = m;
  const validFrom = field(frontMatter(readFileSync(file, 'utf8')), 'validFrom');
  if (validFrom !== version) errors.push(`${rel}: validFrom ${validFrom} is not the file name ${version}`);
  versionsByLang.get(lang)?.add(`${doc}/${version}`) ?? errors.push(`${rel}: unknown language ${lang}`);
}

// 2. The same versions in every language.
const all = new Set([...versionsByLang.values()].flatMap((s) => [...s]));
for (const [lang, versions] of versionsByLang) {
  for (const v of all) if (!versions.has(v)) errors.push(`${lang}/${v}.md is missing`);
}

// 3. Published versions of the base never change.
const base = process.env.LEGAL_BASE ?? 'origin/main';
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' });
let baseFiles = null;
try {
  baseFiles = git('ls-tree', '-r', '--name-only', base, '--', 'src/content/legal').split('\n').filter(Boolean);
} catch {
  console.warn(`check-legal: no ${base} to compare with; skipping the immutability check`);
}
for (const path of baseFiles ?? []) {
  // Files of the layout before ADR 002 (one file per text) had no versions.
  if (!/^src\/content\/legal\/[a-z]{2}\/[a-z-]+\/\d{4}-\d{2}-\d{2}\.md$/.test(path)) continue;
  const old = git('show', `${base}:${path}`);
  if (field(frontMatter(old), 'draft') !== 'false') continue;
  const now = join(root, ...path.split('/'));
  if (!existsSync(now)) {
    errors.push(`${path}: a published version was deleted`);
  } else if (readFileSync(now, 'utf8').replace(/\r\n/g, '\n') !== old.replace(/\r\n/g, '\n')) {
    errors.push(`${path}: a published version was changed; make a new version instead`);
  }
}

if (errors.length > 0) {
  console.error('check-legal:\n  ' + errors.join('\n  '));
  process.exit(1);
}
console.log(`check-legal: ${all.size} versions in ${locales.length} languages are fine`);
