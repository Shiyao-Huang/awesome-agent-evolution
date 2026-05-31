---
title: Self-Evolution Definition Criteria / 自进化定义判据
layer: processed
updated: 2026-06-01
sources:
  - README.md
  - paper-drafts/main.tex
  - paper-drafts/ch1-intro.tex
  - paper-drafts/ch2-taxonomy.tex
  - analysis/survey-resource-spark.md
  - analysis/survey-seo-topic-map.md
  - site/src/pages/topics/self-evolving-ai-agents/index.astro
---

# Self-Evolution Definition Criteria / 自进化定义判据

## 一句话

[KNOWN] 在本 survey 中，一个 AI Agent 只有在反馈中修改自己的运行机制，并能验证、保留、审计或回滚这些修改时，才进入 self-evolution 讨论。 — Source: `paper-drafts/main.tex`, `paper-drafts/ch1-intro.tex`

## 三句话

1. [KNOWN] self-evolution 的可变对象不只包括模型权重，也包括 prompts、memory、tools、code、workflows、data curricula 和 model behavior。 — Source: `paper-drafts/main.tex`
2. [KNOWN] 关键边界不是“有没有学习”，而是系统是否参与生成、评估和保留对自身 operational machinery 的修改。 — Source: `paper-drafts/ch1-intro.tex`
3. [INFERRED] 因此对外读者最需要的是一个判断表：改了什么、反馈来自哪里、谁验证、如何保留、能否回滚、是否有跨任务证据。

## 五句话

1. [KNOWN] 普通 agent workflow 可以动态调用工具，但如果 workflow、memory、prompt、code 或 policy 没有被反馈驱动地改变，它仍然是静态系统。 — Source: `paper-drafts/ch1-intro.tex`
2. [KNOWN] AutoML、NAS、online learning、RLHF/RLAIF 和 agent memory 都可能接近 self-evolution，但只有当系统内部参与候选生成、选择、保留和后续复用时，才进入本 survey 定义。 — Source: `paper-drafts/ch2-taxonomy.tex`
3. [KNOWN] README 已把读者判断压成 Observe -> Interpret -> Modify -> Verify -> Retain 闭环。 — Source: `README.md`
4. [INFERRED] 这个定义页应服务三个消费场景：研究者查 survey 边界，工程师查实现门槛，产品/投资读者判断项目是否只是 demo 叙事。
5. [INFERRED] Evolve-AGI Index 的 loop strength、evidence credibility、transfer verification 和 governance readiness 都依赖这个定义边界，否则指数会把热度、静态框架和真正自进化混在一起。

## Definition Checklist

| Gate | Pass Condition | Fails When |
|---|---|---|
| Mutable object | 系统能修改 prompt、memory、tool policy、workflow、code、curriculum、weights 或 population。 | 只是在一次推理中生成更长答案。 |
| Feedback signal | 修改由 benchmark、环境、用户反馈、执行器、测试、judge 或 verifier 驱动。 | 修改只来自无证据的模型自评。 |
| Candidate generation | 系统参与提出候选改动，而不是完全由人类离线重写。 | 人类手动 patch，系统只执行新版本。 |
| Independent verification | 改动被外部测试、隐藏集、环境反馈或独立 judge 检查。 | 同一个模型提出改动又批准改动。 |
| Retention | 通过的改动被写入记忆、仓库、archive、技能库、权重或配置，并影响后续行为。 | 每次会话结束后没有任何可复用状态。 |
| Audit and rollback | 有版本、lineage、失败候选、成本或回滚边界。 | 只有最终分数，没有过程记录。 |

## Boundary Rules

- [KNOWN] Fixed workflow orchestration is not enough; orchestration becomes relevant only when workflow or policy can be modified and retained. Source: `paper-drafts/ch1-intro.tex`
- [KNOWN] Offline retraining by engineers is not self-evolution under the survey definition; it is an external improvement process. Source: `paper-drafts/ch1-intro.tex`
- [KNOWN] Online learning can be adjacent, but a fixed update rule over streaming data is not necessarily self-evolution. Source: `paper-drafts/ch1-intro.tex`
- [INFERRED] A project name containing “evolve” is weak evidence; a project without that word can still be central if it has the six gates above.

## Public Surface

[KNOWN] The public evergreen page for this definition is `site/src/pages/topics/self-evolving-ai-agents/index.astro`. It should be linked from the topic map, search, README entry points, and future definition/FAQ content.

## Trust Chain

- [KNOWN] Definition language is grounded in `paper-drafts/main.tex` and `paper-drafts/ch1-intro.tex`.
- [KNOWN] Boundary categories are aligned with `paper-drafts/ch2-taxonomy.tex`.
- [INFERRED] The checklist is an editorial synthesis of the paper definition, README Spark, and Survey/SEO topic map.
