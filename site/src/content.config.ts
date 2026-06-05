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
    author: z.string().default('aha team')
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

const projectReports = defineCollection({
  loader: glob({ pattern: '*.md', base: './public/reports/projects' }),
  schema: z.object({}).passthrough()
});

export const collections = { blog, research, projectReports };
