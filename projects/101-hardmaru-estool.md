# ESTool - 进化策略工具集
- **仓库**: hardmaru/estool
- **GitHub**: https://github.com/hardmaru/estool
- **Stars**: 959
- **语言**: Jupyter Notebook / Python
- **许可**: NOASSERTION
- **最近活跃**: 2022-12
- **模式**: 进化/搜索循环

## 概述
ESTool 是由 David Ha（hardmaru）开发的进化策略工具集，实现了多种进化算法（GA、Population-based REINFORCE、CMA-ES、OpenAI-ES）的统一接口。该项目通过简洁的 ask-tell 接口设计，让用户可以快速在不同进化策略之间切换和对比。

## 核心特性
- 统一的进化策略接口：支持 GA、CMA-ES、OpenAI-ES、Population-based REINFORCE 等多种算法
- MPI 并行训练：通过 mpi4py 实现大规模分布式进化计算
- PyBullet/Gym 集成：内置多种机器人控制环境（Ant、Minitaur、Racecar 等）
- 预训练模型库：包含 Cartpole、Slime Volleyball 等任务的已进化模型

## 技术栈
- Python, NumPy, mpi4py
- OpenAI Gym, PyBullet
- pycma (CMA-ES)

## 与 Self Evolve 的关联
ESTool 展示了通过进化策略自动优化神经网络参数的范式，是 AI 系统通过无梯度方法自我改进的典型案例，启发了后续大规模 ES 训练方法的发展。

## 分类
- **类别**: 进化策略/ES
- **标签**: evolution-strategies, CMA-ES, reinforcement-learning, black-box-optimization, robotics
