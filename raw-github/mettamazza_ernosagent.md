---
repo: mettamazza/ernosagent
url: https://github.com/mettamazza/ernosagent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - MettaMazza/ErnOSAgent: Local-first, privacy-first AI agent with recursive self-improvement · GitHub

**Source**: https://github.com/mettamazza/ernosagent

---

[Skip to content](https://github.com/mettamazza/ernosagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[MettaMazza](https://github.com/MettaMazza)

/
**[ErnOSAgent](https://github.com/MettaMazza/ErnOSAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2FMettaMazza%2FErnOSAgent)You must be signed in to change notification settings
- [Fork
    7](https://github.com/login?return_to=%2FMettaMazza%2FErnOSAgent)
- 
[Star
          10](https://github.com/login?return_to=%2FMettaMazza%2FErnOSAgent)

[https://github.com/MettaMazza/ErnOSAgent](https://github.com/MettaMazza/ErnOSAgent)

[Branches](https://github.com/MettaMazza/ErnOSAgent/branches)[Tags](https://github.com/MettaMazza/ErnOSAgent/tags)

[https://github.com/MettaMazza/ErnOSAgent/branches](https://github.com/MettaMazza/ErnOSAgent/branches)[https://github.com/MettaMazza/ErnOSAgent/tags](https://github.com/MettaMazza/ErnOSAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History166 Commits166 Commits |  |  |  |
| .github | .github |  |  |
| .idea | .idea |  |  |
| agents and controbutions | agents and controbutions |  |  |
| android | android |  |  |
| docs | docs |  |  |
| ern-mesh | ern-mesh |  |  |
| extensions/ernos-chat | extensions/ernos-chat |  |  |
| prompts | prompts |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Cargo.lock | Cargo.lock |  |  |
| Cargo.toml | Cargo.toml |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Ern-OS

[https://github.com/mettamazza/ernosagent#ern-os](https://github.com/mettamazza/ernosagent#ern-os)

**Sovereign AI agent engine. Local-first. Written in Rust.**

[Quick Start](https://github.com/mettamazza/ernosagent#quick-start) ·     [Architecture](https://github.com/mettamazza/ernosagent#architecture) ·     [Tools](https://github.com/mettamazza/ernosagent#tools) ·     [Memory](https://github.com/mettamazza/ernosagent#memory-system) ·     [Documentation](https://github.com/MettaMazza/ErnOSAgent/blob/main/docs)

[https://camo.githubusercontent.com/4a9a8942a5fe5653e3871357474f3a0876397e60834a8cfc8d05cd82f168a68b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c616e67756167652d527573742d6f72616e67653f7374796c653d666c61742d737175617265](https://camo.githubusercontent.com/4a9a8942a5fe5653e3871357474f3a0876397e60834a8cfc8d05cd82f168a68b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c616e67756167652d527573742d6f72616e67653f7374796c653d666c61742d737175617265)[https://camo.githubusercontent.com/cf1b2d4322546144c35ce063fec0cf0e904c140f6f12cdeec72f418208517b92/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74657374732d37313425323070617373696e672d627269676874677265656e3f7374796c653d666c61742d737175617265](https://camo.githubusercontent.com/cf1b2d4322546144c35ce063fec0cf0e904c140f6f12cdeec72f418208517b92/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74657374732d37313425323070617373696e672d627269676874677265656e3f7374796c653d666c61742d737175617265)[https://camo.githubusercontent.com/ede082b8b8cd1d0356973ae51ebc985568675b1268b069a8ec18ff78cb75268d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7761726e696e67732d302d627269676874677265656e3f7374796c653d666c61742d737175617265](https://camo.githubusercontent.com/ede082b8b8cd1d0356973ae51ebc985568675b1268b069a8ec18ff78cb75268d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7761726e696e67732d302d627269676874677265656e3f7374796c653d666c61742d737175617265)[https://camo.githubusercontent.com/ac049ef4e7a0b7196b09add6ac2d4f180e544c0ac779c2b2ac2fd2723a209579/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75653f7374796c653d666c61742d737175617265](https://camo.githubusercontent.com/ac049ef4e7a0b7196b09add6ac2d4f180e544c0ac779c2b2ac2fd2723a209579/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75653f7374796c653d666c61742d737175617265)

---

Ern-OS is a high-performance AI agent engine that runs entirely on your hardware. No cloud. No telemetry. No API keys required. Point it at any GGUF model via `llama-server`, and you get a full agentic system: a dual-layer inference engine with ReAct reasoning, a 33-tool executor, an 8-tier persistent memory system, an observer audit pipeline, autonomous learning, and a 12-tab WebUI dashboard — all compiled into a single Rust binary.

Created by [@mettamazza](https://github.com/mettamazza)

## Quick Start

[https://github.com/mettamazza/ernosagent#quick-start](https://github.com/mettamazza/ernosagent#quick-start)

```
# 1. Clone
git clone https://github.com/mettamazza/ErnosAgent.git
cd ErnosAgent

# 2. Place a GGUF model
mkdir -p models
# Copy your model to models/ (e.g., gemma-4-27b-it-Q4_K_M.gguf)

# 3. Configure (edit ern-os.toml with your model path)
# 4. Run
cargo run --release
```

Opens `http://localhost:3000` — the full dashboard with chat, memory explorer, tool logs, training controls, and more.

### Requirements

[https://github.com/mettamazza/ernosagent#requirements](https://github.com/mettamazza/ernosagent#requirements)

| Dependency | Purpose |
|---|---|
| Rust 1.75+ | Build the engine |
| llama-server | Serve GGUF models locally |
| A GGUF model file | The brain (any model works — Gemma, Llama, Mistral, etc.) |

Optional: Kokoro TTS (voice), Flux (image generation), code-server (VS Code IDE) — each auto-launches if configured and available.

## Architecture

[https://github.com/mettamazza/ernosagent#architecture](https://github.com/mettamazza/ernosagent#architecture)

```
User ──→ WebUI (localhost:3000)
           │
           ├─ WebSocket: Chat / Voice / Video
           │
    ┌──────┴──────────────────────────────────┐
    │         Dual-Layer Inference Engine      │
    │                                          │
    │  Layer 1 (L1): Fast single-shot reply    │
    │  ─ 25 tools, streaming, sub-second       │
    │                                          │
    │  Layer 2 (L2): ReAct reasoning loop      │
    │  ─ 31 tools, multi-turn, autonomous      │
    │  ─ Model-driven turn management          │
    │  ─ Observer audit on every reply          │
    ├──────────────────────────────────────────┤
    │  33-Tool Executor                        │
    │  shell · web · files · browser · memory  │
    │  sub-agents · artifacts · codebase edit  │
    │  image gen · SAE · steering · learning   │
    │  project management · audiobook gen      │
    ├──────────────────────────────────────────┤
    │  8-Tier Persistent Memory                │
    │  timeline · scratchpad · lessons ·       │
    │  synaptic · procedures · embeddings ·    │
    │  consolidation · documents               │
    ├──────────────────────────────────────────┤
    │  Learning Pipeline                       │
    │  golden buffer · rejection buffer ·      │
    │  LoRA · GRPO · sleep consolidation       │
    ├──────────────────────────────────────────┤
    │  Provider Trait (model-neutral)           │
    │  llamacpp · ollama · openai-compatible   │
    └──────────────────────────────────────────┘
```

### Dual-Layer Inference

[https://github.com/mettamazza/ernosagent#dual-layer-inference](https://github.com/mettamazza/ernosagent#dual-layer-inference)

**Layer 1** handles straightforward requests — the model gets a single inference call with 25 tools (including memory, search, files, browser, planning, verification, session recall, introspection, project management, audiobook generation, and escalation). If the task requires multi-step reasoning, it escalates to Layer 2.

**Layer 2** runs a full ReAct loop: the model reasons, calls tools, observes results, and continues until it decides it's done. Turn management is model-driven — the model requests extensions when it needs more turns. An Observer audits every reply for quality, hallucination, and completeness before it reaches the user.

### Model Neutrality

[https://github.com/mettamazza/ernosagent#model-neutrality](https://github.com/mettamazza/ernosagent#model-neutrality)

Ern-OS doesn't care what model you run. The `Provider` trait abstracts all inference:

- **llamacpp** — local GGUF models via `llama-server` (default, recommended)
- **ollama** — Ollama-managed models
- **openai-compatible** — any OpenAI-compatible API endpoint

## Tools

[https://github.com/mettamazza/ernosagent#tools](https://github.com/mettamazza/ernosagent#tools)

33 native tools, all executing locally:

| Tool | What It Does |
|---|---|
| run_bash_command | Execute shell commands with working directory control |
| web_search | Search the web and visit URLs (8-engine waterfall: Brave, Serper, Tavily, SerpAPI, DuckDuckGo, Google, Wikipedia, Google News RSS) |
| file_read / file_write | Read and write files on the local filesystem |
| codebase_search | Recursive grep across directories |
| codebase_edit | Find-replace, insert, multi-patch with auto-checkpoint |
| browser | Headless Chrome — open, navigate, click, type, screenshot |
| memory | Store, recall, and search across the memory system |
| scratchpad / timeline / lessons / synaptic | Direct access to individual memory tiers |
| self_skills | Create, store, and execute learned skill procedures |
| spawn_sub_agent | Launch a child agent with scoped tool access |
| propose_plan | Create an implementation plan for user approval before execution |
| create_artifact | Generate structured documents and reports |
| generate_image | Text-to-image via local Flux server |
| learning | Trigger LoRA training, manage preference buffers |
| interpretability | SAE feature analysis, activation inspection |
| steering | Runtime steering vectors for behaviour modification |
| system_recompile | Hot-recompile the engine from its own source |
| system_logs | Read and search runtime logs |
| checkpoint | Create named restore points during codebase edits |
| plan_and_execute | Decompose a complex objective into a DAG of sub-tasks and execute via sub-agents |
| verify_code | Run the verification pipeline (compile → test → browser) to validate code changes |
| session_recall | Search, browse, and summarize past chat sessions |
| introspect | Inspect reasoning logs, agent activity, scheduler, observer results, and system health |
| project | Manage long-form writing projects — Story Bible (characters, world, timeline, themes, style), project CRUD, status |
| audiobook | Generate audiobooks from manuscripts via script-reader engine (parse, voice assignment, generation, progress) |

## Memory System

[https://github.com/mettamazza/ernosagent#memory-system](https://github.com/mettamazza/ernosagent#memory-system)

8 tiers of persistent memory, all stored locally as JSON:

| Tier | Purpose | Persistence |
|---|---|---|
| Timeline | Chronological event log — every tool call, every interaction | Append-only |
| Scratchpad | Working memory — pinned key-value facts, Story Bible entries | Session/project-scoped |
| Lessons | Distilled learnings from past mistakes and successes | Permanent |
| Synaptic | High-signal knowledge graph with weighted connections | Permanent |
| Procedures | Executable skill recipes synthesised from experience | Permanent |
| Embeddings | Vector store for semantic recall | Permanent |
| Consolidation | Sleep-cycle memory compression and pruning | Scheduled |
| Documents | Chunked document store with embedding-based RAG retrieval | Permanent |

Memory is automatically recalled at inference time and injected into the system prompt. When a writing project is active, the memory budget shifts to prioritise the Story Bible (40%) and manuscript chunks (25%) over global context. The consolidation engine runs on a configurable schedule to compress, prune, and strengthen memory based on access patterns.

## Observer

[https://github.com/mettamazza/ernosagent#observer](https://github.com/mettamazza/ernosagent#observer)

Every Layer 2 reply passes through the Observer before reaching the user. The Observer is a separate inference call that audits for:

- **Hallucination** — claims not supported by tool results
- **Sycophancy** — agreeing with the user when evidence says otherwise
- **Laziness** — incomplete, vague, or placeholder responses
- **Tool ignorance** — describing what it would do instead of using tools

If the Observer rejects a reply, the model gets structured feedback and tries again. This is not a filter — it's a quality loop.

## WebUI Dashboard

[https://github.com/mettamazza/ernosagent#webui-dashboard](https://github.com/mettamazza/ernosagent#webui-dashboard)

12 tabs accessible from `localhost:3000`:

| Tab | What's There |
|---|---|
| Chat | Streaming chat with thinking blocks, tool execution cards, artifacts |
| Memory | Browse and search all 7 memory tiers |
| Tools | Live tool execution log with timing |
| Training | Golden/rejection buffer stats, trigger LoRA training |
| Interpretability | SAE feature analysis, activation heatmaps |
| Steering | Apply runtime steering vectors |
| Logs | Live system logs with filtering |
| Identity | View and edit the agent's persona |
| Agents | Manage sub-agent configurations |
| Scheduler | Cron-like job scheduling (health checks, consolidation, learning) |
| Codes | Embedded VS Code IDE (via code-server) |
| Settings | Platform adapters, provider config, system controls |

## Learning Pipeline

[https://github.com/mettamazza/ernosagent#learning-pipeline](https://github.com/mettamazza/ernosagent#learning-pipeline)

Ern-OS has a built-in learning pipeline for continuous self-improvement:

- **Golden Buffer** — captures high-quality interaction pairs for SFT fine-tuning
- **Rejection Buffer** — captures Observer-rejected responses for preference training (DPO/GRPO)
- **Sleep Consolidation** — scheduled memory compression, lesson extraction, and skill synthesis
- **LoRA Training** — native Candle-based LoRA on Apple Silicon (Metal-accelerated)
- **Curriculum Schooling** — autonomous K-12 → PhD education pipeline with course/lesson/scene progression
- **Research Engine** — arXiv paper ingestion, hypothesis generation, adversarial thesis defense
- **Spaced Repetition** — Leitner box review cards with 5-interval scheduling (1/3/7/14/30 days)
- **Graduation Pipeline** — automatic level promotion with gate criteria and adapter validation
- **MLX Bridge** — subprocess LoRA fine-tuning via Apple MLX for real model weight updates

## Customisation

[https://github.com/mettamazza/ernosagent#customisation](https://github.com/mettamazza/ernosagent#customisation)

### Identity / Persona

[https://github.com/mettamazza/ernosagent#identity--persona](https://github.com/mettamazza/ernosagent#identity--persona)

Create `data/prompts/identity.md` to give your agent a custom personality. If absent, a default Ern-OS persona is used. The identity file supports full markdown and is injected into the system prompt at inference time.

### Configuration

[https://github.com/mettamazza/ernosagent#configuration](https://github.com/mettamazza/ernosagent#configuration)

All configuration lives in `ern-os.toml`:

```
[general]
active_provider = "llamacpp"
data_dir = "data"

[llamacpp]
server_binary = "/opt/homebrew/bin/llama-server"
port = 8080
model_path = "./models/your-model.gguf"
n_gpu_layers = 999

[observer]
enabled = true

[web]
port = 3000
open_browser = true

[prompt]
thinking_enabled = true
```

See [docs/configuration.md](https://github.com/MettaMazza/ErnOSAgent/blob/main/docs/configuration.md) for the full reference.

## Project Stats

[https://github.com/mettamazza/ernosagent#project-stats](https://github.com/mettamazza/ernosagent#project-stats)

| Metric | Value |
|---|---|
| Language | Rust (Edition 2021) |
| Source files | 233 .rs files |
| Lines of code | ~45,500 |
| Tests | 714 passing |
| Test failures | 0 |
| Compiler warnings | 0 |
| Tools | 33 unique (25 in L1, 31 in L2) |
| API endpoints | 95 REST + 3 WebSocket (chat, voice, video) |
| Dashboard tabs | 12 |
| Memory tiers | 8 |
| Providers | 3 (llamacpp, ollama, openai-compatible) |
| Auto-launching services | 4 (WebUI, Kokoro TTS, Flux image gen, code-server) |

## Documentation

[https://github.com/mettamazza/ernosagent#documentation](https://github.com/mettamazza/ernosagent#documentation)

| Document | Description |
|---|---|
| Architecture | System design, data flow, module responsibilities |
| Configuration | All config options with types and defaults |
| Memory System | 7-tier memory architecture and consolidation |
| Inference Pipeline | Dual-layer engine, ReAct loop, observer audit |
| Learning Pipeline | LoRA, GRPO, sleep consolidation, curriculum schooling (K-12 → PhD), research engine, spaced repetition |
| Tools | 33-tool registry with schemas and parallel execution |
| Interpretability | SAE, feature analysis, steering vectors |
| Provider Interface | Provider trait, implementations, model neutrality |
| Testing | Test structure, coverage, running tests |

## License

[https://github.com/mettamazza/ernosagent#license](https://github.com/mettamazza/ernosagent#license)

MIT — do whatever you want with it.

## About

         Local-first, privacy-first AI agent with recursive self-improvement        

[discord.gg/MfG7FAbmD9](https://discord.gg/MfG7FAbmD9)

### Topics

[rust](https://github.com/topics/rust)[machine-learning](https://github.com/topics/machine-learning)[privacy](https://github.com/topics/privacy)[lora](https://github.com/topics/lora)[react-loop](https://github.com/topics/react-loop)[local-first](https://github.com/topics/local-first)[apple-silicon](https://github.com/topics/apple-silicon)[self-improving](https://github.com/topics/self-improving)[ai-agent](https://github.com/topics/ai-agent)[llm](https://github.com/topics/llm)[llama-cpp](https://github.com/topics/llama-cpp)[metal-gpu](https://github.com/topics/metal-gpu)

### Resources

[Readme](https://github.com/mettamazza/ernosagent#readme-ov-file)

### Contributing

[Contributing](https://github.com/mettamazza/ernosagent#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/MettaMazza/ErnOSAgent/activity)

### Stars

[10
        stars](https://github.com/MettaMazza/ErnOSAgent/stargazers)

### Watchers

[0
        watching](https://github.com/MettaMazza/ErnOSAgent/watchers)

### Forks

[7
        forks](https://github.com/MettaMazza/ErnOSAgent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FMettaMazza%2FErnOSAgent&report=MettaMazza+%28user%29)

## [Releases
      1](https://github.com/MettaMazza/ErnOSAgent/releases)

[v3.2.0 — Live SAE Interpretability (Gemma 4 Sparse Autoencoder)
