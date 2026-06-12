# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-13T02:15:12+08:00

## Current Run Repositories

- **desplega-ai/agent-swarm** -> raw `raw-github/desplega-ai_agent-swarm.md` -> card `projects/405-agent-swarm-compounding-lead-worker-runtime.md` -> site report `site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md`
- **AgentWrapper/agent-orchestrator** -> raw `raw-github/composiohq_agent-orchestrator.md` -> card `projects/406-composio-agent-orchestrator-coding-swarm.md` -> site report `site/public/reports/projects/406-composio-agent-orchestrator-coding-swarm.md`
- **VRSEN/agency-swarm** -> raw `raw-github/vrsen_agency-swarm.md` -> card `projects/27-agency-swarm.md` -> site report `site/public/reports/projects/27-agency-swarm.md`
- **openai/openai-agents-python** -> raw `raw-github/openai_openai-agents-python.md` -> card `projects/408-openai-agents-python-official-sdk.md` -> site report `site/public/reports/projects/408-openai-agents-python-official-sdk.md`
- **openai/openai-agents-js** -> raw `raw-github/openai_openai-agents-js.md` -> card `projects/409-openai-agents-js-official-sdk.md` -> site report `site/public/reports/projects/409-openai-agents-js-official-sdk.md`
- **XSkill-Agent/XSkill** -> raw `raw-github/xskill-agent_xskill.md` -> card `projects/404-xskill-continual-experience-skill-learning.md` -> site report `site/public/reports/projects/404-xskill-continual-experience-skill-learning.md`
- **AQ-MedAI/MedMemoryBench** -> raw `raw-github/aq-medai_medmemorybench.md` -> card `projects/407-medmemorybench-agent-memory-benchmark.md` -> site report `site/public/reports/projects/407-medmemorybench-agent-memory-benchmark.md`
- **wanxingai/LightAgent** -> raw `raw-github/wanxingai_lightagent.md` -> card `projects/139-lightagent-memory-mcp-skills.md` -> site report `site/public/reports/projects/139-lightagent-memory-mcp-skills.md`

## Working Principle

Authenticated GitHub API snapshots -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- This loop used authenticated GitHub GraphQL/API access through `gh`, so counts are fresher than prior web-observed packets.
- Mermaid Architect validation is currently schema-incompatible with this `graph.json` ('list indices must be integers or slices, not str'), so `graph.json` remains truth and `.md` / `.mmd` are maintained views.
- GitNexus CLI is available but stale until `npx gitnexus analyze` is rerun after the iteration.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
