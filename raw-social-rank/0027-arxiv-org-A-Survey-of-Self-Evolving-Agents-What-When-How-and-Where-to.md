# A Survey of Self-Evolving Agents What, When, How, and Where to ...

- URL: https://arxiv.org/html/2507.21046v4
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "agent evolution" "LLM"

## Raw Content

## A Survey of Self-Evolving Agents What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence

**Source**: https://arxiv.org/html/2507.21046v4

---

# 

A Survey of Self-Evolving Agents

What, When, How, and Where to Evolve on the Path to Artificial Super Intelligence 

Huan-ang Gao
γ†
, Jiayi Geng
α†
, Wenyue Hua
ϵ†
, Mengkang Hu
ω†
, Xinzhe Juan
σμ†
, Hongzhang Liu
ξ†
, 
Shilong Liu
α†
, Jiahao Qiu
αδ†
, Xuan Qi
γ†
, Qihan Ren
σ†
, Yiran Wu
ρ†
, Hongru Wang
k†
✉, Han Xiao
τ†
,

Yuhang Zhou
λ†
, Shaokun Zhang
ρ†
, Jiayi Zhang
π
, Jinyu Xiang, Yixiong Fang
θ
, Qiwen Zhao
ζ
,

Dongrui Liu
σ
, Cheng Qian
β
, Zhenhailong Wang
β
, Minda Hu
τ
,

Huazheng Wang
η
, Qingyun Wu
ρ
, Heng Ji
β
, Mengdi Wang
αδ
✉

α

Princeton University, δPrinceton AI Lab, γTsinghua University, θCarnegie Mellon University, ξUniversity of Sydney, σShanghai Jiao Tong University, ρPennsylvania State University, μUniversity of Michigan, ηOregon State University, τThe Chinese University of Hong Kong, λFudan University, πThe Hong Kong University of Science and Technology (Guangzhou), ωThe University of Hong Kong, ϵUniversity of California, Santa Barbara, ζUniversity of California San Diego, kUniversity of Edinburgh, βUniversity of Illinois Urbana-Champaign 

