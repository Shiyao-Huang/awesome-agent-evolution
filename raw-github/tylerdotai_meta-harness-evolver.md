---
repo: tylerdotai/meta-harness-evolver
url: https://github.com/tylerdotai/meta-harness-evolver
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - tylerdotai/meta-harness-evolver: Meta-Harness: End-to-End Optimization of LLM Harnesses — OpenClaw Agent Evolution System · GitHub

**Source**: https://github.com/tylerdotai/meta-harness-evolver

---

[Skip to content](https://github.com/tylerdotai/meta-harness-evolver#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[tylerdotai](https://github.com/tylerdotai)

/
**[meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver)**

Public

- [Notifications](https://github.com/login?return_to=%2Ftylerdotai%2Fmeta-harness-evolver)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2Ftylerdotai%2Fmeta-harness-evolver)
- 
[Star
          14](https://github.com/login?return_to=%2Ftylerdotai%2Fmeta-harness-evolver)

[https://github.com/tylerdotai/meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver)

[Branches](https://github.com/tylerdotai/meta-harness-evolver/branches)[Tags](https://github.com/tylerdotai/meta-harness-evolver/tags)

[https://github.com/tylerdotai/meta-harness-evolver/branches](https://github.com/tylerdotai/meta-harness-evolver/branches)[https://github.com/tylerdotai/meta-harness-evolver/tags](https://github.com/tylerdotai/meta-harness-evolver/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| references | references |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SKILL.md | SKILL.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# ⚡ Meta-Harness Evolver

[https://github.com/tylerdotai/meta-harness-evolver#-meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver#-meta-harness-evolver)

**An OpenClaw agent skill that implements the Meta-Harness paper for autonomous self-improvement.**

> *"The harness around a fixed LLM can produce a 6× performance gap on the same benchmark."* — [Meta-Harness Paper](https://yoonholee.com/meta-harness/)

This skill runs a nightly outer-loop optimization for Hoss (or any OpenClaw agent) — reading prior execution traces, proposing targeted harness modifications, evaluating against a benchmark, and iterating.

---

## What Is This?

[https://github.com/tylerdotai/meta-harness-evolver#what-is-this](https://github.com/tylerdotai/meta-harness-evolver#what-is-this)

Meta-Harness is an outer-loop system that searches over **harness code** — the configuration files that wrap an LLM (prompts, context management, memory, tools). Unlike text optimizers that compress feedback to scalar scores, Meta-Harness gives a coding agent **full filesystem access** to all prior candidates' source, scores, and execution traces.

**Key insight:** The richest signal isn't a score — it's the **execution trace**. The proposer reads what actually happened, traces failures to root causes, and proposes targeted edits.

---

## How It Works

[https://github.com/tylerdotai/meta-harness-evolver#how-it-works](https://github.com/tylerdotai/meta-harness-evolver#how-it-works)

```
┌─────────────────────────────────────────────────────────┐
│  Proposer Agent ──(filesystem access)──► ~/hoss-evolution/
│         ▲                                           │
│         │                               propose harness
│         │                                           ▼
│         │                               Evaluate on benchmark
│         │                                           ▼
│  log ───┴── store: code + scores + traces ──► candidates/
└─────────────────────────────────────────────────────────┘
```

Each night at 3 AM CDT:

1. **Read** — Proposer reads all prior candidates from the evolution filesystem
2. **Propose** — Identifies failure patterns, proposes 1 targeted harness edit
3. **Validate** — Lightweight syntax/constraint check
4. **Evaluate** — Run benchmark (~20 diverse scenarios)
5. **Log** — Store candidate + scores + proposer reasoning traces
6. **Post** — Summary posted to Discord #research channel

---

## What Can Be Evolved

[https://github.com/tylerdotai/meta-harness-evolver#what-can-be-evolved](https://github.com/tylerdotai/meta-harness-evolver#what-can-be-evolved)

Hoss's "harness" = all configs wrapping the LLM brain:

| File | What It Controls |
|---|---|
| SOUL.md | Core identity, personality, decision-making style |
| IDENTITY.md | Role, voice, tone, signature patterns |
| AGENTS.md | Sub-agent architecture, coordination protocol |
| TOOLS.md | Tool configurations, credentials, key hosts |
| MEMORY.md | Long-term memory structure |
| HEARTBEAT.md | Active hours, check priorities, alert thresholds |

---

## Installation

[https://github.com/tylerdotai/meta-harness-evolver#installation](https://github.com/tylerdotai/meta-harness-evolver#installation)

### Prerequisites

[https://github.com/tylerdotai/meta-harness-evolver#prerequisites](https://github.com/tylerdotai/meta-harness-evolver#prerequisites)

- OpenClaw installed and configured
- Python 3.8+
- `gh` CLI authenticated (`gh auth login`)

### Setup

[https://github.com/tylerdotai/meta-harness-evolver#setup](https://github.com/tylerdotai/meta-harness-evolver#setup)

```
# 1. Install the skill
git clone https://github.com/tylerdotai/meta-harness-evolver.git
cd meta-harness-evolver
openclaw skill install ./meta-harness-evolver

# 2. Create the evolution workspace
mkdir -p ~/hoss-evolution/{candidates,best/current,benchmark/scenarios,proposer/logs}
touch ~/hoss-evolution/evolution_log.jsonl

# 3. Seed iteration 0 (current Hoss configs)
mkdir -p ~/hoss-evolution/candidates/candidate_0/harness
cp ~/.openclaw/workspace/SOUL.md ~/hoss-evolution/candidates/candidate_0/harness/
cp ~/.openclaw/workspace/IDENTITY.md ~/hoss-evolution/candidates/candidate_0/harness/
cp ~/.openclaw/workspace/AGENTS.md ~/hoss-evolution/candidates/candidate_0/harness/
cp ~/.openclaw/workspace/TOOLS.md ~/hoss-evolution/candidates/candidate_0/harness/
cp ~/.openclaw/workspace/HEARTBEAT.md ~/hoss-evolution/candidates/candidate_0/harness/

# 4. Configure cron (3 AM CDT daily)
openclaw cron add \
  --name "meta-harness-evolution" \
  --schedule "0 3 * * *" \
  --timezone "America/Chicago" \
  --command "SKILL=meta-harness-evolver TASK=run_evolution openclaw run"
```

---

## Directory Structure

[https://github.com/tylerdotai/meta-harness-evolver#directory-structure](https://github.com/tylerdotai/meta-harness-evolver#directory-structure)

```
~/hoss-evolution/
├── candidates/              # All evaluated candidates
│   └── candidate_N/
│       ├── harness/          # Proposed config files
│       ├── eval_scores.json # Benchmark scores
│       ├── traces/           # Execution traces
│       └── proposer_reasoning.md
├── best/
│   └── current/              # Best harness found so far
│       ├── harness/
│       └── eval_scores.json
├── benchmark/
│   └── scenarios/            # ~20 diverse eval scenarios
└── evolution_log.jsonl       # Full run history
```

---

## Benchmark

[https://github.com/tylerdotai/meta-harness-evolver#benchmark](https://github.com/tylerdotai/meta-harness-evolver#benchmark)

The default benchmark has **20 scenarios** across 6 categories:

| Category | Weight | Examples |
|---|---|---|
| Memory | 25% | Recall from logs, update MEMORY.md, synthesize across files |
| Code | 25% | Write scripts, debug, security review |
| Research | 20% | Web search + synthesize, fetch and summarize |
| Coordination | 15% | Spawn sub-agents, handle failures |
| Communication | 10% | Draft messages, handle pushback |
| Quality | 5% | Spot broken links, catch inconsistencies |

Each scenario is scored 0-3 (fail / partial / pass / excellent). Final score = weighted average × 100.

---

## The Proposer Agent

[https://github.com/tylerdotai/meta-harness-evolver#the-proposer-agent](https://github.com/tylerdotai/meta-harness-evolver#the-proposer-agent)

The proposer is a **coding-agent sub-agent** that:

- Reads all prior candidates via filesystem ops (grep, cat)
- Identifies patterns in success/failure
- Proposes **1 targeted edit** — not a wholesale rewrite
- Logs its reasoning trace for next iteration

Key constraint: **the skill text is the strongest lever**. Iterating on the proposer's role description had more effect than iteration count or population size.

---

## The Meta-Harness Paper

[https://github.com/tylerdotai/meta-harness-evolver#the-meta-harness-paper](https://github.com/tylerdotai/meta-harness-evolver#the-meta-harness-paper)

> *"Meta-Harness improves over Agentic Context Engineering (ACE) by 7.7 points while using 4× fewer context tokens."*

This skill implements the core ideas from:

**Meta-Harness: End-to-End Optimization of Model Harnesses**
 Yoonho Lee, Roshen Nair, Qizheng Zhang, Omar Khattab, Kangwook Lee, Chelsea Finn
 Stanford / MIT / KRAFTON

- [Paper](https://yoonholee.com/meta-harness/paper.pdf)
- [Project Page](https://yoonholee.com/meta-harness/)
- [Artifact](https://github.com/stanford-iris-lab/meta-harness-tbench2-artifact)

---

## Adapting for Your Agent

[https://github.com/tylerdotai/meta-harness-evolver#adapting-for-your-agent](https://github.com/tylerdotai/meta-harness-evolver#adapting-for-your-agent)

This skill is built for Hoss (an OpenClaw agent), but the framework is agent-agnostic:

1. **Update `references/harness-spec.md`** — define what files constitute YOUR agent's harness
2. **Update benchmark scenarios** — `scripts/evaluate.py` SCENARIOS list — test what matters for your agent
3. **Adjust weights** — if coordination matters more than code for your use case
4. **Update proposer prompt** — `scripts/run_evolution.py` proposer_task — describe your agent's context

---

## Example Discord Output

[https://github.com/tylerdotai/meta-harness-evolver#example-discord-output](https://github.com/tylerdotai/meta-harness-evolver#example-discord-output)

```
⚡ Meta-Harness Evolution — Nightly Report

Candidate: candidate_7
Score: 72.3/100 🔺 +3.1 vs best
Proposer: ✅ Success

What Changed:
  ~ SOUL.md (+12 lines)
  ~ HEARTBEAT.md (+3 lines)

Proposer's Reasoning:
  "candidate_5 and candidate_6 both failed on memory_2
   (updating MEMORY.md). Their HEARTBEAT.md didn't prioritize
   memory health checks. Added memory consistency validation."

Recent History:
  • candidate_6: 69.2
  • candidate_5: 68.1
  • candidate_4: 71.0
```

---

## References

[https://github.com/tylerdotai/meta-harness-evolver#references](https://github.com/tylerdotai/meta-harness-evolver#references)

- [Harness Spec](https://github.com/tylerdotai/meta-harness-evolver/blob/main/references/harness-spec.md) — What files make up an agent's harness
- [Benchmark Design](https://github.com/tylerdotai/meta-harness-evolver/blob/main/references/benchmark-design.md) — How to build/extend the eval suite
- [Evolution Logic](https://github.com/tylerdotai/meta-harness-evolver/blob/main/references/evolution-logic.md) — Algorithm details, Pareto frontier, proposer patterns

---

## Contributing

[https://github.com/tylerdotai/meta-harness-evolver#contributing](https://github.com/tylerdotai/meta-harness-evolver#contributing)

Issues and PRs welcome. If you adapt this for a different agent framework, we'd love to hear about it — open an issue or drop a note in the discussion.

---

## License

[https://github.com/tylerdotai/meta-harness-evolver#license](https://github.com/tylerdotai/meta-harness-evolver#license)

MIT — do what you want with it.

## About

         Meta-Harness: End-to-End Optimization of LLM Harnesses — OpenClaw Agent Evolution System       

### Resources

[Readme](https://github.com/tylerdotai/meta-harness-evolver#readme-ov-file)

### License

[MIT license](https://github.com/tylerdotai/meta-harness-evolver#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/tylerdotai/meta-harness-evolver/activity)

### Stars

[14
        stars](https://github.com/tylerdotai/meta-harness-evolver/stargazers)

### Watchers

[0
        watching](https://github.com/tylerdotai/meta-harness-evolver/watchers)

### Forks

[2
        forks](https://github.com/tylerdotai/meta-harness-evolver/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Ftylerdotai%2Fmeta-harness-evolver&report=tylerdotai+%28user%29)

## [Releases](https://github.com/tylerdotai/meta-harness-evolver/releases)

No releases published

## [Packages
      0](https://github.com/users/tylerdotai/packages?repo_name=meta-harness-evolver)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/tylerdotai/meta-harness-evolver/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.4%](https://github.com/tylerdotai/meta-harness-evolver/search?l=python)
- [Shell
          2.6%](https://github.com/tylerdotai/meta-harness-evolver/search?l=shell)

     You can’t perform that action at this time.
