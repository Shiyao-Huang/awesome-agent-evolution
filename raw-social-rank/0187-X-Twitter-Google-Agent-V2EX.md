# Google 关于 Agent 的核心观点 - V2EX

- URL: https://www.v2ex.com/t/1172774
- Platform: X/Twitter
- Extraction status: ok
- content_timestamp: 2025-11
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-11
- Query: site:v2ex.com AI Agent 智能体

## Raw Content

## Google 关于 Agent 的核心观点 - V2EX

**Source**: https://www.v2ex.com/t/1172774

---

[https://www.v2ex.com/](https://www.v2ex.com/)

[首页](https://www.v2ex.com/)[注册](https://www.v2ex.com/signup)[登录](https://www.v2ex.com/signin)

                 • 请不要在回答技术问题时复制粘贴 AI 生成的内容 

[https://www.v2ex.com/member/michael2016](https://www.v2ex.com/member/michael2016)

[V2EX](https://www.v2ex.com/)
 › 
[程序员](https://www.v2ex.com/go/programmer)

# Google 关于 Agent 的核心观点

[javascript:](javascript:)[javascript:](javascript:)
[michael2016](https://www.v2ex.com/member/michael2016) · 
2025 年 11 月 14 日
 · 1862 次点击

这是一个创建于 188 天前的主题，其中的信息可能已经有所发展或是发生改变。

最近 Google 发布了最新的 Agent 方面的白皮书-《 Introduction to Agents 》 ，推荐看看
这个白皮书几乎可以看作是对“智能体时代”正式宣言。它系统地定义一种新型软件范式——让模型能自主思考、决策和执行，AI 正在从“预测”走向“行动”。

这份文档指出，AI 正在经历一场范式转变：从被动的“预测式 AI”（一问一答）转向主动的“行动式 AI”——即自主智能体（ Autonomous Agents ）。

1. 智能体的核心定义与结构本质区别

智能体能围绕一个目标自我规划、行动、再评估，不再等待指令。

闭环结构：LLM (推理) + 工具 (行动) + 编排层 (调度) + 部署环境 (长期运行)。

2. 智能体的工作循环：

行动与观察智能体通过一个循环实现目标驱动的行动能力：

五步循环： 获取任务 → 扫描场景 → 思考计划 → 执行动作 → 观察反馈 & 迭代。

关键角色： 智能体是“上下文窗口的策展人”（ Curator of Context Window ），它持续组织、过滤信息，确保模型始终聚焦任务关键点。

3. 智能体的分级体系

部署路线图提出了一个五层级体系，作为企业部署智能体架构的路线图：

级别 (Level)特性核心能力

Level 0:纯推理模型基础问答（纯 LLM ）
Level 1:连接型解决者能调用外部工具（ API ）
Level 2:战略型智能体策略规划、上下文工程
Level 3:多智能体协作类似团队协作，分工完成复杂任务
Level 4:自我演化系统能创造新工具或子智能体（学习型组织）

4. 三大核心组件

脑、手与神经系统智能体由三部分组成，并强调模型选择的重要性：脑 (Model)： 

推理与决策中心。手 (Tools)： 执行动作的能力（如 RAG 、API 、代码）。

神经系统 (Orchestration Layer)： 调度逻辑、记忆与策略。

模型分层调度： 不只是模型越大越好，应根据任务选择最优组合（复杂任务用强模型，高频简单任务用轻模型）。

5. Agent Ops

智能体的运维哲学新概念：Agent Ops （智能体运维），是 DevOps 在智能体时代的应用。

挑战： 智能体行为具有不确定性，传统单元测试失效。

目标： 通过指标驱动、日志追踪、模型评审和用户反馈闭环，在不确定中保持系统可靠性。

6. 安全与治理

从单体到舰队管理问题： 如何管理一群智能体（ Agent Fleet ），避免智能体泛滥失控 (Agent Sprawl)。

解决方案： 建立控制面板 (Control Plane)，统一管理身份、权限和通信协议。

关键概念： 将 Agent 视为能独立被认证、被授信的“新型主体 (Principal)”。

7. 学习与自演化 Agent Gym：

提出在模拟环境中训练、演练、红队测试智能体的概念，使其能自我进化和“成长”。

几句重要的观点：

1. 智能体的本质，是上下文窗口的策展人（ curator of context window ）。——它不断组织、更新、过滤信息，让模型始终聚焦在当前任务最关键的上下文上。

2. Agent = 新的软件范式。过去我们以为“智能体”只是“会用工具的模型”，但 Google 用这份文档明确告诉大家——Agent 是一种新的软件范式。它不是应用 AI ，而是用 AI 重新定义应用。

3. Agent 的核心不在“思考”，而在编排（ orchestration ）。未来的开发者更像导演而不是程序员——我们要设计场景、挑演员、布置镜头，让智能体自然演出目标行为。

有兴趣可以详读原文。

[agent](https://www.v2ex.com/tag/agent)[智能体时代](https://www.v2ex.com/tag/%E6%99%BA%E8%83%BD%E4%BD%93%E6%97%B6%E4%BB%A3)[行动式 AI](https://www.v2ex.com/tag/%E8%A1%8C%E5%8A%A8%E5%BC%8F%20AI)

2 条回复  **•**  2025-11-28 22:02:13 +08:00

|  |  | 1
                    
                    erlkingrui999      2025 年 11 月 18 日 
                    
                    白皮书地址在哪里啊求分享，没搜到😅 |
|---|---|---|

|  |  | 2
                    
                    rolandzhou      2025 年 11 月 28 日 via iPhone 
                    
                    @erlkingrui999 https://www.kaggle.com/whitepaper-introduction-to-agents |
|---|---|---|

[https://www.digitalocean.com/?refcode=1b51f1a7651d](https://www.digitalocean.com/?refcode=1b51f1a7651d)
**[关于](https://www.v2ex.com/about)
·
[帮助文档](https://www.v2ex.com/help)
·
[自助推广系统](https://www.v2ex.com/pro/about)
·
[博客](https://blog.v2ex.com/)
·
[API](https://www.v2ex.com/help/api)
·
[FAQ](https://www.v2ex.com/faq)
·
[Solana](https://www.v2ex.com/solana)
·
   3560 人在线**
最高记录 6679

·
[Select Language](https://www.v2ex.com/select/language)

                     创意工作者们的社区                     

                     World is powered by solitude                     

VERSION: 3.9.8.5 · 43ms · [UTC 04:58](https://www.v2ex.com/worldclock#utc) · [PVG 12:58](https://www.v2ex.com/worldclock#pvg) · [LAX 21:58](https://www.v2ex.com/worldclock#lax) · [JFK 00:58](https://www.v2ex.com/worldclock#jfk)
♥ Do have faith in what you're doing.
