# Hourly Public Metadata Update - 2026-05-30 13:16 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `dotnet/skills`, `datalayer/agent-skills`, `block/agent-skills`, `Corbell-AI/evalmonkey`, `nomic-ai/aec-bench`, `google/ax` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `dotnet/skills` | Cross-IDE .NET Agent Skills Runtime Pack | `raw-github/dotnet_skills.md` | `site/public/reports/projects/324-dotnet-skills-runtime-pack.md` |
| `datalayer/agent-skills` | Composable Agent Skills Pack and Runtime Recipes | `raw-github/datalayer_agent-skills.md` | `site/public/reports/projects/325-datalayer-agent-skills-pack.md` |
| `block/agent-skills` | Enterprise Agent Skills and Playbook Library | `raw-github/block_agent-skills.md` | `site/public/reports/projects/326-block-agent-skills-enterprise-playbook.md` |
| `Corbell-AI/evalmonkey` | Agent Evaluation Harness and Regression Pipeline | `raw-github/corbell-ai_evalmonkey.md` | `site/public/reports/projects/327-evalmonkey-agent-evaluation-harness.md` |
| `nomic-ai/aec-bench` | Agentic Context Engineering Benchmark Suite | `raw-github/nomic-ai_aec-bench.md` | `site/public/reports/projects/328-aec-bench-agentic-context-benchmark.md` |
| `google/ax` | Production Agent Runtime and Context Engineering Framework | `raw-github/google_ax.md` | `site/public/reports/projects/329-google-ax-agent-runtime.md` |

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
