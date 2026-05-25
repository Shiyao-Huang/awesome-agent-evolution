# Star Project Skills Ecosystem

> Source: `analysis/star-project-propagation.md` | 15 skills ecosystem projects with 10K+ stars

## Skills Ecosystem Three-Tier Architecture

```mermaid
graph TD
    subgraph "Tier 1: Standards (What is a skill?)"
        ASK["anthropics/skills<br/>140K★<br/>Claude Code spec"]
        OSK["openai/skills<br/>20.1K★<br/>Codex spec"]
        AK["agentskills<br/>19.3K★<br/>Open cross-agent standard"]
    end

    subgraph "Tier 2: Marketplaces (Where to find skills)"
        CSK["awesome-claude-skills<br/>61.5K★<br/>Community Claude index"]
        VAK["awesome-agent-skills<br/>22.9K★<br/>Cross-agent registry"]
        SAK["scientific-agent-skills<br/>25.5K★<br/>Science domain"]
        CXK["awesome-codex-skills<br/>11.5K★<br/>Codex automation"]
        HFK["huggingface/skills<br/>10.6K★<br/>HF ML domain"]
    end

    subgraph "Tier 3: Tooling & Harnesses (How to use skills)"
        VLK["vercel-labs/skills<br/>19.9K★<br/>sk CLI installer"]
        PW["planning-with-files<br/>22K★<br/>Planning skill"]
        SP["superpowers<br/>202K★<br/>TDD methodology"]
        ECC["ECC<br/>191K★<br/>Harness optimizer"]
        OC["openclaw<br/>374K★<br/>Runtime"]
        OHU["openhuman<br/>25.1K★<br/>Personal AI"]
    end

    %% Standards → Marketplaces
    ASK -->|spec consumed by| CSK
    OSK -->|spec consumed by| CXK
    AK -->|standard adopted by| VAK
    AK -->|standard adopted by| HFK

    %% Marketplaces → Tooling
    CSK -->|indexed by| VLK
    VAK -->|indexed by| VLK
    SAK -->|domain skills| ECC

    %% Tooling → Runtimes
    VLK -->|installs to| OC
    VLK -->|installs to| ECC
    SP -->|methodology| OC
    PW -->|planning| OC

    style ASK fill:#e67e22,color:#fff
    style OSK fill:#e67e22,color:#fff
    style AK fill:#e67e22,color:#fff
    style CSK fill:#3498db,color:#fff
    style VAK fill:#3498db,color:#fff
    style SAK fill:#3498db,color:#fff
    style VLK fill:#1abc9c,color:#fff
    style OC fill:#2ecc71,color:#fff
    style ECC fill:#2ecc71,color:#fff
```

## Skills-to-Evolution Gap

The skills ecosystem provides discovery and installation infrastructure, but **skill evolution** (mutation, selection, crossover of skills) is still emerging:

- **SkillClaw** (AMAP-ML): Collective skill evolution from agent sessions — <10K stars
- **EvoAgentX**: Self-evolving agent ecosystem with skill evolution — <10K stars
- **AutoResearchClaw**: PIVOT/REFINE loop with skill learning — 12.6K stars

The gap: skills are installable but not yet self-improving at the 10K+ star level.
