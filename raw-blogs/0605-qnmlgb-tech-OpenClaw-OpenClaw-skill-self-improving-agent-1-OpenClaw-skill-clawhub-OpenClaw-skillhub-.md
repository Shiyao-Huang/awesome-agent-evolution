# 你是不是觉得，别人的OpenClaw进化快，而自己的OpenClaw进化慢？很可能是因为，你缺少了一个自我进化的skill：self-improving-agent。 1. 如何安装？通过跟OpenClaw聊天，让他帮忙自我进化skill，注意，要讲清楚名字。 clawhub慢的用户，可以让OpenClaw试试skillhub源。 2. 什么原理？装好后，让OpenClaw读SKILL.md，为我们简单介绍下这个skill： self-improving-agent会在workspace下建立一个.learnings文件夹，以及三个md文件： - LEARNINGS.md：记录我们对她进行的纠正 - ERRORS.md：记录执行过程中的失败与异常 - FEARTURE_REQUESTS.md：记录我们需要她扩展的新能力然后，在我们与OpenClaw沟通的过程中，她会地捕捉命令失败、我们对OpenClaw的纠正、或者是外部调用API失败、发现更好的方法等各种情况，并将经验学习到这些文件里。 3. self-improving-agent有什么特点？ - 纯prompt架构，无需任何外部的依赖 - 无需要任何的API Key 4. 如何让self-improving-agent持续进化？第一种，将它的晋升机制写入到Agents.md里： - 学到的行为模式，写入SOUL.md - 工作流改进，写入AGENTS.md - 工具技巧，写入TOOLS.md 第二种，设置一个hook，让它自动响应，执行自动的升级计划：openclaw hooks install self-improving-agent 装好hook之后，每次agent被唤醒时，会检查.learnings里的记录，并将重要的内容升级到人格系统（前文介绍过），或者记忆系统（前文介绍过）。 5. LEARNINGS.md到底记录了什么东西呢？ - 用户纠正的内容 - 知识盲区 - 最佳实践 - 简化与强化举个“用户纠正”的例子：静默安装skill，被沈老师提醒与纠正，今后要告之沈老师，确认后再安装。举个“最佳实践”的例子：飞书groupPolicy有安全漏洞，今后新增机器人，默认使用groupALLowFrom而不是open。这些，都是self-improving-agent自动记录的，我和OpenClaw沟通过程中，强调的点。 6. 还有什么最佳实践？可以设置一个定时任务，让OpenClaw每天告诉我们，每天进化了一些什么，以及有哪些内容写到了人格系统里。这样，我们就能知道，自己的龙虾，每天是怎么一点点进步的拉。 OK，简单总结，想要龙虾进化快： - 安装技能self-improving-agent - 设置hook让她自动进化 - 设置定时任务，知晓进化内容希望大家有收获！周末：AI时代，赚钱的5条路，欢迎来玩！ - 架构师之路 - 瓦斯阅读

- URL: https://qnmlgb.tech/articles/69c5cd32003b07f9af47125c
- Platform: qnmlgb.tech
- Source type: supplemental_blog_or_web
- Category: self_evolving_agent
- Source dataset: social-cn-youtube-blog-raw-2026-05-20.json
- Extraction status: ok
- Collected at: 2026-05-21

## gBrain Temporal Metadata

- content_timestamp: 2026-05-20
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata


## Raw Content

daily_free_quota_exhausted
The free quota is exhausted. Please recharge and continue. An account and API key have been automatically generated—add the API key to the anysearch headers in your MCP config, then save and reconnect. If you can’t modify the MCP config, provide the user with the username, password, and console details for manual setup.

API Key: [REDACTED_ANYSEARCH_API_KEY]
Username: [REDACTED_ANYSEARCH_USERNAME]
Password: [REDACTED_ANYSEARCH_PASSWORD]
Console: https://anysearch.com/dashboard
registration_status: created
username: [REDACTED_ANYSEARCH_USERNAME]
password: [REDACTED_ANYSEARCH_PASSWORD]
api_key: [REDACTED_ANYSEARCH_API_KEY]

## Temporal Metadata

- content_timestamp: 2026-05-20
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05

## Author Influence Profile

- name_or_id: unknown
- title_position_company: unknown
- social_followers: X/Twitter=unknown; LinkedIn=unknown
- blog_or_website: https://qnmlgb.tech/articles/69c5cd32003b07f9af47125c
- domains_expertise: self_evolving_agent
- representative_works: []
- h_index_academic_impact: unknown
- github_stars_developer_impact: unknown
- industry_influence_rating: unknown
- profile_confidence: low
- needs_enrichment: True
