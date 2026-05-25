# Auto-sklearn - 科学工作流AutoML
- **仓库**: automl/auto-sklearn
- **GitHub**: https://github.com/automl/auto-sklearn
- **Stars**: ~8K
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-03
- **模式**: 搜索循环

## 概述
Auto-sklearn是基于scikit-learn的自动化机器学习框架，通过贝叶斯优化、元学习和自动集成构建实现机器学习管线的全自动设计。它在科学数据分析场景中被广泛使用。

## 核心特性
- 自动算法选择和超参数优化
- 基于元学习的热启动加速搜索
- 自动模型集成构建（Bagging、Ensemble Selection）
- 支持自定义度量、时间限制和资源约束
- 与scikit-learn无缝集成

## 技术栈
- Python
- scikit-learn
- ConfigSpace
- SMAC3 (贝叶斯优化)
- Pandas / NumPy

## 与 Self Evolve 的关联
Auto-sklearn通过自动搜索最优机器学习管线实现了模型设计的自我进化，其元学习机制将历史经验迁移到新任务，体现了学习能力的持续积累。

## 分类
- **类别**: AI4Science
- **标签**: auto-ml, scikit-learn, bayesian-optimization, meta-learning, ensemble
