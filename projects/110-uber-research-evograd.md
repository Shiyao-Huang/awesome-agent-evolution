# EvoGrad - 可微分进化策略
- **仓库**: uber-research/EvoGrad
- **GitHub**: https://github.com/uber-research/EvoGrad
- **Stars**: 183
- **语言**: Python
- **许可**: NOASSERTION
- **最近活跃**: 2024-07
- **模式**: 进化/搜索循环

## 概述
EvoGrad 由 Uber AI Labs 开发，将进化策略与可微编程相结合。它允许用户通过 PyTorch 自动微分来计算进化策略中采样分布的梯度，使得 ES 优化过程可以利用梯度信息，实现更高效的参数更新。

## 核心特性
- 可微分的 ES 实现：利用 PyTorch 自动微分计算采样分布梯度
- 灵活的目标函数：支持非可微和可微混合的目标函数
- 多种采样分布：支持高斯、自适应分布等
- 与 PyTorch 生态集成：无缝使用 GPU 加速

## 技术栈
- Python, PyTorch
- NumPy

## 与 Self Evolve 的关联
EvoGrad 探索了将进化策略与梯度优化融合的新范式，为 AI 系统在自我进化过程中结合无梯度和梯度方法提供了思路，是进化与学习融合的重要探索。

## 分类
- **类别**: 进化策略/ES
- **标签**: evolution-strategies, differentiable-programming, PyTorch, gradient-estimation, Uber
