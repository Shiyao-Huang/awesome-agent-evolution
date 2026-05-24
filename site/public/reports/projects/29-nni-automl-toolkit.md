# NNI — 微软 AutoML 神经网络智能工具包

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/microsoft/nni |
| Stars | 14,346 |
| 主要语言 | Python |
| 许可证 | MIT |
| 开发者 | Microsoft Research |
| 状态 | 已归档（Archived） |

## 项目简介

NNI（Neural Network Intelligence）是微软研究院开发的开源 AutoML 工具包，旨在自动化深度学习的全流程，涵盖超参数优化（HPO）、神经架构搜索（NAS）、模型压缩和特征工程四大核心功能。作为 AutoML 领域最全面的开源工具之一，NNI 支持本地、远程服务器和云平台（Azure、Kubernetes）等多种训练环境。

值得注意的是，微软已于 2024 年将 NNI 项目归档（Archived），不再进行积极维护。尽管如此，NNI 在 NAS 和 HPO 领域积累的算法实现和工程设计仍具有重要的参考价值，其学术影响力体现在大量后续 AutoML 研究工作中。

## 目录结构

```
nni/
├── nni/                     # 核心框架代码
│   ├── nas/                 # 神经架构搜索模块
│   │   ├── space/           # 搜索空间定义
│   │   ├── strategy/        # 搜索策略（DARTS、ENAS 等）
│   │   └── execution/       # 执行引擎
│   ├── hpo/                 # 超参数优化模块
│   │   ├── bayesian/        # 贝叶斯优化
│   │   ├── tpe/             # TPE 算法
│   │   └── hyperband/       # Hyperband 算法
│   ├── compression/         # 模型压缩（剪枝、量化）
│   ├── featureengineering/  # 自动特征工程
│   ├── runtime/             # 运行时环境
│   ├── webui/               # Web 可视化界面
│   └── utils/               # 工具函数
├── examples/                # 示例与教程
├── test/                    # 测试套件
├── docs/                    # 项目文档
├── deployment/              # 部署配置
└── tools/                   # 辅助工具
```

## 核心模块分析

### 1. 神经架构搜索（NAS）模块

NNI 的 NAS 模块是其最具技术深度的组件，支持多种主流搜索策略：ENAS（高效神经架构搜索，通过参数共享加速搜索）、DARTS（可微分架构搜索，将离散搜索转化为连续优化）、P-DARTS（渐进式 DARTS，逐步增大搜索深度）、SPOS（单路径一次性搜索）和 Network Morphism 等。NAS 模块设计了统一的搜索空间抽象层，用户可通过 Python API 定义架构搜索空间，然后选择不同策略进行搜索。该模块还支持 one-shot 和 classic 两种搜索范式。

### 2. 超参数优化（HPO）模块

HPO 模块集成了丰富的调优算法，包括贝叶斯优化（高斯过程）、TPE（树结构 Parzen 估计器）、SMAC、Hyperband 和 ASHA（异步连续减半）等。NNI 的 HPO 模块设计了 Trial-Assessor 架构：Tuner 负责建议下一组超参数，Assessor 负责在训练过程中评估并提前终止表现不佳的 Trial。这种分离式设计使得搜索策略和评估策略可以自由组合。

### 3. 模型压缩模块

模型压缩模块提供了自动化的模型剪枝和量化工具。剪枝支持细粒度权值剪枝、通道剪枝和结构化剪枝等多种策略；量化支持训练后量化和量化感知训练。该模块与 NAS 和 HPO 协同工作，可在搜索最优架构的同时进行压缩优化，实现"搜索-压缩"联合优化。这种端到端的自动化压缩能力在当时是业界领先的。

## 技术亮点

- **一站式 AutoML 平台**：将 NAS、HPO、模型压缩和特征工程整合到统一平台，用户可通过 Web UI 管理完整的 AutoML 实验流程，是当时功能最全面的开源 AutoML 工具包。
- **丰富的 NAS 算法矩阵**：内置 ENAS、DARTS、P-DARTS、SPOS 等主流 NAS 算法，支持 one-shot 和 classic 两种搜索范式，统一了不同 NAS 方法的接口。
- **多平台分布式训练**：支持本地、远程 SSH、Azure 云和 Kubernetes 等多种训练平台，内置智能资源调度和 Fault Tolerance 机制，适合大规模 AutoML 实验。
- **Web UI 实验管理**：提供直观的 Web 界面用于管理实验、监控 Trial 状态、对比超参数组合和分析搜索空间，降低了 AutoML 的使用门槛。

## 与 Self-Evolve 关联

NNI 在 Self-Evolve 研究框架中具有深远的方法论意义。其 NAS（神经架构搜索）本质上是一种"程序自动进化"——系统自动搜索最优的神经网络拓扑结构，这与 Self-Evolve 中 AI 系统自我优化代码和架构的思想高度契合。NNI 展示了如何将"进化"概念应用于程序结构的自动设计。

具体关联包括：第一，NNI 的 NAS 搜索空间设计为 Self-Evolve 提供了"进化搜索空间"的设计范式——如何定义一个可搜索的结构空间。第二，NNI 的 Tuner-Assessor 架构对应了进化计算中的"变异-选择"机制，为 Self-Evolve 系统的个体选择策略提供了工程参考。第三，NNI 的模型压缩功能展示了"自我简化"的可能性——AI 系统不仅能够自我增强，还能自动精简自身以适应资源约束。第四，NNI 项目的归档本身也提供了启示：AutoML 工具的长期维护需要与社区生态深度融合，这对 Self-Evolve 系统的可持续性设计具有借鉴意义。

## 参考资料

- [NNI GitHub 仓库](https://github.com/microsoft/nni)
- [NNI 官方文档](https://nni.readthedocs.io/)
- [Microsoft Research — Neural Network Intelligence 项目页](https://www.microsoft.com/en-us/research/project/neural-network-intelligence/)
- [Microsoft Releases NNI V1.3 (SyncedReview)](https://syncedreview.com/2020/01/07/microsoft-releases-nni-v1-3-for-automl-algorithms-and-training/)
- [PyPOTS Issue #589 — NNI 归档替代方案讨论](https://github.com/WenjieDu/PyPOTS/issues/589)
