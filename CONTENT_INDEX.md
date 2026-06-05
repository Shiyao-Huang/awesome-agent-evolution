# Self Evolve 全量索引

> 当前索引入口。机器生成的细分索引在 `docs/indexes/`，执行 `node scripts/generate_project_indexes.mjs` 刷新。

## 一句话

本项目所有内容按 `raw -> processed -> work -> results` 追踪，旧清单保留为 legacy，新入口以可验证索引为准。

## 最高优先级入口

| 入口 | 用途 |
|---|---|
| [docs/indexes/master-index.md](docs/indexes/master-index.md) | 全仓库分层索引、计数和数据流图 |
| [docs/indexes/data-flow-index.md](docs/indexes/data-flow-index.md) | raw、加工、工作、结果之间的流转规则 |
| [docs/indexes/raw-index.md](docs/indexes/raw-index.md) | 原始素材索引 |
| [docs/indexes/processed-index.md](docs/indexes/processed-index.md) | 加工分析索引 |
| [docs/indexes/work-index.md](docs/indexes/work-index.md) | 工作产物索引 |
| [docs/indexes/results-index.md](docs/indexes/results-index.md) | 发布结果索引 |
| [docs/indexes/root-document-map.md](docs/indexes/root-document-map.md) | 根目录文件角色表 |
| [docs/indexes/noncanonical-index.md](docs/indexes/noncanonical-index.md) | 非四层构成材料的归类与清理动作 |

## 核心产物

