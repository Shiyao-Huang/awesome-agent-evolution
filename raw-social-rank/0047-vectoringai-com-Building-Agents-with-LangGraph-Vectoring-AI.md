# Building Agents with LangGraph – Vectoring AI

- URL: https://vectoringai.com/posts/agent/Building-Agents-with-LangGraph.html
- Platform: vectoringai.com
- Extraction status: ok
- content_timestamp: ```
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def agent_node(state: AgentState) -> dict:
    """Call the LLM with the current messages
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "LangGraph" "agent"

## Raw Content

## Building Agents with LangGraph – Vectoring AI

**Source**: https://vectoringai.com/posts/agent/Building-Agents-with-LangGraph.html

---

We use cookies to improve your browsing experience, support the operation of this site, and understand how visitors use our content.     You can accept all cookies, accept only essential cookies, or deny non-essential cookies.     [Privacy Policy](https://vectoringai.com/pages/privacy.html)

![](https://vectoringai.com/images/agent/building-agents-langgraph-300px.png)

LangGraph state machine with conditional routing and checkpoints

## Introduction

Most agent frameworks treat the agent as a **function** — input goes in, output comes out, and everything in between is a black box. This works for simple tool-calling loops, but production agents need more: persistent state, conditional branching, cycles that can be interrupted and resumed, and human approval gates that pause execution mid-workflow.

**LangGraph** is a low-level orchestration framework built on top of LangChain that models agents as **state machines** — directed graphs where nodes are processing steps, edges define control flow, and a shared state object threads through the entire execution. It was inspired by [Pregel](https://research.google/pubs/pub37252/) (Google’s graph processing framework) and [Apache Beam](https://beam.apache.org/), and its public interface draws from [NetworkX](https://networkx.org/documentation/latest/).

The key insight: by representing agent logic as an explicit graph, you gain:

- **Cycles** — loops that let agents reason, act, observe, and repeat (the ReAct pattern)
- **Conditional routing** — edges that branch based on LLM output or state values
- **Persistence** — checkpointers that save state after every node, enabling resume-from-failure
- **Human-in-the-loop** — interrupts that pause the graph before or after specific nodes for human review
- **Streaming** — token-level and event-level streaming of every step in the graph

This article builds agents with LangGraph from the ground up — starting with core graph primitives, progressing through the prebuilt `create_react_agent`, then covering manual graph construction, checkpointing, human-in-the-loop patterns, streaming, subgraphs, and retrieval-specific workflows.

## Why State Machines for Agents?

### The Limits of Linear Chains

Traditional LLM chains are **directed acyclic graphs (DAGs)** — each step runs exactly once, in order. This is fine for simple pipelines (retrieve → generate → respond), but agents need to loop:

| Pattern | DAG (Chain) | Graph (LangGraph) |
|---|---|---|
| Tool calling | Call tools once, return result | Loop: call tools → check result → call more tools if needed |
| Error recovery | Fail on first error | Retry with modified query, try alternative tool |
| Multi-step reasoning | One reasoning pass | Reason → act → observe → reason again (ReAct loop) |
| Human approval | Not supported | Pause before sensitive actions, resume after approval |
| Conditional flow | Fixed sequence | Route to different nodes based on LLM output or state |

### Agents as State Machines

A state machine has three components:

1. **State** — a shared data structure updated by each node
2. **Nodes** — processing steps (LLM calls, tool execution, data transformation)
3. **Edges** — transitions between nodes, including conditional branches

```
graph TD
    A["__start__"] --> B["agent"]
    B --> C{"Has tool<br/>calls?"}
    C -->|Yes| D["tools"]
    C -->|No| E["__end__"]
    D --> B

    style A fill:#4a90d9,color:#fff,stroke:#333
    style B fill:#9b59b6,color:#fff,stroke:#333
    style C fill:#f5a623,color:#fff,stroke:#333
    style D fill:#e67e22,color:#fff,stroke:#333
    style E fill:#1abc9c,color:#fff,stroke:#333
```

This is the canonical ReAct agent graph — two nodes (`agent` and `tools`), a conditional edge that decides whether to loop or stop, and state that accumulates messages across iterations.

LangGraph makes this pattern explicit, inspectable, and modifiable — you can add nodes, change routing logic, insert human approval gates, or save/restore state at any point.

## Core Concepts

### StateGraph and State Definition

Every LangGraph application starts with a **state definition** — a `TypedDict` that declares what data flows through the graph:

```
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph
from langgraph.graph.message import add_messages

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]  # Append-only message list
    iteration_count: int                      # Overwrite on each update
