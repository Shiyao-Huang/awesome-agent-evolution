---
title: "第1章：引言"
content_timestamp: 2026-05-26
collected_at: 2026-05-26T20:00:00+08:00
time_slice: 2026-05
chapter: 1
language: zh-CN
source_corpus:
  raw_papers: raw-papers/
  paper_reviews: paper-reviews/
  research: research/
  english_source: paper-drafts/ch1-intro.tex
output_type: survey_chapter
---

# 第1章：引言

> 撰写时间戳：2026-05-26T20:00:00+08:00
> 英文真实源：`paper-drafts/ch1-intro.tex`
> 素材来源：`raw-papers/`、`paper-reviews/`、`research/` 中截至 2026-05-26 已收集的 Agent Self-Evolution 论文。

## 1.0 本章概述

Agent Evolution，或称 AI 自演化（AI Self-Evolution），正在成为大模型智能体研究中最重要的方向之一。它的核心问题不是"如何让一个模型在一次调用中回答得更好"，而是"如何让一个由大模型、工具、记忆、环境交互、评估器和执行代码组成的智能体系统，在运行过程中不断产生可验证的改进"。

AI Self-Evolution 不是单一算法，而是一个汇聚区（convergence zone）：语言智能体推理、AutoML 与神经架构搜索、进化计算、可验证反馈强化学习、程序合成和开放式科学自动化正在共享概念。从 2022 年 STaR 把推理链生成、筛选和微调组织成最早的自举闭环，到 2023 年 Reflexion、Self-Refine、Voyager 引入反思、反馈、技能库，到 2024 年 Self-Rewarding、ADAS、Gödel Agent、Agent Symbolic Learning 推动自评估、递归自修改和自动化架构搜索，再到 2025—2026 年 DGM、AlphaEvolve、Absolute Zero、ReVeal 把自演化扩展到代码级自修改、零数据自博弈和科学算法发现——这个领域正在快速形成。

## 1.1 研究背景：从静态 AI 到自演化 AI

### 1.1.1 静态系统假设

早期人工智能的评估范式建立在静态假设上。Turing 1950 年的提案将"机器能否思考"替换为一个操作性的模仿游戏——智能由行为判断 [Turing 1950]。此后大多数 benchmark 继承了这个框架：系统被训练或编程，放置在接口后面，由输出评判。部署后的模型被表示为函数 $f_\theta: \mathcal{X} \to \mathcal{Y}$，核心研究问题是如何从数据集 $D$ 学习 $\theta$。

这个静态假设塑造了现代机器学习的组织方式：训练阶段产生参数 $\theta$，验证阶段选择超参数，测试阶段估计泛化。即使强调交互的强化学习，在报告 benchmark 分数时也通常冻结策略。这对科学可复现性有价值，但也把 AI 系统的智能窄化为最终快照，而非产生和持续改变该快照的过程。

### 1.1.2 自我指涉与 Gödel 机器理想

Schmidhuber 的 Gödel 机器是自改进系统的形式化原型 [Schmidhuber 2003]。它描述一个包含自身软件表示和证明搜索器的自指系统——系统只在证明某个自修改会提高期望效用后才执行重写。Gödel 机器的理论美感在于把自修改视为理性动作：不只是变异自己，而是要求证明变异有益。

现代系统将形式证明放宽为经验验证。Gödel Agent 调用 Gödel 机器的自指灵感，但通过 Python monkey patching 和任务验证实现运行时自修改 [Yin et al. 2024]。DGM 结合自指雄心与达尔文搜索：基础模型提出 agent 代码变更，archive 保留在 benchmark 上改进的变体 [Zhang et al. 2025]。这些系统不提供 Schmidhuber 构造的数学保证，而是用经验选择换取可扩展性。

