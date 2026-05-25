import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://shiyao-huang.github.io',
  base: '/awesome-agent-evolution',
  output: 'static',
  integrations: [mdx(), react(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
