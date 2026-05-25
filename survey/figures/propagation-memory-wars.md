# Star Project Memory Infrastructure Competition

> Source: `analysis/star-project-propagation.md` | 7 memory projects with 10K+ stars

## Memory Wars Landscape (2026)

```mermaid
graph TD
    subgraph "Memory Architecture Spectrum"
        direction LR
        SDK["SDK/API<br/>mem0 56.5K★"] --- MCP["MCP Protocol<br/>mempalace 52.8K★<br/>graphiti 26.5K★<br/>agentmemory 16K★<br/>memU 13.7K★"]
        MCP --- EMBED["Embedded<br/>Memori 14.9K★<br/>hindsight 14.4K★"]
    end

    subgraph "Memory Type Spectrum"
        direction LR
        VEC["Vector/Embedding<br/>mem0, mempalace"] --- HYB["Hybrid<br/>graphiti, agentmemory"]
        HYB --- GRAPH["Knowledge Graph<br/>graphiti, agentmemory"]
    end

    subgraph "Key Differentiators"
        BM["Benchmarked<br/>mempalace: LongMemEval<br/>Memori: LoCoMo 81.95%"]
        PRO["Proactive<br/>memU: 24/7 low-token"]
        LRN["Learning Loop<br/>hindsight: reflect API"]
        LOC["Local-First<br/>mempalace: verbatim<br/>agentmemory: persistent"]
    end

    subgraph "Integration Targets"
        OC["openclaw"]
        CC["Claude Code"]
        LC["LangChain"]
        CREW["CrewAI"]
    end

    mem0 -->|SDK| OC
    mem0 -->|SDK| LC
    mem0 -->|SDK| CREW
    mempalace -->|MCP| CC
    graphiti -->|MCP| OC
    agentmemory -->|MCP| CC
    Memori -->|API| OC
    hindsight -->|reflect| CC
    memU -->|MCP| OC

    style SDK fill:#1abc9c,color:#fff
    style MCP fill:#3498db,color:#fff
    style EMBED fill:#9b59b6,color:#fff
```

## Memory Evolution Relevance

Memory is the **substrate** for self-evolution. Without persistent state, agents cannot learn across sessions. The 7 competing systems differ in:

| Dimension | Key Trade-off |
|-----------|---------------|
| Integration model | SDK (mem0) vs MCP (most) vs Embedded (Memori/hindsight) |
| Storage type | Vector-only vs Hybrid (vector+graph) vs Knowledge Graph |
| Retrieval | Semantic similarity vs Temporal query vs Hybrid |
| Benchmarking | mempalace (LongMemEval), Memori (LoCoMo 81.95%), or none |
| Proactiveness | Reactive recall (most) vs Proactive injection (memU) |
| Learning loop | None (most) vs Built-in reflect API (hindsight) |