从证明到评估的转变是实用自进化的核心妥协。Reflexion 在失败 episode 后存储语言反馈 [Shinn et al. 2023]；Self-Refine 迭代地批判和修订输出 [Madaan et al. 2023]；Agent Symbolic Learning 对提示词、工具和管线产生语言梯度 [Zhou et al. 2024]；AlphaEvolve 使用自动化评估器选择程序变体 [Novikov et al. 2025]；Absolute Zero 使用代码执行器验证自生成任务 [Zhao et al. 2025]。统一模式不是证明携带自重写，而是**反馈携带自修改**。

### 1.1.3 AutoML、NAS 到智能体架构搜索

AutoML 自动化学习系统的设计流程：数据预处理、特征工程、架构选择、超参数调优。NAS 把问题聚焦到架构搜索。NASNet [Zoph et al. 2018]、DARTS [Liu et al. 2018] 和 Regularized Evolution [Real et al. 2019] 表明搜索可以发现与人类设计竞争的架构。

这些工作之所以是自进化的前身而非实例，因为搜索通常是外部过程——控制器提出架构，训练循环评估，工程师部署胜出者。当搜索目标是智能体系统而非神经网络时，类比变得更紧密。ADAS 把自动化智能体设计框架化为程序搜索 [Hu et al. 2024]；Agent Symbolic Learning 把智能体视为符号网络，其可学习元素是提示词、工具和管线 [Zhou et al. 2024]。

进化计算深化了这条线。NEAT 同时进化拓扑和权重 [Stanley 2002]；Novelty Search 论证发散探索可以比直接目标优化更有生产力 [Lehman & Stanley 2011]；MAP-Elites 和质量多样性方法维护高性能多样化解的 archive [Mouret & Clune 2015]；POET 在开放式过程中协同进化智能体和环境 [Wang et al. 2019]。现代自进化智能体复用这些思想，但用 LLM 引导的语义变异替代随机或手工编码的变异算子。

DGM 是最清晰的合成：维护 agent 实现的 archive，采样父 agent，让基础模型修改代码，评估子 agent，将改进变体加入 archive。其报告的 SWE-bench 从 20.0% 提升到 50.0%、Polyglot 从 14.2% 提升到 30.7% 表明 agent 架构本身可以成为累积进化对象。AlphaEvolve 提供工业级对应：Gemini 驱动的进化编码智能体，报告矩阵乘法、数据中心调度、芯片设计和 LLM 训练 kernel 的改进。

### 1.1.4 大语言模型革命作为自进化的使能器

大语言模型的崛起改变了自进化的实际可行性。提示词是文本，工具描述是文本，代码是文本，benchmark 报告是文本，堆栈跟踪是文本，科学论文是文本——许多架构决策也可以序列化为文本。LLM 因此充当通用变异算子：可以提出新提示词、编辑 Python 类、设计测试、总结失败、合成训练样本或解释之前尝试为何失败。

这个能力将语言变成自修改的通用接口。当这些提议与自动化评估器（单元测试、代码执行器、人类偏好模型、数学验证器、web 任务成功标准或同行评审标准）配对时，结果就是自修改和选择的实用循环。

但 LLM 不消除评估的需求。它们使变异廉价且语义丰富，但也会幻觉、过拟合评分标准、利用漏洞。因此最强系统配对 LLM 生成与外部反馈：代码执行器、测试套件、benchmark harness、环境奖励。Absolute Zero 的零数据自博弈依赖代码执行器验证提议的任务和解决方案；AlphaEvolve 依赖自动化评估器。教训是：**LLM 使自进化成为可能，验证器使它累积**。

### 1.1.5 从孤立技巧到自改进系统

五个递进步骤刻画了领域发展：

