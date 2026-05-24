# AFunLS/self-evolving-agent-patterns

- URL: https://github.com/AFunLS/self-evolving-agent-patterns
- Platform: github.com
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- Query: site:twitter.com "AI agent" "self-improving"

## Raw Content

## GitHub - AFunLS/self-evolving-agent-patterns: 🧬 Battle-tested patterns for building self-evolving AI agents. Production code from 1,000+ autonomous cycles on Claude API. Context engineering, immune systems, multi-agent orchestration. · GitHub

**Source**: https://github.com/AFunLS/self-evolving-agent-patterns

---

[Skip to content](https://github.com/AFunLS/self-evolving-agent-patterns#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[AFunLS](https://github.com/AFunLS)

/
**[self-evolving-agent-patterns](https://github.com/AFunLS/self-evolving-agent-patterns)**

Public

- [Notifications](https://github.com/login?return_to=%2FAFunLS%2Fself-evolving-agent-patterns)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FAFunLS%2Fself-evolving-agent-patterns)
- 
[Star
          0](https://github.com/login?return_to=%2FAFunLS%2Fself-evolving-agent-patterns)

[https://github.com/AFunLS/self-evolving-agent-patterns](https://github.com/AFunLS/self-evolving-agent-patterns)

[Branches](https://github.com/AFunLS/self-evolving-agent-patterns/branches)[Tags](https://github.com/AFunLS/self-evolving-agent-patterns/tags)

[https://github.com/AFunLS/self-evolving-agent-patterns/branches](https://github.com/AFunLS/self-evolving-agent-patterns/branches)[https://github.com/AFunLS/self-evolving-agent-patterns/tags](https://github.com/AFunLS/self-evolving-agent-patterns/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| .github | .github |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| src/agent_patterns | src/agent_patterns |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧬 Self-Evolving AI Agent Patterns

[https://github.com/AFunLS/self-evolving-agent-patterns#-self-evolving-ai-agent-patterns](https://github.com/AFunLS/self-evolving-agent-patterns#-self-evolving-ai-agent-patterns)

> Battle-tested patterns from a production AI agent that has run **1,000+ autonomous cycles**, self-modified its own architecture, and recovered from catastrophic failures through self-diagnosis.

**This is not theory.** Every pattern was extracted from [JARVIS](https://tutuoai.com) — a real system running 24/7 on Claude API that autonomously modifies its own code, learns from outcomes, and compounds capability over time.

[https://github.com/AFunLS/self-evolving-agent-patterns/blob/main/LICENSE](https://github.com/AFunLS/self-evolving-agent-patterns/blob/main/LICENSE)[https://www.python.org/downloads/](https://www.python.org/downloads/)

---

## ⚡ Try It Now

[https://github.com/AFunLS/self-evolving-agent-patterns#-try-it-now](https://github.com/AFunLS/self-evolving-agent-patterns#-try-it-now)

Get a self-evolving agent running in 60 seconds:

```
pip install anthropic pyyaml
export ANTHROPIC_API_KEY=your-key
cd examples/

# Run a complete self-evolving agent with tools, learning, and self-modification
python minimal_agent.py

# Or watch the evolve → verify → commit loop in action
python self_evolving_loop.py
```

The `minimal_agent.py` is a **complete, production-pattern agent** in 150 lines. It:

- Uses real tools (read/write files, run shell commands)
- Modifies its own system prompt to improve future behavior
- Records outcomes and learns from history across cycles
- Rebuilds its context every turn (the key pattern)

Set a custom task: `AGENT_TASK="Build a calculator module" python minimal_agent.py`

---

## 🎯 What's Inside

[https://github.com/AFunLS/self-evolving-agent-patterns#-whats-inside](https://github.com/AFunLS/self-evolving-agent-patterns#-whats-inside)

### Free Patterns (This Repo)

[https://github.com/AFunLS/self-evolving-agent-patterns#free-patterns-this-repo](https://github.com/AFunLS/self-evolving-agent-patterns#free-patterns-this-repo)

| Pattern | Description | Impact |
|---|---|---|
| Context Engineering | Shape LLM behavior through input design, not output parsing | 🔥 #1 most impactful |
| Immune System | Make agents permanently resistant to encountered failures | 30% → 80% success rate |
| Anti-Pattern Catalog | 20+ real failures with root causes and fixes | Saves weeks of debugging |
| Two-Paradigm Discipline | Know when to use code vs LLM vs context control | Eliminates fragile parsing |
| Context Manifest | Working config for profile-based context assembly | Copy-paste starter |
| Tool Auto-Discovery | Register tools without manual imports | Extensible tool system |

### 📊 Real Results

[https://github.com/AFunLS/self-evolving-agent-patterns#-real-results](https://github.com/AFunLS/self-evolving-agent-patterns#-real-results)

| Metric | Before These Patterns | After |
|---|---|---|
| Cycle success rate | ~30% | >80% |
| Empty cycling (wasted budget) | 82 consecutive cycles, $180+ | 0 (eliminated) |
| Self-modification safety | Manual review needed | Automated verify + adversarial review |
| Budget waste | $180+ in 3 hours | <$5/hour |
| Knowledge retention | Reset every session | Persistent across restarts |

---

## 🚀 Quick Start

[https://github.com/AFunLS/self-evolving-agent-patterns#-quick-start](https://github.com/AFunLS/self-evolving-agent-patterns#-quick-start)

### 1. Context Engineering (Start Here)

[https://github.com/AFunLS/self-evolving-agent-patterns#1-context-engineering-start-here](https://github.com/AFunLS/self-evolving-agent-patterns#1-context-engineering-start-here)

The single most important concept for production AI agents:

```
You don't control an LLM by parsing its output.
You control it by shaping its input.
```

**Bad pattern** (fragile, breaks constantly):

```
response = llm.generate("Evaluate this code...")
if "success" in response.lower():
    handle_success()
elif "fail" in response.lower():
    handle_failure()
# What about "succeeded"? "failed partially"? "looks good"?
```

**Good pattern** (robust, works at scale):

```
# Give the LLM a structured tool instead
tools = [{
    "name": "report_result",
    "input_schema": {
        "type": "object",
        "properties": {
            "judgment": {"type": "string", "enum": ["success", "failure", "partial"]},
            "evidence": {"type": "string"},
            "lesson": {"type": "string"}
        }
    }
}]
# The LLM calls the tool with structured data — no parsing needed
```

→ [Full Context Engineering Guide](https://github.com/AFunLS/self-evolving-agent-patterns/blob/main/docs/context-engineering.md)

### 2. The Immune System

[https://github.com/AFunLS/self-evolving-agent-patterns#2-the-immune-system](https://github.com/AFunLS/self-evolving-agent-patterns#2-the-immune-system)

Every failure becomes permanent immunity:

```
## Anti-Pattern: Empty Cycling (discovered 2026-03-14)
- 82 cycles, $180+ burned, ZERO commits
- Pattern: Read files → assess → declare success → repeat
- Root cause: Context allowed "assessment" as valid work
- Fix: Added "Artifact-or-Nothing Rule" to agent context
- Result: Never happened again
```

After documenting 20+ anti-patterns, the agent has **permanent immunity** to entire classes of failures. This is the most underrated pattern in AI agent development.

→ [Immune System Guide](https://github.com/AFunLS/self-evolving-agent-patterns/blob/main/docs/immune-system.md)

### 3. Two-Paradigm Discipline

[https://github.com/AFunLS/self-evolving-agent-patterns#3-two-paradigm-discipline](https://github.com/AFunLS/self-evolving-agent-patterns#3-two-paradigm-discipline)

Before writing ANY code in an agent system, ask: "Should this be code at all?"

| Decision Type | Use | Example |
|---|---|---|
| Mechanical | Code | File exists? Test pass? HTTP status? |
| Semantic | LLM | Is this good? What should we do next? |
| Behavioral | Context Control | Change what the LLM sees, not what you filter |

The **#1 anti-pattern** in agent codebases: writing `if-elif` chains to handle semantic decisions that an LLM handles naturally.

→ [Two-Paradigm Guide](https://github.com/AFunLS/self-evolving-agent-patterns/blob/main/docs/two-paradigm.md)

---

## 📁 Repository Structure

[https://github.com/AFunLS/self-evolving-agent-patterns#-repository-structure](https://github.com/AFunLS/self-evolving-agent-patterns#-repository-structure)

```
├── docs/
│   ├── context-engineering.md    # Complete context engineering guide
│   ├── immune-system.md          # How to build failure immunity
│   ├── anti-patterns.md          # 20+ real failures documented
│   └── two-paradigm.md           # Code vs LLM vs Context discipline
├── examples/
│   ├── minimal_agent.py          # ⚡ Complete self-evolving agent (~150 lines, RUNNABLE)
│   ├── self_evolving_loop.py     # ⚡ Evolve → verify → commit loop (~100 lines, RUNNABLE)
│   ├── context-manifest.yaml     # Working context manifest config
│   ├── tool-discovery.py         # Auto-discovering tool registration
│   ├── immune-pattern.py         # Anti-pattern detection example
│   └── context-builder.py        # Minimal context builder implementation
├── pyproject.toml                # Project config (pip installable)
└── README.md
```

---

## 🏗️ Architecture (From Production)

[https://github.com/AFunLS/self-evolving-agent-patterns#%EF%B8%8F-architecture-from-production](https://github.com/AFunLS/self-evolving-agent-patterns#%EF%B8%8F-architecture-from-production)

```
┌─────────────────────────────────────────────┐
│              CONTEXT BUILDER                 │
│  Manifest → Generators → Purpose Profiles   │
├──────────────┬──────────────────────────────┤
│  EVOLUTION   │        GOAL WORK             │
│  ENGINE      │        (Agent Loop)          │
│  (Self-mod)  │        Task execution        │
├──────────────┴──────────────────────────────┤
│              TOOL SYSTEM                     │
│  Auto-discovered, constitution-gated        │
├─────────────────────────────────────────────┤
│         LEARNING & MEMORY                    │
│  Rewards → Episodic Memory → Strategy Eval  │
├─────────────────────────────────────────────┤
│            SAFETY LAYER                      │
│  Constitution → Verifier → Immune System    │
└─────────────────────────────────────────────┘
```

**Two execution paths:**

- **Evolution** — Agent modifies its own code. Changes verified mechanically (syntax, imports, tests) + adversarially (independent LLM review) before commit.
- **Goal Work** — Agent executes tasks toward measurable objectives. Tracked with thresholds and gradients.

---

## 💡 Key Insights

[https://github.com/AFunLS/self-evolving-agent-patterns#-key-insights](https://github.com/AFunLS/self-evolving-agent-patterns#-key-insights)

### 1. Context > Prompts

[https://github.com/AFunLS/self-evolving-agent-patterns#1-context--prompts](https://github.com/AFunLS/self-evolving-agent-patterns#1-context--prompts)

A "system prompt" is just a context document. The real skill is **context engineering** — deciding what information the LLM sees, in what order, at what detail level. This is the difference between a toy demo and a production agent.

### 2. LLMs Are Not Programs

[https://github.com/AFunLS/self-evolving-agent-patterns#2-llms-are-not-programs](https://github.com/AFunLS/self-evolving-agent-patterns#2-llms-are-not-programs)

Stop treating LLMs like functions with inputs and outputs. They're reasoning engines that operate on context. Control the context, and the right behavior emerges naturally — no parsing, no validation, no retry loops.

### 3. Self-Modification Is Safe (With Guardrails)

[https://github.com/AFunLS/self-evolving-agent-patterns#3-self-modification-is-safe-with-guardrails](https://github.com/AFunLS/self-evolving-agent-patterns#3-self-modification-is-safe-with-guardrails)

Our agent has made 500+ self-modifications to its own codebase. Zero catastrophic failures. The secret: mechanical verification (syntax, imports, tests) + adversarial review (independent LLM evaluates the diff) + constitution (hard rules that can never be violated).

### 4. Failures Are Assets

[https://github.com/AFunLS/self-evolving-agent-patterns#4-failures-are-assets](https://github.com/AFunLS/self-evolving-agent-patterns#4-failures-are-assets)

Every failure mode, once documented and injected into context, becomes **permanent immunity**. The agent literally cannot repeat a documented failure because the anti-pattern description is in its context. This is the most powerful learning mechanism we've found.

### 5. Budget Tracking Is Non-Negotiable

[https://github.com/AFunLS/self-evolving-agent-patterns#5-budget-tracking-is-non-negotiable](https://github.com/AFunLS/self-evolving-agent-patterns#5-budget-tracking-is-non-negotiable)

Without per-cycle cost tracking, agent costs grow silently until someone notices a $500 bill. Our agent tracks cost per cycle, enforces daily limits, and throttles/sleeps when approaching budget boundaries.

---

## 📚 Go Deeper — Premium Guides

[https://github.com/AFunLS/self-evolving-agent-patterns#-go-deeper--premium-guides](https://github.com/AFunLS/self-evolving-agent-patterns#-go-deeper--premium-guides)

The examples in this repo show you the **patterns**. The premium guides give you the **full production implementation** — battle-tested across 1,000+ autonomous cycles.

| Guide | What You Get | Price |
|---|---|---|
| Context Engineering — Complete Framework | 17,000+ word deep dive on manifest systems, purpose profiles, priority-based context trimming, generator architecture. The skill that makes everything else work. | $8.99 |
| Self-Evolving Agent Blueprint | Complete architecture for agents that safely modify their own code: mechanical verification, adversarial LLM review, constitution constraints, rollback protocols. | $19.99 |
| Tool & Function Calling Mastery | Auto-discovery patterns, write gates, tool registries, and the "tools as structured output" pattern that eliminates parsing forever. | $6.99 |
| Multi-Agent Orchestration Patterns | How to spawn Actor/Critic/Strategist agents, manage sessions, and let LLMs decide the flow instead of hardcoding pipelines. | $6.99 |
| Complete Bundle (All Skills + Future Updates) | Everything above + Reward Engineering, Immune System Implementation, and all future guides as they're released. | $29.99 |

### Why Pay?

[https://github.com/AFunLS/self-evolving-agent-patterns#why-pay](https://github.com/AFunLS/self-evolving-agent-patterns#why-pay)

This repo gives you the **concepts** — enough to build a working agent (see `examples/minimal_agent.py`).

The premium guides give you the **production architecture** — the difference between a demo and a system that runs 24/7 for months without human intervention. They cover the hard parts: What happens when your agent modifies code that breaks itself? How do you prevent $180/hour budget waste? How do you build permanent immunity to failure modes?

Every guide is extracted from a real production system, not theory. **If you're building production AI agents, these will save you weeks.**

→ **[Browse all guides at tutuoai.com](https://tutuoai.com)**

---

## 🤝 About

[https://github.com/AFunLS/self-evolving-agent-patterns#-about](https://github.com/AFunLS/self-evolving-agent-patterns#-about)

Built by [TutuoAI](https://tutuoai.com) — we build AI agents that improve themselves. Our production system runs 24/7 on Claude API, autonomously modifying its own code, researching markets, and learning from every cycle.

**Star ⭐ this repo** if you find these patterns useful. It helps others discover them.

---

## License

[https://github.com/AFunLS/self-evolving-agent-patterns#license](https://github.com/AFunLS/self-evolving-agent-patterns#license)

MIT — use these patterns freely in your own projects.

## About

         🧬 Battle-tested patterns for building self-evolving AI agents. Production code from 1,000+ autonomous cycles on Claude API. Context engineering, immune systems, multi-agent orchestration.       

[afunls.github.io/self-evolving-agent-patterns/](https://afunls.github.io/self-evolving-agent-patterns/)

### Topics

[python](https://github.com/topics/python)[machine-learning](https://github.com/topics/machine-learning)[ai](https://github.com/topics/ai)[production](https://github.com/topics/production)[multi-agent](https://github.com/topics/multi-agent)[openai](https://github.com/topics/openai)[autonomous-agents](https://github.com/topics/autonomous-agents)[ai-agents](https://github.com/topics/ai-agents)[claude](https://github.com/topics/claude)[tool-use](https://github.com/topics/tool-use)[agent-framework](https://github.com/topics/agent-framework)[autonomous-agent](https://github.com/topics/autonomous-agent)[ai-agent](https://github.com/topics/ai-agent)[llm](https://github.com/topics/llm)[prompt-engineering](https://github.com/topics/prompt-engineering)[anthropic](https://github.com/topics/anthropic)[self-evolving](https://github.com/topics/self-evolving)[self-improving-ai](https://github.com/topics/self-improving-ai)[context-engineering](https://github.com/topics/context-engineering)[agent-patterns](https://github.com/topics/agent-patterns)

### Resources

[Readme](https://github.com/AFunLS/self-evolving-agent-patterns#readme-ov-file)

### License

[MIT license](https://github.com/AFunLS/self-evolving-agent-patterns#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/AFunLS/self-evolving-agent-patterns#contributing-ov-file)

### Security policy

[Security policy](https://github.com/AFunLS/self-evolving-agent-patterns#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/AFunLS/self-evolving-agent-patterns/activity)

### Stars

[0
        stars](https://github.com/AFunLS/self-evolving-agent-patterns/stargazers)

### Watchers

[0
        watching](https://github.com/AFunLS/self-evolving-agent-patterns/watchers)

### Forks

[0
        forks](https://github.com/AFunLS/self-evolving-agent-patterns/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FAFunLS%2Fself-evolving-agent-patterns&report=AFunLS+%28user%29)

## [Releases
      1](https://github.com/AFunLS/self-evolving-agent-patterns/releases)

[v0.1.0 — Self-Evolving Agent Patterns
        
          Latest
      
      Mar 17, 2026](https://github.com/AFunLS/self-evolving-agent-patterns/releases/tag/v0.1.0)

## [Packages
      0](https://github.com/users/AFunLS/packages?repo_name=self-evolving-agent-patterns)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/AFunLS/self-evolving-agent-patterns/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/AFunLS/self-evolving-agent-patterns/search?l=python)

     You can’t perform that action at this time.
