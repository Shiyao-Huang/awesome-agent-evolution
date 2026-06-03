import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-03T13:55:19+08:00';
const runDate = '2026-06-03';
const runDisplay = '2026-06-03 13:55 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-03-1355.md';

const repos = [
  {
    name: 'RepairAgent',
    repo: 'sola-st/repairagent',
    url: 'https://github.com/sola-st/RepairAgent',
    rawFile: 'raw-github/sola-st_repairagent.md',
    report: 'projects/393-repairagent-java-autonomous-bug-repair.md',
    siteReport: 'site/public/reports/projects/393-repairagent-java-autonomous-bug-repair.md',
    category: 'Autonomous Java Bug Repair Agent',
    final_category: '工具/tool',
    function_tag: 'code-repair-agent',
    base_theme: 'coding-agent',
    stack: 'Python/Java/Defects4J Program Repair',
    language: 'Python',
    license: 'MIT',
    stars: 99,
    forks: 32,
    commits: 82,
    lastPushed: '2026-06-03T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence:
      'web-observed GitHub page showed 99 stars, 32 forks, 82 commits, MIT license badge, an autonomous bug-repair loop over Defects4J, and a reported 164 correct fixes benchmark result.',
    description:
      'RepairAgent is an autonomous agent that fixes bugs in Java projects using LLMs through a localize-analyze-fix-test iteration loop.',
    pattern:
      'read failing test -> localize bug -> analyze code -> generate patch -> run tests -> iterate until a correct fix survives validation',
    tags: ['code repair', 'defects4j', 'bug fixing agent', 'java', 'autonomous debugging'],
    bullets: [
      'The public page describes RepairAgent as an autonomous LLM-powered bug repair system for Java projects.',
      'The visible workflow is explicit: localize the bug, analyze the code, generate a fix, test it, and iterate.',
      'The README highlights Defects4J results with 164 correct fixes and positions the project as an ICSE 2025 program-repair agent.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把“会修 bug”的说法压回到明确的补丁生成与测试闭环，而不是只给 coding demo 热度。',
    why_en:
      'It grounds coding-agent improvement in an explicit patch-and-test loop instead of relying on demo-style coding hype.'
  },
  {
    name: 'AccelOpt',
    repo: 'zhang677/accelopt',
    url: 'https://github.com/zhang677/AccelOpt',
    rawFile: 'raw-github/zhang677_accelopt.md',
    report: 'projects/394-accelopt-self-improving-kernel-optimizer.md',
    siteReport: 'site/public/reports/projects/394-accelopt-self-improving-kernel-optimizer.md',
    category: 'Self-Improving Accelerator Kernel Optimization Agent',
    final_category: '论文代码/paper-code',
    function_tag: 'kernel-optimizer',
    base_theme: 'evolution',
    stack: 'Python/NKIBench/Accelerator Kernel Optimization',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 51,
    forks: 7,
    commits: 67,
    lastPushed: '2026-06-03T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence:
      'web-observed GitHub page showed 51 stars, 7 forks, 67 commits, Apache-2.0 license, NKIBench and FlashInfer-Bench evaluation paths, and an optimization memory over slow-fast kernel pairs.',
    description:
      'AccelOpt is a self-improving LLM agentic system that iteratively optimizes AI accelerator kernels using optimization memory and benchmarked kernel profiling.',
    pattern:
      'generate candidate kernel -> consult optimization memory -> profile on NKIBench or FlashInfer-Bench -> compare slow-fast kernel pairs -> keep stronger optimization traces',
    tags: ['self-improving agent', 'kernel optimization', 'nkibench', 'flashinfer-bench', 'accelerator tuning'],
    bullets: [
      'The README frames AccelOpt as a self-improving agentic system for accelerator kernel optimization.',
      'Public page sections expose both AWS Trainium and NVIDIA GPU execution paths through NKIBench and FlashInfer-Bench.',
      'The kernel database and optimization memory are described as reusable structure for retaining slow-fast kernel experience.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把“自进化 agent”放到真实硬件优化压力下，比抽象 prompt 试错更接近高价值工程闭环。',
    why_en:
      'It places self-improving agents under real hardware optimization pressure, which is closer to a high-value engineering loop than abstract prompt tinkering.'
  },
  {
    name: 'DM-Code-Agent',
    repo: 'hwfengcs/dm-code-agent',
    url: 'https://github.com/hwfengcs/DM-Code-Agent',
    rawFile: 'raw-github/hwfengcs_dm-code-agent.md',
    report: 'projects/395-dm-code-agent-auditable-code-baseline.md',
    siteReport: 'site/public/reports/projects/395-dm-code-agent-auditable-code-baseline.md',
    category: 'Auditable Local-First Code Agent Baseline',
    final_category: '工具/tool',
    function_tag: 'coding-agent-runtime',
    base_theme: 'coding-agent',
    stack: 'Python/SWE-bench Lite/Trace Replay',
    language: 'Python',
    license: 'MIT',
    stars: 138,
    forks: 12,
    commits: 78,
    lastPushed: '2026-06-03T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence:
      'web-observed GitHub page showed 138 stars, 12 forks, 78 commits, MIT license badge, a local-first auditable code-agent framing, JSONL trace replay, and SWE-bench Lite evaluation hooks.',
    description:
      'DM-Code-Agent is a local-first and auditable Python code agent baseline with explicit planning, trace replay, optional reflexion modules, and benchmark-facing evaluation paths.',
    pattern:
      'plan and replan -> call tools with JSONL trace capture -> enable optional reflexion or critic modules -> run maintenance benchmark harness -> replay and diff the trajectory',
    tags: ['code agent', 'trace replay', 'swe-bench lite', 'local first', 'auditable'],
    bullets: [
      'The README positions DM-Code-Agent as a readable local-first code agent rather than another opaque coding chatbot.',
      'Visible repository files include benchmark reports, evals, tracing docs, MCP guides, and skill guides.',
      'The public page highlights JSONL traces, replayability, hidden-test evaluation, and optional reflexion-style modules.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它提供了用户真正关心的审计与 replay 边界，可用于判断 coding agent 的改进是否可信。',
    why_en:
      'It exposes the audit and replay boundary users actually care about, which makes coding-agent improvement claims easier to trust.'
  },
  {
    name: 'LaSeR',
    repo: 'rucbm/laser',
    url: 'https://github.com/RUCBM/LaSeR',
    rawFile: 'raw-github/rucbm_laser.md',
    report: 'projects/396-laser-last-token-self-rewarding-rl.md',
    siteReport: 'site/public/reports/projects/396-laser-last-token-self-rewarding-rl.md',
    category: 'Last-Token Self-Rewarding Reinforcement Learning Recipe',
    final_category: '论文代码/paper-code',
    function_tag: 'self-reward-rl',
    base_theme: 'evolution',
    stack: 'Python/RLVR/Self-Rewarding Training',
    language: 'Python',
    license: 'MIT',
    stars: 36,
    forks: 2,
    commits: 6,
    lastPushed: '2026-06-03T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence:
      'web-observed GitHub page showed 36 stars, 2 forks, 6 commits, MIT license, a last-token self-rewarding RLVR objective, released checkpoints, and auxiliary self-reward usage at both training and testing time.',
    description:
      'LaSeR is a reinforcement-learning recipe that jointly improves reasoning and self-rewarding behavior by adding an MSE self-reward term to the RLVR objective.',
    pattern:
      'optimize RLVR objective -> learn last-token self-reward signal -> reuse auxiliary reward during training and testing -> improve reasoning and reward calibration together',
    tags: ['self reward', 'rlvr', 'reasoning optimization', 'paper code', 'checkpoint release'],
    bullets: [
      'The public page frames LaSeR as a lightweight method for jointly optimizing reasoning and self-rewarding.',
      'The repository exposes code, data, scripts, and a verl-based training path rather than a pure paper placeholder.',
      'Released checkpoints and training data links make it a concrete self-rewarding evidence point instead of a theoretical note.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它补上了“self-rewarding 到底是不是可运行 recipe”这一块，而不只是 survey 里的概念标签。',
    why_en:
      'It fills the gap between self-rewarding as a concept label and self-rewarding as a runnable training recipe.'
  },
  {
    name: 'GraphMind',
    repo: 'arthurmgraf/graphmind',
    url: 'https://github.com/arthurmgraf/graphmind',
    rawFile: 'raw-github/arthurmgraf_graphmind.md',
    report: 'projects/397-graphmind-knowledge-agent-rag-runtime.md',
    siteReport: 'site/public/reports/projects/397-graphmind-knowledge-agent-rag-runtime.md',
    category: 'Knowledge-Graph Agentic RAG Runtime',
    final_category: '框架/framework',
    function_tag: 'kg-agent-runtime',
    base_theme: 'framework',
    stack: 'Python/LangGraph/CrewAI/Knowledge Graph RAG',
    language: 'Python',
    license: 'MIT',
    stars: 1,
    forks: 0,
    commits: 15,
    lastPushed: '2026-06-03T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence:
      'web-observed GitHub page showed 1 star, 0 forks, 15 commits, MIT license, dual LangGraph and CrewAI orchestration, MCP and FastAPI entry points, and a self-evaluating retrieval loop over a shared knowledge-graph substrate.',
    description:
      'GraphMind is an agentic RAG runtime that combines knowledge graphs, dual orchestration engines, and self-evaluating retrieval pipelines for autonomous knowledge work.',
    pattern:
      'receive query -> choose LangGraph or CrewAI engine -> retrieve over hybrid graph layer -> self-evaluate the answer -> retry when score stays below threshold',
    tags: ['knowledge graph', 'agentic rag', 'langgraph', 'crewai', 'self evaluation'],
    bullets: [
      'The public page presents GraphMind as an autonomous knowledge agent platform rather than a plain RAG starter kit.',
      'The architecture diagram shows FastAPI and MCP entry points over LangGraph and CrewAI execution engines.',
      'A self-evaluation threshold with retry logic is visible in the README architecture section.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把 knowledge graph、agent runtime 和 retrieval self-eval 接到一起，是图式 agent 编排的重要相关样本。',
    why_en:
      'It connects knowledge graphs, agent runtime orchestration, and retrieval self-evaluation into one stack, which makes it a strong related sample for graph-native agents.'
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
timestamp_source: web_observed_public_github_page_2026_06_03
collected_at: ${runAt}
source: github
---

## GitHub - ${repo.repo}: ${repo.description}

**Source**: ${repo.url}

---

# Raw public page capture notes

This raw-style public GitHub page capture was recorded by the hourly public metadata update. Shell GitHub API access remains blocked in this workspace, so freshness is web-observed rather than API-verified.

## Visible repository metadata

- Repository: ${repo.repo}
- URL: ${repo.url}
- Stars: ${repo.stars}
- Forks: ${repo.forks}
- Commits: ${repo.commits}
- License: ${repo.license}
- Primary language / stack signal: ${repo.stack}
- Collection timestamp: ${runAt}

## Visible README / page excerpts

${repo.bullets.map((line) => `- ${line}`).join('\n')}

## Raw capture boundary

No benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.
`;

const modelCard = (repo) => `# ${repo.category} Model Card

| Field | Value |
|---|---|
| Repository | [${repo.repo}](${repo.url}) |
| Category | ${repo.category} |
| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |
| Language | ${repo.language} |
| License | ${repo.license} |
| Raw capture | ${repo.rawFile} |
| Updated by | hourly public metadata update, ${runDisplay} |

## 1. Role in Self Evolve

${repo.description} It matters because self-evolving agents need explicit feedback loops, observable retention mechanisms, and auditable evaluation pressure before improvement claims become useful.

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence} This iteration keeps freshness honest: the snapshot comes from the current public GitHub page, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain ${repo.category}: it shows how coding-agent, self-rewarding, optimization, or graph-runtime layers convert agent behavior into a reproducible engineering story.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or training experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
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
  const rows = data.rows.map((row) => {
    const repo = repos.find((item) => item.repo === row.repo);
    if (!repo) return row;
    return {
      ...row,
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
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 刷新项\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${refreshed}\n\n本轮刷新聚焦于 code repair、kernel optimization、auditable coding agent、self-rewarding RL 和 graph-native RAG runtime 五类相关 public metadata 面，保持 raw -> processed -> results 同步。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`
  );
};

const updateSiteProjects = () => {
  const file = 'site/src/data/projects.ts';
  const source = read(file);
  const projects = parseExport(source, 'projects');
  const groups = parseExport(source, 'projectGroups');

  const repoMap = new Map(repos.map((repo) => [repo.repo, repo]));
  const nextProjects = projects.map((project) => {
    const repo = repoMap.get(project.repo);
    if (!repo) return project;
    return {
      ...project,
      name: repo.name,
      url: repo.url,
      stars: repo.stars,
      forks: repo.forks,
      lastPushed: repo.lastPushed,
      language: repo.language,
      license: repo.license,
      report: repo.report,
      pattern: repo.pattern,
      description: repo.description,
      stack: repo.stack.split('/'),
      category: repo.category,
      localPath: repo.rawFile,
      status: 'candidate',
      tags: repo.tags
    };
  });

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

  const groupTargets = new Map([
    ['AI 软件工程', ['sola-st/repairagent', 'hwfengcs/dm-code-agent']],
    ['进化式代码 / AlphaEvolve 类', ['zhang677/accelopt']],
    ['安全、评判与数据/模型自进化', ['rucbm/laser']],
    ['图式 Agent 编排', ['arthurmgraf/graphmind']]
  ]);

  const nextGroups = groups.map((group) => {
    const additions = groupTargets.get(group.title);
    if (!additions) return group;
    const repos = [...group.repos];
    for (const repo of additions) {
      if (!repos.includes(repo)) repos.push(repo);
    }
    return { ...group, repos };
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
      paths: ['research/repo-classification.json', ...repos.map((repo) => repo.report)]
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
      'GitNexus CLI can report repo status but did not resolve generator helper symbols for impact analysis'
    ],
    working_principle:
      'public GitHub page evidence -> raw-github -> repo-classification/site project metadata -> README/i18n + public project reports -> indexes + analysis + site build'
  }
});

const renderGraphMd = () => `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for code-repair, optimization, self-rewarding, and graph-runtime repos.
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
- GitNexus CLI is available, but impact resolution for generator helper symbols remained blocked in this run.
`;

const renderGraphMmd = () => `flowchart LR
  INTENT["Direct user intent"] --> RAW["raw-github captures"]
  RAW --> PROC["repo classification + project cards"]
  PROC --> SITE["README / site data / public reports"]
  PROC --> NOTE["work learning note"]
  NOTE --> INTENT
`;

const renderRunNote = () => `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed five stale-or-unknown GitHub metadata anchors and propagated them through raw, processed, README/i18n, Mermaid, project reports, and the public site registry.

## Three Sentences

This iteration targeted repositories that answer adjacent user questions around coding-agent reliability, self-improving optimization loops, self-rewarding training, and graph-native knowledge orchestration. The run updated raw captures, project cards, site-facing reports, repo classification, README/i18n packet summaries, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked in this workspace, and GitNexus CLI could report repository status but not resolve generator helper symbols for impact analysis.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.base_theme} | ${repo.stars}/${repo.forks} | ${repo.commits} | \`${repo.siteReport}\` |`).join('\n')}

## Working Principle

Public GitHub page evidence -> \`raw-github/*.md\` refresh -> \`research/repo-classification.*\` row updates -> \`projects/*.md\` and \`site/public/reports/projects/*.md\` -> \`site/src/data/projects.ts\` -> README/i18n packet + Mermaid graph -> indexes, GitHub analysis, paper-facing corpus snapshot, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- Shell GitHub API access remained blocked in this workspace; no authenticated API freshness is claimed.
- \`npx gitnexus status\` succeeded and reported the root-repo index was stale before this iteration commit.
- \`npx gitnexus impact ...\` did not resolve the generator helper symbols, so blast-radius evidence for the packet runner remains a precise GitNexus blocker.
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
