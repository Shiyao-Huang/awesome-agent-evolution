---
repo: labicon/curricullm
url: https://github.com/labicon/curricullm
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - labicon/CurricuLLM: Official code repository for CurricuLLM: Automatic Task Curricula Design for Learning Complex Robot Skills using Large Language Models · GitHub

**Source**: https://github.com/labicon/curricullm

---

[Skip to content](https://github.com/labicon/curricullm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[labicon](https://github.com/labicon)

/
**[CurricuLLM](https://github.com/labicon/CurricuLLM)**

Public

- [Notifications](https://github.com/login?return_to=%2Flabicon%2FCurricuLLM)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Flabicon%2FCurricuLLM)
- 
[Star
          27](https://github.com/login?return_to=%2Flabicon%2FCurricuLLM)

[https://github.com/labicon/CurricuLLM](https://github.com/labicon/CurricuLLM)

[Branches](https://github.com/labicon/CurricuLLM/branches)[Tags](https://github.com/labicon/CurricuLLM/tags)

[https://github.com/labicon/CurricuLLM/branches](https://github.com/labicon/CurricuLLM/branches)[https://github.com/labicon/CurricuLLM/tags](https://github.com/labicon/CurricuLLM/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History196 Commits196 Commits |  |  |  |
| .ipynb_checkpoints | .ipynb_checkpoints |  |  |
| configs | configs |  |  |
| docs | docs |  |  |
| environments | environments |  |  |
| evaluation | evaluation |  |  |
| gpt | gpt |  |  |
| train | train |  |  |
| traj_feedback | traj_feedback |  |  |
| utils | utils |  |  |
| .DS_Store | .DS_Store |  |  |
| .gitignore | .gitignore |  |  |
| main.py | main.py |  |  |
| readme.md | readme.md |  |  |
| requirements.txt | requirements.txt |  |  |
| visualize_policy.py | visualize_policy.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# CurricuLLM: Automatic Task Curricula Design for Learning Complex Robot Skills using Large Language Models

[https://github.com/labicon/curricullm#curricullm-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models](https://github.com/labicon/curricullm#curricullm-automatic-task-curricula-design-for-learning-complex-robot-skills-using-large-language-models)

[[arXiv]](https://arxiv.org/abs/2409.18382)[[Project Website]](https://iconlab.negarmehr.com/CurricuLLM/)

## Introduction

[https://github.com/labicon/curricullm#introduction](https://github.com/labicon/curricullm#introduction)

Curriculum learning is a training mechanism in reinforcement learning (RL) that facilitates the achievement of complex policies by progressively increasing the task difficulty during training. However, designing effective curricula for a specific task often requires extensive domain knowledge and human intervention, which limits its applicability across various domains. Our core idea is that large language models (LLMs), with their extensive training on diverse language data and ability to encapsulate world knowledge, present significant potential for efficiently breaking down tasks and decomposing skills across various robotics environments.

We propose CurricuLLM, which leverages the high-level planning and programming capabilities of LLMs for curriculum design, thereby enhancing the efficient learning of complex target tasks. CurricuLLM consists of: (Step 1) Generating sequence of subtasks that aid target task learning in natural language form, (Step 2) Translating natural language description of subtasks in executable task code, including the reward code and goal distribution code, and (Step 3) Evaluating trained policies based on trajectory rollout and subtask description. We evaluate CurricuLLM in various robotics simulation environments, ranging from manipulation, navigation, and locomotion, to show that CurricuLLM can aid learning complex robot control tasks.

## Installation

[https://github.com/labicon/curricullm#installation](https://github.com/labicon/curricullm#installation)

1. Create a conda environment

```
conda create -n CurricuLLM python=3.10
conda activate CurricuLLM
```

1. Install CurricuLLM

Before you run CurricuLLM, please install dependencies and edited custom environments.

```
git clone https://github.com/labicon/CurricuLLM.git
cd CurricuLLM
pip install -r requirements.txt
pip install -e environments
```

1. OpenAI API

CurricuLLM currently uses OpenAI API for LLM interaction. Please add your personal API key in `./gpt/key.yaml` as

```
OPENAI_API_KEY: your API key
```

## Getting Started

[https://github.com/labicon/curricullm#getting-started](https://github.com/labicon/curricullm#getting-started)

You can run CurricuLLM using `main.py`

```
python main.py --task={Task name} --exp={Experiment name} --logdir={Log directory} --seed={random seed}
```

- `task` is a task to learn. You can find options in `configs`
- `exp` is experiment options. Currently, there are 4 experiment options. 
  - curriculum: CurricuLLM experiments
  - her: Hindsight Experience Replay baseline
  - sac: Soft Actor Critic baseline
  - zeroshot: LLM-zeroshot baseline

- `logdir` is directory that you want to store the results
- `seed` is random seed for your experiments

## Acknowledgement

[https://github.com/labicon/curricullm#acknowledgement](https://github.com/labicon/curricullm#acknowledgement)

- Our RL training is based on stable-baselines3
- Our environments are from gymnasium-robotics

## About

         Official code repository for CurricuLLM: Automatic Task Curricula Design for Learning Complex Robot Skills using Large Language Models       

### Topics

[curriculum-learning](https://github.com/topics/curriculum-learning)[llm-robotics](https://github.com/topics/llm-robotics)

### Resources

[Readme](https://github.com/labicon/curricullm#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/labicon/CurricuLLM/activity)

[Custom properties](https://github.com/labicon/CurricuLLM/custom-properties)

### Stars

[27
        stars](https://github.com/labicon/CurricuLLM/stargazers)

### Watchers

[3
        watching](https://github.com/labicon/CurricuLLM/watchers)

### Forks

[3
        forks](https://github.com/labicon/CurricuLLM/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Flabicon%2FCurricuLLM&report=labicon+%28user%29)

## [Releases](https://github.com/labicon/CurricuLLM/releases)

No releases published

## [Packages
      0](https://github.com/orgs/labicon/packages?repo_name=CurricuLLM)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/labicon/CurricuLLM/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          69.1%](https://github.com/labicon/CurricuLLM/search?l=jupyter-notebook)
- [Python
          30.9%](https://github.com/labicon/CurricuLLM/search?l=python)

     You can’t perform that action at this time.
