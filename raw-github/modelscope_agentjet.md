---
repo: modelscope/agentjet
url: https://github.com/modelscope/agentjet
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - modelscope/AgentJet: Cutting-edge platform for LLM agent tuning. Deliver RL tuning with flexibility, reliability, speed, multi-agent optimization and realtime community benchmarking. · GitHub

**Source**: https://github.com/modelscope/agentjet

---

[Skip to content](https://github.com/modelscope/agentjet#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[modelscope](https://github.com/modelscope)

/
**[AgentJet](https://github.com/modelscope/AgentJet)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmodelscope%2FAgentJet)You must be signed in to change notification settings
- [Fork
    19](https://github.com/login?return_to=%2Fmodelscope%2FAgentJet)
- 
[Star
          208](https://github.com/login?return_to=%2Fmodelscope%2FAgentJet)

[https://github.com/modelscope/AgentJet](https://github.com/modelscope/AgentJet)

[Branches](https://github.com/modelscope/AgentJet/branches)[Tags](https://github.com/modelscope/AgentJet/tags)

[https://github.com/modelscope/AgentJet/branches](https://github.com/modelscope/AgentJet/branches)[https://github.com/modelscope/AgentJet/tags](https://github.com/modelscope/AgentJet/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History837 Commits837 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| ajet | ajet |  |  |
| docs | docs |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| tutorial | tutorial |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| pyrightconfig.json | pyrightconfig.json |  |  |
| requirements_stable_vllm.txt | requirements_stable_vllm.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# AgentJet

[https://github.com/modelscope/agentjet#agentjet](https://github.com/modelscope/agentjet#agentjet)

[https://benchmark.agentjet.top/](https://benchmark.agentjet.top/)[https://modelscope.github.io/AgentJet](https://modelscope.github.io/AgentJet)[https://github.com/modelscope/AgentJet/blob/main/LICENSE](https://github.com/modelscope/AgentJet/blob/main/LICENSE)[https://modelscope.github.io/AgentJet/en/installation#requirements](https://modelscope.github.io/AgentJet/en/installation#requirements)

[https://modelscope.github.io/AgentJet](https://modelscope.github.io/AgentJet)

**AgentJet (AJet)** is a cutting-edge, user-friendly agent RL training framework designed to optimize agents and agentic workflows (supporting any agent built with OpenAI SDK, AgentScope, Langchain, or raw HTTP requests), fine-tuning LLM weights to enhance model performance.

**AgentJet (AJet)** has fully-distributed **swarm training** capability, which means that you can **deploy `ajet-swarm start` in GPU server(s) and then start training agents in your laptop(s)**! Simply provide your agent workflow, training dataset, and reward function, and AgentJet will be ready to go!

## ✈️ News

[https://github.com/modelscope/agentjet#%EF%B8%8F-news](https://github.com/modelscope/agentjet#%EF%B8%8F-news)

- 2026.4.30 DeepFinance: training a financial deep-research Agent with multi-dimensional reward GRPO. [EN Blog](https://modelscope.github.io/AgentJet/en/example_deep_finance/) / [ZH Blog](https://modelscope.github.io/AgentJet/en/example_deep_finance.zh/).
- 2026.4.9 AgentJet-powered Auto Research: fully automated overnight RL experiments. [EN Blog](https://modelscope.github.io/AgentJet/en/blog_auto_research.en/) / [ZH Blog](https://modelscope.github.io/AgentJet/en/blog_auto_research/).
- 2026.3.30 LoRA training example is now online! See [tutorial/example_math_lora](https://github.com/modelscope/AgentJet/blob/main/tutorial/example_math_lora) for an example.
- 2026.3.26 Upgrade verl backend to 0.7.1 to support more models and increase training speed! All [benchmark](https://benchmark.agentjet.top/) verified.
- 2026.3.19 Support for latest Qwen3.5 models is [in progress](https://github.com/modelscope/AgentJet/pull/16).
- 2026.3.12 Tuning Original OpenClaw Agent without Editing Any Agent Code. [EN Blog](https://modelscope.github.io/AgentJet/en/example_openclaw/) / [ZH Blog](https://modelscope.github.io/AgentJet/en/example_openclaw.zh/).
- 2026.3.09 Non-shared-parameter Multiagent Training. [EN Blog](https://modelscope.github.io/AgentJet/en/example_train_multi_model/) / [ZH Blog](http://modelscope.github.io/AgentJet/en/example_train_multi_model.zh/).
- 2026.2.20 Introducing AgentJet Swarm. [ZH Blog](https://modelscope.github.io/AgentJet/en/swarm_intro_blog_zh/) / [EN Blog](https://modelscope.github.io/AgentJet/en/swarm_intro_blog_en/).

## ✈️ Fast Introduction

[https://github.com/modelscope/agentjet#%EF%B8%8F-fast-introduction](https://github.com/modelscope/agentjet#%EF%B8%8F-fast-introduction)

### **1 - Classic Mode**

[https://github.com/modelscope/agentjet#1---classic-mode](https://github.com/modelscope/agentjet#1---classic-mode)

Let's begin with the simplest example: a math agent with a tool call. This is a simple & centralized training example.

1. please check out the [installation guide](https://modelscope.github.io/AgentJet/en/installation/) to set up the training environment.
2. tune your first model using the minimum example. 

```
ajet --conf ./tutorial/example_math_agent/math_agent.yaml --backbone='verl'
```

[https://camo.githubusercontent.com/7ccb00fda7afefa3cd81458b902eadc627b026981c7b8b1269a4caf5ee99fd3d/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f6e65775f636c61737369632e706e67](https://camo.githubusercontent.com/7ccb00fda7afefa3cd81458b902eadc627b026981c7b8b1269a4caf5ee99fd3d/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f6e65775f636c61737369632e706e67)

### **2 - Swarm Mode**

[https://github.com/modelscope/agentjet#2---swarm-mode](https://github.com/modelscope/agentjet#2---swarm-mode)

Let's begin with the simplest AgentJet Swarm example: also a math agent. In this case, you can use any GPU-less laptop to train the model remotely.

1. Start swarm server and begin swarm overwatch: `ajet-swarm start` and `ajet-swarm overwatch` (or `ajet-swarm top`). (Alternative: if you are a fan of docker, use our [prebuilt docker image here](https://github.com/modelscope/AgentJet/blob/main/docs/en/ajet-swarm-docker.md) without setting up dependencies)
2. From your laptop (or swarm server localhost), run [this simple script](https://github.com/modelscope/AgentJet/blob/main/tutorial/example_math_swarm/math.py) to begin training: 

```
AJET_SWARM_URL="http://swarm-server-ip:10086" python ./tutorial/example_math_swarm/math.py
```

[https://camo.githubusercontent.com/e6a1a6649b8d24b91615aafbd4e97864a6011663a5bb9bc83ce92199fbc1678b/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f737761726d696e67322e676966](https://camo.githubusercontent.com/e6a1a6649b8d24b91615aafbd4e97864a6011663a5bb9bc83ce92199fbc1678b/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f737761726d696e67322e676966)

[https://private-user-images.githubusercontent.com/96192199/553672076-41ed1e71-8b18-4c4c-b5e2-833399317337.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTgyNDksIm5iZiI6MTc3OTI5Nzk0OSwicGF0aCI6Ii85NjE5MjE5OS81NTM2NzIwNzYtNDFlZDFlNzEtOGIxOC00YzRjLWI1ZTItODMzMzk5MzE3MzM3LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3MjU0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyMTEyOTZlODlmNjg2ZjU1NGE2MTVjMzExYTRlZGQ1OTJmZjJjOTQ4OTMwYmY1ZTU0OTRkZmI0NjVjNTIyZGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmdpZiJ9.a0TnpcmQWv0nly2PoIaJ62pABvUFV56hsXjTZzHlqCc](https://private-user-images.githubusercontent.com/96192199/553672076-41ed1e71-8b18-4c4c-b5e2-833399317337.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTgyNDksIm5iZiI6MTc3OTI5Nzk0OSwicGF0aCI6Ii85NjE5MjE5OS81NTM2NzIwNzYtNDFlZDFlNzEtOGIxOC00YzRjLWI1ZTItODMzMzk5MzE3MzM3LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3MjU0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTcyMTEyOTZlODlmNjg2ZjU1NGE2MTVjMzExYTRlZGQ1OTJmZjJjOTQ4OTMwYmY1ZTU0OTRkZmI0NjVjNTIyZGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmdpZiJ9.a0TnpcmQWv0nly2PoIaJ62pABvUFV56hsXjTZzHlqCc)

## ✈️ Features

[https://github.com/modelscope/agentjet#%EF%B8%8F-features](https://github.com/modelscope/agentjet#%EF%B8%8F-features)

We aim to build an easy-to-learn Agent tuner that unlocks more possibilities for agent developers:

- **Easy and Friendly**. AgentJet helps you tune models behind your agent workflows easily, optimizing your agents for top performance with minimal effort.
- **Rich Tutorial Library**. AgentJet provides a rich library of [examples](https://github.com/modelscope/AgentJet/tree/main/tutorial) as tutorials.
- **Swarm Training**. [This unique feature](https://modelscope.github.io/AgentJet/en/swarm_intro_blog_en/) of AgentJet opens many possibilities: deploying distributed & self-healing rollout workers, **non-shared-parameter multi-agent** training, **multi-runtime & multi-task cocktail** training. And just like Tinker, you can use AgentJet Swarm to train models even on **GPU-less laptop(s)**.
- **Efficient and Scalable**. AgentJet uses [verl] as the default backbone (`--backbone=verl`). However, we also support trinity as an alternative backbone, accelerating your tuning process via fully asynchronous RFT.
- **Flexible and Fast**. AgentJet supports [multi-agent workflows](https://modelscope.github.io/AgentJet/en/workflow/) and adopts a context merging technique, accelerating training by 1.5x to 10x when the workflow involves multi-turn (or multi-agent) conversations.
- **Reliability and Reproducibility**. Our team keeps track of framework performance across multiple [tasks + major-git-version + training-backbones](https://benchmark.agentjet.top/) (under construction, still gathering data, coming soon).

For advanced researchers, AgentJet also provides high-resolution logging and debugging solutions:

- **High-Resolution Logging**: AgentJet allows users to save and inspect token-level rollout details, recording token IDs, token loss masks, and even token logprobs to facilitate workflow development and agent diagnostics.
- **Fast Debugging**: AgentJet also provides the `--backbone=debug` option for the best debugging experience, shortening your wait period from minutes to seconds after code changes and enabling breakpoint debugging in IDEs.

[https://camo.githubusercontent.com/fcff14842c0b732c1e5cc323aed28afcea275ac55514e824415ad95a505c1904/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f61692d67656e6572617465642d313737313837333234323338382e6a7067](https://camo.githubusercontent.com/fcff14842c0b732c1e5cc323aed28afcea275ac55514e824415ad95a505c1904/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f61692d67656e6572617465642d313737313837333234323338382e6a7067)

[https://camo.githubusercontent.com/02d9a4812e9c41d1d88f07b81565cd15a4abb59c296aa3f18ba9f8e73b139b96/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f62656173745f6c6f676765725f7a696d752e6d70342e676966](https://camo.githubusercontent.com/02d9a4812e9c41d1d88f07b81565cd15a4abb59c296aa3f18ba9f8e73b139b96/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f62656173745f6c6f676765725f7a696d752e6d70342e676966)

---

### ✈️ Quick Start

[https://github.com/modelscope/agentjet#%EF%B8%8F-quick-start](https://github.com/modelscope/agentjet#%EF%B8%8F-quick-start)

#### Installation

[https://github.com/modelscope/agentjet#installation](https://github.com/modelscope/agentjet#installation)

- **Click here to read the**[installation guide](https://modelscope.github.io/AgentJet/en/installation/).

#### Example Library

[https://github.com/modelscope/agentjet#example-library](https://github.com/modelscope/agentjet#example-library)

Explore our rich library of examples to kickstart your journey:

- 🔢 [Training a math agent that can write python code](https://modelscope.github.io/AgentJet/en/example_math_agent).
- 📱 [Creating an AppWorld agent using AgentScope and training it](https://modelscope.github.io/AgentJet/en/example_app_world).
- 🐺 [Developing Werewolves RPG agents and training them](https://modelscope.github.io/AgentJet/en/example_werewolves).
- 👩🏻‍⚕️ [Learning to ask questions like a doctor](https://modelscope.github.io/AgentJet/en/example_learning_to_ask).
- 🎴 [Writing a countdown game using AgentScope and solving it](https://modelscope.github.io/AgentJet/en/example_countdown).
- 🚶 [Solving a frozen lake walking puzzle using AgentJet](https://modelscope.github.io/AgentJet/en/example_frozenlake).

Explore our automated benchmarking system [https://benchmark.agentjet.top/](https://benchmark.agentjet.top/):

[https://camo.githubusercontent.com/c24dbf39980f64953ab38fa9db27c4a6f6dd4b039ff0ddddd3ba14a83f1c7be0/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f62656e63686d61726b2e676966](https://camo.githubusercontent.com/c24dbf39980f64953ab38fa9db27c4a6f6dd4b039ff0ddddd3ba14a83f1c7be0/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f62656e63686d61726b2e676966)

---

### ✈️ Core Concepts

[https://github.com/modelscope/agentjet#%EF%B8%8F-core-concepts](https://github.com/modelscope/agentjet#%EF%B8%8F-core-concepts)

AgentJet makes agent fine-tuning straightforward by separating the developer interface from the internal execution logic.

[https://camo.githubusercontent.com/b77c99d40375af4b5ed45ec52ee29703a06cf3a23631381f25252b11e3e93cde/68747470733a2f2f696d672e616c6963646e2e636f6d2f696d6765787472612f69322f4f31434e30315064434a796d316a7172316a57474d5a345f2121363030303030303030343630302d302d7470732d323031332d3837302e6a7067](https://camo.githubusercontent.com/b77c99d40375af4b5ed45ec52ee29703a06cf3a23631381f25252b11e3e93cde/68747470733a2f2f696d672e616c6963646e2e636f6d2f696d6765787472612f69322f4f31434e30315064434a796d316a7172316a57474d5a345f2121363030303030303030343630302d302d7470732d323031332d3837302e6a7067)

#### 1. The User-Centric Interface

[https://github.com/modelscope/agentjet#1-the-user-centric-interface](https://github.com/modelscope/agentjet#1-the-user-centric-interface)

To optimize an agent, you provide three core inputs:

- [Trainable Workflow](https://modelscope.github.io/AgentJet/en/workflow): Define your agent logic by inheriting the Workflow class, supporting both simple agent setups and advanced multi-agent collaborations.
- [Task Reader](https://modelscope.github.io/AgentJet/en/data_pipeline): Load training tasks from JSONL files, HuggingFace datasets, interactive environments, or auto-generate them from documents.
- [Task Judger](https://modelscope.github.io/AgentJet/en/task_judger): Evaluates agent outputs and assigns rewards to guide training.

#### 2. Internal System Architecture

[https://github.com/modelscope/agentjet#2-internal-system-architecture](https://github.com/modelscope/agentjet#2-internal-system-architecture)

The internal system orchestrates several specialized modules to handle the complexities of RL training and agent interactions.

- **Launcher**: Manages background service processes (Ray, vLLM) and routes the backbone.
- **Task Reader**: Handles data ingestion, augmentation, and filtering.
- **Task Rollout**: Bridges LLM engines and manages the Gym environment lifecycle.
- **Task Runner**: Executes the Agent workflow and calculates rewards.
- **Model Tuner**: Forwards inference requests from the workflow to the LLM engine.
- **Context Tracker**: Monitors LLM calls and automatically merges shared-history timelines to improve training efficiency by **1.5x to 10x**.
- **Swarm Server**: A data interchange center that accepts OpenAI-like requests and engine instructions, activated only in AgentJet Swarm mode.

#### 3. Swarm Architecture

[https://github.com/modelscope/agentjet#3-swarm-architecture](https://github.com/modelscope/agentjet#3-swarm-architecture)

When swarm training mode is enabled, an additional component will be activated:

- **Swarm Data Interchange Server**: Maintains HTTP service, listens to swarm instructions and OpenAI compatible requests. Establishes a high-speed zmq communication channel to coordinate other modules.

[https://camo.githubusercontent.com/7dfaa705a84a70ee1bf1dbb0bacf19043a31b5870073ba67b250f4836b66e01e/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f617263682e6a7067](https://camo.githubusercontent.com/7dfaa705a84a70ee1bf1dbb0bacf19043a31b5870073ba67b250f4836b66e01e/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f617263682e6a7067)

### ✈️ Navigation

[https://github.com/modelscope/agentjet#%EF%B8%8F-navigation](https://github.com/modelscope/agentjet#%EF%B8%8F-navigation)

- **Tutorials**: From [Installation](https://modelscope.github.io/AgentJet/en/installation) to [Tuning your first agent](https://modelscope.github.io/AgentJet/en/tune_your_first_agent) to [Multi-Node Training](https://modelscope.github.io/AgentJet/en/multi_node_training) — the essential path for beginners.
- **Core Components**: Define your [Trainable Workflow](https://modelscope.github.io/AgentJet/en/workflow) and manage [Data](https://modelscope.github.io/AgentJet/en/data_pipeline) and [Reward](https://modelscope.github.io/AgentJet/en/task_judger).
- **Example**: Check the [Example Library](https://modelscope.github.io/AgentJet/#example-library) above for real-world cases like [Math](https://modelscope.github.io/AgentJet/en/example_math_agent), [Werewolves game](https://modelscope.github.io/AgentJet/en/example_werewolves) and  [Learning to ask task](https://modelscope.github.io/AgentJet/en/example_learning_to_ask).
- **Deep Dive**: Master advanced [Configuration](https://modelscope.github.io/AgentJet/en/configuration).

## ✈️ Roadmap

[https://github.com/modelscope/agentjet#%EF%B8%8F-roadmap](https://github.com/modelscope/agentjet#%EF%B8%8F-roadmap)

AgentJet is a constantly evolving project. We are planning to add the following features in the near future.

| Category | Feature | Status |
|---|---|---|
| Infra | Optimize configurations for long-context adaptation on smaller GPUs | In Progress |
| Capability | Multi-modal training support | Todo |
| Capability | MARL Credit assignment | Todo |
| Capability | Training dataset generation from few-shot samples | Todo |

## ✈️ Citation

[https://github.com/modelscope/agentjet#%EF%B8%8F-citation](https://github.com/modelscope/agentjet#%EF%B8%8F-citation)

If you use AgentJet in your research, please cite:

```
@software{
  title  = {AgentJet: A Cutting-Edge Multi-Agent Training Platform for Large Language Models.},
  author = {The AgentJet Team},
  url    = {https://modelscope.github.io/AgentJet/},
  month  = {01},
  year   = {2026}
}
```

---

 This project is under active development, we need your help to make it shine! 

[⭐ Star Us](https://github.com/modelscope/AgentJet) · [✈️ Report Bug](https://github.com/modelscope/AgentJet/issues) · [✈️ Request Feature](https://github.com/modelscope/AgentJet/issues)

[https://camo.githubusercontent.com/f5787560f51a71c60753048e56a8197f53eed6c83fe77286346951d09c184ccf/68747470733a2f2f696d672e616c6963646e2e636f6d2f696d6765787472612f69342f4f31434e3031444a754f745a314b67753155766a614e6c5f2121363030303030303030313139342d322d7470732d3932322d3838322e706e67](https://camo.githubusercontent.com/f5787560f51a71c60753048e56a8197f53eed6c83fe77286346951d09c184ccf/68747470733a2f2f696d672e616c6963646e2e636f6d2f696d6765787472612f69342f4f31434e3031444a754f745a314b67753155766a614e6c5f2121363030303030303030313139342d322d7470732d3932322d3838322e706e67)

Join AgentJet DingTalk Group to share your idea

---

[https://camo.githubusercontent.com/f5d767ec02464c6eb3ee2e5af97d90906a6dbcc871488bc85b2f8331b1bc0e27/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f73746172332e706e67](https://camo.githubusercontent.com/f5d767ec02464c6eb3ee2e5af97d90906a6dbcc871488bc85b2f8331b1bc0e27/68747470733a2f2f73657276652e67707461636164656d69632e636e2f7075626c6973682f7368617265642f496d6167652f73746172332e706e67)

## About

         Cutting-edge platform for LLM agent tuning. Deliver RL tuning with flexibility, reliability, speed, multi-agent optimization and realtime community benchmarking.       

[modelscope.github.io/AgentJet/](https://modelscope.github.io/AgentJet/)

### Resources

[Readme](https://github.com/modelscope/agentjet#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/modelscope/agentjet#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/modelscope/AgentJet/activity)

[Custom properties](https://github.com/modelscope/AgentJet/custom-properties)

### Stars

[208
        stars](https://github.com/modelscope/AgentJet/stargazers)

### Watchers
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

