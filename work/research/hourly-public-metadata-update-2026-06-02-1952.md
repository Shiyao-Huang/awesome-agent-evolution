# Hourly Public Metadata Update - 2026-06-02 19:52 +0800

## One Sentence

This iteration repaired the public evidence chain for three high-priority GitHub rows: `pinchbench/skill`, `vectorize-io/agent-memory-benchmark`, and `EvoMap/awesome-agent-evolution`.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results loop, with every GitHub metadata repair also updating README/site/index-facing surfaces. This pass refreshed the raw captures from current public GitHub pages, created dual-chain deep reports, repaired the missing `PinchBench Skill` project card, and promoted `AMB` plus `EvoMap awesome` into public project/site coverage. Freshness is explicit: public GitHub pages were observed through web access, while shell `curl` and `gh` still failed to reach `api.github.com`.

## Added Or Repaired Targets

| Repo | Layer role | Raw capture | Deep report | Public report |
|---|---|---|---|---|
| `pinchbench/skill` | skill + benchmark evaluator | `raw-github/pinchbench_skill.md` | `analysis/frontier-projects/pinchbench-skill-dual-chain.md` | `site/public/reports/projects/51-pinchbench-skill.md` |
| `vectorize-io/agent-memory-benchmark` | memory benchmark evaluator | `raw-github/vectorize-io_agent-memory-benchmark.md` | `analysis/frontier-projects/vectorize-io-agent-memory-benchmark-dual-chain.md` | `site/public/reports/projects/77-agent-memory-benchmark.md` |
| `EvoMap/awesome-agent-evolution` | external awesome-list taxonomy mirror | `raw-github/evomap_awesome-agent-evolution.md` | `analysis/frontier-projects/evomap-awesome-agent-evolution-dual-chain.md` | `site/public/reports/projects/394-evomap-awesome-agent-evolution.md` |

## Working Principle

Public GitHub page evidence -> `raw-github/*.md` refresh -> `research/repo-classification.*` row updates -> `analysis/frontier-projects/*-dual-chain.md` -> `projects/*.md` and `site/public/reports/projects/*.md` -> `site/src/data/projects.ts` / curated frontier -> README/i18n -> indexes, queue rebuilds, and Astro site build.

## Evidence Quality

- `curl https://api.github.com/repos/...` failed with `Could not resolve host: api.github.com`.
- `gh repo view ...` failed with `error connecting to api.github.com`.
- `npx gitnexus status` succeeded and reported the local index was up to date at commit `73a3e96`.
- No benchmark run, leaderboard upload, or local repo clone succeeded in this pass; all three deep reads are public-page driven.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.
