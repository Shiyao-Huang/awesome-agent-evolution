#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distRoot = path.join(root, 'site', 'dist');
const reportJsonPath = path.join(root, 'reports', 'text-asset-indexability.json');
const reportMdPath = path.join(root, 'reports', 'text-asset-indexability.md');
const canonicalHost = 'https://agent-evolution.com';
const textExtensions = new Set(['.md', '.mdx', '.tex']);
const hardSkipDirs = new Set(['.git', 'node_modules', '.astro', '.vercel', '.next']);

const read = (file) => fs.readFileSync(file, 'utf8');
const exists = (file) => fs.existsSync(file);
const rel = (file) => path.relative(root, file).replaceAll(path.sep, '/');
const stripExt = (name) => name.replace(/\.(mdx|md|tex)$/i, '');
const mdText = (value) => String(value ?? '').replace(/\n/g, ' ').replace(/\|/g, '\\|');
const routeForPath = (relativePath) => {
  if (relativePath.startsWith('site/src/content/blog/') && relativePath.endsWith('.mdx')) {
    return `/blog/${stripExt(path.basename(relativePath))}/`;
  }
  if (relativePath.startsWith('site/src/content/research/') && relativePath.endsWith('.mdx')) {
    return `/research/${stripExt(path.basename(relativePath))}/`;
  }
  if (relativePath.startsWith('site/public/reports/projects/') && relativePath.endsWith('.md') && path.basename(relativePath).toLowerCase() !== 'index.md') {
    return `/reports/projects/${stripExt(path.basename(relativePath))}/`;
  }
  if (relativePath.startsWith('site/public/reports/research/projects/') && relativePath.endsWith('.md') && path.basename(relativePath).toLowerCase() !== 'index.md') {
    return `/reports/research/projects/${stripExt(path.basename(relativePath))}/`;
  }
  if (relativePath.startsWith('site/public/reports/papers/cross-domain/') && relativePath.endsWith('.md')) {
    const slug = stripExt(path.basename(relativePath)).toLowerCase() === 'readme' ? 'overview' : stripExt(path.basename(relativePath));
    return `/reports/papers/cross-domain/${slug}/`;
  }
  if (/^reports\/survey-publication\/[0-9][0-9]-.*\.md$/.test(relativePath)) {
    return `/reports/survey-publication/${stripExt(path.basename(relativePath))}/`;
  }
  if (relativePath === 'reports/github-topic-indexing-readiness.md') return '/reports/github-topic-indexing-readiness/';
  if (relativePath === 'reports/live-publication-readiness.md') return '/reports/live-publication-readiness/';
  if (relativePath === 'reports/public-i18n-route-audit.md') return '/reports/public-i18n-route-audit/';
  if (relativePath === 'reports/text-asset-indexability.md') return '/reports/text-asset-indexability/';
  return '';
};

const loadSitemapUrls = () => {
  if (!exists(distRoot)) return new Set();
  const urls = new Set();
  for (const name of fs.readdirSync(distRoot).filter((entry) => /^sitemap-\d+\.xml$/.test(entry))) {
    const xml = read(path.join(distRoot, name));
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) urls.add(match[1]);
  }
  return urls;
};

const loadRouteStatuses = () => {
  const routeReport = path.join(root, 'reports', 'google-indexable-routes.json');
  if (!exists(routeReport)) return new Map();
  const parsed = JSON.parse(read(routeReport));
  return new Map((parsed.routes || []).map((route) => [route.url, route.status]));
};

