---
repo: memovai/memov
url: https://github.com/memovai/memov
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - memovai/memov: Give git-like & traceable memory to OpenClaw and any coding agents. By https://memov.ai/ aka Entire CLI for every coding agents by MCP. Self-evolution for skills. · GitHub

**Source**: https://github.com/memovai/memov

---

[Skip to content](https://github.com/memovai/memov#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[memovai](https://github.com/memovai)

/
**[memov](https://github.com/memovai/memov)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmemovai%2Fmemov)You must be signed in to change notification settings
- [Fork
    22](https://github.com/login?return_to=%2Fmemovai%2Fmemov)
- 
[Star
          190](https://github.com/login?return_to=%2Fmemovai%2Fmemov)

[https://github.com/memovai/memov](https://github.com/memovai/memov)

[Branches](https://github.com/memovai/memov/branches)[Tags](https://github.com/memovai/memov/tags)

[https://github.com/memovai/memov/branches](https://github.com/memovai/memov/branches)[https://github.com/memovai/memov/tags](https://github.com/memovai/memov/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History172 Commits172 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| docs | docs |  |  |
| mem_mcp_server | mem_mcp_server |  |  |
| memov | memov |  |  |
| scripts | scripts |  |  |
| skills/vibegit | skills/vibegit |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| build_binary.sh | build_binary.sh |  |  |
| install.sh | install.sh |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/memovai/memov](https://github.com/memovai/memov)

**English** | [Deutsch](https://github.com/memovai/memov/blob/main/docs/readme/README_DE.md) | [Español](https://github.com/memovai/memov/blob/main/docs/readme/README_ES.md) | [Français](https://github.com/memovai/memov/blob/main/docs/readme/README_FR.md) | [日本語](https://github.com/memovai/memov/blob/main/docs/readme/README_JA.md) | [한국어](https://github.com/memovai/memov/blob/main/docs/readme/README_KO.md) | [Português](https://github.com/memovai/memov/blob/main/docs/readme/README_PT.md) | [Русский](https://github.com/memovai/memov/blob/main/docs/readme/README_RU.md) | [中文](https://github.com/memovai/memov/blob/main/docs/readme/README_CN.md)

#### VibeGit🤌: Auto-trace your prompts, context & code diffs.

[https://github.com/memovai/memov#vibegit-auto-trace-your-prompts-context--code-diffs](https://github.com/memovai/memov#vibegit-auto-trace-your-prompts-context--code-diffs)

[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://discord.gg/un54aD7Hug](https://discord.gg/un54aD7Hug)[https://deepwiki.com/memovai/memov](https://deepwiki.com/memovai/memov)[https://x.com/ssslvky](https://x.com/ssslvky)

MemoV is a memory layer for AI coding agents that provides **traceable**, **Git-powered** version control for prompts, context, and code diffs. It enables **VibeGit** - automatic versioning of AI coding sessions with branch exploration, rollback capabilities, and **zero pollution** to the standard .git repository.

| MemoV | Checkpoints |
|---|---|
| Branch exploration | Linear timeline |
| Cross-session | Session-bound |
| Rollback preserves all | Rollback erases history |
| Every jump tracked | No trajectory |

[https://github.com/memovai/memov/blob/main/docs/images/ALL.png](https://github.com/memovai/memov/blob/main/docs/images/ALL.png)

- 💬 [Join our Discord](https://discord.gg/un54aD7Hug) and dive into smarter vibe engineering

## Features

[https://github.com/memovai/memov#features](https://github.com/memovai/memov#features)

- **One-click MCP**: Works with any AI coding agent
- **VibeGit for Agents**: Auto-trace prompts, context, and code diffs before git commits
- **Version Control**: Branch, rollback, replay any interaction
- **Keep Git Clean**: Shadow `.mem` timeline, files as context, zero pollution on `.git`
- **Visual UI**: Say "mem ui" in chat, and view at [http://localhost:38888](http://localhost:38888)
- **Private-first** — Local, no database, no overhead. Use .memignore to exclude

[https://github.com/memovai/memov/blob/main/docs/images/one.png](https://github.com/memovai/memov/blob/main/docs/images/one.png)

## Quick Start (MCP Installation)

[https://github.com/memovai/memov#quick-start-mcp-installation](https://github.com/memovai/memov#quick-start-mcp-installation)

### Prerequisites

[https://github.com/memovai/memov#prerequisites](https://github.com/memovai/memov#prerequisites)

Install `uv` first:

```
# macOS / Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# Install Git (if not installed)
winget install --id Git.Git -e --source winget
```

### Claude Code

[https://github.com/memovai/memov#claude-code](https://github.com/memovai/memov#claude-code)

Run in your project root directory:

```
claude mcp add mem-mcp --scope project -- uvx --from git+https://github.com/memovai/memov.git mem-mcp-launcher stdio $(pwd)
```

### Codex

[https://github.com/memovai/memov#codex](https://github.com/memovai/memov#codex)

Run in your project root directory:

```
codex mcp add mem-mcp -- uvx --from git+https://github.com/memovai/memov.git mem-mcp-launcher stdio $(pwd)
```

**VS Code**

Create `.vscode/mcp.json` in your project root:

```
{
  "servers": {
    "mem-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/memovai/memov.git",
        "mem-mcp-launcher",
        "stdio",
        "${workspaceFolder}"
      ]
    }
  }
}
```

**Cursor**

Go to **Files > Preferences > Cursor Settings > MCP**, then add:

```
{
  "mcpServers": {
    "mem-mcp": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/memovai/memov.git",
        "mem-mcp-launcher",
        "stdio",
        "${workspaceFolder}"
      ]
    }
  }
}
```

**Antigravity**

> **Note:** Antigravity does not support `"${workspaceFolder}"` variable. Please manually enter the absolute path to your project directory.

Go to **Settings > MCP**, then add:

```
{
  "mcpServers": {
    "mem-mcp": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/memovai/memov.git",
        "mem-mcp-launcher",
        "stdio",
        "/absolute/path/to/your/project"
      ]
    }
  }
}
```

Replace `/absolute/path/to/your/project` with the actual absolute path to your project directory (e.g., `/Users/username/projects/my-project` on macOS/Linux or `C:\\Users\\username\\projects\\my-project` on Windows).

**With VectorDB (RAG mode)** 🚧 WIP

To enable semantic search, validation, and debugging tools, install with `[rag]` extras:

**Claude Code:**

```
claude mcp add mem-mcp --scope project -- uvx --from "git+https://github.com/memovai/memov.git[rag]" mem-mcp-launcher stdio $(pwd)
```

**VS Code / Cursor:** Change the `--from` argument to:

```
"git+https://github.com/memovai/memov.git[rag]"
```

### Important Tips

[https://github.com/memovai/memov#important-tips](https://github.com/memovai/memov#important-tips)

**Add a Rule** — To automatically save snapshots after each interaction, add a rule to your coding agents:

- **Cursor**: Cursor Settings > Rules
- **Claude Code**: `CLAUDE.md`
- Or the equivalent in your MCP client

Example rule:

```
After completing any interaction, always call `use mem snap` to save the snapshot.
```

## Web UI, Just Say Use mem ui🤌

[https://github.com/memovai/memov#web-ui-just-say-use-mem-ui](https://github.com/memovai/memov#web-ui-just-say-use-mem-ui)

Just say **"use mem ui"** in the chat — opens at `http://localhost:38888` with timeline view, branch filtering, diff viewer, and jump to any snapshot.

## CLI Installation (Optional)

[https://github.com/memovai/memov#cli-installation-optional](https://github.com/memovai/memov#cli-installation-optional)

If you want to use the `mem` CLI tool directly (for manual tracking, history viewing, etc.):

### One-Line Install

[https://github.com/memovai/memov#one-line-install](https://github.com/memovai/memov#one-line-install)

```
curl -fsSL https://raw.githubusercontent.com/memovai/memov/main/install.sh | bash
```

Or with wget:

```
wget -qO- https://raw.githubusercontent.com/memovai/memov/main/install.sh | bash
```

### Package Managers

[https://github.com/memovai/memov#package-managers](https://github.com/memovai/memov#package-managers)
**Homebrew (macOS/Linux)**

```
brew tap memovai/mem
brew install memov
```

**APT (Debian/Ubuntu)**

```
echo "deb [trusted=yes] https://memovai.github.io/memov/apt stable main" | sudo tee /etc/apt/sources.list.d/mem.list
sudo apt update
sudo apt install mem
```

**YUM/DNF (Fedora/RHEL/CentOS)**

```
sudo curl -o /etc/yum.repos.d/mem.repo https://memovai.github.io/memov/yum/mem.repo
sudo dnf install mem
```

**Direct Download**

Download the latest release for your platform:

| Platform | Download |
|---|---|
| Linux x86_64 | mem-linux-x86_64.tar.gz |
| macOS Intel | mem-macos-x86_64.tar.gz |
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

