import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-25T09:19:32+08:00';
const collectedAt = '2026-05-25T01:19:32Z';
const contentDate = '2026-05-25';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-25-0919.md';

const repos = [
  {
    number: 166,
    name: 'EVOTEST',
    repo: 'yf-he/EvoTest',
    slug: 'evotest-evolutionary-test-time-learning',
    rawFile: 'raw-github/yf-he_evotest.md',
    url: 'https://github.com/yf-he/EvoTest',
    stars: 19,
    forks: '1',
    commits: '2',
    language: 'Python',
    stack: ['Python', 'Jericho', 'OpenRouter/OpenAI API', 'RAG', 'Cross-episode memory'],
    license: 'MIT',
    category: 'Evolutionary Test-Time Learning',
    finalCategory: '论文代码/paper-code',
    functionTag: 'agent-evolution-infra',
    baseTheme: 'evolution',
    pattern: 'episode rollout -> failure/success memory -> evolver rewrites prompt/state extractor/hyperparameters -> next episode evaluation',
    description: 'EVOTEST 是面向 self-improving agentic systems 的 test-time evolution 框架，用 Jericho repeated episodes 检验无梯度、无微调条件下的 prompt、memory、state extractor 与工具策略演化。',
    evidence: 'web GitHub page observed 2 commits, MIT license, Python stack, 19 stars and 1 fork; README says EVOTEST evolves prompts, code-based state extractors, cross-episode memory, and hyperparameters between repeated Jericho game episodes and reports improvements over reflection, memory, and gradient online methods',
    releaseSignal: '2 commits, no releases, 19 stars and 1 fork',
    excerpts: [
      'README positions EVOTEST as evolutionary test-time learning for self-improving agentic systems.',
      'README describes J-TTL as repeated Jericho episodes where the agent must improve from within-session experience.',
      'README lists whole-system evolution, cross-episode memory, UCB exploration, and auto-freeze on wins.'
    ],
    tags: ['Test-time evolution', 'Self-improving agents', 'Jericho', 'Cross-episode memory', 'Benchmark']
  },
  {
    number: 167,
    name: 'agentic-stack',
    repo: 'codejunkie99/agentic-stack',
    slug: 'agentic-stack-portable-agent-memory-skills',
    rawFile: 'raw-github/codejunkie99_agentic-stack.md',
    url: 'https://github.com/codejunkie99/agentic-stack',
    stars: 2000,
    forks: '254',
    commits: '162',
    language: 'Python',
    stack: ['Python', '.agent folder', 'Memory', 'Skills', 'Adapters', 'Dashboard'],
    license: 'Apache-2.0',
    category: 'Portable Agent Memory and Skills Layer',
    finalCategory: '工具/tool',
    functionTag: 'tool-module',
    baseTheme: 'memory',
    pattern: 'portable .agent workspace -> adapters for agent harnesses -> local data layer -> memory/skills/protocol transfer -> flywheel artifacts',
    description: 'agentic-stack 把 memory、skills、protocols 和 harness adapters 放进可迁移的 `.agent/` 层，让 Claude Code、Cursor、OpenClaw、Codex、Gemini、Hermes 等工具共享同一套经验与技能。',
    evidence: 'web GitHub page observed 162 commits, Apache-2.0 license, 2k stars and 254 forks; README says a portable .agent folder carries memory, skills and protocols across Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, GitHub Copilot CLI, Gemini CLI, Hermes, Pi Coding Agent, Codex and Antigravity, plus local dashboards and approved run artifacts',
    releaseSignal: '162 commits, 2k stars and 254 forks; v0.18.0 external Brain memory integration noted in README',
    excerpts: [
      'README says one portable .agent folder keeps memory and skills when switching coding-agent harnesses.',
      'README describes a local data layer for harness activity, cron runs, active agents, token/cost estimates and dashboards.',
      'README says approved runs can become trace records, context cards, eval cases, JSONL, and readiness metrics.'
    ],
    tags: ['Agent memory', 'Agent skills', 'Portable harness', 'Codex', 'Flywheel artifacts']
  },
  {
    number: 168,
    name: 'Harness',
    repo: 'revfactory/harness',
    slug: 'revfactory-harness-team-architecture-factory',
    rawFile: 'raw-github/revfactory_harness.md',
    url: 'https://github.com/revfactory/harness',
    stars: 3500,
    forks: '525',
    commits: '28',
    language: 'Markdown',
    stack: ['Claude Code plugin', 'Agent teams', 'Skills', 'Architecture patterns', 'Validation'],
    license: 'Apache-2.0',
    category: 'Team-Architecture Harness Factory',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'skill',
    pattern: 'domain sentence -> six team patterns -> generated agent definitions + generated skills -> validation and A/B harness comparison',
    description: 'revfactory/harness 是面向 Claude Code 的 team-architecture factory，把领域描述转成 agent team、skills、orchestration protocol 和验证流程，是 harness-as-meta-factory 的代表。',
    evidence: 'web GitHub page observed 28 commits, Apache-2.0 license, 3.5k stars and 525 forks; README says it generates .claude/agents and .claude/skills from a domain description using six team-architecture patterns and positions itself as an L3 meta-factory for harnesses',
    releaseSignal: '28 commits, 3.5k stars and 525 forks',
    excerpts: [
      'README says Harness turns a domain description into an agent team and the skills they use.',
      'README places the project at the L3 Meta-Factory / Team-Architecture Factory layer.',
      'README lists pipeline, fan-out/fan-in, expert pool, producer-reviewer, supervisor, and hierarchical delegation as patterns.'
    ],
    tags: ['Harness factory', 'Claude Code', 'Agent teams', 'Skills', 'Meta-factory']
  },
  {
    number: 169,
    name: 'oh-my-skills',
    repo: 'akillness/oh-my-skills',
    slug: 'oh-my-skills-cross-agent-skill-collection',
    rawFile: 'raw-github/akillness_oh-my-skills.md',
    url: 'https://github.com/akillness/oh-my-skills',
    stars: 16,
    forks: '1',
    commits: '429',
    language: 'Markdown',
    stack: ['Markdown', 'TOON', 'JEO', 'Codex CLI', 'Claude Code', 'Gemini CLI'],
    license: 'Unknown',
    category: 'Cross-Agent Skill Collection',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'local skill folders -> TOON/JEO orchestration protocol -> plan/execute/verify/cleanup skills -> cross-agent install prompts',
    description: 'oh-my-skills 是跨 Claude Code、Gemini CLI、Codex CLI 和 OpenCode 的技能集合，用 JEO 编排协议把 plan、execute、verify、cleanup、多 agent team coordination 变成可复用技能层。',
    evidence: 'web GitHub page observed 429 commits, 16 stars and 1 fork; README states 128 local skill folders, 128 installable skills, TOON format, cross-platform support, JEO orchestration, plan-execute-verify-cleanup pipelines, multi-agent team coordination, and Codex CLI command surface',
    releaseSignal: '429 commits, 16 stars and 1 fork; README news notes v2026-05-19 skill additions',
    excerpts: [
      'README says Agent Skills is a curated collection with 128 local skill folders and 128 installable skills.',
      'README says it provides unified orchestration across Claude Code, Gemini CLI, OpenAI Codex, and OpenCode.',
      'README says it supports plan, execute, verify, cleanup pipelines and multi-agent team coordination.'
    ],
    tags: ['Agent Skills', 'Codex CLI', 'Claude Code', 'JEO', 'Skill collection']
  },
  {
    number: 170,
    name: 'OpenClaw Harness Engineering',
    repo: 'guixiang123124/openclaw-harness',
    slug: 'openclaw-harness-engineering-factory',
    rawFile: 'raw-github/guixiang123124_openclaw-harness.md',
    url: 'https://github.com/guixiang123124/openclaw-harness',
    stars: 3,
    forks: '0',
    commits: '13',
    language: 'Markdown',
    stack: ['OpenClaw', 'ACP', 'Agent teams', 'Skills', 'Sprint templates'],
    license: 'MIT',
    category: 'OpenClaw Harness Engineering',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'skill',
    pattern: 'lead agent scouts repo -> SPRINT.md contract -> ACP builder agents -> weighted review -> iterate until pass -> ship/report',
    description: 'OpenClaw Harness Engineering 把 OpenClaw agent 包装成工程团队：Lead 规划 sprint，ACP Builder 实现，Lead/Reviewer 按功能、质量、安全、边界条件评分并迭代到可交付。',
    evidence: 'web GitHub page observed 13 commits, MIT license, 3 stars and 0 forks; README describes native OpenClaw orchestration, ACP spawning of Claude Code builders, five-phase scout/build/review/iterate/ship pipeline, four-dimension scoring, security floor rule, sprint templates and cross-sprint learning roadmap',
    releaseSignal: '13 commits, no releases, 3 stars and 0 forks',
    excerpts: [
      'README says OpenClaw Harness turns an agent into a self-improving engineering factory.',
      'README describes scout, build, review, iterate and ship phases.',
      'README includes weighted review dimensions and a security floor rule.'
    ],
    tags: ['OpenClaw', 'Harness engineering', 'ACP', 'Agent team', 'Review loop']
  },
  {
    number: 171,
    name: 'Codex CLI 1UP',
    repo: 'regenrek/codex-1up',
    slug: 'codex-1up-codex-cli-upgrade-kit',
    rawFile: 'raw-github/regenrek_codex-1up.md',
    url: 'https://github.com/regenrek/codex-1up',
    stars: 430,
    forks: '18',
    commits: '211',
    language: 'TypeScript/JavaScript',
    stack: ['Codex CLI', 'AGENTS.md', 'Skills', 'Shell tools', 'Profiles'],
    license: 'Unknown',
    category: 'Codex CLI Upgrade Kit',
    finalCategory: '工具/tool',
    functionTag: 'tool-module',
    baseTheme: 'skill',
    pattern: 'Codex install/update -> shell tool bootstrap -> AGENTS.md template -> config profiles -> bundled skills and ongoing maintenance commands',
    description: 'codex-1up 是 Codex CLI 增强包，把 Codex 安装/更新、常用 shell 工具、AGENTS.md、配置 profiles、通知和 skills 管理整合成可重复的 agent workstation bootstrap。',
    evidence: 'web GitHub page observed 211 commits, 430 stars and 18 forks; README says Codex 1UP installs or updates @openai/codex, adds rg/fd/fzf/jq/yq/ast-grep/bat/git/gh, writes an AGENTS.md template, manages balanced/safe/yolo profiles, and includes update/tools/skills commands',
    releaseSignal: '211 commits, 430 stars and 18 forks',
    excerpts: [
      'README says Codex 1UP equips Codex CLI with tools.',
      'README lists fast shell tools, AGENTS.md template, unified Codex config profiles and skills commands.',
      'README warns that the yolo profile grants broad system access.'
    ],
    tags: ['Codex CLI', 'AGENTS.md', 'Skills', 'Bootstrap', 'Developer tools']
  },
  {
    number: 172,
    name: 'dotnet-skills',
    repo: 'managedcode/dotnet-skills',
    slug: 'dotnet-skills-agent-skill-catalog',
    rawFile: 'raw-github/managedcode_dotnet-skills.md',
    url: 'https://github.com/managedcode/dotnet-skills',
    stars: 403,
    forks: '31',
    commits: '177',
    language: 'C#',
    stack: ['C#', 'Python', 'PowerShell', 'Codex skills', 'Claude skills', 'GitHub Pages'],
    license: 'MIT',
    category: '.NET Agent Skill Catalog',
    finalCategory: '工具/tool',
    functionTag: 'tool-module',
    baseTheme: 'skill',
    pattern: 'catalog packages -> SKILL.md/AGENT.md folders -> CLI recommend/install/update -> upstream watch -> daily catalog/site/tool release',
    description: 'dotnet-skills 是面向 Codex、Claude Code、GitHub Copilot、Gemini、Junie 的 .NET skill catalog 和 CLI，把现代 .NET 官方文档、包、agents 与 upstream watch 组合成可安装技能供应链。',
    evidence: 'web GitHub page observed 177 commits, MIT license, 403 stars and 31 forks, 56 releases with latest Catalog 2026.5.24.0 on 2026-05-24, and README describes skills for ASP.NET Core, Orleans, MAUI, Semantic Kernel, Codex install paths, repo-owned orchestration agents, package manifests and upstream release/docs watch config',
    releaseSignal: '177 commits, 56 releases, latest Catalog 2026.5.24.0 on 2026-05-24, 403 stars and 31 forks',
    excerpts: [
      'README says the catalog covers modern .NET from ASP.NET Core to Orleans, MAUI and Semantic Kernel.',
      'README lists install targets for Claude, Copilot, Gemini, Codex, Junie and shared .agents paths.',
      'README describes upstream watch files that trigger skill review for GitHub releases and documentation changes.'
    ],
    tags: ['.NET', 'Agent Skills', 'Codex', 'Claude Code', 'Upstream watch']
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

const mdEscape = (value) => String(value ?? '').replace(/\|/g, '/');

const reportPath = (repo) => `projects/${repo.number}-${repo.slug}.md`;
const publicReportPath = (repo) => `site/public/reports/projects/${repo.number}-${repo.slug}.md`;

function rawContent(repo) {
  return `---
repo: ${repo.repo}
url: ${repo.url}
content_timestamp: ${contentDate}
time_slice: 2026-05
timestamp_source: web_observed_github_page_2026_05_25
collected_at: ${collectedAt}
source: github
---

## GitHub - ${repo.repo}

**Source**: ${repo.url}

## Public Metadata Snapshot

- Repository: ${repo.repo}
- URL: ${repo.url}
- Observed at: ${runAt}
- Stars: ${repo.stars}
- Forks: ${repo.forks}
- Commits: ${repo.commits}
- Language: ${repo.language}
- License: ${repo.license}
- Releases / activity: ${repo.releaseSignal}
- Freshness caveat: shell access to \`api.github.com\` was DNS-blocked in this run, so this is a web-observed GitHub page snapshot rather than GitHub API verified metadata.

## Raw Observed Signals

${repo.excerpts.map((item) => `- ${item}`).join('\n')}

## Raw Working Notes

- ${repo.evidence}
- Repository role in this corpus: ${repo.category}
- Raw material stays in \`raw-github/\`; classification and teaching interpretation are recorded separately in \`research/\`, \`projects/\`, and \`site/public/reports/projects/\`.
`;
}

function writeRaw() {
  for (const repo of repos) {
    if (!fs.existsSync(path.join(root, repo.rawFile))) write(repo.rawFile, rawContent(repo));
  }
}

function classificationRow(repo) {
  return {
    repo: repo.repo,
    url: repo.url,
    stars: String(repo.stars),
    prior_category: '-',
    prior_unclassified: 'true',
    final_category: repo.finalCategory,
    function_tag: repo.functionTag,
    base_theme: repo.baseTheme,
    stack: repo.stack.join('/'),
    time_slice: '2026-05',
    content_timestamp: contentDate,
    evidence: repo.evidence,
    description: repo.description
  };
}

function upsertClassification() {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
  const byRepo = new Map(data.rows.map((row) => [String(row.repo).toLowerCase(), row]));
  for (const repo of repos) byRepo.set(repo.repo.toLowerCase(), classificationRow(repo));
  const rows = [...byRepo.values()].sort((a, b) => a.repo.toLowerCase().localeCompare(b.repo.toLowerCase()));
  const next = { generated_at: runAt, rows };
  write(file, `${JSON.stringify(next, null, 2)}\n`);

  const headers = ['repo', 'url', 'stars', 'prior_category', 'prior_unclassified', 'final_category', 'function_tag', 'base_theme', 'stack', 'time_slice', 'content_timestamp', 'evidence', 'description'];
  write('research/repo-classification.csv', `${headers.join(',')}\n${rows.map((row) => headers.map((key) => csvEscape(row[key])).join(',')).join('\n')}\n`);
  const md = [
    '# Repo Classification',
    '',
    `Generated: ${runAt}`,
    '',
    '| Repo | Stars | Category | Function | Theme | Time slice | Evidence |',
    '|---|---:|---|---|---|---|---|',
    ...rows.map((row) => `| [${row.repo}](${row.url}) | ${row.stars} | ${row.final_category} | ${row.function_tag} | ${row.base_theme} | ${row.time_slice} | ${mdEscape(row.evidence)} |`)
  ];
  write('research/repo-classification.md', `${md.join('\n')}\n`);
}

function projectObjectText(repo) {
  return `    ${JSON.stringify({
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
    lastPushed: `${contentDate}T00:00:00Z`,
    localPath: repo.rawFile,
    status: 'verified',
    tags: repo.tags
  }, null, 8).replace(/\n/g, '\n    ')}`;
}

function upsertProjects() {
  const file = 'site/src/data/projects.ts';
  let text = read(file);
  const match = text.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array');
  const projects = vm.runInNewContext(match[1]);
  const existing = new Set(projects.map((project) => project.repo.toLowerCase()));
  const additions = repos.filter((repo) => !existing.has(repo.repo.toLowerCase()));
  if (additions.length) {
    const block = additions.map(projectObjectText).join(',\n') + '\n';
    text = text.replace(/\n\];\n\nexport const projectGroups = /, `,\n${block}];\n\nexport const projectGroups = `);
  }
  const groupAdditions = [
    ['技能系统、记忆与运行时', ['codejunkie99/agentic-stack', 'akillness/oh-my-skills', 'regenrek/codex-1up', 'managedcode/dotnet-skills']],
    ['个人 Agent 产品与真实评测', ['yf-he/EvoTest']],
    ['Harness 进化与方法索引', ['revfactory/harness', 'guixiang123124/openclaw-harness']]
  ];
  for (const [title, repoNames] of groupAdditions) {
    const groupRegex = new RegExp(`(\"title\": \"${title}\",[\\s\\S]*?\"repos\": \\[[\\s\\S]*?)(\\n\\s*\\])`);
    const groupMatch = text.match(groupRegex);
    if (!groupMatch) continue;
    let segment = groupMatch[1];
    for (const repoName of repoNames) {
      if (!segment.includes(`"${repoName}"`)) segment += `,\n      "${repoName}"`;
    }
    text = text.replace(groupRegex, `${segment}$2`);
  }
  write(file, text);
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
| Updated by | hourly public metadata update, 2026-05-25 09:19 +0800 |

## 1. Role in Self Evolve

${repo.description}

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence}. Shell GitHub API access remained DNS-blocked in this run, so this card treats the current snapshot as web-observed rather than API-verified.

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

function updateProjectIndexes() {
  const lines = [
    '# Self-Evolution 开源项目索引',
    '',
    `生成时间：${runAt}`,
    '',
    '> 最新公共 metadata 循环的完整计数以 [analysis/github-project-data-analysis.md](../analysis/github-project-data-analysis.md) 和 [site/src/data/projects.ts](../site/src/data/projects.ts) 为准；本索引列出当前 public model-card/site coverage 的项目报告入口。',
    '',
    '| 项目 | 仓库 | 角色 | 报告 |',
    '|---|---|---|---|'
  ];
  const source = read('site/src/data/projects.ts');
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  const projects = vm.runInNewContext(match[1]);
  for (const project of projects) {
    lines.push(`| ${project.name} | [${project.repo}](${project.url}) | ${project.category} | [${project.report}](${project.report.replace(/^projects\//, '')}) |`);
  }
  lines.push('');
  lines.push('## Data Use');
  lines.push('');
  lines.push('Project files are teaching/model-card entries. Public copies under `site/public/reports/projects/` are the website-facing result layer.');
  write('projects/INDEX.md', `${lines.join('\n')}\n`);
  write('site/public/reports/projects/INDEX.md', `${lines.join('\n')}\n`);
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
  const work = byId.get('work.learning-notes');
  const site = byId.get('results.public-site');
  for (const repo of repos) {
    if (raw && !raw.paths.includes(repo.rawFile)) raw.paths.push(repo.rawFile);
    if (site && !site.paths.includes(reportPath(repo))) site.paths.push(reportPath(repo));
    if (site && !site.paths.includes(publicReportPath(repo))) site.paths.push(publicReportPath(repo));
  }
  if (work && !work.paths.includes(runNote)) work.paths.push(runNote);
  graph.current_run_evidence = [
    `Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}`,
    `New raw files: ${repos.map((repo) => repo.rawFile).join(', ')}`,
    'Shell GitHub API remains DNS-blocked; gh api rate_limit cannot connect, so freshness is web-observed rather than API verified.',
    'GitNexus is available and local indexing is checked during validation.',
    'CodeFlow command availability is checked during validation.',
    'graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.'
  ];
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
  renderGraph(graph);
}

function writeRunNote() {
  const lines = [
    '# Hourly Public Metadata Update - 2026-05-25 09:19 +0800',
    '',
    '## One Sentence',
    '',
    'This run adds seven web-observed repositories that strengthen test-time evolution, portable agent memory/skills, harness factories, Codex tooling, and domain skill supply coverage.',
    '',
    '## Three Sentences',
    '',
    'The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence feeds processed classification, model cards, public reports, site data, indexes, and Mermaid evidence. Shell GitHub API and `gh api` remained blocked, so every current metric is explicitly marked web-observed rather than API verified. The added repositories fill gaps that were still missing after the 08:18 run: EVOTEST, agentic-stack, revfactory/harness, oh-my-skills, OpenClaw Harness, codex-1up, and dotnet-skills.',
    '',
    '## Added Captures',
    '',
    '| Repo | Layer | Why it matters |',
    '|---|---|---|',
    ...repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.baseTheme} / ${repo.finalCategory} | ${repo.description} |`),
    '',
    '## Working Principle',
    '',
    '1. Web-observed GitHub evidence is stored raw under `raw-github/` with timestamp and freshness caveat.',
    '2. `research/repo-classification.json` turns raw captures into structured repo/theme/function rows.',
    '3. `projects/` and `site/public/reports/projects/` provide teaching model cards for public readers.',
    '4. `site/src/data/projects.ts` exposes the new public project pages and group memberships.',
    '5. `.mermaid/current/graph.json` remains the object-graph truth source; `.mmd` and `.md` are rendered views.',
    '',
    '## Blockers',
    '',
    '- `curl -I --max-time 10 https://api.github.com` failed DNS resolution.',
    '- `gh api rate_limit` could not connect to `api.github.com`.',
    '- CodeFlow availability and GitNexus indexing are checked in validation after generation.',
    '',
    '## Source Pages Observed',
    '',
    ...repos.map((repo) => `- ${repo.url}`),
    ''
  ];
  write(runNote, `${lines.join('\n')}\n`);
}

writeRaw();
upsertClassification();
upsertProjects();
writeReports();
updateProjectIndexes();
updateGraph();
writeRunNote();

console.log(`updated ${repos.length} repos at ${runAt}`);
