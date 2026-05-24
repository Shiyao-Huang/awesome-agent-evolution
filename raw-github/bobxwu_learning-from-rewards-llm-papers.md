---
repo: bobxwu/learning-from-rewards-llm-papers
url: https://github.com/bobxwu/learning-from-rewards-llm-papers
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - bobxwu/learning-from-rewards-llm-papers: A comrephensive collection of learning from rewards in the post-training and test-time scaling of LLMs, with a focus on both reward models and learning strategies across training, inference, and post-inference stages. · GitHub

**Source**: https://github.com/bobxwu/learning-from-rewards-llm-papers

---

[Skip to content](https://github.com/bobxwu/learning-from-rewards-llm-papers#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[bobxwu](https://github.com/bobxwu)

/
**[learning-from-rewards-llm-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbobxwu%2Flearning-from-rewards-llm-papers)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fbobxwu%2Flearning-from-rewards-llm-papers)
- 
[Star
          71](https://github.com/login?return_to=%2Fbobxwu%2Flearning-from-rewards-llm-papers)

[https://github.com/bobxwu/learning-from-rewards-llm-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers)

[Branches](https://github.com/bobxwu/learning-from-rewards-llm-papers/branches)[Tags](https://github.com/bobxwu/learning-from-rewards-llm-papers/tags)

[https://github.com/bobxwu/learning-from-rewards-llm-papers/branches](https://github.com/bobxwu/learning-from-rewards-llm-papers/branches)[https://github.com/bobxwu/learning-from-rewards-llm-papers/tags](https://github.com/bobxwu/learning-from-rewards-llm-papers/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| img | img |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# 📚Awesome-Learning-from-Rewards-Papers

[https://github.com/bobxwu/learning-from-rewards-llm-papers#awesome-learning-from-rewards-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers#awesome-learning-from-rewards-papers)

[https://github.com/bobxwu/learning-from-rewards-llm-papers](https://github.com/bobxwu/learning-from-rewards-llm-papers)[https://arxiv.org/pdf/2505.02686](https://arxiv.org/pdf/2505.02686)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://github.com/bobxwu/learning-from-rewards-llm-papers/graphs/contributors/](https://github.com/bobxwu/learning-from-rewards-llm-papers/graphs/contributors/)

This repository accompanies our survey paper:
[Sailing by the Stars: A Survey on Reward Models and Learning Strategies for Learning from Rewards](https://arxiv.org/pdf/2505.02686).
 We curate a comrephensive collection of **learning from rewards** in the post-training and test-time scaling of LLMs, with a focus on both **reward models** and **learning strategies** across training, inference, and post-inference stages.

We welcome contributions from the community, so feel free to submit pull requests to add missing papers!

[https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master/img/scaling.png](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master/img/scaling.png)
*Figure 1: Scaling phases of LLMs.*

[https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master/img/framework.png](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master/img/framework.png)
*Figure 2: Conceptual framework of learning from rewards.*

- [📚Awesome-Learning-from-Rewards-Papers](https://github.com/bobxwu/learning-from-rewards-llm-papers#awesome-learning-from-rewards-papers)
  - [🎯Training with Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-rewards)
    - [Training with Scalar Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-scalar-rewards)
    - [Training with Critique Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-critique-rewards)
    - [Training with Hybrid Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-hybrid-rewards)
    - [Training with Implicit Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-implicit-rewards)
    - [Training with Rule-based Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-rule-based-rewards)
    - [Training with Process Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-process-rewards)

  - [🎯Inference with Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#inference-with-rewards)
    - [Generate-then-Rank](https://github.com/bobxwu/learning-from-rewards-llm-papers#generate-then-rank)
    - [Reward-Guided Decoding](https://github.com/bobxwu/learning-from-rewards-llm-papers#reward-guided-decoding)

  - [🎯Post-Inference with Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#post-inference-with-rewards)
    - [Self-Correction](https://github.com/bobxwu/learning-from-rewards-llm-papers#self-correction)
    - [Correction with External Feedback](https://github.com/bobxwu/learning-from-rewards-llm-papers#correction-with-external-feedback)

  - [📏Benchmarking Reward Models](https://github.com/bobxwu/learning-from-rewards-llm-papers#benchmarking-reward-models)
    - [Benchmarking Outcome Reward Models](https://github.com/bobxwu/learning-from-rewards-llm-papers#benchmarking-outcome-reward-models)
    - [Benchmarking Process Reward Models](https://github.com/bobxwu/learning-from-rewards-llm-papers#benchmarking-process-reward-models)
    - [Benchmarking Multimodal Reward Models](https://github.com/bobxwu/learning-from-rewards-llm-papers#benchmarking-multimodal-reward-models)
    - [Other Benchmarks](https://github.com/bobxwu/learning-from-rewards-llm-papers#other-benchmarks)

  - [🚀Applications](https://github.com/bobxwu/learning-from-rewards-llm-papers#applications)
    - [Preference Alignment](https://github.com/bobxwu/learning-from-rewards-llm-papers#preference-alignment)
    - [Mathematical Reasoning](https://github.com/bobxwu/learning-from-rewards-llm-papers#mathematical-reasoning)
    - [Code Generation](https://github.com/bobxwu/learning-from-rewards-llm-papers#code-generation)
    - [Multimodal Tasks](https://github.com/bobxwu/learning-from-rewards-llm-papers#multimodal-tasks)
    - [Agents](https://github.com/bobxwu/learning-from-rewards-llm-papers#agents)
    - [Other Applications](https://github.com/bobxwu/learning-from-rewards-llm-papers#other-applications)

  - [💡Challenges and Future Directions](https://github.com/bobxwu/learning-from-rewards-llm-papers#challenges-and-future-directions)
  - [📬Contact](https://github.com/bobxwu/learning-from-rewards-llm-papers#contact)
  - [📖Citation](https://github.com/bobxwu/learning-from-rewards-llm-papers#citation)

## 🎯Training with Rewards

[https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-rewards)

### [Training with Scalar Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master)

[https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-scalar-rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-scalar-rewards)

- 

**Proximal policy optimization algorithms**. arXiv, 2017. [paper](https://arxiv.org/pdf/1707.06347)

- 

**Fine-Tuning Language Models from Human Preferences**. arXiv, 2019. [paper](https://arxiv.org/pdf/1909.08593)

- 

**Constitutional AI: Harmlessness from AI feedback**. arXiv, 2022. [paper](https://arxiv.org/pdf/2212.08073)

- 

**Training a helpful and harmless assistant with reinforcement learning from human feedback**. arXiv, 2022. [paper](https://arxiv.org/pdf/2204.05862)

- 

**Improving alignment of dialogue agents via targeted human judgements**. arXiv, 2022. [paper](https://doi.org/10.48550/arXiv.2209.14375)

- 

**Training language models to follow instructions with human feedback**. NeurIPS, 2022. [paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/b1efde53be364a73914f58805a001731-Paper-Conference.pdf)

- 

**Safe rlhf: Safe reinforcement learning from human feedback**. arXiv, 2023. [paper](https://arxiv.org/pdf/2310.12773)

- 

**RLTF: Reinforcement Learning from Unit Test Feedback**. TMLR, 2023. [paper](https://openreview.net/forum?id=hjYmsV6nXZ)

- 

**Aligning large multimodal models with factually augmented rlhf**. arXiv, 2023. [paper](https://arxiv.org/pdf/2309.14525)

- 

**Fine-grained human feedback gives better rewards for language model training**. arXiv, 2023. [paper](https://arxiv.org/pdf/2306.01693)

- 

**Human preference score: Better aligning text-to-image models with human preference**. arXiv, 2023. [paper](https://arxiv.org/pdf/2303.14420)

- 

**Human preference score v2: A solid benchmark for evaluating human preferences of text-to-image synthesis**. arXiv, 2023. [paper](https://arxiv.org/pdf/2306.09341)

- 

**Imagereward: Learning and evaluating human preferences for text-to-image generation**. arXiv, 2023. [paper](https://arxiv.org/pdf/2304.05977)

- 

**Tuning large multimodal models for videos using reinforcement learning from ai feedback**. arXiv, 2024. [paper](https://arxiv.org/pdf/2402.03746)

- 

**Stepcoder: Improve code generation with reinforcement learning from compiler feedback**. arXiv, 2024. [paper](https://arxiv.org/pdf/2402.01391)

- 

**RLEF: Grounding Code LLMs in Execution Feedback with Reinforcement Learning**. arXiv, 2024. [paper](https://arxiv.org/pdf/2410.02089)

- 

**Rich human feedback for text-to-image generation**. arXiv, 2024. [paper](https://arxiv.org/pdf/2312.10240)

- 

**Skywork-reward: Bag of tricks for reward modeling in llms**. arXiv, 2024. [paper](https://arxiv.org/pdf/2410.18451)

- 

**Lift: Leveraging human feedback for text-to-video model alignment**. arXiv, 2024. [paper](https://arxiv.org/pdf/2412.04814)

- 

**Self-taught evaluators**. arXiv, 2024. [paper](https://arxiv.org/pdf/2408.02666)

- 

**REINFORCE++: A Simple and Efficient Approach for Aligning Large Language Models**. arXiv, 2025. [paper](https://arxiv.org/pdf/2501.03262)

- 

**Learning to Reason under Off-Policy Guidance**. arXiv, 2025. [paper](https://arxiv.org/pdf/2504.14945)

- 

**VinePPO Refining Credit Assignment in RL Training of LLMs**. arXiv, 2025. [paper](https://arxiv.org/pdf/2410.01679)

### [Training with Critique Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master)

[https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-critique-rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-critique-rewards)

- 

**Judging llm-as-a-judge with mt-bench and chatbot arena**. arXiv, 2023. [paper](https://arxiv.org/pdf/2306.05685)

- 

**Generative judge for evaluating alignment**. arXiv, 2023. [paper](https://arxiv.org/pdf/2310.05470)

- 

**Critique-out-loud reward models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2408.11791)

- 

**Compassjudger-1: All-in-one judge model helps model evaluation and evolution**. arXiv, 2024. [paper](https://arxiv.org/pdf/2410.16256)

- 

**Llm critics help catch bugs in mathematics: Towards a better mathematical verifier with natural language feedback**. arXiv, 2024. [paper](https://arxiv.org/pdf/2406.14024)

- 

**Direct judgement preference optimization**. arXiv, 2024. [paper](https://arxiv.org/pdf/2409.14664)

- 

**Llava-critic: Learning to evaluate multimodal models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2410.02712)

- 

**Beyond Scalar Reward Model: Learning Generative Judge from Preference Data**. arXiv, 2024. [paper](https://arxiv.org/pdf/2410.03742)

- 

**Self-Generated Critiques Boost Reward Modeling for Language Models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2411.16646)

- 

**Generative verifiers: Reward modeling as next-token prediction**. arXiv, 2024. [paper](https://arxiv.org/pdf/2408.15240)

- 

**Inference-Time Scaling for Generalist Reward Modeling**. arXiv, 2025. [paper](https://arxiv.org/pdf/2504.02495)

- 

**Think-J: Learning to Think for Generative LLM-as-a-Judge**. arXiv, 2025. [paper](https://arxiv.org/pdf/2505.14268)

- 

**Unified multimodal chain-of-thought reward model through reinforcement fine-tuning**. arXiv, 2025. [paper](https://arxiv.org/pdf/2505.03318)

### [Training with Hybrid Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master)

[https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-hybrid-rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-hybrid-rewards)

- 

**Mm-rlhf: The next step forward in multimodal llm alignment**. arXiv, 2025. [paper](https://arxiv.org/pdf/2502.10391)

- 

**Improve LLM-as-a-Judge Ability as a General Ability**. arXiv, 2025. [paper](https://arxiv.org/pdf/2502.11689)

- 

**Critique-GRPO: Advancing LLM Reasoning with Natural Language and Numerical Feedback**. arXiv, 2025. [paper](https://www.arxiv.org/pdf/2506.03106)

### [Training with Implicit Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master)

[https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-implicit-rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-implicit-rewards)

- 

**Training a helpful and harmless assistant with reinforcement learning from human feedback**. arXiv, 2022. [paper](https://arxiv.org/pdf/2204.05862)

- 

**Raft: Reward ranked finetuning for generative foundation model alignment**. arXiv, 2023. [paper](https://arxiv.org/pdf/2304.06767)

- 

**Reinforced Self-Training (ReST) for Language Modeling**. arXiv, 2023. [paper](https://arxiv.org/pdf/2308.08998)

- 

**Making language models better tool learners with execution feedback**. arXiv, 2023. [paper](https://arxiv.org/pdf/2305.13068)

- 

**Direct preference optimization: Your language model is secretly a reward model**. arXiv, 2023. [paper](https://arxiv.org/pdf/2305.18290)

- 

**RLHF-V: Towards Trustworthy MLLMs via Behavior Alignment from Fine-grained Correctional Human Feedback**. arXiv, 2023. [paper](https://arxiv.org/pdf/2312.00849)

- 

**Rrhf: Rank responses to align language models with human feedback without tears**. arXiv, 2023. [paper](https://arxiv.org/pdf/2304.05302)

- 

**Beyond Hallucinations: Enhancing LVLMs through Hallucination-Aware Direct Preference Optimization**. arXiv, 2023. [paper](https://arxiv.org/pdf/2311.16839)

- 

**KTO: Model Alignment as Prospect Theoretic Optimization**. arXiv, 2024. [paper](https://arxiv.org/pdf/2402.01306)

- 

**Preference Optimization for Reasoning with Pseudo Feedback**. arXiv, 2024. [paper](https://arxiv.org/pdf/2411.16345)

- 

**Step-DPO: Step-wise preference optimization for long-chain reasoning of llms**. arXiv, 2024. [paper](https://arxiv.org/pdf/2406.18629)

- 

**Flame: Factuality-aware alignment for large language models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2405.01525)

- 

**Simpo: Simple preference optimization with a reference-free reward**. arXiv, 2024. [paper](https://arxiv.org/pdf/2405.14734)

- 

**Strengthening Multimodal Large Language Model with Bootstrapped Preference Optimization**. arXiv, 2024. [paper](https://arxiv.org/pdf/2403.08730)

- 

**Self-Consistency Preference Optimization**. arXiv, 2024. [paper](https://arxiv.org/pdf/2411.04109)

- 

**CodeLutra: Boosting LLM Code Generation via Preference-Guided Refinement**. arXiv, 2024. [paper](https://arxiv.org/pdf/2411.05199)

- 

**Diffusion model alignment using direct preference optimization**. arXiv, 2024. [paper](https://arxiv.org/pdf/2311.12908)

- 

**mdpo: Conditional preference optimization for multimodal large language models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2406.11839)

- 

**Meta-rewarding language models: Self-improving alignment with llm-as-a-meta-judge**. arXiv, 2024. [paper](https://arxiv.org/pdf/2407.19594)

- 

**RLAIF-V: Aligning MLLMs through Open-Source AI Feedback for Super GPT-4V Trustworthiness**. arXiv, 2024. [paper](https://doi.org/10.48550/arXiv.2405.17220)

- 

**Self-Rewarding Language Models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2401.10020)

- 

**Aligning Modalities in Vision Large Language Models via Preference Fine-tuning**. arXiv, 2024. [paper](https://arxiv.org/pdf/2402.11411)

- 

**Unified Reward Model for Multimodal Understanding and Generation**. arXiv, 2025. [paper](https://arxiv.org/pdf/2503.05236)

- 

**RefineCoder: Iterative Improving of Large Language Models via Adaptive Critique Refinement for Code Generation**. arXiv, 2025. [paper](https://arxiv.org/pdf/2502.09183)

### [Training with Rule-based Rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers/blob/master)

[https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-rule-based-rewards](https://github.com/bobxwu/learning-from-rewards-llm-papers#training-with-rule-based-rewards)

- 

**Deepseekmath: Pushing the limits of mathematical reasoning in open language models**. arXiv, 2024. [paper](https://arxiv.org/pdf/2402.03300)

- 

**Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning**. arXiv, 2025. [paper](https://arxiv.org/pdf/2501.12948)

- 

**Improving Generalization in Intent Detection: GRPO with Reward-Based Curriculum Sampling**. arXiv, 2025. [paper](https://arxiv.org/pdf/2504.13592)

- 

**Open r1: A fully open reproduction of deepseek-r1**. GitHub, 2025. [paper](https://github.com/huggingface/open-r1)

- 

**CLS-RL: Image Classification with Rule-Based Reinforcement Learning**. arXiv, 2025. [paper](https://arxiv.org/pdf/2503.16188)
