# CLAUDE.md

Claude/Claude Code 在本仓库工作时，以 [AGENTS.md](AGENTS.md) 为最高操作手册。本文件只补充 Claude 侧协作规则。

## Priority

1. 先以当前对话里的用户直接输入为准；本地私有用户输入记忆只能辅助判断，禁止提交或发布。
2. 再读 [README.md](README.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md)、[docs/project-management/project-structure.md](docs/project-management/project-structure.md)。
3. 改动后刷新 [docs/indexes/master-index.md](docs/indexes/master-index.md)。

## Private User Input Policy

Claude 在本仓库判断任务优先级时，只使用当前对话和本地私有记忆来对齐用户目标。公开文档不得保存用户原文、抽取表或私有目标快照。

非四层构成材料不要直接删除；先按 [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) 归类，并刷新 [docs/indexes/noncanonical-index.md](docs/indexes/noncanonical-index.md)。

## Claude Working Style

- 用分层表达输出判断：1 句话、3 句话、5 句话、完整论证。
- 对论文和项目分析，优先补“数据从哪来、分析了哪些、进化相关有哪些、时间顺序如何”。
- 对网站内容，优先保证 SEO title/description、静态可构建、public reports 可访问。
- 对项目卡，使用 model-card 类结构：任务、方法、证据、局限、适用场景、教学价值。

## Validation

```bash
node scripts/generate_project_indexes.mjs
node scripts/analyze_github_project_data.mjs
(cd site && npm run build)
```

论文相关变化额外执行：

```bash
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
```

## Handoff

交接时只写当前状态、验证结果、剩余风险和下一步，不重述无关历史。长期信息写入 `docs/` 或生成索引，不依赖对话记忆。
