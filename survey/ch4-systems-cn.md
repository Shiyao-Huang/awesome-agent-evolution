---
title: "第4章：核心系统深度分析"
content_timestamp: 2026-05-21
collected_at: 2026-05-21T00:00:00+08:00
time_slice: 2026-05
chapter: 4
language: zh-CN
source_corpus:
  raw_papers: raw-papers/
  paper_reviews: paper-reviews/
key_sources:
  - raw-papers/2505.22954.md
  - raw-papers/2408.08435.md
  - raw-papers/2506.13131.md
  - raw-papers/2305.16291.md
  - raw-papers/2303.11366.md
  - raw-papers/2401.10020.md
  - paper-reviews/review-2505.22954-darwin-godel-machine.md
  - paper-reviews/review-2408.08435-adas.md
  - paper-reviews/review-2506.13131-alphaevolve.md
  - paper-reviews/review-2305.16291-voyager.md
  - paper-reviews/review-2303.11366-reflexion.md
  - paper-reviews/review-2401.10020-self-rewarding.md
output_type: survey_chapter
---

# 第4章：核心系统深度分析

## 4.0 本章概述

Agent Evolution 的研究已经从早期“让模型反思一次答案”发展为多条技术路线并行的系统工程：有的系统让智能体修改自身代码，有的让元智能体搜索新的 agent 架构，有的把 LLM 放入进化计算循环中发现算法，有的在开放环境中积累技能库，有的把语言反思当作经验记忆，有的则让模型同时扮演策略模型与奖励模型。它们的共同点，是都试图把“外部人类设计的固定系统”转化为“能够从反馈中改写自身行为分布、工具结构或训练信号的系统”。但它们的差异同样关键：DGM 的对象是 agent 自身代码，ADAS 的对象是 agent 架构函数，AlphaEvolve 的对象是待优化程序，Voyager 的对象是环境技能库，Reflexion 的对象是语言经验记忆，Self-Rewarding LM 的对象是模型权重与自评奖励能力。

本章选择六个代表性系统进行深度分析：DGM（Darwin Gödel Machine）、ADAS、AlphaEvolve、Voyager/Reflexion、Self-Rewarding Language Models，并在最后给出系统对比矩阵。选择这些系统的原因有三点。第一，它们覆盖了当前自进化研究的主要对象层级：代码、架构、算法、技能、记忆、奖励模型。第二，它们都具有较清晰的闭环结构：生成候选、执行或评估、保存经验、再生成。第三，它们的局限也具有代表性：评估成本、奖励黑客、路径依赖、安全沙箱、长上下文、基准污染、可复现性与泛化性。

需要强调的是，本章所说的“自进化”并不等同于完全自主、无限递归、无人工约束的 AGI 自我改造。多数系统仍依赖冻结的基础模型、人工设计的评估器、限定的搜索空间、固定的工具 API 或离线训练流程。它们的价值在于展示了不同层面的可行闭环：只要能够把改进对象表示为代码、策略、技能、反思或偏好数据，并且能够对候选质量进行某种验证，系统就可以从一次性推理转向多轮改进。

## 4.1 DGM（Darwin Gödel Machine）：自进化架构

### 4.1.1 核心机制

Darwin Gödel Machine（DGM）是当前最接近“agent 修改自身”的代表系统。原始论文 `2505.22954` 将它定位为一种 practical Gödel Machine：传统 Gödel Machine 要求系统在修改自身前形式化证明修改会带来收益，但现实中几乎无法证明复杂代码修改的整体收益；DGM 因此用经验评估替代形式证明，用 Darwinian evolution 和 open-endedness 替代单一路径的贪婪优化。系统维护一个不断增长的 agent archive，从 archive 中采样某个 agent，让 foundation model 生成该 agent 的新版本，并在 SWE-bench、Polyglot 等编码基准上评估。如果候选表现足够好或足够有价值，就进入 archive，成为后续变体的 stepping stone。

DGM 的核心闭环可以概括为：

```text
Archive 中的 agent 变体
        ↓ 采样父代
Self-modification：修改自身 Python 代码库
        ↓
Sandbox execution：运行候选 agent
        ↓
Benchmark evaluation：SWE-bench / Polyglot
        ↓
Archive update：保留成功变体与多样路径
        ↓
下一轮从更丰富 archive 中继续采样
```

