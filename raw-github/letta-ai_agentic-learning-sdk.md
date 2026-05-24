---
repo: letta-ai/agentic-learning-sdk
url: https://github.com/letta-ai/agentic-learning-sdk
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - letta-ai/learning-sdk: Drop-in SDK for adding continual learning and long-term memory to any LLM agent. · GitHub

**Source**: https://github.com/letta-ai/agentic-learning-sdk

---

[Skip to content](https://github.com/letta-ai/learning-sdk#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[letta-ai](https://github.com/letta-ai)

/
**[learning-sdk](https://github.com/letta-ai/learning-sdk)**

Public

- [Notifications](https://github.com/login?return_to=%2Fletta-ai%2Flearning-sdk)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fletta-ai%2Flearning-sdk)
- 
[Star
          45](https://github.com/login?return_to=%2Fletta-ai%2Flearning-sdk)

[https://github.com/letta-ai/learning-sdk](https://github.com/letta-ai/learning-sdk)

[Branches](https://github.com/letta-ai/learning-sdk/branches)[Tags](https://github.com/letta-ai/learning-sdk/tags)

[https://github.com/letta-ai/learning-sdk/branches](https://github.com/letta-ai/learning-sdk/branches)[https://github.com/letta-ai/learning-sdk/tags](https://github.com/letta-ai/learning-sdk/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History72 Commits72 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| examples | examples |  |  |
| python | python |  |  |
| typescript | typescript |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pytest.ini | pytest.ini |  |  |
| View all files |  |  |  |

## Repository files navigation

# Learning SDK

[https://github.com/letta-ai/learning-sdk#learning-sdk](https://github.com/letta-ai/learning-sdk#learning-sdk)

Add continual learning and long-term memory to any LLM agent with one line of code. This SDK enables agents to learn from every conversation and recall context across sessions—making any agent across any platform stateful.

```
from openai import OpenAI
from agentic_learning import learning

client = OpenAI()

with learning(agent="my_agent"):
    response = client.chat.completions.create(...)  # LLM is now stateful!
```

[https://pypi.python.org/pypi/agentic-learning](https://pypi.python.org/pypi/agentic-learning)[https://www.npmjs.com/package/@letta-ai/agentic-learning](https://www.npmjs.com/package/@letta-ai/agentic-learning)[https://github.com/letta-ai/learning-sdk/blob/main/LICENSE](https://github.com/letta-ai/learning-sdk/blob/main/LICENSE)

## Quick Start

[https://github.com/letta-ai/learning-sdk#quick-start](https://github.com/letta-ai/learning-sdk#quick-start)

### Python Installation

[https://github.com/letta-ai/learning-sdk#python-installation](https://github.com/letta-ai/learning-sdk#python-installation)

```
pip install agentic-learning
```

### TypeScript Installation

[https://github.com/letta-ai/learning-sdk#typescript-installation](https://github.com/letta-ai/learning-sdk#typescript-installation)

```
npm install @letta-ai/agentic-learning
```

### Basic Usage (Python)

[https://github.com/letta-ai/learning-sdk#basic-usage-python](https://github.com/letta-ai/learning-sdk#basic-usage-python)

```
# Set your API keys
export OPENAI_API_KEY="your-openai-key"
export LETTA_API_KEY="your-letta-key"
```

```
from openai import OpenAI
from agentic_learning import learning

client = OpenAI()

# Add continual learning with one line
with learning(agent="my_assistant"):
    # All LLM calls inside this block have learning enabled
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[{"role": "user", "content": "My name is Alice"}]
    )

    # Agent remembers prior context
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[{"role": "user", "content": "What's my name?"}]
    )
    # Returns: "Your name is Alice"
```

That's it - this SDK automatically:

- ✅ Learns from every conversation
- ✅ Recalls relevant context when needed
- ✅ Remembers across sessions
- ✅ Works with your existing LLM code

### Basic Usage (TypeScript)

[https://github.com/letta-ai/learning-sdk#basic-usage-typescript](https://github.com/letta-ai/learning-sdk#basic-usage-typescript)

```
# Set your API keys
export OPENAI_API_KEY="your-openai-key"
export LETTA_API_KEY="your-letta-key"
```

```
import { learning } from '@letta-ai/agentic-learning';
import OpenAI from 'openai';

const client = new OpenAI();

// Add continual learning with one line
await learning({ agent: "my_assistant" }, async () => {
    // All LLM calls inside this block have learning enabled
    const response = await client.chat.completions.create({
        model: "gpt-5",
        messages: [{ role: "user", content: "My name is Alice" }]
    });

    // Agent remembers prior context
    const response2 = await client.chat.completions.create({
        model: "gpt-5",
        messages: [{ role: "user", content: "What's my name?" }]
    });
    // Returns: "Your name is Alice"
});
```

## Supported Providers

[https://github.com/letta-ai/learning-sdk#supported-providers](https://github.com/letta-ai/learning-sdk#supported-providers)

| Provider | Package | Status | Py Example | TS Example |
|---|---|---|---|---|
| Anthropic | anthropic | ✅ Stable | anthropic_example.py | anthropic_example.ts |
| Claude Agent SDK | @anthropic-ai/claude-agent-sdk | ✅ Stable | claude_example.py | claude_example.ts |
| OpenAI Chat Completions | openai | ✅ Stable | openai_example.py | openai_example.ts |
| OpenAI Responses API | openai | ✅ Stable | openai_responses_example.py | openai_responses_example.ts |
| Gemini | google-generativeai | ✅ Stable | gemini_example.py | gemini_example.ts |
| CrewAI | https://github.com/crewAIInc/crewAI | ⚠️ Experimental | crewai_research_demo.py |  |
| LangChain | https://github.com/langchain-ai | ⚠️ Experimental | main.py |  |
| Vercel AI SDK | ai | ✅ Stable | N/A (TS only) | vercel_example.ts |

[Create an issue](https://github.com/letta-ai/agentic-learning-sdk/issues) to request support for another provider, or contribute a PR:

### Adding a New Provider

[https://github.com/letta-ai/learning-sdk#adding-a-new-provider](https://github.com/letta-ai/learning-sdk#adding-a-new-provider)

1. Create a new interceptor in `python/src/agentic_learning/interceptors/`
2. Extend `BaseAPIInterceptor` (for API-level) or `BaseInterceptor` (for transport-level)
3. Implement SDK-specific methods: 
  - `extract_user_messages()`
  - `extract_assistant_message()`
  - `inject_memory_context()`
  - `_build_response_from_chunks()`

4. Register in `__init__.py`
5. Add example to `examples/`

See existing interceptors for reference implementations.

## Core Concepts

[https://github.com/letta-ai/learning-sdk#core-concepts](https://github.com/letta-ai/learning-sdk#core-concepts)

### Learning Context

[https://github.com/letta-ai/learning-sdk#learning-context](https://github.com/letta-ai/learning-sdk#learning-context)

Wrap any LLM calls in a `learning()` context to enable continual learning:

```
with learning(agent="agent_name"):
    # All LLM calls inside this block have learning enabled
    response = llm_client.generate(...)
```

**Note:** Learning is scoped by agent name. Each agent learns independently, so `agent="sales_bot"` and `agent="support_bot"` maintain separate memories.

### Context Injection

[https://github.com/letta-ai/learning-sdk#context-injection](https://github.com/letta-ai/learning-sdk#context-injection)

The SDK automatically retrieves relevant context from past conversations:

```
# First session
with learning(agent="sales_bot", memory=["customer"]):
    response = client.chat.completions.create(
        messages=[{"role": "user", "content": "I'm interested in Product X"}]
    )

# Later session - agent remembers any information related to "customer"
with learning(agent="sales_bot", memory=["customer"]):
    response = client.chat.completions.create(
        messages=[{"role": "user", "content": "Tell me more about that product"}]
    )
    # Agent knows you're asking about Product X
```

### Capture-Only Mode

[https://github.com/letta-ai/learning-sdk#capture-only-mode](https://github.com/letta-ai/learning-sdk#capture-only-mode)

Store conversations without injecting context (useful for logging or background processing):

```
with learning(agent="agent_name", capture_only=True):
    # Conversations saved for learning but not injected into prompts
    response = client.chat.completions.create(...)

# Later, list entire conversation history
learning_client = AgenticLearning()
messages = learning_client.messages.list("agent_name")
```

### Knowledge Search

[https://github.com/letta-ai/learning-sdk#knowledge-search](https://github.com/letta-ai/learning-sdk#knowledge-search)

Query what your agent has learned with semantic search:

```
# Search for relevant conversations
messages = learning_client.memory.search(
    agent="agent_name",
    query="What are my project requirements?"
)
```

## How It Works

[https://github.com/letta-ai/learning-sdk#how-it-works](https://github.com/letta-ai/learning-sdk#how-it-works)

This SDK adds **stateful memory** to your existing LLM code with zero architectural changes:

**Benefits:**

- 🔌 **Drop-in integration** - Works with your existing LLM Provider SDK code
- 🧠 **Automatic memory** - Relevant context retrieved and injected into prompts
- 💾 **Persistent across sessions** - Conversations remembered even after restarts
- 💰 **Cost-effective** - Only relevant context injected, reducing token usage
- ⚡ **Fast retrieval** - Semantic search powered by Letta's optimized infrastructure
- 🏢 **Production-ready** - Built on Letta's proven memory management platform

**Architecture:**

```
1. 🎯 Wrap      2. 📝 Capture       3. 🔍 Retrieve   4. 🤖 Respond
   your code       conversations      relevant         with full
   in learning     automatically      memories         context

┌─────────────┐
│  Your Code  │
│  learning() │
└──────┬──────┘
       │
       ▼
┌─────────────┐    ┌──────────────┐
│ Interceptor │───▶│ Letta Server │  (Stores conversations,
│  (Inject)   │◀───│  (Memory)    │   retrieves context)
└──────┬──────┘    └──────────────┘
       │
       ▼
┌─────────────┐
│  LLM API    │  (Sees enriched prompts)
│ OpenAI/etc  │
└─────────────┘
```

## Architecture

[https://github.com/letta-ai/learning-sdk#architecture](https://github.com/letta-ai/learning-sdk#architecture)

### Interceptors

[https://github.com/letta-ai/learning-sdk#interceptors](https://github.com/letta-ai/learning-sdk#interceptors)

The SDK provides interceptors for different integration patterns:

- **API-Level Interceptors** (OpenAI, Anthropic, Gemini) - Patch HTTP API methods
- **Transport-Level Interceptors** (Claude Agent SDK) - Patch subprocess transport layer

All interceptors share common logic through `BaseAPIInterceptor`, making it easy to add new providers.

### Client Architecture

[https://github.com/letta-ai/learning-sdk#client-architecture](https://github.com/letta-ai/learning-sdk#client-architecture)

```
AgenticLearning()
├── agents          # Agent management
│   ├── create()
│   ├── update()
│   ├── retrieve()
│   ├── list()
│   ├── delete()
│   └── sleeptime   # Background memory processing
├── memory          # Memory block management
│   ├── create()
│   ├── upsert()
│   ├── retrieve()
│   ├── list()
│   ├── search()    # Semantic search
│   ├── remember()  # Store memories
│   └── context     # Memory context retrieval
└── messages        # Message history
    ├── capture()   # Save conversation turn
    ├── list()
    └── create()    # Send message to LLM
```

## Requirements

[https://github.com/letta-ai/learning-sdk#requirements](https://github.com/letta-ai/learning-sdk#requirements)

### Python

[https://github.com/letta-ai/learning-sdk#python](https://github.com/letta-ai/learning-sdk#python)

- Python 3.9+
- Letta API key (sign up at [letta.com](https://www.letta.com/))
- At least one LLM SDK: 
  - `openai>=1.0.0`
  - `anthropic>=0.18.0`
  - `google-generativeai>=0.3.0`
  - `@anthropic-ai/claude-agent-sdk>=0.1.0`

### TypeScript/JavaScript

[https://github.com/letta-ai/learning-sdk#typescriptjavascript](https://github.com/letta-ai/learning-sdk#typescriptjavascript)

- Node.js 18+
- Letta API key (sign up at [letta.com](https://www.letta.com/))
- At least one LLM SDK: 
  - `openai>=4.0.0`
  - `@anthropic-ai/sdk>=0.30.0`
  - `@google/generative-ai>=0.21.0`
  - `@anthropic-ai/claude-agent-sdk>=0.1.0`
  - `ai>=3.0.0` (Vercel AI SDK)

### Local Development (Optional)

[https://github.com/letta-ai/learning-sdk#local-development-optional](https://github.com/letta-ai/learning-sdk#local-development-optional)

For local development, you can run Letta server locally:

```
from agentic_learning import AgenticLearning, learning

# Connect to local server
learning_client = AgenticLearning(base_url="http://localhost:8283")

with learning(agent="my_agent", client=learning_client):
    response = client.chat.completions.create(...)
```

Run Letta locally with Docker:

```
docker run \
