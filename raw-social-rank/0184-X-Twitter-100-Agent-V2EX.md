# [实战教程分享] 100 天搞定 Agent 开发 - V2EX

- URL: https://www.v2ex.com/t/1183449
- Platform: X/Twitter
- Extraction status: ok
- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04
- Query: site:v2ex.com AI Agent 智能体

## Raw Content

## [实战教程分享] 100 天搞定 Agent 开发 - V2EX

**Source**: https://www.v2ex.com/t/1183449

---

[https://www.v2ex.com/](https://www.v2ex.com/)

[首页](https://www.v2ex.com/)[注册](https://www.v2ex.com/signup)[登录](https://www.v2ex.com/signin)

 爱意满满的作品展示区。 

[广告](https://www.v2ex.com/advertise)

[https://www.v2ex.com/member/flingjie](https://www.v2ex.com/member/flingjie)

[V2EX](https://www.v2ex.com/)
 › 
[分享创造](https://www.v2ex.com/go/create)

# [实战教程分享] 100 天搞定 Agent 开发

[2](javascript:)[javascript:](javascript:)
[flingjie](https://www.v2ex.com/member/flingjie) · 

[flingjie](https://github.com/flingjie) · 
1 月 6 日
 · 3235 次点击

这是一个创建于 135 天前的主题，其中的信息可能已经有所发展或是发生改变。

2025 年，是 Agent 真正开始爆发的一年。它不再只是 Demo 、Prompt 技巧或能力展示，而是被放进真实业务系统中，开始承担明确职责，也开始暴露真实问题。

我从 **2024 年** 开始做 LLM 和 Agent 相关项目，有过几次真正落地的，也有不少因为**方向判断失误、工程复杂度失控**而中途终止的项目。

过程中踩过不少坑，有一些比较简单，比如

- 阿里云百炼接口处理用参数 temperature 控制输出，最好再加上`seed`参数以便于结果复现。
- 部分推理模型调用时要加 extra_body 传参{"enable_thinking": true}才能真正让它进行推理。
- `langchain_openai` 默认会吞掉 `reasoning_content`，导致收不到推理过程的内容，可以通过猴子补丁的方式修复。

还有一些比较复杂，是架构设计和能力边界的问题，比如

- 

**把 Prompt 当成逻辑层使用** 一开始为了省事，把判断条件、分支选择、状态切换全写进 Prompt 。 Prompt 越写越长，也越来越“聪明”，但问题也随之出现： 很难调试、很难复现，任何一句话的微调，都可能引发完全不同的行为。 到后面你会发现，系统不是坏在模型能力上，而是坏在**逻辑藏在自然语言里，没人能真正控制它**。

- 

**工具列表失控，模型不知道该用什么** 工具越加越多，却缺少清晰的边界和分工。 对模型来说，这不是“能力增强”，而是决策负担： 相似功能的工具混在一起，调用条件模糊， 有时选错工具，有时干脆不用工具，行为看起来像“随机发挥”。 问题不在模型，而在于**你并没有真正告诉它：什么时候该用、什么时候不该用**。

- 

**没有给 Agent 设定清晰的能力上限** 一些本就不适合模型判断的问题，被强行交给模型处理； 一些本该由人介入兜底的灰色区间，被乐观地当成“可以自动化”。 在小规模测试时，这类问题很难暴露， 但一旦进入真实场景，失败会成批出现，而且往往是**系统性失败**，不是修几个 Prompt 就能解决的。

在不断失败、复盘、修正的过程中，我开始系统性地整理这些经验，并借助 AI 一起校对认知与表达，逐步沉淀出了这份 **[《 100 天搞定 Agent 开发》](https://github.com/flingjie/Agent-100-Days)**。

它一方面是我自己的**工程笔记和认知复盘**，另一方面，也希望能为正在或准备进入 Agent 开发的工程师，**少走一些我已经走过的弯路**。

整个路径中，大量内容基于真实工程实践，配合主流开源框架的实战，包括但不限于：**LangChain 、LangGraph 、Gradio 、Agno 、Mem0 、Vanna 、Langfuse** 等。 整个学习路径结构大致如下：

- **Week 1–2**：先从 LLM 的底层原理出发，  随后通过一个完整的实战项目，开发一个**带 UI 、支持多模态和深度思考的英语学习 Agent**，建立对 Agent 的整体认知。
- **Week 3–7**：深入学习 Agent 的各个关键组成，Prompt 工程、工具调用、知识库、上下文工程、记忆系统。
- **Week 8–11**：  关注 Agent 开发与传统软件开发**真正不同的地方**，以及常见的 Agent 模式。
- **Week 12–15**：通过多个综合项目，把前面的模块与模式串起来，从“能写 Demo”，走向“能支撑复杂系统”。

这是一份还在持续打磨中的工程笔记，目前只整理了前两周。 如果你对 Agent 开发也有兴趣，或者正在踩类似的坑， 很欢迎一起交流、提意见，甚至直接参与共建。

👉 **GitHub： [https://github.com/flingjie/Agent-100-Days](https://github.com/flingjie/Agent-100-Days)**

## 完整教程目录

## Week 1 ｜ LLM 基础入门

#### 本周目标

> **建立对大语言模型的“第一性理解”：**
> 
> 
> - 模型在“算什么”，而不是“看起来会什么”
> - 为什么它能表现出类智能行为
> - 为什么它天然不稳定、不可控、但又非常有用

### **Day 1 ｜[大语言模型到底在干什么](https://www.v2ex.com/t/week1/01.%E5%A4%A7%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E5%88%B0%E5%BA%95%E5%9C%A8%E5%B9%B2%E4%BB%80%E4%B9%88.ipynb)**

#### 学习内容

- 什么是 LLM （大语言模型）
- 「预测下一个 token 」的真实含义
- 为什么一个“预测器”能产生看起来像智能的行为

### **Day 2 ｜ [Token 、Embedding 与向量空间](./week1/02.Token 、Embedding 与向量空间.ipynb)**

#### 学习内容

- 什么是 Token ，为什么 LLM 的基本单位是 Token
- Embedding 是什么，它解决了什么问题
- 相似性、类比、联想在向量空间中如何体现

### **Day 3 ｜ [Transformer：模型的计算引擎](https://www.v2ex.com/t/week1/03.Transformer.ipynb)**

#### 学习内容

- 为什么 RNN 不够用，Transformer 出现的背景
- Self-Attention 在“算什么”
- Layer 在模型中承担的角色

### **Day 4 ｜[从训练到推理：模型是怎么“学会语言”的](https://www.v2ex.com/t/week1/04.%E4%BB%8E%E8%AE%AD%E7%BB%83%E5%88%B0%E6%8E%A8%E7%90%86.ipynb)**

#### 学习内容

- 预训练阶段模型在做什么
- 训练过程是怎样的
- 训练阶段 vs 推理阶段

### **Day 5 ｜[概率、随机性与不稳定性](https://www.v2ex.com/t/week1/05.%E6%A6%82%E7%8E%87%E3%80%81%E9%9A%8F%E6%9C%BA%E6%80%A7%E4%B8%8E%E4%B8%8D%E7%A8%B3%E5%AE%9A%E6%80%A7.ipynb)**

#### 学习内容

- 为什么同一个问题多次询问会得到不同答案
- temperature 等参数
- LLM 擅长什么，不擅长什么

### **Day 6 ｜[一次 LLM API 调用，到底发生了什么？](./week1/06.一次%20LLM%20API%20 调用，到底发生了什么.ipynb)**

#### 学习内容

- 核心要素
- 一次完整调用过程说明
- 一次调用中的“可控点”与“不可控点”

### **Day 7 ｜[思考 & 补充学习资料](./week1/07.思考%20&%20 [补充学习资料.md](http://%E8%A1%A5%E5%85%85%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99.md))**

#### 反思问题

- LLM 在回答问题时，它真的“理解”了吗？
- 模型输出的一句话，本质上是什么？
- 为什么模型“会在常识问题上犯低级错误”？

## Week 2 ｜基于 LangChain + Gradio 的对话 Agent 实战

#### 本周目标

> 基于 Langchain 和 Gradio 动手实现一个**英语学习 Agent**

### **Day 8 ｜[用 LLM 生成英文学习内容](./week2/08.用 LLM [生成英文学习内容.md](http://%E7%94%9F%E6%88%90%E8%8B%B1%E6%96%87%E5%AD%A6%E4%B9%A0%E5%86%85%E5%AE%B9.md))**

#### 学习内容

- 了解 LangChain
- 调用 LLM 生成英语文本，如简单句子、段落、词汇解释

### **Day 9 ｜ [前端交互](https://www.v2ex.com/t/week2/09.%E5%89%8D%E7%AB%AF%E4%BA%A4%E4%BA%92.md)**

#### 学习内容

- 了解 Gradio
- 基于 Gradio 实现英语学习界面
- 通过界面与 Agent 进行交互

### **Day 10 ｜[多轮对话](https://www.v2ex.com/t/week2/10.%E5%A4%9A%E8%BD%AE%E5%AF%B9%E8%AF%9D.md)**

#### 学习内容

- 构建对话型 Agent ，可连续辅导用户写作
- 保存上下文，逐轮提供修改建议

### **Day 11 ｜[流式生成](https://www.v2ex.com/t/week2/11.%E6%B5%81%E5%BC%8F%E7%94%9F%E6%88%90.md)**

#### 学习内容

- 支持流式生成英语内容
- 提升交互体验

### **Day 12 ｜[多模态](https://www.v2ex.com/t/week2/12.%E5%A4%9A%E6%A8%A1%E6%80%81.md)**

#### 学习内容

- 支持语音输入和图片输入
- 实现英语听力、阅读辅助

### **Day 13 ｜[深度思考](https://www.v2ex.com/t/week2/13.%E6%B7%B1%E5%BA%A6%E6%80%9D%E8%80%83.md)**

#### 学习内容

- 实现作文评分、复杂阅读理解分析
- 引导模型进行 chain-of-thought 生成

### **Day 14 ｜[思考 & 补充学习资料](./week2/14.思考%20&%20 [补充学习资料.md](http://%E8%A1%A5%E5%85%85%E5%AD%A6%E4%B9%A0%E8%B5%84%E6%96%99.md))**

#### 反思问题

- LangChain 在这里解决了什么？
- “模式切换”本质是什么？
- 流式输出到底发生在什么层？
- 一次对话，真正“不可控”的部分是哪一步？

## Week 3 ｜提示词工程（ Prompt Engineering ）

#### 本周目标

> **学习提示词工程的概念、通用技巧、和优化迭代技巧**

### **Day 15 ｜ Prompt 的工程定位**

#### 学习内容

- Promp 是什么，不是什么
- Prompt 的真实作用
- Prompt 适合做什么,不适合做什么

### **Day 16 ｜ Prompt 的通用技巧**

#### 学习内容

- 学习 Prompt 的通用技巧
- 编写 Prompt 需要注意什么

### **Day 17 ｜零样本提示与少样本提示**

#### 学习内容

- 什么是 Zero-shot Prompt
- 什么是 Few-shot Prompt
- 示例数量为什么“少而精”
- 何时不该用 Few-shot

### **Day 18 ｜思维链 CoT**

#### 学习内容

- 单 Prompt 的天然局限
- 思维链的基本思想
- CoT vs 一次性长 Prompt

### **Day 19 ｜结构化输出”**

#### 学习内容

- 为什么自然语言输出不可控
- 常见结构化方式
- 结构化输出的作用

### **Day 20 ｜提示词的优化与迭代**

#### 学习内容

- 为什么一次写好 Prompt 几乎不可能
- 常见失败模式
- Prompt 迭代的基本流程

### **Day 21 ｜思考 & 补充学习资料**

#### 反思问题

- Prompt 本质上在做什么？
- Prompt 在系统中的位置, 以及能解决的上限
- Prompt 如何配合工程能力

## Week 4 工具使用

#### 本周目标

> **学习基于 LLM 工具调用和原理，基于 langchain 的工具调用实现和 MCP 的设计开发**

### **Day 22 ｜为什么 LLM 一定需要工具**

#### 学习内容

- LLM 的三大天然缺陷
- 工具在系统中的角色

### **Day 23 ｜ 工具调用的基本机制**

#### 学习内容

- 什么是工具调用(Tool / Function Calling)
- Tool Schema 的本质（能力描述）
- 模型在 Tool Calling 中做了什么

### **Day 24 ｜ 基于 Langchain 的工具调用示例**

#### 学习内容

- 基于 langchain 实现 LLM 的工具调用

### **Day 25 ｜ MCP 介绍**

#### 学习内容

- Tool Calling 的问题
- 什么是 MCP

### **Day 26 ｜ MCP 实战**

#### 学习内容

- 基于 fastmap 实现一个 MCP Server
- 基于 cherry studio 连接 MCP Server

### **Day 27 ｜技能的学习与开发**

#### 学习内容

- 什么是技能
- 开发一个简单的技能

### **Day 28 ｜思考 & 补充学习资料**

#### 反思问题

- 如果不使用工具，LLM 的能力上限在哪里？
- 当工具越来越多时，会发生什么？
- 如果把模型换掉（更弱 / 更强），你当前的工具系统还能正常工作吗？

## Week 5 ｜知识库

#### 本周目标

> **学习知识库相关知识，并基于 llamaindex 和 lightRAG 进行知识库实战**

### **Day 29 ｜为什么 Agent 一定需要知识库**

#### 学习内容

- 预训练知识的限制
- 预训练知识 vs 私有知识 vs 实时知识
- 为什么 Prompt 永远解决不了“事实正确性”

### **Day 30 ｜ RAG 的最小抽象模型**

#### 学习内容

- RAG 的四个不可省略步骤
- 为什么检索一定是“模糊但可控”的
- RAG ≠ 搜索引擎
- RAG ≠ 把资料塞进 Prompt

### **Day 31 ｜ LlamaIndex 的学习使用**

#### 学习内容

- LlamaIndex 简介
- LlamaIndex 入门

### **Day 32 ｜数据清洗与 Chunk 策略**

#### 学习内容

- 为什么“垃圾进 → 垃圾出”在 RAG 中更严重
- 如何调优分片策略
- 如何评估分片效果

### **Day 33 ｜ LightRAG 学习使用**

#### 学习内容

- LightRAG 简介
- LightRAG 入门

### **Day 34 ｜构建一个知识库**

#### 学习内容

- 基于 LlamaIndex 或 LightRAG 搭建一个知识库

### **Day 35 ｜思考 & 补充学习资料**

#### 反思问题

- 知识库在 Agent 系统中的位置
- 知识库能解决的上限
- 知识库不能解决的问题

## Week 6 ｜上下文工程（ Context Engineering ）

#### 本周目标

> **学习上下文工程并基于 langchain 进行实战**

### **Day 36 ｜什么是上下文工程**

#### 学习内容

- Context ≠ 对话历史
- Context 是一次 LLM 调用的**全部可见输入**
- Context 与 token window 的硬约束
- 为什么“上下文失控”会直接导致推理失败

### **Day 37 ｜上下文的组成结构**

#### 学习内容

- 一次调用里通常有哪些信息
- 不同信息的优先级
- 顺序是否重要

### **Day 38 ｜多轮对话与上下文增长问题**

#### 学习内容

- 多轮对话是如何线性膨胀的
- 为什么不能“全部塞进去”
- 历史对话对当前推理的真实价值
- 常见失败模式

### **Day 39 ｜上下文裁剪与压缩策略**

#### 学习内容

- 裁剪 vs 摘要 vs 重写
- 时间窗口策略
- 语义摘要策略
- 结构化摘要

### **Day 40 ｜知识库内容如何进入上下文**

#### 学习内容

- 检索结果不是越多越好
- 分片与上下文的关系
- 知识库结果放在什么位置最合理
- 为什么 知识库 会“干扰推理”

### **Day 41 ｜上下文实战**

#### 学习内容

- 基于 langchain 进行上下文工程实战

### **Day 42 ｜思考 & 补充学习资料**

#### 反思问题

- 上下文在 Agent 系统中的位置
- 常见上下文设计反模式
- 哪些问题该用上下文解决，哪些问题不该用上下文解决

## Week 7 ｜记忆系统（ Memory System ）

#### 本周目标

> **了解记忆系统及常见分类，并基于 langchain 和 mem0 进行实战**

### **Day 43 ｜为什么 Agent 需要记忆**

#### 学习内容

- Context 的不可持续性
- 没有记忆的 Agent 能做到什么
- 记忆与“智能体行为一致性”

### **Day 44 ｜记忆的分类与写入**

#### 学习内容

- 建立对 Memory 的结构化认知。
- 学会“克制地记忆”

### **Day 45 ｜记忆的更新、遗忘与冲突**

#### 学习内容

- 记忆覆盖 vs 追加
- 时间衰减策略
- 冲突记忆如何处理
- 为什么“忘记”是能力的一部分

### **Day 46 ｜记忆如何进入上下文**

#### 学习内容

- 记忆检索的触发条件
- 相关性过滤
- 记忆摘要进入上下文
- 记忆注入失败的常见原因

### **Day 47 ｜ langchain 记忆功能实战**

#### 学习内容

- 学习基于 langchain 实现记忆功能

### **Day 48 ｜ mem0 记忆功能实战**

#### 学习内容

- 学习基于 mem0 实现记忆功能

### **Day 49 ｜思考 & 补充学习资料**

#### 反思问题

- 记忆系统 在 Agent 架构中的位置
- 上下文工程 与 记忆系统 的边界
- 常见记忆系统反模式
- 未来可扩展方向

## Week 8 ｜ Agent 架构与思维模式的转变

#### 本周目标

> **学习 Agent 的基本架构，思维方式的转变，以及动手实现一个 Agent**

### Day 50 ｜什么是 Agent

#### 学习内容

- Agent 的定义

### Day 51 ｜ Agent 基本组成

#### 学习内容

- Agent 的基本组成部分

### Day 52 ｜ Agent 开发者的“思维模式”转变

#### 学习内容

- 理解 Agent 开发者心智模型的变化。

### Day 53 ｜ Agent 的失败模式

#### 学习内容

- 了解 Agent 的失败模式。

### Day 54 ｜ 基于 langchain 开发 Agent

#### 学习内容

- 基于 langchain 实现一个完整的 Agent

### Day 55 ｜ 基于 Agno 开发 Agent

#### 学习内容

- 基于 Agno 实现一个完整的 Agent

### Day 56 ｜思考 & 补充学习资料

#### 反思问题

- 向别人解释什么是 Agent
- 你写的 Agent 什么时候会失败、为什么会失败？
- 如果把 LangChain / Agno 拿走，你是否仍然知道 Agent 应该怎么设计？

## Week 9 ｜反思模式（ Reflection ）

#### 本周目标

> **学习反思模式并进行实战应用”**

### Day 57 ｜为什么 Agent 一定需要反思

#### 学习内容

- 没有反思的 Agent 会发生什么
- 重复错误与错误放大
- 单向执行系统的天然缺陷
- 人类问题解决中的“复盘机制”

### Day 58 ｜什么是反思模式

#### 学习内容

- 学习什么是反思模式，以及与推理的区别。

### Day 59 ｜反思触发机制

#### 学习内容

- 常见触发条件与机制

### Day 60 ｜反思的输入与输出设计

#### 学习内容

- 反思输入
- 反思输出

### Day 61 ｜反思与上下文

#### 学习内容

- 哪些反思结果可以进入记忆
- 哪些只能作为一次性判断
- 为什么反思结论不能直接当事实

### Day 62 ｜实战：为 Agent 加入反思节点

#### 学习内容

- 开发反思独立模块
- 可配置触发条件
- 明确“继续 / 调整 / 停止”三类输出

### Day 63 ｜思考 & 补充学习资料

#### 反思问题

- 你的 Agent 是在什么时候触发反思的？
- 反思发生时，Agent 停止了什么？又接管了什么？
- 如果把“反思”模块拿掉，系统会以什么方式退化？

## Week 10 ｜任务分解模式（ Task Decomposition ）：

#### 本周目标

- **任务分解模式的学习 · 架构 · 实战”**

### Day 64 ｜为什么任务分解是 Agent 的核心能力

#### 学习内容

- 人类如何自然分解复杂问题
- 一步到位为什么必然失败
- 什么是“好”的任务分解

### Day 65 ｜分解策略一：线性分解

#### 学习内容

- 适用场景
- 抽象结构
- 风险

### Day 66 ｜分解策略二：树状分解

#### 学习内容

- 优势
- 风险

### Day 67 ｜分解策略三：并行与汇合

#### 学习内容

- 适用场景
- 抽象结构
- 风险

### Day 68 ｜任务分解的失败模式与修复

#### 学习内容

- 常见失败
- 修复策略

### Day 69 ｜实战：任务分解模式 Agent

#### 学习内容

- 构建一个任务分解模式的 Agent

### Day 70 ｜思考 & 补充学习资料

#### 反思问题

- 你的 Agent 是在什么时候触发任务分解的？
- 任务分解发生时，Agent 停止了什么？又接管了什么？
- 如果把“任务分解”模块拿掉，系统会以什么方式退化？

## Week 11 ｜ HITL （ Human-in-the-Loop ）模式

#### 本周目标

> **HITL 模式的学习、设计与实战**

### Day 71 ｜为什么 Agent 系统一定需要人

#### 学习内容

- 为什么自动化一定会遇到“不可判定区间”
- 模型与 Agent 的责任边界
- 全自动系统的三种必然失败

### Day 72 ｜什么是 HITL

#### 学习内容

- 什么是 Human-in-the-Loop
- 与“人工兜底”的区别

### Day 73 ｜ HITL 的三种介入模式

#### 学习内容

- Approval （审批型）
- Correction （修正型）
- Takeover （接管型）

### Day 74 ｜ HITL 的触发条件设计

#### 学习内容

- 常见触发条件

### Day 75 ｜ HITL 的上下文与信息呈现

#### 学习内容

- 人类介入时必须看到的信息
- 错误示例与正确示例

### Day 76 ｜实战：为 Agent 加入 HITL

#### 学习内容

- 构建一个支持 HITL 的 Agent

### Day 77 ｜思考 & 补充学习资料

#### 反思问题

- 人是在什么情况下被拉进系统的？
- 人进来之后，能做什么、不能做什么？
- 人的决策是否会反向影响 Agent 的后续行为？

## **Week 12 ｜实战：一个支持路由的多 Agent 系统**

## **Week 13 ｜实战：DeepResearch**

## **Week 14 ｜实战：ChatBI**

## **Week 15 ｜实战：基于 Langfuse 的监控和可观测性**

[agent](https://www.v2ex.com/tag/agent)[llm](https://www.v2ex.com/tag/llm)[工程](https://www.v2ex.com/tag/%E5%B7%A5%E7%A8%8B)

11 条回复  **•**  2026-04-15 11:11:12 +08:00

|  |  | 1
                    
                    andrewTeller      1 月 6 日 
                    
                    向大佬学习一下 |
|---|---|---|

|  |  | 2
                    
                    cainiaochaocai      1 月 6 日 
                    
                    向大佬学习，持续关注 |
|---|---|---|

|  |  | 3
                    
                    flingjie   OP   1 月 6 日 
                    
                    @andrewTeller @cainiaochaocai 感谢关注，一起进步。 |
|---|---|---|

|  |  | 4
                    
                    lixingcai      1 月 9 日 
                    
                    感谢老大 share |
|---|---|---|

|  |  | 5
                    
                    HowardTang      1 月 14 日 
                    
                    支持 |
|---|---|---|

|  |  | 6
                    
                    cainiaochaocai      1 月 21 日 
                    
                    大佬，感谢！ 另外催更一下 |
|---|---|---|

|  |  | 7
                    
                    lemonautumn1      2 月 25 日 
                    
                    点了 star 之后想着养肥再看，开工了想起来了，没想到已经更完了。感谢大佬！今年一定努力转型，找一份 agent 开发工作 |
|---|---|---|

|  |  | 8
                    
                    JRay      3 月 10 日 
                    
                    打不开了呢 |
|---|---|---|

|  |  | 9
                    
                    p1aintiff      3 月 28 日 
                    
                    Star ！ |
|---|---|---|

|  |  | 10
                    
                    slark2020      4 月 3 日 
                    
                    刚刚开始学习，感谢楼主分享 |
|---|---|---|

|  |  | 11
                    
                    yifeia      4 月 15 日 
                    
                    学习一下，最近有点想转型 Agent 相关的 |
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

VERSION: 3.9.8.5 · 144ms · [UTC 04:58](https://www.v2ex.com/worldclock#utc) · [PVG 12:58](https://www.v2ex.com/worldclock#pvg) · [LAX 21:58](https://www.v2ex.com/worldclock#lax) · [JFK 00:58](https://www.v2ex.com/worldclock#jfk)
♥ Do have faith in what you're doing.
