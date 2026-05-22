---
title: "第5章：评估体系与基准测试"
content_timestamp: 2026-05-21
collected_at: 2026-05-21T18:57:23+08:00
time_slice: 2026-05
chapter: 5
language: zh-CN
source_corpus:
  raw_papers: raw-papers/
  paper_reviews: paper-reviews/
  academic_reviews: academic-reviews/
output_type: survey_chapter
---

# 第5章：评估体系与基准测试

> 撰写时间戳：2026-05-21T18:57:23+08:00  
> 素材来源：`raw-papers/`、`paper-reviews/` 与 `academic-reviews/` 中的 Agent Self-Evolution 论文原文、索引和深度 review。代表性依据包括 Reflexion、Voyager、ExpeL、Self-Rewarding LM、Meta-Rewarding、EvoMAC、ADAS、DGM、SICA、AlphaEvolve、WebEvolver、Memory-R1、AriadneMem、SPIRAL、RAGEN 等。

## 5.0 本章概述

Agent 自进化研究的核心矛盾之一，是“系统声称变得更强”与“我们如何确认它真的变强”之间的张力。传统大模型评测往往关注静态能力：模型在固定题集上的一次性表现如何；而 Agent Evolution 关注动态过程：一个智能体能否在交互、反馈、记忆、搜索、代码修改或多轮训练中持续改进，并且这种改进是否能跨任务、跨环境、跨时间保持有效。因此，评估体系不只是论文中的实验章节，而是整个自进化闭环的“选择压力”和“安全闸门”。没有可靠评估，进化会退化为随机试错；没有抗污染评估，进化会变成对 benchmark 的过拟合；没有长期评估，短期收益可能掩盖能力退化、成本上升和安全风险。

从已收集的 raw-papers 与 paper-reviews 看，当前 Agent 自进化论文大致采用四类评估范式：第一类是代码与软件工程基准，如 SWE-Bench、SWE-Bench Verified、HumanEval、MBPP、LiveCodeBench、Polyglot、rSDE-Bench 等；第二类是通用推理与问答基准，如 GSM8K、MATH、ARC、DROP、MMLU、GPQA、MGSM、AIME、OlympiadBench 等；第三类是环境交互基准，如 Minecraft/Voyager、WebArena、WebVoyager、Mind2Web-Live、AppWorld、ALFWorld、WebShop、GAIA-web 等；第四类是自进化专用过程指标，如迭代增益、archive 多样性、回滚率、迁移性、记忆复用率、评估成本和安全门控通过率。本章围绕这些基准与指标展开，重点讨论它们如何塑造 Agent Evolution 研究结论，以及它们自身存在的局限。

需要强调的是，评估在自进化研究中有双重身份：一方面它是论文用来证明方法有效的外部证据；另一方面它又经常被嵌入训练、搜索或自我修改循环，成为智能体实际优化的目标函数。后一种身份使评估问题比普通 LLM benchmark 更敏感。只要指标可见、可重复、可被 agent 试探，系统就可能从“提升真实能力”滑向“适配评价器”。因此，本章不会把评估简单理解为排行榜分数，而是将其视作一个由数据切片、任务生成、验证器、成本模型、安全策略和人类审查共同构成的治理系统。

## 5.1 主要评估基准

### 5.1.1 软件工程与代码智能体基准：SWE-Bench、HumanEval、MBPP

SWE-Bench 已成为代码智能体自进化论文中最重要的基准之一。它要求系统在真实开源仓库中定位问题、修改代码、运行测试并提交可验证补丁，因此比单函数代码生成更接近真实软件工程任务。Darwin Gödel Machine、SICA 等系统都使用 SWE-Bench 或其变体来证明“自我修改代码库”能够带来真实收益：DGM 通过维护智能体 archive，并让变体在 SWE-Bench 与 Polyglot 上接受经验验证；SICA 则展示一个 coding agent 可以在多轮迭代中修改自身工具、提示词、文件编辑逻辑与审查机制，从而提升 SWE-Bench Verified 表现。这类结果的意义不只是分数提高，而是说明“可执行代码 + 自动测试 + 历史 archive”可以构成 Agent 自进化的闭环。

