---
repo: dongxiangjue/awesome-llm-self-improvement
url: https://github.com/dongxiangjue/awesome-llm-self-improvement
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - dongxiangjue/Awesome-LLM-Self-Improvement: A curated list of awesome LLM Inference-Time Self-Improvement (ITSI, pronounced "itsy") papers from our recent survey: A Survey on Large Language Model Inference-Time Self-Improvement. · GitHub

**Source**: https://github.com/dongxiangjue/awesome-llm-self-improvement

---

[Skip to content](https://github.com/dongxiangjue/awesome-llm-self-improvement#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[dongxiangjue](https://github.com/dongxiangjue)

/
**[Awesome-LLM-Self-Improvement](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement)**

Public

- [Notifications](https://github.com/login?return_to=%2Fdongxiangjue%2FAwesome-LLM-Self-Improvement)You must be signed in to change notification settings
- [Fork
    6](https://github.com/login?return_to=%2Fdongxiangjue%2FAwesome-LLM-Self-Improvement)
- 
[Star
          106](https://github.com/login?return_to=%2Fdongxiangjue%2FAwesome-LLM-Self-Improvement)

[https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement)

[Branches](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/branches)[Tags](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/tags)

[https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/branches](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/branches)[https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/tags](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History16 Commits16 Commits |  |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| fig5.png | fig5.png |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome-LLM-Self-Improvement

[https://github.com/dongxiangjue/awesome-llm-self-improvement#awesome-llm-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement#awesome-llm-self-improvement)

[https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/blob/main](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/blob/main)[https://arxiv.org/pdf/2412.14352](https://arxiv.org/pdf/2412.14352)

A curated list of awesome LLM Inference-Time Self-Improvement (**ITSI**, pronounced *"itsy"*) papers from our recent survey: [A Survey on Large Language Model Inference-Time Self-Improvement](https://arxiv.org/pdf/2412.14352).

> 📬 **Contacts:** Questions or comments? Send us an email: Xiangjue Dong (`xj.dong@tamu.edu`) & Maria Teleki (`mariateleki@tamu.edu`).

> ⭐️ **Want to contribute?** Send us a pull request! New papers are welcome.

## Inference-Time Self-Improvement (ITSI)

[https://github.com/dongxiangjue/awesome-llm-self-improvement#inference-time-self-improvement-itsi](https://github.com/dongxiangjue/awesome-llm-self-improvement#inference-time-self-improvement-itsi)

We survey in this work this notion of LLM Inference-Time Self Improvement (ITSI) – i.e., relying on the LLM’s own frozen parameters without additional training or parameter updating to improve performance and/or efficiency at inference-time. We classify these methods into three categories: Independent Self-Improvement, which operates independently; Context-Aware Self-Improvement, which leverages external support (i.e. context and datastore retrieval); and Model-Aided Self-Improvement, which relies on external models for collaboration.

[https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/blob/main/fig5.png](https://github.com/dongxiangjue/Awesome-LLM-Self-Improvement/blob/main/fig5.png)

## Contents

[https://github.com/dongxiangjue/awesome-llm-self-improvement#contents](https://github.com/dongxiangjue/awesome-llm-self-improvement#contents)

- [Independent Self-Improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement#independent-self-improvement)
  - [Constrained Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#constrained-decoding)
  - [Contrastive Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#contrastive-decoding)
  - [Minimum Bayes-Risk Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#minimum-bayes-risk-decoding)
  - [Parallel Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#parallel-decoding)
  - [Sampling-Based Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#sampling-based-decoding)
  - [Tree-Search-based Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#tree-search-based-decoding)
  - [Model-level Decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#model-level-decoding)

- [Context-Aware Self-Improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement#context-aware-self-improvement)
  - [Prompting](https://github.com/dongxiangjue/awesome-llm-self-improvement#prompting)
  - [Disturbed Prompt](https://github.com/dongxiangjue/awesome-llm-self-improvement#disturbed-prompt)
  - [Retrieval-Based](https://github.com/dongxiangjue/awesome-llm-self-improvement#retrieval-based)

- [Model-Aided Self-Improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement#model-aided-self-improvement)
  - [Expert and/or Anti-Expert](https://github.com/dongxiangjue/awesome-llm-self-improvement#expert-andor-anti-expert)
  - [Draft Model](https://github.com/dongxiangjue/awesome-llm-self-improvement#draft-model)
  - [Small LMs/Amateur LMs](https://github.com/dongxiangjue/awesome-llm-self-improvement#small-lmsamateur-lms)
  - [Reward Model](https://github.com/dongxiangjue/awesome-llm-self-improvement#reward-model)
  - [Tool Use/APIs](https://github.com/dongxiangjue/awesome-llm-self-improvement#tool-useapis)

- [Other Relevant Survey Papers](https://github.com/dongxiangjue/awesome-llm-self-improvement#other-relevant-survey-papers)
- [Citation](https://github.com/dongxiangjue/awesome-llm-self-improvement#citation)

## Independent Self-Improvement

[https://github.com/dongxiangjue/awesome-llm-self-improvement#independent-self-improvement](https://github.com/dongxiangjue/awesome-llm-self-improvement#independent-self-improvement)

Independent Self-Improvement is achieving improvements in performance using the model's own frozen parameters without additional training -- i.e., by modifying the decoding process, increasing efficiency, sampling multiple candidate generations, and isolating layers or neurons.

### Constrained Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#constrained-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#constrained-decoding)

Constrained decoding guides the generation process via hard constraints or soft constraints.

#### Hard Constraint

[https://github.com/dongxiangjue/awesome-llm-self-improvement#hard-constraint](https://github.com/dongxiangjue/awesome-llm-self-improvement#hard-constraint)

- 

NeuroLogic*: [NeuroLogic A*esque Decoding: Constrained Text Generation with Lookahead Heuristics](https://aclanthology.org/2022.naacl-main.57/) (Lu et al., NAACL 2022) ([Code](https://github.com/GXimingLu/a_star_neurologic))

- 

NeuroLogic: [NeuroLogic Decoding: (Un)supervised Neural Text Generation with Predicate Logic Constraints](https://aclanthology.org/2021.naacl-main.339/) (Lu et al., NAACL 2021) ([Code](https://github.com/GXimingLu/neurologic_decoding))

- 

Control-DAG: [Control-DAG: Constrained Decoding for Non-Autoregressive Directed Acyclic T5 using Weighted Finite State Automata](https://aclanthology.org/2024.naacl-short.42) (Chen et al., NAACL 2024) ([Code](https://github.com/EriChen0615/ControlDAG))

#### Soft Constraint

[https://github.com/dongxiangjue/awesome-llm-self-improvement#soft-constraint](https://github.com/dongxiangjue/awesome-llm-self-improvement#soft-constraint)

- 

Penalty Decoding: [Penalty Decoding: Well Suppress the Self-Reinforcement Effect in Open-Ended Text Generation](https://aclanthology.org/2023.emnlp-main.78) (Zhu et al., EMNLP 2023) ([Code](https://github.com/zwhong714/penalty_decoding))

- 

IPS (Isotropic and Proximal Search): [Fine-grained Conversational Decoding via Isotropic and Proximal Search](https://aclanthology.org/2023.emnlp-main.5) (Yao et al., EMNLP 2023) ([Code](https://github.com/starrYYxuan/IPS))

### Contrastive Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#contrastive-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#contrastive-decoding)

Contrastive decoding adjusts the next-token probability based on differences in logits.

#### Faithfulness and Hallucinations.

[https://github.com/dongxiangjue/awesome-llm-self-improvement#faithfulness-and-hallucinations](https://github.com/dongxiangjue/awesome-llm-self-improvement#faithfulness-and-hallucinations)

- 

PMI-Decode: [Pointwise Mutual Information Based Metric and Decoding Strategy for Faithful Generation in Document Grounded Dialogs](https://aclanthology.org/2023.emnlp-main.639/) (Nandwani et al., EMNLP 2023) ([Code](https://github.com/ynandwan/pmi-faith))

- 

LCD: [Mitigating Hallucinations in Large Vision-Language Models (LVLMs) via Language-Contrastive Decoding (LCD)](https://aclanthology.org/2024.findings-acl.359/) (Manevich & Tsarfaty, Findings 2024) ([Code](https://github.com/DAMO-NLP-SG/VCD))

- 

Anti-LM: [Anti-LM Decoding for Zero-shot In-context Machine Translation](https://aclanthology.org/2024.findings-naacl.216/) (Sia et al., NAACL Findings 2024) ([Code](https://github.com/suzyahyah/icl_Anti-LM_decoding))

- 

DoLA: [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://openreview.net/forum?id=Th6NyL07na) (Chuang et al., ICLR 2024) ([Code](https://github.com/voidism/DoLa))

#### Repetition, Coherence, and Diversity.

[https://github.com/dongxiangjue/awesome-llm-self-improvement#repetition-coherence-and-diversity](https://github.com/dongxiangjue/awesome-llm-self-improvement#repetition-coherence-and-diversity)

- 

Look-Back: [Look-back Decoding for Open-Ended Text Generation](https://aclanthology.org/2023.emnlp-main.66/) (Xu et al., EMNLP 2023) ([Code](https://github.com/xunannancy/LookBackDecoding))

- 

Adaptive Decoding: [Improving Open-Ended Text Generation via Adaptive Decoding](https://openreview.net/forum?id=aXD94eATtT) (Zhu et al., ICML 2024) ([Code](https://github.com/zwhong714/adaptive_decoding))

### Minimum Bayes-Risk Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#minimum-bayes-risk-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#minimum-bayes-risk-decoding)

Unlike MAP decoding, Minimum Bayes-Risk (MBR) decoding selects the output sentence that maximizes the *expected utility* over the set of translation hypotheses (Kumar and Byrne, 2004).

#### Clustering

[https://github.com/dongxiangjue/awesome-llm-self-improvement#clustering](https://github.com/dongxiangjue/awesome-llm-self-improvement#clustering)

- 

DMBR: [Generating Diverse and High-Quality Texts by Minimum Bayes Risk Decoding](https://aclanthology.org/2024.findings-acl.503/) (Jinnai et al., ACL Findings 2024) ([Code](https://github.com/CyberAgentAILab/diverse-mbr/))

- 

CBMBR: [Centroid-Based Efficient Minimum Bayes Risk Decoding](https://aclanthology.org/2024.findings-acl.654/) (Deguchi et al., ACL Findings 2024) ([Code](https://github.com/naist-nlp/mbrs))

#### Matrix Approximation

[https://github.com/dongxiangjue/awesome-llm-self-improvement#matrix-approximation](https://github.com/dongxiangjue/awesome-llm-self-improvement#matrix-approximation)

- PMBR: [Efficient Minimum Bayes Risk Decoding using Low-Rank Matrix Completion Algorithms](https://openreview.net/forum?id=8iPobEKUUA) (Trabelsi et al., NeurIPS 2024)

#### Other

[https://github.com/dongxiangjue/awesome-llm-self-improvement#other](https://github.com/dongxiangjue/awesome-llm-self-improvement#other)

- 

Pruning MBR: [Faster Minimum Bayes Risk Decoding with Confidence-based Pruning](https://aclanthology.org/2023.emnlp-main.767/) (Cheng & Vlachos, EMNLP 2023) ([Code](https://github.com/juliusc/pruning_mbr))

- 

AMBR: [Hyperparameter-Free Approach for Faster Minimum Bayes Risk Decoding](https://aclanthology.org/2024.findings-acl.505/) (Jinnai & Ariu, ACL Findings 2024) ([Code](https://github.com/CyberAgentAILab/adaptive-mbr))

- 

MBMBR: [Model-Based Minimum Bayes Risk Decoding for Text Generation](https://openreview.net/forum?id=qDUaH9xHVV) (Jinnai et al., ICML 2024) ([Code](https://github.com/CyberAgentAILab/model-based-mbr))

### Parallel Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#parallel-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#parallel-decoding)

Parallel decoding generates multiple tokens simultaneously during the decoding phases for faster generation, rather than sequentially.

- 

HGJ: [Accelerating Transformer Inference for Translation via Parallel Decoding](https://aclanthology.org/2023.acl-long.689/) (Santilli et al., ACL 2023) ([Code](https://github.com/teelinsan/parallel-decoding))

- 

Arithmetic Sampling: [Arithmetic Sampling: Parallel Diverse Decoding for Large Language Models](https://proceedings.mlr.press/v202/vilnis23a.html) (Vilnis et al., ICML 2023) ([Code](https://github.com/google-research/google-research/tree/master/arithmetic_sampling))

- 

Lookahead Decoding: [Break the Sequential Dependency of LLM Inference Using Lookahead Decoding](https://openreview.net/forum?id=eDjvSFOkXw) (Fu et al., ICML 2024) ([Code](https://github.com/hao-ai-lab/LookaheadDecoding))

- 

SoT: [Skeleton-of-Thought: Prompting LLMs for Efficient Parallel Generation](https://openreview.net/forum?id=mqVgBbNCm9) (Ning et al., ICLR 2024) ([Code](https://github.com/imagination-research/sot))

### Sampling-Based Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#sampling-based-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#sampling-based-decoding)

Sampling-based methods introduce randomness for token selection to generate diverse text or sample multiple generation paths from the model.

#### Open-Ended Generation.

[https://github.com/dongxiangjue/awesome-llm-self-improvement#open-ended-generation](https://github.com/dongxiangjue/awesome-llm-self-improvement#open-ended-generation)

- 

BAT: [Closing the Curious Case of Neural Text Degeneration](https://openreview.net/forum?id=dONpC9GL1o) (Finlayson et al., ICLR 2024) ([Code](https://github.com/mattf1n/basis-aware-threshold))

- 

DAEMON: [Language Model Decoding as Direct Metrics Optimization](https://openreview.net/forum?id=488A64eOf6) (Ji et al., ICLR 2024)

#### Reasoning.

[https://github.com/dongxiangjue/awesome-llm-self-improvement#reasoning](https://github.com/dongxiangjue/awesome-llm-self-improvement#reasoning)

- 

Self-Consistency: [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://openreview.net/forum?id=1PL1NIMMrw) (Wang et al., ICLR 2023)

- 

ESC: [Escape Sky-high Cost: Early-stopping Self-Consistency for Multi-step Reasoning](https://openreview.net/forum?id=ndR8Ytrzhh) (Li et al., ICLR 2024) ([Code](https://github.com/Yiwei98/ESC))

#### Other.

[https://github.com/dongxiangjue/awesome-llm-self-improvement#other-1](https://github.com/dongxiangjue/awesome-llm-self-improvement#other-1)

- ASAp: [Grammar-Aligned Decoding](https://openreview.net/forum?id=5G7ve8E1Lu) (Park et al., NeurIPS 2024) ([Code](https://github.com/ebmoon/transformers-GAD))

### Tree-Search-based Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#tree-search-based-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#tree-search-based-decoding)

Planning algorithms, such as Monte-Carlo tree search (MCTS), have also been applied to identify optimal text outputs for various tasks.

- 

PG-TD: [Planning with Large Language Models for Code Generation](https://openreview.net/forum?id=Lr8cOOtYbfL) (Zhang et al., ICLR 2023) ([Code](https://github.com/shunzh/Code-AI-Tree-Search))

- 

GDP-Zero: [Prompt-Based Monte-Carlo Tree Search for Goal-oriented Dialogue Policy Planning](https://aclanthology.org/2023.emnlp-main.439/) (Yu et al., EMNLP 2023) ([Code](https://github.com/jasonyux/GDPZero))

- 

RAP: [Reasoning with Language Model is Planning with World Model](https://aclanthology.org/2023.emnlp-main.507/) (Hao et al., EMNLP 2023) ([Code](https://github.com/maitrix-org/llm-reasoners))

### Model-level Decoding

[https://github.com/dongxiangjue/awesome-llm-self-improvement#model-level-decoding](https://github.com/dongxiangjue/awesome-llm-self-improvement#model-level-decoding)

Model-level methods operate inside the intermediate layers of the model.

-
## gBrain Temporal Metadata

- content_timestamp: 2004
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

