import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-06-03T07:52:50+08:00';
const runDate = '2026-06-03';
const runDisplay = '2026-06-03 07:52 +0800';
const runNote = 'work/research/hourly-public-metadata-update-2026-06-03-0752.md';

const repos = [
  {
    repo: 'howdymary/hermes-agent-metaharness',
    url: 'https://github.com/howdymary/hermes-agent-metaharness',
    rawFile: 'raw-github/howdymary_hermes-agent-metaharness.md',
    report: 'projects/250-hermes-agent-metaharness-outer-loop.md',
    siteReport: 'site/public/reports/projects/250-hermes-agent-metaharness-outer-loop.md',
    category: 'Hermes Benchmark Outer-Loop Harness',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-harness',
    base_theme: 'harness',
    stack: 'Python/Hermes Benchmark Outer Loop',
    language: 'Python',
    license: 'MIT',
    stars: 88,
    forks: 9,
    commits: 11,
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence: 'web-observed GitHub page showed 88 stars, 9 forks, 11 commits, MIT license, explicit TBLite/TB2 benchmark orchestration, baseline-vs-candidate comparison, and frontier-backed deterministic search.',
    description: 'Hermes Agent Meta-Harness is a standalone outer-loop evaluator that optimizes Hermes benchmark harness candidates without modifying model weights.',
    pattern: 'select candidate -> evaluate on TBLite/TB2 -> parse archives -> compare baseline vs candidate -> update frontier',
    tags: ['hermes', 'meta-harness', 'benchmark orchestration', 'frontier tracking', 'candidate mutation'],
    bullets: [
      'The README separates Hermes inner runtime ownership from the outer-loop search and comparison logic.',
      'The current target is verifiable coding benchmarks such as TBLite and TB2, not production chat behavior.',
      'The repo exposes deterministic wrapper-mutation search, archive parsing, and frontier tracking.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把 harness evolution 明确限制在 benchmark 外环，而不是把“自进化”偷换成模型权重魔法。',
    why_en: 'It keeps harness evolution in an explicit benchmark outer loop instead of smuggling self-evolution into vague model-weight mystique.'
  },
  {
    repo: 'Arc-Computer/CL-Bench',
    url: 'https://github.com/Arc-Computer/CL-Bench',
    rawFile: 'raw-github/arc-computer_cl-bench.md',
    report: 'projects/392-arc-continual-learning-benchmark.md',
    siteReport: 'site/public/reports/projects/392-arc-continual-learning-benchmark.md',
    category: 'Stateful Continual-Learning Benchmark for LLM Agents',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-suite',
    base_theme: 'benchmark',
    stack: 'Python/SQL/CRM Workflow Benchmark',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 19,
    forks: 3,
    commits: 50,
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence: 'web-observed GitHub page showed 19 stars, 3 forks, 50 commits, Apache-2.0 license, CRM-style continual-learning workflows, 1,200+ conversations, and explicit evaluation harness support.',
    description: 'Arc-Computer/CL-Bench is a benchmark framework for evaluating LLM agent continual learning in stateful environments with CRM-style workflows.',
    pattern: 'place agents inside stateful multi-turn workflows -> mutate persistent entities under production-style constraints -> evaluate adaptation and reliability under cross-turn dependencies -> use continual-learning pressure instead of one-shot benchmark snapshots',
    tags: ['continual learning benchmark', 'crm workflow', 'stateful eval', 'tool validation', 'agent benchmark'],
    bullets: [
      'The benchmark focuses on stateful CRM workflows instead of single-turn search tasks.',
      'The README highlights 1,200+ conversations, cross-entity constraints, and deterministic reproducibility.',
      'The evaluation harness measures tool execution, response quality, and token usage across multiple backends.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把 benchmark 从一次性问答拉到有状态连续任务，更接近用户真正关心的 agent 长程可靠性。',
    why_en: 'It moves the benchmark target from one-shot QA into stateful multi-turn work, which is closer to the long-horizon reliability users actually care about.'
  },
  {
    repo: 'microsoft/SkillOpt',
    url: 'https://github.com/microsoft/SkillOpt',
    rawFile: 'raw-github/microsoft_skillopt.md',
    report: 'projects/272-skillopt-self-evolving-agent-skills.md',
    siteReport: 'site/public/reports/projects/272-skillopt-self-evolving-agent-skills.md',
    category: 'Self-Evolving Agent Skill Optimizer',
    final_category: '论文代码/paper-code',
    function_tag: 'skill-optimizer',
    base_theme: 'skill',
    stack: 'Python/HTML/Skill Training Loops',
    language: 'Python',
    license: 'MIT',
    stars: 1100,
    forks: 100,
    commits: 91,
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence: 'web-observed GitHub page showed 1.1k stars, 100 forks, 91 commits, MIT license, best_skill.md deployment artifacts, per-step output directories, and cross-harness benchmark claims across direct chat, Codex CLI, and Claude Code.',
    description: 'SkillOpt is a text-space optimizer that trains reusable natural-language skills for frozen LLM agents through trajectory-driven edits, validation-gated updates, and deployable best_skill.md artifacts.',
    pattern: 'trajectory-driven skill edits -> validation-gated updates -> epoch/batch-style skill training loop -> deployable best_skill artifacts for frozen-agent workflows',
    tags: ['agent skills', 'skill optimization', 'frozen model', 'validation gates', 'cross-harness eval'],
    bullets: [
      'The README frames SkillOpt as a text-space optimizer that improves skill files without changing the base model.',
      'The public page exposes structured outputs such as history.json, runtime_state.json, best_skill.md, and per-step artifacts.',
      'The repository claims broad benchmark coverage across direct chat, Codex CLI, and Claude Code execution harnesses.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把 skill 当作可训练、可验证、可部署的对象，是“冻结模型但持续进化 agent 行为”的关键样本。',
    why_en: 'It treats skills as trainable, verifiable, deployable artifacts, making it a key sample of evolving agent behavior without changing the base model.'
  },
  {
    repo: 'sachinsharma9780/memweave',
    url: 'https://github.com/sachinsharma9780/memweave',
    rawFile: 'raw-github/sachinsharma9780_memweave.md',
    report: 'projects/288-memweave-markdown-agent-memory.md',
    siteReport: 'site/public/reports/projects/288-memweave-markdown-agent-memory.md',
    category: 'Persistent Agent Memory Substrate',
    final_category: '框架/framework',
    function_tag: 'memory-runtime',
    base_theme: 'memory',
    stack: 'Python/SQLite/Markdown Memory Store',
    language: 'Python',
    license: 'MIT',
    stars: 39,
    forks: 2,
    commits: 57,
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence: 'web-observed GitHub page showed 39 stars, 2 forks, 57 commits, MIT license, plain-Markdown source-of-truth memory, SQLite indexing, OpenClaw inspiration, and release notes referencing LongMemEval-S benchmark work.',
    description: 'memweave is a zero-infrastructure async Python memory library for AI agents using markdown files and SQLite-backed searchable persistence.',
    pattern: 'agent writes memory markdown -> sqlite vector+fts index build -> hybrid retrieval and reranking -> persistent memory feedback for next agent turns',
    tags: ['agent memory', 'markdown memory', 'sqlite', 'hybrid retrieval', 'openclaw'],
    bullets: [
      'The README says every memory is a plain Markdown file that can be opened, edited, grepped, and version-controlled.',
      'SQLite is treated as a rebuildable derived index rather than the source of truth.',
      'The repository includes benchmarks, examples, tests, and release notes tied to LongMemEval-S work.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它把 memory 从黑盒向量库改成可 diff 的文件层，直接贴合用户要的可追溯、可审计长期记忆。',
    why_en: 'It turns memory from a black-box vector store into a diffable file layer, matching the project requirement for traceable, auditable long-term memory.'
  },
  {
    repo: 'longmans/self-evolve',
    url: 'https://github.com/longmans/self-evolve',
    rawFile: 'raw-github/longmans_self-evolve.md',
    report: 'projects/355-self-evolve-openclaw-playground.md',
    siteReport: 'site/public/reports/projects/355-self-evolve-openclaw-playground.md',
    category: 'Self-Evolving OpenClaw Workflow Playground and Benchmark Harness',
    final_category: '应用/application',
    function_tag: 'openclaw-self-evolve',
    base_theme: 'evolution',
    stack: 'TypeScript/OpenClaw Plugin/Workflow Benchmark Harness',
    language: 'TypeScript',
    license: 'MIT',
    stars: 96,
    forks: 5,
    commits: 27,
    time_slice: '2026-06',
    content_timestamp: '2026-06-03',
    evidence: 'web-observed GitHub page showed 96 stars, 5 forks, 27 commits, MIT license, OpenClaw plugin install flow, before_prompt_build and agent_end hooks, Q-value updates, episodic memories, and optional shared remote memory service.',
    description: 'longmans/self-evolve is a self-learning OpenClaw plugin that learns from feedback and turns runtime experience into reusable memory.',
    pattern: 'feedback detection -> reward scoring and learning gates -> Q-value updates plus episodic memory append -> local and remote retrieval on later turns',
    tags: ['openclaw', 'self-evolve', 'plugin', 'episodic memory', 'feedback learning'],
    bullets: [
      'The README describes the plugin as a self-learning OpenClaw extension rather than a generic playground only.',
      'It exposes before_prompt_build and agent_end hooks, learning gates, remote shared memory, and Q-value updates.',
      'The architecture centers on feedback-triggered memory growth and retrieval, not just static prompt templates.',
      'Public GitHub page evidence was observed without authenticated API access.'
    ],
    why: '它是 OpenClaw 生态里少数把反馈、记忆、Q 值更新和可安装插件打通到一条可运行闭环的样本。',
    why_en: 'It is one of the few OpenClaw examples that connects feedback, memory, Q-value updates, and an installable plugin into one runnable loop.'
  }
];

const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');
const write = (relative, value) => fs.writeFileSync(path.join(root, relative), value);

const csvEscape = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const parseProjects = (source) => {
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot parse projects array');
  return vm.runInNewContext(match[1]);
};

const rawCapture = (repo) => `---
repo: ${repo.repo}
url: ${repo.url}
content_timestamp: ${repo.content_timestamp}
time_slice: ${repo.time_slice}
timestamp_source: web_observed_public_github_page_2026_06_03
collected_at: ${runAt}
source: github
---

## GitHub - ${repo.repo}: ${repo.description}

**Source**: ${repo.url}

---

# Raw public page capture notes

This raw-style public GitHub page capture was recorded by the hourly public metadata update. Shell GitHub API access remains blocked in this workspace, so freshness is web-observed rather than API-verified.

## Visible repository metadata

- Repository: ${repo.repo}
- URL: ${repo.url}
- Stars: ${repo.stars}
- Forks: ${repo.forks}
- Commits: ${repo.commits}
- License: ${repo.license}
- Primary language / stack signal: ${repo.stack}
- Collection timestamp: ${runAt}

## Visible README / page excerpts

${repo.bullets.map((line) => `- ${line}`).join('\n')}

## Raw capture boundary

No benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.
`;

const modelCard = (repo) => `# ${repo.category} Model Card

| Field | Value |
|---|---|
| Repository | [${repo.repo}](${repo.url}) |
| Category | ${repo.category} |
| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |
| Language | ${repo.language} |
| License | ${repo.license} |
| Raw capture | ${repo.rawFile} |
| Updated by | hourly public metadata update, ${runDisplay} |

## 1. Role in Self Evolve

${repo.description} It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

${repo.pattern}

## 3. Evidence Path

${repo.evidence} This iteration keeps freshness honest: the snapshot comes from the current public GitHub page, while shell GitHub API access remained blocked in this workspace.

## 4. Teaching Use

Use this card to explain ${repo.category}: it shows how harness/runtime/benchmark or memory/skill layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.
`;

const repoTableZh = `| 仓库 | 这轮补了什么 | 为什么重要 |
|---|---|---|
${repos.map((repo) => `| [${repo.repo}](${repo.url}) | 刷新 raw snapshot、project card、site public report 与分类元数据，统一到 ${repo.content_timestamp} 的公开 GitHub 页面证据。 | ${repo.why} |`).join('\n')}`;

const repoTableEn = `| Repository | What this run repaired | Why it matters |
|---|---|---|
${repos.map((repo) => `| [${repo.repo}](${repo.url}) | Refreshed the raw snapshot, project card, site-facing public report, and classification metadata from the public GitHub page observed on ${repo.content_timestamp}. | ${repo.why_en} |`).join('\n')}`;

const updateReadmeSection = (file, heading, table) => {
  const source = read(file);
  const start = source.indexOf(`## ${heading}`);
  const end = source.indexOf('```mermaid', start);
  if (start === -1 || end === -1) throw new Error(`Failed to locate ${file} section ${heading}`);
  const next = `${source.slice(0, start)}## ${heading}\n\n${table}\n\n${source.slice(end)}`;
  write(file, next);
};

const renderGraphJson = () => ({
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
      paths: repos.map((repo) => repo.rawFile)
    },
    {
      id: 'processed.github-classification',
      title: 'GitHub classification and project cards',
      layer: 'processed',
      status: 'updated',
      paths: ['research/repo-classification.json', ...repos.map((repo) => repo.report)]
    },
    {
      id: 'results.public-site',
      title: 'Public site and report surfaces',
      layer: 'results',
      status: 'updated',
      paths: ['site/src/data/projects.ts', ...repos.map((repo) => repo.siteReport), 'README.md', 'README-ZH.md', 'README-EN.md']
    },
    {
      id: 'work.learning-note',
      title: 'Learning note and run ledger',
      layer: 'work',
      status: 'updated',
      paths: [runNote]
    }
  ],
  edges: [
    ['intent.direct-user-input', 'raw.github.hourly-captures', 'governs'],
    ['raw.github.hourly-captures', 'processed.github-classification', 'feeds'],
    ['processed.github-classification', 'results.public-site', 'publishes'],
    ['processed.github-classification', 'work.learning-note', 'explains'],
    ['work.learning-note', 'intent.direct-user-input', 'handoff']
  ],
  current_run: {
    repos: repos.map((repo) => ({
      repo: repo.repo,
      raw_capture: repo.rawFile,
      report: repo.report,
      site_report: repo.siteReport,
      stars: repo.stars,
      forks: repo.forks,
      commits: repo.commits,
      theme: repo.base_theme
    })),
    blockers: [
      'shell GitHub API access remained blocked in this workspace',
      'GitNexus CLI reports the local repo index is stale before this iteration commit'
    ],
    working_principle: 'public GitHub page evidence -> raw-github -> repo-classification/site project metadata -> README/i18n + public project reports -> indexes + analysis + site build'
  }
});

const renderGraphMd = () => `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Nodes

- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.
- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.
- **processed.github-classification** (processed, updated): Refresh classification rows and model cards for harness, benchmark, skill, memory, and self-evolution repos.
- **results.public-site** (results, updated): Push the metadata refresh into README/i18n, project reports, and site project data.
- **work.learning-note** (work, updated): Record the data flow, blockers, and repo-level evidence for the next run.

## Edges

- intent.direct-user-input --governs--> raw.github.hourly-captures
- raw.github.hourly-captures --feeds--> processed.github-classification
- processed.github-classification --publishes--> results.public-site
- processed.github-classification --explains--> work.learning-note
- work.learning-note --handoff--> intent.direct-user-input

## Current Run Evidence

- Web-observed repos: ${repos.map((repo) => repo.repo).join(', ')}.
- Refreshed raw files: ${repos.map((repo) => repo.rawFile).join(', ')}.
- Refreshed public reports: ${repos.map((repo) => repo.siteReport).join(', ')}.
- Shell GitHub API access remained blocked in this workspace, so freshness is public-page observed rather than API-verified.
- GitNexus CLI is available, but \`npx gitnexus status\` reported the local index is stale before this iteration commit.
`;

const renderGraphMmd = () => `flowchart LR
  INTENT["Direct user intent"] --> RAW["raw-github captures"]
  RAW --> PROC["repo classification + project cards"]
  PROC --> SITE["README / site data / public reports"]
  PROC --> NOTE["work learning note"]
  NOTE --> INTENT
`;

const renderRunNote = () => `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Refreshed five user-aligned GitHub evidence anchors across harness, benchmark, skill, memory, and OpenClaw self-evolution, then propagated the changes through raw, processed, and public site surfaces.

## Three Sentences

This iteration targeted repositories that sit near the user's current frontier questions: how harnesses are optimized, how continual-learning benchmarks are framed, how skills are trained, how memory stays auditable, and how OpenClaw-style self-evolution loops actually retain experience. The run updated raw captures, project cards, site-facing reports, README/i18n packet summaries, and the Mermaid truth source using current public GitHub page evidence. Freshness is explicit: shell GitHub API access remained blocked in this workspace, and GitNexus CLI is available but currently stale for symbol-level freshness on the root repository.

## Updated Repositories

| Repo | Theme | Stars/Forks | Commits | Public report |
|---|---|---:|---:|---|
${repos.map((repo) => `| \`${repo.repo}\` | ${repo.base_theme} | ${repo.stars}/${repo.forks} | ${repo.commits} | \`${repo.siteReport}\` |`).join('\n')}