const walk = (dir, files = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (hardSkipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const relative = rel(full);
    if (entry.isDirectory()) {
      if (relative === 'site/dist' || relative.startsWith('site/dist/')) continue;
      walk(full, files);
      continue;
    }
    if (entry.isFile() && textExtensions.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
};

const classify = (relativePath, route, routeIndexable) => {
  if (relativePath.startsWith('repos/') || relativePath.startsWith('projects/repos/')) return 'external-mirror';
  if (/^raw-(github|papers|social|blogs|social-rank)\//.test(relativePath)) return 'raw-source-do-not-publish-directly';
  if (route && routeIndexable) return 'public-google-indexable-source';
  if (route && !routeIndexable) return 'mapped-route-not-yet-indexable';
  if (/^README(-EN|-ZH)?\.md$/.test(relativePath)) return 'github-readme-indexable';
  if (relativePath === 'CONTENT_INDEX.md') return 'github-root-indexable';
  if (relativePath.startsWith('site/src/content/')) return 'site-content-unmapped';
  if (relativePath.startsWith('site/src/pages/')) return 'site-page-source-code';
  if (relativePath.startsWith('site/public/reports/')) return 'public-report-source-unmapped';
  if (relativePath.startsWith('reports/')) return 'results-report-unmapped';
  if (relativePath.startsWith('projects/')) return 'processed-project-card-unmapped';
  if (relativePath.startsWith('analysis/') || relativePath.startsWith('research/')) return 'processed-analysis-unmapped';
  if (relativePath.startsWith('paper-drafts/') || relativePath.startsWith('survey/') || relativePath.startsWith('paper/')) return 'paper-or-survey-draft';
  if (relativePath.startsWith('docs/') || ['AGENTS.md', 'CLAUDE.md', 'CLOUD.md', 'CURRENT_GOAL.md', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'SECURITY.md'].includes(relativePath)) return 'ops-or-docs';
  if (relativePath.startsWith('work/') || relativePath.startsWith('.mermaid/')) return 'work-internal';
  if (relativePath.startsWith('paper-reviews/')) return 'paper-review-unmapped';
  if (relativePath.startsWith('output/') || relativePath.startsWith('data-engine/')) return 'generated-data-index';
  return 'unclassified-text';
};

const priorityScore = (asset) => {
  let score = 0;
  if (asset.status === 'results-report-unmapped') score += 90;
  if (asset.status === 'processed-analysis-unmapped') score += 75;
  if (asset.status === 'processed-project-card-unmapped') score += 70;
  if (asset.status === 'paper-review-unmapped') score += 65;
  if (asset.status === 'paper-or-survey-draft') score += 60;
  if (asset.status === 'ops-or-docs') score += 25;
  if (asset.words > 1200) score += 15;
  if (/index|readme/i.test(asset.path)) score -= 10;
  return score;
};

const titleFrom = (text, relativePath) => {
  const fmTitle = text.match(/^---\n[\s\S]*?\ntitle:\s*["']?([^"'\n]+)["']?[\s\S]*?\n---/)?.[1]?.trim();
  if (fmTitle) return fmTitle;
  const heading = text.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return heading || path.basename(relativePath);
};

const sitemapUrls = loadSitemapUrls();
const routeStatuses = loadRouteStatuses();
const files = walk(root).map((file) => {
  const relativePath = rel(file);
  const route = routeForPath(relativePath);
  const url = route ? `${canonicalHost}${route}` : '';
  const routeStatus = url ? routeStatuses.get(url) || 'unknown' : '';
  const routeIndexable = Boolean(url && sitemapUrls.has(url) && routeStatus === 'pass');
  let text = '';
  try {
    text = read(file);
  } catch {
    text = '';
  }
  const words = text.split(/\s+/).filter(Boolean).length;
  const asset = {
    path: relativePath,
    extension: path.extname(relativePath).toLowerCase(),
    words,
    title: titleFrom(text, relativePath),
    route,
    url,
    route_in_sitemap: Boolean(url && sitemapUrls.has(url)),
    route_status: routeStatus,
    status: ''
  };
  asset.status = classify(relativePath, route, routeIndexable);
  asset.priority_score = priorityScore(asset);
  return asset;
}).sort((left, right) => left.path.localeCompare(right.path));

const statusCounts = files.reduce((counts, asset) => {
  counts[asset.status] = (counts[asset.status] || 0) + 1;
  return counts;
}, {});
const ownedFiles = files.filter((asset) => !['external-mirror', 'raw-source-do-not-publish-directly'].includes(asset.status));
const publicAssets = files.filter((asset) => asset.status === 'public-google-indexable-source');
const githubAssets = files.filter((asset) => asset.status === 'github-readme-indexable' || asset.status === 'github-root-indexable');
const unpublishedCandidates = ownedFiles
  .filter((asset) => !['public-google-indexable-source', 'github-readme-indexable', 'github-root-indexable', 'site-page-source-code', 'work-internal', 'ops-or-docs', 'generated-data-index'].includes(asset.status))
  .sort((left, right) => right.priority_score - left.priority_score || right.words - left.words)
  .slice(0, 80);

const report = {
  generated_at: new Date().toISOString(),
  canonical_host: canonicalHost,
  global_status: 'incomplete',
  verdict: 'Generated sitemap routes are indexable, but repository-wide text coverage is incomplete: many processed analyses, project cards, paper reviews, drafts, and reports are not yet mapped to public Google-indexable HTML.',
  boundary: 'This audit classifies text assets. It does not mean raw sources or external mirrors should be published directly; raw stays raw and mirrors stay mirrors. It also does not clear the live custom-domain HTTPS blocker.',
  counts: {
    text_files_total: files.length,
    owned_text_files_excluding_raw_and_external_mirrors: ownedFiles.length,
    public_google_indexable_sources: publicAssets.length,
    github_root_or_readme_assets: githubAssets.length,
    unpublished_candidate_files: unpublishedCandidates.length,
    sitemap_urls_observed: sitemapUrls.size
  },
  status_counts: statusCounts,
  unpublished_candidates: unpublishedCandidates,
  assets: files
};

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true });
fs.writeFileSync(reportJsonPath, `${JSON.stringify(report, null, 2)}\n`);

const statusLines = Object.entries(statusCounts)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([status, count]) => `| ${status} | ${count} |`);
const candidateLines = unpublishedCandidates.slice(0, 40).map((asset) =>
  `| ${asset.path} | ${asset.status} | ${asset.words} | ${asset.priority_score} | ${mdText(asset.title)} |`
);

