# ParamMem: Augmenting Language Agents with Parametric Reflective Memory

- URL: https://arxiv.org/html/2602.23320v1
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "AI agents" "memory" "reflection"

## Raw Content

## ParamMem: Augmenting Language Agents with Parametric Reflective Memory

**Source**: https://arxiv.org/html/2602.23320v1

---

# 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)
ParamMem: Augmenting Language Agents with Parametric Reflective Memory

Tianjun Yao 

Yongqiang Chen 

Yujia Zheng 

Pan Li 

Zhiqiang Shen 

Kun Zhang 

###### Abstract

Self-reflection enables language agents to iteratively refine solutions, yet often produces repetitive outputs that limit reasoning performance. Recent studies have attempted to address this limitation through various approaches, among which increasing reflective diversity has shown promise. Our empirical analysis reveals a strong positive correlation between reflective diversity and task success, further motivating the need for diverse reflection signals. We introduce  

P

aram 

M

em
, a parametric memory module that encodes cross-sample reflection patterns into model parameters, enabling diverse reflection generation through temperature-controlled sampling. Building on this module, we propose  

P

aram 

A

gent
, a reflection-based agent framework that integrates parametric memory with episodic and cross-sample memory. Extensive experiments on code generation, mathematical reasoning, and multi-hop question answering demonstrate consistent improvements over state-of-the-art baselines. Further analysis reveals that  

P

aram 

M

em
 is sample-efficient, enables weak-to-strong transfer across model scales, and supports self-improvement without reliance on stronger external model, highlighting the potential of  

P

aram 

M

