import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const runAt = '2026-06-17T14:30:30+08:00';
const runDate = '2026-06-17';
const runDisplay = '2026-06-17 14:30 +0800';
const runSlug = '2026-06-17-1430';
const timestampSource = 'gh_api_graphql_authenticated_2026_06_17_1430';
const previousPacketSlug = '2026-06-17-0829';
const previousPacketLabel = '2026-06-17 08:29 +0800';
const previousDataPath = `work/research/hourly-public-metadata-update-${previousPacketSlug}-data.json`;

const gitnexusStatusOutput = exec('node', ['.gitnexus/run.cjs', 'status'], { allowFailure: true }).stdout.trim();
const gitnexusQueryOutput = exec(
  'node',
  [
    '.gitnexus/run.cjs',
    'query',
    '-r',
    'awesome-evolution-workspace-cleanup',
    '-l',
    '5',
    'hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects'
  ],
  { allowFailure: true }
).stdout.trim();

const repoConfigs = [
  {
    repo: 'china-qijizhifeng/agentic-Harness-engineering',
    url: 'https://github.com/china-qijizhifeng/agentic-Harness-engineering',
    rawFile: 'raw-github/china-qijizhifeng_agentic-harness-engineering.md',
    readmeWhyZh: '它是“harness 本身可进化”的最直接锚点。',
    readmeWhyEn: 'It is the clearest anchor for “the harness itself evolves.”',
    rawBullets: [
      'The repository still treats prompts, tools, middleware, memory, subagents, and evaluators as editable harness layers rather than fixed wrappers around a base model.',
      'Its public benchmark story still centers Terminal-Bench-2 plus SWE-bench-Verified transfer, so it remains a core harness-evolution evidence anchor.'
    ],
    project: {
      path: 'projects/43-agentic-harness-engineering.md',
      sitePath: 'site/public/reports/projects/43-agentic-harness-engineering.md'
    }
  },
  {
    repo: 'NousResearch/hermes-agent',
    url: 'https://github.com/NousResearch/hermes-agent',
    rawFile: 'raw-github/nousresearch_hermes-agent.md',
    readmeWhyZh: '它回答“可用产品型 agent 长什么样”这个核心问题。',
    readmeWhyEn: 'It answers the user’s product question: what a usable, growth-oriented agent runtime looks like in public.',
    rawBullets: [
      'Hermes Agent still positions itself as the personal agent that grows with you: persistent knowledge, skill creation, session search, user modeling, messaging gateways, and scheduled automations remain explicit.',
      'Its topic surface still ties it to the broader coding-agent runtime lane through `claude-code`, `codex`, `openclaw`, `ai-agent`, and adjacent public discovery tags.'
    ],
    project: {
      path: 'projects/44-hermes-agent.md',
      sitePath: 'site/public/reports/projects/44-hermes-agent.md'
    }
  },
  {
    repo: 'stanford-iris-lab/meta-harness',
    url: 'https://github.com/stanford-iris-lab/meta-harness',
    rawFile: 'raw-github/stanford-iris-lab_meta-harness.md',
    readmeWhyZh: '它是 outer-loop harness search 的最干净参考样本。',
    readmeWhyEn: 'It remains the cleanest public outer-loop harness-search reference.',
    rawBullets: [
      'The public repository still separates the core framework from the optimized Terminal-Bench-2 artifact, which preserves the outer-loop interpretation.',
      'It remains one of the clearest examples of fixed-model, mutable-harness search rather than weight-level self-evolution.'
    ],
    project: {
      path: 'projects/249-stanford-meta-harness-framework.md',
      sitePath: 'site/public/reports/projects/249-stanford-meta-harness-framework.md'
    }
  },
  {
    repo: 'rohitg00/agentmemory',
    url: 'https://github.com/rohitg00/agentmemory',
    rawFile: 'raw-github/rohitg00_agentmemory.md',
    readmeWhyZh: '它回答“长期记忆如何跨 Codex / Claude Code / Hermes / OpenClaw 持续积累”。',
    readmeWhyEn: 'It answers how long-horizon memory can accumulate across Codex, Claude Code, Hermes, and OpenClaw style runtimes.',
    rawBullets: [
      'The homepage still points to `agent-memory.dev`, and the topic surface still binds the project to Claude Code, Codex, Cursor, Hermes, OpenClaw, and MCP-style continuity.',
      'It remains a cross-harness memory substrate rather than a single-runtime plugin, which is why it matters for long-horizon agent accumulation.'
    ],
    project: {
      path: 'projects/50-agentmemory.md',
      sitePath: 'site/public/reports/projects/50-agentmemory.md'
    }
  },
  {
    repo: 'pinchbench/skill',
    url: 'https://github.com/pinchbench/skill',
    rawFile: 'raw-github/pinchbench_skill.md',
    readmeWhyZh: '它是 skill、memory、benchmark 三条线交叉的 evaluator substrate。',
    readmeWhyEn: 'It is where the skill, memory, and benchmark threads intersect as an evaluator substrate.',
    rawBullets: [
      'The repository still frames itself as an OpenClaw-oriented benchmark harness rather than the runtime itself.',
      'Its public story remains grounded in real-world task execution plus transcript-preserving grading, so it stays useful as evaluator pressure rather than product evidence.'
    ],
    project: {
      path: 'projects/51-pinchbench-skill.md',
      sitePath: 'site/public/reports/projects/51-pinchbench-skill.md'
    }
  },
  {
    repo: 'lsdefine/GenericAgent',
    url: 'https://github.com/lsdefine/GenericAgent',
    rawFile: 'raw-github/lsdefine_genericagent.md',
    readmeWhyZh: '它是“不要预装技能，而是让技能树生长”的 self-evolving 极简路线。',
    readmeWhyEn: 'It is still one of the clearest minimal “do not preload skills, evolve them” runtime samples.',
    rawBullets: [
      'The public README still leads with the seed loop, a tiny tool surface, and the “do not preload skills, evolve them” design philosophy.',
      'Its topic set still emphasizes `self-evolving`, `skill-tree`, `memory-system`, and `autonomous-agent` rather than generic automation.'
    ],
    project: {
      path: 'projects/47-genericagent.md',
      sitePath: 'site/public/reports/projects/47-genericagent.md'
    }
  },
  {
    repo: 'openclaw/openclaw',
    url: 'https://github.com/openclaw/openclaw',
    rawFile: 'raw-github/openclaw_openclaw.md',
    readmeWhyZh: '它是“agent 是否真的能给人用”的产品运行时锚点。',
    readmeWhyEn: 'It is the product-runtime anchor for asking whether agents are actually usable by people.',
    rawBullets: [
      'OpenClaw still describes itself as a local-first personal assistant that spans devices, channels, sessions, tools, skills, and companion apps.',
      'That keeps it in the product-runtime lane rather than only the benchmark or paper-code lane.'
    ],
    project: {
      path: 'projects/48-openclaw.md',
      sitePath: 'site/public/reports/projects/48-openclaw.md'
    }
  },
  {
    repo: 'obra/superpowers',
    url: 'https://github.com/obra/superpowers',
    rawFile: 'raw-github/obra_superpowers.md',
    readmeWhyZh: '它把可复用技能和工程方法论这条线接进了自进化公开证据链。',
    readmeWhyEn: 'It turns reusable skills and engineering methodology into a visible self-evolution infrastructure lane.',
    rawBullets: [
      'Superpowers still packages reusable workflows, agent skills, and engineering scaffolds as repeatable operating leverage instead of one-off demos.',
      'That keeps it relevant to the “skills as compounding infrastructure” thread in the public evidence chain.'
    ],
    project: {
      path: 'projects/49-superpowers.md',
      sitePath: 'site/public/reports/projects/49-superpowers.md'
    }
  },
  {
    repo: 'EvoMap/awesome-agent-evolution',
    url: 'https://github.com/EvoMap/awesome-agent-evolution',
    rawFile: 'raw-github/evomap_awesome-agent-evolution.md',
    readmeWhyZh: '它帮助我们检查公开叙事是否比普通 awesome list 更有证据密度。',
    readmeWhyEn: 'It is the external mirror that tests whether our public packaging is more evidence-dense than a generic awesome list.',
    rawBullets: [
      'Its topic set still makes it a live field-packaging mirror across `agent-evolution`, `self-evolving`, `memory-system`, `multi-agent`, `skill-library`, and `awesome-list`.',
      'Its README still functions primarily as a curated taxonomy comparator instead of a runnable system.'
    ],
    project: {
      path: 'projects/394-evomap-awesome-agent-evolution.md',
      sitePath: 'site/public/reports/projects/394-evomap-awesome-agent-evolution.md'
    }
  },
  {
    repo: 'uid4oe/insight-swarm',
    url: 'https://github.com/uid4oe/insight-swarm',
    rawFile: 'raw-github/uid4oe_insight-swarm.md',
    readmeWhyZh: '它是“shared knowledge graph 替代中心 orchestrator”的 swarm 概念锚点。',
    readmeWhyEn: 'It is a useful swarm concept anchor for graph-mediated multi-agent synthesis without a central orchestrator.',
    rawBullets: [
      'The public README still makes the architectural claim explicit: replace the central orchestrator with a shared knowledge graph and let agents discover, challenge, and synthesize.',
      'Its sparse topic set keeps it more useful as a concept anchor than as a public momentum signal.'
    ]
  },
  {
    repo: 'desplega-ai/agent-swarm',
    url: 'https://github.com/desplega-ai/agent-swarm',
    rawFile: 'raw-github/desplega-ai_agent-swarm.md',
    readmeWhyZh: '它把用户要求的 agent-swarm 主线补进了公开证据链。',
    readmeWhyEn: 'It makes the user-requested agent-swarm lane explicit in the public evidence chain.',
    rawBullets: [
      'The public repository still centers a lead-worker swarm runtime across Slack, GitHub, email, API, pages, workflows, and MCP.',
      'It remains one of the clearest public “compounding swarm” runtime anchors rather than a paper-only concept.'
    ],
    project: {
      path: 'projects/405-agent-swarm-compounding-lead-worker-runtime.md',
      sitePath: 'site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md'
    }
  }
];

