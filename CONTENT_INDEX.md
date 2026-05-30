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
| README 主入口 | [README.md](README.md) | 中文优先，开头前置加工后的完整分类总览，并聚合综述、方法、benchmark、项目分类、核心链接、完整列表索取区和迭代闭环 |
| English i18n 入口 | [README-EN.md](README-EN.md) | 根 README 的完整英文镜像，包含同等结构、完整列表和维护闭环 |
| 用户输入记忆 | local-only, ignored | 本地保留，不发布、不提交；公开仓库只保留抽象操作原则 |
| 非标准材料清理 | [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) | 不乱删，先归类再迁移 |
| GitHub 数据分析 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) | 覆盖 624 个 raw GitHub captures、分类、进化相关、时间序列 |
| GitHub 数据 JSON | [analysis/github-project-data-analysis.json](analysis/github-project-data-analysis.json) | 脚本生成，可复跑 |
| 项目深度分析 | [projects/](projects/) | model-card/教学型项目分析 |
| 项目清单 | [projects/INDEX.md](projects/INDEX.md) | 427 个深度项目入口 |
| 论文主稿 | [paper-drafts/main.tex](paper-drafts/main.tex) | 英文 arXiv-facing XeLaTeX 构建入口 |
| 英文 arXiv 附录 | [paper-drafts/appendix-en.tex](paper-drafts/appendix-en.tex) | 英文附录，替代中文 companion appendix 进入英文主稿 |
| 英文 GitHub corpus 快照 | [paper-drafts/github-project-data-analysis-en.tex](paper-drafts/github-project-data-analysis-en.tex) | 从 `analysis/github-project-data-analysis.*` 派生的英文 LaTeX 论文快照 |
| 论文 PDF | [paper-drafts/main.pdf](paper-drafts/main.pdf) | 当前生成版 |
| 网站源码 | [site/](site/) | Astro 博客/SEO 网站 |
| 公开项目报告 | [site/public/reports/projects/](site/public/reports/projects/) | 419 个公开项目报告供静态站点下载/引用 |

## 历史索引

旧 awesome-list README、旧内容索引和旧交付摘要已经移入 [docs/legacy/](docs/legacy/)，作为历史证据保留，不再作为当前管理入口。
