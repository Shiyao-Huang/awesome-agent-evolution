# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-12T14:14:31+08:00

## Current Run Repositories

- **china-qijizhifeng/agentic-Harness-engineering** -> raw `raw-github/china-qijizhifeng_agentic-harness-engineering.md` -> card `projects/43-agentic-harness-engineering.md` -> site report `site/public/reports/projects/43-agentic-harness-engineering.md`
- **NousResearch/hermes-agent** -> raw `raw-github/nousresearch_hermes-agent.md` -> card `projects/44-hermes-agent.md` -> site report `site/public/reports/projects/44-hermes-agent.md`
- **openclaw/openclaw** -> raw `raw-github/openclaw_openclaw.md` -> card `projects/48-openclaw.md` -> site report `site/public/reports/projects/48-openclaw.md`
- **obra/superpowers** -> raw `raw-github/obra_superpowers.md` -> card `projects/49-superpowers.md` -> site report `site/public/reports/projects/49-superpowers.md`
- **rohitg00/agentmemory** -> raw `raw-github/rohitg00_agentmemory.md` -> card `projects/50-agentmemory.md` -> site report `site/public/reports/projects/50-agentmemory.md`
- **pinchbench/skill** -> raw `raw-github/pinchbench_skill.md` -> card `projects/51-pinchbench-skill.md` -> site report `site/public/reports/projects/51-pinchbench-skill.md`
- **EvoMap/awesome-agent-evolution** -> raw `raw-github/evomap_awesome-agent-evolution.md` -> card `projects/394-evomap-awesome-agent-evolution.md` -> site report `site/public/reports/projects/394-evomap-awesome-agent-evolution.md`

## Working Principle

GitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> processed project cards + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- Shell GitHub API access is blocked by DNS resolution failure.
- Local `gh` auth is invalid, so no authenticated freshness claims were made.
- `npx gitnexus status` and `npx gitnexus query` fail because `registry.npmjs.org` cannot be resolved in this workspace, so GitNexus is present in instructions but not callable for this run's evidence refresh.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
