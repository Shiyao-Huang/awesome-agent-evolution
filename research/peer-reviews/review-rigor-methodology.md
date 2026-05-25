---
title: "arXiv 同行评审：学术严谨性 & 方法论审查"
reviewer: "QA Engineer — Rigor & Methodology Perspective"
paper: "Self-Evolving AI Agents: A Survey of Feedback-Driven Generation, Evaluation, Memory, and Self-Modification"
date: 2026-05-25
scope: "paper-drafts/main.tex, README.md, survey/, research/"
verdict: "Major Revision"
---

# arXiv Peer Review: Rigor & Methodology

**Paper**: Self-Evolving AI Agents: A Survey of Feedback-Driven Generation, Evaluation, Memory, and Self-Modification
**Reviewer**: QA Engineer — Rigor & Methodology Perspective
**Date**: 2026-05-25

---

## Summary

This survey proposes a unified "Five Evolution Loops" framework for understanding AI agent self-evolution across LLM self-improvement, evolutionary computation, AutoML, and agent architecture search. The central thesis — that self-evolution should be evaluated as a controlled systems process with explicit audit trails — is timely and well-motivated. However, the paper suffers from a critical citation gap (4 of 8 chapters contain zero formal `\cite{}` references), lacks systematic review methodology disclosure, and makes numerous quantitative claims without statistical rigor. The conceptual contributions are strong but the evidentiary foundation is uneven and often incomplete.

---

## Major Concerns

### M1. Citation Crisis: 4 of 8 Core Chapters Have Zero Formal References

This is the most critical methodological flaw. Automated analysis of the LaTeX source confirms:

| Chapter | `\cite{}` count | Status |
|---|---:|---|
| ch1-intro | 56 | Cited |
| ch2-taxonomy | **0** | **No citations** |
| ch3-methods | **0** | **No citations** |
| ch4-evolutionary | 9 | Sparse |
| ch5-evaluation | 8 | Sparse |
| ch6-frameworks | **0** | **No citations** |
| ch7-painpoints | **0** | **No citations** |
| ch8-future | 1 | Near-zero |

**Total**: 74 `\cite{}` calls for a survey claiming 108 papers. The core methodology chapters (ch2: taxonomy, ch3: methods) and the empirical chapters (ch6: frameworks, ch7: pain points) are entirely devoid of formal academic citations. This is unprecedented for a survey paper. When the text discusses specific systems and their results (e.g., "Reflexion's HumanEval 91.0%", "DGM SWE-Bench 20% → 50%"), these are attributed to "the local research corpus" or "the local summary" rather than `\cite{}` references. This breaks the evidence chain entirely — readers cannot verify any claim without additional research.

**Impact**: A survey paper without citations in its core chapters fails the minimum standard for academic reproducibility and verifiability.

### M2. No Systematic Review Methodology Disclosure

The paper does not describe:
- **Inclusion/exclusion criteria**: How were the 108 papers selected? What keywords, databases, date ranges were used?
- **Search strategy**: No search strings, database list, or systematic search protocol.
- **PRISMA flow diagram**: Despite an internal methodology guide (`research/survey-methodology-guide.md`) explicitly recommending PRISMA 2020 compliance, the paper contains no selection flowchart.
- **Independent dual review**: No mention of inter-rater reliability or dual-coding.
- **Bias assessment**: The methodology guide acknowledges publication bias, language bias, survivorship bias, and confirmation bias, but the paper itself does not describe mitigation strategies.

The project's internal methodology guide documents these gaps explicitly: "Protocol pre-registration: NOT registered", "Independent dual review: NOT done", "PRISMA Flow Diagram: MISSING", "Bias assessment: MISSING". A survey claiming to provide "evidence-driven analysis" must disclose its own methodology.

### M3. Quantitative Claims Without Statistical Rigor

Throughout the paper, performance numbers are reported as point estimates without any variance information:

- "DGM SWE-bench 20.0% → 50.0%" — Which SWE-bench variant? Over how many seeds?
- "Self-Refine improves diverse tasks by roughly 20% on average" — Arithmetic mean of percentage-point deltas across incomparable metrics is not a valid aggregate statistic.
- "Reflexion HumanEval 91.0% pass@1" — Under what compute regime? How many attempts?
- "Voyager 3.3x more unique items" — Compared to what baseline? Over how many runs?

The paper's own Chapter 5 recommends reporting "confidence intervals over seeds and task samples" and "evaluator sensitivity analysis," yet applies none of these standards to its own reported numbers. No effect sizes, confidence intervals, standard deviations, or sample sizes are provided for any quantitative claim in the entire manuscript.

### M4. Taxonomy Not Empirically Validated