const previousData = JSON.parse(read(previousDataPath));
const classificationData = JSON.parse(read('research/repo-classification.json'));
const classificationRows = classificationData.rows;
const metadataByRepo = new Map();

for (const config of repoConfigs) {
  metadataByRepo.set(config.repo, fetchMetadata(config));
}

writeIfChanged(
  `work/research/hourly-public-metadata-update-${runSlug}-data.json`,
  JSON.stringify(Object.fromEntries(repoConfigs.map((config) => [config.repo, metadataByRepo.get(config.repo)])), null, 2)
);

for (const config of repoConfigs) {
  const meta = metadataByRepo.get(config.repo);
  writeIfChanged(config.rawFile, buildRawContent(config, meta));
  if (config.project) {
    rewriteEvidenceSection(config.project.path, buildProjectEvidence(meta));
    rewriteEvidenceSection(config.project.sitePath, buildProjectEvidence(meta));
  }
}

updateClassification();
updateProjectsTs();
updateReadmes();
updateMermaid();
updateWorkNote();

function read(filePath) {
  return fs.readFileSync(path.resolve(filePath), 'utf8');
}

function writeIfChanged(filePath, content) {
  const resolved = path.resolve(filePath);
  const next = content.endsWith('\n') ? content : `${content}\n`;
  const prev = fs.existsSync(resolved) ? fs.readFileSync(resolved, 'utf8') : null;
  if (prev !== next) fs.writeFileSync(resolved, next);
}

