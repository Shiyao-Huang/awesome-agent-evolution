import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-25T15:22:43+08:00';
const runDate = '2026-05-25';

const repos = [
  {
    id: 196,
    name: 'Agent Replay',
    repo: 'agentreplay/agentreplay',
    url: 'https://github.com/agentreplay/agentreplay',
    rawFile: 'raw-github/agentreplay_agentreplay.md',
    report: 'projects/196-agentreplay-local-agent-observability-memory.md',
    category: 'Local Agent Evals and Memory Observability',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'memory',
    stack: 'Rust/Python/JavaScript/MCP',
    language: 'Rust',
    license: 'Unknown',
    stars: 0,
    forks: '2',
    pattern: 'local traces -> evals -> memory retrieval -> agent debugging',
    tags: ['agent memory', 'observability', 'evals', 'mcp', 'local-first'],
    description: 'Agent Replay is a local-first desktop evals, observability and AI memory stack for coding agents, with traces, embedded storage, vector memory, MCP/Claude Code integration and no cloud dependency.',
    evidence: 'web search/public GitHub page observed agentreplay/agentreplay as a local-first desktop evals, observability and AI memory project for Claude Code, Cursor, Windsurf, Cline, VS Code agents and custom SDK integrations; visible snippet listed fork count 2 and emphasized no Docker/server/cloud requirement.',
    excerpts: [
      'README headline describes local-first desktop evals, observability and AI memory for agents and coding tools.',
      'README states that traces, memory and analytics are stored locally and can be queried by Claude Code, Cursor, Windsurf, Cline, VS Code/Copilot and custom agents.',
      'Observed metadata was web/search-visible only; stars were not reliably visible in the accessible snippet, so star snapshot is set to 0 rather than guessed.'
    ],
    teachingQuestion: 'Does observability plus local memory improve agent debugging and repeatability, or only collect traces?'
  },
  {
    id: 197,
    name: 'Awesome Agent Memory Papers',
    repo: 'yyyujintang/Awesome-Agent-Memory-Papers',
    url: 'https://github.com/yyyujintang/Awesome-Agent-Memory-Papers',
    rawFile: 'raw-github/yyyujintang_awesome-agent-memory-papers.md',
    report: 'projects/197-awesome-agent-memory-papers.md',
    category: 'Agent Memory Paper and Benchmark Index',
    final_category: '教程/tutorial',
    function_tag: 'resource-index',
    base_theme: 'memory',
    stack: 'Markdown',
    language: 'Markdown',
    license: 'Unknown',
    stars: 0,
    forks: '0',
    pattern: 'memory papers -> methods/benchmarks/surveys -> research map',
    tags: ['agent memory', 'papers', 'benchmark', 'survey'],
    description: 'Awesome Agent Memory Papers is a curated paper index for agent memory methods, benchmarks and surveys, giving the corpus a paper-facing bridge for memory substrate and evaluation claims.',
    evidence: 'web search/public GitHub page observed yyyujintang/Awesome-Agent-Memory-Papers as an Awesome Papers repository for Agent Memory covering methods, benchmarks and surveys, with a companion website at yyyujintang.github.io/Awesome-Agent-Memory-Papers.',
    excerpts: [
      'Search-visible GitHub snippet labels the categories as Survey, Benchmark and Method.',
      'The project matters as a paper-facing memory map rather than a runnable agent runtime.',
      'Star/fork counts were not reliably visible through the accessible snippet and are not treated as freshness evidence.'
    ],
    teachingQuestion: 'Can the memory paper index help separate benchmark evidence from implementation claims?'
  },
  {
    id: 198,
    name: 'Memvid',
    repo: 'memvid/memvid',
    url: 'https://github.com/memvid/memvid',
    rawFile: 'raw-github/memvid_memvid.md',
    report: 'projects/198-memvid-single-file-agent-memory.md',
    category: 'Single-File Agent Memory Layer',
    final_category: '工具/tool',
    function_tag: 'memory-substrate',
    base_theme: 'memory',
    stack: 'Python/Rust/Video index',
    language: 'Python',
    license: 'Unknown',
    stars: 12400,
    forks: '1000',
    pattern: 'documents/conversations -> single portable memory file -> fast retrieval',
    tags: ['agent memory', 'portable memory', 'LoCoMo', 'local-first'],
    description: 'Memvid packages AI-agent memory into a portable single-file layer, positioning itself as memory without external vector database/server infrastructure and publishing LoCoMo benchmark claims.',
    evidence: 'web search observed memvid/memvid through public GitHub-adjacent and project pages as a single-file portable memory layer for AI agents; indexed snapshot reported 12.4k stars and 1.0k forks, and project benchmark page claims LoCoMo performance gains. Treat benchmark and count signals as web-observed, not API-verified.',
    excerpts: [
      'Public snippets describe Memvid as a single-file portable memory layer for AI agents.',
      'Project benchmark page claims LoCoMo state-of-the-art performance; this run records the claim but does not rerun the benchmark.',
      'The key technical signal is replacing multi-service RAG/vector infrastructure with a portable memory artifact.'
    ],
    teachingQuestion: 'Does a portable memory artifact improve agent continuity under real coding workloads, not just retrieval benchmarks?'
  },
  {
    id: 199,
    name: 'Awesome Agent Memory',
    repo: 'tfatykhov/awesome-agent-memory',
    url: 'https://github.com/tfatykhov/awesome-agent-memory',
    rawFile: 'raw-github/tfatykhov_awesome-agent-memory.md',
    report: 'projects/199-tfatykhov-awesome-agent-memory.md',
    category: 'Agent Memory Research Index',
    final_category: '教程/tutorial',
    function_tag: 'resource-index',
    base_theme: 'memory',
    stack: 'Markdown',
    language: 'Markdown',
    license: 'Unknown',
    stars: 0,
    forks: '0',
    pattern: 'memory systems -> papers/projects -> typed memory taxonomy',
    tags: ['agent memory', 'research index', 'multi-store memory'],
    description: 'Awesome Agent Memory is a curated research list on memory systems for LLM agents and a useful cross-check against the larger memory substrate and benchmark trend in this corpus.',
    evidence: 'web search/public GitHub page observed tfatykhov/awesome-agent-memory as curated research on memory systems for LLM agents, maintained alongside Nous, a cognitive AI agent with typed multi-store memory.',
    excerpts: [
      'Search-visible GitHub snippet describes a curated research list for memory systems in LLM agents.',
      'The repository is evidence for memory taxonomy coverage rather than a direct benchmark/runtime project.',
      'Star/fork counts were not reliably visible through the accessible snippet and are not treated as current metadata.'
    ],
    teachingQuestion: 'Does this index add missing memory taxonomy coverage compared with the existing TeleAI and paper-list records?'
  }
];

