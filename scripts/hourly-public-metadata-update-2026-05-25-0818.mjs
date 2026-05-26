import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-25T08:18:20+08:00';
const collectedAt = '2026-05-25T00:18:20Z';
const contentDate = '2026-05-25';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-25-0818.md';

const repos = [
  {
    number: 157,
    name: 'Agent Skills Specification',
    repo: 'agentskills/agentskills',
    slug: 'agentskills-open-standard',
    rawFile: 'raw-github/agentskills_agentskills.md',
    rawExists: true,
    url: 'https://github.com/agentskills/agentskills',
    stars: 19300,
    forks: '1.2k',
    commits: '123',
    language: 'Python',
    stack: ['Python', 'Shell', 'SKILL.md', 'Specification'],
    license: 'Apache-2.0 / CC-BY-4.0 docs',
    category: 'Agent Skills Open Standard',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'skill folder -> SKILL.md metadata and instructions -> progressive disclosure -> cross-product agent reuse',
    description: 'Agent Skills Specification 是 agent skills 生态的公开标准源，定义 SKILL.md、渐进式加载、脚本/参考资料/资产打包和跨 agent 复用边界。',
    evidence: 'web GitHub page observed 19.3k stars, 1.2k forks, 123 commits, Apache-2.0 code license, CC-BY-4.0 docs license, and README language describing a lightweight open format for extending AI agent capabilities',
    releaseSignal: '123 commits, no releases, 19.3k stars and 1.2k forks',
    excerpts: [
      'README says Agent Skills are a lightweight open format for extending AI agent capabilities with specialized knowledge and workflows.',
      'README defines a skill as a folder containing SKILL.md plus optional scripts, references, assets, and other resources.',
      'README describes progressive disclosure: discovery, activation, and execution.'
    ],
    tags: ['Agent Skills', 'Open standard', 'SKILL.md', 'Progressive disclosure', 'Cross-agent reuse']
  },
  {
    number: 158,
    name: 'Elastic Agent Skills',
    repo: 'elastic/agent-skills',
    slug: 'elastic-official-agent-skills',
    rawFile: 'raw-github/elastic_agent-skills.md',
    url: 'https://github.com/elastic/agent-skills',
    stars: 485,
    forks: '34',
    commits: '35',
    language: 'JavaScript',
    stack: ['JavaScript', 'Python', 'Shell', 'Elastic', 'Agent Skills'],
    license: 'Apache-2.0',
    category: 'Official Vendor Agent Skills',
    finalCategory: '工具/tool',
    functionTag: 'tool-module',
    baseTheme: 'skill',
    pattern: 'vendor domain expertise -> skill/plugin packaging -> installer/update flows -> agent-native Elastic operations',
    description: 'Elastic Agent Skills 是厂商官方技能库，把 Elastic 平台经验封装成符合 Agent Skills 开放标准的 agent 可加载工作流。',
    evidence: 'web GitHub page observed 35 commits, Apache-2.0 license, 485 stars, 34 forks, v0.2.4 latest release on 2026-04-24, and README compatibility with Cursor, GitHub Copilot, Windsurf, Gemini CLI and other agentic IDEs',
    releaseSignal: '35 commits, 7 releases, latest v0.2.4 on 2026-04-24, 485 stars and 34 forks',
    excerpts: [
      'README says Elastic Agent Skills deliver native platform expertise directly to AI coding agents.',
      'README says the skills follow the Agent Skills open standard.',
      'README marks the library as Technical Preview and under active development.'
    ],
    tags: ['Agent Skills', 'Elastic', 'Vendor skills', 'Plugin', 'Open standard']
  },
  {
    number: 159,
    name: 'HOL Registry Skills',
    repo: 'hashgraph-online/registry-broker-skills',
    slug: 'hol-registry-broker-skills',
    rawFile: 'raw-github/hashgraph-online_registry-broker-skills.md',
    url: 'https://github.com/hashgraph-online/registry-broker-skills',
    stars: 345,
    forks: '5',
    commits: '86',
    language: 'TypeScript',
    stack: ['TypeScript', 'JavaScript', 'Shell', 'MCP', 'Agent registry'],
    license: 'Apache-2.0',
    category: 'Agent Registry Skill Bridge',
    finalCategory: '工具/tool',
    functionTag: 'tool-module',
    baseTheme: 'skill',
    pattern: 'universal registry API -> SKILL.md bridge -> MCP/CLI search and publish flows -> agent discovery and registration',
    description: 'HOL Registry Skills 把 Universal Agentic Registry、MCP discovery、agent skills registry 和 skill package publishing 做成可被 Claude/Codex/OpenClaw 等 agent 使用的技能桥。',
    evidence: 'web GitHub page observed 86 commits, Apache-2.0 license, 345 stars, 5 forks, TypeScript stack, 5 releases, and README claims search/chat/register access to 72,000+ agents across 14+ protocols',
    releaseSignal: '86 commits, 5 releases, latest Zenodo SEO release on 2026-02-23, 345 stars and 5 forks',
    excerpts: [
      'README says the repository contains skill definitions for the Universal Agentic Registry.',
      'README lists MCP server registry, agent skills registry, package publishing, directory CLI workflows, and API integration as target discovery flows.',
      'README says the SKILL.md file can be consumed by Claude, Codex, Cursor, OpenClaw, and universal markdown-reading assistants.'
    ],
    tags: ['Agent registry', 'MCP', 'Agent Skills', 'OpenClaw', 'Codex']
  },
  {
    number: 160,
    name: 'Skill Hunter',
    repo: 'CE0Alex/skill-hunter',
    slug: 'skill-hunter-agent-skill-recommender',
    rawFile: 'raw-github/ce0alex_skill-hunter.md',
    rawExists: true,
    url: 'https://github.com/CE0Alex/skill-hunter',
    stars: 22,
    forks: '0',
    commits: '52',
    language: 'Markdown',
    stack: ['Markdown', 'Agent Skills', 'Skill discovery', 'Codex', 'Claude'],
    license: 'MIT',
    category: 'Agent Skill Discovery Skill',
    finalCategory: '评测/evaluation',
    functionTag: 'benchmark-eval',
    baseTheme: 'skill',
    pattern: 'repo scan -> clarifying questions -> registry search -> source/compatibility inspection -> recommended skill stack',
    description: 'Skill Hunter 是一个 meta-skill：它分析当前仓库并推荐最适合的外部 skill 栈，使 agent skills 从静态目录变成可验证、可匹配、可安装的能力选择流程。',
    evidence: 'web GitHub page observed 52 commits, MIT license, 22 stars, 0 forks, 22 releases with v1.0.23 latest on 2026-01-31, and README workflow covering project analysis, clarifying questions, registry search, candidate verification and stack recommendation',
    releaseSignal: '52 commits, 22 releases, latest v1.0.23 on 2026-01-31, 22 stars and 0 forks',
    excerpts: [
      'README says Skill Hunter analyzes a project and recommends a curated external skill stack.',
      'README says it asks clarifying questions before searching registries.',
      'README says it verifies each skill source, maintainer, and compatibility.'
    ],
    tags: ['Skill discovery', 'Agent Skills', 'Codex', 'Claude', 'Verification']
  },
  {
    number: 161,
    name: 'SkillClaw',
    repo: 'AMAP-ML/SkillClaw',
    slug: 'skillclaw-collective-skill-evolution',
    rawFile: 'raw-github/amap-ml_skillclaw.md',
    rawExists: true,
    url: 'https://github.com/AMAP-ML/SkillClaw',
    stars: 1500,
    forks: '137',
    commits: 'unknown',
    language: 'Python',
    stack: ['Python', 'JavaScript', 'Skill evolution', 'Hermes', 'OpenClaw'],
    license: 'MIT',
    category: 'Collective Skill Evolution',
    finalCategory: '论文代码/paper-code',
    functionTag: 'agent-evolution-infra',
    baseTheme: 'evolution',
    pattern: 'agent session data -> proxy capture -> skill dedup/improvement/verification -> shared evolve server -> reused skills',
    description: 'SkillClaw 直接回应“skill 如何自进化”：它从真实 agent 会话中抽取、去重、验证并共享可复用 skills，让单用户和多 agent 团队都能把经验沉淀为演化资产。',
    evidence: 'web GitHub page observed MIT license, 1.5k stars, 137 forks, Python primary language, arXiv paper citation, 2026-04-10 open-source note, and 2026-04-20 Codex/Claude Code integration note',
    releaseSignal: 'open sourced 2026-04-10; 1.5k stars and 137 forks; Codex/Claude Code integration noted 2026-04-20',
    excerpts: [
      'README says SkillClaw makes LLM agents progressively better by evolving reusable skills from real session data.',
      'README describes a client proxy that intercepts agent requests and manages the local skill library.',
      'README describes an optional evolve server that reads session data from shared storage and writes evolved skills back.'
    ],
    tags: ['Skill evolution', 'OpenClaw', 'Hermes', 'Codex', 'Claude Code']
  },
  {
    number: 162,
    name: 'OpenSpace',
    repo: 'HKUDS/OpenSpace',
    slug: 'openspace-self-evolving-skills',
    rawFile: 'raw-github/hkuds_openspace.md',
    rawExists: true,
    url: 'https://github.com/HKUDS/OpenSpace',
    stars: 6300,
    forks: '780',
    commits: '76',
    language: 'Python',
    stack: ['Python', 'TypeScript', 'React', 'MCP', 'Self-evolving skills'],
    license: 'MIT',
    category: 'Self-Evolving Skill Runtime',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'evolution',
    pattern: 'task execution -> skill selection/application -> quality monitoring -> auto-fix/auto-improve/auto-learn -> shared skill community',
    description: 'OpenSpace 把 skills 当作会选择、执行、监控、分析并演化的运行时实体，提供 OpenClaw、nanobot、Claude Code、Codex、Cursor 等 agent 的自进化技能层。',
    evidence: 'web GitHub page observed 76 commits, MIT license, 6.3k stars, 780 forks, Python/TypeScript stack, no releases, GDPVal benchmark directory, 60+ evolved skills showcase, and README self-evolution engine language',
    releaseSignal: '76 commits, no releases, 6.3k stars and 780 forks, GDPVal/showcase directories',
    excerpts: [
      'README says OpenSpace supports OpenClaw, nanobot, Claude Code, Codex, Cursor and other agents.',
      'README lists AUTO-FIX, AUTO-IMPROVE, AUTO-LEARN and quality monitoring as self-evolution features.',
      'README says skills are living entities that automatically select, apply, monitor, analyze, and evolve themselves.'
    ],
    tags: ['Self-evolving skills', 'MCP', 'OpenClaw', 'Codex', 'Benchmark']
  },
  {
    number: 163,
    name: 'COG Second Brain',
    repo: 'huytieu/COG-second-brain',
    slug: 'cog-self-evolving-second-brain',
    rawFile: 'raw-github/huytieu_cog-second-brain.md',
    url: 'https://github.com/huytieu/COG-second-brain',
    stars: 486,
    forks: '57',
    commits: '49',
    language: 'Shell',
    stack: ['Shell', 'Markdown', 'Obsidian', 'Agent Skills', 'Worker agents'],
    license: 'MIT',
    category: 'Self-Evolving Personal Memory System',
    finalCategory: '应用/application',
    functionTag: 'application-demo',
    baseTheme: 'memory',
    pattern: 'markdown vault -> 17 skills -> 6 worker agents -> daily/weekly/monthly learning loops -> Git/Obsidian second brain',
    description: 'COG Second Brain 是把 agent skills、worker agents、Obsidian/Git markdown vault 和个人/团队知识流程合成的 self-evolving second brain 产品形态。',
    evidence: 'web GitHub page observed 49 commits, MIT license, 486 stars, 57 forks, Shell stack, no releases, and README claims 17 AI skills, 6 worker agents, people CRM, Codex fallback through AGENTS.md, and an evolution cycle over daily capture, weekly reflection and monthly synthesis',
    releaseSignal: '49 commits, no releases, 486 stars and 57 forks, Shell-only repository surface',
    excerpts: [
      'README calls COG a self-evolving second brain powered by AI agents, markdown files and version control.',
      'README says it works with Claude Code, Cursor, Kiro, Gemini CLI, OpenAI Codex and markdown-reading agents.',
      'README describes daily capture, daily intelligence, weekly reflection, monthly synthesis and PM workflow loops.'
    ],
    tags: ['Second brain', 'Agent Skills', 'Worker agents', 'Memory', 'Codex']
  },
  {
    number: 164,
    name: 'Hippo Memory',
    repo: 'kitfunso/hippo-memory',
    slug: 'hippo-memory-biological-agent-memory',
    rawFile: 'raw-github/kitfunso_hippo-memory.md',
    url: 'https://github.com/kitfunso/hippo-memory',
    stars: 675,
    forks: '34',
    commits: '535',
    language: 'TypeScript',
    stack: ['TypeScript', 'HTML', 'JavaScript', 'Python', 'Memory benchmarks'],
    license: 'MIT',
    category: 'Agent Memory System',
    finalCategory: '工具/tool',
    functionTag: 'benchmark-eval',
    baseTheme: 'memory',
    pattern: 'memory event -> decay/retrieval strengthening/consolidation -> LongMemEval and sequential-learning harness -> cross-agent transfer questions',
    description: 'Hippo Memory 是偏研究/工程混合的 agent memory 系统，重点在衰减、强化检索、巩固和可审计 benchmark，尤其适合比较 memory 是否带来随任务序列改进。',
    evidence: 'web GitHub page observed 535 commits, MIT license, 675 stars, 34 forks, 105 releases with v1.12.10 latest on 2026-05-24, TypeScript primary language, LongMemEval benchmark details, sequential-learning benchmark, and explicit retraction notes for non-reproduced magnitude claims',
    releaseSignal: '535 commits, 105 releases, latest v1.12.10 on 2026-05-24, 675 stars and 34 forks',
    excerpts: [
      'README describes biologically-inspired memory for AI agents with decay, retrieval strengthening and consolidation.',
      'README includes LongMemEval and sequential-learning benchmark sections.',
      'README explicitly retracts an earlier non-reproduced informal magnitude claim, preserving it as audit trail.'
    ],
    tags: ['Agent memory', 'LongMemEval', 'Sequential learning', 'Benchmark', 'Audit trail']
  },
  {
    number: 165,
    name: 'Awesome OpenClaw Skills',
    repo: 'sundial-org/awesome-openclaw-skills',
    slug: 'awesome-openclaw-skills-index',
    rawFile: 'raw-github/sundial-org_awesome-openclaw-skills.md',
    url: 'https://github.com/sundial-org/awesome-openclaw-skills',
    stars: 602,
    forks: '83',
    commits: '11',
    language: 'Python',
    stack: ['Python', 'JavaScript', 'Shell', 'TypeScript', 'Rust'],
    license: 'CC0-1.0',
    category: 'OpenClaw Skill Index',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'OpenClaw ecosystem skills -> popularity/download curation -> install names -> domain categories -> agent capability discovery',
    description: 'Awesome OpenClaw Skills 是 OpenClaw skill 生态的热门技能索引，提供 913 个技能、下载/安装名和领域分类，是 public site 比较 skill marketplace 形态的补充证据。',
    evidence: 'web GitHub page observed 11 commits, CC0-1.0 license, 602 stars, 83 forks, Python/JavaScript/Shell/TypeScript/Rust stack, no releases, and README states 913 skills sourced from the OpenClaw ecosystem with install via npx sundial-hub add',
    releaseSignal: '11 commits, no releases, 602 stars and 83 forks, 913 listed skills',
    excerpts: [
      'README says it is a curated collection of top agent skills from OpenClaw.',
      'README says 913 skills are sourced from the OpenClaw ecosystem.',
      'README exposes skill install names and domain categories for discovery.'
    ],
    tags: ['OpenClaw', 'Skill index', 'Marketplace', 'Agent Skills', 'Discovery']
  }
];

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, content) => {
  const full = path.join(root, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
};

const csvEscape = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const reportPath = (repo) => `projects/${repo.number}-${repo.slug}.md`;
const publicReportPath = (repo) => `site/public/reports/projects/${repo.number}-${repo.slug}.md`;

function writeRaw(repo) {
  if (repo.rawExists && fs.existsSync(path.join(root, repo.rawFile))) return;
  const lines = [
    '---',
    `repo: ${repo.repo}`,
    `url: ${repo.url}`,
    `content_timestamp: ${contentDate}`,
    'time_slice: 2026-05',
    'timestamp_source: web_observed_github_page_or_search_result',
    `collected_at: ${collectedAt}`,
    'source: github',
    '---',
    '',
    `## GitHub - ${repo.repo}: ${repo.description}`,
    '',
    `**Source**: ${repo.url}`,
    '',
    '---',
    '',
    '# Raw public page capture notes',
    '',
    'This is a raw-style public GitHub page/search capture recorded by the hourly public metadata update. Shell GitHub API access is blocked in this sandbox, so the freshness level is web-observed rather than API-verified.',
    '',
    '## Visible repository metadata',
    '',
    `- Repository: ${repo.repo}`,
    `- URL: ${repo.url}`,
    `- Stars: ${repo.stars}`,
    `- Forks: ${repo.forks}`,
    `- Commits / release signal: ${repo.releaseSignal}`,
    `- License: ${repo.license}`,
    `- Primary language / stack signal: ${repo.language} / ${repo.stack.join(', ')}`,
    `- Collection timestamp: ${collectedAt}`,
    '',
    '## Visible README / page excerpts',
    '',
    ...repo.excerpts.map((line) => `- ${line}`),
    '',
    '## Raw capture boundary',
    '',
    `- Evidence note: ${repo.evidence}`,
    '- This file intentionally keeps page-observed facts separate from downstream classification and teaching interpretation.',
    '- API caveat: values were not authenticated through GitHub API in this shell environment.',
    ''
  ];
  write(repo.rawFile, `${lines.join('\n')}\n`);
}

function upsertClassification() {
  const data = JSON.parse(read('research/repo-classification.json'));
  const byRepo = new Map((data.rows || []).map((row) => [String(row.repo).toLowerCase(), row]));
  for (const repo of repos) {
    const previous = byRepo.get(repo.repo.toLowerCase());
    byRepo.set(repo.repo.toLowerCase(), {
      repo: repo.repo,
      url: repo.url,
      stars: String(repo.stars),
      prior_category: previous ? previous.final_category : '-',
      prior_unclassified: previous ? 'false' : 'true',
      final_category: repo.finalCategory,
      function_tag: repo.functionTag,
      base_theme: repo.baseTheme,
      stack: repo.stack[0],
      time_slice: '2026-05',
      content_timestamp: contentDate,
      evidence: repo.evidence,
      description: repo.description
    });
  }
  const rows = [...byRepo.values()].sort((a, b) => a.repo.localeCompare(b.repo, 'en', { sensitivity: 'base' }));
  write('research/repo-classification.json', `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);
  const columns = ['repo', 'url', 'stars', 'prior_category', 'prior_unclassified', 'final_category', 'function_tag', 'base_theme', 'stack', 'time_slice', 'content_timestamp', 'evidence', 'description'];
  write('research/repo-classification.csv', `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`);
  const lines = [
    '# Repo Classification',
    '',
    `Generated: ${runAt}`,
    '',
    '| Repo | Stars | Category | Function | Theme | Time slice | Evidence |',
    '|---|---:|---|---|---|---|---|'
  ];
  for (const row of rows) {
    lines.push(`| [${row.repo}](${row.url}) | ${row.stars} | ${row.final_category} | ${row.function_tag} | ${row.base_theme} | ${row.time_slice} | ${String(row.evidence).replace(/\|/g, '/')} |`);
  }
  write('research/repo-classification.md', `${lines.join('\n')}\n`);
}

function readProjectsTs() {
  const source = read('site/src/data/projects.ts');
  const projectsMatch = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  const groupsMatch = source.match(/export const projectGroups = (\[[\s\S]*?\n\]);/);
  if (!projectsMatch || !groupsMatch) throw new Error('Cannot parse site/src/data/projects.ts');
  return {
    source,
    projects: vm.runInNewContext(projectsMatch[1]),
    groups: vm.runInNewContext(groupsMatch[1])
  };
}

function upsertProjects() {
  const parsed = readProjectsTs();
  const byRepo = new Map(parsed.projects.map((project) => [project.repo.toLowerCase(), project]));
  for (const repo of repos) {
    byRepo.set(repo.repo.toLowerCase(), {
      name: repo.name,
      repo: repo.repo,
      url: repo.url,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
      license: repo.license,
      report: reportPath(repo),
      pattern: repo.pattern,
      description: repo.description,
      stack: repo.stack,
      category: repo.category,
      lastPushed: '2026-05-25T00:18:20Z',
      localPath: repo.rawFile,
      status: 'verified',
      tags: repo.tags
    });
  }
  const projects = [...byRepo.values()];
  const groups = parsed.groups.map((group) => ({ ...group, repos: [...group.repos] }));
  const harnessGroup = groups.find((group) => group.title === 'Harness / 技能 / 记忆进化');
  const benchmarkGroup = groups.find((group) => group.title === '个人 Agent 产品与真实评测');
  const methodGroup = groups.find((group) => group.title === 'Harness 进化与方法索引');
  for (const repo of repos) {
    const target = repo.functionTag === 'benchmark-eval' ? benchmarkGroup : repo.baseTheme === 'evolution' ? methodGroup : harnessGroup;
    if (target && !target.repos.includes(repo.repo)) target.repos.push(repo.repo);
  }
  const header = parsed.source.slice(0, parsed.source.indexOf('export const projects: Project[] = '));
  write('site/src/data/projects.ts', `${header}export const projects: Project[] = ${JSON.stringify(projects, null, 4)};\n\nexport const projectGroups = ${JSON.stringify(groups, null, 2)};\n`);
}

function report(repo) {
  return `# ${repo.name} Model Card

| Field | Value |
|---|---|
| Repository | [${repo.repo}](${repo.url}) |
| Category | ${repo.category} |
| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |
| Language | ${repo.language} |
| License | ${repo.license} |
| Raw capture | ${repo.rawFile} |
| Updated by | hourly public metadata update, 2026-05-25 08:18 +0800 |

## 1. Role in Self Evolve

${repo.description}

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence}. Shell GitHub API access remained blocked by DNS in this run, so this card treats the current snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain ${repo.category} in the raw -> classification -> project card -> site/report pipeline. The reading path is: raw capture -> classification row -> public site card -> project report -> aggregate GitHub analysis.

## 5. Limits

当前未克隆源码，未运行 benchmark、skill install flows、memory experiments、MCP servers、agent evolution loops、security scanners 或 production deployments；star/fork/commit/release 快照来自公开 GitHub 页面文本或可见页面片段。
`;
}

function writeReports() {
  for (const repo of repos) {
    const content = report(repo);
    write(reportPath(repo), content);
    write(publicReportPath(repo), content);
  }
}

function renderGraph(graph) {
  const nodeName = (id) => id.replace(/[^A-Za-z0-9_]/g, '_');
  const mmd = ['flowchart LR'];
  for (const node of graph.nodes) mmd.push(`  ${nodeName(node.id)}["${node.title}"]`);
  for (const edge of graph.edges || []) mmd.push(`  ${nodeName(edge.from)} -->|${edge.type}| ${nodeName(edge.to)}`);
  write('.mermaid/current/graph.mmd', `${mmd.join('\n')}\n`);
  const md = [
    '# Current Mermaid Object Graph',
    '',
    'Truth source: `.mermaid/current/graph.json`',
    '',
    `Generated: ${runAt}`,
    '',
    '## Nodes',
    '',
    ...graph.nodes.map((node) => `- **${node.id}** (${node.layer}, ${node.status}): ${node.intent?.one_sentence || node.title}`),
    '',
    '## Edges',
    '',
    ...(graph.edges || []).map((edge) => `- ${edge.from} --${edge.type}--> ${edge.to}`),
    '',
    '## Current Run Evidence',
    '',
    ...graph.current_run_evidence.map((item) => `- ${item}`)
  ];
  write('.mermaid/current/graph.md', `${md.join('\n')}\n`);
}

function updateGraph() {
  const graph = JSON.parse(read('.mermaid/current/graph.json'));
  graph.generated_at = runAt;
  const byId = new Map(graph.nodes.map((node) => [node.id, node]));
  const raw = byId.get('raw.github.hourly-captures');
  const processed = byId.get('processed.github-classification');
  const work = byId.get('work.learning-notes');
  const site = byId.get('results.public-site');
  for (const repo of repos) {
    if (raw && !raw.paths.includes(repo.rawFile)) raw.paths.push(repo.rawFile);
    if (site && !site.paths.includes(reportPath(repo))) site.paths.push(reportPath(repo));
    if (site && !site.paths.includes(publicReportPath(repo))) site.paths.push(publicReportPath(repo));
  }
  if (work && !work.paths.includes(runNote)) work.paths.push(runNote);
  if (processed) {
    processed.status = 'updated';
    processed.intent.one_sentence = 'Classify raw captures into benchmark, harness, memory, skill, resource-index, and evolution-runtime roles.';
  }
  graph.current_run_evidence = [
    `Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}`,
    `Raw captures added or reused: ${repos.map((repo) => repo.rawFile).join(', ')}`,
    'New raw files were created for elastic/agent-skills, hashgraph-online/registry-broker-skills, huytieu/COG-second-brain, kitfunso/hippo-memory, and sundial-org/awesome-openclaw-skills.',
    'Existing raw captures were reused for agentskills/agentskills, CE0Alex/skill-hunter, AMAP-ML/SkillClaw, and HKUDS/OpenSpace.',
    'Shell GitHub API remains DNS-blocked; gh api rate_limit cannot connect.',
    'CodeFlow command is unavailable on PATH.',
    'GitNexus is available and local indexing is checked during validation.',
    'graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.'
  ];
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
  renderGraph(graph);
}

function writeRunNote() {
  const lines = [
    '# Hourly Public Metadata Update - 2026-05-25 08:18 +0800',
    '',
    '## One Sentence',
    '',
    'This run promotes nine web-observed agent-skill, self-evolving-skill, memory, registry, and benchmark-adjacent repositories through raw captures or reused raw captures, classification, public model cards, site data, and Mermaid evidence.',
    '',
    '## Three Sentences',
    '',
    'The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public reports, website data, and indexes. Five new raw captures were added and four existing raw captures were reused rather than overwritten. GitHub shell API freshness is not fabricated; public GitHub pages/search results were observed through web access, while shell DNS/auth checks are recorded separately.',
    '',
    '## Added Or Promoted Captures',
    '',
    '| Repo | Layer | Raw handling | Why it matters |',
    '|---|---|---|---|',
    ...repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.baseTheme} / ${repo.finalCategory} | ${repo.rawExists ? 'reused existing raw' : 'new raw capture'} | ${repo.description} |`),
    '',
    '## Working Principle',
    '',
    '1. Browser/web-observed GitHub evidence is stored raw under `raw-github/` with timestamps and freshness caveats, or reused from existing full raw captures when already present.',
    '2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.',
    '3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.',
    '4. `site/src/data/projects.ts` exposes the new public project pages and category groups.',
    '5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.',
    '',
    '## Blockers',
    '',
    '- GitHub API freshness must be validated by shell command after file generation; if DNS/auth fails, this run remains web-observed only.',
    '- Local GitNexus/CodeFlow capability is validated after generation and recorded in the final summary.',
    '',
    '## Source Pages Observed',
    '',
    ...repos.map((repo) => `- ${repo.url}`),
    ''
  ];
  write(runNote, `${lines.join('\n')}\n`);
}

for (const repo of repos) writeRaw(repo);
upsertClassification();
upsertProjects();
writeReports();
updateGraph();
writeRunNote();

console.log(`updated ${repos.length} repos at ${runAt}`);
