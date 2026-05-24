---
repo: studio-intrinsic/turbo-gepa
url: https://github.com/studio-intrinsic/turbo-gepa
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Studio-Intrinsic/turbo-gepa: Optimize prompts, code, and more with AI-powered Reflective Text Evolution · GitHub

**Source**: https://github.com/studio-intrinsic/turbo-gepa

---

[Skip to content](https://github.com/studio-intrinsic/turbo-gepa#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Studio-Intrinsic](https://github.com/Studio-Intrinsic)

/
**[turbo-gepa](https://github.com/Studio-Intrinsic/turbo-gepa)**

Public

       forked from [gepa-ai/gepa](https://github.com/gepa-ai/gepa)

- [Notifications](https://github.com/login?return_to=%2FStudio-Intrinsic%2Fturbo-gepa)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FStudio-Intrinsic%2Fturbo-gepa)
- 
[Star
          3](https://github.com/login?return_to=%2FStudio-Intrinsic%2Fturbo-gepa)

[https://github.com/Studio-Intrinsic/turbo-gepa](https://github.com/Studio-Intrinsic/turbo-gepa)

[Branches](https://github.com/Studio-Intrinsic/turbo-gepa/branches)[Tags](https://github.com/Studio-Intrinsic/turbo-gepa/tags)

[https://github.com/Studio-Intrinsic/turbo-gepa/branches](https://github.com/Studio-Intrinsic/turbo-gepa/branches)[https://github.com/Studio-Intrinsic/turbo-gepa/tags](https://github.com/Studio-Intrinsic/turbo-gepa/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History450 Commits450 Commits |  |  |  |
| .github | .github |  |  |
| assets | assets |  |  |
| benchmarks | benchmarks |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| scripts | scripts |  |  |
| src/turbo_gepa | src/turbo_gepa |  |  |
| test_data/evolution | test_data/evolution |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CITATION.cff | CITATION.cff |  |  |
| GEMINI.md | GEMINI.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| best_prompt.txt | best_prompt.txt |  |  |
| pyproject.toml | pyproject.toml |  |  |
| sweep_results.tsv | sweep_results.tsv |  |  |
| test_bottleneck.py | test_bottleneck.py |  |  |
| uv.lock | uv.lock |  |  |
| viz_fixed.png | viz_fixed.png |  |  |
| viz_logo_success.png | viz_logo_success.png |  |  |
| viz_logo_text.png | viz_logo_text.png |  |  |
| viz_with_logo.png | viz_with_logo.png |  |  |
| viz_with_quality_chart.png | viz_with_quality_chart.png |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/Studio-Intrinsic/turbo-gepa/blob/main/assets/turbo_gepa_logo_transparent.png](https://github.com/Studio-Intrinsic/turbo-gepa/blob/main/assets/turbo_gepa_logo_transparent.png)

# TurboGEPA: High-Throughput Prompt Evolution

[https://github.com/studio-intrinsic/turbo-gepa#turbogepa-high-throughput-prompt-evolution](https://github.com/studio-intrinsic/turbo-gepa#turbogepa-high-throughput-prompt-evolution)

*The fastest way to reflectively evolve through the prompt space.*

**Up to 17× faster than classic GEPA on AIME (30-example OSS‑20/Grok‑4 benchmark), exploring ~6× more candidates in the same wall time.**

**Goal:** Take GEPA's core reflective optimization approach and, trading token efficiency for speed, reach optimal prompts and temperature settings as rapidly as possible. 

## 🚀 What is TurboGEPA?

[https://github.com/studio-intrinsic/turbo-gepa#-what-is-turbogepa](https://github.com/studio-intrinsic/turbo-gepa#-what-is-turbogepa)

**TurboGEPA** is a high-performance fork of the [GEPA (Genetic-Pareto) framework](https://github.com/gepa-ai/gepa) designed for **maximum speed of prompt evolution**. While preserving GEPA's core innovation of LLM-based reflection for text evolution, TurboGEPA introduces:

- ⚡ **Maximized Concurrency**: Async orchestration scales to available compute (bounded by shard size + `max_total_inflight` per island)
- 🏝️ **Island-Based Parallelism**: Concurrent islands broadcast elites across the swarm to preserve diversity without extra processes
- 📊 **ASHA-Style Ladder**: Parent-gated rung promotions prune weak lineages early without cohort halving
- 🧬 **Triple Mutation Strategy**: Blends incremental reflection, Prompt-MII-style spec induction, and interleaved thinking for exploration vs. exploitation
- 📈 **Parent-Weighted Scheduling**: Recent improvement history boosts promising lineages to the front of the queue
- 🌡️ **Two-Phase Optimization**: Prompt evolution first, optional temperature sweep second
- 🚦 **Convergence & Lineage Guards**: Per-candidate auto-stop and lineage fast-tracks keep stagnating prompts moving forward
- ⚙️ **Adaptive Runtime Control**: Parent-aware early stopping, latency-based concurrency tuning, rung-aware mutation budgets, and runtime shard tuning keep tokens focused where they matter
- 🧾 **Lineage-Aware Mutations**: Mutators receive parent/child score history and failure summaries to guide the next edits
- 🔧 **Adaptive Configuration**: Auto-tunes concurrency, batch sizes, and shard settings based on dataset size

### Built on GEPA

[https://github.com/studio-intrinsic/turbo-gepa#built-on-gepa](https://github.com/studio-intrinsic/turbo-gepa#built-on-gepa)

TurboGEPA extends the GEPA algorithm proposed in:

> **GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning** Lakshya A Agrawal et al., 2025 arXiv:2507.19457 [Paper](https://arxiv.org/abs/2507.19457) | [Original Repository](https://github.com/gepa-ai/gepa)

All credit for the core GEPA algorithm, reflective mutation strategy, and Pareto-aware selection goes to the original authors. TurboGEPA focuses on **maximizing speed to evolution** by trading token efficiency for aggressive parallelism and early pruning.

---

## 💡 Best Practices

[https://github.com/studio-intrinsic/turbo-gepa#-best-practices](https://github.com/studio-intrinsic/turbo-gepa#-best-practices)

### Optimize Cheap, Deploy Expensive

[https://github.com/studio-intrinsic/turbo-gepa#optimize-cheap-deploy-expensive](https://github.com/studio-intrinsic/turbo-gepa#optimize-cheap-deploy-expensive)

Modern LLMs have advanced to where even **small, fast models** are capable of sophisticated prompt reflection and generation. Recent research shows that **prompt optimizations transfer effectively** from cheaper models to more expensive ones.

**Recommended workflow:**

1. **Optimize with fast models**: Use TurboGEPA with `grok-4-fast` (reflection) + `gpt-oss-120b` (task) for rapid exploration
2. **Validate on target model**: Test the optimized prompts on your production model
3. **Deploy with confidence**: Optimized prompts typically transfer well, giving you the best of both worlds—fast optimization + production quality

**Why this works:**

- Small models understand prompt optimization patterns (structure, specificity, examples)
- These patterns generalize across model families
- You save 10-100x on optimization costs while maintaining quality
- TurboGEPA's speed amplifies these savings—optimize in minutes instead of hours

**Example:**

```
# Optimize with cheap, fast models
adapter = DefaultAdapter(
    dataset=trainset,
    task_lm="openrouter/openai/gpt-oss-120b:nitro",     # Student model (fast, cheap)
    reflection_lm="openrouter/x-ai/grok-4-fast"          # Optimizer model (fast, smart)
)

result = adapter.optimize(seeds=["You are a helpful assistant."], max_rounds=10)

# Extract best prompt from Pareto entries
entries = result.get("pareto_entries", [])
best = max(entries, key=lambda e: e.result.objectives.get("quality", 0.0)) if entries else None
optimized_prompt = best.candidate.text if best else ""

# Deploy to production with expensive model
production_result = expensive_model.run(optimized_prompt, production_data)
```

---

## 📦 Installation

[https://github.com/studio-intrinsic/turbo-gepa#-installation](https://github.com/studio-intrinsic/turbo-gepa#-installation)

### Recommended (Developer) Setup

[https://github.com/studio-intrinsic/turbo-gepa#recommended-developer-setup](https://github.com/studio-intrinsic/turbo-gepa#recommended-developer-setup)

```
git clone https://github.com/Studio-Intrinsic/turbo-gepa.git
cd turbo-gepa
uv sync --extra dev --python 3.11
```

This creates a local `.venv` with all runtime and development tooling (ruff, pytest, pre-commit). Activate it with `source .venv/bin/activate` (macOS/Linux) or `.\.venv\Scripts\activate` (Windows) before running commands.

### Install from Source (pip/virtualenv)

[https://github.com/studio-intrinsic/turbo-gepa#install-from-source-pipvirtualenv](https://github.com/studio-intrinsic/turbo-gepa#install-from-source-pipvirtualenv)

```
git clone https://github.com/Studio-Intrinsic/turbo-gepa.git
cd turbo-gepa
pip install -e ".[dev]"
```

### PyPI (if published)

[https://github.com/studio-intrinsic/turbo-gepa#pypi-if-published](https://github.com/studio-intrinsic/turbo-gepa#pypi-if-published)

```
pip install turbo-gepa
```

> The package name on PyPI is `turbo-gepa`. If you are working from this repository and want reproducible builds, prefer the source installation above.

### Optional Dependencies

[https://github.com/studio-intrinsic/turbo-gepa#optional-dependencies](https://github.com/studio-intrinsic/turbo-gepa#optional-dependencies)

```
# For DSPy integration (source install)
pip install -e ".[dspy]"

# For development tooling
pip install -e ".[dev]"

# For everything (runtime + extras)
pip install -e ".[full]"
```

### Verify Installation

[https://github.com/studio-intrinsic/turbo-gepa#verify-installation](https://github.com/studio-intrinsic/turbo-gepa#verify-installation)
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

