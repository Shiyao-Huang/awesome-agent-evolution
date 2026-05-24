# soulfir/miguel

- URL: https://github.com/soulfir/miguel
- Platform: github.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "AI agent" "self-improving"

## Raw Content

## GitHub - soulfir/miguel: A self-improving AI agent that iteratively enhances its own architecture, tools, and capabilities · GitHub

**Source**: https://github.com/soulfir/miguel

---

[Skip to content](https://github.com/soulfir/miguel#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[soulfir](https://github.com/soulfir)

/
**[miguel](https://github.com/soulfir/miguel)**

Public

- [Notifications](https://github.com/login?return_to=%2Fsoulfir%2Fmiguel)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Fsoulfir%2Fmiguel)
- 
[Star
          4](https://github.com/login?return_to=%2Fsoulfir%2Fmiguel)

[https://github.com/soulfir/miguel](https://github.com/soulfir/miguel)

[Branches](https://github.com/soulfir/miguel/branches)[Tags](https://github.com/soulfir/miguel/tags)

[https://github.com/soulfir/miguel/branches](https://github.com/soulfir/miguel/branches)[https://github.com/soulfir/miguel/tags](https://github.com/soulfir/miguel/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History47 Commits47 Commits |  |  |  |
| miguel | miguel |  |  |
| user_files | user_files |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# Miguel

[https://github.com/soulfir/miguel#miguel](https://github.com/soulfir/miguel#miguel)

[https://creativecommons.org/licenses/by-nc/4.0/](https://creativecommons.org/licenses/by-nc/4.0/)[https://python.org](https://python.org)[https://anthropic.com](https://anthropic.com)[https://docker.com](https://docker.com)[https://github.com/agno-agi/agno](https://github.com/agno-agi/agno)

**A self-improving AI agent that reads, modifies, and extends its own source code — safely sandboxed inside Docker.**

---

Miguel is an AI agent that can rewrite itself. Not just generate code for you — it modifies *its own* source code, creates new tools, rewrites its own system prompts, and generates new capabilities it didn't start with.

It began with 10 seed capabilities. It completed all 10, then autonomously generated more and has implemented all 22. Every improvement is validated (syntax, imports, schema), committed to git, and pushed to this repo. If validation fails, the batch is rolled back automatically. The agent literally cannot corrupt itself.

**Architecture: Agno Team with context-aware delegation.** Miguel operates as a coordinator that delegates to specialized sub-agents (Coder, Researcher, Analyst), each getting fresh context windows. The coordinator treats its context window as finite cognitive capacity — monitoring usage, planning before executing, delegating heavy work, and auto-compacting state when running low.

This is a **living repository**. Miguel auto-commits and pushes after each successful improvement. The code you see today will be different tomorrow as Miguel continues to evolve.

Beyond self-improvement, Miguel is also a fully interactive AI assistant — chat with it, search the web, read webpages, browse Reddit, call APIs, remember things across sessions, plan multi-step projects, analyze files, or work with your data.

## What It Looks Like

[https://github.com/soulfir/miguel#what-it-looks-like](https://github.com/soulfir/miguel#what-it-looks-like)

**Interactive mode:**

```
__  __ _                  _
 |  \/  (_) __ _ _   _  ___| |
 | |\/| | |/ _` | | | |/ _ \ |
 | |  | | | (_| | |_| |  __/ |
 |_|  |_|_|\__, |\__,_|\___|_|
            |___/

  Self-improving AI agent. Type /help for commands.

You: What can you do?

Miguel: I'm a self-improving AI agent running as a team with
  specialized sub-agents. Here's what I can do:

  Directly:
  - Answer questions, search the web, read webpages, call APIs
  - Browse and interact with Reddit
  - Remember facts and preferences across sessions
  - Break complex tasks into structured plans
  - Monitor my own context usage and save state when running low
  - Improve myself — add new tools, rewrite my own prompts

  Via sub-agents (delegated with fresh context):
  - Coder: Write, execute, and debug code
  - Researcher: Deep web research, read full articles, multi-source synthesis
  - Analyst: Analyze CSVs, PDFs, images, run data queries
```

**Improvement mode:**

```
───────────────── IMPROVEMENT BATCH 1/3 ─────────────────

I'll start by finding the next capability to implement.
╭─────── Tool Call ───────╮
│ get_next_capability({}) │
╰─────────────────────────╯
╭─────────────────── Result ───────────────────────╮
│ cap-011: Web search and information retrieval    │
│ Priority: 1 | Status: unchecked                  │
╰──────────────────────────────────────────────────╯

[Agent reads its own code, designs the solution, writes
 new files, registers tools, updates prompts, validates,
 and marks the capability as complete]

Running validation checks...
✅ All checks passed
✅ Pushed to remote.
Batch 1 succeeded: Added web search via DuckDuckGo
```

## Features

[https://github.com/soulfir/miguel#features](https://github.com/soulfir/miguel#features)

### As an AI Assistant

[https://github.com/soulfir/miguel#as-an-ai-assistant](https://github.com/soulfir/miguel#as-an-ai-assistant)

- **Interactive REPL** — Chat with slash commands (`/help`, `/capabilities`, `/improve`, `/history`)
- **Team architecture** — Coordinator + 3 specialized sub-agents (Coder, Researcher, Analyst)
- **Context-aware execution** — Assesses task complexity and chooses optimal strategy
- **Context window monitoring** — Tracks usage, warns when low, auto-saves state
- **Web search** — Search the web and news via DuckDuckGo
- **Webpage reading** — Fetch and extract readable content from any URL
- **Reddit integration** — Browse, read, search, post, and comment (OAuth2)
- **API integration** — Call any REST API; 10 pre-built free API integrations
- **Persistent memory** — Remembers facts, preferences, and context across sessions
- **Task planning** — Breaks complex requests into ordered tasks with dependencies
- **File analysis** — Analyze PDFs, CSVs, Excel, images with rich output
- **Data querying** — Run pandas expressions on any tabular data
- **Code execution** — Run Python and shell commands inside the sandbox
- **Conversation history** — Maintains context across messages (last 20 turns)

### As a Self-Improving Agent

[https://github.com/soulfir/miguel#as-a-self-improving-agent](https://github.com/soulfir/miguel#as-a-self-improving-agent)

- **Self-modification** — Reads and rewrites its own source code
- **Capability checklist** — Completes seed tasks, then generates new ones autonomously
- **Tool creation** — Writes new tool files and auto-registers them
- **Prompt rewriting** — Safely modifies its own system instructions with syntax validation
- **Context-aware batches** — Monitors context, prioritizes implementation, delegates heavy work
- **Architecture awareness** — Maintains a map of its own codebase
- **Error recovery** — Automatic backups, health checks, and restoration

## Quick Start

[https://github.com/soulfir/miguel#quick-start](https://github.com/soulfir/miguel#quick-start)

### Prerequisites

[https://github.com/soulfir/miguel#prerequisites](https://github.com/soulfir/miguel#prerequisites)

- **Docker** (Docker Desktop or Docker Engine)
- **Python 3.11+**

### Install

[https://github.com/soulfir/miguel#install](https://github.com/soulfir/miguel#install)

```
git clone https://github.com/soulfir/miguel.git
cd miguel
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
```

Add your Anthropic API key to `.env`:

```
ANTHROPIC_API_KEY=sk-ant-...
```

### Reddit Setup (Optional)

[https://github.com/soulfir/miguel#reddit-setup-optional](https://github.com/soulfir/miguel#reddit-setup-optional)

```
REDDIT_CLIENT_ID=your_client_id
REDDIT_CLIENT_SECRET=your_client_secret
REDDIT_USERNAME=your_reddit_username
REDDIT_PASSWORD=your_reddit_password
```

Create a Reddit app at [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps) (type: "script", redirect URI: `http://localhost:8080`).

### Run

[https://github.com/soulfir/miguel#run](https://github.com/soulfir/miguel#run)

```
miguel              # Interactive mode — chat, explore, trigger improvements
miguel improve 5    # Run 5 improvement batches autonomously
```

## Architecture

[https://github.com/soulfir/miguel#architecture](https://github.com/soulfir/miguel#architecture)

```
HOST (your machine)                           DOCKER CONTAINER (sandboxed)
┌──────────────────────────────────────┐      ┌──────────────────────────────┐
│  miguel CLI (cli.py)                 │      │  FastAPI server (port 8420)  │
│  Improvement runner                  │ HTTP │                              │
│  Git commit/push                     │ /SSE │  Miguel Team (coordinator)   │
│  Validation checks                   │◄────►│  ├── Coder sub-agent         │
│                                      │      │  ├── Researcher sub-agent    │
│                                      │      │  ├── Analyst sub-agent       │
│                                      │      │  └── 53 tools                │
└──────────────────────────────────────┘      └──────────────────────────────┘
```

**Team architecture:**

```
Miguel (Coordinator)
                   53 tools, memory, planning
                          │
            ┌─────────────┼─────────────┐
            ▼             ▼             ▼
         Coder       Researcher     Analyst
       (6 tools)     (8 tools)    (6 tools)
      Python exec   Web search    CSV/Excel
      Shell cmds    Web reading   PDF extract
      File write    News search   Image analyze
      Validation    HTTP client   Pandas query
                    API calls
```

**Volume mounts:**

| Host path | Container path | Access |
|---|---|---|
| Entire project | /app | Read-only |
| miguel/agent/ | /app/miguel/agent | Read-write |
| user_files/ | /app/user_files | Read-write |

## Safety

[https://github.com/soulfir/miguel#safety](https://github.com/soulfir/miguel#safety)

Nine layers of protection:

1. **Docker isolation** — Agent runs in a container
2. **Read-only mounts** — Protected files mounted read-only
3. **Path validation** — File-writing tools refuse to operate outside `miguel/agent/`
4. **AST validation** — Every Python file syntax-checked after each batch
5. **Schema validation** — `capabilities.json` structure verified
6. **Import validation** — Agent re-instantiated after changes to verify it loads
7. **Atomic writes** — Temp file + rename prevents corrupt writes
8. **Automatic backups** — `.bak` files before every modification
9. **Git rollback** — Failed batches automatically reverted

## Capabilities

[https://github.com/soulfir/miguel#capabilities](https://github.com/soulfir/miguel#capabilities)

Miguel started with 10 seed capabilities and generates its own.

### Seed Capabilities (all ✅)

[https://github.com/soulfir/miguel#seed-capabilities-all-](https://github.com/soulfir/miguel#seed-capabilities-all-)

| ID | Title | Category |
|---|---|---|
| cap-001 | Respond to basic questions | core |
| cap-002 | Read and explain own source code | self-awareness |
| cap-003 | Modify own instructions/prompts | self-improvement |
| cap-004 | Create new custom tools | self-improvement |
| cap-005 | Error handling and recovery | robustness |
| cap-006 | Execute and validate Python code | capability |
| cap-007 | Maintain improvement context | memory |
| cap-008 | Validate own code before writing | safety |
| cap-009 | Refactor and optimize existing code | quality |
| cap-010 | Generate new capabilities autonomously | self-improvement |

### Self-Generated Capabilities

[https://github.com/soulfir/miguel#self-generated-capabilities](https://github.com/soulfir/miguel#self-generated-capabilities)

| ID | Title | Status |
|---|---|---|
| cap-011 | Web search and information retrieval | ✅ |
| cap-012 | Persistent memory across sessions | ✅ |
| cap-013 | Structured task planning and decomposition | ✅ |
| cap-014 | File analysis — PDF, CSV, images, structured data | ✅ |
| cap-015 | API integration framework | ✅ |
| cap-017 | Evolve into Agno Team with sub-agent delegation | ✅ |
| cap-018 | Context-aware execution strategy | ✅ |
| cap-019 | Context window awareness and auto-compaction | ✅ |
| cap-020 | Reddit integration — browse, post, and interact | ✅ |
| cap-021 | Architecture consolidation and cleanup | ✅ |
| cap-022 | Webpage content extraction and reading | ✅ |
| cap-023 | Automated code testing and validation | ⬜ |
| cap-024 | Smart conversation starters with memory recall | ⬜ |

## Tools

[https://github.com/soulfir/miguel#tools](https://github.com/soulfir/miguel#tools)

53 coordinator tools across 14 categories, plus 3 sub-agents:

| Category | Tools | Description |
|---|---|---|
| Capability Management | get_capabilities, get_next_capability, check_capability, add_capability | Self-improvement checklist |
| Self-Inspection | read_own_file, list_own_files, get_architecture, log_improvement | Read own code, log changes |
| Prompt Modification | get_prompt_sections, modify_prompt_section | Rewrite own instructions |
| Tool Creation | create_tool, add_functions_to_tool | Create + auto-register tools |
| Error Recovery | recover_backup, list_recovery_points, validate_agent_file, health_check | Diagnostics + restoration |
| Dependencies | add_dependency, list_dependencies | Package management |
| Web Search & Reading | web_search, web_news, web_search_detailed, web_read | DuckDuckGo search + page reading |
| API Integration | http_request, api_get, api_post, api_quickstart | REST APIs + 10 pre-built services |
| Reddit | reddit_browse, reddit_read, reddit_search, reddit_post, reddit_comment, reddit_user | Reddit OAuth2 integration |
| Memory | remember, recall, forget, list_memories | Persistent cross-session memory |
| Planning | create_plan, add_task, update_task, show_plan, list_plans, get_next_task, remove_plan | Task decomposition |
| File Analysis | analyze_csv, analyze_pdf, analyze_image, csv_query | PDF, CSV, Excel, image analysis |
| Context Awareness | check_context, auto_compact | Monitor context, save state |
| Built-in (Agno) | PythonTools, ShellTools, LocalFileSystemTools | Code execution, shell, file I/O |

## Project Structure

[https://github.com/soulfir/miguel#project-structure](https://github.com/soulfir/miguel#project-structure)

```
Miguel/
├── Dockerfile                     # Container image
├── docker-compose.yml             # Container config + volume mounts
├── pyproject.toml                 # Dependencies + CLI entry point
├── .env                           # API keys (gitignored)
├── user_files/                    # Shared workspace for user files
├── miguel/
│   ├── cli.py                     # CLI entry point + REPL (host)
│   ├── runner.py                  # Improvement loop + git ops (host)
│   ├── display.py                 # Terminal renderer (host)
│   ├── client.py                  # HTTP client for container (host)
│   ├── container.py               # Docker lifecycle management (host)
│   └── agent/                     # MUTABLE — Miguel modifies everything here
│       ├── core.py                # Team + Agent factory
│       ├── team.py                # Sub-agent definitions
│       ├── config.py              # Settings (model, version, context limits)
│       ├── prompts.py             # System prompts (self-modifying)
│       ├── server.py              # FastAPI server
│       ├── architecture.md        # Architecture map
│       ├── capabilities.json      # Capability checklist
│       ├── improvements.md        # Improvement log
│       └── tools/                 # 14 tool modules, 53 functions
```

## Contributing

[https://github.com/soulfir/miguel#contributing](https://github.com/soulfir/miguel#contributing)

Contributions are welcome! Please see [CONTRIBUTING.md](https://github.com/soulfir/miguel/blob/main/CONTRIBUTING.md) for guidelines.

## License

[https://github.com/soulfir/miguel#license](https://github.com/soulfir/miguel#license)

[Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/)

## Acknowledgments

[https://github.com/soulfir/miguel#acknowledgments](https://github.com/soulfir/miguel#acknowledgments)

- Built with [Agno](https://github.com/agno-agi/agno) — the agent framework
- Powered by [Claude](https://anthropic.com) (Anthropic) — the LLM backbone
- Web search via [DuckDuckGo](https://duckduckgo.com)
- Content extraction via [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)

## About

         A self-improving AI agent that iteratively enhances its own architecture, tools, and capabilities       

### Resources

[Readme](https://github.com/soulfir/miguel#readme-ov-file)

### License

[View license](https://github.com/soulfir/miguel#License-1-ov-file)

### Contributing

[Contributing](https://github.com/soulfir/miguel#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/soulfir/miguel/activity)

### Stars

[4
        stars](https://github.com/soulfir/miguel/stargazers)

### Watchers

[0
        watching](https://github.com/soulfir/miguel/watchers)

### Forks

[1
        fork](https://github.com/soulfir/miguel/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fsoulfir%2Fmiguel&report=soulfir+%28user%29)

## [Releases](https://github.com/soulfir/miguel/releases)

No releases published

## [Packages
      0](https://github.com/users/soulfir/packages?repo_name=miguel)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/soulfir/miguel/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.7%](https://github.com/soulfir/miguel/search?l=python)
- [Dockerfile
          0.3%](https://github.com/soulfir/miguel/search?l=dockerfile)

     You can’t perform that action at this time.
