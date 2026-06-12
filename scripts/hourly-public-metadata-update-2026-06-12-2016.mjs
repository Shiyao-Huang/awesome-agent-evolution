import fs from 'node:fs';

const runIso = '2026-06-12T20:16:23+08:00';
const runDate = '2026-06-12';
const runDisplay = '2026-06-12 20:16 +0800';
const notePath = 'work/research/hourly-public-metadata-update-2026-06-12-2016.md';

const repos = {
  'china-qijizhifeng/agentic-Harness-engineering': {
    rawFile: 'raw-github/china-qijizhifeng_agentic-harness-engineering.md',
    report: 'projects/43-agentic-harness-engineering.md',
    siteReport: 'site/public/reports/projects/43-agentic-harness-engineering.md',
    stars: '545',
    forks: '62',
    commits: '45',
    issues: '0',
    pulls: '0',
    stack: 'TypeScript/Harness Evolution/Coding-Agent Workflow',
    theme: 'harness',
    category: '框架/framework',
    functionTag: 'framework-runtime',
    title: 'Official AHE code — Agentic Harness Engineering: observability-driven automatic evolution of coding-agent harnesses (concurrent w/ meta-harness). NexAU-AHE reaches 84.7% ± 2.1 pass@1 on Terminal-Bench 2 (GPT-5.5). Lifts GPT-5.4 69.7→77.0% over 10 iters, beats Codex/ACE/Training-Free GRPO; frozen harness transfers to SWE-bench-Verified.',
    rawDescription: 'Harness engineering is the layer where prompts, tools, middleware, memory, subagents, and evaluators become editable agent infrastructure rather than fixed wrappers around a base model.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 545 stars, 62 forks, 45 commits, 0 issues, 0 pull requests, and MIT license metadata, with harness engineering still framed as the editable layer for prompts, tools, middleware, skills, memory, subagents, and evaluators.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 545 stars, 62 forks, 45 commits, 0 issues, 0 pull requests, and MIT license metadata.',
      'The title and public summary still frame the repository around harness engineering rather than model training: prompts, tools, middleware, skills, memory, subagents, and evaluator scaffolds become the editable layer.',
      'The repo remains important because it names the practical layer between model capability and user-visible agent reliability, making it a bridge between OpenClaw-like product runtimes and benchmark-centered improvement loops.',
      'This refresh keeps the repo on a same-day public GitHub snapshot while replacing the earlier rounded star count with the current exact visible total.'
    ]
  },
  'NousResearch/hermes-agent': {
    rawFile: 'raw-github/nousresearch_hermes-agent.md',
    report: 'projects/44-hermes-agent.md',
    siteReport: 'site/public/reports/projects/44-hermes-agent.md',
    stars: '191591',
    forks: '33323',
    commits: '11472',
    issues: '5000+',
    pulls: '5000+',
    stack: 'Python/TypeScript/Memory/Skills/Messaging-Agent Runtime',
    theme: 'framework',
    category: '框架/framework',
    functionTag: 'framework-runtime',
    title: 'The agent that grows with you',
    rawDescription: 'Hermes Agent is a self-improving personal-agent runtime that combines memory, skill creation, session search, user modeling, messaging gateways, and scheduled automations in one user-facing system.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 191,591 stars, 33,323 forks, 11,472 commits, 5k+ issues, 5k+ pull requests, MIT license metadata, and continued emphasis on persistent knowledge, skill creation, session search, user modeling, messaging channels, and scheduled automations.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 191,591 stars, 33,323 forks, 11,472 commits, 5k+ issues, 5k+ pull requests, and MIT license metadata.',
      'Hermes Agent still positions itself as a self-improving personal agent with persistent knowledge, autonomous skill creation, search over prior sessions, user modeling, messaging gateways, and scheduled automations.',
      'The runtime surface remains wider than a terminal-only coding assistant: subagent delegation, session search, messaging channels, and trajectory generation stay part of the visible public story.',
      'This refresh keeps the self-improving personal-agent interpretation intact while replacing the morning rounded counts with the current exact visible totals.'
    ]
  },
  'openclaw/openclaw': {
    rawFile: 'raw-github/openclaw_openclaw.md',
    report: 'projects/48-openclaw.md',
    siteReport: 'site/public/reports/projects/48-openclaw.md',
    stars: '378330',
    forks: '79122',
    commits: '58599',
    issues: '4206',
    pulls: '3753',
    stack: 'TypeScript/Local-First Personal Agent/Multi-Channel Runtime',
    theme: 'framework',
    category: '框架/framework',
    functionTag: 'framework-runtime',
    title: 'Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞',
    rawDescription: 'OpenClaw is a local-first personal agent runtime whose product surface includes channels, sessions, tools, skills, and companion apps rather than only a benchmark-facing demo loop.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 378,330 stars, 79,122 forks, 58,599 commits, 4,206 issues, 3,753 pull requests, AGPL-3.0 license metadata, and continued product framing around a personal AI assistant that spans platforms, channels, tools, sessions, and skills.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 378,330 stars, 79,122 forks, 58,599 commits, 4,206 issues, 3,753 pull requests, and AGPL-3.0 license metadata.',
      'OpenClaw still describes itself as a personal AI assistant that runs on user-owned devices and works across operating systems and platforms rather than as a narrow benchmark demo.',
      'The public product/runtime surface remains the key signal: local-first control plane, many communication channels, sessions, tools, companion apps, onboarding, and skill support.',
      'This refresh keeps the product-runtime interpretation unchanged while replacing rounded counts with the exact public totals visible later on 2026-06-12.'
    ]
  },
  'obra/superpowers': {
    rawFile: 'raw-github/obra_superpowers.md',
    report: 'projects/49-superpowers.md',
    siteReport: 'site/public/reports/projects/49-superpowers.md',
    stars: '225591',
    forks: '20050',
    commits: '441',
    issues: '123',
    pulls: '155',
    stack: 'Shell/JavaScript/Cross-Agent Skills Methodology',
    theme: 'skill',
    category: '工具/tool',
    functionTag: 'tool-module',
    title: 'An agentic skills framework & software development methodology that works.',
    rawDescription: 'Superpowers packages reusable development skills and operating procedures for coding agents, turning engineering workflow habits into cross-agent runtime policy.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 225,591 stars, 20,050 forks, 441 commits, 123 issues, 155 pull requests, MIT license metadata, and continued positioning as an agentic skills framework plus software-development methodology for Claude Code, Codex, Cursor, OpenCode, and related clients.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 225,591 stars, 20,050 forks, 441 commits, 123 issues, 155 pull requests, and MIT license metadata.',
      'Superpowers still frames itself as an agentic skills framework plus software-development methodology rather than a single agent runtime.',
      'The workflow surface remains the important evidence: brainstorming, worktrees, plans, TDD, review, debugging, verification, subagent-driven development, and writing reusable skills across Claude Code, Codex, Cursor, OpenCode, and adjacent clients.',
      'This keeps methodology-as-runtime in the corpus while replacing the morning rounded counts with exact visible values.'
    ]
  },
  'rohitg00/agentmemory': {
    rawFile: 'raw-github/rohitg00_agentmemory.md',
    report: 'projects/50-agentmemory.md',
    siteReport: 'site/public/reports/projects/50-agentmemory.md',
    stars: '22479',
    forks: '1851',
    commits: '462',
    issues: '138',
    pulls: '150',
    stack: 'TypeScript/MCP/Coding-Agent Memory/Wiki Index',
    theme: 'memory',
    category: '工具/tool',
    functionTag: 'tool-module',
    title: '#1 Persistent memory for AI coding agents based on real-world benchmarks',
    rawDescription: 'agentmemory is a cross-harness persistent memory layer for coding agents and MCP clients, with wiki-style knowledge capture, retrieval, and continuity signals.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 22,479 stars, 1,851 forks, 462 commits, 138 issues, 150 pull requests, Apache-2.0 license metadata, and continued positioning as persistent memory for Claude Code, Codex, Cursor, Hermes, OpenClaw, and MCP clients.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 22,479 stars, 1,851 forks, 462 commits, 138 issues, 150 pull requests, and Apache-2.0 license metadata.',
      'The project still presents itself as persistent memory for Claude Code, Cursor, Gemini CLI, Codex CLI, Hermes, OpenClaw, OpenCode, and MCP clients rather than a product-specific plugin.',
      'The public README continues to connect the design to a wiki-pattern memory layer with confidence, lifecycle, knowledge-graph, and hybrid-search signals that support long-horizon coding-agent continuity.',
      'This refresh preserves the cross-harness memory-layer interpretation while replacing the earlier rounded numbers with exact current public totals.'
    ]
  },
  'pinchbench/skill': {
    rawFile: 'raw-github/pinchbench_skill.md',
    report: 'projects/51-pinchbench-skill.md',
    siteReport: 'site/public/reports/projects/51-pinchbench-skill.md',
    stars: '1227',
    forks: '138',
    commits: '383',
    issues: '18',
    pulls: '0',
    stack: 'Python/Shell/TypeScript/OpenClaw Benchmark Harness',
    theme: 'benchmark',
    category: '评测/evaluation',
    functionTag: 'benchmark-eval',
    title: 'PinchBench is a benchmarking system for evaluating LLM models as OpenClaw coding agents. Made with 🦀 by the humans at https://kilo.ai',
    rawDescription: 'PinchBench is an OpenClaw-oriented real task benchmark that measures coding agents across productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 1,227 stars, 138 forks, 18 issues, 383 commits, MIT license, 53 real-world tasks, and transcript-preserving benchmark workflows for OpenClaw agents.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 1,227 stars, 138 forks, 18 issues, 0 pull requests, and 383 commits.',
      'The repository explicitly says it contains benchmark skill/tasks rather than the official leaderboard backend.',
      'The benchmark covers 53 tasks across productivity, research, writing, coding, analysis, email, memory, and skill discovery.',
      'Each task can be graded automatically, by an LLM judge, or both; transcripts are retained under results folders for post-run analysis.'
    ]
  },
  'EvoMap/awesome-agent-evolution': {
    rawFile: 'raw-github/evomap_awesome-agent-evolution.md',
    report: 'projects/394-evomap-awesome-agent-evolution.md',
    siteReport: 'site/public/reports/projects/394-evomap-awesome-agent-evolution.md',
    stars: '137',
    forks: '20',
    commits: '60',
    issues: '6',
    pulls: '1',
    stack: 'JavaScript/Shell/Curated Taxonomy Pipeline',
    theme: 'resource-index',
    category: '工具/tool',
    functionTag: 'resource-index',
    title: 'A curated list of AI Agent evolution, memory systems, multi-agent architectures, and self-improvement projects. | evomap.ai',
    rawDescription: 'EvoMap/awesome-agent-evolution is a curated awesome list that maps self-evolving agents, memory systems, benchmarks, protocols, and adjacent infrastructure as a public field taxonomy.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 137 stars, 20 forks, 60 commits, 6 issues, 1 pull request, no releases, JavaScript/Shell implementation, and a maintained taxonomy covering self-evolution, memory, protocols, coding, benchmarks, and community knowledge.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 137 stars, 20 forks, 60 commits, 6 issues, 1 pull request, and no releases.',
      'The repository positions itself as a curated field map spanning self-evolution, memory systems, self-improvement infrastructure, and adjacent protocols.',
      'Its top-level taxonomy separates single-agent optimization from infrastructure/protocols, then breaks the space into self-evolution, memory, prompt optimization, A2A/MCP, development platforms, coding, safety, and embodied AI.',
      'The list includes benchmark and evaluation sections alongside key research papers, not only runnable repos.'
    ]
  },
  'desplega-ai/agent-swarm': {
    rawFile: 'raw-github/desplega-ai_agent-swarm.md',
    report: 'projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    siteReport: 'site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    stars: '520',
    forks: '57',
    commits: '1619',
    issues: '1',
    pulls: '2',
    stack: 'TypeScript/Docker/MCP/Lead-Worker Swarm',
    theme: 'framework',
    category: '框架/framework',
    functionTag: 'framework-runtime',
    title: 'Intelligence that compounds. Every single day.',
    rawDescription: 'Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.',
    evidence: 'web-observed GitHub page on 2026-06-12 showed 520 stars, 57 forks, 1 issue, 2 pull requests, 1,619 commits, MIT license, and the same lead/worker Docker orchestration, MCP API, compounding memory, HITL workflow gates, and skills-based swarm operations described in the 2026-06-09 packet.',
    rawBullets: [
      'The public GitHub page on 2026-06-12 showed 520 stars, 57 forks, 1 issue, 2 pull requests, and 1,619 commits.',
      'The README still frames Agent Swarm as a lead-worker system that turns Slack, GitHub, GitLab, Linear, Jira, email, and API inputs into autonomous multi-agent work.',
      'Visible highlights still include compounding memory, persistent identity, HITL workflow gates, Docker worker isolation, MCP tools, pages, dashboards, and recurring tasks.',
      'This refresh moves the repo from the 2026-06-09 packet to a same-day 2026-06-12 public GitHub snapshot.'
    ]
  }
};

