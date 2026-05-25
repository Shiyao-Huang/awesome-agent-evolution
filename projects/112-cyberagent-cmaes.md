# CyberAgent CMA-ES - 高性能 CMA-ES 库
- **仓库**: CyberAgentAILab/cmaes
- **GitHub**: https://github.com/CyberAgentAILab/cmaes
- **Stars**: 501
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2026-04
- **模式**: 进化/搜索循环

## 概述
CyberAgent AI Lab 开发的独立 CMA-ES（协方差矩阵自适应进化策略）Python 库，是 Optuna 内置的 CMA-ES 采样器后端。它提供了高效、独立的 CMA-ES 实现，支持有边界约束的优化、separable CMA-ES 等变体，是超参数调优领域的常用工具。

## 核心特性
- 独立的 CMA-ES 实现：不依赖 pycma，完全自主实现
- 边界约束处理：内置支持有界参数空间的优化
- 多种 CMA-ES 变体：包括 separable CMA-ES、IPOP-CMA-ES 等
- Optuna 集成：作为 Optuna 的高效 CMA-ES 采样器

## 技术栈
- Python, NumPy
- Optuna (可选集成)

## 与 Self Evolve 的关联
CMA-ES 是最强大的连续优化进化算法之一，该库为 AI 系统在连续参数空间中的自动优化提供了高效的搜索引擎，是 AutoML 和神经架构搜索等自我进化技术的基础组件。

## 分类
- **类别**: 进化策略/ES
- **标签**: CMA-ES, continuous-optimization, hyperparameter-tuning, Optuna, CyberAgent
