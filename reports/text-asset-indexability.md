# 文字资产可索引覆盖审计 / Text Asset Indexability Audit

Generated: 2026-06-05T17:48:31.361Z

Canonical host: https://agent-evolution.com

Status: **INCOMPLETE**

## 一句话结论 / One-Sentence Verdict

中文：站点 sitemap 里的页面本身已经具备可索引 metadata，但这不等于仓库里的所有 Markdown、MDX、TeX 文字资产都已经变成公开、审查过、可被 Google 抓取的 HTML 页面。

Generated sitemap routes are indexable, but repository-wide text coverage is incomplete: many processed analyses, project cards, paper reviews, drafts, and reports are not yet mapped to public Google-indexable HTML.

## 三句话证据 / Three-Sentence Evidence

1. 本地构建观察到 983 条 sitemap URL，其中 route-level Google indexability 审计已经覆盖生成页面；这只证明“已生成页面具备本地可索引资格”，不证明线上 HTTPS 可达或 Google 已抓取。 / The local build exposes 983 sitemap URLs, and the route-level audit checks generated pages; this supports local indexability eligibility only, not live HTTPS reachability or confirmed Google crawling.
2. 全仓库共有 18131 个文本文件，剔除 raw 和外部镜像后仍有 2154 个自有文字资产；其中只有 567 个被映射到公开 HTML/source route。 / The repository has 18131 text files and 2154 owned non-raw, non-mirror assets; only 567 are mapped to public HTML/source routes.
3. 因此当前 blocker 不是单个页面缺少 title/description，而是 processed 分析、项目卡、论文 review、draft 和部分 reports 还没有经过公开页面包装、双语摘要和文案/证据审查。 / The blocker is not a single missing title or description. Many processed analyses, project cards, paper reviews, drafts, and reports still need public wrappers, bilingual summaries, and copy/evidence review.

In English: generated sitemap pages are locally indexable, but repository-wide text coverage remains incomplete because many owned Markdown/MDX/TeX assets are still processed material, drafts, reviews, or reports without reviewed public HTML routes.

## 边界 / Boundary

This audit classifies text assets. It does not mean raw sources or external mirrors should be published directly; raw stays raw and mirrors stay mirrors. It also does not clear the live custom-domain HTTPS blocker.

## 为什么需要这个审计 / Why This Exists

Google SEO、GitHub topic、GitHub Search 是三套不同系统。Google 主要看线上可访问页面、sitemap、canonical、robots 和 HTTPS；GitHub topic 列表主要看远端仓库 topics、description、README 渲染、搜索索引和 GitHub 自己的刷新节奏；本报告只衡量“仓库文字资产是否已经进入公开可索引页面链路”。

The route-level SEO audits prove that generated sitemap pages have indexable metadata. They do not prove that every valuable Markdown, MDX, or TeX text asset in the repository has been promoted into a public, reviewed, Google-indexable HTML route. This audit closes that measurement gap without claiming that Google has already crawled or indexed the pages.

## 术语表 / Glossary

| Term | Reader meaning |
|---|---|
| public-google-indexable-source | 已有公开 HTML route、进入 sitemap，并通过本地 indexability 审计的源文件。 / A source file already represented by a public HTML route in the sitemap with a passing route audit. Reader meaning: it can be discovered as a public page, though this still does not prove Google has indexed it. |
| github-readme-indexable / github-root-indexable | GitHub 仓库首页能直接看到的 README 或根索引，不等于 Google 已收录。 / A root README or index visible on GitHub. Reader meaning: GitHub visitors can see it, but Google indexing and GitHub topic ranking are separate. |
| processed-analysis-unmapped | 已加工分析，但还没有被包装成公开页面。 / Processed analysis without a public HTML wrapper. Reader meaning: useful research exists, but it is not yet a reader-ready asset. |
| processed-project-card-unmapped | 项目卡/model-card 类资产仍在仓库层，还没有对应公开 HTML 页面。 / A project/model-card asset without a public page. Reader meaning: the project is tracked, but not yet promoted into the public reading path. |
| paper-review-unmapped | 论文 review 仍是加工素材，还不是可引用的公开文章。 / A paper review that remains processed material. Reader meaning: treat it as internal evidence work, not a finished article. |
| raw-source-do-not-publish-directly | 原始素材只做证据源，不能直接改写或批量公开。 / Raw source material kept for traceability. Reader meaning: it supports claims but should not be published directly as polished copy. |
| external-mirror | 外部仓库镜像，只用于本地研究和引用，不作为本站文章发布。 / A local mirror of an external repository. Reader meaning: it helps research and verification, but it is not Self Evolve public content. |
| unmapped / unrouted | 还没有明确的公开 URL、双语摘要、SEO metadata 和审查状态。 / No clear public URL, bilingual summary, SEO metadata, or review status yet. Reader meaning: it still needs editorial work before it can serve readers. |

