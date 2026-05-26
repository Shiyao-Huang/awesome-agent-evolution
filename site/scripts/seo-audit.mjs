import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const siteUrl = 'https://agent-evolution.com';
const failures = [];

const read = (file) => readFileSync(file, 'utf8');
const htmlFiles = [];
const oldPagesUrlPattern = /https:\/\/shiyao-huang\.github\.io\/awesome-agent-evolution\b/;
const oldBasePathAttributePattern = /\b(?:href|src|content|action)=["']\/awesome-agent-evolution\//;

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

const requiredFiles = ['robots.txt', 'sitemap-index.xml', 'CNAME'];
for (const file of requiredFiles) {
  if (!existsSync(path.join(dist, file))) failures.push(`Missing ${file}`);
}

if (existsSync(path.join(dist, 'CNAME'))) {
  const cname = read(path.join(dist, 'CNAME')).trim();
  if (cname !== 'agent-evolution.com') failures.push(`CNAME is ${cname}, expected agent-evolution.com`);
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
  if (!/<link rel="canonical" href="https:\/\/agent-evolution\.com\//.test(html)) failures.push(`${rel}: canonical does not use agent-evolution.com`);
  if (!/application\/ld\+json/.test(html)) failures.push(`${rel}: missing JSON-LD`);
  if (oldPagesUrlPattern.test(html) || oldBasePathAttributePattern.test(html)) {
    failures.push(`${rel}: still contains old GitHub Pages publishing path`);
  }
}

if (!existsSync(path.join(dist, 'search', 'index.html'))) failures.push('Missing /search/ page while WebSite SearchAction is enabled.');

if (failures.length) {
  console.error(`SEO audit failed with ${failures.length} issue(s):`);
  for (const failure of failures.slice(0, 80)) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`SEO audit passed: ${htmlFiles.length} HTML pages checked.`);