```

The `Annotated` type with a **reducer function** controls how state updates are merged:

- `Annotated[list, add_messages]` — new messages are **appended** to the existing list (reducer: `add_messages`)
- Plain types like `int` or `str` — new values **overwrite** the previous value

This distinction is critical. Without the reducer, each node would replace the entire message history instead of appending to it.

LangGraph provides a built-in `MessagesState` for the common case:

```
from langgraph.graph import MessagesState

# Equivalent to:
# class MessagesState(TypedDict):
#     messages: Annotated[list, add_messages]
```

### Nodes

Nodes are Python functions (or LangChain runnables) that take the current state and return a partial state update:

```
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)

def agent_node(state: AgentState) -> dict:
    """Call the LLM with the current messages."""
    response = llm.invoke(state["messages"])
    return {"messages": [response]}  # Appended via add_messages reducer
```

Each node receives the **full state** and returns a **partial update** — only the keys it wants to modify.

### Edges: Normal, Conditional, and Entry

**Normal edges** define unconditional transitions:

```
graph.add_edge("tools", "agent")  # After tools, always go to agent
```

**Conditional edges** use a routing function to decide the next node:

```
from langgraph.graph import END

def should_continue(state: AgentState) -> str:
    """Route based on whether the LLM wants to call tools."""
    last_message = state["messages"][-1]
    if last_message.tool_calls:
        return "tools"
    return END

graph.add_conditional_edges("agent", should_continue, {
    "tools": "tools",
    END: END,
})
```

**Entry point** sets the first node:

```
graph.set_entry_point("agent")
# Or equivalently:
from langgraph.graph import START
graph.add_edge(START, "agent")
```

### Compile and Run

After defining nodes and edges, compile the graph into a runnable:

```
app = graph.compile()

# Invoke synchronously
result = app.invoke({
    "messages": [{"role": "user", "content": "What is 25 * 4?"}]
})

# Stream events
for event in app.stream({
    "messages": [{"role": "user", "content": "What is 25 * 4?"}]
}):
    print(event)
```

The compiled graph exposes the same interface as any LangChain runnable — `.invoke()`, `.stream()`, `.ainvoke()`, `.astream()` — making it composable with the broader LangChain ecosystem.

## Quick Start: `create_react_agent`

For the common ReAct pattern, LangGraph provides a prebuilt one-liner that handles graph construction automatically:

```
from langgraph.prebuilt import create_react_agent
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
import httpx
import math

@tool
def search_wikipedia(query: str) -> str:
    """Search Wikipedia and return the first paragraph."""
    url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "list": "search",
        "srsearch": query,
        "format": "json",
        "srlimit": 1,
    }
    resp = httpx.get(url, params=params, timeout=10)
    results = resp.json().get("query", {}).get("search", [])
    if not results:
        return "No results found."
    page_id = results[0]["pageid"]
    extract_resp = httpx.get(url, params={
        "action": "query",
        "prop": "extracts",
        "exintro": True,
        "explaintext": True,
        "pageids": page_id,
        "format": "json",
    }, timeout=10)
    pages = extract_resp.json().get("query", {}).get("pages", {})
    return pages.get(str(page_id), {}).get("extract", "No extract available.")

@tool
def calculator(expression: str) -> str:
    """Evaluate a mathematical expression. Supports +, -, *, /, **."""
    try:
        result = eval(expression, {"__builtins__": {}}, {"sqrt": math.sqrt, "abs": abs})
        return str(result)
    except Exception as e:
        return f"Error: {e}"

# Create the agent in one line
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
agent = create_react_agent(
    model=llm,
    tools=[search_wikipedia, calculator],
    prompt="You are a research assistant. Always verify facts with tools before answering.",
)

# Run it
result = agent.invoke({
    "messages": [{"role": "user", "content": "What is the population of Tokyo divided by 3?"}]
})

for msg in result["messages"]:
    print(f"{msg.type}: {msg.content[:200] if msg.content else '[tool_calls]'}")
```

```
human: What is the population of Tokyo divided by 3?
ai: [tool_calls]
tool: Tokyo, officially the Tokyo Metropolis, is the capital of Japan...population of 13,960,000...
ai: [tool_calls]
tool: 4653333.333333333
ai: The population of Tokyo is approximately 13,960,000. Divided by 3, that gives approximately 4,653,333.
```

Under the hood, `create_react_agent` builds the same two-node graph (agent → tools → agent) with a conditional edge. It accepts customization parameters:

```
# With a system prompt
agent = create_react_agent(
    model=llm,
    tools=[search_wikipedia, calculator],
    prompt="You are a helpful assistant. Cite sources when possible.",
)
```

## Building the Graph Manually

For full control over the agent’s control flow, build the graph from scratch.

### Step 1: Define State and Tools

```
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, END, START
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langchain_core.messages import AIMessage

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]

