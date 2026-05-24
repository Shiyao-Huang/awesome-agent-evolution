# MemR3: Memory Retrieval via Reflective Reasoning for LLM Agents

- URL: https://arxiv.org/html/2512.20237v1
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "AI agents" "memory" "reflection"

## Raw Content

## MemR3: Memory Retrieval via Reflective Reasoning for LLM Agents

**Source**: https://arxiv.org/html/2512.20237v1

---

# MemR3: Memory Retrieval via Reflective Reasoning for LLM Agents

Xingbo Du 

Loka Li 

Duzhen Zhang 

Le Song 

###### Abstract

Memory systems have been designed to leverage past experiences in Large Language Model (LLM) agents. However, many deployed memory systems primarily optimize compression and storage, with comparatively less emphasis on explicit, closed-loop control of memory retrieval. From this observation, we build memory retrieval as an autonomous, accurate, and compatible agent system, named MemR3, which has two core mechanisms: 1) a 
router
 that selects among 
retrieve
, 
reflect
, and 
answer
 actions to optimize answer quality; 2) a global 
evidence-gap
 tracker that explicitly renders the answering process transparent and tracks the evidence collection process. This design departs from the standard retrieve-then-answer pipeline by introducing a closed-loop control mechanism that enables autonomous decision-making. Empirical results on the LoCoMo benchmark demonstrate that MemR3 surpasses strong baselines on LLM-as-a-Judge score, and particularly, it improves existing retrievers across four categories with an overall improvement on RAG (+7.29%) and Zep (+1.94%) using 
GPT-4.1-mini
 backend, offering a plug-and-play controller for existing memory stores.

Machine Learning, ICML 

## 
1 
Introduction

With recent advances in large language model (LLM) agents, memory systems have become the focus of storing and retrieving long-term, personalized memories. They can typically be categorized into two groups: 1) Parametric methods (
wang2024wise
; 
fang2025alphaedit
) that encode memories implicitly into model parameters, which can handle specific knowledge better but struggle in scalability and continual updates, as modifying parameters to incorporate new memories often risks catastrophic forgetting and requires expensive fine-tuning. 2) Non-parametric methods (
xu2025amem
; 
langmem_blog2025
; 
chhikara2025mem0
; 
rasmussen2025zep
), in contrast, store explicit external information, enabling flexible retrieval and continual augmentation without altering model parameters. However, they typically rely on heuristic retrieval strategies, which can lead to noisy recall, heavy retrieval, and increasing latency as the memory store grows.

Orthogonal to these works, this paper constructs an agentic memory system, MemR3, i.e., 
Mem
ory 
R
etrieval system with 
R
eflective 
R
easoning, to improve retrieval quality and efficiency. Specifically, this system is constructed using LangGraph (
langchain2025langgraph
), with a 
router
 node selecting three optional nodes: 1) the 
retrieve
 node, which is based on existing memory systems, can retrieve multiple times with updated retrieval queries. 2) the 
reflect
 node, iteratively reasoning based on the current acquired evidence and the gaps between questions and evidence. 3) the 
answer
 node that produces the final response using the acquired information. Within all nodes, the system maintains a global 
evidence-gap
 tracker to update the acquired (
evidence
) and missing (
gap
) information.

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1
: 

 Illustration of three memory-usage paradigms. 
Full-Context
 overloads the LLM with all memories and answers incorrectly; 
Retrieve-then-Answer
 retrieves relevant snippets but still miscalculates. In contrast, 
MemR
3

 iteratively retrieves and reflects using an evidence–gap tracker (Acts 0–3), refines the query about Buddy’s adoption date, and produces the correct answer (3 months).

The system has three core 
advantages
: 1) 
Accuracy and efficiency
. By tracking the evidence and gap, and dynamically routing between retrieval and reflection, MemR3 minimizes unnecessary lookups and reduces noise, resulting in faster, more accurate answers. 2) 
Plug-and-play usage
. As a controller independent of existing retriever or memory storage, MemR3 can be easily integrated into memory systems, improving retrieval quality without architectural changes. 3) 
Transparency and explainability.
 Since MemR3 maintains an explicit evidence-gap state over the course of an interaction, it can expose which memories support a given answer and which pieces of information were still missing at each step, providing a human-readable trace of the agent’s decision process. We compare MemR3, the Full-Context setting (which uses all available memories), and the commonly adopted retrieve-then-answer paradigm from a high-level perspective in Fig. [1](https://arxiv.org/html/2512.20237v1#S1.F1). The contributions of this work are threefold in the following:

(1) 
A specialized closed-loop retrieval controller for long-term conversational memory.
 We propose MemR3, an autonomous controller that wraps existing memory stores and turns standard retrieve-then-answer pipelines into a closed-loop process with explicit actions (
retrieve
 / 
reflect
 / 
answer
) and simple early-stopping rules. This instantiates the general LLM-as-controller idea specifically for non-parametric, long-horizon conversational memory.

(2) 
Evidence–gap state abstraction for explainable retrieval.
 MemR3 maintains a global evidence–gap state (ℰ,𝒢)(\mathcal{E},\mathcal{G}) that summarizes what has been reliably established in memory and what information remains missing. This state drives query refinement and stopping, and can be surfaced as a human-readable trace of the agent’s progress. We further formalize this abstraction via an abstract requirement space and prove basic monotonicity and completeness properties, which we later use to interpret empirical behaviors.

(3) 
Empirical study across memory systems.
 We integrate MemR3 with both chunk-based RAG and a graph-based backend (Zep) on the LoCoMo benchmark and compare it with recent memory systems and agentic retrievers. Across backends and question types, MemR3 consistently improves LLM-as-a-Judge scores over its underlying retrievers.

## 
2 
Related Work

### 
2.1 
Memory for LLM Agents

Prior work on non-parametric agent memory systems spans a wide range of fields, including management and utilization (
du2025rethinking
), by storing structured (
rasmussen2025zep
) or unstructured (
zhong2024memorybank
) external knowledge. Specifically, production-oriented agents such as MemGPT (
packer2023memgpt
) introduce an OS-style hierarchical memory system that allows the model to page information between context and external storage, and SCM (
wang2023enhancing
) provides a controller-based memory stream that retrieves and summarizes past information only when necessary. Additionally, Zep (
rasmussen2025zep
) builds a temporal knowledge graph that unifies and retrieves evolving conversational and business data. A-Mem (
xu2025amem
) creates self-organizing, Zettelkasten-style memory that links and evolves over time. Mem0 (
chhikara2025mem0
) extracts and manages persistent conversational facts with optional graph-structured memory. MIRIX (
wang2025mirix
) offers a multimodal, multi-agent memory system with six specialized memory types. LightMem (
fang2025lightmem
) proposes a lightweight and efficient memory system inspired by the Atkinson–Shiffrin model. Another related approach, Reflexion (
shinn2023reflexion
), improves language agents by providing verbal reinforcement across episodes by storing natural-language reflections to guide future trials.

In this paper, we explicitly limit our scope to long-term conversational memory. Existing parametric approaches (
wang2024wise
; 
fang2025alphaedit
), KV-cache–based mechanisms (
zhong2024memorybank
; 
eyuboglu2025cartridges
), and streaming multi-task memory benchmarks (
wei2025evo
) are out of scope for this work. Orthogonal to existing storage, MemR3 is an autonomous retrieval controller that uses a global evidence–gap tracker to route different actions, enabling closed-loop retrieval.

### 
2.2 
Agentic Retrieval-Augmented Generation

Retrieval-Augmented Generation (RAG) (
lewis2020retrieval
) established the modern retrieve-then-answer paradigm; subsequent work explored stronger retrievers (
karpukhin2020dense
; 
izacard2021leveraging
). Beyond the RAG, recent work, such as Self-RAG (
asai2024self
), Reflexion (
shinn2023reflexion
), ReAct (
yao2022react
), and FAIR-RAG (
asl2025fair
), has shown that letting a language model (LM) decide when to retrieve, when to reflect, and when to answer can substantially improve multi-step reasoning and factuality in tool-augmented settings. MemR3 follows this general “LLM-as-controller” paradigm but applies it specifically to long-term conversational memory over non-parametric stores. Concretely, we adopt the idea of multi-step retrieval and self-reflection from these frameworks, but i) move the controller outside the base LM as a LangGraph program, ii) maintain an explicit evidence–gap state that separates verified memories from remaining uncertainties, and iii) interface this state with different memory backends (e.g., RAG and Zep (
rasmussen2025zep
)) commonly used in long-horizon dialogue agents. Our goal is not to replace these frameworks, but to provide a specialized retrieval controller that can be plugged into existing memory systems.

