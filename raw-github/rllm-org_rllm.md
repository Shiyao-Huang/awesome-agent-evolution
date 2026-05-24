---
repo: rllm-org/rllm
url: https://github.com/rllm-org/rllm
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - rllm-org/rllm: Democratizing Reinforcement Learning for LLMs · GitHub

**Source**: https://github.com/rllm-org/rllm

---

[Skip to content](https://github.com/rllm-org/rllm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[rllm-org](https://github.com/rllm-org)

/
**[rllm](https://github.com/rllm-org/rllm)**

Public

- [Notifications](https://github.com/login?return_to=%2Frllm-org%2Frllm)You must be signed in to change notification settings
- [Fork
    567](https://github.com/login?return_to=%2Frllm-org%2Frllm)
- 
[Star
          5.5k](https://github.com/login?return_to=%2Frllm-org%2Frllm)

[https://github.com/rllm-org/rllm](https://github.com/rllm-org/rllm)

[Branches](https://github.com/rllm-org/rllm/branches)[Tags](https://github.com/rllm-org/rllm/tags)

[https://github.com/rllm-org/rllm/branches](https://github.com/rllm-org/rllm/branches)[https://github.com/rllm-org/rllm/tags](https://github.com/rllm-org/rllm/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1,838 Commits1,838 Commits |  |  |  |
| .github | .github |  |  |
| cookbooks | cookbooks |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| rllm-model-gateway | rllm-model-gateway |  |  |
| rllm | rllm |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

# rLLM

[https://github.com/rllm-org/rllm#rllm](https://github.com/rllm-org/rllm#rllm)

**Train your AI agents with RL. Any framework. Minimal code changes.**

[https://docs.rllm-project.com/](https://docs.rllm-project.com/)[https://join.slack.com/t/rllmproject/shared_invite/zt-3pyblo6ef-m9kqAoInI8xSyUBkpuOyXA](https://join.slack.com/t/rllmproject/shared_invite/zt-3pyblo6ef-m9kqAoInI8xSyUBkpuOyXA)[https://rllm-project.com](https://rllm-project.com)[https://rllm-project.com/blog](https://rllm-project.com/blog)[https://x.com/rllm_project](https://x.com/rllm_project)

rLLM is an open-source framework for training AI agents with reinforcement learning. Swap in a tracked client, define a reward function, and let RL handle the rest — no matter what agent framework you use.

## Core Features

[https://github.com/rllm-org/rllm#core-features](https://github.com/rllm-org/rllm#core-features)

- **Works with any agent framework** — LangGraph, SmolAgent, Strands, OpenAI Agents SDK, Google ADK, or plain `openai.OpenAI`. Just swap the client. 🔌
- **Near-zero code changes** — Add `@rllm.rollout` to wrap your agent code, and rLLM traces every LLM call automatically. 🪄
- **CLI-first workflow** — Eval and train from the command line with 50+ built-in benchmarks. `rllm eval gsm8k` just works. ⚡
- **Battle-tested results** — rLLM-trained agents beat models 50x their size (4B → outperforms 235B on finance, 1.5B → surpasses O1-Preview on math). 📈
- **Multiple RL algorithms** — GRPO, REINFORCE, RLOO, rejection sampling, and more. 🧠
- **Two training backends** — `verl` for distributed multi-GPU training, `tinker` for single-machine / CPU setups. Same API either way. 🔧

Read more on our [documentation site](https://docs.rllm-project.com/).

## Installation

[https://github.com/rllm-org/rllm#installation](https://github.com/rllm-org/rllm#installation)

rLLM requires `Python >= 3.11`. You can install it either directly via pip or build from source.

```
uv pip install "rllm @ git+https://github.com/rllm-org/rllm.git"
```

this installs dependencies for running rllm cli, which uses Tinker as the training backend.

To use `verl` as the training backend (GPU machine required), install via

```
# For distributed GPU training (verl + vLLM/SGLang)
uv pip install rllm[verl] @ git+https://github.com/rllm-org/rllm.git
```

For building from source or Docker, see the [installation guide](https://docs.rllm-project.com/installation).

## Quickstart

[https://github.com/rllm-org/rllm#quickstart](https://github.com/rllm-org/rllm#quickstart)

### Option A: CLI (no code needed)

[https://github.com/rllm-org/rllm#option-a-cli-no-code-needed](https://github.com/rllm-org/rllm#option-a-cli-no-code-needed)

```
# 1. Configure your model provider
rllm model setup

# 2. Evaluate on a benchmark
rllm eval gsm8k

# 3. Train with RL
rllm train gsm8k
```

### Option B: Python API

[https://github.com/rllm-org/rllm#option-b-python-api](https://github.com/rllm-org/rllm#option-b-python-api)

Define a rollout (your agent) and an evaluator (your reward function), then hand them to the trainer:

```
# my_flow.py
from openai import OpenAI
import rllm
from rllm.types import AgentConfig, Episode, Task, Trajectory

@rllm.rollout
def solve(task: Task, config: AgentConfig) -> Episode:
    client = OpenAI(base_url=config.base_url, api_key="EMPTY")
    response = client.chat.completions.create(
        model=config.model,
        messages=[{"role": "user", "content": task.instruction}],
    )
    answer = response.choices[0].message.content or ""
    return Episode(
        trajectories=[Trajectory(name="solver", steps=[])],
        artifacts={"answer": answer},
    )
```

```
# my_evaluator.py
import rllm
from rllm.eval.types import EvalOutput, Signal
from rllm.types import Episode

@rllm.evaluator
def score(task: dict, episode: Episode) -> EvalOutput:
    answer = str(episode.artifacts.get("answer", ""))
    is_correct = answer.strip() == task["ground_truth"].strip()
    reward = 1.0 if is_correct else 0.0
    return EvalOutput(reward=reward, is_correct=is_correct,
                      signals=[Signal(name="accuracy", value=reward)])
```

```
# train.py
from rllm.experimental.unified_trainer import AgentTrainer

trainer = AgentTrainer(
    backend="tinker",
    agent_flow=solve,
    evaluator=score,
    config=config,
    train_dataset=dataset,
)
trainer.train()
```

During training, `config.base_url` points to a gateway that transparently captures token IDs and logprobs — your agent code stays the same for eval and training.

See the [cookbooks](https://github.com/rllm-org/rllm/blob/main/cookbooks) for complete working examples (single-turn VLM solver, multi-agent solver-judge, and more).

## Architecture

[https://github.com/rllm-org/rllm#architecture](https://github.com/rllm-org/rllm#architecture)

rLLM follows a simple pipeline: **run your agent → collect traces → compute rewards → update the model**.

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│  Your Agent  │───▶│    Traces     │───▶│   Rewards    │───▶│  RL Update   │
│  (any code)  │    │  (auto-logged)│    │ (your logic) │    │  (GRPO etc.) │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
```

Your agent runs as-is — rLLM's model gateway captures LLM calls (token IDs + logprobs) by URL-routed sessions and structures them into **Episodes** (one task) containing **Trajectories** (one agent run) made of **Steps** (one LLM call). A reward function scores the result, and the RL algorithm updates the model weights. The same agent code works for both eval and training.

Under the hood:

- **Workflow Engine** runs N parallel agent instances to collect rollouts
- **Model Gateway** routes requests and captures token IDs + logprobs
- **Transform Pipeline** groups trajectories for advantage computation
- **Training Backend** (verl or tinker) handles the policy update

## Community Projects

[https://github.com/rllm-org/rllm#community-projects](https://github.com/rllm-org/rllm#community-projects)

- [Tongyi DeepResearch](https://github.com/Alibaba-NLP/DeepResearch) — Open-source AI researchers by Alibaba NLP [https://github.com/Alibaba-NLP/DeepResearch](https://github.com/Alibaba-NLP/DeepResearch)
- [Terminal-Bench-RL](https://github.com/Danau5tin/terminal-bench-rl) — Training long-horizon terminal agents with RL [https://github.com/Danau5tin/terminal-bench-rl](https://github.com/Danau5tin/terminal-bench-rl)
- [PettingLLMs](https://github.com/pettingllms-ai/PettingLLMs) — Multi-agent RL with on-policy training [https://github.com/pettingllms-ai/PettingLLMs](https://github.com/pettingllms-ai/PettingLLMs)
- [SETA](https://github.com/camel-ai/seta) — Scaling environments for terminal agents [https://github.com/camel-ai/seta](https://github.com/camel-ai/seta)
- [LLM-in-Sandbox](https://github.com/llm-in-sandbox/llm-in-sandbox) — Building general agents by running LLMs in a sandbox [https://github.com/llm-in-sandbox/llm-in-sandbox](https://github.com/llm-in-sandbox/llm-in-sandbox)
- [Vision-DeepResearch](https://github.com/Osilly/Vision-DeepResearch) — The first long-horizon multimodal deep-research MLLM [https://github.com/Osilly/Vision-DeepResearch](https://github.com/Osilly/Vision-DeepResearch)
- [Cogito, Ergo Ludo](https://www.arxiv.org/abs/2509.25052) — An agent that learns to play by reasoning and planning
- [Cut the Bill, Keep the Turns](https://agate-slipper-ef0.notion.site/Cut-the-Bill-Keep-the-Turns-Affordable-Multi-Turn-Search-RL-003f78214a4d451fb06f453d084e666c) — Affordable multi-turn search RL
- [Experiential Reinforcement Learning](https://arxiv.org/abs/2602.13949) — Experience-reflection-consolidation loop for RL with sparse rewards
- [V1: Unifying Generation and Self-Verification](https://arxiv.org/abs/2603.04304) — Pairwise self-verification for parallel test-time scaling
- [TherapyGym](https://therapygym.stanford.edu/) - Evaluating and Aligning Clinical Fidelity and Safety in Therapy Chatbots
- [SandMLE](https://arxiv.org/pdf/2604.04872) - Synthetic Sandbox for Training MLE Agents

## Articles & Blog Posts

[https://github.com/rllm-org/rllm#articles--blog-posts](https://github.com/rllm-org/rllm#articles--blog-posts)

- [rLLM UI: Real-Time Observability Tool for Agent Training & Evaluation](https://rllm-project.com/post.html?post=rllm_ui.md) — Mar 2026
- [rLLM On-Policy Distillation: Training Smaller Students from Stronger Teachers](https://rllm-project.com/post.html?post=opd.md) — Mar 2026
- [Faster and Better: Open-Source Recipe for Deep Research Agents with Fully Async Training](https://rllm-project.com/post.html?post=async_rl.md) — Feb 2026
- [rLLM-FinQA: How a 4B Model Outperforms 235B and Rivals Gemini 2.5 Pro on Financial Analysis](https://rllm-project.com/post.html?post=finqa.md) — Feb 2026
- [rLLM SDK: Training Any Agentic Program without Code Changes](https://rllm-project.com/post.html?post=sdk.md) — Dec 2025
- [rLLM v0.2: RL Training for General Agentic Programs](https://rllm-project.com/post.html?post=rllm_v0.2.md) — Oct 2025
- [DeepSWE: Open-source SWE Agent via RL](https://pretty-radio-b75.notion.site/DeepSWE-Training-a-Fully-Open-sourced-State-of-the-Art-Coding-Agent-by-Scaling-RL-22281902c1468193aabbe9a8c59bbe33) — Jul 2025
- [DeepCoder: 14B Coder at O3-mini Level](https://pretty-radio-b75.notion.site/DeepCoder-A-Fully-Open-Source-14B-Coder-at-O3-mini-Level-1cf81902c14680b3bee5eb349a512a51) — Apr 2025
- [DeepScaleR: 1.5B Surpasses O1-Preview](https://pretty-radio-b75.notion.site/DeepScaleR-Surpassing-O1-Preview-with-a-1-5B-Model-by-Scaling-RL-19681902c1468005bed8ca303013a4e2) — Feb 2025

## Acknowledgements

[https://github.com/rllm-org/rllm#acknowledgements](https://github.com/rllm-org/rllm#acknowledgements)

Our work is done as part of [Berkeley Sky Computing Lab](https://sky.cs.berkeley.edu/). The rLLM team is generously supported by grants from [Laude Institute](https://www.laude.org/), [AWS](https://aws.amazon.com/), [Hyperbolic](https://www.hyperbolic.ai/), [Fireworks AI](https://fireworks.ai/), and [Modal](https://modal.com/). We pay special thanks to [Together AI](https://www.together.ai/) for the research partnership and compute support.

## Citation

[https://github.com/rllm-org/rllm#citation](https://github.com/rllm-org/rllm#citation)

```
@misc{rllm2025,
  title={rLLM: A Framework for Post-Training Language Agents},
  author={Sijun Tan and Michael Luo and Colin Cai and Tarun Venkat and Kyle Montgomery and Aaron Hao and Tianhao Wu and Arnav Balyan and Manan Roongta and Chenguang Wang and Li Erran Li and Raluca Ada Popa and Ion Stoica},
  year={2025},
  howpublished={\url{https://pretty-radio-b75.notion.site/rLLM-A-Framework-for-Post-Training-Language-Agents-21b81902c146819db63cd98a54ba5f31}},
  note={Notion Blog},
}
```

You may also cite our prior work [DeepScaleR](https://scholar.googleusercontent.com/scholar.bib?q=info:PrmBADk39GwJ:scholar.google.com/&output=citation&scisdr=CgIJFx-xEMCQ6zOgcuI:AAZF9b8AAAAAaPCmauIfzg8Rm9ImNYDad0uPUK8&scisig=AAZF9b8AAAAAaPCmahXsNqb1jTQBw2iPfw2vm9g&scisf=4&ct=citation&cd=-1&hl=en&scfhb=1), [DeepCoder](https://scholar.googleusercontent.com/scholar.bib?q=info:xpZNEPI6opAJ:scholar.google.com/&output=citation&scisdr=CgIJFx-xEMCQ6zOgjM8:AAZF9b8AAAAAaPCmlM_hb3S0tzBSVrRYBZYDLWg&scisig=AAZF9b8AAAAAaPCmlG109SG8d8230AiDP4jMxlw&scisf=4&ct=citation&cd=-1&hl=en&scfhb=1), and [DeepSWE](https://scholar.googleusercontent.com/scholar.bib?q=info:J9rT3SnY_aMJ:scholar.google.com/&output=citation&scisdr=CgIJFx-xEMCQ6zOg3D4:AAZF9b8AAAAAaPCmxD7Nl0xA_AcAeydpcE1BXCo&scisig=AAZF9b8AAAAAaPCmxE2Spzf5lf-2Toys5xEpnuA&scisf=4&ct=citation&cd=-1&hl=en&scfhb=1).

## About

         Democratizing Reinforcement Learning for LLMs       

[docs.rllm-project.com](https://docs.rllm-project.com)

### Topics

[machine-learning](https://github.com/topics/machine-learning)[reinforcement-learning](https://github.com/topics/reinforcement-learning)[tinker](https://github.com/topics/tinker)[distributed-training](https://github.com/topics/distributed-training)[ml-infrastructure](https://github.com/topics/ml-infrastructure)[ml-platform](https://github.com/topics/ml-platform)[agent-framework](https://github.com/topics/agent-framework)[search-agent](https://github.com/topics/search-agent)[llm-training](https://github.com/topics/llm-training)[llm-reasoning](https://github.com/topics/llm-reasoning)[agentic-workflow](https://github.com/topics/agentic-workflow)[swe-agent](https://github.com/topics/swe-agent)[verl](https://github.com/topics/verl)[coding-agent](https://github.com/topics/coding-agent)

### Resources

[Readme](https://github.com/rllm-org/rllm#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/rllm-org/rllm#Apache-2.0-1-ov-file)

### Contributing

[Contributing](https://github.com/rllm-org/rllm#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/rllm-org/rllm/activity)

[Custom properties](https://github.com/rllm-org/rllm/custom-properties)

### Stars

[5.5k
        stars](https://github.com/rllm-org/rllm/stargazers)

### Watchers

[30
        watching](https://github.com/rllm-org/rllm/watchers)

### Forks
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

