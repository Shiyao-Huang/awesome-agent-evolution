# TPOT - 基于遗传编程的 AutoML
- **仓库**: EpistasisLab/tpot
- **GitHub**: https://github.com/EpistasisLab/tpot
- **Stars**: 10051
- **语言**: Jupyter Notebook / Python
- **许可**: LGPL-3.0
- **最近活跃**: 2025-09
- **模式**: 进化/搜索循环

## 概述
TPOT（Tree-based Pipeline Optimization Tool）是使用遗传编程自动设计和优化机器学习 pipeline 的工具。它将 ML pipeline 表示为树结构，通过遗传编程的交叉和变异操作自动搜索最优的特征预处理、特征选择和模型组合方案，基于 DEAP 框架实现进化搜索。

## 核心特性
- 遗传编程 pipeline 搜索：将 ML pipeline 编码为树，通过 GP 进化
- 基于 DEAP 的进化引擎：利用 DEAP 框架的强大进化计算能力
- 自动特征工程：自动选择和构造特征变换
- scikit-learn 兼容：TPOT 可以作为 scikit-learn 的 estimator 使用
- Pipeline 导出：将最优 pipeline 导出为 Python 代码

## 技术栈
- Python, scikit-learn
- DEAP (遗传编程)
- NumPy, pandas
- PyTorch (TPOT-NN 扩展)

## 与 Self Evolve 的关联
TPOT 是将进化计算应用于 AutoML 的经典案例，它展示了如何通过遗传编程自动发现和优化完整的 ML pipeline，这种基于进化的自动化设计是 AI 系统自我进化在工程实践中的重要应用。

## 分类
- **类别**: 自动化 ML / AutoML
- **标签**: genetic-programming, AutoML, pipeline-optimization, scikit-learn, evolutionary
