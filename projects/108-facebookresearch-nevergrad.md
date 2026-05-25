# Nevergrad - 无梯度优化平台
- **仓库**: facebookresearch/nevergrad
- **GitHub**: https://github.com/facebookresearch/nevergrad
- **Stars**: 4189
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2026-03
- **模式**: 进化/搜索循环

## 概述
Nevergrad 是 Meta（原 Facebook）AI Research 开发的无梯度优化平台，汇集了大量无导数优化算法（包括 CMA-ES、PSO、DE、Bayesian 优化变体等）。它提供了统一的接口来比较和选择最适合特定问题的优化器，广泛用于超参数调优和黑箱优化。

## 核心特性
- 80+ 无梯度优化器：包括进化策略、粒子群、差分进化、序列二次规划等
- 自动优化器推荐：基于问题特征的优化器选择建议
- 多种参数类型支持：标量、离散、有序、数组等
- 基准测试框架：系统化的优化器性能比较工具
- 与 ML 框架集成：支持 scikit-learn、PyTorch 等的超参数优化

## 技术栈
- Python, NumPy
- Bayesian Optimization
- CMA-ES (内部集成)

## 与 Self Evolve 的关联
Nevergrad 为 AI 系统自动搜索最优配置和参数提供了强大的工具集，其无梯度特性使得它可以在不可微的复杂系统中进行自动化优化，是 AI 自我进化基础设施的重要组成部分。

## 分类
- **类别**: 进化策略/ES
- **标签**: derivative-free-optimization, black-box-optimization, hyperparameter-tuning, CMA-ES, Meta
