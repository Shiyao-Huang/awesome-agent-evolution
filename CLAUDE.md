# CLAUDE.md

Claude/Claude Code 在本仓库工作时，以 [AGENTS.md](AGENTS.md) 为最高操作手册。本文件只补充 Claude 侧协作规则。

## Priority

1. 先以当前对话里的用户直接输入为准；本地私有用户输入记忆只能辅助判断，禁止提交或发布。
2. 再读 [README.md](README.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md)、[docs/project-management/project-structure.md](docs/project-management/project-structure.md)。
3. 改动后刷新 [docs/indexes/master-index.md](docs/indexes/master-index.md)。

## User Input Privacy

用户输入原文、抽取文件和长期用户记忆只保留本地，不进入公开仓库。公开手册只保留操作原则：目标来源以当前用户输入为准，raw/processed/work/results 分层治理，长期产物必须索引化，论文和网站改动必须验证。

非四层构成材料不要直接删除；先按 [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) 归类，并刷新 [docs/indexes/noncanonical-index.md](docs/indexes/noncanonical-index.md)。

## Claude Working Style

- 用分层表达输出判断：1 句话、3 句话、5 句话、完整论证。
- 对论文和项目分析，优先补”数据从哪来、分析了哪些、进化相关有哪些、时间顺序如何”。
- 对网站内容，优先保证 SEO title/description、静态可构建、public reports 可访问。
- 对项目卡，使用 model-card 类结构：任务、方法、证据、局限、适用场景、教学价值。
- **图表优先**：当图表比文字更容易表达时，必须使用 Mermaid DAG、SVG 或数据可视化，不要只写文字。
- **Mom Test**：README 和面向用户的内容必须让非专业人士能理解项目做什么、为什么重要。
- **证据链**：每个分析结论标注数据来源。无法追溯的标注 `[UNVERIFIED]`。
- **中文调查同步**：`survey/` 是中文版调查，与 `paper-drafts/` 平行。修改一方时检查另一方是否需要同步。

## Validation

```bash
node scripts/generate_project_indexes.mjs
node scripts/analyze_github_project_data.mjs
(cd site && npm run build)
```

论文相关变化额外执行：

```bash
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd survey/latex && xelatex -interaction=nonstopmode -halt-on-error main.tex)
```

## Handoff

交接时只写当前状态、验证结果、剩余风险和下一步，不重述无关历史。长期信息写入 `docs/` 或生成索引，不依赖对话记忆。
