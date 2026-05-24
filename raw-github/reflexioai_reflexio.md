---
repo: reflexioai/reflexio
url: https://github.com/reflexioai/reflexio
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ReflexioAI/reflexio: Make your agents improve themselves. Reflexio is an AI agent self-improvement harness that enables your AI agents to continuously learn from real user interactions. · GitHub

**Source**: https://github.com/reflexioai/reflexio

---

[Skip to content](https://github.com/reflexioai/reflexio#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ReflexioAI](https://github.com/ReflexioAI)

/
**[reflexio](https://github.com/ReflexioAI/reflexio)**

Public

- [Notifications](https://github.com/login?return_to=%2FReflexioAI%2Freflexio)You must be signed in to change notification settings
- [Fork
    25](https://github.com/login?return_to=%2FReflexioAI%2Freflexio)
- 
[Star
          220](https://github.com/login?return_to=%2FReflexioAI%2Freflexio)

[https://github.com/ReflexioAI/reflexio](https://github.com/ReflexioAI/reflexio)

[Branches](https://github.com/ReflexioAI/reflexio/branches)[Tags](https://github.com/ReflexioAI/reflexio/tags)

[https://github.com/ReflexioAI/reflexio/branches](https://github.com/ReflexioAI/reflexio/branches)[https://github.com/ReflexioAI/reflexio/tags](https://github.com/ReflexioAI/reflexio/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History136 Commits136 Commits |  |  |  |
| .agents/skills | .agents/skills |  |  |
| .claude | .claude |  |  |
| benchmark | benchmark |  |  |
| client_dist | client_dist |  |  |
| docs | docs |  |  |
| notebooks | notebooks |  |  |
| reflexio | reflexio |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .coderabbit.yaml | .coderabbit.yaml |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .python-version | .python-version |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| developer.md | developer.md |  |  |
| how_to_write_readme.md | how_to_write_readme.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pyrightconfig.json | pyrightconfig.json |  |  |
| run_services.sh | run_services.sh |  |  |
| stop_services.sh | stop_services.sh |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/reflexio-ai/reflexio](https://github.com/reflexio-ai/reflexio)

[https://www.python.org/](https://www.python.org/)[https://github.com/ReflexioAI/reflexio/blob/main/LICENSE](https://github.com/ReflexioAI/reflexio/blob/main/LICENSE)[https://pypi.org/project/reflexio-client/](https://pypi.org/project/reflexio-client/)[https://pepy.tech/project/reflexio-ai](https://pepy.tech/project/reflexio-ai)[https://github.com/ReflexioAI/reflexio/blob/main/reflexio/benchmarks/retrieval_latency/results/report.md](https://github.com/ReflexioAI/reflexio/blob/main/reflexio/benchmarks/retrieval_latency/results/report.md)[https://github.com/ReflexioAI/reflexio/stargazers](https://github.com/ReflexioAI/reflexio/stargazers)

[Quick Start](https://github.com/reflexioai/reflexio#quick-start) · [Features](https://github.com/reflexioai/reflexio#features) · [Integrations](https://github.com/reflexioai/reflexio#integrations) · [SDK](https://github.com/reflexioai/reflexio#sdk-usage) · [CLI](https://github.com/ReflexioAI/reflexio/blob/main/reflexio/cli/README.md) · [Architecture](https://github.com/reflexioai/reflexio#architecture) · [Docs](https://www.reflexio.ai/docs) · [Contributing](https://github.com/reflexioai/reflexio#contributing)

---

**81% fewer planning steps**  ·  **72% less tokens**  ·  on real GDPVal knowledge-work tasks, 
*on top of* what a SOTA self-improving Hermes agent already learns on its own.
[See the benchmark →](https://github.com/ReflexioAI/reflexio/blob/main/benchmark/gdpval/RESULTS.md)

---

## What is Reflexio?

[https://github.com/reflexioai/reflexio#what-is-reflexio](https://github.com/reflexioai/reflexio#what-is-reflexio)

Reflexio is an **AI agent self-improvement harness** that enables your AI agents to continuously learn from real user interactions. It turns user corrections into persisted behavioral improvements for agents and capturing successful execution paths for reuse.

What one user teaches, every user benefits from.

As your agent is used more, it becomes smarter, faster, and more effective at solving domain-specific tasks. The moat for AI agents is what your agent learns from every interaction it handles.

Our vision is that AI systems should get better with every interaction.

> **Benchmarked on GDPVal**: on 4 of 5 real knowledge-work tasks from OpenAI's public GDPVal benchmark, Reflexio cuts a **median −81% planning steps and −72% tokens** on a Hermes agent running `minimax/MiniMax-M2.7` — measured against a *warm baseline*: the same agent re-running the task after it has already learned from itself. In other words, Reflexio's savings come **on top of** what a SOTA self-improving agent has learnt on its own. See the full writeup → [benchmark/gdpval/RESULTS.md](https://github.com/ReflexioAI/reflexio/blob/main/benchmark/gdpval/RESULTS.md).

```
flowchart LR
    A[AI Agent] -->|conversations| B[Reflexio]
    G[Human Expert] -->|ideal responses| B
    B --> C[User Profiles]
    B --> D[Playbook Extraction]
    D --> E[Playbook Aggregation]
    B --> F[Success Evaluation]
```

Loading

Publish conversations from your agent, and Reflexio closes the self-improvement loop:

- **Never Repeat the Same Mistake**: Transforms user corrections and interaction signals into improved decision-making processes — so agents adapt their behavior and avoid repeating the same mistakes.
- **Lock In What Works**: Persists successful strategies and workflows so your agent reuses proven paths instead of starting from scratch.
- **Transfer Learning Across Users**: What one user teaches, every user benefits from — corrections and successful strategies from one individual propagate to improve the agent for everyone, no retraining required.
- **Learn from Human Experts**: Publish expert-provided ideal responses alongside agent responses — Reflexio automatically extracts actionable playbooks from the differences.

> **For developers**: See [developer.md](https://github.com/ReflexioAI/reflexio/blob/main/developer.md) for project structure, environment setup, testing, and coding guidelines.

## Table of Contents

[https://github.com/reflexioai/reflexio#table-of-contents](https://github.com/reflexioai/reflexio#table-of-contents)

- [Demo](https://github.com/reflexioai/reflexio#demo)
- [Quick Start](https://github.com/reflexioai/reflexio#quick-start)
- [Features](https://github.com/reflexioai/reflexio#features)
- [Integrations](https://github.com/reflexioai/reflexio#integrations)
- [SDK Usage](https://github.com/reflexioai/reflexio#sdk-usage)
- [Architecture](https://github.com/reflexioai/reflexio#architecture)
- [Documentation](https://github.com/reflexioai/reflexio#documentation)
- [Contributing](https://github.com/reflexioai/reflexio#contributing)
- [Star History](https://github.com/reflexioai/reflexio#star-history)
- [License](https://github.com/reflexioai/reflexio#license)

## Demo

[https://github.com/reflexioai/reflexio#demo](https://github.com/reflexioai/reflexio#demo)

[https://github.com/ReflexioAI/reflexio/blob/main/docs/images/reflexio_example.gif](https://github.com/ReflexioAI/reflexio/blob/main/docs/images/reflexio_example.gif)

## Quick Start

[https://github.com/reflexioai/reflexio#quick-start](https://github.com/reflexioai/reflexio#quick-start)

### Prerequisites

[https://github.com/reflexioai/reflexio#prerequisites](https://github.com/reflexioai/reflexio#prerequisites)

| Tool | Description |
|---|---|
| uv | Python package manager |
| Node.js >= 18 | Frontend runtime |

[https://github.com/ReflexioAI/reflexio/blob/main/docs/images/demo.gif](https://github.com/ReflexioAI/reflexio/blob/main/docs/images/demo.gif)

### Setup

[https://github.com/reflexioai/reflexio#setup](https://github.com/reflexioai/reflexio#setup)

**Option A — Install from PyPI** (fastest, for users):

```
pip install reflexio-ai

# start/stop services. data saved under ~/.reflexio
reflexio services start           # API (8081), Docs (8082), SQLite storage
reflexio services stop            # Stop all services
```

**Option B — Clone from source** (for contributors):

```
# clone the repo
git clone https://github.com/ReflexioAI/reflexio.git
cd reflexio

# configure: copy env template, then set at least one LLM API key (OpenAI, Anthropic, etc.)
cp .env.example .env

# install dependencies
uv sync                                    # Python (includes workspace packages)
npm --prefix docs install                  # API docs

# start/stop services. data saved under ~/.reflexio
uv run reflexio services start             # API (8081), Docs (8082), SQLite storage
uv run reflexio services stop              # Stop all services
```

> Alternative: `python -m reflexio.cli services start` or `./run_services.sh`

Once running, open **[http://localhost:8082](http://localhost:8082)** to interactively browse and try out the API.

[https://github.com/ReflexioAI/reflexio/blob/main/docs/images/doc_website.png](https://github.com/ReflexioAI/reflexio/blob/main/docs/images/doc_website.png)

### Try it in 30 seconds (CLI)

[https://github.com/reflexioai/reflexio#try-it-in-30-seconds-cli](https://github.com/reflexioai/reflexio#try-it-in-30-seconds-cli)

Reflexio ships a first-class CLI — the fastest way to see the loop end-to-end with no code. Publish a real multi-turn conversation where the user **corrects** the agent (that's the signal Reflexio learns from), then search for what was extracted:

```
uv run reflexio publish --user-id alice --wait --data '{
  "interactions": [
    {"role": "user",      "content": "Deploy the new service."},
    {"role": "assistant", "content": "Starting deployment to us-east-1..."},
    {"role": "user",      "content": "Wait — we never deploy production to us-east-1. Always use us-west-2."},
    {"role": "assistant", "content": "Understood. Switching to us-west-2."}
  ]
}'

# Search the extracted profiles and playbooks
uv run reflexio search "deployment region"
```

One conversation, two artifacts: a user profile (`production region is us-west-2`) and an agent playbook (`confirm region before deploying`). See the [CLI reference](https://github.com/ReflexioAI/reflexio/blob/main/reflexio/cli/README.md) for all input modes (inline JSON, `--file`, `--stdin`) and the full command list.

### Integrate with the Python SDK

[https://github.com/reflexioai/reflexio#integrate-with-the-python-sdk](https://github.com/reflexioai/reflexio#integrate-with-the-python-sdk)

```
import reflexio

client = reflexio.ReflexioClient(
    url_endpoint="http://localhost:8081/"
)

# Publish a multi-turn conversation where the user corrects the agent —
# Reflexio extracts a profile ("prod region = us-west-2") and a playbook
# ("confirm region before deploying").
client.publish_interaction(
    user_id="alice",
    interactions=[
        {"role": "user",      "content": "Deploy the new service."},
        {"role": "assistant", "content": "Starting deployment to us-east-1..."},
        {"role": "user",      "content": "Wait — we never deploy production to us-east-1. Always use us-west-2."},
        {"role": "assistant", "content": "Understood. Switching to us-west-2."},
    ],
)
```

Reflexio will automatically generate profiles and extract playbooks in the background.

## Features

[https://github.com/reflexioai/reflexio#features](https://github.com/reflexioai/reflexio#features)

### Profile Generation

[https://github.com/reflexioai/reflexio#profile-generation](https://github.com/reflexioai/reflexio#profile-generation)

- Extracts behavioral profiles from conversations using configurable extractors
- Supports versioning (current → pending → archived) with upgrade/downgrade workflows
- Multiple extractors run in parallel with independent windows and strides

[Read more about user profiles →](https://www.reflexio.ai/docs/concepts/user-profiles)

### Playbook Extraction & Aggregation

[https://github.com/reflexioai/reflexio#playbook-extraction--aggregation](https://github.com/reflexioai/reflexio#playbook-extraction--aggregation)

- Extracts playbooks from user behavior patterns
- Clusters similar entries and aggregates with LLM (with change detection to skip unchanged clusters)
- Approval workflow: review and approve/reject agent playbooks

[Read more about agent playbooks →](https://www.reflexio.ai/docs/concepts/agent-playbook)

### Expert Learning

[https://github.com/reflexioai/reflexio#expert-learning](https://github.com/reflexioai/reflexio#expert-learning)

- Publish human-expert ideal responses alongside agent responses via the `expert_content` field
- Reflexio automatically compares agent vs. expert responses, focusing on substantive differences (missing info, incorrect approach, reasoning gaps) while ignoring stylistic ones
- Generates actionable playbooks as trigger/instruction/pitfall SOPs that teach the agent what to do differently

[Read more about interactions & expert content →](https://www.reflexio.ai/docs/concepts/interactions#5-expert-content-for-learning-from-experts)

### Agent Success Evaluation

[https://github.com/reflexioai/reflexio#agent-success-evaluation](https://github.com/reflexioai/reflexio#agent-success-evaluation)

- Session-level evaluation triggered automatically (10 min after last request)
- Shadow comparison mode: A/B test regular vs shadow agent responses
- Tool usage analysis for blocking issue detection

[Read more about evaluation →](https://www.reflexio.ai/docs/examples/agent-evaluation)

### Search & Retrieval

[https://github.com/reflexioai/reflexio#search--retrieval](https://github.com/reflexioai/reflexio#search--retrieval)

- Hybrid search (vector + full-text) across profiles and playbooks
- LLM-powered query rewriting for improved recall
- Unified search across all entity types in parallel
- **Fast at scale**: unified search across ~3,000 indexed rows (profile + user playbook + agent playbook, ~1,000 rows each, queried in parallel) runs at **~57 ms p50 / ~73 ms p95** — measured service-layer with local SQLite on an Apple Silicon MacBook, 30 trials × 20 fixed queries. See the [full benchmark report](https://github.com/ReflexioAI/reflexio/blob/main/reflexio/benchmarks/retrieval_latency/results/report.md) or reproduce with [reflexio.benchmarks.retrieval_latency](https://github.com/ReflexioAI/reflexio/blob/main/reflexio/benchmarks/retrieval_latency/README.md).

### Multi-Provider LLM Support
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

