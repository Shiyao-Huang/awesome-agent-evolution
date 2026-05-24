# 【前沿技术解读】Harness Engineering个人解读：构建 Agent 的反馈闭环体系 - 知乎

- URL: https://zhuanlan.zhihu.com/p/2025276212390502415
- Platform: Zhihu
- Extraction status: ok
- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04

## Raw Content

## 【前沿技术解读】Harness Engineering个人解读：构建 Agent 的反馈闭环体系 - 知乎

**Source**: https://zhuanlan.zhihu.com/p/2025276212390502415

---

有问题，就会有答案。知乎，可信赖的问答社区，以让每个人高效获得可信赖的解答为使命。知乎凭借认真、专业和友善的社区氛围，结构化、易获得的优质内容，基于问答的内容生产方式和独特的社区机制，吸引、聚集了各行各业中大量的亲历者、内行人、领域专家、领域爱好者，将高质量的内容透过人的节点来成规模地生产和分享。用户通过问答等交流方式建立信任和连接，打造和提升个人影响力，并发现、获得新机会。

![](https://picx.zhimg.com/v2-ee52f8e26d7d3324fe1e8e4e5061146b_1440w.jpg)

大模型发展已经到达一个阶段，可以自主执行长期的任务了。在这基础上，OpenAI、Anthropic 还有 
Langchain
 等公司都进行了一些尝试，但他们发现效果都不好，本质原因在于，原生大模型缺乏天然的"自我验证与反馈"本能。

我们可以联想到
控制理论
，控制理论中，我们为了控制受控对象，不只需要控制器，还需要传感器组成反馈闭环，可以说反馈闭环是控制理论的关键，这套理论可以应用在企业中的几乎所有流程里，无论是工程上的还是管理上的。

![](https://pic1.zhimg.com/v2-ac72cb4bae2feef4186ca74d23c46cbc_1440w.jpg)

回到我们的主题，
Harness Engineering
。Harness，做名词时指的是马具，做动词时指的是给马套上挽具，引申出控制、利用和驾驭的含义。所以 Harness Engineering 做的事情就是驾驭大模型，让它以执行者的角色更好地完成我们派给它的任务。

**大模型发展现状**

**1.三个团队，三场实验**

2025 年下半年开始，几支顶尖 AI 团队几乎同时做了一件事：把大模型真正投入到长周期的自主任务里，看看在没有人类微观干预的情况下，它到底能走多远。他们无一例外地撞上了“原生大模型缺乏反馈闭环与执行纪律”的墙，但也由此催生了今天被称为 Harness Engineering（外围脚手架工程）的核心实践。

**OpenAI 的实验最为极端。**一个三人工程师团队给自己定了一条铁律：**不写一行代码，全部交给 Codex。**从一个空仓库开始，五个月后，代码库里生成了近百万行代码——应用逻辑、测试、CI 配置、内部工具一应俱全，平均每人每天合并 3.5 个 PR。但初期的灾难接踵而至：Agent 经常忽视 Slack 里的架构讨论，凭空猜测数据边界；代码库里也开始堆积重复的辅助函数，团队每周五甚至要专门花 20% 的时间清理这些“AI 劣质代码（AI Slop）”。**为了破局，OpenAI 彻底转变了思路：如果 Agent 看不见，那就把世界改造成“智能体可读（Agent Readability）”的样子。**

- 

**Git 仓库成为唯一的真相来源：**他们废弃了试图包罗万象却迅速过期的全局指令文件（AGENTS.md），改为渐进式披露的目录结构。所有架构决策必须存入本地的 docs/ 文件夹，Agent 启动时只有一张“地图”，按需自己去查阅设计图。

- 

**给智能体装上“眼睛”：**为了突破人类 QA 的瓶颈，团队将 Chrome 开发者工具协议、日志查询（LogQL）和指标查询（PromQL）全部接入智能体。Codex 不再是盲写代码，而是可以直接启动应用、查看 DOM 快照、甚至根据“启动不能超过800毫秒”的硬指标自己调试性能。

- 

**部署后台垃圾回收（GC）：**面对 AI 代码的熵增，他们将人类的“品味”编码为严格的 Linters 机械护栏，并部署了后台运行的清理智能体，像垃圾回收一样定期扫描并重构劣质代码。

**Anthropic 的目标则指向了主观与客观的交界。**他们试图让 Claude 完成一项极具挑战的任务：既要搞定前端界面的审美设计（主观判断），又要兼顾客观的全栈开发。他们设计了三个 Agent 协作：Planner 拆解需求，Generator 写代码，Evaluator 做 QA。 但很快，一个棘手的问题浮出水面——**“自我评价失效”**。当模型被要求评估同类的工作时，它存在天然的盲目自信，尤其在没有清晰标准的前端设计上，它总是对平庸的设计给出好评。 为了打破这种自欺欺人，Anthropic 在 Harness 上做了两项关键设计：

- 

**将主观审美量化为硬指标：**既然“美不美”很难评，他们就将评价标准拆解为设计质量、原创性、工艺和功能性四个维度，并**刻意调高了“原创性”的权重，明确惩罚那些带有“紫色渐变”等典型 AI 庸俗风格的元素，逼迫模型承担审美风险。**

- 

**赋予 Evaluator 真实的测试工具：**评估智能体不再是对着代码纸上谈兵。团队给它配备了 Playwright 工具**，让它能像真实用户一样在浏览器里打开网页、点击交互、截图并仔细研究，**然后带着具体的 Bug 反馈去质问 Generator。在这样的对抗循环下，Claude 甚至创造性地设计出了带有透视效果的 3D 艺术画廊。

**LangChain 的切入点则更加量化。**他们试图在 Terminal Bench 2.0（编码基准测试）上证明一件事：**在不改变底层模型（
GPT-5.2-Codex
）的情况下，仅仅优化外部的 Harness，能带来多大的提升？**他们最初的成绩是 52.8 分，排在 30 名开外。 他们发现，丢分根本不是因为模型，而是原生 Agent 的运行方式太糟：在新环境里找不到工具，而且极易满足，写完代码不测就草草宣布收工。**为此，LangChain 引入了一套自动化追踪与强制中间件系统：**

- 

**引入 Trace Analyzer（轨迹分析器****）：**他们利用 LangSmith 记录 Agent 的每一个执行动作，并派生出专门的分析智能体去批量阅读失败轨迹（Traces），从而精准定位系统缺陷并针对性地修改 Harness。

- 

**强制上下文注入与 Ralph Loops：**为了不让 Agent 把时间浪费在“摸黑找环境”上，他们在 Agent 启动时通过 LocalContextMiddleware 直接为其映射目录和 Python 安装路径。更绝的是，针对 Agent 写完不测的问题，他们引入了预完成检查中间件（类似 Ralph Loops）：当 Agent 试图宣布任务结束时，中间件会将其拦截，强行注入原始需求，逼迫它运行测试并对照规范进行自我验证后才能退出。

最终，LangChain 的 Agent 成绩从 52.8 分跃升至 66.5 分，直接杀入榜单前 5。这三场实验，用不同的路径证明了同一个真理：**在智能体时代，模型只提供原生智力，而优秀的 Harness Engineering 才是将其转化为可靠工作引擎的决定性力量。**

**2.一条被逼出来的演进路径**

这三场实验，发生在一个重要的背景之下：大模型的能力已经足够强了。 GPT-5、Claude 4 这一代模型，在单次任务上的表现已经达到相当高的水准——它们能理解复杂需求，能写出可运行的代码，能在多轮对话中保持连贯。模型本身不再是瓶颈。

瓶颈转移了。

与此同时，整个行业也在经历一条被实践逼出来的认知演进：

**
Prompt Engineering
（2022–2024）**解决的是"怎么让 AI 听懂我在说什么"——精心设计指令，优化单次响应。它假设：问题问得好，答案就会好。

**
Context Engineering
（2025）**解决的是"怎么让 AI 知道得更多"——通过 RAG、MCP、记忆模块把外部知识注入上下文。但仅仅把工具调用结果堆叠进消息列表，依然昂贵、缓慢，且会随着上下文增长拖累模型性能。

**Harness Engineering（2026）**是一次更根本的转变。它解决的不是"如何让 AI 更聪明"，而是"如何构建一个让 Agent 能持续、稳定、可纠错地完成长线任务的环境"。前两个阶段，人类是主导者，AI 是响应者。在 Harness Engineering 里，AI 是执行者，人类是环境设计师。

这个词由 HashiCorp 联合创始人 
Mitchell Hashimoto
 在 2026 年 2 月正式命名[1]，数天后 OpenAI 发布了那份百万行代码的实践报告，这个概念迅速在工程圈扩散开来。

**3.Agent 在长线任务中的5个问题**

回到那三支团队的实验。他们踩过的坑，其实指向同一批结构性问题——这些问题在任何把 Agent 投入长线任务的团队里都会出现。

**① 缺乏自我验证与闭环纠错能力**

原生大模型没有"检查自己是否做对了"的本能。它输出一个看起来合理的答案，但不会主动去运行、测试、验证。LangChain 的 Agent 在 Terminal Bench 上反复在这里折戟——任务跑完了，测试没跑，Agent 却已经宣布完成。Mitchell Hashimoto 在自己的实践中也发现：一旦给 Agent 提供验证自己工作的方式，它修复错误的能力会显著提升。没有验证闭环的 Agent，越到后期问题越难收拾。

**② 上下文管理危机与注意力衰退**

Anthropic 团队深刻体会过这一点。长任务中，Agent 必须在离散的会话里工作，每次新会话开始时对之前发生的事情毫无记忆——就像一批轮班工人，每个人上岗时对上一班一无所知。即使上下文窗口撑得住，随着内容累积，模型的指令遵循能力也会悄悄退化，这被称为"context rot"（上下文腐烂）。

**③ 环境感知弱与隐性知识缺失**

OpenAI 团队发现，Agent 看不见的东西，对它来说就是不存在的。那些活在 Slack 消息、Google Docs、或者某位工程师脑子里的架构决策，Agent 完全无从感知。团队对某个技术方向达成的共识，如果没有被显式沉淀进代码库，Agent 就像一个入职三个月后的新员工，对这段历史一无所知。

**④ 规划与执行脱节**

面对复杂任务，Agent 倾向于一口气生成一个庞大的计划然后直接执行，但执行到中途时，上下文已经偏离，计划与现实开始割裂。Anthropic 团队在多 Agent 协作中发现，Generator 和 Evaluator 之间如果没有在执行前就验收标准达成明确共识，后期的返工成本会非常高。规划和执行必须分离，且中间需要人类或高级 Agent 的确认节点。

**⑤ 代码质量退化与架构漂移（AI Slop）**

**
**

OpenAI 团队花了最长时间与这个问题周旋。随着 Agent 持续生成代码，代码库里开始出现重复的辅助函数、漂移的命名规范、被随意猜测的数据边界。这些问题单独看都不严重，累积起来就是系统性的腐化。他们最终的解法是把"黄金原则"直接编码进仓库，并部署周期性的后台 Agent 来扫描偏差、自动发起重构 PR——用 Agent 来治理 Agent。

![](https://pica.zhimg.com/v2-94ffee05582c0aeea31543d1d75124f6_1440w.jpg)

这五个问题，共同指向同一个结论：**你无法靠更好的 Prompt 来解决 Agent 执行层面的系统性问题。**你需要的不是更聪明的 AI，而是一个更好的"环境"——一套能让 Agent 自我约束、持续纠错、在长周期任务中保持一致性的工程体系。

这就是 Harness Engineering 的起点。

**Harness Engineering 的关键组成**

首先要说明一点：**目前关于 Harness Engineering，没有标准 SOP，也没有权威定义。**谁都在说，谁都在定义，这正是一个领域处于爆发早期的典型状态。本文的拆解是基于"反馈闭环"视角提出的一种理解框架，并非行业标准。

**Agent = Model + Harness**

目前对 Harness 的主流定义极其简洁：Agent = Model + Harness。所有不属于模型本身的东西——系统提示、工具执行、编排逻辑、中间件钩子——都算作 Harness 的职责范畴。

原始模型不是 Agent。但当 Harness 给它配上状态管理、工具执行、反馈循环和可执行约束之后，它就成了一个 Agent。模型提供智能，Harness 让这种智能变得有用。

如果我们回到文章开头提到的控制理论视角，Harness 就是那套传感器与反馈系统——它不改变"受控对象"（模型）的本质，而是在它周围构建一个让它能够稳定运转的闭环环境。

基于这个视角，我把 Harness 拆解成**四层结构：**

**第一层：基础设施层（Infrastructure）**

这一层负责回答一个最基础的问题：**Agent 在哪里运行，能干什么，不能干什么。**

沙箱给 Agent 提供安全的运行环境——代替在本地执行代码的风险，Harness 可以连接到沙箱来运行代码、检查文件、安装依赖、完成任务，实现对代码的安全隔离执行。对于更高安全要求的场景，Harness 还可以通过命令白名单和网络隔离来进一步收紧边界。

这一层还包括权限控制、失败恢复和安全护栏。简单来说，基础设施层决定了 Agent 的"行动半径"——它是整个系统的物理边界。

**第二层：记忆层（Memory）**

**
**

这一层负责回答：**在当前这一刻，Agent 应该看到什么信息。**

模型只能直接操作其上下文窗口内的知识。这意味着 Agent 天然是"失忆"的——每一次新的会话开始，之前的工作就消失了。记忆层的任务，就是把"应该被记住的东西"以合适的方式送回给 Agent。

常见的做法包括：用文件系统（如 AGENTS.md）持久化关键知识、在会话启动时注入上下文、对过长的历史进行压缩和裁剪。上下文压缩（Compaction）是当上下文窗口即将填满时的处理策略——它智能地卸载和摘要现有上下文，让 Agent 得以继续工作，而不是让 API 直接报错。

记忆层的设计质量，直接决定了 Agent 能否跨会话保持连贯性。

**第三层：执行层（Execution）**

这一层负责回答：**Agent 能用什么能力，以及多个 Agent 如何协同。**可以拆成两个部分。

**工具与技能（Tools & Skills）**

工具为 Agent 提供可调用的外部能力，Skills 则提供可复用的任务方法。

Skills 通过"渐进式披露"解决了一个微妙问题：如果把所有工具和 MCP 服务器一次性加载进上下文，会在任务开始之前就拖累模型性能。Skills 作为一种 Harness 层的原语，让模型只在需要时才加载相关能力。

一个有趣的反直觉结论是：Vercel 移除了 80% 的 Agent 工具之后，反而得到了更好的结果——更少的工具意味着更少的步骤、更少的 token 消耗、更高的成功率。工具的丰富度不是越多越好，而是越精准越好。

**编排与协调（Orchestration & Coordination）**

对于复杂的长周期任务，单个 Agent 很难独立完成。编排层负责把大任务拆解、分配给不同 Agent，并协调它们的输出。复杂任务需要专业化的分工——一个 Agent 负责研究，另一个负责写作，第三个负责审校，Harness 负责管理它们之间的通信、合并输出、解决冲突。

编排层还决定了任务推进的节奏：何时规划、何时执行、何时交接，让复杂任务能够被有序地拆开、推进并收敛。

**第四层：反馈层（Feedback）**

这一层是整个 Harness 与控制理论最直接对���的部分——它构成了闭环的"传感器"。同样分为两个部分。

**评估与验证（Evaluation & Verification）**

这是 Agent 的**自主反馈回路**。很多 Harness 内置了一套测试、检查和反馈机制，让 Agent 能够自行验证自己的工作，并在发现问题后及时修正。

这个机制的价值很难被高估——对于很多复杂任务来说，决定最终成效的往往不是第一次生成的质量，而是有没有验证闭环。LangChain 在不改变模型的前提下，仅通过加入自我验证循环和循环检测中间件，就将 Agent 在 Terminal Bench 2.0 上的得分从 52.8% 提升到了 66.5%，排名从前 30 跃升到前 5。

**追踪与观测（Tracing & Observability****）**

这是**人类追踪 Agent 行为的回路**。模型在很大程度上是一个黑盒，其内部机制难以解释。但我们可以在文本空间中看到它的输入和输出，并把这些信息用于改进循环。

追踪层的作用是让整个黑盒尽量透明可见：执行轨迹、日志、监控、成本分析……只有当 Agent 的行为是可见的，系统才是可调试、可优化、可管理的。换句话说，这一层是人类工程师介入和迭代 Harness 本身的窗口。

**与 LangChain 框架的对照**

LangChain 在 2026 年 3 月发布的《The Anatomy of an Agent Harness》中，给出了一个从**模型视角**出发的 5 部分划分：Control（控制与约束）、Persist（状态持久化）、Observe & Verify（观测与验证）、Action（行动能力）、Context Injection（上下文注入）。

![](https://pica.zhimg.com/v2-cb2d84e44c4078695e1df67c961b5ae0_1440w.jpg)

两种框架并无高下之分，只是视角不同——LangChain 的框架是"模型需要什么，我就提供什么"；本文的四层框架则是从"反馈闭环"出发，强调每一层在系统中承担的功能角色。

**Harness 构建核心原则**

理论归理论，真正决定 Harness 质量的，是工程实践中那些被反复验证的原则。我们来看看 Anthropic、LangChain以及OpenAI 各自是怎么做的，然后从中提炼出可落地的通用原则。

**Anthropic、Langchain、OpenAI的实践对照表**

**
**

![](https://pic4.zhimg.com/v2-7634fe1a9423a2c7ace7b714789574bf_1440w.jpg)

**结论原则：13 条 Harness 工程师手册**

**1、基础设施层**

**原则 1：用机械性约束取代微观管理**

**
**

不要试图用长篇提示词对 Agent 进行"道德说教"。人类的品味、架构边界和依赖约束，必须转化为严格的 Linter 和结构测试。机器护栏内给予最大自由，才能从根本上消除架构漂移。规则不该存在于 Prompt 里，它应该存在于 CI 流水线里。

**原则 2：搭建可持久化的工作区，保障长任务稳定不中断**

随着任务变长变复杂，Agent 需要像人类员工一样拥有状态持久化的工作区，而不是跑完即销毁的执行容器。这意味着 Harness 需要具备断点续传和失败恢复机制——服务器挂了、网络断了，任务也应该能接着干。

**原则 3：部署常态化的"垃圾回收"机制**

Harness 不能只管"生成"，还必须管"清理"。应在后台配置定期重构机制，像定期倒垃圾一样清理死代码、更新过期文档、消除 AI 产生的技术债。用 Agent 来治理 Agent，是对抗长期系统腐化的唯一可规模化的方案。

**2、记忆层**

**原则 1：精准比求全更重要，实行"渐进式披露"**

给得太多比给得太少更致命。信息应该分层加载：CLAUDE.md 只放元规则和入口指引，SKILL.md 按需调用，细节文件在任务执行时才注入。绝不要用一个巨大的 AGENTS.md 把所有规则一次性塞给 Agent。

**原则 2：严控上下文利用率，停留在"甜蜜区间"**

模型注意力有稀疏性，塞入过多历史记忆只会让它更容易被噪音干扰。顶级工程师会频繁进行上下文压缩，将上下文利用率控制在 60% 以下，以保证模型依然能警觉地捕捉到关键 Bug。

**原则 3：在关键节点强制"上下文阻断与清理"**

在多步复杂任务中，绝不能让信息无限累积。必须在关键节点（如 Plan 阶段结束、进入 Execute 阶段前）进行硬性的上下文清空，让 Agent 始终在高信噪比的干净环境中工作。

**原则 4：用子智能体构建"上下文防火墙"**

当主 Agent 的上下文开始变重时，把查日志、检索代码、搜文档这些具体工作分配给独立的子 Agent 处理，主 Agent 的上下文只保留调度和收口信息。子 Agent 是天然的上下文隔离器。

**3、执行层**

**原则 1：工具越少而精越好，提供万能原语**

这是一个反直觉的原则：过于复杂的工具集会导致 Agent 陷入"决策瘫痪"。Agent 的强大不在于有多少把专用扳手，而在于是否拥有"万能扳手"——直接提供文件系统和 Bash 执行能力，让它自己写代码来解决问题。

**原则 2：严格分离"研究、计划、执行、验证"四阶段**

绝不能指望 Agent 在一个会话里一气呵成。必须把任务链拆成独立的 Session，特别是在用户确认计划之后，应该自动清空上下文，让执行阶段从干净的起点开始，避免背着研究阶段的大量噪音去写代码。

**原则 3：随模型进化持续"做减法"**

优秀的 Harness 最终会被模型本身吸收——今天需要复杂脚手架才能完成的事，明天模型可能原生就能做到。因此框架必须定期瘦身，砍掉因模型能力提升而变得冗余的专用工具，防止积重难返。

**4、反馈层**

**
**

**原则 1：人类的最高价值介入点在"事前规划"，而非事后审查**

人类通常习惯验收结果，但对 Agent 来说，一行糟糕的计划往往会长出几百行糟糕的代码。人类工程师最该深度介入的环节，是前期的研究与计划阶段——在这里花一小时，胜过在执行结果里花十小时纠偏。

**原则 2：强制构建可量化、可分析的自动化反馈闭环**

任务成败的核心，不在于模型首次输出质量，而在于把**模糊指标变可验证、把主观判断变可分析。**让 Agent 进入标准化循环：**自主生成 → 执行验证 → 数据观测 → 问题定位 → 自主修正**，让所有产出都有明确好坏标准、可追溯、可迭代，稳定将成果质量提升 2–3 倍。

**原则 3：将每一次翻车转化为系统永久的免疫力**

遵循一种严格的工程纪律：每当发现 Agent 犯了错，人类的动作不是帮它改代码，而是修改 Harness——把血泪教训补进 CLAUDE.md，或者调整沙盒测试规则。通过追踪捕获失败轨迹并优化脚手架，Harness 本身会随时间成为最具价值的数据资产。

**Harness Engineering 的意义与价值**

Harness Engineering 对工程师意味着什么？我认为它带来的是一次认知范式的升级——关于我们作为工程师，核心价值究竟在哪里。

**1. 从"我能写出什么"转到"我能评估什么"**

**
**

在 Harness Engineering 时代，真正拉开差距的能力变了——不是你能让 Agent 生成什么，而是你能判断 Agent 生成得好不好。

生成本身已经廉价。Claude、GPT、Gemini 都能写出"看起来没问题"的代码，但"看起来没问题"和"真的没问题"之间，隔着一个工程师的判断力。工程师最该修炼的，是"看得更准"——建立清晰的验收标准，设计真实的验证场景。Anthropic 团队把主观审美转化为可量化打分标准，本质上就是把"评估直觉"系统化。

在企业流程中同理：生产可以委托，判断不能。

**2. 从"写代码"到"设计系统"**

代码只是起点。真正的工作是设计 Agent 运行的环境：它能调用哪些工具、哪些知识需要持久化、在什么情况下必须等待人类介入。OpenAI 团队说得直接："我们最难的挑战，已经从写代码变成了设计环境、反馈回路和控制系统。"[4]

同样的转变也在企业管理里发生——引入 Agent 之后，流程负责人的核心工作从"督促执行"变成了"设计流程本身"。

**3. 核心竞争力：把架构直觉转化为可执行的规则**

每个有经验的工程师脑子里都有一套架构直觉——知道哪种设计六个月后会成为负担，知道为什么"这么写能跑但不能用"。过去这套直觉只能靠 Code Review 和言传身教传递。

Harness Engineering 要求你做一件更难的事：把隐性直觉转化成 Agent 可执行的显性规则——写进 Linter、写进 AGENTS.md、写进结构测试。这个过程把个人经验变成了系统资产。一个工程师离职，架构直觉可能随之消失；但如果它已经被编码进 Harness，它就留下来了，并随着每一次 Agent 的失败继续生长。

企业里同理。那些藏在老员工脑子里的判断标准和例外规则，一旦被转化为 Harness 的配置与约束，才算完成了真正意义上的知识沉淀。

**总结**

本文从控制理论的视角出发，以"反馈闭环"为主线，结合 Anthropic、OpenAI、LangChain 以及 Mitchell Hashimoto 的一手实践，对 Harness Engineering 这个刚刚成形的概念做了一次系统性的拆解。

需要说明的是，Harness Engineering 目前没有标准定义，也没有权威框架。本文的四层结构、13 条原则，都只是基于这个视角的一种解读，带有我本人浓重的主观色彩。

每一次技术范式的迁移，都会重新定义"什么样的人是有价值的工程师"。Harness Engineering 带来的这次升维，把工程师的核心价值指向了一个更古老的能力：**判断力、设计力，以及把经验转化为规则的能力。**这些能力在任何时代都稀缺，在 Agent 时代只会更稀缺。

**参考资料**

[1][https://mitchellh.com/writing/my-ai-adoption-journey](https://link.zhihu.com/?target=https%3A//mitchellh.com/writing/my-ai-adoption-journey)

[2][https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents](https://link.zhihu.com/?target=https%3A//www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

[3][https://hugobowne.substack.com/p/ai-agent-harness-3-principles-for](https://link.zhihu.com/?target=https%3A//hugobowne.substack.com/p/ai-agent-harness-3-principles-for)

[4]

[5][https://blog.langchain.com/improving-deep-agents-with-harness-engineering/](https://link.zhihu.com/?target=https%3A//blog.langchain.com/improving-deep-agents-with-harness-engineering/)

[6][https://openai.com/zh-Hans-CN/index/harness-engineering/](https://link.zhihu.com/?target=https%3A//openai.com/zh-Hans-CN/index/harness-engineering/)

[7][https://blog.langchain.com/the-anatomy-of-an-agent-harness/](https://link.zhihu.com/?target=https%3A//blog.langchain.com/the-anatomy-of-an-agent-harness/)

[8][https://www.anthropic.com/engineering/harness-design-long-running-apps](https://link.zhihu.com/?target=https%3A//www.anthropic.com/engineering/harness-design-long-running-apps)

![](https://pic2.zhimg.com/v2-51751627bfe7f9a5c5953a41aa1ba85f_1440w.jpg)

![](https://picx.zhimg.com/v2-1e5e49d087fe68a5527038cdbd8fdeb9_1440w.jpg)

![](https://picx.zhimg.com/v2-4fe5a70873d457910c7a68ccc4c138ad_1440w.jpg)

发布于 2026-04-08 18:17・北京

关于作者

[.css-1o44jgu{dynamic-range-limit:standard;border-radius:4px;}.css-1qhd7fe{box-sizing:border-box;margin:0;min-width:0;max-width:100%;height:auto;background-color:#ffffff;width:60px;height:60px;dynamic-range-limit:standard;border-radius:4px;}](https://www.zhihu.com/org/shen-zhou-wen-xue)

[智见AGI](https://www.zhihu.com/org/shen-zhou-wen-xue)

V关注“神州问学”“智见AGI”，共同探讨AI！

[.css-1ldqog6{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}​](https://zhuanlan.zhihu.com/p/96956163)
已认证机构号

[回答](https://www.zhihu.com/org/shen-zhou-wen-xue/answers)[文章](https://www.zhihu.com/org/shen-zhou-wen-xue/posts)[关注者](https://www.zhihu.com/org/shen-zhou-wen-xue/followers)
