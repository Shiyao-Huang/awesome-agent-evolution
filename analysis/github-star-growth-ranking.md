# GitHub Star Growth Ranking

> Generated: 2026-06-01T11:37:51.777Z. Ranking year: 2026.

## One Sentence

Total GitHub stars are treated as historical adoption, not current value; this ranking is designed around year-specific new stars and growth-quality coverage so 2026 frontier projects can outrank old incumbents when the evidence supports it.

## Source Boundary

- Seed repositories come from `analysis/github-project-data-analysis.json`.
- Star events come from the GitHub REST `List stargazers` endpoint using `Accept: application/vnd.github.star+json`, which includes `starred_at`.
- Full rankings require complete stargazer pagination; rows marked `partial` or `not_fetched` are not final evidence.
- Dataset-ready files live under `data-engine/github-star-history/` and can be exported to Hugging Face as JSONL/CSV/Parquet.

## Coverage

| Metric | Value |
|---|---:|
| seed_repositories | 697 |
| repositories_in_database | 697 |
| star_events_deduped | 45 |
| snapshots | 1 |
| repos_with_any_star_events | 1 |
| repos_complete_or_near_complete | 1 |
| repos_partial | 0 |
| repos_not_fetched | 696 |
| coverage_qualified_rows | 1 |
| fetch_backlog_rows | 696 |

## Coverage-Qualified Growth Ranking

Only rows with fetched star-event coverage appear here. This is the table to use for 2026 growth claims.

| Rank | Repo | Growth score | New stars year | Recent 90d | Total stars | Coverage | Star events |
|---:|---|---:|---:|---:|---:|---|---:|
| 1 | [zju-llm-safety/darwin](https://github.com/ZJU-LLM-Safety/DARWIN) | 100 | 45 | 45 | 45 | complete_or_near_complete | 45 |

## Fetch Priority Backlog

These rows are not growth evidence. They are unfetched repositories sorted by adoption prior so the next data run can spend API budget deliberately.

| Fetch priority | Repo | Total stars hint | Evolution focused | Raw time slice | Coverage |
|---:|---|---:|---|---|---|
| 1 | [openclaw/openclaw](https://github.com/openclaw/openclaw) | 374000 | no | 2026-05 | not_fetched |
| 2 | [obra/superpowers](https://github.com/obra/superpowers) | 202000 | no | 2026-05 | not_fetched |
| 3 | [affaan-m/ecc](https://github.com/affaan-m/ECC) | 191000 | no | 2026-05 | not_fetched |
| 4 | [significant-gravitas/autogpt](https://github.com/Significant-Gravitas/AutoGPT) | 184482 | no | 2026-05 | not_fetched |
| 5 | [anthropics/skills](https://github.com/anthropics/skills) | 140000 | no | 2026-05 | not_fetched |
| 6 | [ollama/ollama](https://github.com/ollama/ollama) | 140000 | no | - | not_fetched |
| 7 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | 124000 | no | - | not_fetched |
| 8 | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 105000 | no | 2026-05 | not_fetched |
| 9 | [langgenius/dify](https://github.com/langgenius/dify) | 95000 | no | - | not_fetched |
| 10 | [n8n-io/n8n](https://github.com/n8n-io/n8n) | 75000 | no | 2026-05 | not_fetched |
| 11 | [all-hands-ai/openhands](https://github.com/All-Hands-AI/OpenHands) | 74662 | no | - | not_fetched |
| 12 | [foundationagents/metagpt](https://github.com/FoundationAgents/MetaGPT) | 68239 | yes | - | not_fetched |
| 13 | [shareai-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 63000 | no | 2026-05 | not_fetched |
| 14 | [composiohq/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | 61500 | no | 2026-05 | not_fetched |
| 15 | [microsoft/autogen](https://github.com/microsoft/autogen) | 58330 | no | - | not_fetched |
| 16 | [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | 58000 | no | - | not_fetched |
| 17 | [mem0ai/mem0](https://github.com/mem0ai/mem0) | 56500 | no | 2026-05 | not_fetched |
| 18 | [mempalace/mempalace](https://github.com/MemPalace/mempalace) | 52800 | no | 2026-05 | not_fetched |
| 19 | [crewaiinc/crewai](https://github.com/crewAIInc/crewAI) | 52041 | no | unknown | not_fetched |
| 20 | [opendevin/opendevin](https://github.com/OpenDevin/OpenDevin) | 50000 | yes | - | not_fetched |
| 21 | [voltagent/awesome-openclaw-skills](https://github.com/VoltAgent/awesome-openclaw-skills) | 49400 | no | 2026-05 | not_fetched |
| 22 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | 47000 | no | 2026-05 | not_fetched |
| 23 | [flowiseai/flowise](https://github.com/FlowiseAI/Flowise) | 36000 | no | - | not_fetched |
| 24 | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | 34604 | yes | 2026-05 | not_fetched |
| 25 | [reworkd/agentgpt](https://github.com/reworkd/AgentGPT) | 33000 | no | - | not_fetched |

## Interpretation Rules

1. `not_fetched` means the project has not entered the star-event database yet; do not infer zero demand.
2. `partial` means page budget or rate limits prevented full history; use it only for pipeline validation.
3. `complete_or_near_complete` is required before publishing a definitive 2026 new-star rank.
4. Current total stars only order the fetch backlog; they do not create growth rank for unfetched rows.
5. Current total stars should be used as an adoption prior only after new-star momentum, continuity, and evidence quality.
