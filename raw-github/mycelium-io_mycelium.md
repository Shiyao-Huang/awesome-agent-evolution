---
repo: mycelium-io/mycelium
url: https://github.com/mycelium-io/mycelium
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - mycelium-io/mycelium: Multi-agent coordination + persistent memory, semantic negotiation, async rooms, and a shared knowledge graph · GitHub

**Source**: https://github.com/mycelium-io/mycelium

---

[Skip to content](https://github.com/mycelium-io/mycelium#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[mycelium-io](https://github.com/mycelium-io)

/
**[mycelium](https://github.com/mycelium-io/mycelium)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmycelium-io%2Fmycelium)You must be signed in to change notification settings
- [Fork
    9](https://github.com/login?return_to=%2Fmycelium-io%2Fmycelium)
- 
[Star
          95](https://github.com/login?return_to=%2Fmycelium-io%2Fmycelium)

[https://github.com/mycelium-io/mycelium](https://github.com/mycelium-io/mycelium)

[Branches](https://github.com/mycelium-io/mycelium/branches)[Tags](https://github.com/mycelium-io/mycelium/tags)

[https://github.com/mycelium-io/mycelium/branches](https://github.com/mycelium-io/mycelium/branches)[https://github.com/mycelium-io/mycelium/tags](https://github.com/mycelium-io/mycelium/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History558 Commits558 Commits |  |  |  |
| .claude/skills | .claude/skills |  |  |
| .github | .github |  |  |
| .ttt | .ttt |  |  |
| docs | docs |  |  |
| fastapi-backend | fastapi-backend |  |  |
| mycelium-cli | mycelium-cli |  |  |
| mycelium-client | mycelium-client |  |  |
| mycelium-frontend | mycelium-frontend |  |  |
| mycelium-promo | mycelium-promo |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTORS.md | CONTRIBUTORS.md |  |  |
| LICENSE | LICENSE |  |  |
| MAINTAINERS.md | MAINTAINERS.md |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| install.sh | install.sh |  |  |
| openapi.json | openapi.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# mycelium

[https://github.com/mycelium-io/mycelium#mycelium](https://github.com/mycelium-io/mycelium#mycelium)

[https://github.com/mycelium-io/mycelium/blob/main/docs/banner.png?v=2](https://github.com/mycelium-io/mycelium/blob/main/docs/banner.png?v=2)

[https://github.com/mycelium-io/mycelium/actions/workflows/ci.yml?branch=main](https://github.com/mycelium-io/mycelium/actions/workflows/ci.yml?branch=main)[https://github.com/mycelium-io/mycelium/releases](https://github.com/mycelium-io/mycelium/releases)[https://github.com/mycelium-io/mycelium/blob/main/LICENSE](https://github.com/mycelium-io/mycelium/blob/main/LICENSE)[https://camo.githubusercontent.com/5b095f3290a81b11c61d890c0cb505690baa558146cb5661387442d917af95ca/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31322d626c75653f6c6f676f3d707974686f6e266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765](https://camo.githubusercontent.com/5b095f3290a81b11c61d890c0cb505690baa558146cb5661387442d917af95ca/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31322d626c75653f6c6f676f3d707974686f6e266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765)

*A coordination layer for multi-agent systems — shared rooms, persistent memory, and semantic negotiation.*

---

mycelium-promo.mp4

*install → coordinate → consensus.*

---

## The Problem

[https://github.com/mycelium-io/mycelium#the-problem](https://github.com/mycelium-io/mycelium#the-problem)

Very little exists for agents operating as autonomous peers on a shared mission. To get reliable results, practitioners reach for an orchestrator, a predefined workflow, or a tightly defined handoff structure. Users attempting peer agent coordination have to manually construct scaffolding for memory sharing and context passing. And even then, without coordination infrastructure, the result is AI theatre — agents that talk over each other, repeat work already done, fail to recognise disagreement, and fail to negotiate trade-offs.

## Who Mycelium Is For

[https://github.com/mycelium-io/mycelium#who-mycelium-is-for](https://github.com/mycelium-io/mycelium#who-mycelium-is-for)

Mycelium is built for autonomous agents operating as peers — no predefined workflow, no centralized supervisor, no hierarchy. That includes agents like OpenClaw or Claude Code — given a mission and a tool allowlist, left to plan and execute without step-by-step human approval.

Alignment pays off at 3+ agents. At three it improves decision quality over uncoordinated approaches; at four or more it's often the difference between converging on a shared answer and not converging at all.

If your system has a central orchestrator routing tasks to worker agents, you probably don't need Mycelium — your orchestrator is already the coordination layer. Mycelium is for the case where there is no orchestrator, and you don't want one.

## What Mycelium Does

[https://github.com/mycelium-io/mycelium#what-mycelium-does](https://github.com/mycelium-io/mycelium#what-mycelium-does)

Mycelium provides coordination functions for autonomous agents operating as peers. The first: alignment — agreeing on a shared position at the start of a mission or any point during it — so decisions don't get re-litigated, work doesn't get duplicated, and every agent that joins inherits what the others already know.

Mycelium gives agents **rooms** to coordinate in, **persistent memory** that accumulates within a room, and a **CognitiveEngine** that mediates negotiation so every agent has a voice and the team arrives at a single shared answer.

```
# Agent 1 shares context in a persistent room
mycelium memory set "position/julia" "I think we should use REST, not GraphQL" --handle julia-agent

# Agent 2 (hours later, different session) reads and adds their perspective
mycelium memory search "API design decisions"
mycelium memory set "position/selina" "Agree on REST, but we need pagination standards" --handle selina-agent

# CognitiveEngine synthesizes when enough context accumulates
mycelium synthesize
```

When agents need to agree on something in real time, they spawn a session within a room and CognitiveEngine runs structured negotiation:

```
mycelium session join --handle julia-agent -m "budget=high, scope=full"
# CognitiveEngine drives propose/respond rounds until consensus
```

> **Note:** Mycelium uses "session" to mean a structured negotiation round within a room — not an agent conversation turn.

## How It Works

[https://github.com/mycelium-io/mycelium#how-it-works](https://github.com/mycelium-io/mycelium#how-it-works)

**1. Alignment** — When agents need to agree, a session is spawned within the room. CognitiveEngine orchestrates multi-issue negotiation through a structured state machine (`idle → waiting → negotiating → complete`). Agents respond to structured proposals and reach a single consensus — every agent has a voice, and the result is one shared answer, not parallel outputs a human has to reconcile. The outcome is written to room memory as alignment memory — a persistent record of what was agreed and why.

**2. Room Memory** — Rooms are folders. Memories are markdown files at `.mycelium/rooms/{room}/{namespace}/{key}.md`. Any agent with file I/O can read and write room memory directly — the CLI is sugar. Memories accumulate across agents and sessions, and are searchable by meaning via a pgvector index in AgensGraph.

**3. Peer Collaboration Environment** — Any agent joining a room runs `mycelium catchup` and instantly inherits everything the swarm has learned — decisions made, what failed, open questions, recommended next actions. No repeated context-setting. Intelligence compounds instead of resetting.

## Quick Start

[https://github.com/mycelium-io/mycelium#quick-start](https://github.com/mycelium-io/mycelium#quick-start)

```
# 1. Install the CLI
curl -fsSL https://mycelium-io.github.io/mycelium/install.sh | bash

# 2. Set up the stack (pulls images, prompts for LLM config, writes ~/.mycelium/config.toml)
mycelium install

# 3. Create a room and start sharing context
mycelium room create my-project
mycelium room use my-project
mycelium memory set "context/goal" "Build a REST API for the new service"
mycelium memory set "decisions/db" "AgensGraph with pgvector for embeddings"

# Search what's been shared
mycelium memory search "database decisions"

# See everything in the room
mycelium memory ls
```

## Architecture

[https://github.com/mycelium-io/mycelium#architecture](https://github.com/mycelium-io/mycelium#architecture)

**Memories live on the filesystem** — rooms are folders, memories are markdown files with YAML frontmatter at `.mycelium/rooms/{room}/{key}.md`. This is the source of truth. Direct writes (cat, editor, agent file I/O) always work; run `mycelium reindex` to refresh the search index after bypassing the CLI.

**AgensGraph** (PostgreSQL 16 fork) is the coordination and search backend:

- Rooms, sessions, messages, subscriptions — coordination state
- pgvector embeddings for semantic memory search (384-dim, local, no API key)
- LISTEN/NOTIFY → SSE (Server-Sent Events) for real-time streaming

No external message broker, no separate vector DB, no Redis. One database.

**Rooms are git-friendly** — commit `.mycelium/rooms/` to share context across machines. Agents on different machines pull the folder and inherit the room's full memory.

**Deployment modes** — by default everything runs on a single device (your laptop): backend, database, agents, and CLI all on `localhost`. That's the primary target and what `mycelium install` sets up out of the box. For small teams that want to share memory and coordination state, Mycelium also supports a hub-and-spoke mode: one machine runs the backend (the **hub**), other teammates run only the CLI + agents (**spokes**) pointing at it over HTTPS/SSE. `mycelium doctor` auto-detects which mode you're in based on `server.api_url`; pass `--mode hub` or `--mode spoke` to override. See [docs/architecture.md](https://github.com/mycelium-io/mycelium/blob/main/mycelium-cli/src/mycelium/docs/architecture.md#deployment-modes) for details.

Room folders use standard namespaces:

```
.mycelium/rooms/{room}/
├── decisions/    Why choices were made
├── status/       Current state of things
├── context/      Background & constraints
├── work/         In-progress and completed work
├── procedures/   How-to guides and runbooks
└── log/          Events and observations
```

Repo layout:

```
.mycelium/            Memory storage (rooms are folders, memories are markdown files)
mycelium-cli/         CLI + adapters (OpenClaw, Claude Code)
fastapi-backend/      FastAPI coordination engine
mycelium-client/      Generated typed OpenAPI client
```

## Adapters

[https://github.com/mycelium-io/mycelium#adapters](https://github.com/mycelium-io/mycelium#adapters)

Mycelium works with any agent that can make HTTP requests via the REST API. Native adapters are available for:

**OpenClaw** — Two plugins + hooks for the OpenClaw agent runtime. The `mycelium` plugin delivers SSE-based coordination ticks that wake agents automatically when it's their turn. The `mycelium-channel` plugin turns any Mycelium room into an addressed message bus — agents DM each other via `@handle` mentions without Discord, Slack, or any third-party chat platform.

```
mycelium adapter add openclaw

# Allow agents to run mycelium commands without manual approval
# For specific agents (recommended):
openclaw approvals allowlist add --agent "<agent-id>" "~/.local/bin/mycelium"
# Or for all agents (convenient but less restrictive):
openclaw approvals allowlist add --agent "*" "~/.local/bin/mycelium"

# Restart the gateway to pick up the plugin
openclaw gateway restart
```

**Claude Code** — Lifecycle hooks capture tool use and context automatically. The mycelium skill provides memory and coordination commands.

```
mycelium adapter add claude-code
```

## Development

[https://github.com/mycelium-io/mycelium#development](https://github.com/mycelium-io/mycelium#development)

```
cd fastapi-backend
uv sync --group dev
uv run pytest tests/                    # unit tests (SQLite)
DATABASE_URL=... uv run pytest tests/   # integration tests (AgensGraph)
```

Interactive API docs at `http://localhost:8000/docs` when the backend is running.

## Built On

[https://github.com/mycelium-io/mycelium#built-on](https://github.com/mycelium-io/mycelium#built-on)

Mycelium builds on OSS projects we found invaluable in this space:

- [ioc-cfn-mgmt-backend-svc](https://github.com/outshift-open/ioc-cfn-mgmt-backend-svc) + [ioc-cfn-cognition-engines](https://github.com/outshift-open/ioc-cfn-cognition-engines) + [ioc-cognition-fabric-node-svc](https://github.com/outshift-open/ioc-cognition-fabric-node-svc) — Agent registration and fabric orchestration, from Outshift by Cisco
- [NegMAS](https://negmas.readthedocs.io/) — Multi-issue negotiation (inside the Cognition Fabric)
- [AgensGraph](https://github.com/skaiworldwide-oss/agensgraph) — Multi-model graph database
- [FastAPI](https://fastapi.tiangolo.com/) + [pgvector](https://github.com/pgvector/pgvector) + [fastembed](https://github.com/qdrant/fastembed)

## About

         Multi-agent coordination + persistent memory, semantic negotiation, async rooms, and a shared knowledge graph       

[mycelium-io.github.io](https://mycelium-io.github.io)

### Resources

[Readme](https://github.com/mycelium-io/mycelium#readme-ov-file)

### License

[View license](https://github.com/mycelium-io/mycelium#License-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/mycelium-io/mycelium#coc-ov-file)

### Contributing

[Contributing](https://github.com/mycelium-io/mycelium#contributing-ov-file)

### Security policy

[Security policy](https://github.com/mycelium-io/mycelium#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/mycelium-io/mycelium/activity)

[Custom properties](https://github.com/mycelium-io/mycelium/custom-properties)

### Stars

[95
        stars](https://github.com/mycelium-io/mycelium/stargazers)

### Watchers

[4
        watching](https://github.com/mycelium-io/mycelium/watchers)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

