---
repo: zou-group/sirius
url: https://github.com/zou-group/sirius
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - zou-group/sirius: SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning · GitHub

**Source**: https://github.com/zou-group/sirius

---

[Skip to content](https://github.com/zou-group/sirius#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zou-group](https://github.com/zou-group)

/
**[sirius](https://github.com/zou-group/sirius)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzou-group%2Fsirius)You must be signed in to change notification settings
- [Fork
    10](https://github.com/login?return_to=%2Fzou-group%2Fsirius)
- 
[Star
          101](https://github.com/login?return_to=%2Fzou-group%2Fsirius)

[https://github.com/zou-group/sirius](https://github.com/zou-group/sirius)

[Branches](https://github.com/zou-group/sirius/branches)[Tags](https://github.com/zou-group/sirius/tags)

[https://github.com/zou-group/sirius/branches](https://github.com/zou-group/sirius/branches)[https://github.com/zou-group/sirius/tags](https://github.com/zou-group/sirius/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| Actor_Critic | Actor_Critic |  |  |
| Competitive | Competitive |  |  |
| Problem_solving | Problem_solving |  |  |
| assets | assets |  |  |
| dataset | dataset |  |  |
| libs | libs |  |  |
| .DS_Store | .DS_Store |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| environment.yml | environment.yml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://lbesson.mit-license.org/](https://lbesson.mit-license.org/)[https://arxiv.org/pdf/2502.04780](https://arxiv.org/pdf/2502.04780)

## SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning (NeurIPS 2025)

[https://github.com/zou-group/sirius#sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-neurips-2025](https://github.com/zou-group/sirius#sirius-self-improving-multi-agent-systems-via-bootstrapped-reasoning-neurips-2025)

This is the repository for the paper [SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning](https://arxiv.org/pdf/2502.04780) (NeurIPS 2025).

SIRIUS is a self-improving multi-agent framework that continuously enhances reasoning ability by maintaining an experience library of successful trajectories and bootstrapping from failed ones.

We support three main multi-agent settings, each with its own directory:

- `Problem_solving/` – collaborative QA (College Physics/Chemistry, PubMedQA-style)
- `Actor_Critic/` – Actor + Judgment + Critic for iterative refinement
- `Competitive/` – negotiation / game-theoretic interactions

[https://github.com/zou-group/sirius/blob/main/assets/task.png](https://github.com/zou-group/sirius/blob/main/assets/task.png)

### Setup

[https://github.com/zou-group/sirius#setup](https://github.com/zou-group/sirius#setup)

#### Clone the repo

[https://github.com/zou-group/sirius#clone-the-repo](https://github.com/zou-group/sirius#clone-the-repo)

```
git clone https://github.com/zou-group/sirius.git
cd sirius
```

#### Create environment & install dependencies

[https://github.com/zou-group/sirius#create-environment--install-dependencies](https://github.com/zou-group/sirius#create-environment--install-dependencies)

```
conda create -n sirius python=3.10
conda activate sirius
conda env create -f environment.yml
```

#### Configure API access

[https://github.com/zou-group/sirius#configure-api-access](https://github.com/zou-group/sirius#configure-api-access)

Set your keys as environment variables or in a config file as used by the codebase, for example:

```
export OPENAI_API_KEY=...
```

### Repository Overview

[https://github.com/zou-group/sirius#repository-overview](https://github.com/zou-group/sirius#repository-overview)

- 

`Problem_solving/` Pipelines for college-level reasoning & biomedical QA:

  - College Physics / College Chemistry
  - PubMedQA-style question answering (long context + question)

- 

`Actor_Critic/` Pipelines for the Actor–Judgment–Critic setting:

  - Actor proposes an answer
  - Judgment agent decides correct / incorrect
  - Critic writes feedback and guides regeneration

- 

`Competitive/` Pipelines for competitive games:

  - Resource Exchange
  - Sell & Buy
  - Ultimatum Each is a two-player turn-based game with utilities defined in the paper.

#### Data Format & Trajectories

[https://github.com/zou-group/sirius#data-format--trajectories](https://github.com/zou-group/sirius#data-format--trajectories)

SiriuS operates on trajectories:

- 

A trajectory is the full interaction between agents for one task instance:

- 

Input question / context

- 

Intermediate messages from each agent (Physicist, Mathematician, Summarizer, Actor, Critic, etc.)

- 

Final answer(s) or game outcome

- 

Reward signal(s) (accuracy or utility)

### Quick Start

[https://github.com/zou-group/sirius#quick-start](https://github.com/zou-group/sirius#quick-start)

#### Collect Raw Multi-Agent Trajectories

[https://github.com/zou-group/sirius#collect-raw-multi-agent-trajectories](https://github.com/zou-group/sirius#collect-raw-multi-agent-trajectories)

First, run the multi-agent system (with base models) on your tasks and log the full interaction.

A sample training dataset (for physics problem solving) is already provided at:

```
dataset/phy_train.jsonl
```

Each line of this file is one training example (e.g., one physics problem) that the multi-agent system will solve.

Put your training and eval data at

```
dataset/{subject}_train.jsonl
dataset/{subject}_test.jsonl
```

Each subdirectory provides task-specific drivers to:

- 

Load the dataset

- 

Instantiate the appropriate agent graph (see the paper for structures)

```
Problem_solving/PhyChem/agent.py
```

- 

solve the problems, collect full trajectories

```
python Problem_solving/PhyChem/get_a_sol.py --model='gpt-3.5-turbo' --task='MMLU_physics'  --prompt_type='multi_agent' --mode='generate' --subject='phy'
```

#### Filter Trajectories

[https://github.com/zou-group/sirius#filter-trajectories](https://github.com/zou-group/sirius#filter-trajectories)

```
python libs/merge.py
```

#### Augment Failed Trajectories

[https://github.com/zou-group/sirius#augment-failed-trajectories](https://github.com/zou-group/sirius#augment-failed-trajectories)

First, generate feedback for trajectories where the agents produced incorrect solutions:

```
python Problem_solving/PhyChem/get_b_feedback.py --model='gpt-3.5-turbo' --task='MMLU_physics'  --prompt_type='multi_agent' --mode='generate' --subject='phy'
```

Then, regenerate improved trajectories conditioned on this feedback:

```
python Problem_solving/PhyChem/get_c_regenerate.py --model='gpt-3.5-turbo' --task='MMLU_physics'  --prompt_type='multi_agent' --mode='generate' --subject='phy'
```

#### Fine-Tune Agents on the Library

[https://github.com/zou-group/sirius#fine-tune-agents-on-the-library](https://github.com/zou-group/sirius#fine-tune-agents-on-the-library)

We use the OpenAI Supervised Fine-Tuning (SFT) API in our example, but you can plug in any fine-tuning framework of your choice using the constructed experience library:

```
python Problem_solving/PhyChem/get_finetune_data.py
python Problem_solving/PhyChem/fine_tune.py
```

```
@article{zhao2025sirius,
  title={SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning},
  author={Zhao, Wanjia and Yuksekgonul, Mert and Wu, Shirley and Zou, James},
  journal={arXiv preprint arXiv:2502.04780},
  year={2025}
}
```

## About

         SiriuS: Self-improving Multi-agent Systems via Bootstrapped Reasoning       

[arxiv.org/pdf/2502.04780](https://arxiv.org/pdf/2502.04780)

### Topics

[multiagent](https://github.com/topics/multiagent)[reasoning](https://github.com/topics/reasoning)[finetuning](https://github.com/topics/finetuning)[self-improving](https://github.com/topics/self-improving)[llm](https://github.com/topics/llm)

### Resources

[Readme](https://github.com/zou-group/sirius#readme-ov-file)

### License

[MIT license](https://github.com/zou-group/sirius#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/zou-group/sirius/activity)

[Custom properties](https://github.com/zou-group/sirius/custom-properties)

### Stars

[101
        stars](https://github.com/zou-group/sirius/stargazers)

### Watchers

[15
        watching](https://github.com/zou-group/sirius/watchers)

### Forks

[10
        forks](https://github.com/zou-group/sirius/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fzou-group%2Fsirius&report=zou-group+%28user%29)

## [Releases](https://github.com/zou-group/sirius/releases)

No releases published
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

