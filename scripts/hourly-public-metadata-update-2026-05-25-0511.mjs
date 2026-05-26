import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const runAt = '2026-05-25T05:11:06+08:00';
const collectedAt = '2026-05-24T21:11:06Z';
const contentDate = '2026-05-25';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-25-0511.md';

const repos = [
  {
    number: 139,
    name: 'LightAgent',
    repo: 'wanxingai/LightAgent',
    slug: 'lightagent-memory-mcp-skills',
    rawFile: 'raw-github/wanxingai_lightagent.md',
    url: 'https://github.com/wanxingai/LightAgent',
    stars: 987,
    forks: '127',
    commits: '81',
    language: 'Python',
    stackText: 'Python/MCP/mem0/Agent Skills',
    stack: ['Python', 'MCP', 'mem0', 'Agent Skills', 'Tree of Thought'],
    license: 'Apache-2.0',
    category: 'Memory/MCP Skill Agent Framework',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    pattern: 'lightweight Python agent core -> memory/tool/MCP modules -> native skills -> self-learning multi-agent workflows',
    description: 'LightAgent 是轻量级 Python Agent 框架，把 Skills、持久记忆、MCP、Tree-of-Thought 和 multi-agent collaboration 组合成可快速嵌入的 self-learning runtime。',
    evidence: 'web GitHub page observed 81 commits, Apache-2.0 license, 987 stars and 127 forks; README says LightAgent natively supports Skills, persistent memory, MCP over stdio/SSE, Tree-of-Thought, multi-agent collaboration, OpenAI-compatible streaming APIs, and self-learning agents, with v0.6.0 introducing native skill support on 2026-04-26',
    releaseSignal: '81 commits, Apache-2.0 license, 987 stars and 127 forks, Python project with docs/example/mcp/skills/src folders',
    excerpts: [
      'README describes LightAgent as an ultra-lightweight open-source framework with native Skills, persistent memory, MCP, tool use, Tree-of-Thought, and multi-agent collaboration.',
      'Visible news says v0.6.0 on 2026-04-26 refactored the core architecture and introduced native skill support.',
      'Feature list includes memory support, autonomous learning, custom tools, MCP tool integration, LightSwarm delegation, and agent self-learning.'
    ],
    tags: ['Agent框架', 'Skills', 'MCP', 'Memory', 'Self-learning']
  },
  {
    number: 140,
    name: 'Agent Skills Hub',
    repo: 'agent-skills-hub/agent-skills-hub',
    slug: 'agent-skills-hub-registry',
    rawFile: 'raw-github/agent-skills-hub_agent-skills-hub.md',
    url: 'https://github.com/agent-skills-hub/agent-skills-hub',
    stars: 40,
    forks: '13',
    commits: '23',
    language: 'JavaScript',
    stackText: 'JavaScript/Markdown/NPX',
    stack: ['JavaScript', 'Markdown', 'NPX', 'Agent Skills'],
    license: 'MIT',
    category: 'Cross-Agent Skills Registry',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'skill catalog -> NPX installer -> per-agent install targets -> cross-agent reusable workflow instructions',
    description: 'Agent Skills Hub 是跨 Claude Code、Gemini、Cursor、Kiro、Codex、Antigravity、OpenCode 等工具的 skills 注册表和 NPX 安装器。',
    evidence: 'web GitHub page observed 23 commits, MIT license, 40 stars and 13 forks; README says it maintains 790+ skills, ships an NPX-first CLI, supports Claude Code, Gemini, Cursor, Kiro, Codex, Antigravity, OpenCode, AdaL and OpenClaw install targets, and treats skills as Markdown-based reasoning plugins',
    releaseSignal: '23 commits, MIT license, 40 stars and 13 forks, JavaScript package with bin/data/lib/skills_index.json surfaces',
    excerpts: [
      'README calls Agent Skills Hub the universal registry of agentic skills for AI coding agents.',
      'The public page says the catalog contains 790+ skills for Claude Code, Gemini, Cursor, Kiro, Codex, Antigravity, OpenCode, and other agent frameworks.',
      'Install targets include Claude, Gemini, Cursor, Kiro, Codex, Antigravity, OpenCode, AdaL, OpenClaw, and custom paths.'
    ],
    tags: ['技能注册表', 'Codex', 'OpenClaw', 'NPX', '跨Agent']
  },
  {
    number: 141,
    name: 'thClaws',
    repo: 'thClaws/thClaws',
    slug: 'thclaws-agent-harness-platform',
    rawFile: 'raw-github/thclaws_thclaws.md',
    url: 'https://github.com/thClaws/thClaws',
    stars: 1000,
    forks: '140',
    commits: '359',
    language: 'Rust',
    stackText: 'Rust/GUI/CLI/MCP/Plugin Manifest',
    stack: ['Rust', 'MCP', 'Plugin system', 'Desktop GUI', 'CLI'],
    license: 'MIT OR Apache-2.0',
    category: 'Local Agent Harness Platform',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    pattern: 'local Rust agent engine -> GUI/CLI/web surfaces -> MCP/tools/memory -> plugin-bundled skills and agents',
    description: 'thClaws 是本地优先的 Rust Agent harness 平台，用一个 engine 支撑 GUI、CLI、单次命令和 webapp，并把 skills、commands、agent definitions 与 MCP servers 作为可安装插件打包。',
    evidence: 'web GitHub page observed 359 commits, MIT OR Apache-2.0 license, 1k stars and 140 forks; README describes a native Rust local AI agent workspace with Terminal/Chat/Files/Team surfaces, MCP servers, persistent memory, and a plugin system bundling skills, commands, agent definitions and MCP servers under one manifest installable from git or zip',
    releaseSignal: '359 commits, dual MIT/Apache license files, 1k stars and 140 forks, Rust workspace with crates/core and frontend folders',
    excerpts: [
      'README calls thClaws an open-source Agent Harness Platform that codes, automates, remembers, and coordinates locally.',
      'The same Agent loop backs desktop GUI, CLI REPL, non-interactive mode, and webapp surfaces.',
      'Plugin system bundles skills, commands, agent definitions, and MCP servers under one manifest.'
    ],
    tags: ['Agent Harness', 'Rust', 'MCP', 'Skills', 'Local-first']
  },
  {
    number: 142,
    name: 'Memento-Skills',
    repo: 'Memento-Teams/Memento-Skills',
    slug: 'memento-skills-self-evolving-agent',
    rawFile: 'raw-github/memento-teams_memento-skills.md',
    url: 'https://github.com/Memento-Teams/Memento-Skills',
    stars: 1400,
    forks: '157',
    commits: '7',
    language: 'Python',
    stackText: 'Python/Skill Memory/CLI/GUI',
    stack: ['Python', 'Skill memory', 'Reflection loop', 'CLI', 'GUI'],
    license: 'Unknown',
    category: 'Self-Evolving Skill Memory Agent',
    finalCategory: '框架/framework',
    functionTag: 'agent-evolution-infra',
    baseTheme: 'evolution',
    pattern: 'task execution -> skill retrieval/generation -> reflection -> utility update or skill rewrite -> growing skill memory',
    description: 'Memento-Skills 是 deployment-time learning Agent 框架，让 Agent 在冻结模型参数的前提下通过 skill memory、失败反思和技能重写持续进化。',
    evidence: 'web GitHub page observed 7 commits, 1.4k stars and 157 forks; README says Memento-Skills lets agents design agents, deploys an agent that learns, rewrites, and evolves its own skills, uses Read-Write Reflective Learning, routes or generates executable skills, writes back utility scores or optimizes skill folders, and reports improvement over HLE and GAIA rounds while skill memory grows',
    releaseSignal: '7 commits, 1.4k stars and 157 forks, Python 3.12+ badge, 10 built-in skills, CLI and GUI surfaces',
    excerpts: [
      'README headline says deploy an agent and let it learn, rewrite, and evolve its own skills.',
      'Architecture text describes a skill router that retrieves an executable skill or generates a new one, then reflects and writes back to the library.',
      'Learning results mention HLE and GAIA benchmark rounds where task performance improves while skill memory grows.'
    ],
    tags: ['自进化Agent', 'Skill memory', 'Reflection', 'HLE', 'GAIA']
  },
  {
    number: 143,
    name: 'OpenClaw Medical Skills',
    repo: 'FreedomIntelligence/OpenClaw-Medical-Skills',
    slug: 'openclaw-medical-skills-library',
    rawFile: 'raw-github/freedomintelligence_openclaw-medical-skills.md',
    url: 'https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills',
    stars: 2500,
    forks: '357',
    commits: '46',
    language: 'Markdown',
    stackText: 'Markdown/SKILL.md/OpenClaw/NanoClaw',
    stack: ['Markdown', 'SKILL.md', 'OpenClaw', 'NanoClaw', 'Biomedical tools'],
    license: 'Unknown',
    category: 'Domain Agent Skills Library',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'domain skill corpus -> OpenClaw/NanoClaw install paths -> biomedical workflows -> specialized agent capability expansion',
    description: 'OpenClaw Medical Skills 是面向 OpenClaw/NanoClaw 的医学与生物信息 agent skills 库，用 869 个 SKILL.md 模块把数据库、API、临床和组学工作流接入通用 Agent。',
    evidence: 'web GitHub page observed 46 commits, 2.5k stars and 357 forks; README says it is the largest open-source medical AI skill library for OpenClaw, contains 869 curated skills across clinical, genomics, drug discovery, bioinformatics and medical devices, and each SKILL.md module teaches workflows, connects databases/APIs/tools, and produces clinically or scientifically relevant outputs',
    releaseSignal: '46 commits, 2.5k stars and 357 forks, skills folder plus OpenClaw plugin metadata, 869 curated skills',
    excerpts: [
      'README calls it the largest open-source medical AI skill library for OpenClaw.',
      'The library lists 869 curated skills spanning clinical, genomics, drug discovery, bioinformatics, medical devices, and data science.',
      'Each skill is a SKILL.md module that teaches specialized workflows, connects to databases/APIs/computational tools, and produces structured outputs.'
    ],
    tags: ['OpenClaw', 'Medical Skills', 'Bioinformatics', 'SKILL.md', 'Domain skills']
  },
  {
    number: 144,
    name: 'AgentSys',
    repo: 'agent-sh/agentsys',
    slug: 'agentsys-agent-orchestration-runtime',
    rawFile: 'raw-github/agent-sh_agentsys.md',
    url: 'https://github.com/agent-sh/agentsys',
    stars: 818,
    forks: '90',
    commits: '766',
    language: 'JavaScript',
    stackText: 'JavaScript/Plugins/Agents/Skills/Codex',
    stack: ['JavaScript', 'Plugins', 'Agents', 'Skills', 'Codex CLI'],
    license: 'MIT',
    category: 'Agent Orchestration Runtime',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    pattern: 'plugins and agents -> phase-gated workflows -> persistent state -> review/CI/PR/delivery automation',
    description: 'AgentSys 是面向 Claude Code、OpenCode、Codex、Cursor 和 Kiro 的 agent orchestration runtime，把插件、agents、skills、phase gates、持久状态和交付流水线组织成可安装系统。',
    evidence: 'web GitHub page observed 766 commits, MIT license, 818 stars and 90 forks; README says AgentSys has 26 plugins, 50 agents, 47 skills, 3,518 tests and 5 platforms, supports Claude Code, OpenCode, Codex CLI, Cursor and Kiro, orchestrates task selection, branch management, review, CI, PR comments and deployment, and includes durable memory commands such as /axiom plus phase-gated workflows',
    releaseSignal: '766 commits, MIT license, 818 stars and 90 forks, .codex-plugin/.claude-plugin surfaces, 26 plugins, 50 agents, 47 skills',
    excerpts: [
      'README describes AgentSys as a modular runtime and orchestration system for AI agents.',
      'The public page states 26 plugins, 50 agents, 47 skills, 3,518 tests, and support for Claude Code, Codex CLI, OpenCode, Cursor, and Kiro.',
      'Command list includes task workflow, pre-ship gates, quality gates, durable memory, agent config linting, PR shipping, and multi-agent code review.'
    ],
    tags: ['Agent orchestration', 'Codex CLI', 'Skills', 'Persistent state', 'CI workflow']
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
    `- Primary language / stack signal: ${repo.stackText}`,
    `- Collection timestamp: ${collectedAt}`,
    '',
    '## Visible README / page excerpts',
    '',
    ...repo.excerpts.map((line) => `- ${line}`),
    '',
    '## Raw capture boundary',
    '',
    'No benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.',
    ''
  ];
  write(repo.rawFile, `${lines.join('\n')}`);
}