![Refer to caption](https://arxiv.org/html/x2.png)

Figure 2
: 

 Pipeline of MemR3. MemR3 transforms retrieval into a closed-loop process: a router dynamically switches between Retrieve, Reflect, and Answer nodes while a global evidence–gap tracker maintains what is known and what is still missing. This enables iterative query refinement, targeted retrieval, and early stopping, making MemR3 an autonomous, backend-agnostic retrieval controller.

## 
3 
MemR3

In this section, we first formulate the problem and provide preliminaries in Sec. [3.1](https://arxiv.org/html/2512.20237v1#S3.SS1), and then give a system overview of MemR3 in Sec. [3.2](https://arxiv.org/html/2512.20237v1#S3.SS2). Additionally, we describe the two core components that enable accurate and efficient retrieval: the router and the global evidence-gap tracker in Sec. [3.4](https://arxiv.org/html/2512.20237v1#S3.SS4) and Sec. [3.3](https://arxiv.org/html/2512.20237v1#S3.SS3), respectively.

### 
3.1 
Problem Formulation and Preliminaries

We consider a long-horizon LLM agent that interacts with a user, forming a memory store ℳ={mi}i=1N\mathcal{M}=\{m_{i}\}_{i=1}^{N}, where each memory item mim_{i} may correspond to a dialogue utterance, personal fact, structured record, or event, often accompanied by metadata such as timestamps or speakers. Given a user query qq, a retriever is applied to retrieve a set of memory snippets 𝒮\mathcal{S} that are useful for generating the final answer. Then, given designed prompt template pp, the goal is to produce an answer ww:

|  | 𝒮←Retrieve​(q,ℳ).w←LLM​(q,𝒮,p),\begin{split}\mathcal{S}&\leftarrow\texttt{Retrieve}(q,\mathcal{M}).\\
w&\leftarrow\texttt{LLM}(q,\mathcal{S},p),\end{split} |  | (1) |
|---|---|---|---|

which is accurate (consistent with all relevant memories in ℳ\mathcal{M}), efficient (requiring minimal retrieval cycles and low latency), and robust (stable under noisy, redundant, or incomplete memory stores) as much as possible.

Existing memory systems have done great work on the memory storage ℳ\mathcal{M}, but typically follow an *open-loop* pipeline: 1) apply a single retrieval pass; 2) feed the selected memories 𝒮\mathcal{S} into a generator to produce 𝒜\mathcal{A}. This approach lacks adaptivity: retrieval does not incorporate intermediate reasoning, and the system never represents which information remains missing. This leads to both under-retrieval (insufficient evidence) and over-retrieval (long, noisy contexts).

MemR3 addresses these limitations by treating retrieval as an autonomous sequential decision process with explicit modeling of both acquired evidence and remaining gaps.

### 
3.2 
System Overview

MemR3 is implemented as a directed agent graph comprising three operational nodes (Retrieve, Reflect, Answer) and one control node (Router) using LangGraph (
langchain2025langgraph
) (an open-source framework for building stateful, multi-agent workflows as graphs of interacting nodes). The agent maintains a mutable internal state

|  | s=(q,𝒮,ℰ,𝒢,k),s=(q,\mathcal{S},\mathcal{E},\mathcal{G},k), |  | (2) |
|---|---|---|---|

where qq and 𝒮\mathcal{S} are the aforementioned original user query and retrieved snippets, respectively. ℰ\mathcal{E} is the accumulated evidence relevant to qq and 𝒢\mathcal{G} is the remaining missing information (the “gap”) between qq and ℰ\mathcal{E}. Moreover, we maintain the iteration index kk to control early stopping.

