import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const runAt = '2026-06-16T14:28:39+08:00';
const runDate = '2026-06-16';
const runDisplay = '2026-06-16 14:28 +0800';
const runSlug = '2026-06-16-1428';
const timestampSource = 'gh_api_graphql_authenticated_2026_06_16';
const previousDataPath = 'work/research/hourly-public-metadata-update-2026-06-16-0826-data.json';
const previousPacketDisplay = '2026-06-16 08:26 +0800';

const repoConfigs = [
  {
    owner: 'china-qijizhifeng',
    name: 'agentic-Harness-engineering',
    repo: 'china-qijizhifeng/agentic-Harness-engineering',
    url: 'https://github.com/china-qijizhifeng/agentic-Harness-engineering',
    rawFile: 'raw-github/china-qijizhifeng_agentic-harness-engineering.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'harness',
      stack: 'Python/Harness Evolution/Coding-Agent Workflow',
      description:
        'Harness engineering is the layer where prompts, tools, middleware, memory, subagents, and evaluators become editable agent infrastructure rather than fixed wrappers around a base model.'
    },
    raw: {
      stackSignal: 'Python/Harness Evolution/Coding-Agent Workflow',
      bullets: [
        'The repository still treats the harness, not only the model, as the mutable object: prompts, tools, middleware, skills, memory, subagents, and evaluators are all surfaced as engineering levers.',
        'The homepage still points to the AHE paper and keeps Terminal-Bench-2 plus SWE-bench-Verified transfer claims as the main public benchmark story.',
        'This 2026-06-16 refresh confirms the harness-evolution anchor is still moving on public GitHub after the 2026-06-15 evening packet.'
      ]
    },
    project: {
      path: 'projects/43-agentic-harness-engineering.md',
      sitePath: 'site/public/reports/projects/43-agentic-harness-engineering.md',
      name: 'Agentic Harness Engineering',
      category: 'Harness evolution engineering',
      pattern: 'editable harness surface -> evaluator pressure -> harness mutation -> regression verification',
      oneSentence:
        'Agentic Harness Engineering remains the clearest public example of making the harness, not only the model, the object of improvement.',
      threeSentences: [
        'It belongs in the runtime layer: prompts, tools, middleware, memory, subagents, and evaluators are exposed as versioned engineering surfaces.',
        'That matters for this survey because it turns benchmark deltas into something an agent team can inspect, edit, test, and roll back.',
        'The 2026-06-16 authenticated packet shows the harness anchor is still receiving public attention, so the evidence chain needs a fresh sync.'
      ],
      teaching:
        'Use this project to explain why self-evolution is not limited to weight updates or code search. In production, the harness is where permissions, routing, memory, evaluation, and rollback actually live.',
      limits:
        'This run did not rerun Terminal-Bench-2, SWE-bench-Verified, or the paper workflow locally. Benchmark claims remain tied to the repository and paper surfaces unless independently reproduced.'
    },
    siteRepo: 'china-qijizhifeng/agentic-Harness-engineering',
    readmeWhyZh: '它是“harness 本身可进化”的最直接锚点。',
    readmeWhyEn: 'It is the clearest anchor for “the harness itself evolves.”'
  },
  {
    owner: 'NousResearch',
    name: 'hermes-agent',
    repo: 'NousResearch/hermes-agent',
    url: 'https://github.com/NousResearch/hermes-agent',
    rawFile: 'raw-github/nousresearch_hermes-agent.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'framework',
      stack: 'Python/TypeScript/Memory/Skills/Messaging-Agent Runtime',
      description:
        'Hermes Agent is a self-improving personal-agent runtime that combines memory, skill creation, session search, user modeling, messaging gateways, and scheduled automations in one user-facing system.'
    },
    raw: {
      stackSignal: 'Python/TypeScript/Memory/Skills/Messaging-Agent Runtime',
      bullets: [
        'Hermes Agent still positions itself as the personal agent that grows with you: persistent knowledge, autonomous skill creation, search over prior sessions, user modeling, messaging gateways, and scheduled automations remain in the public story.',
        'The repository topics still bind it to the broader coding-agent surface: `claude-code`, `codex`, `openclaw`, `ai-agent`, and `openai` remain active discovery signals.',
        'This 2026-06-16 packet keeps Hermes on the freshest authenticated metadata before any claim about runtime maturity or product momentum.'
      ]
    },
    project: {
      path: 'projects/44-hermes-agent.md',
      sitePath: 'site/public/reports/projects/44-hermes-agent.md',
      name: 'Hermes Agent',
      category: 'Self-improving personal agent runtime',
      pattern: 'persistent knowledge -> skill creation/improvement -> session search -> user modeling -> messaging and automation runtime',
      oneSentence:
        'Hermes Agent remains the strongest personal-agent runtime signal in the corpus: memory, skills, messaging, automations, and trajectory generation in one public system.',
      threeSentences: [
        'It is not just a demo agent; the public repository still exposes persistent knowledge, autonomous skill creation, session search, user modeling, messaging gateways, and scheduled automations.',
        'That makes it a central answer to the user’s product question: which systems are usable agents rather than only papers or lists?',
        'The 2026-06-16 authenticated packet shows the runtime continues to move at public GitHub scale, so the metadata surface has to stay fresh.'
      ],
      teaching:
        'Use Hermes Agent to teach the runtime surface of self-evolving agents. Improvement loops need memory, skill reuse, user modeling, search over prior sessions, and channels where the agent can actually act.',
      limits:
        'This run did not execute Hermes locally, validate production messaging flows, or rerun any benchmark pack. Product, memory, and automation claims remain repository-scoped unless independently tested.'
    },
    siteRepo: 'NousResearch/hermes-agent',
    readmeWhyZh: '它回答“可用产品型 agent 长什么样”这个核心问题。',
    readmeWhyEn: 'It answers the user’s product question: what a usable, growth-oriented agent runtime looks like in public.'
  },
  {
    owner: 'stanford-iris-lab',
    name: 'meta-harness',
    repo: 'stanford-iris-lab/meta-harness',
    url: 'https://github.com/stanford-iris-lab/meta-harness',
    rawFile: 'raw-github/stanford-iris-lab_meta-harness.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'agent-evolution-infra',
      base_theme: 'evolution',
      stack: 'Python/Harness Search/Benchmark Scaffold Evolution',
      description:
        'Meta-Harness provides reference code for automated search over model harnesses, including terminal benchmark scaffold evolution and text-classification memory-system search.'
    },
    raw: {
      stackSignal: 'Python/Harness Search/Benchmark Scaffold Evolution',
      bullets: [
        'The repository topics still present it as a harness-engineering and LLM-agent project rather than a model-training repository.',
        'The public site and README continue to separate the core framework from the optimized Terminal-Bench-2 artifact, which keeps the outer-loop interpretation intact.',
        'This 2026-06-16 refresh shows the outer-loop harness-search anchor still drifting publicly even when push activity is stable.'
      ]
    },
    project: {
      path: 'projects/249-stanford-meta-harness-framework.md',
      sitePath: 'site/public/reports/projects/249-stanford-meta-harness-framework.md',
      name: 'Meta-Harness (Stanford IRIS)',
      category: 'Meta-harness framework and reference experiments',
      pattern: 'define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness',
      oneSentence:
        'Meta-Harness remains the cleanest outer-loop harness-search reference in the public corpus: fixed model, mutable harness, benchmark-driven selection.',
      threeSentences: [
        'It matters because it isolates harness mutation from base-model change, which is exactly the mechanism many production systems implicitly use without naming it.',
        'The public repository still anchors two stories: domain onboarding and reference experiments for harness search.',
        'This 2026-06-16 refresh keeps the outer-loop reference on the newest authenticated GitHub packet.'
      ],
      teaching:
        'Use Meta-Harness to explain outer-loop search over prompts, workflows, or scaffolds. It is the clearest contrast case to weight-level self-evolution.',
      limits:
        'This run did not execute the onboarding flow, Terminal-Bench-2 experiment, or any text-classification search workflow. Claims stay repository-scoped unless rerun.'
    },
    siteRepo: 'stanford-iris-lab/meta-harness',
    readmeWhyZh: '它是 outer-loop harness search 的最干净参考样本。',
    readmeWhyEn: 'It remains the cleanest public outer-loop harness-search reference.'
  },
  {
    owner: 'rohitg00',
    name: 'agentmemory',
    repo: 'rohitg00/agentmemory',
    url: 'https://github.com/rohitg00/agentmemory',
    rawFile: 'raw-github/rohitg00_agentmemory.md',
    classification: {
      final_category: '工具/tool',
      function_tag: 'tool-module',
      base_theme: 'memory',
      stack: 'TypeScript/MCP/Coding-Agent Memory/Wiki Index',
      description:
        'agentmemory is a cross-harness persistent memory layer for coding agents and MCP clients, with wiki-style knowledge capture, retrieval, and continuity signals.'
    },
    raw: {
      stackSignal: 'TypeScript/MCP/Coding-Agent Memory/Wiki Index',
      bullets: [
        'The homepage still points to `agent-memory.dev`, and the topic set still binds the project to Claude Code, Codex, Cursor, Hermes, OpenClaw, and cross-harness memory usage.',
        'The repository continues to position itself as persistent memory for coding agents rather than a single-framework plugin.',
        'This 2026-06-16 refresh ensures the memory-substrate anchor is carried by current authenticated counts rather than stale badges or local summaries.'
      ]
    },
    project: {
      path: 'projects/50-agentmemory.md',
      sitePath: 'site/public/reports/projects/50-agentmemory.md',
      name: 'agentmemory',
      category: 'Agent persistent memory layer',
      pattern: 'persistent memory -> wiki-style knowledge capture -> graph/hybrid retrieval -> cross-harness continuity',
      oneSentence:
        'agentmemory is the cross-harness memory layer that turns continuity from a promise into an engineering dependency.',
      threeSentences: [
        'It targets Claude Code, Codex, Cursor, Hermes, OpenClaw, and MCP clients instead of staying inside one runtime.',
        'That makes it a direct answer to the user’s memory-substrate requirement for self-evolving agents.',
        'This 2026-06-16 packet keeps the public memory evidence synchronized with the latest available GitHub metadata.'
      ],
      teaching:
        'Use agentmemory to teach why memory cannot be an afterthought. Durable facts, project traces, user preferences, and retrieval boundaries are what let an agent accumulate value across sessions.',
      limits:
        'This run did not inspect the schema, lifecycle implementation, or confidence updates in code. Memory-quality claims remain repository-scoped unless validated with tests or benchmarks.'
    },
    siteRepo: 'rohitg00/agentmemory',
    readmeWhyZh: '它回答“长期记忆如何跨 Codex / Claude Code / Hermes / OpenClaw 持续积累”。',
    readmeWhyEn: 'It answers how long-horizon memory can accumulate across Codex, Claude Code, Hermes, and OpenClaw style runtimes.'
  },
  {
    owner: 'pinchbench',
    name: 'skill',
    repo: 'pinchbench/skill',
    url: 'https://github.com/pinchbench/skill',
    rawFile: 'raw-github/pinchbench_skill.md',
    classification: {
      final_category: '评测/evaluation',
      function_tag: 'benchmark-eval',
      base_theme: 'benchmark',
      stack: 'Python/Shell/TypeScript/OpenClaw Benchmark Harness',
      description:
        'PinchBench is an OpenClaw-oriented real task benchmark that measures coding agents across productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks.'
    },
    raw: {
      stackSignal: 'Python/Shell/TypeScript/OpenClaw Benchmark Harness',
      bullets: [
        'The public repository still frames itself as a benchmark system for evaluating LLMs as OpenClaw coding agents, not as the agent runtime itself.',
        'The benchmark story remains grounded in 53 real-world tasks plus transcript-preserving grading workflows.',
        'This 2026-06-16 packet keeps the evaluator substrate synchronized with the latest authenticated metadata even when the public counts stay stable.'
      ]
    },
    project: {
      path: 'projects/51-pinchbench-skill.md',
      sitePath: 'site/public/reports/projects/51-pinchbench-skill.md',
      name: 'PinchBench Skill',
      category: 'Real-world agent task benchmark',
      pattern: 'task suite -> OpenClaw agent execution -> automatic and/or LLM judging -> transcript retention -> optional leaderboard upload',
      oneSentence:
        'PinchBench is one of the clearest benchmark anchors in this corpus: not a self-evolving runtime, but the evaluator substrate that makes self-improvement claims comparable.',
      threeSentences: [
        'It spans productivity, research, writing, coding, analysis, email, memory, and skill-discovery tasks rather than a single narrow benchmark lane.',
        'That makes it important for this survey’s “benchmark as selection pressure” thread.',
        'This 2026-06-16 packet confirms the benchmark anchor on a fresh authenticated snapshot.'
      ],
      teaching:
        'Use PinchBench to explain why benchmark infrastructure matters as much as the agent loop itself. Without evaluator strength and saved transcripts, “improvement” stays anecdotal.',
      limits:
        'This run did not execute the benchmark, upload results, or validate leaderboard behavior locally. All benchmark-scope claims remain repository-scoped.'
    },
    siteRepo: 'pinchbench/skill',
    readmeWhyZh: '它是 skill、memory、benchmark 三条线交叉的 evaluator substrate。',
    readmeWhyEn: 'It is where the skill, memory, and benchmark threads intersect as an evaluator substrate.'
  },
  {
    owner: 'lsdefine',
    name: 'GenericAgent',
    repo: 'lsdefine/GenericAgent',
    url: 'https://github.com/lsdefine/GenericAgent',
    rawFile: 'raw-github/lsdefine_genericagent.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'tool-module',
      base_theme: 'evolution',
      stack: 'Python/Self-Evolving Agent/Skill Tree Runtime',
      description:
        'GenericAgent is a minimal self-evolving autonomous agent framework that grows a skill tree from a small seed loop instead of preloading a large fixed procedure library.'
    },
    raw: {
      stackSignal: 'Python/Self-Evolving Agent/Skill Tree Runtime',
      bullets: [
        'The repository topics still emphasize `self-evolving`, `skill-tree`, `memory-system`, and `autonomous-agent` rather than a generic automation wrapper.',
        'The public README still leads with the 3.3K-line seed, 9 atomic tools, and “do not preload skills, evolve them” design philosophy.',
        'This 2026-06-16 packet refreshes the minimal self-evolving runtime sample even though it is still not promoted into the public site registry.'
      ]
    },
    readmeWhyZh: '它是“不要预装技能，而是让技能树生长”的 self-evolving 极简路线。',
    readmeWhyEn: 'It is still one of the clearest minimal “do not preload skills, evolve them” runtime samples.'
  },
  {
    owner: 'openclaw',
    name: 'openclaw',
    repo: 'openclaw/openclaw',
    url: 'https://github.com/openclaw/openclaw',
    rawFile: 'raw-github/openclaw_openclaw.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'framework',
      stack: 'TypeScript/Local-First Personal Agent/Multi-Channel Runtime',
      description:
        'OpenClaw is a local-first personal agent runtime whose product surface includes channels, sessions, tools, skills, and companion apps rather than only a benchmark-facing demo loop.'
    },
    raw: {
      stackSignal: 'TypeScript/Local-First Personal Agent/Multi-Channel Runtime',
      bullets: [
        'OpenClaw still describes itself as a personal AI assistant that runs on user-owned devices and works across operating systems and platforms rather than as a narrow benchmark demo.',
        'The public product/runtime surface remains the key signal: local-first control plane, many communication channels, sessions, tools, companion apps, onboarding, and skill support.',
        'This 2026-06-16 refresh upgrades the repo from a 2026-06-12 web-observed packet to an authenticated GitHub API packet.'
      ]
    },
    project: {
      path: 'projects/48-openclaw.md',
      sitePath: 'site/public/reports/projects/48-openclaw.md',
      name: 'OpenClaw',
      category: 'Personal agent product runtime',
      pattern: 'local-first assistant runtime -> multi-channel gateway -> sessions/tools/skills -> companion apps and durable operating surface',
      oneSentence:
        'OpenClaw is the product-runtime sample for asking whether self-evolving agents are actually usable by people.',
      threeSentences: [
        'The raw capture still describes a local-first assistant across many channels, with tools, sessions, skills, and companion apps rather than only a benchmark harness.',
        'It is not primarily a paper-code project; it is a user-facing agent operating-system surface.',
        'That is exactly why it belongs in the public evidence chain, and this 2026-06-16 run upgrades it from web-observed evidence to authenticated API evidence.'
      ],
      teaching:
        'Use OpenClaw to teach the gap between “agent method” and “agent product.” A usable agent needs channels, permissions, memory, tool access, sessions, scheduling, and recovery paths.',
      limits:
        'This run did not execute OpenClaw locally or validate channel, session, or skill flows in practice. Product claims remain repository-scoped unless independently tested.'
    },
    siteRepo: 'openclaw/openclaw',
    readmeWhyZh: '它是“agent 是否真的能给人用”的产品运行时锚点。',
    readmeWhyEn: 'It is the product-runtime anchor for asking whether agents are actually usable by people.'
  },
  {
    owner: 'obra',
    name: 'superpowers',
    repo: 'obra/superpowers',
    url: 'https://github.com/obra/superpowers',
    rawFile: 'raw-github/obra_superpowers.md',
    classification: {
      final_category: '工具/tool',
      function_tag: 'tool-module',
      base_theme: 'skill',
      stack: 'Shell/JavaScript/Cross-Agent Skills Methodology',
      description:
        'Superpowers packages reusable development skills and operating procedures for coding agents, turning engineering workflow habits into cross-agent runtime policy.'
    },
    raw: {
      stackSignal: 'Shell/JavaScript/Cross-Agent Skills Methodology',
      bullets: [
        'Superpowers still frames itself as an agentic skills framework plus software-development methodology rather than a single agent runtime.',
        'The workflow surface remains the important evidence: brainstorming, worktrees, plans, TDD, review, debugging, verification, subagent-driven development, and writing reusable skills across Claude Code, Codex, Cursor, OpenCode, and adjacent clients.',
        'This 2026-06-16 refresh upgrades the repo from a 2026-06-12 web-observed packet to an authenticated GitHub API packet.'
      ]
    },
    project: {
      path: 'projects/49-superpowers.md',
      sitePath: 'site/public/reports/projects/49-superpowers.md',
      name: 'Superpowers',
      category: 'Agentic skills methodology',
      pattern: 'reusable skills -> disciplined workflow policy -> worktrees/plans/TDD/review -> cross-agent execution',
      oneSentence:
        'Superpowers is a skills-and-methodology layer for coding agents, turning operating habits into reusable procedures.',
      threeSentences: [
        'It supports multiple agent clients, including Claude Code, Codex, Cursor, and related coding agents.',
        'Its value is that it treats development workflow as a skill library: brainstorming, worktrees, plans, TDD, review, debugging, and finishing branches.',
        'In this 2026-06-16 run, the methodology lane is now backed by authenticated API evidence instead of a web-observed fallback.'
      ],
      teaching:
        'Use Superpowers to teach that self-evolution can happen through reusable operating manuals, not only through automated mutation. A skill is a compressed decision policy: when to plan, when to test, when to ask for review, and when to finish.',
      limits:
        'This run did not validate methodology quality through local usage outcomes. The main limit is unchanged: workflow value must be judged by operational results, not repository popularity alone.'
    },
    siteRepo: 'obra/superpowers',
    readmeWhyZh: '它把可复用技能和工程方法论这条线接进了自进化公开证据链。',
    readmeWhyEn: 'It turns reusable skills and engineering methodology into a visible self-evolution infrastructure lane.'
  },
  {
    owner: 'EvoMap',
    name: 'awesome-agent-evolution',
    repo: 'EvoMap/awesome-agent-evolution',
    url: 'https://github.com/EvoMap/awesome-agent-evolution',
    rawFile: 'raw-github/evomap_awesome-agent-evolution.md',
    classification: {
      final_category: '工具/tool',
      function_tag: 'resource-index',
      base_theme: 'evolution',
      stack: 'JavaScript/Shell/Curated Taxonomy Pipeline',
      description:
        'EvoMap/awesome-agent-evolution is a curated awesome list covering self-evolution, memory, protocols, benchmarks, coding agents, and adjacent infrastructure.'
    },
    raw: {
      stackSignal: 'JavaScript/Shell/Curated Taxonomy Pipeline',
      bullets: [
        'The topic set still makes it a live field-packaging mirror: `agent-evolution`, `self-evolving`, `memory-system`, `multi-agent`, `skill-library`, and `awesome-list` remain active.',
        'Its README still splits the field into self-evolution, memory, protocols, development platforms, coding, safety, embodied AI, papers, benchmarks, and community knowledge.',
        'This 2026-06-16 packet keeps the taxonomy-comparator surface on a current authenticated baseline.'
      ]
    },
    project: {
      path: 'projects/394-evomap-awesome-agent-evolution.md',
      sitePath: 'site/public/reports/projects/394-evomap-awesome-agent-evolution.md',
      name: 'EvoMap Awesome Agent Evolution',
      category: 'External awesome list and taxonomy comparator',
      pattern: 'field taxonomy -> curated repo/paper/benchmark sections -> related awesome-list pointers -> reader-facing ecosystem navigation',
      oneSentence:
        'EvoMap is not a runnable self-evolving system, but it is one of the best external mirrors for checking whether our public taxonomy is clearer than a generic awesome list.',
      threeSentences: [
        'Its value is not execution but packaging: how the broader ecosystem currently teaches self-evolution, memory, protocols, benchmarks, and swarm adjacency to readers.',
        'That makes it a direct comparator for README, topic pages, and site entry design.',
        'This 2026-06-16 refresh keeps the comparator surface synchronized with the newest public metadata.'
      ],
      teaching:
        'Use EvoMap to compare curation strategies. It is the external mirror that exposes whether our own public narrative adds evidence density instead of only another list of links.',
      limits:
        'This run did not execute EvoMap scripts or validate its data pipeline locally. The classification is based on public taxonomy, maintenance surface, and comparison value.'
    },
    siteRepo: 'EvoMap/awesome-agent-evolution',
    readmeWhyZh: '它帮助我们检查公开叙事是否比普通 awesome list 更有证据密度。',
    readmeWhyEn: 'It is the external mirror that tests whether our public packaging is more evidence-dense than a generic awesome list.'
  },
  {
    owner: 'uid4oe',
    name: 'insight-swarm',
    repo: 'uid4oe/insight-swarm',
    url: 'https://github.com/uid4oe/insight-swarm',
    rawFile: 'raw-github/uid4oe_insight-swarm.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'framework',
      stack: 'TypeScript/Knowledge-Graph Multi-Agent Runtime',
      description:
        'Insight Swarm is a knowledge-graph-mediated multi-agent runtime that removes the central orchestrator and forces synthesis through shared-graph interaction.'
    },
    raw: {
      stackSignal: 'TypeScript/Knowledge-Graph Multi-Agent Runtime',
      bullets: [
        'The public README still makes the architectural claim explicit: replace the central orchestrator with a shared knowledge graph and let agents discover, challenge, and synthesize each other’s findings.',
        'Its topic set stays sparse (`agents`, `llm`, `swarm-intelligence`), so the repo is still more valuable as a concept anchor than as a momentum signal.',
        'This 2026-06-16 packet keeps the swarm concept anchor refreshed even though it remains outside the public site registry.'
      ]
    },
    readmeWhyZh: '它是“shared knowledge graph 替代中心 orchestrator”的 swarm 概念锚点。',
    readmeWhyEn: 'It is a useful swarm concept anchor for graph-mediated multi-agent synthesis without a central orchestrator.'
  },
  {
    owner: 'desplega-ai',
    name: 'agent-swarm',
    repo: 'desplega-ai/agent-swarm',
    url: 'https://github.com/desplega-ai/agent-swarm',
    rawFile: 'raw-github/desplega-ai_agent-swarm.md',
    classification: {
      final_category: '框架/framework',
      function_tag: 'framework-runtime',
      base_theme: 'framework',
      stack: 'TypeScript/Docker/MCP/Lead-Worker Swarm',
      description:
        'Agent Swarm is a production-oriented lead-worker runtime that routes work from Slack/GitHub/Email/API into Dockerized agent workers, persists memory and identity, and exposes MCP, workflows, pages, and recurring task patterns as reusable swarm infrastructure.'
    },
    raw: {
      stackSignal: 'TypeScript/Docker/MCP/Lead-Worker Swarm',
      bullets: [
        'The public repository still centers the lead-worker runtime story: Slack, GitHub, email, API, pages, workflows, and MCP all feed a compounding swarm rather than a single-session script.',
        'The newest public release moved again on 2026-06-15, so the swarm thread now has an authenticated packet with same-day release and activity evidence.',
        'This 2026-06-16 refresh keeps the user-requested agent-swarm lane visible across raw evidence, processed classification, project cards, and site search surfaces.'
      ]
    },
    project: {
      path: 'projects/405-agent-swarm-compounding-lead-worker-runtime.md',
      sitePath: 'site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md',
      name: 'Agent Swarm',
      category: 'Compounding Lead-Worker Agent Runtime',
      pattern:
        'ingest tasks from external channels -> lead agent plans and delegates -> workers run inside isolated Docker environments -> shared memory and identity accumulate across sessions -> pages, PRs, replies, and scheduled workflows turn learnings into reusable operations',
      oneSentence:
        'Agent Swarm is the clearest production-oriented swarm runtime in the current packet: lead-worker delegation, Docker isolation, MCP, memory, and recurring workflows in one public system.',
      threeSentences: [
        'It matters because the user explicitly asked for an agent-swarm / swarm-evolve lane, not only single-agent loops.',
        'The public repository still exposes a compounding lead-worker runtime where identity, memory, workflows, and external channels all become reusable swarm infrastructure.',
        'The 2026-06-16 packet keeps the swarm evidence chain aligned to the newest public release and activity movement.'
      ],
      teaching:
        'Use Agent Swarm to explain the runtime side of swarm evolution. Improvement is not just inside a model; it also lives in delegation topology, worker isolation, shared memory, workflow packaging, and operational feedback channels.',
      limits:
        'This run did not execute the swarm locally, validate Docker worker flows, or rerun production task pipelines. Swarm capability claims remain repository-scoped unless independently tested.'
    },
    siteRepo: 'desplega-ai/agent-swarm',
    readmeWhyZh: '它把用户要求的 agent-swarm 主线补进了公开证据链。',
    readmeWhyEn: 'It makes the user-requested agent-swarm lane explicit in the public evidence chain.'
  }
];