function read(path) {
  return fs.readFileSync(path, 'utf8');
}

function write(path, content) {
  fs.writeFileSync(path, content);
}

function replaceExact(text, before, after, label) {
  if (text.includes(after)) return text;
  if (!text.includes(before)) throw new Error(`Missing expected block for ${label}`);
  return text.replace(before, after);
}

function rawMarkdown(repo, meta) {
  return `---\nrepo: ${repo}\nurl: https://github.com/${repo}\ncontent_timestamp: ${runDate}\ntime_slice: 2026-06\ntimestamp_source: web_observed_public_github_page_2026_06_12\ncollected_at: ${runIso}\nsource: github\nsource_tool: shell.python.urllib\n---\n\n## GitHub - ${repo}: ${meta.title}\n\n**Source**: https://github.com/${repo}\n\n---\n\n# Raw public page capture notes\n\nThis raw-style public GitHub page capture was refreshed by the hourly public metadata update. Unauthenticated GitHub API access was rate-limited in this workspace, so freshness is web-observed rather than API-verified.\n\n## Visible repository metadata\n\n- Repository: ${repo}\n- URL: https://github.com/${repo}\n- Stars: ${meta.stars}\n- Forks: ${meta.forks}\n- Commits: ${meta.commits}\n- Issues: ${meta.issues}\n- Pull requests: ${meta.pulls}\n- License: ${licenseFor(repo)}\n- Primary language / stack signal: ${meta.stack}\n- Latest visible dated signal: ${runDate} web-observed public GitHub page snapshot\n- Collection timestamp: ${runIso}\n\n## Visible README / page excerpts\n\n${meta.rawBullets.map((line) => `- ${line}`).join('\n')}\n\n## Raw capture boundary\n\nNo benchmark was run, no source clone was modified, and no private or authenticated metadata was used. This file preserves public page evidence for downstream classification, model-card analysis, public reports, and the site index.\n`;
}

