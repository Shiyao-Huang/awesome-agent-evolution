---
repo: siddharth-1001/agent-eval-harness
url: https://github.com/siddharth-1001/agent-eval-harness
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Siddharth-1001/agent-eval-harness: An open-source evaluation framework specifically for agentic systems — not just LLM outputs, but full agent behavior. · GitHub

**Source**: https://github.com/siddharth-1001/agent-eval-harness

---

[Skip to content](https://github.com/siddharth-1001/agent-eval-harness#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Siddharth-1001](https://github.com/Siddharth-1001)

/
**[agent-eval-harness](https://github.com/Siddharth-1001/agent-eval-harness)**

Public

- [Notifications](https://github.com/login?return_to=%2FSiddharth-1001%2Fagent-eval-harness)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FSiddharth-1001%2Fagent-eval-harness)
- 
[Star
          20](https://github.com/login?return_to=%2FSiddharth-1001%2Fagent-eval-harness)

[https://github.com/Siddharth-1001/agent-eval-harness](https://github.com/Siddharth-1001/agent-eval-harness)

[Branches](https://github.com/Siddharth-1001/agent-eval-harness/branches)[Tags](https://github.com/Siddharth-1001/agent-eval-harness/tags)

[https://github.com/Siddharth-1001/agent-eval-harness/branches](https://github.com/Siddharth-1001/agent-eval-harness/branches)[https://github.com/Siddharth-1001/agent-eval-harness/tags](https://github.com/Siddharth-1001/agent-eval-harness/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History22 Commits22 Commits |  |  |  |
| .github | .github |  |  |
| agent_eval | agent_eval |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| rfcs | rfcs |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# agent-eval-harness

[https://github.com/siddharth-1001/agent-eval-harness#agent-eval-harness](https://github.com/siddharth-1001/agent-eval-harness#agent-eval-harness)

[https://github.com/your-org/agent-eval-harness/actions](https://github.com/your-org/agent-eval-harness/actions)[https://python.org](https://python.org)[https://github.com/Siddharth-1001/agent-eval-harness/blob/master/LICENSE](https://github.com/Siddharth-1001/agent-eval-harness/blob/master/LICENSE)[https://pypi.org/project/agent-eval-harness/](https://pypi.org/project/agent-eval-harness/)

> Lightweight, open-source evaluation harness for agentic AI systems — trace, measure, and compare your AI agents in minutes. No vendor lock-in. All data stays on your machine.

---

## Why agent-eval-harness?

[https://github.com/siddharth-1001/agent-eval-harness#why-agent-eval-harness](https://github.com/siddharth-1001/agent-eval-harness#why-agent-eval-harness)

Production AI agents fail in subtle ways that are invisible without structured observability:

- **Hallucinated tool arguments** — LLMs fabricate function parameters that look plausible but are wrong
- **Silent latency regressions** — a model update doubles response time and nobody notices
- **Cost creep** — token usage grows 3x after a prompt change
- **Tool failures** — success rates drop from 95% to 60% across deployments

`agent-eval-harness` gives you structured traces, automated metrics, and side-by-side comparisons — without sending data to any hosted platform.

## Quickstart

[https://github.com/siddharth-1001/agent-eval-harness#quickstart](https://github.com/siddharth-1001/agent-eval-harness#quickstart)

```
# Install
pip install agent-eval-harness

# Run an example (no API key needed — uses mock LLM)
python -m examples.langchain_example

# View results
agent-eval list
agent-eval show <run_id>

# Start the local dashboard
agent-eval dashboard
```

Open [http://127.0.0.1:7000](http://127.0.0.1:7000) to see the dashboard.

## Installation

[https://github.com/siddharth-1001/agent-eval-harness#installation](https://github.com/siddharth-1001/agent-eval-harness#installation)

```
# Core (no framework dependencies)
pip install agent-eval-harness

# With a specific framework
pip install 'agent-eval-harness[langchain]'
pip install 'agent-eval-harness[openai]'
pip install 'agent-eval-harness[anthropic]'
pip install 'agent-eval-harness[crewai]'
pip install 'agent-eval-harness[pydantic-ai]'

# All frameworks
pip install 'agent-eval-harness[all]'

# Development
pip install 'agent-eval-harness[dev]'
```

**Requirements:** Python 3.12+

## Supported Frameworks

[https://github.com/siddharth-1001/agent-eval-harness#supported-frameworks](https://github.com/siddharth-1001/agent-eval-harness#supported-frameworks)

| Framework | Install Extra | Adapter | Integration Style |
|---|---|---|---|
| LangGraph / LangChain | langchain | LangGraphTracer | Context manager with callback handler |
| OpenAI Agents SDK | openai | trace_openai_agent | Decorator with auto-injected hooks |
| CrewAI | crewai | EvalHarnessCrew | Wrapper class with step callback |
| Anthropic | anthropic | TracedAnthropicClient | Client wrapper intercepting API calls |
| PydanticAI | pydantic-ai | with_eval_harness | Agent wrapper extracting tool calls |

**Not using a framework?** The `@trace_agent` decorator and `AgentTracer` context manager work with any Python code.

## Usage

[https://github.com/siddharth-1001/agent-eval-harness#usage](https://github.com/siddharth-1001/agent-eval-harness#usage)

### Option 1: Decorator (simplest)

[https://github.com/siddharth-1001/agent-eval-harness#option-1-decorator-simplest](https://github.com/siddharth-1001/agent-eval-harness#option-1-decorator-simplest)

```
from agent_eval import trace_agent

@trace_agent(task="web-research", model="claude-sonnet-4-6")
async def my_agent(query: str) -> str:
    # Your agent logic here
    return result
```

### Option 2: Context Manager (full control)

[https://github.com/siddharth-1001/agent-eval-harness#option-2-context-manager-full-control](https://github.com/siddharth-1001/agent-eval-harness#option-2-context-manager-full-control)

```
from agent_eval import AgentTracer, ToolCall

async with AgentTracer(task="data-extraction", model="gpt-4o") as tracer:
    turn_id = await tracer.collector.async_start_turn("user", query)
    await tracer.collector.async_end_turn(turn_id)

    # Run your agent...
    result = await my_agent(query)

    asst_id = await tracer.collector.async_start_turn("assistant", str(result))
    await tracer.collector.async_record_tool_call(asst_id, ToolCall(
        tool_name="search", input_args={"q": query},
        output=str(result), success=True, latency_ms=150,
    ))
    await tracer.collector.async_end_turn(asst_id, latency_ms=200)
```

### Option 3: Framework Adapter

[https://github.com/siddharth-1001/agent-eval-harness#option-3-framework-adapter](https://github.com/siddharth-1001/agent-eval-harness#option-3-framework-adapter)

```
# LangGraph
from agent_eval.adapters.langchain import LangGraphTracer

async with LangGraphTracer(task="research", model="gpt-4o") as tracer:
    result = await graph.ainvoke(state, config=tracer.langgraph_config)

# Anthropic
from agent_eval.adapters.anthropic import TracedAnthropicClient

client = TracedAnthropicClient(task="summarize")
response = client.messages.create(model="claude-sonnet-4-6", ...)

# OpenAI Agents SDK
from agent_eval.adapters.openai_agents import trace_openai_agent

@trace_openai_agent(task="planning", model="gpt-4o")
async def run(input_text: str) -> str:
    result = await Runner.run(agent, input_text)
    return result.final_output
```

## Metrics

[https://github.com/siddharth-1001/agent-eval-harness#metrics](https://github.com/siddharth-1001/agent-eval-harness#metrics)

Every trace is automatically analyzed across four dimensions:

| Metric | What It Measures | Key Output |
|---|---|---|
| Tool Success | Per-tool success/failure rates | success_rate, per-tool breakdown |
| Hallucination | Fabricated or invalid tool arguments | 3 detection modes (see below) |
| Latency | Turn-level and tool-level timing | p50, p95, slowest turn |
| Cost | Token-based cost estimate | Per-turn and total USD |

### Hallucination Detection Modes

[https://github.com/siddharth-1001/agent-eval-harness#hallucination-detection-modes](https://github.com/siddharth-1001/agent-eval-harness#hallucination-detection-modes)

| Mode | How It Works | Confidence | Requires API? |
|---|---|---|---|
| Schema | Validates input_args against a JSON schema | 1.0 (deterministic) | No |
| Semantic | Checks values against allowed sets | 0.9 | No |
| LLM Judge | Sends tool call to a judge LLM for evaluation | Variable | Yes |

```
from agent_eval.metrics.hallucination import (
    HallucinationConfig, ToolHallucinationConfig, HallucinationDetector,
)

config = HallucinationConfig(tools={
    "search_web": ToolHallucinationConfig(mode="schema", schema={
        "required": ["query"],
        "properties": {"query": {"type": "string"}},
    }),
    "create_user": ToolHallucinationConfig(mode="semantic", value_sets={
        "role": ["admin", "viewer", "editor"],
    }),
})
```

## CLI Commands

[https://github.com/siddharth-1001/agent-eval-harness#cli-commands](https://github.com/siddharth-1001/agent-eval-harness#cli-commands)

```
agent-eval version                          # Show version
agent-eval run --task script.py             # Run a script and save its trace
agent-eval list                             # List all evaluation runs
agent-eval show <run_id>                    # Show metrics for a run
agent-eval compare <run_a> <run_b>          # Compare two runs side-by-side
agent-eval compare <a> <b> --export out.html  # Export comparison as HTML
agent-eval dashboard --port 7000            # Start local dashboard
```

## Configuration

[https://github.com/siddharth-1001/agent-eval-harness#configuration](https://github.com/siddharth-1001/agent-eval-harness#configuration)

### Trace Writer

[https://github.com/siddharth-1001/agent-eval-harness#trace-writer](https://github.com/siddharth-1001/agent-eval-harness#trace-writer)

```
from agent_eval import TraceWriterConfig

config = TraceWriterConfig(
    output_dir="~/.agent-eval/traces/",  # Where traces are saved
    max_output_chars=10_000,              # Truncate tool outputs
    max_content_chars=50_000,             # Truncate turn content
    max_trace_size_mb=5.0,               # Max file size
)
```

### Cost Overrides

[https://github.com/siddharth-1001/agent-eval-harness#cost-overrides](https://github.com/siddharth-1001/agent-eval-harness#cost-overrides)

```
from agent_eval.metrics.cost import MetricsConfig

config = MetricsConfig(pricing_overrides={
    "my-custom-model": {"input_per_1m": 1.0, "output_per_1m": 3.0},
})
```

Built-in pricing covers 25+ models including Claude, GPT, Gemini, Llama, Mistral, and DeepSeek families. See [agent_eval/data/pricing.toml](https://github.com/Siddharth-1001/agent-eval-harness/blob/master/agent_eval/data/pricing.toml).

## Architecture

[https://github.com/siddharth-1001/agent-eval-harness#architecture](https://github.com/siddharth-1001/agent-eval-harness#architecture)

```
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

