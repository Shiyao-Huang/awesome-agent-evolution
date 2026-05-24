# pycma: 协方差矩阵自适应进化策略 (CMA-ES) 的 Python 实现

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/CMA-ES/pycma |
| Star | 约 1000+ |
| 技术栈 | Python, NumPy, matplotlib |
| 许可证 | BSD-3-Clause |
| 开发者 | Nikolaus Hansen, Youhei Akimoto, Petr Baudis |

## 项目简介

pycma 是协方差矩阵自适应进化策略 (Covariance Matrix Adaptation Evolution Strategy, CMA-ES) 的官方 Python 参考实现。CMA-ES 是一种随机无导数数值优化算法，特别适用于困难的非凸、病态、多模态和噪声连续优化问题。pycma 提供了完整的 CMA-ES 算法实现，包括边界约束处理、线性和非线性约束处理、噪声处理以及混合整数优化支持。

## 目录结构

```
cma_es__pycma/
├── cma/                       ★ 核心包
│   ├── evolution_strategy.py  ★ CMA-ES 核心算法 (CMAEvolutionStrategy, fmin2)
│   ├── sigma_adaptation.py    ★ 步长自适应机制 (CSA, TPA)
│   ├── recombination_weights.py ★ 重组权重计算
│   ├── restricted_gaussian_sampler.py ★ 受限高斯采样器
│   ├── boundary_handler.py    ★ 边界约束处理
│   ├── constraints_handler.py ★ 不等式约束处理
│   ├── integer_centering.py   ★ 整数变量中心化
│   ├── transformations.py     ★ 变量变换 (含边界变换)
│   ├── fitness_functions.py   ★ 标准测试函数
│   ├── fitness_models.py      ★ 适应度模型 (代理模型)
│   ├── fitness_transformations.py ★ 适应度变换
│   ├── logger.py              ★ 日志记录
│   ├── optimization_tools.py  ★ 优化工具集
│   ├── options_parameters.py  ★ 选项与参数管理
│   ├── interfaces.py          ★ 外部接口
│   ├── wrapper.py             ★ 函数包装器
│   ├── experimentation.py     ★ 实验工具
│   ├── more_algorithms/       ★ 附加算法 (purecma, CompactGA)
│   ├── utilities/             ★ 内部工具集
│   ├── bbobbenchmarks.py      ★ BBOB 基准测试
│   ├── s.py                   ★ 简化接口
│   └── test.py                ★ 测试模块
├── notebooks/                 ★ Jupyter 示例笔记本
├── tools/                     ★ 开发工具
└── pyproject.toml
```

## 核心模块分析

### 1. CMA-ES 核心算法 (evolution_strategy.py)

`CMAEvolutionStrategy` 类是整个库的核心，实现了完整的 CMA-ES 算法。其工作原理分为三个主要步骤：

**采样 (ask)**：从当前搜索分布 (多元正态分布) 中生成候选解。搜索分布由均值向量 m、步长 sigma 和协方差矩阵 C 完全确定。

**评估与排序 (tell)**：对候选解按适应度排序，计算排序权重。使用最好的一部分解来更新分布参数。

**分布更新**：
- 均值更新：沿最优解方向移动分布中心
- 步长自适应 (CSA)：利用进化路径累积信息调整全局步长
- 协方差矩阵自适应：利用进化路径和排序信息更新搜索分布的形状

```python
import cma
# 简单用法
es = cma.CMAEvolutionStrategy(8 * [0], 0.5)
es.optimize(cma.ff.rosenbrock)
print(es.result.xbest)
```

### 2. 约束处理系统

pycma 提供了多层次的约束处理能力：
- **边界约束**：通过 `BoundDomainTransform` 或 `bounds` 选项处理变量上下界
- **线性与非线性约束**：通过 `constraints` 参数传递约束函数，使用拉格朗日乘子法处理
- `ConstrainedFitnessAL` 和 `fmin_con2` 提供了约束优化的高级接口

### 3. 步长自适应 (sigma_adaptation.py)

实现了两种步长自适应机制：
- **CSA (Cumulative Step-size Adaptation)**：基于进化路径的累积步长自适应，是 CMA-ES 的默认机制
- **TPA (Two-Point Step-size Adaptation)**：基于两点比较的步长自适应

### 4. 混合整数优化

通过 `integer_variables` 选项支持混合整数优化，结合整数中心化技术处理整数变量。

## 技术亮点

1. **ask-tell 接口**：CMA-ES 通过 `ask()` 生成候选解和 `tell()` 反馈结果的两阶段接口，支持异步和批量评估。
2. **完整的约束处理**：从边界约束到一般非线性约束的多层次处理体系，使用增广拉格朗日方法。
3. **代理模型辅助**：`fitness_models.py` 提供了基于代理模型的加速优化 (lq-CMA-ES)。
4. **IPOP 和 BIPOP 重启策略**：支持多种重启策略以处理多模态优化问题。
5. **丰富的可视化**：通过 matplotlib 提供搜索过程、收敛曲线和参数变化的可视化。

## 与 Self-Evolve 关联

| 维度 | pycma 贡献 |
|------|-----------|
| 进化循环设计 | ask-tell 接口是进化计算中最经典的设计模式之一，Self-Evolve 可直接采用此模式：LLM ask 生成代码，评估 tell 反馈结果 |
| 提示工程模式 | CMA-ES 的协方差矩阵自适应机制展示了如何从历史信息中学习搜索方向，可用于 Self-Evolve 的提示上下文构建 |
| 评估框架 | BBOB 基准测试和详细的日志系统提供了连续优化评估的标杆，其评估方法论可借鉴 |
| 自进化启发 | CMA-ES 的"从成功中学习"哲学 (利用优秀解更新搜索分布) 与 Self-Evolve 的"从成功代码中学习"策略本质一致 |
| 搜索空间适应 | 协方差矩阵自适应展示了如何动态调整搜索空间形状，启发 Self-Evolve 在代码空间中的自适应搜索 |

## 参考资料

- 论文: Hansen, N. "The CMA Evolution Strategy: A Tutorial" (arXiv:1604.00772)
- 文档: https://cma-es.github.io/apidocs-pycma
- 官网: https://cma-es.github.io