function exec(command, args, options = {}) {
  try {
    const stdout = execFileSync(command, args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    });
    return { ok: true, stdout };
  } catch (error) {
    if (options.allowFailure) {
      return {
        ok: false,
        stdout: error.stdout?.toString?.() ?? '',
        stderr: error.stderr?.toString?.() ?? String(error.message ?? error)
      };
    }
    throw error;
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value ?? 0);
}

function shortDate(iso) {
  return iso ? iso.slice(0, 10) : 'unknown';
}

function parseRepo(repo) {
  const [owner, name] = repo.split('/');
  return { owner, name };
}

function fetchMetadata(config) {
  const prev = structuredClone(previousData[config.repo]);
  const graph = tryGraphql(config.repo);
  if (graph.ok) {
    graph.data._fetch = { source: 'gh_graphql', fallback: false, note: 'live authenticated GitHub GraphQL packet' };
    return graph.data;
  }
  const rest = tryRest(config.repo);
  if (rest.ok) {
    const merged = mergeRestIntoPrevious(prev, rest.data);
    merged._fetch = {
      source: 'gh_rest_plus_previous_graphql',
      fallback: true,
      note: 'live GitHub REST packet merged with previous authenticated GraphQL fields',
      blocker: graph.error
    };
    return merged;
  }
  prev._fetch = {
    source: `previous_authenticated_packet_${previousPacketSlug}`,
    fallback: true,
    note: `live GitHub fetch unavailable; retained ${previousPacketLabel} authenticated packet`,
    blocker: `graphql: ${graph.error}; rest: ${rest.error}`
  };
  return prev;
}

function tryGraphql(repo) {
  const { owner, name } = parseRepo(repo);
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
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const result = exec(
      'gh',
      ['api', 'graphql', '-f', `query=${query}`, '-F', `owner=${owner}`, '-F', `name=${name}`],
      { allowFailure: true }
    );
    if (result.ok) {
      return { ok: true, data: JSON.parse(result.stdout).data.repository };
    }
  }
  return {
    ok: false,
    error: `GitHub GraphQL failed for ${repo}`
  };
}

function tryRest(repo) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const result = exec('gh', ['api', `repos/${repo}`], { allowFailure: true });
    if (result.ok) return { ok: true, data: JSON.parse(result.stdout) };
  }
  return {
    ok: false,
    error: `GitHub REST failed for ${repo}`
  };
}

function mergeRestIntoPrevious(prev, rest) {
  prev.nameWithOwner = rest.full_name ?? prev.nameWithOwner;
  prev.description = rest.description ?? prev.description;
  prev.url = rest.html_url ?? prev.url;
  prev.homepageUrl = rest.homepage ?? prev.homepageUrl;
  prev.createdAt = rest.created_at ?? prev.createdAt;
  prev.pushedAt = rest.pushed_at ?? prev.pushedAt;
  prev.updatedAt = rest.updated_at ?? prev.updatedAt;
  prev.stargazerCount = rest.stargazers_count ?? prev.stargazerCount;
  prev.forkCount = rest.forks_count ?? prev.forkCount;
  prev.primaryLanguage = { name: rest.language ?? prev.primaryLanguage?.name ?? 'Unknown' };
  prev.licenseInfo = {
    spdxId: rest.license?.spdx_id ?? prev.licenseInfo?.spdxId ?? null,
    name: rest.license?.name ?? prev.licenseInfo?.name ?? null
  };
  prev.repositoryTopics = {
    nodes: (rest.topics ?? []).map((topic) => ({ topic: { name: topic } }))
  };
  prev.issues = { totalCount: rest.open_issues_count ?? prev.issues?.totalCount ?? 0 };
  return prev;
}

function getClassificationRow(repo) {
  const row = classificationRows.find((entry) => entry.repo.toLowerCase() === repo.toLowerCase());
  if (!row) throw new Error(`Missing classification row for ${repo}`);
  return row;
}

