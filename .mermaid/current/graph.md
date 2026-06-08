# Current Mermaid Object Graph

Truth source: `.mermaid/current/graph.json`

Generated: 2026-06-08T12:26:00+08:00

## Current Run Repositories

- **openai/openai-agents-python** -> raw `raw-github/openai_openai-agents-python.md` -> card `projects/408-openai-agents-python-official-sdk.md` -> site report `site/public/reports/408-openai-agents-python-official-sdk.md`
- **openai/openai-agents-js** -> raw `raw-github/openai_openai-agents-js.md` -> card `projects/409-openai-agents-js-official-sdk.md` -> site report `site/public/reports/409-openai-agents-js-official-sdk.md`

## Working Principle

GitHub public repo pages -> raw captures -> classification -> timestamp index -> GitHub corpus analysis -> README/i18n + site project data + public reports -> builds and indexes.

## Evidence Boundaries

- Shell GitHub API access is blocked by DNS resolution failure.
- Local `gh` auth is invalid, so no authenticated freshness claims were made.
- Local `gitnexus status` succeeds, but `npx gitnexus status` timed out in this workspace.
- Public copy review gate is still incomplete; this run updates evidence surfaces but does not claim review-complete copy quality.
