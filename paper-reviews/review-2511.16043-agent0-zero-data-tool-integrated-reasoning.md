# Deep Review #64: Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning

- **Paper**: Agent0: Unleashing Self-Evolving Agents from Zero Data via Tool-Integrated Reasoning
- **arXiv ID**: 2511.16043
- **URL**: https://arxiv.org/abs/2511.16043
- **PDF**: https://arxiv.org/pdf/2511.16043
- **Authors**: Peng Xia, Kaide Zeng, Jiaqi Liu, Can Qin, Fang Wu, Yiyang Zhou, Caiming Xiong, Huaxiu Yao
- **Published**: 2025-11-20
- **Review Date**: 2026-05-21
- **content_timestamp**: 2025-11-20
- **collected_at**: 2026-05-21T00:00:00+08:00
- **time_slice**: 2025-11
- **Evolver category**: Zero-data co-evolution / tool-integrated curriculum
- **Evidence status**: local-summary

---

## 1. Executive Summary / 执行摘要

**EN.** Agent0 proposes a fully autonomous loop where a curriculum agent and executor co-evolve from the same base model while tools expand the frontier of solvable tasks.

**中文。** 这条 review 将论文放入 Evolver 的 **Zero-data co-evolution / tool-integrated curriculum** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。

## 2. Method Analysis / 方法分析

**EN.** The curriculum agent generates harder tool-aware tasks, the executor learns to solve them, and executor improvements pressure the curriculum to become more demanding.

**中文方法拆解。**

- **演化对象**：提示词 / 记忆 / 轨迹 / 工具 / 代码 / 策略 / 模型权重中的哪一层被更新。
- **反馈闭环**：反馈来自自评、对抗、环境、测试、工具执行、人工还是外部 verifier。
- **选择机制**：是否保留多样化候选，是否只追求 best-of-N，是否有防止退化/停滞的机制。
- **可迁移性**：结果是否只在一个 benchmark 上成立，还是能迁移到 held-out 任务和新环境。

## 3. Evaluation and Evidence / 评估与证据

**EN.** The raw record reports 18% improvement on mathematical reasoning and 24% on general reasoning for Qwen3-8B-Base.

**中文评估字段。** Evolver 应结构化保存：模型、任务域、基线、指标、迭代次数、token/算力成本、是否开源、是否有消融、是否有跨域/held-out 验证、以及是否能被复现为 Demo 或排行榜任务。若本地 raw 文件没有完整结果表，本条 review 明确标注为后续 PDF 复核候选。

## 4. Limitations / 局限性

**EN.** If the curriculum and executor share blind spots, they may create internally hard tasks that fail to transfer. Tool use also raises cost and safety issues.

**中文风险。** 自我进化系统的常见失败模式包括：自评循环、奖励投机、成本失控、轨迹/记忆污染、工具环境不稳定、以及“看起来变强但只是在适配评测器”。平台展示时应避免把单一 benchmark 结果包装成通用智能体进化能力。

## 5. Cross-Validation with Mom Test / 与社区痛点交叉验证

**Paper claim vs. community reality.** Maps to X PP6, HN PP8/X PP13, Reddit PP21, and Reddit PP6: data bottlenecks are attacked, but external held-out validation is mandatory.

**中文结论。** Mom Test 语料给出的共同约束是：demo 成功 ≠ production 成功；自我改进声明必须经过独立验证；框架抽象、成本、调试透明度、长期记忆和安全治理往往比论文中的主算法更决定实际可用性。因此，本论文应同时被索引为“方法证据”和“待验证假设”。

## 6. Evolver Platform Implications / 平台化启示

**EN.** Extract curriculum generator, executor, tool set, verifier type, cost per round, and external transfer.

```yaml
paper_id: "2511.16043"
review_index: 64
category: "Zero-data co-evolution / tool-integrated curriculum"
evidence_status: "local-summary"
community_cross_validation: true
bilingual: true
seo_ready: true
leaderboard_relevance: "candidate method/demo/benchmark node; requires normalized metadata"
```

## 7. Source Trace / 来源追踪

**Local raw file**: `raw-papers/2511.16043.md`

**Raw excerpt used**:

> Large Language Model (LLM) Agents, often trained with Reinforcement Learning (RL), are constrained by a dependency on human-curated data, limiting scalability and tethering AI to human knowledge. Existing self-evolution frameworks offer an alternative but are typically restricted by the model's inherent capabilities and single-round interactions, hindering the development of complex curricula involving tool use or dynamic reasoning. We introduce Agent0, a fully autonomous framework that evolves high-performing agents without external data through multi-step co-evolution and seamless tool integration. Agent0 establishes a symbiotic competition between two agents initialized from the same base LLM: a curriculum agent that proposes increasingly challenging frontier tasks, and an executor agent that learns to solve them. We integrate external tools to enhance the executor's problem-solving capacity; this improvement, in turn, pressures the curriculum agent to construct more complex, tool-aware tasks. Through this iterative process, Agent0 establishes a self-reinforcing cycle that continuously produces high-quality curricula. Empirically, Agent0 substantially boosts reasoning capabilities, improving the Qwen3-8B-Base model by 18% on mathematical reasoning and 24% on general reasoning 

## 8. Tags / 标签

#zero-data, #curriculum, #tool-use, #co-evolution
