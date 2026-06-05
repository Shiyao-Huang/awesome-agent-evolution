import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

const defaultSiteUrl = 'https://agent-evolution.com';
const publicSiteUrl = (process.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, '');
const siteUrl = new URL(publicSiteUrl);
const basePath = siteUrl.pathname.replace(/\/$/, '');

export default defineConfig({
  site: siteUrl.origin,
  base: basePath || undefined,
  output: 'static',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.endsWith('/retrospective/')
    }),
    react()
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
