---
title: "第8章：未来方向与展望"
content_timestamp: 2026-05-21
collected_at: 2026-05-21T19:18:00+08:00
time_slice: 2026-05
chapter: 8
language: zh-CN
source_corpus:
  mom_test_findings: mom-test-findings*.md
  raw_social: raw-social/647 markdown records plus raw-social-index.json snapshot
  paper_reviews: paper-reviews/25 deep review files
output_type: survey_chapter
notes: "本章在第7章痛点基础上提出未来研究与工程方向；展望性判断基于本地语料和论文review，不等同于已验证生产结论。"
---

# 第8章：未来方向与展望

> 撰写时间戳：2026-05-21T19:18:00+08:00  
> 主要依据：第7章所用 Mom Test 痛点、`raw-social/` 社区讨论与 `paper-reviews/` 论文局限性。本章重点回答：如果可靠性、评估、成本、安全和人工依赖是当前瓶颈，下一代 Agent Evolution 应如何设计？

## 8.0 本章概述

Agent Evolution 的未来不是简单让 Agent 更“自主”，而是让自主性进入可验证、可协作、可治理、可迁移的工程框架。第7章显示，用户最担心的不是 Agent 不够聪明，而是它在生产环境中不够可靠、在改进循环中不够可控、在评估指标上容易作弊、在成本和安全上缺少硬边界。未来方向必须正面回应这些痛点：自动化验证器要减少人工反馈依赖；多 Agent 协同进化要避免成本和共识幻觉；安全可控机制要防止错误演化和 prompt 注入；跨域迁移要突破 benchmark-specific 进化；从 Agent Evolution 到 AGI 的路径则需要把局部自改进、开放式探索和价值对齐统一起来。

从论文脉络看，当前研究已给出多个可拼接的模块。STaR、RISE、Absolute Zero Reasoners 证明了在可验证推理或代码任务上，生成—筛选—训练循环可以提升能力；Reflexion、ExpeL、ACE、ReasoningBank、Memory-R1、AriadneMem 展示了反思、经验和记忆资产化的路线；Voyager、WebEvolver 展示了环境交互和世界模型在开放任务中的潜力；ADAS、DGM、SICA、Godel Agent、AlphaEvolve 展示了 LLM 与搜索、archive、自修改、程序化 evaluator 结合的力量；Multi-Agent Debate、EvoMAC、SPIRAL、RAGEN 则说明多 Agent、自博弈和协作网络可以提供额外的探索与反馈。但这些模块仍分散，且各自受限于成本、验证、泛化和安全。

因此，未来十年的关键问题不是“有没有自进化 Agent”，而是“能否形成可复用的自进化基础设施”。这种基础设施应包含：任务和环境的可验证建模；多层 evaluator；可审计记忆和经验库；变体 archive 与 lineage；安全沙箱和权限治理；成本预算；跨域迁移评估；以及人类从直接打标签转向制定规则、审计边界和校准评价器。下面五节分别讨论这些方向。

## 8.1 自动化验证器：替代人工反馈的核心基础设施

自动化验证器是 Agent Evolution 从人工调参走向真正闭环的首要条件。用户痛点中最常见的抱怨之一，是反馈循环并不神奇：只有人类审查日志、标出错误、重写 prompt 或回滚版本时，系统才会变好。这意味着当前很多“自进化”只是把人类反馈包装成自动流程。未来系统必须把更多反馈转化为可执行、可重复、可隔离的验证器，让 Agent 在无需人工逐轮判断的情况下获得高质量信号。

验证器的第一类是确定性程序验证。代码任务中的单元测试、类型检查、lint、静态分析、fuzzing、回归测试和 sandbox 执行是目前最成熟的信号。DGM、SICA、EvoMAC、AlphaEvolve 等系统之所以能展示自进化，是因为候选代码可以被自动运行和评分。未来应把这种能力扩展到更宽的应用场景：数据管道可以验证 schema、分布漂移和端到端一致性；业务流程可以验证状态机约束和权限策略；网页任务可以验证 DOM 结果、后端状态和用户意图；机器人任务可以验证物理约束和安全边界。程序化验证器不需要理解全部语义，但必须覆盖关键失败模式。

