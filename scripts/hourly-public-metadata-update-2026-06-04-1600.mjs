import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-04T16:00:00+08:00';
const runDate = '2026-06-04';
const runDisplay = '2026-06-04 16:00 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-04-1600.md';

const repos = [
  {
    name: 'Awesome Agent Memory',
    repo: 'agentmemoryworld/awesome-agent-memory',
    url: 'https://github.com/AgentMemoryWorld/Awesome-Agent-Memory',
    rawFile: 'raw-github/agentmemoryworld_awesome-agent-memory.md',
    report: 'projects/398-agentmemoryworld-awesome-agent-memory-resource-index.md',
    siteReport: 'site/public/reports/projects/398-agentmemoryworld-awesome-agent-memory-resource-index.md',
    category: 'Agent Memory Resource Survey Index',
    final_category: '教程/tutorial',
    function_tag: 'resource-index',
    base_theme: 'memory',
    stack: 'Markdown/Survey/Resource Index',
    language: 'Markdown',
    license: 'Unknown',
    stars: 155,
    forks: 8,
    commits: 22,
    issues: 1,
    pulls: 1,
    lastPushed: '2026-06-04T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 155 stars, 8 forks, 22 commits, 1 issue, 1 pull request, arXiv-backed survey positioning, and no visible license marker on the public repository page.',
    description:
      'Awesome Agent Memory is an up-to-date survey index for agent-memory papers, systems, and benchmarks rather than a runnable memory runtime.',
    pattern:
      'collect memory papers and systems -> organize them by mechanism and scope -> point readers to benchmark and implementation anchors -> keep the memory landscape navigable as a survey resource',
    tags: ['memory', 'survey index', 'resource map', 'benchmark entrypoint', 'agent memory'],
    bullets: [
      'The public GitHub page showed 155 stars, 8 forks, 22 commits, plus 1 open issue and 1 pull request.',
      'The about section frames it as an up-to-date Awesome Agent Memory paper resource linked to an arXiv survey.',
      'This repository is a taxonomy and evidence router for the memory layer, not a direct implementation runtime.',
      'No authenticated GitHub API freshness was used in this workspace.'
    ],
    why: '它把 memory 从零散实现拉回到系统性资源地图，适合在 README 和站点前排回答“memory 领域到底有哪些东西”这个问题。',
    why_en:
      'It turns the memory layer back into a system-level resource map, which is useful when readers first ask what the memory landscape actually contains.'
  },
  {
    name: 'Learning SDK',
    repo: 'letta-ai/learning-sdk',
    url: 'https://github.com/letta-ai/learning-sdk',
    rawFile: 'raw-github/letta-ai_agentic-learning-sdk.md',
    report: 'projects/399-letta-learning-sdk-continual-memory-sdk.md',
    siteReport: 'site/public/reports/projects/399-letta-learning-sdk-continual-memory-sdk.md',
    category: 'Continual Learning And Long-Term Memory SDK',
    final_category: '框架/framework',
    function_tag: 'memory-runtime',
    base_theme: 'memory',
    stack: 'Python/TypeScript/Letta SDK',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 45,
    forks: 3,
    commits: 72,
    issues: 1,
    pulls: 1,
    lastPushed: '2026-06-04T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 45 stars, 3 forks, 72 commits, Apache-2.0 license, Python and TypeScript packages, and a one-line pattern for adding continual learning plus long-term memory to existing LLM agents.',
    description:
      'Learning SDK is a drop-in memory and continual-learning substrate for existing LLM agents, exposing a thin wrapper instead of a full custom runtime.',
    pattern:
      'wrap an existing LLM client -> capture conversation traces -> persist and inject relevant memory -> make the original agent stateful without retraining the base model',
    tags: ['memory runtime', 'continual learning', 'stateful agents', 'sdk', 'provider-agnostic'],
    bullets: [
      'The public GitHub page showed 45 stars, 3 forks, 72 commits, and Apache-2.0 licensing.',
      'The README demonstrates a minimal wrapper that adds learning to existing OpenAI, Claude, and Gemini code paths.',
      'The repository includes Python and TypeScript packages plus provider examples rather than a monolithic agent product.',
      'No authenticated GitHub API freshness was used in this workspace.'
    ],
    why: '它把“memory + learning”压缩成一个可嵌入 SDK，而不是整套 runtime，适合补齐用户关心的 skill/memory 基础设施层。',
    why_en:
      'It compresses memory plus learning into an embeddable SDK instead of an entire runtime, which helps cover the infrastructure layer users care about.'
  },
  {
    name: 'Awesome Code as Agent Harness Papers',
    repo: 'yennning/awesome-code-as-agent-harness-papers',
    url: 'https://github.com/YennNing/Awesome-Code-as-Agent-Harness-Papers',
    rawFile: 'raw-github/yennning_awesome-code-as-agent-harness-papers.md',
    report: 'projects/400-yennning-code-as-agent-harness-papers.md',
    siteReport: 'site/public/reports/projects/400-yennning-code-as-agent-harness-papers.md',
    category: 'Code-As-Agent-Harness Survey Index',
    final_category: '教程/tutorial',
    function_tag: 'resource-index',
    base_theme: 'harness',
    stack: 'Markdown/Survey/Harness Taxonomy',
    language: 'Markdown',
    license: 'MIT',
    stars: 331,
    forks: 24,
    commits: 32,
    issues: 4,
    pulls: 0,
    lastPushed: '2026-06-04T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 331 stars, 24 forks, 32 commits, MIT license, 4 issues, and a survey taxonomy spanning harness interface, harness mechanisms, and scaling the harness for agentic code systems.',
    description:
      'Awesome Code as Agent Harness Papers is a harness-first survey index that turns code-centric agent systems into an organized reading and comparison map.',
    pattern:
      'collect code-centric agent papers -> regroup them by harness interface, mechanism, and scaling pattern -> expose memory, tool, debugging, and multi-agent topology lanes -> provide a navigable harness taxonomy',
    tags: ['harness', 'survey index', 'code agents', 'taxonomy', 'multi-agent topology'],
    bullets: [
      'The public GitHub page showed 331 stars, 24 forks, 32 commits, and MIT licensing.',
      'The README organizes the literature into harness interface, harness mechanisms, and scaling-the-harness sections.',
      'Memory and context engineering, tool use, debugging, and multi-agent topology are explicitly exposed as harness sub-lanes.',
      'No authenticated GitHub API freshness was used in this workspace.'
    ],
    why: '它直接服务用户强调的 harness 方向，而且不是单个项目，而是把 code-as-harness 这条路线变成可教学的入口。',
    why_en:
      'It directly serves the user-emphasized harness direction by turning the code-as-harness route into a teachable entry point rather than a single implementation.'
  },
  {
    name: 'Geneclaw',
    repo: 'clawland-ai/geneclaw',
    url: 'https://github.com/Clawland-AI/Geneclaw',
    rawFile: 'raw-github/clawland-ai_geneclaw.md',
    report: 'projects/401-geneclaw-safe-self-evolving-agent-framework.md',
    siteReport: 'site/public/reports/projects/401-geneclaw-safe-self-evolving-agent-framework.md',
    category: 'Safe Self-Evolving Agent Framework',
    final_category: '框架/framework',
    function_tag: 'agent-evolution-infra',
    base_theme: 'evolution',
    stack: 'Python/Nanobot/Geneclaw Evolution Protocol',
    language: 'Python',
    license: 'MIT',
    stars: 36,
    forks: 8,
    commits: 8,
    issues: 0,
    pulls: 0,
    lastPushed: '2026-06-04T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 36 stars, 8 forks, 8 commits, MIT license, 0 issues, 0 pull requests, and a dry-run-first self-evolution loop with a five-layer gatekeeper plus benchmark and rollback surfaces.',
    description:
      'Geneclaw is a safe-by-default self-evolving agent framework that observes failures, proposes fixes, and only applies changes behind an explicit safety gate.',
    pattern:
      'observe failures -> diagnose root causes -> propose constrained diffs -> validate through five safety gates -> branch, test, and apply only after approval or configured autopilot',
    tags: ['self-evolving agents', 'safety gatekeeper', 'agent evolution', 'rollback', 'benchmark hooks'],
    bullets: [
      'The public GitHub page showed 36 stars, 8 forks, 8 commits, and MIT licensing.',
      'The README exposes an explicit self-evolution loop with observability, diagnosis, proposals, gatekeeping, safe apply, reporting, and doctor checks.',
      'Dry-run-by-default and explicit approval constraints make it a useful example of controlled self-modification rather than free-form mutation.',
      'No authenticated GitHub API freshness was used in this workspace.'
    ],
    why: '它是“受控自进化”最直观的工程样本之一，正好对应 README 核心判断里用户最关心的安全与审计边界。',
    why_en:
      'It is one of the clearest engineering samples of controlled self-evolution, matching the README’s core judgment about safety and audit boundaries.'
  },
  {
    name: 'ClawBench',
    repo: 'openclaw/clawbench',
    url: 'https://github.com/openclaw/clawbench',
    rawFile: 'raw-github/openclaw_clawbench.md',
    report: 'projects/402-openclaw-clawbench-full-stack-agent-benchmark.md',
    siteReport: 'site/public/reports/projects/402-openclaw-clawbench-full-stack-agent-benchmark.md',
    category: 'Trace-Scored Full-Stack Agent Benchmark',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'benchmark',
    stack: 'Python/Trace-Scored Benchmark/Docker',
    language: 'Python',
    license: 'MIT',
    stars: 106,
    forks: 19,
    commits: 121,
    issues: 0,
    pulls: 2,
    lastPushed: '2026-06-04T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 106 stars, 19 forks, 121 commits, MIT license, 0 issues, 2 pull requests, and a trace-scored benchmark that measures harness, config, and model instead of only final LLM output.',
    description:
      'ClawBench is a benchmark for agent systems that scores the full stack through execution traces, reliability metrics, and diagnostics rather than only final-task success.',
    pattern:
      'run container-isolated tasks -> capture full execution traces -> score deterministic completion, trajectory quality, and behavior -> quantify noise and failure regimes -> compare harness/model/config combinations',
    tags: ['benchmark', 'trace scoring', 'harness evaluation', 'reliability', 'diagnostics'],
    bullets: [
      'The public GitHub page showed 106 stars, 19 forks, 121 commits, 0 issues, 2 pull requests, and MIT licensing.',
      'The benchmark explicitly scores the harness, configuration, and model stack instead of treating the LLM alone as the system.',
      'README sections expose execution-trace scoring, reliability quantification, variance decomposition, and partner trace specs.',
      'No authenticated GitHub API freshness was used in this workspace.'
    ],
    why: '它补上了 benchmark 面最关键的“评测整条 agent 栈，而不是只测模型输出”这一层。',
    why_en:
      'It covers the benchmark layer’s most important gap: scoring the whole agent stack rather than only model outputs.'
  }
];

