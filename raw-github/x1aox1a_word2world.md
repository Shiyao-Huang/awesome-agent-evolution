---
repo: x1aox1a/word2world
url: https://github.com/x1aox1a/word2world
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - X1AOX1A/Word2World: [ACL 2026 Oral] From Word to World: Can Large Language Models be Implicit Text-based World Models? · GitHub

**Source**: https://github.com/x1aox1a/word2world

---

[Skip to content](https://github.com/x1aox1a/word2world#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[X1AOX1A](https://github.com/X1AOX1A)

/
**[Word2World](https://github.com/X1AOX1A/Word2World)**

Public

- [Notifications](https://github.com/login?return_to=%2FX1AOX1A%2FWord2World)You must be signed in to change notification settings
- [Fork
    5](https://github.com/login?return_to=%2FX1AOX1A%2FWord2World)
- 
[Star
          62](https://github.com/login?return_to=%2FX1AOX1A%2FWord2World)

[https://github.com/X1AOX1A/Word2World](https://github.com/X1AOX1A/Word2World)

[Branches](https://github.com/X1AOX1A/Word2World/branches)[Tags](https://github.com/X1AOX1A/Word2World/tags)

[https://github.com/X1AOX1A/Word2World/branches](https://github.com/X1AOX1A/Word2World/branches)[https://github.com/X1AOX1A/Word2World/tags](https://github.com/X1AOX1A/Word2World/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History3 Commits3 Commits |  |  |  |
| AgentGym-RL | AgentGym-RL |  |  |
| AgentGym | AgentGym |  |  |
| assets | assets |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# *From Word to World*: Can Large Language Models be Implicit Text-based World Models?

[https://github.com/x1aox1a/word2world#from-word-to-world-can-large-language-models-be-implicit-text-based-world-models](https://github.com/x1aox1a/word2world#from-word-to-world-can-large-language-models-be-implicit-text-based-world-models)

[https://arxiv.org/abs/2512.18832](https://arxiv.org/abs/2512.18832)[https://macaron.im/mindlab/research/how-world-models-unlock-scalable-agentic-rl](https://macaron.im/mindlab/research/how-world-models-unlock-scalable-agentic-rl)[https://huggingface.co/papers/2512.18832](https://huggingface.co/papers/2512.18832)[https://huggingface.co/collections/X1AOX1A/llm-as-world-models](https://huggingface.co/collections/X1AOX1A/llm-as-world-models)[https://huggingface.co/datasets/X1AOX1A/LLMasWorldModels](https://huggingface.co/datasets/X1AOX1A/LLMasWorldModels)

Code and data for **"*From Word to World*: Can Large Language Models be Implicit Text-based World Models?"**.

## 📰 News

[https://github.com/x1aox1a/word2world#-news](https://github.com/x1aox1a/word2world#-news)

- [2025/12/21] We released the [paper](https://arxiv.org/abs/2512.18832) and [blog post](https://macaron.im/mindlab/research/how-world-models-unlock-scalable-agentic-rl).
- [2025/12/22] We released the [code](https://github.com/X1AOX1A/Word2World), [models](https://huggingface.co/collections/X1AOX1A/llm-as-world-models) and [data](https://huggingface.co/datasets/X1AOX1A/LLMasWorldModels). We verified the evaluation pipeline on **ALFWorld** using **Qwen2.5-7B** (world model) and **gpt-4o** (agent).
- [2025/12/23] Paper is available on [arXiv](https://arxiv.org/abs/2512.18832) and [Hugging Face](https://huggingface.co/papers/2512.18832).
- [2026/04/06] Our paper is accepted to ACL 2026 🎉.

## 🔗 Quick Links

[https://github.com/x1aox1a/word2world#-quick-links](https://github.com/x1aox1a/word2world#-quick-links)

- **Environment setup**: see [Env Setup](https://github.com/x1aox1a/word2world#env-setup)
- **Download data**: see [Data Download](https://github.com/x1aox1a/word2world#data-download)
- **Evaluate**: see [Evaluation](https://github.com/x1aox1a/word2world#evaluation)
- **Train world models**: see [Training World Models](https://github.com/x1aox1a/word2world#training-world-models)

## 📑 Table of Contents

[https://github.com/x1aox1a/word2world#-table-of-contents](https://github.com/x1aox1a/word2world#-table-of-contents)

- [Overview](https://github.com/x1aox1a/word2world#overview)
- [World Model Checkpoints](https://github.com/x1aox1a/word2world#list-of-world-model-checkpoints)
- [Usage Examples](https://github.com/x1aox1a/word2world#usage-examples)
- [Env Setup](https://github.com/x1aox1a/word2world#env-setup)
- [Data Download](https://github.com/x1aox1a/word2world#data-download)
- [Evaluation](https://github.com/x1aox1a/word2world#evaluation)
  - [Single-step Accuracy](https://github.com/x1aox1a/word2world#single-step-accuracy)
  - [Long-horizon Rollouts](https://github.com/x1aox1a/word2world#long-horizon-rollouts)
    - [Interaction with Real Environments](https://github.com/x1aox1a/word2world#1-interaction-with-real-environments)
    - [Interaction with World Models](https://github.com/x1aox1a/word2world#2-interaction-with-world-models)
    - [Map WM Actions to Real Environments](https://github.com/x1aox1a/word2world#3-map-wm-actions-to-real-environments)

- [Training World Models](https://github.com/x1aox1a/word2world#training-world-models)
- [Contact](https://github.com/x1aox1a/word2world#contact)
- [Citation](https://github.com/x1aox1a/word2world#citation)

---

## 📌 Overview

[https://github.com/x1aox1a/word2world#-overview](https://github.com/x1aox1a/word2world#-overview)

[https://github.com/X1AOX1A/Word2World/blob/main/assets/main.png](https://github.com/X1AOX1A/Word2World/blob/main/assets/main.png)

**LLMs as text-based world models for agent learning.**

- **(A) Formulation**: world modeling as next-state prediction under a fixed text interaction protocol.
- **(B) Evaluation axes**: fidelity/consistency, scalability/robustness, and agent utility.
- **(C) Results**: strong fidelity and consistency in both single-step predictions and long-horizon rollouts.
- **(D) Scaling**: predictable improvements with more training data across text environments.
- **(E) Agent gains**: better verification, synthetic data generation, and RL initialization from faithful world models.

## 🧩 List of World Model Checkpoints

[https://github.com/x1aox1a/word2world#-list-of-world-model-checkpoints](https://github.com/x1aox1a/word2world#-list-of-world-model-checkpoints)

| Environment | Qwen2.5-7B | Llama3.1-8B |
|---|---|---|
| ALFWorld | X1AOX1A/WorldModel-Alfworld-Qwen2.5-7B | X1AOX1A/WorldModel-Alfworld-Llama3.1-8B |
| SciWorld | X1AOX1A/WorldModel-Sciworld-Qwen2.5-7B | X1AOX1A/WorldModel-Sciworld-Llama3.1-8B |
| TextWorld | X1AOX1A/WorldModel-Textworld-Qwen2.5-7B | X1AOX1A/WorldModel-Textworld-Llama3.1-8B |
| Webshop | X1AOX1A/WorldModel-Webshop-Qwen2.5-7B | X1AOX1A/WorldModel-Webshop-Llama3.1-8B |
| StableToolBench | X1AOX1A/WorldModel-Stabletoolbench-Qwen2.5-7B | X1AOX1A/WorldModel-Stabletoolbench-Llama3.1-8B |

## 🧪 Usage Examples

[https://github.com/x1aox1a/word2world#-usage-examples](https://github.com/x1aox1a/word2world#-usage-examples)

- For an example interaction between the agent and the world model, see [scripts/interact_with_world_model/run.py](https://github.com/X1AOX1A/Word2World/blob/main/scripts/interact_with_world_model/run.py).

## 🛠️ Env Setup

[https://github.com/x1aox1a/word2world#%EF%B8%8F-env-setup](https://github.com/x1aox1a/word2world#%EF%B8%8F-env-setup)

```
# install AgentGym-RL
bash scripts/env_setup/uv_agentgym_rl.sh

# install AgentGym environments
bash scripts/env_setup/uv_alfworld.sh
bash scripts/env_setup/uv_sciworld.sh
bash scripts/env_setup/uv_textworld.sh
bash scripts/env_setup/uv_webshop.sh
```

You can verify each environment by launching its server:

```
bash scripts/env_server/start_alfworld.sh
bash scripts/env_server/start_sciworld.sh
bash scripts/env_server/start_textworld.sh
bash scripts/env_server/start_webshop.sh
```

## 📥 Data Download

[https://github.com/x1aox1a/word2world#-data-download](https://github.com/x1aox1a/word2world#-data-download)

> Note (ALFWorld): to align with AgentGym, we renamed action `put` → `move` and added a `help` action (see the updated `.twl2` under `scripts/download_data`). Therefore the original `alfworld-download` workflow is **not** compatible. If you downloaded ALFWorld data before, please remove the old data and re-download using the command below; otherwise evaluation may be lower than expected.

```
source uv_agentgym_rl/bin/activate
python scripts/download_data/download_data.py
```

## 📊 Evaluation

[https://github.com/x1aox1a/word2world#-evaluation](https://github.com/x1aox1a/word2world#-evaluation)

This repo reports three complementary metrics:

- **Single-step Accuracy**: next-state prediction accuracy under the interaction protocol.
- **WM Task Success Rate**: agent success when interacting with the learned world model.
- **WM2Real Success Rate**: mapping/replay of world-model actions back to the real environment.

### Single Step Accuracy

[https://github.com/x1aox1a/word2world#single-step-accuracy](https://github.com/x1aox1a/word2world#single-step-accuracy)

To compute `Single Step Accuracy`, run:

Calculate Single Step Accuracy

```
TASK=alfworld         # alfworld, alfworld_valid_seen, alfworld_valid_unseen, sciworld, textworld, webshop, stabletoolbench
MODEL=X1AOX1A/WorldModel-Alfworld-Qwen2.5-7B                  # world model checkpoint
OUTPUT_ROOT=outputs/single_step_accuracy/${TASK}/${MODEL}     # output root directory
bash scripts/single_step_accuracy/run.sh $TASK $MODEL $OUTPUT_ROOT
```

Example output:

```
{
    "average_accuracy": 0.9987087517934002
}
```

### Long Horizon Rollouts

[https://github.com/x1aox1a/word2world#long-horizon-rollouts](https://github.com/x1aox1a/word2world#long-horizon-rollouts)

### 1. Interaction with Real Environments

[https://github.com/x1aox1a/word2world#1-interaction-with-real-environments](https://github.com/x1aox1a/word2world#1-interaction-with-real-environments)

> To collect trajectories on the training set with real environments, set `SPLIT=train`.

To compute `Real Task Success Rate`, run:

Run via OpenAI API

```
TASK=alfworld         # alfworld, sciworld, textworld, webshop
RUN=0                 # run id for multiple runs, just for separating output dirs
API_KEY=your_api_key  # your OpenAI API key
API_BASE_URL=your_api_base_url # your OpenAI API base URL
MODEL=gpt-4o          # agent model name
MAX_CONCURRENCY=150   # max concurrency
MAX_ROUND=50          # max round
NUM_EXAMPLES=-1       # num examples
SPLIT=test            # train, test (and valid_seen, valid_unseen for ALFWorld only)
OUTPUT_ROOT=outputs   # output root directory
# this will auto-launch the environment server
bash scripts/interact_with_real_env/run_openai.sh $TASK $RUN $API_KEY $API_BASE_URL $MODEL $MAX_CONCURRENCY $MAX_ROUND $NUM_EXAMPLES $SPLIT $OUTPUT_ROOT
# metrics will be saved to outputs/interaction/real_env/$SPLIT/${TASK}/$MODEL/${TASK}_maxround${MAX_ROUND}_run${RUN}/_metrics.json
```

Example output:

```
{
    "accuracy": 50.50,  # task success rate
    "success": 101.0,   # total successful interactions
    "api_errors": 0,    # API errors
    "total": 200,       # total interactions
    "time_seconds": 1075.621458530426  # time taken in seconds
}
```

Run via vLLM server

```
TASK=alfworld         # alfworld, sciworld, textworld, webshop
RUN=0                 # run id for multiple runs, just for separating output dirs
MODEL=Qwen/Qwen2.5-7B-Instruct       # agent model name
MAX_CONCURRENCY=150   # max concurrency
MAX_ROUND=20          # max round, reduce to 20 to prevent exceeding the context length
NUM_EXAMPLES=-1       # num examples
SPLIT=test            # train, test (and valid_seen, valid_unseen for ALFWorld only)
OUTPUT_ROOT=outputs   # output root directory
# this will auto-launch the vLLM server and the environment server
bash scripts/interact_with_real_env/run_vllm.sh $TASK $RUN $MODEL $MAX_CONCURRENCY $MAX_ROUND $NUM_EXAMPLES $SPLIT $OUTPUT_ROOT
# metrics will be saved to outputs/interaction/real_env/$SPLIT/vllm/${TASK}/$MODEL/${TASK}_maxround${MAX_ROUND}_run${RUN}/_metrics.json
```

### 2. Interaction with World Models

[https://github.com/x1aox1a/word2world#2-interaction-with-world-models](https://github.com/x1aox1a/word2world#2-interaction-with-world-models)

To compute `WM Task Success Rate`, run:

Run via OpenAI API

```
TASK=alfworld         # alfworld, sciworld, textworld, webshop
MODEL=gpt-4o          # agent model name
API_KEY=your_api_key  # your OpenAI API key
API_BASE_URL=your_api_base_url # your OpenAI API base URL
WORLD_MODEL=X1AOX1A/WorldModel-Alfworld-Qwen2.5-7B # world model checkpoint
MAX_CONCURRENCY=150   # max concurrency
MAX_ROUND=50          # max round
NUM_EXAMPLES=-1       # num examples
SPLIT=test            # train, test (and valid_seen, valid_unseen for ALFWorld only)
OUTPUT_ROOT=outputs   # output root directory
# this will auto-launch the vLLM server for the world model
bash scripts/interact_with_world_model/run.sh $TASK $MODEL $API_KEY $API_BASE_URL $WORLD_MODEL $MAX_CONCURRENCY $MAX_ROUND $NUM_EXAMPLES $SPLIT $OUTPUT_ROOT
# metrics will be saved to outputs/interaction/world_model/$SPLIT/$TASK/$MODEL/$WORLD_MODEL/$MODEL/_metrics.json
```

Example output:

```
{
    "task": "alfworld",                    # task name
    "agent_model": "gpt-4o",               # agent model name
    "total_items": 200,                    # total items
    "total_success": 109.0,                # total successful interactions
    "processed_items": 200,                # processed items
    "accuracy": 54.50000000000001,         # task success rate
    "api_errors": 0                        # API errors
}
```

### 3. Map WM Actions to Real Environments
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

