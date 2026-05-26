---
title: "奖励驱动进化 (Reward-Based Evolution)"
type: concept
rank: A
tags: [mechanism, M1, reward, RLHF, self-play, self-rewarding, STaR, RISE, Absolute Zero]
sources:
  - survey/latex/chapters/ch3-methods.tex
  - survey/latex/chapters/ch4-systems.tex
  - paper-reviews/review-2203.14465-star.md
  - paper-reviews/review-2407.18219-rise.md
  - paper-reviews/review-2505.03335-absolute-zero.md
  - paper-reviews/review-2401.10020-self-rewarding.md

updated: 2026-05-26
---

# 奖励驱动进化 (Reward-Based Evolution)

> Agent通过奖励信号（外部反馈或自生成）迭代改进自身行为的进化机制。

## 核心循环：Generate → Evaluate → Train

所有奖励驱动进化系统共享同一基本闭环：

1. **Generate**：模型针对任务生成候选输出（回答、推理链、代码）
2. **Evaluate**：奖励模型对输出打分或筛选（正确性/质量/偏好）
3. **Train**：将高质量样本作为训练数据，更新模型参数

关键差异在于**奖励来源**：外部标注 vs 模型自评 vs 环境反馈。

## 子机制分类

### Self-Rewarding (Meta, 2024)
- 模型同时充当生成器 (Generator) 和评判器 (Judge)
- 生成候选回答后自评打分，选择高分样本进行 SFT 训练
- 多轮迭代后模型性能持续上升
- 风险：评判器与生成器退化耦合 (Evaluator Degradation)
- — Source: paper-reviews/review-2401.10020-self-rewarding.md

### STaR — Self-Taught Reasoner (Zelikman, 2022)
- 对问题生成推理链 (Rationale)，用最终答案正确性过滤
- 正确样本直接用于训练；错误样本附赠正确答案后重新推理
- 不需要显式奖励模型，仅依赖结果验证 (Outcome Verification)
- 适合数学、逻辑推理等有客观正确答案的领域
- — Source: paper-reviews/review-2203.14465-star.md

### RISE — Recursive Introspection (Qu, 2024)
- 将单轮问题重构为多轮对话，引入递归自我纠错 (Recursive Self-Correction)
- 使用多轮在线 RL (Multi-turn RL) 训练模型在后续轮次中自动纠正错误
- 关键创新：将"意识到自己错了并修正"本身作为可训练能力
- — Source: paper-reviews/review-2407.18219-rise.md

### Absolute Zero (Zhao, 2025, NeurIPS Best Paper)
- 零外部数据条件下的自我博弈 (Self-Play) 进化
- 模型同时扮演提议者 (Proposer) 和求解者 (Solver) 双重角色
- Proposer 生成对自身有学习价值的问题，Solver 求解后反馈奖励信号
- 完全摆脱人工标注和外部数据集依赖
- — Source: paper-reviews/review-2505.03335-absolute-zero.md

### Meta-Rewarding (Wu, 2024)
- 三层层级结构：Actor → Judge → Meta-Judge
- Meta-Judge 专门评估 Judge 的评判质量，防止评估器退化
- 核心洞察：验证器质量是瓶颈，需要独立的元评估机制
- — Source: survey/latex/chapters/ch3-methods.tex

## 关键洞察：验证器瓶颈

**奖励质量 = 进化天花板。** 没有独立验证机制时不可避免出现：
奖励作弊 (Reward Hacking)、评估器漂移 (Evaluator Drift)、确认偏差 (Confirmation Bias)。

解决方案按可靠性递减：(1) 结果验证（STaR）— 仅限有客观答案的任务；(2) 独立评估器（RLHF）— 成本高但仍可被利用；(3) 元评估层级（Meta-Rewarding）— 递归缓解但无法根治；(4) 自我博弈平衡（Absolute Zero）— 通过博弈论约束避免退化。

## Cross-references
- [[self-improvement]] — 奖励驱动是 M3 改进层中策略/权重更新的核心手段
- [[self-evaluation]] — 评估器质量直接决定奖励信号质量
- [[self-play-evolution]] — Absolute Zero 等方法的基础范式
- [[mechanism-framework]] — 全景机制关系 DAG 中的 M1 奖励路径