em
 as a effective component for enhancing language agents. Code and data can be found at: [https://github.com/tianyao-aka/ParamAgent](https://github.com/tianyao-aka/ParamAgent).

Machine Learning, ICML 

\useunder

\ul

\icml@noticeprintedtrue

†

†
footnotetext: 

\forloop
@affilnum1
\c@@affilnum
 < 
\c@@affiliationcounter
0
AUTHORERR: Missing \icmlaffiliation.
 .  

\Notice@String

## 
1 
Introduction

Large language models (LLMs) (
brown2020language
; 
chowdhery2023palm
; 
touvron2023llama
) have exhibited remarkable progress in complex reasoning tasks. A key insight driving recent advances is test-time scaling, i.e., allocating additional computation during inference to improve reasoning (
wei2022chain
; 
wang2022self
; 
madaan2023self
; 
yao2023tree
; 
shinn2023reflexion
; 
snell2024scaling
). Among these approaches, reflection-based frameworks have proven particularly effective, where agents verbally reflect on task feedback and accumulate self-reflections in episodic memory to guide subsequent trials (
shinn2023reflexion
; 
madaan2023self
; 
yao2023tree
). Such reflection mechanisms have been successfully applied to programming (
shinn2023reflexion
), mathematical reasoning (
lightman2023let
), decision-making (
yao2023react
), and multi-agent systems (
wu2023autogen
; 
hong2024metagpt
).

![Refer to caption](https://arxiv.org/html/2602.23320v1/x1.png)

Figure 1
: 

Correlation between reflective diversity (measured by average pairwise cosine distance) and task performance across five datasets using LLaMA-3.1-8B under Reflexion, DoT, and DoT-bank.

However, recent studies have identified limitations in self-reflection, showing that it often produces repetitive and inaccurate outputs (
huang2023large
; 
yao2023retroformer
; 
lingam2025enhancing
; 
ozer2025mar
), which hinders the effectiveness of self-reflection. Among these works, 
lingam2025enhancing
 attempts to increase reflective diversity through prompt-level modifications (DoT) and by incorporating cross-sample trajectories (DoT-bank), demonstrating preliminary success. In this work, we first explore how reflective diversity relates to final performance. Specifically, we conduct experiments on five datasets using LLaMA-3.1-8B, computing the pairwise cosine distance across multi-round reflection logs for each sample under Reflexion, DoT, and DoT-bank, and averaging these distances. As illustrated in Figure [1](https://arxiv.org/html/2602.23320v1#S1.F1), the average Pearson correlation coefficient across the five datasets is 0.76, indicating a strong positive relationship between reflective diversity and task performance. While prompt-based approaches to diversifying reflections sometimes yield limited improvements, incorporating reasoning trajectories from similar samples often enhances diversity and the final performance.

Despite its effectiveness, the retrieval-based approach like DoT-bank relies on embedding similarity to retrieve cross-sample trajectories, which has limited capacity for capturing compositional patterns (
nguyen2023generative
; 
weller2025theoretical
); moreover, learned embeddings are prone to collapse into low-rank subspaces, reducing retrieval diversity (
guo2023embedding
). This naturally raises our question:

To address this challenge, we introduce 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em
, a new form of reflective memory that provides diversity through a fundamentally different mechanism. Unlike approaches that rely on prompt variations and retrieval-based methods that explicitly utilize similar samples,  

P

aram 

M

em
 operates by fine-tuning a lightweight parametric module on an auxiliary reflection dataset 𝒟={(xi,rig)}i=1n\mathcal{D}=\{(x_{i},r_{i}^{g})\}_{i=1}^{n}. Through training, the module encodes cross-sample patterns into its parameters; at inference time, it generates reflections by generalizing from these learned patterns rather than retrieving existing examples.

Contribution.
 We propose a new paradigm for enhancing reflective diversity to improve reasoning in language agents. Central to our approach is  

P

aram 

M

em
, a parametric memory module that internalizes cross-sample reflection patterns.  

P

aram 

M

em
 targets diversity, is lightweight, and can seamlessly integrate into existing reflection-based frameworks. Building upon  

P

aram 

M

em
, we propose  

P

aram 

A

gent
 and its enhanced variant  

P

aram 

A

gent-plus
, which unify parametric reflective memory with episodic and cross-sample memory within a coherent framework. Through extensive empirical evaluation, our method exhibits several notable advantages: 
①

Substantial performance gains.
 Our approach achieves consistent improvements across programming, mathematical reasoning, and multi-hop question answering, outperforming state-of-the-art baselines significantly. 
②

Sample efficiency.

P

aram 

M

em
 requires only ∼\sim500 training samples to deliver strong performance, highlighting its effectiveness in low-data regimes. This makes  

P

aram 

M

em
 practical for deployment in resource-constrained settings. 
③

Self-improvement.
 Even without relying on stronger external models,  

P

aram 

M

em
 can enhance reflective diversity using data generated by the base LLM itself, leading to improved performance for  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
. This highlights the potential of  

P

aram 

M

em
 as a self-contained, annotation-free module for continual agent improvement. 
④

Weak-to-strong transfer.
 Even when  

P

aram 

M

em
 is trained using a weaker LLM, its generated reflective signals still enhance  

P

aram 

A

gent
 built on stronger LLMs. This indicates that even a weaker model can effectively increase the reflective diversity of a stronger model.

## 
2 
Preliminaries

![Refer to caption](https://arxiv.org/html/2602.23320v1/x2.png)

Figure 2
: 

Comparison of memory mechanisms across different frameworks. 
Pale Mint
 denotes episodic memory only, as in Reflexion and DoT. 
Lavender Gray
 indicates episodic memory combined with cross-sample memory, as in DoT-bank. 
Soft Sand
 represents the full integration of episodic, cross-sample, and parametric memory, as in  

P

aram 

A

gent-plus
. When using only episodic and parametric memory, the framework reduces to  

P

aram 

A

gent
.

We consider a pretrained language model pθp_{\theta} that generates output yy given input xx. We use r1,…,rkr_{1},\ldots,r_{k} to denote self-reflections accumulated up to kk iterations, and use rkgr_{k}^{g} to denote the model-based outputs (e.g., reflections in programming and math tasks) sampled from the parametric memory module ℳg\mathcal{M}_{g}.

Reflexion Framework.
 Reflexion (
shinn2023reflexion
) enables iterative reasoning through four components: (1) an 
actor
pθp_{\theta} that generates candidate solutions, (2) an 
evaluator
 that provides task-specific feedback (e.g., test results, correctness signals), (3) a 
self-reflection module
pθp_{\theta} that converts feedback into natural language reflections diagnosing errors, and (4) an 
episodic memory
ℳ\mathcal{M} that stores reflections from prior iterations. At iteration kk, the actor generates candidate solutions conditioned on accumulated reflections from episodic memory:

|  | yk∼pθ(⋅∣x,r1:k−1).y_{k}\sim p_{\theta}(\cdot\mid x,r_{1:k-1}). |  | (1) |
|---|---|---|---|

Cross-Sample Memory.
 Cross-sample memory, which leverages past experiences or external logs, has been proposed in recent studies to enhance agent reasoning capabilities (
borgeaud2022improving
; 
shi2023replug
; 
wang2023augmenting
; 
zhong2024memorybank
; 
wang2024agent
). As recent studies have identified limited diversity in self-reflections, cross-sample memory is adopted to store reasoning trajectories from previously solved problems, thereby enriching the diversity of reflective inputs, which has proven effective in improving agentic reasoning. Given a new task, relevant trajectories are retrieved from the memory bank and incorporated into the prompt:

|  | y∼pθ(⋅∣x,r1:k,Retrieve(ℬ,x)),y\sim p_{\theta}(\cdot\mid x,r_{1:k},\textsc{Retrieve}(\mathcal{B},x)), |  | (2) |
|---|---|---|---|

where ℬ\mathcal{B} denotes the trajectory bank. In this study, we propose 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em
, a parametric memory module pϕ​(⋅)p_{\phi}(\cdot) complementary to episodic memory and cross-sample memory, which further promotes the diversity of reflective inputs. Based on  

P

aram 

M

em
, we propose  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
. In  

P

aram 

A

gent
, the actor generates solutions conditioned on both episodic memory and parametric memory:

|  | yk∼pθ(⋅∣x,r1:k−1,rkg),y_{k}\sim p_{\theta}(\cdot\mid x,r_{1:k-1},r^{g}_{k}), |  | (3) |
|---|---|---|---|

where rkg∼pϕ(⋅∣x)r^{g}_{k}\sim p_{\phi}(\cdot\mid x) denotes the reflection sampled from  

P

aram 

M

em
 at the kk-th iteration.  

P

aram 

A

gent-plus
 further incorporates cross-sample memory, conditioning on all three memory sources:

|  | yk∼pθ(⋅∣x,r1:k−1,Retrieve(ℬ,x),rkg).y_{k}\sim p_{\theta}(\cdot\mid x,r_{1:k-1},\textsc{Retrieve}(\mathcal{B},x),r^{g}_{k}). |  | (4) |
|---|---|---|---|

An architectural comparison of these frameworks is illustrated in Figure [2](https://arxiv.org/html/2602.23320v1#S2.F2).

## 
3 
Augmenting Language Agents with 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em

In this section, we first describe how to construct  

P

aram 

M

em
, and then present how to incorporate it into the proposed framework  

P

aram 

A

gent
.

### 
3.1 
Building 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em

The core idea of  

P

aram 

M

em
 is to implicitly capture cross-sample regularities via training dynamics. Through fine-tuning, the module learns to generalize reflection patterns to unseen examples, rather than relying on prompt-based instructions or retrieving similar samples. While prompt-based methods are constrained by fixed instruction templates, and retrieval-based methods are limited by embedding similarity to existing examples,  

P

aram 

M

em
 can generate novel reflections by interpolating and extrapolating from learned patterns, therefore providing an additional source of diversity. The building process begins with constructing an auxiliary dataset for finetuning. Specifically, we curate a dataset 𝒟={(xi,rig)}i=1n\mathcal{D}=\{(x_{i},r_{i}^{g})\}_{i=1}^{n}, where xix_{i} denotes the input sample (e.g., a programming task), and rig=fϕ​(xi;𝒫)r_{i}^{g}=f_{\phi}(x_{i};\mathcal{P}) is obtained by prompting an LLM fϕf_{\phi} with a task-specific prompt 𝒫\mathcal{P} to generate auxiliary supervision for xix_{i}. We then fine-tune a pretrained LLM on 𝒟\mathcal{D} using LoRA (
hu2022lora
) to obtain the parametric module ℳg\mathcal{M}_{g}.

For 
programming and math tasks
, rigr_{i}^{g} takes the form of reflective feedback that enumerates potential mistakes and buggy implementations. For 
multi-hop QA
, directly providing all supporting passages would consume excessive tokens. Inspired by cognitive chunking (
miller1956magical
; 
baddeley2020working
) and least-to-most prompting (
zhou2022least
), we instead prompt the LLM to decompose the query into compact semantic units and potential reasoning sub-tasks. An example for programming and multi-hop QA is illustrated in Figure [3](https://arxiv.org/html/2602.23320v1#S3.F3). Further details on dataset construction are provided in Appendix [B.2](https://arxiv.org/html/2602.23320v1#A2.SS2).

![Refer to caption](https://arxiv.org/html/2602.23320v1/x3.png)

(a)

An output example on programming task.

![Refer to caption](https://arxiv.org/html/2602.23320v1/x4.png)

(b)

An output example on multi-hop QA task.

Figure 3
: 

Illustration of the output produced by 
![Refer to caption](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em
.

### 
3.2 
Incorporating  

P

aram 

M

em
 into Reflexion-based Framework

Once the parametric module ℳg\mathcal{M}_{g} is obtained, we incorporate it into the Reflexion-based framework. The integration is straightforward: at the kk-th iteration, when providing {r1,…,rk−1}\{r_{1},\ldots,r_{k-1}\} to the actor, we additionally sample a model-based output rkg∼pψ(⋅∣x)r_{k}^{g}\sim p_{\psi}(\cdot\mid x) from ℳg\mathcal{M}_{g} and concatenate it with the self-reflections:

|  | yk∼pθ(⋅∣x,r1:k−1,rkg),y_{k}\sim p_{\theta}(\cdot\mid x,r_{1:k-1},r_{k}^{g}), |  | (5) |
|---|---|---|---|

where rkgr_{k}^{g} denotes the global-level reflection for programming and math, and denotes decomposed semantic unit and sub-tasks for multi-hop QA. We refer to this framework as  

P

aram 

A

gent
. We further introduce 
ParamAgent-plus
, a more powerful variant that additionally retrieves reasoning trajectories {τ1,…,τk}\{\tau_{1},\ldots,\tau_{k}\} from a memory bank ℬ\mathcal{B} of previously solved tasks. To ensure a fair comparison, the retrieval mechanism follows DoT-bank (
lingam2025enhancing
). The actor then conditions on both parametric and cross-sample signals:

|  | yk∼pθ(⋅∣x,r1:k−1,rkg,τ1:j).y_{k}\sim p_{\theta}(\cdot\mid x,r_{1:k-1},r_{k}^{g},\tau_{1:j}). |  | (6) |
|---|---|---|---|

Algorithm 1

 Pseudocode for the proposed method

Dataset 𝒟\mathcal{D}, base LM pθp_{\theta}, episodic memory ℳ\mathcal{M}, parametric module ℳg\mathcal{M}_{g} parametrized by pψp_{\psi}, cross-sample memory bank ℬ\mathcal{B}, Failed task set ℱ\mathcal{F}, max iterations TmaxT_{\max}. 
\State
ℳ←∅\mathcal{M}\leftarrow\emptyset, ℬ←∅\mathcal{B}\leftarrow\emptyset, F←∅F\leftarrow\emptyset
\Statex

Phase 1:  

P

aram 

A

gent

\For
x∈𝒟x\in\mathcal{D}
\For
t=1t=1 to TmaxT_{\max}
\State
T←0.2T\leftarrow 0.2 if t=1t=1, else 1.01.0
\State
rtg∼pψ(⋅∣x;T)r_{t}^{g}\sim p_{\psi}(\cdot\mid x;T)
\Comment

Sample from ℳg\mathcal{M}_{g}

\State
r1:t−1←RetrieveReflections​(ℳ,x)r_{1:t-1}\leftarrow\textsc{RetrieveReflections}(\mathcal{M},x)
\State
yt∼pθ(⋅∣x,r1:t−1,rtg)y_{t}\sim p_{\theta}(\cdot\mid x,r_{1:t-1},r_{t}^{g})
\If
Evaluate​(yt,x)\textsc{Evaluate}(y_{t},x)
\State
ℬ←ℬ∪{(x,τ)}\mathcal{B}\leftarrow\mathcal{B}\cup\{(x,\tau)\}; 
break

\Comment
Store trajectory 
\Else

\State
rt←GenerateSelfReflection​(yt)r_{t}\leftarrow\textsc{GenerateSelfReflection}(y_{t})
\State
ℳ←ℳ∪{(x,rt)}\mathcal{M}\leftarrow\mathcal{M}\cup\{(x,r_{t})\}
\EndIf

\EndFor

\State

if
 not solved 
then
ℱ←ℱ∪{x}\mathcal{F}\leftarrow\mathcal{F}\cup\{x\}
\EndFor

\Statex

Phase 2: 
ParamAgent-plus

\Comment
Reattempt with cross-sample memory 
\For
x∈ℱx\in\mathcal{F}
\State
τ1:j←RetrieveSimilar​(ℬ,x,j)\tau_{1:j}\leftarrow\textsc{RetrieveSimilar}(\mathcal{B},x,j)
\Comment
Retrieve jj trajectories 
\State
Repeat Phase 1 with yt∼pθ(⋅∣x,r1:t−1,rt−1g,τ1:j)y_{t}\sim p_{\theta}(\cdot\mid x,r_{1:t-1},r_{t-1}^{g},\tau_{1:j})
\EndFor

\Require

The pseudocode is provided in Algorithm [1](https://arxiv.org/html/2602.23320v1#alg1). Similar to prior approaches (
yao2023retroformer
; 
lingam2025enhancing
),  

P

aram 

M

em
 does not directly interact with the environment during inference. Instead, by conditioning the actor on model-based feedback rkgr_{k}^{g}, the output distribution is shaped by parametric knowledge, which subsequently influences the generation of new self-reflections. This feedback loop enables  

P

aram 

M

em
 to indirectly participate in the dynamic interaction process.

## 
4 
Experiments

In this section, we detail our experimental setup and present results across programming, math reasoning, and multi-hop QA. We then conduct more in-depth empirical analyses of our proposed method. Specifically, we first validate the effectiveness of  

P

aram 

M

em
 by analyzing how it promotes reflective diversity in both static and dynamic settings. We then perform comprehensive ablation studies to examine several key properties: (1) whether  

P

aram 

A

gent
 can achieve self-improvement without relying on stronger external models, (2) whether smaller parametric modules can enhance agents built on stronger LLMs (weak-to-strong transfer), and (3) the sample efficiency of  

P

aram 

M

em
. More experimental results are included in Appendix [B](https://arxiv.org/html/2602.23320v1#A2), including experiments with 70B scale LLMs and cost analysis.

### 
4.1 
Setup

#### Datasets

We evaluate our framework across three domains. For programming, we use HumanEval (
chen2021evaluating
) and MBPP (
austin2021program
). We also use LiveCodeBench (
jain2025livecodebench
), a more challenging dataset for additional empirical evaluation. For math reasoning, we adopt the MATH dataset (
hendrycks2021measuring
), which covers competition-level problems of varying difficulty across seven subjects. For multi-hop QA, we use HotpotQA (
yang2018hotpotqa
) and 2WikiMultiHopQA (
ho2020constructing
), which require reasoning across multiple passages. Further details about each dataset, as well as how we perform dataset splits are provided in Appendix [B](https://arxiv.org/html/2602.23320v1#A2).

#### Evaluation

For programming tasks, we report Pass@1. During generation, only visible or synthetic test cases are used, while final evaluation is conducted on hidden test cases; a score of 1 is assigned if all tests pass and 0 otherwise. For math reasoning and multi-hop QA, we report 0–11 accuracy on subsampled testsets.

#### Baselines

We compare against: (1) 
Base
, the underlying LLM agent without reflection; (2) 
Reflexion
(
shinn2023reflexion
), which uses episodic self-reflections; (3) 
Retroformer
(
yao2023retroformer
), which also employs a parametric reflective module but trains it via policy gradient optimization to improve reflection accuracy rather than diversity, which serves as a direct comparison with  

P

aram 

A

gent
; (4) 
DoT
(
lingam2025enhancing
), which augments Reflexion with prompt-level diversity; (5) 
DoT-bank
(
lingam2025enhancing
), which further incorporates a memory bank to enrich the reflective feedbacks.

To ensure a comprehensive evaluation, we employ three backbone LLMs with varying levels of reasoning capability: (1) 
Llama-3.1-8B
(
dubey2024llama
), a strong open-source reasoning model; (2) 
Mistral-7B-v0.2
(
jiang2023mistral7b
), a competitive medium-sized model with efficient inference; and (3) 
Qwen2-1.5B-instruct
(
bai2023qwen
). This selection of backbones allows us to examine how our approach performs across different model sizes and reasoning strengths. We also provide results with stronger base LLMs in Appendix [B.3](https://arxiv.org/html/2602.23320v1#A2.SS3), showing that even with a smaller backbone as the parametric module ℳg\mathcal{M}_{g}, it can still provide noticable gains to agents built on 70B-scale LLMs.

#### Implementation details

Across all experiments, we fix the number of iterations to 5 for both baseline methods and our proposed approach. For  

P

aram 

A

gent
 and its variants, we set the sampling temperature to T=0.2T=0.2 during the first iteration, and T=1.0T=1.0 in the subsequent iterations to promote diversity. Unless otherwise specified, the parametric model is instantiated using Llama3.1-8B-Instruct, and is finetuned via LoRA. For LoRA finetuning, we use a rank of r=128r=128, scaling factor α=32\alpha=32, a learning rate of 2​e−52e-5, and train for 3 epochs.

Table 1
: 

Performance on HumanEval/MBPP, MATH, HotpotQA, and 2WikiMultiHopQA. 
Bold
 denotes the best result, and 
underline
 marks the second best. ↑\uparrow and ↓\downarrow indicate the absolute improvement or decrease relative to the Base method. For clarity, the prompt token usage of the Base method is normalized to 1. *Score* is Pass@1 for HumanEval/MBPP and Accuracy for MATH/QA. 

| Domain | Dataset | Method | Llama-3.1-8B | Mistral-7B-v0.2 | Qwen2-1.5B |  |  |  |
|---|---|---|---|---|---|---|---|---|
|  |  |  | Score | #Prompt Tokens | Score | #Prompt Tokens | Score | #Prompt Tokens |
| Code | HumanEval | Base | 59.15 | 1.001.00 | 32.93 | 1.001.00 | 41.46 | 1.001.00 |
| Reflexion | 76.22 ↑\uparrow 17.07 | 9.299.29 | 51.22 ↑\uparrow 18.29 | 28.5428.54 | 49.39 ↑\uparrow 7.93 | 18.3018.30 |  |  |
| Retroformer | 67.68 ↑\uparrow 8.53 | 11.2811.28 | 42.94 ↑\uparrow 10.01 | 38.3738.37 | 46.34 ↑\uparrow 4.88 | 12.7712.77 |  |  |
| DoT | 73.17 ↑\uparrow 14.02 | 17.4517.45 | 46.95 ↑\uparrow 14.02 | 43.0643.06 | 56.56 ↑\uparrow 15.10 | 15.2615.26 |  |  |
| DoT-bank | 79.56 ↑\uparrow 20.41 | 24.7124.71 | 54.26 ↑\uparrow 21.33 | 61.6261.62 | 60.10 ↑\uparrow 18.64 | 31.2831.28 |  |  |
| ParamAgent | 82.93 ↑\uparrow 23.78 | 19.1819.18 | 67.07 ↑\uparrow 34.14 | 70.3870.38 | 66.46 ↑\uparrow 25.00 | 33.4533.45 |  |  |
| MBPP | Base | 47.61 | 1.001.00 | 24.94 | 1.001.00 | 42.06 | 1.001.00 |  |
| Reflexion | 58.69 ↑\uparrow 11.08 | 37.1837.18 | 28.46 ↑\uparrow 3.52 | 14.0214.02 | 47.61 ↑\uparrow 5.55 | 26.9526.95 |  |  |
| Retroformer | 42.82 ↓\downarrow 4.79 | 8.648.64 | 21.66 ↓\downarrow 3.28 | 12.0812.08 | 31.49 ↓\downarrow 10.57 | 23.7023.70 |  |  |
| DoT | 61.21 ↑\uparrow 13.60 | 51.8351.83 | 19.79 ↓\downarrow 5.15 | 25.4525.45 | 47.37 ↑\uparrow 5.31 | 21.4821.48 |  |  |
| DoT-bank | 64.82 ↑\uparrow 17.21 | 69.4169.41 | 24.68 ↓\downarrow 0.26 | 60.0960.09 | 53.38 ↑\uparrow 11.32 | 60.9560.95 |  |  |
| ParamAgent | 67.00 ↑\uparrow 19.39 | 86.3986.39 | 51.64 ↑\uparrow 26.70 | 36.8836.88 | 54.90 ↑\uparrow 12.84 | 66.8666.86 |  |  |
| Math | MATH | Base | 48.20 | 1.001.00 | 12.23 | 1.001.00 | 8.99 | 1.001.00 |
| Reflexion | 58.99 ↑\uparrow 10.79 | 23.3323.33 | 19.78 ↑\uparrow 7.55 | 27.6727.67 | 21.94 ↑\uparrow 12.95 | 18.3918.39 |  |  |
| Retroformer | 63.67 ↑\uparrow 15.47 | 17.0917.09 | 43.53 ↑\uparrow 31.30 | 35.6735.67 | 33.09 ↑\uparrow 24.10 | 30.1230.12 |  |  |
| DoT | 64.38 ↑\uparrow 16.18 | 34.1734.17 | 23.25 ↑\uparrow 11.02 | 40.5140.51 | 22.30 ↑\uparrow 13.31 | 31.9931.99 |  |  |
| DoT-bank | 73.02 ↑\uparrow 24.82 | 83.9283.92 | 35.61 ↑\uparrow 23.38 | 122.92122.92 | 24.37 ↑\uparrow 15.38 | 76.7176.71 |  |  |
| ParamAgent | 67.99 ↑\uparrow 19.79 | 57.0157.01 | 28.06 ↑\uparrow 15.83 | 92.9192.91 | 22.30 ↑\uparrow 13.31 | 70.0770.07 |  |  |
| ParamAgent-plus | 75.45 ↑\uparrow 27.25 | 111.32111.32 | 38.96 ↑\uparrow 26.73 | 196.18196.18 | 25.97 ↑\uparrow 16.98 | 144.25144.25 |  |  |
| QA | HotpotQA | Base | 57.67 | 1.001.00 | 45.00 | 1.001.00 | 43.66 | 1.001.00 |
| Reflexion | 71.33 ↑\uparrow 13.66 | 4.134.13 | 62.33 ↑\uparrow 17.33 | 4.674.67 | 50.03 ↑\uparrow 6.37 | 6.226.22 |  |  |
| Retroformer | 73.00 ↑\uparrow 15.33 | 2.772.77 | 67.33 ↑\uparrow 22.33 | 4.594.59 | 47.70 ↑\uparrow 4.04 | 9.179.17 |  |  |
| DoT | 66.67 ↑\uparrow 9.00 | 7.107.10 | 58.33 ↑\uparrow 13.33 | 8.978.97 | 49.32 ↑\uparrow 5.66 | 58.0558.05 |  |  |
| DoT-bank | 72.00 ↑\uparrow 14.33 | 13.2813.28 | 66.33 ↑\uparrow 21.33 | 19.3519.35 | 52.02 ↑\uparrow 8.36 | 109.54109.54 |  |  |
| ParamAgent | 78.33 ↑\uparrow 20.66 | 22.2522.25 | 69.67 ↑\uparrow 24.67 | 34.9934.99 | 64.66 ↑\uparrow 21.00 | 14.6914.69 |  |  |
| 2WikiMultiHopQA | Base | 40.33 | 1.001.00 | 21.00 | 1.001.00 | 40.33 | 1.001.00 |  |
| Reflexion | 78.67 ↑\uparrow 38.34 | 5.475.47 | 61.33 ↑\uparrow 40.33 | 5.865.86 | 51.00 ↑\uparrow 10.67 | 6.566.56 |  |  |
| Retroformer | 77.00 ↑\uparrow 36.67 | 5.905.90 | 71.00 ↑\uparrow 50.00 | 5.335.33 | 67.66 ↑\uparrow 27.33 | 3.683.68 |  |  |
| DoT | 66.67 ↑\uparrow 26.34 | 7.037.03 | 52.13 ↑\uparrow 31.13 | 6.406.40 | 47.83 ↑\uparrow 7.50 | 30.5530.55 |  |  |
| DoT-bank | 80.33 ↑\uparrow 40.00 | 12.4912.49 | 74.66 ↑\uparrow 53.66 | 8.108.10 | 50.49 ↑\uparrow 10.16 | 54.9254.92 |  |  |
| ParamAgent | 88.67 ↑\uparrow 48.34 | 10.4110.41 | 81.33 ↑\uparrow 60.33 | 14.4314.43 | 63.33 ↑\uparrow 23.00 | 17.3917.39 |  |  |

### 
4.2 
Experimental Results

In this section, we first present the main results across 3 domains (Observation 
①
). We then analyze how  

P

aram 

M

em
 promotes reflective diversity in both static and dynamic settings (Observations 
②
), followed by a case study explaining why increased reflective diversity leads to performance gains (Observation 
③
). We then conduct ablation studies examining our framework without relying on stronger external models to generate datasets (Observation 
④
), iterative self-teaching (Observation 
⑤
), weak-to-strong transfer where smaller parametric modules enhance stronger agents (Observation 
⑥
), and the advantage of sample efficiency (Observation 
⑦
).

Observation 
①
:

P

aram 

M

em
 consistently enhances Reflexion-based frameworks across all domains.

 As shown in Tables [1](https://arxiv.org/html/2602.23320v1#S4.T1), both  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
 achieve remarkable performance across the three domains. We note that  

P

aram 

A

gent
 differs from Reflexion and DoT solely through the incorporation of  

P

aram 

M

em
, while  

P

aram 

A

gent-plus
 extends DoT-bank by augmenting its episodic and cross-sample memory with our parametric module.

On programming benchmarks,  

P

aram 

A

gent
 achieves significant improvements over all baselines even without the cross-sample memory component. Similarly, on multi-hop QA,  

P

aram 

A

gent
 substantially outperforms most prior methods, highlighting the standalone effectiveness of  

P

aram 

M

em
. For mathematical reasoning, while  

P

aram 

A

gent
 improves upon Reflexion and DoT, we observe that cross-sample trajectories play a more critical role. This aligns with the intuition that mathematical problem-solving benefits from exposure to analogous problems and solution patterns, akin to how humans learn to solve math problems. Nevertheless,  

P

aram 

A

gent-plus
 still outperforms DoT-bank by incorporating  

P

aram 

M

em
, demonstrating the complementary value of model-based reflective memory. Notably, Retroformer excels on MATH, where reflection accuracy may matter more than diversity. However, it underperforms on programming and multi-hop QA despite also using parametric encoding. We attribute this to distribution shift, as the training data may not align well with test data, causing accuracy-focused optimization to overfit. In contrast,  

P

aram 

M

em
’s objective is diversity-driven, implying that diversity-focused parametric memory generalizes better across distributions.

Observation 
②
:

P

aram 

M

em
 induces an additional layer of reflective diversity beyond episodic and cross-sample memory.

 We hypothesize that the parametric module ℳg\mathcal{M}_{g} introduces an additional source of diversity through the training dynamics. To verify this, we conduct the following analysis on programming tasks. We fine-tune Llama-3.1-8B as the parametric module using synthetic datasets generated by either GPT-4o-mini or Llama-3.1-8B itself. For each task in HumanEval, we sample 10 reflections at temperature T=1.0T=1.0, embed the outputs, and compute the mean value of pairwise cosine distances Dm​e​a​nD_{mean}, and the distribution across all samples. As illustrated in Figure [4(a)](https://arxiv.org/html/2602.23320v1#S4.F4.sf1), the parametric module trained on GPT-4o-mini data yields the highest diversity. Notably, even when using the same LLM for both data generation and fine-tuning, the resulting diversity still exceeds that of the unfinetuned Llama-3.1-8B. This finding also explains why  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
 remain effective in self-improvement settings (Table [2](https://arxiv.org/html/2602.23320v1#S4.T2)).

![Refer to caption](https://arxiv.org/html/2602.23320v1/x5.png)

(a)

Pairwise cosine distance distribution.

![Refer to caption](https://arxiv.org/html/2602.23320v1/x6.png)

(b)

Clustering analysis.

![Refer to caption](https://arxiv.org/html/2602.23320v1/x7.png)

(c)

Silhouette score across KK.

Figure 4
: 

Reflection diversity induced by 
![Refer to caption](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em
. (a) Higher pairwise distance indicates more diverse outputs. (b) Higher optimal KK and silhouette scores confirm greater semantic variation. (c) Silhouette score as a function of cluster number KK.

The above analysis characterizes diversity in a static setting. We further examine whether this diversity persists when  

P

aram 

M

em
 is incorporated into the Reflexion-based framework and interacts with the environment via pθ(⋅∣x,r1:k−1,rkg)p_{\theta}(\cdot\mid x,r_{1:k-1},r_{k}^{g}). Specifically, we maintain the complete reflection history for each sample on HumanEval and embed all reflections using OpenAI text-embedding-3-small model (
openai2024new_embedding_models
). We then perform KK-means clustering (
lloyd1982least
) over all reflections and apply the elbow method (
tibshirani2001estimating
) to determine the optimal number of clusters K∗K^{*}. As shown in Figure [4(b)](https://arxiv.org/html/2602.23320v1#S4.F4.sf2),  

P

aram 

A

gent
 achieves K∗=39K^{*}=39, substantially larger than Reflexion, DoT, and DoT-bank, indicating that  

P

aram 

M

em
 introduces significantly richer and more varied reflective signals. Moreover, the silhouette scores of  

P

aram 

A

gent
 are consistently higher across all KK, confirming superior clustering quality and semantic coherence of the generated reflections, as illustrated in Figure [4(c)](https://arxiv.org/html/2602.23320v1#S4.F4.sf3). In conclusion, these analyses demonstrate that  

P

aram 

M

em
 introduces a complementary source of reflective diversity

, thereby enriching the feedback signals available to the agent throughout iterative refinement.

Observation 
③
:

Diverse reflections enlarge the hypothesis space for error diagnosis.
 To understand the reason behind diversity-driven gains, we conduct a case study on MBPP, focusing on instances where  

P

aram 

A

gent
 succeeds but Reflexion and DoT fail (Figure [8](https://arxiv.org/html/2602.23320v1#A2.F8) in Appendix [B.5](https://arxiv.org/html/2602.23320v1#A2.SS5)). We observe that self-reflections often fail to identify the core source of errors and mislead the agent away from correct implementations. While  

P

aram 

A

gent
 is not immune to such failure modes, the increased diversity of reflective feedback provides the agent with a broader set of diagnostic hypotheses, thereby increasing the likelihood of encountering the correct cue for successful refinement. This also explains why  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
 occasionally incur higher token consumption in certain datasets.

Table 2
: 

Self-improvement results using Llama-3.1-8B as both the agent and data generator 
Bold
 denotes the best, 
underline
 the second best. 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/llama.png)
 denotes Llama-3.1-8B-Instruct as the data generator.

| Method | HumanEval | HotpotQA |
|---|---|---|
| Base | 59.15 | 57.67 |
| Reflexion | 76.22 ↑\uparrow 17.07 | 71.33 ↑\uparrow 13.66 |
| DoT | 73.17 ↑\uparrow 14.02 | 66.67 ↑\uparrow 9.00 |
| DoT-bank | 79.56 ↑\uparrow 20.41 | 72.00 ↑\uparrow 14.33 |
| P

aram

A
gent | 78.05 ↑\uparrow 18.90 | 76.33 ↑\uparrow 18.66 |
| P

aram

A
gent-plus | 86.59 ↑\uparrow 27.44 | 83.33 ↑\uparrow 25.66 |

Observation  ④:

P

aram 

M

em
 supports agent self-improvement without dependence on stronger external models.

 Recent work on self-improving agents seeks to enhance reasoning capabilities without relying on external stronger models (
wei2022chain
; 
zelikman2022star
; 
shinn2023reflexion
; 
zeng2024b
; 
snell2025scaling
; 
muennighoff2025s1
).  

P

aram 

A

gent
 exhibits a similar property: even when  

P

aram 

M

em
 is fine-tuned on synthetic data generated by the base model itself, it still yields consistent gains. Specifically, we use Llama-3.1-8B to generate synthetic data and fine-tune the same base model as the parametric memory module. As shown in Table [2](https://arxiv.org/html/2602.23320v1#S4.T2),  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
 improve significantly over DoT and DoT-bank, respectively. This demonstrates that  

P

aram 

M

em
 can enhance reasoning through diversified reflections without relying on stronger external models.

![Refer to caption](https://arxiv.org/html/2602.23320v1/x8.png)

Figure 5
: 

The performance of  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
 in HumanEval dataset, with 3 iterative process.

Observation 
⑤
:

Iterative self-teaching further enhances  

P

aram 

A

gent
.
 We investigate iterative self-teaching on HumanEval: starting from Llama-3.1-8B-Instruct, we fine-tune  

P

aram 

M

em
 on 1,000 randomly sampled examples. After training, we use the resulting model to generate new targets for the same inputs, yielding an updated dataset 𝒟′={(xi,r~ig)}i=11000\mathcal{D}^{\prime}=\{(x_{i},\tilde{r}_{i}^{g})\}_{i=1}^{1000} where r~ig∼pϕ(⋅∣xi)\tilde{r}_{i}^{g}\sim p_{\phi}(\cdot\mid x_{i}) are freshly sampled reflections. We then fine-tune on 𝒟′\mathcal{D}^{\prime} and repeat this process for 3 iterations. As shown in Figure [5](https://arxiv.org/html/2602.23320v1#S4.F5),  

P

aram 

A

gent
 improves steadily across iterations, suggesting that  

P

aram 

M

em
 progressively produces more diverse reflections. In contrast,  

P

aram 

A

gent-plus
 shows only marginal gains, we hypothesize that with cross-sample trajectories, the model already approach the diversity ceiling.

This resembles STaR (
zelikman2022star
) and recent variants (
hosseini2024v
; 
zeng2024b
), but with a key difference: those methods filter for correct samples at each iteration, implicitly performing reward-driven bootstrapping. Our approach requires no filtering, since  

P

aram 

M

em
 targets diversity rather than correctness.

Table 3
: 

Weak-to-strong transfer on LiveCodeBench, HumanEval, and HotpotQA with 
Qwen3-Next-80B-A3B-Instruct
 as the base LLM in the agent. 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/llama.png)
 and 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/qwen.png)
 denote  

P

aram 

M

em
 instantiated by Llama-3.1-8B-Instruct and Qwen3-Next-30B-A3B-Instruct.

| Method | LiveCodeBench | HumanEval | HotpotQA |
|---|---|---|---|
| Simple | 52.00 | 90.24 | 71.33 |
| Reflexion | 62.00 ↑\uparrow 10.00 | 96.34 ↑\uparrow 6.10 | 82.33 ↑\uparrow 11.00 |
| DoT | 60.67 ↑\uparrow 8.67 | 96.34 ↑\uparrow 6.10 | 79.67 ↑\uparrow 8.34 |
| DoT-bank | 62.00 ↑\uparrow 10.00 | 96.95 ↑\uparrow 6.71 | 83.33 ↑\uparrow 12.00 |
| P

aram

A
gent | 61.33 ↑\uparrow 9.33 | 97.56 ↑\uparrow 7.32 | 79.67 ↑\uparrow 8.34 |
| P

aram

A
gent-plus | 63.33 ↑\uparrow 11.33 | 98.17 ↑\uparrow 7.93 | 85.00 ↑\uparrow 13.67 |
| P

aram

A
gent | 64.67 ↑\uparrow 12.67 | - | 76.33 ↑\uparrow 5.00 |
| P

aram

A
gent-plus | 68.00 ↑\uparrow 16.00 | - | 83.67 ↑\uparrow 12.34 |

Observation 
⑥
:

P

aram 

A

gent
 enables weak-to-strong reasoning augmentation.

 The previous observation demonstrates that  

P

aram 

M

em
 supports self-improvement. Here we examine whether a weaker model serving as  

P

aram 

M

em
 can enhance a stronger agent. We evaluate on LiveCodeBench and HotpotQA using Qwen3-Next-80B-A3B-Instruct (
qwen3technicalreport
) as the base model in the agent, with  

P

aram 

M

em
 instantiated by either Llama-3.1-8B or Qwen3-Next-30B-A3B-Instruct (
qwen3technicalreport
). As shown in Table [3](https://arxiv.org/html/2602.23320v1#S4.T3), both configurations consistently outperform all baselines. For coding, the Qwen3-30B-based  

P

aram 

M

em
 proves more effective, improving over the strongest baseline by 9.7%9.7\%. Interestingly, for multi-hop QA, the smaller Llama-3.1-8B-based  

P

aram 

M

em
 outperforms its Qwen3-30B counterpart, achieving a 2.0%2.0\% relative improvement over the best baseline method. These results confirm that  

P

aram 

M

em
 enables weak-to-strong transfer: even smaller models can provide diverse reflective signals that benefit stronger agents.

Table 4
: 

Sample efficiency of 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em
. Models are trained on 500 diverse samples via KK-means clustering. 
Bold
 denotes the best result, 
underline
 the second best.

| Method | HumanEval | MBPP |
|---|---|---|
| DoT | 73.17 | 61.21 |
| DoT-bank | 79.56 | 64.82 |
| P

aram

A
gent ( 8000 samples) | 82.93 | 67.00 |
| P

aram

A
gent (500 samples) | 81.71 | 64.99 |
| P

aram

A
gent-plus (500 samples) | 86.59 | 65.49 |

Observation 
⑦
:

P

aram 

M

em
 is sample-efficient.

 We examine how many samples are needed for an effective  

P

aram 

M

em
. We apply KK-means clustering to the GPT-4o-mini synthetic data and sample 500 diverse examples across clusters for fine-tuning. As shown in Table [4](https://arxiv.org/html/2602.23320v1#S4.T4),  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
 retain strong performance on HumanEval and MBPP even with this reduced training set; Notably,  

P

aram 

A

gent-plus
 with only 500 training samples outperforms  

P

aram 

A

gent
 trained on the dataset of over 8000 samples, demonstrating the effective synergy of episodic, cross-sample, and parametric memory.

## 
5 
Related Work

#### LLM Reasoning and Diversity

LLMs perform multi-step reasoning through techniques like CoT prompting (
wei2022chain
), Self-Consistency (
wang2022self
), and ReAct (
yao2023react
). Self-Consistency improves CoT by sampling multiple reasoning paths and aggregating them via majority voting, demonstrating that diversity in reasoning traces leads to more robust outputs. Iterative self-feedback methods (
madaan2023self
; 
shinn2023reflexion
) and test-time compute scaling (
snell2025scaling
; 
openai2024openaio1card
; 
Guo_2025
) further improve reasoning by allocating additional computation during inference. To enhance diversity, structured exploration methods like Tree of Thoughts (
yao2023tree
) and Graph of Thoughts (
besta2024graph
) enable deliberate search over reasoning states. These methods highlight that exploring diverse solution paths is crucial for solving complex problems. Most relevant to our work, DoT (
lingam2025enhancing
) addresses repetitive self-reflections via prompt-level interventions and cross-sample memory. We extend this line of research by proposing  

P

aram 

M

em
, which provides an orthogonal source of reflective diversity beyond episodic and cross-sample memory through parametric encoding.

#### Improving Reflection in LLM Agents

Recent work has explored diversity-driven approaches to improve reflection. DoT (
lingam2025enhancing
) addresses repetitive self-reflections through prompt-level interventions and cross-sample memory retrieval. Beyond diversity-driven methods, other approaches improve reflection through different mechanisms. Retroformer (
yao2023retroformer
) uses policy gradient optimization to learn a retrospective model that refines prompts based on environment feedback, enabling the agent to improve its reflection accuracy over time. Self-RAG (
asai2024self
) trains special reflection tokens directly into the generative model, enabling self-critique of generation and retrieval decisions during inference. ExpeL (
zhao2024expel
) extracts generalizable insights from successful trajectories and stores them for cross-task transfer. These approaches primarily focus on improving reflection quality or accuracy through various mechanisms. While  

P

aram 

M

em
 also adopts parametric encoding of reflections like Retroformer and Self-RAG, it differs in both purpose and design: rather than optimizing reflection accuracy or self-critique capability,  

P

aram 

M

em
 aims to enhance reflective diversity by unifying episodic memory, cross-sample memory, and parametric memory within a single framework.

#### Self-improving Language Agents

Self-improvement in language models enables agents to enhance their reasoning capabilities through iterative learning from self-generated data. STaR introduced bootstrapped reasoning, where models generate rationales and fine-tune on those leading to correct answers (
zelikman2022star
). This paradigm was extended by ReST (
gulcehre2023reinforced
) and ReST-EM (
singh2023beyond
), which demonstrated that self-generated training data can surpass human-annotated data when verifiable feedback is available. More recent work has eliminated the need for external reward models entirely: Self-Rewarding Language Models (
yuan2024self
) use LLM-as-a-Judge (
zheng2023judging
) to generate preference data, while Meta-Rewarding (
wu2025meta
) adds meta-judgment capabilities. SPIN (
chen2024self
) demonstrates that self-play fine-tuning can iteratively convert a weak language model into a stronger one by having the model compete against earlier versions of itself, without any additional human-annotated data. In contrast to these approaches,  

P

aram 

M

em
 enables self-improvement by progressively diversifying reflective feedback, thereby strengthening reflection-based frameworks. Notably,  

P

aram 

M

em
 does not require any external reward signal or human annotation; it leverages the base model’s own generated reflections as training data, making the self-improvement process both scalable and practical.

## 
6 
Conclusions and Limitations

We propose 
![[Uncaptioned image]](https://arxiv.org/html/2602.23320v1/figures/param-mem.png)

P

aram 

M

em
, a parametric memory module that internalizes reflections into model parameters, inducing an additional layer of diversity beyond episodic and cross-sample memory. Building upon  

P

aram 

M

em
, we introduce  

P

aram 

A

gent
 and  

P

aram 

A

gent-plus
, which augment reflection-based reasoning frameworks with  

P

aram 

M

em
. Across 3 domains, our methods deliver substantial performance gains over state-of-the-art baselines, highlighting the potential of parametric memory as a lightweight plug-in module for building language agents. Despite these advantages, our approach has limitations. A notable one is the increased token consumption in certain scenarios, which is an inherent cost of the additional reflective diversity. In future work, we aim to address this trade-off by exploring more token-efficient integration strategies.

## Impact Statement

Reflection-based reasoning is widely adopted in language agent systems to improve task performance across diverse domains. This work studies a fundamental limitation of self-reflection: the lack of diversity in generated reflections, and proposes a novel approach to address it. Our method has a positive impact on advancing the understanding and capability of language agents. We do not foresee any potential negative societal impact arising from this work.

## References

Appendix

## 
Appendix A 
More Related Work

#### Memory Systems for Language Agents.

Memory architectures have been extensively studied to enhance agent capabilities. Generative Agents (
park2023generative
) introduced the memory stream with retrieval based on recency, importance, and relevance. MemGPT (
packer2023memgpt
) applies OS-inspired virtual memory management, while MemoryBank (
zhong2024memorybank
) incorporates Ebbinghaus forgetting curves for human-like memory decay. For cross-sample learning, ExpeL (
zhao2024expel
) maintains experience pools and abstracted insight stores. Notably, nearly all existing memory systems are retrieval-based, relying on embedding similarity to access stored experiences. While retrieval-based approaches like DoT-bank (
lingam2025enhancing
) have shown promise in diversifying reflections through cross-sample trajectories, they suffer from limited capacity for capturing compositional patterns (
nguyen2023generative
) and embedding collapse into low-rank subspaces (
guo2023embedding
).

#### Parametric Approaches to Learning from Experience.

A growing line of work explores encoding experiences and reflection capabilities directly into model parameters. Retroformer (
yao2023retroformer
) trains a dedicated retrospective model via policy gradient reinforcement learning to generate improved verbal feedback, demonstrating that learned reflection can outperform prompt-based approaches; however, it requires expensive online RL with environment interaction. Self-RAG (
asai2024self
) trains LLMs to generate special reflection tokens that enable adaptive retrieval decisions and self-critique of generation quality, representing a hybrid between prompting and parametric learning, though it focuses primarily on factual verification rather than reasoning diversity. LEMA (
an2023learning
) fine-tunes LLMs on mistake-correction pairs generated by stronger models, achieving strong results on mathematical reasoning by parametrically encoding error patterns. SCoRe (
kumar2024training
) trains models for intrinsic self-correction via multi-turn reinforcement learning, demonstrating significant improvements without external feedback but at considerable computational cost. MemoryLLM (
wang2024memoryllm
) integrates a self-updatable memory pool within the LLM’s latent space, enabling parametric storage without full fine-tuning. These works collectively suggest that parametric learning can be more effective than retrieval for capturing complex patterns, though often at significant computational cost or with narrow task focus. Our work introduces  

P

aram 

M

em
, a lightweight parametric memory module that specifically targets reflective diversity, encoding cross-sample reflection patterns into parameters via efficient supervised fine-tuning to enable diverse reflection generation, which supports reflection-based framework to unifies various forms of memories.

## 
Appendix B 
More Experimental Details Results

### 
B.1 
Dataset Statistics

#### Programming.

For programming tasks, we evaluate on HumanEval (
chen2021evaluating
) and MBPP (
austin2021program
). HumanEval consists of 164 hand-written Python programming problems, each accompanied by hidden unit tests and a small number of visible test cases. We additionally consider MBPP, which provides 974 crowd-sourced Python problems; following prior work, we use the 397 problems from the filtered evaluation split.

#### Math.

For mathematical reasoning, we adopt the MATH dataset (
hendrycks2021measuring
), which contains competition-style math problems spanning seven subjects including Algebra, Geometry, Number Theory, Counting and Probability, and Precalculus. We randomly sample a balanced subset across categories for evaluation.

#### Multi-hop QA.

For multi-hop question answering, we use HotpotQA (
yang2018hotpotqa
) and 2WikiMultiHopQA (
ho2020constructing
). In HotpotQA, we stratify by difficulty level and randomly sample 100 examples from each category (easy, medium, hard), yielding a total of 300 evaluation samples. For 2WikiMultiHopQA, we stratify by question type and randomly sample 75 examples from each of four categories (bridge comparison, comparison, compositional, inference), again yielding 300 samples in total. These stratified subsets ensure balanced evaluation across different reasoning styles.

Table 5
: 

Datasets used for Programming, Math, and Multi-hop QA tasks.

| Task Type | Dataset Name | Size | Metric |
|---|---|---|---|
| Programming | HumanEval | 164 problems, �

...(内容已截断)
