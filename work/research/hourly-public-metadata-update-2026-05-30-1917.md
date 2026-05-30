# Hourly Public Metadata Update - 2026-05-30 19:17 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `aiming-lab/AutoHarness`, `OWASP/www-project-agent-memory-guard`, `addyosmani/agent-skills`, `zocomputer/skills`, `QF-Bench/QuantitativeFinance-Bench`, `zikuicai/aegisllm` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `aiming-lab/AutoHarness` | Automated Agent Harness Engineering Framework | `raw-github/aiming-lab_autoharness.md` | `site/public/reports/projects/330-autoharness-agent-harness-engineering-framework.md` |
| `OWASP/www-project-agent-memory-guard` | Agent Memory Poisoning Defense and Guard Layer | `raw-github/owasp_www-project-agent-memory-guard.md` | `site/public/reports/projects/331-owasp-agent-memory-guard-defense-layer.md` |
| `addyosmani/agent-skills` | Production Engineering Skill Pack for Coding Agents | `raw-github/addyosmani_agent-skills.md` | `site/public/reports/projects/332-addy-agent-skills-production-pack.md` |
| `zocomputer/skills` | Open Agent Skills Registry and Distribution Layer | `raw-github/zocomputer_skills.md` | `site/public/reports/projects/333-zo-skills-registry.md` |
| `QF-Bench/QuantitativeFinance-Bench` | State-Aware Financial Agent Benchmark Suite | `raw-github/qf-bench_quantitativefinance-bench.md` | `site/public/reports/projects/334-qf-bench-financial-agent-evaluation.md` |
| `zikuicai/aegisllm` | Self-Reflective Multi-Agent Defense System | `raw-github/zikuicai_aegisllm.md` | `site/public/reports/projects/335-aegisllm-self-reflective-defense-agents.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; stale index state was observed during this run.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
