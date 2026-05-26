import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-25T06:13:29+08:00';
const collectedAt = '2026-05-24T22:13:29Z';
const contentDate = '2026-05-25';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-25-0613.md';

const repos = [
  {
    number: 145,
    name: 'Harness Skills',
    repo: 'harness/harness-skills',
    slug: 'harness-skills-cicd-agent-skills',
    rawFile: 'raw-github/harness_harness-skills.md',
    url: 'https://github.com/harness/harness-skills',
    stars: 20,
    forks: '4',
    commits: '72',
    language: 'Shell',
    stack: ['Markdown', 'AGENTS.md', 'Claude Code', 'Codex', 'Harness MCP'],
    license: 'Apache-2.0',
    category: 'CI/CD Agent Skills System',
    finalCategory: '教程/tutorial',
    functionTag: 'tool-module',
    baseTheme: 'skill',
    pattern: 'repo-level agent instructions -> domain SKILL.md modules -> Harness MCP schema validation -> CI/CD creation/debug/governance workflows',
    description: 'Harness Skills 是面向 Claude Code、Codex、Cursor 和 GitHub Copilot 的 CI/CD agent skills 系统，把 Harness MCP、AGENTS.md、CLAUDE.md 与技能目录组合成可复用的交付工作流。',
    evidence: 'web GitHub page observed 72 commits, Apache-2.0 license, Shell primary language, 20 stars and 4 forks; README says the repo is a workflow system with AGENTS.md, CLAUDE.md, Copilot instructions, skills/*/SKILL.md, Harness MCP v2, schema discovery, dependency verification, and create/debug/govern/report modes',
    releaseSignal: '72 commits, Apache-2.0 license, 20 stars and 4 forks, skills/references/templates/scripts folders',
    excerpts: [
      'README describes a workflow system, not just prompts, with repo-level instructions and specialized skills.',
      'OpenAI Codex setup uses AGENTS.md and Harness MCP configuration.',
      'Operating model emphasizes scope, dependency verification, schema discovery, and validation feedback.'
    ],
    tags: ['CI/CD', 'Agent Skills', 'Codex', 'Harness MCP', 'Workflow governance']
  },
  {
    number: 146,
    name: 'OpenHarness',
    repo: 'HKUDS/OpenHarness',
    slug: 'openharness-agent-harness-ohmo',
    rawFile: 'raw-github/hkuds_openharness.md',
    url: 'https://github.com/HKUDS/OpenHarness',
    stars: 13000,
    forks: '2.2k',
    commits: '422',
    language: 'Python',
    stack: ['Python', 'MCP', 'Skills', 'Memory', 'React TUI'],
    license: 'MIT',
    category: 'Open Agent Harness Runtime',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    pattern: 'agent loop -> tools/skills/plugins/permissions/hooks -> memory/tasks/coordinator -> CLI and React TUI surfaces',
    description: 'OpenHarness 是内置个人 Agent Ohmo 的开源 agent harness runtime，把 tool-use、skills、memory、多 Agent coordination、MCP 和安全权限系统组织成轻量基础设施。',
    evidence: 'web GitHub page observed 422 commits, MIT license, 13k stars and 2.2k forks; README says OpenHarness provides tool-use, skills, memory and multi-agent coordination, supports Copilot OAuth backend, and implements a harness architecture with tools, skills, plugins, permissions, hooks, commands, MCP, memory, tasks, coordinator and prompt assembly',
    releaseSignal: '422 commits, MIT license, 13k stars and 2.2k forks, ohmo/src/frontend/docs folders',
    excerpts: [
      'README says OpenHarness delivers core lightweight agent infrastructure: tool-use, skills, memory, and multi-agent coordination.',
      'Harness architecture lists tools, skills, plugins, permissions, hooks, commands, MCP, memory, tasks, coordinator, prompts, config, and UI.',
      'Copilot format uses GitHub OAuth device flow and OpenAI-compatible chat completions under the hood.'
    ],
    tags: ['Agent Harness', 'Skills', 'Memory', 'MCP', 'Multi-agent']
  },
  {
    number: 147,
    name: 'my-codex',
    repo: 'sehoon787/my-codex',
    slug: 'my-codex-agent-harness-pack',
    rawFile: 'raw-github/sehoon787_my-codex.md',
    url: 'https://github.com/sehoon787/my-codex',
    stars: 16,
    forks: '2',
    commits: '205',
    language: 'Shell/Markdown',
    stack: ['Codex CLI', 'Agents', 'Skills', 'MCP', 'Shell'],
    license: 'MIT',
    category: 'Codex Agent Harness Pack',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'skill',
    pattern: 'Codex plugin package -> Boss meta-orchestrator -> agent/skill discovery -> spawn_agent delegation -> verification loop',
    description: 'my-codex 是面向 OpenAI Codex CLI 的 agent harness 包，把 Boss 元编排器、Codex agents、skills、hooks 和 MCP servers 打包成一键安装的 specialist delegation 环境。',
    evidence: 'web GitHub page observed 205 commits, MIT license, 16 stars and 2 forks; README says my-codex is an all-in-one OpenAI Codex CLI harness with 330+ agents ready, Boss auto-discovers agents and skills at runtime, routes tasks through spawn_agent, and includes .codex-plugin, codex-agents, hooks, skills and MCP configuration',
    releaseSignal: '205 commits, MIT license, 16 stars and 2 forks, .codex-plugin/codex-agents/hooks/skills folders',
    excerpts: [
      'README says my-codex is an all-in-one agent harness for OpenAI Codex CLI.',
      'Boss auto-discovers every agent and skill at runtime and routes tasks to specialists via spawn_agent.',
      'The repository exposes .codex-plugin, codex-agents, hooks, skills, signatures, and MCP configuration surfaces.'
    ],
    tags: ['Codex CLI', 'Agent harness', 'Skills', 'MCP', 'Delegation']
  },
  {
    number: 148,
    name: 'SkillRL',
    repo: 'aiming-lab/SkillRL',
    slug: 'skillrl-recursive-skill-rl',
    rawFile: 'raw-github/aiming-lab_skillrl.md',
    url: 'https://github.com/aiming-lab/SkillRL',
    stars: 765,
    forks: '59',
    commits: '21',
    language: 'Python',
    stack: ['Python', 'RL', 'SkillBank', 'ALFWorld', 'WebShop'],
    license: 'MIT',
    category: 'Recursive Skill-Augmented RL',
    finalCategory: '论文代码/paper-code',
    functionTag: 'agent-evolution-infra',
    baseTheme: 'evolution',
    pattern: 'experience trajectories -> skill distillation -> hierarchical SKILLBANK -> validation-failure analysis -> recursive skill/policy co-evolution',
    description: 'SkillRL 是通过自动技能发现连接经验轨迹和策略改进的论文代码，把成功/失败轨迹压缩成层级技能库，并在 RL 中让技能库与 agent policy 递归共进化。',
    evidence: 'web GitHub page observed 21 commits, MIT license, 765 stars and 59 forks; README says SkillRL bridges raw experience and policy improvement through automatic skill discovery, distills trajectories into a hierarchical SKILLBANK, recursively evolves skills from validation failures, reports 10-20% token compression, and released code/model/data artifacts during Feb-May 2026',
    releaseSignal: '21 commits, MIT license, 765 stars and 59 forks, agent_system/memory_data/skill_generation/examples folders',
    excerpts: [
      'README title is SkillRL: Evolving Agents via Recursive Skill-Augmented Reinforcement Learning.',
      'Key features include experience-based skill distillation, hierarchical SKILLBANK, recursive skill evolution, and context efficiency.',
      'News records paper/code/model/data releases from February to May 2026.'
    ],
    tags: ['Skill evolution', 'RL', 'SkillBank', 'ALFWorld', 'WebShop']
  },
  {
    number: 149,
    name: 'HEBBS',
    repo: 'hebbs-ai/hebbs-memory-engine',
    slug: 'hebbs-memory-engine',
    rawFile: 'raw-github/hebbs-ai_hebbs-memory-engine.md',
    url: 'https://github.com/hebbs-ai/hebbs-memory-engine',
    stars: 28,
    forks: '4',
    commits: '389',
    language: 'Rust',
    stack: ['Rust', 'Agent Memory', 'Claude Code Skill', 'OpenClaw Skill', 'CLI'],
    license: 'Apache-2.0 / BSL',
    category: 'Agent Memory Engine',
    finalCategory: '框架/framework',
    functionTag: 'memory-substrate',
    baseTheme: 'memory',
    pattern: 'project files -> portable .hebbs cognition layer -> temporal/causal/analogical recall -> consolidation/decay -> agent skill surface',
    description: 'HEBBS 是面向 AI agents 的 Rust 记忆引擎，把项目旁路的 .hebbs cognition layer、四种召回、原生 consolidation、decay 与 Claude Code/OpenClaw skill surface 组合起来。',
    evidence: 'web GitHub page redirected to hebbs-memory-engine and observed 389 commits, Apache-2.0 plus BSL license files, Rust stack, 28 stars and 4 forks; README says HEBBS is a cognitive memory primitive for AI agents with four recall strategies, native consolidation, automatic decay, portable .hebbs cognition layer, and skill support for Claude Code and OpenClaw',
    releaseSignal: '389 commits, Apache-2.0 and BSL license files, 28 stars and 4 forks, crates/proto/skills/benches/tests folders',
    excerpts: [
      'README calls HEBBS the memory engine for AI agents with four recall strategies, native consolidation and automatic decay.',
      '.hebbs is described as a portable cognition layer that lives next to project files.',
      'README says HEBBS ships as a skill for Claude Code and OpenClaw.'
    ],
    tags: ['Memory substrate', 'Rust', 'Claude Code', 'OpenClaw', 'Recall strategies']
  },
  {
    number: 150,
    name: 'MemSkill',
    repo: 'ViktorAxelsen/MemSkill',
    slug: 'memskill-evolving-memory-skills',
    rawFile: 'raw-github/viktoraxelsen_memskill.md',
    url: 'https://github.com/ViktorAxelsen/MemSkill',
    stars: 484,
    forks: '31',
    commits: '33',
    language: 'Python',
    stack: ['Python', 'Memory Skills', 'ALFWorld', 'LoCoMo', 'LongMemEval'],
    license: 'Apache-2.0',
    category: 'Evolving Memory Skills',
    finalCategory: '论文代码/paper-code',
    functionTag: 'agent-evolution-infra',
    baseTheme: 'evolution',
    pattern: 'long-horizon interaction data -> skill-conditioned memory construction -> hard-case mining -> memory skill refinement/new skill proposals -> reusable skill bank',
    description: 'MemSkill 是学习并进化 long-horizon agent 记忆技能的框架，把记忆操作从静态手写规则变成由任务反馈驱动的 meta-memory skill bank。',
    evidence: 'web GitHub page observed 33 commits, Apache-2.0 license, 484 stars and 31 forks; README says MemSkill learns and evolves memory skills for long-horizon agents, replaces static memory operations with a data-driven loop, mines hard cases to refine or propose skills, and evaluates ALFWorld/LoCoMo/LongMemEval style workloads',
    releaseSignal: '33 commits, Apache-2.0 license, 484 stars and 31 forks, data/docs/prompts/skills/src folders',
    excerpts: [
      'README says MemSkill learns and evolves memory skills for long-horizon agents.',
      'Highlights include skill-conditioned memory construction, hard-case skill evolution, and reusable skill bank.',
      'Training notes describe designer-controlled evolution frequency and max changes per cycle.'
    ],
    tags: ['Memory skills', 'Self-evolving agents', 'ALFWorld', 'LoCoMo', 'LongMemEval']
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
  const lines = [
    '---',
    `repo: ${repo.repo}`,
    `url: ${repo.url}`,
    `content_timestamp: ${contentDate}`,
    'time_slice: 2026-05',
    'timestamp_source: web_observed_github_page',
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
    'This is a raw-style public GitHub page capture recorded by the hourly public metadata update. Shell GitHub API access is blocked in this sandbox, so the freshness level is web-observed rather than API-verified.',
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
  const existingRows = data.rows || [];
  const byRepo = new Map(existingRows.map((row) => [String(row.repo).toLowerCase(), row]));
  for (const repo of repos) {
    byRepo.set(repo.repo.toLowerCase(), {
      repo: repo.repo,
      url: repo.url,
      stars: String(repo.stars),
      prior_category: byRepo.has(repo.repo.toLowerCase()) ? byRepo.get(repo.repo.toLowerCase()).final_category : '-',
      prior_unclassified: byRepo.has(repo.repo.toLowerCase()) ? 'false' : 'true',
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
      lastPushed: '2026-05-25T00:00:00Z',
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
    const target = repo.repo === 'aiming-lab/SkillRL' ? methodGroup : repo.repo === 'HKUDS/OpenHarness' ? benchmarkGroup : harnessGroup;
    if (target && !target.repos.includes(repo.repo)) target.repos.push(repo.repo);
  }
  const header = parsed.source.slice(0, parsed.source.indexOf('export const projects: Project[] = '));
  const content = `${header}export const projects: Project[] = ${JSON.stringify(projects, null, 4)};\n\nexport const projectGroups = ${JSON.stringify(groups, null, 2)};\n`;
  write('site/src/data/projects.ts', content);
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
| Updated by | hourly public metadata update, 2026-05-25 |

## 1. Role in Self Evolve

${repo.description}

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence}. Shell GitHub API access remained blocked by DNS and local \`gh\` auth was invalid in this run, so this card treats the current snapshot as web-observed rather than API-verified.

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
  for (const edge of graph.edges) mmd.push(`  ${nodeName(edge.from)} -->|${edge.type}| ${nodeName(edge.to)}`);
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
    ...graph.edges.map((edge) => `- ${edge.from} --${edge.type}--> ${edge.to}`),
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
    processed.intent.one_sentence = 'Classify raw captures into benchmark, harness, memory, skill, and resource-index roles.';
  }
  graph.current_run_evidence = [
    `Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}`,
    `New or refreshed raw captures: ${repos.map((repo) => repo.rawFile).join(', ')}`,
    'Shell GitHub API remains DNS-blocked; gh token remains invalid.',
    'CodeFlow command availability is checked during validation.',
    'GitNexus local indexing is checked during validation; graph.json remains the Mermaid object graph truth source.',
    'This run promotes raw-only MemSkill into classification/site and adds Harness Skills, OpenHarness, my-codex, SkillRL, and HEBBS to public metadata.'
  ];
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
  renderGraph(graph);
}

function writeRunNote() {
  const lines = [
    '# Hourly Public Metadata Update - 2026-05-25 06:13 +0800',
    '',
    '## One Sentence',
    '',
    'This run adds six web-observed public metadata records for agent skills, agent harnesses, memory substrates, and recursive skill-evolution systems, then promotes them through raw captures, classification, project model cards, public site data, and Mermaid evidence.',
    '',
    '## Three Sentences',
    '',
    'The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public reports, website data, and indexes. New or refreshed raw captures cover `harness/harness-skills`, `HKUDS/OpenHarness`, `sehoon787/my-codex`, `aiming-lab/SkillRL`, `hebbs-ai/hebbs-memory-engine`, and `ViktorAxelsen/MemSkill`. GitHub shell API freshness is not fabricated; public GitHub pages were observed through browser/web access, while shell DNS/auth checks are recorded separately.',
    '',
    '## Added Raw Captures',
    '',
    '| Repo | Layer | Why it matters |',
    '|---|---|---|',
    ...repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.baseTheme} / ${repo.finalCategory} | ${repo.description} |`),
    '',
    '## Working Principle',
    '',
    '1. Browser-observed GitHub page evidence is stored raw under `raw-github/` with timestamps and freshness caveats.',
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

for (const repo of repos) {
  if (!fs.existsSync(path.join(root, repo.rawFile))) writeRaw(repo);
}
upsertClassification();
upsertProjects();
writeReports();
updateGraph();
writeRunNote();

console.log(`updated ${repos.length} repos at ${runAt}`);
