---
title: "自博弈进化 (Self-Play Evolution)"
type: concept
rank: A
tags: [mechanism, M2, self-play, debate, SPIRAL, multi-agent, Absolute Zero]
sources:
  - survey/latex/chapters/ch3-methods.tex
  - survey/latex/chapters/ch4-systems.tex
  - paper-reviews/review-2506.24119-spiral.md
  - paper-reviews/review-2305.14325-multi-agent-debate.md
  - paper-reviews/review-2505.03335-absolute-zero.md

updated: 2026-05-26
---

# 自博弈进化 (Self-Play Evolution)

> Agent通过扮演对抗角色（生成者 vs 验证者、攻击者 vs 防御者）互相提供训练信号的进化机制。核心理念源自博弈论中的 self-play：对手越强，自身进步越快。

## 定义

属于 M2 层（自改进）机制的特殊形式：Agent分化为至少两个角色，一方的输出成为另一方的训练目标，双方在迭代中共同提升。区别于单Agent自我反思，self-play 强调对抗性信号而非自我一致性。

## 代表系统

| 系统 | 机制 | 关键结果 | 局限 |
|---|---|---|---|
| SPIRAL (Yu et al. 2024) | 零和 self-play，proposer 生成问题、solver 求解 | 接近专家级推理能力 | 需要可验证域 |
| Multi-Agent Debate (Du et al. 2023) | 多个 LLM 实例辩论同一问题 | 提升事实准确性 | 成本高、收敛慢 |
| SPIN (Chen et al. 2024) | self-play 微调，区分 agent 与 main model | 弱模型向强模型转化 | 依赖初始数据分布 |
| Absolute Zero (2025) | proposer-solver self-play，零外部数据 | 完全自生成训练数据 | 域适用性待验证 |

## 核心洞察：异质性 (Heterogeneity)

同质 Agent 多次调用导致**共识幻觉** (Consensus Illusion)——多个相同模型互相肯定错误答案。有效 self-play 需要：

1. **不同模型**：GPT-4 vs Claude vs Gemini，各自偏差不同
2. **不同工具**：一个用代码执行验证，另一个用检索验证
3. **不同温度/sampling**：探索 vs 利用角色需要不同随机性
4. **不同角色目标**：生成者追求通过率，验证者追求拒绝率

— Source: survey/ch3-methods.tex §3.2, survey/ch8-future-cn.md §8.2

## 进化动力学

```
Generator ──生成挑战──→ Verifier ──拒绝/接受──→ Generator
     ↑                                          ↓
     └──── 信号反馈：梯度/偏好/奖励 ←── 失败样本 ──┘
```

双方形成 arms race：生成者学会绕过更严格的验证，验证者学会识别更隐蔽的错误。

## 与相关机制的边界

- **vs 奖励驱动进化**：self-play 可用奖励信号但本质是对抗结构，不依赖外部奖励函数
- **vs 多智能体协作进化**：self-play 强调对抗而非协作；但多Agent辩论处于两者边界
- **vs 自我评估**：self-play 的验证者角色等同于内部评估，但信号来源是对手而非自我

## Cross-references

- [[reward-based-evolution]] — 奖励信号可作为 self-play 的补充
- [[multi-agent-coevolution]] — 自博弈是协作进化的对抗子集
- [[mechanism-framework]] — 全景机制关系 DAG
