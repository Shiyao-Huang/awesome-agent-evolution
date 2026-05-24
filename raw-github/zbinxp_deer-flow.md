---
repo: zbinxp/deer-flow
url: https://github.com/zbinxp/deer-flow
content_timestamp: 2026-02-28
time_slice: 2026-02
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - zbinxp/deer-flow: An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memories, tools, skill, subagents and message gateway, it handles different levels of tasks that could take minutes to hours. · GitHub

**Source**: https://github.com/zbinxp/deer-flow

---

[Skip to content](https://github.com/zbinxp/deer-flow#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zbinxp](https://github.com/zbinxp)

/
**[deer-flow](https://github.com/zbinxp/deer-flow)**

Public

       forked from [bytedance/deer-flow](https://github.com/bytedance/deer-flow)

- [Notifications](https://github.com/login?return_to=%2Fzbinxp%2Fdeer-flow)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fzbinxp%2Fdeer-flow)
- 
[Star
          0](https://github.com/login?return_to=%2Fzbinxp%2Fdeer-flow)

[https://github.com/zbinxp/deer-flow](https://github.com/zbinxp/deer-flow)

[Branches](https://github.com/zbinxp/deer-flow/branches)[Tags](https://github.com/zbinxp/deer-flow/tags)

[https://github.com/zbinxp/deer-flow/branches](https://github.com/zbinxp/deer-flow/branches)[https://github.com/zbinxp/deer-flow/tags](https://github.com/zbinxp/deer-flow/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,711 Commits1,711 Commits |  |  |  |
| .github | .github |  |  |
| backend | backend |  |  |
| docker | docker |  |  |
| docs | docs |  |  |
| frontend | frontend |  |  |
| scripts | scripts |  |  |
| skills/public | skills/public |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Install.md | Install.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| README_fr.md | README_fr.md |  |  |
| README_ja.md | README_ja.md |  |  |
| README_ru.md | README_ru.md |  |  |
| README_zh.md | README_zh.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| config.example.yaml | config.example.yaml |  |  |
| deer-flow.code-workspace | deer-flow.code-workspace |  |  |
| extensions_config.example.json | extensions_config.example.json |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🦌 DeerFlow - 2.0

[https://github.com/zbinxp/deer-flow#-deerflow---20](https://github.com/zbinxp/deer-flow#-deerflow---20)

English | [中文](https://github.com/zbinxp/deer-flow/blob/main/README_zh.md) | [日本語](https://github.com/zbinxp/deer-flow/blob/main/README_ja.md) | [Français](https://github.com/zbinxp/deer-flow/blob/main/README_fr.md) | [Русский](https://github.com/zbinxp/deer-flow/blob/main/README_ru.md)

[https://github.com/zbinxp/deer-flow/blob/main/backend/pyproject.toml](https://github.com/zbinxp/deer-flow/blob/main/backend/pyproject.toml)[https://github.com/zbinxp/deer-flow/blob/main/Makefile](https://github.com/zbinxp/deer-flow/blob/main/Makefile)[https://github.com/zbinxp/deer-flow/blob/main/LICENSE](https://github.com/zbinxp/deer-flow/blob/main/LICENSE)

[https://trendshift.io/repositories/14699](https://trendshift.io/repositories/14699)

> On February 28th, 2026, DeerFlow claimed the 🏆 #1 spot on GitHub Trending following the launch of version 2. Thanks a million to our incredible community — you made this happen! 💪🔥

DeerFlow (**D**eep **E**xploration and **E**fficient **R**esearch **Flow**) is an open-source **super agent harness** that orchestrates **sub-agents**, **memory**, and **sandboxes** to do almost anything — powered by **extensible skills**.

deer-flow-720p.mp4

Note

**DeerFlow 2.0 is a ground-up rewrite.** It shares no code with v1. If you're looking for the original Deep Research framework, it's maintained on the [1.x branch](https://github.com/bytedance/deer-flow/tree/main-1.x) — contributions there are still welcome. Active development has moved to 2.0.

## Official Website

[https://github.com/zbinxp/deer-flow#official-website](https://github.com/zbinxp/deer-flow#official-website)

[https://deerflow.tech](https://deerflow.tech)

Learn more and see **real demos** on our [official website](https://deerflow.tech).

## Coding Plan from ByteDance Volcengine

[https://github.com/zbinxp/deer-flow#coding-plan-from-bytedance-volcengine](https://github.com/zbinxp/deer-flow#coding-plan-from-bytedance-volcengine)
[https://private-user-images.githubusercontent.com/1003147/564581194-2ecc7b9d-50be-4185-b1f7-5542d222fb2d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTkwMzgsIm5iZiI6MTc3OTI5ODczOCwicGF0aCI6Ii8xMDAzMTQ3LzU2NDU4MTE5NC0yZWNjN2I5ZC01MGJlLTQxODUtYjFmNy01NTQyZDIyMmZiMmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MjBUMTczODU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MzNiN2U1NDYzZTBjYWJmMmY1ZjBiZmFiOGE1NGFkZGUxMjJjMDg4Y2MxMDYxYzg4MWRlOWRkOWFkZjkwZmI0OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.BqPlcxGcHuCCXzU8Vrq_CtC-SVscoEY9i2X848Hxmzs](https://private-user-images.githubusercontent.com/1003147/564581194-2ecc7b9d-50be-4185-b1f7-5542d222fb2d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTkwMzgsIm5iZiI6MTc3OTI5ODczOCwicGF0aCI6Ii8xMDAzMTQ3LzU2NDU4MTE5NC0yZWNjN2I5ZC01MGJlLTQxODUtYjFmNy01NTQyZDIyMmZiMmQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDUyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA1MjBUMTczODU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MzNiN2U1NDYzZTBjYWJmMmY1ZjBiZmFiOGE1NGFkZGUxMjJjMDg4Y2MxMDYxYzg4MWRlOWRkOWFkZjkwZmI0OCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGcG5nIn0.BqPlcxGcHuCCXzU8Vrq_CtC-SVscoEY9i2X848Hxmzs)
- We strongly recommend using Doubao-Seed-2.0-Code, DeepSeek v3.2 and Kimi 2.5 to run DeerFlow
- [Learn more](https://www.byteplus.com/en/activity/codingplan?utm_campaign=deer_flow&utm_content=deer_flow&utm_medium=devrel&utm_source=OWO&utm_term=deer_flow)
- [中国大陆地区的开发者请点击这里](https://www.volcengine.com/activity/codingplan?utm_campaign=deer_flow&utm_content=deer_flow&utm_medium=devrel&utm_source=OWO&utm_term=deer_flow)

## InfoQuest

[https://github.com/zbinxp/deer-flow#infoquest](https://github.com/zbinxp/deer-flow#infoquest)

DeerFlow has newly integrated the intelligent search and crawling toolset independently developed by BytePlus--[InfoQuest (supports free online experience)](https://docs.byteplus.com/en/docs/InfoQuest/What_is_Info_Quest)

[https://docs.byteplus.com/en/docs/InfoQuest/What_is_Info_Quest](https://docs.byteplus.com/en/docs/InfoQuest/What_is_Info_Quest)

---

## Table of Contents

[https://github.com/zbinxp/deer-flow#table-of-contents](https://github.com/zbinxp/deer-flow#table-of-contents)

- [🦌 DeerFlow - 2.0](https://github.com/zbinxp/deer-flow#-deerflow---20)
  - [Official Website](https://github.com/zbinxp/deer-flow#official-website)
  - [InfoQuest](https://github.com/zbinxp/deer-flow#infoquest)
  - [Table of Contents](https://github.com/zbinxp/deer-flow#table-of-contents)
  - [One-Line Agent Setup](https://github.com/zbinxp/deer-flow#one-line-agent-setup)
  - [Quick Start](https://github.com/zbinxp/deer-flow#quick-start)
    - [Configuration](https://github.com/zbinxp/deer-flow#configuration)
    - [Running the Application](https://github.com/zbinxp/deer-flow#running-the-application)
      - [Option 1: Docker (Recommended)](https://github.com/zbinxp/deer-flow#option-1-docker-recommended)
      - [Option 2: Local Development](https://github.com/zbinxp/deer-flow#option-2-local-development)

    - [Advanced](https://github.com/zbinxp/deer-flow#advanced)
      - [Sandbox Mode](https://github.com/zbinxp/deer-flow#sandbox-mode)
      - [MCP Server](https://github.com/zbinxp/deer-flow#mcp-server)
      - [IM Channels](https://github.com/zbinxp/deer-flow#im-channels)
      - [LangSmith Tracing](https://github.com/zbinxp/deer-flow#langsmith-tracing)

  - [From Deep Research to Super Agent Harness](https://github.com/zbinxp/deer-flow#from-deep-research-to-super-agent-harness)
  - [Core Features](https://github.com/zbinxp/deer-flow#core-features)
    - [Skills & Tools](https://github.com/zbinxp/deer-flow#skills--tools)
      - [Claude Code Integration](https://github.com/zbinxp/deer-flow#claude-code-integration)

    - [Sub-Agents](https://github.com/zbinxp/deer-flow#sub-agents)
    - [Sandbox & File System](https://github.com/zbinxp/deer-flow#sandbox--file-system)
    - [Context Engineering](https://github.com/zbinxp/deer-flow#context-engineering)
    - [Long-Term Memory](https://github.com/zbinxp/deer-flow#long-term-memory)

  - [Recommended Models](https://github.com/zbinxp/deer-flow#recommended-models)
  - [Embedded Python Client](https://github.com/zbinxp/deer-flow#embedded-python-client)
  - [Documentation](https://github.com/zbinxp/deer-flow#documentation)
  - [⚠️ Security Notice](https://github.com/zbinxp/deer-flow#%EF%B8%8F-security-notice)
  - [Contributing](https://github.com/zbinxp/deer-flow#contributing)
  - [License](https://github.com/zbinxp/deer-flow#license)
  - [Acknowledgments](https://github.com/zbinxp/deer-flow#acknowledgments)
    - [Key Contributors](https://github.com/zbinxp/deer-flow#key-contributors)

  - [Star History](https://github.com/zbinxp/deer-flow#star-history)

## One-Line Agent Setup

[https://github.com/zbinxp/deer-flow#one-line-agent-setup](https://github.com/zbinxp/deer-flow#one-line-agent-setup)

If you use Claude Code, Codex, Cursor, Windsurf, or another coding agent, you can hand it the setup instructions in one sentence:

```
Help me clone DeerFlow if needed, then bootstrap it for local development by following https://raw.githubusercontent.com/bytedance/deer-flow/main/Install.md
```

That prompt is intended for coding agents. It tells the agent to clone the repo if needed, choose Docker when available, and stop with the exact next command plus any missing config the user still needs to provide.

## Quick Start

[https://github.com/zbinxp/deer-flow#quick-start](https://github.com/zbinxp/deer-flow#quick-start)

### Configuration

[https://github.com/zbinxp/deer-flow#configuration](https://github.com/zbinxp/deer-flow#configuration)

1. 

**Clone the DeerFlow repository**

```
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow
```

2. 

**Generate local configuration files**

From the project root directory (`deer-flow/`), run:

```
make config
```

This command creates local configuration files based on the provided example templates.

3. 

**Configure your preferred model(s)**

Edit `config.yaml` and define at least one model:

```
models:
  - name: gpt-4                       # Internal identifier
    display_name: GPT-4               # Human-readable name
    use: langchain_openai:ChatOpenAI  # LangChain class path
    model: gpt-4                      # Model identifier for API
    api_key: $OPENAI_API_KEY          # API key (recommended: use env var)
    max_tokens: 4096                  # Maximum tokens per request
    temperature: 0.7                  # Sampling temperature

  - name: openrouter-gemini-2.5-flash
    display_name: Gemini 2.5 Flash (OpenRouter)
    use: langchain_openai:ChatOpenAI
    model: google/gemini-2.5-flash-preview
    api_key: $OPENAI_API_KEY          # OpenRouter still uses the OpenAI-compatible field name here
    base_url: https://openrouter.ai/api/v1

  - name: gpt-5-responses
    display_name: GPT-5 (Responses API)
    use: langchain_openai:ChatOpenAI
    model: gpt-5
    api_key: $OPENAI_API_KEY
    use_responses_api: true
    output_version: responses/v1
```

OpenRouter and similar OpenAI-compatible gateways should be configured with `langchain_openai:ChatOpenAI` plus `base_url`. If you prefer a provider-specific environment variable name, point `api_key` at that variable explicitly (for example `api_key: $OPENROUTER_API_KEY`).

To route OpenAI models through `/v1/responses`, keep using `langchain_openai:ChatOpenAI` and set `use_responses_api: true` with `output_version: responses/v1`.

CLI-backed provider examples:

```
models:
  - name: gpt-5.4
    display_name: GPT-5.4 (Codex CLI)
    use: deerflow.models.openai_codex_provider:CodexChatModel
    model: gpt-5.4
    supports_thinking: true
    supports_reasoning_effort: true

  - name: claude-sonnet-4.6
    display_name: Claude Sonnet 4.6 (Claude Code OAuth)
    use: deerflow.models.claude_provider:ClaudeChatModel
    model: claude-sonnet-4-6
    max_tokens: 4096
    supports_thinking: true
```

  - Codex CLI reads `~/.codex/auth.json`
  - The Codex Responses endpoint currently rejects `max_tokens` and `max_output_tokens`, so `CodexChatModel` does not expose a request-level token cap
  - Claude Code accepts `CLAUDE_CODE_OAUTH_TOKEN`, `ANTHROPIC_AUTH_TOKEN`, `CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR`, `CLAUDE_CODE_CREDENTIALS_PATH`, or plaintext `~/.claude/.credentials.json`
  - ACP agent entries are separate from model providers. If you configure `acp_agents.codex`, point it at a Codex ACP adapter such as `npx -y @zed-industries/codex-acp`; the standard `codex` CLI binary is not ACP-compatible by itself
  - On macOS, DeerFlow does not probe Keychain automatically. Export Claude Code auth explicitly if needed:

```
eval "$(python3 scripts/export_claude_code_oauth.py --print-export)"
```

4. 

**Set API keys for your configured model(s)**

Choose one of the following methods:

- 

Option A: Edit the `.env` file in the project root (Recommended)

```
TAVILY_API_KEY=your-tavily-api-key
OPENAI_API_KEY=your-openai-api-key
# OpenRouter also uses OPENAI_API_KEY when your config uses langchain_openai:ChatOpenAI + base_url.
# Add other provider keys as needed
INFOQUEST_API_KEY=your-infoquest-api-key
```

- 

Option B: Export environment variables in your shell

```
export OPENAI_API_KEY=your-openai-api-key
```

For CLI-backed providers:

  - Codex CLI: `~/.codex/auth.json`
  - Claude Code OAuth: explicit env/file handoff or `~/.claude/.credentials.json`

-
## gBrain Temporal Metadata

- content_timestamp: 2026-02-28
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-02
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

