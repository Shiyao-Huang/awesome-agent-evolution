# SalesforceAIResearch/MCP-Universe

- URL: https://github.com/SalesforceAIResearch/MCP-Universe
- Platform: github.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:twitter.com "MCP" "AI agent"

## Raw Content

## GitHub - SalesforceAIResearch/MCP-Universe: MCP-Universe is a comprehensive framework designed for RL training, benchmarking, and developing AI agents for general tool-use. · GitHub

**Source**: https://github.com/SalesforceAIResearch/MCP-Universe

---

[Skip to content](https://github.com/SalesforceAIResearch/MCP-Universe#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[SalesforceAIResearch](https://github.com/SalesforceAIResearch)

/
**[MCP-Universe](https://github.com/SalesforceAIResearch/MCP-Universe)**

Public

- [Notifications](https://github.com/login?return_to=%2FSalesforceAIResearch%2FMCP-Universe)You must be signed in to change notification settings
- [Fork
    82](https://github.com/login?return_to=%2FSalesforceAIResearch%2FMCP-Universe)
- 
[Star
          587](https://github.com/login?return_to=%2FSalesforceAIResearch%2FMCP-Universe)

[https://github.com/SalesforceAIResearch/MCP-Universe](https://github.com/SalesforceAIResearch/MCP-Universe)

[Branches](https://github.com/SalesforceAIResearch/MCP-Universe/branches)[Tags](https://github.com/SalesforceAIResearch/MCP-Universe/tags)

[https://github.com/SalesforceAIResearch/MCP-Universe/branches](https://github.com/SalesforceAIResearch/MCP-Universe/branches)[https://github.com/SalesforceAIResearch/MCP-Universe/tags](https://github.com/SalesforceAIResearch/MCP-Universe/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History272 Commits272 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| assets | assets |  |  |
| docker | docker |  |  |
| docs | docs |  |  |
| mcpuniverse | mcpuniverse |  |  |
| tests | tests |  |  |
| third_party | third_party |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .pylintrc | .pylintrc |  |  |
| AI_ETHICS.md | AI_ETHICS.md |  |  |
| CODEOWNERS | CODEOWNERS |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE.txt | LICENSE.txt |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| blender_addon.py | blender_addon.py |  |  |
| dev-requirements.txt | dev-requirements.txt |  |  |
| license_info.md | license_info.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pytest.ini | pytest.ini |  |  |
| requirements.txt | requirements.txt |  |  |
| setup_blender_and_vnc.sh | setup_blender_and_vnc.sh |  |  |
| sqlc.yaml | sqlc.yaml |  |  |
| View all files |  |  |  |

## Repository files navigation

# [https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/assets/icon.png](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/assets/icon.png) MCP-Universe

[https://github.com/SalesforceAIResearch/MCP-Universe#-mcp-universe](https://github.com/SalesforceAIResearch/MCP-Universe#-mcp-universe)

[https://arxiv.org/abs/2508.14704](https://arxiv.org/abs/2508.14704)[https://mcp-universe.github.io/](https://mcp-universe.github.io/)[https://mcp-universe.github.io/#results](https://mcp-universe.github.io/#results)[https://discord.gg/t9tU77GF](https://discord.gg/t9tU77GF)

### 🎉 Latest Updates

[https://github.com/SalesforceAIResearch/MCP-Universe#-latest-updates](https://github.com/SalesforceAIResearch/MCP-Universe#-latest-updates)

> **📊 [MCPMark Evaluation](https://github.com/SalesforceAIResearch/MCP-Universe#mcpmark-benchmark)** - MCP-Universe now supports evaluating the MCPMark tasks
> 
> 
> 
> **🚀 [MCP+](https://github.com/SalesforceAIResearch/MCP-Universe#mcp-precision-context-management-for-mcp-agents)** - Agentic wrapper on MCP clients which reduce token costs by up to 75%
> 
> 
> 
> **🔬 [Deep Research Agent](https://github.com/SalesforceAIResearch/MCP-Universe#deep-research-agent-wide--deep-wd-research)** - Scale the Width of Deep Research Agents with parallel tool calling, improving performance and efficiency

---

## What is MCP-Universe?

[https://github.com/SalesforceAIResearch/MCP-Universe#what-is-mcp-universe](https://github.com/SalesforceAIResearch/MCP-Universe#what-is-mcp-universe)

MCP-Universe is a comprehensive ecosystem for building, optimizing, and evaluating AI agents that interact with the Model Context Protocol (MCP). Beyond our industry-leading benchmark for real-world MCP server interactions, MCP-Universe provides production-ready tools for agent development including specialized research agents ([Deep Research Agent](https://github.com/SalesforceAIResearch/MCP-Universe#deep-research-agent-wide--deep-wd-research)), intelligent context management ([MCP+](https://github.com/SalesforceAIResearch/MCP-Universe#mcp-precision-context-management-for-mcp-agents)), and sophisticated orchestration workflows.

[https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/assets/intro-mcp-universe.png](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/assets/intro-mcp-universe.png)

**Benchmarking:** Unlike existing benchmarks that rely on overly simplistic tasks, MCP-Universe addresses critical gaps by evaluating LLMs in **real-world scenarios** through interaction with actual MCP servers, capturing real application challenges such as:

- 🎯 **Long-horizon reasoning** across multi-step tasks
- 🔧 **Large, unfamiliar tool spaces** with diverse MCP servers
- 🌍 **Real-world data sources** and live environments
- ⚡ **Dynamic evaluation** with time-sensitive ground truth

## Table of Contents

[https://github.com/SalesforceAIResearch/MCP-Universe#table-of-contents](https://github.com/SalesforceAIResearch/MCP-Universe#table-of-contents)

- [What's New](https://github.com/SalesforceAIResearch/MCP-Universe#whats-new)
- [Architecture Overview](https://github.com/SalesforceAIResearch/MCP-Universe#architecture-overview)
- [Getting Started](https://github.com/SalesforceAIResearch/MCP-Universe#getting-started)
  - [Prerequisites](https://github.com/SalesforceAIResearch/MCP-Universe#prerequisites)
  - [Installation](https://github.com/SalesforceAIResearch/MCP-Universe#installation)
  - [Quick Test](https://github.com/SalesforceAIResearch/MCP-Universe#quick-test)

- [Evaluating LLMs and Agents](https://github.com/SalesforceAIResearch/MCP-Universe#evaluating-llms-and-agents)
  - [Prerequisites](https://github.com/SalesforceAIResearch/MCP-Universe#prerequisites-1)
  - [Environment Configuration](https://github.com/SalesforceAIResearch/MCP-Universe#environment-configuration)
  - [Benchmark Configuration](https://github.com/SalesforceAIResearch/MCP-Universe#benchmark-configuration)
  - [Execution](https://github.com/SalesforceAIResearch/MCP-Universe#execution)
  - [Save the running log](https://github.com/SalesforceAIResearch/MCP-Universe#save-the-running-log)
  - [Save the benchmark result to a report](https://github.com/SalesforceAIResearch/MCP-Universe#save-the-benchmark-result-to-a-report)
  - [Visualize the agent running information](https://github.com/SalesforceAIResearch/MCP-Universe#visualize-the-agent-running-information)

- [Creating Custom Benchmarks](https://github.com/SalesforceAIResearch/MCP-Universe#creating-custom-benchmarks)
  - [Task definition](https://github.com/SalesforceAIResearch/MCP-Universe#task-definition)
  - [Benchmark definition](https://github.com/SalesforceAIResearch/MCP-Universe#benchmark-definition)

- [Citation](https://github.com/SalesforceAIResearch/MCP-Universe#citation)

## What's New

[https://github.com/SalesforceAIResearch/MCP-Universe#whats-new](https://github.com/SalesforceAIResearch/MCP-Universe#whats-new)

### MCPMark Benchmark

[https://github.com/SalesforceAIResearch/MCP-Universe#mcpmark-benchmark](https://github.com/SalesforceAIResearch/MCP-Universe#mcpmark-benchmark)

**📊 Evaluate MCP Agents with MCPMark**

MCP-Universe now supports evaluating the **MCPMark** benchmark, enabling comprehensive testing and benchmarking of MCP agents. You can run MCPMark evaluations directly within the MCP-Universe framework to assess agent performance on MCP tasks.

**📚 Resources:**

- [How to run MCPMark](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/mcpuniverse/benchmark/configs/mcpmark/README.md#running-mcpmark-tasks)
- [Evaluation Scores](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/mcpuniverse/benchmark/configs/mcpmark/README.md#benchmark-results-alignment)

---

### MCP+: Precision Context Management for MCP Agents

[https://github.com/SalesforceAIResearch/MCP-Universe#mcp-precision-context-management-for-mcp-agents](https://github.com/SalesforceAIResearch/MCP-Universe#mcp-precision-context-management-for-mcp-agents)

**🚀 Reduce LLM Token Costs by up to 75% Without Sacrificing Quality**

MCP tools often return large, verbose outputs that waste your LLM's context window and cost money. **MCP+** wraps your MCP clients with intelligent post-processing that extracts only the relevant information before it reaches your LLM.

#### ✨ Key Features

[https://github.com/SalesforceAIResearch/MCP-Universe#-key-features](https://github.com/SalesforceAIResearch/MCP-Universe#-key-features)

- **💰 Massive Cost Reduction**: 50-75% token savings on tool outputs
- **⚡ Zero Code Changes**: Drop-in replacement for standard MCP clients

**📚 [Learn More at mcp-plus.github.io →](https://mcp-plus.github.io)**

---

### Deep Research Agent: Wide & Deep (W&D) Research

[https://github.com/SalesforceAIResearch/MCP-Universe#deep-research-agent-wide--deep-wd-research](https://github.com/SalesforceAIResearch/MCP-Universe#deep-research-agent-wide--deep-wd-research)

**🔬 Scale Research Width with Parallel Tool Calls**

**Feb 11, 2026** — We introduce **Wide & Deep (W&D) research agents** that scale *width* by making more parallel tool calls per turn. This approach improves accuracy on BrowseComp, HLE, and GAIA benchmarks while reducing turns, API cost, and wall-clock time. Our W&D agent with GPT-5-medium reaches **62.2%** on BrowseComp, outperforming GPT-5-high deep research (54.9%).

**📚 Resources:**

- [Paper](https://arxiv.org/pdf/2602.07359)
- [Website](https://xqlin98.github.io/wide-deep-research-agent/)
- [Code](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/mcpuniverse/benchmark/configs/deepresearch/README.md)

---

## Architecture Overview

[https://github.com/SalesforceAIResearch/MCP-Universe#architecture-overview](https://github.com/SalesforceAIResearch/MCP-Universe#architecture-overview)

The MCPUniverse architecture consists of the following key components:

- **Agents** (`mcpuniverse/agent/`): Base implementations for different agent types
- **Workflows** (`mcpuniverse/workflows/`): Orchestration and coordination layer
- **MCP Servers** (`mcpuniverse/mcp/`): Protocol management and external service integration
- **LLM Integration** (`mcpuniverse/llm/`): Multi-provider language model support
- **Benchmarking** (`mcpuniverse/benchmark/`): Evaluation and testing framework
- **Dashboard** (`mcpuniverse/dashboard/`): Visualization and monitoring interface

The diagram below illustrates the high-level view:

```
┌─────────────────────────────────────────────────────────────────┐
│                      Application Layer                          │
├─────────────────────────────────────────────────────────────────┤
│  Dashboard  │    Web API      │   Python Lib   │   Benchmarks   │
│   (Gradio)  │   (FastAPI)     │                │                │
└─────────────┬─────────────────┬────────────────┬────────────────┘
              │                 │                │
┌─────────────▼─────────────────▼────────────────▼────────────────┐
│                      Orchestration Layer                        │
├─────────────────────────────────────────────────────────────────┤
│           Workflows           │        Benchmark Runner         │
│    (Chain, Router, etc.)      │      (Evaluation Engine)        │
└─────────────┬─────────────────┬────────────────┬────────────────┘
              │                 │                │
┌─────────────▼─────────────────▼────────────────▼────────────────┐
│                        Agent Layer                              │
├─────────────────────────────────────────────────────────────────┤
│  BasicAgent │   ReActAgent    │  FunctionCall  │     Other      │
│             │                 │     Agent      │     Agents     │
└─────────────┬─────────────────┬────────────────┬────────────────┘
              │                 │                │
┌─────────────▼─────────────────▼────────────────▼────────────────┐
│                      Foundation Layer                           │
├─────────────────────────────────────────────────────────────────┤
│   MCP Manager   │   LLM Manager   │  Memory Systems │  Tracers  │
│   (Servers &    │   (Multi-Model  │   (RAM, Redis)  │ (Logging) │
│    Clients)     │    Support)     │                 │           │
└─────────────────┴─────────────────┴─────────────────┴───────────┘
```

More information can be found [here](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/docs).

## Getting Started

[https://github.com/SalesforceAIResearch/MCP-Universe#getting-started](https://github.com/SalesforceAIResearch/MCP-Universe#getting-started)

We follow the [feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) in this repo for its simplicity. To ensure code quality, [PyLint](https://pylint.readthedocs.io/en/latest/) is integrated into our CI to enforce Python coding standards.

### Prerequisites

[https://github.com/SalesforceAIResearch/MCP-Universe#prerequisites](https://github.com/SalesforceAIResearch/MCP-Universe#prerequisites)

- **Python**: Requires version 3.10 or higher.
- **Docker**: Used for running Dockerized MCP servers.
- **PostgreSQL** (optional): Used for database storage and persistence.
- **Redis** (optional): Used for caching and memory management.

### Installation

[https://github.com/SalesforceAIResearch/MCP-Universe#installation](https://github.com/SalesforceAIResearch/MCP-Universe#installation)

1. 

**Clone the repository**

```
git clone https://github.com/SalesforceAIResearch/MCP-Universe.git
cd MCP-Universe
```

2. 

**Create and activate virtual environment**

```
python3 -m venv venv
source venv/bin/activate
```

3. 

**Install dependencies**

```
pip install -r requirements.txt
pip install -r dev-requirements.txt
```

4. 

**Platform-specific requirements**

**Linux:**

```
sudo apt-get install libpq-dev
```

**macOS:**

```
brew install postgresql
```

5. 

**Configure pre-commit hooks**

```
pre-commit install
```

6. 

**Environment configuration**

```
cp .env.example .env
# Edit .env with your API keys and configuration
```

### Quick Test

[https://github.com/SalesforceAIResearch/MCP-Universe#quick-test](https://github.com/SalesforceAIResearch/MCP-Universe#quick-test)

To run benchmarks, you first need to set environment variables:

1. Copy the `.env.example` file to a new file named `.env`.
2. In the `.env` file, set the required API keys for various services used by the agents, such as `OPENAI_API_KEY` and `GOOGLE_MAPS_API_KEY`.

To execute a benchmark programmatically:

```
from mcpuniverse.tracer.collectors import MemoryCollector  # You can also use SQLiteCollector
from mcpuniverse.benchmark.runner import BenchmarkRunner

async def test():
    trace_collector = MemoryCollector()
    # Choose a benchmark config file under the folder "mcpuniverse/benchmark/configs"
    benchmark = BenchmarkRunner("dummy/benchmark_1.yaml")
    # Run the specified benchmark
    results = await benchmark.run(trace_collector=trace_collector)
    # Get traces
    trace_id = results[0].task_trace_ids["dummy/tasks/weather_1.json"]
    trace_records = trace_collector.get(trace_id)
```

## Evaluating LLMs and Agents

[https://github.com/SalesforceAIResearch/MCP-Universe#evaluating-llms-and-agents](https://github.com/SalesforceAIResearch/MCP-Universe#evaluating-llms-and-agents)

This section provides comprehensive instructions for evaluating LLMs and AI agents using the MCP-Universe benchmark suite. The framework supports evaluation across multiple domains including web search, location navigation, browser automation, financial analysis, repository management, and 3D design.

### Prerequisites

[https://github.com/SalesforceAIResearch/MCP-Universe#prerequisites-1](https://github.com/SalesforceAIResearch/MCP-Universe#prerequisites-1)

Before running benchmark evaluations, ensure you have completed the [Getting Started](https://github.com/SalesforceAIResearch/MCP-Universe#getting-started) section and have the following:

- Python: Version 3.10 or higher
- Docker: Installed and available in your environment
- All required dependencies installed via `pip install -r requirements.txt`
- Active virtual environment
- Appropriate API access for the services you intend to evaluate

### Environment Configuration

[https://github.com/SalesforceAIResearch/MCP-Universe#environment-configuration](https://github.com/SalesforceAIResearch/MCP-Universe#environment-configuration)

#### 1. Initial Setup

[https://github.com/SalesforceAIResearch/MCP-Universe#1-initial-setup](https://github.com/SalesforceAIResearch/MCP-Universe#1-initial-setup)

Copy the environment template and configure your API credentials:

```
cp .env.example .env
```

#### 2. API Keys and Configuration

[https://github.com/SalesforceAIResearch/MCP-Universe#2-api-keys-and-configuration](https://github.com/SalesforceAIResearch/MCP-Universe#2-api-keys-and-configuration)

Configure the following environment variables in your `.env` file. The required keys depend on which benchmark domains you plan to evaluate:

##### Core LLM Providers

[https://github.com/SalesforceAIResearch/MCP-Universe#core-llm-providers](https://github.com/SalesforceAIResearch/MCP-Universe#core-llm-providers)

| Environment Variable | Provider | Description | Required For |
|---|---|---|---|
| OPENAI_API_KEY | OpenAI | API key for GPT models (gpt-5, etc.) | All domains |
| ANTHROPIC_API_KEY | Anthropic | API key for Claude models | All domains |
| GEMINI_API_KEY | Google | API key for Gemini models | All domains |

> **Note**: You only need to configure the API key for the LLM provider you intend to use in your evaluation.

##### Domain-Specific Services

[https://github.com/SalesforceAIResearch/MCP-Universe#domain-specific-services](https://github.com/SalesforceAIResearch/MCP-Universe#domain-specific-services)

| Environment Variable | Service | Description | Setup Instructions |
|---|---|---|---|
| SERP_API_KEY | SerpAPI | Web search API for search benchmark evaluation | Get API key |
| GOOGLE_MAPS_API_KEY | Google Maps | Geolocation and mapping services | Setup Guide |
| GITHUB_PERSONAL_ACCESS_TOKEN | GitHub | Personal access token for repository operations | Token Setup |
| GITHUB_PERSONAL_ACCOUNT_NAME | GitHub | Your GitHub username | N/A |
| NOTION_API_KEY | Notion | Integration token for Notion workspace access | Integration Setup |
| NOTION_ROOT_PAGE | Notion | Root page ID for your Notion workspace | See configuration example below |

##### System Paths

[https://github.com/SalesforceAIResearch/MCP-Universe#system-paths](https://github.com/SalesforceAIResearch/MCP-Universe#system-paths)

| Environment Variable | Description | Example |
|---|---|---|
| BLENDER_APP_PATH | Full path to Blender executable (we used v4.4.0) | /Applications/Blender.app/Contents/MacOS/Blender |
| MCPUniverse_DIR | Absolute path to your MCP-Universe repository | /Users/username/MCP-Universe |

##### Configuration Examples

[https://github.com/SalesforceAIResearch/MCP-Universe#configuration-examples](https://github.com/SalesforceAIResearch/MCP-Universe#configuration-examples)

**Notion Root Page ID:** If your Notion page URL is:

```
https://www.notion.so/your_workspace/MCP-Evaluation-1dd6d96e12345678901234567eaf9eff
```

Set `NOTION_ROOT_PAGE=MCP-Evaluation-1dd6d96e12345678901234567eaf9eff`

**Blender Installation:**

1. Download Blender v4.4.0 from [blender.org](https://www.blender.org/)
2. Install our modified Blender MCP server following the [installation guide](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/docs/blender-setup.md)
3. Set the path to the Blender executable

##### ⚠️ Security Recommendations

[https://github.com/SalesforceAIResearch/MCP-Universe#%EF%B8%8F-security-recommendations](https://github.com/SalesforceAIResearch/MCP-Universe#%EF%B8%8F-security-recommendations)

> **🔒 IMPORTANT SECURITY NOTICE**
> 
> 
> 
> Please read and follow these security guidelines carefully before running benchmarks:

- 

**🚨 GitHub Integration**: **CRITICAL** - We strongly recommend using a dedicated test GitHub account for benchmark evaluation. The AI agent will perform real operations on GitHub repositories, which could potentially modify or damage your personal repositories.

- 

**🔐 API Key Management**:

  - Store API keys securely and never commit them to version control
  - Use environment variables or secure key management systems
  - Regularly rotate your API keys for enhanced security

- 

**🛡️ Access Permissions**:

  - Grant minimal necessary permissions for each service integration
  - Review and limit API key scopes to only required operations
  - Monitor API usage and set appropriate rate limits

- 

**⚡ Blender Operations**: The 3D design benchmarks will execute Blender commands that may modify or create files on your system. Ensure you have adequate backups and run in an isolated environment if necessary.

### Benchmark Configuration

[https://github.com/SalesforceAIResearch/MCP-Universe#benchmark-configuration](https://github.com/SalesforceAIResearch/MCP-Universe#benchmark-configuration)

#### Domain-Specific Configuration Files

[https://github.com/SalesforceAIResearch/MCP-Universe#domain-specific-configuration-files](https://github.com/SalesforceAIResearch/MCP-Universe#domain-specific-configuration-files)

Each benchmark domain has a dedicated YAML configuration file located in `mcpuniverse/benchmark/configs/test/`. To evaluate your LLM/agent, modify the appropriate configuration file:

| Domain | Configuration File | Description |
|---|---|---|
| Web Search | web_search.yaml | Search engine and information retrieval tasks |
| Location Navigation | location_navigation.yaml | Geographic and mapping-related queries |
| Browser Automation | browser_automation.yaml | Web interaction and automation scenarios |
| Financial Analysis | financial_analysis.yaml | Market data analysis and financial computations |
| Repository Management | repository_management.yaml | Git operations and code repository tasks |
| 3D Design | 3d_design.yaml | Blender-based 3D modeling and design tasks |

#### LLM Model Configuration

[https://github.com/SalesforceAIResearch/MCP-Universe#llm-model-configuration](https://github.com/SalesforceAIResearch/MCP-Universe#llm-model-configuration)

In each configuration file, update the LLM specification to match your target model:

```
kind: llm
spec:
  name: llm-1
  type: openai  # or anthropic, google, etc.
  config:
    model_name: gpt-4o  # Replace with your target model
```

### Execution

[https://github.com/SalesforceAIResearch/MCP-Universe#execution](https://github.com/SalesforceAIResearch/MCP-Universe#execution)

#### Running Individual Benchmarks

[https://github.com/SalesforceAIResearch/MCP-Universe#running-individual-benchmarks](https://github.com/SalesforceAIResearch/MCP-Universe#running-individual-benchmarks)

Execute specific domain benchmarks using the following commands:

```
# Set Python path and run individual benchmarks
export PYTHONPATH=.

# Location Navigation
python tests/benchmark/mcpuniverse/test_benchmark_location_navigation.py

# Browser Automation  
python tests/benchmark/mcpuniverse/test_benchmark_browser_automation.py

# Financial Analysis
python tests/benchmark/mcpuniverse/test_benchmark_financial_analysis.py

# Repository Management
python tests/benchmark/mcpuniverse/test_benchmark_repository_management.py

# Web Search
python tests/benchmark/mcpuniverse/test_benchmark_web_search.py

# 3D Design
python tests/benchmark/mcpuniverse/test_benchmark_3d_design.py
```

#### Batch Execution

[https://github.com/SalesforceAIResearch/MCP-Universe#batch-execution](https://github.com/SalesforceAIResearch/MCP-Universe#batch-execution)

For comprehensive evaluation across all domains:

```
#!/bin/bash
export PYTHONPATH=.

domains=("location_navigation" "browser_automation" "financial_analysis" 
         "repository_management" "web_search" "3d_design")

for domain in "${domains[@]}"; do
    echo "Running benchmark: $domain"
    python "tests/benchmark/mcpuniverse/test_benchmark_${domain}.py"
    echo "Completed: $domain"
done
```

### Save the running log

[https://github.com/SalesforceAIResearch/MCP-Universe#save-the-running-log](https://github.com/SalesforceAIResearch/MCP-Universe#save-the-running-log)

If you want to save the running log, you can pass the `trace_collector` to the benchmark run function:

```
from mcpuniverse.tracer.collectors import FileCollector

trace_collector = FileCollector(log_file="log/location_navigation.log")
benchmark_results = await benchmark.run(trace_collector=trace_collector)
```

### Save the benchmark result to a report

[https://github.com/SalesforceAIResearch/MCP-Universe#save-the-benchmark-result-to-a-report](https://github.com/SalesforceAIResearch/MCP-Universe#save-the-benchmark-result-to-a-report)

If you want to save a report of the benchmark result, you can use `BenchmarkReport` to dump a report:

```
from mcpuniverse.benchmark.report import BenchmarkReport

report = BenchmarkReport(benchmark, trace_collector=trace_collector)
report.dump()
```

### Visualize the agent running information

[https://github.com/SalesforceAIResearch/MCP-Universe#visualize-the-agent-running-information](https://github.com/SalesforceAIResearch/MCP-Universe#visualize-the-agent-running-information)

To run the benchmark with intermediate results and see real-time progress, pass `callbacks=get_vprint_callbacks()` to the run function:

```
from mcpuniverse.callbacks.handlers.vprint import get_vprint_callbacks

benchmark_results = await benchmark.run(
    trace_collector=trace_collector, 
    callbacks=get_vprint_callbacks()
)
```

This will print out the intermediate results as the benchmark runs.

For further details, refer to the in-code documentation or existing configuration samples in the repository.

## Creating Custom Benchmarks

[https://github.com/SalesforceAIResearch/MCP-Universe#creating-custom-benchmarks](https://github.com/SalesforceAIResearch/MCP-Universe#creating-custom-benchmarks)

A benchmark is defined by three main configuration elements: the task definition, agent/workflow definition, and the benchmark configuration itself. Below is an example using a simple "weather forecasting" task.

### Task definition

[https://github.com/SalesforceAIResearch/MCP-Universe#task-definition](https://github.com/SalesforceAIResearch/MCP-Universe#task-definition)

The task definition is provided in JSON format, for example:

```
{
  "category": "general",
  "question": "What's the weather in San Francisco now?",
  "mcp_servers": [
    {
      "name": "weather"
    }
  ],
  "output_format": {
    "city": "<City>",
    "weather": "<Weather forecast results>"
  },
  "evaluators": [
    {
      "func": "json -> get(city)",
      "op": "=",
      "value": "San Francisco"
    }
  ]
}
```

Field descriptions:

1. **category**: The task category, e.g., "general", "google-maps", etc. You can set any value for this property.
2. **question**: The main question you want to ask in this task. This is treated as a user message.
3. **mcp_servers**: A list of MCP servers that are supported in this framework.
4. **output_format**: The desired output format of agent responses.
5. **evaluators**: A list of tests to evaluate. For each test/evaluator, it has three attributes: "func" indicates how to extract values from the agent response, "op" is the comparison operator, and "value" is the ground-truth value. It will evaluate **op(func(...), value, op_args...)**. "op" can be "=", "<", ">" or other customized operators.

In "evaluators", you need to write a rule ("func" attribute) showing how to extract values for testing. In the example above, "json -> get(city)" will first do JSON decoding and then extract the value of key "city". There are several predefined funcs in this repo:

1. **json**: Perform JSON decoding.
2. **get**: Get the value of a key.
3. **len**: Get the length of a list.
4. **foreach**: Do a FOR-EACH loop.

For example, let's define

```
data = {"x": [{"y": [1]}, {"y": [1, 1]}, {"y": [1, 2, 3, 4]}]}
```

Then `get(x) -> foreach -> get(y) -> len` will do the following:

1. Get the value of "x": `[{"y": [1]}, {"y": [1, 1]}, {"y": [1, 2, 3, 4]}]`.
2. Do a foreach loop and get the value of "y": `[[1], [1, 1], [1, 2, 3, 4]]`.
3. Get the length of each list: `[1, 2, 4]`.

If these predefined functions are not enough, you can implement custom ones. For more details, please check this [doc](https://github.com/SalesforceAIResearch/MCP-Universe/blob/main/docs/custom-evaluators-guide.md).

### Benchmark definition

[https://github.com/SalesforceAIResearch/MCP-Universe#benchmark-definition](https://github.com/SalesforceAIResearch/MCP-Universe#benchmark-definition)

Define agent(s) and benchmark in a YAML file. Here’s a simple weather forecast benchmark:

```
kind: llm
spec:
  name: llm-1
  type: openai
  config:
    model_name: gpt-4o

---
kind: agent
spec:
  name: ReAct-agent
  type: react
  config:
    llm: llm-1
    instruction: You are an agent for weather forecasting.
    servers:
      - name: weather

---
kind: benchmark
spec:
  description: Test the agent for weather forecasting
  agent: ReAct-agent
  tasks:
    - dummy/tasks/weather.json
```

The benchmark definition mainly contains two parts: the agent definition and the benchmark configuration. The benchmark configuration is simple—you just need to specify the agent to use (by the defined agent name) and a list of tasks to evaluate. Each task entry is the task config file path. It can be a full file path or a partial file path. If it is a partial file path (like "dummy/tasks/weather.json"), it should be put in the folder [mcpuniverse/benchmark/configs](https://github.com/SalesforceAIResearch/MCP-Universe/tree/main/mcpuniverse/benchmark/configs) in this repo.

This framework offers a flexible way to define both simple agents (such as ReAct) and more complex, multi-step agent workflows.

1. **Specify LLMs:** Begin by declaring the large language models (LLMs) you want the agents to use. Each LLM component must be assigned a unique name (e.g., `"llm-1"`). These names serve as identifiers that the framework uses to connect the different components together.
2. **Define an agent:** Next, define an agent by providing its name and selecting an agent class. Agent classes are available in the [mcpuniverse.agent](https://github.com/SalesforceAIResearch/MCP-Universe/tree/main/mcpuniverse/agent) package. Commonly used classes include `"basic"`, `"function-call"`, and `"react"`. Within the agent specification ( `spec.config`), you must also indicate which LLM instance the agent should use by setting the `"llm"` field.
3. **Create complex workflows:** Beyond simple agents, the framework supports the definition of sophisticated, orchestrated workflows where multiple agents interact or collaborate to solve more complex tasks.

For example:

```
kind: llm
spec:
  name: llm-1
  type: openai
  config:
    model_name: gpt-4o

---
kind: agent
spec:
  name: basic-agent
  type: basic
  config:
    llm: llm-1
    instruction: Return the latitude and the longitude of a place.

---
kind: agent
spec:
  name: function-call-agent
  type: function-call
  config:
    llm: llm-1
    instruction: You are an agent for weather forecast. Please return the weather today at the given latitude and longitude.
    servers:
      - name: weather

---
kind: workflow
spec:
  name: orchestrator-workflow
  type: orchestrator
  config:
    llm: llm-1
    agents:
      - basic-agent
      - function-call-agent

---
kind: benchmark
spec:
  description: Test the agent for weather forecasting
  agent: orchestrator-workflow
  tasks:
    - dummy/tasks/weather.json
```

## Citation

[https://github.com/SalesforceAIResearch/MCP-Universe#citation](https://github.com/SalesforceAIResearch/MCP-Universe#citation)

If you use MCP-Universe in your research, please cite our paper:

```
@misc{mcpuniverse,
  title={MCP-Universe: Benchmarking Large Language Models with Real-World Model Context Protocol Servers},
  author={Ziyang Luo and Zhiqi Shen and Wenzhuo Yang and Zirui Zhao and Prathyusha Jwalapuram and Amrita Saha and Doyen Sahoo and Silvio Savarese and Caiming Xiong and Junnan Li},
  year={2025},
  eprint={2508.14704},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2508.14704}, 
}
```

## About

         MCP-Universe is a comprehensive framework designed for RL training, benchmarking, and developing AI agents for general tool-use.       

[mcp-universe.github.io/](https://mcp-universe.github.io/)

### Resources

[Readme](https://github.com/SalesforceAIResearch/MCP-Universe#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/SalesforceAIResearch/MCP-Universe#Apache-2.0-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/SalesforceAIResearch/MCP-Universe#coc-ov-file)

### Contributing

[Contributing](https://github.com/SalesforceAIResearch/MCP-Universe#contributing-ov-file)

### Security policy

[Security policy](https://github.com/SalesforceAIResearch/MCP-Universe#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/SalesforceAIResearch/MCP-Universe/activity)

[Custom properties](https://github.com/SalesforceAIResearch/MCP-Universe/custom-properties)

### Stars

[587
        stars](https://github.com/SalesforceAIResearch/MCP-Universe/stargazers)

### Watchers

[8
        watching](https://github.com/SalesforceAIResearch/MCP-Universe/watchers)

### Forks

[82
        forks](https://github.com/SalesforceAIResearch/MCP-Universe/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FSalesforceAIResearch%2FMCP-Universe&report=SalesforceAIResearch+%28user%29)

## [Releases
      9](https://github.com/SalesforceAIResearch/MCP-Universe/releases)

[MCP-Universe v1.1.3
        
          Latest
      
      Mar 25, 2026](https://github.com/SalesforceAIResearch/MCP-Universe/releases/tag/v1.1.3)
[+ 8 releases](https://github.com/SalesforceAIResearch/MCP-Universe/releases)

## [Packages
      0](https://github.com/orgs/SalesforceAIResearch/packages?repo_name=MCP-Universe)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/SalesforceAIResearch/MCP-Universe/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.5%](https://github.com/SalesforceAIResearch/MCP-Universe/search?l=python)
- [PLpgSQL
          0.9%](https://github.com/SalesforceAIResearch/MCP-Universe/search?l=plpgsql)
- [Jupyter Notebook
          0.9%](https://github.com/SalesforceAIResearch/MCP-Universe/search?l=jupyter-notebook)
- [Shell
          0.4%](https://github.com/SalesforceAIResearch/MCP-Universe/search?l=shell)
- [Jinja
          0.3%](https://github.com/SalesforceAIResearch/MCP-Universe/search?l=jinja)
- [Makefile
          0.0%](https://github.com/SalesforceAIResearch/MCP-Universe/search?l=makefile)

   Generated from [salesforce/oss-template](https://github.com/salesforce/oss-template)

     You can’t perform that action at this time.
