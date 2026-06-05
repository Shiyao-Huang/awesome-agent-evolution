# CLAUDE.md

Claude/Claude Code 在本仓库工作时，以 [AGENTS.md](AGENTS.md) 为最高操作手册。本文件只补充 Claude 侧协作规则。

## Priority

1. 公开文案质量是最高指导：网页、README、README-EN、论文页、topic/blog/SEO 入口和 metadata 必须有逻辑、可读、可吸收、双语同证据链，并通过读者/编辑 agents 与学术 agents 双通道审查。
2. 再以当前对话里的用户直接输入为准；本地私有用户输入记忆只能辅助判断，禁止提交或发布。
3. 再读 [README.md](README.md)、[CONTENT_INDEX.md](CONTENT_INDEX.md)、[docs/project-management/project-structure.md](docs/project-management/project-structure.md)。
4. 改动后刷新 [docs/indexes/master-index.md](docs/indexes/master-index.md)。

## User Input Privacy

用户输入原文、抽取文件和长期用户记忆只保留本地，不进入公开仓库。公开手册只保留操作原则：目标来源以当前用户输入为准，raw/processed/work/results 分层治理，长期产物必须索引化，论文和网站改动必须验证。

非四层构成材料不要直接删除；先按 [docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md) 归类，并刷新 [docs/indexes/noncanonical-index.md](docs/indexes/noncanonical-index.md)。

## Claude Working Style

- 用分层表达输出判断：1 句话、3 句话、5 句话、完整论证。
- 对论文和项目分析，优先补”数据从哪来、分析了哪些、进化相关有哪些、时间顺序如何”。
- 对 GitHub 项目排名，禁止把累计 Star 当作主要价值信号；优先查 `analysis/github-star-growth-ranking.md`、`data-engine/github-star-history/` 和覆盖状态，用 2026 新增 Star / recent velocity 判断当前阶段动量。
- 对网站内容，优先保证 SEO title/description、静态可构建、public reports 可访问。
- 对项目卡，使用 model-card 类结构：任务、方法、证据、局限、适用场景、教学价值。
- **图表优先**：当图表比文字更容易表达时，必须使用 Mermaid DAG、SVG 或数据可视化，不要只写文字。
- **Mom Test**：README 和面向用户的内容必须让非专业人士能理解项目做什么、为什么重要。
- **Public copy review gate**：所有公开文案，尤其网站、README、README-EN、SEO/topic/blog 页面和 metadata，发布前必须经过 `3-5` 个读者/编辑 agents 与 `3` 个学术 agents 审查。读者/编辑看可读性、Mom Test、行动路径、中英入口；学术 agents 看术语、证据链、claim 强度、限制和 `[UNVERIFIED]`。无法调度时必须在交付中写明风险，不能标记为质量已完成。
- **证据链**：每个分析结论标注数据来源。无法追溯的标注 `[UNVERIFIED]`。
- **中文调查同步**：`survey/` 是中文版调查，与 `paper-drafts/` 平行。修改一方时检查另一方是否需要同步。
- **读者/Agent 边界**：README、网站首页、论文页、SEO 页面是给外部读者/消费者看的；不要把 agent 启动检查、内部构建命令、wiki ingest 流程、handoff 或自我系统说明塞进 README 主体。Agent 操作规则写在 `AGENTS.md`、`CLAUDE.md`、`CLOUD.md` 或 `docs/ops/`。
- **Workflow 分流**：具体执行见 [docs/ops/audience-boundary-workflow.md](docs/ops/audience-boundary-workflow.md)。公开页面只写读者问题、证据、结论和下一步阅读；内部 workflow、验证门禁、handoff 和自我镜像规则留在 ops/wiki/agent 手册。

## Website Style Baseline

Claude 处理网页、样式、graph 或 i18n 时，必须先按 [AGENTS.md](AGENTS.md) 的 Website Style Lock 执行。当前站点不是空白重设计任务，而是需要保持 2026-05-25 15:05 +0800 附近版本的 Caret/editorial 风格。

- 参考提交：`3fd1785`（15:05，graph/i18n/home 相关），严格 15:00 前快照为 `e2f4518`（14:53）。
- 关键文件：`site/src/styles/global.css`、`site/src/pages/index.astro`、`site/src/pages/graph/index.astro`、`site/src/layouts/BaseLayout.astro`、`site/src/data/site.ts`。
- 视觉要求：浅色 paper 背景、EB Garamond 标题、蓝色 caret、橙色 CTA、克制边框和 8px 左右圆角；不要改成深色炫技、玻璃拟态、营销大卡片或另一个 design system。
- Graph 要求：保留 `/graph/` 的圆形 Knowledge graph、搜索/类型过滤和 AI Research Prompt 面板；不要用 `EvolutionNetwork.tsx` 这类首页 mockup 替代真实 graph。
- i18n 要求：当前网页主语言是中文 `zh-CN`，中文导航、metadata、SEO copy 必须保留。新增英文或多语言时，不能牺牲中文入口和 canonical/alternate。
- 文案质量要求：网页与 README 改动必须按 Public copy review gate 完成读者/编辑审查和学术审查，审查结果需要覆盖中文主叙事、英文镜像、证据入口、限制说明和读者下一步。
- 验证要求：网页改动后至少执行 `(cd site && npm run build)`，并用桌面和约 390px 移动视口检查 `/` 与 `/graph/`，确认没有横向溢出、graph 非空、Prompt 面板可见。

## Persistence Baseline

