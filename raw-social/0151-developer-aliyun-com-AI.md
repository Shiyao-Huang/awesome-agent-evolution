# AI智能体架构从思维链到自演进的四阶段演化-开发者社区-阿里云

- URL: https://developer.aliyun.com/article/1659028
- Platform: developer.aliyun.com
- Extraction status: ok
- content_timestamp: 2025-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-03

## Raw Content

## AI智能体架构从思维链到自演进的四阶段演化-开发者社区-阿里云

**Source**: https://developer.aliyun.com/article/1659028

---

[开发者社区](https://developer.aliyun.com/)[大数据与机器学习](https://developer.aliyun.com/bigdata/)[大数据运维SREWorks](https://developer.aliyun.com/bigdata/SREWorks)
正文

# AI大模型运维开发探索第四篇：智能体分阶段演进路线

2025-03-28

1703

版权

版权声明：

         本文内容由阿里云实名注册用户自发贡献，版权归原作者所有，阿里云开发者社区不拥有其著作权，亦不承担相应法律责任。具体规则请查看《         [阿里云开发者社区用户服务协议](https://developer.aliyun.com/article/768092)》和         《[阿里云开发者社区知识产权保护指引](https://developer.aliyun.com/article/768093)》。如果您发现本社区中有涉嫌抄袭的内容，填写         [侵权投诉表单](https://yida.alibaba-inc.com/o/right)进行举报，一经查实，本社区将立刻删除涉嫌侵权内容。     

本文涉及的产品

RDS DuckDB + QuickBI 企业套餐，8核32GB + QuickBI 专业版

**简介：**
本文探讨了智能体工程的演进历程，从最初的思维链（智能体1.0）到实例化智能体（智能体2.0），再到结构化智能体（智能体3.0），最终展望了自演进智能体（智能体4.0）。文章详细分析了各阶段遇到的问题及解决策略，如工具调用可靠性、推理能力提升等，并引入了大模型中间件的概念以优化业务平台与工具间的协调。此外，文中还提到了RunnableHub开源项目，为读者提供了实际落地的参考方案。通过不断迭代，智能体逐渐具备更强的适应性和解决问题的能力，展现了未来AI发展的潜力。

在第三篇关于智能体的文章发布后，许多同学纷纷前来咨询智能体相关的落地细节。经过几轮工程迭代，智能体工程与最初的架构相比，已经有了显著的区别。

本文将详细陈述这些不同演进阶段所遇到的问题及其应对策略，供大家参考和借鉴。

# 一、智能体1.0：工程化思维链

在前三篇文章中，我们提到了如何从LangChain的Agent&Tool一步步向前摸索，演进成为了一个智能体工程。前期的探索过程在这里就不再赘述了，下面我们直接从工程原理讲起。

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_21ee754b1ece4889b54627b3e577b4c6.png?x-oss-process=image/resize,w_1400/format,webp)

如上图所示，整个流程运作的核心其实就是干这三件事情：**提示词输入，解析大模型返回，拼接工具返回到提示词**。这里从 Question 到 Thought 再到 Action 的推理过程我们称之为 chain-of-thought(思维链)，通过思考明确行为，通过行为反馈进一步思考，最后收敛获得一个结论。因此整个思维链推理过程并不复杂。

看起来简单的思维链工程，却解决了一个很大的问题，我们使用工具的时候，不需要再去精密计算每个工具的输入输出结构，只要每个工具的使用语义是清晰连贯的，大模型就能自由调用这些工具。我们把一堆可能有用的工具全塞给大模型，它就能分解任务，调用工具，来完成复杂的事情。

建设完思维链工程之后，我们将这样的思维链模式想得比较全能，似乎只要工具足够多，智能体就能解决任何问题。但现实是，这样的智能体能解决一些问题，但不多，也常常出现调用工具时候参数不准的问题。于是，我们不断地优化工具，让工具的输入参数尽可能容错，什么string, list, dict 全能收，做一层适配转换。但即使是这样，还是会出现一些较低级的错误。

于是我们重新思考起工具本身来，这个点我们在第一篇中有提到过，**为什么很多编程语言中都有class(类)这个概念？**不就是class(类)实例化之后能够存储很多参数么，然后我们只要执行.do()这样的类似的方法就能非常方便地调用class(类)函数了，有些函数甚至都不需要有参数，因为函数会自动从class实例中能够读到参数。因此借鉴这个概念设计，我们尝试了工具实例化，具体的实践这里不展开了，详见第一篇的面向AI对象的AI编程章节。

我们使得智能体可以先实例化工具，然后再来调用，这样就确实减少了工具调用。但是工具实例化也衍生出了一个问题，就是工具可以被实例化多次，智能体在推理过程中，就需要记忆这些实例化后的工具：我们修改思维链的提示词模板，我们在每次观测数据返回时，也会提醒大模型有哪些工具已经被实例化，但一旦工具实例化多了之后，同样的问题又出现了，智能体可能又会分不清，直接把工具实例都找错了。所以，我们其实面对这样一个现状：是不是单个智能体其实没那么全能？我们需要一种方法来解决复杂的问题。

# 二、智能体2.0：实例化智能体

我们随着工具实例化的思路继续演进，我们发现其实能够实例化的不仅仅有工具，其实智能体也能做实例化。怎么理解呢？既然智能体能够扮演某个领域的专家，那他能不能扮演一个更小领域的专家，比如这个专家只能诊断某个具体的对象。比如某台交换机，如下示例：

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_9ea78da908784732a63f7d40275611cf.png?x-oss-process=image/resize,w_1400/format,webp)

