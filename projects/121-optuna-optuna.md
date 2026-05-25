# Optuna - 超参数优化框架
- **仓库**: optuna/optuna
- **GitHub**: https://github.com/optuna/optuna
- **Stars**: 14215
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2026-05
- **模式**: 搜索循环

## 概述
Optuna 是 Preferred Networks 开发的下一代超参数优化框架，采用 define-by-run API 设计使得用户可以动态构建搜索空间。它内置了最先进的采样算法（TPE、CMA-ES、NSGA-II）和高效的剪枝策略，是 AutoML 领域使用最广泛的工具之一。

## 核心特性
- define-by-run API：在训练循环中动态定义超参数搜索空间
- 先进采样器：TPE、CMA-ES、NSGA-II、GPSMBO 等多种采样策略
- 自动剪枝：Median Pruner、Hyperband 等早期停止策略
- 分布式优化：支持多进程和分布式超参数搜索
- 可视化仪表盘：丰富的实验分析图表

## 技术栈
- Python, NumPy
- SciPy, scikit-learn
- CMA-ES (CyberAgentAILab/cmaes)

## 与 Self Evolve 的关联
Optuna 提供了 AI 系统自动搜索最优运行参数的核心能力，其高效的搜索和剪枝机制使得自我优化过程可以在有限的计算资源下快速收敛，是 AI 自我进化基础设施的关键组件。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: hyperparameter-optimization, TPE, CMA-ES, pruning, AutoML
