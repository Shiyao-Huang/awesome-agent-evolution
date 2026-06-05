#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const siteRoot = path.join(root, 'site');
const distRoot = path.join(siteRoot, 'dist');
const blogRoot = path.join(siteRoot, 'src/content/blog');
const researchRoot = path.join(siteRoot, 'src/content/research');
const projectReportsRoot = path.join(siteRoot, 'public/reports/projects');
const surveyPublicationRoot = path.join(root, 'reports/survey-publication');
const reportJsonPath = path.join(root, 'reports/seo-indexable-assets.json');
const reportMdPath = path.join(root, 'reports/seo-indexable-assets.md');
const canonicalHost = 'https://agent-evolution.com';

const read = (file) => fs.readFileSync(file, 'utf8');
const exists = (file) => fs.existsSync(file);
const listMdx = (dir) => fs.readdirSync(dir).filter((name) => name.endsWith('.mdx')).sort();
const stripExt = (name) => name.replace(/\.(mdx|md)$/, '');

const extractFrontmatter = (text) => {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  for (const rawLine of match[1].split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const pair = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!pair) continue;
    const [, key, value] = pair;
    data[key] = value.replace(/^["']|["']$/g, '').trim();
  }
  return data;
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

const loadSitemapUrls = () => {
  const sitemapFiles = fs.readdirSync(distRoot).filter((name) => /^sitemap-\d+\.xml$/.test(name));
  const urls = new Set();
  for (const name of sitemapFiles) {
    const xml = read(path.join(distRoot, name));
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      urls.add(match[1]);
    }
  }
  return urls;
};

const checkHtmlAsset = ({ collection, slug, sourcePath, urlPath, requiredType, requireFrontmatter = true, indexPolicy = 'indexable' }) => {
  const source = read(sourcePath);
  const frontmatter = extractFrontmatter(source);
  const sourceTitle = frontmatter.title || source.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const url = `${canonicalHost}${urlPath}`;
  const htmlPath = path.join(distRoot, urlPath, 'index.html');
  const failures = [];
  const warnings = [];

  if (!exists(htmlPath)) {
    return { collection, slug, url, sourcePath: path.relative(root, sourcePath), htmlPath: path.relative(root, htmlPath), status: 'fail', failures: ['missing generated HTML asset'], warnings };
  }

  const html = read(htmlPath);
  const canonical = canonicalFrom(html);
  const description = metaName(html, 'description');
  const robots = metaName(html, 'robots');
  const ogTitle = metaProperty(html, 'og:title');
  const ogDescription = metaProperty(html, 'og:description');
  const jsonLdTypes = Array.from(html.matchAll(/"@type"\s*:\s*"([^"]+)"/g)).map((match) => match[1]);

  if (frontmatter.draft === 'true') warnings.push('draft source is excluded from static paths');
  if (requireFrontmatter) {
    if (!frontmatter.title) failures.push('missing source title frontmatter');
    if (!frontmatter.description) failures.push('missing source description frontmatter');
    if (!frontmatter.pubDate) failures.push('missing source pubDate frontmatter');
  } else if (!sourceTitle) {
    failures.push('missing source H1 title');
  }
  const hasNoindex = Boolean(robots && /noindex/i.test(robots));
  if (indexPolicy === 'indexable' && hasNoindex) failures.push('indexable page emits noindex robots meta');
  if (indexPolicy === 'noindex' && !hasNoindex) failures.push('review-gated page is missing noindex robots meta');
  if (canonical !== url) failures.push(`canonical mismatch: expected ${url}, got ${canonical || 'missing'}`);
  if (!description || description.length < 50) failures.push('meta description missing or too short');
  if (!ogTitle) failures.push('missing og:title');
  if (!ogDescription) failures.push('missing og:description');
  if (!jsonLdTypes.includes(requiredType)) failures.push(`missing ${requiredType} JSON-LD`);
  if (!html.includes('<main id="main">')) failures.push('missing main content landmark');

  return {
    collection,
    slug,
    url,
    sourcePath: path.relative(root, sourcePath),
    htmlPath: path.relative(root, htmlPath),
    status: failures.length ? 'fail' : 'pass',
    failures,
    warnings,
    jsonLdTypes,
    indexPolicy
  };
};

if (!exists(distRoot)) {
  throw new Error('site/dist is missing. Run `(cd site && npm run build)` before this audit.');
}

const sitemapUrls = loadSitemapUrls();
const robotsPath = path.join(distRoot, 'robots.txt');
const robotsText = exists(robotsPath) ? read(robotsPath) : '';
const assets = [];

for (const name of listMdx(blogRoot)) {
  const slug = stripExt(name);
  const sourcePath = path.join(blogRoot, name);
  const frontmatter = extractFrontmatter(read(sourcePath));
  if (frontmatter.draft === 'true') continue;
  assets.push(checkHtmlAsset({ collection: 'blog', slug, sourcePath, urlPath: `/blog/${slug}/`, requiredType: 'BlogPosting' }));
}

for (const name of listMdx(researchRoot)) {
  const slug = stripExt(name);
  const sourcePath = path.join(researchRoot, name);
  assets.push(checkHtmlAsset({ collection: 'research', slug, sourcePath, urlPath: `/research/${slug}/`, requiredType: 'ScholarlyArticle' }));
}

for (const name of fs.readdirSync(projectReportsRoot).filter((file) => file.endsWith('.md') && !/^index\.md$/i.test(file)).sort()) {
  const slug = stripExt(name);
  const sourcePath = path.join(projectReportsRoot, name);
  assets.push(checkHtmlAsset({
    collection: 'project-report',
    slug,
    sourcePath,
    urlPath: `/reports/projects/${slug}/`,
    requiredType: 'Article',
    requireFrontmatter: false,
    indexPolicy: 'noindex'
  }));
}

if (exists(surveyPublicationRoot)) {
  for (const name of fs.readdirSync(surveyPublicationRoot).filter((file) => /^[0-9][0-9]-.*\.md$/.test(file)).sort()) {
    const slug = stripExt(name);
    const sourcePath = path.join(surveyPublicationRoot, name);
    assets.push(checkHtmlAsset({
      collection: 'survey-publication',
      slug,
      sourcePath,
      urlPath: `/reports/survey-publication/${slug}/`,
      requiredType: 'Article',
      requireFrontmatter: false,
      indexPolicy: 'noindex'
    }));
  }
}

for (const asset of assets) {
  if (asset.indexPolicy === 'indexable' && !sitemapUrls.has(asset.url)) {
    asset.status = 'fail';
    asset.failures.push('URL missing from sitemap');
  }
  if (asset.indexPolicy === 'noindex' && sitemapUrls.has(asset.url)) {
    asset.status = 'fail';
    asset.failures.push('review-gated URL should not appear in sitemap');
  }
}

const globalFailures = [];
if (!exists(robotsPath)) globalFailures.push('missing robots.txt');
if (!/User-agent:\s*\*/i.test(robotsText)) globalFailures.push('robots.txt missing wildcard user-agent');
if (!/Allow:\s*\//i.test(robotsText)) globalFailures.push('robots.txt does not explicitly allow crawling');
if (!/Sitemap:\s*https:\/\/agent-evolution\.com\/sitemap-index\.xml/i.test(robotsText)) globalFailures.push('robots.txt missing canonical sitemap URL');
if (!exists(path.join(distRoot, 'sitemap-index.xml'))) globalFailures.push('missing sitemap-index.xml');

const failedAssets = assets.filter((asset) => asset.status === 'fail');
const report = {
  generated_at: new Date().toISOString(),
  canonical_host: canonicalHost,
  checked_collections: ['blog', 'research', 'project-report', 'survey-publication'],
  global_status: globalFailures.length || failedAssets.length ? 'fail' : 'pass',
  counts: {
    assets_checked: assets.length,
    passed: assets.length - failedAssets.length,
    failed: failedAssets.length,
    sitemap_urls: sitemapUrls.size
  },
  global_failures: globalFailures,
  failed_assets: failedAssets,
  assets
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const md = [
  '# SEO Indexable Assets Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Canonical host: ${canonicalHost}`,
  '',
  '| Metric | Count |',
  '|---|---:|',
  `| Assets checked | ${report.counts.assets_checked} |`,
  `| Passed | ${report.counts.passed} |`,
  `| Failed | ${report.counts.failed} |`,
  `| Sitemap URLs | ${report.counts.sitemap_urls} |`,
  '',
  `Global status: **${report.global_status.toUpperCase()}**`,
  '',
  '## Scope',
  '',
  'This audit verifies generated HTML SEO assets for `site/src/content/blog/*.mdx` and `site/src/content/research/*.mdx`: canonical URL, sitemap inclusion, meta description, Open Graph metadata, JSON-LD article type, and absence of `noindex`. Project reports in `site/public/reports/projects/*.md` and survey publication slices in `reports/survey-publication/[0-9][0-9]-*.md` are generated as review-gated HTML, must emit `noindex`, and must stay out of the sitemap until their public-copy review passes.',
  '',
  '## Failures',
  '',
  failedAssets.length
    ? failedAssets.map((asset) => `- ${asset.collection}/${asset.slug}: ${asset.failures.join('; ')}`).join('\n')
    : '- None.',
  '',
  '## Global Failures',
  '',
  globalFailures.length ? globalFailures.map((failure) => `- ${failure}`).join('\n') : '- None.',
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

console.log(JSON.stringify({
  status: report.global_status,
  assets_checked: report.counts.assets_checked,
  passed: report.counts.passed,
  failed: report.counts.failed,
  sitemap_urls: report.counts.sitemap_urls,
  report: path.relative(root, reportMdPath)
}, null, 2));

if (report.global_status !== 'pass') {
  process.exitCode = 1;
}
