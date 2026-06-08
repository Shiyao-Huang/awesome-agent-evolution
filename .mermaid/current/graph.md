# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-08T17:47:34+08:00

## Current Run Repositories

- **AgentWrapper/agent-orchestrator** -> raw `raw-github/composiohq_agent-orchestrator.md` -> card `projects/406-composio-agent-orchestrator-coding-swarm.md` -> site report `site/public/reports/projects/406-composio-agent-orchestrator-coding-swarm.md`
- **desplega-ai/agent-swarm** -> raw `raw-github/desplega-ai_agent-swarm.md` -> card `projects/405-agent-swarm-compounding-lead-worker-runtime.md` -> site report `site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md`
- **VRSEN/agency-swarm** -> raw `raw-github/vrsen_agency-swarm.md` -> card `projects/27-agency-swarm.md` -> site report `site/public/reports/projects/27-agency-swarm.md`
- **AQ-MedAI/MedMemoryBench** -> raw `raw-github/aq-medai_medmemorybench.md` -> card `projects/407-medmemorybench-agent-memory-benchmark.md` -> site report `site/public/reports/projects/407-medmemorybench-agent-memory-benchmark.md`
- **wanxingai/LightAgent** -> raw `raw-github/wanxingai_lightagent.md` -> card `projects/139-lightagent-memory-mcp-skills.md` -> site report `site/public/reports/projects/139-lightagent-memory-mcp-skills.md`

## Working Principle

GitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> README/i18n + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- Shell GitHub API access is blocked by DNS resolution failure.
- Local `gh` auth is invalid, so no authenticated freshness claims were made.
- Local `gitnexus status` succeeds but reports a stale index; `npx gitnexus status` timed out in this workspace.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
