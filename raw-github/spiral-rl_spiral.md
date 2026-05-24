---
repo: spiral-rl/spiral
url: https://github.com/spiral-rl/spiral
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - spiral-rl/spiral: SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning · GitHub

**Source**: https://github.com/spiral-rl/spiral

---

[Skip to content](https://github.com/spiral-rl/spiral#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[spiral-rl](https://github.com/spiral-rl)

/
**[spiral](https://github.com/spiral-rl/spiral)**

Public

- [Notifications](https://github.com/login?return_to=%2Fspiral-rl%2Fspiral)You must be signed in to change notification settings
- [Fork
    22](https://github.com/login?return_to=%2Fspiral-rl%2Fspiral)
- 
[Star
          190](https://github.com/login?return_to=%2Fspiral-rl%2Fspiral)

[https://github.com/spiral-rl/spiral](https://github.com/spiral-rl/spiral)

[Branches](https://github.com/spiral-rl/spiral/branches)[Tags](https://github.com/spiral-rl/spiral/tags)

[https://github.com/spiral-rl/spiral/branches](https://github.com/spiral-rl/spiral/branches)[https://github.com/spiral-rl/spiral/tags](https://github.com/spiral-rl/spiral/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| assets | assets |  |  |
| cmd/tinker | cmd/tinker |  |  |
| data | data |  |  |
| docs | docs |  |  |
| evals | evals |  |  |
| spiral | spiral |  |  |
| tinker | tinker |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| run.sh | run.sh |  |  |
| run_multi_node.sh | run_multi_node.sh |  |  |
| train_spiral.py | train_spiral.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/spiral-rl/spiral/blob/main/assets/spiral-logo.png](https://github.com/spiral-rl/spiral/blob/main/assets/spiral-logo.png)

#  Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning 

[https://github.com/spiral-rl/spiral#-self-play-on-zero-sum-games-incentivizes-reasoning-via-multi-agent-multi-turn-reinforcement-learning-](https://github.com/spiral-rl/spiral#-self-play-on-zero-sum-games-incentivizes-reasoning-via-multi-agent-multi-turn-reinforcement-learning-)

[https://arxiv.org/abs/2506.24119](https://arxiv.org/abs/2506.24119)[https://github.com/spiral-rl/spiral](https://github.com/spiral-rl/spiral)[https://huggingface.co/spiral-rl](https://huggingface.co/spiral-rl)

[🤗 Hugging Face Paper](https://huggingface.co/papers/2506.24119) |   [🤗 Hugging Face Collection](https://huggingface.co/collections/spiral-rl/spiral-68627f14c250c3cc1fdbf6fe)

## Updates

[https://github.com/spiral-rl/spiral#updates](https://github.com/spiral-rl/spiral#updates)

- 30/06/2025: 🎉 We release our paper, models, game-play dataset and self-play codebase.

## Introduction

[https://github.com/spiral-rl/spiral#introduction](https://github.com/spiral-rl/spiral#introduction)

Recent advances in reinforcement learning have shown that language models can develop sophisticated reasoning through training on tasks with verifiable rewards, but these approaches depend on expert-curated problem-answer pairs and domain-specific reward engineering.

We introduce SPIRAL, a self-play framework where models learn by playing **multi-turn, zero-sum games against continuously improving versions of themselves**, eliminating the need for human supervision. Through zero-sum self-play, SPIRAL generates an ***infinite curriculum*** of progressively challenging problems as models must constantly adapt to stronger opponents.

[https://github.com/spiral-rl/spiral/blob/main/assets/teaser-1.png](https://github.com/spiral-rl/spiral/blob/main/assets/teaser-1.png)

Applying SPIRAL to Qwen3 base models in two-player zero-sum text games, we observe the agents develop advanced reasoning strategies to win the competitive game. Furthermore, the trained models show substantial gains on a range of math and general reasoning benchmarks. These results suggest that self-play in zero-sum games can naturally induce transferable reasoning capabilities, highlighting a promising direction for autonomous reasoning development.

[https://github.com/spiral-rl/spiral/blob/main/assets/fig1-1.png](https://github.com/spiral-rl/spiral/blob/main/assets/fig1-1.png)

## Architecture

[https://github.com/spiral-rl/spiral#architecture](https://github.com/spiral-rl/spiral#architecture)

[https://github.com/spiral-rl/spiral/blob/main/assets/framework.png](https://github.com/spiral-rl/spiral/blob/main/assets/framework.png)

SPIRAL employs an actor-learner architecture for scalable self-play training. Parallel actors sample trajectories from a diverse set of games using vectorized environments. A single policy $\pi_t$ plays both roles, generating zero-sum, sparse reward game trajectories. The centralized learner processes these trajectories using Role-conditioned Advantage Estimation (RAE) to compute separate advantages, $A_0(s,a)$ and $A_1(s,a)$, for each role. These are then used for on-policy reinforcement learning updates.

## Usage

[https://github.com/spiral-rl/spiral#usage](https://github.com/spiral-rl/spiral#usage)

### Installation

[https://github.com/spiral-rl/spiral#installation](https://github.com/spiral-rl/spiral#installation)

```
# clone codebase
git clone git@github.com:spiral-rl/spiral.git && cd spiral

# prepare environment
conda create -y -n spiral python=3.10
conda activate spiral

# install dependencies
pip install vllm==0.8.4 && pip install oat-llm==0.2.1
pip install -e .
```

### Training

[https://github.com/spiral-rl/spiral#training](https://github.com/spiral-rl/spiral#training)

```
bash run.sh
```

This training script runs SPIRAL on the Kuhn Poker environment for 400 policy iteration steps. It has been tested on an 8×H100 GPU setup. During training, we evaluate model performance online using three metrics:

1. 

Win rate against a fixed opponent on the training game;

2. 

Win rate against a fixed opponent on an out-of-domain game ;

3. 

Accuracy on math reasoning benchmarks.

Example result curves are shown below.

[https://github.com/spiral-rl/spiral/blob/main/assets/curves.png](https://github.com/spiral-rl/spiral/blob/main/assets/curves.png)

### Evaluation

[https://github.com/spiral-rl/spiral#evaluation](https://github.com/spiral-rl/spiral#evaluation)

In addition to the online evaluation, we provide offline evaluation across a broader range of benchmarks to assess the model's OOD game and general reasoning capabilities.

**Game evaluation**

```
# we rely on openrouter to play against gemini models
export OPENROUTER_API_KEY=""

# Add your models to the batch_run.sh
bash evals/game/batch_run.sh
```

**Benchmark evaluation**

```
cd evals/benchmarks
# Add your models to the batch_run.sh
bash batch_run.sh
```

## Tinker Training

[https://github.com/spiral-rl/spiral#tinker-training](https://github.com/spiral-rl/spiral#tinker-training)

SPIRAL now supports training with [Thinking Machine](https://thinkingmachine.ai/)'s **Tinker** distributed training framework. The `tinker/` addon provides a simplified synchronous training loop — no population-based self-play (FSP) or async actor-learner needed.

### Quick Start

[https://github.com/spiral-rl/spiral#quick-start](https://github.com/spiral-rl/spiral#quick-start)

```
# Install with Tinker dependencies
pip install -e ".[tinker]"

# Set required environment variables
export TINKER_API_KEY=your_tinker_key
export WANDB_API_KEY=your_wandb_key
export OPENROUTER_API_KEY=your_openrouter_key

# Run training (Qwen3-4B)
bash cmd/tinker/run_tinker_qwen3_4b.sh
```

### Supported Models

[https://github.com/spiral-rl/spiral#supported-models](https://github.com/spiral-rl/spiral#supported-models)

| Model | Script | Renderer | Notes |
|---|---|---|---|
| Qwen3-4B-Instruct | cmd/tinker/run_tinker_qwen3_4b.sh | qwen3 | Recommended for quick experiments |
| Llama-3-8B | cmd/tinker/run_tinker_llama_8b.sh | llama_instruct |  |
| GPT-OSS-20B | cmd/tinker/run_tinker_gpt_oss_20b.sh | gpt_oss | Reasoning MoE (small) |
| GPT-OSS-120B | cmd/tinker/run_tinker_gpt_oss_120b.sh | gpt_oss | Reasoning MoE (medium), lower batch/LR |
| Qwen3-8B-Base | cmd/tinker/run_tinker_qwen3_8b_base.sh | qwen3_base | Base (non-instruct) model |

See [docs/TINKER.md](https://github.com/spiral-rl/spiral/blob/main/docs/TINKER.md) for full documentation including architecture details, hyperparameters, and advanced usage. For more information on the Tinker framework, see the [tinker-cookbook](https://github.com/tinker-engine/tinker-cookbook) repository.

## Citation

[https://github.com/spiral-rl/spiral#citation](https://github.com/spiral-rl/spiral#citation)

If you find our work useful for your research, please consider citing:

```
@article{liu2025spiral,
  title={SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning},
  author={Liu, Bo and Guertler, Leon and Yu, Simon and Liu, Zichen and Qi, Penghui and Balcells, Daniel and Liu, Mickel and Tan, Cheston and Shi, Weiyan and Lin, Min and Lee, Wee Sun and Jaques, Natasha},
  journal={arXiv preprint arXiv:2506.24119},
  year={2025},
  url={https://arxiv.org/abs/2506.24119}
}
```

## Acknowledgement

[https://github.com/spiral-rl/spiral#acknowledgement](https://github.com/spiral-rl/spiral#acknowledgement)

- This work is supported by [PlasticLabs](https://plasticlabs.ai/) and [Sea AI Lab](https://sail.sea.com/) for computing resources.
- We thank [Thinking Machine](https://thinkingmachine.ai/) for providing compute credits for Tinker experiments.
- The language games are sampled from [TextArena](https://github.com/LeonGuertler/TextArena), a collection of competitive text-based games for language model evaluation and reinforcement learning.
- The multi-agent, multi-turn RL training is implemented with 🌾 [Oat](https://github.com/sail-sg/oat), a modular and research-friendly LLM RL framework.
- We did exploration on PEFT experiments using [UnstableBaselines](https://github.com/LeonGuertler/UnstableBaselines), a lightweight, LoRA-first library for fast prototyping of self-play algorithms on TextArena.
- The base models are from [Qwen3](https://huggingface.co/Qwen/Qwen3-4B).

## About

         SPIRAL: Self-Play on Zero-Sum Games Incentivizes Reasoning via Multi-Agent Multi-Turn Reinforcement Learning       

[huggingface.co/papers/2506.24119](https://huggingface.co/papers/2506.24119)

### Topics

[reinforcement-learning](https://github.com/topics/reinforcement-learning)[self-play](https://github.com/topics/self-play)[multi-agent-reinforcement-learning](https://github.com/topics/multi-agent-reinforcement-learning)[large-language-models](https://github.com/topics/large-language-models)

### Resources

[Readme](https://github.com/spiral-rl/spiral#readme-ov-file)

### License

[MIT license](https://github.com/spiral-rl/spiral#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/spiral-rl/spiral/activity)

[Custom properties](https://github.com/spiral-rl/spiral/custom-properties)

### Stars

[190
        stars](https://github.com/spiral-rl/spiral/stargazers)

### Watchers

[4
        watching](https://github.com/spiral-rl/spiral/watchers)

### Forks

[22
        forks](https://github.com/spiral-rl/spiral/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fspiral-rl%2Fspiral&report=spiral-rl+%28user%29)

## [Releases](https://github.com/spiral-rl/spiral/releases)

No releases published

## [Contributors](https://github.com/spiral-rl/spiral/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          96.2%](https://github.com/spiral-rl/spiral/search?l=python)
- [Shell
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

