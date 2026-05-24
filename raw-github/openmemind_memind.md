---
repo: openmemind/memind
url: https://github.com/openmemind/memind
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - openmemind/memind: Self-evolving cognitive memory and context engine for AI agents in Java. Empowering 24/7 proactive agents like OpenClaw with understanding and SOTA performance. · GitHub

**Source**: https://github.com/openmemind/memind

---

[Skip to content](https://github.com/openmemind/memind#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[openmemind](https://github.com/openmemind)

/
**[memind](https://github.com/openmemind/memind)**

Public

- [Notifications](https://github.com/login?return_to=%2Fopenmemind%2Fmemind)You must be signed in to change notification settings
- [Fork
    75](https://github.com/login?return_to=%2Fopenmemind%2Fmemind)
- 
[Star
          787](https://github.com/login?return_to=%2Fopenmemind%2Fmemind)

[https://github.com/openmemind/memind](https://github.com/openmemind/memind)

[Branches](https://github.com/openmemind/memind/branches)[Tags](https://github.com/openmemind/memind/tags)

[https://github.com/openmemind/memind/branches](https://github.com/openmemind/memind/branches)[https://github.com/openmemind/memind/tags](https://github.com/openmemind/memind/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History106 Commits106 Commits |  |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .github | .github |  |  |
| docs/images | docs/images |  |  |
| etc | etc |  |  |
| memind-clients | memind-clients |  |  |
| memind-core | memind-core |  |  |
| memind-dependencies | memind-dependencies |  |  |
| memind-evaluation | memind-evaluation |  |  |
| memind-examples | memind-examples |  |  |
| memind-integrations | memind-integrations |  |  |
| memind-plugins | memind-plugins |  |  |
| memind-server | memind-server |  |  |
| memind-ui | memind-ui |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_zh.md | README_zh.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pom.xml | pom.xml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/openmemind/memind/blob/main/docs/images/memind-banner.png](https://github.com/openmemind/memind/blob/main/docs/images/memind-banner.png)

**Memory that thinks. Context that evolves.**

[Highlights](https://github.com/openmemind/memind#highlights) ·   [Overview](https://github.com/openmemind/memind#overview) ·   [Quick Start](https://github.com/openmemind/memind#quick-start) ·   [Examples](https://github.com/openmemind/memind#examples) ·   [Benchmark](https://github.com/openmemind/memind#benchmark)

[https://github.com/openmemind/memind/blob/main/LICENSE](https://github.com/openmemind/memind/blob/main/LICENSE)[https://github.com/openmemind/memind/blob/main/README.md](https://github.com/openmemind/memind/blob/main/README.md)[https://github.com/openmemind/memind/blob/main/README_zh.md](https://github.com/openmemind/memind/blob/main/README_zh.md)[https://github.com/openmemind/memind](https://github.com/openmemind/memind)

---

## 🏆 Highlights

[https://github.com/openmemind/memind#-highlights](https://github.com/openmemind/memind#-highlights)

**Memind** achieves **state-of-the-art results across all three benchmarks**: LoCoMo, LongMemEval, and PersonaMem.

- ☕ **The first Java-native SOTA memory and context engine for AI agents:** built natively in Java, memind brings state-of-the-art long-memory performance into the Java ecosystem.
- 🚀 **Highest reported results across all three benchmarks:** achieved **86.88%** on **LoCoMo**, **84.20%** on **LongMemEval**, and **67.91%** on **PersonaMem** under aligned **MemOS / EverMemOS-style** evaluation.
- 📈 **Stronger than the strongest published baselines:** surpassed **EverMemOS** on **LoCoMo** and **LongMemEval**, and exceeded **MemOS** on **PersonaMem**.
- 🌳 **Insight Tree turns memory into structured understanding:** instead of flat fact storage, memind organizes memory into hierarchical knowledge that evolves over time. See [Insight Tree](https://github.com/openmemind/memind#insight-tree).
- 🔬 **Full benchmark details:** see the [Benchmark](https://github.com/openmemind/memind#benchmark) section for complete tables, category-level comparisons, context tokens, and evaluation protocol.

## Overview

[https://github.com/openmemind/memind#overview](https://github.com/openmemind/memind#overview)

### What is Memind?

[https://github.com/openmemind/memind#what-is-memind](https://github.com/openmemind/memind#what-is-memind)

Memind is a hierarchical cognitive memory and context engine for AI agents, built natively in Java.

Instead of treating memory as a flat collection of isolated facts, Memind continuously extracts, organizes, and evolves knowledge from conversations into a structured **Insight Tree**.

It tackles two core problems of agent memory: **flat, unstructured storage** (memories remain disconnected facts with no higher-level organization) and **no knowledge evolution** (memories accumulate, but never consolidate into deeper understanding).

The result is a long-term memory and context layer that helps agents retain context, build structured understanding over time, and recall knowledge at multiple levels of abstraction.

### Core Design

[https://github.com/openmemind/memind#core-design](https://github.com/openmemind/memind#core-design)

#### Insight Tree

[https://github.com/openmemind/memind#insight-tree](https://github.com/openmemind/memind#insight-tree)

The Insight Tree is memind's core innovation. Unlike traditional memory systems that store isolated facts, memind **progressively distills knowledge** through three tiers — each tier sees patterns the previous one cannot:

| Tier | Input | What it produces |
|---|---|---|
| 🍃 Leaf | Grouped memory items | Insights within a single semantic group |
| 🌿 Branch | Multiple leaves | Cross-group patterns within one dimension |
| 🌳 Root | Multiple branches | Cross-dimensional insights invisible at lower levels |

**Example — understanding a user named Li Wei through conversations:**

> 🍃 **Leaf** (from career_background group): "Li Wei has 8 years of backend experience — 3 years at Alibaba, then led an 8-person team at a fintech company, designing a core trading system with Java 17 + Spring Cloud + Kafka."
> 
> 
> 
> 🌿 **Branch** (integrating career + education + certifications): "Li Wei is a senior backend architect with deep distributed systems expertise, combining Zhejiang University CS training, large-scale Alibaba experience, and hands-on fintech system design — a well-rounded technical profile with both depth and breadth."
> 
> 
> 
> 🌳 **Root** (cross-dimensional — identity × preferences × behavior): "Li Wei's preference for functional programming and high code quality (80% test coverage), combined with conservative tech adoption (requires 2+ years production validation), reveals a personality oriented toward long-term code maintainability over rapid innovation — suggesting recommendations should emphasize stability and proven patterns over cutting-edge tools."

Each tier reveals something the previous one couldn't see. Leaves know facts. Branches see patterns. Roots understand the person.

#### Two-Scope Memory

[https://github.com/openmemind/memind#two-scope-memory](https://github.com/openmemind/memind#two-scope-memory)

memind maintains separate memory scopes for comprehensive agent cognition:

| Scope | Categories | Purpose |
|---|---|---|
| USER | Profile, Behavior, Event | User identity, preferences, relationships, experiences |
| AGENT | Tool, Directive, Playbook, Resolution | Tool usage experience, durable instructions, reusable workflows, resolved problem knowledge |

#### Dual Retrieval Strategies

[https://github.com/openmemind/memind#dual-retrieval-strategies](https://github.com/openmemind/memind#dual-retrieval-strategies)

| Strategy | How it works | Best for |
|---|---|---|
| Simple | Vector search + BM25 keyword matching, merged via RRF (Reciprocal Rank Fusion), with adaptive truncation | Low-latency, cost-sensitive scenarios |
| Deep | LLM-assisted query expansion, sufficiency checking, and reranking | Complex queries requiring reasoning |

Retrieval admission is always enabled: blank queries, pure punctuation/symbol inputs, and pure emoji inputs return empty retrieval results before search. In the standard `Memory.builder()` path, oversized queries are handled by LLM long-query condensation; if condensation fails or remains invalid, retrieval returns an empty result.

#### Core Capabilities

[https://github.com/openmemind/memind#core-capabilities](https://github.com/openmemind/memind#core-capabilities)

| Category | Capability | Description |
|---|---|---|
| Extraction | Conversation Segmentation | Automatic boundary detection and segmentation for streaming messages |
|  | Memory Item Extraction | Extract structured facts with deduplication across 5 categories |
|  | Insight Tree Construction | Hierarchical knowledge building: Leaf → Branch → Root |
|  | Foresight Prediction | Predict future user needs based on conversation patterns |
|  | Tool Call Statistics | Track tool usage patterns and success rates |
| Retrieval | Simple Strategy | Vector + BM25 hybrid search with RRF fusion and adaptive truncation |
|  | Deep Strategy | LLM-assisted query expansion, sufficiency checking, and reranking |
|  | Intent Routing | Automatically determine whether retrieval is needed |
|  | Multi-granularity | Retrieve from any Insight Tree tier based on query needs |
| Integration | Pure Java Runtime | memind-core plus plugins assembled through Memory.builder() |
|  | Spring Boot Infrastructure Starters | Optional infrastructure wiring with memind-plugin-ai-spring-ai-starter and memind-plugin-jdbc-starter |
|  | Plugin Architecture | Pluggable store (SQLite, MySQL) and tracing (OpenTelemetry) |

---

## Quick Start

[https://github.com/openmemind/memind#quick-start](https://github.com/openmemind/memind#quick-start)

The fastest way to try Memind is Docker Compose. It starts the local `memind-server` API together with the React admin UI without requiring Java, Maven, Node.js, or pnpm on the host.

### Prerequisites

[https://github.com/openmemind/memind#prerequisites](https://github.com/openmemind/memind#prerequisites)

- Docker with the Compose plugin
- An OpenAI-compatible chat and embedding provider key

### Configure credentials

[https://github.com/openmemind/memind#configure-credentials](https://github.com/openmemind/memind#configure-credentials)

Create a local `.env` file in the repository root. `docker-compose.yml` reads these values automatically:

```
# Required.
OPENAI_API_KEY=your-key

# Optional provider and model overrides.
OPENAI_BASE_URL=https://openrouter.ai/api
OPENAI_CHAT_MODEL=openai/gpt-4o-mini
OPENAI_EMBEDDING_MODEL=openai/text-embedding-3-small

# Optional. Required only when you want an external rerank provider for deep retrieval.
MEMIND_RERANK_BASE_URL=https://aihubmix.com
MEMIND_RERANK_API_KEY=
MEMIND_RERANK_MODEL=jina-reranker-v3

# Optional host ports.
MEMIND_SERVER_PORT=8366
MEMIND_UI_PORT=8080
```

`OPENAI_BASE_URL`, `OPENAI_CHAT_MODEL`, and `OPENAI_EMBEDDING_MODEL` are optional. The chat and embedding model choices directly affect memory extraction, insight quality, and retrieval quality. If your embedding provider uses a different endpoint or key from chat, also set `EMBEDDING_BASE_URL` and `EMBEDDING_API_KEY`.

### Start the stack

[https://github.com/openmemind/memind#start-the-stack](https://github.com/openmemind/memind#start-the-stack)

```
docker compose up -d --build
```

After the images are built and the containers start:

- Admin UI: `http://localhost:8080`
- Server health check: `http://localhost:8366/open/v1/health`
- Open API base path: `http://localhost:8366/open/v1`
- Admin API base path: `http://localhost:8366/admin/v1`
- HTTP MCP endpoint: `http://localhost:8366/mcp`

The UI container proxies `/open/*` and `/admin/*` to `memind-server`, so the browser can use the UI as a same-origin local admin console.

### HTTP MCP server

[https://github.com/openmemind/memind#http-mcp-server](https://github.com/openmemind/memind#http-mcp-server)

`memind-server` includes a stateless HTTP MCP server at `/mcp`, enabled by default. It exposes Memind memory tools for MCP-compatible agents and uses the same runtime, database, configuration, and logs as the REST APIs.

Claude Code can connect to the local server with:

```
claude mcp add --transport http memind http://localhost:8366/mcp
```

Available MCP tools:

- `memind_retrieve`: retrieve memory for a `userId` and `agentId` with a natural-language `query`; `strategy` can be `SIMPLE` or `DEEP`, and defaults to `SIMPLE`.
- `memind_extract_text`: immediately extract memory from standalone text, such as pasted notes, document excerpts, or summaries.
- `memind_add_message`: add one `user` or `assistant` conversation message to Memind's pending conversation buffer.
- `memind_commit`: commit pending conversation messages for the same `userId` and `agentId`.

Use `memind_extract_text` for one-off text memory. Use `memind_add_message` followed by `memind_commit` for conversation-style memory. To disable the MCP endpoint, set `MEMIND_MCP_ENABLED=false` before starting `memind-server`.

Do not expose `/mcp` directly to public networks without an authentication gateway or equivalent network controls. MCP tools can read and write scoped memory.

### Hermes Agent

[https://github.com/openmemind/memind#hermes-agent](https://github.com/openmemind/memind#hermes-agent)

Memind also provides a Hermes Agent memory-provider integration under `memind-integrations/hermes`. It retrieves relevant Memind context before Hermes turns, captures user/assistant turns after responses, and can expose `memind_retrieve` and `memind_extract_text` as Hermes-native tools. See [memind-integrations/hermes/README.md](https://github.com/openmemind/memind/blob/main/memind-integrations/hermes/README.md).

### Common commands

[https://github.com/openmemind/memind#common-commands](https://github.com/openmemind/memind#common-commands)

```
# View logs
docker compose logs -f memind-server
docker compose logs -f memind-ui

# Stop containers but keep persisted memory data
docker compose down

# Stop containers and remove persisted memory data
docker compose down -v
```

By default, `memind-server` stores SQLite data and the fallback file vector store in the named Docker volume `memind-data`, mounted at `/app/data` inside the container. The Compose setup is intended for local development and inspection; the admin UI has no authentication, so do not expose it directly to public networks.

### Java quickstart example

[https://github.com/openmemind/memind#java-quickstart-example](https://github.com/openmemind/memind#java-quickstart-example)

If you prefer to run from source, use the default **pure Java + OpenAI + SQLite** path.

#### Java prerequisites

[https://github.com/openmemind/memind#java-prerequisites](https://github.com/openmemind/memind#java-prerequisites)

- Java 21
- Maven
- `OPENAI_API_KEY`

#### Run the quickstart example
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

