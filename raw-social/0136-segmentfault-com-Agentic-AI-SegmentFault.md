# 人工智能 - 智能体时代的数据飞轮：Agentic小模型的迭代进化 - 阿里云大数据AI技术 - SegmentFault 思否

- URL: https://segmentfault.com/a/1190000047707856
- Platform: segmentfault.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

## 人工智能 - 智能体时代的数据飞轮：Agentic小模型的迭代进化 - 阿里云大数据AI技术 - SegmentFault 思否

**Source**: https://segmentfault.com/a/1190000047707856

---

# [智能体时代的数据飞轮：Agentic小模型的迭代进化](https://segmentfault.com/a/1190000047707856)

[阿里云大数据AI](https://segmentfault.com/u/elhix0bg)[4 月 13 日 浙江](https://segmentfault.com/a/1190000047707856/revision)
**
阅读 10 分钟

0
[https://segmentfault.com/a/1190000047707856#comment-area](https://segmentfault.com/a/1190000047707856#comment-area)

## 前言

随着大语言模型能力快速提升，智能体（Agent）正从“会对话”走向“能办事”，但落地层面仍面临现实矛盾：大模型 Agent 能力强，却推理成本高、时延大、部署门槛高；业界越来越关注更适合规模化应用的小模型，以及如何用可控成本训练出真正能事先规划、调用工具执行任务、并利用执行反馈调整规划的小模型。为此，我们基于 Qwen3 系列底座，推出一套面向 Agent 训练的开源成果，包括：

- 多款基于 Qwen3 的 Agentic 小模型
- 配套的 Agentic RL 合成训练数据集
- 数据合成与训练代码

与传统只开放模型权重不同，基于 EasyDistill 框架 （[https://github.com/modelscope/easydistill](https://link.segmentfault.com/?enc=l7M3I2BlRelxak0gu1S%2BGA%3D%3D.fXmGvMpPGUJVSLaVv9y8znNZLRBJOrjNASp%2BosJ3nV8PqxQM5HD7FdXshW968ggR)），**本次我们开放了模型背后的数据与合成数据的方法**，补齐开源生态在合成 Agentic 训练数据上的关键缺口。本次发布基于两项算法创新工作：

- 提出了一套面向 Agentic RL的“数据—环境—奖励”协同设计：通过制造信息差让任务天然要求查询、规划与工具使用，以一致性的合成环境替代昂贵且不稳定的真实 API，并用基于执行的，单个任务级的奖励rubrics提供稳定、客观的长链学习信号。
- 通过数据飞轮，将真实任务与合成任务结合，并从失败样本中持续挖掘并不断合成新的难样本，推动模型能力持续迭代。

## 基于数据飞轮的模型迭代方案

#### Mock Worlds：用合成任务、虚拟环境和结构化奖励训练 Agent

在 Agent 强化学习中，单纯依赖现有开源数据和真实 API 很难形成可持续的训练闭环：前者任务类型有限、难度偏低，模型很快学会固定模式，后续 RL rollout 的学习信号迅速减弱；后者虽然更接近真实场景，但工具调用成本高、反馈不稳定，也难以支持大规模训练。**Mock Worlds** 的目标，是为 Agent 训练构造一套**低成本、可扩展、可验证**的合成任务与交互环境，让小模型能够在虚拟世界中学习可迁移的真实技能。

我们将这一过程拆为三个关键部分：

##### 1. 任务合成：用信息差把“可执行流程”变成“必须交互的 Agent 任务”

如果直接把完整工具调用工作暴露给模型，任务往往会退化成“照着步骤执行”，模型几乎不需要主动提问、规划或根据反馈调整行为，RL 的学习空间会迅速收缩。为此，我们在任务构造中引入信息差（information gap）：先生成完整任务目标与解决流程，再将其重写为**信息不充分**的用户指令，并把决定性细节隐藏在用户私有上下文中。

这样，模型无法从初始指令直接推出最优动作，而必须通过**询问用户、调用工具、逐步恢复缺失信息**来完成任务。这个设计生成了真正需要多轮交互、长期规划和动态决策的 Agent 问题。
![](https://segmentfault.com/img/bVdok9p)

##### 2. 环境模拟：用模拟用户和模拟工具替代昂贵且不稳定的真实 API

任务有了之后，还需要一个能够支持大规模 rollout 的环境。真实 API 虽然真实，但存在成本高、吞吐低、接口不稳定、无法自由构造用户交互等问题，并不适合强化学习反复调用。为此，我们为每个合成任务配套构建合成环境（mock environment）：

- 由 **mock user** 根据私有上下文回答模型提问，提供任务所需但初始不可见的信息；
- 由 **mock tool** 模拟工具执行结果，支持模型进行多轮工具调用。

为了避免同一个调用在不同 rollout 中返回不一致结果、破坏 RL 稳定性，我们进一步引入**任务级一致性机制**：对每个任务维护轻量级的 tool call / response 映射，使相同语义的调用在同一任务中尽可能返回一致反馈。这样，虚拟环境既保留了交互性和多样性，又能提供足够稳定的训练条件。
![](https://segmentfault.com/img/bVdok9r)

##### 3. 奖励构造：从执行过程而非主观打分中提取 rubric-based rewards

多步工具使用任务的难点之一，是如何定义可靠奖励。直接让 LLM 对整条轨迹打分虽然方便，但主观性强、方差大，也难以支撑稳定训练。为此，我们不把奖励建立在“模型看起来做得好不好”上，而是建立在**任务执行中是否完成关键子目标、是否进行了必要交互、是否违反限制条件**这些可观测行为上。

具体来说，我们利用任务合成时产生的工作流（workflow ）作为参考，从教师模型的真实执行轨迹中抽取与之对齐的**高层子目标**，并结合任务中的**必需用户交互**与**禁止行为**，构建每个任务专属的 rubric。这样得到的奖励不是主观偏好分，而是基于执行（execution-grounded ）的过程监督：既能约束错误行为，又允许模型通过不同路径完成目标，更适合长链 Agent 学习。
![](https://segmentfault.com/img/bVdok9v)

通过这套“**任务合成—环境模拟—奖励构造**”的联合设计，Mock Worlds 不只是生成更多数据，而是构造出一类真正适合 Agent 强化学习的训练单元。它让小模型能够在低成本、稳定、可扩展的虚拟环境中学习查询、规划、工具使用与多轮交互能力，并把这些能力迁移到真实 Agent benchmark 和实际任务中。

#### 数据飞轮：从失败样本出发，持续生成更难、更有信息量的数据

在 Agent 训练中，一味扩增同质化数据很快会触顶：模型学会模式后，学习信号变弱、收益递减。数据飞轮的目标是把训练过程闭环化：每一轮从模型失败处出发，生成下一轮最值得学的 hard samples，使数据分布随模型能力同步演化。

##### 推理任务数据飞轮：错题驱动的 hard-sample 迭代

![](https://segmentfault.com/img/bVdok9z)

推理飞轮面向数学/科学类任务，每轮训练后收集模型做错的样本作为 hard samples，并进行三步扩增：

1、Self-instruct 扩增（结构与难度梯度）  
教师模型对错题生成更难变体：替换关键数值、增加约束、引入新概念、把简单推理升级为多步推导等。重点不是简单“变难”，而是让题目结构发生变化，迫使模型学习可迁移的推理策略。

例如，给定输入数学题：
**Find real values of the parameter $a$ for which the inequality $x^{2}-(a+1) x+a+1&gt;0$ is true for all values of $x$ satisfying the condition $|x| \\leqslant 1$.**

扩增的一种结果为：
**Find all real numbers $a$ for which the cubic inequality $x^{3}-3x^{2}+(a^{2}-4)x+5a+6&gt;0$ is true for every $x$ satisfying $|x|\\leq 1$.**

2、Persona 注入（语境多样性）  
将部分题目改写到不同应用领域语境，增强上下文分布多样性，让模型学会从冗余叙事中抽取变量与约束，更接近真实表述。

例如，上述数学题进行 Persona 注入的示例为：
As a parent of a gymnastics competitor, you admire your rival coach's innovative training methods and want to adopt their "precision-focused" regimen for your child's upcoming national competition. You can adjust the weekly intensity of this new regimen by `a` extra hours (where `a ≥ 0`), but the routine must remain robust under performance pressure.  On competition day, your child's execution quality deviation `x` will range from `x = -1` (severe error, e.g., fall) to `x = 1` (flawless execution), depending on nerves. The judges' score (in points) is modeled by:  $S(x) = x^{3} - 3x^{2} + (a^{2} - 1)x + 5a + 10$. To ensure your child avoids disqualification, the score must stay strictly above the minimum passing threshold (equivalent to 0 in this model) for every possible execution outcome where `|x| ≤ 1`.  Find all nonnegative real numbers `a` for which `S(x) > 0` holds for every `x` satisfying `|x| ≤ 1`.

3、多模型一致性过滤（自动验题降噪）
由多个强模型独立求解候选题，仅保留答案一致样本，以一致性近似“自动验题”，减少错误标注与低质样本对训练的干扰。

最终形成闭环：错题 → 扩增 → 过滤 → 训练 → 新错题，每轮都会涌现新的失败模式并被进一步放大与学习。

##### 虚拟任务数据飞轮：用 Behavior Tree 把线性流程升级为多分支决策

虚拟任务真正训练的是“流程鲁棒性”：同一目标在不同状态下需要不同策略；用户可能含糊甚至诱导，agent 必须核验关键事实并选择正确分支。我们将虚拟任务飞轮分为四个阶段：
![](https://segmentfault.com/img/bVdok9A)

###### Phase 1：线性任务初始化

起步阶段使用虚拟任务的轨迹数据，其任务通常是单一路径、线性流程，例如机票预订可抽象为：

- 查询（Query）→ 预订（Book）→ 确认（Confirm）

环境稳定、用户意图清晰（“帮我订去北京的机票”），这一阶段的价值是让模型掌握工具语义与基本调用技能。但它的局限也明显：路径确定、几乎不需要条件判断，模型学不到状态依赖的规划与鲁棒性，因此需要结构扩展。

###### Phase 2：行为树扩展

每轮RL之后，使用教师模型在原流程中注入条件分支：基于不同环境状态，生成替代子路径，把线性链路扩展成行为树（behavior tree）。比如把“有票（Available）”替换为“售罄（Sold out）”，原来的“预订→确认”就会扩展出新分支：改搜高铁、查询邻近机场、改签到其他日期等。这样任务从“只有一条正确路径”升级为一个需要根据状态选择分支的 MDP：同一个用户目标，在不同状态下必须走不同策略。

###### Phase 3：通过回译生成新任务

有了行为树之后，还需要把“分支”变成可训练的“任务”，我们采用“back-translation（回译）”把某个分支变成“必经之路”。做法是：对行为树中选定的某条分支，先反推触发条件（例如触发“搜高铁”的条件是“航班全部售罄”），再据此构造一个新的任务实例：

- 新环境状态：如“航班售罄”
- 新用户指令：如“我今晚必须到北京”
- 让 agent 必须把两者综合起来，做出正确下一步行动（例如转而搜索高铁/替代交通）

###### Phase 4：对抗式模拟用户干预

为了更贴近现实的不确定性与干扰，系统还引入对抗式 mock user：它会挑选一条“hack path”，主动把 agent 往错误分支上带。例如“航班延误”场景下，赔付分支可能取决于会员等级：金卡可现金赔偿、普通会员只能代金券。对抗用户会故意声称“我应该拿现金”，即使他其实是普通会员；此时 agent 必须通过工具查询核验会员状态，并按正确分支执行。

## 实验效果评测

从整体趋势看，数据飞轮带来的提升呈现出两个清晰特征：跨轮次的持续增益，以及对小模型更显著的边际改善。随着“失败样本 → 再合成 → 再训练”的闭环不断推进，模型暴露的失败模式会持续迁移：在早期，主要问题集中在工具格式不规范、关键参数缺失、基础流程不完整等“能否跑通”的层面；进入中后期后，错误更多转向“能否在复杂状态下做对决策”。数据飞轮的关键价值在于，它能把这些新出现的薄弱点自动转化为下一轮更有信息量的训练样本，避免模型在同质化数据上“学到饱和”，使提升可以沿迭代持续发生。

从模型适配性来看，我们在不同参数规模与不同结构的底座上（包括 MoE 架构）都观察到一致的收益，这说明提升并非来自某个单点技巧，而是由“ReAct 轨迹数据形态 + 真实/虚拟任务联合闭环 + 分场景 Reward”构成的系统性组合。更重要的是，实验中多次出现“小模型逼近甚至超过更大通用基座”的现象，反映出在 Agent 场景里决定上限的往往不是参数量本身，而是模型是否系统性学习过可执行、可纠错、可泛化的任务闭环。

下表展示了 AgenticQwen-30B-A3B（以 Qwen3-30B-A3B 为底座）在多轮数据飞轮训练中，TAU-2 Bench 与 BFCL-V4-Multi-turn 两个 Agent 基准上的提升趋势。我们可以看到，随着轮次推进，模型不仅整体分数上升，也在如“漏工具（Miss Func）”“漏参数（Miss Param）”“长上下文（Long Context）”等更贴近真实落地痛点的子项上获得改进，体现出飞轮对“复杂流程鲁棒性”的持续强化。
![](https://segmentfault.com/img/bVdok9D)

下表进一步给出了本次开源的AgenticQwen 模型在 Agent 能力基准上的整体效果，并与原始 Qwen3 底座以及面向 Agent 场景的专用小模型 ToolStar-8B/14B 进行对比。整体结论是：在相近甚至更小的参数规模下，AgenticQwen 系列在多任务、多轮工具调用的综合指标上取得了更强的可用性，验证了“轨迹闭环训练”对 Agent 落地能力的高密度增益。
![](https://segmentfault.com/img/bVdok9E)

此外，在 Reasoning 与 Deep Search 场景中，模型同样表现出显著提升：一方面，推理类基准的提升说明模型不仅学会了工具调用的“格式”，也学会了在多步过程中维持正确中间状态并完成可验证推导；另一方面，检索类基准的改进表明模型在多跳查询规划、证据整合与长上下文阅读上更稳定，能够更接近真实 Agent 的端到端工作方式。
![](https://segmentfault.com/img/bVdok9G)
此外，我们也在 EasyDistill 框架中完整开源了 Agent 轨迹构建的 Pipeline，参考这里（[https://github.com/modelscope/easydistill/tree/main/easydistill/agentkd](https://link.segmentfault.com/?enc=QdP7Nroxp4qnu1SVmH8QUg%3D%3D.KoZzpwtTwS5Ec7YhmERYWTPcwotcECM2hI4PONUFB4ef5d4qVUct4h1WTOGGWTGfGJFioGI95076oVE3%2Bmajw2HuBRz0C60INGwfwFTqUu0%3D)）。

## 资源下载

为方便社区进行二次开发，我们将本次训练得到的 AgenticQwen 系列模型以及合成的 Agent 任务轨迹数据集在 ModelScope 和 HuggingFace 进行开源发布。你可以直接通过开源社区进行下载。

本次开源的模型覆盖不同参数规模与架构形态，均面向 ReAct 轨迹、���轮工具调用与复杂流程任务进行了专门训练与对齐。推荐使用 ModelScope 查看模型配置、推理方式与使用示例：

```
from modelscope.hub.snapshot_download import snapshot_download

# 选择填写
model_id = "PAI/AgenticQwen-8B"
model_id = "PAI/AgenticQwen-30B-A3B"

model_dir = snapshot_download(model_id="<model_id>", cache_dir="./AgenticQwen")
print(model_dir)
```

除模型外，我们也同步开源了一个合成 Agent 任务数据集，数据提供必要的元信息字段，便于直接用于RL训练。建议用户使用 modelscope 命令行工具拉取：

```
pip install modelscope -U
modelscope download --dataset PAI/AgenticQwen-Data --local_dir ./AgenticDatasets
```

数据样本的示例信息如下：

```
- User prompt: Natural-language user request initiating the workflow (e.g., “switch my hydro service to my new place…”).
- System prompt (SOP): Agent instructions describing scope, required checks, allowed/disallowed actions, refusal/transfer conditions, and interaction requirements (e.g., must verify identity first, must ask clarifying questions, user confirmation required before writes).
- System prompt (tool definitions): Function/tool schemas provided to the agent (names, descriptions, parameters, required fields, and structured outputs), typically embedded in a ... block.

The above is the initial input of the agent.

- Task background: Additional scenario context and latent details (IDs, dates, proof tokens, constraints, and “only reveal if asked” fields) used to support multi-turn clarification and to test whether the agent requests missing parameters rather than guessing.
- User escape / adversarial strategy: How the user may pressure the agent to bypass required checks or violate policy.

The above is the input of the LLM-simulated user.

- Environment states / expected tool returns: A structured tool_return_expected section providing the expected outputs for:
a normal_path (compliant sequence, often starting with a query/validation tool), and sometimes
a hack_path (non-compliant sequence illustrating policy-violating tool use), including expected failure responses from tools when prerequisites are not met.

The above is the input of the LLM-simulated tools.

- Rubrics / success criteria: Explicit pass/fail conditions tied to verifiable state changes (e.g., which tools must or must not be called; database state must remain unchanged).

The above is the evaluation criteria used for reward computation.
```

## 本文小结

本文围绕“智能体时代的数据飞轮”，系统介绍了面向 Agentic 小模型的轨迹数据构建与训练方法：以 ReAct 轨迹为核心格式，融合真实任务与虚拟任务环境，通过错题驱动的 hard sample 扩增、行为树（Behavior Tree）扩展等机制持续产出更难、更有信息量的数据，并在强化学习阶段结合真实/虚拟任务特点设计差异化 Reward，从而推动小模型在多步推理、工具调用与长流程决策上的能力跨迭代进化。实验结果表明，基于该流程训练得到的 AgenticQwen 系列模型在多项基准上取得显著提升，验证了数据飞轮在 Agent 训练中的有效性与可持续性。未来我们将进一步开源相关资源，在 EasyDistill 框架 （[https://github.com/modelscope/easydistill](https://link.segmentfault.com/?enc=1D%2FesGIjeRe0JqAEddv1Xg%3D%3D.XW%2BjA3PmU%2BRbougatUS%2B9%2Bg94wzsxe9kwQiH4g1IESlcRarVOPh0CLswOSAU0rIt)）完善 Agent 模型蒸馏工具链，期待与社区共同推进 Agentic 小模型的工程化落地与生态发展。

## 相关参考工作

PAI 团队模型蒸馏相关论文：

- Yuanjie Lyu, Chengyu Wang, Lei Shen, Jun Huang, Tong Xu. Mock Worlds, Real Skills: Building Small Agentic Language Models with Synthetic Tasks, Simulated Environments, and Rubric-Based Rewards. **ACL 2026**
- Wenrui Cai, Chengyu Wang, Junbing Yan, Jun Huang, Xiangzhong Fang. Reasoning with OmniThought: A Large CoT Dataset with Verbosity and Cognitive Difficulty Annotations. **ACL 2026**
- Yuanjie Lyu, Chengyu Wang, Jun Huang, Tong Xu. From Correction to Mastery: Reinforced Distillation of Large Language Model Agents. arXiv preprint
- Chengyu Wang, Junbing Yan, Wenrui Cai, Yuanhao Yue, Jun Huang. EasyDistill: A Comprehensive Toolkit for Effective Knowledge Distillation of Large Language Models. **EMNLP 2025**
- Wenrui Cai, Chengyu Wang, Junbing Yan, Jun Huang, Xiangzhong Fang. Thinking with DistilQwen: A Tale of Four Distilled Reasoning and Reward Model Series. **EMNLP 2025**
- Wenrui Cai, Chengyu Wang, Junbing Yan, Jun Huang, Xiangzhong Fang. Enhancing Reasoning Abilities of Small LLMs with Cognitive Alignment. **EMNLP 2025**
- Chengyu Wang, Junbing Yan, Yuanhao Yue, Jun Huang. DistilQwen2.5: Industrial Practices of Training Distilled Open Lightweight Language Models. **ACL 2025**
- Yuanhao Yue, Chengyu Wang, Jun Huang, Peng Wang. Building a Family of Data Augmentation Models for Low-cost LLM Fine-tuning on the Cloud. **COLING 2025**
- Yuanhao Yue, Chengyu Wang, Jun Huang, Peng Wang. Distilling Instruction-following Abilities of Large Language Models with Task-aware Curriculum Planning. **EMNLP 2024**

[阿里云](https://segmentfault.com/t/%E9%98%BF%E9%87%8C%E4%BA%91)[人工智能](https://segmentfault.com/t/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD)

阅读 714

[发布于 4 月 13 日](https://segmentfault.com/a/1190000047707856/revision)

---

[https://segmentfault.com/u/elhix0bg](https://segmentfault.com/u/elhix0bg)
[阿里云大数据AI](https://segmentfault.com/u/elhix0bg)

15 声望

15 粉丝

分享阿里云计算平台的大数据和AI方向的技术创新、实战案例、经验总结。

---

« 上一篇
[PAI Physical AI Notebook详解7：Newton新物理引擎与Rerun轻量可视化](https://segmentfault.com/a/1190000047701762)

下一篇 »
[基于PAI的Agent数据构造与模型蒸馏解决方案](https://segmentfault.com/a/1190000047707891)

[https://segmentfault.com/a/1190000047707856#comment-area](https://segmentfault.com/a/1190000047707856#comment-area)

### 引用和评论

**被 1 篇内容引用**

- [基于PAI的Agent数据构造与模型蒸馏解决方案](https://segmentfault.com/a/1190000047707891?utm_source=sf-backlinks)

**推荐阅读**

[你的“数字同事”来了：DataWorks Data Agent 全面升级阿里云大数据AI](https://segmentfault.com/a/1190000047780608?utm_source=sf-similar-article)[ai 时代，或者说下一个 xxx 时代，作为程序员可以创业哪些组件占据一席之地? 历代思路整理总结rabbitcoder赞 1阅读 2.1k](https://segmentfault.com/a/1190000047629249?utm_source=sf-similar-article)[OpenAI vs Anthropic vs Google：2026年AI大模型竞争格局ViVaAPI赞 1阅读 6.2k](https://segmentfault.com/a/1190000047691901?utm_source=sf-similar-article)[2026年全网最全大模型API横评：Claude / GPT / Gemini 等8 大厂商 20+ 主流模型七牛云行业应用阅读 10.2k](https://segmentfault.com/a/1190000047676047?utm_source=sf-similar-article)[AI短剧全流程生成技术指南：从故事到成片的高效落地AIAgent研究赞 1阅读 4.7k](https://segmentfault.com/a/1190000047614821?utm_source=sf-similar-article)[LangGraph vs Semantic Kernel：状态图与内核插件的两条技术路线对比deephub赞 1阅读 1.3k](https://segmentfault.com/a/1190000047649978?utm_source=sf-similar-article)[OpenAI Codex 安装与使用全指南：API Key 获取与自定义 API 配置与实战排错uiuihaoAICG阅读 9.7k](https://segmentfault.com/a/1190000047687741?utm_source=sf-similar-article)

**0 条评论**
[得票](https://segmentfault.com/a/1190000047707856?sort=votes)[最新](https://segmentfault.com/a/1190000047707856?sort=newest)

![头像](https://image-static.segmentfault.com/317/931/3179314346-5f61e47221e07)

评论支持部分 Markdown 语法：`**粗体** _斜体_ [链接](http://example.com) `代码` - 列表 > 引用`。你还可以使用 `@ `来通知其他用户。