const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const write = (relative, value) => fs.writeFileSync(path.join(root, relative), value);

const csvEscape = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const parseExport = (source, name) => {
  const match = source.match(new RegExp(`export const ${name}(?:: [^=]+)? = ([\\s\\S]*?);\\s*(?:export const|$)`));
  if (!match) {
    throw new Error(`Cannot parse export: ${name}`);
  }
  return vm.runInNewContext(match[1]);
};

const rawCapture = (repo) => `---
repo: ${repo.repo}
url: ${repo.url}
content_timestamp: ${repo.content_timestamp}
time_slice: ${repo.time_slice}
timestamp_source: web_observed_public_github_page_2026_06_04
collected_at: ${runAt}
source: github
---

## GitHub - ${repo.repo}: ${repo.description}

**Source**: ${repo.url}

---

# Raw public page capture notes

This raw-style public GitHub page capture was refreshed by the hourly public metadata update. Shell GitHub API access remained blocked in this workspace, so freshness is web-observed rather than API-verified.

## Visible repository metadata

- Repository: ${repo.repo}
- URL: ${repo.url}
- Stars: ${repo.stars}
- Forks: ${repo.forks}
- Commits: ${repo.commits}
- Issues: ${repo.issues}
- Pull requests: ${repo.pulls}
- License: ${repo.license}
- Primary language / stack signal: ${repo.stack}
- Collection timestamp: ${runAt}

## Visible README / page excerpts

${repo.bullets.map((line) => `- ${line}`).join('\n')}

## Raw capture boundary

No benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.
`;

