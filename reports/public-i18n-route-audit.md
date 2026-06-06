# 公开 I18N 路由审计 / Public I18N Route Audit

Generated: 2026-06-05T19:06:43.515Z

Status: **INCOMPLETE**

## 一句话结论 / One-Sentence Verdict

中文：公开站点的核心英文路径已经存在，但全站还没有完成同证据链双语覆盖；当前仍有 942 条中文优先 sitemap 路由没有英文 alternate。

English: The public site is not fully bilingual yet: the core English path exists, but most sitemap-listed pages are still Chinese-first and do not declare an English alternate route.

## 这对读者意味着什么 / What This Means For Readers

- 中文：如果你从中文入口阅读，核心路线是可用的，但很多长尾文章、标签页、项目页和报告页还没有对应英文版本。
- 中文：如果你从英文入口阅读，你能理解主要定义、项目入口、报告状态和研究地图，但这还不是全站逐页翻译完成。
- 中文：这不是 Google 已收录证明，也不是文案质量完成证明；它只说明哪些公开路由已经声明双语关系，哪些还没有。
- English: Chinese readers have the most complete route set today; English readers have a core evidence path, not full long-tail page parity.
- English: This is not proof of Google indexing and not proof of public-copy quality. It only measures route language and alternate-link coverage.

## 三句话证据 / Three-Sentence Evidence

1. Sitemap 当前有 985 条 URL，审计能读取 985 条 HTML 路由；这只证明 sitemap 中列出的页面有本地 HTML，不等于全站内容完整或每条路由都完成 i18n parity。 / The sitemap exposes 985 URLs and the audit can read 985 HTML routes; this only proves sitemap-listed pages have local HTML, not whole-site content completeness or i18n parity for every route.
2. 英文语言路由共有 25 条，中文路由中只有 18 条声明英文 alternate；这些数字来自 HTML metadata，不证明英文内容已经逐页保持同证据链。 / There are 25 English-language routes, and only 18 Chinese routes declare an English alternate. These counts come from HTML metadata; they do not prove content-level same-evidence parity.
3. 因此 SEO 目标的下一步不是盲目制造英文页面，而是优先给高价值文章、报告、项目卡和研究页补英文 route、人工同证据链审查、canonical/alternate 声明和审查状态。 / The next SEO step is not to create shallow English pages. It is to promote high-value articles, reports, project cards, and research pages with English routes, manual same-evidence review, canonical/alternate declarations, and review status.

## 边界 / Boundary

本报告只检查 sitemap 中公开 HTML 路由是否能读取，以及页面声明的语言、canonical 和 alternate 字段。它不验证 canonical 是否最优、不验证 alternate 目标内容是否等价、不证明 Google 已经抓取页面，也不证明页面文案已经通过 reader/editor 与 academic review；这些分别由人工审查、live publication readiness、text asset indexability 和 public copy review gate 跟踪。

This report checks whether public HTML routes in the sitemap are readable and what language, canonical, and alternate fields they declare. It does not validate canonical optimality, does not prove alternate targets have equivalent content, does not prove Google has crawled the pages, and does not certify copy quality; those are tracked by manual review, live publication readiness, text asset coverage, and the public-copy review gate.

## 指标 / Metrics

| 指标 / Metric | Count |
|---|---:|
| Sitemap URL 数 / Sitemap URLs | 985 |
| 已检查 HTML 路由 / HTML routes checked | 985 |
| 英文路由 / English routes | 25 |
| 中文路由 / Chinese routes | 960 |
| 声明英文 alternate 的中文路由 / Chinese routes declaring English alternate | 18 |
| 声明中文 alternate 的英文路由 / English routes declaring Chinese alternate | 18 |
| 未声明英文 alternate 的中文优先路由 / Chinese-first routes without declared English alternate | 942 |
| Sitemap 中 noindex 路由 / Noindex routes in sitemap | 0 |
| 缺失 HTML 文件 / Missing HTML routes | 0 |

## 核心读者路径 / Important Reader Routes

