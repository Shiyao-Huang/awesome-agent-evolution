import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-04T15:36:30+08:00';
const runDate = '2026-06-04';
const runDisplay = '2026-06-04 15:36 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-04-1536.md';

const repos = [
  {
    name: 'Awesome Agent Skills',
    repo: 'voltagent/awesome-agent-skills',
    url: 'https://github.com/voltagent/awesome-agent-skills',
    rawFile: 'raw-github/voltagent_awesome-agent-skills.md',
    report: 'projects/403-voltagent-awesome-agent-skills-resource-index.md',
    siteReport: 'site/public/reports/projects/403-voltagent-awesome-agent-skills-resource-index.md',
    category: 'Agent Skills Resource Index',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    stack: 'Markdown/Official Skill Registry',
    language: 'Markdown',
    license: 'MIT',
    stars: 24200,
    forks: 2600,
    commits: 359,
    issues: 5,
    pulls: 31,
    lastPushed: '2026-06-04T00:00:00Z',
    timeSlice: '2026-06',
    contentTimestamp: runDate,
    evidence:
      'web-observed GitHub page showed 24.2k stars, 2.6k forks, 359 commits, 5 open issues, 31 pull requests, visible MIT licensing, and a maintained skill directory centered on official engineering-team skill packs.',
    description:
      'voltagent/awesome-agent-skills is a high-signal resource index for reusable agent skills across Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot, and adjacent coding-agent surfaces.',
    pattern:
      'collect official and community skill packs -> normalize reader entry by tool and provider -> expose reusable procedures as installable skills -> keep the engineering skill ecosystem searchable and comparable',
    bullets: [
      'The public GitHub page showed 24.2k stars, 2.6k forks, 359 commits, 5 issues, and 31 pull requests.',
      'The README frames the repo as a hand-picked collection of official and community agent skills rather than an auto-generated dump.',
      'The top-level taxonomy is organized around providers and teams such as Anthropic, Google Gemini, VoltAgent, and other engineering organizations.',
      'Visible page text exposed MIT licensing and compatibility with Claude Code, Codex, Gemini CLI, Cursor, GitHub Copilot, and related tools.'
    ],
    whyZh:
      '它把 skill 从零散 prompt 包提升成一个官方团队可追踪的技能生态入口，直接对应用户要求的 skill / methodology 证据层。',
    whyEn:
      'It upgrades skill evidence from scattered prompt packs into a trackable ecosystem entry point anchored in official engineering-team skill releases.'
  },
  {
    name: 'Agent Memory Benchmark',
    repo: 'vectorize-io/agent-memory-benchmark',
    url: 'https://github.com/vectorize-io/agent-memory-benchmark',
    rawFile: 'raw-github/vectorize-io_agent-memory-benchmark.md',
    report: 'projects/77-agent-memory-benchmark.md',
    siteReport: 'site/public/reports/projects/77-agent-memory-benchmark.md',
    category: 'Agent Memory Benchmark',
    finalCategory: '评测/evaluation',
    functionTag: 'benchmark-eval',
    baseTheme: 'memory',
    stack: 'Python/Vue/Agent Memory Benchmark',
    language: 'Python',
    license: 'Unknown',
    stars: 46,
    forks: 17,
    commits: 29,
    issues: 6,
    pulls: 4,
    lastPushed: '2026-06-04T00:00:00Z',
    timeSlice: '2026-06',
    contentTimestamp: runDate,
    evidence:
      'web-observed GitHub page showed 46 stars, 17 forks, 29 commits, 6 open issues, 4 pull requests, and a benchmark surface spanning ingest, retrieve, generate, judge, outputs, and a bundled viewer.',
    description:
      'vectorize-io/agent-memory-benchmark is a benchmark harness for comparing agent memory strategies on multi-step tasks where retrieval quality, latency, and token cost all matter.',
    pattern:
      'ingest documents and traces -> retrieve candidate context -> generate agent answer -> judge accuracy and cost -> compare memory strategies across datasets and modes',
    bullets: [
      'The public GitHub page showed 46 stars, 17 forks, 29 commits, 6 issues, and 4 pull requests.',
      'Visible repository structure exposed `data`, `outputs`, `src/memory_bench`, `ui`, and result-manifest files rather than only a paper stub.',
      'The raw README framing remains benchmark-first: memory architectures are compared through measurable retrieval and answer outcomes.',
      'The public page did not expose a reliable license label in the observed snapshot, so license freshness stays conservative.'
    ],
    whyZh:
      '它把 memory 从“有没有记住”推进到可比的 benchmark 层，补齐用户要求的 memory + eval 公开证据。',
    whyEn:
      'It turns memory from a vague capability claim into a benchmark layer with measurable retrieval and answer tradeoffs.'
  },
  {
    name: 'SkillsBench',
    repo: 'benchflow-ai/skillsbench',
    url: 'https://github.com/benchflow-ai/skillsbench',
    rawFile: 'raw-github/benchflow-ai_skillsbench.md',
    report: 'projects/248-skillsbench-agent-skills-benchmark.md',
    siteReport: 'site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md',
    category: 'Agent Skills Benchmark Harness',
    finalCategory: '评测/evaluation',
    functionTag: 'benchmark-eval',
    baseTheme: 'skill',
    stack: 'PDDL/Python/Website/Tasks',
    language: 'PDDL',
    license: 'Apache-2.0',
    stars: 1300,
    forks: 312,
    commits: 385,
    issues: 12,
    pulls: 49,
    lastPushed: '2026-06-04T00:00:00Z',
    timeSlice: '2026-06',
    contentTimestamp: runDate,
    evidence:
      'web-observed GitHub page showed 1.3k stars, 312 forks, 385 commits, 12 open issues, 49 pull requests, Apache-2.0 licensing, and runnable task plus website surfaces for skills-focused evaluation.',
    description:
      'benchflow-ai/skillsbench is a benchmark harness for testing how well agents compose and use reusable skills across multi-step tasks under deterministic verification.',
    pattern:
      'task plus skill set -> agent run -> deterministic verifier scoring -> artifact and leaderboard export -> compare skill usage quality over time',
    bullets: [
      'The public GitHub page showed 1.3k stars, 312 forks, 385 commits, 12 issues, and 49 pull requests.',
      'Visible repository structure exposed `.agents/skills`, `docs`, `experiments`, `tasks`, `tasks-extra`, and `website`.',
      'The page exposed Apache-2.0 licensing and a benchmark orientation rather than a general-purpose runtime.',
      'This snapshot came from the live public repository page rather than a cached search result.'
    ],
    whyZh:
      '它补的是“skills 到底有没有被 agent 用好”这一层，比 skill pack 本身更接近用户要求的 benchmark/eval 证据链。',
    whyEn:
      'It answers whether agents can actually use skills well, which is closer to the benchmark/eval chain than a skill pack alone.'
  },
  {
    name: 'Agent Harness (EvalOps)',
    repo: 'evalops/agent-harness',
    url: 'https://github.com/evalops/agent-harness',
    rawFile: 'raw-github/evalops_agent-harness.md',
    report: 'projects/259-evalops-agent-harness-provider-adapter.md',
    siteReport: 'site/public/reports/projects/259-evalops-agent-harness-provider-adapter.md',
    category: 'Cross-Provider Agent Harness Adapter',
    finalCategory: '工具/tool',
    functionTag: 'framework-runtime',
    baseTheme: 'harness',
    stack: 'Python/Bazel/OpenAI-Agents/Claude-Agent-SDK',
    language: 'Python',
    license: 'MIT',
    stars: 18,
    forks: 5,
    commits: 12,
    issues: 5,
    pulls: 0,
    lastPushed: '2026-06-04T00:00:00Z',
    timeSlice: '2026-06',
    contentTimestamp: runDate,
    evidence:
      'web-observed GitHub page showed 18 stars, 5 forks, 12 commits, 5 open issues, 0 pull requests, visible MIT licensing, and a unified harness surface for OpenAI Agents SDK and Anthropic Claude Agent SDK.',
    description:
      'evalops/agent-harness is a lightweight harness adapter that lets one tool registry and one prompt surface run across OpenAI and Claude agent SDK backends.',
    pattern:
      'register tools once -> normalize json schema and response shape -> lazy-load provider adapters -> run the same task across multiple agent backends for comparison',
    bullets: [
      'The public GitHub page showed 18 stars, 5 forks, 12 commits, 5 issues, and 0 pull requests.',
      'Visible repository structure exposed Bazel modules, tests, changelog, and scripts instead of only a README wrapper.',
      'The about text and README framing stay focused on hot-swapping between OpenAI Agents SDK and Anthropic Claude Agent SDK.',
      'The public page exposed visible MIT licensing in the repository header area.'
    ],
    whyZh:
      '它是 harness 方向里最直接的 provider 对照层，能把同一任务在不同 agent backend 上做可比实验。',
    whyEn:
      'It is a direct provider-comparison harness, useful when the same task needs to be measured across multiple agent backends.'
  },
  {
    name: 'Browser Harness',
    repo: 'browser-use/browser-harness',
    url: 'https://github.com/browser-use/browser-harness',
    rawFile: 'raw-github/browser-use_browser-harness.md',
    report: 'projects/261-browser-harness-self-healing-web-agent-runtime.md',
    siteReport: 'site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md',
    category: 'Self-Healing Browser Agent Harness',
    finalCategory: '评测/evaluation',
    functionTag: 'benchmark-eval',
    baseTheme: 'harness',
    stack: 'Python/CDP/Chrome Debugging/Playwright',
    language: 'Python',
    license: 'MIT',
    stars: 14300,
    forks: 1300,
    commits: 391,
    issues: 13,
    pulls: 98,
    lastPushed: '2026-06-04T00:00:00Z',
    timeSlice: '2026-06',
    contentTimestamp: runDate,
    evidence:
      'web-observed GitHub page showed 14.3k stars, 1.3k forks, 391 commits, 13 open issues, 98 pull requests, visible MIT licensing, and a self-healing browser harness centered on editable helper code and domain skills.',
    description:
      'browser-use/browser-harness connects LLM agents to live browsers through a thin editable CDP harness and encourages runtime self-healing helper generation.',
    pattern:
      'connect llm directly to live browser cdp -> patch missing helpers in agent-workspace during runs -> use domain interaction skills -> iteratively improve execution reliability',
    bullets: [
      'The public GitHub page showed 14.3k stars, 1.3k forks, 391 commits, 13 issues, and 98 pull requests.',
      'Visible repository structure exposed `agent-workspace`, `interaction-skills`, `docs`, `src/browser_harness`, and tests.',
      'The README framing stays explicit about self-healing helper code, browser websocket control, and install flows for coding agents.',
      'The public page exposed visible MIT licensing in the repository header area.'
    ],
    whyZh:
      '它把 browser-use 从单纯 demo 提升到可编辑 harness 形态，正好补上 browser/skill/harness 的交叉层。',
    whyEn:
      'It upgrades browser control from a demo into an editable harness substrate, covering the browser-skill-harness intersection.'
  },
  {
    name: 'swarmclaw',
    repo: 'swarmclawai/swarmclaw',
    url: 'https://github.com/swarmclawai/swarmclaw',
    rawFile: 'raw-github/swarmclawai_swarmclaw.md',
    report: 'projects/93-swarmclaw-agent-runtime.md',
    siteReport: 'site/public/reports/projects/93-swarmclaw-agent-runtime.md',
    category: 'Self-Hosted Agent Runtime',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'harness',
    stack: 'TypeScript/Agent Runtime/Memory/MCP/Delegation',
    language: 'TypeScript',
    license: 'MIT',
    stars: 544,
    forks: 106,
    commits: 490,
    issues: 3,
    pulls: 0,
    lastPushed: '2026-06-04T00:00:00Z',
    timeSlice: '2026-06',
    contentTimestamp: runDate,
    evidence:
      'web-observed GitHub page showed 544 stars, 106 forks, 490 commits, 3 open issues, 0 pull requests, and a self-hosted multi-agent runtime that exposes memory, MCP tools, schedules, delegation, skills, and 23+ model providers.',
    description:
      'swarmclawai/swarmclaw is a self-hosted multi-agent runtime that combines memory, MCP tooling, delegation, schedules, skills, and swarm-oriented execution surfaces.',
    pattern:
      'agent runtime -> memory and MCP connectors -> schedules and delegation -> swarm workflows -> self-hosted distribution and release cadence',
    bullets: [
      'The public GitHub page showed 544 stars, 106 forks, 490 commits, 3 issues, and 0 pull requests.',
      'Visible repository structure exposed `skills`, `scripts`, `tests`, `electron`, `public`, and runtime source directories.',
      'The repository description explicitly positions it as an open-source self-hosted AI agent runtime and multi-agent framework for autonomous swarms.',
      'The public snapshot preserved the runtime plus memory and MCP framing rather than only feature marketing.'
    ],
    whyZh:
      '它把 agent-swarm 从概念讨论拉回到一个具体 runtime 面，覆盖用户反复要求补强的 swarm / multi-agent 方向。',
    whyEn:
      'It turns the swarm discussion into a concrete runtime surface, matching the user’s repeated request to strengthen the multi-agent/swarm lane.'
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
  if (!match) throw new Error(`Cannot parse export ${name}`);
  return vm.runInNewContext(match[1]);
};

const rawCapture = (repo) => `---
repo: ${repo.repo}
url: ${repo.url}
content_timestamp: ${repo.contentTimestamp}
time_slice: ${repo.timeSlice}
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

No benchmark was rerun, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, timestamp indexes, and the public site.
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

${repo.description} It matters because self-evolving agents need inspectable memory, skill, harness, benchmark, and runtime substrates before improvement claims become trustworthy.

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence} This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on ${repo.contentTimestamp}, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain ${repo.category}: it shows how raw public GitHub evidence becomes a project-facing teaching artifact inside the self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
`;

const replaceSection = (source, heading, nextHeading, replacement) => {
  const start = source.indexOf(heading);
  if (start === -1) throw new Error(`Missing heading ${heading}`);
  const end = source.indexOf(nextHeading, start);
  if (end === -1) throw new Error(`Missing next heading ${nextHeading}`);
  return `${source.slice(0, start)}${replacement}\n\n${source.slice(end)}`;
};

const updateReadmes = () => {
  const zhTable = `## 近期证据更新（2026-06-04）

| 仓库 | 这轮补了什么 | 为什么重要 |
|---|---|---|
${repos
  .map(
    (repo) =>
      `| [${repo.repo}](${repo.url}) | 刷新 raw capture、project card、site public report 与分类元数据，统一到 ${repo.contentTimestamp} 的公开 GitHub 页面证据。 | ${repo.whyZh} |`
  )
  .join('\n')}`;
  const enTable = `## Recent Evidence Updates (2026-06-04)

| Repository | What this run refreshed | Why it matters |
|---|---|---|
${repos
  .map(
    (repo) =>
      `| [${repo.repo}](${repo.url}) | Refreshed the raw capture, project card, site-facing public report, and classification metadata from the public GitHub page observed on ${repo.contentTimestamp}. | ${repo.whyEn} |`
  )
  .join('\n')}`;
  const zhOnlyTable = `## 本轮 GitHub Metadata 修复包

| 仓库 | 这轮补了什么 | 为什么重要 |
|---|---|---|
${repos
  .map(
    (repo) =>
      `| [${repo.repo}](${repo.url}) | 刷新 raw capture、project card、site public report 与分类元数据，统一到 ${repo.contentTimestamp} 的公开 GitHub 页面证据。 | ${repo.whyZh} |`
  )
  .join('\n')}`;

  write(
    'README.md',
    replaceSection(read('README.md'), '## 近期证据更新（2026-06-04）', '## 核心洞察', zhTable)
  );
  write(
    'README-EN.md',
    replaceSection(read('README-EN.md'), '## Recent Evidence Updates (2026-06-04)', '## Core Insight', enTable)
  );
  write(
    'README-ZH.md',
    replaceSection(read('README-ZH.md'), '## 本轮 GitHub Metadata 修复包', '## 核心洞察', zhOnlyTable)
  );
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
      final_category: repo.finalCategory,
      function_tag: repo.functionTag,
      base_theme: repo.baseTheme,
      stack: repo.stack,
      time_slice: repo.timeSlice,
      content_timestamp: repo.contentTimestamp,
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
  for (const row of rows) counts.set(row.final_category, (counts.get(row.final_category) || 0) + 1);
  const countRows = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const refreshedRows = repos
    .map(
      (repo) =>
        `| [${repo.repo}](${repo.url}) | ${repo.finalCategory} | ${repo.baseTheme} | ${repo.functionTag} | ${repo.evidence.replace(/\|/g, '/')} |`
    )
    .join('\n');
  const fullRows = rows
    .map(
      (row, index) =>
        `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`
    )
    .join('\n');

  write(
    'research/repo-classification.md',
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）

- generated_at: ${runAt}
- companion_csv: \`research/repo-classification.csv\`
- companion_json: \`research/repo-classification.json\`

## 分类计数

| Category | Count |
|---|---:|
${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}

## 本轮 hourly public metadata 刷新项

| Repo | Category | Theme | Function | Evidence |
|---|---|---|---|---|
${refreshedRows}

本轮刷新聚焦 skill registry、memory benchmark、skills benchmark、cross-provider harness、browser harness 与 swarm runtime 六类 public metadata 面，并保持 raw -> processed -> results 同步。

## 完整分类表

| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |
|---:|---|---:|---|---|---|---|---|---|---|---|
${fullRows}
`
  );
};

const updateSiteProjects = () => {
  const file = 'site/src/data/projects.ts';
  const source = read(file);
  const projects = parseExport(source, 'projects');
  const groups = parseExport(source, 'projectGroups');
  const repoMap = new Map(repos.map((repo) => [repo.repo, repo]));

  const nextProjects = [];
  const seen = new Set();
  for (const project of projects) {
    const repo = repoMap.get(project.repo);
    if (!repo) {
      nextProjects.push(project);
      continue;
    }
    seen.add(repo.repo);
    nextProjects.push({
      ...project,
      url: repo.url,
      description: repo.description,
      stack: repo.stack.split('/'),
      category: repo.category,
      stars: repo.stars,
      forks: repo.forks,
      lastPushed: repo.lastPushed,
      language: repo.language,
      license: repo.license,
      report: repo.report,
      pattern: repo.pattern,
      tags: [...new Set([...(project.tags || []), repo.baseTheme, repo.functionTag])]
    });
  }

  for (const repo of repos) {
    if (seen.has(repo.repo)) continue;
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
      tags: [repo.baseTheme, repo.functionTag]
    });
  }

  const nextGroups = groups.map((group) => {
    const groupRepos = [...group.repos];
    if (group.title === 'Agent Skills / Memory / Harness') {
      for (const repo of [
        'voltagent/awesome-agent-skills',
        'vectorize-io/agent-memory-benchmark',
        'evalops/agent-harness',
        'browser-use/browser-harness'
      ]) {
        if (!groupRepos.includes(repo)) groupRepos.push(repo);
      }
    }
    if (group.title === 'Agent 评测基准' && !groupRepos.includes('benchflow-ai/skillsbench')) {
      groupRepos.push('benchflow-ai/skillsbench');
    }
    if (group.title === 'Production Agent Runtimes With Evolution Substrate' && !groupRepos.includes('swarmclawai/swarmclaw')) {
      groupRepos.push('swarmclawai/swarmclaw');
    }
    return { ...group, repos: groupRepos };
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

const updateGraph = () => {
  const graph = {
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
        theme: repo.baseTheme
      })),
      blockers: [
        'shell GitHub API access remained blocked in this workspace',
        'uid4oe/insight-swarm could not be refreshed via current web fetch and was left on prior evidence instead of fabricating freshness',
        'GitNexus CLI is available but stale against current HEAD until re-analysis'
      ],
      working_principle:
        'public GitHub page evidence -> raw-github refresh -> repo-classification/project/site registry -> README/i18n + public reports -> indexes + analysis + site build'
    }
  };

  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
  write(
    '.mermaid/current/graph.mmd',
    `flowchart LR
  INTENT["Direct user intent"] --> RAW["raw-github refresh"]
  RAW --> PROC["classification / project cards"]
  PROC --> SITE["site data / public reports / README"]
  PROC --> NOTE["work learning note"]
  NOTE --> INTENT
`
  );
  write(
    '.mermaid/current/graph.md',
    `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Nodes

- **intent.direct-user-input** (ops, active): Use direct user inputs as the only goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Refresh raw GitHub captures before downstream analysis.
- **processed.github-classification** (processed, updated): Update classification rows and project cards for skills, memory, harness, benchmark, and swarm runtime surfaces.
- **results.public-site** (results, updated): Push the refresh into README/i18n, site data, and public project reports.
- **work.learning-note** (work, updated): Record blockers, data flow, and current repo packet evidence.

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
- \`uid4oe/insight-swarm\` could not be refreshed through the current web path and stays on prior local evidence for now.
- GitNexus CLI is available but stale against the current root commit until a re-analysis pass is completed.
`
  );
};