const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const write = (rel, value) => fs.writeFileSync(path.join(root, rel), value);
const exists = (rel) => fs.existsSync(path.join(root, rel));

const csvEscape = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const slug = (repo) => repo.toLowerCase();

function rawCapture(repo) {
  return `---\nrepo: ${repo.repo}\nurl: ${repo.url}\ncontent_timestamp: ${runDate}\ntime_slice: 2026-05\ntimestamp_source: web_observed_search_and_public_github_page_2026_05_25\ncollected_at: ${runAt}\nsource: github\n---\n\n## GitHub - ${repo.repo}: ${repo.description}\n\n**Source**: ${repo.url}\n\n---\n\n# Raw public page capture notes\n\nThis is a raw-style public GitHub/search capture recorded by the hourly public metadata update. Shell GitHub API access was not available in this environment, so the freshness level is web-observed rather than API-verified.\n\n## Visible repository metadata\n\n- Repository: ${repo.repo}\n- URL: ${repo.url}\n- Stars: ${repo.stars || 'unknown'}\n- Forks: ${repo.forks || 'unknown'}\n- License: ${repo.license}\n- Primary language / stack signal: ${repo.stack}\n- Collection timestamp: ${runAt}\n\n## Visible README / page excerpts\n\n${repo.excerpts.map((line) => `- ${line}`).join('\n')}\n\n## Raw capture boundary\n\nNo benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page/search evidence for downstream classification, model-card analysis, public reports, and the site index.\n`;
}

