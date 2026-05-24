---
repo: deepelementlab/clawcode
url: https://github.com/deepelementlab/clawcode
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - deepelementlab/clawcode: ClawCode is claude code inspired implementation in python and Rust focused on agents and experience-based evolution, and is an Open-source coding-agent CLI for Anthropic, OpenAI, Gemini, DeepSeek, GLM, Kimit, Ollama, Codex, GitHub Models, and 200+ models via OpenAI-compatible APIs. · GitHub

**Source**: https://github.com/deepelementlab/clawcode

---

[Skip to content](https://github.com/deepelementlab/clawcode#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[deepelementlab](https://github.com/deepelementlab)

/
**[clawcode](https://github.com/deepelementlab/clawcode)**

Public

- [Notifications](https://github.com/login?return_to=%2Fdeepelementlab%2Fclawcode)You must be signed in to change notification settings
- [Fork
    50](https://github.com/login?return_to=%2Fdeepelementlab%2Fclawcode)
- 
[Star
          199](https://github.com/login?return_to=%2Fdeepelementlab%2Fclawcode)

[https://github.com/deepelementlab/clawcode](https://github.com/deepelementlab/clawcode)

[Branches](https://github.com/deepelementlab/clawcode/branches)[Tags](https://github.com/deepelementlab/clawcode/tags)

[https://github.com/deepelementlab/clawcode/branches](https://github.com/deepelementlab/clawcode/branches)[https://github.com/deepelementlab/clawcode/tags](https://github.com/deepelementlab/clawcode/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History139 Commits139 Commits |  |  |  |
| .claude | .claude |  |  |
| .claw | .claw |  |  |
| .clawcode | .clawcode |  |  |
| assets | assets |  |  |
| clawcode | clawcode |  |  |
| config | config |  |  |
| core | core |  |  |
| db | db |  |  |
| docs | docs |  |  |
| llm | llm |  |  |
| message | message |  |  |
| plugin | plugin |  |  |
| screens | screens |  |  |
| session | session |  |  |
| tests | tests |  |  |
| tui | tui |  |  |
| .clawcode.json | .clawcode.json |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README.zh.md | README.zh.md |  |  |
| app.py | app.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/deepelementlab/clawcode/blob/main/assets/ClawCode_Banner_V0.1.2-1.gif](https://github.com/deepelementlab/clawcode/blob/main/assets/ClawCode_Banner_V0.1.2-1.gif)

# ClawCode

[https://github.com/deepelementlab/clawcode#clawcode](https://github.com/deepelementlab/clawcode#clawcode)

**Creative Engineering Cockpit for Serious AI Builders.**

**Instantly access a professional team for intelligent research, design, and development.**

   Open-source coding agent platform with terminal-native execution, multi-agent orchestration, closed-loop learning, and a production-grade research subsystem. 

[https://github.com/deepelementlab/clawcode/releases](https://github.com/deepelementlab/clawcode/releases)[https://github.com/deepelementlab/clawcode#license](https://github.com/deepelementlab/clawcode#license)[https://github.com/deepelementlab/clawcode/wiki](https://github.com/deepelementlab/clawcode/wiki)

[English](https://github.com/deepelementlab/clawcode/blob/main/README.md) |   [简体中文](https://github.com/deepelementlab/clawcode/blob/main/README.zh.md)

[Our Story](https://github.com/deepelementlab/clawcode#the-story-behind-clawcode) •   [Philosophy](https://github.com/deepelementlab/clawcode#design-philosophy) •   [Differentiation](https://github.com/deepelementlab/clawcode#what-makes-it-different) •   [Capabilities](https://github.com/deepelementlab/clawcode#core-capabilities) •   [ResearchTeam](https://github.com/deepelementlab/clawcode#research--researchteam) •   [Knowledge Ecosystem](https://github.com/deepelementlab/clawcode#knowledge-ecosystem-deepnote--notebook-interop) •   [Domain Extension](https://github.com/deepelementlab/clawcode#domain-extension--expertise-injection) •   [Architecture](https://github.com/deepelementlab/clawcode#architecture-at-a-glance) •   [Testing](https://github.com/deepelementlab/clawcode#testing--quality-assurance) •   [Documentation](https://github.com/deepelementlab/clawcode#documentation) •   [Contributing](https://github.com/deepelementlab/clawcode#contributing)

---

## The Story Behind ClawCode

[https://github.com/deepelementlab/clawcode#the-story-behind-clawcode](https://github.com/deepelementlab/clawcode#the-story-behind-clawcode)

In 2024, the DeepElementLab team watched the same scene repeat across dozens of engineering teams: a developer would spend an hour debugging an API error handling pattern with an AI assistant, only to start from scratch two days later when the same issue resurfaced in a new session. The assistant was stateless; the knowledge evaporated.

We asked a systems question: **What if an AI coding assistant could remember, learn, and evolve?**

Not in the sense of a chat history buffer, but in the way a senior engineer accumulates institutional knowledge — debugging patterns, tool sequences, remediation playbooks — and refines them over time. This is the origin of ClawCode.

ClawCode is named after the claw of a craftsman: precise, persistent, and capable of both delicate manipulation and heavy lifting. It represents our belief that AI coding tools should be **engineering instruments**, not just conversational toys. We built it for teams who ship production code, not just prototypes.

Today, ClawCode combines **agent runtime**, **tool execution**, **workflow orchestration**, and **experience learning** into one coherent developer system. It reimagined from the ground up with structured memory, governed autonomy, and multi-agent collaboration.

## Design Philosophy

[https://github.com/deepelementlab/clawcode#design-philosophy](https://github.com/deepelementlab/clawcode#design-philosophy)

ClawCode is built on four foundational principles that guide every architectural decision:

### 1. Execution Over Suggestion

[https://github.com/deepelementlab/clawcode#1-execution-over-suggestion](https://github.com/deepelementlab/clawcode#1-execution-over-suggestion)

We believe AI assistants should **do**, not just advise. Tools run, files change, outputs are verified. Every conversation is an engineering action with observable side effects.

### 2. Orchestration Over Monologue

[https://github.com/deepelementlab/clawcode#2-orchestration-over-monologue](https://github.com/deepelementlab/clawcode#2-orchestration-over-monologue)

Single-agent bottlenecks are a scaling anti-pattern. Role-based collaboration (`/clawteam`, `research team`) replaces the lone assistant with coordinated specialists — architecture, implementation, QA, and delivery — working toward convergent outcomes.

### 3. Learning Over Statelessness

[https://github.com/deepelementlab/clawcode#3-learning-over-statelessness](https://github.com/deepelementlab/clawcode#3-learning-over-statelessness)

Sessions should not be disposable. Our three-tier experience model (**Instinct → ECAP → TECAP**) transforms recurring behavior into reusable, versioned artifacts. The system learns from tool traces, clusters patterns, and evolves skills under governance.

### 4. Platform Over Lock-in

[https://github.com/deepelementlab/clawcode#4-platform-over-lock-in](https://github.com/deepelementlab/clawcode#4-platform-over-lock-in)

Your tools should serve your workflow, not a vendor's ecosystem. Provider-agnostic model layer, OpenAI-compatible endpoints, and extensible tool adapters ensure you own your infrastructure.

> **The ClawCode Loop:** Idea → Plan → Execute → Verify → Review → Learn

## What Makes It Different

[https://github.com/deepelementlab/clawcode#what-makes-it-different](https://github.com/deepelementlab/clawcode#what-makes-it-different)

| Typical AI Coding Assistant | ClawCode |
|---|---|
| Chat-first interaction | Terminal-native execution surface |
| Single assistant thread | Multi-role orchestration with convergence |
| Stateless sessions | Persistent memory via ECAP/TECAP |
| Generic answers | Workflow-driven outputs and artifacts |
| Fixed backend assumptions | Model/provider abstraction + custom adapters |
| No personal knowledge support | DeepNote wiki + notebook interop for personal/team knowledge |
| One-size-fits-all | 12 built-in vertical domains + extensible domain registry |

## Core Capabilities

[https://github.com/deepelementlab/clawcode#core-capabilities](https://github.com/deepelementlab/clawcode#core-capabilities)

### Terminal-Native Coding Agent

[https://github.com/deepelementlab/clawcode#terminal-native-coding-agent](https://github.com/deepelementlab/clawcode#terminal-native-coding-agent)

Run interactively (TUI) or non-interactively in automation contexts:

```
clawcode
clawcode -p "Refactor this API and add tests"
clawcode -p "Summarize git changes as release notes" -f json
```

### Virtual R&D Team (`/clawteam`)

[https://github.com/deepelementlab/clawcode#virtual-rd-team-clawteam](https://github.com/deepelementlab/clawcode#virtual-rd-team-clawteam)

Spin up coordinated specialist roles for architecture, implementation, QA, and delivery decisions:

```
/clawteam "Build a REST API with auth"
/clawteam --deep_loop "Design microservice architecture"
```

The `/clawteam` deep loop mode features:

- Bounded iteration with convergence detection (quality score, handoff success rate)
- Automatic TECAP/ECAP writeback after each iteration
- Rollback and degrade decisions on critical alerts
- Observability events with policy IDs and domain metadata

### Design Team (`/designteam`)

[https://github.com/deepelementlab/clawcode#design-team-designteam](https://github.com/deepelementlab/clawcode#design-team-designteam)

Generate structured product/design artifacts from dedicated design roles (research, IXD, UI, PM, visual).

### UI Style and Brand System (`/ui-style`)

[https://github.com/deepelementlab/clawcode#ui-style-and-brand-system-ui-style](https://github.com/deepelementlab/clawcode#ui-style-and-brand-system-ui-style)

ClawCode ships with a curated catalog of [54 world-class brand design systems](https://github.com/deepelementlab/clawcode/blob/main/.claw/design/UI), ensuring generated UI work stays on-brand instead of drifting between prompts:

**Featured brands include:** Apple, Google (Material), Microsoft (Fluent), Airbnb, Stripe, Figma, Notion, Vercel, Linear, Spotify, Uber, Netflix, BMW, NVIDIA, SpaceX, Coinbase, HashiCorp, MongoDB, Supabase, PostHog, Sentry, Replicate, Runway, ElevenLabs, Cursor, Warp, Raycast, Cal.com, Intercom, Airtable, Miro, Sanity, Webflow, Framer, Mintlify, Cohere, Mistral AI, Together AI, xAI, MiniMax, Composio, Lovable, VoltAgent, Ollama, OpenCode, Resend, Revolut, Wise, Kraken, Zapier, Clay, ClickHouse, IBM, Pinterest, and Expo.

Each brand entry includes:

- **Design tokens**: primary colors, typography, radius, shadows
- **Domain fit**: which industries and surfaces the style suits best
- **Tone keywords**: the emotional signature (e.g., "trustworthy + minimal" for Stripe)
- **Surface compatibility**: where the style shines and where it should be avoided

Style routing supports manual lock, auto-pick, and hybrid selection modes, with session-level traceability (`/ui-style why`) for explainable brand decisions.

**Extended UI style support:**  With Free UI, featuring [50+ categories and 270+ design styles](https://github.com/deepelementlab/openstyle), covering nearly all major brand types.Empower AI with a deeper understanding of UI aesthetics — design any style you want with UI effects that match your brand.

### Tooling Surface

[https://github.com/deepelementlab/clawcode#tooling-surface](https://github.com/deepelementlab/clawcode#tooling-surface)

Built-in tool categories include:

- File operations (`view`, `write`, `edit`, `patch`, `grep`)
- Shell/runtime execution
- Browser automation
- Subagent spawning and isolation
- MCP integrations and external adapters
- Research tools (`research_*`)

### HUD (Heads-Up Display)

[https://github.com/deepelementlab/clawcode#hud-heads-up-display](https://github.com/deepelementlab/clawcode#hud-heads-up-display)

Real-time status overlay showing:

- Model, context window usage, session duration
- Configuration counts (clawcode.md, rules, MCPs, hooks)
- Running tools with live status indicators
- Agent entries with completion times
- Todo list with progress tracking

### Code Awareness

[https://github.com/deepelementlab/clawcode#code-awareness](https://github.com/deepelementlab/clawcode#code-awareness)

Architecture-level project understanding:

- BFS-based directory outline scanning
- LLM-assisted architecture layer classification with rule-based fallback
- Real-time file modification tracking with sequence labels
- Session-isolated history with query archive
- Dynamic layer descriptions for project-specific structures

### Plan Mode

[https://github.com/deepelementlab/clawcode#plan-mode](https://github.com/deepelementlab/clawcode#plan-mode)

Read-only planning with structured task management:

- Tool permission filtering (blocks write operations)
- Versioned plan bundles with markdown + JSON storage
- Task split, execution state tracking, and stale build normalization
- Cross-session plan discovery in subdirectories

### Claw Mode

[https://github.com/deepelementlab/clawcode#claw-mode](https://github.com/deepelementlab/clawcode#claw-mode)

Lightweight iteration-bounded agent:

- Configurable iteration budget with consume/refund
- OpenAI-style message conversion for tool calls
- System suffix injection for claw-specific behavior

## Research & ResearchTeam

[https://github.com/deepelementlab/clawcode#research--researchteam](https://github.com/deepelementlab/clawcode#research--researchteam)

ClawCode includes a production-style research subsystem for evidence-backed investigation pipelines.

### Research Workflows

[https://github.com/deepelementlab/clawcode#research-workflows](https://github.com/deepelementlab/clawcode#research-workflows)

| Workflow | Command | Purpose |
|---|---|---|
| deepresearch | clawcode research start "topic" -w deepresearch | Template pipeline: plan -> research -> verify -> deliver |
| peerreview | clawcode research start "topic" -w peerreview | Critical review with verification |
| lit | clawcode research start "topic" -w lit | Literature survey |
| audit | clawcode research audit <url> | Inspect URL/repo/artifact |
| compare | clawcode research start "topic" -w compare | Side-by-side comparison |

### ResearchTeam Mode (`teamresearch`)

[https://github.com/deepelementlab/clawcode#researchteam-mode-teamresearch](https://github.com/deepelementlab/clawcode#researchteam-mode-teamresearch)

`ResearchTeam` is the high-rigor mode for complex topics:

- Parallel specialist roles per phase (e.g. literature, analysis, synthesis, verification)
- Merge strategies (`union`, `conflict_resolution`, `sequential_review`, `consensus`)
- Convergence checks requiring consecutive qualifying rounds
- Team Experience Capsule (ResearchTECAP) persistence
- Contract-based handoff validation with quality gates
- 8+ built-in role definitions in the role registry
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

