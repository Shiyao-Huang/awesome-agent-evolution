---
repo: dsifry/metaswarm
url: https://github.com/dsifry/metaswarm
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - dsifry/metaswarm: A self-improving multi-agent orchestration framework for Claude Code, Gemini CLI, and Codex CLI — 18 agents, 13 skills, 15 commands, TDD enforcement, quality gates, spec-driven development · GitHub

**Source**: https://github.com/dsifry/metaswarm

---

[Skip to content](https://github.com/dsifry/metaswarm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[dsifry](https://github.com/dsifry)

/
**[metaswarm](https://github.com/dsifry/metaswarm)**

Public

- [Notifications](https://github.com/login?return_to=%2Fdsifry%2Fmetaswarm)You must be signed in to change notification settings
- [Fork
    34](https://github.com/login?return_to=%2Fdsifry%2Fmetaswarm)
- 
[Star
          272](https://github.com/login?return_to=%2Fdsifry%2Fmetaswarm)

[https://github.com/dsifry/metaswarm](https://github.com/dsifry/metaswarm)

[Branches](https://github.com/dsifry/metaswarm/branches)[Tags](https://github.com/dsifry/metaswarm/tags)

[https://github.com/dsifry/metaswarm/branches](https://github.com/dsifry/metaswarm/branches)[https://github.com/dsifry/metaswarm/tags](https://github.com/dsifry/metaswarm/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History113 Commits113 Commits |  |  |  |
| .agents/plugins | .agents/plugins |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .claude/commands | .claude/commands |  |  |
| .codex-plugin | .codex-plugin |  |  |
| .codex | .codex |  |  |
| .cursor-plugin | .cursor-plugin |  |  |
| .github/workflows | .github/workflows |  |  |
| .opencode | .opencode |  |  |
| agents | agents |  |  |
| bin | bin |  |  |
| cli | cli |  |  |
| commands | commands |  |  |
| docs | docs |  |  |
| guides | guides |  |  |
| hooks | hooks |  |  |
| knowledge | knowledge |  |  |
| lib | lib |  |  |
| rubrics | rubrics |  |  |
| scripts | scripts |  |  |
| skills | skills |  |  |
| templates | templates |  |  |
| tests | tests |  |  |
| .coverage-thresholds.json | .coverage-thresholds.json |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| GEMINI.md | GEMINI.md |  |  |
| GETTING_STARTED.md | GETTING_STARTED.md |  |  |
| INSTALL.md | INSTALL.md |  |  |
| LICENSE | LICENSE |  |  |
| ORCHESTRATION.md | ORCHESTRATION.md |  |  |
| README.md | README.md |  |  |
| USAGE.md | USAGE.md |  |  |
| gemini-extension.json | gemini-extension.json |  |  |
| package.json | package.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# metaswarm

[https://github.com/dsifry/metaswarm#metaswarm](https://github.com/dsifry/metaswarm#metaswarm)

A self-improving multi-agent orchestration framework for [Claude Code](https://docs.anthropic.com/en/docs/claude-code), Gemini CLI, and Codex CLI. Coordinate 18 specialized AI agents and 13 orchestration skills through a complete software development lifecycle, from issue to merged PR, with recursive orchestration, parallel review gates, and a git-native knowledge base.

## What Is This?

[https://github.com/dsifry/metaswarm#what-is-this](https://github.com/dsifry/metaswarm#what-is-this)

metaswarm is an extraction of a production-tested agentic orchestration system. It has been proven in the field writing production-level code with 100% test coverage, mandatory TDD, multi-reviewed spec-driven development, and SDLC best practices across hundreds of PRs. It provides:

- **18 specialized agent personas** (Researcher, Architect, Coder, Security Auditor, PR Shepherd, etc.)
- **A structured 9-phase workflow**: Research → Plan → Design Review Gate → Work Unit Decomposition → Orchestrated Execution → Final Review → PR Creation → PR Shepherd → Closure & Learning
- **4-Phase Orchestrated Execution Loop**: Each work unit runs through IMPLEMENT → VALIDATE → ADVERSARIAL REVIEW → COMMIT. The orchestrator validates independently (never trusts subagent self-reports), and adversarial reviewers check DoD compliance with file:line evidence
- **Parallel Design Review Gate**: 5 specialist agents (PM, Architect, Designer, Security, CTO) review in parallel with a 3-iteration cap before human escalation
- **Recursive orchestration**: Swarm Coordinators spawn Issue Orchestrators, which spawn sub-orchestrators for complex epics (swarm of swarms)
- **Git-native task tracking**: Uses [BEADS](https://github.com/steveyegge/beads) (`bd` CLI) for issue/task management, dependencies, and knowledge priming
- **Knowledge base**: JSONL-based fact store for patterns, gotchas, decisions, and anti-patterns — agents prime from this before every task
- **Quality rubrics**: Standardized review criteria for code, architecture, security, testing, planning, and adversarial spec compliance
- **External AI tool delegation**: Optionally delegate implementation and review tasks to OpenAI Codex CLI and Google Gemini CLI for cost savings and cross-model adversarial review
- **Visual review**: Playwright-based screenshot capture for reviewing web UIs, presentations, and rendered pages
- **PR lifecycle automation**: Autonomous CI monitoring, review comment handling, and thread resolution
- **Workflow enforcement**: Mandatory quality gate intercepts at every handoff point — agents cannot skip design review, plan review, or knowledge capture
- **Context recovery**: Approved plans and execution state persist to disk via BEADS, surviving context compaction and session interruption

## Architecture

[https://github.com/dsifry/metaswarm#architecture](https://github.com/dsifry/metaswarm#architecture)

```
Your prompt (spec with DoD items) or GitHub Issue
        │
        ▼
┌─────────────────────────────────┐
│  Swarm Coordinator               │
│  - Assign to worktree            │
│  - Spawn Issue Orchestrator      │
└─────────────────────────────────┘
        │
        ▼
┌─────────────────────────────────┐
│  Issue Orchestrator              │
│  - Create BEADS epic             │
│  - Decompose into work units     │
└─────────────────────────────────┘
        │
        ▼
  Research → Plan → Design Review Gate (5 parallel reviewers)
        │
        ▼
  Work Unit Decomposition (DoD items, file scopes, dependency graph)
        │
        ▼
  Orchestrated Execution Loop (per work unit):
    IMPLEMENT → VALIDATE → ADVERSARIAL REVIEW → COMMIT
    (Optionally delegates IMPLEMENT to Codex/Gemini CLI)
    (Cross-model REVIEW: writer always reviewed by different model)
        │
        ▼
  Final Comprehensive Review (cross-unit integration)
        │
        ▼
  PR Creation → PR Shepherd (auto-monitors to merge)
        │
        ▼
  Closure → Knowledge Extraction (feedback loop)
```

## Repository Structure

[https://github.com/dsifry/metaswarm#repository-structure](https://github.com/dsifry/metaswarm#repository-structure)

```
metaswarm/
├── .claude-plugin/
│   └── plugin.json           # Claude Code plugin manifest
├── gemini-extension.json      # Gemini CLI extension manifest
├── .codex/
│   ├── install.sh            # Codex CLI install script
│   └── README.md             # Codex CLI usage guide
├── hooks/
│   ├── hooks.json            # SessionStart + PreCompact hook definitions
│   └── session-start.sh      # Context priming (platform-aware)
├── skills/                   # Orchestration skills (Agent Skills standard — portable)
│   ├── start/                # Main entry point — workflow guide + 18 agent personas
│   ├── orchestrated-execution/ # 4-phase execution loop (IMPLEMENT→VALIDATE→REVIEW→COMMIT)
│   ├── design-review-gate/   # Parallel 5-agent review
│   ├── plan-review-gate/     # 3-reviewer adversarial plan review
│   ├── setup/                # Interactive project setup
│   ├── migrate/              # Migration from npm to plugin installation
│   ├── status/               # Diagnostic checks
│   ├── pr-shepherd/          # PR lifecycle automation
│   ├── handling-pr-comments/ # Review comment workflow
│   ├── brainstorming-extension/
│   ├── create-issue/
│   ├── external-tools/       # Cross-model AI delegation (Codex, Gemini CLI)
│   └── visual-review/        # Playwright-based screenshot review
├── commands/                  # Slash commands
│   ├── *.md                  # Claude Code commands (15 files)
│   └── metaswarm/*.toml      # Gemini CLI commands (12 files)
├── agents/                    # 18 agent persona definitions
├── rubrics/                   # Quality review standards
├── guides/                    # Development patterns
├── knowledge/                 # Knowledge base schema + templates
├── templates/                 # Setup templates (CLAUDE.md, AGENTS.md, GEMINI.md + append variants)
├── lib/                       # Platform detection, sync, setup scripts
├── cli/                       # Cross-platform installer (npx metaswarm)
├── CLAUDE.md                  # Claude Code project instructions
├── AGENTS.md                  # Codex CLI project instructions
├── GEMINI.md                  # Gemini CLI extension context
├── INSTALL.md
├── GETTING_STARTED.md
├── USAGE.md
└── CONTRIBUTING.md
```

## Install

[https://github.com/dsifry/metaswarm#install](https://github.com/dsifry/metaswarm#install)

### Claude Code (recommended)

[https://github.com/dsifry/metaswarm#claude-code-recommended](https://github.com/dsifry/metaswarm#claude-code-recommended)

```
claude plugin marketplace add dsifry/metaswarm-marketplace
claude plugin install metaswarm
```

Then run `/setup` in Claude Code.

### Gemini CLI

[https://github.com/dsifry/metaswarm#gemini-cli](https://github.com/dsifry/metaswarm#gemini-cli)

```
gemini extensions install https://github.com/dsifry/metaswarm.git
```

Then run `/metaswarm:setup` in your project.

### Codex CLI

[https://github.com/dsifry/metaswarm#codex-cli](https://github.com/dsifry/metaswarm#codex-cli)

```
codex plugin marketplace add dsifry/metaswarm-marketplace
codex
# Open /plugins, select the metaswarm marketplace, and install metaswarm.
```

Then run `$setup` in your project.

### Cross-platform installer

[https://github.com/dsifry/metaswarm#cross-platform-installer](https://github.com/dsifry/metaswarm#cross-platform-installer)

Detect installed CLIs and install metaswarm for all of them:

```
npx metaswarm init
```

### Start building

[https://github.com/dsifry/metaswarm#start-building](https://github.com/dsifry/metaswarm#start-building)

Run `/start-task` (Claude/Gemini) or `$start` (Codex) and describe what you want in plain English. No issue required.

```
/start-task Add a webhook system with retry logic, signature verification,
and a delivery log UI.
```

See [INSTALL.md](https://github.com/dsifry/metaswarm/blob/main/INSTALL.md) for prerequisites, platform-specific details, and migration from older versions.

## Self-Learning System

[https://github.com/dsifry/metaswarm#self-learning-system](https://github.com/dsifry/metaswarm#self-learning-system)

metaswarm doesn't just execute — it learns from every session and gets smarter over time.

### Automatic Reflection

[https://github.com/dsifry/metaswarm#automatic-reflection](https://github.com/dsifry/metaswarm#automatic-reflection)

After every PR merge, the self-reflect workflow (`/self-reflect`) analyzes what happened:

- **Code review feedback** — Extracts patterns, gotchas, and anti-patterns from reviewer comments (both human and automated) and writes them back to the knowledge base as structured JSONL entries
- **Build and test failures** — Captures what broke and why, so agents avoid the same mistakes in future tasks
- **Architectural decisions** — Records the rationale behind choices so future agents understand the "why", not just the "what"

### Conversation Introspection

[https://github.com/dsifry/metaswarm#conversation-introspection](https://github.com/dsifry/metaswarm#conversation-introspection)

The reflection system also introspects into the Claude Code session itself, looking for:

- **User repetition** — When a user corrects the same behavior multiple times or repeats instructions, this signals an opportunity for a new skill or command. The system flags these as candidates for automation.
- **User disagreements** — When a user rejects or overrides Claude's recommendation, the system captures the user's preferred approach as a knowledge base entry, so agents align with the user's intent in future sessions.
- **Friction points** — Repeated manual steps that could be codified into reusable workflows.

These signals feed back into the knowledge base and can generate proposals for new skills, updated rubrics, or revised agent behaviors.

### Selective Knowledge Priming

[https://github.com/dsifry/metaswarm#selective-knowledge-priming](https://github.com/dsifry/metaswarm#selective-knowledge-priming)

The knowledge base grows continuously, but agents don't load all of it. The `bd prime` command uses **selective retrieval** — filtering by affected files, keywords, and work type to load only the relevant subset:

```
# Only loads knowledge relevant to auth files and implementation work
bd prime --files "src/api/auth/**" --keywords "authentication" --work-type implementation
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

