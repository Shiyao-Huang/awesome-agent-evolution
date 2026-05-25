# Self Evolve / Awesome Evolution

[English](README.md) | [中文](README-ZH.md)

![Self Evolve 公开研究管线](site/public/visuals/self-evolve-readme-banner.png)

Self Evolve 是一张 AI Agent 自进化研究地图：把项目、论文、benchmark、memory system、skill system、harness 和代码自我改进循环整理成有证据、有报告、能阅读、能比较的知识系统。

## 你在这里能读到什么

这个仓库不是让读者先看目录说明，而是回答听到 “self-evolving agents” 之后真正会问的问题：

- 哪些项目是真系统，哪些只是 demo 或概念信号？
- 哪些方向正在变强：memory、skills、harness、benchmark、reflection、代码进化、多 agent 工作流？
- 如果我要研究、构建、评测、投资或选型 self-improving agents，应该先看哪些项目？
- 每个判断背后的证据在哪里？

## 当前结果

| 结果 | 当前值 | 为什么有价值 |
|---|---:|---|
| GitHub raw captures | 463 | 覆盖 agent evolution、skills、memory、harness、benchmark 和相邻项目的发现层 |
| 已分类 GitHub 仓库 | 463 | 每个抓取仓库都规范化为 category、theme、stack、timestamp、evidence |
| 深度项目/model-card 报告 | 181 | 报告解释角色、机制、证据路径、限制和使用场景，而不是只堆链接 |
| 严格进化相关仓库 | 78 | 直接涉及 evolution、self-improvement、recursive refinement、optimization loop 的核心项目 |
| 广义进化相关仓库 | 173 | 更宽的生态：memory、skill systems、evaluation、harness engineering、coding agents、agent OS |
| 论文 PDF | 213 pages | 基于结构化项目和论文证据构建的可编译综述草稿 |
| 公开站点构建 | 262 pages | 面向读者的项目页、研究页、图谱页、报告页和论文状态页 |

## 主要趋势信号

1. **领域正在从 prompt 走向 agent state。** Memory、skills、harness 配置正在成为 agent 持续改进的可变对象。
2. **很多 self-evolution 本质上是 evaluation 问题。** 强系统不只是改 prompt，而是定义任务、收集失败、控制回归、比较版本。
3. **Skills 正在变成可迁移基础设施。** Claude/Codex/OpenCode 风格的 skill folder 把本地 know-how 变成可复用 agent 能力。
4. **Memory 正在分成产品记忆和研究记忆。** 一类面向用户长期上下文，一类测试检索、冲突处理、状态断言和 benchmark 性能。
5. **热门项目并不等于同样可用。** Model card 会区分可用工具、研究原型、benchmark harness、资源索引和概念信号。

## 最值得先看的入口

| 入口 | 用途 |
|---|---|
| [GitHub Project Data Analysis](analysis/github-project-data-analysis.md) | 语料漏斗、分类计数、进化子集、时间线分析 |
| [Project Model Cards](projects/INDEX.md) | 深度项目报告和 public model-card 覆盖 |
| [Public project reports](site/public/reports/projects/) | 站点使用的读者版报告 |
| [Paper draft](paper-drafts/main.pdf) | 长篇综述论证和附录 |
| [公开知识站](https://shiyao-huang.github.io/awesome-evolution/) | 浏览项目页、研究笔记、图谱页和报告页 |
| [Visual assets](site/public/visuals/) | 语料漏斗、主题分布、项目分组和证据流图 |

## 研究问题

这个仓库围绕四个实际问题组织：

1. 哪些公开项目、论文、benchmark、skill/memory 系统真正属于 AI Agent 自进化？
2. 哪些仓库只是 raw 发现，哪些已经分类分析，哪些值得进入深度 model-card？
3. 这些系统到底是可用产品、研究原型、评测 harness、基础设施，还是概念/热度信号？
4. 这个领域如何沿着 memory、skills、harness、reflection loop、代码自我改进和 benchmark-driven agent iteration 演化？

## 证据管线

所有报告都来自一条可追溯链路：`raw evidence -> classification -> cross-analysis -> model cards -> paper/site outputs`。Raw capture 保留来源文本和时间戳。Processed analysis 把 raw 变成分类、时间线、趋势计数和项目角色。Model card 再把结构化数据翻译成可教学内容：项目做什么、怎么工作、证据是什么、限制在哪里。

## 目录边界

| Layer | Canonical Paths | 放什么 | 不放什么 |
|---|---|---|---|
| Raw / 原始素材 | `raw-github/`, `raw-papers/`, `raw-blogs/`, `raw-social/`, `raw-social-rank/` | URL、时间戳、抓取文本、原始条目 | 主观分析、论文段落、二次总结 |
| Processed / 加工分析 | `analysis/`, `research/`, `projects/`, `paper-reviews/`, `papers/`, `cc-materials/` | 分类、交叉分析、项目 model card、论文 review | 未标来源的 raw dump |
| Work / 工作产物 | `paper-drafts/`, `paper/`, `latex/`, `site/`, `survey/`, `scripts/`, `data-engine/` | 论文草稿、站点源码、生成脚本、图表和中间构建 | 最终交付说明、未追溯素材 |
| Results / 结果输出 | `reports/`, `output/`, `site/public/reports/`, `paper-drafts/main.pdf`, `site/dist/` | 可发布报告、PDF、静态站点输出、下载资源 | 手写的唯一事实源 |
| Mirrors / 外部镜像 | `repos/`, `projects/repos/`, `*__/` | 外部仓库克隆和只读证据 | 本项目治理规则 |
| Ops / 管理协作 | `docs/`, `AGENTS.md`, `CLAUDE.md`, `CLOUD.md`, `CONTENT_INDEX.md` | 规则、索引、发布检查、协作手册 | 大段 raw 数据 |

历史长 README 和旧交付索引已保留在 [docs/legacy/](docs/legacy/)，新的根 README 只承担总控入口职责。

## 必跑命令

```bash
node scripts/generate_project_indexes.mjs
python3 scripts/enforce_raw_timestamps.py
node scripts/analyze_github_project_data.mjs
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
(cd site && npm run build)
```

## 公开知识站

- GitHub 仓库：<https://github.com/Shiyao-Huang/awesome-evolution>
- GitHub Pages：<https://shiyao-huang.github.io/awesome-evolution/>
- 公开边界：默认发布原创文档、标准化元数据、model card、论文草稿、生成报告和网站；raw 抓取全文、外部仓库镜像和本地 agent 状态不进入默认公开提交，等来源条款审计后再决定。

## 主要入口

- 全量索引：[CONTENT_INDEX.md](CONTENT_INDEX.md)
- 英文 README：[README.md](README.md)
- 用户直接输入参考：[docs/project-management/user-direct-inputs.md](docs/project-management/user-direct-inputs.md)
- 非标准材料清理规则：[docs/project-management/noncanonical-cleanup-policy.md](docs/project-management/noncanonical-cleanup-policy.md)
- 生成索引：[docs/indexes/master-index.md](docs/indexes/master-index.md)
- 数据流：[docs/indexes/data-flow-index.md](docs/indexes/data-flow-index.md)
- 目录治理：[docs/project-management/project-structure.md](docs/project-management/project-structure.md)
- 项目管理：[docs/project-management/operating-model.md](docs/project-management/operating-model.md)
- 发布准备：[docs/publishing-readiness-check.md](docs/publishing-readiness-check.md)
- Agent 手册：[AGENTS.md](AGENTS.md)
- Claude 手册：[CLAUDE.md](CLAUDE.md)
- Cloud/部署手册：[CLOUD.md](CLOUD.md)