At each iteration kk, the router chooses an action in {retrieve,reflect,answer}\{\texttt{retrieve},\ \texttt{reflect},\ \texttt{answer}\}, which determines the next node in the computation graph. The pipeline is shown in Fig. [2](https://arxiv.org/html/2512.20237v1#S2.F2). This transforms the classical retrieve-then-answer pipeline into a closed-loop controller that can repeatedly refine retrieval queries, integrate new evidence, and stop early once the information gap is resolved.

### 
3.3 
Global Evidence-Gap Tracker

A core design principle of MemR3 is to explicitly maintain and update two state variables: the evidence ℰ\mathcal{E} and the gap 𝒢\mathcal{G}. These variables summarize what the agent currently knows and what it still needs to know to answer the question.

At iteration kk, the evidence ℰk\mathcal{E}_{k} and gaps 𝒢k\mathcal{G}_{k} are updated according to the retrieved snippets 𝒮k−1\mathcal{S}_{k-1} (from the 
retrieve
 node) or reflective reasoning ℱk−1\mathcal{F}_{k-1} (from the 
reflect
 node), together with last evidence ℰk−1\mathcal{E}_{k-1} and gaps 𝒢k−1\mathcal{G}_{k-1} at k−1k-1 iteration:

|  | ℰk,𝒢k,ak=LLM​(q,𝒮k−1,ℱk−1,ℰk−1,𝒢k−1,pk),\mathcal{E}_{k},\mathcal{G}_{k},a_{k}=\texttt{LLM}(q,\mathcal{S}_{k-1},\mathcal{F}_{k-1},\mathcal{E}_{k-1},\mathcal{G}_{k-1},p_{k}), |  | (3) |
|---|---|---|---|

where pkp_{k} is the prompt template at kk iteration. Additionally, aka_{k} is the action at kk iteration, which will be introduced in Sec. [3.4](https://arxiv.org/html/2512.20237v1#S3.SS4). Note that we explicitly clarify in pkp_{k} that ℰk\mathcal{E}_{k} does not contain any information in 𝒢k\mathcal{G}_{k}, making evidence and gaps decoupled. An example is shown in Fig. [3](https://arxiv.org/html/2512.20237v1#S3.F3) to illustrate the evidence-gap tracker.

![Refer to caption](https://arxiv.org/html/x3.png)

Figure 3
: 

 Example of the evidence-gap tracker for a specific query. At each step, the agent maintains an explicit summary of the evidence established and the information still missing. This state can be presented directly to users as a human-readable explanation of the agent’s progress in answering the query.

Through the evidence-gap tracker, MemR3 maintains a structured and transparent internal state that continuously refines the agent’s understanding of both i) what has already been established as relevant evidence, and ii) what missing information still prevents a complete and faithful answer. This explicit decoupling enables MemR3 to reason under partial observability: as long as 𝒢k≠∅\mathcal{G}_{k}\neq\varnothing, the agent recognizes that its current knowledge is insufficient and can proactively issue a refined retrieval query to close the remaining gap. Conversely, when 𝒢k\mathcal{G}_{k} becomes empty, the router detects that the agent has accumulated adequate evidence and can safely transition to the 
answer
 node.

Beyond guiding retrieval, the evidence-gap representation also makes the agent’s behavior more transparent. At any iteration kk, the pair (ℰk,𝒢k)(\mathcal{E}_{k},\mathcal{G}_{k}) can be surfaced as a structured explanation of i) which memories the agent currently treats as relevant evidence and ii) which unresolved questions or missing details are preventing a confident answer. This trace provides users and developers with a faithful view of how the agent arrived at its final answer and why additional retrieval steps were taken (or not). In the following, we display an informal theorem that indicates the properties of the idealized evidence-gap tracker.

###### 

Theorem 3.1

(
[Informal]
 Monotonicity, soundness, and completeness of the idealized evidence-gap tracker)
.

Under an idealized requirement space R​(q)R(q) for a specific query qq, the evidence-gap tracker in MemR
3
 is monotone (evidence never decreases and gaps never increase), sound (every supported requirement eventually enters the evidence set), and complete (if every requirement r∈R​(q)r\in R(q) is supported by some memory, the ideal gap eventually becomes empty).

Formally, in Appendix [B](https://arxiv.org/html/2512.20237v1#A2) we define the abstract requirement space R​(q)R(q) and characterize the tracker as a set-valued update on R​(q)R(q), proving fundamental soundness, monotonicity, and completeness properties (Theorem [B.4](https://arxiv.org/html/2512.20237v1#A2.Thmtheorem4)), which we later use in Sec. [4.3](https://arxiv.org/html/2512.20237v1#S4.SS3) to interpret empirical phenomena such as why some questions cannot be fully resolved even after exhausting the iteration budget.

### 
3.4 
LangGraph Nodes

We explicitly define several nodes in the LangGraph framework, including 
start
, 
end
, 
generate
, 
router
, 
retrieve
, 
reflect
, 
answer
. Specifically, 
start
 is always followed by 
retrieve
, and 
end
 is reached after 
answer
. 
generate
 is a LLM generation node, which is already introduced in Eq. [3](https://arxiv.org/html/2512.20237v1#S3.E3). In the following, we further introduce the 
router
 node and three action nodes.

Router
. At each iteration, the router, an autonomous sequential controller, uses the current state and selects an action from {retrieve,reflect,answer}\{\texttt{retrieve},\texttt{reflect},\texttt{answer}\}. Each action aka_{k} is accompanied by a textual generation:

|  | ak∈{(retrieve,Δ​qk),(reflect,fk),(answer,wk)},{\small a_{k}\in\{(\texttt{retrieve},\Delta q_{k}),(\texttt{reflect},f_{k}),(\texttt{answer},w_{k})\},} |  | (4) |
|---|---|---|---|

where Δ​qk\Delta q_{k} is a refinement query, fkf_{k} is a reasoning content, and wkw_{k} is a draft answer, which are utilized in the downstream action nodes. To ensure stability, 
router
 applies three deterministic constraints: 1) a maximum iteration budget nmaxn_{\text{max}} that forces an 
answer
 action once the budget is exhausted, 2) a reflect-streak capacity ncapn_{\text{cap}} that forces a 
retrieve
 action when too many reflections have occurred consecutively, and 3) a retrieval-opportunity check that switches the action to 
