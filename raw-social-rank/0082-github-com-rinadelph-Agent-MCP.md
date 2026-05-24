# rinadelph/Agent-MCP

- URL: https://github.com/rinadelph/agent-mcp
- Platform: github.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:twitter.com "MCP" "AI agent"

## Raw Content

## GitHub - rinadelph/Agent-MCP: Agent-MCP is a framework for creating multi-agent systems that enables coordinated, efficient AI collaboration through the Model Context Protocol (MCP). The system is designed for developers building AI applications that benefit from multiple specialized agents working in parallel on different aspects of a project. · GitHub

**Source**: https://github.com/rinadelph/agent-mcp

---

[Skip to content](https://github.com/rinadelph/agent-mcp#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[rinadelph](https://github.com/rinadelph)

/
**[Agent-MCP](https://github.com/rinadelph/Agent-MCP)**

Public

- [Notifications](https://github.com/login?return_to=%2Frinadelph%2FAgent-MCP)You must be signed in to change notification settings
- [Fork
    163](https://github.com/login?return_to=%2Frinadelph%2FAgent-MCP)
- 
[Star
          1.2k](https://github.com/login?return_to=%2Frinadelph%2FAgent-MCP)

[https://github.com/rinadelph/Agent-MCP](https://github.com/rinadelph/Agent-MCP)

[Branches](https://github.com/rinadelph/Agent-MCP/branches)[Tags](https://github.com/rinadelph/Agent-MCP/tags)

[https://github.com/rinadelph/Agent-MCP/branches](https://github.com/rinadelph/Agent-MCP/branches)[https://github.com/rinadelph/Agent-MCP/tags](https://github.com/rinadelph/Agent-MCP/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History300 Commits300 Commits |  |  |  |
| agent-mcp-node | agent-mcp-node |  |  |
| agent_mcp | agent_mcp |  |  |
| assets/images | assets/images |  |  |
| docs | docs |  |  |
| testing-suite | testing-suite |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .nvmrc | .nvmrc |  |  |
| AGENT_MCP_COMPARISON_ANALYSIS.md | AGENT_MCP_COMPARISON_ANALYSIS.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| LOCAL_EMBEDDINGS_GUIDE.md | LOCAL_EMBEDDINGS_GUIDE.md |  |  |
| README.md | README.md |  |  |
| TASK_CREATION_REQUIREMENTS_ANALYSIS.md | TASK_CREATION_REQUIREMENTS_ANALYSIS.md |  |  |
| TOOL_BY_TOOL_LOGIC_COMPARISON.md | TOOL_BY_TOOL_LOGIC_COMPARISON.md |  |  |
| mcp.json | mcp.json |  |  |
| package-lock.json | package-lock.json |  |  |
| package.json | package.json |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Agent-MCP

[https://github.com/rinadelph/agent-mcp#agent-mcp](https://github.com/rinadelph/agent-mcp#agent-mcp)

[https://deepwiki.com/rinadelph/Agent-MCP](https://deepwiki.com/rinadelph/Agent-MCP)

> 🚀 **Advanced Tool Notice**: This framework is designed for experienced AI developers who need sophisticated multi-agent orchestration capabilities. Agent-MCP requires familiarity with AI coding workflows, MCP protocols, and distributed systems concepts. We're actively working to improve documentation and ease of use. If you're new to AI-assisted development, consider starting with simpler tools and returning when you need advanced multi-agent capabilities.
> 
> 
> 
> 💬 **Join the Community**: Connect with us on [Discord](https://discord.gg/7Jm7nrhjGn) to get help, share experiences, and collaborate with other developers building multi-agent systems.

Multi-Agent Collaboration Protocol for coordinated AI software development.

[https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/agent-network-viz.png](https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/agent-network-viz.png)

Think **Obsidian for your AI agents** - a living knowledge graph where multiple AI agents collaborate through shared context, intelligent task management, and real-time visualization. Watch your codebase evolve as specialized agents work in parallel, never losing context or stepping on each other's work.

## Why Multiple Agents?

[https://github.com/rinadelph/agent-mcp#why-multiple-agents](https://github.com/rinadelph/agent-mcp#why-multiple-agents)

Beyond the philosophical issues, traditional AI coding assistants hit practical limitations:

- **Context windows overflow** on large codebases
- **Knowledge gets lost** between conversations
- **Single-threaded execution** creates bottlenecks
- **No specialization** - one agent tries to do everything
- **Constant rework** from lost context and confusion

## The Multi-Agent Solution

[https://github.com/rinadelph/agent-mcp#the-multi-agent-solution](https://github.com/rinadelph/agent-mcp#the-multi-agent-solution)

Agent-MCP transforms AI development from a single assistant to a coordinated team:

[https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/dashboard-overview.png](https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/dashboard-overview.png)

**Real-time visualization** shows your AI team at work - purple nodes represent context entries, blue nodes are agents, and connections show active collaborations. It's like having a mission control center for your development team.

### Core Capabilities

[https://github.com/rinadelph/agent-mcp#core-capabilities](https://github.com/rinadelph/agent-mcp#core-capabilities)

**Parallel Execution**
 Multiple specialized agents work simultaneously on different parts of your codebase. Backend agents handle APIs while frontend agents build UI components, all coordinated through shared memory.

**Persistent Knowledge Graph**

[https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/memory-bank.png](https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/memory-bank.png)

Your project's entire context lives in a searchable, persistent memory bank. Agents query this shared knowledge to understand requirements, architectural decisions, and implementation details. Nothing gets lost between sessions.

**Intelligent Task Management**

[https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/agent-fleet.png](https://github.com/rinadelph/Agent-MCP/blob/main/assets/images/agent-fleet.png)

Monitor every agent's status, assigned tasks, and recent activity. The system automatically manages task dependencies, prevents conflicts, and ensures work flows smoothly from planning to implementation.

## Quick Start

[https://github.com/rinadelph/agent-mcp#quick-start](https://github.com/rinadelph/agent-mcp#quick-start)

### Python Implementation (Recommended)

[https://github.com/rinadelph/agent-mcp#python-implementation-recommended](https://github.com/rinadelph/agent-mcp#python-implementation-recommended)

```
# Clone and setup
git clone https://github.com/rinadelph/Agent-MCP.git
cd Agent-MCP

# Check version requirements
python --version  # Should be >=3.10
node --version    # Should be >=18.0.0
npm --version     # Should be >=9.0.0

# If using nvm for Node.js version management
nvm use  # Uses the version specified in .nvmrc

# Configure environment
cp .env.example .env  # Add your OpenAI API key
uv venv
uv install

# Start the server
uv run -m agent_mcp.cli --port 8080 --project-dir path-to-directory

# Launch dashboard (recommended for full experience)
cd agent_mcp/dashboard && npm install && npm run dev
```

### Node.js/TypeScript Implementation (Alternative)

[https://github.com/rinadelph/agent-mcp#nodejstypescript-implementation-alternative](https://github.com/rinadelph/agent-mcp#nodejstypescript-implementation-alternative)

```
# Clone and setup
git clone https://github.com/rinadelph/Agent-MCP.git
cd Agent-MCP/agent-mcp-node

# Install dependencies
npm install

# Configure environment
cp .env.example .env  # Add your OpenAI API key

# Start the server
npm run server

# Or use the built version
npm run build
npm start

# Or install globally
npm install -g agent-mcp-node
agent-mcp --port 8080 --project-dir path-to-directory
```

## MCP Integration Guide

[https://github.com/rinadelph/agent-mcp#mcp-integration-guide](https://github.com/rinadelph/agent-mcp#mcp-integration-guide)

### What is MCP?

[https://github.com/rinadelph/agent-mcp#what-is-mcp](https://github.com/rinadelph/agent-mcp#what-is-mcp)

The **Model Context Protocol (MCP)** is an open standard that enables AI assistants to securely connect to external data sources and tools. Agent-MCP leverages MCP to provide seamless integration with various development tools and services.

### Running Agent-MCP as an MCP Server

[https://github.com/rinadelph/agent-mcp#running-agent-mcp-as-an-mcp-server](https://github.com/rinadelph/agent-mcp#running-agent-mcp-as-an-mcp-server)

Agent-MCP can function as an MCP server, exposing its multi-agent capabilities to MCP-compatible clients like Claude Desktop, Cline, and other AI coding assistants.

#### Quick MCP Setup

[https://github.com/rinadelph/agent-mcp#quick-mcp-setup](https://github.com/rinadelph/agent-mcp#quick-mcp-setup)

```
# 1. Install Agent-MCP
uv venv
uv install

# 2. Start the MCP server
uv run -m agent_mcp.cli --port 8080

# 3. Configure your MCP client to connect to:
# HTTP: http://localhost:8000/mcp
# WebSocket: ws://localhost:8000/mcp/ws
```

#### MCP Server Configuration

[https://github.com/rinadelph/agent-mcp#mcp-server-configuration](https://github.com/rinadelph/agent-mcp#mcp-server-configuration)

Create an MCP configuration file (`mcp_config.json`):

```
{
  "server": {
    "name": "agent-mcp",
    "version": "1.0.0"
  },
  "tools": [
    {
      "name": "create_agent",
      "description": "Create a new specialized AI agent"
    },
    {
      "name": "assign_task", 
      "description": "Assign tasks to specific agents"
    },
    {
      "name": "query_project_context",
      "description": "Query the shared knowledge graph"
    },
    {
      "name": "manage_agent_communication",
      "description": "Handle inter-agent messaging"
    }
  ],
  "resources": [
    {
      "name": "agent_status",
      "description": "Real-time agent status and activity"
    },
    {
      "name": "project_memory",
      "description": "Persistent project knowledge graph"
    }
  ]
}
```

#### Using Agent-MCP with Claude Desktop

[https://github.com/rinadelph/agent-mcp#using-agent-mcp-with-claude-desktop](https://github.com/rinadelph/agent-mcp#using-agent-mcp-with-claude-desktop)

1. 

**Add to Claude Desktop Config**:

Open `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or equivalent:

```
{
  "mcpServers": {
    "agent-mcp": {
      "command": "uv",
      "args": ["run", "-m", "agent_mcp.cli", "--port", "8080"],
      "env": {
        "OPENAI_API_KEY": "your-openai-api-key"
      }
    }
  }
}
```

2. 

**Restart Claude Desktop** to load the MCP server

3. 

**Verify Connection**: Claude should show "🔌 agent-mcp" in the conversation

#### MCP Tools Available

[https://github.com/rinadelph/agent-mcp#mcp-tools-available](https://github.com/rinadelph/agent-mcp#mcp-tools-available)

Once connected, you can use these MCP tools directly in Claude:

**Agent Management**

- `create_agent` - Spawn specialized agents (backend, frontend, testing, etc.)
- `list_agents` - View all active agents and their status
- `terminate_agent` - Safely shut down agents

**Task Orchestration**

- `assign_task` - Delegate work to specific agents
- `view_tasks` - Monitor task progress and dependencies
- `update_task_status` - Track completion and blockers

**Knowledge Management**

- `ask_project_rag` - Query the persistent knowledge graph
- `update_project_context` - Add architectural decisions and patterns
- `view_project_context` - Access stored project information

**Communication**

- `send_agent_message` - Direct messaging between agents
- `broadcast_message` - Send updates to all agents
- `request_assistance` - Escalate complex issues

#### Advanced MCP Configuration

[https://github.com/rinadelph/agent-mcp#advanced-mcp-configuration](https://github.com/rinadelph/agent-mcp#advanced-mcp-configuration)

**Custom Transport Options**:

```
# HTTP with custom port
uv run -m agent_mcp.cli --port 8080

# WebSocket with authentication
uv run -m agent_mcp.cli --port 8080 --auth-token your-secret-token

# Unix socket (Linux/macOS)
uv run -m agent_mcp.cli --port 8080
```

**Environment Variables**:

```
export AGENT_MCP_HOST=0.0.0.0          # Server host
export AGENT_MCP_PORT=8000              # Server port  
export AGENT_MCP_LOG_LEVEL=INFO         # Logging level
export AGENT_MCP_PROJECT_DIR=/your/project  # Default project directory
export AGENT_MCP_MAX_AGENTS=10          # Maximum concurrent agents
```

### MCP Client Examples

[https://github.com/rinadelph/agent-mcp#mcp-client-examples](https://github.com/rinadelph/agent-mcp#mcp-client-examples)

#### Python Client

[https://github.com/rinadelph/agent-mcp#python-client](https://github.com/rinadelph/agent-mcp#python-client)

```
import asyncio
from mcp import Client

async def main():
    async with Client("http://localhost:8000/mcp") as client:
        # Create a backend agent
        result = await client.call_tool("create_agent", {
            "role": "backend",
            "specialization": "API development"
        })
        
        # Assign a task
        await client.call_tool("assign_task", {
            "agent_id": result["agent_id"],
            "task": "Implement user authentication endpoints"
        })
        
        # Query project context
        context = await client.call_tool("ask_project_rag", {
            "query": "What's our current database schema?"
        })
        print(context)

asyncio.run(main())
```

#### JavaScript Client

[https://github.com/rinadelph/agent-mcp#javascript-client](https://github.com/rinadelph/agent-mcp#javascript-client)

```
import { MCPClient } from '@modelcontextprotocol/client';

const client = new MCPClient('http://localhost:8000/mcp');

async function createAgent() {
  await client.connect();
  
  const agent = await client.callTool('create_agent', {
    role: 'frontend',
    specialization: 'React components'
  });
  
  console.log('Created agent:', agent.agent_id);
  
  await client.disconnect();
}

createAgent().catch(console.error);
```

### Troubleshooting MCP Connection

[https://github.com/rinadelph/agent-mcp#troubleshooting-mcp-connection](https://github.com/rinadelph/agent-mcp#troubleshooting-mcp-connection)

**Connection Issues**:

```
# Check if MCP server is running
curl http://localhost:8000/mcp/health

# Verify WebSocket connection
wscat -c ws://localhost:8000/mcp/ws

# Check server logs
uv run -m agent_mcp.cli --port 8080 --log-level DEBUG
```

**Common Issues**:

- **Port conflicts**: Change port with `--port` flag
- **Permission errors**: Ensure OpenAI API key is set
- **Client timeout**: Increase timeout in client configuration
- **Agent limit reached**: Check active agent count with `list_agents`

### Integration Examples

[https://github.com/rinadelph/agent-mcp#integration-examples](https://github.com/rinadelph/agent-mcp#integration-examples)

**VS Code with MCP**: Use the MCP extension to integrate Agent-MCP directly into your editor workflow.

**Terminal Usage**:

```
# Quick task assignment via curl
curl -X POST http://localhost:8000/mcp/tools/assign_task \
  -H "Content-Type: application/json" \
  -d '{"task": "Add error handling to API endpoints", "agent_role": "backend"}'
```

**CI/CD Integration**:

```
# GitHub Actions example
- name: Run Agent-MCP Code Review
  run: |
    uv run -m agent_mcp.cli --port 8080 --daemon
    curl -X POST localhost:8000/mcp/tools/assign_task \
      -d '{"task": "Review PR for security issues", "agent_role": "security"}'
```

## How It Works: Breaking Complexity into Simple Steps

[https://github.com/rinadelph/agent-mcp#how-it-works-breaking-complexity-into-simple-steps](https://github.com/rinadelph/agent-mcp#how-it-works-breaking-complexity-into-simple-steps)

```
graph LR
    A[Step 1] --> B[Step 2] --> C[Step 3] --> D[Step 4] --> E[Done!]
    style A fill:#4ecdc4,color:#fff
    style E fill:#ff6b6b,color:#fff
```

Loading

Every task can be broken down into linear steps. This is the core insight that makes Agent-MCP powerful.

### The Problem with Complex Tasks

[https://github.com/rinadelph/agent-mcp#the-problem-with-complex-tasks](https://github.com/rinadelph/agent-mcp#the-problem-with-complex-tasks)

```
graph TD
    A["Build User Authentication"] -->|Single Agent Tries Everything| B{???}
    B --> C[Database?]
    B --> D[API?]
    B --> E[Frontend?]
    B --> F[Security?]
    B --> G[Tests?]
    C -.->|Confused| H[Incomplete Implementation]
    D -.->|Overwhelmed| H
    E -.->|Context Lost| H
    F -.->|Assumptions| H
    G -.->|Forgotten| H
    style A fill:#ff6b6b,color:#fff
    style H fill:#666,color:#fff
```

Loading

### The Agent-MCP Solution

[https://github.com/rinadelph/agent-mcp#the-agent-mcp-solution](https://github.com/rinadelph/agent-mcp#the-agent-mcp-solution)

```
graph TD
    A["Build User Authentication"] -->|Break Down| B[Linear Tasks]
    B --> C["Agent 1: Database"]
    B --> D["Agent 2: API"]
    B --> E["Agent 3: Frontend"]
    
    C --> C1[Create users table]
    C1 --> C2[Add indexes]
    C2 --> C3[Create sessions table]
    
    D --> D1[POST /register]
    D1 --> D2[POST /login]
    D2 --> D3[POST /logout]
    
    E --> E1[Login Form]
    E1 --> E2[Register Form]
    E2 --> E3[Auth Context]
    
    C3 --> F[Working System]
    D3 --> F
    E3 --> F
    
    style A fill:#4ecdc4,color:#fff
    style F fill:#4ecdc4,color:#fff
```

Loading

Each agent focuses on their linear chain. No confusion. No context pollution. Just clear, deterministic progress.

## The 5-Step Workflow

[https://github.com/rinadelph/agent-mcp#the-5-step-workflow](https://github.com/rinadelph/agent-mcp#the-5-step-workflow)

### 1. Initialize Admin Agent

[https://github.com/rinadelph/agent-mcp#1-initialize-admin-agent](https://github.com/rinadelph/agent-mcp#1-initialize-admin-agent)

```
You are the admin agent.
Admin Token: "your_admin_token_from_server"

Your role is to:
- Coordinate all development work
- Create and manage worker agents
- Maintain project context
- Assign tasks based on agent specializations
```

### 2. Load Your Project Blueprint (MCD)

[https://github.com/rinadelph/agent-mcp#2-load-your-project-blueprint-mcd](https://github.com/rinadelph/agent-mcp#2-load-your-project-blueprint-mcd)

```
Add this MCD (Main Context Document) to project context:

[paste your MCD here - see docs/mcd-guide.md for structure]

Store every detail in the knowledge graph. This becomes the single source of truth for all agents.
```

The MCD (Main Context Document) is your project's comprehensive blueprint - think of it as writing the book of your application before building it. It includes:

- Technical architecture and design decisions
- Database schemas and API specifications
- UI component hierarchies and workflows
- Task breakdowns with clear dependencies

See our [MCD Guide](https://github.com/rinadelph/Agent-MCP/blob/main/docs/mcd-guide.md) for detailed examples and templates.

### 3. Deploy Your Agent Team

[https://github.com/rinadelph/agent-mcp#3-deploy-your-agent-team](https://github.com/rinadelph/agent-mcp#3-deploy-your-agent-team)

```
Create specialized agents for parallel development:

- backend-worker: API endpoints, database operations, business logic
- frontend-worker: UI components, state management, user interactions
- integration-worker: API connections, data flow, system integration
- test-worker: Unit tests, integration tests, validation
- devops-worker: Deployment, CI/CD, infrastructure
```

Each agent specializes in their domain, leading to higher quality implementations and faster development.

### 4. Initialize and Deploy Workers

[https://github.com/rinadelph/agent-mcp#4-initialize-and-deploy-workers](https://github.com/rinadelph/agent-mcp#4-initialize-and-deploy-workers)

```
# In new window for each worker:
You are [worker-name] agent.
Your Admin Token: "worker_token_from_admin"

Query the project knowledge graph to understand:
1. Overall system architecture
2. Your specific responsibilities
3. Integration points with other components
4. Coding standards and patterns to follow
5. Current implementation status

Begin implementation following the established patterns.

AUTO --worker --memory
```

**Important: Setting Agent Modes**

Agent modes (like `--worker`, `--memory`, `--playwright`) are not just flags - they activate specific behavioral patterns. In Claude Code, you can make these persistent by:

1. Copy the mode instructions to your clipboard
2. Type `#` to open Claude's memory feature
3. Paste the instructions for persistent behavior

Example for Claude Code memory:

```
# When I use "AUTO --worker --memory", follow these patterns:
- Always check file status before editing
- Query project RAG for context before implementing
- Document all changes in task notes
- Work on one file at a time, completing it before moving on
- Update task status after each completion
```

This ensures consistent behavior across your entire session without repeating instructions.

### 5. Monitor and Coordinate

[https://github.com/rinadelph/agent-mcp#5-monitor-and-coordinate](https://github.com/rinadelph/agent-mcp#5-monitor-and-coordinate)

The dashboard provides real-time visibility into your AI development team:

**Network Visualization** - Watch agents collaborate and share information
**Task Progress** - Track completion across all parallel work streams
**Memory Health** - Ensure context remains fresh and accessible
**Activity Timeline** - See exactly what each agent is doing

Access at `http://localhost:3847` after launching the dashboard.

## Advanced Features

[https://github.com/rinadelph/agent-mcp#advanced-features](https://github.com/rinadelph/agent-mcp#advanced-features)

### Specialized Agent Modes

[https://github.com/rinadelph/agent-mcp#specialized-agent-modes](https://github.com/rinadelph/agent-mcp#specialized-agent-modes)

Agent modes fundamentally change how agents behave. They're not just configuration - they're behavioral contracts that ensure agents follow specific patterns optimized for their role.

**Standard Worker Mode**

```
AUTO --worker --memory
```

Optimized for implementation tasks:

- Granular file status checking before any edits
- Sequential task completion (one at a time)
- Automatic documentation of changes
- Integration with project RAG for context
- Task status updates after each completion

**Frontend Specialist Mode**

```
AUTO --worker --playwright
```

Enhanced with visual validation capabilities:

- All standard worker features
- Browser automation for component testing
- Screenshot capabilities for visual regression
- DOM interaction for end-to-end testing
- Component-by-component implementation with visual verification

**Research Mode**

```
AUTO --memory
```

Read-only access for analysis and planning:

- No file modifications allowed
- Deep context exploration via RAG
- Pattern identification across codebase
- Documentation generation
- Architecture analysis and recommendations

**Memory Management Mode**

```
AUTO --memory --manager
```

For context curation and optimization:

- Memory health monitoring
- Stale context identification
- Knowledge graph optimization
- Context summarization for new agents
- Cross-agent knowledge transfer

Each mode enforces specific behaviors that prevent common mistakes and ensure consistent, high-quality output.

### Project Memory Management

[https://github.com/rinadelph/agent-mcp#project-memory-management](https://github.com/rinadelph/agent-mcp#project-memory-management)

The system maintains several types of memory:

**Project Context** - Architectural decisions, design patterns, conventions
**Task Memory** - Current status, blockers, implementation notes
**Agent Memory** - Individual agent learnings and specializations
**Integration Points** - How different components connect

All memory is:

- Searchable via semantic queries
- Version controlled for rollback
- Tagged for easy categorization
- Automatically garbage collected when stale

### Conflict Resolution

[https://github.com/rinadelph/agent-mcp#conflict-resolution](https://github.com/rinadelph/agent-mcp#conflict-resolution)

File-level locking prevents agents from overwriting each other's work:

1. Agent requests file access
2. System checks if file is locked
3. If locked, agent works on other tasks or waits
4. After completion, lock is released
5. Other agents can now modify the file

This happens automatically - no manual coordination needed.

## Short-Lived vs. Long-Lived Agents: The Critical Difference

[https://github.com/rinadelph/agent-mcp#short-lived-vs-long-lived-agents-the-critical-difference](https://github.com/rinadelph/agent-mcp#short-lived-vs-long-lived-agents-the-critical-difference)

### Traditional Long-Lived Agents

[https://github.com/rinadelph/agent-mcp#traditional-long-lived-agents](https://github.com/rinadelph/agent-mcp#traditional-long-lived-agents)

Most AI coding assistants maintain conversations across entire projects:

- **Accumulated context grows unbounded** - mixing unrelated code, decisions, and conversations
- **Confused priorities** - yesterday's bug fix mingles with today's feature request
- **Hallucination risks increase** - agents invent connections between unrelated parts
- **Performance degrades over time** - every response processes irrelevant history
- **Security vulnerability** - one carefully crafted prompt could expose your entire project

### Agent-MCP's Ephemeral Agents

[https://github.com/rinadelph/agent-mcp#agent-mcps-ephemeral-agents](https://github.com/rinadelph/agent-mcp#agent-mcps-ephemeral-agents)

Each agent is purpose-built for a single task:

- **Minimal, focused context** - only what's needed for the specific task
- **Crystal clear objectives** - one task, one goal, no ambiguity
- **Deterministic behavior** - limited context means predictable outputs
- **Consistently fast responses** - no context bloat to slow things down
- **Secure by design** - agents literally cannot access what they don't need

### A Practical Example

[https://github.com/rinadelph/agent-mcp#a-practical-example](https://github.com/rinadelph/agent-mcp#a-practical-example)

**Traditional Approach**: "Update the user authentication system"

```
Agent: I'll update your auth system. I see from our previous conversation about 
database migrations, UI components, API endpoints, deployment scripts, and that 
bug in the payment system... wait, which auth approach did we decide on? Let me 
try to piece this together from our 50+ message history...

[Agent produces confused implementation mixing multiple patterns]
```

**Agent-MCP Approach**: Same request, broken into focused tasks

```
Agent 1 (Database): Create auth tables with exactly these fields...
Agent 2 (API): Implement /auth endpoints following REST patterns...
Agent 3 (Frontend): Build login forms using existing component library...
Agent 4 (Tests): Write auth tests covering these specific scenarios...
Agent 5 (Integration): Connect components following documented interfaces...

[Each agent completes their specific task without confusion]
```

## The Theory Behind Linear Decomposition

[https://github.com/rinadelph/agent-mcp#the-theory-behind-linear-decomposition](https://github.com/rinadelph/agent-mcp#the-theory-behind-linear-decomposition)

### The Philosophy: Short-Lived Agents, Granular Tasks

[https://github.com/rinadelph/agent-mcp#the-philosophy-short-lived-agents-granular-tasks](https://github.com/rinadelph/agent-mcp#the-philosophy-short-lived-agents-granular-tasks)

Most AI development approaches suffer from a fundamental flaw: they try to maintain massive context windows with a single, long-running agent. This leads to:

- **Context pollution** - Irrelevant information drowns out what matters
- **Hallucination risks** - Agents invent connections between unrelated parts
- **Security vulnerabilities** - Agents with full context can be manipulated
- **Performance degradation** - Large contexts slow down reasoning
- **Unpredictable behavior** - Too much context creates chaos

### Our Solution: Ephemeral Agents with Shared Memory

[https://github.com/rinadelph/agent-mcp#our-solution-ephemeral-agents-with-shared-memory](https://github.com/rinadelph/agent-mcp#our-solution-ephemeral-agents-with-shared-memory)

Agent-MCP implements a radically different approach:

**Short-Lived, Focused Agents**
 Each agent lives only as long as their specific task. They:

- Start with minimal context (just what they need)
- Execute granular, linear tasks with clear boundaries
- Document their work in shared memory
- Terminate upon completion

**Shared Knowledge Graph (RAG)**
 Instead of cramming everything into context windows:

- Persistent memory stores all project knowledge
- Agents query only what's relevant to their task
- Knowledge accumulates without overwhelming any single agent
- Clear separation between working memory and reference material

**Result**: Agents that are fast, focused, and safe. They can't be manipulated to reveal full project details because they never have access to it all at once.

### Why This Matters for Safety

[https://github.com/rinadelph/agent-mcp#why-this-matters-for-safety](https://github.com/rinadelph/agent-mcp#why-this-matters-for-safety)

Traditional long-context agents are like giving someone your entire codebase, documentation, and secrets in one conversation. Our approach is like having specialized contractors who only see the blueprint for their specific room.

- **Reduced attack surface** - Agents can't leak what they don't know
- **Deterministic behavior** - Limited context means predictable outputs
- **Audit trails** - Every agent action is logged and traceable
- **Rollback capability** - Mistakes are isolated to specific tasks

### The Cleanup Protocol: Keeping Your System Lean

[https://github.com/rinadelph/agent-mcp#the-cleanup-protocol-keeping-your-system-lean](https://github.com/rinadelph/agent-mcp#the-cleanup-protocol-keeping-your-system-lean)

Agent-MCP enforces strict lifecycle management:

**Maximum 10 Active Agents**

- Hard limit prevents resource exhaustion
- Forces thoughtful task allocation
- Maintains system performance

**Automatic Cleanup Rules**

- Agent finishes task → Immediately terminated
- Agent idle 60+ seconds → Killed and task reassigned
- Need more than 10 agents → Least productive agents removed

**Why This Matters**

- **No zombie processes** eating resources
- **Fresh context** for every task
- **Predictable resource usage**
- **Clean system state** always

This isn't just housekeeping - it's fundamental to the security and performance benefits of the short-lived agent model.

### The Fundamental Principle

[https://github.com/rinadelph/agent-mcp#the-fundamental-principle](https://github.com/rinadelph/agent-mcp#the-fundamental-principle)

**Any task that cannot be expressed as `Step 1 → Step 2 → Step N` is not atomic enough.**

This principle drives everything in Agent-MCP:

1. **Complex goals** must decompose into **linear sequences**
2. **Linear sequences** can execute **in parallel** when independent
3. **Each step** must have **clear prerequisites** and **deterministic outputs**
4. **Integration points** are **explicit** and **well-defined**

### Why Linear Decomposition Works

[https://github.com/rinadelph/agent-mcp#why-linear-decomposition-works](https://github.com/rinadelph/agent-mcp#why-linear-decomposition-works)

**Traditional Approach**: "Build a user authentication system"

- Vague requirements lead to varied implementations
- Agents make different assumptions
- Integration becomes a nightmare

**Agent-MCP Approach**:

```
Chain 1: Database Layer
  1.1: Create users table with id, email, password_hash
  1.2: Add unique index on email
  1.3: Create sessions table with user_id, token, expiry
  1.4: Write migration scripts
  
Chain 2: API Layer  
  2.1: Implement POST /auth/register endpoint
  2.2: Implement POST /auth/login endpoint
  2.3: Implement POST /auth/logout endpoint
  2.4: Add JWT token generation
  
Chain 3: Frontend Layer
  3.1: Create AuthContext provider
  3.2: Build LoginForm component
  3.3: Build RegisterForm component
  3.4: Implement protected routes
```

Each step is atomic, testable, and has zero ambiguity. Multiple agents can work these chains in parallel without conflict.

## Why Developers Choose Agent-MCP

[https://github.com/rinadelph/agent-mcp#why-developers-choose-agent-mcp](https://github.com/rinadelph/agent-mcp#why-developers-choose-agent-mcp)

**The Power of Parallel Development**
 Instead of waiting for one agent to finish the backend before starting the frontend, deploy specialized agents to work simultaneously. Your development speed is limited only by how well you decompose tasks.

**No More Lost Context**
 Every decision, implementation detail, and architectural choice is stored in the shared knowledge graph. New agents instantly understand the project state without reading through lengthy conversation histories.

**Predictable, Reliable Outputs**
 Focused agents with limited context produce consistent results. The same task produces the same quality output every time, making development predictable and testable.

**Built-in Conflict Prevention**
 File-level locking and task assignment prevent agents from stepping on each other's work. No more merge conflicts from simultaneous edits.

**Complete Development Transparency**
 Watch your AI team work in real-time through the dashboard. Every action is logged, every decision traceable. It's like having a live view into your development pipeline.

**For Different Team Sizes**

**Solo Developers**: Transform one AI assistant into a coordinated team. Work on multiple features simultaneously without losing track.

**Small Teams**: Augment human developers with AI specialists that maintain perfect context across sessions.

**Large Projects**: Handle complex systems where no single agent could hold all the context. The shared memory scales infinitely.

**Learning & Teaching**: Perfect for understanding software architecture. Watch how tasks decompose and integrate in real-time.

## System Requirements

[https://github.com/rinadelph/agent-mcp#system-requirements](https://github.com/rinadelph/agent-mcp#system-requirements)

- **Python**: 3.10+ with pip or uv
- **Node.js**: 18.0.0+ (recommended: 22.16.0)
- **npm**: 9.0.0+ (recommended: 10.9.2)
- **OpenAI API key** (for embeddings and RAG)
- **RAM**: 4GB minimum
- **AI coding assistant**: Claude Code or Cursor

For consistent development environment:

```
# Using nvm (Node Version Manager)
nvm use  # Automatically uses Node v22.16.0 from .nvmrc

# Or manually check versions
node --version  # Should be >=18.0.0
npm --version   # Should be >=9.0.0
python --version  # Should be >=3.10
```

## Troubleshooting

[https://github.com/rinadelph/agent-mcp#troubleshooting](https://github.com/rinadelph/agent-mcp#troubleshooting)

**"Admin token not found"**
 Check the server startup logs - token is displayed when MCP server starts.

**"Worker can't access tasks"**
 Ensure you're using the worker token (not admin token) when initializing workers.

**"Agents overwriting each other"**
 Verify all workers are initialized with the `--worker` flag for proper coordination.

**"Dashboard connection failed"**

1. Ensure MCP server is running first
2. Check Node.js version (18+ required)
3. Reinstall dashboard dependencies

**"Memory queries returning stale data"**
 Run memory garbage collection through the dashboard or restart with `--refresh-memory`.

## Documentation

[https://github.com/rinadelph/agent-mcp#documentation](https://github.com/rinadelph/agent-mcp#documentation)

- [Getting Started Guide](https://github.com/rinadelph/Agent-MCP/blob/main/docs/getting-started.md) - Complete walkthrough with examples
- [MCD Creation Guide](https://github.com/rinadelph/Agent-MCP/blob/main/docs/mcd-guide.md) - Write effective project blueprints
- [Theoretical Foundation](https://github.com/rinadelph/Agent-MCP/blob/main/docs/chapter-1-cognitive-empathy.md) - Understanding AI cognition
- [Architecture Overview](https://github.com/rinadelph/Agent-MCP/blob/main/docs/architecture.md) - System design and components
- [API Reference](https://github.com/rinadelph/Agent-MCP/blob/main/docs/api-reference.md) - Complete technical documentation

## Community and Support

[https://github.com/rinadelph/agent-mcp#community-and-support](https://github.com/rinadelph/agent-mcp#community-and-support)

**Get Help**

- [Discord Community](https://discord.gg/7Jm7nrhjGn) - Active developer discussions
- [GitHub Issues](https://github.com/rinadelph/Agent-MCP/issues) - Bug reports and features
- [Discussions](https://github.com/rinadelph/Agent-MCP/discussions) - Share your experiences

**Contributing** We welcome contributions! See our [Contributing Guide](https://github.com/rinadelph/Agent-MCP/blob/main/CONTRIBUTING.md) for:

- Code style and standards
- Testing requirements
- Pull request process
- Development setup

## License

[https://github.com/rinadelph/agent-mcp#license](https://github.com/rinadelph/agent-mcp#license)

[https://www.gnu.org/licenses/agpl-3.0](https://www.gnu.org/licenses/agpl-3.0)

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

**What this means:**

- ✅ You can use, modify, and distribute this software
- ✅ You can use it for commercial purposes
- ⚠️**Important**: If you run a modified version on a server that users interact with over a network, you **must** provide the source code to those users
- ⚠️ Any derivative works must also be licensed under AGPL-3.0
- ⚠️ You must include copyright notices and license information

See the [LICENSE](https://github.com/rinadelph/Agent-MCP/blob/main/LICENSE) file for complete terms and conditions.

**Why AGPL?** We chose AGPL to ensure that improvements to Agent-MCP benefit the entire community, even when used in server/SaaS deployments. This prevents proprietary forks that don't contribute back to the ecosystem.

---

Built by developers who believe AI collaboration should be as sophisticated as human collaboration.

## About

         Agent-MCP is a framework for creating multi-agent systems that enables coordinated, efficient AI collaboration through the Model Context Protocol (MCP). The system is designed for developers building AI applications that benefit from multiple specialized agents working in parallel on different aspects of a project.       

### Resources

[Readme](https://github.com/rinadelph/agent-mcp#readme-ov-file)

### License

[View license](https://github.com/rinadelph/agent-mcp#License-1-ov-file)

### Contributing

[Contributing](https://github.com/rinadelph/agent-mcp#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/rinadelph/Agent-MCP/activity)

### Stars

[1.2k
        stars](https://github.com/rinadelph/Agent-MCP/stargazers)

### Watchers

[13
        watching](https://github.com/rinadelph/Agent-MCP/watchers)

### Forks

[163
        forks](https://github.com/rinadelph/Agent-MCP/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Frinadelph%2FAgent-MCP&report=rinadelph+%28user%29)

## [Releases
      2](https://github.com/rinadelph/Agent-MCP/releases)

[https://github.com/rinadelph/Agent-MCP/releases/tag/v4.20.1](https://github.com/rinadelph/Agent-MCP/releases/tag/v4.20.1)