@tool
def search_wikipedia(query: str) -> str:
    """Search Wikipedia and return the first paragraph."""
    import httpx
    url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query", "list": "search",
        "srsearch": query, "format": "json", "srlimit": 1,
    }
    resp = httpx.get(url, params=params, timeout=10)
    results = resp.json().get("query", {}).get("search", [])
    if not results:
        return "No results found."
    page_id = results[0]["pageid"]
    extract_resp = httpx.get(url, params={
        "action": "query", "prop": "extracts", "exintro": True,
        "explaintext": True, "pageids": page_id, "format": "json",
    }, timeout=10)
    pages = extract_resp.json().get("query", {}).get("pages", {})
    return pages.get(str(page_id), {}).get("extract", "No extract available.")

@tool
def calculator(expression: str) -> str:
    """Evaluate a math expression. Supports +, -, *, /, **."""
    import math
    try:
        result = eval(expression, {"__builtins__": {}}, {"sqrt": math.sqrt, "abs": abs})
        return str(result)
    except Exception as e:
        return f"Error: {e}"

tools = [search_wikipedia, calculator]
```

### Step 2: Define the Agent Node

```
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
llm_with_tools = llm.bind_tools(tools)

def agent_node(state: AgentState) -> dict:
    """Call the LLM with the current messages and bound tools."""
    response = llm_with_tools.invoke(state["messages"])
    return {"messages": [response]}
```

### Step 3: Define the Routing Function

```
def should_continue(state: AgentState) -> str:
    """Route to tools if the LLM made tool calls, otherwise end."""
    last_message = state["messages"][-1]
    if isinstance(last_message, AIMessage) and last_message.tool_calls:
        return "tools"
    return END
```

### Step 4: Assemble the Graph

```
# Create the graph
graph = StateGraph(AgentState)

# Add nodes
graph.add_node("agent", agent_node)
graph.add_node("tools", ToolNode(tools))

# Add edges
graph.add_edge(START, "agent")                         # Start → agent
graph.add_conditional_edges("agent", should_continue, {
    "tools": "tools",
    END: END,
})                                                      # agent → tools OR end
graph.add_edge("tools", "agent")                       # tools → agent (loop back)

# Compile
app = graph.compile()
```

### Step 5: Run

```
result = app.invoke({
    "messages": [{"role": "user", "content": "What's the weather in Paris and what is 15 * 7?"}]
})

for msg in result["messages"]:
    role = msg.type
    content = msg.content if msg.content else "[tool_calls]"
    print(f"{role}: {content[:200]}")
```

This is the same graph that `create_react_agent` builds internally — but now you can modify any part of it.

## Checkpointing and Persistence

### Why Persistence Matters

Without persistence, an agent’s state exists only in memory. If the process crashes, restarts, or the user returns later, everything is lost. LangGraph’s **checkpointers** save a snapshot of the full state after every node execution, enabling:

- **Durable execution** — resume from the last successful node after a crash
- **Multi-turn conversations** — maintain context across separate API calls using a thread ID
- **Time travel** — inspect or replay any previous state in the graph’s execution history
- **Branching** — fork from a previous state to explore alternative paths

### In-Memory Checkpointing

For development and testing:

```
from langgraph.checkpoint.memory import MemorySaver

checkpointer = MemorySaver()
app = graph.compile(checkpointer=checkpointer)

# First turn — provide a thread_id to identify the conversation
config = {"configurable": {"thread_id": "session-42"}}

result1 = app.invoke(
    {"messages": [{"role": "user", "content": "What is the population of Tokyo?"}]},
    config=config,
)

# Second turn — the agent remembers the conversation
result2 = app.invoke(
    {"messages": [{"role": "user", "content": "How does that compare to Osaka?"}]},
    config=config,
)
# The agent has full context from the first turn
```

### SQLite Checkpointing for Production

For persistent storage that survives process restarts:

```
from langgraph.checkpoint.sqlite import SqliteSaver

# File-based SQLite — data persists across restarts
checkpointer = SqliteSaver.from_conn_string("checkpoints.db")
app = graph.compile(checkpointer=checkpointer)
```

### PostgreSQL for Multi-Process Deployments

For horizontal scaling where multiple server instances share state:

```
from langgraph.checkpoint.postgres import PostgresSaver

checkpointer = PostgresSaver.from_conn_string(
    "postgresql://user:pass@localhost:5432/agents"
)
app = graph.compile(checkpointer=checkpointer)
```

### Inspecting State History

Checkpointers enable full state inspection:

```
config = {"configurable": {"thread_id": "session-42"}}

# Get current state
state = app.get_state(config)
print(state.values["messages"])

# Get full history
for snapshot in app.get_state_history(config):
    print(f"Step: {snapshot.metadata.get('step', '?')}")
    print(f"Node: {snapshot.metadata.get('source', '?')}")
    print(f"Messages: {len(snapshot.values.get('messages', []))}")
    print("---")
