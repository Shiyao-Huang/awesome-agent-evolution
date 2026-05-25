# EvoJax - JAX 加速神经进化框架
- **仓库**: google/evojax
- **GitHub**: https://github.com/google/evojax
- **Stars**: 948
- **语言**: Jupyter Notebook / Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-06
- **模式**: 进化/搜索循环

## 概述
EvoJax 是 Google 开发的基于 JAX 的神经进化框架，利用 JAX 的硬件加速能力（GPU/TPU）实现大规模并行神经进化。它将进化策略、遗传算法等经典方法在 JAX 上重新实现，使得种群级别的评估和进化操作可以高效地在现代硬件上运行。

## 核心特性
- JAX 全栈实现：进化算法和神经网络均在 JAX 上运行，支持 GPU/TPU 加速
- 硬件级种群并行：整个种群的适应度评估可在单设备上向量化执行
- 多种进化算法：OpenAI-ES、CMA-ES、PGPE、ARS 等
- 灵活的任务接口：支持自定义任务和环境
- 与 Optuna 集成：支持超参数调优

## 技术栈
- Python, JAX, Flax
- NumPy

## 与 Self Evolve 的关联
EvoJax 证明了进化方法可以通过现代深度学习硬件高效加速，使得 AI 系统通过进化实现自我改进的计算成本大幅降低，为将进化策略集成到 AI 自我优化流水线中提供了实用路径。

## 分类
- **类别**: 进化策略/ES
- **标签**: neuroevolution, JAX, hardware-acceleration, evolution-strategies, Google
