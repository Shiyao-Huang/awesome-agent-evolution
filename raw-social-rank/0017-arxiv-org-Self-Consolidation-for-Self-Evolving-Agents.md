# Self-Consolidation for Self-Evolving Agents

- URL: https://arxiv.org/html/2602.01966v1
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "self-evolving agents"

## Raw Content

## Self-Consolidation for Self-Evolving Agents

**Source**: https://arxiv.org/html/2602.01966v1

---

# Self-Consolidation for Self-Evolving Agents

Hongzhuo Yu1
, 
Fei Zhu2
1

1
footnotemark: 

1

, 
Guo-Sen Xie3
, 
Ling Shao1

1

UCAS-Terminus AI Lab, University of Chinese Academy of Sciences  
2Centre for Artificial Intelligence and Robotics, HKISI-CAS  
3School of Computer Science and Engineering, Nanjing University of Science and Technology, Nanjing, China  

yuhongzhuo24@mails.ucas.ac.cn, zhfei2018@gmail.com, gsxiehm@gmail.com, ling.shao@ieee.org

  These authors contributed equally to this work.

###### Abstract

While large language model (LLM) agents have demonstrated impressive problem-solving capabilities, they typically operate as static systems, lacking the ability to evolve through lifelong interaction. Existing attempts to bridge this gap primarily rely on retrieving successful past trajectories as demonstrations. However, this paradigm faces two critical limitations. First, by focusing solely on success, agents overlook the rich pedagogical value embedded in failed attempts, preventing them from identifying and avoiding recurrent pitfalls. Second, continually accumulating textual experiences not only increases the time consumption during retrieval but also inevitably introduces noise and exhausts the largest context window of current LLMs. To address these challenges, we propose a novel self-evolving framework for LLM agents that introduces a complementary evolution mechanism: First, a contrastive reflection strategy is introduced to explicitly summarize error-prone patterns and capture reusable insights. Second, we propose a self-consolidation mechanism that distills non-parametric textual experience into compact learnable parameters. This enables the agent to internalize extensive historical experience directly into its latent space. Extensive experiments demonstrate the advantages of our method in long-term agent evolution.

Self-Consolidation for Self-Evolving Agents

 Hongzhuo Yu1
†

†
thanks: 
  These authors contributed equally to this work.

, Fei Zhu2
1

1
footnotemark: 

1

, Guo-Sen Xie3, Ling Shao1

1UCAS-Terminus AI Lab, University of Chinese Academy of Sciences

2Centre for Artificial Intelligence and Robotics, HKISI-CAS

3School of Computer Science and Engineering, Nanjing University of Science and Technology, Nanjing, China

yuhongzhuo24@mails.ucas.ac.cn, zhfei2018@gmail.com, gsxiehm@gmail.com, ling.shao@ieee.org

## 
1 
Introduction

Recent years have witnessed the rapid development of large language models (LLMs) (Team
 et al.
, [2023](https://arxiv.org/html/2602.01966v1#bib.bib1); Yang
 et al.
, [2025a](https://arxiv.org/html/2602.01966v1#bib.bib9); Liu
 et al.
, [2024a](https://arxiv.org/html/2602.01966v1#bib.bib10); Touvron
 et al.
, [2023](https://arxiv.org/html/2602.01966v1#bib.bib11)), enabling AI agents to tackle complex tasks ranging from code generation (Nijkamp
 et al.
, [2022](https://arxiv.org/html/2602.01966v1#bib.bib13); Zheng
 et al.
, [2023](https://arxiv.org/html/2602.01966v1#bib.bib14)) to mathematical reasoning (Lu
 et al.
, [2023b](https://arxiv.org/html/2602.01966v1#bib.bib12)). Despite these successes, a fundamental bottleneck remains: most agents operate under a task-isolation paradigm (Deng
 et al.
, [2023](https://arxiv.org/html/2602.01966v1#bib.bib15); Yoran
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib16)). They function as stateless entities that reset after every session, failing to accumulate knowledge or learn from experience in a human-like manner (Zheng
 et al.
, [2025a](https://arxiv.org/html/2602.01966v1#bib.bib2)).

![Refer to caption](https://arxiv.org/html/x1.png)
Figure 1: 
Illustration of the proposed self-consolidation framework for LLM agents lifelong evolution.

To achieve evolutionary test-time learning, recent studies (Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26); Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)) have explored explicit textual replay, where historical interactions are retrieved to guide future actions. However, current approaches suffer from two major limitations that hinder their practical scalability and effectiveness. First, most approaches focus exclusively on successful experiences (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17); Yang
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib18); Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26)), thereby overlooking the informative value of failure cases. Agents’ faulty problem-solving processes often contain critical information for preventing repeated failures; however, such information is rarely incorporated into learning mechanisms. Second, the fixed and limited context window of LLMs (Jin
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib19)) imposes a strict constrain on the amount of experiential information that can be incorporated at inference time. As a result, only a small subset of past interactions can be retrieved or replayed, forcing agents to rely on truncated trajectories or heuristic experience selection strategies. This constraint not only leads to the loss of contextual dependencies across tasks but also weakens the agent’s ability to integrate cumulative knowledge over time, ultimately limiting robust reasoning and long-term performance. Besides, incorporating too many textual demonstrations might introduce contextual noise (Hsieh
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib7)), where redundant information dilutes the model’s attention (Liu
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib6)) and impairs inference accuracy.

![Refer to caption](https://arxiv.org/html/x2.png)
(a) 

![Refer to caption](https://arxiv.org/html/x3.png)
(b) 

![Refer to caption](https://arxiv.org/html/x4.png)
(c) 

Figure 2: 
Performance comparison of different methods across the (a) Database (DB), (b) Operating System (OS), and (c) Knowledge Graph (KG) agent lifelong learning benchmarks using Llama 3.1-8B-Instruct (Dubey
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib5)) and Qwen 2.5-7B-Instruct (Yang
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib3)). EvoSC surpasses strong baselines such as AWM (Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26)), TER (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)), SCM (Wang
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib44)), and A-MEM (Xu
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib45)).

