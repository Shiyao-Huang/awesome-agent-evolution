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
| Survey 资源重组 | [analysis/survey-resource-spark.md](analysis/survey-resource-spark.md) | processed synthesis：把 raw/processed/survey/results 资源重排为 Survey Spark，并说明 Evolve-AGI Index 如何进入论文核心 |
| 资料库覆盖审计 | [analysis/resource-library-coverage-audit.md](analysis/resource-library-coverage-audit.md) | processed audit：盘点 raw/processed/work/results/site/wiki 当前资产，解释 639 raw captures、232 analyzed reports、434 public reports、232 site records、801 project markdown files 等不同计数口径 |
| Survey/SEO 主题地图 | [analysis/survey-seo-topic-map.md](analysis/survey-seo-topic-map.md) | processed synthesis：把资料库资产反推出定义、五类回路、代码自改进、Agent-Swarm、评估治理等 SEO/Survey 主题簇 |
| 自进化定义判据 | [analysis/self-evolution-definition-criteria.md](analysis/self-evolution-definition-criteria.md) | processed synthesis：用可变对象、反馈、候选生成、验证、保留和回滚六个 gate 定义什么才算 self-evolving agent |
| 五类进化回路主题分析 | [analysis/five-evolution-loops-topic.md](analysis/five-evolution-loops-topic.md) | processed synthesis：把五类回路整理成可读的机制地图，说明可变对象、反馈、验证器、保留和失败模式 |
| 用户输入记忆 | local-only, ignored | 本地保留，不发布、不提交；公开仓库只保留抽象操作原则 |
| 读者/Agent 边界规则 | [docs/ops/audience-boundary-workflow.md](docs/ops/audience-boundary-workflow.md) | ops guide：区分公开读者页面、证据索引和内部 workflow，防止 README/site 混入 agent 操作手册 |
| 非标准材料清理 | [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) | 不乱删，先归类再迁移 |
| GitHub 数据分析 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) | 覆盖 639 个 raw GitHub captures、分类、进化相关、时间序列 |
| GitHub 数据 JSON | [analysis/github-project-data-analysis.json](analysis/github-project-data-analysis.json) | 脚本生成，可复跑 |
| 项目深度分析 | [projects/](projects/) | model-card/教学型项目分析 |
| 项目清单 | [projects/INDEX.md](projects/INDEX.md) | model-card/项目报告入口；最新公共报告计数见 master index |
| 论文主稿 | [paper-drafts/main.tex](paper-drafts/main.tex) | 英文 arXiv-facing XeLaTeX 构建入口 |
| 英文 arXiv 附录 | [paper-drafts/appendix-en.tex](paper-drafts/appendix-en.tex) | 英文附录，替代中文 companion appendix 进入英文主稿 |
| 英文 GitHub corpus 快照 | [paper-drafts/github-project-data-analysis-en.tex](paper-drafts/github-project-data-analysis-en.tex) | 从 `analysis/github-project-data-analysis.*` 派生的英文 LaTeX 论文快照 |
| 论文 PDF | [paper-drafts/main.pdf](paper-drafts/main.pdf) | 当前生成版 |
| 网站源码 | [site/](site/) | Astro 博客/SEO 网站 |
| 公开资料库覆盖页 | [site/src/pages/resource-library/index.astro](site/src/pages/resource-library/index.astro) | 面向消费者和 SEO 的资料库覆盖说明：解释 raw/processed/survey/report/Evolve-AGI Index 的证据链和计数口径 |
| 公开主题地图页 | [site/src/pages/topics/index.astro](site/src/pages/topics/index.astro) | 面向消费者和 SEO 的 topic map：从读者问题进入 survey、项目报告、benchmark、AGI index 和后续内容资产 |
| 公开定义主题页 | [site/src/pages/topics/self-evolving-ai-agents/index.astro](site/src/pages/topics/self-evolving-ai-agents/index.astro) | 面向消费者和 SEO 的 evergreen 定义页：判断一个 AI Agent 是否真的自进化 |
| 公开五类回路主题页 | [site/src/pages/topics/five-evolution-loops/index.astro](site/src/pages/topics/five-evolution-loops/index.astro) | 面向消费者和 SEO 的 evergreen 机制页：用五类进化回路解释反馈如何变成可保留改进 |
| 公开项目报告 | [site/public/reports/projects/](site/public/reports/projects/) | 434 个公开项目报告供静态站点下载/引用 |

## 历史索引

旧 awesome-list README、旧内容索引和旧交付摘要已经移入 [docs/legacy/](docs/legacy/)，作为历史证据保留，不再作为当前管理入口。