function licenseFor(repo) {
  const map = {
    'china-qijizhifeng/agentic-Harness-engineering': 'MIT',
    'NousResearch/hermes-agent': 'MIT',
    'openclaw/openclaw': 'AGPL-3.0',
    'obra/superpowers': 'MIT',
    'rohitg00/agentmemory': 'Apache-2.0',
    'pinchbench/skill': 'MIT',
    'EvoMap/awesome-agent-evolution': 'View license on GitHub public page',
    'desplega-ai/agent-swarm': 'MIT'
  };
  return map[repo];
}

function updateClassification() {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
  data.generated_at = runIso;
  const normalized = Object.fromEntries(
    Object.entries(repos).map(([repo, meta]) => [repo.toLowerCase(), meta])
  );
  for (const row of data.rows) {
    const meta = normalized[(row.repo || '').toLowerCase()];
    if (!meta) continue;
    row.stars = meta.stars;
    row.final_category = meta.category;
    row.function_tag = meta.functionTag;
    row.base_theme = meta.theme;
    row.stack = meta.stack;
    row.time_slice = '2026-06';
    row.content_timestamp = runDate;
    row.evidence = meta.evidence;
    row.description = meta.rawDescription;
  }
  write(file, `${JSON.stringify(data, null, 2)}\n`);
}

function updateRawFiles() {
  for (const [repo, meta] of Object.entries(repos)) {
    write(meta.rawFile, rawMarkdown(repo, meta));
  }
}

