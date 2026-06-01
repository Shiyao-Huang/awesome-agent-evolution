---
title: Survey SEO Topic Map / Survey 与 SEO 主题地图
layer: processed
updated: 2026-06-01
sources:
  - docs/indexes/master-index.md
  - README.md
  - analysis/self-evolution-definition-criteria.md
  - analysis/five-evolution-loops-topic.md
  - analysis/code-evolution-benchmark-matrix.md
  - analysis/resource-library-coverage-audit.md
  - analysis/survey-resource-spark.md
  - analysis/github-project-data-analysis.md
  - analysis/agent-swarm-evolve.md
  - site/src/data/survey.ts
  - site/src/data/topicMap.ts
  - site/src/pages/topics/index.astro
  - site/src/pages/topics/five-evolution-loops/index.astro
  - site/src/pages/topics/code-evolution-benchmark/index.astro
---

# Survey SEO Topic Map / Survey 与 SEO 主题地图

## 一句话

[INFERRED] Self Evolve 的 SEO 不应该从泛关键词开始，而应该从 survey 证据簇开始：每个可发布主题都要回答一个真实读者问题，并能回到 raw、processed、survey、reports 或 Evolve-AGI Index。 — Source: `analysis/resource-library-coverage-audit.md`, `site/src/data/topicMap.ts`

## 三句话

1. [KNOWN] 仓库已有 646 个 raw GitHub captures、93 个 strict evolution repositories、200 个 broad evolution repositories、201 个 raw paper files 和 441 个 public project reports。 — Source: `docs/indexes/master-index.md`
2. [KNOWN] Survey 展示层已有 196 papers、348 repos、97 pain points、5 evolution loops、7 method families 和 6 case studies。 — Source: `site/src/data/survey.ts`
3. [INFERRED] 因此下一批公开内容应按“读者问题 -> survey 章节 -> 证据入口 -> 下一步页面”组织，而不是把博客写成互相孤立的长尾词页面。

## 五句话

1. [KNOWN] Coverage audit 已经解释 raw、processed、work、results 的计数口径，避免读者把 646 raw captures、239 analyzed reports、441 public reports、239 site records、196 survey-display papers 混成一个数字。 — Source: `analysis/resource-library-coverage-audit.md`
2. [KNOWN] Survey resource spark 已经把核心判断压成 controlled improvement system：改什么、用什么反馈、谁验证、如何保留、能否回滚。 — Source: `analysis/survey-resource-spark.md`
3. [KNOWN] Agent-Swarm Evolve 是用户明确要求新增的内容部分，应当进入 topic map，而不是只留在内部分析页。 — Source: `analysis/agent-swarm-evolve.md`
4. [INFERRED] SEO 主题簇的 rank 应由 survey 贡献、证据强度、读者需求、可发布资产和与 Evolve-AGI Index 的关系共同决定。
5. [INFERRED] 当前最优先的八个主题是：定义、五类进化回路、代码自我改进、记忆技能、Agent-Swarm、评估治理、生产痛点、资料库覆盖。

## Topic Cluster Map

| Rank | Topic | Reader Question | Survey Role | Next Public Asset |
|---:|---|---|---|---|
| 1 | 什么才算真正的自进化智能体 | 这个系统真的在改进自己，还是只是固定 workflow? | Survey 定义入口。 | Definition page live at `/topics/self-evolving-ai-agents/`; next compare with AutoML/online learning/static workflow |
| 2 | 五类进化回路 | 不同项目到底在用哪一种反馈闭环? | 机制分类和方法族入口。 | Five-loop guide live at `/topics/five-evolution-loops/`; next one page per loop |
| 3 | 代码自我改进与算法发现 | 哪些系统真的会改代码、发现算法，并留下 benchmark 证据? | DGM/ADAS/AlphaEvolve/OpenEvolve/FunSearch 证据簇。 | Benchmark matrix live at `/topics/code-evolution-benchmark/`; next representative system pages |
| 4 | 记忆、技能与知识进化 | agent 怎样把一次失败变成未来可复用经验? | memory/skill/tool policy substrate。 | Memory and skill substrate guide |
| 5 | Agent-Swarm Evolve 与 harness 进化 | 多智能体组织结构能不能一起进化? | 用户指定新增方向；连接 multi-agent、harness、runtime。 | Swarm topology matrix |
| 6 | 评估、治理与 Evolve-AGI Index | 怎么避免把 benchmark 热度误读成成熟度? | Index 与 benchmark/goodhart/governance 的桥。 | Index signal explainer pages |
| 7 | 生产痛点与用户信任边界 | 用户真的需要更自主的 agent 吗? | 用 97 个 pain points 校验研究方向。 | FAQ and buyer guide |
| 8 | 资料库覆盖与证据链复查 | 这个资料库到底收了什么、分析了什么? | 计数边界、信任链和公开入口。 | Topic-filtered resource library |

## Publication Rules

- [KNOWN] 每个主题必须能链接至少一个公开站点入口和一个仓库证据入口；Rank 1 定义主题、Rank 2 五类回路主题和 Rank 3 code-evolution benchmark matrix 已经有公开 evergreen 页面。Source: `site/src/pages/topics/index.astro`, `site/src/pages/topics/self-evolving-ai-agents/index.astro`, `site/src/pages/topics/five-evolution-loops/index.astro`, `site/src/pages/topics/code-evolution-benchmark/index.astro`, `CONTENT_INDEX.md`
- [INFERRED] 每个主题最好同时服务三类读者：研究者查 survey、工程师查项目/benchmark、普通读者查定义/风险/价值。
- [INFERRED] 如果一个 SEO 页面无法写出 evidence links、seed queries、survey role 和 next asset，就先不要发布成核心主题。

## Trust Chain

- [KNOWN] Counts were read from `docs/indexes/master-index.md`, `analysis/resource-library-coverage-audit.md`, and `site/src/data/survey.ts` on 2026-06-01.
- [KNOWN] Public implementation lives in `site/src/data/topicMap.ts`, `site/src/pages/topics/index.astro`, and `site/src/pages/topics/code-evolution-benchmark/index.astro`.
- [INFERRED] Ranking is editorial synthesis over existing evidence; it should change when new raw/paper/project evidence changes the survey spine.
