# pyribs: 面向质量多样性优化的精简 Python 库

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/icaros-usc/pyribs |
| Star | 500+ |
| 技术栈 | Python 3.10+, NumPy, Matplotlib, PyTorch (可选), JAX (可选) |
| 许可证 | MIT |
| 开发者 | ICAROS Lab（南加州大学）Bryon Tjanaka, Matthew C. Fontaine 等 |
| 论文 | Pyribs: A Bare-Bones Python Library for Quality Diversity Optimization (GECCO 2023) |

## 项目简介

pyribs 是一个专注于**质量多样性（Quality Diversity, QD）优化**的精简 Python 库，实现了高度模块化的 RIBS（Rapid Illumination of Behavior Space）框架。QD 优化是优化领域的一个子领域，其目标是生成一组既高质量又多样化的解决方案集合，覆盖行为空间的每个区域同时最大化单一目标。pyribs 是 CMA-ME、CMA-MEGA、CMA-MAE、Scalable CMA-MAE 和 Discount Model Search (DMS) 等前沿 QD 算法的官方实现。

核心理念：**照亮行为空间** -- 不仅寻找单一最优解，而是在整个行为空间中找到每个区域的最佳代表，生成类似热力图的存档输出。

## 目录结构

```
pyribs/
├── ribs/                          # ★ 核心库
│   ├── __init__.py                # 版本与模块导出 (v0.11.0)
│   ├── archives/                  # ★ 存档模块
│   │   ├── grid_archive.py       # 网格存档（GridArchive）
│   │   ├── cvt_archive.py        # 质心 Voronoi 镶嵌存档
│   │   ├── sliding_boundaries.py # 滑动边界存档
│   │   └── proximity_archive.py  # 近邻存档
│   ├── emitters/                  # ★ 发射器模块
│   │   ├── evolution_strategy_emitter.py  # ★ 进化策略发射器
│   │   ├── gradient_emitter.py            # 梯度发射器
│   │   ├── gaussian_emitter.py            # 高斯发射器
│   │   ├── operators/                     # CMA-ES 操作器
│   │   └── opt/                           # 优化器（Adam, CMA-ES 等）
│   ├── schedulers/                # ★ 调度器模块
│   │   ├── scheduler.py          # 标准调度器
│   │   └── bandit_scheduler.py   # 多臂赌博机调度器
│   └── visualize/                 # 可视化工具
│       ├── grid_archive_heatmap.py
│       ├── cvt_archive_heatmap.py
│       └── ...
├── tests/                         # 全面测试套件
├── docs/                          # 文档与教程
└── setup.py                       # 安装配置
```

## 核心模块分析

### 1. RIBS 框架的三组件架构

pyribs 将 QD 算法分解为三个可互换的组件：

- **存档（Archive）**：在行为空间中保存生成的解决方案，输出为热力图形式，每个单元格包含该区域最佳代表
- **发射器（Emitter）**：生成新候选解的算法，根据解决方案被评估和插入存档的方式进行内部状态更新
- **调度器（Scheduler）**：控制存档和发射器之间的交互，提供 ask-tell 接口

通过替换这三个组件的不同实现，用户可以组合出大量不同的 QD 算法变体。

### 2. Ask-Tell 接口

pyribs 采用与 pycma 一致的 ask-tell 交互模式，使用户能完全控制评估过程：

```python
import numpy as np
from ribs.archives import GridArchive
from ribs.emitters import EvolutionStrategyEmitter
from ribs.schedulers import Scheduler

# 1. 创建组件
archive = GridArchive(solution_dim=10, dims=[20, 20], ranges=[(-1, 1), (-1, 1)])
emitters = [
    EvolutionStrategyEmitter(archive, x0=[0.0] * 10, sigma0=0.1, batch_size=36)
    for _ in range(3)
]
scheduler = Scheduler(archive, emitters)

# 2. Ask-Tell 循环
for itr in range(1000):
    solutions = scheduler.ask()              # 请求新候选解
    objectives = -np.sum(np.square(solutions), axis=1)  # 用户评估目标
    measures = solutions[:, :2]              # 用户计算度量
    scheduler.tell(objectives, measures)     # 反馈给调度器
```