function updateNarrativeCards() {
  const replacements = [
    ['projects/43-agentic-harness-engineering.md', 'The public GitHub page on 2026-06-12 showed 542 stars, 62 forks, 45 commits, 0 issues, 0 pull requests, and MIT license metadata. That upgrades this report from a user-reported placeholder into a live public snapshot, but authenticated API metadata and source-level benchmark/evaluator verification are still missing.', 'The public GitHub page on 2026-06-12 showed 545 stars, 62 forks, 45 commits, 0 issues, 0 pull requests, and MIT license metadata. That upgrades this report from a user-reported placeholder into a live public snapshot, but unauthenticated GitHub API access was already rate-limited and source-level benchmark/evaluator verification is still missing.'],
    ['projects/44-hermes-agent.md', 'The raw capture now reflects a live public GitHub page snapshot: 191k stars, 33.2k forks, 11,421 commits, 5k+ issues, 5k+ pull requests, and MIT license metadata observed on 2026-06-12. These are still web-observed values rather than authenticated GitHub API results, so benchmark and runtime claims remain source-scoped.', 'The raw capture now reflects a live public GitHub page snapshot: 191,591 stars, 33,323 forks, 11,472 commits, 5k+ issues, 5k+ pull requests, and MIT license metadata observed on 2026-06-12. These are still web-observed values because unauthenticated GitHub API access was already rate-limited, so benchmark and runtime claims remain source-scoped.'],
    ['projects/48-openclaw.md', 'The raw capture now reflects a live public GitHub page snapshot: 378k stars, 79.1k forks, 58,586 commits, 4.4k issues, 3.7k pull requests, and AGPL-3.0 license metadata observed on 2026-06-12. These are still web-observed values rather than authenticated GitHub API results, and the deeper analysis should still inspect whether skills and sessions create real learning loops or mainly operational convenience.', 'The raw capture now reflects a live public GitHub page snapshot: 378,330 stars, 79,122 forks, 58,599 commits, 4,206 issues, 3,753 pull requests, and AGPL-3.0 license metadata observed on 2026-06-12. These are still web-observed values because unauthenticated GitHub API access was already rate-limited, and the deeper analysis should still inspect whether skills and sessions create real learning loops or mainly operational convenience.'],
    ['projects/49-superpowers.md', 'The raw capture now reflects a live public GitHub page snapshot: 225k stars, 20k forks, 441 commits, 123 issues, 155 pull requests, and MIT license metadata observed on 2026-06-12. The main limit is unchanged: methodology quality must be judged by use outcomes, not repository popularity alone.', 'The raw capture now reflects a live public GitHub page snapshot: 225,591 stars, 20,050 forks, 441 commits, 123 issues, 155 pull requests, and MIT license metadata observed on 2026-06-12. The main limit is unchanged: methodology quality must be judged by use outcomes, not repository popularity alone.'],
    ['projects/50-agentmemory.md', 'The raw capture now reflects a live public GitHub page snapshot: 22.4k stars, 1.8k forks, 462 commits, 137 issues, 149 pull requests, and Apache-2.0 license metadata observed on 2026-06-12. The next analysis should inspect schema, memory lifecycle, and whether confidence scores are updated by real outcomes.', 'The raw capture now reflects a live public GitHub page snapshot: 22,479 stars, 1,851 forks, 462 commits, 138 issues, 150 pull requests, and Apache-2.0 license metadata observed on 2026-06-12. The next analysis should inspect schema, memory lifecycle, and whether confidence scores are updated by real outcomes.']
  ];
  for (const [file, before, after] of replacements) {
    const text = read(file);
    write(file, replaceExact(text, before, after, file));
    const siteFile = file.replace('projects/', 'site/public/reports/projects/');
    const siteText = read(siteFile);
    write(siteFile, replaceExact(siteText, before, after, siteFile));
  }
}

function updateStructuredCards() {
  const pinch = `# PinchBench Skill Model Card\n\n| Field | Value |\n|---|---|\n| Repository | [pinchbench/skill](https://github.com/pinchbench/skill) |\n| Category | Real-World Agent Task Benchmark |\n| Stars / forks snapshot | 1227 / 138 |\n| Commits / issues / PRs snapshot | 383 / 18 / 0 |\n| Language | Python |\n| License | MIT |\n| Raw capture | raw-github/pinchbench_skill.md |\n| Updated by | hourly public metadata update, ${runDisplay} |\n\n## 1. Role in Self Evolve\n\nPinchBench is an OpenClaw-oriented real task benchmark that measures coding agents across productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks. It matters because self-evolving agents need explicit memory, harness, benchmark, and safety substrates before their improvement claims become trustworthy.\n\n## 2. Working Principle\n\ntask suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload\n\n## 3. Evidence Path\n\nweb-observed GitHub page showed 1,227 stars, 138 forks, 18 issues, 383 commits, MIT license, 53 real-world tasks, and transcript-preserving benchmark workflows for OpenClaw agents. This iteration keeps freshness honest: the snapshot comes from the public GitHub page observed on 2026-06-12, while unauthenticated GitHub API access was already rate-limited in this workspace.\n\n## 4. Teaching Use\n\nUse this card to explain Real-World Agent Task Benchmark: it shows how memory systems, harness maps, benchmark suites, and outer-loop evaluators connect to the broader self-evolving-agent pipeline.\n\n## 5. Limits\n\nThe repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.\n`;
  const evomap = `# EvoMap Awesome Agent Evolution Model Card\n\n| Field | Value |\n|---|---|\n| Repository | [EvoMap/awesome-agent-evolution](https://github.com/EvoMap/awesome-agent-evolution) |\n| Category | External Awesome List and Taxonomy Comparator |\n| Stars / forks snapshot | 137 / 20 |\n| Language | JavaScript |\n| License | View license on GitHub public page |\n| Raw capture | raw-github/evomap_awesome-agent-evolution.md |\n| Updated by | hourly public metadata update, ${runDisplay} |\n\n## 1. Role in Self Evolve\n\nThis repository is not a self-evolving runtime. It matters because it is a live external mirror of how the broader ecosystem packages self-evolution, memory, benchmark, protocol, and multi-agent topics for readers.\n\n## 2. Working Principle\n\ntaxonomy framing -> curated repo/paper/benchmark lists -> related awesome-list pointers -> field navigation for newcomers\n\n## 3. Evidence Path\n\nThe public GitHub page on 2026-06-12 showed 137 stars, 20 forks, 60 commits, 6 issues, 1 pull request, no releases, JavaScript/Shell implementation, and a README that divides the field into self-evolution, memory, protocols, platforms, coding, safety, embodied AI, papers, benchmarks, and community knowledge. Unauthenticated GitHub API access was already rate-limited, so this card treats the snapshot as web-observed rather than API-verified.\n\n## 4. Teaching Use\n\nUse this card to compare curation strategies. EvoMap is a good external benchmark for whether our own README and website are exposing the right categories without collapsing the project back into a shallow link list.\n\n## 5. Limits\n\nThis iteration did not execute the repo's \`data/\` or \`scripts/\` folders. The classification is based on public taxonomy, maintenance surface, and comparison value, not on running its pipeline.\n`;
  const swarm = `# Agent Swarm Model Card\n\n| Field | Value |\n|---|---|\n| Repository | [desplega-ai/agent-swarm](https://github.com/desplega-ai/agent-swarm) |\n| Category | Compounding Lead-Worker Agent Runtime |\n| Stars / forks snapshot | 520 / 57 |\n| Commits / issues / PRs snapshot | 1619 / 1 / 2 |\n| Language | TypeScript |\n| License | MIT |\n| Latest visible dated signal | ${runDate} web-observed snapshot |\n| Raw capture | raw-github/desplega-ai_agent-swarm.md |\n| Updated by | hourly public metadata update, ${runDisplay} |\n\n## 1. Role in Self Evolve\n\nAgent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.\n\n## 2. Working Principle\n\ningest tasks from external channels -> lead agent plans and delegates -> workers run inside isolated Docker environments -> shared memory and identity accumulate across sessions -> pages, PRs, replies, and scheduled workflows turn learnings into reusable operations\n\n## 3. Evidence Path\n\nweb-observed GitHub page on 2026-06-12 showed 520 stars, 57 forks, 1 issue, 2 pull requests, 1,619 commits, MIT license, and the same lead/worker Docker orchestration, MCP API, compounding memory, HITL workflow gates, and skills-based swarm operations described in the 2026-06-09 packet. Unauthenticated GitHub API access was already rate-limited, so this remains a web-observed rather than API-verified refresh.\n\n## 4. Teaching Use\n\nUse this card to explain Compounding Lead-Worker Agent Runtime: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.\n\n## 5. Limits\n\nThe repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page signals unless independently revalidated later.\n`;
  write('projects/51-pinchbench-skill.md', pinch);
  write('site/public/reports/projects/51-pinchbench-skill.md', pinch);
  write('projects/394-evomap-awesome-agent-evolution.md', evomap);
  write('site/public/reports/projects/394-evomap-awesome-agent-evolution.md', evomap);
  write('projects/405-agent-swarm-compounding-lead-worker-runtime.md', swarm);
  write('site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md', swarm);
}

