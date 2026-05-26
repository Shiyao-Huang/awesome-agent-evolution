---
title: "自我评估 (Self-Evaluation)"
type: concept
rank: A
tags: [mechanism, M2, evaluation, reward, benchmark, goodhart]
sources:
  - survey/ch3-methods-cn.md
  - survey/ch4-systems-cn.md
  - survey/ch5-evaluation-cn.md
  - paper-reviews/review-2401.10020-self-rewarding.md
  - paper-reviews/review-2407.19594-meta-rewarding.md
updated: 2026-05-26
---

# 自我评估 (Self-Evaluation)

> Agent对自身行为质量、改进效果、安全合规性和成本效率进行度量的机制。评估为进化提供选择压力。

## 定义

Agent Evolution 中 M2 层机制：评估决定系统朝哪里演化。评估器 = 选择压力的来源。评估不可靠 → 进化方向错误。

## 子机制分类

| 子机制 | 定义 | 代表系统 | 证据来源 |
|---|---|---|---|
| 自评打分 | 模型作为Judge评价自己输出 | Self-Rewarding LM, Meta-Rewarding | survey/Ch3.1, Ch4.5 |
| 环境反馈 | 从交互环境获取reward信号 | Voyager, RAGEN, WebEvolver | survey/Ch3.1, Ch4.4 |
| 程序化验证 | 自动执行测试/evaluator判定正确性 | AlphaEvolve, DGM, SICA | survey/Ch4.1-4.3 |
| 元评估 | 对评估器本身进行评估和校准 | Meta-Rewarding, IterAlign | survey/Ch3.1 |
| 人类审查 | 外部人类专家进行最终判定 | 生产部署 | survey/Ch5.3.3 |

## 可靠性谱系

低可靠性: 纯自反思 → 中: LLM-as-Judge / 自博弈 → 高: 环境Reward / 程序化测试 / 人类审查

## 典型案例

### AlphaEvolve 的自动evaluator
候选程序放入可执行evaluator，用性能指标作为fitness function。覆盖矩阵乘法、数据中心调度等。
核心：只有当问题可以被程序化验证时，进化闭环才可靠。 — Source: survey/ch4-systems-cn.md §4.3

### Self-Rewarding LM 的评价循环
同一模型既生成又评价，通过Iterative DPO训练。
风险：长度从M1的1092 tokens涨到M3的2552 tokens，部分提升来自length gaming。 — Source: survey/ch4-systems-cn.md §4.5

## 局限性

1. **Goodhart定律**：当评估指标成为优化目标，指标就会失真 — Source: survey/ch5-evaluation-cn.md §5.3.2
2. **评价器退化**：长度偏见、位置偏见、score distribution collapse — Source: paper-reviews/review-2407.19594-meta-rewarding.md
3. **评估覆盖不足**：单一benchmark无法覆盖真实生产需求 — Source: survey/ch5-evaluation-cn.md §5.3.1
4. **评估-修改隔离难题**：Agent不应能直接修改自己的评估器 — Source: survey/ch8-future-cn.md §8.3

## Cross-references
- [[self-observation]] — 观察输出成为评估输入
- [[self-improvement]] — 评估结果决定改进方向
- [[emergent-behavior]] — 评估不足导致涌现风险
- [[mechanism-framework]] — 全景机制关系DAG
