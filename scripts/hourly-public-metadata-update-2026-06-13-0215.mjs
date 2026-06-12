import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const runIso = '2026-06-13T02:15:12+08:00';
const runDate = '2026-06-13';
const runDisplay = '2026-06-13 02:15 +0800';
const notePath = 'work/research/hourly-public-metadata-update-2026-06-13-0215.md';

const repos = [
  {
    repo: 'desplega-ai/agent-swarm',
    rawFile: 'raw-github/desplega-ai_agent-swarm.md',
    report: 'projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    siteReport: 'site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md',
    name: 'Agent Swarm',
    category: 'Compounding Lead-Worker Agent Runtime',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    stars: 520,
    forks: 57,
    commits: 1624,
    issues: 1,
    pulls: 2,
    pushedAt: '2026-06-12T17:54:36Z',
    latestCommit: '2026-06-12T17:50:23Z',
    latestRelease: 'v1.97.0',
    latestReleaseAt: '2026-06-12T14:05:11Z',
    releaseCount: 96,
    language: 'TypeScript',
    license: 'MIT',
    stack: ['TypeScript', 'Docker', 'MCP', 'Lead-Worker Swarm'],
    stackSignal: 'TypeScript/Docker/MCP/Lead-Worker Swarm',
    description:
      'Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.',
    pattern:
      'ingest tasks from external channels -> lead agent plans and delegates -> workers run inside isolated Docker environments -> shared memory and identity accumulate across sessions -> pages, PRs, replies, and scheduled workflows turn learnings into reusable operations',
    tags: ['agent-swarm', 'lead-worker', 'docker', 'mcp', 'compounding-memory'],
    title: 'Agent Swarm Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 520 stars, 57 forks, 1 open issue, 2 open pull requests, 1,624 commits on `main`, latest push at 2026-06-12T17:54:36Z, MIT license, and latest release `v1.97.0` published on 2026-06-12.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 520 stars, 57 forks, 1 open issue, 2 open pull requests, and 1,624 commits on `main`.',
      'Latest push time is 2026-06-12T17:54:36Z and the latest default-branch commit is 2026-06-12T17:50:23Z.',
      'Latest release is `v1.97.0`, published on 2026-06-12T14:05:11Z.',
      'The repository still presents a lead-worker runtime with Docker worker isolation, MCP tools, compounding memory, persistent identity, dashboards, pages, and recurring workflows.'
    ],
    role:
      'Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.',
    teaching:
      'Use this card to explain Compounding Lead-Worker Agent Runtime: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.',
    limits:
      'The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'AgentWrapper/agent-orchestrator',
    rawFile: 'raw-github/composiohq_agent-orchestrator.md',
    report: 'projects/406-composio-agent-orchestrator-coding-swarm.md',
    siteReport: 'site/public/reports/projects/406-composio-agent-orchestrator-coding-swarm.md',
    name: 'Composio Agent Orchestrator',
    category: 'Production Coding-Agent Swarm Orchestrator',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'harness',
    stars: 7514,
    forks: 1025,
    commits: 1277,
    issues: 478,
    pulls: 474,
    pushedAt: '2026-06-09T00:56:58Z',
    latestCommit: '2026-06-08T00:03:51Z',
    latestRelease: 'v0.9.3-nightly-5897b4e8d8cefc33f681ab73bf0e3ebc0b17b517',
    latestReleaseAt: '2026-06-08T19:02:50Z',
    releaseCount: 51,
    language: 'TypeScript',
    license: 'MIT',
    stack: ['TypeScript', 'Swarm Harness', 'Worktrees', 'Skills', 'Memory'],
    stackSignal: 'TypeScript/Swarm Harness/Worktrees/Skills/Memory',
    description:
      'Agent Orchestrator is a production coding-agent swarm that runs spec, build, test, review, and merge flows through Git worktrees, skills, memory, and MCP-connected execution.',
    pattern:
      'route coding tasks into specialized agents -> isolate changes in Git worktrees -> reuse skills and memory across execution steps -> coordinate MCP/tool calls and review gates -> merge accepted work back into the main engineering flow',
    tags: ['coding-agent', 'swarm', 'harness', 'worktree', 'mcp'],
    title: 'Composio Agent Orchestrator Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed the canonical redirected repository `AgentWrapper/agent-orchestrator` at 7,514 stars, 1,025 forks, 478 open issues, 474 open pull requests, 1,277 commits on `main`, latest push at 2026-06-09T00:56:58Z, MIT license, and latest nightly release published on 2026-06-08.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 7,514 stars, 1,025 forks, 478 open issues, 474 open pull requests, and 1,277 commits on `main`.',
      'Latest push time is 2026-06-09T00:56:58Z and the latest default-branch commit is 2026-06-08T00:03:51Z.',
      'Latest release is `v0.9.3-nightly-5897b4e8d8cefc33f681ab73bf0e3ebc0b17b517`, published on 2026-06-08T19:02:50Z.',
      'The repository still presents itself as an agentic orchestrator for parallel coding agents with planning, CI repair, merge-conflict handling, code review, worktrees, memory, skills, and MCP-connected execution.'
    ],
    role:
      'Agent Orchestrator is a production coding-agent swarm that runs spec, build, test, review, and merge flows through Git worktrees, skills, memory, and MCP-connected execution. It matters because self-evolving agents need a reproducible harness for parallel work, branch isolation, and reviewer loops before claims about autonomous improvement become operationally credible.',
    teaching:
      'Use this card to explain Production Coding-Agent Swarm Orchestrator: it shows how skills, memory, worktree isolation, MCP tools, and reviewer gates create the harness surface where future self-improvement claims can actually be audited.',
    limits:
      'The repository was not cloned in this iteration; no coding workflow, benchmark, or merge policy was executed locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'VRSEN/agency-swarm',
    rawFile: 'raw-github/vrsen_agency-swarm.md',
    report: 'projects/27-agency-swarm.md',
    siteReport: 'site/public/reports/projects/27-agency-swarm.md',
    name: 'Agency Swarm',
    category: 'OpenAI Agents SDK Swarm Orchestrator',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    stars: 4445,
    forks: 1058,
    commits: 2545,
    issues: 0,
    pulls: 6,
    pushedAt: '2026-06-12T00:13:04Z',
    latestCommit: '2026-06-12T00:13:04Z',
    latestRelease: 'v1.10.1',
    latestReleaseAt: '2026-06-11T17:05:13Z',
    releaseCount: 64,
    language: 'Python',
    license: 'MIT',
    stack: ['Python', 'OpenAI Agents SDK', 'Agency CLI', 'State Persistence'],
    stackSignal: 'Python/OpenAI Agents SDK/Agency CLI/State Persistence',
    description:
      'Agency Swarm is a mature Python orchestration framework that layers role-aware communication flows, type-safe tools, thread persistence, and terminal/web demos on top of the OpenAI Agents SDK.',
    pattern:
      'define agents and directional communication flows -> attach function tools and persistence callbacks -> route work through agency-level orchestration -> reuse terminal/web demos and docs as reproducible multi-agent operating patterns',
    tags: ['agency-swarm', 'openai-agents-sdk', 'multi-agent', 'state-persistence', 'cli'],
    title: 'Agency Swarm Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 4,445 stars, 1,058 forks, 0 open issues, 6 open pull requests, 2,545 commits on `main`, latest push at 2026-06-12T00:13:04Z, MIT license, and latest release `v1.10.1` published on 2026-06-11.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 4,445 stars, 1,058 forks, 0 open issues, 6 open pull requests, and 2,545 commits on `main`.',
      'Latest push time is 2026-06-12T00:13:04Z and the latest default-branch commit is 2026-06-12T00:13:04Z.',
      'Latest release is `v1.10.1`, published on 2026-06-11T17:05:13Z.',
      'The repository still positions itself as a reliable orchestration layer with role-aware communication flows, tools, state persistence, and OpenAI Agents SDK integration.'
    ],
    role:
      'Agency Swarm is a mature Python orchestration framework that layers role-aware communication flows, type-safe tools, thread persistence, and terminal/web demos on top of the OpenAI Agents SDK. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.',
    teaching:
      'Use this card to explain OpenAI Agents SDK Swarm Orchestrator: it shows how swarm runtimes, skill optimizers, benchmark suites, browser harnesses, and memory middleware fit into the broader self-evolving-agent pipeline.',
    limits:
      'The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'openai/openai-agents-python',
    rawFile: 'raw-github/openai_openai-agents-python.md',
    report: 'projects/408-openai-agents-python-official-sdk.md',
    siteReport: 'site/public/reports/projects/408-openai-agents-python-official-sdk.md',
    name: 'OpenAI Agents SDK (Python)',
    category: 'Official OpenAI Agents SDK Runtime Baseline',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    stars: 27111,
    forks: 4185,
    commits: 1603,
    issues: 45,
    pulls: 99,
    pushedAt: '2026-06-11T04:10:37Z',
    latestCommit: '2026-06-11T04:10:23Z',
    latestRelease: 'v0.17.5',
    latestReleaseAt: '2026-06-11T04:11:51Z',
    releaseCount: 102,
    language: 'Python',
    license: 'MIT',
    stack: ['Python', 'OpenAI Agents SDK', 'Tracing', 'Guardrails', 'Handoffs'],
    stackSignal: 'Python/OpenAI Agents SDK/Tracing/Guardrails/Handoffs',
    description:
      'OpenAI Agents SDK (Python) is the official Python baseline for multi-agent orchestration with handoffs, tool calls, guardrails, tracing, and session state.',
    pattern:
      'define agents plus tools and handoffs -> trace runs and guardrails -> keep session state and memory-like context inside SDK workflows -> reuse the official runtime as the canonical orchestration baseline for third-party swarm and harness claims',
    tags: ['openai-agents-sdk', 'official-sdk', 'python', 'orchestration', 'guardrails'],
    title: 'OpenAI Agents SDK (Python) Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 27,111 stars, 4,185 forks, 45 open issues, 99 open pull requests, 1,603 commits on `main`, latest push at 2026-06-11T04:10:37Z, MIT license, and latest release `v0.17.5` published on 2026-06-11.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 27,111 stars, 4,185 forks, 45 open issues, 99 open pull requests, and 1,603 commits on `main`.',
      'Latest push time is 2026-06-11T04:10:37Z and the latest default-branch commit is 2026-06-11T04:10:23Z.',
      'Latest release is `v0.17.5`, published on 2026-06-11T04:11:51Z.',
      'The repository still exposes the canonical upstream runtime surface for handoffs, tools, guardrails, tracing, sessions, and multi-agent workflows.'
    ],
    role:
      'OpenAI Agents SDK (Python) is the official Python baseline for multi-agent orchestration with handoffs, tool calls, guardrails, tracing, and session state. It matters because third-party swarm, harness, memory, and skill claims need a canonical upstream orchestration/runtime baseline before they can be compared honestly.',
    teaching:
      'Use this card to explain Official OpenAI Agents SDK Runtime Baseline: it gives the corpus a canonical upstream baseline for agent orchestration, guardrails, tracing, and tool/handoff design before downstream systems add their own memory, benchmark, or self-improvement layers.',
    limits:
      'The repository was not cloned or executed in this iteration; no SDK example, agent loop, benchmark, or realtime flow was run locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'openai/openai-agents-js',
    rawFile: 'raw-github/openai_openai-agents-js.md',
    report: 'projects/409-openai-agents-js-official-sdk.md',
    siteReport: 'site/public/reports/projects/409-openai-agents-js-official-sdk.md',
    name: 'OpenAI Agents SDK (JS)',
    category: 'Official OpenAI Agents SDK TypeScript Baseline',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'framework',
    stars: 3203,
    forks: 809,
    commits: 933,
    issues: 35,
    pulls: 29,
    pushedAt: '2026-06-12T08:33:10Z',
    latestCommit: '2026-06-09T01:35:26Z',
    latestRelease: 'v0.11.6',
    latestReleaseAt: '2026-05-29T01:53:06Z',
    releaseCount: 56,
    language: 'TypeScript',
    license: 'MIT',
    stack: ['TypeScript', 'OpenAI Agents SDK', 'Tracing', 'Guardrails', 'Handoffs'],
    stackSignal: 'TypeScript/OpenAI Agents SDK/Tracing/Guardrails/Handoffs',
    description:
      'OpenAI Agents SDK (JS) is the official TypeScript baseline for building agent orchestration loops with tools, handoffs, guardrails, realtime hooks, and tracing.',
    pattern:
      'compose agents in TypeScript -> attach tools, handoffs, and realtime transport -> trace execution and guardrails -> use the official JS runtime as the canonical baseline for browser, frontend, and full-stack swarm orchestration claims',
    tags: ['openai-agents-sdk', 'official-sdk', 'typescript', 'orchestration', 'realtime'],
    title: 'OpenAI Agents SDK (JS) Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 3,203 stars, 809 forks, 35 open issues, 29 open pull requests, 933 commits on `main`, latest push at 2026-06-12T08:33:10Z, MIT license, and latest release `v0.11.6` published on 2026-05-29.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 3,203 stars, 809 forks, 35 open issues, 29 open pull requests, and 933 commits on `main`.',
      'Latest push time is 2026-06-12T08:33:10Z and the latest default-branch commit is 2026-06-09T01:35:26Z.',
      'Latest release is `v0.11.6`, published on 2026-05-29T01:53:06Z.',
      'The repository still exposes the canonical TypeScript runtime layer for tools, handoffs, realtime flows, tracing, and guardrails.'
    ],
    role:
      'OpenAI Agents SDK (JS) is the official TypeScript baseline for building agent orchestration loops with tools, handoffs, guardrails, realtime hooks, and tracing. It matters because third-party swarm, harness, memory, and skill claims need a canonical upstream orchestration/runtime baseline before they can be compared honestly.',
    teaching:
      'Use this card to explain Official OpenAI Agents SDK TypeScript Baseline: it gives the corpus a canonical upstream baseline for agent orchestration, guardrails, tracing, and tool/handoff design before downstream systems add their own memory, benchmark, or self-improvement layers.',
    limits:
      'The repository was not cloned or executed in this iteration; no SDK example, agent loop, benchmark, or realtime flow was run locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'XSkill-Agent/XSkill',
    rawFile: 'raw-github/xskill-agent_xskill.md',
    report: 'projects/404-xskill-continual-experience-skill-learning.md',
    siteReport: 'site/public/reports/projects/404-xskill-continual-experience-skill-learning.md',
    name: 'XSkill',
    category: 'Continual Experience and Skill Learning Paper Code',
    finalCategory: '论文代码/paper-code',
    functionTag: 'paper-code',
    baseTheme: 'skill',
    stars: 221,
    forks: 27,
    commits: 16,
    issues: 1,
    pulls: 0,
    pushedAt: '2026-05-13T03:56:12Z',
    latestCommit: '2026-05-13T03:56:07Z',
    latestRelease: 'none',
    latestReleaseAt: null,
    releaseCount: 0,
    language: 'Python',
    license: 'NOASSERTION',
    stack: ['Python', 'Multimodal Agent', 'Memory Bank', 'Benchmark Eval'],
    stackSignal: 'Python/Multimodal Agent/Memory Bank/Benchmark Eval',
    description:
      'XSkill is a multimodal continual-learning paper implementation that extracts task-level skills and action-level experiences from agent trajectories, stores them in a memory bank, and re-injects them during inference across benchmark suites.',
    pattern:
      'collect multimodal trajectories -> summarize and critique experiences -> consolidate reusable skill documents and experience entries -> retrieve relevant memory for new tasks -> evaluate transfer on benchmark suites',
    tags: ['xskill', 'continual-learning', 'memory-bank', 'skills', 'benchmark'],
    title: 'XSkill Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 221 stars, 27 forks, 1 open issue, 0 open pull requests, 16 commits on `main`, latest push at 2026-05-13T03:56:12Z, no GitHub releases, and no SPDX license value returned by the API.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 221 stars, 27 forks, 1 open issue, 0 open pull requests, and 16 commits on `main`.',
      'Latest push time is 2026-05-13T03:56:12Z and the latest default-branch commit is 2026-05-13T03:56:07Z.',
      'The GitHub API returned no releases and no SPDX license value for this repository.',
      'The repository still packages multimodal continual-learning assets around memory_bank, benchmark/eval folders, and reusable experience/skill transfer.'
    ],
    role:
      'XSkill is a multimodal continual-learning paper implementation that extracts task-level skills and action-level experiences from agent trajectories, stores them in a memory bank, and re-injects them during inference across benchmark suites. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.',
    teaching:
      'Use this card to explain Continual Experience and Skill Learning Paper Code: it shows how paper-code systems accumulate trajectories, distill reusable skills, and test transfer instead of only claiming continual learning in prose.',
    limits:
      'The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'AQ-MedAI/MedMemoryBench',
    rawFile: 'raw-github/aq-medai_medmemorybench.md',
    report: 'projects/407-medmemorybench-agent-memory-benchmark.md',
    siteReport: 'site/public/reports/projects/407-medmemorybench-agent-memory-benchmark.md',
    name: 'MedMemoryBench',
    category: 'Personalized Healthcare Agent Memory Benchmark',
    finalCategory: '评测/evaluation',
    functionTag: 'benchmark-eval',
    baseTheme: 'benchmark',
    stars: 60,
    forks: 1,
    commits: 14,
    issues: 0,
    pulls: 0,
    pushedAt: '2026-05-13T13:26:05Z',
    latestCommit: '2026-05-13T13:25:57Z',
    latestRelease: 'none',
    latestReleaseAt: null,
    releaseCount: 0,
    language: 'Python',
    license: 'Apache-2.0',
    stack: ['Python', 'Healthcare Memory Benchmark', 'Longitudinal Evaluation'],
    stackSignal: 'Python/Healthcare Memory Benchmark/Longitudinal Evaluation',
    description:
      'MedMemoryBench is a benchmark for agent memory in personalized healthcare, testing whether clinical agents retain, retrieve, and use longitudinal patient context safely and accurately.',
    pattern:
      'construct longitudinal healthcare episodes -> require agents to recall and apply patient-specific context -> score temporal memory quality and downstream task success -> expose where memory retrieval helps or harms clinical reasoning',
    tags: ['memory', 'benchmark', 'healthcare', 'longitudinal-context'],
    title: 'MedMemoryBench Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 60 stars, 1 fork, 0 open issues, 0 open pull requests, 14 commits on `main`, latest push at 2026-05-13T13:26:05Z, Apache-2.0 license, and no GitHub releases.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 60 stars, 1 fork, 0 open issues, 0 open pull requests, and 14 commits on `main`.',
      'Latest push time is 2026-05-13T13:26:05Z and the latest default-branch commit is 2026-05-13T13:25:57Z.',
      'The GitHub API returned no releases for this repository.',
      'The repository still frames itself around benchmarking agent memory in personalized healthcare with longitudinal patient context.'
    ],
    role:
      'MedMemoryBench is a benchmark for agent memory in personalized healthcare, testing whether clinical agents retain, retrieve, and use longitudinal patient context safely and accurately. It matters because memory claims only become meaningful when a benchmark checks whether retained context improves decisions under domain-specific risk and temporal drift.',
    teaching:
      'Use this card to explain Personalized Healthcare Agent Memory Benchmark: it shows why memory evaluation needs longitudinal, safety-sensitive tasks instead of only generic retrieval or one-turn recall tests.',
    limits:
      'The repository was not cloned or executed in this iteration; no dataset, patient simulation, or benchmark pipeline was run locally. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  },
  {
    repo: 'wanxingai/LightAgent',
    rawFile: 'raw-github/wanxingai_lightagent.md',
    report: 'projects/139-lightagent-memory-mcp-skills.md',
    siteReport: 'site/public/reports/projects/139-lightagent-memory-mcp-skills.md',
    name: 'LightAgent',
    category: 'Memory/MCP Skill Agent Framework',
    finalCategory: '框架/framework',
    functionTag: 'framework-runtime',
    baseTheme: 'memory',
    stars: 1132,
    forks: 143,
    commits: 107,
    issues: 8,
    pulls: 0,
    pushedAt: '2026-06-05T15:00:09Z',
    latestCommit: '2026-06-05T15:00:09Z',
    latestRelease: 'LightAgent v0.8.0',
    latestReleaseAt: '2026-06-05T10:15:33Z',
    releaseCount: 21,
    language: 'Python',
    license: 'Apache-2.0',
    stack: ['Python', 'MCP', 'mem0', 'Agent Skills', 'LightFlow'],
    stackSignal: 'Python/MCP/mem0/Agent Skills/LightFlow',
    description:
      'LightAgent is a lightweight Python agent framework that combines persistent memory, MCP integration, native skills, LightSwarm collaboration, and newly surfaced LightFlow workflow orchestration into a small-footprint self-learning runtime.',
    pattern:
      'compose lightweight agents with tools, MCP, and memory -> add native skills and optional trace observability -> delegate via LightSwarm -> chain deterministic multi-step flows with LightFlow -> keep self-learning behavior grounded in runtime memory and reusable tool plans',
    tags: ['lightagent', 'memory', 'mcp', 'skills', 'workflow'],
    title: 'LightAgent Model Card',
    evidence:
      'GitHub GraphQL/API snapshot captured via authenticated `gh` on 2026-06-13 showed 1,132 stars, 143 forks, 8 open issues, 0 open pull requests, 107 commits on `main`, latest push at 2026-06-05T15:00:09Z, Apache-2.0 license, and latest release `LightAgent v0.8.0` published on 2026-06-05.',
    rawBullets: [
      'Authenticated GitHub GraphQL/API snapshot captured on 2026-06-13 showed 1,132 stars, 143 forks, 8 open issues, 0 open pull requests, and 107 commits on `main`.',
      'Latest push time is 2026-06-05T15:00:09Z and the latest default-branch commit is 2026-06-05T15:00:09Z.',
      'Latest release is `LightAgent v0.8.0`, published on 2026-06-05T10:15:33Z.',
      'The repository still frames LightAgent as a lightweight runtime combining persistent memory, MCP, native skills, LightSwarm collaboration, trace observability, and LightFlow orchestration.'
    ],
    role:
      'LightAgent is a lightweight Python agent framework that combines persistent memory, MCP integration, native skills, LightSwarm collaboration, and newly surfaced LightFlow workflow orchestration into a small-footprint self-learning runtime. It matters because self-evolving agents need explicit runtime, memory, skill, and benchmark substrates before their improvement claims become trustworthy.',
    teaching:
      'Use this card to explain Memory/MCP Skill Agent Framework: it shows how lightweight runtimes attach memory, MCP, skills, and workflow layers without becoming a monolithic product stack.',
    limits:
      'The repository was not cloned in this iteration; no benchmark run, workflow execution, or agent loop experiment was executed. Counts and claims are GitHub API snapshot signals unless independently revalidated later.'
  }
];

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, content) => fs.writeFileSync(path.join(root, file), content);

