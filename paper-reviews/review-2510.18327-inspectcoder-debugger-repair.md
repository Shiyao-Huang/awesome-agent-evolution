# Deep Review #52: InspectCoder: Dynamic Analysis-Enabled Self Repair through interactive LLM-Debugger Collaboration

- **Paper**: InspectCoder: Dynamic Analysis-Enabled Self Repair through interactive LLM-Debugger Collaboration
- **arXiv ID**: 2510.18327
- **URL**: https://arxiv.org/abs/2510.18327
- **PDF**: https://arxiv.org/pdf/2510.18327
- **Authors**: Yunkun Wang, Yue Zhang, Guochang Li, Chen Zhi, Binhua Li, Fei Huang, Yongbin Li, Shuiguang Deng
- **Published**: 2025-10-21
- **Review Date**: 2026-05-21
- **content_timestamp**: 2025-10-21
- **collected_at**: 2026-05-21T00:00:00+08:00
- **time_slice**: 2025-10
- **Evolver category**: Dynamic program repair / debugger-mediated self-repair
- **Evidence status**: local-summary

---

## 1. Executive Summary / 执行摘要

**EN.** InspectCoder argues that code agents repair better when they can run dynamic analysis through an interactive debugger rather than relying only on static reasoning or test failure messages.

**中文。** 这条 review 将论文放入 Evolver 的 **Dynamic program repair / debugger-mediated self-repair** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。

## 2. Method Analysis / 方法分析

**EN.** The system uses a dual-agent workflow around stateful debugging: one side plans breakpoints and experiments, while the repair loop inspects runtime state before editing. The key shift is from text-only self-reflection to instrumented self-repair with observable execution state.

**中文方法拆解。**

- **演化对象**：提示词 / 记忆 / 轨迹 / 工具 / 代码 / 策略 / 模型权重中的哪一层被更新。
- **反馈闭环**：反馈来自自评、对抗、环境、测试、工具执行、人工还是外部 verifier。
- **选择机制**：是否保留多样化候选，是否只追求 best-of-N，是否有防止退化/停滞的机制。
- **可迁移性**：结果是否只在一个 benchmark 上成立，还是能迁移到 held-out 任务和新环境。

## 3. Evaluation and Evidence / 评估与证据

**EN.** Local raw data reports 5.10%-60.37% relative repair-accuracy improvements over the strongest baseline on BigCodeBench-R and LiveCodeBench-R, plus 1.67x-2.24x better bug-fix efficiency. It also contributes InspectWare as middleware for stateful debugging sessions.

**中文评估字段。** Evolver 应结构化保存：模型、任务域、基线、指标、迭代次数、token/算力成本、是否开源、是否有消融、是否有跨域/held-out 验证、以及是否能被复现为 Demo 或排行榜任务。若本地 raw 文件没有完整结果表，本条 review 明确标注为后续 PDF 复核候选。

## 4. Limitations / 局限性

**EN.** The approach is bounded by language/runtime support, debugger sandbox reliability, and benchmark representativeness. If tests are weak, dynamic inspection can optimize the wrong behavior.

**中文风险。** 自我进化系统的常见失败模式包括：自评循环、奖励投机、成本失控、轨迹/记忆污染、工具环境不稳定、以及“看起来变强但只是在适配评测器”。平台展示时应避免把单一 benchmark 结果包装成通用智能体进化能力。

## 5. Cross-Validation with Mom Test / 与社区痛点交叉验证

**Paper claim vs. community reality.** Strongly addresses HN PP1, HN PP14, Reddit PP26, and Reddit PP31: community pain says agents need observability, not just more reflection.

**中文结论。** Mom Test 语料给出的共同约束是：demo 成功 ≠ production 成功；自我改进声明必须经过独立验证；框架抽象、成本、调试透明度、长期记忆和安全治理往往比论文中的主算法更决定实际可用性。因此，本论文应同时被索引为“方法证据”和“待验证假设”。

## 6. Evolver Platform Implications / 平台化启示

**EN.** Classify under verifier/tooling-first self-improvement; leaderboard design should treat debugger access and trace quality as benchmark dimensions.

```yaml
paper_id: "2510.18327"
review_index: 52
category: "Dynamic program repair / debugger-mediated self-repair"
evidence_status: "local-summary"
community_cross_validation: true
bilingual: true
seo_ready: true
leaderboard_relevance: "candidate method/demo/benchmark node; requires normalized metadata"
```

## 7. Source Trace / 来源追踪

**Local raw file**: `raw-papers/2510.18327.md`

**Raw excerpt used**:

> Large Language Models (LLMs) frequently generate buggy code with complex logic errors that are challenging to diagnose. While existing LLM-based self-repair approaches conduct intensive static semantic analysis or reply on superficial execution logs, they miss the in-depth runtime behaviors that often expose bug root causes-lacking the interactive dynamic analysis capabilities that make human debugging effective. We present InspectCoder, the first agentic program repair system that empowers LLMs to actively conduct dynamic analysis via interactive debugger control. Our dual-agent framework enables strategic breakpoint placement, targeted state inspection, and incremental runtime experimentation within stateful debugger sessions. Unlike existing methods that follow fixed log collection procedures, InspectCoder adaptively inspects and perturbs relevant intermediate states at runtime, and leverages immediate process rewards from debugger feedback to guide multi-step reasoning, transforming LLM debugging paradigm from blind trial-and-error into systematic root cause diagnosis. We conduct comprehensive experiments on two challenging self-repair benchmarks: BigCodeBench-R and LiveCodeBench-R. InspectCoder achieves 5.10%-60.37% relative improvements in repair accuracy over the strongest

## 8. Tags / 标签

#program-repair, #debugging, #dynamic-analysis, #verification
