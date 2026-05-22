# 热点捕获方法论指南

> 适用场景：AI Agent Self-Evolution领域热点监控，通用方法论可迁移
> 编写时间：2026-05-22
> 编写者：Researcher (基于实战经验+工具调研)

---

## 1. 问题定义：为什么我们漏掉了热门项目

### 1.1 OpenClaw遗漏复盘

**事件**：OpenClaw（362k Stars, GitHub 2026年最热项目）完全不在我们数据集中。

**根因分析**：
1. 搜索关键词偏学术（"self-evolving agent"），OpenClaw定位是"personal AI assistant"
2. 未监控GitHub Trending页面
3. 未搜索中文关键词（OpenClaw在CSDN/知乎/微信公众号全覆盖）
4. 数据源覆盖不足：缺GitHub Trending、微信公众号、X热点

### 1.2 搜索偏差模型

```
学术关键词偏差：
  "self-evolving" → 只找到研究型项目
  "agent evolution" → 只找到论文相关
  缺失: "AI agent", "coding agent", "personal AI", "AI助手"

平台偏差：
  arXiv + GitHub搜索 → 只覆盖学术+开源
  缺失: GitHub Trending, Product Hunt, 微信, X/Twitter

语言偏差：
  英文关键词为主
  缺失: "智能体", "AI进化", "自进化", "Agent开发"
```

---

## 2. 多源监控架构

### 2.1 数据源分层

| 层级 | 数据源 | 检索频次 | 关键词策略 | 工具 |
|------|--------|----------|-----------|------|
| **P0 核心** | arXiv | 每日 | 学术精确词 | arXiv API |
| **P0 核心** | GitHub Trending | 每日 | 分类浏览 | OSSInsight API |
| **P0 核心** | GitHub Search | 每周 | 学术+热门词 | GitHub API |
| **P1 补充** | X/Twitter | 每周 | 话题标签+KOL | 搜索API |
| **P1 补充** | 微信公众号 | 每周 | 中文关键词 | 搜狗微信搜索 |
| **P1 补充** | HackerNews | 每周 | AI/Agent标签 | HN API |
| **P2 扩展** | Reddit | 每月 | r/artificial等 | Reddit API |
| **P2 扩展** | 知乎 | 每月 | 中文技术词 | 知乎搜索 |
| **P2 扩展** | Product Hunt | 每月 | AI Agent分类 | PH API |
| **P2 扩展** | YouTube | 每月 | 技术教程 | YouTube API |

### 2.2 GitHub Trending监控方案

**关键发现**：GitHub没有官方Trending API！需要变通方案。

| 方案 | 优势 | 劣势 | 推荐度 |
|------|------|------|--------|
| **OSSInsight API** | 真正的API，可编程 | 非官方，可能限速 | ⭐⭐⭐⭐⭐ |
| **Apify Scraper** | 全元数据，定时任务 | 付费，有延迟 | ⭐⭐⭐⭐ |
| **GitHub Search API** | 官方，可靠 | 不等于Trending算法 | ⭐⭐⭐⭐ |
| **vitalets/github-trending-repos** | GitHub原生通知 | 仅通知，无分析 | ⭐⭐⭐ |
| **手动检查** | 零成本 | 不可扩展 | ⭐⭐ |

**推荐组合**：
1. 每日用OSSInsight API拉取Top 25 trending repos
2. 每周用GitHub Search API搜索 `sort=stars` + `pushed:>2026-05-01` 过滤新活跃项目
3. 关键词覆盖：`AI agent`, `agent framework`, `self-evolving`, `LLM agent`, `coding agent`

### 2.3 X/Twitter监控策略

**监控维度**：

| 维度 | 具体方法 | 目标 |
|------|----------|------|
| KOL追踪 | 关注@AndrewYNg, @kaborogevsky, @ylecun, @AndrewYNg等 | 早期发现 |
| 话题标签 | #AIAgent, #SelfEvolving, #LLM, #AgentFramework | 社区讨论 |
| 关键词搜索 | "self-evolving agent", "agent evolution", "AI agent framework" | 技术讨论 |
| 热门帖子 | 高互动量帖子（>100 likes + >50 retweets） | 热度识别 |

**工具**：
- X搜索API (v2)：`GET /2/tweets/search/recent`
- Nitter实例：开源前端，绕过登录限制
- RSS feeds：将X搜索转为RSS订阅

### 2.4 中文平台监控

**微信公众号**：
- 搜狗微信搜索：`https://weixin.sogou.com/`
- 关键词："智能体进化", "Agent自进化", "AI进化", "自修改Agent"
- 目标账号：机器之心、新智元、量子位、AI科技评论
- 频次：每周扫一次热门文章

**知乎**：
- 搜索API（非官方）：`https://www.zhihu.com/search?type=content&q=`
- 关注话题：人工智能、AI Agent、LLM
- 热榜监控：每日top 50中AI相关