## 指标 / Metrics

| Metric | Count |
|---|---:|
| Text files total | 18131 |
| Owned text files excluding raw and external mirrors | 2154 |
| Public Google-indexable source files | 567 |
| GitHub root/README assets | 4 |
| Unpublished candidate files shown in queue | 80 |
| Sitemap URLs observed | 983 |

## 状态计数 / Status Counts

| Status | Files |
|---|---:|
| external-mirror | 13542 |
| generated-data-index | 10 |
| github-readme-indexable | 3 |
| github-root-indexable | 1 |
| ops-or-docs | 89 |
| paper-or-survey-draft | 89 |
| paper-review-unmapped | 171 |
| processed-analysis-unmapped | 161 |
| processed-project-card-unmapped | 857 |
| public-google-indexable-source | 567 |
| public-report-source-unmapped | 1 |
| raw-source-do-not-publish-directly | 2435 |
| results-report-unmapped | 11 |
| unclassified-text | 29 |
| work-internal | 165 |

## 最高优先级待发布队列 / Highest-Priority Unpublished Candidates

Public-reader meaning: these files are not failures by themselves. They are the next queue for deciding what deserves a public wrapper, bilingual same-evidence summary, and copy/evidence review.

| Path | Status | Words | Priority | Title |
|---|---|---:|---:|---|
| reports/cross-validation-report.md | results-report-unmapped | 3841 | 105 | Cross-Validation Report: Academic Paper Claims vs. Community Reality |
| reports/propagation-chain-evidence.md | results-report-unmapped | 2475 | 105 | 传播链深度追踪：跨平台证据汇编 |
| reports/public-i18n-route-audit.md | results-report-unmapped | 1398 | 105 | Public I18N Route Audit |
| research/repo-classification.md | processed-analysis-unmapped | 26938 | 90 | Repo 自动分类与技术栈分析（raw-github 681） |
| analysis/github-project-data-analysis.md | processed-analysis-unmapped | 18837 | 90 | GitHub Project Data Analysis |
| research/agent-self-evolution-papers-detailed.md | processed-analysis-unmapped | 6461 | 90 | Agent Self-Evolution / Auto-Improvement: Detailed Paper Reference (108 Papers) |
| research/blog-author-profiles.md | processed-analysis-unmapped | 5556 | 90 | Blog Author / Publisher Profiles — Top 50 Enrichment |
| research/blog-author-profiles-batches/batch-01.md | processed-analysis-unmapped | 4806 | 90 | Blog Author Profiles Batch 01 |
| research/agent-self-evolution-papers-detailed-ZH.md | processed-analysis-unmapped | 4538 | 90 | Agent 自演化 / 自我改进：详细论文参考（100篇论文） |
| analysis/frontier-value-queue.md | processed-analysis-unmapped | 4040 | 90 | Frontier Value Queue |
| research/evolution-method-chain-formal-analysis.md | processed-analysis-unmapped | 3831 | 90 | Evolution Method Chain: Formal Analysis of Self-Evolving AI Agents |
| research/blog-author-profiles-batches/batch-03.md | processed-analysis-unmapped | 3751 | 90 | Blog Author Profiles Batch 03 |
| research/blog-author-profiles-batches/batch-02.md | processed-analysis-unmapped | 3605 | 90 | Blog Author Profiles Batch 02 |
| research/self-evolution-taxonomy.md | processed-analysis-unmapped | 3311 | 90 | Self-Evolution Method Taxonomy: A Formal Classification of Agent Self-Improvement |
| research/blog-author-profiles-all.md | processed-analysis-unmapped | 2927 | 90 | Blog Author Profiles — Full Coverage / 博客作者画像全量覆盖 |
| research/peer-reviews/review-novelty-contribution.md | processed-analysis-unmapped | 2651 | 90 | arXiv Peer Review: Innovation & Contribution |
| research/blog-author-profiles-targeted.md | processed-analysis-unmapped | 2524 | 90 | Blog Author Profiles — Targeted AnySearch Verification (Top 50) |
| research/formal-framework-agent-evolution.md | processed-analysis-unmapped | 2520 | 90 | Agent Evolution 形式化框架：共性抽象、痛点分类与判断体系 |
| research/author-network.md | processed-analysis-unmapped | 2194 | 90 | Self Evolve Research: Author Network & Collaboration Graph |
| research/peer-reviews/review-rigor-methodology.md | processed-analysis-unmapped | 2169 | 90 | arXiv Peer Review: Rigor & Methodology |
| analysis/value-screening-dual-chain-knowledge-base.md | processed-analysis-unmapped | 2122 | 90 | Value Screening and Dual-Chain Knowledge Base |
| analysis/frontier-projects/inclusionai-agenticlearning-dual-chain.md | processed-analysis-unmapped | 2087 | 90 | inclusionAI/AWorld-RL Dual-Chain Deep Dive |
| analysis/frontier-projects/sethkarten-continual-harness-dual-chain.md | processed-analysis-unmapped | 1982 | 90 | sethkarten/continual-harness Dual-Chain Deep Dive |
| research/formalization/01-unified-formal-model.md | processed-analysis-unmapped | 1974 | 90 | Unified Formal Model for Self-Evolving Systems |
| analysis/frontier-projects/langchain-ai-open-swe-dual-chain.md | processed-analysis-unmapped | 1905 | 90 | langchain-ai/open-swe Dual-Chain Deep Dive |
| research/blog-author-profiles-anysearch-validation.md | processed-analysis-unmapped | 1848 | 90 | AnySearch Author Enrichment Validation Batch 1 |
| analysis/frontier-projects/krzysztofdudek-researcherskill-dual-chain.md | processed-analysis-unmapped | 1809 | 90 | krzysztofdudek/ResearcherSkill Dual-Chain Deep Dive |
| analysis/frontier-projects/gepa-ai-gepa-dual-chain.md | processed-analysis-unmapped | 1771 | 90 | gepa-ai/gepa Dual-Chain Deep Dive |
| analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md | processed-analysis-unmapped | 1764 | 90 | gepa-ai/optimize-anything-artifact Dual-Chain Deep Dive |
| research/cross-reference.md | processed-analysis-unmapped | 1716 | 90 | Self Evolve: Cross-Domain Reference Analysis |
| research/formalization/03-differentiation-analysis.md | processed-analysis-unmapped | 1711 | 90 | Differentiation Analysis: What Separates Good from Bad Self-Evolution |
| analysis/frontier-projects/tylerdotai-meta-harness-evolver-dual-chain.md | processed-analysis-unmapped | 1696 | 90 | tylerdotai/meta-harness-evolver Dual-Chain Deep Dive |
| research/formalization/04-improvement-guarantees.md | processed-analysis-unmapped | 1667 | 90 | Improvement Guarantee Conditions for Self-Evolving Systems |
| research/formalization/02-pattern-taxonomy.md | processed-analysis-unmapped | 1649 | 90 | Common Pattern Taxonomy for Self-Evolving Systems |
| research/peer-reviews/review-clarity-presentation.md | processed-analysis-unmapped | 1529 | 90 | arXiv Peer Review — Clarity & Presentation Perspective |
| analysis/github-project-data-analysis.tex | processed-analysis-unmapped | 1515 | 90 | github-project-data-analysis.tex |
| analysis/frontier-projects/modelscope-agentevolver-dual-chain.md | processed-analysis-unmapped | 1513 | 90 | modelscope/AgentEvolver Dual-Chain Deep Dive |
| analysis/frontier-projects/synaptent-aragora-dual-chain.md | processed-analysis-unmapped | 1421 | 90 | synaptent/aragora Dual-Chain Deep Dive |
| analysis/value-evidence-repair-queue.md | processed-analysis-unmapped | 1413 | 90 | Value Evidence Repair Queue |
| analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md | processed-analysis-unmapped | 1396 | 90 | JARVIS-Xs/SE-Agent Dual-Chain Deep Dive |

## 读者下一步 / Reader Next Steps

- 如果你只想判断网站是否能被 Google 抓取，先看 `reports/google-indexable-routes.md` 和 `reports/live-publication-readiness.md`。
- 如果你想判断 GitHub topic 为什么还没显示，先看 `reports/github-topic-indexing-readiness.md`；topic 收录和 Google SEO 不是一回事。
- 如果你想判断“仓库里的文字是否都已经公开可索引”，使用本报告的候选队列，而不是只看 sitemap 数量。

## 维护下一步 / Required Follow-Up

- Keep raw sources raw: do not rewrite `raw-*` material as processed public copy.
- Do not expose external mirrors from `repos/` or `projects/repos/` as site articles.
- Promote high-value processed analyses, reports, paper reviews, and project cards through reviewed HTML wrappers before calling them Google-indexable assets.
- Pair promotion with bilingual same-evidence summaries and the public-copy review gate.
- Re-run this audit after every documentation, report, site, or paper change.
