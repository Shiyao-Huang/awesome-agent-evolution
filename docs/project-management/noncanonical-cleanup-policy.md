# Noncanonical Cleanup Policy

## L1

不符合 `raw / processed / work / results` 四层构成的材料，不直接删除，先归入 support、compatibility、mirrors、local ignored、release/legal 或 needs-review。

## L2

这些材料很多不是研究素材，但仍然有用：法律文件保证开源发布，Agent/Claude/Cloud 文件保证协作，外部镜像提供证据，本地缓存保证工具运行，根目录旧文件保证脚本和论文引用不炸。清理的目标不是“少文件”，而是“少误解”：任何人一眼能知道它为什么存在、能不能发布、能不能移动、能不能删除。

## Classification

| Class | Examples | Keep Where | Action |
|---|---|---|---|
| support ops | `README.md`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md`, `CONTENT_INDEX.md`, `docs/` | root or `docs/` | 保留；长规则进入 `docs/project-management/` |
| support release/legal | `LICENSE-*`, `NOTICE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md` | root | 保留；开源发布需要 |
| support mirrors | `repos/`, `*__/`, `projects/repos/` | mirror paths | 不删除；不发布；只作为证据来源 |
| local ignored/cache | `.aha/`, `.claude/`, `.genome/`, `.gitnexus/`, `.tmp/`, `.astro/`, `node_modules/`, `.DS_Store` | local only | 由 `.gitignore` 隔离；不作为素材 |
| compatibility raw-root | `mom-test-findings*.md`, `raw-github-index.md`, `social-media-raw-data*.md` | root until references are cleared | 不删；引用清完后迁入 raw 或 `docs/legacy/` |
| compatibility processed-root | `awesome-social-media-resources*.md`, `github-agent-evolution-repos*.md`, `cross-validation-report.md` | root until references are cleared | 不删；引用清完后迁入 processed 或 `docs/legacy/` |
| compatibility work-root | `PAPER_OUTLINE.md` | root until references are cleared | 不删；引用清完后迁入 `paper-drafts/` 或 `docs/legacy/` |
| needs-review holding | 未知来源、无明显归属的文件 | temporary root or `docs/legacy/holding/` | 先查引用和内容，再归层 |

## Cleanup Rules

1. 默认动作是“标注归类”，不是删除。
2. 先用 `rg` 查引用；被脚本、论文、网站、public reports 引用的文件只能标 compatibility。
3. 能再生成的缓存不要纳入索引产物，靠 `.gitignore` 隔离。
4. 有历史价值但不再参与构建的文档迁入 `docs/legacy/`。
5. 有研究价值的分析迁入 `analysis/`、`research/`、`projects/`、`paper-reviews/`。
6. 有发布价值的结果迁入 `reports/` 或 `site/public/reports/`。
7. 外部镜像只读管理，除非用户明确要求，不在镜像内部做本项目治理。

## Decision Tree

```mermaid
flowchart TD
  A["看到一个不符合四层构成的材料"] --> B{"是否是法律/发布/协作入口?"}
  B -- yes --> OPS["support ops or release/legal: 保留根目录或 docs"]
  B -- no --> C{"是否是外部仓库镜像或本地工具状态?"}
  C -- mirror --> MIRROR["support mirrors: 保留但不发布"]
  C -- cache --> CACHE["local ignored/cache: .gitignore 隔离"]
  C -- no --> D{"rg 能找到脚本/论文/网站引用吗?"}
  D -- yes --> COMPAT["compatibility: 不删不移动，记录迁移条件"]
  D -- no --> E{"是否有研究或历史价值?"}
  E -- research --> PROC["迁入 processed 层"]
  E -- history --> LEGACY["迁入 docs/legacy"]
  E -- generated --> RESULT["迁入 results 或标明生成命令"]
  E -- unknown --> HOLD["needs-review holding: 保留待审"]
```

## Command

刷新当前非标准材料索引：

```bash
node scripts/generate_project_indexes.mjs
```

查看结果：

```bash
open docs/indexes/noncanonical-index.md
```