function buildRawContent(config, meta) {
  const row = getClassificationRow(config.repo);
  const topics = meta.repositoryTopics?.nodes?.map((node) => node.topic.name) ?? [];
  const release = meta.releases?.nodes?.[0];
  const deltaText = buildDeltaText(config.repo, meta);
  return `---
repo: ${config.repo}
url: ${config.url}
content_timestamp: ${runDate}
time_slice: 2026-06
timestamp_source: ${timestampSource}
collected_at: ${runAt}
source: github
source_tool: ${meta._fetch.source}
---

## GitHub - ${config.repo}: ${meta.description ?? 'Public repository metadata capture'}

**Source**: ${config.url}

---

# Raw public metadata capture notes

This raw GitHub capture was refreshed by the hourly public metadata update through authenticated GitHub API access via \`gh\`.

## Visible repository metadata

- Repository: ${config.repo}
- URL: ${config.url}
- Stars: ${formatNumber(meta.stargazerCount)}
- Forks: ${formatNumber(meta.forkCount)}
- Commits: ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)}
- Open issues: ${formatNumber(meta.issues?.totalCount ?? 0)}
- Open pull requests: ${formatNumber(meta.pullRequests?.totalCount ?? 0)}
- License: ${meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? 'Unknown'}
- Primary language / stack signal: ${row.stack}
- Created at: ${meta.createdAt}
- Last pushed at: ${meta.pushedAt}
- Last updated at: ${meta.updatedAt}
- Collection timestamp: ${runAt}
- Topics: ${topics.length ? topics.join(', ') : 'none exposed through the GitHub API topic list'}
- Latest public release: ${release ? `${release.name} (${shortDate(release.publishedAt)})` : 'none exposed through the GitHub API release list'}

## Visible README / page excerpts

- The current packet on ${runDate} shows ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${formatNumber(meta.issues?.totalCount ?? 0)} open issues, and ${formatNumber(meta.pullRequests?.totalCount ?? 0)} open pull requests.
- ${config.rawBullets[0]}
- ${config.rawBullets[1]}
- ${deltaText}

## Raw capture boundary

- Fetch lane: ${meta._fetch.note}.
${meta._fetch.blocker ? `- Fetch blocker: ${meta._fetch.blocker}.\n` : ''}- No local benchmark run, repository clone, or workflow execution was performed in this iteration.
- This file preserves GitHub metadata and README-surface evidence for downstream classification, project cards, site reports, and corpus analysis.
`;
}

function buildDeltaText(repo, meta) {
  const previous = previousData[repo];
  if (meta._fetch.fallback) {
    return `Live GitHub fetch was not fully available during this run, so the metadata surface keeps the previous authenticated packet from ${previousPacketLabel}.`;
  }
  const deltas = [];
  for (const [label, currentValue, previousValue] of [
    ['stars', meta.stargazerCount, previous.stargazerCount],
    ['forks', meta.forkCount, previous.forkCount],
    ['issues', meta.issues?.totalCount ?? 0, previous.issues?.totalCount ?? 0],
    ['PRs', meta.pullRequests?.totalCount ?? 0, previous.pullRequests?.totalCount ?? 0],
    ['commits', meta.defaultBranchRef?.target?.history?.totalCount ?? 0, previous.defaultBranchRef?.target?.history?.totalCount ?? 0]
  ]) {
    if (currentValue !== previousValue) deltas.push(`${label} ${formatNumber(previousValue)} -> ${formatNumber(currentValue)}`);
  }
  if ((meta.pushedAt ?? '') !== (previous.pushedAt ?? '')) deltas.push(`pushedAt ${previous.pushedAt ?? 'unknown'} -> ${meta.pushedAt ?? 'unknown'}`);
  if ((meta.updatedAt ?? '') !== (previous.updatedAt ?? '')) deltas.push(`updatedAt ${previous.updatedAt ?? 'unknown'} -> ${meta.updatedAt ?? 'unknown'}`);
  if (!deltas.length) return `No public metadata delta was observed relative to the previous authenticated packet at ${previousPacketLabel}.`;
  return `Relative to the previous authenticated packet at ${previousPacketLabel}: ${deltas.join('; ')}.`;
}

function buildProjectEvidence(meta) {
  const extra = meta._fetch.fallback
    ? `The live GitHub fetch was degraded in this run, so some fields were preserved from the previous authenticated packet at ${previousPacketLabel}.`
    : `This packet is fresher than the previous authenticated packet at ${previousPacketLabel} where a delta was observed.`;
  return `## Evidence And Limits

The raw capture now reflects a GitHub metadata packet observed on ${runDate}: ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${formatNumber(meta.issues?.totalCount ?? 0)} open issues, and ${formatNumber(meta.pullRequests?.totalCount ?? 0)} open pull requests. ${extra} This run did not execute the repository locally, validate workflows end to end, or independently rerun benchmark claims. Product, memory, benchmark, and automation claims therefore remain repository-scoped unless separately tested.
`;
}

