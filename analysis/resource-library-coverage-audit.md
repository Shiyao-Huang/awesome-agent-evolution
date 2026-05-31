---
title: Resource Library Coverage Audit / 资料库覆盖审计
layer: processed
updated: 2026-05-31
sources:
  - docs/indexes/master-index.md
  - analysis/github-project-data-analysis.md
  - site/src/data/survey.ts
  - site/src/data/projects.ts
  - site/src/pages/resource-library/index.astro
  - projects/INDEX.md
  - CONTENT_INDEX.md
  - work/wiki/index.md
---

# Resource Library Coverage Audit / 资料库覆盖审计

## 一句话

这个仓库已经不是一个普通 awesome list，而是一个 raw 语料、processed 分析、论文/survey、网站、公开报告和 LLM wiki 共存的 self-evolving agents 资料库；下一步的关键不是“继续堆内容”，而是把不同口径的成果讲清楚、接成对读者有用的 Survey 证据链。

## 三句话

1. [KNOWN] 当前全仓库治理口径显示：631 个 raw GitHub captures、631 个 classified repositories、224 个 analyzed model-card reports、91 个 strict evolution repositories、198 个 broad evolution repositories、201 个 raw paper files、171 个 paper reviews 和 426 个 public project reports。Source: `docs/indexes/master-index.md`, `analysis/github-project-data-analysis.md`
2. [KNOWN] 网站 survey 数据层还维护了另一组面向展示的研究摘要：196 papers、348 repos、97 pain points、1306 blog artifacts、5 evolution loops、7 method families、6 case studies。Source: `site/src/data/survey.ts`
3. [INFERRED] 这些数字不是互相矛盾，而是不同消费场景：raw 口径回答“我们收了多少”，analysis 口径回答“我们分析了什么”，site/report 口径回答“读者能看什么”，survey 口径回答“论文结论用哪些证据组织”。

## 五句话

1. 这个资料库已经形成四层管线：raw 保存原始材料，processed 生成分类/分析/model card，work 维护论文、survey、网站和脚本，results 输出 PDF、报告、趋势快照和 public reports。
2. Survey 的 Spark 应该从这个现实出发：不是宣称“全网最全”，而是说明本仓库如何把分散材料变成可审计的 self-evolution 判断系统。
3. 最需要对外解释的是计数口径：631、224、426、119、793 分别代表不同层，不应该在 README 或论文里混成一个单一数字。
4. README 和网站应面向消费者：告诉读者这个项目是什么、为什么重要、核心结论在哪里、证据从哪里查；内部构建命令、Agent 流程和 handoff 规则留在 AGENTS/CLAUDE/CLOUD/docs/ops。
5. 论文与 survey 的下一步应优先补“覆盖说明 + 口径边界 + 证据链入口”，再扩展 SEO 页面和 self-evolving agents 主题页。

## Coverage Table / 当前资产表

| Layer | Asset | Count | What It Means | Source |
|---|---:|---:|---|---|
| Raw | Raw GitHub captures | 631 | 已进入 timestamp index 的 GitHub 原始采集记录。 | `docs/indexes/master-index.md` |
| Raw | Files under `raw-github/` | 632 | 磁盘文件数；可能包含 index/support 文件，不等于 capture 条目。 | `rg --files raw-github` |
| Raw | Raw paper files | 201 | 论文 raw 文件磁盘口径。 | `docs/indexes/master-index.md` |
| Raw | Files under `raw-social/` | 1317 | 社交原始材料与配套 JSON/批次文件。 | `rg --files raw-social` |
| Raw | Files under `raw-blogs/` | 1308 | 博客原始材料与配套 JSON/批次文件。 | `rg --files raw-blogs` |
| Raw | Files under `raw-social-rank/` | 468 | social 高价值/排序子集材料。 | `rg --files raw-social-rank` |
| Processed | Classified GitHub repositories | 631 | 每个 raw GitHub capture 对应的分类行。 | `analysis/github-project-data-analysis.md` |
| Processed | Strict evolution repositories | 91 | `base_theme=evolution` 的严格进化主题仓库。 | `analysis/github-project-data-analysis.md` |
| Processed | Broad evolution repositories | 198 | 通过 self-improvement/evolution/reflection/search 等信号扩展的广义相关仓库。 | `analysis/github-project-data-analysis.md` |
| Processed | Analyzed model-card reports | 224 | 进入项目 model-card/public report 漏斗的分析对象。 | `docs/indexes/master-index.md` |
| Processed | Project markdown files | 793 | `projects/` 下全部 markdown；包含 index、archive、support、legacy 等，不等于公开展示项目数。 | `rg --files projects -g '*.md'` |
| Processed | Paper review files | 171 | 论文评审/阅读笔记产物。 | `docs/indexes/master-index.md` |
| Work | Survey website data papers | 196 | 网站 survey 页面使用的 paper 展示口径。 | `site/src/data/survey.ts` |
| Work | Survey website data repos | 348 | 网站 survey 页面使用的 repository 展示口径。 | `site/src/data/survey.ts` |
| Work | Site project records | 119 | `site/src/data/projects.ts` 当前项目数组条目；是精选展示口径。 | `rg -n 'repo: "' site/src/data/projects.ts` |
| Work | Site route source files | 30 | `site/src/pages` 页面源码数。 | `rg --files site/src/pages` |
| Work | Blog MDX posts | 25 | 面向 SEO/趋势的博客内容页。 | `rg --files site/src/content/blog -g '*.mdx'` |
| Work | Research MDX pages | 15 | 面向网站的研究内容页。 | `rg --files site/src/content/research -g '*.mdx'` |
| Work | Wiki files | 58 | LLM Wiki 页面与搜索索引文件数，包含本次新增的 coverage synthesis。 | `rg --files work/wiki -g '*.md' -g '*.json'` |
| Results | Public project reports | 426 | 静态站点可引用/下载的公开项目报告文件。 | `docs/indexes/master-index.md` |