const modelCard = (repo) => `# ${repo.name} Model Card

| Field | Value |
|---|---|
| Repository | [${repo.repo}](${repo.url}) |
| Category | ${repo.category} |
| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |
| Commits / issues / PRs snapshot | ${repo.commits} / ${repo.issues} / ${repo.pulls} |
| Language | ${repo.language} |
| License | ${repo.license} |
| Raw capture | ${repo.rawFile} |
| Updated by | hourly public metadata update, ${runDisplay} |

## 1. Role in Self Evolve

${repo.description} It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence} This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on ${repo.content_timestamp}, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain ${repo.category}: it shows how survey indexes, embeddable memory SDKs, harness taxonomies, controlled self-modification, or trace-scored benchmarks connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
`;

const repoTableZh = `| 仓库 | 这轮补了什么 | 为什么重要 |
|---|---|---|
${repos
  .map(
    (repo) =>
      `| [${repo.repo}](${repo.url}) | 刷新 raw snapshot、project card、site public report 与分类元数据，统一到 ${repo.content_timestamp} 的公开 GitHub 页面证据。 | ${repo.why} |`
  )
  .join('\n')}`;

const repoTableEn = `| Repository | What this run repaired | Why it matters |
|---|---|---|
${repos
  .map(
    (repo) =>
      `| [${repo.repo}](${repo.url}) | Refreshed the raw snapshot, project card, site-facing public report, and classification metadata from the public GitHub page observed on ${repo.content_timestamp}. | ${repo.why_en} |`
  )
  .join('\n')}`;

