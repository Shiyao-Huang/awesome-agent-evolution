---
repo: hankbesser/recursive-agents
url: https://github.com/hankbesser/recursive-agents
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - hankbesser/recursive-agents: A meta-framework for self-improving LLMs with transparent reasoning · GitHub

**Source**: https://github.com/hankbesser/recursive-agents

---

[Skip to content](https://github.com/hankbesser/recursive-agents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[hankbesser](https://github.com/hankbesser)

/
**[recursive-agents](https://github.com/hankbesser/recursive-agents)**

Public

- [Notifications](https://github.com/login?return_to=%2Fhankbesser%2Frecursive-agents)You must be signed in to change notification settings
- [Fork
    5](https://github.com/login?return_to=%2Fhankbesser%2Frecursive-agents)
- 
[Star
          39](https://github.com/login?return_to=%2Fhankbesser%2Frecursive-agents)

[https://github.com/hankbesser/recursive-agents](https://github.com/hankbesser/recursive-agents)

[Branches](https://github.com/hankbesser/recursive-agents/branches)[Tags](https://github.com/hankbesser/recursive-agents/tags)

[https://github.com/hankbesser/recursive-agents/branches](https://github.com/hankbesser/recursive-agents/branches)[https://github.com/hankbesser/recursive-agents/tags](https://github.com/hankbesser/recursive-agents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History67 Commits67 Commits |  |  |  |
| core | core |  |  |
| demos | demos |  |  |
| docs | docs |  |  |
| images | images |  |  |
| recursive_agents | recursive_agents |  |  |
| templates | templates |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| streamlit_app.py | streamlit_app.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Recursive Agents

[https://github.com/hankbesser/recursive-agents#recursive-agents](https://github.com/hankbesser/recursive-agents#recursive-agents)

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://github.com/hankbesser/recursive-agents/blob/main/CONTRIBUTING.md](https://github.com/hankbesser/recursive-agents/blob/main/CONTRIBUTING.md)

## A Meta-Framework for Self-Improving Agents

[https://github.com/hankbesser/recursive-agents#a-meta-framework-for-self-improving-agents](https://github.com/hankbesser/recursive-agents#a-meta-framework-for-self-improving-agents)

Recursive Agents implements a **three-phase iterative refinement architecture** where LLM agents (instances of Classes) critique and improve their own outputs. Unlike single-pass systems, each agent automatically tracks its full revision history, making every decision and debuggable.

[https://github.com/hankbesser/recursive-agents/blob/main/images/Sequence_Summary.svg](https://github.com/hankbesser/recursive-agents/blob/main/images/Sequence_Summary.svg)

→ See the [Architecture Documentation](https://github.com/hankbesser/recursive-agents/blob/main/docs/RA_architecture.md) for detailed system design.

### Why Recursive Agents?

[https://github.com/hankbesser/recursive-agents#why-recursive-agents](https://github.com/hankbesser/recursive-agents#why-recursive-agents)

**See inside the thinking.*** Every instance maintains a complete trail of its critique-revision cycles, stopping conditions, and decision rationale. This transparency is built-in.

**Flexible template loading.** The `build_templates()` utility lets you compose analytical patterns: override just what changes (usually only initial system template per domain), apply overarching protocols to specific phases (usually throughout system templates in all realted domains for consistent behavior), or skip protocols entirely. System templates define WHO the agent is, user templates define WHAT task to perform, and protocols shape HOW to analyze—each layer independently configurable.

---

## Summary of RA Patterns

[https://github.com/hankbesser/recursive-agents#summary-of-ra-patterns](https://github.com/hankbesser/recursive-agents#summary-of-ra-patterns)

| Code Pattern | Why It Matters |
|---|---|
| Draft|LLM → Critique|LLM → Revision|LLM chains built once | Three-phase self-improvement is automatic - no manual wiring |
| One protocol_context.txt feeds all system prompts | Change reasoning style everywhere with one edit |
| Templates live as .txt files on disk | Git tracks prompt changes; hot-reload without restarting |
| New expert domain = inherit BaseCompanion + point to template | Three lines of code gets you a complete agent |
| Every Companion instance  is itself an agent() or RunnableLambda(agent) | Same object works standalone or in any framework |
| Built-in run_log tracks all iterations | See why decisions were made without adding instrumentation |

---

### Download

[https://github.com/hankbesser/recursive-agents#download](https://github.com/hankbesser/recursive-agents#download)

```
# conda
conda create -n recursive-agents python=3.13 -y # (or python=3.14 -y)
conda activate recursive-agents
# venv
# python -m venv venv
# source venv/bin/activate  

# clone and install
git clone https://github.com/hankbesser/recursive-agents.git
cd recursive-agents
pip install -e .  # or pip install . for non-editable
# pip install -e .[all] for running the streamlit app
```

---

### Ask Your Agentic Coding tool to Think Deeply about this Project

[https://github.com/hankbesser/recursive-agents#ask-your-agentic-coding-tool-to-think-deeply-about-this-project](https://github.com/hankbesser/recursive-agents#ask-your-agentic-coding-tool-to-think-deeply-about-this-project)

**"Ok please think as deeply as possible about this project. Start with the main core engine is in core/chains.py - giving every detail you can see from it and what it does. Then go to the package level in recursive_agents including template_load_utils.py and base.py and do the same deep thinking process. Then read the templates folder starting with the protocol, then system prompts, then the user prompts. Lastly, go to all files in the the demos folder- again, as deep of analysis as you can go. It's good to get a deep grasp of this project."**

---

## Architecture: Clean Layers, Clear Purpose

[https://github.com/hankbesser/recursive-agents#architecture-clean-layers-clear-purpose](https://github.com/hankbesser/recursive-agents#architecture-clean-layers-clear-purpose)

→ See the [Architecture Documentation](https://github.com/hankbesser/recursive-agents/blob/main/docs/RA_architecture.md)

```
Your Code
    ↓ imports
recursive_agents/        # Pick your companion
    ├── base.py             # Standard: Marketing, Bug, Strategy, Generic
    └── streamlit.py        # Same companions + live UI updates
        ↓ inherits
core/chains.py              # The engine: 3-phase loop, convergence, history
        ↓ uses
templates/*.txt             # Hot-swappable prompts + protocol injection
```

**Where to Look (Separation of Concerns):**

- `core/chains.py` (how to build the chains, storage/caching/memory management, observability, iteration process, etc.)
- `recursive_agents/base.py` (picking companions)
- `templates/` folder + `template_load_utils.py`
- `streamlit_app.py` (progress containers)

**Tip:** Each module includes extensive docstrings and comments explaining design decisions, usage patterns, and implementation details. Start with the docstrings for understanding.

---

## Three Levels of Understanding

[https://github.com/hankbesser/recursive-agents#three-levels-of-understanding](https://github.com/hankbesser/recursive-agents#three-levels-of-understanding)

### Level 1: Just Use It (5 minutes)

[https://github.com/hankbesser/recursive-agents#level-1-just-use-it-5-minutes](https://github.com/hankbesser/recursive-agents#level-1-just-use-it-5-minutes)

```
from recursive_agents import MarketingCompanion

# Create an agent - it's just a callable!
agent = MarketingCompanion("gpt-4o-mini")

# Get a refined answer through automatic critique cycles
answer = agent("Why did engagement drop 30%...?")
print(answer)  # Final, refined analysis after self-critique

# Note: agent("...") is the same as agent.loop("...")
# The __call__ method is an alias for loop()
# This makes companions work as simple callables in any framework!

# Want to see the thinking process? It's all there:
print(f"Iterations: {len(agent.run_log)}")
print(f"Final critique: {agent.run_log[-1]['critique']}")

# Get beautifully formatted thinking history
print(agent.transcript_as_markdown())
# Outputs:
# ### Iteration 1
# **Draft**: [Initial analysis...]
# **Critique**: [What could be improved...]
# **Revision**: [Enhanced analysis...]
# (continues for each iteration)
```

### Level 2: Compose & Customize (30 minutes)

[https://github.com/hankbesser/recursive-agents#level-2-compose--customize-30-minutes](https://github.com/hankbesser/recursive-agents#level-2-compose--customize-30-minutes)

```
# 1. Configure companions for different use cases
fast_draft = MarketingCompanion(
    temperature=0.9,         
    max_loops=1,             # Single pass for speed
    clear_history=True       # Don't retain context
)

thoughtful = MarketingCompanion(
    llm="gpt-4.1-mini"
    temperature=0.3,         
    max_loops=3,            
    similarity_threshold=0.99 # Only stop on near-identical
)

# 2. Different ways to get results
simple_answer = fast_draft("Quick take on our Q3 performance...")

# Get both answer and thinking history
answer, thinking = thoughtful.loop("Deep analysis of Q3 performance...")
print(f"Went through {len(thinking)} iterations")
print(thoughtful.transcript_as_markdown())  # See the evolution

# 3. Use verbose mode to watch thinking live
debug_companion = BugTriageCompanion(verbose=True)
result = debug_companion("Users can't upload files >10MB...")
# Prints: USER INPUT, INITIAL DRAFT, CRITIQUE #1, REVISION #1, etc.
```

### Level 3: Extend the Framework (2 hours)

[https://github.com/hankbesser/recursive-agents#level-3-extend-the-framework-2-hours](https://github.com/hankbesser/recursive-agents#level-3-extend-the-framework-2-hours)

```
# Step 1: Create your domain template (templates/legal_initial_sys.txt)
"""
{context}  # Protocol automatically injected

You are a Legal Analysis Companion specializing in contract review,
compliance assessment, and risk evaluation. Focus on:
- Identifying potential legal liabilities
- Highlighting ambiguous language
- Suggesting protective clauses
"""

# Step 2: Create your companion class (just 4 lines!)

from recursive_agents.core.chains import BaseCompanion
from recursive_agents.template_load_utils import build_templates

# probably best to do in recusrive_companion/base.py with other Companions
LEGAL_TEMPLATES = build_templates(initial_sys="legal_initial_sys")
class LegalCompanion(BaseCompanion):
    TEMPLATES = LEGAL_TEMPLATES
    SIM_THRESHOLD = 0.99 
    MAX_LOOPS = 4        

# Step 3: Use it immediately
legal = LegalCompanion()
analysis = legal("Review this SaaS agreement for potential risks...")

# Access everything just like built-in companions
print(f"Iterations until convergence: {len(legal.run_log)}")
print(legal.transcript_as_markdown())
```

## Quick Start - Full Streamlit App

[https://github.com/hankbesser/recursive-agents#quick-start---full-streamlit-app](https://github.com/hankbesser/recursive-agents#quick-start---full-streamlit-app)

```
streamlit run streamlit_app.py
```

[https://github.com/hankbesser/recursive-agents/blob/main/images/Streamlit_App_Screenshot.png](https://github.com/hankbesser/recursive-agents/blob/main/images/Streamlit_App_Screenshot.png)

**You get a full interactive application:**

- Select any companion type from the dropdown
- Adjust features in side bar
- Enter your prompt and watch the AI refine its response
- System templates and protocol viewer (updated when changes made in `templates/` and app reloads)
- See critique-revision cycles happen in real-time
- View cosine similarity scores update live

---

---

## Multi-Agent Orchestration

[https://github.com/hankbesser/recursive-agents#multi-agent-orchestration](https://github.com/hankbesser/recursive-agents#multi-agent-orchestration)

#### **Raw Python** (Sequential with Full Observability):

[https://github.com/hankbesser/recursive-agents#raw-python-sequential-with-full-observability](https://github.com/hankbesser/recursive-agents#raw-python-sequential-with-full-observability)

- [multi agent RA notebook](https://github.com/hankbesser/recursive-agents/blob/main/demos/multi_agent_raw_ra_demo.ipynb)
- [multi agent RA pyton file](https://github.com/hankbesser/recursive-agents/blob/main/demos/multi_agent_raw_ra_demo.py)

```
from recursive_agents.base import MarketingCompanion, BugTriageCompanion, StrategyCompanion

problem = "App crashes on upload, users leaving bad reviews..."

# Each agent analyzes independently
mkt = MarketingCompanion()
bug = BugTriageCompanion()
strategy = StrategyCompanion()

mkt_view = mkt(problem)
bug_view = bug(problem)

# Combine insights
combined = f"Marketing: {mkt_view}

Engineering: {bug_view}"
action_plan = strategy(combined)

# Full introspection available for each agent
print(f"Marketing iterations: {len(mkt.run_log)}")
print(f"Engineering iterations: {len(bug.run_log)}")
print(f"Strategy iterations: {len(strategy.run_log)}")

# See why strategy reached its conclusion
print(strategy.transcript_as_markdown())
```

#### **LangGraph** (Parallel Execution + RA Transparency):

[https://github.com/hankbesser/recursive-agents#langgraph-parallel-execution--ra-transparency](https://github.com/hankbesser/recursive-agents#langgraph-parallel-execution--ra-transparency)

- [multi agent RA callable / LangGraph notebook](https://github.com/hankbesser/recursive-agents/blob/main/demos/multi_agent_langgraph_demo.ipynb)
- [multi agent RA callable / LangGraph python file](https://github.com/hankbesser/recursive-agents/blob/main/demos/multi_agent_langgraph_demo.py)

```
from langchain_core.runnables import RunnableLambda
from langgraph.graph import StateGraph
from typing import TypedDict

# Same companions work as LangGraph nodes!
# mkt, bug instances from raw RA example above
mkt_node = RunnableLambda(mkt)
eng_node = RunnableLambda(bug)
strategy_node = RunnableLambda(strategy)

# Simple merge function
merge_node = RunnableLambda(
    lambda d: f"Marketing: {d['marketing']}

Engineering: {d['engineering']}"
)

# Define the state schema for LangGraph
class GraphState(TypedDict):
    input: str
    marketing: str
    engineering: str
    merged: str
    final_plan: str

# Build parallel workflow
# No extra prompts, no schema gymnastics: simply passing text between the callables the classes already expose.
graph = StateGraph(GraphState)
graph.add_node("marketing_agent",   lambda state: {"marketing": mkt_node.invoke(state["input"])})
graph.add_node("engineering_agent", lambda state: {"engineering": eng_node.invoke(state["input"])})
graph.add_node("merge_agent",       lambda state: {"merged": merge_node.invoke(state)})
graph.add_node("strategy_agent",    lambda state: {"final_plan": plan_node.invoke(state["merged"])})

graph.add_edge("marketing_agent", "merge_agent")
graph.add_edge("engineering_agent", "merge_agent")
graph.add_edge("merge_agent", "strategy_agent")

graph.add_edge("__start__", "marketing_agent")
graph.add_edge("__start__", "engineering_agent")
graph.set_finish_point("strategy_agent")
workflow = graph.compile()

# Run workflow
result = workflow.invoke({"input": problem})

# RA's thinking history still available!
print(mkt.transcript_as_markdown())     # Full marketing analysis
print(bug.transcript_as_markdown())     # Full engineering analysis
print(strategy.transcript_as_markdown()) # How strategy synthesized both
```

---

### Creating Your Own Companion

[https://github.com/hankbesser/recursive-agents#creating-your-own-companion](https://github.com/hankbesser/recursive-agents#creating-your-own-companion)

#### 1. Write your

[https://github.com/hankbesser/recursive-agents#1-write-your](https://github.com/hankbesser/recursive-agents#1-write-your)

```
# templates/financial_initial_sys.txt
{context}  # Protocol automatically injected

You are a Financial Analysis Companion. Focus on:
- Cash flow patterns and anomalies
- Risk indicators and market conditions
