# Wiki Log

> Append-only chronological record. Format: `## [date] operation | title`

## [2026-05-26] init | Wiki structure created
- Created directory structure: entities/, concepts/, sources/, synthesis/
- Created index.md and log.md
- Wiki pattern adopted as workspace rule per user directive

## [2026-05-26] ingest | LLM Wiki pattern documentation
- Source: user direct input (task h88e4825i)
- Key insight: three-layer architecture (raw → wiki → schema)
- Operations: ingest, query, lint
- Special files: index.md (content catalog), log.md (chronological record)

## [2026-05-26 12:05] 根因 | git reset 导致文件消失（非agent问题）

**操作:** Master 验证 reflog 确认根因
**详情:**
- 两次 `git reset --hard HEAD` 确认: 09:47 + 10:53 (agent工作期间!)
- 所有 09:47-10:53 间写入的未提交文件被清除
- Scribe L6 跟踪的9个"消失"文件实际被reset销毁
- 38个stash可能包含crashed supervisor的auto-stash恢复数据
- **审计修正:** 文件消失原因从"并发agent操作"更正为"git reset"

**新铁律 (立即生效):**
1. 禁止任何agent执行 `git reset` (任何形式)
2. 禁止 `git checkout .` 或 `git restore .`
3. 禁止 `git clean -f`
4. 文件写入后应 `git add + git commit` 保护

## [2026-05-26 12:15] ingest | Employee Social Intelligence Mining