```

## Human-in-the-Loop

### Why Agents Need Human Oversight

Agents can call tools that have real-world consequences — executing database queries, sending emails, making API calls, or modifying data. For sensitive actions, you need a human to review and approve before execution.

LangGraph implements this through **interrupts** — points in the graph where execution pauses, waits for human input, and then resumes.

### Interrupt Before a Node

The most common pattern: pause **before** the tools node executes, so a human can review the proposed tool calls:

```
# Compile with an interrupt before the tools node
app = graph.compile(
    checkpointer=MemorySaver(),
    interrupt_before=["tools"],  # Pause before executing tools
)

config = {"configurable": {"thread_id": "review-session"}}

# Step 1: Run until the interrupt point
result = app.invoke(
    {"messages": [{"role": "user", "content": "Delete all records from the users table"}]},
    config=config,
)

# The graph is now paused before the tools node
# Inspect what tool calls the agent wants to make
state = app.get_state(config)
last_message = state.values["messages"][-1]
print("Proposed tool calls:")
for tc in last_message.tool_calls:
    print(f"  {tc['name']}({tc['args']})")
```

### Approve and Resume

If the human approves, resume with `None` input — the graph continues from where it paused:

```
# Human approves — resume execution
result = app.invoke(None, config=config)
```

### Reject and Modify

If the human rejects, modify the state before resuming:

```
from langchain_core.messages import AIMessage, ToolMessage

# Option 1: Replace the tool call with a safe alternative
state = app.get_state(config)
last_message = state.values["messages"][-1]

# Add a mock tool response that short-circuits the dangerous call
safe_response = ToolMessage(
    content="Operation blocked by human reviewer. The delete operation was not executed.",
    tool_call_id=last_message.tool_calls[0]["id"],
)
app.update_state(config, {"messages": [safe_response]})

# Resume — the agent will see the blocked message and respond accordingly
result = app.invoke(None, config=config)
```

### Interrupt After a Node

You can also pause **after** a node to review its output before proceeding:

```
app = graph.compile(
    checkpointer=MemorySaver(),
    interrupt_after=["agent"],  # Pause after the agent decides
)
```

### Human-in-the-Loop Architecture

```
graph TD
    A["User Query"] --> B["agent"]
    B --> C{"Has tool<br/>calls?"}
    C -->|No| D["__end__"]
    C -->|Yes| E["⏸ INTERRUPT<br/>Human reviews<br/>tool calls"]
    E -->|Approve| F["tools"]
    E -->|Reject| G["Modify state<br/>or cancel"]
    F --> B
    G --> B

    style A fill:#4a90d9,color:#fff,stroke:#333
    style B fill:#9b59b6,color:#fff,stroke:#333
    style C fill:#f5a623,color:#fff,stroke:#333
    style D fill:#1abc9c,color:#fff,stroke:#333
    style E fill:#e74c3c,color:#fff,stroke:#333
    style F fill:#e67e22,color:#fff,stroke:#333
    style G fill:#95a5a6,color:#fff,stroke:#333
```

## Streaming

LangGraph provides multiple streaming modes for real-time UI feedback.

### Node-Level Streaming

Stream the output of each graph node as it completes:

```
for event in app.stream(
    {"messages": [{"role": "user", "content": "What is the population of Japan?"}]}
):
    for node_name, node_output in event.items():
        print(f"\n--- {node_name} ---")
        if "messages" in node_output:
            for msg in node_output["messages"]:
                print(f"  {msg.type}: {msg.content[:200] if msg.content else '[tool_calls]'}")
```

### Token-Level Streaming

Stream individual tokens as the LLM generates them:

```
async for event in app.astream_events(
    {"messages": [{"role": "user", "content": "Explain quantum computing"}]},
    version="v2",
):
    kind = event["event"]
    if kind == "on_chat_model_stream":
        content = event["data"]["chunk"].content
        if content:
            print(content, end="", flush=True)
    elif kind == "on_tool_start":
        print(f"\nCalling tool: {event['name']}")
    elif kind == "on_tool_end":
        print(f"Tool result: {event['data'].output[:200]}")
```

### Streaming Modes Summary

| Mode | Method | What You Get |
|---|---|---|
| Node output | app.stream() | Complete output of each node as it finishes |
| Token-level | app.astream_events() | Individual tokens + tool start/end events |
| State updates | app.stream(stream_mode="updates") | Only the state delta from each node |
| Full state | app.stream(stream_mode="values") | Complete state snapshot after each node |

## Conditional Routing Patterns

### Basic Route: Tools or End

The simplest pattern — the agent decides whether to call tools or return a final answer:

```
def route_after_agent(state: AgentState) -> str:
    last_message = state["messages"][-1]
    if isinstance(last_message, AIMessage) and last_message.tool_calls:
        return "tools"
    return END
