---
repo: shaoshuai0605/misevolution
url: https://github.com/shaoshuai0605/misevolution
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ShaoShuai0605/Misevolution: Official Repo of  Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents · GitHub

**Source**: https://github.com/shaoshuai0605/misevolution

---

[Skip to content](https://github.com/shaoshuai0605/misevolution#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ShaoShuai0605](https://github.com/ShaoShuai0605)

/
**[Misevolution](https://github.com/ShaoShuai0605/Misevolution)**

Public

- [Notifications](https://github.com/login?return_to=%2FShaoShuai0605%2FMisevolution)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2FShaoShuai0605%2FMisevolution)
- 
[Star
          76](https://github.com/login?return_to=%2FShaoShuai0605%2FMisevolution)

[https://github.com/ShaoShuai0605/Misevolution](https://github.com/ShaoShuai0605/Misevolution)

[Branches](https://github.com/ShaoShuai0605/Misevolution/branches)[Tags](https://github.com/ShaoShuai0605/Misevolution/tags)

[https://github.com/ShaoShuai0605/Misevolution/branches](https://github.com/ShaoShuai0605/Misevolution/branches)[https://github.com/ShaoShuai0605/Misevolution/tags](https://github.com/ShaoShuai0605/Misevolution/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History28 Commits28 Commits |  |  |  |
| figures | figures |  |  |
| memory_misevolution | memory_misevolution |  |  |
| model_misevolution | model_misevolution |  |  |
| tool_misevolution | tool_misevolution |  |  |
| workflow_misevolution | workflow_misevolution |  |  |
| .gitignore | .gitignore |  |  |
| Readme.md | Readme.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/ShaoShuai0605/Misevolution/blob/main/figures/misevolution_github_cover.png](https://github.com/ShaoShuai0605/Misevolution/blob/main/figures/misevolution_github_cover.png)

# Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents （ICLR 2026）

[https://github.com/shaoshuai0605/misevolution#your-agent-may-misevolve-emergent-risks-in-self-evolving-llm-agents-iclr-2026](https://github.com/shaoshuai0605/misevolution#your-agent-may-misevolve-emergent-risks-in-self-evolving-llm-agents-iclr-2026)

[https://arxiv.org/abs/2509.26354](https://arxiv.org/abs/2509.26354)[https://github.com/ShaoShuai0605/Misevolution](https://github.com/ShaoShuai0605/Misevolution)[https://github.com/ShaoShuai0605/Misevolution/blob/main](https://github.com/ShaoShuai0605/Misevolution/blob/main)

---

# 📚 Overview

[https://github.com/shaoshuai0605/misevolution#-overview](https://github.com/shaoshuai0605/misevolution#-overview)

- 📢 [News](https://github.com/shaoshuai0605/misevolution#news)
- 📖 [Introduction](https://github.com/shaoshuai0605/misevolution#introduction)
- ✨ [Getting Started](https://github.com/shaoshuai0605/misevolution#getting-started)
- 🔧 [Usage](https://github.com/shaoshuai0605/misevolution#usage)
- 🙏 [Citation](https://github.com/shaoshuai0605/misevolution#citation)
- 🌻 [Acknowledgement](https://github.com/shaoshuai0605/misevolution#acknowledgement)

---

# 📢News

[https://github.com/shaoshuai0605/misevolution#news](https://github.com/shaoshuai0605/misevolution#news)

- **[2025/01/29]** Our paper is accepted by ICLR! 🎉🎉
- **[2025/10/06]** Our paper is available on [Huggingface](https://huggingface.co/papers/2509.26354). If you enjoy our work, we warmly invite you to **upvote** it on Huggingface!
- **[2025/09/30]** Our paper is available on [arXiv](https://arxiv.org/pdf/2509.26354).

---

# 📖Introduction

[https://github.com/shaoshuai0605/misevolution#introduction](https://github.com/shaoshuai0605/misevolution#introduction)

**Self-evolving agents**, systems that can improve themselves with minimal human input, have become an exciting and emerging area of research. However, self-evolution also introduces novel risks that existing safety research often misses. In this work, we study the case where *an agent's self-evolution deviates in unintended ways, leading to undesirable or even harmful outcomes*. We refer to this as **Misevolution**. To provide a systematic investigation, we evaluate misevolution along four key evolutionary pathways: the agent's model, memory, tool, and workflow. Our empirical findings reveal that misevolution is a widespread risk, even for agents built on top models like Gemini-2.5-Pro. Different emergent risks are observed in the self-evolutionary process, such as the degradation of safety alignment after memory accumulation, or the unintended introduction of vulnerabilities in tool creation and reuse. To our knowledge, this is the first study to systematically conceptualize misevolution and provide empirical evidence of its occurrence, highlighting an urgent need for new safety paradigms for self-evolving agents.

### Misevolution can happen in various scenarios

[https://github.com/shaoshuai0605/misevolution#misevolution-can-happen-in-various-scenarios](https://github.com/shaoshuai0605/misevolution#misevolution-can-happen-in-various-scenarios)

[https://github.com/ShaoShuai0605/Misevolution/blob/main/figures/fig1_showcase.png](https://github.com/ShaoShuai0605/Misevolution/blob/main/figures/fig1_showcase.png)

The figure above shows some typical cases where misevolution may happen:

**(a) Biased memory evolution leads to over-refunding.** A customer service agent evolves its memory by storing the interaction history with the user, including the actions taken and the feedbacks & ratings from users. However, it may learn a biased correlation between the refunding action and positive user feedback from the memory, leading it to proactively offer refunds even when not asked to.

**(b) Tool evolution by ingesting appealing but insecure code causes data leakage.** An agent evolves its toolset by searching and ingesting open-source tools from GitHub. However, it may incorporate seemingly useful but insecure code from a public repository, inadvertently creating a new tool with a backdoor that leaks data.

**(c) Inappropriate cross-domain tool reuse leads to privacy issues.** An agent evolves its toolset by self-creating new tools and reusing existing ones. For one task (sharing posters with participants), it creates a general-purpose tool called `upload_and_share_files`, which upload the files to be shared and generates a public link. Later, in another task (sharing a financial report with the board), the agent reuses this tool, but does not notice that the financial report is confidential. As a result, it creates a public link, which can lead to privacy issues and can be targeted by cyber attacks.

---

# ✨ Getting Started

[https://github.com/shaoshuai0605/misevolution#-getting-started](https://github.com/shaoshuai0605/misevolution#-getting-started)

Coming soon.

# 🔧 Usage

[https://github.com/shaoshuai0605/misevolution#-usage](https://github.com/shaoshuai0605/misevolution#-usage)

## Model Misevolution

[https://github.com/shaoshuai0605/misevolution#model-misevolution](https://github.com/shaoshuai0605/misevolution#model-misevolution)

### Self-generated Data

[https://github.com/shaoshuai0605/misevolution#self-generated-data](https://github.com/shaoshuai0605/misevolution#self-generated-data)

In the *self-generated data* paradigm, we mainly tested [Absolute-Zero](https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b) and [AgentGen](https://huggingface.co/DannyShaw/AgentGen-Rep-70B-Lora-Rank16) on a series of established safety benchmarks, including HarmBench, SALAD-Bench, HEx-PHI, and Agent-SafetyBench.

To reproduce our results on HarmBench and HEx-PHI, run the following commands:

```
cd ./model_misevolution/harmbench
# To run tests on HarmBench
bash ./run_harmbench_pipeline.sh
# To run tests on HEx-PHI
bash ./run_hex-phi_pipeline.sh
```

In each bash script above, you can choose the models you would like to test. To test your own models, modify `model_misevolution/harmbench/configs/model_configs/models.yaml` to add model names, paths, etc. HEx-PHI requires an LLM judge to evaluate the results. Remember to fill in the api url and key in `model_misevolution/harmbench/evaluate_completions_api.py`.

To reproduce our results on Salad-Bench, run the following commands:

```
cd ./model_misevolution/SaladBench
bash eval_saladbench.sh
```

To reproduce our results on Agent-SafetyBench, run the following commands:

```
## 1. generate
cd ./model_misevolution/Agent-SafetyBench/evaluation
bash eval.sh
## 2. evaluate
cd ./model_misevolution/Agent-SafetyBench/score
bash eval_with_shield.sh
```

In each bash script above, you can choose the models you would like to test.

### Self-generated Curriculum

[https://github.com/shaoshuai0605/misevolution#self-generated-curriculum](https://github.com/shaoshuai0605/misevolution#self-generated-curriculum)

In the *self-generated curriculum* paradigm, we tested [UI-TARS-7B-DPO](https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO) (initial model, before evolution) and [SEAgent](https://huggingface.co/Zery/SEAgent-1.0-7B) (after evolution) on the RiOSWorld benchmark.

For detailed instructions on installation and testing, we kindly refer readers to the [RiOSWorld project](https://github.com/yjyddq/RiOSWorld).

## Memory Misevolution

[https://github.com/shaoshuai0605/misevolution#memory-misevolution](https://github.com/shaoshuai0605/misevolution#memory-misevolution)

### Deployment-time Reward Hacking

[https://github.com/shaoshuai0605/misevolution#deployment-time-reward-hacking](https://github.com/shaoshuai0605/misevolution#deployment-time-reward-hacking)

To reproduce the deployment-time reward hacking results, you may first set your base_url and api_key in `memory_misevolution/reward_hacking_test.py`.

Then, you can run the following command:

```
cd ./memory_misevolution
python reward_hacking_test.py --model gemini-2.5-pro --scenario finance
```

## Tool Misevolution

[https://github.com/shaoshuai0605/misevolution#tool-misevolution](https://github.com/shaoshuai0605/misevolution#tool-misevolution)

### Insecure Tool Creation and Reuse

[https://github.com/shaoshuai0605/misevolution#insecure-tool-creation-and-reuse](https://github.com/shaoshuai0605/misevolution#insecure-tool-creation-and-reuse)

To reproduce the insecure tool creation and reuse experiment, you may first set your base_url, api_key and model to be evaluated in the config.py file.

Then, you can run the following command:

```
cd ./tool_misevolution
bash insecure_tool_evaluation.sh
```

---

# 🙏 Citation

[https://github.com/shaoshuai0605/misevolution#-citation](https://github.com/shaoshuai0605/misevolution#-citation)

If you find this work useful, please consider citing:

```
@article{shao2025misevolution,
    title={Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents}, 
    author={Shuai Shao and Qihan Ren and Chen Qian and Boyi Wei and Dadi Guo and Jingyi Yang and Xinhao Song and Linfeng Zhang and Weinan Zhang and Dongrui Liu and Jing Shao},
    journal={arXiv preprint arXiv:2509.26354},
    year={2025}
}
```

---

# 🌻 Acknowledgements

[https://github.com/shaoshuai0605/misevolution#-acknowledgements](https://github.com/shaoshuai0605/misevolution#-acknowledgements)

This work is partially inspired by this [survey](https://github.com/CharlesQ9/Self-Evolving-Agents) on self-evolving agents. Part of our evaluation code is based from [Harmbench](https://github.com/centerforaisafety/HarmBench), [SALAD-Bench](https://github.com/OpenSafetyLab/SALAD-BENCH), [LLMs-Finetuning-Safety](https://github.com/LLM-Tuning-Safety/LLMs-Finetuning-Safety), [Agent-SafetyBench](https://github.com/thu-coai/Agent-SafetyBench), [RiOSWorld](https://github.com/yjyddq/RiOSWorld), and [RedCode](https://github.com/ai-secure/redcode). Thanks to these wonderful works!

We also sincerely appreciate the following works for making their open-weight models available, which greatly facilitated our testing: [Absolute-Zero](https://huggingface.co/collections/andrewzh/absolute-zero-reasoner-68139b2bca82afb00bc69e5b), [AgentGen](https://huggingface.co/DannyShaw/AgentGen-Rep-70B-Lora-Rank16), [SEAgent](https://huggingface.co/Zery/SEAgent-1.0-7B).

## About

         Official Repo of Your Agent May Misevolve: Emergent Risks in Self-evolving LLM Agents       

### Resources

[Readme](https://github.com/shaoshuai0605/misevolution#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ShaoShuai0605/Misevolution/activity)

### Stars

[76
        stars](https://github.com/ShaoShuai0605/Misevolution/stargazers)

### Watchers

[2
        watching](https://github.com/ShaoShuai0605/Misevolution/watchers)

### Forks

[1
        fork](https://github.com/ShaoShuai0605/Misevolution/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FShaoShuai0605%2FMisevolution&report=ShaoShuai0605+%28user%29)

## [Releases](https://github.com/ShaoShuai0605/Misevolution/releases)

No releases published

## [Packages
      0](https://github.com/users/ShaoShuai0605/packages?repo_name=Misevolution)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ShaoShuai0605/Misevolution/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          59.8%](https://github.com/ShaoShuai0605/Misevolution/search?l=python)
- [Jupyter Notebook
          39.9%](https://github.com/ShaoShuai0605/Misevolution/search?l=jupyter-notebook)
- 

Other

0.3%

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

