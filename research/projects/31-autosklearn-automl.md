# auto-sklearn: 自动化机器学习工具包

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/automl/auto-sklearn |
| Star | 约 7500+ |
| 技术栈 | Python, scikit-learn, SMAC, ConfigSpace, pandas, numpy |
| 许可证 | Apache-2.0 |
| 开发者 | autoML.org (Freiburg 大学) - Feurer, Klein, Hutter 等 |

## 项目简介

auto-sklearn 是一个自动化机器学习 (AutoML) 工具包，可以作为 scikit-learn 估计器的直接替代品使用。它基于贝叶斯超参数优化 (通过 SMAC)、元学习和集成构建三大核心技术，自动完成特征预处理、算法选择和超参数调优的完整机器学习流水线构建。auto-sklearn 发表于 NeurIPS 2015 (v1) 和 arXiv 2020 (v2.0)，是 AutoML 领域最具影响力的开源项目之一。

## 目录结构

```
automl__auto_sklearn/
├── autosklearn/              ★ 核心包
│   ├── automl.py             ★ AutoML 主引擎
│   ├── smbo.py               ★ 贝叶斯优化核心 (SMAC 集成)
│   ├── classification.py     ★ 分类器接口
│   ├── regression.py         ★ 回归器接口
│   ├── estimators.py         ★ 估计器定义
│   ├── pipeline/             ★ 机器学习流水线
│   │   ├── components/       ★ 流水线组件 (预处理、特征工程等)
│   │   ├── classification.py ★ 分类流水线
│   │   └── regression.py     ★ 回归流水线
│   ├── evaluation/           ★ 评估模块
│   │   ├── abstract_evaluator.py  ★ 评估器抽象基类
│   │   ├── train_evaluator.py     ★ 训练评估器
│   │   └── test_evaluator.py      ★ 测试评估器
│   ├── ensemble_building/    ★ 集成构建
│   ├── ensembles/            ★ 集成方法实现
│   ├── metalearning/         ★ 元学习模块
│   │   ├── metafeatures/     ★ 元特征计算
│   │   ├── metalearning/     ★ 元学习知识库
│   │   └── mismbo.py         ★ 元学习驱动的 SMAC 初始化
│   ├── metrics/              ★ 评估指标
│   └── util/                 ★ 工具函数
├── doc/                      ★ 文档
├── examples/                 ★ 示例代码
└── test/                     ★ 测试
```

## 核心模块分析

### 1. AutoML 主引擎 (automl.py)

`AutoSklearnClassifier` 和 `AutoSklearnRegressor` 是用户可见的顶层接口，内部由 `automl.py` 驱动整个自动化流程。核心工作流程：

1. **数据输入与验证**：接收训练数据，自动推断任务类型 (分类/回归/多标签等)
2. **元特征计算**：计算数据集的元特征 (样本数、特征数、类别分布等)
3. **元学习初始化**：利用元学习知识库找到相似数据集上的最优配置作为初始点
4. **贝叶斯优化搜索**：通过 SMAC 在配置空间中搜索最优流水线
5. **集成构建**：将搜索过程中的多个优秀模型组合为集成模型

```python
import autosklearn.classification
cls = autosklearn.classification.AutoSklearnClassifier()
cls.fit(X_train, y_train)
predictions = cls.predict(X_test)
```

### 2. 贝叶斯优化搜索 (smbo.py)

`smbo.py` 实现了基于 SMAC (Sequential Model-based Algorithm Configuration) 的超参数优化核心。关键组件：

- **配置空间**：使用 ConfigSpace 定义包含数据预处理、特征处理、模型选择和超参数的巨大搜索空间
- **代理模型**：使用随机森林作为代理模型预测配置性能
- **采集函数**：使用期望改进 (EI) 作为采集函数选择下一个配置
- **元学习引导**：通过 `mismbo.py` 利用元学习结果初始化 SMAC 搜索

### 3. 元学习系统 (metalearning/)

auto-sklearn 的独特之处在于其元学习系统：
- **元特征**：计算数据集的统计特征 (简单特征、统计特征、信息论特征、地标特征等)
- **知识库**：存储历史数据集上各配置的性能数据
- **warm-start**：通过相似数据集的热启动配置加速搜索过程

### 4. 集成构建 (ensemble_building/)

v2.0 引入了自动化集成构建：在搜索预算内收集多个优秀模型，通过加权组合形成最终预测器。

## 技术亮点

1. **scikit-learn 兼容接口**：四行代码即可完成完整的 AutoML 流程，可作为 scikit-learn Pipeline 的一部分。
2. **元学习 warm-start**：利用历史数据集的经验加速新数据集上的搜索，减少约 50% 的搜索时间。
3. **自动集成构建**：将搜索过程中的多个模型组合为集成，显著提升最终性能。
4. **丰富的配置空间**：支持 15+ 种分类器、18+ 种预处理器和多种特征工程方法的自由组合。
5. **v2.0 改进**：引入自动化元学习策略选择，减少对手动配置的依赖。

## 与 Self-Evolve 关联

| 维度 | auto-sklearn 贡献 |
|------|-----------------|
| 进化循环设计 | SMAC 的贝叶斯优化循环 (配置 -> 评估 -> 代理模型更新 -> 新配置) 可映射为 Self-Evolve 的代码进化循环 |
| 提示工程模式 | 元学习系统的 warm-start 策略可用于 Self-Evolve 的初始提示设计：根据历史任务选择最优初始提示 |
| 评估框架 | 集成评估器的设计 (多折交叉验证、时间预算控制) 为 Self-Evolve 的代码评估提供了成熟的评估架构参考 |
| 自进化启发 | auto-sklearn 展示了"从经验中学习"的范式：利用历史任务经验加速新任务的优化，与 Self-Evolve 的迭代自改进理念一致 |
| 搜索空间设计 | ConfigSpace 的层次化配置空间定义方法可用于 Self-Evolve 中代码生成参数的结构化管理 |

## 参考资料

- 论文 v1: [Efficient and Robust Automated Machine Learning](https://papers.neurips.cc/paper/5872-efficient-and-robust-automated-machine-learning.pdf) (NeurIPS 2015)
- 论文 v2: [Auto-Sklearn 2.0: Hands-free AutoML via Meta-Learning](https://arxiv.org/abs/2007.04074) (2020)
- 文档: https://automl.github.io/auto-sklearn/