The "Five Evolution Loops" framework is presented as the paper's central organizing contribution. However:
- No empirical validation shows that five loops cluster existing systems better than three, four, or seven loops.
- No inter-rater agreement is reported for system-to-loop assignments.
- Many systems span multiple loops, yet the comparison table (ch2 §371-418) forces each into a "primary loop type," creating false precision.
- The chapter introduces three different classification systems (θ/m/y update-target taxonomy, feedback-strength ladder, POSU decomposition) without clarifying their relationships.

A taxonomy in a survey paper should be derived from systematic coding, not presented as a priori truth.

### M5. Conflicting Formalisms Between Chapters

Chapter 1 defines a formal system with state $S_t$, variable components $C_t$, feedback $F_t$, modification $\Delta_t$, and acceptance rule (Eqs. 1-8). Chapter 2 introduces a different formalization with state $z_t$, candidate generation $g$, evaluator $e$, selection $s$, and update $u$ (Eqs. 1-2). These use different symbols, different decomposition granularity, and different structure. The relationship between the two formalisms is never clarified. A survey proposing a "unified framework" should itself be unified in notation.

### M6. Selection Bias and Survivorship Bias

The survey predominantly discusses successful self-evolution approaches. Despite the methodology guide's explicit recommendation to include "failure cases and negative results," the paper does not systematically discuss:
- Approaches that were tried and failed (e.g., self-play methods that collapsed, evolutionary approaches that plateaued).
- Negative results from the surveyed papers (e.g., SPIN's regression on BBH sports-understanding 96.0 → 94.4).
- The gap between claimed self-evolution and actual capability (the cross-analysis.md notes that 53.7% of blogs labeled "self-evolving" are merely prompt rotation).

The project's own research/repo-classification.md reveals that 69.3% of repos lack classification and 71.6% of papers lack deep review. These coverage gaps are not acknowledged in the paper.

### M7. Evidence Attribution via "Local Corpus" Breaks Verifiability

Many benchmark results are attributed to "the local research corpus" or "the local summary" rather than to specific `\cite{}` references. Examples:
- Self-Refine's seven-task results → "the research corpus"
- Reflexion's HumanEval 91.0% → "the local research corpus"
- RISE's GSM8K numbers → "the local corpus reports"
- SelfEvolve's DS-1000/HumanEval → "the local corpus reports"

"The local research corpus" is not defined in the paper. This is an opaque attribution layer that prevents independent verification. Every numerical claim in a survey must be traceable to a specific cited source.

### M8. Star-Quality Composite Score Unvalidated (Ch.5)

The 12-project quality ranking uses equal 20% weights across five GitHub-derived metrics but provides:
- No calibration against external quality signals (expert surveys, deployment counts, reproducibility audits).
- No sensitivity analysis under alternative weightings.
- No justification for the five chosen metrics or the equal weighting scheme.

The provocative claim that "raw stars can invert quality" (AutoGPT 175k stars = 28/100) is intuitively plausible but the scoring formula itself is unvalidated. A composite metric in a survey paper must demonstrate that it measures what it claims to measure.

### M9. Original Architecture Proposal Embedded in Survey (Ch.6)

Sections 6.8-6.9 propose a novel "Self-Evolve platform" architecture with six components (evolution control plane, variant registry, mutation engine, evaluation engine, lineage ledger, governance policy). This is an original research contribution embedded in a survey chapter. The proposed architecture has not been evaluated by the rigorous standards the paper demands of others in Chapter 5. Survey papers should clearly separate "what exists in the literature" from "what we propose as future work."

### M10. No Comparison with Prior Surveys

The paper does not cite or compare against any prior related surveys:
- Neural architecture search surveys (Elsken et al. 2019)
- AutoML surveys (He et al. 2021)
- LLM agent surveys (Wang et al. 2024, Masterman et al. 2024)
- LLM self-improvement surveys (Pan et al. 2024)
- Evolutionary computation surveys

A survey paper must explicitly position itself against existing surveys and articulate its unique contribution.

---

## Minor Concerns

### m1. Author Attribution "aha team" Not Standard Academic Practice

The author field lists "aha team" rather than individual authors with institutional affiliations. This is non-standard for arXiv submission.

### m2. Reference Count vs. Claimed Coverage (108 Claimed, ~55-60 Actual)

92 BibTeX entries (39 in references.bib + 53 aliases) but after deduplication only ~55-60 unique works. The appendix claims "108 detailed paper references across 2022-2026" (Appendix B) — this claim is unsupported by the actual bibliography. Either expand to 108 entries or revise the claim to match reality.

### m3. Evidence Grading System Not Applied

The internal methodology guide defines a 5-level evidence grading system (A: strong, B: moderate, C: weak, D: expert opinion, E: speculation). This system is not applied in the paper itself, despite being specifically designed for it.

### m4. Writing Quality Inconsistency

Chapter 1 is exceptionally well-written with proper academic prose and citations. Chapters 2-8 vary dramatically in quality, tone, and citation density. The inconsistency suggests different sections were written by different contributors without editorial unification.

### m5. "CodeEvolve" Is Not a Standard Literature Name

ch2 §131 and §399 reference "CodeEvolve" as if it were a known system, but no citation or paper attribution is provided. If this is a generic category, it should be clarified.

### m6. Algorithms 1-3 Are Too Generic

The three algorithm boxes (evolution loop, search, MAP-Elites) are high-level descriptions that contain nothing specific to LLM-driven self-evolution. They provide no information beyond what a reader familiar with evolutionary computation already knows.

### m7. Pass@k Regime Conflation in Benchmark Tables

Table 3 presents numbers from vastly different evaluation protocols (different episode counts, feedback channels, randomization) side-by-side without normalization. The paper discusses this problem in extended notes but does not apply the proposed notation in its own tables.

### m8. Chinese Literature Coverage Is Zero (0% vs Required >= 15%)

Per project requirements, Chinese literature should constitute >= 15% of references. Automated analysis of both `.bib` files confirms **zero Chinese-language publications** in the bibliography. Ch7-painpoints.tex references Chinese tech communities (Zhihu, CSDN, Juejin) as evidence sources but none are formally cited. At ~55-60 unique references, the paper needs approximately 8-10 Chinese-language citations (e.g., CAAI/CCF survey papers, Chinese evolutionary computation textbooks, Chinese-language AI agent papers) to meet the threshold.

### m9. Appendix Quality Varies

The appendix contains project evidence tables that appear to be auto-generated from data analysis rather than expert-curated. Some entries lack context (e.g., "Quality score" column in A.2 without methodology explanation).

### m10. DGM SWE-Bench Variant Unspecified

The "20.0% → 50.0%" claim does not specify whether this is SWE-Bench, SWE-Bench Lite, or SWE-Bench Verified — variants with very different difficulty levels.

---

## Questions for Authors

1. **Q1**: What is the systematic inclusion/exclusion protocol for the 108 papers? Can you provide a PRISMA flow diagram?
2. **Q2**: Why do ch2, ch3, ch6, ch7 contain zero `\cite{}` references? Is this a drafting artifact or intentional?
3. **Q3**: How was the Five Evolution Loops taxonomy validated? What evidence supports five loops over alternative groupings?
4. **Q4**: For every benchmark result reported, can you specify: (a) the exact source paper, (b) the evaluation variant, (c) the number of seeds/runs, (d) whether confidence intervals are available?
5. **Q5**: How does this survey differentiate from existing LLM self-improvement surveys (e.g., Pan et al. 2024)?
6. **Q6**: What is the relationship between the ch1 formalism (Eqs. 1-8) and the ch2 formalism (Eqs. 1-2)? Which is canonical?
7. **Q7**: Has the star-quality composite score (Ch.5 Eq.1) been validated against any external quality signal?
8. **Q8**: What is the provenance of numbers attributed to "the local research corpus"? Can these be replaced with specific `\cite{}` references?

---

## Recommendation

**Major Revision**

The paper's conceptual contributions — the Five Evolution Loops framework, the emphasis on evaluation as a systems process, and the cross-domain unification — are valuable and timely. The writing quality in Chapter 1 demonstrates the authors are capable of rigorous academic prose. However, the paper currently falls below the minimum standard for an arXiv survey in three critical areas:

1. **Citations**: 4 of 8 chapters have zero formal references. This must be fixed before any form of publication.
2. **Methodology**: No systematic review protocol is disclosed (inclusion criteria, search strategy, PRISMA flow, bias assessment).
3. **Statistical rigor**: All quantitative claims are point estimates without variance information, confidence intervals, or sample sizes.

**Required revisions for acceptance**:
- Add `\cite{}` references to all 8 chapters (minimum 10 citations per chapter for a survey).
- Add a methodology section describing paper selection protocol with PRISMA flow diagram.
- Add error bars, confidence intervals, or explicit "point estimate without variance" flags to all quantitative claims.
- Validate or qualify the Five Evolution Loops taxonomy with inter-rater agreement or empirical clustering evidence.
- Unify formal notation across ch1 and ch2.
- Remove or clearly separate the original architecture proposal (Ch.6 §§6.8-6.9) from the survey content.
- Add explicit comparison with at least 3 prior related surveys.

---

## Evidence Sources

This review was produced by cross-referencing:
- `paper-drafts/main.tex` and all chapter files (ch1-ch8, appendix-en.tex)
- `paper-drafts/references.bib` and `references-aliases.bib`
- `research/survey-methodology-guide.md` (internal methodology standards)
- `research/cross-analysis.md` (data coverage audit)
- `research/repo-classification.md` (repo classification data)
- `research/self-evolution-taxonomy.md` (taxonomy analysis)
- `research/formal-framework-agent-evolution.md` (formal framework)
- Automated citation density analysis via `grep -c '\\cite{' paper-drafts/ch*.tex`
