import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { readdirSync, statSync } from 'node:fs';

const defaultSiteUrl = 'https://agent-evolution.com';
const publicSiteUrl = (process.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, '');
const siteUrl = new URL(publicSiteUrl);
const basePath = siteUrl.pathname.replace(/\/$/, '');
const publicRoot = `${siteUrl.origin}${basePath || ''}/`;
const toPublicUrl = (pathname) => new URL(pathname.replace(/^\//, ''), publicRoot).href;
const markdownSlugs = (dir, pattern) => {
  if (!statSync(dir, { throwIfNoEntry: false })?.isDirectory()) return [];
  return readdirSync(dir)
    .filter((file) => pattern.test(file))
    .map((file) => file.replace(/\.md$/, ''))
    .sort();
};
const projectReportSlugs = markdownSlugs(new URL('./public/reports/projects/', import.meta.url), /^(?!index\.md$).+\.md$/i);
const surveyPublicationSlugs = markdownSlugs(new URL('../reports/survey-publication/', import.meta.url), /^[0-9][0-9]-.*\.md$/);
const sitemapCustomPages = [
  ...projectReportSlugs.map((slug) => toPublicUrl(`/reports/projects/${slug}/`)),
  ...surveyPublicationSlugs.map((slug) => toPublicUrl(`/reports/survey-publication/${slug}/`))
];

export default defineConfig({
  site: siteUrl.origin,
  base: basePath || undefined,
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      customPages: sitemapCustomPages,
      filter: (page) => !page.endsWith('/retrospective/')
    }),
    react()
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
