# Operating Model

## 一句话

每次改动都要回答：它来自哪里、加工到了哪里、产出了什么、如何验证、索引在哪里。

## 分层表达

| 层级 | 内容 |
|---|---|
| 1 句话 | 说明这次改动的主要矛盾和最终产物。 |
| 3 句话 | 说明 raw 来源、加工方式、输出位置。 |
| 5 句话 | 加上风险、验证命令、后续补洞。 |
| 完整版 | 写入对应报告、论文段落、项目卡或管理文档。 |

## 工作循环

1. 先以当前对话里的用户直接输入为准，不把 team、tool 或历史摘要当作目标。
2. 本地私有用户输入记忆只能辅助对齐，禁止提交或发布。
3. 用 `rg` 找到相关素材、脚本和引用，避免只凭目录名判断。
4. 判断产物层级：raw、processed、work、results、ops、mirrors。
5. 判断受众边界：公开叙事进 README/site/paper/report；内部 workflow 进 `AGENTS.md`、`CLAUDE.md`、`CLOUD.md`、`docs/ops/` 或 `work/wiki/`。详细规则见 [../ops/audience-boundary-workflow.md](../ops/audience-boundary-workflow.md)。
6. 修改文件后刷新索引：`node scripts/generate_project_indexes.mjs`。
7. 按影响面跑验证：raw 时间戳、GitHub 分析、论文编译、站点构建。
8. 最终汇报只讲完成了什么、验证了什么、还剩什么风险。

## Quality Gates

| Gate | Command | When |
|---|---|---|
| Raw timestamp | `python3 scripts/enforce_raw_timestamps.py` | raw 或 raw 索引变化 |
| GitHub project data | `node scripts/analyze_github_project_data.mjs` | GitHub 项目、分类、时间线变化 |
| Index coverage | `node scripts/generate_project_indexes.mjs` | 任何长期文件新增、移动或删除 |
| Paper build | `cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex` | 论文 tex/bib/analysis tex 变化 |
| Site build | `cd site && npm run build` | 网站、public reports、项目数据变化 |

## Definition of Done

- 文件放在正确层级，或有明确兼容说明。
- 新产物能从 [../../CONTENT_INDEX.md](../../CONTENT_INDEX.md) 或 [../indexes/master-index.md](../indexes/master-index.md) 进入。
- 论文和网站的公开路径没有断链。
- 数据结论有 raw 或 canonical source。
- 最终回复说明验证结果。
