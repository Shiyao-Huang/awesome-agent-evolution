# FLAML — 快速轻量级 AutoML 库

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/microsoft/FLAML |
| Stars | 4,300+ |
| 主要语言 | Python |
| 许可证 | MIT License |

## 项目简介

FLAML 是由微软研究院开发的轻量级 Python 自动化机器学习库，旨在以极低的计算成本自动发现高精度的机器学习模型。它通过一种新颖的经济型调优方法（CFO 和 BlendSearch），能够在异构大规模搜索空间中高效地进行超参数优化和模型选择。除了传统的 AutoML 功能外，FLAML 还集成了大语言模型（LLM）工作流自动化能力，支持基于 LLM 的智能体应用构建。

## 目录结构

```
flaml/
├── flaml/
│   ├── automl/              # AutoML 核心引擎
│   │   ├── model.py         # 模型定义与训练
│   │   └── ml.py            # 机器学习流水线
│   ├── tune/                # 超参数调优模块
│   │   ├── search.py        # 搜索策略实现
│   │   └── analysis.py      # 实验分析工具
│   ├── autogen/             # LLM 智能体集成
│   └── default/             # 默认配置与预设
├── notebook/                # Jupyter 示例笔记本
├── test/                    # 测试套件
├── docs/                    # 文档
└── setup.py
```

## 核心模块分析

### 1. AutoML 引擎 (`flaml/automl/`)
这是 FLAML 的核心模块，提供 scikit-learn 风格的估计器接口。用户只需三行代码即可启动 AutoML 流程，自动处理分类、回归、时间序列预测等任务。引擎内部集成了 LightGBM、XGBoost、Random Forest 等多种学习器，并通过经济型搜索策略自动选择最优模型。

### 2. 超参数调优模块 (`flaml/tune/`)
提供了创新的 CFO（Concatenated Fractal Optimization）和 BlendSearch 算法，结合了局部搜索的高效性和全局搜索的探索能力。该模块不仅服务于 AutoML，还可独立用于任意超参数优化场景，支持并行化搜索和多目标优化。

### 3. LLM 工作流模块 (`flaml/autogen/`)
集成了 AutoGen 多智能体对话框架的子集，支持基于 LLM 的代码生成、检索增强生成（RAG）和智能体协作。该模块将 AutoML 的自动化理念延伸至 LLM 应用开发领域。

## 技术亮点

- **经济型搜索策略**：采用 CFO 和 BlendSearch 算法，通过自适应搜索空间缩减和成本感知的资源配置，大幅降低调优开销，相比传统方法可减少数倍计算成本
- **scikit-learn 兼容接口**：提供与 scikit-learn 完全兼容的 API，支持 `fit()`/`predict()` 范式，降低学习门槛，方便集成到现有 ML 流水线
- **多任务统一框架**：在统一的 API 下支持分类、回归、排序、时间序列预测、NLP 和计算机视觉等多种任务，无需针对不同任务切换工具
- **LLM 工作流自动化**：将 AutoML 思想应用于 LLM 领域，支持自动 prompt 优化、智能体编排和 RAG 管线构建

## 与 Self-Evolve 关联

FLAML 展示了"自动化搜索与优化"的核心理念如何从超参数空间扩展到 LLM 工作流设计，其经济型搜索策略为 AI 系统的自我调优提供了算法基础，是 AI Self-Evolution 中"自动发现更优配置"范式的典型实践。

## 参考资料

- FLAML: A Fast and Lightweight AutoML Library — Microsoft Research (https://www.microsoft.com/en-us/research/publication/flaml-a-fast-and-lightweight-automl-library/)
- FLAML 论文: arXiv:1911.04706 (https://arxiv.org/abs/1911.04706)
- FLAML 官方文档 (https://microsoft.github.io/FLAML/)
- AutoGluon: AutoML Benchmark 2025 相关论文
