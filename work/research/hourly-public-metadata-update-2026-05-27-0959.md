# Hourly Public Metadata Update - 2026-05-27 09:59 +0800

## One Sentence

Added 5 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `mem9-ai/mem9`, `CortexReach/memory-lancedb-pro`, `garrytan/gbrain`, `sunnja69/akephalos`, `InternScience/InternAgent` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `mem9-ai/mem9` | Persistent Memory Layer for Multi-Agent Runtimes | `raw-github/mem9-ai_mem9.md` | `site/public/reports/projects/252-mem9-persistent-memory-layer.md` |
| `CortexReach/memory-lancedb-pro` | OpenClaw Long-Term Memory Plugin | `raw-github/cortexreach_memory-lancedb-pro.md` | `site/public/reports/projects/253-memory-lancedb-pro-openclaw-memory-assistant.md` |
| `garrytan/gbrain` | Agent Company Brain and Memory OS | `raw-github/garrytan_gbrain.md` | `site/public/reports/projects/254-gbrain-agent-company-brain.md` |
| `sunnja69/akephalos` | Local-First Agent Passport Memory Bundle | `raw-github/sunnja69_akephalos.md` | `site/public/reports/projects/255-akephalos-local-agent-passport.md` |
| `InternScience/InternAgent` | Autonomous Scientific Discovery Agent Framework | `raw-github/internscience_internagent.md` | `site/public/reports/projects/256-internagent-autonomous-scientific-discovery.md` |

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
