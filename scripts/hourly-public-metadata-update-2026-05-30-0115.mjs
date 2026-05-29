import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-30T01:15:12+08:00';
const runDate = '2026-05-30';
const runDisplay = '2026-05-30 01:15 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-05-30-0115.md';

const repos = [
  {
    "name": "OpenAI Swarm",
    "repo": "openai/swarm",
    "url": "https://github.com/openai/swarm",
    "rawFile": "raw-github/openai_swarm.md",
    "report": "projects/311-openai-swarm-multi-agent-orchestration.md",
    "category": "Experimental Multi-Agent Orchestration Framework",
    "final_category": "框架/framework",
    "function_tag": "framework-runtime",
    "base_theme": "framework",
    "stack": "Python/Multi-Agent Orchestration/Function Calling Handoffs",
    "language": "Python",
    "license": "MIT",
    "stars": 21500,
    "forks": 2300,
    "commits": 29,
    "pattern": "compose lightweight routines and handoffs -> route user tasks across specialized agents -> keep tool usage explicit and inspectable -> evolve orchestration workflows with reproducible function-call boundaries",
    "tags": [
      "multi-agent",
      "orchestration",
      "handoff",
      "openai",
      "framework"
    ],
    "description": "swarm is OpenAI's educational multi-agent orchestration framework for lightweight handoffs, routines, and inspectable agent workflow patterns.",
    "evidence": "web-observed GitHub page showed ~21.5k stars, ~2.3k forks, 29 commits, MIT license, and README positioning Swarm as an experimental educational framework for ergonomic and lightweight multi-agent orchestration.",
    "excerpts": [
      "README opens with: an educational framework exploring ergonomic, lightweight multi-agent orchestration.",
      "Project metadata panel shows MIT licensing and Python-first implementation signals.",
      "Public page count snapshot showed about 21.5k stars, 2.3k forks, and 29 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
    ]
  },
  {
    "name": "Agent Lightning",
    "repo": "microsoft/agent-lightning",
    "url": "https://github.com/microsoft/agent-lightning",
    "rawFile": "raw-github/microsoft_agent-lightning.md",
    "report": "projects/312-microsoft-agent-lightning-rl-agent-evolution.md",
    "category": "Reinforcement-Learning Agent Training Framework",
    "final_category": "框架/framework",
    "function_tag": "agent-evolution-infra",
    "base_theme": "evolution",
    "stack": "Python/RL Training Framework/Agent Finetuning and Observability",
    "language": "Python",
    "license": "MIT",
    "stars": 17300,
    "forks": 1500,
    "commits": 255,
    "pattern": "decouple agent execution from RL training through unified trajectories -> build a training-agent disaggregation architecture -> optimize downstream agent policies with LightningRL credit assignment -> feed validated gains back into agent runtime loops",
    "tags": [
      "reinforcement-learning",
      "agent-training",
      "self-improvement",
      "microsoft",
      "evolution"
    ],
    "description": "Agent Lightning is Microsoft's framework for turning arbitrary agent execution traces into RL-friendly transitions and optimizing agent behavior with LightningRL.",
    "evidence": "web-observed GitHub page showed ~17.3k stars, ~1.5k forks, 255 commits, MIT license, and README claims that Agent Lightning can train any AI agents with almost zero code modifications.",
    "excerpts": [
      "README states Agent Lightning can train any AI agents with reinforcement learning and almost zero code modifications.",
      "Docs describe Training-Agent Disaggregation and a unified data interface for trajectories.",
      "Public page count snapshot showed about 17.3k stars, 1.5k forks, and 255 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
    ]
  },
  {
    "name": "Awesome AI Agent Skills",
    "repo": "seb1n/awesome-ai-agent-skills",
    "url": "https://github.com/seb1n/awesome-ai-agent-skills",
    "rawFile": "raw-github/seb1n_awesome-ai-agent-skills.md",
    "report": "projects/313-awesome-ai-agent-skills-cross-agent-skill-index.md",
    "category": "Cross-Agent Skill Index and Install Guide",
    "final_category": "教程/tutorial",
    "function_tag": "resource-index",
    "base_theme": "skill",
    "stack": "Markdown/Skill Registry/Codex Claude Cursor Gemini OpenCode Support",
    "language": "Markdown",
    "license": "MIT",
    "stars": 92,
    "forks": 17,
    "commits": 4,
    "pattern": "collect reusable agent skills in one registry -> map installation paths for multiple agent runtimes -> standardize skill formatting and metadata -> reduce bootstrapping friction for reproducible skill reuse",
    "tags": [
      "skills",
      "awesome-list",
      "cross-agent",
      "codex",
      "claude-code"
    ],
    "description": "awesome-ai-agent-skills curates reusable skill packs and installation paths across Codex, Claude, Cursor, Gemini CLI, OpenCode, and related agent runtimes.",
    "evidence": "web-observed GitHub page showed 92 stars, 17 forks, 4 commits, MIT license, and README framing as a curated list for reusable AI coding agent skills.",
    "excerpts": [
      "README title frames the repository as a curated list of reusable AI coding agent skills.",
      "Install matrix includes Codex CLI, Claude Code, Cursor, Gemini CLI, OpenCode, and others.",
      "Public page count snapshot showed 92 stars, 17 forks, and 4 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
    ]
  },
  {
    "name": "Awesome Agent Memory",
    "repo": "cxxz/awesome-agent-memory",
    "url": "https://github.com/cxxz/awesome-agent-memory",
    "rawFile": "raw-github/cxxz_awesome-agent-memory.md",
    "report": "projects/314-awesome-agent-memory-reference-index.md",
    "category": "Agent Memory Research and Tooling Index",
    "final_category": "教程/tutorial",
    "function_tag": "resource-index",
    "base_theme": "memory",
    "stack": "Markdown/Agent Memory Index/Research Tool Taxonomy",
    "language": "Markdown",
    "license": "Unspecified (public page metadata)",
    "stars": 11,
    "forks": 3,
    "commits": 16,
    "pattern": "aggregate memory papers and systems -> cluster long-term, retrieval, and memory-runtime approaches -> provide a quick reference for selecting memory substrates -> support comparative study and downstream implementation planning",
    "tags": [
      "memory",
      "awesome-list",
      "agent-memory",
      "literature",
      "taxonomy"
    ],
    "description": "awesome-agent-memory is a focused index of agent memory papers, systems, and implementation resources for long-term memory design decisions.",
    "evidence": "web-observed GitHub page showed 11 stars, 3 forks, 16 commits, Markdown language dominance, and repository framing as an awesome list for agent memory.",
    "excerpts": [
      "Repository title and about section frame it as an awesome list dedicated to agent memory.",
      "Page metadata shows Markdown-first structure and small but active curation history.",
      "Public page count snapshot showed 11 stars, 3 forks, and 16 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
    ]
  },
  {
    "name": "ACPX",
    "repo": "openclaw/acpx",
    "url": "https://github.com/openclaw/acpx",
    "rawFile": "raw-github/openclaw_acpx.md",
    "report": "projects/315-openclaw-acpx-stateful-agent-runtime.md",
    "category": "State-Preserving Agent Runtime and Session Handoff",
    "final_category": "框架/framework",
    "function_tag": "skill-orchestration",
    "base_theme": "skill",
    "stack": "TypeScript/ACP Runtime/Stateful Session and Skill Orchestration",
    "language": "TypeScript",
    "license": "MIT",
    "stars": 2800,
    "forks": 272,
    "commits": 411,
    "pattern": "preserve session state across agent switches -> coordinate skills through ACP-compatible runtime contracts -> maintain continuity for long-running workflows -> turn ad hoc tool use into transferable orchestration assets",
    "tags": [
      "openclaw",
      "acp",
      "stateful-runtime",
      "skill-orchestration",
      "session-handoff"
    ],
    "description": "acpx is OpenClaw's state-preserving runtime for switching across coding agents while retaining full session context and ACP compatibility.",
    "evidence": "web-observed GitHub page showed about 2.8k stars, 272 forks, 411 commits, MIT license, and about text stating acpx preserves complete session context when switching between coding agents.",
    "excerpts": [
      "About section says acpx preserves complete session context when switching between coding agents.",
      "README highlights ACP implementation and stateful session continuity goals.",
      "Public page count snapshot showed about 2.8k stars, 272 forks, and 411 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
    ]
  },
  {
    "name": "Crabbox",
    "repo": "openclaw/crabbox",
    "url": "https://github.com/openclaw/crabbox",
    "rawFile": "raw-github/openclaw_crabbox.md",
    "report": "projects/316-openclaw-crabbox-browser-agent-benchmark.md",
    "category": "Browser Agent Benchmark and Evaluation Harness",
    "final_category": "评测/evaluation",
    "function_tag": "benchmark-eval",
    "base_theme": "evaluation",
    "stack": "Go/Browser Agent Benchmark Harness/Task Evaluation Pipeline",
    "language": "Go",
    "license": "MIT",
    "stars": 539,
    "forks": 61,
    "commits": 945,
    "pattern": "define browser-agent task suites -> execute agent runs with standardized tooling and policies -> score outcomes with reproducible evaluators -> provide benchmark signals for agent iteration and harness tuning",
    "tags": [
      "openclaw",
      "benchmark",
      "browser-agent",
      "evaluation",
      "harness"
    ],
    "description": "crabbox is OpenClaw's browser-agent benchmark framework for reproducible task execution and evaluator-driven comparison.",
    "evidence": "web-observed GitHub page showed 539 stars, 61 forks, 945 commits, MIT license, and repository framing as a benchmark framework for browser agents.",
    "excerpts": [
      "README labels crabbox as a benchmark framework for browser agents.",
      "Repository metadata indicates Go implementation and MIT licensing.",
      "Public page count snapshot showed 539 stars, 61 forks, and 945 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
    ]
  },
  {
    "name": "OpenClaw Windows Node",
    "repo": "openclaw/openclaw-windows-node",
    "url": "https://github.com/openclaw/openclaw-windows-node",
    "rawFile": "raw-github/openclaw_openclaw-windows-node.md",
    "report": "projects/317-openclaw-windows-node-runner.md",
    "category": "Windows Companion Runtime for Agent Execution",
    "final_category": "应用/application",
    "function_tag": "framework-runtime",
    "base_theme": "framework",
    "stack": "C#/Windows Runtime/Companion Node for OpenClaw Execution",
    "language": "C#",
    "license": "MIT",
    "stars": 542,
    "forks": 95,
    "commits": 914,
    "pattern": "bridge OpenClaw workflows into Windows environments -> run companion node services with OS-specific integration -> keep agent operations portable across platform constraints -> feed platform results back into broader harness reliability",
    "tags": [
      "openclaw",
      "windows",
      "runtime",
      "companion-node",
      "cross-platform"
    ],
    "description": "openclaw-windows-node provides a Windows companion runtime layer to execute OpenClaw agent workflows in native Windows contexts.",
    "evidence": "web-observed GitHub page showed 542 stars, 95 forks, 914 commits, MIT license, and repository scope as a Windows companion node for OpenClaw.",
    "excerpts": [
      "Repository title and about section identify it as OpenClaw's Windows companion node.",
      "Metadata panel indicates C#-first implementation and MIT licensing.",
      "Public page count snapshot showed 542 stars, 95 forks, and 914 commits.",
      "Counts were taken from the public GitHub page without authenticated API claims."
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
  return `---\nrepo: ${repo.repo}\nurl: ${repo.url}\ncontent_timestamp: ${runDate}\ntime_slice: 2026-05\ntimestamp_source: web_observed_public_github_page_2026_05_29\ncollected_at: ${runAt}\nsource: github\n---\n\n## GitHub - ${repo.repo}: ${repo.description}\n\n**Source**: ${repo.url}\n\n---\n\n# Raw public page capture notes\n\nThis raw-style public GitHub page capture was recorded by the hourly public metadata update. Shell GitHub API access failed DNS resolution and local GitHub CLI auth was invalid, so freshness is web-observed rather than API-verified.\n\n## Visible repository metadata\n\n- Repository: ${repo.repo}\n- URL: ${repo.url}\n- Stars: ${repo.stars}\n- Forks: ${repo.forks}\n- Commits: ${repo.commits}\n- License: ${repo.license}\n- Primary language / stack signal: ${repo.stack}\n- Collection timestamp: ${runAt}\n\n## Visible README / page excerpts\n\n${repo.excerpts.map((line) => `- ${line}`).join('\n')}\n\n## Raw capture boundary\n\nNo benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.\n`;
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
    lastPushed: '2026-05-29T00:00:00Z',
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
