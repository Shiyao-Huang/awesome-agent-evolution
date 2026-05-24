---
repo: volcengine/openviking
url: https://github.com/volcengine/openviking
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - volcengine/OpenViking: OpenViking is an open-source context database designed specifically for AI Agents(such as openclaw). OpenViking unifies the management of context (memory, resources, and skills) that Agents need through a file system paradigm, enabling hierarchical context delivery and self-evolving. · GitHub

**Source**: https://github.com/volcengine/openviking

---

[Skip to content](https://github.com/volcengine/openviking#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[volcengine](https://github.com/volcengine)

/
**[OpenViking](https://github.com/volcengine/OpenViking)**

Public

- [Notifications](https://github.com/login?return_to=%2Fvolcengine%2FOpenViking)You must be signed in to change notification settings
- [Fork
    1.8k](https://github.com/login?return_to=%2Fvolcengine%2FOpenViking)
- 
[Star
          24.3k](https://github.com/login?return_to=%2Fvolcengine%2FOpenViking)

[https://github.com/volcengine/OpenViking](https://github.com/volcengine/OpenViking)

[Branches](https://github.com/volcengine/OpenViking/branches)[Tags](https://github.com/volcengine/OpenViking/tags)

[https://github.com/volcengine/OpenViking/branches](https://github.com/volcengine/OpenViking/branches)[https://github.com/volcengine/OpenViking/tags](https://github.com/volcengine/OpenViking/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,166 Commits1,166 Commits |  |  |  |
| .github | .github |  |  |
| benchmark | benchmark |  |  |
| bot | bot |  |  |
| build_support | build_support |  |  |
| crates | crates |  |  |
| deploy/helm | deploy/helm |  |  |
| docker | docker |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| npm/cli | npm/cli |  |  |
| openviking | openviking |  |  |
| openviking_cli | openviking_cli |  |  |
| src | src |  |  |
| tests | tests |  |  |
| third_party | third_party |  |  |
| web-studio | web-studio |  |  |
| .clang-format | .clang-format |  |  |
| .gitignore | .gitignore |  |  |
| .pr_agent.toml | .pr_agent.toml |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| CONTRIBUTING_CN.md | CONTRIBUTING_CN.md |  |  |
| CONTRIBUTING_JA.md | CONTRIBUTING_JA.md |  |  |
| Caddyfile | Caddyfile |  |  |
| Cargo.lock | Cargo.lock |  |  |
| Cargo.toml | Cargo.toml |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| MANIFEST.in | MANIFEST.in |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| README_CN.md | README_CN.md |  |  |
| README_JA.md | README_JA.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| setup.py | setup.py |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://openviking.ai/](https://openviking.ai/)

### OpenViking: The Context Database for AI Agents

[https://github.com/volcengine/openviking#openviking-the-context-database-for-ai-agents](https://github.com/volcengine/openviking#openviking-the-context-database-for-ai-agents)

English / [中文](https://github.com/volcengine/OpenViking/blob/main/README_CN.md) / [日本語](https://github.com/volcengine/OpenViking/blob/main/README_JA.md)

[Website](https://www.openviking.ai) · [GitHub](https://github.com/volcengine/OpenViking) · [Issues](https://github.com/volcengine/OpenViking/issues) · [Docs](https://github.com/volcengine/OpenViking/blob/main/docs)

[https://github.com/volcengine/OpenViking/releases](https://github.com/volcengine/OpenViking/releases)[https://github.com/volcengine/OpenViking](https://github.com/volcengine/OpenViking)[https://github.com/volcengine/OpenViking/issues](https://github.com/volcengine/OpenViking/issues)[https://github.com/volcengine/OpenViking/graphs/contributors](https://github.com/volcengine/OpenViking/graphs/contributors)[https://github.com/volcengine/OpenViking/blob/main/LICENSE](https://github.com/volcengine/OpenViking/blob/main/LICENSE)[https://github.com/volcengine/OpenViking/commits/main](https://github.com/volcengine/OpenViking/commits/main)

👋 Join our Community

📱 [Lark Group](https://github.com/volcengine/OpenViking/blob/main/docs/en/about/01-about-us.md#lark-group) · [WeChat](https://github.com/volcengine/OpenViking/blob/main/docs/en/about/01-about-us.md#wechat-group) · [Discord](https://discord.com/invite/eHvx8E9XF3) · [X](https://x.com/openvikingai)

[https://trendshift.io/repositories/19668](https://trendshift.io/repositories/19668)

---

## Overview

[https://github.com/volcengine/openviking#overview](https://github.com/volcengine/openviking#overview)

### Challenges in Agent Development

[https://github.com/volcengine/openviking#challenges-in-agent-development](https://github.com/volcengine/openviking#challenges-in-agent-development)

In the AI era, data is abundant, but high-quality context is hard to come by. When building AI Agents, developers often face these challenges:

- **Fragmented Context**: Memories are in code, resources are in vector databases, and skills are scattered, making them difficult to manage uniformly.
- **Surging Context Demand**: An Agent's long-running tasks produce context at every execution. Simple truncation or compression leads to information loss.
- **Poor Retrieval Effectiveness**: Traditional RAG uses flat storage, lacking a global view and making it difficult to understand the full context of information.
- **Unobservable Context**: The implicit retrieval chain of traditional RAG is like a black box, making it hard to debug when errors occur.
- **Limited Memory Iteration**: Current memory is just a record of user interactions, lacking Agent-related task memory.

### The OpenViking Solution

[https://github.com/volcengine/openviking#the-openviking-solution](https://github.com/volcengine/openviking#the-openviking-solution)

**OpenViking** is an open-source **Context Database** designed specifically for AI Agents.

We aim to define a minimalist context interaction paradigm for Agents, allowing developers to completely say goodbye to the hassle of context management. OpenViking abandons the fragmented vector storage model of traditional RAG and innovatively adopts a **"file system paradigm"** to unify the structured organization of memories, resources, and skills needed by Agents.

With OpenViking, developers can build an Agent's brain just like managing local files:

- **Filesystem Management Paradigm** → **Solves Fragmentation**: Unified context management of memories, resources, and skills based on a filesystem paradigm.
- **Tiered Context Loading** → **Reduces Token Consumption**: L0/L1/L2 three-tier structure, loaded on demand, significantly saving costs.
- **Directory Recursive Retrieval** → **Improves Retrieval Effect**: Supports native filesystem retrieval methods, combining directory positioning with semantic search to achieve recursive and precise context acquisition.
- **Visualized Retrieval Trajectory** → **Observable Context**: Supports visualization of directory retrieval trajectories, allowing users to clearly observe the root cause of issues and guide retrieval logic optimization.
- **Automatic Session Management** → **Context Self-Iteration**: Automatically compresses content, resource references, tool calls, etc., in conversations, extracting long-term memory, making the Agent smarter with use.

---

## Quick Start

[https://github.com/volcengine/openviking#quick-start](https://github.com/volcengine/openviking#quick-start)

### Prerequisites

[https://github.com/volcengine/openviking#prerequisites](https://github.com/volcengine/openviking#prerequisites)

Before starting with OpenViking, please ensure your environment meets the following requirements:

- **Python Version**: 3.10 or higher
- **Rust Toolchain**: Cargo (Required for building RAGFS and CLI components from source)
- **C++ Compiler**: GCC 9+ or Clang 11+ (Required for building core extensions)
- **Operating System**: Linux, macOS, Windows
- **Network Connection**: A stable network connection is required (for downloading dependencies and accessing model services)

### 1. Installation

[https://github.com/volcengine/openviking#1-installation](https://github.com/volcengine/openviking#1-installation)

#### Python Package

[https://github.com/volcengine/openviking#python-package](https://github.com/volcengine/openviking#python-package)

```
pip install openviking --upgrade --force-reinstall
```

#### Rust CLI (Optional)

[https://github.com/volcengine/openviking#rust-cli-optional](https://github.com/volcengine/openviking#rust-cli-optional)

```
npm i -g @openviking/cli
```

Or build from source:

```
cargo install --git https://github.com/volcengine/OpenViking ov_cli
```

### 2. Model Preparation

[https://github.com/volcengine/openviking#2-model-preparation](https://github.com/volcengine/openviking#2-model-preparation)

OpenViking requires the following model capabilities:

- **VLM Model**: For image and content understanding
- **Embedding Model**: For vectorization and semantic retrieval

#### Supported VLM Providers

[https://github.com/volcengine/openviking#supported-vlm-providers](https://github.com/volcengine/openviking#supported-vlm-providers)

OpenViking supports multiple VLM providers:

| Provider | Description | Setup |
|---|---|---|
| volcengine | Volcengine Doubao Models | Volcengine Console |
| openai | OpenAI Official API | OpenAI Platform |
| openai-codex | Codex VLM | Use openviking-server init |
| kimi | Kimi Code Membership | Use openviking-server init |
| glm | GLM Coding Plan | Use openviking-server init |

#### Provider-Specific Notes

[https://github.com/volcengine/openviking#provider-specific-notes](https://github.com/volcengine/openviking#provider-specific-notes)
**Volcengine (Doubao)**

Volcengine supports both model names and endpoint IDs. Using model names is recommended for simplicity:

```
{
  "vlm": {
    "provider": "volcengine",
    "model": "doubao-seed-2-0-pro-260215",
    "api_key": "your-api-key",
    "api_base": "https://ark.cn-beijing.volces.com/api/v3"
  }
}
```

You can also use endpoint IDs (found in [Volcengine ARK Console](https://console.volcengine.com/ark/region:ark+cn-beijing/overview?briefPage=0&briefType=introduce&type=new&utm_content=OpenViking&utm_medium=devrel&utm_source=OWO&utm_term=OpenViking):

```
{
  "vlm": {
    "provider": "volcengine",
    "model": "ep-20241220174930-xxxxx",
    "api_key": "your-api-key",
    "api_base": "https://ark.cn-beijing.volces.com/api/v3"
  }
}
```

**OpenAI**

Use OpenAI's official API:

```
{
  "vlm": {
    "provider": "openai",
    "model": "gpt-4o",
    "api_key": "your-api-key",
    "api_base": "https://api.openai.com/v1"
  }
}
```

You can also use a custom OpenAI-compatible endpoint:

```
{
  "vlm": {
    "provider": "openai",
    "model": "gpt-4o",
    "api_key": "your-api-key",
    "api_base": "https://your-custom-endpoint.com/v1"
  }
}
```

**OpenAI Codex (OAuth)**

Use this provider when you want OpenViking to call Codex VLM through your ChatGPT/Codex OAuth session instead of a standard OpenAI API key:

```
openviking-server init
# choose OpenAI Codex when prompted
openviking-server doctor
```

```
{
  "vlm": {
    "provider": "openai-codex",
    "model": "gpt-5.3-codex",
    "api_base": "https://chatgpt.com/backend-api/codex",
    "temperature": 0.0,
    "max_retries": 2
  }
}
```

> 💡 **Tip**:
> 
> 
> - `openai-codex` does not require `vlm.api_key` when Codex OAuth is available
> - OpenViking stores its own Codex auth state at `~/.openviking/codex_auth.json`
> - `openviking-server doctor` validates that the current Codex auth is usable

**Kimi Coding (Subscription)**

Use this provider when you want OpenViking to call the dedicated Kimi Coding subscription endpoint directly:

```
openviking-server init
# choose Kimi Coding when prompted
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

