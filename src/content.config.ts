import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Guide pages: src/content/guide/<lang>/<slug>.md. The same slug in every
// language is the same page.
const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

// Legal texts: src/content/legal/<lang>/<doc>/<valid-from>.md, one file per
// version (ADR 002). A published version never changes; a change is a new
// file. `changes` says in a few points what is new against the version
// before.
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    validFrom: z.coerce.date(),
    draft: z.boolean().default(false),
    changes: z.array(z.string()).min(1),
  }),
});

export const collections = { guide, legal };