```

### Multi-Path Routing

Route to different specialized nodes based on the query type:

```
class RoutingState(TypedDict):
    messages: Annotated[list, add_messages]
    query_type: str

def classify_query(state: RoutingState) -> dict:
    """Classify the user's query into a category."""
    response = llm.invoke([
        {"role": "system", "content": "Classify the query as: factual, math, or conversational. Reply with one word."},
        *state["messages"],
    ])
    return {"query_type": response.content.strip().lower()}

def route_by_type(state: RoutingState) -> str:
    """Route to the appropriate handler based on query type."""
    query_type = state.get("query_type", "conversational")
    if query_type == "factual":
        return "retrieval_agent"
    elif query_type == "math":
        return "calculator_agent"
    return "chat_agent"

graph = StateGraph(RoutingState)
graph.add_node("classifier", classify_query)
graph.add_node("retrieval_agent", retrieval_node)
graph.add_node("calculator_agent", calculator_node)
graph.add_node("chat_agent", chat_node)

graph.add_edge(START, "classifier")
graph.add_conditional_edges("classifier", route_by_type, {
    "retrieval_agent": "retrieval_agent",
    "calculator_agent": "calculator_agent",
    "chat_agent": "chat_agent",
})
graph.add_edge("retrieval_agent", END)
graph.add_edge("calculator_agent", END)
graph.add_edge("chat_agent", END)
```

```
graph TD
    A["__start__"] --> B["classifier"]
    B --> C{"Query type?"}
    C -->|factual| D["retrieval_agent"]
    C -->|math| E["calculator_agent"]
    C -->|conversational| F["chat_agent"]
    D --> G["__end__"]
    E --> G
    F --> G

    style A fill:#4a90d9,color:#fff,stroke:#333
    style B fill:#9b59b6,color:#fff,stroke:#333
    style C fill:#f5a623,color:#fff,stroke:#333
    style D fill:#27ae60,color:#fff,stroke:#333
    style E fill:#e67e22,color:#fff,stroke:#333
    style F fill:#3498db,color:#fff,stroke:#333
    style G fill:#1abc9c,color:#fff,stroke:#333
```

### Cycle with Max Iterations

Prevent infinite loops by tracking iteration count in state:

```
class IterativeState(TypedDict):
    messages: Annotated[list, add_messages]
    iteration_count: int

def agent_with_counter(state: IterativeState) -> dict:
    response = llm_with_tools.invoke(state["messages"])
    return {
        "messages": [response],
        "iteration_count": state.get("iteration_count", 0) + 1,
    }

def should_continue_with_limit(state: IterativeState) -> str:
    # Hard limit on iterations
    if state.get("iteration_count", 0) >= 10:
        return END
    last_message = state["messages"][-1]
    if isinstance(last_message, AIMessage) and last_message.tool_calls:
        return "tools"
    return END
```

## Retrieval Workflows with LangGraph

### RAG Agent: Retrieve, Grade, Generate

A retrieval agent that can evaluate document relevance and re-query if results are poor:

```
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_core.vectorstores import InMemoryVectorStore
from langchain_core.tools import tool
from langchain_core.documents import Document

# Build a simple vector store
embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vectorstore = InMemoryVectorStore(embeddings)
vectorstore.add_documents([
    Document(page_content="LangGraph models agents as state machines with nodes, edges, and shared state."),
    Document(page_content="Checkpointers save state after every node, enabling persistence and resume-from-failure."),
    Document(page_content="Human-in-the-loop is implemented via interrupt_before and interrupt_after on graph nodes."),
    Document(page_content="LangGraph supports streaming at both the node level and token level."),
])

@tool
def retrieve_docs(query: str) -> str:
    """Search the knowledge base for relevant documents."""
    docs = vectorstore.similarity_search(query, k=3)
    return "\n\n".join(f"[Doc {i+1}]: {doc.page_content}" for i, doc in enumerate(docs))

@tool
def grade_documents(query: str, documents: str) -> str:
    """Grade whether retrieved documents are relevant to the query.
    Returns 'relevant' or 'not_relevant'."""
    response = llm.invoke([
        {"role": "system", "content": "You are a relevance grader. Given a query and documents, "
                                       "reply 'relevant' if the documents answer the query, "
                                       "otherwise reply 'not_relevant'."},
        {"role": "user", "content": f"Query: {query}\n\nDocuments:\n{documents}"},
    ])
    return response.content.strip().lower()

llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
rag_agent = create_react_agent(
    model=llm,
    tools=[retrieve_docs, grade_documents],
    prompt="You are a RAG assistant. For every question:\n"
           "1. Use retrieve_docs to find relevant documents\n"
           "2. Use grade_documents to check relevance\n"
           "3. If documents are not relevant, reformulate your query and retrieve again\n"
           "4. Answer based only on retrieved documents. Cite which documents you used.",
)
```

### Corrective RAG: Retrieve → Grade → Re-Query or Generate

A more structured corrective RAG workflow as an explicit graph:

```
class CorrRAGState(TypedDict):
    messages: Annotated[list, add_messages]
    query: str
    documents: str
    relevance: str
    retries: int

def retrieve_node(state: CorrRAGState) -> dict:
    """Retrieve documents for the current query."""
    docs = vectorstore.similarity_search(state["query"], k=3)
    doc_text = "\n\n".join(f"[Doc {i+1}]: {d.page_content}" for i, d in enumerate(docs))
    return {"documents": doc_text}

def grade_node(state: CorrRAGState) -> dict:
    """Grade document relevance."""
    response = llm.invoke([
        {"role": "system", "content": "Reply 'relevant' or 'not_relevant'."},
        {"role": "user", "content": f"Query: {state['query']}\nDocuments:\n{state['documents']}"},
    ])
    return {"relevance": response.content.strip().lower()}

def rewrite_query_node(state: CorrRAGState) -> dict:
    """Rewrite the query for better retrieval."""
    response = llm.invoke([
        {"role": "system", "content": "Rewrite this query to get better search results. Return only the new query."},
        {"role": "user", "content": state["query"]},
    ])
    return {"query": response.content.strip(), "retries": state.get("retries", 0) + 1}

def generate_node(state: CorrRAGState) -> dict:
    """Generate a final answer from the documents."""
    response = llm.invoke([
        {"role": "system", "content": "Answer the question using only the provided documents."},
        {"role": "user", "content": f"Question: {state['query']}\n\nDocuments:\n{state['documents']}"},
    ])
    return {"messages": [{"role": "assistant", "content": response.content}]}

def route_after_grading(state: CorrRAGState) -> str:
    """If relevant, generate. If not, rewrite query (with retry limit)."""
    if state.get("relevance") == "relevant":
        return "generate"
    if state.get("retries", 0) >= 2:
        return "generate"  # Give up and generate with what we have
    return "rewrite_query"

# Build the graph
rag_graph = StateGraph(CorrRAGState)
rag_graph.add_node("retrieve", retrieve_node)
rag_graph.add_node("grade", grade_node)
rag_graph.add_node("rewrite_query", rewrite_query_node)
rag_graph.add_node("generate", generate_node)

rag_graph.add_edge(START, "retrieve")
rag_graph.add_edge("retrieve", "grade")
rag_graph.add_conditional_edges("grade", route_after_grading, {
    "generate": "generate",
    "rewrite_query": "rewrite_query",
})
rag_graph.add_edge("rewrite_query", "retrieve")  # Cycle back to retrieve
rag_graph.add_edge("generate", END)

rag_app = rag_graph.compile()
```

```
graph TD
    A["__start__"] --> B["retrieve"]
    B --> C["grade"]
    C --> D{"Relevant?"}
    D -->|Yes| E["generate"]
    D -->|No, retries < 2| F["rewrite_query"]
    D -->|No, retries >= 2| E
    F --> B
    E --> G["__end__"]

    style A fill:#4a90d9,color:#fff,stroke:#333
    style B fill:#27ae60,color:#fff,stroke:#333
    style C fill:#9b59b6,color:#fff,stroke:#333
    style D fill:#f5a623,color:#fff,stroke:#333
    style E fill:#1abc9c,color:#fff,stroke:#333
    style F fill:#e67e22,color:#fff,stroke:#333
    style G fill:#95a5a6,color:#fff,stroke:#333
```

Run it:

```
result = rag_app.invoke({
    "messages": [{"role": "user", "content": "How does LangGraph handle failures?"}],
    "query": "How does LangGraph handle failures?",
    "documents": "",
    "relevance": "",
    "retries": 0,
})
print(result["messages"][-1].content)
```

## Subgraphs

### Composing Graphs as Nodes

For complex workflows, break the agent into **subgraphs** — each subgraph is a self-contained graph that can be used as a node in a parent graph:

```
# Define a retrieval subgraph
retrieval_graph = StateGraph(AgentState)
retrieval_graph.add_node("retrieve", retrieve_node)
retrieval_graph.add_node("grade", grade_node)
retrieval_graph.add_edge(START, "retrieve")
retrieval_graph.add_edge("retrieve", "grade")
retrieval_graph.add_edge("grade", END)
retrieval_subgraph = retrieval_graph.compile()

# Use it as a node in the parent graph
parent_graph = StateGraph(AgentState)
parent_graph.add_node("plan", planning_node)
parent_graph.add_node("retrieve", retrieval_subgraph)  # Subgraph as a node
parent_graph.add_node("synthesize", synthesis_node)

