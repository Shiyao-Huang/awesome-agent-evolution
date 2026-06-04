import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-04T21:38:16+08:00';
const runDate = '2026-06-04';
const runDisplay = '2026-06-04 21:38 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-04-2138.md';

const repos = [
  {
    name: 'PinchBench Skill',
    repo: 'pinchbench/skill',
    url: 'https://github.com/pinchbench/skill',
    rawFile: 'raw-github/pinchbench_skill.md',
    report: 'projects/51-pinchbench-skill.md',
    siteReport: 'site/public/reports/projects/51-pinchbench-skill.md',
    category: 'Real-World Agent Task Benchmark',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'evaluation',
    stack: 'Python/Shell/TypeScript/OpenClaw Benchmark Harness',
    language: 'Python',
    license: 'MIT',
    stars: 1200,
    forks: 136,
    commits: 383,
    issues: 18,
    pulls: 0,
    lastPushed: '2026-05-06T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed about 1.2k stars, 136 forks, 18 issues, 383 commits, MIT license, 14 releases with latest v2.0.0 on 2026-05-06, 53 real-world tasks, and transcript-preserving benchmark workflows for OpenClaw agents.',
    description:
      'PinchBench is an OpenClaw-oriented real task benchmark that measures coding agents across productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks.',
    pattern:
      'task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload',
    tags: ['benchmark', 'evaluation', 'openclaw', 'skills', 'transcripts'],
    bullets: [
      'The public GitHub page showed about 1.2k stars, 136 forks, 18 issues, 0 pull requests, and 383 commits.',
      'The repository explicitly says it contains benchmark skill/tasks rather than the official leaderboard backend.',
      'The benchmark covers 53 tasks across productivity, research, writing, coding, analysis, email, memory, and skill discovery.',
      'Each task can be graded automatically, by an LLM judge, or both; transcripts are retained under results folders for post-run analysis.'
    ]
  },
  {
    name: 'Hermes Benchmark Outer-Loop Harness',
    repo: 'howdymary/hermes-agent-metaharness',
    url: 'https://github.com/howdymary/hermes-agent-metaharness',
    rawFile: 'raw-github/howdymary_hermes-agent-metaharness.md',
    report: 'projects/250-hermes-agent-metaharness-outer-loop.md',
    siteReport: 'site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md',
    category: 'Hermes Benchmark Outer-Loop Harness',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-harness',
    base_theme: 'harness',
    stack: 'Python/Hermes Benchmark Outer Loop',
    language: 'Python',
    license: 'MIT',
    stars: 89,
    forks: 9,
    commits: 11,
    issues: 0,
    pulls: 0,
    lastPushed: '2026-05-26T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 89 stars, 9 forks, 0 issues, 0 pull requests, 11 commits, MIT license, explicit TBLite/TB2 benchmark orchestration, baseline-vs-candidate comparison, and frontier-backed deterministic search.',
    description:
      'Hermes Agent Meta-Harness is a standalone outer-loop evaluator that optimizes Hermes benchmark harness candidates without modifying model weights.',
    pattern:
      'select candidate -> evaluate on TBLite/TB2 -> parse archives -> compare baseline vs candidate -> update frontier',
    tags: ['hermes', 'meta-harness', 'benchmark orchestration', 'frontier tracking', 'candidate mutation'],
    bullets: [
      'The public GitHub page showed 89 stars, 9 forks, 0 issues, 0 pull requests, and 11 commits.',
      'The README keeps Hermes as the execution backend while the meta-harness owns comparison, archive analysis, and mutation search.',
      'The current scope targets TBLite and TB2 benchmark orchestration rather than production chat behavior.',
      'Meta-Harness does not hardcode a model provider; backend choice is delegated to Hermes through hermes config paths.'
    ]
  },
  {
    name: 'Awesome Agent Harness (AutoJunjie)',
    repo: 'AutoJunjie/awesome-agent-harness',
    url: 'https://github.com/AutoJunjie/awesome-agent-harness',
    rawFile: 'raw-github/autojunjie_awesome-agent-harness.md',
    report: 'projects/265-awesome-agent-harness-autojunjie-curation.md',
    siteReport: 'site/public/reports/projects/265-awesome-agent-harness-autojunjie-curation.md',
    category: 'Harness Curation and Reading Map',
    final_category: '教程/tutorial',
    function_tag: 'resource-index',
    base_theme: 'harness',
    stack: 'Markdown/Resource Curation/Benchmark Notes',
    language: 'Markdown',
    license: 'Unknown',
    stars: 437,
    forks: 32,
    commits: 59,
    issues: 1,
    pulls: 7,
    lastPushed: '2026-05-27T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 437 stars, 32 forks, 1 issue, 7 pull requests, 59 commits, no visible license badge, and a README organized around harness engineering layers from task runners to memory and protocols.',
    description:
      'AutoJunjie/awesome-agent-harness curates the emerging agent harness ecosystem, combining benchmark references and implementation pointers.',
    pattern:
      'collect harness repositories and papers -> classify them by lifecycle, runtime, memory, protocols, and workflows -> provide a quick browse path for reproducibility and safety trends',
    tags: ['harness', 'resource-index', 'benchmark', 'memory', 'protocols'],
    bullets: [
      'The public GitHub page showed 437 stars, 32 forks, 1 issue, 7 pull requests, and 59 commits.',
      'The README defines agent harness engineering as environments, constraints, and feedback loops that make coding agents reliable at scale.',
      'Its contents are organized by full lifecycle platforms, task runners, frameworks, runtimes, agent knowledge and memory, coding agents, protocols, and workflows.',
      'The repository acts as a reader-facing map rather than a runnable benchmark harness.'
    ]
  },
  {
    name: 'Mem0 Memory Benchmarks',
    repo: 'mem0ai/memory-benchmarks',
    url: 'https://github.com/mem0ai/memory-benchmarks',
    rawFile: 'raw-github/mem0ai_memory-benchmarks.md',
    report: 'projects/87-mem0-memory-benchmarks.md',
    siteReport: 'site/public/reports/projects/87-mem0-memory-benchmarks.md',
    category: 'Memory Benchmark Suite',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'memory',
    stack: 'Python/TypeScript/Next.js Memory Benchmark Suite',
    language: 'Python/TypeScript',
    license: 'Apache-2.0',
    stars: 38,
    forks: 12,
    commits: 15,
    issues: 2,
    pulls: 2,
    lastPushed: '2026-05-24T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 38 stars, 12 forks, 2 issues, 2 pull requests, 15 commits, Apache-2.0 license, LOCOMO/LongMemEval/BEAM coverage, OSS+cloud paths, and published benchmark result tables.',
    description:
      'mem0ai/memory-benchmarks 是 memory-augmented LLM systems 的公开评测套件，覆盖 LOCOMO、LongMemEval 和 BEAM，并同时支持 Mem0 cloud 与 OSS self-hosted pipeline。',
    pattern:
      'memory benchmark dataset -> ingest/search/evaluate pipeline -> answerer/judge scoring -> UI/results comparison',
    tags: ['memory', 'benchmark', 'locomo', 'longmemeval', 'beam'],
    bullets: [
      'The public GitHub page showed 38 stars, 12 forks, 2 issues, 2 pull requests, and 15 commits.',
      'The suite covers LOCOMO, LongMemEval, and BEAM, with both Mem0 cloud and self-hosted OSS execution paths.',
      'The README exposes a three-stage ingest -> search -> evaluate pipeline plus a local web UI for browsing and comparing runs.',
      'Published result tables include LongMemEval, LoCoMo, BEAM, and extraction-model comparisons for OSS runs.'
    ]
  },
  {
    name: 'Neo4j Agent Memory',
    repo: 'neo4j-labs/agent-memory',
    url: 'https://github.com/neo4j-labs/agent-memory',
    rawFile: 'raw-github/neo4j-labs_agent-memory.md',
    report: 'projects/130-neo4j-agent-memory.md',
    siteReport: 'site/public/reports/projects/130-neo4j-agent-memory.md',
    category: 'Graph-Native Agent Memory',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'memory',
    stack: 'Python/TypeScript/Neo4j Graph Memory',
    language: 'Python/TypeScript',
    license: 'Apache-2.0',
    stars: 302,
    forks: 67,
    commits: 431,
    issues: 30,
    pulls: 26,
    lastPushed: '2026-05-21T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub page showed 302 stars, 67 forks, 30 issues, 26 pull requests, 431 commits, Apache-2.0 license, one release v0.4.0 on 2026-05-21, Python 87.7%, TypeScript 11.5%, eval harness support, and explicit :TOUCHED audit edges.',
    description:
      'Neo4j Agent Memory 是图原生 agent memory 系统，提供 Python/TypeScript SDK、MCP server、短期/长期/推理记忆、实体抽取、context graph、eval harness 和 reasoning trace audit edges。',
    pattern:
      'conversation and reasoning traces -> Neo4j knowledge graph memory -> MCP or SDK retrieval -> eval harness and audit edges',
    tags: ['memory', 'neo4j', 'knowledge graph', 'mcp', 'audit'],
    bullets: [
      'The public GitHub page showed 302 stars, 67 forks, 30 issues, 26 pull requests, and 431 commits.',
      'The README positions the library as a graph-native memory system for AI agents and context graphs backed by Neo4j.',
      'Visible production features include adopt-existing-graph flows, buffered writes, eval harness support, and explicit :TOUCHED audit edges.',
      'The page shows one release, v0.4.0 on 2026-05-21, plus Python and TypeScript language surfaces.'
    ]
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
  if (!match) throw new Error(`Cannot parse export: ${name}`);
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

Use this card to explain ${repo.category}: it shows how memory systems, harness maps, benchmark suites, and outer-loop evaluators connect to the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
`;

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
    .map(
      (repo) =>
        `| [${repo.repo}](${repo.url}) | ${repo.final_category} | ${repo.base_theme} | ${repo.function_tag} | ${repo.evidence.replace(/\|/g, '/')} |`
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
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 刷新项\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${refreshed}\n\n本轮刷新聚焦 harness/skill、memory、benchmark 与 outer-loop evaluator 五类 public metadata 面，保持 raw -> processed -> results 同步。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`
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
      description: repo.description,
      stack: repo.stack.split('/'),
      category: repo.category,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
      license: repo.license,
      report: repo.report,
      pattern: repo.pattern,
      tags: repo.tags,
      localPath: repo.rawFile
    };
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

export const projectGroups = ${JSON.stringify(groups, null, 2)};
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
      paths: ['site/src/data/projects.ts', ...repos.map((repo) => repo.siteReport)]
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
      'gh auth status reported an invalid default GitHub token',
      'GitNexus CLI required explicit --repo selection and the awesome-evolution index is stale against current HEAD'
    ],
    working_principle:
      'public GitHub page evidence -> raw-github refresh -> repo-classification/project/site registry -> public reports -> indexes + analysis + site build'
  }
});

