---
repo: thu-nics/mars
url: https://github.com/thu-nics/mars
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - thu-nics/MARSHAL: [ICLR'26] MARSHAL: Incentivizing Multi-Agent Reasoning via Self-Play with Strategic LLMs · GitHub

**Source**: https://github.com/thu-nics/mars

---

[Skip to content](https://github.com/thu-nics/MARSHAL#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[thu-nics](https://github.com/thu-nics)

/
**[MARSHAL](https://github.com/thu-nics/MARSHAL)**

Public

- [Notifications](https://github.com/login?return_to=%2Fthu-nics%2FMARSHAL)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fthu-nics%2FMARSHAL)
- 
[Star
          48](https://github.com/login?return_to=%2Fthu-nics%2FMARSHAL)

[https://github.com/thu-nics/MARSHAL](https://github.com/thu-nics/MARSHAL)

[Branches](https://github.com/thu-nics/MARSHAL/branches)[Tags](https://github.com/thu-nics/MARSHAL/tags)

[https://github.com/thu-nics/MARSHAL/branches](https://github.com/thu-nics/MARSHAL/branches)[https://github.com/thu-nics/MARSHAL/tags](https://github.com/thu-nics/MARSHAL/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History155 Commits155 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| assets | assets |  |  |
| data | data |  |  |
| docker | docker |  |  |
| docs_roll | docs_roll |  |  |
| examples | examples |  |  |
| mcore_adapter | mcore_adapter |  |  |
| roll | roll |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| LICENSE | LICENSE |  |  |
| MANIFEST.in | MANIFEST.in |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| model_convert.sh | model_convert.sh |  |  |
| playground.ipynb | playground.ipynb |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements_common.txt | requirements_common.txt |  |  |
| requirements_torch251_sglang.txt | requirements_torch251_sglang.txt |  |  |
| requirements_torch251_vllm.txt | requirements_torch251_vllm.txt |  |  |
| requirements_torch260_sglang.txt | requirements_torch260_sglang.txt |  |  |
| requirements_torch260_vllm.txt | requirements_torch260_vllm.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/header.jpg](https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/header.jpg)

[https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/logo_with_name.png](https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/logo_with_name.png)

# MARSHAL: Incentivizing Multi-Agent Reasoning 
 via Self-Play with Strategic LLMs

[https://github.com/thu-nics/MARSHAL#marshal-incentivizing-multi-agent-reasoning--via-self-play-with-strategic-llms](https://github.com/thu-nics/MARSHAL#marshal-incentivizing-multi-agent-reasoning--via-self-play-with-strategic-llms)

### 🎉 Accepted by ICLR 2026

[https://github.com/thu-nics/MARSHAL#-accepted-by-iclr-2026](https://github.com/thu-nics/MARSHAL#-accepted-by-iclr-2026)

[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)[https://www.python.org/downloads/release/python-390/](https://www.python.org/downloads/release/python-390/)[https://arxiv.org/abs/2510.15414](https://arxiv.org/abs/2510.15414)

[🌐 Project Page](https://thu-nics.github.io/MARSHAL/) | [📝 Paper](https://arxiv.org/abs/2510.15414) | [🤗 Models](https://huggingface.co/collections/nics-efc/marshal)

---

## 📖 Overview

[https://github.com/thu-nics/MARSHAL#-overview](https://github.com/thu-nics/MARSHAL#-overview)

We introduce **MARSHAL**, an end-to-end reinforcement learning framework designed to incentivize **M**ulti-**A**gent **R**easoning through **S**elf-play wit**H** str**A**tegic **L**LMs in a diverse range of competitive and cooperative games.

MARSHAL addresses the challenge of credit assignment in multi-agent multi-turn self-play through two core mechanisms:

1. **Turn-level Advantage Estimator:** Enables fine-grained credit assignment, allowing the model to accurately attribute long-term outcomes to individual actions and provide learning signals across multiple turns.
2. **Agent-specific Advantage Normalization:** Stabilizes the training process by calibrating advantage estimates relative to the performance of each agent.

### 🔥 Key Results

[https://github.com/thu-nics/MARSHAL#-key-results](https://github.com/thu-nics/MARSHAL#-key-results)

By leveraging self-play across strategic games, MARSHAL (based on Qwen3-4B) demonstrates notable generalization capabilities:

- **Strategic Games:** Achieves up to **28.7%** performance improvement on held-out games.
- **Reasoning Benchmarks:** When integrated into leading multi-agent systems (MASs), MARSHAL yields consistent gains of up to 
  - **+10.0%** on AIME
  - **+7.6%** on GPQA-Diamond
  - **+3.5%** on average across all tested benchmarks.

### 🎮 Featured Games

[https://github.com/thu-nics/MARSHAL#-featured-games](https://github.com/thu-nics/MARSHAL#-featured-games)

- **Competitive, perfect-information:** Tic-Tac-Toe, Connect Four.
- **Competitive, imperfect-information:** Kuhn Poker, Leduc Hold'em.
- **Cooperative, imperfect-information:** Mini Hanabi, Simple Hanabi.

---

## 🚀 Method

[https://github.com/thu-nics/MARSHAL#-method](https://github.com/thu-nics/MARSHAL#-method)

[https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/method_overview.svg](https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/method_overview.svg)

> **Figure 1: Overview of MARSHAL.** > **Left:** Generating player trajectories via self-play in strategic games. **Middle:** Naive advantage estimation (e.g., GRPO) often fails in multi-turn settings. **Right:** MARSHAL's advantage estimation ensures accurate credit assignment for multi-turn, multi-agent interactions.

## 📊 Results

[https://github.com/thu-nics/MARSHAL#-results](https://github.com/thu-nics/MARSHAL#-results)

[https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/results_overview.svg](https://github.com/thu-nics/MARSHAL/blob/main/assets/MARSHAL_assets/results_overview.svg)

> **Figure 2: Performance Comparison.** > Evaluation of MARSHAL against baselines on strategic games and reasoning benchmarks. MARSHAL not only masters strategic games but also generalizes effectively to complex reasoning tasks within multi-agent frameworks like MAD and AutoGen.

---

## 🛠️ Installation

[https://github.com/thu-nics/MARSHAL#%EF%B8%8F-installation](https://github.com/thu-nics/MARSHAL#%EF%B8%8F-installation)

The MARSHAL project is built upon the [ROLL](https://github.com/alibaba/ROLL) framework.

1. 

**Install ROLL Framework** Please follow the official guide to ensure environment and backend compatibility:
[ROLL Docs – Getting Started](https://alibaba.github.io/ROLL/docs/English/start)

2. 

**Install OpenSpiel** MARSHAL uses [OpenSpiel](https://github.com/deepmind/open_spiel) for game environments:

```
pip install pyspiel
```

---

## ⚡ Training

[https://github.com/thu-nics/MARSHAL#-training](https://github.com/thu-nics/MARSHAL#-training)

### Agentic RL Pipeline

[https://github.com/thu-nics/MARSHAL#agentic-rl-pipeline](https://github.com/thu-nics/MARSHAL#agentic-rl-pipeline)

Use the following scripts to reproduce our training results.

```
# ==============================
# 1. Self-play Training
# ==============================

# Generalist Agent (Multi-Game)
bash examples/multi_games/run_agentic_pipeline_multi_games_selfplay.sh

# Specialist Agent (e.g., Tic-Tac-Toe)
bash examples/tictactoe/run_agentic_pipeline_tictactoe_selfplay.sh

# ==============================
# 2. Training with Fixed Opponent
# ==============================
bash examples/tictactoe/run_agentic_pipeline_tictactoe_single.sh

# ==============================
# 3. Debugging / Rollout
# ==============================
# Rollout only (no gradient updates)
bash examples/tictactoe/run_agentic_rollout_tictactoe.sh
```

### Monitoring

[https://github.com/thu-nics/MARSHAL#monitoring](https://github.com/thu-nics/MARSHAL#monitoring)

Track training progress using TensorBoard:

```
tensorboard --logdir=runs/tictactoe_selfplay/
```

---

## 🧪 Evaluation

[https://github.com/thu-nics/MARSHAL#-evaluation](https://github.com/thu-nics/MARSHAL#-evaluation)

### 1. Export Model Checkpoint

[https://github.com/thu-nics/MARSHAL#1-export-model-checkpoint](https://github.com/thu-nics/MARSHAL#1-export-model-checkpoint)

Convert the trained checkpoint for evaluation:

```
bash model_convert.sh
```

### 2. Strategic Ability Evaluation

[https://github.com/thu-nics/MARSHAL#2-strategic-ability-evaluation](https://github.com/thu-nics/MARSHAL#2-strategic-ability-evaluation)

Evaluate the agent's performance in game environments:

```
bash examples/model_game_eval/run_agentic_rollout_eval.sh
```

### 3. Generalization to Multi-Agent Systems

[https://github.com/thu-nics/MARSHAL#3-generalization-to-multi-agent-systems](https://github.com/thu-nics/MARSHAL#3-generalization-to-multi-agent-systems)

We evaluate MARSHAL on 7 math and QA benchmarks using [MASLab](https://github.com/MASWorks/MASLab).

- **MATH:** GSM8K, MATH500, AQUA, AIME24, AMC23
- **QA:** GPQA-Diamond, MMLU-STEM

---

## 🖊️ Citation

[https://github.com/thu-nics/MARSHAL#%EF%B8%8F-citation](https://github.com/thu-nics/MARSHAL#%EF%B8%8F-citation)

If you find our work helpful, please cite:

```
@misc{yuan2025marshal,
      title={MARSHAL: Incentivizing Multi-Agent Reasoning via Self-Play with Strategic LLMs}, 
      author={Huining Yuan and Zelai Xu and Zheyue Tan and Xiangmin Yi and Mo Guang and Kaiwen Long and Haojia Hui and Boxun Li and Xinlei Chen and Bo Zhao and Xiao-Ping Zhang and Chao Yu and Yu Wang},
      year={2025},
      eprint={2510.15414},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={[https://arxiv.org/abs/2510.15414](https://arxiv.org/abs/2510.15414)}, 
}
```

## About

         [ICLR'26] MARSHAL: Incentivizing Multi-Agent Reasoning via Self-Play with Strategic LLMs       

[thu-nics.github.io/MARSHAL/](https://thu-nics.github.io/MARSHAL/)

### Topics

[agent](https://github.com/topics/agent)[reinforcement-learning](https://github.com/topics/reinforcement-learning)[multi-agent-systems](https://github.com/topics/multi-agent-systems)[self-play](https://github.com/topics/self-play)[llm](https://github.com/topics/llm)

### Resources

[Readme](https://github.com/thu-nics/MARSHAL#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/thu-nics/MARSHAL#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/thu-nics/MARSHAL/activity)

[Custom properties](https://github.com/thu-nics/MARSHAL/custom-properties)

### Stars

[48
        stars](https://github.com/thu-nics/MARSHAL/stargazers)

### Watchers

[1
        watching](https://github.com/thu-nics/MARSHAL/watchers)

### Forks

[3
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

