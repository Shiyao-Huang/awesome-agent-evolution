---
repo: yxf203/awesome-efficient-agents
url: https://github.com/yxf203/awesome-efficient-agents
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - yxf203/Awesome-Efficient-Agents: Survey and paper list on efficiency-guided LLM agents (memory, tool learning, planning). · GitHub

**Source**: https://github.com/yxf203/awesome-efficient-agents

---

[Skip to content](https://github.com/yxf203/awesome-efficient-agents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[yxf203](https://github.com/yxf203)

/
**[Awesome-Efficient-Agents](https://github.com/yxf203/Awesome-Efficient-Agents)**

Public

- [Notifications](https://github.com/login?return_to=%2Fyxf203%2FAwesome-Efficient-Agents)You must be signed in to change notification settings
- [Fork
    9](https://github.com/login?return_to=%2Fyxf203%2FAwesome-Efficient-Agents)
- 
[Star
          250](https://github.com/login?return_to=%2Fyxf203%2FAwesome-Efficient-Agents)

[https://github.com/yxf203/Awesome-Efficient-Agents](https://github.com/yxf203/Awesome-Efficient-Agents)

[Branches](https://github.com/yxf203/Awesome-Efficient-Agents/branches)[Tags](https://github.com/yxf203/Awesome-Efficient-Agents/tags)

[https://github.com/yxf203/Awesome-Efficient-Agents/branches](https://github.com/yxf203/Awesome-Efficient-Agents/branches)[https://github.com/yxf203/Awesome-Efficient-Agents/tags](https://github.com/yxf203/Awesome-Efficient-Agents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History18 Commits18 Commits |  |  |  |
| assets | assets |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome Efficient Agents: A Survey of Memory, Tool Learning, and Planning

[https://github.com/yxf203/awesome-efficient-agents#awesome-efficient-agents-a-survey-of-memory-tool-learning-and-planning](https://github.com/yxf203/awesome-efficient-agents#awesome-efficient-agents-a-survey-of-memory-tool-learning-and-planning)

[https://arxiv.org/abs/2601.14192](https://arxiv.org/abs/2601.14192)[https://efficient-agents.github.io/](https://efficient-agents.github.io/)[https://huggingface.co/papers/2601.14192](https://huggingface.co/papers/2601.14192)

We’re currently planning to launch the revised version of our survey around April or May 🥹📋 Any suggestions or ideas would be greatly appreciated! 💡🙌

🤝 **Contributions welcome!** Open an issue or submit a pull request to add papers, fix links, or improve categorization.

## ⚡Introduction

[https://github.com/yxf203/awesome-efficient-agents#introduction](https://github.com/yxf203/awesome-efficient-agents#introduction)

Recent years have seen growing interest in extending large language models into agentic systems. While agent capabilities have advanced rapidly, efficiency has received comparatively less attention despite being crucial for real-world deployment. This repository studies efficiency-guided agent design from three core components: memory, tool learning, and planning.

We provide a curated paper list to help readers quickly locate representative work, along with lightweight notes on how each topic connects to efficiency.

- **Efficient Memory.** We organize memory-related papers into three processes: construction, management, and access.
- **Efficient Tool Learning.** We group papers into tool selection, tool calling, and tool-integrated reasoning.
- **Efficient Planning.** We collect work on planning that improves overall agent efficiency by reducing unnecessary actions and shortening trajectories.

[https://github.com/yxf203/Awesome-Efficient-Agents/blob/main/assets/introduction-picture.png](https://github.com/yxf203/Awesome-Efficient-Agents/blob/main/assets/introduction-picture.png)

## 🧾Paper List

[https://github.com/yxf203/awesome-efficient-agents#paper-list](https://github.com/yxf203/awesome-efficient-agents#paper-list)
📂 Table of Contents*(click to expand/collapse)*
- [🧠Memory](https://github.com/yxf203/awesome-efficient-agents#memory)
  - [Working Memory](https://github.com/yxf203/awesome-efficient-agents#working-memory)
    - [Textual Memory](https://github.com/yxf203/awesome-efficient-agents#textual-memory)
    - [Latent Memory](https://github.com/yxf203/awesome-efficient-agents#latent-memory)

  - [External Memory](https://github.com/yxf203/awesome-efficient-agents#external-memory)
    - [Item-based Memory](https://github.com/yxf203/awesome-efficient-agents#item-based-memory)
    - [Graph-based Memory](https://github.com/yxf203/awesome-efficient-agents#graph-based-memory)
    - [Hierarchical Memory](https://github.com/yxf203/awesome-efficient-agents#hierarchical-memory)

  - [Multi-Agent Memory](https://github.com/yxf203/awesome-efficient-agents#multi-agent-memory)
    - [Shared Memory](https://github.com/yxf203/awesome-efficient-agents#shared-memory)
    - [Local Memory](https://github.com/yxf203/awesome-efficient-agents#local-memory)
    - [Mixed Memory](https://github.com/yxf203/awesome-efficient-agents#mixed-memory)

- [🛠️Tool Learning](https://github.com/yxf203/awesome-efficient-agents#tool-learning)
  - [Tool Selection](https://github.com/yxf203/awesome-efficient-agents#tool-selection)
    - [External Retriever](https://github.com/yxf203/awesome-efficient-agents#external-retriever)
    - [Multi-Label Classification (MLC)](https://github.com/yxf203/awesome-efficient-agents#multi-label-classification-mlc)
    - [Vocabulary-based Retrieval](https://github.com/yxf203/awesome-efficient-agents#vocabulary-based-retrieval)

  - [Tool Calling](https://github.com/yxf203/awesome-efficient-agents#tool-calling)
    - [In-Place Parameter Filling](https://github.com/yxf203/awesome-efficient-agents#in-place-parameter-filling)
    - [Parallel Tool Calling](https://github.com/yxf203/awesome-efficient-agents#parallel-tool-calling)
    - [Cost-Aware Tool Calling](https://github.com/yxf203/awesome-efficient-agents#cost-aware-tool-calling)
    - [Efficient Test-Time Scaling](https://github.com/yxf203/awesome-efficient-agents#efficient-test-time-scaling)
    - [Efficient Tool Calling with Post-training](https://github.com/yxf203/awesome-efficient-agents#efficient-tool-calling-with-post-training)

  - [Tool-Integrated Reasoning (TIR)](https://github.com/yxf203/awesome-efficient-agents#tool-integrated-reasoning-tir)
    - [Selective Invocation](https://github.com/yxf203/awesome-efficient-agents#selective-invocation)
    - [Cost-Aware Policy Optimization](https://github.com/yxf203/awesome-efficient-agents#cost-aware-policy-optimization)

- [🧩Planning](https://github.com/yxf203/awesome-efficient-agents#planning)
  - [Single-Agent Planning Efficiency](https://github.com/yxf203/awesome-efficient-agents#single-agent-planning-efficiency)
    - [Adaptive Budgeting and Control](https://github.com/yxf203/awesome-efficient-agents#adaptive-budgeting-and-control)
    - [Structured Search](https://github.com/yxf203/awesome-efficient-agents#structured-search-strategies)
    - [Task Decomposition](https://github.com/yxf203/awesome-efficient-agents#task-decomposition-and-routing)
    - [Policy Optimization](https://github.com/yxf203/awesome-efficient-agents#policy-optimization)
    - [Memory and Skill Acquisition](https://github.com/yxf203/awesome-efficient-agents#architectural-synergy-with-memory-and-tools)

  - [Multi-Agent Collaborative Efficiency](https://github.com/yxf203/awesome-efficient-agents#multi-agent-collaborative-efficiency)
    - [Topological Efficiency and Sparsification](https://github.com/yxf203/awesome-efficient-agents#topological-efficiency)
    - [Protocol and Context Optimization](https://github.com/yxf203/awesome-efficient-agents#protocol-and-context-optimization)
    - [Distilling Coordination into Planning](https://github.com/yxf203/awesome-efficient-agents#distilling-coordination-into-planning)

- [📑Related Surveys](https://github.com/yxf203/awesome-efficient-agents#related-survey)
  - [Memory Survey](https://github.com/yxf203/awesome-efficient-agents#memory-survey)
  - [Tool Learning Survey](https://github.com/yxf203/awesome-efficient-agents#tool-learning-survey)
  - [Planning and Reasoning Survey](https://github.com/yxf203/awesome-efficient-agents#planning-survey)

### 🧠Memory

[https://github.com/yxf203/awesome-efficient-agents#memory](https://github.com/yxf203/awesome-efficient-agents#memory)

[https://github.com/yxf203/Awesome-Efficient-Agents/blob/main/assets/paper-memory-picture.png](https://github.com/yxf203/Awesome-Efficient-Agents/blob/main/assets/paper-memory-picture.png)

In the paper, we organize memory into construction, management, and access. Since many papers overlap across these stages, this README is primarily organized around memory construction to avoid redundancy.

#### Working Memory

[https://github.com/yxf203/awesome-efficient-agents#working-memory](https://github.com/yxf203/awesome-efficient-agents#working-memory)

##### Textual Memory

[https://github.com/yxf203/awesome-efficient-agents#textual-memory](https://github.com/yxf203/awesome-efficient-agents#textual-memory)

- 

(2025-10) [AgentFold: Long-Horizon Web Agents with Proactive Context Management](https://arxiv.org/abs/2510.24699)[https://github.com/Alibaba-NLP/DeepResearch](https://github.com/Alibaba-NLP/DeepResearch)

- 

(2025-07) [MemAgent: Reshaping Long-Context LLM with Multi-Conv RL-based Memory Agent](https://arxiv.org/abs/2507.02259)[https://memagent-sialab.github.io/](https://memagent-sialab.github.io/)[https://github.com/BytedTsinghua-SIA/MemAgent](https://github.com/BytedTsinghua-SIA/MemAgent)

- 

(2025-06) [MEM1: Learning to Synergize Memory and Reasoning for Efficient Long-Horizon Agents](https://arxiv.org/abs/2506.15841)[https://camo.githubusercontent.com/14325e3885e0df9ddce893aa04035a2997f1049deae25f989e30a3d309b13049/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6575724950532532305753253230323032352d626c7565](https://camo.githubusercontent.com/14325e3885e0df9ddce893aa04035a2997f1049deae25f989e30a3d309b13049/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6575724950532532305753253230323032352d626c7565)[https://camo.githubusercontent.com/01c824187916fc2319c0f61a2c86df6bd4aad4a5e06d97a2be05da07f955776c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434f4c4d2532305753253230323032352d626c7565](https://camo.githubusercontent.com/01c824187916fc2319c0f61a2c86df6bd4aad4a5e06d97a2be05da07f955776c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434f4c4d2532305753253230323032352d626c7565)[https://mit-mi.github.io/mem1-site/](https://mit-mi.github.io/mem1-site/)[https://github.com/MIT-MI/MEM1](https://github.com/MIT-MI/MEM1)

- 

(2025-04) [Dynamic Cheatsheet: Test-Time Learning with Adaptive Memory](https://arxiv.org/abs/2504.07952)[https://github.com/suzgunmirac/dynamic-cheatsheet](https://github.com/suzgunmirac/dynamic-cheatsheet)

- 

(2024-02) [Compress to Impress: Unleashing the Potential of Compressive Memory in Real-World Long-Term Conversations](https://arxiv.org/abs/2402.11975)[https://camo.githubusercontent.com/203bc72a39fb87f1e2d800d93fa3fdbfa663e910692db801c4ceb23e55259a98/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434f4c494e47253230323032352d626c7565](https://camo.githubusercontent.com/203bc72a39fb87f1e2d800d93fa3fdbfa663e910692db801c4ceb23e55259a98/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f434f4c494e47253230323032352d626c7565)[https://github.com/nuochenpku/COMEDY](https://github.com/nuochenpku/COMEDY)

##### Latent Memory

[https://github.com/yxf203/awesome-efficient-agents#latent-memory](https://github.com/yxf203/awesome-efficient-agents#latent-memory)

- (2026-01) [FlashMem: Distilling Intrinsic Latent Memory via Computation Reuse](https://arxiv.org/abs/2601.05505)
- (2025-09) [MemGen: Weaving Generative Latent Memory for Self-Evolving Agents](https://arxiv.org/abs/2509.24704)[https://github.com/KANABOON1/MemGen](https://github.com/KANABOON1/MemGen)
- (2025-02) [M+: Extending MemoryLLM with Scalable Long-Term Memory](https://arxiv.org/abs/2502.00592)[https://openreview.net/forum?id=OcqbkROe8J](https://openreview.net/forum?id=OcqbkROe8J)[https://github.com/wangyu-ustc/MemoryLLM](https://github.com/wangyu-ustc/MemoryLLM)
- (2025-01) [Titans: Learning to Memorize at Test Time](https://arxiv.org/abs/2501.00663)
- (2024-09) [MemoRAG: Boosting Long Context Processing with Global Memory-Enhanced Retrieval Augmentation](https://arxiv.org/abs/2409.05591)[https://dl.acm.org/doi/abs/10.1145/3696410.3714805](https://dl.acm.org/doi/abs/10.1145/3696410.3714805)[https://github.com/qhjqhj00/MemoRAG](https://github.com/qhjqhj00/MemoRAG)
- (2024-07) [$\text{Memory}^3$: Language Modeling with Explicit Memory](https://arxiv.org/abs/2407.01178)
- (2024-02) [MEMORYLLM: Towards Self-Updatable Large Language Models](https://arxiv.org/abs/2402.04624)[https://proceedings.mlr.press/v235/wang24s.html](https://proceedings.mlr.press/v235/wang24s.html)[https://github.com/wangyu-ustc/MemoryLLM](https://github.com/wangyu-ustc/MemoryLLM)
- (2024-01) [Long Context Compression with Activation Beacon](https://arxiv.org/abs/2401.03462)[https://openreview.net/forum?id=1eQT9OzfNQ](https://openreview.net/forum?id=1eQT9OzfNQ)[https://github.com/FlagOpen/FlagEmbedding](https://github.com/FlagOpen/FlagEmbedding)

#### External Memory

[https://github.com/yxf203/awesome-efficient-agents#external-memory](https://github.com/yxf203/awesome-efficient-agents#external-memory)

##### Item-based Memory

[https://github.com/yxf203/awesome-efficient-agents#item-based-memory](https://github.com/yxf203/awesome-efficient-agents#item-based-memory)

- (2026-03) [Evoking User Memory: Personalizing LLM via Recollection-Familiarity Adaptive Retrieval](https://arxiv.org/abs/2603.09250)[https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565](https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565)[https://github.com/Zhang-Yingyi/ICLR2026_RF-Mem](https://github.com/Zhang-Yingyi/ICLR2026_RF-Mem)
- (2026-01) [MemRL: Self-Evolving Agents via Runtime Reinforcement Learning on Episodic Memory](https://arxiv.org/abs/2601.03192)[https://github.com/MemTensor/MemRL](https://github.com/MemTensor/MemRL)
- (2025-10) [Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models](https://arxiv.org/abs/2510.04618)[https://github.com/ace-agent/ace](https://github.com/ace-agent/ace)
- (2025-09) [ReasoningBank: Scaling Agent Self-Evolving with Reasoning Memory](https://arxiv.org/abs/2509.25140)
- (2025-08) [Memory-R1: Enhancing Large Language Model Agents to Manage and Utilize Memories via Reinforcement Learning](https://arxiv.org/abs/2508.19828)
- (2025-08) [Memento: Fine-tuning LLM Agents without Fine-tuning LLMs](https://arxiv.org/abs/2508.16153)[https://github.com/Agent-on-the-Fly/Memento](https://github.com/Agent-on-the-Fly/Memento)
- (2025-07) [Agent KB: Leveraging Cross-Domain Experience for Agentic Problem Solving](https://arxiv.org/abs/2507.06229)[https://camo.githubusercontent.com/4215d89b696678bb420e0594a5fa2b57fbd86b584bbb74229300821a9951b0cd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434d4c25323032303235253230576f726b73686f702d626c7565](https://camo.githubusercontent.com/4215d89b696678bb420e0594a5fa2b57fbd86b584bbb74229300821a9951b0cd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434d4c25323032303235253230576f726b73686f702d626c7565)[https://github.com/OPPO-PersonalAI/Agent-KB](https://github.com/OPPO-PersonalAI/Agent-KB)
- (2025-06) [Cost-Efficient Serving of LLM Agents via Test-Time Plan Caching(Agentic Plan Caching: Test-Time Memory for Fast and Cost-Efficient LLM Agents)](https://arxiv.org/abs/2506.14852)[https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565](https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565)
- (2025-05) [From Single to Multi-Granularity: Toward Long-Term Memory Association and Selection of Conversational Agents](https://arxiv.org/abs/2505.19549)[https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565](https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565)[https://github.com/quqxui/MemGAS](https://github.com/quqxui/MemGAS)
- (2025-04) [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413)[https://github.com/mem0ai/mem0](https://github.com/mem0ai/mem0)
- (2025-03) [MemInsight: Autonomous Memory Augmentation for LLM Agents](https://arxiv.org/abs/2503.21760)[https://camo.githubusercontent.com/fe8fe640379785113ce1e5cbb3a7e1eb4cd9b3934585061ebb9ed772b2aa63c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f454d4e4c50253230323032352d626c7565](https://camo.githubusercontent.com/fe8fe640379785113ce1e5cbb3a7e1eb4cd9b3934585061ebb9ed772b2aa63c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f454d4e4c50253230323032352d626c7565)[https://github.com/amazon-science/MemInsight](https://github.com/amazon-science/MemInsight)
- (2025-03) [In Prospect and Retrospect: Reflective Memory Management for Long-term Personalized Dialogue Agents](https://arxiv.org/abs/2503.08026)[https://camo.githubusercontent.com/db2f46310b4e3d54d85a69abdfb4ff1f603e4925aa94150ac9f62c8cb41e0e15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434c253230323032352d626c7565](https://camo.githubusercontent.com/db2f46310b4e3d54d85a69abdfb4ff1f603e4925aa94150ac9f62c8cb41e0e15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434c253230323032352d626c7565)
- (2025-02) [A-MEM: Agentic Memory for LLM Agents](https://arxiv.org/abs/2502.12110)[https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565](https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565)[https://github.com/agiresearch/A-mem](https://github.com/agiresearch/A-mem)
- (2025-02) [On Memory Construction and Retrieval for Personalized Conversational Agents](https://arxiv.org/abs/2502.05589)[https://camo.githubusercontent.com/dc5208a031328ba4b87c58f00cc5ba521c794d20d9da87f9a654ec4e6b0a52b8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032352d626c7565](https://camo.githubusercontent.com/dc5208a031328ba4b87c58f00cc5ba521c794d20d9da87f9a654ec4e6b0a52b8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032352d626c7565)[https://llmlingua.com/secom.html](https://llmlingua.com/secom.html)[https://github.com/microsoft/SeCom](https://github.com/microsoft/SeCom)
- (2024-06) [Hello Again! LLM-powered Personalized Agent for Long-term Dialogue](https://arxiv.org/abs/2406.05925)[https://camo.githubusercontent.com/3f6bcc2051dd12e00368bbc9a85f59ac2a8762e7dfe889fd26b03a4c2d67448f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e4141434c253230323032352d626c7565](https://camo.githubusercontent.com/3f6bcc2051dd12e00368bbc9a85f59ac2a8762e7dfe889fd26b03a4c2d67448f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e4141434c253230323032352d626c7565)[https://github.com/leolee99/LD-Agent](https://github.com/leolee99/LD-Agent)
- (2024-04) ["My agent understands me better": Integrating Dynamic Human-like Memory Recall and Consolidation in LLM-Based Agents](https://arxiv.org/abs/2404.00573)[https://camo.githubusercontent.com/a9b6ada28e460f41a436d7085d4188df50ac54722fd9feefa4d301a7e620bde7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4348492532304541253230323032342d626c7565](https://camo.githubusercontent.com/a9b6ada28e460f41a436d7085d4188df50ac54722fd9feefa4d301a7e620bde7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4348492532304541253230323032342d626c7565)
- (2023-10) [RECOMP: Improving Retrieval-Augmented LMs with Compression and Selective Augmentation](https://arxiv.org/abs/2310.04408)[https://camo.githubusercontent.com/5d66cf83163760ce900a48e60defd5d76d2332d668ede2a985c0df73df4e794d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032342d626c7565](https://camo.githubusercontent.com/5d66cf83163760ce900a48e60defd5d76d2332d668ede2a985c0df73df4e794d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032342d626c7565)[https://github.com/carriex/recomp](https://github.com/carriex/recomp)
- (2023-08) [ExpeL: LLM Agents Are Experiential Learners](https://arxiv.org/abs/2308.10144)[https://camo.githubusercontent.com/8acb263e45256a2f39afb2547ba634cb983744413c86d94ba7a8a8f9006eccbf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41414149253230323032342d626c7565](https://camo.githubusercontent.com/8acb263e45256a2f39afb2547ba634cb983744413c86d94ba7a8a8f9006eccbf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41414149253230323032342d626c7565)[https://andrewzh112.github.io/expel/](https://andrewzh112.github.io/expel/)[https://github.com/LeapLabTHU/ExpeL](https://github.com/LeapLabTHU/ExpeL)
- (2023-08) [MemoChat: Tuning LLMs to Use Memos for Consistent Long-Range Open-Domain Conversation](https://arxiv.org/abs/2308.08239)[https://github.com/LuJunru/MemoChat](https://github.com/LuJunru/MemoChat)
- (2023-05) [MemoryBank: Enhancing Large Language Models with Long-Term Memory](https://arxiv.org/abs/2305.10250)[https://camo.githubusercontent.com/8acb263e45256a2f39afb2547ba634cb983744413c86d94ba7a8a8f9006eccbf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41414149253230323032342d626c7565](https://camo.githubusercontent.com/8acb263e45256a2f39afb2547ba634cb983744413c86d94ba7a8a8f9006eccbf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41414149253230323032342d626c7565)[https://github.com/zhongwanjun/MemoryBank-SiliconFriend](https://github.com/zhongwanjun/MemoryBank-SiliconFriend)

##### Graph-based Memory

[https://github.com/yxf203/awesome-efficient-agents#graph-based-memory](https://github.com/yxf203/awesome-efficient-agents#graph-based-memory)

- (2026-01) [MAGMA: A Multi-Graph based Agentic Memory Architecture for AI Agents](https://arxiv.org/abs/2601.03236)[https://github.com/FredJiang0324/MAMGA](https://github.com/FredJiang0324/MAMGA)
- (2025-10) [D-SMART: Enhancing LLM Dialogue Consistency via Dynamic Structured Memory And Reasoning Tree](https://arxiv.org/abs/2510.13363)
- (2025-04) [Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory](https://arxiv.org/abs/2504.19413)[https://github.com/mem0ai/mem0](https://github.com/mem0ai/mem0)
- (2025-01) [Zep: A Temporal Knowledge Graph Architecture for Agent Memory](https://arxiv.org/abs/2501.13956)[https://github.com/getzep/zep](https://github.com/getzep/zep)
- (2024-07) [AriGraph: Learning Knowledge Graph World Models with Episodic Memory for LLM Agents](https://arxiv.org/abs/2407.04363)[https://camo.githubusercontent.com/00d19faef4c2ee3c8a0dee0107a4803d69433882eb980779c82c6471cec2647d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f494a434149253230323032352d626c7565](https://camo.githubusercontent.com/00d19faef4c2ee3c8a0dee0107a4803d69433882eb980779c82c6471cec2647d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f494a434149253230323032352d626c7565)[https://github.com/AIRI-Institute/AriGraph](https://github.com/AIRI-Institute/AriGraph)
- (2024-06) [GraphReader: Building Graph-based Agent to Enhance Long-Context Abilities of Large Language Models](https://arxiv.org/abs/2406.14550)[https://camo.githubusercontent.com/f2f660dbf8b42a1b9a461937e364f1ab5cdbb44c80186629e37470f883b1055a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f454d4e4c502532303230323425323046696e64696e67732d626c7565](https://camo.githubusercontent.com/f2f660dbf8b42a1b9a461937e364f1ab5cdbb44c80186629e37470f883b1055a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f454d4e4c502532303230323425323046696e64696e67732d626c7565)
- (2024-02) [KG-Agent: An Efficient Autonomous Agent Framework for Complex Reasoning over Knowledge Graph](https://arxiv.org/abs/2402.11163)[https://camo.githubusercontent.com/db2f46310b4e3d54d85a69abdfb4ff1f603e4925aa94150ac9f62c8cb41e0e15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434c253230323032352d626c7565](https://camo.githubusercontent.com/db2f46310b4e3d54d85a69abdfb4ff1f603e4925aa94150ac9f62c8cb41e0e15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434c253230323032352d626c7565)

##### Hierarchical Memory

[https://github.com/yxf203/awesome-efficient-agents#hierarchical-memory](https://github.com/yxf203/awesome-efficient-agents#hierarchical-memory)

- (2025-10) [Beyond a Million Tokens: Benchmarking and Enhancing Long-Term Memory in LLMs](https://arxiv.org/abs/2510.27246)[https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565](https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565)[https://mohammadtavakoli78.github.io/beam-light](https://mohammadtavakoli78.github.io/beam-light)[https://github.com/mohammadtavakoli78/BEAM](https://github.com/mohammadtavakoli78/BEAM)
- (2025-10) [LightMem: Lightweight and Efficient Memory-Augmented Generation](https://www.arxiv.org/abs/2510.18866)[https://github.com/zjunlp/LightMem](https://github.com/zjunlp/LightMem)
- (2025-07) [Hierarchical Memory for High-Efficiency Long-Term Reasoning in LLM Agents](https://arxiv.org/abs/2507.22925)
- (2025-07) [MemOS: A Memory OS for AI System](https://arxiv.org/abs/2507.03724)[https://github.com/MemTensor/MemOS](https://github.com/MemTensor/MemOS)
- (2025-06) [Memory OS of AI Agent](https://arxiv.org/abs/2506.06326)[https://camo.githubusercontent.com/fe8fe640379785113ce1e5cbb3a7e1eb4cd9b3934585061ebb9ed772b2aa63c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f454d4e4c50253230323032352d626c7565](https://camo.githubusercontent.com/fe8fe640379785113ce1e5cbb3a7e1eb4cd9b3934585061ebb9ed772b2aa63c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f454d4e4c50253230323032352d626c7565)[https://baijia.online/memoryos/](https://baijia.online/memoryos/)[https://github.com/BAI-LAB/MemoryOS](https://github.com/BAI-LAB/MemoryOS)
- (2024-08) [HiAgent: Hierarchical Working Memory Management for Solving Long-Horizon Agent Tasks with Large Language Model](https://arxiv.org/abs/2408.09559)[https://camo.githubusercontent.com/db2f46310b4e3d54d85a69abdfb4ff1f603e4925aa94150ac9f62c8cb41e0e15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434c253230323032352d626c7565](https://camo.githubusercontent.com/db2f46310b4e3d54d85a69abdfb4ff1f603e4925aa94150ac9f62c8cb41e0e15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434c253230323032352d626c7565)[https://github.com/HiAgent2024/HiAgent](https://github.com/HiAgent2024/HiAgent)
- (2024-02) [A Human-Inspired Reading Agent with Gist Memory of Very Long Contexts](https://arxiv.org/abs/2402.09727)[https://camo.githubusercontent.com/1f3da82d66e9b3b70d8b653f46765aba698b06bac57b6d177ba3e61d1aaa601e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434d4c253230323032342d626c7565](https://camo.githubusercontent.com/1f3da82d66e9b3b70d8b653f46765aba698b06bac57b6d177ba3e61d1aaa601e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434d4c253230323032342d626c7565)[https://read-agent.github.io/](https://read-agent.github.io/)[https://github.com/read-agent/read-agent.github.io/blob/main/assets/read_agent_demo.ipynb](https://github.com/read-agent/read-agent.github.io/blob/main/assets/read_agent_demo.ipynb)
- (2023-10) [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560)[https://github.com/letta-ai/letta](https://github.com/letta-ai/letta)

#### Multi-Agent Memory

[https://github.com/yxf203/awesome-efficient-agents#multi-agent-memory](https://github.com/yxf203/awesome-efficient-agents#multi-agent-memory)

##### Shared Memory

[https://github.com/yxf203/awesome-efficient-agents#shared-memory](https://github.com/yxf203/awesome-efficient-agents#shared-memory)

- (2026-02) [LatentMem: Customizing Latent Memory for Multi-Agent Systems](https://arxiv.org/abs/2602.03036)[https://github.com/KANABOON1/LatentMem](https://github.com/KANABOON1/LatentMem)
- (2025-11) [Latent Collaboration in Multi-Agent Systems](https://arxiv.org/abs/2511.20639)[https://github.com/Gen-Verse/LatentMAS](https://github.com/Gen-Verse/LatentMAS)
- (2025-11) [MemIndex: Agentic Event-based Distributed Memory Management for Multi-agent Systems](https://dl.acm.org/doi/10.1145/3774946)[https://camo.githubusercontent.com/a8f97a00d6d727c7be23434c505d69720a7c2429a4d60072223acaf6d6ddd00b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434d25323054414153253230323032352d626c7565](https://camo.githubusercontent.com/a8f97a00d6d727c7be23434c505d69720a7c2429a4d60072223acaf6d6ddd00b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41434d25323054414153253230323032352d626c7565)
- (2025-10) [Cache-to-Cache: Direct Semantic Communication Between Large Language Models](https://arxiv.org/abs/2510.03215)[https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565](https://camo.githubusercontent.com/2eb5a801b8963b342e1c109a183698f3733b8bbbf634aff2046aea7f2251354b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032362d626c7565)[https://fuvty.github.io/C2C_Project_Page/](https://fuvty.github.io/C2C_Project_Page/)[https://github.com/thu-nics/C2C](https://github.com/thu-nics/C2C)
- (2025-10) [KVCOMM: Online Cross-context KV-cache Communication for Efficient LLM-based Multi-agent Systems](https://arxiv.org/abs/2510.12872)[https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565](https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565)[https://github.com/FastMAS/KVCOMM](https://github.com/FastMAS/KVCOMM)
- (2025-08) [RCR-Router: Efficient Role-Aware Context Routing for Multi-Agent LLM Systems with Structured Memory](https://arxiv.org/abs/2508.04903)
- (2025-07) [MIRIX: Multi-Agent Memory System for LLM-Based Agents](https://arxiv.org/abs/2507.07957)[https://mirix.io/](https://mirix.io/)[https://github.com/Mirix-AI/MIRIX](https://github.com/Mirix-AI/MIRIX)
- (2025-06) [G-Memory: Tracing Hierarchical Memory for Multi-Agent Systems](https://arxiv.org/abs/2506.07398)[https://camo.githubusercontent.com/48999d8457816f3a935a4260a93e320400e42beba98d190a0be16719caa5c8da/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6575724950532532303230323525323073706f746c696768742d626c7565](https://camo.githubusercontent.com/48999d8457816f3a935a4260a93e320400e42beba98d190a0be16719caa5c8da/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6575724950532532303230323525323073706f746c696768742d626c7565)[https://github.com/bingreeky/GMemory](https://github.com/bingreeky/GMemory)
- (2024-04) [Memory Sharing for Large Language Model based Agents](https://arxiv.org/abs/2404.09982)[https://github.com/GHupppp/InteractiveMemorySharingLLM](https://github.com/GHupppp/InteractiveMemorySharingLLM)

##### Local Memory

[https://github.com/yxf203/awesome-efficient-agents#local-memory](https://github.com/yxf203/awesome-efficient-agents#local-memory)

- (2025-08) [Intrinsic Memory Agents: Heterogeneous Multi-Agent LLM Systems through Structured Contextual Memory](https://arxiv.org/abs/2508.08997)
- (2025-04) [AgentNet: Decentralized Evolutionary Coordination for LLM-based Multi-Agent Systems](https://arxiv.org/abs/2504.00587)[https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565](https://camo.githubusercontent.com/385f0d7d4b9b8279f7b2ab4b7015079fb6489b447547c34094de7b6fb994d2f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e657572495053253230323032352d626c7565)[https://github.com/zoe-yyx/AgentNet](https://github.com/zoe-yyx/AgentNet)
- (2025-02) [LLM-Powered Decentralized Generative Agents with Adaptive Hierarchical Knowledge Graph for Cooperative Planning](https://arxiv.org/abs/2502.05453)[https://happyeureka.github.io/damcs/](https://happyeureka.github.io/damcs/)[https://github.com/13RENDA/Mcrafter_LLM_Agent](https://github.com/13RENDA/Mcrafter_LLM_Agent)

##### Mixed Memory

[https://github.com/yxf203/awesome-efficient-agents#mixed-memory](https://github.com/yxf203/awesome-efficient-agents#mixed-memory)

- (2025-10) [LEGOMem: Modular Procedural Memory for Multi-agent LLM Systems for Workflow Automation](https://arxiv.org/abs/2510.04851)[https://camo.githubusercontent.com/415480e7a18277e149afbf77149087e2cdccf220eebf8b186232a9f1f92d2210/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41414d415325323032303236253230457874656e64656425323041627374726163742d626c7565](https://camo.githubusercontent.com/415480e7a18277e149afbf77149087e2cdccf220eebf8b186232a9f1f92d2210/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f41414d415325323032303236253230457874656e64656425323041627374726163742d626c7565)
- (2025-05) [Collaborative Memory: Multi-User Memory Sharing in LLM Agents with Dynamic Access Control](https://arxiv.org/abs/2505.18279)
- (2025-01) [SRMT: Shared Memory for Multi-agent Lifelong Pathfinding](https://arxiv.org/abs/2501.13200)[https://github.com/Aloriosa/srmt](https://github.com/Aloriosa/srmt)

### 🛠️Tool Learning

[https://github.com/yxf203/awesome-efficient-agents#%EF%B8%8Ftool-learning](https://github.com/yxf203/awesome-efficient-agents#%EF%B8%8Ftool-learning)

[https://github.com/yxf203/Awesome-Efficient-Agents/blob/main/assets/tool-learning.png](https://github.com/yxf203/Awesome-Efficient-Agents/blob/main/assets/tool-learning.png)

#### Tool Selection

[https://github.com/yxf203/awesome-efficient-agents#tool-selection](https://github.com/yxf203/awesome-efficient-agents#tool-selection)

##### External Retriever

[https://github.com/yxf203/awesome-efficient-agents#external-retriever](https://github.com/yxf203/awesome-efficient-agents#external-retriever)

- 

(2025-10) [ToolScope: Enhancing LLM Agent Tool Use through Tool Merging and Context-Aware Filtering](https://arxiv.org/abs/2510.20036)

- 

(2024-10) [Toolshed: Scale Tool-Equipped Agents with Advanced RAG-Tool Fusion and Tool Knowledge Bases](https://arxiv.org/abs/2410.14594)[https://camo.githubusercontent.com/a0e542ba10ba7041906238fd19f143be688ffb094228e17bdeae0329ab96c4ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f494341415254253230323032352d626c7565](https://camo.githubusercontent.com/a0e542ba10ba7041906238fd19f143be688ffb094228e17bdeae0329ab96c4ba/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f494341415254253230323032352d626c7565)[https://github.com/EliasLumer/Toolshed-Scale-Tool-Equipped-Agents-with-Advanced-RAG-Tool-Fusion-and-Tool-Knowledge-Bases](https://github.com/EliasLumer/Toolshed-Scale-Tool-Equipped-Agents-with-Advanced-RAG-Tool-Fusion-and-Tool-Knowledge-Bases)

- 

(2024-10) [From Exploration to Mastery: Enabling LLMs to Master Tools via Self-Driven Interactions](https://arxiv.org/abs/2410.08197)[https://camo.githubusercontent.com/c86213c7528a238ad7d348af9ba68904faee3cc96e905381fe1023fceeb04cb6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032352532306f72616c2d626c7565](https://camo.githubusercontent.com/c86213c7528a238ad7d348af9ba68904faee3cc96e905381fe1023fceeb04cb6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434c52253230323032352532306f72616c2d626c7565)[https://github.com/quchangle1/DRAFT](https://github.com/quchangle1/DRAFT)

- 

(2024-02) [AnyTool: Self-Reflective, Hierarchical Agents for Large-Scale API Calls](https://arxiv.org/abs/2402.04253)[https://camo.githubusercontent.com/1f3da82d66e9b3b70d8b653f46765aba698b06bac57b6d177ba3e61d1aaa601e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434d4c253230323032342d626c7565](https://camo.githubusercontent.com/1f3da82d66e9b3b70d8b653f46765aba698b06bac57b6d177ba3e61d1aaa601e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f49434d4c253230323032342d626c7565)[https://github.com/dyabel/AnyTool](https://github.com/dyabel/AnyTool)

- 

(2023-12) [ProTIP: Progressive Tool Retrieval Improves Planning](https://arxiv.org/abs/2312.10332)[https://camo.githubusercontent.com/60637b1d4f64543b2b9c03bc1c5ea516206256b380c0d7c03d7b00f150b39109/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4541434c25323032303234253230576f726b73686f702d626c7565](https://camo.githubusercontent.com/60637b1d4f64543b2b9c03bc1c5ea516206256b380c0d7c03d7b00f150b39109/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4541434c25323032303234253230576f726b73686f702d626c7565)

##### Multi-Label Classification (MLC)
## gBrain Temporal Metadata

- content_timestamp: 2025-10
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-10
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