第二类是模型辅助验证器。开放式任务很难完全程序化，例如研究综述质量、产品需求合理性、设计方案可维护性和客服回应是否合适。LLM-as-a-judge、critic agent、debate、meta-judge、self-attribution 等方法可以补充人工反馈，但未来必须解决评价器退化问题。Self-Rewarding 和 Meta-Rewarding 的局限表明，评价器可能出现长度偏见、score bias、位置偏见和 reward hacking。因此，模型辅助验证器不能单独作为最终真理，而应采用多评委、多标准、校准集、人类抽检、隐藏任务和跨模型一致性检测。评价器也应有自己的回归测试和漂移监控。

第三类是交互式环境验证器。Voyager、WebEvolver、AppWorld、WebArena、ALFWorld、WebShop 等工作说明，Agent 真正的能力常体现为在环境中行动，而非输出静态答案。未来应构建更多“可重放、可评分、可扰动”的环境：企业流程 sandbox、仿真 CRM/ERP、虚拟浏览器、软件仓库镜像、研究实验模拟、长周期记忆任务和多用户协作场景。环境验证器的难点是模拟真实世界的动态性，同时保持可复现和可控。WebEvolver 的世界模型路线值得发展，但必须持续量化模拟—现实差距，避免 Agent 在模拟器中学到不可迁移策略。

第四类是安全与成本验证器。未来的 evaluator 不应只回答“任务是否完成”，还要回答“是否以可接受的风险和成本完成”。每个候选变体都应接受权限检查、敏感数据检查、prompt 注入测试、恶意工具返回测试、预算上限测试、资源泄漏测试和回滚测试。成本也应成为 fitness 的一部分：单位成功成本、单位增益成本、最大尾部成本、重试率和人工接管率都应被记录。只有这样，自进化系统才不会把所有优化压力都推向短期成功率。

长期看，验证器会成为 Agent Evolution 的“编译器”。就像软件工程中代码必须通过编译、测试和 CI 才能合并，未来 Agent 的 prompt、工具策略、记忆规则、模型路由和自修改代码也必须通过验证器流水线才能进入生产。人类的角色将从逐条判断输出，转向设计验证器、校准评价器、审查失败样本和决定风险偏好。

## 8.2 多 Agent 协同进化：从角色扮演到生态搜索

多 Agent 是 Agent Evolution 的自然方向，因为进化本身需要多样性、竞争、协作、批评和选择。单个 Agent 容易陷入局部最优，单一路径自我改进容易受初始错误支配；多个 Agent 可以提出不同假设、生成不同解决方案、互相质疑、分工验证，并通过 archive 保留多条探索路线。ADAS、DGM、EvoMAC、Multi-Agent Debate、SPIRAL、RAGEN 等工作都在不同层面展示了这一趋势。

但未来的多 Agent 协同必须超越“角色扮演”。当前许多框架把 manager、planner、coder、reviewer、critic 命名为不同 Agent，却没有保证它们拥有独立信息、独立目标或独立错误分布。这样容易形成共识幻觉：多个模型互相肯定错误答案，或者 reviewer 只是重复 coder 的假设。Multi-Agent Debate review 已指出辩论成本高且可能收敛到自信错误。未来的多 Agent 系统应强调异质性：不同模型、不同工具、不同检索源、不同评价标准、不同温度策略和不同权限边界，让协同真正产生互补信号。

协同进化的第一种形态是生成者—验证者共进化。生成者提出方案，验证者寻找漏洞；生成者学习通过更严格验证，验证者学习覆盖更多失败模式。Meta-Rewarding 的 actor/judge/meta-judge 思路、EvoMAC 的开发团队/测试团队、SAGE 类 critic agent 都是早期形式。未来应把这种关系制度化：每个能力提升都必须伴随验证器提升，否则生成者会过拟合旧验证器。换言之，Agent Evolution 不只是 agent policy 的进化，也是 evaluator ecosystem 的进化。

第二种形态是 archive-based 生态搜索。DGM 的重要启示是，不应只保留当前最强个体，而应保留多样化变体，因为某些暂时不强的变体可能成为未来 stepping stone。未来多 Agent 系统可以维护架构、prompt、工具策略、记忆策略和评价器的多维 archive；在新任务到来时，从 archive 中检索相似 lineage，组合候选，运行局部进化。这样可以避免每个团队从零调 prompt，也可以把失败经验积累为可复用资产。