const md = [
  '# 文字资产可索引覆盖审计 / Text Asset Indexability Audit',
  '',
  `Generated: ${report.generated_at}`,
  '',
  `Canonical host: ${canonicalHost}`,
  '',
  `Status: **${report.global_status.toUpperCase()}**`,
  '',
  '## 一句话结论 / One-Sentence Verdict',
  '',
  '中文：站点 sitemap 里的页面本身已经具备可索引 metadata，但这不等于仓库里的所有 Markdown、MDX、TeX 文字资产都已经变成公开、审查过、可被 Google 抓取的 HTML 页面。',
  '',
  report.verdict,
  '',
  '## 三句话证据 / Three-Sentence Evidence',
  '',
  `1. 本地构建观察到 ${report.counts.sitemap_urls_observed} 条 sitemap URL，其中 route-level Google indexability 审计已经覆盖生成页面；这只证明“已生成页面具备本地可索引资格”，不证明线上 HTTPS 可达或 Google 已抓取。 / The local build exposes ${report.counts.sitemap_urls_observed} sitemap URLs, and the route-level audit checks generated pages; this supports local indexability eligibility only, not live HTTPS reachability or confirmed Google crawling.`,
  `2. 全仓库共有 ${report.counts.text_files_total} 个文本文件，剔除 raw 和外部镜像后仍有 ${report.counts.owned_text_files_excluding_raw_and_external_mirrors} 个自有文字资产；其中只有 ${report.counts.public_google_indexable_sources} 个被映射到公开 HTML/source route。 / The repository has ${report.counts.text_files_total} text files and ${report.counts.owned_text_files_excluding_raw_and_external_mirrors} owned non-raw, non-mirror assets; only ${report.counts.public_google_indexable_sources} are mapped to public HTML/source routes.`,
  `3. 因此当前 blocker 不是单个页面缺少 title/description，而是 processed 分析、项目卡、论文 review、draft 和部分 reports 还没有经过公开页面包装、双语摘要和文案/证据审查。 / The blocker is not a single missing title or description. Many processed analyses, project cards, paper reviews, drafts, and reports still need public wrappers, bilingual summaries, and copy/evidence review.`,
  '',
  'In English: generated sitemap pages are locally indexable, but repository-wide text coverage remains incomplete because many owned Markdown/MDX/TeX assets are still processed material, drafts, reviews, or reports without reviewed public HTML routes.',
  '',
  '## 边界 / Boundary',
  '',
  report.boundary,
  '',
  '## 为什么需要这个审计 / Why This Exists',
  '',
  'Google SEO、GitHub topic、GitHub Search 是三套不同系统。Google 主要看线上可访问页面、sitemap、canonical、robots 和 HTTPS；GitHub topic 列表主要看远端仓库 topics、description、README 渲染、搜索索引和 GitHub 自己的刷新节奏；本报告只衡量“仓库文字资产是否已经进入公开可索引页面链路”。',
  '',
  'The route-level SEO audits prove that generated sitemap pages have indexable metadata. They do not prove that every valuable Markdown, MDX, or TeX text asset in the repository has been promoted into a public, reviewed, Google-indexable HTML route. This audit closes that measurement gap without claiming that Google has already crawled or indexed the pages.',
  '',
  '## 术语表 / Glossary',
  '',
  '| Term | Reader meaning |',
  '|---|---|',
  '| public-google-indexable-source | 已有公开 HTML route、进入 sitemap，并通过本地 indexability 审计的源文件。 / A source file already represented by a public HTML route in the sitemap with a passing route audit. Reader meaning: it can be discovered as a public page, though this still does not prove Google has indexed it. |',
  '| github-readme-indexable / github-root-indexable | GitHub 仓库首页能直接看到的 README 或根索引，不等于 Google 已收录。 / A root README or index visible on GitHub. Reader meaning: GitHub visitors can see it, but Google indexing and GitHub topic ranking are separate. |',
  '| processed-analysis-unmapped | 已加工分析，但还没有被包装成公开页面。 / Processed analysis without a public HTML wrapper. Reader meaning: useful research exists, but it is not yet a reader-ready asset. |',
  '| processed-project-card-unmapped | 项目卡/model-card 类资产仍在仓库层，还没有对应公开 HTML 页面。 / A project/model-card asset without a public page. Reader meaning: the project is tracked, but not yet promoted into the public reading path. |',
  '| paper-review-unmapped | 论文 review 仍是加工素材，还不是可引用的公开文章。 / A paper review that remains processed material. Reader meaning: treat it as internal evidence work, not a finished article. |',
  '| raw-source-do-not-publish-directly | 原始素材只做证据源，不能直接改写或批量公开。 / Raw source material kept for traceability. Reader meaning: it supports claims but should not be published directly as polished copy. |',
  '| external-mirror | 外部仓库镜像，只用于本地研究和引用，不作为本站文章发布。 / A local mirror of an external repository. Reader meaning: it helps research and verification, but it is not Self Evolve public content. |',
  '| unmapped / unrouted | 还没有明确的公开 URL、双语摘要、SEO metadata 和审查状态。 / No clear public URL, bilingual summary, SEO metadata, or review status yet. Reader meaning: it still needs editorial work before it can serve readers. |',
  '',
  '## 指标 / Metrics',
  '',
  '| Metric | Count |',
  '|---|---:|',
  `| Text files total | ${report.counts.text_files_total} |`,
  `| Owned text files excluding raw and external mirrors | ${report.counts.owned_text_files_excluding_raw_and_external_mirrors} |`,
  `| Public Google-indexable source files | ${report.counts.public_google_indexable_sources} |`,
  `| GitHub root/README assets | ${report.counts.github_root_or_readme_assets} |`,
  `| Unpublished candidate files shown in queue | ${report.counts.unpublished_candidate_files} |`,
  `| Sitemap URLs observed | ${report.counts.sitemap_urls_observed} |`,
  '',
  '## 状态计数 / Status Counts',
  '',
  '| Status | Files |',
  '|---|---:|',
  ...statusLines,
  '',
  '## 最高优先级待发布队列 / Highest-Priority Unpublished Candidates',
  '',
  'Public-reader meaning: these files are not failures by themselves. They are the next queue for deciding what deserves a public wrapper, bilingual same-evidence summary, and copy/evidence review.',
  '',
  '| Path | Status | Words | Priority | Title |',
  '|---|---|---:|---:|---|',
  ...(candidateLines.length ? candidateLines : ['| None |  | 0 | 0 |  |']),
  '',
  '## 读者下一步 / Reader Next Steps',
  '',
  '- 如果你只想判断网站是否能被 Google 抓取，先看 `reports/google-indexable-routes.md` 和 `reports/live-publication-readiness.md`。',
  '- 如果你想判断 GitHub topic 为什么还没显示，先看 `reports/github-topic-indexing-readiness.md`；topic 收录和 Google SEO 不是一回事。',
  '- 如果你想判断“仓库里的文字是否都已经公开可索引”，使用本报告的候选队列，而不是只看 sitemap 数量。',
  '',
  '## 维护下一步 / Required Follow-Up',
  '',
  '- Keep raw sources raw: do not rewrite `raw-*` material as processed public copy.',
  '- Do not expose external mirrors from `repos/` or `projects/repos/` as site articles.',
  '- Promote high-value processed analyses, reports, paper reviews, and project cards through reviewed HTML wrappers before calling them Google-indexable assets.',
  '- Pair promotion with bilingual same-evidence summaries and the public-copy review gate.',
  '- Re-run this audit after every documentation, report, site, or paper change.',
  ''
].join('\n');

fs.writeFileSync(reportMdPath, md);

console.log(JSON.stringify({
  status: report.global_status,
  total: report.counts.text_files_total,
  owned: report.counts.owned_text_files_excluding_raw_and_external_mirrors,
  public_google_indexable_sources: report.counts.public_google_indexable_sources,
  github_root_or_readme_assets: report.counts.github_root_or_readme_assets,
  unpublished_candidates_shown: report.counts.unpublished_candidate_files,
  report: path.relative(root, reportMdPath)
}, null, 2));
