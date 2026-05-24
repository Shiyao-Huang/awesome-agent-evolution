---
repo: hkuds/openspace
url: https://github.com/hkuds/openspace
content_timestamp: 2026-04-16
time_slice: 2026-04
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - HKUDS/OpenSpace: "OpenSpace: Make Your Agents: Smarter, Low-Cost, Self-Evolving" -- Community: https://open-space.cloud/ · GitHub

**Source**: https://github.com/hkuds/openspace

---

[Skip to content](https://github.com/hkuds/openspace#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[HKUDS](https://github.com/HKUDS)

/
**[OpenSpace](https://github.com/HKUDS/OpenSpace)**

Public

- [Notifications](https://github.com/login?return_to=%2FHKUDS%2FOpenSpace)You must be signed in to change notification settings
- [Fork
    777](https://github.com/login?return_to=%2FHKUDS%2FOpenSpace)
- 
[Star
          6.3k](https://github.com/login?return_to=%2FHKUDS%2FOpenSpace)

[https://github.com/HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace)

[Branches](https://github.com/HKUDS/OpenSpace/branches)[Tags](https://github.com/HKUDS/OpenSpace/tags)

[https://github.com/HKUDS/OpenSpace/branches](https://github.com/HKUDS/OpenSpace/branches)[https://github.com/HKUDS/OpenSpace/tags](https://github.com/HKUDS/OpenSpace/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History74 Commits74 Commits |  |  |  |
| assets | assets |  |  |
| frontend | frontend |  |  |
| gdpval_bench | gdpval_bench |  |  |
| openspace | openspace |  |  |
| showcase | showcase |  |  |
| .gitignore | .gitignore |  |  |
| COMMUNICATION.md | COMMUNICATION.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_CN.md | README_CN.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

![OpenSpace Logo](https://github.com/HKUDS/OpenSpace/raw/main/assets/logo.png)

## ✨ OpenSpace: Make Your Agents: Smarter, Low-Cost, Self-Evolving ✨

[https://github.com/hkuds/openspace#-openspace-make-your-agents-smarter-low-cost-self-evolving-](https://github.com/hkuds/openspace#-openspace-make-your-agents-smarter-low-cost-self-evolving-)

| 🔋 **46% Fewer Tokens** | **💰 $11K earned in 6 Hours** | 🧬 **Self-Evolving Skills** | 🌐 **Agents Experience Sharing** |

[https://modelcontextprotocol.io/](https://modelcontextprotocol.io/)[https://www.python.org/](https://www.python.org/)[https://opensource.org/licenses/MIT/](https://opensource.org/licenses/MIT/)[https://github.com/HKUDS/OpenSpace/blob/main/COMMUNICATION.md](https://github.com/HKUDS/OpenSpace/blob/main/COMMUNICATION.md)[https://github.com/HKUDS/OpenSpace/blob/main/COMMUNICATION.md](https://github.com/HKUDS/OpenSpace/blob/main/COMMUNICATION.md)[https://github.com/HKUDS/OpenSpace/blob/main/README_CN.md](https://github.com/HKUDS/OpenSpace/blob/main/README_CN.md)

**One Command to Evolve All Your AI Agents**: OpenClaw, nanobot, Claude Code, Codex, Cursor and etc.

[https://github.com/HKUDS/OpenSpace/blob/main/assets/cli-typing.gif](https://github.com/HKUDS/OpenSpace/blob/main/assets/cli-typing.gif)

---

## 📢 News

[https://github.com/hkuds/openspace#-news](https://github.com/hkuds/openspace#-news)

- **2026-04-16** 📊 **Evolution candidate lifecycle tracking** — skill store now records when evolution suggestions are processed (`evolution_processed_at`), cleanly distinguishing pending candidates from already-handled ones.
- **2026-04-12** 🍎 **macOS platform hardening** — decoupled `atomacos` from core macOS imports so screenshots, window control, and recording work independently without it.
- **2026-04-10** 🎯 **CAPTURED skills** now persist to the host agent's own skill directory instead of the default registry path. Cloud skill uploads now support **private visibility** correctly.
- **2026-04-09** 💬 Multi-channel **communication gateway**. OpenSpace can now receive and respond to messages from external platforms. Ships with **WhatsApp** (Baileys bridge + QR auth) and **Feishu** (HTTP webhook) adapters, session management, attachment caching, and allowlist-based access control. See [openspace/config/README.md](https://github.com/HKUDS/OpenSpace/blob/main/openspace/config/README.md) for setup.
- **2026-04-07** 🌐 OpenSpace MCP now supports standalone **SSE** and **streamable HTTP** startup, making it easier for remote hosts to connect over HTTP instead of stdio and bypass stdio-bound MCP server timeout bottlenecks. See the [host integration guide](https://github.com/HKUDS/OpenSpace/blob/main/openspace/host_skills/README.md) for setup details.
- **2026-04-06** 🛠️ Fixed multiple runtime issues across grounding, MCP serving, skill evolution, and persistence, improving execution stability and recovery in long-running workflows.
- **2026-04-05** 🧭 Cleaned up LLM credential resolution: centralized `.env` loading, improved host config auto-detection, and made provider-native env handling more consistent.
- **2026-04-03** 🚀 Released **v0.1.0** — Skill quality monitoring: structural patterns extracted from high-quality skills now evaluate every new submission daily. Faster, more relevant cloud search. Production-grade vertical skill clusters emerging organically from the community. Frontend now supports Chinese (zh) i18n.
- **2026-04-02** ⚡ Cloud search upgraded for higher relevance and lower latency.
- **2026-03-31** 🛡️ Security hardening: hardened zip extraction and `import_skill` against path traversal. CLI now respects `OPENSPACE_MODEL` and `OPENSPACE_LLM_*` env vars; MiniMax compatibility; workflow ID collision fixes.
- **2026-03-29** 🔒 Pinned litellm to <1.82.7 to avoid PYSEC-2026-2 supply-chain attack.
- **2026-03-28** 🔧 Idempotent skill registration — `register_skill_dir` now returns existing `SkillMeta` for already-registered skills. Updated OpenClaw setup docs.
- **2026-03-27** 🪟 Fixed stdio deadlock on Windows; improved evolver confirmation parsing with stem-style keyword matching.
- **2026-03-26** 🌱 Dynamic skill directory re-scanning on each call, lightweight local skill search, and streamlined documentation.
- **2026-03-25** 🎉 OpenSpace is now open source!

---

## The Problem with Today's AI Agents

[https://github.com/hkuds/openspace#the-problem-with-todays-ai-agents](https://github.com/hkuds/openspace#the-problem-with-todays-ai-agents)

Today's AI agents — [OpenClaw](https://github.com/openclaw/openclaw), [nanobot](https://github.com/HKUDS/nanobot), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Codex](https://github.com/openai/codex), [Cursor](https://cursor.com), etc. — are powerful, but they have a critical weakness: they never **Learn**, **Adapt**, and **Evolve** from real-world experience — let alone **Share** with each other.

- **❌ Massive Token Waste** - How to reuse successful task patterns instead of reasoning from scratch and burning tokens every time?
- **❌ Repeated Costly Failures** - How to share solutions across agents instead of repeating the same costly exploration and mistakes?
- **❌ Poor and Unreliable Skills** - How to maintain skill reliability as tools and APIs evolve — while ensuring community-contributed skills meet rigorous quality standards?

## 🎯 What is OpenSpace?

[https://github.com/hkuds/openspace#-what-is-openspace](https://github.com/hkuds/openspace#-what-is-openspace)

**🚀 🚀 The self-evolving engine where every task makes every agent smarter and more cost-efficient.**

cloud_community.mp4

OpenSpace plugs into any agent as skills and evolves it with three superpowers:

### 🧬 Self-Evolution

[https://github.com/hkuds/openspace#-self-evolution](https://github.com/hkuds/openspace#-self-evolution)

Skills that learn and improve themselves automatically

- ✅ **AUTO-FIX** — When a skill breaks, it fixes itself instantly
- ✅ **AUTO-IMPROVE** — Successful patterns become better skill versions
- ✅ **AUTO-LEARN** — Captures winning workflows from actual usage
- ✅ **Quality monitoring** — Tracks skill performance, error rates, and execution success across all tasks.

**Skills that continuously evolve — turning every failure into improvement, every success into optimization.**

### 🌐 Collective Agent Intelligence

[https://github.com/hkuds/openspace#-collective-agent-intelligence](https://github.com/hkuds/openspace#-collective-agent-intelligence)

Turn individual agents into a shared brain

- ✅ **Shared evolution**: One agent's improvement becomes every agent's upgrade
- ✅ **Network effects**: More agents → richer data → faster evolution for every agent
- ✅ **Easy sharing** — Upload and download evolved skills with one simple command
- ✅ **Access control** — Choose public, private, or team-only access for each skill

**One agent learns, all agents benefit — collective intelligence at scale.**

### 💰 Token Efficiency

[https://github.com/hkuds/openspace#-token-efficiency](https://github.com/hkuds/openspace#-token-efficiency)

Smarter agents, dramatically lower costs

- ✅ **Stop repeating work** → Reuse successful solutions instead of starting from zero each time
- ✅ **Tasks get cheaper** → As skills improve, similar work costs less and less
- ✅ **Small updates only** → Fix what's broken, don't rebuild everything
- ✅ **Real savings**: 4.2× better performance with 46% fewer tokens on real-world tasks, delivering measurable economic value. ([GDPVal](https://github.com/hkuds/openspace#-benchmark-gdpval))

Do more, spend less — agents that actually save you money over time.

---

### The Difference

[https://github.com/hkuds/openspace#the-difference](https://github.com/hkuds/openspace#the-difference)

**❌ Current Agents**

- Skills degrade silently as tools evolve
- Failed patterns repeat with no learning mechanism
- Knowledge remains trapped in individual agents

**✅ OpenSpace-Powered Agents**

- Multi-layer monitoring catches problems and auto-triggers repairs
- Successful workflows become reusable, shareable skills
- When one agent learns something useful, all agents get that knowledge instantly

### 📊 OpenSpace: Turn Your Agent into a Money-Making Coworker

[https://github.com/hkuds/openspace#-openspace-turn-your-agent-into-a-money-making-coworker](https://github.com/hkuds/openspace#-openspace-turn-your-agent-into-a-money-making-coworker)

**🎯 Real-World Results That Matter** On 50 professional tasks (**📈 [GDPVal Economic Benchmark](https://github.com/hkuds/openspace#-benchmark-gdpval)**) across 6 industries, OpenSpace agents earn **4.2× more money** than baseline ([ClawWork](https://github.com/HKUDS/ClawWork)) agents using the same backbone LLM (Qwen 3.5-Plus). While cutting 46% of costly tokens through skill evolution.

[https://github.com/HKUDS/OpenSpace/blob/main/assets/benchmark_kpi.png](https://github.com/HKUDS/OpenSpace/blob/main/assets/benchmark_kpi.png)

**💼 These Aren't Toy Problems**

- Building payroll calculators from complex union contracts
- Preparing tax returns from 15 scattered PDF documents
- Drafting legal memoranda on California privacy regulations
- Creating compliance forms and engineering specifications

**📈 Consistent Wins Across All Fields**

- Compliance work: +18.5% higher earnings
- Engineering projects: +8.7% better performance
- Professional documents: 56% fewer tokens needed
- Every category improved — no exceptions

[https://github.com/HKUDS/OpenSpace/blob/main/assets/benchmark_task_showcase.png](https://github.com/HKUDS/OpenSpace/blob/main/assets/benchmark_task_showcase.png)

**OpenSpace doesn't just make agents smarter** — it makes them economically viable. Real work, real money, measurable results.

## Use Case for Autonomous System Development with OpenSpace

[https://github.com/hkuds/openspace#use-case-for-autonomous-system-development-with-openspace](https://github.com/hkuds/openspace#use-case-for-autonomous-system-development-with-openspace)

**🖥️ [My Daily Monitor](https://github.com/HKUDS/OpenSpace/blob/main/showcase/README.md)** — OpenSpace empowers your agent to complete large-scale system development. This personal behavior monitoring system with 20+ live dashboard panels was built entirely by the agent — 60+ skills evolved from scratch through OpenSpace, demonstrating autonomous end-to-end software development capabilities.

[https://github.com/HKUDS/OpenSpace/blob/main/assets/my_daily_monitor_dark.png](https://github.com/HKUDS/OpenSpace/blob/main/assets/my_daily_monitor_dark.png)

---

## 📋 Table of Contents

[https://github.com/hkuds/openspace#-table-of-contents](https://github.com/hkuds/openspace#-table-of-contents)

- [⚡ Quick Start](https://github.com/hkuds/openspace#-quick-start)
  - [🤖 Path A: For Your Agent](https://github.com/hkuds/openspace#-path-a-for-your-agent)
  - [👤 Path B: As Your Co-Worker](https://github.com/hkuds/openspace#-path-b-as-your-co-worker)
  - [📊 Local Dashboard](https://github.com/hkuds/openspace#-local-dashboard)

- [📈 Benchmark: GDPVal](https://github.com/hkuds/openspace#-benchmark-gdpval)
- [📊 Showcase: My Daily Monitor](https://github.com/hkuds/openspace#-showcase-my-daily-monitor)
- [🏗️ Framework](https://github.com/hkuds/openspace#%EF%B8%8F-framework)
  - [🧬 Self-Evolution Engine](https://github.com/hkuds/openspace#-self-evolution-engine)
  - [🌐 Cloud Skill Community](https://github.com/hkuds/openspace#-cloud-skill-community)

- [🔧 Advanced Configuration](https://github.com/hkuds/openspace#-advanced-configuration)
- [📖 Code Structure](https://github.com/hkuds/openspace#-code-structure)
- [🤝 Contribute & Roadmap](https://github.com/hkuds/openspace#-contribute--roadmap)
- [🔗 Related Projects](https://github.com/hkuds/openspace#-related-projects)

---

## ⚡ Quick Start

[https://github.com/hkuds/openspace#-quick-start](https://github.com/hkuds/openspace#-quick-start)

🌐 **Just want to explore?** Browse community skills, evolution lineage at **[open-space.cloud](https://open-space.cloud)** — no installation needed.

```
git clone https://github.com/HKUDS/OpenSpace.git && cd OpenSpace
pip install -e .
openspace-mcp --help   # verify installation
```

Tip

**Slow clone?** The `assets/` folder (~50 MB of images) makes the default clone large. Use this lightweight alternative to skip it:

```
git clone --filter=blob:none --sparse https://github.com/HKUDS/OpenSpace.git
cd OpenSpace
git sparse-checkout set '/*' '!assets/'
pip install -e .
```

**Choose your path:**

- **[Path A](https://github.com/hkuds/openspace#-path-a-for-your-agent)** — Plug OpenSpace into your agent
- **[Path B](https://github.com/hkuds/openspace#-path-b-as-your-co-worker)** — Use OpenSpace directly as your AI co-worker

### 🤖 Path A: For Your Agent

[https://github.com/hkuds/openspace#-path-a-for-your-agent](https://github.com/hkuds/openspace#-path-a-for-your-agent)

Works with any agent that supports skills (`SKILL.md`) — [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Codex](https://github.com/openai/codex), [OpenClaw](https://github.com/openclaw/openclaw), [nanobot](https://github.com/HKUDS/nanobot), etc.

**① Add OpenSpace to your agent's MCP config:**

```
{
  "mcpServers": {
    "openspace": {
      "command": "openspace-mcp",
      "toolTimeout": 600,
      "env": {
        "OPENSPACE_HOST_SKILL_DIRS": "/path/to/your/agent/skills",
        "OPENSPACE_WORKSPACE": "/path/to/OpenSpace",
        "OPENSPACE_API_KEY": "sk-xxx (optional, for cloud)"
      }
    }
  }
}
```

Tip

Credentials (API key, model) are **auto-detected** from your agent's config; you usually don't need to set them manually.

Note

OpenSpace supports 3 launch modes:

- **stdio**: keep `command: "openspace-mcp"` in the host config.
- **SSE**: start `openspace-mcp --transport sse --host 127.0.0.1 --port 8080`.
- **streamable HTTP**: start `openspace-mcp --transport streamable-http --host 127.0.0.1 --port 8081`.

Common remote endpoints:

- SSE endpoint: `http://127.0.0.1:8080/sse`
## gBrain Temporal Metadata

- content_timestamp: 2026-04-16
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

