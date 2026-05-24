# HyperFlow – A self-improving agent framework built on LangGraph

- URL: https://news.ycombinator.com/item?id=47727255
- Platform: Hacker News
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "LangGraph"

## Raw Content

## Show HN: HyperFlow – A self-improving agent framework built on LangGraph | Hacker News

**Source**: https://news.ycombinator.com/item?id=47727255

---

| Hacker Newsnew | past | comments | ask | show | jobs | submitlogin |  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|
|  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |
| Show HN: HyperFlow – A self-improving agent framework built on LangGraph8 points by lablnet 39 days ago  | hide | past | favorite | 1 commentHi HN, I am Umer. I recently built an experimental framework called HyperFlow to explore the idea of self-improving AI agents.Usually, when an agent fails a task, we developers step in to manually tweak the prompt or adjust the code logic. I wanted to see if an agent could automate its own improvement loop.Built on LangChain and LangGraph, HyperFlow uses two agents: 
- A TaskAgent that solves the domain problem.
- A MetaAgent that acts as the improver.The MetaAgent looks at the TaskAgent's evaluation logs, rewrites the underlying Python code, tools, and prompt files, and then tests the new version in an isolated sandbox (like Docker). Over several generations, it saves the versions that achieve the highest scores to an archive.It is highly experimental right now, but the architecture is heavily inspired by the recent HyperAgents paper (Meta Research, 2026).I would love to hear your feedback on the architecture, your thoughts on self-referential agents, or answer any questions you might have!Documentation: https://hyperflow.lablnet.com/
GitHub: https://github.com/lablnet/HyperFlow
axeldunkel 39 days ago  | next [–]
I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent? |  |  | Show HN: HyperFlow – A self-improving agent framework built on LangGraph |  | 8 points by lablnet 39 days ago  | hide | past | favorite | 1 comment |  | Hi HN, I am Umer. I recently built an experimental framework called HyperFlow to explore the idea of self-improving AI agents.Usually, when an agent fails a task, we developers step in to manually tweak the prompt or adjust the code logic. I wanted to see if an agent could automate its own improvement loop.Built on LangChain and LangGraph, HyperFlow uses two agents: 
- A TaskAgent that solves the domain problem.
- A MetaAgent that acts as the improver.The MetaAgent looks at the TaskAgent's evaluation logs, rewrites the underlying Python code, tools, and prompt files, and then tests the new version in an isolated sandbox (like Docker). Over several generations, it saves the versions that achieve the highest scores to an archive.It is highly experimental right now, but the architecture is heavily inspired by the recent HyperAgents paper (Meta Research, 2026).I would love to hear your feedback on the architecture, your thoughts on self-referential agents, or answer any questions you might have!Documentation: https://hyperflow.lablnet.com/
GitHub: https://github.com/lablnet/HyperFlow | axeldunkel 39 days ago  | next [–]
I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent? |  |  | axeldunkel 39 days ago  | next [–]
I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent? |
|  |  | Show HN: HyperFlow – A self-improving agent framework built on LangGraph |  |  |  |  |  |  |  |  |  |
|  | 8 points by lablnet 39 days ago  | hide | past | favorite | 1 comment |  |  |  |  |  |  |  |  |  |  |
|  | Hi HN, I am Umer. I recently built an experimental framework called HyperFlow to explore the idea of self-improving AI agents.Usually, when an agent fails a task, we developers step in to manually tweak the prompt or adjust the code logic. I wanted to see if an agent could automate its own improvement loop.Built on LangChain and LangGraph, HyperFlow uses two agents: 
- A TaskAgent that solves the domain problem.
- A MetaAgent that acts as the improver.The MetaAgent looks at the TaskAgent's evaluation logs, rewrites the underlying Python code, tools, and prompt files, and then tests the new version in an isolated sandbox (like Docker). Over several generations, it saves the versions that achieve the highest scores to an archive.It is highly experimental right now, but the architecture is heavily inspired by the recent HyperAgents paper (Meta Research, 2026).I would love to hear your feedback on the architecture, your thoughts on self-referential agents, or answer any questions you might have!Documentation: https://hyperflow.lablnet.com/
GitHub: https://github.com/lablnet/HyperFlow |  |  |  |  |  |  |  |  |  |  |
| axeldunkel 39 days ago  | next [–]
I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent? |  |  | axeldunkel 39 days ago  | next [–]
I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent? |  |  |  |  |  |  |  |  |
|  |  | axeldunkel 39 days ago  | next [–]
I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent? |  |  |  |  |  |  |  |  |  |
| Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
Search: |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |
