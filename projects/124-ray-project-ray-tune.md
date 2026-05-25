# Ray Tune - 分布式超参数调优
- **仓库**: ray-project/ray (Ray Tune)
- **GitHub**: https://github.com/ray-project/ray
- **Stars**: 42628
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 搜索循环

## 概述
Ray Tune 是 Ray 生态系统中的超参数调优库，提供了可扩展的分布式超参数搜索能力。它集成了多种搜索算法（贝叶斯优化、Hyperband、进化策略等）和调度策略，支持从单机到集群的无缝扩展，并与 PyTorch、TensorFlow 等所有主流 ML 框架兼容。

## 核心特性
- 丰富的搜索算法：ASHA、HyperBand、BOHB、Optuna/CMA-ES 集成
- 弹性分布式调度：从笔记本到集群的透明扩展
- 自动 checkpoint 和恢复：支持长时间运行的调优实验
- 多框架兼容：PyTorch、TensorFlow、XGBoost、LightGBM 等
- 集成生态：与 Weights & Biases、MLflow 等实验管理工具集成

## 技术栈
- Python, Ray
- PyTorch, TensorFlow
- Optuna, HyperOpt (集成)

## 与 Self Evolve 的关联
Ray Tune 的分布式调优能力为大规模 AI 自我优化提供了基础设施，其弹性调度和多种搜索算法的组合使得 AI 系统可以在不同规模的计算资源上实现高效的自我参数优化。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: hyperparameter-tuning, distributed-computing, Ray, AutoML, scalable
