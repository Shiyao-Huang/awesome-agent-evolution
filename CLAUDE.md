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

- **禁止执行 `git reset --mixed HEAD`、`git reset --hard`、`git checkout .`、`git restore .`、`git clean -f`**：用户明确指令 2026-05-26。任何需要回退的操作必须先确认 `git status --short`，再通过 commit 或 stash 方式保护已有变更。
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

## Iron Rules (铁律)

以下规则由用户于 2026-05-26 明确制定，不可覆盖：

### 1. Single Source of Truth (唯一真实源)

- `paper-drafts/`（英文）是论文的 **唯一真实源**。
- `survey/latex/`（中文）从英文版本 **严格映射**，不是独立创作。
- 修改中文时必须回溯英文源确认；修改英文时必须同步中文。

### 2. Trust Chain (信任链)

- 所有素材和分析结论必须附带 **原始参考链接**。
- 无链接 = 无效素材，不可引用。
- 信任等级：`[KNOWN]` 有原始链接 > `[INFERRED]` 有间接证据 > `[UNVERIFIED]` 无法追溯。
- Wiki 每条声明必须标注来源（survey/chX、paper-reviews/review-XXX、raw-papers/ 等）。

### 3. Rank & Value (等级与价值)

- 所有素材和加工信息必须有 **Rank 区分**（⬤⬤⬤⬤⬤ 到 ⬤）。
- 无 Rank = 无效素材，不入库。
- Rank 体系定义见 `work/wiki/schema.md`。

### 4. LLM Wiki Pattern (知识交付架构)

- 三层架构：Raw sources（不可变）→ Wiki（LLM 维护）→ Schema（规则）。
- 操作：Ingest（入库）、Query（查询）、Lint（检查）。
- 特殊文件：`index.md`（内容目录）+ `log.md`（时序记录），由 agent 自动维护。
- 研究任务开始前，先查 wiki 避免重复分析。

### 5. Git Safety (Git 安全)

- **绝对禁止**：`git reset`（任何形式）、`git checkout .`、`git restore .`、`git clean -f`。
- 文件写入后必须 `git add + git commit` 保护。
- 需要回退时先确认 `git status --short`，通过 commit 或 stash 保护变更。
- 此规则源于 2026-05-26 git reset 事件导致 agent 工作全部丢失的教训。

### 6. Completion = File on Disk (完成 = 文件在磁盘上)

- 任务完成的标准是 **文件已写入磁盘并提交**。
- 聊天描述、任务评论、口头承诺 **不算完成**。
- 交付物必须可验证：`ls` 能看到文件，`git log` 能看到提交。

## Handoff

交接时只写当前状态、验证结果、剩余风险和下一步，不重述无关历史。长期信息写入 `docs/` 或生成索引，不依赖对话记忆。