第三种形态是组织级协同。真实企业中的 Agent 不会孤立存在，而是嵌入人类团队、工作流系统、权限系统和数据系统。未来多 Agent 协同应与组织结构对齐：有的 Agent 负责执行，有的负责审计，有的负责知识维护，有的负责成本控制，有的负责安全红队。每个 Agent 都应有可度量职责、权限范围和交接协议。多 Agent 的价值不是制造更多“数字员工”幻觉，而是把复杂流程拆成可验证、可治理的自治单元。

第四种形态是跨社区协同进化。开源生态可以共享失败样本、验证器、任务环境、prompt diff、工具适配器和安全规则。当前 raw-social 中大量教程和框架比较说明社区学习非常活跃，但知识分散且可复现性弱。未来需要类似“Agent Evolution Hub”的公共基础设施：提交 agent 变体、公开评估轨迹、报告负结果、共享 benchmark 污染信息、维护安全漏洞库和成本基准。这样，多 Agent 进化不只发生在单个系统内部，也发生在研究和工程社区之间。

## 8.3 安全可控的自进化机制：从沙箱到可证明边界

安全可控是自进化 Agent 能否进入生产的前提。与普通 Agent 相比，自进化系统多了三类风险：它会修改自身行为，它会把经验持久化，它会在多轮反馈中放大错误目标。Misevolution 相关讨论指出，风险可能随时间涌现，甚至在没有外部攻击者时由系统自身生成；prompt 注入则可能通过外部内容污染 Agent 的指令和记忆。未来研究必须把安全机制放在架构中心，而不是作为部署后的补丁。

第一层安全是权限最小化。Agent 的工具权限应默认最小，读写分离，高风险操作需要审批，外部网络、文件系统、数据库、支付、邮件、部署等能力应被单独授权。自进化模块尤其不能拥有直接修改生产代码或生产 prompt 的权限；它只能生成候选 diff，经 sandbox、验证器、人工或策略门控后合并。Godel Agent review 提醒我们，现实系统没有理论 Gödel machine 那样的改进证明，因此更需要工程化权限边界。

第二层安全是演化沙箱。每个候选变体应在隔离环境中运行，访问合成数据或脱敏数据，执行固定评估套件，并记录所有工具调用。沙箱不仅防止恶意行为，也防止无意破坏，例如无限循环、资源泄漏、写错文件、调用真实 API、污染共享记忆。对 Web Agent，应使用隔离浏览器和模拟账户；对代码 Agent，应使用临时容器和只读仓库镜像；对企业流程 Agent，应使用流程仿真环境而非真实客户数据。

第三层安全是可审计 lineage。自进化系统必须知道每个版本从哪里来、改了什么、为什么被接受、在哪些任务上提升、在哪些任务上退化、触发过哪些安全规则、谁批准上线。没有 lineage，错误演化难以定位；有 lineage，系统可以回滚到最近安全祖先，也可以分析哪些修改模式高风险。DGM 的 archive 思想若要生产化，必须与软件供应链中的版本控制、签名、CI、审计日志和变更审批结合。

第四层安全是目标和评价器隔离。Agent 不应能直接修改自己的最终评价器、隐藏测试集或安全策略；否则它可能通过篡改规则而非提升能力来获得高分。训练/搜索阶段可以使用可见 proxy evaluator，但上线前必须通过不可见、不可修改、独立维护的 gate evaluator。对于 LLM judge，还应防止 prompt 注入和 evaluator manipulation：候选输出不能直接影响 judge 的系统提示，外部内容应被标记为数据，评分标准应固定且可追踪。

第五层安全是人类治理。未来不是完全取消人类，而是把人类放在更高杠杆位置：定义风险等级、审查高风险 diff、校准评价器、批准权限变更、复盘事故、维护红队样本。低风险局部优化可以自动化，高风险目标函数和权限变更必须经过治理。只有建立这种分级自治，Agent Evolution 才能避免在“完全手动”和“完全失控”之间摆动。

