---
repo: modelscope/agentevolver
url: https://github.com/modelscope/agentevolver
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - modelscope/AgentEvolver: AgentEvolver: Towards Efficient Self-Evolving Agent System · GitHub

**Source**: https://github.com/modelscope/agentevolver

---

[Skip to content](https://github.com/modelscope/agentevolver#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[modelscope](https://github.com/modelscope)

/
**[AgentEvolver](https://github.com/modelscope/AgentEvolver)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmodelscope%2FAgentEvolver)You must be signed in to change notification settings
- [Fork
    167](https://github.com/login?return_to=%2Fmodelscope%2FAgentEvolver)
- 
[Star
          1.4k](https://github.com/login?return_to=%2Fmodelscope%2FAgentEvolver)

[https://github.com/modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver)

[Branches](https://github.com/modelscope/AgentEvolver/branches)[Tags](https://github.com/modelscope/AgentEvolver/tags)

[https://github.com/modelscope/AgentEvolver/branches](https://github.com/modelscope/AgentEvolver/branches)[https://github.com/modelscope/AgentEvolver/tags](https://github.com/modelscope/AgentEvolver/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History858 Commits858 Commits |  |  |  |
| .github | .github |  |  |
| agentevolver | agentevolver |  |  |
| config | config |  |  |
| cookbook/env_profiles | cookbook/env_profiles |  |  |
| docs | docs |  |  |
| env_service | env_service |  |  |
| examples | examples |  |  |
| external | external |  |  |
| games | games |  |  |
| research/CuES | research/CuES |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| example.env | example.env |  |  |
| install.sh | install.sh |  |  |
| launcher.py | launcher.py |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/modelscope/AgentEvolver/blob/main/docs/img/logo.png](https://github.com/modelscope/AgentEvolver/blob/main/docs/img/logo.png)

## AgentEvolver: Towards Efficient Self-Evolving Agent System

[https://github.com/modelscope/agentevolver#agentevolver-towards-efficient-self-evolving-agent-system](https://github.com/modelscope/agentevolver#agentevolver-towards-efficient-self-evolving-agent-system)

[https://www.python.org/](https://www.python.org/)[https://github.com/modelscope/AgentEvolver/blob/main/LICENSE](https://github.com/modelscope/AgentEvolver/blob/main/LICENSE)[https://modelscope.github.io/AgentEvolver/](https://modelscope.github.io/AgentEvolver/)[https://arxiv.org/abs/2511.10395](https://arxiv.org/abs/2511.10395)[https://deepwiki.com/modelscope/AgentEvolver](https://deepwiki.com/modelscope/AgentEvolver)[https://github.com/modelscope/AgentEvolver](https://github.com/modelscope/AgentEvolver)

**AgentEvolver** is an end-to-end, self-evolving training framework that unifies self-questioning, self-navigating, and self-attributing into a cohesive system. It empowers agents to autonomously improve their capabilities, aiming for efficient, cost-effective, and continuous capability evolution.

## 📰 News

[https://github.com/modelscope/agentevolver#-news](https://github.com/modelscope/agentevolver#-news)

- **[2026-03]** ⚡ [SeeUPO](https://github.com/modelscope/AgentEvolver/tree/seeupo) released — Sequence-Level Agentic RL with convergence guarantees; multi-turn training stack built on AgentEvolver
- **[2025-12]** 🎮 [AgentEvolver Game Arena](https://github.com/modelscope/AgentEvolver/blob/main/games/README.md) released — a multi-agent social reasoning arena for interaction, evaluation, and training in games like Avalon and Diplomacy.
- **[2025-12]** 📢 New preprint [CuES](https://www.arxiv.org/abs/2512.01311) on an extended self-questioning method released with [code](https://github.com/modelscope/AgentEvolver/blob/main/research/CuES/README.md).
- **[2025-11]** 📄 [The AgentEvolver Technical Report is now available](https://arxiv.org/abs/2511.10395), detailing the framework's architecture, methodology, and key findings.
- **[2025-11]** 🧩 AgentEvolver v1 has been released now!

## ✨ Why AgentEvolver

[https://github.com/modelscope/agentevolver#-why-agentevolver](https://github.com/modelscope/agentevolver#-why-agentevolver)

🧠 AgentEvolver provides three **Self-Evolving Mechanisms** from Environment to Policy:

- **Automatic Task Generation (Self-Questioning)** – Explore the environment and autonomously create diverse tasks, eliminating costly manual dataset construction.
- **Experience-guided Exploration (Self-Navigating)** – Summarize and reuse cross-task experience, guiding higher-quality rollouts and improving exploration efficiency.
- **Attribution-based Credit Assignment (Self-Attributing)** – Process long trajectories to uncover the causal contribution of intermediate steps, enabling fine-grained and efficient policy optimization.

[https://github.com/modelscope/AgentEvolver/blob/main/docs/img/flowchart.png](https://github.com/modelscope/AgentEvolver/blob/main/docs/img/flowchart.png)

## 🔧 Architecture Design

[https://github.com/modelscope/agentevolver#-architecture-design](https://github.com/modelscope/agentevolver#-architecture-design)

AgentEvolver adopts a service-oriented dataflow architecture, seamlessly integrating environment sandboxes, LLMs, and experience management into modular services.

[https://github.com/modelscope/AgentEvolver/blob/main/docs/img/system.png](https://github.com/modelscope/AgentEvolver/blob/main/docs/img/system.png)

- **Environment Compatibility** – Standardized interfaces for seamless integration with a wide range of external environments and tool APIs.
- **Flexible Context Manager** – Built-in utilities for managing multi-turn contexts and complex interaction logic, supporting diverse deployment scenarios.
- **Modular & Extensible Architecture** – Decoupled components allow easy customization, secondary development, and future algorithm upgrades.

## 🌟 Benchmark Performance

[https://github.com/modelscope/agentevolver#-benchmark-performance](https://github.com/modelscope/agentevolver#-benchmark-performance)

Performance comparison on the AppWorld and BFCL-v3 benchmarks. AgentEvolver achieves superior results while using substantially fewer parameters than larger baseline models.

[https://github.com/modelscope/AgentEvolver/blob/main/docs/img/performance.png](https://github.com/modelscope/AgentEvolver/blob/main/docs/img/performance.png)

Performance on two benchmarks. Columns show avg@8 and best@8 for each benchmark, plus their averages (Avg.). All values are in percent (%). **Bolded numbers** highlight the best results.

| Model | Params | AppWorld |  | BFCL v3 |  | Avg. |  |
|---|---|---|---|---|---|---|---|
|  |  | avg@8 | best@8 | avg@8 | best@8 | avg@8 | best@8 |
| Qwen2.5-7B | 7B | 1.8 | 5.6 | 29.8 | 42.4 | 15.8 | 24.0 |
| +Questioning | 7B | 23.2 | 40.3 | 49.0 | 60.6 | 36.1 | 50.5 |
| +Questioning&Navigating | 7B | 26.3 | 43.1 | 53.3 | 61.0 | 39.8 | 52.1 |
| +Questioning&Attributing | 7B | 25.7 | 43.7 | 56.8 | 65.3 | 41.3 | 54.5 |
| AgentEvolver (overall) | 7B | 32.4 | 51.2 | 57.9 | 69.0 | 45.2 | 60.1 |
|  |  |  |  |  |  |  |  |
| Qwen2.5-14B | 14B | 18.0 | 31.4 | 41.6 | 54.1 | 29.8 | 42.8 |
| +Questioning | 14B | 44.3 | 65.5 | 60.3 | 72.1 | 52.3 | 68.8 |
| +Questioning&Navigating | 14B | 45.4 | 65.3 | 62.8 | 74.5 | 54.1 | 69.9 |
| +Questioning&Attributing | 14B | 47.8 | 65.6 | 64.9 | 76.3 | 56.4 | 71.0 |
| AgentEvolver (overall) | 14B | 48.7 | 69.4 | 66.5 | 76.7 | 57.6 | 73.1 |

## 🚀 Quick Start

[https://github.com/modelscope/agentevolver#-quick-start](https://github.com/modelscope/agentevolver#-quick-start)

### Step 1. Basic Dependency Installation

[https://github.com/modelscope/agentevolver#step-1-basic-dependency-installation](https://github.com/modelscope/agentevolver#step-1-basic-dependency-installation)

Make sure you have **conda** and **cuda toolkit** installed.

Then, set up the training environment by running the script

```
bash install.sh
```

### Step 2. Setup Env-Service (Appworld as example)

[https://github.com/modelscope/agentevolver#step-2-setup-env-service-appworld-as-example](https://github.com/modelscope/agentevolver#step-2-setup-env-service-appworld-as-example)

The script below sets up an environment for appworld.

```
cd env_service/environments/appworld && bash setup.sh
```

### Step 3. Setup ReMe (Optional)

[https://github.com/modelscope/agentevolver#step-3-setup-reme-optional](https://github.com/modelscope/agentevolver#step-3-setup-reme-optional)

Set up the ReMe for experience management by running the script:

```
bash external/reme/install_reme.sh
```

For more detailed installation, please refer to [ReMe](https://github.com/agentscope-ai/ReMe).

### Step 4. Begin Training! 🚀 🚀

[https://github.com/modelscope/agentevolver#step-4-begin-training--](https://github.com/modelscope/agentevolver#step-4-begin-training--)

Copy the `example.env` file to `.env` and modify the parameters, including your **API key**, **conda path**.

Using AgentEvolver launcher to start environment, log dashboard and training process altogether.

```
conda activate agentevolver

# option 1: minimal example without ReMe (using built-in datasets within environments)
python launcher.py --conf examples/basic.yaml --with-appworld

# option 2: full example with ReMe (questioning + navigating + attributing)
python launcher.py --conf examples/overall.yaml --with-appworld --with-reme
```

Alternatively, you can use bash scripts for manual execution: `bash examples/run_basic.sh` or `bash examples/run_overall.sh`. See [Advanced Usage](https://github.com/modelscope/agentevolver#-advanced-usage) for more details.

## 🎮 AgentEvolver Game Arena

[https://github.com/modelscope/agentevolver#-agentevolver-game-arena](https://github.com/modelscope/agentevolver#-agentevolver-game-arena)

**[AgentEvolver Game Arena](https://github.com/modelscope/AgentEvolver/blob/main/games/README.md)** extends **AgentEvolver** into **multi-agent social game environments**, providing a unified arena for **interaction, evaluation, and training** of AI agents in long-horizon social reasoning tasks.

Key capabilities include:

- **Web-based interaction** – Observe AI agents' reasoning and communication in real time, or participate as a human player.
- **Scalable evaluation** – Run large-scale self-play or mixed-model tournaments with configurable settings and leaderboards.
- **End-to-end training support** – Train LLM agents directly within social game environments using reinforcement learning–based methods (e.g., GRPO).

**Web Interface Demo:**

| Avalon | Diplomacy |
|---|---|

**Training Example:** Training curve for the assassin role in Avalon

[https://github.com/modelscope/AgentEvolver/blob/main/docs/img/games/training_curve.jpg](https://github.com/modelscope/AgentEvolver/blob/main/docs/img/games/training_curve.jpg)

For detailed documentation, quick start guides, and configuration examples, see the **[Game Arena README](https://github.com/modelscope/AgentEvolver/blob/main/games/README.md)**.

## 🧩 Advanced Usage

[https://github.com/modelscope/agentevolver#-advanced-usage](https://github.com/modelscope/agentevolver#-advanced-usage)

### 🔧 Manual Execution

[https://github.com/modelscope/agentevolver#-manual-execution](https://github.com/modelscope/agentevolver#-manual-execution)

For users requiring fine-grained control over the training pipeline, we provide standalone execution scripts:

- `bash examples/run_basic.sh` - Execute basic RL pipeline with GRPO using built-in datasets within environments.
- `bash examples/run_overall.sh` - Run the complete self-evolving AgentEvolver pipeline with fully customizable configurations.

Refer to the  **[QuickStart](https://github.com/modelscope/AgentEvolver/blob/main/docs/tutorial/quick_start.md)** for detailed usage instructions and configuration parameters.

### 📄 Documentation

[https://github.com/modelscope/agentevolver#-documentation](https://github.com/modelscope/agentevolver#-documentation)

For detailed usage and customization, please refer to the following guidelines:

- **[Environment Service](https://github.com/modelscope/AgentEvolver/blob/main/docs/guidelines/env_service.md)** - Set up and manage environment instances, integrate custom environments
- **[Task Manager](https://github.com/modelscope/AgentEvolver/blob/main/docs/guidelines/task_manager.md)** - Explore environments, generate synthetic tasks, and curate training data for agent evolution
- **[Experience Manager](https://github.com/modelscope/AgentEvolver/blob/main/docs/guidelines/exp_manager.md)** - Configure experience pool management and self-navigating mechanisms
- **[Advantage Processor](https://github.com/modelscope/AgentEvolver/blob/main/docs/guidelines/adv_processor.md)** - Implement self-attributing mechanisms with ADCA-GRPO for fine-grained credit assignment

For API documentation and more details, visit our [documentation site](https://github.com/modelscope/AgentEvolver/blob/main/docs/index.md).

## 🔮 Upcoming

[https://github.com/modelscope/agentevolver#-upcoming](https://github.com/modelscope/agentevolver#-upcoming)

- **Evolution in multi-agent scenarios** – Investigate autonomous co-evolution strategies for agents operating within shared, interactive environments.
- **Cross-stage collaborative self-evolution** – Explore methods that couple questioning, navigating, and attributing into coordinated loops for mutual enhancement.

## 🙏 Acknowledgements

[https://github.com/modelscope/agentevolver#-acknowledgements](https://github.com/modelscope/agentevolver#-acknowledgements)

This project builds upon the excellent work of several open-source projects:

- [ReMe](https://github.com/agentscope-ai/ReMe) - for experience summarization and management;
- [veRL](https://github.com/volcengine/verl) - for distributed RL training;
- [mkdocs](https://github.com/mkdocs/mkdocs) - for documentation.

## 📚 Citation

[https://github.com/modelscope/agentevolver#-citation](https://github.com/modelscope/agentevolver#-citation)

If you find this work useful, please consider citing:

```
@misc{AgentEvolver2025,
  title         = {AgentEvolver: Towards Efficient Self-Evolving Agent System},
  author        = {Yunpeng Zhai and Shuchang Tao and Cheng Chen and Anni Zou and Ziqian Chen and Qingxu Fu and Shinji Mai and Li Yu and Jiaji Deng and Zouying Cao and Zhaoyang Liu and Bolin Ding and Jingren Zhou},
  year          = {2025},
  eprint        = {2511.10395},
  archivePrefix = {arXiv},
  primaryClass  = {cs.LG},
  url           = {https://arxiv.org/abs/2511.10395}
}
```

## ✨ Star History

[https://github.com/modelscope/agentevolver#-star-history](https://github.com/modelscope/agentevolver#-star-history)

[https://www.star-history.com/#modelscope/AgentEvolver&type=date&legend=top-left](https://www.star-history.com/#modelscope/AgentEvolver&type=date&legend=top-left)

## About

         AgentEvolver: Towards Efficient Self-Evolving Agent System       

[modelscope.github.io/AgentEvolver/](https://modelscope.github.io/AgentEvolver/)

### Topics

[agent](https://github.com/topics/agent)[reinforcement-learning](https://github.com/topics/reinforcement-learning)[llm](https://github.com/topics/llm)[self-evolving](https://github.com/topics/self-evolving)[agent-system](https://github.com/topics/agent-system)

### Resources
## gBrain Temporal Metadata

- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

