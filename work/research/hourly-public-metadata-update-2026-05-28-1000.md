# Hourly Public Metadata Update - 2026-05-28 10:00 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `openclaw/clawhub`, `VoltAgent/awesome-openclaw-skills`, `ZeroLu/awesome-openclaw`, `QuantClaw/QuantClaw`, `InternScience/Awesome-Scientific-Skills`, `TIGER-AI-Lab/ClawBench` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `openclaw/clawhub` | OpenClaw Package Catalog and Skill Distribution Hub | `raw-github/openclaw_clawhub.md` | `site/public/reports/projects/275-openclaw-clawhub-package-catalog.md` |
| `VoltAgent/awesome-openclaw-skills` | OpenClaw Skill and Agent Workflow Index | `raw-github/voltagent_awesome-openclaw-skills.md` | `site/public/reports/projects/276-awesome-openclaw-skills-curated-index.md` |
| `ZeroLu/awesome-openclaw` | OpenClaw Community Landscape and Resources | `raw-github/zerolu_awesome-openclaw.md` | `site/public/reports/projects/277-awesome-openclaw-community-landscape.md` |
| `QuantClaw/QuantClaw` | Quantitative Agent Harness Runtime | `raw-github/quantclaw_quantclaw.md` | `site/public/reports/projects/278-quantclaw-quantitative-agent-runtime.md` |
| `InternScience/Awesome-Scientific-Skills` | Scientific Agent Skill and Tooling Index | `raw-github/internscience_awesome-scientific-skills.md` | `site/public/reports/projects/279-awesome-scientific-skills-research-index.md` |
| `TIGER-AI-Lab/ClawBench` | Open-Ended Agent Benchmark Harness | `raw-github/tiger-ai-lab_clawbench.md` | `site/public/reports/projects/280-clawbench-open-ended-agent-benchmark.md` |

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
