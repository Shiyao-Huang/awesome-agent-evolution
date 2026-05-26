import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://agent-evolution.com',
  output: 'static',
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