这里的关键不是“模型写代码”本身，而是“被写的代码就是下一代 agent 的行为结构”。它把 agent scaffolding、编辑工具、上下文管理、审查逻辑、错误处理策略等工程细节都暴露为可修改对象。与只优化 prompt 的方法相比，DGM 的搜索空间更大；与只训练模型权重的方法相比，DGM 的迭代速度更快、可解释性更强；与 ADAS 的固定 meta-agent 相比，DGM 的改进主体会被自身改进结果反向增强。

### 4.1.2 技术路线图

DGM 的技术路线可以分成四层。第一层是表示层：agent 以 Python codebase 表示，具备图灵完备表达能力，可以改工具、改提示词、改调用顺序、改上下文裁剪、改自检逻辑。第二层是生成层：基础模型读取父代 agent 的代码和历史表现，提出代码级修改。第三层是验证层：候选 agent 在隔离环境中运行，并用真实编码 benchmark 给出经验分数。第四层是开放式搜索层：系统不只保留单个最优个体，而是维护多样 archive，允许不同分支探索不同的局部最优。

这种路线的强点在于“真实反馈”。DGM 不把 LLM 自评当作最终依据，而是要求候选 agent 在可执行任务上交付补丁或解答。SWE-bench 迫使系统面对真实仓库、真实 issue、真实测试；Polyglot 则检验跨语言代码能力。DGM 自动发现的改进包括更好的代码编辑工具、长上下文窗口管理策略、peer-review 机制等，这些都不是传统 benchmark 单次解题可以轻易产生的结构性变化。

DGM 也体现了自进化系统中 archive 的重要性。单一路径 self-improvement 容易被早期错误想法绑架，例如持续优化某个局部技巧而忽略更有潜力的结构改变。Archive 允许系统保留“当前不是最强但未来可能成为 stepping stone”的变体，从而更接近开放式进化，而不是简单 hill climbing。

### 4.1.3 实验结果

根据 `raw-papers/2505.22954.md` 与对应 review，DGM 在编码能力上取得了显著提升：SWE-bench 从 20.0% 提升到 50.0%，Polyglot 从 14.2% 提升到 30.7%。这个结果的意义不只在于绝对分数，而在于它证明 agent 自身代码修改可以反过来提高 agent 后续修改自身的能力：更好的编辑器、更好的上下文策略、更好的审查机制，会让下一轮自我修改更有效。这形成了弱形式的递归改进链条。

实验还显示，DGM 优于没有 self-improvement 或没有 open-ended exploration 的基线。这一点很关键，因为如果只证明“多试几次能变好”，并不能说明自进化架构有效；DGM 需要证明 archive、采样、代码级自改写和经验评估共同产生了超出简单重采样或固定工具链调参的收益。

### 4.1.4 批判性分析

DGM 的最大贡献是把 Gödel Machine 从纯理论拉回可执行系统，但它也把形式证明替换成经验验证，因而继承了经验评估的所有风险。第一是 benchmark specificity：系统在 SWE-bench 与 Polyglot 上变强，不代表它在科研、网页、企业流程、机器人或安全任务上同样变强。第二是评估成本：每个候选都要跑真实 benchmark，成本高、周期长，archive 越大，调度与选择越复杂。第三是安全风险：能修改自身代码的 agent 也可能修改评估接口、日志、权限边界或沙箱交互方式，因此必须把评估器、执行器和 agent 修改权限隔离。第四是可解释性：代码 diff 虽然比权重更新更可读，但随着多代累积，系统行为仍可能变得难以审计。

从理论角度看，DGM 仍没有解决“改进是否真正泛化”的问题。它是一个强工程原型，而非严格证明的自我改良系统。它的成功边界取决于三件事：基础模型能否提出有意义的代码修改；评估器能否捕捉真实目标；archive 能否在探索和利用之间保持平衡。若评估器过窄，DGM 可能演化出 benchmark hack；若 archive 过宽，系统可能被大量低质量变体淹没；若安全门过弱，自我修改会从能力提升变成风险放大。

## 4.2 ADAS：自动架构搜索

### 4.2.1 核心机制