Github Repo: [https://github.com/CharlesQ9/Self-Evolving-Agents](https://github.com/CharlesQ9/Self-Evolving-Agents)

†
Equal contribution and the order is determined alphabetically, ✉Corresponding Author 

###### Abstract

Large Language Models (LLMs) have demonstrated remarkable capabilities across diverse tasks but remain fundamentally static, unable to adapt their internal parameters to novel tasks, evolving knowledge domains, or dynamic interaction contexts. As LLMs are increasingly deployed in open-ended, interactive environments, this static nature has become a critical bottleneck, necessitating agents that can adaptively reason, act, and evolve in real time. This paradigm shift —from scaling static models to developing self-evolving agents — has sparked growing interest in architectures and methods enabling continual learning and adaptation from data, interactions, and experiences. This survey provides the first systematic and comprehensive review of self-evolving agents, organizing the field around three foundational dimensions — 
what to evolve, when to evolve, and how to evolve
. We examine evolutionary mechanisms across agent components (e.g., models, memory, tools, architecture), categorize adaptation methods by stages (e.g., intra-test-time, inter-test-time), and analyze the algorithmic and architectural designs that guide evolutionary adaptation (e.g., scalar rewards, textual feedback, single-agent and multi-agent systems). Additionally, we analyze evaluation metrics and benchmarks tailored for self-evolving agents, highlight applications in domains such as coding, education, and healthcare, and identify critical challenges and research directions in safety, scalability, and co-evolutionary dynamics. By providing a structured framework for understanding and designing self-evolving agents, this survey establishes a roadmap for advancing more adaptive, capable, robust, and versatile agentic systems in both research and real-world deployments, and ultimately sheds light on the realization of Artificial Super Intelligence (ASI) where agents evolve autonomously and perform beyond human-level intelligence across a wide array of tasks.

![Refer to caption](https://arxiv.org/html/x1.png)
Figure 1: 
 A conceptual trajectory illustrating the progression from large language models (LLMs) to foundation agents, and then to self-evolving agents—our focus, and ultimately toward the hypothetical Artificial Super Intelligence (ASI). Along this path, intelligence and adaptivity increase, marking a shift toward more autonomous and agentic AI systems. The future directions beyond self-evolving agents remain open and subject to ongoing exploration.

## 
1 
Introduction

> "It is not the most intellectual of the species that survives; it is not the strongest that survives; but the species that survives is the one that is able best to adapt and adjust to the changing environment in which it finds itself."
>                  ― Charles Darwin
> 1
> 
> 1
> 1
> This quote is widely attributed to Charles Darwin, but it does not appear verbatim in his writings. The phrasing is believed to originate from Professor Leon C. Megginson, who paraphrased Darwin’s ideas. Despite its frequent misattribution, the quote effectively captures the essence of Darwinian evolution and has since been popularized in both scientific and managerial literature.

Large Language Models (LLMs) have demonstrated remarkable capabilities across a wide range of tasks. Yet, they remain fundamentally static (Luo
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib5)), unable to adapt their internal parameters when encountering novel tasks, evolving knowledge domains, or dynamic interaction contexts. As LLMs are increasingly deployed in open-ended, interactive environments, this limitation becomes a critical bottleneck. In such settings, conventional knowledge retrieval mechanisms prove inadequate, giving rise to agents capable of dynamically adapting their perception, reasoning, and actions in real time. This emerging need for dynamic, continual adaptation signals a conceptual shift in artificial intelligence: 
from scaling up static models to developing self-evolving agents
. While established techniques like Supervised Fine-Tuning (SFT) and Reinforcement Learning (RL) provide the mechanisms for improvement, we define self-evolution not merely by the algorithms used, but by the locus of autonomy. Unlike traditional pipelines where human engineers curate data and schedule updates, a self-evolving agent is capable of continuously learning from new data, interactions, and experiences in real-time, leading to systems that are more robust, versatile, and capable of tackling complex, dynamic real-world problems (Wang
 et al.
, [2024a](https://arxiv.org/html/2507.21046v4#bib.bib2)). This shift is currently driving us toward a promising and transformative path to Artificial Super Intelligence (ASI), where the agents not only can learn and evolve from experience with an unpredictable speed but also perform at or above human-level intelligence across a wide array of tasks (Wang
 et al.
, [2025f](https://arxiv.org/html/2507.21046v4#bib.bib3)).

Unlike static LLMs, which remain constrained by their inability to adapt to novel and evolving contexts, self-evolving agents are designed to overcome these limitations by continuously learning from real-world feedback. This progression reshapes our understanding of agents. Self-evolving agents, as a core concept, represent a significant step forward in the evolution of intelligent systems, acting as intermediaries that pave the way for more adaptive and autonomous AI, as shown in Figure [1](https://arxiv.org/html/2507.21046v4#S0.F1). Recent research initiatives have increasingly focused on developing adaptive agent architectures capable of continually learning and adapting from experience, such as recent advancements in agent frameworks (Yin
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib6)), prompting strategies (Fernando
 et al.
, [2023](https://arxiv.org/html/2507.21046v4#bib.bib42)), and different optimization ways to evolve. Notwithstanding these advances, existing surveys predominantly address agent evolution as a subsidiary component within comprehensive agent taxonomies. Previous surveys primarily provide systematic overviews of general agent development, while offering limited coverage of self-evolving mechanisms across constrained scenarios in self-evolving agents (Luo
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib5); Liu
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib1)). For example,  Luo
 et al.
 ([2025a](https://arxiv.org/html/2507.21046v4#bib.bib5)) discuss several ways to evolve, such as self-learning and multi-agent co-evolution, while Liu
 et al.
 ([2025a](https://arxiv.org/html/2507.21046v4#bib.bib1)) explicitly introduce the evolution in terms of different components of agents, such as tools and prompts. Moreover, some studies focus specifically on the evolution of language models themselves (Tao
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib358)), rather than on the broader concept of agents. However, these works address isolated components rather than the holistic agent system. Therefore, there is no systematic survey devoted to a dedicated, comprehensive investigation of self-evolving agents as a first-class research paradigm. This gap has left fundamental questions underexplored: 
What aspects of an agent should evolve? When should adaptation occur? And how should that evolution be implemented in practice?

To the best of our knowledge, this is the first systematic and comprehensive survey focusing on self-evolving agents, offering a clear roadmap for both theoretical inquiry and practical deployment. However, given that this represents a rapidly forming research area where conceptual boundaries are still being actively negotiated within the community, we frame this survey as a guiding synthesis rather than a review of a fully established paradigm. Instead of enforcing rigid boundaries, we aim to structure the heterogeneous mechanisms emerging in the community into a coherent framework. We organize our analysis around three foundational questions — 
what, when, and how to evolve
 — and provide a structured framework for understanding each. Specifically, we systematically examine individual agent components, including the model, memory, tools and corresponding workflow, investigating their distinct evolutionary mechanisms (what to evolve of agent in Section 3); then we divide existing evolving methods according to different temporal stages with different learning paradigms such as supervised fine-tuning, reinforcement learning and inference-time evolving (when to evolve in Section 4). We finally summarize different signals to guide the evolution of agents, such as textual feedback or scalar rewards, and also different architectures of agents to evolve, such as single-agent and multi-agent evolution (how to evolve in Section 5). Furthermore, we review certain evaluation metrics and benchmarks to track existing advancements of self-evolving agents, emphasizing the importance of co-evolution between evaluation and agents (Section 6). We also examine emerging applications in domains such as coding, education, and healthcare, where continual adaptation and evolution are essential (Section 7). Finally, we identify persistent challenges and outline promising research directions to guide the development of self-evolving agents (Section 8). Through this systematic decomposition of self-evolutionary processes across orthogonal dimensions, we provide a structured and practical framework enabling researchers to systematically analyze, compare, and design more robust and adaptive agentic systems. To sum up, our key contributions are as follows:

- 
•

We establish a unified theoretical framework for characterizing self-evolutionary processes in agent systems, anchored around three fundamental dimensions: what evolves, how it evolves, and when it evolves, providing clear design guidance for future self-evolving agentic systems.

- 
•

We further investigate the evaluation benchmark or environment tailored for self-evolving agents, highlighting emerging metrics and challenges related to adaptability, robustness, and real-world complexity.

- 
•

We showcase several key real-world applications across various domains, including autonomous software engineering, personalized education, healthcare, and intelligent virtual assistance, illustrating the practical potential of self-evolving agents.

- 
•

We identify critical open challenges and promising future research directions, emphasizing aspects like safety, personalization, multi-agent co-evolution, and scalability.

In doing so, our survey provides researchers and practitioners with a more structured taxonomy for understanding, comparing, and advancing research of self-evolving agents from different perspectives. As LLM-based agents are increasingly integrated into mission-critical applications, understanding their evolutionary dynamics becomes essential, extending beyond academic research to encompass industrial applications, regulatory considerations, and broader societal implications.

{forest}

Figure 2: 
Taxonomy of self-evolving agents, in which agents are analyzed along the 
what
, 
when
, 
how
, and 
where
 dimensions, with selected representative methods and systems annotated at each leaf node.![Refer to caption](https://arxiv.org/html/x2.png)
Figure 3: 

A comprehensive overview of self-evolving agents across key dimensions.
 From left to right and top to bottom, the figure mirrors the organization of Sections [3](https://arxiv.org/html/2507.21046v4#S3)–[7](https://arxiv.org/html/2507.21046v4#S7). 
What to evolve
 (Sec. [3](https://arxiv.org/html/2507.21046v4#S3)) decomposes agent components: model, context, tools, and architecture, showing where evolution operates. 
When to evolve
 (Sec. [4](https://arxiv.org/html/2507.21046v4#S4)) distinguishes intra-test-time versus inter-test-time self-evolution, corresponding to ICL, SFT, and RL paradigms. 
How to evolve
 (Sec. [5](https://arxiv.org/html/2507.21046v4#S5)) summarizes methodological families—reward-based, imitation & demonstration, and population-based—together with cross-cutting dimensions such as online/offline, on/off-policy, and reward granularity. 
Where to evolve
 (Sec. [6](https://arxiv.org/html/2507.21046v4#S6)) contrasts general-purpose and domain-specific deployments (e.g., coding, GUI, finance, medical, education). 
Evaluation
 (Sec. [7](https://arxiv.org/html/2507.21046v4#S7)) outlines goals and metrics—adaptivity, generalization, efficiency, safety—and corresponding evaluation paradigms (static, short-horizon, long-horizon). Overall, the taxonomy maps the survey’s reasoning flow: defining *what, when, and how* to evolve establishes the foundation for evaluating and advancing self-evolving agents. ![Refer to caption](https://arxiv.org/html/x3.png)
Figure 4: 
An evolutionary landscape of several representative self-evolving agent frameworks from 2022 to 2025. The figure chronologically organizes major research milestones in the development of self-evolving agents with capabilities such as autonomous planning, tool use, and continual self-improvement. 

## 
2 
Definitions and Foundations

Before delving into a comprehensive survey, we first present a formal definition of self-evolving agents and introduce a taxonomy of the key aspects in self-evolving agents. We also discuss the relationships between self-evolving agents and other renowned learning paradigms, such as curriculum learning, lifelong learning, model editing, and unlearning, highlighting the adaptive, dynamic, and autonomous nature of self-evolving agents.

### 
2.1 
Definitions

##### Environment

We first define the environment (including the user and the execution environment, e.g., Linux shell) of an agent system as a partially observable Markov Decision Process (POMDP), represented as a tuple E=(𝒢,𝒮,𝒜,T,R,Ω,O,γ)E=(\mathcal{G},\mathcal{S},\mathcal{A},T,R,\Omega,O,\gamma), where:

- 
•

𝒢\mathcal{G} is a set of potential goals. Each g∈𝒢g\in\mathcal{G} is a task objective that the agent needs to achieve, e.g., a user query.

- 
•

𝒮\mathcal{S} is a set of states. Each s∈𝒮s\in\mathcal{S} represents the internal state of the environment.

- 
•

𝒜\mathcal{A} is a set of actions. Each action a∈𝒜a\in\mathcal{A} can be a combination of textual reasoning, retrieval of external knowledge, and tool calls.

- 
•

TT is the state transition probability function which takes a state-action pair (s,a)(s,a) and outputs the probability distribution T​(s′|s,a)T(s^{\prime}|s,a) of the next state.

- 
•

R:𝒮×𝒜×𝒢→ℛR:\mathcal{S}\times\mathcal{A}\times\mathcal{G}\rightarrow\mathcal{R} is the feedback/reward function, conditioned on the specific goal g∈𝒢g\in\mathcal{G}. The feedback r=R​(s,a,g)r=R(s,a,g) typically takes the form of a scalar score or textual feedback.

- 
•

Ω\Omega is a set of observations accessible to the agent.

- 
•

OO is the observation probability function which takes a state-action pair (s,a)(s,a) and outputs the probability distribution O​(o′|s,a)O(o^{\prime}|s,a) of the next observation for the agent.

- 
•

γ\gamma is the discount factor.

##### Agent system

We define a (multi-)agent system as Π=(Γ,{ψi},{Ci},{𝒲i})\Pi=(\Gamma,\{\psi_{i}\},\{C_{i}\},\{\mathcal{W}_{i}\}). The architecture Γ\Gamma determines the control flow of the agent system or collaborative structures between multiple agents. It is typically represented as a sequence of nodes (N1,N2,…)(N_{1},N_{2},...) organized by graph or code structures. Each node NiN_{i} consists of the following components:

- 
•

ψi\psi_{i}: the underlying LLM/MLLM.

- 
•

CiC_{i}: the context information, e.g., prompt PiP_{i} and memory MiM_{i}.

- 
•

𝒲i\mathcal{W}_{i}: the set of available tools/APIs.

At each node, the agent policy is a function πθi(⋅|o)\pi_{\theta_{i}}(\cdot|o) that takes an observation and outputs the probability distribution of the next action, where θi=(ψi,Ci)\theta_{i}=(\psi_{i},C_{i}). The actual action space here is the union of the natural language space and the tool space 𝒲i\mathcal{W}_{i}.

For a given task 𝒯=(E,g)\mathcal{T}=(E,g), represented by an environment EE and a corresponding goal g∈𝒢g\in\mathcal{G}, the agent system follows the topology Γ\Gamma to generate a trajectory τ=(o0,a0,o1,a1,…)\tau=(o_{0},a_{0},o_{1},a_{1},...), and receives a feedback rr either from the external environment or from internal signals (e.g., self-confidence or feedback from an evaluator).

##### Self-evolving strategy

A self-evolving strategy is a transformation ff that maps the current agent system to a new state, conditioned on the generated trajectory τ\tau and the external/internal feedback rr:

|  | f​(Π,τ,r)=Π′=(Γ′,{ψi′},{Ci′},{𝒲i′})f(\Pi,\tau,r)=\Pi^{\prime}=(\Gamma^{\prime},\{\psi^{\prime}_{i}\},\{C^{\prime}_{i}\},\{\mathcal{W}^{\prime}_{i}\}) |  | (1) |
|---|---|---|---|

##### Objective of self-evolving agents

Let UU be a utility function that measures the performance of an agent system Π\Pi on a given task 𝒯\mathcal{T} by assigning a scalar score U​(Π,𝒯)∈ℝU(\Pi,\mathcal{T})\in\mathbb{R}. The utility may be derived from the task-specific feedback rr, such as a reward signal or textual evaluation, possibly combined with other performance indicators (e.g., completion time, accuracy, or robustness). Given a sequence of tasks (𝒯0,𝒯1,…,𝒯n)(\mathcal{T}_{0},\mathcal{T}_{1},...,\mathcal{T}_{n}) and an initial agent system Π0\Pi_{0}, a self-evolving strategy ff recurrently generates an evolving sequence of agent systems (Π1,Π2,…,Πn)(\Pi_{1},\Pi_{2},...,\Pi_{n}) via

|  | Πj+1=f​(Πj,τj,rj),\Pi_{j+1}=f(\Pi_{j},\tau_{j},r_{j}), |  | (2) |
|---|---|---|---|

where τj\tau_{j} and rjr_{j} are the trajectory and feedback on task 𝒯j\mathcal{T}_{j}.

The overarching objective in designing a self-evolving agent is to construct a strategy ff such that the cumulative utility over tasks is maximized:

|  | maxf​∑j=0nU​(Πj,𝒯j)\max_{f}\sum_{j=0}^{n}U(\Pi_{j},\mathcal{T}_{j}) |  | (3) |
|---|---|---|---|

##### Operational definition of self-evolving agents

To provide a conceptual boundary, we introduce an operational definition of self-evolving agents. A self-evolving agent is the agent that *modifies its internal parameters, contextual state, toolset, or architectural topology based on its own trajectories or feedback signals, with the explicit objective of improving future performance*.

This definition entails three inclusion criteria: (i) updates must be *experience-dependent*, driven by trajectories, self-generated data, or environment feedback, specifically targeting the agent’s policy limitations or capability boundaries rather than generic data synthesis; (ii) updates must produce a *persistent, policy-changing* effect rather than a transient instruction-following behavior; (iii) the system must possess mechanisms for *autonomous exploration or self-initiated learning*, even if it also leverages pre-collected data. For clarity, we use "passive" to denote learning triggered exclusively by externally provided data or schedules, and "active" to denote self-initiated exploration, reflection, or structural modification (i.e., using self-reflection to collect data), explicitly excluding static pipelines (e.g., standard distillation) where data generation is agnostic to the agent’s interaction history.

As this field is rapidly forming, fully autonomous self-evolution without human intervention represents an aspirational goal rather than the current norm. In this survey, we do not impose a rigid exclusion threshold that would disregard early-stage developments. Instead, we analyze the mechanisms contributing to the self-evolving paradigm ranging from 
proto-evolution
 (e.g., iterative bootstrapping or feedback-driven prompting) to 
strong self-evolution
 (fully autonomous diagnosis and reconfiguration), allowing us to provide a comprehensive view of how diverse methods contribute to the "What, When, and How" of the paradigm’s progression toward full autonomy.

### 
2.2 
Relationships with Other Works

Table [1](https://arxiv.org/html/2507.21046v4#S2.T1) summarizes the key distinctions between self-evolving agents and other paradigms (including curriculum learning, lifelong learning, model editing, and unlearning). We provide a brief introduction to each paradigm below, highlighting the differences among these paradigms, as well as the differences with self-evolving agents.

##### Curriculum Learning

Curriculum learning is a training strategy in which data are presented in order of increasing difficulty (Bengio
 et al.
, [2009](https://arxiv.org/html/2507.21046v4#bib.bib308); Wang
 et al.
, [2021](https://arxiv.org/html/2507.21046v4#bib.bib309)). This strategy resembles human curricula where concepts are introduced progressively from simple to complex. Curriculum learning has been widely adopted across diverse domains, including computer vision (Guo
 et al.
, [2018](https://arxiv.org/html/2507.21046v4#bib.bib310); Jiang
 et al.
, [2014](https://arxiv.org/html/2507.21046v4#bib.bib311); Liu
 et al.
, [2023a](https://arxiv.org/html/2507.21046v4#bib.bib312)), natural language processing (Platanios
 et al.
, [2019](https://arxiv.org/html/2507.21046v4#bib.bib314); Tay
 et al.
, [2019](https://arxiv.org/html/2507.21046v4#bib.bib315)), speech recognition (Braun
 et al.
, [2017](https://arxiv.org/html/2507.21046v4#bib.bib316); Lotfian and Busso, [2019](https://arxiv.org/html/2507.21046v4#bib.bib317)), etc. Recently, several curriculum learning-based methods have been proposed to fine-tune LLMs during the post-training phase (Wang
 et al.
, [2025o](https://arxiv.org/html/2507.21046v4#bib.bib318); Zhang
 et al.
, [2025o](https://arxiv.org/html/2507.21046v4#bib.bib319); Parashar
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib320); Zhang
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib321); Li
 et al.
, [2025b](https://arxiv.org/html/2507.21046v4#bib.bib322)). The framework for curriculum learning generally comprises two key components: a difficulty measurer that quantifies the difficulty level of each training data point, and a training scheduler that reorganizes the order of data points received by the model according to the difficulty level. Unlike curriculum learning, which operates on a static dataset, self-evolving agents aim to handle sequential tasks in dynamic environments. Additionally, curriculum learning updates only model parameters, whereas self-evolving agents are able to adjust non-parametric components like memory and tools.

##### Lifelong Learning

Lifelong learning refers to the ability of AI models to continuously and adaptively learn when exposed to new tasks and environments, while retaining previously acquired knowledge and abilities. This learning paradigm, also known as continual learning or incremental learning, is crucial for AI models to operate in dynamic and complex environments (Wang
 et al.
, [2024c](https://arxiv.org/html/2507.21046v4#bib.bib327); Zheng
 et al.
, [2025c](https://arxiv.org/html/2507.21046v4#bib.bib324); Parisi
 et al.
, [2019](https://arxiv.org/html/2507.21046v4#bib.bib325); Shi
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib326); Yang
 et al.
, [2025d](https://arxiv.org/html/2507.21046v4#bib.bib328); Zhou
 et al.
, [2024a](https://arxiv.org/html/2507.21046v4#bib.bib329)). The primary goal of lifelong learning for AI models is to achieve a balance between preserving existing knowledge (stability) and acquiring new knowledge (plasticity) when exposed to new data or tasks (McCloskey and Cohen, [1989](https://arxiv.org/html/2507.21046v4#bib.bib331); Zheng
 et al.
, [2025c](https://arxiv.org/html/2507.21046v4#bib.bib324); Ratcliff, [1990](https://arxiv.org/html/2507.21046v4#bib.bib332); Rolnick
 et al.
, [2019](https://arxiv.org/html/2507.21046v4#bib.bib333)). Though it shares the sequential task setting with self-evolving agents, lifelong learning differs in two fundamental ways: (1) 
Memory functionality and usage timing
: While continual learning methods extensively employ memory mechanisms (e.g., experience replay buffers (Rolnick
 et al.
, [2019](https://arxiv.org/html/2507.21046v4#bib.bib333)), episodic memory (Lopez-Paz and Ranzato, [2017](https://arxiv.org/html/2507.21046v4#bib.bib422))) to mitigate catastrophic forgetting, these mechanisms primarily serve as *training-time* tools for parameter optimization through gradient computation. In contrast, self-evolving agents leverage *runtime context* (prompts, working memory, conversation history) that directly influences action generation at test-time without requiring parameter updates. The distinction lies not in the presence of non-parametric components, but in their functional role: training-time replay vs. test-time state adaptation. (2) 
Learning initiative
: Lifelong learning primarily acquires knowledge passively through externally provided task sequences, whereas self-evolving agents actively explore their environment and incorporate internal reflection or self-evaluation mechanisms to guide their own learning trajectory. Recent self-improving LLM methods (Huang
 et al.
, [2022](https://arxiv.org/html/2507.21046v4#bib.bib423); Yuan
 et al.
, [2024c](https://arxiv.org/html/2507.21046v4#bib.bib424)), which iteratively refine models through self-generated data and self-critique, can be viewed as instances of lifelong learning focused on model-centric improvement. Self-evolving agents extend beyond this paradigm to encompass system-wide evolution including tool acquisition, architectural reconfiguration, and environmental exploration.

##### Model Editing and Unlearning

Model editing and unlearning aim to efficiently and precisely modify specific knowledge in AI models while preserving irrelevant knowledge and avoiding full retraining (Wang
 et al.
, [2024f](https://arxiv.org/html/2507.21046v4#bib.bib334); [2025h](https://arxiv.org/html/2507.21046v4#bib.bib336); Zhang
 et al.
, [2024d](https://arxiv.org/html/2507.21046v4#bib.bib335); Wang
 et al.
, [2025h](https://arxiv.org/html/2507.21046v4#bib.bib336); Nguyen
 et al.
, [2022](https://arxiv.org/html/2507.21046v4#bib.bib338); Geng
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib339)). A canonical application of model editing is to perform efficient and precise localized factual updates (e.g., modifying the answer to "2021 Olympics host city" from "Tokyo" to "Paris"). Early methods focused on triples of atomic knowledge and later expanded into various trustworthy-related tasks (Fang
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib345); Huang
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib337)). Recent studies also propose lifelong model editing(Chen
 et al.
, [2024c](https://arxiv.org/html/2507.21046v4#bib.bib21)) that sequentially performs model editing. For model unlearning, early efforts mainly focus on the removal of privacy-related information (Chen
 et al.
, [2021](https://arxiv.org/html/2507.21046v4#bib.bib340)). With the rapid development of LLMs, model unlearning is also used to enhance LLMs’ safety (Zhang
 et al.
, [2024j](https://arxiv.org/html/2507.21046v4#bib.bib341); Li
 et al.
, [2024c](https://arxiv.org/html/2507.21046v4#bib.bib342); Zou
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib343); Lu
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib344)). Compared to lifelong learning, model editing shares an aligned objective: both aim to acquire new knowledge or capabilities while mitigating catastrophic forgetting. However, lifelong learning typically relies on extensive gradient-based fine-tuning across all model parameters, whereas model editing often modifies only a small subset of parameters in a targeted manner. Compared to self-evolving agents, model editing (1) cannot modify non-parametric components such as memory or tools, and (2) relies on a pre-defined pipeline from the algorithm designer, whereas self-evolving agents can spontaneously employ more diverse and flexible strategies based on the observation of the environment or internal feedback signals.

Table 1: 
Comparison between self-evolving agents and other renowned paradigms

| Paradigm | Runtime | Evolving | Dynamic | Test-time | Active | Structural | Self-reflect |
|---|---|---|---|---|---|---|---|
| Context | Toolset | Tasks | Adaptation | Exploration | Change | & Eval |  |
| Curriculum Learning | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ |
| Lifelong Learning | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ |
| Model Editing | ✗ | ✗ | ✓ | ✓ | ✗ | ✗ | ✗ |
| Self-evolving Agents | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

##### Positioning Self-Evolving Agents

To clarify the relationships among these paradigms and to motivate the role of self-evolving agents, we examine them through two complementary perspectives: a *problem-setting* lens and a *solution-paradigm* lens. This distinction clarifies the basis of each paradigm - whether it emerges from constraints and challenges inherent to the learning setting, or from methodological proposals for how the model or agent itself can be updated.

- 
•

Problem-setting view.
 Curriculum learning and lifelong learning arise from concrete learning problems. Curriculum learning addresses how to structure training examples of varying difficulty so a model can handle complex samples more effectively; lifelong learning focuses on acquiring new abilities over time while mitigating catastrophic forgetting. These paradigms are therefore driven by the *problems* they aim to solve and primarily specify how experience is organized for the learner, rather than how the agent itself may adapt beyond parameter updates.

- 
•

Solution-paradigm view.
 Model editing and self-evolving agents, in contrast, originate as *solutions*: they propose mechanisms for updating or modifying a system. Model editing provides targeted procedures—typically localized parameter adjustments—to correct or insert knowledge. Self-evolving agents generalize this idea by treating adaptation as a first-class capability, allowing not only parameter updates but also changes to runtime context, memory, tools, and workflow structures, driven by the agent’s own trajectories and feedback signals.

Viewed through this two-lens framework, curriculum and lifelong learning are anchored in the nature of the learning *problems* they address, whereas model editing and self-evolving agents are defined by the *methods* they provide for effecting change. Self-evolving agents thus represent a system-level solution paradigm: they include parameter-level editing as one update pathway while enabling broader, persistent, and interaction-driven evolution across multiple components of an agent.

## 
3 
What to Evolve?

A self-evolving agent differs from a static agent not by *what* components it contains, but by *which internal states* can be autonomously modified based on its own trajectories, reflections, and feedback signals. Thus, the key question of this section is to identify the 
evolutionary loci
 within an agent system Π=(Γ,{ψi},{Ci},{𝒲i})\Pi=(\Gamma,\{\psi_{i}\},\{C_{i}\},\{\mathcal{W}_{i}\})—the parts of the system whose states can be rewritten in an experience-driven and persistent manner, enabling cumulative self-improvement.

Following the formulation in Section [2.1](https://arxiv.org/html/2507.21046v4#S2.SS1), these evolutionary loci align with four major pillars of an agent system. Our investigation starts at the agent’s cognitive core, namely the 
Models
{ψi}\{\psi_{i}\}, whose parameters can be continuously updated through self-generated supervision, execution traces, or environmental feedback (Zhou
 et al.
, [2025e](https://arxiv.org/html/2507.21046v4#bib.bib298); Wang
 et al.
, [2025p](https://arxiv.org/html/2507.21046v4#bib.bib16)). We then consider the 
Context
{Ci}\{C_{i}\} –including instructions (Xiang
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib362); Khattab
 et al.
, [2023](https://arxiv.org/html/2507.21046v4#bib.bib46)) and long-term memory (Chhikara
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib27); Wang
 et al.
, [2024j](https://arxiv.org/html/2507.21046v4#bib.bib129)) –which evolves as agents reflect, store, and retrieve experience in ways that shape future decision-making. From this internal foundation, we examine the evolution of 
Tools
{𝒲i}\{\mathcal{W}_{i}\}, where agents autonomously create (Qiu
 et al.
, [2025b](https://arxiv.org/html/2507.21046v4#bib.bib56)), refine (Qu
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib60)), and managing (Wang
 et al.
, [2025j](https://arxiv.org/html/2507.21046v4#bib.bib61)) executable skills based on verifiable interaction signals Finally, we scale to the 
Agentic Architecture
, where the system’s 
architecture
(Hu
 et al.
, [2024c](https://arxiv.org/html/2507.21046v4#bib.bib277); Zhang
 et al.
, [2024c](https://arxiv.org/html/2507.21046v4#bib.bib276)) and collaborative structures (Wan
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib302)) are optimized over time, enabling structural adaptation beyond individual components. We present representative examples of these evolutionary loci in Table [2](https://arxiv.org/html/2507.21046v4#S3.T2).

### 
3.1 
Models

Models constitute a primary *locus of self-evolution*, as their parameters can be autonomously rewritten based on the agent’s own trajectories, reflections, and interaction outcomes. The ability of these models to evolve by continually adapting their internal parameters and expanding their functional capabilities is essential for the development of autonomous, general-purpose agents. Unlike static systems that rely heavily on human-annotated datasets and fixed training regimes, self-evolving models can improve through interaction, self-supervised data generation, and dynamic learning loops, thereby achieving greater efficiency, adaptability, and scalability.

In detail, we outline the principal axes along which model evolution unfolds. These include learning from self-generated supervision to refine model weights, evolving through interaction with constructed or external environments, and integrating feedback signals that directly reshape future reasoning behaviors. Together, these strategies represent a shift from passive learning paradigms toward active self-improvement.

Table 2: 
Representative self-evolving agent methods positioned along four evolutionary pillars; a filled bullet (∙\bullet) marks dimensions where the approach actively evolves. 

| Method | Model | Context | Tool | Architecture |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|
|  | Policy | Experience | Prompt | Memory | Creation | Mastery | Selection | Single | Multi |
| SCA(Zhou et al., 2025e) | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ |
| RAGEN(Wang et al., 2025p) | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ |
| AgentGen (Hu et al., 2024b) | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ | ∙\bullet | ∘\circ |
| Promptbreeder(Fernando et al., 2023) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ |
| Expel(Zhao et al., 2024a) | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ |
| Agent Workflow Memory(Wang et al., 2024j) | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ |
| Mem0(Chhikara et al., 2025) | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ |
| MAS-Zero(Ke et al., 2025) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet |
| Multi-Agent Design(Zhou et al., 2025a) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet |
| SPO(Xiang et al., 2025) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ |
| Alita(Qiu et al., 2025b) | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∘\circ | ∘\circ |
| TextGrad(Yellamraju and others, 2024) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ |
| DGM(Zhang et al., 2025h) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∘\circ |
| AlphaEvolve(Novikov et al., 2025) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∙\bullet | ∘\circ | ∙\bullet | ∘\circ |
| ADAS(Hu et al., 2024c) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet |
| AFlow(Zhang et al., 2024c) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet |
| ReMA(Wan et al., 2025) | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet |
| SkillWeaver(Zheng et al., 2025a) | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ |
| LearnAct(Zhao et al., 2024b) | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∘\circ | ∙\bullet | ∘\circ | ∘\circ |
| DRAFT(Qu et al., 2025) | ∘\circ | ∘\circ | ∙\bullet | ∘\circ | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ | ∘\circ |
| ToolGen(Wang et al., 2025j) | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ | ∘\circ |
| CRAFT(Yuan et al., 2024a) | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ |
| CREATOR(Qian et al., 2023b) | ∘\circ | ∘\circ | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∘\circ | ∘\circ | ∘\circ |
| Voyager(Wang et al., 2023a) | ∘\circ | ∘\circ | ∙\bullet | ∙\bullet | ∙\bullet | ∙\bullet | ∙\bullet | ∘\circ | ∙\bullet |

##### Policy

A self-evolving agent can refine its parameters to perform better on targeted tasks. Traditional methods of data collection for training agents on tool-use benchmarks are costly and often yield limited coverage, while purely synthetic data-generation pipelines typically suffer from inadequate quality. Consequently, recent studies emphasize enabling agents to autonomously generate data to improve their own model weights. One representative approach is the Self-Challenging Agent (SCA)(Zhou
 et al.
, [2025e](https://arxiv.org/html/2507.21046v4#bib.bib298)), where a language model alternates roles between a challenger generating executable Code-as-Task problems and an executor solving them. The model then fine-tunes its parameters using trajectories derived from successful solutions, resulting in significant performance gains on complex, multi-step tasks. Similarly, the Self-Rewarding Self-Improving framework(Simonds
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib255)) implements an internal self-judging mechanism, allowing the model to autonomously generate problems, solve them, and assess its performance, thus producing self-contained fine-tuning data without external annotations. This method demonstrated notable improvements, particularly in complex reasoning tasks. Beyond task creation, another promising research direction involves leveraging interaction feedback directly for parameter updates. For instance, SELF(Lu
 et al.
, [2023](https://arxiv.org/html/2507.21046v4#bib.bib174)), SCoRe(Kumar
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib175)), and PAG(Jiang
 et al.
, [2025b](https://arxiv.org/html/2507.21046v4#bib.bib176)) interpret execution traces or natural-language critiques as reward signals within an online Supervised Fine-Tuning (SFT) combined with Reinforcement Learning (RL) framework, enabling continuous policy improvement. TextGrad(Yellamraju and others, [2024](https://arxiv.org/html/2507.21046v4#bib.bib177)) further extends this concept by treating unstructured textual feedback as a differentiable training signal capable of directly influencing both prompt design and model parameters. Additionally, AutoRule(Wang and Xiong, [2025](https://arxiv.org/html/2507.21046v4#bib.bib263)) converts language-model reasoning traces and preference feedback into explicit rule-based training rewards, enhancing the quality of model outputs through structured reward signals. Collectively, these advancements chart a clear trajectory—from agents autonomously crafting their training tasks to directly refining their parameters based on execution feedback, highlighting the capacity of models to evolve continuously by learning from the data they produce.

##### Experience

Agents can evolve not only by adjusting their internal parameters but also by actively interacting with or even constructing their environments, capturing experiences, and transforming them into learning signals that drive iterative improvement. This environmental loop provides agents with the complexity and diversity required for scalable self-adaptation. The Self-Challenging Agent (SCA)(Zhou
 et al.
, [2025e](https://arxiv.org/html/2507.21046v4#bib.bib298)) exemplifies this dynamic at the task level, where the agent autonomously generates novel Code-as-Task problems, executes them, and then filters successful trajectories for retraining itself. AgentGen(Hu
 et al.
, [2024b](https://arxiv.org/html/2507.21046v4#bib.bib8)) extends this concept to full-environment generation, synthesizing diverse simulation worlds (in PDDL or Gym-style formats) derived from an initial corpus. It implements a bidirectional evolution loop that progressively adjusts task difficulty, enabling the agent to continuously grow within a dynamically structured curriculum. Reflexion(Shinn
 et al.
, [2023](https://arxiv.org/html/2507.21046v4#bib.bib166)) complements this by introducing self-reflective mechanisms, where agents iteratively record natural-language critiques of their previous actions, guiding future behavior to avoid recurring mistakes. Additionally, AdaPlanner(Sun
 et al.
, [2023](https://arxiv.org/html/2507.21046v4#bib.bib173)) introduces closed-loop adaptive planning, allowing agents to refine their strategies on-the-fly based on environmental feedback, effectively reshaping action sequences in response to immediate outcomes. Similarly, Self-Refine(Madaan
 et al.
, [2023b](https://arxiv.org/html/2507.21046v4#bib.bib18)) employs an iterative refinement loop in which the agent repeatedly critiques and revises its initial outputs, significantly improving task accuracy without explicit retraining. SICA (Self-Improving Coding Agent)(Robeyns
 et al.
, [2025b](https://arxiv.org/html/2507.21046v4#bib.bib360)) further pushes the boundary by enabling agents to autonomously edit their underlying code and tools, iteratively enhancing their core reasoning abilities through direct self-modification. From a reinforcement learning perspective, frameworks such as RAGEN(Wang
 et al.
, [2025p](https://arxiv.org/html/2507.21046v4#bib.bib16)) and DYSTIL(Wang
 et al.
, [2025c](https://arxiv.org/html/2507.21046v4#bib.bib262)) conceptualize multi-step tool-use tasks as Markov Decision Processes, optimizing agent policies through rich environmental rewards and strategy induction loops. RAGEN leverages dense feedback from the environment to iteratively fine-tune action policies, while DYSTIL utilizes high-level strategy advice generated by language models to progressively internalize complex decision-making skills into reinforcement learning agents. Collectively, these approaches highlight a compelling paradigm where self-evolving agents not only leverage self-generated data but actively reshape their environments and internal mechanisms to fuel ongoing learning. Such dynamic interaction loops point toward autonomous, open-ended improvement cycles deeply grounded in experiential adaptation.

### 
3.2 
Context

An essential component of an LLM agent to be evolved is the context, which shapes how an agent behaves. To start with, we want to interpret two terms, "prompt optimization" and "memory evolution", which have been used in different literature. In most cases, these two terms can be used interchangeably because they both refer to what is included in the context window. Prompt optimization asks "how can we phrase or structure the instructions so the LLM behaves better?", and attends to details such as the wording, ordering. On the other hand, memory evolution asks "how should we store, forget, and retrieve context so that the agent can stay informed and perform better?", which focuses on what past information to surface or archive.

#### 
3.2.1 
Memory Evolution

LLM-based agents are increasingly designed with long-term memory mechanisms that grow and adapt as the agent continues to solve tasks and interacts with its environment(Shan
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib35); Qian
 et al.
, [2023a](https://arxiv.org/html/2507.21046v4#bib.bib50)). An evolving memory enables the agent to accumulate knowledge, recall past events, and adjust its behavior based on experience. Many works stress that effective memory management is crucial for agent performance(Zhong
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib38); Zhang
 et al.
, [2025e](https://arxiv.org/html/2507.21046v4#bib.bib39); Yan
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib45)). SAGE(Liang
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib10)) uses the Ebbinghaus forgetting curve to decide what to remember or forget. A-mem(Xu
 et al.
, [2025a](https://arxiv.org/html/2507.21046v4#bib.bib25)) updates the agent memory structure to create interconnected knowledge networks through dynamic indexing and linking, following the basic principles of the Zettelkasten method. Mem0(Chhikara
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib27)) introduces a two-phase pipeline where the agent first extracts salient facts from recent dialogue and then decides how to update the long-term memory: the agent can ADD new facts, MERGE/UPDATE redundant ones, or DELETE contradictions. Furthermore, Memory-R1 (Yan
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib449)) presents a reinforcement learning framework to train a dedicated Memory Manager agent that learns to select structured operations like ADD, UPDATE, and DELETE. Such a mechanism ensures the agent’s long-term memory is coherent and up-to-date. MemInsight(Salama
 et al.
, [2025](https://arxiv.org/html/2507.21046v4#bib.bib32)) augments raw memories with semantic structure, which summarizes and tags past interactions for retrieval later. REMEMBER(Zhang
 et al.
, [2024a](https://arxiv.org/html/2507.21046v4#bib.bib22)) combines an LLM with a memory of experiences and uses reinforcement learning signals to decide how to update that memory after each episode. Memento (Zhou
 et al.
, [2025b](https://arxiv.org/html/2507.21046v4#bib.bib448)) enables continual adaptation without fine-tuning the LLM’s parameters by employing online reinforcement learning to optimize a case-retrieval policy, which allows the agent to learn from past experiences stored in an evolving memory bank. MemGen (Zhang
 et al.
, [2025f](https://arxiv.org/html/2507.21046v4#bib.bib444)) introduces a dynamic generative memory that operates in a latent space. It uses a learned memory trigger to decide when to invoke memory and a weaver to construct latent token sequences, enabling a fluid interweaving of reasoning and memory.

A critical aspect of memory evolution is enabling agents to learn heuristics or skills from past experiences. Rather than only retrieving exact past instances, advanced agents distill experiences into more general guidance(Zhao
 et al.
, [2024a](https://arxiv.org/html/2507.21046v4#bib.bib26); Fu
 et al.
, [2024](https://arxiv.org/html/2507.21046v4#bib.bib31)). Expel(Zhao
 et al.
, [2024a](https://arxiv.org/html/2507.21046v4#bib.bib26)) processes past trajectories to generate insights and rules to guide further interactions. This experiential knowledge accumulation leads to m

...(内容已截断)
