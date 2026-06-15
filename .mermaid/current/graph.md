# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-16T02:26:37+08:00

## Current Run Repositories

- **china-qijizhifeng/agentic-Harness-engineering** -> raw `raw-github/china-qijizhifeng_agentic-harness-engineering.md` -> card `projects/43-agentic-harness-engineering.md` -> site report `site/public/reports/projects/43-agentic-harness-engineering.md`
- **NousResearch/hermes-agent** -> raw `raw-github/nousresearch_hermes-agent.md` -> card `projects/44-hermes-agent.md` -> site report `site/public/reports/projects/44-hermes-agent.md`
- **stanford-iris-lab/meta-harness** -> raw `raw-github/stanford-iris-lab_meta-harness.md` -> card `projects/249-stanford-meta-harness-framework.md` -> site report `site/public/reports/projects/249-stanford-meta-harness-framework.md`
- **rohitg00/agentmemory** -> raw `raw-github/rohitg00_agentmemory.md` -> card `projects/50-agentmemory.md` -> site report `site/public/reports/projects/50-agentmemory.md`
- **pinchbench/skill** -> raw `raw-github/pinchbench_skill.md` -> card `projects/51-pinchbench-skill.md` -> site report `site/public/reports/projects/51-pinchbench-skill.md`
- **lsdefine/GenericAgent** -> raw `raw-github/lsdefine_genericagent.md` -> card `not promoted to public project card in this run` -> site report `not promoted to public site report in this run`
- **openclaw/openclaw** -> raw `raw-github/openclaw_openclaw.md` -> card `projects/48-openclaw.md` -> site report `site/public/reports/projects/48-openclaw.md`
- **obra/superpowers** -> raw `raw-github/obra_superpowers.md` -> card `projects/49-superpowers.md` -> site report `site/public/reports/projects/49-superpowers.md`
- **EvoMap/awesome-agent-evolution** -> raw `raw-github/evomap_awesome-agent-evolution.md` -> card `projects/394-evomap-awesome-agent-evolution.md` -> site report `site/public/reports/projects/394-evomap-awesome-agent-evolution.md`
- **uid4oe/insight-swarm** -> raw `raw-github/uid4oe_insight-swarm.md` -> card `not promoted to public project card in this run` -> site report `not promoted to public site report in this run`
- **desplega-ai/agent-swarm** -> raw `raw-github/desplega-ai_agent-swarm.md` -> card `projects/405-agent-swarm-compounding-lead-worker-runtime.md` -> site report `site/public/reports/projects/405-agent-swarm-compounding-lead-worker-runtime.md`

## Working Principle

Authenticated GitHub API snapshots -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- This loop used authenticated GitHub GraphQL/API access through `gh`.
- Relative to the 2026-06-15 20:24 packet, 9 of the 11 anchors moved on public metadata.
- GitNexus is partially available: `npx gitnexus status` works, but `node .gitnexus/run.cjs query agentmemory --repo awesome-evolution-workspace-cleanup` fails while loading LadybugDB because the database file version is `41` and the current build storage version is `40`.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
