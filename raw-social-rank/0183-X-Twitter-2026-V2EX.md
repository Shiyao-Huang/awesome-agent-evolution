# 2026 年年中了，现在开发大型企业级智能体用什么架构方案 - V2EX

- URL: https://www.v2ex.com/t/1212006
- Platform: X/Twitter
- Extraction status: ok
- content_timestamp: 2026-05
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- Query: site:v2ex.com AI Agent 智能体

## Raw Content

## 2026 年年中了，现在开发大型企业级智能体用什么架构方案 - V2EX

**Source**: https://www.v2ex.com/t/1212006

---

[https://www.v2ex.com/](https://www.v2ex.com/)

[首页](https://www.v2ex.com/)[注册](https://www.v2ex.com/signup)[登录](https://www.v2ex.com/signin)

                 • 请不要在回答技术问题时复制粘贴 AI 生成的内容 

[https://www.v2ex.com/member/unt](https://www.v2ex.com/member/unt)

[V2EX](https://www.v2ex.com/)
 › 
[程序员](https://www.v2ex.com/go/programmer)

# 2026 年年中了，现在开发大型企业级智能体用什么架构方案

[javascript:](javascript:)[javascript:](javascript:)
[unt](https://www.v2ex.com/member/unt) · 
9 天前
 · 1832 次点击

其实总体架构没啥的，现在各种设计理念已经很成熟了。随便问下 AI 基本上整体架构思路给得清清楚楚。
但是在某些基础功能的实现上，现在很纠结，比如 MCP 注册，上下文管理，中断等等，是用以下哪种方案呢：
1. 需求理清楚，全部靠 vibe coding 原生实现。
2. 基于 openai response api 提供的功能
3. openai agent sdk

现在时代背景下，agent 框架基本不会再用了，去年写的 langchain 版也废弃重写了。

[智能体](https://www.v2ex.com/tag/%E6%99%BA%E8%83%BD%E4%BD%93)[架构](https://www.v2ex.com/tag/%E6%9E%B6%E6%9E%84)[功能](https://www.v2ex.com/tag/%E5%8A%9F%E8%83%BD)

11 条回复  **•**  2026-05-13 12:54:55 +08:00

|  |  | 1
                    
                    lmmlwen      9 天前 
                    
                    LLM Runtime + Workflow Engine + Tool Platform |
|---|---|---|

|  |  | 2
                    
                    codingmiao      9 天前 
                    
                    这玩意越高水越深，所以我们简单的需求 langchain4j(因为我们有好多 java 的基建)，复杂的直接套壳 claude code 😄 |
|---|---|---|

|  |  | 3
                    
                    flyhelan      9 天前 
                    
                    3 |
|---|---|---|

|  |  | 4
                    
                    shinelamla      9 天前 
                    
                    好奇同问 |
|---|---|---|

|  |  | 5
                    
                    unt   OP   8 天前 via iPhone 
                    
                    @codingmiao Claude 应该是纯手撸的吧，应该属于方案 1 |
|---|---|---|

|  |  | 6
                    
                    Liu6      8 天前 
                    
                    大公司不知道， 我还是用的 langGraph 设计流程 然后手动+各种。 个人觉得 langGraph 还是写起来舒服一点， 啥流程都知道，啥玩意都是自己管理 |
|---|---|---|

|  |  | 7
                    
                    Liu6      8 天前 
                    
                    @Liu6 #6 langGraph 多人协同开发也很方便。 流程设计出来，按节点分工，再让 AI 干就完事了。最后汇总 |
|---|---|---|

|  |  | 8
                    
                    unt   OP   8 天前 
                    
                    @Liu6 依赖框架的话后期想抽身有点难，未来模型的能力和 API 一定是越来越强 |
|---|---|---|

|  |  | 9
                    
                    Liu6      8 天前 
                    
                    @unt #8 langGraph 只是管理模型，按照设计工作流在不同的条件不同的时机下进行调用模型+其他工具。所以我觉得没有抽身困难这一说。  不管未来模型如何变化，也是要根据公司业务场景来考虑的， 模型虽好，也要考虑成本 我相信很多公司 AI 模型用的大部分应该是 flash 版本。尤其是在低耗时且复杂的场景下。目前我这边 就是用的豆包 1.6flash 多个子 agent + 汇总 2.0lite 版本。以上个人观点。  顺便贴 2 个业务的流程图，通过 langGraph 实现起来省了很多代码（忠爱粉）```START      ↓    classify_input_node      ↓    route_by_input_type      ├── first_message → first_message_node      │                       ↓      │                    core_node      │                       ↓      │                      END      │      ├── normal        → reply_node      │                       ↓      │                  emotion_node      │                       ↓      │                    report_node      │                       ↓      │                    core_node      │                       ↓      │                      END      │      └── force_end     → report_node                              ↓                           core_node                              ↓                             END      └── end           → END``````   START      ├── consultation_risk      ├── consultation_knowledge      ├── consultation_sop      └── consultation_tone            ↓      等 risk / knowledge / sop / tone 全部完成            ↓      ├── consultation_reply      # 流式生成最终回复文本，并直接发送 socket partial      ├── consultation_card       # 生成推荐情景卡片      └── consultation_tags       # 生成 suggested_tags            ↓      等 reply / card / tags 全部完成            ↓      consultation_core           # 最终汇总，返回输出            ↓      consultation_summary        # 后台更新历史摘要            ↓      END``` |
|---|---|---|

|  |  | 10
                    
                    Liu6      8 天前 
                    
                    啥时候一个模型能解决所有问题的时候，我觉得就不需要任何框架了。 |
|---|---|---|

|  |  | 11
                    
                    mmdsun      8 天前 via iPhone 
                    
                    我们从 langchain 换 spring ai 了，主要做服务端。现在生态很好，RAG 、工具调用、mcp 、skills 、代码执行沙箱环境都支持。还有 springaicommunity 社区库：https://springaicommunity.mintlify.app |
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
   3564 人在线**
最高记录 6679

·
[Select Language](https://www.v2ex.com/select/language)

                     创意工作者们的社区                     

                     World is powered by solitude                     

VERSION: 3.9.8.5 · 48ms · [UTC 04:58](https://www.v2ex.com/worldclock#utc) · [PVG 12:58](https://www.v2ex.com/worldclock#pvg) · [LAX 21:58](https://www.v2ex.com/worldclock#lax) · [JFK 00:58](https://www.v2ex.com/worldclock#jfk)
♥ Do have faith in what you're doing.
