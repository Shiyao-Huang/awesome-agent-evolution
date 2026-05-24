---
repo: tsukushiai/self-organized-agent
url: https://github.com/tsukushiai/self-organized-agent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - tsukushiAI/self-organized-agent: A LLM Multi-Agent Framework toward Ultra Large-Scale Code Generation and Optimization · GitHub

**Source**: https://github.com/tsukushiai/self-organized-agent

---

[Skip to content](https://github.com/tsukushiai/self-organized-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[tsukushiAI](https://github.com/tsukushiAI)

/
**[self-organized-agent](https://github.com/tsukushiAI/self-organized-agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FtsukushiAI%2Fself-organized-agent)You must be signed in to change notification settings
- [Fork
    4](https://github.com/login?return_to=%2FtsukushiAI%2Fself-organized-agent)
- 
[Star
          18](https://github.com/login?return_to=%2FtsukushiAI%2Fself-organized-agent)

[https://github.com/tsukushiAI/self-organized-agent](https://github.com/tsukushiAI/self-organized-agent)

[Branches](https://github.com/tsukushiAI/self-organized-agent/branches)[Tags](https://github.com/tsukushiAI/self-organized-agent/tags)

[https://github.com/tsukushiAI/self-organized-agent/branches](https://github.com/tsukushiAI/self-organized-agent/branches)[https://github.com/tsukushiAI/self-organized-agent/tags](https://github.com/tsukushiAI/self-organized-agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| programming_runs | programming_runs |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Organizing Agents

[https://github.com/tsukushiai/self-organized-agent#self-organizing-agents](https://github.com/tsukushiai/self-organized-agent#self-organizing-agents)

This repository contains the implementation of the paper [Self-Organized Agents: A LLM Multi-Agent Framework toward Ultra Large-Scale Code Generation and Optimization (2024)](https://arxiv.org/abs/2404.02183).

The self-organizing agent implementation is located in the `programming_runs/soa` directory. You can execute it using the provided script: `programming_runs/run_soa.sh`.

This repository builds upon the foundational work from [Reflexion](https://github.com/noahshinn/reflexion).

---

## Setup

[https://github.com/tsukushiai/self-organized-agent#setup](https://github.com/tsukushiai/self-organized-agent#setup)

### 1. Clone this repository

[https://github.com/tsukushiai/self-organized-agent#1-clone-this-repository](https://github.com/tsukushiai/self-organized-agent#1-clone-this-repository)

```
git clone https://github.com/tsukushiAI/self-organized-agent.git
cd soa
```

### 2. Install the required packages

[https://github.com/tsukushiai/self-organized-agent#2-install-the-required-packages](https://github.com/tsukushiai/self-organized-agent#2-install-the-required-packages)

```
pip install -r requirements.txt
```

### 3. Configure your OpenAI API key

[https://github.com/tsukushiai/self-organized-agent#3-configure-your-openai-api-key](https://github.com/tsukushiai/self-organized-agent#3-configure-your-openai-api-key)

Set your OpenAI API key as an environment variable:

```
export OPENAI_API_KEY=<your key>
```

---

## Execution

[https://github.com/tsukushiai/self-organized-agent#execution](https://github.com/tsukushiai/self-organized-agent#execution)

Run the self-organizing agents (SOA) framework using the command below:

```
cd programming_runs/
sh run_soa.sh
```

---

## Script Description

[https://github.com/tsukushiai/self-organized-agent#script-description](https://github.com/tsukushiai/self-organized-agent#script-description)

The execution script `run_soa.sh` simplifies running the SOA framework with pre-configured arguments. Below are the details of the script and its parameters.

### `run_soa.sh`

[https://github.com/tsukushiai/self-organized-agent#run_soash](https://github.com/tsukushiai/self-organized-agent#run_soash)

This script runs the main Python program with the following configuration:

```
python main.py \
  --run_name "soa" \
  --root_dir "human-eval-results" \
  --dataset_path benchmarks/humaneval-py.jsonl \
  --strategy "self-org-agent" \
  --language "py" \
  --model "gpt-3.5-turbo-1106" \
  --pass_at_k "1" \
  --max_iters "5" \
  --max_depth "2"
```

### Parameter Details

[https://github.com/tsukushiai/self-organized-agent#parameter-details](https://github.com/tsukushiai/self-organized-agent#parameter-details)

- **`--run_name`**: Specifies the name of the run (used for result organization).
- **`--root_dir`**: Defines the directory where the evaluation results will be saved.
- **`--dataset_path`**: Path to the dataset file (e.g., `humaneval-py.jsonl`).
- **`--strategy`**: Strategy for the framework, set as `"self-org-agent"`.
- **`--language`**: Target programming language (e.g., `"py"` for Python).
- **`--model`**: The model used (e.g., `"gpt-3.5-turbo-1106"`).
- **`--pass_at_k`**: Pass@k metric configuration.
- **`--max_iters`**: Maximum iterations for agent processing.
- **`--max_depth`**: Maximum depth of the agent tree structure.

---

## Citation

[https://github.com/tsukushiai/self-organized-agent#citation](https://github.com/tsukushiai/self-organized-agent#citation)

If you use this framework or reference the paper, please cite it as follows:

```
@article{ishibashi-and-nishimura-2024self,
  title        = {Self-Organized Agents: A LLM Multi-Agent Framework toward Ultra Large-Scale Code Generation and Optimization},
  author       = {Yoichi Ishibashi and Yoshimasa Nishimura},
  journal      = {arXiv},
  volume       = {abs/2404.02183},
  year         = {2024},
  url          = {https://arxiv.org/abs/2404.02183}
}
```

## About

         A LLM Multi-Agent Framework toward Ultra Large-Scale Code Generation and Optimization       

[arxiv.org/abs/2404.02183](https://arxiv.org/abs/2404.02183)

### Resources

[Readme](https://github.com/tsukushiai/self-organized-agent#readme-ov-file)

### License

[MIT license](https://github.com/tsukushiai/self-organized-agent#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/tsukushiAI/self-organized-agent/activity)

[Custom properties](https://github.com/tsukushiAI/self-organized-agent/custom-properties)

### Stars

[18
        stars](https://github.com/tsukushiAI/self-organized-agent/stargazers)

### Watchers

[5
        watching](https://github.com/tsukushiAI/self-organized-agent/watchers)

### Forks

[4
        forks](https://github.com/tsukushiAI/self-organized-agent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FtsukushiAI%2Fself-organized-agent&report=tsukushiAI+%28user%29)

## [Releases](https://github.com/tsukushiAI/self-organized-agent/releases)

No releases published

## [Packages
      0](https://github.com/orgs/tsukushiAI/packages?repo_name=self-organized-agent)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/tsukushiAI/self-organized-agent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.8%](https://github.com/tsukushiAI/self-organized-agent/search?l=python)
- [Shell
          0.2%](https://github.com/tsukushiAI/self-organized-agent/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

