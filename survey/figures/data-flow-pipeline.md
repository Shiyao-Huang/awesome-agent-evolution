# 数据流管线图

- generated_at: 2026-05-25
- source: `analysis/pipeline-audit.md`
- layer_counts: raw-github 490 / raw-papers 128 / raw-social 612 / raw-blogs 650 / projects 204 / analysis 16 / paper-drafts 22 / site 207

```mermaid
flowchart LR
    subgraph RAW["Raw Layer"]
        RG["raw-github<br/>490 captures"]
        RP["raw-papers<br/>128 unique"]
        RS["raw-social<br/>612 entries"]
        RB["raw-blogs<br/>650 entries"]
        RSR["raw-social-rank<br/>228 seed"]
    end

    subgraph PROC["Processed Layer"]
        AN["analysis/<br/>16 cross-analysis"]
        RE["research/<br/>38 profiles & audits"]
        PR["paper-reviews/<br/>137 reviews"]
    end

    subgraph WORK["Work Layer"]
        PJ["projects/<br/>204 model cards"]
        PD["paper-drafts/<br/>8 chapters + PDF"]
        SV["survey/<br/>8 chapters CN"]
    end

    subgraph RESULT["Results Layer"]
        SITE["site/<br/>207 pages"]
        RPT["reports/<br/>1 file ⚠️"]
        OUT["output/<br/>8 indexes"]
    end

    RG -->|"29.8%"| PJ
    RG --> AN
    RG --> OUT
    RP -->|"90.4%"| PR
    RP --> PD
    RS --> RE
    RB -.->|"low coverage"| RE
    PJ --> SITE
    PD --> SITE
    AN --> SITE

    style RG fill:#ffd700,stroke:#333
    style RB fill:#ff6b6b,stroke:#333
    style RS fill:#ffa500,stroke:#333
    style RPT fill:#ff6b6b,stroke:#333
    style SITE fill:#90ee90,stroke:#333
    style PD fill:#90ee90,stroke:#333
```

## Coverage Summary

| Path | Coverage | Status |
|------|---------|--------|
| raw-github → projects | 29.8% (146/490) | HIGH GAP |
| raw-papers → paper-reviews | 90.4% (113/128) | OK |
| raw-social → research | <5% | LOW |
| raw-blogs → research | 0% | NONE |
| projects → site | 207 pages | OK |
| paper-drafts → PDF | Built today | OK |
