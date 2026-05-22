# Deep Review #71: Papers Without arXiv IDs — Placeholder Index

- **Paper**: Papers Without arXiv IDs — Placeholder Index
- **arXiv ID**: placeholder-no-arxiv
- **URL**: (multiple/non-arXiv sources)
- **PDF**: (not available in placeholder)
- **Authors**: (see source)
- **Published**: 
- **Review Date**: 2026-05-21
- **content_timestamp**: 2023-12-14
- **collected_at**: 2026-05-21T00:00:00+08:00
- **time_slice**: 2023-Q4
- **Evolver category**: Data gap / non-arXiv tracking index
- **Evidence status**: sparse-or-placeholder

---

## 1. Executive Summary / 执行摘要

**EN.** This is not a single paper but a tracking record for papers without arXiv IDs or with non-arXiv sources, including FunSearch and several missing items from the 100-paper list.

**中文。** 这条 review 将论文放入 Evolver 的 **Data gap / non-arXiv tracking index** 分支：既记录其自我进化机制，也记录它在真实社区痛点下需要验证的边界。核心判断不是“是否看起来先进”，而是反馈、验证、成本和迁移路径能否支撑长期平台化索引。

## 2. Method Analysis / 方法分析

**EN.** Its role is dataset governance: preventing silent drops of papers that lack easy arXiv extraction and identifying search debt.

**中文方法拆解。**

- **演化对象**：提示词 / 记忆 / 轨迹 / 工具 / 代码 / 策略 / 模型权重中的哪一层被更新。
- **反馈闭环**：反馈来自自评、对抗、环境、测试、工具执行、人工还是外部 verifier。
- **选择机制**：是否保留多样化候选，是否只追求 best-of-N，是否有防止退化/停滞的机制。
- **可迁移性**：结果是否只在一个 benchmark 上成立，还是能迁移到 held-out 任务和新环境。

## 3. Evaluation and Evidence / 评估与证据

**EN.** Evidence status is mixed. FunSearch has a Nature source and verified timestamp; other entries require source discovery before paper-level claims.

**中文评估字段。** Evolver 应结构化保存：模型、任务域、基线、指标、迭代次数、token/算力成本、是否开源、是否有消融、是否有跨域/held-out 验证、以及是否能被复现为 Demo 或排行榜任务。若本地 raw 文件没有完整结果表，本条 review 明确标注为后续 PDF 复核候选。

## 4. Limitations / 局限性

**EN.** A placeholder creates false coverage if treated as a reviewed paper; it must remain a gap-control artifact.

**中文风险。** 自我进化系统的常见失败模式包括：自评循环、奖励投机、成本失控、轨迹/记忆污染、工具环境不稳定、以及“看起来变强但只是在适配评测器”。平台展示时应避免把单一 benchmark 结果包装成通用智能体进化能力。

## 5. Cross-Validation with Mom Test / 与社区痛点交叉验证

**Paper claim vs. community reality.** Matches the strategic instruction that coverage is the quality bar and Reddit PP31 about cherry-picked evidence.

**中文结论。** Mom Test 语料给出的共同约束是：demo 成功 ≠ production 成功；自我改进声明必须经过独立验证；框架抽象、成本、调试透明度、长期记忆和安全治理往往比论文中的主算法更决定实际可用性。因此，本论文应同时被索引为“方法证据”和“待验证假设”。

## 6. Evolver Platform Implications / 平台化启示

**EN.** Expose as coverage debt internally; each listed title should become its own review once source URLs are verified.

```yaml
paper_id: "placeholder-no-arxiv"
review_index: 71
category: "Data gap / non-arXiv tracking index"
evidence_status: "sparse-or-placeholder"
community_cross_validation: true
bilingual: true
seo_ready: true
leaderboard_relevance: "candidate method/demo/benchmark node; requires normalized metadata"
```

## 7. Source Trace / 来源追踪

**Local raw file**: `raw-papers/placeholder-no-arxiv.md`

**Raw excerpt used**:

> # Papers Without arXiv IDs — Placeholder Index
> 
> The following papers from the 100-paper list did not have arXiv IDs at the time of collection.
> They are tracked here for future extraction.
> 
> ## Papers needing arXiv search/extraction
> 
> | # | Title | Year | Status |
> |---|-------|------|--------|
> | 43 | Nature-Inspired Population-Based Evolution of LLMs | 2025 | No arXiv found |
> | 44 | ES vs GRPO in LLM Post-Training | 2025 | No arXiv found |
> | 60 | LeDex: Self-Debugging + Code Explanation | 2024 | No arXiv found |
> | 64 | TTCS: Test-Time Curriculum Synthesis | 2025 | No arXiv found |
> | 78 | Self-Rewarding PPO | 2024 | No arXiv found |
> | 79 | Process-based Self-Rewarding | 2024 | No arXiv found |
> | 86 | MARS: Multi-Agent Collaboration for Reasoning | 2024 | No arXiv found |
> | 88 | Survey: LLMs for Evolutionary Computation | 2024 | No arXiv found |
> | 89 | Matching Accuracy: ES vs GRPO | 2025 | No arXiv found |
> | 93 | Safety for Open-Ended Systems | 2025 | No arXiv found |
> | 97 | Debate Helps Weak-to-Strong | 2024 | No arXiv found |
> | 99 | Reward Hacking: Mechanisms & Misalignment | 2025 | No arXiv found |
> 
> ## Non-arXiv papers
> 
> | # | Title | Year | Source |
> |---|-------|------|--------|
> | 5

## 8. Tags / 标签

#data-quality, #coverage-gap, #non-arxiv, #funsearch
