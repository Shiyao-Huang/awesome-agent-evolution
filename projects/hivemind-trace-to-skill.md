# Hivemind Model Card

| Field | Value |
|---|---|
| Repository | [activeloopai/hivemind](https://github.com/activeloopai/hivemind) |
| Official site | [deeplake.ai/hivemind](https://deeplake.ai/hivemind) |
| Category | Trace-to-Skill Continual Learning Layer |
| Stars / forks snapshot | 1,484 / 93 |
| Language | TypeScript |
| License | Apache-2.0 |
| Content timestamp | 2026-07-17 |
| Evidence source | Public GitHub API metadata, 2026-07-17 |
| Tags | trace-to-skill, skill-library, procedural-memory, continual-learning, coding-agents, cross-agent, team-workspaces |

## 1. Role in Self Evolve

Hivemind is an open-source continual learning layer for coding agents. It automatically captures agent session trajectories (prompts, tool calls, responses) and distills them into reusable, human-readable skills (SKILL.md files) that load in future sessions. Skills are shared across agents (Claude Code, Codex, Cursor, OpenClaw) and across team members via shared workspaces, making it a production trace-to-skill, experience-to-procedural-memory system.

## 2. Working Principle

session trajectory capture (prompts, tool calls, responses) -> distillation into human-readable SKILL.md files -> skill loading in future sessions -> cross-agent reuse (Claude Code, Codex, Cursor, OpenClaw) -> cross-team reuse via shared workspaces

## 3. Review-Standard Answers

- What evolves: the skill library (SKILL.md files) that agents load in future sessions.
- What feedback signal drives it: captured session trajectories from real agent work.
- How improvement is verified: retained skills are human-readable markdown, so changes stay inspectable, editable, and removable by the team. This card does not claim benchmark-verified improvement; no benchmark evidence is included here.

## 4. Evidence Path

Repository metadata snapshot from the public GitHub API on 2026-07-17: 1,484 stars, 93 forks, TypeScript, Apache-2.0 license, repository created 2026-04, actively pushed. No local runtime, benchmark rerun, or source audit was performed for this card.

## 5. Limits

This card was submitted by a contributor affiliated with the project (Deeplake). It records public metadata and the project's documented mechanism only. No independent benchmark, transfer, or regression evidence is included, and no raw-github capture file exists yet for this repository in this workspace.
