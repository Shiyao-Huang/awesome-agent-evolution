---
repo: fusionbrainlab/gigaevo-core
url: https://github.com/fusionbrainlab/gigaevo-core
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - FusionBrainLab/gigaevo-core: Evolutionary algorithm that uses Large Language Models (LLMs) to automatically improve programs through iterative mutation and selection · GitHub

**Source**: https://github.com/fusionbrainlab/gigaevo-core

---

[Skip to content](https://github.com/fusionbrainlab/gigaevo-core#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[FusionBrainLab](https://github.com/FusionBrainLab)

/
**[gigaevo-core](https://github.com/FusionBrainLab/gigaevo-core)**

Public

- [Notifications](https://github.com/login?return_to=%2FFusionBrainLab%2Fgigaevo-core)You must be signed in to change notification settings
- [Fork
    23](https://github.com/login?return_to=%2FFusionBrainLab%2Fgigaevo-core)
- 
[Star
          116](https://github.com/login?return_to=%2FFusionBrainLab%2Fgigaevo-core)

[https://github.com/FusionBrainLab/gigaevo-core](https://github.com/FusionBrainLab/gigaevo-core)

[Branches](https://github.com/FusionBrainLab/gigaevo-core/branches)[Tags](https://github.com/FusionBrainLab/gigaevo-core/tags)

[https://github.com/FusionBrainLab/gigaevo-core/branches](https://github.com/FusionBrainLab/gigaevo-core/branches)[https://github.com/FusionBrainLab/gigaevo-core/tags](https://github.com/FusionBrainLab/gigaevo-core/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,047 Commits1,047 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| config | config |  |  |
| docs | docs |  |  |
| gigaevo | gigaevo |  |  |
| problems | problems |  |  |
| tests | tests |  |  |
| tools | tools |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_memory.md | README_memory.md |  |  |
| README_memory_platform_run.md | README_memory_platform_run.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pytest.ini | pytest.ini |  |  |
| run.py | run.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# GigaEvo

[https://github.com/fusionbrainlab/gigaevo-core#gigaevo](https://github.com/fusionbrainlab/gigaevo-core#gigaevo)

[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://github.com/astral-sh/ruff](https://github.com/astral-sh/ruff)

Evolutionary algorithm framework that uses Large Language Models to automatically improve programs through iterative mutation and selection (MAP-Elites). Programs are Python functions; fitness is task performance. The framework is task-agnostic and supports single runs, multi-island evolution, and prompt co-evolution.

## Demo

[https://github.com/fusionbrainlab/gigaevo-core#demo](https://github.com/fusionbrainlab/gigaevo-core#demo)

[https://github.com/FusionBrainLab/gigaevo-core/blob/main/docs/demos/demo-opt.gif](https://github.com/FusionBrainLab/gigaevo-core/blob/main/docs/demos/demo-opt.gif)

## Getting Started

[https://github.com/fusionbrainlab/gigaevo-core#getting-started](https://github.com/fusionbrainlab/gigaevo-core#getting-started)

- **[Quick Start](https://github.com/FusionBrainLab/gigaevo-core/blob/main/docs/QUICKSTART.md)** — Get running in 5 minutes
- **[Architecture Guide](https://github.com/FusionBrainLab/gigaevo-core/blob/main/docs/ARCHITECTURE.md)** — System design overview

## Documentation

[https://github.com/fusionbrainlab/gigaevo-core#documentation](https://github.com/fusionbrainlab/gigaevo-core#documentation)

| Guide | Description |
|---|---|
| DAG System | Execution engine: stages, dependencies, caching |
| Evolution Strategies | MAP-Elites, multi-island, migration |
| Prompt Co-Evolution | Co-evolve mutation prompts alongside programs |
| Tools | Analysis, debugging, and problem scaffolding utilities |
| Usage Guide | Detailed usage and Hydra configuration |
| Contributing | Guidelines for contributors |
| Changelog | Version history |

## Quick Start

[https://github.com/fusionbrainlab/gigaevo-core#quick-start](https://github.com/fusionbrainlab/gigaevo-core#quick-start)

### 1. Install

[https://github.com/fusionbrainlab/gigaevo-core#1-install](https://github.com/fusionbrainlab/gigaevo-core#1-install)

**Requirements:** Python 3.12+, Redis

```
pip install -e .
```

Install Redis if not already available:

```
# Ubuntu/Debian
sudo apt-get install redis-server

# macOS
brew install redis

# Or run via Docker
docker run -d -p 6379:6379 redis:7-alpine
```

### 2. Configure LLM Access

[https://github.com/fusionbrainlab/gigaevo-core#2-configure-llm-access](https://github.com/fusionbrainlab/gigaevo-core#2-configure-llm-access)

Create a `.env` file with your API key:

```
OPENAI_API_KEY=sk-or-v1-your-api-key-here

# Optional: Langfuse tracing
LANGFUSE_PUBLIC_KEY=<key>
LANGFUSE_SECRET_KEY=<key>
LANGFUSE_HOST=https://cloud.langfuse.com
```

### 3. Start Redis

[https://github.com/fusionbrainlab/gigaevo-core#3-start-redis](https://github.com/fusionbrainlab/gigaevo-core#3-start-redis)

```
redis-server
```

### 4. Run Evolution

[https://github.com/fusionbrainlab/gigaevo-core#4-run-evolution](https://github.com/fusionbrainlab/gigaevo-core#4-run-evolution)

```
python run.py problem.name=heilbron
```

Evolution starts immediately. Logs are saved to `outputs/`.

## How It Works

[https://github.com/fusionbrainlab/gigaevo-core#how-it-works](https://github.com/fusionbrainlab/gigaevo-core#how-it-works)

1. **Load initial programs** from `problems/<name>/initial_programs/`
2. **Mutate programs** using LLMs (GPT, Claude, Gemini, Qwen, etc.)
3. **Evaluate fitness** by running each program's `entrypoint()` + `validate()`
4. **Select solutions** using MAP-Elites across a behavior space
5. **Repeat** for N generations

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Problem   │────▶│  Evolution  │────▶│     LLM     │
│  (programs, │     │   Engine    │     │  (mutation)  │
│   metrics)  │     │ (MAP-Elites)│     └──────┬──────┘
└─────────────┘     └──────┬──────┘            │
                           │                   ▼
                    ┌──────┴──────┐     ┌─────────────┐
                    │   Storage   │◀────│  Evaluator   │
                    │   (Redis)   │     │ (DAG Runner) │
                    └─────────────┘     └─────────────┘
```

## Customization

[https://github.com/fusionbrainlab/gigaevo-core#customization](https://github.com/fusionbrainlab/gigaevo-core#customization)

### Experiment Presets

[https://github.com/fusionbrainlab/gigaevo-core#experiment-presets](https://github.com/fusionbrainlab/gigaevo-core#experiment-presets)

```
# Steady-state: continuous mutation/evaluation, ~8x throughput
python run.py experiment=steady_state problem.name=heilbron

# Migration bus: parallel runs share rejected programs via Redis stream
python run.py experiment=migration_bus problem.name=heilbron redis.db=0
python run.py experiment=migration_bus problem.name=heilbron redis.db=1

# Steady-state + bus: maximum throughput with cross-run sharing
python run.py experiment=steady_state_bus problem.name=heilbron redis.db=0

# Multi-island evolution (fitness + simplicity islands)
python run.py experiment=multi_island_complexity problem.name=heilbron

# Multi-LLM exploration (diverse mutation models)
python run.py experiment=multi_llm_exploration problem.name=heilbron

# Prompt co-evolution (evolve mutation prompts alongside programs)
python run.py experiment=prompt_coevolution problem.name=heilbron \
    redis.db=4 prompt_fetcher.prompt_redis_db=6
```

### Common Overrides

[https://github.com/fusionbrainlab/gigaevo-core#common-overrides](https://github.com/fusionbrainlab/gigaevo-core#common-overrides)

```
# Limit generations
python run.py problem.name=heilbron max_generations=10

# Use different Redis database
python run.py problem.name=heilbron redis.db=5

# Change LLM model
python run.py problem.name=heilbron model_name=anthropic/claude-3.5-sonnet

# Preview config without running
python run.py problem.name=heilbron --cfg job
```

### Prompt Co-Evolution

[https://github.com/fusionbrainlab/gigaevo-core#prompt-co-evolution](https://github.com/fusionbrainlab/gigaevo-core#prompt-co-evolution)

Co-evolve the mutation prompts alongside your programs. A paired prompt run evolves the system prompt used by the mutation LLM, selecting for prompts that produce better mutations:

```
# Main run — uses co-evolved prompts from DB 6
python run.py problem.name=my_task pipeline=my_pipeline \
    prompt_fetcher=coevolved prompt_fetcher.prompt_redis_db=6 redis.db=4

# Prompt run — evolves mutation prompts, reads outcomes from DB 4
python run.py problem.name=prompt_evolution pipeline=prompt_evolution \
    redis.db=6 main_redis_db=4 main_redis_prefix=my_task
```

See [Prompt Co-Evolution Guide](https://github.com/FusionBrainLab/gigaevo-core/blob/main/docs/COEVOLUTION.md) for the full architecture, launch instructions, and monitoring.

## Configuration

[https://github.com/fusionbrainlab/gigaevo-core#configuration](https://github.com/fusionbrainlab/gigaevo-core#configuration)

GigaEvo uses [Hydra](https://hydra.cc/) for modular configuration. All config files are in `config/`:

| Directory | Purpose | Key files |
|---|---|---|
| experiment/ | Complete experiment templates | base.yaml, steady_state.yaml, migration_bus.yaml, prompt_coevolution.yaml, steady_state_bus.yaml |
| algorithm/ | Evolution algorithms | single_island.yaml, multi_island.yaml |
| llm/ | LLM setups | single.yaml, heterogeneous.yaml |
| pipeline/ | DAG execution pipelines | standard.yaml, with_context.yaml, prompt_evolution.yaml |
| prompt_fetcher/ | Prompt sourcing | fixed.yaml, coevolved.yaml |
| constants/ | Tunable parameters | evolution.yaml, llm.yaml, islands.yaml, pipeline.yaml |
| loader/ | Program loading | directory.yaml, redis_selection.yaml |
| logging/ | Backends | tensorboard.yaml, wandb.yaml |

Override any setting via command line:

```
python run.py experiment=full_featured max_generations=50 temperature=0.8
```

## Creating a Problem

[https://github.com/fusionbrainlab/gigaevo-core#creating-a-problem](https://github.com/fusionbrainlab/gigaevo-core#creating-a-problem)

1. 

Create a directory under `problems/`:

```
problems/my_problem/
├── validate.py           # Fitness evaluation
├── metrics.yaml          # Metric specifications
├── task_description.txt  # Problem description for the LLM
└── initial_programs/     # Seed programs
    ├── strategy1.py      # Must define entrypoint()
    └── strategy2.py
```

2. 

Run:

```
python run.py problem.name=my_problem
```

Or use the wizard: `python -m tools.wizard config.yaml`

See `problems/heilbron/` for a complete example.

## Output

[https://github.com/fusionbrainlab/gigaevo-core#output](https://github.com/fusionbrainlab/gigaevo-core#output)

Results are saved to `outputs/YYYY-MM-DD/HH-MM-SS/`:

- **Logs**: `evolution_*.log`
- **Programs**: Stored in Redis (export with `tools/redis2pd.py`)
- **Metrics**: TensorBoard / W&B (if configured)

## Tools

[https://github.com/fusionbrainlab/gigaevo-core#tools](https://github.com/fusionbrainlab/gigaevo-core#tools)

| Tool | Purpose |
|---|---|
| tools/redis2pd.py | Export evolution data to CSV/DataFrame |
| tools/comparison.py | Compare runs with fitness curve plots |
| tools/top_programs.py | Extract best programs from archive |
| tools/flush.py | Safely flush Redis DBs (kills workers first) |
| tools/experiment/archive_run.sh | Archive run data before flush |
| tools/dag_builder/ | Visual DAG pipeline designer |
| tools/wizard/ | Interactive problem scaffolding |

See [tools/README.md](https://github.com/FusionBrainLab/gigaevo-core/blob/main/tools/README.md) for full documentation and Redis key schema.

## Testing

[https://github.com/fusionbrainlab/gigaevo-core#testing](https://github.com/fusionbrainlab/gigaevo-core#testing)

```
# Full test suite (uses fakeredis, no Redis server needed)
python -m pytest

# Specific area
python -m pytest tests/stages/
python -m pytest tests/evolution/

# With coverage
python -m pytest --cov=gigaevo --cov-report=term-missing

# Linting
ruff check . && ruff format --check .
```

## Troubleshooting

[https://github.com/fusionbrainlab/gigaevo-core#troubleshooting](https://github.com/fusionbrainlab/gigaevo-core#troubleshooting)

**Redis database not empty:**

```
# Use tools/flush.py (kills exec_runner workers first):
PYTHONPATH=. python tools/flush.py --db 0 --confirm

# Or use a different DB:
python run.py redis.db=1
```

**LLM connection issues:**

```
# Verify API key
echo $OPENAI_API_KEY

# Test OpenRouter
curl -H "Authorization: Bearer $OPENAI_API_KEY" https://openrouter.ai/api/v1/models
```

## License

[https://github.com/fusionbrainlab/gigaevo-core#license](https://github.com/fusionbrainlab/gigaevo-core#license)

MIT License — see [LICENSE](https://github.com/FusionBrainLab/gigaevo-core/blob/main/LICENSE).

## Citation

[https://github.com/fusionbrainlab/gigaevo-core#citation](https://github.com/fusionbrainlab/gigaevo-core#citation)

```
@misc{khrulkov2025gigaevoopensourceoptimization,
      title={GigaEvo: An Open Source Optimization Framework Powered By LLMs And Evolution Algorithms},
      author={Valentin Khrulkov and Andrey Galichin and Denis Bashkirov and Dmitry Vinichenko and Oleg Travkin and Roman Alferov and Andrey Kuznetsov and Ivan Oseledets},
      year={2025},
      eprint={2511.17592},
      archivePrefix={arXiv},
      primaryClass={cs.NE},
      url={https://arxiv.org/abs/2511.17592},
}
```

## About

         Evolutionary algorithm that uses Large Language Models (LLMs) to automatically improve programs through iterative mutation and selection       

[airi-institute.github.io/gigaevo-cover/](https://airi-institute.github.io/gigaevo-cover/)

### Topics