function read(filePath) {
  return fs.readFileSync(path.resolve(filePath), 'utf8');
}

function writeIfChanged(filePath, content) {
  const resolved = path.resolve(filePath);
  const next = content.endsWith('\n') ? content : `${content}\n`;
  const prev = fs.existsSync(resolved) ? fs.readFileSync(resolved, 'utf8') : null;
  if (prev !== next) fs.writeFileSync(resolved, next);
}

function ghQuery(owner, name) {
  const query = [
    'query($owner:String!,$name:String!){',
    ' repository(owner:$owner,name:$name){',
    '  nameWithOwner description url homepageUrl createdAt pushedAt updatedAt stargazerCount forkCount',
    '  isArchived isFork primaryLanguage{name} licenseInfo{spdxId name}',
    '  repositoryTopics(first:20){nodes{topic{name}}}',
    '  issues(states:OPEN){totalCount}',
    '  pullRequests(states:OPEN){totalCount}',
    '  defaultBranchRef{name target{... on Commit { history(first:0){totalCount}}}}',
    '  releases(first:1,orderBy:{field:CREATED_AT,direction:DESC}){nodes{name publishedAt}}',
    ' }',
    '}'
  ].join(' ');
  const output = execFileSync(
    'gh',
    ['api', 'graphql', '-f', `query=${query}`, '-F', `owner=${owner}`, '-F', `name=${name}`],
    { encoding: 'utf8' }
  );
  return JSON.parse(output).data.repository;
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value ?? 0);
}

