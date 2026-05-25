# Ray (RLlib) - 分布式计算与进化策略平台
- **仓库**: ray-project/ray
- **GitHub**: https://github.com/ray-project/ray
- **Stars**: 42628
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 进化/搜索循环

## 概述
Ray 是一个通用的分布式计算框架，其中包含 RLlib（强化学习库）和 Ray Tune（超参数调优），均支持进化策略。通过 RLlib 的 ES 实现，可以高效地在集群上分布式运行大规模进化策略训练，是工业级 ES 应用的首选平台。

## 核心特性
- 分布式 ES 训练：RLlib 内置进化策略实现，支持数千核并行
- AutoML 集成：Ray Tune 提供基于 ES 和贝叶斯方法的超参数自动调优
- 弹性扩展：从笔记本到集群的无缝扩展
- 丰富的算法生态：除 ES 外还支持 PPO、SAC、IMPALA 等数十种 RL 算法

## 技术栈
- Python, C++
- Ray (分布式运行时)
- RLlib, Ray Tune
- OpenAI Gym, PettingZoo

## 与 Self Evolve 的关联
Ray 为大规模进化策略训练提供了工业级分布式基础设施，使得 AI 系统的进化式自我改进可以在海量计算资源上高效执行，是将进化方法从研究推向生产的关键平台。

## 分类
- **类别**: 进化策略/ES
- **标签**: distributed-computing, evolution-strategies, reinforcement-learning, RLlib, hyperparameter-tuning