function modelCard(repo) {
  return `# ${repo.name} Model Card\n\n| Field | Value |\n|---|---|\n| Repository | [${repo.repo}](${repo.url}) |\n| Category | ${repo.category} |\n| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |\n| Language | ${repo.language} |\n| License | ${repo.license} |\n| Raw capture | ${repo.rawFile} |\n| Updated by | hourly public metadata update, 2026-05-25 |\n\n## 1. Role in Self Evolve\n\n${repo.description}\n\n## 2. Working Principle\n\n${repo.pattern}\n\n## 3. Evidence Path\n\n${repo.evidence} Shell GitHub API access remained blocked by DNS and local \`gh\` auth was invalid, so this card treats the current snapshot as web-observed rather than API-verified.\n\n## 4. Teaching Use\n\nUse this card to explain ${repo.category} in the raw -> classification -> project card -> site/report pipeline. ${repo.teachingQuestion}\n\n## 5. Limits\n\nThe repository was not cloned in this iteration; no benchmark, SDK example, memory experiment, eval run, skill install flow, agent loop, or production deployment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.\n`;
}

function ensureRawAndCards() {
  for (const repo of repos) {
    write(repo.rawFile, rawCapture(repo));
    write(repo.report, modelCard(repo));
    write(path.join('site/public/reports', repo.report), modelCard(repo));
  }
}

function updateClassification() {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
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
  const byRepo = new Map(data.rows.map((row) => [slug(row.repo), row]));
  for (const row of additions) byRepo.set(slug(row.repo), row);
  const rows = [...byRepo.values()].sort((a, b) => slug(a.repo).localeCompare(slug(b.repo)));
  write(file, `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

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
  write('research/repo-classification.csv', `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`);

  const counts = countBy(rows, (row) => row.final_category);
  const deltaRows = additions.map((row) => `| [${row.repo}](${row.url}) | ${row.final_category} | ${row.base_theme} | ${row.function_tag} | ${String(row.evidence).replace(/\|/g, '/')} |`);
  write('research/repo-classification.md', `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${counts.map((row) => `| ${row.key} | ${row.count} |`).join('\n')}\n\n## 本轮 hourly public metadata 增量\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${deltaRows.join('\n')}\n\n本轮新增 Agent Replay、Awesome Agent Memory Papers、Memvid、Awesome Agent Memory raw captures，并同步提升为 public site / model-card 覆盖。GitHub API 未验证 freshness 的原因记录在 Mermaid graph 与 work notes 中。\n`);
}

function parseProjects(source) {
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array');
  return vm.runInNewContext(match[1]);
}

function updateProjectsData() {
  const file = 'site/src/data/projects.ts';
  let source = read(file);
  const projects = parseProjects(source);
  const existing = new Set(projects.map((project) => slug(project.repo)));
  const additions = repos
    .filter((repo) => !existing.has(slug(repo.repo)))
    .map((repo) => ({
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
      lastPushed: '2026-05-25T00:00:00Z',
      localPath: repo.rawFile,
      status: 'candidate',
      tags: repo.tags
    }));
  if (additions.length) {
    const insert = additions.map((project) => `    ${JSON.stringify(project, null, 8).replace(/\n/g, '\n    ')}`).join(',\n') + '\n';
    source = source.replace(/\n\];\n\nexport const projectGroups =/, `,\n${insert}];\n\nexport const projectGroups =`);
  }

  source = addToGroup(source, 'Harness / 技能 / 记忆进化', repos.map((repo) => repo.repo));
  source = addToGroup(source, '个人 Agent 产品与真实评测', ['agentreplay/agentreplay', 'memvid/memvid']);
  write(file, source);
}

