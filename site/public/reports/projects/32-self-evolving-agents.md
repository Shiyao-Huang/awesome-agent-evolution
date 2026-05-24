# Self-Evolving Agents: 通向人工超级智能的自进化智能体综述

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/CharlesQ9/Self-Evolving-Agents |
| Star | 约 200+ |
| 技术栈 | Markdown, 论文索引, 文献综述 |
| 许可证 | 未明确标注 |
| 开发者 | Gao Huan-ang, Geng Jiayi 等 (多机构合作) |

## 项目简介

本项目是一篇关于自进化智能体 (Self-Evolving Agents) 的综合综述论文的配套资源库。论文标题为"A Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence"，系统性地回顾了 LLM 智能体如何通过各种机制实现自我改进和进化。项目从"进化什么 (What)"、"何时进化 (When)"、"如何进化 (How)"、"在哪里进化 (Where)" 四个维度构建了完整的分析框架，涵盖了从模型参数到系统架构的多层次进化策略。

## 目录结构

```
charlesq9__self_evolving_agents/
├── README.md          ★ 综述完整内容，包含详细论文列表和分类
├── LICENSE            ★ 许可证文件
└── figures/           ★ 论文配图
    ├── evolution.png  ★ 进化图标
    ├── develop.jpg    ★ 发展路线图
    └── main.png       ★ 主要框架图
```

## 核心模块分析

### 1. 进化对象 (What to Evolve?)

综述将智能体可进化的对象分为四个层次：

- **模型 (3.1 Models)**：包括智能体底层 LLM 的参数更新和能力增强。代表性方法：Reflexion (语言强化学习)、Self-Refine (自反馈迭代优化)、AgentGen (环境与任务生成)。
- **上下文 (3.2 Context)**：进一步分为记忆进化 (3.2.1 Memory) 和提示优化 (3.2.2 Prompt)。记忆进化包括 Mem0、MemInsight 等长期记忆系统；提示优化涵盖 APE、OPRO、DSPy 等方法。
- **工具 (3.3 Tools)**：智能体对工具的创建、选择和使用能力的进化。包括 Voyager (开放世界探索)、ToolLLM (API 掌握)、ATLASS (闭环工具学习) 等。
- **架构 (3.4 Architecture)**：智能体系统结构的自动优化。包括单智能体优化 (Godel Agent、AlphaEvolve) 和多智能体系统优化 (EvoFlow、AFlow、ScoreFlow)。

### 2. 进化时机 (When to Evolve?)

- **测试时内部自进化 (4.1 Intra-test-Time)**：在单次任务执行过程中实时自我改进，如 Reflexion 的反思、Self-Adapting Language Models 的参数适配、LADDER 的递归问题分解。
- **测试间自进化 (4.2 Inter-test-Time)**：跨任务的经验积累和持续学习，如 STaR 的推理引导推理、WebRL 的自进化在线课程强化学习、RAGEN 的多轮 RL 理解。

### 3. 进化方法 (How to Evolve?)

- **奖励驱动的自进化 (5.1)**：基于外部或自生成奖励信号进行改进，包括 Self-Refine、RL 自纠正、SPIRAL 对抗博弈等。
- **模仿与示范学习 (5.2)**：从自身或其他智能体的成功示范中学习，如 STaR、V-STaR、SiriuS 多智能体引导推理。
- **种群与进化方法 (5.3)**：基于种群的进化策略，如 Darwin Godel Machine (开放式进化)、GENOME (种群进化 LLM)、Self-Play Fine-Tuning 等。

### 4. 评估体系 (Section 7)

综述整理了丰富的评估基准，分为：
- **静态评估**：SWE-bench、AgentBench、GAIA 等
- **短期自适应评估**：WebArena、OSWorld、Mobile-Agent-E 等
- **长期终身学习评估**：LifelongAgentBench 等

## 技术亮点

1. **四维分析框架**：What/When/How/Where 的四维分类法为理解智能体自进化提供了系统化的分析工具，涵盖了从微观 (参数) 到宏观 (系统架构) 的完整进化谱系。
2. **进化时机的区分**：明确区分了测试时 (intra-test-time) 和测试间 (inter-test-time) 两种进化模式，揭示了短期适应与长期积累的不同机制。
3. **种群进化视角**：将 Darwin Godel Machine、GENOME 等基于种群的进化方法纳入智能体自进化框架，建立了进化计算与智能体系统的联系。
4. **多智能体协同进化**：涵盖了 Self-Evolving Multi-Agent Collaboration Networks、Multi-Agent Collaboration via Evolving Orchestration 等最新多智能体进化工作。
5. **领域特化进化**：区分了通用域进化 (Web、移动端) 和专用域进化 (医疗、金融、科学研究) 的不同挑战。

## 与 Self-Evolve 关联

| 维度 | Self-Evolving Agents 贡献 |
|------|-------------------------|
| 进化循环设计 | What/When/How/Where 框架为 Self-Evolve 的进化循环设计提供了系统化的分析维度，帮助确定哪些方面需要进化、何时触发进化 |
| 提示工程模式 | 3.2.2 节的提示优化方法 (APE, OPRO, DSPy) 可直接应用于 Self-Evolve 的提示模板进化 |
| 评估框架 | Section 7 整理的评估基准 (SWE-bench, AgentBench 等) 为 Self-Evolve 的代码生成评估提供了标准参考 |
| 自进化启发 | Darwin Godel Machine 的开放式进化范式和 Godel Agent 的自参照改进框架为 Self-Evolve 的自进化架构设计提供了直接参考 |
| 架构进化 | 3.4 节的智能体架构优化 (EvoFlow, AFlow, ScoreFlow) 展示了系统级自进化的可能性 |

## 参考资料

- 论文: [A Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence](https://arxiv.org/abs/2507.21046) (2025)
- 关联项目: [EvoAgentX](https://github.com/EvoAgentX/EvoAgentX)
- 关联工作: [Darwin Godel Machine](https://arxiv.org/abs/2505.22954)
- 关联工作: [AlphaEvolve](https://arxiv.org/abs/2506.13131)
- 关联工作: [Godel Agent](https://arxiv.org/abs/2410.04444)
- 关联工作: [AFlow](https://arxiv.org/abs/2410.10762)
- 关联工作: [ScoreFlow](https://arxiv.org/abs/2502.04306)
- 关联工作: [Voyager](https://arxiv.org/abs/2305.16291)
- 关联工作: [WebRL](https://arxiv.org/abs/2411.02337)
- 关联工作: [Reflexion](https://arxiv.org/abs/2303.11366)
- 关联工作: [OpenEvolve](https://github.com/codelion/openevolve)
