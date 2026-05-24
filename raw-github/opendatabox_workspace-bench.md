---
repo: opendatabox/workspace-bench
url: https://github.com/opendatabox/workspace-bench
content_timestamp: 2025-05-07
time_slice: 2025-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - OpenDataBox/Workspace-Bench: Benchmark self-evolving Agent upon realistic large-scale file workspaces · GitHub

**Source**: https://github.com/opendatabox/workspace-bench

---

[Skip to content](https://github.com/opendatabox/workspace-bench#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[OpenDataBox](https://github.com/OpenDataBox)

/
**[Workspace-Bench](https://github.com/OpenDataBox/Workspace-Bench)**

Public

- [Notifications](https://github.com/login?return_to=%2FOpenDataBox%2FWorkspace-Bench)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2FOpenDataBox%2FWorkspace-Bench)
- 
[Star
          14](https://github.com/login?return_to=%2FOpenDataBox%2FWorkspace-Bench)

[https://github.com/OpenDataBox/Workspace-Bench](https://github.com/OpenDataBox/Workspace-Bench)

[Branches](https://github.com/OpenDataBox/Workspace-Bench/branches)[Tags](https://github.com/OpenDataBox/Workspace-Bench/tags)

[https://github.com/OpenDataBox/Workspace-Bench/branches](https://github.com/OpenDataBox/Workspace-Bench/branches)[https://github.com/OpenDataBox/Workspace-Bench/tags](https://github.com/OpenDataBox/Workspace-Bench/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History29 Commits29 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| assets | assets |  |  |
| deepagents | deepagents |  |  |
| docs | docs |  |  |
| evaluation | evaluation |  |  |
| viz | viz |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/Workspace-Bench-icon.png](https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/Workspace-Bench-icon.png)

# Workspace-Bench

[https://github.com/opendatabox/workspace-bench#workspace-bench](https://github.com/opendatabox/workspace-bench#workspace-bench)

### Benchmarking AI Agents on Workspace Tasks with Large-Scale File Dependencies

[https://github.com/opendatabox/workspace-bench#benchmarking-ai-agents-on-workspace-tasks-with-large-scale-file-dependencies](https://github.com/opendatabox/workspace-bench#benchmarking-ai-agents-on-workspace-tasks-with-large-scale-file-dependencies)

[https://workspace-bench.github.io/](https://workspace-bench.github.io/)[https://huggingface.co/datasets/Workspace-Bench/Workspace-Bench](https://huggingface.co/datasets/Workspace-Bench/Workspace-Bench)[https://huggingface.co/datasets/Workspace-Bench/Workspace-Bench-Lite](https://huggingface.co/datasets/Workspace-Bench/Workspace-Bench-Lite)[https://arxiv.org/abs/2605.03596](https://arxiv.org/abs/2605.03596)[https://opendatabox.github.io/Workspace-Bench/](https://opendatabox.github.io/Workspace-Bench/)

## 📰 News

[https://github.com/opendatabox/workspace-bench#-news](https://github.com/opendatabox/workspace-bench#-news)

- **[May 07, 2025]**: The full datasets of Version 1.0 are released ([homepage](https://workspace-bench.github.io/), [huggingface](https://huggingface.co/Workspace-Bench))!

## 👋 Overview

[https://github.com/opendatabox/workspace-bench#-overview](https://github.com/opendatabox/workspace-bench#-overview)

Workspace-Bench is a benchmark for evaluating AI agents on **workspace tasks with large-scale file dependencies**. It is built to study a capability we call **Workspace Learning**: whether an agent can identify, reason over, exploit, and update explicit and implicit dependencies among heterogeneous files in a real worker's workspace.

[https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/Frameworkv2.png](https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/Frameworkv2.png)

## 💫 LeaderBoard

[https://github.com/opendatabox/workspace-bench#-leaderboard](https://github.com/opendatabox/workspace-bench#-leaderboard)

[https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/rubrics_success.png](https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/rubrics_success.png)

Rubric pass rates on Workspace-Bench-Lite across multiple combinations of agent harnesses and backbone LLMs [See Details](https://workspace-bench.github.io/leaderboard.html).

## 💽 Dataset Introduction

[https://github.com/opendatabox/workspace-bench#-dataset-introduction](https://github.com/opendatabox/workspace-bench#-dataset-introduction)

Workspace-Bench contains:

[https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/Distribution.png](https://github.com/OpenDataBox/Workspace-Bench/blob/main/assets/Distribution.png)

- **5** realistic worker profiles: Operations Manager, Logistics Manager, AI Product Manager, Researcher, and Backend Developer
- **74** file types across heterogeneous workspace environments
- **20,476** files, with workspaces scaling up to **20GB**
- **388** tasks, each paired with an explicit file dependency graph
- **7,399** fine-grained rubrics for evaluation
- **Workspace-Bench-Lite**, a 100-task subset that preserves the benchmark distribution while reducing evaluation cost by about **70%**

## 🚀 Quick Start

[https://github.com/opendatabox/workspace-bench#-quick-start](https://github.com/opendatabox/workspace-bench#-quick-start)

Follow these steps to download Workspace-Bench-Lite and run a one-task smoke evaluation.

### Prerequisites

[https://github.com/opendatabox/workspace-bench#prerequisites](https://github.com/opendatabox/workspace-bench#prerequisites)

- Docker
- Python 3
- API credentials for the agent you want to run
- An Anthropic-compatible API endpoint for the judge model

```
cd evaluation
cp .env.example .env
```

Fill `.env` before running an evaluation. For the default smoke command below, set `KIMIK25_BASE_URL` and `KIMIK25_API_KEY`. For rubric judging, also set `JUDGE_BASE_URL`, `JUDGE_MODEL`, and `JUDGE_API_KEY`; the judge endpoint must be Anthropic-compatible because `agent_as_a_judge.py` runs the judge through the ClaudeCode harness.

### Download Data

[https://github.com/opendatabox/workspace-bench#download-data](https://github.com/opendatabox/workspace-bench#download-data)

Download the Lite task set and workspace files:

```
python3 scripts/download_hf_assets.py --lite --workspaces
```

### Build Environment

[https://github.com/opendatabox/workspace-bench#build-environment](https://github.com/opendatabox/workspace-bench#build-environment)

```
docker compose -f docker/docker-compose.yaml build
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  bash /workspace/Workspace-Bench/evaluation/docker/bootstrap.sh
```

### Run One Task

[https://github.com/opendatabox/workspace-bench#run-one-task](https://github.com/opendatabox/workspace-bench#run-one-task)

Run a single-task smoke evaluation with Codex:

```
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  bash /workspace/Workspace-Bench/evaluation/docker/run-benchmark.sh \
  --harness codex \
  --model kimi-k2.5 \
  --dataset smoke
```

Check the report:

```
python3 scripts/assert_agent_runner_report.py \
  output/Codex--Kimi-K2.5--Smoke/agent_runner_report.json
```

The expected output is:

```
[ok] output/Codex--Kimi-K2.5--Smoke/agent_runner_report.json: 1/1 passed
```

This report only checks whether the agent run completed and produced the expected output files. To score the task against its rubrics, run `agent_as_a_judge.py` inside Docker:

```
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  python3 -u /workspace/Workspace-Bench/evaluation/src/agent_as_a_judge.py \
  --task-dir /workspace/Workspace-Bench/evaluation/output/Codex--Kimi-K2.5--Smoke \
  --eval-yaml /workspace/Workspace-Bench/evaluation/runs/judge.yaml \
  --overwrite
```

Rubric judgments are written into each task directory as:

```
evaluation/output/Codex--Kimi-K2.5--Smoke/100/rubrics_judge--{JUDGE_MODEL}.json
```

Task outputs, logs, and judge artifacts are written to:

```
evaluation/output/Codex--Kimi-K2.5--Smoke/
```

### Run Workspace-Bench-Lite

[https://github.com/opendatabox/workspace-bench#run-workspace-bench-lite](https://github.com/opendatabox/workspace-bench#run-workspace-bench-lite)

Run the 100-task Lite benchmark:

```
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  bash /workspace/Workspace-Bench/evaluation/docker/run-benchmark.sh \
  --harness codex \
  --model kimi-k2.5 \
  --dataset lite
```

Then judge the completed Lite run:

```
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  python3 -u /workspace/Workspace-Bench/evaluation/src/agent_as_a_judge.py \
  --task-dir /workspace/Workspace-Bench/evaluation/output/Codex--Kimi-K2.5--Lite \
  --eval-yaml /workspace/Workspace-Bench/evaluation/runs/judge.yaml \
  --parallel \
  --workers 3
```

### Other Run Configs

[https://github.com/opendatabox/workspace-bench#other-run-configs](https://github.com/opendatabox/workspace-bench#other-run-configs)

You can change the harness, model, and dataset split from the command line:

```
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  bash /workspace/Workspace-Bench/evaluation/docker/run-benchmark.sh \
  --harness openclaw \
  --model glm-5.1 \
  --dataset lite
```

Supported harness values are `codex`, `openclaw`, `deepagent`, and `claudecode`. Common model aliases include `gpt-5.4`, `gemini-3.1-pro`, `kimi-k2.5`, `glm-5.1`, `minimax-m2.7`, `grok-4.3`, and `qwen-3.6`. When using `claudecode`, the selected model endpoint must be compatible with the Anthropic API. For a custom provider model, add `--model-id`, `--model-name`, and `--env-prefix`. Completed run outputs are stored under `evaluation/output/`.

### Run the Full Benchmark

[https://github.com/opendatabox/workspace-bench#run-the-full-benchmark](https://github.com/opendatabox/workspace-bench#run-the-full-benchmark)

Download the full task set:

```
python3 scripts/download_hf_assets.py --full
```

Then run the full benchmark:

```
docker compose -f docker/docker-compose.yaml run --rm workspace-bench \
  bash /workspace/Workspace-Bench/evaluation/docker/run-benchmark.sh \
  --harness codex \
  --model kimi-k2.5 \
  --dataset full
```

### Visualize Results

[https://github.com/opendatabox/workspace-bench#visualize-results](https://github.com/opendatabox/workspace-bench#visualize-results)

To browse runs and rubric judgments in the web dashboard (requires Node.js):

```
cd viz
npm install
npm run dev
```

The dashboard will be available at `http://localhost:5173` and automatically discovers results under `evaluation/output/`.

## 🔎 Publications

[https://github.com/opendatabox/workspace-bench#-publications](https://github.com/opendatabox/workspace-bench#-publications)

- [Workspace-Bench 1.0: Benchmarking AI Agents on Workspace Tasks with Large-Scale File Dependencies](https://arxiv.org/abs/2605.03596)

```
@misc{tang2026workspacebench10benchmarkingai,
      title={Workspace-Bench 1.0: Benchmarking AI Agents on Workspace Tasks with Large-Scale File Dependencies}, 
      author={Zirui Tang and Xuanhe Zhou and Yumou Liu and Linchun Li and Weizheng Wang and Hongzhang Huang and Jun Zhou and Jiachen Song and Shaoli Yu and Jinqi Wang and Zihang Zhou and Hongyi Zhou and Yuting Lv and Jinyang Li and Jiashuo Liu and Ruoyu Chen and Chunwei Liu and GuoLiang Li and Jihua Kang and Fan Wu},
      year={2026},
      eprint={2605.03596},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2605.03596}
}
```

## 🤝 Acknowledgement

[https://github.com/opendatabox/workspace-bench#-acknowledgement](https://github.com/opendatabox/workspace-bench#-acknowledgement)

[https://www.larksuite.com/](https://www.larksuite.com/)[https://www.sjtu.edu.cn/](https://www.sjtu.edu.cn/)

## About

         Benchmark self-evolving Agent upon realistic large-scale file workspaces       

[workspace-bench.github.io](https://workspace-bench.github.io)

### Topics

[benchmark](https://github.com/topics/benchmark)[dataset](https://github.com/topics/dataset)[autonomous-agents](https://github.com/topics/autonomous-agents)[ai-agents](https://github.com/topics/ai-agents)[large-language-models](https://github.com/topics/large-language-models)[llm](https://github.com/topics/llm)[file-dependencies](https://github.com/topics/file-dependencies)[workspace-learning](https://github.com/topics/workspace-learning)

### Resources

[Readme](https://github.com/opendatabox/workspace-bench#readme-ov-file)

### License

[MIT license](https://github.com/opendatabox/workspace-bench#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/OpenDataBox/Workspace-Bench/activity)

[Custom properties](https://github.com/OpenDataBox/Workspace-Bench/custom-properties)

### Stars

[14
        stars](https://github.com/OpenDataBox/Workspace-Bench/stargazers)

### Watchers

[1
        watching](https://github.com/OpenDataBox/Workspace-Bench/watchers)

### Forks

[2
        forks](https://github.com/OpenDataBox/Workspace-Bench/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FOpenDataBox%2FWorkspace-Bench&report=OpenDataBox+%28user%29)

## [Releases](https://github.com/OpenDataBox/Workspace-Bench/releases)

No releases published

## [Packages
      0](https://github.com/orgs/OpenDataBox/packages?repo_name=Workspace-Bench)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/OpenDataBox/Workspace-Bench/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          95.2%](https://github.com/OpenDataBox/Workspace-Bench/search?l=python)
- [TypeScript
          3.5%](https://github.com/OpenDataBox/Workspace-Bench/search?l=typescript)
- [JavaScript
          0.6%](https://github.com/OpenDataBox/Workspace-Bench/search?l=javascript)
- [Shell
          0.6%](https://github.com/OpenDataBox/Workspace-Bench/search?l=shell)
- [Makefile
          0.1%](https://github.com/OpenDataBox/Workspace-Bench/search?l=makefile)
- [CSS
          0.0%](https://github.com/OpenDataBox/Workspace-Bench/search?l=css)

     You can’t perform that action at this time.
