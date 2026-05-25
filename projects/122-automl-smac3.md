# SMAC3 - 序列模型算法配置
- **仓库**: automl/SMAC3
- **GitHub**: https://github.com/automl/SMAC3
- **Stars**: 1223
- **语言**: Python
- **许可**: NOASSERTION
- **最近活跃**: 2026-05
- **模式**: 搜索循环

## 概述
SMAC3（Sequential Model-based Algorithm Configuration）是基于随机森林的贝叶斯优化工具，源自 Freiburg 大学 AutoML 团队。它使用随机森林作为代理模型来建模超参数与性能之间的关系，广泛应用于算法配置、超参数优化和 AutoML pipeline 中，是 auto-sklearn 的核心优化引擎。

## 核心特性
- 随机森林代理模型：适合高维、混合类型的超参数空间
- 丰富的参数类型：支持连续、离散、条件参数
- 多保真度优化：支持基于预算的早停和多保真度评估
- intensification 机制：高效地集中资源评估有希望的配置
- 命令行和 API 接口：灵活的使用方式

## 技术栈
- Python, NumPy, SciPy
- scikit-learn (随机森林)
- ConfigSpace

## 与 Self Evolve 的关联
SMAC3 的序列模型优化机制展示了 AI 系统如何通过建立性能预测模型来指导搜索方向，这种 "预测-评估-更新" 的循环是 AI 自我进化中进行智能搜索的重要模式。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: bayesian-optimization, algorithm-configuration, random-forest, SMAC, AutoML