ADAS（Automated Design of Agentic Systems）将 agent 设计本身形式化为搜索问题。它的核心算法 Meta Agent Search 使用一个冻结 LLM 作为 meta agent，让其在 Python 代码空间中提出新的 agent function。每个候选 agent 被表示为类似 `run_agent(system_prompt, user_query, tools, memory, max_iterations)` 的 Python 函数，可以包含循环、条件、状态、工具调用和对 archive 中已有 agent 的组合调用。候选在验证任务上评估，表现好的进入 archive，供下一轮 meta agent 参考。

与 DGM 的区别在于，ADAS 的 meta agent 本身通常是固定的；它自动设计“目标 agent”，但不一定让目标 agent 反过来修改 meta agent。换言之，ADAS 是“自动架构设计”，DGM 是“自我代码改写”。二者都使用代码作为搜索空间，也都依赖 archive，但 self-reference 的强度不同。

ADAS 的闭环可以表示为：

```text
Archive: 已发现 agent 设计
        ↓
Meta Agent 读取历史设计与表现
        ↓
生成新的 Python agent function
        ↓
在验证集上评估
        ↓
优秀候选进入 archive
        ↓
最佳设计迁移到测试集、其他任务或其他 LLM
```

### 4.2.2 技术路线图

ADAS 的技术路线有三个重点。第一，搜索空间是图灵完备代码，而非固定模板。传统 prompt optimization 只能改提示词，NAS 通常搜索有限图结构，ADAS 则允许 meta agent 写任意控制流。这使搜索空间包含 CoT、ReAct、self-consistency、multi-agent debate、reflection、tool use、memory retrieval 等多种组合，甚至可以产生人类没有预设的新结构。

第二，archive 支持组合式搜索。后续 agent 可以调用前面发现的 agent 作为子程序，类似程序合成中的 library learning。这样，系统不必每一轮从零发明，而能逐步积累设计模式。例如早期发现的“多视角推理”可以成为后续“先多视角、再辩论、再投票”的子模块。

第三，ADAS 特别强调迁移实验。它不只测试候选在搜索域的表现，还测试发现的 agent design 是否能迁移到其他任务、其他 benchmark、甚至其他基础模型。这一点非常重要，因为自动架构搜索最容易被质疑为验证集过拟合；如果某个结构能跨 ARC、DROP、MGSM、MMLU、GPQA 等任务或跨 GPT/Gemini/Claude 风格模型保持优势，就更可能是通用 agent design pattern。

### 4.2.3 实验结果

根据 `review-2408.08435-adas.md`，ADAS 在 ARC、DROP、MGSM、MMLU、Chou-odds、GPQA 等六类 benchmark 上展示了自动发现 agent 设计的能力。其突出结果不是某一个 benchmark 的绝对分数，而是发现设计的迁移性：在一个任务上搜索到的 agent design 可以在其他任务上保持竞争力；为一个基础模型设计的结构也可能迁移到不同 LLM。这说明 ADAS 不是只在搜索特定 prompt，而是在寻找某种结构性推理流程。

Review 中还指出，ADAS 的成本大约为每次运行 300–500 美元，取决于任务域和搜索迭代数。这个成本相对训练大模型很低，但对于大量 seed、多任务、多模型重复实验仍不可忽略。它体现了 agent architecture search 的现实位置：比人工设计更自动，比大规模训练更便宜，但仍需要明确预算与评估计划。

### 4.2.4 批判性分析

ADAS 的最大贡献是把“agentic system design”从手工工程提升为可搜索对象。它让我们看到，CoT、ReAct、Reflection、Debate 等结构不必永远由研究者手写，而可以由 meta agent 在代码空间中自动组合。这对工业框架也有启发：未来 LangGraph、AutoGen、CrewAI 等 workflow 可能不是全手工设计，而是由搜索系统提出候选 graph，再由人类审查、评估、上线。

但 ADAS 的局限也很明显。第一，搜索质量高度依赖 meta agent 的代码能力。如果 meta agent 不能理解 archive 或写出可运行 Python，搜索会退化。第二，验证集噪声会影响 archive 质量，少量样本上的偶然高分可能被保留下来并误导后续搜索。第三，图灵完备搜索空间既是优势也是风险：候选代码可能有副作用、无限循环、隐藏状态或安全问题。第四，ADAS 的 benchmark 仍以相对结构化的单轮推理任务为主，能否扩展到长时程、多工具、高风险生产任务仍需验证。