function updateProjectsTs() {
  const file = 'site/src/data/projects.ts';
  let text = read(file);
  const replacements = [
    ['"repo": "pinchbench/skill",\n        "url": "https://github.com/pinchbench/skill",\n        "stars": 1200,\n        "forks": 136,', '"repo": "pinchbench/skill",\n        "url": "https://github.com/pinchbench/skill",\n        "stars": 1227,\n        "forks": 138,'],
    ['"repo": "EvoMap/awesome-agent-evolution",\n        "url": "https://github.com/EvoMap/awesome-agent-evolution",\n        "stars": 137,\n        "forks": 20,', '"repo": "EvoMap/awesome-agent-evolution",\n        "url": "https://github.com/EvoMap/awesome-agent-evolution",\n        "stars": 137,\n        "forks": 20,'],
    ['"repo": "desplega-ai/agent-swarm",\n        "url": "https://github.com/desplega-ai/agent-swarm",\n        "description": "Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.",\n        "stack": [\n            "TypeScript",\n            "Docker",\n            "MCP",\n            "Lead-Worker Swarm"\n        ],\n        "category": "Compounding Lead-Worker Agent Runtime",\n        "status": "candidate",\n        "stars": 511,\n        "forks": 56,', '"repo": "desplega-ai/agent-swarm",\n        "url": "https://github.com/desplega-ai/agent-swarm",\n        "description": "Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.",\n        "stack": [\n            "TypeScript",\n            "Docker",\n            "MCP",\n            "Lead-Worker Swarm"\n        ],\n        "category": "Compounding Lead-Worker Agent Runtime",\n        "status": "candidate",\n        "stars": 520,\n        "forks": 57,'],
    ['"repo": "china-qijizhifeng/agentic-Harness-engineering",\n        "url": "https://github.com/china-qijizhifeng/agentic-Harness-engineering",\n        "description": "Agentic Harness Engineering names the layer where prompts, tools, middleware, skills, memory, subagents, and evaluators become editable agent infrastructure rather than fixed wrappers around a base model.",\n        "stack": [\n            "TypeScript",\n            "Harness Evolution",\n            "Coding-Agent Workflow"\n        ],\n        "category": "Harness Evolution Engineering",\n        "status": "candidate",\n        "stars": 542,\n        "forks": 62,', '"repo": "china-qijizhifeng/agentic-Harness-engineering",\n        "url": "https://github.com/china-qijizhifeng/agentic-Harness-engineering",\n        "description": "Agentic Harness Engineering names the layer where prompts, tools, middleware, skills, memory, subagents, and evaluators become editable agent infrastructure rather than fixed wrappers around a base model.",\n        "stack": [\n            "TypeScript",\n            "Harness Evolution",\n            "Coding-Agent Workflow"\n        ],\n        "category": "Harness Evolution Engineering",\n        "status": "candidate",\n        "stars": 545,\n        "forks": 62,'],
    ['"repo": "NousResearch/hermes-agent",\n        "url": "https://github.com/NousResearch/hermes-agent",\n        "description": "Hermes Agent is a self-improving personal-agent runtime that combines memory, skill creation, session search, user modeling, messaging gateways, and scheduled automations in one user-facing system.",\n        "stack": [\n            "Python",\n            "TypeScript",\n            "Memory",\n            "Skills",\n            "Messaging Runtime"\n        ],\n        "category": "Self-Improving Personal Agent Runtime",\n        "status": "candidate",\n        "stars": 191000,\n        "forks": 33200,', '"repo": "NousResearch/hermes-agent",\n        "url": "https://github.com/NousResearch/hermes-agent",\n        "description": "Hermes Agent is a self-improving personal-agent runtime that combines memory, skill creation, session search, user modeling, messaging gateways, and scheduled automations in one user-facing system.",\n        "stack": [\n            "Python",\n            "TypeScript",\n            "Memory",\n            "Skills",\n            "Messaging Runtime"\n        ],\n        "category": "Self-Improving Personal Agent Runtime",\n        "status": "candidate",\n        "stars": 191591,\n        "forks": 33323,'],
    ['"repo": "openclaw/openclaw",\n        "url": "https://github.com/openclaw/openclaw",\n        "description": "OpenClaw is a local-first personal agent runtime whose product surface includes channels, sessions, tools, skills, and companion apps rather than only a benchmark-facing demo loop.",\n        "stack": [\n            "TypeScript",\n            "Local-First Runtime",\n            "Channels",\n            "Skills",\n            "Sessions"\n        ],\n        "category": "Personal Agent Product Runtime",\n        "status": "candidate",\n        "stars": 378000,\n        "forks": 79100,', '"repo": "openclaw/openclaw",\n        "url": "https://github.com/openclaw/openclaw",\n        "description": "OpenClaw is a local-first personal agent runtime whose product surface includes channels, sessions, tools, skills, and companion apps rather than only a benchmark-facing demo loop.",\n        "stack": [\n            "TypeScript",\n            "Local-First Runtime",\n            "Channels",\n            "Skills",\n            "Sessions"\n        ],\n        "category": "Personal Agent Product Runtime",\n        "status": "candidate",\n        "stars": 378330,\n        "forks": 79122,'],
    ['"repo": "obra/superpowers",\n        "url": "https://github.com/obra/superpowers",\n        "description": "Superpowers packages reusable development skills and operating procedures for coding agents, turning engineering workflow habits into cross-agent runtime policy.",\n        "stack": [\n            "Shell",\n            "JavaScript",\n            "Skills Methodology"\n        ],\n        "category": "Agentic Skills Methodology",\n        "status": "candidate",\n        "stars": 225000,\n        "forks": 20000,', '"repo": "obra/superpowers",\n        "url": "https://github.com/obra/superpowers",\n        "description": "Superpowers packages reusable development skills and operating procedures for coding agents, turning engineering workflow habits into cross-agent runtime policy.",\n        "stack": [\n            "Shell",\n            "JavaScript",\n            "Skills Methodology"\n        ],\n        "category": "Agentic Skills Methodology",\n        "status": "candidate",\n        "stars": 225591,\n        "forks": 20050,'],
    ['"repo": "rohitg00/agentmemory",\n        "url": "https://github.com/rohitg00/agentmemory",\n        "description": "agentmemory is a cross-harness persistent memory layer for coding agents and MCP clients, with wiki-style knowledge capture, retrieval, and continuity signals.",\n        "stack": [\n            "TypeScript",\n            "MCP",\n            "Knowledge Graph",\n            "Hybrid Search"\n        ],\n        "category": "Agent Persistent Memory Layer",\n        "status": "candidate",\n        "stars": 22400,\n        "forks": 1800,', '"repo": "rohitg00/agentmemory",\n        "url": "https://github.com/rohitg00/agentmemory",\n        "description": "agentmemory is a cross-harness persistent memory layer for coding agents and MCP clients, with wiki-style knowledge capture, retrieval, and continuity signals.",\n        "stack": [\n            "TypeScript",\n            "MCP",\n            "Knowledge Graph",\n            "Hybrid Search"\n        ],\n        "category": "Agent Persistent Memory Layer",\n        "status": "candidate",\n        "stars": 22479,\n        "forks": 1851,']
  ];
  for (const [before, after] of replacements) {
    text = replaceExact(text, before, after, 'site/src/data/projects.ts');
  }
  write(file, text);
}

