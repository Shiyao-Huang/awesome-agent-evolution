---
repo: tsinghuac3i/awesome-memory-for-agents
url: https://github.com/tsinghuac3i/awesome-memory-for-agents
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - TsinghuaC3I/Awesome-Memory-for-Agents: A Collection of Papers about Memory for Language Agents · GitHub

**Source**: https://github.com/tsinghuac3i/awesome-memory-for-agents

---

[Skip to content](https://github.com/tsinghuac3i/awesome-memory-for-agents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[TsinghuaC3I](https://github.com/TsinghuaC3I)

/
**[Awesome-Memory-for-Agents](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents)**

Public

- [Notifications](https://github.com/login?return_to=%2FTsinghuaC3I%2FAwesome-Memory-for-Agents)You must be signed in to change notification settings
- [Fork
    35](https://github.com/login?return_to=%2FTsinghuaC3I%2FAwesome-Memory-for-Agents)
- 
[Star
          506](https://github.com/login?return_to=%2FTsinghuaC3I%2FAwesome-Memory-for-Agents)

[https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents)

[Branches](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/branches)[Tags](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/tags)

[https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/branches](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/branches)[https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/tags](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History38 Commits38 Commits |  |  |  |
| assets | assets |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome-Memory-for-Agents

[https://github.com/tsinghuac3i/awesome-memory-for-agents#awesome-memory-for-agents](https://github.com/tsinghuac3i/awesome-memory-for-agents#awesome-memory-for-agents)

The paper list is maintained by Hongyi Liu, Yu Fu, Kaiyan Zhang, contributed by Yuxin Zuo, Che Jiang, Guoli Jia, Yuru Wang, Kaikai Zhao, Yuchen Fan, Zhenzhao Yuan, Kai Tian, Weizhi Wang.

[https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/blob/main/assets/cover.png](https://github.com/TsinghuaC3I/Awesome-Memory-for-Agents/blob/main/assets/cover.png)

## Table of Contents

[https://github.com/tsinghuac3i/awesome-memory-for-agents#table-of-contents](https://github.com/tsinghuac3i/awesome-memory-for-agents#table-of-contents)

- [Awesome-Memory-for-Agents](https://github.com/tsinghuac3i/awesome-memory-for-agents#awesome-memory-for-agents)
  - [Table of Contents](https://github.com/tsinghuac3i/awesome-memory-for-agents#table-of-contents)
  - [Overview](https://github.com/tsinghuac3i/awesome-memory-for-agents#overview)
  - [Paper List](https://github.com/tsinghuac3i/awesome-memory-for-agents#paper-list)
    - [Application](https://github.com/tsinghuac3i/awesome-memory-for-agents#application)
      - [Personalization](https://github.com/tsinghuac3i/awesome-memory-for-agents#personalization)
      - [Learning from Experience](https://github.com/tsinghuac3i/awesome-memory-for-agents#learning-from-experience)
      - [Long-horizon Agentic Task](https://github.com/tsinghuac3i/awesome-memory-for-agents#long-horizon-agentic-task)

    - [Survey](https://github.com/tsinghuac3i/awesome-memory-for-agents#survey)
    - [Benchmark](https://github.com/tsinghuac3i/awesome-memory-for-agents#benchmark)
    - [Product & Project](https://github.com/tsinghuac3i/awesome-memory-for-agents#product--project)

## Overview

[https://github.com/tsinghuac3i/awesome-memory-for-agents#overview](https://github.com/tsinghuac3i/awesome-memory-for-agents#overview)

This repository provides a curated list of papers on agent memory, structured by a core taxonomy. We first divide agent memory based on its persistence:

- **Short-Term Memory:** Transient information managed within the context window for a single task;
- **Long-Term Memory:** Persistent information stored externally across tasks.

Within *Long-Term Memory*, we further distinguish based on its reliance on task outcomes (success/failure) for curation:

- **Experience** involves knowledge explicitly validated by task outcomes;
- **Memory** denotes information without reference to task outcomes.

This taxonomy maps directly to the three primary application scenarios that organize the papers in this repository:

| Application | Memory Content | Description |
|---|---|---|
| Personalization | User profiles, interaction history, facts, etc. | Continuous personalized interaction, mainly targeting the conversation scenario and using an external memory pool with retrieval-based memory interaction |
| Learning from Experience | Trajectories, success/failure lessons, reusable skills, etc. | Cross-task experience accumulation & transfer |
| Long-horizon Agentic Task | Intermediate results, reasoning traces, environmental observations, etc. | Context management within a single long-horizon task via summarization, reflection, or scratchpad, etc. |

## Paper List

[https://github.com/tsinghuac3i/awesome-memory-for-agents#paper-list](https://github.com/tsinghuac3i/awesome-memory-for-agents#paper-list)

### Application

[https://github.com/tsinghuac3i/awesome-memory-for-agents#application](https://github.com/tsinghuac3i/awesome-memory-for-agents#application)

#### Personalization

[https://github.com/tsinghuac3i/awesome-memory-for-agents#personalization](https://github.com/tsinghuac3i/awesome-memory-for-agents#personalization)

| Date | Title | Paper |
|---|---|---|
| 2026-04 | FileGram: Grounding Agent Personalization in File-System Behavioral Traces |  |
| 2026-01 | Membox: Weaving Topic Continuity into Long-Range Memory for LLM Agents |  |
| 2026-01 | Grounding Agent Memory in Contextual Intent |  |
| 2026-01 | Continuum Memory Architectures for Long-Horizon LLM Agents |  |
| 2026-01 | SwiftMem: Fast Agentic Memory via Query-aware Indexing |  |
| 2026-01 | AtomMem : Learnable Dynamic Agentic Memory with Atomic Memory Operation |  |
| 2026-01 | Beyond Static Summarization: Proactive Memory Extraction for LLM Agents |  |
| 2026-01 | TeleMem: Building Long-Term and Multimodal Memory for Agentic AI |  |
| 2026-01 | HiMem: Hierarchical Long-Term Memory for LLM Long-Horizon Agents |  |
| 2026-01 | SYNAPSE: Empowering LLM Agents with Episodic-Semantic Memory via Spreading Activation |  |
| 2026-01 | TiMem: Temporal-Hierarchical Memory Consolidation for Long-Horizon Conversational Agents |  |
| 2026-01 | SimpleMem: Efficient Lifelong Memory for LLM Agents |  |
| 2026-01 | MAGMA: A Multi-Graph based Agentic Memory Architecture for AI Agents |  |
| 2026-01 | EverMemOS: A Self-Organizing Memory Operating System for Structured Long-Horizon Reasoning |  |
| 2026-01 | CogCanvas: Verbatim-Grounded Artifact Extraction for Long LLM Conversations |  |
| 2026-01 | Agentic Memory: Learning Unified Long-Term and Short-Term Memory Management for Large Language Model Agents |  |
| 2026-01 | Beyond Dialogue Time: Temporal Semantic Memory for Personalized LLM Agents |  |
| 2026-01 | MemRec: Collaborative Memory-Augmented Agentic Recommender System |  |
| 2025-12 | Memory-T1: Reinforcement Learning for Temporal Reasoning in Multi-session Agents |  |
| 2025-11 | O-Mem: Omni Memory System for Personalized, Long Horizon, Self-Evolving Agents |  |
| 2025-11 | LiCoMemory: Lightweight and Cognitive Agentic Memory for Efficient Long-Term Reasoning |  |
| 2025-11 | Mem-PAL: Towards Memory-based Personalized Dialogue Assistants for Long-term User-Agent Interaction |  |
| 2025-10 | TOM-SWE: User Mental Modeling For Software Engineering Agents |  |
| 2025-10 | PISA: A Pragmatic Psych-Inspired Unified Memory System for Enhanced AI Agency |  |
| 2025-10 | EvolveR: Self-Evolving LLM Agents through an Experience-Driven Lifecycle |  |
| 2025-10 | Improving Code Localization with Repository Memory |  |
| 2025-10 | Mnemosyne: An Unsupervised, Human-Inspired Long-Term Memory Architecture for Edge-Based LLMs |  |
| 2025-10 | AssoMem: Scalable Memory QA with Multi-Signal Associative Retrieval |  |
| 2025-10 | LightMem: Lightweight and Efficient Memory-Augmented Generation |  |
| 2025-09 | MEM-$\alpha$: Learning Memory Construction via Reinforcement Learning |  |
| 2025-09 | Look Back to Reason Forward: Revisitable Memory for Long-Context LLM Agents |  |
| 2025-09 | MIRA: Memory-Integrated Reinforcement Learning Agent  with Limited LLM Guidance |  |
| 2025-09 | REMem: Reasoning with Episodic Memory in Language Agent |  |
| 2025-09 | Adaptive Friend Agent: Personalized Multi-User Memory for Conversational AI |  |
| 2025-08 | Orchid: Orchestrating Context Across Creative Workflows with Generative AI |  |
| 2025-08 | Memory-R1: Enhancing Large Language Model Agents to Manage and Utilize Memories via Reinforcement Learning |  |
| 2025-08 | Learn to Memorize: Optimizing LLM-based Agents with Adaptive Memory Framework |  |
| 2025-07 | MemOS: A Memory OS for AI System |  |
| 2025-07 | Hierarchical Memory for High-Efficiency Long-Term Reasoning in LLM Agents |  |
| 2025-07 | MIRIX: Multi-Agent Memory System for LLM-Based Agents |  |
| 2025-06 | PersonaAgent: When Large Language Model Agents Meet Personalization at Test Time |  |
| 2025-06 | Cognitive Weave: Synthesizing Abstracted Knowledge with a Spatio-Temporal Resonance Graph |  |
| 2025-05 | From Single to Multi-Granularity: Toward Long-Term Memory Association and Selection of Conversational Agents |  |
| 2025-04 | Mem0: Building production-ready ai agents with scalable long-term memory |  |
| 2025-03 | Meminsight: Autonomous memory augmentation for llm agents |  |
| 2025-02 | M+: Extending MemoryLLM with Scalable Long-Term Memory |  |
| 2025-02 | A-MEM: Agentic Memory for LLM Agents |  |
| 2025-01 | Wormhole Memory: A Rubik's Cube for Cross-Dialogue Retrieval |  |
| 2025-01 | Zep: A Temporal Knowledge Graph Architecture for Agent Memory |  |
| 2024-12 | On the Structural Memory of LLM Agents |  |
| 2024-07 | MemoCRS: Memory-enhanced Sequential Conversational Recommender Systems with Large Language Models |  |
| 2024-03 | Larimar: Large language models with episodic memory control |  |
| 2024-01 | From llm to conversational agent: A memory enhanced architecture with fine-tuning of large language models |  |
| 2023-10 | MemGPT: Towards LLMs as operating systems |  |
| 2023-08 | Memochat: Tuning llms to use memos for consistent long-range open-domain conversation |  |
| 2023-06 | Chatdb: Augmenting llms with databases as their symbolic memory |  |
| 2023-05 | MemoryBank: Enhancing large language models with long-term memory |  |
| 2023-04 | Unleashing infinite-length input capacity for large-scale language models with self-controlled memory system |  |

#### Learning from Experience

[https://github.com/tsinghuac3i/awesome-memory-for-agents#learning-from-experience](https://github.com/tsinghuac3i/awesome-memory-for-agents#learning-from-experience)

| Date | Title | Paper |
|---|---|---|
| 2026-01 | Controlled Self-Evolution for Algorithmic Code Optimization |  |
| 2026-01 | Beyond Static Tools: Test-Time Tool Evolution for Scientific Reasoning |  |
| 2026-01 | MemGovern: Enhancing Code Agents through Learning from Governed Human Experiences |  |
| 2026-01 | Learning How to Remember: A Meta-Cognitive Management Method for Structured and Transferable Agent Memory |  |
| 2026-01 | Distilling Feedback into Memory-as-a-Tool |  |
| 2026-01 | EvoRoute: Experience-Driven Self-Routing LLM Agent Systems |  |
| 2025-12 | WebOperator: Action-Aware Tree Search for Autonomous Agents in Web Environment |  |
| 2025-12 | Unifying Dynamic Tool Creation and Cross-Task Experience Sharing through Cognitive Memory Architecture |  |
| 2025-12 | LoongFlow: Directed Evolutionary Search via a Cognitive Plan-Execute-Summarize Paradigm |  |
| 2025-12 | CASCADE: Cumulative Agentic Skill Creation through Autonomous Development and Evolution |  |
| 2025-12 | MemEvolve: Meta-Evolution of Agent Memory Systems |  |
| 2025-12 | Memento 2: Learning by Stateful Reflective Memory |  |
| 2025-11 | Improving Language Agents through BREW |  |
| 2025-11 | Scaling Agent Learning via Experience Synthesis |  |
| 2025-11 | FLEX: Continuous Agent Evolution via Forward Learning from Experience |  |
| 2025-11 | Multi-agent In-context Coordination via Decentralized Memory Retrieval |  |
| 2025-11 | AgentEvolver: Towards Efficient Self-Evolving Agent System |  |
| 2025-11 | Experience-Guided Adaptation of Inference-Time Reasoning Strategies |  |
| 2025-11 | WebCoach: Self-Evolving Web Agents with Cross-Session Memory Guidance |  |
| 2025-11 | Real-Time Procedural Learning From Experience for AI Agents |  |
| 2025-11 | SkillGen: Learning Domain Skills for In-Context Sequential Decision Making |  |
| 2025-11 | Live-SWE-agent: Can Software Engineering Agents Self-Evolve on the Fly? |  |
| 2025-10 | Alita-G: Self-Evolving Generative Agent for Agent Generation |  |
| 2025-10 | Dyna-Mind: Learning to Simulate from Experience for Better AI Agents |  |
| 2025-10 | LEGOMem: Modular Procedural Memory for Multi-agent LLM Systems for Workflow Automation |  |
| 2025-10 | The Cognitive Bandwidth Bottleneck: Shifting Long-Horizon Agent from Planning with Actions to Planning with Schemas |  |
| 2025-10 | Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models |  |
| 2025-10 | TokMem: Tokenized Procedural Memory for Large Language Models |  |
| 2025-10 | Training-Free Group Relative Policy Optimization |  |
| 2025-10 | Self-evolving expertise in complex non-verifiable subject domains: dialogue as implicit meta-RL |  |
| 2025-09 | Exploratory Memory-Augmented LLM Agent via Hybrid On- and Off-Policy Optimization |  |
| 2025-09 | Automated Stateful Specialization for Adaptive Agent Systems |  |
| 2025-09 | BMAS: A Brain-Inspired Multi-Agent System with PFC-Guided Task Coordination and Hippocampus-Neocortex Dual Memory for Scalable Multi-Step Reasoning |  |
| 2025-09 | MemGen: Weaving Generative Latent Memory for Self-Evolving Agents |  |
| 2025-09 | MetaEvo: A Meta-Optimization Framework for Experience-Driven Agent Evolution |  |
| 2025-09 | ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory |  |
| 2025-09 | MLE-RL: Reinforcement Learning for Self-Improvement in Machine Learning Agents |  |
| 2025-09 | ArcMemo: Abstract Reasoning Composition with Lifelong LLM Memory |  |
| 2025-09 | Metacognitive Reuse: Turning Recurring LLM Reasoning Into Concise Behaviors |  |
| 2025-08 | SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience |  |
| 2025-08 | Memento: Fine-tuning LLM Agents without Fine-tuning LLMs |  |
| 2025-08 | SE-Agent: Self-Evolution Trajectory Optimization in Multi-Step Reasoning with LLM-Based Agents |  |
| 2025-08 | Memp: Exploring Agent Procedural Memory |  |
| 2025-07 | Agent KB: Leveraging Cross-Domain Experience for Agentic Problem Solving |  |
## gBrain Temporal Metadata

- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

