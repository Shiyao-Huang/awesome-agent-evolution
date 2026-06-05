#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distRoot = path.join(root, 'site', 'dist');
const reportJsonPath = path.join(root, 'reports', 'public-i18n-route-audit.json');
const reportMdPath = path.join(root, 'reports', 'public-i18n-route-audit.md');
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
const titleFrom = (html) => html.match(/<title>(.*?)<\/title>/i)?.[1]?.replace(/\s+/g, ' ').trim() || '';
const langFrom = (html) => html.match(/<html\s+lang=(["'])(.*?)\1/i)?.[2] || '';
const alternateLinks = (html) => {
  const links = [];
  for (const match of html.matchAll(/<link\b[^>]*\brel=(["'])alternate\1[^>]*>/gi)) {
    const tag = match[0];
    const hreflang = tag.match(/\bhreflang=(["'])(.*?)\1/i)?.[2];
    const href = tag.match(/\bhref=(["'])(.*?)\1/i)?.[2];
    if (hreflang && href) links.push({ hreflang, href, pathname: new URL(href, canonicalHost).pathname });
  }
  return links;
};

const loadSitemapUrls = () => {
  const sitemapFiles = fs.readdirSync(distRoot).filter((name) => /^sitemap-\d+\.xml$/.test(name));
  const urls = [];
  for (const name of sitemapFiles) {
    const xml = read(path.join(distRoot, name));
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      urls.push(match[1]);
    }
  }
  return Array.from(new Set(urls)).sort();
};

const routeKind = (pathname) => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/en/')) return 'english';
  if (pathname.startsWith('/topics/')) return 'topic';
  if (pathname.startsWith('/blog/tag/')) return 'blog-tag';
  if (pathname.startsWith('/blog/')) return 'blog';
  if (pathname.startsWith('/research/')) return 'research';
  if (pathname.startsWith('/projects/')) return 'project-card';
  if (pathname.startsWith('/reports/')) return 'report-index-or-audit';
  if (pathname.startsWith('/survey/')) return 'survey';
  return 'site-page';
};

const importantRouteOrder = [
  '/',
  '/en/',
  '/topics/',
  '/en/topics/',
  '/paper/',
  '/projects/',
  '/reports/',
  '/value-lsh/',
  '/star-growth/',
  '/evolve-agi-index/',
  '/resource-library/',
  '/survey/',
  '/blog/',
  '/research/',
  '/graph/'
];

if (!exists(distRoot)) {
  throw new Error('site/dist is missing. Run `(cd site && npm run build)` before this audit.');
}

const sitemapUrls = loadSitemapUrls();
const routes = [];
const missingHtml = [];

for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname;
  const htmlPath = path.join(distRoot, decodePath(pathname), 'index.html');
  if (!exists(htmlPath)) {
    missingHtml.push({ url, pathname, htmlPath: path.relative(root, htmlPath) });
    continue;
  }
  const html = read(htmlPath);
  const alternates = alternateLinks(html);
  const robots = metaName(html, 'robots');
  const canonical = canonicalFrom(html);
  const hasNoindex = /noindex/i.test(robots);
  const enAlternate = alternates.find((item) => item.hreflang.toLowerCase() === 'en')?.pathname || '';
  const zhAlternate = alternates.find((item) => item.hreflang.toLowerCase() === 'zh-cn')?.pathname || '';
  routes.push({
    url,
    pathname,
    kind: routeKind(pathname),
    title: titleFrom(html),
    lang: langFrom(html),
    canonical,
    has_noindex: hasNoindex,
    alternates,
    en_alternate: enAlternate,
    zh_alternate: zhAlternate,
    status: enAlternate && zhAlternate ? 'paired-or-self-declared' : 'single-language-indexable'
  });
}

const englishRoutes = routes.filter((route) => route.lang === 'en');
const zhRoutes = routes.filter((route) => route.lang === 'zh-CN');
const pairedZhRoutes = zhRoutes.filter((route) => Boolean(route.en_alternate));
const pairedEnglishRoutes = englishRoutes.filter((route) => Boolean(route.zh_alternate));
const zhFirstRoutes = zhRoutes.filter((route) => !route.en_alternate);
const noindexInSitemap = routes.filter((route) => route.has_noindex);

const kindCounts = routes.reduce((counts, route) => {
  counts[route.kind] = (counts[route.kind] || 0) + 1;
  return counts;
}, {});

const importantRoutes = importantRouteOrder
  .map((pathname) => routes.find((route) => route.pathname === pathname))
  .filter(Boolean)
  .map((route) => ({
    pathname: route.pathname,
    lang: route.lang,
    status: route.status,
    en_alternate: route.en_alternate || '',
    zh_alternate: route.zh_alternate || '',
    title: route.title
  }));

const report = {
  generated_at: new Date().toISOString(),
  canonical_host: canonicalHost,
  global_status: 'incomplete',
  verdict: 'Batch B bilingual route audit is not passed: only the core English path has paired routes; most indexable pages are still Chinese-first without English same-evidence mirrors.',
  counts: {
    sitemap_urls: sitemapUrls.length,
    html_routes_checked: routes.length,
    missing_html: missingHtml.length,
    english_routes: englishRoutes.length,
    zh_routes: zhRoutes.length,
    zh_routes_with_en_alternate: pairedZhRoutes.length,
    en_routes_with_zh_alternate: pairedEnglishRoutes.length,
    zh_first_without_en_alternate: zhFirstRoutes.length,
    noindex_in_sitemap: noindexInSitemap.length
  },
  route_kind_counts: kindCounts,
  important_routes: importantRoutes,
  english_routes: englishRoutes.map(({ pathname, title, zh_alternate }) => ({ pathname, title, zh_alternate })),
  zh_first_sample: zhFirstRoutes.slice(0, 120).map(({ pathname, kind, title }) => ({ pathname, kind, title })),
  missing_html: missingHtml,
  noindex_in_sitemap: noindexInSitemap.map(({ pathname, title }) => ({ pathname, title }))
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const routeTable = (rows) => rows.length
  ? rows.map((route) => `| ${route.pathname} | ${route.lang || ''} | ${route.status || ''} | ${route.en_alternate || ''} | ${route.zh_alternate || ''} | ${route.title.replace(/\|/g, '/')} |`).join('\n')
  : '| None |  |  |  |  |  |';

const zhSampleTable = zhFirstRoutes.slice(0, 40).map((route) =>
  `| ${route.pathname} | ${route.kind} | ${route.title.replace(/\|/g, '/')} |`
).join('\n');

const md = [
  '# Public I18N Route Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Status: **${report.global_status.toUpperCase()}**`,
  '',
  '## Verdict',
  '',
  report.verdict,
  '',
  '## Metrics',
  '',
  '| Metric | Count |',
  '|---|---:|',
  `| Sitemap URLs | ${report.counts.sitemap_urls} |`,
  `| HTML routes checked | ${report.counts.html_routes_checked} |`,
  `| English routes | ${report.counts.english_routes} |`,
  `| Chinese routes | ${report.counts.zh_routes} |`,
  `| Chinese routes with English alternate | ${report.counts.zh_routes_with_en_alternate} |`,
  `| English routes with Chinese alternate | ${report.counts.en_routes_with_zh_alternate} |`,
  `| Chinese-first routes without English alternate | ${report.counts.zh_first_without_en_alternate} |`,
  `| Noindex routes in sitemap | ${report.counts.noindex_in_sitemap} |`,
  `| Missing HTML routes | ${report.counts.missing_html} |`,
  '',
  '## Important Reader Routes',
  '',
  '| Route | Lang | Status | EN alternate | ZH alternate | Title |',
  '|---|---|---|---|---|---|',
  routeTable(importantRoutes),
  '',
  '## English Routes',
  '',
  '| Route | Chinese alternate | Title |',
  '|---|---|---|',
  englishRoutes.length
    ? englishRoutes.map((route) => `| ${route.pathname} | ${route.zh_alternate || ''} | ${route.title.replace(/\|/g, '/')} |`).join('\n')
    : '| None |  |  |',
  '',
  '## Sample Chinese-First Routes Without English Alternate',
  '',
  '| Route | Kind | Title |',
  '|---|---|---|',
  zhSampleTable || '| None |  |  |',
  '',
  '## Required Follow-Up',
  '',
  '- Keep the current English path honest: `/en/`, `/en/topics/`, `/en/paper/`, `/en/projects/`, `/en/reports/`, `/en/value-lsh/`, `/en/star-growth/`, `/en/evolve-agi-index/`, `/en/resource-library/`, `/en/survey/`, `/en/blog/`, `/en/research/`, and `/en/graph/` are same-evidence core mirrors or guides, not full long-tail translation parity.',
  '- Promote a page from Chinese-first to bilingual only after it has an English same-evidence summary with the same claim boundary, limitations, and next step.',
  '- Continue with long-tail parity before calling website i18n complete: blog article bodies, blog tags, project detail cards, research notes, project/report pages, benchmark pages, visualizations, and survey subpages still need English same-evidence mirrors or explicit non-parity labels.',
  '- Re-run this audit after every public-site or metadata change.',
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

console.log(JSON.stringify({
  status: report.global_status,
  sitemap_urls: report.counts.sitemap_urls,
  english_routes: report.counts.english_routes,
  zh_routes_with_en_alternate: report.counts.zh_routes_with_en_alternate,
  zh_first_without_en_alternate: report.counts.zh_first_without_en_alternate,
  report: path.relative(root, reportMdPath)
}, null, 2));
