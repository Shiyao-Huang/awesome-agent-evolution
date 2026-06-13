import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const runAt = '2026-06-13T08:16:40+08:00';
const runDate = '2026-06-13';
const runDisplay = '2026-06-13 08:16 +0800';
const runSlug = '2026-06-13-0816';
const timestampSource = 'gh_api_graphql_authenticated_2026_06_13';

const repoConfigs = [
  {
    owner: 'china-qijizhifeng',
    name: 'agentic-harness-engineering',
    repo: 'china-qijizhifeng/agentic-Harness-engineering',
    url: 'https://github.com/china-qijizhifeng/agentic-Harness-engineering',
    rawFile: 'raw-github/china-qijizhifeng_agentic-harness-engineering.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'harness',
      stack: 'Python/Harness Evolution/Coding-Agent Workflow',
      description:
        'Harness engineering is the layer where prompts, tools, middleware, memory, subagents, and evaluators become editable agent infrastructure rather than fixed wrappers around a base model.'
    },
    raw: {
      stackSignal: 'Python/Harness Evolution/Coding-Agent Workflow',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 548 stars, 62 forks, 45 commits, 0 open issues, 0 open pull requests, and MIT license metadata.',
        'The repository still treats the harness, not only the model, as the mutable object: prompts, tools, middleware, skills, memory, subagents, and evaluators are all surfaced as engineering levers.',
        'The homepage still points to the AHE paper and keeps Terminal-Bench-2 plus SWE-bench-Verified transfer claims as the main public benchmark story.',
        'This run upgrades the row from web-observed counts to authenticated GitHub API counts and fixes the public-site raw-path casing mismatch.'
      ]
    },
    project: {
      path: 'projects/43-agentic-harness-engineering.md',
      sitePath: 'site/public/reports/projects/43-agentic-harness-engineering.md',
      name: 'Agentic Harness Engineering',
      category: 'Harness evolution engineering',
      pattern: 'editable harness surface -> evaluator pressure -> harness mutation -> regression verification',
      oneSentence:
        'Agentic Harness Engineering is the clearest current example of making the harness, not only the model, the object of improvement.',
      threeSentences:
        [
          'It belongs in the runtime layer: prompts, tools, middleware, memory, subagents, and evaluators are exposed as versioned engineering surfaces.',
          'That matters for this survey because it turns benchmark deltas into something an agent team can inspect, edit, test, and roll back.',
          'This run upgrades the project from a public-page snapshot to authenticated GitHub API evidence and fixes the site registry to the correct raw file.'
        ],
      teaching:
        'Use this project to explain why self-evolution is not limited to weight updates or code search. In production, the harness is where permissions, routing, memory, evaluation, and rollback actually live.',
      limits:
        'The current evidence is still source-scoped: this run did not rerun Terminal-Bench-2, SWE-bench-Verified, or the paper workflow locally. Benchmark claims remain tied to the repository and paper surfaces unless independently reproduced.'
    },
    siteRepo: 'china-qijizhifeng/agentic-Harness-engineering'
  },
  {
    owner: 'NousResearch',
    name: 'hermes-agent',
    repo: 'NousResearch/hermes-agent',
    url: 'https://github.com/NousResearch/hermes-agent',
    rawFile: 'raw-github/nousresearch_hermes-agent.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'framework',
      stack: 'Python/TypeScript/Memory/Skills/Messaging-Agent Runtime',
      description:
        'Hermes Agent is a self-improving personal-agent runtime that combines memory, skill creation, session search, user modeling, messaging gateways, and scheduled automations in one user-facing system.'
    },
    raw: {
      stackSignal: 'Python/TypeScript/Memory/Skills/Messaging-Agent Runtime',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 191,974 stars, 33,445 forks, 11,512 commits, 6,525 open issues, 13,565 open pull requests, and MIT license metadata.',
        'Hermes Agent still positions itself as the personal agent that grows with you: persistent knowledge, autonomous skill creation, search over prior sessions, user modeling, messaging gateways, and scheduled automations remain in the public story.',
        'The repository topics still bind it to the broader coding-agent surface: `claude-code`, `codex`, `openclaw`, `ai-agent`, and `openai` all remain active discovery signals.',
        'This run replaces the older web-observed packet with authenticated GitHub API counts and a release anchor for `Hermes Agent v0.16.0 (2026.6.5)`.'
      ]
    },
    project: {
      path: 'projects/44-hermes-agent.md',
      sitePath: 'site/public/reports/projects/44-hermes-agent.md',
      name: 'Hermes Agent',
      category: 'Self-improving personal agent runtime',
      pattern: 'persistent knowledge -> skill creation/improvement -> session search -> user modeling -> messaging and automation runtime',
      oneSentence:
        'Hermes Agent is still the strongest personal-agent runtime signal in the corpus: memory, skills, messaging, automations, and trajectory generation in one public system.',
      threeSentences:
        [
          'It is not just a demo agent; the public repository still exposes persistent knowledge, autonomous skill creation, session search, user modeling, messaging gateways, and scheduled automations.',
          'That makes it a central answer to the user’s product question: which systems are usable agents rather than only papers or lists?',
          'This run upgrades its evidence path from web-observed counts to authenticated GitHub API counts and a concrete release anchor.'
        ],
      teaching:
        'Use Hermes Agent to teach the runtime surface of self-evolving agents. Improvement loops need memory, skill reuse, user modeling, search over prior sessions, and channels where the agent can actually act.',
      limits:
        'This run did not execute Hermes locally, validate production messaging flows, or rerun any benchmark pack. Product, memory, and automation claims remain repository-scoped unless independently tested.'
    },
    siteRepo: 'NousResearch/hermes-agent'
  },
  {
    owner: 'stanford-iris-lab',
    name: 'meta-harness',
    repo: 'stanford-iris-lab/meta-harness',
    url: 'https://github.com/stanford-iris-lab/meta-harness',
    rawFile: 'raw-github/stanford-iris-lab_meta-harness.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'agent-evolution-infra',
      base_theme: 'evolution',
      stack: 'Python/Harness Search/Benchmark Scaffold Evolution',
      description:
        'Meta-Harness provides reference code for automated search over model harnesses, including terminal benchmark scaffold evolution and text-classification memory-system search.'
    },
    raw: {
      stackSignal: 'Python/Harness Search/Benchmark Scaffold Evolution',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 1,062 stars, 103 forks, 11 commits, 0 open issues, 0 open pull requests, and MIT license metadata.',
        'The repository topics still present it as a harness-engineering and LLM-agent project rather than a model-training repository.',
        'The public site and README continue to separate the core framework from the optimized Terminal-Bench-2 artifact, which keeps the outer-loop interpretation intact.',
        'This run moves the row from a 2026-05 web-observed packet to authenticated GitHub API counts.'
      ]
    },
    project: {
      path: 'projects/249-stanford-meta-harness-framework.md',
      sitePath: 'site/public/reports/projects/249-stanford-meta-harness-framework.md',
      name: 'Meta-Harness (Stanford IRIS)',
      category: 'Meta-harness framework and reference experiments',
      pattern: 'define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness',
      oneSentence:
        'Meta-Harness is the cleanest outer-loop harness-search reference in the public corpus: fixed model, mutable harness, benchmark-driven selection.',
      threeSentences:
        [
          'It matters because it isolates harness mutation from base-model change, which is exactly the mechanism many production systems implicitly use without naming it.',
          'The public repository still anchors two stories: domain onboarding and reference experiments for harness search.',
          'This run upgrades Meta-Harness from a stale May snapshot to authenticated GitHub API counts.'
        ],
      teaching:
        'Use Meta-Harness to explain outer-loop search over prompts, workflows, or scaffolds. It is the clearest contrast case to weight-level self-evolution.',
      limits:
        'This run did not execute the onboarding flow, Terminal-Bench-2 experiment, or any text-classification search workflow. Claims stay repository-scoped unless rerun.'
    },
    siteRepo: 'stanford-iris-lab/meta-harness'
  },
  {
    owner: 'rohitg00',
    name: 'agentmemory',
    repo: 'rohitg00/agentmemory',
    url: 'https://github.com/rohitg00/agentmemory',
    rawFile: 'raw-github/rohitg00_agentmemory.md',
    classification: {
      final_category: '工具/tool',
      function_tag: 'tool-module',
      base_theme: 'memory',
      stack: 'TypeScript/MCP/Coding-Agent Memory/Wiki Index',
      description:
        'agentmemory is a cross-harness persistent memory layer for coding agents and MCP clients, with wiki-style knowledge capture, retrieval, and continuity signals.'
    },
    raw: {
      stackSignal: 'TypeScript/MCP/Coding-Agent Memory/Wiki Index',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 22,540 stars, 1,853 forks, 462 commits, 141 open issues, 151 open pull requests, and Apache-2.0 license metadata.',
        'The homepage still points to `agent-memory.dev`, and the topic set still binds the project to Claude Code, Codex, Cursor, Hermes, OpenClaw, and cross-harness memory usage.',
        'The repository continues to position itself as persistent memory for coding agents rather than a single-framework plugin.',
        'This run replaces the older web-observed packet with authenticated GitHub API counts and a release anchor for `v0.9.27`.'
      ]
    },
    project: {
      path: 'projects/50-agentmemory.md',
      sitePath: 'site/public/reports/projects/50-agentmemory.md',
      name: 'agentmemory',
      category: 'Agent persistent memory layer',
      pattern: 'persistent memory -> wiki-style knowledge capture -> graph/hybrid retrieval -> cross-harness continuity',
      oneSentence:
        'agentmemory is the cross-harness memory layer that turns continuity from a promise into an engineering dependency.',
      threeSentences:
        [
          'It targets Claude Code, Codex, Cursor, Hermes, OpenClaw, and MCP clients instead of staying inside one runtime.',
          'That makes it a direct answer to the user’s memory-substrate requirement for self-evolving agents.',
          'This run upgrades the row from a web-observed packet to authenticated GitHub API counts and a concrete release anchor.'
        ],
      teaching:
        'Use agentmemory to teach why memory cannot be an afterthought. Durable facts, project traces, user preferences, and retrieval boundaries are what let an agent accumulate value across sessions.',
      limits:
        'This run did not inspect the schema, lifecycle implementation, or confidence updates in code. Memory-quality claims remain repository-scoped unless validated with tests or benchmarks.'
    },
    siteRepo: 'rohitg00/agentmemory'
  },
  {
    owner: 'pinchbench',
    name: 'skill',
    repo: 'pinchbench/skill',
    url: 'https://github.com/pinchbench/skill',
    rawFile: 'raw-github/pinchbench_skill.md',
    classification: {
      final_category: '评测/evaluation',
      function_tag: 'benchmark-eval',
      base_theme: 'benchmark',
      stack: 'Python/Shell/TypeScript/OpenClaw Benchmark Harness',
      description:
        'PinchBench is an OpenClaw-oriented real task benchmark that measures coding agents across productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks.'
    },
    raw: {
      stackSignal: 'Python/Shell/TypeScript/OpenClaw Benchmark Harness',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 1,229 stars, 138 forks, 383 commits, 18 open issues, 0 open pull requests, and MIT license metadata.',
        'The public repository still frames itself as a benchmark system for evaluating LLMs as OpenClaw coding agents, not as the agent runtime itself.',
        'The benchmark story remains grounded in 53 real-world tasks plus transcript-preserving grading workflows.',
        'This run upgrades the row from web-observed counts to authenticated GitHub API counts.'
      ]
    },
    project: {
      path: 'projects/51-pinchbench-skill.md',
      sitePath: 'site/public/reports/projects/51-pinchbench-skill.md',
      name: 'PinchBench Skill',
      category: 'Real-world agent task benchmark',
      pattern: 'task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload',
      oneSentence:
        'PinchBench is one of the clearest benchmark anchors in this corpus: not a self-evolving runtime, but the evaluator substrate that makes self-improvement claims comparable.',
      threeSentences:
        [
          'It spans productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks rather than a single narrow benchmark lane.',
          'That makes it important for this survey’s “benchmark as selection pressure” thread.',
          'This run upgrades PinchBench from a web-observed packet to authenticated GitHub API counts.'
        ],
      teaching:
        'Use PinchBench to explain why benchmark infrastructure matters as much as the agent loop itself. Without evaluator strength and saved transcripts, “improvement” stays anecdotal.',
      limits:
        'This run did not execute the benchmark, upload results, or validate leaderboard behavior locally. All benchmark-scope claims remain repository-scoped.'
    },
    siteRepo: 'pinchbench/skill'
  },
  {
    owner: 'lsdefine',
    name: 'GenericAgent',
    repo: 'lsdefine/genericagent',
    url: 'https://github.com/lsdefine/GenericAgent',
    rawFile: 'raw-github/lsdefine_genericagent.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'tool-module',
      base_theme: 'evolution',
      stack: 'Python/Self-Evolving Agent/Skill Tree Runtime',
      description:
        'GenericAgent is a minimal self-evolving autonomous agent framework that grows a skill tree from a small seed loop instead of preloading a large fixed procedure library.'
    },
    raw: {
      stackSignal: 'Python/Self-Evolving Agent/Skill Tree Runtime',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 12,811 stars, 1,476 forks, 687 commits, 6 open issues, 1 open pull request, and MIT license metadata.',
        'The repository topics still emphasize `self-evolving`, `skill-tree`, `memory-system`, and `autonomous-agent` rather than a generic automation wrapper.',
        'The public README still leads with the 3.3K-line seed, 9 atomic tools, and “do not preload skills, evolve them” design philosophy.',
        'This run upgrades GenericAgent from a stale scraped raw capture to authenticated GitHub API metadata, but it is not yet promoted into the public site registry.'
      ]
    }
  },
  {
    owner: 'EvoMap',
    name: 'awesome-agent-evolution',
    repo: 'EvoMap/awesome-agent-evolution',
    url: 'https://github.com/EvoMap/awesome-agent-evolution',
    rawFile: 'raw-github/evomap_awesome-agent-evolution.md',
    classification: {
      final_category: '工具/tool',
      function_tag: 'resource-index',
      base_theme: 'evolution',
      stack: 'JavaScript/Shell/Curated Taxonomy Pipeline',
      description:
        'EvoMap/awesome-agent-evolution is a curated awesome list covering self-evolution, memory, protocols, benchmarks, coding agents, and adjacent infrastructure.'
    },
    raw: {
      stackSignal: 'JavaScript/Shell/Curated Taxonomy Pipeline',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 137 stars, 20 forks, 60 commits, 2 open issues, 1 open pull request, and an `Other` license marker on GitHub.',
        'The topic set still makes it a live field-packaging mirror: `agent-evolution`, `self-evolving`, `memory-system`, `multi-agent`, `skill-library`, and `awesome-list` all remain active.',
        'Its README still splits the field into self-evolution, memory, protocols, development platforms, coding, safety, embodied AI, papers, benchmarks, and community knowledge.',
        'This run upgrades the row from web-observed counts to authenticated GitHub API counts.'
      ]
    },
    project: {
      path: 'projects/394-evomap-awesome-agent-evolution.md',
      sitePath: 'site/public/reports/projects/394-evomap-awesome-agent-evolution.md',
      name: 'EvoMap Awesome Agent Evolution',
      category: 'External awesome list and taxonomy comparator',
      pattern: 'field taxonomy -> curated repo/paper/benchmark sections -> related awesome-list pointers -> reader-facing ecosystem navigation',
      oneSentence:
        'EvoMap is not a runnable self-evolving system, but it is one of the best external mirrors for checking whether our public taxonomy is clearer than a generic awesome list.',
      threeSentences:
        [
          'Its value is not execution but packaging: how the broader ecosystem currently teaches self-evolution, memory, protocols, benchmarks, and swarm adjacency to readers.',
          'That makes it a direct comparator for README, topic pages, and site entry design.',
          'This run upgrades EvoMap from a web-observed packet to authenticated GitHub API counts.'
        ],
      teaching:
        'Use EvoMap to compare curation strategies. It is the external mirror that exposes whether our own public narrative adds evidence density instead of only another list of links.',
      limits:
        'This run did not execute EvoMap scripts or validate its data pipeline locally. The classification is based on public taxonomy, maintenance surface, and comparison value.'
    },
    siteRepo: 'EvoMap/awesome-agent-evolution'
  },
  {
    owner: 'uid4oe',
    name: 'insight-swarm',
    repo: 'uid4oe/insight-swarm',
    url: 'https://github.com/uid4oe/insight-swarm',
    rawFile: 'raw-github/uid4oe_insight-swarm.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'framework',
      stack: 'TypeScript/Knowledge-Graph Multi-Agent Runtime',
      description:
        'Insight Swarm is a knowledge-graph-mediated multi-agent runtime that removes the central orchestrator and forces synthesis through shared-graph interaction.'
    },
    raw: {
      stackSignal: 'TypeScript/Knowledge-Graph Multi-Agent Runtime',
      bullets: [
        'The authenticated GitHub API snapshot on 2026-06-13 shows 0 stars, 0 forks, 25 commits, 0 open issues, 0 open pull requests, and MIT license metadata.',
        'The public README still makes the architectural claim explicit: replace the central orchestrator with a shared knowledge graph and let agents discover, challenge, and synthesize each other’s findings.',
        'Its topic set stays sparse (`agents`, `llm`, `swarm-intelligence`), so the repo is still more valuable as a concept anchor than as a momentum signal.',
        'This run upgrades Insight Swarm from a stale scraped raw capture to authenticated GitHub API metadata, but it is not yet promoted into the public site registry.'
      ]
    }
  }
];

