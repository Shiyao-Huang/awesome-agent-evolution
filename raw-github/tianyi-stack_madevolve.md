---
repo: tianyi-stack/madevolve
url: https://github.com/tianyi-stack/madevolve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - tianyi-stack/MadEvolve · GitHub

**Source**: https://github.com/tianyi-stack/madevolve

---

[Skip to content](https://github.com/tianyi-stack/madevolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[tianyi-stack](https://github.com/tianyi-stack)

/
**[MadEvolve](https://github.com/tianyi-stack/MadEvolve)**

Public

- [Notifications](https://github.com/login?return_to=%2Ftianyi-stack%2FMadEvolve)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Ftianyi-stack%2FMadEvolve)
- 
[Star
          9](https://github.com/login?return_to=%2Ftianyi-stack%2FMadEvolve)

[https://github.com/tianyi-stack/MadEvolve](https://github.com/tianyi-stack/MadEvolve)

[Branches](https://github.com/tianyi-stack/MadEvolve/branches)[Tags](https://github.com/tianyi-stack/MadEvolve/tags)

[https://github.com/tianyi-stack/MadEvolve/branches](https://github.com/tianyi-stack/MadEvolve/branches)[https://github.com/tianyi-stack/MadEvolve/tags](https://github.com/tianyi-stack/MadEvolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History6 Commits6 Commits |  |  |  |
| madevolve | madevolve |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# MadEvolve

[https://github.com/tianyi-stack/madevolve#madevolve](https://github.com/tianyi-stack/madevolve#madevolve)

**A General-Purpose LLM-Driven Evolution Framework for Code Optimization**

MadEvolve is a flexible framework that combines Large Language Models with evolutionary algorithms to automatically evolve, optimize, and improve code. It implements quality-diversity optimization through MAP-Elites with island models, supports multiple LLM providers, and provides comprehensive result analysis.

## Table of Contents

[https://github.com/tianyi-stack/madevolve#table-of-contents](https://github.com/tianyi-stack/madevolve#table-of-contents)

- [Features](https://github.com/tianyi-stack/madevolve#features)
- [Installation](https://github.com/tianyi-stack/madevolve#installation)
- [Quick Start](https://github.com/tianyi-stack/madevolve#quick-start)
- [Configuration](https://github.com/tianyi-stack/madevolve#configuration)
- [Architecture](https://github.com/tianyi-stack/madevolve#architecture)
- [LLM Providers](https://github.com/tianyi-stack/madevolve#llm-providers)
- [Domain Adapters](https://github.com/tianyi-stack/madevolve#domain-adapters)
- [API Reference](https://github.com/tianyi-stack/madevolve#api-reference)
- [License](https://github.com/tianyi-stack/madevolve#license)

## Features

[https://github.com/tianyi-stack/madevolve#features](https://github.com/tianyi-stack/madevolve#features)

### Evolution Strategies

[https://github.com/tianyi-stack/madevolve#evolution-strategies](https://github.com/tianyi-stack/madevolve#evolution-strategies)

- **Differential Evolution**: SEARCH/REPLACE patch-based mutations for precise, targeted changes
- **Holistic Rewriting**: Complete function rewrites guided by LLM understanding
- **Synthesis & Crossover**: Combine successful traits from multiple elite programs
- **Hybrid Strategies**: Adaptive switching between mutation strategies based on progress

### Quality-Diversity Optimization

[https://github.com/tianyi-stack/madevolve#quality-diversity-optimization](https://github.com/tianyi-stack/madevolve#quality-diversity-optimization)

- **MAP-Elites Grid**: Multi-dimensional behavior characterization for diverse solutions
- **Island Model**: Parallel populations with periodic migration for exploration
- **Elite Archives**: Persistent storage of best solutions per behavior niche

### Multi-Provider LLM Support

[https://github.com/tianyi-stack/madevolve#multi-provider-llm-support](https://github.com/tianyi-stack/madevolve#multi-provider-llm-support)

- Unified interface for OpenAI, Anthropic Claude, Google Gemini, and DeepSeek
- Adaptive model selection using bandit algorithms (UCB, Thompson Sampling)
- Automatic fallback and retry mechanisms
- Cost tracking and budget management

### Execution Backends

[https://github.com/tianyi-stack/madevolve#execution-backends](https://github.com/tianyi-stack/madevolve#execution-backends)

- **Native**: Local subprocess execution with timeout handling
- **SLURM**: HPC cluster support for large-scale experiments

### Analysis & Reporting

[https://github.com/tianyi-stack/madevolve#analysis--reporting](https://github.com/tianyi-stack/madevolve#analysis--reporting)

- LLM-powered insight generation
- Markdown/HTML reports with evolution visualization
- Extensible adapter system for domain-specific analysis (metrics, prompts, templates)

## Installation

[https://github.com/tianyi-stack/madevolve#installation](https://github.com/tianyi-stack/madevolve#installation)

### Basic Installation

[https://github.com/tianyi-stack/madevolve#basic-installation](https://github.com/tianyi-stack/madevolve#basic-installation)

```
pip install -e .
```

### With Optional Dependencies

[https://github.com/tianyi-stack/madevolve#with-optional-dependencies](https://github.com/tianyi-stack/madevolve#with-optional-dependencies)

```
# Google Gemini support
pip install -e ".[google]"

# Bayesian optimization for inner-loop tuning
pip install -e ".[optimizer]"

# Syntax tree parsing
pip install -e ".[parsing]"

# Structural similarity metrics
pip install -e ".[similarity]"

# Full installation (all features)
pip install -e ".[full]"

# Development dependencies
pip install -e ".[dev]"

# Everything
pip install -e ".[all]"
```

### Environment Variables

[https://github.com/tianyi-stack/madevolve#environment-variables](https://github.com/tianyi-stack/madevolve#environment-variables)

Set API keys for your LLM providers:

```
export OPENAI_API_KEY="sk-..."
export ANTHROPIC_API_KEY="sk-ant-..."
export GOOGLE_API_KEY="..."
export DEEPSEEK_API_KEY="..."
```

## Quick Start

[https://github.com/tianyi-stack/madevolve#quick-start](https://github.com/tianyi-stack/madevolve#quick-start)

### Command Line Interface

[https://github.com/tianyi-stack/madevolve#command-line-interface](https://github.com/tianyi-stack/madevolve#command-line-interface)

```
# Run evolution with a configuration file
madevolve run -c config.yaml -o ./results

# Resume from a checkpoint
madevolve run -c config.yaml -o ./results --resume checkpoint.pkl

# Run without banner
madevolve run -c config.yaml -o ./results --quiet

# Show version
madevolve version
```

### Python API

[https://github.com/tianyi-stack/madevolve#python-api](https://github.com/tianyi-stack/madevolve#python-api)

```
from madevolve import (
    EvolutionOrchestrator,
    EvolutionConfig,
    PopulationConfig,
    ModelConfig,
    ExecutorConfig,
)

# Configure the evolution
config = EvolutionConfig(
    population=PopulationConfig(
        size=50,
        elite_size=10,
        island_count=4,
    ),
    model=ModelConfig(
        primary="gpt-4o",
        fallback="claude-sonnet-4-20250514",
    ),
    executor=ExecutorConfig(
        backend="native",
        timeout=300,
    ),
    generations=100,
    mutation_rate=0.8,
    crossover_rate=0.2,
)

# Create and run the orchestrator
orchestrator = EvolutionOrchestrator(
    config=config,
    results_dir="./results",
)
orchestrator.run()
```

## Configuration

[https://github.com/tianyi-stack/madevolve#configuration](https://github.com/tianyi-stack/madevolve#configuration)

Create a YAML configuration file:

```
# config.yaml

# Model configuration
models:
  primary: gpt-4o              # Primary model for evolution
  fallback: claude-sonnet-4-20250514  # Fallback model on failure
  selection_strategy: ucb      # Options: ucb, thompson, random, fixed

# Population settings
population:
  size: 50                     # Total population size
  elite_size: 10               # Number of elite solutions to preserve
  island_count: 4              # Number of parallel islands
  migration_interval: 10       # Generations between migrations
  migration_rate: 0.1          # Fraction of population to migrate

# Evolution parameters
evolution:
  generations: 100             # Maximum generations
  mutation_rate: 0.8           # Probability of mutation
  crossover_rate: 0.2          # Probability of crossover
  strategy: hybrid             # Options: differential, holistic, hybrid

# Execution settings
executor:
  backend: native              # Options: native, slurm
  timeout: 300                 # Evaluation timeout (seconds)
  max_retries: 3               # Retries on failure
  parallel_workers: 4          # Concurrent evaluations

# Storage settings
storage:
  checkpoint_interval: 10      # Save checkpoint every N generations
  cache_enabled: true          # Enable LLM response caching
  database_path: ./cache.db    # SQLite cache location

# Inner-loop optimization (optional)
inner_loop:
  enabled: false
  method: grid_search          # Options: grid_search, bayesian, autodiff
  budget: 100                  # Evaluation budget per candidate
```

### Configuration via JSON

[https://github.com/tianyi-stack/madevolve#configuration-via-json](https://github.com/tianyi-stack/madevolve#configuration-via-json)

Configuration files can also be in JSON format:

```
{
  "models": {
    "primary": "gpt-4o",
    "fallback": "claude-sonnet-4-20250514"
  },
  "population": {
    "size": 50,
    "elite_size": 10
  },
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