| 类型 | 路径 | 状态 |
|---|---|---|
| README 主入口 | [README.md](README.md) | 中文优先，改为 Survey 成果入口：核心 Spark、Evolve-AGI Index、资源 DAG、论文主线、证据边界和验证入口 |
| English i18n 入口 | [README-EN.md](README-EN.md) | 根 README 的英文镜像，保留 Survey 成果、Evolve-AGI Index、证据边界和维护闭环 |
| Evolve-AGI Index | [analysis/evolve-agi-index.md](analysis/evolve-agi-index.md) | processed index methodology：把 benchmark、闭环强度、证据链、迁移验证、可运行性、领域动量和治理成熟度合成可审计的领域成熟度指数 |
| Survey 资源重组 | [analysis/survey-resource-spark.md](analysis/survey-resource-spark.md) | processed synthesis：把 raw/processed/survey/results 资源重排为 Survey Spark，并说明 Evolve-AGI Index 如何进入论文核心 |
| 资料库覆盖审计 | [analysis/resource-library-coverage-audit.md](analysis/resource-library-coverage-audit.md) | processed audit：盘点 raw/processed/work/results/site/wiki 当前资产并解释计数口径边界；最新数量以 master-index 与 GitHub analysis 为准 |
| Survey/SEO 主题地图 | [analysis/survey-seo-topic-map.md](analysis/survey-seo-topic-map.md) | processed synthesis：把资料库资产反推出定义、五类回路、代码自改进、Agent-Swarm、评估治理等 SEO/Survey 主题簇 |
| Google 索引诊断 | [docs/seo/google-indexing-triage-2026-06-01.md](docs/seo/google-indexing-triage-2026-06-01.md) | ops+seo triage：确认 `agent-evolution.com` 是公开 canonical 域，sitemap 非空，当前阻断点是 GitHub Pages 自定义域名 HTTPS 证书 |
| 价值筛选双链知识库 | [analysis/value-screening-dual-chain-knowledge-base.md](analysis/value-screening-dual-chain-knowledge-base.md) | processed protocol：用 Self Mirror 风格把 evidence chain 与 mirror chain 分开，按时间、延续性、实现证据、issue/resource 信号筛选下一批 GitHub 深挖对象 |
| Value LSH 分类体系 | [analysis/value-lsh-classification-system.md](analysis/value-lsh-classification-system.md) | processed design：把 Mom Test 访谈、机制分类、证据链、语言和 embedding/gbrain 视图汇入新的 value facet 分类体系 |
| Value LSH Index | [analysis/value-lsh-index.md](analysis/value-lsh-index.md) | processed aggregate：2219 条去重后 GitHub/paper/social/blog 素材离散成 26 条 `-1/0/+1` value lines，生成 168 个 LSH buckets、3 个 value clusters 和 856/1066/297 三段筛选 |
| Value evidence repair queue | [analysis/value-evidence-repair-queue.md](analysis/value-evidence-repair-queue.md) | processed queue：把 value-LSH 的 GitHub rows 转为 raw/meta、deep report、issue/resource、star-growth、loop verification 五类证据修复动作 |
| 2026-06-02 GitHub metadata repair packet | [analysis/frontier-projects/pinchbench-skill-dual-chain.md](analysis/frontier-projects/pinchbench-skill-dual-chain.md), [analysis/frontier-projects/vectorize-io-agent-memory-benchmark-dual-chain.md](analysis/frontier-projects/vectorize-io-agent-memory-benchmark-dual-chain.md), [analysis/frontier-projects/evomap-awesome-agent-evolution-dual-chain.md](analysis/frontier-projects/evomap-awesome-agent-evolution-dual-chain.md) | processed repair packet：本轮补齐 skill benchmark、memory benchmark 与外部 awesome-list taxonomy comparator 三条高优先级证据链 |
| Value LSH work dataset | [data-engine/value-lsh-index/README.md](data-engine/value-lsh-index/README.md) | work dataset：保存 value tags、matrix、signatures、buckets、clusters、3D projection、embedding cache 和 incremental manifest |
| 公开 Value LSH 图谱页 | [site/src/pages/value-lsh/index.astro](site/src/pages/value-lsh/index.astro) | site result：把 `analysis/value-lsh-index.json`、`analysis/value-lsh-graph-3d.json` 和 repair queue 渲染成可交互价值分类图谱；点选素材可查看 value/embedding 信息与 LSH 邻居，页面同步展示三段 action class、候选队列、证据修复队列和 facet/bucket |
| Frontier value queue | [analysis/frontier-value-queue.md](analysis/frontier-value-queue.md) | processed queue：把 246 个 analyzed projects 分到 code-ready、clone-needed、metadata-refresh、baseline、parked 等深挖 lane，并接入 2026 star-growth coverage/backlog 信号 |
| AgentEvolver 双链深读 | [analysis/frontier-projects/modelscope-agentevolver-dual-chain.md](analysis/frontier-projects/modelscope-agentevolver-dual-chain.md) | processed project packet：第一个项目级双链样本，连接 raw/meta/本地代码/GitHub issue-resource 信号并判定其 frontier archetype 价值 |
| SE-Agent 双链深读 | [analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md](analysis/frontier-projects/jarvis-xs-se-agent-dual-chain.md) | processed project packet：第二个项目级双链样本，判定 SE-Agent 是 trajectory-evolution baseline 而非最高 current frontier |
| kargarisaac Reflexion 双链深读 | [analysis/frontier-projects/kargarisaac-reflexion-dual-chain.md](analysis/frontier-projects/kargarisaac-reflexion-dual-chain.md) | processed project packet：repair queue 第一项样本，基于 GitHub API source/issue/PR 证据判定为 low-continuity Reflexion baseline adapter |
| synaptent Aragora 双链深读 | [analysis/frontier-projects/synaptent-aragora-dual-chain.md](analysis/frontier-projects/synaptent-aragora-dual-chain.md) | processed project packet：repair queue 第二项样本，基于 live GitHub、local clone、issue/PR、release/tag 和代码证据判定为 governance-control-plane frontier anchor |
| gepa-ai GEPA 双链深读 | [analysis/frontier-projects/gepa-ai-gepa-dual-chain.md](analysis/frontier-projects/gepa-ai-gepa-dual-chain.md) | processed project packet：repair queue 第三项样本，基于 live GitHub、source mirror、issue/PR、release/tag 和代码证据判定为 prompt/program/skill optimizer frontier anchor |
| gepa-ai optimize-anything artifact 双链深读 | [analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md](analysis/frontier-projects/gepa-ai-optimize-anything-artifact-dual-chain.md) | processed project packet：repair queue 第四项样本，基于 live GitHub、artifact tree、offline verifier、saved logs/checkpoints 和 re-execution boundary 判定为 GEPA paired reproducibility anchor |
| langchain-ai Open SWE 双链深读 | [analysis/frontier-projects/langchain-ai-open-swe-dual-chain.md](analysis/frontier-projects/langchain-ai-open-swe-dual-chain.md) | processed project packet：repair queue 第五项样本，基于 live GitHub、local clone、agent/reviewer/analyzer 源码、issue/PR 和资源证据判定为 internal coding-agent control-plane frontier anchor |
| sethkarten Continual Harness 双链深读 | [analysis/frontier-projects/sethkarten-continual-harness-dual-chain.md](analysis/frontier-projects/sethkarten-continual-harness-dual-chain.md) | processed project packet：repair queue 第六项样本，基于 live GitHub、local clone、HarnessEvolver/PromptOptimizer/store/bootstrap 源码、issue/PR 和 arXiv/release 证据判定为 reset-free harness-evolution frontier anchor |
| krzysztofdudek ResearcherSkill 双链深读 | [analysis/frontier-projects/krzysztofdudek-researcherskill-dual-chain.md](analysis/frontier-projects/krzysztofdudek-researcherskill-dual-chain.md) | processed project packet：repair queue 当前第一项样本，基于 live GitHub、local clone、skill/GUIDE/实验归档和 issue/PR 证据判定为技能媒介的受控实验/自改进协议，而非独立自进化 runtime |
| Frontier queue generator | [scripts/generate_frontier_value_queue.mjs](scripts/generate_frontier_value_queue.mjs) | work script：从 GitHub analysis、timestamp index 和本地 clone evidence 生成下一批项目深挖队列 |
| Value LSH generator | [scripts/build_value_lsh_index.mjs](scripts/build_value_lsh_index.mjs) | work script：从现有 raw/processed corpus 生成离散 value facet matrix、LSH signatures、buckets、clusters 和增量状态 |
| Value embedding projection | [scripts/build_value_embedding_projection.mjs](scripts/build_value_embedding_projection.mjs) | work script：支持 value/value-regularized/hash/OpenAI embedding 和 PCA/exact TSNE/PCA-TSNE 3D graph projection，输出含 LSH neighbor map 的 `analysis/value-lsh-graph-3d.json` |
| 自进化定义判据 | [analysis/self-evolution-definition-criteria.md](analysis/self-evolution-definition-criteria.md) | processed synthesis：用可变对象、反馈、候选生成、验证、保留和回滚六个 gate 定义什么才算 self-evolving agent |
| 五类进化回路主题分析 | [analysis/five-evolution-loops-topic.md](analysis/five-evolution-loops-topic.md) | processed synthesis：把五类回路整理成可读的机制地图，说明可变对象、反馈、验证器、保留和失败模式 |
| 代码自改进 Benchmark 矩阵 | [analysis/code-evolution-benchmark-matrix.md](analysis/code-evolution-benchmark-matrix.md) | processed synthesis：区分自修改 coding agent、算法发现、架构搜索、prompt/program 优化和反思修复回路的 benchmark 证据 |
| Survey Figure Atlas | [survey/figures/README.md](survey/figures/README.md) | work/result bridge：整理 Survey 的 corpus funnel、method distribution、cross-source gap、category-theme heatmap、framework radar、painpoint platform 等图谱资产；已导出到 `paper-drafts/figures/` 并由 paper 与网站共同引用 |
| 公开数据可视化页 | [site/src/pages/visualizations/index.astro](site/src/pages/visualizations/index.astro) | site result：把 Survey Figure Atlas 放到旧交互图表之前，先解释图表如何支撑 paper chapter、evidence boundary 和读者判断 |
| Paper figure exporter | [scripts/export_survey_figures_for_paper.mjs](scripts/export_survey_figures_for_paper.mjs) | work script：把 `survey/figures/*.svg` 转成 `paper-drafts/figures/*.png`，供英文 paper-drafts/main.tex 直接 includegraphics |
| 用户输入记忆 | local-only, ignored | 本地保留，不发布、不提交；公开仓库只保留抽象操作原则 |
| 读者/Agent 边界规则 | [docs/ops/audience-boundary-workflow.md](docs/ops/audience-boundary-workflow.md) | ops guide：区分公开读者页面、证据索引和内部 workflow，防止 README/site 混入 agent 操作手册 |
| 非标准材料清理 | [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) | 不乱删，先归类再迁移 |
| GitHub 数据分析 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) | 覆盖 684 个 raw GitHub captures、分类、进化相关、时间序列 |
| GitHub 数据 JSON | [analysis/github-project-data-analysis.json](analysis/github-project-data-analysis.json) | 脚本生成，可复跑 |
| GitHub Star 增长数据库计划 | [analysis/github-star-growth-database-plan.md](analysis/github-star-growth-database-plan.md) | processed plan：把累计 Star 降为历史 adoption prior，改用 2026 新增 Star、recent velocity 和覆盖完整性做当前阶段排名 |
| GitHub Star 增长排名 | [analysis/github-star-growth-ranking.md](analysis/github-star-growth-ranking.md) | processed aggregate：由 `data-engine/github-star-history/` 生成的 year-specific new-star ranking，未抓取项目标为 `not_fetched` |
| GitHub Star history 数据库 | [data-engine/github-star-history/README.md](data-engine/github-star-history/README.md) | work dataset：stargazer events、repo snapshots、monthly growth、fetch runs、manifest，预留 Hugging Face 发布 |
| 公开 Star 增长数据库页 | [site/src/pages/star-growth/index.astro](site/src/pages/star-growth/index.astro) | 面向消费者和 SEO 的 2026 GitHub new-star momentum 页面：公开 coverage-qualified ranking、fetch backlog、dataset path 和 Evolve-AGI Index 回灌边界 |
| Frontier 价值队列 JSON | [analysis/frontier-value-queue.json](analysis/frontier-value-queue.json) | 脚本生成，可复跑；保存每个项目的 evidence_chain、mirror_chain、frontier_score、lane 和 next_action |
| 项目深度分析 | [projects/](projects/) | model-card/教学型项目分析 |
| 项目清单 | [projects/INDEX.md](projects/INDEX.md) | model-card/项目报告入口；最新公共报告计数见 master index |
| 论文主稿 | [paper-drafts/main.tex](paper-drafts/main.tex) | 英文 arXiv-facing XeLaTeX 构建入口 |
| 英文 arXiv 附录 | [paper-drafts/appendix-en.tex](paper-drafts/appendix-en.tex) | 英文附录，替代中文 companion appendix 进入英文主稿 |
| 英文 GitHub corpus 快照 | [paper-drafts/github-project-data-analysis-en.tex](paper-drafts/github-project-data-analysis-en.tex) | 从 `analysis/github-project-data-analysis.*` 派生的英文 LaTeX 论文快照 |
| 论文 PDF | [paper-drafts/main.pdf](paper-drafts/main.pdf) | 当前生成版 |
| 网站源码 | [site/](site/) | Astro 博客/SEO 网站 |
| 公开资料库覆盖页 | [site/src/pages/resource-library/index.astro](site/src/pages/resource-library/index.astro) | 面向消费者和 SEO 的资料库覆盖说明：解释 raw/processed/survey/report/Evolve-AGI Index 的证据链和计数口径 |
| 公开 Evolve-AGI Index 页 | [site/src/pages/evolve-agi-index/index.astro](site/src/pages/evolve-agi-index/index.astro) | 面向消费者和 SEO 的 AGI index 页面：展示 2026-06-01 corpus-synced 指数、信号权重、趋势线、benchmark 证据和当前价值信号 |
| 公开主题地图页 | [site/src/pages/topics/index.astro](site/src/pages/topics/index.astro) | 面向消费者和 SEO 的 topic map：从读者问题进入 survey、项目报告、benchmark、AGI index 和后续内容资产 |
| 公开定义主题页 | [site/src/pages/topics/self-evolving-ai-agents/index.astro](site/src/pages/topics/self-evolving-ai-agents/index.astro) | 面向消费者和 SEO 的 evergreen 定义页：判断一个 AI Agent 是否真的自进化 |
| 公开五类回路主题页 | [site/src/pages/topics/five-evolution-loops/index.astro](site/src/pages/topics/five-evolution-loops/index.astro) | 面向消费者和 SEO 的 evergreen 机制页：用五类进化回路解释反馈如何变成可保留改进 |
| 公开代码自改进 Benchmark 页 | [site/src/pages/topics/code-evolution-benchmark/index.astro](site/src/pages/topics/code-evolution-benchmark/index.astro) | 面向消费者和 SEO 的 evergreen benchmark 页：判断代码自改进和算法发现声明的证据强度 |
| 公开项目报告 | [site/public/reports/projects/](site/public/reports/projects/) | 473 个公开项目报告供静态站点下载/引用 |

## 历史索引

旧 awesome-list README、旧内容索引和旧交付摘要已经移入 [docs/legacy/](docs/legacy/)，作为历史证据保留，不再作为当前管理入口。
