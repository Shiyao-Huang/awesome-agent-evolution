# Nghiauet/mcp-agent

- URL: https://github.com/Nghiauet/mcp-agent
- Platform: github.com
- Extraction status: ok
- content_timestamp: 2025-01
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- Query: site:twitter.com "MCP" "AI agent"

## Raw Content

## GitHub - Nghiauet/mcp-agent: Build effective agents using Model Context Protocol and simple workflow patterns · GitHub

**Source**: https://github.com/Nghiauet/mcp-agent

---

[Skip to content](https://github.com/Nghiauet/mcp-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Nghiauet](https://github.com/Nghiauet)

/
**[mcp-agent](https://github.com/Nghiauet/mcp-agent)**

Public

       forked from [lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent)

- [Notifications](https://github.com/login?return_to=%2FNghiauet%2Fmcp-agent)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FNghiauet%2Fmcp-agent)
- 
[Star
          0](https://github.com/login?return_to=%2FNghiauet%2Fmcp-agent)

[https://github.com/Nghiauet/mcp-agent](https://github.com/Nghiauet/mcp-agent)

[Branches](https://github.com/Nghiauet/mcp-agent/branches)[Tags](https://github.com/Nghiauet/mcp-agent/tags)

[https://github.com/Nghiauet/mcp-agent/branches](https://github.com/Nghiauet/mcp-agent/branches)[https://github.com/Nghiauet/mcp-agent/tags](https://github.com/Nghiauet/mcp-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History388 Commits388 Commits |  |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| examples | examples |  |  |
| schema | schema |  |  |
| scripts | scripts |  |  |
| src/mcp_agent | src/mcp_agent |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .python-version | .python-version |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| LLMS.txt | LLMS.txt |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| setup.py | setup.py |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://private-user-images.githubusercontent.com/25641935/407477454-6f4e40c4-dc88-47b6-b965-5856b69416d2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDEsIm5iZiI6MTc3OTMzOTMwMSwicGF0aCI6Ii8yNTY0MTkzNS80MDc0Nzc0NTQtNmY0ZTQwYzQtZGM4OC00N2I2LWI5NjUtNTg1NmI2OTQxNmQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ0OWU5Yzk5OTI1NDAyZDJlNmExY2RkMjgxOWNhN2JkMzI1YWJmYzI3YzUyMWQ2NzI4ZGUyMGQxOTkxM2NmZWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.fdsHFVIOm2PsdI4Z78COW0nyItIpYWqrcOLcFsbDryA](https://private-user-images.githubusercontent.com/25641935/407477454-6f4e40c4-dc88-47b6-b965-5856b69416d2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDEsIm5iZiI6MTc3OTMzOTMwMSwicGF0aCI6Ii8yNTY0MTkzNS80MDc0Nzc0NTQtNmY0ZTQwYzQtZGM4OC00N2I2LWI5NjUtNTg1NmI2OTQxNmQyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ0OWU5Yzk5OTI1NDAyZDJlNmExY2RkMjgxOWNhN2JkMzI1YWJmYzI3YzUyMWQ2NzI4ZGUyMGQxOTkxM2NmZWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.fdsHFVIOm2PsdI4Z78COW0nyItIpYWqrcOLcFsbDryA)

*Build effective agents with Model Context Protocol using simple, composable patterns.*

[Examples](https://github.com/lastmile-ai/mcp-agent/tree/main/examples)   |   [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)   |   [MCP](https://modelcontextprotocol.io/introduction)

[https://pypi.org/project/mcp-agent/](https://pypi.org/project/mcp-agent/)[https://github.com/lastmile-ai/mcp-agent/issues](https://github.com/lastmile-ai/mcp-agent/issues)[https://lmai.link/discord/mcp-agent](https://lmai.link/discord/mcp-agent)[https://camo.githubusercontent.com/f8ea7ffff169940a233594d2dbc33e239155a5e7b3b1072df9c50cf4cef22c4c/68747470733a2f2f696d672e736869656c64732e696f2f706570792f64742f6d63702d6167656e743f6c6162656c3d70797069253230253743253230646f776e6c6f616473](https://camo.githubusercontent.com/f8ea7ffff169940a233594d2dbc33e239155a5e7b3b1072df9c50cf4cef22c4c/68747470733a2f2f696d672e736869656c64732e696f2f706570792f64742f6d63702d6167656e743f6c6162656c3d70797069253230253743253230646f776e6c6f616473)[https://github.com/lastmile-ai/mcp-agent/blob/main/LICENSE](https://github.com/lastmile-ai/mcp-agent/blob/main/LICENSE)

## Overview

[https://github.com/Nghiauet/mcp-agent#overview](https://github.com/Nghiauet/mcp-agent#overview)

**`mcp-agent`** is a simple, composable framework to build agents using [Model Context Protocol](https://modelcontextprotocol.io/introduction).

**Inspiration**: Anthropic announced 2 foundational updates for AI application developers:

1. [Model Context Protocol](https://www.anthropic.com/news/model-context-protocol) - a standardized interface to let any software be accessible to AI assistants via MCP servers.
2. [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - a seminal writeup on simple, composable patterns for building production-ready AI agents.

`mcp-agent` puts these two foundational pieces into an AI application framework:

1. It handles the pesky business of managing the lifecycle of MCP server connections so you don't have to.
2. It implements every pattern described in Building Effective Agents, and does so in a *composable* way, allowing you to chain these patterns together.
3. **Bonus**: It implements [OpenAI's Swarm](https://github.com/openai/swarm) pattern for multi-agent orchestration, but in a model-agnostic way.

Altogether, this is the simplest and easiest way to build robust agent applications. Much like MCP, this project is in early development. We welcome all kinds of [contributions](https://github.com/Nghiauet/mcp-agent/blob/main/CONTRIBUTING.md), feedback and your help in growing this to become a new standard.

## Get Started

[https://github.com/Nghiauet/mcp-agent#get-started](https://github.com/Nghiauet/mcp-agent#get-started)

We recommend using [uv](https://docs.astral.sh/uv/) to manage your Python projects:

```
uv add "mcp-agent"
```

Alternatively:

```
pip install mcp-agent
```

### Quickstart

[https://github.com/Nghiauet/mcp-agent#quickstart](https://github.com/Nghiauet/mcp-agent#quickstart)

Tip

The [examples](https://github.com/Nghiauet/mcp-agent/blob/main/examples) directory has several example applications to get started with. To run an example, clone this repo, then:

```
cd examples/basic/mcp_basic_agent # Or any other example
cp mcp_agent.secrets.yaml.example mcp_agent.secrets.yaml # Update API keys
uv run main.py
```

Here is a basic "finder" agent that uses the fetch and filesystem servers to look up a file, read a blog and write a tweet. [Example link](https://github.com/Nghiauet/mcp-agent/blob/main/examples/basic/mcp_basic_agent):

finder_agent.py

```
import asyncio
import os

from mcp_agent.app import MCPApp
from mcp_agent.agents.agent import Agent
from mcp_agent.workflows.llm.augmented_llm_openai import OpenAIAugmentedLLM

app = MCPApp(name="hello_world_agent")

async def example_usage():
    async with app.run() as mcp_agent_app:
        logger = mcp_agent_app.logger
        # This agent can read the filesystem or fetch URLs
        finder_agent = Agent(
            name="finder",
            instruction="""You can read local files or fetch URLs.
                Return the requested information when asked.""",
            server_names=["fetch", "filesystem"], # MCP servers this Agent can use
        )

        async with finder_agent:
            # Automatically initializes the MCP servers and adds their tools for LLM use
            tools = await finder_agent.list_tools()
            logger.info(f"Tools available:", data=tools)

            # Attach an OpenAI LLM to the agent (defaults to GPT-4o)
            llm = await finder_agent.attach_llm(OpenAIAugmentedLLM)

            # This will perform a file lookup and read using the filesystem server
            result = await llm.generate_str(
                message="Show me what's in README.md verbatim"
            )
            logger.info(f"README.md contents: {result}")

            # Uses the fetch server to fetch the content from URL
            result = await llm.generate_str(
                message="Print the first two paragraphs from https://www.anthropic.com/research/building-effective-agents"
            )
            logger.info(f"Blog intro: {result}")

            # Multi-turn interactions by default
            result = await llm.generate_str("Summarize that in a 128-char tweet")
            logger.info(f"Tweet: {result}")

if __name__ == "__main__":
    asyncio.run(example_usage())
```

mcp_agent.config.yaml

```
execution_engine: asyncio
logger:
  transports: [console] # You can use [file, console] for both
  level: debug
  path: "logs/mcp-agent.jsonl" # Used for file transport
  # For dynamic log filenames:
  # path_settings:
  #   path_pattern: "logs/mcp-agent-{unique_id}.jsonl"
  #   unique_id: "timestamp"  # Or "session_id"
  #   timestamp_format: "%Y%m%d_%H%M%S"

mcp:
  servers:
    fetch:
      command: "uvx"
      args: ["mcp-server-fetch"]
    filesystem:
      command: "npx"
      args:
        [
          "-y",
          "@modelcontextprotocol/server-filesystem",
          "<add_your_directories>",
        ]

openai:
  # Secrets (API keys, etc.) are stored in an mcp_agent.secrets.yaml file which can be gitignored
  default_model: gpt-4o
```

Agent output[https://private-user-images.githubusercontent.com/25641935/407786779-eaa60fdf-bcc6-460b-926e-6fa8534e9089.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDEsIm5iZiI6MTc3OTMzOTMwMSwicGF0aCI6Ii8yNTY0MTkzNS80MDc3ODY3NzktZWFhNjBmZGYtYmNjNi00NjBiLTkyNmUtNmZhODUzNGU5MDg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThiYzk2MzgwZmNkOTYxZTI2YjQ3Y2VmMDYwODJhMjUwZWVjMzkyYjI1Mzk4ODc1ZDViZGEyNjY2MDVhYzcwN2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.Oadefe2ONWlLplstLYVATTKCcxOkBscInTOgSncSUow](https://private-user-images.githubusercontent.com/25641935/407786779-eaa60fdf-bcc6-460b-926e-6fa8534e9089.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDEsIm5iZiI6MTc3OTMzOTMwMSwicGF0aCI6Ii8yNTY0MTkzNS80MDc3ODY3NzktZWFhNjBmZGYtYmNjNi00NjBiLTkyNmUtNmZhODUzNGU5MDg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThiYzk2MzgwZmNkOTYxZTI2YjQ3Y2VmMDYwODJhMjUwZWVjMzkyYjI1Mzk4ODc1ZDViZGEyNjY2MDVhYzcwN2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.Oadefe2ONWlLplstLYVATTKCcxOkBscInTOgSncSUow)

## Table of Contents

[https://github.com/Nghiauet/mcp-agent#table-of-contents](https://github.com/Nghiauet/mcp-agent#table-of-contents)

- [Why use mcp-agent?](https://github.com/Nghiauet/mcp-agent#why-use-mcp-agent)
- [Example Applications](https://github.com/Nghiauet/mcp-agent#examples)
  - [Claude Desktop](https://github.com/Nghiauet/mcp-agent#claude-desktop)
  - [Streamlit](https://github.com/Nghiauet/mcp-agent#streamlit)
    - [Gmail Agent](https://github.com/Nghiauet/mcp-agent#gmail-agent)
    - [RAG](https://github.com/Nghiauet/mcp-agent#simple-rag-chatbot)

  - [Marimo](https://github.com/Nghiauet/mcp-agent#marimo)
  - [Python](https://github.com/Nghiauet/mcp-agent#python)
    - [Swarm (CLI)](https://github.com/Nghiauet/mcp-agent#swarm)

- [Core Concepts](https://github.com/Nghiauet/mcp-agent#core-components)
- [Workflows Patterns](https://github.com/Nghiauet/mcp-agent#workflows)
  - [Augmented LLM](https://github.com/Nghiauet/mcp-agent#augmentedllm)
  - [Parallel](https://github.com/Nghiauet/mcp-agent#parallel)
  - [Router](https://github.com/Nghiauet/mcp-agent#router)
  - [Intent-Classifier](https://github.com/Nghiauet/mcp-agent#intentclassifier)
  - [Orchestrator-Workers](https://github.com/Nghiauet/mcp-agent#orchestrator-workers)
  - [Evaluator-Optimizer](https://github.com/Nghiauet/mcp-agent#evaluator-optimizer)
  - [OpenAI Swarm](https://github.com/Nghiauet/mcp-agent#swarm-1)

- [Advanced](https://github.com/Nghiauet/mcp-agent#advanced)
  - [Composing multiple workflows](https://github.com/Nghiauet/mcp-agent#composability)
  - [Signaling and Human input](https://github.com/Nghiauet/mcp-agent#signaling-and-human-input)
  - [App Config](https://github.com/Nghiauet/mcp-agent#app-config)
  - [MCP Server Management](https://github.com/Nghiauet/mcp-agent#mcp-server-management)

- [Contributing](https://github.com/Nghiauet/mcp-agent#contributing)
- [Roadmap](https://github.com/Nghiauet/mcp-agent#roadmap)
- [FAQs](https://github.com/Nghiauet/mcp-agent#faqs)

## Why use `mcp-agent`?

[https://github.com/Nghiauet/mcp-agent#why-use-mcp-agent](https://github.com/Nghiauet/mcp-agent#why-use-mcp-agent)

There are too many AI frameworks out there already. But `mcp-agent` is the only one that is purpose-built for a shared protocol - [MCP](https://modelcontextprotocol.io/introduction). It is also the most lightweight, and is closer to an agent pattern library than a framework.

As [more services become MCP-aware](https://github.com/punkpeye/awesome-mcp-servers), you can use mcp-agent to build robust and controllable AI agents that can leverage those services out-of-the-box.

## Examples

[https://github.com/Nghiauet/mcp-agent#examples](https://github.com/Nghiauet/mcp-agent#examples)

Before we go into the core concepts of mcp-agent, let's show what you can build with it.

In short, you can build any kind of AI application with mcp-agent: multi-agent collaborative workflows, human-in-the-loop workflows, RAG pipelines and more.

### Claude Desktop

[https://github.com/Nghiauet/mcp-agent#claude-desktop](https://github.com/Nghiauet/mcp-agent#claude-desktop)

You can integrate mcp-agent apps into MCP clients like Claude Desktop.

#### mcp-agent server

[https://github.com/Nghiauet/mcp-agent#mcp-agent-server](https://github.com/Nghiauet/mcp-agent#mcp-agent-server)

This app wraps an mcp-agent application inside an MCP server, and exposes that server to Claude Desktop. The app exposes agents and workflows that Claude Desktop can invoke to service of the user's request.

mcp-agent-server-demo.mp4

This demo shows a multi-agent evaluation task where each agent evaluates aspects of an input poem, and then an aggregator summarizes their findings into a final response.

**Details**: Starting from a user's request over text, the application:

- dynamically defines agents to do the job
- uses the appropriate workflow to orchestrate those agents (in this case the Parallel workflow)

**Link to code**: [examples/basic/mcp_agent_server](https://github.com/Nghiauet/mcp-agent/blob/main/examples/basic/mcp_agent_server)

Note

Huge thanks to [Jerron Lim (@StreetLamb)](https://github.com/StreetLamb) for developing and contributing this example!

### Streamlit

[https://github.com/Nghiauet/mcp-agent#streamlit](https://github.com/Nghiauet/mcp-agent#streamlit)

You can deploy mcp-agent apps using Streamlit.

#### Gmail agent

[https://github.com/Nghiauet/mcp-agent#gmail-agent](https://github.com/Nghiauet/mcp-agent#gmail-agent)

This app is able to perform read and write actions on gmail using text prompts -- i.e. read, delete, send emails, mark as read/unread, etc. It uses an MCP server for Gmail.

Screen.Recording.2025-01-28.at.7.37.24.PM.mov

**Link to code**: [gmail-mcp-server](https://github.com/jasonsum/gmail-mcp-server/blob/add-mcp-agent-streamlit/streamlit_app.py)

Note

Huge thanks to [Jason Summer (@jasonsum)](https://github.com/jasonsum) for developing and contributing this example!

#### Simple RAG Chatbot

[https://github.com/Nghiauet/mcp-agent#simple-rag-chatbot](https://github.com/Nghiauet/mcp-agent#simple-rag-chatbot)

This app uses a Qdrant vector database (via an MCP server) to do Q&A over a corpus of text.

streamlit-mcp-rag-agent-demo.mp4

**Link to code**: [examples/usecases/streamlit_mcp_rag_agent](https://github.com/Nghiauet/mcp-agent/blob/main/examples/usecases/streamlit_mcp_rag_agent)

Note

Huge thanks to [Jerron Lim (@StreetLamb)](https://github.com/StreetLamb) for developing and contributing this example!

### Marimo

[https://github.com/Nghiauet/mcp-agent#marimo](https://github.com/Nghiauet/mcp-agent#marimo)

[Marimo](https://github.com/marimo-team/marimo) is a reactive Python notebook that replaces Jupyter and Streamlit. Here's the "file finder" agent from [Quickstart](https://github.com/Nghiauet/mcp-agent#quickstart) implemented in Marimo:

[https://private-user-images.githubusercontent.com/25641935/407694927-139a95a5-e3ac-4ea7-9c8f-bad6577e8597.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDEsIm5iZiI6MTc3OTMzOTMwMSwicGF0aCI6Ii8yNTY0MTkzNS80MDc2OTQ5MjctMTM5YTk1YTUtZTNhYy00ZWE3LTljOGYtYmFkNjU3N2U4NTk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2ZWE2ZjQxNjNhOWVkYTU5NGViNTliYTIyOWU5NGE0ODM5N2ExZGRmNDc0YWIwMWRlYTQzOGRiMDFhMTE2NGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.cOGtFchOEaU9FZe_HJiwXw9xuHxyM7HaG23HwkmOZzI](https://private-user-images.githubusercontent.com/25641935/407694927-139a95a5-e3ac-4ea7-9c8f-bad6577e8597.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDEsIm5iZiI6MTc3OTMzOTMwMSwicGF0aCI6Ii8yNTY0MTkzNS80MDc2OTQ5MjctMTM5YTk1YTUtZTNhYy00ZWE3LTljOGYtYmFkNjU3N2U4NTk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2ZWE2ZjQxNjNhOWVkYTU5NGViNTliYTIyOWU5NGE0ODM5N2ExZGRmNDc0YWIwMWRlYTQzOGRiMDFhMTE2NGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.cOGtFchOEaU9FZe_HJiwXw9xuHxyM7HaG23HwkmOZzI)

**Link to code**: [examples/usecases/marimo_mcp_basic_agent](https://github.com/Nghiauet/mcp-agent/blob/main/examples/usecases/marimo_mcp_basic_agent)

Note

Huge thanks to [Akshay Agrawal (@akshayka)](https://github.com/akshayka) for developing and contributing this example!

### Python

[https://github.com/Nghiauet/mcp-agent#python](https://github.com/Nghiauet/mcp-agent#python)

You can write mcp-agent apps as Python scripts or Jupyter notebooks.

#### Swarm

[https://github.com/Nghiauet/mcp-agent#swarm](https://github.com/Nghiauet/mcp-agent#swarm)

This example demonstrates a multi-agent setup for handling different customer service requests in an airline context using the Swarm workflow pattern. The agents can triage requests, handle flight modifications, cancellations, and lost baggage cases.

swarm_flight_support.mov

**Link to code**: [examples/workflows/workflow_swarm](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_swarm)

## Core Components

[https://github.com/Nghiauet/mcp-agent#core-components](https://github.com/Nghiauet/mcp-agent#core-components)

The following are the building blocks of the mcp-agent framework:

- **[MCPApp](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/app.py)**: global state and app configuration
- **MCP server management**: [gen_client](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/mcp/gen_client.py) and [MCPConnectionManager](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/mcp/mcp_connection_manager.py) to easily connect to MCP servers.
- **[Agent](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/agents/agent.py)**: An Agent is an entity that has access to a set of MCP servers and exposes them to an LLM as tool calls. It has a name and purpose (instruction).
- **[AugmentedLLM](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/llm/augmented_llm.py)**: An LLM that is enhanced with tools provided from a collection of MCP servers. Every Workflow pattern described below is an `AugmentedLLM` itself, allowing you to compose and chain them together.

Everything in the framework is a derivative of these core capabilities.

## Workflows

[https://github.com/Nghiauet/mcp-agent#workflows](https://github.com/Nghiauet/mcp-agent#workflows)

mcp-agent provides implementations for every pattern in Anthropic’s [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents), as well as the OpenAI [Swarm](https://github.com/openai/swarm) pattern. Each pattern is model-agnostic, and exposed as an `AugmentedLLM`, making everything very composable.

### AugmentedLLM

[https://github.com/Nghiauet/mcp-agent#augmentedllm](https://github.com/Nghiauet/mcp-agent#augmentedllm)

[AugmentedLLM](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/llm/augmented_llm.py) is an LLM that has access to MCP servers and functions via Agents.

LLM providers implement the AugmentedLLM interface to expose 3 functions:

- `generate`: Generate message(s) given a prompt, possibly over multiple iterations and making tool calls as needed.
- `generate_str`: Calls `generate` and returns result as a string output.
- `generate_structured`: Uses [Instructor](https://github.com/instructor-ai/instructor) to return the generated result as a Pydantic model.

Additionally, `AugmentedLLM` has memory, to keep track of long or short-term history.

Example

```
from mcp_agent.agents.agent import Agent
from mcp_agent.workflows.llm.augmented_llm_anthropic import AnthropicAugmentedLLM

finder_agent = Agent(
    name="finder",
    instruction="You are an agent with filesystem + fetch access. Return the requested file or URL contents.",
    server_names=["fetch", "filesystem"],
)

async with finder_agent:
   llm = await finder_agent.attach_llm(AnthropicAugmentedLLM)

   result = await llm.generate_str(
      message="Print the first 2 paragraphs of https://www.anthropic.com/research/building-effective-agents",
      # Can override model, tokens and other defaults
   )
   logger.info(f"Result: {result}")

   # Multi-turn conversation
   result = await llm.generate_str(
      message="Summarize those paragraphs in a 128 character tweet",
   )
   logger.info(f"Result: {result}")
```

### [Parallel](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/parallel/parallel_llm.py)

[https://github.com/Nghiauet/mcp-agent#parallel](https://github.com/Nghiauet/mcp-agent#parallel)

[https://camo.githubusercontent.com/bc296b021f0031368fd391720966921676a9a02da53efd0ab0921e0f9e8d8e66/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246343036626230333263613030376664313632346632363161663731376437306536636138363238362d3234303178313030302e706e6726773d3338343026713d3735](https://camo.githubusercontent.com/bc296b021f0031368fd391720966921676a9a02da53efd0ab0921e0f9e8d8e66/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246343036626230333263613030376664313632346632363161663731376437306536636138363238362d3234303178313030302e706e6726773d3338343026713d3735)

Fan-out tasks to multiple sub-agents and fan-in the results. Each subtask is an AugmentedLLM, as is the overall Parallel workflow, meaning each subtask can optionally be a more complex workflow itself.

Note

**[Link to full example](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_parallel/main.py)**

Example

```
proofreader = Agent(name="proofreader", instruction="Review grammar...")
fact_checker = Agent(name="fact_checker", instruction="Check factual consistency...")
style_enforcer = Agent(name="style_enforcer", instruction="Enforce style guidelines...")

grader = Agent(name="grader", instruction="Combine feedback into a structured report.")

parallel = ParallelLLM(
    fan_in_agent=grader,
    fan_out_agents=[proofreader, fact_checker, style_enforcer],
    llm_factory=OpenAIAugmentedLLM,
)

result = await parallel.generate_str("Student short story submission: ...", RequestParams(model="gpt4-o"))
```

### [Router](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/router)

[https://github.com/Nghiauet/mcp-agent#router](https://github.com/Nghiauet/mcp-agent#router)

[https://camo.githubusercontent.com/369e4ae55fd8ca8ae41bdb0fc79efa219d268de241068a2f776a99983b836aaf/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246356330633065396665346465663062353834633034643337383439393431646135356535653731632d3234303178313030302e706e6726773d3338343026713d3735](https://camo.githubusercontent.com/369e4ae55fd8ca8ae41bdb0fc79efa219d268de241068a2f776a99983b836aaf/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246356330633065396665346465663062353834633034643337383439393431646135356535653731632d3234303178313030302e706e6726773d3338343026713d3735)

Given an input, route to the `top_k` most relevant categories. A category can be an Agent, an MCP server or a regular function.

mcp-agent provides several router implementations, including:

- [EmbeddingRouter](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/router/router_embedding.py): uses embedding models for classification
- [LLMRouter](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/router/router_llm.py): uses LLMs for classification

Note

**[Link to full example](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_router/main.py)**

Example

```
def print_hello_world:
     print("Hello, world!")

finder_agent = Agent(name="finder", server_names=["fetch", "filesystem"])
writer_agent = Agent(name="writer", server_names=["filesystem"])

llm = OpenAIAugmentedLLM()
router = LLMRouter(
    llm=llm,
    agents=[finder_agent, writer_agent],
    functions=[print_hello_world],
)

results = await router.route( # Also available: route_to_agent, route_to_server
    request="Find and print the contents of README.md verbatim",
    top_k=1
)
chosen_agent = results[0].result
async with chosen_agent:
    ...
```

### [IntentClassifier](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/intent_classifier)

[https://github.com/Nghiauet/mcp-agent#intentclassifier](https://github.com/Nghiauet/mcp-agent#intentclassifier)

A close sibling of Router, the Intent Classifier pattern identifies the `top_k` Intents that most closely match a given input. Just like a Router, mcp-agent provides both an [embedding](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/intent_classifier/intent_classifier_embedding.py) and [LLM-based](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/intent_classifier/intent_classifier_llm.py) intent classifier.

### [Evaluator-Optimizer](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/evaluator_optimizer/evaluator_optimizer.py)

[https://github.com/Nghiauet/mcp-agent#evaluator-optimizer](https://github.com/Nghiauet/mcp-agent#evaluator-optimizer)

[https://camo.githubusercontent.com/8415384e0ab80340271f4adc081e695063fb7a33c869d8d0ea4c6d72098e8775/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246313466353165363430366363623239653639356461343862313730313765383939613631313963372d3234303178313030302e706e6726773d3338343026713d3735](https://camo.githubusercontent.com/8415384e0ab80340271f4adc081e695063fb7a33c869d8d0ea4c6d72098e8775/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246313466353165363430366363623239653639356461343862313730313765383939613631313963372d3234303178313030302e706e6726773d3338343026713d3735)

One LLM (the “optimizer”) refines a response, another (the “evaluator”) critiques it until a response exceeds a quality criteria.

Note

**[Link to full example](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_evaluator_optimizer/main.py)**

Example

```
optimizer = Agent(name="cover_letter_writer", server_names=["fetch"], instruction="Generate a cover letter ...")
evaluator = Agent(name="critiquer", instruction="Evaluate clarity, specificity, relevance...")

llm = EvaluatorOptimizerLLM(
    optimizer=optimizer,
    evaluator=evaluator,
    llm_factory=OpenAIAugmentedLLM,
    min_rating=QualityRating.EXCELLENT, # Keep iterating until the minimum quality bar is reached
)

result = await eo_llm.generate_str("Write a job cover letter for an AI framework developer role at LastMile AI.")
print("Final refined cover letter:", result)
```

### [Orchestrator-workers](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/orchestrator/orchestrator.py)

[https://github.com/Nghiauet/mcp-agent#orchestrator-workers](https://github.com/Nghiauet/mcp-agent#orchestrator-workers)

[https://camo.githubusercontent.com/b49b8fb9feec62caa95e42e16754398d2faf6605567f623684ce7baed555554c/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246383938356663363833666165343738306662333465616231333635616237386337653531626338652d3234303178313030302e706e6726773d3338343026713d3735](https://camo.githubusercontent.com/b49b8fb9feec62caa95e42e16754398d2faf6605567f623684ce7baed555554c/68747470733a2f2f7777772e616e7468726f7069632e636f6d2f5f6e6578742f696d6167653f75726c3d68747470732533412532462532467777772d63646e2e616e7468726f7069632e636f6d253246696d61676573253246347a727a6f76626225324677656273697465253246383938356663363833666165343738306662333465616231333635616237386337653531626338652d3234303178313030302e706e6726773d3338343026713d3735)

A higher-level LLM generates a plan, then assigns them to sub-agents, and synthesizes the results. The Orchestrator workflow automatically parallelizes steps that can be done in parallel, and blocks on dependencies.

Note

**[Link to full example](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_orchestrator_worker/main.py)**

Example

```
finder_agent = Agent(name="finder", server_names=["fetch", "filesystem"])
writer_agent = Agent(name="writer", server_names=["filesystem"])
proofreader = Agent(name="proofreader", ...)
fact_checker = Agent(name="fact_checker", ...)
style_enforcer = Agent(name="style_enforcer", instructions="Use APA style guide from ...", server_names=["fetch"])

orchestrator = Orchestrator(
    llm_factory=AnthropicAugmentedLLM,
    available_agents=[finder_agent, writer_agent, proofreader, fact_checker, style_enforcer],
)

task = "Load short_story.md, evaluate it, produce a graded_report.md with multiple feedback aspects."
result = await orchestrator.generate_str(task, RequestParams(model="gpt-4o"))
print(result)
```

### [Swarm](https://github.com/Nghiauet/mcp-agent/blob/main/src/mcp_agent/workflows/swarm/swarm.py)

[https://github.com/Nghiauet/mcp-agent#swarm-1](https://github.com/Nghiauet/mcp-agent#swarm-1)

OpenAI has an experimental multi-agent pattern called [Swarm](https://github.com/openai/swarm), which we provide a model-agnostic reference implementation for in mcp-agent.

[https://github.com/openai/swarm/blob/main/assets/swarm_diagram.png?raw=true](https://github.com/openai/swarm/blob/main/assets/swarm_diagram.png?raw=true)

The mcp-agent Swarm pattern works seamlessly with MCP servers, and is exposed as an `AugmentedLLM`, allowing for composability with other patterns above.

Note

**[Link to full example](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_swarm/main.py)**

Example

```
triage_agent = SwarmAgent(...)
flight_mod_agent = SwarmAgent(...)
lost_baggage_agent = SwarmAgent(...)

# The triage agent decides whether to route to flight_mod_agent or lost_baggage_agent
swarm = AnthropicSwarm(agent=triage_agent, context_variables={...})

test_input = "My bag was not delivered!"
result = await swarm.generate_str(test_input)
print("Result:", result)
```

## Advanced

[https://github.com/Nghiauet/mcp-agent#advanced](https://github.com/Nghiauet/mcp-agent#advanced)

### Composability

[https://github.com/Nghiauet/mcp-agent#composability](https://github.com/Nghiauet/mcp-agent#composability)

An example of composability is using an [Evaluator-Optimizer](https://github.com/Nghiauet/mcp-agent#evaluator-optimizer) workflow as the planner LLM inside the [Orchestrator](https://github.com/Nghiauet/mcp-agent#orchestrator-workers) workflow. Generating a high-quality plan to execute is important for robust behavior, and an evaluator-optimizer can help ensure that.

Doing so is seamless in mcp-agent, because each workflow is implemented as an `AugmentedLLM`.

Example

```
optimizer = Agent(name="plan_optimizer", server_names=[...], instruction="Generate a plan given an objective ...")
evaluator = Agent(name="plan_evaluator", instruction="Evaluate logic, ordering and precision of plan......")

planner_llm = EvaluatorOptimizerLLM(
    optimizer=optimizer,
    evaluator=evaluator,
    llm_factory=OpenAIAugmentedLLM,
    min_rating=QualityRating.EXCELLENT,
)

orchestrator = Orchestrator(
    llm_factory=AnthropicAugmentedLLM,
    available_agents=[finder_agent, writer_agent, proofreader, fact_checker, style_enforcer],
    planner=planner_llm # It's that simple
)

...
```

### Signaling and Human Input

[https://github.com/Nghiauet/mcp-agent#signaling-and-human-input](https://github.com/Nghiauet/mcp-agent#signaling-and-human-input)

**Signaling**: The framework can pause/resume tasks. The agent or LLM might “signal” that it needs user input, so the workflow awaits. A developer may signal during a workflow to seek approval or review before continuing with a workflow.

**Human Input**: If an Agent has a `human_input_callback`, the LLM can call a `__human_input__` tool to request user input mid-workflow.

Example

The [Swarm example](https://github.com/Nghiauet/mcp-agent/blob/main/examples/workflows/workflow_swarm/main.py) shows this in action.

```
from mcp_agent.human_input.handler import console_input_callback

lost_baggage = SwarmAgent(
    name="Lost baggage traversal",
    instruction=lambda context_variables: f"""
        {
        FLY_AIR_AGENT_PROMPT.format(
            customer_context=context_variables.get("customer_context", "None"),
            flight_context=context_variables.get("flight_context", "None"),
        )
    }\n Lost baggage policy: policies/lost_baggage_policy.md""",
    functions=[
        escalate_to_agent,
        initiate_baggage_search,
        transfer_to_triage,
        case_resolved,
    ],
    server_names=["fetch", "filesystem"],
    human_input_callback=console_input_callback, # Request input from the console
)
```

### App Config

[https://github.com/Nghiauet/mcp-agent#app-config](https://github.com/Nghiauet/mcp-agent#app-config)

Create an [mcp_agent.config.yaml](https://github.com/Nghiauet/mcp-agent/blob/main/schema/mcp-agent.config.schema.json) and a gitignored [mcp_agent.secrets.yaml](https://github.com/Nghiauet/mcp-agent/blob/main/examples/basic/mcp_basic_agent/mcp_agent.secrets.yaml.example) to define MCP app
