# veRL - RLHF 训练框架

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | verl-project/verl |
| GitHub URL | https://github.com/verl-project/verl |
| Stars | ~21,500 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2026-05 |
| 模式 | 训练/数据循环 |

## 概述
veRL (Volcano Engine Reinforcement Learning) 是字节跳动开发的开源 RLHF 训练框架，现已成为社区驱动项目。它以灵活性和高性能著称，支持多种 RL 算法 (PPO, GRPO, DAPO, RLOO, REINFORCE++) 与多种推理后端 (vLLM, SGLang) 的灵活组合。veRL 采用 Actor-Critic 分离架构设计，通过 FSDP/Megatron-LM 实现高效分布式训练。项目在 2025-2026 年保持极其活跃的开发节奏，被广泛应用于大模型对齐训练。

## 核心特性
- **多算法支持**: PPO, GRPO, DAPO (Dynamic Advantage Policy Optimization), RLOO, REINFORCE++ 等前沿 RL 算法
- **灵活后端**: 支持 vLLM 和 SGLang 推理引擎，可自由切换
- **分布式训练**: FSDP 和 Megatron-LM 双后端支持，支持多节点大规模训练
- **Actor-Critic 分离**: 训练和推理解耦，支持异构资源调度
- **高效 Rollout**: 通过 vLLM/SGLang 加速 rollout 生成，大幅提升 RLHF 训练吞吐
- **模型支持**: 支持 LLaMA, Qwen, DeepSeek 等主流模型系列
- **Ray 集成**: 基于 Ray 进行资源管理和任务调度
- **Multi-turn RL**: 支持多轮对话的强化学习训练

## 技术栈
- Python, PyTorch, Ray
- FSDP, Megatron-LM (分布式训练)
- vLLM, SGLang (推理引擎)
- Hugging Face Transformers

## 与 Self Evolve 的关联
veRL 提供了 Self Evolve 系统中"训练/数据循环"模式的高性能训练基础设施。其 DAPO 算法通过动态优势估计改进策略优化，GRPO 无需 critic 模型降低了训练开销。Actor-Critic 分离架构使得自我进化系统可以灵活地在训练和推理之间分配计算资源。veRL 的高吞吐设计使大规模迭代式自我进化训练成为可能。

## 分类
- **类别**: RLHF 训练框架
- **标签**: rlhf, ppo, grpo, dapo, distributed-training, vllm, reinforcement-learning