parent_graph.add_edge(START, "plan")
parent_graph.add_edge("plan", "retrieve")
parent_graph.add_edge("retrieve", "synthesize")
parent_graph.add_edge("synthesize", END)
```

Subgraphs are powerful for:

- **Modularity** — encapsulate retrieval, reasoning, or validation as reusable components
- **Team development** — different teams own different subgraphs
- **Testing** — test each subgraph in isolation before composing

### Multi-Agent Patterns

Use subgraphs to implement **multi-agent** workflows where different agents handle different aspects of a task:

```
# Research agent — searches and retrieves
research_agent = create_react_agent(
    model=llm,
    tools=[search_wikipedia, retrieve_docs],
    prompt="You are a research agent. Find and verify facts.",
)

# Analysis agent — reasons over findings
analysis_agent = create_react_agent(
    model=llm,
    tools=[calculator],
    prompt="You are an analysis agent. Process data and compute results.",
)

class MultiAgentState(TypedDict):
    messages: Annotated[list, add_messages]
    research_complete: bool

def route_after_research(state: MultiAgentState) -> str:
    if state.get("research_complete"):
        return "analysis"
    return END

multi_graph = StateGraph(MultiAgentState)
multi_graph.add_node("research", research_agent)
multi_graph.add_node("analysis", analysis_agent)

multi_graph.add_edge(START, "research")
multi_graph.add_conditional_edges("research", route_after_research, {
    "analysis": "analysis",
    END: END,
})
multi_graph.add_edge("analysis", END)
```

## Common Patterns and Best Practices

### Error Handling

Add a fallback node that catches tool errors and lets the agent recover:

```
from langchain_core.messages import ToolMessage

def handle_tool_error(state: AgentState) -> dict:
    """Check the last tool message for errors and provide feedback."""
    messages = state["messages"]
    last_msg = messages[-1]
    if isinstance(last_msg, ToolMessage) and "Error" in last_msg.content:
        return {"messages": [
            {"role": "user", "content": f"The tool returned an error: {last_msg.content}. "
                                         "Please try a different approach."}
        ]}
    return {"messages": []}
```

### State Management Tips

| Tip | Why |
|---|---|
| Use Annotated[list, add_messages] for message lists | Prevents nodes from overwriting message history |
| Keep state flat — avoid deeply nested structures | Easier to serialize for checkpointing |
| Use separate state keys for workflow flags (is_approved, retries) | Cleaner routing logic |
| Initialize all state keys in the input | Avoids KeyError in nodes |

### When to Use `create_react_agent` vs. Manual Graphs

| Use Case | Approach |
|---|---|
| Standard ReAct agent with tool calling | create_react_agent |
| Custom routing (e.g., multi-path classification) | Manual StateGraph |
| Multiple specialized agents in sequence | Manual graph with subgraphs |
| Corrective RAG with grade → rewrite → re-retrieve | Manual graph with cycles |
| Simple chatbot with memory | create_react_agent + checkpointer |
| Production workflow with human approval gates | Manual graph + interrupt_before |

### Debugging with Graph Visualization

LangGraph can render its graph structure for visual debugging:

```
# Print the graph in ASCII
app.get_graph().print_ascii()

# Or generate a Mermaid diagram
print(app.get_graph().draw_mermaid())

