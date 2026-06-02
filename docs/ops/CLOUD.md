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
| Bilingual entry docs | `README.md`, `README-EN.md` |
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
- 双语发布是 SEO 要求的一部分：中文 `zh-CN` 是默认入口，英文是同证据链镜像；不得发布只剩英文导航、英文 metadata 或失去中文读者路径的站点。

## Bilingual i18n Release Gates

这些门禁来自用户当前直接要求“核心完成 i18N”，适用于所有公开网页、README、SEO/topic/blog 页面、论文页、项目入口和站点 metadata。

1. **中文默认入口存在**：`site/src/data/site.ts`、首页、导航、topic/SEO 入口和 README 必须保留中文标题、描述、导航或摘要；英文内容只能补充，不能替换中文主叙事。
2. **英文镜像不漂移**：`README-EN.md`、英文摘要、英文页面或英文 metadata 必须与中文页面共享同一核心结论、证据入口、限制说明和 public links；不能新增无来源 claim。
3. **SEO metadata 成对检查**：新增或大改 public 页面时，检查 title、description、canonical、alternate/hreflang、Open Graph/Twitter 描述和 sitemap 可构建性；如果当前组件还不支持 alternate/hreflang，必须把缺口写入发布风险，不许当作已完成。
4. **重点页面不得单语发布**：`/`、`/paper/`、`/topics/`、`/projects/`、`/research/`、`/survey/`、`/graph/`、`/blog/`、`/evolve-agi-index/`、`/resource-library/`、`/star-analysis/` 变更后必须检查中英入口或摘要是否同步。
5. **内部说明不进 public copy**：构建命令、agent 启动检查、handoff、wiki ingest、发布门禁说明只放在 `AGENTS.md`、`CLAUDE.md`、`CLOUD.md`、`docs/ops/`；公开页面只写读者价值、证据链和下一步阅读。
6. **缺口可见**：发布前运行 `rg -n "TODO i18n|EN-PENDING|未翻译|待翻译|TODO: translate" README.md README-EN.md site/src docs/seo`；若有命中，必须修复或在交付说明中列出剩余风险。

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
