# 项目依赖/生态图

- generated_at: 2026-05-25
- source: `README.md` model-card groups + `projects/` cross-references
- total_groups: 26

```mermaid
flowchart TD
    subgraph CORE["Core Self-Evolution"]
        CODE["AlphaEvolve 类<br/>openevolve · SE-Agent<br/>code-evolve"]
        ADAS["Architecture Search<br/>ADAS"]
        RL["LLM Optimizer<br/>OPRO · OpenELM · FunSearch"]
        REFLECT["Reflection<br/>Reflexion · Self-Refine"]
    end

    subgraph AGENT_SYS["Agent Systems"]
        AUTO["AutoGPT · SWE-Agent<br/>OpenHands · Devika"]
        MULTI["MetaGPT · CrewAI<br/>AutoGen · CAMEL"]
        GRAPH["LangGraph"]
        AGSYS["AgentEvolver<br/>SCOPE · AgentOS"]
    end

    subgraph INFRA["Infrastructure"]
        MEMORY["Memory Layer<br/>Mem0 · LangMem · Graphiti"]
        SKILLS["Skills Hub<br/>OpenClaw · Skill Series"]
        HARNESS["Harness<br/>harness-evolver · OpenHarness"]
        DSPY["DSPy"]
    end

    subgraph EVAL["Evaluation"]
        BENCH["AgentBench · SWE-Bench"]
        JUDGE["LLM-Self-Judge · DARWIN"]
        CLAW["ClawBench · PinchBench"]
    end

    subgraph EVO["Evolutionary Computing"]
        EC["DEAP · pycma · Nevergrad"]
        LLM4["LLM4EC · LLM4Opt · LLM_EA"]
        QD["pyribs"]
    end

    CODE -->|"code variants"| EVAL
    ADAS -->|"architecture"| AGSYS
    RL -->|"optimize"| DSPY
    REFLECT -->|"reflection"| MULTI
    AUTO -->|"tool use"| EVAL
    AGSYS -->|"experience"| MEMORY
    AGSYS -->|"skills"| SKILLS
    MULTI -->|"debate"| JUDGE
    HARNESS -->|"env"| EVAL
    EC -->|"baseline"| LLM4
    CLAW -->|"real tasks"| AUTO

    style CORE fill:#e8f5e9,stroke:#333
    style INFRA fill:#e3f2fd,stroke:#333
    style EVAL fill:#fff3e0,stroke:#333
```

## Ecosystem Clusters

| Cluster | Projects | Key Interaction |
|---------|---------|-----------------|
| Core Evolution | 10 | Code/architecture search → evaluation |
| Agent Systems | 12 | Runtime → memory/skills |
| Infrastructure | 98 | Memory + skills + harness support |
| Evaluation | 163 | Benchmarks + judges + real tasks |
| Evolutionary Computing | 10 | Classic → LLM-hybrid methods |
