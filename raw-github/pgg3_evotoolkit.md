---
repo: pgg3/evotoolkit
url: https://github.com/pgg3/evotoolkit
content_timestamp: 2026-03-23
time_slice: 2026-03
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - pgg3/evotoolkit: LLM-driven solution evolutionary optimization toolkit · GitHub

**Source**: https://github.com/pgg3/evotoolkit

---

[Skip to content](https://github.com/pgg3/evotoolkit#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[pgg3](https://github.com/pgg3)

/
**[evotoolkit](https://github.com/pgg3/evotoolkit)**

Public

- [Notifications](https://github.com/login?return_to=%2Fpgg3%2Fevotoolkit)You must be signed in to change notification settings
- [Fork
    10](https://github.com/login?return_to=%2Fpgg3%2Fevotoolkit)
- 
[Star
          68](https://github.com/login?return_to=%2Fpgg3%2Fevotoolkit)

[https://github.com/pgg3/evotoolkit](https://github.com/pgg3/evotoolkit)

[Branches](https://github.com/pgg3/evotoolkit/branches)[Tags](https://github.com/pgg3/evotoolkit/tags)

[https://github.com/pgg3/evotoolkit/branches](https://github.com/pgg3/evotoolkit/branches)[https://github.com/pgg3/evotoolkit/tags](https://github.com/pgg3/evotoolkit/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History107 Commits107 Commits |  |  |  |
| .github | .github |  |  |
| docs | docs |  |  |
| examples/custom_task | examples/custom_task |  |  |
| src/evotoolkit | src/evotoolkit |  |  |
| tests | tests |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .readthedocs.yaml | .readthedocs.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| mkdocs_hooks.py | mkdocs_hooks.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements-docs.txt | requirements-docs.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# EvoToolkit

[https://github.com/pgg3/evotoolkit#evotoolkit](https://github.com/pgg3/evotoolkit#evotoolkit)

[https://github.com/pgg3/evotoolkit/actions/workflows/ci.yml](https://github.com/pgg3/evotoolkit/actions/workflows/ci.yml)[https://pypi.org/project/evotoolkit/](https://pypi.org/project/evotoolkit/)[https://pypi.org/project/evotoolkit/](https://pypi.org/project/evotoolkit/)[https://github.com/pgg3/evotoolkit/blob/master/LICENSE](https://github.com/pgg3/evotoolkit/blob/master/LICENSE)[https://evotoolkit.readthedocs.io/](https://evotoolkit.readthedocs.io/)

**EvoToolkit** is a Python toolkit for LLM-driven evolutionary optimization. It provides a modular, three-layer architecture — **Method**, **Interface**, and **Task** — that decouples search algorithms from problem definitions, making it easy to apply evolutionary strategies to diverse domains.

## Key Features

[https://github.com/pgg3/evotoolkit#key-features](https://github.com/pgg3/evotoolkit#key-features)

- **Built-in evolutionary methods**: `EoH`, `EvoEngineer`, and `FunSearch`, ready to use out of the box
- **Extensible task system**: define custom optimization problems via `PythonTask` or `StringTask`
- **LLM-agnostic**: works with any OpenAI-compatible API endpoint
- **Checkpointing**: automatic state persistence and resumable runs
- **Lightweight**: minimal core dependencies (`numpy`, `scipy`)

## Installation

[https://github.com/pgg3/evotoolkit#installation](https://github.com/pgg3/evotoolkit#installation)

```
pip install evotoolkit
```

## Quick Start

[https://github.com/pgg3/evotoolkit#quick-start](https://github.com/pgg3/evotoolkit#quick-start)

```
from evotoolkit import EvoEngineer
from evotoolkit.core import EvaluationResult, TaskSpec
from evotoolkit.task.python_task import EvoEngineerPythonInterface, PythonTask
from evotoolkit.tools import HttpsApi

class MyTask(PythonTask):
    def build_python_spec(self, data) -> TaskSpec:
        return TaskSpec(
            name="square",
            prompt="Write a Python function `f(x)` that returns x squared.",
            modality="python",
        )

    def _evaluate_code_impl(self, candidate_code: str) -> EvaluationResult:
        namespace = {}
        exec(candidate_code, namespace)  # noqa: S102
        fn = namespace.get("f")
        if fn is None:
            return EvaluationResult(valid=False, score=float("-inf"), additional_info={})
        score = -abs(fn(5) - 25)  # closer to 25 is better
        return EvaluationResult(valid=True, score=score, additional_info={})

task = MyTask(data=None)
interface = EvoEngineerPythonInterface(task)
llm = HttpsApi(api_url="https://api.openai.com/v1/chat/completions", key="your-key", model="gpt-4o")
algo = EvoEngineer(interface=interface, output_path="./results", running_llm=llm, max_generations=5)
best = algo.run()
```

See [examples/custom_task/](https://github.com/pgg3/evotoolkit/blob/master/examples/custom_task) for a complete runnable example.

## Documentation

[https://github.com/pgg3/evotoolkit#documentation](https://github.com/pgg3/evotoolkit#documentation)

Full documentation (English & Chinese) is available at [evotoolkit.readthedocs.io](https://evotoolkit.readthedocs.io/).

## License

[https://github.com/pgg3/evotoolkit#license](https://github.com/pgg3/evotoolkit#license)

[MIT](https://github.com/pgg3/evotoolkit/blob/master/LICENSE)

## About

         LLM-driven solution evolutionary optimization toolkit       

[evotoolkit.readthedocs.io/](https://evotoolkit.readthedocs.io/)

### Resources

[Readme](https://github.com/pgg3/evotoolkit#readme-ov-file)

### License

[MIT license](https://github.com/pgg3/evotoolkit#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/pgg3/evotoolkit/activity)

### Stars

[68
        stars](https://github.com/pgg3/evotoolkit/stargazers)

### Watchers

[3
        watching](https://github.com/pgg3/evotoolkit/watchers)

### Forks

[10
        forks](https://github.com/pgg3/evotoolkit/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fpgg3%2Fevotoolkit&report=pgg3+%28user%29)

## [Releases
      3](https://github.com/pgg3/evotoolkit/releases)

[v1.0.2
        
          Latest
      
      Mar 23, 2026](https://github.com/pgg3/evotoolkit/releases/tag/v1.0.2)
[+ 2 releases](https://github.com/pgg3/evotoolkit/releases)

## [Packages
      0](https://github.com/users/pgg3/packages?repo_name=evotoolkit)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/pgg3/evotoolkit/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/pgg3/evotoolkit/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026-03-23
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

