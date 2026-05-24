# Optuna — 新一代超参数优化框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/optuna/optuna |
| Stars | 11,000+ |
| 主要语言 | Python |
| 许可证 | MIT |
| 开发者 | Preferred Networks (PFN) |

## 项目简介

Optuna 是由日本 AI 公司 Preferred Networks 开发的自动化超参数优化框架，专为机器学习场景设计。其核心创新在于采用"define-by-run"（运行时定义）的命令式 API，允许用户在优化过程中动态构建搜索空间，突破了传统声明式框架的限制。Optuna 支持多种先进的优化算法，包括 TPE（Tree-structured Parzen Estimator）、CMA-ES 和多目标优化等。

作为一个活跃发展的开源项目，Optuna 已成为机器学习社区中最受欢迎的超参数调优工具之一。它与 PyTorch、TensorFlow、XGBoost、LightGBM、scikit-learn 等主流 ML 框架深度集成，并提供实时可视化的 Web Dashboard，方便用户监控和分析优化过程。

## 目录结构

```
optuna/
├── optuna/                  # 核心框架代码
│   ├── samplers/            # 采样算法（TPE、CMA-ES、NSGA-II 等）
│   ├── pruners/             # 剪枝策略（Hyperband、Median 等）
│   ├── storages/            # 存储后端（内存、SQLite、MySQL 等）
│   ├── study/               # Study 管理与调度
│   ├── trial/               # Trial 定义与生命周期
│   ├── importance/          # 超参数重要性分析
│   ├── visualization/       # 可视化模块
│   ├── integration/         # 第三方框架集成
│   ├── distributions/       # 参数分布定义
│   ├── _hypervolume/        # 多目标优化超体积计算
│   └── artifacts/           # 工件管理
├── tests/                   # 测试套件
├── docs/                    # 项目文档
├── examples/                # 使用示例
└── benchmarks/              # 性能基准测试
```

## 核心模块分析

### 1. Define-by-Run 命令式 API

Optuna 的标志性设计是其命令式搜索空间定义方式。与传统的声明式搜索空间不同，用户在目标函数（objective function）内部通过 `trial.suggest_*()` 方法动态声明超参数。这种方式支持条件参数（即某些参数的存在与否取决于其他参数的值），使得搜索空间的定义更加灵活自然。每个 Trial 在执行时即时构建搜索空间，实现了优化逻辑与搜索空间的深度融合。

### 2. 采样器系统（Samplers）

Optuna 内置了丰富的采样算法，涵盖单目标和多目标优化场景。核心采样器包括：TPE（基于核密度估计的贝叶斯优化）、CMA-ES（协方差矩阵自适应进化策略）、NSGA-II（多目标进化算法）和 Grid Search / Random Search 等。Optuna v4.6+ 还引入了针对多目标和约束优化的采样器自动选择规则。采样器接口设计为可插拔式，用户可通过 OptunaHub 社区共享自定义采样器。

### 3. 剪枝系统（Pruners）

剪枝系统是 Optuna 高效优化的重要保障。它能在训练过程中提前终止不具前景的 Trial，显著减少计算资源浪费。内置剪枝策略包括 Hyperband、SuccessiveHalving、Median Pruner 和 Threshold Pruner 等。剪枝机制与采样器解耦，用户可自由组合采样和剪枝策略，实现"早停+智能搜索"的双重加速。

## 技术亮点

- **Define-by-Run 命令式 API**：突破传统声明式搜索空间的限制，支持条件参数和动态搜索空间构建，让超参数优化逻辑更加灵活。
- **多目标优化原生支持**：内置 NSGA-II、NSGA-III 和 MOTPE 等多目标优化算法，支持帕累托前沿可视化和超体积指标计算，可直接优化多个冲突目标。
- **分布式优化能力**：支持基于数据库后端（MySQL、PostgreSQL、Redis）的分布式超参数搜索，多个进程或节点可并行执行 Trial 并共享优化状态。
- **OptunaHub 生态与实时 Dashboard**：通过 OptunaHub 社区共享采样器和剪枝器，配合 optuna-dashboard 实现实时监控与可视化分析。

## 与 Self-Evolve 关联

Optuna 在 Self-Evolve 研究中具有重要的基础性意义。超参数优化本质上是一种在连续/离散空间中的自动搜索与进化过程。Optuna 的 TPE 和 CMA-ES 等采样算法可以视为"进化策略"的工程化实现——通过不断评估候选解、利用反馈信号指导下一代采样，逐步逼近全局最优。这种"搜索-评估-反馈-迭代"的循环与 Self-Evolve 的核心范式高度一致。

此外，Optuna 的 define-by-run 设计提供了一种优雅的"动态进化空间"定义方式，这对 Self-Evolve 系统中动态调整进化目标空间具有参考价值。Optuna 的剪枝机制则对应了进化计算中的"弱者淘汰"策略，可迁移到 Self-Evolve 框架中的个体选择与淘汰机制设计。多目标优化能力也为 Self-Evolve 系统同时优化多个进化目标（如性能、效率、鲁棒性）提供了成熟的算法基础。

## 参考资料

- [Optuna GitHub 仓库](https://github.com/optuna/optuna)
- [Optuna 官方网站](https://optuna.org/)
- [Optuna 官方文档 v4.8.0](https://optna.readthedocs.io/)
- [Optuna 论文：A Next-generation Hyperparameter Optimization Framework](https://arxiv.org/abs/1907.10902)
- [OptunaHub — 采样器社区](https://github.com/optuna/optunahub)
- [Optuna Dashboard](https://github.com/optuna/optuna-dashboard)
- [Announcing Optuna 4.6](https://medium.com/optuna/announcing-optuna-4-6-a9e82183ab07)