function read(filePath) {
  return fs.readFileSync(path.resolve(filePath), 'utf8');
}

function write(filePath, content) {
  fs.writeFileSync(path.resolve(filePath), content);
}

function ghQuery(owner, name) {
  const query = [
    'query($owner:String!,$name:String!){',
    ' repository(owner:$owner,name:$name){',
    '  nameWithOwner description url homepageUrl createdAt pushedAt updatedAt stargazerCount forkCount',
    '  isArchived isFork primaryLanguage{name} licenseInfo{spdxId name}',
    '  repositoryTopics(first:20){nodes{topic{name}}}',
    '  issues(states:OPEN){totalCount}',
    '  pullRequests(states:OPEN){totalCount}',
    '  defaultBranchRef{name target{... on Commit{history{totalCount}}}}',
    '  releases(first:1,orderBy:{field:CREATED_AT,direction:DESC}){nodes{name publishedAt}}',
    ' }',
    '}'
  ].join(' ');
  const output = execFileSync(
    'gh',
    ['api', 'graphql', '-f', `query=${query}`, '-F', `owner=${owner}`, '-F', `name=${name}`],
    { encoding: 'utf8' }
  );
  return JSON.parse(output).data.repository;
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function shortDate(iso) {
  return iso ? iso.slice(0, 10) : 'unknown';
}

function latestReleaseText(meta) {
  const release = meta.releases?.nodes?.[0];
  if (!release) return 'No public release was exposed through the authenticated GitHub API snapshot.';
  return `Latest public release: ${release.name} (${shortDate(release.publishedAt)}).`;
}

function issueLine(meta) {
  return `${formatNumber(meta.issues.totalCount)} open issues`;
}

function prLine(meta) {
  return `${formatNumber(meta.pullRequests.totalCount)} open pull requests`;
}

function topicsLine(meta) {
  const topics = meta.repositoryTopics?.nodes?.map((node) => node.topic.name) ?? [];
  return topics.length ? topics.join(', ') : 'none exposed through the GitHub API topic list';
}

function buildRawContent(config, meta) {
  return `---
repo: ${config.repo}
url: ${config.url}
content_timestamp: ${runDate}
time_slice: 2026-06
timestamp_source: ${timestampSource}
collected_at: ${runAt}
source: github
source_tool: gh.api.graphql
---

## GitHub - ${config.repo}: ${meta.description}

**Source**: ${config.url}

---

# Raw public metadata capture notes

This raw-style GitHub capture was refreshed by the hourly public metadata update through authenticated GitHub GraphQL/API access via \`gh\`.

## Visible repository metadata

- Repository: ${config.repo}
- URL: ${config.url}
- Stars: ${formatNumber(meta.stargazerCount)}
- Forks: ${formatNumber(meta.forkCount)}
- Commits: ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)}
- Issues: ${issueLine(meta)}
- Pull requests: ${prLine(meta)}
- License: ${meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? 'Unknown'}
- Primary language / stack signal: ${config.raw.stackSignal}
- Created at: ${meta.createdAt}
- Last pushed at: ${meta.pushedAt}
- Last updated at: ${meta.updatedAt}
- Collection timestamp: ${runAt}
- Topics: ${topicsLine(meta)}
- ${latestReleaseText(meta)}

## Visible README / page excerpts

- The authenticated GitHub API snapshot on ${runDate} shows ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${issueLine(meta)}, ${prLine(meta)}, and ${meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? 'Unknown'} license metadata.
${config.raw.bullets.slice(1).map((line) => `- ${line}`).join('\n')}

## Raw capture boundary

No local benchmark run, repository clone, or workflow execution was performed in this iteration. This file preserves authenticated public GitHub metadata and README-surface evidence for downstream classification, project cards, site reports, and corpus analysis.
`;
}

function buildProjectCard(config, meta) {
  return `# ${config.project.name} Model Card

## One Sentence

${config.project.oneSentence}

## Three Sentences

${config.project.threeSentences.join(' ')}

## Model Card

| Field | Value |
|---|---|
| Repository | \`${config.repo}\` |
| Source | \`${config.rawFile}\` |
| Category | ${config.project.category} |
| Pattern | ${config.project.pattern} |
| Evidence | Authenticated GitHub API snapshot, ${runDate} |

## Teaching Use

${config.project.teaching}

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot: ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${issueLine(meta)}, ${prLine(meta)}, and ${meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? 'Unknown'} license metadata observed on ${runDate}. ${config.project.limits}
`;
}

function updateProjectsTs(publicConfigs, metadataByRepo) {
  const file = 'site/src/data/projects.ts';
  const text = read(file);
  const startToken = 'export const projects: Project[] = ';
  const endToken = ';\n\nexport const projectGroups';
  const start = text.indexOf(startToken);
  const end = text.indexOf(endToken, start);
  const jsonText = text.slice(start + startToken.length, end);
  const projects = JSON.parse(jsonText);
  for (const config of publicConfigs) {
    const meta = metadataByRepo.get(config.repo);
    const project = projects.find((item) => item.repo.toLowerCase() === config.siteRepo.toLowerCase());
    if (!project) continue;
    project.url = config.url;
    project.description = config.classification.description;
    project.stack = config.classification.stack.split('/');
    project.category = config.project.category
      .replace(/^./, (c) => c.toUpperCase())
      .replace(/\bapi\b/gi, 'API');
    project.stars = meta.stargazerCount;
    project.forks = meta.forkCount;
    project.lastPushed = meta.pushedAt;
    project.language = meta.primaryLanguage?.name ?? project.language;
    project.license = meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? project.license;
    project.localPath = config.rawFile;
  }
  const next = `${text.slice(0, start + startToken.length)}${JSON.stringify(projects, null, 4)}${text.slice(end)}`;
  write(file, `${next}\n`);
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function updateClassification(metadataByRepo) {
  const jsonPath = 'research/repo-classification.json';
  const data = JSON.parse(read(jsonPath));
  const rows = data.rows;
  for (const config of repoConfigs) {
    const meta = metadataByRepo.get(config.repo);
    const existing = rows.find((row) => row.repo.toLowerCase() === config.repo.toLowerCase());
    const row = existing ?? { repo: config.repo, url: config.url, prior_category: '-', prior_unclassified: 'true' };
    row.repo = config.repo;
    row.url = config.url;
    row.stars = String(meta.stargazerCount);
    row.prior_category = row.prior_category ?? '-';
    row.prior_unclassified = row.prior_unclassified ?? (row.prior_category === '-' ? 'true' : 'false');
    row.final_category = config.classification.final_category;
    row.function_tag = config.classification.function_tag;
    row.base_theme = config.classification.base_theme;
    row.stack = config.classification.stack;
    row.time_slice = '2026-06';
    row.content_timestamp = runDate;
    row.evidence = `authenticated GitHub API snapshot on ${runDate} showed ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${issueLine(meta)}, ${prLine(meta)}, ${meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? 'Unknown'} license metadata, and repo positioning consistent with ${config.classification.base_theme} / ${config.classification.function_tag}.`;
    row.description = config.classification.description;
    if (!existing) rows.push(row);
  }
  rows.sort((a, b) => a.repo.toLowerCase().localeCompare(b.repo.toLowerCase()));
  write(jsonPath, `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

  const columns = [
    'repo',
    'url',
    'stars',
    'prior_category',
    'prior_unclassified',
    'final_category',
    'function_tag',
    'base_theme',
    'stack',
    'time_slice',
    'content_timestamp',
    'evidence',
    'description'
  ];
  const csv = `${columns.join(',')}\n${rows
    .map((row) => columns.map((column) => csvEscape(row[column] ?? '')).join(','))
    .join('\n')}\n`;
  write('research/repo-classification.csv', csv);

  const counts = new Map();
  for (const row of rows) {
    counts.set(row.final_category, (counts.get(row.final_category) ?? 0) + 1);
  }
  const additions = repoConfigs.map((config) => {
    const row = rows.find((item) => item.repo.toLowerCase() === config.repo.toLowerCase());
    return row;
  });
  const fullRows = rows
    .map(
      (row, index) =>
        `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category ?? '-'} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`
    )
    .join('\n');
  const md = `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）

- generated_at: ${runAt}
- companion_csv: \`research/repo-classification.csv\`
- companion_json: \`research/repo-classification.json\`

## 分类计数

| Category | Count |
|---|---:|
${[...counts.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([key, count]) => `| ${key} | ${count} |`)
  .join('\n')}

## 本轮 hourly public metadata 增量

| Repo | Category | Theme | Function | Evidence |
|---|---|---|---|---|
${additions
  .map(
    (row) =>
      `| [${row.repo}](${row.url}) | ${row.final_category} | ${row.base_theme} | ${row.function_tag} | ${String(row.evidence).replace(/\|/g, '/')} |`
  )
  .join('\n')}

本轮刷新 ${repoConfigs.map((config) => config.repo).join('、')} 的 raw captures，并同步把旧的 web-observed packet 升级为 authenticated GitHub API metadata。尚未进入主站公开项目面的条目只有 \`lsdefine/genericagent\` 与 \`uid4oe/insight-swarm\`；这两个仓库本轮只更新到 raw/classification/work note 阶段。

## 完整分类表

| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |
|---:|---|---:|---|---|---|---|---|---|---|---|
${fullRows}
`;
  write('research/repo-classification.md', md);
}

function replaceBetween(text, startHeading, endHeading, replacement) {
  const start = text.indexOf(startHeading);
  const end = text.indexOf(endHeading, start);
  if (start === -1 || end === -1) {
    throw new Error(`Failed to locate section: ${startHeading}`);
  }
  return `${text.slice(0, start)}${replacement}${text.slice(end)}`;
}

function updateReadmes() {
  const zhSection = `## 近期证据更新（2026-06-13）

本轮不是新增一批条目，而是把 agent runtime、harness、memory、benchmark、taxonomy mirror 和 swarm 概念样本里最关键的一组公开数字面重新校正到 \`2026-06-13\` 的 authenticated GitHub API 快照。重点不是“谁又多了几个 star”，而是把这几类核心角色的最新证据同步到 raw、分类、project card、site report、README 前台说明和 Mermaid truth source。

| 仓库 | 这轮补了什么 | 为什么重要 | 证据状态 |
|---|---|---|---|
| [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 把 AHE 从 web-observed 数字面切到 authenticated GitHub API，并修正主站 raw 路径大小写不一致。 | 它是“harness 本身可进化”的最直接锚点。 | [KNOWN] GitHub API source-scoped；benchmark 仍未在本站复现。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 刷新 stars/forks/issues/PRs/commits 与最新 release 锚点。 | 它回答“可用产品型 agent 长什么样”这个核心问题。 | [KNOWN] GitHub API source-scoped；未做本地运行验证。 |
| [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | 把 5 月的老快照升级到 6 月 API 计数。 | 它是 outer-loop harness search 的最干净参考样本。 | [KNOWN] GitHub API source-scoped；未重跑实验。 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 刷新 memory substrate 的公开数字面与 release 锚点。 | 它回答“长期记忆如何跨 Codex / Claude Code / Hermes / OpenClaw 持续积累”。 | [KNOWN] GitHub API source-scoped；memory 质量未在本站独立复核。 |
| [pinchbench/skill](https://github.com/pinchbench/skill) | 把 benchmark/eval 样本升级为 API 口径，并同步 frontier analysis。 | 它是 skill、memory、benchmark 三条线交叉的 evaluator substrate。 | [KNOWN] GitHub API source-scoped；benchmark 未在本站重跑。 |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | 把 stale raw/classification 升级为 API 计数。 | 它是“不要预装技能，而是让技能树生长”的 self-evolving 极简路线。 | [KNOWN] GitHub API source-scoped；本轮未推广到主站 project card。 |
| [EvoMap/awesome-agent-evolution](https://github.com/EvoMap/awesome-agent-evolution) | 刷新 taxonomy comparator 的 counts，并同步 frontier analysis。 | 它帮助我们检查公开叙事是否比普通 awesome list 更有证据密度。 | [KNOWN] GitHub API source-scoped；未执行其脚本流水线。 |
| [uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm) | 把 stale raw/classification 升级为 API 计数。 | 它是“shared knowledge graph 替代中心 orchestrator”的 swarm 概念锚点。 | [KNOWN] GitHub API source-scoped；本轮未推广到主站 project card。 |

`;
  const zhAltSection = `## 本轮 GitHub Metadata 修复包（2026-06-13）

这轮不是新增条目，而是把 agent runtime、harness、memory、benchmark、taxonomy mirror 和 swarm 概念样本里最关键的一组公开数字面校正到 \`2026-06-13\` 的 authenticated GitHub API 快照，并同步 raw、分类、project card、site report、README 前台说明和 Mermaid truth source。

| 仓库 | 这轮补了什么 | 为什么重要 |
|---|---|---|
| [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | 把 AHE 从 web-observed 数字面切到 authenticated GitHub API，并修正主站 raw 路径大小写不一致。 | 它是“harness 本身可进化”的最直接锚点。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 刷新 stars/forks/issues/PRs/commits 与最新 release 锚点。 | 它回答“可用产品型 agent 长什么样”这个核心问题。 |
| [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | 把 5 月的老快照升级到 6 月 API 计数。 | 它是 outer-loop harness search 的最干净参考样本。 |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 刷新 memory substrate 的公开数字面与 release 锚点。 | 它回答“长期记忆如何跨 Codex / Claude Code / Hermes / OpenClaw 持续积累”。 |
| [pinchbench/skill](https://github.com/pinchbench/skill) | 把 benchmark/eval 样本升级为 API 口径，并同步 frontier analysis。 | 它是 skill、memory、benchmark 三条线交叉的 evaluator substrate。 |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | 把 stale raw/classification 升级为 API 计数。 | 它是“不要预装技能，而是让技能树生长”的 self-evolving 极简路线。 |
| [EvoMap/awesome-agent-evolution](https://github.com/EvoMap/awesome-agent-evolution) | 刷新 taxonomy comparator 的 counts，并同步 frontier analysis。 | 它帮助我们检查公开叙事是否比普通 awesome list 更有证据密度。 |
| [uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm) | 把 stale raw/classification 升级为 API 计数。 | 它是“shared knowledge graph 替代中心 orchestrator”的 swarm 概念锚点。 |

`;
  const enSection = `## Recent Evidence Updates (2026-06-13)

This update is not about adding a new batch of repositories. It recalibrates one of the most important cross-sections in the corpus against authenticated GitHub API snapshots captured on 2026-06-13: product-like agent runtime, harness evolution, outer-loop harness search, memory substrate, benchmark/eval anchor, self-evolving minimal runtime, external taxonomy mirror, and graph-mediated swarm concept.

| Repository | Evidence gap filled | Why it matters | Evidence state |
|---|---|---|---|
| [china-qijizhifeng/agentic-Harness-engineering](https://github.com/china-qijizhifeng/agentic-Harness-engineering) | Upgraded AHE from web-observed counts to authenticated GitHub API metadata and fixed the public raw-path mismatch. | It is the clearest anchor for “the harness itself evolves.” | [KNOWN] GitHub API source-scoped; benchmark claims are not reproduced here. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Refreshed stars, forks, issues, PRs, commits, and a concrete release anchor. | It answers the user’s product question: what a usable, growth-oriented agent runtime looks like in public. | [KNOWN] GitHub API source-scoped; no local runtime validation in this pass. |
| [stanford-iris-lab/meta-harness](https://github.com/stanford-iris-lab/meta-harness) | Upgraded a stale May packet to June API counts. | It remains the cleanest public outer-loop harness-search reference. | [KNOWN] GitHub API source-scoped; experiments were not rerun locally. |
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | Refreshed the memory-substrate public surface and release anchor. | It answers how long-horizon memory can accumulate across Codex, Claude Code, Hermes, and OpenClaw style runtimes. | [KNOWN] GitHub API source-scoped; memory quality is not independently revalidated here. |
| [pinchbench/skill](https://github.com/pinchbench/skill) | Upgraded the benchmark/eval anchor to API counts and synchronized the frontier analysis. | It is where the skill, memory, and benchmark threads intersect as an evaluator substrate. | [KNOWN] GitHub API source-scoped; the benchmark was not rerun locally. |
| [lsdefine/GenericAgent](https://github.com/lsdefine/GenericAgent) | Replaced stale raw/classification evidence with API metadata. | It is still one of the clearest minimal “do not preload skills, evolve them” runtime samples. | [KNOWN] GitHub API source-scoped; not promoted to a public site card in this pass. |
| [EvoMap/awesome-agent-evolution](https://github.com/EvoMap/awesome-agent-evolution) | Refreshed the taxonomy-comparator counts and synchronized the frontier analysis. | It is the external mirror that tests whether our public packaging is more evidence-dense than a generic awesome list. | [KNOWN] GitHub API source-scoped; its scripts were not executed locally. |
| [uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm) | Replaced stale raw/classification evidence with API metadata. | It is a useful swarm concept anchor for graph-mediated multi-agent synthesis without a central orchestrator. | [KNOWN] GitHub API source-scoped; not promoted to a public site card in this pass. |

`;

  const readme = read('README.md');
  write(
    'README.md',
    replaceBetween(readme, '## 近期证据更新（2026-06-13）', '## 核心洞察', zhSection).replace(
      /## 核心洞察## 核心洞察/g,
      '## 核心洞察'
    )
  );
  const readmeZh = read('README-ZH.md');
  write(
    'README-ZH.md',
    replaceBetween(readmeZh, '## 本轮 GitHub Metadata 修复包（2026-06-13）', '## 核心洞察', zhAltSection).replace(
      /## 核心洞察## 核心洞察/g,
      '## 核心洞察'
    )
  );
  const readmeEn = read('README-EN.md');
  write(
    'README-EN.md',
    replaceBetween(readmeEn, '## Recent Evidence Updates (2026-06-13)', '## Core Insight', enSection).replace(
      /## Core Insight## Core Insight/g,
      '## Core Insight'
    )
  );
}

function updateFrontierAnalyses(metadataByRepo) {
  const pinch = metadataByRepo.get('pinchbench/skill');
  const evomap = metadataByRepo.get('EvoMap/awesome-agent-evolution');
  write(
    'analysis/frontier-projects/pinchbench-skill-dual-chain.md',
    `# pinchbench/skill Dual-Chain Deep Dive

> Date: ${runDate}. Layer: \`processed/analysis\`. Source queue: \`analysis/value-evidence-repair-queue.json\`. Evidence quality: authenticated GitHub API metadata + raw capture; local benchmark execution not performed.

## One Sentence

\`pinchbench/skill\` is a high-value benchmark harness for OpenClaw-style agents: it does not make agents self-evolve by itself, but it supplies the real-task evaluator, transcript retention, and leaderboard path that a self-improvement loop needs to avoid judging itself in the dark.

## Three Sentences

[KNOWN] The authenticated GitHub API snapshot on ${runDate} shows \`pinchbench/skill\` at ${formatNumber(
      pinch.stargazerCount
    )} stars, ${formatNumber(pinch.forkCount)} forks, ${formatNumber(
      pinch.issues.totalCount
    )} open issues, ${formatNumber(pinch.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, MIT license metadata, and Python as the primary language. Source: \`raw-github/pinchbench_skill.md\`.

[KNOWN] The raw capture still makes the benchmark scope explicit: 53 real-world tasks across productivity, research, writing, coding, analysis, email, memory, and skill discovery, with automatic grading, LLM judging, and saved transcript archives. Source: \`raw-github/pinchbench_skill.md\`.

[INFERRED] The correct frontier role remains \`benchmark-harness / OpenClaw ecosystem evaluator\`: PinchBench is not itself a self-evolving runtime, but it is the evaluation substrate that lets a runtime, skill pack, or harness mutation claim measurable progress on realistic tasks.

## Evidence Chain

| Link | Status | Evidence |
|---|---|---|
| Raw capture | [KNOWN] | \`raw-github/pinchbench_skill.md\` refreshed on ${runDate} with authenticated GitHub API stars/forks/issues/PRs/commits plus README task scope. |
| Queue row | [KNOWN] | \`analysis/value-evidence-repair-queue.json\` keeps the repo in the evidence-repair corpus, but the freshness blocker is cleared for this row. |
| Public model card | [KNOWN] | \`projects/51-pinchbench-skill.md\` and \`site/public/reports/projects/51-pinchbench-skill.md\`. |
| Site project data | [KNOWN] | \`site/src/data/projects.ts\` receives updated benchmark metadata in this iteration. |
| API access | [KNOWN] | \`gh api graphql\` succeeded in this workspace on ${runDate}; the old API-blocked interpretation is no longer correct for this row. |

## Mirror Chain

\`\`\`json
{
  "node": "project.pinchbench.skill",
  "feature": "value-evidence-repair.deep-read",
  "intent": "Decide whether PinchBench is just an OpenClaw leaderboard accessory or a broader evaluation primitive for self-improving agents.",
  "rank_decision": "promote-to-benchmark-harness-anchor",
  "rank_confidence": "medium",
  "main_tension": "Strong benchmark/task realism vs narrow dependence on the OpenClaw execution stack.",
  "why_now": "The user keeps prioritizing skill, benchmark, and harness evidence over star totals; PinchBench is where those three threads meet.",
  "next_action": "Keep it in frontier comparison as the real-task evaluator for runtime and skill-loop projects, but do not score it as a self-evolving runtime."
}
\`\`\`

## Working Principle

\`\`\`mermaid
flowchart TD
  Task["53 real-world tasks"] --> Agent["OpenClaw agent run"]
  Agent --> Tools["tool calls + multistep execution"]
  Tools --> Judge["automatic grader and/or LLM judge"]
  Judge --> Result["score + result JSON"]
  Result --> Transcript["saved JSONL transcripts"]
  Result --> Leaderboard["optional upload to pinchbench.com"]
\`\`\`

## Trust Chain

- [KNOWN] Authenticated GitHub API metadata and README-surface signals were re-read on ${runDate}.
- [KNOWN] Freshness is API-backed in this pass; the earlier API-blocked note is now historical context only.
- [INFERRED] The benchmark-anchor decision comes from task scope, judging design, and transcript retention.
- [UNVERIFIED] No official leaderboard run, upload path, or local OpenClaw benchmark execution was reproduced in this pass.
`
  );
  write(
    'analysis/frontier-projects/evomap-awesome-agent-evolution-dual-chain.md',
    `# evomap/awesome-agent-evolution Dual-Chain Deep Dive

> Date: ${runDate}. Layer: \`processed/analysis\`. Source queue: \`analysis/value-evidence-repair-queue.json\`. Evidence quality: authenticated GitHub API metadata + raw capture; local script execution not performed.

## One Sentence

\`EvoMap/awesome-agent-evolution\` is not a runnable self-evolving system but a valuable external taxonomy mirror: it packages the same field into a curated awesome-list structure that we can learn from, compare against, and deliberately diverge from where our evidence standards are higher.

## Three Sentences

[KNOWN] The authenticated GitHub API snapshot on ${runDate} shows \`EvoMap/awesome-agent-evolution\` at ${formatNumber(
      evomap.stargazerCount
    )} stars, ${formatNumber(evomap.forkCount)} forks, ${formatNumber(
      evomap.defaultBranchRef?.target?.history?.totalCount ?? 0
    )} commits, ${formatNumber(evomap.issues.totalCount)} open issues, and ${formatNumber(
      evomap.pullRequests.totalCount
    )} open pull request. Source: \`raw-github/evomap_awesome-agent-evolution.md\`.

[KNOWN] The raw capture and topic list still show the same packaging logic: self-evolution, memory, protocols, coding, benchmarks, swarm adjacency, and community knowledge as reader-facing navigation categories. Source: \`raw-github/evomap_awesome-agent-evolution.md\`.

[INFERRED] Its correct frontier role remains \`resource-index / taxonomy comparator\`: it matters less as a direct implementation target and more as a signal for how the wider ecosystem currently packages and markets the self-evolving agent space.

## Evidence Chain

| Link | Status | Evidence |
|---|---|---|
| Raw capture | [KNOWN] | \`raw-github/evomap_awesome-agent-evolution.md\` refreshed on ${runDate} with authenticated GitHub API counts, topic signals, and taxonomy surface. |
| Queue row | [KNOWN] | \`analysis/value-evidence-repair-queue.json\` keeps the repo as a high-value comparator, but the freshness blocker is cleared for this row. |
| Project card | [KNOWN] | \`projects/394-evomap-awesome-agent-evolution.md\` and \`site/public/reports/projects/394-evomap-awesome-agent-evolution.md\`. |
| Site data | [KNOWN] | \`site/src/data/projects.ts\` keeps the repo in the public project registry. |
| API access | [KNOWN] | \`gh api graphql\` succeeded in this workspace on ${runDate}; the old API-blocked interpretation is no longer correct for this row. |

## Mirror Chain

\`\`\`json
{
  "node": "project.evomap.awesome-agent-evolution",
  "feature": "value-evidence-repair.deep-read",
  "intent": "Use an external awesome list as a mirror for our own curation logic rather than treating it as a runtime implementation.",
  "rank_decision": "promote-to-taxonomy-comparator",
  "rank_confidence": "medium",
  "main_tension": "Broad, readable field packaging vs shallow evidence density compared with our model-card-first pipeline.",
  "why_now": "The user explicitly wants README, website, graph, benchmark, memory, and Agent-Swarm surfaces to move together; this repo is a live external comparator for that packaging problem.",
  "next_action": "Keep as an external awesome-list anchor and compare its taxonomy with our README/site topic map, especially around memory, benchmark, and swarm boundaries."
}
\`\`\`

## Working Principle

\`\`\`mermaid
flowchart TD
  Taxonomy["field taxonomy"] --> CuratedList["awesome-list sections"]
  CuratedList --> Projects["projects and tools"]
  CuratedList --> Papers["papers and methods"]
  CuratedList --> Benchmarks["benchmarks and evaluation"]
  CuratedList --> Community["community and related awesome lists"]
  Community --> Swarm["separate awesome-agent-swarm pointer"]
\`\`\`

## Trust Chain

- [KNOWN] Authenticated GitHub API metadata and README taxonomy were re-read on ${runDate}.
- [KNOWN] Freshness is API-backed in this pass; the earlier API-blocked note is now historical context only.
- [INFERRED] The taxonomy-comparator decision comes from the repo structure, category layout, and relationship to our own public packaging goals.
- [UNVERIFIED] No local execution of EvoMap \`data/\` or \`scripts/\` was performed in this pass.
`
  );
}

function updateMermaid(metadataByRepo) {
  const currentRunRepos = repoConfigs.map((config) => {
    const meta = metadataByRepo.get(config.repo);
    return {
      repo: config.repo,
      raw_capture: config.rawFile,
      report: config.project?.path ?? null,
      site_report: config.project?.sitePath ?? null,
      stars: meta.stargazerCount,
      forks: meta.forkCount,
      issues: meta.issues.totalCount,
      pull_requests: meta.pullRequests.totalCount,
      commits: meta.defaultBranchRef?.target?.history?.totalCount ?? 0,
      latest_push: meta.pushedAt,
      latest_release: meta.releases?.nodes?.[0] ?? null,
      theme: config.classification.base_theme
    };
  });
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
        paths: repoConfigs.map((config) => config.rawFile)
      },
      {
        id: 'processed.github-classification',
        title: 'GitHub classification and project cards',
        layer: 'processed',
        status: 'updated',
        paths: [
          'research/repo-classification.json',
          'research/repo-classification.csv',
          'research/repo-classification.md',
          'analysis/frontier-projects/pinchbench-skill-dual-chain.md',
          'analysis/frontier-projects/evomap-awesome-agent-evolution-dual-chain.md',
          ...repoConfigs.filter((config) => config.project).map((config) => config.project.path)
        ]
      },
      {
        id: 'results.public-site',
        title: 'Public site and report surfaces',
        layer: 'results',
        status: 'updated',
        paths: [
          'site/src/data/projects.ts',
          ...repoConfigs.filter((config) => config.project).map((config) => config.project.sitePath),
          'README.md',
          'README-ZH.md',
          'README-EN.md'
        ]
      },
      {
        id: 'results.index-analysis',
        title: 'Indexes and GitHub corpus analysis',
        layer: 'results',
        status: 'pending-validation',
        paths: [
          'output/raw-github-timestamp-index.md',
          'output/raw-github-timestamp-index-ZH.md',
          'output/raw-github-timestamp-index.json',
          'analysis/github-project-data-analysis.md',
          'analysis/github-project-data-analysis.json',
          'analysis/github-project-data-analysis.tex'
        ]
      },
      {
        id: 'work.learning-note',
        title: 'Learning note and run ledger',
        layer: 'work',
        status: 'updated',
        paths: [
          `work/research/hourly-public-metadata-update-${runSlug}.md`,
          `.mermaid/current/graph.md`,
          `.mermaid/current/graph.mmd`,
          `work/research/hourly-public-metadata-update-${runSlug}-data.json`
        ]
      }
    ],
    edges: [
      ['intent.direct-user-input', 'raw.github.hourly-captures', 'governs'],
      ['raw.github.hourly-captures', 'processed.github-classification', 'feeds'],
      ['processed.github-classification', 'results.public-site', 'publishes'],
      ['processed.github-classification', 'results.index-analysis', 'rebuilds'],
      ['results.public-site', 'work.learning-note', 'summarized-by'],
      ['work.learning-note', 'intent.direct-user-input', 'handoff']
    ],
    current_run: {
      source: 'authenticated gh GraphQL/API snapshot',
      repos: currentRunRepos,
      gitnexus: {
        status: 'partially-available',
        note: 'node .gitnexus/run.cjs status works, but query/analyze fail in the LadybugDB load stage.',
        blocker:
          'COPY failed for File: Runtime exception: Trying to read a database file with a different version. Database file version: 41, Current build storage version: 40'
      }
    }
  };
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);

  const graphMd = `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Current Run Repositories

${repoConfigs
  .map((config) => {
    const report = config.project?.path ?? 'not promoted to public project card in this run';
    const siteReport = config.project?.sitePath ?? 'not promoted to public site report in this run';
    return `- **${config.repo}** -> raw \`${config.rawFile}\` -> card \`${report}\` -> site report \`${siteReport}\``;
  })
  .join('\n')}

