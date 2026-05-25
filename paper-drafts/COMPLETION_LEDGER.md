# Paper Completion Ledger

Last updated: 2026-05-25

## One-Sentence Compression

The English survey draft is now the arXiv-facing manuscript entry, with an English-only appendix and no local system-font dependency; it still needs final citation normalization, benchmark provenance tightening, figure polish, and an arXiv source bundle before public release.

## Current Draft State

| Component | Status | Evidence |
|---|---|---|
| Main manuscript wrapper | Fixed for arXiv-facing English build | `paper-drafts/main.tex` now assembles the English chapters and `appendix-en.tex`, and avoids local system-font paths. |
| Citation compatibility | Fixed for local build | `paper-drafts/references-aliases.bib` covers citation keys already used by chapters. |
| GitHub project corpus | Fixed for current draft | `analysis/github-project-data-analysis.json` and `.md` summarize the full processed corpus; `paper-drafts/github-project-data-analysis-en.tex` is the English arXiv-facing LaTeX snapshot. |
| Chapter coverage | Draft-complete | `ch1` through `ch8` plus English appendix exist; local word counts show the English draft is substantial. |
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
| English appendix | `appendix-en.tex` | Project tables, paper index, benchmarks, star quality, release gates | Draft-complete for English arXiv build; needs generated table refresh from current site data. |
| Chinese companion appendix | `appendix.tex` | Chinese project tables, paper index, benchmarks, star quality | Preserved as bilingual companion material; not included by the English arXiv main file. |

## Remaining Gates Before Public Paper Release

1. Citation gate: merge aliases back into canonical BibTeX keys and remove duplicate placeholder entries.
2. Evidence gate: every benchmark number needs a source pointer to paper review, raw paper, or official paper.
3. Figure gate: convert Mermaid/CSV figure assets into publication-grade figures.
4. Consistency gate: unify terminology across README, site, paper, and survey LaTeX.
5. Release gate: compile PDF, inspect warnings, verify English-only included sources, and produce arXiv source bundle.

## Work Priority

The next best unit of work is Chapter 5 + Appendix benchmark provenance, because benchmark evidence decides whether the paper is a real survey or just a narrative.