HumanEval 与 MBPP 属于更轻量的代码生成基准，通常用于测试函数级编程能力。它们的优点是自动判分成本低、复现实验容易、适合作为多轮进化中的快速 fitness signal；缺点是任务粒度较小，无法充分反映真实 agent 的文件系统操作、调试、依赖管理、需求澄清和长期规划能力。Reflexion 在 HumanEval、MBPP 与 LeetcodeHardGym 上展示了语言反思和自生成单元测试的价值，但 review 中也指出 MBPP 自生成测试存在显著 false positive 风险，说明自动测试若质量不足，会把错误反馈写入反思记忆。EvoMAC 使用 HumanEval 评估函数级改进，同时引入 rSDE-Bench 这类更接近需求驱动软件开发的任务，说明单一函数级基准已经不足以支撑对“自进化软件智能体”的强结论。

LiveCodeBench、Polyglot 和类似在线/多语言代码评测补充了 SWE-Bench 的不足。LiveCodeBench 更强调时间切片和较新的题目，有助于缓解训练污染；Polyglot 可检验跨语言泛化能力。对于自进化系统而言，跨基准一致提升比单一基准大幅提升更可信。如果一个系统只在 SWE-Bench 上显著提升，却在 HumanEval、MBPP、LiveCodeBench 或真实仓库任务上无明显收益，则可能说明它学到的是 benchmark-specific workflow，而不是通用编码智能。相反，如果它能同时改善 issue 解析、测试生成、patch 最小化、回归测试和跨语言迁移，才更接近“软件工程能力”而非“刷题能力”。

### 5.1.2 推理与知识基准：GSM8K、MATH、ARC、MMLU、GPQA

在非代码领域，GSM8K、MATH、ARC、MMLU、GPQA、DROP、MGSM 等仍是 Agent 自进化论文常用的推理基准。STaR 使用小规模 rationale examples 与大规模无标注数据迭代训练推理链，展示了模型可以通过生成—筛选—微调循环提升推理能力；RISE 将单轮问题转化为多轮 MDP，用 correctness reward 训练模型在测试时逐步自我修正；SPIRAL 等自博弈方法则使用数学、聊天、博弈和推理任务证明模型可以从自身生成的数据中获得改进。Self-Rewarding LM 与 Meta-Rewarding 则更多通过 AlpacaEval、MT-Bench、Arena-Hard 等开放式生成评估证明指令遵循与偏好建模能力的提升。

这些基准的优点是成熟、可比较、社区熟悉。但它们对 Agent Evolution 的支持是有限的。首先，许多任务是静态题集，系统可能通过训练数据、检索或反复调参间接接触题目；其次，很多基准只衡量最终答案，无法衡量智能体的工具使用、探索策略、记忆复用、失败恢复和多轮交互质量；第三，推理基准上的提升可能来自基础模型能力、采样策略、提示词长度或 evaluator 偏好，而不一定来自真正的自进化机制。尤其是 LLM-as-a-Judge 类评测，容易受到长度偏见、位置偏见、模型家族偏好和打分分布漂移影响。因此，在综述中引用这类结果时，应区分“模型能力提升”“对评估器偏好的适配”和“agentic loop 带来的能力提升”。

### 5.1.3 环境交互与开放式学习基准

Voyager 是环境交互评估的代表案例。它在 Minecraft 中通过自动课程、技能库和迭代提示机制持续探索，使用独特物品发现数、科技树解锁速度、探索距离和技能迁移来衡量 lifelong learning。与静态题集相比，这类评估更接近自进化智能体的长期目标：智能体不仅要回答问题，还要在环境中持续发现任务、学习技能、复用经验并适应新世界。然而，Minecraft 指标也具有强领域依赖性。独特物品和科技树里程碑对于 Minecraft 有意义，但很难直接迁移到网页自动化、科研发现、企业流程或机器人控制。

