# Hourly Public Metadata Update - 2026-06-12 14:14 +0800

## One Sentence

Re-verified the public GitHub metadata packet on 2026-06-12, corrected a corrupted classification row, and propagated the newer snapshot through raw, processed, Mermaid, analysis, and site surfaces.

## Three Sentences

This run revisited the 2026-06-09 refresh because several values were already stale by 2026-06-12 and one processed record was materially wrong: `DSAIL-Memory/EvoMemBench` had inherited Hermes Agent's star count. The current packet keeps `china-qijizhifeng/agentic-Harness-engineering`, `NousResearch/hermes-agent`, `openclaw/openclaw`, `obra/superpowers`, `rohitg00/agentmemory`, `pinchbench/skill`, and `EvoMap/awesome-agent-evolution` synchronized across raw captures, classification, model cards, public reports, site project data, and the Mermaid truth source. Freshness remains honest: all values are from public GitHub HTML observed on 2026-06-12, while shell GitHub API and `npx gitnexus` both remain blocked by DNS/network failures.

## Working Principle

Public GitHub repo pages -> `raw-github/*.md` -> `research/repo-classification.json` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/*.md` + `site/public/reports/projects/*.md` + `site/src/data/projects.ts` -> generated indexes and site build.

## Evidence Quality

- Public GitHub pages were observed through web access on 2026-06-12; no authenticated GitHub API freshness is claimed.
- `curl https://api.github.com/rate_limit` still fails with DNS resolution error in shell.
- `gh auth status` still reports the default `Shiyao-Huang` token is invalid.
- `npx gitnexus status` and `npx gitnexus query` both fail because `registry.npmjs.org` cannot be resolved in this workspace, so GitNexus is present in project instructions but not callable in this run.
- Public copy review gate remains incomplete because the required `3-5` reader/editor agents plus `3` academic agents were not actually executed in this session.

## Surface Repairs

- Refreshed raw captures and downstream cards/reports for harness engineering, Hermes Agent, OpenClaw, Superpowers, agentmemory, PinchBench, and EvoMap to a 2026-06-12 public-page snapshot.
- Corrected processed data corruption: `DSAIL-Memory/EvoMemBench` now keeps `0` stars, while `nousresearch/hermes-agent` no longer carries a spurious `0`.
- Updated the Mermaid truth source so the working principle and current blockers match the real state of this iteration.

## Validation Commands

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` if paper-facing outputs change in this run
