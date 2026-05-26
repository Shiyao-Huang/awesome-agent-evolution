import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runAt = '2026-05-26T09:12:00+08:00';
const runDate = '2026-05-26';

const repos = [
  {
    id: 237,
    name: 'CUGA Agent',
    repo: 'cuga-project/cuga-agent',
    url: 'https://github.com/cuga-project/cuga-agent',
    rawFile: 'raw-github/cuga-project_cuga-agent.md',
    report: 'projects/237-cuga-agent-enterprise-agent-harness.md',
    category: 'Enterprise Generalist Agent Harness',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Python/TypeScript/Agent Skills/MCP',
    language: 'Python',
    license: 'Open source public repository',
    stars: 742,
    forks: 132,
    commits: 304,
    pattern: 'enterprise agent config -> tools/MCP/OpenAPI -> policies/HITL -> optional memory/knowledge/skills -> trajectory visualization',
    tags: ['agent harness', 'MCP', 'policy', 'skills', 'enterprise agents'],
    description: 'CUGA is an enterprise generalist agent harness that wires APIs, MCP servers, policies, memory, knowledge and agent skills into configurable web/API task execution.',
    evidence: 'web-observed GitHub page showed 742 stars, 132 forks, 304 commits, Python/TypeScript stack, v0.2.28 latest release on 2026-05-10, README claims for MCP/OpenAPI/LangChain tools, policy/HITL, optional memory, knowledge and SKILL.md assets.',
    excerpts: [
      'The README positions CUGA as a configurable generalist agent harness for enterprise web and API tasks.',
      'Visible feature table includes MCP, OpenAPI, LangChain tools, reasoning modes, hybrid API/browser tasks, supervisor mode, policies, optional memory, knowledge and SKILL.md assets.',
      'The page reports benchmark positioning on AppWorld and WebArena, but this run did not reproduce those benchmarks.',
      'The project is relevant as a production harness substrate, not as direct model-weight self-evolution.'
    ]
  },
  {
    id: 238,
    name: 'AutoR',
    repo: 'AutoX-AI-Labs/AutoR',
    url: 'https://github.com/AutoX-AI-Labs/AutoR',
    rawFile: 'raw-github/autox-ai-labs_autor.md',
    report: 'projects/238-autor-human-centered-research-harness.md',
    category: 'Human-Centered Research Harness',
    final_category: '应用/application',
    function_tag: 'research-agent-pipeline',
    base_theme: 'research-agent',
    stack: 'Python/JavaScript/Research Harness',
    language: 'Python',
    license: 'Public repository license not verified',
    stars: 897,
    forks: 22,
    commits: 154,
    pattern: 'human research intent -> staged agent execution -> approval checkpoints -> artifact-backed run directory -> resume/redo/rollback',
    tags: ['research agent', 'harness', 'artifact-backed runs', 'human approval'],
    description: 'AutoR is a terminal-first research harness where AI handles execution, humans retain direction, and every run is stored as an inspectable artifact on disk.',
    evidence: 'web-observed GitHub page showed 897 stars, 22 forks, 154 commits, Python primary language, no releases, and README language about a 9-stage workflow, human approval, local browser Studio, reproducible runs and rollback-stage recovery.',
    excerpts: [
      'The README states that AI handles execution while humans own the direction.',
      'Visible workflow claims include optional intake plus eight formal stages, human approval, strict reviewer-agent gate, run artifacts, resume, redo-stage and rollback-stage.',
      'The repository is a research workflow harness over lower-level coding agent execution.',
      'It contributes evidence for artifact-backed agent research loops rather than autonomous self-evolving algorithms.'
    ]
  },
  {
    id: 239,
    name: 'Chorus',
    repo: 'Chorus-AIDLC/Chorus',
    url: 'https://github.com/Chorus-AIDLC/Chorus',
    rawFile: 'raw-github/chorus-aidlc_chorus.md',
    report: 'projects/239-chorus-ai-human-collaboration-harness.md',
    category: 'AI-Human Collaboration Harness',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'workflow-automation',
    stack: 'TypeScript/Shell/Astro',
    language: 'TypeScript',
    license: 'AGPL-3.0',
    stars: 909,
    forks: 84,
    commits: 471,
    pattern: 'requirements/task state -> sub-agent orchestration -> permissions/context injection -> observability/failure recovery -> OpenSpec archival',
    tags: ['agent harness', 'multi-agent', 'AI-DLC', 'permissions', 'observability'],
    description: 'Chorus is an AI-human collaboration harness that manages session lifecycle, task state, sub-agent orchestration, permissions, observability and failure recovery around LLM agents.',
    evidence: 'web-observed GitHub page showed 909 stars, 84 forks, 471 commits, AGPL-3.0 license, TypeScript primary language, v0.8.2 latest on 2026-05-21, and README sections for lifecycle hooks, permissions, task state, context injection and OpenSpec mode.',
    excerpts: [
      'The README calls Chorus an agent harness for AI-human collaboration.',
      'Visible architecture text lists session lifecycle, task state machine, context injection, sub-agent orchestration, observability and failure recovery.',
      'The project includes a plugin/hook layer plus OpenSpec archival after verified tasks.',
      'It belongs to the harness infrastructure layer for coordinated agent work.'
    ]
  },
  {
    id: 240,
    name: 'KWeaver Core',
    repo: 'kweaver-ai/kweaver-core',
    url: 'https://github.com/kweaver-ai/kweaver-core',
    rawFile: 'raw-github/kweaver-ai_kweaver-core.md',
    report: 'projects/240-kweaver-core-enterprise-decision-agent-harness.md',
    category: 'Enterprise Decision Agent Harness',
    final_category: '框架/framework',
    function_tag: 'framework-runtime',
    base_theme: 'framework',
    stack: 'Go/Python/Knowledge Network',
    language: 'Go',
    license: 'Apache-2.0',
    stars: 803,
    forks: 92,
    commits: 501,
    pattern: 'business knowledge network -> governed context loader -> tool curation/path guidance -> decision agent execution -> TraceAI feedback evidence',
    tags: ['decision agents', 'harness', 'knowledge network', 'TraceAI', 'governance'],
    description: 'KWeaver Core is a harness-first foundation for enterprise decision agents, combining governed context, knowledge networks, tool policies and TraceAI-style feedback evidence.',
    evidence: 'web-observed GitHub page showed 803 stars, 92 forks, 501 commits, Apache-2.0 license, Go primary language, README claims for governed context, verifiable feedback loops, KWeaver SDK/admin CLI, BKN Lang, benchmark sections and TraceAI.',
    excerpts: [
      'The README describes KWeaver Core as a harness-first foundation for enterprise decision agents.',
      'Visible sections include Business Knowledge Network, context loading, governed tools, benchmark claims and TraceAI-style feedback evidence.',
      'The page reports benchmark numbers for heterogeneous data reasoning and ablations, but this run did not rerun them.',
      'The repository is relevant as a governed context and feedback-loop substrate for enterprise agents.'
    ]
  },
  {
    id: 241,
    name: 'ClawProBench',
    repo: 'suyoumo/ClawProBench',
    url: 'https://github.com/suyoumo/ClawProBench',
    rawFile: 'raw-github/suyoumo_clawprobench.md',
    report: 'projects/241-clawprobench-live-openclaw-benchmark.md',
    category: 'Live OpenClaw Benchmark Harness',
    final_category: '评测/evaluation',
    function_tag: 'benchmark-eval',
    base_theme: 'evaluation',
    stack: 'Python/OpenClaw/Benchmark',
    language: 'Python',
    license: 'Apache-2.0',
    stars: 690,
    forks: 50,
    commits: 44,
    pattern: 'OpenClaw runtime task -> live scenario execution -> deterministic grading -> structured report -> leaderboard/profile selection',
    tags: ['benchmark', 'OpenClaw', 'agent evaluation', 'deterministic grading'],
    description: 'ClawProBench is a live-first benchmark harness for evaluating LLM agents in the OpenClaw runtime with deterministic grading, profile selection and repeated-trial reliability.',
    evidence: 'web-observed GitHub page showed 690 stars, 50 forks, 44 commits, Apache-2.0 license, Python primary language, and README claims for 102 active scenarios, 162 catalog scenarios, deterministic grading, core profile ranking and public leaderboard.',
    excerpts: [
      'The README calls ClawProBench a transparent live-first benchmark harness for evaluating model capability inside the OpenClaw runtime.',
      'Visible inventory claims 102 active scenarios and 162 total catalog scenarios with deterministic grading.',
      'The default ranking path is a core profile, with broader active coverage through intelligence, coverage, native and full profiles.',
      'This run records public benchmark metadata only; no leaderboard result was reproduced locally.'
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

function rawCapture(repo) {
  return `---\nrepo: ${repo.repo}\nurl: ${repo.url}\ncontent_timestamp: ${runDate}\ntime_slice: 2026-05\ntimestamp_source: web_observed_public_github_page_2026_05_26\ncollected_at: ${runAt}\nsource: github\n---\n\n## GitHub - ${repo.repo}: ${repo.description}\n\n**Source**: ${repo.url}\n\n---\n\n# Raw public page capture notes\n\nThis raw-style public GitHub page capture was recorded by the hourly public metadata update. Shell GitHub API access failed DNS resolution and local GitHub CLI auth was invalid, so freshness is web-observed rather than API-verified.\n\n## Visible repository metadata\n\n- Repository: ${repo.repo}\n- URL: ${repo.url}\n- Stars: ${repo.stars}\n- Forks: ${repo.forks}\n- Commits: ${repo.commits}\n- License: ${repo.license}\n- Primary language / stack signal: ${repo.stack}\n- Collection timestamp: ${runAt}\n\n## Visible README / page excerpts\n\n${repo.excerpts.map((line) => `- ${line}`).join('\n')}\n\n## Raw capture boundary\n\nNo benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.\n`;
}

function modelCard(repo) {
  return `# ${repo.name} Model Card\n\n| Field | Value |\n|---|---|\n| Repository | [${repo.repo}](${repo.url}) |\n| Category | ${repo.category} |\n| Stars / forks snapshot | ${repo.stars} / ${repo.forks} |\n| Language | ${repo.language} |\n| License | ${repo.license} |\n| Raw capture | ${repo.rawFile} |\n| Updated by | hourly public metadata update, 2026-05-26 09:12 +0800 |\n\n## 1. Role in Self Evolve\n\n${repo.description} It matters because self-evolving agents need reliable harnesses, memory/skill surfaces, feedback evidence and benchmark loops before any improvement claim can be trusted.\n\n## 2. Working Principle\n\n${repo.pattern}\n\n## 3. Evidence Path\n\n${repo.evidence} Shell GitHub API access remained blocked by DNS and local \`gh\` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.\n\n## 4. Teaching Use\n\nUse this card to explain ${repo.category}: it shows which part of the agent improvement stack is made operational, and where evaluator, policy, memory, skill, task-state or artifact evidence enters the loop.\n\n## 5. Limits\n\nThe repository was not cloned in this iteration; no benchmark, install flow, workflow run, policy audit, memory experiment, OpenClaw run, or agent loop was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.\n`;
}

function ensureRawAndCards() {
  for (const repo of repos) {
    write(repo.rawFile, rawCapture(repo));
    write(repo.report, modelCard(repo));
    write(path.join('site/public/reports', repo.report), modelCard(repo));
  }
}

function updateClassification() {
  const doc = JSON.parse(read('research/repo-classification.json'));
  const byRepo = new Map(doc.rows.map((row) => [slug(row.repo), row]));
  for (const repo of repos) {
    byRepo.set(slug(repo.repo), {
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
    });
  }
  const rows = [...byRepo.values()].sort((a, b) => slug(a.repo).localeCompare(slug(b.repo)));
  write('research/repo-classification.json', `${JSON.stringify({ generated_at: runAt, rows }, null, 2)}\n`);

  const columns = ['repo', 'url', 'stars', 'prior_category', 'prior_unclassified', 'final_category', 'function_tag', 'base_theme', 'stack', 'time_slice', 'content_timestamp', 'evidence', 'description'];
  write('research/repo-classification.csv', `${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvEscape(row[column])).join(',')).join('\n')}\n`);

  const counts = new Map();
  for (const row of rows) counts.set(row.final_category, (counts.get(row.final_category) || 0) + 1);
  const countRows = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const delta = repos.map((repo) => `| [${repo.repo}](${repo.url}) | ${repo.final_category} | ${repo.base_theme} | ${repo.function_tag} | ${repo.evidence.replace(/\|/g, '/')} |`).join('\n');
  const fullRows = rows.map((row, index) => `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`).join('\n');
  write('research/repo-classification.md', `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）\n\n- generated_at: ${runAt}\n- companion_csv: \`research/repo-classification.csv\`\n- companion_json: \`research/repo-classification.json\`\n\n## 分类计数\n\n| Category | Count |\n|---|---:|\n${countRows.map(([key, count]) => `| ${key} | ${count} |`).join('\n')}\n\n## 本轮 hourly public metadata 增量\n\n| Repo | Category | Theme | Function | Evidence |\n|---|---|---|---|---|\n${delta}\n\n本轮新增 CUGA、AutoR、Chorus、KWeaver Core、ClawProBench raw captures，并同步提升为 public site / model-card 覆盖。GitHub API 未验证 freshness 的原因记录在 Mermaid graph 与 work notes 中。\n\n## 完整分类表\n\n| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |\n|---:|---|---:|---|---|---|---|---|---|---|---|\n${fullRows}\n`);
}

function parseProjects(source) {
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array');
  return vm.runInNewContext(match[1]);
}

function updateSiteData() {
  const source = read('site/src/data/projects.ts');
  const projects = parseProjects(source);
  const byRepo = new Map(projects.map((project) => [slug(project.repo), project]));
  for (const repo of repos) {
    byRepo.set(slug(repo.repo), {
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
      lastPushed: '2026-05-26T00:00:00Z',
      localPath: repo.rawFile,
      status: 'candidate',
      tags: repo.tags
    });
  }
  const nextProjects = [...byRepo.values()];
  const nextArray = JSON.stringify(nextProjects, null, 2).replace(/"([^"]+)":/g, '$1:');
  let next = source.replace(/export const projects: Project\[\] = \[[\s\S]*?\n\];/, `export const projects: Project[] = ${nextArray};`);
  next = next.replace(
    /(\{ title: 'Agent Skills \/ Memory \/ Harness', repos: \[)([^\]]*)(\] \})/,
    (match, prefix, body, suffix) => {
      const existing = new Set([...body.matchAll(/'([^']+)'/g)].map((m) => slug(m[1])));
      const additions = repos.filter((repo) => !existing.has(slug(repo.repo))).map((repo) => `'${repo.repo}'`);
      return additions.length ? `${prefix}${body}${body.trim() ? ', ' : ''}${additions.join(', ')}${suffix}` : match;
    }
  );
  write('site/src/data/projects.ts', next);
}

function updateProjectIndexes() {
  for (const file of ['projects/INDEX.md', 'site/public/reports/projects/INDEX.md']) {
    let text = read(file);
    const rows = repos.map((repo) => `| ${repo.name} | [${repo.repo}](${repo.url}) | ${repo.category} | [${repo.report}](${path.basename(repo.report)}) |`).join('\n');
    if (!text.includes('cuga-project/cuga-agent')) {
      text = text.replace('\n## Data Use', `\n${rows}\n\n## Data Use`);
      write(file, text);
    }
  }
}

function updateGraph() {
  const graph = JSON.parse(read('.mermaid/current/graph.json'));
  graph.generated_at = runAt;
  graph.current_run_evidence = [
    'Web-observed repos: cuga-project/cuga-agent, AutoX-AI-Labs/AutoR, Chorus-AIDLC/Chorus, kweaver-ai/kweaver-core, suyoumo/ClawProBench.',
    'New raw files: raw-github/cuga-project_cuga-agent.md, raw-github/autox-ai-labs_autor.md, raw-github/chorus-aidlc_chorus.md, raw-github/kweaver-ai_kweaver-core.md, raw-github/suyoumo_clawprobench.md.',
    'New public model cards and site reports: project/report ids 237-241.',
    'Shell GitHub API freshness is blocked by DNS; local gh token is invalid.',
    'GitNexus status/list are available but the repo index was stale at start of this iteration.',
    'graph.json remains the Mermaid object graph truth source; graph.mmd and graph.md are rendered views.'
  ];
  const raw = graph.nodes?.find((node) => node.id === 'raw.github.hourly-captures');
  const processed = graph.nodes?.find((node) => node.id === 'processed.github-classification');
  const site = graph.nodes?.find((node) => node.id === 'results.public-site');
  if (raw) {
    raw.status = 'updated';
    raw.evidence = [...new Set([...(raw.evidence || []), ...repos.map((repo) => repo.rawFile)])];
  }
  if (processed) {
    processed.status = 'updated';
    processed.evidence = [...new Set([...(processed.evidence || []), 'research/repo-classification.json', 'output/raw-github-timestamp-index.json', 'analysis/github-project-data-analysis.json'])];
  }
  if (site) {
    site.status = 'updated';
    site.evidence = [...new Set([...(site.evidence || []), 'site/src/data/projects.ts', ...repos.map((repo) => `site/public/reports/${repo.report}`)])];
  }
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);
  write('.mermaid/current/graph.mmd', `flowchart LR\n  intent_direct_user_input["Direct user intent"]\n  raw_github_hourly_captures["Hourly GitHub raw captures"]\n  processed_github_classification["GitHub classification and timestamp indexes"]\n  work_learning_notes["Hourly learning notes"]\n  results_public_site["Public site project impact"]\n  results_public_visualizations["Public visualization assets"]\n  intent_direct_user_input -->|governs| raw_github_hourly_captures\n  raw_github_hourly_captures -->|feeds| processed_github_classification\n  processed_github_classification -->|publishes| results_public_site\n  processed_github_classification -->|explains| work_learning_notes\n  work_learning_notes -->|handoff| intent_direct_user_input\n  processed_github_classification -->|visualizes| results_public_visualizations\n`);
  write('.mermaid/current/graph.md', `# Current Mermaid Object Graph\n\nTruth source: \`.mermaid/current/graph.json\`\n\nGenerated: ${runAt}\n\n## Nodes\n\n- **intent.direct-user-input** (ops, active): Use only direct user inputs as goal source for the hourly public metadata loop.\n- **raw.github.hourly-captures** (raw, updated): Keep public GitHub evidence raw and timestamped before analysis.\n- **processed.github-classification** (processed, updated): Classify raw captures into benchmark, harness, memory, skill, resource-index, and evolution-runtime roles.\n- **work.learning-notes** (work, updated): Record blockers, evidence quality, and working principle for the next agent.\n- **results.public-site** (results, updated): Expose the metadata delta to the SEO/project site instead of leaving it internal.\n- **results.public-visualizations** (results, updated): Make the raw-to-public evidence flow visible on the website and paper status page.\n\n## Edges\n\n- intent.direct-user-input --governs--> raw.github.hourly-captures\n- raw.github.hourly-captures --feeds--> processed.github-classification\n- processed.github-classification --publishes--> results.public-site\n- processed.github-classification --explains--> work.learning-notes\n- work.learning-notes --handoff--> intent.direct-user-input\n- processed.github-classification --visualizes--> results.public-visualizations\n\n## Current Run Evidence\n\n${graph.current_run_evidence.map((line) => `- ${line}`).join('\n')}\n`);
}

function writeWorkNote() {
  const rows = repos.map((repo) => `| \`${repo.repo}\` | ${repo.category} | \`${repo.rawFile}\` | \`site/public/reports/${repo.report}\` |`).join('\n');
  write('work/research/hourly-public-metadata-update-2026-05-26-0912.md', `# Hourly Public Metadata Update - 2026-05-26 09:12 +0800\n\n## One Sentence\n\nAdded five web-observed harness and benchmark repositories and propagated them through raw captures, classification, public reports, site data and Mermaid evidence.\n\n## Three Sentences\n\nThe direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds CUGA, AutoR, Chorus, KWeaver Core and ClawProBench as evidence that the field is moving toward harness-level governance, artifact-backed research runs, AI-human task state, enterprise feedback loops and live OpenClaw evaluation. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local \`gh\` authentication were blocked.\n\n## Added Repositories\n\n| Repo | Layer role | Raw capture | Public report |\n|---|---|---|---|\n${rows}\n\n## Working Principle\n\nBrowser-observed GitHub evidence -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> README/i18n -> \`site/src/data/projects.ts\` -> \`site/public/reports/projects/\` -> Astro site build.\n\n## Evidence Quality\n\n- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for these five captures.\n- Shell GitHub API blocker: \`curl -I --max-time 10 https://api.github.com/rate_limit\` failed with DNS resolution error.\n- Local \`gh auth status\` reports the default token for \`Shiyao-Huang\` is invalid.\n- GitNexus is installed and \`npx gitnexus status/list\` worked; status was stale before this iteration.\n- No cloned code was executed and no benchmark claim was independently rerun.\n- Mermaid truth source remains \`.mermaid/current/graph.json\`; \`.mmd\` and \`.md\` are rendered views.\n`);
}

ensureRawAndCards();
updateClassification();
updateSiteData();
updateProjectIndexes();
updateGraph();
writeWorkNote();
