import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();

const now = new Date();
const shanghaiDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).format(now);
const shanghaiTime = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Shanghai',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
}).format(now);
const runAt = `${shanghaiDate}T${shanghaiTime}:00+08:00`;
const runDisplay = `${shanghaiDate} ${shanghaiTime} +0800`;
const runStamp = `${shanghaiDate.replace(/-/g, '-')}-${shanghaiTime.replace(':', '')}`;
const runNote = `work/research/hourly-public-metadata-update-${runStamp}.md`;

const repos = [
  {
    name: 'OpenAI Agents SDK (Python)',
    repo: 'openai/openai-agents-python',
    url: 'https://github.com/openai/openai-agents-python',
    rawFile: 'raw-github/openai_openai-agents-python.md',
    report: 'projects/408-openai-agents-python-official-sdk.md',
    category: 'Official OpenAI Agents SDK Runtime Baseline',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'harness',
    stack: 'Python/OpenAI Agents SDK/Tracing/Guardrails/Handoffs',
    language: 'Python',
    license: 'MIT',
    stars: 26705,
    forks: 4110,
    issues: 45,
    pull_requests: 68,
    latest_visible_signal: '2026-05-26',
    description:
      'OpenAI Agents SDK (Python) is the official Python baseline for multi-agent orchestration with handoffs, tool calls, guardrails, tracing, and session state.',
    pattern:
      'define agents plus tools and handoffs -> trace runs and guardrails -> keep session state and memory-like context inside SDK workflows -> reuse the official runtime as the canonical orchestration baseline for third-party swarm and harness claims',
    tags: ['openai-agents-sdk', 'official-sdk', 'python', 'orchestration', 'guardrails'],
    evidence:
      'web-observed GitHub repo page showed 26,705 stars, 4,110 forks, 45 issues, 68 pull requests, MIT license, and latest visible update on 2026-05-26; README navigation exposed models, tools, handoffs, guardrails, tracing, MCP, voice, sessions, agents-as-tools, and context-management docs.',
    excerpts: [
      'The public repo page described a lightweight yet powerful framework for multi-agent workflows and linked official docs.',
      'Visible top-level navigation exposed guides for models, tools, handoffs, guardrails, tracing, voice, sessions, MCP, context management, and orchestrating via code.',
      'The repo therefore serves as the canonical upstream runtime baseline when comparing third-party swarm, harness, and skill systems built around the OpenAI Agents SDK.',
      'Freshness remains web-observed rather than GitHub-API verified because shell API access and local gh auth are blocked in this workspace.'
    ]
  },
  {
    name: 'OpenAI Agents SDK (JS)',
    repo: 'openai/openai-agents-js',
    url: 'https://github.com/openai/openai-agents-js',
    rawFile: 'raw-github/openai_openai-agents-js.md',
    report: 'projects/409-openai-agents-js-official-sdk.md',
    category: 'Official OpenAI Agents SDK TypeScript Baseline',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'harness',
    stack: 'TypeScript/OpenAI Agents SDK/Tracing/Guardrails/Handoffs',
    language: 'TypeScript',
    license: 'MIT',
    stars: 3132,
    forks: 788,
    issues: 34,
    pull_requests: 21,
    latest_visible_signal: '2026-05-26',
    description:
      'OpenAI Agents SDK (JS) is the official TypeScript baseline for building agent orchestration loops with tools, handoffs, guardrails, realtime hooks, and tracing.',
    pattern:
      'compose agents in TypeScript -> attach tools, handoffs, and realtime transport -> trace execution and guardrails -> use the official JS runtime as the canonical baseline for browser, frontend, and full-stack swarm orchestration claims',
    tags: ['openai-agents-sdk', 'official-sdk', 'typescript', 'realtime', 'orchestration'],
    evidence:
      'web-observed GitHub repo page showed 3,132 stars, 788 forks, 34 issues, 21 pull requests, MIT license, and latest visible update on 2026-05-26; README navigation exposed agents, tools, handoffs, guardrails, realtime, voice, tracing, sessions, MCP, and advanced usage docs.',
    excerpts: [
      'The public repo page described a framework for building agentic AI apps in TypeScript and JavaScript with the OpenAI Responses API and Chat Completions.',
      'Visible docs tabs exposed tools, handoffs, guardrails, agents-as-tools, sessions, tracing, MCP, realtime, voice, and React integrations.',
      'This makes the JS package the canonical upstream baseline for frontend-adjacent or full-stack agent orchestrators that claim OpenAI Agents SDK compatibility.',
      'Freshness remains web-observed rather than GitHub-API verified because shell API access and local gh auth are blocked in this workspace.'
    ]
  }
];

