---
repo: senweaver/senagentos
url: https://github.com/senweaver/senagentos
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - senweaver/SenAgentOS: High-performance Rust agent OS. Multi-agent orchestration, self-evolution, memory-first design, built-in security, and hardware-to-chat extensibility. · GitHub

**Source**: https://github.com/senweaver/senagentos

---

[Skip to content](https://github.com/senweaver/senagentos#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[senweaver](https://github.com/senweaver)

/
**[SenAgentOS](https://github.com/senweaver/SenAgentOS)**

Public

- [Notifications](https://github.com/login?return_to=%2Fsenweaver%2FSenAgentOS)You must be signed in to change notification settings
- [Fork
    7](https://github.com/login?return_to=%2Fsenweaver%2FSenAgentOS)
- 
[Star
          10](https://github.com/login?return_to=%2Fsenweaver%2FSenAgentOS)

[https://github.com/senweaver/SenAgentOS](https://github.com/senweaver/SenAgentOS)

[Branches](https://github.com/senweaver/SenAgentOS/branches)[Tags](https://github.com/senweaver/SenAgentOS/tags)

[https://github.com/senweaver/SenAgentOS/branches](https://github.com/senweaver/SenAgentOS/branches)[https://github.com/senweaver/SenAgentOS/tags](https://github.com/senweaver/SenAgentOS/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| firmware | firmware |  |  |
| skills | skills |  |  |
| src | src |  |  |
| web | web |  |  |
| .editorconfig | .editorconfig |  |  |
| .env.example | .env.example |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| Cargo.lock | Cargo.lock |  |  |
| Cargo.toml | Cargo.toml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README.zh-CN.md | README.zh-CN.md |  |  |
| build.rs | build.rs |  |  |
| rustfmt.toml | rustfmt.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# SenAgentOS

[https://github.com/senweaver/senagentos#senagentos](https://github.com/senweaver/senagentos#senagentos)

**SenAgentOS** is a next-generation autonomous AI agent operating system built entirely in Rust. It provides a high-performance, extensible runtime for building, deploying, and orchestrating AI agents that connect to the world — from messaging platforms and productivity tools to hardware peripherals.

SenAgentOS originated as a Rust rewrite and performance upgrade of `cc-typescript-src` — the TypeScript codebase powering cc-class AI agents. The Rust port preserves the original modular, trait-driven architecture while delivering superior performance, memory safety, and zero-cost abstractions. Nearly every module in this codebase mirrors a counterpart in `cc-typescript-src`, reimplemented in idiomatic Rust with full async support, tighter memory control, and native cross-platform compilation.

---

## Key Features

[https://github.com/senweaver/senagentos#key-features](https://github.com/senweaver/senagentos#key-features)

### Agent Intelligence

[https://github.com/senweaver/senagentos#agent-intelligence](https://github.com/senweaver/senagentos#agent-intelligence)

- **Multi-Agent Orchestration** — Supervisor-based agent supervision with health monitoring, auto-restart, and graceful shutdown. Coordinator provides distributed locks, barrier synchronization, and voting-based consensus for multi-agent workflows.
- **Self-Evolution** — Built-in reinforcement learning, experience replay, self-reflection, and autonomous skill creation. Agents learn from their own history and improve over time.
- **Tool Ecosystem** — 100+ built-in tools covering shell commands, file operations, web browsing, Git operations, productivity apps (Notion, JIRA, Google Workspace, Microsoft 365), image generation, and more.
- **Query Classification** — Dynamic model routing based on query intent. Cheap models for simple tasks, powerful models for complex reasoning.
- **Context Management** — Token budget management, context compression, loop detection, and intelligent memory loading to stay within context windows.

### Integrations

[https://github.com/senweaver/senagentos#integrations](https://github.com/senweaver/senagentos#integrations)

- **45+ Messaging Channels** — Telegram, Discord, Slack, Matrix (with E2EE), WhatsApp (native + web), Signal, IRC, Nostr, Mastodon, Bluesky, Reddit, Twitter/X, and more.
- **Chinese Platform Suite** — Lark/Feishu, DingTalk, WeCom, QQ, MoChat, and Line/Linq.
- **18+ LLM Providers** — OpenRouter, OpenAI, Anthropic, Google Gemini, Azure OpenAI, AWS Bedrock, Ollama, Groq, Mistral, Deepseek, Cohere, Together AI, Fireworks AI, Z.AI GLM, Claude Code, GitHub Copilot, and more.
- **Model Routing** — Intelligent query-based routing to the right model for each task.

### Memory & Knowledge

[https://github.com/senweaver/senagentos#memory--knowledge](https://github.com/senweaver/senagentos#memory--knowledge)

- **Multiple Memory Backends** — SQLite for structured storage, Markdown for file-based knowledge, Qdrant for vector search, Knowledge Graph for relational memory, and a shared Blackboard for multi-agent coordination.
- **RAG Pipeline** — Retrieval-Augmented Generation with OpenAI-compatible embeddings, configurable chunking strategies, and importance-based consolidation.
- **GDPR-Ready** — Data export, memory hygiene, and automatic cleanup.

### Security

[https://github.com/senweaver/senagentos#security](https://github.com/senweaver/senagentos#security)

- **Comprehensive Sandboxing** — Docker, Firejail, Bubblewrap, Landlock (Linux kernel), and Seatbelt (macOS) for process isolation.
- **Access Control** — Role-based access control (RBAC), policy-based IAm authorization, and Nevis enterprise IAM integration.
- **Secret Management** — Encrypted credential storage using ChaCha20-Poly1305, HMAC webhook verification.
- **Operational Safety** — Emergency stop switches (kill-all, network-kill, domain-block, tool-freeze) for immediate incident response.
- **Prompt Injection Defense** — Leak detector, taint tracking, and domain allowlisting.

### Hardware & IoT

[https://github.com/senweaver/senagentos#hardware--iot](https://github.com/senweaver/senagentos#hardware--iot)

- **Board Support** — STM32 Nucleo-F401RE, Raspberry Pi GPIO, Arduino Uno bridge via serial.
- **Peripheral Abstraction** — Trait-driven hardware API for adding new boards.
- **IoT Protocols** — MQTT broker integration for sensor/actuator control.

### Extensibility

[https://github.com/senweaver/senagentos#extensibility](https://github.com/senweaver/senagentos#extensibility)

- **Plugin System** — WASM-based plugin runtime via Extism for extending functionality.
- **A2A Protocol** — Standardized agent-to-agent communication for multi-vendor agent ecosystems.
- **MCP (Model Context Protocol)** — Built-in MCP tool bridge.
- **Composio Integration** — Direct access to the Composio tool registry.

### Observability

[https://github.com/senweaver/senagentos#observability](https://github.com/senweaver/senagentos#observability)

- **Prometheus Metrics** — Built-in metrics endpoint.
- **OpenTelemetry** — Distributed tracing support.
- **Health Endpoints** — `/health` and `/metrics` for monitoring.

---

## Architecture

[https://github.com/senweaver/senagentos#architecture](https://github.com/senweaver/senagentos#architecture)

SenAgentOS follows a trait-driven, modular architecture. Every major component — providers, channels, tools, memory backends, peripherals, and runtime adapters — is an implementation of a well-defined Rust trait. Adding support for a new provider, channel, or tool means implementing a trait and registering it in the factory module.

### Key Design Decisions

[https://github.com/senweaver/senagentos#key-design-decisions](https://github.com/senweaver/senagentos#key-design-decisions)

- **Rust-First** — 100% Rust across backend and embedded targets. Zero dependency on Python or Node.js for the agent core.
- **Trait-Driven** — Every extension point is a trait. Adding a new provider, channel, tool, or memory backend requires implementing a trait and registering in the factory.
- **Memory-First** — First-class memory management with multiple backends, vector search, importance scoring, and consolidation.
- **Security by Default** — Sandboxing, RBAC, secret storage, and prompt injection defense are built-in, not bolted on.
- **Autonomous Evolution** — Agents can create new skills, refine prompts, and improve their own behavior based on feedback.

---

## Building from Source

[https://github.com/senweaver/senagentos#building-from-source](https://github.com/senweaver/senagentos#building-from-source)

### Prerequisites

[https://github.com/senweaver/senagentos#prerequisites](https://github.com/senweaver/senagentos#prerequisites)

- **Rust 1.87+** (edition 2024)
- **Node.js 20+** (for the web frontend)
- **CMake** (for some native dependencies)

#### 1. Visual Studio Build Tools (Windows only)

[https://github.com/senweaver/senagentos#1-visual-studio-build-tools-windows-only](https://github.com/senweaver/senagentos#1-visual-studio-build-tools-windows-only)

On Windows, native dependencies require the MSVC toolchain and Windows SDK:

```
winget install Microsoft.VisualStudio.2022.BuildTools
```

During installation (or via the Visual Studio Installer), select the **"Desktop development with C++"** workload.

#### 2. Rust Toolchain

[https://github.com/senweaver/senagentos#2-rust-toolchain](https://github.com/senweaver/senagentos#2-rust-toolchain)

**Linux / macOS:**

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup default stable
```

**Windows:**

```
winget install Rustlang.Rustup
# Open a new terminal after installation, then run:
rustup default stable
```

#### 3. Verify

[https://github.com/senweaver/senagentos#3-verify](https://github.com/senweaver/senagentos#3-verify)

```
rustc --version
cargo --version
```

### Clone the Repository

[https://github.com/senweaver/senagentos#clone-the-repository](https://github.com/senweaver/senagentos#clone-the-repository)

```
git clone https://github.com/senweaver/SenAgentOS.git
cd SenAgentOS
```

### Backend Only (No Frontend)

[https://github.com/senweaver/senagentos#backend-only-no-frontend](https://github.com/senweaver/senagentos#backend-only-no-frontend)

If you only need the CLI agent without the web dashboard:

```
cargo build --release
```

The binary will be at `target/release/senagentos`.

### Full Build (Backend + Frontend)

[https://github.com/senweaver/senagentos#full-build-backend--frontend](https://github.com/senweaver/senagentos#full-build-backend--frontend)

The build script automatically bundles the React frontend into the binary, so a single `senagentos` executable serves both the CLI and the web dashboard.

```
cargo build --release --features default
```

> **Note:** The first build compiles the Rust backend (this takes 5–20 minutes depending on your machine). Subsequent builds use incremental compilation and are much faster.

### Frontend Development Mode

[https://github.com/senweaver/senagentos#frontend-development-mode](https://github.com/senweaver/senagentos#frontend-development-mode)

For active frontend development, you can run the Vite dev server alongside the gateway for hot module replacement:

```
# Terminal 1: Start the gateway (serves the current API)
./target/release/senagentos gateway start

# Terminal 2: Run the frontend dev server (port 5173)
cd web
npm install
npm run dev
```

The frontend dev server proxies API requests to the gateway at `http://localhost:42617`.

### Production Frontend Build

[https://github.com/senweaver/senagentos#production-frontend-build](https://github.com/senweaver/senagentos#production-frontend-build)

Build only the frontend for deployment:

```
cd web
npm install
npm run build
```

Output is in `web/dist/`.

---

## Configuration

[https://github.com/senweaver/senagentos#configuration](https://github.com/senweaver/senagentos#configuration)

SenAgentOS uses a `config.toml` file. Copy the example and customize:

```
cp .env.example .env
# Edit .env or create ~/.senagent/config.toml
```

### Key Environment Variables

[https://github.com/senweaver/senagentos#key-environment-variables](https://github.com/senweaver/senagentos#key-environment-variables)

| Variable | Description | Default |
|---|---|---|
| PROVIDER | LLM provider name | openrouter |
| SENWEAVER_API_KEY | API key for SenWeaver | — |
| SENWEAVER_BASE_URL | Base URL for SenWeaver | https://api3.senweaver.com/v1 |
| OPENAI_API_KEY | OpenAI API key | — |
| ANTHROPIC_API_KEY | Anthropic API key | — |
| SENAGENTOS_WORKSPACE | Working directory | ~/.senagent/workspace |

### Quick Start with SenWeaver (Recommended)

[https://github.com/senweaver/senagentos#quick-start-with-senweaver-recommended](https://github.com/senweaver/senagentos#quick-start-with-senweaver-recommended)

SenWeaver provides a unified API that aggregates multiple providers:

```
# Set environment variables
export SENWEAVER_API_KEY="your-api-key"
export SENWEAVER_BASE_URL="https://api3.senweaver.com/v1"
export PROVIDER="senweaver"

# Interactive onboarding
./target/release/senagentos onboard --quick

# Or start the gateway with web dashboard
./target/release/senagentos gateway start
```

### Quick Start with OpenRouter

[https://github.com/senweaver/senagentos#quick-start-with-openrouter](https://github.com/senweaver/senagentos#quick-start-with-openrouter)

```
export OPENROUTER_API_KEY="your-api-key"
export PROVIDER="openrouter"
./target/release/senagentos agent
```

### Configuration File

[https://github.com/senweaver/senagentos#configuration-file](https://github.com/senweaver/senagentos#configuration-file)

For production deployments, use `~/.senagent/config.toml`:

```
[provider]
default = "openrouter"

[provider.openrouter]
api_key = "sk-..."

[agent]
max_iterations = 100
tools = ["file_read", "file_write", "shell", "browser"]

[memory]
backend = "sqlite"

[[channel]]
type = "telegram"
bot_token = "..."

[[channel.telegram]]
streaming = true
```

Run `./target/release/senagentos config --help` for the full configuration reference.

---

## Running

[https://github.com/senweaver/senagentos#running](https://github.com/senweaver/senagentos#running)

### CLI Agent Mode

[https://github.com/senweaver/senagentos#cli-agent-mode](https://github.com/senweaver/senagentos#cli-agent-mode)

Run the agent interactively from the terminal:

```
./senagentos agent
```

Pass a message directly:

```
./senagentos agent --message "What's the weather in Tokyo?"
```

### Gateway Mode (Web Dashboard)

[https://github.com/senweaver/senagentos#gateway-mode-web-dashboard](https://github.com/senweaver/senagentos#gateway-mode-web-dashboard)

Start the HTTP/WebSocket gateway:

```
./senagentos gateway start
```

The gateway provides:

- **Web Dashboard** — Open `http://localhost:42617/` in your browser
- **REST API** — `http://localhost:42617/api/*`
- **WebSocket Chat** — `ws://localhost:42617/ws/chat`
- **Health Check** — `http://localhost:42617/health`
