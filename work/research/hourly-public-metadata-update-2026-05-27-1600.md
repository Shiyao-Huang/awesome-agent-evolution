# Hourly Public Metadata Update - 2026-05-27 16:00 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `OpenBMB/ClawXMemory`, `UnicomAI/hexagent`, `evalops/agent-harness`, `harness/harness-evals`, `browser-use/browser-harness`, `junminhong/awesome-agent-skills` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `OpenBMB/ClawXMemory` | OpenClaw Long-Term Memory Module | `raw-github/openbmb_clawxmemory.md` | `site/public/reports/projects/257-clawxmemory-openclaw-long-term-memory-module.md` |
| `UnicomAI/hexagent` | LLM Computer Harness Runtime | `raw-github/unicomai_hexagent.md` | `site/public/reports/projects/258-hexagent-agent-harness-runtime.md` |
| `evalops/agent-harness` | Cross-Provider Agent Harness Adapter | `raw-github/evalops_agent-harness.md` | `site/public/reports/projects/259-evalops-agent-harness-provider-adapter.md` |
| `harness/harness-evals` | Agent Reliability Evaluation Framework | `raw-github/harness_harness-evals.md` | `site/public/reports/projects/260-harness-evals-agent-reliability-benchmark.md` |
| `browser-use/browser-harness` | Self-Healing Browser Agent Harness | `raw-github/browser-use_browser-harness.md` | `site/public/reports/projects/261-browser-harness-self-healing-web-agent-runtime.md` |
| `junminhong/awesome-agent-skills` | Cross-Platform Agent Skill Index | `raw-github/junminhong_awesome-agent-skills.md` | `site/public/reports/projects/262-awesome-agent-skills-cross-platform-index.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for this iteration's captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/query` worked but default `gitnexus analyze` failed with `EPERM` on `/Users/copizzah/.gitnexus/registry.json`.
- Temporary HOME fallback (`HOME=/private/tmp/... npx gitnexus analyze --skip-git --index-only`) succeeded with 21,212 nodes / 24,066 edges, while FTS extension download remained blocked by network.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.

## Validation Commands For This Iteration

- `node scripts/generate_project_indexes.mjs`
- `python3 scripts/enforce_raw_timestamps.py`
- `node scripts/analyze_github_project_data.mjs`
- `(cd site && npm run build)`
- `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)`
