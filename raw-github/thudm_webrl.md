---
repo: thudm/webrl
url: https://github.com/thudm/webrl
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - THUDM/WebRL: Building Open LLM Web Agents with Self-Evolving Online Curriculum RL · GitHub

**Source**: https://github.com/thudm/webrl

---

[Skip to content](https://github.com/thudm/webrl#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[THUDM](https://github.com/THUDM)

/
**[WebRL](https://github.com/THUDM/WebRL)**

Public

- [Notifications](https://github.com/login?return_to=%2FTHUDM%2FWebRL)You must be signed in to change notification settings
- [Fork
    37](https://github.com/login?return_to=%2FTHUDM%2FWebRL)
- 
[Star
          524](https://github.com/login?return_to=%2FTHUDM%2FWebRL)

[https://github.com/THUDM/WebRL](https://github.com/THUDM/WebRL)

[Branches](https://github.com/THUDM/WebRL/branches)[Tags](https://github.com/THUDM/WebRL/tags)

[https://github.com/THUDM/WebRL/branches](https://github.com/THUDM/WebRL/branches)[https://github.com/THUDM/WebRL/tags](https://github.com/THUDM/WebRL/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History48 Commits48 Commits |  |  |  |
| LLaMA-Factory | LLaMA-Factory |  |  |
| assets | assets |  |  |
| extras | extras |  |  |
| hparams | hparams |  |  |
| scripts | scripts |  |  |
| webrl.egg-info | webrl.egg-info |  |  |
| webrl | webrl |  |  |
| README.md | README.md |  |  |
| WebArena-Lite_info.json | WebArena-Lite_info.json |  |  |
| __init__.py | __init__.py |  |  |
| requirements.txt | requirements.txt |  |  |
| run_multinode.sh | run_multinode.sh |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning

[https://github.com/thudm/webrl#webrl-training-llm-web-agents-via-self-evolving-online-curriculum-reinforcement-learning](https://github.com/thudm/webrl#webrl-training-llm-web-agents-via-self-evolving-online-curriculum-reinforcement-learning)

[https://github.com/THUDM/WebRL/blob/main/assets/webrl.png](https://github.com/THUDM/WebRL/blob/main/assets/webrl.png)

*Technique adopted in [AutoGLM](https://xiao9905.github.io/AutoGLM/), a series of Phone Use and Web Browser Use Foundation Agents*

    📃 [Paper](https://arxiv.org/abs/2411.02337) | 🤗 [WebRL-GLM-4-9B](https://huggingface.co/THUDM/webrl-glm-4-9b) | [WebRL-LLaMA-3.1-8B](https://huggingface.co/THUDM/webrl-llama-3.1-8b) | [ModelScope](https://www.modelscope.cn/collections/WebRL-77a3e54a2dde4b)

---

WebRL, a self-evolving online curriculum learning framework designed for training web agents, targeting the WebArena environment.

## 🚀 Quick Start

[https://github.com/thudm/webrl#-quick-start](https://github.com/thudm/webrl#-quick-start)

### Dependencies

[https://github.com/thudm/webrl#dependencies](https://github.com/thudm/webrl#dependencies)

First, create a conda environment and install all pip package requirements.

```
conda create -n webrl python==3.10
conda activate webrl

cd WebRL
pip install -e .
```

### Model checkpoints

[https://github.com/thudm/webrl#model-checkpoints](https://github.com/thudm/webrl#model-checkpoints)

#### Actor checkpoints

[https://github.com/thudm/webrl#actor-checkpoints](https://github.com/thudm/webrl#actor-checkpoints)

The WebRL-GLM-4-9B checkpoint was released here and we use it:

- [WebRL-GLM-4-9B checkpoint](https://huggingface.co/THUDM/webrl-glm-4-9b)
- [WebRL-Llama-3.1-8B checkpoint](https://huggingface.co/THUDM/webrl-llama-3.1-8b)
- [WebRL-Llama-3.1-70B checkpoint](https://huggingface.co/THUDM/webrl-llama-3.1-70b)

#### ORM checkpoint

[https://github.com/thudm/webrl#orm-checkpoint](https://github.com/thudm/webrl#orm-checkpoint)

The checkpoint for Outcome-supervised Reward Model (ORM) is as follow:

- [ORM-Llama-3.1-8B checkpoint](https://huggingface.co/THUDM/webrl-orm-llama-3.1-8b/tree/main)

### ✈️ Train SFT model

[https://github.com/thudm/webrl#%EF%B8%8F-train-sft-model](https://github.com/thudm/webrl#%EF%B8%8F-train-sft-model)

We use LLaMA-Factory to train the SFT baseline, which is the starting model for WebRL. We release the code and data used for training. You can train the SFT baseline with the following commands:

```
cd LLaMA-Factory
bash run.sh examples/train_full/llama3_full_policy_web.yaml
```

### ✈️ Train WebRL

[https://github.com/thudm/webrl#%EF%B8%8F-train-webrl](https://github.com/thudm/webrl#%EF%B8%8F-train-webrl)

After training the SFT baseline, you should use it as the initial model of the actor and critic.  You can train WebRL with the following commands:

```
bash run_multinode.sh
```

This command is used to train the actor and critic in each phase.

### 💡 Generating New Instructions

[https://github.com/thudm/webrl#-generating-new-instructions](https://github.com/thudm/webrl#-generating-new-instructions)

You can generate new instructions with the following commands:

```
python scripts/gen_task.py
```

### 🛜 Interaction and Evaluation

[https://github.com/thudm/webrl#-interaction-and-evaluation](https://github.com/thudm/webrl#-interaction-and-evaluation)

The instruction and script for interaction with WebArena is provided in [VAB-WebArena-Lite](https://github.com/THUDM/VisualAgentBench/tree/main/VAB-WebArena-Lite). You can implement the interaction process of WebRL according to the [Evaluating in WebRL Setting (Text Modal)](https://github.com/THUDM/VisualAgentBench/tree/main/VAB-WebArena-Lite#-evaluating-in-webrl-setting-text-modal) section of VAB-WebArena-Lite.

To enable interaction with WebArena, you need to configure each task in the same format as the sample test case provided in the `test_webarena_lite.raw.json` file in VAB-WebArena-Lite. Below is the template for a task configuration:

```
{
  
  "sites": [
    <site> # possible choices: "shopping_admin", "map", "shopping", "reddit", "gitlab"
  ],
  "task_id": <Your task id>
  "require_login": true,
  "storage_state": "./.auth/shopping_admin_state.json",
  "start_url": <start url of site>, # possible choices: "__SHOPPING_ADMIN__", "__SHOPPING__", "__GITLAB__", "__MAP__", "__REDDIT__"
  "geolocation": null,
  "intent_template": "",
  "instantiation_dict": {},
  "intent": <Task>,
  "require_reset": false,
  "eval": {
    "eval_types": [
      "string_match"
    ],
    "reference_answers": {
      "exact_match": "N/A"
    },
    "reference_url": "",
    "program_html": [],
    "string_note": "",
    "reference_answer_raw_annotation": ""
  },
  "intent_template_id": 0
}
```

After configuring the tasks, use the script `scripts/generate_test_data.py` to generate the configuration files. Make sure to modify the data path in the script to point to the JSON file containing your configured interaction cases.

After interaction finished, run `scripts/process_data.py` to process the interaction trajectories.

```
python scripts/process_data.py \
  --stage 1 2 \
  --add_reward \
  --rollout_path <directory_of_interaction_trajectories> \
  --experience_paths "path1", "path2" \ 
  --orm_path <path_to_ORM_model> \
  --actor_path <path_to_actor_model_for_computing_perplexity> \
  --output_path <path_to_output_file>
```

- `stage`: Specifies the processing method for the data 
  - 1: Convert rollout trajectories into the required format.
  - 2: Incorporate historical experiences filtered by perplexity.

- `add_reward`: Apply ORM to label each trajectory.
- `output_path`: The file containing processed interaction trajectories, ready for direct use in training. 
  - stage 1: Processed interaction trajectories will be saved in this file. Contains data without historical experiences.
  - stage 2: An additional file, output_path + '_filter', will also be generated. 
    - output_path: Contain data without historical experiences.
    - output_path + '_filter': Contain data with historical experiences.

- `rollout_path`: Path to the `traces` subfolder containing initial interaction trajectories, typically generated after running Webarena-Lite.
- `experience_paths`: List of file paths to processed interaction data (`output_path`) from previous phases. We provide the SFT data with the modified format that can be used as experience data, in `/scripts/webarena_lite_sft.pt`.

Both output_path and output_path + '_filter' are formatted for direct use in subsequent training.

## Citation

[https://github.com/thudm/webrl#citation](https://github.com/thudm/webrl#citation)

```
@article{qi2024webrl,
  title={WebRL: Training LLM Web Agents via Self-Evolving Online Curriculum Reinforcement Learning},
  author={Qi, Zehan and Liu, Xiao and Iong, Iat Long and Lai, Hanyu and Sun, Xueqiao and Yang, Xinyue and Sun, Jiadai and Yang, Yu and Yao, Shuntian and Zhang, Tianjie and others},
  journal={arXiv preprint arXiv:2411.02337},
  year={2024}
}
```

## About

         Building Open LLM Web Agents with Self-Evolving Online Curriculum RL       

### Resources

[Readme](https://github.com/thudm/webrl#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/THUDM/WebRL/activity)

[Custom properties](https://github.com/THUDM/WebRL/custom-properties)

### Stars

[524
        stars](https://github.com/THUDM/WebRL/stargazers)

### Watchers

[15
        watching](https://github.com/THUDM/WebRL/watchers)

### Forks

[37
        forks](https://github.com/THUDM/WebRL/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FTHUDM%2FWebRL&report=THUDM+%28user%29)

## [Releases](https://github.com/THUDM/WebRL/releases)

No releases published

## [Packages
      0](https://github.com/orgs/THUDM/packages?repo_name=WebRL)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/THUDM/WebRL/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.3%](https://github.com/THUDM/WebRL/search?l=python)
- 

Other

0.7%
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