To address these challenges, we introduce EvoSC, a self-consolidation framework designed to continuously internalize experience and knowledge from test-time interactions into the agent’s parameters, as illustrated in Figure [1](https://arxiv.org/html/2602.01966v1#S1.F1). Specifically, EvoSC mimics the principle of human cognitive learning (Tamnes
 et al.
, [2013](https://arxiv.org/html/2602.01966v1#bib.bib8); Spens and Burgess, [2024](https://arxiv.org/html/2602.01966v1#bib.bib4)) through two synergistic components. On the one hand, we design a contrastive experience extraction mechanism that prompts the LLM to analyze successful and failed trajectories, highlighting the subtle divergences in reasoning that lead to errors. Consequently, the agent extracts two types of explicit guidance: error-prone insights to avoid pitfalls and successful patterns to replicate correct logic. On the other hand, we propose a self-consolidation mechanism to enable rich, explicit knowledge contained in the textual trajectories to be compressed into compact, learnable parameters. This effectively converts long and potentially redundant interaction trajectories into implicit parametric memory, allowing the agent to utilize vast historical experience without occupying token slots.

We summarize our contributions as follows:

- 
•

We propose EvoSC, a model-agnostic, plug-and-play agent test-time learning framework that integrates hierarchical textual non-parametric and lightweight parametric experience, providing a unified interface for agents to maintain both immediate context and consolidated historical experience.

- 
•

We introduce a dual-evolution mechanism. It mines valuable insights from both successful and failed trajectories through contrastive reflection. Then, explicit past experiences are consolidated into learnable prompts to enable fast, intuition-like reasoning at test-time.

- 
•

Extensive experiments demonstrate that EvoSC significantly outperforms static baseline agents and conventional experience replay methods, establishing a scalable and context-efficient paradigm for evolutionary test-time learning in LLM-based agents.

## 
2 
Related Works

### 
2.1 
Agent Lifelong Learning

Evolutionary lifelong learning is a core capability driving the advancement of LLM-based agents, enabling dynamic adaptation and self-improvement under complex, evolving environments with minimal human intervention. Recently, numerous researchers have adopted diverse approaches to realize the transition from static model deployments to dynamic, adaptive agent systems. Wang
 et al.
 ([2024a](https://arxiv.org/html/2602.01966v1#bib.bib31)) proposed a four-module autonomous agent framework comprising profile, memory, planning, and action, while Xi
 et al.
 ([2025](https://arxiv.org/html/2602.01966v1#bib.bib32)) decomposed agents into brain, perception, and action but did not address long-term adaptation. Recently, AWM (Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26)) enhances the efficiency of web navigation agents by analyzing their past experiences and extracting reusable workflows therefrom. By simply storing historical interaction examples to build a memory repository, TER (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)) enables agents to tackle highly relevant domain tasks effectively.

### 
2.2 
Memory for Agent

With the rapid advancement of large language models and embodied agents, memory modules have emerged as a core component for bridging perception, decision-making, and long-term interactions. Recently, an increasing number of researchers have conducted in-depth studies on the memory mechanisms of agents. MemoryBank (Zhong
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib38)) achieves enhanced development of agents for AI emotional companionship by mimicking human long-term memory. Agentic Memory (Xu
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib45)) establishes dynamically interconnected memory networks through memory note construction, association and evolutionary iteration, thereby providing effective support for large language model agents. Self-Controlled Memory (Wang
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib44)) devises a dedicated memory framework consisting of the agent, stream and controller modules, which is specialized for processing ultra-long input sequences. Moreover, some research approaches propose to enhance the knowledge capabilities of large models by incorporating read and write memory modules (Hu
 et al.
, [2023](https://arxiv.org/html/2602.01966v1#bib.bib40); Modarressi
 et al.
, [2023](https://arxiv.org/html/2602.01966v1#bib.bib39); Lu
 et al.
, [2023a](https://arxiv.org/html/2602.01966v1#bib.bib41)) and leveraging structured knowledge bases. Likewise, several methods have explored cooperative memory frameworks for multi-agent systems (Li
 et al.
, [2023b](https://arxiv.org/html/2602.01966v1#bib.bib42), [a](https://arxiv.org/html/2602.01966v1#bib.bib43)), enabling the accomplishment of collaborative multi-agent tasks. In summary, while substantial progress has been achieved in agent memory mechanisms, existing methods often lack effective strategies for long-term memory consolidation and knowledge reinforcement across extended interaction histories.

## 
3 
Problem Formulation

##### Task Stream and Input.

A LLM-based lifelong learning agent deals with a stream of tasks. We define a domain-specific dataset 𝒟=⟨𝒫sys,𝒯⟩\mathcal{D}=\langle\mathcal{P}_{\text{sys}},\mathcal{T}\rangle, where 𝒫sys\mathcal{P}_{\text{sys}} is the universal system prompt which encodes domain rules (e.g., SQL syntax or OS commands) shared across all tasks in the domain, and 𝒯={t1,t2,…,tN}\mathcal{T}=\{t_{1},t_{2},...,t_{N}\} denotes a sequence of NN task instances arriving sequentially. When the agent addresses task tkt_{k}, the initial input context ℐk\mathcal{I}_{k} is constructed by concatenating the system prompt and the specific task description: ℐk=𝒫sys⊕tk.\mathcal{I}_{k}=\mathcal{P}_{\text{sys}}\oplus t_{k}.

##### Sequential Interaction.

The agent interacts with the environment to solve tkt_{k} within a fixed maximum of rr rounds. At each time step ss (1≤s≤r1\leq s\leq r), the agent observes the interaction history ℋk,s−1\mathcal{H}_{k,s-1} and the task input ℐk\mathcal{I}_{k}. The LLM-based agent functions as a policy πθ\pi_{\theta}, generating action Ak,s∈𝒜A_{k,s}\in\mathcal{A}:

|  | Ak,s∼πθ​(Ak,s∣ℋk,s−1,ℐk).A_{k,s}\sim\pi_{\theta}\left(A_{k,s}\mid\mathcal{H}_{k,s-1},\mathcal{I}_{k}\right). |  | (1) |
|---|---|---|---|

Upon executing Ak,sA_{k,s}, the environment transitions to a new state based on transition function 𝒯\mathcal{T} and returns a feedback (observation) Fk,s∈ΩF_{k,s}\in\Omega (e.g., execution logs or error messages). The interaction history is then updated to ℋk,s=ℋk,s−1∪{(Ak,s,Fk,s)}\mathcal{H}_{k,s}=\mathcal{H}_{k,s-1}\cup\{(A_{k,s},F_{k,s})\}, which serves as the context for the subsequent step.

![Refer to caption](https://arxiv.org/html/x5.png)
Figure 3: 
Pipeline of EvoSC. The framework orchestrates a dual-memory system: (Left) Non-parametric contrastive extraction draws explicit error-prone and successful insights from past trajectories to guide immediate reasoning; (Right) Parametric trajectory consolidation internalizes extensive historical knowledge into compact learnable prompts via trajectory distillation, which effectively resolves the context-length explosion. This hybrid approach ensures scalable lifelong learning by leveraging both textual experience and parametric long-term knowledge.

##### Lifelong Learning Objective.

For each task tkt_{k}, the agent generates a trajectory ξ(k)=(Ik,Ak,1,Fk,1,…,Ak,T,Fk,T)\xi^{(k)}=(I_{k},A_{k,1},F_{k,1},\dots,A_{k,T},F_{k,T}). The environment assigns a binary reward R​(tk)∈{0,1}R(t_{k})\in\{0,1\} upon task completion, indicating success or failure. The objective of lifelong learning is to maximize the cumulative expected reward across the sequence of all tasks, leveraging past experiences accumulated in history Zheng
 et al.
 ([2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)):

|  | maxπθ​∑k=1N𝔼ξ(k)∼πθ​[R​(tk)].\max_{\pi_{\theta}}\sum_{k=1}^{N}\mathbb{E}_{\xi^{(k)}\sim\pi_{\theta}}\left[R(t_{k})\right]. |  | (2) |
|---|---|---|---|

In this work, we aim to enhance πθ\pi_{\theta} dynamically by consolidating experiences extracted from prior trajectories {ξ(1),…,ξ(k−1)}\{\xi^{(1)},\dots,\xi^{(k-1)}\} into non-parametric textual prompt or parametric parameters, thereby improving the success rate on future tasks.

![Refer to caption](https://arxiv.org/html/x6.png)
Figure 4: 
Contrastive prompt and knowledge example for KG dataset.

## 
4 
Method

##### Overview.

Figure [3](https://arxiv.org/html/2602.01966v1#S3.F3) illustrates the proposed EvoSC framework, which orchestrates agent lifelong learning through two complementary mechanisms: non-parametric contrastive experience extraction and parametric long-term self-consolidation. To enhance immediate reasoning capabilities, EvoSC first employs a non-parametric contrastive reflection mechanism. Instead of solely replaying successful demonstrations, the agent retrieves and analyzes both successful and failed historical trajectories. By contrasting these outcomes, the agent explicitly extracts two types of textual guidance: error-prone insights that identify specific pitfalls to avoid and success patterns that highlight effective strategies to replicate. These insights are injected as textual prompts to guide the inference on the fly. To ensure long-term scalability and circumvent context window constraints, EvoSC employs parametric experience consolidation. At periodic intervals, the framework triggers a self-consolidation process that distills accumulated trajectories into learnable parameters. By converting verbose, explicit memories into compact parametric intuition, EvoSC allows the agent to internalize extensive interaction history, transforming raw experience into intrinsic knowledge without the linear growth in computational overhead.

### 
4.1 
Non-parametric Contrastive Extraction

##### Error-Prone Experience Extraction.

Drawing on principles of contrastive learning, we posit that the semantic difference between a correct and an incorrect solution contains the highest informational value. While successful interactions within a task category often exhibit correlated reasoning patterns, failed interactions tend to diverge at critical decision points. Therefore, juxtaposing a failed trajectory (𝒞f\mathcal{C}_{f}) against a successful one (𝒞s\mathcal{C}_{s}) allows the model to pinpoint the exact logical step where the reasoning is flawed.

To this end, we design a set of contrastive prompt templates 𝒫c\mathcal{P}_{c} that instruct the LLM to analyze the divergence between success and failure. The model extracts specific error-prone points and corresponding avoidance strategies, defined as:

|  | Expc=LLM​(𝒫c∪𝒞s∪𝒞f),\operatorname{Exp}_{c}=\mathrm{LLM}(\mathcal{P}_{c}\cup\mathcal{C}_{s}\cup\mathcal{C}_{f}), |  | (3) |
|---|---|---|---|

where 𝒞s\mathcal{C}_{s} and 𝒞f\mathcal{C}_{f} represent the complete interaction dialogs of a successful and a failed task attempt, respectively. To maintain memory efficiency and relevance, these extracted insights are stored in a first-in-first-out (FIFO) queue, ensuring the agent prioritizes recent lessons while automatically pruning outdated error information. These insights then guide the agent in tackling subsequent tasks. In Figure [4](https://arxiv.org/html/2602.01966v1#S3.F4), we provide the contrastive experience extraction prompt and an error-prone knowledge example for the KG benchmark.

##### Successful Experience Extraction.

While error analysis prevents the repetition of mistakes, identifying efficient solution paths is equally critical for capability improvement. To this end, we perform successful experience extraction to distill generalizable strategies from positive interactions. Unlike the contrastive module which focuses on divergence, this module focuses on abstraction. It aims to condense specific execution traces into high-level methodological summaries. When the agent completes tasks successfully, the interaction trajectories are collected. We utilize specific prompt templates 𝒫s\mathcal{P}_{s} to guide the LLM in abstracting essential structural patterns and effective reasoning steps from these raw trajectories.

The extraction of reusable successful experience (Exps\operatorname{Exp}_{s}) is formulated as:

|  | Exps=LLM​(𝒫s∪𝒞s(i)∪𝒞s(j)),\operatorname{Exp}_{s}=\mathrm{LLM}(\mathcal{P}_{s}\cup\mathcal{C}_{s}^{(i)}\cup\mathcal{C}_{s}^{(j)}), |  | (4) |
|---|---|---|---|

where 𝒞s(i)\mathcal{C}_{s}^{(i)} and 𝒞s(j)\mathcal{C}_{s}^{(j)} denote the complete interaction dialogs from two distinct successful task instances (ti,tjt_{i},t_{j}). This multi-shot extraction encourages the model to find commonalities across different successful attempts, fostering robust generalization. Similar to the error module, these successful experiences are managed via a FIFO queue to adapt to the agent’s evolving capabilities. The specific prompt templates and extracted knowledge examples are provided in the Appendix.

### 
4.2 
Parametric Trajectory Consolidation

To mitigate the computational and storage overhead introduced by excessive textual experience, which may lead to prompt explosion and exceed the LLM’s fixed context window, we propose parametric trajectory consolidation that internalizes the knowledge embedded in many long-term multi-round interaction trajectories into compact, learnable prompt tokens 𝒫θ\mathcal{P}_{\theta}, enabling the agent to transform explicit step-by-step deliberation into a compact, parametric memory.

Algorithm 1

 Inference Workflow

0:
 Universal system prompt 𝒫sys\mathcal{P}_{\text{sys}}, task set 𝒯={tk}\mathcal{T}=\{t_{k}\}, max interaction rounds rr, contrastive prompt templates 𝒫c\mathcal{P}_{c}, success prompt templates 𝒫s\mathcal{P}_{s}, retrieval hyperparameter KK. 

1:

Initialization
: 

2:
ℛsucc←∅\mathcal{R}_{\text{succ}}\leftarrow\emptyset, 𝒬err←∅\mathcal{Q}_{\text{err}}\leftarrow\emptyset, 𝒬succ←∅\mathcal{Q}_{\text{succ}}\leftarrow\emptyset

3:

for all
tk∈𝒯t_{k}\in\mathcal{T}
do

4:

Step 1: Experience Retrieval & Extraction

5:
  Retrieve top-KK recent successful dialogs 𝒞succrec\mathcal{C}_{\text{succ}}^{\text{rec}} from ℛsucc\mathcal{R}_{\text{succ}}

6:
Expc=LLM​(𝒫c∪𝒞succrec∪𝒞fail)\text{Exp}_{c}=\mathrm{LLM}(\mathcal{P}_{c}\cup\mathcal{C}_{\text{succ}}^{\text{rec}}\cup\mathcal{C}_{\text{fail}})

7:
Exps=LLM​(𝒫s∪𝒞succrec)\text{Exp}_{s}=\mathrm{LLM}(\mathcal{P}_{s}\cup\mathcal{C}_{\text{succ}}^{\text{rec}})

8:

Step 2: Experience-Augmented Prompt

9:
ℐk=𝒫sys⊕Expc⊕Exps⊕𝒞succrec⊕tk\mathcal{I}_{k}=\mathcal{P}_{\text{sys}}\oplus\text{Exp}_{c}\oplus\text{Exp}_{s}\oplus\mathcal{C}_{\text{succ}}^{\text{rec}}\oplus t_{k}

10:

Step 3: Interactive Task Execution

11:
ℋk,0←∅\mathcal{H}_{k,0}\leftarrow\emptyset

12:

for
s=1s=1
to
rr
do

13:
Ak,s=π​(ℋk,s−1,ℐk)A_{k,s}=\pi(\mathcal{H}_{k,s-1},\mathcal{I}_{k})

14:
Fk,s=EnvFeedback​(Ak,s)F_{k,s}=\text{EnvFeedback}(A_{k,s})

15:
ℋk,s=ℋk,s−1∪{(Ak,s,Fk,s)}\mathcal{H}_{k,s}=\mathcal{H}_{k,s-1}\cup\{(A_{k,s},F_{k,s})\}

16:

end

for

17:

Step 4: Update Experience Repository

18:

if
EnvVerify​(tk)=Success\text{EnvVerify}(t_{k})=\text{Success}
then

19:
    Add full dialog ℋk,r\mathcal{H}_{k,r} to ℛsucc\mathcal{R}_{\text{succ}}

20:
    Push Exps\text{Exp}_{s} to 𝒬succ\mathcal{Q}_{\text{succ}} (FIFO) 

21:

else

22:
    Push Expc\text{Exp}_{c} to 𝒬err\mathcal{Q}_{\text{err}} (FIFO) 

23:

end

if

24:

end

for

Denote ℰ={𝒞succi}i=1K\mathcal{E}=\left\{{\mathcal{C}_{\text{succ}}}^{i}\right\}_{i=1}^{K} the set of historical interaction trajectories. Given a task input tkt_{k} with specific task description (ℐk=𝒫sys⊕tk\mathcal{I}_{k}=\mathcal{P}_{\text{sys}}\oplus t_{k}), let ℋk={(Ak,s,Fk,s)}s=1r\mathcal{H}_{k}=\{(A_{k,s},F_{k,s})\}_{s=1}^{r} be a successful trajectory for task tkt_{k}. For each round s∈{1,…,r}s\in\{1,\dots,r\}, we first define an expert action Ak,s∗A_{k,s}^{*}. This action is generated by the LLM when it is provided with the many historical trajectory set ℰmany⊂ℰ\mathcal{E}_{\text{many}}\subset\mathcal{E} and the current interaction history ℋk,s−1\mathcal{H}_{k,s-1}:

|  | Ak,s∗=LLM​(ℰmany∪ℋk,s−1∪ℐk).A_{k,s}^{*}=\mathrm{LLM}\bigl(\mathcal{E}_{\text{many}}\cup\mathcal{H}_{k,s-1}\cup\mathcal{I}_{k}). |  | (5) |
|---|---|---|---|

Simultaneously, the agent attempts to reconstruct this reasoning logic using only a few trajectories ℰfew⊂ℰmany\mathcal{E}_{\text{few}}\subset\mathcal{E}_{\text{many}} and the learnable prompt 𝒫θ\mathcal{P}_{\theta}:

|  | A^k,s=LLM​(𝒫θ∪ℰfew∪ℋk,s−1∪ℐk).\hat{A}_{k,s}=\mathrm{LLM}\bigl(\mathcal{P}_{\theta}\cup\mathcal{E}_{\text{few}}\cup\mathcal{H}_{k,s-1}\cup\mathcal{I}_{k}). |  | (6) |
|---|---|---|---|

| Model | Dataset | Method | Exp=0 | Exp=1 | Exp=4 | Exp=16 | Exp=32 | Avg |
|---|---|---|---|---|---|---|---|---|
| Llama 3.1-8B |  | AWM (Wang et al., 2024b) | 19.0 | 45.4 | 71.6 | 66.7 | 74.2 | 55.4 |
|  | TER (Zheng et al., 2025b) | 19.8 | 41.6 | 68.2 | 69.0 | 70.2 | 53.8 |  |
| DB | SCM (Wang et al., 2025) | 19.8 | 23.4 | 63.0 | 61.0 | 68.4 | 47.1 |  |
|  | A-MEM (Xu et al., 2025) | 19.8 | 57.0 | 67.0 | 74.8 | 73.4 | 58.4 |  |
|  | EvoSC (ours) | 24.8 | 71.2 | 74.4 | 77.2 | 77.8 | 65.1 (+6.7) |  |
|  | AWM (Wang et al., 2024b) | 42.8 | 51.0 | 45.2 | 49.2 | 47.4 | 47.1 |  |
|  | TER (Zheng et al., 2025b) | 42.2 | 42.8 | 46.8 | 46.4 | 41.2 | 43.9 |  |
| OS | SCM (Wang et al., 2025) | 42.2 | 44.0 | 43.2 | 43.6 | 49.0 | 44.4 |  |
|  | A-MEM (Xu et al., 2025) | 42.2 | 46.6 | 51.4 | 51.2 | 50.8 | 48.4 |  |
|  | EvoSC (ours) | 45.2 | 50.2 | 52.0 | 51.8 | 51.2 | 50.1 (+1.7) |  |
| Qwen 2.5-7B |  | AWM (Wang et al., 2024b) | 73.8 | 72.6 | 74.0 | 76.0 | OOM | 74.1 |
|  | TER (Zheng et al., 2025b) | 74.0 | 71.2 | 72.8 | 72.6 | OOM | 72.7 |  |
| DB | SCM (Wang et al., 2025) | 74.0 | 74.6 | 75.6 | 75.8 | OOM | 75.0 |  |
|  | A-MEM (Xu et al., 2025) | 74.0 | 73.0 | 73.0 | 74.6 | OOM | 73.7 |  |
|  | EvoSC (ours) | 75.4 | 75.0 | 76.8 | 75.2 | 76.2 | 75.7 (+0.7) |  |
|  | AWM (Wang et al., 2024b) | 47.2 | 50.6 | 52.0 | 52.6 | OOM | 50.6 |  |
|  | TER (Zheng et al., 2025b) | 41.2 | 51.8 | 53.6 | 58.2 | OOM | 51.2 |  |
| OS | SCM (Wang et al., 2025) | 41.2 | 44.2 | 52.0 | 49.0 | OOM | 46.6 |  |
|  | A-MEM (Xu et al., 2025) | 41.2 | 44.2 | 53.0 | 57.2 | OOM | 48.9 |  |
|  | EvoSC (ours) | 48.4 | 57.4 | 56.2 | 59.4 | 56.4 | 55.6 (+4.4) |  |

Table 1: 
 Performance comparison (on Database (DB) and Operating System (OS) datasets Zheng
 et al.
 ([2025b](https://arxiv.org/html/2602.01966v1#bib.bib17))) between our proposed EvoSC Framework and other methods, evaluated on Llama 3.1-8B-Instruct (Dubey
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib5)) and Qwen 2.5-7B-Instruct models (Yang
 et al.
, [2024](https://arxiv.org/html/2602.01966v1#bib.bib3)). “Exp” denotes the number of recent successful trajectories provided to the agent. “OOM” denotes out of memory, which is caused by the limited context window of LLMs. When more trajectories are used, the number of tokens exceeds the context window limit of LLM. 

The consolidation process aims to synchronize the student’s parametric response with the expert’s contextual reasoning at every decision point. The objective function minimizes the cumulative token-level cross-entropy loss across all interaction rounds ss and all tokens jj within each action:

|  | ℒconsolid=\displaystyle\mathcal{L}_{\text{consolid}}= |  |
|---|---|---|
|  | −∑s=1r∑jlog⁡Pθ​(Ak,s,j∗∣𝒫θ,ℐk,ℋk,s−1,Ak,s,<j),\displaystyle-\sum_{s=1}^{r}\sum_{j}\log P_{\theta}\bigl(A_{k,s,j}^{*}\mid\mathcal{P}_{\theta},\mathcal{I}_{k},\mathcal{H}_{k,s-1},A_{k,s,<j}\bigr), |  |

where Ak,s,jA_{k,s,j} denotes the jj-th token of the expert action at round ss. By optimizing 𝒫θ\mathcal{P}_{\theta} over the entire sequence of interactions, the agent effectively internalizes the successfully trajectories augmented reasoning process into its parameter space. This ensures that even when the context window is constrained, the agent can leverage 𝒫θ\mathcal{P}_{\theta} to maintain high-fidelity, intuition-like decision-making throughout the multi-round task execution.

### 
4.3 
Experience Enhanced Inference

To balance immediate relevance with long-term internalization, EvoSC adopts a hybrid injection strategy that combines explicit textual retrieval with consolidated parametric guidance. For each new task tkt_{k}, the agent retrieves the top-KK most relevant entries from the experience queues to construct an augmented input. Consequently, the final input representation ℐk\mathcal{I}_{k} is defined as a multi-level composition:

|  | ℐk=𝒫θ⊕𝒫sys⊕Expc⊕Exps⊕𝒞s⊕tk,\mathcal{I}_{k}=\mathcal{P}_{\theta}\oplus\mathcal{P}_{\text{sys}}\oplus\operatorname{Exp}_{c}\oplus\operatorname{Exp}_{s}\oplus\mathcal{C}_{s}\oplus t_{k}, |  | (7) |
|---|---|---|---|

where 𝒫θ\mathcal{P}_{\theta} provides the implicit parametric intuition consolidated from long-term history, while Expc\operatorname{Exp}_{c}, Exps\operatorname{Exp}_{s}, and 𝒞s\mathcal{C}_{s} provide explicit textual experience from recent successful and failed interactions. The complete inference workflow of the REC framework is detailed in Algorithm [1](https://arxiv.org/html/2602.01966v1#alg1).

## 
5 
Experiments

### 
5.1 
Experimental Setup

##### Benchmark.

For our experimental evaluation, we adopt the LifelongAgentBench (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)), which is specifically designed to assess the learning capabilities of LLM-based agents. This benchmark comprises three domain-specific datasets that measure capabilities across distinct areas: Database (DB, 500 tasks), Operating System (OS, 500 tasks), and Knowledge Graph (KG, 396 tasks). These three datasets are deployed across three interactive environments, simulating dynamic real-world scenarios that demand knowledge accumulation, retention, and transfer.

| Model | Dataset | Method | Exp=0 | Exp=1 | Exp=4 | Exp=16 | Avg |
|---|---|---|---|---|---|---|---|
| Llama 3.1-8B |  | AWM (Wang et al., 2024b) | 12.6 | 26.5 | 32.6 | OOM | 23.9 |
|  | TER (Zheng et al., 2025b) | 28.0 | 35.1 | 32.8 | OOM | 32.0 |  |
| KG | SCM (Wang et al., 2025) | 28.0 | 28.0 | 31.1 | OOM | 29.0 |  |
|  | A-MEM (Xu et al., 2025) | 28.0 | 31.8 | 19.9 | OOM | 26.6 |  |
|  | EvoSC (ours) | 32.1 | 39.4 | 36.7 | 42.7 | 37.7 (+5.7) |  |
| Qwen 2.5-7B |  | AWM (Wang et al., 2024b) | 17.7 | 13.4 | 15.7 | OOM | 15.6 |
|  | TER (Zheng et al., 2025b) | 16.4 | 34.1 | 32.8 | OOM | 27.8 |  |
| KG | SCM (Wang et al., 2025) | 16.4 | 27.2 | 33.3 | OOM | 25.6 |  |
|  | A-MEM (Xu et al., 2025) | 16.4 | 18.4 | 10.6 | OOM | 15.1 |  |
|  | EvoSC (ours) | 29.3 | 39.4 | 39.6 | 45.2 | 38.4 (+10.6) |  |

Table 2: 
 Performance comparison (KG dataset) between our proposed EvoSC and strong baselines such as AWM (Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26)), TER (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)), SCM (Wang
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib44)) and A-MEM (Xu
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib45)) with Llama 3.1-8B-Instruct and Qwen 2.5-7B-Instruct models. 

##### Implement Details.

We adopt the same maximum allowed interaction rounds as (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)) for tasks across different datasets. Specifically, 3 rounds for the Database dataset, 5 rounds for the Operating System dataset, and 15 rounds for the Knowledge Graph dataset. We evaluate two LLM-based agents: Llama 3.1-8B-Instruct and Qwen 2.5-7B-Instruct. In our method, the length of the learnable prompt is set to 20. Under the experimental setting of “Exp = 32”, the teacher model uses 20 trajectories for reasoning, whereas the student model uses 8 trajectories. Specifically, the experience from 12 trajectories is internalized into the latent space of the prompts and paired with an additional 20 trajectory experiences for reasoning. To mitigate experimental randomness, we run each experiment three times with random seeds and report the averaged results. All experiments are conducted on Linux servers, with each experiment utilizing two NVIDIA A40 (48G) GPUs.

##### Baselines and Metrics.

We compare our method with strong baselines: Agent workflow memory (AWM) (Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26)) extracts workflows from past experiences to guide reasoning. Textual experience replay (TER) (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)) enhances the reasoning accuracy of agents via trajectory experience replay. Self-Controlled Memory (SCM) (Wang
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib44)) constructs a memory framework with an agent, stream, and controller to handle ultra-long inputs. Agentic Memory (A-Mem) (Xu
 et al.
, [2025](https://arxiv.org/html/2602.01966v1#bib.bib45)) constructs dynamic interconnected memory networks via note construction, linking and evolution to support LLM agents. We evaluate the framework under various configurations, where different configurations involve the replay of different amounts of historical trajectories. The evaluation metric is the task success rate, which is defined as the proportion of correct action sequences that complete the task successfully.

| Model | Dataset | EE | SE | PTC | Exp=0 | Exp=1 | Exp=4 | Exp=16 | Exp=32 | Avg |
|---|---|---|---|---|---|---|---|---|---|---|
| Llama 3.1-8B | DB |  | ✓ |  | 24.4 | 66.8 | 70.4 | 72.2 | 74.6 | 61.7 |
| ✓ |  |  | 24.2 | 65.4 | 72.8 | 73.4 | 75.2 | 62.2 |  |  |
| ✓ | ✓ |  | 24.8 | 74.0 | 73.8 | 75.6 | 77.8 | 65.2 |  |  |
| ✓ | ✓ | ✓ | 24.8 | 71.2 | 74.4 | 77.2 | 77.8 | 65.1 |  |  |
| OS |  | ✓ |  | 45.8 | 50.0 | 49.2 | 48.2 | 47.6 | 48.2 |  |
| ✓ |  |  | 45.0 | 50.4 | 50.8 | 50.4 | 48.8 | 49.2 |  |  |
| ✓ | ✓ |  | 45.2 | 51.2 | 50.8 | 50.8 | 49.4 | 49.5 |  |  |
| ✓ | ✓ | ✓ | 45.2 | 50.2 | 52.0 | 51.8 | 51.2 | 50.1 |  |  |
| Qwen 2.5-7B | DB | ✓ | ✓ |  | 75.4 | 75.2 | 76.8 | 74.2 | OOM | 75.4 |
| ✓ | ✓ | ✓ | 75.4 | 75.0 | 76.8 | 75.2 | 76.2 | 75.7 |  |  |
| OS | ✓ | ✓ |  | 48.4 | 53.8 | 56.2 | 58.8 | OOM | 54.4 |  |
| ✓ | ✓ | ✓ | 48.4 | 57.4 | 56.2 | 59.4 | 56.4 | 55.6 |  |  |

Table 3: 
 Ablation study of EvoSC on DB and OS datasets. “EE” and “SE” denote the error-prone experience and successful experience, respectively, while “PTC” denotes the parametric trajectory consolidation. 

### 
5.2 
Main Results and Analysis

##### Performance on DB and OS Tasks.

Table [1](https://arxiv.org/html/2602.01966v1#S4.T1) summarizes the performance comparison on the DB and OS datasets. The results demonstrate that our proposed EvoSC framework consistently outperforms strong baselines, including AWM (Wang
 et al.
, [2024b](https://arxiv.org/html/2602.01966v1#bib.bib26)) and TER (Zheng
 et al.
, [2025b](https://arxiv.org/html/2602.01966v1#bib.bib17)), across different LLM backbones. Specifically, on the DB dataset, EvoSC achieves a substantial average performance boost of +9.7% on Llama 3.1-8B compared to the best-performing baselines. On the OS dataset, the performance gains are also significant, with improvements of +3.0% and +4.4% on Llama and Qwen models, respectively. Notably, as the number of provided successful trajectories (Exp) increases from 0 to 32, EvoSC maintains a stable upward trend in success rate. In contrast, the performance of AWM and TER often fluctuates or degrades as more trajectories are introduced. This suggests that raw textual replay introduces distracting noise and redundant information, whereas EvoSC’s contrastive reflection mechanism effectively filters high-value insights.

##### Performance on KG Tasks.

The superiority of EvoSC is even more pronounced in the Knowledge Graph (KG) domain, as presented in Table [2](https://arxiv.org/html/2602.01966v1#S5.T2). KG tasks typically involve longer reasoning chains and more complex environmental interactions, which pose significant challenges for experience management. EvoSC achieves a remarkable average improvement of +5.7% on Llama 3.1-8B and +10.6% on Qwen 2.5-7B. Most importantly, while all baseline methods fail when 
Exp
 increases, EvoSC continues to benefit from expanded historical data. This demonstrates that EvoSC effectively internalizes the complex logic of long-horizon trajectories into its parametric memory, enabling the agent to solve tasks that are difficult for standard context-based replay methods.

##### Overcoming Context Limitations.

A critical advantage of EvoSC is its robustness to the physical constraints of LLMs during lifelong learning. As shown in both Table [1](https://arxiv.org/html/2602.01966v1#S4.T1) and Table [2](https://arxiv.org/html/2602.01966v1#S5.T2), baseline methods frequently encounter OOM errors as the number of experiences increases. For instance, on the Qwen 2.5-7B model, which has a more constrained context window, the baselines fail to operate when Exp=32\text{Exp}=32 for DB/OS and Exp=16\text{Exp}=16 for KG. This failure mode is inevitable for methods relying on raw trajectory replay, as the prompt length expands linearly with history. EvoSC effectively circumvents this bottleneck by consolidating extensive textual experiences into compact, learnable prompt parameters. This ensures that the agent can leverage vast historical wisdom without exceeding hardware limits, maintaining a constant and efficient context length regardless of the task’s duration.

![Refer to caption](https://arxiv.org/html/x7.png)
Figure 5: 
Correct count comparison for dataset database (window size=100, 1 trajectory)

![Refer to caption](https://arxiv.org/html/x8.png)
(a) 

![Refer to caption](https://arxiv.org/html/x9.png)
(b) 

Figure 6: 
Ablation study on KG based on (a) Llama 3.1-8B-Instruct and (b) Qwen 2.5-7B-Instruct.

##### Visualization of Learning Stability.

To further investigate the learning process, Figure [5](https://arxiv.org/html/2602.01966v1#S5.F5) visualizes the cumulative correct task counts on DB tasks using Llama 3.1-8B as the backbone. Under a fixed evaluation window, our method exhibits a steeper and more sustained growth curve compared to the baseline, indicating that the experiences extracted and consolidated by EvoSC provide higher-quality guidance for subsequent tasks.

#### 
5.2.1 
Ablation Study

To evaluate the individual contributions of the two experience extraction methods (error-prone and successful) and the parametric consolidation, we conduct a series of ablation studies in Tables [3](https://arxiv.org/html/2602.01966v1#S5.T3) and Figures [6](https://arxiv.org/html/2602.01966v1#S5.F6). The results indicate that both the error-prone and successful experience extraction modules are vital for performance. This confirms that analyzing failures is essential for the agent to identify and avoid recurrent logical pitfalls, and the absence of successful experience extraction impairs the agent’s ability to replicate efficient reasoning patterns. The exclusion of the parametric trajectory consolidation results in the most significant performance bottleneck, particularly in long-horizon tasks. Without this, the agent is forced to rely solely on raw textual replay, which not only risks exceeding the context window but also introduces irrelevant noise that dilutes the model’s focus. Overall, the ablation study confirms that the full EvoSC framework, through the integration of explicit reflection and implicit consolidation, achieves a superior balance between learning depth and operational scalability.

## 
6 
Conclusion

In this paper, we introduced the EvoSC framework, a novel dual-stage paradigm for agent evolution. a dual-stage agent evolution paradigm that not only autonomously extracts multifaceted experiential insights but also internalizes historical experiences into the latent space of learnable prompts. Empirical evaluations on several agent lifelong benchmarks demonstrate that EvoSC achieves state-of-the-art performance across multiple domains and maintains stability in long-horizon learning scenarios where existing methods fail. In conclusion, EvoSC provides a versatile and scalable foundation, paving the way for developing evolutionary lifelong learning agents.

## 
7 
Limitations

Although our approach provides an evolutionary framework for agents, the relatively simplistic experience retrieval mechanism inevitably constrains the reasoning capabilities of agents. For future work, we plan to explore advanced methodologies to refine and optimize the retrieval mechanism. Additionally, due to constrained computational resources, our current experiments were primarily focused on 7B and 8B scale models. Evaluating the scalability of EvoSC on larger-scale models (e.g., 70B+) and a broader diversity of LLM architectures remains a key priority for our future research to fully unlock the potential of parametric experience consolidation.

## References

- 
X. Deng, Y. Gu, B. Zheng, S. Chen, S. Stevens, B. Wang, H. Sun, and Y. Su (2023)

Mind2web: towards a generalist agent for the web
. 

Advances in Neural Information Processing Systems

36
, 
 pp. 28091–28114
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
A. Dubey, A. Jauhri, A. Pandey, A. Kadian, A. Al-Dahle, A. Letman, A. Mathur, A. Schelten, A. Yang, A. Fan, 
et al.
 (2024)

The llama 3 herd of models
. 

arXiv preprint arXiv:2407.21783
. 

Cited by: [Figure 2](https://arxiv.org/html/2602.01966v1#S1.F2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1). 

- 
C. Hsieh, S. Sun, S. Kriman, S. Acharya, D. Rekesh, F. Jia, Y. Zhang, and B. Ginsburg (2024)

RULER: what’s the real context size of your long-context language models?
. 

arXiv preprint arXiv:2404.06654
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p2.1). 

- 
C. Hu, J. Fu, C. Du, S. Luo, J. Zhao, and H. Zhao (2023)

Chatdb: augmenting llms with databases as their symbolic memory
. 

arXiv preprint arXiv:2306.03901
. 

Cited by: [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1). 

- 
H. Jin, X. Han, J. Yang, Z. Jiang, Z. Liu, C. Chang, H. Chen, and X. Hu (2024)

Llm maybe longlm: self-extend llm context window without tuning
. 

arXiv preprint arXiv:2401.01325
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p2.1). 

- 
Y. Li, Y. Yu, H. Li, Z. Chen, and K. Khashanah (2023a)

Tradinggpt: multi-agent system with layered memory and distinct characters for enhanced financial trading performance
. 

arXiv preprint arXiv:2309.03736
. 

Cited by: [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1). 

- 
Y. Li, Y. Zhang, and L. Sun (2023b)

MetaAgents: simulating interactions of human behaviors for llm-based task-oriented coordination via collaborative generative agents. arxiv, arxiv231006500
. 

URL: https://doi. org/10.48550/arXiv

2310
. 

Cited by: [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1). 

- 
A. Liu, B. Feng, B. Xue, B. Wang, B. Wu, C. Lu, C. Zhao, C. Deng, C. Zhang, C. Ruan, 
et al.
 (2024a)

Deepseek-v3 technical report
. 

arXiv preprint arXiv:2412.19437
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
N. F. Liu, K. Lin, J. Hewitt, A. Paranjape, M. Bevilacqua, F. Petroni, and P. Liang (2024b)

Lost in the middle: how language models use long contexts
. 

Transactions of the Association for Computational Linguistics

12
, 
 pp. 157–173
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p2.1). 

- 
J. Lu, S. An, M. Lin, G. Pergola, Y. He, D. Yin, X. Sun, and Y. Wu (2023a)

Memochat: tuning llms to use memos for consistent long-range open-domain conversation
. 

arXiv preprint arXiv:2308.08239
. 

Cited by: [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1). 

- 
P. Lu, H. Bansal, T. Xia, J. Liu, C. Li, H. Hajishirzi, H. Cheng, K. Chang, M. Galley, and J. Gao (2023b)

Mathvista: evaluating mathematical reasoning of foundation models in visual contexts
. 

arXiv preprint arXiv:2310.02255
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
A. Modarressi, A. Imani, M. Fayyaz, and H. Schütze (2023)

Ret-llm: towards a general read-write memory for large language models
. 

arXiv preprint arXiv:2305.14322
. 

Cited by: [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1). 

- 
E. Nijkamp, B. Pang, H. Hayashi, L. Tu, H. Wang, Y. Zhou, S. Savarese, and C. Xiong (2022)

Codegen: an open large language model for code with multi-turn program synthesis
. 

arXiv preprint arXiv:2203.13474
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
E. Spens and N. Burgess (2024)

A generative model of memory construction and consolidation
. 

Nature human behaviour

8
 (
3
), 
 pp. 526–543
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p3.1). 

- 
C. K. Tamnes, K. B. Walhovd, M. Torstveit, V. T. Sells, and A. M. Fjell (2013)

Performance monitoring in children and adolescents: a review of developmental changes in the error-related negativity and brain maturation
. 

Developmental cognitive neuroscience

6
, 
 pp. 1–13
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p3.1). 

- 
G. Team, R. Anil, S. Borgeaud, J. Alayrac, J. Yu, R. Soricut, J. Schalkwyk, A. M. Dai, A. Hauth, K. Millican, 
et al.
 (2023)

Gemini: a family of highly capable multimodal models
. 

arXiv preprint arXiv:2312.11805
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
H. Touvron, T. Lavril, G. Izacard, X. Martinet, M. Lachaux, T. Lacroix, B. Rozière, N. Goyal, E. Hambro, F. Azhar, 
et al.
 (2023)

Llama: open and efficient foundation language models
. 

arXiv preprint arXiv:2302.13971
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
B. Wang, X. Liang, J. Yang, H. Huang, Z. Wu, S. Wu, Z. Ma, and Z. Li (2025)

Scm: enhancing large language model with self-controlled memory framework
. 

In 
International Conference on Database Systems for Advanced Applications
, 

 pp. 188–203
. 

Cited by: [Figure 2](https://arxiv.org/html/2602.01966v1#S1.F2), [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.14.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.19.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.4.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.9.2), [§5.1](https://arxiv.org/html/2602.01966v1#S5.SS1.SSS0.Px3.p1.1), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2.1.1.4.2), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2.1.1.9.2). 

- 
L. Wang, C. Ma, X. Feng, Z. Zhang, H. Yang, J. Zhang, Z. Chen, J. Tang, X. Chen, Y. Lin, 
et al.
 (2024a)

A survey on large language model based autonomous agents
. 

Frontiers of Computer Science

18
 (
6
), 
 pp. 186345
. 

Cited by: [§2.1](https://arxiv.org/html/2602.01966v1#S2.SS1.p1.1). 

- 
Z. Z. Wang, J. Mao, D. Fried, and G. Neubig (2024b)

Agent workflow memory
. 

arXiv preprint arXiv:2409.07429
. 

Cited by: [Figure 2](https://arxiv.org/html/2602.01966v1#S1.F2), [§1](https://arxiv.org/html/2602.01966v1#S1.p2.1), [§2.1](https://arxiv.org/html/2602.01966v1#S2.SS1.p1.1), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.12.3), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.17.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.2.3), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.7.2), [§5.1](https://arxiv.org/html/2602.01966v1#S5.SS1.SSS0.Px3.p1.1), [§5.2](https://arxiv.org/html/2602.01966v1#S5.SS2.SSS0.Px1.p1.1), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2.1.1.2.3), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2.1.1.7.3). 

- 
Z. Xi, W. Chen, X. Guo, W. He, Y. Ding, B. Hong, M. Zhang, J. Wang, S. Jin, E. Zhou, 
et al.
 (2025)

The rise and potential of large language model based agents: a survey
. 

Science China Information Sciences

68
 (
2
), 
 pp. 121101
. 

Cited by: [§2.1](https://arxiv.org/html/2602.01966v1#S2.SS1.p1.1). 

- 
W. Xu, Z. Liang, K. Mei, H. Gao, J. Tan, and Y. Zhang (2025)

A-mem: agentic memory for llm agents
. 

arXiv preprint arXiv:2502.12110
. 

Cited by: [Figure 2](https://arxiv.org/html/2602.01966v1#S1.F2), [§2.2](https://arxiv.org/html/2602.01966v1#S2.SS2.p1.1), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.10.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.15.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.20.2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1.1.1.5.2), [§5.1](https://arxiv.org/html/2602.01966v1#S5.SS1.SSS0.Px3.p1.1), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2.1.1.10.2), [Table 2](https://arxiv.org/html/2602.01966v1#S5.T2.1.1.5.2). 

- 
A. Yang, A. Li, B. Yang, B. Zhang, B. Hui, B. Zheng, B. Yu, C. Gao, C. Huang, C. Lv, 
et al.
 (2025a)

Qwen3 technical report
. 

arXiv preprint arXiv:2505.09388
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
A. Yang, B. Yang, B. Zhang, B. Hui, B. Zheng, B. Yu, C. Li, D. Liu, F. Huang, H. Wei, H. Lin, J. Yang, J. Tu, J. Zhang, J. Yang, J. Yang, J. Zhou, J. Lin, K. Dang, K. Lu, K. Bao, K. Yang, L. Yu, M. Li, M. Xue, P. Zhang, Q. Zhu, R. Men, R. Lin, T. Li, T. Xia, X. Ren, X. Ren, Y. Fan, Y. Su, Y. Zhang, Y. Wan, Y. Liu, Z. Cui, Z. Zhang, and Z. Qiu (2024)

Qwen2.5 technical report
. 

CoRR

abs/2412.15115
. 

Cited by: [Figure 2](https://arxiv.org/html/2602.01966v1#S1.F2), [Table 1](https://arxiv.org/html/2602.01966v1#S4.T1). 

- 
C. Yang, X. Yang, L. Wen, D. Fu, J. Mei, R. Wu, P. Cai, Y. Shen, N. Deng, B. Shi, 
et al.
 (2025b)

Learning on the job: an experience-driven self-evolving agent for long-horizon tasks
. 

arXiv preprint arXiv:2510.08002
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p2.1). 

- 
O. Yoran, S. J. Amouyal, C. Malaviya, B. Bogin, O. Press, and J. Berant (2024)

Assistantbench: can web agents solve realistic and time-consuming tasks?
. 

arXiv preprint arXiv:2407.15711
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
J. Zheng, C. Shi, X. Cai, Q. Li, D. Zhang, C. Li, D. Yu, and Q. Ma (2025a)

Lifelong learning of large language model based agents: a roadmap. arxiv 2025
. 

arXiv preprint arXiv:2501.07278
. 

Cited by: [§1](https://arxiv.org/html/2602.01966v1#S1.p1.1). 

- 
J. Zheng, X. Cai, Q. Li, D. Zhang, Z. Li, Y. Zhang, L. Song, and Q. Ma (2025b)

LifelongAgentBench: evaluating llm agents as lifelong learners
. 

arXiv preprint arXiv:2505.11942
. 

Cited by: [F

...(内容已截断)
