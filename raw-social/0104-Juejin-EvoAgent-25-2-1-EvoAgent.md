# EvoAgent(25年2月)：世界模型驱动的面向长期任务的自主进化智能体1. 主要贡献 论文构建了EvoAgent，首 - 掘金

- URL: https://juejin.cn/post/7618167131003879424
- Platform: Juejin
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03

## Raw Content

## EvoAgent(25年2月)：世界模型驱动的面向长期任务的自主进化智能体1. 主要贡献 论文构建了EvoAgent，首 - 掘金

**Source**: https://juejin.cn/post/7618167131003879424

---

#              EvoAgent(25年2月)：世界模型驱动的面向长期任务的自主进化智能体             

[不会背八股](https://juejin.cn/user/1285770167983195/posts)

                     2026-03-18                   
                     67                   

                     阅读4分钟                   

## 1. 主要贡献

- 论文构建了**EvoAgent**，首个能够通过自我规划、自我控制和自我反思，在各种环境中自主完成多种长期任务的智能体。
- 提出了**持续世界模型**，能够通过闭环动态不断更新多模态经验池和世界知识，显著提高了智能体在复杂环境中的自主规划和动作控制能力。
- 通过在**Minecraft游戏环境**中的广泛实验，验证了EvoAgent的优越性。与现有方法相比，EvoAgent在成功率上平均提高了105%，并且减少了超过6倍的无效动作。
- 通过**消融研究**确认，持续世界模型对性能提升的贡献为72%，表明了持续世界模型在整合连贯知识方面的重要性，并展示了其在长期任务中的有效性。

## 2. 研究背景

### 研究问题

论文主要解决的问题是完成开放式环境中的**长时任务**（Long-Horizon, LH），这是具身智能体的一个重要且困难的挑战。

现有方法依赖于人类创建的数据或课程，缺乏持续更新多模态经验的能力，并且在面对新任务时可能会遇到**灾难性遗忘**问题，缺乏持续更新世界知识的能力。

### 相关工作

- 

**具身智能体解决长期任务**：

- 
  - **长期任务（LH）** ：长期任务是指需要多步骤、复杂的任务，通常涉及持续的规划和决策。这些任务在机器人技术中非常重要，例如物流机器人、手术机器人和灾难救援机器人等。
  - **现有方法分类**：现有的工作可以分为两类：基于模型的强化学习（MBRL）和基于视觉-语言模型的规划（VLM）。MBRL通过与环境交互来学习预测世界动态，而VLM则利用视觉-语言模型将长期任务分解为层次化的子目标。
  - **挑战**：这些方法假设对环境的完美知识，依赖于oracle反馈，并假设低级策略的完美执行，这使得在开放世界中适应各种长期任务变得困难。

- 

**持续强化学习（CRL）** ：

- 
  - **定义**：CRL旨在开发一种永不停止学习的智能体，将学习视为一个无止境的适应过程。
  - **现有研究**：现有研究主要集中在通过补充神经网络方法来改进工具，如设计新的优化器、构建新架构、使用经验回放防止遗忘、促进显式可塑性或使用来自持续监督学习的正则化技术。
  - **挑战**：尽管这些方法可以缓解简单任务的知识遗忘问题，但它们缺乏在长期任务和环境中的持续世界知识更新。

- 

**世界模型（WM）** ：

- 
  - **基础作用**：世界模型是AI系统进行规划和推理的基础模块，它们作为真实环境的模拟器，预测某些动作的未来结果。
  - **当前研究**：研究主要集中在通过潜在状态表示来理解世界和预测未来动态以进行规划和控制。代表应用包括在MBRL中进行动作搜索、策略优化和两者的结合。
  - **挑战**：世界模型在防止灾难性遗忘方面存在困难，因为它们在适应新任务时难以保持对先前学习的环境动态的稳定表示。

## EvoAgent

![image.png](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/6846ad0e531642b2b975900fdfee299e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiN5Lya6IOM5YWr6IKh:q75.awebp?rk3s=f64ab15b&x-expires=1779864811&x-signature=Tw8uSuUKl2s4zTg2ZL7ap1VApSg%3D)

### 1. 经验驱动的任务规划器 (Experience-driven Task Planner) —— 左上模块

这是智能体的“参谋部”，负责将宏大目标（如“如何获得钻石？”）拆解为可执行的子任务。

- **多模态输入**：它同时接收视觉观测（Obs）、自身状态（Self: Health/Assets）以及过往的经验（Experience）。
- **核心组件**：利用 **LLM（大语言模型）** 结合 **LoRA** 微调技术进行高效推理。
- **产出**：生成一系列**子任务 (Subtasks)** 序列。

**记忆驱动的规划器 

Ψplan\Psi_{\text{plan}}

Ψ

plan

​

** 是一个函数，它将当前的多模态状态 

S\mathcal{S}

S

、长视距任务 

T\mathcal{T}

T

 和记忆 

DMEPall\mathcal{D}_{\text{MEP}}^{\text{all}}

D

MEP

all

​

 映射到一个子任务序列 

G\mathcal{G}

G

。

Ψplan:S×T×DMEPall→G\Psi_{\text{plan}} : \mathcal{S} \times \mathcal{T} \times \mathcal{D}_{\text{MEP}}^{\text{all}} \to \mathcal{G}

Ψ

plan

​

:

S

×

T

×

D

MEP

all

​

→

G

其中，

S\mathcal{S}

S

 包括第一人称观察 

Oobs\mathcal{O}_{\text{obs}}

O

obs

​

、智能体的内部状态 

Sself\mathcal{S}_{\text{self}}

S

self

​

（如健康或饥饿）和智能体的资源库 

Sassets\mathcal{S}_{\text{assets}}

S

assets

​

（如工具或资源）。规划器使用大型语言模型（LLM）来生成子任务。具体步骤如下：

- **编码**：使用图像标记器（如 VQ-GAN）将原始图像、内部状态和资源库编码为 token 嵌入。
- **投影**：使用轻量级投影模块将视觉 token 映射到与文本嵌入相同的空间。
- **生成**：利用 LLM 的解码器架构生成响应，基于提供的多模态输入 token 生成混合序列的视觉和文本 token。
- **选择**：通过线性层和 softmax 操作将每个嵌入映射到语言词汇的概率分布，并选择得分最高的 token 作为最终的子任务。

当世界模型引导的动作控制器反馈任务失败时，LLM 会使用 **LoRA** 进行微调，基于所有记忆进行调整。

### 2. 世界模型引导的行为控制器 (WM-guided Action Controller) —— 右上模块

这是智能体的“执行部”，负责在环境中具体操作。

- **基于 RSSM 的预测**：你可以看到熟悉的 

hh

h

（确定性状态）和 

zz

z

（随机状态）结构。它利用世界模型在脑中“预演”动作的结果（

x^\hat{x}

x

^

 观测预测、

r^\hat{r}

r

^

 奖励预测）。
- **自我验证 (Self-Verification)** ：智能体会根据世界模型的预测值与环境反馈的实际值进行比对。如果发现预测偏差太大或任务失败，会触发“终端 (Terminal)”信号进行修正。

**WM-引导的动作控制器 

Πact\Pi_{\text{act}}

Π

act

​

** 是一个函数，它将当前的多模态状态 

S\mathcal{S}

S

、子任务 

G\mathcal{G}

G

 和世界模型 

Mw\mathcal{M}_w

M

w

​

 映射到一个动作序列 

at:t+Ha_{t:t+H}

a

t

:

t

+

H

​

。

Πact:S×G×Mw→A\Pi_{\text{act}} : \mathcal{S} \times \mathcal{G} \times \mathcal{M}_w \to \mathcal{A}

Π

act

​

:

S

×

G

×

M

w

​

→

A

- **动作选择**：控制器利用世界模型预测未来状态并优化动作，公式如下：

at:t+H=arg⁡max⁡at:t+H∈AHEMw[∑τ=tt+Hγτ−tR(sτ,aτ,gi)]a_{t:t+H} = \arg \max_{a_{t:t+H} \in \mathcal{A}^H} \mathbb{E}_{\mathcal{M}_w} \left[ \sum_{\tau=t}^{t+H} \gamma^{\tau-t} R(s_\tau, a_\tau, g_i) \right]

a

t

:

t

+

H

​

=

ar
g

max

a

t

:

t

+

H

​

∈

A

H

​

E

M

w

​

​

[

∑

τ

=

t

t

+

H

​

γ

τ

−

t

R

(

s

τ

​

,

a

τ

​

,

g

i

​

)

]

其中 

R(sτ,aτ,gi)R(s_\tau, a_\tau, g_i)

R

(

s

τ

​

,

a

τ

​

,

g

i

​

)

 是目标对齐的奖励函数，

γ\gamma

γ

 是折扣因子。

- **自我验证**：在执行动作后，智能体与环境交互以收集反馈，并使用自我验证机制确定子任务是否可以终止。
- **多模态经验池 (MEP)** ：MEP 是一个动态存储库，记录智能体与环境交互的经验。每次交互后，经验会被添加到 MEP 中，以便更新世界模型。

### 3. 基于课程学习的反思器 (CL-based Reflector) —— 底部模块

这是智能体的“学习与进化部”，负责不断优化世界模型。

- **课程筛选 (Curriculum Selection)** ：它不会死记硬背所有经历，而是像人类学习一样，筛选出最有价值的子任务和经验。
- **模型更新 (WM Updating)** ：通过反思失败或成功的案例，更新世界模型的参数 (

θMw→θMw′\theta_{M_w} \rightarrow \theta'_{M_w}

θ

M

w

​

​

→

θ

M

w

​

′

​

)，使模型对世界的理解越来越精准。

---

**

Φreflect\Phi_{\text{reflect}}

Φ

reflect

​

** 是一个函数，它将当前的多模态状态 

S\mathcal{S}

S

、子任务 

G\mathcal{G}

G

 和多模态经验 

DMEP\mathcal{D}_{\text{MEP}}

D

MEP

​

 映射到更新后的世界模型 

Mw′\mathcal{M}'_w

M

w

′

​

。

Φreflect:S×G×DMEP×Mw→Mw′\Phi_{\text{reflect}} : \mathcal{S} \times \mathcal{G} \times \mathcal{D}_{\text{MEP}} \times \mathcal{M}_w \to \mathcal{M}'_w

Φ

reflect

​

:

S

×

G

×

D

MEP

​

×

M

w

​

→

M

w

′

​

反思模块采用两阶段课程学习机制来优化经验选择，然后更新世界模型以缓解历史遗忘：

- 

**两阶段课程学习机制：**

  - **阶段 1：课程子任务选择：** 根据子任务与当前目标任务的关联性、效率比、重要性和完成率来选择子任务。
  - **阶段 2：课程经验选择：** 在选定的子任务中，根据时间差误差（TD-Error）、梯度范数和信息增益来选择经验。

- 

**世界模型更新：** 使用课程指导的经验更新世界模型，公式如下：

θMw′←θMw−∇[∑hjwjLpred(hj)+μ⋅Ω(θ,θold)]\theta'_{M_w} \leftarrow \theta_{M_w} - \nabla \left[ \sum_{h_j} w_j \mathcal{L}_{\text{pred}}(h_j) + \mu \cdot \Omega(\theta, \theta^{\text{old}}) \right]

θ

M

w

​

′

​

←

θ

M

w

​

​

−

∇

[

∑

h

j

​

​

w

j

​

L

pred

​

(

h

j

​

)

+

μ

⋅

Ω

(

θ

,

θ

old

)

]

其中 

wjw_j

w

j

​

 强调关键经验，

Ω\Omega

Ω

 用于惩罚对过去任务至关重要的参数偏移。

### 核心枢纽：持续世界模型 (Continual WM)

图中央的棕色圆圈是整个系统的灵魂。它起到了**信息中继站**的作用：

- 持续世界模型包括一个多模态经验池和一个世界模型。
- 通过闭环动态的自我规划、自我控制和自我反思，EvoAgent可以不断更新多模态经验池和世界知识，过滤无效探索并缓解历史遗忘，从而实现更好的自主规划和动作控制：
- 
  - **规划**：记忆驱动的规划器根据当前状态、任务和记忆生成子任务。
  - **控制**：世界模型引导的动作控制器根据当前状态、子任务和世界模型生成动作序列。
  - **执行**：智能体执行动作并与环境交互，收集反馈。
  - **反思**：经验启发的反思模块根据交互经验更新世界模型。
  - **更新**：持续世界模型通过闭环动态更新多模态经验池和世界知识。

## 实验

### 实验设置

- 

**环境**：

- 
  - **Minecraft**：使用Minecraft游戏作为实验环境，因为它是一个受欢迎的开放世界游戏，具有多样化的生物群系和丰富的交互元素。
  - **模拟环境**：使用MineRL 0.4.4作为模拟环境，智能体以每秒20帧的速度操作，并通过鼠标和键盘的低级动作控制信号与环境交互。

- 

**基准**：

- 
  - **Optimus-1基准**：使用Optimus-1构建的基准来评估EvoAgent框架。Optimus-1提供了一个包含67个任务的基准，用于评估智能体在跨环境完成长期任务的能力。
  - **任务分组**：将67个Minecraft任务分为7组，按照Minecraft推荐的类别进行分组。

### 基线比较

- **PPO**：使用Proximal Policy Optimization（PPO）作为基线之一，展示模型自由方法的性能。
- **GPT-4V**：使用GPT-4V作为另一个基线，展示纯视觉-语言模型的能力。
- **Jarvis-1**：使用Jarvis-1作为基线，展示基于记忆增强的多任务智能体的性能。
- **Dreamerv3**：使用Dreamerv3作为基线，展示基于视觉-语言模型的规划能力。
- **Optimus-1**：使用Optimus-1作为基线，展示混合多模态记忆增强智能体的性能

### 实验结果

![](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b668f8971ba64934bce835b1f869370e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiN5Lya6IOM5YWr6IKh:q75.awebp?rk3s=f64ab15b&x-expires=1779864811&x-signature=nF5%2FXLrfDihlAVVEeHghBVFNgKI%3D)

- **成功率（SR）** ：EvoAgent在所有资源层级上均表现出色，特别是在高级任务（如Gold和Diamond）上，成功率显著高于现有方法。EvoAgent的平均成功率比现有方法提高了105%。
- **探索效率（EE）** ：EvoAgent在探索效率上也表现出色，特别是在Gold和Diamond任务上，探索效率比Optimus-1高出数倍，表明其在稀疏奖励场景中减少了无效动作。

## 总结

#### 1. 核心架构：持续更新的世界模型 (Continual World Model)

这是 EvoAgent 最本质的创新。

- **传统局限**：以往的智能体（如早期的 Dreamer 或 Voyager）通常使用固定的世界模型，或者仅靠外部代码库（Skill Library）积累经验，模型对物理世界的底层理解是静态的。
- **EvoAgent 突破**：它将世界模型（WM）置于持续演进的状态。模型不仅在“脑海”中模拟环境（利用 RSSM 的 

hth_t

h

t

​

 和 

ztz_t

z

t

​

），而且会根据最新的交互经验实时更新参数，确保模型对环境的预测精度随任务进度不断提升。

#### 2. 规划层：记忆驱动与多模态对齐 (Memory-driven Planning)

EvoAgent 极大地增强了 LLM 与底层感知数据的结合。

- **多模态融合**：通过投影模块（Projector）将 VQ-GAN 编码的视觉 token 与文本 token 映射到统一空间，使 LLM 能直接“读懂”第一人称观察（Obs）和资源状态。
- **长视距拆解**：它不仅依赖提示词（Prompt），还通过**经验池（MEP）**引导 LLM 生成更符合当前物理现实的子任务序列。

#### 3. 执行层：基于世界模型的自主验证 (Self-Verification)

EvoAgent 的控制器不再是盲目地执行命令，而是具备了“预判”能力。

- **脑内预演**：在动作执行前，控制器利用 RSSM 在潜在空间预测未来 

HH

H

 步的状态和奖励，寻找最优路径。
- **闭环纠错**：引入自我验证机制。如果环境反馈与世界模型的预测发生严重偏离，智能体会立即识别出“任务失败”，并触发后续的微调或反思逻辑，而不是死循环。

#### 4. 学习层：两阶段课程反思机制 (Two-stage Curriculum Reflection)

这是解决**持续学习**中“学什么”和“怎么记”的关键。

- **阶段一（任务筛选）** ：优先选择那些与当前目标关联度高、重要性强的子任务。
- **阶段二（经验筛选）** ：利用 **TD-Error（时间差误差）** 筛选出模型“理解最不透彻”的经历。高误差代表了高学习价值，这让模型学习效率提升了数倍。
- **缓解遗忘**：在更新参数 

θ\theta

θ

 时，加入正则化约束 

Ω\Omega

Ω

，惩罚对旧任务关键参数的修改。这使得 EvoAgent 在学习“挖钻石”的新知识时，不会忘记“如何合成木镐”的旧常识。

## 参考

[开放世界中的持续学习！EvoAgent：世界模型驱动的面向长期任务的自主进化智能体 - 知乎](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F24229812511)

[不会背八股](https://juejin.cn/user/1285770167983195/posts)
[41
       文章](https://juejin.cn/user/1285770167983195/posts)[5.9k
       阅读](https://juejin.cn/user/1285770167983195/posts)[4
       粉丝](https://juejin.cn/user/1285770167983195/followers)
