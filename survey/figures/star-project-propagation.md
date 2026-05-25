# Star Project Propagation Diagrams

Source: analysis/star-project-propagation.md (2026-05-25)

## Figure 1: Three-Generation Timeline

```mermaid
graph TD
    subgraph "G1: 2023 Pioneers — Category Creation"
        DSP["DSPy<br/>34.6K★ | 2023-01<br/>Prompt optimization"]
        AG["AutoGPT<br/>184.5K★ | 2023-03<br/>Autonomous agents"]
        CAMEL["CAMEL-AI<br/>17K★ | 2023-03<br/>Role-playing"]
        MGT["MetaGPT<br/>68.2K★ | 2023-06<br/>SOP teams"]
        LG["LangGraph<br/>32.8K★ | 2023-08<br/>Graph orchestration"]
        AGT["AutoGen<br/>58.3K★ | 2023-08<br/>Actor model"]
        CREW["CrewAI<br/>52K★ | 2023-10<br/>Crew+Flow"]
    end

    subgraph "G2: 2024 Specialists"
        OH["OpenHands<br/>74.7K★ | 2024-03<br/>Microagents + sandbox"]
        SWE["SWE-Agent<br/>19.3K★ | 2024-04<br/>ACI + SWE-bench"]
    end

    subgraph "G3: 2025-2026 Ecosystem"
        OC["openclaw<br/>374K★ | 2026<br/>Local-first runtime"]
        SP["superpowers<br/>202K★ | 2026<br/>Skills methodology"]
        ECC["ECC<br/>191K★ | 2026<br/>Harness optimizer"]
        ASK["anthropics/skills<br/>140K★ | 2026<br/>Official skills"]
        CSK["awesome-claude-skills<br/>61.5K★ | 2026<br/>Community index"]
        M0["mem0<br/>56.5K★ | 2026<br/>Memory substrate"]
        OSK["openai/skills<br/>20.1K★ | 2026<br/>Codex skills"]
        AK["agentskills<br/>19.3K★ | 2026<br/>Open standard"]
        PW["planning-with-files<br/>22K★ | 2026<br/>Session persistence"]
        OH2["OpenHarness<br/>13K★ | 2026<br/>Academic runtime"]
        ARC["AutoResearchClaw<br/>12.6K★ | 2026<br/>Self-evolving research"]
        HIVE["hive<br/>10.4K★ | 2026<br/>Graph evolution"]
        AM["agentmemory<br/>16K★ | 2026<br/>Persistent memory"]
    end

    DSP -->|optimization primitives| M0
    AG -->|autonomous loop| OC
    AG -->|self-improve| ARC
    AG -->|agent concept| OH
    MGT -->|multi-agent| AGT
    MGT -->|team SOP| CREW
    LG -->|graph model| OH2
    OH -->|sandbox eval| ARC
    SWE -->|benchmark-driven| ARC
    OC -->|runtime| ECC
    OC -->|runtime| SP
    M0 -->|memory API| OC

    style DSP fill:#9b59b6,color:#fff
    style AG fill:#e74c3c,color:#fff
    style OC fill:#2ecc71,color:#fff
    style M0 fill:#1abc9c,color:#fff
    style ARC fill:#f39c12,color:#fff
```

## Figure 2: Skills Ecosystem Vendor Map

```mermaid
graph LR
    subgraph Platforms
        CC[Claude Code]
        CX[Codex CLI]
        CUR[Cursor]
    end

    subgraph "Official Skills"
        AS[anthropics/skills<br/>140K★]
        OS[openai/skills<br/>20.1K★]
    end

    subgraph "Community Indexes"
        CS[awesome-claude-skills<br/>61.5K★]
        AK[agentskills<br/>19.3K★]
    end

    subgraph "Memory Layer"
        M0[mem0<br/>56.5K★]
        AM[agentmemory<br/>16K★]
    end

    CC --> AS
    CC --> CS
    CX --> OS
    CX --> CS
    CUR --> CS
    M0 -.->|SDK| CC
    M0 -.->|SDK| CX
    AM -.->|MCP| CC

    style AS fill:#e67e22,color:#fff
    style OS fill:#e67e22,color:#fff
    style M0 fill:#1abc9c,color:#fff
```

## Figure 3: Self-Evolution Core Propagation

```mermaid
graph TD
    DSP[DSPy<br/>Optimization primitives] --> REVO[ReEvo<br/>Reflective evolution]
    DSP --> M0[mem0<br/>Memory learning]

    AG[AutoGPT<br/>Autonomous loop] --> OH[OpenHands<br/>Sandbox evaluation]
    OH --> ARC[AutoResearchClaw<br/>Self-evolving pipeline]
    AG --> ARC

    SWE[SWE-Agent<br/>Benchmark-driven] --> ARC

    OH --> HIVE[hive<br/>Graph evolution]

    subgraph "Self-Evolution Core (10K+★)"
        ARC
        HIVE
    end

    style ARC fill:#f39c12,color:#fff
    style HIVE fill:#f39c12,color:#fff
    style DSP fill:#9b59b6,color:#fff
    style AG fill:#e74c3c,color:#fff
```

## Figure 4: Influence Heat Map

| Project | Influenced | Pattern | Self-Evo Relevance |
|---------|:----------:|---------|:------------------:|
| AutoGPT | 12 | Concept-diffusion | Medium |
| DSPy | 5 | API-integration | High |
| MetaGPT | 4 | Competitor-branching | Medium |
| OpenHands | 3 | Specialization | Medium |
| mem0 | 3 | API-integration | High |
| openclaw | 3 | Ecosystem-nesting | Medium |

Top 3 self-evolution relevant 10K+ projects: DSPy (prompt optimization loop), mem0 (memory substrate for learning), AutoResearchClaw (explicit PIVOT/REFINE evolution).

## Figure 5: Propagation Pattern Distribution

| Pattern | Count | Key Projects |
|---------|------:|-------------|
| Concept-diffusion | 8 | AutoGPT → openclaw, ECC, hive |
| API-integration | 6 | mem0 → Claude Code, Codex; DSPy → ReEvo |
| Competitor-branching | 5 | MetaGPT vs AutoGen vs LangGraph vs CrewAI |
| Ecosystem-nesting | 3 | anthropics/skills under Claude Code |
| Fork-divergence | 1 | AutoGPT → Devika |
