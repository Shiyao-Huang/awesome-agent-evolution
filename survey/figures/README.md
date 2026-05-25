# Survey Figures / Data Visualizations

Generated at: 2026-05-25T14:25:53+08:00

这些文件是基础数据阶段的交叉验证可视化，不是最终综述正文。当前输出强调覆盖率、缺口、矛盾点和可追溯中间表，等待论文review、repo交叉分析、博客作者画像、社交全文补齐后应重新生成。

## Markdown + Mermaid 图表

1. `data-coverage-dashboard.md` — 基础数据覆盖率仪表盘
2. `method-taxonomy-mermaid.md` — 方法分类 Mermaid 图 + 论文初分类
3. `evolution-timeline.md` — 领域发展时间线
4. `repo-techstack-and-trend-figures.md` — 348 repo类别/技术栈图
5. `blog-author-impact-figures.md` — 博客/视频作者画像统计
6. `cross-source-validation-map.md` — 论文×实践×痛点×传播交叉验证图
7. `framework-comparison-radar.md` — 框架对比雷达图与评分表
8. `citation-source-statistics.md` — 引用/来源规模统计

## 可追溯中间数据

- `data-coverage-snapshot.csv`
- `paper-method-classification-snapshot.csv`
- `repo-category-stack-cross-tab.csv`
- `blog-author-profile-index.csv`
- `painpoint-index.csv`
- `cross-source-validation-matrix.csv`
- `framework-radar-scores.csv`
- `figure-data-summary.json`

## 已标记的数据口径问题

- raw-papers: 当前时间戳索引为 196 条，Master消息口径为 88/100，需由论文搜索/时间戳任务确认。
- raw-blogs: 当前目录为 1308 个文件，其中 JSON item records 为 652 条；若“1306篇博客”指文件数则已满，若指内容条目则未满。
- pain points: 详细平台文件解析为 97 条，与 Mom Test 总述的97条一致；总述类别表计数存在聚合/重叠口径，不能简单相加。
