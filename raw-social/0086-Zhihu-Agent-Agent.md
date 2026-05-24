# 字节最火的开源Agent项目，如何思考Agent的自我进化？ - 知乎

- URL: https://zhuanlan.zhihu.com/p/2028225211493819048
- Platform: Zhihu
- Extraction status: ok
- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04

## Raw Content

## 字节最火的开源Agent项目，如何思考Agent的自我进化？ - 知乎

**Source**: https://zhuanlan.zhihu.com/p/2028225211493819048

---

有问题，就会有答案。知乎，可信赖的问答社区，以让每个人高效获得可信赖的解答为使命。知乎凭借认真、专业和友善的社区氛围，结构化、易获得的优质内容，基于问答的内容生产方式和独特的社区机制，吸引、聚集了各行各业中大量的亲历者、内行人、领域专家、领域爱好者，将高质量的内容透过人的节点来成规模地生产和分享。用户通过问答等交流方式建立信任和连接，打造和提升个人影响力，并发现、获得新机会。

Agent 的持续学习和自我进化是最近行业内的讨论热点。

4 月 5 日，
LangChain
 创始人 Harrison Chase 在 X 上发了一篇长文，阐述了他对于 Agent 自我进化的一些思考。

![](https://picx.zhimg.com/v2-b5eea1d509fab425bf7b9d6a3ecd64b7_1440w.jpg)

核心观点很明确：对 AI agent 而言，「持续学习」不应只被理解为更新模型权重。一个 agent 系统实际上可以在三个层面持续进化：Model、Harness、Context。每一层要考虑的框架搭建和切入点是完全不同的。

知名 Agent 开源框架 
DeerFlow
 的联合作者 Daniel 在 Harrison Chase 这篇文章的基础上，补充了他们团队在 Agent 进化上的一些思考。

DeerFlow 是字节推出的、基于 LangGraph 的开源 SuperAgent 框架，专注多智能体编排，目前 GitHub Stars 超过 6 万。

文章授权转载，作者 Daniel。

⬆️关注 Founder Park，最及时最干货的创业分享

---

Founder Park 正在持续寻找值得被看见的 AI 团队与项目。

我们将通过「AI 产品市集」、内容报道、社群分发等方式，帮你触达早期用户、获得真实反馈，以及建立关键连接。

如果你正在做 AI 相关的事，欢迎和我们聊聊。

https://geek.feishu.cn/docx/XPxMd7bAXoPXWmxFUh8cv8JLngB?from=from_qr_code (二维码自动识别)

---

## **01**

## **把 Agentic systems 拆分成三层：**

## **model、harness、context****
**

Harrison 把 agentic system 拆成三层：

- 

Model：底层模型本身，也就是权重

- 

Harness：驱动模型运行的「外壳」，包括 agent 代码、固定工具、固定提示、执行循环等

- 

Context：位于 harness 外部的可配置上下文，例如记忆文件、技能、用户配置、团队配置

![](https://pic2.zhimg.com/v2-968002500c2884a3258bcb7bc9286257_1440w.jpg)

这一定义的价值在于，它把「学习」从单一的模型训练问题，扩展成了一个完整系统工程问题。

### Model 层：最传统，但也是最重的一层

这一层对应大家最熟悉的持续学习：

- 

用 SFT、RL 等方法更新权重

- 

也可能采用更细粒度的适配方式，例如 LoRA

- 

目标是让模型在新任务上做得更好

但这里有一个老问题没有消失：catastrophic forgetting。也就是模型在学习新东西之后，旧能力反而退化。

我的判断是：

- 

对大多数团队来说，Model 层持续学习成本最高

- 

它依赖训练数据、训练基础设施、评测闭环和模型发布机制

- 

这更像平台级能力，而不是普通产品团队可以频繁迭代的日常手段

所以 Harrison 虽然承认模型层很重要，但他的真正重点并不在这里。

### Harness 层：这是近一年 agent 工程最被低估的增益点

Harness 指的不是模型，而是「模型怎么被使用」：

- 

系统提示词怎么写

- 

工具怎么暴露给模型

- 

调用循环怎样组织

- 

什么时候截断上下文、什么时候重试、什么时候判断任务完成

- 

哪些日志和 traces 被保存下来，供后续分析

Harrison 在文中点名了 
Meta-Harness
 这篇工作。它的思路可以概括为：

![](https://pic1.zhimg.com/v2-a7dc28249ab258c45c029f37d22e6736_1440w.jpg)

- 

让 agent 在一批任务上运行

- 

收集完整执行日志与得分

- 

把这些历史候选、源代码、执行 traces 都保存在文件系统里

- 

再让一个 coding agent 阅读这些材料，提出新的 harness 改动

- 

评测新 harness，继续迭代

这很重要，因为它说明：

- 

agent 的进化可以不改模型，只改运行框架

- 

真正高价值的优化对象，往往是「执行机制」而不是「参数」

- 

traces 越完整，harness 优化越像工程迭代，而不是拍脑袋改 prompt

Meta-Harness 官方页面给出的结果也很强：它强调自己的关键差异是让优化器看到完整历史代码、分数与执行 trace，而不是只看摘要。作者称这种「文件系统级上下文」能把每轮优化可用诊断信息提升到远高于传统做法的量级。

### Context 层：离业务最近，也最适合先落地

Harrison 把 Context 定义为位于 harness 之外、用来配置 agent 的内容，例如：

- 

instructions

- 

skills

- 

tools

- 

memory files

- 

用户偏好

- 

团队规则

这层的关键不在「模型学到了什么」，而在「系统记住了什么，并在之后的会话中如何继续使用它」。

LangChain Deep Agents 的官方文档把这件事讲得非常具体。它支持：

- 

agent-scoped memory：所有用户共享同一份 agent 记忆

- 

user-scoped memory：每个用户拥有独立记忆

- 

在线更新：会话中直接写入记忆

- 

后台整理：在会话外做 consolidation

- 

skills 作为一种程序性记忆，只在需要时按需加载

这说明 Context 层并不是「多塞一点提示词」那么简单，而是一套可持久化、可分层、可读写、可检索的记忆系统。

## **02**

## **
Claude Code
、OpenClaw，**

## **都可以用三层逻辑去拆**

Harrison 在文章里用了两个 mapping：

### Claude Code

- 

Model：Claude Sonnet 等模型

- 

Harness：Claude Code 本身

- 

User context：CLAUDE.md、/skills、mcp.json

这个拆法非常实用，因为它直接说明：

- 

你觉得「Claude Code 变聪明了」，未必是模型权重变了

- 

也可能是 harness 改了

- 

或者是你给它的上下文配置更好了

### OpenClaw

- 

Model：可以接多个模型

- 

Harness：Pi 加上一些运行脚手架

- 

Agent context：SOUL.md 与来自 ClawHub 的技能

我额外核对了 OpenClaw 的公开文档：

- 

SOUL.md 被官方定义为 agent 的人格与语气配置文件

- 

ClawHub 被定义为 OpenClaw 的 skills / plugins 公共注册表

这恰好印证 Harrison 的观点：很多 agent 系统的「持续学习」，本质上发生在可配置上下文层，而不是模型微调层。

## **03**

## **Agent 的持续学习，**

## **更多向着系统优化方向发展**

如果把这篇文章提炼成一句话，我会写成：

> Agent 的持续学习，正在从「训练模型」转向「优化完整系统」。

这里至少有三个变化：

### 学习目标从权重转向系统行为

传统 LLM 持续学习更关注：

- 

loss 有没有下降

- 

benchmark 有没有提升

而 agent 持续学习更关注：

- 

是否更会使用工具

- 

是否更会规划步骤

- 

是否更能从过去的失败里改进执行策略

- 

是否更了解当前用户、团队或组织的偏好

### 学习单位从单模型转向分层架构

同一个 agent 系统里，不同层的学习频率与代价完全不同：

- 

Model：低频、高成本、平台级

- 

Harness：中频、工程驱动、可评测

- 

Context：高频、业务驱动、最容易在线发生

这意味着持续学习不该只有一个总开关，而应该是三套不同机制。

### traces 成为统一燃料

Harrison 在文末反复强调 traces。这是全文最关键的基础设施判断之一。

原因很直接：

- 

想改模型，要有 traces 作为训练/偏好数据来源

- 

想改 harness，要有 traces 作为失败诊断材料

- 

想改 context，要有 traces 作为经验提取素材

换句话说，没有高质量 traces，就没有高质量 agent learning loop。

## **04**

## **Context 层会最先落地，**

## **Harness 层是下一轮竞争的核心**

### Context 层会最先普及

我认为三层里最先大规模落地的是 Context 层，而不是 Model 层。

原因：

- 

不需要训练 infra

- 

对业务回报最直接

- 

可按 user / team / org 做隔离

- 

易于做权限管理和回滚

- 

更容易符合企业系统对可控性的要求

很多今天被包装成「agent 会记忆了」的能力，本质上都属于这一层。

### Harness 层会成为下一轮 agent 基建竞争焦点

如果 2024 年大家主要比拼「谁先把 agent 跑起来」，那么 2026 年更像是在比：

- 

谁的 harness 更稳

- 

谁的 traces 更完整

- 

谁的评测与回放体系更闭环

- 

谁能更快把失败案例沉淀为下一版 agent 行为改进

这也是为什么 Meta-Harness 这种工作值得重视。它代表一种很工程化的方向：让 agent 帮你改 agent。

## **05**

## **团队如何做 Agent 产品？**

## **分四个阶段**

如果一个团队准备把「持续学习」纳入 agent roadmap，我建议按下面顺序推进：

### 第一阶段：先把 traces 做对

- 

统一记录任务输入、工具调用、关键中间状态、输出结果、人工反馈

- 

为失败任务保留可复盘证据，而不只是最终报错

- 

给 traces 加上 user / org / task / version 维度标签

### 第二阶段：优先做 Context learning

- 

从用户偏好、团队规则、术语表、操作 SOP 开始

- 

区分只读记忆与可写记忆

- 

明确作用域：哪些是 user 级，哪些是 org 级

- 

支持在线写入与离线整理两种更新路径

### 第三阶段：建立 Harness optimization loop

- 

把 agent 在标准任务集上持续运行

- 

对 harness 版本做 A/B 对照和自动评测

- 

让 coding agent 读取 traces，辅助提出 harness 改动候选

- 

建立回滚机制，避免「改 prompt 一时爽，整体稳定性变差」

### 第四阶段：最后才考虑 Model-level learning

- 

只有当你已经积累了足够多高质量 traces

- 

并且 harness / context 层优化已经逼近上限

- 

再进入微调或更系统的模型训练，投入产出比才更合理

## **06**

## **一个可以直接复用的判断框架**

遇到「agent 该怎么学」这个问题时，可以先问四个问题：

- 

这次要改的，是模型能力、运行机制，还是可配置记忆？

- 

这个改动，应该作用在 agent、user，还是 org 作用域？

- 

这个更新，应该在运行中即时发生，还是在离线任务中整理后再生效？

- 

有没有足够完整的 traces，支持评估这次学习是否真的有效？

如果这四个问题答不清楚，所谓「持续学习」大概率只是一个模糊口号。

## **07**

## **未来更强的 agent，**

## **不一定来自更大的模型**

Harrison Chase 这条帖子和配套文章的价值，不在于提出某个全新算法，而在于把 agent 持续学习重新拆解为一个更实用的三层框架：

- 

Model learning 解决底层能力

- 

Harness learning 解决执行机制

- 

Context learning 解决记忆与个性化

其中最值得产品团队立即行动的，不是训练模型，而是两件事：

- 

建好 traces 基础设施

- 

把 context 和 harness 的 learning loop 产品化

这也是我对这篇文章最核心的结论：未来更强的 agent，不一定先来自更大的模型，而更可能先来自更会「复盘、记忆、重构」的系统。

![](https://picx.zhimg.com/v2-9ac58a809e2b3ac7caacbb48201fdbf5_1440w.jpg)

**更多阅读**

Notion Custom Agents复盘：三年重写5次，Notion 历史上最成功的新功能之一

一款好的 AI Native 硬件，硬件只是脚手架，真正壁垒一定是 Agent

对话 Ribbi：所有人都在做创作工具，我们在做一个有品味、会进化的「人」

对话寻影：大家都在解决怎么拍得更好，我们想干掉「拍」这件事

发布于 2026-04-16 21:36・北京

关于作者

[.css-1o44jgu{dynamic-range-limit:standard;border-radius:4px;}.css-1qhd7fe{box-sizing:border-box;margin:0;min-width:0;max-width:100%;height:auto;background-color:#ffffff;width:60px;height:60px;dynamic-range-limit:standard;border-radius:4px;}](https://www.zhihu.com/org/founder-park-36)

[Founder Park](https://www.zhihu.com/org/founder-park-36)

[.css-1ldqog6{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}​](https://zhuanlan.zhihu.com/p/96956163)
已认证机构号

[回答](https://www.zhihu.com/org/founder-park-36/answers)[文章](https://www.zhihu.com/org/founder-park-36/posts)[关注者](https://www.zhihu.com/org/founder-park-36/followers)
