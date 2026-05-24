---
repo: memodb-io/acontext
url: https://github.com/memodb-io/acontext
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - memodb-io/Acontext: Agent Skills as a Memory Layer · GitHub

**Source**: https://github.com/memodb-io/acontext

---

[Skip to content](https://github.com/memodb-io/acontext#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[memodb-io](https://github.com/memodb-io)

/
**[Acontext](https://github.com/memodb-io/Acontext)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmemodb-io%2FAcontext)You must be signed in to change notification settings
- [Fork
    315](https://github.com/login?return_to=%2Fmemodb-io%2FAcontext)
- 
[Star
          3.4k](https://github.com/login?return_to=%2Fmemodb-io%2FAcontext)

[https://github.com/memodb-io/Acontext](https://github.com/memodb-io/Acontext)

[Branches](https://github.com/memodb-io/Acontext/branches)[Tags](https://github.com/memodb-io/Acontext/tags)

[https://github.com/memodb-io/Acontext/branches](https://github.com/memodb-io/Acontext/branches)[https://github.com/memodb-io/Acontext/tags](https://github.com/memodb-io/Acontext/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,080 Commits1,080 Commits |  |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| charts/acontext | charts/acontext |  |  |
| dashboard | dashboard |  |  |
| docs | docs |  |  |
| landingpage | landingpage |  |  |
| onboard | onboard |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS-DOC.md | AGENTS-DOC.md |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| ROADMAP.md | ROADMAP.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://discord.acontext.io](https://discord.acontext.io)

[🌐 Website](https://acontext.io)       |      [📚 Document](https://docs.acontext.io)

[https://pypi.org/project/acontext/](https://pypi.org/project/acontext/)[https://www.npmjs.com/package/@acontext/acontext](https://www.npmjs.com/package/@acontext/acontext)[https://github.com/memodb-io/acontext/actions/workflows/core-test.yaml](https://github.com/memodb-io/acontext/actions/workflows/core-test.yaml)[https://github.com/memodb-io/acontext/actions/workflows/api-test.yaml](https://github.com/memodb-io/acontext/actions/workflows/api-test.yaml)[https://github.com/memodb-io/acontext/actions/workflows/cli-test.yaml](https://github.com/memodb-io/acontext/actions/workflows/cli-test.yaml)

[https://x.com/acontext_io](https://x.com/acontext_io)[https://discord.acontext.io](https://discord.acontext.io)

## What is Acontext?

[https://github.com/memodb-io/acontext#what-is-acontext](https://github.com/memodb-io/acontext#what-is-acontext)

Acontext is an open-source skill memory layer for AI agents. It **automatically** captures learnings from agent runs and stores them as **agent skill files** — files you can read, edit, and share across agents, LLMs, and frameworks.

If you want the agent you build to **learn from its mistakes** and **reuse what worked** — without opaque memory polluting your context — give Acontext a try.

## Skill is All You Need

[https://github.com/memodb-io/acontext#skill-is-all-you-need](https://github.com/memodb-io/acontext#skill-is-all-you-need)

Agent memory is getting increasingly complicated🤢 — hard to understand, hard to debug, and hard for users to inspect or correct. Acontext takes a different approach: if agent skills can represent every piece of knowledge an agent needs as simple files, so can the memory.

- **Acontext builds memory in the agent skills format**, so everyone can see and understand what the memory actually contains.
- **Skill is Memory, Memory is Skill**. Whether a skill comes from one you downloaded from Clawhub or one you created yourself, Acontext can follow it and evolve it over time.

## The Philosophy of Acontext

[https://github.com/memodb-io/acontext#the-philosophy-of-acontext](https://github.com/memodb-io/acontext#the-philosophy-of-acontext)

- **Plain file, any framework** — Skill memories are Markdown files. Use them with LangGraph, Claude, AI SDK, or anything that reads files. No embeddings, no API lock-in. Git, grep, and mount to the sandbox.
- **You design the structure** — Attach more skills to define the schema, naming, and file layout of the memory. For example: one file per contact, one per project by uploading a working context skill.
- **Progressive disclosure, not search** — The agent can use  `get_skill` and `get_skill_file` to fetch what it needs. Retrieval is by tool use and reasoning, not semantic top-k.
- **Download as ZIP, reuse anywhere** — Export skill files as ZIP. Run locally, in another agent, or with another LLM. No vendor lock-in; no re-embedding or migration step.

## How It Works

[https://github.com/memodb-io/acontext#how-it-works](https://github.com/memodb-io/acontext#how-it-works)

### Store — How skills get memorized?

[https://github.com/memodb-io/acontext#store--how-skills-get-memorized](https://github.com/memodb-io/acontext#store--how-skills-get-memorized)

```
flowchart LR
  A[Session messages] --> C[Task complete/failed]
  C --> D[Distillation]
  D --> E[Skill Agent]
  E --> F[Update Skills]
```

Loading

- **Session messages** — Conversation (and optionally tool calls, artifacts) is the raw input. Tasks are extracted from the message stream automatically (or inferred from explicit outcome reporting).
- **Task complete or failed** — When a task is marked done or failed (e.g. by agent report or automatic detection), that outcome is the trigger for learning.
- **Distillation** — An LLM pass infers from the conversation and execution trace what worked, what failed, and user preferences.
- **Skill Agent** — Decides where to store (existing skill or new) and writes according to your `SKILL.md` schema.
- **Update Skills** — Skills are updated. You define the structure in `SKILL.md`; the system does extraction, routing, and writing.

### Recall — How the agent uses skills on the next run

[https://github.com/memodb-io/acontext#recall--how-the-agent-uses-skills-on-the-next-run](https://github.com/memodb-io/acontext#recall--how-the-agent-uses-skills-on-the-next-run)

```
flowchart LR
  E[Any Agent] --> F[list_skills/get_skill]
  F --> G[Appear in context]
```

Loading

Give your agent **Skill Content Tools** (`get_skill`, `get_skill_file`). The agent decides what it needs, calls the tools, and gets the skill content. No embedding search — **progressive disclosure, agent in the loop**.

# 🪜 Use It to Improve your Agent

[https://github.com/memodb-io/acontext#-use-it-to-improve-your-agent](https://github.com/memodb-io/acontext#-use-it-to-improve-your-agent)

Claude Code:

```
Read https://acontext.io/SKILL.md and follow the instructions to install and configure Acontext for Claude Code
```

OpenClaw:

```
Read https://acontext.io/SKILL.md and follow the instructions to install and configure Acontext for OpenClaw
```

# 🚀 Step-by-step Quickstart

[https://github.com/memodb-io/acontext#-step-by-step-quickstart](https://github.com/memodb-io/acontext#-step-by-step-quickstart)

### Connect to Acontext

[https://github.com/memodb-io/acontext#connect-to-acontext](https://github.com/memodb-io/acontext#connect-to-acontext)

1. Go to [Acontext.io](https://acontext.io), claim your free credits.
2. Go through a one-click onboarding to get your API Key (starts with `sk-ac`)

![Dashboard](https://github.com/memodb-io/Acontext/raw/main/assets/onboard.png)
💻 Self-host Acontext

We have an `acontext-cli` to help you do a quick proof-of-concept. Download it first in your terminal:

```
curl -fsSL https://install.acontext.io | sh
```

You should have [docker](https://www.docker.com/get-started/) installed and an OpenAI API Key to start an Acontext backend on your computer:

```
mkdir acontext_server && cd acontext_server
acontext server up
```

> Make sure your LLM has the ability to [call tools](https://platform.openai.com/docs/guides/function-calling). By default, Acontext will use `gpt-4.1`.

`acontext server up` will create/use `.env` and `config.yaml` for Acontext, and create a `db` folder to persist data.

Once it's done, you can access the following endpoints:

- Acontext API Base URL: [http://localhost:8029/api/v1](http://localhost:8029/api/v1)
- Acontext Dashboard: [http://localhost:3000/](http://localhost:3000/)

### Install SDKs

[https://github.com/memodb-io/acontext#install-sdks](https://github.com/memodb-io/acontext#install-sdks)

We're maintaining Python [https://pypi.org/project/acontext/](https://pypi.org/project/acontext/) and Typescript [https://www.npmjs.com/package/@acontext/acontext](https://www.npmjs.com/package/@acontext/acontext) SDKs. The snippets below are using Python.

> Click the doc link to see TS SDK Quickstart.

```
pip install acontext
```

### Initialize Client

[https://github.com/memodb-io/acontext#initialize-client](https://github.com/memodb-io/acontext#initialize-client)

```
import os
from acontext import AcontextClient

# For cloud:
client = AcontextClient(
    api_key=os.getenv("ACONTEXT_API_KEY"),
)

# For self-hosted:
client = AcontextClient(
    base_url="http://localhost:8029/api/v1",
    api_key="sk-ac-your-root-api-bearer-token",
)
```

### Skill Memory in Action

[https://github.com/memodb-io/acontext#skill-memory-in-action](https://github.com/memodb-io/acontext#skill-memory-in-action)

Create a learning space, attach a session, and let the agent learn — skills are written as Markdown files automatically.

```
from acontext import AcontextClient

client = AcontextClient(api_key="sk-ac-...")

# Create a learning space and attach a session
space = client.learning_spaces.create()
session = client.sessions.create()
client.learning_spaces.learn(space.id, session_id=session.id)

# Run your agent, store messages — when tasks complete, learning runs automatically
client.sessions.store_message(session.id, blob={"role": "user", "content": "My name is Gus"})
client.sessions.store_message(session.id, blob={"role": "assistant", "content": "Hi Gus! How can I help you today?"})
# ... agent runs ...

# List learned skills (Markdown files)
client.learning_spaces.wait_for_learning(space.id, session_id=session.id)
skills = client.learning_spaces.list_skills(space.id)

# Download all skill files to a local directory
for skill in skills:
    client.skills.download(skill_id=skill.id, path=f"./skills/{skill.name}")
```

> `wait_for_learning` is a blocking helper for demo purposes. In production, task extraction and learning run in the background automatically — your agent never waits.

### More Features

[https://github.com/memodb-io/acontext#more-features](https://github.com/memodb-io/acontext#more-features)

- **[Context Engineering](https://docs.acontext.io/engineering/editing)** — Compress context with summaries and edit strategies
- **[Disk](https://docs.acontext.io/store/disk)** — Virtual, persistent filesystem for agents
- **[Sandbox](https://docs.acontext.io/store/sandbox)** — Isolated code execution with bash, Python, and [mountable skills](https://docs.acontext.io/tool/bash_tools#mounting-skills-in-sandbox)
- **[Agent Tools](https://docs.acontext.io/tool/whatis)** — Disk tools, sandbox tools, and skill tools for LLM function calling

# 🧐 Use Acontext to Build Agents

[https://github.com/memodb-io/acontext#-use-acontext-to-build-agents](https://github.com/memodb-io/acontext#-use-acontext-to-build-agents)

Download end-to-end scripts with `acontext`:

**Python**

```
acontext create my-proj --template-path "python/openai-basic"
```

More examples on Python:

- `python/openai-agent-basic`: openai agent sdk template
- `python/openai-agent-artifacts`: agent can edit and download artifacts
- `python/claude-agent-sdk`: claude agent sdk with `ClaudeAgentStorage`
- `python/agno-basic`: agno framework template
- `python/smolagents-basic`: smolagents (huggingface) template
- `python/interactive-agent-skill`: interactive sandbox with mountable agent skills

**Typescript**

```
acontext create my-proj --template-path "typescript/openai-basic"
```

More examples on Typescript:

- `typescript/vercel-ai-basic`: agent in @vercel/ai-sdk
- `typescript/claude-agent-sdk`: claude agent sdk with `ClaudeAgentStorage`
- `typescript/interactive-agent-skill`: interactive sandbox with mountable agent skills

Note

Check our example repo for more templates: [Acontext-Examples](https://github.com/memodb-io/Acontext-Examples).
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

