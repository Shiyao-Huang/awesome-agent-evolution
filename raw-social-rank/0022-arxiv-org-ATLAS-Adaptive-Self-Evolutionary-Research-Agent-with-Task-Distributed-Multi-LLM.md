# ATLAS: Adaptive Self-Evolutionary Research Agent with Task-Distributed Multi-LLM Supporters

- URL: https://arxiv.org/html/2602.02709v2
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "agent evolution" "LLM"

## Raw Content

## ATLAS: Adaptive Self-Evolutionary Research Agent with Task-Distributed Multi-LLM Supporters

**Source**: https://arxiv.org/html/2602.02709v2

---

# ATLAS: Adaptive Self-Evolutionary Research Agent with Task-Distributed Multi-LLM Supporters

Ujin Jeon 

Jiyong Kwon 

Madison Ann Sullivan 

Caleb Eunho Lee 

Guang Lin 

###### Abstract

Recent multi-LLM agent systems have shown promising capabilities for prompt optimization and automated problem solving, but prior approaches rely on frozen fine-tuned agents or a single fine-tuning pipeline. We propose an ATLAS (Adaptive Task-distributed Learning for Agentic Self-evolution) model in which multiple supporter agents collaboratively train and refine a self-evolving agent toward a domain-specific research agent. Supporter agents specialize in complementary roles, including exploration support, fine-tuning strategy, and adaptive reference-policy inspection for the proposed Evolving Direct Preference Optimization (EvoDPO). Within this framework, we introduce a diverse set of challenging problem instances and demonstrate that our method achieves substantial performance improvements over existing approaches across long horizons.

Machine Learning, ICML 

## 
1 
Introduction

Fine-tuned large language model (LLM) agents are broadly used as components in agentic systems for complex problem solving, scientific computing, and code-generation workflows. Recent frameworks show that collections of specialized agents, combined with experience banks, routing, or collaborative coordination, improve task performance and reliability by optimizing search, planning, decision-making, strategies, or data generation (Liu
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib1); Jiang and Karniadakis, [2025](https://arxiv.org/html/2602.02709v2#bib.bib3); Wu
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib8); He
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib9); Chen
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib11)). In parallel, multi-agent infrastructure and benchmarking efforts have made it easier to orchestrate such systems and study their behaviors at scale (Chen
 et al.
, [2023](https://arxiv.org/html/2602.02709v2#bib.bib12); Wu
 et al.
, [2023](https://arxiv.org/html/2602.02709v2#bib.bib13); Chen
 et al.
, [2024](https://arxiv.org/html/2602.02709v2#bib.bib20); Huang
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib25); Becker
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib15)).

Despite these advances, many existing approaches predominantly treat LLM agents as frozen optimizers and focus on improving optimization efficiency rather than explicitly studying how to develop an LLM agent through iterative model updates under realistic non-stationary and long-horizon training. To bridge this gap, our work introduces a framework for robust self-evolution via controlled reference management.

In this work, we propose ATLAS (Adaptive Task-distributed Learning for Agentic Self-evolution), a framework targeting specialized research agent formation via systematic model development. Rather than relying on a single static agent, we fine-tune a set of supporter LLM agents that collectively cultivate and refine a domain-specific research agent. The supporter agents are assigned complementary roles that support the learning dynamics: (i) exploration support to suggest diverse exploration strategies (ii) fine-tuning supervision to stabilize preference-based updates and prevent excessive deviation, and (iii) reference-policy inspection to decide when and how to renew the reference policy for well-aligned adaptation. By explicitly separating these tasks, the training loop prioritizes progressive agent improvement rather than merely search or planning enhancements, and it remains compatible with scalable multi-agent execution (Xie
 et al.
, [2024](https://arxiv.org/html/2602.02709v2#bib.bib21)).

Our learning mechanism leverages preference optimization as a practical alternative to Reinforcement Learning from Human Feedback (RLHF) pipelines. Direct Preference Optimization (DPO) enables preference learning without an explicit reward model (Rafailov
 et al.
, [2024](https://arxiv.org/html/2602.02709v2#bib.bib4)), and recent work extends preference learning beyond simple binary comparison and introduces progressive schemes to handle distribution shift (Liao
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib32); Yang
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib31)). Our work aligns with evolutionary or multi-agent fine-tuning approaches that iteratively improve a developing agent using critique or debate signals (Surina
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib2); Zhou
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib10)). However, a key limitation in many iterative preference-based pipelines is fixed reference policies, which leads to misaligned references, overly conservative updates, or stagnation.

To address this, we introduce Evolving DPO (EvoDPO), a preference-optimization loop with telemetry-driven fine-tuning control and adaptive reference management. At each fine-tuning phase, a strategist agent tunes DPO hyperparameters based on training diagnostics. In parallel, EvoDPO updates its policy using the DPO algorithm, while modeling the reference policy as a phase-indexed variable. Specifically, the self-evolving agent proposes a Kullback-Leibler (KL) regularized reference policy to be used in the next phase. Then, a policy-inspector agent applies a KL trust-region gate to decide whether to promote the proposed policy as the next reference or to keep the existing one. This integration of adaptive preference optimization and task-distributed agents prevents stagnation from stale references while avoiding instability from overly aggressive reference adaptation, enabling robust long-horizon self-evolution. The resulting mechanism is complementary to recent multi-agent preference-alignment approaches (Lyu
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib24)).

To rigorously evaluate our core algorithm, EvoDPO, we conduct a comparative analysis against a fixed-reference DPO baseline within a theoretical framework. Specifically, we formulate a non-stationary contextual bandit problem and analyze the dynamic regret to formally characterize and demonstrate the performance advantages of our algorithm.

