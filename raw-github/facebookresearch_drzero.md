---
repo: facebookresearch/drzero
url: https://github.com/facebookresearch/drzero
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - facebookresearch/drzero: Dr. Zero Self-Evolving Search Agents without Training Data · GitHub

**Source**: https://github.com/facebookresearch/drzero

---

[Skip to content](https://github.com/facebookresearch/drzero#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[facebookresearch](https://github.com/facebookresearch)

/
**[drzero](https://github.com/facebookresearch/drzero)**

Public

- [Notifications](https://github.com/login?return_to=%2Ffacebookresearch%2Fdrzero)You must be signed in to change notification settings
- [Fork
    64](https://github.com/login?return_to=%2Ffacebookresearch%2Fdrzero)
- 
[Star
          515](https://github.com/login?return_to=%2Ffacebookresearch%2Fdrzero)

[https://github.com/facebookresearch/drzero](https://github.com/facebookresearch/drzero)

[Branches](https://github.com/facebookresearch/drzero/branches)[Tags](https://github.com/facebookresearch/drzero/tags)

[https://github.com/facebookresearch/drzero/branches](https://github.com/facebookresearch/drzero/branches)[https://github.com/facebookresearch/drzero/tags](https://github.com/facebookresearch/drzero/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7 Commits7 Commits |  |  |  |
| config | config |  |  |
| scripts | scripts |  |  |
| search | search |  |  |
| verl | verl |  |  |
| .gitignore | .gitignore |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE.md | LICENSE.md |  |  |
| README.md | README.md |  |  |
| convert.sh | convert.sh |  |  |
| iter1_challenger.sh | iter1_challenger.sh |  |  |
| iter1_gen_data.sh | iter1_gen_data.sh |  |  |
| iter1_solver.sh | iter1_solver.sh |  |  |
| iter2_challenger.sh | iter2_challenger.sh |  |  |
| iter2_gen_data.sh | iter2_gen_data.sh |  |  |
| iter2_solver.sh | iter2_solver.sh |  |  |
| iter3_challenger.sh | iter3_challenger.sh |  |  |
| iter3_gen_data.sh | iter3_gen_data.sh |  |  |
| iter3_solver.sh | iter3_solver.sh |  |  |
| process_test.py | process_test.py |  |  |
| process_train.py | process_train.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Dr. Zero: Self-Evolving Search Agents without Training Data

[https://github.com/facebookresearch/drzero#dr-zero-self-evolving-search-agents-without-training-data](https://github.com/facebookresearch/drzero#dr-zero-self-evolving-search-agents-without-training-data)

[https://arxiv.org/abs/2601.07055](https://arxiv.org/abs/2601.07055)[https://www.python.org/downloads/](https://www.python.org/downloads/)

This repository contains the code for [Dr. Zero: Self-Evolving Search Agents without Training Data](https://arxiv.org/abs/2601.07055). In this work, we introduce Dr. Zero, a framework enabling search agents to effectively self-evolve without any training data. In particular, we design a self-evolution feedback loop where a proposer generates diverse questions to train a solver initialized from the same base model. As the solver evolves, it incentivizes the proposer to produce increasingly difficult yet solvable tasks, thus establishing an automated curriculum to refine both agents. To enhance training efficiency, we also introduce hop-grouped relative policy optimization (HRPO). This method clusters structurally similar questions to construct group-level baselines, effectively minimizing the sampling overhead in evaluating each query's individual difficulty and solvability. Consequently, HRPO significantly reduces the compute requirements for solver training without compromising performance or stability. Extensive experiment results demonstrate that the data-free Dr. Zero matches or surpasses fully supervised search agents, proving that complex reasoning and search capabilities can emerge solely through self-evolution.

## 🚀 Overview

[https://github.com/facebookresearch/drzero#-overview](https://github.com/facebookresearch/drzero#-overview)

The core idea is to bootstrap a search agent from a base model (e.g., Qwen or Llama) via iterative self-evolution: the agent synthesizes tasks and then learns to solve them in a multi-turn, tool-using environment.

- **Proposer:** A question generation agent that aims to create hard yet solvable questions and thereby driving the solver improvement.
- **Solver:** The primary search agent that is trained with synthetic data from the proposer to answer challenging questions using the search tool.
- **Zero-Data Initialization:** The process starts with zero training data and relies solely on an external search engine (e.g., Wikipedia passage retriever).

[https://github.com/facebookresearch/drzero/blob/main/verl/intro.png](https://github.com/facebookresearch/drzero/blob/main/verl/intro.png)

## 🛠️ Setup & Installation

[https://github.com/facebookresearch/drzero#%EF%B8%8F-setup--installation](https://github.com/facebookresearch/drzero#%EF%B8%8F-setup--installation)

### 1. Environment

[https://github.com/facebookresearch/drzero#1-environment](https://github.com/facebookresearch/drzero#1-environment)

Ensure you have a Python environment with the necessary dependencies (PyTorch, transformers, faiss-gpu, verl==0.5.0, etc.). The rest of the dependencies can be found [here](https://github.com/volcengine/verl/blob/v0.5.0/requirements.txt) and [here](https://github.com/volcengine/verl/blob/v0.5.0/requirements_sglang.txt).

### 2. Search Engine

[https://github.com/facebookresearch/drzero#2-search-engine](https://github.com/facebookresearch/drzero#2-search-engine)

This framework relies on a local server with a retriever model. Prepare the corpus and build the index before training.

**Download & Index Corpus:** Execute the following commands to download the Wikipedia English dump and build the faiss index for the retriever (default: `intfloat/e5-base-v2`). More details can be found under the search folder and the [Search-R1 repository](https://github.com/PeterGriffinJin/Search-R1).

```
save_path=./corpus
python scripts/download.py --save_path $save_path
cat $save_path/part_* > $save_path/e5_Flat.index
gzip -d $save_path/wiki-18.jsonl.gz
```

## 🏃 Iterative Self-Evolution Workflow

[https://github.com/facebookresearch/drzero#-iterative-self-evolution-workflow](https://github.com/facebookresearch/drzero#-iterative-self-evolution-workflow)

The training process proceeds in iterations (Iter 1, Iter 2, Iter 3...). Each iteration typically consists of three phases:

### Phase 0: Initial Data Preparation

[https://github.com/facebookresearch/drzero#phase-0-initial-data-preparation](https://github.com/facebookresearch/drzero#phase-0-initial-data-preparation)

Before the first iteration, prepare the initial prompts for training and the benchmarks for evaluation.

```
python process_train.py --local_dir ./data
python process_test.py --local_dir ./data
```

### Iteration 1

[https://github.com/facebookresearch/drzero#iteration-1](https://github.com/facebookresearch/drzero#iteration-1)

**1. Train Proposer:** Train the proposer agent to generate challenging yet manageable questions for the base solver.

```
bash iter1_challenger.sh
```

**2. Synthesize Data:** Generate training data using the learnt proposer model. Parameters such as model path and sample size can be specified in the script.

```
bash iter1_gen_data.sh
```

**3. Train Solver:** Train the solver agent on the generated synthetic data using GRPO. This optimizes the solver's ability to search and reason over challenging questions.

```
bash iter1_solver.sh
```

**4. Convert Solver to HF Format:** Specify the trained model path and convert the FSDP checkpoint to the HF format. This allows the proposer to load the latest solver for reward estimation in the next training iteration.

```
bash convert.sh
```

### Subsequent Iterations (Iter 2, Iter 3...)

[https://github.com/facebookresearch/drzero#subsequent-iterations-iter-2-iter-3](https://github.com/facebookresearch/drzero#subsequent-iterations-iter-2-iter-3)

Repeat the process using the scripts for the respective iteration. The model checkpoints from the previous iteration are used as the starting point for the next. You may need to modify the iteration number and model paths in the scripts.

- `iter2_challenger.sh` -> `iter2_gen_data.sh` -> `iter2_solver.sh` -> `convert.sh`
- `iter3_challenger.sh` -> `iter3_gen_data.sh` -> `iter3_solver.sh` -> `convert.sh`

## Citation

[https://github.com/facebookresearch/drzero#citation](https://github.com/facebookresearch/drzero#citation)

If you find Dr. Zero interesting, please consider citing our paper :)

```
@article{yue2026dr,
  title={Dr. Zero: Self-Evolving Search Agents without Training Data},
  author={Yue, Zhenrui and Upasani, Kartikeya and Yang, Xianjun and Ge, Suyu and Nie, Shaoliang and Mao, Yuning and Liu, Zhe and Wang, Dong},
  journal={arXiv preprint arXiv:2601.07055},
  year={2026}
}
```

## License

[https://github.com/facebookresearch/drzero#license](https://github.com/facebookresearch/drzero#license)

The code is released under a non-commercial license. See [LICENSE](https://github.com/facebookresearch/drzero/blob/main/LICENSE.md) for more details.

## Acknowledgements

[https://github.com/facebookresearch/drzero#acknowledgements](https://github.com/facebookresearch/drzero#acknowledgements)

During the implementation we base our code mostly on [Search-R1](https://github.com/PeterGriffinJin/Search-R1) and [VeRL](https://github.com/volcengine/verl). Many thanks to these awesome authors for their great work!

## About

         Dr. Zero Self-Evolving Search Agents without Training Data       

### Resources

[Readme](https://github.com/facebookresearch/drzero#readme-ov-file)

### License

[View license](https://github.com/facebookresearch/drzero#License-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/facebookresearch/drzero#coc-ov-file)

### Contributing

[Contributing](https://github.com/facebookresearch/drzero#contributing-ov-file)

### Security policy

[Security policy](https://github.com/facebookresearch/drzero#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/facebookresearch/drzero/activity)

[Custom properties](https://github.com/facebookresearch/drzero/custom-properties)

### Stars

[515
        stars](https://github.com/facebookresearch/drzero/stargazers)

### Watchers

[4
        watching](https://github.com/facebookresearch/drzero/watchers)

### Forks

[64
        forks](https://github.com/facebookresearch/drzero/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Ffacebookresearch%2Fdrzero&report=facebookresearch+%28user%29)

## [Releases](https://github.com/facebookresearch/drzero/releases)

No releases published

## [Packages
      0](https://github.com/orgs/facebookresearch/packages?repo_name=drzero)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/facebookresearch/drzero/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.7%](https://github.com/facebookresearch/drzero/search?l=python)
- [Shell
          2.3%](https://github.com/facebookresearch/drzero/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