const renderGraphMd = () => `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for benchmark, harness, and memory anchors.
- **results.public-site** (results, updated): Push the metadata refresh into site project data and public reports.
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
- GitNexus CLI can describe the metadata flow only after explicit \`--repo awesome-evolution-workspace-cleanup\`; the current index remains stale against HEAD.
`;

const renderGraphMmd = () => `flowchart LR
  INTENT["Direct user intent"] --> RAW["raw-github refresh"]
  RAW --> PROC["classification + project cards"]
  PROC --> SITE["site data + public reports"]
  PROC --> NOTE["work learning note"]
  NOTE --> INTENT
`;

const renderRunNote = () => `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed five existing GitHub metadata anchors and propagated them through raw captures, processed classification, project cards, Mermaid truth state, and public site report surfaces.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around harness mapping, benchmark coverage, skill-facing evaluation, and graph-native memory infrastructure. The run updated raw captures, repo classification rows, model-card reports, site-facing public reports, site project metadata, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked by DNS, \`gh\` auth stayed invalid, and GitNexus only provided topology help after explicit \`--repo\` selection while still reporting a stale index.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.base_theme} | ${repo.stars}/${repo.forks} | ${repo.commits} | \`${repo.siteReport}\` |`).join('\n')}

## Working Principle

Public GitHub page evidence -> \`raw-github/*.md\` refresh -> \`research/repo-classification.*\` row updates -> \`projects/*.md\` and \`site/public/reports/projects/*.md\` -> \`site/src/data/projects.ts\` -> Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- \`curl -I --max-time 10 https://api.github.com/rate_limit\` still failed with DNS resolution error in this workspace.
- \`gh auth status\` still reported an invalid default token for \`Shiyao-Huang\`.
- \`gitnexus query --repo awesome-evolution-workspace-cleanup ...\` succeeded for topology discovery, but the repo index is stale against current HEAD.
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

write('.mermaid/current/graph.json', `${JSON.stringify(renderGraphJson(), null, 2)}\n`);
write('.mermaid/current/graph.md', renderGraphMd());
write('.mermaid/current/graph.mmd', renderGraphMmd());
write(runNote, renderRunNote());
