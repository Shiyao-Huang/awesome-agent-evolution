# DEAP: 分布式进化计算框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/DEAP/deap |
| Star | 约 6000+ |
| 技术栈 | Python, NumPy, multiprocessing, SCOOP |
| 许可证 | LGPLv3 |
| 开发者 | Universite Laval - Fortin, De Rainville, Gardner, Parizeau, Gagne |

## 项目简介

DEAP (Distributed Evolutionary Algorithms in Python) 是一个成熟的进化计算框架，发表于 JMLR 2012。它以"算法显式化、数据结构透明化"为设计理念，支持快速原型设计和测试进化计算想法。DEAP 支持遗传算法 (任意表示)、遗传编程 (前缀树)、进化策略 (含 CMA-ES)、多目标优化 (NSGA-II/III, SPEA2, MO-CMA-ES)、协同进化等多种范式，并与 multiprocessing 和 SCOOP 完美兼容实现并行化。

## 目录结构

```
deap__deap/
├── deap/                 ★ 核心包
│   ├── algorithms.py     ★ 标准进化算法实现 (eaSimple, eaMuPlusLambda等)
│   ├── base.py           ★ 基础类 (Toolbox, Fitness)
│   ├── creator.py        ★ 动态类型创建器
│   ├── gp.py             ★ 遗传编程支持
│   ├── cma.py            ★ CMA-ES 集成
│   └── tools/            ★ 算子工具箱
│       ├── crossover.py  ★ 交叉算子 (两点、均匀、有序等)
│       ├── mutation.py   ★ 变异算子 (翻转位、高斯、洗牌索引等)
│       ├── selection.py  ★ 选择算子 (锦标赛、轮盘赌、NSGA-II等)
│       ├── emo.py        ★ 多目标优化工具 (NSGA-II/III, SPEA2)
│       ├── indicator.py  ★ 性能指标 (超体积等)
│       ├── constraint.py ★ 约束处理
│       ├── migration.py  ★ 迁移机制 (岛屿模型)
│       ├── init.py       ★ 种群初始化
│       └── support.py    ★ 辅助工具 (Statistics, Logbook, HallOfFame)
├── doc/                  ★ 文档
├── examples/             ★ 示例代码
├── tests/                ★ 单元测试
└── setup.py
```

## 核心模块分析

### 1. Toolbox 工具箱模式 (base.py)

DEAP 的核心设计理念是通过 Toolbox 模式实现算法组件的灵活组合。Toolbox 是一个函数注册容器，用户通过 `register` 方法将选择、交叉、变异和评估算子绑定到统一的接口上：

```python
toolbox = base.Toolbox()
toolbox.register("attr_bool", random.randint, 0, 1)
toolbox.register("individual", tools.initRepeat, creator.Individual, toolbox.attr_bool, n=100)
toolbox.register("population", tools.initRepeat, list, toolbox.individual)
toolbox.register("evaluate", evalOneMax)
toolbox.register("mate", tools.cxTwoPoint)
toolbox.register("mutate", tools.mutFlipBit, indpb=0.05)
toolbox.register("select", tools.selTournament, tournsize=3)
```

这种设计使得算法的核心循环与具体算子实现完全解耦，便于快速实验和组合不同的进化策略。

### 2. 标准进化算法 (algorithms.py)

提供了多种标准进化算法实现，核心是 `varAnd` 变异函数和 `eaSimple` 主循环：

**进化循环流程**：
1. 评估初始种群中适应度无效的个体
2. 进入代际循环：选择 -> 交叉变异 (varAnd) -> 评估新个体 -> 更新统计
3. 返回最终种群和进化日志

```python
for gen in range(1, ngen + 1):
    offspring = toolbox.select(population, len(population))
    offspring = varAnd(offspring, toolbox, cxpb, mutpb)
    invalid_ind = [ind for ind in offspring if not ind.fitness.valid]
    fitnesses = toolbox.map(toolbox.evaluate, invalid_ind)
    for ind, fit in zip(invalid_ind, fitnesses):
        ind.fitness.values = fit
    population = offspring
```

### 3. 遗传编程 (gp.py)

支持松散类型和强类型的遗传编程，使用前缀树表示。支持自动定义函数 (ADF)、多种群和保真度机制。这是 DEAP 区别于其他进化计算框架的重要特性。

### 4. 多目标优化 (tools/emo.py)

实现了多种经典多目标进化算法：
- NSGA-II: 基于非支配排序和拥挤距离
- NSGA-III: 支持多目标 (多于 2 个目标) 的参考点引导方法
- SPEA2: 强帕累托进化算法

## 技术亮点

1. **极简进化循环**：`eaSimple` 仅约 30 行代码即实现了完整的简单遗传算法，展示了进化计算的优雅本质。
2. **Toolbox 解耦设计**：通过函数注册模式将算子定义与算法流程完全分离，用户可以自由组合不同组件。
3. **任意表示支持**：支持列表、数组、集合、字典、树、NumPy 数组等任意个体表示方式。
4. **并行化原生支持**：Toolbox 的 `map` 方法默认使用 Python 内置 `map`，可替换为 multiprocessing.Pool.map 或 SCOOP 实现并行评估。
5. **Hall of Fame 机制**：追踪整个进化过程中的最优个体，支持代际间精英保留。

## 与 Self-Evolve 关联

| 维度 | DEAP 贡献 |
|------|----------|
| 进化循环设计 | DEAP 的 select -> vary -> evaluate 循环是进化计算的经典范式，可直接映射为 Self-Evolve 的 LLM选择 -> LLM变异 -> 执行评估循环 |
| 提示工程模式 | Toolbox 注册模式为 Self-Evolve 的提示模板设计提供了参考，可以将不同类型的 LLM 操作注册为可替换算子 |
| 评估框架 | Hall of Fame、Statistics 和 Logbook 的设计模式可用于 Self-Evolve 的进化过程监控和最优解追踪 |
| 自进化启发 | GP 模块中的树结构操作和 ADF 机制为 LLM 代码生成的结构化变异提供了灵感 |
| 多目标支持 | NSGA-II/III 的非支配排序和拥挤距离机制可用于 Self-Evolve 中需要平衡多个指标的优化场景 |

## 参考资料

- 论文: [DEAP: Evolutionary Algorithms Made Easy](http://goo.gl/amJ3x) (JMLR, 2012)
- 文档: https://deap.readthedocs.org/
- 关联项目: TPOT (使用 DEAP 进行机器学习管道优化的遗传编程)