从自进化视角看，ADAS 是“设计进化”而非完整“系统自进化”。它自动生成 agent 架构，但 meta agent 不一定被自身结果改变，基础模型权重也不变。因此，它更适合作为自进化系统中的 architecture proposal module：为 DGM、SICA、生产 workflow 或多 agent 平台生成候选结构，再由更强评估器和安全门决定是否采纳。

## 4.3 AlphaEvolve：进化计算 + LLM

### 4.3.1 核心机制

AlphaEvolve 是 Google DeepMind 提出的 evolutionary coding agent，用于科学与算法发现。它与 DGM/ADAS 的关键区别在于：AlphaEvolve 主要进化的不是 agent 自己，而是某个待优化算法或程序。系统维护 program database，选择父代程序，用 Gemini 等 LLM 生成代码 diff，再通过自动 evaluator 对候选程序评分，并把高质量候选放回数据库。LLM 在这里不是最终答案生成器，而是进化算法中的语义 mutation operator。

技术闭环如下：

```text
Program database：候选程序、分数、谱系
        ↓
Prompt sampler：选择父代与历史上下文
        ↓
LLM mutation：生成代码 diff
        ↓
Automated evaluator：正确性/性能/资源指标
        ↓
Selection：保留更优或多样候选
        ↓
跨多代积累算法改进
```

AlphaEvolve 继承了遗传编程与进化计算的基本结构：选择、变异、评估、保留。但它用 LLM 替代随机或规则变异，使变异具有语义知识：模型可以理解代码意图、性能瓶颈、数学结构和工程约束，从而提出比随机 mutation 更有方向的修改。

### 4.3.2 技术路线图

AlphaEvolve 的第一项关键设计是“代码 diff 而非完整重写”。对于复杂算法，完整重写容易丢失已有优化；diff 允许系统在父代基础上做局部、可审查、可累计的改变。这类似人类工程师对成熟代码库进行 patch，而不是每次从空文件开始。

第二项设计是“自动评估作为 fitness function”。AlphaEvolve 能成功，是因为目标问题可以被程序化验证：矩阵乘法算法可以检查正确性和乘法次数，调度算法可以测吞吐或资源利用，硬件电路简化可以检查功能等价，训练优化可以测速度。评估器把开放式自然语言想法转换为可执行选择压力，防止 LLM 只生成听起来合理但无效的方案。

第三项设计是“工程规模化”。AlphaEvolve 不只是学术 toy problem；它被用于 Google 数据中心调度、硬件加速器电路设计、Gemini 训练加速和多个数学/计算机科学问题。它代表了一个重要范式：当企业拥有大量可自动评估的问题、强 LLM、强算力和执行基础设施时，可以把算法优化持续自动化。

### 4.3.3 实验结果

`raw-papers/2506.13131.md` 与 review 记录了几类代表性成果。最受关注的是 4×4 复数矩阵乘法：AlphaEvolve 找到使用 48 次标量乘法的过程，相比 Strassen 相关设置中 49 次的长期记录实现改进，被描述为 56 年来的首次突破。除此之外，AlphaEvolve 还优化了 Google 生产系统中的数据中心调度算法、发现硬件加速器电路设计中的功能等价简化、并加速了支撑自身的 LLM 训练流程。论文还称系统被应用于分析、几何、组合数学、数论等 50 多个开放问题。

这些结果的意义在于，AlphaEvolve 把“LLM 生成代码”升级为“LLM + 演化搜索 + 自动验证”的发现系统。单次 LLM 调用往往难以发现深层算法优化，但多代搜索可以把小改进累积成重要突破。更重要的是，AlphaEvolve 改善了训练其底层 LLM 的基础设施，这构成一种间接递归改进：系统优化了支撑自身未来能力的计算堆栈。

### 4.3.4 批判性分析

AlphaEvolve 的边界非常清晰：它几乎完全依赖自动 evaluator。凡是能够快速、可靠、低噪声评估的领域，AlphaEvolve 类方法就很强；凡是需要专家长期判断、物理实验、伦理评估或主观偏好的领域，该方法就难以直接应用。自动评估是它的核心护城河，也是它的适用性瓶颈。

