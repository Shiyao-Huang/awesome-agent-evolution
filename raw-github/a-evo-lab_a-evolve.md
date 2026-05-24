---
repo: a-evo-lab/a-evolve
url: https://github.com/a-evo-lab/a-evolve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - A-EVO-Lab/a-evolve: The official repository of "Position: Agentic Evolution is the Path to Evolving LLMs". · GitHub

**Source**: https://github.com/a-evo-lab/a-evolve

---

[Skip to content](https://github.com/a-evo-lab/a-evolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[A-EVO-Lab](https://github.com/A-EVO-Lab)

/
**[a-evolve](https://github.com/A-EVO-Lab/a-evolve)**

Public

- [Notifications](https://github.com/login?return_to=%2FA-EVO-Lab%2Fa-evolve)You must be signed in to change notification settings
- [Fork
    66](https://github.com/login?return_to=%2FA-EVO-Lab%2Fa-evolve)
- 
[Star
          549](https://github.com/login?return_to=%2FA-EVO-Lab%2Fa-evolve)

[https://github.com/A-EVO-Lab/a-evolve](https://github.com/A-EVO-Lab/a-evolve)

[Branches](https://github.com/A-EVO-Lab/a-evolve/branches)[Tags](https://github.com/A-EVO-Lab/a-evolve/tags)

[https://github.com/A-EVO-Lab/a-evolve/branches](https://github.com/A-EVO-Lab/a-evolve/branches)[https://github.com/A-EVO-Lab/a-evolve/tags](https://github.com/A-EVO-Lab/a-evolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History61 Commits61 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| agent_evolve | agent_evolve |  |  |
| artifacts | artifacts |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| figs | figs |  |  |
| seed_workspaces | seed_workspaces |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| DESIGN.md | DESIGN.md |  |  |
| Makefile | Makefile |  |  |
| QUICKSTART.md | QUICKSTART.md |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# A-Evolve 🧬: The Universal Infrastructure for Self-Improving Agents

[https://github.com/a-evo-lab/a-evolve#a-evolve--the-universal-infrastructure-for-self-improving-agents](https://github.com/a-evo-lab/a-evolve#a-evolve--the-universal-infrastructure-for-self-improving-agents)

[https://github.com/A-EVO-Lab/a-evolve](https://github.com/A-EVO-Lab/a-evolve)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://arxiv.org/abs/2602.00359](https://arxiv.org/abs/2602.00359)

> **The PyTorch for Agentic AI.** A-Evolve is an open-source infrastructure that evolves *any* agent, across *any* domain, using *any* evolution algorithm — with zero human intervention.

[Quick Start](https://github.com/a-evo-lab/a-evolve#quick-start) | [News](https://github.com/a-evo-lab/a-evolve#news) | [Benchmark Highlights](https://github.com/a-evo-lab/a-evolve#benchmark-highlights) | [Architecture & Design](https://github.com/a-evo-lab/a-evolve#architecture--design) | [Contribution](https://github.com/a-evo-lab/a-evolve#community--contributing)

[https://github.com/A-EVO-Lab/a-evolve/blob/main/figs/teaser.png](https://github.com/A-EVO-Lab/a-evolve/blob/main/figs/teaser.png)

---

## What Does A-Evolve Do?

[https://github.com/a-evo-lab/a-evolve#what-does-a-evolve-do](https://github.com/a-evo-lab/a-evolve#what-does-a-evolve-do)

You provide a Base Agent. A-Evolve returns a SOTA Agent. **3 lines of code. 0 hours of manual harness engineering.** One infra, any domain, any evolution algorithm.

```
import agent_evolve as ae

evolver = ae.Evolver(agent="./my_agent", benchmark="swe-verified")
results = evolver.run(cycles=10)
```

### Benchmark Highlights

[https://github.com/a-evo-lab/a-evolve#benchmark-highlights](https://github.com/a-evo-lab/a-evolve#benchmark-highlights)

By applying our open-source **reference evolution algorithms** to a base Claude Opus-4.6 model with **zero manual harness engineering**, A-Evolve pushed agents into top-tier performance across four diverse benchmarks:

| 🟢 MCP-Atlas

🥇 #1
Baseline → 79.4% (+3.4pp) | 🔵 SWE-bench Verified

~#5
Baseline → 76.8% (+2.6pp) | 🟣 Terminal-Bench 2.0

~#7
Baseline → 76.5% (+13.0pp) | 🟡 SkillsBench

#2
Baseline → 34.9% (+15.2pp) |
|---|---|---|---|
| 🟢 ARC-AGI 

🥇 #2 Community LeaderBoard 
Baseline → 12.3%  (+2.2pp) | 🔵 OSWorld 

 -- 
Baseline → 69.6% (+3.9pp) | 🟣 CL Bench 

 To Be Announced  
To Be Announced | 🟡 WebArena-infinity 

 To Be Announced  
To Be Announced |

[https://github.com/A-EVO-Lab/a-evolve/blob/main/figs/a_evolve_benchmarks.png](https://github.com/A-EVO-Lab/a-evolve/blob/main/figs/a_evolve_benchmarks.png)

> *All results achieved with a single Claude Opus-4.6 base model, evolved using A-Evolve's sample algorithms. 0 hours of human harness engineering. Data checked March 2026.*

### News

[https://github.com/a-evo-lab/a-evolve#news](https://github.com/a-evo-lab/a-evolve#news)

- **05/04****New Benchmark Results**, A-Evolve added [results](https://x.com/HenryL_AI/status/2051711038618480816?s=20) on ARC-AGI-3, evolving a multi-agent system to be more powerful on solving difficult tasks like [ARC-AGI-3](https://arcprize.org/arc-agi/3). Improving performance from 10% to 12%.
- **04/20****New Algorithm Drop**, A-Evolve added new evolutionary algorithm [GEPA](https://x.com/HenryL_AI/status/2046326722912739713?s=20), submitted by the [GEPA](https://gepa-ai.github.io/gepa/blog/) team.
- **04/10****Integration**, A-Evolve is officially integrated into [Orch-Research Skills Library](https://x.com/HenryL_AI/status/2042688465855488476), along with others including AutoResearch, OpenRLHF, DeepSpeed, SGLang
- **04/07****New Agent Drop**, We added recently leaked public ClawCode (Claude Code), took the evolution harness + skills we learned on Terminal-Bench 2.0 (TB2) and directly transplanted them onto the ClawCode. [Result](https://x.com/HenryL_AI/status/2041621538580132280) on TB2: baseline **67.8%** → **72.9%** (+5.1pp uplift)
- **04/03****New Algorithm Drop**, A-Evolve added new evolutionary algorithm [Meta-Harness](https://x.com/HenryL_AI/status/2040218374458974715)
- **03/30****Integration**, A-Evolve is officially integrated into [AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw)
- **03/25** 🚀 **Open-source A-Evolve**, the universal infrastructure for developing and testing evolving algorithms.
- **03/25** 📊 **Open-source 4 evolving algorithms** developed with A-Evolve, achieving SOTA **(#1, ~#5, ~#7, #2)** on MCP-Atlas, SWE-bench Verified, Terminal-Bench 2.0, and SkillsBench.
- **02/17** 📄 Release the official implementation of [Position: Agentic Evolution is the Path to Evolving LLMs](https://arxiv.org/abs/2602.00359) (arXiv 2602.00359).

We are evolving fast! Support our research by leaving a ⭐.

### What Does an Evolved Agent Look Like?

[https://github.com/a-evo-lab/a-evolve#what-does-an-evolved-agent-look-like](https://github.com/a-evo-lab/a-evolve#what-does-an-evolved-agent-look-like)

A-Evolve mutates real files in the workspace. Here's a before/after from our MCP-Atlas evolution:

| Before (Seed Workspace) | After (Evolved — 79.4% on MCP-Atlas) |
|---|---|
| mcp_agent/
├── manifest.yaml
├── prompts/system.md      ← 20 lines, generic
├── skills/                ← empty
└── memory/                ← empty | mcp_agent/
├── manifest.yaml
├── prompts/system.md      ← 20 lines, unchanged
├── skills/
│   ├── entity-verification/SKILL.md   ← NEW
│   ├── search-iteration/SKILL.md      ← NEW
│   ├── multi-requirement/SKILL.md     ← NEW
│   ├── code-execution/SKILL.md        ← NEW
│   └── conditional-handler/SKILL.md   ← NEW
└── memory/
    └── episodic.jsonl     ← 6 entries |

5 targeted skills outperformed 10 generic ones. Every mutation is git-tagged (`evo-1`, `evo-2`, …) for full reproducibility.

---

## Quick Start

[https://github.com/a-evo-lab/a-evolve#quick-start](https://github.com/a-evo-lab/a-evolve#quick-start)

### 1. Install

[https://github.com/a-evo-lab/a-evolve#1-install](https://github.com/a-evo-lab/a-evolve#1-install)

```
# PyPI (recommended)
pip install a-evolve              # core
pip install a-evolve[anthropic]   # Claude support
pip install a-evolve[mcp]         # MCP-Atlas benchmark
pip install a-evolve[swe]         # SWE-bench benchmark
pip install a-evolve[all]         # everything

# From source (for development)
git clone https://github.com/A-EVO-Lab/a-evolve.git && cd a-evolve
pip install -e ".[all,dev]"
```

### 2. Evolve — 3 Lines of Code

[https://github.com/a-evo-lab/a-evolve#2-evolve--3-lines-of-code](https://github.com/a-evo-lab/a-evolve#2-evolve--3-lines-of-code)

```
import agent_evolve as ae

evolver = ae.Evolver(
    agent="swe-verified",           # built-in seed workspace (or path to yours)
    benchmark="swe-verified",       # built-in benchmark adapter
)
results = evolver.run(cycles=10)

print(f"Final score: {results.final_score:.3f}")
print(f"Converged:   {results.converged}")
```

A-Evolve ships with built-in seed workspaces (`swe`, `mcp`, `terminal`, `skillbench`) and benchmark adapters (`swe-verified`, `mcp-atlas`, `terminal-bench 2.0`, `skill-bench`). Point `agent=` at any of them — or at your own workspace directory.

### 3. Bring Your Own Agent (BYOA)

[https://github.com/a-evo-lab/a-evolve#3-bring-your-own-agent-byoa](https://github.com/a-evo-lab/a-evolve#3-bring-your-own-agent-byoa)

To make any agent evolvable, implement one method — `solve()`:

```
from agent_evolve.protocol.base_agent import BaseAgent
from agent_evolve.types import Task, Trajectory

class MyAgent(BaseAgent):
    def solve(self, task: Task) -> Trajectory:
        return Trajectory(task_id=task.id, output="result")
```

Then evolve it:

```
evolver = ae.Evolver(agent=MyAgent("./my_workspace"), benchmark="mcp-atlas")
results = evolver.run(cycles=10)
```

Your agent's evolvable state (prompts, skills, memory) lives as a standard directory — the [Agent Workspace](https://github.com/a-evo-lab/a-evolve#the-agent-workspace-a-file-system-contract). A-Evolve mutates these files; your agent reloads. See [Architecture & Design](https://github.com/a-evo-lab/a-evolve#architecture--design) for the full picture.

For benchmark-specific walkthroughs, see [SWE-bench Demo Guide](https://github.com/A-EVO-Lab/a-evolve/blob/main/docs/swe-bench-demo.md), [MCP-Atlas Demo Guide](https://github.com/A-EVO-Lab/a-evolve/blob/main/docs/mcp-atlas-demo.md), and [SkillBench Setup Guide](https://github.com/A-EVO-Lab/a-evolve/blob/main/docs/skillbench-setup.md).

---

## Architecture & Design

[https://github.com/a-evo-lab/a-evolve#architecture--design](https://github.com/a-evo-lab/a-evolve#architecture--design)

[https://github.com/A-EVO-Lab/a-evolve/blob/main/figs/A-EVOLVE-FRAMEWORK.png](https://github.com/A-EVO-Lab/a-evolve/blob/main/figs/A-EVOLVE-FRAMEWORK.png)

### The Agent Workspace: A File System Contract

[https://github.com/a-evo-lab/a-evolve#the-agent-workspace-a-file-system-contract](https://github.com/a-evo-lab/a-evolve#the-agent-workspace-a-file-system-contract)

A-Evolve's core insight: **all evolvable agent state lives on the file system as a standard directory structure.** This lets the evolution engine mutate any agent via LLM-driven file operations — without knowing the agent's internals.

```
my_agent/
├── manifest.yaml          # identity, entrypoint, evolvable layers
├── prompts/system.md      # system prompt
├── skills/                # SKILL.md files (dynamic skill library)
├── tools/                 # tool configurations
└── memory/                # episodic + semantic memory (JSONL)
```

The evolution engine reads these files, analyzes performance logs, and writes mutations back. The agent reloads. That's the entire contract.

### The Evolution Loop

[https://github.com/a-evo-lab/a-evolve#the-evolution-loop](https://github.com/a-evo-lab/a-evolve#the-evolution-loop)

Every cycle follows five phases:

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌──────┐    ┌────────┐
│  Solve  │───▶│ Observe │───▶│ Evolve  │───▶│ Gate │───▶│ Reload │
└─────────┘    └─────────┘    └─────────┘    └──────┘    └────────┘
```

1. **Solve** — Agent processes a batch of tasks (black-box execution).
2. **Observe** — Collect trajectories + benchmark feedback into structured logs.
3. **Evolve** — Evolution engine analyzes observations and mutates workspace files (prompts, skills, memory).
4. **Gate** — Validate mutations on holdout tasks. Regressed mutations are rolled back via git.
5. **Reload** — Agent reloads from the (possibly rolled-back) workspace.

The loop converges when EGL (Evolutionary Generality Loss) stabilizes or `max_cycles` is reached. Every accepted mutation is git-tagged (`evo-1`, `evo-2`, …), providing a full audit trail.

### Built-in Adapters

[https://github.com/a-evo-lab/a-evolve#built-in-adapters](https://github.com/a-evo-lab/a-evolve#built-in-adapters)

A-Evolve ships with ready-to-use benchmark adapters and seed workspaces:

| Adapter | Domain | Seed Workspace | Best Result |
|---|---|---|---|
| swe-verified | Real-world GitHub issues (Python repos) | seed_workspaces/swe/ | 76.8% (~#5) |
| mcp-atlas | Tool-calling via MCP (16+ servers) | seed_workspaces/mcp/ | 79.4% (🥇 #1) |
| terminal-bench | Terminal/CLI ops in Docker | seed_workspaces/terminal/ | 76.5% (~#7) |
| skill-bench | Agentic skill discovery | seed_workspaces/skillbench/ | 34.9% (~#2) |
| cl-bench | Continual-learning rubric evaluation | — | 38.0% |

### Pluggability: Bring Your Own Everything

[https://github.com/a-evo-lab/a-evolve#pluggability-bring-your-own-everything](https://github.com/a-evo-lab/a-evolve#pluggability-bring-your-own-everything)
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

