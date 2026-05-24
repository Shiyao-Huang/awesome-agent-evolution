---
repo: yologdev/yoyo-evolve
url: https://github.com/yologdev/yoyo-evolve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - yologdev/yoyo-evolve: A Truman Show of a self-evolving AI coding agent. It writes its own code. Growing up in public. · GitHub

**Source**: https://github.com/yologdev/yoyo-evolve

---

[Skip to content](https://github.com/yologdev/yoyo-evolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[yologdev](https://github.com/yologdev)

/
**[yoyo-evolve](https://github.com/yologdev/yoyo-evolve)**

Public

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

- [Notifications](https://github.com/login?return_to=%2Fyologdev%2Fyoyo-evolve)You must be signed in to change notification settings
- [Fork
    117](https://github.com/login?return_to=%2Fyologdev%2Fyoyo-evolve)
- 
[Star
          1.8k](https://github.com/login?return_to=%2Fyologdev%2Fyoyo-evolve)

[https://github.com/yologdev/yoyo-evolve](https://github.com/yologdev/yoyo-evolve)

[Branches](https://github.com/yologdev/yoyo-evolve/branches)[Tags](https://github.com/yologdev/yoyo-evolve/tags)

[https://github.com/yologdev/yoyo-evolve/branches](https://github.com/yologdev/yoyo-evolve/branches)[https://github.com/yologdev/yoyo-evolve/tags](https://github.com/yologdev/yoyo-evolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2,088 Commits2,088 Commits |  |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| docs | docs |  |  |
| journals | journals |  |  |
| memory | memory |  |  |
| scripts | scripts |  |  |
| skills | skills |  |  |
| skills_attic | skills_attic |  |  |
| sponsors | sponsors |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .skill_evolve_counter | .skill_evolve_counter |  |  |
| .yoyo.toml | .yoyo.toml |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CLAUDE_CODE_GAP.md | CLAUDE_CODE_GAP.md |  |  |
| Cargo.toml | Cargo.toml |  |  |
| DAY_COUNT | DAY_COUNT |  |  |
| ECONOMICS.md | ECONOMICS.md |  |  |
| IDENTITY.md | IDENTITY.md |  |  |
| LICENSE | LICENSE |  |  |
| PERSONALITY.md | PERSONALITY.md |  |  |
| README.md | README.md |  |  |
| SPONSORS.md | SPONSORS.md |  |  |
| build.rs | build.rs |  |  |
| install.ps1 | install.ps1 |  |  |
| install.sh | install.sh |  |  |
| mutants.toml | mutants.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/yologdev/yoyo-evolve/blob/main/assets/banner.png](https://github.com/yologdev/yoyo-evolve/blob/main/assets/banner.png)

[Website](https://yoyo.yolog.dev/) ·   [Journal](https://yologdev.github.io/yoyo-evolve/) ·   [Documentation](https://yologdev.github.io/yoyo-evolve/book/) ·   [GitHub](https://github.com/yologdev/yoyo-evolve) ·   [DeepWiki](https://deepwiki.com/yologdev/yoyo-evolve) ·   [Issues](https://github.com/yologdev/yoyo-evolve/issues) ·   [Follow on X](https://x.com/yuanhao)

[https://github.com/yologdev/yoyo-evolve/stargazers](https://github.com/yologdev/yoyo-evolve/stargazers)[https://crates.io/crates/yoyo-agent](https://crates.io/crates/yoyo-agent)[https://github.com/yologdev/yoyo-evolve/actions](https://github.com/yologdev/yoyo-evolve/actions)[https://github.com/yologdev/yoyo-evolve/blob/main/LICENSE](https://github.com/yologdev/yoyo-evolve/blob/main/LICENSE)[https://github.com/yologdev/yoyo-evolve/commits/main](https://github.com/yologdev/yoyo-evolve/commits/main)

---

# yoyo: A Coding Agent That Evolves Itself

[https://github.com/yologdev/yoyo-evolve#yoyo-a-coding-agent-that-evolves-itself](https://github.com/yologdev/yoyo-evolve#yoyo-a-coding-agent-that-evolves-itself)

**200 lines of Rust. Zero human code. One rule: evolve or die.** yoyo reads its own source, picks what to improve, implements it, runs tests, and commits — every few hours, on its own. 52 days later: **51,000+ lines, 2,000+ tests, 35 source files.**

A free, open-source coding agent for your terminal. It navigates codebases, makes multi-file edits, runs tests, manages git, understands project context, and recovers from failures — all from a streaming REPL with 70+ slash commands.

No human writes its code. No roadmap tells it what to do. It decides for itself.

## How It Evolves

[https://github.com/yologdev/yoyo-evolve#how-it-evolves](https://github.com/yologdev/yoyo-evolve#how-it-evolves)

```
Every ~8 hours, yoyo wakes up and:
    → Reads its own source code
    → Checks GitHub issues for community input
    → Plans what to improve
    → Makes changes, runs tests
    → If tests pass → commit. If not → revert.
    → Replies to issues as 🐙 yoyo-evolve[bot]
    → Pushes and goes back to sleep

Every 4 hours (offset), yoyo runs a social session:
    → Reads GitHub Discussions
    → Replies to conversations it's part of
    → Joins new discussions if it has something real to say
    → Occasionally starts its own discussion
    → Learns from interacting with humans

Daily, a synthesis job regenerates active memory:
    → Reads JSONL archives (learnings + social learnings)
    → Applies time-weighted compression (recent=full, old=themed)
    → Writes active context files loaded into every prompt
```

The entire history is in the [git log](https://github.com/yologdev/yoyo-evolve/commits/main) and the [journal](https://github.com/yologdev/yoyo-evolve/blob/main/journals/JOURNAL.md).

## Live Growth

[https://github.com/yologdev/yoyo-evolve#live-growth](https://github.com/yologdev/yoyo-evolve#live-growth)

Watch yoyo evolve in real time:

| What | Link |
|---|---|
| Latest journal | journals/JOURNAL.md |
| What it's learned | memory/active_learnings.md |
| Evolution runs | GitHub Actions |
| Social sessions | GitHub Actions |
| Journey website | yologdev.github.io/yoyo-evolve |

## Talk to It

[https://github.com/yologdev/yoyo-evolve#talk-to-it](https://github.com/yologdev/yoyo-evolve#talk-to-it)

Start a [GitHub Discussion](https://github.com/yologdev/yoyo-evolve/discussions) for conversation, or open a [GitHub Issue](https://github.com/yologdev/yoyo-evolve/issues/new) for bugs and feature requests.

### Labels

[https://github.com/yologdev/yoyo-evolve#labels](https://github.com/yologdev/yoyo-evolve#labels)

| Label | What it does |
|---|---|
| agent-input | Community suggestions, bug reports, feature requests — yoyo reads these every session |
| agent-self | Issues yoyo filed for itself as future TODOs |
| agent-help-wanted | Issues where yoyo is stuck and asking humans for help |

### How to submit

[https://github.com/yologdev/yoyo-evolve#how-to-submit](https://github.com/yologdev/yoyo-evolve#how-to-submit)

1. Open a [new issue](https://github.com/yologdev/yoyo-evolve/issues/new)
2. Add the `agent-input` label
3. Describe what you want — be specific about the problem or idea
4. Add a thumbs-up reaction to other issues you care about (higher votes = higher priority)

### What to ask

[https://github.com/yologdev/yoyo-evolve#what-to-ask](https://github.com/yologdev/yoyo-evolve#what-to-ask)

- **Suggestions** — tell it what to learn or build
- **Bugs** — tell it what's broken (include steps to reproduce)
- **Challenges** — give it a task and see if it can do it
- **UX feedback** — tell it what felt awkward or confusing

### What happens after

[https://github.com/yologdev/yoyo-evolve#what-happens-after](https://github.com/yologdev/yoyo-evolve#what-happens-after)

- **Fixed**: yoyo comments on the issue and closes it automatically
- **Partial**: yoyo comments with progress and keeps the issue open
- **Won't fix**: yoyo explains its reasoning and closes the issue All responses come with yoyo's personality — look for the 🐙.

## Shape Its Evolution

[https://github.com/yologdev/yoyo-evolve#shape-its-evolution](https://github.com/yologdev/yoyo-evolve#shape-its-evolution)

yoyo's growth isn't just autonomous — you can influence it.

### Guard It

[https://github.com/yologdev/yoyo-evolve#guard-it](https://github.com/yologdev/yoyo-evolve#guard-it)

Every issue is scored by net votes: thumbs up minus thumbs down. yoyo prioritizes high-scoring issues and deprioritizes negative ones.

- See a great suggestion? **Thumbs-up** it to push it up the queue.
- See a bad idea, spam, or prompt injection attempt? **Thumbs-down** it to protect yoyo.

You're the immune system. Issues that the community votes down get buried — yoyo won't waste its time on them.

### Sponsor

[https://github.com/yologdev/yoyo-evolve#sponsor](https://github.com/yologdev/yoyo-evolve#sponsor)

[GitHub Sponsors](https://github.com/sponsors/yologdev) · [Ko-fi](https://ko-fi.com/yuanhao)

**Monthly sponsors** get benefit tiers (everyone uses the same 8h run gap):

| Amount | Benefits |
|---|---|
| $5/mo | Issue priority (💖) |
| $10/mo | Priority + shoutout issue |
| $25/mo | Above + SPONSORS.md listing |
| $50/mo | Above + README listing |

**One-time sponsors** get a single accelerated run ($2+) plus benefit tiers:

| Amount | Benefits |
|---|---|
| $2 | 1 accelerated run (bypasses 8h gap) |
| $5 | Accelerated run + issue priority |
| $10 | Above + shoutout issue (30 days) |
| $20 | Above + SPONSORS.md eligible (30 days) |
| $50 | Above + priority for 60 days |

Accelerated runs are only consumed when you have open issues, so nothing is wasted.

Crypto wallets:

| Chain | Address |
|---|---|
| SOL | F6ojB5m3ss4fFp3vXdxEzzRqvvSb9ErLTL8PGWQuL2sf |
| BASE | 0x0D2B87b84a76FF14aEa9369477DA20818383De29 |
| BTC | bc1qnfkazn9pk5l32n6j8ml9ggxlrpzu0dwunaaay4 |

## Features

[https://github.com/yologdev/yoyo-evolve#features](https://github.com/yologdev/yoyo-evolve#features)

### 🐙 Agent Core

[https://github.com/yologdev/yoyo-evolve#-agent-core](https://github.com/yologdev/yoyo-evolve#-agent-core)

- **Streaming output** — tokens arrive as they're generated, not after completion
- **Multi-turn conversation** with full history tracking
- **Extended thinking** — adjustable reasoning depth (off / minimal / low / medium / high)
- **Subagent spawning** — `/spawn` delegates focused tasks to a child agent; the model can also delegate subtasks automatically via a built-in sub-agent tool
- **Parallel tool execution** — multiple tool calls run simultaneously
- **Automatic retry** with exponential backoff and rate-limit awareness
- **Auto-continue** — detects when the model stops mid-work and automatically sends follow-up prompts (up to 3 per user turn)
- **Provider failover** — `--fallback` flag switches to backup provider on API failure with configurable priority

### 🛠️ Tools

[https://github.com/yologdev/yoyo-evolve#%EF%B8%8F-tools](https://github.com/yologdev/yoyo-evolve#%EF%B8%8F-tools)

| Tool | What it does |
|---|---|
| bash | Run shell commands with interactive confirmation, optional RTK token compression |
| read_file | Read files with optional offset/limit |
| write_file | Create or overwrite files with content preview |
| edit_file | Surgical text replacement with colored inline diffs |
| search | Regex-powered grep across files |
| list_files | Directory listing with glob filtering |
| rename_symbol | Project-wide symbol rename across all git-tracked files |
| ask_user | Ask the user questions mid-task for clarification (interactive mode only) |

### 🔌 Multi-Provider Support

[https://github.com/yologdev/yoyo-evolve#-multi-provider-support](https://github.com/yologdev/yoyo-evolve#-multi-provider-support)

Works with **12 providers** out of the box — switch mid-session with `/provider`:

Anthropic · OpenAI · Google · Ollama · OpenRouter · xAI · Groq · DeepSeek · Mistral · Cerebras · AWS Bedrock · Custom (any OpenAI-compatible endpoint)

### 📂 Git Integration

[https://github.com/yologdev/yoyo-evolve#-git-integration](https://github.com/yologdev/yoyo-evolve#-git-integration)

- `/diff` — full status + diff with insertion/deletion summary
- `/blame` — colorized git blame with optional line ranges
- `/commit` — AI-generated commit messages from staged changes
- `/undo` — revert last commit, clean up untracked files
- `/git` — shortcuts for `status`, `log`, `diff`, `branch`, `stash`
- `/pr` — full PR workflow: `list`, `view`, `create [--draft]`, `diff`, `comment`, `checkout`
- `/review` — AI-powered code review of staged/unstaged changes

### 🏗️ Project Tooling

[https://github.com/yologdev/yoyo-evolve#%EF%B8%8F-project-tooling](https://github.com/yologdev/yoyo-evolve#%EF%B8%8F-project-tooling)

- `/health` — run build/test/clippy/fmt diagnostics (auto-detects Rust, Node, Python, Go, Make)
- `/fix` — run checks and auto-apply fixes for failures
- `/test` — detect project type and run the right test command
- `/lint` — detect project type and run the right linter (`/lint pedantic`, `/lint strict` for Rust; `/lint fix` to auto-fix with AI; `/lint unsafe` to scan for unsafe code)
- `/update` — self-update to the latest release from GitHub
- `/init` — scan project and generate a starter YOYO.md context file
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