智能体实例化，通过将各种实例参数的上浮，智能体在推理过程中，进一步专注于推理本身，减少了各种调用时参数的干扰。通过实例化智能体，我们可以将管理的所有对象都进行一次实例化。在k8s云原生的时候，我们各种设计都参考k8s，可能希望每个资源有一个URI，然后可以通过CRUD对资源进行操作。现在到了实例化智能体之后，我们可以将每个资源都变成一个智能体实例，甚至都可以复用资源的URI，在CRUD中增加一个/chat的对话交互路径即可。

按照我们在第三篇末提到过的例子，如果要排查复杂问题，只需要让一个更上层的智能体挨个询问这些智能体实例，就可以完成排查。更多细节可以参考第三篇。

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_748c49946322455185a4c85ef4a1e7f4.png?x-oss-process=image/resize,w_1400/format,webp)

事实上，这种智能体排查场景还是偏理想化，通常实际业务落地过程中，出现了两个问题：

**1. 推理可靠性**：很多场景存在着较多的SOP(标准作业程序)，如果出现什么问题按照某个既定流程去排查即可。但是大模型对于这个流程的遵循常常会不太稳定，有些时候会漏下步骤，有些时候有产生幻觉，没问几句就自信满满地说问题已经解决了。如果作为一个阶段性的实验产物可能足够了，但是要上生产确实还不够，虽然我们已经通过实例化充分地提升了智能体工具调用的可靠性，但是大模型本身的推理可靠性并没有提升特别多。、

**2. 工具生态**：给智能体使用的工具并非现成，为了给大模型使用，可能需要优化一下输入输出。但当我们将这些工具优化完，我们又会冒出另外一个疑问，工具都这么傻瓜了，要什么智能体？直接用脚本串一下可能就能跑起来了。所以，当前智能体使用工具还有些挑剔，构建工具本身就是智能体落地的工作量。

带着这两个问题，我们开始进一步优化我们的智能体。

# 三、智能体3.0：结构化智能体

## 智能体模型

我们调研了AutoGen、CrewAI、OpenAI Swarm、LangGraph等多智能体的方案，发现这些开源方案确实都在通过流程、角色、分层等结构化的方式，进一步提升多智能体的解决问题的能力。这里我们就产生了一个困惑，这些智能体之上的结构拓扑，如何和智能体本身结合？如何能让结构来提升智能体的能力，而非仅仅是提升单独某个流程的能力。

