---
repo: alberto-codes/gepa-adk
url: https://github.com/alberto-codes/gepa-adk
content_timestamp: 2026-03-11
time_slice: 2026-03
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Alberto-Codes/gepa-adk · GitHub

**Source**: https://github.com/alberto-codes/gepa-adk

---

[Skip to content](https://github.com/alberto-codes/gepa-adk#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Alberto-Codes](https://github.com/Alberto-Codes)

/
**[gepa-adk](https://github.com/Alberto-Codes/gepa-adk)**

Public

- [Notifications](https://github.com/login?return_to=%2FAlberto-Codes%2Fgepa-adk)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FAlberto-Codes%2Fgepa-adk)
- 
[Star
          1](https://github.com/login?return_to=%2FAlberto-Codes%2Fgepa-adk)

[https://github.com/Alberto-Codes/gepa-adk](https://github.com/Alberto-Codes/gepa-adk)

[Branches](https://github.com/Alberto-Codes/gepa-adk/branches)[Tags](https://github.com/Alberto-Codes/gepa-adk/tags)

[https://github.com/Alberto-Codes/gepa-adk/branches](https://github.com/Alberto-Codes/gepa-adk/branches)[https://github.com/Alberto-Codes/gepa-adk/tags](https://github.com/Alberto-Codes/gepa-adk/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History208 Commits208 Commits |  |  |  |
| .claude | .claude |  |  |
| .codex/prompts | .codex/prompts |  |  |
| .cursor | .cursor |  |  |
| .gemini/commands | .gemini/commands |  |  |
| .github | .github |  |  |
| .specify | .specify |  |  |
| _bmad-output | _bmad-output |  |  |
| _bmad | _bmad |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| scripts | scripts |  |  |
| specs | specs |  |  |
| src/gepa_adk | src/gepa_adk |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .mcp.json | .mcp.json |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .python-version | .python-version |  |  |
| .release-please-manifest.json | .release-please-manifest.json |  |  |
| .yamllint.yaml | .yamllint.yaml |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| NOTICE | NOTICE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| release-please-config.json | release-please-config.json |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/Alberto-Codes/gepa-adk/actions/workflows/tests.yml](https://github.com/Alberto-Codes/gepa-adk/actions/workflows/tests.yml)[https://codecov.io/gh/Alberto-Codes/gepa-adk](https://codecov.io/gh/Alberto-Codes/gepa-adk)[https://pypi.org/project/gepa-adk/](https://pypi.org/project/gepa-adk/)[https://pypi.org/project/gepa-adk/](https://pypi.org/project/gepa-adk/)[https://github.com/Alberto-Codes/gepa-adk/blob/main/LICENSE](https://github.com/Alberto-Codes/gepa-adk/blob/main/LICENSE)[https://github.com/astral-sh/ruff](https://github.com/astral-sh/ruff)[https://github.com/Alberto-Codes/docvet](https://github.com/Alberto-Codes/docvet)

# gepa-adk

[https://github.com/alberto-codes/gepa-adk#gepa-adk](https://github.com/alberto-codes/gepa-adk#gepa-adk)

Evolutionary optimization for Google ADK agents.

## What is this?

[https://github.com/alberto-codes/gepa-adk#what-is-this](https://github.com/alberto-codes/gepa-adk#what-is-this)

`gepa-adk` evolves AI agent instructions automatically. Give it an agent and training examples, and it finds better prompts through iterative improvement using genetic algorithms and Pareto frontier selection.

Supports single-agent evolution, multi-agent co-evolution, workflow optimization (Sequential, Loop, Parallel agents), output schema evolution, generation config tuning, and multimodal inputs including video.

## Requirements

[https://github.com/alberto-codes/gepa-adk#requirements](https://github.com/alberto-codes/gepa-adk#requirements)

- Python 3.12+
- [Ollama](https://ollama.ai) with a local model (recommended for development), or any model supported by [LiteLLM](https://docs.litellm.ai/)

## Installation

[https://github.com/alberto-codes/gepa-adk#installation](https://github.com/alberto-codes/gepa-adk#installation)

```
pip install gepa-adk
```

```
# For local models (recommended)
export OLLAMA_API_BASE=http://localhost:11434
```

## Quick Start

[https://github.com/alberto-codes/gepa-adk#quick-start](https://github.com/alberto-codes/gepa-adk#quick-start)

Evolve a greeting agent to produce formal, Dickens-style greetings:

```
from google.adk.agents import LlmAgent
from google.adk.models.lite_llm import LiteLlm
from gepa_adk import evolve, run_sync, EvolutionConfig, SimpleCriticOutput

model = LiteLlm(model="ollama_chat/llama3.2:latest")

agent = LlmAgent(
    name="greeter",
    model=model,
    instruction="Greet the user appropriately.",
)

critic = LlmAgent(
    name="critic",
    model=model,
    instruction="Score for formal, Dickens-style greetings. 0.0-1.0.",
    output_schema=SimpleCriticOutput,
)

trainset = [
    {"input": "I am His Majesty, the King."},
    {"input": "I am your mother."},
    {"input": "I am a close friend."},
]

config = EvolutionConfig(
    max_iterations=5,
    patience=1,
    reflection_model="ollama_chat/llama3.2:latest",
)
result = run_sync(evolve(agent, trainset, critic=critic, config=config))
print(f"Score: {result.original_score:.2f} -> {result.final_score:.2f}")
print(result.evolved_components["instruction"])
```

## Examples

[https://github.com/alberto-codes/gepa-adk#examples](https://github.com/alberto-codes/gepa-adk#examples)

**Getting started:**

- [basic_evolution.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/basic_evolution.py) — Single agent with critic
- [critic_agent.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/critic_agent.py) — Story generation with dedicated critic
- [custom_reflection_prompt.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/custom_reflection_prompt.py) — Custom reflection prompts

**Multi-agent & workflows:**

- [multi_agent.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/multi_agent.py) — Multi-agent co-evolution
- [loop_agent_evolution.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/loop_agent_evolution.py) — LoopAgent workflow evolution
- [parallel_agent_evolution.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/parallel_agent_evolution.py) — ParallelAgent workflow evolution
- [nested_workflow_evolution.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/nested_workflow_evolution.py) — Nested workflow evolution

**Advanced:**

- [schema_evolution_example.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/schema_evolution_example.py) — Output schema evolution
- [config_evolution_demo.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/config_evolution_demo.py) — Generation config evolution
- [video_transcription_evolution.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/video_transcription_evolution.py) — Video input evolution
- [app_runner_integration.py](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/examples/app_runner_integration.py) — ADK App/Runner integration

## Documentation

[https://github.com/alberto-codes/gepa-adk#documentation](https://github.com/alberto-codes/gepa-adk#documentation)

[Getting Started](https://alberto-codes.github.io/gepa-adk/getting-started/) · [Guides](https://alberto-codes.github.io/gepa-adk/guides/single-agent/) · [API Reference](https://alberto-codes.github.io/gepa-adk/reference/)

## Credits

[https://github.com/alberto-codes/gepa-adk#credits](https://github.com/alberto-codes/gepa-adk#credits)

Based on [GEPA](https://arxiv.org/abs/2507.19457) ([source](https://github.com/gepa-ai/gepa)). Built on [Google ADK](https://google.github.io/adk-docs/) ([source](https://github.com/google/adk-python)).

## License

[https://github.com/alberto-codes/gepa-adk#license](https://github.com/alberto-codes/gepa-adk#license)

[Apache 2.0](https://github.com/Alberto-Codes/gepa-adk/blob/HEAD/LICENSE)

## About

[alberto-codes.github.io/gepa-adk/](https://alberto-codes.github.io/gepa-adk/)

### Resources

[Readme](https://github.com/alberto-codes/gepa-adk#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/alberto-codes/gepa-adk#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/alberto-codes/gepa-adk#contributing-ov-file)

### Security policy

[Security policy](https://github.com/alberto-codes/gepa-adk#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Alberto-Codes/gepa-adk/activity)

### Stars

[1
        star](https://github.com/Alberto-Codes/gepa-adk/stargazers)

### Watchers

[0
        watching](https://github.com/Alberto-Codes/gepa-adk/watchers)

### Forks

[0
        forks](https://github.com/Alberto-Codes/gepa-adk/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FAlberto-Codes%2Fgepa-adk&report=Alberto-Codes+%28user%29)

## [Releases
      16](https://github.com/Alberto-Codes/gepa-adk/releases)

[v2.1.0
        
          Latest
      
      Mar 11, 2026](https://github.com/Alberto-Codes/gepa-adk/releases/tag/v2.1.0)
[+ 15 releases](https://github.com/Alberto-Codes/gepa-adk/releases)

## [Packages
      0](https://github.com/users/Alberto-Codes/packages?repo_name=gepa-adk)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Alberto-Codes/gepa-adk/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.3%](https://github.com/Alberto-Codes/gepa-adk/search?l=python)
- [Shell
          2.5%](https://github.com/Alberto-Codes/gepa-adk/search?l=shell)
- [Groovy
          0.2%](https://github.com/Alberto-Codes/gepa-adk/search?l=groovy)

     You can’t perform that action at this time.