## Working Principle

Public GitHub page evidence -> \`raw-github/*.md\` refresh -> \`research/repo-classification.*\` row updates -> \`projects/*.md\` and \`site/public/reports/projects/*.md\` -> \`site/src/data/projects.ts\` -> README/i18n packet + Mermaid graph -> indexes, GitHub analysis, paper-facing corpus snapshot, and site build.

## Evidence Quality

- Public GitHub page text was used as the freshness source for this iteration.
- Shell GitHub API access remained blocked in this workspace; no authenticated API freshness is claimed.
- \`npx gitnexus status\` succeeded and reported the local index is stale before this iteration commit.
- No benchmark was executed and no target repository clone was modified in this pass.
- \`.mermaid/current/graph.json\` remains the truth source; \`.md\` and \`.mmd\` are rendered views.
`;

const updateRepoClassification = () => {
  const jsonPath = 'research/repo-classification.json';
  const data = JSON.parse(read(jsonPath));
  const rows = data.rows.map((row) => {
    const repo = repos.find((item) => item.repo === row.repo);
    if (!repo) return row;
    return {
      ...row,
      stars: String(repo.stars),
      final_category: repo.final_category,
      function_tag: repo.function_tag,
      base_theme: repo.base_theme,
      stack: repo.stack,
      time_slice: repo.time_slice,
      content_timestamp: repo.content_timestamp,
      evidence: repo.evidence,
      description: repo.description
    };
  });
  write(jsonPath, `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

  const columns = Object.keys(rows[0]);
  write(
    'research/repo-classification.csv',
    `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`
  );

  const counts = new Map();
  for (const row of rows) {
    counts.set(row.final_category, (counts.get(row.final_category) || 0) + 1);
  }
  const countRows = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  const refreshed = repos
    .map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.final_category} | ${repo.base_theme} | ${repo.function_tag} | ${repo.evidence.replace(/\|/g, '/')} |`)
    .join('\n');
  write(
    'research/repo-classification.md',
    `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 刷新项\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${refreshed}\n\n本轮刷新聚焦于 harness、benchmark、skill、memory 与 OpenClaw self-evolve 五类高价值 public metadata 面，保持 raw -> processed -> results 同步。\n`
  );
};

