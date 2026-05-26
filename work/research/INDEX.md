# work/research/ Index

> Generated: 2026-05-26 by Scribe (L6). Updated as L1-L5 agents produce artifacts.

## Rule

Agent-generated work products: metadata update logs, research follow-ups, mechanism deepdives, and intermediate scripts. Permanent analysis belongs in `analysis/` or `research/`.

## Research Artifacts (Non-Hourly)

### Currently On Disk (Verified 11:13)

| File | Date | Source Task | Description |
|---|---|---|---|
| `mechanism-analysis-framework.md` | 2026-05-26 | L1 Framework | Five-dimension mechanism analysis framework with Mermaid DAG; derived from survey/ Ch1-Ch8 + paper-drafts/ Ch1-Ch8 |
| `social-mechanism-insights.md` | 2026-05-26 | L3 Social/Blogs | Deep-dive into raw-social (645md+650json) + raw-blogs (655md+653json) evolution mechanisms; 40+ files read, cross-validated |
| `paper-undercoverage-followup-2026-05-25-1345.md` | 2026-05-25 | Manual follow-up | Investigation into paper coverage gaps |

### Created But Disappeared (Audit Trail)

| File | Created | Disappeared | Notes |
|---|---|---|---|
| `essential-classification.md` | ~10:22 | ~10:40 | L3 classification taxonomy; observed on disk at 10:22, gone by 10:31 |
| `l6-index-audit-2026-05-26.md` | ~10:31 | ~10:40 | Scribe audit report; created successfully, gone by next check |
| `ch8-mechanism-feasibility-analysis.md` | claimed | 10:56 | Reviewer confirmed not on disk; L5 rework needed |
| `unified-essential-classification.md` | claimed | 10:56 | Reviewer confirmed not on disk; L5 rework needed |

**Root cause:** Concurrent agent file operations in `work/research/`. Agents create files, but they may be overwritten or removed by other agents or automated processes before persisting.

## Hourly Metadata Update Logs

Automated metadata refresh logs from scheduled agents.

| Date Range | Files |
|---|---:|
| 2026-05-24 | 8 logs + 1 daily summary |
| 2026-05-25 | 19 logs + 3 scripts |
| 2026-05-26 | 9 logs + 3 scripts (through 10:04) |

## Evidence Chain

- `social-mechanism-insights.md`: STRONG — cites raw-social 645md+650json, raw-blogs 655md+653json, 40+ files read, cross-validated against raw-papers (128) and paper-reviews (137)
- `essential-classification.md` (vanished): Was STRONG before disappearance — cited 16 analysis/ files + 8 raw-github projects
- Hourly logs: Source = automated agent scheduler; Destination = `output/` timestamp reports

## Unindexed Gaps (Requires Generator Fix)

1. Index generator (`scripts/generate_project_indexes.mjs`) does not scan `work/research/`
2. Generator overwrites manual index additions to `processed-index.md` and `work-index.md`
3. File persistence issue in `work/research/` — agents claim completion but files don't persist