更长远的方向是可证明边界。形式化验证很难覆盖 LLM 行为，但可以覆盖一部分关键约束：工具权限、状态机不变量、预算上限、数据流隔离、不可访问资源、合并条件、回滚条件。未来的安全自进化系统可能采用“神经生成 + 符号护栏 + 程序验证”的混合架构，让 LLM 在安全边界内探索，而边界由可检查规则保证。

## 8.4 跨域迁移能力：从 benchmark-specific 进化到通用适应

当前自进化研究最容易被质疑的一点，是提升是否只发生在特定 benchmark、特定模型、特定环境或特定任务分布上。STaR 适合有正确答案的推理题；AlphaEvolve 适合可程序化评价的算法和工程优化；Voyager 在 Minecraft 中表现突出，但其技能库能否迁移到企业流程并不直接成立；WebEvolver 的 world model 面临模拟—现实差距；SICA、DGM 在代码任务上有价值，但是否能迁移到非代码开放式任务仍需证明。未来关键方向是从局部进化走向跨域迁移。

跨域迁移首先需要抽象可复用资产。Agent 的进化产物不应只是某个 prompt 或某个 benchmark 分数，而应是可解释、可组合、可迁移的经验：失败模式、验证器、工具使用策略、任务分解模板、记忆更新规则、风险规则、代码修改模式、反思原则和环境模型。ACE 的 playbook、ReasoningBank 的推理记忆、ExpeL 的 insight、Voyager 的技能库、AriadneMem 的演化图记忆都代表了不同资产形态。未来研究应比较这些资产在跨任务迁移中的有效性，而不仅报告原任务分数。

其次需要元学习和路由能力。不同任务需要不同进化策略：代码任务适合测试驱动和 patch archive；网页任务需要 world model 和 DOM 验证；客服任务需要政策约束和人类偏好；科研任务需要文献检索、实验设计和专家评审；机器人任务需要物理安全和仿真到现实迁移。未来 Agent 应先识别任务类型、风险等级和可验证性，再选择合适的改进机制。一个统一自进化平台不应强行使用同一种 loop，而应像操作系统一样调度多种演化策略。

第三，需要跨域评估协议。研究不能只证明在一个 benchmark 上提升，还要报告跨时间、跨模型、跨任务、跨环境、跨语言和跨工具的迁移。对于代码 Agent，应从 HumanEval 到 SWE-Bench、从 Python 到多语言、从离线 issue 到真实仓库；对于记忆 Agent，应从问答 benchmark 到长期任务、从静态对话到工具状态；对于 Web Agent，应从模拟网页到真实动态网页；对于多 Agent，应从玩具协作到真实组织流程。迁移失败同样重要，因为它揭示了机制边界。

第四，需要处理负迁移和灾难性遗忘。X/Twitter 调研中提到持续学习 Agent 可能学习新能力时丢失旧能力。未来系统必须监控旧任务回归、记忆冲突、策略覆盖和工具偏好漂移。每次进化不应只看新任务收益，也要检查核心能力保留。可行方法包括保留回归测试套件、分层记忆、经验版本化、任务簇隔离、策略合并前对比、以及在 archive 中保留多样化祖先。

第五，需要建立领域适配的经济模型。跨域迁移不是免费获得的；它需要额外评估、适配和验证。未来系统应能估计“从已有资产迁移到新领域”的成本与风险：需要多少样本、多少验证器、多少人工校准、多少上线监控。如果迁移成本接近重新开发，所谓通用自进化价值就会下降。真正有价值的跨域能力，应在新领域中显著减少人工标注、prompt 调参、失败复盘和验证器构建成本。

## 8.5 从 Agent Evolution 到 AGI：开放式自改进的边界与路径

Agent Evolution 与 AGI 的关系需要谨慎表述。自进化 Agent 不是 AGI，但它触及 AGI 研究中的核心问题：系统能否持续学习、能否改进自己的工具和策略、能否在开放环境中积累能力、能否把失败转化为知识、能否跨任务迁移、能否在安全边界内探索。DGM、AlphaEvolve、Voyager、ADAS 等工作之所以引人关注，是因为它们把 LLM 从静态推理器推进为可搜索、可验证、可积累的行动系统。