## Working Principle

Authenticated GitHub API snapshots -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- This loop used authenticated GitHub GraphQL/API access through \`gh\`, so counts are fresher than prior web-observed packets.
- Mermaid Architect validation is currently schema-incompatible with this graph shape (\`list indices must be integers or slices, not str\`), so \`graph.json\` remains truth and \`.md\` / \`.mmd\` are maintained views.
- GitNexus is partially available: \`node .gitnexus/run.cjs status\` works, but query/analyze fail when loading LadybugDB because the database file version is \`41\` while the current build storage version is \`40\`.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
`;
  write('.mermaid/current/graph.md', graphMd);
  write(
    '.mermaid/current/graph.mmd',
    `flowchart LR\n  intent["Direct user intent"] --> raw["authenticated GitHub API repo refresh"]\n  raw --> processed["classification + project cards + frontier analyses"]\n  processed --> results["README/site/report surfaces"]\n  processed --> indexes["timestamp index + GitHub corpus analysis"]\n  results --> note["work note + Mermaid truth source"]\n  note --> intent\n`
  );
}

function updateWorkNote(metadataByRepo) {
  const tableRows = repoConfigs
    .map((config) => {
      const meta = metadataByRepo.get(config.repo);
      return `| \`${config.repo}\` | ${formatNumber(meta.stargazerCount)} | ${formatNumber(meta.forkCount)} | ${formatNumber(
        meta.defaultBranchRef?.target?.history?.totalCount ?? 0
      )} | ${meta.issues.totalCount} | ${meta.pullRequests.totalCount} | ${shortDate(meta.pushedAt)} |`;
    })
    .join('\n');
  const note = `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed the public GitHub metadata packet for eight core repos spanning harness, runtime, memory, benchmark, taxonomy, and swarm layers, then propagated the newer API-backed snapshot through raw, processed, public-site, and Mermaid surfaces.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The freshness boundary improved relative to the 2026-06-12 loop because \`gh api graphql\` succeeded in this workspace, so the packet no longer depends on approximate public-page badge readings.
The remaining blocker is GitNexus database compatibility: status works, but query/analyze fail when loading LadybugDB because the stored database version is newer than the current build storage version.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Latest push |
|---|---:|---:|---:|---:|---:|---|
${tableRows}

## Working Principle

Authenticated GitHub API snapshot -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> \`projects/*.md\` + \`site/public/reports/projects/*.md\` + \`site/src/data/projects.ts\` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence / Blocker

- \`node .gitnexus/run.cjs status\` works and reports the local repo index is stale before this run.
- \`node .gitnexus/run.cjs query --repo awesome-evolution-workspace-cleanup ...\` fails because LadybugDB cannot load the indexed file.
- \`node .gitnexus/run.cjs analyze\` also fails in the same stage with: \`COPY failed for File: Runtime exception: Trying to read a database file with a different version. Database file version: 41, Current build storage version: 40\`.
- Practical consequence: GitNexus topology is available only as a stale status signal in this iteration, not as fresh query evidence.

## Public Surface Sync

- Updated README / README-ZH / README-EN evidence sections so the current front-page packet matches this run rather than the earlier 2026-06-13 batch.
- Refreshed public project cards and site reports for AHE, Hermes Agent, Meta-Harness, agentmemory, PinchBench, and EvoMap.
- Refreshed raw/classification-only rows for GenericAgent and Insight Swarm and recorded that they are not yet promoted into the public site registry.
- Updated the Mermaid truth source and rendered views so the blocker narrative now reflects the GitNexus DB-version mismatch instead of the old DNS-only story.

## Validation Commands For This Iteration

- \`node scripts/generate_project_indexes.mjs\`
- \`python3 scripts/enforce_raw_timestamps.py\`
- \`node scripts/analyze_github_project_data.mjs\`
- \`(cd site && npm run build)\`
`;
  write(`work/research/hourly-public-metadata-update-${runSlug}.md`, note);
}

function main() {
  const metadataByRepo = new Map();
  for (const config of repoConfigs) {
    metadataByRepo.set(config.repo, ghQuery(config.owner, config.name));
  }
  const dataJson = Object.fromEntries(repoConfigs.map((config) => [config.repo, metadataByRepo.get(config.repo)]));
  write(`work/research/hourly-public-metadata-update-${runSlug}-data.json`, `${JSON.stringify(dataJson, null, 2)}\n`);

  for (const config of repoConfigs) {
    const meta = metadataByRepo.get(config.repo);
    write(config.rawFile, `${buildRawContent(config, meta)}\n`);
    if (config.project) {
      const card = `${buildProjectCard(config, meta)}\n`;
      write(config.project.path, card);
      write(config.project.sitePath, card);
    }
  }

  updateClassification(metadataByRepo);
  updateProjectsTs(repoConfigs.filter((config) => config.project), metadataByRepo);
  updateReadmes();
  updateFrontierAnalyses(metadataByRepo);
  updateMermaid(metadataByRepo);
  updateWorkNote(metadataByRepo);
}

main();