1. **输出级精炼**：Self-Refine 通过生成-批判-精炼迭代改进候选输出。Reflexion 通过存储先前失败的语言教训改进未来尝试。
2. **组件级优化**：Agent Symbolic Learning 把提示词、工具和管线视为可学习符号权重。DSPy 风格的提示词编译和文本反向传播属于同一家族。被改进的对象不只是答案，而是智能体产生答案的过程。
3. **架构与代码级进化**：ADAS 使用元智能体编写新 agent。Gödel Agent 修改运行时逻辑。DGM 通过 archive 进化 agent 实现。AlphaEvolve 在规模上进化算法代码。这些系统把软件视为智能的基因组。
4. **权重与课程级自改进**：RISE 通过多轮强化学习训练内省和修订推理。RAGEN 适配 RL 到多轮智能体并警告 Echo Trap。Absolute Zero 让模型在可验证奖励下提议任务并解决。ReVeal 协同优化代码生成和自验证。
5. **生命周期级自动化**：AI Scientist 尝试自动化科学研究生命周期——想法生成、实验设计、代码执行、论文写作和同行评审。

## 1.2 核心定义：形式化 AI 自进化

**AI Self-Evolution** 定义如下：

> 一个 AI 系统 $S$ 是自进化的，如果它能通过反馈驱动循环修改自身一个或多个操作组件——包括提示词、记忆、工具、代码、架构、数据课程或权重——以改进目标任务性能，受一个接受机制决定候选修改是否保留。

此定义强调五个要素：**系统边界**（指定什么算"自身"）、**可变组件**（指定什么可以变）、**反馈**（提供成功或失败的证据）、**修改算子**（提议变更）、**保留**（决定变更是否成为未来系统的一部分）。

### 1.2.1 形式化表示

令 AI 系统表示为：

$$S_t = (\mathcal{C}_t, \mathcal{M}_t, \mathcal{E}, \mathcal{U}, \mathcal{G})$$

其中 $\mathcal{C}_t$ 是时刻 $t$ 的可变组件，$\mathcal{M}_t$ 是记忆或状态，$\mathcal{E}$ 是环境或任务分布，$\mathcal{U}$ 是目标或效用准则，$\mathcal{G}$ 是治理约束（安全策略、沙箱限制、回滚规则）。可变组件集包括：

$$\mathcal{C}_t = \{P_t, R_t, T_t, A_t, K_t, D_t, W_t\}$$

$P_t$=提示词，$R_t$=推理例程，$T_t$=工具，$A_t$=agent 架构，$K_t$=源代码，$D_t$=数据/课程，$W_t$=神经权重。

进化 episode 中：

$$\tau_t = \mathrm{Run}(S_t, x), \quad F_t = \mathrm{Feedback}(\tau_t, x, \mathcal{U})$$
$$\Delta_t = \mathrm{Modify}(S_t, F_t, \mathcal{M}_t), \quad S_{t+1} = \mathrm{Accept}(S_t, \Delta_t, F_t, \mathcal{G})$$

性能改进目标：$\mathbb{E}[U(S_{t+1}, x)] > \mathbb{E}[U(S_t, x)] - \epsilon$

### 1.2.2 自进化的八个层次

1. **输出级进化**：系统在任务 episode 内修订候选输出（生成-批判-精炼循环）
2. **记忆级进化**：系统存储反馈、反思或经验以改变未来行为
3. **提示词/工具级进化**：系统编辑提示词、工具描述或符号参数
4. **架构级进化**：系统改变控制流、模块组合或智能体拓扑
5. **代码级进化**：系统编写或修补实现自身或后代的可执行源代码
6. **数据/课程级进化**：系统生成或选择塑造未来学习的任务
7. **权重级进化**：系统使用自生成或自中介经验的反馈更新神经参数
8. **种群级进化**：系统维护多个变体并随时间选择

这些层次不互斥。ReVeal 结合代码生成、自验证、工具反馈和强化学习。Absolute Zero 结合任务生成、求解、可执行验证和权重更新。DGM 结合代码级修改与种群级归档。

### 1.2.3 概念边界

AI Self-Evolution 与相邻概念的区别：

