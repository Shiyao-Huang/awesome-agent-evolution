# Noncanonical Cleanup Index

> Generated: 2026-07-04

## 一句话

不属于 `raw / processed / work / results` 的材料不等于垃圾；先归为 support、compatibility、local ignored、mirrors、release/legal 或 needs-review，再决定是否迁移。

## Cleanup Policy

| Class | Meaning | Cleanup Action |
|---|---|---|
| support ops | 项目管理、索引、Agent/Claude/Cloud 手册 | 保留入口；长文档进入 `docs/` |
| support release/legal | 开源发布、许可证、安全、贡献规则 | 保留根目录 |
| support mirrors | 外部仓库镜像 | 不删除；不发布；不混入本项目源码 |
| local ignored/cache | 本地工具状态、依赖、缓存 | 由 `.gitignore` 隔离；不当作素材 |
| compatibility raw-root | 仍被脚本或论文引用的根目录 raw 兼容文件 | 不删；清引用后迁入 raw 或 `docs/legacy/` |
| compatibility processed-root | 仍被引用的根目录加工/报告兼容文件 | 不删；清引用后迁入 processed 或 `docs/legacy/` |
| compatibility work-root | 仍被引用的根目录工作入口 | 不删；清引用后迁入 work 或 `docs/legacy/` |
| needs-review holding | 还没归类清楚的材料 | 不删；先查引用、查内容，再定归属 |

## Current Noncanonical / Support Materials

| Path | Type | Class | Cleanup Action |
|---|---|---|---|
| `-` | file | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |
| `.DS_Store` | file | local ignored/cache | 本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。 |
| `.aha` | dir | local ignored/cache | 本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。 |
| `.astro` | dir | local ignored/cache | 本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。 |
| `.claude` | dir | local ignored/cache | 本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。 |
| `.genome` | dir | local ignored/cache | 本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。 |
| `.git-safe` | dir | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |
| `.gitattributes` | file | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |
| `.github` | dir | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |
| `.gitignore` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `.gitnexus` | dir | local ignored/cache | 本地状态或依赖，不发布；由 .gitignore 隔离，不作为研究素材。 |
| `.gitnexusignore` | file | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |
| `.mermaid` | dir | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |
| `AGENTS.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `CLAUDE.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `CLOUD.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `CODE_OF_CONDUCT.md` | file | support release/legal | 开源发布必需，保留在根目录。 |
| `CONTENT_INDEX.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `CONTRIBUTING.md` | file | support release/legal | 开源发布必需，保留在根目录。 |
| `LICENSE-CODE` | file | support release/legal | 开源发布必需，保留在根目录。 |
| `LICENSE-CONTENT` | file | support release/legal | 开源发布必需，保留在根目录。 |
| `NOTICE` | file | support release/legal | 开源发布必需，保留在根目录。 |
| `README-EN.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `README-ZH.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `README.md` | file | support ops | 管理入口，保留；长文档进入 docs/。 |
| `SECURITY.md` | file | support release/legal | 开源发布必需，保留在根目录。 |
| `docs` | dir | support ops | 管理入口，保留；长文档进入 docs/。 |
| `repos` | dir | support mirrors | 外部镜像，不删除；不混入本项目治理，必要时只读引用。 |
| `work` | dir | needs-review holding | 不删除；先放入待审清单，确认引用后再决定归层或迁入 docs/legacy。 |

## Safe Cleanup Loop

1. 先运行 `rg -n "path-or-title"` 查引用。
2. 有引用的文件先标记 compatibility，不移动。
3. 无引用但有长期价值的文件迁入 `docs/legacy/`、`analysis/`、`research/` 或对应 raw/work/results 层。
4. 本地缓存只靠 `.gitignore` 隔离，不把它纳入论文/网站/结果。
5. 删除只允许处理可再生缓存或明确确认无价值的临时文件；默认不删。
