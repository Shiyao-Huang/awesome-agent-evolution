# 拆解 Claude Code 架构： 8 个机制，把 Chat 变成 Agent - V2EX

- URL: https://www.v2ex.com/t/1199006
- Platform: X/Twitter
- Extraction status: fallback_snippet
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

变成 Agent # 拆解 Claude Code 架构： 8 个机制，把 Chat 变成 Agent - 从一个 30 行的 while 循环开始，逐步叠加工具分发、规划系统、子智能体、技能加载、上下文压缩、任务 DAG 、后台并发——完整还原一个 AI Agent 框架的 8 层设计。 - 文章以 learn-claude-code 为教学主线，横向对比 nanobot （轻量生产框架）和 claude-agent-sdk-python （ Anthropic 官方 SDK ），每一章围绕一个设计问题展开，附带核心代码片段和 Mermaid 架构图。也覆盖了 Anthropic 最新的 Server-Side Compaction 、三级 Skills 加载、Prompt Caching 等官方机制。 - 适合有 LLM API 调用经验、想理解 Agent 框架设计决策的工程师。
