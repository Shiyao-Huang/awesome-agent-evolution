# AGENTS.md

## L1

你在这个仓库的任务是维护 Self Evolve 的研究管线：raw 归 raw，加工归 processed，工作产物归 work，结果归 results，并让全部内容可索引、可追溯、可构建。

## L2

先以当前对话里的用户直接输入为准；本地私有的用户输入记忆文件可以辅助对齐，但禁止提交或发布。然后读 [README.md](README.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md)、[docs/project-management/project-structure.md](docs/project-management/project-structure.md) 和 [docs/indexes/master-index.md](docs/indexes/master-index.md)。任何新增长期产物都要更新索引，任何会影响论文或网站的改动都要跑对应验证。

## L3

这个项目的主要矛盾是：素材、分析、论文、网站和结果曾经混在一起，现在必须被同一条数据流管理。不要为了目录看起来干净而破坏已有脚本、论文引用或网站路由；物理迁移前先用 `rg` 找引用。根目录只留入口、法律文件和兼容文件，新的规则和长文档进入 `docs/`。项目深度分析要像 model card 一样能教学：说明问题、方法、证据、限制、适用场景和与自进化的关系。完成工作前刷新索引并汇报验证结果。

## User Input Privacy

用户输入原文和抽取文件只保留在本地，不能提交到公开仓库。Agent 执行时只在当前对话和本地私有记忆中对齐目标；公开文档只保留抽象的操作原则，不保存用户原话。

操作原则：

1. 不把 team、subagent、tool 输出当作用户目标。
2. raw、processed、work、results 必须分层治理并可索引。
3. README、论文、网站、项目 model card 和 SEO 内容必须共享同一条证据链。
4. 新增长期产物必须刷新索引；影响论文或网站的改动必须验证构建。

开始工作前自问三句：

1. 这次任务对应当前对话里的哪个直接要求？
2. 产物属于 raw、processed、work、results、ops 的哪一层？
3. 完成后要更新哪个索引、论文、网站或结果文件？

## Placement Rules

| 类型 | 放到哪里 |
|---|---|
| 原始 GitHub/论文/博客/社交素材 | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` |
| 清洗、分类、统计、交叉分析 | `analysis/`, `research/` |
| 项目深度分析/model-card | `projects/`，必要时同步 `site/public/reports/projects/` |
| 论文草稿和 PDF | `paper-drafts/`，主入口是 `paper-drafts/main.tex` |
| 网站、博客、SEO 页面 | `site/src/` 和 `site/public/` |
| 可发布结果 | `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf` |
| 管理规则和索引 | `docs/`, `README.md`, `CONTENT_INDEX.md`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md` |
| 非四层构成材料 | 先看 `docs/project-management/noncanonical-cleanup-policy.md`，归为 support/compatibility/mirrors/local/needs-review |

## Required Commands

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
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
- `site-build`: [site/package.json](site/package.json)

## Do Not

- 不把 team 的总结当作用户输入；当前对话优先，本地私有用户输入记忆只能作为本地辅助。
- 不提交用户输入原文、用户输入抽取文件或包含用户原话的工作记忆。
- 不把非标准材料直接删除；先归类、查引用、更新 [docs/indexes/noncanonical-index.md](docs/indexes/noncanonical-index.md)。
- 不把 raw 改写成分析文本。
- 不把生成结果当唯一事实源。
- 不移动外部仓库镜像里的文件来满足本项目治理。
- 不破坏当前论文、网站和脚本构建链。