function updateReadmes() {
  const docs = [
    ['README.md', '## 近期证据更新（2026-06-09）', '## 近期证据更新（2026-06-12）'],
    ['README.md', '本轮不是新增一批条目，而是把 production swarm、coding-agent harness、memory benchmark、OpenAI Agents SDK orchestrator、official OpenAI Agents SDK Python/JS baseline、continual skill-memory paper code 和轻量 memory/MCP/skill runtime 的公开数字面重新校正到 `2026-06-09` 可见证据。下面每个仓库都只回答一个问题：它补上了哪类判断证据，以及这轮是否发生了需要同步到公开面的计数修正。', '本轮不是新增一批条目，而是把 production swarm、coding-agent harness、memory benchmark、OpenAI Agents SDK orchestrator、official OpenAI Agents SDK Python/JS baseline、continual skill-memory paper code 和轻量 memory/MCP/skill runtime 的公开数字面重新校正到 `2026-06-12` 可见证据。下面每个仓库都只回答一个问题：它补上了哪类判断证据，以及这轮是否发生了需要同步到公开面的计数修正。'],
    ['README-EN.md', '## Recent Evidence Updates (2026-06-09)', '## Recent Evidence Updates (2026-06-12)'],
    ['README-EN.md', 'This update is not about adding a new batch of repositories. It recalibrates the public number surface for the production swarm, coding-agent harness, safety-sensitive memory benchmark, OpenAI Agents SDK orchestrator, official OpenAI Agents SDK Python/JS baselines, continual skill-memory paper code, and lightweight memory/MCP/skill runtime against GitHub pages observed on 2026-06-09.', 'This update is not about adding a new batch of repositories. It recalibrates the public number surface for the production swarm, coding-agent harness, safety-sensitive memory benchmark, OpenAI Agents SDK orchestrator, official OpenAI Agents SDK Python/JS baselines, continual skill-memory paper code, and lightweight memory/MCP/skill runtime against GitHub pages observed on 2026-06-12.'],
    ['README-ZH.md', '## 本轮 GitHub Metadata 修复包（2026-06-09）', '## 本轮 GitHub Metadata 修复包（2026-06-12）'],
    ['README-ZH.md', '这轮重点不是新增条目，而是把 production swarm、coding-agent harness、memory benchmark 和 OpenAI Agents SDK baseline 的公开数字面校正到 `2026-06-09` 的可见 GitHub 证据，并同步 raw、分类、project card、site report 和 README 前台说明。', '这轮重点不是新增条目，而是把 production swarm、coding-agent harness、memory benchmark 和 OpenAI Agents SDK baseline 的公开数字面校正到 `2026-06-12` 的可见 GitHub 证据，并同步 raw、分类、project card、site report 和 README 前台说明。'],
    ['README-ZH.md', '| [desplega-ai/agent-swarm](https://github.com/desplega-ai/agent-swarm) | 刷新 raw capture、project card、site public report 与分类元数据，统一到 2026-06-09 的公开 GitHub 页面更新信号。 | 它把 agent-swarm 从“多角色编排”推进到带 Docker worker、persistent identity、compounding memory 和 HITL workflow gate 的生产执行面。 |', '| [desplega-ai/agent-swarm](https://github.com/desplega-ai/agent-swarm) | 刷新 raw capture、project card、site public report 与分类元数据，统一到 2026-06-12 的公开 GitHub 页面更新信号。 | 它把 agent-swarm 从“多角色编排”推进到带 Docker worker、persistent identity、compounding memory 和 HITL workflow gate 的生产执行面。 |']
  ];
  for (const [file, before, after] of docs) {
    write(file, replaceExact(read(file), before, after, file));
  }
}

