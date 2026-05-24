---
repo: r4stin/kg-research-agent
url: https://github.com/r4stin/kg-research-agent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - r4stin/kg-research-agent: Evidence-grounded, multi-agent research assistant that performs RAG over scientific papers, extracts structured claims, builds a Neo4j knowledge graph, and answers questions with verifiable citations and stateful session memory. · GitHub

**Source**: https://github.com/r4stin/kg-research-agent

---

[Skip to content](https://github.com/r4stin/kg-research-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[r4stin](https://github.com/r4stin)

/
**[kg-research-agent](https://github.com/r4stin/kg-research-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fr4stin%2Fkg-research-agent)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Fr4stin%2Fkg-research-agent)
- 
[Star
          3](https://github.com/login?return_to=%2Fr4stin%2Fkg-research-agent)

[https://github.com/r4stin/kg-research-agent](https://github.com/r4stin/kg-research-agent)

[Branches](https://github.com/r4stin/kg-research-agent/branches)[Tags](https://github.com/r4stin/kg-research-agent/tags)

[https://github.com/r4stin/kg-research-agent/branches](https://github.com/r4stin/kg-research-agent/branches)[https://github.com/r4stin/kg-research-agent/tags](https://github.com/r4stin/kg-research-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History54 Commits54 Commits |  |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| environment.yml | environment.yml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# 📚 **KG-Research-Agent**

[https://github.com/r4stin/kg-research-agent#-kg-research-agent](https://github.com/r4stin/kg-research-agent#-kg-research-agent)

### *Multi-Agent, Evidence-Grounded Research System with Gemini, ADK, ChromaDB & Neo4j*

[https://github.com/r4stin/kg-research-agent#multi-agent-evidence-grounded-research-system-with-gemini-adk-chromadb--neo4j](https://github.com/r4stin/kg-research-agent#multi-agent-evidence-grounded-research-system-with-gemini-adk-chromadb--neo4j)

**🔥 A research-grade AI agent that extracts claims + evidence from scientific papers, stores them in a knowledge graph, retrieves context, and answers questions using multi-agent reasoning with session memory.**

[https://github.com/r4stin/kg-research-agent/blob/main](https://github.com/r4stin/kg-research-agent/blob/main)[https://github.com/r4stin/kg-research-agent/blob/main](https://github.com/r4stin/kg-research-agent/blob/main)[https://github.com/r4stin/kg-research-agent/blob/main](https://github.com/r4stin/kg-research-agent/blob/main)[https://github.com/r4stin/kg-research-agent/blob/main](https://github.com/r4stin/kg-research-agent/blob/main)[https://github.com/r4stin/kg-research-agent/blob/main](https://github.com/r4stin/kg-research-agent/blob/main)

---

# 🚀 **Overview**

[https://github.com/r4stin/kg-research-agent#-overview](https://github.com/r4stin/kg-research-agent#-overview)

**KG-Research-Agent** is an AI-powered research assistant that:

- Ingests scientific PDFs
- Embeds + stores them in ChromaDB
- Retrieves relevant text chunks (RAG)
- Extracts **structured claims & evidence** from papers
- Stores them in a **Neo4j Knowledge Graph**
- Answers questions using **citations grounded in source text**
- Uses a **multi-agent pipeline** (Planner → Retriever → Evidence → Answer)
- Supports **multi-turn conversations with session memory**

A full walkthrough of the multi-agent research system is available on YouTube:

👉 **[Watch the Concept Overview](https://youtu.be/vaq0-AMOudo)**

---

# 🧠 **Updated Architecture (Multi-Agent + Memory)**

[https://github.com/r4stin/kg-research-agent#-updated-architecture-multi-agent--memory](https://github.com/r4stin/kg-research-agent#-updated-architecture-multi-agent--memory)

```
┌──────── User ────────┐
          │
          ▼
┌───────────────┐
│ Planner Agent │  ← uses chat history + memory
└───────────────┘
     │ plans tasks
     ▼
┌────────────────────────┐
│ Retriever Agent        │ → ChromaDB (vector search)
└────────────────────────┘
     │ chunks
     ▼
┌────────────────────────┐
│ Evidence Agent         │ → extracts claims + sentences
└────────────────────────┘
     │ structured JSON
     ▼
┌────────────────────────┐
│ Answer Agent           │ → composes human-readable answer
└────────────────────────┘
     │
     ▼
 **Final Answer + Citations**

📦 Persistent Storage:
- Neo4j → long-term knowledge graph
- ChromaDB → vector retrieval
- SessionState → short-term conversation memory
```

---

# ✨ **Current Features**

[https://github.com/r4stin/kg-research-agent#-current-features](https://github.com/r4stin/kg-research-agent#-current-features)

### ✔️ PDF → Chunking → Vector Storage

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-pdf--chunking--vector-storage](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-pdf--chunking--vector-storage)

### ✔️ RAG Retrieval (Chroma + Gemini)

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-rag-retrieval-chroma--gemini](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-rag-retrieval-chroma--gemini)

### ✔️ Multi-Agent System (Planner → Retriever → Evidence → Answer)

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-multi-agent-system-planner--retriever--evidence--answer](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-multi-agent-system-planner--retriever--evidence--answer)

### ✔️ Structured JSON Evidence Extraction

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-structured-json-evidence-extraction](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-structured-json-evidence-extraction)

### ✔️ Neo4j Knowledge Graph Storage

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-neo4j-knowledge-graph-storage](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-neo4j-knowledge-graph-storage)

### ✔️ Session Memory (short-term conversational context)

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-session-memory-short-term-conversational-context](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-session-memory-short-term-conversational-context)

### ✔️ Deduplication (per chunk + semantic similarity)

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-deduplication-per-chunk--semantic-similarity](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-deduplication-per-chunk--semantic-similarity)

### ✔️ Multi-turn conversational research workflow

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-multi-turn-conversational-research-workflow](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-multi-turn-conversational-research-workflow)

---

# 🏁 **Getting Started**

[https://github.com/r4stin/kg-research-agent#-getting-started](https://github.com/r4stin/kg-research-agent#-getting-started)

## 1️⃣ Clone the Repo

[https://github.com/r4stin/kg-research-agent#1%EF%B8%8F%E2%83%A3-clone-the-repo](https://github.com/r4stin/kg-research-agent#1%EF%B8%8F%E2%83%A3-clone-the-repo)

```
git clone https://github.com/yourusername/kg-research-agent.git
cd kg-research-agent
```

## 2️⃣ Create Conda Environment

[https://github.com/r4stin/kg-research-agent#2%EF%B8%8F%E2%83%A3-create-conda-environment](https://github.com/r4stin/kg-research-agent#2%EF%B8%8F%E2%83%A3-create-conda-environment)

```
conda create -n kg-research-agent python=3.10
conda activate kg-research-agent
```

## 3️⃣ Install Requirements

[https://github.com/r4stin/kg-research-agent#3%EF%B8%8F%E2%83%A3-install-requirements](https://github.com/r4stin/kg-research-agent#3%EF%B8%8F%E2%83%A3-install-requirements)

```
pip install -r requirements.txt
```

## 4️⃣ Environment Variables (`.env`)

[https://github.com/r4stin/kg-research-agent#4%EF%B8%8F%E2%83%A3-environment-variables-env](https://github.com/r4stin/kg-research-agent#4%EF%B8%8F%E2%83%A3-environment-variables-env)

```
GOOGLE_API_KEY="your-key"
CHROMA_DB_PATH="data/chroma"
PDF_STORAGE="data/papers"

NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="yourpassword"
```

---

# 🧪 **Running the System**

[https://github.com/r4stin/kg-research-agent#-running-the-system](https://github.com/r4stin/kg-research-agent#-running-the-system)

### PDF Ingestion

[https://github.com/r4stin/kg-research-agent#pdf-ingestion](https://github.com/r4stin/kg-research-agent#pdf-ingestion)

```
python -m src.tools.pdf_ingest
```

### Evidence Extraction

[https://github.com/r4stin/kg-research-agent#evidence-extraction](https://github.com/r4stin/kg-research-agent#evidence-extraction)

```
python -m src.run_evidence_extraction
```

### KG Query

[https://github.com/r4stin/kg-research-agent#kg-query](https://github.com/r4stin/kg-research-agent#kg-query)

```
python -m src.pipelines.run_kg_query
```

# 🔧 **New: Multi-Agent Runner**

[https://github.com/r4stin/kg-research-agent#-new-multi-agent-runner](https://github.com/r4stin/kg-research-agent#-new-multi-agent-runner)

Run full pipeline with memory:

```
python -m src.pipelines.run_multi_agent_pipeline
```

Example:

```
You: What is a major challenge in scholarly information retrieval?
You: Summarize in one sentence.
```

The agent maintains context across turns.

---

# 🗺️ **Roadmap**

[https://github.com/r4stin/kg-research-agent#%EF%B8%8F-roadmap](https://github.com/r4stin/kg-research-agent#%EF%B8%8F-roadmap)

## 🟥 Agent Quality (Next Milestone)

[https://github.com/r4stin/kg-research-agent#-agent-quality-next-milestone](https://github.com/r4stin/kg-research-agent#-agent-quality-next-milestone)

- ADK logs + traces
- Metrics for agent performance
- LLM-as-a-Judge evaluation

## 🟦 Multi-Agent Enhancements

[https://github.com/r4stin/kg-research-agent#-multi-agent-enhancements](https://github.com/r4stin/kg-research-agent#-multi-agent-enhancements)

- Add **KG Agent** (read/write Neo4j in pipeline)
- Add planner task types: `kg_query`, `kg_write`
- Context compaction + memory optimization

## 🟩 Productionization

[https://github.com/r4stin/kg-research-agent#-productionization](https://github.com/r4stin/kg-research-agent#-productionization)

- A2A protocol (agent-to-agent messaging)
- Deployment to **Vertex AI Agent Engine**
- API endpoints + orchestration layer

---

# 📜 License

[https://github.com/r4stin/kg-research-agent#-license](https://github.com/r4stin/kg-research-agent#-license)

MIT License.
 You may use, modify, and distribute this project freely.

## About
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

