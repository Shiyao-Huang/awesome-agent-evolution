# Hourly Public Metadata Update - 2026-05-29 10:08 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `BerriAI/self-improving-agent`, `LLMSecurity/awesome-agent-skills-security`, `ComposioHQ/awesome-agent-clis`, `Olshansk/agent-skills`, `axiomhq/agent-memory`, `FreedomIntelligence/Tiermem` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `BerriAI/self-improving-agent` | Self-Improving Coding Agent Loop | `raw-github/berriai_self-improving-agent.md` | `site/public/reports/projects/293-berriai-self-improving-agent-loop.md` |
| `LLMSecurity/awesome-agent-skills-security` | Agent Skill Security Resource Index | `raw-github/llmsecurity_awesome-agent-skills-security.md` | `site/public/reports/projects/294-awesome-agent-skills-security.md` |
| `ComposioHQ/awesome-agent-clis` | Agent CLI Orchestration Resource Index | `raw-github/composiohq_awesome-agent-clis.md` | `site/public/reports/projects/295-awesome-agent-clis-orchestration.md` |
| `Olshansk/agent-skills` | Reusable Agent Skill Library | `raw-github/olshansk_agent-skills.md` | `site/public/reports/projects/296-olshansk-agent-skills-library.md` |
| `axiomhq/agent-memory` | Persistent Agent Memory Runtime | `raw-github/axiomhq_agent-memory.md` | `site/public/reports/projects/297-axiom-agent-memory-substrate.md` |
| `FreedomIntelligence/Tiermem` | Provenance-Aware Memory Benchmark Framework | `raw-github/freedomintelligence_tiermem.md` | `site/public/reports/projects/298-tiermem-provenance-memory-benchmark.md` |

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
