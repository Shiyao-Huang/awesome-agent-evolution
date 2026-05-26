# Optuna - 自动超参数优化框架

| 字段 | 信息 |
|------|------|
| 仓库 | optuna/optuna |
| GitHub URL | https://github.com/optuna/optuna |
| Stars | 11k+ |
| 语言 | Python |
| 许可 | MIT |
| 最近活跃 | 2026 年 5 月 |
| 模式 | 进化/搜索循环, 评估器/打分器 |

## 概述

Optuna 是一个自动超参数优化框架，通过定义-运行（define-by-run）的 API 设计，使研究者能够高效地搜索最优超参数配置。它支持多种最先进的采样算法（TPE、CMA-ES、NSGA-II 等）和剪枝策略，广泛应用于机器学习和科学计算的模型调优场景。

## 核心特性

- **Define-by-Run API**：动态构建搜索空间，灵活适配复杂模型
- **多种采样算法**：TPE、CMA-ES、GPSampler、NSGA-II 等
- **异步并行优化**：支持分布式超参数搜索
- **智能剪枝**：基于中间结果自动终止不promising的试验
- **多目标优化**：支持同时优化多个相互冲突的目标

## 技术栈

- Python
- NumPy, SciPy
- 各种 ML 框架集成 (PyTorch, TensorFlow, XGBoost 等)
- Dashboard 可视化

## 与 Self Evolve 的关联

Optuna 是进化/搜索循环和评估器/打分器的工具化体现：
- **进化/搜索循环**：在超参数空间中进行智能搜索，利用历史试验信息指导后续搜索
- **评估器/打分器**：每次试验的验证性能作为评估信号，指导搜索方向

## 分类

AI4Science 方向中的自动化机器学习，属于「自动超参数搜索与模型选择」。