我们从蚂蚁开源的 agentUniverse 中汲取到了一些灵感，**这些拓扑结构能否做通用化的抽象之后，内敛到智能体内部？**

agentUniverse 框架预置有若干已在真实产业中验证有效的多智能体协作模式组件。其中，“PEER” 是最具特色的模式之一。

PEER 模式：该模式通过计划（Planning）、执行（Executing）、表达（Expressing）、评价（Reviewing）四个不同职责的智能体，实现对复杂问题的多步拆解、分步执行，并基于评价反馈进行自主迭代，最终提升推理分析类任务表现。这一模式显著适用于需要多步拆解、深度分析的场景，比如对于事件的解读、宏中观经济分析、商业方案的可行性分析等。

我们在智能体2.0-实例化智能体的实践中，指定工具调用其实是必不可少的，比如提问改写(前置)、意图识别(前置)、回答格式化(后置)、回答真实性校验(后置)等。如果把这些工具调用放到思维链中，告诉智能体，你在推理的第一步或最后一步必须要做什么，会比较低效：既多一次串行大模型调用，又会调用不稳定，常常会漏调用。所以需要有一种智能体的模型，能够融合自由调用思维链和固定调用工作流。

于是我们将智能体模型做了进一步结构化提升：

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_424b3e4fa6c04be5a20be03a51903f02.png?x-oss-process=image/resize,w_1400/format,webp)

通过这样的一个模型，我们将工作流和思维链做了结构性的融合，使得在一个智能体中，既能方便地配置固定工具调用链，又能配置自由调用的思维链。同时，由于将工作流内敛在智能体中，所以工作流的优化就是对智能体的优化，这使得工作流和智能体优化目标完全对齐。反过来思考这个问题，其实也成立：**如果精通某个业务领域的专家，将总结的经验转换成一个工作流，这个工作流可能和大模型毫无关系，但这个工作流能够非常高效地解决特定领域的问题，那么这个工作流和智能体有什么区别呢？我们认为两者可以等价**。当我们推导出
agent == workflow
概念之后，我们可能会马上联想到
 Runnable
 这个Langchain中的概念，基于这个概念，我们可以推导出 
agent == tool。

在LangChain中， Runnable 是 LangChain 中用于定义一个可运行对象的抽象接口。它允许开发者定义任何执行某种操作的逻辑单元，并通过标准化的方法使其能够在更大的系统中无缝协作。

于是，我们基于Runnable的这个概念，可以将 
agent == tool == workflow 
这三个抽象概念统一。看起来似乎很酷？

这个概念统一又让我们联想到了，大学在学习编程语言的时候，我们常说哪些语言中函数是一等公民(first-class citizen)，哪个语言中对象是一等公民(first-class citizen)。

In a given programming language design, a first-class citizen is an entity which supports all the operations generally available to other entities. These operations typically include being passed as an argument, returned from a function, and assigned to a variable.

那么在大模型生态中，是否也可以存在类似的概念？我们是否可以尝试将Runnable看作是一等公民(first-class citizen)？

通过Runnable的概念概念统一，这样智能体就具备了无限递归的能力，每个智能体中能够调用其他智能体。所以，可以不严谨地说，这个智能体模型是图灵完备的。

在可计算性理论，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟任何图灵机，那么它便符合图灵完备（Turing-complete或computationally universal）。这意味着这个系统也可以识别其他数据处理规则集，图灵完备性被用作表达这种数据处理规则集的一种属性。如今，几乎所有编程语言都是具有图灵完备性的。这个词以引入图灵机概念的数学家艾伦·图灵命名。

## 大模型中间件

在落地结构化智能体的过程中，我们逐渐发现智能体的应用场景，在大模型底座之上，由可以分出 大模型业务平台、大模型中间件 这样两层：