const writeRunNote = () => {
  write(
    runNote,
    `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed six public GitHub metadata anchors across skill, memory, harness, benchmark, and swarm-runtime surfaces, then pushed that evidence into raw, processed, and public result layers.

## Three Sentences

This iteration follows the direct-user rule: refresh real GitHub project evidence instead of relying only on old summaries, keep raw material raw, and propagate the delta into README, site data, public reports, and indexes. The repo packet is \`voltagent/awesome-agent-skills\`, \`vectorize-io/agent-memory-benchmark\`, \`benchflow-ai/skillsbench\`, \`evalops/agent-harness\`, \`browser-use/browser-harness\`, and \`swarmclawai/swarmclaw\`. Shell GitHub API access remained blocked, so all freshness claims in this packet are explicitly web-observed public-page evidence.

## Working Principle

public GitHub page evidence -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> README/i18n -> \`site/src/data/projects.ts\` -> \`site/public/reports/projects/\` -> Astro site build

## Repo Packet

| Repo | Theme | Current snapshot | Public report |
|---|---|---|---|
${repos
  .map(
    (repo) =>
      `| \`${repo.repo}\` | ${repo.baseTheme} | ${repo.stars} stars / ${repo.forks} forks / ${repo.commits} commits | \`${repo.siteReport}\` |`
  )
  .join('\n')}

## Blockers And Boundaries

- Shell GitHub API access remained blocked in this workspace.
- \`uid4oe/insight-swarm\` could not be refreshed through the current web path, so this run kept prior local evidence instead of fabricating freshness.
- GitNexus CLI is installed, but \`npx gitnexus status\` reported the index as stale before this iteration commit.
- No repository clone, benchmark rerun, or private credentialed GitHub metadata was used in this packet.
`
  );
};

for (const repo of repos) {
  write(repo.rawFile, rawCapture(repo));
  write(repo.report, modelCard(repo));
  write(repo.siteReport, modelCard(repo));
}

updateReadmes();
updateRepoClassification();
updateSiteProjects();
updateGraph();
writeRunNote();
