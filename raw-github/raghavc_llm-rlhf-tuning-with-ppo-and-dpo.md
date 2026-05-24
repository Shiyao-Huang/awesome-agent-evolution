---
repo: raghavc/llm-rlhf-tuning-with-ppo-and-dpo
url: https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO: Comprehensive toolkit for Reinforcement Learning from Human Feedback (RLHF) training, featuring instruction fine-tuning, reward model training, and support for PPO and DPO algorithms with various configurations for the Alpaca, LLaMA, and LLaMA2 models. · GitHub

**Source**: https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo

---

[Skip to content](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[raghavc](https://github.com/raghavc)

/
**[LLM-RLHF-Tuning-with-PPO-and-DPO](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO)**

Public

- [Notifications](https://github.com/login?return_to=%2Fraghavc%2FLLM-RLHF-Tuning-with-PPO-and-DPO)You must be signed in to change notification settings
- [Fork
    19](https://github.com/login?return_to=%2Fraghavc%2FLLM-RLHF-Tuning-with-PPO-and-DPO)
- 
[Star
          190](https://github.com/login?return_to=%2Fraghavc%2FLLM-RLHF-Tuning-with-PPO-and-DPO)

[https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO)

[Branches](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/branches)[Tags](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/tags)

[https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/branches](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/branches)[https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/tags](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History33 Commits33 Commits |  |  |  |
| pt_data | pt_data |  |  |
| rm_data | rm_data |  |  |
| script | script |  |  |
| sft_data | sft_data |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# LLM-RLHF-Tuning

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#llm-rlhf-tuning](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#llm-rlhf-tuning)

This project implements Reinforcement Learning from Human Feedback (RLHF) training from the ground up. It includes detailed documentation of the implementation process and welcomes community discussions and contributions.

## Main Features

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#main-features](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#main-features)

- **Instruction Fine-Tuning**: Support for fine-tuning the Alpaca model using specific instructions.
- **Reward Model Training**: Includes functionality to train a reward model effectively.
- **PPO Algorithm Training**: Offers comprehensive support for training RL models using the Proximal Policy Optimization (PPO) algorithm with various configurations: 
  - Two base models with two LoRA adapters, supporting accelerate distributed training.
  - A single base model with two LoRA adapters, supporting accelerate and deepspeed training.
  - A single base model with one LoRA adapter, where Actor and Critic share the base model, also supporting accelerate and deepspeed training.

- **DPO Algorithm Training**: Support for training models using the DPO algorithm.

## Updates

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#updates](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#updates)

- **[02/7/2024]** Added support for training LLaMA2 models and DPO training. Introduced PPO training based on a single base model, with an option for one or two LoRA adapters, and included support for accelerate and deepspeed training.
- **[03/5/2024]** Introduced support for LLaMA model training and PPO training based on two base models with two LoRA adapters, along with accelerate distributed training.

## Mathematical Foundations

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#mathematical-foundations](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#mathematical-foundations)

### Proximal Policy Optimization (PPO)

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#proximal-policy-optimization-ppo](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#proximal-policy-optimization-ppo)

PPO is an optimization algorithm used in reinforcement learning to update policy parameters by optimizing a clipped surrogate objective function. The objective function $L^{CLIP}(\theta)$ for PPO is defined as:

$$ L^{CLIP}(\theta) = \mathbb{E}_t \left[ \min \left( r_t(\theta) \cdot \hat{A}_t, \text{clip} \left( r_t(\theta), 1 - \epsilon, 1 + \epsilon \right) \cdot \hat{A}_t \right) \right] $$

Where: $$r_t(\theta)$$

- is the ratio of the probability of taking an action under the new policy to that under the old policy. $$\hat{A}_t$$
- is the estimated advantage function at time step `t`. $$\epsilon $$
- is a hyperparameter representing the clip range.

### Deterministic Policy Optimization (DPO)

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#deterministic-policy-optimization-dpo](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#deterministic-policy-optimization-dpo)

DPO is another reinforcement learning algorithm that directly optimizes the deterministic policy to maximize the expected return. It updates the policy parameters $\theta$ by maximizing the expected return $J(\theta)$, given by:

$$ J(\theta) = \int_{\mathcal{S}} \rho^{\pi}(s) \int_{\mathcal{A}} \pi(s, a; \theta) Q^{\pi}(s, a) , da , ds $$

Where:

- $\rho^{\pi}$ is the state-visitation distribution under policy $\pi$.
- $Q^{\pi}(s, a)$ is the state-action value function.

To set up your environment for the project, ensure you have the following dependencies installed:

```
accelerate==0.21.0
datasets==2.13.1
scikit-learn==1.3.0
sentencepiece==0.1.99
tqdm==4.65.0
transformers==4.31.0
wandb==0.15.8
peft==0.4.0
torch==2.0.1
trl==0.5.0
deepspeed==0.10.0
```

## Supported Models

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#supported-models](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#supported-models)

**LLaMA**

**LLaMA2**

## Supported Training Methods

[https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#supported-training-methods](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#supported-training-methods)

**LoRA**

## About

         Comprehensive toolkit for Reinforcement Learning from Human Feedback (RLHF) training, featuring instruction fine-tuning, reward model training, and support for PPO and DPO algorithms with various configurations for the Alpaca, LLaMA, and LLaMA2 models.       

### Resources

[Readme](https://github.com/raghavc/llm-rlhf-tuning-with-ppo-and-dpo#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/activity)

### Stars

[190
        stars](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/stargazers)

### Watchers

[2
        watching](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/watchers)

### Forks

[19
        forks](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fraghavc%2FLLM-RLHF-Tuning-with-PPO-and-DPO&report=raghavc+%28user%29)

## [Releases](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/releases)

No releases published

## [Packages
      0](https://github.com/users/raghavc/packages?repo_name=LLM-RLHF-Tuning-with-PPO-and-DPO)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          92.8%](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/search?l=python)
- [Shell
          7.2%](https://github.com/raghavc/LLM-RLHF-Tuning-with-PPO-and-DPO/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

