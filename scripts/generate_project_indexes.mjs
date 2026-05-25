#!/usr/bin/env node
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync
} from 'node:fs';
import path from 'node:path';

// @sm:node project-index-generator
// @sm:feature project-governance.indexes
// @sm:prev workspace-filesystem
// @sm:next docs/indexes/*
// @sm:deps raw-*,analysis,projects,paper-drafts,site,output
// @sm:evidence node scripts/generate_project_indexes.mjs

const ROOT = process.cwd();
const GENERATED_ON = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).format(new Date());
const INDEX_DIR = path.join(ROOT, 'docs', 'indexes');
mkdirSync(INDEX_DIR, { recursive: true });

const categories = [
  {
    id: 'raw',
    title: 'Raw / 原始素材',
    rule: '只保存采集原貌和最小元数据；除时间戳补齐、去重索引外，不在这里写分析结论。',
    entries: [
      'raw-github',
      'raw-papers',
      'raw-blogs',
      'raw-social',
      'raw-social-rank',
      'raw-github-index.md',
      'social-media-raw-data.md',
      'social-media-raw-data-ZH.md'
    ]
  },
  {
    id: 'processed',
    title: 'Processed / 加工分析',
    rule: '清洗、分类、交叉分析、深度项目卡、论文评审都归这里；内容必须能追溯到 raw 或外部 canonical source。',
    entries: [
      'analysis',
      'research',
      'projects',
      'paper-reviews',
      'academic-reviews',
      'papers',
      'cc-materials',
      'review'
    ]
  },
  {
    id: 'work',
    title: 'Work / 工作产物',
    rule: '论文草稿、站点源码、脚本、调查图表、工程中间件归这里；可以迭代，但要有构建或验证入口。',
    entries: [
      'paper-drafts',
      'paper',
      'latex',
      'site',
      'survey',
      'scripts',
      'data-engine',
      'wiki',
      'CURRENT_GOAL.md'
    ]
  },
  {
    id: 'results',
    title: 'Results / 结果输出',
    rule: '可交付、可发布、可下载、可部署的输出归这里；生成物要说明来源和刷新命令。',
    entries: [
      'reports',
      'output',
      'site/public/reports',
      'site/dist',
      'paper-drafts/main.pdf',
      'docs/publishing-readiness-check.md'
    ]
  },
  {
    id: 'mirrors',
    title: 'Mirrors / 外部仓库镜像',
    rule: '外部仓库克隆、只读镜像和临时验证仓库归这里；不要把本项目治理文件混入镜像内部。',
    entries: [
      'repos',
      'projects/repos',
      'all_hands_ai__openhands',
      'stitionai__devika'
    ]
  },
  {
    id: 'ops',
    title: 'Ops / 管理与协作',
    rule: '项目管理、Agent 手册、云部署、索引、发布规范归这里；任何新长期规则都要能从根 README 找到。',
    entries: [
      'README.md',
      'README-ZH.md',
      'README-EN.md',
      'CONTENT_INDEX.md',
      'AGENTS.md',
      'CLAUDE.md',
      'CLOUD.md',
      'docs',
      '.claude/AIDS_IDENTITY.md'
    ]
  }
];

