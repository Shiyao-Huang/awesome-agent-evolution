# Promptbreeder: Self-Referential Prompt Evolution

## 基本信息

| 字段 | 内容 |
|---|---|
| 论文 | 2309.16797 — Promptbreeder: Self-Referential Self-Improvement via Prompt Evolution |
| 作者 | Chrisantha Fernando, Dylan Banarse, Henry Michalewski, Simon Osindero, Tim Rocktäschel |
| 机构 | Google DeepMind, UCL |
| 发表时间 | 2023-09 (ICML 2024) |
| 进化层级 | L1 (Prompt Evolution) |
| 优化范式 | Evolutionary (LLM-driven genetic programming on prompts) |
| 代码 | Available |

## 1. 任务定义

Promptbreeder 解决的核心问题是：如何自动发现比人工设计更优的 prompt 策略。关键创新是"自指式"进化——不仅进化 task-prompt（任务指令），还同时进化 mutation-prompt（改变任务指令的指令），实现了"改进改进方法"的二阶自我改进。

## 2. 方法核心

### 2.1 改进对象
- **c** (prompts): 两层 prompt——task-prompt（任务指令）和 mutation-prompt（变异指令）
- 两层 prompt 同时进化：M' = LLM(H + M)，其中 H 是 hyper-mutation prompt

### 2.2 变异算子 U
LLM 作为变异算子：基于 mutation-prompt 对 task-prompt 生成变体。关键自指机制：mutation-prompt 本身也通过 LLM 变异（由 hyper-mutation prompt 驱动）。

### 2.3 适应度函数 V
在训练集上的任务正确率（算术、常识推理、伦理分类）。

### 2.4 选择机制 S
基于 fitness 的种群选择：保留表现好的 prompt 变体进入下一代。

### 2.5 闭环结构
初始化种群 → LLM 基于 mutation-prompt 变异 task-prompt → 评估 fitness → 选择 → 重复多代。同时：hyper-mutation prompt 变异 mutation-prompt，实现二阶进化。

## 3. 定量证据

| 基准 | 基线 | 最佳 | 改进幅度 | 备注 |
|---|---|---|---|---|
| GSM8K (arithmetic) | Chain-of-Thought | Promptbreeder | 超越 CoT | 自动发现数学推理 prompt |
| Commonsense reasoning | Plan-and-Solve | Promptbreeder | 超越 P&S | 多个基准 |
| Hate speech classification | 手工 prompt | Promptbreeder | 有效进化 | 复杂领域自适应 |

## 4. 定性判断

### 4.1 限制
- 仅优化 prompt，不修改模型权重或 agent 架构
- 需要训练集评估，依赖任务可验证性
- 进化过程可能收敛到 narrow prompt 家族
- 自指机制的深度有限（仅两层）

### 4.2 适用场景
- Prompt 工程自动化
- 领域自适应的 prompt 发现
- 研究自指式进化机制

### 4.3 教学价值
Promptbreeder 是理解自指式进化的入门案例：
1. 展示了"改进改进方法"的核心概念
2. 与 ADAS/DGM 的区别：进化对象是 prompt 而非代码，但自指机制相同
3. 无需参数更新，纯 prompt 空间的进化搜索
4. 为更深层自修改（L4/L5）提供了概念起点

## 5. 与自进化的关系

Promptbreeder 在 L1-L5 分类中属于 **L1 (Prompt Evolution)**，但具有独特的自指特性。

核心贡献：首次在 prompt 空间实现自指式进化。它不满足更高层级（不修改代码/权重），但在 L1 内部实现了二阶改进：M' = LLM(H + M)。这与 DGM 在 L5 实现的递归自修改在概念上类似，但变异空间更受限。

对自进化研究的启示：自指不是 L5 的专利——即使在 prompt 空间，自指式进化也能超越人工设计。Promptbreeder 的进化范式可直接扩展到代码空间（ADAS 已做到）和 agent 架构空间（DGM 已做到）。
