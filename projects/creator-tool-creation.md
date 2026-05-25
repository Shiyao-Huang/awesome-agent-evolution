# CREATOR: Tool Creation for Disentangling Abstract and Concrete Reasoning

## 基本信息

| 字段 | 内容 |
|---|---|
| 论文 | Findings of EMNLP 2023 — CREATOR: Tool Creation for Disentangling Abstract and Concrete Reasoning of LLMs |
| 机构 | XMU DeepLIT 等 |
| 发表时间 | 2023 |
| 进化层级 | L2 (Skill/Tool Accumulation) |
| 优化范式 | Search (tool generation + reuse) |
| 评估基准 | MATH, TabMWP, Creation Challenge (2K questions) |

## 1. 任务定义

CREATOR 解决的核心问题是：LLM 的工具使用能力受限于 API 可用性和隐式推理的不稳定性。它提出让 LLM 创建自己的工具（而非使用预定义工具），将抽象工具创建与具体决策执行解耦，提高问题解决能力。

## 2. 方法核心

### 2.1 改进对象
- **m** (tool library): LLM 创建的可复用工具（函数/代码）
- **c** (tool documentation): 工具的文档描述

### 2.2 变异算子 U
LLM 根据任务需求生成新的工具代码（带文档），工具可跨任务复用。

### 2.3 适应度函数 V
任务正确率（MATH、TabMWP）和工具可复用性（Creation Challenge）。

### 2.4 选择机制 S
成功创建的工具保留在工具库中供后续任务使用。

### 2.5 闭环结构
分析任务 → 抽象推理（设计工具结构）→ 创建工具代码 → 具体推理（使用工具执行）→ 验证结果 → 工具入库供复用。

## 3. 定量证据

| 基准 | 基线 | 最佳 | 改进幅度 | 备注 |
|---|---|---|---|---|
| MATH | CoT, PoT, tool-using | CREATOR | 超越所有基线 | 数学竞赛问题 |
| TabMWP | CoT, PoT, tool-using | CREATOR | 超越所有基线 | 表格推理 |
| Creation Challenge | — | CREATOR | 展示工具创建必要性 | 2K 多样化问题 |

## 4. 定性判断

### 4.1 限制
- 工具创建质量依赖 LLM 代码生成能力
- 工具文档可能不足导致复用困难
- 工具库增长可能引入冲突或冗余

### 4.2 适用场景
- 需要动态工具创建的复杂推理任务
- 数学、表格和结构化数据处理
- 研究 Agent 工具学习能力的实验平台

### 4.3 教学价值
- "抽象推理"与"具体推理"的解耦是工具创建的关键设计
- 工具创建能力是 L2 级自进化（技能/工具积累）的重要组成部分
- 与 Voyager 的技能库概念类似，但 CREATOR 聚焦于工具而非可执行技能

## 5. 与自进化的关系

CREATOR 在 L1-L5 分类中属于 **L2 (Skill/Tool Accumulation)** 层级。

核心贡献：将"工具创建"从被动使用转变为主动生成。LLM 不再只是选择预定义工具，而是根据任务需求创建新工具并积累到工具库中。这直接对应自进化中的 m（记忆/技能状态）更新。

与 Voyager 的对比：Voyager 在 Minecraft 中创建 JavaScript 技能，CREATOR 在数学/表格推理中创建 Python 工具。两者都展示了"经验可执行化"的 L2 核心原则，但应用领域不同。CREATOR 的"抽象-具体解耦"设计值得推广到更多自进化系统。