function formatBytes(bytes) {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(value >= 10 || unit === 0 ? 0 : 1)} ${units[unit]}`;
}

function walk(target, options = {}) {
  const { maxSamples = 12, skipDist = false } = options;
  const full = path.join(ROOT, target);
  const result = {
    exists: existsSync(full),
    files: 0,
    dirs: 0,
    bytes: 0,
    skipped: 0,
    samples: []
  };
  if (!result.exists) return result;

  function visit(abs) {
    const rel = path.relative(ROOT, abs);
    const base = path.basename(abs);
    if (base === '.git' || base === 'node_modules') return;
    if (skipDist && rel === 'site/dist') return;
    let st;
    try {
      st = statSync(abs);
    } catch {
      result.skipped += 1;
      return;
    }
    if (st.isDirectory()) {
      result.dirs += 1;
      let children = [];
      try {
        children = readdirSync(abs);
      } catch {
        result.skipped += 1;
        return;
      }
      for (const child of children) visit(path.join(abs, child));
      return;
    }
    result.files += 1;
    result.bytes += st.size;
    if (result.samples.length < maxSamples) result.samples.push(rel);
  }

  visit(full);
  return result;
}

function readJson(rel) {
  const full = path.join(ROOT, rel);
  if (!existsSync(full)) return null;
  return JSON.parse(readFileSync(full, 'utf8'));
}

function timeSlice(timestamp) {
  if (!timestamp || timestamp === 'unknown') return 'unknown';
  const match = String(timestamp).match(/^(\d{4})(?:-(\d{1,2}))?/);
  if (!match) return 'unknown';
  const year = Number(match[1]);
  const month = Number(match[2] || 1);
  if (year <= 2022) return 'early';
  if (year === 2023 || year === 2024) return `${year}-Q${Math.floor((month - 1) / 3) + 1}`;
  if (year === 2025 || year === 2026) return `${year}-${String(month).padStart(2, '0')}`;
  return year > 2026 ? 'future' : 'unknown';
}

function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return {};
  const end = text.indexOf('\n---', 4);
  if (end < 0) return {};
  const meta = {};
  for (const line of text.slice(4, end).split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) meta[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return meta;
}

function inferRepoFromFile(file) {
  const base = path.basename(file, '.md');
  const split = base.indexOf('_');
  if (split < 0) return base;
  return `${base.slice(0, split)}/${base.slice(split + 1)}`;
}

function generateRawGithubTimestampIndex() {
  const rawDir = path.join(ROOT, 'raw-github');
  const outDir = path.join(ROOT, 'output');
  if (!existsSync(rawDir)) return;
  mkdirSync(outDir, { recursive: true });

  const records = readdirSync(rawDir)
    .filter((name) => name.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    .map((name) => {
      const file = path.join('raw-github', name);
      const text = readFileSync(path.join(ROOT, file), 'utf8');
      const meta = parseFrontmatter(text);
      const repo = meta.repo || inferRepoFromFile(file);
      const contentTimestamp = meta.content_timestamp || 'unknown';
      return {
        repo,
        url: meta.url || `https://github.com/${repo}`,
        file,
        content_timestamp: contentTimestamp,
        collected_at: meta.collected_at || 'unknown',
        time_slice: meta.time_slice || timeSlice(contentTimestamp),
        timestamp_source: meta.timestamp_source || 'unknown_not_present_in_raw_capture'
      };
    });

  const index = {
    generated_at: `${GENERATED_ON}T00:00:00+08:00`,
    total: records.length,
    updated_files: records.length,
    unknown_content_timestamp: records.filter((record) => record.content_timestamp === 'unknown').length,
    records
  };
  writeFileSync(path.join(outDir, 'raw-github-timestamp-index.json'), `${JSON.stringify(index, null, 2)}\n`);

  const rows = records.map((record, index) =>
    `| ${index + 1} | [${record.repo}](${record.url}) | ${record.content_timestamp} | ${record.time_slice} | ${record.collected_at} | ${record.timestamp_source} | ${record.file} |`
  );
  const md = `# Raw GitHub Timestamp Index

Generated: ${index.generated_at}

- Total raw GitHub captures: ${index.total}
- Unknown content_timestamp: ${index.unknown_content_timestamp}

| # | Repo | content_timestamp | time_slice | collected_at | source | File |
|---:|---|---|---|---|---|---|
${rows.join('\n')}
`;
  writeFileSync(path.join(outDir, 'raw-github-timestamp-index.md'), md);

  const zh = `# Raw GitHub 时间戳索引

生成时间：${index.generated_at}

- Raw GitHub 捕获总数：${index.total}
- content_timestamp 未知数量：${index.unknown_content_timestamp}

| # | 仓库 | content_timestamp | time_slice | collected_at | 来源 | 文件 |
|---:|---|---|---|---|---|---|
${rows.join('\n')}
`;
  writeFileSync(path.join(outDir, 'raw-github-timestamp-index-ZH.md'), zh);
}

function inferArxivIdFromFile(file) {
  return path.basename(file, '.md').replace('-', '.');
}

