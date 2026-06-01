import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const defaultSiteUrl = 'https://agent-evolution.com';
const siteUrl = (process.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, '');
const siteHost = new URL(siteUrl).hostname;
const defaultCustomDomain = siteHost.endsWith('.github.io') ? '' : siteHost;
const expectedCustomDomain = (process.env.GITHUB_PAGES_CUSTOM_DOMAIN ?? defaultCustomDomain).trim();
const failures = [];

const read = (file) => readFileSync(file, 'utf8');
const htmlFiles = [];
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const canonicalPattern = new RegExp(`<link rel="canonical" href="${escapeRegex(siteUrl)}/`);
const conflictingCanonicalPattern = siteUrl.includes('agent-evolution.com')
  ? /https:\/\/shiyao-huang\.github\.io\/awesome-agent-evolution\b/
  : /https:\/\/agent-evolution\.com\b/;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full);
    else if (entry.endsWith('.html')) htmlFiles.push(full);
  }
}

if (!existsSync(dist)) failures.push('dist/ does not exist. Run npm run build first.');
else walk(dist);

const requiredFiles = ['robots.txt', 'sitemap-index.xml'];
for (const file of requiredFiles) {
  if (!existsSync(path.join(dist, file))) failures.push(`Missing ${file}`);
}

if (expectedCustomDomain && existsSync(path.join(dist, 'CNAME'))) {
  const cname = read(path.join(dist, 'CNAME')).trim();
  if (cname !== expectedCustomDomain) failures.push(`CNAME is ${cname}, expected ${expectedCustomDomain}`);
} else if (expectedCustomDomain) {
  failures.push('Missing CNAME while GITHUB_PAGES_CUSTOM_DOMAIN is set.');
} else if (existsSync(path.join(dist, 'CNAME'))) {
  failures.push('Unexpected CNAME; default deployment should stay on the GitHub Pages repository URL.');
}

if (existsSync(path.join(dist, 'robots.txt'))) {
  const robots = read(path.join(dist, 'robots.txt'));
  if (!robots.includes(`${siteUrl}/sitemap-index.xml`)) failures.push('robots.txt does not point to canonical sitemap.');
}

for (const file of htmlFiles) {
  const html = read(file);
  const rel = path.relative(dist, file);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) failures.push(`${rel}: missing useful title`);
  if (!/<meta name="description" content="[^"]{24,}"/.test(html)) failures.push(`${rel}: missing useful meta description`);
  if (!canonicalPattern.test(html)) failures.push(`${rel}: canonical does not use ${siteUrl}`);
  if (!/application\/ld\+json/.test(html)) failures.push(`${rel}: missing JSON-LD`);
  if (conflictingCanonicalPattern.test(html)) {
    failures.push(`${rel}: contains conflicting public domain`);
  }
}

if (existsSync(path.join(dist, 'sitemap-0.xml'))) {
  const sitemap = read(path.join(dist, 'sitemap-0.xml'));
  const locCount = (sitemap.match(/<loc>/g) || []).length;
  if (locCount === 0) failures.push('sitemap-0.xml contains no <loc> URLs.');
  if (!sitemap.includes(`<loc>${siteUrl}/`)) failures.push(`sitemap-0.xml does not use ${siteUrl}`);
}

if (!existsSync(path.join(dist, 'search', 'index.html'))) failures.push('Missing /search/ page while WebSite SearchAction is enabled.');

if (failures.length) {
  console.error(`SEO audit failed with ${failures.length} issue(s):`);
  for (const failure of failures.slice(0, 80)) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO audit passed: ${htmlFiles.length} HTML pages checked.`);
