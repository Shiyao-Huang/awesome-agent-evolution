---
repo: sakanaai/shinkaevolve
url: https://github.com/sakanaai/shinkaevolve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - SakanaAI/ShinkaEvolve: ShinkaEvolve: Towards Open-Ended and Sample-Efficient Program Evolution 🧬 · GitHub

**Source**: https://github.com/sakanaai/shinkaevolve

---

[Skip to content](https://github.com/sakanaai/shinkaevolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[SakanaAI](https://github.com/SakanaAI)

/
**[ShinkaEvolve](https://github.com/SakanaAI/ShinkaEvolve)**

Public

- [Notifications](https://github.com/login?return_to=%2FSakanaAI%2FShinkaEvolve)You must be signed in to change notification settings
- [Fork
    236](https://github.com/login?return_to=%2FSakanaAI%2FShinkaEvolve)
- 
[Star
          1.1k](https://github.com/login?return_to=%2FSakanaAI%2FShinkaEvolve)

[https://github.com/SakanaAI/ShinkaEvolve](https://github.com/SakanaAI/ShinkaEvolve)

[Branches](https://github.com/SakanaAI/ShinkaEvolve/branches)[Tags](https://github.com/SakanaAI/ShinkaEvolve/tags)

[https://github.com/SakanaAI/ShinkaEvolve/branches](https://github.com/SakanaAI/ShinkaEvolve/branches)[https://github.com/SakanaAI/ShinkaEvolve/tags](https://github.com/SakanaAI/ShinkaEvolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History354 Commits354 Commits |  |  |  |
| .githooks | .githooks |  |  |
| .github | .github |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| shinka | shinka |  |  |
| skills | skills |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# [https://github.com/SakanaAI/ShinkaEvolve](https://github.com/SakanaAI/ShinkaEvolve)
**`ShinkaEvolve`: Towards Open-Ended and Sample-Efficient Program Evolution 🧬**

[https://github.com/sakanaai/shinkaevolve#----shinkaevolve-towards-open-ended-and-sample-efficient-program-evolution-](https://github.com/sakanaai/shinkaevolve#----shinkaevolve-towards-open-ended-and-sample-efficient-program-evolution-)

[https://camo.githubusercontent.com/419d1bc024dcd0301dfaf3f549f4140750b3cfb4c405d406cfedb55a1642c395/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d253345253344332e31302d626c7565](https://camo.githubusercontent.com/419d1bc024dcd0301dfaf3f549f4140750b3cfb4c405d406cfedb55a1642c395/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d253345253344332e31302d626c7565)[https://pypi.org/project/shinka-evolve/](https://pypi.org/project/shinka-evolve/)[https://github.com/SakanaAI/ShinkaEvolve/blob/main/LICENSE](https://github.com/SakanaAI/ShinkaEvolve/blob/main/LICENSE)[https://github.com/astral-sh/ruff](https://github.com/astral-sh/ruff)[https://arxiv.org/abs/2509.19349](https://arxiv.org/abs/2509.19349)[https://sakana.ai/shinka-evolve/](https://sakana.ai/shinka-evolve/)[https://colab.research.google.com/github/SakanaAI/ShinkaEvolve/blob/main/examples/shinka_tutorial.ipynb](https://colab.research.google.com/github/SakanaAI/ShinkaEvolve/blob/main/examples/shinka_tutorial.ipynb)

[shinka](https://sakana.ai/shinka-evolve/) is a framework that combines Large Language Models (LLMs) with evolutionary algorithms to drive scientific discovery. By leveraging the creative capabilities of LLMs and the optimization power of evolutionary search, `shinka` enables automated exploration and improvement of scientific code. The system is inspired by the [AI Scientist](https://sakana.ai/ai-scientist/), [AlphaEvolve](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) and the [Darwin Goedel Machine](https://sakana.ai/dgm/): It maintains a population of programs that evolve over generations, with an ensemble of LLMs acting as intelligent mutation operators that suggest code improvements.

---

**May 2026 Update**: Added [Headless](https://github.com/RobertTLange/headless-cli) CLI-backed mutation models for subscription-backed agent usage. Use model strings such as `headless/codex@gpt-5.5?effort=high` or `headless/claude`. Check the [example](https://github.com/SakanaAI/ShinkaEvolve/tree/main/examples/sine_approx_headless) for more detail.

**Apr 2026 Update**: Added the new [documentation website](https://sakanaai.github.io/ShinkaEvolve/) with guides for getting started, configuration, async evolution, local models, WebUI usage, and agentic workflows.

**Mar 2026 Update**: Refactored API and unified runner `ShinkaEvolveRunner` (replacing `EvolutionRunner` and `AsyncEvolutionRunner`). You can now install `shinka` via PyPI and `uv`: `pip install shinka-evolve`.

**Feb 2026 Update**: Added [agent skills](https://sakanaai.github.io/ShinkaEvolve/agentic_usage/) for using `shinka` within coding agents (Claude Code, Codex, etc.) for new task generation ([shinka-setup](https://github.com/SakanaAI/ShinkaEvolve/blob/main/skills/shinka-setup/SKILL.md)), converting your repo ([shinka-convert](https://github.com/SakanaAI/ShinkaEvolve/blob/main/skills/shinka-convert/SKILL.md)),  evolution ([shinka-run](https://github.com/SakanaAI/ShinkaEvolve/blob/main/skills/shinka-run/SKILL.md)), and result inspection ([shinka-inspect](https://github.com/SakanaAI/ShinkaEvolve/blob/main/skills/shinka-inspect/SKILL.md)). Install them via `npx`:

```
npx skills add SakanaAI/ShinkaEvolve --skill '*' -a claude-code -a codex -y
```

**Jan 2026 Update**: ShinkaEvolve was accepted at ICLR 2026 and we [released an update](https://github.com/SakanaAI/ShinkaEvolve/blob/main/CHANGELOG.md) with new features.

**Nov 2025 Update**: Rob gave several public talks about our ShinkaEvolve effort ([Official](https://x.com/SakanaAILabs/status/1989352976792846356?s=20), [AutoML Seminar](https://www.youtube.com/watch?v=dAOIer_1INo)).

**Oct 2025 Update** ShinkaEvolve supported Team Unagi in winning the [ICFP 2025 Programming Contest](https://sakana.ai/icfp-2025/).

---

The framework supports **parallel evaluation of candidates** locally or on a Slurm cluster. It maintains an archive of successful solutions, enabling knowledge transfer between different evolutionary islands. `shinka` is particularly well-suited for scientific tasks where there is a verifier available and the goal is to optimize performance metrics while maintaining code correctness and readability.

[https://raw.githubusercontent.com/SakanaAI/ShinkaEvolve/main/docs/media/conceptual.png](https://raw.githubusercontent.com/SakanaAI/ShinkaEvolve/main/docs/media/conceptual.png)

## Documentation 📝

[https://github.com/sakanaai/shinkaevolve#documentation-](https://github.com/sakanaai/shinkaevolve#documentation-)

| Guide | Description | What You'll Learn |
|---|---|---|
| 🚀 First steps | Installation, basic usage, and examples | Setup, first evolution run, core concepts |
| 📓 Tutorial | Interactive walkthrough of Shinka | Hands-on examples, config, best practices |
| ⚙️  Config | Comprehensive config reference | All config options & advanced features |
| 🎨 WebUI | Interactive visualization and monitoring | Real-time tracking, result analysis, debugging |
| ⚡ Async Evo | High-perf. throughput (5-10x speedup) | Concurrent processing, proposal/eval tuning |
| 🧠 Local Models | How to use local LLMs and embeddings with Shinka | Running open-source models & integration tips |
| 🤖 Agentic Use | Run Shinka with Claude/Codex skills | CLI install, skill placement, setup/run workflows |

## Installation & Quick Start 🚀

[https://github.com/sakanaai/shinkaevolve#installation--quick-start-](https://github.com/sakanaai/shinkaevolve#installation--quick-start-)

```
# Install from PyPI
pip install shinka-evolve

# Or with uv
uv pip install shinka-evolve

# Run your first evolution experiment
shinka_launch variant=circle_packing_example
```

The distribution name is `shinka-evolve`; Python imports stay `import shinka`.

`shinka_launch` still supports the original shorthand group overrides:

```
shinka_launch variant=circle_packing_example
shinka_launch task=novelty_generator database=island_small
```

Built-in Hydra presets ship inside the package under `shinka/configs/`. To add your own presets from a PyPI install without cloning the repo, place them in your own config directory and pass `--config-dir`:

```
mkdir -p ~/my-shinka-configs/variant
$EDITOR ~/my-shinka-configs/variant/my_variant.yaml
shinka_launch --config-dir ~/my-shinka-configs variant=my_variant
```

For development installs from source:

```
git clone https://github.com/SakanaAI/ShinkaEvolve
cd ShinkaEvolve
uv venv --python 3.11
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
uv pip install -e .
```

For detailed installation instructions and usage examples, see the [Getting Started Guide](https://sakanaai.github.io/ShinkaEvolve/getting_started/).

## Examples 📖

[https://github.com/sakanaai/shinkaevolve#examples-](https://github.com/sakanaai/shinkaevolve#examples-)

| Example | Description | Environment Setup |
|---|---|---|
| ⭕ Circle Packing | Optimize circle packing to maximize radii. | LocalJobConfig |
| 🎮 Game 2048 | Optimize a policy for the Game of 2048. | LocalJobConfig |
| ∑ Julia Prime Counting | Optimize a Julia solver for prime-count queries. | LocalJobConfig |
| 🔥 Fortran Heat Diffusion | Optimize a compiled Fortran stencil solver. | LocalJobConfig |
| ✨ Novelty Generator | Generate creative, surprising outputs (e.g., ASCII art). | LocalJobConfig |
| ∿ Sine Approx Headless | Evolve a bounded sine approximation using Headless subscription-backed mutation calls. | LocalJobConfig |

## `shinka` Run with Python API 🐍

[https://github.com/sakanaai/shinkaevolve#shinka-run-with-python-api-](https://github.com/sakanaai/shinkaevolve#shinka-run-with-python-api-)

For the simplest setup with default settings, you only need to specify the evaluation program:

```
from shinka.core import ShinkaEvolveRunner, EvolutionConfig
from shinka.database import DatabaseConfig
from shinka.launch import LocalJobConfig, SlurmCondaJobConfig, SlurmDockerJobConfig

# Minimal - only specify what's required
job_conf = LocalJobConfig(eval_program_path="evaluate.py")
# Or source a uv/venv environment per job:
# job_conf = LocalJobConfig(
#     eval_program_path="evaluate.py",
#     activate_script=".venv/bin/activate",
# )
# Or run evaluations on SLURM:
# job_conf = SlurmCondaJobConfig(
#     eval_program_path="evaluate.py",
#     partition="gpu",
#     time="01:00:00",
#     cpus=1,
#     gpus=1,
#     mem="8G",
#     conda_env="shinka",
# )
# Or run evaluations in a Docker container on SLURM:
# job_conf = SlurmDockerJobConfig(
#     eval_program_path="evaluate.py",
#     image="ubuntu:latest",
#     partition="gpu",
#     time="01:00:00",
#     cpus=1,
#     gpus=1,
#     mem="8G",
# )
db_conf = DatabaseConfig()
evo_conf = EvolutionConfig(init_program_path="initial.py")

runner = ShinkaEvolveRunner(
    evo_config=evo_conf,
    job_config=job_conf,
    db_config=db_conf,
    max_evaluation_jobs=2,
    max_proposal_jobs=3,  # modest oversubscription when proposal generation is slower than eval
    max_db_workers=4,
)
runner.run()
```

**EvolutionConfig Parameters** (click to expand)

Class defaults below come from `shinka/core/config.py` (`EvolutionConfig`). Hydra presets and CLI overrides can replace these values. Concurrency lives on `ShinkaEvolveRunner` via `max_evaluation_jobs`, `max_proposal_jobs`, and `max_db_workers`; the shared Hydra async launch path currently defaults to `4/6/2` for evaluation/proposal/DB workers.

| Key | Default Value | Type | Explanation |
|---|---|---|---|
| task_sys_msg | "You are an expert optimization and algorithm design assistant. Improve the program while preserving correctness and immutable regions." | Optional[str] | System message describing the optimization task |
| patch_types | ["diff", "full", "cross"] | List[str] | Types of patches to generate: "diff", "full", "cross" |
| patch_type_probs | [0.6, 0.3, 0.1] | List[float] | Probabilities for each patch type |
| num_generations | 50 | int | Number of evolution generations to run |
| max_patch_resamples | 3 | int | Max times to resample a patch if it fails |
| max_patch_attempts | 1 | int | Max attempts to generate a valid patch |
| job_type | "local" | str | Job execution type: "local", "slurm_docker", "slurm_conda" |
| language | "python" | str | Programming language for evolution |
| llm_models | ["gpt-5-mini", "gemini-3-flash-preview", "gemini-3.1-pro-preview", "gpt-5.4"] | List[str] | List of LLM models for code generation |
| llm_dynamic_selection | "ucb" | Optional[Union[str, BanditBase]] | Dynamic model selection strategy |
| llm_dynamic_selection_kwargs | {"cost_aware_coef": 0.5} | dict | Kwargs for dynamic selection |
| llm_kwargs | {"temperatures": [0.0, 0.5, 1.0], "max_tokens": 16384} | dict | Additional kwargs for LLM calls |
| meta_rec_interval | 10 | Optional[int] | Interval for meta-recommendations |
| meta_llm_models | None | Optional[List[str]] | LLM models for meta-recommendations |
| meta_llm_kwargs | {} | dict | Kwargs for meta-recommendation LLMs |
| meta_max_recommendations | 5 | int | Max number of meta-recommendations |
| sample_single_meta_rec | True | bool | Sample a single recommendation from meta output when enabled |
| embedding_model | "text-embedding-3-small" | Optional[str] | Model for code embeddings. Also accepts local/<model>@http(s)://host[:port]/v1 for local OpenAI-compatible embedding servers, with optional ?api_key_env=ENV_VAR for per-model credentials. |
| init_program_path | "initial.py" | Optional[str] | Path to initial program to evolve |
| results_dir | None | Optional[str] | Directory to save results (auto-generated if None) |
| max_novelty_attempts | 3 | int | Max attempts for novelty generation |
| code_embed_sim_threshold | 0.99 | float | Similarity threshold for code embeddings |
| novelty_llm_models | None | Optional[List[str]] | LLM models for novelty judgment |
| novelty_llm_kwargs | {} | dict | Kwargs for novelty LLMs |
| use_text_feedback | False | bool | Whether to use text feedback in evolution |
| max_api_costs | None | Optional[float] | Total API budget cap (USD); async runner stops new proposals at cap |
| enable_controlled_oversubscription | False | bool | Enable bounded proposal oversubscription when proposal generation is slower than evaluation. |
| proposal_target_mode | 'adaptive' | str | Proposal target controller mode (adaptive or fixed). |
| proposal_target_min_samples | 5 | int | Minimum completed timing samples before adaptive targeting activates. |
| proposal_target_ratio_cap | 2.0 | float | Maximum sampling/evaluation ratio used by the adaptive controller. |
| proposal_buffer_max | 2 | int | Maximum extra proposal jobs beyond evaluation concurrency. |
| proposal_target_hard_cap | None | Optional[int] | Absolute cap for the adaptive proposal target. |
| proposal_target_ewma_alpha | 0.3 | float | EWMA smoothing factor for proposal/evaluation timing estimates. |
| inspiration_sort_order | "ascending" | str | Inspiration ordering ("ascending", "chronological", "none") |
| evolve_prompts | False | bool | Enable meta-prompt evolution loop |
| prompt_patch_types | ["diff", "full"] | List[str] | Patch formats used for prompt evolution |
| prompt_patch_type_probs | [0.7, 0.3] | List[float] | Sampling probabilities for prompt patch formats |
| prompt_evolution_interval | None | Optional[int] | Prompt-evolution cadence in generations (None disables periodic updates) |
| prompt_archive_size | 10 | int | Size of system-prompt archive |
| prompt_llm_models | None | Optional[List[str]] | LLM models for prompt evolution (None falls back to llm_models) |
| prompt_llm_kwargs | {} | dict | Extra kwargs for prompt-evolution LLM calls |
| prompt_ucb_exploration_constant | 1.0 | float | UCB exploration constant for prompt sampling |
| prompt_epsilon | 0.1 | float | Epsilon-greedy exploration probability for prompt sampling |
| prompt_evo_top_k_programs | 3 | int | Number of top programs used as context in prompt evolution |
| prompt_percentile_recompute_interval | 20 | int | Generations between prompt percentile recomputations |

**DatabaseConfig Parameters** (click to expand)

Class defaults below come from `shinka/database/dbase.py` (`DatabaseConfig`). Hydra presets and CLI overrides can replace these values.

| Key | Default Value | Type | Explanation |
|---|---|---|---|
| db_path | None | Optional[str] | Database file path (auto-generated if None) |
| num_islands | 2 | int | Number of evolution islands for diversity |
| archive_size | 40 | int | Global archive size cap |
| elite_selection_ratio | 0.3 | float | Proportion of elite programs for inspiration |
| num_archive_inspirations | 1 | int | Number of archive programs to use as inspiration |
| num_top_k_inspirations | 1 | int | Number of top-k programs for inspiration |
| migration_interval | 10 | int | Generations between island migrations |
| migration_rate | 0.0 | float | Proportion of island population to migrate |
| island_elitism | True | bool | Keep best programs on their original islands |
| enforce_island_separation | True | bool | Enforce full separation between islands |
| island_selection_strategy | "uniform" | str | Island sampler ("uniform", "equal", "proportional", "weighted") |
| enable_dynamic_islands | False | bool | Enable stagnation-triggered island spawning |
| stagnation_threshold | 100 | int | Generations without improvement before spawning a new island |
| island_spawn_strategy | "initial" | str | New-island seed strategy ("initial", "best", "archive_random") |
| island_spawn_subtree_size | 1 | int | Number of programs copied when spawning an island |
| parent_selection_strategy | "weighted" | str | Parent selection: "weighted", "power_law", "beam_search" |
| exploitation_alpha | 1.0 | float | Power-law exponent (0=uniform, 1=power-law) |
| exploitation_ratio | 0.2 | float | Chance to pick parent from archive |
| parent_selection_lambda | 10.0 | float | Sharpness of sigmoid for weighted selection |
| num_beams | 5 | int | Number of beams for beam search selection |
| archive_selection_strategy | "fitness" | str | Archive replacement strategy ("fitness" or "crowding") |
| archive_criteria | {"combined_score": 1.0} | Dict[str, float] | Weighted ranking criteria used by fitness archive updates |
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