| 路由 / Route | Lang | Status | EN alternate | ZH alternate | Title |
|---|---|---|---|---|---|
| / | zh-CN | paired-or-self-declared | /en/ | / | Self Evolve AI — Self-Evolving Agents Survey / AI 自进化证据地图 |
| /en/ | en | paired-or-self-declared | /en/ | / | Self Evolve AI — English reader path for self-evolving agents |
| /topics/ | zh-CN | paired-or-self-declared | /en/topics/ | /topics/ | AI 自进化主题地图 — bilingual reader path for self-evolving agents |
| /en/topics/ | en | paired-or-self-declared | /en/topics/ | /topics/ | Self-Evolving AI Agents Topic Guide — English reader path |
| /paper/ | zh-CN | paired-or-self-declared | /en/paper/ | /paper/ | Self-Evolving AI Survey — 论文下载 &amp; 数据可视化 |
| /projects/ | zh-CN | paired-or-self-declared | /en/projects/ | /projects/ | Self Evolve 项目索引 — GitHub 自进化 AI 仓库 |
| /reports/ | zh-CN | paired-or-self-declared | /en/reports/ | /reports/ | Self Evolve 报告状态索引 — 可索引证据页与引用边界 |
| /value-lsh/ | zh-CN | paired-or-self-declared | /en/value-lsh/ | /value-lsh/ | Value LSH 证据分诊队列 — Self Evolve |
| /star-growth/ | zh-CN | paired-or-self-declared | /en/star-growth/ | /star-growth/ | 2026 GitHub Star 抓取试点 — Self Evolve |
| /evolve-agi-index/ | zh-CN | paired-or-self-declared | /en/evolve-agi-index/ | /evolve-agi-index/ | Evolve-AGI Evidence Worksheet — Self Evolve |
| /resource-library/ | zh-CN | paired-or-self-declared | /en/resource-library/ | /resource-library/ | Self-Evolving AI Agents 资料库 — Survey 证据源、项目报告与 Evolve-AGI Index |
| /survey/ | zh-CN | paired-or-self-declared | /en/survey/ | /survey/ | Survey核心发现 — AI自进化机制分析与案例研究 |
| /blog/ | zh-CN | paired-or-self-declared | /en/blog/ | /blog/ | Self Evolve 博客 — AI 自我进化实践笔记与证据导读 |
| /research/ | zh-CN | paired-or-self-declared | /en/research/ | /research/ | Self Evolve 研究图谱 — 自进化智能体论文复核入口 |
| /graph/ | zh-CN | paired-or-self-declared | /en/graph/ | /graph/ | Self Evolve 探索性证据图 — 项目、论文与机制候选关系 |

## 英文路线 / English Routes

| 路由 / Route | Chinese alternate | Title |
|---|---|---|
| /en/ | / | Self Evolve AI — English reader path for self-evolving agents |
| /en/blog/ | /blog/ | Self Evolve Blog Guide — English reading path |
| /en/evolve-agi-index/ | /evolve-agi-index/ | Evolve-AGI Evidence Worksheet — not an AGI score |
| /en/graph/ | /graph/ | Self Evolve Evidence Graph — exploratory links, not proof |
| /en/paper/ | /paper/ | Self-Evolving AI Survey Paper — English citation status |
| /en/projects/ | /projects/ | Self Evolve Projects — GitHub evidence, not a quality ranking |
| /en/reports/ | /reports/ | Self Evolve Reports — what is reviewed, what is still gated |
| /en/reports/public-i18n-route-audit/ | /reports/public-i18n-route-audit/ | Public I18N Route Audit / Self Evolve Reports |
| /en/reports/text-asset-indexability/ | /reports/text-asset-indexability/ | Text Asset Indexability Audit / Self Evolve Reports |
| /en/research/ | /research/ | Self Evolve Research Map — papers, mechanisms, and coverage gaps |
| /en/resource-library/ | /resource-library/ | Self Evolve Resource Library — corpus scope, evidence layers, and limits |
| /en/star-growth/ | /star-growth/ | GitHub Star Growth Pilot — coverage before momentum |
| /en/survey/ | /survey/ | Self-Evolving AI Agents Survey Snapshot — working taxonomy and claim limits |
| /en/topics/ | /topics/ | Self-Evolving AI Agents Topic Guide — English reader path |
| /en/topics/code-evolution-benchmark/ | /topics/code-evolution-benchmark/ | Code Evolution Benchmark Matrix |
| /en/topics/five-evolution-loops/ | /topics/five-evolution-loops/ | Five Evolution Loops for Self-Evolving AI Agents |
| /en/topics/self-evolving-ai-agents/ | /topics/self-evolving-ai-agents/ | What Counts as a Self-Evolving AI Agent? |
| /en/value-lsh/ | /value-lsh/ | Value LSH — evidence triage, not a final ranking |
| /reports/github-topic-indexing-readiness/ |  | GitHub Topic Indexing Readiness Audit / Self Evolve Reports |
| /reports/live-publication-readiness/ |  | Live Publication Readiness Audit / Self Evolve Reports |
| /reports/survey-publication/01-field-map/ |  | Slice 01 — A Map of Self-Evolving AI Agents / Self Evolve Survey Publication |
| /reports/survey-publication/02-true-vs-pseudo-evolution/ |  | Slice 02 — Which AI Agents Actually Self-Improve? / Self Evolve Survey Publication |
| /reports/survey-publication/03-evaluation-bottleneck/ |  | Slice 03 — The Evaluation Problem in Self-Evolving AI Agents / Self Evolve Survey Publication |
| /reports/survey-publication/04-demo-to-production-gap/ |  | Slice 04 — Why Self-Evolving Agents Break After the Demo / Self Evolve Survey Publication |
| /reports/survey-publication/05-open-source-evidence-atlas/ |  | Slice 05 — An Evidence Atlas for Self-Evolving AI Projects / Self Evolve Survey Publication |

