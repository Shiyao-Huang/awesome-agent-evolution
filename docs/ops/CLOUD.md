# CLOUD.md

## L1

云端发布以 `site/` 的 Astro 静态站点为主，公开下载资源来自 `site/public/reports/` 和论文 PDF。

## Deployment Source

| Item | Path |
|---|---|
| Astro app | `site/` |
| Build output | `site/dist/` |
| Public reports | `site/public/reports/` |
| Project report downloads | `site/public/reports/projects/` |
| Paper page | `site/src/pages/paper/index.astro` |
| Project pages | `site/src/pages/projects/` |
| Site metadata | `site/src/data/site.ts` |
| Current production URL | `https://x.mitbunny.ai` |

## Build

```bash
(cd site && npm run build)
```

`npm run build` 会先执行 `astro check`，再输出静态站点到 `site/dist/`。`site/dist/` 是生成结果，不作为唯一事实源。

## SEO Requirements

- 所有重要页面必须有明确标题、描述和可索引内容。
- 博客、研究、项目、论文页面都应从导航或索引页进入。
- 深度项目页面必须链接公开报告或 model-card 内容。
- 论文页面必须展示数据范围、PDF、关键发现和限制。
- README 和公开站点页面默认面向读者/消费者：解释项目价值、核心结论、证据入口和下一步阅读。Agent 操作、自动化验证、发布门禁和内部 handoff 规则只放在 `AGENTS.md`、`CLAUDE.md`、`CLOUD.md`、`docs/ops/`，不要写进 README 主体。

## Release Gates

```bash
node scripts/generate_project_indexes.mjs
node scripts/analyze_github_project_data.mjs
(cd site && npm run build)
```

论文内容变化时追加：

```bash
(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)
```

## Public Safety

不要把本地 `.aha/`、`.claude/`、`.genome/`、`.gitnexus/`、`.tmp/` 或外部镜像仓库发布到站点 public 目录。`site/public/reports/` 只放经过加工、可公开、可解释的结果。
