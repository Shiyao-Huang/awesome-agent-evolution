---
repo: euphoria16/ui-genie
url: https://github.com/euphoria16/ui-genie
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Euphoria16/UI-Genie: [NeurIPS 2025] UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents · GitHub

**Source**: https://github.com/euphoria16/ui-genie

---

[Skip to content](https://github.com/euphoria16/ui-genie#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Euphoria16](https://github.com/Euphoria16)

/
**[UI-Genie](https://github.com/Euphoria16/UI-Genie)**

Public

- [Notifications](https://github.com/login?return_to=%2FEuphoria16%2FUI-Genie)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2FEuphoria16%2FUI-Genie)
- 
[Star
          57](https://github.com/login?return_to=%2FEuphoria16%2FUI-Genie)

[https://github.com/Euphoria16/UI-Genie](https://github.com/Euphoria16/UI-Genie)

[Branches](https://github.com/Euphoria16/UI-Genie/branches)[Tags](https://github.com/Euphoria16/UI-Genie/tags)

[https://github.com/Euphoria16/UI-Genie/branches](https://github.com/Euphoria16/UI-Genie/branches)[https://github.com/Euphoria16/UI-Genie/tags](https://github.com/Euphoria16/UI-Genie/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| assets | assets |  |  |
| src | src |  |  |
| .gitattributes | .gitattributes |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧞 UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents

[https://github.com/euphoria16/ui-genie#-ui-genie-a-self-improving-approach-for-iteratively-boosting-mllm-based-mobile-gui-agents](https://github.com/euphoria16/ui-genie#-ui-genie-a-self-improving-approach-for-iteratively-boosting-mllm-based-mobile-gui-agents)

This work presents **UI-Genie**, a self-improving framework that enhances MLLM-based GUI Agents through iterative agent-reward model co-evolution, achieving state-of-the-art performance without manual annotation.

[[📖 Paper](https://arxiv.org/abs/2505.21496)] [[🤗 Models & Datasets](https://huggingface.co/collections/HanXiao1999/ui-genie)]

## 👀 Overview

[https://github.com/euphoria16/ui-genie#-overview](https://github.com/euphoria16/ui-genie#-overview)

[https://github.com/Euphoria16/UI-Genie/blob/main/assets/framework.png](https://github.com/Euphoria16/UI-Genie/blob/main/assets/framework.png)

**UI-Genie** introduces a novel self-improving framework for GUI agents that:

- 🎯 **Eliminates manual annotation** through iterative synthetic trajectory generation
- 🔄 **Co-evolves agent and reward models** through self-improvement cycles
- 📊 **Generates high-quality datasets** without human effort
- 🏆 **Achieves SOTA performance** across multiple benchmarks

### 🌟 Key Features

[https://github.com/euphoria16/ui-genie#-key-features](https://github.com/euphoria16/ui-genie#-key-features)

[https://github.com/Euphoria16/UI-Genie/blob/main/assets/reward_model.png](https://github.com/Euphoria16/UI-Genie/blob/main/assets/reward_model.png)

- **UI-Genie-RM**: First specialized reward model for GUI trajectory assessment with image-text interleaved architecture
- **Self-Improvement Pipeline**: Progressive expansion of solvable GUI tasks through reward-guided exploration
- **Synthetic Data Generation**: High-quality trajectory synthesis with outcome verification

## 🤖 Model Zoo

[https://github.com/euphoria16/ui-genie#-model-zoo](https://github.com/euphoria16/ui-genie#-model-zoo)

### Released Models

[https://github.com/euphoria16/ui-genie#released-models](https://github.com/euphoria16/ui-genie#released-models)

| Model | Size | AndroidControl-Low | AndroidControl-High | AndroidLab | Android Arena | Download |
|---|---|---|---|---|---|---|
|  |  | SR | SR | SR | SR |  |
| UI-Genie-Agent | 3B | 93.8 | 72.9 | 28.8 | - | 🤗 HuggingFace |
| UI-Genie-Agent | 7B | 94.3 | 74.2 | 38.7 | 20.4 | 🤗 HuggingFace |
| UI-Genie-Agent | 72B | 94.8 | 77.0 | 41.2 | - | Coming soon |

### Reward Model

[https://github.com/euphoria16/ui-genie#reward-model](https://github.com/euphoria16/ui-genie#reward-model)

| Model | Size | Step-Level F1 | Outcome-Level F1 |
|---|---|---|---|
| UI-Genie-RM | 7B | 79.6 | 82.1 |

## 📊 Datasets

[https://github.com/euphoria16/ui-genie#-datasets](https://github.com/euphoria16/ui-genie#-datasets)

We release two novel datasets that enable training GUI agents without manual annotation:

| Dataset | Size | Description | Link |
|---|---|---|---|
| UI-Genie-RM-517k | 517K | First reward dataset for GUI agents | 🤗 HuggingFace |
| UI-Genie-Agent-16k | 16K | High-quality synthetic trajectories | 🤗 HuggingFace |

## 🛠️ Installation

[https://github.com/euphoria16/ui-genie#%EF%B8%8F-installation](https://github.com/euphoria16/ui-genie#%EF%B8%8F-installation)

1. Clone this repository:

```
git clone https://github.com/Euphoria16/UI-Genie.git
cd UI-Genie
```

1. Create conda environment:

```
conda create -n ui-genie python=3.10.12 -y
conda activate ui-genie
```

1. Install dependencies:

```
cd src/ms-swift
pip install -e .
```

## 📈 Evaluation

[https://github.com/euphoria16/ui-genie#-evaluation](https://github.com/euphoria16/ui-genie#-evaluation)

### Prerequisites

[https://github.com/euphoria16/ui-genie#prerequisites](https://github.com/euphoria16/ui-genie#prerequisites)

Before running evaluations, you need to download the source images from AndroidControl:

```
# Download AndroidControl images and place them in the correct directory
# Place images under: src/ms-swift/data/androidcontrol/imgs/
```

### AndroidControl Benchmark

[https://github.com/euphoria16/ui-genie#androidcontrol-benchmark](https://github.com/euphoria16/ui-genie#androidcontrol-benchmark)

We provide evaluation scripts using the [ms-swift](https://github.com/modelscope/swift) library with pre-configured JSONL files located in `src/ms-swift/data/`.

#### High-Level Task Evaluation

[https://github.com/euphoria16/ui-genie#high-level-task-evaluation](https://github.com/euphoria16/ui-genie#high-level-task-evaluation)

Evaluate agent performance on high-level tasks that multi-step execution:

```
cd src/ms-swift
bash exps/eval_androidcontrol_swift_high_level.sh
```

#### Low-Level Task Evaluation

[https://github.com/euphoria16/ui-genie#low-level-task-evaluation](https://github.com/euphoria16/ui-genie#low-level-task-evaluation)

Evaluate agent performance on low-level tasks with step instructions:

```
cd src/ms-swift
bash exps/eval_androidcontrol_swift_low_level.sh
```

### Other Benchmarks

[https://github.com/euphoria16/ui-genie#other-benchmarks](https://github.com/euphoria16/ui-genie#other-benchmarks)

Additional evaluation scripts for AndroidLab and Android Arena benchmarks will be released soon.

## 🔥 Training

[https://github.com/euphoria16/ui-genie#-training](https://github.com/euphoria16/ui-genie#-training)

We train UI-Genie agents based on the **Qwen2.5-VL** model family with the [ms-swift](https://github.com/modelscope/swift) framework for supervised fine-tuning.

### Training Data

[https://github.com/euphoria16/ui-genie#training-data](https://github.com/euphoria16/ui-genie#training-data)

Our training pipeline combines multiple datasets:

- [AndroidControl](https://github.com/google-research/google-research/tree/master/android_control) training set
- [AMEX](https://huggingface.co/datasets/Yuxiang007/AMEX) training set
- [AndroidLab](https://github.com/THUDM/Android-Lab) training set
- **[UI-Genie-Agent-16k](https://huggingface.co/datasets/HanXiao1999/UI-Genie-Agent-16k)**

### Training Scripts

[https://github.com/euphoria16/ui-genie#training-scripts](https://github.com/euphoria16/ui-genie#training-scripts)

#### UI-Genie-Agent-3B (Full Fine-tuning)

[https://github.com/euphoria16/ui-genie#ui-genie-agent-3b-full-fine-tuning](https://github.com/euphoria16/ui-genie#ui-genie-agent-3b-full-fine-tuning)

Train the 3B model with full parameter fine-tuning:

```
cd src/ms-swift
bash exps/train_agent_3B.sh
```

#### UI-Genie-Agent-7B (Full Fine-tuning)

[https://github.com/euphoria16/ui-genie#ui-genie-agent-7b-full-fine-tuning](https://github.com/euphoria16/ui-genie#ui-genie-agent-7b-full-fine-tuning)

Train the 7B model with full parameter fine-tuning:

```
cd src/ms-swift
bash exps/train_agent_7B.sh
```

#### UI-Genie-Agent-72B (Parameter-Efficient Fine-tuning)

[https://github.com/euphoria16/ui-genie#ui-genie-agent-72b-parameter-efficient-fine-tuning](https://github.com/euphoria16/ui-genie#ui-genie-agent-72b-parameter-efficient-fine-tuning)

Train the 72B model using RSLoRA for peft:

```
cd src/ms-swift
bash exps/train_agent_72B.sh
```

## 🤝 Acknowledgements

[https://github.com/euphoria16/ui-genie#-acknowledgements](https://github.com/euphoria16/ui-genie#-acknowledgements)

We thank the teams behind [Qwen2.5-VL](https://github.com/QwenLM/Qwen2.5-VL), [AndroidControl](https://github.com/google-research/google-research/tree/master/android_control), and [AndroidLab](https://github.com/THUDM/Android-Lab) for their foundational work and [ms-swift](https://github.com/modelscope/ms-swift) for the efficient training and inference framework.

## 📧 Contact

[https://github.com/euphoria16/ui-genie#-contact](https://github.com/euphoria16/ui-genie#-contact)

For questions and feedback, please open an issue or contact:

- Han Xiao: [1155229123@link.cuhk.edu.hk](mailto:1155229123@link.cuhk.edu.hk)
- Aojun Zhou: [aojunzhou@gmail.com](mailto:aojunzhou@gmail.com)

## 📄 License

[https://github.com/euphoria16/ui-genie#-license](https://github.com/euphoria16/ui-genie#-license)

This project is released under the [MIT License](https://github.com/Euphoria16/UI-Genie/blob/main/LICENSE).

## About

         [NeurIPS 2025] UI-Genie: A Self-Improving Approach for Iteratively Boosting MLLM-based Mobile GUI Agents       

### Resources

[Readme](https://github.com/euphoria16/ui-genie#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Euphoria16/UI-Genie/activity)

### Stars

[57
        stars](https://github.com/Euphoria16/UI-Genie/stargazers)

### Watchers

[1
        watching](https://github.com/Euphoria16/UI-Genie/watchers)

### Forks

[1
        fork](https://github.com/Euphoria16/UI-Genie/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FEuphoria16%2FUI-Genie&report=Euphoria16+%28user%29)

## [Releases](https://github.com/Euphoria16/UI-Genie/releases)

No releases published
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

