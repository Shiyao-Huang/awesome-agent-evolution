---
repo: viktoraxelsen/memskill
url: https://github.com/viktoraxelsen/memskill
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ViktorAxelsen/MemSkill: MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents · GitHub

**Source**: https://github.com/viktoraxelsen/memskill

---

[Skip to content](https://github.com/viktoraxelsen/memskill#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ViktorAxelsen](https://github.com/ViktorAxelsen)

/
**[MemSkill](https://github.com/ViktorAxelsen/MemSkill)**

Public

- [Notifications](https://github.com/login?return_to=%2FViktorAxelsen%2FMemSkill)You must be signed in to change notification settings
- [Fork
    31](https://github.com/login?return_to=%2FViktorAxelsen%2FMemSkill)
- 
[Star
          482](https://github.com/login?return_to=%2FViktorAxelsen%2FMemSkill)

[https://github.com/ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill)

[Branches](https://github.com/ViktorAxelsen/MemSkill/branches)[Tags](https://github.com/ViktorAxelsen/MemSkill/tags)

[https://github.com/ViktorAxelsen/MemSkill/branches](https://github.com/ViktorAxelsen/MemSkill/branches)[https://github.com/ViktorAxelsen/MemSkill/tags](https://github.com/ViktorAxelsen/MemSkill/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History32 Commits32 Commits |  |  |  |
| assets | assets |  |  |
| data | data |  |  |
| docs | docs |  |  |
| prompts | prompts |  |  |
| skills | skills |  |  |
| src | src |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| alfworld_replay.py | alfworld_replay.py |  |  |
| eval_alfworld.sh | eval_alfworld.sh |  |  |
| eval_hp.sh | eval_hp.sh |  |  |
| eval_locomo.sh | eval_locomo.sh |  |  |
| eval_longmemeval.sh | eval_longmemeval.sh |  |  |
| eval_utils.py | eval_utils.py |  |  |
| llm_utils.py | llm_utils.py |  |  |
| main.py | main.py |  |  |
| rag_utils.py | rag_utils.py |  |  |
| requirements.txt | requirements.txt |  |  |
| train_alfworld.sh | train_alfworld.sh |  |  |
| train_locomo.sh | train_locomo.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/ViktorAxelsen/MemSkill/blob/main/assets/logo.png](https://github.com/ViktorAxelsen/MemSkill/blob/main/assets/logo.png)

# MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents

[https://github.com/viktoraxelsen/memskill#memskill-learning-and-evolving-memory-skills-for-self-evolving-agents](https://github.com/viktoraxelsen/memskill#memskill-learning-and-evolving-memory-skills-for-self-evolving-agents)

[https://viktoraxelsen.github.io/MemSkill/](https://viktoraxelsen.github.io/MemSkill/)[https://arxiv.org/abs/2602.02474](https://arxiv.org/abs/2602.02474)[https://huggingface.co/papers/2602.02474](https://huggingface.co/papers/2602.02474)[https://huggingface.co/collections/XaiverZ/memskill](https://huggingface.co/collections/XaiverZ/memskill)
[https://github.com/ViktorAxelsen/MemSkill/stargazers](https://github.com/ViktorAxelsen/MemSkill/stargazers)[https://github.com/ViktorAxelsen/MemSkill/forks](https://github.com/ViktorAxelsen/MemSkill/forks)[https://github.com/ViktorAxelsen/MemSkill/issues](https://github.com/ViktorAxelsen/MemSkill/issues)[https://deepwiki.com/ViktorAxelsen/MemSkill](https://deepwiki.com/ViktorAxelsen/MemSkill)[https://github.com/ViktorAxelsen/MemSkill/blob/main/LICENSE](https://github.com/ViktorAxelsen/MemSkill/blob/main/LICENSE)

## 🧩 Overview

[https://github.com/viktoraxelsen/memskill#-overview](https://github.com/viktoraxelsen/memskill#-overview)

**MemSkill** is a framework for learning and evolving **memory skills** for long-horizon agents. It replaces static, hand-designed memory operations with a data-driven loop where skills are **learned, refined, and reused** from task feedback, enabling more adaptive memory construction across settings.

❗The skills evolved by **MemSkill** are **NOT** experiential/procedural memory/insights themselves. Rather, they are a form of **meta-memory** that focuses on **what kinds of memory to extract, how to remember and where to focus, and what to preserve or forget**. This is also why we call them **memory skills**: they capture the way or skill of remembering, rather than the remembered content itself.

**Highlights**

- 

**Skill-conditioned memory construction**: Compose a small set of relevant skills for each span and construct memories in one pass.

- 

**Skill evolution from hard cases**: Periodically mine challenging examples to refine existing skills and propose new ones.

- 

**Reusable skill bank**: Maintain a shared, evolving skill bank that supports transfer across datasets and base models.

- 

**High-throughput evaluation**: Multi-API-key round-robin for stable, parallel calls.

- 

**Scalable training and runs**: Multi-threading and multi-processing for large-scale training and evaluation.

[https://github.com/ViktorAxelsen/MemSkill/blob/main/assets/model.png](https://github.com/ViktorAxelsen/MemSkill/blob/main/assets/model.png)

## 📰 News

[https://github.com/viktoraxelsen/memskill#-news](https://github.com/viktoraxelsen/memskill#-news)

- 

🚀 **[2026-03]**: `--locomo-train-query-sampling-ratio` is now available for training-time stratified test-query sampling on LoCoMo. It significantly reduces evaluation cost during training by sampling LoCoMo test queries by category, while leaving the full-evaluation protocol unchanged for `eval-only` and formal testing. For more details, please refer to [Commonly Used Configs](https://github.com/viktoraxelsen/memskill#%EF%B8%8F-commonly-used-configs).

- 

🛠️ **[2026-03]**: We have added support for interrupted training recovery. You can now resume training in the `train_*.sh` scripts by passing `--load-checkpoint`, which restores key training state such as the controller/optimizer, operation bank, designer state (for example, the rolling failure-case pool), and other resume-critical metadata. At the moment, recovery is supported only from checkpoints saved at **outer-epoch boundaries**. By default, resumed runs continue logging to the original W&B run; if you prefer a fresh run for logging, use `--resume-new-wandb-run` instead. For more details, please refer to [Commonly Used Configs](https://github.com/viktoraxelsen/memskill#%EF%B8%8F-commonly-used-configs).

- 

🚀 **[2026-03]**: We have improved the parallel memory extraction pipeline for evaluation and cache building, making MemSkill noticeably faster in large-scale runs. We also added clearer controls for concurrency with `--inference-workers` at the sample level and `--inference-session-workers` within each sample at the chunk/span level, which together can significantly accelerate memory extraction. For more details, please refer to [Commonly Used Configs](https://github.com/viktoraxelsen/memskill#%EF%B8%8F-commonly-used-configs).

- 

⭐ **[2026-03]**: We have released the MemSkill controller weights in our [Hugging Face collection](https://huggingface.co/collections/XaiverZ/memskill), which can now be used directly for inference on suitable datasets. Please note that differences in experimental environments and settings may require some adaptation; when necessary, we recommend retraining and tuning key hyperparameters on a held-out validation split, especially `chunk_size` and the number of selected skills during inference (`action_top_k`), to ensure reliable performance. We hope these resources help advance self-evolving agent memory systems, and we'd be glad to hear from the community.

- 

🔥 **[2026-02]**: We are honored to be featured in the 🤗 HuggingFace [#3 Paper of the day](https://huggingface.co/papers/2602.02474)

- 

🚀 **[2026-02]**: **MemSkill** is officially released — a new paradigm for agent memory that learns reusable skills 🔁 and evolves them from data over time 🧠, improving memory quality and generalization across long, open-ended interactions ✨.

## 🔗 Links

[https://github.com/viktoraxelsen/memskill#-links](https://github.com/viktoraxelsen/memskill#-links)

- [Overview](https://github.com/viktoraxelsen/memskill#-overview)
- [News](https://github.com/viktoraxelsen/memskill#-news)
- [Get Started](https://github.com/viktoraxelsen/memskill#-get-started)
- [Installation](https://github.com/viktoraxelsen/memskill#installation)
- [Preparing Training Data](https://github.com/viktoraxelsen/memskill#-preparing-training-data)
- [Experiments](https://github.com/viktoraxelsen/memskill#-experiments)
- [Extending to New Datasets and Evaluation Protocol](https://github.com/viktoraxelsen/memskill#-extending-to-new-datasets-and-evaluation-protocol)
- [Commonly Used Configs](https://github.com/viktoraxelsen/memskill#%EF%B8%8F-commonly-used-configs)
- [Citation](https://github.com/viktoraxelsen/memskill#-citation)

## 🚀 Get Started

[https://github.com/viktoraxelsen/memskill#-get-started](https://github.com/viktoraxelsen/memskill#-get-started)

### Installation

[https://github.com/viktoraxelsen/memskill#installation](https://github.com/viktoraxelsen/memskill#installation)

```
# Clone the repository
git clone https://github.com/ViktorAxelsen/MemSkill
cd MemSkill

# Create and activate virtual environment
conda create -n memskill python=3.10
conda activate memskill

# vllm
pip install vllm==0.6.3
# PyTorch
pip install torch==2.6.0 torchvision==0.21.0 torchaudio==2.6.0 --index-url https://download.pytorch.org/whl/cu124
# Flash-Attn (or you can specify `--disable-flash-attn` in the .sh scripts to disable it)
pip install flash-attn --no-build-isolation
# Others
pip install -r requirements.txt
```

### 📊 Preparing Training Data

[https://github.com/viktoraxelsen/memskill#-preparing-training-data](https://github.com/viktoraxelsen/memskill#-preparing-training-data)

MemSkill builds training and evaluation data from the datasets below. Please download data from the official sources and place them under `data/`. Unless otherwise noted, splits are already configured in our codebase.

#### **1) LoCoMo**

[https://github.com/viktoraxelsen/memskill#1-locomo](https://github.com/viktoraxelsen/memskill#1-locomo)

- Download LoCoMo from the official repo: [LoCoMo](https://github.com/snap-research/locomo)
- **Splits**: LoCoMo splits are **already configured in `main.py`** (no extra split file needed).
- Put the downloaded files under: 
  - `data/locomo10.json`

#### **2) LongMemEval**

[https://github.com/viktoraxelsen/memskill#2-longmemeval](https://github.com/viktoraxelsen/memskill#2-longmemeval)

- We use **LongMemEval-S** from: [LongMemEval](https://github.com/xiaowu0162/LongMemEval)
- **Important**: LongMemEval-S is used for **transfer evaluation only**. That is, skills trained on LoCoMo are **directly evaluated** on LongMemEval-S without additional training.
- Put the downloaded files under: 
  - `data/longmemeval_s_cleaned.json`

- Use our split file: 
  - `data/longmemeval_s_splits.json` (**We use test split only**)

#### **3) HotpotQA**

[https://github.com/viktoraxelsen/memskill#3-hotpotqa](https://github.com/viktoraxelsen/memskill#3-hotpotqa)

- Download HotpotQA from: [HotpotQA-Modified](https://huggingface.co/datasets/BytedTsinghua-SIA/hotpotqa/tree/main) (Source: [HotpotQA](https://hotpotqa.github.io/))
- We evaluate on three test files: 
  - `data/eval_50.json`
  - `data/eval_100.json`
  - `data/eval_200.json`

These correspond to **increasing context length**, where each query context is constructed by concatenating **50 / 100 / 200 documents** (following the long-context evaluation protocol we adopt in our experiments).

#### **4) ALFWorld**

[https://github.com/viktoraxelsen/memskill#4-alfworld](https://github.com/viktoraxelsen/memskill#4-alfworld)

Please follow the official instructions to install dependencies and download assets: [ALFWorld](https://github.com/alfworld/alfworld)

We use **offline expert trajectories** as the interaction corpus for memory construction. We provide a one-command script to collect and save trajectories:

```
# Collect expert trajectories for train / seen / unseen splits
python alfworld_replay.py --split train --output ./data/alfworld_train_offline.json
python alfworld_replay.py --split eval_in_distribution --output ./data/alfworld_expert_eval_in_distribution.json
python alfworld_replay.py --split eval_out_of_distribution --output ./data/alfworld_expert_eval_out_of_distribution.json
```

Note that:

- 

We collect `seen` and `unseen` expert plans **only to keep data formats consistent** and make evaluation easier. They are not used for training.

- 

The saved trajectories will be saved under `data/` by default.

> **ALFWorld Training Data Preparation Workflow**

We separate data into **two batches with different roles**.

**Batch A: Offline expert trajectories (memory construction batch)**
 We first collect expert rollouts (the JSON files above). During training, we sample a batch of trajectories and:

- split each trajectory trace into **contiguous spans** (processed sequentially span by span)
- build an **episode specific memory bank** by running MemSkill on these spans
- record the controller’s Top-K skill selections (and the associated policy info needed for RL updates)

This batch is used to teach the controller how to **compose skills** for memory construction from realistic interaction traces, without requiring environment interaction.

**Batch B: Environment evaluation episodes (reward batch)**
 To obtain task-level feedback, we sample a batch of ALFWorld tasks and:

- run the agent in the environment using the memory bank produced by MemSkill in the Batch A
- compute the **task signal** (e.g., success rate) as the reward feedback
- log difficult failures as hard cases for the designer

This batch provides the supervision signal that tells the controller whether its skill composition actually helps long-horizon execution.

**How they work together**

- Batch A provides the behavior data (skill choices on spans) needed to optimize the controller policy.
- Batch B provides the downstream task feedback that makes the optimization meaningful.
- The designer then mines hard cases from Batch B outcomes to refine existing skills and propose new ones.

In short, ALFWorld uses **offline traces for scalable memory construction training (Batch A)** and **environment rollouts for task feedback and skill evolution (Batch B)**.

❗For integrating more datasets, our framework is designed to be flexible and easy to extend to new settings (different interaction formats, query styles, and evaluation protocols). See [Extending to New Datasets and Evaluation Protocol](https://github.com/viktoraxelsen/memskill#-extending-to-new-datasets-and-evaluation-protocol) for step-by-step instructions.

## 🧪 Experiments

[https://github.com/viktoraxelsen/memskill#-experiments](https://github.com/viktoraxelsen/memskill#-experiments)

Before running, please check the parameter configuration in the `.sh` scripts.

Important

**Before running, please review [Commonly Used Configs](https://github.com/viktoraxelsen/memskill#%EF%B8%8F-commonly-used-configs) and update the `.sh` scripts with your dataset paths, API settings, and model choices.**

### 🖥️ Training

[https://github.com/viktoraxelsen/memskill#%EF%B8%8F-training](https://github.com/viktoraxelsen/memskill#%EF%B8%8F-training)

Choose the training script based on the dataset you want to use. Make sure `--data-file`, `--model`, and API settings are set correctly.

```
bash train_locomo.sh
# or
bash train_alfworld.sh
```

### 🧭 Evaluation

[https://github.com/viktoraxelsen/memskill#-evaluation](https://github.com/viktoraxelsen/memskill#-evaluation)
## gBrain Temporal Metadata

- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

