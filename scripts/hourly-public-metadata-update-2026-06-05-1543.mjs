import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-05T15:43:00+08:00';
const runDate = '2026-06-05';
const runDisplay = '2026-06-05 15:43 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-05-1543.md';

const repos = [
  {
    name: 'Agent Swarm',
    repo: 'desplega-ai/agent-swarm',
    url: 'https://github.com/desplega-ai/agent-swarm',
    rawFile: 'raw-github/desplega-ai_agent-swarm.md',
    report: 'projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    siteReport: 'site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    category: 'Compounding Lead-Worker Agent Runtime',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'TypeScript/Docker/MCP/Lead-Worker Swarm',
    language: 'TypeScript',
    license: 'MIT',
    stars: 505,
    forks: 56,
    commits: 1542,
    issues: 1,
    pulls: 5,
    lastPushed: '2026-06-04T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-04',
    evidence:
      'web-observed GitHub repo page showed 505 stars, 56 forks, 1 issue, 5 pull requests, 1,542 commits, MIT license, 89 releases with v1.91.0 latest on 2026-06-04, plus lead/worker Docker orchestration, MCP API, compounding memory, HITL workflow gates, and skills-based swarm operations.',
    description:
      'Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.',
    pattern:
      'ingest tasks from external channels -> lead agent plans and delegates -> workers run inside isolated Docker environments -> shared memory and identity accumulate across sessions -> pages, PRs, replies, and scheduled workflows turn learnings into reusable operations',
    tags: ['agent-swarm', 'lead-worker', 'docker', 'mcp', 'compounding-memory'],
    bullets: [
      'The public GitHub page showed 505 stars, 56 forks, 1 issue, 5 pull requests, 1,542 commits, and 89 releases with v1.91.0 latest on 2026-06-04.',
      'The README frames Agent Swarm as a lead-worker system that turns Slack, GitHub, GitLab, Linear, Jira, email, and API inputs into autonomous multi-agent work.',
      'Visible highlights include compounding memory, persistent identity, HITL workflow gates, Docker worker isolation, MCP tools, pages, dashboards, and recurring tasks.',
      'The documentation links expose playbooks, architecture notes, deployment guides, and CLI flows rather than a single prompt demo.'
    ]
  },
  {
    name: 'Agency Swarm',
    repo: 'VRSEN/agency-swarm',
    url: 'https://github.com/VRSEN/agency-swarm',
    rawFile: 'raw-github/vrsen_agency-swarm.md',
    report: 'projects/27-agency-swarm.md',
    siteReport: 'site/public/reports/projects/27-agency-swarm.md',
    category: 'OpenAI Agents SDK Swarm Orchestrator',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Python/OpenAI Agents SDK/Agency CLI/State Persistence',
    language: 'Python',
    license: 'MIT',
    stars: 4400,
    forks: 1100,
    commits: 2491,
    issues: 1,
    pulls: 6,
    lastPushed: '2026-05-24T00:00:00Z',
    time_slice: '2026-05',
    content_timestamp: '2026-05-24',
    evidence:
      'web-observed GitHub repo page showed 4.4k stars, 1.1k forks, 1 issue, 6 pull requests, 2,491 commits, MIT license, 62 releases with v1.9.9 latest on 2026-05-24, and explicit positioning as a structured orchestration layer built on the OpenAI Agents SDK with communication flows and state persistence callbacks.',
    description:
      'Agency Swarm is a mature Python orchestration framework that layers role-aware communication flows, type-safe tools, thread persistence, and terminal/web demos on top of the OpenAI Agents SDK.',
    pattern:
      'define agents and directional communication flows -> attach function tools and persistence callbacks -> route work through agency-level orchestration -> reuse terminal/web demos and docs as reproducible multi-agent operating patterns',
    tags: ['agency-swarm', 'openai-agents-sdk', 'multi-agent', 'state-persistence', 'cli'],
    bullets: [
      'The public GitHub page showed 4.4k stars, 1.1k forks, 1 issue, 6 pull requests, 2,491 commits, and 62 releases with v1.9.9 latest on 2026-05-24.',
      'The README now explicitly says Agency Swarm leverages and extends the OpenAI Agents SDK rather than the older Assistants API framing in legacy notes.',
      'Visible features include directional communication flows, function-tool integration, thread persistence callbacks, terminal UI reuse, and production-oriented deployment guidance.',
      'The repo exposes AGENTS.md, CLAUDE.md, docs, examples, and tests, making it useful as a durable orchestrator baseline rather than only a conceptual swarm paper link.'
    ]
  },
  {
    name: 'XSkill',
    repo: 'XSkill-Agent/XSkill',
    url: 'https://github.com/XSkill-Agent/XSkill',
    rawFile: 'raw-github/xskill-agent_xskill.md',
    report: 'projects/404-xskill-continual-experience-skill-learning.md',
    siteReport: 'site/public/reports/projects/404-xskill-continual-experience-skill-learning.md',
    category: 'Continual Experience and Skill Learning Paper Code',
    final_category: '论文代码/paper-code',
    function_tag: 'benchmark-eval',
    base_theme: 'skill',
    stack: 'Python/Multimodal Agent/Memory Bank/Benchmark Eval',
    language: 'Python',
    license: 'MIT',
    stars: 216,
    forks: 27,
    commits: 16,
    issues: 1,
    pulls: 0,
    lastPushed: '2026-05-01T00:00:00Z',
    time_slice: '2026-05',
    content_timestamp: '2026-05-01',
    evidence:
      'web-observed GitHub repo page showed 216 stars, 27 forks, 1 issue, 0 pull requests, 16 commits, MIT license, no releases, ICML 2026 acceptance news dated 2026-05-01, and a runtime-generated memory_bank plus benchmark/eval folders covering VisualToolBench, TIR-Bench, MMSearch-Plus, AgentVista, and MMBrowseComp.',
    description:
      'XSkill is a multimodal continual-learning paper implementation that extracts task-level skills and action-level experiences from agent trajectories, stores them in a memory bank, and re-injects them during inference across benchmark suites.',
    pattern:
      'collect multimodal trajectories -> summarize and critique experiences -> consolidate reusable skill documents and experience entries -> retrieve relevant memory for new tasks -> evaluate transfer on benchmark suites',
    tags: ['xskill', 'continual-learning', 'memory-bank', 'skills', 'benchmark'],
    bullets: [
      'The public GitHub page showed 216 stars, 27 forks, 1 issue, 16 commits, no releases, and explicit ICML 2026 acceptance news dated 2026-05-01.',
      'Visible repository structure includes benchmark, eval, exskill, memory_bank, output, and logs folders rather than only a paper PDF pointer.',
      'The README describes a two-phase loop: accumulation of skills and experiences from trajectories, then retrieval and injection during inference.',
      'The overview names five benchmark suites and claims stronger zero-shot cross-task transferability over baselines.'
    ]
  },
  {
    name: 'LightAgent',
    repo: 'wanxingai/LightAgent',
    url: 'https://github.com/wanxingai/LightAgent',
    rawFile: 'raw-github/wanxingai_lightagent.md',
    report: 'projects/139-lightagent-memory-mcp-skills.md',
    siteReport: 'site/public/reports/projects/139-lightagent-memory-mcp-skills.md',
    category: 'Memory/MCP Skill Agent Framework',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Python/MCP/mem0/Agent Skills/LightFlow',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 1100,
    forks: 141,
    commits: 104,
    issues: 7,
    pulls: 1,
    lastPushed: '2026-06-02T00:00:00Z',
    time_slice: '2026-06',
    content_timestamp: '2026-06-02',
    evidence:
      'web-observed GitHub repo page showed 1.1k stars, 141 forks, 7 issues, 1 pull request, 104 commits, Apache-2.0 license, 20 releases with v0.7.5 latest on 2026-06-01, and README news dated 2026-06-02 for LightFlow workflow orchestration plus persistent memory, MCP, native skills, trace observability, and self-learning agent claims.',
    description:
      'LightAgent is a lightweight Python agent framework that combines persistent memory, MCP integration, native skills, LightSwarm collaboration, and newly surfaced LightFlow workflow orchestration into a small-footprint self-learning runtime.',
    pattern:
      'compose lightweight agents with tools, MCP, and memory -> add native skills and optional trace observability -> delegate via LightSwarm -> chain deterministic multi-step flows with LightFlow -> keep self-learning behavior grounded in runtime memory and reusable tool plans',
    tags: ['lightagent', 'memory', 'mcp', 'skills', 'workflow'],
    bullets: [
      'The public GitHub page showed 1.1k stars, 141 forks, 7 issues, 1 pull request, 104 commits, and 20 releases with v0.7.5 latest on 2026-06-01.',
      'README news adds a 2026-06-02 LightFlow workflow orchestration update on top of earlier trace observability and native-skill releases.',
      'Visible features include persistent mem0-backed memory, MCP over stdio/SSE, LightSwarm multi-agent collaboration, adaptive tool filtering, and self-learning claims.',
      'The repository now ships multilingual READMEs, docs, FAQ, tests, skills, mcp examples, and memory security guidance rather than only a minimal starter kit.'
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
timestamp_source: web_observed_public_github_page_2026_06_05_1543
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
- Latest visible dated signal: ${repo.lastPushed.slice(0, 10)}
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
| Latest visible dated signal | ${repo.lastPushed.slice(0, 10)} |
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
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 增量 / 刷新项\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${refreshed}\n\n本轮把 production swarm、OpenAI Agents SDK orchestrator、continual skill-memory paper code 与轻量 memory/MCP/skill runtime 一起拉回同一条 public metadata 证据链。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`
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
    if (group.title === 'Production Agent Runtimes With Evolution Substrate') {
      const wanted = ['kyegomez/swarms', 'VRSEN/agency-swarm', 'desplega-ai/agent-swarm'];
      const repos = [...group.repos];
      for (const repo of wanted) {
        if (!repos.includes(repo)) repos.push(repo);
      }
      return { ...group, repos };
    }
    if (group.title === 'Agent Skills / Memory / Harness') {
      const wanted = ['XSkill-Agent/XSkill'];
      const repos = [...group.repos];
      for (const repo of wanted) {
        if (!repos.includes(repo)) repos.push(repo);
      }
      return { ...group, repos };
    }
    return group;
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
      'public GitHub page evidence -> raw-github refresh -> repo-classification/project/site registry -> public reports -> README/site registry -> indexes + analysis + site build'
  }
});

const renderGraphMd = () => `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh or add classification rows and model cards for production swarms, SDK-based orchestrators, continual skill-memory paper code, and lightweight memory-skill runtimes.
- **results.public-site** (results, updated): Push the metadata refresh into site project data, public reports, and reader-facing entry surfaces.
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

Added two swarm orchestration anchors, one continual skill-memory paper-code anchor, and one refreshed lightweight runtime across raw captures, processed classification, public project reports, Mermaid truth state, and the site registry.

## Three Sentences

This iteration targeted repositories that answer direct user concerns around production agent swarms, OpenAI Agents SDK-based orchestration, continual skill-memory accumulation, and lightweight memory/MCP/skill runtimes. The run updated raw captures, repo classification rows, model-card reports, site-facing public reports, site project metadata, and the Mermaid truth source using current public GitHub pages plus visible dated signals such as releases and README news. Freshness is explicit: shell GitHub API access remained blocked by DNS, \`gh\` auth stayed invalid, and GitNexus only provided stale topology help against an older indexed commit.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Latest visible dated signal | Public report |
|---|---|---:|---:|---|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.base_theme} | ${repo.stars}/${repo.forks} | ${repo.commits} | ${repo.lastPushed.slice(0, 10)} | \`${repo.siteReport}\` |`).join('\n')}

## Working Principle

Public GitHub repo page + visible dated signals (releases or README news) -> \`raw-github/*.md\` refresh/add -> \`research/repo-classification.*\` row updates -> \`projects/*.md\` and \`site/public/reports/projects/*.md\` -> \`site/src/data/projects.ts\` -> Mermaid graph -> indexes, GitHub analysis, and site build.

## Evidence Quality

- Public GitHub page text plus visible dated signals on repo pages (releases or README news) were used as the freshness source for this iteration.
- \`curl -I --max-time 10 https://api.github.com/rate_limit\` still failed with DNS resolution error in this workspace.
- \`gh auth status\` still reported an invalid default token for \`Shiyao-Huang\`.
- \`gitnexus status\` and \`gitnexus query -r awesome-evolution-workspace-cleanup ...\` worked, but the local index is stale and the CLI surface differs from the repo docs.
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