**CSDN/掘金**：
- 标签搜索："AI Agent", "智能体", "自进化"
- 技术博客为主，可发现实际部署案例

---

## 3. 关键词策略

### 3.1 三层关键词体系

**核心层（学术精确）**：
```json
{
  "en": ["self-evolving agent", "self-improving agent", "recursive self-improvement",
         "agent evolution", "open-ended evolution agent"],
  "zh": ["智能体自进化", "Agent自改进", "递归自我改进", "开放式进化"]
}
```

**方法层（技术精确）**：
```json
{
  "en": ["reinforcement learning agent self-play", "prompt evolution LLM",
         "architecture search agent", "memory self-improvement",
         "agent code self-modification"],
  "zh": ["Agent强化学习自博弈", "提示词进化", "架构搜索Agent", "记忆自改进"]
}
```

**热门层（实战覆盖）** ← **之前缺失的关键层**：
```json
{
  "en": ["AI agent", "coding agent", "personal AI assistant",
         "agent framework", "auto evolve", "self modify code",
         "agent self improve", "autonomous agent"],
  "zh": ["AI智能体", "AI助手", "Agent开发", "自进化AI", "AI进化",
         "Agent框架", "智能体开发", "AI Agent工具"]
}
```

### 3.2 关键词组合矩阵

| 场景 | 关键词组合 | 目标平台 |
|------|-----------|----------|
| 新框架发现 | "agent framework" + "new 2026" + "GitHub" | GitHub/Web |
| 论文追踪 | "self-evolving agent" + "arxiv 2026" | arXiv/Scholar |
| 社区讨论 | "AI agent" + "self-improve" + "experience" | Reddit/HN |
| 中文热点 | "智能体进化" + "最新" | 微信/知乎 |
| 产品发现 | "AI agent" + "Product Hunt" + "2026" | PH/Web |
| 代码趋势 | "self-improving" + "sort:stars" + "pushed:>date" | GitHub API |

### 3.3 负面关键词（排除噪音）

```
-game -minecraft -roblox -gaming
-trading -crypto -forex
-chatbot-only -simple-rag
-course -tutorial-beginner
```

---

## 4. 自动化监控流程

### 4.1 每日检查清单

| 时间 | 动作 | 工具 | 输出 |
|------|------|------|------|
| 09:00 | GitHub Trending扫面 | OSSInsight / 手动 | 新repo列表 |
| 09:30 | arXiv新论文 | arXiv API + cs.AI过滤 | 新论文列表 |
| 10:00 | X/Twitter热点 | 搜索API / 手动 | 热门讨论 |
| 14:00 | 结果汇总 | 对比现有数据 | 增量更新 |

### 4.2 每周检查清单

| 动作 | 工具 | 输出 |
|------|------|------|
| GitHub Search全量搜索 | GitHub API (sort=stars) | 新repo |
| 微信公众号搜索 | 搜狗微信搜索 | 中文文章 |
| 知乎热榜扫描 | 知乎搜索 | 中文讨论 |
| HackerNews深度检查 | HN API + Algolia | 技术讨论 |
| Reddit多版块扫描 | Reddit API | 社区反馈 |
| 引用图更新 | Semantic Scholar API | 引用链 |

### 4.3 每月检查清单

| 动作 | 工具 | 输出 |
|------|------|------|
| 全量关键词重检 | anysearch / WebSearch | 覆盖度验证 |
| 分类统计更新 | raw-github-index | 分类趋势 |
| 交叉验证更新 | 论文+社区+框架 | Mismatch跟踪 |
| 竞品分析 | 同类survey/awesome list | 漏洞发现 |

---

## 5. 热度判断标准

### 5.1 多维热度评分

| 维度 | 指标 | 权重 | 数据源 |
|------|------|------|--------|
| **学术热度** | 论文引用数、顶会录用 | 30% | Semantic Scholar |
| **社区热度** | GitHub Stars/Forks/Issues | 25% | GitHub API |
| **讨论热度** | Reddit/HN/X互动量 | 20% | 各平台API |
| **产业热度** | 生产部署案例、公司采用 | 15% | 博客/新闻 |
| **增长趋势** | Star增速、讨论量变化率 | 10% | 时间序列 |

### 5.2 Star数≠质量的判断规则

**我们已验证**：Star数与生产可用性**负相关**（Top 3 star repos恰恰是被弃用最多的）。

| Star范围 | 可能含义 | 验证动作 |
|----------|----------|----------|
| 100k+ | Hype驱动，历史热度 | 必须查GitHub Issues和弃用率 |
| 10k-100k | 可能是优质框架 | 查commit活跃度、生产案例 |
| 1k-10k | 可能是实用工具 | 查README完整度、社区活跃度 |
| 100-1k | 新兴项目 | 查增长曲线、技术新颖度 |
| 0-100 | 实验性/新项目 | 标记为"watch"，暂不纳入 |

### 5.3 "真正热门"的信号组合