从局部自改进到 AGI，第一步是可验证能力积累。当前最可靠的进化发生在代码、数学、算法、游戏、网页等可评价领域。未来应继续扩大可验证领域，把更多现实任务转化为可执行环境和可审计反馈。这不是降低 AGI 目标，而是为开放式学习提供地基。没有可靠反馈，开放式探索会变成随机漂移；有了反馈，系统才能区分真实进步和表面分数。

第二步是开放式探索与目标约束的统一。Open-endedness 强调不断发现新任务、新技能和 stepping stones；生产系统强调目标、成本和安全。AGI 路径需要二者兼得：系统既能主动探索未知任务，又不能突破价值边界和权限边界。DGM 的 archive 和 lineage 思想提供了探索机制；安全沙箱、独立 evaluator 和人类治理提供了约束机制。未来关键是让二者形成闭环，而不是相互否定。

第三步是从工具使用到工具创造。当前 Agent 多数是调用人类给定工具；更高层次的自进化应能设计新工具、改进工具接口、生成测试、优化工作流、重构自身代码和构建环境模型。SICA、Godel Agent、AlphaEvolve、DGM 已展示早期形式。但工具创造必须伴随验证器创造：每个新工具都要有测试、权限、文档、监控和回滚。否则，工具创造会增加系统复杂度和攻击面。

第四步是自我模型与社会嵌入。真正长期运行的 Agent 需要理解自身能力边界、成本结构、失败模式、权限范围和人类偏好；也需要理解它所在组织的流程、角色、规范和责任。自我指涉不是让 Agent 任意改写自己，而是让它能准确描述“我能做什么、我不能做什么、我为什么失败、我需要什么验证”。这类自我模型如果与审计日志、经验记忆和评估结果绑定，就能成为安全自进化的基础。

第五步是对齐与治理。AGI 语境下的自进化最大风险，是系统改进速度超过人类理解和控制能力。Agent Evolution 研究可以为对齐提供实验场：如何设计不可篡改 evaluator，如何记录 lineage，如何限制权限，如何发现 reward hacking，如何在多 Agent 中设置制衡，如何把人类反馈上升为制度化验证器。换言之，Agent Evolution 不只是通向更强系统的技术路线，也是检验安全治理机制的现实平台。

因此，本综述对未来的判断是：短期内，Agent Evolution 最可能在“可验证、可回滚、高价值”的垂直场景中落地，如代码维护、数据分析、测试生成、流程自动化、文档维护、科研辅助和算法优化；中期，随着自动化验证器、多 Agent 协同、记忆治理和安全沙箱成熟，系统会从局部自优化扩展到组织级持续改进；长期，若开放式探索、跨域迁移和安全对齐取得突破，Agent Evolution 可能成为 AGI 工程化的重要组成部分。但这一路径的关键不在于让 Agent 看起来更像人，而在于让它的学习、修改和行动都可验证、可解释、可控制、可积累。

## 8.6 研究与实践路线图

基于本地语料和论文 review，未来路线可以压缩为六个优先级。第一，建立标准化验证器库，覆盖代码、网页、业务流程、记忆、安全和成本。第二，建立自进化报告规范，强制报告数据时间切片、验证/测试隔离、失败候选比例、成本、回滚率和安全事件。第三，发展可审计记忆系统，把经验资产从自由文本升级为结构化、版本化、可压缩、可遗忘的知识库。第四，发展 archive 与 lineage 基础设施，把每次自修改变成可追踪软件供应链事件。第五，发展异质多 Agent 协同，让生成者、验证者、红队、成本控制和人类审计形成制衡。第六，推动跨域迁移基准，防止研究停留在单一 leaderboard 上。

对工程团队而言，务实路线是从小闭环开始：选择可验证任务，建立 baseline，冻结安全边界，收集失败样本，构建自动测试，允许 Agent 只在低风险组件中提出改进，所有改进先离线评估再灰度上线。对研究团队而言，重要的是报告机制边界而非只报告最优分数；对开源社区而言，价值最大的是共享验证器、失败样本和复现轨迹；对企业治理而言，核心是把 Agent Evolution 纳入软件变更管理、风险审计和成本控制。