Claude 遇到用户要求“写入”“持久”“别丢”“恢复昨天版本”时，必须把结果从临时工作区变成可恢复状态。

- **禁止执行 `git reset --mixed HEAD`、`git reset --hard`、`git checkout .`、`git restore .`、`git clean -f`**：用户明确指令 2026-05-26。任何需要回退的操作必须先确认 `git status --short`，再通过 commit 或 stash 方式保护已有变更。
- 若不能立即提交，先保存补丁到 `work/`，尤其是 `AGENTS.md`、`CLAUDE.md`、`site/src/styles/global.css`、`site/src/pages/index.astro`、`site/src/pages/graph/index.astro`、`site/src/layouts/BaseLayout.astro`、`site/src/data/site.ts`。
- 恢复风格/graph/i18n 时，不重新设计；先对照 `3fd1785`、`e2f4518`、`git reflog --date=iso -20` 和已有补丁。
- 最终交接必须说明改动是否已经提交；未提交时明确提示 reset 会再次丢失。

## Knowledge Base — LLM Wiki Pattern

本仓库采用 LLM Wiki Pattern 作为知识交付架构。Agent 不是每次从原始文档重新检索（RAG），而是维护一个 **持久、累积、交叉引用** 的 wiki 中间层。知识编译一次，持续更新，不重复推导。

### 三层架构

```
Layer 1 — Raw Sources (不可变)        Layer 2 — Wiki (Agent 维护)           Layer 3 — Schema (规则)
raw-github/  raw-papers/              work/wiki/                           work/wiki/schema.md
raw-social/  raw-blogs/               ├── concepts/                        CLAUDE.md
  ↑ Agent 只读，永不修改                ├── entities/                      AGENTS.md
  ↑ Source of Truth                     ├── sources/
                                        ├── synthesis/
                                        ├── index.md  ← 内容目录
                                        ├── log.md    ← 时序记录
                                        └── search-index.json
```

- **Raw 层不可变**：Agent 从 raw-* 读取但永不修改。这是原始真实源。
- **Wiki 层由 Agent 拥有**：Agent 创建页面、更新交叉引用、标记矛盾、维持一致性。
- **Schema 层定义规则**：`work/wiki/schema.md` 规定格式、rank、trust chain、操作流程。

### 核心操作

| 操作 | 流程 | 触发时机 |
|------|------|----------|
| **Ingest** | 读 raw 源 → 提取关键信息 → 写/更新 wiki 页面 → 更新 index.md → 追加 log.md | 新素材入库 |
| **Query** | 读 index.md 定位 → 读目标页 → 综合回答（含引用）→ 好的回答可回存为新 synthesis 页 | 研究提问 |
| **Lint** | 查孤立页、过期声明、缺失 frontmatter、[UNVERIFIED] 可验证化、缺失交叉引用 | 定期/手动 |

**关键原则：** 单个源可能触发 10-15 个 wiki 页面更新。Ingest 不是简单索引，是知识整合。

### 启动检查（每个 Agent 会话）

1. 读 `work/wiki/index.md` — 获取全貌和最近更新
2. 读 `work/wiki/log.md` 最后 5 条 — 理解近期操作历史
3. 查 `work/wiki/search-index.json` 或 grep `work/wiki/` — 避免重复分析
4. 遵循 `work/wiki/schema.md` 的 rank 和 trust chain 规则

### Wiki 页面格式

每个页面必须有 YAML frontmatter：
```yaml
---
title: 页面标题
type: concept | entity | source | synthesis
rank: A | B | C
tags: [tag1, tag2]
sources: [path/to/raw/source]
updated: YYYY-MM-DD
---
```
- **Rank A**：有原始链接、交叉验证、直接相关
- **Rank B**：有原始链接、合理但未交叉验证
- **Rank C**：无原始链接，或相关性弱

### Trust Chain（信任链）

- 每条事实声明必须标注来源：`[CLAIM] — Source: [URL or file path]`
- 信任等级：`[KNOWN]` 有原始链接 > `[INFERRED]` 有间接证据 > `[UNVERIFIED]` 无法追溯
- 无链接 = 无效声明，必须标 `[UNVERIFIED]`

### 特殊文件

| 文件 | 用途 | 维护频率 |
|------|------|----------|
| `index.md` | 内容目录，按类别列出所有页面 | 每次 ingest |
| `log.md` | 时序记录，格式 `## [YYYY-MM-DD HH:MM] operation \| title` | 每次操作 |
| `search-index.json` | 关键词→文件映射（`scripts/generate-wiki-index.mjs` 生成） | 每次 ingest/lint |
| `schema.md` | Wiki 规则：三层架构、rank 体系、trust chain | 按需更新 |

### Compounding（累积原则）

Wiki 是 **持久累积产物**，不是一次性检索结果：
- 交叉引用已经建立，不需要每次重建
- 矛盾已经被标记，新源可以挑战旧结论
- 综合分析已经反映所有已读内容
- 好的回答（比较分析、连接发现）应回存为新的 wiki 页面，不让它消失在聊天历史中

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
- **完整定义见上方 `Knowledge Base — LLM Wiki Pattern` 章节。**

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

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **awesome-evolution-workspace-cleanup** (28875 symbols, 33942 relationships, 172 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/awesome-evolution-workspace-cleanup/context` | Codebase overview, check index freshness |
| `gitnexus://repo/awesome-evolution-workspace-cleanup/clusters` | All functional areas |
| `gitnexus://repo/awesome-evolution-workspace-cleanup/processes` | All execution flows |
| `gitnexus://repo/awesome-evolution-workspace-cleanup/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