const updateSiteProjects = () => {
  const source = read('site/src/data/projects.ts');
  const projects = parseProjects(source).map((project) => {
    const repo = repos.find((item) => item.repo === project.repo);
    if (!repo) return project;
    return {
      ...project,
      stars: repo.stars,
      forks: repo.forks,
      language: repo.language,
      license: repo.license,
      pattern: repo.pattern,
      description: repo.description,
      stack: [...new Set(String(repo.stack).split('/').filter(Boolean))],
      category: repo.category,
      localPath: repo.rawFile,
      tags: repo.tags
    };
  });
  const groupsMatch = source.match(/export const projectGroups = ([\s\S]*);\s*$/);
  if (!groupsMatch) throw new Error('Cannot parse project groups');
  const groups = groupsMatch[1];
  write(
    'site/src/data/projects.ts',
    `${source.slice(0, source.indexOf('export const projects: Project[] = '))}export const projects: Project[] = ${JSON.stringify(projects, null, 4)};\n\nexport const projectGroups = ${groups.trim()};\n`
  );
};

for (const repo of repos) {
  write(repo.rawFile, rawCapture(repo));
  write(repo.report, modelCard(repo));
  write(repo.siteReport, modelCard(repo));
}

updateSiteProjects();
updateRepoClassification();
updateReadmeSection('README.md', '本轮 GitHub Metadata 修复包', repoTableZh);
updateReadmeSection('README-ZH.md', '本轮 GitHub Metadata 修复包', repoTableZh);
updateReadmeSection('README-EN.md', 'Current GitHub Metadata Repair Packet', repoTableEn);

const graph = renderGraphJson();
write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
write('.mermaid/current/graph.md', renderGraphMd());
write('.mermaid/current/graph.mmd', renderGraphMmd());
write(runNote, renderRunNote());
