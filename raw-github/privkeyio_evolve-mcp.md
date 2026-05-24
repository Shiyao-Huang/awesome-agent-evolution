---
repo: privkeyio/evolve-mcp
url: https://github.com/privkeyio/evolve-mcp
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - privkeyio/evolve-mcp: Universal MCP server for agent self-improvement via evolutionary algorithms. · GitHub

**Source**: https://github.com/privkeyio/evolve-mcp

---

[Skip to content](https://github.com/privkeyio/evolve-mcp#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[privkeyio](https://github.com/privkeyio)

/
**[evolve-mcp](https://github.com/privkeyio/evolve-mcp)**

Public

- [Notifications](https://github.com/login?return_to=%2Fprivkeyio%2Fevolve-mcp)You must be signed in to change notification settings
- [Fork
    4](https://github.com/login?return_to=%2Fprivkeyio%2Fevolve-mcp)
- 
[Star
          11](https://github.com/login?return_to=%2Fprivkeyio%2Fevolve-mcp)

[https://github.com/privkeyio/evolve-mcp](https://github.com/privkeyio/evolve-mcp)

[Branches](https://github.com/privkeyio/evolve-mcp/branches)[Tags](https://github.com/privkeyio/evolve-mcp/tags)

[https://github.com/privkeyio/evolve-mcp/branches](https://github.com/privkeyio/evolve-mcp/branches)[https://github.com/privkeyio/evolve-mcp/tags](https://github.com/privkeyio/evolve-mcp/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History10 Commits10 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| docs | docs |  |  |
| evolution | evolution |  |  |
| evolve_core | evolve_core |  |  |
| mcp_server | mcp_server |  |  |
| monitoring | monitoring |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pytest.ini | pytest.ini |  |  |
| requirements.txt | requirements.txt |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# evolve-mcp

[https://github.com/privkeyio/evolve-mcp#evolve-mcp](https://github.com/privkeyio/evolve-mcp#evolve-mcp)

Universal MCP server for agent self-improvement via evolutionary algorithms.

[https://github.com/privkeyio/evolve-mcp/blob/main/LICENSE](https://github.com/privkeyio/evolve-mcp/blob/main/LICENSE)[https://www.python.org/downloads/](https://www.python.org/downloads/)

## What is evolve-mcp?

[https://github.com/privkeyio/evolve-mcp#what-is-evolve-mcp](https://github.com/privkeyio/evolve-mcp#what-is-evolve-mcp)

evolve-mcp is an MCP (Model Context Protocol) server that enables autonomous self-improvement for AI agents. It works with **Claude Code**, **Goose**, **ChatGPT**, and any MCP-compatible client.

Agents evolve by:

- Mutating and optimizing prompts using genetic algorithms
- Evaluating fitness through configurable metrics
- Validating safety before deployment
- Tracking performance over time

Inspired by Darwin Gödel Machine and AlphaEvolve, it focuses on openness, modularity, and user control with a local-first design.

## Features

[https://github.com/privkeyio/evolve-mcp#features](https://github.com/privkeyio/evolve-mcp#features)

- **21 MCP Tools** for complete evolution control
- **5 Mutation Strategies**: paraphrase, instruction_add, context_expand, cot_injection, tone_shift
- **Pluggable Fitness Functions** with weighted scoring
- **Safety Validation** with injection detection
- **Metrics Collection** with anomaly detection
- **Works with any MCP client**

## Quick Start

[https://github.com/privkeyio/evolve-mcp#quick-start](https://github.com/privkeyio/evolve-mcp#quick-start)

### Installation

[https://github.com/privkeyio/evolve-mcp#installation](https://github.com/privkeyio/evolve-mcp#installation)

```
git clone https://github.com/privkeyio/evolve-mcp.git
cd evolve-mcp
uv sync --all-extras
```

### Claude Code

[https://github.com/privkeyio/evolve-mcp#claude-code](https://github.com/privkeyio/evolve-mcp#claude-code)

```
claude mcp add evolve-mcp -- python -m mcp_server.server
```

### Goose

[https://github.com/privkeyio/evolve-mcp#goose](https://github.com/privkeyio/evolve-mcp#goose)

```
# ~/.config/goose/config.yaml
extensions:
  - name: evolve-mcp
    type: mcp
    command: python -m mcp_server.server
```

## Usage Examples

[https://github.com/privkeyio/evolve-mcp#usage-examples](https://github.com/privkeyio/evolve-mcp#usage-examples)

### Start an Evolution Cycle

[https://github.com/privkeyio/evolve-mcp#start-an-evolution-cycle](https://github.com/privkeyio/evolve-mcp#start-an-evolution-cycle)

```
# Use the start_evolution tool
{
  "trigger_type": "manual",
  "config_overrides": {
    "population_size": 50,
    "max_generations": 10
  }
}
```

### Mutate a Prompt

[https://github.com/privkeyio/evolve-mcp#mutate-a-prompt](https://github.com/privkeyio/evolve-mcp#mutate-a-prompt)

```
# Use the mutate_prompt tool
{
  "prompt": "You are a helpful assistant",
  "mutation_type": "instruction_add"
}
```

### Check Safety

[https://github.com/privkeyio/evolve-mcp#check-safety](https://github.com/privkeyio/evolve-mcp#check-safety)

```
# Use the check_safety tool
{
  "text": "Your prompt here",
  "include_policy": true
}
```

## MCP Tools Reference

[https://github.com/privkeyio/evolve-mcp#mcp-tools-reference](https://github.com/privkeyio/evolve-mcp#mcp-tools-reference)

### Evolution Lifecycle (4 tools)

[https://github.com/privkeyio/evolve-mcp#evolution-lifecycle-4-tools](https://github.com/privkeyio/evolve-mcp#evolution-lifecycle-4-tools)

| Tool | Description |
|---|---|
| start_evolution | Begin an evolution cycle |
| get_evolution_status | Check cycle progress |
| cancel_evolution | Stop a running cycle |
| resume_evolution | Resume from checkpoint |

### Variant Generation (5 tools)

[https://github.com/privkeyio/evolve-mcp#variant-generation-5-tools](https://github.com/privkeyio/evolve-mcp#variant-generation-5-tools)

| Tool | Description |
|---|---|
| generate_population | Create variant population |
| mutate_prompt | Apply specific mutation |
| crossover_variants | Combine two variants |
| generate_ab_pair | Create A/B test pair |
| analyze_prompt | Get complexity metrics |

### Fitness Evaluation (5 tools)

[https://github.com/privkeyio/evolve-mcp#fitness-evaluation-5-tools](https://github.com/privkeyio/evolve-mcp#fitness-evaluation-5-tools)

| Tool | Description |
|---|---|
| evaluate_variant | Calculate fitness score |
| explain_fitness | Detailed breakdown |
| register_fitness_function | Add custom metric |
| update_fitness_weights | Adjust weights |
| list_fitness_functions | List available |

### Safety Validation (3 tools)

[https://github.com/privkeyio/evolve-mcp#safety-validation-3-tools](https://github.com/privkeyio/evolve-mcp#safety-validation-3-tools)

| Tool | Description |
|---|---|
| validate_variant | Full safety check |
| check_safety | Quick text check |
| add_safety_pattern | Add custom pattern |

### Metrics (4 tools)

[https://github.com/privkeyio/evolve-mcp#metrics-4-tools](https://github.com/privkeyio/evolve-mcp#metrics-4-tools)

| Tool | Description |
|---|---|
| record_metrics | Log performance data |
| get_metrics_window | Aggregated metrics |
| check_evolution_trigger | Should evolve? |
| detect_anomalies | Find anomalies |

## Configuration

[https://github.com/privkeyio/evolve-mcp#configuration](https://github.com/privkeyio/evolve-mcp#configuration)

### Environment Variables

[https://github.com/privkeyio/evolve-mcp#environment-variables](https://github.com/privkeyio/evolve-mcp#environment-variables)

| Variable | Default | Description |
|---|---|---|
| EVOLVE_MCP_POPULATION_SIZE | 50 | Default population size |
| EVOLVE_MCP_MAX_GENERATIONS | 10 | Default max generations |
| EVOLVE_MCP_FITNESS_THRESHOLD | 0.95 | Early stop threshold |
| EVOLVE_MCP_MAX_CONCURRENT_CYCLES | 1 | Parallel evolution limit |
| EVOLVE_MCP_CHECKPOINT_DIR | .evolve-mcp/checkpoints | State storage |

## Architecture

[https://github.com/privkeyio/evolve-mcp#architecture](https://github.com/privkeyio/evolve-mcp#architecture)

```
evolve-mcp/
├── mcp_server/          # MCP integration layer
│   ├── server.py        # FastMCP server with 21 tools
│   ├── state.py         # Cycle state management
│   ├── schemas.py       # Pydantic models
│   ├── serializers.py   # JSON serialization
│   └── errors.py        # Error handling
├── evolution/           # Core evolution engine
│   ├── engine.py        # Genetic algorithm orchestration
│   ├── variants.py      # Mutation & crossover
│   ├── fitness.py       # Fitness evaluation
│   └── interfaces.py    # Abstract interfaces
├── evolve_core/         # Infrastructure
│   ├── safety.py        # Safety validation
│   ├── config.py        # Configuration
│   └── logging_config.py
└── monitoring/          # Metrics collection
    └── metrics.py
```

## Current Status

[https://github.com/privkeyio/evolve-mcp#current-status](https://github.com/privkeyio/evolve-mcp#current-status)

### Production-Ready Components

[https://github.com/privkeyio/evolve-mcp#production-ready-components](https://github.com/privkeyio/evolve-mcp#production-ready-components)

- **Evolution Engine** - Full genetic algorithm orchestration with state persistence
- **Variant Generator** - 5 mutation strategies with deterministic mode
- **Fitness Evaluator** - Pareto optimization, parallel evaluation
- **Metrics Collector** - Multi-agent support, anomaly detection
- **Safety Validator** - Injection detection, policy enforcement
- **MCP Server** - 21 tools, 6 resources, 3 prompts

### Test Coverage

[https://github.com/privkeyio/evolve-mcp#test-coverage](https://github.com/privkeyio/evolve-mcp#test-coverage)

- **173+ tests passing** including integration tests
- **~95% coverage** for core components

## Development

[https://github.com/privkeyio/evolve-mcp#development](https://github.com/privkeyio/evolve-mcp#development)

```
# Install dev dependencies
uv sync --all-extras

# Run tests
uv run pytest

# Format code
uv run black .
uv run isort .

# Type check
uv run mypy evolution monitoring evolve_core mcp_server
```

## Contributing

[https://github.com/privkeyio/evolve-mcp#contributing](https://github.com/privkeyio/evolve-mcp#contributing)

See [CONTRIBUTING.md](https://github.com/privkeyio/evolve-mcp/blob/main/CONTRIBUTING.md) for guidelines.

## License

[https://github.com/privkeyio/evolve-mcp#license](https://github.com/privkeyio/evolve-mcp#license)

MIT License - see [LICENSE](https://github.com/privkeyio/evolve-mcp/blob/main/LICENSE) for details.

## Support

[https://github.com/privkeyio/evolve-mcp#support](https://github.com/privkeyio/evolve-mcp#support)

- GitHub Issues: Report bugs or suggest features
- See [architecture.md](https://github.com/privkeyio/evolve-mcp/blob/main/docs/architecture.md) for detailed system design

## Citation

[https://github.com/privkeyio/evolve-mcp#citation](https://github.com/privkeyio/evolve-mcp#citation)

```
@software{evolve-mcp,
  title = {evolve-mcp: Universal MCP Server for Agent Self-Improvement},
  author = {PrivKey LLC},
  year = {2025},
  url = {https://github.com/privkeyio/evolve-mcp}
}
```

## About

         Universal MCP server for agent self-improvement via evolutionary algorithms.       

### Topics

[ai](https://github.com/topics/ai)[mcp](https://github.com/topics/mcp)[goose](https://github.com/topics/goose)

### Resources

[Readme](https://github.com/privkeyio/evolve-mcp#readme-ov-file)

### License

[MIT license](https://github.com/privkeyio/evolve-mcp#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/privkeyio/evolve-mcp#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/privkeyio/evolve-mcp/activity)

[Custom properties](https://github.com/privkeyio/evolve-mcp/custom-properties)

### Stars

[11
        stars](https://github.com/privkeyio/evolve-mcp/stargazers)

### Watchers

[1
        watching](https://github.com/privkeyio/evolve-mcp/watchers)

### Forks

[4
        forks](https://github.com/privkeyio/evolve-mcp/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fprivkeyio%2Fevolve-mcp&report=privkeyio+%28user%29)

## [Releases](https://github.com/privkeyio/evolve-mcp/releases)

No releases published

## [Packages
      0](https://github.com/orgs/privkeyio/packages?repo_name=evolve-mcp)