const replaceExact = (text, before, after, label) => {
  if (text.includes(after)) return text;
  if (!text.includes(before)) throw new Error(`Missing expected block for ${label}`);
  return text.replace(before, after);
};

const isoDate = (value) => String(value).slice(0, 10);
const numberText = (value) => Number(value).toLocaleString('en-US');

function rawMarkdown(repo) {
  const releaseLine = repo.latestReleaseAt
    ? `- Latest release: ${repo.latestRelease} (${repo.latestReleaseAt})\n`
    : '- Latest release: none visible via GitHub API snapshot\n';
  return `---\nrepo: ${repo.repo}\nurl: https://github.com/${repo.repo}\ncontent_timestamp: ${runDate}\ntime_slice: 2026-06\ntimestamp_source: github_graphql_api_observed_2026_06_13\ncollected_at: ${runIso}\nsource: github\nsource_tool: gh.api.graphql\n---\n\n## GitHub - ${repo.repo}: ${repo.description}\n\n**Source**: https://github.com/${repo.repo}\n\n---\n\n# Raw public metadata capture notes\n\nThis raw-style GitHub capture was refreshed by the hourly public metadata update using authenticated GitHub GraphQL/API access through \`gh\` on ${runDate}. Counts are current public API snapshot values, not local summaries.\n\n## Visible repository metadata\n\n- Repository: ${repo.repo}\n- URL: https://github.com/${repo.repo}\n- Stars: ${repo.stars}\n- Forks: ${repo.forks}\n- Commits: ${repo.commits}\n- Open issues: ${repo.issues}\n- Open pull requests: ${repo.pulls}\n- License: ${repo.license}\n- Primary language / stack signal: ${repo.stackSignal}\n- Latest push: ${repo.pushedAt}\n- Latest default-branch commit: ${repo.latestCommit}\n${releaseLine}- Collection timestamp: ${runIso}\n\n## Visible README / page excerpts\n\n${repo.rawBullets.map((line) => `- ${line}`).join('\n')}\n\n## Raw capture boundary\n\nNo benchmark was run, no source clone was modified, and no private repository metadata was used. This file preserves public GitHub API evidence for downstream classification, model-card analysis, public reports, and the site index.\n`;
}

