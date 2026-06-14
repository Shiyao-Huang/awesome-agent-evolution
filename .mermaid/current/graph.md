# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-14T14:22:49+08:00

## Current Run Repositories

- **china-qijizhifeng/agentic-Harness-engineering** -> raw `raw-github/china-qijizhifeng_agentic-harness-engineering.md` -> card `projects/43-agentic-harness-engineering.md` -> site report `site/public/reports/projects/43-agentic-harness-engineering.md`
- **NousResearch/hermes-agent** -> raw `raw-github/nousresearch_hermes-agent.md` -> card `projects/44-hermes-agent.md` -> site report `site/public/reports/projects/44-hermes-agent.md`
- **stanford-iris-lab/meta-harness** -> raw `raw-github/stanford-iris-lab_meta-harness.md` -> card `projects/249-stanford-meta-harness-framework.md` -> site report `site/public/reports/projects/249-stanford-meta-harness-framework.md`
- **rohitg00/agentmemory** -> raw `raw-github/rohitg00_agentmemory.md` -> card `projects/50-agentmemory.md` -> site report `site/public/reports/projects/50-agentmemory.md`
- **pinchbench/skill** -> raw `raw-github/pinchbench_skill.md` -> card `projects/51-pinchbench-skill.md` -> site report `site/public/reports/projects/51-pinchbench-skill.md`
- **lsdefine/GenericAgent** -> raw `raw-github/lsdefine_genericagent.md` -> card `not promoted to public project card in this run` -> site report `not promoted to public site report in this run`
- **EvoMap/awesome-agent-evolution** -> raw `raw-github/evomap_awesome-agent-evolution.md` -> card `projects/394-evomap-awesome-agent-evolution.md` -> site report `site/public/reports/projects/394-evomap-awesome-agent-evolution.md`
- **uid4oe/insight-swarm** -> raw `raw-github/uid4oe_insight-swarm.md` -> card `not promoted to public project card in this run` -> site report `not promoted to public site report in this run`

## Working Principle

Authenticated GitHub API snapshots -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- This loop used authenticated GitHub GraphQL/API access through `gh`.
- Relative to the 2026-06-13 14:16 packet, 7 of the 8 anchors moved on public metadata; only Insight Swarm stayed unchanged.
- GitNexus is partially available: `node .gitnexus/run.cjs status` works, but query/analyze fail when loading LadybugDB because the database file version is `41` while the current build storage version is `40`.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