- 大模型业务平台(ABM-Mind)：提供大模型场景下的各种丰富的应用能力，如智能体、会话、画布等，并且这些能力并不是独立建设的，是可以多重能力叠加的。
- 大模型中间件(runnable-hub)：基于worker提供丰富的可组装能力，比如我们前面提到Agent中的prerun、postrun、chain这些关键能力，均是由多个worker的能力组装而成的。

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_11ec34be880948258ebec73cbf97d249.png?x-oss-process=image/resize,w_1400/format,webp)

为什么我们需要拆出大模型中间件(runnable-hub)这层呢？

一、我们发现大模型平台层功能常常需要更新迭代，随着业务场景、大模型底座的变化而出现各种变化。

二、大模型每次调用通常会包含较长的异步过程，这对普遍CRUD为主的业务编程模型并不友好，如果引入DAG叠加异步之后，就会变得更复杂。

经过这样中间件分层改造后的大模型业务平台健步如飞，不需要再被大模型异步调用过程所束缚，只要把任务提交上去，等待回调即可。

本来这段写到这里差不多了，但我们一起使用runnable-hub的小伙伴跟我说，我们这个东西和Anthropic提出的MCP(Model Context Protocol)有点像，我看了一下，还真是，于是就分析了一下两者的差异。

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_b2f6ee95ead84867965a38e00ff486ec.png?x-oss-process=image/resize,w_1400/format,webp)

1. MCP是个非常好的设计，凡是大模型应用都绕不过大模型与工具的交互，Function Call就是一个很好的实践，而MCP则是更进一步的实践。
2. 在MCP上也能看到一些智能体与工具平权的设想，它只规范通信协议，至于调用背后是大模型还是工具，其实不重要，所以大模型多层嵌套也是可行的。
3. MCP是一个request+response同步阻塞协议，多层嵌套调用均是有内存占用开销的，所以过长时间的推理可能不行。RunnableHub是一个事件驱动框架，支持无限时长的深度推理行为。
4. MCP是Anthropic提出的，他们对智能体有充分的自信，因此希望靠MCP协议来简化业务平台&大模型、大模型&工具的通信编程即可。而RunnableHub是希望通过中间件分层来解决智能体&工具&业务平台&大模型各能力间的复杂协调问题。

# 四智能体4.0：自演进智能体

程序自进化可以说是多年来一直埋藏在心底的一颗种子。很多年前读大学时，在一次前往成都参加安全大赛的绿皮卧铺火车上，和学长彻夜讨论了程序自进化的可能性，当时结论是病毒通过汇编指令随机突变来��过安全扫描是可行，但是实现字符串编码级别的程序进化几乎是不可能的。要通过这样的突变来演进新功能，几乎和猴子敲出莎士比亚一样难。不过那时也对程序自进化有了一些感知，就是**随机突变的最小颗粒度非常重要**。

随着大模型的出现，我逐渐地发现似乎原本这个不可能的事情在逐渐变得可能，我根据自己的认知大致列了这样一个不太全面的表格：

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_3e6aeae512d246e1899e5c7e1669236b.png?x-oss-process=image/resize,w_1400/format,webp)

随着结构化智能体的实践的不断深入，我们发现智能体的能力边界也可以不断变化，有些场景适合较全能的智能体，而有些场景则适合多个智能体协作。我们可以预先设定一些场景的数据集，通过智能体的表现结果来判定哪种结构更适合当前的场景。

这个时候有做过类似实践的同学可能就会问，即使是这样演进，还是有点低效啊，什么时候分裂智能体全看运气？这时候，就要搬出我们的祖师爷冯诺依曼。在前面文章《从人脑到大模型：冯诺依曼的提示词工程启示》中提到过，冯诺依曼在《计算机与人脑》中说过这样一段话：

继续追踪这个课题，使我们必须探讨语言的问题。我曾指出，神经系统是基于两种类型的通信方式的。一种是不包含有算术形式体系的，一种是算术形式体系的。这就是说：一种是指令的通信（逻辑的通信），一种是数字的通信（算术的通信），前者可以用语言叙述，而后者则是数学的叙述。

让智能体进行结构化演进的时候，需要区分**【推理】和【计算】**这两种任务类型：

