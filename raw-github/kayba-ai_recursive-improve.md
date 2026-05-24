---
repo: kayba-ai/recursive-improve
url: https://github.com/kayba-ai/recursive-improve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - kayba-ai/recursive-improve: 🪞 Make your agents recursively self-improve · GitHub

**Source**: https://github.com/kayba-ai/recursive-improve

---

[Skip to content](https://github.com/kayba-ai/recursive-improve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[kayba-ai](https://github.com/kayba-ai)

/
**[recursive-improve](https://github.com/kayba-ai/recursive-improve)**

Public

- [Notifications](https://github.com/login?return_to=%2Fkayba-ai%2Frecursive-improve)You must be signed in to change notification settings
- [Fork
    18](https://github.com/login?return_to=%2Fkayba-ai%2Frecursive-improve)
- 
[Star
          194](https://github.com/login?return_to=%2Fkayba-ai%2Frecursive-improve)

[https://github.com/kayba-ai/recursive-improve](https://github.com/kayba-ai/recursive-improve)

[Branches](https://github.com/kayba-ai/recursive-improve/branches)[Tags](https://github.com/kayba-ai/recursive-improve/tags)

[https://github.com/kayba-ai/recursive-improve/branches](https://github.com/kayba-ai/recursive-improve/branches)[https://github.com/kayba-ai/recursive-improve/tags](https://github.com/kayba-ai/recursive-improve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| .agents/skills | .agents/skills |  |  |
| .claude/skills | .claude/skills |  |  |
| assets | assets |  |  |
| examples | examples |  |  |
| recursive_improve | recursive_improve |  |  |
| tests | tests |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| dashboard.py | dashboard.py |  |  |
| evolve_agent.py | evolve_agent.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| terminal_bench_split.json | terminal_bench_split.json |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://kayba.ai](https://kayba.ai)

[https://discord.gg/mqCqH7sTyK](https://discord.gg/mqCqH7sTyK)[https://twitter.com/kaybaai](https://twitter.com/kaybaai)[https://kayba.ai](https://kayba.ai)

## make your agents recursively self-improve

[https://github.com/kayba-ai/recursive-improve#make-your-agents-recursively-self-improve](https://github.com/kayba-ai/recursive-improve#make-your-agents-recursively-self-improve)

90% of Claude's code is now written by Claude. Recursive self-improvement is already happening at Anthropic. **What if you could do the same for your own agents?**

## Closing the Loop

[https://github.com/kayba-ai/recursive-improve#closing-the-loop](https://github.com/kayba-ai/recursive-improve#closing-the-loop)

You have an agent. It works, most of the time. But it could be better. Solving harder problems, handling more edge cases, wasting fewer tokens. What if it could improve itself, recursively, every time it runs?

Right now, it can't. Your agent is stateless. Every run starts from scratch. The only way to improve it is to manually improve it. There is no compounding of improvements.

**recursive-improve** closes this loop:

[https://github.com/kayba-ai/recursive-improve/blob/main/assets/loop.gif](https://github.com/kayba-ai/recursive-improve/blob/main/assets/loop.gif)

Your agent runs. Every LLM call is captured. Your coding agent analyzes the traces, identifying common failure patterns across runs, and applies targeted fixes. You run it again. It's better.

---

## Get Started

[https://github.com/kayba-ai/recursive-improve#get-started](https://github.com/kayba-ai/recursive-improve#get-started)

### 1. Install

[https://github.com/kayba-ai/recursive-improve#1-install](https://github.com/kayba-ai/recursive-improve#1-install)

```
uv tool install "recursive-improve[all] @ git+https://github.com/kayba-ai/recursive-improve.git"
```

Then in your agent's project directory:

```
cd /path/to/your/agent
recursive-improve init
```

This creates the `/recursive-improve` skill files and the `eval/traces/` directory.

### 2. Add tracing to your agent

[https://github.com/kayba-ai/recursive-improve#2-add-tracing-to-your-agent](https://github.com/kayba-ai/recursive-improve#2-add-tracing-to-your-agent)

Add the tracing dependency to your project:

```
uv add "recursive-improve @ git+https://github.com/kayba-ai/recursive-improve.git"
```

Two lines. Your agent code stays unchanged, but now your agents execution traces get saved locally.

```
import recursive_improve as ri

ri.patch()  # auto-captures openai, anthropic, litellm calls

with ri.session("./eval/traces") as run:
    result = my_agent("book a flight to Paris")
    run.finish(output=result, success=True)
```

> **Already have traces?** Drop them in `eval/traces/` and skip to step 4.

### 3. Run your agent a few times to generate traces

[https://github.com/kayba-ai/recursive-improve#3-run-your-agent-a-few-times-to-generate-traces](https://github.com/kayba-ai/recursive-improve#3-run-your-agent-a-few-times-to-generate-traces)

### 4. Run the improvement loop

[https://github.com/kayba-ai/recursive-improve#4-run-the-improvement-loop](https://github.com/kayba-ai/recursive-improve#4-run-the-improvement-loop)

Open Claude Code or Codex in your project directory:

```
/recursive-improve
```

### 5. Re-run your agent

[https://github.com/kayba-ai/recursive-improve#5-re-run-your-agent](https://github.com/kayba-ai/recursive-improve#5-re-run-your-agent)

Clear old traces and run your agent again so the benchmark measures your improved code:

```
rm -f eval/traces/*.json
# run your agent the same way as step 3
```

### 6. Benchmark

[https://github.com/kayba-ai/recursive-improve#6-benchmark](https://github.com/kayba-ai/recursive-improve#6-benchmark)

Measure whether your changes actually solved the problems:

```
/benchmark
```

Results are stored in `eval/benchmark_results.json` and auto-compared against the previous run on the same dynamic metrics that were generated for your agent.

> **CLI alternative:**`recursive-improve benchmark --label "v1-baseline"` and `recursive-improve benchmark list`

### 7. Dashboard

[https://github.com/kayba-ai/recursive-improve#7-dashboard](https://github.com/kayba-ai/recursive-improve#7-dashboard)

Start the interactive dashboard to visualize your improvement cycles:

```
recursive-improve dashboard          # default: http://localhost:8420
recursive-improve dashboard -p 8080  # custom port
```

Each improvement cycle lives on its own branch. The dashboard shows before/after metrics for every cycle. See exactly what improved, merge the wins, discard the rest.

[https://github.com/kayba-ai/recursive-improve/blob/main/assets/dashboard.png](https://github.com/kayba-ai/recursive-improve/blob/main/assets/dashboard.png)

### 8. Run it overnight

[https://github.com/kayba-ai/recursive-improve#8-run-it-overnight](https://github.com/kayba-ai/recursive-improve#8-run-it-overnight)

```
/ratchet
```

An autoresearch-style autonomous loop. It asks you what to optimize, then repeats: improve → run agent → eval → keep or revert. Only improvements survive. Check `eval/ratchet_summary.md` when you wake up.

Tip

Want deeper analysis? [Kayba](https://kayba.ai) offers managed recursive agent improvement at scale, tailored to your agent.

---

## How It Works

[https://github.com/kayba-ai/recursive-improve#how-it-works](https://github.com/kayba-ai/recursive-improve#how-it-works)

When you run the `/recursive-improve` skill, it walks through a structured pipeline:

1. **Build context**: detects your agent's architecture, tools, and system prompt
2. **Analyze traces**: reads your traces, surfaces failure patterns, missed opportunities, recurring errors
3. **Measure**: runs built-in detectors (loops, give-ups, errors, recovery) and generates custom domain-specific evaluations from your insights, then computes baselines
4. **Plan**: triages each insight into discard / code fix / prompt fix, prioritized by impact
5. **Review**: presents the plan for your approval before anything changes
6. **Fix**: implements approved changes on a dedicated branch

Every fix traces back to a specific insight, linked to a specific metric.

---

## Architecture

[https://github.com/kayba-ai/recursive-improve#architecture](https://github.com/kayba-ai/recursive-improve#architecture)

```
your agent  ──>  ri.patch() + ri.session()  ──>  eval/traces/*.json
                                                        │
                                                        ▼
                                                  /recursive-improve
                                                        │
                                                        ▼
                                              improved agent code  ──>  repeat
                                                        │
                                                        ▼
                                                    benchmark  ──>  recursive-improve dashboard

                              ┌──────────────────────────────┐
                              │  /ratchet (autonomous loop)   │
                              │  improve → run → eval →       │
                              │  keep or revert → repeat      │
                              └──────────────────────────────┘
```

- **`ri.patch()`**: monkey-patches OpenAI, Anthropic, and LiteLLM clients to capture every call
- **`ri.session()`**: context manager that writes structured trace JSON files
- **`/recursive-improve`**: Claude Code / Codex skill that analyzes traces and applies fixes
- **`recursive-improve benchmark`**: snapshot metric quality, store, and compare over time
- **`recursive-improve dashboard`**: web UI to visualize runs and compare branches
- **`/ratchet`**: autonomous keep-or-revert loop that runs `/recursive-improve` repeatedly overnight

---

**Star this repo if you find it useful!**

**Built with ❤️ by [Kayba](https://kayba.ai) and the open-source community.**

## About

         🪞 Make your agents recursively self-improve       

[kayba.ai/](https://kayba.ai/)

### Topics

[machine-learning](https://github.com/topics/machine-learning)[ai](https://github.com/topics/ai)[agents](https://github.com/topics/agents)[agent-learning](https://github.com/topics/agent-learning)[ai-tools](https://github.com/topics/ai-tools)[ai-agent](https://github.com/topics/ai-agent)[llm](https://github.com/topics/llm)

### Resources

[Readme](https://github.com/kayba-ai/recursive-improve#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/kayba-ai/recursive-improve#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/kayba-ai/recursive-improve/activity)

[Custom properties](https://github.com/kayba-ai/recursive-improve/custom-properties)

### Stars

[194
        stars](https://github.com/kayba-ai/recursive-improve/stargazers)

### Watchers

[3
        watching](https://github.com/kayba-ai/recursive-improve/watchers)

### Forks

[18
        forks](https://github.com/kayba-ai/recursive-improve/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fkayba-ai%2Frecursive-improve&report=kayba-ai+%28user%29)

## [Contributors](https://github.com/kayba-ai/recursive-improve/graphs/contributors)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

