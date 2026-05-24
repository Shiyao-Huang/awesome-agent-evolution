---
repo: sethkarten/continual-harness
url: https://github.com/sethkarten/continual-harness
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - sethkarten/continual-harness: Official repository of the paper: Continual Harness: Online Adaptation for Self-Improving Foundation Agents and PokeAgent Speedrun Track 2 · GitHub

**Source**: https://github.com/sethkarten/continual-harness

---

[Skip to content](https://github.com/sethkarten/continual-harness#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[sethkarten](https://github.com/sethkarten)

/
**[continual-harness](https://github.com/sethkarten/continual-harness)**

Public

- [Notifications](https://github.com/login?return_to=%2Fsethkarten%2Fcontinual-harness)You must be signed in to change notification settings
- [Fork
    36](https://github.com/login?return_to=%2Fsethkarten%2Fcontinual-harness)
- 
[Star
          106](https://github.com/login?return_to=%2Fsethkarten%2Fcontinual-harness)

[https://github.com/sethkarten/continual-harness](https://github.com/sethkarten/continual-harness)

[Branches](https://github.com/sethkarten/continual-harness/branches)[Tags](https://github.com/sethkarten/continual-harness/tags)

[https://github.com/sethkarten/continual-harness/branches](https://github.com/sethkarten/continual-harness/branches)[https://github.com/sethkarten/continual-harness/tags](https://github.com/sethkarten/continual-harness/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History953 Commits953 Commits |  |  |  |
| .devcontainer | .devcontainer |  |  |
| Emerald-GBAdvance | Emerald-GBAdvance |  |  |
| PokemonRed-GBC | PokemonRed-GBC |  |  |
| System-Design | System-Design |  |  |
| agents | agents |  |  |
| docs | docs |  |  |
| pokemon_env | pokemon_env |  |  |
| pokemon_red_env | pokemon_red_env |  |  |
| scripts | scripts |  |  |
| server | server |  |  |
| tests | tests |  |  |
| utils | utils |  |  |
| .gitignore | .gitignore |  |  |
| .python-version | .python-version |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| layout.png | layout.png |  |  |
| pokeagent_architecture.png | pokeagent_architecture.png |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pytest.ini | pytest.ini |  |  |
| requirements.txt | requirements.txt |  |  |
| run.py | run.py |  |  |
| run_cli.py | run_cli.py |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# Continual Harness: Online Adaptation for Self-Improving Foundation Agents

[https://github.com/sethkarten/continual-harness#continual-harness-online-adaptation-for-self-improving-foundation-agents](https://github.com/sethkarten/continual-harness#continual-harness-online-adaptation-for-self-improving-foundation-agents)

Reference implementation for [Continual Harness](https://arxiv.org/abs/2605.09998) (Karten et al., 2026), a reset-free framework that automates agentic-harness refinement through online in-context learning, evaluated on Pokémon Red and Emerald. This repository also contains the Gemini Plays Pokémon (GPP) benchmark harness used to complete Pokémon Blue, Yellow Legacy (hard mode), and Crystal — the first AI system to finish multiple Pokémon RPGs.

Continual Harness starts from a minimal environment interface (frames, ASCII text map, button inputs) and lets an LLM Refiner rewrite the full harness state — system prompt `p`, sub-agents `G`, skills `K`, memory `M` — in place mid-episode via CRUD edits on a trajectory window. The same loop extends to joint training of an open-source model's weights via an online DAgger + process-reward-model pipeline.

In this repo, Continual Harness is the `continualharness` scaffold (`--scaffold continualharness --enable-prompt-optimization`); see [Continual Harness Scaffold](https://github.com/sethkarten/continual-harness#continual-harness-scaffold) below.

> **Note:** This repository was previously published as `sethkarten/pokeagent-speedrun`, the reference framework for [The PokéAgent Challenge](https://arxiv.org/abs/2603.15563) (Karten et al., 2026). It has been renamed and generalized — the hand-engineered PokéAgent harness is retained as the `pokeagent` scaffold (`H_expert`), and the repository now centers on Continual Harness as the headline contribution. GitHub auto-redirects the old URL, so existing clone commands and links continue to work.

## Table of Contents

[https://github.com/sethkarten/continual-harness#table-of-contents](https://github.com/sethkarten/continual-harness#table-of-contents)

- [Overview](https://github.com/sethkarten/continual-harness#overview)
- [Continual Harness Scaffold](https://github.com/sethkarten/continual-harness#continual-harness-scaffold)
- [Architecture](https://github.com/sethkarten/continual-harness#architecture)
- [Features](https://github.com/sethkarten/continual-harness#features)
- [Directory Structure](https://github.com/sethkarten/continual-harness#directory-structure)
- [Requirements](https://github.com/sethkarten/continual-harness#requirements)
- [Installation](https://github.com/sethkarten/continual-harness#installation)
  - [1. Clone the Repository](https://github.com/sethkarten/continual-harness#1-clone-the-repository)
  - [2. Environment (uv or Conda)](https://github.com/sethkarten/continual-harness#2-environment-uv-or-conda)
  - [3. mGBA System Library](https://github.com/sethkarten/continual-harness#3-mgba-system-library)
  - [4. Python Dependencies](https://github.com/sethkarten/continual-harness#4-python-dependencies)
  - [5. Game ROM](https://github.com/sethkarten/continual-harness#5-game-rom)

- [VLM Backend Setup (run.py)](https://github.com/sethkarten/continual-harness#vlm-backend-setup-runpy)
- [CLI Agent Backend Setup (run_cli.py)](https://github.com/sethkarten/continual-harness#cli-agent-backend-setup-run_clipy)
- [Running the Agent](https://github.com/sethkarten/continual-harness#running-the-agent)
- [Command Line Options](https://github.com/sethkarten/continual-harness#command-line-options)
- [Customizing Agent Behavior](https://github.com/sethkarten/continual-harness#customizing-agent-behavior-prompt-editing-guide)
- [Advanced Configuration](https://github.com/sethkarten/continual-harness#advanced-configuration)
- [Troubleshooting](https://github.com/sethkarten/continual-harness#troubleshooting)
- [Citation](https://github.com/sethkarten/continual-harness#citation)
- [License](https://github.com/sethkarten/continual-harness#license)

## Overview

[https://github.com/sethkarten/continual-harness#overview](https://github.com/sethkarten/continual-harness#overview)

This repo packages the code for the Continual Harness paper alongside the broader PokéAgent benchmark infrastructure that hosts it. It provides:

- The **`continualharness` scaffold** — `H_min` plus an automated Refiner that performs reset-free CRUD edits to the prompt, sub-agents, skills, and memory mid-episode (the `evolve_harness` tool, gated by `--enable-prompt-optimization`). This is the artifact for the paper's main results.
- The **PokeAgent benchmark harness** — hand-engineered scaffold (`H_expert`) with sub-agents, A* pathfinding, type chart, damage calculator, and curated objectives, used as the upper-baseline in the paper.
- **Minimal baselines** — `simple` (`H_min`) and `simplest` ablations.
- **External CLI harnesses** — Claude Code, Gemini CLI, Codex, and Hermes via an MCP proxy (`run_cli.py`).
- Emulator integrations, persistence, metrics, and a web UI for both **Pokémon Emerald** and **Pokémon Red**.

Select the title with **`--game emerald`** (default) or **`--game red`** on **`run.py`** and **`run_cli.py`**; this sets **`GAME_TYPE`** for the game server and aligns prompt assets in `agents/prompts/paths.py`. `PokeAgent` analyzes game frames, structured state, maps, objectives, and long-run memory, then acts through server-backed game tools. External CLI agents instead connect through the restricted MCP surface exposed by `run_cli.py`.

## Continual Harness Scaffold

[https://github.com/sethkarten/continual-harness#continual-harness-scaffold](https://github.com/sethkarten/continual-harness#continual-harness-scaffold)

The `continualharness` scaffold is the reference implementation of the paper's `H_CH`. It starts from the minimalist interface (frames, ASCII text map, button inputs) and lets the model evolve its own harness in place during a single continuous episode — no resets between updates.

**What it does.** Every `--optimization-window-length` steps, a Refiner reads the recent trajectory window, identifies failure signatures (navigation loops, tool-call failures, stalled objectives, missed exploration), and runs four passes over the harness components:

1. Rewrite the system prompt `p` against the observed failures.
2. CRUD over sub-agents `G` (create entries for repeated multi-step patterns, edit to address failures, delete unused entries).
3. CRUD over skills `K` (codify successful sequences, repair executable code that raised exceptions).
4. CRUD over memory `M` (fill gaps, refresh stale entries, demote areas the agent has moved past).

Refinement is exposed to the agent as a single tool, `evolve_harness`, and the Refiner role uses the same model as the agent. The implementation lives in [agents/utils/harness_evolver.py](https://github.com/sethkarten/continual-harness/blob/main/agents/utils/harness_evolver.py); scaffold wiring is in [agents/tools/registry.py](https://github.com/sethkarten/continual-harness/blob/main/agents/tools/registry.py).

**Running it.**

```
# Continual Harness on Pokémon Red from the start (Gemini 3 Pro)
python run.py \
  --game red \
  --scaffold continualharness \
  --enable-prompt-optimization \
  --optimization-window-length 50 \
  --backend gemini --model-name gemini-3-pro-preview \
  --port 8000 --agent-auto

# Bootstrap from a prior run's evolved harness (loads memory.json, skills.json, subagents.json, evolved prompt)
python run.py \
  --game emerald \
  --scaffold continualharness \
  --enable-prompt-optimization \
  --bootstrap-from run_data/<prior_run_id>/end_state/game_state/bootstrap \
  --backend gemini --model-name gemini-3-pro-preview \
  --port 8000 --agent-auto
```

Without `--enable-prompt-optimization`, the `continualharness` scaffold behaves like `simple` plus the `evolve_harness` tool stub; full reset-free refinement only runs when the flag is set.

**Bootstrap variants** from the paper map to:

- *from scratch* — no `--bootstrap-from`, refinement enabled.
- *bootstrap frozen* — `--bootstrap-from <path>` without `--enable-prompt-optimization`.
- *bootstrap updating* — `--bootstrap-from <path>` with `--enable-prompt-optimization`.

**Caveats.** Capability-dependent gains: in the paper, Continual Harness is strictly Pareto-dominant on Gemini 3 Pro, high-variance on Flash, and below the minimalist baseline on Flash-Lite. Don't expect refinement to bootstrap below that capability floor.

## Architecture

[https://github.com/sethkarten/continual-harness#architecture](https://github.com/sethkarten/continual-harness#architecture)

The system uses a **headless server**: the game and emulator run in a server process; agents and UIs run as clients. The server exposes HTTP REST endpoints and `POST /mcp/*` routes; clients poll for state and submit actions.

Typical process layout:

- **`run.py`** starts the FastAPI game server on `--port` and, when in agent mode, the frame stream server on `--port + 1`; the in-repo Python agent calls the game server HTTP routes directly.
- **`run_cli.py`** starts the FastAPI game server on `--port`, the frame stream server on `--port + 1`, and an MCP proxy on `--mcp-sse-port` (default `--port + 2`) for containerized CLI agents.
- The web UI is served from the game server at `http://localhost:{port}/stream`.

For the canonical, code-grounded architecture docs, start with **[System-Design/README.md](https://github.com/sethkarten/continual-harness/blob/main/System-Design/README.md)**.

For module-level detail, see the README in each area:

- **[server/README.md](https://github.com/sethkarten/continual-harness/blob/main/server/README.md)** — Game server, frame streaming, MCP proxy, ports and endpoints.
- **[agents/README.md](https://github.com/sethkarten/continual-harness/blob/main/agents/README.md)** — PokeAgent, prompts, objectives, prompt optimization, local subagents.
- **[pokemon_env/README.md](https://github.com/sethkarten/continual-harness/blob/main/pokemon_env/README.md)** — Emerald: mGBA emulator, memory reader, Porymap map data.
- **`pokemon_red_env/`** — Red: PyBoy emulator, memory/map readers, Red milestones (see [System-Design/architecture/pokemon_infrastructure.md](https://github.com/sethkarten/continual-harness/blob/main/System-Design/architecture/pokemon_infrastructure.md)).
- **[utils/README.md](https://github.com/sethkarten/continual-harness/blob/main/utils/README.md)** — Mapping, persistence, VLM backends, metrics.

## Features

[https://github.com/sethkarten/continual-harness#features](https://github.com/sethkarten/continual-harness#features)

- **Multiple VLM backends**: OpenAI, OpenRouter, Google Gemini, Anthropic, and Vertex (via `utils/agent_infrastructure/vlm_backends.py`)
- **External CLI Harnesses**: Claude Code, Gemini CLI, Codex, and Hermes via `run_cli.py`
- **Custom Agent Harnesses**: Multiple scaffold settings (e.g., `continualharness`, `pokeagent`, `simple`, `simplest`)
- **PokeAgent local subagents**: Custom subagent abstractions accessible to our custom PokeAgent harness: `subagent_reflect`, `subagent_verify`, `subagent_gym_puzzle`, `subagent_summarize`, `subagent_battler`, and `subagent_plan_objectives`.
- **Checkpoints & backups**: Save/resume runs; backups in `backups/`; analysis data in `run_data/`. Backups restore **disk** state under `.pokeagent_cache/` (objectives, long-term memory, checkpoint, trajectories file if present, etc.), not the agent’s in-memory short-term conversation window—see [utils/README.md](https://github.com/sethkarten/continual-harness/blob/main/utils/README.md) (`data_persistence`).
- **Metrics & logging**: Per-step and cumulative tokens, cost, actions, and run initialization settings are stored in `.pokeagent_cache/{run_id}/cumulative_metrics.json`; LLM logs (`llm_logs/`) and backend session logs are also tracked, though `cumulative_metrics.json` is the aggregate source of truth.
- **Map system**: **Emerald** — Porymap integration, NPC display, movement preview, portal tracking. **Red** — `RedMapReader` / PyBoy-backed map formatting (no Porymap).
- **Web interface**: Real-time stream at `http://localhost:8000/stream` by default. The port can be manually specified via `--port` on both `run.py` and `run_cli.py`.
- **Video recording**: Optional MP4 recording of gameplay saved to `run_data/{run_id}/end_state/videos/`
- **Customizable prompts**: Edit prompt assets under `agents/prompts/` to directly steer agent behavior.

## Directory Structure

[https://github.com/sethkarten/continual-harness#directory-structure](https://github.com/sethkarten/continual-harness#directory-structure)

```
continual-harness/
├── README.md
├── pyproject.toml            # Project config and dependencies (uv/pip)
├── uv.lock                   # Locked dependency versions (uv sync uses this)
├── requirements.txt          # Pip fallback (frozen from env)
├── run.py                    # Multiprocess entry: starts server + in-repo agent client
├── run_cli.py                # Entry for external CLI agents (MCP); spawns server + MCP proxy
├── server/
│   ├── app.py                # FastAPI game server (emulator, /state, /action, /mcp/*, etc.)
│   ├── agent_thinking.txt    # Runtime file (gitignored); server writes latest thinking for UI
│   ├── frame_server.py       # Frame streaming
│   ├── stream.html           # Web UI for streaming
│   └── cli/
│       └── pokemon_mcp_server.py   # MCP proxy: stdio ↔ HTTP to game server
├── agents/
│   ├── __init__.py           # Package exports (PokeAgent, VisionOnlyAgent)
│   ├── PokeAgent.py          # Main benchmark agent
│   ├── vision_only_agent.py
│   ├── subagents/            # reflect, verify, summarize, battler, planner, gym_puzzle; utils/ = registry, runtime, context, trajectory_window, puzzle_solver
│   ├── utils/                # prompt_optimizer, etc.
│   ├── objectives/           # Direct objectives, types, categorization
│   └── prompts/              # Canonical prompt assets and path helpers
├── utils/
│   ├── mapping/              # ascii_map_loader, map_formatter, map_stitcher, map_stitcher_singleton,
│   │                          # pathfinding, pokeemerald_parser, porymap_json_builder, porymap_state
│   ├── data_persistence/     # backup_manager, run_data_manager, llm_logger
│   ├── agent_infrastructure/ # cli_agent_backends, vlm_backends
│   ├── metric_tracking/      # session readers (claude, gemini, codex, hermes), server_metrics
│   ├── state_formatter.py    # Facade; re-exports from utils.mapping.porymap_state
│   ├── knowledge_base.py     # Shared by agents and server
│   ├── anticheat.py, error_handler.py, json_utils.py, ocr_dialogue.py
│   └── ...
├── pokemon_env/
│   ├── emulator.py           # EmeraldEmulator (mGBA, input, frame advance)
│   ├── memory_reader.py      # PokemonEmeraldReader (DO NOT MODIFY for submissions)
│   ├── emerald_utils.py, enums.py, types.py, utils.py
│   ├── porymap_paths.py      # Centralized path resolution for porymap data
│   ├── porymap/              # Pokeemerald decompilation data (data/maps, data/tilesets)
│   └── ...
├── pokemon_red_env/
│   └── red_emulator.py       # RedEmulator (PyBoy), readers, Red milestones
├── tests/
│   ├── run_tests.py, states/, ground_truth/, test_*.py
│   └── ...
├── Emerald-GBAdvance/        # rom.gba (not included), *.state
├── PokemonRed-GBC/           # pokered.gbc (not included), Red assets
├── .pokeagent_cache/        # Runtime cache per run (checkpoints, metrics, maps)
├── backups/                 # Backup archives
├── run_data/                # Per-run analysis data
└── llm_logs/                # LLM interaction logs (auto-generated)
```

## Requirements

[https://github.com/sethkarten/continual-harness#requirements](https://github.com/sethkarten/continual-harness#requirements)

- Python 3.10–3.11
- **Emerald:** Pokémon Emerald ROM (not included; obtain legally)
- **Red:** Pokémon Red ROM as `PokemonRed-GBC/pokered.gbc` (not included; obtain legally)
- An API key for access to one of the supported VLM backends (see VLM Backend Setup)
- **mGBA** system library for Python bindings (**Emerald**); **PyBoy** is a Python dependency (**Red**)

## Installation

[https://github.com/sethkarten/continual-harness#installation](https://github.com/sethkarten/continual-harness#installation)

### 1. Clone the Repository

[https://github.com/sethkarten/continual-harness#1-clone-the-repository](https://github.com/sethkarten/continual-harness#1-clone-the-repository)

```
git clone https://github.com/sethkarten/continual-harness
cd continual-harness
```

### 2. Environment (uv or Conda)

[https://github.com/sethkarten/continual-harness#2-environment-uv-or-conda](https://github.com/sethkarten/continual-harness#2-environment-uv-or-conda)

**Option A – uv (recommended):**

[uv](https://docs.astral.sh/uv/) uses `pyproject.toml` and `uv.lock` for reproducible installs.

```
# Install uv (if needed)
curl -LsSf https://astral.sh/uv/install.sh | sh
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

