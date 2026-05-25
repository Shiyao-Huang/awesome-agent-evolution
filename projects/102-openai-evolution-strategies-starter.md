# Evolution Strategies Starter - OpenAI 进化策略入门
- **仓库**: openai/evolution-strategies-starter
- **GitHub**: https://github.com/openai/evolution-strategies-starter
- **Stars**: 1630
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2019-10
- **模式**: 进化/搜索循环

## 概述
OpenAI 发布的进化策略（ES）入门项目，实现了经典论文 "Evolution Strategies as a Scalable Alternative to Reinforcement Learning" 中的核心算法。该代码库展示了如何使用自然进化策略训练神经网络来解决强化学习任务，具有良好的并行可扩展性。

## 核心特性
- 自然进化策略（NES）实现：基于参数扰动和奖励加权的高效黑箱优化
- 高度可扩展的并行架构：支持数百台机器的分布式训练
- MuJoCo/Gym 环境支持：在经典强化学习基准上验证 ES 的有效性
- 极简代码结构：便于理解和复现论文核心思想

## 技术栈
- Python, NumPy
- OpenAI Gym, MuJoCo
- MPI (分布式训练)

## 与 Self Evolve 的关联
该项目证明了进化策略可以替代传统梯度方法训练深度神经网络，为 AI 系统的自动化自我优化提供了无需反向传播的替代路径，是大规模无梯度学习的重要里程碑。

## 分类
- **类别**: 进化策略/ES
- **标签**: evolution-strategies, reinforcement-learning, black-box-optimization, scalable-training, OpenAI