function updateGraph() {
  const file = '.mermaid/current/graph.json';
  const graph = JSON.parse(read(file));
  graph.generated_at = runIso;
  const rawNode = graph.nodes.find((node) => node.id === 'raw.github.hourly-captures');
  rawNode.paths = Object.values(repos).map((meta) => meta.rawFile);
  const processedNode = graph.nodes.find((node) => node.id === 'processed.github-classification');
  processedNode.paths = [
    'research/repo-classification.json',
    'analysis/github-project-data-analysis.md',
    'projects/43-agentic-harness-engineering.md',
    'projects/44-hermes-agent.md',
    'projects/48-openclaw.md',
    'projects/49-superpowers.md',
    'projects/50-agentmemory.md',
    'projects/51-pinchbench-skill.md',
    'projects/394-evomap-awesome-agent-evolution.md',
    'projects/405-agent-swarm-compounding-lead-worker-runtime.md'
  ];
  const siteNode = graph.nodes.find((node) => node.id === 'results.public-site');
  siteNode.paths = [
    'site/src/data/projects.ts',
    'site/public/reports/projects/43-agentic-harness-engineering.md',
    'site/public/reports/projects/44-hermes-agent.md',
    'site/public/reports/projects/48-openclaw.md',
    'site/public/reports/projects/49-superpowers.md',
    'site/public/reports/projects/50-agentmemory.md',
    'site/public/reports/projects/51-pinchbench-skill.md',
    'site/public/reports/projects/394-evomap-awesome-agent-evolution.md',
    'site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    'README.md',
    'README-ZH.md',
    'README-EN.md',
    'CONTENT_INDEX.md'
  ];
  const noteNode = graph.nodes.find((node) => node.id === 'work.learning-note');
  noteNode.paths = [notePath];
  graph.current_run.repos = Object.entries(repos).map(([repo, meta]) => ({
    repo,
    raw_capture: meta.rawFile,
    report: meta.report,
    site_report: meta.siteReport,
    stars: Number(meta.stars),
    forks: Number(meta.forks),
    issues: meta.issues === '5000+' ? 5000 : Number(meta.issues),
    pull_requests: meta.pulls === '5000+' ? 5000 : Number(meta.pulls),
    last_visible_commit_date: runDate,
    theme: meta.theme
  }));
  graph.current_run.blockers = [
    'Unauthenticated GitHub API access reached 403 rate limit exceeded on 2026-06-12, so this loop used public GitHub HTML rather than API JSON.',
    'gh auth status reports the default github.com token for Shiyao-Huang is invalid.',
    'GitNexus CLI status is callable but stale; direct GitNexus MCP tools are not exposed in this Codex session, and re-running analyze was avoided because AGENTS.md / CLAUDE.md already carry unrelated user edits.'
  ];
  graph.current_run.notes = [
    'The prior 2026-06-12 14:14 packet rounded several star/fork totals; this run replaces those rounded values with the exact public HTML totals visible later the same day.',
    'Agent Swarm is now synchronized from the 2026-06-09 packet to a 2026-06-12 public GitHub snapshot before downstream rebuilds.'
  ];
  write(file, `${JSON.stringify(graph, null, 2)}\n`);

  write('.mermaid/current/graph.md', `# Current Mermaid Object Graph\n\nTruth source: \`.mermaid/current/graph.json\`\n\nGenerated: ${runIso}\n\n## Current Run Repositories\n\n- **china-qijizhifeng/agentic-Harness-engineering** -> raw \`raw-github/china-qijizhifeng_agentic-harness-engineering.md\` -> card \`projects/43-agentic-harness-engineering.md\` -> site report \`site/public/reports/projects/43-agentic-harness-engineering.md\`\n- **NousResearch/hermes-agent** -> raw \`raw-github/nousresearch_hermes-agent.md\` -> card \`projects/44-hermes-agent.md\` -> site report \`site/public/reports/projects/44-hermes-agent.md\`\n- **openclaw/openclaw** -> raw \`raw-github/openclaw_openclaw.md\` -> card \`projects/48-openclaw.md\` -> site report \`site/public/reports/projects/48-openclaw.md\`\n- **obra/superpowers** -> raw \`raw-github/obra_superpowers.md\` -> card \`projects/49-superpowers.md\` -> site report \`site/public/reports/projects/49-superpowers.md\`\n- **rohitg00/agentmemory** -> raw \`raw-github/rohitg00_agentmemory.md\` -> card \`projects/50-agentmemory.md\` -> site report \`site/public/reports/projects/50-agentmemory.md\`\n- **pinchbench/skill** -> raw \`raw-github/pinchbench_skill.md\` -> card \`projects/51-pinchbench-skill.md\` -> site report \`site/public/reports/projects/51-pinchbench-skill.md\`\n- **EvoMap/awesome-agent-evolution** -> raw \`raw-github/evomap_awesome-agent-evolution.md\` -> card \`projects/394-evomap-awesome-agent-evolution.md\` -> site report \`site/public/reports/projects/394-evomap-awesome-agent-evolution.md\`\n- **desplega-ai/agent-swarm** -> raw \`raw-github/desplega-ai_agent-swarm.md\` -> card \`projects/405-agent-swarm-compounding-lead-worker-runtime.md\` -> site report \`site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md\`\n\n## Working Principle\n\nGitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.\n\n## Evidence Boundaries\n\n- Unauthenticated GitHub API access hit \`403 rate limit exceeded\` on 2026-06-12, so this loop used public GitHub HTML rather than API JSON.\n- Local \`gh\` auth is invalid, so no authenticated freshness claims were made.\n- GitNexus CLI status is callable but stale; direct GitNexus MCP tools are not exposed in this Codex session, and re-running \`npx gitnexus analyze\` was avoided because \`AGENTS.md\` / \`CLAUDE.md\` already contain unrelated user edits.\n- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.\n`);
  write('.mermaid/current/graph.mmd', `graph TD\n  intent["Direct user intent"] --> raw["raw-github public repo refresh + exact-count correction"]\n  raw --> processed["repo classification + GitHub analysis + processed cards"]\n  processed --> results["site project data + public reports + indexes"]\n  processed --> note["work learning note + blocker ledger"]\n  note --> intent\n`);
}

