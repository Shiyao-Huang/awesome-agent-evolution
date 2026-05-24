---
repo: spillwavesolutions/agent-brain
url: https://github.com/spillwavesolutions/agent-brain
content_timestamp: 2026-03-16
time_slice: 2026-03
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - SpillwaveSolutions/agent-brain: Private RAG system with semantic context ingestion to improve source of truth of reliable sources · GitHub

**Source**: https://github.com/spillwavesolutions/agent-brain

---

[Skip to content](https://github.com/spillwavesolutions/agent-brain#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[SpillwaveSolutions](https://github.com/SpillwaveSolutions)

/
**[agent-brain](https://github.com/SpillwaveSolutions/agent-brain)**

Public

- [Notifications](https://github.com/login?return_to=%2FSpillwaveSolutions%2Fagent-brain)You must be signed in to change notification settings
- [Fork
    20](https://github.com/login?return_to=%2FSpillwaveSolutions%2Fagent-brain)
- 
[Star
          101](https://github.com/login?return_to=%2FSpillwaveSolutions%2Fagent-brain)

[https://github.com/SpillwaveSolutions/agent-brain](https://github.com/SpillwaveSolutions/agent-brain)

[Branches](https://github.com/SpillwaveSolutions/agent-brain/branches)[Tags](https://github.com/SpillwaveSolutions/agent-brain/tags)

[https://github.com/SpillwaveSolutions/agent-brain/branches](https://github.com/SpillwaveSolutions/agent-brain/branches)[https://github.com/SpillwaveSolutions/agent-brain/tags](https://github.com/SpillwaveSolutions/agent-brain/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History591 Commits591 Commits |  |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .claude | .claude |  |  |
| .github/workflows | .github/workflows |  |  |
| .opencode | .opencode |  |  |
| .planning | .planning |  |  |
| .speckit | .speckit |  |  |
| agent-brain-cli | agent-brain-cli |  |  |
| agent-brain-plugin | agent-brain-plugin |  |  |
| agent-brain-server | agent-brain-server |  |  |
| docs | docs |  |  |
| e2e-cli | e2e-cli |  |  |
| e2e | e2e |  |  |
| integration/tests/quick_start/summ_test | integration/tests/quick_start/summ_test |  |  |
| playgrounds | playgrounds |  |  |
| scripts | scripts |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| Taskfile.yml | Taskfile.yml |  |  |
| config.yaml.example | config.yaml.example |  |  |
| View all files |  |  |  |

## Repository files navigation

| last_validated | 2026-03-16 |
|---|---|

# Agent Brain

[https://github.com/spillwavesolutions/agent-brain#agent-brain](https://github.com/spillwavesolutions/agent-brain#agent-brain)

A RAG-based (Retrieval-Augmented Generation) document indexing and semantic search system for AI agents and applications. Agent Brain enables intelligent querying of documentation and source code using natural language.

## Overview

[https://github.com/spillwavesolutions/agent-brain#overview](https://github.com/spillwavesolutions/agent-brain#overview)

Agent Brain provides **AI-first** document and code search through a Claude Code plugin with skills, commands, and agents. Use slash commands to search, agents for complex research tasks, and skills for intelligent query optimization.

| Component | Description |
|---|---|
| Plugin | 24 slash commands, 3 agents, 2 skills for Claude Code |
| Skills | Intelligent search mode selection and query optimization |
| Agents | Research assistant, search assistant, setup assistant |
| Server | FastAPI backend for indexing and retrieval |
| CLI | Command-line tool (also used by plugin internally) |

## Quick Start (Claude Code Plugin)

[https://github.com/spillwavesolutions/agent-brain#quick-start-claude-code-plugin](https://github.com/spillwavesolutions/agent-brain#quick-start-claude-code-plugin)

### 1. Install the Plugin

[https://github.com/spillwavesolutions/agent-brain#1-install-the-plugin](https://github.com/spillwavesolutions/agent-brain#1-install-the-plugin)

```
claude plugins install github:SpillwaveSolutions/agent-brain
```

### 2. Set Up Your Project

[https://github.com/spillwavesolutions/agent-brain#2-set-up-your-project](https://github.com/spillwavesolutions/agent-brain#2-set-up-your-project)

In Claude Code, run:

```
/agent-brain-setup
```

This interactive wizard will:

- Install the Python packages (`agent-brain-rag`, `agent-brain-cli`)
- Configure your API keys
- Initialize the project
- Start the server
- Index your documentation

### 3. Search with Commands

[https://github.com/spillwavesolutions/agent-brain#3-search-with-commands](https://github.com/spillwavesolutions/agent-brain#3-search-with-commands)

```
/agent-brain-search "how does authentication work"
```

That's it! The plugin handles everything automatically.

## Plugin Commands

[https://github.com/spillwavesolutions/agent-brain#plugin-commands](https://github.com/spillwavesolutions/agent-brain#plugin-commands)

### Search Commands

[https://github.com/spillwavesolutions/agent-brain#search-commands](https://github.com/spillwavesolutions/agent-brain#search-commands)

| Command | Description | Use When |
|---|---|---|
| /agent-brain-search | Smart hybrid search (recommended) | General questions |
| /agent-brain-semantic | Pure semantic/vector search | Conceptual queries |
| /agent-brain-keyword | BM25 keyword search | Error messages, function names |
| /agent-brain-hybrid | Hybrid with alpha tuning | Fine-tuned searches |
| /agent-brain-graph | Knowledge graph search | "What calls X?", dependencies |
| /agent-brain-multi | All modes combined (RRF) | Maximum recall |

### Server Commands

[https://github.com/spillwavesolutions/agent-brain#server-commands](https://github.com/spillwavesolutions/agent-brain#server-commands)

| Command | Description |
|---|---|
| /agent-brain-start | Start the server (auto-port) |
| /agent-brain-stop | Stop the server |
| /agent-brain-status | Check health and document count |
| /agent-brain-index | Index documents or code |

### Setup Commands

[https://github.com/spillwavesolutions/agent-brain#setup-commands](https://github.com/spillwavesolutions/agent-brain#setup-commands)

| Command | Description |
|---|---|
| /agent-brain-setup | Complete guided setup wizard |
| /agent-brain-install | Install pip packages |
| /agent-brain-init | Initialize project directory |
| /agent-brain-verify | Verify configuration |
| /agent-brain-providers | Configure embedding/summarization providers |

## Plugin Agents

[https://github.com/spillwavesolutions/agent-brain#plugin-agents](https://github.com/spillwavesolutions/agent-brain#plugin-agents)

Agent Brain includes three intelligent agents for complex tasks:

| Agent | Description | Triggered By |
|---|---|---|
| Search Assistant | Multi-step search across modes, synthesizes answers | "Find all references to...", "Research how..." |
| Research Assistant | Deep exploration with follow-up queries | "Investigate...", "Analyze the architecture of..." |
| Setup Assistant | Guided installation and troubleshooting | "Help me set up Agent Brain", configuration issues |

### Example Agent Interaction

[https://github.com/spillwavesolutions/agent-brain#example-agent-interaction](https://github.com/spillwavesolutions/agent-brain#example-agent-interaction)

**You**: "Research how authentication is implemented across the codebase"

**Research Assistant**:

1. Searches documentation for auth concepts
2. Queries code for auth-related functions
3. Uses graph mode to find dependencies
4. Synthesizes comprehensive answer with references

## Plugin Skills

[https://github.com/spillwavesolutions/agent-brain#plugin-skills](https://github.com/spillwavesolutions/agent-brain#plugin-skills)

Skills provide intelligent context to Claude for optimal searching:

| Skill | Purpose |
|---|---|
| using-agent-brain | Search mode selection, query optimization, API knowledge |
| configuring-agent-brain | Installation, provider configuration, troubleshooting |

When you ask about documentation or code, Claude automatically uses the skill to:

- Choose the best search mode for your query
- Set appropriate parameters (top_k, threshold, alpha)
- Interpret and synthesize results

## Search Modes

[https://github.com/spillwavesolutions/agent-brain#search-modes](https://github.com/spillwavesolutions/agent-brain#search-modes)

| Mode | Best For | Example Query |
|---|---|---|
| HYBRID | General questions (default) | "How does caching work?" |
| VECTOR | Conceptual understanding | "Explain the architecture" |
| BM25 | Exact terms, error codes | "NullPointerException", "getUserById" |
| GRAPH | Relationships, dependencies | "What classes use AuthService?" |
| MULTI | Comprehensive search | "Everything about data validation" |

## Pluggable Providers

[https://github.com/spillwavesolutions/agent-brain#pluggable-providers](https://github.com/spillwavesolutions/agent-brain#pluggable-providers)

Agent Brain supports multiple providers for embeddings and summarization:

### Embedding Providers

[https://github.com/spillwavesolutions/agent-brain#embedding-providers](https://github.com/spillwavesolutions/agent-brain#embedding-providers)

| Provider | Models | Local |
|---|---|---|
| OpenAI | text-embedding-3-large, text-embedding-3-small | No |
| Ollama | nomic-embed-text, mxbai-embed-large | Yes |
| Cohere | embed-english-v3.0, embed-multilingual-v3.0 | No |

### Summarization Providers

[https://github.com/spillwavesolutions/agent-brain#summarization-providers](https://github.com/spillwavesolutions/agent-brain#summarization-providers)

| Provider | Models | Local |
|---|---|---|
| Anthropic | claude-haiku-4-5-20251001, claude-sonnet-4-5-20250514 | No |
| OpenAI | gpt-5, gpt-5-mini | No |
| Gemini | gemini-3-flash, gemini-3-pro | No |
| Grok | grok-4, grok-4-fast | No |
| Ollama | llama4:scout, mistral-small3.2, qwen3-coder | Yes |

### Fully Local Mode

[https://github.com/spillwavesolutions/agent-brain#fully-local-mode](https://github.com/spillwavesolutions/agent-brain#fully-local-mode)

Run completely offline with Ollama:

```
/agent-brain-providers
# Select Ollama for both embeddings and summarization
```

## Features

[https://github.com/spillwavesolutions/agent-brain#features](https://github.com/spillwavesolutions/agent-brain#features)

### Code Search

[https://github.com/spillwavesolutions/agent-brain#code-search](https://github.com/spillwavesolutions/agent-brain#code-search)

- **10 Programming Languages**: Python, TypeScript, JavaScript, Java, Kotlin, C, C++, C#, Go, Rust, Swift
- **AST-Aware Chunking**: Tree-sitter parsing preserves code structure
- **LLM Summaries**: AI-generated descriptions improve semantic search
- **Language Filtering**: Filter results by programming language

### GraphRAG (Knowledge Graph)

[https://github.com/spillwavesolutions/agent-brain#graphrag-knowledge-graph](https://github.com/spillwavesolutions/agent-brain#graphrag-knowledge-graph)

- Entity and relationship extraction
- Dependency-aware queries ("What calls X?")
- Code structure visualization

### Multi-Instance Architecture

[https://github.com/spillwavesolutions/agent-brain#multi-instance-architecture](https://github.com/spillwavesolutions/agent-brain#multi-instance-architecture)

- Per-project isolated servers
- Automatic port allocation
- Work on multiple projects simultaneously

## Project Structure

[https://github.com/spillwavesolutions/agent-brain#project-structure](https://github.com/spillwavesolutions/agent-brain#project-structure)
## gBrain Temporal Metadata

- content_timestamp: 2026-03-16
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

