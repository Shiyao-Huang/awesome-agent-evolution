# RL4CO: 强化学习求解组合优化的统一基准框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ai4co/rl4co |
| Star | 1.2k+ |
| 技术栈 | PyTorch, TorchRL, PyTorch Lightning, Hydra, TensorDict |
| 许可证 | MIT |
| 安装 | `pip install rl4co` |

## 项目简介

RL4CO (Reinforcement Learning for Combinatorial Optimization) 是由 AI4CO 团队开发的一个全面的强化学习组合优化基准框架。该项目发表于 KDD 2025 (此前版本为 NeurIPS 2023 GLFrontiers Workshop 口头报告),旨在为基于 RL 的组合优化算法研究提供统一、可复现的研究平台,将科学探索与工程实现解耦。

RL4CO 建立在 PyTorch 生态系统之上,利用 TorchRL 作为 RL 算法基础、TensorDict 处理异构数据、PyTorch Lightning 管理训练流程、Hydra 进行配置管理。这种模块化设计使得研究者可以轻松组合不同的环境、策略和 RL 算法,快速验证新想法。

项目提供了丰富的模型库(zoo),包含 Attention Model (AM)、POMO、MatNet、SymNCO、DeepACO 等 20+ 种前沿模型,支持路由问题(TSP、CVRP 等)、调度问题、图问题等多种组合优化任务。同时,环境-嵌入的模块化设计使得解决新问题只需实现特定的嵌入层。

## 目录结构

```
rl4co/
├── README.md                    # 项目文档
├── LICENSE                      # MIT 许可证
├── CITATION.cff                 # 引用信息
├── pyproject.toml               # 项目配置
├── run.py                       # 训练入口脚本
├── rl4co/                       # 核心代码包
│   ├── __init__.py
│   ├── data/                    # 数据处理模块
│   ├── envs/                    # 环境定义
│   │   ├── routing/             # 路由问题 (TSP, CVRP, OP, ...)
│   │   ├── scheduling/          # 调度问题
│   │   ├── graph/               # 图问题
│   │   ├── eda/                 # 电子设计自动化
│   │   └── common/              # 公共环境组件
│   ├── models/                  # 模型实现
│   │   ├── common/              # 公共模型组件
│   │   │   ├── constructive/    # 构造式策略
│   │   │   │   ├── autoregressive/   # 自回归
│   │   │   │   └── nonautoregressive/ # 非自回归
│   │   │   └── transductive/         # 直推式
│   │   ├── rl/                  # RL 算法
│   │   │   ├── reinforce/       # REINFORCE 及基线
│   │   │   ├── ppo/             # PPO
│   │   │   ├── a2c/             # A2C
│   │   │   └── common/          # RL 基类
│   │   └── zoo/                 # 模型库 (20+ 模型)
│   │       ├── am/              # Attention Model
│   │       ├── pomo/            # POMO
│   │       ├── matnet/          # MatNet
│   │       ├── symnco/          # SymNCO
│   │       ├── deepaco/         # DeepACO
│   │       ├── eas/             # Efficient Active Search
│   │       ├── dact/            # DACT (改进型)
│   │       ├── neuopt/          # NeuOpt
│   │       └── ...              # 更多模型
│   ├── tasks/                   # 任务管理
│   └── utils/                   # 工具函数
├── configs/                     # Hydra 配置
│   └── experiment/              # 实验配置文件
├── examples/                    # 教程与示例
│   ├── 1-quickstart.ipynb
│   └── 3-creating-new-env-model.ipynb
├── tests/                       # 测试
└── docs/                        # 文档源码
```

## 核心模块分析

### 1. 极简训练流程

RL4CO 的设计理念是"30 行代码训练一个模型":

```python
from rl4co.envs.routing import TSPEnv, TSPGenerator
from rl4co.models import AttentionModelPolicy, POMO
from rl4co.utils import RL4COTrainer

# 实例化生成器和环境
generator = TSPGenerator(num_loc=50, loc_distribution="uniform")
env = TSPEnv(generator)

# 创建策略和 RL 模型
policy = AttentionModelPolicy(env_name=env.name, num_encoder_layers=6)
model = POMO(env, policy, batch_size=64, optimizer_kwargs={"lr": 1e-4})

# 训练
trainer = RL4COTrainer(max_epochs=10, accelerator="gpu", precision="16-mixed")
trainer.fit(model)
```

### 2. 三大策略范式

RL4CO 支持三种求解策略:

**构造式(Constructive)**: 从零开始逐步构建解
- 自回归(AR): 通过解码器逐步生成解
- 非自回归(NAR): 学习预测启发式(如热力图)来构建解

**改进式(Improvement)**: 在已有解的基础上进行改进

### 3. 环境-嵌入解耦

环境与嵌入层的模块化设计是 RL4CO 的核心创新之一:

```python
# 环境定义了问题的状态转移和奖励
# 嵌入层将环境状态编码为神经网络输入
# 两者可以独立开发和替换

class NewEnv(BaseEnv):
    def __init__(self, generator):
        super().__init__(generator)
        # 定义状态空间、动作空间、转移函数

class NewEmbedding(nn.Module):
    def forward(self, td):
        # 将 TensorDict 状态编码为嵌入向量
        return embeddings
```

### 4. 丰富的模型库

```python
# rl4co/models/__init__.py 导出的模型
from rl4co.models import (
    AttentionModel,        # 经典注意力模型
    POMO,                  # 多起点策略优化
    MatNet,                # 矩阵网络
    SymNCO,                # 对称神经组合优化
    DeepACO,               # 深度蚁群优化
    ActiveSearch,          # 高效主动搜索
    DACT,                  # 改进型注意力模型
    NeuOpt,                # 神经优化器
    GFACS,                 # 广义因子注意力
    PointerNetwork,        # 指针网络
    MVMoE_AM,              # 混合专家路由模型
    # ... 更多模型
)
```

### 5. RL 算法支持

```python
# 支持多种 RL 训练算法
from rl4co.models.rl import (
    REINFORCE,    # 带多种基线的 REINFORCE
    PPO,          # 近端策略优化
    A2C,          # 优势 Actor-Critic
    StepwisePPO,  # 逐步 PPO
)
```

## 技术亮点

1. **PyTorch 生态深度融合**: 基于 TorchRL、Lightning、Hydra 构建的现代化研究框架,充分利用 GPU 向量化加速
2. **20+ 前沿模型**: 涵盖 AM、POMO、MatNet、SymNCO、DeepACO 等主流方法,统一接口便于对比
3. **环境-嵌入解耦**: 模块化设计使解决新问题只需实现嵌入层,极大降低开发成本
4. **一键安装**: `pip install rl4co` 即可使用,无需复杂的环境配置
5. **完善的文档和教程**: 提供 Colab 笔记本和详细文档,快速上手
6. **活跃社区**: 有 Slack 讨论频道和定期更新的 FAQ

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 自动化优化求解 | RL4CO 展示了如何通过 RL 自动学习优化策略,为 Self-Evolve 的自动算法设计提供方法论参考 |
| 模块化架构设计 | 环境-策略-算法的三层解耦设计为 Self-Evolve 的系统架构提供模块化思路 |
| 神经-启发式融合 | DeepACO 等模型将神经网络与传统启发式算法融合,与 Self-Evolve 的 LLM+进化计算融合理念相通 |

## 参考资料

- 论文: Berto et al., "RL4CO: an Extensive Reinforcement Learning for Combinatorial Optimization Benchmark," KDD 2025
- 文档: https://rl4co.ai4co.org
- AI4CO 社区: https://github.com/ai4co
