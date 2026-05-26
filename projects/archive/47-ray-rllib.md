# Ray RLlib - 分布式强化学习基础设施
- **仓库**: ray-project/ray
- **GitHub**: https://github.com/ray-project/ray
- **Stars**: 35000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 训练/数据循环

## 概述
Ray 是分布式计算框架，其中 RLlib 模块提供可扩展的强化学习训练库，支持 PPO/SAC/DQN 等经典算法的大规模分布式训练，是 RLHF 训练的基础设施层。

## 核心特性
- 20+ 内置 RL 算法（PPO, SAC, DQN, IMPALA 等）
- 分布式采样和训练
- 自定义策略和环境支持
- Tune 超参数优化集成

## 技术栈
- Python, Ray, PyTorch, TensorFlow

## 与 Self Evolve 的关联
RLlib 的分布式 RL 训练能力为自我进化系统提供了底层训练基础设施，特别是需要大量环境交互的进化/搜索循环。

## 分类
- **类别**: 分布式 RL 框架
- **标签**: ray, rllib, distributed, reinforcement-learning
