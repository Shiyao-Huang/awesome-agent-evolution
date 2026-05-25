# Benchmark 覆盖关系图

- generated_at: 2026-05-25
- source: `README.md` benchmark section + `analysis/github-project-data-analysis.json`
- benchmark_repos: 163

```mermaid
flowchart TD
    subgraph DIMS["Capability Dimensions"]
        CODE["Code Generation<br/>& Modification"]
        WEB["Web & Browser<br/>Interaction"]
        AGENT["Agent Runtime<br/>& Tool Use"]
        MEM["Memory &<br/>Long-term Recall"]
        SEARCH["Search &<br/>Optimization"]
        SAFE["Safety &<br/>Alignment"]
    end

    subgraph BENCH["Key Benchmarks"]
        SWE["SWE-Bench"]
        HE["HumanEval"]
        OSW["OSWorld"]
        BG["BrowserGym"]
        AB["AgentBench"]
        LME["LongMemEval"]
        STB["STATE-Bench"]
        RL4["RL4CO"]
        CB["ClawBench / PinchBench"]
    end

    subgraph METHODS["Evolution Methods"]
        RL["reward/RL<br/>self-play"]
        PS["prompt/search<br/>optimization"]
        CS["code/self-<br/>modification"]
        MA["multi-agent<br/>reflection"]
        MM["memory<br/>evolution"]
        EV["evaluation<br/>governance"]
    end

    SWE --> CODE
    HE --> CODE
    OSW --> AGENT
    BG --> WEB
    AB --> AGENT
    LME --> MEM
    STB --> SAFE
    RL4 --> SEARCH
    CB --> AGENT

    CODE --> CS
    CODE --> PS
    WEB --> MA
    AGENT --> RL
    AGENT --> MA
    MEM --> MM
    SEARCH --> RL
    SEARCH --> PS
    SAFE --> EV

    style CODE fill:#4ecdc4,stroke:#333
    style AGENT fill:#4ecdc4,stroke:#333
    style MEM fill:#ffe66d,stroke:#333
    style SAFE fill:#ff6b6b,stroke:#333
```

## Benchmark Gap Analysis

| Dimension | Benchmarks | Coverage | Gap |
|-----------|-----------|----------|-----|
| Code | SWE-Bench, HumanEval | Strong | Well-covered |
| Web/Browser | BrowserGym | Moderate | Need more real-world |
| Agent Runtime | AgentBench, OSWorld | Strong | Growing |
| Memory | LongMemEval | Weak | Under-benchmarked |
| Optimization | RL4CO | Moderate | Niche |
| Safety | STATE-Bench | Weak | Critical gap |
