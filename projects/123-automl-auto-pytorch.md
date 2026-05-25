# Auto-PyTorch - 自动深度学习
- **仓库**: automl/auto-pytorch
- **GitHub**: https://github.com/automl/auto-pytorch
- **Stars**: 2534
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-04
- **模式**: 搜索循环

## 概述
Auto-PyTorch 是 Freiburg 大学 AutoML 团队基于 PyTorch 开发的自动深度学习框架。它扩展了 auto-sklearn 的理念，将神经架构搜索与超参数优化、数据预处理选择相结合，通过多保真度优化和元学习自动构建高性能的深度学习 pipeline。

## 核心特性
- 联合 NAS + HPO：同时搜索网络架构和超参数
- 多保真度优化：通过预算分配策略加速搜索
- 自动 pipeline 构建：数据预处理、特征工程、模型选择一步到位
- 元学习初始化：利用历史任务经验加速新任务搜索
- PyTorch 原生：搜索到的模型可直接在 PyTorch 生态中使用

## 技术栈
- Python, PyTorch
- SMAC3 (优化后端)
- ConfigSpace

## 与 Self Evolve 的关联
Auto-PyTorch 展示了如何将架构搜索和超参数优化统一到单一搜索流程中，这种端到端的自动化搜索代表了 AI 系统在模型设计和配置层面的全面自我优化能力。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: AutoML, NAS, PyTorch, hyperparameter-optimization, deep-learning