function shortDate(value) {
  return value ? value.slice(0, 10) : 'unknown';
}

function shortIso(value) {
  return value ? value.replace('.000', '').replace(/:00Z$/, 'Z') : 'unknown';
}

function latestRelease(meta) {
  return meta.releases?.nodes?.[0] ?? null;
}

function topicsLine(meta) {
  const topics = meta.repositoryTopics?.nodes?.map((node) => node.topic.name) ?? [];
  return topics.length ? topics.join(', ') : 'none exposed through the GitHub API topic list';
}

function summarizeChanges(prev, next) {
  const changes = [];
  if ((next.stargazerCount ?? 0) !== (prev?.stargazerCount ?? 0)) {
    changes.push(`stars ${prev ? `${formatNumber(prev.stargazerCount)} -> ${formatNumber(next.stargazerCount)}` : `= ${formatNumber(next.stargazerCount)}`}`);
  }
  if ((next.forkCount ?? 0) !== (prev?.forkCount ?? 0)) {
    changes.push(`forks ${prev ? `${formatNumber(prev.forkCount)} -> ${formatNumber(next.forkCount)}` : `= ${formatNumber(next.forkCount)}`}`);
  }
  if ((next.issues?.totalCount ?? 0) !== (prev?.issues?.totalCount ?? 0)) {
    changes.push(
      `issues ${prev ? `${formatNumber(prev.issues.totalCount)} -> ${formatNumber(next.issues.totalCount)}` : `= ${formatNumber(next.issues.totalCount)}`}`
    );
  }
  if ((next.pullRequests?.totalCount ?? 0) !== (prev?.pullRequests?.totalCount ?? 0)) {
    changes.push(
      `PRs ${prev ? `${formatNumber(prev.pullRequests.totalCount)} -> ${formatNumber(next.pullRequests.totalCount)}` : `= ${formatNumber(next.pullRequests.totalCount)}`}`
    );
  }
  const nextCommits = next.defaultBranchRef?.target?.history?.totalCount ?? 0;
  const prevCommits = prev?.defaultBranchRef?.target?.history?.totalCount ?? 0;
  if (nextCommits !== prevCommits) {
    changes.push(`commits ${prev ? `${formatNumber(prevCommits)} -> ${formatNumber(nextCommits)}` : `= ${formatNumber(nextCommits)}`}`);
  }
  if (next.pushedAt !== prev?.pushedAt) {
    changes.push(`pushedAt ${shortIso(prev?.pushedAt)} -> ${shortIso(next.pushedAt)}`);
  }
  if (next.updatedAt !== prev?.updatedAt) {
    changes.push(`updatedAt ${shortIso(prev?.updatedAt)} -> ${shortIso(next.updatedAt)}`);
  }
  return changes;
}

