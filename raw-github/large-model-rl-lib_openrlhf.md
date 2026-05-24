---
repo: large-model-rl-lib/openrlhf
url: https://github.com/large-model-rl-lib/openrlhf
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Large-Model-RL-Lib/OpenRLHF: An Easy-to-use, Scalable and High-performance Agentic RL Framework based on Ray (PPO & DAPO & REINFORCE++ & TIS & vLLM & Ray & Async  RL) · GitHub

**Source**: https://github.com/large-model-rl-lib/openrlhf

---

[Skip to content](https://github.com/large-model-rl-lib/openrlhf#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Large-Model-RL-Lib](https://github.com/Large-Model-RL-Lib)

/
**[OpenRLHF](https://github.com/Large-Model-RL-Lib/OpenRLHF)**

Public

       forked from [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)

- [Notifications](https://github.com/login?return_to=%2FLarge-Model-RL-Lib%2FOpenRLHF)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FLarge-Model-RL-Lib%2FOpenRLHF)
- 
[Star
          0](https://github.com/login?return_to=%2FLarge-Model-RL-Lib%2FOpenRLHF)

[https://github.com/Large-Model-RL-Lib/OpenRLHF](https://github.com/Large-Model-RL-Lib/OpenRLHF)

[Branches](https://github.com/Large-Model-RL-Lib/OpenRLHF/branches)[Tags](https://github.com/Large-Model-RL-Lib/OpenRLHF/tags)

[https://github.com/Large-Model-RL-Lib/OpenRLHF/branches](https://github.com/Large-Model-RL-Lib/OpenRLHF/branches)[https://github.com/Large-Model-RL-Lib/OpenRLHF/tags](https://github.com/Large-Model-RL-Lib/OpenRLHF/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,518 Commits1,518 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| dockerfile | dockerfile |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| openrlhf | openrlhf |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_ja.md | README_ja.md |  |  |
| README_zh.md | README_zh.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| version.txt | version.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/docs/logo.png](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/docs/logo.png)

[https://github.com/OpenRLHF/OpenRLHF/graphs/contributors](https://github.com/OpenRLHF/OpenRLHF/graphs/contributors)[https://github.com/OpenRLHF/OpenRLHF/issues](https://github.com/OpenRLHF/OpenRLHF/issues)[https://github.com/OpenRLHF/OpenRLHF/discussions](https://github.com/OpenRLHF/OpenRLHF/discussions)[https://github.com/OpenRLHF/OpenRLHF/pulls](https://github.com/OpenRLHF/OpenRLHF/pulls)[https://github.com/OpenRLHF/OpenRLHF/stargazers](https://github.com/OpenRLHF/OpenRLHF/stargazers)[https://deepwiki.com/OpenRLHF/OpenRLHF](https://deepwiki.com/OpenRLHF/OpenRLHF)
*Open-source / Comprehensive / Lightweight / Easy-to-use*

---

[ English | [中文](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/README_zh.md) | [日本語](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/README_ja.md) ]

OpenRLHF is **the first** high-performance, production-ready open-source RLHF framework that combines **Ray + vLLM distributed architecture** with a **unified agent-based design paradigm** for scalable and extensible reinforcement learning from human feedback.

📚 **Learn More**: [Documentation](https://openrlhf.readthedocs.io/) | [Slides](https://docs.google.com/presentation/d/1JRhB1d7csofx0PIZBmfyBdMluxNd5JLPpUHrrvVhGnk/edit?usp=sharing) | [Technical Report](https://www.researchgate.net/publication/393414548_OpenRLHF_An_Easy-to-use_Scalable_and_High-performance_RLHF_Framework) | [Video](https://www.bilibili.com/video/BV1dv2jBxEQG/)

## 📖 Table of Contents

[https://github.com/large-model-rl-lib/openrlhf#-table-of-contents](https://github.com/large-model-rl-lib/openrlhf#-table-of-contents)

- [🗞️ News](https://github.com/large-model-rl-lib/openrlhf#news)
- [🏗️ Architecture Foundation](https://github.com/large-model-rl-lib/openrlhf#architecture-foundation-ray--vllm-distribution) - Ray + vLLM + DeepSpeed distributed infrastructure
- [🎯 Design Paradigm](https://github.com/large-model-rl-lib/openrlhf#design-paradigm-agent-based-execution) - Unified agent-based execution pipeline
- [🚀 RL Algorithms](https://github.com/large-model-rl-lib/openrlhf#state-of-the-art-rl-algorithms) - PPO, REINFORCE++, GRPO, RLOO
- [📋 Features Overview](https://github.com/large-model-rl-lib/openrlhf#comprehensive-features) - Complete RLHF pipeline capabilities
- [🎬 Quick Start](https://github.com/large-model-rl-lib/openrlhf#quick-start) - Installation and typical workflow
- [🎓 Training Guide](https://github.com/large-model-rl-lib/openrlhf#supervised-fine-tuning) - SFT, Reward Model, RL Training
- [🎯 Single-Turn Agent](https://github.com/large-model-rl-lib/openrlhf#single-turn-agent-reinforced-fine-tuning-with-custom-rewards) - Custom reward functions
- [🤖 Multi-Turn Agent](https://github.com/large-model-rl-lib/openrlhf#multi-turn-agent-complex-environment-interactions) - Complex environments
- [🔧 Advanced Topics](https://github.com/large-model-rl-lib/openrlhf#advanced-topics) - LoRA, performance tuning

---

## News

[https://github.com/large-model-rl-lib/openrlhf#news](https://github.com/large-model-rl-lib/openrlhf#news)
Show News
- [2026/2] [ProRL V2](https://developer.nvidia.com/blog/scaling-llm-reinforcement-learning-with-prolonged-training-using-prorl-v2/) uses REINFORCE++-baseline to train a state-of-the-art 1.5B reasoning model with prolonged RL training. Training script: [train_prorlv2_math_hybrid_engine.sh](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_prorlv2_math_hybrid_engine.sh)
- [2025/10] [ScaleRL](https://arxiv.org/abs/2510.13786) validates the effectiveness of REINFORCE++-baseline in large-scale training scenarios. Releases [REINFORCE++ slides](https://docs.google.com/presentation/d/1stieP_3PM1z4Hq1YWR3GywFkxcHEAlstXMaS23KlGN4)
- [2025/6] [Magistral](https://mistral.ai/static/research/magistral.pdf) uses the method quite similar to REINFORCE++-baseline to train the reasoning models.
- [2025/5] [MARTI](https://github.com/TsinghuaC3I/MARTI) has been released as a fork of OpenRLHF. It is designed to train LLM-based multi-agent systems using RL, by integrating centralized multi-agent interactions with distributed policy training.
- [2025/5] OpenRLHF 0.8.0 supports async RLHF training via `--async_train` and async agent RLHF via `--agent_func_path`. See [train_reinforce_baseline_ray_agent_async.sh](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_reinforce_baseline_ray_agent_async.sh) for a runnable example.
- [2025/4] Post the blog [Accelerating RLHF with vLLM, Best Practice from OpenRLHF](https://blog.vllm.ai/2025/04/23/openrlhf-vllm.html)
- [2025/4] Clean OpenRLHF: Refactored the source code based on Single Controller and Unified Packing Samples
- [2025/3] The CMU [Advanced Natural Language Processing Spring 2025](https://cmu-l3.github.io/anlp-spring2025/) course uses OpenRLHF as the RLHF framework teaching case.
- [2025/2] [Logic-RL](https://arxiv.org/abs/2502.14768) and [PRIME](https://arxiv.org/abs/2502.01456) demonstrate that REINFORCE++ is more stable in training compared to GRPO and faster than PPO.
- [2025/2] [LMM-R1](https://github.com/TideDra/lmm-r1) is a fork of OpenRLHF, aimed at providing high-performance RL infrastructure for reproduction of DeepSeek-R1 on multimodal tasks.
- [2025/2] MIT & Microsoft proposed the [On the Emergence of Thinking in LLMs I: Searching for the Right Intuition](https://arxiv.org/pdf/2502.06773) using OpenRLHF
- [2025/1] HKUST reproduced the [DeepSeek-R1-Zero and DeepSeek-R1 training on small models using OpenRLHF](https://github.com/hkust-nlp/simpleRL-reason)
- [2024/12] We "proposed" 😊 the [REINFORCE++: A Simple and Efficient Approach for Aligning Large Language Models](https://www.researchgate.net/publication/387487679_REINFORCE_An_Efficient_RLHF_Algorithm_with_Robustnessto_Both_Prompt_and_Reward_Models).
- [2024/12] We analyzed the PPO, REINFORCE++, GRPO and RLOO in the [Notion Blogpost](https://hijkzzz.notion.site/unraveling-rlhf-and-its-variants-engineering-insights#147d9a33ecc9806090f3d5c749d31f05).
- [2023/8] OpenRLHF was open-sourced.

---

## 🏗️ Architecture Foundation: Ray + vLLM Distribution

[https://github.com/large-model-rl-lib/openrlhf#%EF%B8%8F-architecture-foundation-ray--vllm-distribution](https://github.com/large-model-rl-lib/openrlhf#%EF%B8%8F-architecture-foundation-ray--vllm-distribution)

OpenRLHF is **the first RLHF framework** built on Ray + vLLM distributed architecture, orchestrating multiple components across GPUs efficiently:

[https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/docs/openrlhf_architecture.svg](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/docs/openrlhf_architecture.svg)

### Core Infrastructure Components

[https://github.com/large-model-rl-lib/openrlhf#core-infrastructure-components](https://github.com/large-model-rl-lib/openrlhf#core-infrastructure-components)

**Ray - Distributed Scheduler and Controller**
 OpenRLHF leverages [Ray](https://github.com/ray-project/ray) for efficient distributed scheduling. It separates the Actor, Reward, Reference, and Critic models across different GPUs, enabling scalable training for models up to **70B+ parameters**.

**Hybrid Engine Scheduling**: All models and vLLM engines can share GPU resources—minimizing idle time and maximizing GPU utilization. This allows running full RLHF pipelines on limited hardware.

**vLLM - High-Performance Inference Engine**
 RLHF training spends **80% of the time on sample generation**. Powered by [vLLM](https://github.com/vllm-project/vllm) with Auto Tensor Parallelism (AutoTP) and Pipeline Parallelism (PP), OpenRLHF delivers high-throughput, memory-efficient generation.

**DeepSpeed - Memory-Efficient Training**
 Built on [DeepSpeed](https://github.com/deepspeedai/DeepSpeed) ZeRO-3, [deepcompile](https://github.com/deepspeedai/DeepSpeed/blob/master/blogs/deepcompile/README.md), [AutoTP](https://github.com/deepspeedai/DeepSpeed/blob/master/blogs/huggingface-tp/README.md), and RingAttention. Enables large model training without heavyweight frameworks while working directly with HuggingFace models.

**Transformers - Model Interface**
 Native integration with HuggingFace Transformers for seamless model loading, state management, and fine-tuning of pretrained models.

**NCCL / CUDA IPC - High-Speed Communication**
 Efficient inter-GPU communication for distributed training and inference.

---

## 🎯 Design Paradigm: Agent-Based Execution

[https://github.com/large-model-rl-lib/openrlhf#-design-paradigm-agent-based-execution](https://github.com/large-model-rl-lib/openrlhf#-design-paradigm-agent-based-execution)

**On top of the Ray distributed architecture**, OpenRLHF is **the first RLHF framework** to implement a **unified agent-based paradigm**. Every training run—whether standard PPO or complex multi-turn reasoning—follows a consistent agent execution pipeline.

### Why Agent-Based?

[https://github.com/large-model-rl-lib/openrlhf#why-agent-based](https://github.com/large-model-rl-lib/openrlhf#why-agent-based)

OpenRLHF **unifies generation and training through token-in-token-out agent execution**, ensuring perfect consistency, easy single/multi-turn extension, and zero text-level mismatches.

### Agent Architecture

[https://github.com/large-model-rl-lib/openrlhf#agent-architecture](https://github.com/large-model-rl-lib/openrlhf#agent-architecture)

```
┌─────────────────────────────┐
                 │    AgentExecutorBase        │
                 │  (Token-in-Token-out Core)  │
                 └─────────────────────────────┘
                              │
                 ┌────────────┴────────────┐
                 ↓                         ↓
         SingleTurnExecutor        MultiTurnExecutor
                 │                         │
      ┌──────────┴──────────┐   ┌─────────┴──────────┐
      ↓                     ↓   ↓                    ↓
  Standard RLHF      Custom Reward   Multi-Step    External Env
  (One-shot gen)     Function      Reasoning     (OpenAI Agent Server)
      ↓                     ↓           ↓                ↓
      └─────────────────────┴───────────┴────────────────┘
                              │
                    Consistent Token Trajectories
                              │
                    ┌─────────┴─────────┐
                    │  RL Algorithms    │
                    │  (Decoupled)      │
                    │                   │
                    │  PPO, REINFORCE++ │
                    │  GRPO, RLOO, etc. │
                    └───────────────────┘
```

### Core Design Principles

[https://github.com/large-model-rl-lib/openrlhf#core-design-principles](https://github.com/large-model-rl-lib/openrlhf#core-design-principles)
Show core design principles

| Principle | Description | Benefit |
|---|---|---|
| Token-in-Token-out | All sampling produces token-level trajectories | Zero text-level mismatch |
| Unified Interface | Same AgentExecutorBase API for all modes | Switch modes with one flag |
| Algorithm-Agnostic | RL algorithms (PPO, REINFORCE++, etc.) are decoupled from agent executors | Any algorithm works with any mode |
| Extensible | Plug in custom rewards/environments easily | Rapid experimentation |
| Production-Ready | Sync/Async/Hybrid Engine support | From research to deployment |

### Two Execution Modes (Orthogonal to RL Algorithms)

[https://github.com/large-model-rl-lib/openrlhf#two-execution-modes-orthogonal-to-rl-algorithms](https://github.com/large-model-rl-lib/openrlhf#two-execution-modes-orthogonal-to-rl-algorithms)

The agent execution mode is **independent** of the RL algorithm you choose. You can use **any algorithm** (PPO, REINFORCE++, GRPO, etc.) with **any execution mode**:

| Mode | Use Cases | Interface | Complexity |
|---|---|---|---|
| Single-Turn | Standard RLHF, custom reward functions | Optional reward_func() | ⭐ Default (99% use cases) |
| Multi-Turn | Multi-step reasoning, interactive environments | reset() + step() | ⭐⭐ Advanced |

---

## 🚀 State-of-the-Art RL Algorithms

[https://github.com/large-model-rl-lib/openrlhf#-state-of-the-art-rl-algorithms](https://github.com/large-model-rl-lib/openrlhf#-state-of-the-art-rl-algorithms)

OpenRLHF implements **PPO, REINFORCE++, REINFORCE++-baseline, GRPO, RLOO** with advanced optimization tricks inspired by practical guides and community best practices.

**Key Design**: RL algorithms are **decoupled from agent execution modes**. All algorithms work seamlessly with both single-turn and multi-turn agent executors, running through the unified token-in-token-out pipeline for consistent behavior.

Show algorithm comparison table

| Algorithm | --advantage_estimator | Key Feature | Best Use Case |
|---|---|---|---|
| PPO | (default) | Full critic network | Stable training, proven results |
| REINFORCE++ | reinforce | PPO tricks without critic | Efficient training, less memory |
| REINFORCE++-baseline | reinforce_baseline | Mean reward baseline | Reasoning tasks (RLVR), robust to reward scales |
| RLOO | rloo | Per-token KL + PPO-clip | Multi-sample training |
| GRPO | group_norm | Group normalization | Batch-based training |
| Dr. GRPO | dr_grpo | Simplified GRPO | Removes local /std norm |

References: [Zhihu article](https://zhuanlan.zhihu.com/p/622134699) | [Notion best practices](https://hijkzzz.notion.site/rlhf-implementation-tricks?v=158d9a33ecc98132bf9e000c39227361)

---

## 📋 Comprehensive Features

[https://github.com/large-model-rl-lib/openrlhf#-comprehensive-features](https://github.com/large-model-rl-lib/openrlhf#-comprehensive-features)

OpenRLHF provides a complete RLHF pipeline with agent-based flexibility:

### 🎯 Agent-Based RL Training (Core Innovation)

[https://github.com/large-model-rl-lib/openrlhf#-agent-based-rl-training-core-innovation](https://github.com/large-model-rl-lib/openrlhf#-agent-based-rl-training-core-innovation)
Show agent-based RL training details

**Single-Turn Mode** (Default - 99% of use cases)

- One-shot generation per prompt
- Works with all RL algorithms: [PPO](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_ppo_ray_hybrid_engine.sh), [REINFORCE++/baseline/GRPO/RLOO](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_reinforce_baseline_hybrid_engine.sh)
- [Custom reward functions](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_ppo_with_reward_fn.sh) (`--remote_rm_url`)
- [Hybrid Engine](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_ppo_ray_hybrid_engine.sh) for maximum GPU utilization

**Multi-Turn Mode** (Advanced - Interactive tasks)

- Multi-step interactions with environment feedback
- Works with all RL algorithms
- [Custom agent functions](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_reinforce_baseline_ray_agent_async.sh) (`--agent_func_path`)
- OpenAI-compatible server: see `examples/python/agent_func_openai_server_executor.py` for an agent executor that wraps vLLM as a local OpenAI Agent Server
- Async pipeline (`--async_train`) for higher throughput: [train_reinforce_baseline_ray_agent_async.sh](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_reinforce_baseline_ray_agent_async.sh)

### 🎓 Supervised Training & Preference Learning

[https://github.com/large-model-rl-lib/openrlhf#-supervised-training--preference-learning](https://github.com/large-model-rl-lib/openrlhf#-supervised-training--preference-learning)
Show supervised training & preference learning table

| Method | Script | Description |
|---|---|---|
| SFT | train_sft.sh | Supervised fine-tuning with packing |
| DPO/IPO/cDPO | train_dpo_llama.sh | Direct preference optimization |
| Reward Model | train_rm.sh | Train reward models |

### ⚡ Advanced Capabilities

[https://github.com/large-model-rl-lib/openrlhf#-advanced-capabilities](https://github.com/large-model-rl-lib/openrlhf#-advanced-capabilities)
Show advanced capabilities

**Efficiency Optimizations**

- Sample packing (`--packing_samples`) for all training modes
- vLLM acceleration (`--vllm_num_engines`) for fast generation
- DAPO [dynamic filtering](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_dapo_ray_hybrid_engine.sh) (`--dynamic_filtering`) 
  - 🎲 Dynamic Sampling: for each prompt, generate multiple responses and **filter** them by your reward / agent **0–1 `scores`** signal 
    - Enable: `--dynamic_filtering`
    - Score range: `--dynamic_filtering_reward_range 0.0 1.0`
    - Requires: `--n_samples_per_prompt > 1` and either `--remote_rm_url` or `--agent_func_path`
    - Example: `./examples/scripts/train_dapo_ray_hybrid_engine.sh`

**Scalability**

- DeepSpeed AutoTP for tensor parallelism (see `--ds_tensor_parallel_size` in training scripts)
- [RingAttention](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/test_scripts/train_dpo_ring_llama.sh) for long context (`--ring_attn_size`)
- Multi-node training with [SLURM](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_ppo_ray_slurm.sh)

**Model Support**

- [LoRA/QLoRA](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/train_sft_mixtral_lora.sh) (`--lora_rank`, `--load_in_4bit`)
- [Mixture of Experts (MoE)](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/test_scripts/train_sft_moe.sh) (`--aux_loss_coef`)
- FlashAttention (`--attn_implementation`)
- HuggingFace chat templates (`--apply_chat_template`)

**Production Features**

- Wandb (`--use_wandb`) and TensorBoard (`--use_tensorboard`) logging
- Checkpoint recovery (`--load_checkpoint`, `--save_steps`)
- Evaluation datasets (`--eval_dataset`)

---

## 🎬 Quick Start

[https://github.com/large-model-rl-lib/openrlhf#-quick-start](https://github.com/large-model-rl-lib/openrlhf#-quick-start)

### Installation

[https://github.com/large-model-rl-lib/openrlhf#installation](https://github.com/large-model-rl-lib/openrlhf#installation)

**Recommended**: Use Docker for hassle-free setup

```
# 1. Launch Docker container
docker run --runtime=nvidia -it --rm --shm-size="10g" --cap-add=SYS_ADMIN \
  -v $PWD:/openrlhf nvcr.io/nvidia/pytorch:25.11-py3 bash

# 2. Clean conflicting packages
sudo pip uninstall xgboost transformer_engine flash_attn pynvml -y

# 3. Install OpenRLHF (choose one)
pip install openrlhf                    # Basic
pip install openrlhf[vllm]              # + vLLM 0.19.0 (recommended)
pip install openrlhf[vllm_latest]       # + Latest vLLM
pip install openrlhf[vllm,ring,liger]   # + All optimizations
```

**Alternative: Install from source**

```
git clone https://github.com/OpenRLHF/OpenRLHF.git
cd OpenRLHF
pip install -e .
```

Tip

We recommend **vLLM 0.19.0+** for best performance. See [Dockerfiles](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/dockerfile) and [Nvidia-Docker Install Script](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts/nvidia_docker_install.sh).

### Prepare Datasets

[https://github.com/large-model-rl-lib/openrlhf#prepare-datasets](https://github.com/large-model-rl-lib/openrlhf#prepare-datasets)

OpenRLHF provides flexible data processing methods:

**Key Parameters**:

- `--input_key`: Specify JSON key name for input data
- `--apply_chat_template`: Use HuggingFace tokenizer's [chat template](https://huggingface.co/docs/transformers/main/en/chat_templating)
- `--input_template`: Custom template string (alternative to chat template)
- `--prompt_data_probs` / `--dataset_probs`: Mix multiple datasets (e.g., `0.1,0.4,0.5`)
- `--eval_dataset`: Specify evaluation dataset path

**Chat Template Example**:

```
dataset = [{"input_key": [
  {"role": "user", "content": "Hello, how are you?"},
  {"role": "assistant", "content": "I'm doing great. How can I help you today?"},
  {"role": "user", "content": "I'd like to show off how chat templating works!"},
]}]

tokenizer.apply_chat_template(dataset[0]["input_key"], tokenize=False)
# Output: "<s>[INST] Hello, how are you? [/INST]I'm doing great...</s> [INST] I'd like to show off... [/INST]"
```

Note

JSON key options vary by dataset type. See [Reward Dataset](https://github.com/OpenRLHF/OpenRLHF/blob/main/openrlhf/datasets/reward_dataset.py#L10), [SFT Dataset](https://github.com/OpenRLHF/OpenRLHF/blob/main/openrlhf/datasets/sft_dataset.py#L9), and [Prompt Dataset](https://github.com/OpenRLHF/OpenRLHF/blob/main/openrlhf/datasets/prompts_dataset.py#L6)

### Supervised Fine-tuning

[https://github.com/large-model-rl-lib/openrlhf#supervised-fine-tuning](https://github.com/large-model-rl-lib/openrlhf#supervised-fine-tuning)

OpenRLHF's model checkpoint is fully compatible with HuggingFace models. You can specify the model name or path using `--pretrain  {name or path}`, `--reward_pretrain  {name or path}` and `--critic_pretrain  {name or path}`. We have provided some pre-trained checkpoints and datasets on [HuggingFace OpenRLHF](https://huggingface.co/OpenRLHF).

Then you can use the startup scripts we provide in the [examples/scripts](https://github.com/Large-Model-RL-Lib/OpenRLHF/blob/main/examples/scripts) directory, or start the training using the following commands.

SFT command

```
deepspeed --module openrlhf.cli.train_sft \
   --max_len 4096 \
   --dataset Open-Orca/OpenOrca \
   --input_key question \