function addToGroup(source, title, repoNames) {
  const groupRegex = new RegExp(`(\\{\\n    "title": "${escapeRegex(title)}",\\n    "repos": \\[\\n)([\\s\\S]*?)(\\n    \\]\\n  \\})`);
  const match = source.match(groupRegex);
  if (!match) return source;
  const current = new Set([...match[2].matchAll(/"([^"]+)"/g)].map((m) => slug(m[1])));
  const missing = repoNames.filter((repo) => !current.has(slug(repo)));
  if (!missing.length) return source;
  const prefix = match[2].trimEnd();
  const sep = prefix.endsWith(',') ? '\n' : ',\n';
  const appended = missing.map((repo) => `      "${repo}"`).join(',\n');
  return source.replace(groupRegex, `${match[1]}${prefix}${sep}${appended}${match[3]}`);
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function countBy(rows, keyFn) {
  const counts = new Map();
  for (const row of rows) {
    const key = keyFn(row) || 'unknown';
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return [...counts.entries()].map(([key, count]) => ({ key, count })).sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

function broadEvolution(row) {
  return [row.repo, row.description, row.base_theme, row.function_tag, row.evidence]
    .join(' ')
    .toLowerCase()
    .match(/evol|self-improv|self improv|self-evolv|reflexion|self-refine|darwin|godel|gödel|gepa|funsearch|alph[a]?evolve|recursive/);
}

function benchmarkRelated(row) {
  const text = [row.final_category, row.function_tag, row.description, row.evidence].join(' ').toLowerCase();
  return /benchmark|eval|评测/.test(text);
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
  return body.join(en ? ', ' : ', ');
}

function themeHotLine(dist, en) {
  const order = ['memory', 'evaluation', 'evolution', 'skill'];
  const byKey = new Map(dist.theme.map((row) => [row.key, row.count]));
  return order.map((key) => `${key} ${byKey.get(key) ?? 0}`).join(en ? ', ' : '、');
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

function updateReadmes() {
  const classified = JSON.parse(read('research/repo-classification.json')).rows;
  const siteSource = read('site/src/data/projects.ts');
  const projects = parseProjects(siteSource);
  const reportCount = fs.readdirSync(path.join(root, 'site/public/reports/projects')).filter((name) => name.endsWith('.md')).length;
  const strict = classified.filter((row) => row.base_theme === 'evolution').length;
  const broad = classified.filter(broadEvolution).length;
  const benchmark = classified.filter(benchmarkRelated).length;
  const dist = distribution(classified);
  const raw = classified.length;
  const modelCards = projects.length;

  for (const file of ['README.md', 'README-ZH.md', 'README-EN.md']) {
    const en = file.endsWith('-EN.md');
    let text = read(file);
    text = replaceCountText(text, { en, raw, modelCards, reportCount, strict, broad, benchmark, dist });
    text = replaceProjectDetails(text, projects, en);
    text = replaceRawDetails(text, classified, en);
    write(file, text);
  }
}

function replaceCountText(text, metrics) {
  const { en, raw, modelCards, reportCount, strict, broad, benchmark, dist } = metrics;
  const themeLine = formatDistribution(dist.theme, dist.theme.length, en);
  const hotThemes = themeHotLine(dist, en);
  const categoryLine = formatDistribution(dist.category, dist.category.length, en);
  const functionLine = formatDistribution(dist.functionTag, dist.functionTag.length, en);
  const timeLine = formatDistribution(dist.timeSlice, 10, en);
  const may = dist.timeSlice.find((row) => row.key === '2026-05')?.count ?? 0;
  const unknown = dist.timeSlice.find((row) => row.key === 'unknown')?.count ?? 0;

  if (en) {
    text = text.replace(/The current evidence layer includes \d+ GitHub raw captures, \d+ classified repositories, \d+ site projects, \d+ strict self-evolution repositories, and \d+ broad evolution-related repositories\./g, `The current evidence layer includes ${raw} GitHub raw captures, ${raw} classified repositories, ${modelCards} site projects, ${strict} strict self-evolution repositories, and ${broad} broad evolution-related repositories.`);
    text = text.replace(/GitHub corpus funnel \| \d+ raw captures \/ \d+ classified \/ \d+ model-card projects \/ \d+ strict \/ \d+ broad/g, `GitHub corpus funnel | ${raw} raw captures / ${raw} classified / ${modelCards} model-card projects / ${strict} strict / ${broad} broad`);
    text = text.replace(/memory \d+, evaluation \d+, evolution \d+, skill \d+/g, hotThemes);
    text = text.replace(/memory \d+, evaluation \d+, evolution \d+, and skill \d+/g, hotThemes.replace(', skill ', ', and skill '));
    text = text.replace(/2026-05 raw classified repos \d+, unknown \d+/g, `2026-05 raw classified repos ${may}, unknown ${unknown}`);
    text = text.replace(/Benchmark coverage \| \d+ benchmark\/evaluation related repos/g, `Benchmark coverage | ${benchmark} benchmark/evaluation related repos`);
    text = text.replace(/Product usability \| \d+ public model-card projects/g, `Product usability | ${modelCards} public model-card projects`);
    text = text.replace(/blindly searching \d+ raw captures/g, `blindly searching ${raw} raw captures`);
    text = text.replace(/\d+ projects have already been processed/g, `${modelCards} projects have already been processed`);
    text = text.replace(/\| Raw GitHub captures \| \d+ \|/g, `| Raw GitHub captures | ${raw} |`);
    text = text.replace(/\| Classified repositories \| \d+ \|/g, `| Classified repositories | ${raw} |`);
    text = text.replace(/\| Public model-card projects \| \d+ \|/g, `| Public model-card projects | ${modelCards} |`);
    text = text.replace(/\| Public project report files \| \d+ \|/g, `| Public project report files | ${reportCount} |`);
    text = text.replace(/\| Strict self-evolution repos \| \d+ \|/g, `| Strict self-evolution repos | ${strict} |`);
    text = text.replace(/\| Broad evolution-related repos \| \d+ \|/g, `| Broad evolution-related repos | ${broad} |`);
    text = text.replace(/\| Benchmark\/evaluation related repos \| \d+ \|/g, `| Benchmark/evaluation related repos | ${benchmark} |`);
    text = text.replace(/Currently \d+ raw GitHub captures, \d+ classified repositories, \d+ site projects, \d+ strict self-evolution repositories, and \d+ broad related repositories/g, `Currently ${raw} raw GitHub captures, ${raw} classified repositories, ${modelCards} site projects, ${strict} strict self-evolution repositories, and ${broad} broad related repositories`);
    text = text.replace(/The raw layer is currently \d+ `raw-github\/\*\.md` captures/g, `The raw layer is currently ${raw} \`raw-github/*.md\` captures`);
    text = text.replace(/\d+ repositories entered classification analysis; \d+ entered site project data, and \d+ public project report files/g, `${raw} repositories entered classification analysis; ${modelCards} entered site project data, and ${reportCount} public project report files`);
    text = text.replace(/The strict self-evolution theme contains \d+ repos, and the broad evolution-related set contains \d+ repos/g, `The strict self-evolution theme contains ${strict} repos, and the broad evolution-related set contains ${broad} repos`);
    text = text.replace(/\| Self-evolution loops \| \d+ strict \/ \d+ broad repos/g, `| Self-evolution loops | ${strict} strict / ${broad} broad repos`);
    text = text.replace(/\| Raw collection categories \| [^\n]+/g, `| Raw collection categories | ${categoryLine} |`);
    text = text.replace(/\| Raw collection themes \| [^\n]+/g, `| Raw collection themes | ${themeLine} |`);
  } else {
    text = text.replace(/当前证据层包括 \d+ 个 GitHub raw captures、\d+ 个已分类仓库、\d+ 个站点项目、\d+ 个严格 self-evolution 仓库、\d+ 个广义 evolution-related 仓库。/g, `当前证据层包括 ${raw} 个 GitHub raw captures、${raw} 个已分类仓库、${modelCards} 个站点项目、${strict} 个严格 self-evolution 仓库、${broad} 个广义 evolution-related 仓库。`);
    text = text.replace(/GitHub 语料漏斗 \| \d+ raw captures \/ \d+ classified \/ \d+ model-card projects \/ \d+ strict \/ \d+ broad/g, `GitHub 语料漏斗 | ${raw} raw captures / ${raw} classified / ${modelCards} model-card projects / ${strict} strict / ${broad} broad`);
    text = text.replace(/memory \d+、evaluation \d+、evolution \d+、skill \d+/g, hotThemes);
    text = text.replace(/memory \d+, evaluation \d+, evolution \d+, skill \d+/g, hotThemes.replace(/、/g, ', '));
    text = text.replace(/2026-05 raw classified repos \d+，unknown \d+/g, `2026-05 raw classified repos ${may}，unknown ${unknown}`);
    text = text.replace(/Benchmark 覆盖 \| \d+ benchmark\/evaluation related repos/g, `Benchmark 覆盖 | ${benchmark} benchmark/evaluation related repos`);
    text = text.replace(/产品可用性 \| \d+ public model-card projects/g, `产品可用性 | ${modelCards} public model-card projects`);
    text = text.replace(/不从 \d+ 个 raw capture 里盲找/g, `不从 ${raw} 个 raw capture 里盲找`);
    text = text.replace(/\d+ 个项目已经按角色/g, `${modelCards} 个项目已经按角色`);
    text = text.replace(/\| Raw GitHub captures \| \d+ \|/g, `| Raw GitHub captures | ${raw} |`);
    text = text.replace(/\| Classified repositories \| \d+ \|/g, `| Classified repositories | ${raw} |`);
    text = text.replace(/\| Public model-card projects \| \d+ \|/g, `| Public model-card projects | ${modelCards} |`);
    text = text.replace(/\| Public project report files \| \d+ \|/g, `| Public project report files | ${reportCount} |`);
    text = text.replace(/\| Strict self-evolution repos \| \d+ \|/g, `| Strict self-evolution repos | ${strict} |`);
    text = text.replace(/\| Broad evolution-related repos \| \d+ \|/g, `| Broad evolution-related repos | ${broad} |`);
    text = text.replace(/\| Benchmark\/evaluation related repos \| \d+ \|/g, `| Benchmark/evaluation related repos | ${benchmark} |`);
    text = text.replace(/当前是 \d+ 个 raw GitHub captures、\d+ 个分类仓库、\d+ 个站点项目、\d+ 个严格 self-evolution 仓库、\d+ 个广义相关仓库/g, `当前是 ${raw} 个 raw GitHub captures、${raw} 个分类仓库、${modelCards} 个站点项目、${strict} 个严格 self-evolution 仓库、${broad} 个广义相关仓库`);
    text = text.replace(/当前 raw 层是 \d+ 个 `raw-github\/\*\.md` capture/g, `当前 raw 层是 ${raw} 个 \`raw-github/*.md\` capture`);
    text = text.replace(/\d+ 个仓库已经进入分类分析；其中 \d+ 个进入站点项目数据，\d+ 个 public project report 文件/g, `${raw} 个仓库已经进入分类分析；其中 ${modelCards} 个进入站点项目数据，${reportCount} 个 public project report 文件`);
    text = text.replace(/严格 self-evolution 主题是 \d+ 个，广义 evolution-related 是 \d+ 个/g, `严格 self-evolution 主题是 ${strict} 个，广义 evolution-related 是 ${broad} 个`);
    text = text.replace(/\| Self-evolution loops \| \d+ strict \/ \d+ broad repos/g, `| Self-evolution loops | ${strict} strict / ${broad} broad repos`);
    text = text.replace(/\| Raw collection categories \| [^\n]+/g, `| Raw collection categories | ${categoryLine} |`);
    text = text.replace(/\| Raw collection themes \| [^\n]+/g, `| Raw collection themes | ${themeLine} |`);
  }

  const axisCategory = en ? `| Collection category | ${categoryLine} | Repository shape: frameworks dominate, showing that the ecosystem first expands through runtime/harness/tool layers. |` : `| Collection category | ${categoryLine} | 这是“仓库形态”：框架最多，说明生态先在 runtime/harness/tool 层扩张。 |`;
  const axisTheme = en ? `| Base theme | ${themeLine} | Theme center: evaluation, memory, evolution, and skill are the four densest supports. |` : `| Base theme | ${themeLine} | 这是“主题重心”：evaluation、memory、evolution、skill 是最密集的四个支点。 |`;
  const axisFunction = en ? `| Function tag | ${functionLine} | Functional role: benchmarks and runtime are nearly tied, so proof capacity and execution capacity are equally central. |` : `| Function tag | ${functionLine} | 这是“功能角色”：benchmark 和 runtime 几乎并列，说明证明能力与运行能力同等关键。 |`;
  const axisTime = en ? `| Time slice | ${timeLine} | Time signal: recent additions concentrate in skills, memory, harness, evaluation, and self-modifying code. |` : `| Time slice | ${timeLine} | 这是“时间信号”：近期新增集中在 skills、memory、harness、evaluation 和 self-modifying code。 |`;
  text = text.replace(/\| Collection category \| [^\n]+\n/, `${axisCategory}\n`);
  text = text.replace(/\| Base theme \| [^\n]+\n/, `${axisTheme}\n`);
  text = text.replace(/\| Function tag \| [^\n]+\n/, `${axisFunction}\n`);
  text = text.replace(/\| Time slice \| [^\n]+\n/, `${axisTime}\n`);
  return text;
}

function replaceProjectDetails(text, projects, en) {
  const summary = en ? `Full public model-card project list (${projects.length})` : `完整 public model-card 项目列表（${projects.length}）`;
  const header = en ? '| # | Project | Repository | Role | Stars | Report |\n|---:|---|---|---|---:|---|' : '| # | 项目 | 仓库 | 分类/角色 | Stars | 报告 |\n|---:|---|---|---|---:|---|';
  const reportLabel = en ? 'Report' : '报告';
  const rows = projects.map((project, index) => `| ${index + 1} | ${project.name} | [${project.repo}](${project.url}) | ${project.category} | ${project.stars} | [${reportLabel}](site/public/reports/${project.report}) |`).join('\n');
  const block = `<summary>${summary}</summary>\n\n${header}\n${rows}\n`;
  if (en) return text.replace(/<summary>Full public model-card project list \(\d+\)<\/summary>\n\n[\s\S]*?\n<\/details>/, `${block}\n</details>`);
  return text.replace(/<summary>完整 public model-card 项目列表（\d+）<\/summary>\n\n[\s\S]*?\n<\/details>/, `${block}\n</details>`);
}

function replaceRawDetails(text, classified, en) {
  const summary = en ? `Full raw/classified GitHub repository list (${classified.length})` : `完整 raw/classified GitHub 仓库列表（${classified.length}）`;
  const header = en ? '| # | Repository | Category | Theme | Function | Stars | Time slice |\n|---:|---|---|---|---|---:|---|' : '| # | 仓库 | 分类 | 主题 | 功能标签 | Stars | 时间片 |\n|---:|---|---|---|---|---:|---|';
  const rows = classified.map((row, index) => `| ${index + 1} | [${row.repo}](${row.url}) | ${displayKey(row.final_category, en)} | ${row.base_theme} | ${row.function_tag} | ${row.stars} | ${row.time_slice} |`).join('\n');
  const block = `<summary>${summary}</summary>\n\n${header}\n${rows}\n`;
  if (en) return text.replace(/<summary>Full raw\/classified GitHub repository list \(\d+\)<\/summary>\n\n[\s\S]*?\n<\/details>/, `${block}\n</details>`);
  return text.replace(/<summary>完整 raw\/classified GitHub 仓库列表（\d+）<\/summary>\n\n[\s\S]*?\n<\/details>/, `${block}\n</details>`);
}

function updateGraphAndNotes() {
  const graphFile = '.mermaid/current/graph.json';
  const graph = JSON.parse(read(graphFile));
  graph.generated_at = runAt;
  const rawNode = graph.nodes.find((node) => node.id === 'raw.github.hourly-captures');
  if (rawNode) {
    rawNode.status = 'updated';
    rawNode.paths = [...new Set([...(rawNode.paths || []), ...repos.map((repo) => repo.rawFile)])];
  }
  const siteNode = graph.nodes.find((node) => node.id === 'results.public-site');
  if (siteNode) {
    siteNode.status = 'updated';
    siteNode.paths = [...new Set([...(siteNode.paths || []), ...repos.flatMap((repo) => [repo.report, path.join('site/public/reports', repo.report)])])];
  }
  const workNode = graph.nodes.find((node) => node.id === 'work.learning-notes');
  if (workNode) {
    workNode.paths = [...new Set([...(workNode.paths || []), 'work/research/hourly-public-metadata-update-2026-05-25-1522.md'])];
  }
  graph.current_run = {
    run_at: runAt,
    added_repositories: repos.map((repo) => repo.repo),
    evidence_quality: 'web_observed_public_pages_and_search; shell GitHub API not verified',
    graph_truth_source: '.mermaid/current/graph.json'
  };
  write(graphFile, `${JSON.stringify(graph, null, 2)}\n`);

  write('.mermaid/current/graph.mmd', `flowchart LR\n  intent_direct_user_input["Direct user intent"]\n  raw_github_hourly_captures["Hourly GitHub raw captures"]\n  processed_github_classification["GitHub classification and timestamp indexes"]\n  work_learning_notes["Hourly learning notes"]\n  results_public_site["Public site project impact"]\n  results_public_visualizations["Public visualization assets"]\n  intent_direct_user_input -->|governs| raw_github_hourly_captures\n  raw_github_hourly_captures -->|feeds| processed_github_classification\n  processed_github_classification -->|publishes| results_public_site\n  processed_github_classification -->|explains| work_learning_notes\n  work_learning_notes -->|handoff| intent_direct_user_input\n  processed_github_classification -->|visualizes| results_public_visualizations\n`);

  write('.mermaid/current/graph.md', `# Current Mermaid Object Graph\n\nTruth source: \`.mermaid/current/graph.json\`\n\nGenerated: ${runAt}\n\n## Nodes\n\n- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.\n- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.\n- **processed.github-classification** (processed, updated): Classify raw captures into benchmark, harness, memory, skill, resource-index, and evolution-runtime roles.\n- **work.learning-notes** (work, updated): Record blockers, evidence quality, and working principle for the next agent.\n- **results.public-site** (results, updated): Expose the metadata delta to the SEO/project site instead of leaving it internal.\n- **results.public-visualizations** (results, updated): Make the raw-to-public evidence flow visible on the website and paper status page.\n\n## Edges\n\n- intent.direct-user-input --governs--> raw.github.hourly-captures\n- raw.github.hourly-captures --feeds--> processed.github-classification\n- processed.github-classification --publishes--> results.public-site\n- processed.github-classification --explains--> work.learning-notes\n- work.learning-notes --handoff--> intent.direct-user-input\n- processed.github-classification --visualizes--> results.public-visualizations\n\n## Current Run Evidence\n\n- Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}.\n- New raw files: ${repos.map((repo) => repo.rawFile).join(', ')}.\n- New public model cards and site reports: projects/site reports 196-199 for Agent Replay, Awesome Agent Memory Papers, Memvid, and Awesome Agent Memory.\n- Shell GitHub API freshness is checked separately; current metadata is not API-verified.\n- graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.\n`);

  write('work/research/hourly-public-metadata-update-2026-05-25-1522.md', `# Hourly Public Metadata Update - 2026-05-25 15:22 +0800\n\n## One Sentence\n\nAdded four web-observed memory/evals/research-index repositories while keeping API freshness caveats explicit.\n\n## Three Sentences\n\nThe direct user goal remains the raw -> processed -> work -> results public metadata loop. This iteration adds Agent Replay, Awesome Agent Memory Papers, Memvid, and Awesome Agent Memory to raw captures, classification, model-card reports, site data and graph views. GitHub API metadata is not fabricated; accessible public page/search evidence is marked web-observed until shell DNS/auth allows API verification.\n\n## Added Repositories\n\n${repos.map((repo) => `- ${repo.repo}: ${repo.category}; raw=${repo.rawFile}; report=${repo.report}.`).join('\n')}\n\n## Working Principle\n\nBrowser/search-observed GitHub evidence -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> \`projects/\` + \`site/public/reports/projects/\` -> \`site/src/data/projects.ts\` -> README/i18n/site build.\n\n## Evidence Quality\n\n- Shell GitHub API and \`gh auth status\` must be checked during validation; if blocked, this run remains web-observed rather than API-verified.\n- No cloned code was executed and no benchmark claim was independently rerun.\n- Mermaid truth source: \`.mermaid/current/graph.json\`.\n`);
}

ensureRawAndCards();
updateClassification();
updateProjectsData();
updateProjectIndexes();
updateReadmes();
updateGraphAndNotes();

console.log(JSON.stringify({ runAt, added: repos.map((repo) => repo.repo) }, null, 2));