- **什么是推理？**它是一种语言叙述，类似苏格拉底反诘法，把一个复杂问题转化成若干个简单一点的问题（降维），推理过程中不追求答案，只需要将问题做分解即可。简单点说就是用“复杂未知”产生“简单未知”。
- **什么是计算？**它是一种数学叙述，能够利用现有的工具，求解获得答案。大模型的每次计算过程，可以用有限次思维推理来进行落地。简单点说就是用“简单未知”产生“已知”。

**
![image.png](https://ucc.alicdn.com/pic/developer-ecology/fjyw77odlkyus_ad2b53c875a748c6869712dcc4c8ee49.png?x-oss-process=image/resize,w_1400/format,webp)

如果放在当前的智能体架构中，按照祖师爷这样的方法论，其实就是：

1. 利用智能体分析更复杂的场景，让智能体自动产生更多的工具（计算）。

2. 利用更多更强大的工具，让智能体解决更复杂的问题（推理）。

我们在前面智能体2.0-实例化智能体的时候，碰到工具生态问题，在这样一个智能体自演进的路线上，就能被很好地解决。

所以，这个智能体演进的路线和现在非常惊艳的 manus 有所差异，这个路线不追求智能体的单次推理非常惊艳，只要有足够的时间和反复迭代积累，某个领域的智能体的能力就能演进到一个非常高的高度。

# 五、大模型中间件开源

为了方便大家更好地落地各自业务场景的结构化智能体。文中所提到到大模型中间件，作为 SREWorks 数智运维平台生态的一部分，均已开源，欢迎大家体验反馈。

[https://github.com/alibaba/sreworks-ext/blob/main/runnable-hub/README.md](https://github.com/alibaba/sreworks-ext/blob/main/runnable-hub/README.md?spm=a2c6h.13046898.publish-article.3.30606ffaRbkZpg&file=README.md)

## 参考材料

[agentUniverse: agentUniverse is a multi-agent framework based on large language models.](https://github.com/antgroup/agentUniverse?spm=a2c6h.13046898.publish-article.33.30606ffaRbkZpg)

[LARP: Language-Agent Role Play for Open-World Games](https://arxiv.org/abs/2312.17653?spm=a2c6h.13046898.publish-article.34.30606ffaRbkZpg&file=2312.17653)

[ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629?spm=a2c6h.13046898.publish-article.35.30606ffaRbkZpg&file=2210.03629)

[AutoGen Enhanced Inference](https://x.sm.cn/5E6Otjm?spm=a2c6h.13046898.publish-article.36.30606ffaRbkZpg)

[Langchain Runnable](https://x.sm.cn/8FajF0K?spm=a2c6h.13046898.publish-article.37.30606ffaRbkZpg)

[图灵完备性](https://x.sm.cn/ACQxXm0?spm=a2c6h.13046898.publish-article.38.30606ffaRbkZpg)

文章标签：

[中间件](https://developer.aliyun.com/label/article_de-3-100254)

[人工智能](https://developer.aliyun.com/label/article_de-3-100052)

[运维](https://developer.aliyun.com/label/article_de-3-100073)

[决策智能](https://developer.aliyun.com/label/article_de-3-100048)

[安全](https://developer.aliyun.com/label/article_de-3-100244)

关键词：

[AI运维](https://www.aliyun.com/sswb/772615.html)

[AI智能体](https://www.aliyun.com/sswb/445909.html)

[AI开发](https://www.aliyun.com/sswb/453662.html)

[AI大模型智能体](https://www.aliyun.com/sswb/1752278.html)

[AI大模型开发](https://www.aliyun.com/sswb/1623638.html)

[https://developer.aliyun.com/profile/fjyw77odlkyus](https://developer.aliyun.com/profile/fjyw77odlkyus)

[阿里云大数据Al技术](https://developer.aliyun.com/profile/fjyw77odlkyus)

目录

相关文章

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

|

7月前

|

人工智能

安全

API

[20 万奖金池就位！Higress AI 网关开发挑战赛参赛指南](https://developer.aliyun.com/article/1685744)
本次赛事共设三大赛题方向，参赛者可���任选一个方向参赛。本文是对每个赛题方向的参赛指南。

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

624

60

90

[Echo_Wish](https://developer.aliyun.com/profile/lmu5kq2lgve42)

|

7月前

|

机器学习/深度学习

人工智能

缓存

[AI运维不再是玄学：教你用AI提前预测系统故障，少熬几次夜！](https://developer.aliyun.com/article/1686299)
AI运维不再是玄学：教你用AI提前预测系统故障，少熬几次夜！

[Echo_Wish](https://developer.aliyun.com/profile/lmu5kq2lgve42)

791

13

13

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

|

7月前

|

人工智能

测试技术

API

[构建AI智能体：二、DeepSeek的Ollama部署FastAPI封装调用](https://developer.aliyun.com/article/1686112)
本文介绍如何通过Ollama本地部署DeepSeek大模型，结合FastAPI实现API接口调用。涵盖Ollama安装、路径迁移、模型下载运行及REST API封装全过程，助力快速构建可扩展的AI应用服务。

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

2428

7

9

[Echo_Wish](https://developer.aliyun.com/profile/lmu5kq2lgve42)

|

7月前

|

人工智能

运维

算法

[AI来了，运维不慌：教你用人工智能把团队管理提速三倍！](https://developer.aliyun.com/article/1685932)
AI来了，运维不慌：教你用人工智能把团队管理提速三倍！

[Echo_Wish](https://developer.aliyun.com/profile/lmu5kq2lgve42)

909

8

8

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

|

7月前

|

人工智能

运维

安全

[加速智能体开发：从 Serverless 运行时到 Serverless AI 运行时](https://developer.aliyun.com/article/1685841)
在云计算与人工智能深度融合的背景下，Serverless 技术作为云原生架构的集大成者，正加速向 AI 原生架构演进。阿里云函数计算（FC）率先提出并实践“Serverless AI 运行时”概念，通过技术创新与生态联动，为智能体（Agent）开发提供高效、安全、低成本的基础设施支持。本文从技术演进路径、核心能力及未来展望三方面解析 Serverless AI 的突破性价值。

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

761

4

4

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

|

7月前

|

人工智能

运维

Java

[Spring AI Alibaba Admin 开源！以数据为中心的 Agent 开发平台](https://developer.aliyun.com/article/1685628)
Spring AI Alibaba Admin 正式发布！一站式实现 Prompt 管理、动态热更新、评测集构建、自动化评估与全链路可观测，助力企业高效构建可信赖的 AI Agent 应用。开源共建，现已上线！

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

7656

103

139

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

|

7月前

|

人工智能

API

开发工具

[构建AI智能体：一、初识AI大模型与API调用](https://developer.aliyun.com/article/1686085)
本文介绍大模型基础知识及API调用方法，涵盖阿里云百炼平台密钥申请、DashScope SDK使用、Python调用示例（如文本情感分析、图像文字识别），助力开发者快速上手大模型应用开发。

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

2761

18

23

[https://developer.aliyun.com/article/1686085](https://developer.aliyun.com/article/1686085)

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

|

7月前

|

存储

机器学习/深度学习

人工智能

[构建AI智能体：三、Prompt提示词工程：几句话让AI秒懂你心](https://developer.aliyun.com/article/1686223)
本文深入浅出地讲解Prompt原理及其与大模型的关系，系统介绍Prompt的核心要素、编写原则与应用场景，帮助用户通过精准指令提升AI交互效率，释放大模型潜能。

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

1330

6

7

[大数据与机器学习](https://developer.aliyun.com/bigdata/)

[大数据运维SREWorks](https://developer.aliyun.com/bigdata/SREWorks)

## 热门文章

## 最新文章

[1
                            
                            [ICLR 2024] 基于Pathways架构的自适应多尺度时间序列预测模型Pathformer](https://developer.aliyun.com/article/1524207)[2
                            
                            AI大模型运维开发探索第三篇：深入浅出运维智能体](https://developer.aliyun.com/article/1465665)[3
                            
                            AI大模型运维开发探索第四篇：智能体分阶段演进路线](https://developer.aliyun.com/article/1659028)[4
                            Selenium中如何实现翻页功能](https://developer.aliyun.com/article/1623660)[5
                            反向海淘独立站系统设计：如何实现一键同步商品至Shopify/Coupang等多平台并完成自动采购与跨境运输](https://developer.aliyun.com/article/1728743)[6
                            反向海淘风口下，taocarts 跨境独立站系统如何重构代购、集运与代采全链路？](https://developer.aliyun.com/article/1727993)[7
                            ubuntu build install python3.12 and config pip](https://developer.aliyun.com/article/1579041)[8
                            eBPF动手实践系列三：基于原生libbpf库的eBPF编程改进方案](https://developer.aliyun.com/article/1461697)[9
                            Gartner报告：可观测性平台魔力象限](https://developer.aliyun.com/article/1683779)[10
                            [ICLR2024]基于对比稀疏扰动技术的时间序列解释框架ContraLSP](https://developer.aliyun.com/article/1522428)

[1
                            
                            反向海淘独立站系统设计：如何实现一键同步商品至Shopify/Coupang等多平台并完成自动采购与跨境运输
                            191](https://developer.aliyun.com/article/1728743)[2
                            
                            反向海淘爆发下，多平台铺货效率决定规模｜taocarts 打通 Shopify/Coupang 自动化链路
                            181](https://developer.aliyun.com/article/1728072)[3
                            
                            反向海淘风口下，taocarts 跨境独立站系统如何重构代购、集运与代采全链路？
                            243](https://developer.aliyun.com/article/1727993)[4
                            Gartner报告：可观测性平台魔力象限
                            634](https://developer.aliyun.com/article/1683779)[5
                            AI大模型运维开发探索第四篇：智能体分阶段演进路线
                            1703](https://developer.aliyun.com/article/1659028)[6
                            如何使用Scala和Selenium爬取知乎视频并保存到本地
                            474](https://developer.aliyun.com/article/1648749)[7
                            Selenium中如何实现翻页功能
                            1699](https://developer.aliyun.com/article/1623660)[8
                            云栖实录 | 智能运维年度重磅发布及大模型实践解读
                            1456](https://developer.aliyun.com/article/1620891)[9
                            python3 自动生成 nginx 的端口映射, 端口定义的：列表,范围,源端口和目标端口; 服务的端口: samba, mysql, mqtt, mail, webPublic, webInside
                            455](https://developer.aliyun.com/article/1579040)[10
                            ubuntu build install python3.12 and config pip
                            2381](https://developer.aliyun.com/article/1579041)

## 相关课程

[更多](https://edu.aliyun.com/explore/)

[企业运维之弹性计算原理与实践](https://edu.aliyun.com/course/316534)[企业运维之云上网络原理与实践课程](https://edu.aliyun.com/course/316264)[企业级运维之云原生与Kubernetes实战课程](https://edu.aliyun.com/course/315907)[面向运维的 python 脚本速成-1024程序员节创造营公益课](https://edu.aliyun.com/course/315821)[Linux企业运维实战 - 入门及常用命令](https://edu.aliyun.com/course/314053)[玩转云上智能运维](https://edu.aliyun.com/course/312826)

## 相关电子书

[更多](https://developer.aliyun.com/ebook/)

[企业运维之云原生和Kubernetes 实战](https://developer.aliyun.com/ebook/7660)[可视化架构运维实践](https://developer.aliyun.com/ebook/7442)[2021云上架构与运维峰会演讲合集](https://developer.aliyun.com/ebook/1)

## 相关实验场景

[更多](https://developer.aliyun.com/adc/)

[使用AI容器镜像部署Qwen大语言模型](https://developer.aliyun.com/adc/scenario/311000470108)

下一篇

[阿里云网盘 Skill 上线：让 OpenClaw 的成果，手机一点就能发给客户](https://developer.aliyun.com/article/1719163)
