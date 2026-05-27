import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-27T16:00:06+08:00';
const runDate = '2026-05-27';
const runDisplay = '2026-05-27 16:00 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-27-1600.md';

const repos = [
  {
    name: 'ClawXMemory',
    repo: 'OpenBMB/ClawXMemory',
    url: 'https://github.com/OpenBMB/ClawXMemory',
    rawFile: 'raw-github/openbmb_clawxmemory.md',
    report: 'projects/257-clawxmemory-openclaw-long-term-memory-module.md',
    category: 'OpenClaw Long-Term Memory Module',
    final_category: '工具/tool',
    function_tag: 'memory-runtime',
    base_theme: 'memory',
    stack: 'TypeScript/OpenClaw/Markdown/SQLite',
    language: 'TypeScript',
    license: 'MIT',
    stars: 33,
    forks: 8,
    commits: 50,
    pattern: 'background indexing of chat sessions -> markdown file memories + sqlite control-plane -> model-guided recall selection -> dashboard traces for recall/index/dream lifecycle',
    tags: ['memory', 'openclaw', 'markdown memory', 'long-term context', 'local-first'],
    description: 'ClawXMemory is a multi-level OpenClaw memory plugin that writes durable file-based long-term memory and performs model-guided recall for project/user context.',
    evidence: 'web-observed GitHub page showed 33 stars, 8 forks, 50 commits, MIT license, and README architecture notes for markdown memory files, background indexing, Dream reorganization, and selective retrieval.',
    excerpts: [
      'The README states it is a file-based long-term memory plugin for OpenClaw.',
      'Memory is persisted in markdown files while sqlite stores runtime control-plane state.',
      'Background indexing plus Dream consolidation continuously restructures project memory.',
      'Recall selects minimal relevant files instead of stuffing full chat history into prompt context.'
    ]
  },
  {
    name: 'HexAgent',
    repo: 'UnicomAI/hexagent',
    url: 'https://github.com/UnicomAI/hexagent',
    rawFile: 'raw-github/unicomai_hexagent.md',
    report: 'projects/258-hexagent-agent-harness-runtime.md',
    category: 'LLM Computer Harness Runtime',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Python/TypeScript/MCP/Sandboxed Computer',
    language: 'Python',
    license: 'MIT',
    stars: 122,
    forks: 12,
    commits: 105,
    pattern: 'runtime/computer separation -> pluggable local-vm-cloud computer protocol -> middleware hooks and skill injection -> isolated subagent execution with MCP/tool orchestration',
    tags: ['harness', 'runtime', 'mcp', 'skills', 'sandbox'],
    description: 'HexAgent is a harness runtime that gives LLM agents an isolated computer layer and pluggable execution protocol instead of coupling agent runtime and machine state.',
    evidence: 'web-observed GitHub page showed 122 stars, 12 forks, 105 commits, MIT license, and README claims for runtime/computer isolation, pluggable Computer protocol, middleware pipeline, and skill discovery.',
    excerpts: [
      'The repository describes itself as an agent harness giving any LLM a computer.',
      'The README emphasizes separating runtime from controlled computer for safer isolation.',
      'Core modules include computer protocol, harness middleware, tools, prompts, and MCP integration.',
      'Skill discovery and subagent orchestration are presented as first-class runtime capabilities.'
    ]
  },
  {
    name: 'Agent Harness (EvalOps)',
    repo: 'evalops/agent-harness',
    url: 'https://github.com/evalops/agent-harness',
    rawFile: 'raw-github/evalops_agent-harness.md',
    report: 'projects/259-evalops-agent-harness-provider-adapter.md',
    category: 'Cross-Provider Agent Harness Adapter',
    final_category: '工具/tool',
    function_tag: 'framework-runtime',
    base_theme: 'evaluation',
    stack: 'Python/Bazel/OpenAI-Agents/Claude-Agent-SDK',
    language: 'Python',
    license: 'MIT',
    stars: 18,
    forks: 5,
    commits: 12,
    pattern: 'register tools once -> normalize json schema and response shape -> lazy provider adapter import -> run identical prompts across OpenAI/Claude backends for comparison',
    tags: ['harness', 'provider swap', 'evaluation', 'mcp', 'python'],
    description: 'evalops/agent-harness is a lightweight adapter that lets one tool registry run across OpenAI Agents SDK and Anthropic Claude Agent SDK backends.',
    evidence: 'web-observed GitHub page showed 18 stars, 5 forks, 12 commits, MIT license, and README notes for thread-safe tool registry, lazy provider adapters, and provider comparison helper flows.',
    excerpts: [
      'The README describes a unified harness for hot-swapping OpenAI and Claude agent SDKs.',
      'The core package keeps provider SDK dependencies lazy-loaded and optional.',
      'Shared config and response structures are presented for apples-to-apples provider runs.',
      'Provider comparison and optional search-tool adapters are built into the workflow.'
    ]
  },
  {
    name: 'Harness Evals',
    repo: 'harness/harness-evals',
    url: 'https://github.com/harness/harness-evals',
    rawFile: 'raw-github/harness_harness-evals.md',
    report: 'projects/260-harness-evals-agent-reliability-benchmark.md',
    category: 'Agent Reliability Evaluation Framework',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'evaluation',
    stack: 'Python/OTel/LLM-Judge Metrics/CI',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 3,
    forks: 3,
    commits: 86,
    pattern: 'evaluate cases with normalized 0-1 scores -> configurable pass thresholds -> optional llm judged metrics and telemetry sinks -> regression export to CI observability pipelines',
    tags: ['benchmark', 'evaluation', 'reliability', 'agent metrics', 'observability'],
    description: 'Harness Evals is an open-source evaluation framework for LLM agents, prompts, and structured outputs with normalized score semantics.',
    evidence: 'web-observed GitHub page showed 3 stars, 3 forks, 86 commits, Apache-2.0 license, and README claims for normalized scoring, threshold-based pass/fail, optional LLM metrics, and OTLP/Langfuse integration.',
    excerpts: [
      'README positions the project as an evaluation framework for agents, prompts, and structured outputs.',
      'Every metric emits normalized score values with explicit threshold-based pass logic.',
      'Install extras include llm judging metrics and OTLP telemetry export.',
      'Docs include architecture, metrics guide, integration guide, and ADR decision records.'
    ]
  },
  {
    name: 'Browser Harness',
    repo: 'browser-use/browser-harness',
    url: 'https://github.com/browser-use/browser-harness',
    rawFile: 'raw-github/browser-use_browser-harness.md',
    report: 'projects/261-browser-harness-self-healing-web-agent-runtime.md',
    category: 'Self-Healing Browser Agent Harness',
    final_category: '框架/framework',
    function_tag: 'benchmark-eval',
    base_theme: 'evaluation',
    stack: 'Python/CDP/Chrome Debugging/Playwright',
    language: 'Python',
    license: 'MIT',
    stars: 13900,
    forks: 1300,
    commits: 391,
    pattern: 'connect llm directly to live browser cdp -> patch missing helpers in agent-workspace during runs -> domain skill playbooks by site -> iteratively improve execution reliability',
    tags: ['browser harness', 'self-healing', 'cdp', 'automation', 'agent runtime'],
    description: 'browser-use/browser-harness connects LLM agents to real browsers through a thin editable CDP harness and encourages run-time self-healing helper generation.',
    evidence: 'web-observed GitHub page showed 13.9k stars, 1.3k forks, 391 commits, MIT license, and README claims for direct browser websocket control, in-run helper authoring, and domain skill workflows.',
    excerpts: [
      'The README calls it a self-healing harness for browser task completion.',
      'The runtime model is one websocket to Chrome with editable harness logic.',
      'Domain skill playbooks can be enabled to inject per-site interaction patterns.',
      'Setup guidance explicitly targets Codex and Claude Code installation flows.'
    ]
  },
  {
    name: 'Awesome Agent Skills',
    repo: 'junminhong/awesome-agent-skills',
    url: 'https://github.com/junminhong/awesome-agent-skills',
    rawFile: 'raw-github/junminhong_awesome-agent-skills.md',
    report: 'projects/262-awesome-agent-skills-cross-platform-index.md',
    category: 'Cross-Platform Agent Skill Index',
    final_category: '教程/tutorial',
    function_tag: 'resource-index',
    base_theme: 'skill',
    stack: 'Markdown/SKILL.md Templates/Codex/Claude Code',
    language: 'Markdown',
    license: 'MIT',
    stars: 13,
    forks: 7,
    commits: 8,
    pattern: 'curate platform-specific skills -> define skill frontmatter and folder template -> enumerate design patterns and evaluation checklists -> map official docs for reusable implementation',
    tags: ['skills', 'resource-index', 'codex', 'claude-code', 'workflow templates'],
    description: 'junminhong/awesome-agent-skills curates reusable skill workflows and templates for Codex, Claude Code, and other agent platforms.',
    evidence: 'web-observed GitHub page showed 13 stars, 7 forks, 8 commits, MIT license, and README sections for skill schema, design patterns, quality checks, and platform-specific usage guidance.',
    excerpts: [
      'The repository defines skills as reusable workflow units with explicit I/O and constraints.',
      'It provides a canonical SKILL.md folder structure and frontmatter template.',
      'Design patterns include plan-execute-verify, spec-first, critic loop, and minimal-diff.',
      'The resource section links official Codex and Claude skill documentation for implementation.'
    ]
  }
];

