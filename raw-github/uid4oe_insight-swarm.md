---
repo: uid4oe/insight-swarm
url: https://github.com/uid4oe/insight-swarm
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - uid4oe/insight-swarm: Emergent multi-agent intelligence — AI agents collaborate via a shared knowledge graph, discovering tensions and synthesizing theses without a central orchestrator. · GitHub

**Source**: https://github.com/uid4oe/insight-swarm

---

[Skip to content](https://github.com/uid4oe/insight-swarm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[uid4oe](https://github.com/uid4oe)

/
**[insight-swarm](https://github.com/uid4oe/insight-swarm)**

Public

- [Notifications](https://github.com/login?return_to=%2Fuid4oe%2Finsight-swarm)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fuid4oe%2Finsight-swarm)
- 
[Star
          0](https://github.com/login?return_to=%2Fuid4oe%2Finsight-swarm)

[https://github.com/uid4oe/insight-swarm](https://github.com/uid4oe/insight-swarm)

[Branches](https://github.com/uid4oe/insight-swarm/branches)[Tags](https://github.com/uid4oe/insight-swarm/tags)

[https://github.com/uid4oe/insight-swarm/branches](https://github.com/uid4oe/insight-swarm/branches)[https://github.com/uid4oe/insight-swarm/tags](https://github.com/uid4oe/insight-swarm/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History25 Commits25 Commits |  |  |  |
| .claude | .claude |  |  |
| backend | backend |  |  |
| frontend | frontend |  |  |
| nginx | nginx |  |  |
| shared | shared |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .git-blame-ignore-revs | .git-blame-ignore-revs |  |  |
| .gitignore | .gitignore |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| biome.json | biome.json |  |  |
| docker-compose.dev.yml | docker-compose.dev.yml |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| package.json | package.json |  |  |
| pnpm-lock.yaml | pnpm-lock.yaml |  |  |
| pnpm-workspace.yaml | pnpm-workspace.yaml |  |  |
| tsconfig.json | tsconfig.json |  |  |
| vitest.config.ts | vitest.config.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

# Insight Swarm

[https://github.com/uid4oe/insight-swarm#insight-swarm](https://github.com/uid4oe/insight-swarm#insight-swarm)

**[Live Demo](https://insight-swarm.web.app)** — watch a recorded analysis replay with the full interactive graph UI.

An experiment in emergent multi-agent intelligence. Multiple AI agents — each with a distinct analytical perspective — research a topic independently, write findings to a shared knowledge graph, discover tensions in each other's work, form cross-agent connections, and synthesize theses through structured debate. No central agent orchestrates them. Insights emerge from the graph.

The question driving this project: **what happens when you replace a central orchestrator with a shared knowledge graph and let agents figure it out?**

---

sample.mov

sample2.mov

---

## The Experiment

[https://github.com/uid4oe/insight-swarm#the-experiment](https://github.com/uid4oe/insight-swarm#the-experiment)

Most multi-agent systems follow the same pattern: one "manager" agent decomposes a task, assigns subtasks, and merges results. That manager becomes the bottleneck, the single point of failure, and — critically — the source of opinion bias. The orchestrator's framing shapes every output before agents even start thinking.

Insight Swarm removes the orchestrator entirely and replaces it with a **shared knowledge graph** that agents read from and write to independently. The interesting part is what emerges:

- 

**Agents discover each other's work through semantic similarity**, not explicit routing. When Agent A writes a finding, the system uses vector embeddings to identify which peers would find it most relevant — then queues asynchronous reactions.

- 

**Connections form organically.** Agents create typed relationships between findings (`supports`, `contradicts`, `enables`, `amplifies`) as they encounter related work in the graph. ~76% of connections end up being cross-agent.

- 

**Theses require multi-agent evidence.** An agent can only propose a thesis if it cites evidence from at least 2 different agents. This forces synthesis across perspectives rather than single-agent conclusions.

- 

**Disagreement is enforced, not just encouraged.** Each agent must vote "challenge" on at least 30% of theses. The system monitors contradiction ratios and injects dissent prompts when agreement becomes too uniform.

- 

**Prompts adapt to graph maturity.** Early rounds push agents toward raw discovery. As the graph grows, prompts shift toward connection-making and synthesis. Late rounds enforce thesis creation and voting.

The result: 2-5 agents running for 2-12 minutes typically produce 17-28 findings, 11-28 connections, and 6-8 theses — with genuine disagreements, contested conclusions, and evidence chains you can trace back through the graph.

```
graph TD
    KG["Knowledge Graph (PostgreSQL + pgvector)\nfindings · connections · theses · votes"]
    A["Financial Agent"]
    B["Operational Agent"]
    C["Market Agent"]

    KG --- A
    KG --- B
    KG --- C

    MQ["RabbitMQ Events"] -.->|peer awareness| A
    MQ -.->|peer awareness| B
    MQ -.->|peer awareness| C
```

Loading

---

## How It Works

[https://github.com/uid4oe/insight-swarm#how-it-works](https://github.com/uid4oe/insight-swarm#how-it-works)

### The Agent Loop

[https://github.com/uid4oe/insight-swarm#the-agent-loop](https://github.com/uid4oe/insight-swarm#the-agent-loop)

Each agent runs an independent round loop. No global synchronization barrier, no turn-taking, no waiting for instructions. Agents advance at their own pace:

```
graph LR
    R["React to peers"] --> W["Research & write findings"]
    W --> C["Connect across agents"]
    C --> S["Synthesize theses"]
    S --> V["Vote on theses"]
    V --> A["Advance round"]
    A -.->|next round| R
```

Loading

> Dynamic prompts inject: knowledge graph context, semantic neighbors, tension detection, groupthink warnings, and novelty pressure.

### The Knowledge Graph

[https://github.com/uid4oe/insight-swarm#the-knowledge-graph](https://github.com/uid4oe/insight-swarm#the-knowledge-graph)

The graph is the coordination mechanism. Agents don't talk to a manager — they talk to the graph:

| Entity | Role |
|---|---|
| Findings | Core knowledge units — title, description, confidence score, tags, 768-dim vector embedding |
| Connections | Typed relationships between findings: supports, contradicts, enables, amplifies — with strength scores and reasoning |
| Theses | Multi-agent conclusions requiring evidence from 2+ agents |
| Votes | Support or challenge votes on theses, with agent reasoning |
| Reactions | Cross-agent responses — an agent reads a peer's finding and creates a follow-up |

### Anti-Groupthink Mechanisms

[https://github.com/uid4oe/insight-swarm#anti-groupthink-mechanisms](https://github.com/uid4oe/insight-swarm#anti-groupthink-mechanisms)

Without an orchestrator forcing diversity, agents naturally converge. The system actively fights this:

- **Mandatory challenge votes** — each agent must challenge at least 30% of theses it votes on
- **Tension detection** — pgvector cosine similarity surfaces semantically close but unconnected cross-agent findings as potential contradictions
- **Novelty pressure** — dynamic prompts push agents toward uncovered areas as rounds progress
- **Antithetical theses** — agents can propose theses that directly oppose existing ones
- **Duplicate blocking** — cosine similarity > 0.85 rejects redundant findings
- **Perspective lock** — each agent has a fixed analytical lens it cannot abandon

### What Emerges

[https://github.com/uid4oe/insight-swarm#what-emerges](https://github.com/uid4oe/insight-swarm#what-emerges)

Patterns that appear without being explicitly programmed:

**Finding cascades** — Agent X writes a finding, semantic routing triggers reactions from agents Y and Z, their follow-ups surface new tensions, connections form, more reactions cascade.

**Disagreement chains** — Agent X proposes a thesis, Agent Y votes challenge with reasoning, Y proposes an antithetical thesis, both coexist with competing vote tallies, the summary surfaces it as a "contested" conclusion.

**Blind spot detection** — if only one agent tags a topic (e.g., "supply chain risk"), the summary flags it as a blind spot needing broader perspective.

**Cross-domain synthesis** — Financial agent finds high CAC, Operational agent finds scaling bottleneck, Market agent discovers competitor dynamics — a thesis emerges connecting all three that no single agent could have proposed alone.

---

## Built-in Agents

[https://github.com/uid4oe/insight-swarm#built-in-agents](https://github.com/uid4oe/insight-swarm#built-in-agents)

The default configuration ships with 5 due diligence specialists, but the engine is domain-agnostic — swap in any perspective.

| Agent | Focus |
|---|---|
| Financial | Revenue, unit economics, valuation, burn rate, cap table |
| Operational | Scalability, tech stack, supply chain, infrastructure |
| Legal & Regulatory | Compliance, IP, litigation, data privacy, licensing |
| Market & Commercial | Market sizing, competition, PMF, growth drivers |
| Management & Team | Leadership quality, culture, key-person risk, board |

Custom agents can be defined at runtime via the API — no code changes. They get the same tools, graph access, and anti-groupthink protections as built-in agents.

---

## Quick Start

[https://github.com/uid4oe/insight-swarm#quick-start](https://github.com/uid4oe/insight-swarm#quick-start)

### Prerequisites

[https://github.com/uid4oe/insight-swarm#prerequisites](https://github.com/uid4oe/insight-swarm#prerequisites)

- Node.js 22+, pnpm, Docker
- [Gemini API key](https://aistudio.google.com/apikey)

### Setup

[https://github.com/uid4oe/insight-swarm#setup](https://github.com/uid4oe/insight-swarm#setup)

```
pnpm install
cd frontend && pnpm install && cd ..

cp .env.example .env
# Set GEMINI_API_KEY in .env

pnpm infra          # Start Postgres + RabbitMQ
pnpm db:init        # Apply schema (idempotent)
pnpm dev:full       # Backend (3000) + frontend (5173)
```

Open `http://localhost:5173` — type a prompt, pick 2-5 agents, hit Analyze.

### Try It

[https://github.com/uid4oe/insight-swarm#try-it](https://github.com/uid4oe/insight-swarm#try-it)

```
# Submit a task (agents auto-selected based on prompt)
curl -s -X POST http://localhost:3000/api/tasks \
  -H 'Content-Type: application/json' \
  -d '{"prompt":"Due diligence on Stripe IPO"}' | jq

# Stream real-time events (SSE)
curl -N http://localhost:3000/api/tasks/<id>/events

# Get structured summary (after completion)
curl -s http://localhost:3000/api/tasks/<id>/summary | jq

# Ask follow-up questions (RAG over the knowledge graph)
curl -s -X POST http://localhost:3000/api/tasks/<id>/followup \
  -H 'Content-Type: application/json' \
  -d '{"question":"What are the biggest risks?"}' | jq
```

---

## Architecture

[https://github.com/uid4oe/insight-swarm#architecture](https://github.com/uid4oe/insight-swarm#architecture)

```
graph TD
    UI["React Frontend"] -->|HTTP + SSE| API["Hono API Server"]
    API --> MQ["RabbitMQ"]
    API --> PG["PostgreSQL + pgvector"]
    MQ --> SR["Swarm Runner"]
    SR --> A1["Financial Agent"]
    SR --> A2["Operational Agent"]
    SR --> A3["Market Agent"]
    A1 --> PG
    A2 --> PG
    A3 --> PG
```

Loading

**The Swarm Runner is not an orchestrator.** It launches agents and manages lifecycle (startup, shutdown, crash recovery). It never reads findings, never directs work, never assigns subtasks, never merges outputs.

### Stack

[https://github.com/uid4oe/insight-swarm#stack](https://github.com/uid4oe/insight-swarm#stack)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