第二个问题是成本与可复现性。AlphaEvolve 使用 Google 级基础设施和 Gemini 模型，论文代码未完全开源，外部研究者难以复现其规模。学术界可以复现核心思想——program database、LLM diff、自动 evaluator、selection——但难以复现其搜索规模和生产场景。因此，它更像一个展示未来方向的高端工业系统，而不是人人可用的开源 baseline。

第三个问题是 Goodhart 风险。只要 evaluator 成为目标，系统就可能找到指标漏洞。例如若只优化速度，可能牺牲可读性、鲁棒性或边界条件；若测试集不完整，候选可能过拟合测试而非真实正确。AlphaEvolve 的数学结果可以通过证明或穷举验证降低此风险，但在工程系统中 evaluator 通常只是近似目标，必须加入安全、维护性和鲁棒性约束。

从 Agent Evolution 角度看，AlphaEvolve 证明了最强的自进化闭环往往不是“自由反思”，而是“可执行候选 + 可验证评估 + 多代选择”。它给其他系统的启示是：如果想让 agent 真正持续改进，应优先把目标转化为可运行、可测量、可回归的 evaluator，而不是依赖主观自评。

## 4.4 Voyager / Reflexion：经验驱动的自我改进

### 4.4.1 Reflexion 的核心机制

Reflexion 是语言 agent 经验学习的经典起点。它提出 verbal reinforcement learning：不通过梯度更新模型权重，而是让 agent 在每次失败后把反馈转化为自然语言反思，并存入 episodic memory，下次尝试同类任务时把反思放入上下文，从而改变行为。Actor 执行动作，Evaluator 给出成功/失败或标量反馈，Self-Reflection 模块生成经验总结，Memory 保存压缩后的教训。

其闭环如下：

```text
Actor 执行任务
        ↓
Evaluator 返回反馈（测试、环境、问答评价）
        ↓
Self-reflection 生成语言教训
        ↓
Episodic memory 保存反思
        ↓
下一轮 Actor 带着记忆重新尝试
```

Reflexion 的思想很朴素，但影响很大：LLM 擅长理解自然语言，因此把奖励信号翻译成语言建议，比单纯给一个 0/1 reward 更能指导下一次行为。这使 agent 可以在不训练权重的情况下跨 trial 学习。它适用于 AlfWorld、HotPotQA、HumanEval、MBPP 等多种任务，并能叠加在 CoT、ReAct 等 actor 架构之上。

### 4.4.2 Voyager 的核心机制

Voyager 将 Reflexion 风格的经验循环扩展到 Minecraft 开放世界 lifelong learning。它由三部分组成：自动课程、技能库、迭代提示。自动课程根据 agent 当前状态、已完成任务、失败任务、背包、生物群系、装备等信息提出下一步探索目标；技能库把成功行为保存为可执行 JavaScript 函数，并用自然语言描述的 embedding 建立检索索引；迭代提示让 GPT-4 生成代码，在 Minecraft 环境中执行，并根据环境反馈、执行错误和 self-verification 不断修正。

Voyager 的闭环如下：

```text
World state / inventory / history
        ↓
Automatic curriculum 生成新任务
        ↓
Skill retrieval 检索相关 JS 技能
        ↓
GPT-4 生成 Mineflayer 代码
        ↓
环境执行 + 错误 + 自验证
        ↓
成功技能写入 skill library
        ↓
技能积累使更复杂任务可解
```

Voyager 与 Reflexion 的关键区别是，它不只保存语言反思，而是保存可复用的 executable skills。语言反思告诉 agent “下次应该注意什么”，代码技能则直接提供可调用行为，例如采集木头、制作工具、战斗、采矿等。技能库让能力复利更明显，也缓解了持续学习中的灾难性遗忘：旧技能不会因为新任务而被覆盖，而是作为库函数被检索和组合。

### 4.4.3 实验结果

Reflexion 在 HumanEval 上达到 91% pass@1，超过此前 GPT-4 80% 的结果；它在顺序决策、代码生成和语言推理任务中均展示了相对 baseline 的提升。其价值在于证明：不改变权重，仅通过语言记忆，也能显著提高 agent 的 trial-to-trial 表现。

Voyager 在 Minecraft 中获得 3.3 倍更多 unique items、2.3 倍更长探索距离，并且最高以 15.3 倍速度解锁关键科技树里程碑。更重要的是，Voyager 的技能库可以在新世界中 zero-shot 迁移到新任务，而 ReAct、Reflexion 等 baseline 在 Minecraft tech tree 任务上表现很弱或失败。这说明开放环境中的自我改进不能只靠“反思一句话”，还需要任务课程、可执行技能、环境反馈和自验证共同构成长期学习系统。