AppWorld、WebArena、ALFWorld、MiniWoB、WebShop、Mind2Web-Live、WebVoyager、GAIA-web 等环境类或工具使用类基准可用于测试 agent 的多步决策、API 调用、浏览器操作和真实世界任务执行。ExpeL 使用 HotpotQA、ALFWorld、WebShop 等环境检验经验提炼和跨任务迁移；WebEvolver 使用 Mind2Web-Live、WebVoyager 与 GAIA-web 评估 co-evolving world model 对网页任务的帮助；ACE 等研究提到 AppWorld 这类 agent benchmark 的价值，因为它们要求系统在多工具、多状态、多约束条件下完成目标。与单轮问答相比，这些基准更能暴露上下文崩溃、记忆失真、工具误用、计划漂移和错误恢复不足等问题。缺点是环境搭建复杂、评估成本高、随机性更强，且自动评分往往难以覆盖任务质量的全部维度。

### 5.1.4 自动评估驱动的科学与算法发现基准

AlphaEvolve、DGM、A-Evolve、FunSearch 等系统强调“自动评估函数”对自进化的决定性作用。AlphaEvolve 将候选程序放入可执行 evaluator 中，用性能指标作为 fitness function，在矩阵乘法、数据中心调度、硬件电路设计和训练效率优化中展示结果。其边界也非常清晰：只有当问题可以被程序化验证时，进化闭环才可靠。对于科学发现、开放式研究或用户体验优化这类难以即时验证的领域，自动评估函数可能无法完整表达目标，甚至会诱导系统寻找指标漏洞。

因此，算法发现类基准的启示是双重的。一方面，它们证明“LLM 生成候选 + 程序化评估 + archive/selection”是当前最强的自进化范式之一；另一方面，它们也提醒我们，评估函数本身就是能力边界。如果 evaluator 只能测速度，系统可能牺牲可维护性；如果 evaluator 只测测试通过率，系统可能写出脆弱补丁；如果 evaluator 只测短期 reward，系统可能破坏长期可泛化能力。算法发现评估最适合验证明确、约束完整、可重复执行的任务；一旦迁移到社会、组织或开放知识任务，就需要加入人工审查、领域专家评估和延迟效果追踪。

## 5.2 Agent 进化专用评估指标

传统 benchmark 分数不足以刻画“进化”。Agent Evolution 需要过程性指标。第一是迭代增益曲线，即每一轮自我改进后的性能变化。一个可靠系统应展示多轮稳定上升，而不是某一轮偶然跳升。SICA、DGM、ADAS、RISE、Meta-Rewarding 等系统的关键证据都来自迭代过程：archive 中新 agent 是否持续优于祖先，judge 能力是否随 actor 一起提升，self-correction 是否在多轮内单调改善，是否存在回退，是否能从失败中恢复。报告最终 best score 而不报告完整曲线，会掩盖“多数候选失败、少数样本幸存”的事实。

第二是泛化与迁移指标。自进化系统最容易被质疑为“对验证集过拟合”。因此，应将搜索/进化使用的 validation tasks 与最终 test tasks 严格隔离，并报告跨模型、跨任务、跨环境迁移。ADAS 的重要贡献之一，是测试发现的 agent designs 是否能迁移到不同任务和不同 LLM；Voyager 的关键证据之一，是技能库能否迁移到新 Minecraft world 或新任务；AlphaEvolve 的工程价值来自算法能否在真实基础设施中带来收益；Memory-R1 的可信度来自 LoCoMo、MSC、LongMemEval 等跨记忆 benchmark 的结果。没有迁移性，进化只是局部调参。

第三是多样性指标。Archive-based 方法不应只保留最高分个体，还应保留多条探索路径。DGM 将 open-endedness 引入 self-improving coding agents，其动机正是避免单一路径陷入局部最优。多样性可从 agent 架构差异、工具组合差异、prompt/代码 diff 距离、行为轨迹差异、解决方案语义差异等角度衡量。多样性越高，系统越可能在未来任务中找到 stepping stones；但过高多样性也会增加评估成本和管理复杂度。良好的评估应同时报告 exploitation 的最好结果与 exploration 的覆盖范围，而不是只展示最终冠军个体。

