# Self Evolve 站点

这是部署到 `https://agent-evolution.com` 的静态 Astro + MDX 中文站点，用作 Self Evolve 品牌入口、GitHub 项目索引和 SEO 博客。

## 命令

```bash
npm install
npm run build
npm run preview
```

## 内容交接位置

- Workflow A 项目卡片：`src/data/projects.ts`
- Workflow B 研究卡片：`src/data/research.ts` 与 `src/content/research/`
- 知识图谱数据：`src/data/knowledgeGraph.ts`
- 知识图谱页面：`src/pages/graph/index.astro`
- 博客文章：`src/content/blog/*.mdx`
- SEO 基础元数据：`src/data/site.ts`

## 开源发布边界

根目录的 `LICENSE-CODE`、`LICENSE-CONTENT`、`NOTICE`、`CONTRIBUTING.md` 和
`docs/` 定义了第一版公开边界：公开站点代码、原创分析、归一化元数据和图谱关系；
原始抓取材料需要先做来源许可和隐私审计。

## 当前生产站点快照

`https://agent-evolution.com` 是当前 Self Evolve / Agent Evolution 站点主域名。本目录提供静态页面、Sitemap、Robots、RSS、Open Graph 与 JSON-LD。