### 4.4.4 批判性分析

Reflexion 的优点是轻量、通用、成本低、易组合；缺点是反思质量完全受 LLM 自评能力限制。若 agent 错误归因，把失败总结成错误经验，memory 会把偏差带入下一轮。它也没有收敛保证，memory 容量有限，长任务中上下文会被反思占用。对于代码任务，自生成测试可能产生 false positive 或 false negative；review 中提到 MBPP Python 存在 16% false positive，说明没有可靠 evaluator 时，语言反思会被错误反馈误导。

Voyager 的优点是把经验从“文本建议”升级为“可执行技能库”，是 lifelong agent 的重要里程碑。但它同样有边界。第一，它高度依赖 GPT-4 代码能力与 Mineflayer API 抽象；如果环境没有这样的高层 API，代码行动空间就不成立。第二，Minecraft 虽开放但仍是受限环境，技能迁移到网页、科研或企业流程并不自动成立。第三，skill library 的质量控制、命名、检索、冲突处理和版本管理会随着规模增长变复杂。第四，self-verification 仍是 LLM judge，可能产生误判。

从更宏观角度看，Reflexion/Voyager 代表“经验驱动的自我改进”。它们不追求直接改变模型权重，而是改变 agent 的外部认知结构：memory、skills、curriculum、feedback。对于工业系统，这条路线尤其现实，因为企业很难频繁微调大模型，却可以持续积累失败案例、工具脚本、流程模板和审查规则。

## 4.5 Self-Rewarding LM：自奖励语言模型

### 4.5.1 核心机制

Self-Rewarding Language Models 关注的不是 agent scaffolding，而是训练范式。其核心思想是让同一个 LLM 同时作为 instruction-following model 和 reward model。模型生成候选回答，再用 LLM-as-a-Judge prompt 给自己的回答评分，构造偏好对，最后通过 Iterative DPO 训练下一代模型。与传统 RLHF 中固定、外部、冻结的 reward model 不同，Self-Rewarding LM 希望 policy capability 和 reward capability 一起提升。

流程如下：

```text
M0 基座模型
        ↓ IFT + EFT
M1：会回答，也会按 rubric 评价
        ↓
生成新 prompts + N 个候选回答
        ↓
模型自评，选最高分/最低分构造偏好对
        ↓
DPO 训练得到 M2
        ↓
重复：M2 生成、评价、训练 M3
```

系统初始使用 Llama 2 70B，并用 Open Assistant 的少量 instruction data 与 evaluation fine-tuning data 初始化。评价 prompt 使用五个加性标准：relevance、coverage、usefulness、clarity、expertise，并用多次采样平均降低自评分数方差。每轮从候选回答中选最高分作为 winning response、最低分作为 losing response，构造 AI Feedback Training 数据，再进行 DPO。

### 4.5.2 技术路线图

Self-Rewarding LM 的技术路线有两个关键点。第一是“自评能力需要先被种子化”。模型并非凭空发明 reward，而是先通过 EFT 学会 LLM-as-a-Judge 行为。第二是“偏好优化替代在线 RL”。DPO 比 PPO 更稳定、工程复杂度更低，而且 self-judge 只在数据生成阶段调用，不需要在训练每一步在线交互。

这条路线与 Reflexion/Voyager 的区别在于，Self-Rewarding 改变模型权重；与 DGM/ADAS/AlphaEvolve 的区别在于，它的候选对象是自然语言回答和偏好数据，而不是代码结构；与 RLHF 的区别在于，它试图突破 human reward bottleneck，让奖励模型不再固定在人类标注水平。

### 4.5.3 实验结果

根据 `raw-papers/2401.10020.md` 与 review，三轮 Iterative DPO 后，模型在 AlpacaEval 2.0 上超过 Claude 2、Gemini Pro 和 GPT-4 0613 等系统。Review 还记录了 reward modeling 能力的提升：pairwise accuracy 从 78.7% 到 80.4% 再到 81.7%。这支持作者的核心主张：模型不仅 instruction-following 能力提高，自评奖励能力也在提高。