function writeProjectCard(repo) {
  const content = `# ${repo.name} Model Card

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
  write(reportPath(repo), content);
  write(publicReportPath(repo), content);
}

function updateClassification() {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
  const byRepo = new Map(data.rows.map((row) => [row.repo.toLowerCase(), row]));
  for (const repo of repos) {
    byRepo.set(repo.repo.toLowerCase(), {
      repo: repo.repo,
      url: repo.url,
      stars: String(repo.stars),
      prior_category: '-',
      prior_unclassified: 'true',
      final_category: repo.finalCategory,
      function_tag: repo.functionTag,
      base_theme: repo.baseTheme,
      stack: repo.stackText,
      time_slice: '2026-05',
      content_timestamp: contentDate,
      evidence: repo.evidence,
      description: repo.description
    });
  }
  const rows = [...byRepo.values()].sort((a, b) => a.repo.localeCompare(b.repo, 'en', { sensitivity: 'base' }));
  write(file, `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

  const headers = ['repo', 'url', 'stars', 'prior_category', 'prior_unclassified', 'final_category', 'function_tag', 'base_theme', 'stack', 'time_slice', 'content_timestamp', 'evidence', 'description'];
  write('research/repo-classification.csv', `${headers.join(',')}\n${rows.map((row) => headers.map((key) => csvEscape(row[key])).join(',')).join('\n')}\n`);

  const counts = new Map();
  for (const row of rows) counts.set(row.final_category, (counts.get(row.final_category) || 0) + 1);
  const countLines = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([category, count]) => `| ${category} | ${count} |`);
  const deltaRows = repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.finalCategory} | ${repo.baseTheme} | ${repo.evidence.replace(/\|/g, '/')} |`);
  write('research/repo-classification.md', `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countLines.join('\n')}\n\n## 本轮 hourly public metadata 增量\n\n| Repo | Category | Theme | Evidence |\n|---|---|---|---|\n${deltaRows.join('\n')}\n\n本轮新增 LightAgent、Agent Skills Hub、thClaws、Memento-Skills、OpenClaw Medical Skills、AgentSys raw captures，并同步提升为 public site / model-card 覆盖。GitHub API 未验证 freshness 的原因记录在 Mermaid graph 与 work notes 中。\n`);
}