## 中文优先但缺少英文 alternate 的样本 / Sample Chinese-First Routes Without English Alternate

| 路由 / Route | Kind | Title |
|---|---|---|
| /benchmark/ | site-page | Benchmark &amp; Evaluation — AI 自进化评估体系 |
| /blog/adas-to-dgm-evolution/ | blog | ADAS 到 DGM：智能体架构自动搜索的进化之路 / Self Evolve |
| /blog/agent-evolution-layer/ | blog | Reflexion 深度解读：用语言反思替代参数更新 / Self Evolve |
| /blog/agent-frameworks-evolution-layer/ | blog | Agent 框架不是自进化：AutoGPT、MetaGPT、AutoGen、CrewAI、DSPy、LangGraph 差在哪 / Self Evolve |
| /blog/ai-self-evolution-from-concept-to-implementation/ | blog | AI 自我进化：从概念到实现的证据导读 / Self Evolve |
| /blog/ai-self-evolution-map/ | blog | 什么是 AI 自我进化？一张面向开发者的地图 / Self Evolve |
| /blog/alphaevolve-deep-dive/ | blog | AlphaEvolve 深度解析：从 MAP-Elites 到算法发现证据 / Self Evolve |
| /blog/anthropic-dynamic-workflows-agent-swarm-evolve/ | blog | Anthropic Dynamic Workflows：为什么它是 Agent-Swarm Evolve 的热点证据 / Self Evolve |
| /blog/anthropic-may-2026-agentops-platform-shift/ | blog | Anthropic 五月热点：从 Opus 4.8、Stainless 到 965B 估值，AgentOps 栈正在成型 / Self Evolve |
| /blog/code-self-improvement-playbook/ | blog | 代码自我改进：从智能体补丁到回归门禁 / Self Evolve |
| /blog/cross-domain-research-map/ | blog | AI 自我进化的跨领域图谱：从 AutoML 到 Agent 自修改 / Self Evolve |
| /blog/evaluation-benchmarks-for-self-evolving-agents/ | blog | 自进化 Agent 怎么评估：别只看分数，要看改进是否可复现 / Self Evolve |
| /blog/evolutionary-code-and-algorithm-discovery/ | blog | 进化式代码与算法发现：为什么 AlphaEvolve、DGM 和 OpenEvolve 重要 / Self Evolve |
| /blog/evolutionary-computation-llm-survey/ | blog | 进化计算 × 大语言模型：2024-2025 前沿导读 / Self Evolve |
| /blog/five-evolution-loops-for-ai-agents/ | blog | 自进化 Agent 的五个循环：反馈、搜索、评估、反思与种群 / Self Evolve |
| /blog/future-roadmap-for-self-evolving-ai-agents/ | blog | 自进化 AI 的未来路线图：评估器、记忆、安全、组合性和生产治理 / Self Evolve |
| /blog/how-to-build-self-evolving-agent/ | blog | 如何构建自我进化的 AI Agent：最小闭环设计笔记 / Self Evolve |
| /blog/llm-as-evolutionary-optimizer/ | blog | LLM 即优化器：从 OPRO 到 FunSearch 的进化式编码 / Self Evolve |
| /blog/llm-five-self-improvement-paradigms/ | blog | LLM 自我改进的五种范式：从 Self-Refine 到 Absolute Zero / Self Evolve |
| /blog/open-source-self-evolving-projects/ | blog | 开源自进化 AI 项目巡礼：10 个可复核的仓库 / Self Evolve |
| /blog/researcher-network/ | blog | Self Evolve 研究者图谱：谁在推动 AI 自我进化 / Self Evolve |
| /blog/self-evolve-project-index/ | blog | Self Evolve GitHub 项目索引如何阅读 / Self Evolve |
| /blog/self-evolving-ai-introduction-static-to-evolving-agents/ | blog | AI Agent 自进化入门：从静态模型到会改进自己的系统 / Self Evolve |
| /blog/self-improvement-methods-for-llm-agents/ | blog | LLM 自我改进方法全图：Self-Refine、Reflexion、RISE 到 Absolute Zero / Self Evolve |
| /blog/selfevolve-paper-deep-dive/ | blog | SelfEvolve 论文深度解读：LLM 如何实现代码自我改进 / Self Evolve |
| /blog/tag/%E4%BB%A3%E7%A0%81%E8%87%AA%E6%88%91%E6%94%B9%E8%BF%9B/ | blog-tag | 标签「代码自我改进」的博客 — Self Evolve |
| /blog/tag/%E5%88%86%E7%B1%BB%E4%BD%93%E7%B3%BB/ | blog-tag | 标签「分类体系」的博客 — Self Evolve |
| /blog/tag/%E5%8F%8D%E6%80%9D%E8%AE%B0%E5%BF%86/ | blog-tag | 标签「反思记忆」的博客 — Self Evolve |
| /blog/tag/%E5%8F%AF%E8%A7%82%E6%B5%8B%E6%80%A7/ | blog-tag | 标签「可观测性」的博客 — Self Evolve |
| /blog/tag/%E5%8F%AF%E9%9D%A0%E6%80%A7/ | blog-tag | 标签「可靠性」的博客 — Self Evolve |
| /blog/tag/%E5%93%A5%E5%BE%B7%E5%B0%94%E6%9C%BA/ | blog-tag | 标签「哥德尔机」的博客 — Self Evolve |
| /blog/tag/%E5%AD%A6%E6%9C%AF%E5%9B%BE%E8%B0%B1/ | blog-tag | 标签「学术图谱」的博客 — Self Evolve |
| /blog/tag/%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE/ | blog-tag | 标签「开源项目」的博客 — Self Evolve |
| /blog/tag/%E6%8A%80%E6%9C%AF%E5%9B%BE%E8%B0%B1/ | blog-tag | 标签「技术图谱」的博客 — Self Evolve |
| /blog/tag/%E6%8A%80%E6%9C%AF%E6%95%99%E7%A8%8B/ | blog-tag | 标签「技术教程」的博客 — Self Evolve |
| /blog/tag/%E6%99%BA%E8%83%BD%E4%BD%93%E6%9E%B6%E6%9E%84%E6%90%9C%E7%B4%A2/ | blog-tag | 标签「智能体架构搜索」的博客 — Self Evolve |
| /blog/tag/%E6%99%BA%E8%83%BD%E4%BD%93/ | blog-tag | 标签「智能体」的博客 — Self Evolve |
| /blog/tag/%E6%9C%AA%E6%9D%A5%E8%B7%AF%E7%BA%BF%E5%9B%BE/ | blog-tag | 标签「未来路线图」的博客 — Self Evolve |
| /blog/tag/%E7%94%9F%E4%BA%A7%E9%83%A8%E7%BD%B2/ | blog-tag | 标签「生产部署」的博客 — Self Evolve |
| /blog/tag/%E7%A0%94%E7%A9%B6%E8%80%85%E7%BD%91%E7%BB%9C/ | blog-tag | 标签「研究者网络」的博客 — Self Evolve |