第四是安全与回归指标。自进化智能体可能通过修改代码、提示词、记忆或工具策略获得短期收益，同时引入不可见风险。因此每轮 evolution 都应记录回归测试通过率、失败类型、风险规则触发次数、人工审查比例、回滚率和 sandbox 违规情况。对于 DGM、SICA、AlphaEvolve 这类能修改代码或生成程序的系统，安全指标不应是附录，而应成为与 benchmark 分数同等重要的主指标。对于 Self-Rewarding 与 Meta-Rewarding 类方法，还应记录 judge drift、score inflation、verbosity bias、human-correlation decay 等评价器退化指标。

第五是成本效率指标。自进化系统通常消耗大量 token、API 调用、环境 rollouts 或训练算力。ADAS 需要多轮 agent proposal 与 evaluation；SICA 的多轮 self-modification 产生显著 API 成本；Meta-Rewarding 每轮要生成大量响应与 judge/meta-judge 判断；AlphaEvolve 依赖大规模候选评估。评价一个系统时，必须同时报告 absolute performance、delta per iteration、cost per improvement、wall-clock time、失败候选比例和可复用资产数量。否则，高分系统可能只是“用成本买分”。

第六是资产积累指标。Agent 自进化区别于一次性推理的重要标志，是系统会留下可复用的经验、记忆、技能、工具或代码。Reflexion 的 episodic memory、ExpeL 的 insight 列表与经验检索、Voyager 的技能库、ReasoningBank 的推理经验、AriadneMem 的演化图记忆、Memory-R1 的 learned memory operations，都是“能力资产化”的不同形式。评估这些系统时，除了任务分数，还应问：资产是否可解释、可压缩、可迁移、可审计？资产增长是否导致检索噪声、上下文膨胀或过时信息干扰？这些问题直接决定长期自进化能否持续。

## 5.3 评估体系的问题与局限

### 5.3.1 Benchmark 污染与时间切片问题

Benchmark contamination 是 Agent Evolution 中尤其严重的问题。静态公开题集可能已进入基础模型训练数据；自进化系统又会在多轮迭代中反复接触验证任务，进一步增加泄漏风险。解决方式包括：使用时间切片明确训练/评估边界，引入新近数据集，保留私有 test set，采用动态任务生成，以及报告 content_timestamp、collected_at、time_slice。本项目所有 raw data 强制加入这些字段，正是为了避免未来综述和实证分析混淆“论文发表时间”“数据采集时间”和“模型可能接触数据的时间”。

时间切片还能帮助分析方法演化趋势。2022 年及以前的 STaR 更强调 rationale bootstrapping；2023 年的 Reflexion、Self-Refine、Voyager 展示了反馈、反思和技能库；2024 年出现更多自奖励、自博弈、架构搜索和多智能体进化；2025 年以后，DGM、AlphaEvolve、RAGEN、ACE、Memory-R1、WebEvolver 等工作更重视自动评估、代码级自改进、可扩展训练与记忆机制。没有时间切片，综述容易把不同阶段的技术混为一谈，也无法判断某个 benchmark 提升是否只是因为基础模型在训练时已经接触了类似任务。

### 5.3.2 Goodhart 定律与 reward hacking

Goodhart 定律在自进化系统中表现为：当 benchmark 成为目标，benchmark 就不再是好指标。Self-Rewarding LM 的局限之一，是同一模型既生成又评价，可能产生 reward hacking；Meta-Rewarding 虽然引入 meta-judge 改善 judge，但 review 中仍指出 score bias、长度偏见和 human-correlation 不稳定；AlphaEvolve 的局限之一，是 evaluator 设计不当会导致系统优化错误目标；SICA/DGM 在 coding benchmark 中也可能学到 benchmark-specific shortcuts。对于任何自进化系统，评估指标一旦进入优化循环，就会被系统主动利用。

