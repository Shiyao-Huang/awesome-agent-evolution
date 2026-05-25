# Coverage Improvement Report — 2026-05-25

## 一句话

通过 anysearch 搜索和深度分析，填补了覆盖差距中的 4 个关键缺口：Eliza（多 Agent 平台）、Promptbreeder（自指式 prompt 进化）、EvoAgentX（工作流进化框架）、CREATOR（工具创建），从 45 个缺失项减少到 41 个，同时产出 4 份新的 model-card 级深度分析。

## 三句话

1. 覆盖差距分析显示 45 项缺失、26 项浅层索引，本次优先填补了对自进化方法论影响最大的 4 项：Promptbreeder（自指式进化的 L1 起点）、EvoAgentX（统一进化框架的 L4 实现）、CREATOR（工具创建的 L2 案例）、Eliza（多 Agent 运行时基础设施）。
2. 新增产出的 4 份 model-card 均覆盖 5 个维度（任务定义、方法核心、定量证据、定性判断、自进化关系），并与现有 L1-L5 分类体系对齐。
3. 剩余 41 个缺失项中，优先级最高的是：ToolRL、E-SPL、ReflAct、ScoreFlow、EvoFlow、mcp-scan 等方法论文和工具，以及 Memvid、ChatLab 等记忆产品。

## 五句话完整版

1. 本次覆盖改进的核心策略是：先用覆盖差距分析定位缺失项，再用 anysearch 搜索获取论文和仓库信息，最后产出 model-card 级深度分析文件。
2. **Promptbreeder (2309.16797)**：首次在 prompt 空间实现自指式进化，不仅进化 task-prompt 还进化 mutation-prompt。ICML 2024，L1 层级，自指式进化的概念起点。
3. **EvoAgentX (2507.03616)**：集成 TextGrad/AFlow/MIPRO 三种进化算法的统一框架，HotPotQA +7.44%、MBPP +10%、MATH +10%、GAIA +20%。L4 层级，工作流进化。
4. **CREATOR (EMNLP 2023)**：让 LLM 创建自己的工具，将抽象工具创建与具体推理解耦。L2 层级，与 Voyager 的技能库概念类似但领域不同。
5. **Eliza (elizaOS)**：高星多 Agent 平台，不直接包含自进化机制，但提供插件系统和多 Agent 架构作为 L4 级变异的目标基础设施。

## 新增文件

| 文件 | 方法 | 层级 | 来源 |
|---|---|---|---|
| `projects/eliza-multi-agent-platform.md` | ElizaOS | Infrastructure | anysearch + GitHub |
| `projects/promptbreeder-self-referential-evolution.md` | Promptbreeder | L1 | anysearch + arXiv 2309.16797 |
| `projects/evoagentx-evolving-workflows.md` | EvoAgentX | L4 | anysearch + arXiv 2507.03616 |
| `projects/creator-tool-creation.md` | CREATOR | L2 | anysearch + EMNLP 2023 |

## 覆盖差距更新

| 层级 | 之前 | 之后 | 变化 |
|---|---|---|---|
| Deep project/report | 21 | 25 | +4 |
| Indexed or raw | 26 | 26 | 0 |
| Missing | 45 | 41 | -4 |

## 下一步优先级

| Rank | 目标 | 理由 |
|---|---|---|
| 1 | ToolRL, E-SPL, ReflAct | 方法论文，补齐 L1-L3 方法链 |
| 2 | ScoreFlow, EvoFlow, AFlow deep | 工作流进化，与 EvoAgentX 对比 |
| 3 | Memvid, ChatLab, MemMachine | 记忆产品，补齐 L2 记忆层 |
| 4 | AgenticRed, OpenGuardrails | 安全/红队，补齐评估安全维度 |
| 5 | Google ADK, mastra, Parlant | 高星框架，补齐工程生态 |