最终，Agent Evolution 的成熟标志不是某个系统宣称“自主改进”，而是当一个 Agent 提出自我修改时，我们能清楚回答：它为什么提出这个修改？它基于哪些失败证据？它通过了哪些独立验证？它会影响哪些权限和成本？如果错了如何回滚？它的改进是否迁移到新任务？这些问题一旦都有标准答案，自进化 Agent 才真正从概念走向基础设施。

## 参考文献与本地来源

- [MomTest-2026] `mom-test-findings-ZH.md`; `mom-test-findings-reddit-ZH.md`; `mom-test-findings-hn-ZH.md`; `mom-test-findings-x-ZH.md`. Mom Test 调研发现，2026-05-20/21。
- [RawSocial-2026] `raw-social/raw-social-index.json`; `raw-social/*.md`. 本地采集社区、博客、GitHub、HN、X/Twitter、中文平台语料，2026-05。
- [STaR-Review] `paper-reviews/review-2203.14465-star.md`.
- [Reflexion-Review] `paper-reviews/review-2303.11366-reflexion.md`.
- [MultiAgentDebate-Review] `paper-reviews/review-2305.14325-multi-agent-debate.md`.
- [Voyager-Review] `paper-reviews/review-2305.16291-voyager.md`.
- [ExpeL-Review] `paper-reviews/review-2308.10144-expel.md`.
- [SelfRewarding-Review] `paper-reviews/review-2401.10020-self-rewarding.md`.
- [IterAlign-Review] `paper-reviews/review-2403.18341-iteralign.md`.
- [RISE-Review] `paper-reviews/review-2407.18219-rise.md`.
- [MetaRewarding-Review] `paper-reviews/review-2407.19594-meta-rewarding.md`.
- [ADAS-Review] `paper-reviews/review-2408.08435-adas.md`.
- [GodelAgent-Review] `paper-reviews/review-2410.04444-godel-agent.md`.
- [EvoMAC-Review] `paper-reviews/review-2410.16946-evomac.md`.
- [AgentR-Review] `paper-reviews/review-2501.11425-agent-r.md`.
- [SICA-Review] `paper-reviews/review-2504.15228-sica.md`.
- [RAGEN-Review] `paper-reviews/review-2504.20073-ragen.md`.
- [WebEvolver-Review] `paper-reviews/review-2504.21024-webevolver.md`.
- [AbsoluteZero-Review] `paper-reviews/review-2505.03335-absolute-zero.md`.
- [DGM-Review] `paper-reviews/review-2505.22954-darwin-godel-machine.md`.
- [AlphaEvolve-Review] `paper-reviews/review-2506.13131-alphaevolve.md`.
- [SPIRAL-Review] `paper-reviews/review-2506.24119-spiral.md`.
- [MemoryR1-Review] `paper-reviews/review-2508.19828-memory-r1.md`.
- [ReasoningBank-Review] `paper-reviews/review-2509.25140-reasoningbank.md`.
- [ACE-Review] `paper-reviews/review-2510.04618-ace.md`.
- [EvolveR-Review] `paper-reviews/review-2510.16079-evolver.md`.
- [AriadneMem-Review] `paper-reviews/review-2603.03290-ariadnemem.md`.

<!-- PAINPOINT-ROADMAP-START -->
## 8.7 从97个痛点反推未来方向：全量覆盖路线图

第8章的未来方向必须逐条回应第7章的痛点矩阵，而不是只罗列研究趋势。下面把 P001-P097 映射到未来工作包；每个痛点至少进入一个工作包，工作包再对应8.1-8.6的研究路线。

