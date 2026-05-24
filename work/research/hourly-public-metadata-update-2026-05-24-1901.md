# Hourly Public Metadata Update - 2026-05-24 19:01

## One Sentence

This run extends the public metadata pipeline with coding-agent memory, agent-memory benchmark, proactive memory, self-evolving memory OS, and skill-orchestrator repositories.

## Three Sentences

User direct inputs require raw material, processed classification, model-card teaching material, and public website impact to stay in one traceable data flow. GitHub API freshness is still blocked by local DNS and invalid `gh` auth, so the new data is explicitly marked as web-observed rather than API-verified. The main technical change is six raw captures, six classification rows, five new site project cards plus one refreshed EverOS card, six model-card reports, synced public report copies, site project data, and an updated Mermaid truth graph.

## Added Repositories

- [jayzeng/agentmemory](https://github.com/jayzeng/agentmemory) - Coding Agent Memory CLI; web GitHub page observed 36 commits, MIT license, TypeScript primary language, Claude/Codex/Cursor skill install paths, qmd search, local markdown storage, 5 stars and 0 forks.
- [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) - Agent Memory Benchmark; web GitHub page observed 29 commits, Python/Vue stack, benchmark topics, reproducibility claims, uv CLI commands, 43 stars and 15 forks.
- [NevaMind-AI/memU](https://github.com/NevaMind-AI/memU) - 24/7 Proactive Agent Memory; web GitHub page observed 288 commits, Apache 2.0 license, Python primary language, OpenClaw alternative section, custom LLM/provider docs, 13.7k stars and 1k forks.
- [EverMind-AI/EverOS](https://github.com/EverMind-AI/EverOS) - Self-Evolving Agent Memory OS; web GitHub page observed 654 commits, Apache-2.0 license, Python primary language, benchmarks/methods/use-cases folders, EverMemBench/EvoAgentBench entries, 5.6k stars and 593 forks.
- [OneWave-AI/claude-skills](https://github.com/OneWave-AI/claude-skills) - Production Claude Skills Library; web GitHub page observed 19 commits, MIT license, 162 skills claim, agent-army/agent-swarm folders, install instructions, 154 stars and 23 forks.
- [simota/agent-skills](https://github.com/simota/agent-skills) - Cross-Agent Skills and Nexus Orchestrator; web GitHub page observed 1,843 commits, MIT license, 137 specialized agents in README, Nexus Orchestrator, platform-agnostic support, 39 stars and 8 forks.

## Data Flow

1. Raw evidence: `raw-github/*.md` with source URL, collected timestamp, and visible page metadata.
2. Processed classification: `research/repo-classification.*` plus generated GitHub analysis outputs.
3. Work notes: this file plus `.mermaid/current/graph.json` as the object-graph truth source.
4. Results: `projects/76-81*.md`, synced `site/public/reports/projects/76-81*.md`, and `site/src/data/projects.ts`.

## Blockers

- `curl https://api.github.com/rate_limit` failed with DNS resolution error.
- `gh auth status` reports the default GitHub token is invalid.
- Any GitHub freshness in this run is browser/web-observed, not API-verified.

## GitNexus Evidence

- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .` succeeded incrementally.
- Output: changed=15, added=14, 8,972 nodes, 9,227 edges, 30 clusters, 13 flows.
- Blocker: FTS extension unavailable because extension.ladybugdb.com could not be reached. Graph/index evidence is usable without FTS.
