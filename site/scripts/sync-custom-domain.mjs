import { existsSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const cnamePath = path.resolve('dist/CNAME');
const defaultSiteUrl = 'https://agent-evolution.com';
const publicSiteUrl = (process.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, '');
const siteHost = new URL(publicSiteUrl).hostname;
const defaultCustomDomain = siteHost.endsWith('.github.io') ? '' : siteHost;
const customDomain = (process.env.GITHUB_PAGES_CUSTOM_DOMAIN ?? defaultCustomDomain).trim();

if (customDomain) {
  writeFileSync(cnamePath, `${customDomain}\n`);
  console.log(`Wrote GitHub Pages CNAME for ${customDomain}`);
} else if (existsSync(cnamePath)) {
  rmSync(cnamePath);
  console.log('Removed GitHub Pages CNAME; using repository Pages URL.');
}
