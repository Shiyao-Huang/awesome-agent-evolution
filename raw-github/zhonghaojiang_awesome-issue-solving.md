---
repo: zhonghaojiang/awesome-issue-solving
url: https://github.com/zhonghaojiang/awesome-issue-solving
content_timestamp: 2026-01-06
time_slice: 2026-01
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ZhonghaoJiang/Awesome-Issue-Solving: Agentic Software Issue Resolution with Large Language Models: A Survey · GitHub

**Source**: https://github.com/zhonghaojiang/awesome-issue-solving

---

[Skip to content](https://github.com/zhonghaojiang/awesome-issue-solving#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ZhonghaoJiang](https://github.com/ZhonghaoJiang)

/
**[Awesome-Issue-Solving](https://github.com/ZhonghaoJiang/Awesome-Issue-Solving)**

Public

- [Notifications](https://github.com/login?return_to=%2FZhonghaoJiang%2FAwesome-Issue-Solving)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2FZhonghaoJiang%2FAwesome-Issue-Solving)
- 
[Star
          9](https://github.com/login?return_to=%2FZhonghaoJiang%2FAwesome-Issue-Solving)

[https://github.com/ZhonghaoJiang/Awesome-Issue-Solving](https://github.com/ZhonghaoJiang/Awesome-Issue-Solving)

[Branches](https://github.com/ZhonghaoJiang/Awesome-Issue-Solving/branches)[Tags](https://github.com/ZhonghaoJiang/Awesome-Issue-Solving/tags)

[https://github.com/ZhonghaoJiang/Awesome-Issue-Solving/branches](https://github.com/ZhonghaoJiang/Awesome-Issue-Solving/branches)[https://github.com/ZhonghaoJiang/Awesome-Issue-Solving/tags](https://github.com/ZhonghaoJiang/Awesome-Issue-Solving/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History31 Commits31 Commits |  |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Agentic Software Issue Resolution with Large Language Models: A Survey

[https://github.com/zhonghaojiang/awesome-issue-solving#agentic-software-issue-resolution-with-large-language-models-a-survey](https://github.com/zhonghaojiang/awesome-issue-solving#agentic-software-issue-resolution-with-large-language-models-a-survey)

## 📰 News

[https://github.com/zhonghaojiang/awesome-issue-solving#-news](https://github.com/zhonghaojiang/awesome-issue-solving#-news)

- 📅 **2026.01**: Paper update! We add 34 papers from 2025.10 to 2025.12. Now, we have included 160 papers in this survey.
- 📅 **2025.12**: We release the first [survey](https://arxiv.org/abs/2512.22256) on agentic software issue resolution!
- 📅 **2025.10**: We summarize 126 papers about issue resolution, from 2023.10 to 2025.10!

## Introduction

[https://github.com/zhonghaojiang/awesome-issue-solving#introduction](https://github.com/zhonghaojiang/awesome-issue-solving#introduction)

We classified this survey into three main parts: `Benchmarks`, `Technologies` and `Empirical Studies`.

Up to 2026-01-06, automated issue solving `technologies` can be mainly surveyed from 2 perspectives: `Scaffold Design` and `Learning Strategy`.

## Table of Contents

[https://github.com/zhonghaojiang/awesome-issue-solving#table-of-contents](https://github.com/zhonghaojiang/awesome-issue-solving#table-of-contents)

- [Benchmarks](https://github.com/zhonghaojiang/awesome-issue-solving#benchmarks)
- [Technologies](https://github.com/zhonghaojiang/awesome-issue-solving#technologies)
  - [Scaffold Design](https://github.com/zhonghaojiang/awesome-issue-solving#scaffold-design)
    - [End-to-End](https://github.com/zhonghaojiang/awesome-issue-solving#end-to-end)
    - [Single-Phased](https://github.com/zhonghaojiang/awesome-issue-solving#single-phased)
      - [Issue Localization](https://github.com/zhonghaojiang/awesome-issue-solving#issue-localization)
      - [Issue Reproduction](https://github.com/zhonghaojiang/awesome-issue-solving#issue-reproduction)

  - [Learning Strategy](https://github.com/zhonghaojiang/awesome-issue-solving#learning-strategy)
    - [Data](https://github.com/zhonghaojiang/awesome-issue-solving#data)
    - [Training](https://github.com/zhonghaojiang/awesome-issue-solving#training)

- [Empirical Studies](https://github.com/zhonghaojiang/awesome-issue-solving#empirical-studies)

## Benchmarks

[https://github.com/zhonghaojiang/awesome-issue-solving#benchmarks](https://github.com/zhonghaojiang/awesome-issue-solving#benchmarks)

For `Benchmarks`, we summarized the existing benchmarks into 2 categories for their different tasks.

> @End-To-End
>  @Reproduction Test Generation
>  @Localization

| Literature | Name | Scope | Journal/Conference | Time | Link |
|---|---|---|---|---|---|
| SWE-bench: Can Language Models Resolve Real-World GitHub Issues? | SWE-bench | End-To-End | ICLR'24 | 2023-10 | PaperCode |
| SWT-Bench: Testing and Validating Real-World Bug-Fixes with Code Agents | SWT-Bench | Reproduction Test Generation | NeurIPS'24 | 2024-06 | PaperCode |
| SWE-bench-java: A GitHub Issue Resolving Benchmark for Java | Muti-SWE-bench | End-To-End | ARXIV | 2024-08 | PaperCode |
| SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains? | SWE-bench Mutimodal | End-To-End | ICLR'25 | 2024-10 | PaperCode |
| SWE-Bench+: Enhanced Coding Benchmark for LLMs | SWE-Bench+ | End-To-End | ARXIV | 2024-10 | Paper |
| TestGenEval: A Real World Unit Test Generation and Test Completion Benchmark | TestGenEval | Reproduction Test Generation | ICLR'25 | 2024-10 | PaperCode |
| A Real-World Benchmark for Evaluating Fine-Grained Issue Solving Capabilities of Large Language Models | FAUN-Eval | End-To-End | ARXIV | 2024-11 | Paper |
| TDD-Bench Verified: Can LLMs Generate Tests for Issues Before They Get Resolved? | TDD-Bench | Reproduction Test Generation | ARXIV | 2024-11 | PaperCode |
| CodeV: Issue Resolving with Visual Data | Visual SWE-bench | End-To-End | ACL Findings'25 | 2024-12 | PaperCode |
| Multi-SWE-bench: A Multilingual Benchmark for Issue Resolving | Muti-SWE-bench | End-To-End | ARXIV | 2025-04 | PaperCode |
| LiveSWEBench | LiveSWEBench | End-To-End | BLOG | 2025-04 | linkCode |
| LocAgent: Graph-Guided LLM Agents for Code Localization | LocBench | Localization | ARXIV | 2025-03 | PaperCode |
| Automated Benchmark Generation for Repository-Level Coding Tasks | SWEE-Bench/SWA-Bench | End-To-End | ARXIV | 2025-03 | Paper |
| FEA-Bench: A Benchmark for Evaluating Repository-Level Code Generation for Feature Implementation | FEA-Bench | End-To-End | ACL'25 | 2025-03 | PaperCode |
| OmniGIRL: A Multilingual and Multimodal Benchmark for GitHub Issue Resolution | OmniGIRL | End-To-End | ISSTA'25 | 2025-05 | PaperCode |
| - | SWE-bench Multilingual | End-To-End | BLOG | 2025-05 | linkCode |
| SWE-PolyBench: A multi-language benchmark for repository level evaluation of coding agents | SWE-PolyBench | End-To-End | ARXIV | 2025-04 | PaperCode |
| SWE-rebench: An Automated Pipeline for Task Collection and Decontaminated Evaluation of Software Engineering Agents | SWE-rebench | End-To-End | ARXIV | 2025-05 | PaperCode |
| GSO: Challenging Software Optimization Tasks for Evaluating SWE-Agents | GSO | End-To-End | NeurIPS'25 | 2025-05 | PaperCode |
| SWE-bench Goes Live! | SWE-bench-Live | End-To-End | ARXIV | 2025-05 | PaperCode |
| UTBoost: Rigorous Evaluation of Coding Agents on SWE-Bench | UTBoost | - | ARXIV | 2025-06 | PaperCode |
| SWE-Factory: Your Automated Factory for Issue Resolution Training Data and Evaluation Benchmarks | SWE-Factory | End-To-End | ARXIV | 2025-06 | PaperCode |
| SwingArena: Competitive Programming Arena for Long-context GitHub Issue Solving | Swing-Arena | End-To-End | ARXIV | 2025-06 | PaperCode |
| SPICE: An Automated SWE-Bench Labeling Pipeline for Issue Clarity, Test Coverage, and Effort Estimation | SPICE | - | ASE'25 | 2025-07 | Paper |
| SWE-MERA: A Dynamic Benchmark for Agenticly Evaluating Large Language Models on Software Engineering Tasks | SWE-MERA | End-To-End | ARXIV | 2025-07 | Paper |
| SWE-Perf: Can Language Models Optimize Code Performance on Real-World Repositories? | SWE-Perf | End-To-End | ARXIV | 2025-07 | PaperCode |
| NoCode-bench: A Benchmark for Evaluating Natural Language-Driven Feature Addition | NoCode-bench | End-To-End | ARXIV | 2025-08 | PaperCode |
| SWE-Bench Pro: Can AI Agents Solve Long-Horizon Software Engineering Tasks? | SWE-Bench Pro | End-To-End | ARXIV | 2025-09 | PaperCode |
| SWE-QA: Can Language Models Answer Repository-level Code Questions? | SWE-QA-Bench | QA | ARXIV | 2025-09 | PaperCode |
| A Benchmark for Localizing Code and Non-Code Issues in Software Projects | MULocBench | Localization | ARXIV | 2025-10 | PaperCode |
| SWE-Compass: Towards Unified Evaluation of Agentic Coding Abilities for Large Language Models | SWE-Compass | End-To-End | ARXIV | 2025-11 | PaperCode |
| SWE-fficiency: Can Language Models Optimize Real-World Repositories on Real Workloads? | SWE-fficiency | End-To-End | ARXIV | 2025-11 | PaperCode |
| SWE-Bench++: A Framework for the Scalable Generation of Software Engineering Benchmarks from Open-Source Repositories | SWE-Bench++ | End-To-End | ARXIV | 2025-12 | PaperCode |
| SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution Scenarios | SWE-EVO | End-To-End | ARXIV | 2025-12 | PaperCode |

## Technologies

[https://github.com/zhonghaojiang/awesome-issue-solving#technologies](https://github.com/zhonghaojiang/awesome-issue-solving#technologies)

### Scaffold Design

[https://github.com/zhonghaojiang/awesome-issue-solving#scaffold-design](https://github.com/zhonghaojiang/awesome-issue-solving#scaffold-design)

From the perspective of `Design Paradigms`, we can classify them into 2 categories following benchmarks:

> @End-To-End
>  @Single-Phased

#### End-to-End

[https://github.com/zhonghaojiang/awesome-issue-solving#end-to-end](https://github.com/zhonghaojiang/awesome-issue-solving#end-to-end)

For End-To-End Method, we can further classify them into 2 categories:

> @Agent-Based Method
>  @Pipeline-Based Method

| Literature | Name | Journal/Conference | Time | Label | URL |
|---|---|---|---|---|---|
| SWE-bench: Can Language Models Resolve Real-World GitHub Issues? | BM25 RAG | ICLR 2024 | 2023-10 | @Pipeline | PaperCode |
| SWE-agent: Agent-computer interfaces enable automated software engineering | SWE-Agent | NeurIPS 2024 | 2024-05 | @Agent | PaperCode |
| Autocoderover: Autonomous program improvement | AutoCodeRover | ISSTA 2024 | 2024-04 | @Agent | PaperCode |
| CodeR: Issue Resolving with Multi-Agent and Task Graphs | CodeR | Arxiv | 2024-06 | @Agent | PaperCode |
| Alibaba LingmaAgent: Improving Automated Issue Resolution via Comprehensive Repository Exploration | LingmaAgent/RepoUnderstander | FSE Companion 2025 | 2024-06 | @Agent | PaperCode |
| MAGIS: LLM-Based Multi-Agent Framework for GitHub Issue Resolution | MAGIS | NeurIPS 2024 | 2024-03 | @Agent | Paper Code |
| MASAI: Modular Architecture for Software-engineering AI Agents | MASAI | Arxiv | 2024-06 | @Agent | Paper |
| OpenDevin: An Open Platform forAI Software Developers as Generalist Agents | OpenDevin(AllHands) | Arxiv | 2024-06 | @Agent | Paper |
| Agentless: Demystifying llm-based software engineering agents | Agentless | FSE 2025 | 2024-07 | @Pipeline | PaperCode |
| OpenHands: An Open Platform for AI Software Developers as Generalist Agents | OpenHands | ICLR 2025 | 2024-07 | @Agent | PaperCode |
| Specrover: Code intent extraction via llms | SpecRover (AutoCodeRover-v2) | ICSE 2025 | 2024-08 | @Agent | PaperCode |
| CodexGraph: Bridging Large Language Models and Code Repositories via Code Graph Databases | CodexGraph | Arxiv | 2024-08 | @Agent | PaperCode |
| SuperCoder2.0: Technical Report on Exploring the feasibility of LLMs as Autonomous Programmer | SuperCoder | Arxiv | 2024-09 | @Agent | Paper |
| Hyperagent: Generalist software engineering agents to solve coding tasks at scale | HyperAgent | Arxiv | 2024-09 | @Agent | Paper |
| RepoGraph: Enhancing AI Software Engineering with Repository-level Code Graph | RepoGraph | ICLR 2025 | 2024-10 | @Pipeline | PaperCode |
| SWE-Search: Enhancing Software Agents with Monte Carlo Tree Search and Iterative Refinement | SWE-Search | ICLR 2025 | 2024-10 | @Agent | PaperCode |
| OpenHands: An Open Platform for AI Software Developers as Generalist Agents | OpenHands CodeAct | ICLR 2025 | 2024-10 | @Agent | PaperCode |
| - | Composio SWE-Kit | Blog | 2024-10 | @Pipeline | LinkCode |
| Infant Agent: A Tool-Integrated, Logic-Driven Agent with Cost-Effective API Usage | Infant Agent | Arxiv | 2024-11 | @Agent | Paper |
| MarsCode Agent: AI-native Automated Bug Fixing | MarsCode Agent | Arxiv | 2024-11 | @Agent | Paper |
| Lingma SWE-GPT: An Open Development-Process-Centric Language Model for Automated Software Improvement | SWESynInfer | FSE 2025 Industry | 2024-11 | @Pipeline | PaperCode |
| - | Nebius AI | Blog | 2024-11 | @Agent | Paper |
| CodeV: Issue Resolving with Visual Data | CodeV | Arxiv | 2024-12 | @Pipeline | PaperCode |
| - | Aide | Blog | 2024-12 | @Agent | Link |
| Learn-by-interact: A Data-Centric Framework for Self-Adaptive Agents in Realistic Environments | Learn-By-Interact | Arxiv | 2025-01 | @Agent | Paper |
| PatchPilot: A Stable and Cost-Efficient Agentic Patching Framework | PatchPilot | ICML 2025 | 2025-02 | @Pipeline | PaperCode |
| CodeMonkeys: Scaling Test-Time Compute for Software Engineering | CodeMonkeys | Arxiv | 2025-02 | @Pipeline | PaperCode |
| SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution | Agentless Mini | ARXIV | 2025-02 | @Pipeline | PaperCode |
| - | Agentless Lite | Blog | 2025-02 | @Pipeline | Code |
| - | Syntheo | Blog | 2025-02 | @Agent | Link |
| SWE-Fixer: Training Open-Source LLMs for Effective and Efficient GitHub Issue Resolution | SWE-Fixer | ACL Findings 2025 | 2025-02 | @Pipeline | Paper |
| - | AgentScope | Blog | 2025-03 | @Agent | Link |
| DARS: Dynamic Action Re-Sampling to Enhance Coding Agent Performance by Adaptive Tree Traversal | DARS | Arxiv | 2025-03 | @Agent | PaperCode |
| Enhancing Repository-Level Software Repair via Repository-Aware Knowledge Graphs | KGCompass | Arxiv | 2025-03 | @Pipeline | Paper |
| - | Augment Agent v0 | Blog | 2025-03 | @Agent | Link Code |
| - | CORTEXA | Blog | 2025-03 | @Pipeline | Link |
| - | Refact.ai | Blog | 2025-03 | @Agent | Link Code |
| - | Lingxi | Blog | 2025-04 | @Agent | Link Code |
| - | Trae IDE | Blog | 2025-05 | @Agent | Link |
| - | devlo | Blog | 2025-05 | @Agent | Link |
| Putting It All into Context: Simplifying Agents with LCLMs | LCLM | Arxiv | 2025-05 | @Pipeline | Paper |
| Code Graph Model (CGM): A Graph-Integrated Large Language Model for Repository-Level Software Engineering Tasks | CGM-SWE-PY | NeurIPS'25 | 2025-05 | @Pipeline | Paper |
| InfantAgent-Next: A Multimodal Generalist Agent for Automated Computer Interaction | InfantAgent-Next | Arxiv | 2025-05 | @Agent | PaperCode |
| Coding Agents with Multimodal Browsing are Generalist Problem Solvers | OpenHands-Versa | Arxiv | 2025-06 | @Agent | PaperCode |
| EXPEREPAIR: Dual-Memory Enhanced LLM-based Repository-Level Program Repair | EXPEREPAIR | Arxiv | 2025-06 | @Agent | Paper |
| Seeing is Fixing: Cross-Modal Reasoning with Multimodal LLMs for Visual Software Issue Fixing | GUIRepair | ASE'25 | 2025-06 | @Pipeline | Paper |
| SemAgent: A Semantics Aware Program Repair Agent | SemAgent | Arxiv | 2025-06 | @Pipeline | Paper |
| Nemotron-Cortexa: Enhancing LLM Agents for Software Engineering Tasks via Improved Localization and Solution Diversity | Nemotron-Cortexa | ICML'25 | 2025-06 | @Pipeline | PaperCode |
| Agent KB: Leveraging Cross-Domain Experience for Agentic Problem Solving | Agent KB | Arxiv | 2025-07 | @Agent | PaperCode |
| Prometheus: Unified Knowledge Graphs for Issue Resolution in Multilingual Codebases | Prometheus | Arxiv | 2025-07 | @Agent | PaperCode |
| SWE-Exp: Experience-Driven Software Issue Resolution | SWE-Exp | Arxiv | 2025-07 | @Agent | PaperCode |
| SWE-Debate: Competitive Multi-Agent Debate for Software Issue Resolution | SWE-Debate | Arxiv | 2025-07 | @Agent | PaperCode |
| Trae Agent: An LLM-based Agent for Software Engineering with Test-time Scaling | Trae Agent | Arxiv | 2025-07 | @Agent | PaperCode |
| SynFix: Dependency-Aware Program Repair via RelationGraph Analysis | SynFix | ACL Findings'25 | 2025-07 | @Pipeline | Paper |
| SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning with LLM-Based Agents | SE-Agent | NeurIPS'25 | 2025-08 | @Agent | PaperCode |
| CoreThink: A Symbolic Reasoning Layer to reason over Long Horizon Tasks with LLMs | CoreThink | Arxiv | 2025-09 | @Agent | Paper |
| Improving the Efficiency of LLM Agent Systems through Trajectory Reduction | AgentDiet | FSE'26 | 2025-09 | @Agent | Paper |
| Lita: Light Agent Uncovers the Agentic Coding Capabilities of LLMs | Lita | Arxiv | 2025-10 | @Agent | Paper |
| Lingxi: Repository-Level Issue Resolution Framework Enhanced by Procedural Knowledge Guided Scaling | Lingxi | Arxiv | 2025-10 | @Agent | PaperCode |
| SIADAFIX: issue description response for adaptive program repair | SIADAFIX | Arxiv | 2025-10 | @Agent | PaperCode |
| TOM-SWE: User Mental Modeling For Software Engineering Agents | TOM-SWE | Arxiv | 2025-10 | @Agent | PaperCode |
| TDFlow: Agentic Workflows for Test Driven Software Engineering | TDFlow | Arxiv | 2025-10 | @Pipeline | Paper |
| Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly? | Live-SWE-agent | Arxiv | 2025-11 | @Agent | Paper Code |
| InfCode: Adversarial Iterative Refinement of Tests and Patches for Reliable Software Issue Resolution | InfCode | Arxiv | 2025-11 | @Agent | Paper |
| Confucius Code Agent: An Open-sourced AI Software Engineer at Industrial Scale | CCA | Arxiv | 2025-12 | @Agent | Paper |

#### Single-Phased

[https://github.com/zhonghaojiang/awesome-issue-solving#single-phased](https://github.com/zhonghaojiang/awesome-issue-solving#single-phased)

For Single-Phased Method, we discuss them in 3 categories separately:

> @Localization
>  @Reproduction @Regression

where, `@Reproduction` indicates the reproduction test generation, `@Regression` indicates the regression test selection.

##### Issue Localization

[https://github.com/zhonghaojiang/awesome-issue-solving#issue-localization](https://github.com/zhonghaojiang/awesome-issue-solving#issue-localization)

| Literature | Name | Journal/Conference | Time | URL |
|---|---|---|---|---|
| BLAZE: Cross-Language and Cross-Project Bug Localization via Dynamic Chunking and Hard Example Learning | BLAZE | Arxiv | 2024-08 | PaperCode |
| OrcaLoca: An LLM Agent Framework for Software Issue Localization | OrcaLoca | ICML 2025 | 2025-02 | PaperCode |
| Bridging Bug Localization and Issue Fixing: A Hierarchical Localization Framework Leveraging Large Language Models | BugCerberus | Arxiv | 2025-02 | Paper |
| LocAgent: Graph-Guided LLM Agents for Code Localization | LocAgent | ACL 2025 | 2025-03 | PaperCode |
| CoSIL: Software Issue Localization via LLM-Driven Code Repository Graph Searching | CoSIL | ASE 2025 | 2025-03 | PaperCode |
| CORNSTACK: HIGH-QUALITY CONTRASTIVE DATA FOR BETTER CODE RETRIEVAL AND RERANKING | CoRNStack | ICLR 2025 | 2025-03 | PaperCode |
| SweRank: Software Issue Localization with Code Ranking | SweRank | Arxiv | 2025-05 | PaperCode |
| CoRet: Improved Retriever for Code Editing | CoRet | Arxiv | 2025-06 | Paper |
| SACL: Understanding and Combating Textual Bias in Code Retrieval with Semantic-Augmented Reranking and Localization | SACL | Arxiv | 2025-07 | Paper |
| Meta-RAG on Large Codebases Using Code Summarization | Meta-RAG | Arxiv | 2025-08 | Paper |
| Tool-integrated Reinforcement Learning for Repo Deep Search | RepoSearcher | Arxiv | 2025-08 | Paper |
| Improving Code Localization with Repository Memory | RepoMem | Arxiv | 2025-10 | Paper |
| Hierarchical Reward Modeling for Fault Localization in Large Code Repositories | HiLoRM | EMNLP Findings 2026 | 2025-11 | PaperCode |
| SweRank+: Multilingual, Multi-Turn Code Ranking for Software Issue Localization | SweRank+ | Arxiv | 2025-12 | PaperCode |
| One Tool Is Enough: Reinforcement Learning for Repository-Level LLM Agents | RepoNavigator | Arxiv | 2025-12 | Paper |
| GraphLocator: Graph-guided Causal Reasoning for Issue Localization | GraphLocator | FSE 2026 | 2025-12 | Paper |

##### Issue Reproduction

[https://github.com/zhonghaojiang/awesome-issue-solving#issue-reproduction](https://github.com/zhonghaojiang/awesome-issue-solving#issue-reproduction)

| Literature | Name | Journal/Conference | Time | URL |
|---|---|---|---|---|
| AEGIS: An Agent-based Framework for General Bug Reproduction from Issue Descriptions | AEGIS | FSE 2025 Industry | 2024-11 | Paper |
| LLMs as Continuous Learners: Improving the Reproduction of Defective Code in Software Issues | EvoCoder | ARXIV | 2024-11 | Paper |
| Agentic Bug Reproduction for Effective Automated Program Repair at Google | BRT Agent | Arxiv | 2025-02 | Paper |
| Otter: Generating Tests from Issues to Validate SWE Patches | Otter | ICML 2025 | 2025-02 | Paper |
| Issue2Test: Generating Reproducing Test Cases from Issue Reports | Issue2Test | Arxiv | 2025-03 | Paper |
| AssertFlip: Reproducing Bugs via Inversion of LLM-Generated Passing Tests | AssertFlip | Arxiv | 2025-07 | Paper |
| Execution-Feedback Driven Test Generation from SWE Issues | Otter++ | Arxiv | 2025-08 | Paper |
| Automated Generation of Issue-Reproducing Tests by Combining LLMs and Search-Based Testing | BLAST | Arxiv | 2025-09 | PaperCode |

##### Regression Test Selection

[https://github.com/zhonghaojiang/awesome-issue-solving#regression-test-selection](https://github.com/zhonghaojiang/awesome-issue-solving#regression-test-selection)

| Literature | Name | Journal/Conference | Time | URL |
|---|---|---|---|---|
| When Old Meets New: Evaluating the Impact of Regression Tests on SWE Issue Resolution | TestPrune | Arxiv | 2025-10 | Paper |

### Learning Strategy

[https://github.com/zhonghaojiang/awesome-issue-solving#learning-strategy](https://github.com/zhonghaojiang/awesome-issue-solving#learning-strategy)

From the perspective of `Learning Strategy`, we discuss them in 2 aspects:

> @Data
>  @Training

#### Data

[https://github.com/zhonghaojiang/awesome-issue-solving#data](https://github.com/zhonghaojiang/awesome-issue-solving#data)

| Literature | Name | Journal/Conference | Time | URL |
|---|---|---|---|---|
| R2E: Turning any GitHub Repository into a Programming Agent Environment | R2E | ICML 2024 | 2024-07 | PaperCode |
| Training Software Engineering Agents and Verifiers with SWE-Gym | SWE-Gym | ICML 2025 | 2024-12 | PaperCode |
| R2E-Gym: Procedural Environments and Hybrid Verifiers for Scaling Open-Weights SWE Agents | R2E-Gym | ARXIV | 2024-04 | PaperCode |
## gBrain Temporal Metadata

- content_timestamp: 2026-01-06
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

