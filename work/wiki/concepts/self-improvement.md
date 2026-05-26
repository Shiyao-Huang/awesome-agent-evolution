---
title: "自我改进 (Self-Improvement)"
type: concept
rank: A
tags: [mechanism, M3, improvement, prompt-evolution, memory, architecture-search, code-self-modification]
sources:
  - survey/ch3-methods-cn.md
  - survey/ch4-systems-cn.md
  - paper-reviews/review-2505.22954-darwin-godel-machine.md
  - paper-reviews/review-2305.16291-voyager.md
updated: 2026-05-26
---

# 自我改进 (Self-Improvement)

> Agent在评估信号驱动下，改变自身行为分布、认知结构、执行代码或模型参数的机制。Agent Evolution的核心操作层。

## 定义

Agent Evolution 中 M3 层机制：改进深度决定能力上限。从最浅层的提示词进化到最深层的代码自修改，构成4层深度谱系。

## 改进深度谱系

```
L1 提示词进化 (最浅): Self-Refine → Reflexion → ACE/EvolveR
L2 记忆进化:         ExpeL → Voyager → ReasoningBank → Memory-R1
L3 策略/权重更新:    STaR → Self-Rewarding → RAGEN/SPIRAL
L4 代码自修改 (最深): ADAS → DGM → SICA/Gödel Agent
```

浅层安全、便宜、可解释，但上限受限。深层能力强但风险和成本高。

## 子机制分类

| 子机制 | 改进对象 | 代表系统 | 证据来源 |
|---|---|---|---|
| 提示词进化 | System prompt, few-shot, 反思记忆 | Self-Refine, Reflexion, ACE, EvolveR | survey/Ch3.3 |
| 记忆进化 | 情景记忆, 语义记忆, 技能库, 世界模型 | Voyager, ExpeL, ReasoningBank, Memory-R1 | survey/Ch3.5 |
| 架构搜索 | Agent控制流, 工具组合, 多agent拓扑 | ADAS, EvoMAC | survey/Ch3.4 |
| 策略/权重更新 | 模型参数, 偏好分布 | STaR, Self-Rewarding, RAGEN, SPIRAL | survey/Ch3.1-3.2 |
| 代码自修改 | Agent自身代码库 | DGM, SICA, Gödel Agent, AlphaEvolve | survey/Ch3.4, Ch4.1-4.3 |

## 统一形式化

基于 survey/Ch2.4: `z_{t+1}, A_{t+1} = S(A_t ∪ {U_k(z_t, x_t, y_t)}_{k=1}^K; V, C, D)`

- z = (θ, c, g, m, A) — 智能体系统状态（参数/上下文/工具代码/记忆/Archive）
- U_k — 更新器（第k种改进机制）
- V — 评估器, C — 安全约束, D — 多样性度量, S — 选择器

## 典型案例

### DGM 代码自修改闭环
Archive中agent变体 → 采样父代 → 修改自身Python代码 → Sandbox执行 → Benchmark评估 → Archive更新。
结果：SWE-bench 20.0% → 50.0%, Polyglot 14.2% → 30.7%。
核心：被写的代码就是下一代agent的行为结构。 — Source: survey/ch4-systems-cn.md §4.1

### Voyager 技能库进化
自动课程 → 技能检索 → GPT-4生成代码 → 环境执行 → 成功技能写入skill library。
结果：3.3× unique items, 15.3× tech tree解锁速度。
核心：技能不仅是文本建议，而是可执行JavaScript函数。 — Source: survey/ch4-systems-cn.md §4.4

## 局限性

1. **改进Plateau**：多数系统初期有收益，很快进入平台期 — Source: survey/ch7-painpoints-cn.md §7.2
2. **归因困难**：多模块同时变化时无法确定改进来源 — Source: survey/ch3-methods-cn.md §3.6
3. **灾难性遗忘**：学习新能力时可能丢失旧能力 — Source: survey/ch8-future-cn.md §8.4
4. **成本爆炸**：搜索成本可能远超收益 — Source: survey/ch7-painpoints-cn.md §7.5

## Cross-references
- [[self-observation]] — 改进后需要新观察
- [[self-evaluation]] — 评估决定改进方向
- [[multi-agent-coevolution]] — 个体改进积累为群体能力
- [[emergent-behavior]] — 改进积累产生涌现
- [[mechanism-framework]] — 全景机制关系DAG
