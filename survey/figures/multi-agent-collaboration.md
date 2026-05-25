# 多 Agent 协同模式图

- generated_at: 2026-05-25
- source: `README.md` + `survey/ch3-methods-cn.md` + `survey/ch8-future-cn.md`
- models: 4 canonical roles

```mermaid
flowchart TD
    subgraph ROLES["Canonical Roles"]
        GEN["🎯 Generator<br/>Produce candidates<br/>code · prompt · plan"]
        VER["✅ Verifier<br/>Test & validate<br/>benchmark · unit test"]
        RED["🔴 Red Team<br/>Attack & challenge<br/>adversarial · edge case"]
        AUD["🔍 Auditor<br/>Safety & cost check<br/>compliance · regression"]
    end

    subgraph PATTERNS["Collaboration Patterns"]
        P1["Pattern 1: Generate-Verify<br/>Generator → Verifier<br/>loop until pass"]
        P2["Pattern 2: Debate<br/>Generator ↔ Red Team<br/>converge via critique"]
        P3["Pattern 3: Evolutionary<br/>N Generators → Verifier<br/>tournament selection"]
        P4["Pattern 4: Hierarchical<br/>Auditor oversees all<br/>safety gate"]
    end

    subgraph METHODS["Method Families"]
        RL_M["reward/RL<br/>self-play"]
        MA_M["multi-agent<br/>reflection/debate"]
        CS_M["code/self-<br/>modification"]
        EV_M["evaluation<br/>governance"]
    end

    GEN -->|"candidate"| VER
    GEN -->|"proposal"| RED
    RED -->|"critique"| GEN
    VER -->|"pass/fail"| GEN
    VER -->|"score"| AUD
    RED -->|"vulnerability"| AUD
    AUD -->|"approve/reject"| GEN
    AUD -->|"rollback"| GEN

    P1 --> RL_M
    P2 --> MA_M
    P3 --> CS_M
    P4 --> EV_M

    style GEN fill:#4ecdc4,stroke:#333
    style VER fill:#45b7d1,stroke:#333
    style RED fill:#ff6b6b,stroke:#333
    style AUD fill:#ffd93d,stroke:#333
```

## Role Definitions

| Role | Function | Error Mode | Guard |
|------|----------|------------|-------|
| Generator | Produce solution candidates | Overfit to known patterns | Diversity injection |
| Verifier | Test against benchmarks | Goodhart's law | Hidden test sets |
| Red Team | Find failures & adversarial cases | Excessive blocking | Calibrated thresholds |
| Auditor | Safety, cost, compliance gates | False positives | Override with evidence |

## Key Insight

Multi-agent collaboration works when each role has **independent error distributions** — if all roles share the same blind spots, collaboration degenerates to consensus hallucination.