**操作:** Researcher (社交情报挖掘) 写入 work/wiki/sources/employee-social-intelligence.md
**详情:**
- X/Twitter: Jeff Clune DGM (@jeffclune), Abigail See AlphaEvolve (@abigail_e_see), Karpathy Anthropic move (@karpathy)
- LinkedIn: Meta MSL 44-person team (leaked by @deedydas), Recursive startup founding team, Anthropic net inflow
- GitHub: EvoAgentX framework, Awesome-Self-Evolving-Agents, CORAL, AgentEvolver
- Blogs: Sakana DGM, DeepMind AlphaEvolve (2 posts), Vector Institute Clune profile
- Sentiment: DGM extremely positive (#1 discussed May 2025), Meta MSL mixed, AlphaEvolve very positive
**信任链:** 所有条目附带原始link
**Rank:** ⬤⬤⬤⬤
**局限:** 未覆盖中国平台（WeChat/知乎/B站）; 多次遇到429 rate limit

## [2026-05-26 ~13:00] ingest | Mechanism Framework Wiki Population

**操作:** Architect (wiki schema设计) 写入 5 concept pages + 1 synthesis page
**详情:**
- M1 [自我观察](concepts/self-observation.md): 轨迹/反思/诊断/元认知 4子机制, Reflexion+ACE 案例
- M2 [自我评估](concepts/self-evaluation.md): 自评/环境反馈/程序化验证/元评估/人类审查 5子机制, 可靠性谱系
- M3 [自我改进](concepts/self-improvement.md): 提示词→记忆→权重→代码 4层深度谱系, 统一形式化, DGM+Voyager 案例
- M4 [多智能体协作进化](concepts/multi-agent-coevolution.md): 3种拓扑形态, 5子机制, DGM Archive+EvoMAC 案例
- M5 [涌现行为分析](concepts/emergent-behavior.md): 正向/负向涌现案例, AlphaEvolve 56年突破 vs Echo Trap
- [机制框架](synthesis/mechanism-framework.md): 全景DAG + 8系统×5机制覆盖矩阵 + 97痛点映射
**Sources:** survey/ch1-ch8, paper-reviews (6 reviews), work/research/mechanism-analysis-framework.md (L1产出)
**信任链:** 每条声明标注 Source: survey/chX 或 paper-reviews/review-XXX
**Rank:** ⬤⬤⬤⬤⬤

## [2026-05-26 12:15] build | Survey LaTeX 编译修复 + Wiki概念填充

**操作:** Implementer (XeLaTeX编译+图表) 完成survey编译修复和wiki扩展
**详情:**
- survey/latex/main.tex: `\bibliography{references}` → `\bibliography{references,references-aliases}`
- 创建 references-aliases.bib: 50+ 别名条目解决跨章节引用键不一致
- 修复 selfrewarding2024 author字段: `Meta, and others` → `{Meta} and others`
- 修复 ch5-supplement.tex 3个重复label: 加 `-supplement` 后缀
- 最终编译: 177页 PDF, 1.2MB, 0 BibTeX warnings, 0 multiply-defined labels
- Wiki新增3个概念页: reward-based-evolution, self-play-evolution, architecture-search
**产出:**
- `survey/latex/main.pdf` (177 pages)
- `survey/latex/references-aliases.bib`
- `work/wiki/concepts/reward-based-evolution.md`
- `work/wiki/concepts/self-play-evolution.md`
- `work/wiki/concepts/architecture-search.md`

## [2026-05-26 ~14:00] ingest | Raw-Papers Mechanism Deep-Dive (128论文)

**操作:** Researcher (L3论文机制) 写入 wiki source page + work/research 完整分析
**详情:**
- [Raw-Papers Mechanism Analysis](sources/raw-papers-mechanism-analysis.md): 7机制族(F1-F7), Top-10论文, 5引用谱系(Mermaid DAG), T1-T4证据分级, 效果/实现分类, 研究缺口
- [papers-mechanism-analysis.md](../research/papers-mechanism-analysis.md): 700行完整分析(含Appendix A: 50+论文映射表)
- 深读30+核心论文评审，6并行agent读取剩余论文
- 交叉引用: paper-drafts/ch2-ch4, essential-classification.md
**Sources:** raw-papers/(128), paper-reviews/(137), paper-drafts/(8 chapters)
**信任链:** 所有声明标注[KNOWN]/[INFERRED]/[UNVERIFIED]，arXiv ID可追溯
**Rank:** ⬤⬤⬤⬤
**矛盾/更新:** 无矛盾。F1-F7与Architect的M1-M5互补（论文视角 vs 框架视角）

## [2026-05-26 ~14:30] ingest | work/research/ → wiki/sources/ Migration

**操作:** Implementer (cmplze8ih4nd9) 将 work/research/ 内容研究文件迁移为 wiki source 页
**详情:**
8个研究文件创建对应wiki source页（结构化摘要+交叉引用+信任链）：

| Research File | Wiki Source Page | Rank |
|---|---|---|
| ai-talent-flow-analysis.md | sources/talent-flow-analysis.md | A |
| anthropic-talent-movement.md | sources/anthropic-talent-movement.md | A |
| china-self-evolution-teams.md | sources/china-self-evolution-teams.md | A |
| combined-talent-landscape.md | sources/combined-talent-landscape.md | A |
| material-ranking-framework.md | sources/material-ranking-framework.md | A |
| review-mechanism-insights.md | sources/review-mechanism-insights.md | A |
| talent-capital-structure.md | sources/talent-capital-structure.md | A |
| paper-undercoverage-followup-*.md | sources/paper-undercoverage-followup.md | B |

已存在wiki映射（无需新建）:
- raw-github-mechanisms.md → sources/raw-github-mechanism-analysis.md ✅
- papers-mechanism-analysis.md → sources/raw-papers-mechanism-analysis.md ✅
- mechanism-analysis-framework.md → synthesis/mechanism-framework.md ✅

**Index更新:** sources 3→11, index.md 更新完成
**交叉引用:** 每个 source 页链接到相关 concept/synthesis 页 + 原始 research 文件

## [2026-05-26 ~13:10] lint | Full Wiki Lint (Implementer cmplzedm14ndz)

**操作:** Full wiki health check — frontmatter, orphans, index accuracy, cross-references, UNVERIFIED claims, schema drift
**详情:**

### Issues Found & Fixed

| Category | Issue | Count | Status |
|----------|-------|-------|--------|
| Missing frontmatter | source pages without YAML frontmatter | 3 | ✅ Fixed |
| Index missing entries | files on disk but not in index.md | 11 | ✅ Fixed |
| Orphan pages | 0 inbound cross-references | 13 | ⚠️ Logged |
| Index stats wrong | Entities=0 (actual=8), Sources=11 (actual=14) | 2 | ✅ Fixed |
| UNVERIFIED claims | [UNVERIFIED] markers in content | 1 | ⚠️ Logged |
| Schema drift | schema-expected dirs/files not yet created | 11 | ⚠️ Future work |

### Orphan Pages (no inbound [[wikilinks]] from other pages)
- `concepts/architecture-search.md` — 0 inbound
- `concepts/llm-agent-knowledge-delivery.md` — 0 inbound
- `synthesis/talent-landscape.md` — 0 inbound
- All 10 source pages under `sources/` — 0 inbound (expected: source pages are linked from index, not from concept pages)
- Note: 3 source pages (blogs-brainstorm, cross-pollination, papers-brainstorm) had no outbound cross-references either

### UNVERIFIED Claims
- `sources/employee-social-intelligence.md`: "Chinese self-evolution researchers (Qian, Zhang, Yin) have no public X presence" — [UNVERIFIED] — cannot verify without WeChat/知乎 access

### Schema Drift (expected by schema but not yet created)
- Concepts: `prompt-evolution.md`, `memory-evolution.md` (partially covered by self-improvement.md)
- Sources: `github-digest.md`, `papers-digest.md`, `social-digest.md`, `blogs-digest.md`
- Synthesis: `sv-selfevolution-landscape.md`, `brainstorm-*.md`
- Entities subdirs: `people/`, `orgs/`, `projects/`, `papers/` (flat structure used instead)

### Search Index Status
- 20 pages in search-index.json vs 33 on disk → 13 pages not indexed
- Missing: 3 new concepts (reward-based, self-play, architecture-search) + 10 source/migration pages
- Action: regenerate search index after lint fixes

### Frontmatter Fixes Applied
- `sources/employee-social-intelligence.md`: Added YAML frontmatter (title, type, rank, tags, sources)
- `sources/raw-github-mechanism-analysis.md`: Added YAML frontmatter
- `sources/raw-papers-mechanism-analysis.md`: Added YAML frontmatter

### Index Fixes Applied
- Added 8 entity entries (anthropic, google-deepmind, jeff-clune, meta-fair, noah-shinn, openai, sakana-ai, shengran-hu)
- Added 3 source entries (blogs-brainstorm, cross-pollination, papers-brainstorm)
- Updated stats: Entities 0→8, Sources 11→14

**产出:** index.md updated, 3 source files frontmatter fixed, log.md lint entry

## [2026-05-26 ~13:30] ingest | Raw-Social & Blogs Mechanism Deep-Dive

**操作:** Researcher (cmplzerl54ngt) 深挖raw-social/和raw-blogs/提取机制洞察
**详情:**
- 创建 wiki source page: `sources/raw-social-blogs-mechanism-analysis.md`
- 7 dominant patterns (P1-P7): 从empirical validation到budget constraint
- 6 cross-validated method families (Mermaid DAG)
- 8 ranked pain points (evaluation signal quality = #1 universal bottleneck)
- Cross-validation table: social claims vs academic reality (4 Large gaps, 3 Medium)
- Official company positions: OpenAI/Anthropic/LangChain/DeepMind/Meta/Sakana
- HN community signal: Gödel Agent (81pts), DGM (195pts), recursive debate (129pts)
- Chinese platform insights: Hermes as canonical example, Chase 3-layer framework dominant
**Sources:** raw-social/(612 pairs + 31 batches), raw-blogs/(652 pairs), raw-social-rank/(234 items)
**补充研究文件:** work/research/social-mechanism-insights.md (已有, 355行)
**Index更新:** Sources 14→15
**交叉引用:** 链接到Papers/GitHub analysis + self-improvement/emergent-behavior/architecture-search concepts

## [2026-05-26 20:30] ingest | LLM Wiki Build — Canonical Digests + Frontmatter Fix

**Operation**: Created 4 canonical digest pages per schema + fixed 3 V1-rank pages
**New pages**:
- sources/github-digest.md (531 projects, 7-class taxonomy, 5 structural factors)
- sources/papers-digest.md (201 files/128 papers, F1-F7 families, Top-10)
- sources/social-digest.md (1298+468 files, 6 categories, trend signals)
- sources/blogs-digest.md (1308 files, 6 categories, ~1.5% sampled)
**Fixed**: blogs-brainstorm, cross-pollination, papers-brainstorm — V1→B rank, added sources fields
**Index updated**: Sources 25→29, V1 ranks eliminated
**Search index**: Regenerated (node scripts/generate-wiki-index.mjs)
**Executor**: builder (cmplzf51c4njhmr23bi4324fy)

## [2026-05-26 ~15:00] ingest | Additional Research→Wiki Migrations

**操作:** Multiple agents created additional wiki source pages
**详情:**

| Wiki Source Page | Origin | Rank | Content |
|---|---|---|---|
| projects-evolution-grading.md | work/research/projects-evolution-grading.md | A | 43 model cards L0-L4 grading |
| project-evolution-grading-full.md | work/research/project-evolution-grading.md | A | 470 projects L0-L5 full grading + 15 case studies |
| raw-github-mechanisms-full.md | work/research/raw-github-mechanisms.md | A | 365 projects deep-dive complete: 7-class + 15 cases + TRUE/PSEUDO |
| review-mechanism-insights-enhanced.md | work/research/review-mechanism-insights-enhanced.md | A | 60 reviews: 16 core insights (6 original + 10 new) |
| review-mechanism-insights-expanded.md | work/research/review-mechanism-insights-expanded.md | A | 111/137 reviews (81%): 12 insights + 12 method families |
| essential-taxonomy-framework.md | work/research/essential-classification.md + survey | A | 5D unified framework: method×effect×impl×evolution-order×evidence |

**Index:** Sources 15→29 (cumulative across all agent contributions)

## [2026-05-26 21:01] lint | Index Reconciliation

**操作:** Researcher (cmplzerl54ngt) verified index vs disk consistency
**详情:**
- Found `essential-taxonomy-framework.md` on disk but missing from index — added
- Verified all 29 index entries have corresponding files
- Verified all 29 source files have index entries
- Updated log to cover 6 previously unlogged source pages
- Stats confirmed: 8 entities, 9 concepts, 29 sources, 2 synthesis

## [2026-05-26 23:50] synthesis | Current-Value Ranking Reanalysis

**操作:** Recomputed GitHub project ranking after user identified a ranking contradiction: a 2023 project ranked first despite a 50% time-weight goal.
**详情:**
- Added `synthesis/current-value-ranking-reanalysis.md`
- Corrected ranking formula: `0.50*time + 0.20*mechanism + 0.15*evidence + 0.10*adoption + 0.05*usefulness`
- Changed local mirror first commit from creation fallback to `first_observed_at`
- Added unknown `created_at` caveat and capped missing-date time score at 45/100
- Public `/rankings/` now reads `recency_weighted_project_ranking`
**Results:** Top project becomes `modelscope/AgentEvolver`; `stanfordnlp/dspy` moves to rank 14 under current-value scoring.

## [2026-05-30 01:21] concept | Agent-Swarm Evolve

**操作:** Added `agent-swarm evolve` as a content part under multi-agent / harness after direct user input.
**详情:**
- Created `analysis/agent-swarm-evolve.md` as processed analysis for swarm organization evolution.
- Created `concepts/agent-swarm-evolve.md` with evidence from CORAL, GPTSwarm, metaswarm, swarmclaw, OpenClaw Multi-Agent Team, and Insight Swarm raw captures.
- Updated `concepts/multi-agent-coevolution.md` to link the organization-level swarm-evolution part.
- Updated README, README-ZH, README-EN, and site homepage entry points.
**产出:** `analysis/agent-swarm-evolve.md`, `work/wiki/concepts/agent-swarm-evolve.md`

## [2026-05-30 01:45] source+seo | Anthropic May 2026 AgentOps Hotspot

**操作:** Combined current Anthropic hotspot news with the Self Evolve theme.
**详情:**
- Created `sources/anthropic-may-2026-agentops.md` with official sources for Opus 4.8, Dynamic Workflows, Stainless, containment engineering, Small Business workflows, and Series H.
- Published two SEO blog posts: Dynamic Workflows as Agent-Swarm Evolve evidence, and Anthropic's May 2026 AgentOps platform shift.
- Updated Anthropic entity page and README trend trackers so the hotspot maps to Agent-Swarm Evolve, tool connectivity, containment, cost, and verification loops.
**产出:** `site/src/content/blog/anthropic-dynamic-workflows-agent-swarm-evolve.mdx`, `site/src/content/blog/anthropic-may-2026-agentops-platform-shift.mdx`, `work/wiki/sources/anthropic-may-2026-agentops.md`

## [2026-05-31 23:20] synthesis | Survey Spark and Evolve-AGI Core

**操作:** Reframed README as a survey-result entry point and promoted Evolve-AGI Index into the paper core.
**详情:**
- Created `analysis/survey-resource-spark.md` to map raw/processed/survey/results resources into the new survey Spark.
- Created `work/wiki/synthesis/survey-spark-evolve-agi-core.md` so future agents can retrieve the README/paper/EAI integration.
- Updated README/README-ZH/README-EN to publish survey conclusions, resource DAGs, Evolve-AGI Index weights, evidence boundaries, and verification entry points.
**产出:** `analysis/survey-resource-spark.md`, `work/wiki/synthesis/survey-spark-evolve-agi-core.md`

## [2026-05-31 23:58] synthesis | Resource Library Coverage Audit

**操作:** Audited what the repository already contains before expanding README/survey/SEO claims.
**详情:**
- Created `analysis/resource-library-coverage-audit.md` to separate raw, processed, work, results, site, and wiki coverage.
- Clarified count boundaries: 631 raw/classified GitHub entries, 224 analyzed model-card reports, 426 public report files, 119 curated site project records, 793 project markdown files, 196 survey-display papers, and 201 raw paper files.
- Added `work/wiki/synthesis/resource-library-coverage-audit.md` so future agents can reuse the coverage story without confusing consumer-facing README with agent operations.
- Updated README/README-ZH/README-EN and `CONTENT_INDEX.md` with reader-facing evidence entry points.
**产出:** `analysis/resource-library-coverage-audit.md`, `work/wiki/synthesis/resource-library-coverage-audit.md`

## [2026-06-01 00:18] site+seo | Public Resource Library Coverage Page

**操作:** Turned the coverage audit into a consumer-facing SEO page.
**详情:**
- Added `site/src/pages/resource-library/index.astro` as a public entry for raw corpus, processed analysis, survey synthesis, public reports, and Evolve-AGI Index.
- Linked the page from the homepage hero, footer, README/README-ZH/README-EN, and `CONTENT_INDEX.md`.
- Updated the coverage audit and wiki synthesis so future agents know the public explanation now exists.
**产出:** `site/src/pages/resource-library/index.astro`

## [2026-06-01 00:52] site+seo | Survey SEO Topic Map

**操作:** Turned the resource library into an evidence-backed topic map for survey, SEO, and reader questions.
**详情:**
- Added `analysis/survey-seo-topic-map.md` and `work/wiki/synthesis/survey-seo-topic-map.md` so topic clusters have a processed and wiki memory.
- Added reusable site data in `site/src/data/topicMap.ts` and published `/topics/`.
- Linked the topic map from README/README-ZH/README-EN, navigation, footer, search, resource library, and `CONTENT_INDEX.md`.
**产出:** `site/src/pages/topics/index.astro`, `site/src/data/topicMap.ts`

## [2026-06-01 01:24] site+seo | Self-Evolution Definition Page

**操作:** Published the Rank 1 topic cluster as an evergreen definition page.
**详情:**
- Added `analysis/self-evolution-definition-criteria.md` and `work/wiki/synthesis/self-evolution-definition-criteria.md`.
- Added `/topics/self-evolving-ai-agents/` with six definition gates: mutable object, feedback, candidate generation, verification, retention, audit/rollback.
- Linked the page from topic map data, README i18n, search, and `CONTENT_INDEX.md`.
**产出:** `site/src/pages/topics/self-evolving-ai-agents/index.astro`
