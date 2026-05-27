# Hourly Public Metadata Update - 2026-05-27 22:00 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `mindfold-ai/Trellis`, `Picrew/awesome-agent-harness`, `AutoJunjie/awesome-agent-harness`, `shareAI-lab/learn-claude-code`, `murataslan1/ai-agent-benchmark`, `holaboss-ai/holaOS` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `mindfold-ai/Trellis` | Cognitive Workspace Agent Runtime | `raw-github/mindfold-ai_trellis.md` | `site/public/reports/projects/263-trellis-cognitive-workspace-runtime.md` |
| `Picrew/awesome-agent-harness` | Awesome Agent Harness Landscape | `raw-github/picrew_awesome-agent-harness.md` | `site/public/reports/projects/264-awesome-agent-harness-picrew-curation.md` |
| `AutoJunjie/awesome-agent-harness` | Harness Curation and Reading Map | `raw-github/autojunjie_awesome-agent-harness.md` | `site/public/reports/projects/265-awesome-agent-harness-autojunjie-curation.md` |
| `shareAI-lab/learn-claude-code` | Claude Code Skill Learning Curriculum | `raw-github/shareai-lab_learn-claude-code.md` | `site/public/reports/projects/266-learn-claude-code-agent-curriculum.md` |
| `murataslan1/ai-agent-benchmark` | Multi-Domain Agent Benchmark Pack | `raw-github/murataslan1_ai-agent-benchmark.md` | `site/public/reports/projects/267-ai-agent-benchmark-multi-domain-pack.md` |
| `holaboss-ai/holaOS` | Long-Horizon Agent Environment | `raw-github/holaboss-ai_holaos.md` | `site/public/reports/projects/268-holaos-long-horizon-agent-environment.md` |

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
