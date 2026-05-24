---
repo: lastmile-ai/mcp-agent
url: https://github.com/lastmile-ai/mcp-agent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - lastmile-ai/mcp-agent: Build effective agents using Model Context Protocol and simple workflow patterns · GitHub

**Source**: https://github.com/lastmile-ai/mcp-agent

---

[Skip to content](https://github.com/lastmile-ai/mcp-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[lastmile-ai](https://github.com/lastmile-ai)

/
**[mcp-agent](https://github.com/lastmile-ai/mcp-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2Flastmile-ai%2Fmcp-agent)You must be signed in to change notification settings
- [Fork
    840](https://github.com/login?return_to=%2Flastmile-ai%2Fmcp-agent)
- 
[Star
          8.3k](https://github.com/login?return_to=%2Flastmile-ai%2Fmcp-agent)

[https://github.com/lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent)

[Branches](https://github.com/lastmile-ai/mcp-agent/branches)[Tags](https://github.com/lastmile-ai/mcp-agent/tags)

[https://github.com/lastmile-ai/mcp-agent/branches](https://github.com/lastmile-ai/mcp-agent/branches)[https://github.com/lastmile-ai/mcp-agent/tags](https://github.com/lastmile-ai/mcp-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History767 Commits767 Commits |  |  |  |
| .github | .github |  |  |
| .vscode | .vscode |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| logs | logs |  |  |
| schema | schema |  |  |
| scripts | scripts |  |  |
| src/mcp_agent | src/mcp_agent |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .prettierignore | .prettierignore |  |  |
| .python-version | .python-version |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| LLMS.txt | LLMS.txt |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| gallery.md | gallery.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://docs.mcp-agent.com](https://docs.mcp-agent.com)

*Build effective agents with Model Context Protocol using simple, composable patterns.*

[Examples](https://github.com/lastmile-ai/mcp-agent/tree/main/examples)   |   [Building Effective Agents](https://docs.mcp-agent.com/mcp-agent-sdk/effective-patterns/overview)   |   [MCP](https://modelcontextprotocol.io/introduction)

[https://docs.mcp-agent.com](https://docs.mcp-agent.com)[https://pypi.org/project/mcp-agent/](https://pypi.org/project/mcp-agent/)[https://camo.githubusercontent.com/f8ea7ffff169940a233594d2dbc33e239155a5e7b3b1072df9c50cf4cef22c4c/68747470733a2f2f696d672e736869656c64732e696f2f706570792f64742f6d63702d6167656e743f6c6162656c3d70797069253230253743253230646f776e6c6f616473](https://camo.githubusercontent.com/f8ea7ffff169940a233594d2dbc33e239155a5e7b3b1072df9c50cf4cef22c4c/68747470733a2f2f696d672e736869656c64732e696f2f706570792f64742f6d63702d6167656e743f6c6162656c3d70797069253230253743253230646f776e6c6f616473)[https://github.com/lastmile-ai/mcp-agent/blob/main/LICENSE](https://github.com/lastmile-ai/mcp-agent/blob/main/LICENSE)[https://lmai.link/discord/mcp-agent](https://lmai.link/discord/mcp-agent)

[https://trendshift.io/repositories/13216](https://trendshift.io/repositories/13216)

## Overview

[https://github.com/lastmile-ai/mcp-agent#overview](https://github.com/lastmile-ai/mcp-agent#overview)

**`mcp-agent`** is a simple, composable framework to build effective agents using [Model Context Protocol](https://modelcontextprotocol.io/introduction).

Note

mcp-agent's vision is that *MCP is all you need to build agents, and that simple patterns are more robust than complex architectures for shipping high-quality agents*.

`mcp-agent` gives you the following:

1. **Full MCP support**: It *fully* implements MCP, and handles the pesky business of managing the lifecycle of MCP server connections so you don't have to.
2. **Effective agent patterns**: It implements every pattern described in Anthropic's [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) in a *composable* way, allowing you to chain these patterns together.
3. **Durable agents**: It works for simple agents and scales to sophisticated workflows built on [Temporal](https://temporal.io/) so you can pause, resume, and recover without any API changes to your agent.

Altogether, this is the simplest and easiest way to build robust agent applications.

We welcome all kinds of [contributions](https://github.com/lastmile-ai/mcp-agent/blob/main/CONTRIBUTING.md), feedback and your help in improving this project.

**Minimal example**

```
import asyncio

from mcp_agent.app import MCPApp
from mcp_agent.agents.agent import Agent
from mcp_agent.workflows.llm.augmented_llm_openai import OpenAIAugmentedLLM

app = MCPApp(name="hello_world")

async def main():
    async with app.run():
        agent = Agent(
            name="finder",
            instruction="Use filesystem and fetch to answer questions.",
            server_names=["filesystem", "fetch"],
        )
        async with agent:
            llm = await agent.attach_llm(OpenAIAugmentedLLM)
            answer = await llm.generate_str("Summarize README.md in two sentences.")
            print(answer)

if __name__ == "__main__":
    asyncio.run(main())

# Add your LLM API key to `mcp_agent.secrets.yaml` or set it in env.
# The [Getting Started guide](https://docs.mcp-agent.com/get-started/overview) walks through configuration and secrets in detail.
```

## At a glance

[https://github.com/lastmile-ai/mcp-agent#at-a-glance](https://github.com/lastmile-ai/mcp-agent#at-a-glance)

| Build an Agent
      Connect LLMs to MCP servers in simple, composable patterns like map-reduce, orchestrator, evaluator-optimizer, router & more.
      
        Quick Start ↗ | 
        Docs ↗ | Create any kind of MCP Server
      Create MCP servers with a FastMCP-compatible API. You can even expose agents as MCP servers.
      
        MCP Agent Server ↗ | 
        🎨 Build a ChatGPT App ↗ | 
        Examples ↗ |
|---|---|
| Full MCP Support
      Core: Tools ✅ Resources ✅ Prompts ✅ Notifications ✅
      Advanced: OAuth ✅ Sampling ✅ Elicitation ✅ Roots ✅
      
        Examples ↗ | 
        MCP Docs ↗ | Durable Execution (Temporal)
      Scales to production workloads using Temporal as the agent runtime backend without any API changes.
      
        Docs ↗ | 
        Examples ↗ |
| ☁️ Deploy to Cloud
      Beta: Deploy agents yourself, or use mcp-c for a managed agent runtime. All apps are deployed as MCP servers.
      
        Demo ↗ |
        Cloud Quickstart ↗ | 
        Examples ↗ |  |

## Documentation & build with LLMs

[https://github.com/lastmile-ai/mcp-agent#documentation--build-with-llms](https://github.com/lastmile-ai/mcp-agent#documentation--build-with-llms)

mcp-agent's complete documentation is available at **[docs.mcp-agent.com](https://docs.mcp-agent.com)**, including full SDK guides, CLI reference, and advanced patterns. This readme gives a high-level overview to get you started.

- [llms-full.txt](https://docs.mcp-agent.com/llms-full.txt): contains entire documentation.
- [llms.txt](https://docs.mcp-agent.com/llms.txt): sitemap listing key pages in the docs.
- [docs MCP server](https://docs.mcp-agent.com/mcp)

## Table of Contents

[https://github.com/lastmile-ai/mcp-agent#table-of-contents](https://github.com/lastmile-ai/mcp-agent#table-of-contents)

- [Overview](https://github.com/lastmile-ai/mcp-agent#overview)
- [Minimal example](https://github.com/lastmile-ai/mcp-agent#minimal-example)
- [Quickstart](https://github.com/lastmile-ai/mcp-agent#get-started)
- [Why mcp-agent](https://github.com/lastmile-ai/mcp-agent#why-use-mcp-agent)
- [Core concepts](https://github.com/lastmile-ai/mcp-agent#core-components)
  - [MCPApp](https://github.com/lastmile-ai/mcp-agent#mcpapp)
  - [Agents & AgentSpec](https://github.com/lastmile-ai/mcp-agent#agents--agentspec)
  - [Augmented LLM](https://github.com/lastmile-ai/mcp-agent#augmented-llm)
  - [Workflows & decorators](https://github.com/lastmile-ai/mcp-agent#workflows--decorators)
  - [Configuration & secrets](https://github.com/lastmile-ai/mcp-agent#configuration--secrets)
  - [MCP integration](https://github.com/lastmile-ai/mcp-agent#mcp-integration)

- [Workflow patterns](https://github.com/lastmile-ai/mcp-agent#workflow-patterns)
- [CLI reference](https://github.com/lastmile-ai/mcp-agent#cli-reference)
- [Authentication](https://github.com/lastmile-ai/mcp-agent#authentication)
- [Advanced](https://github.com/lastmile-ai/mcp-agent#advanced)
  - [Observability & controls](https://github.com/lastmile-ai/mcp-agent#observability--controls)
  - [Composing workflows](https://github.com/lastmile-ai/mcp-agent#composing-workflows)
  - [Durable execution](https://github.com/lastmile-ai/mcp-agent#durable-execution)
  - [Agent servers](https://github.com/lastmile-ai/mcp-agent#agent-servers)
  - [Signals & human input](https://github.com/lastmile-ai/mcp-agent#signals--human-input)
  - [App configuration](https://github.com/lastmile-ai/mcp-agent#app-configuration)
  - [Icons](https://github.com/lastmile-ai/mcp-agent#icons)
  - [MCP server management](https://github.com/lastmile-ai/mcp-agent#mcp-server-management)

- [Cloud deployment](https://github.com/lastmile-ai/mcp-agent#cloud-deployment)
- [Examples](https://github.com/lastmile-ai/mcp-agent#examples)
- [FAQs](https://github.com/lastmile-ai/mcp-agent#faqs)
- [Community & contributions](https://github.com/lastmile-ai/mcp-agent#contributing)

## Get Started

[https://github.com/lastmile-ai/mcp-agent#get-started](https://github.com/lastmile-ai/mcp-agent#get-started)

Tip

The CLI is available via `uvx mcp-agent`. To get up and running, scaffold a project with `uvx mcp-agent init` and deploy with `uvx mcp-agent deploy my-agent`.

You can get up and running in 2 minutes by running these commands:

```
mkdir hello-mcp-agent && cd hello-mcp-agent
uvx mcp-agent init
uv init
uv add "mcp-agent[openai]"
# Add openai API key to `mcp_agent.secrets.yaml` or set `OPENAI_API_KEY`
uv run main.py
```

### Installation

[https://github.com/lastmile-ai/mcp-agent#installation](https://github.com/lastmile-ai/mcp-agent#installation)

We recommend using [uv](https://docs.astral.sh/uv/) to manage your Python projects (`uv init`).

```
uv add "mcp-agent"
```

Alternatively:

```
pip install mcp-agent
```

Also add optional packages for LLM providers (e.g. `uv add "mcp-agent[openai, anthropic, google, azure, bedrock]"`).

### Quickstart

[https://github.com/lastmile-ai/mcp-agent#quickstart](https://github.com/lastmile-ai/mcp-agent#quickstart)

Tip

The [examples](https://github.com/lastmile-ai/mcp-agent/blob/main/examples) directory has several example applications to get started with. To run an example, clone this repo (or generate one with `uvx mcp-agent init --template basic --dir my-first-agent`)

```
cd examples/basic/mcp_basic_agent # Or any other example
# Option A: secrets YAML
# cp mcp_agent.secrets.yaml.example mcp_agent.secrets.yaml && edit mcp_agent.secrets.yaml
uv run main.py
```

Here is a basic "finder" agent that uses the fetch and filesystem servers to look up a file, read a blog and write a tweet. [Example link](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/basic/mcp_basic_agent):

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

Agent output[https://private-user-images.githubusercontent.com/25641935/407786779-eaa60fdf-bcc6-460b-926e-6fa8534e9089.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk2OTcsIm5iZiI6MTc3OTI5OTM5NywicGF0aCI6Ii8yNTY0MTkzNS80MDc3ODY3NzktZWFhNjBmZGYtYmNjNi00NjBiLTkyNmUtNmZhODUzNGU5MDg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDk1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZiNDM0YjU0NzM0NDU1NjRlOTNmMmIzMzM5NDZkYmYwOTMwMjY0YzBlZDRmMThjMDNhZDc0ODU5ODk1YzhjZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.9b6mzbmA0fORreVEJldAfm8LSoutogTwMZ6_AH7N9dg](https://private-user-images.githubusercontent.com/25641935/407786779-eaa60fdf-bcc6-460b-926e-6fa8534e9089.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk2OTcsIm5iZiI6MTc3OTI5OTM5NywicGF0aCI6Ii8yNTY0MTkzNS80MDc3ODY3NzktZWFhNjBmZGYtYmNjNi00NjBiLTkyNmUtNmZhODUzNGU5MDg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDk1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZiNDM0YjU0NzM0NDU1NjRlOTNmMmIzMzM5NDZkYmYwOTMwMjY0YzBlZDRmMThjMDNhZDc0ODU5ODk1YzhjZTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.9b6mzbmA0fORreVEJldAfm8LSoutogTwMZ6_AH7N9dg)

## Why use `mcp-agent`?

[https://github.com/lastmile-ai/mcp-agent#why-use-mcp-agent](https://github.com/lastmile-ai/mcp-agent#why-use-mcp-agent)

There are too many AI frameworks out there already. But `mcp-agent` is the only one that is purpose-built for a shared protocol - [MCP](https://modelcontextprotocol.io/introduction).[mcp-agent](https://docs.mcp-agent.com/get-started/welcome) pairs Anthropic’s Building Effective Agents patterns with a batteries-included MCP runtime so you can focus on behaviour, not boilerplate. Teams pick it because it is:

- **Composable** – every pattern ships as a reusable workflow you can mix and match.
- **MCP-native** – any MCP server (filesystem, fetch, Slack, Jira, FastMCP apps) connects without custom adapters.
- **Production ready** – Temporal-backed durability, structured logging, token accounting, and Cloud deploys are first-class.
- **Pythonic** – a handful of decorators and context managers wire everything together.

Docs: [Welcome to mcp-agent](https://docs.mcp-agent.com/get-started/welcome) • [Effective patterns overview](https://docs.mcp-agent.com/mcp-agent-sdk/effective-patterns/overview).

## Core Components

[https://github.com/lastmile-ai/mcp-agent#core-components](https://github.com/lastmile-ai/mcp-agent#core-components)

Every project revolves around a single `MCPApp` runtime that loads configuration, registers agents and MCP servers, and exposes tools/workflows. The [Core Components guide](https://docs.mcp-agent.com/mcp-agent-sdk/overview) walks through these building blocks.

### MCPApp

[https://github.com/lastmile-ai/mcp-agent#mcpapp](https://github.com/lastmile-ai/mcp-agent#mcpapp)

Initialises configuration, logging, tracing, and the execution engine so everything shares one context.

```
from mcp_agent.app import MCPApp

app = MCPApp(name="finder_app")

async def main():
    async with app.run() as running_app:
        logger = running_app.logger
        logger.info("App ready", data={"servers": list(running_app.context.server_registry.registry)})
```

Docs: [MCPApp](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/mcpapp) • Example: [examples/basic/mcp_basic_agent](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/basic/mcp_basic_agent).

### Agents & AgentSpec

[https://github.com/lastmile-ai/mcp-agent#agents--agentspec](https://github.com/lastmile-ai/mcp-agent#agents--agentspec)

Agents couple instructions with the MCP servers (and optional functions) they may call. `AgentSpec` definitions can be loaded from disk and turned into agents or Augmented LLMs with the factory helpers.

```
from pathlib import Path
from mcp_agent.agents.agent import Agent
from mcp_agent.workflows.factory import load_agent_specs_from_file

agent = Agent(
    name="researcher",
    instruction="Research topics using web and filesystem access",
    server_names=["fetch", "filesystem"],
)
