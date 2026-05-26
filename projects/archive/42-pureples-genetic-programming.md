# PUREPLES: 纯Python实现的ES-HyperNEAT神经进化库

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ukuleleplayer/pureples |
| Star | 100+ |
| 技术栈 | Python, neat-python, numpy, graphviz, matplotlib, gym |
| 许可证 | 未明确 |
| 开发者 | ukuleleplayer (个人开发者) |

## 项目简介

PUREPLES(Pure Python Library for ES-HyperNEAT)是一个专注于神经进化(Neuroevolution)的Python库,基于neat-python实现,提供了HyperNEAT和ES-HyperNEAT的忠实实现。NEAT(神经拓扑增强进化)由Kenneth O. Stanley开发,用于进化任意神经网络;HyperNEAT利用几何规律进化大规模神经网络;ES-HyperNEAT进一步允许底物(Substrate)在进化过程中自适应演化。库设计注重可扩展性,便于在不同实验域之间切换。

## 目录结构

```
pureples/
├── pureples/                        ★ 核心Python包
│   ├── __init__.py
│   ├── hyperneat/                   ★ HyperNEAT实现
│   │   └── hyperneat.py             ★ CPPN->ANN映射
│   ├── es_hyperneat/                ★ ES-HyperNEAT实现
│   │   └── es_hyperneat.py          ★ 可进化底物的HyperNEAT
│   ├── shared/                      ★ 共享工具
│   └── experiments/                 ★ 示例实验
├── setup.py                         ★ 安装脚本
├── PUREPLES.png                     ★ 项目Logo
└── README.md                        ★ 项目说明
```

## 核心模块分析

### 1. HyperNEAT模块 (hyperneat.py)

HyperNEAT的核心思想是利用组合模式产生网络(Compositional Pattern Producing Networks, CPPN)来编码大规模神经网络的连接权重:

**底物(Substrate)定义**: 用户通过坐标元组定义输入节点、输出节点和隐藏节点层。隐藏节点以层列表的形式组织,每层是坐标元组的列表。

**CPPN编码**: CPPN是一个四维函数f(x1,y1,x2,y2),接收源节点和目标节点的坐标,输出连接权重。通过neat-python进化CPPN的拓扑和权重。

**ANN构建**: `create_phenotype_network`方法将CPPN展开为实际的人工神经网络(ANN),根据底物定义的节点布局和CPPN计算的权重构建完整网络。

### 2. ES-HyperNEAT模块 (es_hyperneat.py)

ES-HyperNEAT在HyperNEAT基础上增加了底物自适应进化能力:

**核心创新**: 不需要用户预先定义隐藏节点布局,而是通过CPPN的表达能力自动发现适合任务的网络拓扑。

**参数配置**: 除标准NEAT参数外,还需声明ES-HyperNEAT特定参数(如探索阈值、迭代次数等)。

**ANN构建**: 使用`create_phenotype_network`方法的ES-HyperNEAT版本,自动确定隐藏节点的数量和位置。

### 3. 实验框架

**实验设置流程**:
1. 定义底物(输入/输出节点坐标,可选隐藏层)
2. 创建NEAT配置文件(CPPN参数)
3. 定义适应度函数(构建CPPN和ANN,评估性能)
4. 创建种群并运行进化

**Gym集成**: `shared/gym_runner`模块简化了OpenAI Gym环境下的实验,只需提供代数、环境、配置文件和底物定义即可自动运行。

### 4. 进化算法流程

```
1. 初始化CPPN种群(基于neat-python)
2. 对每个CPPN个体:
   a. 根据底物定义展开为ANN
   b. 在任务环境中评估ANN性能
   c. 设置适应度
3. 选择、交叉、变异CPPN
4. 重复直到满足终止条件
5. 返回最优CPPN及其对应的ANN
```

## 技术亮点

1. **纯Python实现**: 无需编译C扩展,安装简单,代码可读性强
2. **忠实于原始论文**: HyperNEAT和ES-HyperNEAT的实现严格遵循原始论文描述
3. **底物自适应进化**: ES-HyperNEAT免除了用户手动设计隐藏层的工作,自动发现最优拓扑
4. **neat-python生态**: 基于成熟的neat-python库,继承其NEAT实现的稳定性
5. **Gym集成**: 与OpenAI Gym无缝集成,便于在标准RL环境中测试
6. **模块化实验**: 实验域可轻松切换,适应不同的研究需求

## 与 Self-Evolve 关联

| 维度 | PUREPLES 贡献 |
|------|-------------|
| 神经进化 | 提供了经典的神经拓扑进化实现,展示了结构自适应进化的能力 |
| 进化循环 | 完整的NEAT进化流程(初始化->评估->选择->变异->替换)可作为Self-Evolve进化循环的参考 |
| 结构自适应 | ES-HyperNEAT的底物自动进化机制可启发Self-Evolve中模块/组件的自适应设计 |
| CPPN编码 | 通过CPPN间接编码神经网络的方法,展示了紧凑编码+展开生成的设计模式 |
| 评估框架 | 基于适应度函数的评估+Gym环境集成,为Self-Evolve的评估模块提供参考 |
| 间接编码 | CPPN的间接编码思想可迁移到Self-Evolve中的策略/代码压缩表示 |

## 参考资料

- Stanley, K.O., "Compositional Pattern Producing Networks," GECCO 2007
- Risi, S. & Stanley, K.O., "Enhancing ES-HyperNEAT to Evolve More Complex Regular Neural Networks," GECCO 2015
- neat-python: https://github.com/CodeReclaimers/neat-python
- OpenAI Gym: https://gym.openai.com/
