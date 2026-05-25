# 视觉资产索引

> 生成时间: 2026-05-25
> 数据源: README.md, analysis/, research/, survey/figures/
> 用途: README, 网站, 论文, 社交媒体分享

## 文件清单

| # | 文件 | 类型 | 描述 | 用途 |
|---|---|---|---|---|
| 1 | `01-method-taxonomy-infographic.md` | Mermaid | 六大方法族分类 + 状态空间映射 + 代表论文 + 收敛层级 | README, 论文 §3 |
| 2 | `02-self-evolution-formal-cycle.md` | Mermaid | S=(θ,c,g,m,A) 形式化循环图 + 验证器类型 + 变异算子 + 选择策略 | 论文 §2, README |
| 3 | `03-top20-project-visual-summary.md` | Mermaid | 20 个高影响力项目 Tier 分级卡片 + 详细数据表 | README, 网站 |
| 4 | `04-readme-banner-updated.svg` | SVG | README banner (1200×630), 含统计数据 (486 repos, 196 papers, 6 families, 97 pain points) | README |
| 5 | `05-og-image-template.svg` | SVG | OG image 模板, 可替换 {{TITLE}}/{{SUBTITLE}}/{{STAT}} 占位符 | 社交媒体分享 |
| 6 | `06-method-comparison-radar.md` | Mermaid | 七维评估雷达图 + 方法族评分 + 场景推荐 | 论文 §4, 网站 |
| 7 | `07-painpoint-taxonomy-visual.md` | Mermaid | 97 痛点 7 大族分布 + Top 10 + 缓解映射 | 论文 §7, 网站 |

## 放置建议

| 资产 | 建议 site/public/ 位置 | 说明 |
|---|---|---|
| Mermaid 图 | 嵌入 Markdown 页面, 不需独立文件 | Mermaid 由浏览器渲染 |
| README banner | `site/public/og.svg` (替换现有) | 需 Astro Core 协调 |
| OG 模板 | `site/public/og/` 目录 | 需 Astro Core 协调 |
| SVG 文件 | `site/public/visuals/` | 需 Astro Core 协调 |

## 注意事项

- 所有 SVG 有 alt text 描述
- Mermaid 图可在 GitHub 和 Astro 站点直接渲染
- 文件命名遵循 `NN-descriptive-name.ext` 规范
- 数据源均有引用, 可追溯
