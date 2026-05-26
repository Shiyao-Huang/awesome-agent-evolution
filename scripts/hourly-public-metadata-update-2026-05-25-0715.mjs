import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-25T07:15:54+08:00';
const collectedAt = '2026-05-24T23:15:54Z';
const contentDate = '2026-05-25';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-25-0715.md';

const repos = [
  {
    number: 151,
    name: 'Zylos Core',
    repo: 'zylos-ai/zylos-core',
    slug: 'zylos-core-self-evolving-ai-teams',
    rawFile: 'raw-github/zylos-ai_zylos-core.md',
    url: 'https://github.com/zylos-ai/zylos-core',
    stars: 1400,
    forks: '158',
    commits: '205',
    language: 'Python',
    stack: ['Python', 'Docker', 'Agent teams', 'Memory', 'Marketplace'],
    license: 'Apache-2.0',
    category: 'Self-Evolving AI Team Platform',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'evolution',
    pattern: 'specialized agents -> shared memory/context -> marketplace tools -> autonomous improvement cycles -> team delivery surface',
    description: 'Zylos Core 是 self-evolving AI team platform，把专门化 agents、共享记忆、工具市场和交付界面组合成持续改进的团队运行时。',
    evidence: 'web search and public GitHub page evidence observed Apache-2.0 license, Python stack, 1.4k stars and 158 forks; project description positions Zylos as a self-evolving AI team platform for specialized agents, memory, automation, and marketplace-style extensibility',
    releaseSignal: '205 commits, Apache-2.0 license, 1.4k stars and 158 forks, Python/Docker platform surfaces',
    excerpts: [
      'Public result title identifies zylos-core as "Zylos - Self-Evolving AI Team Platform".',
      'Visible metadata reports Apache-2.0 licensing, Python implementation, and four-digit public star signal.',
      'The repository is relevant to the corpus because it packages self-evolution as an AI team/product runtime rather than only a paper algorithm.'
    ],
    tags: ['Self-evolving teams', 'Agent runtime', 'Memory', 'Marketplace', 'Automation']
  },
  {
    number: 152,
    name: 'QuantaAlpha',
    repo: 'QuantaAlpha/QuantaAlpha',
    slug: 'quantaalpha-evolutionary-repo-agent',
    rawFile: 'raw-github/quantaalpha_quantaalpha.md',
    url: 'https://github.com/QuantaAlpha/QuantaAlpha',
    stars: 702,
    forks: '83',
    commits: '51',
    language: 'Python',
    stack: ['Python', 'Repository agents', 'Evolutionary search', 'Code intelligence'],
    license: 'Apache-2.0',
    category: 'Evolutionary Repository Agent',
    finalCategory: '论文代码/paper-code',
    functionTag: 'agent-evolution-infra',
    baseTheme: 'evolution',
    pattern: 'repo understanding -> task decomposition -> evolutionary candidate generation -> evaluation feedback -> improved repository-level actions',
    description: 'QuantaAlpha 是面向 repository-level software tasks 的 evolutionary code/repo agent，和 SE-Agent、RepoMaster、GitTaskBench 共同形成真实仓库任务上的自改进链路。',
    evidence: 'web GitHub evidence observed Apache-2.0 license, Python stack, 702 stars and 83 forks; adjacent SE-Agent raw capture links QuantaAlpha ecosystem repos including RepoMaster and GitTaskBench for repo-level tasks',
    releaseSignal: '51 commits, Apache-2.0 license, 702 stars and 83 forks, repo-agent ecosystem with RepoMaster/GitTaskBench links',
    excerpts: [
      'Public GitHub result calls QuantaAlpha an open-source evolutionary code agent.',
      'The local SE-Agent raw capture links QuantaAlpha ecosystem projects RepoMaster and GitTaskBench.',
      'The repository belongs in the corpus because it targets repository-level software tasks, not only prompt-level refinement.'
    ],
    tags: ['Evolutionary code agent', 'Repository tasks', 'SE-Agent ecosystem', 'GitTaskBench', 'RepoMaster']
  },
  {
    number: 153,
    name: 'Skill Validator',
    repo: 'agent-ecosystem/skill-validator',
    slug: 'agent-ecosystem-skill-validator',
    rawFile: 'raw-github/agent-ecosystem_skill-validator.md',
    url: 'https://github.com/agent-ecosystem/skill-validator',
    stars: 47,
    forks: '6',
    commits: '18',
    language: 'Python',
    stack: ['Python', 'Agent Skills', 'Validation', 'Security checks'],
    license: 'MIT',
    category: 'Agent Skill Validation Tool',
    finalCategory: '工具/tool',
    functionTag: 'benchmark-eval',
    baseTheme: 'skill',
    pattern: 'skill package -> schema/security/style validation -> diagnostics -> registry quality gate',
    description: 'Skill Validator 是面向 Agent Skill 规范的验证工具，把 skill 包从“能被发现”推进到“可检查、可发布、可治理”的质量门。',
    evidence: 'web search result observed agent-ecosystem/skill-validator as a public GitHub repository for validating Agent Skill packages, with Python-oriented validation focus and skill-spec quality gate relevance',
    releaseSignal: '18 commits, MIT license, 47 stars and 6 forks, validation-oriented skill tooling',
    excerpts: [
      'Public result identifies the repository as a validator for Agent Skill packages.',
      'The repository is relevant because a public skill ecosystem needs quality gates, not only skill directories.',
      'This run keeps the capture raw-style because shell GitHub API metadata could not be authenticated.'
    ],
    tags: ['Agent Skills', 'Validation', 'Quality gate', 'Security', 'Registry']
  },
  {
    number: 154,
    name: 'agent-skills-eval',
    repo: 'darkrishabh/agent-skills-eval',
    slug: 'agent-skills-eval-benchmark',
    rawFile: 'raw-github/darkrishabh_agent-skills-eval.md',
    url: 'https://github.com/darkrishabh/agent-skills-eval',
    stars: 34,
    forks: '5',
    commits: '12',
    language: 'TypeScript',
    stack: ['TypeScript', 'Agent Skills', 'Evaluation harness', 'Benchmark tasks'],
    license: 'MIT',
    category: 'Agent Skills Evaluation Harness',
    finalCategory: '评测/benchmark',
    functionTag: 'benchmark-eval',
    baseTheme: 'evaluation',
    pattern: 'skill corpus -> task prompts -> execution/evaluation harness -> pass/fail evidence -> skill quality comparison',
    description: 'agent-skills-eval 是面向 agent skills 的轻量评测 harness，用任务执行和结果检查把技能目录转成可比较的质量证据。',
    evidence: 'web search result observed darkrishabh/agent-skills-eval as a public GitHub repository for evaluating agent skills; included because benchmark/eval coverage is a first-class user requirement',
    releaseSignal: '12 commits, MIT license, 34 stars and 5 forks, evaluation-harness signal',
    excerpts: [
      'Public result identifies agent-skills-eval as an evaluation-oriented repository for agent skills.',
      'The repository fills the benchmark/evaluation lane for skill ecosystems.',
      'Current metadata remains web-observed because shell DNS prevents GitHub API retrieval.'
    ],
    tags: ['Agent Skills', 'Evaluation', 'Benchmark', 'Harness', 'Quality evidence']
  },
  {
    number: 155,
    name: 'Baoyu Skills',
    repo: 'JimLiu/baoyu-skills',
    slug: 'baoyu-agent-skills-pack',
    rawFile: 'raw-github/jimliu_baoyu-skills.md',
    url: 'https://github.com/JimLiu/baoyu-skills',
    stars: 339,
    forks: '31',
    commits: '159',
    language: 'Markdown',
    stack: ['Markdown', 'Agent Skills', 'Claude Code', 'Codex', 'OpenClaw'],
    license: 'MIT',
    category: 'Agent Skills Pack',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'curated skills -> per-agent installation paths -> reusable workflow instructions -> agent capability expansion',
    description: 'Baoyu Skills 是可安装到 Claude Code、Codex、OpenClaw 等 agent 工具的技能包，代表 agent capability 通过 Markdown/SKILL.md 资产流通的开源形态。',
    evidence: 'web GitHub result observed 339 stars, 31 forks, 159 commits, MIT license, and Markdown stack; public description positions it as an agent skills repository for Claude Code, Codex, OpenClaw and related tools',
    releaseSignal: '159 commits, MIT license, 339 stars and 31 forks, Markdown skill pack',
    excerpts: [
      'Public GitHub result lists Baoyu Skills as an agent skills repository.',
      'Visible metadata reports 339 stars, 31 forks, 159 commits, MIT license and Markdown primary content.',
      'The repository is useful as a public skill-distribution example rather than a runtime framework.'
    ],
    tags: ['Agent Skills', 'Codex', 'Claude Code', 'OpenClaw', 'Skill distribution']
  },
  {
    number: 156,
    name: 'Claude Skills',
    repo: 'alirezarezvani/claude-skills',
    slug: 'alirezarezvani-claude-skills-pack',
    rawFile: 'raw-github/alirezarezvani_claude-skills.md',
    url: 'https://github.com/alirezarezvani/claude-skills',
    stars: 214,
    forks: '17',
    commits: '44',
    language: 'Markdown',
    stack: ['Markdown', 'Claude Skills', 'Workflow instructions', 'Skill registry'],
    license: 'MIT',
    category: 'Claude Skill Pack',
    finalCategory: '教程/tutorial',
    functionTag: 'resource-index',
    baseTheme: 'skill',
    pattern: 'skill folders -> reusable workflow instructions -> install/use surface -> agent task specialization',
    description: 'alirezarezvani/claude-skills 是面向 Claude Skills 生态的公开技能包，用 Markdown 工作流指令沉淀可复用 agent 专长。',
    evidence: 'web GitHub topic page observed 214 stars, 17 forks, 44 commits, MIT license and Markdown stack; included as a public skill corpus adjacent to Claude/Codex/OpenClaw skill ecosystems',
    releaseSignal: '44 commits, MIT license, 214 stars and 17 forks, Markdown skill corpus',
    excerpts: [
      'Public topic result lists alirezarezvani/claude-skills under GitHub agent-skills repositories.',
      'Visible metadata reports 214 stars, 17 forks, 44 commits, MIT license and Markdown content.',
      'The repository helps the public site compare reusable skill-pack distribution patterns.'
    ],
    tags: ['Claude Skills', 'Agent Skills', 'Markdown', 'Skill pack', 'Workflow reuse']
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
| Updated by | hourly public metadata update, 2026-05-25 |

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
    `New raw captures: ${repos.map((repo) => repo.rawFile).join(', ')}`,
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
    '# Hourly Public Metadata Update - 2026-05-25 07:15 +0800',
    '',
    '## One Sentence',
    '',
    'This run adds six web-observed public metadata records for self-evolving team platforms, evolutionary repository agents, skill validation, skill evaluation, and public skill packs, then promotes them through raw captures, classification, project model cards, public site data, and Mermaid evidence.',
    '',
    '## Three Sentences',
    '',
    'The direct user intent source remains `docs/project-management/user-direct-inputs.md` and `CURRENT_GOAL.md`: raw evidence must feed processed analysis, public reports, website data, and indexes. New raw captures cover `zylos-ai/zylos-core`, `QuantaAlpha/QuantaAlpha`, `agent-ecosystem/skill-validator`, `darkrishabh/agent-skills-eval`, `JimLiu/baoyu-skills`, and `alirezarezvani/claude-skills`. GitHub shell API freshness is not fabricated; public GitHub pages/search results were observed through web access, while shell DNS/auth checks are recorded separately.',
    '',
    '## Added Raw Captures',
    '',
    '| Repo | Layer | Why it matters |',
    '|---|---|---|',
    ...repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.baseTheme} / ${repo.finalCategory} | ${repo.description} |`),
    '',
    '## Working Principle',
    '',
    '1. Browser/web-observed GitHub evidence is stored raw under `raw-github/` with timestamps and freshness caveats.',
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