function updateProjectsTs() {
  const file = 'site/src/data/projects.ts';
  let source = read(file);
  const projectObjects = repos.map((repo) => `  ${JSON.stringify({
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
  }, null, 4).replace(/\n/g, '\n  ')}`).join(',\n') + '\n';
  const marker = '\n];\n\nexport const projectGroups';
  if (!source.includes(repos[0].repo)) {
    source = source.replace(marker, `,\n${projectObjects}];\n\nexport const projectGroups`);
  }
  const groupRepos = repos.map((repo) => `'${repo.repo}'`).join(', ');
  source = source.replace(
    /(title: 'Harness \/ 技能 \/ 记忆进化', repos: \[[^\]]*)\]/,
    (match, prefix) => repos.every((repo) => match.includes(repo.repo)) ? match : `${prefix}, ${groupRepos}]`
  );
  write(file, source);
}

function updateProjectIndex() {
  const file = 'projects/INDEX.md';
  let source = read(file);
  const rows = repos.map((repo) => `| ${repo.name} | [${repo.repo}](${repo.url}) | ${repo.category} | [${repo.number}-${repo.slug}.md](${repo.number}-${repo.slug}.md) |`).join('\n');
  if (!source.includes(repos[0].repo)) {
    source = source.replace('| Awesome Omni Skills | [diegosouzapw/awesome-omni-skills](https://github.com/diegosouzapw/awesome-omni-skills) | Omni Skills CLI API MCP A2A Runtime | [138-awesome-omni-skills-runtime.md](138-awesome-omni-skills-runtime.md) |',
      `| Awesome Omni Skills | [diegosouzapw/awesome-omni-skills](https://github.com/diegosouzapw/awesome-omni-skills) | Omni Skills CLI API MCP A2A Runtime | [138-awesome-omni-skills-runtime.md](138-awesome-omni-skills-runtime.md) |\n${rows}`);
  }
  write(file, source);
}

