---
repo: zesearch/self-improvement-llm
url: https://github.com/zesearch/self-improvement-llm
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Zesearch/self-improvement-llm: A technical and progressive review of self-improvement of LLMs for the future. · GitHub

**Source**: https://github.com/zesearch/self-improvement-llm

---

[Skip to content](https://github.com/zesearch/self-improvement-llm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Zesearch](https://github.com/Zesearch)

/
**[self-improvement-llm](https://github.com/Zesearch/self-improvement-llm)**

Public

- [Notifications](https://github.com/login?return_to=%2FZesearch%2Fself-improvement-llm)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FZesearch%2Fself-improvement-llm)
- 
[Star
          13](https://github.com/login?return_to=%2FZesearch%2Fself-improvement-llm)

[https://github.com/Zesearch/self-improvement-llm](https://github.com/Zesearch/self-improvement-llm)

[Branches](https://github.com/Zesearch/self-improvement-llm/branches)[Tags](https://github.com/Zesearch/self-improvement-llm/tags)

[https://github.com/Zesearch/self-improvement-llm/branches](https://github.com/Zesearch/self-improvement-llm/branches)[https://github.com/Zesearch/self-improvement-llm/tags](https://github.com/Zesearch/self-improvement-llm/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| figures | figures |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Improvement of Large Language Models: A Technical Overview and Future Outlook

[https://github.com/zesearch/self-improvement-llm#self-improvement-of-large-language-models-a-technical-overview-and-future-outlook](https://github.com/zesearch/self-improvement-llm#self-improvement-of-large-language-models-a-technical-overview-and-future-outlook)

### 

[https://arxiv.org/abs/2603.25681](https://arxiv.org/abs/2603.25681)[https://zesearch.github.io/self-improvement-llm-website/](https://zesearch.github.io/self-improvement-llm-website/)

### Haoyan Yang · Mario Xerri  · Solha Park · Huajian Zhang · Yiyang Feng · Sai Akhil Kogilathota  · Jiawei Zhou

[https://github.com/zesearch/self-improvement-llm#haoyan-yang--mario-xerri---solha-park--huajian-zhang--yiyang-feng--sai-akhil-kogilathota---jiawei-zhou](https://github.com/zesearch/self-improvement-llm#haoyan-yang--mario-xerri---solha-park--huajian-zhang--yiyang-feng--sai-akhil-kogilathota---jiawei-zhou)

Zesearch NLP Lab, Stony Brook University

[haoyan.yang@stonybrook.edu](mailto:saiakhil.kogilathota@stonybrook.edu) | [mario.xerri@stonybrook.edu](mailto:saiakhil.kogilathota@stonybrook.edu) | [solha.park@stonybrook.edu](mailto:saiakhil.kogilathota@stonybrook.edu) | [huajian.zhang@stonybrook.edu](mailto:saiakhil.kogilathota@stonybrook.edu) | [yiyang.feng@stonybrook.edu](mailto:sripadhavallab.eg@stonybrook.edu) | [saiakhil.kogilathota@stonybrook.edu](mailto:saiakhil.kogilathota@stonybrook.edu) | [jiawei.zhou.1@stonybrook.edu](mailto:jiawei.zhou.1@stonybrook.edu)

🚀 *Upcoming Update*

We will continue improving and expanding this paper. If you have any suggestions, ideas, missing papers, or feedback, they are highly welcome! A new updated version of the paper will be released soon.

🤝 *Collaboration Welcome*

We also welcome collaborations interested in this area. Feel free to open an issue or reach out if you would like to contribute.

# 🌟 Overview

[https://github.com/zesearch/self-improvement-llm#-overview](https://github.com/zesearch/self-improvement-llm#-overview)

As large language models (LLMs) continue to advance, improving them solely through human supervision is becoming increasingly costly and limited in scalability. As models approach human-level capabilities in certain domains, human feedback may no longer provide sufficiently informative signals for further improvement. At the same time, the growing ability of models to make autonomous decisions and execute complex actions naturally enables abstractions in which components of the model development process can be progressively automated. Together, these challenges and opportunities have driven increasing interest in self-improvement, where models autonomously generate data, evaluate outputs, and iteratively refine their own capabilities.

[https://github.com/Zesearch/self-improvement-llm/blob/main/figures/main.png](https://github.com/Zesearch/self-improvement-llm/blob/main/figures/main.png)

We present a **system-level framework for self-improving language models**, covering the full lifecycle of autonomous model development. We organize existing research into **five key components** of a self-improvement system:

- **Data Acquisition**
- **Data Selection**
- **Model Optimization**
- **Inference Refinement**
- **Autonomous Evaluation**

Beyond the technical taxonomy, we further analyze the field from three complementary perspectives:

- **Challenges and Limitations**
- **Applications**
- **Future Outlook**

Our goal is to provide a unified perspective on self-improvement systems and share our vision for building scalable and autonomous self-improving systems.

# 📖 Paper List

[https://github.com/zesearch/self-improvement-llm#-paper-list](https://github.com/zesearch/self-improvement-llm#-paper-list)

📌 **Note:** Each section and subsection heading in this paper list is annotated with its corresponding section number in the paper (e.g., `§2.2`, `§4.3`), along with a brief description of its scope.

**Contents (Click to expand or collapse)**

- 

[Data Acquisition (§2)](https://github.com/zesearch/self-improvement-llm#data-acquisition-2)

  - [Static Curation (§2.2)](https://github.com/zesearch/self-improvement-llm#static-curation-22)
  - [Environmental Interaction (§2.3)](https://github.com/zesearch/self-improvement-llm#environmental-interaction-23)
  - [Synthetic Generation (§2.4)](https://github.com/zesearch/self-improvement-llm#synthetic-generation-24)
    - [Prompt-Based (§2.4.1)](https://github.com/zesearch/self-improvement-llm#prompt-based-241)
    - [Transformation-Based (§2.4.2)](https://github.com/zesearch/self-improvement-llm#transformation-based-242)
    - [Interaction-Based (§2.4.3)](https://github.com/zesearch/self-improvement-llm#interaction-based-243)

- 

[Data Selection (§3)](https://github.com/zesearch/self-improvement-llm#data-selection-3)

  - [Metric-Guided Scoring (§3.2)](https://github.com/zesearch/self-improvement-llm#metric-guided-scoring-32)
    - [One-Shot Scoring (§3.2.1)](https://github.com/zesearch/self-improvement-llm#one-shot-scoring-321)
    - [Iterative Re-Scoring (§3.2.2)](https://github.com/zesearch/self-improvement-llm#iterative-re-scoring-322)

  - [Adaptive Selection (§3.3)](https://github.com/zesearch/self-improvement-llm#adaptive-selection-33)

- 

[Model Optimization (§4)](https://github.com/zesearch/self-improvement-llm#model-optimization-4)

  - [Generation-Reward-Optimization (GRO) Framework (§4.2)](https://github.com/zesearch/self-improvement-llm#gro-framework-42)
  - [Theoretical Analysis (§4.4)](https://github.com/zesearch/self-improvement-llm#theoretical-analysis-44)
  - [Beyond GRO (§4.5)](https://github.com/zesearch/self-improvement-llm#beyond-gro-45)

- 

[Inference Refinement (§5)](https://github.com/zesearch/self-improvement-llm#inference-refinement-5)

  - [Decoding Strategies (§5.2)](https://github.com/zesearch/self-improvement-llm#decoding-strategies-52)
    - [Sampling-Based (§5.2.1)](https://github.com/zesearch/self-improvement-llm#sampling-based-521)
    - [Tree Search (§5.2.2)](https://github.com/zesearch/self-improvement-llm#tree-search-522)
    - [Logit and Probability Adjustments (§5.2.3)](https://github.com/zesearch/self-improvement-llm#logit-and-probability-adjustments-523)
    - [Efficiency Methods (§5.2.4)](https://github.com/zesearch/self-improvement-llm#efficiency-methods-524)

  - [Reasoning-Based Improvement (§5.3)](https://github.com/zesearch/self-improvement-llm#reasoning-based-improvement-53)
    - [Feedback-Based Reasoning (§5.3.1)](https://github.com/zesearch/self-improvement-llm#feedback-based-reasoning-531)
    - [Planning-Based Reasoning (§5.3.2)](https://github.com/zesearch/self-improvement-llm#planning-based-reasoning-532)
    - [Collaborative Reasoning (§5.3.3)](https://github.com/zesearch/self-improvement-llm#collaborative-reasoning-533)

  - [Agentic System-Based Improvement (§5.4)](https://github.com/zesearch/self-improvement-llm#agentic-system-based-improvement-54)
    - [Prompt (§5.4.1)](https://github.com/zesearch/self-improvement-llm#prompt-541)
    - [Memory (§5.4.2)](https://github.com/zesearch/self-improvement-llm#memory-542)
    - [Tooling (§5.4.3)](https://github.com/zesearch/self-improvement-llm#tooling-543)
    - [Workflow (§5.4.4)](https://github.com/zesearch/self-improvement-llm#workflow-544)

  - [Test-Time Training (§5.5)](https://github.com/zesearch/self-improvement-llm#test-time-training-55)
    - [TT-SFT (§5.5)](https://github.com/zesearch/self-improvement-llm#tt-sft-55)
    - [TT-RL (§5.5)](https://github.com/zesearch/self-improvement-llm#tt-rl-55)

- 

[Autonomous Evaluation (§6)](https://github.com/zesearch/self-improvement-llm#autonomous-evaluation-6)

  - [Dynamic Benchmarking (§6.2)](https://github.com/zesearch/self-improvement-llm#dynamic-benchmarking-62)
  - [Interactive Environment Evaluation (§6.3)](https://github.com/zesearch/self-improvement-llm#interactive-environment-evaluation-63)

- 

[Challenges and Limitations (§7)](https://github.com/zesearch/self-improvement-llm#challenges-and-limitations-7)

  - [Data Autophagy (§7.1)](https://github.com/zesearch/self-improvement-llm#data-autophagy-71)
  - [Flawed Feedback Signals (§7.2)](https://github.com/zesearch/self-improvement-llm#flawed-feedback-signals-72)
  - [Optimization-Driven Failures (§7.3)](https://github.com/zesearch/self-improvement-llm#optimization-driven-failures-73)
  - [Ineffective Self-Refinement (§7.4)](https://github.com/zesearch/self-improvement-llm#ineffective-self-refinement-74)
  - [Evaluation Bottlenecks (§7.5)](https://github.com/zesearch/self-improvement-llm#evaluation-bottlenecks-75)
  - [Supervision Bottlenecks (§7.6)](https://github.com/zesearch/self-improvement-llm#supervision-bottlenecks-76)

- 

[Applications (§8)](https://github.com/zesearch/self-improvement-llm#applications-8)

  - [Code](https://github.com/zesearch/self-improvement-llm#code)
  - [Math](https://github.com/zesearch/self-improvement-llm#math)
  - [Medicine](https://github.com/zesearch/self-improvement-llm#medicine)
  - [Finance](https://github.com/zesearch/self-improvement-llm#finance)
  - [Algorithm](https://github.com/zesearch/self-improvement-llm#algorithm)
  - [Science](https://github.com/zesearch/self-improvement-llm#science)

## Data Acquisition (§2)

[https://github.com/zesearch/self-improvement-llm#data-acquisition-2](https://github.com/zesearch/self-improvement-llm#data-acquisition-2)

> **§2 Data Acquisition** is the first stage of the self-improvement lifecycle. The model autonomously collects or generates the raw materials necessary for its own evolution, progressing from external discovery (curation) to external exploration (interaction) to internal generation (synthesis).

### Static Curation (§2.2)

[https://github.com/zesearch/self-improvement-llm#static-curation-22](https://github.com/zesearch/self-improvement-llm#static-curation-22)

> **§2.2 Static Curation** acquires raw data from fixed, externally hosted sources (web, code, books), where the model acts as an autonomous data-collecting agent that navigates massive repositories to identify, prioritize, and curate the corpora most valuable for its own evolution.

#### Web Content

[https://github.com/zesearch/self-improvement-llm#web-content](https://github.com/zesearch/self-improvement-llm#web-content)

- [(2023, Mar) [NeurIPS 2022] The BigScience ROOTS Corpus: A 1.6TB Composite Multilingual Dataset](https://arxiv.org/pdf/2303.03915)
- [(2023, Sep) [LREC-COLING 2024] CulturaX: A Cleaned, Enormous, and Multilingual Dataset for Large Language Models in 167 Languages](https://arxiv.org/pdf/2309.09400)
- [(2024, Mar) [LREC-COLING 2024] A New Massive Multilingual Dataset for High-Performance Language Technologies](https://aclanthology.org/2024.lrec-main.100.pdf)
- [(2024, Jun) [NeurIPS 2024] The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale](https://arxiv.org/pdf/2406.17557)
- [(2024, Jun) [NeurIPS 2024] DataComp-LM: In search of the next generation of training sets for language models](https://arxiv.org/pdf/2406.11794)
- [(2025, Feb) [ACL 2025 Findings] Craw4LLM: Efficient Web Crawling for LLM Pretraining](https://aclanthology.org/2025.findings-acl.712.pdf)

#### Code and Scientific Text

[https://github.com/zesearch/self-improvement-llm#code-and-scientific-text](https://github.com/zesearch/self-improvement-llm#code-and-scientific-text)

- [(2019, Nov) [ACL 2020] S2ORC: The Semantic Scholar Open Research Corpus](https://aclanthology.org/2020.acl-main.447.pdf)
- [(2023, Oct) [ICLR 2024] OpenWebMath: An Open Dataset of High-Quality Mathematical Web Text](https://arxiv.org/pdf/2310.06786)
- [(2024, Feb) StarCoder 2 and The Stack v2: The Next Generation](https://arxiv.org/pdf/2402.19173)

#### Automatic Data Preparation

[https://github.com/zesearch/self-improvement-llm#automatic-data-preparation](https://github.com/zesearch/self-improvement-llm#automatic-data-preparation)

- [(2026, Jan) Can LLMs Clean Up Your Mess? A Survey of Application-Ready Data Preparation with LLMs](https://arxiv.org/abs/2601.17058)

### Environment Interaction (§2.3)

[https://github.com/zesearch/self-improvement-llm#environment-interaction-23](https://github.com/zesearch/self-improvement-llm#environment-interaction-23)

> **§2.3 Environment Interaction** enables the model to acquire data by actively interacting with external environments — browsing website, calling APIs, executing code, or operating within simulators — and learning from the resulting feedback through trial and error.

#### Web and Tool Environments

[https://github.com/zesearch/self-improvement-llm#web-and-tool-environments](https://github.com/zesearch/self-improvement-llm#web-and-tool-environments)

- [(2021, Dec) WebGPT: Browser-assisted question-answering with human feedback](https://arxiv.org/pdf/2112.09332)
- [(2023, Feb) [NeurIPS 2023] Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/pdf/2302.04761)
- [(2025, Feb) InSTA: Towards Internet-Scale Training For Agents](https://arxiv.org/pdf/2502.06776)
- [(2025, Jun) Go-Browse: Training Web Agents with Structured Exploration](https://arxiv.org/pdf/2506.03533)
- [(2025, Oct) [TMLR] BrowserAgent: Building Web Agents with Human-Inspired Web Browsing Actions](https://arxiv.org/pdf/2510.10666)
- [(2026, Jan) EnvScaler: Scaling Tool-Interactive Environments for LLM Agent via Programmatic Synthesis](https://arxiv.org/pdf/2601.05808)

#### Code Execution

[https://github.com/zesearch/self-improvement-llm#code-execution](https://github.com/zesearch/self-improvement-llm#code-execution)

- [(2023, Jun) [ICSE 2024] TRACED: Execution-aware Pre-training for Source Code](https://arxiv.org/pdf/2306.07487)
- [(2024, Oct) [ICML 2025] RLEF: Grounding Code LLMs in Execution Feedback with Reinforcement Learning](https://arxiv.org/pdf/2410.02089)
- [(2025, Jan) Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments](https://arxiv.org/pdf/2501.10893)
- [(2025, Sep) Scaling Agents via Continual Pre-training](https://arxiv.org/pdf/2509.13310)
- [(2025, Sep) CWM: An Open-Weights LLM for Research on Code Generation with World Models](https://arxiv.org/pdf/2510.02387)
- [(2025, Oct) CodeRL+: Improving Code Generation via Reinforcement with Execution Semantics Alignment](https://arxiv.org/pdf/2510.18471)

#### Game Environments

[https://github.com/zesearch/self-improvement-llm#game-environments](https://github.com/zesearch/self-improvement-llm#game-environments)

- [(2023, Apr) [UIST 2023] Generative Agents: Interactive Simulacra of Human Behavior](https://arxiv.org/pdf/2304.03442)
- [(2023, Nov) [COLING 2025] ALYMPICS: LLM Agents Meet Game Theory](https://aclanthology.org/2025.coling-main.193.pdf)
- [(2025, Dec) Understanding LLM Agent Behaviours via Game Theory: Strategy Recognition, Biases and Multi-Agent Dynamics](https://arxiv.org/pdf/2512.07462)

### Synthetic Generation (§2.4)

[https://github.com/zesearch/self-improvement-llm#synthetic-generation-24](https://github.com/zesearch/self-improvement-llm#synthetic-generation-24)

> **§2.4 Synthetic Generation** is where the model completely detaches from external environments and uses its intrinsic capabilities to produce entirely new training data — instructions, reasoning chains, or dialogues — through prompting, transformation, or multi-model interaction.

#### Prompt-Based (§2.4.1)

[https://github.com/zesearch/self-improvement-llm#prompt-based-241](https://github.com/zesearch/self-improvement-llm#prompt-based-241)

> **§2.4.1 Prompt-Based Generation** uses an LLM to generate new training examples from scratch or from seed examples via carefully designed prompts, iteratively amplifying a small set of seeds into a large corpus.

- [(2022, Dec) [ACL 2023] Self-Instruct: Aligning Language Models with Self-Generated Instructions](https://arxiv.org/pdf/2212.10560)
- [(2023, Apr) [ICLR 2024] WizardLM: Empowering Large Pre-Trained Language Models to Follow Complex Instructions](https://arxiv.org/pdf/2304.12244)
- [(2023, May) TinyStories: How Small Can Language Models Be and Still Speak Coherent English?](https://arxiv.org/pdf/2305.07759)
- [(2023, Jun) [NeurIPS 2023] Large Language Model as Attributed Training Data Generator: A Tale of Diversity and Bias](https://arxiv.org/pdf/2306.15895)
- [(2023, Jun) Textbooks Are All You Need](https://arxiv.org/pdf/2306.11644)
- [(2023, Sep) Textbooks Are All You Need II: phi-1.5 technical report](https://arxiv.org/pdf/2309.05463)
- [(2024, Mar) Cosmopedia: how to create large-scale synthetic data for pre-training](https://huggingface.co/blog/cosmopedia)
- [(2024, Apr) Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone](https://arxiv.org/pdf/2404.14219)
- [(2024, Apr) [Findings of NAACL 2024] CodecLM: Aligning Language Models with Tailored Synthetic Data](https://arxiv.org/pdf/2404.05875)
- [(2024, Oct) [ICLR 2025] MIND: Math Informed syNthetic Dialogues for Pretraining LLMs](https://arxiv.org/pdf/2410.12881)
- [(2024, Oct) [MATH-AI Workshop, NeurIPS 2024] Constraint-Based Synthetic Data Generation for LLM Mathematical Reasoning](https://files.sri.inf.ethz.ch/z3_llm/z3_llm.pdf)
- [(2024, Dec) Phi-4 Technical Report](https://arxiv.org/pdf/2412.08905)
- [(2025, Jul) CoT-Self-Instruct: Building high-quality synthetic prompts for reasoning and non-reasoning tasks](https://arxiv.org/pdf/2507.23751)

#### Transformation-Based (§2.4.2)

[https://github.com/zesearch/self-improvement-llm#transformation-based-242](https://github.com/zesearch/self-improvement-llm#transformation-based-242)

> **§2.4.2 Transformation-Based Generation** takes an existing corpus as input and uses an LLM to rewrite, reformat, or extract new training examples, converting raw data into more structured or pedagogically useful forms.

- [(2024, Jan) [ACL 2024] Rephrasing the Web: A Recipe for Compute and Data-Efficient Language Modeling](https://arxiv.org/pdf/2401.16380)
- [(2024, Jun) [EMNLP 2024] Instruction Pre-Training: Language Models are Supervised Multitask Learners](https://arxiv.org/pdf/2406.14491)
- [(2025, Feb) Synthetic Text Generation for Training Large Language Models via Gradient Matching](https://arxiv.org/pdf/2502.17607)
- [(2025, Mar) Scaling Laws of Synthetic Data for Language Models](https://arxiv.org/pdf/2503.19551)
- [(2025, Sep) Synthetic bootstrapped pretraining](https://arxiv.org/pdf/2509.15248)
## gBrain Temporal Metadata

- content_timestamp: 2019
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

