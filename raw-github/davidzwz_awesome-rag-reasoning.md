---
repo: davidzwz/awesome-rag-reasoning
url: https://github.com/davidzwz/awesome-rag-reasoning
content_timestamp: 2025-07-17
time_slice: 2025-07
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - DavidZWZ/Awesome-RAG-Reasoning: [EMNLP 2025] Awesome RAG Reasoning Resources · GitHub

**Source**: https://github.com/davidzwz/awesome-rag-reasoning

---

[Skip to content](https://github.com/davidzwz/awesome-rag-reasoning#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[DavidZWZ](https://github.com/DavidZWZ)

/
**[Awesome-RAG-Reasoning](https://github.com/DavidZWZ/Awesome-RAG-Reasoning)**

Public

- [Notifications](https://github.com/login?return_to=%2FDavidZWZ%2FAwesome-RAG-Reasoning)You must be signed in to change notification settings
- [Fork
    35](https://github.com/login?return_to=%2FDavidZWZ%2FAwesome-RAG-Reasoning)
- 
[Star
          427](https://github.com/login?return_to=%2FDavidZWZ%2FAwesome-RAG-Reasoning)

[https://github.com/DavidZWZ/Awesome-RAG-Reasoning](https://github.com/DavidZWZ/Awesome-RAG-Reasoning)

[Branches](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/branches)[Tags](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/tags)

[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/branches](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/branches)[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/tags](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History52 Commits52 Commits |  |  |  |
| Assets | Assets |  |  |
| .DS_Store | .DS_Store |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome-RAG-Reasoning

[https://github.com/davidzwz/awesome-rag-reasoning#awesome-rag-reasoning](https://github.com/davidzwz/awesome-rag-reasoning#awesome-rag-reasoning)

[https://awesome.re](https://awesome.re)[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main)[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main)[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main)[https://github.com/DavidZWZ/Awesome-RAG-Reasoning](https://github.com/DavidZWZ/Awesome-RAG-Reasoning)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main/Assets/RAG_Reasoning.png](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main/Assets/RAG_Reasoning.png)

A curated collection of resources, papers, tools, and implementations that bridge the gap between **Retrieval-Augmented Generation (RAG)** and **Reasoning** in Large Language Models and Agents. This repository brings together traditionally separate research domains to enable more powerful Agentic AI systems.

**📖 Related Survey**: This repository is based on the taxonomy and framework presented in ["Towards Agentic RAG with Deep Reasoning: A Survey of RAG-Reasoning Systems in LLMs"](https://arxiv.org/abs/2507.09477), featured 🏆 in [Hugging Face Daily Papers](https://huggingface.co/papers/date/2025-07-17).

**🔍 Dive Deeper**: For researchers interested in the latest developments in **Agentic Deep Research**, including cutting-edge papers and industry-leading deep research products, we recommend exploring our comprehensive collection at [Awesome-Deep-Research](https://github.com/DavidZWZ/Awesome-Deep-Research) 🔥🔥🔥.

If you find this repository useful, please cite our papers:

```
@article{li2025towards,
  title={Towards Agentic RAG with Deep Reasoning: A Survey of RAG-Reasoning Systems in LLMs},
  author={Li, Yangning and Zhang, Weizhi and Yang, Yuyao and Huang, Wei-Chieh and Wu, Yaozu and Luo, Junyu and Bei, Yuanchen and Zou, Henry Peng and Luo, Xiao and Zhao, Yusheng and others},
  journal={arXiv preprint arXiv:2507.09477},
  year={2025}
}

@article{zhang2025web,
  title={From Web Search towards Agentic Deep Research: Incentivizing Search with Reasoning Agents},
  author={Zhang, Weizhi and Li, Yangning and Bei, Yuanchen and Luo, Junyu and Wan, Guancheng and Yang, Liangwei and Xie, Chenxuan and Yang, Yuyao and Huang, Wei-Chieh and Miao, Chunyu and others},
  journal={arXiv preprint arXiv:2506.18959},
  year={2025}
}
```

## 📖 Introduction

[https://github.com/davidzwz/awesome-rag-reasoning#-introduction](https://github.com/davidzwz/awesome-rag-reasoning#-introduction)

**🔍 Retrieval-Augmented Generation (RAG)** has emerged as a powerful paradigm that combines the strengths of large language models with external knowledge retrieval. By augmenting language models with relevant information from external sources, RAG systems can provide more accurate, up-to-date, and factual responses while maintaining the generative capabilities of modern LLMs.

- **Limitations**: 
  - May retrieve irrelevant or inaccurate information
  - Limited by the quality and coverage of external knowledge bases

**🧠 Reasoning** has recently gained significant popularity as a complementary approach to enhance LLM performance. Reasoning techniques focus on improving the model's ability to process information, perform logical analysis, and arrive at conclusions through structured thinking processes. These methods enable LLMs to tackle complex problems that require multi-step inference, causal understanding, and systematic problem-solving.

- **Limitations**: 
  - Often hallucinates or mis-grounds facts
  - Struggles with up-to-date or domain-specific information

Although RAG and Reasoning address different aspects of the model's capabilities. **they have been developed largely independently**, with separate research communities, methodologies, and evaluation benchmarks:

**This repository serves as a comprehensive collection that bridges these traditionally separate domains**, providing resources for researchers and practitioners interested in combining the strengths of both approaches.

[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main/Assets/Taxonomy.png](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main/Assets/Taxonomy.png)

### Why RAG + Reasoning?

[https://github.com/davidzwz/awesome-rag-reasoning#why-rag--reasoning](https://github.com/davidzwz/awesome-rag-reasoning#why-rag--reasoning)

Large Language Models (LLMs) serve as the foundation for modern AI systems, but they face significant limitations in both knowledge access and reasoning capabilities. While RAG excels at providing factual knowledge and reasoning excels at logical processing, real-world problems often require both capabilities simultaneously. Complex queries demand not just access to relevant information, but also the ability to reason through that information systematically.

**Real-World Impact**: This combination enables AI systems to tackle complex problems that require both knowledge retrieval and sophisticated reasoning, such as scientific research, legal analysis, medical diagnosis, and strategic planning.

[https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main/Assets/Framework.png](https://github.com/DavidZWZ/Awesome-RAG-Reasoning/blob/main/Assets/Framework.png)

*The **Reasoning-Enhanced RAG** methods and **RAG-Enhanced Reasoning** methods represent **one-way** enhancements. In contrast, the **Synergized RAG-Reasoning System** performs reasoning and retrieval **iteratively**, enabling mutual enhancements.*

---

## What This Repository Covers

[https://github.com/davidzwz/awesome-rag-reasoning#what-this-repository-covers](https://github.com/davidzwz/awesome-rag-reasoning#what-this-repository-covers)

Below you will find a curated selection of research papers, open-source implementations, and benchmarking datasets that drive progress in RAG and Reasoning.

### 📚 [Research Papers & Frameworks](https://github.com/davidzwz/awesome-rag-reasoning#research-papers-and-frameworks)

[https://github.com/davidzwz/awesome-rag-reasoning#-research-papers--frameworks](https://github.com/davidzwz/awesome-rag-reasoning#-research-papers--frameworks)

Latest academic publications and open-source implementations that advance the integration of RAG and Reasoning.

- 

[Reasoning-Enhanced RAG](https://github.com/davidzwz/awesome-rag-reasoning#reasoning-enhanced-rag)

  - [Retrieval Optimization](https://github.com/davidzwz/awesome-rag-reasoning#retrieval-optimization)
  - [Integration Enhancement](https://github.com/davidzwz/awesome-rag-reasoning#integration-enhancement)
  - [Generation Enhancement](https://github.com/davidzwz/awesome-rag-reasoning#generation-enhancement)

- 

[RAG-Enhanced Reasoning](https://github.com/davidzwz/awesome-rag-reasoning#rag-enhanced-reasoning)

  - [External Knowledge Retrieval](https://github.com/davidzwz/awesome-rag-reasoning#external-knowledge-retrieval)
    - [Knowledge Base](https://github.com/davidzwz/awesome-rag-reasoning#knowledge-base)
    - [Web Retrieval](https://github.com/davidzwz/awesome-rag-reasoning#web-retrieval)
    - [Tool Using](https://github.com/davidzwz/awesome-rag-reasoning#tool-using)

  - [In-context Retrieval](https://github.com/davidzwz/awesome-rag-reasoning#in-context-retrieval)
    - [Prior Experience](https://github.com/davidzwz/awesome-rag-reasoning#prior-experience)
    - [Example or Training Data](https://github.com/davidzwz/awesome-rag-reasoning#example-or-training-data)

- 

[Synergized RAG and Reasoning](https://github.com/davidzwz/awesome-rag-reasoning#synergized-rag-and-reasoning)

  - [Reasoning Workflow](https://github.com/davidzwz/awesome-rag-reasoning#reasoning-workflow)
    - [Chain-based](https://github.com/davidzwz/awesome-rag-reasoning#chain-based)
    - [Tree-based](https://github.com/davidzwz/awesome-rag-reasoning#tree-based)
    - [Graph-based](https://github.com/davidzwz/awesome-rag-reasoning#graph-based)
      - [Walk-on-Graph](https://github.com/davidzwz/awesome-rag-reasoning#walk-on-graph)
      - [Think-on-Graph](https://github.com/davidzwz/awesome-rag-reasoning#think-on-graph)

  - [Agentic Orchestration](https://github.com/davidzwz/awesome-rag-reasoning#agentic-orchestration)
    - [Single-Agent](https://github.com/davidzwz/awesome-rag-reasoning#single-agent)
      - [Prompting](https://github.com/davidzwz/awesome-rag-reasoning#prompting)
      - [Supervised Fine-Tuning](https://github.com/davidzwz/awesome-rag-reasoning#supervised-fine-tuning)
      - [Reinforcement Learning](https://github.com/davidzwz/awesome-rag-reasoning#reinforcement-learning)

    - [Multi-Agent](https://github.com/davidzwz/awesome-rag-reasoning#multi-agent)

---

### 📊 [Benchmarks & Datasets](https://github.com/davidzwz/awesome-rag-reasoning#benchmarks-and-datasets)

[https://github.com/davidzwz/awesome-rag-reasoning#-benchmarks--datasets](https://github.com/davidzwz/awesome-rag-reasoning#-benchmarks--datasets)

The table linked below covers a diverse range of tasks. Each benchmark is annotated with its domain, knowledge type, reasoning capability, and dataset size.

- [Single-hop QA](https://github.com/davidzwz/awesome-rag-reasoning#single-hop-qa)
- [Multi-hop QA](https://github.com/davidzwz/awesome-rag-reasoning#multi-hop-qa)
- [Multi-choice QA](https://github.com/davidzwz/awesome-rag-reasoning#multi-choice-qa)
- [Multi-step QA](https://github.com/davidzwz/awesome-rag-reasoning#multi-step-qa)
- [Multimodal QA](https://github.com/davidzwz/awesome-rag-reasoning#multimodal-qa)
- [Long-form QA](https://github.com/davidzwz/awesome-rag-reasoning#long-form-qa)
- [Graph QA](https://github.com/davidzwz/awesome-rag-reasoning#graph-qa)
- [Code](https://github.com/davidzwz/awesome-rag-reasoning#code)
- [Dialog](https://github.com/davidzwz/awesome-rag-reasoning#dialog)
- [Fact Checking](https://github.com/davidzwz/awesome-rag-reasoning#fact-checking)
- [Text Summarization](https://github.com/davidzwz/awesome-rag-reasoning#text-summarization)

### 🤝 [Contributing](https://github.com/davidzwz/awesome-rag-reasoning#contributing)

[https://github.com/davidzwz/awesome-rag-reasoning#-contributing](https://github.com/davidzwz/awesome-rag-reasoning#-contributing)

Guidelines for contributing to this repository and adding citation information.

---

 📚 **Research Papers and Frameworks**: This section is organized according to the taxonomy in our research paper, providing resources for researchers and practitioners to explore, implement, and motivate new methods in the field.

## Reasoning-Enhanced RAG

[https://github.com/davidzwz/awesome-rag-reasoning#reasoning-enhanced-rag](https://github.com/davidzwz/awesome-rag-reasoning#reasoning-enhanced-rag)

### Retrieval Optimization

[https://github.com/davidzwz/awesome-rag-reasoning#retrieval-optimization](https://github.com/davidzwz/awesome-rag-reasoning#retrieval-optimization)

- 

(arXiv 2026) **Query Suggestion for Retrieval-Augmented Generation via Dynamic In-Context Learning**[[Paper]](https://arxiv.org/pdf/2601.08105)

- 

(NeurIPS 2025) **R3: Optimizing Retrieval for RAG via Reinforcement Learning** [[Paper](https://arxiv.org/abs/2510.24652)] [[Code](https://github.com/Yuan-Li-FNLP/R3-RAG)] [https://camo.githubusercontent.com/31b9909e4f5a2120c84244ab05968ad91eb4ddc4c7fd2d0fb212e15513ba67a7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5975616e2d4c692d464e4c502f52332d5241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/31b9909e4f5a2120c84244ab05968ad91eb4ddc4c7fd2d0fb212e15513ba67a7/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5975616e2d4c692d464e4c502f52332d5241473f7374796c653d736f6369616c)

- 

(ArXiv 2025) Graph-Guided Concept Selection for Efficient Retrieval-Augmented Generation [[Paper]](https://arxiv.org/abs/2510.24120)

- 

(ArXiv 2025) RL-QR: Generalized Reinforcement Learning for Retriever-Specific Query Rewriter with Unstructured Real-World Documents [[Paper]](https://arxiv.org/abs/2507.23242)

- 

(AAAI 2025) **MaFeRw: Query Rewriting with Multi-Aspect Feedbacks for Retrieval-Augmented Large Language Models**[[Paper]](https://ojs.aaai.org/index.php/AAAI/article/view/34732)[[Code]](https://github.com/yjEugenia/MaFeRw)[https://camo.githubusercontent.com/dc34158f30f96af6a3970fd229f167000ad3d5c444671706200b090a1798e547/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f796a457567656e69612f4d61466552773f7374796c653d736f6369616c](https://camo.githubusercontent.com/dc34158f30f96af6a3970fd229f167000ad3d5c444671706200b090a1798e547/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f796a457567656e69612f4d61466552773f7374796c653d736f6369616c)

- 

(ArXiv 2025) **Collab-RAG: Boosting Retrieval-Augmented Generation for Complex Question Answering via White-Box and Black-Box LLM Collaboration**[[Paper]](https://arxiv.org/abs/2504.04915)[[Code]](https://github.com/ritaranx/Collab-RAG/)[https://camo.githubusercontent.com/66c5d962db23c0d3160f0bd30b57dda0c2433b7d1542821614bc0bb201d09fee/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7269746172616e782f436f6c6c61622d5241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/66c5d962db23c0d3160f0bd30b57dda0c2433b7d1542821614bc0bb201d09fee/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7269746172616e782f436f6c6c61622d5241473f7374796c653d736f6369616c)

- 

(ArXiv 2025) **DeepRetrieval: Hacking Real Search Engines and Retrievers with Large Language Models via Reinforcement Learning**[[Paper]](https://arxiv.org/abs/2503.00223)[[Code]](https://github.com/pat-jj/DeepRetrieval)[https://camo.githubusercontent.com/c5afd5b261c7023998ec7bf4de2d2af3f1567869ceab3543a84fceeb5c4bc8fd/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7061742d6a6a2f4465657052657472696576616c3f7374796c653d736f6369616c](https://camo.githubusercontent.com/c5afd5b261c7023998ec7bf4de2d2af3f1567869ceab3543a84fceeb5c4bc8fd/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7061742d6a6a2f4465657052657472696576616c3f7374796c653d736f6369616c)

- 

(ArXiv 2025) **Credible plan-driven rag method for multi-hop question answering**[[Paper]](https://arxiv.org/abs/2504.16787)

- 

(ArXiv 2025) **FIND: Fine-grained Information Density Guided Adaptive Retrieval-Augmented Generation for Disease Diagnosis**[[Paper]](https://arxiv.org/abs/2502.14614)

- 

(ArXiv 2025) **LLM-Independent Adaptive RAG: Let the Question Speak for Itself**[[Paper]](https://arxiv.org/abs/2505.04253)[[Code]](https://github.com/marialysyuk/External_Adaptive_Retrieval)

- 

(ACL 2024) **Chain-of-Verification Reduces Hallucination in Large Language Models**[[Paper]](https://aclanthology.org/2024.findings-acl.212/)

- 

(EMNLP 2024) **Learning to Plan for Retrieval-Augmented Large Language Models from Knowledge Graphs**[[Paper]](https://aclanthology.org/2024.findings-emnlp.459/)[[Code]](https://github.com/zjukg/LPKG)[https://camo.githubusercontent.com/5ef2a4d1540b068d981429f928fca99d12926cb542c5acc3efba186734a82687/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7a6a756b672f4c504b473f7374796c653d736f6369616c](https://camo.githubusercontent.com/5ef2a4d1540b068d981429f928fca99d12926cb542c5acc3efba186734a82687/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7a6a756b672f4c504b473f7374796c653d736f6369616c)

- 

(EMNLP 2024) **Retrieval and Reasoning on KGs: Integrate Knowledge Graphs into Large Language Models for Complex Question Answering**[[Paper]](https://aclanthology.org/2024.findings-emnlp.446/)[[Code]](https://github.com/Dereck0602/Retrieval-and-Reasoning-on-KGs)[https://camo.githubusercontent.com/b2e596d23d133dc7c1ce1d16e071a7539c02c4abb62480a85473e1b0f51ba650/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f44657265636b303630322f52657472696576616c2d616e642d526561736f6e696e672d6f6e2d4b47733f7374796c653d736f6369616c](https://camo.githubusercontent.com/b2e596d23d133dc7c1ce1d16e071a7539c02c4abb62480a85473e1b0f51ba650/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f44657265636b303630322f52657472696576616c2d616e642d526561736f6e696e672d6f6e2d4b47733f7374796c653d736f6369616c)

- 

(NAACL 2024) **Adaptive-RAG: Learning to Adapt Retrieval-Augmented Large Language Models through Question Complexity**[[Paper]](https://arxiv.org/abs/2403.14403)[[Code]](https://github.com/starsuzi/Adaptive-RAG)[https://camo.githubusercontent.com/31ca38ab2f5925e5e3f237dacdd8d4e2ab50838eac2dfc9101ec68aa10b275d9/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7374617273757a692f41646170746976652d5241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/31ca38ab2f5925e5e3f237dacdd8d4e2ab50838eac2dfc9101ec68aa10b275d9/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7374617273757a692f41646170746976652d5241473f7374796c653d736f6369616c)

- 

(SIGIR 2024) **Can Query Expansion Improve Generalization of Strong Cross-Encoder Rankers?**[[Paper]](https://arxiv.org/abs/2311.09175)

- 

(LREC-COLING 2024) **RADCoT: Retrieval-Augmented Distillation to Specialization Models for Generating Chain-of-Thoughts in Query Expansion**[[Paper]](https://aclanthology.org/2024.lrec-main.1182/)[[Code]](https://github.com/ZIZUN/RADCoT)[https://camo.githubusercontent.com/ef6405b6141cd4cf2cc952a3f0b1971d972465ec276a7aff113c47d9385216d5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5a495a554e2f524144436f543f7374796c653d736f6369616c](https://camo.githubusercontent.com/ef6405b6141cd4cf2cc952a3f0b1971d972465ec276a7aff113c47d9385216d5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5a495a554e2f524144436f543f7374796c653d736f6369616c)

- 

(ArXiv 2024) **GNN-RAG: Graph Neural Retrieval for Large Language Model Reasoning**[[Paper]](https://arxiv.org/abs/2405.20139)[[Code]](https://github.com/cmavro/GNN-RAG)[https://camo.githubusercontent.com/b793f86734afa7df945879c79e4eba47cc5b77c2ac092b73aea6ccbf8ba1d33b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f636d6176726f2f474e4e2d5241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/b793f86734afa7df945879c79e4eba47cc5b77c2ac092b73aea6ccbf8ba1d33b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f636d6176726f2f474e4e2d5241473f7374796c653d736f6369616c)

- 

(ArXiv 2024) **RuleRAG: Rule-Guided Retrieval-Augmented Generation with Language Models for Question Answering**[[Paper]](https://arxiv.org/abs/2410.22353)[[Code]](https://anonymous.4open.science/r/RuleRAG)

### Integration Enhancement

[https://github.com/davidzwz/awesome-rag-reasoning#integration-enhancement](https://github.com/davidzwz/awesome-rag-reasoning#integration-enhancement)

- 

(ArXiv 2025) TruthfulRAG: Resolving Factual-level Conflicts in Retrieval-Augmented Generation [[Paper]](https://arxiv.org/abs/2511.10375) [[Code](https://github.com/LinfengGao/ProbeRAG)] [https://camo.githubusercontent.com/b9830589f7204498a6ad679db444930220422b14617de975e0ee8304bf3c2a81/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f4c696e66656e6747616f2f50726f62655241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/b9830589f7204498a6ad679db444930220422b14617de975e0ee8304bf3c2a81/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f4c696e66656e6747616f2f50726f62655241473f7374796c653d736f6369616c)

- 

(OpenReview 2025) Probing Latent Knowledge Conflict for Faithful Retrieval-Augmented Generation [[Paper]](https://openreview.net/forum?id=NhO6iEUISf)

- 

(COLM 2025) Retrieval-Augmented Generation with Conflicting Evidence (RAMDocs + MADAM-RAG) [[Paper]](https://arxiv.org/abs/2504.13079)[[Code]](https://github.com/HanNight/RAMDocs)[https://camo.githubusercontent.com/8861ca1e88085a7bf113eb26372f857ba23faf511139c4fd1da7c06185234901/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f48616e4e696768742f52414d446f63733f7374796c653d736f6369616c](https://camo.githubusercontent.com/8861ca1e88085a7bf113eb26372f857ba23faf511139c4fd1da7c06185234901/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f48616e4e696768742f52414d446f63733f7374796c653d736f6369616c)

- 

(ArXiv 2025) **DualRAG: A Dual-Process Approach to Integrate Reasoning and Retrieval for Multi-Hop Question Answering**[[Paper]](https://arxiv.org/abs/2504.18243)

- 

(EMNLP 2024) **SEER: Self-Aligned Evidence Extraction for Retrieval-Augmented Generation**[[Paper]](https://aclanthology.org/2024.emnlp-main.178/)[[Code]](https://github.com/HITsz-TMG/SEER)[https://camo.githubusercontent.com/40c5c3a101552976c870112a11ff680607382a3fd665b66a1c5d4166575c2a1a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f484954737a2d544d472f534545523f7374796c653d736f6369616c](https://camo.githubusercontent.com/40c5c3a101552976c870112a11ff680607382a3fd665b66a1c5d4166575c2a1a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f484954737a2d544d472f534545523f7374796c653d736f6369616c)

- 

(ICLR 2024) **Making Retrieval-Augmented Language Models Robust to Irrelevant Context**[[Paper]](https://openreview.net/forum?id=ZS4m74kZpH)[[Code]](https://github.com/oriyor/ret-robust)[https://camo.githubusercontent.com/7e50f14443f95745dc457cf52cff016f55edd42e81023976a68182d0224645c8/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6f7269796f722f7265742d726f627573743f7374796c653d736f6369616c](https://camo.githubusercontent.com/7e50f14443f95745dc457cf52cff016f55edd42e81023976a68182d0224645c8/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6f7269796f722f7265742d726f627573743f7374796c653d736f6369616c)

- 

(ACL 2024) **BeamAggR: Beam Aggregation Reasoning over Multi-source Knowledge for Multi-hop Question Answering**[[Paper]](https://aclanthology.org/2024.acl-long.67/)

### Generation Enhancement

[https://github.com/davidzwz/awesome-rag-reasoning#generation-enhancement](https://github.com/davidzwz/awesome-rag-reasoning#generation-enhancement)

- 

(arXiv 2026) **RAGShaper: Eliciting Sophisticated Agentic RAG Skills via Automated Data Synthesis** [[Paper](https://arxiv.org/pdf/2601.08699)]

- 

(arXiv 2026) **Disco-RAG: Discourse-Aware Retrieval-Augmented Generation for Long-Form Question Answering** [[Paper](https://arxiv.org/abs/2601.04377)]

- 

(ArXiv 2026) EviOmni: Learning to Extract Rational Evidence via Reinforcement Learning for Retrieval-Augmented Generation [[Paper]](https://arxiv.org/abs/2507.15586)[[Code]](https://huggingface.co/HIT-TMG/EviOmni-nq_train-1.5B)

- 

(ArXiv 2026) TreePS-RAG: Tree-based Process Supervision for Retrieval-Augmented Generation [[Paper]](https://arxiv.org/abs/2601.06922)

- 

(ACL 2025) RAG-Critic: Leveraging Automated Critic-Guided Agentic Workflow for Retrieval Augmented Generation [[Paper]](https://aclanthology.org/2025.acl-long.179/)[[Code]](https://github.com/RUC-NLPIR/RAG-Critic)[https://camo.githubusercontent.com/b9bd285b402295c1d49118ad78fd98292924d07f7837a7795b2243f62de5b090/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5255432d4e4c5049522f5241472d4372697469633f7374796c653d736f6369616c](https://camo.githubusercontent.com/b9bd285b402295c1d49118ad78fd98292924d07f7837a7795b2243f62de5b090/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5255432d4e4c5049522f5241472d4372697469633f7374796c653d736f6369616c)

- 

(AAAI 2025) **Improving Retrieval Augmented Language Model with Self-Reasoning**[[Paper]](https://ojs.aaai.org/index.php/AAAI/article/view/34743)

- 

(ArXiv 2025) **RARE: Retrieval-Augmented Reasoning Enhancement for Large Language Models**[[Paper]](https://arxiv.org/abs/2503.23513)

- 

(ArXiv 2025) **AlignRAG: Leveraging Critique Learning for Evidence-Sensitive Retrieval-Augmented Reasoning**[[Paper]](https://arxiv.org/pdf/2504.14858v3)[[Code]](https://github.com/QQW-ing/RAG-ReasonAlignment)[https://camo.githubusercontent.com/756475c7a5c4fd11237a1246081fbf19146d6a6439bef5b482e141d5a37cafee/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5151572d696e672f5241472d526561736f6e416c69676e6d656e743f7374796c653d736f6369616c](https://camo.githubusercontent.com/756475c7a5c4fd11237a1246081fbf19146d6a6439bef5b482e141d5a37cafee/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5151572d696e672f5241472d526561736f6e416c69676e6d656e743f7374796c653d736f6369616c)

- 

(EMNLP 2024) **Open-RAG: Enhanced Retrieval Augmented Reasoning with Open-Source Large Language Models**[[Paper]](https://aclanthology.org/2024.findings-emnlp.831/)[[Code]](https://github.com/ShayekhBinIslam/openrag)[https://camo.githubusercontent.com/69b61b3967b28660a069b79026b378dbea316fa38d77ca0bf08685847f83498d/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f53686179656b6842696e49736c616d2f6f70656e7261673f7374796c653d736f6369616c](https://camo.githubusercontent.com/69b61b3967b28660a069b79026b378dbea316fa38d77ca0bf08685847f83498d/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f53686179656b6842696e49736c616d2f6f70656e7261673f7374796c653d736f6369616c)

- 

(EMNLP 2024) **TRACE the evidence: Constructing knowledge-grounded reasoning chains for retrieval-augmented generation**[[Paper]](https://arxiv.org/abs/2406.11460)[[Code]](https://github.com/jyfang6/trace)[https://camo.githubusercontent.com/901ece359311698f292eff03121fb3d8a413846740c0df8d24f5460e8f9534ff/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6a7966616e67362f74726163653f7374796c653d736f6369616c](https://camo.githubusercontent.com/901ece359311698f292eff03121fb3d8a413846740c0df8d24f5460e8f9534ff/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6a7966616e67362f74726163653f7374796c653d736f6369616c)

**[⬆️ Back to Table of Contents](https://github.com/davidzwz/awesome-rag-reasoning#what-this-repository-covers)**

## RAG-Enhanced Reasoning

[https://github.com/davidzwz/awesome-rag-reasoning#rag-enhanced-reasoning](https://github.com/davidzwz/awesome-rag-reasoning#rag-enhanced-reasoning)

### External Knowledge Retrieval

[https://github.com/davidzwz/awesome-rag-reasoning#external-knowledge-retrieval](https://github.com/davidzwz/awesome-rag-reasoning#external-knowledge-retrieval)

#### Knowledge Base

[https://github.com/davidzwz/awesome-rag-reasoning#knowledge-base](https://github.com/davidzwz/awesome-rag-reasoning#knowledge-base)

- 

(arXiv 2025) **T-GRAG: A Dynamic GraphRAG Framework for Resolving Temporal Conflicts and Redundancy in Knowledge Retrieval** [[Paper](https://arxiv.org/abs/2508.01680)] [[Code]](https://github.com/Arvin0313/T-GRAG)[https://camo.githubusercontent.com/3b89afdb55ec3c5020e361c38bf2c92c6724fb4391a937b11d464adb2d18f360/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f417276696e303331332f542d475241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/3b89afdb55ec3c5020e361c38bf2c92c6724fb4391a937b11d464adb2d18f360/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f417276696e303331332f542d475241473f7374796c653d736f6369616c)

- 

(ICLR 2025) **KBLaM: Knowledge Base augmented Language Model**[[Paper]](https://arxiv.org/pdf/2410.10450)[[Code]](https://github.com/microsoft/KBLaM/)[https://camo.githubusercontent.com/e5a38b84c3fb98b730ab47714ef6c601026de6a0cbb6d4519e46d91a1efe5bd2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6d6963726f736f66742f4b424c614d3f7374796c653d736f6369616c](https://camo.githubusercontent.com/e5a38b84c3fb98b730ab47714ef6c601026de6a0cbb6d4519e46d91a1efe5bd2/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6d6963726f736f66742f4b424c614d3f7374796c653d736f6369616c)

- 

(ArXiv 2025) **Assisting Mathematical Formalization with A Learning-based Premise Retriever**[[Paper]](https://arxiv.org/pdf/2501.13959)[[Code]](https://github.com/ruc-ai4math/Premise-Retrieval)[https://camo.githubusercontent.com/e8437537cf905dc6bdd7c3c2b347799b16423619b422de5f4d9ccf3aaadf6333/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7275632d6169346d6174682f5072656d6973652d52657472696576616c3f7374796c653d736f6369616c](https://camo.githubusercontent.com/e8437537cf905dc6bdd7c3c2b347799b16423619b422de5f4d9ccf3aaadf6333/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7275632d6169346d6174682f5072656d6973652d52657472696576616c3f7374796c653d736f6369616c)

- 

(ArXiv 2025) **ReaRAG: Knowledge-guided Reasoning Enhances Factuality of Large Reasoning Models with Iterative Retrieval Augmented Generation**[[Paper]](https://arxiv.org/pdf/2503.21729)[[Code]](https://github.com/THU-KEG/ReaRAG)[https://camo.githubusercontent.com/1d2f750fbdbb520a97c5be0fc73ced6761daf50ca0d609210e08b3251d11e8e5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5448552d4b45472f5265615241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/1d2f750fbdbb520a97c5be0fc73ced6761daf50ca0d609210e08b3251d11e8e5/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f5448552d4b45472f5265615241473f7374796c653d736f6369616c)

- 

(ArXiv 2025) **Scaling Test-Time Inference with Policy-Optimized, Dynamic Retrieval-Augmented Generation via KV Caching and Decoding**[[Paper]](https://arxiv.org/pdf/2504.01281?)

- 

(ArXiv 2025) **PIKE-RAG: sPecIalized KnowledgE and Rationale Augmented Generation**[[Paper]](https://arxiv.org/pdf/2501.11551)[[Code]](https://github.com/microsoft/PIKE-RAG?tab=readme-ov-file)[https://camo.githubusercontent.com/634d55600b31d2cde4fe524ce9b2e3a7c045586c1e96f7016a0865ccedfa6e9a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6d6963726f736f66742f50494b452d5241473f7374796c653d736f6369616c](https://camo.githubusercontent.com/634d55600b31d2cde4fe524ce9b2e3a7c045586c1e96f7016a0865ccedfa6e9a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6d6963726f736f66742f50494b452d5241473f7374796c653d736f6369616c)

- 

(SIGIR 2024) **Retrieval-Augmented Generation with Knowledge Graphs for Customer Service Question Answering**[[Paper]](https://dl.acm.org/doi/abs/10.1145/3626772.3661370)