| 概念 | 主要变化对象 | 典型反馈 | 与自进化的区别 |
|------|-------------|---------|--------------|
| 持续学习 | 任务流上的神经参数 | 新数据、任务标签、回放损失 | 通常使用固定更新规则 |
| 在线学习 | 每个样本后的预测器状态 | 即时损失或奖励 | 关注固定算法下的遗憾 |
| 自监督学习 | 表示和权重 | 自动生成标签 | 监督自动但系统不一定修改自身操作组件 |
| 元学习 | 适应过程或初始化 | 训练任务分布 | 常离线学习；自进化强调运行时反馈循环 |
| AutoML/NAS | 模型管线或架构 | 验证性能 | 通常为外部设计优化器 |
| 强化学习 | 策略参数 | 环境奖励 | RL 是优化基底；自进化额外关注组件和过程的自修改 |

判定规则：如果系统仅改变输出，是适应。如果改变影响未来输出的内部状态，可能是学习。如果在反馈和保留下改变学习、推理、行动或设计后继者的组件或过程，是自进化。

## 1.3 Five Evolution Loops 框架

### Loop I：反射性输出与记忆进化

系统通过批判输出、存储反馈和调节未来尝试来改进。Self-Refine 和 Reflexion 是代表 [Madaan 2023, Shinn 2023]。修改的组件通常是当前输出、情节记忆或反思缓冲区。此循环低成本易部署，但受上下文长度、自批判质量和评估器可靠性限制。

**证据**：Self-Refine 在代码优化、数学推理、情感反转、对话、诗歌、可读性和约束生成上报告约 20% 平均改进 [Madaan 2023]。Reflexion 在 HumanEval、AlfWorld 和 WebShop 上报告大幅改进 [Shinn 2023]。

### Loop II：符号组件进化

系统把提示词、工具、工作流和管线视为可学习符号参数。Agent Symbolic Learning 是核心例子：定义语言损失、语言梯度和提示词/工具/管线节点的优化器 [Zhou 2024]。DSPy 风格提示词编译和文本反向传播也属于此类。此循环连接梯度学习和智能体工程。

**证据**：在 HotPotQA、MATH、HumanEval、软件开发可执行性和创意写作上报告改进 [Zhou 2024]。

### Loop III：验证驱动代码进化

系统生成、测试、修复和保留代码。SelfEvolve 使用自生成知识和解释器错误 [Jiang 2023]；ReVeal 协同优化生成和自验证 [Jin 2025]；AlphaEvolve 使用自动化评估器选择算法程序 [Novikov 2025]。此循环强大因为代码可以机械检查。

**证据**：DGM 报告 SWE-bench 从 20.0%→50.0%，Polyglot 从 14.2%→30.7% [Zhang 2025]。AlphaEvolve 报告矩阵乘法、数据中心调度、芯片设计和注意力 kernel 的改进。

### Loop IV：架构与智能体设计进化

系统搜索智能体架构、控制流、工具使用和自修改代码。ADAS、Gödel Agent 和 DGM 是代表 [Hu 2024, Yin 2024, Zhang 2025]。修改的组件是智能体本身。最接近直觉上的"自我重新设计"。

**证据**：ADAS 报告自动发现的 agent 可以超越手工设计基线并跨领域/模型迁移 [Hu 2024]。

### Loop V：课程、权重与种群进化

系统改变数据分布、训练课程、神经权重或种群 archive。RISE、RAGEN、Absolute Zero、DGM 和 AlphaEvolve 都实例化此循环的部分。可以产生比仅提示词方法更深的行为变化，但需要仔细的奖励设计和防崩溃保护。

**证据**：Absolute Zero 在零外部数据条件下报告推理改进 [Zhao 2025]。AlphaEvolve 在工业算法发现上报告突破 [Novikov 2025]。

### 统一公式

$$\text{SelfEvolution} = \text{Observe} \to \text{Interpret} \to \text{Modify} \to \text{Verify} \to \text{Retain}$$

