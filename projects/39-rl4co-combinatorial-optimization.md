# RL4CO: 强化学习驱动的组合优化统一基准框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ai4co/rl4co |
| Star | 1k+ |
| 技术栈 | Python, PyTorch, TorchRL, PyTorch Lightning, Hydra |
| 许可证 | MIT |
| 开发者 | AI4CO团队 (多机构合作) |

## 项目简介

RL4CO是一个广泛的强化学习(RL)组合优化(CO)基准框架,旨在提供统一的RL-based CO算法框架,促进该领域的可复现研究。框架构建在TorchRL(官方PyTorch RL框架)、TensorDict、PyTorch Lightning和Hydra之上,提供了模块化、灵活且高效的实现。支持构造式(自回归/非自回归)和改进式两类求解策略,涵盖路由、图、EDA、调度等多种问题。

## 目录结构

```
ai4co__rl4co/
├── rl4co/                           ★ 核心Python包
│   ├── envs/                        ★ 环境模块
│   │   ├── common/                  ★ 通用环境组件
│   │   ├── routing/                 ★ 路由问题(TSP, CVRP等)
│   │   ├── graph/                   ★ 图问题
│   │   ├── eda/                     ★ 电子设计自动化
│   │   └── scheduling/              ★ 调度问题(JSSP等)
│   ├── models/                      ★ 模型模块
│   │   ├── common/                  ★ 通用网络组件
│   │   ├── nn/                      ★ 神经网络模块
│   │   ├── rl/                      ★ RL算法(PPO, REINFORCE等)
│   │   └── zoo/                     ★ 模型动物园(20+模型)
│   │       ├── am/                  ★ Attention Model
│   │       ├── pomo/                ★ POMO
│   │       ├── deepaco/             ★ DeepACO
│   │       ├── matnet/              ★ MatNet
│   │       ├── eas/                 ★ EAS
│   │       ├── active_search/       ★ Active Search
│   │       ├── ham/                 ★ HAM
│   │       ├── glop/                ★ GLOP
│   │       ├── l2d/                 ★ L2D
│   │       ├── neuopt/              ★ NeuOpt
│   │       └── ... (共20+模型)
│   ├── data/                        ★ 数据生成模块
│   ├── tasks/                       ★ 任务评估模块
│   └── utils/                       ★ 工具函数
├── configs/                         ★ Hydra配置
│   └── experiment/                  ★ 实验配置
├── examples/                        ★ 教学示例
├── run.py                           ★ 训练入口
└── tests/                           ★ 测试
```

## 核心模块分析

### 1. 环境系统 (envs/)

RL4CO提供模块化的环境设计,支持可插拔的环境嵌入(Environment Embeddings):

- **路由问题**: TSP(旅行商)、CVRP(带容量车辆路由)、SDVRP、PCTSP、OP(定向问题)等
- **图问题**: 最大独立集(MIS)、图着色等
- **调度问题**: 作业车间调度(JSSP)等
- **EDA问题**: 芯片布局等

环境抽象了状态、动作、奖励的统一接口,便于快速添加新问题。

### 2. 模型动物园 (models/zoo/)

收录20+种RL-based CO求解模型:

**构造式-自回归**: AM(Attention Model)、POMO、DeepACO、MatNet、MDAM、HAM、GFACS、MVMoE等
**构造式-非自回归**: NAR-GNN等
**改进式**: DACT、NeuOpt、L2D、EAS(高效主动搜索)、Active Search、PolyNet等

### 3. 最小化使用示例

```python
from rl4co.envs.routing import TSPEnv, TSPGenerator
from rl4co.models import AttentionModelPolicy, POMO
from rl4co.utils import RL4COTrainer

# 实例化生成器和环境
generator = TSPGenerator(num_loc=50, loc_distribution="uniform")
env = TSPEnv(generator)

# 创建策略和RL模型
policy = AttentionModelPolicy(env_name=env.name, num_encoder_layers=6)
model = POMO(env, policy, batch_size=64, optimizer_kwargs={"lr": 1e-4})

# 训练
trainer = RL4COTrainer(max_epochs=10, accelerator="gpu", precision="16-mixed")
trainer.fit(model)
```

### 4. 策略类型

- **构造式**: 从零开始逐步构建解(自回归/非自回归)
- **改进式**: 在已有解基础上进行改进优化
- 支持多种解码策略(贪心/采样/波束搜索)

## 技术亮点

1. **统一框架**: 将20+种RL-based CO模型统一在同一框架下,便于公平对比
2. **GPU向量化**: 基于TorchRL实现GPU上的向量化环境,大幅提升训练效率
3. **模块化设计**: 环境、模型、策略可独立替换,灵活组合
4. **Hydra配置**: 优雅的层次化配置管理,支持命令行参数覆盖和多运行扫描
5. **pip安装**: 通过`pip install rl4co`一键安装
6. **丰富文档**: 提供快速入门Notebook和创建新环境/模型的教程

## 与 Self-Evolve 关联

| 维度 | RL4CO 贡献 |
|------|-----------|
| 优化搜索框架 | 提供了完整的RL优化搜索框架,可作为Self-Evolve中优化模块的底层引擎 |
| 环境抽象 | 统一的环境接口设计为Self-Evolve定义新任务环境提供参考 |
| 评估基准 | 20+模型在多问题上的标准对比为Self-Evolve的优化效果评估提供基线 |
| 进化+RL结合 | 改进式策略(如DACT、NeuOpt)展示了迭代优化的RL实现,可启发Self-Evolve的进化循环 |
| 模块化架构 | 环境-模型-策略三层分离的架构设计为Self-Evolve的系统设计提供参考 |
| 自回归生成 | 逐步构建解的自回归策略与Self-Evolve的逐步改进思想有内在一致性 |

## 参考资料

- Berto et al., "RL4CO: an Extensive Reinforcement Learning for Combinatorial Optimization Benchmark," KDD 2025
- TorchRL: https://github.com/pytorch/rl
- PyTorch Lightning: https://lightning.ai
- Hydra: https://hydra.cc
