---
title: "多智能体协作进化 (Multi-Agent Co-Evolution)"
type: concept
rank: A
tags: [mechanism, M4, multi-agent, co-evolution, debate, archive, ecology]
sources:
  - survey/ch3-methods-cn.md
  - survey/ch8-future-cn.md
  - paper-reviews/review-2305.14325-multi-agent-debate.md
  - paper-reviews/review-2410.16946-evomac.md
updated: 2026-05-26
---

# 多智能体协作进化 (Multi-Agent Co-Evolution)

> 多个Agent实例通过竞争、协作、批判、分工和知识共享，形成超越单个Agent自改进能力的群体进化机制。

## 定义

Agent Evolution 中 M4 层机制：进化本身需要多样性、竞争、协作和选择。单Agent容易陷入局部最优；多Agent可提出不同假设、互相质疑、分工验证。

## 子机制分类

| 子机制 | 定义 | 代表系统 | 证据来源 |
|---|---|---|---|
| 生成者-验证者共进化 | 生成者提出方案，验证者寻找漏洞 | Meta-Rewarding, EvoMAC | survey/Ch3.1, Ch3.4 |
| 辩论与批判 | 多实例提出不同答案并相互质询 | Multi-Agent Debate, SAGE | survey/Ch3.2 |
| Archive生态搜索 | 保留多样化变体，跨代组合搜索 | DGM, ADAS | survey/Ch3.4, Ch4.1-4.2 |
| 组织级协同 | 按角色分工，嵌入组织流程 | CrewAI, LangGraph | survey/Ch6.1, Ch8.2 |
| 跨社区知识共享 | 开源生态共享验证器和失败样本 | 框架生态 | survey/Ch6.3 |

## 三种拓扑形态

1. **同体自博弈**：Proposer → Solver → Judge（同一模型多角色）
2. **异体对抗**：生成者Agent ↔ 验证者Agent ↔ 红队Agent
3. **Archive生态**：变体A/B/C → Archive → 采样组合 → 变体D

## 典型案例

### DGM 开放式Archive
不只保留最强个体，而是维护多样archive。不同分支探索不同局部最优。
某些当前不强的变体可能成为未来stepping stone。 — Source: survey/ch4-systems-cn.md §4.1

### EvoMAC 多agent网络
把协作网络中的节点和边视为可更新单元，用文本反馈调整协作结构。
软件开发中，开发团队和测试团队形成生成者-验证者共进化。 — Source: survey/ch3-methods-cn.md §3.4

## 局限性

1. **共识幻觉**：多个模型互相肯定错误答案 — Source: survey/ch8-future-cn.md §8.2
2. **成本二次增长**：辩论成本随agent数和轮数近似二次增长 — Source: survey/ch7-painpoints-cn.md §7.5
3. **异质性不足**：多数多agent系统只是同一模型的多次调用 — Source: survey/ch8-future-cn.md §8.2
4. **协调失败**：角色分工和handoff不完善导致任务丢失 — Source: P013

## Cross-references
- [[self-evaluation]] — 群体压力提供额外评估信号
- [[self-improvement]] — 个体改进积累为群体能力
- [[emergent-behavior]] — 多agent交互产生涌现行为
- [[mechanism-framework]] — 全景机制关系DAG