const updateReadmeSection = (file, heading, table) => {
  const source = read(file);
  const start = source.indexOf(`## ${heading}`);
  const end = source.indexOf('```mermaid', start);
  if (start === -1 || end === -1) {
    throw new Error(`Failed to locate section ${heading} in ${file}`);
  }
  const next = `${source.slice(0, start)}## ${heading}\n\n${table}\n\n${source.slice(end)}`;
  write(file, next);
};

const updateRepoClassification = () => {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
  const repoMap = new Map(repos.map((repo) => [repo.repo.toLowerCase(), repo]));
  const rows = data.rows.map((row) => {
    const repo = repoMap.get(String(row.repo).toLowerCase());
    if (!repo) return row;
    return {
      ...row,
      repo: repo.repo,
      url: repo.url,
      stars: String(repo.stars),
      final_category: repo.final_category,
      function_tag: repo.function_tag,
      base_theme: repo.base_theme,
      stack: repo.stack,
      time_slice: repo.time_slice,
      content_timestamp: repo.content_timestamp,
      evidence: repo.evidence,
      description: repo.description
    };
  });

  write(file, `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

  const columns = Object.keys(rows[0]);
  write(
    'research/repo-classification.csv',
    `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`
  );

  const counts = new Map();
  for (const row of rows) {
    counts.set(row.final_category, (counts.get(row.final_category) || 0) + 1);
  }
  const countRows = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const refreshed = repos
    .map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.final_category} | ${repo.base_theme} | ${repo.function_tag} | ${repo.evidence.replace(/\|/g, '/')} |`)
    .join('\n');
  const fullRows = rows
    .map(
      (row, index) =>
        `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`
    )
    .join('\n');

  write(
    'research/repo-classification.md',
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 刷新项\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${refreshed}\n\n本轮刷新聚焦 memory survey、continual-learning SDK、code-as-harness survey、safe self-evolving framework 与 trace-scored benchmark 五类 public metadata 面，保持 raw -> processed -> results 同步。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`
  );
};

const updateSiteProjects = () => {
  const file = 'site/src/data/projects.ts';
  const source = read(file);
  const projects = parseExport(source, 'projects');
  const groups = parseExport(source, 'projectGroups');

  const repoMap = new Map(repos.map((repo) => [repo.repo, repo]));
  const nextProjects = [...projects];

  for (const repo of repos) {
    if (nextProjects.some((project) => project.repo === repo.repo)) continue;
    nextProjects.push({
      name: repo.name,
      repo: repo.repo,
      url: repo.url,
      description: repo.description,
      stack: repo.stack.split('/'),
      category: repo.category,
      status: 'candidate',
      stars: repo.stars,
      forks: repo.forks,
      lastPushed: repo.lastPushed,
      language: repo.language,
      license: repo.license,
      report: repo.report,
      pattern: repo.pattern,
      tags: repo.tags,
      localPath: repo.rawFile
    });
  }

  const nextGroups = groups.map((group) => {
    const reposInGroup = [...group.repos];
    if (group.title === 'Agent Skills / Memory / Harness') {
      for (const repo of [
        'agentmemoryworld/awesome-agent-memory',
        'letta-ai/learning-sdk',
        'yennning/awesome-code-as-agent-harness-papers'
      ]) {
        if (!reposInGroup.includes(repo)) reposInGroup.push(repo);
      }
    }
    if (group.title === 'Agent 自进化系统' && !reposInGroup.includes('clawland-ai/geneclaw')) {
      reposInGroup.push('clawland-ai/geneclaw');
    }
    if (group.title === 'Agent 评测基准' && !reposInGroup.includes('openclaw/clawbench')) {
      reposInGroup.push('openclaw/clawbench');
    }
    return { ...group, repos: reposInGroup };
  });

  write(
    file,
    `export type Project = {
  name: string;
  repo: string;
  url: string;
  description: string;
  stack: string[];
  category: string;
  status: 'placeholder' | 'candidate' | 'verified';
  stars: number;
  forks: string | number;
  lastPushed: string;
  language: string;
  license: string;
  report: string;
  pattern: string;
  tags: string[];
  localPath?: string;
};

export const projects: Project[] = ${JSON.stringify(nextProjects, null, 4)};

export const projectGroups = ${JSON.stringify(nextGroups, null, 2)};
`
  );
};

const renderGraphJson = () => ({
  generated_at: runAt,
  truth_source: '.mermaid/current/graph.json',
  nodes: [
    {
      id: 'intent.direct-user-input',
      title: 'Direct user intent',
      layer: 'ops',
      status: 'active',
      paths: ['docs/project-management/user-direct-inputs.md', 'CURRENT_GOAL.md']
    },
    {
      id: 'raw.github.hourly-captures',
      title: 'Hourly GitHub raw captures',
      layer: 'raw',
      status: 'updated',
      paths: repos.map((repo) => repo.rawFile)
    },
    {
      id: 'processed.github-classification',
      title: 'GitHub classification and project cards',
      layer: 'processed',
      status: 'updated',
      paths: ['research/repo-classification.json', 'analysis/github-project-data-analysis.md', ...repos.map((repo) => repo.report)]
    },
    {
      id: 'results.public-site',
      title: 'Public site and report surfaces',
      layer: 'results',
      status: 'updated',
      paths: ['site/src/data/projects.ts', ...repos.map((repo) => repo.siteReport), 'README.md', 'README-ZH.md', 'README-EN.md']
    },
    {
      id: 'work.learning-note',
      title: 'Learning note and run ledger',
      layer: 'work',
      status: 'updated',
      paths: [runNote]
    }
  ],
  edges: [
    ['intent.direct-user-input', 'raw.github.hourly-captures', 'governs'],
    ['raw.github.hourly-captures', 'processed.github-classification', 'feeds'],
    ['processed.github-classification', 'results.public-site', 'publishes'],
    ['processed.github-classification', 'work.learning-note', 'explains'],
    ['work.learning-note', 'intent.direct-user-input', 'handoff']
  ],
  current_run: {
    repos: repos.map((repo) => ({
      repo: repo.repo,
      raw_capture: repo.rawFile,
      report: repo.report,
      site_report: repo.siteReport,
      stars: repo.stars,
      forks: repo.forks,
      commits: repo.commits,
      theme: repo.base_theme
    })),
    blockers: [
      'shell GitHub API access remained blocked in this workspace',
      'GitNexus CLI is available but stale against current HEAD, so it was treated as topology tooling rather than freshness evidence'
    ],
    working_principle:
      'public GitHub page evidence -> raw-github refresh -> repo-classification/project/site registry -> README/i18n + public reports -> indexes + analysis + site build'
  }
});

const renderGraphMd = () => `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for memory, harness, evolution, and benchmark anchors.
- **results.public-site** (results, updated): Push the metadata refresh into README/i18n, project reports, and site project data.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}.
- Refreshed raw files: ${repos.map((repo) => repo.rawFile).join(', ')}.
- Refreshed public reports: ${repos.map((repo) => repo.siteReport).join(', ')}.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI is available but stale against the current root commit, so it was not used as freshness evidence in this run.
`;

const renderGraphMmd = () => `flowchart LR
  INTENT["Direct user intent"] --> RAW["raw-github refresh"]
  RAW --> PROC["classification + project cards"]
  PROC --> SITE["README / site data / public reports"]
  PROC --> NOTE["work learning note"]
  NOTE --> INTENT
`;

const renderRunNote = () => `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed five stale-or-unknown GitHub metadata anchors and propagated them through raw, processed, README/i18n, Mermaid, project reports, and the public site registry.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around memory resources, embeddable continual-learning SDKs, harness survey maps, controlled self-evolving frameworks, and full-stack agent benchmarks. The run updated raw captures, project cards, site-facing reports, repo classification, README/i18n packet summaries, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked in this workspace, and GitNexus CLI only reported stale index status rather than current repository freshness.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.base_theme} | ${repo.stars}/${repo.forks} | ${repo.commits} | \`${repo.siteReport}\` |`).join('\n')}

