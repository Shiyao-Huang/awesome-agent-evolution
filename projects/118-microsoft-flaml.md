# FLAML - 快速轻量自动机器学习
- **仓库**: microsoft/FLAML
- **GitHub**: https://github.com/microsoft/FLAML
- **Stars**: 4354
- **语言**: Jupyter Notebook / Python
- **许可**: MIT
- **最近活跃**: 2026-05
- **模式**: 搜索循环

## 概述
FLAML（Fast and Lightweight AutoML）是微软研究院开发的高效自动机器学习库。它使用经济学搜索策略（CFO 和 BlendSearch）在搜索成本和模型质量之间取得平衡，能够以极低的计算成本找到高质量的 ML pipeline，同时支持 LLM 的自动调优。

## 核心特性
- 经济高效的搜索策略：CFO 和 BlendSearch 算法大幅降低搜索成本
- 全面的 ML 任务支持：分类、回归、时间序列、排名等
- AutoGen 集成：支持 LLM 应用和 Agent 的自动调优
- 灵活的估计器：支持 XGBoost、LightGBM、CatBoost 等主流框架
- 并行和分布式：支持大规模并行超参数搜索

## 技术栈
- Python, NumPy, pandas
- XGBoost, LightGBM, CatBoost
- Spark (分布式)

## 与 Self Evolve 的关联
FLAML 的高效搜索策略使 AI 系统能以极低成本自动优化自身配置，其从传统 ML 到 LLM 的扩展能力展示了 AutoML 技术如何演进为 AI 系统的通用自我优化工具。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: AutoML, hyperparameter-optimization, LLM, Microsoft, cost-effective