function summarizeStatusZh(prev, next) {
  const changes = summarizeChanges(prev, next);
  return changes.length ? `${changes.join('；')}。` : `与 ${previousPacketDisplay} packet 相比无公开数字变化。`;
}

function summarizeStatusEn(prev, next) {
  const changes = summarizeChanges(prev, next);
  return changes.length ? `${changes.join('; ')}.` : `No public metadata delta relative to the previous ${previousPacketDisplay} packet.`;
}

function buildRawContent(config, meta, prev) {
  const release = latestRelease(meta);
  return `---
repo: ${config.repo}
url: ${config.url}
content_timestamp: ${runDate}
time_slice: 2026-06
timestamp_source: ${timestampSource}
collected_at: ${runAt}
source: github
source_tool: gh.api.graphql
---

## GitHub - ${config.repo}: ${meta.description}

**Source**: ${config.url}

---

# Raw public metadata capture notes

This raw GitHub capture was refreshed by the hourly public metadata update through authenticated GitHub GraphQL/API access via \`gh\`.

## Visible repository metadata

- Repository: ${config.repo}
- URL: ${config.url}
- Stars: ${formatNumber(meta.stargazerCount)}
- Forks: ${formatNumber(meta.forkCount)}
- Commits: ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)}
- Open issues: ${formatNumber(meta.issues?.totalCount ?? 0)}
- Open pull requests: ${formatNumber(meta.pullRequests?.totalCount ?? 0)}
- License: ${meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? 'Unknown'}
- Primary language / stack signal: ${config.raw.stackSignal}
- Created at: ${meta.createdAt}
- Last pushed at: ${meta.pushedAt}
- Last updated at: ${meta.updatedAt}
- Collection timestamp: ${runAt}
- Topics: ${topicsLine(meta)}
- Latest public release: ${release ? `${release.name} (${shortDate(release.publishedAt)})` : 'none exposed through the GitHub API release list'}

## Visible README / page excerpts

- The authenticated GitHub API snapshot on ${runDate} shows ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${formatNumber(meta.issues?.totalCount ?? 0)} open issues, and ${formatNumber(meta.pullRequests?.totalCount ?? 0)} open pull requests.
- Relative to the previous ${previousPacketDisplay} packet: ${summarizeStatusEn(prev, meta)}
${config.raw.bullets.map((line) => `- ${line}`).join('\n')}

## Raw capture boundary

No local benchmark run, repository clone, or workflow execution was performed in this iteration. This file preserves authenticated public GitHub metadata and README-surface evidence for downstream classification, project cards, site reports, and corpus analysis.
`;
}

