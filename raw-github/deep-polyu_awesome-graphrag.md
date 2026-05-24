---
repo: deep-polyu/awesome-graphrag
url: https://github.com/deep-polyu/awesome-graphrag
content_timestamp: 2026-04-07
time_slice: 2026-04
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - DEEP-PolyU/Awesome-GraphRAG: Awesome-GraphRAG: A curated list of resources (surveys, papers, benchmarks, and opensource projects) on graph-based retrieval-augmented generation. · GitHub

**Source**: https://github.com/deep-polyu/awesome-graphrag

---

[Skip to content](https://github.com/deep-polyu/awesome-graphrag#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[DEEP-PolyU](https://github.com/DEEP-PolyU)

/
**[Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG)**

Public

- [Notifications](https://github.com/login?return_to=%2FDEEP-PolyU%2FAwesome-GraphRAG)You must be signed in to change notification settings
- [Fork
    204](https://github.com/login?return_to=%2FDEEP-PolyU%2FAwesome-GraphRAG)
- 
[Star
          2.4k](https://github.com/login?return_to=%2FDEEP-PolyU%2FAwesome-GraphRAG)

[https://github.com/DEEP-PolyU/Awesome-GraphRAG](https://github.com/DEEP-PolyU/Awesome-GraphRAG)

[Branches](https://github.com/DEEP-PolyU/Awesome-GraphRAG/branches)[Tags](https://github.com/DEEP-PolyU/Awesome-GraphRAG/tags)

[https://github.com/DEEP-PolyU/Awesome-GraphRAG/branches](https://github.com/DEEP-PolyU/Awesome-GraphRAG/branches)[https://github.com/DEEP-PolyU/Awesome-GraphRAG/tags](https://github.com/DEEP-PolyU/Awesome-GraphRAG/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History175 Commits175 Commits |  |  |  |
| figs | figs |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome-GraphRAG (GraphRAG Survey)

[https://github.com/deep-polyu/awesome-graphrag#awesome-graphrag-graphrag-survey](https://github.com/deep-polyu/awesome-graphrag#awesome-graphrag-graphrag-survey)

[https://awesome.re](https://awesome.re)[http://makeapullrequest.com](http://makeapullrequest.com)[https://arxiv.org/abs/2501.13958](https://arxiv.org/abs/2501.13958)[http://makeapullrequest.com](http://makeapullrequest.com)[http://makeapullrequest.com](http://makeapullrequest.com)

This repository contains a curated list of resources on graph-based retrieval-augmented generation (GraphRAG), which are classified according to "[A Survey of Graph Retrieval-Augmented Generation for Customized Large Language Models](https://arxiv.org/abs/2501.13958)". Continuously updating, stay tuned!

**📃 Please [cite our paper](https://github.com/deep-polyu/awesome-graphrag#-citation)** if you find our survey or repository helpful!

# 🎉 News

[https://github.com/deep-polyu/awesome-graphrag#-news](https://github.com/deep-polyu/awesome-graphrag#-news)

- **[2026-04-07]** Our **[ProbeRAG](https://arxiv.org/abs/2510.12460)** for RAG faithfulness is accepted by ACL'26.
- **[2026-04-07]** Our **[BAPO](https://arxiv.org/abs/2601.11037)** for reliable agentic search is accepted by ACL'26.
- **[2026-04-07]** Our **[LegalGraphRAG](https://www.researchgate.net/publication/403734810_LegalGraphRAG_Multi-Agent_Graph_Retrieval-Augmented_Generation_for_Reliable_Legal_Reasoning)** for reliable legal reasoning is accepted by ACL'26.
- **[2026-04-07]** Our **[LogicPoison](https://arxiv.org/abs/2604.02954)**, a GraphRAG attack model, is accepted by ACL'26.
- **[2026-01-26]** Our **[LinearRAG](https://github.com/DEEP-PolyU/LinearRAG)** for efficient GraphRAG is accepted by ICLR’26.
- **[2026-01-26]** Our **[GraphRAG Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark)** is accepted by ICLR’26.
- **[2025-11-08]** Our **[LogicRAG](https://github.com/chensyCN/LogicRAG.git)** is accepted by AAAI'26.
- **[2025-10-27]** We release **[LinearRAG](https://github.com/DEEP-PolyU/LinearRAG)**, a relation-free graph construction method for efficient GraphRAG.
- **[2025-06-06]** We release the **[GraphRAG Benchmark](https://github.com/GraphRAG-Bench/GraphRAG-Benchmark.git)** for evaluating GraphRAG models.
- **[2025-05-14]** We release the [GraphRAG Benchmark dataset](https://huggingface.co/datasets/GraphRAG-Bench/GraphRAG-Bench).
- **[2025-01-21]** We release the [GraphRAG survey](https://github.com/DEEP-PolyU/Awesome-GraphRAG).

---

### 

[https://github.com/DEEP-PolyU/Awesome-GraphRAG/blob/main/figs/main_fig.png](https://github.com/DEEP-PolyU/Awesome-GraphRAG/blob/main/figs/main_fig.png)

*Overview of traditional RAG and two typical GraphRAG workflows. *

[https://github.com/deep-polyu/awesome-graphrag#-----------overview-of-traditional-rag-and-two-typical-graphrag-workflows-](https://github.com/deep-polyu/awesome-graphrag#-----------overview-of-traditional-rag-and-two-typical-graphrag-workflows-)

- **Non-graph RAG** organizes the corpus into chunks, ranks them by similarity, and retrieves the most relevant text for generating responses.
- **Knowledge-based GraphRAG** extracts detailed knowledge graphs from the corpus using entity recognition and relation extraction, offering fine-grained, domain-specific information.
- **Index-based GraphRAG** summarizes the corpus into high-level topic nodes, which are linked to form an index graph, while the fact linking maps topics to text.

---

# RAG vs. GraphRAG

[https://github.com/deep-polyu/awesome-graphrag#rag-vs-graphrag](https://github.com/deep-polyu/awesome-graphrag#rag-vs-graphrag)

GraphRAG is a new paradigm of RAG that revolutionizes domain-specific LLM applications, by addressing traditional RAG limitations through three key innovations: **(i) graph-structured knowledge representation** that explicitly captures entity relationships and domain hierarchies, **(ii) graph-aware retrieval mechanisms** that enable multi-hop reasoning and context-preserving knowledge acquisition, and **(iii) structure-guided knowledge search algorithms** that ensure efficient retrieval across large-scale corpora.

### 

[https://github.com/DEEP-PolyU/Awesome-GraphRAG/blob/main/figs/rag_vs_graphrag.png](https://github.com/DEEP-PolyU/Awesome-GraphRAG/blob/main/figs/rag_vs_graphrag.png)

*Comparison between traditional RAG and GraphRAG.*

[https://github.com/deep-polyu/awesome-graphrag#-------comparison-between-traditional-rag-and-graphrag](https://github.com/deep-polyu/awesome-graphrag#-------comparison-between-traditional-rag-and-graphrag)

# 📫 Contact Us

[https://github.com/deep-polyu/awesome-graphrag#-contact-us](https://github.com/deep-polyu/awesome-graphrag#-contact-us)

We welcome researchers to share related work to enrich this list or provide insightful comments on our survey. Feel free to reach out to the corresponding co-first authors: [Qinggang Zhang](https://qing145.github.io/), [Shengyuan Chen](https://chensycn.github.io/).

## Table of Content

[https://github.com/deep-polyu/awesome-graphrag#table-of-content](https://github.com/deep-polyu/awesome-graphrag#table-of-content)

- [🍀 Citation](https://github.com/deep-polyu/awesome-graphrag#-citation)
- [📫 Contact Us](https://github.com/deep-polyu/awesome-graphrag#-contact-us)
- [📈 Trend of GraphRAG Research](https://github.com/deep-polyu/awesome-graphrag#-trend-of-graphrag-research)
- [📜 Research Papers](https://github.com/deep-polyu/awesome-graphrag#-research-papers)
  - [Knowledge Organization](https://github.com/deep-polyu/awesome-graphrag#knowledge-organization)
    - [Graph for Knowledge Indexing](https://github.com/deep-polyu/awesome-graphrag#graphs-for-knowledge-indexing)
    - [Graph as Knowledge Carrier](https://github.com/deep-polyu/awesome-graphrag#graphs-as-knowledge-carrier)
      - [Knowledge Graph Construction from Corpus](https://github.com/deep-polyu/awesome-graphrag#knowledge-graph-construction-from-corpus)
      - [GraphRAG with Existing KGs](https://github.com/deep-polyu/awesome-graphrag#graphrag-with-existing-kgs)

    - [Hybrid GraphRAG](https://github.com/deep-polyu/awesome-graphrag#hybrid-graphrag)

  - [Knowledge Retrieval](https://github.com/deep-polyu/awesome-graphrag#knowledge-retrieval)
    - [Semantics Similarity-based Retriever](https://github.com/deep-polyu/awesome-graphrag#semantics-similarity-based-retriever)
    - [Logical Reasoning-based Retriever](https://github.com/deep-polyu/awesome-graphrag#logical-reasoning-based-retriever)
    - [LLM-based Retriever](https://github.com/deep-polyu/awesome-graphrag#llm-based-retriever)
    - [GNN-based Retriever](https://github.com/deep-polyu/awesome-graphrag#gnn-based-retriever)
    - [Multi-round Retriever](https://github.com/deep-polyu/awesome-graphrag#multi-round-retriever)
    - [Post-retrieval](https://github.com/deep-polyu/awesome-graphrag#post-retrieval)
    - [Hybrid Retriever](https://github.com/deep-polyu/awesome-graphrag#hybrid-retriever)

  - [Knowledge Integration](https://github.com/deep-polyu/awesome-graphrag#knowledge-integration)
    - [Fine-tuning](https://github.com/deep-polyu/awesome-graphrag#fine-tuning)
      - [Fine-tuning with Node-level Knowledge](https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-node-level-knowledge)
      - [Fine-tuning with Path-level Knowledge](https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-path-level-knowledge)
      - [Fine-tuning with Subgraph-level Knowledge](https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-subgraph-level-knowledge)

    - [In-context Learning](https://github.com/deep-polyu/awesome-graphrag#in-context-learning)
      - [Graph-enhanced Chain-of-Thought](https://github.com/deep-polyu/awesome-graphrag#graph-enhanced-chain-of-thought)
      - [Collaborative Knowledge Graph Refinement](https://github.com/deep-polyu/awesome-graphrag#collaborative-knowledge-graph-refinement)

- [📚 Related Survey Papers](https://github.com/deep-polyu/awesome-graphrag#-related-survey-papers)
- [🏆 Benchmarks](https://github.com/deep-polyu/awesome-graphrag#-benchmarks)
- [💻 Open-source Projects](https://github.com/deep-polyu/awesome-graphrag#-open-source-projects)

# 📈 Trend of GraphRAG Research

[https://github.com/deep-polyu/awesome-graphrag#-trend-of-graphrag-research](https://github.com/deep-polyu/awesome-graphrag#-trend-of-graphrag-research)

### 

[https://github.com/DEEP-PolyU/Awesome-GraphRAG/blob/main/figs/trend.png](https://github.com/DEEP-PolyU/Awesome-GraphRAG/blob/main/figs/trend.png)

*The development trends in the field of GraphRAG with representative works.*

[https://github.com/deep-polyu/awesome-graphrag#-------the-development-trends-in-the-field-of-graphrag-with-representative-works](https://github.com/deep-polyu/awesome-graphrag#-------the-development-trends-in-the-field-of-graphrag-with-representative-works)

# 📜 Research Papers

[https://github.com/deep-polyu/awesome-graphrag#-research-papers](https://github.com/deep-polyu/awesome-graphrag#-research-papers)

## Knowledge Organization

[https://github.com/deep-polyu/awesome-graphrag#knowledge-organization](https://github.com/deep-polyu/awesome-graphrag#knowledge-organization)

### Graphs for Knowledge Indexing

[https://github.com/deep-polyu/awesome-graphrag#graphs-for-knowledge-indexing](https://github.com/deep-polyu/awesome-graphrag#graphs-for-knowledge-indexing)

- (ICLR 2026) **LinearRAG: Linear Graph Retrieval Augmented Generation on Large-scale Corpora**[[Paper]](https://arxiv.org/abs/2510.10114)
- (arXiv 2025) **Improving Multi-step RAG with Hypergraph-based Memoryfor Long-Context Complex Relational Modeling**[[Paper]](https://arxiv.org/abs/2512.23959)
- (EMNLP 2025) **Don’t Forget the Base Retriever! A Low-Resource Graph-based Retriever for Multi-hop Question Answering**[[Paper]](https://aclanthology.org/2025.emnlp-industry.174/)
- (arXiv 2025) **Query-Centric Graph Retrieval Augmented Generation**[[Paper]](https://arxiv.org/abs/2509.22009)
- (arXiv 2025) **Multi-Agent GraphRAG: A Text-to-Cypher Framework for Labeled Property Graphs**[[Paper]](https://arxiv.org/abs/2510.09156)
- (arXiv 2025) **Grounded by Experience: Generative Healthcare Prediction Augmented with Hierarchical Agentic Retrieval**[[Paper]](https://arxiv.org/abs/2511.13293)
- (ICML 2025) **HippoRAG2: From RAG to Memory: Non-Parametric Continual Learning for Large Language Models**[[Paper]](https://arxiv.org/abs/2502.14802)
- (arXiv 2025) **PersonaAgent with GraphRAG: Community-Aware Knowledge Graphs for Personalized LLM**[[Paper]](https://arxiv.org/abs/2511.17467)
- (arXiv 2025) **E^2GraphRAG: Streamlining Graph-based RAG for High Efficiency and Effectiveness**[[Paper]](https://arxiv.org/abs/2505.24226)
- (arXiv 2025) **DIGIMON: A unified and modular graph-based RAG framework**[[Paper]](https://github.com/JayLZhou/GraphRAG.git)
- (arXiv 2025) **ArchRAG: Attributed Community-based Hierarchical Retrieval-Augmented Generation**[[Paper]](https://arxiv.org/abs/2502.09891)
- (arXiv 2025) **KET-RAG: A Cost-Efficient Multi-Granular Indexing Framework for Graph-RAG**[[Paper]](https://arxiv.org/abs/2502.09304)
- (arXiv 2025) **PIKE-RAG: sPecIalized KnowledgE and Rationale Augmented Generation**[[Paper]](https://arxiv.org/abs/2501.11551)
- (EMNLP 2025 Findings) **Retrieval-Augmented Generation with Hierarchical Knowledge**[[Paper]](https://arxiv.org/abs/2503.10150)
- (arXiv 2024) **Graph Neural Network Enhanced Retrieval for Question Answering of LLMs**[[Paper]](https://arXiv.org/abs/2406.06572)
- (arXiv 2024) **KAG: Boosting LLMs in Professional Domains via Knowledge Augmented Generation**[[Paper]](https://arxiv.org/abs/2409.13731)
- (arXiv 2024) **OG-RAG: Ontology-Grounded Retrieval-Augmented Generation For Large Language Models**[[Paper]](https://arxiv.org/abs/2412.15235)
- (arXiv 2024) **GRAG: Graph Retrieval-Augmented Generation**[[Paper]](https://arxiv.org/abs/2405.16506)
- (arXiv 2024) **Empowering Large Language Models to Set up a Knowledge Retrieval Indexer via Self-Learning**[[Paper]](https://arXiv.org/abs/2405.16933)
- (ICLR 2024) **RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval**[[Paper]](https://arxiv.org/abs/2401.18059)
- (AAAI 2024) **Knowledge graph prompting for multi-document question answering**[[Paper]](https://dl.acm.org/doi/10.1609/aaai.v38i17.29889)
- (arXiv 2024) **GraphCoder: Enhancing Repository-Level Code Completion via Code Context Graph-based Retrieval and Language Model**[[Paper]](https://arXiv.org/abs/2406.07003)
- (NeurIPS 2023) **Avis: Autonomous visual information seeking with large language model agent**[[Paper]](https://openreview.net/forum?id=7EMphtUgCI&noteId=yGw4rbGozi)
- (CoRL 2023) **Sayplan: Grounding large language models using 3d scene graphs for scalable robot task planning**[[Paper]](https://proceedings.mlr.press/v229/rana23a/rana23a.pdf)
- (arXiv 2020) **Answering complex open-domain questions with multi-hop dense retrieval**[[Paper]](https://arXiv.org/abs/2009.12756)
- (arXiv 2019) **Knowledge guided text retrieval and reading for open domain question answering**[[Paper]](https://arXiv.org/abs/1911.03868)

### Graphs as Knowledge Carrier

[https://github.com/deep-polyu/awesome-graphrag#graphs-as-knowledge-carrier](https://github.com/deep-polyu/awesome-graphrag#graphs-as-knowledge-carrier)

#### Knowledge Graph Construction from Corpus

[https://github.com/deep-polyu/awesome-graphrag#knowledge-graph-construction-from-corpus](https://github.com/deep-polyu/awesome-graphrag#knowledge-graph-construction-from-corpus)

- (AAAI 2026) **You Don’t Need Pre-built Graphs for RAG: Retrieval Augmented Generation with Adaptive Reasoning Structures**[[Paper]](https://arxiv.org/abs/2508.06105)
- (arXiv 2025) **AutoGraph-R1: End-to-End Reinforcement Learning for Knowledge Graph Construction**[[Paper]](https://arxiv.org/abs/2510.15339)
- (arXiv 2025) **AGRAG: Advanced Graph-based Retrieval-Augmented Generation for LLMs**[[Paper]](https://arxiv.org/abs/2511.05549)
- (EMNLP 2025) **MaGiX: A Multi-Granular Adaptive Graph Intelligence Framework for Enhancing Cross-Lingual RAG**[[Paper]](https://aclanthology.org/anthology-files/anthology-files/pdf/findings/2025.findings-emnlp.279.pdf)
- (CIKM 2025) **Context-Aware Fine-Grained Graph RAG for Query-Focused Summarization**[[Paper]](https://dl.acm.org/doi/10.1145/3746252.3760935)
- (CIKM 2025) **DocPolicyKG: A Lightweight LLM-Based Framework for Knowledge Graph Construction from Chinese Policy Documents**[[Paper]](https://dl.acm.org/doi/abs/10.1145/3746252.3760904)
- (arXiv 2025) **SUBQRAG: SUB-QUESTION DRIVEN DYNAMIC GRAPH RAG**[[Paper]](https://arxiv.org/abs/2510.07718)
- (arXiv 2025) **Ontology Learning and Knowledge Graph Construction: A Comparison of Approaches and Their Impact on RAG Performance**[[Paper]](https://arxiv.org/abs/2511.05991)
- (NeurIPS 2025) **GFM-RAG: Graph Foundation Model for Retrieval Augmented Generation**[Paper](https://arxiv.org/abs/2502.01113)
- (arXiv 2025) **G-reasoner: Foundation Models for Unified Reasoning over Graph-structured Knowledge**[[Paper]](https://arxiv.org/abs/2509.24276)
- (CVPR 2025) **Medical Graph RAG: Towards Safe Medical Large Language Model via Graph Retrieval-Augmented Generation**[[Paper]](https://arxiv.org/abs/2408.04187)
- (arXiv 2025) **Youtu-GraphRAG: Vertically Unified Agents for Graph Retrieval-Augmented Complex Reasoning**[[Paper]](https://www.arxiv.org/abs/2508.19855)
- (arXiv 2025) **Retrieval-Augmented Generation with Hierarchical Knowledge**[[Paper]](https://arxiv.org/abs/2503.10150)
- (arXiv 2025) **MedRAG: Enhancing Retrieval-augmented Generation with Knowledge Graph-Elicited Reasoning for Healthcare Copilot**[[Paper]](https://arxiv.org/abs/2502.04413)
- (arXiv 2025) **PathRAG: Pruning Graph-based Retrieval Augmented Generation with Relational Paths**[[Paper]](https://arxiv.org/abs/2502.14902)
- (EDBT 2025) **DBCopilot: Natural Language Querying over Massive Databases via Schema Routing**[[Paper]](https://openproceedings.org/2025/conf/edbt/paper-209.pdf)
- (arXiv 2024) **From local to global: A graph rag approach to query-focused summarization**[[Paper]](https://arXiv.org/abs/2404.16130)
- (EMNLP 2024) **Structure Guided Prompt: Instructing Large Language Model in Multi-Step Reasoning by Exploring Graph Structure of the Text**[[Paper]](https://aclanthology.org/2024.emnlp-main.528.pdf)
- (EMNLP 2024 Findings) **GraphReader: Building Graph-based Agent to Enhance Long-Context Abilities of Large Language Models**[[Paper]](https://aclanthology.org/2024.findings-emnlp.746/)
- (SIGIR 2024) **Retrieval-augmented generation with knowledge graphs for customer service question answering**[[Paper]](https://dl.acm.org/doi/abs/10.1145/3626772.3661370)
- (arXiv 2024) **DynaGRAG | Exploring the Topology of Information for Advancing Language Understanding and Generation in Graph Retrieval-Augmented Generation**[[Paper]](https://arxiv.org/abs/2412.18644)
- (arXiv 2024) **FastRAG: Retrieval Augmented Generation for Semi-structured Data**[[Paper]](https://arxiv.org/abs/2411.13773)
- (TechRxiv 2024) **LuminiRAG: Vision-Enhanced Graph RAG for Complex Multi-Modal Document Understanding**[[Paper]](https://www.techrxiv.org/users/867713/articles/1248304-luminirag-vision-enhanced-graph-rag-for-complex-multi-modal-document-understanding)
- (BigData 2023) **AutoKG: Efficient automated knowledge graph generation for language models**[[Paper]](https://ieeexplore.ieee.org/abstract/document/10386454)
- (ACL 2019) **Using Local Knowledge Graph Construction to Scale Seq2Seq Models to Multi-Document Inputs**[[Paper]](https://aclanthology.org/D19-1428.pdf)
- (SIGIR 2019) **Answering complex questions by joining multi-document evidence with quasi knowledge graphs**[[Paper]](https://dl.acm.org/doi/10.1145/3331184.3331252)

#### GraphRAG with Existing KGs

[https://github.com/deep-polyu/awesome-graphrag#graphrag-with-existing-kgs](https://github.com/deep-polyu/awesome-graphrag#graphrag-with-existing-kgs)

- (arXiv 2025) **GraphSearch: An Agentic Deep Searching Workflow for Graph Retrieval-Augmented Generation**[[Paper]](https://arxiv.org/abs/2509.22009)
- (arXiv 2025) **Detecting Hallucinations in Graph Retrieval-Augmented Generation via Attention Patterns and Semantic Alignment**[[Paper]](https://arxiv.org/abs/2512.09148)
- （arXiv 2025） **Inference Scaled GraphRAG: Improving Multi Hop Question Answering on Knowledge Graphs**[[Paper]](https://arxiv.org/abs/2506.19967)
- (AAAI 2025) **LightPROF: A Lightweight Reasoning Framework for Large Language Model on Knowledge Graph**[[Paper]](https://arxiv.org/abs/2504.03137)
- (ICLR 2025) **Simple is Effective: The Roles of Graphs and Large Language Models in Knowledge-Graph-Based Retrieval-Augmented Generation**[[Paper]](https://openreview.net/forum?id=JvkuZZ04O7)
- (arXiv 2025) **Empowering GraphRAG with Knowledge Filtering and Integration**[[Paper]](https://arxiv.org/abs/2503.13804)
- (arXiv 2024)**StructRAG: Boosting Knowledge Intensive Reasoning of LLMs via Inference-time Hybrid Information Structurization**[[Paper]](https://arXiv.org/abs/2410.08815)
- (ICLR 2024) **Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning**[[Paper]](https://openreview.net/forum?id=ZGNWW7xZ6Q)
- (AAAI 2024) **Mitigating large language model hallucinations via autonomous knowledge graph-based retrofitting**[[Paper]](https://dl.acm.org/doi/10.1609/aaai.v38i16.29770)
- (ICLR 2024) **Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph**[[Paper]](https://openreview.net/forum?id=nnVO1PvbTv)
- (Bioinformatics 2024) **Biomedical knowledge graph-enhanced prompt generation for large language models**[[Paper]](https://academic.oup.com/bioinformatics/article/40/9/btae560/7759620)
- (NeurIPS 2024) **KnowGPT: Knowledge Graph based PrompTing for Large Language Models**[[Paper]](https://openreview.net/forum?id=PacBluO5m7&referrer=%5Bthe%20profile%20of%20Daochen%20Zha%5D(%2Fprofile%3Fid%3D~Daochen_Zha1))
- (ACL 2024 Findings) **Knowledge Graph-Enhanced Large Language Models via Path Selection**[[Paper]](https://aclanthology.org/2024.findings-acl.376/)
- (IEEE VIS 2024) **KNOWNET: Guided Health Information Seeking from LLMs via Knowledge Graph Integration**[[Paper]](https://arxiv.org/abs/2407.13598)
- (CoLM 2024) **ProLLM: Protein Chain-of-Thoughts Enhanced LLM for Protein-Protein Interaction Prediction**[[Paper]](https://openreview.net/forum?id=2nTzomzjjb#discussion)
- (arXiv 2024) **LEGO-GraphRAG: Modularizing Graph-based Retrieval-Augmented Generation for Design Space Exploration**[[Paper]](https://arxiv.org/abs/2411.05844)
- (arXiv 2024) **Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation**[[Paper]](https://arXiv.org/abs/2407.10805)

### Hybrid GraphRAG

[https://github.com/deep-polyu/awesome-graphrag#hybrid-graphrag](https://github.com/deep-polyu/awesome-graphrag#hybrid-graphrag)

- (NAACL 2025) **Knowledge Graph-Guided Retrieval Augmented Generation**[[Paper]](https://arxiv.org/abs/2502.06864)
- (ACL 2024 Findings) **HybGRAG: Hybrid Retrieval-Augmented Generation on Textual and Relational Knowledge Bases**[[Paper]](https://arxiv.org/abs/2412.16311)
- (arXiv 2024) **Graph of Records: Boosting Retrieval Augmented Generation for Long-context Summarization with Graphs**[[Paper]](https://arXiv.org/abs/2410.11001)
- (arXiv 2024) **Medical graph rag: Towards safe medical large language model via graph retrieval-augmented generation**[[Paper]](https://arXiv.org/abs/2408.04187)
- (arXiv 2024) **Codexgraph: Bridging large language models and code repositories via code graph databases**[[Paper]](https://arXiv.org/abs/2408.03910)

## Knowledge Retrieval

[https://github.com/deep-polyu/awesome-graphrag#knowledge-retrieval](https://github.com/deep-polyu/awesome-graphrag#knowledge-retrieval)

### Semantics Similarity-based Retriever

[https://github.com/deep-polyu/awesome-graphrag#semantics-similarity-based-retriever](https://github.com/deep-polyu/awesome-graphrag#semantics-similarity-based-retriever)

- (AAAI 2024) **StructuGraphRAG: Structured Document-Informed Knowledge Graphs for Retrieval-Augmented Generation**[[Paper]](https://ojs.aaai.org/index.php/AAAI-SS/article/view/31798/33965)
- (arXiv 2024) **G-Retriever: Retrieval-Augmented Generation for Textual Graph Understanding and Question Answering**[[Paper]](https://arXiv.org/abs/2402.07630)
- (arXiv 2024) **CancerKG.ORG A Web-scale, Interactive, Verifiable Knowledge Graph-LLM Hybrid for Assisting with Optimal Cancer Treatment and Care**[[Paper]](https://arXiv.org/abs/2501.00223)
- (arXiv 2024) **Empowering Large Language Models to Set up a Knowledge Retrieval Indexer via Self-Learning**[[Paper]](https://arXiv.org/abs/2405.16933)
- (arXiv 2024) **GraphCoder: Enhancing Repository-Level Code Completion via Code Context Graph-based Retrieval and Language Model**[[Paper]](https://arXiv.org/abs/2406.07003)
- (arXiv 2024) **Medical Graph RAG: Towards Safe Medical Large Language Model via Graph Retrieval-Augmented Generation**[[Paper]](https://arXiv.org/abs/2408.04187)
- (arXiv 2024) **How to Make LLMs Strong Node Classifiers?**[[Paper]](https://arxiv.org/abs/2410.02296)

### Logical Reasoning-based Retriever

[https://github.com/deep-polyu/awesome-graphrag#logical-reasoning-based-retriever](https://github.com/deep-polyu/awesome-graphrag#logical-reasoning-based-retriever)

- (AAAI 2026) **You Don’t Need Pre-built Graphs for RAG: Retrieval Augmented Generation with Adaptive Reasoning Structures**[[Paper]](https://arxiv.org/abs/2508.06105)
- (NeurIPS 2024) **KnowGPT: Knowledge Graph based PrompTing for Large Language Models**[[Paper]](https://openreview.net/forum?id=PacBluO5m7&referrer=%5Bthe%20profile%20of%20Daochen%20Zha%5D(%2Fprofile%3Fid%3D~Daochen_Zha1))
- (ACL 2024 Findings) **Knowledge Graph-Enhanced Large Language Models via Path Selection**[[Paper]](https://aclanthology.org/2024.findings-acl.376/)
- (ICLR 2024) **Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph**[[Paper]](https://openreview.net/forum?id=nnVO1PvbTv)
- (CIKM 2024) **RD-P: A Trustworthy Retrieval-Augmented Prompter with Knowledge Graphs for LLMs**[[Paper]](https://dl.acm.org/doi/10.1145/3627673.3679659)
- (arXiv 2024) **RuleRAG: Rule-Guided Retrieval-Augmented Generation with Language Models for Question Answering**[[Paper]](https://arXiv.org/abs/2410.22353)
- (LHB 2024) **Intelligent question answering for water conservancy project inspection driven by knowledge graph and large language model collaboration**[[Paper]](https://www.tandfonline.com/doi/full/10.1080/27678490.2024.2397337)
- (arXiv 2024) **RiTeK: A Dataset for Large Language Models Complex Reasoning over Textual Knowledge Graphs**[[Paper]](https://arXiv.org/abs/2410.13987)

### LLM-based Retriever

[https://github.com/deep-polyu/awesome-graphrag#llm-based-retriever](https://github.com/deep-polyu/awesome-graphrag#llm-based-retriever)

- (AAAI 2024) **Knowledge graph prompting for multi-document question answering**[[Paper]](https://www.overleaf.com/project/667419080bc7191bc75f5880)
- (EMNLP 2024) **Structure Guided Prompt: Instructing Large Language Model in Multi-Step Reasoning by Exploring Graph Structure of the Text**[[Paper]](https://aclanthology.org/2024.emnlp-main.528.pdf)
- (ACML 2024) **Enhancing Textbook Question Answering with Knowledge Graph-Augmented Large Language Models**[[Paper]](https://openreview.net/forum?id=ATiIqCCqR2)
- (ICLR 2024) **Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph**[[Paper]](https://arXiv.org/abs/2307.07697)
- (arXiv 2024) **LightRAG: Simple and Fast Retrieval-Augmented Generation**[[Paper]](https://arXiv.org/abs/2410.05779)
- (arXiv 2024) **MEG: Medical Knowledge-Augmented Large Language Models for Question Answering**[[Paper]](https://arXiv.org/abs/2411.03883)
- (arXiv 2024) **From local to global: A graph rag approach to query-focused summarization**[[Paper]](https://arXiv.org/abs/2404.16130)

### GNN-based Retriever

[https://github.com/deep-polyu/awesome-graphrag#gnn-based-retriever](https://github.com/deep-polyu/awesome-graphrag#gnn-based-retriever)

- (arXiv 2025) **CG-RAG: Research Question Answering by Citation Graph Retrieval-Augmented LLMs**[[Paper]](https://arxiv.org/abs/2501.15067)
- (arXiv 2024) **Advanced RAG Models with Graph Structures: Optimizing Complex Knowledge Reasoning and Text Generation**[[Paper]](https://arXiv.org/abs/2411.03572)
- (arXiv 2024) **Language Models are Graph Learners**[[Paper]](https://arxiv.org/abs/2410.02296)
- (arXiv 2024) **Graph Neural Network Enhanced Retrieval for Question Answering of LLMs**[[Paper]](https://arXiv.org/abs/2406.06572)
- (arXiv 2024) **Knowledge Graph-Augmented Language Models for Knowledge-Grounded Dialogue Generation**[[Paper]](https://arXiv.org/abs/2305.18846)

### Multi-round Retriever

[https://github.com/deep-polyu/awesome-graphrag#multi-round-retriever](https://github.com/deep-polyu/awesome-graphrag#multi-round-retriever)

- (arXiv 2024) **Graph Chain-of-Thought: Augmenting Large Language Models by Reasoning on Graphs**[[Paper]](https://arXiv.org/abs/2404.07103)
- (arXiv 2024) **Generative Subgraph Retrieval for Knowledge Graph-Grounded Dialog Generation**[[Paper]](https://arXiv.org/abs/2410.09350)
- (arXiv 2024) **Graph of Records: Boosting Retrieval Augmented Generation for Long-context Summarization with Graphs**[[Paper]](https://arXiv.org/abs/2410.11001)

### Post-retrieval

[https://github.com/deep-polyu/awesome-graphrag#post-retrieval](https://github.com/deep-polyu/awesome-graphrag#post-retrieval)

- (ACL 2024) **Boosting Language Models Reasoning with Chain-of-Knowledge Prompting**[[Paper]](https://arXiv.org/abs/2306.06427)
- (ACL 2024 Findings) **Call Me When Necessary: LLMs can Efficiently and Faithfully Reason over Structured Environments**[[Paper]](https://arxiv.org/abs/2403.08593)
- (arXiv 2024) **Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models**[[Paper]](https://arxiv.org/abs/2410.13080)
- (arXiv 2024) **Mitigating Large Language Model Hallucinations via Autonomous Knowledge Graph-based Retrofitting**[[Paper]](https://arXiv.org/abs/2311.13314)

### Hybrid Retriever

[https://github.com/deep-polyu/awesome-graphrag#hybrid-retriever](https://github.com/deep-polyu/awesome-graphrag#hybrid-retriever)

- (arXiv 2024) **Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation**[[Paper]](https://arXiv.org/abs/2407.10805)
- (arXiv 2024) **StructRAG: Boosting Knowledge Intensive Reasoning of LLMs via Inference-time Hybrid Information Structurization**[[Paper]](https://arXiv.org/abs/2410.08815)

## Knowledge Integration

[https://github.com/deep-polyu/awesome-graphrag#knowledge-integration](https://github.com/deep-polyu/awesome-graphrag#knowledge-integration)

### Fine-tuning

[https://github.com/deep-polyu/awesome-graphrag#fine-tuning](https://github.com/deep-polyu/awesome-graphrag#fine-tuning)

#### Fine-tuning with Node-level Knowledge

[https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-node-level-knowledge](https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-node-level-knowledge)

- (arXiv 2025) **Large Language Models based Graph Convolution for Text-Attributed Networks?**[[Paper]](https://openreview.net/forum?id=x5FfUvsLIE)
- (SIGIR 2024) **Graphgpt: Graph instruction tuning for large language models**[[Paper]](https://dl.acm.org/doi/10.1145/3626772.3657775)

#### Fine-tuning with Path-level Knowledge

[https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-path-level-knowledge](https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-path-level-knowledge)

- (AAAI 2024) **Exploring large language model for graph data understanding in online job recommendations**[[Paper]](https://dl.acm.org/doi/10.1609/aaai.v38i8.28769)
- (arXiv 2024) **MuseGraph: Graph-oriented Instruction Tuning of Large Language Models for Generic Graph Mining**[[Paper]](https://arXiv.org/pdf/2403.04780)
- (WWW 2023) **Structure pretraining and prompt tuning for knowledge graph transfer**[[Paper]](https://dl.acm.org/doi/10.1145/3543507.3583301)
- (ICLR 2023) **Reasoning on graphs: Faithful and interpretable large language model reasonin**g [[Paper]](https://openreview.net/forum?id=ZGNWW7xZ6Q)

#### Fine-tuning with Subgraph-level Knowledge

[https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-subgraph-level-knowledge](https://github.com/deep-polyu/awesome-graphrag#fine-tuning-with-subgraph-level-knowledge)

- (ICML 2024) **Llaga: Large language and graph assistant**[[Paper]](https://openreview.net/pdf?id=B48Pzc4oKi)
- (KDD 2024) **Graphwiz: An instruction-following language model for graph problems**[[Paper]](https://graph-wiz.github.io/)
- (AAAI 2024) **Graph neural prompting with large language models**[[Paper]](https://dl.acm.org/doi/10.1609/aaai.v38i17.29875)
- (ACL 2024 Findings) **Rho:Reducing hallucination in open-domain dialogues with knowledge grounding**[[Paper]](https://aclanthology.org/2023.findings-acl.275/)
- (EACL 2024 Findings) **Language is All a Graph Needs**[[Paper]](https://aclanthology.org/2024.findings-eacl.132.pdf)

### In-context Learning

[https://github.com/deep-polyu/awesome-graphrag#in-context-learning](https://github.com/deep-polyu/awesome-graphrag#in-context-learning)

#### Graph-enhanced Chain-of-Thought

[https://github.com/deep-polyu/awesome-graphrag#graph-enhanced-chain-of-thought](https://github.com/deep-polyu/awesome-graphrag#graph-enhanced-chain-of-thought)

- (KBS 2025) **Different paths to the same destination: Diversifying LLMs generation for multi-hop open-domain question answering**[[Paper]](https://www.sciencedirect.com/science/article/abs/pii/S0950705124014230)
- (ICLR 2024) **Reasoning on Graphs: Faithful and Interpretable Large Language Model Reasoning**[[Paper]](https://openreview.net/forum?id=ZGNWW7xZ6Q)
- (ICLR 2024) **Think-on-Graph: Deep and Responsible Reasoning of Large Language Model on Knowledge Graph**[[Paper]](https://openreview.net/forum?id=nnVO1PvbTv)
- (arXiv 2024) **Think-on-Graph 2.0: Deep and Faithful Large Language Model Reasoning with Knowledge-guided Retrieval Augmented Generation**[[Paper]](https://arXiv.org/abs/2407.10805)
- (arXiv 2024) **Graph Chain-of-Thought: Augmenting Large Language Models by Reasoning on Graphs**[[Paper]](https://arXiv.org/abs/2404.07103)
- (ICLR 2024) **Chain-of-Knowledge: Grounding Large Language Models via Dynamic Knowledge Adapting over Heterogeneous Sources**[[Paper]](https://openreview.net/forum?id=cPgh4gWZlz)
- (ACL 2024 Findings) **Visual In-Context Learning for Large Vision-Language Models**[[Paper]](https://www.semanticscholar.org/Paper/Visual-In-Context-Learning-for-Large-Models-Zhou-Li/b00d1028291ae64e9d7485a34ec5f1b7b5a37909)
- (NeurIPS 2023) **What makes good examples for visual in-context learning?**[[Paper]](https://proceedings.neurips.cc/paper_files/paper/2023/hash/398ae57ed4fda79d0781c65c926d667b-Abstract-Conference.html)
- (ACL 2023) **Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models**[[Paper]](https://aclanthology.org/2023.acl-long.147.pdf)
- (AAAI 2024) **When Do Program-of-Thought Works for Reasoning?**[[Paper]](https://dl.acm.org/doi/10.1609/aaai.v38i16.29721)
- (ICLR 2022) **An Explanation of In-context Learning as Implicit Bayesian Inference**[[Paper]](https://openreview.net/forum?id=RdJVFCHjUMI)
- (EMNLP 2023) **KnowledGPT: Enhancing Large Language Models with Retrieval and Storage Access on Knowledge Bases**[[Paper]](https://arXiv.org/abs/2308.11761)
