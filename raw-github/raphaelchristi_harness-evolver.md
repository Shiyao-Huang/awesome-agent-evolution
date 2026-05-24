---
repo: raphaelchristi/harness-evolver
url: https://github.com/raphaelchristi/harness-evolver
content_timestamp: 2026-05-24
time_slice: 2026-05
timestamp_source: web_github_page_open_2026-05-24
collected_at: 2026-05-24T15:00:00+08:00
source: github_web
---

## GitHub - raphaelchristi/harness-evolver

**Source**: https://github.com/raphaelchristi/harness-evolver

**Collection note**: Captured through browser-accessible GitHub page text because local shell DNS resolution for `api.github.com` failed during this automation run.

## Public metadata snapshot

- Repository: `raphaelchristi/harness-evolver`
- Stars observed: 21
- Forks observed: 2
- Commits observed: 333
- License observed: MIT
- Visible paths: `.claude-plugin`, `.claude/skills`, `.github/ISSUE_TEMPLATE`, `agents`, `assets`, `bin`, `docs`, `hooks`, `playground`, `skills`, `tests`, `tools`, `CHANGELOG.md`, `CLAUDE.md`, `package.json`

## Raw README signals

# Harness Evolver

Point at any LLM agent codebase. Harness Evolver will autonomously improve it: prompts, routing, tools, architecture, using multi-agent evolution with LangSmith as the evaluation backend.

Install signals:

```text
/plugin marketplace add raphaelchristi/harness-evolver-marketplace
/plugin install harness-evolver
npx harness-evolver@latest
```

Runtime compatibility signal:

- Claude Code
- Cursor
- Codex
- Windsurf

Workflow signals:

- `/harness:setup`
- `/harness:health`
- `/harness:evolve`
- `/harness:status`
- `/harness:deploy`

Mechanism signals:

- Proposers modify actual code in isolated git worktrees.
- Winners merge automatically.
- Dynamic lenses are created from failure data.
- Regressions are rejected by gate checks.
- Evolution memory can combine useful prior candidates.