const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const write = (rel, text) => fs.writeFileSync(path.join(root, rel), text);

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
  return `---
repo: ${repo.repo}
url: ${repo.url}
content_timestamp: ${repo.latest_visible_signal}
time_slice: ${repo.latest_visible_signal.slice(0, 7)}
timestamp_source: web_observed_public_github_page_2026_06_08
collected_at: ${runAt}
source: github
---

## GitHub - ${repo.repo}: ${repo.description}

**Source**: ${repo.url}

---

# Raw public page capture notes

This raw-style public GitHub page capture was refreshed by the hourly public metadata update. Shell GitHub API access remained blocked in this workspace, so freshness is web-observed rather than API-verified.

## Visible repository metadata

- Repository: ${repo.repo}
- URL: ${repo.url}
- Stars: ${repo.stars}
- Forks: ${repo.forks}
- Issues: ${repo.issues}
- Pull requests: ${repo.pull_requests}
- License: ${repo.license}
- Primary language / stack signal: ${repo.stack}
- Latest visible dated signal: ${repo.latest_visible_signal}
- Collection timestamp: ${runAt}

## Visible README / page excerpts

${repo.excerpts.map((line) => `- ${line}`).join('\n')}

## Raw capture boundary

No benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.
`;
}

function modelCard(repo) {
  return `# ${repo.name} Model Card

| Field | Value |
|---|---|
| Repository | [${repo.repo}](${repo.url}) |
| Category | ${repo.category} |
| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |
| Issues / PRs snapshot | ${repo.issues} / ${repo.pull_requests} |
| Language | ${repo.language} |
| License | ${repo.license} |
| Latest visible dated signal | ${repo.latest_visible_signal} |
| Raw capture | ${repo.rawFile} |
| Updated by | hourly public metadata update, ${runDisplay} |

## 1. Role in Self Evolve

${repo.description} It matters because third-party swarm, harness, memory, and skill claims need a canonical upstream orchestration/runtime baseline before they can be compared honestly.

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence} This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on ${repo.latest_visible_signal}, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain ${repo.category}: it gives the corpus a canonical upstream baseline for agent orchestration, guardrails, tracing, and tool/handoff design before downstream systems add their own memory, benchmark, or self-improvement layers.

## 5. Limits

The repository was not cloned or executed in this iteration; no SDK example, agent loop, benchmark, or realtime flow was run locally. Counts and claims are visible public-page signals unless independently revalidated later.
`;
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
  return [...counts.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));
}

function updateClassification() {
  const source = JSON.parse(read('research/repo-classification.json'));
  const rows = source.rows || [];
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
    time_slice: repo.latest_visible_signal.slice(0, 7),
    content_timestamp: repo.latest_visible_signal,
    evidence: repo.evidence,
    description:
      repo.repo === 'openai/openai-agents-python'
        ? 'OpenAI Agents SDK (Python) 是官方 Python orchestration baseline：把 handoffs、tools、guardrails、tracing 和 sessions 作为上游标准面，供 downstream swarm/harness/self-improvement 系统对照。'
        : 'OpenAI Agents SDK (JS) 是官方 TypeScript orchestration baseline：把 tools、handoffs、guardrails、realtime、tracing 和 sessions 作为前端/全栈 agent runtime 的上游标准面。'
  }));
  const byRepo = new Map(rows.map((row) => [String(row.repo).toLowerCase(), row]));
  for (const row of additions) byRepo.set(String(row.repo).toLowerCase(), row);
  const nextRows = [...byRepo.values()].sort((a, b) => String(a.repo).localeCompare(String(b.repo)));
  write('research/repo-classification.json', `${JSON.stringify({ generated_at: runAt, rows: nextRows }, null, 2)}\n`);

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
  write(
    'research/repo-classification.csv',
    `${columns.join(',')}\n${nextRows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`
  );

  const counts = countBy(nextRows, (row) => row.final_category);
  const fullRows = nextRows
    .map(
      (row, index) =>
        `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`
    )
    .join('\n');
  write(
    'research/repo-classification.md',
    `# Repo 自动分类与技术栈分析（raw-github ${nextRows.length}）

- generated_at: ${runAt}
- companion_csv: \`research/repo-classification.csv\`
- companion_json: \`research/repo-classification.json\`

## 分类计数

| Category | Count |
|---|---:|
${counts.map((row) => `| ${row.key} | ${row.count} |`).join('\n')}

## 本轮 hourly public metadata 增量

| Repo | Category | Theme | Function | Evidence |
|---|---|---|---|---|
${additions.map((row) => `| [${row.repo}](${row.url}) | ${row.final_category} | ${row.base_theme} | ${row.function_tag} | ${String(row.evidence).replace(/\|/g, '/')} |`).join('\n')}

本轮新增 ${repos.map((repo) => repo.repo).join('、')} raw captures，并同步提升为 official Agents SDK baseline 的 public site / model-card 覆盖。GitHub API 未验证 freshness 的原因记录在 Mermaid graph 与 work notes 中。

## 完整分类表

| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |
|---:|---|---:|---|---|---|---|---|---|---|---|
${fullRows}
`
  );
}

