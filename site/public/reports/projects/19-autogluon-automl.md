# AutoGluon — 多模态自动化机器学习框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/autogluon/autogluon |
| Stars | 10,195+ |
| 主要语言 | Python |
| 许可证 | Apache License 2.0 |

## 项目简介

AutoGluon 是由 AWS AI 团队开发的开源自动化机器学习框架，能够在图像、文本、表格和时间序列等多模态数据上自动构建高性能预测模型。用户仅需几行代码即可从原始数据获得业界领先的预测性能，无需具备机器学习专业知识。AutoGluon 在 AutoML Benchmark 2025 中取得了表格数据领域的最优成绩，并推出了基于多智能体协作的零代码 AutoML 助手（AutoGluon Assistant/MLZero），在多模态 AutoML Agent Benchmark 上达到 92% 的成功率。

## 目录结构

```
autogluon/
├── autogluon/
│   ├── core/                # 核心框架与基类
│   ├── features/            # 特征工程模块
│   ├── tabular/             # 表格数据 AutoML
│   │   ├── models/          # 内置模型（LightGBM, XGBoost, CatBoost 等）
│   │   └── trainers/        # 模型训练策略
│   ├── multimodal/          # 多模态 AutoML（AutoMM）
│   │   ├── data/            # 数据处理与增强
│   │   ├── models/          # 多模态模型架构
│   │   └── optimization/    # 训练优化策略
│   ├── timeseries/          # 时间序列预测
│   └── common/              # 公共工具与工具函数
├── docs/                    # 文档
├── tests/                   # 测试套件
└── setup.py
```

## 核心模块分析

### 1. 表格数据模块 (`autogluon/tabular/`)
AutoGluon 的旗舰模块，在 AutoML Benchmark 2025 中有公开结果线索，具体相对位置需要按 benchmark 版本复核。它采用多层堆叠集成（multi-layer stacking ensemble）策略，自动将 LightGBM、XGBoost、CatBoost、神经网络等多种模型组合为集成预测器。支持自动特征工程、数据清洗和缺失值处理，用户只需调用 `TabularPredictor.fit()` 即可。

### 2. 多模态模块 (`autogluon/multimodal/`, AutoMM)
该模块是 AutoGluon 区别于其他 AutoML 框架的核心差异化能力。支持文本、图像、表格数据的任意混合建模，自动选择合适的预训练模型（如 BERT、ViT、CLIP 等），并通过自动超参数优化和模型融合实现最优的多模态预测性能。

### 3. AutoGluon Assistant（MLZero）
基于多智能体协作的零代码 AutoML 系统，能将原始数据自动转化为训练好的模型。在 Multimodal AutoML Agent Benchmark 上达到 92% 成功率，在 MLE-bench Lite 上达到 86% 成功率，代表了 AutoML 向全自动化智能体方向演进的最新趋势。

## 技术亮点

- **多层堆叠集成**：独创的多层模型堆叠策略，在每一层自动选择最优基学习器并构建元学习器，通过贪婪搜索实现近乎穷举的模型组合效果，极大提升了集成性能
- **多模态统一建模**：在单一框架内支持文本、图像、表格和时序数据的联合建模，自动识别数据类型并选择合适的预训练骨干网络，无需手动指定模型架构
- **零代码多智能体 AutoML**：AutoGluon Assistant 通过多智能体协作自动完成从数据理解、特征工程到模型训练的全流程，将 AutoML 的自动化程度推向新高度
- **性能与易用性兼顾**：在保持 API 极简（`fit()` + `predict()`）的同时，提供多个基准测试结果入口，便于复查易用性与预测精度之间的取舍

## 与 Self-Evolve 关联

AutoGluon 代表了 AutoML 系统从"自动化单一任务"向"多智能体自主协作完成端到端 ML 工作流"的演进方向，其 AutoGluon Assistant 展示了 AI 系统如何通过自我搜索和智能体编排来持续提升自身建模能力，是 AI Self-Evolution 在机器学习自动化领域的重要实践。

## 参考资料

- AutoGluon 官方文档 (https://auto.gluon.ai/)
- AutoGluon: A Quick Start Guide — NeurIPS 2022 Workshop
- AutoGluon Assistant: Zero-code AutoML through Multiagent Collaboration — Amazon Science Blog (https://www.amazon.science/blog/autogluon-assistant-zero-code-automl-through-multiagent-collaboration)
- AutoGluon Multimodal 论文: arXiv:2206.13588
