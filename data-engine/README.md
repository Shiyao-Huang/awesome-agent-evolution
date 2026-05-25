# 传播链数据引擎 (Propagation Chain Data Engine)

> 精确追踪 AI Agent / Self-Evolution 领域核心 GitHub 项目的每日传播数据
> 不是泛泛而谈，是精确到每一天的数据追踪链库

## 架构

```
data-engine/
├── collectors/          # 数据采集器（每个 API 一个 collector）
│   ├── github_stars.py  # GitHub Star 历史每日数据
│   ├── github_forks.py  # Fork 历史追踪
│   ├── github_issues.py # Issue/PR 时间线
│   ├── github_events.py # 仓库事件流
│   ├── gh_archive.py    # GH Archive 全量事件
│   ├── hn_search.py     # Hacker News 搜索追踪
│   ├── reddit_search.py # Reddit 讨论追踪
│   ├── semantic_scholar.py # 学术引用追踪
│   ├── youtube_search.py   # YouTube 视频追踪
│   └── chinese_media.py    # 中文媒体追踪
├── storage/             # 数据存储（每日 JSON/CSV）
│   ├── daily_snapshots/ # 每日项目快照
│   ├── events/          # 事件时间线
│   └── propagation/     # 传播链重建数据
├── analysis/            # 分析引擎
│   ├── propagation_rebuilder.py  # 传播链重建
│   ├── anomaly_detector.py       # 异常增长检测
│   ├── hype_scorer.py            # 炒作指数评分
│   └── daily_report.py           # 每日报告生成
├── visualization/       # 可视化
│   └── charts.py        # 图表生成
├── config/
│   ├── projects.json    # 目标项目列表
│   └── api_keys.env     # API 密钥配置
└── README.md
```

## 数据采集维度（每个项目每天）

| 维度 | 数据源 | 粒度 |
|------|--------|------|
| Star 数 | GitHub Stargazers API | 每日总数 + 当日新增 |
| Star 时间戳 | GitHub Stargazers API | 每个 star 的具体时间 |
| Fork 数 | GitHub Forks API | 每日总数 |
| Contributor 数 | GitHub Stats API | 每周 |
| Commit 频率 | GitHub Stats API | 每周/每日 |
| Issue 开关 | GitHub Issues API | 每日 |
| PR 合并 | GitHub PR API | 每日 |
| Release | GitHub Releases API | 事件级 |
| HN 讨论 | Algolia HN API | 每帖 |
| Reddit 讨论 | Reddit API | 每帖 |
| 学术引用 | Semantic Scholar | 每日增量 |
| YouTube 视频 | YouTube Data API | 每视频 |
| 中文媒体报道 | RSS/Scraping | 每篇 |

## 核心 API 清单

| API | 用途 | 免费 | 认证 |
|-----|------|------|------|
| GitHub REST API (Stargazers) | Star 历史 | ✅ | PAT |
| GitHub GraphQL API | 复杂查询 | ✅ | PAT |
| GH Archive | 全量事件 | ✅ | 无 |
| OSSInsight | 深度分析 | ✅ | 可选 |
| HN Algolia Search | HN 讨论 | ✅ | 无 |
| Reddit API | Reddit 讨论 | ✅ | OAuth |
| Semantic Scholar | 学术引用 | ✅ | 可选 |
| YouTube Data API | 视频追踪 | 限额内 | API Key |
| Google Trends (alpha) | 搜索趋势 | ✅ | API Key |
| 知乎 API | 中文讨论 | ✅ | API Key |
| Wayback CDX | 历史快照 | ✅ | 无 |

## 目标项目（首批 50 个）

见 config/projects.json
