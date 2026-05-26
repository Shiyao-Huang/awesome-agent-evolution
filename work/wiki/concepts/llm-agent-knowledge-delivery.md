---
title: "LLM Agent 知识交付架构"
rank: A
created: 2026-05-26
updated: 2026-05-26
tags: [architecture, knowledge-delivery, agent-infrastructure, wiki, MCP]
sources:
  - work/wiki/schema.md
  - AGENTS.md
  - CLAUDE.md
---

# LLM Agent 知识交付架构

## 核心问题

用户原话："PDF 和论文都是 for Human 的。For LLM Agents 的研究资料库怎么给？skill / CLI / SQLite / wiki？怎么分发？"

source: 用户直接输入, Master 转述 2026-05-26T12:00

## 现状分析

| 层 | 当前机制 | 问题 |
|---|---|---|
| Boot | AGENTS.md → CLAUDE.md → README → CONTENT_INDEX → master-index | 只索引文件路径，不索引知识内容 |
| Raw | raw-github/490, raw-papers/128, raw-social/blogs/1300+ | LLM 可读但无结构化索引，全量读取爆上下文 |
| Wiki | work/wiki/ (刚建，21页) | 有 schema 但未集成到 boot 序列 |
| Site | Astro 静态站 207页 | 为 Human 设计，Agent 无法高效查询 |
| MCP | 无项目级 MCP 配置 | Agent 无结构化查询能力 |

## 推荐架构：三层知识交付

```
┌─────────────────────────────────────────────┐
│          Layer 3: Delivery Layer             │
│  Agent如何获取知识                            │
│  ├─ Boot: CLAUDE.md → wiki/index.md         │
│  ├─ Query: wiki搜索 / grep / MCP tool       │
│  └─ Push: 定期 lint + ingest 保持更新        │
├─────────────────────────────────────────────┤
│          Layer 2: Knowledge Layer            │
│  知识的结构化存储                              │
│  ├─ work/wiki/ (主知识库, markdown)          │
│  ├─ work/wiki/search-index.json (快速检索)   │
│  └─ site/src/data/*.json (网站数据)          │
├─────────────────────────────────────────────┤
│          Layer 1: Raw Layer (IMMUTABLE)      │
│  原始素材                                    │
│  raw-github/ raw-papers/ raw-social/ ...     │
└─────────────────────────────────────────────┘
```

## 方案比较

| 方案 | 优势 | 劣势 | 推荐度 |
|------|------|------|--------|
| **Wiki + CLAUDE.md 集成** | 零成本、现有基础设施、Agent自然语言友好 | 依赖Agent主动读取、无语义搜索 | ⭐⭐⭐⭐⭐ |
| **MCP Tool (知识服务器)** | 精确查询、语义搜索、可扩展 | 需要开发和维护服务、运行时依赖 | ⭐⭐⭐⭐ |
| **SQLite 知识库** | 结构化查询、高效聚合 | 需要同步管道、Agent需要SQL能力 | ⭐⭐⭐ |
| **Skill 封装** | 可复用、可分享 | 知识更新需要重新生成skill | ⭐⭐ |
| **纯 CLI** | 脚本友好 | 交互性差、不适合Agent运行时 | ⭐⭐ |

## 推荐方案：Wiki-First + 搜索索引

### Phase 1：Wiki-First（立即可用）

1. **CLAUDE.md 集成**：在 CLAUDE.md 中添加 wiki 引用
   ```markdown
   ## Knowledge Base
   Before starting research tasks, check:
   - `work/wiki/index.md` — topic catalog
   - `work/wiki/concepts/` — mechanism taxonomy
   - `work/wiki/entities/` — people/org/project pages
   ```

2. **搜索索引**：`work/wiki/search-index.json` — 自动生成的关键词→文件映射
   ```json
   {
     "self-evolution": ["concepts/self-improvement.md", "concepts/self-observation.md"],
     "AlphaEvolve": ["entities/google-deepmind.md", "concepts/architecture-search.md"]
   }
   ```

3. **Agent Skill**：`.claude/skills/knowledge-query.md` — 封装查询模式
   ```markdown
   When asked about self-evolution topics:
   1. Read work/wiki/index.md for overview
   2. Grep work/wiki/ for specific keywords
   3. Cross-reference with raw sources
   ```

### Phase 2：MCP 增强（中期）

为高频查询场景添加 MCP tool：

- `wiki_search(query)` — 全文搜索 wiki
- `wiki_entity(name)` — 获取实体详情
- `wiki_concept(mechanism)` — 获取机制分析
- `wiki_ingest(source_path)` — 从 raw 源提取并写入 wiki

### Phase 3：SQLite 聚合（长期）

当 wiki 规模超过 500 页时，构建 SQLite 层支持：
- 聚合查询（"哪些系统同时使用 Loop III 和 Loop IV？"）
- 统计分析（"2024-2026年人才流向变化趋势"）
- 跨源交叉验证

## 实现原型

### 原型 1：搜索索引生成器

```bash
# scripts/generate-wiki-index.mjs
# 扫描 work/wiki/ 所有 .md 文件
# 提取标题、标签、rank
# 生成 work/wiki/search-index.json
```

### 原型 2：CLAUDE.md 集成

在 CLAUDE.md 中添加 wiki 知识库引用段落。

### 原型 3：Agent Skill 模板

```markdown
# .claude/skills/knowledge-query.md
Query the project knowledge base before research tasks.
Steps: index.md → grep → entity/concept pages → raw sources
```

## 与 LLM Wiki 模式的关系

```
Raw (不可变)          →  Wiki (Agent维护)        →  Schema (规则)
raw-github/ etc.         work/wiki/                AGENTS.md
                         ├─ entities/              CLAUDE.md
                         ├─ concepts/              wiki/schema.md
                         ├─ sources/               wiki/index.md
                         └─ synthesis/
                              │
                              ▼
                    Delivery Layer (本文档设计)
                    ├─ CLAUDE.md 引用
                    ├─ search-index.json
                    ├─ Agent Skills
                    └─ MCP Tools (Phase 2)
```

## 下一步

- [ ] 实现 `scripts/generate-wiki-index.mjs`
- [ ] 更新 CLAUDE.md 添加 wiki 知识库引用
- [ ] 创建 `.claude/skills/knowledge-query.md`
- [ ] 更新 `work/wiki/index.md` 添加本页

---
_本文档由 Builder 实现，基于 work/wiki/schema.md 三层架构设计。
source: 用户直接输入 via Master 2026-05-26T12:02_
