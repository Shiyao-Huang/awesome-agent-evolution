# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-09T06:23:00+08:00

## Current Run Repositories

- **AgentWrapper/agent-orchestrator** -> raw `raw-github/composiohq_agent-orchestrator.md` -> card `projects/406-composio-agent-orchestrator-coding-swarm.md` -> site report `site/public/reports/projects/406-composio-agent-orchestrator-coding-swarm.md`
- **desplega-ai/agent-swarm** -> raw `raw-github/desplega-ai_agent-swarm.md` -> card `projects/405-agent-swarm-compounding-lead-worker-runtime.md` -> site report `site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md`
- **VRSEN/agency-swarm** -> raw `raw-github/vrsen_agency-swarm.md` -> card `projects/27-agency-swarm.md` -> site report `site/public/reports/projects/27-agency-swarm.md`
- **AQ-MedAI/MedMemoryBench** -> raw `raw-github/aq-medai_medmemorybench.md` -> card `projects/407-medmemorybench-agent-memory-benchmark.md` -> site report `site/public/reports/projects/407-medmemorybench-agent-memory-benchmark.md`
- **wanxingai/LightAgent** -> raw `raw-github/wanxingai_lightagent.md` -> card `projects/139-lightagent-memory-mcp-skills.md` -> site report `site/public/reports/projects/139-lightagent-memory-mcp-skills.md`
- **openai/openai-agents-python** -> raw `raw-github/openai_openai-agents-python.md` -> card `projects/408-openai-agents-python-official-sdk.md` -> site report `site/public/reports/projects/408-openai-agents-python-official-sdk.md`
- **openai/openai-agents-js** -> raw `raw-github/openai_openai-agents-js.md` -> card `projects/409-openai-agents-js-official-sdk.md` -> site report `site/public/reports/projects/409-openai-agents-js-official-sdk.md`
- **XSkill-Agent/XSkill** -> raw `raw-github/xskill-agent_xskill.md` -> card `projects/404-xskill-continual-experience-skill-learning.md` -> site report `site/public/reports/projects/404-xskill-continual-experience-skill-learning.md`

## Working Principle

GitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> README/i18n + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- Shell GitHub API access is blocked by DNS resolution failure.
- Local `gh` auth is invalid, so no authenticated freshness claims were made.
- Local `gitnexus status` succeeds but reports a stale index (`Indexed commit: 326b47d`, `Current commit: 90bda54`).
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