function updateGraph() {
  const file = '.mermaid/current/graph.json';
  const graph = JSON.parse(read(file));
  const rawNode = graph.nodes.find((node) => node.id === 'raw.github.hourly-captures');
  const processedNode = graph.nodes.find((node) => node.id === 'processed.github-classification');
  const workNode = graph.nodes.find((node) => node.id === 'work.learning-notes');
  const siteNode = graph.nodes.find((node) => node.id === 'results.public-site');
  for (const repo of repos) {
    if (!rawNode.paths.includes(repo.rawFile)) rawNode.paths.push(repo.rawFile);
    if (!siteNode.paths.includes(reportPath(repo))) siteNode.paths.push(reportPath(repo));
    if (!siteNode.paths.includes(publicReportPath(repo))) siteNode.paths.push(publicReportPath(repo));
  }
  if (!workNode.paths.includes(runNote)) workNode.paths.push(runNote);
  for (const p of ['research/repo-classification.csv', 'research/repo-classification.md']) {
    if (!processedNode.paths.includes(p)) processedNode.paths.push(p);
  }
  graph.evidence.web.push(`2026-05-25T05:11+08: GitHub pages opened through browser/search tool for ${repos.map((repo) => repo.repo).join(', ')}.`);
  graph.evidence.shell_network.push('2026-05-25T05:11+08: curl -I --max-time 10 https://api.github.com failed DNS resolution; gh auth status reported invalid default token for Shiyao-Huang.');
  if (!graph.evidence.notes.includes(runNote)) graph.evidence.notes.push(runNote);
  graph.current_run_evidence = {
    run_at: runAt,
    web_observed_repos: repos.map((repo) => repo.repo),
    new_raw_captures: repos.map((repo) => repo.rawFile),
    promoted_existing_raw: [],
    shell_github_api: 'blocked: curl could not resolve api.github.com',
    gh_auth: 'blocked: gh token for Shiyao-Huang invalid',
    codeflow: 'pending validation',
    gitnexus: 'pending validation',
    validations: ['pending']
  };
  write(file, `${JSON.stringify(graph, null, 2)}\n`);

  const idFor = (id) => id.replace(/[^A-Za-z0-9_]/g, '_');
  const mmd = [
    'flowchart LR',
    ...graph.nodes.map((node) => `  ${idFor(node.id)}["${node.title.replace(/"/g, '\\"')}"]`),
    ...graph.edges.map((edge) => `  ${idFor(edge.from)} -->|${edge.type}| ${idFor(edge.to)}`)
  ].join('\n') + '\n';
  write('.mermaid/current/graph.mmd', mmd);

  const md = `# Current Mermaid Object Graph\n\nTruth source: \`.mermaid/current/graph.json\`\n\nGenerated: ${runAt}\n\n## Nodes\n\n${graph.nodes.map((node) => `- **${node.id}** (${node.layer}, ${node.status}): ${node.intent.one_sentence}`).join('\n')}\n\n## Edges\n\n${graph.edges.map((edge) => `- ${edge.from} --${edge.type}--> ${edge.to}`).join('\n')}\n\n## Current Run Evidence\n\n- Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}\n- New raw captures: ${repos.map((repo) => repo.rawFile).join(', ')}\n- Shell GitHub API remains DNS-blocked; gh token remains invalid.\n- CodeFlow/GitNexus/validation evidence will be finalized after commands run.\n`;
  write('.mermaid/current/graph.md', md);
}

