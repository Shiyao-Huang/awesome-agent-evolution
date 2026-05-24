# 一篇自进化Agents技术最新综述：迈向人工超级智能 - 腾讯云开发者社区-腾讯云

- URL: https://developer.cloud.tencent.com/news/2831538
- Platform: developer.cloud.tencent.com
- Extraction status: ok
- content_timestamp: 2025-08
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-08
- Query: site:cloud.tencent.com AI Agent 自优化

## Raw Content

## 一篇自进化Agents技术最新综述：迈向人工超级智能 - 腾讯云开发者社区-腾讯云

**Source**: https://developer.cloud.tencent.com/news/2831538

---

[腾讯云](https://cloud.tencent.com/?from=20060&from_column=20060)

[开发者社区](https://developer.cloud.tencent.com)

[文档](https://cloud.tencent.com/document/product?from=20702&from_column=20702)[建议反馈](https://cloud.tencent.com/voc/?from=20703&from_column=20703)[控制台](https://console.cloud.tencent.com/?from=20063&from_column=20063)

[首页](https://developer.cloud.tencent.com)

学习

活动

专区

圈层

工具

[MCP广场](https://developer.cloud.tencent.com/mcp)

文章/答案/技术大牛

发布

**

**

# 一篇自进化Agents技术最新综述：迈向人工超级智能

文章来源：企鹅号 - 深度学习与NLP

[举报](javascript:;)

LLMs 虽然在多种任务中表现出色，但本质上是静态的，无法适应新任务、知识领域的演变或动态交互环境，因此，研究者们开始关注能够实时适应性推理、行动和进化的Agents系统，这种从静态模型到自进化Agents的范式转变，为实现人工超级智能（ASI）铺平了道路。

首次系统地回顾了自进化智能体（Self-Evolving Agents）的研究进展。围绕“什么要进化”“何时进化”“如何进化”三个核心问题展开，为AI领域中从静态模型向动态、自适应智能体系统的发展提供理论框架和实践指导。

2022年至2025年若干代表性自进化代理框架的进化全景图

一、什么要进化？

探讨代理系统中哪些部分可以进化，包括模型、上下文（如记忆和提示）、工具和架构。

模型

**自生成监督学习**：通过角色交替生成问题和解决方案，利用成功轨迹微调模型参数。

**交互反馈学习**：将执行轨迹或自然语言批评作为奖励信号，结合监督微调和强化学习框架，实现持续策略改进。

**文本反馈学习**：将非结构化文本反馈视为可微训练信号，影响提示设计和模型参数。

上下文

**记忆进化**：积累知识、回忆事件并根据经验调整行为，如基于遗忘曲线的记忆管理、动态记忆更新和经验总结。

**提示优化**：改进代理输入给底层模型的指令，无需修改模型权重，如基于搜索的优化、迭代重写和自然语言修正。

工具

**自主发现和创建**：克服固定工具集的限制，按需创新，如探索性发现、反应式创建和结构化框架。

**掌握工具**：通过迭代改进掌握新生成的工具，确保工具的可靠性和实用性。

**管理工具**：高效管理和选择工具，如工具编码和架构优化。

架构

**单代理系统优化**：优化LLM调用节点和代理的整体架构，如节点优化和架构优化。

**多代理系统优化**：优化代理之间的组织和通信结构，如工作流优化和多代理协同进化。

**二、何时进化（When to Evolve）**：

分析进化发生的时间点，分为测试时进化（intra-test-time）和测试间进化（inter-test-time）。

测试时进化

**基于上下文学习（ICL）**：动态调整模型的上下文窗口，实现即时适应，无需修改模型参数。例如，AdaPlanner通过自我反思和计划修订，动态调整策略。

**监督微调（SFT）**：代理通过生成“自我编辑”指令，直接对模型参数进行即时调整。例如，Self-Adaptive Language Modeling通过强化学习训练模型生成有效的自我编辑指令。

**强化学习（RL）**：代理在遇到超出当前能力范围的问题时，通过生成相关问题变体并进行针对性的强化学习，实现即时技能获取。例如，LADDER通过测试时强化学习（TTRL）机制，针对特定问题类别进行强化学习。

测试间进化

**基于上下文学习（ICL）**：将之前任务的执行结果和反馈作为上下文信息，指导未来任务的解决。例如，Wang等人通过从代理行动历史中诱导工作流，并将其纳入后续任务的上下文中，实现知识的积累和复用。

**监督微调（SFT）**：通过生成合成数据和自我评估，实现迭代自我改进。例如，SELF通过自我反馈和自我修正能力，迭代生成对未标记指令的响应，并通过自我批评进行优化。

**强化学习（RL）**：利用无约束的计算资源，通过与环境的广泛交互和复杂的课程设计，优化代理策略。例如，RAGEN和DYSTIL通过在线强化学习，优化多轮交互任务中的代理策略。

**三、如何进化（How to Evolve）**：

总结引导进化适应的方法，包括基于奖励的进化、模仿和示范学习、基于种群和进化的方法。

基于奖励的进化

**文本反馈**：利用自然语言反馈指导代理的改进。例如，Reflexion通过自然语言反思改进代理的行为。

**内部奖励**：利用模型自身的置信度或概率估计作为奖励信号。例如，Self-Rewarding Self-Improving通过内部奖励机制实现自我改进。

**外部奖励**：利用外部环境提供的奖励信号。例如，SWE-Dev通过环境反馈优化代理的行为。

**隐式奖励**：利用模型的内在奖励机制，如“Reward Is Enough”通过简单的标量信号实现奖励学习。

模仿与示范学习

**自生成示范学习**：代理通过生成自己的训练数据来改进行为。例如，STaR通过生成和验证问题解决方案来提升推理能力。

**跨代理示范学习**：代理通过学习其他代理的示范来改进行为。例如，SiriuS通过多阶段改进和反馈整合来提升性能。

**混合示范学习**：结合自生成和跨代理示范学习。例如，SOFT通过内部反馈进行优化，提升代理的性能。

基于种群和进化的方法

**单代理进化**：通过种群机制进化单个代理。例如，Darwin Gödel Machine通过开放性进化实现自我改进。

**多代理进化**：通过种群机制进化多个代理。例如，EvoMAC通过多代理协同进化提升性能。

**混合进化方法**：结合单代理和多代理进化。例如，AutoFlow通过自适应搜索优化代理工作流。

https://arxiv.org/pdf/2507.21046Github Repo: https://github.com/CharlesQ9/Self-Evolving-AgentsA Survey of Self-Evolving Agents: On Path to Artificial Super Intelligence

- 
发表于:  2025-08-05
2025-08-05 08:04:25

- 原文链接：https://page.om.qq.com/page/OGwPdUkGzUHPTQDJZCjI9HZA0
- 腾讯「腾讯云开发者社区」是腾讯内容开放平台帐号（企鹅号）传播渠道之一，根据[《腾讯内容开放平台服务协议》](https://om.qq.com/notice/a/20160429/047194.htm)转载发布内容。
- 如有侵权，请联系 cloudcommunity@tencent.com 删除。

[0](javascript:;)

分享

- 
[javascript:;](javascript:;)

分享快讯到朋友圈

- 
[javascript:;](javascript:;)

分享快讯到 QQ

- 
[javascript:;](javascript:;)

分享快讯到微博

- 
[javascript:;](javascript:;)

复制快讯链接到剪贴板

- [上一篇：ACL 2025凉凉，这情况，大家做好准备吧。。。](https://developer.cloud.tencent.com/news/2831537)
- [下一篇：全国共享！九派∙Basin流域水文模型今日起开放使用](https://developer.cloud.tencent.com/news/2831547)

## 
相关
快讯

- 

### [后训练时代如何延续Scaling Law？这是你该读的LLM后训练综述](https://developer.cloud.tencent.com/news/2507440)

2025-05-01

- 

### [预训练、微调和上下文学习](https://developer.cloud.tencent.com/news/1102398)

2023-06-14

- 

### [【Agent】AI智能体(Agent)能力定义与分级：L0-L5，揭秘AI智能体的进化之路](https://developer.cloud.tencent.com/news/1625409)

2024-07-23

- 

### [从自我进化视角出发，全面解析LLM的推理能力技术演进路径](https://developer.cloud.tencent.com/news/2272529)

2025-03-06

- 

### [机器人可以转笔？！NVIDIA突破进展，使用ChatGPT训练机器人](https://developer.cloud.tencent.com/news/1220460)

2023-10-21

- 

### [强化学习与深度学习融合叠加大模型：重构业务回答准确率的技术方案！](https://developer.cloud.tencent.com/news/2575421)

2025-05-19

- 

### [广告行业中那些趣事系列70：狂飙的ChatGPT：从技术原理到应用案例](https://developer.cloud.tencent.com/news/1295744)

2024-01-18

- 

### [硬核解析｜​ChatGPT的深层原理](https://developer.cloud.tencent.com/news/1021137)

2023-03-07

- 

### [SCoRe: 通过强化学习教导大语言模型进行自我纠错](https://developer.cloud.tencent.com/news/1743737)

2024-10-03

- 

### [MIT再出王炸！全新自学习AI框架PRefLexOR：让AI像人一样深度思考，自主进化！](https://developer.cloud.tencent.com/news/2259122)

2025-03-04

- 

### [直觉力：无需外部奖励的大语言模型自主推理学习](https://developer.cloud.tencent.com/news/2621351)

2025-05-29

- 

### [Sebastian Raschka长文：DeepSeek-R1、o3背后，RL推理训练正悄悄突破上限](https://developer.cloud.tencent.com/news/2457917)

2025-04-22

- 

### [在卷积神经网络的背景下，AlexNet、GoogleNet 和 VGG 有什么区别？](https://developer.cloud.tencent.com/news/1264014)

2023-12-06

- 

### [强化学习赋能工具推理，ToRL实现奥数解题能力跃升17%](https://developer.cloud.tencent.com/news/2548504)

2025-05-13

- 

### [绝对零监督Absolute Zero：类AlphaZero自博弈赋能大模型推理，全新零数据训练范式问世](https://developer.cloud.tencent.com/news/2526537)

2025-05-08

- 

### [当前，怎样理解 ChatGPT 技术先进性？](https://developer.cloud.tencent.com/news/1108210)

2023-06-17

- 

### [至顶智库 | 图文并茂万字解读DeepSeek核心技术概念](https://developer.cloud.tencent.com/news/2188289)

2025-02-17

- 

### [大模型驱动的具身智能：人工智能迈向实体机器人的重要突破](https://developer.cloud.tencent.com/news/2436635)

2025-04-17

- 

### [决策能力暴增500%！语言模型微调技术突破](https://developer.cloud.tencent.com/news/2577856)

2025-05-20

- 

### [微软推出全新开源模型PH4，性能堪比DeepSeek-R1，参数量大幅减少48倍](https://developer.cloud.tencent.com/news/2537553)

2025-05-11

- 

### 社区

  - [技术文章](https://developer.cloud.tencent.com/column)
  - [技术问答](https://developer.cloud.tencent.com/ask)
  - [技术沙龙](https://developer.cloud.tencent.com/salon)
  - [技术视频](https://developer.cloud.tencent.com/video)
  - [学习中心](https://developer.cloud.tencent.com/learning)
  - [技术百科](https://developer.cloud.tencent.com/techpedia)
  - [技术专区](https://developer.cloud.tencent.com/zone/list)

- 

### 活动

  - [自媒体同步曝光计划](https://developer.cloud.tencent.com/support-plan)
  - [邀请作者入驻](https://developer.cloud.tencent.com/support-plan-invitation)
  - [自荐上首页](https://developer.cloud.tencent.com/article/1535830)
  - [技术竞赛](https://developer.cloud.tencent.com/competition)

- 

### 圈层

  - [腾讯云最具价值专家](https://cloud.tencent.com/tvp)
  - [腾讯云架构师技术同盟](https://developer.cloud.tencent.com/program/tm)
  - [腾讯云创作之星](https://developer.cloud.tencent.com/program/tci)
  - [腾讯云TDP](https://developer.cloud.tencent.com/program/tdp)

- 

### 关于

  - [社区规范](https://developer.cloud.tencent.com/article/1006434)
  - [免责声明](https://developer.cloud.tencent.com/article/1006435)
  - [联系我们](mailto:cloudcommunity@tencent.com)
  - [友情链接](https://developer.cloud.tencent.com/friendlink)
  - [MCP广场开源版权声明](https://developer.cloud.tencent.com/article/2537547)

### 腾讯云开发者

![扫码关注腾讯云开发者](https://qcloudimg.tencent-cloud.cn/raw/a8907230cd5be483497c7e90b061b861.png)

扫码关注腾讯云开发者

领取腾讯云代金券

### 热门产品

- [域名注册](https://cloud.tencent.com/product/domain?from=20064&from_column=20064)
- [云服务器](https://cloud.tencent.com/product/cvm?from=20064&from_column=20064)
- [区块链服务](https://cloud.tencent.com/product/tbaas?from=20064&from_column=20064)
- [消息队列](https://cloud.tencent.com/product/message-queue-catalog?from=20064&from_column=20064)
- [网络加速](https://cloud.tencent.com/product/ecdn?from=20064&from_column=20064)
- [云数据库](https://cloud.tencent.com/product/tencentdb-catalog?from=20064&from_column=20064)
- [域名解析](https://cloud.tencent.com/product/dns?from=20064&from_column=20064)
- [云存储](https://cloud.tencent.com/product/cos?from=20064&from_column=20064)
- [视频直播](https://cloud.tencent.com/product/css?from=20064&from_column=20064)

### 热门推荐

- [人脸识别](https://cloud.tencent.com/product/facerecognition?from=20064&from_column=20064)
- [腾讯会议](https://cloud.tencent.com/product/tm?from=20064&from_column=20064)
- [企业云](https://cloud.tencent.com/act/pro/enterprise2022?from=20064&from_column=20064)
- [CDN加速](https://cloud.tencent.com/product/cdn?from=20064&from_column=20064)
- [视频通话](https://cloud.tencent.com/product/trtc?from=20064&from_column=20064)
- [图像分析](https://cloud.tencent.com/product/imagerecognition?from=20064&from_column=20064)
- [MySQL 数据库](https://cloud.tencent.com/product/cdb?from=20064&from_column=20064)
- [SSL 证书](https://cloud.tencent.com/product/ssl?from=20064&from_column=20064)
- [语音识别](https://cloud.tencent.com/product/asr?from=20064&from_column=20064)

### 更多推荐

- [数据安全](https://cloud.tencent.com/solution/data_protection?from=20064&from_column=20064)
- [负载均衡](https://cloud.tencent.com/product/clb?from=20064&from_column=20064)
- [短信](https://cloud.tencent.com/product/sms?from=20064&from_column=20064)
- [文字识别](https://cloud.tencent.com/product/ocr?from=20064&from_column=20064)
- [云点播](https://cloud.tencent.com/product/vod?from=20064&from_column=20064)
- [大数据](https://cloud.tencent.com/product/bigdata-class?from=20064&from_column=20064)
- [小程序开发](https://cloud.tencent.com/solution/la?from=20064&from_column=20064)
- [网站监控](https://cloud.tencent.com/product/tcop?from=20064&from_column=20064)
- [数据迁移](https://cloud.tencent.com/product/cdm?from=20064&from_column=20064)

Copyright © 2013 - 2026 Tencent Cloud. All Rights Reserved. 腾讯云 版权所有

[深圳市腾讯计算机系统有限公司](https://qcloudimg.tencent-cloud.cn/raw/986376a919726e0c35e96b311f54184d.jpg)
 ICP备案/许可证号：
[粤B2-20090059](https://beian.miit.gov.cn/#/Integrated/index)![](https://qcloudimg.tencent-cloud.cn/raw/eed02831a0e201b8d794c8282c40cf2e.png)[粤公网安备44030502008569号](https://beian.mps.gov.cn/#/query/webSearch?code=44030502008569)

[腾讯云计算（北京）有限责任公司](https://qcloudimg.tencent-cloud.cn/raw/a2390663ee4a95ceeead8fdc34d4b207.jpg) 京ICP证150476号 | [京ICP备11018762号](https://beian.miit.gov.cn/#/Integrated/index)

领券