每个循环在修改的表示和使用的验证器上不同。框架不是论文的分类，而是机制的分类——单篇论文可能实例化多个循环。

## 1.4 研究者网络与学术谱系

领域存在三条汇聚谱系：

1. **进化计算谱系**：Risto Miikkulainen → Kenneth Stanley → Joel Lehman → Jeff Clune，经 NEAT、Novelty Search、Quality Diversity、POET、AI-GAs 到 ADAS、DGM、AlphaEvolve。Clune 团队出现在 ADAS、DGM、AI Scientist 和开放式进化 AI 中。

2. **语言智能体推理谱系**：Karthik Narasimhan → Shunyu Yao → Noah Shinn，经 ReAct、Tree of Thoughts、Reflexion、SWE-bench、SWE-agent。Yao 和 Narasimhan 连接 ReAct、Reflexion、ToT、SWE-agent 和更广泛的语言智能体评估。

3. **LLM 自改进谱系**：Aman Madaan、Peter Clark、Sean Welleck、Eric Zelikman，经 Self-Refine、STaR、Self-Rewarding Models 和 Constitutional Self-Critique。

Google DeepMind 贡献 FunSearch 和 AlphaEvolve；Microsoft Research 贡献 ReVeal；清华/LeapLabTHU 贡献 Absolute Zero；AIWaves 和浙江大学贡献 Agent Symbolic Learning。

## 1.5 评估原则

自进化系统的评估必须是时间性的：

1. **轨迹报告**：报告分数序列、失败修改、接受修改、计算成本和评估方差
2. **保留演化**：区分进化开发任务和保留评估任务
3. **验证器审计**：评估器是教师、法官和选择环境——如果评估器错误，进化将优化错误
4. **成本归一化改进**：改进/计算量、改进/token、改进/环境步
5. **安全保留**：候选修改不应仅因任务分数提高而被保留
6. **多样性与新颖性核算**：开放式系统可能发现不立即改进主指标的有用 stepping stones

## 1.6 安全与治理

安全不是后续章节的附属，而是定义的一部分。自进化系统没有治理不是一个不完整的产品，而是一个规格不明确的优化器。

治理层次：
- **范围**：智能体应知道允许修改哪些组件
- **来源**：每个修改应可归因——什么反馈触发了它、什么模型提议了它、什么文件改变了、什么测试运行了
- **回滚**：系统应能恢复有害修改
- **人类监督**：分层方法——低风险记忆条目自动保留，提示词/工具编辑验证门控，代码补丁沙箱门控，权限/安全/部署变更人类审批
- **多智能体**：多个智能体修改共享资源时需要所有权、锁定、审查和独立评估

## 1.7 统一词汇表

| 术语 | 含义 |
|------|------|
| Substrate（基底） | 被修改的表示：文本、记忆、提示词、工具 schema、图、代码、任务分布、权重、种群 |
| Variation Operator（变异算子） | 向基底提议变更 |
| Critic（批判器） | 解释性能并产生反馈 |
| Verifier（验证器） | 提供更客观信号（测试、环境奖励） |
| Selector（选择器） | 决定保留什么 |
| Archive（档案） | 存储变体或历史 |
| Governor（治理器） | 执行约束 |
| Evolution Trace（进化轨迹） | 状态、反馈、修改和接受/拒绝决策的时间序列 |

## 1.8 综述结构与阅读指南

本综述的后续章节围绕"理论—方法—系统—评估—实践—风险—前沿"展开。第2章讨论理论基础，包括 Five Evolution Loops 的形式化。第3章给出方法分类，覆盖 STaR、Reflexion、Self-Refine、Self-Rewarding、RISE、ADAS、Gödel Agent、DGM、AlphaEvolve、Absolute Zero、ReVeal 等代表性工作。

阅读时围绕四个核心问题：系统改的是什么？信号来自哪里？如何选择并保留改进？改进是否经过独立验证？
