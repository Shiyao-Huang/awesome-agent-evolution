# Memento-II: Learning by Stateful Reflective Memory

- URL: https://arxiv.org/html/2512.22716v1
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "AI agents" "memory" "reflection"

## Raw Content

## Memento-II: Learning by Stateful Reflective Memory

**Source**: https://arxiv.org/html/2512.22716v1

---

# Memento-II: Learning by Stateful Reflective Memory

Jun.WANG@cs.UCL.ac.uk 

###### Abstract

We present a new theoretical framework for continual and experiential learning in Large Language Model (LLM) agents that integrates episodic memory with reinforcement learning. We identify reflection as the central mechanism enabling agents to adapt through interaction without back-propagation or model fine-tuning, thereby breaking the conventional separation between training and deployment. Although our prior work on Memento [
zhou2025memento
] and case-based reasoning LLMs [
guo2025optimizing
, 
guo2024ds
] demonstrated strong empirical performance in open-ended, long-horizon tasks, the underlying learning and control principles remain theoretically unexplained. This paper further addresses this gap by introducing the Stateful Reflective Decision Process (SRDP), a formal abstraction of reflective memory dynamics, where an agent maintains episodic memory and performs two key operations: *writing*, which stores interaction outcomes and corresponds to *policy evaluation*, and *reading*, which retrieves relevant cases to make informed reflective decisions and corresponds to *policy improvement*. This equivalence allows us to analyse reflection using classical tools from dynamic programming and reinforcement learning, thereby transforming reflective memory from an empirical design pattern into a well-defined control-theoretic object. We further instantiate this stateful reflective learning by integrating retrieval with entropy-regularised policy iteration. The resulting algorithm performs soft policy iteration with guaranteed convergence. We also show that as memory expands and covers the state space more densely, the composite policy converges to the optimal solution. This theoretical framework unifies heuristic approaches such as case-based reasoning, retrieval-augmented generation with principled reinforcement learning, and provides a rigorous mathematical basis for building reflective, memory-augmented agents capable of continual adaptation and general-purpose learning. 

![Refer to caption](https://arxiv.org/html/x1.png)
Figure 1: 
*Learning by Stateful Reflection with Memory* realises continual learning without fine-tuning LLMs by iteratively *reading* from (policy improvement) and *writing* to (policy evaluation) an evolving *episodic memory* that drives the agent’s online adaptation. Empirically, this *Read-Write Learning* paradigm has shown strong effectiveness across diverse domains, including *software testing*[
guo2025optimizing
], *automated data science*[
guo2024ds
], and *deep research agents*[
zhou2025memento
], demonstrating that memory-driven reflection can endow LLM agents with genuine self-improving capabilities. 

## 
1 
Introduction

Modern machine learning is about learning from experience [
turing1996intelligent
, 
silver2025welcome
]; both supervised learning and reinforcement learning can be viewed as processes of optimising a parameterised model through experience, either from human labelled examples or data-driven feedback. The objective is to learn a mapping from inputs to outputs, or in the case of reinforcement learning, from states to actions, such that the resulting function generalises effectively to new, unseen situations [
shalev2014understanding
, 
valiant1984theory
]. Formally, the learner assumes that the target function is constrained by a family of parameterised models, for instance, neural networks, where the parameters determine the precise form of the mapping.

In supervised learning, these parameters are typically adjusted by minimising a loss function defined over labelled examples, whereas in reinforcement learning (RL), the supervision signal is indirect: instead of labelled outputs, the agent interacts with an environment, receives rewards, and adjusts its parameters to maximise the expected cumulative return [
SuttonBarto2018
]. In both cases, the parameters are updated by backpropagation, a gradient-based optimisation algorithm that propagates errors through the network to refine the model [
rumelhart1986learning
].

Despite their substantial empirical successes, current machine learning paradigms suffer from fundamental inefficiencies in sample complexity. Learning via backpropagation and gradient-based optimisation typically requires an enormous number of training examples, whether labelled data in supervised learning or interaction trajectories in reinforcement learning, before competent behaviour emerges [
goodfellow2016deep
, 
guo2025deepseek
]. From a theoretical perspective, this reflects the difficulty of identifying generalisable structure in high-dimensional, non-linear hypothesis classes when learning is driven almost entirely by statistical correlations [
shalev2014understanding
]. In the absence of explicit access to semantic abstractions, compositional structure, or task-level meaning, learning algorithms must recover regularities indirectly through averaging over large numbers of samples, leading to intrinsically high sample complexity.

The training of large language models continuously exemplify this frustration. Although massive pre-training endows them with broad linguistic and reasoning abilities, adapting them to specific tasks or domains still has to resort to additional fine-tuning, such as supervised fine-tuning (SFT) or reinforcement learning with human feedback (RLHF) [
ouyang2022training
], each demanding further large quantities of curated data or human annotations [
lightman2023let
].

In contrast, humans exploit semantic representations, episodic memory, and reflective reuse of experience to dramatically reduce the number of examples required for effective adaptation [
GershmanDaw2017EpisodicRL
]. This gap suggests that learning mechanisms operating beyond purely statistical optimisation, and instead leveraging stateful memory and semantic reflection, may offer a principled route to lower-complexity learning without reliance on large-scale gradient updates.

While current LLMs remain data-hungry and inefficient in training, they nonetheless exhibit emerging cognitive abilities that enable iterative generalisation to unseen tasks with only a few examples. These abilities can be broadly categorised into three forms of what this paper called *generalised reflection* (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2)):

1. 
1.

In-context learning.
 As early as GPT-3, researchers observed that LLMs could learn from a few human-provided examples directly within a prompt, a process known as *in-context learning*, where a few labelled examples guide behaviour on new tasks [
brown2020language
] (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2) (a)). For instance, given a few examples of English-to-French translations in the prompt, GPT-3 can correctly translate a new English sentence into French without any parameter updates.

2. 
2.

Feedback-driven reflection.
 Subsequent studies showed that given a specific unknown task, LLMs could refine their outputs through *interaction with the environment*, adjusting responses based on external feedback [
Yao2022ReAct
] (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2) (b)). For instance, in code generation, the LLM proposes a function, runs tests to observe errors or runtime feedback, and iteratively refines the code to reach a correct solution.

3. 
3.

Internal reasoning.
 More recently, LLM models have displayed the ability to perform *internal reasoning* via *chain-of-thought* processes before generating final outputs [
Wei2022CoT
] (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2) (c)). For instance, when solving a math word problem, the model explicitly writes intermediate reasoning steps (e.g., decomposing a problem into smaller parts) before computing the final numerical answer.

