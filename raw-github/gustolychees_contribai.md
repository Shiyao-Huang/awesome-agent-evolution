---
repo: gustolychees/contribai
url: https://github.com/gustolychees/contribai
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - GustoLychees/ContribAI: Autonomous AI agent that contributes to open source — discovers repos, analyzes code, generates fixes, and submits PRs · GitHub

**Source**: https://github.com/gustolychees/contribai

---

[Skip to content](https://github.com/gustolychees/contribai#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[GustoLychees](https://github.com/GustoLychees)

/
**[ContribAI](https://github.com/GustoLychees/ContribAI)**

Public

       forked from [tang-vu/ContribAI](https://github.com/tang-vu/ContribAI)

- [Notifications](https://github.com/login?return_to=%2FGustoLychees%2FContribAI)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FGustoLychees%2FContribAI)
- 
[Star
          0](https://github.com/login?return_to=%2FGustoLychees%2FContribAI)

[https://github.com/GustoLychees/ContribAI](https://github.com/GustoLychees/ContribAI)

[Branches](https://github.com/GustoLychees/ContribAI/branches)[Tags](https://github.com/GustoLychees/ContribAI/tags)

[https://github.com/GustoLychees/ContribAI/branches](https://github.com/GustoLychees/ContribAI/branches)[https://github.com/GustoLychees/ContribAI/tags](https://github.com/GustoLychees/ContribAI/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History130 Commits130 Commits |  |  |  |
| .agents | .agents |  |  |
| .github | .github |  |  |
| contribai | contribai |  |  |
| docs | docs |  |  |
| plans/reports | plans/reports |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .editorconfig | .editorconfig |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| HALL_OF_FAME.md | HALL_OF_FAME.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| app_current.txt | app_current.txt |  |  |
| config.example.yaml | config.example.yaml |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| repomix-output.xml | repomix-output.xml |  |  |
| View all files |  |  |  |

## Repository files navigation

# ContribAI

[https://github.com/gustolychees/contribai#contribai](https://github.com/gustolychees/contribai#contribai)

> **AI Agent that automatically contributes to open source projects on GitHub**

[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://github.com/GustoLychees/ContribAI/blob/main/LICENSE](https://github.com/GustoLychees/ContribAI/blob/main/LICENSE)[https://github.com/gustolychees/contribai#testing](https://github.com/gustolychees/contribai#testing)[https://github.com/tang-vu/ContribAI/releases](https://github.com/tang-vu/ContribAI/releases)

### 🏆 Results

[https://github.com/gustolychees/contribai#-results](https://github.com/gustolychees/contribai#-results)

| Metric | Count |
|---|---|
| PRs Submitted | 43+ |
| PRs Merged | 9 |
| PRs Closed | 14 |
| Repos Contributed | 21+ |
| Notable Repos | Worldmonitor (45k⭐), Maigret (19k⭐), AI-Research-SKILLs (6k⭐), s-tui (5k⭐) |

> Set it up once, wake up to merged PRs. See the [Hall of Fame →](https://github.com/GustoLychees/ContribAI/blob/main/HALL_OF_FAME.md)

ContribAI discovers open source repositories, analyzes code for improvements, generates fixes, and submits Pull Requests — all autonomously.

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
  │ Discovery│───▶│ Analysis │───▶│Generator │───▶│ PR + CI  │───▶│ Patrol   │
  │          │    │ 20 skills│    │ LLM +    │    │ Fork,    │    │ Auto-fix │
  │ Find repos│    │ Security │    │ self-    │    │ commit,  │    │ review   │
  │ by lang, │    │ quality, │    │ review,  │    │ create   │    │ feedback │
  │ stars    │    │ perf     │    │ scoring  │    │ PR + CLA │    │ & reply  │
  └──────────┘    └──────────┘    └──────────┘    └──────────┘    └──────────┘
```

**Safety:** Quality gate (7-check scorer), duplicate detection, AI policy respect, CI monitoring, rate limiting, dry-run mode

## Quick Start

[https://github.com/gustolychees/contribai#quick-start](https://github.com/gustolychees/contribai#quick-start)

```
# Install
git clone https://github.com/tang-vu/ContribAI.git
cd ContribAI
pip install -e ".[dev]"

# Configure
cp config.example.yaml config.yaml
# Edit config.yaml with your GitHub token + LLM API key

# Run
contribai hunt              # Autonomous: discover repos → analyze → PR
contribai target <repo_url> # Target a specific repo
contribai run --dry-run     # Preview without creating PRs
```

## Features

[https://github.com/gustolychees/contribai#features](https://github.com/gustolychees/contribai#features)

| Category | Highlights |
|---|---|
| Analysis | Security (secrets, SQLi, XSS), code quality, performance, docs, UI/UX, refactoring |
| LLM | Gemini, OpenAI, Anthropic, Ollama, Vertex AI — smart task routing across model tiers |
| Hunt Mode | Multi-round autonomous hunting, cross-file fixes, inter-repo delay |
| PR Patrol | Monitors PRs for review feedback, auto-responds and pushes code fixes |
| MCP Server | 14 tools for Claude Desktop + Antigravity IDE via stdio protocol |
| Safety | AI policy detection, CLA auto-signing, quality gate, duplicate prevention |
| Platform | Web dashboard, scheduler, webhooks, Docker, profiles, plugins |
| Notifications | Slack, Discord, Telegram with retry |

## Usage

[https://github.com/gustolychees/contribai#usage](https://github.com/gustolychees/contribai#usage)

```
# Hunt mode (autonomous)
contribai hunt                         # Discover and contribute
contribai hunt --rounds 5 --delay 15   # 5 rounds, 15min delay
contribai hunt --mode issues           # Issue solving only

# Target specific repos
contribai target <repo_url>            # Analyze and contribute
contribai solve <repo_url>             # Solve open issues

# Monitor & maintain
contribai patrol                       # Respond to PR reviews
contribai status                       # Check submitted PRs
contribai stats                        # Overall statistics
contribai cleanup                      # Remove stale forks

# Platform
contribai serve                        # Dashboard at :8787
contribai schedule --cron "0 */6 * * *"  # Auto-run every 6h

# Profiles
contribai profile security-focused     # Run with preset profile
```

## Configuration

[https://github.com/gustolychees/contribai#configuration](https://github.com/gustolychees/contribai#configuration)

```
# config.yaml
github:
  token: "ghp_your_token"       # or set GITHUB_TOKEN env var

llm:
  provider: "gemini"            # gemini | openai | anthropic | ollama
  model: "gemini-2.5-flash"
  api_key: "your_api_key"

discovery:
  languages: [python, javascript]
  stars_range: [100, 5000]
```

See [config.example.yaml](https://github.com/GustoLychees/ContribAI/blob/main/config.example.yaml) for all options.

## Architecture

[https://github.com/gustolychees/contribai#architecture](https://github.com/gustolychees/contribai#architecture)

```
contribai/
├── core/           # Config, models, middleware, events, retry, quotas
├── llm/            # Multi-provider LLM + task routing + context management
├── github/         # GitHub API client, discovery, guidelines
├── analysis/       # 20+ analysis skills + framework detection + compression
├── generator/      # Fix generation + self-review + quality scoring
├── orchestrator/   # Pipeline, SQLite memory (7 tables), review gate
├── pr/             # PR lifecycle + patrol + CLA/DCO compliance
├── issues/         # Issue classification + multi-file solving
├── agents/         # Sub-agent registry (DeerFlow-inspired)
├── tools/          # Extensible tool protocol
├── mcp/            # MCP client for external tools
├── mcp_server.py   # MCP server (14 tools for Claude Desktop)
├── sandbox/        # Docker-based code validation
├── web/            # FastAPI dashboard + webhooks + auth
├── scheduler/      # APScheduler cron automation
├── notifications/  # Slack, Discord, Telegram
├── plugins/        # Entry-point plugin system
├── templates/      # YAML contribution templates
└── cli/            # Rich CLI + TUI
```

See [docs/system-architecture.md](https://github.com/GustoLychees/ContribAI/blob/main/docs/system-architecture.md) for detailed architecture.

## Docker

[https://github.com/gustolychees/contribai#docker](https://github.com/gustolychees/contribai#docker)

```
docker compose up -d dashboard            # Dashboard at :8787
docker compose run --rm runner run        # One-shot run
docker compose up -d dashboard scheduler  # Dashboard + scheduler
```

## Testing

[https://github.com/gustolychees/contribai#testing](https://github.com/gustolychees/contribai#testing)

```
pytest tests/ -v                    # Run all 431 tests
pytest tests/ -v --cov=contribai    # With coverage
ruff check contribai/               # Lint
ruff format contribai/              # Format
```

## Extending

[https://github.com/gustolychees/contribai#extending](https://github.com/gustolychees/contribai#extending)

**Plugins** — Create custom analyzers/generators as Python packages:

```
from contribai.plugins.base import AnalyzerPlugin

class MyAnalyzer(AnalyzerPlugin):
    @property
    def name(self): return "my-analyzer"

    async def analyze(self, context):
        return findings
```

```
# pyproject.toml
[project.entry-points."contribai.analyzers"]
my_analyzer = "my_package:MyAnalyzer"
```

**MCP** — Use ContribAI from Claude Desktop or Antigravity IDE:

```
// Claude Desktop: ~/.config/claude/claude_desktop_config.json
// Antigravity IDE: ~/.gemini/antigravity/mcp_config.json
{
  "mcpServers": {
    "contribai": {
      "command": "python",
      "args": ["-m", "contribai.mcp_server"]
    }
  }
}
```

## Documentation

[https://github.com/gustolychees/contribai#documentation](https://github.com/gustolychees/contribai#documentation)

| Doc | Description |
|---|---|
| HALL_OF_FAME.md | 9 merged · 14 closed across 21+ repos — real results |
| system-architecture.md | Pipeline, middleware, events, LLM routing |
| code-standards.md | Conventions, patterns, testing |
| deployment-guide.md | Install, Docker, config, CLI reference |
| project-roadmap.md | Version history and future plans |
| codebase-summary.md | Module map and tech stack |
| CONTRIBUTING.md | Contribution guidelines |

## License

[https://github.com/gustolychees/contribai#license](https://github.com/gustolychees/contribai#license)

AGPL-3.0 + Commons Clause — see [LICENSE](https://github.com/GustoLychees/ContribAI/blob/main/LICENSE) for details.

## About

         Autonomous AI agent that contributes to open source — discovers repos, analyzes code, generates fixes, and submits PRs       

[github.com/tang-vu/ContribAI](https://github.com/tang-vu/ContribAI)

### Resources

[Readme](https://github.com/gustolychees/contribai#readme-ov-file)

### License

[View license](https://github.com/gustolychees/contribai#License-1-ov-file)

### Contributing

[Contributing](https://github.com/gustolychees/contribai#contributing-ov-file)

### Security policy

[Security policy](https://github.com/gustolychees/contribai#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/GustoLychees/ContribAI/activity)

### Stars

[0
        stars](https://github.com/GustoLychees/ContribAI/stargazers)

### Watchers

[0
        watching](https://github.com/GustoLychees/ContribAI/watchers)

### Forks

[0
        forks](https://github.com/GustoLychees/ContribAI/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FGustoLychees%2FContribAI&report=GustoLychees+%28user%29)

## [Releases](https://github.com/GustoLychees/ContribAI/releases)

No releases published

## [Packages
      0](https://github.com/users/GustoLychees/packages?repo_name=ContribAI)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/GustoLychees/ContribAI/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- 

Python

99.6%

- 

Other

0.4%

     You can’t perform that action at this time.