| 工作包 | 覆盖痛点ID | 核心未来方向 | 验收标准 |
|---|---|---|---|
| 生产可靠性/幻觉鲁棒性 | P001, P009, P010, P013, P015, P026, P030, P037, P043, P047, P048, P051, P052, P059, P063, P069, P078, P079, P087, P091 | 建立结构化输出、真实API校验、长任务checkpoint、失败回放和跨域回归测试，把可靠性从prompt技巧升级为系统工程。 | 端到端成功率、人工接管率、回滚率、跨版本回归和线上SLO同时报告。 |
| 评估/基准/真实价值 | P008, P016, P017, P021, P022, P031, P040, P054, P058, P060, P062, P067, P070, P075, P082, P083, P088, P092 | 从静态leaderboard转向治理型评估栈：动态任务、隐藏测试、线上指标、负结果报告和evaluator攻击测试。 | 报告训练/验证/测试隔离、污染检查、失败候选比例、单位提升成本和真实任务迁移。 |
| 模型能力/训练数据边界 | P032, P033, P035, P038, P041, P042, P044, P049, P056, P057, P061, P071, P076, P089 | 建立结构化输出、真实API校验、长任务checkpoint、失败回放和跨域回归测试，把可靠性从prompt技巧升级为系统工程。 | 端到端成功率、人工接管率、回滚率、跨版本回归和线上SLO同时报告。 |
| 记忆/知识/上下文 | P003, P011, P018, P023, P024, P027, P028, P036, P053, P064, P066, P068, P074, P080 | 发展版本化记忆、lineage、漂移检测、增量验证器和分级自治，让自我改进变成可暂停、可审计、可回滚的软件变更。 | 每次自修改都有diff、证据、验证结果、成本、回滚条件和旧能力保持测试。 |
| 框架/工具链/部署可观测性 | P004, P005, P007, P012, P014, P029, P039, P046, P050, P065, P073, P077, P093 | 推动最小足够抽象、prompt/工具调用一等可观测、状态可重放、框架可替换和部署基线模板。 | 框架能导出完整运行轨迹，支持mock工具、离线评估、灰度、权限审计和成本归因。 |
| 安全/权限/错误演化 | P025, P045, P072, P086, P090, P094, P097 | 建设演化沙箱、不可篡改gate evaluator、权限最小化、红队样本库和misevolution监控。 | 高风险工具默认禁用，候选变体只能在隔离环境中评估并通过独立安全门控。 |
| 成本/资源/规模化 | P006, P020, P081, P084, P096 | 把预算、延迟、重试、模型路由和多Agent轮数纳入fitness，形成成本感知的自进化。 | 每个候选报告token/API/人工/墙钟成本，超过预算自动终止或降级。 |
| 自进化与持续学习治理 | P002, P019, P034, P085 | 发展版本化记忆、lineage、漂移检测、增量验证器和分级自治，让自我改进变成可暂停、可审计、可回滚的软件变更。 | 每次自修改都有diff、证据、验证结果、成本、回滚条件和旧能力保持测试。 |
| 其他/长尾需求 | P055 | 保留长尾痛点入口，持续从社区、博客和线上事故中更新问题库。 | 痛点库可追踪来源、时间戳、状态和对应修复路线。 |
| 生态/产品成熟度与采用 | P095 | 推动最小足够抽象、prompt/工具调用一等可观测、状态可重放、框架可替换和部署基线模板。 | 框架能导出完整运行轨迹，支持mock工具、离线评估、灰度、权限审计和成本归因。 |

这一路线图的关键是把“未来方向”写成可验收的工程与研究任务：如果某项研究不能说明它解决了哪些 P 编号痛点、如何验证、代价多少、失败时如何回滚，那么它仍停留在愿景层；如果某个产品框架不能导出覆盖矩阵、运行轨迹和成本/安全证据，那么它也不能声称解决了生产痛点。
<!-- PAINPOINT-ROADMAP-END -->

## 8.8 参考材料与引文索引

- 用户需求基础：`mom-test-findings-ZH.md`（97 个痛点）及 HN/Reddit/X 分项文件。
- 自动验证与反思：`paper-reviews/review-2303.11366-reflexion.md`、`paper-reviews/review-2501.11425-agent-r.md`、`paper-reviews/review-2506.13131-alphaevolve.md`、`paper-reviews/review-2505.03335-absolute-zero.md`。
- 协同进化与开放式搜索：`paper-reviews/review-2408.08435-adas.md`、`paper-reviews/review-2505.22954-darwin-godel-machine.md`、`raw-social/boost_batch_01.md`、`raw-social/0138-segmentfault-com-AI.json`。
- 评价器与偏好学习风险：`paper-reviews/review-2401.10020-self-rewarding.md`、`paper-reviews/review-2407.19594-meta-rewarding.md`。
- 记忆、世界模型与迁移：`paper-reviews/review-2508.19828-memory-r1.md`、`paper-reviews/review-2504.21024-webevolver.md`、`paper-reviews/review-2305.16291-voyager.md`。