function updateSiteProjects() {
  const file = 'site/src/data/projects.ts';
  const source = read(file);
  const prefixMatch = source.match(/^([\s\S]*?export const projects: Project\[\] = )/);
  const projects = parseProjects(source);
  const suffixMatch = source.match(/\nexport const projectGroups = [\s\S]*$/);
  if (!prefixMatch) throw new Error('Cannot find projects export prefix');
  if (!suffixMatch) throw new Error('Cannot find projectGroups export');
  const byRepo = new Map(projects.map((project) => [String(project.repo).toLowerCase(), project]));

  for (const repo of repos) {
    byRepo.set(repo.repo.toLowerCase(), {
      name: repo.name,
      repo: repo.repo,
      url: repo.url,
      description: repo.description,
      stack: repo.stack.split('/'),
      category: repo.category,
      status: 'candidate',
      stars: repo.stars,
      forks: repo.forks,
      lastPushed: `${repo.latest_visible_signal}T00:00:00Z`,
      language: repo.language,
      license: repo.license,
      report: repo.report,
      pattern: repo.pattern,
      tags: repo.tags,
      localPath: repo.rawFile
    });
  }

  const existingRepos = projects.map((project) => String(project.repo).toLowerCase());
  const nextProjects = projects.filter((project) => !repos.some((repo) => repo.repo.toLowerCase() === String(project.repo).toLowerCase()));
  for (const key of repos.map((repo) => repo.repo.toLowerCase())) {
    nextProjects.push(byRepo.get(key));
  }

  write(file, `${prefixMatch[1]}${JSON.stringify(nextProjects, null, 4)};\n${suffixMatch[0]}`);
}