function generateRawPapersTimestampIndex() {
  const rawDir = path.join(ROOT, 'raw-papers');
  const outDir = path.join(ROOT, 'output');
  if (!existsSync(rawDir)) return;
  mkdirSync(outDir, { recursive: true });

  const records = readdirSync(rawDir)
    .filter((name) => name.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    .map((name) => {
      const file = path.join('raw-papers', name);
      const text = readFileSync(path.join(ROOT, file), 'utf8');
      const meta = parseFrontmatter(text);
      const arxivId = meta.arXiv || meta.arxiv || inferArxivIdFromFile(file);
      const contentTimestamp = meta.content_timestamp || 'unknown';
      return {
        arxiv_id: arxivId,
        title: meta.title || 'unknown',
        url: meta.url || (arxivId === 'placeholder-no-arxiv' ? 'unknown' : `https://arxiv.org/abs/${arxivId}`),
        file,
        content_timestamp: contentTimestamp,
        collected_at: meta.collected_at || 'unknown',
        time_slice: meta.time_slice || timeSlice(contentTimestamp),
        timestamp_source: meta.timestamp_source || 'unknown_not_present_in_raw_capture'
      };
    });

  const index = {
    generated_at: `${GENERATED_ON}T00:00:00+08:00`,
    total: records.length,
    updated_files: records.length,
    unknown_content_timestamp: records.filter((record) => record.content_timestamp === 'unknown').length,
    records
  };
  writeFileSync(path.join(outDir, 'raw-papers-timestamp-index.json'), `${JSON.stringify(index, null, 2)}\n`);

  const rows = records.map((record, index) =>
    `| ${index + 1} | [${record.arxiv_id}](${record.url}) | ${record.content_timestamp} | ${record.time_slice} | ${record.collected_at} | ${record.timestamp_source} | ${record.file} |`
  );
  const md = `# Raw Papers Timestamp Index

Generated: ${index.generated_at}

- Total raw paper captures: ${index.total}
- Unknown content_timestamp: ${index.unknown_content_timestamp}

| # | arXiv ID | content_timestamp | time_slice | collected_at | source | File |
|---:|---|---|---|---|---|---|
${rows.join('\n')}
`;
  writeFileSync(path.join(outDir, 'raw-papers-timestamp-index.md'), md);
}

function itemRow(entry, stats) {
  const status = stats.exists ? 'present' : 'missing';
  return `| \`${entry}\` | ${status} | ${stats.files} | ${stats.dirs} | ${stats.skipped} | ${formatBytes(stats.bytes)} |`;
}

function categoryStats(category) {
  return category.entries.map((entry) => ({
    entry,
    stats: walk(entry)
  }));
}

function writeCategoryIndex(category) {
  const rows = categoryStats(category);
  const sampleLines = rows
    .filter(({ stats }) => stats.exists && stats.samples.length)
    .map(({ entry, stats }) => {
      const sample = stats.samples.slice(0, 10).map((file) => `- \`${file}\``).join('\n');
      return `### \`${entry}\`\n\n${sample}`;
    })
    .join('\n\n');

  const body = `# ${category.title} Index

> Generated: ${GENERATED_ON}

## Rule

${category.rule}

## Coverage

| Path | Status | Files | Directories | Skipped | Size |
|---|---|---:|---:|---:|---:|
${rows.map(({ entry, stats }) => itemRow(entry, stats)).join('\n')}

## Representative Files

${sampleLines || 'No files found yet.'}
`;
  writeFileSync(path.join(INDEX_DIR, `${category.id}-index.md`), body);
}

function generateMasterIndex() {
  const github = readJson('analysis/github-project-data-analysis.json');
  const counts = github?.counts || {};
  const metrics = [
    ['Raw GitHub captures', counts.raw_captures],
    ['Classified GitHub repositories', counts.classified_repos],
    ['Analyzed project/model-card reports', counts.analyzed_projects],
    ['Strict evolution-related repositories', counts.raw_core_evolution],
    ['Broad evolution-related repositories', counts.raw_broad_evolution],
    ['Raw paper files on disk', walk('raw-papers').files],
    ['Paper review files', walk('paper-reviews').files],
    ['Public project report files', walk('site/public/reports/projects').files],
    ['Current paper PDF', existsSync(path.join(ROOT, 'paper-drafts/main.pdf')) ? 'present' : 'missing']
  ];

  const rows = categories.map((category) => {
    const totals = categoryStats(category).reduce(
      (acc, { stats }) => {
        acc.files += stats.files;
        acc.dirs += stats.dirs;
        acc.bytes += stats.bytes;
        acc.skipped += stats.skipped;
        acc.present += stats.exists ? 1 : 0;
        return acc;
      },
      { files: 0, dirs: 0, bytes: 0, skipped: 0, present: 0 }
    );
    return `| [${category.title}](./${category.id}-index.md) | ${totals.present}/${category.entries.length} | ${totals.files} | ${totals.dirs} | ${totals.skipped} | ${formatBytes(totals.bytes)} | ${category.rule} |`;
  });

  const body = `# Self Evolve Master Index

> Generated: ${GENERATED_ON}. Regenerate with \`node scripts/generate_project_indexes.mjs\`.

## One Sentence

Self Evolve 的项目结构按 \`raw -> processed -> work -> results\` 管线治理，镜像仓库和协作规则单独索引，避免素材、分析、草稿和发布结果互相污染。

## Key Metrics

| Metric | Value |
|---|---:|
${metrics.map(([name, value]) => `| ${name} | ${value ?? 'n/a'} |`).join('\n')}

## Category Coverage

| Category | Present Paths | Files | Directories | Skipped | Size | Rule |
|---|---:|---:|---:|---:|---:|---|
${rows.join('\n')}

## Project Map

\`\`\`mermaid
flowchart LR
  RAW["raw-* 原始素材"] --> PROCESSED["analysis/research/projects/paper-reviews 加工分析"]
  PROCESSED --> WORK["paper-drafts/site/scripts/survey 工作产物"]
  WORK --> RESULTS["reports/output/site/public/reports/main.pdf 结果输出"]
  OPS["AGENTS/CLAUDE/CLOUD/docs 管理规则"] -. governs .-> RAW
  OPS -. governs .-> PROCESSED
  OPS -. governs .-> WORK
  OPS -. governs .-> RESULTS
  MIRRORS["repos/* 外部镜像"] -. evidence .-> PROCESSED
\`\`\`

## Index Files

${categories.map((category) => `- [${category.title}](./${category.id}-index.md)`).join('\n')}
- [Data Flow Index](./data-flow-index.md)
- [Root Document Map](./root-document-map.md)
- [Noncanonical Cleanup Index](./noncanonical-index.md)
`;
  writeFileSync(path.join(INDEX_DIR, 'master-index.md'), body);
}

function generateDataFlowIndex() {
  const body = `# Data Flow Index

> Generated: ${GENERATED_ON}

## L1

原始素材只进 \`raw-*\`，加工分析进 \`analysis/research/projects/paper-reviews\`，论文和网站工作进 \`paper-drafts/site/scripts\`，最终发布进 \`reports/output/site/public/reports/main.pdf\`。

## L2

1. Raw is evidence: keep source shape, timestamp, URL, and collection metadata.
2. Processed is interpretation: add classification, cross-analysis, model-card style teaching notes, and paper review structure.
3. Work is buildable: paper, site, scripts, figures, and validation commands must be runnable.
4. Results are publishable: public reports, static site assets, generated PDF, and delivery summaries.

## Pipeline

| Stage | Canonical Paths | Required Evidence | Refresh Command |
|---|---|---|---|
| Raw collection | \`raw-github/\`, \`raw-papers/\`, \`raw-blogs/\`, \`raw-social/\`, \`raw-social-rank/\` | URL, timestamp, source file | \`python3 scripts/enforce_raw_timestamps.py\` |
| GitHub analysis | \`analysis/github-project-data-analysis.*\` | raw record id, repo URL, timestamp/fallback note | \`node scripts/analyze_github_project_data.mjs\` |
| Project deep analysis | \`projects/\`, \`research/projects/\`, \`site/public/reports/projects/\` | model-card sections, source links | manual review + \`npm run build\` in \`site/\` |
| Paper writing | \`paper-drafts/\`, \`analysis/*.tex\`, \`paper/sections/\` | citation key, source table, limitation note | \`cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex\` |
| Website/SEO | \`site/src/\`, \`site/public/reports/\`, \`site/dist/\` | route, title, description, sitemap | \`cd site && npm run build\` |
| Public delivery | \`reports/\`, \`output/\`, \`paper-drafts/main.pdf\`, \`docs/indexes/\` | source path, generated date, validation command | \`node scripts/generate_project_indexes.mjs\` |

## Migration Rule

Root-level historical markdown files are compatibility evidence until scripts and citations stop referencing them. New long-form management material goes under \`docs/\`; new raw captures go under \`raw-*\`; new generated public reports go under \`reports/\` or \`site/public/reports/\`.
`;
  writeFileSync(path.join(INDEX_DIR, 'data-flow-index.md'), body);
}

function generateRootDocumentMap() {
  const files = readdirSync(ROOT)
    .filter((name) => {
      const full = path.join(ROOT, name);
      return statSync(full).isFile() && !name.startsWith('.');
    })
    .sort();

  const classify = (name) => {
    if (['README.md', 'README-ZH.md', 'README-EN.md', 'CONTENT_INDEX.md', 'DELIVERY_SUMMARY.md', 'AGENTS.md', 'CLAUDE.md', 'CLOUD.md', 'CURRENT_GOAL.md'].includes(name)) return 'ops';
    if (name.startsWith('mom-test') || name.startsWith('social-media') || name.startsWith('raw-')) return 'raw compatibility';
    if (name.startsWith('awesome-') || name.startsWith('github-agent-evolution')) return 'processed compatibility';
    if (['PAPER_OUTLINE.md'].includes(name)) return 'work compatibility';
    if (['cross-validation-report.md'].includes(name)) return 'processed compatibility';
    if (name.startsWith('LICENSE') || ['NOTICE', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md'].includes(name)) return 'release/legal';
    if (['SECURITY.md'].includes(name)) return 'release/security';
    return 'uncategorized';
  };

  const body = `# Root Document Map

> Generated: ${GENERATED_ON}

Root only keeps entry points, legal/release files, and compatibility files still referenced by scripts or research notes. New management documents belong in \`docs/\`.

| File | Class |
|---|---|
${files.map((file) => `| \`${file}\` | ${classify(file)} |`).join('\n')}
`;
  writeFileSync(path.join(INDEX_DIR, 'root-document-map.md'), body);
}

function topLevelClass(name) {
  const raw = new Set(['raw-github', 'raw-papers', 'raw-blogs', 'raw-social', 'raw-social-rank']);
  const processed = new Set(['analysis', 'research', 'projects', 'paper-reviews', 'academic-reviews', 'papers', 'cc-materials', 'review']);
  const work = new Set(['paper-drafts', 'paper', 'latex', 'site', 'survey', 'scripts', 'data-engine', 'wiki']);
  const results = new Set(['reports', 'output']);
  const mirrors = new Set(['repos', 'all_hands_ai__openhands', 'stitionai__devika']);
  const ops = new Set(['README.md', 'README-ZH.md', 'README-EN.md', 'CONTENT_INDEX.md', 'DELIVERY_SUMMARY.md', 'AGENTS.md', 'CLAUDE.md', 'CLOUD.md', 'CURRENT_GOAL.md', 'docs', '.gitignore']);
  const legal = new Set(['LICENSE-CODE', 'LICENSE-CONTENT', 'NOTICE', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'SECURITY.md']);
  const local = new Set(['.DS_Store', '.aha', '.astro', '.claude', '.genome', '.git', '.gitnexus', '.tmp', 'node_modules']);

  if (raw.has(name)) return ['canonical raw', '保留在 raw 层；只做时间戳、去重、来源索引。'];
  if (processed.has(name)) return ['canonical processed', '保留在加工层；要求 source/method/limitations。'];
  if (work.has(name)) return ['canonical work', '保留在工作层；要求构建或验证命令。'];
  if (results.has(name)) return ['canonical results', '保留在结果层；生成物必须说明来源。'];
  if (mirrors.has(name) || name.endsWith('__')) return ['support mirrors', '外部镜像，不删除；不混入本项目治理，必要时只读引用。'];
  if (ops.has(name)) return ['support ops', '管理入口，保留；长文档进入 docs/。'];
  if (legal.has(name)) return ['support release/legal', '开源发布必需，保留在根目录。'];
  if (local.has(name)) return ['local ignored/cache', '本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。'];
  if (name.startsWith('mom-test') || name.startsWith('social-media') || name.startsWith('raw-')) {
    return ['compatibility raw-root', '根目录兼容素材，不删；等脚本/论文引用清完后迁入 raw 或 docs/legacy。'];
  }
  if (name.startsWith('awesome-') || name.startsWith('github-agent-evolution') || name === 'cross-validation-report.md') {
    return ['compatibility processed-root', '根目录兼容分析，不删；等引用清完后迁入 processed 或 docs/legacy。'];
  }
  if (name === 'PAPER_OUTLINE.md') return ['compatibility work-root', '论文工作兼容入口，不删；后续可迁入 paper-drafts 或 docs/legacy。'];
  return ['needs-review holding', '不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。'];
}

function generateNoncanonicalIndex() {
  const entries = readdirSync(ROOT)
    .filter((name) => name !== '.git')
    .sort()
    .map((name) => {
      const full = path.join(ROOT, name);
      let st;
      try {
        st = statSync(full);
      } catch {
        st = null;
      }
      const [klass, action] = topLevelClass(name);
      return {
        name,
        type: st?.isDirectory() ? 'dir' : 'file',
        klass,
        action
      };
    });

  const supportEntries = entries.filter((entry) => !entry.klass.startsWith('canonical '));
  const body = `# Noncanonical Cleanup Index

> Generated: ${GENERATED_ON}

## 一句话

不属于 \`raw / processed / work / results\` 的材料不等于垃圾；先归为 support、compatibility、local ignored、mirrors、release/legal 或 needs-review，再决定是否迁移。

## Cleanup Policy

| Class | Meaning | Cleanup Action |
|---|---|---|
| support ops | 项目管理、索引、Agent/Claude/Cloud 手册 | 保留入口；长文档进入 \`docs/\` |
| support release/legal | 开源发布、许可证、安全、贡献规则 | 保留根目录 |
| support mirrors | 外部仓库镜像 | 不删除；不发布；不混入本项目源码 |
| local ignored/cache | 本地工具状态、依赖、缓存 | 由 \`.gitignore\` 隔离；不当作素材 |
| compatibility raw-root | 仍被脚本或论文引用的根目录 raw 兼容文件 | 不删；清引用后迁入 raw 或 \`docs/legacy/\` |
| compatibility processed-root | 仍被引用的根目录加工/报告兼容文件 | 不删；清引用后迁入 processed 或 \`docs/legacy/\` |
| compatibility work-root | 仍被引用的根目录工作入口 | 不删；清引用后迁入 work 或 \`docs/legacy/\` |
| needs-review holding | 还没归类清楚的材料 | 不删；先查引用、查内容，再定归属 |

## Current Noncanonical / Support Materials

| Path | Type | Class | Cleanup Action |
|---|---|---|---|
${supportEntries.map((entry) => `| \`${entry.name}\` | ${entry.type} | ${entry.klass} | ${entry.action} |`).join('\n')}

## Safe Cleanup Loop

1. 先运行 \`rg -n "path-or-title"\` 查引用。
2. 有引用的文件先标记 compatibility，不移动。
3. 无引用但有长期价值的文件迁入 \`docs/legacy/\`、\`analysis/\`、\`research/\` 或对应 raw/work/results 层。
4. 本地缓存只靠 \`.gitignore\` 隔离，不把它纳入论文/网站/结果。
5. 删除只允许处理可再生缓存或明确确认无价值的临时文件；默认不删。
`;
  writeFileSync(path.join(INDEX_DIR, 'noncanonical-index.md'), body);
}

generateRawGithubTimestampIndex();
generateRawPapersTimestampIndex();
for (const category of categories) writeCategoryIndex(category);
generateMasterIndex();
generateDataFlowIndex();
generateRootDocumentMap();
generateNoncanonicalIndex();

console.log(`Generated indexes in ${path.relative(ROOT, INDEX_DIR)}`);