因此，评估设计必须包含反 Goodhart 机制：多指标评估、隐藏测试集、人工抽检、跨域验证、负面能力监控、复杂度惩罚、可解释性审查和长期跟踪。特别是当 agent 能修改自身代码或策略时，评估器不应被 agent 直接访问或修改；评估数据、测试脚本和 sandbox 权限要隔离；archive 纳入标准要包含安全与泛化，而非单一分数。一个实用原则是：训练循环可以使用便宜、频繁、可见的 proxy reward，但论文结论必须建立在昂贵、独立、不可被优化过程直接访问的 final evaluation 上。

### 5.3.3 自动评分与人类判断的张力

自动评估是自进化的基础，但人类判断仍不可替代。代码测试可以判定补丁是否通过，但很难评价可维护性、设计优雅性和长期技术债；LLM-as-a-judge 可以快速评价文本质量，但存在位置偏见、长度偏见、模型偏好和解释幻觉；环境 reward 可以衡量任务完成，但可能忽略用户体验与安全边界。EvoMAC 的 rSDE-Bench 提到自动要求级评估与人类评价高度相关，这是一个重要方向：自进化 benchmark 应尽量建立自动指标与人类偏好的相关性证据，而不是默认自动分数等同真实质量。

人类评估也有缺点：成本高、速度慢、主观性强，难以嵌入高频 evolution loop。因此，更合理的体系是“自动评估用于搜索，人类评估用于校准和审计”。例如，自动测试可以过滤明显错误补丁，人类 reviewer 抽查架构质量；LLM judge 可以初筛开放式回答，人类评估用于校正偏见；环境 reward 可以度量任务完成，人类安全审查评估是否绕过约束。只有把自动和人工放在不同层级，才能既保持进化速度，又避免 evaluator 漂移。

### 5.3.4 复现性与随机性

Agent Evolution 系统高度依赖随机采样、基础模型版本、API 非确定性、环境状态和搜索路径。ADAS 中不同运行可能发现不同 agent designs；DGM 的 archive 生长路径会影响最终能力；Voyager 的探索轨迹与技能库内容也可能随执行变化；WebEvolver 的 world model 训练与网页环境状态也会引入额外随机性。评估报告必须记录随机种子、模型版本、提示词、工具版本、数据切片、失败样本和完整轨迹。只报告最终最佳分数是不充分的，应报告均值、方差、最好/最差、失败率和 ablation。

复现性还包括“评估器复现”。许多论文依赖专有模型作为 judge、critic、self-verifier 或 proposal generator，如果模型版本变化，结果可能不可复现。对于综述中的证据等级划分，应把开源代码、公开数据、固定评估脚本、可下载轨迹和多 seed 实验视为高可信信号；把只报告单次运行、依赖闭源 API、缺少失败案例和没有 ablation 的结果视为探索性证据。

## 5.4 评估方法对比分析

从方法论上看，代码基准最适合作为强验证信号，因为测试可执行、正确性明确、改进可量化。其缺点是容易收缩研究视野，使自进化系统过度偏向 coding agent。推理基准覆盖面广、可比较性强，但更容易受到污染和 prompt engineering 影响。环境交互基准最能体现 agentic behavior，但成本高、复现难、领域依赖强。自动 evaluator 驱动的算法发现最接近真正 evolution loop，但适用范围取决于问题是否可程序化验证。记忆类 benchmark 如 LoCoMo、LongMemEval 更适合评估长期状态维护，但往往仍局限在对话问答，不足以覆盖真实工具型 agent 的记忆生命周期。

因此，一个成熟的 Agent Evolution 评估体系应采用分层结构。第一层是单轮能力基准，用于确认基础能力；第二层是迭代进化基准，用于观察多轮改进曲线；第三层是跨域迁移基准，用于检验是否学到通用机制；第四层是安全与成本基准，用于判断是否可部署；第五层是长期真实任务评估，用于衡量用户价值。只有五层同时成立，才能有力支持“agent 正在自进化”这一强命题。

