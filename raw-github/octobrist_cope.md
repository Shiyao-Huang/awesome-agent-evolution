---
repo: octobrist/cope
url: https://github.com/octobrist/cope
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Octobrist/CoPE: A LLM-based agent optimization framework that assesses and incorporates planning-execution coordination into agent optimization. (ICML 2026) · GitHub

**Source**: https://github.com/octobrist/cope

---

[Skip to content](https://github.com/octobrist/cope#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Octobrist](https://github.com/Octobrist)

/
**[CoPE](https://github.com/Octobrist/CoPE)**

Public

- [Notifications](https://github.com/login?return_to=%2FOctobrist%2FCoPE)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FOctobrist%2FCoPE)
- 
[Star
          11](https://github.com/login?return_to=%2FOctobrist%2FCoPE)

[https://github.com/Octobrist/CoPE](https://github.com/Octobrist/CoPE)

[Branches](https://github.com/Octobrist/CoPE/branches)[Tags](https://github.com/Octobrist/CoPE/tags)

[https://github.com/Octobrist/CoPE/branches](https://github.com/Octobrist/CoPE/branches)[https://github.com/Octobrist/CoPE/tags](https://github.com/Octobrist/CoPE/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7 Commits7 Commits |  |  |  |
| assets | assets |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# CoPE: A Framework for Optimizing Coordination between Planning and Execution in LLM Agents

[https://github.com/octobrist/cope#cope-a-framework-for-optimizing-coordination-between-planning-and-execution-in-llm-agents](https://github.com/octobrist/cope#cope-a-framework-for-optimizing-coordination-between-planning-and-execution-in-llm-agents)

## Description

[https://github.com/octobrist/cope#description](https://github.com/octobrist/cope#description)

A LLM-based agent optimization framework that assesses and incorporates planning-execution coordination into agent optimization.

## Overview

[https://github.com/octobrist/cope#overview](https://github.com/octobrist/cope#overview)

[https://github.com/Octobrist/CoPE/blob/main/assets/CoPlanExec.png](https://github.com/Octobrist/CoPE/blob/main/assets/CoPlanExec.png)

## Environment

[https://github.com/octobrist/cope#environment](https://github.com/octobrist/cope#environment)

- Python=3.10
- Dependencies in `requirements.txt`
- Install vllm (vllm-0.5.5%2Bcu118-cp310-cp310-manylinux1_x86_64.whl#sha256=d870018810d7c2cb16b072ec92392f33a8d6d1afa558026a8b72486dada9d934) from [https://github.com/vllm-project/vllm/releases](https://github.com/vllm-project/vllm/releases)

## Repo Struction

[https://github.com/octobrist/cope#repo-struction](https://github.com/octobrist/cope#repo-struction)

CoPE/ ├── README.md ├── assets/ │   └── CoPlanExec.png └── src/ # source code

## Start

[https://github.com/octobrist/cope#start](https://github.com/octobrist/cope#start)

1. 

Download env data
`cd src/world`
`bash download_data.sh`

2. 

Start LLM controller
`cd src`
`export PYTHONPATH=./`
`python -m fastchat.serve.controller`

3. 

Serve the LLM agents
`cd src/fastchat`
`bash start_multiple_vllm_server-a100.sh`

4. 

Generate train/test data
`python world/mcts.py --dataset alfworld/sciworld --save_path /path/to/save_data/ --plan_model_name qwen-plan-0 --gen_model_name qwen-gen-0 --split train/dev/test`

5. 

Model Training We use repository alignment-handbook ([https://github.com/huggingface/alignment-handbook](https://github.com/huggingface/alignment-handbook)) for model inital SFT. And then use repository HALOs [https://github.com/ContextualAI/HALOs](https://github.com/ContextualAI/HALOs) for DPO&KTO training. In the `src/HALOs/data` directory, we store examples of training data used for planning and executing.

6. 

Assess and build training set
`cd src/HALOs`
`python preprocessing/build_plan_pair.py`

7. 

Optimizing agents with CW-DPO/CW-KTO reinforcement learning algorithm
`accelerate launch --config_file accelerate_config/fsdp_2gpu.yaml --main_process_port 29500  launch.py loss=my-kto model=qwen datasets=[alfworld] exp_name=qwen_kto_my-kto ++cache_dir=/path/to/cache/ ++model.name_or_path=/path/to/model ++lr=5e-6`

`accelerate launch --config_file accelerate_config/fsdp_2gpu.yaml --main_process_port 29500  launch.py loss=my-dpo model=qwen datasets=[alfworld_plan] exp_name=qwen_kto_my-kto ++cache_dir=/path/to/cache/ ++model.name_or_path=/path/to/model ++lr=5e-6`

## About

         A LLM-based agent optimization framework that assesses and incorporates planning-execution coordination into agent optimization. (ICML 2026)       

### Resources

[Readme](https://github.com/octobrist/cope#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/octobrist/cope#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Octobrist/CoPE/activity)

### Stars

[11
        stars](https://github.com/Octobrist/CoPE/stargazers)

### Watchers

[0
        watching](https://github.com/Octobrist/CoPE/watchers)

### Forks

[0
        forks](https://github.com/Octobrist/CoPE/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FOctobrist%2FCoPE&report=Octobrist+%28user%29)

## [Releases](https://github.com/Octobrist/CoPE/releases)

No releases published

## [Packages
      0](https://github.com/users/Octobrist/packages?repo_name=CoPE)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Octobrist/CoPE/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.6%](https://github.com/Octobrist/CoPE/search?l=python)
- 

Other

0.4%

     You can’t perform that action at this time.
