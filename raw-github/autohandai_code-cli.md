---
repo: autohandai/code-cli
url: https://github.com/autohandai/code-cli
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - autohandai/code-cli: Autohand Code CLI - Ultra fast self evolving coding agent that runs in your terminal · GitHub

**Source**: https://github.com/autohandai/code-cli

---

[Skip to content](https://github.com/autohandai/code-cli#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[autohandai](https://github.com/autohandai)

/
**[code-cli](https://github.com/autohandai/code-cli)**

Public

- [Notifications](https://github.com/login?return_to=%2Fautohandai%2Fcode-cli)You must be signed in to change notification settings
- [Fork
    19](https://github.com/login?return_to=%2Fautohandai%2Fcode-cli)
- 
[Star
          110](https://github.com/login?return_to=%2Fautohandai%2Fcode-cli)

[https://github.com/autohandai/code-cli](https://github.com/autohandai/code-cli)

[Branches](https://github.com/autohandai/code-cli/branches)[Tags](https://github.com/autohandai/code-cli/tags)

[https://github.com/autohandai/code-cli/branches](https://github.com/autohandai/code-cli/branches)[https://github.com/autohandai/code-cli/tags](https://github.com/autohandai/code-cli/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History961 Commits961 Commits |  |  |  |
| .github | .github |  |  |
| .vitest | .vitest |  |  |
| assets | assets |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| homebrew | homebrew |  |  |
| prd | prd |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| tests | tests |  |  |
| types | types |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| COMMERCIAL.md | COMMERCIAL.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| bun.test.config.ts | bun.test.config.ts |  |  |
| bun.test.setup.ts | bun.test.setup.ts |  |  |
| config.example.json | config.example.json |  |  |
| eslint.config.js | eslint.config.js |  |  |
| install-local.sh | install-local.sh |  |  |
| install.ps1 | install.ps1 |  |  |
| install.sh | install.sh |  |  |
| package.json | package.json |  |  |
| tsconfig.json | tsconfig.json |  |  |
| tsup.config.ts | tsup.config.ts |  |  |
| vitest.config.ts | vitest.config.ts |  |  |
| vitest.setup.ts | vitest.setup.ts |  |  |
| vitest.tuistory.config.ts | vitest.tuistory.config.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

# Autohand Code CLI

[https://github.com/autohandai/code-cli#autohand-code-cli](https://github.com/autohandai/code-cli#autohand-code-cli)

[https://bun.sh](https://bun.sh)[https://discord.com/invite/MWTNudaj8E](https://discord.com/invite/MWTNudaj8E)

**A fast, terminal-native AI coding agent for planning, editing, testing, and automating work across your codebase.**

Autohand Code CLI is a fast, terminal-native AI coding agent that lives where you already work. It reads project context, plans changes, edits files, runs tools, and asks for approval before risky operations.

The interface is built for focused interactive sessions: minimal chrome, smooth Ink rendering, file mentions, slash commands, skills, permissions, provider switching, and session history all available from one prompt.

Install it, run `autohand`, and describe the outcome you want in natural language. Use Autohand Code CLI locally, with your editor, or in CI/CD to automate repetitive engineering work without giving up control.

[https://github.com/autohandai/code-cli/blob/main/docs/gif/autohand-intro.gif](https://github.com/autohandai/code-cli/blob/main/docs/gif/autohand-intro.gif)

## Features

[https://github.com/autohandai/code-cli#features](https://github.com/autohandai/code-cli#features)

- **Terminal-Native Agent**: Understands your codebase and executes approved changes from the CLI
- **Planning + Tools**: Combines reasoning, file edits, shell commands, and web context in one loop
- **Interactive REPL**: Smooth terminal experience with file mentions, slash commands, and keyboard shortcuts
- **Modular Skills**: Extends workflows with specialized instruction packages
- **Multi-Provider Support**: Works with OpenRouter, LLMGateway, OpenAI, AWS Bedrock, DeepSeek, Azure Foundry Models, Z.ai, and local models
- **Git Integration**: Full version control support with automatic commits
- **Cross-Platform**: Works on macOS, Linux, and Windows

## Why Autohand Code CLI?

[https://github.com/autohandai/code-cli#why-autohand-code-cli](https://github.com/autohandai/code-cli#why-autohand-code-cli)

- **No Context Switching**: Stay in your terminal, no copy-paste needed
- **Intelligent Planning**: Understands your codebase before making changes
- **Safe Execution**: Prompts before risky operations unless you choose a different permission mode
- **Extensible**: Add skills, hooks, and provider configuration as your workflow grows
- **Fast**: Optimized for responsive interactive sessions and efficient tool execution

## Installation

[https://github.com/autohandai/code-cli#installation](https://github.com/autohandai/code-cli#installation)

### Quick Install (Recommended)

[https://github.com/autohandai/code-cli#quick-install-recommended](https://github.com/autohandai/code-cli#quick-install-recommended)

```
curl -fsSL https://autohand.ai/install.sh | bash
```

### Manual Installation

[https://github.com/autohandai/code-cli#manual-installation](https://github.com/autohandai/code-cli#manual-installation)

```
# Clone and build
git clone https://github.com/autohandai/cli.git
cd cli
bun install
bun run build

# Install globally
bun add -g .
```

### Requirements

[https://github.com/autohandai/code-cli#requirements](https://github.com/autohandai/code-cli#requirements)

- Bun ≥1.0 (`curl -fsSL https://bun.sh/install | bash`)
- Git (for version control features)
- ripgrep (optional, for faster search)

## Quick Start

[https://github.com/autohandai/code-cli#quick-start](https://github.com/autohandai/code-cli#quick-start)

```
# Interactive mode - start a coding session
autohand

# Command mode - run a single instruction
autohand -p "add a dark mode toggle to the settings page"

# With auto-confirmation
autohand -p "fix the TypeScript errors" -y

# Auto-commit changes after task completion
autohand -p "refactor the auth module" -c
```

## Editor Extensions

[https://github.com/autohandai/code-cli#editor-extensions](https://github.com/autohandai/code-cli#editor-extensions)

Use Autohand Code CLI directly in your favorite editor:

### VS Code

[https://github.com/autohandai/code-cli#vs-code](https://github.com/autohandai/code-cli#vs-code)

Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=AutohandAI.vscode-autohand) or via command line:

```
code --install-extension AutohandAI.vscode-autohand
```

### Zed Editor

[https://github.com/autohandai/code-cli#zed-editor](https://github.com/autohandai/code-cli#zed-editor)

Install from the [Zed Extensions](https://zed.dev/extensions/autohand-acp) marketplace.

## Code Agent SDK

[https://github.com/autohandai/code-cli#code-agent-sdk](https://github.com/autohandai/code-cli#code-agent-sdk)

Developers can also build on the same CLI-backed agent runtime through the [Code Agent SDK](https://github.com/autohandai/code-agent-sdk-typescript). Use it when you want Autohand Code CLI capabilities inside your own tools, services, workflows, or editor integrations.

The Agent SDK is available in multiple beta language packages. Use the same CLI-backed SDK model from another programming language:

- TypeScript - this package, with Agent, Run, streaming, and JSON helpers.
- Go - idiomatic Go package with context.Context, typed events, and channel-based streaming.
- Python - async Python package with async for event streams and typed Pydantic models.
- Java - Java 21 records, sealed events, and virtual-thread-ready APIs.
- Swift - SwiftPM package with Agent, Runner, async streams, tools, hooks, and permissions.

## Usage Modes

[https://github.com/autohandai/code-cli#usage-modes](https://github.com/autohandai/code-cli#usage-modes)

### Interactive Mode

[https://github.com/autohandai/code-cli#interactive-mode](https://github.com/autohandai/code-cli#interactive-mode)

Launch without arguments for a full REPL experience:

```
autohand
```

Features:

- Type `/` for slash command suggestions
- Type `@` for file autocomplete (e.g., `@src/index.ts`)
- Type `$` for skill autocomplete (e.g., `$frontend-design`)
- Type `!` to run terminal commands (e.g., `! git status`, `! ls -la`)
- **Smart Paste**: Paste any amount of code (5+ lines shows compact indicator, full content sent to LLM)
- Press `ESC` to cancel in-flight requests
- Press `Ctrl+C` twice to exit
- Press `Shift+Tab` to toggle plan mode
- Press `?` to toggle keyboard shortcuts panel
- Press `Enter` or `Shift+Enter` for newlines in multi-line input

### Command Mode (Non-Interactive)

[https://github.com/autohandai/code-cli#command-mode-non-interactive](https://github.com/autohandai/code-cli#command-mode-non-interactive)

Run single instructions for CI/CD, scripts, or quick tasks:

```
# Basic usage
autohand --prompt "add tests for the user service"

# Short form
autohand -p "fix linting errors"

# With options
autohand -p "update dependencies" --yes --auto-commit

# Dry run (preview changes without applying)
autohand -p "refactor database queries" --dry-run
```

### CLI Options

[https://github.com/autohandai/code-cli#cli-options](https://github.com/autohandai/code-cli#cli-options)

| Option | Short | Description |
|---|---|---|
| --prompt <text> | -p | Run a single instruction in command mode |
| --yes | -y | Auto-confirm risky actions |
| --auto-commit | -c | Auto-commit changes after completing tasks |
| --dry-run |  | Preview actions without applying mutations |
| --debug | -d | Enable debug output (verbose logging) |
| --model <model> |  | Override the configured LLM model |
| --path <path> |  | Workspace path to operate in |
| --auto-skill |  | Auto-generate skills based on project analysis |
| --unrestricted |  | Run without approval prompts (use with caution) |
| --restricted |  | Deny all dangerous operations automatically |
| --config <path> |  | Path to config file |
| --temperature <value> |  | Sampling temperature for LLM |
| --thinking [level] |  | Set thinking/reasoning depth (none, normal, extended) |
| --learn |  | Run skill advisor non-interactively |
| --learn-update |  | Re-analyze project and regenerate skills |
| --skill-install [name] |  | Install a community skill |
| --project |  | Install skill to project level (with --skill-install) |
| --permissions |  | Display current permission settings and exit |
| --login |  | Sign in to your Autohand Code account |
| --logout |  | Sign out of your Autohand Code account |
| --sync-settings [bool] |  | Enable/disable settings sync (default: true for logged users) |
| --patch |  | Generate git patch without applying changes |
| --output <file> |  | Output file for patch (default: stdout) |
| --mode <mode> |  | Run mode: interactive (default), rpc, or acp |
| --acp |  | Shorthand for --mode acp (Agent Client Protocol over stdio) |
| --teammate-mode <mode> |  | Team display mode: auto, in-process, or tmux |
| --worktree [name] |  | Run session in isolated git worktree (optional name) |
| --tmux |  | Launch in a dedicated tmux session (implies --worktree) |
| --auto-mode [prompt] |  | Enable interactive auto-mode, or start standalone loop with inline task |
| --max-iterations <n> |  | Max auto-mode iterations (default: 50) |
| --completion-promise <text> |  | Completion marker text (default: "DONE") |
| --no-worktree |  | Disable git worktree isolation in auto-mode |
| --checkpoint-interval <n> |  | Git commit every N iterations (default: 5) |
| --max-runtime <m> |  | Max runtime in minutes (default: 120) |
| --max-cost <d> |  | Max API cost in dollars (default: 10) |
| --interactive-on-complete |  | After auto-mode ends, hand off to interactive mode (TTY only) |
| --setup |  | Run the setup wizard to configure or reconfigure Autohand Code CLI |
| --about |  | Show information about Autohand Code CLI |
| --add-dir <path...> |  | Add additional directories to workspace scope (can be used multiple times) |
| --display-language <locale> |  | Set display language (e.g., en, id, zh-cn, fr, de, ja) |
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

