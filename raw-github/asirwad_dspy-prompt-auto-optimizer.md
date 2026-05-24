---
repo: asirwad/dspy-prompt-auto-optimizer
url: https://github.com/asirwad/dspy-prompt-auto-optimizer
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Asirwad/DSPy-Prompt-Auto-Optimizer: A learning-focused exploration of programmatic prompt optimization using the DSPy framework. · GitHub

**Source**: https://github.com/asirwad/dspy-prompt-auto-optimizer

---

[Skip to content](https://github.com/asirwad/dspy-prompt-auto-optimizer#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Asirwad](https://github.com/Asirwad)

/
**[DSPy-Prompt-Auto-Optimizer](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer)**

Public

- [Notifications](https://github.com/login?return_to=%2FAsirwad%2FDSPy-Prompt-Auto-Optimizer)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FAsirwad%2FDSPy-Prompt-Auto-Optimizer)
- 
[Star
          1](https://github.com/login?return_to=%2FAsirwad%2FDSPy-Prompt-Auto-Optimizer)

[https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer)

[Branches](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/branches)[Tags](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/tags)

[https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/branches](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/branches)[https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/tags](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History19 Commits19 Commits |  |  |  |
| artifacts | artifacts |  |  |
| data | data |  |  |
| docker | docker |  |  |
| scripts | scripts |  |  |
| src/dspy_optimizer | src/dspy_optimizer |  |  |
| tests | tests |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .python-version | .python-version |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| main.py | main.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# DSPy Auto-Optimizer

[https://github.com/asirwad/dspy-prompt-auto-optimizer#dspy-auto-optimizer](https://github.com/asirwad/dspy-prompt-auto-optimizer#dspy-auto-optimizer)

A learning-focused exploration of programmatic prompt optimization using the [DSPy](https://github.com/stanfordnlp/dspy) framework.

## The Problem

[https://github.com/asirwad/dspy-prompt-auto-optimizer#the-problem](https://github.com/asirwad/dspy-prompt-auto-optimizer#the-problem)

Manual prompt engineering is fragile. A prompt that works today may fail tomorrow when:

- The model is updated or swapped
- Edge cases appear in production
- Requirements evolve over time

In enterprise settings, teams often maintain hundreds of prompts across different services. Each prompt requires manual tuning, A/B testing, and ongoing maintenance—a process that doesn't scale.

## The DSPy Approach

[https://github.com/asirwad/dspy-prompt-auto-optimizer#the-dspy-approach](https://github.com/asirwad/dspy-prompt-auto-optimizer#the-dspy-approach)

DSPy treats prompts as **learnable programs** rather than static strings. Instead of writing prompts manually, you:

1. **Define what you want** (inputs/outputs as signatures)
2. **Provide training examples** with expected answers
3. **Let optimizers find the best prompt** automatically

```
flowchart LR
    A[Define Signature] --> B[Create Module]
    B --> C[Load Training Data]
    C --> D[Run Optimizer]
    D --> E[Optimized Program]
    E --> F[Better Accuracy]
    
    style D fill:#4CAF50,color:white
    style F fill:#2196F3,color:white
```

Loading

## Project Structure

[https://github.com/asirwad/dspy-prompt-auto-optimizer#project-structure](https://github.com/asirwad/dspy-prompt-auto-optimizer#project-structure)

```
dspy-auto-optimizer/
├── src/dspy_optimizer/
│   ├── config.py           # LLM configuration (Ollama)
│   ├── signatures/          # Task definitions (input → output)
│   ├── modules/             # Executable DSPy programs
│   ├── data/                # Dataset loading utilities
│   ├── metrics/             # Evaluation functions
│   └── optimization/        # Optimizer wrappers
├── scripts/
│   ├── run_baseline.py      # Measure unoptimized accuracy
│   ├── run_optimization.py  # BootstrapFewShot optimization
│   └── run_mipro.py         # MIPROv2 advanced optimization
├── data/
│   └── math_problems.json   # Training/validation data
├── docker/
│   └── docker-compose.yml   # Ollama container setup
└── artifacts/               # Saved optimized programs
```

## How It Works

[https://github.com/asirwad/dspy-prompt-auto-optimizer#how-it-works](https://github.com/asirwad/dspy-prompt-auto-optimizer#how-it-works)

```
sequenceDiagram
    participant User
    participant DSPy
    participant LLM
    participant Metric
    
    User->>DSPy: Define Signature + Training Data
    loop Optimization
        DSPy->>LLM: Try prompt variation
        LLM-->>DSPy: Model response
        DSPy->>Metric: Evaluate correctness
        Metric-->>DSPy: Score
    end
    DSPy-->>User: Best performing prompt
```

Loading

## Results

[https://github.com/asirwad/dspy-prompt-auto-optimizer#results](https://github.com/asirwad/dspy-prompt-auto-optimizer#results)

Using a small language model (qwen2.5:0.5b, 500M parameters) on math word problems:

| Stage | Accuracy | Notes |
|---|---|---|
| Baseline (zero-shot) | 33.3% | No examples, default prompt |
| BootstrapFewShot | 33.3% | Few-shot examples only |
| MIPROv2 | 55.6% | Optimized instructions + examples |

MIPROv2 improved accuracy by **22 percentage points** by automatically finding better task instructions and few-shot examples.

> **Note:** Results depend heavily on model capability. Larger models may show different improvement patterns.

## Getting Started

[https://github.com/asirwad/dspy-prompt-auto-optimizer#getting-started](https://github.com/asirwad/dspy-prompt-auto-optimizer#getting-started)

### Prerequisites

[https://github.com/asirwad/dspy-prompt-auto-optimizer#prerequisites](https://github.com/asirwad/dspy-prompt-auto-optimizer#prerequisites)

- Python 3.11+
- Docker (for Ollama)
- NVIDIA GPU with 4GB+ VRAM (optional, for local inference)

### Setup

[https://github.com/asirwad/dspy-prompt-auto-optimizer#setup](https://github.com/asirwad/dspy-prompt-auto-optimizer#setup)

```
# Clone the repository
git clone https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer.git
cd DSPy-Prompt-Auto-Optimizer

# Install dependencies with uv
uv sync --extra dev

# Start Ollama container
cd docker && docker compose up -d

# Pull a model
docker exec dspy-ollama ollama pull qwen2.5:0.5b

# Configure environment
cp .env.example .env
# Edit .env with your model choice
```

### Running

[https://github.com/asirwad/dspy-prompt-auto-optimizer#running](https://github.com/asirwad/dspy-prompt-auto-optimizer#running)

```
# Measure baseline accuracy
uv run python scripts/run_baseline.py

# Run BootstrapFewShot optimization
uv run python scripts/run_optimization.py

# Run MIPROv2 (advanced) optimization
uv run python scripts/run_mipro.py
```

## Enterprise Relevance

[https://github.com/asirwad/dspy-prompt-auto-optimizer#enterprise-relevance](https://github.com/asirwad/dspy-prompt-auto-optimizer#enterprise-relevance)

This project demonstrates patterns applicable to production LLM systems:

| Concept | Enterprise Application |
|---|---|
| Automated prompt optimization | Reduce prompt engineering time |
| Metric-driven evaluation | Quantify prompt quality |
| Version-controlled prompts | Reproducible deployments |
| Local model inference | Data privacy compliance |

### Potential Use Cases

[https://github.com/asirwad/dspy-prompt-auto-optimizer#potential-use-cases](https://github.com/asirwad/dspy-prompt-auto-optimizer#potential-use-cases)

- **Customer Support:** Optimize response generation for ticket classification
- **Document Processing:** Improve extraction accuracy for invoices, contracts
- **Code Review:** Tune prompts for automated code analysis
- **Content Moderation:** Optimize classification thresholds

## Limitations

[https://github.com/asirwad/dspy-prompt-auto-optimizer#limitations](https://github.com/asirwad/dspy-prompt-auto-optimizer#limitations)

This is a learning project, not production-ready software:

- Dataset is small (30 examples) for demonstration purposes
- Only tested with math word problems
- Single-task optimization (not multi-task)
- No prompt caching or batching optimizations

## Learning Resources

[https://github.com/asirwad/dspy-prompt-auto-optimizer#learning-resources](https://github.com/asirwad/dspy-prompt-auto-optimizer#learning-resources)

- [DSPy Documentation](https://dspy-docs.vercel.app/)
- [DSPy Paper](https://arxiv.org/abs/2310.03714)
- [Ollama](https://ollama.com/)

## License

[https://github.com/asirwad/dspy-prompt-auto-optimizer#license](https://github.com/asirwad/dspy-prompt-auto-optimizer#license)

MIT

## About

         A learning-focused exploration of programmatic prompt optimization using the DSPy framework.       

### Topics

[dspy](https://github.com/topics/dspy)[prompt-engineering](https://github.com/topics/prompt-engineering)[prompt-optimization](https://github.com/topics/prompt-optimization)

### Resources

[Readme](https://github.com/asirwad/dspy-prompt-auto-optimizer#readme-ov-file)

### License

[MIT license](https://github.com/asirwad/dspy-prompt-auto-optimizer#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/activity)

### Stars

[1
        star](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/stargazers)

### Watchers

[0
        watching](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/watchers)

### Forks

[0
        forks](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FAsirwad%2FDSPy-Prompt-Auto-Optimizer&report=Asirwad+%28user%29)

## [Contributors](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/Asirwad/DSPy-Prompt-Auto-Optimizer/search?l=python)

     You can’t perform that action at this time.
