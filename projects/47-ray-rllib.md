# Ray RLlib - 分布式强化学习

## 基本信息

| 字段 | 内容 |
|------|------|
| 仓库 | ray-project/ray |
| GitHub URL | https://github.com/ray-project/ray |
| Stars | ~35,000 |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025+ |
| 模式 | 训练/数据循环 |

## 概述
Ray 是 Anyscale 开发的通用分布式计算框架，其中的 RLlib 模块是业界领先的分布式强化学习库。Ray RLlib 支持从经典 RL 算法 (PPO, SAC, DQN) 到大规模多智能体 RL 的完整训练流程。在 RLHF 场景中，Ray 被用作底层的分布式计算和资源调度层 (如 veRL 基于 Ray 调度)，其灵活的 Actor 模型非常适合 RLHF 中训练与推理的并行化。Ray 的可扩展性使其成为大规模 RLHF 工程的首选基础设施。

## 核心特性
- **分布式架构**: 基于 Ray Actor 模型，支持 CPU/GPU 异构集群
- **RL 算法套件**: PPO, SAC, DQN, IMPALA, APEX, MARL 等 20+ 种算法
- **多智能体支持**: 原生支持多智能体环境，适合 multi-agent RLHF
- **弹性训练**: 支持容错、自动缩放、抢占恢复
- **自定义训练循环**: 可通过 Build-in API 自定义训练逻辑
- **RLHF 集成**: 作为 veRL 等框架的底层调度层

## 技术栈
- Python, C++ (Ray Core)
- PyTorch, TensorFlow
- Redis, Plasma (对象存储)

## 与 Self Evolve 的关联
Ray 为 Self Evolve 系统提供了"训练/数据循环"模式的分布式计算基础设施。自我进化系统通常需要大量的并行计算 (生成、评估、训练同时进行)，Ray 的 Actor 模型和弹性调度恰好满足这一需求。其多智能体支持也为多 Agent 协作进化提供了底层能力。

## 分类
- **类别**: 分布式 RL 框架
- **标签**: reinforcement-learning, distributed-computing, ppo, multi-agent, rllib, scaling