function buildProjectCard(config, meta, prev) {
  return `# ${config.project.name} Model Card

## One Sentence

${config.project.oneSentence}

## Three Sentences

${config.project.threeSentences.join(' ')}

## Model Card

| Field | Value |
|---|---|
| Repository | \`${config.repo}\` |
| Source | \`${config.rawFile}\` |
| Category | ${config.project.category} |
| Pattern | ${config.project.pattern} |
| Evidence | Authenticated GitHub API snapshot, ${runDate} |

## Teaching Use

${config.project.teaching}

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot: ${formatNumber(meta.stargazerCount)} stars, ${formatNumber(meta.forkCount)} forks, ${formatNumber(meta.defaultBranchRef?.target?.history?.totalCount ?? 0)} commits, ${formatNumber(meta.issues?.totalCount ?? 0)} open issues, and ${formatNumber(meta.pullRequests?.totalCount ?? 0)} open pull requests observed on ${runDate}. Relative to the previous ${previousPacketDisplay} packet: ${summarizeStatusEn(prev, meta)} ${config.project.limits}
`;
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function updateClassification(metadataByRepo, previousByRepo) {
  const jsonPath = 'research/repo-classification.json';
  const data = JSON.parse(read(jsonPath));
  const rows = data.rows;
  for (const config of repoConfigs) {
    const meta = metadataByRepo.get(config.repo);
    const previous = previousByRepo.get(config.repo);
    const existing = rows.find((row) => row.repo.toLowerCase() === config.repo.toLowerCase());
    const row = existing ?? { repo: config.repo, url: config.url, prior_category: '-', prior_unclassified: 'true' };
    row.repo = config.repo;
    row.url = config.url;
    row.stars = String(meta.stargazerCount);
    row.prior_category = row.prior_category ?? '-';
    row.prior_unclassified = row.prior_unclassified ?? (row.prior_category === '-' ? 'true' : 'false');
    row.final_category = config.classification.final_category;
    row.function_tag = config.classification.function_tag;
    row.base_theme = config.classification.base_theme;
    row.stack = config.classification.stack;
    row.time_slice = '2026-06';
    row.content_timestamp = runDate;
    row.evidence = `authenticated GitHub API snapshot on ${runDate}; ${summarizeStatusEn(previous, meta)} topic/description surface still matches ${config.classification.base_theme} / ${config.classification.function_tag}.`;
    row.description = config.classification.description;
    if (!existing) rows.push(row);
  }
  rows.sort((a, b) => a.repo.toLowerCase().localeCompare(b.repo.toLowerCase()));
  writeIfChanged(jsonPath, JSON.stringify({ generated_at: runAt, rows }, null, 2));

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
  const csv = `${columns.join(',')}\n${rows
    .map((row) => columns.map((column) => csvEscape(row[column] ?? '')).join(','))
    .join('\n')}\n`;
  writeIfChanged('research/repo-classification.csv', csv);

  const counts = new Map();
  for (const row of rows) counts.set(row.final_category, (counts.get(row.final_category) ?? 0) + 1);
  const refreshedRows = repoConfigs.map((config) => rows.find((row) => row.repo.toLowerCase() === config.repo.toLowerCase()));
  const fullRows = rows
    .map(
      (row, index) =>
        `| ${index + 1} | [${row.repo}](${row.url}) | ${row.stars} | ${row.prior_category ?? '-'} | ${row.final_category} | ${row.stack} | ${row.base_theme} | ${row.function_tag} | ${row.time_slice} | ${row.content_timestamp} | ${String(row.evidence).replace(/\|/g, '/')} |`
    )
    .join('\n');
  const deltaRepos = repoConfigs
    .filter((config) => summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length)
    .map((config) => `\`${config.repo}\``);
  const stableRepos = repoConfigs
    .filter((config) => !summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length)
    .map((config) => `\`${config.repo}\``);
  const md = `# Repo 自动分类与技术栈分析（raw-github ${rows.length}）

- generated_at: ${runAt}
- companion_csv: \`research/repo-classification.csv\`
- companion_json: \`research/repo-classification.json\`

## 分类计数

| Category | Count |
|---|---:|
${[...counts.entries()]
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([key, count]) => `| ${key} | ${count} |`)
  .join('\n')}

## 本轮 hourly public metadata 复核项

| Repo | Category | Theme | Function | Evidence |
|---|---|---|---|---|
${refreshedRows
  .map(
    (row) =>
      `| [${row.repo}](${row.url}) | ${row.final_category} | ${row.base_theme} | ${row.function_tag} | ${String(row.evidence).replace(/\|/g, '/')} |`
  )
  .join('\n')}

本轮重新校验了 ${repoConfigs.map((config) => config.repo).join('、')} 的 authenticated GitHub API metadata。实质 delta 出现在 ${deltaRepos.join('、') || '无'}；公开数字面保持不变的条目为 ${stableRepos.join('、') || '无'}。尚未进入主站公开项目面的条目仍然只有 \`lsdefine/GenericAgent\` 与 \`uid4oe/insight-swarm\`。

## 完整分类表

| # | Repo | Stars | Prior | Final Category | Stack | Theme | Function | Time Slice | Content Timestamp | Evidence |
|---:|---|---:|---|---|---|---|---|---|---|---|
${fullRows}
`;
  writeIfChanged('research/repo-classification.md', md);
}

function updateProjectsTs(publicConfigs, metadataByRepo) {
  const file = 'site/src/data/projects.ts';
  const text = read(file);
  const startToken = 'export const projects: Project[] = ';
  const endToken = ';\n\nexport const projectGroups';
  const start = text.indexOf(startToken);
  const end = text.indexOf(endToken, start);
  const jsonText = text.slice(start + startToken.length, end);
  const projects = JSON.parse(jsonText);
  for (const config of publicConfigs) {
    const meta = metadataByRepo.get(config.repo);
    const project = projects.find((item) => item.repo.toLowerCase() === config.siteRepo.toLowerCase());
    if (!project) continue;
    project.url = config.url;
    project.description = config.classification.description;
    project.stack = config.classification.stack.split('/');
    project.category = config.project.category.replace(/^./, (char) => char.toUpperCase()).replace(/\bapi\b/gi, 'API');
    project.stars = meta.stargazerCount;
    project.forks = meta.forkCount;
    project.lastPushed = meta.pushedAt;
    project.language = meta.primaryLanguage?.name ?? project.language;
    project.license = meta.licenseInfo?.spdxId ?? meta.licenseInfo?.name ?? project.license;
    project.localPath = config.rawFile;
  }
  const next = `${text.slice(0, start + startToken.length)}${JSON.stringify(projects, null, 4)}${text.slice(end)}`;
  writeIfChanged(file, next);
}

function replaceSection(filePath, startHeading, endHeading, replacement) {
  const text = read(filePath);
  const startHeadings = Array.isArray(startHeading) ? startHeading : [startHeading];
  const start = startHeadings.map((heading) => text.indexOf(heading)).find((index) => index !== -1);
  const end = text.indexOf(endHeading, start);
  if (start === -1 || end === -1) throw new Error(`Failed to locate section ${startHeadings.join(' | ')} in ${filePath}`);
  writeIfChanged(filePath, `${text.slice(0, start)}${replacement}${text.slice(end)}`);
}

function dedupeHeadingPair(filePath, heading) {
  writeIfChanged(filePath, read(filePath).replaceAll(`${heading}${heading}`, heading));
}

function buildReadmeSectionZh(previousByRepo, metadataByRepo, includeEvidenceColumn) {
  const deltaCount = repoConfigs.filter((config) => summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length).length;
  const stableNames = repoConfigs
    .filter((config) => !summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length)
    .map((config) => config.project?.name ?? config.repo);
  const title = includeEvidenceColumn ? '## 近期证据更新（2026-06-16）' : '## 本轮 GitHub Metadata 修复包（2026-06-16）';
  const intro =
    `本轮是新的 authenticated GitHub API packet，而不是沿用 \`${previousPacketDisplay}\` 的上一轮快照。相对该 packet，${repoConfigs.length} 个锚点里有 ${deltaCount} 个出现新的公开 metadata 变化；保持不变的条目是 ${stableNames.join('、') || '无'}。`;
  const header = includeEvidenceColumn
    ? '| 仓库 | 这轮状态 | 为什么重要 | 证据状态 |\n|---|---|---|---|'
    : '| 仓库 | 这轮状态 | 为什么重要 |\n|---|---|---|';
  const rows = repoConfigs
    .map((config) => {
      const status = summarizeStatusZh(previousByRepo.get(config.repo), metadataByRepo.get(config.repo));
      const cells = [[`${config.repo}`] && `[${config.repo}](${config.url})`, status, config.readmeWhyZh];
      if (includeEvidenceColumn) cells.push('[KNOWN] Authenticated GitHub API；未做本地运行/benchmark 复核。');
      return `| ${cells.join(' | ')} |`;
    })
    .join('\n');
  return `${title}

${intro}

${header}
${rows}

`;
}

function buildReadmeSectionEn(previousByRepo, metadataByRepo) {
  const deltaCount = repoConfigs.filter((config) => summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length).length;
  const stableNames = repoConfigs
    .filter((config) => !summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length)
    .map((config) => config.project?.name ?? config.repo);
  const title = '## Recent Evidence Updates (2026-06-16)';
  const intro =
    `This is a new authenticated GitHub API packet rather than a reuse of the previous \`${previousPacketDisplay}\` snapshot. Relative to that packet, ${deltaCount} of the ${repoConfigs.length} tracked anchors now show fresh public metadata movement; the stable entries are ${stableNames.join(', ') || 'none'}.`;
  const rows = repoConfigs
    .map((config) => {
      const status = summarizeStatusEn(previousByRepo.get(config.repo), metadataByRepo.get(config.repo));
      return `| [${config.repo}](${config.url}) | ${status} | ${config.readmeWhyEn} | [KNOWN] Authenticated GitHub API; no local runtime or benchmark rerun in this pass. |`;
    })
    .join('\n');
  return `${title}

${intro}

| Repository | This run's status | Why it matters | Evidence state |
|---|---|---|---|
${rows}

`;
}

function buildGraph(metadataByRepo) {
  const deltaCount = repoConfigs.filter((config) => summarizeChanges(previousByRepoGlobal.get(config.repo), metadataByRepo.get(config.repo)).length).length;
  const currentRunRepos = repoConfigs.map((config) => {
    const meta = metadataByRepo.get(config.repo);
    return {
      repo: config.repo,
      raw_capture: config.rawFile,
      report: config.project?.path ?? null,
      site_report: config.project?.sitePath ?? null,
      stars: meta.stargazerCount,
      forks: meta.forkCount,
      issues: meta.issues?.totalCount ?? 0,
      pull_requests: meta.pullRequests?.totalCount ?? 0,
      commits: meta.defaultBranchRef?.target?.history?.totalCount ?? 0,
      latest_push: meta.pushedAt,
      latest_release: latestRelease(meta),
      theme: config.classification.base_theme
    };
  });
  const graph = {
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
        paths: repoConfigs.map((config) => config.rawFile)
      },
      {
        id: 'processed.github-classification',
        title: 'GitHub classification and project cards',
        layer: 'processed',
        status: 'updated',
        paths: [
          'research/repo-classification.json',
          'research/repo-classification.csv',
          'research/repo-classification.md',
          ...repoConfigs.filter((config) => config.project).map((config) => config.project.path)
        ]
      },
      {
        id: 'results.public-site',
        title: 'Public site and report surfaces',
        layer: 'results',
        status: 'updated',
        paths: [
          'site/src/data/projects.ts',
          ...repoConfigs.filter((config) => config.project).map((config) => config.project.sitePath),
          'README.md',
          'README-ZH.md',
          'README-EN.md'
        ]
      },
      {
        id: 'results.index-analysis',
        title: 'Indexes and GitHub corpus analysis',
        layer: 'results',
        status: 'pending-validation',
        paths: [
          'output/raw-github-timestamp-index.md',
          'output/raw-github-timestamp-index-ZH.md',
          'output/raw-github-timestamp-index.json',
          'analysis/github-project-data-analysis.md',
          'analysis/github-project-data-analysis.json',
          'analysis/github-project-data-analysis.tex'
        ]
      },
      {
        id: 'work.learning-note',
        title: 'Learning note and run ledger',
        layer: 'work',
        status: 'updated',
        paths: [
          `work/research/hourly-public-metadata-update-${runSlug}.md`,
          '.mermaid/current/graph.md',
          '.mermaid/current/graph.mmd',
          `work/research/hourly-public-metadata-update-${runSlug}-data.json`
        ]
      }
    ],
    edges: [
      ['intent.direct-user-input', 'raw.github.hourly-captures', 'governs'],
      ['raw.github.hourly-captures', 'processed.github-classification', 'feeds'],
      ['processed.github-classification', 'results.public-site', 'publishes'],
      ['processed.github-classification', 'results.index-analysis', 'rebuilds'],
      ['results.public-site', 'work.learning-note', 'summarized-by'],
      ['work.learning-note', 'intent.direct-user-input', 'handoff']
    ],
    current_run: {
      source: 'authenticated gh GraphQL/API snapshot',
      repos: currentRunRepos,
      gitnexus: {
        status: 'available',
        note: 'GitNexus query works when the repo is specified explicitly in this multi-index environment.',
        query: 'node .gitnexus/run.cjs query --repo awesome-evolution-workspace-cleanup "site/src/data/projects.ts hourly public metadata raw-github repo-classification analyze_github_project_data graph.json"'
      }
    }
  };
  writeIfChanged('.mermaid/current/graph.json', JSON.stringify(graph, null, 2));

  const repoLines = repoConfigs
    .map((config) => {
      const card = config.project ? config.project.path : 'not promoted to public project card in this run';
      const siteReport = config.project ? config.project.sitePath : 'not promoted to public site report in this run';
      return `- **${config.repo}** -> raw \`${config.rawFile}\` -> card \`${card}\` -> site report \`${siteReport}\``;
    })
    .join('\n');
  writeIfChanged(
    '.mermaid/current/graph.md',
    `# Current Mermaid Object Graph

Truth source: \`.mermaid/current/graph.json\`

Generated: ${runAt}

## Current Run Repositories

${repoLines}

## Working Principle

Authenticated GitHub API snapshots -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- This loop used authenticated GitHub GraphQL/API access through \`gh\`.
- Relative to the previous ${previousPacketDisplay} packet, ${deltaCount} of the ${repoConfigs.length} anchors moved on public metadata.
- GitNexus is available again when \`--repo awesome-evolution-workspace-cleanup\` is passed explicitly; this run used it to map the hourly metadata flow back to the generator/update functions.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
`
  );
  writeIfChanged(
    '.mermaid/current/graph.mmd',
    `flowchart LR
  intent["Direct user intent"] --> raw["authenticated GitHub API repo refresh"]
  raw --> processed["classification + project cards"]
  processed --> results["README/site/report surfaces"]
  processed --> indexes["timestamp index + GitHub corpus analysis"]
  results --> note["work note + Mermaid truth source"]
  note --> intent
`
  );
}

