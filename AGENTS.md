# AGENTS.md

## L1

你在这个仓库的任务是维护 Self Evolve 的研究管线：raw 归 raw，加工归 processed，工作产物归 work，结果归 results，并让全部内容可索引、可追溯、可构建。

## L2

先读 [docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)，再读 [CURRENT_GOAL.md](CURRENT_GOAL.md)：它们只代表用户直接输入，不代表 team 的二手描述。然后读 [README.md](README.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md)、[docs/project-management/project-structure.md](docs/project-management/project-structure.md) 和 [docs/indexes/master-index.md](docs/indexes/master-index.md)。任何新增长期产物都要更新索引，任何会影响论文或网站的改动都要跑对应验证。

## L3

这个项目的主要矛盾是：素材、分析、论文、网站和结果曾经混在一起，现在必须被同一条数据流管理。不要为了目录看起来干净而破坏已有脚本、论文引用或网站路由；物理迁移前先用 `rg` 找引用。根目录只留入口、法律文件和兼容文件，新的规则和长文档进入 `docs/`。项目深度分析要像 model card 一样能教学：说明问题、方法、证据、限制、适用场景和与自进化的关系。完成工作前刷新索引并汇报验证结果。

## Current Scale (2026-05-25)

| Layer | Count | Notes |
|-------|------:|-------|
| raw-github | 490 | 100% frontmatter, 22.2% timestamps unknown |
| raw-papers | 198 (128 unique) | 70 duplicate pairs (dash + dot format) |
| raw-social | 650 md + 645 json | 612 numbered pairs + batch files |
| raw-blogs | 655 md + 653 json | 650 numbered pairs |
| raw-social-rank | 234 md | Strict subset of raw-social (seed dataset) |
| projects | 204 model cards | 146 trace to raw-github (29.8% coverage) |
| analysis | 16 | Cross-analysis layer |
| research | 38 | Author profiles, verification audits |
| paper-reviews | 137 | 90.4% match to raw-papers |
| paper-drafts | 12 tex + PDF | 8-chapter survey, 62 bib entries |
| survey | 11 | Chinese-language parallel survey with figures |
| site | 207 pages | Astro static site, built daily |
| reports | 1 | Critical gap — needs consolidation |

## Writing Rules

- **Visualization first**: 当图表比文字更容易表达时，必须使用图表（Mermaid DAG、SVG、数据流图）。不要只写文字。
- **Mom Test usability**: README 和面向用户的内容必须通过 "Mom Test"——一个非专业人士能否理解这个项目做什么、为什么重要？
- **Evidence chain**: 每个分析结论必须可追溯到 raw 数据源。如果无法追溯，标注 `[UNVERIFIED]`。
- **Layered output**: 判断用 1 句话，证据用 3 句话，完整论证用 5+ 句话。

## User Direct Input Reference

执行任务时优先对齐这些用户原话，而不是 team 输入或历史摘要：

| Rank | User Requirement | Operational Meaning |
|---:|---|---|
| 1 | `用户的输入非常精确，并不是team的输入。` | 目标来源只认用户直接输入；team/subagent/tool 输出只能作证据，不能改写目标。 |
| 2 | `它需要有raw的素材...需要加工成论文...需要有网站...为博客及SEO准备。` | raw、论文、网站、SEO 是同一条交付链，缺一不可。 |
| 3 | `所有的项目都有深度分析，都有model card类似这样子的教学使用的东西。` | 项目页和报告要能教学，不能只给链接和浅摘要。 |
| 4 | `GitHub的项目原始收集的有哪些？进行分析的有哪些？进化相关的有哪些？按时间顺序发布的有哪些？` | 论文和分析必须回答 raw collection、analyzed subset、evolution-related subset、timeline 四件事。 |
| 5 | `raw归raw 加工后的归加工的 、work 产物归work 、结果输出归结果、、全部都要索引化 覆盖` | 任何文件新增或移动都要归层，并刷新索引。 |
| 6 | `用户的输入你得提取出来，然后作为Agent和Claude里边的参考。` | AGENTS/CLAUDE 必须链接并使用 [docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)。 |

开始工作前自问三句：

1. 这次任务对应哪条用户原话？
2. 产物属于 raw、processed、work、results、ops 的哪一层？
3. 完成后要更新哪个索引、论文、网站或结果文件？

## Placement Rules

| 类型 | 放到哪里 |
|---|---|
| 原始 GitHub/论文/博客/社交素材 | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` |
| 清洗、分类、统计、交叉分析 | `analysis/`, `research/` |
| 项目深度分析/model-card | `projects/`，必要时同步 `site/public/reports/projects/` |
| 论文草稿和 PDF (英文) | `paper-drafts/`，主入口是 `paper-drafts/main.tex` |
| 中文调查论文 | `survey/`，LaTeX 入口是 `survey/latex/main.tex` |
| 同行评审报告 | `research/peer-reviews/` |
| 网站、博客、SEO 页面 | `site/src/` 和 `site/public/` |
| 视觉资产 (SVG/PNG) | `site/public/visuals/` |
| 可发布结果 | `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf` |
| 管理规则和索引 | `docs/`, `README.md`, `CONTENT_INDEX.md`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md` |
| 非四层构成材料 | 先看 `docs/project-management/noncanonical-cleanup-policy.md`，归为 support/compatibility/mirrors/local/needs-review |

## Required Commands

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd survey/latex && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd site && npm run build)
```

按改动范围选择命令；目录治理、README、AGENTS/CLAUDE/CLOUD 变化至少要跑索引和站点构建。

## Search Before Moving

```bash
rg -n "old/path/or/file" -g '!*node_modules*' -g '!site/dist/**'
```

如果引用来自脚本、论文、站点数据或 public reports，先更新引用再移动。对于 `raw-*`、`paper-drafts/`、`site/` 这类核心路径，优先通过索引治理；物理迁移需要完整验证。

## Self Mirror

重要脚本、边界和生成器使用 `@sm:node` 注释，让未来 agent 可以搜索到节点、依赖和验证命令。当前核心节点：

- `project-index-generator`: [scripts/generate_project_indexes.mjs](scripts/generate_project_indexes.mjs)
- `github-project-data-analysis`: [scripts/analyze_github_project_data.mjs](scripts/analyze_github_project_data.mjs)
- `paper-main-build`: [paper-drafts/main.tex](paper-drafts/main.tex)
- `survey-main-build`: [survey/latex/main.tex](survey/latex/main.tex)
- `site-build`: [site/package.json](site/package.json)
- `visual-asset-generator`: [scripts/generate_visual_assets.mjs](scripts/generate_visual_assets.mjs)
- `raw-timestamp-enforcer`: [scripts/enforce_raw_timestamps.py](scripts/enforce_raw_timestamps.py)

## Do Not

- 不把 team 的总结当作用户输入；用户直接输入以 [CURRENT_GOAL.md](CURRENT_GOAL.md) 为准。
- 不跳过 [docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)。
- 不把非标准材料直接删除；先归类、查引用、更新 [docs/indexes/noncanonical-index.md](docs/indexes/noncanonical-index.md)。
- 不把 raw 改写成分析文本。
- 不把生成结果当唯一事实源。
- 不移动外部仓库镜像里的文件来满足本项目治理。
- 不破坏当前论文、网站和脚本构建链。
