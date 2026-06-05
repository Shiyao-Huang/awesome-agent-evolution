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
    author: z.string().default('aha team'),
    primarySources: z.array(z.string()).default([]),
    claimStatus: z.enum(['known', 'inferred', 'unverified']).default('unverified'),
    claimBoundary: z.string().default('No primary-source metadata has been attached to this public note yet; treat it as an editorial reading guide until source fields are reviewed.')
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
    status: z.enum(['draft', 'reviewed', 'featured', 'candidate']).default('draft'),
    primarySources: z.array(z.string()).default([]),
    claimStatus: z.enum(['known', 'inferred', 'unverified']).default('unverified'),
    claimBoundary: z.string().default('No primary-source metadata has been attached to this public research note yet; treat it as a research reading note until source fields are reviewed.')
  })
});

const projectReports = defineCollection({
  loader: glob({ pattern: '*.md', base: './public/reports/projects' }),
  schema: z.object({}).passthrough()
});

const legacyResearchProjectReports = defineCollection({
  loader: glob({ pattern: '*.md', base: './public/reports/research/projects' }),
  schema: z.object({}).passthrough()
});

const paperCrossDomainReports = defineCollection({
  loader: glob({ pattern: '*.md', base: './public/reports/papers/cross-domain' }),
  schema: z.object({}).passthrough()
});

const surveyPublication = defineCollection({
  loader: glob({ pattern: '[0-9][0-9]-*.md', base: '../reports/survey-publication' }),
  schema: z.object({}).passthrough()
});

export const collections = { blog, research, projectReports, legacyResearchProjectReports, paperCrossDomainReports, surveyPublication };
