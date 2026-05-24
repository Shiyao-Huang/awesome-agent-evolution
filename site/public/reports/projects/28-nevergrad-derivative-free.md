# Nevergrad: 无梯度优化平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/facebookresearch/nevergrad |
| Star | 约 4000+ |
| 技术栈 | Python, NumPy, scipy |
| 许可证 | MIT |
| 开发者 | Meta (Facebook) Research - J. Rapin, O. Teytaud 等 |

## 项目简介

Nevergrad 是由 Meta Research 开发的 Python 无梯度优化平台，提供了大量不依赖梯度信息的优化算法集合。项目支持连续变量、离散变量、混合变量以及有约束优化问题的求解。其核心优势在于实现了 100+ 种优化器的统一接口，包括差分进化、协方差矩阵自适应、粒子群、贝叶斯优化等方法，并通过自动算法选择器 NGOpt 实现了开箱即用的高性能优化。

## 目录结构

```
facebookresearch__nevergrad/
├── nevergrad/              ★ 核心包
│   ├── optimization/       ★ 优化器实现 (最核心模块)
│   │   ├── optimizerlib.py ★ 优化器注册与工厂
│   │   ├── base.py         ★ 优化器基类与注册表
│   │   ├── differentialevolution.py ★ 差分进化实现
│   │   ├── es.py           ★ 进化策略实现
│   │   ├── oneshot.py      ★ 单次采样优化器
│   │   ├── mutations.py    ★ 变异算子
│   │   ├── metamodel.py    ★ 元模型辅助优化
│   │   ├── multiobjective/ ★ 多目标优化
│   │   ├── sequences.py    ★ 低差异序列
│   │   ├── recastlib.py    ★ 外部算法封装
│   │   ├── callbacks.py    ★ 回调机制
│   │   └── families.py     ★ 优化器族定义
│   ├── parametrization/    ★ 参数化空间定义
│   │   ├── parameter.py    ★ 核心参数类型 (Scalar, Choice, Array等)
│   │   ├── transforms.py   ★ 变换函数
│   │   └── discretization.py ★ 离散化处理
│   ├── functions/          ★ 测试函数集
│   ├── benchmark/          ★ 基准测试框架
│   ├── common/             ★ 公共工具
│   └── ops/                ★ 底层操作
├── docs/                   ★ 文档
├── examples/               ★ 示例代码
└── setup.py
```

## 核心模块分析

### 1. 优化引擎 (nevergrad/optimization/)

这是 Nevergrad 最核心的模块，实现了所有优化算法。

**优化器基类设计**：所有优化器继承自 `base.Optimizer`，统一了 `ask()` (生成候选解) 和 `tell()` (反馈适应度) 接口。这种 ask-tell 模式使得优化器可以与异步评估框架无缝集成：

```python
optimizer = ng.optimizers.NGOpt(parametrization=2, budget=100)
for _ in range(100):
    x = optimizer.ask()
    loss = objective_function(x.value)
    optimizer.tell(x, loss)
recommendation = optimizer.provide_recommendation()
```

**NGOpt 自动选择器**：这是 Nevergrad 的标志性特性。NGOpt 根据参数空间维度、预算和问题特征，自动选择最适合的优化算法，在大多数基准测试中表现优异。

**多目标优化**：`multiobjective/` 子模块实现了 NSGA-II 等多目标优化算法，支持 Pareto 前沿搜索和超体积指标计算。

### 2. 参数化系统 (nevergrad/parametrization/)

该模块定义了灵活的参数空间描述方式：

- `ng.p.Scalar`：连续/离散标量变量，支持对数尺度、整数转换
- `ng.p.Choice`：离散选择变量
- `ng.p.Array`：数组变量
- `ng.p.Instrumentation`：函数参数化，支持位置参数和关键字参数的联合优化

```python
parametrization = ng.p.Instrumentation(
    learning_rate=ng.p.Log(lower=0.001, upper=1.0),
    batch_size=ng.p.Scalar(lower=1, upper=12).set_integer_casting(),
    architecture=ng.p.Choice(["conv", "fc"])
)
```

### 3. 变异算子 (mutations.py)

实现了多种变异策略，包括高斯变异、柯西变异、差分变异等。这些算子是构建进化算法的核心组件，也被用于基于种群的优化器中。

## 技术亮点

1. **统一 ask-tell 接口**：所有优化器共享 `ask()`/`tell()` 接口，支持同步和异步评估，使得不同算法可以轻松比较和替换。
2. **NGOpt 元优化器**：通过分析问题特征自动选择最佳算法，在无先验知识的情况下提供接近最优的优化性能。
3. **丰富的参数化支持**：从简单标量到混合类型参数空间的统一描述，支持约束、转换和离散化。
4. **100+ 优化器集合**：涵盖差分进化 (DE)、CMA-ES、PSO、贝叶斯优化、随机搜索等多种范式，形成完整的无梯度优化工具箱。
5. **回调与实验管理**：支持自定义回调函数、实验记录和结果分析，便于研究使用。

## 与 Self-Evolve 关联

| 维度 | Nevergrad 贡献 |
|------|---------------|
| 进化循环设计 | ask-tell 接口模式可作为 Self-Evolve 进化循环的参考架构：LLM 生成代码 (ask) -> 执行评估 (tell) -> 迭代改进 |
| 提示工程模式 | 参数化系统 (特别是 Instrumentation) 的设计思路可用于 Self-Evolve 中优化目标的定义与约束表达 |
| 评估框架 | 基准测试框架和 benchmark 模块提供了优化器性能评估的标准方法，可借鉴用于代码优化评估 |
| 自进化启发 | NGOpt 的自动算法选择机制展示了元学习在优化中的应用，为 Self-Evolve 的自适应策略选择提供思路 |
| 搜索空间设计 | 灵活的参数化系统展示了如何处理混合搜索空间 (连续+离散+有序)，对 Self-Evolve 的配置搜索有参考价值 |

## 参考资料

- 文档: https://facebookresearch.github.io/nevergrad/
- 论文: Nevergrad - A gradient-free optimization platform (GitHub, 2018)
- 关联工作: [CMA-ES/pycma](https://github.com/CMA-ES/pycma)