const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const write = (rel, value) => fs.writeFileSync(path.join(root, rel), value);
const slug = (value) => String(value).toLowerCase();
const csvEscape = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

function parseProjects(source) {
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array');
  return vm.runInNewContext(match[1]);
}

function rawCapture(repo) {
  return `---\nrepo: ${repo.repo}\nurl: ${repo.url}\ncontent_timestamp: ${runDate}\ntime_slice: 2026-05\ntimestamp_source: web_observed_public_github_page_2026_05_27\ncollected_at: ${runAt}\nsource: github\n---\n\n## GitHub - ${repo.repo}: ${repo.description}\n\n**Source**: ${repo.url}\n\n---\n\n# Raw public page capture notes\n\nThis raw-style public GitHub page capture was recorded by the hourly public metadata update. Shell GitHub API access failed DNS resolution and local GitHub CLI auth was invalid, so freshness is web-observed rather than API-verified.\n\n## Visible repository metadata\n\n- Repository: ${repo.repo}\n- URL: ${repo.url}\n- Stars: ${repo.stars}\n- Forks: ${repo.forks}\n- Commits: ${repo.commits}\n- License: ${repo.license}\n- Primary language / stack signal: ${repo.stack}\n- Collection timestamp: ${runAt}\n\n## Visible README / page excerpts\n\n${repo.excerpts.map((line) => `- ${line}`).join('\n')}\n\n## Raw capture boundary\n\nNo benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.\n`;
}

