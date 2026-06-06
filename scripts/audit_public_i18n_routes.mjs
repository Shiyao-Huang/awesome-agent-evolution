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
  verdict: 'The public site is not fully bilingual yet: the core English path exists, but most sitemap-listed pages are still Chinese-first and do not declare an English alternate route.',
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
  '# 公开 I18N 路由审计 / Public I18N Route Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Status: **${report.global_status.toUpperCase()}**`,
  '',
  '## 一句话结论 / One-Sentence Verdict',
  '',
  `中文：公开站点的核心英文路径已经存在，但全站还没有完成同证据链双语覆盖；当前仍有 ${report.counts.zh_first_without_en_alternate} 条中文优先 sitemap 路由没有英文 alternate。`,
  '',
  `English: ${report.verdict}`,
  '',
  '## 这对读者意味着什么 / What This Means For Readers',
  '',
  '- 中文：如果你从中文入口阅读，核心路线是可用的，但很多长尾文章、标签页、项目页和报告页还没有对应英文版本。',
  '- 中文：如果你从英文入口阅读，你能理解主要定义、项目入口、报告状态和研究地图，但这还不是全站逐页翻译完成。',
  '- 中文：这不是 Google 已收录证明，也不是文案质量完成证明；它只说明哪些公开路由已经声明双语关系，哪些还没有。',
  '- English: Chinese readers have the most complete route set today; English readers have a core evidence path, not full long-tail page parity.',
  '- English: This is not proof of Google indexing and not proof of public-copy quality. It only measures route language and alternate-link coverage.',
  '',
  '## 三句话证据 / Three-Sentence Evidence',
  '',
  `1. Sitemap 当前有 ${report.counts.sitemap_urls} 条 URL，审计能读取 ${report.counts.html_routes_checked} 条 HTML 路由；这只证明 sitemap 中列出的页面有本地 HTML，不等于全站内容完整或每条路由都完成 i18n parity。 / The sitemap exposes ${report.counts.sitemap_urls} URLs and the audit can read ${report.counts.html_routes_checked} HTML routes; this only proves sitemap-listed pages have local HTML, not whole-site content completeness or i18n parity for every route.`,
  `2. 英文语言路由共有 ${report.counts.english_routes} 条，中文路由中只有 ${report.counts.zh_routes_with_en_alternate} 条声明英文 alternate；这些数字来自 HTML metadata，不证明英文内容已经逐页保持同证据链。 / There are ${report.counts.english_routes} English-language routes, and only ${report.counts.zh_routes_with_en_alternate} Chinese routes declare an English alternate. These counts come from HTML metadata; they do not prove content-level same-evidence parity.`,
  `3. 因此 SEO 目标的下一步不是盲目制造英文页面，而是优先给高价值文章、报告、项目卡和研究页补英文 route、人工同证据链审查、canonical/alternate 声明和审查状态。 / The next SEO step is not to create shallow English pages. It is to promote high-value articles, reports, project cards, and research pages with English routes, manual same-evidence review, canonical/alternate declarations, and review status.`,
  '',
  '## 边界 / Boundary',
  '',
  '本报告只检查 sitemap 中公开 HTML 路由是否能读取，以及页面声明的语言、canonical 和 alternate 字段。它不验证 canonical 是否最优、不验证 alternate 目标内容是否等价、不证明 Google 已经抓取页面，也不证明页面文案已经通过 reader/editor 与 academic review；这些分别由人工审查、live publication readiness、text asset indexability 和 public copy review gate 跟踪。',
  '',
  'This report checks whether public HTML routes in the sitemap are readable and what language, canonical, and alternate fields they declare. It does not validate canonical optimality, does not prove alternate targets have equivalent content, does not prove Google has crawled the pages, and does not certify copy quality; those are tracked by manual review, live publication readiness, text asset coverage, and the public-copy review gate.',
  '',
  '## 指标 / Metrics',
  '',
  '| 指标 / Metric | Count |',
  '|---|---:|',
  `| Sitemap URL 数 / Sitemap URLs | ${report.counts.sitemap_urls} |`,
  `| 已检查 HTML 路由 / HTML routes checked | ${report.counts.html_routes_checked} |`,
  `| 英文路由 / English routes | ${report.counts.english_routes} |`,
  `| 中文路由 / Chinese routes | ${report.counts.zh_routes} |`,
  `| 声明英文 alternate 的中文路由 / Chinese routes declaring English alternate | ${report.counts.zh_routes_with_en_alternate} |`,
  `| 声明中文 alternate 的英文路由 / English routes declaring Chinese alternate | ${report.counts.en_routes_with_zh_alternate} |`,
  `| 未声明英文 alternate 的中文优先路由 / Chinese-first routes without declared English alternate | ${report.counts.zh_first_without_en_alternate} |`,
  `| Sitemap 中 noindex 路由 / Noindex routes in sitemap | ${report.counts.noindex_in_sitemap} |`,
  `| 缺失 HTML 文件 / Missing HTML routes | ${report.counts.missing_html} |`,
  '',
  '## 核心读者路径 / Important Reader Routes',
  '',
  '| 路由 / Route | Lang | Status | EN alternate | ZH alternate | Title |',
  '|---|---|---|---|---|---|',
  routeTable(importantRoutes),
  '',
  '## 英文路线 / English Routes',
  '',
  '| 路由 / Route | Chinese alternate | Title |',
  '|---|---|---|',
  englishRoutes.length
    ? englishRoutes.map((route) => `| ${route.pathname} | ${route.zh_alternate || ''} | ${route.title.replace(/\|/g, '/')} |`).join('\n')
    : '| None |  |  |',
  '',
  '## 中文优先但缺少英文 alternate 的样本 / Sample Chinese-First Routes Without English Alternate',
  '',
  '| 路由 / Route | Kind | Title |',
  '|---|---|---|',
  zhSampleTable || '| None |  |  |',
  '',
  '## 后续动作 / Required Follow-Up',
  '',
  '- 保持当前英文路线诚实：`/en/`, `/en/topics/`, `/en/paper/`, `/en/projects/`, `/en/reports/`, `/en/value-lsh/`, `/en/star-growth/`, `/en/evolve-agi-index/`, `/en/resource-library/`, `/en/survey/`, `/en/blog/`, `/en/research/`, and `/en/graph/` 是核心英文导读路线；内容是否完全同证据链仍需人工审查，不能把它说成全站长尾翻译完成。 / Keep the current English path honest: these are core English guide routes. Content-level evidence parity still requires manual review, and this must not be described as full long-tail translation parity.',
  '- 只有当页面有英文 route、人工确认的同证据链摘要、同等 claim boundary、限制和下一步时，才把中文优先页面升级为 bilingual。 / Promote a Chinese-first page to bilingual only after it has an English route plus manually reviewed same-evidence summary, claim boundary, limitations, and next step.',
  '- 继续补长尾 parity：博客正文、博客标签、项目详情卡、研究笔记、项目/报告页、benchmark 页、可视化页和 survey 子页都需要英文同证据链镜像，或明确标注 non-parity。 / Continue long-tail parity before calling website i18n complete.',
  '- 维护侧每次 public site 或 metadata 改动后重跑本审计；读者侧只需要看状态、数量和缺口，不需要理解脚本流程。 / Maintainers should re-run this audit after public-site or metadata changes; readers only need the status, counts, and remaining gaps.',
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
