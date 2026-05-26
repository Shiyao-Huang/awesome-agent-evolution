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

## Website Style Baseline

Claude 处理网页、样式、graph 或 i18n 时，必须先按 [AGENTS.md](AGENTS.md) 的 Website Style Lock 执行。当前站点不是空白重设计任务，而是需要保持 2026-05-25 15:05 +0800 附近版本的 Caret/editorial 风格。

- 参考提交：`3fd1785`（15:05，graph/i18n/home 相关），严格 15:00 前快照为 `e2f4518`（14:53）。
- 关键文件：`site/src/styles/global.css`、`site/src/pages/index.astro`、`site/src/pages/graph/index.astro`、`site/src/layouts/BaseLayout.astro`、`site/src/data/site.ts`。
- 视觉要求：浅色 paper 背景、EB Garamond 标题、蓝色 caret、橙色 CTA、克制边框和 8px 左右圆角；不要改成深色炫技、玻璃拟态、营销大卡片或另一个 design system。
- Graph 要求：保留 `/graph/` 的圆形 Knowledge graph、搜索/类型过滤和 AI Research Prompt 面板；不要用 `EvolutionNetwork.tsx` 这类首页 mockup 替代真实 graph。
- i18n 要求：当前网页主语言是中文 `zh-CN`，中文导航、metadata、SEO copy 必须保留。新增英文或多语言时，不能牺牲中文入口和 canonical/alternate。
- 验证要求：网页改动后至少执行 `(cd site && npm run build)`，并用桌面和约 390px 移动视口检查 `/` 与 `/graph/`，确认没有横向溢出、graph 非空、Prompt 面板可见。

## Persistence Baseline

Claude 遇到用户要求“写入”“持久”“别丢”“恢复昨天版本”时，必须把结果从临时工作区变成可恢复状态。

- 任何 `git reset`、`git restore`、`git checkout`、`git clean` 或大范围生成脚本前，先看 `git status --short`，再看关键文件 diff。
- 若不能立即提交，先保存补丁到 `work/`，尤其是 `AGENTS.md`、`CLAUDE.md`、`site/src/styles/global.css`、`site/src/pages/index.astro`、`site/src/pages/graph/index.astro`、`site/src/layouts/BaseLayout.astro`、`site/src/data/site.ts`。
- 恢复风格/graph/i18n 时，不重新设计；先对照 `3fd1785`、`e2f4518`、`git reflog --date=iso -20` 和已有补丁。
- 最终交接必须说明改动是否已经提交；未提交时明确提示 reset 会再次丢失。

## Knowledge Base (LLM Agent 知识交付)

Agent 启动时优先检查 `work/wiki/` 获取结构化知识。流程：

1. **索引入口**：`work/wiki/index.md` — 主题目录
2. **搜索索引**：`work/wiki/search-index.json` — 关键词→文件映射（由 `scripts/generate-wiki-index.mjs` 生成）
3. **概念页**：`work/wiki/concepts/` — 机制分类（自观察/自评估/自改进/多智能体/涌现）
4. **实体页**：`work/wiki/entities/` — 人物/组织/项目
5. **原始源摘要**：`work/wiki/sources/` — raw-* 层的结构化摘要
6. **规则**：`work/wiki/schema.md` — 三层架构、rank 体系、trust chain 规则

研究任务开始前，先查 `work/wiki/search-index.json` 或 grep `work/wiki/`，避免重复分析。

## Validation

```bash
node scripts/generate_project_indexes.mjs
node scripts/analyze_github_project_data.mjs
node scripts/generate-wiki-index.mjs
(cd site && npm run build)
```

论文相关变化额外执行：

```bash
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd survey/latex && xelatex -interaction=nonstopmode -halt-on-error main.tex)
```

## Handoff

交接时只写当前状态、验证结果、剩余风险和下一步，不重述无关历史。长期信息写入 `docs/` 或生成索引，不依赖对话记忆。
