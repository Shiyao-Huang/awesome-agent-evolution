---
repo: arthurmgraf/graphmind
url: https://github.com/arthurmgraf/graphmind
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - arthurmgraf/graphmind: Autonomous Knowledge Agent Platform - Agentic RAG with Knowledge Graphs, hybrid retrieval, LangGraph agents, and MCP server · GitHub

**Source**: https://github.com/arthurmgraf/graphmind

---

[Skip to content](https://github.com/arthurmgraf/graphmind#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[arthurmgraf](https://github.com/arthurmgraf)

/
**[graphmind](https://github.com/arthurmgraf/graphmind)**

Public

- [Notifications](https://github.com/login?return_to=%2Farthurmgraf%2Fgraphmind)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Farthurmgraf%2Fgraphmind)
- 
[Star
          1](https://github.com/login?return_to=%2Farthurmgraf%2Fgraphmind)

[https://github.com/arthurmgraf/graphmind](https://github.com/arthurmgraf/graphmind)

[Branches](https://github.com/arthurmgraf/graphmind/branches)[Tags](https://github.com/arthurmgraf/graphmind/tags)

[https://github.com/arthurmgraf/graphmind/branches](https://github.com/arthurmgraf/graphmind/branches)[https://github.com/arthurmgraf/graphmind/tags](https://github.com/arthurmgraf/graphmind/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History15 Commits15 Commits |  |  |  |
| .claude/sdd/features | .claude/sdd/features |  |  |
| .github | .github |  |  |
| config | config |  |  |
| diagrams/generated | diagrams/generated |  |  |
| docs | docs |  |  |
| eval | eval |  |  |
| k8s | k8s |  |  |
| migrations | migrations |  |  |
| scripts | scripts |  |  |
| src/graphmind | src/graphmind |  |  |
| tests | tests |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| ROADMAP.md | ROADMAP.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| docker-compose.gpu.yml | docker-compose.gpu.yml |  |  |
| docker-compose.prod.yml | docker-compose.prod.yml |  |  |
| docker-compose.secrets.yml | docker-compose.secrets.yml |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# GraphMind

[https://github.com/arthurmgraf/graphmind#graphmind](https://github.com/arthurmgraf/graphmind#graphmind)

**Autonomous Knowledge Agent Platform** -- Agentic RAG powered by Knowledge Graphs, dual-engine orchestration, and self-evaluating retrieval pipelines.

[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://github.com/arthurmgraf/graphmind#testing](https://github.com/arthurmgraf/graphmind#testing)[https://github.com/arthurmgraf/graphmind/blob/main/LICENSE](https://github.com/arthurmgraf/graphmind/blob/main/LICENSE)

---

## Architecture

[https://github.com/arthurmgraf/graphmind#architecture](https://github.com/arthurmgraf/graphmind#architecture)

GraphMind runs two orchestration engines over a shared hybrid retrieval layer. Queries enter through the API, select an engine, and pass through self-evaluation before returning an answer.

```
+------------------+
                          |   FastAPI / MCP   |
                          |   Streamlit UI    |
                          +--------+---------+
                                   |
                          engine = ?
                     +-------------+-------------+
                     |                           |
          +----------v----------+     +----------v----------+
          |      LangGraph      |     |       CrewAI        |
          |   (state machine)   |     |  (role-based crew)  |
          |                     |     |                     |
          |  Planner            |     |  Research Agent     |
          |    |                |     |  Analysis Agent     |
          |  Retriever Agent    |     |  Synthesis Agent    |
          |    |                |     |  QA Agent           |
          |  Synthesizer        |     |                     |
          |    |                |     |  Sequential process |
          |  Evaluator          |     |  with shared tools  |
          |    |                |     |                     |
          |  score < 0.7 ?      |     +----------+----------+
          |   yes -> retry (x2) |                |
          |   no  -> done       |                |
          +----------+----------+     +----------+
                     |                           |
                     +-------------+-------------+
                                   |
                    +--------------v--------------+
                    |    Hybrid Retrieval Layer    |
                    |                             |
                    |  +--------+   +---------+   |
                    |  | Qdrant |   |  Neo4j  |   |
                    |  | Vector |   |  Graph  |   |
                    |  +---+----+   +----+----+   |
                    |      |             |        |
                    |      +------+------+        |
                    |             |                |
                    |        RRF Fusion            |
                    +--------------+---------------+
                                   |
                    +--------------v--------------+
                    |       LLM Router            |
                    |  Groq -> Gemini -> Ollama   |
                    |    (cascading fallback)      |
                    +-----------------------------+
```

---

## Key Features

[https://github.com/arthurmgraf/graphmind#key-features](https://github.com/arthurmgraf/graphmind#key-features)

- **Dual Orchestration Engines** -- LangGraph state machine for deterministic pipelines; CrewAI role-based crew for collaborative multi-agent reasoning. Choose per query.
- **Hybrid Retrieval with RRF** -- Combines Qdrant vector similarity search with Neo4j graph traversal, fused via Reciprocal Rank Fusion for higher recall and precision.
- **Self-Evaluation Loop** -- The LangGraph evaluator scores every answer. Scores below 0.7 trigger an automatic rewrite and re-query cycle (max 2 retries).
- **Multi-Provider LLM Routing** -- Cascading fallback across Groq, Google Gemini, and Ollama. If the primary provider is down or rate-limited, the next one picks up seamlessly.
- **Knowledge Graph Construction** -- Automated entity and relation extraction from ingested documents, building a Neo4j graph that enriches retrieval context.
- **7-Format Document Ingestion** -- Markdown, PDF, TXT, HTML, DOCX, CSV, and JSON loaders with configurable chunking strategies.
- **NeMo Guardrails** -- Input and output safety filtering via Colang flows to enforce content policies.
- **Full Observability** -- Langfuse tracing, per-request cost tracking, and metrics collection across every pipeline stage.
- **Evaluation Suite** -- DeepEval and RAGAS benchmarks measuring faithfulness, relevancy, and groundedness.
- **MCP Server** -- Model Context Protocol integration for IDE tools (Claude Code, Cursor, VS Code).
- **Streamlit Dashboard** -- Web UI for querying, document ingestion, knowledge graph statistics, and system health monitoring.
- **85 Unit Tests** passing across 10 test files.

---

## Technology Stack

[https://github.com/arthurmgraf/graphmind#technology-stack](https://github.com/arthurmgraf/graphmind#technology-stack)

| Component | Technology | Purpose |
|---|---|---|
| Orchestration | LangGraph + CrewAI | Dual-engine: state machine + role-based multi-agent crew |
| LLM Routing | Groq / Gemini / Ollama | Multi-provider with cascading fallback |
| Vector Store | Qdrant | Semantic similarity search |
| Graph Database | Neo4j | Entity-relationship traversal |
| Embeddings | Ollama (nomic-embed-text) | 768-dim local embeddings |
| Safety | NeMo Guardrails | Input/output filtering via Colang flows |
| Observability | Langfuse | Tracing, cost tracking, evaluation |
| Evaluation | DeepEval + RAGAS | Faithfulness, relevancy, groundedness metrics |
| API | FastAPI | REST endpoints for query, ingest, health |
| MCP Server | Model Context Protocol | IDE integration (Claude Code, Cursor, VS Code) |
| Dashboard | Streamlit | Web UI for queries, ingestion, and monitoring |
| Configuration | Pydantic Settings | Type-safe config with YAML overlay |
| Data Models | Pydantic v2 | 13 shared models across the platform |
| Infrastructure | Docker Compose | Qdrant, Neo4j, PostgreSQL, Langfuse, Ollama |

---

## Quick Start

[https://github.com/arthurmgraf/graphmind#quick-start](https://github.com/arthurmgraf/graphmind#quick-start)

### Prerequisites

[https://github.com/arthurmgraf/graphmind#prerequisites](https://github.com/arthurmgraf/graphmind#prerequisites)

- Python 3.11+
- Docker and Docker Compose
- Groq API key (free at [console.groq.com](https://console.groq.com))

### 1. Clone and install

[https://github.com/arthurmgraf/graphmind#1-clone-and-install](https://github.com/arthurmgraf/graphmind#1-clone-and-install)

```
git clone https://github.com/arthurmgraf/graphmind.git
cd graphmind
pip install -e ".[dev,eval]"
```

### 2. Start infrastructure

[https://github.com/arthurmgraf/graphmind#2-start-infrastructure](https://github.com/arthurmgraf/graphmind#2-start-infrastructure)

```
docker compose up -d
```

This launches Qdrant, Neo4j, PostgreSQL, Langfuse, and Ollama.

### 3. Pull the embedding model

[https://github.com/arthurmgraf/graphmind#3-pull-the-embedding-model](https://github.com/arthurmgraf/graphmind#3-pull-the-embedding-model)

```
make pull-models
```

### 4. Configure environment variables

[https://github.com/arthurmgraf/graphmind#4-configure-environment-variables](https://github.com/arthurmgraf/graphmind#4-configure-environment-variables)

```
export GROQ_API_KEY="your-key-here"
# Optional:
export GEMINI_API_KEY="your-key-here"
export NEO4J_PASSWORD="your-password"
```

### 5. Run

[https://github.com/arthurmgraf/graphmind#5-run](https://github.com/arthurmgraf/graphmind#5-run)

```
# FastAPI server
make run
# or: graphmind

# Streamlit dashboard
make dashboard
# or: graphmind-dashboard

# MCP server (for IDE integration)
make mcp
# or: graphmind-mcp
```

### 6. Ingest documents

[https://github.com/arthurmgraf/graphmind#6-ingest-documents](https://github.com/arthurmgraf/graphmind#6-ingest-documents)

```
# Via CLI
graphmind-ingest path/to/document.md --type md

# Via API
curl -X POST http://localhost:8000/api/v1/ingest \
  -H "Content-Type: application/json" \
  -d '{"content": "# My Doc

Content here.", "filename": "doc.md", "doc_type": "md"}'
```

### 7. Query

[https://github.com/arthurmgraf/graphmind#7-query](https://github.com/arthurmgraf/graphmind#7-query)

```
# LangGraph engine (default)
curl -X POST http://localhost:8000/api/v1/query \
  -H "Content-Type: application/json" \
  -d '{"question": "What is LangGraph?", "top_k": 10, "engine": "langgraph"}'

# CrewAI engine
curl -X POST http://localhost:8000/api/v1/query \
  -H "Content-Type: application/json" \
  -d '{"question": "Compare CrewAI and LangGraph", "engine": "crewai"}'
```

---

## Project Structure

[https://github.com/arthurmgraf/graphmind#project-structure](https://github.com/arthurmgraf/graphmind#project-structure)

```
graphmind/
├── config/                          # YAML configuration files
├── diagrams/
│   └── generated/                   # Exported diagrams (architecture, agents, data-flow)
├── docs/
│   ├── adrs/                        # Architecture Decision Records (5 ADRs)
│   ├── getting-started.md
│   ├── running.md
│   ├── querying.md
│   ├── ingestion.md
│   ├── testing.md
│   ├── deployment.md
│   └── BUILD_REPORT.md
├── eval/                            # Benchmark datasets and reports
├── src/graphmind/
│   ├── agents/                      # LangGraph nodes + orchestrator
│   │   ├── planner.py               #   Query planning and decomposition
│   │   ├── retriever_agent.py       #   Hybrid retrieval execution
│   │   ├── synthesizer.py           #   Answer generation
│   │   ├── evaluator.py             #   Self-evaluation with retry logic
│   │   ├── orchestrator.py          #   LangGraph state machine wiring
│   │   └── states.py                #   TypedDict state definitions
│   ├── crew/                        # CrewAI multi-agent crew
│   │   ├── agents.py                #   Role definitions (Research, Analysis, Synthesis, QA)
│   │   ├── tasks.py                 #   Task specifications
│   │   ├── tools.py                 #   Shared tool wrappers
│   │   └── crew.py                  #   Crew assembly and kickoff
│   ├── api/                         # FastAPI application
│   │   ├── main.py                  #   App factory and middleware
│   │   └── routes/                  #   query, ingest, health endpoints
│   ├── dashboard/                   # Streamlit web UI
│   │   └── app.py                   #   Query, ingest, graph stats, system health
│   ├── ingestion/                   # Document processing pipeline
│   │   ├── loaders.py               #   7 format loaders (MD, PDF, TXT, HTML, DOCX, CSV, JSON)
│   │   ├── chunker.py               #   Configurable text chunking
│   │   └── pipeline.py              #   End-to-end ingestion orchestration
│   ├── knowledge/                   # Knowledge graph construction
│   │   ├── entity_extractor.py      #   LLM-based entity extraction
│   │   ├── relation_extractor.py    #   LLM-based relation extraction
│   │   ├── graph_builder.py         #   Neo4j graph population
│   │   └── graph_schema.cypher      #   Graph schema definition
│   ├── retrieval/                   # Hybrid retrieval layer
│   │   ├── embedder.py              #   Ollama embedding client
│   │   ├── vector_retriever.py      #   Qdrant vector search
│   │   ├── graph_retriever.py       #   Neo4j graph traversal
│   │   └── hybrid_retriever.py      #   RRF fusion of vector + graph results
│   ├── safety/                      # NeMo Guardrails
│   │   ├── guardrails.py            #   Guardrails integration
│   │   ├── config.py                #   Safety configuration
│   │   ├── config.yml               #   NeMo config file
│   │   └── rails.co                 #   Colang flow definitions
│   ├── observability/               # Monitoring and tracing
│   │   ├── langfuse_client.py       #   Langfuse integration
│   │   ├── cost_tracker.py          #   Per-request cost tracking
│   │   └── metrics.py               #   Metrics collection
│   ├── evaluation/                  # Evaluation framework
│   │   ├── deepeval_suite.py        #   DeepEval test suite
│   │   ├── ragas_eval.py            #   RAGAS evaluation metrics
│   │   ├── eval_models.py           #   Evaluation data models
│   │   └── benchmark.py             #   Benchmark runner
│   ├── mcp/                         # Model Context Protocol server
│   │   └── server.py                #   MCP tool definitions
│   ├── config.py                    # Pydantic Settings with YAML overlay
│   ├── llm_router.py               # Multi-provider LLM routing with fallback
│   └── schemas.py                   # 13 shared Pydantic models
├── tests/
│   ├── unit/                        # 85 unit tests across 10 files
│   │   ├── test_agents.py
│   │   ├── test_chunker.py
│   │   ├── test_config.py
│   │   ├── test_cost_tracker.py
│   │   ├── test_crew.py
│   │   ├── test_deepeval_suite.py
│   │   ├── test_hybrid_retriever.py
│   │   ├── test_loaders.py
│   │   ├── test_metrics.py
│   │   └── test_schemas.py
│   ├── integration/                 # Integration tests
│   └── conftest.py                  # Shared fixtures
├── docker-compose.yml               # Qdrant, Neo4j, PostgreSQL, Langfuse, Ollama
├── Makefile                         # Common commands
└── pyproject.toml                   # Project metadata and dependencies
```

---

## Development

[https://github.com/arthurmgraf/graphmind#development](https://github.com/arthurmgraf/graphmind#development)

### Testing

[https://github.com/arthurmgraf/graphmind#testing](https://github.com/arthurmgraf/graphmind#testing)

```
# Run all unit tests (85 tests across 10 files)
make test

# Run with coverage report
make test-all

# Run a specific test file
pytest tests/unit/test_agents.py -v
```

### Linting and Formatting

[https://github.com/arthurmgraf/graphmind#linting-and-formatting](https://github.com/arthurmgraf/graphmind#linting-and-formatting)

```
make lint