## 后续动作 / Required Follow-Up

- 保持当前英文路线诚实：`/en/`, `/en/topics/`, `/en/paper/`, `/en/projects/`, `/en/reports/`, `/en/value-lsh/`, `/en/star-growth/`, `/en/evolve-agi-index/`, `/en/resource-library/`, `/en/survey/`, `/en/blog/`, `/en/research/`, and `/en/graph/` 是核心英文导读路线；内容是否完全同证据链仍需人工审查，不能把它说成全站长尾翻译完成。 / Keep the current English path honest: these are core English guide routes. Content-level evidence parity still requires manual review, and this must not be described as full long-tail translation parity.
- 只有当页面有英文 route、人工确认的同证据链摘要、同等 claim boundary、限制和下一步时，才把中文优先页面升级为 bilingual。 / Promote a Chinese-first page to bilingual only after it has an English route plus manually reviewed same-evidence summary, claim boundary, limitations, and next step.
- 继续补长尾 parity：博客正文、博客标签、项目详情卡、研究笔记、项目/报告页、benchmark 页、可视化页和 survey 子页都需要英文同证据链镜像，或明确标注 non-parity。 / Continue long-tail parity before calling website i18n complete.
- 维护侧每次 public site 或 metadata 改动后重跑本审计；读者侧只需要看状态、数量和缺口，不需要理解脚本流程。 / Maintainers should re-run this audit after public-site or metadata changes; readers only need the status, counts, and remaining gaps.
