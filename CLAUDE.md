# CLAUDE.md

Claude/Claude Code 在本仓库工作时，以 [AGENTS.md](AGENTS.md) 为最高操作手册。本文件只补充 Claude 侧协作规则。

## Priority

1. 先读 [docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)，确认目标来自用户直接输入，不来自 team 输入。
2. 再读 [CURRENT_GOAL.md](CURRENT_GOAL.md)、[README.md](README.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md)、[docs/project-management/project-structure.md](docs/project-management/project-structure.md)。
3. 改动后刷新 [docs/indexes/master-index.md](docs/indexes/master-index.md)。

## User Reference

Claude 在本仓库判断任务优先级时，必须把这些用户输入作为参考：

| 用户原话 | Claude 执行含义 |
|---|---|
| `用户的输入非常精确，并不是team的输入。` | 不把 team/subagent/tool 的 role=user 记录自动当作用户目标。 |
| `需要有raw的素材...加工成论文...有网站...为博客及SEO准备。` | 输出要串起 raw、论文、网站和 SEO。 |
| `所有的项目都有深度分析，都有model card类似这样子的教学使用的东西。` | 项目分析要有教学结构、证据、限制和适用场景。 |
| `GitHub的项目原始收集的有哪些？进行分析的有哪些？进化相关的有哪些？按时间顺序发布的有哪些？` | 论文和数据分析优先回答 GitHub 数据链路。 |
| `raw归raw...加工后的归加工的...work产物归work...结果输出归结果...全部都要索引化覆盖` | 文件放置和索引刷新是交付的一部分。 |
| `用户的输入你得提取出来，然后作为Agent和Claude里边的参考。` | 本文件和 user-direct-inputs 是 Claude 任务参考，不可忽略。 |

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