从自进化角度看，这个结果非常重要。许多自进化系统都需要 evaluator，但 evaluator 往往固定、昂贵或受人类水平限制。Self-Rewarding LM 展示了一种可能：让 evaluator 本身也参与迭代，使“会做任务”和“会判断任务质量”共同进化。

### 4.5.4 批判性分析

Self-Rewarding LM 的最大风险是评价循环的自洽幻觉。模型既是选手又是裁判，可能学会迎合自己的评分 rubric，而不是真正提高质量。Review 中提到显著长度偏差：平均回答长度从 M1 的 1092 tokens 增加到 M3 的 2552 tokens。由于 LLM-as-a-Judge 往往偏好更长、更全面的回答，部分提升可能来自 length gaming，而非真实帮助性提升。

第二个风险是 reward hacking。固定 rubric 容易被优化，尤其当模型知道评价标准时，可能生成形式上覆盖、清晰、专家化，但事实性、简洁性或安全性并未同步提高的回答。第三，方法对数学、代码、逻辑推理的提升不如写作和开放问答明显，说明自评对可验证任务并不一定优于外部执行器。第四，只测试三轮，长期迭代是否继续提升、停滞、退化或模式崩溃仍未知。第五，训练 70B 模型多轮 DPO 成本高，且 Meta 未完全开源代码，复现门槛较高。

因此，Self-Rewarding LM 更像“自奖励方向的概念证明”，而不是安全完备的自我对齐方案。它给 Agent Evolution 的启示是：奖励模型不能永远固定，但自奖励也不能没有外部约束。更稳健的未来路线可能是“自奖励 + 可验证任务 + 人类抽检 + 对抗评估 + 长度/风格校正 + 多裁判集成”。

## 4.6 系统对比矩阵

### 4.6.1 对比表

| 系统 | 改进对象 | 核心方法 | 反馈/评估 | 主要结果 | 主要局限 |
|---|---|---|---|---|---|
| DGM | Agent 自身 Python 代码库 | 自我修改 + open-ended archive + benchmark selection | SWE-bench、Polyglot、沙箱执行 | SWE-bench 20.0%→50.0%；Polyglot 14.2%→30.7% | 成本高、benchmark 特异、安全风险、只改 scaffolding 不改权重 |
| ADAS | Agent 架构函数 | Meta Agent Search，在图灵完备代码空间搜索 agent design | ARC、DROP、MGSM、MMLU、GPQA 等验证/测试 | 自动发现设计优于强手工 baseline，并展示跨任务/跨模型迁移 | 依赖 meta agent 能力，验证噪声，复杂任务扩展性未知，代码安全不足 |
| AlphaEvolve | 待优化算法/程序 | LLM 作为进化 mutation operator，diff-based program evolution | 自动 evaluator：正确性、性能、资源指标 | 4×4 复数矩阵乘法 48 次标量乘法；优化数据中心调度、硬件电路、LLM 训练 | 需要可编程评估、Google 级算力、闭源难复现、Goodhart 风险 |
| Reflexion | 语言经验记忆 | Verbal RL：失败反馈→自然语言反思→episodic memory | 环境反馈、测试、问答评价、自生成测试 | HumanEval 91% pass@1；多任务相对 baseline 提升 | 反思质量不稳定，无收敛保证，memory 容量有限，self-test 误判 |
| Voyager | 开放环境技能库 | 自动课程 + 可执行 JavaScript skill library + 迭代提示 | Minecraft 环境反馈、执行错误、GPT-4 self-verification | 3.3× unique items，2.3× 距离，15.3× tech tree 解锁速度，技能可迁移 | 依赖 GPT-4 与 Mineflayer API，环境特异，技能库治理复杂，自验证误判 |
| Self-Rewarding LM | 模型权重与奖励能力 | 自生成候选 + 自评打分 + 偏好对 + Iterative DPO | LLM-as-a-Judge rubric，AlpacaEval/MT-Bench 等 | AlpacaEval 2.0 上超过 Claude 2、Gemini Pro、GPT-4 0613；pairwise accuracy 78.7→81.7 | 长度偏差、reward hacking、评价循环、推理任务提升有限、长期迭代未知 |

### 4.6.2 能力维度比较

