# Paper Undercoverage Follow-up - 2026-05-25 13:45 +0800

## One Sentence

The paper layer was thinner than the GitHub layer, so this pass added eight 2026 arXiv-backed raw paper captures around self-evolving benchmarks, memory, skills, software agents, group evolution, trajectory control, recommendation policy skills, and safety degradation.

## Added Raw Papers

| arXiv | Title | Why it matters |
|---|---|---|
| 2604.27264 | Self-Evolving Software Agents | Moves evolution into software agent goals, reasoning, and code. |
| 2605.18421 | EvoMemBench | Adds a memory benchmark explicitly framed from a self-evolving perspective. |
| 2604.08988 | SEA-Eval | Evaluates self-evolving agents beyond single episodic assessment. |
| 2602.04837 | Group-Evolving Agents | Treats groups and experience sharing as the evolutionary unit. |
| 2603.02766 | EvoSkill | Connects automated skill discovery to multi-agent self-improvement. |
| 2602.09877 | The Devil Behind Moltbook | Adds a safety-degradation counterweight to performance-only claims. |
| 2604.14972 | SAGER | Shows personalized policy skills evolving in recommendation agents. |
| 2602.05810 | Bifrost | Adds trajectory steering and context-gap control for self-improving agents. |

## Updated Layers

- Raw: `raw-papers/2604.27264.md`, `raw-papers/2605.18421.md`, `raw-papers/2604.08988.md`, `raw-papers/2602.04837.md`, `raw-papers/2603.02766.md`, `raw-papers/2602.09877.md`, `raw-papers/2604.14972.md`, `raw-papers/2602.05810.md`.
- Processed: `research/agent-self-evolution-papers-detailed.md`, `research/agent-self-evolution-papers-detailed-ZH.md`, `output/raw-papers-timestamp-index.*`.
- Work/results support: `survey/figures/*` refreshed through `scripts/generate_survey_figures.py`; README/README-ZH paper counts updated.

## Evidence And Limits

- Source quality: arXiv Atom API plus public arXiv abstract URLs.
- Count after this pass: raw paper timestamp records 192; detailed paper references 108.
- Review gap remains: no generator for `analysis/paper-review-coverage.md` was found, so matched/missing review counts were not fabricated. The eight new papers still need full review/model-card style notes before they should be treated as deeply analyzed.

## Validation

- `node scripts/generate_project_indexes.mjs` passed and regenerated `docs/indexes/*`.
- `python3 scripts/enforce_raw_timestamps.py` passed with `raw-papers md=192`, `md_ok=192`, `missing_count=0`.
- `node scripts/analyze_github_project_data.mjs` passed; GitHub side stayed at 482 raw captures and 200 analyzed projects.
- `python3 scripts/generate_survey_figures.py` passed with `paper_records_timestamp_index=192` and `paper_reviews=137`.
- `(cd site && npm run build)` passed, producing 281 static pages. Existing Astro `z` deprecation hints remain.
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` passed, producing `main.pdf` with 213 pages. Existing font/overfull/underfull warnings remain.

## GitNexus Evidence

- `npx gitnexus status` works and reports this repository as indexed, but stale: indexed at `2026-05-25 13:25:15`, indexed commit `0dbd6b7`, current commit `caba5b1`.
- `npx gitnexus list` works and shows 111 indexed repositories, including many `awesome-agent-evolution/repos/*` mirrors.
- Blocker: the GitNexus graph is not fresh enough to use as current metadata truth for this paper-corpus update unless `npx gitnexus analyze` is rerun.
