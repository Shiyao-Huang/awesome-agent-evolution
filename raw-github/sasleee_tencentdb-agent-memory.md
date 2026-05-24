---
repo: sasleee/tencentdb-agent-memory
url: https://github.com/sasleee/tencentdb-agent-memory
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - SasLeee/TencentDB-Agent-Memory: TencentDB Agent Memory delivers fully local long-term memory for AI Agents via a 4-tier progressive pipeline, with zero external API dependencies. · GitHub

**Source**: https://github.com/sasleee/tencentdb-agent-memory

---

[Skip to content](https://github.com/sasleee/tencentdb-agent-memory#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[SasLeee](https://github.com/SasLeee)

/
**[TencentDB-Agent-Memory](https://github.com/SasLeee/TencentDB-Agent-Memory)**

Public

       forked from [Tencent/TencentDB-Agent-Memory](https://github.com/Tencent/TencentDB-Agent-Memory)

- [Notifications](https://github.com/login?return_to=%2FSasLeee%2FTencentDB-Agent-Memory)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FSasLeee%2FTencentDB-Agent-Memory)
- 
[Star
          0](https://github.com/login?return_to=%2FSasLeee%2FTencentDB-Agent-Memory)

[https://github.com/SasLeee/TencentDB-Agent-Memory](https://github.com/SasLeee/TencentDB-Agent-Memory)

[Branches](https://github.com/SasLeee/TencentDB-Agent-Memory/branches)[Tags](https://github.com/SasLeee/TencentDB-Agent-Memory/tags)

[https://github.com/SasLeee/TencentDB-Agent-Memory/branches](https://github.com/SasLeee/TencentDB-Agent-Memory/branches)[https://github.com/SasLeee/TencentDB-Agent-Memory/tags](https://github.com/SasLeee/TencentDB-Agent-Memory/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History56 Commits56 Commits |  |  |  |
| .github | .github |  |  |
| assets/images | assets/images |  |  |
| docker/opensource | docker/opensource |  |  |
| hermes-plugin/memory/memory_tencentdb | hermes-plugin/memory/memory_tencentdb |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| .npmignore | .npmignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| CONTRIBUTING_CN.md | CONTRIBUTING_CN.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_CN.md | README_CN.md |  |  |
| SKILL-DIAGNOSTIC-EXPORT.md | SKILL-DIAGNOSTIC-EXPORT.md |  |  |
| SKILL-MIGRATION.md | SKILL-MIGRATION.md |  |  |
| SKILL.md | SKILL.md |  |  |
| index.ts | index.ts |  |  |
| openclaw.plugin.json | openclaw.plugin.json |  |  |
| package.json | package.json |  |  |
| tsdown.config.ts | tsdown.config.ts |  |  |
| vitest.config.ts | vitest.config.ts |  |  |
| vitest.e2e.config.ts | vitest.e2e.config.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/assets/images/logo.png](https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/assets/images/logo.png)

### Agents remember,Humans innovate.

[https://github.com/sasleee/tencentdb-agent-memory#agents-rememberhumans-innovate](https://github.com/sasleee/tencentdb-agent-memory#agents-rememberhumans-innovate)

[https://www.npmjs.com/package/@tencentdb-agent-memory/memory-tencentdb](https://www.npmjs.com/package/@tencentdb-agent-memory/memory-tencentdb)[https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/LICENSE](https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/LICENSE)[https://nodejs.org/](https://nodejs.org/)[https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)[https://hermes-agent.nousresearch.com/docs/](https://hermes-agent.nousresearch.com/docs/)[https://discord.gg/kDtHb5RW2](https://discord.gg/kDtHb5RW2)

[Highlights](https://github.com/sasleee/tencentdb-agent-memory#-highlights) · [Overview](https://github.com/sasleee/tencentdb-agent-memory#overview) · [Core Technology](https://github.com/sasleee/tencentdb-agent-memory#core-technology-reject-flat-storage-embrace-layering-and-symbolization) · [Features](https://github.com/sasleee/tencentdb-agent-memory#-features) · [Quick Start](https://github.com/sasleee/tencentdb-agent-memory#quick-start)

[English](https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/README.md) · [简体中文](https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/README_CN.md)

---

## ✨ Highlights

[https://github.com/sasleee/tencentdb-agent-memory#-highlights](https://github.com/sasleee/tencentdb-agent-memory#-highlights)

> **TencentDB Agent Memory = symbolic short-term memory + layered long-term memory.**
> 
> 
> - **Symbolic short-term memory** offloads heavy tool logs and condenses them into compact Mermaid symbols, cutting token usage and improving task success.
> - **Layered long-term memory** distills fragmented conversations into structured personas and scenes, instead of flat vector piles.

When integrated with OpenClaw, it cuts token usage by up to **61.38%**, improves pass rate by **51.52%** (relative), and raises PersonaMem accuracy from **48%** to **76%**.

| Memory Capability | Benchmark | OpenClaw Success | With Plugin | Relative Δ | OpenClaw Tokens | With Plugin Tokens | Relative Δ |
|---|---|---|---|---|---|---|---|
| Short-term | WideSearch | 33% | 50% | +51.52% | 221.31M | 85.64M | −61.38% |
| Short-term | SWE-bench | 58.4% | 64.2% | +9.93% | 3474.1M | 2375.4M | −33.09% |
| Short-term | AA-LCR | 44.0% | 47.5% | +7.95% | 112.0M | 77.3M | −30.98% |
| Long-term | PersonaMem | 48% | 76% | +59% | — | — | — |

> These results are measured over continuous long-horizon sessions, not isolated turns. For example, SWE-bench runs 50 consecutive tasks per session to simulate the context-accumulation pressure of real-world long-horizon agents.

---

## Overview

[https://github.com/sasleee/tencentdb-agent-memory#overview](https://github.com/sasleee/tencentdb-agent-memory#overview)

**Memory is not about hoarding everything in the AI — it is about sparing humans from having to repeat themselves.**

In practice, we constantly re-explain the same SOPs, project background, tool conventions, and output formats to the Agent. Such information should not require repetition, nor should it be indiscriminately dumped into the context.

TencentDB Agent Memory helps the Agent learn your workflows, retain task context, and reuse past experience. We reject both brute-force history accumulation and irreversible lossy summarization. Instead, we design memory as a layered system: **symbolic memory** for in-task information overload, and **memory layering** for cross-session experience.

> **Let the Agent remember what should be remembered, so people can focus on judgment, creation, and work that truly matters.**

---

## Core Technology: Reject Flat Storage, Embrace Layering and Symbolization

[https://github.com/sasleee/tencentdb-agent-memory#core-technology-reject-flat-storage-embrace-layering-and-symbolization](https://github.com/sasleee/tencentdb-agent-memory#core-technology-reject-flat-storage-embrace-layering-and-symbolization)

Our architecture rests on two pillars: **memory layering** and **symbolic memory**. Together they ensure Agents do not merely "remember more", but "reason better".

### 1. Memory Layering: Progressive Disclosure with Heterogeneous Storage

[https://github.com/sasleee/tencentdb-agent-memory#1-memory-layering-progressive-disclosure-with-heterogeneous-storage](https://github.com/sasleee/tencentdb-agent-memory#1-memory-layering-progressive-disclosure-with-heterogeneous-storage)

Traditional memory systems shred data into fragments and dump them into a flat vector store. Recall degenerates into a blind search across disconnected fragments, with no macro-level guidance.

Whether it is long-term knowledge, short-term tasks, or future skill capabilities, memory should never be flat — both its formation and its recall must be hierarchical. TencentDB Agent Memory adopts **layering** as its unified architectural paradigm:

- **Short-term context layering.** The bottom layer archives raw tool outputs (`refs/*.md`); the middle layer extracts step-level summaries (`jsonl`); the top layer condenses state into a lightweight Mermaid canvas. The Agent only needs to attend to the top-layer structure in context, and drills down to the lower layers via `node_id` when an error occurs.
- **Long-term personalization layering.** In place of flat logs, we build a semantic pyramid: **L0 Conversation** (raw dialogue) → **L1 Atom** (atomic facts) → **L2 Scenario** (scene blocks) → **L3 Persona** (user profile). The Persona layer carries day-to-day preferences; the system drills down to Atoms only when details matter.
- **Skill generation layering.** Layering also applies to actions. The middle layer derives common solution patterns (**Scenario**) from bottom-layer execution traces (**Conversation**), and the top layer distills reusable Skills or standard SOPs (**Persona**).

[https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/assets/images/memory-pyramid-en.jpg](https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/assets/images/memory-pyramid-en.jpg)

**Heterogeneous storage and progressive disclosure.** A dual-layer storage strategy underpins this architecture. The bottom layer (facts, logs, traces) is persisted in databases for robust full-text retrieval; the top layer (personas, scenes, canvases) is stored as human-readable Markdown files for high information density and white-box inspection. **Lower layers preserve evidence; upper layers preserve structure.**

**Full traceability and lossless recovery.** Compression often sacrifices traceability. TencentDB Agent Memory avoids irreversible compression by maintaining a deterministic path from high-level abstractions back to ground-truth evidence. Whether it is an offloaded error log or a distilled user preference, the system guarantees a complete drill-down path: "top-layer symbol (Persona / canvas) → mid-layer index (Scenario / jsonl) → bottom-layer raw text (L0 Conversation / refs)".

[https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/assets/images/flowchart1.png](https://github.com/SasLeee/TencentDB-Agent-Memory/blob/main/assets/images/flowchart1.png)

### 2. Symbolic Memory: Maximum Semantics in Minimum Symbols (Mermaid Canvas)

[https://github.com/sasleee/tencentdb-agent-memory#2-symbolic-memory-maximum-semantics-in-minimum-symbols-mermaid-canvas](https://github.com/sasleee/tencentdb-agent-memory#2-symbolic-memory-maximum-semantics-in-minimum-symbols-mermaid-canvas)

In long tasks, the largest token consumers are verbose intermediate logs (search results, code, error traces). To address this, we combine **context offloading** with **symbolic memory**:

- **Mermaid symbol graph.** Instead of verbose prose or flat JSON, we encode task state transitions in high-density Mermaid syntax — precise enough for LLMs to parse, concise enough for humans to read.
- **History offloading.** Full tool logs are offloaded to external files; only a lightweight Mermaid task map remains in context.
- **`node_id` tracing.** The Agent reasons over the symbol graph; to verify a detail, it greps for the `node_id` and instantly retrieves the full raw text — cutting token cost while preserving full traceability.

```
graph LR
    Log["Verbose Logs<br/>(hundreds of thousands of tokens)"] -->|"1. Offload full text"| FS[("External FS<br/>(refs/*.md)")]
    Log -->|"2. Extract relations"| MMD["Mermaid Canvas<br/>(with node_id)"]
    
    MMD -->|"3. Light injection"| Agent(("Agent Context<br/>(a few hundred tokens)"))
    Agent -. "4. Recall via node_id" .-> FS
    
    style Log fill:#f1f5f9,stroke:#94a3b8,stroke-dasharray: 5 5,color:#475569
    style FS fill:#f8fafc,stroke:#cbd5e1,stroke-width:2px,color:#334155
    style MMD fill:#eff6ff,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    style Agent fill:#fffbeb,stroke:#f59e0b,stroke-width:2px,color:#92400e
```

Loading

---

## Quick Start

[https://github.com/sasleee/tencentdb-agent-memory#quick-start](https://github.com/sasleee/tencentdb-agent-memory#quick-start)

## 🎬 Demos

[https://github.com/sasleee/tencentdb-agent-memory#-demos](https://github.com/sasleee/tencentdb-agent-memory#-demos)

| OpenClaw_eg.mp4 | Hermes_eg.mp4 |
|---|---|
| OpenClaw × Agent Memory | Hermes × Agent Memory |

---

### 1. OpenClaw

[https://github.com/sasleee/tencentdb-agent-memory#1-openclaw](https://github.com/sasleee/tencentdb-agent-memory#1-openclaw)

### 1.1 Install the plugin

[https://github.com/sasleee/tencentdb-agent-memory#11-install-the-plugin](https://github.com/sasleee/tencentdb-agent-memory#11-install-the-plugin)

```
openclaw plugins install @tencentdb-agent-memory/memory-tencentdb
openclaw gateway restart
```

### 1.2 Zero-config to enable

[https://github.com/sasleee/tencentdb-agent-memory#12-zero-config-to-enable](https://github.com/sasleee/tencentdb-agent-memory#12-zero-config-to-enable)

Defaults to a local `SQLite + sqlite-vec` backend.

```
// ~/.openclaw/openclaw.json
{
  "memory-tencentdb": {
    "enabled": true
  }
}
```

Once enabled, TencentDB Agent Memory automatically handles conversation capture, memory extraction, scene aggregation, persona generation, and recall before the next turn.

### 1.3 Enable short-term compression (optional, requires version ≥ 0.3.4)

[https://github.com/sasleee/tencentdb-agent-memory#13-enable-short-term-compression-optional-requires-version--034](https://github.com/sasleee/tencentdb-agent-memory#13-enable-short-term-compression-optional-requires-version--034)

```
{
  "memory-tencentdb": {
    "config": {
      "offload": {
        "enabled": true
      }
    }
  }
}
```

#### Step 1 �� Register the slot in your plugin config

[https://github.com/sasleee/tencentdb-agent-memory#step-1--register-the-slot-in-your-plugin-config](https://github.com/sasleee/tencentdb-agent-memory#step-1--register-the-slot-in-your-plugin-config)

Add the `slots` field so OpenClaw routes context-offload requests to this plugin:

```
{
  "plugins": {
    "slots": {
      "contextEngine": "openclaw-context-offload"
    }
  }
}
```

#### Step 2 — Apply the runtime patch

[https://github.com/sasleee/tencentdb-agent-memory#step-2--apply-the-runtime-patch](https://github.com/sasleee/tencentdb-agent-memory#step-2--apply-the-runtime-patch)

For the best results, run the patch script below. It hooks `after-tool-call` messages so they can be offloaded and recovered correctly:

```
bash scripts/openclaw-after-tool-call-messages.patch.sh
```

> 💡 The patch only needs to be applied once per OpenClaw installation. After upgrading OpenClaw, re-run the script to re-apply.

### 2. Hermes (Docker, requires version ≥ 0.3.4)

[https://github.com/sasleee/tencentdb-agent-memory#2-hermes-docker-requires-version--034](https://github.com/sasleee/tencentdb-agent-memory#2-hermes-docker-requires-version--034)

In addition to OpenClaw, this plugin also supports [Hermes](https://github.com/NousResearch/hermes-agent) Agent. You can launch a memory-enabled Hermes with a single command:

```
# ============ Configuration Parameters ============
# MODEL_API_KEY    LLM API key (required) — replace with your own credential
# MODEL_BASE_URL   LLM endpoint, defaults to Tencent Cloud LKE (Large Model Knowledge Engine)
# MODEL_NAME       Model name, defaults to DeepSeek-V3.2
# MODEL_PROVIDER   Provider type: "custom" works for any OpenAI-compatible endpoint

MODEL_API_KEY="your-api-key"
MODEL_BASE_URL="https://api.lkeap.cloud.tencent.com/v1"
MODEL_NAME="deepseek-v3.2"
MODEL_PROVIDER="custom"

# ============ docker run Flags ============
# -d                          Run container in detached (background) mode
# --name hermes-memory        Container name, for later docker exec / logs / stop
# --restart unless-stopped    Auto-restart on crash or host reboot
# -p 8420:8420                Host port ↔ container port (Hermes Gateway)
# -e MODEL_*                  Inject the config parameters above as env vars
# -v hermes_data:/opt/data    Persist memory data to a named volume (survives restart)

# Build
docker build -f Dockerfile.hermes -t hermes-memory .

# Run
docker run -d \
  --name hermes-memory \
  --restart unless-stopped \
  -p 8420:8420 \
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