function updateReadmes() {
  const zhRows = [
    '| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | official Python Agents SDK baseline | 它补的是 official upstream runtime 这一层：让第三方 swarm、harness、memory 和 skill 系统回到同一套 canonical handoffs、tools、guardrails、tracing 语义上比较。 | [KNOWN] official repo/source-scoped；上游 SDK 迭代快，结论需随 release 复核。 |',
    '| [openai/openai-agents-js](https://github.com/openai/openai-agents-js) | official TypeScript Agents SDK baseline | 它把前端/全栈 agent 编排的 canonical baseline 补齐，帮助我们区分“SDK 原生能力”与“框架自行增加的 memory、workflow、realtime 包装”。 | [KNOWN] official repo/source-scoped；JS/runtime capability 仍需 runs/examples 复核。 |'
  ].join('\n');
  const enRows = [
    '| [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | Official Python Agents SDK baseline | It restores the official upstream runtime layer so third-party swarms, harnesses, memory layers, and skill systems can be compared against one canonical set of handoffs, tools, guardrails, and tracing semantics. | [KNOWN] official-repo/source-scoped; upstream SDK conclusions need release-by-release rechecks. |',
    '| [openai/openai-agents-js](https://github.com/openai/openai-agents-js) | Official TypeScript Agents SDK baseline | It fills the canonical frontend/full-stack orchestration baseline, helping separate what comes from the SDK itself versus what downstream frameworks add around memory, workflow, or realtime wrappers. | [KNOWN] official-repo/source-scoped; JS/runtime capability still needs runs/examples review. |'
  ].join('\n');

  for (const file of ['README.md', 'README-ZH.md']) {
    let text = read(file);
    text = text.replace('## 近期证据更新（2026-06-05）', '## 近期证据更新（2026-06-08）');
    text = text.replace(
      '本轮不是简单“刷新元数据”，而是把 production swarm、coding-agent harness、memory benchmark、OpenAI Agents SDK orchestrator、continual skill-memory paper code 和轻量 memory/MCP/skill runtime 一起拉回同一条证据链。下面每个仓库都只回答一个问题：它补上了哪类判断证据。',
      '本轮不是简单“刷新元数据”，而是把 production swarm、coding-agent harness、memory benchmark、OpenAI Agents SDK orchestrator、official OpenAI Agents SDK Python/JS baseline、continual skill-memory paper code 和轻量 memory/MCP/skill runtime 一起拉回同一条证据链。下面每个仓库都只回答一个问题：它补上了哪类判断证据。'
    );
    const anchor =
      '| [VRSEN/agency-swarm](https://github.com/VRSEN/agency-swarm) | OpenAI Agents SDK orchestration baseline | 它回答的是 production multi-agent 编排在 2026 年已经如何从 Assistants API 迁移到 Agents SDK，并保留通信流、工具和状态持久化。 | [KNOWN] public repo/source-scoped；SDK 迁移结论需随 upstream 更新复核。 |';
    if (!text.includes('[openai/openai-agents-python](https://github.com/openai/openai-agents-python)')) {
      text = text.replace(anchor, `${anchor}\n${zhRows}`);
    }
    write(file, text);
  }

  let en = read('README-EN.md');
  en = en.replace('## Recent Evidence Updates (2026-06-05)', '## Recent Evidence Updates (2026-06-08)');
  en = en.replace(
    'This update is not just a metadata refresh. It pulls a production swarm, a coding-agent harness, a safety-sensitive memory benchmark, an OpenAI Agents SDK orchestrator, continual skill-memory paper code, and a lightweight memory/MCP/skill runtime back onto one evidence chain.',
    'This update is not just a metadata refresh. It pulls a production swarm, a coding-agent harness, a safety-sensitive memory benchmark, an OpenAI Agents SDK orchestrator, the official OpenAI Agents SDK Python/JS baselines, continual skill-memory paper code, and a lightweight memory/MCP/skill runtime back onto one evidence chain.'
  );
  const enAnchor =
    '| [VRSEN/agency-swarm](https://github.com/VRSEN/agency-swarm) | OpenAI Agents SDK orchestration baseline | It shows how a 2026 production multi-agent orchestrator has already moved from Assistants-era framing to Agents SDK-era communication, tools, and persistence. | [KNOWN] public-repo/source-scoped; SDK migration wording needs upstream rechecks. |';
  if (!en.includes('[openai/openai-agents-python](https://github.com/openai/openai-agents-python)')) {
    en = en.replace(enAnchor, `${enAnchor}\n${enRows}`);
  }
  write('README-EN.md', en);
}

function updateContentIndex() {
  const rawCount = fs
    .readdirSync(path.join(root, 'raw-github'))
    .filter((name) => name.endsWith('.md') && name !== 'INDEX.md').length;
  let text = read('CONTENT_INDEX.md');
  text = text.replace(
    /\| GitHub 数据分析 \| \[analysis\/github-project-data-analysis\.md\]\(analysis\/github-project-data-analysis\.md\) \| 覆盖 \d+ 个 raw GitHub captures、分类、进化相关、时间序列 \|/,
    `| GitHub 数据分析 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) | 覆盖 ${rawCount} 个 raw GitHub captures、分类、进化相关、时间序列 |`
  );
  write('CONTENT_INDEX.md', text);
}

