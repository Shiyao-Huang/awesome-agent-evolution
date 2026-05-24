# Paper Completion Ledger

Last updated: 2026-05-24

## One-Sentence Compression

The English survey draft now compiles with a GitHub project corpus analysis section, but it still needs final citation normalization, figure polishing, benchmark provenance tightening, and copy editing before public arXiv release.

## Current Draft State

| Component | Status | Evidence |
|---|---|---|
| Main manuscript wrapper | Fixed | `paper-drafts/main.tex` now assembles all draft chapters and appendix. |
| Citation compatibility | Fixed for local build | `paper-drafts/references-aliases.bib` covers citation keys already used by chapters. |
| GitHub project corpus | Fixed for current draft | `analysis/github-project-data-analysis.json`, `.md`, and `.tex` summarize raw captures, analyzed projects, evolution-related subsets, and timeline evidence. |
| Chapter coverage | Draft-complete | `ch1` through `ch8` plus appendix exist; local word counts show the English draft is substantial. |
| Project evidence | Fixed for website | All `site/src/data/projects.ts` report paths now resolve under `site/public/reports/projects/`. |
| Website paper surface | Fixed | `/paper/` page exposes the manuscript state, chapters, and remaining gates for SEO/readers. |
| Final publication quality | Not done | Needs human-level abstract polish, figure captions, reference dedupe, and benchmark source audit. |

## Chapter Status

| Chapter | File | Role | Status |
|---|---|---|---|
| 1 | `ch1-intro.tex` | Definition, scope, contribution, boundaries | Draft-complete; needs final intro compression. |
| 2 | `ch2-taxonomy.tex` | Five evolution loops and formal taxonomy | Draft-complete; needs figure/table alignment. |
| 3 | `ch3-methods.tex` | Inference-time and training-time self-improvement | Draft-complete; needs benchmark citation pass. |
| 4 | `ch4-evolutionary.tex` | Code evolution, algorithm discovery, agent self-evolution | Draft-complete; needs project evidence normalization. |
| 5 | `ch5-evaluation.tex` | Benchmarks, process metrics, disclosure standard | Draft-complete; highest priority for evidence audit. |
| 6 | `ch6-frameworks.tex` | Agent frameworks, infrastructure, and GitHub project corpus | Draft-complete; now includes project sampling funnel and timeline, still needs prose tightening. |
| 7 | `ch7-painpoints.tex` | User pain points and production gaps | Draft-complete; needs Mom Test source appendix cleanup. |
| 8 | `ch8-future.tex` | Open problems, roadmap, conclusion | Draft-complete; needs final argument tightening. |
| Appendix | `appendix.tex` | Project tables, paper index, benchmarks, star quality | Draft-complete; needs generated table refresh from current site data. |

## Remaining Gates Before Public Paper Release

1. Citation gate: merge aliases back into canonical BibTeX keys and remove duplicate placeholder entries.
2. Evidence gate: every benchmark number needs a source pointer to paper review, raw paper, or official paper.
3. Figure gate: convert Mermaid/CSV figure assets into publication-grade figures.
4. Consistency gate: unify terminology across README, site, paper, and survey LaTeX.
5. Release gate: compile PDF, inspect warnings, and produce arXiv source bundle.

## Work Priority

The next best unit of work is Chapter 5 + Appendix benchmark provenance, because benchmark evidence decides whether the paper is a real survey or just a narrative.