reflect
 whenever the retrieval stage returns no snippets. The router’s algorithm is shown in Alg. [1](https://arxiv.org/html/2512.20237v1#alg1).

Algorithm 1

 Router policy in MemR3

1:

Input:
 query qq, previous snippets 𝒮k−1\mathcal{S}_{k-1}, iteration kk, budgets nmax,ncapn_{\text{max}},n_{\text{cap}}, current reflect-streak length nstreakn_{\text{streak}}. 

2:

Output:
 action aka_{k}. 

3:

if
k≥nmaxk\geq n_{\text{max}}
then

4:

ak=answera_{k}=\texttt{answer}
⊳\triangleright Max iteration budget. 

5:

else

if
𝒮k−1=∅\mathcal{S}_{k-1}=\emptyset
then

6:

ak=reflecta_{k}=\texttt{reflect}
⊳\triangleright No retrieved snippets. 

7:

else

if
nstreak≥ncapn_{\text{streak}}\geq n_{\text{cap}}
then

8:

ak=retrievea_{k}=\texttt{retrieve}
⊳\triangleright Max reflect streak. 

9:

else

10:

pass

⊳\triangleright Keep the generated action. 

11:

end

if

These lightweight rules stabilize the decision process while preserving flexibility. We further introduce the detailed implementation of these constraints when introducing the system prompt in Appendix [A.1](https://arxiv.org/html/2512.20237v1#A1.SS1).

##### Retrieve.

Given a generated refinement Δ​qk\Delta q_{k}, the 
retrieve
 node constructs qkret=q⊕Δ​qkq_{k}^{\mathrm{ret}}=q\oplus\Delta q_{k}, where ⊕\oplus means textual combination and qq is the original query, and then, fetches new memory snippets:

|  | 𝒮k=Retrieve​(qkret,ℳ\ℳk−1ret),ℳkret=ℳk−1ret∪𝒮k.\begin{split}\mathcal{S}_{k}=\texttt{Retrieve}(q_{k}^{\mathrm{ret}},\mathcal{M}\backslash\mathcal{M}^{\text{ret}}_{k-1}),~\mathcal{M}^{\text{ret}}_{k}=\mathcal{M}^{\text{ret}}_{k-1}\cup\mathcal{S}_{k}.\end{split} |  | (5) |
|---|---|---|---|

Snippets 𝒮k\mathcal{S}_{k} are independently used for the next generation without history accumulation. Moreover, retrieved snippets are masked to prevent re-selection.

A major benefit of MemR3 is that it treats all concrete retrievers as plug-in modules. Any retriever, e.g., vector search, graph memory, hybrid stores, or future systems, can be integrated into MemR3 as long as they return textual snippets, optionally with stable identifiers that can be masked once used. This abstraction ensures MemR3 remains lightweight, portable, and compatible.

##### Reflect.

The 
reflect
 node incorporates the reasoning process ℱk−1\mathcal{F}_{k-1}, and invokes the router to update (ℰk,𝒢k,ak)(\mathcal{E}_{k},\mathcal{G}_{k},a_{k}) in Eq. [3](https://arxiv.org/html/2512.20237v1#S3.E3), where evidence and gaps can be re-summarized.

##### Answer.

Once the router selects 
answer
, the final answer is generated from the original query qq, the draft answer wkw_{k}, evidence ℰk\mathcal{E}_{k} using prompt pwp_{w} from 
rasmussen2025zep
:

|  | w←LLM​(q,wk,ℰk,pw),w\leftarrow\texttt{LLM}(q,w_{k},\mathcal{E}_{k},p_{w}), |  | (6) |
|---|---|---|---|

The answer LLM is instructed to avoid hallucinations and remain faithful to evidence.

### 
3.5 
Discussion on Efficiency

Although MemR3 introduces extra routing steps, it maintains low overhead via 1) 
Compact evidence and gap summaries
: only short summaries are repeatedly fed into the router. 2) 
Masked retrieval
: each retrieval call yields genuinely new information. 3) 
Small iteration budgets
: typically, most questions can be answered using only a single iteration. Those complicated questions that require multiple iterations are constrained with a small maximum iteration budget. These design choices ensure that MemR3 improves retrieval quality without large increases in retrieved tokens.

## 
4 
Experiments

The experiments are conducted on a machine with an AMD EPYC 7713P 64-core processor, an A100-SXM4-80GB GPU, and 512GB of RAM. Each experiment of MemR3 is repeated three times to report the average scores. Code available: [https://github.com/Leagein/memr3](https://github.com/Leagein/memr3).

### 
4.1 
Experimental Protocols

##### Datasets.

In line with baselines (
xu2025amem
; 
chhikara2025mem0
), we employ LoCoMo (
maharana2024evaluating
) dataset as a fundamental benchmark. LoCoMo has a total of 10 conversations across four categories: 1) multi-hop, 2) temporal, 3) open-domain, 4) single-hop, and 5) adversarial. We exclude the last ‘adversarial’ category, following existing work (
chhikara2025mem0
; 
wang2025mirix
), since it is used to test whether unanswerable questions can be identified. Each conversation has approximately 600 dialogues with 26k tokens and 200 questions on average.

Metrics.
 We adopt the LLM-as-a-Judge (J) score to evaluate answer quality following 
chhikara2025mem0
; 
wang2025mirix
. Compared with surface-level measures such as F1 or BLEU-1 (
xu2025amem
; 
10738994
), this metric better avoids relying on simple lexical overlap and instead captures semantic alignment. Specifically, 
GPT-4.1
(
openai2025gpt41
) is employed to judge whether the answer is correct according to the original question and the generated answer, following the prompt by 
chhikara2025mem0
.

Table 1
: 

LLM-as-a-Judge scores (%, higher is better) for each question category in the LoCoMo (
maharana2024evaluating
) dataset. The best results using each LLM backend, except Full-Context, are in 
bold
. 

| LLM | Method | 1. Multi-Hop | 2. Temporal | 3. Open-Domain | 4. Single-Hop | Overall |
|---|---|---|---|---|---|---|
| GPT-4o-mini | A-Mem (xu2025amem) | 61.70 | 64.49 | 40.62 | 76.63 | 69.06 |
| LangMem (langmem_blog2025) | 62.23 | 23.43 | 47.92 | 71.12 | 58.10 |  |
| Mem0 (chhikara2025mem0) | 67.13 | 55.51 | 51.15 | 72.93 | 66.88 |  |
| Self-RAG (asai2024self) | 69.15 | 64.80 | 34.38 | 88.31 | 76.46 |  |
| RAG-CoT-RAG | 71.28 | 71.03 | 42.71 | 86.99 | 77.96 |  |
| Zep (rasmussen2025zep) | 67.38 | 73.83 | 63.54 | 78.67 | 74.62 |  |
| MemR3 (ours, Zep backbone) | 69.39 (+2.01) | 73.83(+0.00) | 67.01 (+3.47) | 80.60 (+1.93) | 76.26 (+1.64) |  |
| RAG (lewis2020retrieval) | 68.79 | 65.11 | 58.33 | 83.86 | 75.54 |  |
| MemR3 (ours, RAG backbone) | 71.39 (+2.60) | 76.22 (+11.11) | 61.11 (+2.78) | 89.44 (+5.58) | 81.55 (+6.01) |  |
| Full-Context | 72.34 | 58.88 | 59.38 | 86.39 | 76.32 |  |
| GPT-4.1-mini | A-Mem (xu2025amem) | 71.99 | 74.77 | 58.33 | 79.88 | 76.00 |
| LangMem (langmem_blog2025) | 74.47 | 61.06 | 67.71 | 86.92 | 78.05 |  |
| Mem0 (chhikara2025mem0) | 62.41 | 57.32 | 44.79 | 66.47 | 62.47 |  |
| Self-RAG (asai2024self) | 75.89 | 75.08 | 54.17 | 90.12 | 82.08 |  |
| RAG-CoT-RAG | 80.85 | 81.62 | 62.50 | 90.12 | 84.89 |  |
| Zep (rasmussen2025zep) | 72.34 | 77.26 | 64.58 | 83.49 | 78.94 |  |
| MemR3 (ours, Zep backbone) | 77.78 (+5.44) | 77.78 (+0.52) | 69.79 (+5.21) | 84.42 (+0.93) | 80.88 (+1.94) |  |
| RAG (lewis2020retrieval) | 73.05 | 73.52 | 62.50 | 85.90 | 79.46 |  |
| MemR3 (ours, RAG backbone) | 81.20 (+8.15) | 82.14 (+8.62) | 71.53 (+9.03) | 92.17 (+6.27) | 86.75 (+7.29) |  |
|  | Full-Context | 86.43 | 86.82 | 71.88 | 93.73 | 89.00 |

