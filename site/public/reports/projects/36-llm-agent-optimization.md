# LLM-Agent-Optimization: 大语言模型智能体优化技术全景综述

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/YoungDubbyDu/LLM-Agent-Optimization |
| Star | 500+ |
| 技术栈 | Markdown, 学术文献管理 |
| 许可证 | 未明确 |
| 开发者 | Du Shangheng等 (华东理工大学) |

## 项目简介

LLM-Agent-Optimization是ACM Computing Surveys (CSUR)接收论文"A Survey on the Optimization of Large Language Model-based Agents"的配套阅读列表。该综述系统性探讨了优化LLM-based Agent的各种技术,将现有工作划分为参数驱动优化、无参数优化、数据集与基准测试以及实际应用四大类别。收录超过200篇论文(2022-2026年),涵盖NeurIPS、ICLR、ICML、ACL、EMNLP等所有顶级会议。

## 目录结构

```
youngdubbydu__llm_agent_optimization/
└── README.md                          ★ 完整论文列表与分类
    ├── Parameter-driven Optimization
    │   ├── Conventional Fine-Tuning-based    ★ 传统微调
    │   ├── Reinforcement Learning-based      ★ 强化学习
    │   └── Hybrid Fine-Tuning Optimization   ★ 混合优化
    ├── Parameter-Free Optimization
    │   ├── Experience-based                  ★ 经验优化
    │   ├── Feedback-based                    ★ 反馈优化
    │   ├── Tool-based                        ★ 工具优化
    │   ├── Retrieval-based                   ★ 检索优化
    │   └── Multi-Agent                       ★ 多智能体
    ├── Datasets and Benchmarks
    │   ├── General Evaluation Tasks          ★ 通用评估(39项)
    │   └── Multi-task Benchmarks             ★ 多任务基准(9项)
    └── Application
        ├── Healthcare                        ★ 医疗(12项)
        ├── Science                           ★ 科学(10项)
        ├── Embodied Intelligence             ★ 具身智能(12项)
        ├── Finance                           ★ 金融(11项)
        └── Programming                       ★ 编程(13项)
```

## 核心模块分析

### 1. 参数驱动优化

**传统微调方法**: 代表性工作包括FireAct(最早Agent微调)、AgentTuning(清华,通用Agent能力)、AgentGym(多样化环境进化Agent)、Agent-FLAN(有效Agent微调数据设计)、Star-Agents(NeurIPS 2024,自动数据优化)。

**强化学习方法**: 当前热点方向,包括WebRL(清华,自进化在线课程RL)、Agent Q(MCTS+RL高级推理)、AGILE(NeurIPS 2024,LLM Agent RL框架)、DAPO(2025,解耦裁剪策略优化)、AgentGym-RL(ICLR 2026,多轮RL训练长视野Agent)、DeepResearcher(2025,真实环境RL深度研究)。

**混合优化**: ReFT(ACL 2024,强化微调推理)等方法结合SFT和RL的优势。

### 2. 无参数优化

**基于经验**: ExpeL(AAAI 2024,经验学习Agent)、Agent Hospital(可进化医疗Agent)、AutoManual(NeurIPS 2024,交互式环境学习)。

**基于反馈**: Reflexion(NeurIPS 2023,开创性语言反馈自我反思)、Agent-Pro(ACL 2024,策略级反思进化)、OPRO(ICLR 2024,LLM作为优化器)。

**基于工具**: AUTOACT(ACL 2024,自动Agent学习)、ALITA(2025,最小预定义最大自进化)。

**多智能体**: ChatDev、MetaGPT、AutoGen、OPTIMA等多智能体协作框架。

### 3. 应用领域

覆盖医疗(Med-PaLM, Agent Hospital)、科学(CellAgent, ChemCrow)、具身智能(Voyager, AutoRT)、金融(FinRobot, FinCon)、编程(SWE-agent, AgentCoder)五大领域。

## 技术亮点

1. **最全面的分类体系**: 系统划分为参数驱动/无参数两大类,10+子类别
2. **理论与实践结合**: 每篇论文附有代码链接,便于复现
3. **前沿跟踪**: 持续更新至2026年,包括ICLR 2026和NeurIPS 2025接收论文
4. **多领域覆盖**: 应用场景横跨医疗、科学、具身智能、金融、编程
5. **基准测试汇总**: 整理30+评估基准和数据集

## 与 Self-Evolve 关联

| 维度 | LLM-Agent-Optimization 贡献 |
|------|---------------------------|
| 自我进化机制 | Reflexion、AgentGym等展示了Agent自我进化范式,与Self-Evolve理念高度契合 |
| 多智能体协作 | ChatDev、MetaGPT等为Self-Evolve的多组件协作进化提供参考架构 |
| 强化学习优化 | WebRL、AGILE等为Self-Evolve的策略优化提供技术路径 |
| 反馈驱动改进 | Reflexion的语言反馈自我反思与Self-Evolve的自我评估改进机制相通 |
| 工具进化 | ToolEVO(ICLR 2025)展示工具的自我进化能力,可启发Self-Evolve的工具设计 |
| 评估基准 | 提供Agent优化的完整评估框架参考,涵盖39+通用评估任务和9个多任务基准 |

## 参考资料

- Du et al., "A Survey on the Optimization of Large Language Model-based Agents," ACM Computing Surveys, 2026
- Reflexion: Shinn et al., NeurIPS 2023
- AgentGym: Zeng et al., 2024
- WebRL: Qi et al., 2024
- AGILE: Wang et al., NeurIPS 2024
