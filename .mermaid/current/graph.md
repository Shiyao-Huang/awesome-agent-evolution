# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-12T20:16:23+08:00

## Current Run Repositories

- **china-qijizhifeng/agentic-Harness-engineering** -> raw `raw-github/china-qijizhifeng_agentic-harness-engineering.md` -> card `projects/43-agentic-harness-engineering.md` -> site report `site/public/reports/projects/43-agentic-harness-engineering.md`
- **NousResearch/hermes-agent** -> raw `raw-github/nousresearch_hermes-agent.md` -> card `projects/44-hermes-agent.md` -> site report `site/public/reports/projects/44-hermes-agent.md`
- **openclaw/openclaw** -> raw `raw-github/openclaw_openclaw.md` -> card `projects/48-openclaw.md` -> site report `site/public/reports/projects/48-openclaw.md`
- **obra/superpowers** -> raw `raw-github/obra_superpowers.md` -> card `projects/49-superpowers.md` -> site report `site/public/reports/projects/49-superpowers.md`
- **rohitg00/agentmemory** -> raw `raw-github/rohitg00_agentmemory.md` -> card `projects/50-agentmemory.md` -> site report `site/public/reports/projects/50-agentmemory.md`
- **pinchbench/skill** -> raw `raw-github/pinchbench_skill.md` -> card `projects/51-pinchbench-skill.md` -> site report `site/public/reports/projects/51-pinchbench-skill.md`
- **EvoMap/awesome-agent-evolution** -> raw `raw-github/evomap_awesome-agent-evolution.md` -> card `projects/394-evomap-awesome-agent-evolution.md` -> site report `site/public/reports/projects/394-evomap-awesome-agent-evolution.md`
- **desplega-ai/agent-swarm** -> raw `raw-github/desplega-ai_agent-swarm.md` -> card `projects/405-agent-swarm-compounding-lead-worker-runtime.md` -> site report `site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md`

## Working Principle

GitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- Unauthenticated GitHub API access hit `403 rate limit exceeded` on 2026-06-12, so this loop used public GitHub HTML rather than API JSON.
- Local `gh` auth is invalid, so no authenticated freshness claims were made.
- GitNexus CLI status is callable but stale; direct GitNexus MCP tools are not exposed in this Codex session, and re-running `npx gitnexus analyze` was avoided because `AGENTS.md` / `CLAUDE.md` already contain unrelated user edits.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
