---
repo: shiqichen17/spa
url: https://github.com/shiqichen17/spa
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - shiqichen17/SPA: Github repository for "Internalizing World Models via Self-Play Finetuning for Agentic RL" · GitHub

**Source**: https://github.com/shiqichen17/spa

---

[Skip to content](https://github.com/shiqichen17/spa#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[shiqichen17](https://github.com/shiqichen17)

/
**[SPA](https://github.com/shiqichen17/SPA)**

Public

- [Notifications](https://github.com/login?return_to=%2Fshiqichen17%2FSPA)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2Fshiqichen17%2FSPA)
- 
[Star
          35](https://github.com/login?return_to=%2Fshiqichen17%2FSPA)

[https://github.com/shiqichen17/SPA](https://github.com/shiqichen17/SPA)

[Branches](https://github.com/shiqichen17/SPA/branches)[Tags](https://github.com/shiqichen17/SPA/tags)

[https://github.com/shiqichen17/SPA/branches](https://github.com/shiqichen17/SPA/branches)[https://github.com/shiqichen17/SPA/tags](https://github.com/shiqichen17/SPA/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History24 Commits24 Commits |  |  |  |
| SPA_agent | SPA_agent |  |  |
| config | config |  |  |
| sft | sft |  |  |
| .gitignore | .gitignore |  |  |
| Internalizing_World_Models_via_Self_Play_Finetuning_for_Agentic_RL.pdf | Internalizing_World_Models_via_Self_Play_Finetuning_for_Agentic_RL.pdf |  |  |
| README.md | README.md |  |  |
| run_baseline.sh | run_baseline.sh |  |  |
| run_spa.sh | run_spa.sh |  |  |
| train_ppo_sfted.sh | train_ppo_sfted.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# SPA: Self-Play with World Model for LLM Agents

[https://github.com/shiqichen17/spa#spa-self-play-with-world-model-for-llm-agents](https://github.com/shiqichen17/spa#spa-self-play-with-world-model-for-llm-agents)

[https://spa-ai.github.io](https://spa-ai.github.io)[https://arxiv.org/abs/2510.15047](https://arxiv.org/abs/2510.15047)[https://github.com/shiqichen17/spa#post](https://github.com/shiqichen17/spa#post)[https://github.com/shiqichen17/spa#experiment-log](https://github.com/shiqichen17/spa#experiment-log)

SPA (Self-Play Agent) is a reinforcement learning recipe for training Large Language Model (LLM) agents in **out-of-distribution (OOD) environments**. By equipping agents with an **internal world model** through self-play supervised finetuning (SFT), SPA enables better grounding, broader exploration, and more reliable generalization.

---

## Overview

[https://github.com/shiqichen17/spa#overview](https://github.com/shiqichen17/spa#overview)

LLM agents often struggle when deployed in environments that differ from their pre-training distribution. Standard reinforcement learning tends to overfit to narrow solution paths, improving **Pass@1** slightly but causing **Pass@k** to degrade. This reflects brittle exploration and weak generalization.

SPA addresses this by introducing a **world model** with two key components:

- **State Representation**: structured abstractions (e.g., symbolic coordinates in Sokoban) that lower perplexity and make spatial relations explicit.
- **Transition Modeling**: predicting next states during self-play, enabling the agent to internalize environment dynamics before policy optimization.

This initialization makes subsequent PPO training more stable and effective.

---

## Key Results

[https://github.com/shiqichen17/spa#key-results](https://github.com/shiqichen17/spa#key-results)

SPA significantly improves performance across challenging environments:

- **Sokoban**: Pass@1 success rate from **25.6% → 59.8%**
- **FrozenLake**: Pass@1 success rate from **22.1% → 70.9%**
- **Sudoku**: Pass@1 success rate from **0.0% → 59.6%**

These improvements are consistent across different LLM families, including **Qwen** and **LLaMA** models.

---

## Framework

[https://github.com/shiqichen17/spa#framework](https://github.com/shiqichen17/spa#framework)

SPA training consists of three stages:

1. **Data Generation**: Collect self-play trajectories with `<observation>` and `<prediction>` states.
2. **Supervised Finetuning (SFT)**: Train the agent to predict next states and actions.
3. **PPO Optimization**: Reinforce policies initialized with the learned world model.

This exploration-before-exploitation process allows agents to first **learn environment rules**, then optimize for rewards.

---

## Repository Setup

[https://github.com/shiqichen17/spa#repository-setup](https://github.com/shiqichen17/spa#repository-setup)

Clone **RAGEN** and place SPA inside:

```
git clone git@github.com:RAGEN-AI/RAGEN.git
cd RAGEN
git clone git@github.com:shiqichen17/SPA.git
```

---

## Environment Setup

[https://github.com/shiqichen17/spa#environment-setup](https://github.com/shiqichen17/spa#environment-setup)

From the RAGEN root directory:

```
bash scripts/setup_ragen.sh
pip uninstall -y torch torchvision torchaudio && pip install torch==2.6.0 torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
pip uninstall -y vllm flash-attn flash_attn
pip install vllm==0.8.5.post1
pip install https://github.com/Dao-AILab/flash-attention/releases/download/v2.7.3/flash_attn-2.7.3+cu12torch2.6cxx11abiFALSE-cp312-cp312-linux_x86_64.whl
python -c "import torch; import flash_attn; import vllm; print('✅ All modules loaded successfully.')"
```

> **Note**: Use the versions above exactly to avoid runtime errors.

---

## Quick Start

[https://github.com/shiqichen17/spa#quick-start](https://github.com/shiqichen17/spa#quick-start)

From the SPA directory:

```
cd SPA
bash run_spa.sh <CONFIG_NAME> [CKPT] [GENERATE_DATA]
```

**Arguments:**

- `CONFIG_NAME` (required): Environment config - `_2_sokoban`, `_10_sudoku`, or `_3_frozen_lake`
- `CKPT` (optional, default: `last`): Checkpoint to use (`last` for latest, or step number like `1000`)
- `GENERATE_DATA` (optional, default: `False`): Set to `True` to run full pipeline, `False` for PPO only

**Examples:**

```
# Full pipeline (generate data → SFT → PPO)
bash run_spa.sh _2_sokoban last True

# PPO training only with existing checkpoint
bash run_spa.sh _2_sokoban last False

# Use specific checkpoint step
bash run_spa.sh _10_sudoku 2000 False
```

This script runs the **full pipeline** (when `GENERATE_DATA=True`):

- Generate self-play training data
- Perform SFT world-model training
- Run PPO policy optimization

---

## Pretrained Models and Datasets

[https://github.com/shiqichen17/spa#pretrained-models-and-datasets](https://github.com/shiqichen17/spa#pretrained-models-and-datasets)

We provide pretrained models and training datasets for all three environments on Hugging Face:

| Environment | 📊 SFT Training Data | 🤖 Model (after self-play finetuning) |
|---|---|---|
| Sokoban | SPA-sokoban-data | SPA-sokoban-qwen2.5-1.5b-instruct |
| FrozenLake | SPA-frozenlake-data | SPA-frozenlake-qwen2.5-1.5b-instruct |
| Sudoku | SPA-sudoku-data | SPA-sudoku-qwen2.5-1.5b-instruct |

These resources allow you to:

- **Use the pretrained models** directly for inference or further finetuning
- **Reproduce the SFT stage** using the provided training data
- **Skip data generation** and start from the SFT or PPO stages

> **Note**: The FrozenLake and Sudoku datasets include trajectory filtering to remove trajectories not following the format, while the Sokoban dataset contains unfiltered raw trajectories from self-play data generation.

---

## Supported Environments

[https://github.com/shiqichen17/spa#supported-environments](https://github.com/shiqichen17/spa#supported-environments)

SPA supports a variety of environments integrated through RAGEN:

- **Sokoban** (grid-based spatial puzzles)
- **FrozenLake** (navigation under stochastic transitions)
- **Sudoku** (4×4 logical puzzles)

---

## Example World Model Trace

[https://github.com/shiqichen17/spa#example-world-model-trace](https://github.com/shiqichen17/spa#example-world-model-trace)

For Sokoban, SPA generates structured reasoning traces:

```
<think>
<observation>
######
#___O#
#__X_#
###P_#
###__#
######
Player (P) at (3,3); box (X) at (2,3); goal at (1,4).
</observation>
<prediction>
######
#___O#
#____#
###X_#
###P_#
######
</prediction>
</think>
<answer>Up</answer>
```

This explicit **observation → prediction → action** format grounds decision-making in environment dynamics.

---

## Configuration

[https://github.com/shiqichen17/spa#configuration](https://github.com/shiqichen17/spa#configuration)

Key configuration files are located in `config/`:

- `base.yaml`: core training settings
- `_2_sokoban.yaml`, `_3_frozen_lake.yaml`, etc.: environment-specific configs
- `envs.yaml`: environment registry

Important parameters:

- `model_path`: base model (e.g., `Qwen/Qwen2.5-1.5B-Instruct`)
- `trainer.total_training_steps`: PPO steps
- `agent_proxy.max_turn`: max turns per episode
- `es_manager.train.env_groups`: number of environment groups

---

## Citation

[https://github.com/shiqichen17/spa#citation](https://github.com/shiqichen17/spa#citation)

If you use SPA in your work, please cite:

```
@misc{chen2025spa,
      title={Internalizing World Models via Self-Play Finetuning for Agentic RL}, 
      author={Shiqi Chen and Tongyao Zhu and Zian Wang and Jinghan Zhang and Kangrui Wang and Siyang Gao and Teng Xiao and Yee Whye Teh and Junxian He and Manling Li},
      year={2025},
      eprint={2510.15047},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2510.15047}, 
}
```

---

## License

[https://github.com/shiqichen17/spa#license](https://github.com/shiqichen17/spa#license)

This project is licensed under the Apache 2.0 License. See the LICENSE file for details.

---

## Acknowledgments

[https://github.com/shiqichen17/spa#acknowledgments](https://github.com/shiqichen17/spa#acknowledgments)

SPA is built on top of the [RAGEN](https://github.com/RAGEN-AI/RAGEN) framework, extending it with explicit world-model pretraining for improved RL scalability.
## gBrain Temporal Metadata

- content_timestamp: 2000
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