function cardMarkdown(repo) {
  const latestSignal = `${isoDate(repo.pushedAt)} GitHub API snapshot`;
  const releaseSummary = repo.latestReleaseAt
    ? `${repo.releaseCount} releases with ${repo.latestRelease} latest on ${isoDate(repo.latestReleaseAt)}`
    : 'no GitHub releases visible in the API snapshot';
  return `# ${repo.title}\n\n| Field | Value |\n|---|---|\n| Repository | [${repo.repo}](https://github.com/${repo.repo}) |\n| Category | ${repo.category} |\n| Stars / forks snapshot | ${numberText(repo.stars)} / ${numberText(repo.forks)} |\n| Commits / issues / PRs snapshot | ${numberText(repo.commits)} / ${numberText(repo.issues)} / ${numberText(repo.pulls)} |\n| Language | ${repo.language} |\n| License | ${repo.license} |\n| Latest visible dated signal | ${latestSignal} |\n| Raw capture | ${repo.rawFile} |\n| Updated by | hourly public metadata update, ${runDisplay} |\n\n## 1. Role in Self Evolve\n\n${repo.role}\n\n## 2. Working Principle\n\n${repo.pattern}\n\n## 3. Evidence Path\n\n${repo.evidence} The snapshot also showed ${releaseSummary}. This run keeps freshness honest because it uses authenticated GitHub API data rather than stale local summaries.\n\n## 4. Teaching Use\n\n${repo.teaching}\n\n## 5. Limits\n\n${repo.limits}\n`;
}

