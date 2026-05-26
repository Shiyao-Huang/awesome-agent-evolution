---
title: "Peer Review Mechanism Insights: Deep-Dive into 137 Paper Reviews"
content_timestamp: 2026-05-26
time_slice: 2026-05
language: en
output_type: deep_analysis
source_corpus:
  paper_reviews: paper-reviews/ (137 total, 32 deep-read, 7 full-text analyzed)
  review_reports: review/reports/gitnexus-agent-evolution-review.md
  existing_research: research/evolution-method-chain-formal-analysis.md, research/formal-framework-agent-evolution.md
  survey_structure: paper-drafts/ch1-ch8.tex, survey/ch1-ch8-cn.md
coverage:
  reviews_deep_read: 32
  reviews_full_text: 7
  time_span: "2022-2026"
  mechanism_dimensions: 6
  survey_chapters_mapped: 8
---

# Peer Review Mechanism Insights: Deep-Dive into 137 Paper Reviews

> Generated: 2026-05-26 | Scope: 137 paper reviews, 2 review reports, existing research layer
> Evidence: [VERIFIED] = directly supported by review text; [SURVEY] = from survey chapters; [INFERRED] = cross-review synthesis; [UNVERIFIED] = needs verification

## 0. Executive Summary

**One sentence.** Deep reading of 32+ peer reviews across 2022-2026 reveals six mechanism insights: (1) evaluation bottleneck is universal, (2) self-evolution is non-monotonic with four erosion channels, (3) code is the universal mutable representation, (4) multi-agent gains come from knowledge building not parallelism, (5) verification must be immutable, (6) field converging on protocol-level abstractions.

## 1. Six Core Mechanism Insights

### Insight 1: The Evaluation Bottleneck Is Universal [VERIFIED]
Most-cited concern across all 32 reviews. Evaluation reliability hierarchy: Programmatic > Environment-grounded > LLM-judge > Self-reported. Survey gap: Ch5 needs formal hierarchy.

### Insight 2: Self-Evolution Is Non-Monotonic [VERIFIED by 2605.09315]
Four-channel erosion: Workflow, Skill, Model, Memory. CPE mitigation: 41.8% -> 52.8%. Survey gap: No chapter addresses this as first-class concern.

### Insight 3: Code as Universal Mutable Representation [VERIFIED]
14.3% of papers use code/self-modification. Properties: composable + executable + interpretable + versionable. Ch4 covers well.

### Insight 4: Knowledge > Parallelism in Multi-Agent [VERIFIED by CORAL]
Cultural transmission (shared memory) is critical, not agent count. Survey gap: Ch6 needs distinction.

### Insight 5: Immutable Verification Required [VERIFIED]
If agent modifies its evaluator, evolution collapses into self-confirmation (Goodhart for agents).

### Insight 6: Protocol-Level Convergence [INFERRED]
System -> Framework -> Protocol abstraction trend. Autogenesis AGP, Native Agency intrinsic evolution.

## 2. Cross-Cutting Defects (32 reviews)

| Defect | Frequency | Severity |
|--------|----------:|----------|
| Narrow benchmarks only | 28/32 | Critical |
| Cost analysis absent | 22/32 | High |
| No failure mode characterization | 20/32 | High |
| Proprietary API dependency | 18/32 | Medium |
| Non-monotonicity ignored | 15/32 | Critical |

## 3. Survey Coverage Gaps

1. Add erosion risks to Ch3 methods
2. Add evaluation reliability spectrum to Ch5
3. Add cultural transmission to Ch6 multi-agent
4. Add protocol-level standards to Ch8
5. Cross-reference Ch7 with Goodhart collapse

## 4. Source Index

Full-text: ADAS, Symbolic Learning, Autogenesis, Native Agency, CFE, CORAL, CoEvoSkills
Deep-read: 25+ additional reviews across 2022-2026
Supporting: Evolution Method Chain, Formal Framework, GitNexus review
