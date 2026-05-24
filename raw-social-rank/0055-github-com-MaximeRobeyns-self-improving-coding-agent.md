# MaximeRobeyns/self_improving_coding_agent

- URL: https://github.com/MaximeRobeyns/self_improving_coding_agent/
- Platform: github.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:twitter.com "AI agent" "self-improving"

## Raw Content

## GitHub - MaximeRobeyns/self_improving_coding_agent: A coding agent framework, that works on its own codebase. · GitHub

**Source**: https://github.com/MaximeRobeyns/self_improving_coding_agent/

---

[Skip to content](https://github.com/MaximeRobeyns/self_improving_coding_agent/#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[MaximeRobeyns](https://github.com/MaximeRobeyns)

/
**[self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FMaximeRobeyns%2Fself_improving_coding_agent)You must be signed in to change notification settings
- [Fork
    56](https://github.com/login?return_to=%2FMaximeRobeyns%2Fself_improving_coding_agent)
- 
[Star
          328](https://github.com/login?return_to=%2FMaximeRobeyns%2Fself_improving_coding_agent)

[https://github.com/MaximeRobeyns/self_improving_coding_agent](https://github.com/MaximeRobeyns/self_improving_coding_agent)

[Branches](https://github.com/MaximeRobeyns/self_improving_coding_agent/branches)[Tags](https://github.com/MaximeRobeyns/self_improving_coding_agent/tags)

[https://github.com/MaximeRobeyns/self_improving_coding_agent/branches](https://github.com/MaximeRobeyns/self_improving_coding_agent/branches)[https://github.com/MaximeRobeyns/self_improving_coding_agent/tags](https://github.com/MaximeRobeyns/self_improving_coding_agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| base_agent | base_agent |  |  |
| benchmark_data | benchmark_data |  |  |
| figures | figures |  |  |
| results/interactive_output/agent_outputs | results/interactive_output/agent_outputs |  |  |
| sandbox | sandbox |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| CITATION.cff | CITATION.cff |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| runner.py | runner.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Improving Coding Agent

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#self-improving-coding-agent](https://github.com/MaximeRobeyns/self_improving_coding_agent/#self-improving-coding-agent)

A coding agent experiment, that works on its own codebase.

[https://github.com/MaximeRobeyns/self_improving_coding_agent/blob/master/figures/agent_loop.png](https://github.com/MaximeRobeyns/self_improving_coding_agent/blob/master/figures/agent_loop.png)

The system operates as an iterative improvement loop:

1. evaluating the current agent version on some benchmark tasks to capture how well it does
2. storing the results in an archive
3. running the agent on its own codebase to work on an improvement
4. going back to step 1 with the updated agent code

See [our workshop paper](https://openreview.net/pdf?id=rShJCyLsOr) for more details.

## Quickstart

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#quickstart](https://github.com/MaximeRobeyns/self_improving_coding_agent/#quickstart)

> IMPORTANT NOTE: always run the agent in the provided Docker container. Since the agent can execute shell commands, this offers some isolation from your host machine, avoiding inadvertent file system manipulation and similar risks.

First, make sure you've cloned the repo

```
git clone https://github.com/MaximeRobeyns/self_improving_coding_agent
```

Then, export some environment variables which will be made available in the docker container. The project supports inference from a number of providers to allow for experimentation across many models. You must export at least one of these in your *local* shell, which you can do either directly or with `direnv`, `dotenv`, etc. Omitting any provider key will simply make that provider's models unavailable to the agent.

```
export ANTHROPIC_API_KEY=  # For Claude models
export OPENAI_API_KEY=  # For GPT 4o and reasoning models (o1, o3, etc)
export GEMINI_API_KEY=  # For Gemini models
export VERTEX_PROJECT_ID=  # For models hosted on GCP's Vertex
export FIREWORKS_AI_API_KEY=  # For DeepSeek / Llama hosted on fireworks
export DEEPSEEK_API_KEY=  # For DeepSeek direct inference (V3, R1)
export MODAL_TOKEN_ID=  # To allow the agent to visit webpages and read papers
export MODAL_TOKEN_SECRET=  # To allow the agent to visit webpages and read papers
```

For gemini, you should replace the template file in `sandbox/GOOGLE_APPLICATION_CREDENTIALS.json` with your own credentials.

Once you have at least one LLM provider's API key exported, you can build the docker image. The build command is wrapped in a Makefile target for convenience:

```
make image
```

If you are using an apple silicon machine, use this target instead:

```
make image-mac
```

Finally, install the requirements in your local python environment:

```
# remember to activate a virtual environment or equivalent here
pip install -r base_agent/requirements.txt
pip install swebench
```

### Testing the Agent

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#testing-the-agent](https://github.com/MaximeRobeyns/self_improving_coding_agent/#testing-the-agent)

To test if the setup was successful, you can run the agent interactively with a manually set initial prompt using this target

```
make int
```

This will start the docker container and attach your shell to it. You can then run

```
python -m agent_code.agent --server true -p "<some initial request here>"
```

Then open your browser on [http://localhost:8080](http://localhost:8080) to follow the agent execution. This will show you an interactive webpage which visualises the events in the event bus / the agent callgraph, allowing you to click on individual events to see them in more detail, read overseer messages, and collapse sub-agent traces.

[https://github.com/MaximeRobeyns/self_improving_coding_agent/blob/master/figures/agent_execution.png](https://github.com/MaximeRobeyns/self_improving_coding_agent/blob/master/figures/agent_execution.png)

The agent's working directory is mapped to `results/interactive_output` and any files created will be available here on your machine. Agent logs will be in `results/interactive_output/agent_output`.

You can see more options by doing

```
make help
```

or agent arguments wit

```
python -m base_agent.agent --help
```

To further configure the agent, including the choice of LLMs, edit `base_agent/src/config.py`.

## Self-Improvement Loop

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#self-improvement-loop](https://github.com/MaximeRobeyns/self_improving_coding_agent/#self-improvement-loop)

To run the self-improvement loop, first inspect the list of benchmarks in the `base_agent/src/benchmarks/__init__.py` file, and make sure that you have uncommented those you want to include. Then do

```
python runner.py
```

To see all the options, do

```
python runner.py --help
```

Common options might be

```
python runner.py --id 1 --workers 6
```

This will start the agent loop, placing the results in `results/run_<id>`.

## Things to work on

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#things-to-work-on](https://github.com/MaximeRobeyns/self_improving_coding_agent/#things-to-work-on)

Here are some potential things to try and do with the agent framework:

-  get the agent to curate / build more of its own benchmarks
-  reduce the variance of self-improvement runs (early features often influence subsequent features)
-  use a stronger LLM to build a scaffold for a weaker LLM
-  find or create more realistic 'software engineering' benchmark tasks

## Agent Description

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#agent-description](https://github.com/MaximeRobeyns/self_improving_coding_agent/#agent-description)

The agent in `base_agent` is a minimal agent that can just about perform the meta-improvement task. It lacks efficient file editing tools, devtools such as tree sitter or LSP integrations, or advanced reasoning structures that would help it out when performing coding tasks. It has the necessary building blocks to bootstrap these features and specialise itself to the distribution of benchmark tasks included.

Please see `base_agent/README.md` for a more detailed discussion of the base agent framework.

```
├── base_agent
│   ├── agent_change_log.md
│   ├── agent.py
│   ├── conftest.py
│   ├── description.txt
│   ├── __main__.py
│   ├── pytest.ini
│   ├── README.md
│   ├── requirements.txt
│   ├── src
│   │   ├── agents
│   │   ├── benchmarks
│   │   ├── callgraph
│   │   ├── config.py
│   │   ├── events
│   │   ├── __init__.py
│   │   ├── llm
│   │   ├── oversight
│   │   ├── schemas
│   │   ├── tools
│   │   ├── types
│   │   ├── utils
│   │   └── web_server
│   └── tests
│       ├── agents
│       ├── benchmarks
│       ├── events
│       ├── __pycache__
│       ├── test_example.py
│       ├── tools
│       └── utils
├── benchmark_data
├── results
│   ├── run_<id>
│   └── interactive_output
├── runner.py
└── sandbox
```

### Results Organization

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#results-organization](https://github.com/MaximeRobeyns/self_improving_coding_agent/#results-organization)

```
results/run_{id}/
├── metadata.json          # Experiment metadata
└── agent_{i}/             # Agent iteration directory
    ├── agent_code/        # Agent implementation
    ├── benchmarks/        # Benchmark results
    │   └── {bench_name}/
    │       ├── results.jsonl  # Per-problem results
    │       ├── perf.jsonl     # Summary metrics
    │       └── traces/        # Detailed traces
    └── meta_improvement/  # Improvement logs
```

## Citation

[https://github.com/MaximeRobeyns/self_improving_coding_agent/#citation](https://github.com/MaximeRobeyns/self_improving_coding_agent/#citation)

```
@inproceedings{
    robeyns2025sica,
    title={{SICA} A Self-Improving Coding Agent},
    author={Maxime Robeyns, Martin Szummer, and Laurence Aitchison},
    booktitle={ICLR 2025 Workshop on Scaling Self-Improving Foundation Models},
    year={2025},
    url={https://openreview.net/forum?id=rShJCyLsOr}
}
```

## About

         A coding agent framework, that works on its own codebase.       

### Resources

[Readme](https://github.com/MaximeRobeyns/self_improving_coding_agent/#readme-ov-file)

### License

[MIT license](https://github.com/MaximeRobeyns/self_improving_coding_agent/#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/MaximeRobeyns/self_improving_coding_agent/activity)

### Stars

[328
        stars](https://github.com/MaximeRobeyns/self_improving_coding_agent/stargazers)

### Watchers

[11
        watching](https://github.com/MaximeRobeyns/self_improving_coding_agent/watchers)

### Forks

[56
        forks](https://github.com/MaximeRobeyns/self_improving_coding_agent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FMaximeRobeyns%2Fself_improving_coding_agent&report=MaximeRobeyns+%28user%29)

## [Releases](https://github.com/MaximeRobeyns/self_improving_coding_agent/releases)

No releases published

## [Packages
      0](https://github.com/users/MaximeRobeyns/packages?repo_name=self_improving_coding_agent)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/MaximeRobeyns/self_improving_coding_agent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          96.3%](https://github.com/MaximeRobeyns/self_improving_coding_agent/search?l=python)
- [JavaScript
          2.6%](https://github.com/MaximeRobeyns/self_improving_coding_agent/search?l=javascript)
- [Dockerfile
          0.5%](https://github.com/MaximeRobeyns/self_improving_coding_agent/search?l=dockerfile)
- [Makefile
          0.3%](https://github.com/MaximeRobeyns/self_improving_coding_agent/search?l=makefile)
- [CSS
          0.2%](https://github.com/MaximeRobeyns/self_improving_coding_agent/search?l=css)
- [HTML
          0.1%](https://github.com/MaximeRobeyns/self_improving_coding_agent/search?l=html)

     You can’t perform that action at this time.