function updateClassification() {
  const file = 'research/repo-classification.json';
  const data = JSON.parse(read(file));
  data.generated_at = runIso;
  const repoMap = new Map(repos.map((repo) => [repo.repo.toLowerCase(), repo]));
  for (const row of data.rows) {
    const repo = repoMap.get(String(row.repo || '').toLowerCase());
    if (!repo) continue;
    row.stars = String(repo.stars);
    row.final_category = repo.finalCategory;
    row.function_tag = repo.functionTag;
    row.base_theme = repo.baseTheme;
    row.stack = repo.stackSignal;
    row.time_slice = '2026-06';
    row.content_timestamp = runDate;
    row.evidence = repo.evidence;
    row.description = repo.description;
  }
  write(file, `${JSON.stringify(data, null, 2)}\n`);
}

function updateProjectsTs() {
  const file = 'site/src/data/projects.ts';
  const source = read(file);
  const match = source.match(/export const projects: Project\[\] = (\[[\s\S]*?\n\]);/);
  if (!match) throw new Error('Cannot find projects array');
  const projects = vm.runInNewContext(match[1]);
  const repoMap = new Map(repos.map((repo) => [repo.repo, repo]));
  for (const project of projects) {
    const repo = repoMap.get(project.repo);
    if (!repo) continue;
    project.description = repo.description;
    project.stack = repo.stack;
    project.category = repo.category;
    project.stars = repo.stars;
    project.forks = repo.forks;
    project.lastPushed = repo.pushedAt;
    project.language = repo.language;
    project.license = repo.license;
    project.report = repo.report.replace(/^projects\//, 'projects/');
    project.pattern = repo.pattern;
    project.tags = repo.tags;
  }
  const replacement = `export const projects: Project[] = ${JSON.stringify(projects, null, 4)};`;
  write(file, `${source.replace(match[0], replacement)}\n`);
}

function updateReadmes() {
  let text = read('README.md');
  text = replaceExact(
    text,
    '## 近期证据更新（2026-06-12）',
    '## 近期证据更新（2026-06-13）',
    'README date heading'
  );
  text = replaceExact(
    text,
    '本轮不是新增一批条目，而是把 production swarm、coding-agent harness、memory benchmark、OpenAI Agents SDK orchestrator、official OpenAI Agents SDK Python/JS baseline、continual skill-memory paper code 和轻量 memory/MCP/skill runtime 的公开数字面重新校正到 `2026-06-12` 可见证据。下面每个仓库都只回答一个问题：它补上了哪类判断证据，以及这轮是否发生了需要同步到公开面的计数修正。',
    '本轮不是新增一批条目，而是把 production swarm、coding-agent harness、memory benchmark、OpenAI Agents SDK orchestrator、official OpenAI Agents SDK Python/JS baseline、continual skill-memory paper code 和轻量 memory/MCP/skill runtime 的公开数字面重新校正到 `2026-06-13` GitHub API 快照。下面每个仓库都只回答一个问题：它补上了哪类判断证据，以及这轮是否发生了需要同步到公开面的计数修正。',
    'README summary paragraph'
  );
  text = replaceExact(
    text,
    '| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | lightweight memory/MCP/skill runtime refresh | 它把轻量 agent runtime 这条线补到 2026-06-04 的 LightFlow、native skills、persistent memory 和 trace observability 证据。 | [KNOWN] repo snapshot source-scoped；运行时能力需继续以 tests/logs 复核。 |',
    '| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | lightweight memory/MCP/skill runtime refresh | 它把轻量 agent runtime 这条线补到 2026-06-05 的 LightFlow、native skills、persistent memory 和 trace observability 证据。 | [KNOWN] repo snapshot source-scoped；运行时能力需继续以 tests/logs 复核。 |',
    'README LightAgent row'
  );
  write('README.md', text);

  text = read('README-ZH.md');
  text = replaceExact(
    text,
    '## 本轮 GitHub Metadata 修复包（2026-06-12）',
    '## 本轮 GitHub Metadata 修复包（2026-06-13）',
    'README-ZH heading'
  );
  text = replaceExact(
    text,
    '这轮重点不是新增条目，而是把 production swarm、coding-agent harness、memory benchmark 和 OpenAI Agents SDK baseline 的公开数字面校正到 `2026-06-12` 的可见 GitHub 证据，并同步 raw、分类、project card、site report 和 README 前台说明。',
    '这轮重点不是新增条目，而是把 production swarm、coding-agent harness、memory benchmark 和 OpenAI Agents SDK baseline 的公开数字面校正到 `2026-06-13` 的 GitHub API 快照，并同步 raw、分类、project card、site report 和 README 前台说明。',
    'README-ZH summary paragraph'
  );
  text = replaceExact(
    text,
    '| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | 刷新 raw capture、project card、site public report 与分类元数据，统一到 2026-06-04 的 release/README dated signal。 | 它把轻量 agent runtime 这条线补到 LightFlow、native skills、persistent memory 和 trace observability 的最新公开证据。 |',
    '| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | 刷新 raw capture、project card、site public report 与分类元数据，统一到 2026-06-05 的 release/API dated signal。 | 它把轻量 agent runtime 这条线补到 LightFlow、native skills、persistent memory 和 trace observability 的最新公开证据。 |',
    'README-ZH LightAgent row'
  );
  write('README-ZH.md', text);

  text = read('README-EN.md');
  text = replaceExact(
    text,
    '## Recent Evidence Updates (2026-06-12)',
    '## Recent Evidence Updates (2026-06-13)',
    'README-EN heading'
  );
  text = replaceExact(
    text,
    'This update is not about adding a new batch of repositories. It recalibrates the public number surface for the production swarm, coding-agent harness, safety-sensitive memory benchmark, OpenAI Agents SDK orchestrator, official OpenAI Agents SDK Python/JS baselines, continual skill-memory paper code, and lightweight memory/MCP/skill runtime against GitHub pages observed on 2026-06-12.',
    'This update is not about adding a new batch of repositories. It recalibrates the public number surface for the production swarm, coding-agent harness, safety-sensitive memory benchmark, OpenAI Agents SDK orchestrator, official OpenAI Agents SDK Python/JS baselines, continual skill-memory paper code, and lightweight memory/MCP/skill runtime against authenticated GitHub API snapshots captured on 2026-06-13.',
    'README-EN summary paragraph'
  );
  text = replaceExact(
    text,
    '| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | Lightweight memory/MCP/skill runtime refresh | It refreshes the lightweight runtime line with current public evidence for LightFlow, native skills, persistent memory, and trace observability. | [KNOWN] repo snapshot/source-scoped; runtime claims still need tests/logs review. |',
    '| [wanxingai/LightAgent](https://github.com/wanxingai/LightAgent) | Lightweight memory/MCP/skill runtime refresh | It refreshes the lightweight runtime line with the 2026-06-05 public release/API evidence for LightFlow, native skills, persistent memory, and trace observability. | [KNOWN] repo snapshot/source-scoped; runtime claims still need tests/logs review. |',
    'README-EN LightAgent row'
  );
  write('README-EN.md', text);
}

function updateGraphFiles() {
  const graph = JSON.parse(read('.mermaid/current/graph.json'));
  graph.generated_at = runIso;
  graph.nodes = [
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
      paths: ['research/repo-classification.json', 'analysis/github-project-data-analysis.md', ...repos.map((repo) => repo.report)]
    },
    {
      id: 'results.public-site',
      title: 'Public site and report surfaces',
      layer: 'results',
      status: 'updated',
      paths: ['site/src/data/projects.ts', ...repos.map((repo) => repo.siteReport), 'README.md', 'README-ZH.md', 'README-EN.md', 'CONTENT_INDEX.md']
    },
    {
      id: 'results.index-analysis',
      title: 'Indexes and GitHub corpus analysis',
      layer: 'results',
      status: 'pending-validation',
      paths: ['output/raw-github-timestamp-index.md', 'output/raw-github-timestamp-index-ZH.md', 'output/raw-github-timestamp-index.json', 'analysis/github-project-data-analysis.json', 'analysis/github-project-data-analysis.tex']
    },
    {
      id: 'work.learning-note',
      title: 'Learning note and run ledger',
      layer: 'work',
      status: 'updated',
      paths: [notePath, '.mermaid/current/graph.md', '.mermaid/current/graph.mmd']
    }
  ];
  graph.edges = [
    ['intent.direct-user-input', 'raw.github.hourly-captures', 'governs'],
    ['raw.github.hourly-captures', 'processed.github-classification', 'feeds'],
    ['processed.github-classification', 'results.public-site', 'publishes'],
    ['processed.github-classification', 'results.index-analysis', 'rebuilds'],
    ['results.public-site', 'work.learning-note', 'summarized-by'],
    ['work.learning-note', 'intent.direct-user-input', 'handoff']
  ];
  graph.current_run = {
    source: 'authenticated gh GraphQL/API snapshot',
    repos: repos.map((repo) => ({
      repo: repo.repo,
      raw_capture: repo.rawFile,
      report: repo.report,
      site_report: repo.siteReport,
      stars: repo.stars,
      forks: repo.forks,
      issues: repo.issues,
      pull_requests: repo.pulls,
      commits: repo.commits,
      latest_push: repo.pushedAt,
      latest_release: repo.latestReleaseAt ? { name: repo.latestRelease, published_at: repo.latestReleaseAt } : null,
      theme: repo.baseTheme
    })),
    blockers: [
      'Mermaid Architect `merge_graph.py --validate .mermaid/current/` currently fails with the error "list indices must be integers or slices, not str" against this graph.json schema, so graph.json remains the truth source and graph.md/.mmd are hand-rendered views.',
      'GitNexus CLI is available but stale against current HEAD until `npx gitnexus analyze` is rerun after this iteration.'
    ]
  };
  write('.mermaid/current/graph.json', `${JSON.stringify(graph, null, 2)}\n`);

  write(
    '.mermaid/current/graph.md',
    `# Current Mermaid Object Graph\n\nTruth source: \`.mermaid/current/graph.json\`\n\nGenerated: ${runIso}\n\n## Current Run Repositories\n\n${repos.map((repo) => `- **${repo.repo}** -> raw \`${repo.rawFile}\` -> card \`${repo.report}\` -> site report \`${repo.siteReport}\``).join('\n')}\n\n## Working Principle\n\nAuthenticated GitHub API snapshots -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.\n\n## Evidence Boundaries\n\n- This loop used authenticated GitHub GraphQL/API access through \`gh\`, so counts are fresher than prior web-observed packets.\n- Mermaid Architect validation is currently schema-incompatible with this \`graph.json\` ('list indices must be integers or slices, not str'), so \`graph.json\` remains truth and \`.md\` / \`.mmd\` are maintained views.\n- GitNexus CLI is available but stale until \`npx gitnexus analyze\` is rerun after the iteration.\n- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.\n`
  );

  write(
    '.mermaid/current/graph.mmd',
    `graph TD\n  intent["Direct user intent"] --> raw["authenticated GitHub API repo refresh"]\n  raw --> processed["repo classification + cards + site registry"]\n  processed --> results["README + public reports + indexes + analysis"]\n  results --> note["run note + Mermaid views"]\n  note --> intent\n`
  );
}

