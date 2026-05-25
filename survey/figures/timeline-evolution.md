# 时间线演进图 (2022-2026)

- generated_at: 2026-05-25
- source: `README.md` 历史主线 + `analysis/github-project-data-analysis.md`
- key_milestones: extracted from release timeline

```mermaid
gantt
    title AI Agent Self-Evolution Method Timeline
    dateFormat YYYY-MM
    axisFormat %Y-%m

    section Prompt/Reflection
    Reflexion (2023)           :2023-01, 3M
    Self-Refine (2023)         :2023-03, 3M
    DSPy (2023)                :2023-06, 6M
    OPRO (2023)                :2023-09, 6M
    EvoPrompt (2024)           :2024-01, 6M

    section Reward/RL
    FunSearch (2023)           :2023-12, 3M
    OpenELM (2024)             :2024-03, 6M
    RL4CO (2024)               :2024-06, 6M

    section Agent Runtime
    AutoGPT (2023)             :2023-03, 6M
    MetaGPT (2023)             :2023-07, 6M
    CAMEL (2023)               :2023-03, 6M
    AutoGen (2023)             :2023-09, 6M
    CrewAI (2024)              :2024-01, 6M
    LangGraph (2024)           :2024-03, 6M

    section Code/Self-Modify
    ADAS (2024)                :2024-06, 6M
    DGM (2025)                 :2025-01, 6M
    AlphaEvolve (2025)         :2025-06, 3M
    OpenEvolve (2025)          :2025-09, 3M
    SE-Agent (2025)            :2025-09, 3M

    section Memory/Skill
    Mem0 (2024)                :2024-06, 6M
    LangMem (2025)             :2025-03, 6M
    Graphiti (2025)            :2025-06, 6M
    Skills ecosystem (2025)    :2025-06, 12M

    section Harness/Eval
    AgentBench (2023)          :2023-09, 6M
    SWE-Bench (2023)           :2023-10, 6M
    OSWorld (2024)             :2024-03, 6M
    BrowserGym (2024)          :2024-06, 6M
    LongMemEval (2025)         :2025-03, 6M
    STATE-Bench (2025)         :2025-06, 6M
    ClawBench (2026)           :2026-01, 3M

    section Multi-Agent
    EvoAgent (2024)            :2024-06, 6M
    EvoAgentX (2025)           :2025-01, 6M
    A-Evolve (2025)            :2025-06, 6M
```

## Phase Analysis

| Phase | Period | Key Shift |
|-------|--------|-----------|
| Lightweight self-improvement | 2022-2023 | Feedback → reflection → prompt retry |
| Agent runtime & multi-agent | 2023-2024 | Tools, roles, workflow, state machines |
| Architecture/code self-modification | 2024-2025 | Architecture, code, programs enter search space |
| Memory/skill/harness infrastructure | 2025-2026 | Installable skills, auditable memory, runnable harness |
