# Hourly Public Metadata Update - 2026-05-30 07:15 +0800

## One Sentence

Added 6 web-observed repositories and propagated them through raw, classification, README/i18n, project reports, site data, and Mermaid graph evidence.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop for Self Evolve / awesome-agent-evolution. This iteration adds `first-fluke/oh-my-agent`, `agentscope-ai/ReMe`, `openmemoryspec/oms`, `memtomem/memtomem`, `skillmatic-ai/awesome-agent-skills`, `sevenschulte/agentic-harness` as skill/benchmark/harness evidence across evaluation, meta-harness optimization, and reusable skill knowledge construction. The run keeps freshness honest: public GitHub pages were observed through web access, while shell GitHub API DNS and local `gh` authentication were blocked.

## Added Repositories

| Repo | Layer role | Raw capture | Public report |
|---|---|---|---|
| `first-fluke/oh-my-agent` | Open Multi-Agent Runtime and Benchmark Harness | `raw-github/first-fluke_oh-my-agent.md` | `site/public/reports/projects/318-oh-my-agent-multi-agent-runtime-and-harness.md` |
| `agentscope-ai/ReMe` | Long-Term Agent Memory and Context Compression Framework | `raw-github/agentscope-ai_reme.md` | `site/public/reports/projects/319-agentscope-reme-long-term-memory-framework.md` |
| `openmemoryspec/oms` | Portable Agent Memory Interoperability Standard | `raw-github/openmemoryspec_oms.md` | `site/public/reports/projects/320-open-memory-spec-oms-interoperability-standard.md` |
| `memtomem/memtomem` | Hierarchical Agent Memory Framework | `raw-github/memtomem_memtomem.md` | `site/public/reports/projects/321-memtomem-hierarchical-memory-for-agents.md` |
| `skillmatic-ai/awesome-agent-skills` | Cross-Framework Agent Skills Registry | `raw-github/skillmatic-ai_awesome-agent-skills.md` | `site/public/reports/projects/322-skillmatic-awesome-agent-skills-registry.md` |
| `sevenschulte/agentic-harness` | Python Agent Workflow Testing Harness | `raw-github/sevenschulte_agentic-harness.md` | `site/public/reports/projects/323-agentic-harness-python-workflow-test-harness.md` |

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