# Or render as PNG (requires graphviz)
app.get_graph().draw_mermaid_png(output_file_path="agent_graph.png")
```

## LangGraph vs. Other Agent Frameworks

| Feature | LangGraph | LlamaIndex Workflows | CrewAI | AutoGen |
|---|---|---|---|---|
| Abstraction level | Low-level graph primitives | Workflow steps | High-level role-based | Conversational agents |
| State management | Explicit TypedDict with reducers | Context object | Shared memory | Message passing |
| Cycles | Native — any node can loop back | Supported via event flow | Task delegation loops | Conversation loops |
| Persistence | Built-in checkpointers (Memory, SQLite, Postgres) | Manual | Limited | Limited |
| Human-in-the-loop | interrupt_before / interrupt_after | Custom event handlers | Human tool | Human input mode |
| Streaming | Node-level + token-level + state updates | Event streaming | Limited | Token streaming |
| Subgraphs | Native composition | Nested workflows | Sub-tasks | Nested chats |
| Best for | Custom agent architectures, retrieval workflows | RAG-centric agents | Role-based multi-agent teams | Research and conversation agents |

## Common Pitfalls and How to Fix Them

| Pitfall | Symptom | Fix |
|---|---|---|
| Missing reducer on message list | Each node overwrites messages instead of appending | Use Annotated[list, add_messages] |
| Infinite cycles | Agent loops forever between agent and tools nodes | Add iteration counter in state + max iteration check in routing |
| Checkpointer not set | interrupt_before silently does nothing | Always compile with a checkpointer when using interrupts |
| State keys not initialized | KeyError in nodes | Provide all state keys in the initial input |
| Tool node errors crash the graph | Unhandled exceptions stop execution | Use ToolNode with handle_tool_errors=True or add error-handling nodes |
| Streaming shows no output | Empty stream events | Ensure you’re using astream_events with version="v2" for token-level streaming |
| Graph won’t compile | Unreachable nodes or missing edges | Every node must be reachable from START and have a path to END |

## Conclusion

LangGraph transforms agent development from “LLM in a loop” to **principled state machine engineering**. By making the graph structure explicit, you gain visibility into every decision point, the ability to pause and resume at any node, and persistent state that survives failures and session boundaries.

**Key takeaways:**

- **State machines > black-box loops**. Explicit graphs let you reason about, debug, and modify agent control flow. Every node, edge, and routing decision is inspectable.
- **`StateGraph` + reducers** are the foundation. Define your state with `TypedDict`, use `Annotated` reducers for append-only fields, and let nodes return partial state updates.
- **`create_react_agent`** handles 80% of cases. For standard tool-calling agents, use the prebuilt one-liner and customize with prompts and tool sets.
- **Build manually when you need control**. Custom routing (multi-path classification), corrective RAG cycles (retrieve → grade → rewrite → re-retrieve), and multi-agent compositions require manual graph construction.
- **Checkpointers enable production features**. `MemorySaver` for development, `SqliteSaver` for single-server, `PostgresSaver` for multi-process deployments. Persistence unlocks multi-turn memory, time travel, and durable execution.
- **Human-in-the-loop is a first-class feature**. Use `interrupt_before` to pause for human approval before sensitive tools execute. Modify state or reject actions before resuming.
- **Streaming at every level**. Node-level streaming for step visibility, token-level streaming for real-time UI, state-update streaming for reactive frontends.
- **Subgraphs for composition**. Break complex workflows into modular, testable subgraphs. Use them as nodes in parent graphs for multi-agent patterns.

Start with `create_react_agent` for rapid prototyping, move to manual `StateGraph` when you need custom control flow, and add checkpointing and human-in-the-loop when moving to production.

## References

- Malaviya et al., [Pregel: A System for Large-Scale Graph Processing](https://research.google/pubs/pub37252/), SIGMOD 2010 — Google’s graph processing framework that inspired LangGraph’s architecture.
- Apache Software Foundation, [Apache Beam](https://beam.apache.org/) — distributed data processing model that influenced LangGraph’s design.
- Hagberg et al., [NetworkX](https://networkx.org/documentation/latest/) — Python graph library whose public interface inspired LangGraph’s API.
- Yao et al., [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629), ICLR 2023 — the reasoning-acting loop that LangGraph’s prebuilt agent implements.
- LangChain, [LangGraph Documentation](https://langchain-ai.github.io/langgraph/) — official docs for StateGraph, checkpointers, and prebuilt agents.

## Read More

- Understand the ReAct reasoning loop that LangGraph orchestrates with [Building a ReAct Agent from Scratch](https://vectoringai.com/posts/agent/Building-a-ReAct-Agent-from-Scratch.html) — covers the Thought-Action-Observation cycle, parsing, and stopping conditions.
- Connect agents to SQL, APIs, and vector stores with [Tool Use and Function Calling for Retrieval Agents](https://vectoringai.com/posts/agent/Tool-Use-and-Function-Calling-for-Retrieval-Agents.html) — from OpenAI function calling to MCP.
- Build the retrieval pipelines these agents call with [Building a RAG Pipeline from Scratch](https://vectoringai.com/posts/rag/Building-a-RAG-Pipeline-from-Scratch.html) — chunking, embedding, retrieval, and generation.
- Add self-correcting retrieval with [Hybrid and Corrective RAG Architectures](https://vectoringai.com/posts/rag/Hybrid-and-Corrective-RAG-Architectures.html) — the patterns behind the corrective RAG graph in this article.
- Implement agent-driven retrieval routing with [Agentic RAG: When Retrieval Needs Reasoning](https://vectoringai.com/posts/rag/Agentic-RAG-When-Retrieval-Needs-Reasoning.html).
- Monitor agent behavior in production with [Observability for Multi-Turn LLM Conversations](https://vectoringai.com/posts/llm/Observability-for-Multi-Turn-LLM-Conversations.html).
- Add safety guardrails with [Guardrails for LLM Applications with Giskard](https://vectoringai.com/posts/llm/Guardrails-for-LLM-Applications-with-Giskard.html).

[Explore Agents](https://vectoringai.com/pages/agent.html)[Home](https://vectoringai.com/index.html)
