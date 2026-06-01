# GitHub Star History Database

> Work-layer database for converting GitHub stargazer history into current-momentum rankings. This exists because total stars are historical accumulation and should not dominate 2026 frontier ranking.

## Why this database exists

- Old repositories accumulate stars for years; total stars mostly measure historical adoption.
- The current research question needs 2026 new stars, recent growth, continuity, and evidence coverage.
- The database should be dataset-shaped from the beginning so it can be uploaded to Hugging Face after full pagination and QA.

## Tables

| File | Layer | Meaning |
|---|---|---|
| `repos.seed.jsonl` | work seed | Deduplicated repository seed list from `analysis/github-project-data-analysis.json`. |
| `repo-star-snapshots.jsonl` | raw-ish API snapshot | GitHub repo metadata snapshots: current stars, forks, created/pushed time, topics, license. |
| `star-events.jsonl` | raw-ish API event database | One stargazer event per row when GitHub returns `starred_at`. |
| `fetch-runs.jsonl` | ops/run log | Per-repo fetch status, page budget, errors, and partial/complete hints. |
| `monthly-repo-star-growth.csv` | processed aggregate | Repo-month new-star counts derived from event rows. |
| `../../analysis/github-star-growth-ranking.json` | processed aggregate | 2026/new-year growth ranking with coverage status, split into coverage-qualified rows and fetch backlog rows. |
| `../../analysis/github-star-growth-ranking.md` | processed explanation | Human-readable ranking and caveats. |

## Commands

Validate seed selection without network:

```bash
node scripts/build_github_star_history_db.mjs --dry-run --limit 10
```

Build aggregate files from existing local JSONL only:

```bash
node scripts/build_github_star_history_db.mjs --no-fetch --limit 50 --year 2026
```

Fetch a bounded sample from GitHub API:

```bash
GITHUB_TOKEN=... node scripts/build_github_star_history_db.mjs \
  --repo modelscope/AgentEvolver \
  --max-pages-per-repo 3 \
  --year 2026
```

Full runs should use a token, a high page budget, and should be split by lanes from `analysis/frontier-value-queue.md`.

## Hugging Face dataset plan

Recommended dataset name: `awesome-agent-evolution/github-star-history`.

Recommended split/table names:

- `repos`: seed metadata.
- `repo_snapshots`: current GitHub API snapshots.
- `star_events`: per-star historical events with `starred_at`.
- `monthly_growth`: repo-month aggregate.
- `growth_ranking`: year-specific ranking output.

Before upload, every published ranking row should have `coverage_status = complete_or_near_complete`; partial rows are useful for pipeline validation but not for public claims. Rows in `fetch_priority_backlog` are not growth evidence; they only decide where to spend the next API budget.

## Privacy boundary

The event database does not store public GitHub logins or numeric user ids. It stores a per-repo SHA-256 hash prefix plus `starred_at`, which is enough for deduplication and monthly growth analysis without turning the published dataset into a user list.
