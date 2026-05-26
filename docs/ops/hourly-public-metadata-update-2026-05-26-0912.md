# Hourly Public Metadata Update - 2026-05-26 09:12 +0800

## One Sentence

Added five web-observed harness and benchmark repositories and propagated them through raw captures, classification, public reports, site data and Mermaid evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds CUGA, AutoR, Chorus, KWeaver Core and ClawProBench as evidence that the field is moving toward harness-level governance, artifact-backed research runs, AI-human task state, enterprise feedback loops and live OpenClaw evaluation. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `cuga-project/cuga-agent` | Enterprise Generalist Agent Harness | `raw-github/cuga-project_cuga-agent.md` | `site/public/reports/projects/237-cuga-agent-enterprise-agent-harness.md` |
| `AutoX-AI-Labs/AutoR` | Human-Centered Research Harness | `raw-github/autox-ai-labs_autor.md` | `site/public/reports/projects/238-autor-human-centered-research-harness.md` |
| `Chorus-AIDLC/Chorus` | AI-Human Collaboration Harness | `raw-github/chorus-aidlc_chorus.md` | `site/public/reports/projects/239-chorus-ai-human-collaboration-harness.md` |
| `kweaver-ai/kweaver-core` | Enterprise Decision Agent Harness | `raw-github/kweaver-ai_kweaver-core.md` | `site/public/reports/projects/240-kweaver-core-enterprise-decision-agent-harness.md` |
| `suyoumo/ClawProBench` | Live OpenClaw Benchmark Harness | `raw-github/suyoumo_clawprobench.md` | `site/public/reports/projects/241-clawprobench-live-openclaw-benchmark.md` |

## Working Principle

Browser-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> README/i18n -> `site/src/data/projects.ts` -> `site/public/reports/projects/` -> Astro site build.

## Evidence Quality

- Public GitHub pages were observed through browser-accessible GitHub text; no authenticated GitHub API freshness was claimed for these five captures.
- Shell GitHub API blocker: `curl -I --max-time 10 https://api.github.com/rate_limit` failed with DNS resolution error.
- Local `gh auth status` reports the default token for `Shiyao-Huang` is invalid.
- GitNexus is installed and `npx gitnexus status/list` worked; status was stale before this iteration.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source remains `.mermaid/current/graph.json`; `.mmd` and `.md` are rendered views.
