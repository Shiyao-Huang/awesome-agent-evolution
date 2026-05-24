# lastmile-ai/mcp-agent

- URL: https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file
- Platform: github.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

## GitHub - lastmile-ai/mcp-agent: Build effective agents using Model Context Protocol and simple workflow patterns · GitHub

**Source**: https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file

---

[Skip to content](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#start-of-content)

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

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#overview](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#overview)

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

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#at-a-glance](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#at-a-glance)

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

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#documentation--build-with-llms](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#documentation--build-with-llms)

mcp-agent's complete documentation is available at **[docs.mcp-agent.com](https://docs.mcp-agent.com)**, including full SDK guides, CLI reference, and advanced patterns. This readme gives a high-level overview to get you started.

- [llms-full.txt](https://docs.mcp-agent.com/llms-full.txt): contains entire documentation.
- [llms.txt](https://docs.mcp-agent.com/llms.txt): sitemap listing key pages in the docs.
- [docs MCP server](https://docs.mcp-agent.com/mcp)

## Table of Contents

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#table-of-contents](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#table-of-contents)

- [Overview](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#overview)
- [Minimal example](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#minimal-example)
- [Quickstart](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#get-started)
- [Why mcp-agent](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#why-use-mcp-agent)
- [Core concepts](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#core-components)
  - [MCPApp](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcpapp)
  - [Agents & AgentSpec](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#agents--agentspec)
  - [Augmented LLM](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#augmented-llm)
  - [Workflows & decorators](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#workflows--decorators)
  - [Configuration & secrets](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#configuration--secrets)
  - [MCP integration](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcp-integration)

- [Workflow patterns](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#workflow-patterns)
- [CLI reference](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#cli-reference)
- [Authentication](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#authentication)
- [Advanced](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#advanced)
  - [Observability & controls](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#observability--controls)
  - [Composing workflows](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#composing-workflows)
  - [Durable execution](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#durable-execution)
  - [Agent servers](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#agent-servers)
  - [Signals & human input](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#signals--human-input)
  - [App configuration](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#app-configuration)
  - [Icons](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#icons)
  - [MCP server management](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcp-server-management)

- [Cloud deployment](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#cloud-deployment)
- [Examples](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#examples)
- [FAQs](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#faqs)
- [Community & contributions](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#contributing)

## Get Started

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#get-started](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#get-started)

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

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#installation](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#installation)

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

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#quickstart](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#quickstart)

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

Agent output[https://private-user-images.githubusercontent.com/25641935/407786779-eaa60fdf-bcc6-460b-926e-6fa8534e9089.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDYsIm5iZiI6MTc3OTMzOTMwNiwicGF0aCI6Ii8yNTY0MTkzNS80MDc3ODY3NzktZWFhNjBmZGYtYmNjNi00NjBiLTkyNmUtNmZhODUzNGU5MDg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ4NGMyYTNlNjRlNDJjOTczMTFiNzFkN2U0ZDlmMjlmMjlhY2JjYTRmYjY1ZTY2MGI0YmI4NzU1ZTlmZjRiNjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.L9Nuez4SEo5DaWFxutBFCtczC9JuMHFiZiL2-nAbJpQ](https://private-user-images.githubusercontent.com/25641935/407786779-eaa60fdf-bcc6-460b-926e-6fa8534e9089.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkzMzk2MDYsIm5iZiI6MTc3OTMzOTMwNiwicGF0aCI6Ii8yNTY0MTkzNS80MDc3ODY3NzktZWFhNjBmZGYtYmNjNi00NjBiLTkyNmUtNmZhODUzNGU5MDg5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIxVDA0NTUwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ4NGMyYTNlNjRlNDJjOTczMTFiNzFkN2U0ZDlmMjlmMjlhY2JjYTRmYjY1ZTY2MGI0YmI4NzU1ZTlmZjRiNjYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.L9Nuez4SEo5DaWFxutBFCtczC9JuMHFiZiL2-nAbJpQ)

## Why use `mcp-agent`?

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#why-use-mcp-agent](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#why-use-mcp-agent)

There are too many AI frameworks out there already. But `mcp-agent` is the only one that is purpose-built for a shared protocol - [MCP](https://modelcontextprotocol.io/introduction).[mcp-agent](https://docs.mcp-agent.com/get-started/welcome) pairs Anthropic’s Building Effective Agents patterns with a batteries-included MCP runtime so you can focus on behaviour, not boilerplate. Teams pick it because it is:

- **Composable** – every pattern ships as a reusable workflow you can mix and match.
- **MCP-native** – any MCP server (filesystem, fetch, Slack, Jira, FastMCP apps) connects without custom adapters.
- **Production ready** – Temporal-backed durability, structured logging, token accounting, and Cloud deploys are first-class.
- **Pythonic** – a handful of decorators and context managers wire everything together.

Docs: [Welcome to mcp-agent](https://docs.mcp-agent.com/get-started/welcome) • [Effective patterns overview](https://docs.mcp-agent.com/mcp-agent-sdk/effective-patterns/overview).

## Core Components

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#core-components](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#core-components)

Every project revolves around a single `MCPApp` runtime that loads configuration, registers agents and MCP servers, and exposes tools/workflows. The [Core Components guide](https://docs.mcp-agent.com/mcp-agent-sdk/overview) walks through these building blocks.

### MCPApp

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcpapp](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcpapp)

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

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#agents--agentspec](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#agents--agentspec)

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

async with agent:
    tools = await agent.list_tools()

async with app.run() as running_app:
    specs = load_agent_specs_from_file(
        str(Path("examples/basic/agent_factory/agents.yaml")),
        context=running_app.context,
    )
```

Docs: [Agents](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/agents) • [Agent factory helpers](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/agents#agentspec-and-factory-helpers) • Examples: [examples/basic/agent_factory](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/basic/agent_factory).

### Augmented LLM

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#augmented-llm](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#augmented-llm)

Augmented LLMs wrap provider SDKs with the agent’s tools, memory, and structured output helpers. Attach one to an agent to unlock `generate`, `generate_str`, and `generate_structured`.

```
from pydantic import BaseModel
from mcp_agent.workflows.llm.augmented_llm import RequestParams
from mcp_agent.workflows.llm.augmented_llm_openai import OpenAIAugmentedLLM

class Summary(BaseModel):
    title: str
    verdict: str

async with agent:
    llm = await agent.attach_llm(OpenAIAugmentedLLM)
    report = await llm.generate_str(
        message="Draft a 3-sentence release note from CHANGELOG.md",
        request_params=RequestParams(maxTokens=400, temperature=0.2),
    )
    structured = await llm.generate_structured(
        message="Return a JSON object with `title` and `verdict` summarising the README.",
        response_model=Summary,
    )
```

Docs: [Augmented LLMs](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/augmented-llm) • Examples: [examples/basic/mcp_basic_agent](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/basic/mcp_basic_agent) and the workflow projects listed in [gallery.md](https://github.com/lastmile-ai/mcp-agent/blob/main/gallery.md#workflow-patterns).

### Workflows & decorators

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#workflows--decorators](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#workflows--decorators)

`MCPApp` decorators convert coroutines into durable workflows and tools. The same annotations work for both `asyncio` and Temporal execution.

```
from datetime import timedelta
from mcp_agent.executor.workflow import Workflow, WorkflowResult

@app.workflow
class PublishArticle(Workflow[WorkflowResult[str]]):
    @app.workflow_task(schedule_to_close_timeout=timedelta(minutes=5))
    async def draft(self, topic: str) -> str:
        return f"- intro to {topic}\n- highlights\n- next steps"

    @app.workflow_run
    async def run(self, topic: str) -> WorkflowResult[str]:
        outline = await self.draft(topic)
        return WorkflowResult(value=outline)
```

Docs: [Decorator reference](https://docs.mcp-agent.com/reference/decorators) • Examples: [examples/workflows](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/workflows).

### Configuration & secrets

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#configuration--secrets](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#configuration--secrets)

Settings load from `mcp_agent.config.yaml`, `mcp_agent.secrets.yaml`, environment variables, and optional preload strings. Keep secrets out of source control.

```
# mcp_agent.config.yaml
execution_engine: asyncio
mcp:
  servers:
    fetch:
      command: "uvx"
      args: ["mcp-server-fetch"]
    filesystem:
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-filesystem"]
openai:
  default_model: gpt-4o-mini

# mcp_agent.secrets.yaml (gitignored)
openai:
  api_key: "${OPENAI_API_KEY}"
```

Docs: [Configuration reference](https://docs.mcp-agent.com/reference/configuration) • [Specify secrets](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/specify-secrets).

### MCP integration

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcp-integration](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#mcp-integration)

Connect to existing MCP servers programmatically or aggregate several into one façade.

```
from mcp_agent.mcp.gen_client import gen_client

async with app.run():
    async with gen_client("filesystem", app.server_registry, context=app.context) as client:
        resources = await client.list_resources()
        app.logger.info("Filesystem resources", data={"uris": [r.uri for r in resources.resources]})
```

Docs: [MCP integration overview](https://docs.mcp-agent.com/mcp/overview) • Examples: [examples/mcp](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/mcp).

## Workflow patterns

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#workflow-patterns](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#workflow-patterns)

Key agent patterns are implemented as an `AugmentedLLM`. Use factory helpers to wire them up or inspect the runnable projects listed in [gallery.md](https://github.com/lastmile-ai/mcp-agent/blob/main/gallery.md#workflow-patterns).

| Pattern | Helper | Summary | Docs |
|---|---|---|---|
| Parallel (Map-Reduce) | create_parallel_llm(...) | Fan-out specialists and fan-in aggregated reports. | Parallel |
| Router | create_router_llm(...) / create_router_embedding(...) | Route requests to the best agent, server, or function. | Router |
| Intent classifier | create_intent_classifier_llm(...) / create_intent_classifier_embedding(...) | Bucket user input into intents before automation. | Intent classifier |
| Orchestrator-workers | create_orchestrator(...) | Generate plans and coordinate worker agents. | Planner |
| Deep research | create_deep_orchestrator(...) | Long-horizon research with knowledge extraction and policy checks. | Deep research |
| Evaluator-optimizer | create_evaluator_optimizer_llm(...) | Iterate until an evaluator approves the result. | Evaluator-optimizer |
| Swarm | create_swarm(...) | Multi-agent handoffs compatible with OpenAI Swarm. | Swarm |

## Durable execution

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#durable-execution](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#durable-execution)

Switch `execution_engine` to `temporal` for pause/resume, retries, human input, and durable history—without changing workflow code. Run a worker alongside your app to host activities.

```
from mcp_agent.executor.temporal import create_temporal_worker_for_app

async with create_temporal_worker_for_app(app) as worker:
    await worker.run()
```

Docs: [Durable agents](https://docs.mcp-agent.com/mcp-agent-sdk/advanced/durable-agents) • [Temporal backend](https://docs.mcp-agent.com/advanced/temporal) • Examples: [examples/temporal](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/temporal).

## Agent servers

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#agent-servers](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#agent-servers)

Expose an `MCPApp` as a standard MCP server so Claude Desktop, Cursor, or custom clients can call your tools and workflows.

```
from mcp_agent.server import create_mcp_server_for_app

@app.tool
def grade_story(story: str) -> str:
    return "Report..."

if __name__ == "__main__":
    server = create_mcp_server_for_app(app)
    server.run_stdio()
```

Docs: [Agent servers](https://docs.mcp-agent.com/mcp-agent-sdk/mcp/agent-as-mcp-server) • Examples: [examples/mcp_agent_server](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/mcp_agent_server).

## CLI reference

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#cli-reference](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#cli-reference)

`uvx mcp-agent` scaffolds projects, manages secrets, inspects workflows, and deploys to Cloud.

```
uvx mcp-agent init --template basic             # Scaffold a new project
uvx mcp-agent deploy my-agent                   # Deploy to mcp-agent Cloud
```

Docs: [CLI reference](https://docs.mcp-agent.com/reference/cli) • [Getting started guides](https://docs.mcp-agent.com/get-started/quickstart).

## Authentication

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#authentication](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#authentication)

Load API keys from secrets files or use the built-in OAuth client to fetch and persist tokens for MCP servers.

```
# mcp_agent.config.yaml excerpt
oauth:
  providers:
    github:
      client_id: "${GITHUB_CLIENT_ID}"
      client_secret: "${GITHUB_CLIENT_SECRET}"
      scopes: ["repo", "user"]
```

Docs: [Advanced authentication](https://docs.mcp-agent.com/mcp-agent-sdk/advanced/authentication) • [Server authentication](https://docs.mcp-agent.com/mcp-agent-sdk/mcp/server-authentication) • Examples: [examples/basic/oauth_basic_agent](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/basic/oauth_basic_agent).

## Advanced

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#advanced](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#advanced)

### Observability & controls

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#observability--controls](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#observability--controls)

Enable structured logging and OpenTelemetry via configuration, and track token usage programmatically.

```
# mcp_agent.config.yaml
logger:
  transports: [console]
  level: info
otel:
  enabled: true
  exporters:
    - console
```

`TokenCounter` tracks token usage for agents, workflows, and LLM nodes. Attach watchers to stream updates or trigger alerts.

```
# Inside `async with app.run() as running_app:`
# token_counter lives on the running app context when tracing is enabled.
token_counter = running_app.context.token_counter

class TokenMonitor:
    async def on_token_update(self, node, usage):
        print(f"[{node.name}] total={usage.total_tokens}")

monitor = TokenMonitor()
watch_id = await token_counter.watch(
    callback=monitor.on_token_update,
    node_type="llm",
    threshold=1_000,
    include_subtree=True,
)

await token_counter.unwatch(watch_id)
```

Docs: [Observability](https://docs.mcp-agent.com/mcp-agent-sdk/advanced/observability) • Examples: [examples/tracing](https://github.com/lastmile-ai/mcp-agent/blob/main/examples/tracing).

### Composing workflows

[https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#composing-workflows](https://github.com/lastmile-ai/mcp-agent?tab=readme-ov-file#composing-workflows)

Mix and match AgentSpecs to build higher-level workflows using the factory helpers—routers, parallel pipelines, orchestrators, and more.

```
from mcp_agent.workflows.factory import create_router_llm

# specs are loaded via load_agent_specs_from_file as shown above.
async with app.run() as running_app:
    router =
```
