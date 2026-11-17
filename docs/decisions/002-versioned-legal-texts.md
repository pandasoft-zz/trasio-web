# 002. Every Version of a Legal Text Has Its Own Permanent Address and Never Changes

## Status

Accepted (2026-11-17). Asked for by the Trasio photos epic
(pandasoft-zz/trasio#357) and its ADR 024 (a change of what users agree to
is a task in this repository).

## Context

Until now each legal text (terms of use, privacy policy, cookies) was one
Markdown file per language, with a `validFrom` date. A change overwrote the
file, so the old text was gone from the site.

The Trasio app now asks every user to accept the current terms of use, and
to accept them again after every new version. It keeps which version a user
accepted and when, and it links that version. So a user must be able to see,
at any time, the exact text they accepted, and the operator must be able to
show it.

A user also has to understand quickly what a new version changes. A full
text alone, or a word diff, is hard to read.

## Decision

1. **One file per version:** `src/content/legal/<lang>/<doc>/<valid-from>.md`,
   for example `cs/terms/2026-11-17.md`. `validFrom` in the front matter is
   the same day as the file name. Every version exists in every language;
   the Czech text is the binding one.
2. **Every version has its own permanent address:**
   `/<lang>/legal/<doc>/<valid-from>/`. The app registers this address, not
   the address of the current text.
3. **A published version never changes and is never deleted.** A version
   is published when it is on `main` with `draft: false`. Every change of a
   published text, also a typo, is a new version. A draft (`draft: true`)
   may still change, and may be renamed to its real date before it is
   published.
4. **`/<lang>/legal/<doc>/` shows the valid text:** the newest published
   version. Every page of a version shows the list of all versions, marks
   the valid one and drafts, and says on an old version that it is no
   longer valid.
5. **Every version says what changed:** `changes` in the front matter is a
   short list, written for people, of what is new against the version
   before. It is shown above the text. No automatic diff.
6. **A check guards the rules:** `scripts/check-legal.mjs` (part of
   `npm run check`, so of CI) fails when a published version of `main` was
   changed or deleted, when a file name and `validFrom` differ, or when a
   version is missing in a language.
7. Links inside a legal text are absolute (`/cs/legal/privacy/`), so they
   work from the address of every version.

## Consequences

- Publishing new terms: add a file per language with `draft: true`, review
  it, set the real date and `draft: false`, merge. Then register the
  permanent address in the app admin (Administrace › Podmínky užívání);
  every user then accepts the new version.
- The site keeps every version for good. Old addresses keep working.
- The texts from before this decision became the first versions
  (`terms/2026-11-14`, `privacy/2026-11-14`, `cookies/2026-11-12`); nobody
  had accepted them in the app yet.
