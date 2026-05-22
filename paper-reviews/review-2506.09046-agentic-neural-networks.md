# Deep Review #56: Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation

- **Paper**: Agentic Neural Networks: Self-Evolving Multi-Agent Systems via Textual Backpropagation
- **arXiv ID**: 2506.09046
- **URL**: https://arxiv.org/abs/2506.09046
- **PDF**: https://arxiv.org/pdf/2506.09046
- **Authors**: Xiaowen Ma, Chenyang Lin, Yao Zhang, Volker Tresp, Yunpu Ma
- **Published**: 2025-06-10 (v1), revised 2025-07-18 (v2)
- **Review Date**: 2026-05-21
- **content_timestamp**: 2025-06-10
- **collected_at**: 2026-05-21T00:00:00+08:00
- **time_slice**: 2025-06
- **Evolver category**: Multi-agent optimization / textual backpropagation
- **Evidence status**: local-summary

---

## 1. Executive Summary / 执行摘要

**EN.** Agentic Neural Networks frames multi-agent collaboration as a layered neural network with a forward phase for task decomposition and a backward phase for textual feedback/backpropagation.

**中文。** 这条 review 将论文放入 Evolver 的 **Multi-agent optimization / textual backpropagation** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。

## 2. Method Analysis / 方法分析

**EN.** Outputs flow forward, critique gradients flow backward as text, and agent roles/refinements are updated through that feedback. This turns multi-agent debate into an optimization object.

**中文方法拆解。**

- **演化对象**：提示词 / 记忆 / 轨迹 / 工具 / 代码 / 策略 / 模型权重中的哪一层被更新。
- **反馈闭环**：反馈来自自评、对抗、环境、测试、工具执行、人工还是外部 verifier。
- **选择机制**：是否保留多样化候选，是否只追求 best-of-N，是否有防止退化/停滞的机制。
- **可迁移性**：结果是否只在一个 benchmark 上成立，还是能迁移到 held-out 任务和新环境。

## 3. Evaluation and Evidence / 评估与证据

**EN.** Local raw data says ANN surpasses leading multi-agent baselines across four benchmarks. Extract benchmark diversity, backward-feedback ablation, agents/layers, and cost per improvement.

**中文评估字段。** Evolver 应结构化保存：模型、任务域、基线、指标、迭代次数、token/算力成本、是否开源、是否有消融、是否有跨域/held-out 验证、以及是否能被复现为 Demo 或排行榜任务。若本地 raw 文件没有完整结果表，本条 review 明确标注为后续 PDF 复核候选。

## 4. Limitations / 局限性

**EN.** Textual “gradients” are language, not mathematical derivatives; the system may optimize coordination style or prompts instead of competence.

**中文风险。** 自我进化系统的常见失败模式包括：自评循环、奖励投机、成本失控、轨迹/记忆污染、工具环境不稳定、以及“看起来变强但只是在适配评测器”。平台展示时应避免把单一 benchmark 结果包装成通用智能体进化能力。

## 5. Cross-Validation with Mom Test / 与社区痛点交叉验证

**Paper claim vs. community reality.** Relevant to HN PP6/23, Reddit PP6/37: mechanism is promising, but cost caps and trace observability are required.

**中文结论。** Mom Test 语料给出的共同约束是：demo 成功 ≠ production 成功；自我改进声明必须经过独立验证；框架抽象、成本、调试透明度、长期记忆和安全治理往往比论文中的主算法更决定实际可用性。因此，本论文应同时被索引为“方法证据”和“待验证假设”。

## 6. Evolver Platform Implications / 平台化启示

**EN.** Represent as a method node connected to multi-agent debate, MAgICoRe, EvoMAC, and textual-feedback systems.

```yaml
paper_id: "2506.09046"
review_index: 56
category: "Multi-agent optimization / textual backpropagation"
evidence_status: "local-summary"
community_cross_validation: true
bilingual: true
seo_ready: true
leaderboard_relevance: "candidate method/demo/benchmark node; requires normalized metadata"
```

## 7. Source Trace / 来源追踪

**Local raw file**: `raw-papers/2506.09046.md`

**Raw excerpt used**:

> Leveraging multiple Large Language Models(LLMs) has proven effective for addressing complex, high-dimensional tasks, but current approaches often rely on static, manually engineered multi-agent configurations. To overcome these constraints, we present the Agentic Neural Network(ANN), a framework that conceptualizes multi-agent collaboration as a layered neural network architecture. In this design, each agent operates as a node, and each layer forms a cooperative "team" focused on a specific subtask. Agentic Neural Network follows a two-phase optimization strategy: (1) Forward Phase-Drawing inspiration from neural network forward passes, tasks are dynamically decomposed into subtasks, and cooperative agent teams with suitable aggregation methods are constructed layer by layer. (2) Backward Phase-Mirroring backpropagation, we refine both global and local collaboration through iterative feedback, allowing agents to self-evolve their roles, prompts, and coordination. This neuro-symbolic approach enables ANN to create new or specialized agent teams post-training, delivering notable gains in accuracy and adaptability. Across four benchmark datasets, ANN surpasses leading multi-agent baselines under the same configurations, showing consistent performance improvements. Our findings indic

## 8. Tags / 标签

#multi-agent, #textual-backpropagation, #coordination, #cost