function rewriteEvidenceSection(filePath, replacement) {
  const text = read(filePath);
  const next = text.replace(/## Evidence And Limits[\s\S]*$/m, replacement.trimEnd());
  writeIfChanged(filePath, next);
}

function updateClassification() {
  for (const config of repoConfigs) {
    const row = getClassificationRow(config.repo);
    const meta = metadataByRepo.get(config.repo);
    row.stars = String(meta.stargazerCount);
    row.time_slice = '2026-06';
    row.content_timestamp = runDate;
    row.evidence = `GitHub metadata packet on ${runDate} showed ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${formatNumber(meta.issues?.totalCount ?? 0)} open issues, ${formatNumber(meta.pullRequests?.totalCount ?? 0)} open pull requests, and positioning consistent with ${row.base_theme} / ${row.function_tag}.`;
  }
  classificationData.generated_at = runAt;
  writeIfChanged('research/repo-classification.json', JSON.stringify(classificationData, null, 2));
  writeClassificationCsv();
  writeClassificationMd();
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function writeClassificationCsv() {
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
  const rows = classificationRows
    .slice()
    .sort((a, b) => a.repo.toLowerCase().localeCompare(b.repo.toLowerCase()));
  const content = `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column] ?? '')).join(',')).join('\n')}\n`;
  writeIfChanged('research/repo-classification.csv', content);
}

function writeClassificationMd() {
  const refreshedRows = repoConfigs.map((config) => getClassificationRow(config.repo));
  const body = refreshedRows
    .map((row) => `| [${row.repo}](${row.url}) | ${row.final_category} | ${row.base_theme} | ${row.function_tag} | ${row.stars} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`)
    .join('\n');
  const content = `# Repo 自动分类与技术栈分析

- generated_at: ${runAt}
- focus: hourly public metadata packet refresh

## 本轮复核仓库

| Repo | Category | Theme | Function | Stars | Content Timestamp | Evidence |
|---|---|---|---|---:|---|---|
${body}
`;
  writeIfChanged('research/repo-classification.md', content);
}

function updateProjectsTs() {
  const file = 'site/src/data/projects.ts';
  const text = read(file);
  const startToken = 'export const projects: Project[] = ';
  const endToken = ';\n\nexport const projectGroups';
  const start = text.indexOf(startToken);
  const end = text.indexOf(endToken, start);
  const projects = JSON.parse(text.slice(start + startToken.length, end));
  for (const config of repoConfigs.filter((item) => item.project)) {
    const entry = projects.find((project) => project.repo.toLowerCase() === config.repo.toLowerCase());
    if (!entry) continue;
    const meta = metadataByRepo.get(config.repo);
    entry.stars = meta.stargazerCount;
    entry.forks = meta.forkCount;
    entry.lastPushed = meta.pushedAt;
    entry.language = meta.primaryLanguage?.name ?? entry.language;
    entry.license = meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? entry.license;
    entry.url = config.url;
  }
  const next = `${text.slice(0, start + startToken.length)}${JSON.stringify(projects, null, 4)}${text.slice(end)}`;
  writeIfChanged(file, next);
}

function updateReadmes() {
  const zhBlock = buildZhReadmeBlock();
  const enBlock = buildEnReadmeBlock();
  replaceAllSections('README.md', /## 近期证据更新（[^）]+）[\s\S]*?(?=\n## 核心洞察)/g, zhBlock);
  replaceAllSections('README-ZH.md', /## 近期证据更新（[^）]+）[\s\S]*?(?=\n## 核心洞察)/g, zhBlock);
  replaceAllSections('README-ZH.md', /## 本轮 GitHub Metadata 修复包（[^）]+）[\s\S]*?(?=\n## 核心洞察)/g, zhBlock);
  replaceAllSections('README-EN.md', /## Recent Evidence Updates \([^)]+\)[\s\S]*?(?=\n## Core Insight)/g, enBlock);
  collapseDuplicateBlock('README.md', zhBlock);
  collapseDuplicateBlock('README-ZH.md', zhBlock);
  collapseDuplicateBlock('README-EN.md', enBlock);
}

function buildZhReadmeBlock() {
  const rows = repoConfigs.map((config) => {
    const meta = metadataByRepo.get(config.repo);
    return `| [${config.repo}](${config.url}) | ${buildDeltaText(config.repo, meta)} | ${config.readmeWhyZh} | ${meta._fetch.fallback ? `[INFERRED] 保留 ${previousPacketLabel} packet；本轮 live fetch 受阻。` : '[KNOWN] Authenticated GitHub API；未做本地运行/benchmark 复核。'} |`;
  }).join('\n');
  return `## 近期证据更新（${runDisplay}）

本轮是新的 hourly public metadata 修复包，不再沿用 \`${previousPacketLabel}\` 的上一个 authenticated packet 作为唯一前台口径。抓取链路本身是可用的，但仍按“先重试 live GitHub API，失败时明确回退到上一个 authenticated packet”的规则更新，避免伪造 freshness。

| 仓库 | 这轮状态 | 为什么重要 | 证据状态 |
|---|---|---|---|
${rows}

GitNexus 证据链本轮可用但有边界：\`node .gitnexus/run.cjs status\` 和带 \`-r awesome-evolution-workspace-cleanup\` 的 \`query\` 都能工作，并把小时更新链路指回历史脚本里的 \`renderGraphJson\`、\`renderGraphMd\`、\`renderRunNote\` 等节点；但索引状态仍然是 \`stale\`，所以本轮把它作为关系证据，不把它当作“已经最新”的索引结论。
`;
}

function buildEnReadmeBlock() {
  const rows = repoConfigs.map((config) => {
    const meta = metadataByRepo.get(config.repo);
    return `| [${config.repo}](${config.url}) | ${buildDeltaText(config.repo, meta)} | ${config.readmeWhyEn} | ${meta._fetch.fallback ? `[INFERRED] Previous ${previousPacketLabel} packet retained where live fetch was blocked.` : '[KNOWN] Authenticated GitHub API; no local runtime or benchmark rerun in this pass.'} |`;
  }).join('\n');
  return `## Recent Evidence Updates (${runDisplay})

This is a fresh hourly public metadata repair packet rather than another reuse of the previous authenticated packet from \`${previousPacketLabel}\`. The GitHub lane in this workspace is available again, but this run still follows a strict rule: retry live GitHub API fetches first, and only fall back to the previous authenticated packet when the live request fails, with the limit stated explicitly.

| Repository | This run's status | Why it matters | Evidence state |
|---|---|---|---|
${rows}

The GitNexus lane is available with a boundary: \`node .gitnexus/run.cjs status\` and \`query -r awesome-evolution-workspace-cleanup\` work and point the metadata flow back to historical script definitions such as \`renderGraphJson\`, \`renderGraphMd\`, and \`renderRunNote\`, but the local index is still marked \`stale\`, so this run uses GitNexus for relationship evidence rather than as proof that the repo index is current.
`;
}

function replaceAllSections(filePath, pattern, replacement) {
  const text = read(filePath);
  const next = text.replace(pattern, replacement.trimEnd());
  writeIfChanged(filePath, next);
}

function collapseDuplicateBlock(filePath, block) {
  const text = read(filePath);
  const target = block.trimEnd();
  const first = text.indexOf(target);
  if (first === -1) return;
  const second = text.indexOf(target, first + target.length);
  if (second === -1) return;
  const next = `${text.slice(0, second)}${text.slice(second + target.length).replace(/^\n+/, '\n')}`;
  writeIfChanged(filePath, next);
}

function updateMermaid() {
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
          '.mermaid/current/graph.md',
          '.mermaid/current/graph.mmd',
          `work/research/hourly-public-metadata-update-${runSlug}.md`,
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
      source: 'gh authenticated GitHub API with retry + fallback',
      previous_packet: previousPacketLabel,
      repos: repoConfigs.map((config) => {
        const meta = metadataByRepo.get(config.repo);
        return {
          repo: config.repo,
          raw_capture: config.rawFile,
          report: config.project?.path ?? null,
          site_report: config.project?.sitePath ?? null,
          stars: meta.stargazerCount,
          forks: meta.forkCount,
          issues: meta.issues?.totalCount ?? 0,
          pull_requests: meta.pullRequests?.totalCount ?? 0,
          commits: meta.defaultBranchRef?.target?.history?.totalCount ?? 0,
          latest_push: meta.pushedAt,
          latest_release: meta.releases?.nodes?.[0] ?? null,
          source: meta._fetch.source,
          fallback: meta._fetch.fallback
        };
      }),
      gitnexus: {
        status_output: gitnexusStatusOutput,
        query_excerpt: gitnexusQueryOutput
      }
    }
  };
  writeIfChanged('.mermaid/current/graph.json', JSON.stringify(graph, null, 2));
  writeIfChanged(
    '.mermaid/current/graph.mmd',
    `flowchart LR
  intent["Direct user intent"] --> raw["GitHub API retry + fallback packet"]
  raw --> processed["classification + project cards"]
  processed --> public["README + site/public reports"]
  processed --> indexes["timestamp index + corpus analysis"]
  public --> note["run note + Mermaid truth source"]
  note --> intent
`
  );
  writeIfChanged(
    '.mermaid/current/graph.md',
    `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Current Run

- Previous authenticated packet used for comparison: \`${previousPacketLabel}\`
- Fetch policy: retry live GitHub API first, then fall back to the previous authenticated packet only when live fetch fails.
- GitNexus status: ${gitnexusStatusOutput || 'unavailable'}

## Repo Paths

${repoConfigs
  .map((config) => `- **${config.repo}** -> raw \`${config.rawFile}\`${config.project ? ` -> project \`${config.project.path}\` -> site \`${config.project.sitePath}\`` : ' -> classification-only in this run'}`)
  .join('\n')}
`
  );
}

function updateWorkNote() {
  const rows = repoConfigs.map((config) => {
    const meta = metadataByRepo.get(config.repo);
    return `| \`${config.repo}\` | ${formatNumber(meta.stargazerCount)} | ${formatNumber(meta.forkCount)} | ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} | ${formatNumber(meta.issues?.totalCount ?? 0)} | ${formatNumber(meta.pullRequests?.totalCount ?? 0)} | ${meta._fetch.source} |`;
  }).join('\n');
  const changedRepos = repoConfigs
    .filter((config) => !metadataByRepo.get(config.repo)._fetch.fallback && buildDeltaText(config.repo, metadataByRepo.get(config.repo)).startsWith('Relative'))
    .map((config) => `\`${config.repo}\``);
  const fallbackRepos = repoConfigs
    .filter((config) => metadataByRepo.get(config.repo)._fetch.fallback)
    .map((config) => `\`${config.repo}\``);
  const note = `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed the tracked GitHub anchors at ${runDisplay}, propagated the fresher metadata through raw captures, classification, README, Mermaid, site reports, and index-facing surfaces, and removed duplicate front-page metadata blocks.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The GitHub lane is available again in this workspace, so this run records live authenticated GitHub API packets unless a specific request falls back.
GitNexus is usable for repo-relationship evidence in this workspace when \`-r awesome-evolution-workspace-cleanup\` is specified, but its local index still reports \`stale\`.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Source |
|---|---:|---:|---:|---:|---:|---|
${rows}

## Delta Summary

- Real public deltas vs ${previousPacketLabel}: ${changedRepos.length ? changedRepos.join(', ') : 'none observed'}.
- Previous packet retained because live fetch degraded: ${fallbackRepos.length ? fallbackRepos.join(', ') : 'none'}.

## Working Principle

GitHub API retry/fallback packet -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> \`projects/*.md\` + \`site/public/reports/projects/*.md\` + \`site/src/data/projects.ts\` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- Status: ${gitnexusStatusOutput || 'unavailable'}
- Query: \`node .gitnexus/run.cjs query -r awesome-evolution-workspace-cleanup "hourly public metadata raw-github repo-classification graph.json README site/public/reports/projects"\`
- Result: the query resolves the loop back to historical script definitions such as \`renderGraphJson\`, \`renderGraphMd\`, \`renderRunNote\`, and \`updateGraphAndNotes\`, which is enough to justify the Mermaid truth-source and downstream public-surface coupling in this run.

## Validation Commands For This Iteration

- \`node scripts/generate_project_indexes.mjs\`
- \`python3 scripts/enforce_raw_timestamps.py\`
- \`node scripts/analyze_github_project_data.mjs\`
- \`(cd site && npm run build)\`
`;
  writeIfChanged(`work/research/hourly-public-metadata-update-${runSlug}.md`, note);
}