function modelCard(repo) {
  return `# ${repo.name} Model Card\n\n| Field | Value |\n|---|---|\n| Repository | [${repo.repo}](${repo.url}) |\n| Category | ${repo.category} |\n| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |\n| Language | ${repo.language} |\n| License | ${repo.license} |\n| Raw capture | ${repo.rawFile} |\n| Updated by | hourly public metadata update, ${runDisplay} |\n\n## 1. Role in Self Evolve\n\n${repo.description} It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.\n\n## 2. Working Principle\n\n${repo.pattern}\n\n## 3. Evidence Path\n\n${repo.evidence} Shell GitHub API access remained blocked by DNS and local \`gh\` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.\n\n## 4. Teaching Use\n\nUse this card to explain ${repo.category}: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.\n\n## 5. Limits\n\nThe repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.\n`;
}

function ensureRawAndCards() {
  for (const repo of repos) {
    write(repo.rawFile, rawCapture(repo));
    write(repo.report, modelCard(repo));
    write(path.join('site/public/reports', repo.report), modelCard(repo));
  }
}

function countBy(rows, keyFn) {
  const counts = new Map();
  for (const row of rows) {
    const key = keyFn(row) || 'unknown';
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

function updateClassification() {
  const rows = JSON.parse(read('research/repo-classification.json')).rows;
  const additions = repos.map((repo) => ({
    repo: repo.repo,
    url: repo.url,
    stars: String(repo.stars),
    prior_category: '-',
    prior_unclassified: 'true',
    final_category: repo.final_category,
    function_tag: repo.function_tag,
    base_theme: repo.base_theme,
    stack: repo.stack,
    time_slice: '2026-05',
    content_timestamp: runDate,
    evidence: repo.evidence,
    description: repo.description
  }));
  const byRepo = new Map(rows.map((row) => [slug(row.repo), row]));
  for (const row of additions) byRepo.set(slug(row.repo), row);
  const nextRows = [...byRepo.values()].sort((a, b) => slug(a.repo).localeCompare(slug(b.repo)));
  write('research/repo-classification.json', `${JSON.stringify({ generated_at: runAt, rows: nextRows }, null, 2)}\n`);
  const columns = ['repo', 'url', 'stars', 'prior_category', 'prior_unclassified', 'final_category', 'function_tag', 'base_theme', 'stack', 'time_slice', 'content_timestamp', 'evidence', 'description'];
  write('research/repo-classification.csv', `${columns.join(',')}\n${nextRows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`);
  const counts = countBy(nextRows, (row) => row.final_category);
  const fullRows = nextRows.map((row, index) => `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`).join('\n');
  write('research/repo-classification.md', `# Repo 自动分类与技术栈分析（raw-github ${nextRows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${counts.map((row) => `| ${row.key} | ${row.count} |`).join('\n')}\n\n## 本轮 hourly public metadata 增量\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${additions.map((row) => `| [${row.repo}](${row.url}) | ${row.final_category} | ${row.base_theme} | ${row.function_tag} | ${String(row.evidence).replace(/\|/g, '/')} |`).join('\n')}\n\n本轮新增 ${repos.map((repo) => repo.repo).join('、')} raw captures，并同步提升为 public site / model-card 覆盖。GitHub API 未验证 freshness 的原因记录在 Mermaid graph 与 work notes 中。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`);
}

function addToGroup(source, title, repoNames) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const groupRegex = new RegExp(`(\\{\\n    "title": "${escaped}",\\n    "repos": \\[\\n)([\\s\\S]*?)(\\n    \\]\\n  \\})`);
  const match = source.match(groupRegex);
  if (match) {
    const current = new Set([...match[2].matchAll(/"([^"]+)"/g)].map((m) => slug(m[1])));
    const missing = repoNames.filter((repo) => !current.has(slug(repo)));
    if (!missing.length) return source;
    const prefix = match[2].trimEnd();
    const sep = prefix.endsWith(',') ? '\n' : ',\n';
    const appended = missing.map((repo) => `      "${repo}"`).join(',\n');
    return source.replace(groupRegex, `${match[1]}${prefix}${sep}${appended}${match[3]}`);
  }
  const inlineRegex = new RegExp(`(\\{ title: '${escaped}', repos: \\[)([^\\]]*)(\\] \\})`);
  const inline = source.match(inlineRegex);
  if (!inline) return source;
  const current = new Set([...inline[2].matchAll(/'([^']+)'/g)].map((m) => slug(m[1])));
  const missing = repoNames.filter((repo) => !current.has(slug(repo)));
  if (!missing.length) return source;
  const body = inline[2].trim();
  const prefix = body.length ? `${body}, ` : '';
  const appended = missing.map((repo) => `'${repo}'`).join(', ');
  return source.replace(inlineRegex, `${inline[1]}${prefix}${appended}${inline[3]}`);
}

function updateProjectsData() {
  const file = 'site/src/data/projects.ts';
  let source = read(file);
  const existing = new Set(parseProjects(source).map((project) => slug(project.repo)));
  const additions = repos.filter((repo) => !existing.has(slug(repo.repo))).map((repo) => ({
    name: repo.name,
    repo: repo.repo,
    url: repo.url,
    stars: repo.stars,
    forks: repo.forks,
    language: repo.language,
    license: repo.license,
    report: repo.report,
    pattern: repo.pattern,
    description: repo.description,
    stack: repo.stack.split('/'),
    category: repo.category,
    lastPushed: '2026-05-27T00:00:00Z',
    localPath: repo.rawFile,
    status: 'candidate',
    tags: repo.tags
  }));
  if (additions.length) {
    const insert = additions.map((project) => `    ${JSON.stringify(project, null, 8).replace(/\n/g, '\n    ')}`).join(',\n') + '\n';
    source = source.replace(/\n\];\n\nexport const projectGroups =/, `,\n${insert}];\n\nexport const projectGroups =`);
  }
  source = addToGroup(source, 'Agent Skills / Memory / Harness', repos.map((repo) => repo.repo));
  write(file, source);
}

function updateProjectIndexes() {
  for (const file of ['projects/INDEX.md', 'site/public/reports/projects/INDEX.md']) {
    let source = read(file);
    const rows = repos.map((repo) => `| ${repo.name} | [${repo.repo}](${repo.url}) | ${repo.category} | [projects/${path.basename(repo.report)}](${path.basename(repo.report)}) |`).join('\n');
    if (!source.includes(repos[0].repo)) {
      source = source.replace(/\n## Data Use/, `\n${rows}\n\n## Data Use`);
      write(file, source);
    }
  }
}

function displayKey(key, en) {
  if (!en) return key;
  return String(key)
    .replace('框架/framework', 'framework')
    .replace('评测/evaluation', 'evaluation')
    .replace('教程/tutorial', 'tutorial')
    .replace('工具/tool', 'tool')
    .replace('应用/application', 'application')
    .replace('论文代码/paper-code', 'paper-code')
    .replace('评测/benchmark', 'benchmark');
}

function broadEvolution(row) {
  return /evol|self-improv|self improv|self-evolv|reflexion|self-refine|darwin|godel|gödel|gepa|funsearch|alph[a]?evolve|recursive/.test([row.repo, row.description, row.base_theme, row.function_tag, row.evidence].join(' ').toLowerCase());
}

function benchmarkRelated(row) {
  return /benchmark|eval|评测/.test([row.final_category, row.function_tag, row.description, row.evidence].join(' ').toLowerCase());
}

function distribution(rows) {
  return {
    category: countBy(rows, (row) => row.final_category),
    theme: countBy(rows, (row) => row.base_theme),
    functionTag: countBy(rows, (row) => row.function_tag),
    timeSlice: countBy(rows, (row) => row.time_slice)
  };
}

function formatDistribution(rows, limit = rows.length, en = false) {
  const selected = rows.slice(0, limit);
  const other = rows.slice(limit).reduce((sum, row) => sum + row.count, 0);
  const body = selected.map((row) => `${displayKey(row.key, en)} ${row.count}`);
  if (other) body.push(en ? `other ${other}` : `其他 ${other}`);
  return body.join(en ? ', ' : '、');
}

function themeHotLine(dist, en) {
  const order = ['memory', 'evaluation', 'evolution', 'skill'];
  const byKey = new Map(dist.theme.map((row) => [row.key, row.count]));
  return order.map((key) => `${key} ${byKey.get(key) ?? 0}`).join(en ? ', ' : '、');
}

function updateReadmes() {
  const classified = JSON.parse(read('research/repo-classification.json')).rows;
  const projects = parseProjects(read('site/src/data/projects.ts'));
  const reportCount = fs.readdirSync(path.join(root, 'site/public/reports/projects')).filter((name) => name.endsWith('.md')).length;
  const raw = classified.length;
  const modelCards = projects.length;
  const strict = classified.filter((row) => row.base_theme === 'evolution').length;
  const broad = classified.filter(broadEvolution).length;
  const benchmark = classified.filter(benchmarkRelated).length;
  const dist = distribution(classified);
  for (const file of ['README.md', 'README-ZH.md', 'README-EN.md']) {
    const en = file.endsWith('-EN.md');
    let text = read(file);
    const themeLine = formatDistribution(dist.theme, dist.theme.length, en);
    const categoryLine = formatDistribution(dist.category, dist.category.length, en);
    const functionLine = formatDistribution(dist.functionTag, dist.functionTag.length, en);
    const timeLine = formatDistribution(dist.timeSlice, 10, en);
    const may = dist.timeSlice.find((row) => row.key === '2026-05')?.count ?? 0;
    const unknown = dist.timeSlice.find((row) => row.key === 'unknown')?.count ?? 0;
    const hotThemes = themeHotLine(dist, en);
    if (en) {
      text = text.replace(/The current evidence layer includes \d+ GitHub raw captures, \d+ classified repositories, \d+ site projects, \d+ strict self-evolution repositories, and \d+ broad evolution-related repositories\./g, `The current evidence layer includes ${raw} GitHub raw captures, ${raw} classified repositories, ${modelCards} site projects, ${strict} strict self-evolution repositories, and ${broad} broad evolution-related repositories.`);
      text = text.replace(/GitHub corpus funnel \| \d+ raw captures \/ \d+ classified \/ \d+ model-card projects \/ \d+ strict \/ \d+ broad/g, `GitHub corpus funnel | ${raw} raw captures / ${raw} classified / ${modelCards} model-card projects / ${strict} strict / ${broad} broad`);
      text = text.replace(/memory \d+, evaluation \d+, evolution \d+, skill \d+/g, hotThemes);
      text = text.replace(/2026-05 raw classified repos \d+, unknown \d+/g, `2026-05 raw classified repos ${may}, unknown ${unknown}`);
      text = text.replace(/Product usability \| \d+ site-data projects \/ \d+ public project reports/g, `Product usability | ${modelCards} site-data projects / ${reportCount} public project reports`);
      text = text.replace(/Product usability \| \d+ public model-card projects/g, `Product usability | ${modelCards} public model-card projects`);
    } else {
      text = text.replace(/当前证据层包括 \d+ 个 GitHub raw captures、\d+ 个已分类仓库、\d+ 个站点项目、\d+ 个严格 self-evolution 仓库、\d+ 个广义 evolution-related 仓库。/g, `当前证据层包括 ${raw} 个 GitHub raw captures、${raw} 个已分类仓库、${modelCards} 个站点项目、${strict} 个严格 self-evolution 仓库、${broad} 个广义 evolution-related 仓库。`);
      text = text.replace(/GitHub 语料漏斗 \| \d+ raw captures \/ \d+ classified \/ \d+ model-card projects \/ \d+ strict \/ \d+ broad/g, `GitHub 语料漏斗 | ${raw} raw captures / ${raw} classified / ${modelCards} model-card projects / ${strict} strict / ${broad}`);
      text = text.replace(/memory \d+、evaluation \d+、evolution \d+、skill \d+/g, hotThemes);
      text = text.replace(/memory \d+, evaluation \d+, evolution \d+, skill \d+/g, hotThemes.replaceAll('、', ', '));
      text = text.replace(/2026-05 raw classified repos \d+，unknown \d+/g, `2026-05 raw classified repos ${may}，unknown ${unknown}`);
      text = text.replace(/产品可用性 \| \d+ site-data projects \/ \d+ public project reports/g, `产品可用性 | ${modelCards} site-data projects / ${reportCount} public project reports`);
      text = text.replace(/产品可用性 \| \d+ public model-card projects/g, `产品可用性 | ${modelCards} public model-card projects`);
    }
    text = text.replace(/\| Raw GitHub captures \| \d+ \|/g, `| Raw GitHub captures | ${raw} |`);
    text = text.replace(/\| Classified repositories \| \d+ \|/g, `| Classified repositories | ${raw} |`);
    text = text.replace(/\| Public model-card projects \| \d+ \|/g, `| Public model-card projects | ${modelCards} |`);
    text = text.replace(/\| Public project report files \| \d+ \|/g, `| Public project report files | ${reportCount} |`);
    text = text.replace(/\| Site\/paper model-card projects \| \d+ \|/g, `| Site/paper model-card projects | ${modelCards} |`);
    text = text.replace(/\| Strict self-evolution repos \| \d+ \|/g, `| Strict self-evolution repos | ${strict} |`);
    text = text.replace(/\| Broad evolution-related repos \| \d+ \|/g, `| Broad evolution-related repos | ${broad} |`);
    text = text.replace(/\| Benchmark\/evaluation related repos \| \d+ \|/g, `| Benchmark/evaluation related repos | ${benchmark} |`);
    text = text.replace(/\| Raw collection categories \| [^\n]+/g, `| Raw collection categories | ${categoryLine} |`);
    text = text.replace(/\| Raw collection themes \| [^\n]+/g, `| Raw collection themes | ${themeLine} |`);
    const axisCategory = en ? `| Collection category | ${categoryLine} | Repository shape: frameworks dominate, but skill/tool growth is now an important infrastructure signal. |` : `| Collection category | ${categoryLine} | 这是“仓库形态”：框架最多，但 skill/tool 增长已经是重要基础设施信号。 |`;
    const axisTheme = en ? `| Base theme | ${themeLine} | Theme center: memory, evaluation, evolution, and skill are the four densest supports. |` : `| Base theme | ${themeLine} | 这是“主题重心”：memory、evaluation、evolution、skill 是最密集的四个支点。 |`;
    const axisFunction = en ? `| Function tag | ${functionLine} | Functional role: benchmark/eval, runtime, resource index and tool modules form the main public evidence surfaces. |` : `| Function tag | ${functionLine} | 这是“功能角色”：benchmark/eval、runtime、resource index 和 tool module 构成主要公开证据面。 |`;
    const axisTime = en ? `| Time slice | ${timeLine} | Time signal: recent additions concentrate in skills, memory, harness, evaluation, and self-modifying code. |` : `| Time slice | ${timeLine} | 这是“时间信号”：近期新增集中在 skills、memory、harness、evaluation 和 self-modifying code。 |`;
    text = text.replace(/\| Collection category \| [^\n]+\n/, `${axisCategory}\n`);
    text = text.replace(/\| Base theme \| [^\n]+\n/, `${axisTheme}\n`);
    text = text.replace(/\| Function tag \| [^\n]+\n/, `${axisFunction}\n`);
    text = text.replace(/\| Time slice \| [^\n]+\n/, `${axisTime}\n`);
    const projectSummary = en ? `Full public model-card project list (${projects.length})` : `完整 public model-card 项目列表（${projects.length}）`;
    const projectHeader = en ? '| # | Project | Repository | Role | Stars | Report |\n|---:|---|---|---|---:|---|' : '| # | 项目 | 仓库 | 分类/角色 | Stars | 报告 |\n|---:|---|---|---|---:|---|';
    const reportLabel = en ? 'Report' : '报告';
    const projectRows = projects.map((project, index) => `| ${index + 1} | ${project.name} | [${project.repo}](${project.url}) | ${project.category} | ${project.stars} | [${reportLabel}](site/public/reports/${project.report}) |`).join('\n');
    const projectBlock = `<summary>${projectSummary}</summary>\n\n${projectHeader}\n${projectRows}\n`;
    text = en
      ? text.replace(/<summary>Full public model-card project list \(\d+\)<\/summary>\n\n[\s\S]*?\n<\/details>/, `${projectBlock}\n</details>`)
      : text.replace(/<summary>完整 public model-card 项目列表（\d+）<\/summary>\n\n[\s\S]*?\n<\/details>/, `${projectBlock}\n</details>`);
    const rawSummary = en ? `Full raw/classified GitHub repository list (${classified.length})` : `完整 raw/classified GitHub 仓库列表（${classified.length}）`;
    const rawHeader = en ? '| # | Repository | Category | Theme | Function | Stars | Time slice |\n|---:|---|---|---|---|---:|---|' : '| # | 仓库 | 分类 | 主题 | 功能标签 | Stars | 时间片 |\n|---:|---|---|---|---|---:|---|';
    const rawRows = classified.map((row, index) => `| ${index + 1} | [${row.repo}](${row.url}) | ${displayKey(row.final_category, en)} | ${row.base_theme} | ${row.function_tag} | ${row.stars} | ${row.time_slice} |`).join('\n');
    const rawBlock = `<summary>${rawSummary}</summary>\n\n${rawHeader}\n${rawRows}\n`;
    text = en
      ? text.replace(/<summary>Full raw\/classified GitHub repository list \(\d+\)<\/summary>\n\n[\s\S]*?\n<\/details>/, `${rawBlock}\n</details>`)
      : text.replace(/<summary>完整 raw\/classified GitHub 仓库列表（\d+）<\/summary>\n\n[\s\S]*?\n<\/details>/, `${rawBlock}\n</details>`);
    write(file, text);
  }
  let index = read('CONTENT_INDEX.md');
  index = index.replace(/覆盖 \d+ 个 raw GitHub captures/g, `覆盖 ${raw} 个 raw GitHub captures`);
  index = index.replace(/\| 公开项目报告 \| \[site\/public\/reports\/projects\/\]\(site\/public\/reports\/projects\/\) \| \d+ 个公开项目报告供静态站点下载\/引用 \|/g, `| 公开项目报告 | [site/public/reports/projects/](site/public/reports/projects/) | ${reportCount} 个公开项目报告供静态站点下载/引用 |`);
  write('CONTENT_INDEX.md', index);
}

function updateGraphAndNotes() {
  const graph = JSON.parse(read('.mermaid/current/graph.json'));
  graph.generated_at = runAt;
  for (const id of ['raw.github.hourly-captures', 'processed.github-classification', 'results.public-site', 'work.learning-notes']) {
    const node = graph.nodes.find((item) => item.id === id);
    if (node) node.status = 'updated';
  }
  const rawNode = graph.nodes.find((node) => node.id === 'raw.github.hourly-captures');
  if (rawNode) rawNode.paths = [...new Set([...(rawNode.paths || []), ...repos.map((repo) => repo.rawFile)])];
  const siteNode = graph.nodes.find((node) => node.id === 'results.public-site');
  if (siteNode) siteNode.paths = [...new Set([...(siteNode.paths || []), ...repos.flatMap((repo) => [repo.report, path.join('site/public/reports', repo.report)])])];
  const workNode = graph.nodes.find((node) => node.id === 'work.learning-notes');
  if (workNode) workNode.paths = [...new Set([...(workNode.paths || []), runNote])];
  graph.current_run = {
    run_at: runAt,
    added_repositories: repos.map((repo) => repo.repo),
    evidence_quality: 'web_observed_public_github_pages; shell GitHub API DNS failed and gh token invalid',
    graph_truth_source: '.mermaid/current/graph.json',
    gitnexus_status: 'available; npx gitnexus status reported stale index before this iteration'
  };
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
  write('.mermaid/current/graph.mmd', `flowchart LR\n  intent_direct_user_input["Direct user intent"]\n  raw_github_hourly_captures["Hourly GitHub raw captures"]\n  processed_github_classification["GitHub classification and timestamp indexes"]\n  work_learning_notes["Hourly learning notes"]\n  results_public_site["Public site project impact"]\n  results_public_visualizations["Public visualization assets"]\n  intent_direct_user_input -->|governs| raw_github_hourly_captures\n  raw_github_hourly_captures -->|feeds| processed_github_classification\n  processed_github_classification -->|publishes| results_public_site\n  processed_github_classification -->|explains| work_learning_notes\n  work_learning_notes -->|handoff| intent_direct_user_input\n  processed_github_classification -->|visualizes| results_public_visualizations\n`);
  const addedReports = repos.map((repo) => path.basename(repo.report, '.md').split('-')[0]).join(', ');
  write('.mermaid/current/graph.md', `# Current Mermaid Object Graph\n\nTruth source: \`.mermaid/current/graph.json\`\n\nGenerated: ${runAt}\n\n## Nodes\n\n- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.\n- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.\n- **processed.github-classification** (processed, updated): Classify raw captures into benchmark, harness, memory, skill, resource-index, and evolution-runtime roles.\n- **work.learning-notes** (work, updated): Record blockers, evidence quality, and working principle for the next agent.\n- **results.public-site** (results, updated): Expose the metadata delta to the SEO/project site instead of leaving it internal.\n- **results.public-visualizations** (results, updated): Make the raw-to-public evidence flow visible on the website and paper status page.\n\n## Edges\n\n- intent.direct-user-input --governs--> raw.github.hourly-captures\n- raw.github.hourly-captures --feeds--> processed.github-classification\n- processed.github-classification --publishes--> results.public-site\n- processed.github-classification --explains--> work.learning-notes\n- work.learning-notes --handoff--> intent.direct-user-input\n- processed.github-classification --visualizes--> results.public-visualizations\n\n## Current Run Evidence\n\n- Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}.\n- New raw files: ${repos.map((repo) => repo.rawFile).join(', ')}.\n- New public model cards and site reports: project/report ids ${addedReports}.\n- Shell GitHub API freshness is blocked by DNS; local \`gh\` token is invalid.\n- GitNexus status is available but stale before this iteration commit; a post-commit refresh may be needed for symbol-level freshness.\n- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.\n`);
  write(runNote, `# Hourly Public Metadata Update - ${runDisplay}\n\n## One Sentence\n\nAdded ${repos.length} web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.\n\n## Three Sentences\n\nThe direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds ${repos.map((repo) => `\`${repo.repo}\``).join(', ')} as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local \`gh\` authentication were blocked.\n\n## Added Repositories\n\n| Repo | Layer role | Raw capture | Public report |\n|---|---|---|---|\n${repos.map((repo) => `| \`${repo.repo}\` | ${repo.category} | \`${repo.rawFile}\` | \`site/public/reports/${repo.report}\` |`).join('\n')}\n\n## Working Principle\n\nBrowser-observed GitHub evidence -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> README/i18n -> \`site/src/data/projects.ts\` -> \`site/public/reports/projects/\` -> Astro site build.\n\n## Evidence Quality\n\n- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.\n- Shell GitHub API blocker: \`curl -I --max-time 10 https://api.github.com/rate_limit\` failed with DNS resolution error.\n- Local \`gh auth status\` reports the default token for \`Shiyao-Huang\` is invalid.\n- GitNexus is installed and \`npx gitnexus status/list\` worked; stale index state was observed during this run.\n- No cloned code was executed and no benchmark claim was independently rerun.\n- Mermaid truth source remains \`.mermaid/current/graph.json\`; \`.mmd\` and \`.md\` are rendered views.\n\n## Validation Commands For This Iteration\n\n- \`node scripts/generate_project_indexes.mjs\`\n- \`python3 scripts/enforce_raw_timestamps.py\`\n- \`node scripts/analyze_github_project_data.mjs\`\n- \`(cd site && npm run build)\`\n`);
}

ensureRawAndCards();
updateClassification();
updateProjectsData();
updateProjectIndexes();
updateReadmes();
updateGraphAndNotes();

console.log(JSON.stringify({ runAt, added: repos.map((repo) => repo.repo) }, null, 2));