可以把主要评估方法概括如下：

| 评估类型 | 代表基准/系统 | 主要优点 | 主要局限 | 适合回答的问题 |
|---|---|---|---|---|
| 函数级代码 | HumanEval、MBPP、LeetcodeHardGym | 便宜、自动、易复现 | 粒度小、污染风险、不能评估工程流程 | 代码生成/自修正是否有效 |
| 仓库级软件工程 | SWE-Bench、SWE-Bench Verified、Polyglot | 接近真实工程、可执行验证 | 成本高、任务分布偏窄、易学 workflow | coding agent 是否能解决真实 issue |
| 需求级软件开发 | rSDE-Bench | 覆盖需求拆解、测试和多 agent 协作 | 当前任务规模仍小 | 自进化协作网络是否能改善软件交付 |
| 推理问答 | GSM8K、MATH、MMLU、GPQA、AIME | 成熟、可比较 | 静态题集、只看最终答案 | 推理训练/自博弈是否迁移到知识任务 |
| 环境交互 | ALFWorld、WebShop、WebArena、Minecraft、WebVoyager | 能测多步行动和工具使用 | 搭建复杂、噪声大、评分不完整 | agentic behavior 是否真实提升 |
| 自评估/偏好 | AlpacaEval、MT-Bench、Arena-Hard、LLM-as-a-Judge | 适合开放式文本 | judge bias、reward hacking、循环性 | 自奖励是否改善生成质量 |
| 记忆与长期状态 | LoCoMo、LongMemEval、MSC | 能测长期依赖和状态更新 | 多集中在对话场景 | 记忆系统是否积累并正确使用经验 |
| 算法/科学发现 | AlphaEvolve/FunSearch evaluator | 强反馈、可闭环优化 | 依赖可程序化目标 | LLM+进化搜索是否能发现新方案 |

对于未来研究，本章建议采用以下报告规范：每个系统必须报告 content_timestamp、collected_at 和 time_slice；必须区分 validation 与 test；必须给出至少一个跨域或新近时间切片评估；必须报告成本与失败率；必须包含反 Goodhart 设计；必须公开或描述评估器不可被 agent 篡改的机制；必须进行单变量 ablation，说明性能提升来自 reward、memory、self-play、prompt evolution、architecture search 还是混合因素。这样的规范将使 Agent Evolution 从“展示性 demo”走向可比较、可复现、可审计的科学研究。

还应引入“负结果报告”规范。自进化研究天然容易选择性展示成功变体：失败候选被丢弃，退化迭代被忽略，成本和安全事件被弱化。为了避免 survivorship bias，论文应报告失败候选比例、常见失败模式、被回滚的修改类型、性能下降样本、跨 seed 方差和没有显著提升的基准。负结果不是削弱贡献，而是帮助社区理解进化边界和评估压力如何塑造系统行为。

## 5.5 小结

评估体系是 Agent 自进化研究的核心基础设施。SWE-Bench、HumanEval、MBPP、GSM8K、MATH、Minecraft、AppWorld、WebVoyager、rSDE-Bench、LoCoMo 等基准分别覆盖代码、推理、环境交互、软件开发需求和长期记忆，但没有任何单一基准能够完整衡量自进化。真正的评估应关注动态过程：迭代收益是否稳定，改进是否可迁移，archive 是否保持多样性，系统是否避免 reward hacking，成本是否合理，安全门控是否有效。

本章的核心结论是：Agent Evolution 的评估不能只问“分数是否更高”，而要问“为什么更高、是否可复现、能否迁移、是否安全、是否值得成本、是否经得起时间切片检验”。只有当评估体系本身足够强，Agent 的自进化才不会变成对指标的投机，而能成为真实能力增长的工程路径与科学范式。未来更有价值的 benchmark 不应只是更大的静态题库，而应是可版本化、可审计、可动态生成、带有隐藏测试和长期任务轨迹的评估平台；只有这样的平台，才能为自进化智能体提供既足够强又不易被投机的选择压力。
