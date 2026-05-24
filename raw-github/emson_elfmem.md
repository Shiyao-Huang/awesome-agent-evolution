---
repo: emson/elfmem
url: https://github.com/emson/elfmem
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - emson/elfmem: sELF improving agent memory system · GitHub

**Source**: https://github.com/emson/elfmem

---

[Skip to content](https://github.com/emson/elfmem#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[emson](https://github.com/emson)

/
**[elfmem](https://github.com/emson/elfmem)**

Public

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

- [Notifications](https://github.com/login?return_to=%2Femson%2Felfmem)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Femson%2Felfmem)
- 
[Star
          53](https://github.com/login?return_to=%2Femson%2Felfmem)

[https://github.com/emson/elfmem](https://github.com/emson/elfmem)

[Branches](https://github.com/emson/elfmem/branches)[Tags](https://github.com/emson/elfmem/tags)

[https://github.com/emson/elfmem/branches](https://github.com/emson/elfmem/branches)[https://github.com/emson/elfmem/tags](https://github.com/emson/elfmem/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History110 Commits110 Commits |  |  |  |
| .github | .github |  |  |
| alembic | alembic |  |  |
| benchmarks | benchmarks |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| scripts | scripts |  |  |
| sim | sim |  |  |
| site | site |  |  |
| src/elfmem | src/elfmem |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .nojekyll | .nojekyll |  |  |
| .python-version | .python-version |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| alembic.ini | alembic.ini |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# elfmem

[https://github.com/emson/elfmem#elfmem](https://github.com/emson/elfmem#elfmem)

[https://github.com/emson/elfmem/actions/workflows/ci.yml](https://github.com/emson/elfmem/actions/workflows/ci.yml)[https://pypi.org/project/elfmem/](https://pypi.org/project/elfmem/)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://codecov.io/gh/emson/elfmem](https://codecov.io/gh/emson/elfmem)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

**Adaptive memory for LLM agents. Knowledge that evolves through use.**

elfmem began as an experiment: could a trading bot develop a concept of *self*, learning which strategies succeeded, which failed, and evolving its approach through experimentation? That question led to a fundamental insight: agents don't need a database of facts. They need memory that *adapts*. Knowledge that gets reinforced through successful use should grow stronger. Knowledge that misleads should fade. And the agent's identity, its values, style, and hard-won lessons, should persist across every session.

We built elfmem from the ground up to make this real. It's a memory system modelled on how biological memory works: fast ingestion, deep consolidation at pauses, adaptive decay at rest, and a knowledge graph where related ideas strengthen each other over time. Every design decision was derived from first principles across [26 structured explorations](https://github.com/emson/elfmem/blob/main/sim/explorations), not borrowed from existing patterns, but built from axioms about how agent memory *should* work.

One SQLite file. Zero infrastructure. Any LLM provider.

[https://github.com/emson/elfmem/blob/main/docs/elfmem-knowledge-visualisation.jpg](https://github.com/emson/elfmem/blob/main/docs/elfmem-knowledge-visualisation.jpg)

*An agent's knowledge after several sessions. Nodes are memory blocks, sized by confidence and coloured by decay tier. Edges are semantic relationships discovered during consolidation. Identity blocks (permanent tier) anchor the centre. Knowledge that gets used grows; knowledge that doesn't fades toward the periphery.*

---

## Why elfmem exists

[https://github.com/emson/elfmem#why-elfmem-exists](https://github.com/emson/elfmem#why-elfmem-exists)

To build memory that truly evolves, we had to innovate in areas that existing tools don't address.

**Agents need identity, not just storage.** Your agent isn't a search index. It has values, a style, and preferences that should persist across every session. elfmem introduces the **SELF frame**: a persistent identity layer where core beliefs get near-permanent decay rates. Your agent remembers who it is.

**Knowledge must earn its place.** In most memory systems, everything stored is equally permanent. In elfmem, knowledge lives or dies based on whether it's useful. Blocks that guide successful decisions get **reinforced**: their confidence rises, their connections strengthen. Blocks that mislead get **penalised** and eventually **archived**. After a few sessions, the memory is measurably better than when it started.

**Retrieval depends on context.** Looking up a quick fact, exploring a novel problem, and checking your values require fundamentally different strategies. elfmem provides **five retrieval frames**, each a pre-configured scoring pipeline that weights similarity, confidence, recency, centrality, and reinforcement differently for the task at hand.

**Related knowledge should surface together.** If your agent knows "use Redis for caching" and "Redis requires careful memory management", retrieving one should surface the other, even if the query only matches the first. elfmem builds a **knowledge graph** where semantic edges form during consolidation and strengthen through co-retrieval.

**Time should be meaningful.** Wall-clock decay punishes agents for being idle. elfmem's **session-aware clock** means knowledge only decays during active use. Holidays and downtime don't kill what your agent has learned.

---

## Built agent-first

[https://github.com/emson/elfmem#built-agent-first](https://github.com/emson/elfmem#built-agent-first)

elfmem is designed for the agent's one-shot loop: **read, call, interpret, act**. Every surface is optimised for non-human consumers.

- Every operation returns a **typed result** with `__str__()`, `.summary`, and `.to_dict()`
- Every exception carries a **`.recovery` field** with the exact code or command to fix the problem
- `guide()` provides **runtime self-documentation** so the agent can teach itself the API
- Duplicate `learn()` returns a graceful reject, not an error. Empty `dream()` returns zero counts, not a crash
- All reasoning (alignment scoring, contradiction detection, tag inference) uses **official SDKs only**: `anthropic` and `openai`, no third-party gateways

---

## See it work

[https://github.com/emson/elfmem#see-it-work](https://github.com/emson/elfmem#see-it-work)

```
import asyncio
from elfmem import MemorySystem

async def main():
    system = await MemorySystem.from_config("agent.db")

    async with system.session():
        # 1. Give your agent an identity
        result = await system.setup(
            identity="I am a backend engineer. I write clean, tested Python.",
            values=["I prefer simple solutions over clever ones."],
        )
        print(result)  # "Setup complete: 2/2 new blocks created."

        # 2. Learn from experience (fast, no API calls)
        result = await system.learn("Redis connection pooling: set max to 20 in production.")
        print(result)  # "Stored block a1b2c3d4. Status: created."

        result = await system.learn("Deploy failed when pool size was left at default (10).")
        print(result)  # "Stored block e5f6g7h8. Status: created."

        # 3. Consolidate: embed, deduplicate, detect contradictions, build graph
        result = await system.dream()
        print(result)  # "Consolidated 2: 2 promoted, 0 deduped, 3 edges."

        # 4. Recall through the right frame
        identity = await system.frame("self")
        print(identity)  # "self frame: 2 blocks returned."

        context = await system.frame("attention", query="Redis production config")
        print(context)   # "attention frame: 2 blocks returned."

        for block in context.blocks:
            print(f"  [{block.score:.2f}] {block.content}")
            # [0.87] Redis connection pooling: set max to 20 in production.
            # [0.72] Deploy failed when pool size was left at default (10).

        # 5. Signal what helped (this is where knowledge evolves)
        block_ids = [b.id for b in context.blocks]
        result = await system.outcome(block_ids, signal=0.85, source="deploy_fix")
        print(result)  # "Outcome recorded: 2 blocks updated (+0.042 avg confidence), 1 edges reinforced."

        # 6. Check memory health
        status = await system.status()
        print(status)
        # Session: active (0.1h) | Inbox: 0/10 | Active: 4 blocks | Health: good
        # Tokens this session: LLM: 1,240 tokens (2 calls) | Embed: 680 tokens (3 calls)
        # Suggestion: Memory is healthy.

asyncio.run(main())
```

---

## Core concepts

[https://github.com/emson/elfmem#core-concepts](https://github.com/emson/elfmem#core-concepts)

### SELF: persistent agent identity

[https://github.com/emson/elfmem#self-persistent-agent-identity](https://github.com/emson/elfmem#self-persistent-agent-identity)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