function updateRunNote() {
  const tableRows = repos
    .map(
      (repo) =>
        `| \`${repo.repo}\` | ${numberText(repo.stars)} | ${numberText(repo.forks)} | ${numberText(repo.commits)} | ${numberText(repo.issues)} | ${numberText(repo.pulls)} | ${isoDate(repo.pushedAt)} |`
    )
    .join('\n');
  const lines = [
    `# Hourly Public Metadata Update - ${runDisplay}`,
    '',
    '## One Sentence',
    '',
    'Refreshed the active public GitHub metadata packet with authenticated GitHub API snapshots and propagated those corrections through raw captures, processed classification, Mermaid truth state, README/i18n, project cards, site reports, and the site registry.',
    '',
    '## Three Sentences',
    '',
    'This iteration keeps the user-facing packet current for production swarm, coding-agent harness, official Agents SDK baselines, continual skill-memory paper code, safety-sensitive memory benchmark, and lightweight memory/MCP/skill runtime anchors.',
    'The freshness boundary improved relative to the 2026-06-12 loop: `gh auth status` is valid and GitHub GraphQL/API queries succeeded, so this run no longer depends on approximate public-page badge readings.',
    'The remaining blockers are separate: Mermaid Architect validation is schema-incompatible with the current object graph, and GitNexus is available but stale until re-analysis after this iteration.',
    '',
    '## Refreshed Repositories',
    '',
    '| Repo | Stars | Forks | Commits | Open issues | Open PRs | Latest push |',
    '|---|---:|---:|---:|---:|---:|---|',
    tableRows,
    '',
    '## Working Principle',
    '',
    'GitHub GraphQL/API snapshot -> `raw-github/*.md` -> `research/repo-classification.json` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> README/i18n -> Astro build and indexes.',
    '',
    '## Evidence Quality',
    '',
    '- Authenticated GitHub API path is available in this run via `gh api graphql`; counts are not fabricated from stale local summaries.',
    '- Mermaid Architect validation currently fails against this graph schema with the error `list indices must be integers or slices, not str`; `.mermaid/current/graph.json` remains the truth source and `.mmd` / `.md` are maintained views.',
    '- GitNexus CLI is installed and callable but stale before re-analysis; use its stale warning as a topology boundary, not as fresh post-edit evidence, until `npx gitnexus analyze` is rerun.',
    '- Public copy review gate remains incomplete because this session did not execute the required 3-5 reader/editor agent reviews plus 3 academic reviews.',
    '',
    '## Public Surface Changes',
    '',
    '- Updated raw captures, project cards, and site public reports for all eight active public metadata anchors.',
    '- Advanced README / README-ZH / README-EN evidence update sections from 2026-06-12 to 2026-06-13 and corrected the LightAgent dated signal to 2026-06-05.',
    '- Updated the Mermaid truth source and rendered views so the data flow reflects authenticated API refresh rather than web-observed HTML scraping.',
    '',
    '## Validation Commands',
    '',
    '- `node scripts/generate_project_indexes.mjs`',
    '- `python3 scripts/enforce_raw_timestamps.py`',
    '- `node scripts/analyze_github_project_data.mjs`',
    '- `(cd site && npm run build)`',
    '- `npx gitnexus analyze` after file changes, then inspect status before commit',
    ''
  ];
  write(
    notePath,
    `${lines.join('\n')}\n`
  );
}

function main() {
  for (const repo of repos) {
    write(repo.rawFile, rawMarkdown(repo));
    write(repo.report, cardMarkdown(repo));
    write(repo.siteReport, cardMarkdown(repo));
  }
  updateClassification();
  updateProjectsTs();
  updateReadmes();
  updateGraphFiles();
  updateRunNote();
}

main();
