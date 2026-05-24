---
repo: pgg3/l-autoda
url: https://github.com/pgg3/l-autoda
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - pgg3/L-AutoDA · GitHub

**Source**: https://github.com/pgg3/l-autoda

---

[Skip to content](https://github.com/pgg3/l-autoda#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[pgg3](https://github.com/pgg3)

/
**[L-AutoDA](https://github.com/pgg3/L-AutoDA)**

Public

- [Notifications](https://github.com/login?return_to=%2Fpgg3%2FL-AutoDA)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fpgg3%2FL-AutoDA)
- 
[Star
          3](https://github.com/login?return_to=%2Fpgg3%2FL-AutoDA)

[https://github.com/pgg3/L-AutoDA](https://github.com/pgg3/L-AutoDA)

[Branches](https://github.com/pgg3/L-AutoDA/branches)[Tags](https://github.com/pgg3/L-AutoDA/tags)

[https://github.com/pgg3/L-AutoDA/branches](https://github.com/pgg3/L-AutoDA/branches)[https://github.com/pgg3/L-AutoDA/tags](https://github.com/pgg3/L-AutoDA/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History8 Commits8 Commits |  |  |  |
| configs/data_cfgs | configs/data_cfgs |  |  |
| core | core |  |  |
| .gitignore | .gitignore |  |  |
| README.MD | README.MD |  |  |
| pyproject.toml | pyproject.toml |  |  |
| run.py | run.py |  |  |
| run_attack.py | run_attack.py |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# L-AutoDA

[https://github.com/pgg3/l-autoda#l-autoda](https://github.com/pgg3/l-autoda#l-autoda)

**L-AutoDA: Large Language Models for Automatically Evolving Decision-based Adversarial Attacks**

This is the official code repository for the GECCO '24 Companion paper. L-AutoDA uses [EvoToolkit](https://github.com/pgg3/evotoolkit) to automatically evolve decision-based adversarial attack algorithms via LLM-driven evolutionary search.

> The original standalone implementation is preserved on the [v1](https://github.com/pgg3/L-AutoDA/tree/v1) branch.

## Installation

[https://github.com/pgg3/l-autoda#installation](https://github.com/pgg3/l-autoda#installation)

Requires Python >= 3.11. Install [uv](https://docs.astral.sh/uv/) if not already available:

```
pip install uv
```

Install all dependencies (PyTorch cu128 is resolved automatically):

```
uv sync
```

## Usage

[https://github.com/pgg3/l-autoda#usage](https://github.com/pgg3/l-autoda#usage)

### Run standalone attacks (no LLM)

[https://github.com/pgg3/l-autoda#run-standalone-attacks-no-llm](https://github.com/pgg3/l-autoda#run-standalone-attacks-no-llm)

```
uv run python run_attack.py --dataset cifar10 --model Standard --atk_type L2 --atk_budget 1000
```

### Run EvoEngineer to discover attack heuristics

[https://github.com/pgg3/l-autoda#run-evoengineer-to-discover-attack-heuristics](https://github.com/pgg3/l-autoda#run-evoengineer-to-discover-attack-heuristics)

```
uv run python run.py \
  --api_url https://api.openai.com/v1/chat/completions \
  --api_key YOUR_API_KEY \
  --llm_model gpt-3.5-turbo \
  --dataset cifar10 \
  --atk_step 300 \
  --pop_size 5 \
  --max_generations 10 \
  --output_path ./results
```

You can also configure the LLM endpoint via a `.env` file:

```
API_URL=https://api.openai.com/v1/chat/completions
API_KEY=your-api-key
MODEL=gpt-3.5-turbo
```

## Citation

[https://github.com/pgg3/l-autoda#citation](https://github.com/pgg3/l-autoda#citation)

If you find this work useful, please cite our paper:

```
@inproceedings{ping2024lautoda,
  author    = {Guo, Ping and Liu, Fei and Lin, Xi and Zhao, Qingchuan and Zhang, Qingfu},
  title     = {L-AutoDA: Large Language Models for Automatically Evolving Decision-based Adversarial Attacks},
  year      = {2024},
  isbn      = {9798400704956},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  url       = {https://doi.org/10.1145/3638530.3664121},
  doi       = {10.1145/3638530.3664121},
  booktitle = {Proceedings of the Genetic and Evolutionary Computation Conference Companion},
  pages     = {1846--1854},
  numpages  = {9},
  keywords  = {large language models, adversarial attacks, automated algorithm design, evolutionary algorithms},
  location  = {Melbourne, VIC, Australia},
  series    = {GECCO '24 Companion}
}
```

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/pgg3/l-autoda#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/pgg3/L-AutoDA/activity)

### Stars

[3
        stars](https://github.com/pgg3/L-AutoDA/stargazers)

### Watchers

[1
        watching](https://github.com/pgg3/L-AutoDA/watchers)

### Forks

[0
        forks](https://github.com/pgg3/L-AutoDA/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fpgg3%2FL-AutoDA&report=pgg3+%28user%29)

## [Releases](https://github.com/pgg3/L-AutoDA/releases)

No releases published

## [Packages
      0](https://github.com/users/pgg3/packages?repo_name=L-AutoDA)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/pgg3/L-AutoDA/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/pgg3/L-AutoDA/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

