---
repo: lingxi-agent/lingxi
url: https://github.com/lingxi-agent/lingxi
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - lingxi-agent/Lingxi · GitHub

**Source**: https://github.com/lingxi-agent/lingxi

---

[Skip to content](https://github.com/lingxi-agent/lingxi#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[lingxi-agent](https://github.com/lingxi-agent)

/
**[Lingxi](https://github.com/lingxi-agent/Lingxi)**

Public

- [Notifications](https://github.com/login?return_to=%2Flingxi-agent%2FLingxi)You must be signed in to change notification settings
- [Fork
    37](https://github.com/login?return_to=%2Flingxi-agent%2FLingxi)
- 
[Star
          243](https://github.com/login?return_to=%2Flingxi-agent%2FLingxi)

[https://github.com/lingxi-agent/Lingxi](https://github.com/lingxi-agent/Lingxi)

[Branches](https://github.com/lingxi-agent/Lingxi/branches)[Tags](https://github.com/lingxi-agent/Lingxi/tags)

[https://github.com/lingxi-agent/Lingxi/branches](https://github.com/lingxi-agent/Lingxi/branches)[https://github.com/lingxi-agent/Lingxi/tags](https://github.com/lingxi-agent/Lingxi/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History19 Commits19 Commits |  |  |  |
| docs | docs |  |  |
| imgs | imgs |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_backup.md | README_backup.md |  |  |
| langgraph.json | langgraph.json |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/lingxi-agent/Lingxi/blob/master/imgs/Lingxi_logo.png](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/Lingxi_logo.png)

[https://deepwiki.com/nimasteryang/Lingxi](https://deepwiki.com/nimasteryang/Lingxi)

# Lingxi: Knowledge-Guided Multi-Agent Framework for Repository-Level Issue Resolution

[https://github.com/lingxi-agent/lingxi#lingxi-knowledge-guided-multi-agent-framework-for-repository-level-issue-resolution](https://github.com/lingxi-agent/lingxi#lingxi-knowledge-guided-multi-agent-framework-for-repository-level-issue-resolution)

**Lingxi** is an open-source, multi-agent framework that automates repository-level software issue resolution. It decomposes the repair workflow into specialized agents and leverages historical development knowledge to guide the repair process.

Lingxi has evolved through two major versions:

- **Lingxi v1.5** mines transferable procedural knowledge from historical issue-patch pairs and uses multiple analysis agents to examine the target issue from different perspectives, achieving **74.6% Pass@1** on SWE-bench Verified.
- **Lingxi v2.0** introduces a *trajectory-to-guidance* mechanism that distills stage-aware procedural guidance from historical repair trajectories, achieving **81.2% Pass@1** on SWE-bench Verified -- the **first autonomous agent to exceed 80%** on this benchmark.

---

## Key Results

[https://github.com/lingxi-agent/lingxi#key-results](https://github.com/lingxi-agent/lingxi#key-results)

| Version | Backbone Model | Pass@1 (%) | Leaderboard |
|---|---|---|---|
| Lingxi v2.0 | MiniMax M2.5 (HR) | 81.2 | #1 |
| Lingxi v1.5 | Claude 4 Sonnet | 74.6 | - |

### Lingxi v2.0 vs. State-of-the-Art

[https://github.com/lingxi-agent/lingxi#lingxi-v20-vs-state-of-the-art](https://github.com/lingxi-agent/lingxi#lingxi-v20-vs-state-of-the-art)

| Approach | Backbone Model | Pass@1 (%) |
|---|---|---|
| Lingxi v2.0 | MiniMax M2.5 (HR) | 81.2 |
| live-SWE-agent | Claude 4.5 Opus (Medium) | 79.2 |
| Sonar Foundation Agent | Claude 4.5 Opus | 79.2 |
| TRAE | Doubao-Seed-Code | 78.8 |
| mini-SWE-agent v2 | MiniMax M2.5 (HR) | 75.8 |
| Lingxi v1.5 | Claude 4 Sonnet | 74.6 |

---

## Lingxi v1.5 -- Knowledge-Guided Analysis Scaling

[https://github.com/lingxi-agent/lingxi#lingxi-v15----knowledge-guided-analysis-scaling](https://github.com/lingxi-agent/lingxi#lingxi-v15----knowledge-guided-analysis-scaling)

[https://github.com/lingxi-agent/Lingxi/blob/master/docs/lingxiarch.png](https://github.com/lingxi-agent/Lingxi/blob/master/docs/lingxiarch.png)

Lingxi v1.5 builds on two key observations: (1) once a model has a clear edit plan, the code edit usually works if the root cause is correctly located; (2) single-agent pipelines suffer from **context dilution** -- by the time the model reaches code editing, earlier discussion tokens dominate the prompt. Lingxi addresses these by focusing on precise root-cause analysis through historical knowledge, and splitting the workflow into compact, purpose-built agents.

**Historical Development Knowledge** -- A module searches the project's history for similar issues and their patches, reverse-engineers the underlying development knowledge, and injects it as a prior into multiple Problem Decoder agents. Each agent analyzes the issue from a different perspective. An Aggregate module merges these analyses into a single comprehensive report, from which the Solution Mapper and Problem Solver generate one accurate patch.

**Multi-Agent Design Principles** -- Each agent gets a crystal-clear contract (mandatory inputs, expected outputs, and the *only* tools it may call). After every agent, the coordinator compresses conversation history to thinking, observations, and actions, discarding verbose tool-call results. Every prompt reminds the agent of the team composition and urges it to stay within scope.

**Tooling Philosophy** -- Lingxi follows a "minimal tool set, maximal information" approach. Tools are designed to provide accurate, sufficient information per call so that the LLM needs fewer steps. All tools are exposed through structured function-calling.

---

## Lingxi v2.0 -- Trajectory-to-Guidance

[https://github.com/lingxi-agent/lingxi#lingxi-v20----trajectory-to-guidance](https://github.com/lingxi-agent/lingxi#lingxi-v20----trajectory-to-guidance)

[https://github.com/lingxi-agent/Lingxi/blob/master/imgs/overview_fig.jpg](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/overview_fig.jpg)

V1.5's pattern-oriented knowledge compresses history into high-level takeaways, which can omit stage-dependent details or mislead the agent when the retrieved patterns don't fit. V2.0 addresses this with a **trajectory-to-guidance** mechanism that distills **stage-aware procedural guidance** from repair trajectories -- focusing on *how to localize, validate, and iterate* rather than only listing fix patterns.

The system follows four phases:

1. 

**Trajectory Collection** -- For similar historical issues, execute the Lingxi repair pipeline and record the complete problem-solving trace, stored in stage-aligned form (Decoder, Solution, Solver).

2. 

**Trajectory Distillation** -- Distill each trajectory into a multi-level abstraction tree: lower levels retain concrete diagnostic sub-goals, middle levels capture broader investigation strategies, and the top level distills general problem-solving principles. Each node also carries **pitfall warnings** from the original repair.

3. 

**Retrieval & Plan Generation** -- For each repair stage, retrieve relevant abstracted nodes via rule-based scoring + LLM-based verification, then generate a **stage-specific plan** adapted to the target issue's context.

4. 

**Guided Repair** -- Inject plans into each stage as structured guidance. Plans inform but do not rigidly determine the repair -- the agent adapts based on newly observed evidence. Completed trajectories are abstracted back for future reuse.

---

## Publications & Resources

[https://github.com/lingxi-agent/lingxi#publications--resources](https://github.com/lingxi-agent/lingxi#publications--resources)

- **Lingxi v1.5**: *Lingxi: Repository-Level Issue Resolution Framework Enhanced by Procedural Knowledge Guided Scaling.*[Paper (arXiv)](https://arxiv.org/abs/2510.11838) | [Technical Report (PDF)](https://github.com/lingxi-agent/Lingxi/blob/master/docs/Lingxi%20v1.5%20Technical%20Report%20200725.pdf) | [Replication Package (Zenodo)](https://doi.org/10.5281/zenodo.16777249)
- **Lingxi v2.0**: *Trajectory Abstraction for Guidance-Driven Repository-Level Issue Resolution.*[Technical Report (PDF)](https://github.com/lingxi-agent/Lingxi/blob/master/docs/Lingxi%20v2.0%20Technical%20Report%202026.pdf) | Paper coming soon
- **SWE-bench Submission**: [SWE-bench/experiments#432](https://github.com/SWE-bench/experiments/pull/432)

---

## Setup

[https://github.com/lingxi-agent/lingxi#setup](https://github.com/lingxi-agent/lingxi#setup)

### 1. Install Dependencies

[https://github.com/lingxi-agent/lingxi#1-install-dependencies](https://github.com/lingxi-agent/lingxi#1-install-dependencies)

```
# Using pip
cd Lingxi && pip install -e .

# Or using uv (recommended)
uv sync
```

### 2. Configure Environment Variables

[https://github.com/lingxi-agent/lingxi#2-configure-environment-variables](https://github.com/lingxi-agent/lingxi#2-configure-environment-variables)

Create a `.env` file in the project root:

```
# LLM Configuration
LLM_PROVIDER=anthropic          # Options: "anthropic", "openai", "deepseek"
LLM_MODEL=claude-3-5-haiku-latest

# API Keys (set the one matching your LLM_PROVIDER)
ANTHROPIC_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here    # Also required for embeddings (text-embedding-3-small)
# DEEPSEEK_API_KEY=your_key_here

# GitHub Access
GITHUB_TOKEN=your_token_here    # Profile > Settings > Developer Settings > Personal access tokens
```

### 3. Run

[https://github.com/lingxi-agent/lingxi#3-run](https://github.com/lingxi-agent/lingxi#3-run)

```
# Using pip installation
langgraph dev --no-reload

# Using uv
uv run --env-file .env langgraph dev --no-reload
```

This starts a local LangGraph Studio instance and opens the UI in your browser.

### 4. Usage

[https://github.com/lingxi-agent/lingxi#4-usage](https://github.com/lingxi-agent/lingxi#4-usage)

1. 

Select a graph from the top-left dropdown: [https://github.com/lingxi-agent/Lingxi/blob/master/imgs/GraphSelect.png](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/GraphSelect.png)

2. 

Click **"+ Message"** and paste a GitHub issue URL (e.g., `https://github.com/gitpython-developers/GitPython/issues/1977`): [https://github.com/lingxi-agent/Lingxi/blob/master/imgs/AddMsg.png](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/AddMsg.png)

3. 

Click **Submit**.

> **Human-in-the-loop**: Disabled by default. Enable via the checkbox in the LangGraph Studio UI before submitting: [https://github.com/lingxi-agent/Lingxi/blob/master/imgs/HILenable.png](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/HILenable.png)

---

## Architecture

[https://github.com/lingxi-agent/lingxi#architecture](https://github.com/lingxi-agent/lingxi#architecture)

### Agent System

[https://github.com/lingxi-agent/lingxi#agent-system](https://github.com/lingxi-agent/lingxi#agent-system)

| Agent | Role | Tools |
|---|---|---|
| Supervisor | Routes workflow between agents based on progress | - |
| Problem Decoder | Analyzes issues, performs bug localization | view_directory, search_relevant_files, view_file_content |
| Solution Mapper | Creates detailed code change plans | view_directory, search_relevant_files, view_file_content |
| Problem Solver | Implements code changes | view_directory, search_relevant_files, str_replace_editor |
| Reviewer | Validates fixes and runs tests (hierarchy graph only) | view_directory, search_relevant_files, view_file_content, run_shell_cmd |
| Multi-Agent Manager | Coordinates resolver and reviewer (hierarchy graph only) | - |

### Graphs

[https://github.com/lingxi-agent/lingxi#graphs](https://github.com/lingxi-agent/lingxi#graphs)

**Supervisor Graph** (`src/agent/supervisor_graph_demo.py`):

[https://github.com/lingxi-agent/Lingxi/blob/master/imgs/graph1.png](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/graph1.png)

A linear workflow: `input_handler` -> `supervisor` -> `problem_decoder` -> `solution_mapper` -> `problem_solver`, with optional human feedback after each step.

**Hierarchy Graph** (`src/agent/hierarchy_graph_demo.py`):

[https://github.com/lingxi-agent/Lingxi/blob/master/imgs/graph2.png](https://github.com/lingxi-agent/Lingxi/blob/master/imgs/graph2.png)

Wraps the supervisor graph as a subgraph, adding a multi-agent manager and reviewer for iterative fix validation.

### Tool Set

[https://github.com/lingxi-agent/lingxi#tool-set](https://github.com/lingxi-agent/lingxi#tool-set)

| Tool | Description | Location |
|---|---|---|
| view_directory | Explore repository tree with adaptive depth | src/agent/tool_set/sepl_tools.py |
| view_file_content | Inspect file text, auto-truncates long files | src/agent/tool_set/sepl_tools.py |
| search_files_by_keywords | Multi-keyword semantic search via ripgrep | src/agent/tool_set/sepl_tools.py |
| str_replace_editor | Apply code edits (view, create, replace, insert) | src/agent/tool_set/edit_tool.py |
| run_shell_cmd | Execute sequential shell commands | src/agent/tool_set/sepl_tools.py |

---

## Development Guide

[https://github.com/lingxi-agent/lingxi#development-guide](https://github.com/lingxi-agent/lingxi#development-guide)

For a comprehensive guide with code examples on adding agents, tools, and graphs, see [docs/DEVELOPMENT.md](https://github.com/lingxi-agent/Lingxi/blob/master/docs/DEVELOPMENT.md). For detailed file-level documentation, see [CLAUDE.md](https://github.com/lingxi-agent/Lingxi/blob/master/CLAUDE.md).

### Quick Reference

[https://github.com/lingxi-agent/lingxi#quick-reference](https://github.com/lingxi-agent/lingxi#quick-reference)

- **Adding agents**: Create prompt in `src/agent/prompt/`, define tools, use `create_react_agent()`, add node to `StateGraph`
- **Creating graphs**: Define `StateGraph`, add nodes/edges, compile, register in `langgraph.json`
- **Adding tools**: Use `@tool` decorator with docstrings, link to agents via `tools` parameter

### Code Quality

[https://github.com/lingxi-agent/lingxi#code-quality](https://github.com/lingxi-agent/lingxi#code-quality)

```
ruff check src/    # Linting
ruff format src/   # Formatting
mypy src/          # Type checking
pytest             # Testing
```

---

## Project Structure

[https://github.com/lingxi-agent/lingxi#project-structure](https://github.com/lingxi-agent/lingxi#project-structure)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

