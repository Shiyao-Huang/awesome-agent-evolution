---
repo: bazilicum/graphltm
url: https://github.com/bazilicum/graphltm
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - bazilicum/GraphLTM: Turn any LLM into a self-extending knowledge agent powered by a graph-structured memory - complete with PDF-to-graph ingestion, budget-aware optimisation, and dual-engine orchestration. · GitHub

**Source**: https://github.com/bazilicum/graphltm

---

[Skip to content](https://github.com/bazilicum/graphltm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[bazilicum](https://github.com/bazilicum)

/
**[GraphLTM](https://github.com/bazilicum/GraphLTM)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbazilicum%2FGraphLTM)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fbazilicum%2FGraphLTM)
- 
[Star
          4](https://github.com/login?return_to=%2Fbazilicum%2FGraphLTM)

[https://github.com/bazilicum/GraphLTM](https://github.com/bazilicum/GraphLTM)

[Branches](https://github.com/bazilicum/GraphLTM/branches)[Tags](https://github.com/bazilicum/GraphLTM/tags)

[https://github.com/bazilicum/GraphLTM/branches](https://github.com/bazilicum/GraphLTM/branches)[https://github.com/bazilicum/GraphLTM/tags](https://github.com/bazilicum/GraphLTM/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| app | app |  |  |
| .env.example | .env.example |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| GraphLTM.png | GraphLTM.png |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# GraphLTM - Graph-Based Long-Term Memory Engine

[https://github.com/bazilicum/graphltm#graphltm---graph-based-long-term-memory-engine](https://github.com/bazilicum/graphltm#graphltm---graph-based-long-term-memory-engine)

> *Turn any LLM into a self-extending knowledge agent powered by a graph-structured memory - complete with PDF-to-graph ingestion, budget-aware optimisation, and dual-engine orchestration.*

[https://github.com/bazilicum/GraphLTM/blob/main/LICENSE](https://github.com/bazilicum/GraphLTM/blob/main/LICENSE)[https://github.com/bazilicum/GraphLTM/blob/main/.python-version](https://github.com/bazilicum/GraphLTM/blob/main/.python-version)

---

[https://github.com/bazilicum/GraphLTM/blob/main/GraphLTM.png](https://github.com/bazilicum/GraphLTM/blob/main/GraphLTM.png)

---

## Table of Contents

[https://github.com/bazilicum/graphltm#table-of-contents](https://github.com/bazilicum/graphltm#table-of-contents)

1. [Key Features](https://github.com/bazilicum/graphltm#key-features)
2. [Subsystems](https://github.com/bazilicum/graphltm#subsystems)
3. [Graph Schema & Node Types](https://github.com/bazilicum/graphltm#graph-schema--node-types)
4. [Retrieval, Optimisation & STM](https://github.com/bazilicum/graphltm#retrieval-optimisation--stm)
5. [PDF Uploader & Knowledge Nodes](https://github.com/bazilicum/graphltm#pdf-uploader--knowledge-nodes)
6. [Architecture Overview](https://github.com/bazilicum/graphltm#architecture-overview)
7. [Quick Start](https://github.com/bazilicum/graphltm#quick-start)
8. [Configuration](https://github.com/bazilicum/graphltm#configuration)
9. [API Reference](https://github.com/bazilicum/graphltm#api-reference)
10. [Testing & Quality](https://github.com/bazilicum/graphltm#testing--quality)
11. [Roadmap](https://github.com/bazilicum/graphltm#roadmap)
12. [Contributing](https://github.com/bazilicum/graphltm#contributing)
13. [License](https://github.com/bazilicum/graphltm#license)
14. [Citation](https://github.com/bazilicum/graphltm#citation)

---

## Key Features

[https://github.com/bazilicum/graphltm#key-features](https://github.com/bazilicum/graphltm#key-features)

The GraphLTM project showcases advanced skills in Natural Language Processing, Large Language Models, Graph Databases, and scalable system design.

| Category | Highlights | Skills Demonstrated |
|---|---|---|
| Memory Graph | Four node types (Knowledge, Memory, Synthesis, Concept) with typed edges. Concept nodes store a mixed embedding blending parent meaning & key phrase (K*V-style). | Graph Database Design, Knowledge Representation, Semantic Embedding, Data Modeling |
| PDF -> Knowledge | Web GUI to upload PDFs and convert into Knowledge nodes. Real-time progress via WebSockets. Source metadata (source_name, source_file, page_num, chunk_id) is stored as properties on each Knowledge node. | Full-Stack Web Development (Flask, Socket.IO), Document Processing (PDF Parsing, Text Extraction), Data Ingestion Pipelines |
| Retrieval Pipeline | Prompts re-written as WH-questions before vector search. Relevance walk expands hits through RELATES_TO & TAGS edges. Supports hybrid RAG: Knowledge + Memories + Synthesis. | Advanced RAG Techniques, NLP (Question Generation), Graph Traversal Algorithms, Information Retrieval, Vector Search |
| Context Optimisation | Optional optimiser stage condenses retrieved nodes into one coherent assistant message, driven by a Token Budget Calculator ensuring context fits the window. | LLM Context Management, Token Optimization, Prompt Engineering, Resource Management |
| Signal Gating & Dedup | LLM scores info & emotion, skips low-value or duplicate memories. | LLM Evaluation, Memory Management, Data Filtering, Autonomous Agents |
| Autonomous Synthesis | Cluster drift triggers creation of summarising Synthesis nodes. | Unsupervised Learning (Conceptual Grouping), Knowledge Summarization, Autonomous System Design |
| Dual-Engine Strategy | Main LLM (GPT-4o etc.) crafts optimiser & user replies, while Aux LLM (local/cheaper) handles WH-question generation, scoring, concept extraction, synthesis. | LLM Orchestration, API Integration, Cost Optimization, Task-Specific Model Utilization |
| Configurable Modes | Toggle read-only vs read+write. Enable/disable optimiser & PDF ingestion. | System Configuration, Modular Design, User Control, Flexibility |
| STM Co-Pilot | Fast in-process short-term buffer holds last n conversational turns. | Conversational AI, State Management, Efficient Data Buffering |

---

## Subsystems

[https://github.com/bazilicum/graphltm#subsystems](https://github.com/bazilicum/graphltm#subsystems)

GraphLTM ships as a **unified web service** providing two main interfaces:

| Subsystem | Responsibilities | Typical Lifespan |
|---|---|---|
| Chat Interface | Handles user chat interactions, context retrieval, LLM orchestration, and memory write. | Long-running daemon |
| PDF Management Interface | Provides a web GUI for PDF ingestion, including chunking, embedding, storing Knowledge nodes, and managing sources. | Long-running daemon |

This unified service writes to the **same Neo4j + vector index**, so newly ingested knowledge becomes queryable by the Chat Engine in real time.

---

## Graph Schema & Node Types

[https://github.com/bazilicum/graphltm#graph-schema--node-types](https://github.com/bazilicum/graphltm#graph-schema--node-types)

| Label | Origin | Description | Key Properties |
|---|---|---|---|
| Knowledge | PDF / external | Cleaned chunk of a source doc. | source_name, source_file, page_num, chunk_id, text, embedding |
| Memory | Chat | Persisted user <-> assistant turn. | prompt, response, title, embedding |
| Synthesis | Auto | Summary representing a cluster. | synthesis_text, created_at, embedding |
| Concept | Extraction | Key phrase node; embedding = α·parent + (1-α)·phrase. | phrase, embedding, alpha |

### Edges

[https://github.com/bazilicum/graphltm#edges](https://github.com/bazilicum/graphltm#edges)

| Type | Source -> Target | Meaning |
|---|---|---|
| RELATES_TO | Any <-> Any | Semantic similarity / topical link |
| TAGS | Concept -> (Memory | Knowledge |
| NEXT_CHUNK | Knowledge -> Knowledge | Sequential order of PDF chunks |
| SYNTHESIZED_BY | Memory -> Synthesis | Memory compressed into synthesis node |
| EXTENDS | Synthesis <-> Synthesis | Evolution across clusters |

---

## Retrieval, Optimisation & STM

[https://github.com/bazilicum/graphltm#retrieval-optimisation--stm](https://github.com/bazilicum/graphltm#retrieval-optimisation--stm)

```
User Prompt
   │
   ▼
WH-Question Generator  (Aux LLM)
   │
   ▼
Vector Search (Neo4j)  ➜ returns Knowledge + Memory + Synthesis nodes
   │  top-k nodes
   ▼
Relevance Plan Walker  (heuristic walk + Concept boost)
   │  ranked nodes
   ▼
Context Assembler  (Token-Budget)
   • Adds nodes until budget cap
   ▼
Optional Optimiser  (Main LLM)
   • Condenses list into 1 coherent assistant message
   ▼
Prompt Builder
   • System prompt + (optimised context OR raw list) + STM buffer
   ▼
Main LLM -> Assistant Reply
   ▼
Context Storer  (Aux LLM) -> GraphDB
```

## PDF Uploader & Knowledge Nodes

[https://github.com/bazilicum/graphltm#pdf-uploader--knowledge-nodes](https://github.com/bazilicum/graphltm#pdf-uploader--knowledge-nodes)

- Visit the web interface at `http://localhost:<port>` (default port is configured in config.py)
- The interface provides two main features: 
  - Chat interface for interacting with the LLM
  - PDF management interface for uploading and managing knowledge sources

- Each document is chunked, embedded, and stored as `Knowledge` nodes with source metadata as properties.
- GUI displays ingestion progress live via WebSockets.

---

## Architecture Overview

[https://github.com/bazilicum/graphltm#architecture-overview](https://github.com/bazilicum/graphltm#architecture-overview)

```
flowchart TD

    %% Database
    DB[(Neo4j + Vector Index)]

    %% Chat Processing Pipeline
    subgraph CPM[Chat Processing Pipeline]
        direction TB
        U[User Prompt] -->|Convert| Q[WH-Question Generator]
        Q -->|Search| VS[Vector Search]
        VS -->|Expand| RW[Relevance Walker]
        RW -->|Build| CA[Context Assembler]
        CA -->|Optimize?| OPT{Optimizer}
        OPT -->|Yes| O[Context Optimizer]
        OPT -->|No| PB[Prompt Builder]
        O --> PB
        PB -->|Generate| ML[Main LLM]
        ML -->|Store| CS[Context Storer]
    end

    %% PDF Processing Pipeline
    subgraph PPM[PDF Processing Pipeline]
        direction TB
        PDF[PDF Upload] -->|Chunk| CH[Chunker]
        CH -->|Embed| EM[Embedder]
        EM -->|Store| CKS[Chunk storer]
    end

    %% User Interface
    subgraph UI[Web Interface]
        B[Browser] -->|Chat & PDF Upload| API
        API -->|Chat Processing| CP[Chat Pipeline]
        API -->|PDF Processing| PP[PDF Pipeline]
    end

    %% Connections
    CP --> CPM
    PP --> PPM
    DB <--> VS
    DB <--> RW
    DB <--> CS
    DB <--> CKS
```

Loading

## Quick Start

[https://github.com/bazilicum/graphltm#quick-start](https://github.com/bazilicum/graphltm#quick-start)

```
git clone https://github.com/bazilicum/GraphLTM.git
cd GraphLTM
cp .env.example .env   # add API keys

docker compose up -d   # Neo4j, Flask API, optional LocalAI

# Access the web interface
open http://localhost:<port>  # port configured in config.py
```

### Configuration

[https://github.com/bazilicum/graphltm#configuration](https://github.com/bazilicum/graphltm#configuration)

| Setting | Default | Role |
|---|---|---|
| web_server.port | 5000 | Web server port |
| memory.long_term.write.enabled | True | Persist new memories |
| memory.optimize_message_list.enabled | True | Enable optimiser |
| memory.token_budget.window | 8192 | Context window tokens |
| ingestion.pdf.enabled | True | Toggle PDF pipeline |
| llm.main_chat_loop.provider | openai | Main LLM |
| llm.aux.provider | openai | Aux LLM |

Full option matrix lives in **config.py**.

---

## Contributing

[https://github.com/bazilicum/graphltm#contributing](https://github.com/bazilicum/graphltm#contributing)

See **CONTRIBUTING.md** - PRs welcome!

---

## License

[https://github.com/bazilicum/graphltm#license](https://github.com/bazilicum/graphltm#license)

MIT

---

## Citation

[https://github.com/bazilicum/graphltm#citation](https://github.com/bazilicum/graphltm#citation)

```
@software{graphltm2025,
  author  = {Erez Azaria},
  title   = {GraphLTM: Graph-Based Long-Term Memory for LLMs},
  year    = {2025},
  version = {v0.1.0},
  url     = {[https://github.com/bazilicum/GraphLTM](https://github.com/bazilicum/GraphLTM)},
}
```

## About

         Turn any LLM into a self-extending knowledge agent powered by a graph-structured memory - complete with PDF-to-graph ingestion, budget-aware optimisation, and dual-engine orchestration.       

### Topics

[python](https://github.com/topics/python)[knowledge-graph](https://github.com/topics/knowledge-graph)[graph-database](https://github.com/topics/graph-database)[memory-management](https://github.com/topics/memory-management)[ltm](https://github.com/topics/ltm)[long-short-term-memory](https://github.com/topics/long-short-term-memory)[rag](https://github.com/topics/rag)[llm](https://github.com/topics/llm)[rag-systems](https://github.com/topics/rag-systems)[rag-system](https://github.com/topics/rag-system)

### Resources

[Readme](https://github.com/bazilicum/graphltm#readme-ov-file)

### License

[MIT license](https://github.com/bazilicum/graphltm#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/bazilicum/graphltm#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/bazilicum/GraphLTM/activity)

### Stars

[4
        stars](https://github.com/bazilicum/GraphLTM/stargazers)

### Watchers

[0
        watching](https://github.com/bazilicum/GraphLTM/watchers)

### Forks

[0
        forks](https://github.com/bazilicum/GraphLTM/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fbazilicum%2FGraphLTM&report=bazilicum+%28user%29)

## [Releases](https://github.com/bazilicum/GraphLTM/releases)

No releases published

## [Packages
      0](https://github.com/users/bazilicum/packages?repo_name=GraphLTM)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/bazilicum/GraphLTM/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          79.9%](https://github.com/bazilicum/GraphLTM/search?l=python)
- [HTML
          13.6%](https://github.com/bazilicum/GraphLTM/search?l=html)
- [CSS
          6.1%](https://github.com/bazilicum/GraphLTM/search?l=css)
- [Dockerfile
          0.4%](https://github.com/bazilicum/GraphLTM/search?l=dockerfile)

     You can’t perform that action at this time.
