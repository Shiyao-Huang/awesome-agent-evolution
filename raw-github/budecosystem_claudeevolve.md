---
repo: budecosystem/claudeevolve
url: https://github.com/budecosystem/claudeevolve
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - BudEcosystem/ClaudeEvolve: Alpha Evolve plugin that can work with Claude Code · GitHub

**Source**: https://github.com/budecosystem/claudeevolve

---

[Skip to content](https://github.com/budecosystem/claudeevolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[BudEcosystem](https://github.com/BudEcosystem)

/
**[ClaudeEvolve](https://github.com/BudEcosystem/ClaudeEvolve)**

Public

- [Notifications](https://github.com/login?return_to=%2FBudEcosystem%2FClaudeEvolve)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FBudEcosystem%2FClaudeEvolve)
- 
[Star
          4](https://github.com/login?return_to=%2FBudEcosystem%2FClaudeEvolve)

[https://github.com/BudEcosystem/ClaudeEvolve](https://github.com/BudEcosystem/ClaudeEvolve)

[Branches](https://github.com/BudEcosystem/ClaudeEvolve/branches)[Tags](https://github.com/BudEcosystem/ClaudeEvolve/tags)

[https://github.com/BudEcosystem/ClaudeEvolve/branches](https://github.com/BudEcosystem/ClaudeEvolve/branches)[https://github.com/BudEcosystem/ClaudeEvolve/tags](https://github.com/BudEcosystem/ClaudeEvolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History44 Commits44 Commits |  |  |  |
| circle_packing | circle_packing |  |  |
| claude_evolve | claude_evolve |  |  |
| docs | docs |  |  |
| evolve_output | evolve_output |  |  |
| plugin | plugin |  |  |
| ramsey_R5_5 | ramsey_R5_5 |  |  |
| test_problem | test_problem |  |  |
| yang_mills | yang_mills |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| install.sh | install.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# Claude Evolve

[https://github.com/budecosystem/claudeevolve#claude-evolve](https://github.com/budecosystem/claudeevolve#claude-evolve)

**Evolutionary artifact optimization for Claude Code** — an open-source implementation of [AlphaEvolve](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)-style evolutionary search that runs natively inside [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) sessions.

Claude Evolve uses **MAP-Elites quality-diversity search** with island-based populations to evolve programs, prompts, algorithms, configurations, and any text artifact — with Claude acting as both the intelligent mutation engine and an autonomous research agent.

[https://github.com/BudEcosystem/ClaudeEvolve/blob/main/LICENSE](https://github.com/BudEcosystem/ClaudeEvolve/blob/main/LICENSE)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://github.com/BudEcosystem/ClaudeEvolve/blob/main](https://github.com/BudEcosystem/ClaudeEvolve/blob/main)

---

## Headline Result: Circle Packing World Record

[https://github.com/budecosystem/claudeevolve#headline-result-circle-packing-world-record](https://github.com/budecosystem/claudeevolve#headline-result-circle-packing-world-record)

Claude Evolve achieved **sum of radii = 2.6359835671240317** (16 significant digits) for packing 26 non-overlapping circles in a unit square, starting from **generic baselines only** — no seeding from any known solution. This numerically exceeds all published results:

| System | Sum of Radii | Delta vs Ours | Source |
|---|---|---|---|
| Claude Evolve v4 | 2.6359835671240317 | — | This project |
| ThetaEvolve (8B model) | 2.63598308 | +4.87e-07 | ArXiv 2511.23473 |
| AlphaEvolve (DeepMind) | 2.6359830849 | +4.82e-07 | ArXiv 2506.13131 |
| ShinkaEvolve (Sakana AI) | 2.63597770 | +5.87e-06 | ArXiv 2509.19349 |
| OpenEvolve community | 2.635977 | +6.57e-06 | GitHub #156 |
| FICO Xpress (ZIB/MODAL) | 2.635916 | +6.81e-05 | FICO blog |

The solution uses 7 generic initialization patterns (ring, hex grid, Halton quasi-random, sunflower spiral, diagonal strips, billiard, corners+edges), 3-stage optimization (penalty relaxation + LP radii + SLSQP joint), ultra-fine coordinate descent, and warm-cache accumulation across evolution iterations. All constraints are evaluator-valid (gaps >= -1e-6).

**[Read the full paper](https://github.com/BudEcosystem/ClaudeEvolve/blob/main/docs/circle_packing_paper.md)** | **[Verify the result](https://github.com/BudEcosystem/ClaudeEvolve/blob/main/docs/verify_circle_packing.py)** | **[Solution code](https://github.com/BudEcosystem/ClaudeEvolve/blob/main/evolve_output/best_circle_packing_strict.py)**

---

## Table of Contents

[https://github.com/budecosystem/claudeevolve#table-of-contents](https://github.com/budecosystem/claudeevolve#table-of-contents)

- [How It Works](https://github.com/budecosystem/claudeevolve#how-it-works)
- [Key Features](https://github.com/budecosystem/claudeevolve#key-features)
- [Architecture](https://github.com/budecosystem/claudeevolve#architecture)
- [v2/v3 Research-Driven Features](https://github.com/budecosystem/claudeevolve#v2v3-research-driven-features)
- [Installation](https://github.com/budecosystem/claudeevolve#installation)
- [Quick Start](https://github.com/budecosystem/claudeevolve#quick-start)
- [Evaluation Modes](https://github.com/budecosystem/claudeevolve#evaluation-modes)
- [Configuration](https://github.com/budecosystem/claudeevolve#configuration)
- [CLI Reference](https://github.com/budecosystem/claudeevolve#cli-reference)
- [Plugin Commands](https://github.com/budecosystem/claudeevolve#plugin-commands)
- [MAP-Elites & Island Evolution](https://github.com/budecosystem/claudeevolve#map-elites--island-evolution)
- [Writing Evaluators](https://github.com/budecosystem/claudeevolve#writing-evaluators)
- [Advanced Usage](https://github.com/budecosystem/claudeevolve#advanced-usage)
- [Project Structure](https://github.com/budecosystem/claudeevolve#project-structure)
- [License](https://github.com/budecosystem/claudeevolve#license)

---

## How It Works

[https://github.com/budecosystem/claudeevolve#how-it-works](https://github.com/budecosystem/claudeevolve#how-it-works)

Claude Evolve turns Claude Code into an evolutionary optimization engine. You provide:

1. **An artifact** — the file you want to improve (a Python program, a prompt, a config, an algorithm)
2. **An evaluator** — a script that scores candidates on 0.0-1.0 metrics, or a prompt for Claude-as-judge

Then Claude Evolve runs an evolution loop:

[https://private-user-images.githubusercontent.com/28808155/564286565-5ba83b44-ac12-416f-ad9e-ef4d2a56a96d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0OTUsIm5iZiI6MTc3OTI5OTE5NSwicGF0aCI6Ii8yODgwODE1NS81NjQyODY1NjUtNWJhODNiNDQtYWMxMi00MTZmLWFkOWUtZWY0ZDJhNTZhOTZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDYzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFjODAxYmRlOWE1NGI0Mzk5ZWJmMzU5M2IyNTY5ODNmZmRmMzliMDVkZWJlOGFjZTMyNmI3ZmVkMGVlZWY0NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.pmvnQLTbPzuXt2jf1Fq__YhRhE8dRPnVlUYTetuyLr4](https://private-user-images.githubusercontent.com/28808155/564286565-5ba83b44-ac12-416f-ad9e-ef4d2a56a96d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0OTUsIm5iZiI6MTc3OTI5OTE5NSwicGF0aCI6Ii8yODgwODE1NS81NjQyODY1NjUtNWJhODNiNDQtYWMxMi00MTZmLWFkOWUtZWY0ZDJhNTZhOTZkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDYzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFjODAxYmRlOWE1NGI0Mzk5ZWJmMzU5M2IyNTY5ODNmZmRmMzliMDVkZWJlOGFjZTMyNmI3ZmVkMGVlZWY0NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.pmvnQLTbPzuXt2jf1Fq__YhRhE8dRPnVlUYTetuyLr4)

Each iteration, Claude receives **different context** — a new parent artifact selected from the population, inspiration from diverse high-performing solutions, stagnation diagnostics, strategy directives, and guidance on unexplored regions of the solution space.

---

## Key Features

[https://github.com/budecosystem/claudeevolve#key-features](https://github.com/budecosystem/claudeevolve#key-features)

### Evolutionary Algorithm

[https://github.com/budecosystem/claudeevolve#evolutionary-algorithm](https://github.com/budecosystem/claudeevolve#evolutionary-algorithm)

- **MAP-Elites quality-diversity search** — maintains diverse elite solutions across configurable feature dimensions
- **Island-based evolution** — multiple isolated populations with periodic migration
- **Universal novelty system** — 3-layer similarity (structural + behavioral + semantic) working across all artifact types, not just code
- **Stepping stones archive** — preserves diverse intermediate solutions that open new search space regions
- **7 built-in strategies** — Incremental, Creative Leap, Hybrid Synthesis, Research-Driven, Solver Hybrid, Multi-Iteration Accumulation, Problem Decomposition

### Research-Driven Discovery (v2)

[https://github.com/budecosystem/claudeevolve#research-driven-discovery-v2](https://github.com/budecosystem/claudeevolve#research-driven-discovery-v2)

- **Stagnation Engine** — detects plateaus (5 levels: NONE to CRITICAL) and adapts exploration
- **Continuous G_t Signal** — AdaEvolve-inspired exponential moving average replacing discrete stagnation levels, driving all adaptation from a single continuous signal
- **Research Agent** — literature search and approach discovery via web search
- **Diagnostician Agent** — root cause analysis of why evolution is stuck
- **UCB1 Strategy Selection** — bandit-based strategy selection replacing weighted-random, with capped reward and exploration modulation
- **Cross-Run Memory** — persists learnings, failed approaches, and successful strategies across runs
- **Meta-Scratchpad** — periodic pattern synthesis from evolution history (ShinkaEvolve-inspired)
- **Verbal Gradients** — pairwise reflection comparing artifacts to generate directional mutation guidance (ReEvo-inspired)
- **Thought-Code Coevolution** — evolves natural-language rationale alongside code for better LLM reasoning (EoH-inspired)

### Warm-Start & Accumulation (v3)

[https://github.com/budecosystem/claudeevolve#warm-start--accumulation-v3](https://github.com/budecosystem/claudeevolve#warm-start--accumulation-v3)

- **Warm-Start Cache** — persists intermediate computation (numpy arrays, JSON, text) between iterations with LRU eviction
- **Multi-Iteration Accumulation** — each iteration continues from where the last left off, enabling sustained search across hundreds of iterations
- **Evaluation Caching** — skip re-evaluation of deterministic results
- **Solution Seeding** — inject known-good solutions into the population
- **Power-Law Parent Selection** — rank-based selection with adaptive alpha from G_t signal and offspring novelty weighting (ShinkaEvolve/FunSearch-inspired)
- **Failure Reflexion** — captures recent failures with reasons, injecting "avoid these" guidance into future iterations
- **Pre-Evaluation Novelty Gate** — rejects near-duplicate candidates before wasting evaluation budget
- **IterationOrchestrator** — unified coordination of all feature modules for next/submit lifecycle

### Universal Novelty & Diversity (v3)

[https://github.com/budecosystem/claudeevolve#universal-novelty--diversity-v3](https://github.com/budecosystem/claudeevolve#universal-novelty--diversity-v3)

- **Structural similarity** — token n-gram overlap analysis working across Python, JS, YAML, JSON, SQL, markdown, and prose
- **Behavioral similarity** — metric fingerprint comparison (normalized score vectors across evaluation dimensions)
- **Semantic fingerprints** — concept extraction identifying algorithmic ideas, data structures, and approaches
- **Stepping stones** — archive of diverse intermediate solutions injected into iteration context for crossover-inspired evolution
- **Artifact-agnostic** — same novelty pipeline handles code, prompts, configs, and any text artifact

### Claude Code Integration

[https://github.com/budecosystem/claudeevolve#claude-code-integration](https://github.com/budecosystem/claudeevolve#claude-code-integration)

- **Native plugin** — runs inside Claude Code sessions via `/evolve` command
- **Dynamic per-iteration prompts** — each iteration gets fresh context with population insights and strategy directives
- **Full autonomy per iteration** — Claude can use web search, spawn subagents, run code, and apply any available skill
- **Critic mode** — Claude acts as adversarial evaluator for non-code artifacts

### Problem-Type Guidance

[https://github.com/budecosystem/claudeevolve#problem-type-guidance](https://github.com/budecosystem/claudeevolve#problem-type-guidance)

- **Quantitative problems** (math, optimization) — warm cache, multi-iteration accumulation, constraint propagation
- **Qualitative problems** (business, writing) — research agents, section-by-section iteration, style consistency
- **Hybrid problems** (data science, ML) — model checkpoints, hyperparameter search, problem decomposition

### Production Quality

[https://github.com/budecosystem/claudeevolve#production-quality](https://github.com/budecosystem/claudeevolve#production-quality)

- **1039 tests** covering unit, integration, and end-to-end flows
- **Subprocess isolation** — evaluator runs in isolated subprocess with timeout protection
- **Checkpoint/resume** — periodic snapshots with seamless resume
- **Session isolation** — multiple sessions don't interfere
- **Fresh init** — `init` clears stale state by default (cross-run memory preserved)

---

## Architecture

[https://github.com/budecosystem/claudeevolve#architecture](https://github.com/budecosystem/claudeevolve#architecture)

Claude Evolve is a three-layer hybrid system:

[https://private-user-images.githubusercontent.com/28808155/564284022-0719899d-2d6d-4407-a1d4-3c032e329d10.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0OTUsIm5iZiI6MTc3OTI5OTE5NSwicGF0aCI6Ii8yODgwODE1NS81NjQyODQwMjItMDcxOTg5OWQtMmQ2ZC00NDA3LWExZDQtM2MwMzJlMzI5ZDEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDYzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwM2E5NjY2OThlODQwZjkwNWQzNWY4YjBjOWYxNmFkOTBlZjlhMmRjNGI3NTMwMTYwOTU5OTQyOGMxNzc1MjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.UGjQbDu8MqUR1WZ58KJNfBMHLRIElsQccjPwrwv3Dw8](https://private-user-images.githubusercontent.com/28808155/564284022-0719899d-2d6d-4407-a1d4-3c032e329d10.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTk0OTUsIm5iZiI6MTc3OTI5OTE5NSwicGF0aCI6Ii8yODgwODE1NS81NjQyODQwMjItMDcxOTg5OWQtMmQ2ZC00NDA3LWExZDQtM2MwMzJlMzI5ZDEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3NDYzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwM2E5NjY2OThlODQwZjkwNWQzNWY4YjBjOWYxNmFkOTBlZjlhMmRjNGI3NTMwMTYwOTU5OTQyOGMxNzc1MjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.UGjQbDu8MqUR1WZ58KJNfBMHLRIElsQccjPwrwv3Dw8)

**Layer 1 (Shell)** manages the iteration lifecycle. The stop hook calls `diagnose` (stagnation detection) before `next` (context generation).

**Layer 2 (Python)** provides all deterministic logic — MAP-Elites database, evaluation, stagnation detection, strategy selection, warm-start caching, cross-run memory, research log management, and state persistence. This is a standalone `pip`-installable package with a `claude-evolve` CLI.

**Layer 3 (Skill + Agents)** teaches Claude how to behave during each iteration, with problem-type-specific guidance and specialized agents for research and diagnosis.

---

## v2/v3 Research-Driven Features

[https://github.com/budecosystem/claudeevolve#v2v3-research-driven-features](https://github.com/budecosystem/claudeevolve#v2v3-research-driven-features)

### Stagnation Engine

[https://github.com/budecosystem/claudeevolve#stagnation-engine](https://github.com/budecosystem/claudeevolve#stagnation-engine)

Detects when evolution has plateaued and adapts the search strategy:

| Level | Iterations Stuck | Response |
|---|---|---|
| NONE | 0-2 | Continue normally |
| MILD | 3-5 | Increase exploration, try new approaches |
| MODERATE | 6-10 | Paradigm shift, spawn research agent |
| SEVERE | 11-20 | Radical departure, spawn diagnostician |
| CRITICAL | 20+ | Full restart, problem reformulation |

### Strategy Evolver

[https://github.com/budecosystem/claudeevolve#strategy-evolver](https://github.com/budecosystem/claudeevolve#strategy-evolver)

7 built-in strategies, selected based on stagnation level and past performance:

1. **Incremental Improvement** — small targeted changes (low exploration)
2. **Creative Leap** — ignore current approach, try something novel (high exploration)
3. **Hybrid Synthesis** — combine best elements from top solutions
4. **Research-Driven** — 80% effort on literature review, then implement
5. **Solver Hybrid** — formulate as constraint satisfaction, use solvers
6. **Multi-Iteration Accumulation** — continue from warm-cached state
7. **Problem Decomposition** — break into independent sub-problems

### Warm-Start Cache

[https://github.com/budecosystem/claudeevolve#warm-start-cache](https://github.com/budecosystem/claudeevolve#warm-start-cache)

Persists intermediate computation between iterations:

```
# In your candidate code:
import os, numpy as np

# Load from previous iteration
cache_file = '.claude/evolve-state/warm_cache/items/best_matrix.npy'
if os.path.exists(cache_file):
    prev_best = np.load(cache_file)
    # Continue optimizing from prev_best

# Save for next iteration
os.makedirs('.claude/evolve-state/warm_cache/items', exist_ok=True)
np.save(cache_file, my_result)
```

### Cross-Run Memory

[https://github.com/budecosystem/claudeevolve#cross-run-memory](https://github.com/budecosystem/claudeevolve#cross-run-memory)

Learnings persist across evolution runs:

- Failed approaches (avoid repeating)
- Successful strategies (build on)
- Key insights from prior runs

### Universal Novelty System

[https://github.com/budecosystem/claudeevolve#universal-novelty-system](https://github.com/budecosystem/claudeevolve#universal-novelty-system)

Traditional code-evolution systems use code-specific similarity (AST diff, token overlap). Claude Evolve's novelty system works across **all artifact types** via three complementary layers:

| Layer | Method | What It Captures |
|---|---|---|
| Structural | Token n-gram overlap (bigrams + trigrams) | Surface-level textual similarity |
| Behavioral | Metric fingerprint cosine similarity | Functional equivalence (same scores = same behavior) |
| Semantic | Concept extraction + Jaccard overlap | Algorithmic ideas, data structures, approaches |

Combined similarity = weighted average (structural 0.4, behavioral 0.3, semantic 0.3). Candidates above the novelty threshold are rejected as duplicates, preserving population diversity.

### Stepping Stones Archive

[https://github.com/budecosystem/claudeevolve#stepping-stones-archive](https://github.com/budecosystem/claudeevolve#stepping-stones-archive)

Inspired by FunSearch's best-shot prompting and ShinkaEvolve's novelty rejection sampling, the stepping stones archive preserves **diverse intermediate solutions** — not just the best. These are injected into iteration context to enable crossover-style evolution:

1. Each submission is checked against the archive for novelty
2. Sufficiently novel solutions are preserved regardless of fitness
3. During context generation, stepping stones from different search space regions are selected
4. Claude can combine ideas from stepping stones with the current best (semantic crossover)

This prevents the population from collapsing to a single approach and enables discovering solutions that require traversing low-fitness intermediates.

---

## Installation

[https://github.com/budecosystem/claudeevolve#installation](https://github.com/budecosystem/claudeevolve#installation)

### Prerequisites

[https://github.com/budecosystem/claudeevolve#prerequisites](https://github.com/budecosystem/claudeevolve#prerequisites)

- Python 3.10+
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) installed
- `jq` (for stop hook JSON processing): `apt install jq` or `brew install jq`

### Install

[https://github.com/budecosystem/claudeevolve#install](https://github.com/budecosystem/claudeevolve#install)

```
git clone https://github.com/BudEcosystem/ClaudeEvolve.git
cd ClaudeEvolve

# Install with a virtual environment (recommended)
bash install.sh --venv

# Or install directly
bash install.sh
```

### Verify

[https://github.com/budecosystem/claudeevolve#verify](https://github.com/budecosystem/claudeevolve#verify)

```
claude-evolve --help
cd claude_evolve && python -m pytest tests/ -q  # 1039 tests
```

---

## Quick Start

[https://github.com/budecosystem/claudeevolve#quick-start](https://github.com/budecosystem/claudeevolve#quick-start)

### Example: Circle Packing (Benchmark)

[https://github.com/budecosystem/claudeevolve#example-circle-packing-benchmark](https://github.com/budecosystem/claudeevolve#example-circle-packing-benchmark)

```
cd ClaudeEvolve
claude  # Start Claude Code

# In Claude Code:
/evolve circle_packing/program.py circle_packing/evaluator.py --max-iterations 50 --target-score 1.0
```

### Example: Ramsey Number R(5,5)

[https://github.com/budecosystem/claudeevolve#example-ramsey-number-r55](https://github.com/budecosystem/claudeevolve#example-ramsey-number-r55)

```
/evolve ramsey_R5_5/program.py ramsey_R5_5/evaluator.py --max-iterations 500 --target-score 1.0
```

### Example: Evolve a Prompt (Critic Mode)

[https://github.com/budecosystem/claudeevolve#example-evolve-a-prompt-critic-mode](https://github.com/budecosystem/claudeevolve#example-evolve-a-prompt-critic-mode)

```
/evolve my_prompt.md eval_criteria.md --mode critic --max-iterations 20
```

---

## Evaluation Modes

[https://github.com/budecosystem/claudeevolve#evaluation-modes](https://github.com/budecosystem/claudeevolve#evaluation-modes)

### Script Mode (Default)

[https://github.com/budecosystem/claudeevolve#script-mode-default](https://github.com/budecosystem/claudeevolve#script-mode-default)