## Working Principle

Public GitHub page evidence -> \`raw-github/*.md\` refresh -> \`research/repo-classification.*\` row updates -> \`projects/*.md\` and \`site/public/reports/projects/*.md\` -> \`site/src/data/projects.ts\` -> README/i18n packet + Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- Shell GitHub API access remained blocked in this workspace; no authenticated API freshness is claimed.
- \`npx gitnexus status\` succeeded earlier in the run and reported the root-repo index was stale before this iteration commit.
- No benchmark was executed and no target repository clone was modified in this pass.
- \`.mermaid/current/graph.json\` remains the truth source; \`.md\` and \`.mmd\` are rendered views.
`;

for (const repo of repos) {
  write(repo.rawFile, rawCapture(repo));
  write(repo.report, modelCard(repo));
  write(repo.siteReport, modelCard(repo));
}

updateRepoClassification();
updateSiteProjects();
updateReadmeSection('README.md', '本轮 GitHub Metadata 修复包', repoTableZh);
updateReadmeSection('README-ZH.md', '本轮 GitHub Metadata 修复包', repoTableZh);
updateReadmeSection('README-EN.md', 'Current GitHub Metadata Repair Packet', repoTableEn);

write('.mermaid/current/graph.json', `${JSON.stringify(renderGraphJson(), null, 2)}\n`);
write('.mermaid/current/graph.md', renderGraphMd());
write('.mermaid/current/graph.mmd', renderGraphMmd());
write(runNote, renderRunNote());
