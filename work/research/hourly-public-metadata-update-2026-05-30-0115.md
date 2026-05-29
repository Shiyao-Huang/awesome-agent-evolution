# Hourly Public Metadata Update - 2026-05-30 01:15 +0800

## One Sentence

Added 6 new web-observed repositories plus 1 refreshed existing repository, then propagated the delta through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `openai/swarm`, `microsoft/agent-lightning`, `seb1n/awesome-ai-agent-skills`, `openclaw/acpx`, `openclaw/crabbox`, `openclaw/openclaw-windows-node` and refreshes `cxxz/awesome-agent-memory` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added / Refreshed Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `openai/swarm` | Experimental Multi-Agent Orchestration Framework | `raw-github/openai_swarm.md` | `site/public/reports/projects/311-openai-swarm-multi-agent-orchestration.md` |
| `microsoft/agent-lightning` | Reinforcement-Learning Agent Training Framework | `raw-github/microsoft_agent-lightning.md` | `site/public/reports/projects/312-microsoft-agent-lightning-rl-agent-evolution.md` |
| `seb1n/awesome-ai-agent-skills` | Cross-Agent Skill Index and Install Guide | `raw-github/seb1n_awesome-ai-agent-skills.md` | `site/public/reports/projects/313-awesome-ai-agent-skills-cross-agent-skill-index.md` |
| `cxxz/awesome-agent-memory` (refreshed) | Agent Memory Resource Index | `raw-github/cxxz_awesome-agent-memory.md` | `site/public/reports/projects/209-cxxz-awesome-agent-memory.md` |
| `openclaw/acpx` | State-Preserving Agent Runtime and Session Handoff | `raw-github/openclaw_acpx.md` | `site/public/reports/projects/315-openclaw-acpx-stateful-agent-runtime.md` |
| `openclaw/crabbox` | Browser Agent Benchmark and Evaluation Harness | `raw-github/openclaw_crabbox.md` | `site/public/reports/projects/316-openclaw-crabbox-browser-agent-benchmark.md` |
| `openclaw/openclaw-windows-node` | Windows Companion Runtime for Agent Execution | `raw-github/openclaw_openclaw-windows-node.md` | `site/public/reports/projects/317-openclaw-windows-node-runner.md` |

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
