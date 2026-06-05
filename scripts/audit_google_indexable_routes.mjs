#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distRoot = path.join(root, 'site', 'dist');
const reportJsonPath = path.join(root, 'reports', 'google-indexable-routes.json');
const reportMdPath = path.join(root, 'reports', 'google-indexable-routes.md');
const canonicalHost = 'https://agent-evolution.com';

const read = (file) => fs.readFileSync(file, 'utf8');
const exists = (file) => fs.existsSync(file);

const decodePath = (pathname) => {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
};

const extractAttr = (html, tagName, attrName, attrValue, wantedAttr = 'content') => {
  const escapedAttrValue = attrValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tagPattern = new RegExp(`<${tagName}\\b[^>]*\\b${attrName}=(["'])${escapedAttrValue}\\1[^>]*>`, 'i');
  const tag = html.match(tagPattern)?.[0];
  if (!tag) return '';
  return tag.match(new RegExp(`\\b${wantedAttr}=(["'])(.*?)\\1`, 'i'))?.[2] || '';
};

const canonicalFrom = (html) => extractAttr(html, 'link', 'rel', 'canonical', 'href');
const metaName = (html, name) => extractAttr(html, 'meta', 'name', name);
const metaProperty = (html, property) => extractAttr(html, 'meta', 'property', property);
const titleFrom = (html) => html.match(/<title>(.*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() || '';
const langFrom = (html) => html.match(/<html\s+lang=(["'])(.*?)\1/i)?.[2] || '';

const loadSitemapUrls = () => {
  const sitemapFiles = fs.readdirSync(distRoot).filter((name) => /^sitemap-\d+\.xml$/.test(name));
  const urls = new Set();
  for (const name of sitemapFiles) {
    const xml = read(path.join(distRoot, name));
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      urls.add(match[1]);
    }
  }
  return [...urls].sort();
};

const routeKind = (pathname) => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/en/')) return 'english';
  if (pathname.startsWith('/topics/')) return 'topic';
  if (pathname.startsWith('/blog/tag/')) return 'blog-tag';
  if (pathname.startsWith('/blog/')) return 'blog';
  if (pathname.startsWith('/research/')) return 'research';
  if (pathname.startsWith('/projects/')) return 'project-card';
  if (pathname.startsWith('/reports/projects/')) return 'project-report';
  if (pathname.startsWith('/reports/research/projects/')) return 'legacy-research-project-report';
  if (pathname.startsWith('/reports/papers/cross-domain/')) return 'paper-cross-domain-report';
  if (pathname.startsWith('/reports/survey-publication/')) return 'survey-publication';
  if (pathname.startsWith('/reports/')) return 'report-index-or-audit';
  if (pathname.startsWith('/survey/')) return 'survey';
  return 'site-page';
};

if (!exists(distRoot)) {
  throw new Error('site/dist is missing. Run `(cd site && npm run build)` before this audit.');
}

const sitemapUrls = loadSitemapUrls();
const routes = [];

for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname;
  const htmlPath = path.join(distRoot, decodePath(pathname), 'index.html');
  const failures = [];
  if (!exists(htmlPath)) {
    routes.push({
      url,
      pathname,
      kind: routeKind(pathname),
      htmlPath: path.relative(root, htmlPath),
      status: 'fail',
      failures: ['missing generated HTML asset']
    });
    continue;
  }

  const html = read(htmlPath);
  const canonical = canonicalFrom(html);
  const description = metaName(html, 'description');
  const robots = metaName(html, 'robots');
  const ogTitle = metaProperty(html, 'og:title');
  const ogDescription = metaProperty(html, 'og:description');
  const title = titleFrom(html);
  const lang = langFrom(html);
  const expectedCanonical = url.endsWith('/') ? url : `${url}/`;

  if (/noindex/i.test(robots)) failures.push('sitemap route emits noindex robots meta');
  if (canonical !== expectedCanonical) failures.push(`canonical mismatch: expected ${expectedCanonical}, got ${canonical || 'missing'}`);
  if (title.length < 20) failures.push('title missing or too short for search result context');
  if (description.length < 50) failures.push('meta description missing or too short');
  if (!ogTitle) failures.push('missing og:title');
  if (!ogDescription) failures.push('missing og:description');
  if (!html.includes('<main id="main">')) failures.push('missing main content landmark');
  if (!lang) failures.push('missing html lang');

  routes.push({
    url,
    pathname,
    kind: routeKind(pathname),
    htmlPath: path.relative(root, htmlPath),
    title,
    description,
    lang,
    canonical,
    status: failures.length ? 'fail' : 'pass',
    failures
  });
}

const failedRoutes = routes.filter((route) => route.status === 'fail');
const kindCounts = routes.reduce((counts, route) => {
  counts[route.kind] = (counts[route.kind] || 0) + 1;
  return counts;
}, {});

const report = {
  generated_at: new Date().toISOString(),
  canonical_host: canonicalHost,
  global_status: failedRoutes.length ? 'fail' : 'pass',
  counts: {
    sitemap_urls: sitemapUrls.length,
    routes_checked: routes.length,
    passed: routes.length - failedRoutes.length,
    failed: failedRoutes.length
  },
  route_kind_counts: kindCounts,
  failed_routes: failedRoutes,
  routes
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const failureLines = failedRoutes.length
  ? failedRoutes.map((route) => `- ${route.pathname}: ${route.failures.join('; ')}`)
  : ['- None.'];

const kindLines = Object.entries(kindCounts)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([kind, count]) => `| ${kind} | ${count} |`);

const md = [
  '# Google Indexable Routes Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Canonical host: ${canonicalHost}`,
  '',
  `Global status: **${report.global_status.toUpperCase()}**`,
  '',
  '## Scope',
  '',
  'This audit checks every HTML route exposed through the generated sitemap. A route is treated as a Google-indexable asset only when it has generated HTML, no `noindex` robots meta, a matching canonical URL, a useful title and description, Open Graph title/description metadata, a main landmark, and an HTML language tag.',
  '',
  '## Metrics',
  '',
  '| Metric | Count |',
  '|---|---:|',
  `| Sitemap URLs | ${report.counts.sitemap_urls} |`,
  `| Routes checked | ${report.counts.routes_checked} |`,
  `| Passed | ${report.counts.passed} |`,
  `| Failed | ${report.counts.failed} |`,
  '',
  '## Route Kinds',
  '',
  '| Kind | Count |',
  '|---|---:|',
  ...kindLines,
  '',
  '## Failures',
  '',
  ...failureLines,
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

console.log(JSON.stringify({
  status: report.global_status,
  sitemap_urls: report.counts.sitemap_urls,
  routes_checked: report.counts.routes_checked,
  passed: report.counts.passed,
  failed: report.counts.failed,
  report: path.relative(root, reportMdPath)
}, null, 2));

if (report.global_status !== 'pass') {
  process.exitCode = 1;
}