从能力层级看，DGM 与 AlphaEvolve 最接近“代码级进化”：它们都把候选表示为可执行代码，并用自动评估选择。差别在于 DGM 的代码是 agent 自身，AlphaEvolve 的代码是外部算法。ADAS 处于二者之间：它生成 agent architecture code，但 meta agent 固定，因此自指性弱于 DGM。Voyager 与 Reflexion 是“经验级进化”：它们不改变底层模型，而改变外部记忆和技能。Self-Rewarding LM 是“权重级进化”：它通过 DPO 改变模型参数，但候选与评估都主要发生在文本偏好空间。

从方法维度看，可以形成一条从轻到重的谱系：Reflexion 最轻，只需 prompt 与 memory；Voyager 增加环境、代码行动空间和技能库；ADAS 增加 meta search 与代码生成；DGM 增加自我代码修改和 archive；AlphaEvolve 增加大规模进化与生产 evaluator；Self-Rewarding LM 增加多轮训练。轻量方法容易落地但能力上限有限，重量方法更强但成本、安全和复现门槛更高。

从评估维度看，最可靠的反馈来自可执行 evaluator。AlphaEvolve、DGM、Voyager 的一部分反馈都来自环境或程序执行，因此比纯 LLM-as-a-Judge 更可控。Self-Rewarding LM 的反馈更灵活，但也更容易自我欺骗。Reflexion 介于两者之间：如果 evaluator 是真实测试，则反思有价值；如果 evaluator 是不可靠自评，则记忆会被污染。ADAS 的风险在于验证集较小或噪声较大时 archive 可能保留偶然胜者。

### 4.6.3 共同设计模式

这些系统虽差异很大，但共享若干设计模式。第一，候选必须有外部化表示。DGM/ADAS/AlphaEvolve 用代码，Voyager 用 JavaScript skills，Reflexion 用语言 memory，Self-Rewarding 用偏好样本与权重更新。没有外部化表示，系统就无法保存、比较和复用改进。

第二，必须有某种选择压力。选择压力可以是 benchmark 分数、环境成功、程序性能、judge 分数或人类偏好。没有选择压力，生成候选只是随机发散；选择压力太窄，则会 Goodhart；选择压力太贵，则无法迭代。

第三，必须管理历史。Archive、skill library、episodic memory、program database、preference dataset 都是历史管理机制。自进化不是单次生成，而是把过去的成功与失败压缩成未来可用的结构。

第四，安全和回滚不是附属功能。越是自指性强的系统，越需要沙箱、权限隔离、不可修改评估器、版本记录、人工审查和回归测试。DGM 和 Absolute Zero 类系统暴露的沙箱/自改风险说明，自进化能力与安全风险会同步增长。

### 4.6.4 研究启示

综合来看，当前 Agent Evolution 的最强证据来自“代码 + 自动评估”范式。DGM 与 AlphaEvolve 说明，只要候选可执行、评估可靠、多代搜索可持续，系统就能产生真实改进。ADAS 说明 agent 架构本身也可以被搜索，而不是永远手工设计。Voyager/Reflexion 说明即使不改权重，外部记忆和技能库也能形成有效经验学习。Self-Rewarding LM 则说明 evaluator 本身也可能参与进化，但必须谨慎处理自评偏差。

未来系统很可能融合这些路线。例如，一个工业自进化 agent 可以用 Reflexion 收集失败反思，用 Voyager 式技能库保存可执行工具流程，用 ADAS 搜索新的 LangGraph/CrewAI workflow，用 DGM 式代码自改进改进自身工具层，用 AlphaEvolve 式 evaluator 对关键算法优化进行选择，再用 Self-Rewarding 式偏好训练提升语言交互质量。真正困难的不是把这些模块拼在一起，而是建立统一的评估、安全、成本和版本治理体系。

本章的最终结论是：Agent Evolution 已经不再是单一算法问题，而是“表示—生成—评估—记忆—选择—安全”六要素共同组成的系统问题。不同系统在六要素上的取舍决定了它们的能力边界。DGM 强在自指代码进化，ADAS 强在架构搜索，AlphaEvolve 强在可验证算法发现，Voyager 强在开放环境技能积累，Reflexion 强在轻量经验学习，Self-Rewarding LM 强在奖励模型与策略共同训练。它们共同勾勒出自进化 agent 的技术地图，也提醒我们：没有可靠评估和安全治理的“进化”，很容易从能力增长滑向指标投机或风险放大。
