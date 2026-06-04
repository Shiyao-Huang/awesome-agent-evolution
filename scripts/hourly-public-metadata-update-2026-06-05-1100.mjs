import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-05T11:00:00+08:00';
const runDate = '2026-06-05';
const runDisplay = '2026-06-05 11:00 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-05-1100.md';

const repos = [
  {
    name: 'Swarms',
    repo: 'kyegomez/swarms',
    url: 'https://github.com/kyegomez/swarms',
    rawFile: 'raw-github/kyegomez_swarms.md',
    report: 'projects/371-swarms-enterprise-multi-agent-runtime.md',
    siteReport: 'site/public/reports/projects/371-swarms-enterprise-multi-agent-runtime.md',
    category: 'Production Multi-Agent Orchestration Runtime',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Python/Multi-Agent Orchestration/MCP/x402/Skills Interop',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 6800,
    forks: 935,
    commits: 5078,
    issues: 24,
    pulls: 50,
    lastPushed: '2026-05-28T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub repo page and commit history showed about 6.8k stars, 935 forks, 24 issues, 50 pull requests, 5,078 commits, Apache-2.0 licensing, sequential/concurrent/hierarchical swarm architectures, MCP/x402/skills interoperability claims, and latest visible commits on 2026-05-28.',
    description:
      'Swarms is a production-oriented multi-agent orchestration framework that packages sequential, concurrent, and hierarchical agent topologies with tools, memory, protocol adapters, and marketplace-style extensions.',
    pattern:
      'define agents and swarm topology -> run sequential/concurrent/hierarchical orchestration -> attach tools, memory, and protocol adapters -> keep workflow behavior inspectable through runtime boundaries and reusable swarm patterns',
    tags: ['multi-agent', 'swarm', 'orchestration', 'mcp', 'production-runtime'],
    bullets: [
      'The public GitHub page and commit history showed about 6.8k stars, 935 forks, 24 issues, 50 pull requests, and 5,078 commits.',
      'The README positions Swarms as an enterprise-grade, production-ready multi-agent orchestration framework with sequential, concurrent, and hierarchical systems.',
      'Visible docs and install paths expose interoperability claims around MCP, x402, skills, marketplace flows, and protocol adapters rather than a single-model demo.',
      'The latest visible commit group on the public commits page was dated 2026-05-28.'
    ]
  },
  {
    name: 'SkillOpt',
    repo: 'microsoft/SkillOpt',
    url: 'https://github.com/microsoft/SkillOpt',
    rawFile: 'raw-github/microsoft_skillopt.md',
    report: 'projects/272-skillopt-self-evolving-agent-skills.md',
    siteReport: 'site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md',
    category: 'Self-Evolving Agent Skill Optimizer',
    final_category: '工具/tool',
    function_tag: 'skill-orchestration',
    base_theme: 'skill',
    stack: 'Python/HTML/Skill Training Loops',
    language: 'Python',
    license: 'MIT',
    stars: 4000,
    forks: 416,
    commits: 92,
    issues: 5,
    pulls: 2,
    lastPushed: '2026-05-31T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub repo page and commit history showed about 4k stars, 416 forks, 5 issues, 2 pull requests, 92 commits, MIT license, explicit epoch/batch/validation-gate framing for text-space skill optimization, and latest visible commits on 2026-05-31.',
    description:
      'SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts.',
    pattern:
      'collect trajectories -> propose skill edits -> validate on held-out tasks -> keep stronger best_skill artifacts -> repeat like epochs and mini-batches without touching base model weights',
    tags: ['agent skills', 'skill optimization', 'frozen model', 'validation gates', 'cross-harness eval'],
    bullets: [
      'The public GitHub page and commit history showed about 4k stars, 416 forks, 5 issues, 2 pull requests, and 92 commits.',
      'The README explicitly frames SkillOpt as training agent skills like neural networks with epochs, mini-batches, learning rates, and validation gates.',
      'Visible repository structure includes checkpoints, configs, docs, tests, and a web UI rather than only a paper artifact.',
      'The latest visible commit group on the public commits page was dated 2026-05-31.'
    ]
  },
  {
    name: 'SkillsBench',
    repo: 'benchflow-ai/skillsbench',
    url: 'https://github.com/benchflow-ai/skillsbench',
    rawFile: 'raw-github/benchflow-ai_skillsbench.md',
    report: 'projects/248-skillsbench-agent-skills-benchmark.md',
    siteReport: 'site/public/reports/projects/248-skillsbench-agent-skills-benchmark.md',
    category: 'Agent Skills Benchmark Harness',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'evaluation',
    stack: 'PDDL/Python/Website/Tasks',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 1300,
    forks: 312,
    commits: 385,
    issues: 12,
    pulls: 53,
    lastPushed: '2026-06-03T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub repo page and commit history showed about 1.3k stars, 312 forks, 12 issues, 53 pull requests, 385 commits, Apache-2.0 license, explicit Hugging Face dataset and task taxonomy surfaces, and latest visible commits on 2026-06-03.',
    description:
      'SkillsBench evaluates how well AI agents actually use reusable skills across specialized multi-step workflows under deterministic and gym-style benchmark settings.',
    pattern:
      'define skill-centric tasks -> run agent plus skill compositions -> score verifier outputs and task success -> compare per-task and per-skill behavior across models and runtimes',
    tags: ['skills', 'benchmark', 'evaluation', 'task taxonomy', 'dataset'],
    bullets: [
      'The public GitHub page and commit history showed about 1.3k stars, 312 forks, 12 issues, 53 pull requests, and 385 commits.',
      'The README calls SkillsBench the first benchmark for evaluating how well AI agents use skills.',
      'Visible repository structure includes task packs, tasks-extra, experiments, website assets, and AGENTS/CLAUDE operator files.',
      'The latest visible commit group on the public commits page was dated 2026-06-03.'
    ]
  },
  {
    name: 'Browser Harness',
    repo: 'browser-use/browser-harness',
    url: 'https://github.com/browser-use/browser-harness',
    rawFile: 'raw-github/browser-use_browser-harness.md',
    report: 'projects/261-browser-harness-self-healing-web-agent-runtime.md',
    siteReport: 'site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md',
    category: 'Self-Healing Browser Agent Harness',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'harness',
    stack: 'Python/CDP/Chrome Debugging/Playwright',
    language: 'Python',
    license: 'MIT',
    stars: 14300,
    forks: 1300,
    commits: 391,
    issues: 13,
    pulls: 99,
    lastPushed: '2026-05-20T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub repo page and commit history showed about 14.3k stars, 1.3k forks, 13 issues, 99 pull requests, 391 commits, MIT license, thin editable CDP harness positioning, self-healing helper generation claims, and latest visible commits on 2026-05-20.',
    description:
      'Browser Harness connects LLM agents to a real browser through a thin editable CDP harness and explicitly encourages runtime self-healing by letting the agent write missing helper code during execution.',
    pattern:
      'attach one websocket to Chrome -> let the agent call or write browser helpers -> execute repeatable browser tasks -> keep the harness editable so the next run can reuse stronger helpers',
    tags: ['browser harness', 'cdp', 'self-healing', 'playwright', 'agent workspace'],
    bullets: [
      'The public GitHub page and commit history showed about 14.3k stars, 1.3k forks, 13 issues, 99 pull requests, and 391 commits.',
      'The README is explicit that the harness improves itself every run by allowing the agent to write missing helper code during execution.',
      'Visible repository structure exposes agent-workspace, interaction-skills, docs, src/browser_harness, tests, AGENTS.md, and SKILL.md.',
      'The latest visible commit group on the public commits page was dated 2026-05-20.'
    ]
  },
  {
    name: 'Redis Agent Memory Server',
    repo: 'redis/agent-memory-server',
    url: 'https://github.com/redis/agent-memory-server',
    rawFile: 'raw-github/redis_agent-memory-server.md',
    report: 'projects/281-redis-agent-memory-server-runtime.md',
    siteReport: 'site/public/reports/projects/281-redis-agent-memory-server-runtime.md',
    category: 'Agent Memory Runtime and Context Service',
    final_category: '工具/tool',
    function_tag: 'memory-substrate',
    base_theme: 'memory',
    stack: 'Python/Redis/MCP Memory Service',
    language: 'Python',
    license: 'MIT',
    stars: 266,
    forks: 50,
    commits: 735,
    issues: 19,
    pulls: 28,
    lastPushed: '2026-04-16T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub repo page and commit history showed 266 stars, 50 forks, 19 issues, 28 pull requests, 735 commits, MIT license, agent-memory-client plus MCP/server folders, and latest visible commits on 2026-04-16.',
    description:
      'agent-memory-server is Redis-maintained memory middleware that gives AI agents fast, persistent, and flexible context memory through an MCP-compatible service and client stack.',
    pattern:
      'capture agent events and context -> store and retrieve memory through Redis-backed services -> expose memory operations via MCP and client APIs -> feed retrieved context into later agent loops',
    tags: ['memory', 'redis', 'mcp', 'agent-runtime', 'context-service'],
    bullets: [
      'The public GitHub page and commit history showed 266 stars, 50 forks, 19 issues, 28 pull requests, and 735 commits.',
      'Visible repository structure includes agent-memory-client, agent_memory_server, standalone Docker paths, docs, workbench, and tests.',
      'The README/about text frames the project as fast and flexible memory for agents and AI applications using Redis.',
      'The latest visible commit group on the public commits page was dated 2026-04-16.'
    ]
  },
  {
    name: 'OpenAI Swarm',
    repo: 'openai/swarm',
    url: 'https://github.com/openai/swarm',
    rawFile: 'raw-github/openai_swarm.md',
    report: 'projects/311-openai-swarm-multi-agent-orchestration.md',
    siteReport: 'site/public/reports/projects/311-openai-swarm-multi-agent-orchestration.md',
    category: 'Experimental Multi-Agent Orchestration Framework',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Python/Multi-Agent Orchestration/Function Calling Handoffs',
    language: 'Python',
    license: 'MIT',
    stars: 21600,
    forks: 2300,
    commits: 29,
    issues: 23,
    pulls: 7,
    lastPushed: '2026-04-15T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: runDate,
    evidence:
      'web-observed GitHub repo page and commit history showed about 21.6k stars, 2.3k forks, 23 issues, 7 pull requests, 29 commits, MIT license, educational lightweight orchestration framing, explicit deprecation in favor of the OpenAI Agents SDK, and latest visible commits on 2026-04-15.',
    description:
      'Swarm is OpenAI’s educational multi-agent orchestration framework for lightweight handoffs, routines, and inspectable agent workflow patterns, now explicitly positioned as a predecessor to the OpenAI Agents SDK.',
    pattern:
      'compose lightweight routines and handoffs -> route user tasks across specialized agents -> keep tool usage explicit and inspectable -> treat orchestration as a simple educational baseline rather than a production control plane',
    tags: ['multi-agent', 'orchestration', 'handoff', 'openai', 'educational'],
    bullets: [
      'The public GitHub page and commit history showed about 21.6k stars, 2.3k forks, 23 issues, 7 pull requests, and 29 commits.',
      'The README now explicitly says Swarm has been replaced by the OpenAI Agents SDK for production use cases.',
      'Examples and tests remain visible, making the repository useful as a baseline orchestration reference even though it is no longer the maintained production path.',
      'The latest visible commit group on the public commits page was dated 2026-04-15.'
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
timestamp_source: web_observed_public_github_page_2026_06_05
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
- Latest visible commit date: ${repo.lastPushed.slice(0, 10)}
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
| Latest visible commit date | ${repo.lastPushed.slice(0, 10)} |
| Raw capture | ${repo.rawFile} |
| Updated by | hourly public metadata update, ${runDisplay} |

## 1. Role in Self Evolve

${repo.description} It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence} This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on ${repo.content_timestamp}, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain ${repo.category}: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
`;

const updateRepoClassification = () => {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
  const rowMap = new Map(data.rows.map((row) => [String(row.repo).toLowerCase(), row]));

  for (const repo of repos) {
    const prior = rowMap.get(repo.repo.toLowerCase());
    rowMap.set(repo.repo.toLowerCase(), {
      repo: repo.repo,
      url: repo.url,
      stars: String(repo.stars),
      prior_category: prior?.prior_category ?? prior?.final_category ?? '-',
      prior_unclassified: prior?.prior_unclassified ?? String(!prior),
      final_category: repo.final_category,
      function_tag: repo.function_tag,
      base_theme: repo.base_theme,
      stack: repo.stack,
      time_slice: repo.time_slice,
      content_timestamp: repo.content_timestamp,
      evidence: repo.evidence,
      description: repo.description
    });
  }

  const rows = [...rowMap.values()].sort((a, b) => String(a.repo).localeCompare(String(b.repo)));
  write(file, `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

  const columns = Object.keys(rows[0]);
  write(
    'research/repo-classification.csv',
    `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`
  );

  const counts = new Map();
  for (const row of rows) counts.set(row.final_category, (counts.get(row.final_category) || 0) + 1);
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
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 增量 / 刷新项\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${refreshed}\n\n本轮补入 1 个新的 swarm runtime public entry，并同步刷新 skill、benchmark、browser harness、memory middleware 与 educational swarm baseline 的 metadata surfaces。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`
  );
};

const updateSiteProjects = () => {
  const file = 'site/src/data/projects.ts';
  const source = read(file);
  const projects = parseExport(source, 'projects');
  const groups = parseExport(source, 'projectGroups');
  const repoMap = new Map(repos.map((repo) => [repo.repo, repo]));
  const existingRepos = new Set(projects.map((project) => project.repo));

  const nextProjects = projects.map((project) => {
    const repo = repoMap.get(project.repo);
    if (!repo) return project;
    return {
      ...project,
      name: repo.name,
      repo: repo.repo,
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
      tags: repo.tags,
      localPath: repo.rawFile,
      status: project.status ?? 'candidate'
    };
  });

  for (const repo of repos) {
    if (existingRepos.has(repo.repo)) continue;
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
    if (group.title !== 'Production Agent Runtimes With Evolution Substrate') return group;
    if (group.repos.includes('kyegomez/swarms')) return group;
    return { ...group, repos: [...group.repos, 'kyegomez/swarms'] };
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
      last_visible_commit_date: repo.lastPushed.slice(0, 10),
      theme: repo.base_theme
    })),
    blockers: [
      'shell GitHub API access remained blocked in this workspace',
      'gh auth status reported an invalid default GitHub token',
      'GitNexus CLI can answer topology queries, but some commands differ from repo docs and the index is stale against current HEAD'
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
- **processed.github-classification** (processed, updated): Refresh or add classification rows and model cards for swarm, skill, benchmark, browser harness, and memory anchors.
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
- Raw files touched: ${repos.map((repo) => repo.rawFile).join(', ')}.
- Public reports touched: ${repos.map((repo) => repo.siteReport).join(', ')}.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI can describe the metadata flow, but command surface diverges from repo docs and the local index remains stale against HEAD.
`;

const renderGraphMmd = () => `flowchart LR
  INTENT["Direct user intent"] --> RAW["raw-github refresh and add"]
  RAW --> PROC["classification + project cards"]
  PROC --> SITE["site data + public reports"]
  PROC --> NOTE["work learning note"]
  NOTE --> INTENT
`;

const renderRunNote = () => `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Added one new swarm runtime anchor and refreshed five existing GitHub metadata anchors across raw captures, processed classification, public project reports, Mermaid truth state, and the site registry.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around swarm runtimes, self-evolving skills, benchmark coverage, browser harnesses, and auditable memory middleware. The run updated raw captures, repo classification rows, model-card reports, site-facing public reports, site project metadata, and the Mermaid truth source using current public GitHub page evidence plus public commit-history pages for latest visible commit dates. Freshness is explicit: shell GitHub API access remained blocked by DNS, \`gh\` auth stayed invalid, and GitNexus only provided topology help while the local index stayed stale against current HEAD.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Latest visible commit | Public report |
|---|---|---:|---:|---|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.base_theme} | ${repo.stars}/${repo.forks} | ${repo.commits} | ${repo.lastPushed.slice(0, 10)} | \`${repo.siteReport}\` |`).join('\n')}

## Working Principle

Public GitHub repo page + public commit-history page -> \`raw-github/*.md\` refresh/add -> \`research/repo-classification.*\` row updates -> \`projects/*.md\` and \`site/public/reports/projects/*.md\` -> \`site/src/data/projects.ts\` -> Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text plus public commit-history pages were used as the freshness source for this iteration.
- \`curl -I --max-time 10 https://api.github.com/rate_limit\` still failed with DNS resolution error in this workspace.
- \`gh auth status\` still reported an invalid default token for \`Shiyao-Huang\`.
- \`gitnexus query\` can surface script-level topology, but the local index is stale and \`gitnexus list --repo ...\` is not supported in this workspace.
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
