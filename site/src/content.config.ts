import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default('Self Evolve Research Network')
  })
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    arxiv: z.string().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'reviewed', 'featured', 'candidate']).default('draft')
  })
});

export const collections = { blog, research };
