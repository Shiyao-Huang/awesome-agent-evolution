# Awesome-Self-Evolving-Agents: 自进化 Agent 系统性综述与资源库

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents |
| Star | 200+ |
| 技术栈 | Markdown, 学术论文索引, 分类体系 |
| 许可证 | 未明确指定 (Awesome List) |
| 开发者 | 厦门大学 XMUDeepLIT 实验室 (Xiang Zhishang, Yang Chengyi 等) |

## 项目简介

Awesome-Self-Evolving-Agents 是厦门大学 DeepLIT 实验室发布的自进化 Agent 综合资源库，配套其系统性综述论文《A Systematic Survey of Self-Evolving Agents: From Model-Centric to Environment-Driven Co-Evolution》。该项目构建了一个三层分类体系，涵盖了从模型中心自进化、环境中心自进化到模型-环境协同进化的完整研究图谱，是当前该领域最全面的学术资源整合之一。

该资源库的价值在于其系统性分类框架。它将"Agent 自进化"划分为三大维度：模型中心自进化（Model-Centric）关注模型自身能力的提升，包括基于推理的进化（并行采样、顺序自纠错、结构化推理）和基于训练的进化（合成驱动离线自进化、探索驱动在线自进化）；环境中心自进化（Environment-Centric）关注 Agent 与外部知识和经验的交互增强，包括静态知识进化、动态经验进化、模块化架构进化和 Agent 拓扑进化；模型-环境协同进化（Co-Evolution）则关注模型与环境的同时进化，包括多 Agent 策略协同进化和环境训练。

作为一个持续更新的 Awesome List，该项目不仅收录了 200+ 篇学术论文，还整合了相关基准测试（如 SWE-bench、WebArena、AgentGym）、开源库（如 LangGraph、AutoGen、OpenRLHF）和实际应用（如 AI Scientist、Voyager、SWE-agent）。这些资源为 Self-Evolve 项目提供了完整的研究图谱和实现参考。

## 目录结构
```
awesome_self_evolving_agents/
├── README.md                ★ 主文档：完整分类体系与论文列表
├── figs/
│   ├── intro.png            ★ 三层分类体系总览图
│   ├── trend.png            ★ 自进化 Agent 发展趋势时间线
│   ├── model-centric.png    ★ 模型中心自进化结构图
│   ├── exp-driven.png       ★ 环境中心自进化结构图
│   └── co-evolving.png      ★ 模型-环境协同进化结构图
└── (无代码，纯文献资源库)
```

## 核心模块分析

### 1. 模型中心自进化 (Model-Centric Self-Evolution)
这是最基础的进化层次，聚焦于提升 LLM 模型本身的能力。基于推理的进化包括三种策略：并行采样（Self-Consistency、Repeated Sampling）通过多次采样投票提升输出质量；顺序自纠错（Self-Refine、Reflexion、Self-Debug）通过迭代修正实现输出优化；结构化推理（Tree of Thoughts、LATS、AlphaZero-like Tree Search）通过搜索树和图结构增强规划能力。基于训练的进化则分为合成驱动离线自进化（Self-Instruct、STaR、Self-Play Fine-Tuning）和探索驱动在线自进化（Absolute Zero、R-Zero、SPIRAL、WebRL），后者是当前研究的热点方向。

### 2. 环境中心自进化 (Environment-Centric Self-Evolution)
环境中心进化关注 Agent 如何通过改进与外部世界交互的方式来提升能力。静态知识进化覆盖了 Agentic RAG（Self-RAG、Search-R1、DeepResearcher）和推理驱动深度研究（DeepResearch Bench、WebThinker）。动态经验进化是当前最活跃的方向，包括离线经验编译、在线经验适应、终身经验进化（AgentEvolver、ReasoningBank）和技能增强进化（AutoSkill、SkillRL）。模块化架构进化关注交互协议、记忆架构和工具增强的进化。Agent 拓扑进化则研究如何自动搜索和动态调整多 Agent 系统的拓扑结构（ADAS、AFLOW、G-Designer）。