function updateGraph() {
  const graphPath = '.mermaid/current/graph.json';
  const graph = JSON.parse(read(graphPath));
  graph.generated_at = runAt;
  const nodeById = new Map((graph.nodes || []).map((node) => [node.id, node]));
  if (nodeById.has('raw.github.hourly-captures')) {
    nodeById.get('raw.github.hourly-captures').status = 'updated';
    nodeById.get('raw.github.hourly-captures').paths = repos.map((repo) => repo.rawFile);
  }
  if (nodeById.has('processed.github-classification')) {
    nodeById.get('processed.github-classification').status = 'updated';
    nodeById.get('processed.github-classification').paths = [
      'research/repo-classification.json',
      'analysis/github-project-data-analysis.md',
      ...repos.map((repo) => repo.report)
    ];
  }
  if (nodeById.has('results.public-site')) {
    nodeById.get('results.public-site').status = 'updated';
    nodeById.get('results.public-site').paths = [
      'site/src/data/projects.ts',
      ...repos.map((repo) => path.join('site/public/reports', repo.report)),
      'README.md',
      'README-ZH.md',
      'README-EN.md',
      'CONTENT_INDEX.md'
    ];
  }
  if (nodeById.has('work.learning-note')) {
    nodeById.get('work.learning-note').status = 'updated';
    nodeById.get('work.learning-note').paths = [runNote];
  }
  graph.current_run = {
    repos: repos.map((repo) => ({
      repo: repo.repo,
      raw_capture: repo.rawFile,
      report: repo.report,
      site_report: path.join('site/public/reports', repo.report),
      stars: repo.stars,
      forks: repo.forks,
      issues: repo.issues,
      pull_requests: repo.pull_requests,
      last_visible_commit_date: repo.latest_visible_signal,
      theme: repo.base_theme
    })),
    blockers: [
      'Shell curl to api.github.com fails with DNS resolution in this workspace, so GitHub API freshness is unavailable.',
      'gh auth status reports the default github.com token for Shiyao-Huang is invalid.',
      'GitNexus MCP tools are not exposed in this session; local gitnexus CLI works, but npx gitnexus status timed out while the direct binary succeeded.',
      'Public copy review gate still lacks actual 3-5 reader/editor agents plus 3 academic agents, so README/site copy quality remains a declared gap rather than a completed gate.'
    ],
    working_principle:
      'public GitHub repo pages -> raw-github captures -> research/repo-classification -> output/raw-github-timestamp-index -> analysis/github-project-data-analysis -> README/i18n + site/src/data/projects.ts + public reports -> paper/site build'
  };
  write(graphPath, `${JSON.stringify(graph, null, 2)}\n`);

  const md = `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Current Run Repositories

${repos
  .map(
    (repo) =>
      `- **${repo.repo}** -> raw \`${repo.rawFile}\` -> card \`${repo.report}\` -> site report \`site/public/reports/${path.basename(repo.report)}\``
  )
  .join('\n')}

## Working Principle

GitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> README/i18n + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- Shell GitHub API access is blocked by DNS resolution failure.
- Local \`gh\` auth is invalid, so no authenticated freshness claims were made.
- Local \`gitnexus status\` succeeds, but \`npx gitnexus status\` timed out in this workspace.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
`;
  write('.mermaid/current/graph.md', md);

  const mmd = `graph TD
  intent["Direct user intent"] --> raw["raw-github hourly captures"]
  raw --> processed["repo classification + GitHub analysis"]
  processed --> results["README/site/public reports"]
  processed --> note["work learning note"]
  note --> intent
`;
  write('.mermaid/current/graph.mmd', `${mmd}\n`);
}

function writeWorkNote() {
  const note = `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Added the official OpenAI Agents SDK Python and JavaScript baselines as fresh raw captures and propagated them through classification, project cards, site reports, README/i18n, Mermaid graph, and downstream build surfaces.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds \`${repos[0].repo}\` and \`${repos[1].repo}\` so third-party swarm, harness, memory, and skill systems can be compared against a canonical upstream orchestration baseline instead of only against one another. The run keeps freshness honest: GitHub evidence is web-observed, shell GitHub API access is blocked by DNS, and local \`gh\` authentication is invalid.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.category} | \`${repo.rawFile}\` | \`site/public/reports/${path.basename(repo.report)}\` |`).join('\n')}

## Working Principle

Public GitHub repo pages -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> README/i18n -> \`site/src/data/projects.ts\` -> \`site/public/reports/projects/\` -> paper/site build.

## Evidence Quality

- GitHub page evidence is current-web-observed, not authenticated-API verified.
- \`curl -I https://api.github.com/rate_limit\` fails with DNS resolution in this workspace.
- \`gh auth status\` reports the default token for \`Shiyao-Huang\` is invalid.
- \`gitnexus status\` works via the direct binary and reports the repo index at commit \`326b47d\`; \`npx gitnexus status\` timed out after 20 seconds.
- Mermaid truth source remains \`.mermaid/current/graph.json\`; \`.md\` and \`.mmd\` are rendered views.
- Public copy review gate remains incomplete because the required reader/editor and academic agent reviews were not actually executed in this session.

## Validation Commands For This Iteration

- \`node scripts/generate_project_indexes.mjs\`
- \`python3 scripts/enforce_raw_timestamps.py\`
- \`node scripts/analyze_github_project_data.mjs\`
- \`(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)\`
- \`(cd site && npm run build)\`
`;
  write(runNote, note);
}

ensureRawAndCards();
updateClassification();
updateSiteProjects();
updateReadmes();
updateContentIndex();
updateGraph();
writeWorkNote();