Although these mechanisms vary in complexity from human-guided examples (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2) (a)) to environment-driven feedback (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2) (b)) to purely internal reasoning (Figure [2](https://arxiv.org/html/2512.22716v1#S1.F2) (c)), they share a common principle: each relies on *intermediate reflection* to enable adaptation and generalisation beyond the training data. Such generalised reflection has been observed not only in pre-trained large language models (LLMs) [
brown2020language
, 
guo2025deepseek
], but also in multimodal LLMs [
driess2023palm
] and non-language transformers [
hollmann2025accurate
].

![Refer to caption](https://arxiv.org/html/x2.png)

(a) In-context learning     (b) Feedback-driven reflection      (c) Chain-of-thought

Figure 2: 
Three modes of *generalised* reflection in LLM agents: (a) in-context learning where few-shot exemplars in the prompt steer behaviour on new tasks; (b) post-output reflection via environmental feedback; (c) internal chain-of-thought and planning before emitting an answer.

In our earlier empirical work [
guo2024ds
, 
guo2025optimizing
, 
zhou2025memento
], we investigated whether reflection through memory could enable learning without parameter updates. We first introduced this paradigm with *case-based reasoning* LLM agents [
guo2024ds
], where adaptation arises from updating memory rather than fine-tuning model weights. Building on this foundation, *Memento*[
zhou2025memento
] formalised the idea within a *Memory-Augmented Markov Decision Process (M-MDP)* framework. Across domains such as *software testing*[
guo2025optimizing
], *automated data science*[
guo2024ds
], and *deep research*[
zhou2025memento
], this memory-driven reflection paradigm has consistently shown that LLMs can achieve continual self-improvement through accumulated experience rather than model retraining.

In this paper, we further provide a theoretical analysis and formation and leverage the capability of *generalised reflection* to develop a new paradigm for sample-efficient learning from experience without relying on data-intensive model training. Instead of updating model parameters, the proposed learning process operates through *intermediate reflection*, driven by relevant past experiences retrieved from an episodic memory [
GershmanDaw2017EpisodicRL
], as shown in Fig [1](https://arxiv.org/html/2512.22716v1#S0.F1). This framework can unify diverse sources of experience, whether originating from internal reasoning (e.g., chain-of-thought), interactions with the environment (e.g., ReAct [
Yao2022ReAct
]), or human-provided labelled data, under a single, memory-based learning mechanism.

We establish a theory of redefining how learning and decision-making are modelled through a proposed Stateful Reflective Decision Process (SRDP). Unlike the traditional Markov Decision Process (MDP), our framework introduces several conceptual shifts. First, the agent’s state now combines the current situation with its episodic memory, allowing it to incorporate past experiences directly while still maintaining a coherent Markov structure in this enlarged space (namely *reflected MDP*). Second, each action unfolds in two stages: the agent first recalls a relevant past case from memory, and then the language model produces a concrete response or behaviour based on that case. Third, the environment’s transitions and rewards are defined through the probabilistic reasoning of the language model itself, meaning that the model’s internal uncertainty is embedded in how the world evolves. Finally, memory evolves over time as the agent writes new experiences into it. This continual update makes the system dynamic and self-adaptive, without violating the overall Markovian formulation.

Within this formulation, learning naturally emerges from the process of retrieval: policy improvement is achieved through more effective retrieval, while policy evaluation is realised through writing experiences back to memory. This mechanism closely mirrors the principles of episodic control and reinforcement learning in humans [
GershmanDaw2017EpisodicRL
, 
fountas2024human
]. Consequently, such learning can be efficiently implemented using retrieval-augmented generation architectures equipped with large-scale memory systems [
Borgeaud2022RETRO
, 
Lewis2020RAG
].

A key desire property is its self-learnability. With a frozen LLM
1

1
1
While LLM parameters may evolve over time through offline updates given adequate data, such updates typically occur at a much slower timescale. Our approach does not rule out parameter learning, but instead addresses the intermediate regime in which adaptation must occur without immediate model updates.

 as its reasoning and reflection core, the agent improves through trial and error when data is limited and later reuses and combines past knowledge as experience grows. It balances exploitation (using known cases), exploration (targeted search in uncertain areas), and discovery (seeking new ones) through adaptive memory operations, achieving continual learning without parameter updates.

The paper is organised as follows. We first introduce the stateful reflective decision process framework. We then present theoretical results on convergence and analyse the model’s optimality and its properties as a continuously-learnable agent. Related work is reviewed next, and the paper concludes with directions for future research.

## 
2 
Stateful Reflection as Generalised Learning Methods

Recent advances in reflective prompting, such as Tree of Thoughts [
yao2023tree
] and Graph of Thoughts [
besta2024graph
], have demonstrated the potential of structured reflection to enhance LLM reasoning. In contrast, we explore a new learning paradigm that enables models to learn from experience through reflection grounded in *episodic memory*, rather than through parameter fine-tuning [
guo2024ds
, 
guo2025optimizing
, 
zhou2025memento
]. To support this paradigm, we introduce the *Stateful Reflective Decision Process* (SRDP), which formalises continual learning as a sequence of reflective interactions with memory. We begin by introducing the core concepts, leaving the detailed mathematical formulation to the sections that follow.

Covering the three modes of generalised reflection introduced earlier (Fig. [2](https://arxiv.org/html/2512.22716v1#S1.F2)), we define *reflection* in this work as follows.

###### 

Definition 1

(Reflection)
.

Reflection (generalised) is an iterative mechanism by which a large language model (LLM) agent progressively improves its effective policy through coordinated interaction with episodic memory, internal reasoning processes, and environmental feedback. It is not a single operation but a two-step procedure consisting of a *read* step followed by a *write* step, which together form a closed learning loop.

Figure [1](https://arxiv.org/html/2512.22716v1#S0.F1) illustrates the overall workflow of an SRDP. Episodic memory refers to the structured storage of past experiences, each recording the relationship among states, actions, and outcomes, in line with the classical notion of episodic memory in cognitive psychology [
tulving1983elements
]. Given a task or query represented as a state (1), the agent first enters an internal reflection stage (2), during which the LLM retrieves relevant experiences from episodic memory to guide reasoning and decision-making. Based on this reflective conditioning, the LLM produces an answer or action (3), which interacts with the external environment (4) and yields evaluative feedback, such as rewards, correctness signals, or task-level assessments. This feedback is then used to update episodic memory (5), storing new experiences that capture the consequences of the agent’s decisions. The process alternates between reading from memory for policy improvement and writing to memory for policy evaluation, enabling continual learning without modifying the underlying LLM parameters.

Formally, let πt\pi_{t} denote the agent’s effective policy at iteration kk, implicitly represented by its prompt, episodic memory contents, and internal reasoning configuration. Reflection defines an operator 𝒯\mathcal{T} such that

|  | πt+1=𝒯​(πt)=Read​(Write​(πt)).\pi_{t+1}=\mathcal{T}(\pi_{t})=\text{Read}\bigl(\text{Write}(\pi_{t})\bigr). |  |
|---|---|---|

The *read* step corresponds to policy improvement: the agent conditions on retrieved episodic memories, contextual exemplars, or intermediate reasoning traces to construct an improved action distribution for the current state. In LLM agents, such conditioning reshapes the effective policy directly, without parameter updates,

|  | πt+1←ℛ​(πt∣st,Mt),\pi_{t+1}\leftarrow\mathcal{R}(\pi_{t}\mid s_{t},M_{t}), |  |
|---|---|---|

where sts_{t} denotes the current environment state and MtM_{t} the episodic memory state. The *write* step corresponds to policy evaluation: the agent generates an action, plan, or answer under πt+1\pi_{t+1}, producing trajectories

|  | τt∼πt+1,\tau_{t}\sim\pi_{t+1}, |  |
|---|---|---|

whose outcomes yield evaluative feedback,

|  | V^​(πt+1)←Eval​(τt),\hat{V}(\pi_{t+1})\leftarrow\text{Eval}(\tau_{t}), |  |
|---|---|---|

which is subsequently stored in episodic memory for future reads.

As we shall show in the following sections, this alternating read–write mechanism is formally analogous to *policy iteration* in reinforcement learning. Policy improvement is realised through memory-conditioned inference, while policy evaluation is realised through interaction-driven feedback and experience accumulation. Under mild assumptions that reading yields non-decreasing policy quality with respect to accumulated feedback and that writing provides informative evaluation signals, the iterative reflection process converges to a fixed point corresponding to an optimal or self-consistent policy.

The SRDP generalises and unifies several existing paradigms. Compared with case-based reasoning (CBR), which retrieves and adapts discrete past cases for problem solving [
guo2024ds
, 
AamodtPlaza1994
], SRDP embeds such retrieval in a sequential decision process, explicitly modelling temporal dependencies and memory dynamics under the Markov assumption. In contrast to retrieval-augmented generation (RAG), which conditions generation on static external documents [
Borgeaud2022RETRO
], SRDP treats memory as a continually evolving component, updated through interaction and grounded in feedback. From the perspective of memory-based reinforcement learning (RL), SRDP can be viewed as replacing parameter updates with LLM reflective memory updates, allowing the policy to improve through structured recall rather than gradient-based optimisation [
ramani2019short
].

This formulation is also strongly inspired by neuroscientific findings on the role of the hippocampus in episodic memory and reflective cognition [
hami2025
, 
McClelland1995CLS
]. In humans and animals, episodic recall supports flexible reasoning and planning by replaying past experiences, an ability mirrored by the reflective cycles of SRDP. Thus, the Stateful Reflective Decision Process provides both a computational and cognitive bridge: it formalises how memory and reflection together enable continual, self-improving intelligence without explicit retraining.

Experimentally, it has been demonstrated that this approach enables learning without fine-tuning across various agentic tasks, including data-science agents [
guo2025optimizing
], software-testing agents [
guo2024ds
], and deep-research agents [
zhou2025memento
].

## 
3 
Learning by Stateful Reflective Experience

Mathematically, the core idea is to extend the Markov Decision Process [
Puterman1994
] with an intermediate reflection stage, where the agent retrieves relevant experiences from external memory before generating the final output, enabling continual and memory-based learning.

### 
3.1 
Preliminary: Markov Decision Process

We begin by introducing the Markov Decision Process (MDP) [
Puterman1994
], the standard framework for modelling decision-making in agents. An LLM agent, viewed as a large language model capable of reasoning and acting through interaction with its environment [
christianos2023pangu
, 
yang2025agentic
, 
wang2025tutorial
, 
wan2024alphazero
], can be naturally described within this framework. Formally, an MDP is defined by the tuple ⟨𝒮,𝒜,𝒫,ℛ,γ⟩\langle\mathcal{S},\mathcal{A},\mathcal{P},\mathcal{R},\gamma\rangle. Here, 𝒮\mathcal{S} is the state space, 𝒜\mathcal{A} the action space, 𝒫​(s′∣s,a)\mathcal{P}(s^{\prime}\mid s,a) denotes the transition kernel, specifying the probability of reaching state s′s^{\prime} after taking action aa in state ss; ℛ​(s,a)∈ℝ\mathcal{R}(s,a)\in\mathbb{R} represents the expected immediate reward; and γ∈[0,1)\gamma\in[0,1) is the discount factor. Here, the *state*ss corresponds to the current prompt or task context. Specifically, in the context of LLM reasoning, states correspond to intermediate reasoning steps [
wang2025tutorial
, 
wang2024openr
], and when interacting with the external environment, they may take the form of textual descriptions of the environment state [
christianos2023pangu
]. The *action*aa is the model’s generated output or decision, and the *transition* describes how the environment or subsequent prompt evolves after the model’s response [
wang2025tutorial
]. A (stochastic) policy π​(a∣s)\pi(a\mid s) defines a probability distribution over actions conditioned on the current state and, in turn, induces the value function that measures the expected return when following the policy from a given state.

|  | Vπ​(s)=𝔼π,𝒫​[∑t=0∞γt​ℛ​(st,at)|s0=s],V^{\pi}(s)=\mathbb{E}_{\pi,\mathcal{P}}\!\left[\sum_{t=0}^{\infty}\gamma^{t}\mathcal{R}(s_{t},a_{t})\,\bigg|\,s_{0}=s\right], |  |
|---|---|---|

with the state–action value function

|  | Qπ​(s,a)=ℛ​(s,a)+γ​𝔼s′∼𝒫(⋅∣s,a)​[Vπ​(s′)].Q^{\pi}(s,a)=\mathcal{R}(s,a)+\gamma\,\mathbb{E}_{s^{\prime}\sim\mathcal{P}(\cdot\mid s,a)}\!\left[V^{\pi}(s^{\prime})\right]. |  |
|---|---|---|

The optimal value functions are

|  | V⋆​(s)=maxπ⁡Vπ​(s),Q⋆​(s,a)=ℛ​(s,a)+γ​𝔼s′∼𝒫(⋅∣s,a)​[maxa′⁡Q⋆​(s′,a′)].V^{\star}(s)=\max_{\pi}V^{\pi}(s),\qquad Q^{\star}(s,a)=\mathcal{R}(s,a)+\gamma\,\mathbb{E}_{s^{\prime}\sim\mathcal{P}(\cdot\mid s,a)}\!\left[\max_{a^{\prime}}Q^{\star}(s^{\prime},a^{\prime})\right]. |  |
|---|---|---|

For large language model (LLM) agents [
christianos2023pangu
, 
wan2024alphazero
, 
zeng2024token
], the policy is typically given by the LLM itself, which maps input states or prompts directly to action distributions through its generative reasoning process:

|  | πLLM​(a∣s)≡pLLM​(a∣s;θ),\pi_{\mathrm{LLM}}(a\mid s)\equiv p_{\mathrm{LLM}}(a\mid s;\,\theta), |  |
|---|---|---|

where θ\theta denotes the (frozen in our case) parameters of the pre-trained model. Next, we extend the LLM’s stochastic policy by incorporating contributions from episodic memory, allowing past experiences to influence current decisions.

### 
3.2 
Stateful Reflective Decision Process

Building on the standard Markov Decision Process (MDP) framework introduced in the previous section, we now present the proposed *Stateful Reflective Decision Process (SRDP)*. The classical MDP ⟨𝒮,𝒜,𝒫,ℛ,γ⟩\langle\mathcal{S},\mathcal{A},\mathcal{P},\mathcal{R},\gamma\rangle captures agent–environment interaction in its simplest form but lacks mechanisms for reflection and memory. To enable reflective, memory-driven behaviour, we extend this formulation by augmenting the agent with an episodic memory space ℳ\mathcal{M}, a memory retrieval policy μ\mu, and a stochastic LLM kernel pLLMp_{\mathrm{LLM}} that generates context-dependent actions conditioned on both the current environment state and retrieved memory, yielding the Stateful Reflective Decision Process (SRDP). Finally, by absorbing the retrieval and LLM-generation mechanisms into effective transition and reward functions defined over the augmented state space 𝒳=𝒮×ℳ\mathcal{X}=\mathcal{S}\times\mathcal{M}, we obtain a simplified induced process, referred to as the *Reflected MDP*. This induced process captures the full reflective dynamics of the LLM agent in a Markovian form, where a composite policy πM\pi_{M} governs decision-making through the joint interaction of memory access and language-based reasoning. The following illustrates the relationships:

|  | ⟨𝒮,𝒜,𝒫,ℛ,γ⟩⏟Underlying MDP\displaystyle\underbrace{\langle\mathcal{S},\mathcal{A},\mathcal{P},\mathcal{R},\gamma\rangle}_{\text{Underlying MDP}} | →ext.⟨𝒮,𝒜,𝒫,ℛ,γ,ℳ,μ,pLLM⟩⏟SRDP→equiv.⟨𝒳:=𝒮×ℳ,𝒞,𝒫LLM,ℛLLM,γ,πM⟩⏟Reflected MDP\displaystyle\xrightarrow{\;ext.\;}\underbrace{\Big\langle\mathcal{S},\mathcal{A},\mathcal{P},\mathcal{R},\gamma,\mathcal{M},\mu,p_{\mathrm{LLM}}\Big\rangle}_{\text{SRDP}}\xrightarrow{\;equiv.\;}\underbrace{\Big\langle\mathcal{X}{:=}\mathcal{S}\times\mathcal{M},\ \mathcal{C},\ \mathcal{P}^{\mathrm{LLM}},\ \mathcal{R}^{\mathrm{LLM}},\ \gamma,\ \pi_{M}\Big\rangle}_{\text{Reflected MDP}} |  | (1) |
|---|---|---|---|---|

#### 
3.2.1 
Definition

###### 

Definition 2

(Stateful Reflective Decision Process (SRDP))
.

SRDP is a tuple

|  | ⟨𝒮,𝒜,𝒫,ℛ,γ,ℳ,pLLM⟩\langle\mathcal{S},\mathcal{A},\mathcal{P},\mathcal{R},\gamma,\mathcal{M},p_{\mathrm{LLM}}\rangle |  |
|---|---|---|

that extends the standard MDP formalism by incorporating episodic memory and a language-model-based decision kernel. The components are defined as follows:

- 
•

𝒮\mathcal{S}: state space;

- 
•

𝒜\mathcal{A}: environment action space;

- 
•

𝒫(⋅∣s,a)\mathcal{P}(\cdot\mid s,a): transition kernel;

- 
•

ℛ​(s,a)∈ℝ\mathcal{R}(s,a)\in\mathbb{R}: reward function;

- 
•

γ∈[0,1)\gamma\in[0,1): discount factor;

- 
•

ℳ\mathcal{M}: space of finite episodic memories, where each memory M∈ℳM\in\mathcal{M} is a multiset of cases c=(s,a,r)c=(s,a,r)
2

2
2
In multi-state settings, rr can be replaced by an estimated value QQ, where Bellman or TD updates are propagated across memory.

;

- 
•

pLLM​(a∣s,c)p_{\mathrm{LLM}}(a\mid s,c): the LLM kernel that generates an environment action conditioned on the current state ss and a retrieved case cc.

At time tt, the agent maintains episodic memory Mt={ci}i=1NtM_{t}=\{c_{i}\}_{i=1}^{N_{t}}, where NtN_{t} is the number of cases in the current memeory, and observes the current environment state sts_{t}. The decision process unfolds in two stages:

1. 
1.

*Retrieval Stage:* A case ctc_{t} is sampled from memory according to the retrieval policy

|  | ct∼μ(⋅∣st,Mt),c_{t}\sim\mu(\cdot\mid s_{t},M_{t}), |  |
|---|---|---|

where μ\mu is the retrieval policy (e.g., similarity-based or learned).

2. 
2.

*Action Stage:* The LLM generates an action conditioned on the retrieved case:

|  | at∼pLLM(⋅∣st,ct).a_{t}\sim p_{\mathrm{LLM}}(\cdot\mid s_{t},c_{t}). |  |
|---|---|---|

This defines a *composite policy*:

|  | π​(a∣s,M)=∑c∈Mμ​(c∣s,M)​pLLM​(a∣s,c).\pi(a\mid s,M)=\sum_{c\in M}\mu(c\mid s,M)\,p_{\mathrm{LLM}}(a\mid s,c). |  | (2) |
|---|---|---|---|

After executing the action ata_{t}, the environment changes to st+1∼𝒫(⋅∣st,at)s_{t+1}\sim\mathcal{P}(\cdot\mid s_{t},a_{t}), yields a reward rt=ℛ​(st,at)r_{t}=\mathcal{R}(s_{t},a_{t}), and the memory updates to Mt+1=𝖶𝗋𝗂𝗍𝖾​(Mt,st,at,rt)M_{t+1}=\mathsf{Write}(M_{t},s_{t},a_{t},r_{t}).

Figure 3: 
A graphical model of the Stateful Reflective Decision Process (SRDP) showing the augmented state space xt=(st,Mt)x_{t}=(s_{t},M_{t}), retrieval actions ctc_{t}, LLM conditioning, and memory evolution. Dashed boxes indicate augmented states combining environment state and memory.

Figure [3](https://arxiv.org/html/2512.22716v1#S3.F3) depicts the graphical model of the Stateful Reflective Decision Process (SRDP), characterised by a *dual-action structure*. The agent first performs a *retrieval action*ct∈Mtc_{t}\in M_{t} (green nodes), selecting a relevant past case from memory to guide its current decision. This retrieval is controlled by the policy μ​(c∣s,M)\mu(c\mid s,M), represented by the blue arrows connecting the current environment state sts_{t} and memory MtM_{t} to the retrieval node ctc_{t}. The policy evaluates both the similarity between the current state and stored experiences, and the local density of memory cases. Conditioned on the retrieved case, the LLM then reflects upon the retrieved experience and generates the environment action at∈𝒜a_{t}\in\mathcal{A} (blue nodes) via its generative kernel pLLM​(a∣s,c)p_{\mathrm{LLM}}(a\mid s,c), shown by the green arrows. Through this hierarchical process, the retrieval stage provides contextual grounding, while the LLM generates the final action, jointly realising *stateful reflection*, as illustrated in Figure [1](https://arxiv.org/html/2512.22716v1#S0.F1).

A key advantage of this dual-action structure is that it defines a composite policy (Eq. [2](https://arxiv.org/html/2512.22716v1#S3.E2)) that unifies classical reinforcement learning [
SuttonBarto2018
] with LLM-based decision-making [
christianos2023pangu
], thereby combining the strengths of both paradigms. To illustrate, consider two limiting cases. In the first case, a naive LLM produces an action a∈ca\in c directly from a retrieved case cc, effectively treating the case as a prompt. Here, the policy reduces to a standard reinforcement learning or episodic control scheme [
blundell2016model
, 
pritzel2017neural
, 
ramani2019short
], where the retrieval function μ\mu selects the case cc with the highest QQ-value, and the corresponding action is executed. In the opposite extreme, when no relevant experience exists in memory, the agent must rely entirely on the internal knowledge of the LLM to generate actions. Between these two cases lies the general setting of the SRDP, where the agent can integrate both sources of information, the reasoning capability of the LLM and the experiential knowledge stored in memory, to produce more adaptive and effective decisions.

The memory evolution mechanism forms a crucial component of the SRDP dynamics. Purple arrows demonstrate how memory grows through 𝖶𝗋𝗂𝗍𝖾​(M,s,a,r)\mathsf{Write}(M,s,a,r) operations, with experience tuples (st,at,rt)(s_{t},a_{t},r_{t}) being incorporated into the memory at the next time step. This creates a directed evolution M0→M1→⋯→MtM_{0}\to M_{1}\to\cdots\to M_{t} where the memory size |Mt||M_{t}| increases over time, expanding the agent’s retrieval options.

However, the introduction of memory fundamentally alters the dynamics of the system, making the process no longer strictly Markovian if the original state is considered. In a standard MDP, the next state depends only on the current state and action, i.e., the system satisfies P​(st+1∣st,at,st−1,at−1,…)=P​(st+1∣st,at).P(s_{t+1}\mid s_{t},a_{t},s_{t-1},a_{t-1},\ldots)=P(s_{t+1}\mid s_{t},a_{t}). However, once we introduce an evolving memory MtM_{t} that accumulates past experience tuples (si,ai,ri)(s_{i},a_{i},r_{i}), the transition to the next augmented state depends on the entire history through MtM_{t}. Formally, P​(st+1,Mt+1∣st,at,Mt)≠P​(st+1,Mt+1∣st,at)P(s_{t+1},M_{t+1}\mid s_{t},a_{t},M_{t})\neq P(s_{t+1},M_{t+1}\mid s_{t},a_{t}) because MtM_{t} itself is a summary of all past interactions. We address this issue next by defining a simplified MDP that incorporates memory directly into the state representation while embedding the fixed LLM within the environment dynamics. This formulation enables us to focus on optimising the retrieval policy, with both the LLM’s behaviour and memory evolution captured within the new state–transition structure.

#### 
3.2.2 
Transforming to Reflected MDP

To recover a Markovian formulation, we redefine the state to include memory, forming an *augmented state*xt=(st,Mt)x_{t}=(s_{t},M_{t}). The resulting process over xt{x_{t}} is Markovian in this expanded space, even though the underlying environment process over st{s_{t}} is not. Each augmented state xt=(st,Mt)x_{t}=(s_{t},M_{t}) combines the environment state sts_{t} with the episodic memory MtM_{t}, as illustrated by the dashed rectangles in Figure [3](https://arxiv.org/html/2512.22716v1#S3.F3).

In addition, since our focus is on the retrieval process rather than on modifying the LLM itself, we treat the LLM as a fixed component of the environment. Its action generation is absorbed into the environment’s transition and reward functions, effectively redefining the interaction dynamics. Under this view, the agent’s controllable decision is the retrieval action ct∼μ(⋅∣st,Mt),c_{t}\sim\mu(\cdot\mid s_{t},M_{t}), while the environment, augmented by the fixed LLM kernel (pLLM​(a∣st,ct)p_{\mathrm{LLM}}(a\mid s_{t},c_{t})), determines both the resulting state transition and reward. This formulation leads naturally to a new MDP in which the retrieval policy (μ\mu) becomes the agent’s primary policy, and the LLM-mediated dynamics are incorporated into the environment model. Overall, we have our new MDP that is simplified by introducing an augmented state space and LLM becoming part of environment, namely,

###### 

Definition 3

(Reflected MDP)
.

Given an underlying SRDP

|  | ℳSRDP=⟨𝒮,𝒜,𝒫,ℛ,γ,ℳ,pLLM⟩,\mathcal{M}_{\mathrm{SRDP}}=\langle\mathcal{S},\mathcal{A},\mathcal{P},\mathcal{R},\gamma,\mathcal{M},p_{\mathrm{LLM}}\rangle, |  |
|---|---|---|

with state space 𝒮\mathcal{S}, action space 𝒜\mathcal{A}, transition kernel 𝒫\mathcal{P}, reward function ℛ\mathcal{R}, discount factor γ\gamma, episodic memory ℳ\mathcal{M}, and an LLM kernel pLLM​(a∣s,c)p_{\mathrm{LLM}}(a\mid s,c), the *Reflected MDP* is a tuple

|  | ℳLLM=⟨𝒳,𝒞,𝒫LLM,ℛLLM,γ⟩,\mathcal{M}_{\mathrm{LLM}}=\langle\mathcal{X},\mathcal{C},\mathcal{P}_{\mathrm{LLM}},\mathcal{R}_{\mathrm{LLM}},\gamma\rangle, |  |
|---|---|---|

where the components are defined as follows:

- 
•

*Augmented state space:*𝒳=𝒮×ℳ\mathcal{X}=\mathcal{S}\times\mathcal{M}, with each state x=(s,M)x=(s,M) consisting of the current environment state ss and the current episodic memory MM.

- 
•

*Action space:*𝒞=M\mathcal{C}=M, corresponding to retrieval actions (selecting cases from memory).

- 
•

*Transition kernel:* For x=(s,M)x=(s,M) and c∈𝒞c\in\mathcal{C},

|  | 𝒫LLM​(x′∣x,c)=∑a∈𝒜pLLM​(a∣s,c)​ 1​{x′=(s′,𝖶𝗋𝗂𝗍𝖾​(M,s,a,ℛ​(s,a)))}​𝒫​(s′∣s,a),\mathcal{P}_{\mathrm{LLM}}(x^{\prime}\mid x,c)=\sum_{a\in\mathcal{A}}p_{\mathrm{LLM}}(a\mid s,c)\,\mathbf{1}\{x^{\prime}=(s^{\prime},\mathsf{Write}(M,s,a,\mathcal{R}(s,a)))\}\,\mathcal{P}(s^{\prime}\mid s,a), |  | (3) |
|---|---|---|---|

where 𝖶𝗋𝗂𝗍𝖾​(M,s,a,r)\mathsf{Write}(M,s,a,r) appends the new experience (s,a,r)(s,a,r) to memory.

- 
•

*Reward function:*

|  | ℛLLM​(x,c)=∑a∈𝒜pLLM​(a∣s,c)​ℛ​(s,a).\mathcal{R}_{\mathrm{LLM}}(x,c)=\sum_{a\in\mathcal{A}}p_{\mathrm{LLM}}(a\mid s,c)\,\mathcal{R}(s,a). |  | (4) |
|---|---|---|---|

The *Reflected MDP* provides a fully Markovian formulation over the augmented state space 𝒳=𝒮×ℳ\mathcal{X}=\mathcal{S}\times\mathcal{M}, where transitions and rewards correspond to the expected outcomes under the LLM kernel pLLMp_{\mathrm{LLM}}. Each transition involves four steps: (1) retrieving a case ct∼μ(⋅∣st,Mt)c_{t}\sim\mu(\cdot\mid s_{t},M_{t}) from memory, (2) generating an environment action at∼pLLM(⋅∣st,ct)a_{t}\sim p_{\mathrm{LLM}}(\cdot\mid s_{t},c_{t}), (3) sampling the next state st+1∼𝒫(⋅∣st,at)s_{t+1}\sim\mathcal{P}(\cdot\mid s_{t},a_{t}), and (4) updating the memory Mt+1=𝖶𝗋𝗂𝗍𝖾​(Mt,st,at,ℛ​(st,at))M_{t+1}=\mathsf{Write}(M_{t},s_{t},a_{t},\mathcal{R}(s_{t},a_{t})).

### 
3.3 
Policy Iteration

We now define the retrieval mechanism that underpins the learning method. The central idea is to use *local state density* to guide which past cases should be retrieved from memory. To capture the similarity structure in the memory bank, we employ *Parzen window estimation*[
Parzen1962
, 
wang2008unified
].

Let K:ℝd→ℝ≥0K:\mathbb{R}^{d}\to\mathbb{R}_{\geq 0} be a smooth kernel (e.g., Gaussian) with bandwidth h>0h>0, and let ψ:𝒮→ℝd\psi:\mathcal{S}\to\mathbb{R}^{d} be a state embedding. For memory M={ci=(si,ai,ri)}i=1NM=\{c_{i}=(s_{i},a_{i},r_{i})\}_{i=1}^{N} and query state ss, the Parzen similarity weight for case c∈Mc\in M is:

|  | wparzen​(s,c)=K​(ψ​(s)−ψ​(s​(c))/h)∑c′∈MK​(ψ​(s)−ψ​(s​(c′))/h),w_{\text{parzen}}(s,c)=\frac{K\left(\psi(s)-\psi(s(c))/h\right)}{\sum_{c^{\prime}\in M}K\left(\psi(s)-\psi(s(c^{\prime}))/h\right)}, |  | (5) |
|---|---|---|---|

where s​(c)s(c) denotes the state component of a case cc. The kernel defines a probability distribution over memory cases that places higher weight on states similar to the current query state ss. Thus, the Parzen prior μ0​(c∣x)\mu_{0}(c\mid x) over retrieval actions at augmented state x=(s,M)x=(s,M) is:

|  | μ0​(c∣x)≡wparzen​(s,c).\mu_{0}(c\mid x)\equiv w_{\text{parzen}}(s,c). |  | (6) |
|---|---|---|---|

In order to enable an LLM agent to act even when no relevant past cases exist in memory, we augment the case set 𝒞\mathcal{C} with a special *void case*:

|  | ℳv=ℳ∪{cv}.\mathcal{M}_{v}\;=\;\mathcal{M}\cup\{c_{v}\}. |  |
|---|---|---|

The void case cvc_{v} represents the ability of the agent to generate an action directly from its internal world knowledge, independently of retrieved memory. We formulate this by modifying the prior policy μ0\mu_{0} that incorporates a state-dependent mixture between memory-based retrieval and the void case. Let K​(x,c)K(x,c) be a similarity kernel for ordinary cases c∈𝒞c\in\mathcal{C}, and let Kv>0K_{v}>0 be a constant kernel score assigned to the void case cvc_{v}. Then, the prior distribution μ0(⋅∣x)\mu_{0}(\cdot\mid x) becomes

|  | μ0​(c∣x)≡{K​(x,c),c≠cv,Kv,c=cv,∑c′≠cvK​(x,c′)+Kv.\mu_{0}(c\mid x)\equiv\frac{\begin{cases}K(x,c),&c\neq c_{v},\\[3.0pt]
K_{v},&c=c_{v},\end{cases}}{\sum_{c^{\prime}\neq c_{v}}K(x,c^{\prime})+K_{v}}. |  | (7) |
|---|---|---|---|

It is useful to express this distribution as a mixture. Define the normalised memory-based distribution

|  | μmem​(c∣x)=K​(x,c)∑c′≠cvK​(x,c′),c≠cv,\mu_{\mathrm{mem}}(c\mid x)=\frac{K(x,c)}{\sum_{c^{\prime}\neq c_{v}}K(x,c^{\prime})},\qquad c\neq c_{v}, |  |
|---|---|---|

and let

|  | λ​(x)=∑c′≠cvK​(x,c′)∑c′≠cvK​(x,c′)+Kv.\lambda(x)=\frac{\sum_{c^{\prime}\neq c_{v}}K(x,c^{\prime})}{\sum_{c^{\prime}\neq c_{v}}K(x,c^{\prime})+K_{v}}. |  |
|---|---|---|

Then ([7](https://arxiv.org/html/2512.22716v1#S3.E7)) is equivalent to the mixture representation

|  | μ0​(c∣x)=λ​(x)​μmem​(c∣x)+(1−λ​(x))​δcv​(c),\mu_{0}(c\mid x)=\lambda(x)\,\mu_{\mathrm{mem}}(c\mid x)+\bigl(1-\lambda(x)\bigr)\,\delta_{c_{v}}(c), |  | (8) |
|---|---|---|---|

where δcv\delta_{c_{v}} denotes the unit point mass at cvc_{v}. This mixture form shows that the agent automatically interpolates between *reflection(retrieval)-driven behaviour* when similarity to stored cases is high (λ​(x)≈1\lambda(x)\approx 1) and *knowledge-driven discovery* through cvc_{v} when similarity is low (λ​(x)≈0\lambda(x)\approx 0). This mechanism mirrors the “discovery” component in infinite-armed bandits [
berry1997bandit
], complementing exploitation and exploration with the capacity to act beyond the current memory. This mechanism ensures that the agent can always act, even in novel states, while still exploiting relevant past experiences when available.

We aim for the agent’s final policy μ(⋅∣x)\mu(\cdot\mid x) to remain close to a prior policy μ0\mu_{0}, while still being shaped by reward feedback from the environment. To formalise this trade-off, we define a KL-regularised objective in terms of the state–case value function Qμ​(x,c)Q^{\mu}(x,c). The KL-regularised Bellman *evaluation* operator is

|  | (𝒯KLμQ)(x,c)=𝔼[r+γ(∑c′μ(c′∣x′)Q(x′,c′)−αKL(μ(⋅∣x′)∥μ0(⋅∣x′)))|x,c].(\mathcal{T}^{\mu}_{\mathrm{KL}}Q)(x,c)=\mathbb{E}\!\left[r+\gamma\left(\sum_{c^{\prime}}\mu(c^{\prime}\mid x^{\prime})\,Q(x^{\prime},c^{\prime})-\alpha\,\mathrm{KL}\!\bigl(\mu(\cdot\mid x^{\prime})\,\|\,\mu_{0}(\cdot\mid x^{\prime})\bigr)\right)\,\middle|\,x,c\right]. |  | (9) |
|---|---|---|---|

For any fixed μ\mu, this operator is a γ\gamma-contraction in the sup-norm and admits a unique fixed point QμQ^{\mu}, representing the KL-regularised value of μ\mu.

KL-Regularised Policy Improvement
 Given a QQ-function over retrieval actions, we define policy improvement as the solution to a KL-regularised optimisation problem. Namely, at each augmented state xx, the improved retrieval policy is:

|  | μ+(c∣x)∈argmaxν∈Δ​(M){∑c∈Mν(c|x)Q(x,c)−αKL(ν(c|x)∥μ0(⋅∣x))}\mu^{+}(c\mid x)\in\arg\max_{\nu\in\Delta(M)}\left\{\sum_{c\in M}\nu(c|x)\,Q(x,c)-\alpha\,\mathrm{KL}(\nu(c|x)\|\mu_{0}(\cdot\mid x))\right\} |  | (10) |
|---|---|---|---|

where Δ​(M)\Delta(M) is the simplex over finite set, memory MM, and α>0\alpha>0 is the temperature parameter.

###### 

Lemma 4

(also in [
neu2017unified
])
.

The optimisation problem ([10](https://arxiv.org/html/2512.22716v1#S3.E10)) has a unique solution:

|  | μ+​(c∣x)=μ0​(c∣x)​exp⁡(Q​(x,c)/α)∑c′∈Mμ0​(c′∣x)​exp⁡(Q​(x,c′)/α)\mu^{+}(c\mid x)=\frac{\mu_{0}(c\mid x)\,\exp(Q(x,c)/\alpha)}{\sum_{c^{\prime}\in M}\mu_{0}(c^{\prime}\mid x)\,\exp(Q(x,c^{\prime})/\alpha)} |  | (11) |
|---|---|---|---|

The proof can be found in Appendix [A](https://arxiv.org/html/2512.22716v1#A1). Because μ0​(cv∣x)>0\mu_{0}(c_{v}\mid x)>0 for all xx, the improved policy μ′\mu^{\prime} always assigns nonzero probability to the void case, preserving the agent’s capacity for discovery. To summary, for fixed retrieval policy μ\mu, we define soft state-action values with the Parzen prior incorporated into the evaluation operator, and the soft QQ-function for retrieval policy μ\mu satisfies:

|  | Qμ​(x,c)\displaystyle Q^{\mu}(x,c) | =𝔼​[r+γ​Vμ​(x′)∣x,c]\displaystyle=\mathbb{E}\left[r+\gamma V^{\mu}(x^{\prime})\mid x,c\right] |  | (12) |
|---|---|---|---|---|
|  | Vμ​(x)\displaystyle V^{\mu}(x) | =∑cμ(c∣x)Qμ(x,c)−αKL(μ(⋅∣x)∥μ0(⋅∣x)),\displaystyle=\sum_{c}\mu(c\mid x)\,Q^{\mu}(x,c)-\alpha\,\mathrm{KL}(\mu(\cdot\mid x)\|\mu_{0}(\cdot\mid x)), |  | (13) |

where the expectation integrates over a∼pLLM(⋅∣s,c)a\sim p_{\mathrm{LLM}}(\cdot\mid s,c), s′∼𝒫(⋅∣s,a)s^{\prime}\sim\mathcal{P}(\cdot\mid s,a), and M′=𝖶𝗋𝗂𝗍𝖾​(M,s,a,Q)M^{\prime}=\mathsf{Write}(M,s,a,Q).

KL-Regularised Policy Iteration
 Now, on the basis of policy evaluation in Eq. ([9](https://arxiv.org/html/2512.22716v1#S3.E9)) and policy improvement in Eq. ([11](https://arxiv.org/html/2512.22716v1#S3.E11)), we are ready to give the policy iteration algorithm, as shown in Algorithm [1](https://arxiv.org/html/2512.22716v1#alg1).

Algorithm 1

 Stateful Reflective Learning with Read–Write Loop

1:

Input:
 Temperature α>0\alpha>0, kernel bandwidth h>0h>0, initial Q0Q_{0}, initial reference prior μ0,0\mu_{0,0} (with void case cvc_{v}), initial memory M0M_{0}

2:

for
k=0,1,2,…k=0,1,2,\ldots
do

3:

(Prior Update)
 Using memory MkM_{k}, construct the Parzen kernel-based reference prior μ0,k+1(⋅∣x)\mu_{0,k+1}(\cdot\mid x) according to ([6](https://arxiv.org/html/2512.22716v1#S3.E6)), including the void case cvc_{v} via the mixture form in ([8](https://arxiv.org/html/2512.22716v1#S3.E8)). 

4:

(Memory Read, a.k.a, Policy Improvement)
 Update the policy by the KL-regularised greedy step 

|  | μk+1(⋅∣x)∝μ0,k+1(⋅∣x)exp(Qμk(x,⋅)/α),\mu_{k+1}(\cdot\mid x)\propto\mu_{0,k+1}(\cdot\mid x)\,\exp\bigl(Q^{\mu_{k}}(x,\cdot)/\alpha\bigr), |  |
|---|---|---|

 i.e. using the closed-form solution in ([11](https://arxiv.org/html/2512.22716v1#S3.E11)). 

5:

(Interact with Environment)
 Execute the policy (μk+1,pLLM)(\mu_{k+1},p_{\mathrm{LLM}}) and receive feedback rr. 

6:

(Memory Rewrite, a.k.a., Policy Evaluation)
 Collect transitions (s,a,r)(s,a,r), and update memory 

|  | Mk+1←𝖶𝗋𝗂𝗍𝖾​(Mk,s,a,r).M_{k+1}\leftarrow\mathsf{Write}(M_{k},s,a,r). |  |
|---|---|---|

7:

          Given μk\mu_{k} and μ0,k\mu_{0,k}, approximately solve QμkQ^{\mu_{k}} by iterating 

|  | Q←𝒯KLμk​QQ\leftarrow\mathcal{T}^{\mu_{k}}_{\mathrm{KL}}Q |  |
|---|---|---|

 using the KL-regularised evaluation operator in ([9](https://arxiv.org/html/2512.22716v1#S3.E9)). Two classes of memory representations: (i) a *tabular memory* that explicitly stores QQ-values for each state–action tuple, and (ii) a *parameterised memory* in which the QQ-function is represented by a neural network. 

8:

end

for

Under standard assumptions, this procedure yields a monotone improvement in the KL-regularised value and converges to the fixed point of the KL-regularised optimality operator,

|  | (𝒯KL∗Q)(x,c)=𝔼[r+γαlog∑c′μ0(c′∣x′)exp(Q(x′,c′)/α)|x,c].(\mathcal{T}^{*}_{\mathrm{KL}}Q)(x,c)=\mathbb{E}\!\left[r+\gamma\,\alpha\log\!\sum_{c^{\prime}}\mu_{0}(c^{\prime}\mid x^{\prime})\,\exp\!\bigl(Q(x^{\prime},c^{\prime})/\alpha\bigr)\,\middle|\,x,c\right]. |  |
|---|---|---|

Specifically, we define

###### 

Assumption 5

(Bounded rewards and discount)
.

|r|≤Rmax<∞|r|\leq R_{\max}<\infty, γ∈[0,1)\gamma\in[0,1).

###### 

Assumption 6

(Stationary memory dynamics during evaluation)
.

Within each policy-evaluation phase, the memory kernel is stationary (equivalently, treat MM as part of the state).

###### 

Theorem 7

(Convergence of Parzen-KL Soft Policy Iteration)
.

Under assumptions [5](https://arxiv.org/html/2512.22716v1#Thmtheorem5) and [6](https://arxiv.org/html/2512.22716v1#Thmtheorem6) (bounded rewards and γ<1\gamma<1 and stationary memory), the process (the reflected MDP) is an ordinary discounted MDP. Algorithm [1](https://arxiv.org/html/2512.22716v1#alg1) converges to a fixed point (Q⋆,μ⋆)(Q^{\star},\mu^{\star}) that is optimal for the KL-regularised objective with Parzen prior.

We refer to Appendix for the proof.

Discussion
 It is worth mentioning that the void case cvc_{v} plays a crucial role: by providing a state-independent baseline probability in μ0\mu_{0}, it ensures that policy iteration retains the ability to *discover* new behaviours beyond exploitation or exploration of existing memory. Unlike classical density estimation, our memory cases are not independent and identically distributed but are gathered sequentially through policy execution. Moreover, the finite memory constraint means we perform kernel smoothing over a limited and evolving set of points rather than relying on asymptotic density estimation. As a result, bandwidth selection plays a critical role in balancing local similarity against statistical robustness as the memory continues to grow. Several strategies can be used to choose the bandwidth hh. Silverman’s rule suggests setting h∝n−1/(d+4)h\propto n^{-1/(d+4)}, where n=|M|n=|M| is the memory size and dd the embedding dimension. Another approach is cross-validation, which tunes hh by optimising performance on held-out retrieval tasks. Finally, an adaptive strategy decreases hh as memory grows, ensuring that neighbourhoods remain local and informative.

### 
3.4 
Two-Time-Scale Convergence with Online Memory Re-writing

We next allow memory to evolve on a slower time-scale. Let ηt\eta_{t} be steps for evaluation/improvement and ρt\rho_{t} for memory updates, with ρt/ηt→0\rho_{t}/\eta_{t}\to 0, ∑tηt=∞\sum_{t}\eta_{t}=\infty, ∑tηt2<∞\sum_{t}\eta_{t}^{2}<\infty. We make the following assumptions.

###### 

Assumption 8

(Two-Time-Scale Conditions)
.

1. 
(i)

*Step sizes*: ηt>0\eta_{t}>0, ρt>0\rho_{t}>0 with:

|  | ∑t=0∞ηt=∞,∑t=0∞ηt2<∞,∑t=0∞ρt=∞,∑t=0∞ρt2<∞,limt→∞ρtηt=0\displaystyle\sum_{t=0}^{\infty}\eta_{t}=\infty,\quad\sum_{t=0}^{\infty}\eta_{t}^{2}<\infty,\quad\sum_{t=0}^{\infty}\rho_{t}=\infty,\quad\sum_{t=0}^{\infty}\rho_{t}^{2}<\infty,\quad\lim_{t\to\infty}\frac{\rho_{t}}{\eta_{t}}=0 |  |
|---|---|---|

2. 
(ii)

*Martingale difference noise*: ξt(Q)\xi^{(Q)}_{t} and ξt(μ)\xi^{(\mu)}_{t} are martingale difference sequences with respect to the filtration ℱt\mathcal{F}_{t}, information available up to time tt (random variable with zero conditional mean) :

|  | 𝔼​[ξt(Q)|ℱt]=0,𝔼​[ξt(μ)|ℱt]=0,𝔼​[(ξt(Q))2|ℱt]≤K,𝔼​[(ξt(μ))2|ℱt]≤K\displaystyle\mathbb{E}[\xi^{(Q)}_{t}|\mathcal{F}_{t}]=0,\quad\mathbb{E}[\xi^{(\mu)}_{t}|\mathcal{F}_{t}]=0,\quad\mathbb{E}[(\xi^{(Q)}_{t})^{2}|\mathcal{F}_{t}]\leq K,\quad\mathbb{E}[(\xi^{(\mu)}_{t})^{2}|\mathcal{F}_{t}]\leq K |  |
|---|---|---|

3. 
(iii)

*Bounded iterates*: The sequences {Qt}\{Q_{t}\}, {μt}\{\mu_{t}\}, {Mt}\{M_{t}\} remain bounded almost surely.

4. 
(iv)

*Memory attractor*: The memory process {Mt}\{M_{t}\} has a compact attractor set ℳ∞⊂ℳ\mathcal{M}_{\infty}\subset\mathcal{M}. This means memory size is bounded and the content distribution stabilises over time. In practice, this is achieved by: 1) Using fixed-size memory, 2) Having policies that converge to stationary distributions, 3) Using environments that produce stationary experience streams, or 4) Conservative memory update strategies.

###

...(内容已截断)
