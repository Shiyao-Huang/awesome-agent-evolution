# SMAC3 - 序列模型算法配置
- **仓库**: automl/SMAC3
- **GitHub**: https://github.com/automl/SMAC3
- **Stars**: 1223
- **语言**: Python
- **许可**: BSD-3-Clause
- **最近活跃**: 2025-06
- **模式**: 进化/搜索循环

## 概述
SMAC3（Sequential Model-based Algorithm Configuration）使用随机森林建模超参数-性能映射，通过序贯模型优化高效搜索最优配置。

## 核心特性
- 随机森林代理模型
- 序贯模型优化
- 处理条件超参数空间
- AC（Algorithm Configuration）和 HPO 双模式

## 技术栈
- Python, scikit-learn, ConfigSpace

## 与 Self Evolve 的关联
SMAC 的序贯模型优化是自我进化中"利用历史信息指导未来搜索"的实现：每轮搜索都从之前的结果中学习。

## 分类
- **类别**: 序贯模型优化
- **标签**: smac, bayesian-optimization, algorithm-configuration
