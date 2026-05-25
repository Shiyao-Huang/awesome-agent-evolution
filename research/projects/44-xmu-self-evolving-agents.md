# Awesome-Self-Evolving-Agents: 自进化 Agent 系统性综述与资源集合

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/XMUDeepLIT/Awesome-Self-Evolving-Agents |
| Star | 300+ |
| 技术栈 | Markdown, 学术论文, 综述资源 |
| 许可证 | 开放学术资源 |
| 开发者 | 厦门大学 XMUDeepLIT 团队 / 香港理工大学 |

## 项目简介

Awesome-Self-Evolving-Agents 是厦门大学 DeepLIT 团队发布的自进化 Agent（Self-Evolving Agents）综合性学术资源库，配套其 2026 年发表的综述论文《A Systematic Survey of Self-Evolving Agents: From Model-Centric to Environment-Driven Co-Evolution》。该资源库系统性地梳理了自进化 Agent 的三大维度：模型中心自进化、环境中心自进化以及模型-环境协同进化，涵盖研究论文、基准测试、开源库和应用案例。该项目已发布 TTCS 基准并入选 ICLR 2026 Lifelong Agent Workshop。

## 目录结构

```
xmudeeplit__awesome_self_evolving_agents/
├── README.md               # 项目主文档（含完整分类索引）
├── figs/                   # 架构图与趋势图
│   ├── intro.png           # 三维分类体系总览图
│   └── trend.png           # 自进化 Agent 发展趋势图
└── （资源以 README 索引形式组织，非代码仓库）
```

## 核心模块分析

### 1. 模型中心自进化（Model-Centric Self-Evolution）

该维度关注模型自身的改进能力，分为两大子方向：
- **推理阶段进化（Inference-Based）**：包括并行采样（Parallel Sampling）、序列自纠错（Sequential Self-Correction）和结构化推理（Structured Reasoning）。典型方法包括自我反思（Self-Reflection）、思维链优化等。
- **训练阶段进化（Training-Based）**：包括合成驱动的离线自进化（Synthesis-Driven Offline）和探索驱动的在线自进化（Exploration-Driven Online）。代表性工作覆盖自我指令生成、自训练数据合成等范式。

### 2. 环境中心自进化（Environment-Centric Self-Evolution）

该维度关注 Agent 与外部环境交互的优化，包含四个子方向：
- **静态知识进化**：Agent RAG、推理驱动深度研究
- **动态经验进化**：离线经验编译、在线经验适应、终身经验进化、技能增强进化
- **模块化架构进化**：交互协议进化、记忆架构进化、工具增强进化
- **Agent 拓扑进化**：离线架构搜索、运行时动态适应、结构记忆进化

### 3. 模型-环境协同进化（Model-Environment Co-Evolution）

最高级的进化形式，模型与环境同时进化：
- **多 Agent 策略协同进化**：多个 Agent 通过交互共同进化策略
- **环境训练**：自适应课程进化（Adaptive Curriculum Evolution）和可扩展环境进化（Scalable Environment Evolution）

### 4. 基准测试与应用（Benchmarks & Applications）

资源库收集了多个领域的基准测试和应用案例：
- **基准**：TTCS（已入选 ICLR 2026 LLA Workshop）等
- **应用**：自动化科学发现、自主软件工程、开放世界仿真

### 5. 关键研究子领域深度解析

资源库对若干热门研究方向进行了特别标注和深入梳理（标记为"热门"的方向）：

- **探索驱动在线自进化**：Agent 在真实环境中通过探索获取新经验并实时改进策略，是目前最具潜力的自进化范式之一。
- **动态经验进化**：包括离线经验编译和在线经验适应，关注 Agent 如何从历史交互中提取可复用的经验模式。
- **终身经验进化与技能增强**：Agent 在不断面对新任务的过程中，持续积累和更新技能库，实现跨任务的终身学习能力。
- **环境训练**：自适应课程进化通过动态调整训练难度来促进 Agent 成长，可扩展环境进化则关注训练环境自身的改进。

## 技术亮点

1. **三维分类体系**：提出了模型-环境-协同进化的三维分类框架，清晰界定了自进化 Agent 的研究边界与层次关系，是该领域最系统的分类体系之一。该分类不仅覆盖了自进化的技术手段，还揭示了不同维度之间的相互促进关系。
2. **全面覆盖**：从推理优化到训练策略，从知识管理到拓扑结构，覆盖了自进化 Agent 的所有关键研究维度。每个子方向都配有代表性论文列表，便于深入研读。
3. **发展脉络梳理**：通过趋势图展示了自进化 Agent 从 2023 年到 2026 年的发展脉络与代表性工作，帮助研究者快速把握领域进展。趋势图清晰显示了该领域从模型中心向环境驱动和协同进化的演进路径。
4. **学术与实践结合**：不仅收录学术论文，还整合了开源库和实际应用案例，连接理论与工程实践。应用领域涵盖自动化科学发现、自主软件工程和开放世界仿真等前沿方向。
5. **活跃维护**：2026 年持续更新，收录了最新的 NeurIPS、ICLR 等顶级会议论文，保持与前沿同步。社区贡献机制（Issue/PR）确保了资源库的持续完善。
6. **配套基准 TTCS**：发布了 TTCS 基准测试并入选 ICLR 2026 Lifelong Agent Workshop，为自进化 Agent 的评估提供了标准化工具。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 理论框架 | 提供了 Self-Evolve 最完整的理论分类体系，为项目定义自改进维度提供学术支撑 |
| 模型自进化 | 模型中心自进化（推理+训练）的方法论为 Self-Evolve 的 LLM 优化提供参考路径 |
| 环境交互进化 | 环境中心自进化的经验积累、知识更新机制直接对应 Self-Evolve 的环境交互设计 |
| 多 Agent 协同进化 | 模型-环境协同进化中的多 Agent 策略为 Self-Evolve 的多 Agent 自改进提供理论基础 |
| 技能增强 | 技能增强进化（Skill Augmented Evolution）与 Self-Evolve 的能力扩展目标高度一致 |
| 基准参考 | 收集的基准测试可作为 Self-Evolve 自评估体系的参考标准 |
| 终身学习 | 终身经验进化方向为 Self-Evolve 的持续自改进提供了学术参照 |
