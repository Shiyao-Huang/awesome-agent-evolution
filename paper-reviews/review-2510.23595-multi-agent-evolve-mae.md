# Deep Review #76: Multi-Agent Evolve: LLM Self-Improve through Co-evolution

- **Paper**: Multi-Agent Evolve: LLM Self-Improve through Co-evolution
- **arXiv ID**: 2510.23595
- **URL**: https://arxiv.org/abs/2510.23595
- **PDF**: https://arxiv.org/pdf/2510.23595
- **Authors**: Yixing Chen, Yiding Wang, Siqi Zhu, Haofei Yu, Tao Feng, Muhan Zhang, Mostofa Patwary, Jiaxuan You
- **Published**: 2025-10-27
- **Review Date**: 2026-05-21
- **content_timestamp**: 2025-10-27
- **collected_at**: 2026-05-21T00:00:00+08:00
- **time_slice**: 2025-10
- **Evolver category**: Proposer-Solver-Judge co-evolution
- **Evidence status**: local-summary

---

## 1. Executive Summary / 执行摘要

**EN.** MAE uses Proposer, Solver, and Judge agents instantiated from one LLM to self-improve across math, reasoning, and general knowledge tasks.

**中文。** 这条 review 将论文放入 Evolver 的 **Proposer-Solver-Judge co-evolution** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。

## 2. Method Analysis / 方法分析

**EN.** The Proposer generates questions, Solver attempts them, and Judge evaluates both while RL optimizes behavior.

**中文方法拆解。**

- **演化对象**：提示词 / 记忆 / 轨迹 / 工具 / 代码 / 策略 / 模型权重中的哪一层被更新。
- **反馈闭环**：反馈来自自评、对抗、环境、测试、工具执行、人工还是外部 verifier。
- **选择机制**：是否保留多样化候选，是否只追求 best-of-N，是否有防止退化/停滞的机制。
- **可迁移性**：结果是否只在一个 benchmark 上成立，还是能迁移到 held-out 任务和新环境。

## 3. Evaluation and Evidence / 评估与证据

**EN.** The raw record reports 4.54% average improvement on Qwen2.5-3B-Instruct across multiple benchmarks.

**中文评估字段。** Evolver 应结构化保存：模型、任务域、基线、指标、迭代次数、token/算力成本、是否开源、是否有消融、是否有跨域/held-out 验证、以及是否能被复现为 Demo 或排行榜任务。若本地 raw 文件没有完整结果表，本条 review 明确标注为后续 PDF 复核候选。

## 4. Limitations / 局限性

**EN.** The Judge can share the model’s blind spots; average gains may hide regressions.

**中文风险。** 自我进化系统的常见失败模式包括：自评循环、奖励投机、成本失控、轨迹/记忆污染、工具环境不稳定、以及“看起来变强但只是在适配评测器”。平台展示时应避免把单一 benchmark 结果包装成通用智能体进化能力。

## 5. Cross-Validation with Mom Test / 与社区痛点交叉验证

**Paper claim vs. community reality.** Maps to HN PP7, Reddit PP10, X PP9, and X PP6: modest gains are useful only if judge independence is clear.

**中文结论。** Mom Test 语料给出的共同约束是：demo 成功 ≠ production 成功；自我改进声明必须经过独立验证；框架抽象、成本、调试透明度、长期记忆和安全治理往往比论文中的主算法更决定实际可用性。因此，本论文应同时被索引为“方法证据”和“待验证假设”。

## 6. Evolver Platform Implications / 平台化启示

**EN.** Store as a general-domain self-play baseline with roles, judge independence, RL objective, and delta per benchmark.

```yaml
paper_id: "2510.23595"
review_index: 76
category: "Proposer-Solver-Judge co-evolution"
evidence_status: "local-summary"
community_cross_validation: true
bilingual: true
seo_ready: true
leaderboard_relevance: "candidate method/demo/benchmark node; requires normalized metadata"
```

## 7. Source Trace / 来源追踪

**Local raw file**: `raw-papers/2510.23595.md`

**Raw excerpt used**:

> Reinforcement Learning (RL) has demonstrated significant potential in enhancing the reasoning capabilities of large language models (LLMs). However, the success of RL for LLMs heavily relies on human-curated datasets and verifiable rewards, which limit their scalability and generality. Recent Self-Play RL methods, inspired by the success of the paradigm in games and Go, aim to enhance LLM reasoning capabilities without human-annotated data. However, their methods primarily depend on a grounded environment for feedback (e.g., a Python interpreter or a game engine); extending them to general domains remains challenging. To address these challenges, we propose Multi-Agent Evolve (MAE), a framework that enables LLMs to self-evolve in solving diverse tasks, including mathematics, reasoning, and general knowledge Q&A. The core design of MAE is based on a triplet of interacting agents (Proposer, Solver, Judge) that are instantiated from a single LLM, and applies reinforcement learning to optimize their behaviors. The Proposer generates questions, the Solver attempts solutions, and the Judge evaluates both while co-evolving. Experiments on Qwen2.5-3B-Instruct demonstrate that MAE achieves an average improvement of 4.54% on multiple benchmarks. These results highlight MAE as a scalable, d

## 8. Tags / 标签

#multi-agent, #proposer-solver-judge, #rl, #self-improvement
