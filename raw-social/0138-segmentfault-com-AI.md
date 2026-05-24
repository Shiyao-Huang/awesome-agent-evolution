# AI大模型运维开发探索第四篇：智能体分阶段演进路线

- URL: https://segmentfault.com/a/1190000046214347
- Platform: segmentfault.com
- Extraction status: ok
- content_timestamp: 2025-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-03

## Raw Content

## 人工智能 - AI大模型运维开发探索第四篇：智能体分阶段演进路线 - 阿里云大数据AI技术 - SegmentFault 思否

**Source**: https://segmentfault.com/a/1190000046214347

---

# [AI大模型运维开发探索第四篇：智能体分阶段演进路线](https://segmentfault.com/a/1190000046214347)

[阿里云大数据AI](https://segmentfault.com/u/elhix0bg)[2025-03-13  浙江](https://segmentfault.com/a/1190000046214347/revision)
**
阅读 7 分钟

0
[https://segmentfault.com/a/1190000046214347#comment-area](https://segmentfault.com/a/1190000046214347#comment-area)

在第三篇关于智能体的文章发布后，许多同学纷纷前来咨询智能体相关的落地细节。经过几轮工程迭代，智能体工程与最初的架构相比，已经有了显著的区别。

本文将详细陈述这些不同演进阶段所遇到的问题及其应对策略，供大家参考和借鉴。

## 智能体1.0: 工程化思维链

在前三篇文章中，我们提到了如何从LangChain的Agent&Tool一步步向前摸索，演进成为了一个智能体工程。前期的探索过程在这里就不再赘述了，下面我们直接从工程原理讲起。

![](https://segmentfault.com/img/remote/1460000046214349)

如上图所示，整个流程运作的核心其实就是干这三件事情：**提示词输入，解析大模型返回，拼接工具返回到提示词**。这里从 Question 到 Thought 再到 Action 的推理过程我们称之为 **chain-of-thought(思维链)，** 通过思考明确行为，通过行为反馈进一步思考，最后收敛获得一个结论。因此整个思维链推理过程并不复杂。

看起来简单的思维链工程，却解决了一个很大的问题，我们使用工具的时候，不需要再去精密计算每个工具的输入输出结构，只要每个工具的使用语义是清晰连贯的，大模型就能自由调用这些工具。我们把一堆可能有用的工具全塞给大模型，它就能分解任务，调用工具，来完成复杂的事情。

建设完思维链工程之后，我们将这样的思维链模式想得比较全能，似乎只要工具足够多，智能体就能解决任何问题。但现实是，这样的智能体能解决一些问题，但不多，也常常出现调用工具时候参数不准的问题。于是，我们不断地优化工具，让工具的输入参数尽可能容错，什么string, list, dict 全能收，做一层适配转换。但即使是这样，还是会出现一些较低级的错误。

于是我们重新思考起工具本身来，这个点我们在第一篇中有提到过，**为什么很多编程语言中都有class(类)这个概念？** 不就是class(类)实例化之后能够存储很多参数么，然后我们只要执行`.do()`这样的类似的方法就能非常方便地调用class(类)函数了，有些函数甚至都不需要有参数，因为函数会自动从class实例中能够读到参数。因此借鉴这个概念设计，我们尝试了工具实例化，具体的实践这里不展开了，详见第一篇的面向AI对象的AI编程章节。

我们使得智能体可以先实例化工具，然后再来调用，这样就确实减少了工具调用。但是工具实例化也衍生出了一个问题，就是工具可以被实例化多次，智能体在推理过程中，就需要记忆这些实例化后的工具：我们修改思维链的提示词模板，我们在每次观测数据返回时，也会提醒大模型有哪些工具已经被实例化，但一旦工具实例化多了之后，同样的问题又出现了，智能体可能又会分不清，直接把工具实例都找错了。所以，我们其实面对这样一个现状：**是不是单个智能体其实没那么全能？** 我们需要一种方法来解决复杂的问题。

## 智能体2.0: 实例化智能体

我们随着工具实例化的思路继续演进，我们发现其实能够实例化的不仅仅有工具，其实智能体也能做实例化。怎么理解呢？既然智能体能够扮演某个领域的专家，那他能不能扮演一个更小领域的专家，比如这个专家只能诊断某个具体的对象。比如某台交换机，如下示例：![](https://segmentfault.com/img/remote/1460000046214350)

智能体实例化，通过将各种实例参数的上浮，智能体在推理过程中，进一步专注于推理本身，减少了各种调用时参数的干扰。通过实例化智能体，我们可以将管理的所有对象都进行一次实例化。在k8s云原生的时候，我们各种设计都参考k8s，可能希望每个资源有一个URI，然后可以通过CRUD对资源进行操作。现在到了实例化智能体之后，我们可以将每个资源都变成一个智能体实例，甚至都可以复用资源的URI，在CRUD中增加一个`/chat`的对话交互路径即可。

按照我们在第三篇末提到过的例子，如果要排查复杂问题，只需要让一个更上层的智能体挨个询问这些智能体实例，就可以完成排查。更多细节可以参考第三篇。

![](https://segmentfault.com/img/remote/1460000046214351)

事实上，这种智能体排查场景还是偏理想化，通常实际业务落地过程中，出现了两个问题：

- 
  1. **推理可靠性：** 很多场景存在着较多的SOP(标准作业程序)，如果出现什么问题按照某个既定流程去排查即可。但是大模型对于这个流程的遵循常常会不太稳定，有些时候会漏下步骤，有些时候有产生幻觉，没问几句就自信满满地说问题已经解决了。如果作为一个阶段性的实验产物可能足够了，但是要上生产确实还不够，虽然我们已经通过实例化充分地提升了智能体工具调用的可靠性，但是大模型本身的推理可靠性并没有提升特别多。

- 
  1. **工具生态：** 给智能体使用的工具并非现成，为了给大模型使用，可能需要优化一下输入输出。但当我们将这些工具优化完，我们又会冒出另外一个疑问，工具都这么傻瓜了，要什么智能体？直接用脚本串一下可能就能跑起来了。所以，当前智能体使用工具还有些挑剔，构建工具本身就是智能体落地的工作量。

带着这两个问题，我们开始进一步优化我们的智能体。

## 智能体3.0: 结构化智能体

### 智能体模型

我们调研了AutoGen、CrewAI、OpenAI Swarm、LangGraph等多智能体的方案，发现这些开源方案确实都在通过流程、角色、分层等结构化的方式，进一步提升多智能体的解决问题的能力。这里我们就产生了一个困惑，这些智能体之上的结构拓扑，如何和智能体本身结合？如何能让结构来提升智能体的能力，而非仅仅是提升单独某个流程的能力。

我们从蚂蚁开源的 agentUniverse 中汲取到了一些灵感，**这些拓扑结构能否做通用化的抽象之后，内敛到智能体内部？**

> agentUniverse 框架预置有若干已在真实产业中验证有效的多智能体协作模式组件。其中，“PEER” 是最具特色的模式之一。
> 
> 
> 
> PEER 模式：该模式通过计划（Planning）、执行（Executing）、表达（Expressing）、评价（Reviewing）四个不同职责的智能体，实现对复杂问题的多步拆解、分步执行，并基于评价反馈进行自主迭代，最终提升推理分析类任务表现。这一模式显著适用于需要多步拆解、深度分析的场景，比如对于事件的解读、宏中观经济分析、商业方案的可行性分析等。

我们在���能体2.0-实例化智能体的实践中，指定工具调用其实是必不可少的，比如提问改写(前置)、意图识别(前置)、回答格式化(后置)、回答真实性校验(后置)等。如果把这些工具调用放到思维链中，告诉智能体，你在推理的第一步或最后一步必须要做什么，会比较低效：既多一次串行大模型调用，又会调用不稳定，常常会漏调用。所以需要有一种智能体的模型，能够融合自由调用思维链和固定调用工作流。

于是我们将智能体模型做了进一步结构化提升：![](https://segmentfault.com/img/remote/1460000046214352)

通过这样的一个模型，我们将工作流和思维链做了结构性的融合，使得在一个智能体中，既能方便地配置固定工具调用链，又能配置自由调用的思维链。同时，由于将工作流内敛在智能体中，所以工作流的优化就是对智能体的优化，这使得工作流和智能体优化目标完全对齐。反过来思考这个问题，其实也成立：**如果精通某个业务领域的专家，将总结的经验转换成一个工作流，这个工作流可能和大模型毫无关系，但这个工作流能够非常高效地解决特定领域的问题，那么这个工作流和智能体有什么区别呢？我们认为两者可以等价。** 当我们推导出`agent == workflow`概念之后，我们可能会马上联想到`Runnable`这个Langchain中的概念，基于这个概念，我们可以推导出 `agent == tool`。

> 在LangChain中， Runnable 是LangChain中用于定义一个可运行对象的抽象接口。 它允许开发者定义任何执行某种操作的逻辑单元，并通过标准化的方法使其能够在更大的系统中无缝协作。

于是，我们基于Runnable的这个概念，可以将 `agent == tool == workflow`这三个抽象概念统一。看起来似乎很酷？

这个概念统一又让我们联想到了，大学在学习编程语言的时候，我们常说哪些语言中函数是一等公民(first-class citizen)，哪个语言中对象是一等公民(first-class citizen)。

> In a given programming language design, a first-class citizen is an entity which supports all the operations generally available to other entities. These operations typically include being passed as an argument, returned from a function, and assigned to a variable.

那么在大模型生态中，是否也可以存在类似的概念？**我们是否可以尝试将Runnable看作是一等公民(first-class citizen)？**

通过Runnable的概念概念统一，这样智能体就具备了无限递归的能力，每个智能体中能够调用其他智能体。所以，可以不严谨地说，**这个智能体模型是图灵完备的。**

> 在可计算性理论，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟任何图灵机，那么它便符合图灵完备（Turing-complete或computationally universal）。这意味着这个系统也可以识别其他数据处理规则集，图灵完备性被用作表达这种数据处理规则集的一种属性。如今，几乎所有编程语言都是具有图灵完备性的。这个词以引入图灵机概念的数学家艾伦·图灵命名。

### 大模型中间件

在落地结构化智能体的过程中，我们逐渐发现智能体的应用场景，在大模型底座之上，由可以分出 大模型业务平台、大模型中间件 这样两层：

- 大模型业务平台(ABM-Mind)：提供大模型场景下的各种丰富的应用能力，如智能体、会话、画布等，并且这些能力并不是独立建设的，是可以多重能力叠加的。
- 大模型中间件(runnable-hub)： 基于worker提供丰富的可组装能力，比如我们前面提到Agent中的prerun、postrun、chain这些关键能力，均是由多个worker的能力组装而成的。![](https://segmentfault.com/img/remote/1460000046214353)

为什么我们需要拆出大模型中间件(runnable-hub)这层呢？

- 一、我们发现大模型平台层功能常常需要更新迭代，随着业务场景、大模型底座的变化而出现各种变化。
- 二、大模型每次调用通常会包含较长的异步过程，这对普遍CRUD为主的业务编程模型并不友好，如果引入DAG叠加异步之后，就会变得更复杂。

经过这样中间件分层改造后的大模型业务平台健步如飞，不需要再被大模型异步调用过程所束缚，只要把任务提交上去，等待回调即可。

本来这段写到这里差不多了，但我们一起使用runnable-hub的小伙伴跟我说，我们这个东西和Anthropic提出的MCP(Model Context Protocol)有点像，我看了一下，还真是，于是就分析了一下两者的差异。![](https://segmentfault.com/img/remote/1460000046214354)

1. MCP是个非常好的设计，凡是大模型应用都绕不过大模型与工具的交互，Function Call就是一个很好的实践，而MCP则是更进一步的实践。
2. 在MCP上也能看到一些**智能体与工具平权**的设想，它只规范通信协议，至于调用背后是大模型还是工具，其实不重要，所以大模型多层嵌套也是可行的。
3. MCP是一个request+response同步阻塞协议，多层嵌套调用均是有内存占用开销的，所以过长时间的推理可能不行。RunnableHub是一个事件驱动框架，支持无限时长的深度推理行为。
4. MCP是Anthropic提出的，他们对智能体有充分的自信，因此希望靠MCP协议来简化业务平台&大模型、大模型&工具的通信编程即可。而RunnableHub是希望通过中间件分层来解决智能体&工具&业务平台&大模型各能力间的复杂协调问题。

## 智能体4.0: 自演进智能体

程序自进化可以说是多年来一直埋藏在心底的一颗种子。很多年前读大学时，在一次前往成都参加安全大赛的绿皮卧铺火车上，和学长彻夜讨论了程序自进化的可能性，当时结论是病毒通过汇编指令随机突变来绕过安全扫描是可行，但是实现字符串编码级别的程序进化几乎是不可能的。要通过这样的突变来演进新功能，几乎和猴子敲出莎士比亚一样难。不过那时也对程序自进化有了一些感知，就是**随机突变的最小颗粒度非常重要**。

随着大模型的出现，我逐渐地发现似乎原本这个不可能的事情在逐渐变得可能，我根据自己的认知大致列了这样一个不太全面的表格：

| 编程对象 | 随机突变对象 | 突变颗粒度 | 新功能自进化 |
|---|---|---|---|
| 电脑病毒 | 汇编指令 | 适中 | 无 |
| 普通软件 | 编程语言字符串 | 过小 | 无 |
| 大模型 | 参数 | 过小 | 少量 |
| 思维链智能体 | 提示词字符串 | 小 | 少量 |
| 结构化智能体 | 智能体、工作流 | 适中 | 大量 |

随着结构化智能体的实践的不断深入，我们发现智能体的能力边界也可以不断变化，有些场景适合较全能的智能体，而有些场景则适合多个智能体协作。我们可以预先设定一些场景的数据集，通过智能体的表现结果来判定哪种结构更适合当前的场景。

这个时候有做过类似实践的同学可能就会问，即使是这样演进，还是有点低效啊，什么时候分裂智能体全看运气？这时候，就要搬出我们的祖师爷冯诺依曼。在前面文章《从人脑到大模型：冯诺依曼的提示词工程启示》中提到过，冯诺依曼在《计算机与人脑》中说过这样一段话：

**继续追踪这个课题，使我们必须探讨语言的问题。我曾指出，神经系统是基于两种类型的通信方式的。一种是不包含有算术形式体系的，一种是算术形式体系的。这就是说：一种是指令的通信（逻辑的通信），一种是数字的通信（算术的通信），前者可以用语言叙述，而后者则是数学的叙述。**

让智能体进行结构化演进的时候，需要区分【推理】和【计算】这两种任务类型：

- **什么是推理？** 它是一种语言叙述，类似苏格拉底反诘法，把一个复杂问题转化成若干个简单一点的问题（降维），推理过程中不追求答案，只需要将问题做分解即可。**简单点说就是用“复杂未知”产生“简单未知”。**
- **什么是计算？** 它是一种数学叙述，能够利用现有的工具，求解获得答案。大模型的每次计算过程，可以用有限次思维推理来进行落地。**简单点说就是用“简单未知”产生“已知”。**

![](https://segmentfault.com/img/remote/1460000046214355)

如果放在当前的智能体架构中，按照祖师爷这样的方法论，其实就是：

- 
  1. 利用智能体分析更复杂的场景，让智能体自动产生更多的工具（计算）。

- 
  1. 利用更多更强大的工具，让智能体解决更复杂的问题（推理）。

我们在前面智能体2.0-实例化智能体的时候，碰到工具生态问题，在这样一个智能体自演进的路线上，就能被很好地解决。

所以，这个智能体演进的路线和现在非常惊艳的manus有所差异，这个路线不追求智能体的单次推理非常惊艳，只要有足够的时间和反复迭代积累，某个领域的智能体的能力就能演进到一个非常高的高度。

## 大模型中间件开源

为了方便大家更好地落地各自业务场景的结构化智能体。文中所提到到大模型中间件，作为SREWorks数智运维平台生态的一部分，均已开源，欢迎大家体验反馈。

[https://github.com/alibaba/sreworks-ext/blob/main/runnable-hub/README.md](https://link.segmentfault.com/?enc=Tkooq2N6tj%2Bu3CuNSFUngg%3D%3D.I5xgjWDql3cRF5h64%2FViWc%2Fa31hB2sIq1a%2Fy6xP3lCK3KSrT%2FBfJ9B6WF3%2Fv7ac4Djardo0CRJ%2F8iSWT%2FbnOqjy4CHfb2mohNY%2BISSWGpRA%3D)

*参考材料*

- agentUniverse: agentUniverse is a multi-agent framework based on large language models. [https://github.com/antgroup/agentUniverse](https://link.segmentfault.com/?enc=iHygVCDCUORc2x88pifXnA%3D%3D.fRtiMvtFzsGIAJj5TpNfLEnXeGzXJ%2BBtQrsMhExnSIMLwoczS77AEBqi5kp5Dgqw)
- LARP: Language-Agent Role Play for Open-World Games [https://arxiv.org/abs/2312.17653](https://link.segmentfault.com/?enc=XOqgrw7cMwr0pbDpuSmR0Q%3D%3D.s8cqJtFi8yosAcC0I%2FUpL%2FKZe1lmo%2B5Cj3wXKwIb4edob2NHt4zz1gRcmZraPwje)
- ReAct: Synergizing Reasoning and Acting in Language Models [https://arxiv.org/abs/2210.03629](https://link.segmentfault.com/?enc=nkEBTdkCv3v4qYeuZFIwvw%3D%3D.tW6sog2i4WnH4aIg6dbUdVlToSwFONS4pHBx8fqAX751PMEnMMgKk07myC%2FZQFHS)
- AutoGen Enhanced Inference [https://microsoft.github.io/autogen/docs/Use-Cases/enhanced_inference/#templating](https://link.segmentfault.com/?enc=8nw%2BEM3zsNMC9LtFNuhb6A%3D%3D.QSJ2bKCUik1QxaByNGh%2BBBLHqYujNk0hT0rTOrTTviiONcRnSvIIy7YGqvmkkTu9iiu0ddBSq84Hmw4uRenUEgVCrfWU7QqlWj7I1A5ekhtaGMQAL16y38yZv36L8TeA)
- Langchain Runnable [https://python.langchain.com/api_reference/core/runnables/langchain_core.runnables.base.Runnable.html](https://link.segmentfault.com/?enc=gcgL3Geyd62fqwpTf2qzMQ%3D%3D.RuRWjZ1dcAeYhcEKWoRY4jHWichWvIZIBBOUxffL3tFd94q%2BvRRtEalLj0wVFp3dvW3amX%2F2tJYnoQwZTaZUOhvmmQfNhjfQ3p%2BAHyYIa0yp2MJrKidHPTkIWiVUi7HeS2MtHlQmp4xFvnki61Wxwg%3D%3D)
- 图灵完备性 [https://zh.wikipedia.org/wiki/%E5%9C%96%E9%9D%88%E5%AE%8C%E5%82%99%E6%80%A7](https://link.segmentfault.com/?enc=BH5T8ft4uqthMCDnd55tzQ%3D%3D.i9DNOmCm4YV2jHd%2BciD77gtfWaDSBhGZybIR4Y5U2ubfdTUjJkuAJs%2FDxFRDb85f3JFXjTMLVzVGRCNBnWsqBVfaix%2BT%2BhP0FmaD91cuDR0%3D)

[运维](https://segmentfault.com/t/%E8%BF%90%E7%BB%B4)[人工智能](https://segmentfault.com/t/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD)[大模型](https://segmentfault.com/t/%E5%A4%A7%E6%A8%A1%E5%9E%8B)

阅读 1.7k

[发布于 2025-03-13](https://segmentfault.com/a/1190000046214347/revision)

---

[https://segmentfault.com/u/elhix0bg](https://segmentfault.com/u/elhix0bg)
[阿里云大数据AI](https://segmentfault.com/u/elhix0bg)

15 声望

15 粉丝

分享阿里云计算平台的大数据和AI方向的技术创新、实战案例、经验总结。

---

« 上一篇
[查询队列（Query Queue）快速入门](https://segmentfault.com/a/1190000046214126)

下一篇 »
[演讲实录|分布式 Python 计算服务 MaxFrame 介绍及场景应用方案](https://segmentfault.com/a/1190000046229118)

[https://segmentfault.com/a/1190000046214347#comment-area](https://segmentfault.com/a/1190000046214347#comment-area)

### 引用和评论

**推荐阅读**

[你的“数字同事”来了：DataWorks Data Agent 全面升级阿里云大数据AI](https://segmentfault.com/a/1190000047780608?utm_source=sf-similar-article)[ai 时代，或者说下一个 xxx 时代，作为程序员可以创业哪些组件占据一席之地? 历代思路整理总结rabbitcoder赞 1阅读 2.1k](https://segmentfault.com/a/1190000047629249?utm_source=sf-similar-article)[OpenAI vs Anthropic vs Google：2026年AI大模型竞争格局ViVaAPI赞 1阅读 6.2k](https://segmentfault.com/a/1190000047691901?utm_source=sf-similar-article)[2026年全网最全大模型API横评：Claude / GPT / Gemini 等8 大厂商 20+ 主流模型七牛云行业应用阅读 10.2k](https://segmentfault.com/a/1190000047676047?utm_source=sf-similar-article)[AI短剧全流程生成技术指南：从故事到成片的高效落地AIAgent研究赞 1阅读 4.7k](https://segmentfault.com/a/1190000047614821?utm_source=sf-similar-article)[LangGraph vs Semantic Kernel：状态图与内核插件的两条技术路线对比deephub赞 1阅读 1.3k](https://segmentfault.com/a/1190000047649978?utm_source=sf-similar-article)[OpenAI Codex 安装与使用全指南：API Key 获取与自定义 API 配置与实战排错uiuihaoAICG阅读 9.7k](https://segmentfault.com/a/1190000047687741?utm_source=sf-similar-article)

**0 条评论**
[得票](https://segmentfault.com/a/1190000046214347?sort=votes)[最新](https://segmentfault.com/a/1190000046214347?sort=newest)

![头像](https://image-static.segmentfault.com/317/931/3179314346-5f61e47221e07)

评论支持部分 Markdown 语法：`**粗体** _斜体_ [链接](http://example.com) `代码` - 列表 > 引用`。你还可以使用 `@ `来通知其他用户。