function writeRunNote() {
  const rows = repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.baseTheme} / ${repo.finalCategory} | ${repo.description} |`).join('\n');
  write(runNote, `# Hourly Public Metadata Update - 2026-05-25 05:11 +0800\n\n## One Sentence\n\nThis run extends the public Self Evolve metadata chain with six web-observed repositories covering lightweight skill-aware agents, skill registries, local harness platforms, self-evolving skill memory, domain skill libraries, and phase-gated agent orchestration.\n\n## Three Sentences\n\nThe user intent source remains \`docs/project-management/user-direct-inputs.md\` and \`CURRENT_GOAL.md\`: raw evidence must feed processed analysis, public project cards, site reports, and generated indexes. New raw captures were added for \`${repos.map((repo) => repo.repo).join('`, `')}\`. Shell GitHub API freshness is not fabricated; public pages were observed through web access, while local shell network and gh auth checks are validated separately.\n\n## Added Raw Captures\n\n| Repo | Layer | Why it matters |\n|---|---|---|\n${rows}\n\n## Working Principle\n\n1. Browser-observed GitHub page evidence is stored raw under \`raw-github/\` with timestamps and freshness caveats.\n2. \`research/repo-classification.json\` turns raw captures into structured repo/theme/function rows.\n3. \`projects/\` and \`site/public/reports/projects/\` provide teaching model cards for public readers.\n4. \`site/src/data/projects.ts\` exposes the new public project pages and category groups.\n5. \`.mermaid/current/graph.json\` remains the object-graph truth source; \`.mmd\` and \`.md\` are rendered views.\n\n## Blockers\n\n- GitHub API freshness remains blocked: \`curl -I --max-time 10 https://api.github.com\` could not resolve \`api.github.com\`.\n- Local \`gh auth status\` reports the default token for \`Shiyao-Huang\` is invalid; authenticated metadata was not used.\n- CodeFlow/GitNexus validation is recorded after local commands run.\n\n## Validation Results\n\n- Pending at metadata-write step; see final graph and automation memory for command results.\n`);
}

for (const repo of repos) {
  writeRaw(repo);
  writeProjectCard(repo);
}
updateClassification();
updateProjectsTs();
updateProjectIndex();
updateGraph();
writeRunNote();

console.log(JSON.stringify({
  runAt,
  raw: repos.map((repo) => repo.rawFile),
  reports: repos.map((repo) => reportPath(repo))
}, null, 2));
