---
repo: clawland-ai/geneclaw
url: https://github.com/clawland-ai/geneclaw
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Clawland-AI/Geneclaw: Self-evolving AI agent framework with 5-layer safety gatekeeper. Agents observe failures, propose fixes, and safely apply them. Built on HKUDS/nanobot. · GitHub

**Source**: https://github.com/clawland-ai/geneclaw

---

[Skip to content](https://github.com/clawland-ai/geneclaw#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Clawland-AI](https://github.com/Clawland-AI)

/
**[Geneclaw](https://github.com/Clawland-AI/Geneclaw)**

Public

- [Notifications](https://github.com/login?return_to=%2FClawland-AI%2FGeneclaw)You must be signed in to change notification settings
- [Fork
    8](https://github.com/login?return_to=%2FClawland-AI%2FGeneclaw)
- 
[Star
          36](https://github.com/login?return_to=%2FClawland-AI%2FGeneclaw)

[https://github.com/Clawland-AI/Geneclaw](https://github.com/Clawland-AI/Geneclaw)

[Branches](https://github.com/Clawland-AI/Geneclaw/branches)[Tags](https://github.com/Clawland-AI/Geneclaw/tags)

[https://github.com/Clawland-AI/Geneclaw/branches](https://github.com/Clawland-AI/Geneclaw/branches)[https://github.com/Clawland-AI/Geneclaw/tags](https://github.com/Clawland-AI/Geneclaw/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History8 Commits8 Commits |  |  |  |
| .github | .github |  |  |
| bridge | bridge |  |  |
| case | case |  |  |
| docs | docs |  |  |
| geneclaw | geneclaw |  |  |
| nanobot | nanobot |  |  |
| tests | tests |  |  |
| workspace | workspace |  |  |
| .cursorrules | .cursorrules |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| COMMUNICATION.md | COMMUNICATION.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| core_agent_lines.sh | core_agent_lines.sh |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| nanobot_arch.png | nanobot_arch.png |  |  |
| nanobot_logo.png | nanobot_logo.png |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧬 Geneclaw — Self-Evolving AI Agent Framework

[https://github.com/clawland-ai/geneclaw#-geneclaw--self-evolving-ai-agent-framework](https://github.com/clawland-ai/geneclaw#-geneclaw--self-evolving-ai-agent-framework)

[https://geneclaw.ai](https://geneclaw.ai)[https://camo.githubusercontent.com/a287273aa1ac227834bcdc3d81628946cecaba08d9b08fba6b39f1d843e547c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2de289a5332e31312d626c7565](https://camo.githubusercontent.com/a287273aa1ac227834bcdc3d81628946cecaba08d9b08fba6b39f1d843e547c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2de289a5332e31312d626c7565)[https://camo.githubusercontent.com/f8df3091bbe1149f398a5369b2c39e896766f9f6efba3477c63e9b4aa940ef14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e](https://camo.githubusercontent.com/f8df3091bbe1149f398a5369b2c39e896766f9f6efba3477c63e9b4aa940ef14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d677265656e)[https://camo.githubusercontent.com/a609871c92f92f5c89d308e49d90469873477aa1941c12ba5cdbb90ba82ecc79/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4745502d76302e312e302d6f72616e6765](https://camo.githubusercontent.com/a609871c92f92f5c89d308e49d90469873477aa1941c12ba5cdbb90ba82ecc79/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4745502d76302e312e302d6f72616e6765)[https://camo.githubusercontent.com/5bb63763b6712f94ff0c123aea14b7eeed4d623365c9199f012b52a498c9f884/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f757073747265616d2d484b5544532532466e616e6f626f742d6c6967687467726579](https://camo.githubusercontent.com/5bb63763b6712f94ff0c123aea14b7eeed4d623365c9199f012b52a498c9f884/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f757073747265616d2d484b5544532532466e616e6f626f742d6c6967687467726579)

**[geneclaw.ai](https://geneclaw.ai)** ·      [GitHub](https://github.com/Clawland-AI/Geneclaw) ·      [Protocol Spec](https://github.com/Clawland-AI/Geneclaw/blob/master/docs/specs/GEP-v0.md) ·      [Quickstart](https://github.com/Clawland-AI/Geneclaw/blob/master/docs/quickstart/Geneclaw-Runbook.md)

*Built on [nanobot](https://github.com/HKUDS/nanobot) — adds closed-loop self-improvement via the Geneclaw Evolution Protocol (GEP)*

---

**Geneclaw** extends the ultra-lightweight [nanobot](https://github.com/HKUDS/nanobot) AI agent with a **self-evolution engine** — enabling the agent to observe its own failures, diagnose root causes, propose constrained fixes, and safely apply them behind a multi-layered gatekeeper.

**Everything is dry-run by default. Nothing is applied without explicit human approval.**

> 📖 Visit **[geneclaw.ai](https://geneclaw.ai)** for documentation, demos, and community resources.

## Key Capabilities

[https://github.com/clawland-ai/geneclaw#key-capabilities](https://github.com/clawland-ai/geneclaw#key-capabilities)

| Capability | Description |
|---|---|
| Observability | JSONL event recording for every agent interaction (inbound, tools, errors, outbound) |
| Diagnosis | Heuristic failure analysis + optional LLM-assisted root cause identification |
| Evolution Proposals | Structured JSON proposals with unified diffs, risk levels, and rollback plans |
| Gatekeeper | 5-layer safety validation (allowlist, denylist, diff size, secret scan, code pattern detection) |
| Safe Apply | Git-branched patch application with automated test execution and rollback on failure |
| Autopilot | Configurable multi-cycle evolution loop with risk-based auto-approve |
| Dashboard | Read-only Streamlit web dashboard for evolution audit, timeline, and benchmark visualisation |
| Benchmarks | Pipeline performance measurement with synthetic workloads and JSONL persistence |
| Event Store | Append-only evolution lifecycle logging with secret redaction |
| Reporting | Aggregated pipeline statistics (table + JSON output) |
| Doctor | Read-only health checks with actionable suggestions |

## Architecture

[https://github.com/clawland-ai/geneclaw#architecture](https://github.com/clawland-ai/geneclaw#architecture)

```
Geneclaw Evolution Protocol (GEP v0)
    ┌─────────────────────────────────────────────────────────────┐
    │                                                             │
    │   Observe ──→ Diagnose ──→ Propose ──→ Gate ──→ Apply      │
    │      │            │            │          │         │       │
    │   recorder    evolver      evolver    gatekeeper  apply     │
    │   (JSONL)    (heuristic    (JSON +    (5 checks)  (git +   │
    │               + LLM)       diff)                  pytest)  │
    │      │            │            │          │         │       │
    │      └────────────┴────────────┴──────────┴─────────┘       │
    │                         │                                   │
    │                    event_store                               │
    │                    (audit log)                               │
    │                                                             │
    ├─── autopilot   (multi-cycle controller)                     │
    ├─── dashboard   (Streamlit read-only visualisation)          │
    ├─── benchmarks  (performance measurement)                    │
    ├─── doctor      (health checks)                              │
    └─── report      (statistics aggregation)                     │
                                                                  │
    ┌─────────────────────────────────────────────────────────────┐
    │                  nanobot (upstream)                          │
    │   agent/loop.py ←→ channels ←→ providers ←→ tools           │
    └─────────────────────────────────────────────────────────────┘
```

## Project Structure

[https://github.com/clawland-ai/geneclaw#project-structure](https://github.com/clawland-ai/geneclaw#project-structure)

```
Clawland-AI/Geneclaw
├── geneclaw/                      # GEP v0 evolution engine
│   ├── __init__.py                # Package metadata (v0.1.0)
│   ├── models.py                  # RunEvent, EvolutionProposal, EvoEvent
│   ├── redact.py                  # Secret redaction (regex-based)
│   ├── recorder.py                # JSONL run event recorder
│   ├── evolver.py                 # Heuristic + LLM proposal generator
│   ├── gatekeeper.py              # Safety validation (5 checks)
│   ├── apply.py                   # Git-branched diff application
│   ├── event_store.py             # Append-only evolution event log
│   ├── report.py                  # Statistics aggregation
│   ├── doctor.py                  # Health checks
│   ├── autopilot.py               # Multi-cycle evolution controller
│   ├── benchmarks.py              # Pipeline performance benchmarks
│   ├── cli.py                     # Typer CLI subcommands
│   └── dashboard/                 # Streamlit dashboard (read-only)
│       ├── app.py                 # Streamlit entry point
│       ├── loader.py              # Data loading, filtering, redaction
│       └── views/                 # Overview, Timeline, Audit, Benchmarks
├── nanobot/                       # Upstream agent framework (HKUDS/nanobot)
│   ├── agent/                     # Core agent loop + tools
│   ├── channels/                  # Chat platform integrations
│   ├── providers/                 # LLM providers
│   ├── config/                    # Configuration schema
│   └── cli/                       # Main CLI entry point
├── tests/                         # 123 tests across 8 files
│   ├── test_geneclaw_recorder.py
│   ├── test_geneclaw_evolver.py
│   ├── test_geneclaw_gatekeeper.py
│   ├── test_geneclaw_doctor.py
│   ├── test_geneclaw_events.py
│   ├── test_geneclaw_autopilot.py
│   └── test_geneclaw_dashboard.py
├── docs/
│   ├── specs/GEP-v0.md            # Protocol specification
│   ├── quickstart/Geneclaw-Runbook.md
│   ├── ops/
│   │   ├── github-governance.md   # Branch protection & PR checklist
│   │   ├── release-runbook.md     # Tagging & release process
│   │   ├── llm-provider-setup.md  # Secure LLM provider configuration
│   │   ├── first-real-proposal.md # Guide: first non-no-op proposal
│   │   ├── upstream-sync.md       # Upstream merge strategy
│   │   ├── dashboard-runbook.md   # Dashboard operations
│   │   └── first-live-run-*.md    # Audit records
│   └── devlog/                    # Daily development logs
└── .github/
    ├── workflows/ci.yml           # CI pipeline
    └── pull_request_template.md
```

## Install

[https://github.com/clawland-ai/geneclaw#install](https://github.com/clawland-ai/geneclaw#install)

**From source (recommended)**

```
git clone https://github.com/Clawland-AI/Geneclaw.git
cd Geneclaw
pip install -e ".[dev]"
```

**With Dashboard support**

```
pip install -e ".[dev,dashboard]"
```

**Add upstream remote** (for syncing with nanobot)

```
git remote add upstream https://github.com/HKUDS/nanobot.git
```

## Quick Start

[https://github.com/clawland-ai/geneclaw#quick-start](https://github.com/clawland-ai/geneclaw#quick-start)

### 1. Initialize

[https://github.com/clawland-ai/geneclaw#1-initialize](https://github.com/clawland-ai/geneclaw#1-initialize)

```
nanobot onboard
```

### 2. Enable Geneclaw

[https://github.com/clawland-ai/geneclaw#2-enable-geneclaw](https://github.com/clawland-ai/geneclaw#2-enable-geneclaw)

Add or merge into `~/.nanobot/config.json`:

```
{
  "geneclaw": {
    "enabled": true,
    "redactEnabled": true,
    "allowApplyDefault": false,
    "allowlistPaths": ["geneclaw/", "docs/"],
    "denylistPaths": [".env", "secrets/", ".git/", "config.json"],
    "maxPatchLines": 500
  }
}
```

### 3. Verify

[https://github.com/clawland-ai/geneclaw#3-verify](https://github.com/clawland-ai/geneclaw#3-verify)

```
nanobot geneclaw doctor
```

### 4. Chat (generates run events)

[https://github.com/clawland-ai/geneclaw#4-chat-generates-run-events](https://github.com/clawland-ai/geneclaw#4-chat-generates-run-events)

```
nanobot agent -m "Hello, what tools do you have?"
```

### 5. Generate evolution proposal

[https://github.com/clawland-ai/geneclaw#5-generate-evolution-proposal](https://github.com/clawland-ai/geneclaw#5-generate-evolution-proposal)

```
nanobot geneclaw evolve --dry-run
```

### 6. View statistics

[https://github.com/clawland-ai/geneclaw#6-view-statistics](https://github.com/clawland-ai/geneclaw#6-view-statistics)

```
nanobot geneclaw report
```

### 7. Launch Dashboard

[https://github.com/clawland-ai/geneclaw#7-launch-dashboard](https://github.com/clawland-ai/geneclaw#7-launch-dashboard)

```
nanobot geneclaw dashboard
# opens http://localhost:8501
```

## CLI Reference

[https://github.com/clawland-ai/geneclaw#cli-reference](https://github.com/clawland-ai/geneclaw#cli-reference)

All commands are under `nanobot geneclaw`:

| Command | Description |
|---|---|
| nanobot geneclaw doctor | Health checks — config, paths, permissions |
| nanobot geneclaw status | Current state — enabled, sessions, last run |
| nanobot geneclaw evolve --dry-run | Generate evolution proposal (dry-run default) |
| nanobot geneclaw evolve --apply | Generate and apply proposal (requires config) |
| nanobot geneclaw apply <file.json> | Apply a saved proposal file |
| nanobot geneclaw report | Pipeline statistics (table) |
| nanobot geneclaw report --format json | Pipeline statistics (JSON) |
| nanobot geneclaw autopilot | Multi-cycle evolution loop |
| nanobot geneclaw benchmark | Pipeline performance benchmarks |
| nanobot geneclaw benchmark --save | Run benchmarks and persist results to JSONL |
| nanobot geneclaw dashboard | Launch Streamlit dashboard (read-only) |

### Autopilot Options

[https://github.com/clawland-ai/geneclaw#autopilot-options](https://github.com/clawland-ai/geneclaw#autopilot-options)

```
nanobot geneclaw autopilot \
  --max-cycles 5 \
  --cooldown 10 \
  --auto-approve low \
  --dry-run \
  --format table
```

| Option | Default | Description |
|---|---|---|
| --max-cycles | 3 | Maximum evolution cycles |
| --cooldown | 5.0 | Seconds between cycles |
| --auto-approve | low | Risk threshold for auto-approve (none, low) |
| --dry-run/--apply | dry-run | Apply mode requires allow_apply_default=true |
| --stop-on-failure/--continue | stop | Halt on first apply failure |
| --format | table | Output format (table, json) |

### Benchmark Options

[https://github.com/clawland-ai/geneclaw#benchmark-options](https://github.com/clawland-ai/geneclaw#benchmark-options)

```
nanobot geneclaw benchmark \
  --event-counts 100,500,1000 \
  --gate-iterations 100 \
  --save \
  --format table
```

### Dashboard Options

[https://github.com/clawland-ai/geneclaw#dashboard-options](https://github.com/clawland-ai/geneclaw#dashboard-options)

```
nanobot geneclaw dashboard \
  --port 8501 \
  --events /path/to/events.jsonl \
  --benchmarks /path/to/benchmarks.jsonl
```

The dashboard provides four read-only views: **Overview** (KPIs, risk distribution), **Event Timeline** (charts with time filters), **Proposal Audit** (per-proposal metadata inspection), and **Benchmarks** (performance trends).

## Configuration

[https://github.com/clawland-ai/geneclaw#configuration](https://github.com/clawland-ai/geneclaw#configuration)

The `geneclaw` section in `~/.nanobot/config.json`:

| Field | Type | Default | Description |
|---|---|---|---|
| enabled | bool | false | Enable geneclaw observability + evolution |
| logMaxChars | int | 500 | Max chars per event preview |
| redactEnabled | bool | true | Redact secrets in all logs |
| allowApplyDefault | bool | false | Must be true to allow --apply |
| allowlistPaths | list | ["geneclaw/", "nanobot/", "tests/", "docs/"] | Paths proposals may modify |
| denylistPaths | list | [".env", "secrets/", ".git/", "config.json"] | Paths that are always blocked |
| maxPatchLines | int | 500 | Maximum diff lines allowed |

## Safety Model

[https://github.com/clawland-ai/geneclaw#safety-model](https://github.com/clawland-ai/geneclaw#safety-model)

Geneclaw enforces multiple layers of protection:

### 1. Dry-Run Default

[https://github.com/clawland-ai/geneclaw#1-dry-run-default](https://github.com/clawland-ai/geneclaw#1-dry-run-default)

All commands default to `--dry-run`. Proposals are generated and validated but never applied without explicit `--apply` flag AND `allowApplyDefault=true` in config.

### 2. Gatekeeper (5 Checks)

[https://github.com/clawland-ai/geneclaw#2-gatekeeper-5-checks](https://github.com/clawland-ai/geneclaw#2-gatekeeper-5-checks)

Every proposal must pass all five checks before application:

| Check | What it does |
|---|---|
| Path Allowlist | All files_touched must start with an allowed prefix |
| Path Denylist | No file may match a denied path (.env, secrets/, etc.) |
| Diff Size Limit | Line count must not exceed maxPatchLines |
| Secret Scan | Diff is scanned for API keys, tokens, PEM keys |
| Code Pattern Scan | Detects eval(), exec(), os.system(), subprocess.call() |

### 3. Git Safety

[https://github.com/clawland-ai/geneclaw#3-git-safety](https://github.com/clawland-ai/geneclaw#3-git-safety)
