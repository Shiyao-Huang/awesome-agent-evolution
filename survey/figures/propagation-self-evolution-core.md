# Star Project Self-Evolution Core

> Source: `analysis/star-project-propagation.md` | 3 self-evolution projects with 10K+ stars

## Self-Evolution Star Projects

```mermaid
graph TD
    subgraph "Self-Evolution Core (10K+ stars)"
        ARC["AutoResearchClaw<br/>12.6K★ 2026-05<br/>Research pipeline evolution<br/>PIVOT/REFINE loop<br/>Multi-agent debate → sandbox → verify → learn"]
        GA["GenericAgent<br/>11.9K★ 2026-05<br/>Architecture self-modification<br/>Generic self-evolving framework"]
        HIVE["hive<br/>10.4K★ 2026-05<br/>Workflow/graph evolution<br/>Failure-driven graph evolution<br/>Production multi-agent harness"]
    end

    subgraph "Evolution Influences (from <10K stars)"
        ADAS["ADAS<br/>1.4K★<br/>Architecture search"]
        DGM["DGM<br/>0.8K★<br/>Darwin Gödel Machine"]
        AZ["Absolute Zero<br/><1K★<br/>Reward self-play"]
        CORAL["CORAL<br/><1K★<br/>Multi-agent co-evolution"]
        REFLEX["Reflexion<br/>paper-code<br/>Reflection memory"]
    end

    subgraph "Infrastructure They Depend On"
        M0["mem0<br/>56.5K★<br/>Memory substrate"]
        OC["openclaw<br/>374K★<br/>Runtime"]
        SK["Skills ecosystem<br/>140K★ total<br/>Skill standard"]
        BENCH["Benchmarks<br/>SWE-bench, ARC-Bench"]
    end

    %% Influences
    ADAS -.->|architecture search| GA
    DGM -.->|Gödel machine concept| GA
    AZ -.->|self-play reward| GA
    CORAL -.->|multi-agent debate| ARC
    REFLEX -.->|reflection| ARC

    %% Dependencies
    ARC -->|uses| M0
    ARC -->|runs on| OC
    ARC -->|learns skills| SK
    ARC -->|benchmarked on| BENCH
    HIVE -->|memory| M0
    HIVE -->|runtime| OC

    style ARC fill:#f39c12,color:#fff
    style GA fill:#f39c12,color:#fff
    style HIVE fill:#f39c12,color:#fff
    style ADAS fill:#e74c3c,color:#fff
    style DGM fill:#e74c3c,color:#fff
    style M0 fill:#1abc9c,color:#fff
    style OC fill:#2ecc71,color:#fff
```

## The 3 Self-Evolution Star Projects

| Project | Evolution Dimension | Method | Evidence |
|---------|-------------------|--------|----------|
| **AutoResearchClaw** | Skill + Memory + Workflow | 23-stage research pipeline; PIVOT/REFINE loop; multi-agent debate; sandbox experiment; claim verification; lesson learning across runs | 12.6K★, v0.5.0, ARC-Bench |
| **GenericAgent** | Architecture | Generic self-evolving agent framework; architecture self-modification | 11.9K★ |
| **hive** | Workflow/Graph | Production multi-agent harness; failure capture → graph evolution; state persistence; crash recovery; cost control | 10.4K★, Apache-2.0 |

## Research-to-Star Gap

Self-evolution research leaders are <5K stars while infrastructure projects dominate:

| Research Method | Paper Impact | GitHub Stars | Star Gap Factor |
|----------------|-------------|-------------|-----------------|
| Architecture Search (ADAS) | ICML 2024 | 1,400 | 80x vs average skill repo |
| Gödel Machine (DGM) | arXiv 2025 | 800 | 175x vs average skill repo |
| Self-Play Reward (Absolute Zero) | arXiv 2025 | <1,000 | 140x vs average skill repo |
| Multi-Agent Debate (CORAL) | arXiv 2025 | <1,000 | 140x vs average skill repo |
| Reflection (Reflexion) | NeurIPS 2023 | paper-code | Academic code only |

**Conclusion**: The self-evolution research frontier is not yet reflected in community star counts. The 10K+ star projects represent applied evolution (research pipelines, generic agents) rather than the core evolutionary mechanisms being researched.
