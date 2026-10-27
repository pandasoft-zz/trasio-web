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

// Legal pages: src/content/legal/<lang>/<slug>.md.
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    validFrom: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guide, legal };
