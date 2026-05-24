---
repo: xinhuagu/aceclaw
url: https://github.com/xinhuagu/aceclaw
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - xinhuagu/AceClaw: Java-native runtime for long-running AI agents with live execution control, human approvals, and audit trails. · GitHub

**Source**: https://github.com/xinhuagu/aceclaw

---

[Skip to content](https://github.com/xinhuagu/aceclaw#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[xinhuagu](https://github.com/xinhuagu)

/
**[AceClaw](https://github.com/xinhuagu/AceClaw)**

Public

- [Notifications](https://github.com/login?return_to=%2Fxinhuagu%2FAceClaw)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fxinhuagu%2FAceClaw)
- 
[Star
          4](https://github.com/login?return_to=%2Fxinhuagu%2FAceClaw)

[https://github.com/xinhuagu/AceClaw](https://github.com/xinhuagu/AceClaw)

[Branches](https://github.com/xinhuagu/AceClaw/branches)[Tags](https://github.com/xinhuagu/AceClaw/tags)

[https://github.com/xinhuagu/AceClaw/branches](https://github.com/xinhuagu/AceClaw/branches)[https://github.com/xinhuagu/AceClaw/tags](https://github.com/xinhuagu/AceClaw/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History578 Commits578 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| aceclaw-bom | aceclaw-bom |  |  |
| aceclaw-cli | aceclaw-cli |  |  |
| aceclaw-core | aceclaw-core |  |  |
| aceclaw-daemon | aceclaw-daemon |  |  |
| aceclaw-dashboard | aceclaw-dashboard |  |  |
| aceclaw-infra | aceclaw-infra |  |  |
| aceclaw-llm | aceclaw-llm |  |  |
| aceclaw-mcp | aceclaw-mcp |  |  |
| aceclaw-memory | aceclaw-memory |  |  |
| aceclaw-sdk | aceclaw-sdk |  |  |
| aceclaw-security | aceclaw-security |  |  |
| aceclaw-server | aceclaw-server |  |  |
| aceclaw-test | aceclaw-test |  |  |
| aceclaw-tools | aceclaw-tools |  |  |
| docs | docs |  |  |
| gradle/wrapper | gradle/wrapper |  |  |
| scripts | scripts |  |  |
| .coderabbit.yaml | .coderabbit.yaml |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| PRD-Frontend.md | PRD-Frontend.md |  |  |
| PRD.md | PRD.md |  |  |
| README.md | README.md |  |  |
| build.gradle.kts | build.gradle.kts |  |  |
| cliff.toml | cliff.toml |  |  |
| config.default.json | config.default.json |  |  |
| dev.sh | dev.sh |  |  |
| gradle.properties | gradle.properties |  |  |
| gradlew | gradlew |  |  |
| gradlew.bat | gradlew.bat |  |  |
| install.sh | install.sh |  |  |
| restart.sh | restart.sh |  |  |
| settings.gradle.kts | settings.gradle.kts |  |  |
| tui.sh | tui.sh |  |  |
| update.sh | update.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# AceClaw

[https://github.com/xinhuagu/aceclaw#aceclaw](https://github.com/xinhuagu/aceclaw#aceclaw)

A Java agent runtime with a visual agent harness for long-running work

[https://github.com/xinhuagu/AceClaw/actions/workflows/ci.yml](https://github.com/xinhuagu/AceClaw/actions/workflows/ci.yml)[https://camo.githubusercontent.com/1f6d6fc09797f6c4e51089421c8f56a3a1319516f61524ae475e9d67c23480a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176612d32312d6f72616e67653f6c6f676f3d6f70656e6a646b](https://camo.githubusercontent.com/1f6d6fc09797f6c4e51089421c8f56a3a1319516f61524ae475e9d67c23480a0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176612d32312d6f72616e67653f6c6f676f3d6f70656e6a646b)[https://camo.githubusercontent.com/e72e0d180496130e68050a85e01e76196e4750df349578d2dce047e9210241ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f477261616c564d2d4e61746976655f496d6167652d626c75653f6c6f676f3d6f7261636c65](https://camo.githubusercontent.com/e72e0d180496130e68050a85e01e76196e4750df349578d2dce047e9210241ab/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f477261616c564d2d4e61746976655f496d6167652d626c75653f6c6f676f3d6f7261636c65)[https://camo.githubusercontent.com/f2e6c075f07c0c8d551162dc893197c8ed6e415a3bdaa5f8588e06d88de65387/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f477261646c652d382e31342d3032333033413f6c6f676f3d677261646c65266c6f676f436f6c6f723d7768697465](https://camo.githubusercontent.com/f2e6c075f07c0c8d551162dc893197c8ed6e415a3bdaa5f8588e06d88de65387/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f477261646c652d382e31342d3032333033413f6c6f676f3d677261646c65266c6f676f436f6c6f723d7768697465)[https://camo.githubusercontent.com/104c7bf0c8d436cd689bc15afcb21b90bef0f5ec4bb56d29cff5a6da2a61a706/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652d32305f4c54532d3333393933333f6c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465](https://camo.githubusercontent.com/104c7bf0c8d436cd689bc15afcb21b90bef0f5ec4bb56d29cff5a6da2a61a706/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652d32305f4c54532d3333393933333f6c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465)[https://camo.githubusercontent.com/25cb52819b45bb3329e5b85bc112070c1ba91226ab69183ee45d6bbf2e7ea16d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d31392d3631444146423f6c6f676f3d7265616374266c6f676f436f6c6f723d7768697465](https://camo.githubusercontent.com/25cb52819b45bb3329e5b85bc112070c1ba91226ab69183ee45d6bbf2e7ea16d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d31392d3631444146423f6c6f676f3d7265616374266c6f676f436f6c6f723d7768697465)

**AceClaw is runtime-level governance for enterprise-grade agent systems** — stable, controllable, observable, built for environments where compliance and predictability matter as much as capability.

The runtime is a Java daemon that runs the agent loop and gates tool use against per-session permission policy. A live dashboard renders the same event stream as a navigable trace — operators see exactly what the engine evaluated, and the same record drives the audit trail.

### Java agent runtime

[https://github.com/xinhuagu/aceclaw#java-agent-runtime](https://github.com/xinhuagu/aceclaw#java-agent-runtime)

A persistent JVM daemon that runs the ReAct + Plan/Replan loop, tools, permissions, memory, and self-learning. Every capability use — tool execution, memory write, sub-agent spawn — flows through one policy in one place. Pure Java 21, zero AI framework. The CLI talks to it over a Unix Domain Socket; the optional dashboard uses a loopback-only WebSocket bridge with an explicit allowed-origins list.

[https://github.com/xinhuagu/AceClaw/blob/main/docs/img/aceclaw_daemon_architecture.drawio.png](https://github.com/xinhuagu/AceClaw/blob/main/docs/img/aceclaw_daemon_architecture.drawio.png)

**[Read the design philosophy →](https://github.com/xinhuagu/AceClaw/blob/main/docs/design-philosophy.md)** — why Java, why no AI framework, what drives the architecture.  ·  **[Runtime-level governance →](https://github.com/xinhuagu/AceClaw/blob/main/docs/runtime-governance.md)** — where AceClaw fits vs. protocol- and connector-level governance, and what's still missing.

### Visual agent harness

[https://github.com/xinhuagu/aceclaw#visual-agent-harness](https://github.com/xinhuagu/aceclaw#visual-agent-harness)

A React dashboard that talks to the same daemon over the loopback-only WebSocket bridge — runtime state visualization for a long-running agent, so you can watch and intervene in real time. The ReAct loop is laid out as a live, navigable tree: every thinking block, tool call, and observation appears as its own node. Permission requests surface as inline panels you can Approve or Deny from the browser; sidebar status dots show at a glance which session needs you.

[https://github.com/xinhuagu/AceClaw/blob/main/docs/img/aceclaw-dashboard.gif](https://github.com/xinhuagu/AceClaw/blob/main/docs/img/aceclaw-dashboard.gif)

**[Visual Agent Harness →](https://github.com/xinhuagu/AceClaw/blob/main/docs/visual-harness.md)** — the agent runtime's observability and control plane: watch what's happening, intervene when it matters.

## Highlights

[https://github.com/xinhuagu/aceclaw#highlights](https://github.com/xinhuagu/aceclaw#highlights)

- **Runtime-level governance** — capabilities decided in the agent loop, not at the protocol or connector layer. One pipeline for every adapter (in progress). *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/runtime-governance.md))*
- **Visual agent harness** — live execution tree, inline permission Approve/Deny from the browser. *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/visual-harness.md))*
- **Plan → Execute → Replan** — explicit task plan layered on top of ReAct, with per-step budgets and inline replan on failure. *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/plan-replan.md))*
- **Self-learning** — zero-cost detectors turn behavior into typed, confidence-scored insights that survive across sessions. *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/self-learning.md))*
- **Long-term memory** — 8-tier hierarchy, HMAC-signed entries, hybrid search, automated consolidation. *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/memory-system-design.md))*
- **Context engineering** — budgeted 8-tier prompt assembly, 3-phase compaction, request-time pruning. *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/context-engineering.md))*
- **Security** — UDS for CLI, loopback-only WebSocket for the dashboard with origin allowlist, sealed 4-level permissions, signed memory. *([details](https://github.com/xinhuagu/AceClaw/blob/main/docs/security.md))*

## Quick Start

[https://github.com/xinhuagu/aceclaw#quick-start](https://github.com/xinhuagu/aceclaw#quick-start)

### One-Line Install

[https://github.com/xinhuagu/aceclaw#one-line-install](https://github.com/xinhuagu/aceclaw#one-line-install)

```
curl -fsSL https://raw.githubusercontent.com/xinhuagu/AceClaw/main/install.sh | sh
```

Downloads the latest pre-built release, extracts to `~/.aceclaw/`, and adds commands to your PATH. Only requires Java 21 runtime (no build tools).

### Configure & Run

[https://github.com/xinhuagu/aceclaw#configure--run](https://github.com/xinhuagu/aceclaw#configure--run)

```
export ANTHROPIC_API_KEY="sk-ant-api03-..."
aceclaw                # Start AceClaw (auto-starts daemon)
```

Or use OAuth (auto-discovered from Claude CLI credentials):

```
claude                 # Login via Claude CLI first
aceclaw                # Token auto-refreshes from Keychain
```

### Commands

[https://github.com/xinhuagu/aceclaw#commands](https://github.com/xinhuagu/aceclaw#commands)

All commands installed by `install.sh`. Every command that accepts `[provider]` switches the LLM backend for that session.

| Command | What it does |
|---|---|
| aceclaw | Start AceClaw TUI (auto-starts daemon if not running) |
| aceclaw dashboard | Open the browser dashboard (auto-starts daemon, opens default browser) |
| aceclaw-tui [provider] | Open another TUI window — never restarts daemon, safe for multi-session |
| aceclaw-restart [provider] | Stop daemon + restart with fresh build (warns if sessions active) |
| aceclaw-update | Update to latest release (refuses if sessions active) |

**Supported providers:**`anthropic` (default), `copilot`, `openai`, `openai-codex`, `ollama`, `groq`, `together`, `mistral`

#### Daemon Management

[https://github.com/xinhuagu/aceclaw#daemon-management](https://github.com/xinhuagu/aceclaw#daemon-management)

The daemon is a persistent JVM process that runs in the background. It auto-starts when you run `aceclaw`, but can be managed directly:

```
aceclaw daemon start              # Start daemon in background
aceclaw daemon start -p copilot   # Start background daemon with provider override
aceclaw daemon start --foreground # Start daemon in foreground (for debugging)
aceclaw daemon stop     # Gracefully stop daemon
aceclaw daemon status   # Show health, version, model, active sessions
```

#### Switching Providers

[https://github.com/xinhuagu/aceclaw#switching-providers](https://github.com/xinhuagu/aceclaw#switching-providers)

Pass the provider name as an argument to any launch command:

```
# Release install (symlinked commands)
aceclaw-restart copilot       # Restart daemon with GitHub Copilot
aceclaw-tui ollama            # Open TUI against local Ollama (no daemon restart)
aceclaw-restart anthropic     # Switch back to Anthropic Claude

# Or via environment variable (works with any command)
ACECLAW_PROVIDER=groq aceclaw
```

#### Provider Authentication

[https://github.com/xinhuagu/aceclaw#provider-authentication](https://github.com/xinhuagu/aceclaw#provider-authentication)

```
# Anthropic — API key or OAuth
export ANTHROPIC_API_KEY="sk-ant-api03-..."     # API key in env
# Or add to ~/.aceclaw/config.json: {"apiKey": "sk-ant-api03-..."}
# Or login via Claude CLI for OAuth token auto-refresh

# GitHub Copilot — uses your existing subscription
aceclaw-restart copilot                         # No extra key needed

# OpenAI / OpenAI Codex
export OPENAI_API_KEY="sk-..."
aceclaw-restart openai
# Or OAuth for Codex:
aceclaw models auth login --provider openai-codex
aceclaw-restart openai-codex

# Ollama (local, offline, no key needed)
aceclaw-restart ollama

# Groq / Together / Mistral
export OPENAI_API_KEY="gsk_..."                 # Provider-specific key
aceclaw-restart groq
```

See [Provider Configuration](https://github.com/xinhuagu/AceClaw/blob/main/docs/provider-configuration.md) for full setup details.

### Build from Source (Developers)

[https://github.com/xinhuagu/aceclaw#build-from-source-developers](https://github.com/xinhuagu/aceclaw#build-from-source-developers)

```
git clone https://github.com/xinhuagu/AceClaw.git && cd AceClaw
./gradlew clean build && ./gradlew :aceclaw-cli:installDist
./aceclaw-cli/build/install/aceclaw-cli/bin/aceclaw-cli
```

The full build also bundles the dashboard via npm — Node 20 LTS must be on `PATH`. Backend-only contributors without Node can pass `-Pno-dashboard` to skip the dashboard build (`aceclaw dashboard` will then return a friendly 404; the daemon and CLI still build).

For dashboard development with hot reload: `cd aceclaw-dashboard && npm run dev` (Vite serves on `http://localhost:5173`; add that origin to `webSocket.allowedOrigins` in `~/.aceclaw/config.json` so the daemon's WS bridge accepts the cross-origin handshake).

Development scripts (from git checkout only — same provider argument support):

| Script | What it does |
|---|---|
| ./dev.sh [provider] | Rebuild + restart daemon + auto-benchmark on feature branches |
| ./restart.sh [provider] | Rebuild + restart daemon (no benchmarks, fastest restart) |
| ./tui.sh [provider] | Open TUI window (no restart, no rebuild if binary exists) |

```
./dev.sh                    # Default: anthropic, with benchmarks on feature branches
./dev.sh --no-bench copilot # Copilot, skip benchmarks
./restart.sh ollama         # Quick restart with Ollama
./tui.sh                    # Attach to running daemon
```

See [Multi-Session Model](https://github.com/xinhuagu/AceClaw/blob/main/docs/multi-session.md) for details on running multiple TUI windows.

## Platform Support

[https://github.com/xinhuagu/aceclaw#platform-support](https://github.com/xinhuagu/aceclaw#platform-support)

| Platform | Status | IPC | CI Gate |
|---|---|---|---|
| Linux | Fully supported | AF_UNIX | pre-merge-check — full test suite (required) |
| macOS | Fully supported | AF_UNIX | platform-smoke — build + cross-platform tests (required) |
| Windows 10 1803+ | Experimental | AF_UNIX (JEP 380) | platform-smoke — build + cross-platform tests (required) |

All three platform checks are required for merging to main. Windows requires Java 21 runtime and Windows 10 version 1803 or later (for AF_UNIX socket support). See [Windows UDS Spike](https://github.com/xinhuagu/AceClaw/blob/main/docs/windows-uds-spike.md) for technical details.

## Tech Stack

[https://github.com/xinhuagu/aceclaw#tech-stack](https://github.com/xinhuagu/aceclaw#tech-stack)

**Runtime (daemon + CLI):** Java 21 (preview features) · Gradle 8.14 · Picocli 4.7.6 · JLine3 3.27.1 · Jackson 2.18.2 · Javalin 6 (WebSocket bridge) · GraalVM Native Image · JUnit 5

**Dashboard:** React 19 · TypeScript 5 · Vite 6 · Tailwind 4 · framer-motion · dagre · Vitest

## License

[https://github.com/xinhuagu/aceclaw#license](https://github.com/xinhuagu/aceclaw#license)

[Apache License 2.0](https://github.com/xinhuagu/AceClaw/blob/main/LICENSE)

## About

         Java-native runtime for long-running AI agents with live execution control, human approvals, and audit trails.       

### Topics

[java-agent](https://github.com/topics/java-agent)[human-in-the-loop](https://github.com/topics/human-in-the-loop)[ai-agents](https://github.com/topics/ai-agents)[ai-security](https://github.com/topics/ai-security)[ai-agent](https://github.com/topics/ai-agent)[llm](https://github.com/topics/llm)[durable-execution](https://github.com/topics/durable-execution)[agent-observability](https://github.com/topics/agent-observability)[agent-runtime](https://github.com/topics/agent-runtime)[runtime-governance](https://github.com/topics/runtime-governance)[long-running-agents](https://github.com/topics/long-running-agents)[harness-engineering](https://github.com/topics/harness-engineering)[visual-runtime](https://github.com/topics/visual-runtime)[agent-audit](https://github.com/topics/agent-audit)[agent-harnesse](https://github.com/topics/agent-harnesse)[harness-virtualization](https://github.com/topics/harness-virtualization)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