Baselines.
 We select four groups of advanced methods as baselines: 1) memory systems, including A-mem (
xu2025amem
), LangMem (
langmem_blog2025
), and Mem0 (
chhikara2025mem0
); 2) agentic retrievers, like Self-RAG (
asai2024self
). We also design a RAG-CoT-RAG (RCR) pipeline beyond ReAct (
yao2022react
) as a strong agentic retriever baseline combining both RAG (
lewis2020retrieval
) and Chain-of-Thoughts (CoT) (
wei2022chain
); 3) backend baselines, including chunk-based (RAG (
lewis2020retrieval
)) and graph-based (Zep (
rasmussen2025zep
)) memory storage, demonstrating the plug-in capability of MemR3 across different retriever backends; 4) Moreover, ‘Full-Context’ is widely used as a strong baseline and, when the entire conversation fits within the model window, serves as an empirical upper bound on J score (
chhikara2025mem0
; 
wang2025mirix
). More detailed introduction of these baselines is shown in Appendix [C.1](https://arxiv.org/html/2512.20237v1#A3.SS1).

Other Settings.
 Other experimental settings and protocols are shown in Appendix [C.2](https://arxiv.org/html/2512.20237v1#A3.SS2).

LLM Backend.
 We reviewed recent work and found that it most frequently used 
GPT-4o-mini
(
openai2024gpt4omini
), as it is inexpensive and performs well. While some work (
wang2025mirix
) also includes 
GPT-4.1-mini
(
openai2025gpt41
), we set both of them as our LLM backends. In our main results, MemR3 is performed at temperature 0.

### 
4.2 
Main Results

Overall.
 Table [1](https://arxiv.org/html/2512.20237v1#S4.T1) reports LLM-as-a-Judge (J) scores across four LoCoMo categories. Across both LLM backends and memory backbones, MemR3 consistently outperforms its underlying retrievers (RAG and Zep) and achieves strong overall J scores. Under 
GPT-4o-mini
, MemR3 lifts the overall score of Zep from 74.62% to 76.26%, and RAG from 75.54% to 81.55%, with the latter even outperforming the Full-Context baseline (76.32%). With 
GPT-4.1-mini
, we see the same pattern: MemR3 improves Zep from 78.94% to 80.88% and RAG from 79.46% to 86.75%, making the RAG-backed variant the strongest retrieval-based system and narrowing the gap to Full-Context (89.00%). As expected, methods instantiated with 
GPT-4.1-mini
 are consistently stronger than their 
GPT-4o-mini
 counterparts. Full-Context also benefits substantially from the stronger LLM, but under 
GPT-4o-mini
 it lags behind the best retrieval-based systems, especially on temporal and open-domain questions. Overall, these results indicate that closed-loop retrieval with an explicit evidence–gap state yields gains primarily orthogonal to the choice of LLM or memory backend, and that MemR3 particularly benefits from backends that expose relatively raw snippets (RAG) rather than heavily compressed structures (Zep).

Multi-hop.
 Multi-hop questions require chaining multiple pieces of evidence and, therefore, directly test our reflective controller. Under 
GPT-4o-mini
, MemR3 improves both backbones on this category: the multi-hop J score rises from 68.79% to 71.39% on RAG and from 67.38% to 69.39% on Zep, bringing both close to the Full-Context score (72.34%). With 
GPT-4.1-mini
, the gains are more pronounced: MemR3 boosts RAG from 73.05% to 81.20% and Zep from 72.34% to 77.78%, outperforming all other baselines and approaching the Full-Context upper bound (86.43%). These consistent gains suggest that explicitly tracking evidence and gaps helps the agent coordinate multiple distant memories via iterative retrieval, rather than relying on a single heuristic pass.

Temporal.
 Temporal questions stress the model’s ability to reason about ordering and dating of events over long horizons, where both under- and over-retrieval can be harmful. Here, MemR3 delivers some of its most considerable relative improvements. For 
GPT-4o-mini
, the temporal J score of RAG jumps from 65.11% to 76.22%, outperforming both the original RAG and the Zep baseline (73.83%), while MemR3 with a Zep backbone preserves Zep’s strong temporal accuracy (73.83%). Full-Context performs notably worse in this regime (58.88%), indicating that simply supplying all dialogue turns can hinder temporal reasoning under a weaker backbone. With 
GPT-4.1-mini
, MemR3 again significantly strengthens temporal reasoning: RAG improves from 73.52% to 82.14%, and Zep from 77.26% to 77.78%, making the RAG-backed MemR3 the best retrieval-based system and closing much of the remaining gap to Full-Context (86.82%). These findings support our design goal that explicitly modeling “what is already known” versus “what is still missing” helps the agent align and compare temporal relations more robustly.

Open-Domain.
 Open-domain questions are less tied to the user’s personal timeline and often require retrieving diverse background knowledge, which makes retrieval harder to trigger and steer. Despite this, MemR3 consistently improves over its backbones. Under 
GPT-4o-mini
, MemR3 increases the open-domain J score of RAG from 58.33% to 61.11% and that of Zep from 63.54% to 67.01%, with the Zep-backed variant achieving the best performance among all methods in this block, surpassing Full-Context (59.38%). With 
GPT-4.1-mini
, the gains become even larger: MemR3 lifts RAG from 62.50% to 71.53% and Zep from 64.58% to 69.79%, nearly matching the Full-Context baseline (71.88%) and again outperforming all other baselines. We attribute these improvements to the router’s ability to interleave retrieval with reflection: when initial evidence is noisy or off-topic, MemR3 uses the gap representation to reformulate queries and pull in more targeted external knowledge rather than committing to an early, brittle answer.

Single-hop.
 Single-hop questions can often be answered from a single relevant memory snippet, so the potential headroom is smaller, but MemR3 still yields consistent gains. With 
GPT-4o-mini
, MemR3 raises the single-hop J score from 78.67% to 80.60% on Zep and from 83.86% to 89.44% on RAG, with the latter surpassing the Full-Context baseline (86.39%). Under 
GPT-4.1-mini
, MemR3 improves Zep from 83.49% to 84.42% and RAG from 85.90% to 92.17%, making the RAG-backed variant the strongest method overall aside from Full-Context (93.73%). Together with the iteration-count analysis in Sec. [4.3](https://arxiv.org/html/2512.20237v1#S4.SS3), these results suggest that the router often learns to terminate early on straightforward single-hop queries, gaining accuracy primarily through better evidence selection rather than additional reasoning depth, and thus adding little overhead in tokens or latency.

### 
4.3 
Other Experiments

We ablate various hyperparameters and modules to evaluate their impact in MemR3 with the RAG retriever. During these experiments, we utilize 
GPT-4o-mini
 as a consistent LLM backend.

Table 2
: 

Ablation studies. Best results are in 
bold
. 

| Method | MH* | Temporal | OD* | SH* | Overall |
|---|---|---|---|---|---|
| RAG | 68.79 | 65.11 | 58.33 | 83.86 | 75.54 |
| MemR3 | 71.39 | 76.22 | 61.11 | 89.44 | 81.55 |
| w/o mask | 62.41 | 68.54 | 55.21 | 72.17 | 68.54 |
| w/o Δ​qk\Delta q_{k} | 66.67 | 75.08 | 60.42 | 83.37 | 77.11 |
| w/o reflect | 65.25 | 73.83 | 61.46 | 83.37 | 76.65 |

- 
*

MH = Multi-hop; OD = Open-domain; SH = Single-hop.

##### Ablation Studies.

We first examine the contribution of the main design choices in MemR3 by progressively removing them while keeping the RAG retriever and all hyperparameters fixed. As shown in Table [2](https://arxiv.org/html/2512.20237v1#S4.T2), disabling masking for previously retrieved snippets (w/o mask) results in the largest degradation, reducing the overall J score from 81.55% to 68.54% and harming every category. This confirms that repeatedly surfacing the same memories wastes budget and fails to effectively close the remaining gaps. Removing the refinement query Δ​qk\Delta q_{k} (w/o Δ​qk\Delta q_{k}) has a milder effect: temporal and open-domain performance changed a little, but multi-hop and single-hop scores decline significantly, indicating that tailoring retrieval queries from the current evidence-gap state is particularly beneficial for simpler questions. Disabling the 
reflect
 node (w/o reflect) similarly reduces performance (from 81.55% to 76.65%), with notable drops on multi-hop and single-hop questions, highlighting the value of interleaving reasoning-only steps with retrieval. Note that in Table [2](https://arxiv.org/html/2512.20237v1#S4.T2), the raw retrieved snippets are only visible to the vanilla RAG.

##### Effect of nchkn_{\text{chk}} and nmaxn_{\text{max}}.

We first choose a nominal configuration for MemR3 (with a RAG retriever) by arbitrarily setting the number of chunks per iteration nchk=3n_{\text{chk}}=3 and the max iteration budget nmax=5n_{\text{max}}=5. In Fig. [4(a)](https://arxiv.org/html/2512.20237v1#S4.F4.sf1), we fix nmax=5n_{\text{max}}=5 and perform ablations over nchk∈{1,3,5,7,9}n_{\text{chk}}\in\{1,3,5,7,9\}. In Fig. [4(b)](https://arxiv.org/html/2512.20237v1#S4.F4.sf2), we fix nchk=3n_{\text{chk}}=3 and perform ablations over nmax∈{1,2,3,4,5}n_{\text{max}}\in\{1,2,3,4,5\}. Considering both of the LLM-as-a-Judge score and token consumption, we eventually choose nchk=5n_{\text{chk}}=5 and nmax=5n_{\text{max}}=5 in all main experiments.

![Refer to caption](https://arxiv.org/html/x4.png)

(a)

![Refer to caption](https://arxiv.org/html/x5.png)

(b)

Figure 4
: 

LLM-as-a-Judge score (%) with different a) number of chunks per iteration and b) max iterations.

##### Iteration count.

We further inspect how often MemR3 actually uses multiple retrieve/reflect/answer iterations when nchk=5n_{\text{chk}}=5 and nmax=5n_{\text{max}}=5 (Fig. [5](https://arxiv.org/html/2512.20237v1#S4.F5)). Overall, most questions are answered after a single iteration, and this effect is particularly strong for Single-hop questions. An exception is open-domain questions, for which 58 of 96 require continuous retrieval or reflection until the maximum number of iterations is reached, highlighting the inherent challenges and uncertainty in these questions. Additionally, only a small fraction of questions terminate at intermediate depths (2–4 iterations), suggesting that MemR3 either becomes confident early or uses the whole iteration budget when the gap remains non-empty.

We observe that this distribution arises from two regimes. On the one hand, straightforward questions require only a single piece of evidence and can be resolved in a single iteration, consistent with intuition. From the perspective of the idealized tracker in Appendix [B](https://arxiv.org/html/2512.20237v1#A2), these are precisely the queries for which every requirement r∈R​(q)r\in R(q) is supported by some retrieved memory item m∈⋃j≤kSjm\in\bigcup_{j\leq k}S_{j} with m⊧rm\models r, so the completeness condition in Theorem [B.4](https://arxiv.org/html/2512.20237v1#A2.Thmtheorem4) is satisfied and the ideal gap Gk⋆G_{k}^{\star} becomes empty.

On the other hand, some challenging questions are inherently underspecified given the stored memories, so the gap cannot be fully closed even if the agent continues to refine its query. For example, for the question “
When did Melanie paint a sunrise?
”, the correct answer in our setup is simply “
2022
” (the year). MemR3 quickly finds this year at the first iteration based on evidence “
Melanie painted the lake sunrise image last year (2022).
”. However, under the idealized abstraction, the requirement set R​(q)R(q) implicitly includes an exact date predicate (year–month–day), and no memory item m∈⋃j≤KSjm\in\bigcup_{j\leq K}S_{j} satisfies m⊧rm\models r for that finer-grained requirement. Thus, the precondition of Theorem [B.4](https://arxiv.org/html/2512.20237v1#A2.Thmtheorem4)(3) is violated, and Gk⋆G_{k}^{\star} never becomes empty; the practical tracker mirrors this by continuing to search for the missing specificity until it hits the maximum iteration budget. In such cases, the additional token consumption is primarily due to a mismatch between the question’s granularity and the available memory, rather than a failure of the agent.

![Refer to caption](https://arxiv.org/html/x6.png)

Figure 5
: 

Number of questions requiring different numbers of iterations before final answers, across four categories.

### 
4.4 
Revisiting the Evaluation Protocols of LoCoMo

During our reproduction of the baselines, we identified a latent ambiguity in the LoCoMo dataset’s category indexing. Specifically, the mapping between numerical IDs and semantic categories (e.g., Multi-hop vs. Single-hop) implies a non-trivial alignment challenge. We observed that this ambiguity has led to category misalignment in several recent studies (
chhikara2025mem0
; 
wang2025mirix
), potentially skewing the granular analysis of agent capabilities.

To ensure a rigorous and fair comparison, we recalibrate the evaluation protocols for all baselines. In Table [1](https://arxiv.org/html/2512.20237v1#S4.T1), we report the performance based on the corrected alignment, where the alignment can be induced by the number of questions in each category. We believe this clarification contributes to a more accurate understanding of the current SOTA landscape. Details of the dataset realignment are illustrated in Appendix [C.3](https://arxiv.org/html/2512.20237v1#A3.SS3).

## 
5 
Conclusion

In this work, we introduce MemR3, an autonomous memory-retrieval controller that transforms standard retrieve-then-answer pipelines into a closed-loop process via a LangGraph-based sequential decision-making framework. By explicitly maintaining what is known and what remains unknown using an evidence-gap tracker, MemR3 can iteratively refine queries, balance retrieval and reflection, and terminate early once sufficient evidence has been gathered. Our experiments on the LoCoMo benchmark show that MemR3 consistently improves LLM-as-a-Judge scores over strong memory baselines, while incurring only modest token and latency overhead and remaining compatible with heterogeneous backends. Beyond these concrete gains, MemR3 offers an explainable abstraction for reasoning under partial observability in long-horizon agent settings.

However, we acknowledge some 
limitations
 for future work: 1) MemR3 requires an existing retriever or memory structure, and particularly, the performance greatly depends on the retriever or memory structure. 2) The routing structure could lead to token waste for answering simple questions. 3) MemR3 is currently not designed for multi-modal memories like images or audio.

## 
Appendix A 
Prompts

### 
A.1 
System prompt of the 
generate
 node

The system prompt is defined as follows, where the “decision_directive” instructs the maximum iteration budges, reflect-streak capacity, and retrieval opportunity check, introduced in Sec. [3.4](https://arxiv.org/html/2512.20237v1#S3.SS4). Generally, “decision_directive” is a textual instruction: 
“reflect” if you need to think about the evidence and gaps; choose “answer” ONLY when evidence is solid and no gaps are noted; choose “retrieve” otherwise.
 However, when the maximum iterations budget is reached, “decision_directive” is set as “answer” to stop early. When the reflection reaches the maximum capacity, “decision_directive” is set as “retrieve” to avoid repeated ineffective reflection. When there is no useful retrieval remains, “decision_directive” is set as “reflect” to avoid repeated ineffective retrieval. Through these constraints, the agent can avoid infinite ineffective actions to maintain stability.

### 
A.2 
User prompt of the 
generate
 node

Apart from the system, the user prompt is responsible to feed additional information to the LLM. Specifically, at the kk iteration, “question” is the original question qq. “evidence_block” and “gap_block” are evidence ℰk\mathcal{E}_{k} and gaps 𝒢k\mathcal{G}_{k} introduced in Sec. [3.3](https://arxiv.org/html/2512.20237v1#S3.SS3). “raw_block” is the retrieved raw snippets 𝒮k\mathcal{S}_{k} in Eq.[5](https://arxiv.org/html/2512.20237v1#S3.E5). “reasoning_block” is the reasoning content ℱk\mathcal{F}_{k} in Sec. [3.4](https://arxiv.org/html/2512.20237v1#S3.SS4). “last_query” is the refined query Δ​qk\Delta q_{k} introduced in Sec. [3.4](https://arxiv.org/html/2512.20237v1#S3.SS4) that enables the new query to be different from the prior one. Note that these fields can be left empty if the corresponding information is not present.

## 
Appendix B 
Formalizing the Evidence-Gap Tracker

A central component of MemR3 is the evidence-gap tracker introduced in Sec. [3.3](https://arxiv.org/html/2512.20237v1#S3.SS3), which maintains an evolving summary of i) what information has been reliably established from memory and ii) what information is still missing to answer the query. While the practical implementation of this tracker is based on LLM-generated summaries, we introduce an idealized formal abstraction that clarifies its intended behavior, enables principled analysis, and provides a foundation for studying correctness and robustness. This abstraction does not assume perfect extraction; rather, the LLM acts as a stochastic approximator to the idealized tracker.

###### 

Definition B.1

(Idealized Requirement Space)
.

For a user query qq, we define a finite set of *atomic information requirements*, which specify the minimal facts needed to fully answer the query:

|  | R​(q)={r1,r2,…,rm}.R(q)=\{r_{1},r_{2},\dots,r_{m}\}. |  | (7) |
|---|---|---|---|

For example, for the question “How many months passed between events AA and BB?”, the requirement set can be

|  | R​(q)={date​(A),date​(B)}.R(q)=\{\text{date}(A),\text{date}(B)\}. |  | (8) |
|---|---|---|---|

Each requirement r∈R​(q)r\in R(q) is associated with a symbolic predicate (e.g., a timestamp, entity attribute, or event relation), and R​(q)R(q) provides the semantic target against which retrieved memories are judged.

###### 

Definition B.2

(Memory-Support Relation)
.

Let ℳ\mathcal{M} be the memory store and Sk⊆ℳS_{k}\subseteq\mathcal{M} denote the snippets retrieved at iteration kk. We define a relation m⊧rm\models r to indicate that memory item m∈ℳm\in\mathcal{M} contains sufficient information to support requirement r∈R​(q)r\in R(q). Formally, m⊧rm\models r holds if the textual content of mm contains a minimal witness (e.g., a timestamp, entity mention, or explicit assertion) matching the predicate corresponding to rr. The matching criterion may be implemented via deterministic pattern rules or LLM-based semantic matching; our analysis is agnostic to this choice.

###### 

Definition B.3

(Idealized Evidence-Gap Update Rule)
.

At iteration kk, the idealized tracker maintains two sets: i) the evidence Ek⊆R​(q)E_{k}\subseteq R(q) and ii) the gaps Gk=R​(q)∖EkG_{k}=R(q)\setminus E_{k}. Given newly retrieved snippets SkS_{k}, the ideal updates are

|  | Ek⋆=Ek−1∪{r∈R​(q)|∃m∈Sk,m⊧r},Gk⋆=R​(q)∖Ek⋆.E_{k}^{\star}=E_{k-1}\cup\big\{r\in R(q)\,\big|\,\exists m\in S_{k},\;m\models r\big\},\qquad G_{k}^{\star}=R(q)\setminus E_{k}^{\star}. |  | (9) |
|---|---|---|---|

In this abstraction, the tracker monotonically accumulates verified requirements and removes corresponding gaps, providing a clean characterization of the desired system behavior independent of noise.

### 
B.1 
Practical Instantiation via LLM Summaries

In MemR3, the tracker is instantiated through LLM-generated summaries:

|  | (Ek,Gk)=LLM​(q,Sk,Ek−1,Gk−1),(E_{k},G_{k})=\mathrm{LLM}\big(q,S_{k},E_{k-1},G_{k-1}\big), |  | (10) |
|---|---|---|---|

where the prompt explicitly instructs the model to: (i) extract concise factual bullets relevant to qq, (ii) enumerate missing information blocking a complete answer, and (iii) avoid hallucinations or speculative inference. Thus, (Ek,Gk)(E_{k},G_{k}) serves as a stochastic approximation to the idealized (Ek⋆,Gk⋆)(E_{k}^{\star},G_{k}^{\star}):

|  | (Ek,Gk)≈(Ek⋆,Gk⋆),(E_{k},G_{k})\approx(E_{k}^{\star},G_{k}^{\star}), |  | (11) |
|---|---|---|---|

with deviations arising from LLM extraction noise. This perspective reconciles the formal update rule with the prompt-driven practical implementation.

### 
B.2 
Correctness Properties under Idealized Extraction

Although the practical instantiation lacks deterministic guarantees, the idealized tracker in Definition [B.3](https://arxiv.org/html/2512.20237v1#A2.Thmtheorem3) satisfies several intuitive properties essential for closed-loop retrieval.

###### 

Theorem B.4

(Properties of the Idealized Tracker)
.

Assume that for all kk and all r∈R​(q)r\in R(q), we have r∈Ek⋆r\in E_{k}^{\star} if and only if there exists some m∈⋃j≤kSjm\in\bigcup_{j\leq k}S_{j} such that m⊧rm\models r. Then the following hold:

1. 
1.

Monotonicity:

Ek−1⋆⊆Ek⋆E_{k-1}^{\star}\subseteq E_{k}^{\star}
 and 
Gk⋆⊆Gk−1⋆G_{k}^{\star}\subseteq G_{k-1}^{\star}
 for all 
k≥1k\geq 1
.

2. 
2.

Soundness:

 If 
m⊧rm\models r
 for some retrieved memory 
m∈Skm\in S_{k}
, then 
r∈Ek⋆r\in E_{k}^{\star}
.

3. 
3.

Completeness at convergence:

 If every requirement 
r∈R​(q)r\in R(q)
 is supported by some 
m∈⋃j≤KSjm\in\bigcup_{j\leq K}S_{j}
 with 
m⊧rm\models r
, then 
EK⋆=R​(q)E_{K}^{\star}=R(q)
 and hence 
GK⋆=∅G_{K}^{\star}=\varnothing
.

###### Proof.

(1) By Definition [B.3](https://arxiv.org/html/2512.20237v1#A2.Thmtheorem3),

|  | Ek⋆=Ek−1⋆∪{r∈R​(q)|∃m∈Sk,m⊧r},E_{k}^{\star}=E_{k-1}^{\star}\cup\big\{r\in R(q)\,\big|\,\exists m\in S_{k},\;m\models r\big\}, |  | (12) |
|---|---|---|---|

so Ek−1⋆⊆Ek⋆E_{k-1}^{\star}\subseteq E_{k}^{\star}. Since Gk⋆=R​(q)∖Ek⋆G_{k}^{\star}=R(q)\setminus E_{k}^{\star} and Ek−1⋆⊆Ek⋆E_{k-1}^{\star}\subseteq E_{k}^{\star}, we obtain Gk⋆⊆Gk−1⋆G_{k}^{\star}\subseteq G_{k-1}^{\star}.

(2) If m⊧rm\models r for some m∈Skm\in S_{k}, then by Definition [B.3](https://arxiv.org/html/2512.20237v1#A2.Thmtheorem3) we have r∈{r′∈R​(q)∣∃m′∈Sk,m′⊧r′}⊆Ek⋆r\in\{r^{\prime}\in R(q)\mid\exists m^{\prime}\in S_{k},\;m^{\prime}\models r^{\prime}\}\subseteq E_{k}^{\star}.

(3) If every r∈R​(q)r\in R(q) is supported by some m∈⋃j≤KSjm\in\bigcup_{j\leq K}S_{j} with m⊧rm\models r, then repeated application of the update rule ensures that each such rr is eventually added to EK⋆E_{K}^{\star}. Hence EK⋆=R​(q)E_{K}^{\star}=R(q) and therefore GK⋆=R​(q)∖EK⋆=∅G_{K}^{\star}=R(q)\setminus E_{K}^{\star}=\varnothing. ∎

These properties characterize the target behavior that the LLM-based tracker implementation aims to approximate.

### 
B.3 
Robustness Considerations

Since real LLMs introduce extraction noise, the practical tracker may deviate from the idealized (Ek⋆,Gk⋆)(E_{k}^{\star},G_{k}^{\star}), for example, through false negatives (missing evidence), false positives (hallucinated evidence), or unstable gap estimates. In the main text (Sec. [3.3](https://arxiv.org/html/2512.20237v1#S3.SS3) and Sec. [4.3](https://arxiv.org/html/2512.20237v1#S4.SS3)), we study these effects empirically by injecting noisy or contradictory memories and measuring their impact on routing decisions and final answer quality. The formal abstraction above serves as the reference model against which these robustness behaviors are interpreted.

### 
B.4 
Approximation Bias of the LLM Tracker

The abstraction in this section assumes access to an ideal tracker that updates (ℰk\mathcal{E}_{k}, 𝒢k\mathcal{G}_{k}) exactly according to the requirement–support relation m⊧rm\models r. In practice, MemR3 uses an LLM-generated tracker (ℰk\mathcal{E}_{k}, 𝒢k\mathcal{G}_{k}), which only approximates this ideal update. This introduces several forms of approximation bias: i) 
Coverage bias
 (false negatives): supported requirements

...(内容已截断)