### 3. 模型-环境协同进化 (Model-Environment Co-Evolution)
这是最高级的进化形态，强调模型和环境的同步进化。多 Agent 策略协同进化（Stronger-MAS、CoMAS、MAPORL）通过多 Agent 强化学习实现策略的共同优化。环境训练（Environment Training）包括自适应课程进化（GenEnv、RLVE）和可扩展环境进化（AgentGym、ScaleEnv、AutoForge），通过自动生成和调整训练环境来推动 Agent 能力的持续提升。

### 4. 基准测试与应用生态
项目收录了涵盖通用知识（MMLU-Pro、HotpotQA）、科学推理（GPQA）、数学推理（AIME、MATH）、代码生成（LiveCodeBench、SWE-bench）、Web 导航（WebArena）、工具使用（ToolLLM）等维度的 30+ 基准测试。应用方面覆盖了自动科学发现（AI Scientist、AlphaProof、ChemCrow）、自主软件工程（SWE-agent、Devin、Cursor）和开放世界模拟（Voyager、Cradle、Project Sid）三大领域。

## 技术亮点

1. **三层进化分类体系**：从模型中心到环境中心再到协同进化，构建了完整的自进化研究框架，覆盖 200+ 篇论文
2. **在线自进化前沿追踪**：重点标记了探索驱动在线自进化（Absolute Zero、R-Zero）和终身经验进化（AgentEvolver）等前沿方向
3. **环境作为进化驱动力**：提出"环境训练"范式，通过自适应课程和可扩展环境自动推动 Agent 能力提升
4. **技能增强进化路径**：从经验积累到技能抽象再到技能组合的完整技能进化链路（AutoSkill、SkillNet）
5. **多 Agent 拓扑自动搜索**：从 ADAS 到 AFLOW 再到 G-Designer，展示了 Agent 系统架构的自动化设计趋势
6. **TTCS 基准**：项目发布的 Test-Time Curriculum Synthesis 基准，被 ICLR 2026 Lifelong Agent Workshop 接收

## 与 Self-Evolve 关联
| 维度 | 关联分析 |
|------|----------|
| 进化循环 | 提供完整的三层进化分类体系：模型中心、环境中心、协同进化，为 Self-Evolve 提供理论框架 |
| Prompt 工程 | 收录了 GEPA、PromptWizard 等 Prompt 优化方法，以及 Self-Refine、Meta-Prompt 等自改进技术 |
| 评估框架 | 整合 30+ 基准测试，覆盖知识、推理、代码、Web、工具使用等多维度评估 |
| Agent 编排 | 收录 ADAS、AFLOW、G-Designer 等自动 Agent 架构搜索方法，以及多 Agent 拓扑动态适配研究 |
| 经验积累 | 系统梳理了离线经验编译、在线经验适应、终身经验进化、技能增强进化四条经验进化路径 |
| 工具进化 | 收录 Tool-Augmented Evolution 方向的关键论文（Voyager、LATM、CRAFT、Godel Agent） |
| 记忆架构 | 系统梳理了记忆架构进化方向（MemGPT、A-Mem、Mem0、MemSkill） |

## 参考资料
- GitHub: https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents
- 综述论文: https://doi.org/10.36227/techrxiv.177203250.05832634/v2
- TTCS 论文: https://arxiv.org/abs/2601.22628
- 联系邮箱: xiangzhishang@stu.xmu.edu.cn, yangchengyi@stu.xmu.edu.cn

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/xmudeeplit__awesome_self_evolving_agents`
- **分析命令**：`gitnexus analyze repos/xmudeeplit__awesome_self_evolving_agents --index-only --skip-git --name XMUSelfEvolvingAgents`
- **知识图谱规模**：待分析（纯文献资源库，无代码图谱）
- **查询语句**：`self-evolving agent model-centric environment-centric co-evolution benchmark`
- **核心执行流程候选**：该仓库为文献索引，无执行流程；分类结构为：`Model-Centric -> Inference-Based / Training-Based`；`Environment-Centric -> Knowledge / Experience / Architecture / Topology`；`Co-Evolution -> Multi-Agent Policy / Environment Training`
- **关键符号/文件**：`README.md`（唯一实质文件），`figs/intro.png`（分类体系图），`figs/trend.png`（趋势图）
- **调用关系上下文**：纯文献资源库，无代码调用关系；论文间的引用和演进关系构成隐式知识图谱
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程。由于是纯文献库，GitNexus 分析将主要提取分类结构和论文元数据
