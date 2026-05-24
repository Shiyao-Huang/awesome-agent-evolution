---
repo: yonkoo11/hermes-dojo
url: https://github.com/yonkoo11/hermes-dojo
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Yonkoo11/hermes-dojo: Self-improvement system for Hermes Agent. Monitors performance, finds weak skills, fixes them with self-evolution, reports results. · GitHub

**Source**: https://github.com/yonkoo11/hermes-dojo

---

[Skip to content](https://github.com/yonkoo11/hermes-dojo#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Yonkoo11](https://github.com/Yonkoo11)

/
**[hermes-dojo](https://github.com/Yonkoo11/hermes-dojo)**

Public

- [Notifications](https://github.com/login?return_to=%2FYonkoo11%2Fhermes-dojo)You must be signed in to change notification settings
- [Fork
    9](https://github.com/login?return_to=%2FYonkoo11%2Fhermes-dojo)
- 
[Star
          72](https://github.com/login?return_to=%2FYonkoo11%2Fhermes-dojo)

[https://github.com/Yonkoo11/hermes-dojo](https://github.com/Yonkoo11/hermes-dojo)

[Branches](https://github.com/Yonkoo11/hermes-dojo/branches)[Tags](https://github.com/Yonkoo11/hermes-dojo/tags)

[https://github.com/Yonkoo11/hermes-dojo/branches](https://github.com/Yonkoo11/hermes-dojo/branches)[https://github.com/Yonkoo11/hermes-dojo/tags](https://github.com/Yonkoo11/hermes-dojo/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| docs | docs |  |  |
| references | references |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| SKILL.md | SKILL.md |  |  |
| install.sh | install.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# Hermes Dojo

[https://github.com/yonkoo11/hermes-dojo#hermes-dojo](https://github.com/yonkoo11/hermes-dojo#hermes-dojo)

**Your agent, getting better while you sleep.**

Hermes Dojo is a self-improvement system for [Hermes Agent](https://github.com/NousResearch/hermes-agent) that watches how your agent performs, finds its weakest skills, fixes them with self-evolution, and shows you the results.

## The Problem

[https://github.com/yonkoo11/hermes-dojo#the-problem](https://github.com/yonkoo11/hermes-dojo#the-problem)

Your AI agent makes the same mistakes every day. You correct it, it forgets next session. Skills exist but nobody knows which ones work well and which ones silently fail. Self-evolution exists but nobody uses it because there's no signal about WHAT to evolve.

## The Solution

[https://github.com/yonkoo11/hermes-dojo#the-solution](https://github.com/yonkoo11/hermes-dojo#the-solution)

Dojo closes the feedback loop:

```
measure → identify weakness → evolve → measure again → report
```

It turns "the agent that grows with you" from a tagline into reality.

## How It Works

[https://github.com/yonkoo11/hermes-dojo#how-it-works](https://github.com/yonkoo11/hermes-dojo#how-it-works)

### 1. Performance Monitor

[https://github.com/yonkoo11/hermes-dojo#1-performance-monitor](https://github.com/yonkoo11/hermes-dojo#1-performance-monitor)

Reads your agent's session logs from `state.db`. Identifies failures: tool errors, retry loops, user corrections ("no, I meant..."), explicit complaints. Tracks per-skill success rates.

### 2. Weakness Analyzer

[https://github.com/yonkoo11/hermes-dojo#2-weakness-analyzer](https://github.com/yonkoo11/hermes-dojo#2-weakness-analyzer)

Categorizes root causes and ranks improvement opportunities:

- "web_extract fails 100% of the time. Root cause: no retry logic for timeouts"
- "No skill exists for CSV parsing, but user asked for it 5 times"

### 3. Auto-Fixer

[https://github.com/yonkoo11/hermes-dojo#3-auto-fixer](https://github.com/yonkoo11/hermes-dojo#3-auto-fixer)

For each weakness:

- Skill exists but fails → patch it with targeted error handling
- No skill exists → create one based on session patterns
- Run self-evolution (GEPA) on weak skills for measurable improvement

### 4. Reports

[https://github.com/yonkoo11/hermes-dojo#4-reports](https://github.com/yonkoo11/hermes-dojo#4-reports)

Generates reports for CLI or Telegram delivery with deltas, sparklines, and actionable summaries.

### 5. Learning Curve

[https://github.com/yonkoo11/hermes-dojo#5-learning-curve](https://github.com/yonkoo11/hermes-dojo#5-learning-curve)

Stores daily metrics. Shows improvement over days/weeks. Proof that the agent is actually growing.

## Quick Start

[https://github.com/yonkoo11/hermes-dojo#quick-start](https://github.com/yonkoo11/hermes-dojo#quick-start)

```
# Install as a Hermes skill
git clone https://github.com/Yonkoo11/hermes-dojo.git
cd hermes-dojo
./install.sh

# Seed demo data (optional, for testing)
cd ~/.hermes/skills/hermes-dojo/scripts
python3 seed_demo_data.py --days 7

# Run the full pipeline
python3 demo.py --reset
```

## Commands (via Hermes Agent)

[https://github.com/yonkoo11/hermes-dojo#commands-via-hermes-agent](https://github.com/yonkoo11/hermes-dojo#commands-via-hermes-agent)

| Command | What it does |
|---|---|
| /dojo analyze | Analyze recent sessions for failures |
| /dojo improve | Fix weakest skills + run self-evolution |
| /dojo report | Generate improvement report |
| /dojo history | Show learning curve over time |
| /dojo auto | Set up overnight cron (analyze + improve + report) |

## Architecture

[https://github.com/yonkoo11/hermes-dojo#architecture](https://github.com/yonkoo11/hermes-dojo#architecture)

```
hermes-dojo/
├── SKILL.md              # Main orchestrator (Hermes skill format)
├── scripts/
│   ├── monitor.py        # Reads session SQLite, computes metrics
│   ├── analyzer.py       # Categorizes failures, ranks weaknesses
│   ├── fixer.py          # Patches skills, creates new ones, runs evolution
│   ├── reporter.py       # Generates CLI/Telegram reports
│   ├── tracker.py        # Stores/retrieves learning curve data
│   ├── seed_demo_data.py # Demo data generator
│   └── demo.py           # Full pipeline demo runner
├── references/
│   └── failure_patterns.md
└── data/
    └── metrics.json      # Historical performance data
```

## Hermes Features Used

[https://github.com/yonkoo11/hermes-dojo#hermes-features-used](https://github.com/yonkoo11/hermes-dojo#hermes-features-used)

| Feature | How Dojo Uses It |
|---|---|
| Skills system | Dojo IS a skill; it creates/patches other skills |
| Self-evolution (GEPA) | Evolves weak skills via DSPy optimization |
| Session search | Reads past sessions to identify failure patterns |
| Cron scheduler | Runs overnight improvement cycle |
| Multi-platform | Morning report on Telegram |
| skill_manage | Creates and patches skills programmatically |

## Requirements

[https://github.com/yonkoo11/hermes-dojo#requirements](https://github.com/yonkoo11/hermes-dojo#requirements)

- [Hermes Agent](https://github.com/NousResearch/hermes-agent) v0.2.0+
- Python 3.10+
- [hermes-agent-self-evolution](https://github.com/NousResearch/hermes-agent-self-evolution) (for GEPA)

## Built for

[https://github.com/yonkoo11/hermes-dojo#built-for](https://github.com/yonkoo11/hermes-dojo#built-for)

Nous Research Hermes Agent Hackathon (March 2026)

---

Built on [Hermes Agent](https://github.com/NousResearch/hermes-agent) by [Nous Research](https://nousresearch.com)

## About

         Self-improvement system for Hermes Agent. Monitors performance, finds weak skills, fixes them with self-evolution, reports results.       

### Resources

[Readme](https://github.com/yonkoo11/hermes-dojo#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Yonkoo11/hermes-dojo/activity)

### Stars

[72
        stars](https://github.com/Yonkoo11/hermes-dojo/stargazers)

### Watchers

[0
        watching](https://github.com/Yonkoo11/hermes-dojo/watchers)

### Forks

[9
        forks](https://github.com/Yonkoo11/hermes-dojo/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FYonkoo11%2Fhermes-dojo&report=Yonkoo11+%28user%29)

## [Releases](https://github.com/Yonkoo11/hermes-dojo/releases)

No releases published

## [Packages
      0](https://github.com/users/Yonkoo11/packages?repo_name=hermes-dojo)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Yonkoo11/hermes-dojo/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          98.8%](https://github.com/Yonkoo11/hermes-dojo/search?l=python)
- [Shell
          1.2%](https://github.com/Yonkoo11/hermes-dojo/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

