---
repo: sentrux/sentrux
url: https://github.com/sentrux/sentrux
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - sentrux/sentrux: Real-time architectural sensor that helps AI agents close the feedback loop, enabling recursive self-improvement of code quality. Pure Rust. · GitHub

**Source**: https://github.com/sentrux/sentrux

---

[Skip to content](https://github.com/sentrux/sentrux#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[sentrux](https://github.com/sentrux)

/
**[sentrux](https://github.com/sentrux/sentrux)**

Public

- [Notifications](https://github.com/login?return_to=%2Fsentrux%2Fsentrux)You must be signed in to change notification settings
- [Fork
    213](https://github.com/login?return_to=%2Fsentrux%2Fsentrux)
- 
[Star
          2.4k](https://github.com/login?return_to=%2Fsentrux%2Fsentrux)

[https://github.com/sentrux/sentrux](https://github.com/sentrux/sentrux)

[Branches](https://github.com/sentrux/sentrux/branches)[Tags](https://github.com/sentrux/sentrux/tags)

[https://github.com/sentrux/sentrux/branches](https://github.com/sentrux/sentrux/branches)[https://github.com/sentrux/sentrux/tags](https://github.com/sentrux/sentrux/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History318 Commits318 Commits |  |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .github/workflows | .github/workflows |  |  |
| .sentrux | .sentrux |  |  |
| assets | assets |  |  |
| claude-plugin | claude-plugin |  |  |
| docs | docs |  |  |
| plugins | plugins |  |  |
| sentrux-bin | sentrux-bin |  |  |
| sentrux-core | sentrux-core |  |  |
| .gitignore | .gitignore |  |  |
| Cargo.lock | Cargo.lock |  |  |
| Cargo.toml | Cargo.toml |  |  |
| LICENSE | LICENSE |  |  |
| README.de.md | README.de.md |  |  |
| README.ja.md | README.ja.md |  |  |
| README.md | README.md |  |  |
| README.zh-CN.md | README.zh-CN.md |  |  |
| install.sh | install.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

![sentrux](https://github.com/sentrux/sentrux/raw/main/assets/logo-dark.svg?v=2)

**The sensor that helps AI agents close the feedback loop.
Recursive self-improvement of code quality.**

[https://github.com/sentrux/sentrux/actions/workflows/ci.yml](https://github.com/sentrux/sentrux/actions/workflows/ci.yml)[https://github.com/sentrux/sentrux/releases](https://github.com/sentrux/sentrux/releases)[https://github.com/sentrux/sentrux/blob/main/LICENSE](https://github.com/sentrux/sentrux/blob/main/LICENSE)

**English** | [中文](https://github.com/sentrux/sentrux/blob/main/README.zh-CN.md) | [Deutsch](https://github.com/sentrux/sentrux/blob/main/README.de.md) | [日本語](https://github.com/sentrux/sentrux/blob/main/README.ja.md)

[How it Works](https://github.com/sentrux/sentrux#how-it-works) · [Quick Start](https://github.com/sentrux/sentrux#quick-start) · [MCP Integration](https://github.com/sentrux/sentrux#mcp-server) · [Rules Engine](https://github.com/sentrux/sentrux#rules-engine) · [Releases](https://github.com/sentrux/sentrux/releases)

[https://github.com/sentrux/sentrux/blob/main/assets/demo.gif](https://github.com/sentrux/sentrux/blob/main/assets/demo.gif)

Live: Claude Code Opus 4.6 builds a FastAPI project. Even with good prompts, quality lands at 6772.
Not because the agent can't do better — but because without a sensor, it doesn't know what to improve.

[https://github.com/sentrux/sentrux/blob/main/assets/screenshot-health.gif](https://github.com/sentrux/sentrux/blob/main/assets/screenshot-health.gif)

## How it works

[https://github.com/sentrux/sentrux#how-it-works](https://github.com/sentrux/sentrux#how-it-works)

[https://github.com/sentrux/sentrux/blob/main/assets/how-it-works.svg](https://github.com/sentrux/sentrux/blob/main/assets/how-it-works.svg)

## Quick Start

[https://github.com/sentrux/sentrux#quick-start](https://github.com/sentrux/sentrux#quick-start)

**Install** (macOS · Linux · Windows)

**macOS**

```
brew install sentrux/tap/sentrux
```

**Linux**

```
curl -fsSL https://raw.githubusercontent.com/sentrux/sentrux/main/install.sh | sh
```

**Windows** — download from [Releases](https://github.com/sentrux/sentrux/releases), or:

```
curl -L -o sentrux.exe https://github.com/sentrux/sentrux/releases/latest/download/sentrux-windows-x86_64.exe
```

Pure Rust. Single binary. No runtime dependencies. **52 languages** via tree-sitter plugins. Runs on **macOS**, **Linux**, and **Windows**.

**Run it**

```
sentrux                    # open the GUI — live treemap of your project
sentrux /path/to/project   # open GUI scanning a specific directory
sentrux check .            # check rules (CI-friendly, exits 0 or 1)
sentrux gate --save .      # save baseline before agent session
sentrux gate .             # compare after — catches degradation
```

**Connect to your AI agent (optional)**

Give your agent real-time access to structural health via [MCP](https://modelcontextprotocol.io).

Claude Code:

```
/plugin marketplace add sentrux/sentrux
/plugin install sentrux
```

Cursor / Windsurf / OpenCode / OpenClaw / any MCP client — add to your MCP config:

```
{
  "mcpServers": {
    "sentrux": {
      "command": "sentrux",
      "args": ["--mcp"]
    }
  }
}
```

**From source / upgrade / troubleshooting**

```
# Build from source
git clone https://github.com/sentrux/sentrux.git
cd sentrux && cargo build --release

# Upgrade
brew update && brew upgrade sentrux
# or re-run the curl install — it always pulls the latest release
```

**Linux GPU issues?** If the app won't start, sentrux automatically tries multiple GPU backends (Vulkan → GL → fallback). You can also force one:

```
WGPU_BACKEND=vulkan sentrux    # force Vulkan
WGPU_BACKEND=gl sentrux        # force OpenGL
```

## The problem nobody talks about

[https://github.com/sentrux/sentrux#the-problem-nobody-talks-about](https://github.com/sentrux/sentrux#the-problem-nobody-talks-about)

You start a project with Claude Code or Cursor. Day one is magic. The agent writes clean code, understands your intent, ships features fast.

Then something shifts.

The agent starts hallucinating functions that don't exist. It puts new code in the wrong place. It introduces bugs in files it touched yesterday. You ask for a simple feature and it breaks three other things. You're spending more time fixing the agent's output than writing it yourself.

Everyone assumes the AI got worse. **It didn't.** Your codebase did.

Here's what actually happened: when you used an IDE, you saw the file tree. You opened files. You built a mental model of the architecture — which module does what, how they connect, where things belong. You were the governor. Every edit passed through your understanding of the whole.

Then AI agents moved us to the terminal. The agent modifies dozens of files per session. You see a stream of `Modified src/foo.rs` — but you've lost the spatial awareness. You don't see where that file sits in the dependency graph. You don't see that it just created a cycle. You don't see that three modules now depend on a file that was supposed to be internal. Many developers let AI agents build entire applications without ever opening the file browser.

**You've lost control. And you don't even know it yet.**

Every AI session silently degrades your architecture. Same function names, different purposes, scattered across files. Unrelated code dumped in the same folder. Dependencies tangling into spaghetti. When the agent searches your project, it finds twenty conflicting matches — and picks the wrong one. Every session makes the mess worse. Every mess makes the next session harder.

This is the dirty secret of AI-assisted development: **the better the AI generates code, the faster your codebase becomes ungovernable.**

The traditional answer — *"plan your architecture first, then let AI implement"* — sounds right but misses the point. Tools like GitHub's [Spec Kit](https://github.com/github/spec-kit) try this approach: generate detailed specs and plans before writing code. But in practice, it [reinvents waterfall](https://blog.scottlogic.com/2025/11/26/putting-spec-kit-through-its-paces-radical-idea-or-reinvented-waterfall.html) — producing seas of markdown documents while having zero visibility into the code that actually gets produced. No feedback loop. No way to detect when the implementation drifts from the spec. No structural analysis of any kind. The spec goes in, the agent writes code, and nobody checks what came out.

That's not how anyone actually works with AI agents anyway. You prototype fast. You iterate through conversation. You follow inspiration. You let the creative flow drive the code. That creative flow is exactly what makes AI agents powerful. And it's exactly what destroys codebases.

**You don't need a better plan. You need a better sensor.**

## The solution

[https://github.com/sentrux/sentrux#the-solution](https://github.com/sentrux/sentrux#the-solution)

**sentrux is the missing feedback loop.**

Every system that works at scale has one: a sensor that observes reality, a spec that defines "good," and an actuator that corrects drift. Compilers close a feedback loop on syntax. Test suites close a loop on behavior. Linters close a loop on style.

But architecture — does this change fit the system? will this abstraction cause problems as the codebase grows? — had no sensor and no actuator. Only humans could judge that. And humans can't keep up with machine-speed code generation.

**sentrux closes the loop at the architecture level.**

It watches your codebase in real-time — not the diffs, not the terminal output — the *actual structure*. Every file. Every dependency. Every architectural relationship. Visualized as a live interactive treemap that updates as the agent writes code.

5 root cause metrics. One continuous score. Computed in milliseconds.

When architecture degrades, you see it immediately — not two weeks later when everything is broken and nobody remembers which session caused it.

sentrux gives you the sensor. Your rules give you the spec. The agent is the actuator. **The loop closes.**

| VisualizeLive treemap with dependency edges,files glow when the agent modifies them | Measure5 root cause metrics, one score 0–10000:modularity, acyclicity, depth, equality, redundancy | GovernQuality gate catches regression.Rules engine enforces constraints. |
|---|---|---|

## MCP server

[https://github.com/sentrux/sentrux#mcp-server](https://github.com/sentrux/sentrux#mcp-server)

**Agent workflow**

```
Agent: scan("/Users/me/myproject")
  → { quality_signal: 7342, files: 139, bottleneck: "modularity" }

Agent: session_start()
  → { status: "Baseline saved", quality_signal: 7342 }

  ... agent writes 500 lines of code ...

Agent: session_end()
  → { pass: false, signal_before: 7342, signal_after: 6891,
      summary: "Quality degraded during this session" }
```

9 tools: `scan` · `health` · `session_start` · `session_end` · `rescan` · `check_rules` · `evolution` · `dsm` · `test_gaps`

## Rules engine

[https://github.com/sentrux/sentrux#rules-engine](https://github.com/sentrux/sentrux#rules-engine)

Define architectural constraints. Enforce them in CI. Let the agent know the boundaries.

**Example `.sentrux/rules.toml`**

```
[constraints]
max_cycles = 0
max_coupling = "B"
max_cc = 25
no_god_files = true

[[layers]]
name = "core"
paths = ["src/core/*"]
order = 0

[[layers]]
name = "app"
paths = ["src/app/*"]
order = 2

[[boundaries]]
from = "src/app/*"
to = "src/core/internal/*"
reason = "App must not depend on core internals"
```

```
sentrux check .
# ✓ All rules pass — Quality: 7342
```

## Supported languages

[https://github.com/sentrux/sentrux#supported-languages](https://github.com/sentrux/sentrux#supported-languages)

**52 languages** built-in via [tree-sitter](https://tree-sitter.github.io/) plugins — zero language knowledge in the binary:

|  |  |  |  |  |  |
|---|---|---|---|---|---|
| Bash | C | C++ | C# | Clojure | COBOL |
| Crystal | CSS | Dart | Dockerfile | Elixir | Erlang |
| F# | GDScript | GLSL | Go | Groovy | Haskell |
| HCL | HTML | Java | JavaScript | JSON | Julia |
| Kotlin | Lua | Markdown | Nim | Nix | Objective-C |
| Object Pascal | OCaml | Perl | PHP | PowerShell | Protobuf |
| Python | R | Ruby | Rust | Scala | SCSS |
| Solidity | SQL | Svelte | Swift | TOML | TypeScript |
| V | Vue | YAML | Zig |  |  |

**Plugin system** — add any language, or create your own:

```
sentrux plugin list              # see installed plugins
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

