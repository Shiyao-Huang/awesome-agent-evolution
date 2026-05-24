---
repo: neosigmaai/auto-harness
url: https://github.com/neosigmaai/auto-harness
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - neosigmaai/auto-harness: Bring your own agent and build a self-improving agentic system. Automatically mine failures, optimize the agent harness, and gate against regressions. · GitHub

**Source**: https://github.com/neosigmaai/auto-harness

---

[Skip to content](https://github.com/neosigmaai/auto-harness#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[neosigmaai](https://github.com/neosigmaai)

/
**[auto-harness](https://github.com/neosigmaai/auto-harness)**

Public

- [Notifications](https://github.com/login?return_to=%2Fneosigmaai%2Fauto-harness)You must be signed in to change notification settings
- [Fork
    60](https://github.com/login?return_to=%2Fneosigmaai%2Fauto-harness)
- 
[Star
          507](https://github.com/login?return_to=%2Fneosigmaai%2Fauto-harness)

[https://github.com/neosigmaai/auto-harness](https://github.com/neosigmaai/auto-harness)

[Branches](https://github.com/neosigmaai/auto-harness/branches)[Tags](https://github.com/neosigmaai/auto-harness/tags)

[https://github.com/neosigmaai/auto-harness/branches](https://github.com/neosigmaai/auto-harness/branches)[https://github.com/neosigmaai/auto-harness/tags](https://github.com/neosigmaai/auto-harness/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| agent | agent |  |  |
| program_templates | program_templates |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| PROGRAM.md | PROGRAM.md |  |  |
| README.md | README.md |  |  |
| benchmark.py | benchmark.py |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| experiment_config.yaml.template | experiment_config.yaml.template |  |  |
| gating.py | gating.py |  |  |
| prepare.py | prepare.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| record.py | record.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# auto-harness

[https://github.com/neosigmaai/auto-harness#auto-harness](https://github.com/neosigmaai/auto-harness#auto-harness)

> Give a coding agent a benchmark and an agent file. Let it iterate overnight. It reads failures, improves the system prompt and tools, gates every change against a self-maintained eval suite, and repeats.

This repo is a simplified version of our auto-harness agent setup. We demonstrate our system on Tau3 benchmark tasks where the agent's score improves from 0.56 to 0.78 (~40% jump) while mining failures and auto maintaining live evals. If you are curious to learn more, read the full blog here - [https://www.neosigma.ai/blog/self-improving-agentic-systems](https://www.neosigma.ai/blog/self-improving-agentic-systems).

The loop is defined in `PROGRAM.md`. The coding agent edits `agent/agent.py` to improve the agent and appends findings to `workspace/learnings.md` after each iteration.

---

## Supported Benchmarks

[https://github.com/neosigmaai/auto-harness#supported-benchmarks](https://github.com/neosigmaai/auto-harness#supported-benchmarks)

| Benchmark | Domain | Tasks | Agent Interface |
|---|---|---|---|
| tau-bench | Customer service (retail, airline, telecom) | retail: 114, airline: 50, telecom: 114 | Structured tool calls via tau2 |
| Terminal-Bench 2.0 | Real-world terminal tasks (coding, sysadmin, security) | 89 | Bash commands via Harbor containers |
| BIRD-Interact | Interactive text-to-SQL (multi-turn, CRUD over Postgres) | lite: 300, full: 600 | Google ADK agent against a 3-service environment (user sim, DB env, system agent) |

---

## How it works

[https://github.com/neosigmaai/auto-harness#how-it-works](https://github.com/neosigmaai/auto-harness#how-it-works)

```
run benchmark → analyze → improve agent/agent.py → gate → record → update learnings → repeat
```

- **`agent/agent.py`** — the agent being optimized (copied from a benchmark-specific template)
- **`agent/templates/`** — starting-point templates for each benchmark (read-only)
- **`benchmark.py`** — runs your benchmark, returns per-task rewards
- **`gating.py`** — three-step gate: eval suite + full test val_score + suite promotion
- **`record.py`** — appends iteration results to `workspace/results.tsv`
- **`prepare.py`** — sets up workspace, copies templates, runs baseline
- **`program_templates/`** — benchmark-specific PROGRAM.md instructions
- **`PROGRAM.md`** — instructions the coding agent follows (copied from template by prepare.py)

---

## Quick start: Terminal-Bench 2.0

[https://github.com/neosigmaai/auto-harness#quick-start-terminal-bench-20](https://github.com/neosigmaai/auto-harness#quick-start-terminal-bench-20)

**Requirements:**`harbor` CLI, an `OPENAI_API_KEY`, an `E2B_API_KEY` (or `DAYTONA_API_KEY`), and a coding agent (Claude Code, Codex CLI, or similar).

```
# 1. Clone the repo
git clone https://github.com/neosigmaai/auto-harness
cd auto-harness

# 2. Install harbor
uv tool install harbor

# 3. Set up environment variables
cp .env.example .env
# edit .env — set OPENAI_API_KEY and E2B_API_KEY

# 4. Configure the experiment
cp experiment_config.yaml.template experiment_config.yaml
# edit experiment_config.yaml — uncomment the terminal-bench section

# 5. Initialize workspace + run baseline (runs all 89 tasks, generates train/test split)
python prepare.py

# 6. Start the optimization loop
# Point your coding agent at the repo and prompt:
#   "Read PROGRAM.md and start the optimization loop."
```

## Quick start: BIRD-Interact

[https://github.com/neosigmaai/auto-harness#quick-start-bird-interact](https://github.com/neosigmaai/auto-harness#quick-start-bird-interact)

**Requirements:** Docker (for Postgres), Python 3.12+, `git-lfs` (for the HF dataset), an `OPENAI_API_KEY` (or `ANTHROPIC_API_KEY` / `GEMINI_API_KEY` depending on model), and a coding agent.

```
# 1. Clone this repo
git clone https://github.com/neosigmaai/auto-harness
cd auto-harness

# 2. Set up environment variables
cp .env.example .env
# edit .env — set OPENAI_API_KEY (or ANTHROPIC_API_KEY)

# 3. Configure the experiment
cp experiment_config.yaml.template experiment_config.yaml
# edit experiment_config.yaml — uncomment the BIRD-INTERACT section

# 4. Initialize — prepare.py auto-provisions everything:
#      - clones BIRD-Interact-ADK into ./bird_interact_adk/ (gitignored)
#      - creates an isolated .venv-adk with the ADK's deps
#      - clones the bird-interact-lite dataset from HuggingFace
#      - starts the Postgres Docker container
#      - runs the baseline (300 tasks) and generates the train/test split
python prepare.py

# 5. Start the optimization loop
# Point your coding agent at the repo and prompt:
#   "Read PROGRAM.md and start the optimization loop."
```

**Ground truth (one-time step):** The public BIRD-Interact dataset ships *without* gold SQL to prevent data leakage. On first run, `prepare.py` will detect this and print the exact email + merge command needed. Briefly:

1. Email `bird.bench25@gmail.com` with subject `[bird-interact-lite GT&Test Cases]`
2. Run the `combine_public_with_gt.py` script shown by prepare.py, using the jsonl you receive
3. Re-run `python prepare.py`

**What the integration adds:**

- `BirdInteractRunner` in `benchmark.py` — spawns the three ADK services (user simulator, DB environment, system agent) per run, drives `orchestrator.runner`, parses results into the harness reward format.
- `agent/helpers/bird_interact/bird_service.py` + `agent/helpers/bird_interact/bird_adk_runtime.py` — the harness-owned wrapper that lets your `agent/agent.py` be served as the BIRD system agent via FastAPI.
- `agent/templates/bird_interact.py` — faithful copy of the stock BIRD-Interact-ADK system agent, copied to `agent/agent.py` by `prepare.py` as the iteration starting point.
- `program_templates/bird_interact.md` — benchmark-specific guidance appended to `PROGRAM.md`.

**Known caveats:**

- GPT-5-family models reject explicit `temperature=0`; the template omits the temperature kwarg for those models (stock behavior preserved for all other models).
- `prepare.py` creates a separate `.venv-adk` inside `bird_interact_adk/` because the ADK's deps (google-adk, psycopg2, etc.) may conflict with other benchmarks' deps.
- Advanced users can point at an existing BIRD-Interact install via `bird_repo` + `bird_python_bin` in `experiment_config.yaml` to skip auto-provisioning.

## Quick start: tau-bench

[https://github.com/neosigmaai/auto-harness#quick-start-tau-bench](https://github.com/neosigmaai/auto-harness#quick-start-tau-bench)

**Requirements:** Docker, an `OPENAI_API_KEY`, and a coding agent.

```
# 1. Clone the repo
git clone https://github.com/neosigmaai/auto-harness
cd auto-harness

# 2. Set up environment variables
cp .env.example .env
# edit .env — set OPENAI_API_KEY

# 3. Configure the experiment
cp experiment_config.yaml.template experiment_config.yaml
# edit experiment_config.yaml — uncomment the tau-bench section

# 4. Build the Docker image (installs tau-bench and all deps via uv)
docker compose build

# 5. Initialize the workspace + run baseline
docker compose run autoeval python prepare.py

# 6. Start the optimization loop
# Point your coding agent at the repo and prompt:
#   "Read PROGRAM.md and start the optimization loop."
```

---

## Running the loop

[https://github.com/neosigmaai/auto-harness#running-the-loop](https://github.com/neosigmaai/auto-harness#running-the-loop)

Point your coding agent at the repo and prompt:

```
Read PROGRAM.md and start the optimization loop.
The baseline is already recorded. Start from step 2 (analyze failures).
```

The agent will read traces, diagnose failures, edit `agent/agent.py`, gate the change, record the result, and repeat.

---

## How benchmarks are structured

[https://github.com/neosigmaai/auto-harness#how-benchmarks-are-structured](https://github.com/neosigmaai/auto-harness#how-benchmarks-are-structured)

### Templates

[https://github.com/neosigmaai/auto-harness#templates](https://github.com/neosigmaai/auto-harness#templates)

Each benchmark has two templates:

```
agent/templates/
├── tau_bench.py           # tau-bench agent starting point
├── terminal_bench.py      # terminal-bench agent starting point
└── bird_interact.py       # BIRD-Interact system agent starting point

program_templates/
├── tau_bench.md           # tau-bench PROGRAM.md
├── terminal_bench.md      # terminal-bench PROGRAM.md
└── bird_interact.md       # BIRD-Interact PROGRAM.md
```

`prepare.py` copies the correct templates into `agent/agent.py` and `PROGRAM.md` based on `experiment_config.yaml`. The coding agent then edits `agent/agent.py` freely. To see what it changed:

```
diff agent/templates/terminal_bench.py agent/agent.py
```

### Using a different Harbor benchmark

[https://github.com/neosigmaai/auto-harness#using-a-different-harbor-benchmark](https://github.com/neosigmaai/auto-harness#using-a-different-harbor-benchmark)

If your benchmark runs via `harbor run`, you only need four steps:

**1. Point to your dataset in `experiment_config.yaml`:**

```
benchmark: "terminal-bench"   # reuses TerminalBenchRunner
dataset: "my-harbor-dataset@1.0"
agent_model: "gpt-4o"
env_provider: "e2b"           # or "daytona" / "docker"
split: "train"
gate_split: "test"
```

**2. Check your verifier's `result.json` schema.**`TerminalBenchRunner` expects:

```
{
  "task_name": "<id>",
  "verifier_result": {
    "rewards": { "reward": 0.85 }
  }
}
```

If your verifier writes rewards at a different path, update the parser in `TerminalBenchRunner.run()` in `benchmark.py`.

**3. Update the split directory name (optional).** The split file is currently saved to `tbench_data/task_split.json`. If you want a separate directory per benchmark, change `SPLIT_FILE` in `TerminalBenchRunner` and update `prepare.py` accordingly.

**4. Add a PROGRAM.md supplement.** Create `program_templates/<your_benchmark>.md` with benchmark-specific guidance (trace paths, task ID format, known techniques) following the same pattern as `terminal_bench.md`. Then register it in `copy_program_template()` in `prepare.py`.

The train/test split generation, gating, trace copying, and optimization loop all work as-is — no other changes needed.

---
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

