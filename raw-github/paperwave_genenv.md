---
repo: paperwave/genenv
url: https://github.com/paperwave/genenv
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - paperwave/GenEnv: GenEnv: Difficulty-Aligned Co-Evolution Between LLM Agents and Environment Simulators · GitHub

**Source**: https://github.com/paperwave/genenv

---

[Skip to content](https://github.com/paperwave/genenv#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[paperwave](https://github.com/paperwave)

/
**[GenEnv](https://github.com/paperwave/GenEnv)**

Public

       forked from [Gen-Verse/GenEnv](https://github.com/Gen-Verse/GenEnv)

- [Notifications](https://github.com/login?return_to=%2Fpaperwave%2FGenEnv)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fpaperwave%2FGenEnv)
- 
[Star
          0](https://github.com/login?return_to=%2Fpaperwave%2FGenEnv)

[https://github.com/paperwave/GenEnv](https://github.com/paperwave/GenEnv)

[Branches](https://github.com/paperwave/GenEnv/branches)[Tags](https://github.com/paperwave/GenEnv/tags)

[https://github.com/paperwave/GenEnv/branches](https://github.com/paperwave/GenEnv/branches)[https://github.com/paperwave/GenEnv/tags](https://github.com/paperwave/GenEnv/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| assets | assets |  |  |
| configs | configs |  |  |
| genenv | genenv |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# GenEnv: Difficulty-Aligned Co-Evolution Between LLM Agents and Environment Simulators

[https://github.com/paperwave/genenv#genenv-difficulty-aligned-co-evolution-between-llm-agents-and-environment-simulators](https://github.com/paperwave/genenv#genenv-difficulty-aligned-co-evolution-between-llm-agents-and-environment-simulators)

[https://arxiv.org/abs/2512.19682](https://arxiv.org/abs/2512.19682)[https://github.com/Gen-Verse/GenEnv](https://github.com/Gen-Verse/GenEnv)[https://github.com/volcengine/verl](https://github.com/volcengine/verl)[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)

---

## 🌟 Introduction

[https://github.com/paperwave/genenv#-introduction](https://github.com/paperwave/genenv#-introduction)

**GenEnv** is a novel co-training framework that simultaneously trains an **Agent LLM** and an **Environment LLM**. The key insight is that the Environment LLM learns to generate training tasks at the *boundary* of the Agent's capability—neither too easy nor too hard—creating an adaptive curriculum that maximizes learning efficiency.

[https://github.com/paperwave/GenEnv/blob/main/assets/framework.png](https://github.com/paperwave/GenEnv/blob/main/assets/framework.png)

### Key Features

[https://github.com/paperwave/genenv#key-features](https://github.com/paperwave/genenv#key-features)

- 🔄 **Co-Training Loop**: Agent and Environment LLMs are trained alternately, each improving the other
- 📊 **Adaptive Curriculum**: Environment generates tasks calibrated to the Agent's current skill level
- 🎯 **Boundary Learning**: Focus on tasks where the Agent has ~50% success rate for maximum gradient signal
- ⚡ **Built on veRL**: Leverages the efficient [veRL](https://github.com/volcengine/verl) framework for distributed GRPO training

---

## 🚀 Quick Start

[https://github.com/paperwave/genenv#-quick-start](https://github.com/paperwave/genenv#-quick-start)

### Prerequisites

[https://github.com/paperwave/genenv#prerequisites](https://github.com/paperwave/genenv#prerequisites)

```
# Clone the repository
git clone https://github.com/Gen-Verse/GenEnv.git
cd GenEnv

# Install dependencies
pip install -r requirements.txt
```

### Dependencies

[https://github.com/paperwave/genenv#dependencies](https://github.com/paperwave/genenv#dependencies)

GenEnv is built on top of [veRL](https://github.com/volcengine/verl). Please follow veRL's installation instructions first.

---

## 📋 Usage

[https://github.com/paperwave/genenv#-usage](https://github.com/paperwave/genenv#-usage)

### ⚠️ Important: Customization Required

[https://github.com/paperwave/genenv#%EF%B8%8F-important-customization-required](https://github.com/paperwave/genenv#%EF%B8%8F-important-customization-required)

This codebase provides the **training framework** for GenEnv. To use it for your specific task, you need to customize:

1. 

**Reward Function** (`genenv/utils/reward_functions.py`)

  - Replace `RewardManager.compute_reward()` with your domain-specific reward logic
  - Examples provided for math reasoning, tool calling, and action-based tasks

2. 

**Environment Prompt Template** (`genenv/trainer/genenv_trainer.py`)

  - Modify `_generate_new_tasks()` to customize how the Env LLM generates new tasks
  - Adjust the prompt template based on your task format

3. 

**Task Parsing** (`genenv/trainer/genenv_trainer.py`)

  - Update the parsing logic in `_generate_new_tasks()` to extract tasks from Env LLM outputs

4. 

**Initial Training Data** (`configs/genenv_config.yaml`)

  - Prepare your training data in parquet format with prompts and ground truth answers

### Configuration

[https://github.com/paperwave/genenv#configuration](https://github.com/paperwave/genenv#configuration)

Edit `configs/genenv_config.yaml`:

```
# Key paths to customize
env_model_path: /path/to/your/env/model        # Environment LLM
actor_rollout_ref.model.path: /path/to/agent   # Agent LLM
data.train_files: /path/to/train.parquet       # Training data
data.val_files: /path/to/val.parquet           # Validation data
trainer.default_local_dir: /path/to/checkpoints

# GenEnv specific parameters
genenv:
  enable: True
  filtering_k: 0.1           # Filter top/bottom 10% of prompts
  num_generations_per_prompt: 4
```

### Training

[https://github.com/paperwave/genenv#training](https://github.com/paperwave/genenv#training)

```
# Using the provided script
bash scripts/run_genenv.sh --model /path/to/model --env-model /path/to/env/model

# Or directly with Python
python -m genenv.train \
    genenv.enable=True \
    env_model_path=/path/to/env/model \
    actor_rollout_ref.model.path=/path/to/agent \
    data.train_files=/path/to/train.parquet \
    data.val_files=/path/to/val.parquet
```

---

## 📁 Project Structure

[https://github.com/paperwave/genenv#-project-structure](https://github.com/paperwave/genenv#-project-structure)

```
GenEnv/
├── genenv/
│   ├── __init__.py
│   ├── train.py                    # Main training entry point
│   ├── trainer/
│   │   ├── __init__.py
│   │   └── genenv_trainer.py       # Core GenEnv training loop
│   └── utils/
│       ├── __init__.py
│       └── reward_functions.py     # Reward function implementations
├── configs/
│   └── genenv_config.yaml          # Training configuration
├── scripts/
│   └── run_genenv.sh               # Training launch script
├── requirements.txt
└── README.md
```

---

## 🔧 Reward Function Examples

[https://github.com/paperwave/genenv#-reward-function-examples](https://github.com/paperwave/genenv#-reward-function-examples)

### Math Reasoning (Default)

[https://github.com/paperwave/genenv#math-reasoning-default](https://github.com/paperwave/genenv#math-reasoning-default)

```
def compute_reward(self, generated_text: str, ground_truth: Any) -> float:
    pred_answer = self._extract_boxed_answer(generated_text)
    gold_answer = self._get_gold_answer(ground_truth)
    return 1.0 if pred_answer == gold_answer else 0.0
```

### Tool Calling

[https://github.com/paperwave/genenv#tool-calling](https://github.com/paperwave/genenv#tool-calling)

```
from genenv.utils import ToolCallingRewardManager

reward_fn = ToolCallingRewardManager(tokenizer=tokenizer)
# Checks if <tool_call>{"name": ..., "parameters": ...}</tool_call> matches ground truth
```

### Custom Domain

[https://github.com/paperwave/genenv#custom-domain](https://github.com/paperwave/genenv#custom-domain)

```
class MyRewardManager(RewardManager):
    def compute_reward(self, generated_text: str, ground_truth: Any) -> float:
        # Your custom reward logic here
        return score
```

---

## 📊 Training Data Format

[https://github.com/paperwave/genenv#-training-data-format](https://github.com/paperwave/genenv#-training-data-format)

Your training data should be in parquet format with at least these columns:

| Column | Description |
|---|---|
| prompt | The task prompt (can be string or list of chat messages) |
| reward_model | Dict containing {"ground_truth": <answer>} |

Example:

```
import pandas as pd

data = [
    {
        "prompt": [{"role": "user", "content": "What is 2 + 2?"}],
        "reward_model": {"ground_truth": "4"}
    },
    # ... more examples
]
pd.DataFrame(data).to_parquet("train.parquet")
```

---

## 🙏 Acknowledgements

[https://github.com/paperwave/genenv#-acknowledgements](https://github.com/paperwave/genenv#-acknowledgements)

This project is built upon the excellent work of:

- **[veRL](https://github.com/volcengine/verl)** - Volcano Engine Reinforcement Learning for LLMs
- **[vLLM](https://github.com/vllm-project/vllm)** - High-throughput LLM serving

We thank the authors for making their code publicly available.

---

## 📄 License

[https://github.com/paperwave/genenv#-license](https://github.com/paperwave/genenv#-license)

This project is licensed under the Apache License 2.0 - see the [LICENSE](https://github.com/paperwave/GenEnv/blob/main/LICENSE) file for details.

---

## 📖 Citation
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

