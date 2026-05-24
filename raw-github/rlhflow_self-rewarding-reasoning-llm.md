---
repo: rlhflow/self-rewarding-reasoning-llm
url: https://github.com/rlhflow/self-rewarding-reasoning-llm
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - RLHFlow/Self-rewarding-reasoning-LLM: Recipes to train the self-rewarding reasoning LLMs. · GitHub

**Source**: https://github.com/rlhflow/self-rewarding-reasoning-llm

---

[Skip to content](https://github.com/rlhflow/self-rewarding-reasoning-llm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[RLHFlow](https://github.com/RLHFlow)

/
**[Self-rewarding-reasoning-LLM](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM)**

Public

- [Notifications](https://github.com/login?return_to=%2FRLHFlow%2FSelf-rewarding-reasoning-LLM)You must be signed in to change notification settings
- [Fork
    14](https://github.com/login?return_to=%2FRLHFlow%2FSelf-rewarding-reasoning-LLM)
- 
[Star
          232](https://github.com/login?return_to=%2FRLHFlow%2FSelf-rewarding-reasoning-LLM)

[https://github.com/RLHFlow/Self-rewarding-reasoning-LLM](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM)

[Branches](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/branches)[Tags](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/tags)

[https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/branches](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/branches)[https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/tags](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7 Commits7 Commits |  |  |  |
| dpo_training | dpo_training |  |  |
| eval_math | eval_math |  |  |
| figs | figs |  |  |
| infer_math | infer_math |  |  |
| paper | paper |  |  |
| ppo_training | ppo_training |  |  |
| sft | sft |  |  |
| .DS_Store | .DS_Store |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-rewarding Correction for Mathematical Reasoning

[https://github.com/rlhflow/self-rewarding-reasoning-llm#self-rewarding-correction-for-mathematical-reasoning](https://github.com/rlhflow/self-rewarding-reasoning-llm#self-rewarding-correction-for-mathematical-reasoning)

 TL;DL: this is the repo for "[Self-rewarding Correction for Mathematical Reasoning](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM)" 

## Introduction

[https://github.com/rlhflow/self-rewarding-reasoning-llm#introduction](https://github.com/rlhflow/self-rewarding-reasoning-llm#introduction)

We study self-rewarding reasoning large language models (LLMs), which can simultaneously generate step-by-step reasoning and evaluate the correctness of their outputs during the inference time-**without external feedback**. This integrated approach allows a single model to independently guide its reasoning process, offering computational advantages for model deployment.

We particularly focus on the representative task of self-correction, where models autonomously detect errors in their responses, revise outputs, and decide when to terminate iterative refinement loops. To enable this, we propose a two-staged algorithmic framework for constructing self-rewarding reasoning models using only self-generated data. In the first stage, we employ sequential rejection sampling to synthesize long chain-of-thought trajectories that incorporate both self-rewarding and self-correction mechanisms. Fine-tuning models on these curated data allows them to learn the patterns of self-rewarding and self-correction. In the second stage, we further enhance the models' ability to assess response accuracy and refine outputs through *reinforcement learning* with rule-based signals. Our experiments with Llama-3 and Qwen-2.5 demonstrate that our approach surpasses intrinsic self-correction capabilities and achieves performance comparable to systems that rely on external reward models. See the following table for the experiment results.

| Benchmark | Method | Turn 1 | Final Accuracy | Improvement | w2c | c2w |
|---|---|---|---|---|---|---|
|  | Base | 65.4 | 65.4 | - | - | - |
|  | Prompt with Gold RM | 65.4 | 66.8 | 1.4 | 1.4 | 0.0 |
|  | Intrinsic Self-correction | 65.4 | 51.4 | -14.0 | 1.4 | 15.4 |
| MATH | STaR/RAFT | 71.6 | 70.4 | -1.2 | 5.0 | 6.2 |
|  | STaR/RAFT+ | 72.0 | 71.2 | -0.8 | 3.0 | 3.8 |
|  | Self-rewarding IFT | 72.6 | 77.2 | 4.6 | 5.0 | 0.4 |
|  | Self-rewarding IFT + DPO | 72.8 | 78.6 | 5.8 | 6.0 | 0.2 |
|  | Self-rewarding IFT + PPO | 75.8 | 80.2 | 4.4 | 4.8 | 0.4 |
| - | - | - | - | - | - | - |
|  | Base | 9.9 | 9.9 | - | - | - |
|  | Prompt with Gold RM | 9.9 | 11.7 | 1.8 | 1.8 | 0.0 |
|  | Intrinsic Self-correction | 9.9 | 8.4 | -1.5 | 1.8 | 3.3 |
| Minerva Math | STaR/RAFT | 28.7 | 29.4 | 0.7 | 1.1 | 1.1 |
|  | STaR/RAFT+ | 25.7 | 25.3 | -0.4 | 0.8 | 1.2 |
|  | Self-rewarding IFT | 23.2 | 28.7 | 5.5 | 7.3 | 1.8 |
|  | Self-rewarding IFT + DPO | 26.8 | 34.6 | 7.8 | 9.6 | 1.8 |
|  | Self-rewarding IFT + PPO | 34.0 | 38.4 | 4.4 | 5.1 | 0.7 |

We provide an example of the self-rewarding reasoning path.

[https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/figs/self_rewarding_reasoning_path.png](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/figs/self_rewarding_reasoning_path.png)

## Two-stage Training Framework

[https://github.com/rlhflow/self-rewarding-reasoning-llm#two-stage-training-framework](https://github.com/rlhflow/self-rewarding-reasoning-llm#two-stage-training-framework)

1. **Data collection by sequential rejection sampling.** We employ a rejection sampling approach, where we sequentially prompt the base model and generate different steps separately. Then, we combine them into long CoT trajectories that incorporate both self-rewarding and self-correction patterns. We generate a large amount of self-correction trajectories and only preserve the desired trajectories.
2. **Reinforcement learning (RL) optimization.** We initialize from stage 1 and further refine the policy using RL (PPO or iterative DPO), mainly using the correctness score as the reward signal (referred to as the rule-based reward).

We provide an example of the sequential rejection sampling process:

[https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/figs/seq_rs2.png](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/figs/seq_rs2.png)

## Getting Started

[https://github.com/rlhflow/self-rewarding-reasoning-llm#getting-started](https://github.com/rlhflow/self-rewarding-reasoning-llm#getting-started)

The main pipeline is divided into three steps:

- [SFT](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/sft) to train the SFT model.
- [dpo_training](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/dpo_training) to conduct the (multi-turn) DPO training.
- [ppo_training](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/ppo_training) to conduct PPO training.
- [eval_math](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/blob/main/eval_math) to evaluate the LLMs' self-correction capacity.

Please refer to the different parts for detailed instructions.

## Citation

[https://github.com/rlhflow/self-rewarding-reasoning-llm#citation](https://github.com/rlhflow/self-rewarding-reasoning-llm#citation)

The authors would like to thank the great open-source communities, including the developers of vLLM, VeRL, OpenRLHF, Qwen, and Axolotl for sharing their models, codes, and training recipes.

If you find our paper or code useful, it would be highly appreciated if you could consider citing our work by:

```
@misc{xiong2025selfrewardingcorrectionmathematicalreasoning,
      title={Self-rewarding correction for mathematical reasoning}, 
      author={Wei Xiong and Hanning Zhang and Chenlu Ye and Lichang Chen and Nan Jiang and Tong Zhang},
      year={2025},
      eprint={2502.19613},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2502.19613}, 
}
```

## About

         Recipes to train the self-rewarding reasoning LLMs.       

### Resources

[Readme](https://github.com/rlhflow/self-rewarding-reasoning-llm#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/activity)

[Custom properties](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/custom-properties)

### Stars

[232
        stars](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/stargazers)

### Watchers

[3
        watching](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/watchers)

### Forks

[14
        forks](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FRLHFlow%2FSelf-rewarding-reasoning-LLM&report=RLHFlow+%28user%29)

## [Releases](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/releases)

No releases published

## [Packages
      0](https://github.com/orgs/RLHFlow/packages?repo_name=Self-rewarding-reasoning-LLM)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          96.1%](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/search?l=python)
- [ANTLR
          2.0%](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/search?l=antlr)
- [Shell
          1.9%](https://github.com/RLHFlow/Self-rewarding-reasoning-LLM/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

