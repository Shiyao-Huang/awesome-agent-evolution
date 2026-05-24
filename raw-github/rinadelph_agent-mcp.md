---
repo: rinadelph/agent-mcp
url: https://github.com/rinadelph/agent-mcp
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

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
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