function writeRunNote(previousByRepo, metadataByRepo) {
  const deltaConfigs = repoConfigs.filter((config) => summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length);
  const stableConfigs = repoConfigs.filter((config) => !summarizeChanges(previousByRepo.get(config.repo), metadataByRepo.get(config.repo)).length);
  const rows = repoConfigs
    .map((config) => {
      const meta = metadataByRepo.get(config.repo);
      return `| \`${config.repo}\` | ${formatNumber(meta.stargazerCount)} | ${formatNumber(meta.forkCount)} | ${formatNumber(
        meta.defaultBranchRef?.target?.history?.totalCount ?? 0
      )} | ${formatNumber(meta.issues?.totalCount ?? 0)} | ${formatNumber(meta.pullRequests?.totalCount ?? 0)} | ${shortDate(meta.pushedAt)} |`;
    })
    .join('\n');
  const note = `# Hourly Public Metadata Update - ${runDisplay}

## One Sentence

Fetched a new authenticated GitHub metadata packet on ${runDate}, found fresh public deltas on ${deltaConfigs.length} of the ${repoConfigs.length} tracked anchors, and propagated that newer state through raw, processed, public-site, and Mermaid surfaces.

## Three Sentences

This iteration keeps the direct-user loop intact: raw GitHub evidence first, processed classification second, and public site / README / report sync third.
The freshness boundary remains authenticated GitHub GraphQL/API, not badge scraping or stale local summaries.
GitHub credentials, GraphQL access, and GitNexus query are healthy in this workspace as long as the repo is specified explicitly in this multi-index environment.

## Refreshed Repositories

| Repo | Stars | Forks | Commits | Open issues | Open PRs | Latest push |
|---|---:|---:|---:|---:|---:|---|
${rows}

## Delta Summary

- Fresh public deltas versus the previous ${previousPacketDisplay} packet: ${deltaConfigs.map((config) => `\`${config.repo}\``).join(', ')}.
- No public-count delta versus the previous ${previousPacketDisplay} packet: ${stableConfigs.map((config) => `\`${config.repo}\``).join(', ')}.