```
真正热门 = 多平台同时出现 + 增长加速 + 技术讨论深度

假信号 = 单平台爆发 + 无技术讨论 + 营销内容多

验证方法：
1. GitHub Star → 是否有对应的X讨论？
2. HN帖子 → 是否有论文支撑？
3. 微信文章 → 是否有GitHub代码？
4. 论文发表 → 是否有开源实现？
```

---

## 6. 实战工具箱

### 6.1 API端点清单

```yaml
# GitHub Trending替代
ossinsight_trending: "https://api.ossinsight.io/v1/repos/trending"

# GitHub Search
github_search: "https://api.github.com/search/repositories?q={query}&sort=stars&order=desc"

# arXiv新论文
arxiv_api: "http://export.arxiv.org/api/query?search_query=cat:cs.AI+AND+ti:agent&sortBy=submittedDate&max_results=50"

# Semantic Scholar引用图
s2_citations: "https://api.semanticscholar.org/graph/v1/paper/{paper_id}/citations"

# HackerNews
hn_search: "https://hn.algolia.com/api/v1/search?query=AI+agent&tags=story"

# 微信搜索
sogou_wechat: "https://weixin.sogou.com/weixin?type=2&query={query}"
```

### 6.2 搜索命令模板

```bash
# GitHub Trending替代（OSSInsight）
curl "https://api.ossinsight.io/v1/repos/trending?period=past_month&language=Python"

# GitHub新agent框架搜索
curl "https://api.github.com/search/repositories?q=agent+framework+pushed:>2026-04-01&sort=stars&per_page=30"

# arXiv最新agent论文
curl "http://export.arxiv.org/api/query?search_query=all:self-evolving+AND+cat:cs.AI&sortBy=submittedDate&max_results=20"

# HN热门AI讨论
curl "https://hn.algolia.com/api/v1/search?query=AI+agent+self-improving&tags=story&numericFilters=points>50"
```

### 6.3 监控脚本框架

```python
# 热点捕获自动化框架（伪代码）
class HotspotMonitor:
    def daily_scan(self):
        trending = self.check_github_trending()
        papers = self.check_arxiv_new()
        tweets = self.check_x_hot()
        return self.merge_and_dedup(trending, papers, tweets)

    def weekly_scan(self):
        repos = self.github_search_full()
        wechat = self.search_wechat_articles()
        hn = self.search_hackernews()
        reddit = self.search_reddit()
        return self.classify_and_rank(repos + wechat + hn + reddit)

    def classify_and_rank(self, items):
        for item in items:
            item.heat_score = (
                0.30 * item.academic_score +
                0.25 * item.community_score +
                0.20 * item.discussion_score +
                0.15 * item.industry_score +
                0.10 * item.growth_score
            )
        return sorted(items, key=lambda x: x.heat_score, reverse=True)
```

---

## 7. 本项目具体改进计划

### 7.1 立即行动（弥补遗漏）

| 优先级 | 项目 | 动作 |
|--------|------|------|
| P0 | OpenClaw主repo | 补充到raw-github/，362k stars |
| P0 | Zuckerman | 收集HN帖子+GitHub信息 |
| P1 | OpenClaw-RL | 补充RL框架 |
| P1 | MicroAgent | 收集轻量自编辑框架 |
| P1 | Hermes Agent (Nous Research) | 收集技能文件系统 |
| P2 | CharlesQ9/Self-Evolving-Agents | 补充DGM官方实现 |
| P2 | Kiro (Amazon) | 收集spec-driven IDE信息 |

### 7.2 关键词扩展（下次搜索必用）

**新增英文关键词**：
- "AI agent platform", "personal AI assistant", "coding agent"
- "agent self-improve", "auto evolve agent", "agent modify code"
- "agent skill engine", "agent memory system", "agent tool creation"

**新增中文关键词**：
- "AI智能体", "AI助手", "Agent开发框架"
- "智能体自进化", "AI自改进", "Agent自我修改"
- "智能体技能引擎", "Agent记忆系统"

### 7.3 平台覆盖扩展

| 平台 | 当前状态 | 改进计划 |
|------|----------|----------|
| GitHub Trending | ❌ 无监控 | 用OSSInsight API每周检查 |
| 微信公众号 | ❌ 无覆盖 | 搜狗微信搜索每周扫 |
| X/Twitter | ⚠️ 偶尔 | 建立KOL列表+关键词监控 |
| Product Hunt | ⚠️ 间接 | 每月检查AI Agent分类 |
| HN | ⚠️ 间接 | 每周检查AI相关高分帖 |

---

## 参考资料

- OSSInsight API文档: https://ossinsight.io/docs/api/
- Apify GitHub Trending Scraper: https://apify.com/parseforge/github-trending-scraper
- GitHub Search API: https://docs.github.com/en/rest/search/search
- HackerNews Algolia API: https://hn.algolia.com/api
- 搜狗微信搜索: https://weixin.sogou.com/
- Semantic Scholar API: https://api.semanticscholar.org/
