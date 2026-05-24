---
repo: memtensor/memrl
url: https://github.com/memtensor/memrl
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - MemTensor/MemRL: Paper: “MEMRL: SELF-EVOLVING AGENTS VIA RUNTIME REINFORCEMENT LEARNING ON EPISODIC MEMORY” Open-Source Code · GitHub

**Source**: https://github.com/memtensor/memrl

---

[Skip to content](https://github.com/memtensor/memrl#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[MemTensor](https://github.com/MemTensor)

/
**[MemRL](https://github.com/MemTensor/MemRL)**

Public

- [Notifications](https://github.com/login?return_to=%2FMemTensor%2FMemRL)You must be signed in to change notification settings
- [Fork
    10](https://github.com/login?return_to=%2FMemTensor%2FMemRL)
- 
[Star
          118](https://github.com/login?return_to=%2FMemTensor%2FMemRL)

[https://github.com/MemTensor/MemRL](https://github.com/MemTensor/MemRL)

[Branches](https://github.com/MemTensor/MemRL/branches)[Tags](https://github.com/MemTensor/MemRL/tags)

[https://github.com/MemTensor/MemRL/branches](https://github.com/MemTensor/MemRL/branches)[https://github.com/MemTensor/MemRL/tags](https://github.com/MemTensor/MemRL/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History76 Commits76 Commits |  |  |  |
| 3rdparty | 3rdparty |  |  |
| configs | configs |  |  |
| data | data |  |  |
| memrl | memrl |  |  |
| openspec | openspec |  |  |
| run | run |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| framework_overview.pdf | framework_overview.pdf |  |  |
| framework_overview.png | framework_overview.png |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# MemRL: Self-Evolving Agents via Runtime Reinforcement Learning on Episodic Memory

[https://github.com/memtensor/memrl#memrl-self-evolving-agents-via-runtime-reinforcement-learning-on-episodic-memory](https://github.com/memtensor/memrl#memrl-self-evolving-agents-via-runtime-reinforcement-learning-on-episodic-memory)

Official code release for the paper:

[MemRL: Self-Evolving Agents via Runtime Reinforcement Learning on Episodic Memory](https://arxiv.org/abs/2601.03192)

## Abstract

[https://github.com/memtensor/memrl#abstract](https://github.com/memtensor/memrl#abstract)

The hallmark of human intelligence is the self-evolving ability to master new skills by learning from past experiences. However, current AI agents struggle to emulate this self-evolution: fine-tuning is computationally expensive and prone to catastrophic forgetting, while existing memory-based methods rely on passive semantic matching that often retrieves noise. To address these challenges, we propose **MemRL**, a non-parametric approach that evolves via reinforcement learning on episodic memory. By decoupling stable reasoning from plastic memory, **MemRL** employs a Two-Phase Retrieval mechanism to filter noise and identify high-utility strategies through environmental feedback. Extensive experiments on **HLE**, **BigCodeBench**, **ALFWorld**, and **Lifelong Agent Bench** demonstrate that **MemRL** significantly outperforms state-of-the-art baselines, confirming that **MemRL** effectively reconciles the stability-plasticity dilemma, enabling continuous runtime improvement without weight updates.

## Framework Overview

[https://github.com/memtensor/memrl#framework-overview](https://github.com/memtensor/memrl#framework-overview)

Click to open the PDF:

[https://github.com/MemTensor/MemRL/blob/main/framework_overview.pdf](https://github.com/MemTensor/MemRL/blob/main/framework_overview.pdf)

Files:

- `framework_overview.png` (preview)
- `framework_overview.pdf` (vector)

## Installation

[https://github.com/memtensor/memrl#installation](https://github.com/memtensor/memrl#installation)

This repo is a Python package under the **`memrl`** namespace.

Install MemRL plus the dependencies needed to run all 4 benchmark entrypoints under `run/`.

```
conda create -n memoryrl python=3.10 -y

conda activate memoryrl

pip install -U pip

pip install -r requirements.txt
```

### API keys / endpoints

[https://github.com/memtensor/memrl#api-keys--endpoints](https://github.com/memtensor/memrl#api-keys--endpoints)

All benchmarks read LLM + embedding settings from YAML configs under `configs/`. Before running, set at least:

- `llm.api_key`
- `embedding.api_key`
- (optional) `llm.base_url` / `embedding.base_url` for OpenAI-compatible endpoints (vLLM, etc.)

Example configs:

- `configs/rl_bcb_config.yaml` (BigCodeBench)
- `configs/rl_llb_config.yaml` (Lifelong Agent Bench)
- `configs/rl_alf_config.yaml` (ALFWorld)
- `configs/rl_hle_config.yaml` (HLE)

## Running the 4 Benchmarks

[https://github.com/memtensor/memrl#running-the-4-benchmarks](https://github.com/memtensor/memrl#running-the-4-benchmarks)

All runners write logs under `logs/` and results under `results/` (configurable via `experiment.output_dir`).

### 1) HLE

[https://github.com/memtensor/memrl#1-hle](https://github.com/memtensor/memrl#1-hle)

Run:

```
python run/run_hle.py \
  --config configs/rl_hle_config.yaml \
  --train /path/to/hle_train.parquet \
```

Notes:

- The runner accepts `--categories` and `--category_ratio` for category filtering/sampling.
- Data can be found at [HLE](https://huggingface.co/datasets/cais/hle).
- `--judge_model` controls an optional separate judge LLM. We choose GPT-4o to align with [artificialanalysis](https://artificialanalysis.ai/evaluations/humanitys-last-exam).

### 2) ALFWorld

[https://github.com/memtensor/memrl#2-alfworld](https://github.com/memtensor/memrl#2-alfworld)

Run:

```
python run/run_alfworld.py --config configs/rl_alf_config.yaml
```

Important notes:

- You must install ALFWorld and prepare its data according to the [ALFWorld](https://github.com/alfworld/alfworld) setup.
- This repo expects an ALFWorld environment config at: `configs/envs/alfworld.yaml` (Provided).
- Few-shot examples are expected at `data/alfworld/alfworld_examples.json` (Provided, same as [ReAct](https://github.com/ysymyth/ReAct)) (configurable via `experiment.few_shot_path`).

### 3) Lifelong Agent Bench (LLB / LifelongAgentBench)

[https://github.com/memtensor/memrl#3-lifelong-agent-bench-llb--lifelongagentbench](https://github.com/memtensor/memrl#3-lifelong-agent-bench-llb--lifelongagentbench)

This repo vendors LifelongAgentBench under `3rdparty/LifelongAgentBench` and runs it through `memrl/run/llb_rl_runner.py`.

Docker setup:

- LLB tasks (`db` / `os`) require Docker environments. Please follow the Docker deployment instructions at [LifelongAgentBench](https://github.com/caixd-220529/LifelongAgentBench) to build and start the required containers before running.

Quick start:

1. Edit `configs/rl_llb_config.local.yaml` if it exists (preferred by `run/run_llb.py`); otherwise edit `configs/rl_llb_config.yaml`: 
  - set `llm.api_key` / `embedding.api_key`
  - set `experiment.task` (`db` | `os`) (also accepts `db_bench` / `os_interaction`)
  - set `experiment.split_file` (and optional `experiment.valid_file`)

2. Run:

```
python run/run_llb.py
```

Dataset:

- `experiment.split_file` / `experiment.valid_file` should point to a JSON dictionary keyed by `sample_index` (i.e., top-level is an object/dict; keys are strings like `"0"`, values are per-sample dicts).
- This repo provides LLB datasets under `data/llb/`: 
  - OSInteraction (task = `os` / `os_interaction`): 
    - `data/llb/os_interaction_data.json` (500 samples)
    - `data/llb/os_interaction_train.json` (350 samples)
    - `data/llb/os_interaction_val.json` (150 samples)

  - DBBench (task = `db` / `db_bench`): 
    - `data/llb/db_bench_data.json` (500 samples)
    - `data/llb/db_train.json` (361 samples)
    - `data/llb/db_val.json` (139 samples)

Note:

- This open-source release currently supports LLB tasks: `db` and `os` (no `kg`).

Optional tracing (LLB):

- `configs/rl_llb_config.yaml` includes `experiment.trace_jsonl_path`.
- You can also control tracing with environment variables (see `memrl/trace/llb_jsonl.py`).

### 4) BigCodeBench (BCB)

[https://github.com/memtensor/memrl#4-bigcodebench-bcb](https://github.com/memtensor/memrl#4-bigcodebench-bcb)

Run multi-epoch BCB memory benchmark:

```
python run/run_bcb.py \
  --config configs/rl_bcb_config.yaml \
  --split instruct \
  --epochs 10
```

Dataset:

- Default path: `data/bigcodebench/bigcodebench_{hard|full}.jsonl`
- Override with: `--data_path /path/to/bigcodebench_hard.jsonl`

If the JSONL is missing, the runner prints an actionable download command (via `datasets`).

Splits:

- Default: `configs/bigcodebench/splits/{hard_seed42|full_seed123}.json`
- Override with: `--split_file /path/to/split.json`

Notes:

- BigCodeBench evaluation uses the vendored repo under `3rdparty/bigcodebench-main`.
- Default subset is `full`. Use `--subset hard` for the smaller hard subset.
- Retrieval threshold: use `--retrieve_threshold` to override; otherwise it falls back to `rl_config.sim_threshold` (then `rl_config.tau`).
- TensorBoard (optional): BCB writes scalars under `logs/tensorboard/` when TensorBoard support is available. View with: 

```
tensorboard --logdir logs/tensorboard
```

## Troubleshooting

[https://github.com/memtensor/memrl#troubleshooting](https://github.com/memtensor/memrl#troubleshooting)

### ImportError: `CXXABI_1.3.15` not found (often mentions `libstdc++.so.6` / `libicui18n.so`)

[https://github.com/memtensor/memrl#importerror-cxxabi_1315-not-found-often-mentions-libstdcso6--libicui18nso](https://github.com/memtensor/memrl#importerror-cxxabi_1315-not-found-often-mentions-libstdcso6--libicui18nso)

On some hosts, the dynamic loader may forcibly preload an old system `libstdc++.so.6` (e.g. via `/etc/ld.so.preload`), which can break `import sqlite3` in a conda environment (and therefore MemOS / SQLAlchemy initialization).

Workaround (run **after** activating your conda environment, before running any `run/run_*.py`):

```
export LD_PRELOAD="$CONDA_PREFIX/lib/libstdc++.so.6${LD_PRELOAD:+:$LD_PRELOAD}"
python -c "import sqlite3; print('sqlite ok')"
```

If you have root access, you can also inspect the host preload configuration:

```
cat /etc/ld.so.preload
```

## Project Layout

[https://github.com/memtensor/memrl#project-layout](https://github.com/memtensor/memrl#project-layout)

- `memrl/`: main library code (MemoryService, runners, providers, tracing)
- `run/`: benchmark entrypoints (`run_bcb.py`, `run_llb.py`, `run_alfworld.py`, `run_hle.py`)
- `configs/`: benchmark configs
- `3rdparty/`: vendored benchmark repos (BigCodeBench, LifelongAgentBench)

## Citation

[https://github.com/memtensor/memrl#citation](https://github.com/memtensor/memrl#citation)

If you use MemRL in your research, please cite our paper:

```
@misc{zhang2026memrlselfevolvingagentsruntime,
  title         = {MemRL: Self-Evolving Agents via Runtime Reinforcement Learning on Episodic Memory},
  author        = {Shengtao Zhang and Jiaqian Wang and Ruiwen Zhou and Junwei Liao and Yuchen Feng and Zhuo Li and Yujie Zheng and Weinan Zhang and Ying Wen and Zhiyu Li and Feiyu Xiong and Yutao Qi and Bo Tang and Muning Wen},
  year          = {2026},
  eprint        = {2601.03192},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CL},
}
```

## About

         Paper: “MEMRL: SELF-EVOLVING AGENTS VIA RUNTIME REINFORCEMENT LEARNING ON EPISODIC MEMORY” Open-Source Code       

[arxiv.org/abs/2601.03192](https://arxiv.org/abs/2601.03192)
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata


## 2026-05-24 promotion note

- Existing raw capture promoted into classification, public project data, and model-card coverage during the hourly metadata loop.
- Web-observed refresh: 117 stars, 10 forks, 76 commits, MIT license, Python primary language; local GitHub API freshness remained blocked by DNS and invalid gh token.