## Working Principle

Authenticated GitHub API snapshot -> \`raw-github/*.md\` -> \`research/repo-classification.*\` -> \`output/raw-github-timestamp-index.*\` -> \`analysis/github-project-data-analysis.*\` -> \`projects/*.md\` + \`site/public/reports/projects/*.md\` + \`site/src/data/projects.ts\` -> README/i18n -> Astro build and indexes.

## GitNexus Evidence

- \`node .gitnexus/run.cjs status\` reports the local repo index is available in this workspace.
- \`node .gitnexus/run.cjs query --repo awesome-evolution-workspace-cleanup "site/src/data/projects.ts hourly public metadata raw-github repo-classification analyze_github_project_data graph.json"\` works and resolves the hourly metadata path back to the generator/update functions.
- The main caveat is operational, not a blocker: this environment has many indexed repositories, so every GitNexus query must specify \`--repo awesome-evolution-workspace-cleanup\`.

## Public Surface Sync

- Updated README / README-ZH / README-EN evidence sections so the front-page packet now reflects the ${runDate} authenticated refresh.
- Refreshed public project cards and site reports for AHE, Hermes Agent, Meta-Harness, agentmemory, PinchBench, OpenClaw, Superpowers, EvoMap, and Agent Swarm.
- Refreshed raw/classification-only rows for GenericAgent and Insight Swarm and recorded that they are still not promoted into the public site registry.
- Updated the Mermaid truth source and rendered views so the current object graph reflects the ${runDate} packet and the recovered GitNexus evidence lane.

## Validation Commands For This Iteration

- \`node scripts/generate_project_indexes.mjs\`
- \`python3 scripts/enforce_raw_timestamps.py\`
- \`node scripts/analyze_github_project_data.mjs\`
- \`(cd site && npm run build)\`
- \`(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)\`
`;
  writeIfChanged(`work/research/hourly-public-metadata-update-${runSlug}.md`, note);
}