## Same Number, Different Meaning / 口径边界

| Number | Do Not Say | Say This Instead |
|---:|---|---|
| 631 | “我们分析了 631 个项目并都有 model card。” | “我们有 631 个 raw GitHub captures，并且 631 个进入 classified repository 表。” |
| 224 | “网站只有 224 个项目。” | “当前治理索引显示 224 个进入 analyzed model-card reports 漏斗。” |
| 426 | “我们有 426 个不同项目。” | “`site/public/reports/projects/` 有 426 个 public project report 文件。” |
| 119 | “项目库只有 119 个。” | “`site/src/data/projects.ts` 当前精选展示数组有 119 个 repo 条目。” |
| 793 | “我们深度分析了 793 个项目。” | “`projects/` 下有 793 个 markdown 文件，包含项目卡、索引、支持材料和历史/兼容内容。” |
| 196 | “论文总数就是 196。” | “网站 survey 数据层展示 196 papers；raw paper files 口径是 201。” |

## What We Have Already Built / 已经做成的成果

- [KNOWN] Raw corpus: GitHub、论文、社交、博客和 ranked social 子集已经按 raw 层保留，并有全仓库索引。Source: `docs/indexes/raw-index.md`
- [KNOWN] Processed analyses: GitHub 分类、strict/broad evolution 子集、项目 model card、paper reviews、Evolve-AGI Index 和 survey spark 已经存在。Source: `analysis/`, `research/`, `projects/`, `paper-reviews/`
- [KNOWN] Survey/paper work: 英文 paper draft、中文 survey、LaTeX PDF 构建入口和 Evolve-AGI Index integration 已经接上。Source: `paper-drafts/main.tex`, `survey/latex/main.tex`
- [KNOWN] Public surface: Astro site、资料库覆盖页、博客/SEO、research pages、project reports、graph、paper page、survey page、rankings 和 Evolve-AGI Index page 已经存在。Source: `site/src/`, `site/public/reports/`
- [KNOWN] Agent knowledge memory: LLM Wiki 维护了 entities、concepts、sources、synthesis 四类页面，供 agent 查询和累积。Source: `work/wiki/index.md`

## What Still Needs Work / 主要缺口

| Rank | Gap | Why It Matters | Best Next Move |
|---:|---|---|---|
| 1 | 计数口径容易混淆 | 对外读者会把 raw、analysis、site、report 数字误解成同一件事。 | 在 README、paper/survey 方法和网站数据页统一引用本审计。 |
| 2 | 资料库覆盖页已有初版，但仍需持续同步 | 读者需要先知道“仓库里到底有什么”，再进入具体项目。 | 后续把 coverage page 接入搜索、更多 topic clusters 和站点数据自动刷新。 |
| 3 | SEO 主题簇还没完全从资料库资产反推 | SEO 页面应来自真实证据簇，而不是泛泛关键词。 | 基于 strict/broad evolution、pain points、loops、project reports 生成 topic map。 |
| 4 | 项目展示数组小于分析/report 库 | 网站 `/projects/` 当前是精选口径，不能代表全部资料库。 | 增加 all reports / coverage entry，避免读者误会只有 119 个项目。 |
| 5 | 发布状态需要和 git 事实同步 | coverage 页面、README 入口和索引只有在提交并推送后才算公开发布。 | 每次资料库入口改动后检查 `git status --short --branch`，提交并推送后再写成已发布。 |

## Survey Spark Implication / 对 Survey 的新 Spark

一句话：Survey 的核心火花是“用证据链判断自进化，而不是用项目名判断自进化”。

三句话：

1. 仓库已经有足够多的 raw 和 processed 资产，下一步要做的是把它们组织成读者能复用的判断框架。
2. 最强的公开叙事不是“我们有很多链接”，而是“我们能告诉你一个系统是否真的有 Observe -> Interpret -> Modify -> Verify -> Retain 的闭环”。
3. Evolve-AGI Index 可以成为这个判断框架的量化外壳，但它必须始终回到 raw corpus、project model cards、paper reviews 和 benchmark evidence。

## Trust Chain

- [KNOWN] Master governance counts were read from `docs/indexes/master-index.md` generated on 2026-05-31.
- [KNOWN] GitHub funnel counts and time slices were read from `analysis/github-project-data-analysis.md` generated on 2026-05-31T11:52:37.823Z.
- [KNOWN] Survey display counts were read from `site/src/data/survey.ts`.
- [KNOWN] Site project display count was measured from `site/src/data/projects.ts` using `rg -n 'repo: "'`.
- [KNOWN] File counts were measured with `rg --files` under the named directories on 2026-05-31.
- [INFERRED] Recommendations are synthesis over those local sources and should be revised when generated indexes change.