In the numerical results section, we compare our proposed methods against EvoTune, a single-agent evolution baseline that performs isolated evolutionary exploration and fixed-reference fine-tuning (Surina
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib2)). We evaluate our framework on two complementary settings. First, we consider contextual multi-armed bandits under non-stationary environments (Wu
 et al.
, [2018](https://arxiv.org/html/2602.02709v2#bib.bib5)), providing a controlled setting for adaptive policy evolution under the drifting model parameter and connecting to recent LLM-assisted bandit initialization ideas (Alamdari
 et al.
, [2024](https://arxiv.org/html/2602.02709v2#bib.bib38); Toscano
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib41)). Second, to demonstrate applicability to scientific machine learning (SciML), we address the 1D Burgers’ equation using physics-informed neural networks (PINNs). Instead of relying on fixed, hand-tuned loss weights, ATLAS adaptively reweights PINN loss terms, effectively designing the training objective during optimization. This is particularly relevant in challenging regimes, such as those exhibiting near finite-time blow-up behavior (Kumar and Mukherjee, [2024](https://arxiv.org/html/2602.02709v2#bib.bib40)). Overall, these evaluations indicate that our framework can sustain iterative improvement in both decision-making and SciML settings.

In this work, our contributions are as follows:

(i) Task-distributed multi-LLM agents structure for self-evolving research agent formation

(ii) Adaptive reference management mechanism for the EvoDPO algorithm

(iii) Numerical results showing optimal problem solving under long-horizon self-improvement

## 
2 
Proposed Methods

### 
2.1 
ATLAS : Adaptive Task-distributed Learning for Agentic Self-evolution

ATLAS is the end-to-end self-evolution framework comprising (i) a task-distributed multi-LLM supporter layer, (ii) a preference data construction procedure, and (iii) an adaptive fine-tuning loop for a developing research agent. Figure [1](https://arxiv.org/html/2602.02709v2#S2.F1) illustrates the overall architecture of our framework and the specific workflow of each separated agent.

##### Self-evolving research agent.

Before each fine-tuning stage, the research agent performs a six-island exploration procedure in parallel to generate a diverse set of candidates (Surina
 et al.
, [2025](https://arxiv.org/html/2602.02709v2#bib.bib2)). Each island maintains an independent candidate population and an update rule that mitigates mode collapse and encourages specialization across islands. For each explored candidate, the agent stores the task score and auxiliary metadata in an island-specific buffer. To preserve diversity, the agent also maintains a clustering over buffered candidates and tracks cluster coverage during selection. In particular, the agent monitors the number of clusters represented both in the buffer and within the count-based top-ss candidates, and the agent prioritizes candidates that preserve diverse coverage rather than concentrating on a single mode. At each exploration round, each island ranks candidates by score and uses the top-ss to form preference pairs. This procedure biases exploration toward high-scoring regions while preserving diversity via the clustering signal.

Exploration is implemented through a producer-consumer architecture. The producer assigns prompts to each island and the consumers evaluate candidates to produce task scores and metadata. The system also selects the inference model used by each island, enabling consistent generation behavior within an island while allowing diversity across islands.

For preference learning, the agent partitions evaluated candidates into passed and failed sets according to the task evaluation. It then selects count-based top-ss passed candidates to form preferred and less-preferred pairs (y+,y−)(y^{+},y^{-}), and attaches auxiliary metadata mm for filtering and analysis. This process yields a specific preference dataset DkD_{k}

|  | Dk={(xi,yi+,yi−,mi)}i=1Nk,D_{k}=\{(x_{i},y_{i}^{+},y_{i}^{-},m_{i})\}_{i=1}^{N_{k}}, |  |
|---|---|---|

where xx denotes the prompt and NkN_{k} is the number of preference pairs collected in phase kk.

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1
: 
*ATLAS workflow.*
 ATLAS (Adaptive Task-distributed Learning for Agentic Self-evolution) alternates between (i) exploration with a supporter agent to generate diverse candidates and a preference dataset, and (ii) EvoDPO updates consisting of DPO fine-tuning (strategist-guided) and reference promotion via an inspector gate based on score improvement and a KL budget.

Let πθ,k\pi_{\theta,k} denote the current research agent policy and πr​e​f,k\pi_{ref,k} the reference policy used at fine-tuning phase kk. After constructing DkD_{k}, the research agent updates the policy by minimizing the DPO objective, and proposes a KL-regularized reference for the next phase k+1k+1.

##### Task-Distributed Multi-LLM Supporters.

In our multi-LLM agentic system, the framework consists of (i) a developing Research Agent that is iteratively updated, and (ii) a set of frozen, fine-tuned supporter LLM agents specialized for distinct roles. We initialize the developing research agent from a general pre-trained model, whereas the supporter agents start from instruction-tuned or domain-adapted checkpoints. This asymmetric initialization enables the supporter agents to provide strong guidance and critique, particularly in early training.

Table 1
: 

LLM agents and their assigned roles.

| Model | Role / Task allocation |
|---|---|
| gpt-oss-120B | Exploration Supporter |
| DeepSeek-R1-32B | Fine-Tuning Strategist |
| Llama4-latest | Policy Inspector |
| Llama-3.2-1B | Research Agent |

As shown in Table [1](https://arxiv.org/html/2602.02709v2#S2.T1), we employ three supporter agents: (i) an Exploration Supporter that proposes diverse candidate completions and provides exploration strategy suggestions, (ii) a Fine-Tuning Strategist that recommends fine-tuning hyperparameters (e.g., inverse-temperature β\beta, batch size, and learning rate) conditioned on training diagnostics, and (iii) a Policy Inspector that performs adaptive reference management by deciding whether to update the reference policy under a conservative safety constraint.

Algorithm 1

 ATLAS

1:

Initialize:
 island buffer {𝒫i}i=05\{\mathcal{P}_{i}\}_{i=0}^{5}, research agent policy πθ,0\pi_{\theta,0}, reference πr​e​f,0←πθ,0\pi_{ref,0}\leftarrow\pi_{\theta,0}

2:

Set:
 fine-tuning round k←0k\leftarrow 0

3:

for
t=1,2,…t=1,2,\dots
do

4:

for
 island i∈{0,…,5}i\in\{0,\dots,5\} in parallel 
do

5:

   Sample prompt xi,t∼𝒳x_{i,t}\sim\mathcal{X}

6:

   Candidate set 𝒞i,t={yi,t(j)}j=1J∼πθ,k(⋅∣xi,t)\mathcal{C}_{i,t}=\{y_{i,t}^{(j)}\}_{j=1}^{J}\sim\pi_{\theta,k}(\cdot\mid x_{i,t})

7:

for
j=1,…,Jj=1,\dots,J
do

8:

    Evaluate yi,t(j)y_{i,t}^{(j)} to obtain score si,t(j)s_{i,t}^{(j)} and metadata mi,t(j)m_{i,t}^{(j)}

9:

𝒫i←𝒫i∪{(xi,t,yi,t(j),si,t(j),mi,t(j))}\mathcal{P}_{i}\leftarrow\mathcal{P}_{i}\cup\{(x_{i,t},y_{i,t}^{(j)},s_{i,t}^{(j)},m_{i,t}^{(j)})\}

10:

end

for

11:

end

for

12:

if
 fine-tuning flag = 1 
and
k<Kk<K
then

13:

   Construct preference dataset DkD_{k} from ∪i𝒫i\cup_{i}\mathcal{P}_{i}

14:

Exploration Supporter:
 proposes strategies 

15:

Dk←Dk−1D_{k}\leftarrow D_{k-1}

16:

for
 selected prompts xx
do

17:

    Form a preference pair (y+,y−)(y^{+},y^{-}) for xx

18:

Dk←Dk∪{(x,y+,y−,m)}D_{k}\leftarrow D_{k}\cup\{(x,y^{+},y^{-},m)\}

19:

end

for

20:

Execute Algorithm [2](https://arxiv.org/html/2602.02709v2#alg2) (EvoDPO)

21:

Fine-Tuning Strategist:
 Set hyperparameters 

22:

Policy Inspector:
 Reference management 

23:

   Set k←k+1k\leftarrow k+1

24:

end

if

25:

end

for

At the fine-tuning phase kk, the developing research agent executes an adaptation loop. Given prompts xt∼𝒳x_{t}\sim\mathcal{X} and the current research agent policy πθ,k\pi_{\theta,k}, the Exploration Supporter is invoked during the fine-tuning phase to construct preference supervision.

For each prompt xtx_{t}, it proposes a diverse set of candidate completions, targeted perturbations, and exploration parameter-tuning strategies, conditioned on recent failures and task constraints.

In parallel, a Fine-Tuning Strategist consumes training telemetry from the current stage (e.g., preference-set size, score distributions, and recent accept/reject events) and returns a control signal for the next stage. These signals update hyperparameters such as β\beta, learning-rate schedules, pair-selection thresholds, and regularization strengths.

Finally, the Policy Inspector performs gated reference management. It evaluates the proposed KL-regularized policy πkk​l\pi^{kl}_{k} relative to current reference πr​e​f,k\pi_{ref,k} and decides whether to set the reference to πr​e​f,k+1←πkk​l\pi_{ref,k+1}\leftarrow\pi^{kl}_{k} or keep πr​e​f,k\pi_{ref,k}, subject to a conservative safety constraint that prevents aggressive drift. We detail these mechanisms in section 2.2.

This separation of responsibilities stabilizes exploration, adapts the optimization dynamics, and prevents uncontrolled reference drift over a long-horizon. Within ATLAS, our core algorithm, EvoDPO, performs a progressive and robust adaptation.

### 
2.2 
Evolving DPO algorithm

In this section, we introduce our core algorithm, Evolving DPO (EvoDPO), that performs preference optimization with KL-regularized reference improvement.

##### Direct Preference Optimization.

Direct preference optimization (DPO) (Rafailov
 et al.
, [2024](https://arxiv.org/html/2602.02709v2#bib.bib4)) is an efficient alternative to reward-model-based RLHF. It optimizes a policy from pairwise preferences and avoids explicit reward learning and value-function estimation. Given a preference dataset DD of (x,y+,y−)(x,y^{+},y^{-}), DPO minimizes

|  | LDPO\displaystyle L_{\mathrm{DPO}} | =−𝔼(x,y+,y−)∼D[logσ(βlogπθ​(y+∣x)πref​(y+∣x)\displaystyle=-\mathbb{E}_{(x,y^{+},y^{-})\sim D}\Biggl[\log\sigma\Biggl(\beta\log\frac{\pi_{\theta}(y^{+}\mid x)}{\pi_{\mathrm{ref}}(y^{+}\mid x)} |  | (1) |
|---|---|---|---|---|
|  |  | −βlogπθ​(y−∣x)πref​(y−∣x))]\displaystyle\qquad\qquad-\beta\log\frac{\pi_{\theta}(y^{-}\mid x)}{\pi_{\mathrm{ref}}(y^{-}\mid x)}\Biggr)\Biggr] |  |  |

where πref\pi_{\mathrm{ref}} is a fixed reference policy and β>0\beta>0 controls the strength of the preference margin.

A practical assumption behind ([1](https://arxiv.org/html/2602.02709v2#S2.E1)) is that the preference data distribution is reasonably aligned with the reference policy: many public preference datasets are collected from, or near, a supervised fine-tuning (SFT) policy, and optimization is most stable when the likelihood ratios in ([1](https://arxiv.org/html/2602.02709v2#S2.E1)) are not evaluated far off-distribution. In long-horizon phase-indexed loops, however, a fixed πref\pi_{\mathrm{ref}} can become outdated as the research agent improves its policy and dataset. In this case, the mismatch between DkD_{k} and πref\pi_{\mathrm{ref}} can yield slow adaptation and misalignment.

##### Evolving DPO.

To address reference-data mismatch in long-horizon self-improvement, we introduce Evolving DPO (EvoDPO), which replaces the fixed reference with a phase-indexed reference πref,k\pi_{\mathrm{ref},k} that updates across phases. At phase kk, the research agent is updated by optimizing a DPO objective anchored at the current reference:

|  | LEvoDPO\displaystyle L_{\mathrm{EvoDPO}} | =−𝔼(x,y+,y−)∼Dk[logσ(βlogπθ​(y+∣x)πref,k​(y+∣x)\displaystyle=-\mathbb{E}_{(x,y^{+},y^{-})\sim D_{k}}\Biggl[\log\sigma\Biggl(\beta\log\frac{\pi_{\theta}(y^{+}\mid x)}{\pi_{\mathrm{ref},k}(y^{+}\mid x)} |  | (2) |
|---|---|---|---|---|
|  |  | −βlogπθ​(y−∣x)πref,k​(y−∣x))]\displaystyle\qquad\qquad-\beta\log\frac{\pi_{\theta}(y^{-}\mid x)}{\pi_{\mathrm{ref},k}(y^{-}\mid x)}\Biggr)\Biggr] |  |  |

yielding an updated research agent policy πθ,k+1\pi_{\theta,k+1}. The reference is then updated conservatively by the reference management.

##### Empirical KL estimate in the gate.

The exact prompt-conditional divergence DK​LD_{KL}

|  | DK​L(π(⋅∣x)∥πref,k(⋅∣x))D_{KL}\big(\pi(\cdot\mid x)\,\|\,\pi_{\mathrm{ref},k}(\cdot\mid x)\big) |  |
|---|---|---|

between sequence-valued policies is intractable to compute, since it requires marginalization over the space of output sequences. We therefore use a tractable, trajectory-conditioned KL estimator that compares next-token distributions along a representative candidate trajectory while conditioning on the same prompt. Specifically, for each prompt x∈Gkx\in G_{k}, we associate a candidate response y=(y1,…,yLy)y=(y_{1},\ldots,y_{L_{y}}) from the phase buffer. In our implementation, yy is the preferred candidate y+y^{+} associated with xx. For each token position ℓ=1,…,Ly\ell=1,\ldots,L_{y}, define the history-conditional next-token distributions

|  | px,y,ℓ(⋅):=π(⋅∣x,y<ℓ),qx,y,ℓ(⋅):=πref,k(⋅∣x,y<ℓ),p_{x,y,\ell}(\cdot):=\pi(\cdot\mid x,y_{<\ell}),\quad q_{x,y,\ell}(\cdot):=\pi_{\mathrm{ref},k}(\cdot\mid x,y_{<\ell}), |  |
|---|---|---|

where y<ℓ=(y1,…,yℓ−1)y_{<\ell}=(y_{1},\ldots,y_{\ell-1}) denotes the prefix up to (but excluding) position ℓ\ell. We define the per-pair token-average KL as

|  | D¯​(x,y):=1Ly​∑ℓ=1LyDK​L​(px,y,ℓ∥qx,y,ℓ),\bar{D}(x,y):=\frac{1}{L_{y}}\sum_{\ell=1}^{L_{y}}D_{KL}\bigl(p_{x,y,\ell}\,\|\,q_{x,y,\ell}\bigr), |  |
|---|---|---|

and the empirical gate statistic as

|  | KL^k​(π∥πref,k):=1|Gk|​∑(x,y)∈GkD¯​(x,y).\widehat{\mathrm{KL}}_{k}\bigl(\pi\,\|\,\pi_{\mathrm{ref},k}\bigr):=\frac{1}{|G_{k}|}\sum_{(x,y)\in G_{k}}\bar{D}(x,y). |  | (3) |
|---|---|---|---|

In implementation, DK​L​(px,y,ℓ∥qx,y,ℓ)D_{KL}(p_{x,y,\ell}\|q_{x,y,\ell}) is computed directly from model logits via softmax with standard causal alignment, and masking excludes the prompt tokens and averages only over completion tokens.

##### Inspector score functional.

At phase kk, the Policy Inspector decides whether to promote the reference using a randomly sampled gate subset GkG_{k} drawn from the current phase buffer. Each element of GkG_{k} is a prompt xx together with its associated evaluated candidates and task scores collected during exploration. This design aligns the gate with the on-distribution prompts encountered by the developing agent during self-evolution, while reducing selection adaptivity relative to score-based selection.

Given a policy π\pi, let Score​(x,π)\mathrm{Score}(x,\pi) denote the task-specific evaluation score used by the inspector on prompt xx. We define the inspector score as the subset average

|  | 𝒮^k​(π):=1|Gk|​∑x∈GkScore​(x,π).\widehat{\mathcal{S}}_{k}(\pi):=\frac{1}{|G_{k}|}\sum_{x\in G_{k}}\mathrm{Score}(x,\pi). |  |
|---|---|---|

The inspector uses the score difference relative to the current reference:

|  | Δ​𝒮^k​(π):=𝒮^k​(π)−𝒮^k​(πref,k),Δ​𝒮^k:=Δ​𝒮^k​(πkk​l).\Delta\widehat{\mathcal{S}}_{k}(\pi):=\widehat{\mathcal{S}}_{k}(\pi)-\widehat{\mathcal{S}}_{k}(\pi_{\mathrm{ref},k}),\qquad\Delta\widehat{\mathcal{S}}_{k}:=\Delta\widehat{\mathcal{S}}_{k}(\pi^{kl}_{k}). |  |
|---|---|---|

##### Reference-improvement operator.

In practice, we approximate the ideal reference-improvement operator by optimizing over a finite candidate set 𝒞k⊂Π\mathcal{C}_{k}\subset\Pi. At phase kk, we construct 𝒞k\mathcal{C}_{k} from (i) a small number of intermediate checkpoints of the developing agent collected during the phase, and (ii) candidate policies produced under the exploration and guidance from the Fine-Tuning Strategist. Thus, 𝒞k={πk(1),…,πk(M)}\mathcal{C}_{k}=\{\pi^{(1)}_{k},\ldots,\pi^{(M)}_{k}\}, and 𝒞k\mathcal{C}_{k} always includes the phase-final policy πθ,k+1\pi_{\theta,k+1}. With this candidate set, we define the practical reference-improvement operator as

|  | πkk​l:=arg⁡maxπ∈𝒞k⁡{𝒮^k​(π)−βr​e​f​KL^k​(π∥πref,k)},\pi^{kl}_{k}:=\arg\max_{\pi\in\mathcal{C}_{k}}\Bigl\{\widehat{\mathcal{S}}_{k}(\pi)-\beta_{ref}\,\widehat{\mathrm{KL}}_{k}\bigl(\pi\,\|\,\pi_{\mathrm{ref},k}\bigr)\Bigr\}, |  | (4) |
|---|---|---|---|

where 𝒮^k\widehat{\mathcal{S}}_{k} and KL^k\widehat{\mathrm{KL}}_{k} are computed using the phase-kk gate subset. Here, βr​e​f>0\beta_{ref}>0 is a reference-gating trade-off coefficient that controls how strongly the inspector penalizes reference drift during selection.

Algorithm 2

 EvoDPO

1:

Initialize:
 Research agent policy πθ,1\pi_{\theta,1}, Reference πref,1←πθ,1\pi_{\text{ref},1}\leftarrow\pi_{\theta,1}

2:

Hyperparameters:
 DPO temperature β\beta, KL budget δH\delta_{H}, score tolerance ϵs\epsilon_{s}

3:

for
k=1,…,Kk=1,\dots,K
do

4:

  Collect Dk={(xi,yi+,yi−,mi)}i=1NkD_{k}=\{(x_{i},y^{+}_{i},y^{-}_{i},m_{i})\}^{N_{k}}_{i=1}

5:

  Update research agent policy πθ,k\pi_{\theta,k}πθ,k+1←arg⁡minπ∈Π⁡ℒDPO​(π;πref,k,𝒟k)\pi_{\theta,k+1}\leftarrow\arg\min_{\pi\in\Pi}\mathcal{L}_{\text{DPO}}(\pi;\pi_{\text{ref},k},\mathcal{D}_{k})

6:

  Compute πkk​l\pi^{kl}_{k} via Eq. ([4](https://arxiv.org/html/2602.02709v2#S2.E4)) 

7:

  Compute KL^k​(πkk​l∥πref,k)\widehat{\mathrm{KL}}_{k}(\pi^{kl}_{k}\|\pi_{\mathrm{ref},k})

8:

if
Δ​𝒮^k≥ϵs\Delta\widehat{\mathcal{S}}_{k}\geq\epsilon_{s}
and
KL^k​(πkk​l∥πref,k)≤δH\widehat{\mathrm{KL}}_{k}(\pi^{kl}_{k}\|\pi_{\mathrm{ref},k})\leq\delta_{H}
then

9:

   Accept πref,k+1←πkk​l\pi_{\text{ref},k+1}\leftarrow\pi^{kl}_{k}

10:

else

11:

   Reject πref,k+1←πref,k\pi_{\text{ref},k+1}\leftarrow\pi_{\text{ref},k}

12:

end

if

13:

end

for

##### Reference update with conservative acceptance.

At phase kk, the research agent proposes the candidate reference πkk​l\pi^{kl}_{k} via Eq.  ([4](https://arxiv.org/html/2602.02709v2#S2.E4)). Then the Policy Inspector applies a gating rule using (i) a score improvement Δ​𝒮^k\Delta\widehat{\mathcal{S}}_{k} and (ii) a KL trust-region measured by the trajectory-conditioned token-level KL estimator KL^k\widehat{\mathrm{KL}}_{k} on the phase-kk gate subset GkG_{k}. The system accepts a reference promotion if

|  | Δ​𝒮^k≥ϵsandKL^k​(πkk​l∥πref,k)≤δH,\Delta\widehat{\mathcal{S}}_{k}\geq\epsilon_{s}\quad\text{and}\quad\widehat{\mathrm{KL}}_{k}\bigl(\pi^{kl}_{k}\,\|\,\pi_{\mathrm{ref},k}\bigr)\leq\delta_{H}, |  | (5) |
|---|---|---|---|

where ϵs≥0\epsilon_{s}\geq 0 is a small tolerance that prevents noise-driven promotions and δH\delta_{H} prevents aggressive shifts. If Eq.  ([5](https://arxiv.org/html/2602.02709v2#S2.E5)) holds, the inspector updates the reference for the next phase, πref,k+1←πkk​l\pi_{\mathrm{ref},k+1}\leftarrow\pi^{kl}_{k}; otherwise, it maintains πref,k+1←πref,k\pi_{\mathrm{ref},k+1}\leftarrow\pi_{\mathrm{ref},k}. This accept/reject rule is a conservative realization of the ideal KL-regularized progression in Eq.  ([12](https://arxiv.org/html/2602.02709v2#S2.E12)), made operational by restricting to 𝒞k\mathcal{C}_{k} in Eq.  ([4](https://arxiv.org/html/2602.02709v2#S2.E4)) and using the K​L^k\widehat{KL}_{k}.

### 
2.3 
Theorem

##### Theory–practice connection.

We provide a regret analysis for an idealized KL-regularized reference-update Eq. ([12](https://arxiv.org/html/2602.02709v2#S2.E12)) that abstracts EvoDPO’s reference progression mechanism. The accept/reject inspector gate is a practical implementation-level safeguard and is empirically evaluated in section [3](https://arxiv.org/html/2602.02709v2#S3).

##### Problem Formulation

We consider a non-stationary preference-based contextual bandit that abstracts the reference-progression mechanism used in EvoDPO. At each round t, the environment reveals a context xt∈𝒳x_{t}\in\mathcal{X}, the agent samples two actions yt(1),yt(2)∼πt(⋅|xt)y^{(1)}_{t},y^{(2)}_{t}\sim\pi_{t}(\cdot|x_{t}), where the action space 𝒴\mathcal{Y} is a finite set. Thus πt(⋅|xt)\pi_{t}(\cdot|x_{t}) is a categorical distribution over 𝒴\mathcal{Y}. The preference outcome follows a Bradley-Terry model with utility

|  | ut​(x,y):=⟨θt,ϕ​(x,y)⟩u_{t}(x,y):=\langle\theta_{t},\phi(x,y)\rangle |  | (6) |
|---|---|---|---|

|  | Pr⁡(y≻y′∣x,t)=σ​(ut​(x,y)−ut​(x,y′))\Pr\!\left(y\succ y^{\prime}\mid x,t\right)=\sigma\!\left(u_{t}(x,y)-u_{t}(x,y^{\prime})\right) |  | (7) |
|---|---|---|---|

where ϕ​(x,y)∈ℝd\phi(x,y)\in\mathbb{R}^{d} is a known feature map and θt\theta_{t} drifts with a total variation budget VTV_{T}, where VT>0V_{T}>0 is a known constant to the agent.

|  | ∑t=2T‖θt−θt−1‖2≤VT\sum^{T}_{t=2}\|\theta_{t}-\theta_{t-1}\|_{2}\leq V_{T} |  | (8) |
|---|---|---|---|

Define the value of the policy at time tt as

|  | Jt​(π):=𝔼yt∼π(⋅∣xt)​[ut​(xt,yt)].J_{t}(\pi):=\mathbb{E}_{y_{t}\sim\pi(\cdot\mid x_{t})}[u_{t}(x_{t},y_{t})]. |  | (9) |
|---|---|---|---|

Although EvoDPO is implemented in phases, the same process can be indexed per step tt by viewing the reference as piecewise constant over time. We define πt∗\pi^{*}_{t} as the instantaneous optimal policy, πt\pi_{t} as the policy produced by the algorithm at time tt. We also define the KL-regularized comparator πtk​l\pi^{kl}_{t} for the reference update.

|  | πt:=arg⁡minπ∈Π⁡LE​v​o​D​P​O​(π;πr​e​f,t−1,𝒟t)\pi_{t}:=\arg\min_{\pi\in\Pi}L_{EvoDPO}(\pi;\pi_{ref,t-1},\mathcal{D}_{t}) |  | (10) |
|---|---|---|---|

|  | πt∗:=arg⁡maxπ∈Π⁡Jt​(π)\pi^{*}_{t}:=\arg\max_{\pi\in\Pi}J_{t}(\pi) |  | (11) |
|---|---|---|---|

|  | πtk​l:=argmaxπ∈Π{Jt(π)−βr​e​fDK​L(π(⋅|xt)||πr​e​f,t−1(⋅|xt))}\pi^{kl}_{t}:=\arg\max_{\pi\in\Pi}\bigl\{J_{t}(\pi)-\beta_{ref}D_{KL}(\pi(\cdot|x_{t})||\pi_{ref,t-1}(\cdot|x_{t}))\bigr\} |  | (12) |
|---|---|---|---|

##### Dynamic regret decomposition

Under a non-stationary condition, we analyze the decomposed dynamic regret

|  | rt={Jt​(πt∗)−Jt​(πtk​l)⏟Reference-induced bias}+{Jt​(πtk​l)−Jt​(πt)⏟Learning Error}r_{t}=\{\underbrace{J_{t}(\pi^{*}_{t})-J_{t}(\pi^{kl}_{t})}_{\text{Reference-induced bias}}\}+\{\underbrace{J_{t}(\pi^{kl}_{t})-J_{t}(\pi_{t})}_{\text{Learning Error}}\} |  | (13) |
|---|---|---|---|

We also define cumulative dynamic regret as

|  | RT=∑t=1Trt.R_{T}=\sum^{T}_{t=1}r_{t}. |  | (14) |
|---|---|---|---|

For this theoretical work, we set some assumptions as below: 

Assumption 1 (Boundedness) 

We assume the feature map, parameter, and utilities are uniformly bounded.

|  | ‖ϕ​(x,y)‖2≤ϕm​a​x,‖θt‖2≤θm​a​x,|ut​(x,y)|≤um​a​x\|\phi(x,y)\|_{2}\leq\phi_{max},\quad\|\theta_{t}\|_{2}\leq\theta_{max},\quad|u_{t}(x,y)|\leq u_{max} |  |
|---|---|---|

Assumption 2 (Reference support) 

We assume the reference policy has full support, uniformly lower-bounded by πm​i​n\pi_{min}.

|  | πr​e​f,t​(y|x)≥πm​i​n>0\pi_{ref,t}(y|x)\geq\pi_{min}>0 |  |
|---|---|---|

Assumption 3 (Oracle switching budget) 

Let BTB_{T} be the total number of oracle-optimal action switches up to time TT.

|  | BT≤2​ϕm​a​xγ​VTB_{T}\leq\frac{2\phi_{max}}{\gamma}V_{T} |  |
|---|---|---|

under a margin condition. Detailed derivation is in Lemma [A.3](https://arxiv.org/html/2602.02709v2#A1.Thmtheorem3) in Appendix A.

##### Learning Error.

From the dynamic regret decomposition in ([13](https://arxiv.org/html/2602.02709v2#S2.E13)), the cumulative learning error RTe​r​r​o​rR^{error}_{T} is defined as:

|  | RTe​r​r​o​r=∑t=1T(Jt​(πtk​l)−Jt​(πt)).R^{error}_{T}=\sum^{T}_{t=1}\bigl(J_{t}(\pi^{kl}_{t})-J_{t}(\pi_{t})\bigr). |  |
|---|---|---|

By Lemma [A.6](https://arxiv.org/html/2602.02709v2#A1.Thmtheorem6) and Appendix [A.4](https://arxiv.org/html/2602.02709v2#A1.SS4), with probability at least 1−δ1-\delta

|  | RTe​r​r​o​r≤𝒪​(Tκ​VT+T1−κ2​log⁡T+T1−κ)R^{error}_{T}\leq\mathcal{O}\bigl(T^{\kappa}V_{T}+T^{1-\frac{\kappa}{2}}\sqrt{\log T}+T^{1-\kappa}) |  | (15) |
|---|---|---|---|

where κ∈(0,1)\kappa\in(0,1).

##### Reference-induced bias.

Define the reference-induced bias as

|  | RTb​i​a​s=∑t=1T(Jt​(πt∗)−Jt​(πtk​l)).R^{bias}_{T}=\sum^{T}_{t=1}\bigl(J_{t}(\pi^{*}_{t})-J_{t}(\pi^{kl}_{t})\bigr). |  |
|---|---|---|

where πtk​l\pi_{t}^{kl} is the KL-regularized comparator. As shown in Appendix A.4, this cumulative bias is bounded by the total-variation budget:

|  | RTb​i​a​s≤𝒪​(VT).R_{T}^{bias}\leq\mathcal{O}(V_{T}). |  |
|---|---|---|

Thus, the cumulative dynamic regret decomposes as RT=RTerror+RTbiasR_{T}=R_{T}^{\mathrm{error}}+R_{T}^{\mathrm{bias}}. Combining the bias bound with Eq. ([15](https://arxiv.org/html/2602.02709v2#S2.E15)), with probability at least 1−δ1-\delta

|  | RT≤𝒪​(Tκ​VT+T1−κ2​log⁡T+T1−κ+VT).R_{T}\leq\mathcal{O}\bigl(T^{\kappa}V_{T}+T^{1-\frac{\kappa}{2}}\sqrt{\log T}+T^{1-\kappa}+V_{T}). |  | (16) |
|---|---|---|---|

## 
3 
Numerical Results

In this section, we conduct a comprehensive set of experiments to evaluate our proposed methods. The main finding is that structured collaboration between a self-evolving research agent and task-distributed multi-LLM supporters enables the ATLAS to solve complex optimization problems that require adaptation to non-stationary environments and time-dependent PDE across varying Reynold number.

![Refer to caption](https://arxiv.org/html/x2.png)

(a)

Bandit Performance

![Refer to caption](https://arxiv.org/html/x3.png)

(b)

PINN Performance

Figure 2
: 

Experimental Results across distinct domains. (a) Bandit Negative Mean Regret (NMR). (b) PINN Validation Loss (Log Scale). Shaded regions represent the Standard Error of the Mean (SEM) across 5 independent seeds.

Table 2
: 

Quantitative Summary. We compare the initial and final performance of ATLAS against EvoDPO (ablation study) and EvoTune (baseline). Left column: Negative Mean Regret for the bandit task (higher is better), showing percentage improvement. Right column: Validation Loss for the PINN task (lower is better), showing the fold reduction in loss magnitude.

| Bandit | PINN |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|
| Method | Initial | Final | Improvement | Method | Initial | Final | Reduction |
| EvoTune | -0.621 | -0.509 | 18.0% | EvoTune | 0.880 | 1.84×10−21.84\times 10^{-2} | 48×48\times |
| EvoDPO | -0.621 | -0.507 | 18.3% | EvoDPO | 0.880 | 9.76×10−49.76\times 10^{-4} | 902×902\times |
| ATLAS | -0.621 | -0.493 | 20.6% | ATLAS | 0.880 | 3.00×𝟏𝟎−𝟓\mathbf{3.00\times 10^{-5}} | 29,344×\times |

### 
3.1 
Setup

##### Tasks and formulations.

We use two distinct domains to evaluate the framework. Detailed problem formulations and mathematical definitions are provided in the Appendix [B.2](https://arxiv.org/html/2602.02709v2#A2.SS2).

##### Decision Making.

Non-stationary kk-armed contextual bandit represents a decision-making problem under concept drift, where the decision-maker must choose the optimal arm while the underlying model parameter changes over time. The decision-maker observes context xt∈ℝdx_{t}\in\mathbb{R}^{d} and selects one of kk arms. The reward depends on a drifting model parameter θt\theta_{t} and the corresponding action. To rigorously test adaptation, we define the parameter evolution on the unit sphere with a total variation budget VTV_{T}.

|  | θt+1=θt+δt‖θt+δt||2\theta_{t+1}=\frac{\theta_{t}+\delta_{t}}{\|\theta_{t}+\delta_{t}||_{2}} |  | (17) |
|---|---|---|---|

The research agent design strategy for the decision-maker to solve the problem and the supporter agents propose various strategies (e.g., Sliding-Window LinUCB) and dynamically tune hyperparameters (window size WW and regularization λ\lambda).

##### Scientific Machine Learning (SciML).

We consider a partial differential equation (PDE) setting for continuous optimization of PINN loss design, where the agent designs a loss function to solve the 1D viscous Burgers’ equation:

|  | ut+u​ux−ν​ux​x=0,x∈[−1,1],t∈[0,1]u_{t}+uu_{x}-\nu u_{xx}=0,\quad x\in[-1,1],t\in[0,1] |  | (18) |
|---|---|---|---|

Instead of relying on fixed, hand-tuned loss weights, our agent explores and optimizes its policy to adaptively reweight the composite PINN loss

|  | ℒ​(θ)=λp​d​e​ℒp​d​e+λi​c​ℒi​c+λb​c​ℒb​c\mathcal{L}(\theta)=\lambda_{pde}\mathcal{L}_{pde}+\lambda_{ic}\mathcal{L}_{ic}+\lambda_{bc}\mathcal{L}_{bc} |  | (19) |
|---|---|---|---|

that adaptively balances these terms during training. To rigorously test adaptation, we introduce a time-varying (dependent) PDE parameter where the viscosity parameter ν\nu drifts over time, forcing the agent to handle varying degrees of stiffness and shock formation.

##### Agents.

ATLAS employs a hierarchical multi-agent structure, utilizing four specialized LLMs to drive the self-evolution process (agent roles and prompts are detailed in Appendix [B.3](https://arxiv.org/html/2602.02709v2#A2.SS3) and [C](https://arxiv.org/html/2602.02709v2#A3))

(i) The Research Agent functions as the primary researcher. Initialized with domain-specific prompts, it iteratively generates a Python solution code.

(ii) The Exploration Supporter acts as a senior technical advisor. It performs static analysis on the research agent’s code to propose architectural patches. It identified and resolved domain-specific bottlenecks, such as reducing the fixed sliding window (e.g., 50→2050\to 20) for the bandit task and recommending Huber loss with dynamic normalization to stabilize exploding gradients in PINN.

(iii) The Fine-Tuning Strategist regulates the learning dynamics. By monitoring training diagnostics, it dynamically tunes the fine-tuning hyperparameters.

(iv) The Policy Inspector serves as a safety gate for reference updates. It enforces a strict trust region, permitting updates only when the candidate πkk​l\pi^{kl}_{k} demonstrates sufficient utility improvement while satisfying a trust-region KL divergence constraint.

##### Baselines.

We evaluate the performance of our full framework, ATLAS, through an ablation study and a comparison against a standard baseline (detailed in Appendix [B.1](https://arxiv.org/html/2602.02709v2#A2.SS1)) to isolate the contributions of our proposed components:

(i) EvoDPO: An ablation study of our proposed method that retains adaptivity via adaptive reference updates, but operates as a single agent without the multi-agent architectural benefits.

(ii) EvoTune: A baseline method that utilizes a fixed reference policy and maintains static hyperparameters over the entire course of training.

### 
3.2 
Results

##### Experimental setup.

Our framework is evaluated on both the non-stationary kk-armed contextual bandit and PINN tasks. All experiments were conducted on a cluster using NVIDIA H100 GPUs; see Appendix [B.5](https://arxiv.org/html/2602.02709v2#A2.SS5) for hyperparameters and hardware details.

##### Bandit.

For the bandit task, the performance is measured by the Negative Mean Regret (NMR) over the horizon (higher is better). As shown in Figure [2](https://arxiv.org/html/2602.02709v2#S3.F2)(a) and Table [2](https://arxiv.org/html/2602.02709v2#S3.T2) (left), ATLAS achieves the highest score, significantly outperforming both the static baseline (EvoTune) and the ablation without supporters (EvoDPO). Specifically, ATLAS improves the mean initial score from −0.621-0.621 to a final mean of −0.493-0.493 (20.6%20.6\% improvement). In comparison, EvoDPO offers a slight advantage over the baseline (converging to −0.507-0.507 vs −0.509-0.509), but eventually plateaus. This performance gap highlights that, although the adaptive update rule of EvoDPO yields measurable improvements, the feedback provided by the Exploration Supporter and the Fine-Tuning Strategist is crucial for systematically adjusting sliding-window parameters and DPO hyperparameters to navigate concept drift.

##### PINN.

Both Figure [2](https://arxiv.org/html/2602.02709v2#S3.F2)(b) and Table [2](https://arxiv.org/html/2602.02709v2#S3.T2) (right) illustrate the validation loss trajectories and quantitative summary for the PINN task. The objective is to minimize the score (validation loss), defined as the composite loss on the held-out collocation points. ATLAS significantly outperforms the baseline, achieving a final mean validation loss of 3.00×10−53.00\times 10^{-5}, representing a massive 29,344×29,344\times improvement over the initial mean score. While EvoDPO significantly improves upon the baseline (9.76×10−49.76\times 10^{-4} vs 1.84×10−21.84\times 10^{-2}), it exhibits higher variance than the full method. This indicates that while the adaptive update rule effectively navigates the early landscape, the multi-supporter agents layer is critical for consistently overcoming optimization stiffness to achieve high-precision convergence.

Table 3
: 

Activity of the Fine-Tuning Strategist and Policy Inspector. Values represent the mean intervention rate across all trials.

|  | Strategist Intervention Rate | Inspector |  |  |
|---|---|---|---|---|
| Task | Δ​β\Delta\beta | Δ\Delta Threshold | Δ\Delta Epoch | Accept Rate |
| Bandit | 22.7% | 31.1% | 7.3% | 16.4% |
| PINN | 16.0% | 24.0% | 2.0% | 38.0% |

##### Agent Dynamics Analysis.

Table [3](https://arxiv.org/html/2602.02709v2#S3.T3) summarizes the intervention frequencies of the auxiliary agents. The Fine-Tuning Strategist actively modulated the learning dynamics by intervening on hyperparameters (specifically β\beta and scoring thresholds) in roughly 20–30% of the rounds. Notably, the Policy Inspector exhibited distinct behaviors across domains. In the PINN task, the acceptance rate was relatively high (38.0%38.0\%), reflecting the deterministic nature of the physics gradients, which allowed for consistent policy improvements. Conversely, in the non-stationary bandit task, the acceptance rate was lower (16.4%16.4\%). This indicates that the Policy Inspector acted as a strict conservatism gate, frequently rejecting updates when the candidate policy would cause overly aggressive updates. Full trial-by-trial dynamics are detailed in Appendix [B.4](https://arxiv.org/html/2602.02709v2#A2.SS4).

### 
3.3 
Ablation Study

To isolate the impact of our contributions, we evaluate the system components incrementally in Table [4](https://arxiv.org/html/2602.02709v2#S3.T4). The transition from EvoTune to EvoDPO highlights the benefit of adaptivity, which reduces the PINN validation loss by nearly two orders of magnitude (1.84×10−2→9.76×10−41.84\times 10^{-2}\to 9.76\times 10^{-4}). However, the addition of the multi-LLM supporters layer (ATLAS) provides a solution for overcoming stagnation: it enables dynamic parameter adaptation to navigate concept drift in the Bandit task (improving NMR to -0.493) and refines the loss of PINN task by an additional order of magnitude to 3.00×10−53.00\times 10^{-5}, confirming the synergistic benefit of combining the strategic guidance from auxiliary agents with EvoDPO’s adaptivity.

Table 4
: 

Ablation Study. Comparison of final performance across Bandit and PINN tasks. Bandit values represent Negative Mean Regret (NMR), where higher is better. PINN values represent Validation Loss on held-out collocation points, where lower is better. Metrics are averaged across 5 independent seeds.

| Configuration | Bandit | PINN |
|---|---|---|
| Baseline (EvoTune) | −0.509-0.509 | 1.84×10−21.84\times 10^{-2} |
| + Adaptivity (EvoDPO) | −0.507-0.507 | 9.76×10−49.76\times 10^{-4} |
| + LLM Supporters (ATLAS) | −0.493\mathbf{-0.493} | 3.00×𝟏𝟎−𝟓\mathbf{3.00\times 10^{-5}} |

## 
4 
Conclusion

We introduced ATLAS, a framework for self-evolving research agents that decomposes the long-horizon evolutionary procedure into role-specialized supporter agents for exploration, strategy control, and policy inspection.

Our primary algorithmic contribution, EvoDPO, performs progressive preference optimization via adaptive reference updates. We provide theoretical guarantees via a non-stationary decision-making problem. On the implementation level, ATLAS demonstrates significant performance, robustness, and reliability when applied to challenging domains such as non-stationary contextual bandits and scientific machine learning.

Future work will extend this framework to collaborative multi-agentic evolution and to broader scientific discovery tasks in which evaluation signals are sparse or noisy.

## Impact Statement

Our work on ATLAS and the EvoDPO algorithm provides a pathway to develop self-evolving AI agents capable of tackling complex, non-stationary problems in scientific computing and automated decision-making. By demonstrating how task-distributed multi-agent support can stabilize long-horizon preference learning, we hope to accelerate scientific discovery and automate robust code generation in engineering domains, such as solving partial differential equations or optimizing online learning strategies, where manual tuning is often a bottleneck.

However, as with any framework that enables autonomous self-improvement, there are inherent risks related to objective misalignment and safety. If the reference management mechanisms, specifically the Policy Inspector and trust region constraints, are not rigorously tuned, there is a risk that agents could exploit proxy metrics or manipulate the reward system, leading to solutions that are mathematically high-scoring but physically invalid or unsafe. Additionally, the capability to automate research workflows raises dual-use concerns; the same optimization power used to refine PINNs could potentially be applied to optimize harmful objectives if deployed without safeguards.

Researchers and practitioners utilizing ATLAS should therefore be strictly mindful of the boundaries defined in the exploration and inspection phases, ensuring that physical constraints and ethical guidelines are integrated directly into the supporter agents’ prompts and evaluation logic. Ultimately, by providing a structured, stable, and transparent framework for agentic evolution, we believe this work advances the responsible automation of scientific research and fosters the development of reliable AI systems for complex problem-solving.

## References

- 
Y. Abbasi-yadkori, D. Pál, and C. Szepesvári (2011)

Improved algorithms for linear stochastic bandits
. 

In 
Advances in Neural Information Processing Systems
,  
J. Shawe-Taylor, R. Zemel, P. Bartlett, F. Pereira, and K.Q. Weinberger (Eds.)
, 

Vol. 
24
, 
 pp. 
. 

External Links: 
[Link](https://papers.nips.cc/paper_files/paper/2011/file/e1d5be1c7f2f456670de3d53c7b54f4a-Paper.pdf)

Cited by: [§A.3](https://arxiv.org/html/2602.02709v2#A1.SS3.4.p1.3). 

- 
P. A. Alamdari, Y. Cao, and K. H. Wilson (2024)

Jump starting bandits with llm-generated prior knowledge
. 

External Links: 

2406.19317
, [Link](https://arxiv.org/abs/2406.19317)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p7.1). 

- 
J. Becker, L. B. Kaesberg, N. Bauer, J. P. Wahle, T. Ruas, and B. Gipp (2025)

MALLM: multi-agent large language models framework
. 

External Links: 

2509.11656
, [Link](https://arxiv.org/abs/2509.11656)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
G. Chen, S. Dong, Y. Shu, G. Zhang, J. Sesay, B. F. Karlsson, J. Fu, and Y. Shi (2024)

AutoAgents: a framework for automatic agent generation
. 

External Links: 

2309.17288
, [Link](https://arxiv.org/abs/2309.17288)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, Y. Qin, X. Cong, R. Xie, Z. Liu, M. Sun, and J. Zhou (2023)

AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors
. 

External Links: 

2308.10848
, [Link](https://arxiv.org/abs/2308.10848)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
Y. Chen, M. He, F. Yang, P. Zhao, L. Wang, Y. Kang, Y. Dong, Y. Zhan, H. Sun, Q. Lin, S. Rajmohan, and D. Zhang (2025)

WarriorMath: enhancing the mathematical ability of large language models with a defect-aware framework
. 

External Links: 

2508.01245
, [Link](https://arxiv.org/abs/2508.01245)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
X. He, L. You, H. Tian, B. Han, I. Tsang, and Y. Ong (2025)

Lang-pinn: from language to physics-informed neural networks via a multi-agent framework
. 

External Links: 

2510.05158
, [Link](https://arxiv.org/abs/2510.05158)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
J. Huang, E. J. Li, M. H. LAM, T. Liang, W. Wang, Y. Yuan, W. Jiao, X. Wang, Z. Tu, and M. Lyu (2025)

Competing large language models in multi-agent gaming environments
. 

In 
The Thirteenth International Conference on Learning Representations
, 

External Links: 
[Link](https://openreview.net/forum?id=DI4gW8viB6)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
Q. Jiang and G. Karniadakis (2025)

AgenticSciML: collaborative multi-agent systems for emergent discovery in scientific machine learning
. 

External Links: 

2511.07262
, [Link](https://arxiv.org/abs/2511.07262)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
D. Kumar and A. Mukherjee (2024)

Investigating the ability of pinns to solve burgers’ pde near finite-time blowup
. 

External Links: 

2310.05169
, [Link](https://arxiv.org/abs/2310.05169)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p7.1). 

- 
L. Li, W. Chu, J. Langford, and R. E. Schapire (2010)

A contextual-bandit approach to personalized news article recommendation
. 

CoRR

abs/1003.0146
. 

External Links: 
[Link](http://arxiv.org/abs/1003.0146), 
1003.0146

Cited by: [§A.3](https://arxiv.org/html/2602.02709v2#A1.SS3.9.p5.1). 

- 
W. Liao, X. Chu, and Y. Wang (2025)

TPO: aligning large language models with multi-branch & multi-step preference trees
. 

External Links: 

2410.12854
, [Link](https://arxiv.org/abs/2410.12854)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p4.1). 

- 
Y. Liu, R. Deng, T. Kaler, X. Chen, C. E. Leiserson, Y. Ma, and J. Chen (2025)

Lessons learned: a multi-agent framework for code llms to learn and improve
. 

External Links: 

2505.23946
, [Link](https://arxiv.org/abs/2505.23946)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p1.1). 

- 
Y. Lyu, L. Yan, Z. Wang, D. Yin, P. Ren, M. de Rijke, and Z. Ren (2025)

MACPO: weak-to-strong alignment via multi-agent contrastive preference optimization
. 

External Links: 

2410.07672
, [Link](https://arxiv.org/abs/2410.07672)

Cited by: [§1](https://arxiv.org/html/2602.02709v2#S1.p5.1). 

- 
R. Rafailov, A. Sharma, E. Mitchell, S. Ermon, C. D. Manning, and C. Finn (2024)

Direct preference optimization: your language model is secretly a reward model
. 

External Links: 

2305.18290
, [Link](https://arxiv.org/abs/2305.18290)

Cited by: [§A.3](https://arxiv.org/html/2602.02709v2#A1.SS3.10.p1.2), [§1](https://arxiv.or

...(内容已截断)
