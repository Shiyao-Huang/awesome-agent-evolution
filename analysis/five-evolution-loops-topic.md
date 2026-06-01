---
title: Five Evolution Loops Topic / 五类进化回路主题页
layer: processed
updated: 2026-06-01
sources:
  - README.md
  - paper-drafts/ch1-intro.tex
  - paper-drafts/ch3-methods.tex
  - survey/ch3-methods-cn.md
  - site/src/data/survey.ts
  - site/src/pages/survey/mechanisms.astro
  - site/src/content/blog/five-evolution-loops-for-ai-agents.mdx
  - analysis/survey-seo-topic-map.md
  - site/src/pages/topics/five-evolution-loops/index.astro
---

# Five Evolution Loops Topic / 五类进化回路主题页

## 一句话

[KNOWN] 五类进化回路是 Self Evolve Survey 的机制地图：定义页回答“算不算自进化”，五类回路回答“反馈怎样变成可保留的改进”。 — Source: `paper-drafts/ch1-intro.tex`, `site/src/data/survey.ts`

## 三句话

1. [KNOWN] Survey 数据层已经把公开展示材料压成 5 个 evolution loops、7 个 method families、6 个 case studies、196 papers 和 348 repos。 — Source: `site/src/data/survey.ts`
2. [KNOWN] 公开机制页已经解释了规范到执行、搜索、评估、反思和种群五个环的机制、证据、失效模式和组合方式。 — Source: `site/src/pages/survey/mechanisms.astro`
3. [INFERRED] 面向消费者的主题页应该把这些机制翻译成判断表：每个 loop 改什么、用什么反馈、谁验证、如何保留、常见失败是什么。

## 五句话

1. [KNOWN] 论文 Ch1 把 Five Evolution Loops 列为 survey 的第一项贡献，用来组织领域机制而不是堆项目名。 — Source: `paper-drafts/ch1-intro.tex`
2. [KNOWN] 论文 Ch3 进一步把 self-improvement 看成 loop design problem，要求说明 updated state、trusted feedback、drift prevention、unit of selection 和 measurement。 — Source: `paper-drafts/ch3-methods.tex`
3. [KNOWN] 中文 survey Ch3 强调真正自演化需要外部摩擦，例如真实环境、隐藏测试、不同模型、用户反馈、人工审计、对抗样本和时间切片。 — Source: `survey/ch3-methods-cn.md`
4. [KNOWN] 已有 blog 适合快速阅读，但它更像文章；topic 页需要更稳定、更结构化、更适合搜索和站内导航。 — Source: `site/src/content/blog/five-evolution-loops-for-ai-agents.mdx`
5. [INFERRED] 因此 Rank 2 SEO 资产应从“一篇 blog”升级为 evergreen guide，并接入 topic map、README、search、CONTENT_INDEX、wiki 和 resource coverage audit。

## Loop Matrix

| Loop | Mutable object | Feedback signal | Verifier | Retention | Failure mode |
|---|---|---|---|---|---|
| Specification-to-Execution | task spec, workflow, pipeline, tool plan | execution success, user goal fit, pipeline result | runner, tests, task acceptance | reusable workflow template or execution trace | spec drift; runnable artifact missing |
| Search | prompt, code, architecture, routing, hyperparameters | score, benchmark, cost, transfer result | evaluator, benchmark, validation suite | best candidate, archive, design pattern | local optimum; search cost; overfitting |
| Evaluator | test harness, judge, benchmark gate, acceptance policy | pass/fail, score, regression, safety signal | independent evaluator or hidden task | promotion gate and evidence log | Goodhart; evaluator leakage; weak tests |
| Reflection | memory, lesson, prompt context, skill note | failed trajectory, critique, environment feedback | retry result, external check, human review | typed memory, skill, retrieval item | memory pollution; self-confirmation |
| Population | candidate pool, archive, lineage, variants | fitness, diversity, novelty, robustness | evaluator plus archive policy | parent-child lineage and elite archive | premature convergence; unmanaged cost |

## Reader Value

- [INFERRED] Researchers can use the loops as a literature taxonomy before reading individual systems.
- [INFERRED] Engineers can use the matrix to decide which loop their system actually implements and which loop is still missing.
- [INFERRED] Product and industry readers can use the failure-mode column to avoid mistaking autonomy claims for reliability.
- [INFERRED] SEO pages can grow from each loop without losing the survey evidence chain.

## Public Surface

- [KNOWN] Public topic page: `site/src/pages/topics/five-evolution-loops/index.astro`
- [KNOWN] Topic map data: `site/src/data/topicMap.ts`
- [KNOWN] Existing mechanism page: `site/src/pages/survey/mechanisms.astro`
- [KNOWN] Existing blog explainer: `site/src/content/blog/five-evolution-loops-for-ai-agents.mdx`

## Trust Chain

- [KNOWN] Loop names, examples, method families, and counts come from `site/src/data/survey.ts`.
- [KNOWN] Paper framing comes from `paper-drafts/ch1-intro.tex` and `paper-drafts/ch3-methods.tex`.
- [KNOWN] Consumer-facing implementation is the new `/topics/five-evolution-loops/` route.
- [INFERRED] The specific mutable-object / verifier / retention matrix is a synthesis over the cited survey and mechanism sources, not a separately measured dataset.
