---
repo: feesuu/cluerag
url: https://github.com/feesuu/cluerag
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Feesuu/ClueRAG: Clue-RAG: Towards Accurate and Cost-Efficient Graph-based RAG via Multi-Partite Graph and Query-Driven Iterative Retrieval · GitHub

**Source**: https://github.com/feesuu/cluerag

---

[Skip to content](https://github.com/feesuu/cluerag#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Feesuu](https://github.com/Feesuu)

/
**[ClueRAG](https://github.com/Feesuu/ClueRAG)**

Public

- [Notifications](https://github.com/login?return_to=%2FFeesuu%2FClueRAG)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2FFeesuu%2FClueRAG)
- 
[Star
          26](https://github.com/login?return_to=%2FFeesuu%2FClueRAG)

[https://github.com/Feesuu/ClueRAG](https://github.com/Feesuu/ClueRAG)

[Branches](https://github.com/Feesuu/ClueRAG/branches)[Tags](https://github.com/Feesuu/ClueRAG/tags)

[https://github.com/Feesuu/ClueRAG/branches](https://github.com/Feesuu/ClueRAG/branches)[https://github.com/Feesuu/ClueRAG/tags](https://github.com/Feesuu/ClueRAG/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| data | data |  |  |
| dataset | dataset |  |  |
| fig | fig |  |  |
| generation | generation |  |  |
| index | index |  |  |
| llm | llm |  |  |
| retrieval | retrieval |  |  |
| utils | utils |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| main.py | main.py |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Accepted by ICDE2026 !!!

[https://github.com/feesuu/cluerag#accepted-by-icde2026-](https://github.com/feesuu/cluerag#accepted-by-icde2026-)

# ClueRAG: Towards Accurate and Cost-Efficient Graph-based RAG via Multi-Partite Graph and Query-Driven Iterative Retrieval.

[https://github.com/feesuu/cluerag#cluerag-towards-accurate-and-cost-efficient-graph-based-rag-via-multi-partite-graph-and-query-driven-iterative-retrieval](https://github.com/feesuu/cluerag#cluerag-towards-accurate-and-cost-efficient-graph-based-rag-via-multi-partite-graph-and-query-driven-iterative-retrieval)

[https://camo.githubusercontent.com/b50d85d37a29655a7d19baebf2e8cabe77f5056bc44480ed00737811e8267e16/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c4c4d2d726564](https://camo.githubusercontent.com/b50d85d37a29655a7d19baebf2e8cabe77f5056bc44480ed00737811e8267e16/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c4c4d2d726564)[https://camo.githubusercontent.com/1ea6b6bc7156773bd9224ad619aee7a3f58687b932e3355be77f1be762d34cc7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f47726170685f5241472d726564](https://camo.githubusercontent.com/1ea6b6bc7156773bd9224ad619aee7a3f58687b932e3355be77f1be762d34cc7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f47726170685f5241472d726564)[https://camo.githubusercontent.com/b46fc553daeea7bc28ab642f0060f4262a82ab6d907371977495570b45eef8b0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f63756d656e745f51412d677265656e](https://camo.githubusercontent.com/b46fc553daeea7bc28ab642f0060f4262a82ab6d907371977495570b45eef8b0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f63756d656e745f51412d677265656e)

# Note: This is a new version, the oceanbase augmented version, and its README.md is coming soon.

[https://github.com/feesuu/cluerag#note-this-is-a-new-version-the-oceanbase-augmented-version-and-its-readmemd-is-coming-soon](https://github.com/feesuu/cluerag#note-this-is-a-new-version-the-oceanbase-augmented-version-and-its-readmemd-is-coming-soon)

## Introduction

[https://github.com/feesuu/cluerag#introduction](https://github.com/feesuu/cluerag#introduction)

**​Clue-RAG​**​ is a novel ​​Retrieval-Augmented Generation (RAG)​​ framework that enhances LLM question answering by efficiently retrieving and integrating structured knowledge from a ​​multi-partite graph index​​.

🔍 ​​Key Features​​:

✅ ​​Multi-partite Graph Index​​ – Combines ​​text chunks, knowledge units, and entities​​ for fine-grained semantic retrieval

🚀 ​​Hybrid Extraction​​ – Reduces LLM token usage while maintaining high-quality knowledge disambiguation

🔍 ​​Q-Iter Retrieval​​ – Query-driven iterative search with ​​semantic matching & constrained graph traversal​​

🔥 Zero Token Consumption: Complete graph construction and retrieval without any LLM calls in Clue-RAG-0.0.

🏗️ **Clue-RAG** 's ​​offline indexing​​ (Clue-Index) transforms raw text into a structured knowledge graph through two stages: 1. ​​Hybrid Extraction​​ 2. Graph Construction​​. Q-Iter follows an intelligent 3-phase approach: 1. Entity Anchoring 2. Iterative Retrieval 3. Final Re-ranking. [https://github.com/Feesuu/ClueRAG/blob/v2/fig/image.png](https://github.com/Feesuu/ClueRAG/blob/v2/fig/image.png)

## Performance

[https://github.com/feesuu/cluerag#performance](https://github.com/feesuu/cluerag#performance)

Overall performance of RAG solutions. The best and second-best results among the ten competitor solutions (excluding the Clue-RAG series) in each column are highlighted in bold and underlined, respectively. Notebly, it outperforms the strong baseline KETRAG (KDD 2025) [https://arxiv.org/abs/2502.09304](https://arxiv.org/abs/2502.09304)[https://github.com/waetr/KET-RAG](https://github.com/waetr/KET-RAG) by 21.53%/29.16% in average F1/Acc., while also surpassing another competitive baseline SIRERAG (ICLR 2025) [https://arxiv.org/abs/2412.06206](https://arxiv.org/abs/2412.06206)[https://github.com/SalesforceAIResearch/SiReRAG](https://github.com/SalesforceAIResearch/SiReRAG) by 5.75% in average F1/Acc.

[https://github.com/Feesuu/ClueRAG/blob/v2/fig/table.png](https://github.com/Feesuu/ClueRAG/blob/v2/fig/table.png)

## Setup Environment

[https://github.com/feesuu/cluerag#setup-environment](https://github.com/feesuu/cluerag#setup-environment)

### 1. Create a Python 3.10 Environment

[https://github.com/feesuu/cluerag#1-create-a-python-310-environment](https://github.com/feesuu/cluerag#1-create-a-python-310-environment)

```
conda create -n cluerag python=3.9 -y
pip install -r requirements.txt
```

### 2. Install spaCy

[https://github.com/feesuu/cluerag#2-install-spacy](https://github.com/feesuu/cluerag#2-install-spacy)

```
python -m spacy download en_core_web_trf
```

or download the `en_core_web_trf-3.8.0` model from [spaCy model releases](https://github.com/explosion/spacy-models/releases/download/en_core_web_trf-3.8.0/en_core_web_trf-3.8.0.tar.gz), then

```
pip install en_core_web_trf-3.8.0.tar.gz
```

### 3. Quick Start

[https://github.com/feesuu/cluerag#3-quick-start](https://github.com/feesuu/cluerag#3-quick-start)

⚙️ **Configure parameters**: All hyperparameters are located in `utils/config.py`

📊 **Data**: The benchmark dataset used in this project is located in the [data/](https://github.com/Feesuu/ClueRAG/blob/v2/data) directory. They are multi-hop QA dataset widely adopted by the Graph-based RAG research community.

🚀 **Run the main script**: (from the project root directory):

```
python main.py
```

📂 **Output Directory**: When running experiments, results are automatically saved with this naming pattern: outputs/{dataset_name}/{select_metric}_{alpha}/

**Example**:
 If you test with:

- dataset_name: `2wikimultihopqa`
- select_metric: `COSINE`
- alpha value: `1`

Your results will be saved in:
`outputs/2wikimultihopqa/COSINE_1.00/`

The output folder will contain:

- `logs`: stores the whole log files.
- `extraction_cache.pkl`: stores the extraction result (e.g., knowledge units and entities).
- `graph_cache.json`: stores the graph relevant data.
- `selection_cache.pkl`: stores the hybrid selection result.
- `milvus.db`: stores the embeddings of three kinds of nodes.
- `result.json`: stores the generation result.
- `retrieval_results.json`: stores the retrieval result

**Please cite and 🌟 us if you find it helpful!**

```
@misc{su2025clueragaccuratecostefficientgraphbased,
      title={Clue-RAG: Towards Accurate and Cost-Efficient Graph-based RAG via Multi-Partite Graph and Query-Driven Iterative Retrieval}, 
      author={Yaodong Su and Yixiang Fang and Yingli Zhou and Quanqing Xu and Chuanhui Yang},
      year={2025},
      eprint={2507.08445},
      archivePrefix={arXiv},
      primaryClass={cs.IR},
      url={https://arxiv.org/abs/2507.08445}, 
}
```

## About

         Clue-RAG: Towards Accurate and Cost-Efficient Graph-based RAG via Multi-Partite Graph and Query-Driven Iterative Retrieval        

[arxiv.org/pdf/2507.08445](https://arxiv.org/pdf/2507.08445)

### Topics

[index](https://github.com/topics/index)[graphrag](https://github.com/topics/graphrag)[clue-rag](https://github.com/topics/clue-rag)[multi-partite-graph](https://github.com/topics/multi-partite-graph)[query-driven-iterative-retrieval](https://github.com/topics/query-driven-iterative-retrieval)

### Resources

[Readme](https://github.com/feesuu/cluerag#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Feesuu/ClueRAG/activity)

### Stars

[26
        stars](https://github.com/Feesuu/ClueRAG/stargazers)

### Watchers

[1
        watching](https://github.com/Feesuu/ClueRAG/watchers)

### Forks

[2
        forks](https://github.com/Feesuu/ClueRAG/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FFeesuu%2FClueRAG&report=Feesuu+%28user%29)

## [Releases](https://github.com/Feesuu/ClueRAG/releases)

No releases published

## [Packages
      0](https://github.com/users/Feesuu/packages?repo_name=ClueRAG)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Feesuu/ClueRAG/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/Feesuu/ClueRAG/search?l=python)

     You can’t perform that action at this time.
