# auto-sklearn - 自动机器学习框架
- **仓库**: automl/auto-sklearn
- **GitHub**: https://github.com/automl/auto-sklearn
- **Stars**: 8104
- **语言**: Python
- **许可**: BSD-3-Clause
- **最近活跃**: 2026-04
- **模式**: 搜索循环

## 概述
auto-sklearn 是基于 scikit-learn 的自动机器学习框架，通过贝叶斯优化、元学习和自动集成构建来自动选择和配置 ML pipeline。它是 AutoML 领域最具影响力的开源项目之一，源于 Freiburg 大学 AutoML 团队多年研究成果。

## 核心特性
- 自动 pipeline 搜索：自动选择数据预处理、特征工程和模型算法
- 贝叶斯超参数优化：基于 SMAC 的高效超参数搜索
- 元学习加速：利用历史数据集的经验快速初始化搜索
- 自动集成构建：将搜索过程中发现的优秀模型自动组合为集成
- Auto-sklearn 2.0：引入更高效的搜索空间和策略选择

## 技术栈
- Python, scikit-learn
- SMAC3 (贝叶斯优化)
- pandas, NumPy

## 与 Self Evolve 的关联
auto-sklearn 展示了 ML pipeline 自动搜索和优化的完整范式，其 "自动搜索-评估-改进" 的循环机制是 AI 系统自我进化的典型模式，为自动化 ML 工作流设计提供了重要参考。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: AutoML, scikit-learn, bayesian-optimization, meta-learning, ensemble
