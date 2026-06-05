import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const defaultSiteUrl = 'https://agent-evolution.com';
const publicSiteUrl = (process.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, '');
const siteUrl = new URL(publicSiteUrl);
const basePath = siteUrl.pathname.replace(/\/$/, '');
const noindexSitemapRoutes = [
  '/mapping-audit/',
  '/reports/en-cn-mapping-audit/',
  '/reports/projects/',
  '/reports/research/projects/',
  '/reports/survey-publication/',
  '/retrospective/'
];
const isSitemapIndexableRoute = (page) => {
  const pathname = new URL(page).pathname;
  return !noindexSitemapRoutes.some((route) => pathname === route || pathname.startsWith(route));
};

export default defineConfig({
  site: siteUrl.origin,
  base: basePath || undefined,
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: isSitemapIndexableRoute
    }),
    react()
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
