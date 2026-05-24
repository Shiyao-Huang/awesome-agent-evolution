---
repo: sunzey/seagent
url: https://github.com/sunzey/seagent
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - SunzeY/SEAgent: [ICML-2026] Official implementation of "SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience" · GitHub

**Source**: https://github.com/sunzey/seagent

---

[Skip to content](https://github.com/sunzey/seagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[SunzeY](https://github.com/SunzeY)

/
**[SEAgent](https://github.com/SunzeY/SEAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2FSunzeY%2FSEAgent)You must be signed in to change notification settings
- [Fork
    25](https://github.com/login?return_to=%2FSunzeY%2FSEAgent)
- 
[Star
          246](https://github.com/login?return_to=%2FSunzeY%2FSEAgent)

[https://github.com/SunzeY/SEAgent](https://github.com/SunzeY/SEAgent)

[Branches](https://github.com/SunzeY/SEAgent/branches)[Tags](https://github.com/SunzeY/SEAgent/tags)

[https://github.com/SunzeY/SEAgent/branches](https://github.com/SunzeY/SEAgent/branches)[https://github.com/SunzeY/SEAgent/tags](https://github.com/SunzeY/SEAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| OSWorld | OSWorld |  |  |
| eval_AgentRewardBench | eval_AgentRewardBench |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| setup.sh | setup.sh |  |  |
| sft.sh | sft.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# SEAgent

[https://github.com/sunzey/seagent#seagent](https://github.com/sunzey/seagent#seagent)

This repository is the official implementation of SEAgent.

**[SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience](https://arxiv.org/abs/2508.04700)**
[Zeyi Sun](https://sunzey.github.io/), [Ziyu Liu](https://liuziyu77.github.io/), [Yuhang Zang](https://yuhangzang.github.io/), [Yuhang Cao](https://scholar.google.com/citations?user=sJkqsqkAAAAJ/), [Xiaoyi Dong](https://lightdxy.github.io/), [Tong Wu](https://wutong16.github.io/), [Dahua Lin](http://dahua.site/), [Jiaqi Wang](https://myownskyw7.github.io/)

 📖[Paper](https://arxiv.org/abs/2508.04700) | 🤗[SEAgent-1.0-7B](https://huggingface.co/Zery/SEAgent-1.0-7B) | 🤗[World State Model-7B](https://huggingface.co/Zery/CUA_World_State_Model)

## 👨‍💻 Todo

[https://github.com/sunzey/seagent#%E2%80%8D-todo](https://github.com/sunzey/seagent#%E2%80%8D-todo)

-  Training code of SEAgent based on OpenRLHF.
-  Training code of SEAgent based on R1-V.
-  Task Generation code based on Curriculum Generator.
-  Inference code of SEAgent on OSWorld.
-  Inference code of World-State-Model on AgentRewardBench.
-  Release of SEAgent-1.0-7B.
-  Release of World-State-Model-1.0-7B.

## 🛠️ Usage

[https://github.com/sunzey/seagent#%EF%B8%8F-usage](https://github.com/sunzey/seagent#%EF%B8%8F-usage)

### Installation

[https://github.com/sunzey/seagent#installation](https://github.com/sunzey/seagent#installation)

```
conda create -n seagent python=3.11 
conda activate seagent
bash setup.sh
```

## Training

[https://github.com/sunzey/seagent#training](https://github.com/sunzey/seagent#training)

RL: `src/r1-v/run_grpo_gui_8_7b.sh`

SFT: `sft.sh`

## Inference

[https://github.com/sunzey/seagent#inference](https://github.com/sunzey/seagent#inference)

```
# deploy SEAgent-1.0-7B model

vllm serve Zery/SEAgent-1.0-7B \
    --served-model-name "ui-tars-1.0-7b" \
    --host 0.0.0.0 \
    --port "${PORT}" \
    --tensor-parallel-size "${TP}" &

export UI_TARS_1_0_URL=http://YOUR.IP.ADDRESS:PORT/v1
model_name="ui-tars-1.0-7b"
# test on five software only.
python run_multienv_uitars_1_0.py \
    --headless --observation_type screenshot --model ui-tars-1.0-7b \
    --result_dir ./results_en_test_1_0/all_l15_h5/${model_name} --num_envs 8 --sleep_after_execution 2.0 \
    --max_tokens 1000 --top_p 0.9 --temperature 1.0 --max_trajectory_length 15 --history_n 1
```

### OSworld

[https://github.com/sunzey/seagent#osworld](https://github.com/sunzey/seagent#osworld)

```
cd OSWorld
```

Change IP to vllm deployed UI_TARS or SEAgent.

```
bash run_multienv_uitars_1_0_full.sh
```

## Sample Curriculum Data.

[https://github.com/sunzey/seagent#sample-curriculum-data](https://github.com/sunzey/seagent#sample-curriculum-data)

### Generate Task Instructions

[https://github.com/sunzey/seagent#generate-task-instructions](https://github.com/sunzey/seagent#generate-task-instructions)

```
cd OSWorld
```

Deploy World State Model and Curriculum Generator for task generation.

```
CUDA_VISIBLE_DEVICES=0,1,2,3 vllm serve "Qwen/Qwen2.5-72B-Instruct" --served-model-name qwen72b --port 8002 --tensor-parallel-size 4
CUDA_VISIBLE_DEVICES=4,5,6,7 vllm serve "Zery/CUA_World_State_Model" --served-model-name gui_judge --port 8001 --tensor-parallel-size 4
```

After deploy model for task generation, use `task_buffer/task_buffer_update_from_qwen.py` to update task.

```
python task_buffer/task_buffer_update_from_qwen.py \
    --judge_model gui_judge \
    --phase -1 \
    --software vscode \
    --base_result_dir results_en_phase_qwen
```

Set different software and phase number (-1 for initial phase) to generate curriculumed tasks.

### Executing Instructions

[https://github.com/sunzey/seagent#executing-instructions](https://github.com/sunzey/seagent#executing-instructions)

Deploy Actor Model (UI-TARS as initialization.)

```
CUDA_VISIBLE_DEVICES=0 python -m vllm.entrypoints.openai.api_server --served-model-name ui-tars --port 8001 \
    --model bytedance-research/UI-TARS-7B-DPO --limit-mm-per-prompt image=5 -tp 1
```

run `run_multienv_uitars_new_traj_evolve.sh` to sample trajectories with actor agent.

```
export VLLM_BASE_URL=http://YOUR.IP.ADDRESS:PORT/v1
for software in vs_code; do
    python run_multienv_uitars_new_traj_evolve.py \
        --headless --observation_type screenshot_a11y_tree --model ui_tars_7b_dpo --test_all_meta_path ./task_buffer/task_buffer_qwen_${software}_phase0.json \
        --result_dir ./results_en_phase0/7b_new_traj_multi_env=8_${software}_new_fix_nimg=1_maxtraj=15_t=0.0_r0 --num_envs 8 \
        --max_tokens 1000 --top_p 0.9 --temperature 1.0 --max_trajectory_length 15 --history_n 1 --software ${software}
done
```

### Judge the trajectories and generate pseudo labeled SFT/RL data with World State Model.

[https://github.com/sunzey/seagent#judge-the-trajectories-and-generate-pseudo-labeled-sftrl-data-with-world-state-model](https://github.com/sunzey/seagent#judge-the-trajectories-and-generate-pseudo-labeled-sftrl-data-with-world-state-model)

1. Deploy World State Model via vllm.

```
CUDA_VISIBLE_DEVICES=4,5,6,7 vllm serve "Zery/CUA_World_State_Model" --served-model-name gui_judge --port 8001 --tensor-parallel-size 4
```

1. Use `judge_full_process.sh` to judge previous generated trajectories.
2. Use `gen_sft.py` to generate training data for training process. The `7b_positive_xxx.json` can be directly used for SFT (Behavior Cloning) training. The `7b_positive_xxx.json` and `7b_negative_xxx.json` can be used for RL. You can use `visualize_data.py` to visualize generated data.

## Evaluation of World State Model on AgentRewardBench.

[https://github.com/sunzey/seagent#evaluation-of-world-state-model-on-agentrewardbench](https://github.com/sunzey/seagent#evaluation-of-world-state-model-on-agentrewardbench)

We test our World State Model on [AgentRewardBench](https://github.com/McGill-NLP/agent-reward-bench) to test its accuracy for judging the success/failure for agent's trajectories. As it adopts middle states' screenshots for judgment, you need to modify some of the code to input more images with new prompt template. After install AgentRewardBench, replace the `scripts/run_judge.py`, `agent_reward_bench/judge/__init__.py`, `agent_reward_bench/judge/defaults.py` with newly added functions and prompt template.

Use `bash run_judge.sh` to reproduce our results.

## Evaluation of World State Model on OSWorld.

[https://github.com/sunzey/seagent#evaluation-of-world-state-model-on-osworld](https://github.com/sunzey/seagent#evaluation-of-world-state-model-on-osworld)

use `OSWorld/eval_osworld_bench.py`

## Acknowledgements

[https://github.com/sunzey/seagent#acknowledgements](https://github.com/sunzey/seagent#acknowledgements)

We sincerely thank [UI-TARS](https://github.com/bytedance/UI-TARS), [OSWorld](https://github.com/xlang-ai/OSWorld), [R1-V](https://github.com/Deep-Agent/R1-V), [DeepSeek](https://github.com/deepseek-ai/DeepSeek-R1), [Open-R1](https://github.com/huggingface/open-r1), [QwenVL](https://github.com/QwenLM/Qwen2.5-VL), for providing open source resources and to build the project.

## ✒️ Citation

[https://github.com/sunzey/seagent#%EF%B8%8F-citation](https://github.com/sunzey/seagent#%EF%B8%8F-citation)

```
@misc{sun2025seagentselfevolvingcomputeruse,
      title={SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience}, 
      author={Zeyi Sun and Ziyu Liu and Yuhang Zang and Yuhang Cao and Xiaoyi Dong and Tong Wu and Dahua Lin and Jiaqi Wang},
      year={2025},
      eprint={2508.04700},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2508.04700}, 
}
```

## 📄 License

[https://github.com/sunzey/seagent#-license](https://github.com/sunzey/seagent#-license)

[https://camo.githubusercontent.com/3752376954a462f41995260610bc9102c6f4fff1f037363269c3ffe284950a66/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f64652532304c6963656e73652d4170616368655f322e302d677265656e2e737667](https://camo.githubusercontent.com/3752376954a462f41995260610bc9102c6f4fff1f037363269c3ffe284950a66/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f64652532304c6963656e73652d4170616368655f322e302d677265656e2e737667)[https://camo.githubusercontent.com/1c1e74cde18d109a4fd12d75ddbd14450f8498638bec892fc0221fae4f7b27ea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446174612532304c6963656e73652d434325323042792532304e43253230342e302d7265642e737667](https://camo.githubusercontent.com/1c1e74cde18d109a4fd12d75ddbd14450f8498638bec892fc0221fae4f7b27ea/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446174612532304c6963656e73652d434325323042792532304e43253230342e302d7265642e737667)**Usage and License Notices**: The data and code are intended and licensed for research use only. License: Attribution-NonCommercial 4.0 International It should abide by the policy of OpenAI: [https://openai.com/policies/terms-of-use](https://openai.com/policies/terms-of-use)

## Acknowledgement

[https://github.com/sunzey/seagent#acknowledgement](https://github.com/sunzey/seagent#acknowledgement)

We sincerely thank projects [UI-TARS](https://github.com/Deep-Agent/R1-V), [OSWorld](https://os-world.github.io/), [AgentRewardBench](https://github.com/McGill-NLP/agent-reward-bench), [R1-V](https://github.com/Deep-Agent/R1-V), for providing their open-source resources.

## About

         [ICML-2026] Official implementation of "SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience"       

### Topics

[agent](https://github.com/topics/agent)[rl](https://github.com/topics/rl)[vllm](https://github.com/topics/vllm)[gui-agent](https://github.com/topics/gui-agent)[self-evolving-systems](https://github.com/topics/self-evolving-systems)[grpo](https://github.com/topics/grpo)[computer-use-agent](https://github.com/topics/computer-use-agent)[osworld](https://github.com/topics/osworld)

### Resources

[Readme](https://github.com/sunzey/seagent#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/SunzeY/SEAgent/activity)

### Stars

[246
        stars](https://github.com/SunzeY/SEAgent/stargazers)

### Watchers

[11
        watching](https://github.com/SunzeY/SEAgent/watchers)

### Forks

[25
        forks](https://github.com/SunzeY/SEAgent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FSunzeY%2FSEAgent&report=SunzeY+%28user%29)

## [Releases](https://github.com/SunzeY/SEAgent/releases)

No releases published

## [Packages
      0](https://github.com/users/SunzeY/packages?repo_name=SEAgent)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/SunzeY/SEAgent/graphs/contributors)

-
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

