---
repo: shintaro-sprech/agent-orchestrator-template
url: https://github.com/shintaro-sprech/agent-orchestrator-template
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - shintaro-sprech/agent-orchestrator-template: A self-evolving subagent system for Claude Code · GitHub

**Source**: https://github.com/shintaro-sprech/agent-orchestrator-template

---

[Skip to content](https://github.com/shintaro-sprech/agent-orchestrator-template#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[shintaro-sprech](https://github.com/shintaro-sprech)

/
**[agent-orchestrator-template](https://github.com/shintaro-sprech/agent-orchestrator-template)**

Public

- [Notifications](https://github.com/login?return_to=%2Fshintaro-sprech%2Fagent-orchestrator-template)You must be signed in to change notification settings
- [Fork
    20](https://github.com/login?return_to=%2Fshintaro-sprech%2Fagent-orchestrator-template)
- 
[Star
          120](https://github.com/login?return_to=%2Fshintaro-sprech%2Fagent-orchestrator-template)

[https://github.com/shintaro-sprech/agent-orchestrator-template](https://github.com/shintaro-sprech/agent-orchestrator-template)

[Branches](https://github.com/shintaro-sprech/agent-orchestrator-template/branches)[Tags](https://github.com/shintaro-sprech/agent-orchestrator-template/tags)

[https://github.com/shintaro-sprech/agent-orchestrator-template/branches](https://github.com/shintaro-sprech/agent-orchestrator-template/branches)[https://github.com/shintaro-sprech/agent-orchestrator-template/tags](https://github.com/shintaro-sprech/agent-orchestrator-template/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History9 Commits9 Commits |  |  |  |
| .claude | .claude |  |  |
| docs | docs |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Autonomous Orchestration Ecosystem

[https://github.com/shintaro-sprech/agent-orchestrator-template#autonomous-orchestration-ecosystem](https://github.com/shintaro-sprech/agent-orchestrator-template#autonomous-orchestration-ecosystem)

A self-evolving sub-agent management system for Claude Code. Instead of using pre-defined abstract agents, let the orchestrator dynamically create, integrate, and evolve agents based on actual task requirements.

> **Original concept by [@shintaro_sprech](https://x.com/shintaro_sprech)**

[https://github.com/shintaro-sprech/agent-orchestrator-template/blob/main/docs/images/orchestration-flow.jpg](https://github.com/shintaro-sprech/agent-orchestrator-template/blob/main/docs/images/orchestration-flow.jpg)

## Concept

[https://github.com/shintaro-sprech/agent-orchestrator-template#concept](https://github.com/shintaro-sprech/agent-orchestrator-template#concept)

The system implements an **Infinite Evolution Cycle**:

```
Implementation → Initial Sub-agent Pool → Orchestrator Engine
                                              ↓
                                    Specialized Sub-agents
                                              ↓
                                    1st Gen Integration
                                              ↓
                                    2nd Gen Integration
                                              ↓
                                    Hyper-Elite Integration
                                              ↓
                                    Ultimate Elite Integration
                                              ↓
                                    Hyper-Elite Integrated Entity
                                              ↓
                                    ← Infinite Evolution Cycle →
```

## Key Features

[https://github.com/shintaro-sprech/agent-orchestrator-template#key-features](https://github.com/shintaro-sprech/agent-orchestrator-template#key-features)

- **Task-driven agent creation**: Agents are born from real task requirements, not abstract definitions
- **Dynamic integration**: Merges agents when synergy improves outcomes
- **Continuous evolution**: Strong agents evolve through generations, weak ones fade
- **Elite promotion**: High-performing agents are promoted to elite status
- **Lineage tracking**: Integrated agents remember their parents, enabling evolution chains

## Usage: Slash Command

[https://github.com/shintaro-sprech/agent-orchestrator-template#usage-slash-command](https://github.com/shintaro-sprech/agent-orchestrator-template#usage-slash-command)

**Use the `/task` slash command to activate the orchestration system.**

```
/task Create a REST API endpoint for user authentication
```

This command triggers the full orchestration workflow:

1. Reads `orchestrator.md`
2. Scans `pool/` for existing agents
3. Calculates coverage against task requirements
4. Creates/integrates/selects the optimal agent
5. Executes the task
6. Updates metrics in `manifests/`
7. Promotes high-performers to `elite/`

### Why Slash Command?

[https://github.com/shintaro-sprech/agent-orchestrator-template#why-slash-command](https://github.com/shintaro-sprech/agent-orchestrator-template#why-slash-command)

Without the slash command, the orchestration system will **not automatically activate**. The `/task` command ensures:

- Orchestrator logic is always read first
- Agent pool is scanned before execution
- Metrics are updated after completion
- Evolution cycle continues

## How It Works

[https://github.com/shintaro-sprech/agent-orchestrator-template#how-it-works](https://github.com/shintaro-sprech/agent-orchestrator-template#how-it-works)

### 1. Task Analysis

[https://github.com/shintaro-sprech/agent-orchestrator-template#1-task-analysis](https://github.com/shintaro-sprech/agent-orchestrator-template#1-task-analysis)

When `/task` is invoked, the orchestrator:

- Scans the existing agent pool
- Calculates coverage rate against task requirements

### 2. Decision Matrix

[https://github.com/shintaro-sprech/agent-orchestrator-template#2-decision-matrix](https://github.com/shintaro-sprech/agent-orchestrator-template#2-decision-matrix)

| Coverage Rate | Action |
|---|---|
| 90%+ | Use existing agent directly |
| 60-90% | Create integrated agent from multiple sources |
| Below 60% | Create new specialized agent |

### 3. Evolution Tracking

[https://github.com/shintaro-sprech/agent-orchestrator-template#3-evolution-tracking](https://github.com/shintaro-sprech/agent-orchestrator-template#3-evolution-tracking)

After task completion:

- Update agent metrics (usage_count, success_rate)
- Promote high-performers to elite status

## Directory Structure

[https://github.com/shintaro-sprech/agent-orchestrator-template#directory-structure](https://github.com/shintaro-sprech/agent-orchestrator-template#directory-structure)

```
your-project/
├── .claude/
│   ├── settings.json          # Hooks for orchestration
│   ├── commands/
│   │   └── task.md            # Slash command definition
│   └── agents/
│       ├── orchestrator.md    # Orchestrator definition
│       ├── _template.md       # New agent template
│       ├── manifests/         # Skill sheets (metadata + metrics)
│       │   └── {agent}.yaml
│       └── pool/              # Agent pool
│           ├── specialized/   # Task-specific agents
│           ├── integrated/    # Merged agents (1st/2nd Gen)
│           └── elite/         # Hyper-Elite agents
└── CLAUDE.md                  # Orchestration rules
```

## Quick Start

[https://github.com/shintaro-sprech/agent-orchestrator-template#quick-start](https://github.com/shintaro-sprech/agent-orchestrator-template#quick-start)

### 1. Copy files

[https://github.com/shintaro-sprech/agent-orchestrator-template#1-copy-files](https://github.com/shintaro-sprech/agent-orchestrator-template#1-copy-files)

```
cp -r .claude /path/to/your/project/

# Windows (PowerShell)
Copy-Item -Recurse .claude C:\path\to\your\project\
```

### 2. Add to CLAUDE.md

[https://github.com/shintaro-sprech/agent-orchestrator-template#2-add-to-claudemd](https://github.com/shintaro-sprech/agent-orchestrator-template#2-add-to-claudemd)

Add the content from `CLAUDE.md` to your project's CLAUDE.md:

```
## Agent Orchestration

**Must**: Use `/task` command to execute tasks through the orchestrator.

### Core Principle

**Do NOT use pre-defined abstract agents.** Instead:
1. Create specialized agents from actual task requirements
2. Integrate existing agents when synergy improves outcomes
3. Let the agent pool evolve through continuous improvement
```

### 3. Start using with `/task`

[https://github.com/shintaro-sprech/agent-orchestrator-template#3-start-using-with-task](https://github.com/shintaro-sprech/agent-orchestrator-template#3-start-using-with-task)

```
/task Create a REST API endpoint for user authentication
```

The orchestrator will:

1. Scan `pool/` - find no existing agents
2. Coverage: 0% → Create new specialized agent
3. Save to `pool/specialized/auth-api-specialist.md`
4. Create skill sheet `manifests/auth-api-specialist.yaml`
5. Execute task with the new agent

## Example Evolution

[https://github.com/shintaro-sprech/agent-orchestrator-template#example-evolution](https://github.com/shintaro-sprech/agent-orchestrator-template#example-evolution)

**First task**:

```
/task Create a REST API endpoint for user authentication

Orchestrator: No existing agents → Create specialized agent
→ Saved: pool/specialized/auth-api-specialist.md
→ Created: manifests/auth-api-specialist.yaml
```

**Second task**:

```
/task Add database validation to the auth API

Orchestrator: auth-api-specialist (70%) + need DB skills
→ Create integrated agent
→ Saved: pool/integrated/merged-auth-db.md
→ Created: manifests/merged-auth-db.yaml (parent_agents: [auth-api-specialist])
```

**After 5+ successful tasks with 80%+ success rate**:

```
Orchestrator: merged-auth-db qualifies for elite
→ Moved: pool/integrated/merged-auth-db.md → pool/elite/merged-auth-db.md
→ Updated: manifests/merged-auth-db.yaml (tier: elite)
```

## Documentation

[https://github.com/shintaro-sprech/agent-orchestrator-template#documentation](https://github.com/shintaro-sprech/agent-orchestrator-template#documentation)

- [Concept Details](https://github.com/shintaro-sprech/agent-orchestrator-template/blob/main/docs/concept.md) - Design philosophy and evolution mechanics
- [Quick Start](https://github.com/shintaro-sprech/agent-orchestrator-template/blob/main/docs/quickstart.md) - Setup instructions
- [Advanced](https://github.com/shintaro-sprech/agent-orchestrator-template/blob/main/docs/advanced.md) - Customization and team operations

## License

[https://github.com/shintaro-sprech/agent-orchestrator-template#license](https://github.com/shintaro-sprech/agent-orchestrator-template#license)

MIT License

## Author

[https://github.com/shintaro-sprech/agent-orchestrator-template#author](https://github.com/shintaro-sprech/agent-orchestrator-template#author)

Original concept by [@shintaro_sprech](https://x.com/shintaro_sprech)

## About

         A self-evolving subagent system for Claude Code       

### Resources

[Readme](https://github.com/shintaro-sprech/agent-orchestrator-template#readme-ov-file)

### License

[MIT license](https://github.com/shintaro-sprech/agent-orchestrator-template#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