### 3. 存档类型

| 存档类型 | 描述 | 适用场景 |
|----------|------|----------|
| GridArchive | 预定义的网格划分行为空间 | 度量范围已知的场景 |
| CVTArchive | 基于质心 Voronoi 镶嵌的自适应划分 | 度量分布不均匀的场景 |
| SlidingBoundariesArchive | 边界随搜索进展自动调整 | 度量范围未知的场景 |
| ProximityArchive | 基于距离阈值的近邻存档 | 需要精确多样性控制的场景 |

### 4. 支持的 QD 算法

通过组合不同的存档、发射器和调度器，pyribs 可以实现多种 QD 算法：

- **CMA-ME** (GECCO 2020)：协方差矩阵自适应 MAP-Elites
- **CMA-MEGA** (NeurIPS 2021)：可微质量多样性
- **CMA-MAE** (2022)：协方差矩阵自适应 MAP-Annealing
- **Scalable CMA-MAE** (IEEE RAL 2023)：可扩展的高维控制器训练
- **DMS** (ICLR 2026)：高维度量空间中的折扣模型搜索

### 5. 可视化工具

内置多种可视化函数，支持热力图、并行坐标图等，直观展示行为空间的覆盖情况：

```python
from ribs.visualize import grid_archive_heatmap
import matplotlib.pyplot as plt
grid_archive_heatmap(archive)
plt.show()
```

## 技术亮点

1. **极致精简（Bare-Bones）设计**：专注于 QD 优化的核心组件，不捆绑环境、策略网络等，可与任意其他框架组合使用
2. **高度模块化**：三个核心组件（存档/发射器/调度器）可独立替换，通过组合实现数十种 QD 算法变体
3. **Ask-Tell 接口**：熟悉的 ask-tell 模式使用户能完全控制评估过程，便于集成到现有工作流中
4. **广泛用户基础**：被 Google DeepMind (Iris)、HUAWEI Noah's Ark Lab、NYU、Imperial College London 等顶级机构使用
5. **前沿算法官方实现**：作为多个顶会 QD 算法的官方实现，保证算法实现的正确性和可复现性
6. **丰富文档与教程**：提供从入门到进阶的完整教程体系，降低 QD 优化领域的学习门槛

## 与 Self-Evolve 关联

| 维度 | pyribs 贡献 |
|------|-----------|
| 质量多样性优化 | QD 优化的"既高质量又多样化"理念直接适用于 Self-Evolve 系统中 Agent/工作流的进化目标——不只要找到最优解，还要维持解空间的多样性 |
| 模块化进化架构 | 存档-发射器-调度器的三组件设计为 Self-Evolve 系统的进化引擎提供了可复用的模块化架构参考 |
| 行为空间搜索 | 通过度量函数定义行为空间的概念，启发了 Self-Evolve 系统中以行为特征为导向的 Agent 策略搜索 |
| Ask-Tell 评估接口 | ask-tell 模式将候选解生成与评估分离，与 LLM 代码进化的"生成-执行-评估"流程天然契合 |
| 多样性维护策略 | 网格存档、CVT 存档等多样性维护机制可直接应用于 Self-Evolve 系统中的种群多样性管理 |

## 参考资料

- [pyribs 论文 (GECCO 2023)](https://doi.org/10.1145/3583131.3590374)
- [pyribs 官网](https://pyribs.org)
- [pyribs 文档](https://docs.pyribs.org)
- [CMA-ME (GECCO 2020)](https://dl.acm.org/doi/10.1145/3377930.3390232)
- [Discount Model Search (ICLR 2026)](https://discount-models.github.io/)
- [QD 优化综述](https://arxiv.org/abs/2012.04322)
