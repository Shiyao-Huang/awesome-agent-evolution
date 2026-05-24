# Self Evolve / Awesome Evolution

[English](README.md) | [中文](README-ZH.md)

Self Evolve 是一个围绕 AI 自我进化、Agent 进化、代码自我改进和进化式工作流的研究工程库：它同时维护 raw 素材、加工分析、论文草稿、SEO 网站和可发布结果。

## 现在的金核心

一句话：本仓库按 `raw -> processed -> work -> results` 管线治理，所有重要产物都必须能被索引、追溯、构建和发布。

三句话：`raw-*` 保存原始采集证据，`analysis/`、`research/`、`projects/`、`paper-reviews/` 保存加工后的分析。`paper-drafts/`、`site/`、`scripts/`、`survey/` 是正在工作的论文、网站、脚本和图表产物。`reports/`、`output/`、`site/public/reports/`、`paper-drafts/main.pdf` 是对外结果，更新后要刷新索引并跑验证。

五句话：这个项目不是普通 awesome list，而是“素材库 + 论文 + 网站 + 教学型 model card”的组合。GitHub 项目需要区分原始收集、已分类分析、进化相关、按时间顺序发布/创建的数据。每个深度项目都要有可教学的结构化分析，网站页面要服务博客、SEO 和长期检索。论文写作必须能引用这些结构化数据，而不是只写观点。后续 agent 进入仓库时先读本 README、[AGENTS.md](AGENTS.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md) 和 [docs/indexes/master-index.md](docs/indexes/master-index.md)。

## 目录边界

| Layer | Canonical Paths | 放什么 | 不放什么 |
|---|---|---|---|
| Raw / 原始素材 | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` | URL、时间戳、抓取文本、原始条目 | 主观分析、论文段落、二次总结 |
| Processed / 加工分析 | `analysis/`, `research/`, `projects/`, `paper-reviews/`, `papers/`, `cc-materials/` | 分类、交叉分析、项目 model card、论文 review | 未标来源的 raw dump |
| Work / 工作产物 | `paper-drafts/`, `paper/`, `latex/`, `site/`, `survey/`, `scripts/`, `data-engine/` | 论文草稿、站点源码、生成脚本、图表和中间构建 | 最终交付说明、未追溯素材 |
| Results / 结果输出 | `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf`, `site/dist/` | 可发布报告、PDF、静态站点输出、下载资源 | 手写的唯一事实源 |
| Mirrors / 外部镜像 | `repos/`, `projects/repos/`, `*__/` | 外部仓库克隆和只读证据 | 本项目治理规则 |
| Ops / 管理协作 | `docs/`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md`, `CONTENT_INDEX.md` | 规则、索引、发布检查、协作手册 | 大段 raw 数据 |

历史长 README 和旧交付索引已保留在 [docs/legacy/](docs/legacy/)，新的根 README 只承担总控入口职责。

## 当前关键数据

| 指标 | 当前值 | 入口 |
|---|---:|---|
| GitHub raw captures | 416 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) |
| 已分类 GitHub 仓库 | 416 | [analysis/github-project-data-analysis.json](analysis/github-project-data-analysis.json) |
| 深度项目/model-card 报告 | 129 | [projects/INDEX.md](projects/INDEX.md) |
| 严格进化相关仓库 | 71 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) |
| 广义进化相关仓库 | 166 | [analysis/github-project-data-analysis.md](analysis/github-project-data-analysis.md) |
| 论文 PDF | 213 pages | [paper-drafts/main.pdf](paper-drafts/main.pdf) |
| Astro 站点 | 210 pages build | [site/](site/) |

## 必跑命令

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd site && npm run build)
```

## 主要入口

- 全量索引：[CONTENT_INDEX.md](CONTENT_INDEX.md)
- 英文 README：[README.md](README.md)
- 用户直接输入参考：[docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)
- 非标准材料清理规则：[docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md)
- 生成索引：[docs/indexes/master-index.md](docs/indexes/master-index.md)
- 数据流：[docs/indexes/data-flow-index.md](docs/indexes/data-flow-index.md)
- 目录治理：[docs/project-management/project-structure.md](docs/project-management/project-structure.md)
- 项目管理：[docs/project-management/operating-model.md](docs/project-management/operating-model.md)
- 发布准备：[docs/publishing-readiness-check.md](docs/publishing-readiness-check.md)
- Agent 手册：[AGENTS.md](AGENTS.md)
- Claude 手册：[CLAUDE.md](CLAUDE.md)
- Cloud/部署手册：[CLOUD.md](CLOUD.md)