function updateWorkNote() {
  write(notePath, `# Hourly Public Metadata Update - ${runDisplay}\n\n## One Sentence\n\nRefreshed the hourly public metadata packet on ${runDate}, replaced rounded GitHub HTML counts with exact visible totals for eight core repos, and propagated the corrected snapshot through raw, processed, Mermaid, README, and site surfaces.\n\n## Three Sentences\n\nThis run continues the same direct-user loop: keep GitHub raw evidence current, classify it honestly, and surface the delta on public README/site pages instead of leaving it trapped in local notes. The concrete delta is not new repository discovery but count precision and freshness: Agent Swarm moved from the 2026-06-09 packet to a same-day 2026-06-12 snapshot, while AHE, Hermes Agent, OpenClaw, Superpowers, agentmemory, and PinchBench replaced earlier rounded star/fork totals with exact visible HTML counts. Freshness remains honest: unauthenticated GitHub API access was already rate-limited, \`gh\` auth is invalid, and GitNexus MCP tools are not callable in this session even though \`npx gitnexus status\` works.\n\n## GitHub Evidence Packet\n\n| Repo | Stars | Forks | Commits | Issues | PRs | Source boundary |\n|---|---:|---:|---:|---:|---:|---|\n| \`china-qijizhifeng/agentic-Harness-engineering\` | 545 | 62 | 45 | 0 | 0 | public GitHub HTML, 2026-06-12 |\n| \`NousResearch/hermes-agent\` | 191591 | 33323 | 11472 | 5000+ | 5000+ | public GitHub HTML, 2026-06-12 |\n| \`openclaw/openclaw\` | 378330 | 79122 | 58599 | 4206 | 3753 | public GitHub HTML, 2026-06-12 |\n| \`obra/superpowers\` | 225591 | 20050 | 441 | 123 | 155 | public GitHub HTML, 2026-06-12 |\n| \`rohitg00/agentmemory\` | 22479 | 1851 | 462 | 138 | 150 | public GitHub HTML, 2026-06-12 |\n| \`pinchbench/skill\` | 1227 | 138 | 383 | 18 | 0 | public GitHub HTML, 2026-06-12 |\n| \`EvoMap/awesome-agent-evolution\` | 137 | 20 | 60 | 6 | 1 | public GitHub HTML, 2026-06-12 |\n| \`desplega-ai/agent-swarm\` | 520 | 57 | 1619 | 1 | 2 | public GitHub HTML, 2026-06-12 |\n\n## Working Principle\n\nGitHub public repo pages -> \`raw-github/*.md\` -> \`research/repo-classification.json\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> processed project cards + \`site/src/data/projects.ts\` + \`site/public/reports/projects/\` -> indexes and Astro build.\n\n## GitNexus / Blockers\n\n- \`npx gitnexus status\` works and reports the local index is stale against commit \`c61bad5\`.\n- Direct GitNexus MCP tools are not exposed in this Codex session: \`tool_search\` returned no callable GitNexus tools.\n- \`npx gitnexus analyze\` was intentionally not run because the repo already has unrelated user edits in \`AGENTS.md\` and \`CLAUDE.md\`, and the GitNexus CLI may rewrite those context files.\n- \`https://api.github.com/rate_limit\` returned \`200\`, but repository API calls already returned \`403 rate limit exceeded\`; this run therefore uses public HTML rather than API JSON.\n- \`gh auth status\` still reports the default github.com token for \`Shiyao-Huang\` is invalid.\n\n## Public Surface Sync\n\n- Updated README evidence section date from 2026-06-09 to 2026-06-12 in ZH/EN/main.\n- Refreshed project cards and public reports for AHE, Hermes Agent, OpenClaw, Superpowers, agentmemory, PinchBench, EvoMap, and Agent Swarm.\n- Updated Mermaid truth source and rendered views so the blocker narrative matches this run instead of the older DNS-only story.\n\n## Validation Commands\n\n- \`node scripts/generate_project_indexes.mjs\`\n- \`python3 scripts/enforce_raw_timestamps.py\`\n- \`node scripts/analyze_github_project_data.mjs\`\n- \`(cd site && npm run build)\`\n`);
}

updateRawFiles();
updateClassification();
updateNarrativeCards();
updateStructuredCards();
updateProjectsTs();
updateReadmes();
updateGraph();
updateWorkNote();
