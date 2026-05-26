# Mava - 多智能体强化学习框架

| 字段 | 信息 |
|------|------|
| 仓库 | instadeepai/Mava |
| GitHub URL | https://github.com/instadeepai/Mava |
| Stars | 400+ |
| 语言 | Python |
| 许可 | Apache-2.0 |
| 最近活跃 | 2025 年 |
| 模式 | 训练/数据循环 |

## 概述

Mava 是 InstaDeep 开发的多智能体强化学习 (MARL) 研究框架，基于 JAX 构建。它提供了一套模块化、可扩展的 MARL 算法实现，支持从集中式训练分布式执行 (CTDE) 到完全去中心化的多种范式。Mava 的设计目标是让研究者能够轻松地实现、比较和扩展多智能体 RL 算法。

## 核心特性

- **JAX 原生**：利用 JAX 的自动向量化、JIT 编译实现高性能训练
- **模块化架构**：系统、环境、网络、算法组件可独立替换
- **丰富的 MARL 算法**：支持 MAPPO、IPPO、MADDPG、QMIX 等经典算法
- **分布式训练**：支持多 GPU/TPU 分布式训练
- **多环境支持**：兼容 PettingZoo、OpenSpiel 等标准 MARL 环境

## 技术栈

- Python, JAX
- Flax (神经网络)
- Optax (优化器)
- Reverb (经验回放)
- Launchpad (分布式系统)

## 与 Self Evolve 的关联

Mava 是训练/数据循环模式在多智能体场景的体现：
- **训练/数据循环**：多智能体通过与环境的持续交互收集经验，不断改进策略
- 多智能体协同进化为 Self Evolve 提供了群体层面的进化视角

## 分类

AI4Science 方向中的多智能体强化学习，属于「多智能体协同进化与决策」。