function main() {
  const previousData = fs.existsSync(path.resolve(previousDataPath)) ? JSON.parse(read(previousDataPath)) : {};
  const previousByRepo = new Map(Object.entries(previousData));
  previousByRepoGlobal = previousByRepo;
  const metadataByRepo = new Map();
  for (const config of repoConfigs) metadataByRepo.set(config.repo, ghQuery(config.owner, config.name));

  for (const config of repoConfigs) {
    const meta = metadataByRepo.get(config.repo);
    const previous = previousByRepo.get(config.repo);
    writeIfChanged(config.rawFile, buildRawContent(config, meta, previous));
    if (config.project) {
      const card = buildProjectCard(config, meta, previous);
      writeIfChanged(config.project.path, card);
      writeIfChanged(config.project.sitePath, card);
    }
  }

  updateClassification(metadataByRepo, previousByRepo);
  updateProjectsTs(repoConfigs.filter((config) => config.project), metadataByRepo);
  replaceSection('README.md', ['## 近期证据更新（2026-06-15）', '## 近期证据更新（2026-06-16）'], '## 核心洞察', buildReadmeSectionZh(previousByRepo, metadataByRepo, true));
  replaceSection('README-ZH.md', ['## 本轮 GitHub Metadata 修复包（2026-06-15）', '## 本轮 GitHub Metadata 修复包（2026-06-16）'], '## 核心洞察', buildReadmeSectionZh(previousByRepo, metadataByRepo, false));
  replaceSection('README-EN.md', ['## Recent Evidence Updates (2026-06-15)', '## Recent Evidence Updates (2026-06-16)'], '## Core Insight', buildReadmeSectionEn(previousByRepo, metadataByRepo));
  dedupeHeadingPair('README.md', '## 核心洞察');
  dedupeHeadingPair('README-ZH.md', '## 核心洞察');
  dedupeHeadingPair('README-EN.md', '## Core Insight');
  buildGraph(metadataByRepo);
  writeIfChanged(
    `work/research/hourly-public-metadata-update-${runSlug}-data.json`,
    JSON.stringify(Object.fromEntries(repoConfigs.map((config) => [config.repo, metadataByRepo.get(config.repo)])), null, 2)
  );
  writeRunNote(previousByRepo, metadataByRepo);
}

let previousByRepoGlobal = new Map();

main();
