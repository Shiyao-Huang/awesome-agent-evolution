---
repo: evotai/evot
url: https://github.com/evotai/evot
content_timestamp: 2026-05-17
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - evotai/evot: A self-evolving AI coding agent for long-running, complex software engineering. · GitHub

**Source**: https://github.com/evotai/evot

---

[Skip to content](https://github.com/evotai/evot#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[evotai](https://github.com/evotai)

/
**[evot](https://github.com/evotai/evot)**

Public

- [Notifications](https://github.com/login?return_to=%2Fevotai%2Fevot)You must be signed in to change notification settings
- [Fork
    13](https://github.com/login?return_to=%2Fevotai%2Fevot)
- 
[Star
          54](https://github.com/login?return_to=%2Fevotai%2Fevot)

[https://github.com/evotai/evot](https://github.com/evotai/evot)

[Branches](https://github.com/evotai/evot/branches)[Tags](https://github.com/evotai/evot/tags)

[https://github.com/evotai/evot/branches](https://github.com/evotai/evot/branches)[https://github.com/evotai/evot/tags](https://github.com/evotai/evot/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History697 Commits697 Commits |  |  |  |
| .github | .github |  |  |
| cli | cli |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| Cargo.lock | Cargo.lock |  |  |
| Cargo.toml | Cargo.toml |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| install.sh | install.sh |  |  |
| rust-toolchain.toml | rust-toolchain.toml |  |  |
| rustfmt.toml | rustfmt.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

**Evot**

   Building software just got 10× faster and token-efficient. 

   A self-evolving agent engine — fully observable, built for long-running complex work. 

   The engine behind [evot.ai](https://evot.ai)

[News](https://github.com/evotai/evot#-news) ·   [Why](https://github.com/evotai/evot#-why-evot) ·   [Install](https://github.com/evotai/evot#installation) ·   [Quickstart](https://github.com/evotai/evot#quickstart) ·   [Dev](https://github.com/evotai/evot#development) ·   [Community](https://github.com/evotai/evot#community)

export-1776943794877.mp4

## 📢 News

[https://github.com/evotai/evot#-news](https://github.com/evotai/evot#-news)

- **2026-05-17** 🎯 [REPL] `/goal` — autonomous objectives, e.g. `/goal remove unwraps in Rust context compaction`.
- **2026-05-11** 🖐️ [Skills] Built-in `opencli` — control the browser, use logged-in cookies, read Feishu/Lark messages, Twitter/X timelines, and more.
- **2026-05-11** 🪶 [Slim] Tool outputs now auto-compact, with token savings shown inline.
- **2026-05-08** 🛡️ [REPL] `/harden` — stress-test plans and git changes before shipping. Inspired by [@cjzafir](https://x.com/cjzafir/status/2052110266566107321).
- **2026-05-02** 🧩 [Skills] Builtin skill support — `review` ships built-in, no install needed.
- **2026-04-28** 🖼️ [Image] Resize, preserve through compaction, persist to disk.
- **2026-04-23** 🔍 [Search] Full-text session search — `/resume <query>` to find any past conversation.
- **2026-04-18** 📜 [REPL] `/history` + `/goto` — time-travel through conversation context.

---

## ⚡ Why Evot

[https://github.com/evotai/evot#-why-evot](https://github.com/evotai/evot#-why-evot)

Most agents dump everything into context — bloated outputs, stale history, invisible decisions. Tokens burn. Quality drifts.

Evot does the opposite:

- **Zero-waste context.** Every prompt is minimal, high-signal, rebuilt from scratch each turn.
- **Half the tokens, half the time.** Less noise → fewer turns → complex tasks done faster.
- **Self-evolving.** Full observability into every LLM call and tool execution feeds back into the engine — each prompt gets leaner automatically.
- **Everything searchable.** Full-text index over all sessions — `/resume <query>` to find any past conversation, decision, or code snippet instantly.

## Installation

[https://github.com/evotai/evot#installation](https://github.com/evotai/evot#installation)

### One-liner (recommended)

[https://github.com/evotai/evot#one-liner-recommended](https://github.com/evotai/evot#one-liner-recommended)

```
curl -fsSL https://evot.ai/install | sh
```

### From source

[https://github.com/evotai/evot#from-source](https://github.com/evotai/evot#from-source)

```
git clone https://github.com/evotai/evot.git
cd evot
make setup && make install
evot
```

## Quickstart

[https://github.com/evotai/evot#quickstart](https://github.com/evotai/evot#quickstart)

**1. Set your API key**

Create `~/.evotai/evot.env`:

```
# Anthropic (default)
EVOT_LLM_ANTHROPIC_API_KEY=sk-ant-...
EVOT_LLM_ANTHROPIC_BASE_URL=your-anthropic-base-url
EVOT_LLM_ANTHROPIC_MODEL=claude-opus-4-6
# Multiple models: EVOT_LLM_ANTHROPIC_MODEL=claude-sonnet-4-6,claude-opus-4-6

# Or OpenAI
# EVOT_LLM_OPENAI_API_KEY=sk-...
# EVOT_LLM_OPENAI_BASE_URL=your-openai-base-url/v1
# EVOT_LLM_OPENAI_MODEL=gpt-5.5

# Or DeepSeek (Anthropic-compatible)
# EVOT_LLM_DEEPSEEK_API_KEY=sk-...
# EVOT_LLM_DEEPSEEK_BASE_URL=https://api.deepseek.com/anthropic
# EVOT_LLM_DEEPSEEK_PROTOCOL=anthropic
# EVOT_LLM_DEEPSEEK_MODEL=deepseek-v4-pro

# Or Xiaomi MiMo-V2.5-Pro (Anthropic-compatible)
# EVOT_LLM_XIAOMI_API_KEY=tp-...
# EVOT_LLM_XIAOMI_BASE_URL=https://token-plan-cn.xiaomimimo.com/anthropic
# EVOT_LLM_XIAOMI_PROTOCOL=anthropic
# EVOT_LLM_XIAOMI_MODEL=mimo-v2.5-pro
```

> Use `--model provider:model` for one-off overrides.

**2. Run**

```
evot                                          # interactive REPL
evot -p "summarize today's PRs"               # one-shot task
evot -p "review this" -f ./src/main.rs        # attach file context
evot -p "continue work" -c                   # continue latest session in cwd
evot -p "continue work" -r my-session         # resume or create session
```

**CLI flags & options**

| Flag | Description |
|---|---|
| -p, --prompt | Run a single prompt and exit |
| -f, --file <path> | Attach file/directory context |
| -c, --continue | Continue the latest session in the current directory |
| -r, --resume <id> | Resume or create a session |
| --model <model> | Override the configured model |
| --verbose | Enable info-level logging |

## Development

[https://github.com/evotai/evot#development](https://github.com/evotai/evot#development)

```
make setup        # install Rust toolchain, git hooks
make test         # all tests (engine + CLI)
make install      # compile standalone binary to ~/.evotai/bin/evot
```

## Community

[https://github.com/evotai/evot#community](https://github.com/evotai/evot#community)

- [GitHub Issues](https://github.com/evotai/evot/issues) — Bug reports / Feature
- [Twitter @Evot_AI](https://twitter.com/Evot_AI) — Announcements
- [team@evot.ai](mailto:team@evot.ai) — Reach the team directly

## License

[https://github.com/evotai/evot#license](https://github.com/evotai/evot#license)

Apache-2.0

---

   Built with 🦀 + TypeScript by [Evot AI](https://evot.ai)

## About

         A self-evolving AI coding agent for long-running, complex software engineering.       

[evot.ai](https://evot.ai)

### Resources

[Readme](https://github.com/evotai/evot#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/evotai/evot/activity)

[Custom properties](https://github.com/evotai/evot/custom-properties)

### Stars

[54
        stars](https://github.com/evotai/evot/stargazers)

### Watchers

[1
        watching](https://github.com/evotai/evot/watchers)

### Forks

[13
        forks](https://github.com/evotai/evot/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fevotai%2Fevot&report=evotai+%28user%29)

## [Releases
      87](https://github.com/evotai/evot/releases)

[evot 2026.5.20.2
        
          Latest
      
      May 20, 2026](https://github.com/evotai/evot/releases/tag/v2026.5.20.2)
[+ 86 releases](https://github.com/evotai/evot/releases)

## [Packages
      0](https://github.com/orgs/evotai/packages?repo_name=evot)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/evotai/evot/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Rust
          68.6%](https://github.com/evotai/evot/search?l=rust)
- [TypeScript
          30.2%](https://github.com/evotai/evot/search?l=typescript)
- 

Other

1.2%

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026-05-20
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

