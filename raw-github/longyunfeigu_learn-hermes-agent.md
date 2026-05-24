---
repo: longyunfeigu/learn-hermes-agent
url: https://github.com/longyunfeigu/learn-hermes-agent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - longyunfeigu/learn-hermes-agent: A 27-chapter hands-on tutorial for building an autonomous AI agent from zero in Python. Agent loop, tool system, memory, skills, MCP,     multi-platform gateway, and self-evolution — inspired by Hermes Agent. · GitHub

**Source**: https://github.com/longyunfeigu/learn-hermes-agent

---

[Skip to content](https://github.com/longyunfeigu/learn-hermes-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[longyunfeigu](https://github.com/longyunfeigu)

/
**[learn-hermes-agent](https://github.com/longyunfeigu/learn-hermes-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2Flongyunfeigu%2Flearn-hermes-agent)You must be signed in to change notification settings
- [Fork
    18](https://github.com/login?return_to=%2Flongyunfeigu%2Flearn-hermes-agent)
- 
[Star
          113](https://github.com/login?return_to=%2Flongyunfeigu%2Flearn-hermes-agent)

[https://github.com/longyunfeigu/learn-hermes-agent](https://github.com/longyunfeigu/learn-hermes-agent)

[Branches](https://github.com/longyunfeigu/learn-hermes-agent/branches)[Tags](https://github.com/longyunfeigu/learn-hermes-agent/tags)

[https://github.com/longyunfeigu/learn-hermes-agent/branches](https://github.com/longyunfeigu/learn-hermes-agent/branches)[https://github.com/longyunfeigu/learn-hermes-agent/tags](https://github.com/longyunfeigu/learn-hermes-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History16 Commits16 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| agents | agents |  |  |
| docs | docs |  |  |
| illustrations | illustrations |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| web | web |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README-zh.md | README-zh.md |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[English](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/README.md) | [中文](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/README-zh.md)

# Learn Hermes Agent

[https://github.com/longyunfeigu/learn-hermes-agent#learn-hermes-agent](https://github.com/longyunfeigu/learn-hermes-agent#learn-hermes-agent)

**Build a production-grade autonomous AI agent from scratch in Python.** A 27-chapter, code-first tutorial covering the agent loop, tool system, session persistence, memory, skills, context compression, MCP, multi-platform gateway (Telegram / Discord / Slack / WeChat), and RL-based self-evolution — inspired by Hermes Agent.

Every chapter ships a runnable reference implementation under `agents/sNN_*.py`, paired with a prose explanation under `docs/en/` (and `docs/zh/` for the Chinese mainline). Read, run, tweak, repeat.

This repo does not try to mirror every product detail from the Hermes Agent codebase. It focuses on the mechanisms that actually decide whether an agent can work autonomously across platforms:

- the conversation loop
- tool registry and dispatch
- session persistence
- prompt assembly
- context compression
- memory and skill management
- skill system
- permission and safety
- multi-platform gateway
- terminal backends
- scheduling
- external capability routing

The goal is simple:

**understand the real design backbone well enough that you can rebuild it yourself.**

## What This Repo Is Really Teaching

[https://github.com/longyunfeigu/learn-hermes-agent#what-this-repo-is-really-teaching](https://github.com/longyunfeigu/learn-hermes-agent#what-this-repo-is-really-teaching)

One sentence first:

**The model does the reasoning. The harness gives the model a working environment that spans platforms, persists across sessions, and manages its own skills.**

That working environment is made of a few cooperating parts:

- `Agent Loop`: send messages to the model, execute tool calls, append results, continue
- `Tool System`: a self-registering dispatch layer — the agent's hands
- `Session Store`: SQLite with FTS5 — conversation memory that survives restarts
- `Prompt Builder`: assemble system prompts from personality, memory, config, and context
- `Context Compression`: keep the active window small when conversations grow long
- `Memory & Skills`: durable knowledge and agent-managed skill files
- `Permission System`: detect dangerous commands before execution
- `Gateway`: a single agent loop that listens on Telegram, Discord, Slack, WeChat, and more
- `Terminal Backends`: run commands locally, in Docker, over SSH, or on serverless platforms
- `Cron / MCP / Voice`: grow the single-agent core into a full working platform

This is the teaching promise of the repo:

- teach the mainline in a clean order
- explain unfamiliar concepts before relying on them
- stay close to real system structure
- avoid drowning the learner in irrelevant product details

## What This Repo Deliberately Does Not Teach

[https://github.com/longyunfeigu/learn-hermes-agent#what-this-repo-deliberately-does-not-teach](https://github.com/longyunfeigu/learn-hermes-agent#what-this-repo-deliberately-does-not-teach)

This repo is not trying to preserve every detail that exists in the production system.

If a detail is not central to the agent's core operating model, it should not dominate the teaching line. That includes things like:

- packaging, Nix flakes, and release mechanics
- landing pages and marketing assets
- enterprise subscription and billing wiring
- telemetry and analytics
- RL training pipeline and batch runner internals
- platform-specific API quirks (WeChat XML parsing, Telegram inline keyboards)
- skin/theme engine cosmetics
- historical migration logic

Those details may matter in production. They do not belong at the center of a 0-to-1 teaching path.

## Who This Is For

[https://github.com/longyunfeigu/learn-hermes-agent#who-this-is-for](https://github.com/longyunfeigu/learn-hermes-agent#who-this-is-for)

The assumed reader:

- knows basic Python
- understands functions, classes, async/await basics
- may be completely new to agent systems or multi-platform bots

So the repo tries to keep a few strong teaching rules:

- explain a concept before using it
- keep one concept fully explained in one main place
- start from "what it is", then "why it exists", then "how to implement it"
- avoid forcing beginners to assemble the system from scattered fragments

## Recommended Reading Order

[https://github.com/longyunfeigu/learn-hermes-agent#recommended-reading-order](https://github.com/longyunfeigu/learn-hermes-agent#recommended-reading-order)

- Overview: [docs/en/s00-architecture-overview.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/s00-architecture-overview.md)
- Code Reading Order: [docs/en/s00f-code-reading-order.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/s00f-code-reading-order.md)
- Glossary: [docs/en/glossary.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/glossary.md)
- Teaching Scope: [docs/en/teaching-scope.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/teaching-scope.md)
- Data Structures: [docs/en/data-structures.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/data-structures.md)

## If This Is Your First Visit, Start Here

[https://github.com/longyunfeigu/learn-hermes-agent#if-this-is-your-first-visit-start-here](https://github.com/longyunfeigu/learn-hermes-agent#if-this-is-your-first-visit-start-here)

Do not open random chapters first.

The safest path is:

1. Read [docs/en/s00-architecture-overview.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/s00-architecture-overview.md) for the full system map.
2. Read [docs/en/s00f-code-reading-order.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/s00f-code-reading-order.md) so you know which source files to open first.
3. Follow the five stages in order: `s01-s06 -> s07-s11 -> s12-s15 -> s16-s20 -> s21-s27`.
4. After each stage, stop and rebuild the smallest version yourself before continuing.

If the middle and late chapters start to blur together, reset in this order:

1. [docs/en/data-structures.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/data-structures.md)
2. [docs/en/entity-map.md](https://github.com/longyunfeigu/learn-hermes-agent/blob/main/docs/en/entity-map.md)
3. then return to the chapter body

## Five Stages

[https://github.com/longyunfeigu/learn-hermes-agent#five-stages](https://github.com/longyunfeigu/learn-hermes-agent#five-stages)

1. `s01-s06`: build a working single-agent core with persistence
2. `s07-s11`: add intelligence — memory, skills, safety, delegation, and configuration
3. `s12-s15`: go multi-platform — gateway, adapters, terminal backends, and scheduling
4. `s16-s20`: add advanced capabilities — MCP, browser, voice, vision, and background review
5. `s21-s27`: self-improvement — skill creation, hooks, trajectory/RL, plugins, evaluation, and optimization

## Main Chapters

[https://github.com/longyunfeigu/learn-hermes-agent#main-chapters](https://github.com/longyunfeigu/learn-hermes-agent#main-chapters)

| Chapter | Topic | What you get |
|---|---|---|
| s00 | Architecture Overview | the global map, key terms, and learning order |
| s01 | Agent Loop | the synchronous conversation loop — ask, tool-call, append, continue |
| s02 | Tool System | a self-registering tool registry with dispatch orchestration |
| s03 | Session Store | SQLite + FTS5 persistence — conversations that survive restarts |
| s04 | Prompt Builder | section-based system prompt assembly from personality, memory, and config |
| s05 | Context Compression | auto-triggered LLM summarization when context grows too long |
| s06 | Error Recovery | API error classification, retry with backoff, and provider failover |
| s07 | Memory System | cross-session persistent knowledge with MEMORY.md and USER.md |
| s08 | Skill System | agent-managed skills — create, edit, and execute |
| s09 | Permission System | dangerous command detection and approval gates |
| s10 | Subagent Delegation | spawn fresh context for isolated subtasks |
| s11 | Configuration System | YAML config, env vars, profiles, and runtime migration |
| s12 | Gateway Architecture | the multi-platform message dispatch loop |
| s13 | Platform Adapters | building integrations for Telegram, Discord, Slack, WeChat, and more |
| s14 | Terminal Backends | run commands in Docker, over SSH, on Modal, or Daytona |
| s15 | Cron Scheduler | time-based automation with duration strings and cron expressions |
| s16 | MCP Integration | external capability routing via Model Context Protocol |
| s17 | Browser Automation | Playwright + Browserbase for web interaction |
| s18 | Voice & Vision | TTS/STT pipelines and image analysis |
| s19 | CLI Interface | prompt_toolkit + Rich for an interactive terminal experience |
| s20 | Background Review | every N turns, a background pass updates memory and extracts skills |
| s21 | Skill Creation Loop | background review extracts patterns into reusable skills |
| s22 | Hook System | lifecycle hooks for extensibility without modifying core code |
| s23 | Trajectory & RL | conversation trajectories become training data for model improvement |
| s24 | Plugin Architecture | pluggable memory, compression, and capability providers |
| s25 | Self-Evolution Overview | the core insight, four evolution targets, and full pipeline overview |
| s26 | Evaluation System | eval datasets, LLM-as-judge fitness scoring, and constraint gates |
| s27 | Optimization & Deploy | the feedback→mutate→select loop, full pipeline, and Phase 2-4 concepts |

## Chapter Index: What to Focus on in Each Chapter

[https://github.com/longyunfeigu/learn-hermes-agent#chapter-index-what-to-focus-on-in-each-chapter](https://github.com/longyunfeigu/learn-hermes-agent#chapter-index-what-to-focus-on-in-each-chapter)

If this is your first time learning this material systematically, do not spread your attention evenly across all details. For each chapter, focus on 3 things:

1. What new capability this chapter adds.
2. Where the key state lives.
3. After finishing, can you hand-write this minimal mechanism yourself?

| Chapter | Key Data Structures / Entities | What you should have after this chapter |
|---|---|---|
| s01 | messages list / AIAgent class / run_conversation() | a minimal working synchronous conversation loop |
| s02 | ToolRegistry / ToolEntry / tool_result | a self-registering, self-discovering tool system |
| s03 | SessionDB / state.db / FTS5 index | a SQLite persistence layer — conversations survive restarts |
| s04 | build_context_files_prompt() / build_skills_system_prompt() | a pipeline assembling prompts from personality, memory, and config |
| s05 | ContextCompressor / compression trigger threshold | an auto-summarization layer when context grows too long |
| s06 | ClassifiedError / FailoverReason / classify_api_error() | error classification + backoff retry + provider failover |
| s07 | MemoryStore / MemoryManager / MEMORY.md / USER.md | a layer that separates "temporary context" from "cross-session memory" |
| s08 | SkillMeta / SkillBundle / skill SKILL.md files | a skill system that can create, edit, and execute |
| s09 | DANGEROUS_PATTERNS / detect_dangerous_command() / _ApprovalEntry | a "dangerous operations must pass the gate" approval pipeline |
| s10 | delegate_tool / child messages / isolated AIAgent | a subagent mechanism with isolated context for one-off delegation |
| s11 | config dict / Profile management / migration functions | YAML config + profiles + runtime migration |
| s12 | GatewayRunner / MessageEvent / platform routing | a unified multi-platform message dispatch loop |
| s13 | BasePlatformAdapter / MessageType / SendResult | a reusable platform adapter pattern |
| s14 | BaseEnvironment / local / docker / ssh / modal / daytona | abstract execution environments: local, Docker, SSH, cloud |
| s15 | parse_schedule() / create_job() / get_due_jobs() / job dicts | a "when the time comes, work starts" scheduling layer |
| s16 | mcp_tool / MCP config / tool schema bridging | a bus for plugging external tools and capabilities into the system |
| s17 | browser_tool / Playwright / Browserbase provider | a browser automation layer for web interaction |
| s18 | tts_tool / voice_mode / vision_tools | multimodal pipelines: voice I/O + image analysis |
| s19 | HermesCLI / CommandDef / KawaiiSpinner / Rich rendering | a fully-featured interactive terminal interface |
| s20 | BackgroundReviewer / _MEMORY_REVIEW_PROMPT / dual trigger counters | an "every N turns, auto-reflect → update memory/skills" background review mechanism |
| s21 | skill creation loop / pattern extraction prompt / skill persistence pipeline | the "discover patterns → create reusable skills" prerequisite for self-evolution |
| s22 | HookRegistry / PluginHookRegistry / BOOT.md handler | lifecycle hooks — inject custom logic without modifying core code |
| s23 | convert_to_trajectory() / compress_trajectory() / reward functions | conversation data → training pipeline for model improvement |
| s24 | plugin interfaces / memory providers / compression providers | pluggable memory and compression without touching core code |
| s25 | EvalExample / EvalDataset | the foundational data structures for self-evolution |
| s26 | SyntheticDatasetBuilder / FitnessScore / ConstraintValidator | measurement infrastructure — generate data, score outputs, gate changes |
| s27 | SkillOptimizer / EvolutionResult / evolve_skill() | the optimization loop and full 7-step pipeline |

## Reading Approaches for Beginners

[https://github.com/longyunfeigu/learn-hermes-agent#reading-approaches-for-beginners](https://github.com/longyunfeigu/learn-hermes-agent#reading-approaches-for-beginners)

### Approach 1: Steady Mainline

[https://github.com/longyunfeigu/learn-hermes-agent#approach-1-steady-mainline](https://github.com/longyunfeigu/learn-hermes-agent#approach-1-steady-mainline)

Best for readers encountering agent systems for the first time.

Read in this order:

`s00 -> s01 -> ... -> s20 -> s21 -> ... -> s27` (follow the numbers; `s24` is docs-only).

### Approach 2: Build First, Complete Later

[https://github.com/longyunfeigu/learn-hermes-agent#approach-2-build-first-complete-later](https://github.com/longyunfeigu/learn-hermes-agent#approach-2-build-first-complete-later)

Best for "get it running, then fill in the gaps" readers.

Read in this order:

1. `s01-s06`: build a core agent with persistence and context compression
2. `s07-s11`: add memory, skills, safety, delegation, and config
3. `s12-s15`: go multi-platform, learn cross-environment execution
4. `s16-s20`: advanced capabilities plus the background self-review
5. `s21-s27`: step into self-evolution — skill creation, hooks, trajectories, evaluation, and optimization

### Approach 3: When You Get Stuck

[https://github.com/longyunfeigu/learn-hermes-agent#approach-3-when-you-get-stuck](https://github.com/longyunfeigu/learn-hermes-agent#approach-3-when-you-get-stuck)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

