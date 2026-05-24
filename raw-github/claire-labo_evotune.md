---
repo: claire-labo/evotune
url: https://github.com/claire-labo/evotune
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - CLAIRE-Labo/EvoTune: Efficiently discovering algorithms via LLMs with evolutionary search and reinforcement learning. · GitHub

**Source**: https://github.com/claire-labo/evotune

---

[Skip to content](https://github.com/claire-labo/evotune#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[CLAIRE-Labo](https://github.com/CLAIRE-Labo)

/
**[EvoTune](https://github.com/CLAIRE-Labo/EvoTune)**

Public

- [Notifications](https://github.com/login?return_to=%2FCLAIRE-Labo%2FEvoTune)You must be signed in to change notification settings
- [Fork
    11](https://github.com/login?return_to=%2FCLAIRE-Labo%2FEvoTune)
- 
[Star
          137](https://github.com/login?return_to=%2FCLAIRE-Labo%2FEvoTune)

[https://github.com/CLAIRE-Labo/EvoTune](https://github.com/CLAIRE-Labo/EvoTune)

[Branches](https://github.com/CLAIRE-Labo/EvoTune/branches)[Tags](https://github.com/CLAIRE-Labo/EvoTune/tags)

[https://github.com/CLAIRE-Labo/EvoTune/branches](https://github.com/CLAIRE-Labo/EvoTune/branches)[https://github.com/CLAIRE-Labo/EvoTune/tags](https://github.com/CLAIRE-Labo/EvoTune/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History8 Commits8 Commits |  |  |  |
| configs | configs |  |  |
| data | data |  |  |
| installation | installation |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# Algorithm Discovery With LLMs: Evolutionary Search Meets Reinforcement Learning

[https://github.com/claire-labo/evotune#algorithm-discovery-with-llms-evolutionary-search-meets-reinforcement-learning](https://github.com/claire-labo/evotune#algorithm-discovery-with-llms-evolutionary-search-meets-reinforcement-learning)

[https://arxiv.org/abs/2504.05108](https://arxiv.org/abs/2504.05108)[https://github.com/CLAIRE-Labo/EvoTune/blob/main/LICENSE](https://github.com/CLAIRE-Labo/EvoTune/blob/main/LICENSE)

## Overview

[https://github.com/claire-labo/evotune#overview](https://github.com/claire-labo/evotune#overview)

**EvoTune** is a framework for discovering new algorithms by combining:

1. Evolutionary search over LLM-generated Python programs, and
2. Reinforcement Learning to fine-tune the search operator - the LLM - based on performance scores of discovered algorithms .

## Repo Structure

[https://github.com/claire-labo/evotune#repo-structure](https://github.com/claire-labo/evotune#repo-structure)

The core codebase lives under `src/` and is organized as follows:

```
evotune/
├── configs/                  # Hydra-based config system
│   ├── accelerate_config/    # Accelerate configs
│   ├── cluster/              # SLURM / cluster overrides
│   ├── model/                # Model-specific settings
│   ├── sweep/                # Sweep configuration files
│   ├── task/                 # Per-task configs (e.g., bin, tsp, etc.)
│   ├── train/                # Training configuration
│   └── config.yaml           # Default config
├── data/                     # TSP and flatpack datasets
├── installation/             # Dockerfiles for various hardware
├── scripts/                  # Example launch scripts for sweeps
│   ├── run_eval_sweep_example.sh
│   └── run_train_sweep_example.sh
├── src/
|   ├── packing/              # Core EvoTune framework
|   │   ├── evaluate/         # Task-specific logic (registered via registry)
|   │   │   ├── bin_packing/
|   │   │   ├── flat_pack/
|   │   │   ├── tsp/
|   │   │   ├── registry.py   # Task registry
|   │   │   └── README.md     # How to add new tasks
|   │   ├── funsearch/        # Program database implementation
|   │   ├── logging/          # Logging, statistics, and function tracking
|   │   ├── model/            # Prompting, LLM I/O, inference engine setup
|   │   ├── parallel/         # Multiprocessing producers & consumers
|   │   ├── train/            # DPO pipelines for fine-tuning LLMs
|   │   └── utils/            # Seeding, function helpers, etc.
|   └──  experiments/         # Scripts for specific experiments (train / eval)
├── pyproject.toml
└── LICENSE
```

## Setup & Dependencies

[https://github.com/claire-labo/evotune#setup--dependencies](https://github.com/claire-labo/evotune#setup--dependencies)

To create the Python environment for running experiments, use one of the provided **Dockerfiles** that matches your machine architecture and desired inference backend:

```
installation/
├── docker-amd64-cuda-tgi/   # For x86_64 machines using TGI
├── docker-amd64-cuda-vllm/  # For x86_64 machines using vLLM
└── docker-arm64-cuda/       # For ARM64 machines using vLLM
```

> Most experiments for the paper were run using **A100 GPUs (80GB)**.

## How to Run the Code

[https://github.com/claire-labo/evotune#how-to-run-the-code](https://github.com/claire-labo/evotune#how-to-run-the-code)

### Single Runs

[https://github.com/claire-labo/evotune#single-runs](https://github.com/claire-labo/evotune#single-runs)

The two main entry points are located in:

```
src/experiments/
├── main.py   # For running training with evolution + finetuning
├── eval.py   # For evaluating saved programbanks
```

### Sweep Runs

[https://github.com/claire-labo/evotune#sweep-runs](https://github.com/claire-labo/evotune#sweep-runs)

We provide example sweep scripts in the `scripts/` folder:

```
scripts/
├── run_eval_sweep_example.sh
├── run_train_sweep_example.sh
```

These are designed to be used with job schedulers like SLURM or RunAI. To use them:

1. Fill in the `# TODO` block in each script with your cluster submission logic.
2. Configure the sweep/grid settings in the appropriate `configs/sweep/` and `configs/cluster/` YAML files.
3. Launch your sweep using the modified script.

> You can also run sweeps locally by adapting these scripts, just remove the SLURM logic.

### Notes

[https://github.com/claire-labo/evotune#notes](https://github.com/claire-labo/evotune#notes)

As the project evolved, so did the code. We are open-sourcing the latest version as it is easier to work with after a round of refactoring and other minor updates (for example, improved extraction of functions from LLM outputs). These changes may introduce small discrepancies in the results. In the paper, the bin packing and traveling salesman problem results were generated with the TGI inference engine, whereas the Flatpack, Hash Code, and LLM-SR experiments used vLLM. We added vLLM support to simplify running the code on clusters with ARM64 architecture.

## Adding a New Task

[https://github.com/claire-labo/evotune#adding-a-new-task](https://github.com/claire-labo/evotune#adding-a-new-task)

To add your own task:

👉 Navigate to:

`src/packing/evaluate/README.md`

You’ll find instructions for implementing and registering a new task with following components:

- `generate_input`
- `evaluate_func`
- `get_initial_func`
- `system_prompt` / `append_prompt`

### Citation

[https://github.com/claire-labo/evotune#citation](https://github.com/claire-labo/evotune#citation)

```
@inproceedings{surina2025algorithm,
title={Algorithm Discovery With LLMs: Evolutionary Search Meets Reinforcement Learning},
author={Anja Surina and Amin Mansouri and Lars C.P.M. Quaedvlieg and Amal Seddas and Maryna Viazovska and Emmanuel Abbe and Caglar Gulcehre},
booktitle={Second Conference on Language Modeling},
year={2025},
}
```

## About

         Efficiently discovering algorithms via LLMs with evolutionary search and reinforcement learning.       

[claire-labo.github.io/EvoTune/](https://claire-labo.github.io/EvoTune/)

### Topics

[reinforcement-learning](https://github.com/topics/reinforcement-learning)[combinatorial-optimization](https://github.com/topics/combinatorial-optimization)[evolutionary-search](https://github.com/topics/evolutionary-search)[large-language-models](https://github.com/topics/large-language-models)[llm](https://github.com/topics/llm)[algorithm-discovery](https://github.com/topics/algorithm-discovery)

### Resources

[Readme](https://github.com/claire-labo/evotune#readme-ov-file)

### License

[MIT license](https://github.com/claire-labo/evotune#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/CLAIRE-Labo/EvoTune/activity)

[Custom properties](https://github.com/CLAIRE-Labo/EvoTune/custom-properties)

### Stars

[137
        stars](https://github.com/CLAIRE-Labo/EvoTune/stargazers)

### Watchers

[7
        watching](https://github.com/CLAIRE-Labo/EvoTune/watchers)

### Forks

[11
        forks](https://github.com/CLAIRE-Labo/EvoTune/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FCLAIRE-Labo%2FEvoTune&report=CLAIRE-Labo+%28user%29)

## [Releases](https://github.com/CLAIRE-Labo/EvoTune/releases)

No releases published

## [Packages
      0](https://github.com/orgs/CLAIRE-Labo/packages?repo_name=EvoTune)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/CLAIRE-Labo/EvoTune/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          83.4%](https://github.com/CLAIRE-Labo/EvoTune/search?l=python)
- [Shell
          12.9%](https://github.com/CLAIRE-Labo/EvoTune/search?l=shell)
- [Dockerfile
          3.7%](https://github.com/CLAIRE-Labo/EvoTune/search?l=dockerfile)

     You can’t perform that action at this time.
