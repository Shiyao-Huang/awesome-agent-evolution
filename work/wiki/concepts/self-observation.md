---
title: "自我观察 (Self-Observation)"
type: concept
rank: A
tags: [mechanism, M1, self-observation, trajectory, reflection]
sources:
  - survey/ch1-intro-cn.md
  - survey/ch3-methods-cn.md
  - survey/ch4-systems-cn.md
  - paper-reviews/review-2303.11366-reflexion.md
  - paper-reviews/review-2510.04618-ace.md
updated: 2026-05-26
---

# 自我观察 (Self-Observation)

> Agent对自身行为轨迹、执行状态、上下文变化和外部反馈进行感知、记录和结构化的机制。所有进化循环的起点。

## 定义

Agent Evolution 中 M1 层机制：系统必须能够感知和记录自身行为，才能进入评估-改进循环。没有可靠观察，后续评估和改进失去基础。

## 子机制分类

| 子机制 | 定义 | 代表系统 | 证据来源 |
|---|---|---|---|
| 轨迹记录 | 完整记录行为序列、工具调用、中间结果 | DGM, ADAS, AlphaEvolve | survey/Ch4.1-4.3 |
| 状态监控 | 实时追踪环境状态、上下文窗口、资源消耗 | LangGraph, ACE | survey/Ch6.1 |
| 反思生成 | 将失败经验压缩为自然语言教训 | Reflexion, ExpeL, Agent-R | survey/Ch4.4, Ch3.3 |
| 上下文感知 | 理解当前上下文边界和约束条件 | ACE, EvolveR | survey/Ch3.3, Ch3.6 |

## 典型案例

### Reflexion 的 Verbal RL
Actor执行 → Evaluator返回反馈 → Self-Reflection生成语言教训 → Episodic Memory保存 → 下一轮读取。
核心创新：把稀疏的0/1 reward转化为语义梯度。 — Source: survey/ch4-systems-cn.md §4.4

### ACE 的上下文工程
把上下文视为可演化playbook，使用结构化增量更新避免上下文坍缩。观察不仅看行为结果，还看上下文本身的状态。 — Source: survey/ch3-methods-cn.md §3.3

## 局限性

1. **反思幻觉**：LLM可能错误归因失败原因 — Source: paper-reviews/review-2303.11366-reflexion.md
2. **上下文膨胀**：长任务中观察记录挤压可用上下文窗口 — Source: P015, P068 (97痛点)
3. **观察遗漏**：工具调用、状态转换可能未被完整捕获 — Source: P013
4. **观察偏差**：自我观察带有模型自身认知盲点 — Source: P010, P054

## Cross-references
- [[self-evaluation]] — 观察输出成为评估输入
- [[self-improvement]] — 评估结果驱动改进
- [[mechanism-framework]] — 全景机制关系DAG
