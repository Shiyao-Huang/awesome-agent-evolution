---
title: "QA Baseline Report — Survey Deep-Dive"
created: 2026-05-26T16:50:00+08:00
updated: 2026-05-26T16:50:00+08:00
author: gstack-qa-commander
qa_tier: Exhaustive (baseline)
scope: L6-A
---

# QA Baseline Report (v2 — recreated after daemon reset)

## Board State: 20 done, 1 in-progress, 6 todo

## Verified Deliverables on Disk

### work/research/ (18 substantive files, ~250KB total)
- mechanism-analysis-framework.md (19KB) — PASS
- sv-selfevolution-landscape.md (19KB) — PASS
- anthropic-talent-movement.md (8KB) — PASS
- ai-talent-flow-analysis.md (12KB) — PASS
- raw-github-mechanisms.md (26KB) — PASS
- papers-mechanism-analysis.md (31KB) — PASS
- china-self-evolution-teams.md (11KB) — NEW
- combined-talent-landscape.md (9KB) — NEW
- talent-capital-structure.md (11KB) — NEW
- material-ranking-framework.md (11KB) — NEW
- project-evolution-grading.md (20KB) — NEW
- projects-evolution-grading.md (12KB) — NEW
- review-mechanism-insights.md (3KB) — PASS
- review-mechanism-insights-enhanced.md (10KB) — NEW
- review-mechanism-insights-expanded.md (32KB) — NEW
- social-mechanism-insights.md (26KB) — PASS (existed before)

### work/wiki/ (LLM Wiki pattern implemented)
- index.md, log.md, schema.md, search-index.json
- concepts/, entities/, sources/, synthesis/, systems/ directories

### survey/latex/chapters/ (17 .tex files, recent modifications May 26)
- ch1-intro.tex (35KB, updated 12:08)
- ch2-theory.tex (56KB, updated 12:11)
- ch3-methods.tex (82KB, updated 12:11)
- ch4-systems.tex (108KB, updated 12:11)
- ch5-evaluation.tex (84KB, updated 10:17)
- ch6-industry.tex (31KB, updated 10:17)
- ch7-painpoints.tex (60KB)
- ch8-future.tex (33KB)
- Expanded versions also present

### site/public/visuals/ (14 SVG + 3 Mermaid)

## Remaining Baseline Issues

| Priority | Issue | Status |
|---|---|---|
| CRITICAL | Ch4 EN expanded content lost (712 bytes placeholder) | UNRESOLVED |
| HIGH | paper-drafts/zh/ 5 CN translations missing | UNRESOLVED |
| HIGH | COMPLETION_LEDGER 5 gates unfilled | UNRESOLVED |
| MEDIUM | PAPER_OUTLINE.md stale | UNRESOLVED |

## Daemon Reset Impact
- work/qa/ directory was created at 13:33 then reset by daemon
- Only SAFETY-RULES.md survived (committed at 13:34)
- QA-FRAMEWORK.md and v1 BASELINE-REPORT.md lost
- This file is the v2 recreation
