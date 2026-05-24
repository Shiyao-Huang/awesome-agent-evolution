---
repo: nousresearch/hermes-agent-self-evolution
url: https://github.com/nousresearch/hermes-agent-self-evolution
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - NousResearch/hermes-agent-self-evolution: ⚒ Evolutionary self-improvement for Hermes Agent — optimize skills, prompts, and code using DSPy + GEPA · GitHub

**Source**: https://github.com/nousresearch/hermes-agent-self-evolution

---

[Skip to content](https://github.com/nousresearch/hermes-agent-self-evolution#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[NousResearch](https://github.com/NousResearch)

/
**[hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution)**

Public

- [Notifications](https://github.com/login?return_to=%2FNousResearch%2Fhermes-agent-self-evolution)You must be signed in to change notification settings
- [Fork
    370](https://github.com/login?return_to=%2FNousResearch%2Fhermes-agent-self-evolution)
- 
[Star
          3.4k](https://github.com/login?return_to=%2FNousResearch%2Fhermes-agent-self-evolution)

[https://github.com/NousResearch/hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution)

[Branches](https://github.com/NousResearch/hermes-agent-self-evolution/branches)[Tags](https://github.com/NousResearch/hermes-agent-self-evolution/tags)

[https://github.com/NousResearch/hermes-agent-self-evolution/branches](https://github.com/NousResearch/hermes-agent-self-evolution/branches)[https://github.com/NousResearch/hermes-agent-self-evolution/tags](https://github.com/NousResearch/hermes-agent-self-evolution/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7 Commits7 Commits |  |  |  |
| datasets | datasets |  |  |
| evolution | evolution |  |  |
| reports | reports |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| PLAN.md | PLAN.md |  |  |
| README.md | README.md |  |  |
| generate_report.py | generate_report.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧬 Hermes Agent Self-Evolution

[https://github.com/nousresearch/hermes-agent-self-evolution#-hermes-agent-self-evolution](https://github.com/nousresearch/hermes-agent-self-evolution#-hermes-agent-self-evolution)

**Evolutionary self-improvement for [Hermes Agent](https://github.com/NousResearch/hermes-agent).**

Hermes Agent Self-Evolution uses DSPy + GEPA (Genetic-Pareto Prompt Evolution) to automatically evolve and optimize Hermes Agent's skills, tool descriptions, system prompts, and code — producing measurably better versions through reflective evolutionary search.

**No GPU training required.** Everything operates via API calls — mutating text, evaluating results, and selecting the best variants. ~$2-10 per optimization run.

## How It Works

[https://github.com/nousresearch/hermes-agent-self-evolution#how-it-works](https://github.com/nousresearch/hermes-agent-self-evolution#how-it-works)

```
Read current skill/prompt/tool ──► Generate eval dataset
                                        │
                                        ▼
                                   GEPA Optimizer ◄── Execution traces
                                        │                    ▲
                                        ▼                    │
                                   Candidate variants ──► Evaluate
                                        │
                                   Constraint gates (tests, size limits, benchmarks)
                                        │
                                        ▼
                                   Best variant ──► PR against hermes-agent
```

GEPA reads execution traces to understand *why* things fail (not just that they failed), then proposes targeted improvements. ICLR 2026 Oral, MIT licensed.

## Quick Start

[https://github.com/nousresearch/hermes-agent-self-evolution#quick-start](https://github.com/nousresearch/hermes-agent-self-evolution#quick-start)

```
# Install
git clone https://github.com/NousResearch/hermes-agent-self-evolution.git
cd hermes-agent-self-evolution
pip install -e ".[dev]"

# Point at your hermes-agent repo
export HERMES_AGENT_REPO=~/.hermes/hermes-agent

# Evolve a skill (synthetic eval data)
python -m evolution.skills.evolve_skill \
    --skill github-code-review \
    --iterations 10 \
    --eval-source synthetic

# Or use real session history from Claude Code, Copilot, and Hermes
python -m evolution.skills.evolve_skill \
    --skill github-code-review \
    --iterations 10 \
    --eval-source sessiondb
```

## What It Optimizes

[https://github.com/nousresearch/hermes-agent-self-evolution#what-it-optimizes](https://github.com/nousresearch/hermes-agent-self-evolution#what-it-optimizes)

| Phase | Target | Engine | Status |
|---|---|---|---|
| Phase 1 | Skill files (SKILL.md) | DSPy + GEPA | ✅ Implemented |
| Phase 2 | Tool descriptions | DSPy + GEPA | 🔲 Planned |
| Phase 3 | System prompt sections | DSPy + GEPA | 🔲 Planned |
| Phase 4 | Tool implementation code | Darwinian Evolver | 🔲 Planned |
| Phase 5 | Continuous improvement loop | Automated pipeline | 🔲 Planned |

## Engines

[https://github.com/nousresearch/hermes-agent-self-evolution#engines](https://github.com/nousresearch/hermes-agent-self-evolution#engines)

| Engine | What It Does | License |
|---|---|---|
| DSPy + GEPA | Reflective prompt evolution — reads execution traces, proposes targeted mutations | MIT |
| Darwinian Evolver | Code evolution with Git-based organisms | AGPL v3 (external CLI only) |

## Guardrails

[https://github.com/nousresearch/hermes-agent-self-evolution#guardrails](https://github.com/nousresearch/hermes-agent-self-evolution#guardrails)

Every evolved variant must pass:

1. **Full test suite** — `pytest tests/ -q` must pass 100%
2. **Size limits** — Skills ≤15KB, tool descriptions ≤500 chars
3. **Caching compatibility** — No mid-conversation changes
4. **Semantic preservation** — Must not drift from original purpose
5. **PR review** — All changes go through human review, never direct commit

## Full Plan

[https://github.com/nousresearch/hermes-agent-self-evolution#full-plan](https://github.com/nousresearch/hermes-agent-self-evolution#full-plan)

See [PLAN.md](https://github.com/NousResearch/hermes-agent-self-evolution/blob/main/PLAN.md) for the complete architecture, evaluation data strategy, constraints, benchmarks integration, and phased timeline.

## License

[https://github.com/nousresearch/hermes-agent-self-evolution#license](https://github.com/nousresearch/hermes-agent-self-evolution#license)

MIT — © 2026 Nous Research

## About

         ⚒ Evolutionary self-improvement for Hermes Agent — optimize skills, prompts, and code using DSPy + GEPA       

### Resources

[Readme](https://github.com/nousresearch/hermes-agent-self-evolution#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/NousResearch/hermes-agent-self-evolution/activity)

[Custom properties](https://github.com/NousResearch/hermes-agent-self-evolution/custom-properties)

### Stars

[3.4k
        stars](https://github.com/NousResearch/hermes-agent-self-evolution/stargazers)

### Watchers

[30
        watching](https://github.com/NousResearch/hermes-agent-self-evolution/watchers)

### Forks

[370
        forks](https://github.com/NousResearch/hermes-agent-self-evolution/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FNousResearch%2Fhermes-agent-self-evolution&report=NousResearch+%28user%29)

## [Releases](https://github.com/NousResearch/hermes-agent-self-evolution/releases)

No releases published

## [Packages
      0](https://github.com/orgs/NousResearch/packages?repo_name=hermes-agent-self-evolution)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/NousResearch/hermes-agent-self-evolution/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/NousResearch/hermes-agent-self-evolution/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

