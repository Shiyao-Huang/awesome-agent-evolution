---
repo: rmanluo/gfm-rag
url: https://github.com/rmanluo/gfm-rag
content_timestamp: 2026-04-20
time_slice: 2026-04
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - RManLuo/gfm-rag: [NeurIPS'25, ICLR'26] Graph Foundation Model for Retrieval Augmented Generation · GitHub

**Source**: https://github.com/rmanluo/gfm-rag

---

[Skip to content](https://github.com/rmanluo/gfm-rag#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[RManLuo](https://github.com/RManLuo)

/
**[gfm-rag](https://github.com/RManLuo/gfm-rag)**

Public

- [Notifications](https://github.com/login?return_to=%2FRManLuo%2Fgfm-rag)You must be signed in to change notification settings
- [Fork
    34](https://github.com/login?return_to=%2FRManLuo%2Fgfm-rag)
- 
[Star
          259](https://github.com/login?return_to=%2FRManLuo%2Fgfm-rag)

[https://github.com/RManLuo/gfm-rag](https://github.com/RManLuo/gfm-rag)

[Branches](https://github.com/RManLuo/gfm-rag/branches)[Tags](https://github.com/RManLuo/gfm-rag/tags)

[https://github.com/RManLuo/gfm-rag/branches](https://github.com/RManLuo/gfm-rag/branches)[https://github.com/RManLuo/gfm-rag/tags](https://github.com/RManLuo/gfm-rag/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History328 Commits328 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| docs | docs |  |  |
| gfmrag | gfmrag |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| mypy.ini | mypy.ini |  |  |
| poetry.lock | poetry.lock |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pytest.ini | pytest.ini |  |  |
| View all files |  |  |  |

## Repository files navigation

# GFM-RAG: Graph Foundation Model for Retrieval Augmented Generation

[https://github.com/rmanluo/gfm-rag#gfm-rag-graph-foundation-model-for-retrieval-augmented-generation](https://github.com/rmanluo/gfm-rag#gfm-rag-graph-foundation-model-for-retrieval-augmented-generation)

[https://rmanluo.github.io/gfm-rag/](https://rmanluo.github.io/gfm-rag/)[https://www.arxiv.org/abs/2502.01113](https://www.arxiv.org/abs/2502.01113)[https://www.arxiv.org/abs/2509.24276](https://www.arxiv.org/abs/2509.24276)[https://huggingface.co/collections/rmanluo/gfm-rag-67a1ef7bfe097a938d8848dc](https://huggingface.co/collections/rmanluo/gfm-rag-67a1ef7bfe097a938d8848dc)[https://huggingface.co/collections/rmanluo/g-reasoner](https://huggingface.co/collections/rmanluo/g-reasoner)[https://pypi.org/project/gfmrag/](https://pypi.org/project/gfmrag/)

[https://camo.githubusercontent.com/d6d198293102fbae95dd8f0d548015cf67e7235ca7552ab1200adbac9849c2ef/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f524d616e4c756f2f67666d2d7261673f636f6c6f723d677265656e267374796c653d736f6369616c](https://camo.githubusercontent.com/d6d198293102fbae95dd8f0d548015cf67e7235ca7552ab1200adbac9849c2ef/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f524d616e4c756f2f67666d2d7261673f636f6c6f723d677265656e267374796c653d736f6369616c)[https://pypi.org/project/gfmrag/](https://pypi.org/project/gfmrag/)[https://pypi.org/project/gfmrag/](https://pypi.org/project/gfmrag/)[https://github.com/RManLuo/gfm-rag/issues](https://github.com/RManLuo/gfm-rag/issues)[https://github.com/RManLuo/gfm-rag/discussions](https://github.com/RManLuo/gfm-rag/discussions)

[[中文解读]](https://rman.top/2025/03/01/gfm-rag/)

The GFM-RAG is the first graph foundation model-powered RAG pipeline that combines the power of graph neural networks to reason over graphs and retrieve relevant documents for question answering.

[https://github.com/RManLuo/gfm-rag/blob/main/docs/images/g-reasoner.png](https://github.com/RManLuo/gfm-rag/blob/main/docs/images/g-reasoner.png)

We first build a graph-index from the documents to capture the relationships between knowledge. Then, we feed the query and constructed graph-index into the pre-trained graph foundation model (GFM) retriever to obtain relevant documents for LLM generation. The GFM retriever experiences large-scale training and can be directly applied to unseen datasets without fine-tuning.

GFM-RAG is designed to be efficient and generalizable. You can bring your own dataset and directly apply the pre-trained GFM retriever to obtain relevant documents for question answering. You can also fine-tune the GFM retriever on your own dataset to improve performance on specific domains.

For more details, please refer to our [project](https://github.com/RManLuo/gfm-rag) and papers: [GFM-RAG](https://www.arxiv.org/abs/2502.01113), [G-reasoner](https://arxiv.org/abs/2509.24276).

## 🎉 News

[https://github.com/rmanluo/gfm-rag#-news](https://github.com/rmanluo/gfm-rag#-news)

- **[2026-04-20]** We have released the G-reasoner codebase and a [34M pre-trained model](https://huggingface.co/rmanluo/G-reasoner-34M). 🚀
- **[2026-01-27]** We are excited to share that [G-reasoner](https://arxiv.org/abs/2509.24276) has been accepted by [ICLR 2026](https://iclr.cc/Conferences/2026).
- **[2025-10-01]** Checkout our latest progress: [G-reasoner: Foundation Models for Unified Reasoning over Graph-structured Knowledge](https://arxiv.org/abs/2509.24276). Code and model will be updated soon.
- **[2025-09-19]** We are excited to share that [GFM-RAG](https://www.arxiv.org/abs/2502.01113) has been accepted by [NeurIPS 2025](https://neurips.cc/Conferences/2025).
- **[2025-06-03]** We have released a new version of [GFM-RAG (2025-06-03)](https://huggingface.co/rmanluo/GFM-RAG-8M/commit/62cf6398c5875af1c4e04bbb35e4c3b21904d4ac) which is pre-trained on 286 KGs. Performance comparison with the previous version can be found in [CHANGELOG](https://github.com/RManLuo/gfm-rag/blob/main/docs/CHANGELOG.md).
- **[2025-02-06]** We have released the GFM-RAG codebase and a [8M pre-trained model](https://huggingface.co/rmanluo/GFM-RAG-8M). 🚀

## Features

[https://github.com/rmanluo/gfm-rag#features](https://github.com/rmanluo/gfm-rag#features)

- **Graph Foundation Model (GFM)**: A graph neural network-based retriever that can reason over the graph-index.
- **Universal Graph Index**: A universal graph index that can represent various types of structural knowledge such as Knowledge Graphs, Document Graphs, and Hierarchical Graphs.
- **Efficiency**: The GFM-RAG pipeline is efficient in conducting multi-hop reasoning with single-step retrieval.
- **Generalizability**: The GFM-RAG can be directly applied to unseen datasets without fine-tuning.
- **Transferability**: The GFM-RAG can be fine-tuned on your own dataset to improve performance on specific domains.
- **Compatibility**: The GFM-RAG is compatible with arbitrary agent-based framework to conduct multi-step reasoning.
- **Interpretability**: The GFM-RAG can illustrate the captured reasoning paths for better understanding.

## Dependencies

[https://github.com/rmanluo/gfm-rag#dependencies](https://github.com/rmanluo/gfm-rag#dependencies)

- Python 3.12
- CUDA 12 and above (CUDA 12.6.3 is recommended)

## Installation

[https://github.com/rmanluo/gfm-rag#installation](https://github.com/rmanluo/gfm-rag#installation)

Conda provides an easy way to install the CUDA development toolkit which is required by GFM-RAG

Install packages

```
conda create -n gfmrag python=3.12
conda activate gfmrag
conda install cuda-toolkit -c nvidia/label/cuda-12.6.3 # Replace with your desired CUDA version
pip install gfmrag
```

## Quick Start

[https://github.com/rmanluo/gfm-rag#quick-start](https://github.com/rmanluo/gfm-rag#quick-start)

Note

Read the full documentation at: [https://rmanluo.github.io/gfm-rag/](https://rmanluo.github.io/gfm-rag/)

GFM-RAG provides a **unified graph interface**: if you already have a graph that conforms to the three-file format (`nodes.csv` / `relations.csv` / `edges.csv`), you can **skip the index-building step entirely** and use it directly for retrieval and reasoning — regardless of how the graph was constructed.

There are two starting points:

- **Path A — Start from raw documents** (steps 1–3 below): provide `raw/documents.json` and let `GFMRetriever.from_index(...)` build the graph automatically.
- **Path B — Bring your own graph** (step 1b below): place pre-built graph files under `processed/stage1/` and `GFMRetriever.from_index(...)` will load them directly without rebuilding.

See [Data Format](https://github.com/RManLuo/gfm-rag/blob/main/docs/workflow/data_format.md) for the full schema of both paths.

---

### Path A: Start From Raw Documents

[https://github.com/rmanluo/gfm-rag#path-a-start-from-raw-documents](https://github.com/rmanluo/gfm-rag#path-a-start-from-raw-documents)

#### 1. Create A Minimal Dataset

[https://github.com/rmanluo/gfm-rag#1-create-a-minimal-dataset](https://github.com/rmanluo/gfm-rag#1-create-a-minimal-dataset)

```
data/
└── toy_raw/
    └── raw/
        ├── documents.json
        └── test.json
```

`raw/documents.json` is required:

```
{
  "France": "France is a country in Western Europe. Paris is its capital.",
  "Paris": "Paris is the capital and most populous city of France.",
  "Emmanuel Macron": "Emmanuel Macron has served as president of France since 2017."
}
```

`raw/test.json` is optional for plain retrieval, but useful for later QA and evaluation:

```
[
  {
    "id": "toy-1",
    "question": "Who is the president of France?",
    "answer": "Emmanuel Macron",
    "answer_aliases": ["Macron"],
    "supporting_documents": ["France", "Emmanuel Macron"]
  }
]
```

#### 2. Initialize `GFMRetriever`

[https://github.com/rmanluo/gfm-rag#2-initialize-gfmretriever](https://github.com/rmanluo/gfm-rag#2-initialize-gfmretriever)

```
from hydra.utils import instantiate
from omegaconf import OmegaConf

from gfmrag import GFMRetriever

cfg = OmegaConf.load("gfmrag/workflow/config/gfm_rag/qa_ircot_inference.yaml")

retriever = GFMRetriever.from_index(
    data_dir="./data",
    data_name="toy_raw",
    model_path="rmanluo/G-reasoner-34M",
    ner_model=instantiate(cfg.ner_model),
    el_model=instantiate(cfg.el_model),
    graph_constructor=instantiate(cfg.graph_constructor),
)
```

On the first run, `GFMRetriever.from_index(...)` builds `processed/stage1/` automatically if the graph files do not already exist.

#### 3. Retrieve Documents

[https://github.com/rmanluo/gfm-rag#3-retrieve-documents](https://github.com/rmanluo/gfm-rag#3-retrieve-documents)

```
results = retriever.retrieve(
    "Who is the president of France?",
    top_k=5,
)

for item in results["document"]:
    print(item["id"], item["score"])
```

---

### Path B: Bring Your Own Graph

[https://github.com/rmanluo/gfm-rag#path-b-bring-your-own-graph](https://github.com/rmanluo/gfm-rag#path-b-bring-your-own-graph)

If you already have a graph — for example, an existing Knowledge Graph, a graph produced by another pipeline, or a graph you built manually — you can use it directly **without running the index-building step**, as long as it conforms to the GFM-RAG graph format.

#### 1. Place Pre-built Graph Files

[https://github.com/rmanluo/gfm-rag#1-place-pre-built-graph-files](https://github.com/rmanluo/gfm-rag#1-place-pre-built-graph-files)

Create the following directory structure and populate it with your graph files:

```
data/
└── my_dataset/
    └── processed/
        └── stage1/
            ├── nodes.csv
            ├── relations.csv
            ├── edges.csv
            └── test.json   (optional)
```

The three CSV files define the graph:

| File | Description |
|---|---|
| nodes.csv | Node name, type (entity / document / summary), and optional attributes |
| relations.csv | Relation name and optional attributes |
| edges.csv | Edges as (source, relation, target) triples with optional attributes |

See [Data Format](https://github.com/RManLuo/gfm-rag/blob/main/docs/workflow/data_format.md) for the full schema and examples.

#### 2. Initialize `GFMRetriever` and Retrieve

[https://github.com/rmanluo/gfm-rag#2-initialize-gfmretriever-and-retrieve](https://github.com/rmanluo/gfm-rag#2-initialize-gfmretriever-and-retrieve)

`GFMRetriever.from_index(...)` detects that `processed/stage1/` already exists and loads the graph directly — no rebuild occurs.

```
from gfmrag import GFMRetriever

retriever = GFMRetriever.from_index(
    data_dir="./data",
    data_name="my_dataset",
    model_path="rmanluo/G-reasoner-34M",  # or rmanluo/GFM-RAG-8M
)

results = retriever.retrieve("Your query here", top_k=5)

for item in results["document"]:
    print(item["id"], item["score"])
```

## GFM Fine-tuning

[https://github.com/rmanluo/gfm-rag#gfm-fine-tuning](https://github.com/rmanluo/gfm-rag#gfm-fine-tuning)

During fine-tuning, the GFM model will be trained on the query-documents pairs `train.json` from the labeled dataset to learn complex relationships for retrieval.

It can be conducted on your own dataset to improve the performance of the model on your specific domain.

An example of the training data:

```
[
  {
    "id": "5abc553a554299700f9d7871",
    "question": "Kyle Ezell is a professor at what School of Architecture building at Ohio State?",
    "answer": "Knowlton Hall",
    "supporting_documents": ["Knowlton Hall", "Kyle Ezell"],
    "start_nodes": {
      "entity": [
## gBrain Temporal Metadata

- content_timestamp: 2026-04-20
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

