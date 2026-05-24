---
repo: openclaw/clawbench
url: https://github.com/openclaw/clawbench
content_timestamp: 2026-04-20
time_slice: 2026-04
timestamp_source: web_github_page_open_2026-05-24
collected_at: 2026-05-24T15:00:00+08:00
source: github_web
---

## GitHub - openclaw/clawbench

**Source**: https://github.com/openclaw/clawbench

**Collection note**: Captured through browser-accessible GitHub page text because local shell DNS resolution for `api.github.com` failed during this automation run.

## Public metadata snapshot

- Repository: `openclaw/clawbench`
- Stars observed: 97
- Forks observed: 18
- Commits observed: 114
- License observed: MIT
- Visible paths: `.agents/skills/crabbox`, `.github`, `baselines`, `clawbench`, `docs`, `profiles`, `scripts`, `tasks-domain`, `tasks-public`, `tests`, `CLAWBENCH_V0_4_SPEC.md`, `PARTNER_TRACE_SPEC.md`, `README.md`, `SPACE_README.md`, `app.py`, `docker-compose.yml`, `pyproject.toml`

## Raw README signals

# ClawBench

Rigorous agent evaluation. Signal-curated tasks. Dynamical-systems diagnostics.

What's new in Core v1 (2026-04-20): a reproducibility-first public release informed by an 8-model, 1,080-run sweep audit and five methodology layers.

Innovation signals:

- Signal-curated task set: 19 tasks selected from a 40-task dev pool.
- Variance decomposition: seed-noise vs capability-signal ratio per task.
- Dynamical-systems diagnostics: trapped, limit-cycle, diffusive, mixed regimes.
- Constraint Index C(q): principled task weighting via participation ratio, entropy, and Bayes prediction.
- Reproducibility-first infrastructure: per-container state isolation and rejudge pipeline.

Problem framing signals:

- Scores alone can hide whether a model actually verified work.
- Benchmark users need to know whether score gaps are signal or noise.
- The benchmark distinguishes model, plugin stack, and harness version.

Scoring signals:

- Scores from execution traces, not just final output.
- Completion, trajectory, behavior, and judge advisory signals are separated.
- Deterministic checks gate judge contribution.
