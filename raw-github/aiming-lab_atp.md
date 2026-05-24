---
repo: aiming-lab/atp
url: https://github.com/aiming-lab/atp
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - aiming-lab/ATP: Alignment Tipping Process: How Self-Evolution Pushes LLM Agents Off the Rails · GitHub

**Source**: https://github.com/aiming-lab/atp

---

[Skip to content](https://github.com/aiming-lab/atp#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[aiming-lab](https://github.com/aiming-lab)

/
**[ATP](https://github.com/aiming-lab/ATP)**

Public

- [Notifications](https://github.com/login?return_to=%2Faiming-lab%2FATP)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Faiming-lab%2FATP)
- 
[Star
          10](https://github.com/login?return_to=%2Faiming-lab%2FATP)

[https://github.com/aiming-lab/ATP](https://github.com/aiming-lab/ATP)

[Branches](https://github.com/aiming-lab/ATP/branches)[Tags](https://github.com/aiming-lab/ATP/tags)

[https://github.com/aiming-lab/ATP/branches](https://github.com/aiming-lab/ATP/branches)[https://github.com/aiming-lab/ATP/tags](https://github.com/aiming-lab/ATP/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| data | data |  |  |
| llama-factory-config | llama-factory-config |  |  |
| media | media |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Alignment Tipping Process (ATP)

[https://github.com/aiming-lab/atp#alignment-tipping-process-atp](https://github.com/aiming-lab/atp#alignment-tipping-process-atp)

## Overview

[https://github.com/aiming-lab/atp#overview](https://github.com/aiming-lab/atp#overview)

We proposed Alignment Tipping Process (ATP), a critical post-deployment risk specific to self-evolving LLM agents. ATP describes how continual real-world interaction can cause agents to gradually abandon their initial alignment constraints in favor of self-interested, reward-maximizing behaviors. We formalize ATP through two complementary paradigms: **Self-Interested Exploration**, which captures individual behavioral drift induced by repeated high-reward deviations, and **Imitative Strategy Diffusion**, which models the spread of deviant strategies across multi-agent systems. Experimental results demonstrate that alignment degrades rapidly during self-evolution, with aligned models converging toward unaligned states. Current reinforcement learning–based alignment techniques offer only fragile protection against this tipping process, revealing that model alignment is dynamic and vulnerable to feedback-driven decay.

[https://github.com/aiming-lab/ATP/blob/main/media/main.png](https://github.com/aiming-lab/ATP/blob/main/media/main.png)

We provide training and testing workflows for **Self-Interested Exploration (Role-play Scenario)** and **Imitative Strategy Diffusion** in this repository.

## Environment Setup

[https://github.com/aiming-lab/atp#environment-setup](https://github.com/aiming-lab/atp#environment-setup)

```
cd src
conda create -n atp python=3.12 -y
conda activate atp
bash install.sh
```

Notes: `install.sh` installs flash-attn by default. Make sure your CUDA toolkit version is above 12, otherwise flash-attn couldn't be properly installed. You can also run the workflow without flash-attn(which only used in GRPO training) by commenting line 22 in `config/sa_llm_grpo.yaml` and `config/ma_llm_grpo.yaml`.

## Directory and Naming Conventions

[https://github.com/aiming-lab/atp#directory-and-naming-conventions](https://github.com/aiming-lab/atp#directory-and-naming-conventions)

Scripts use Hydra for configuration. Always run from the `src` directory.

- Files containing `sa` correspond to **Self-Interested Exploration (Role-play Scenario)**.
- Files containing `ma` correspond to **Imitative Strategy Diffusion**.

```
src/scripts/dpo_sa_gen.py     # Collect SA DPO raw pairs
src/scripts/dpo_ma_gen.py     # Collect MA DPO raw pairs
src/scripts/convert_dpo.py    # Convert raw pairs to LlamaFactory DPO preference format
src/scripts/llm_grpo.py       # GRPO training (default SA, switch to MA via --config-name ma_llm_grpo)
src/scripts/test_sa.py        # SA evaluation
src/scripts/test_ma.py        # MA evaluation
```

---

## Self-Interested Exploration (Role-play Scenario)

[https://github.com/aiming-lab/atp#self-interested-exploration-role-play-scenario](https://github.com/aiming-lab/atp#self-interested-exploration-role-play-scenario)

### Data Collection (DPO raw samples)

[https://github.com/aiming-lab/atp#data-collection-dpo-raw-samples](https://github.com/aiming-lab/atp#data-collection-dpo-raw-samples)

Default config: `src/config/dpo_sa_gen.yaml` (dataset: `src/config/dataset/atp_sa_llm.yaml`, model: `src/config/model/qwen3_8B.yaml`).

```
cd src
python scripts/dpo_sa_gen.py
```

Hydra overrides example (using llama3.1):

```
python scripts/dpo_sa_gen.py model=llama31
```

Output: ` results/sa_llm/dpo_train_data/<model_name>/<timestamp>.json`

### Convert to LLaMA-Factory DPO format

[https://github.com/aiming-lab/atp#convert-to-llama-factory-dpo-format](https://github.com/aiming-lab/atp#convert-to-llama-factory-dpo-format)

```
cd src
python scripts/convert_dpo.py ../results/sa_llm/dpo_train_data/<model_name>/<timestamp>.json -o ../data/sa_llm/dpo_train_data/<model_name>.json
```

### Train DPO with LLaMA-Factory

[https://github.com/aiming-lab/atp#train-dpo-with-llama-factory](https://github.com/aiming-lab/atp#train-dpo-with-llama-factory)

Follow the instruction of [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory) and install the environment.

Append the generated data's info to LLaMA-Factory's `data/dataset_info.json`. For example:

```
[
  ...,
  "arc_dpo_llama_sa_llm": {
    "file_name": ".../ATP/data/sa_llm/dpo_train_data/<model_name>.json",
    "ranking": true,
    "columns": {
      "prompt": "instruction",
      "query": "input",
      "chosen": "chosen",
      "rejected": "rejected"
    }
  }
]
```

Then you could use the config files in `ATP/llama-factory-config`. For example:

```
cd LLaMA-Factory
llamafactory-cli train .../ATP/llama-factory-config/llama3_lora_dpo_arc.yaml
```

### Training (GRPO)

[https://github.com/aiming-lab/atp#training-grpo](https://github.com/aiming-lab/atp#training-grpo)

Default config: `src/config/sa_llm_grpo.yaml`. Train Qwen3-8B.

```
cd src
python scripts/llm_grpo.py
```

Override training parameters(train llama3.1-8B):

```
python scripts/llm_grpo.py model_id="meta-llama/Meta-Llama-3.1-8B-Instruct"
```

Note: If you used deepspeed during GRPO training (which is used by default), you should run `zero_to_fp32.py` in the `src/training_output/<checkpoint_dir>` to convert the weight to huggingface format.

```
python zero_to_fp32.py <checkpoint_dir> <output_dir> --safe_serialization
```

### Testing

[https://github.com/aiming-lab/atp#testing](https://github.com/aiming-lab/atp#testing)

Fill trained model paths into the corresponding model configs, then run the test.

1. DPO (LoRA) — edit `src/config/model/qwen3_8B_sa_dpo.yaml` or `src/config/model/llama31_sa_dpo.yaml`:

```
lora_path: <your_dpo_lora_path>
```

1. GRPO — edit `src/config/model/qwen3_8B_sa_grpo.yaml` or `src/config/model/llama31_sa_grpo.yaml`:

```
model_id: <your_grpo_ckpt_path>
```

1. Switch default model in `src/config/test_sa.yaml` or using hydra overrides (example: to DPO):

```
defaults:
  - model: qwen3_8B_sa_dpo
  - _self_
```

Run the test:

```
cd ATP/src
python scripts/test_sa.py

# or override model from CLI
python scripts/test_sa.py model=qwen3_8B_sa_dpo
```

Results (editable in yaml): `results/sa_llm/<model_name>-r<rounds>/`

---

## Imitative Strategy Diffusion

[https://github.com/aiming-lab/atp#imitative-strategy-diffusion](https://github.com/aiming-lab/atp#imitative-strategy-diffusion)

### Data Collection (DPO raw samples)

[https://github.com/aiming-lab/atp#data-collection-dpo-raw-samples-1](https://github.com/aiming-lab/atp#data-collection-dpo-raw-samples-1)

Default config: `src/config/dpo_ma_gen.yaml` (dataset: `src/config/dataset/atp_ma_llm.yaml`).

```
cd src
python scripts/dpo_ma_gen.py
```

Output: `results/ma_llm/dpo_train_data/<timestamp>.json`

### Convert to LlamaFactory DPO format

[https://github.com/aiming-lab/atp#convert-to-llamafactory-dpo-format](https://github.com/aiming-lab/atp#convert-to-llamafactory-dpo-format)

```
python scripts/convert_dpo.py ../results/ma_llm/dpo_train_data/<timestamp>.json -o ../data/ma_llm/dpo_train_data/ma_dpo.json
```

### Training (DPO)

[https://github.com/aiming-lab/atp#training-dpo](https://github.com/aiming-lab/atp#training-dpo)

Same as above Self-Interested Exploration (Role-play Scenario) section. Remember to use the converted data `data/ma_llm/dpo_train_data/ma_dpo.json` to train DPO.

### Training (GRPO)

[https://github.com/aiming-lab/atp#training-grpo-1](https://github.com/aiming-lab/atp#training-grpo-1)

Same as above Self-Interested Exploration (Role-play Scenario) section. Only switch to Imitative Strategy Diffusion GRPO config via `--config-name ma_llm_grpo`:

```
cd src
python scripts/llm_grpo.py --config-name ma_llm_grpo
```

### Testing

[https://github.com/aiming-lab/atp#testing-1](https://github.com/aiming-lab/atp#testing-1)

Fill trained model paths into the corresponding model configs, then run the test.

1. DPO (LoRA) — edit `src/config/model/qwen3_8B_ma_dpo.yaml`:

```
lora_path: <your_dpo_lora_path>
```

1. GRPO — edit `src/config/model/qwen3_8B_ma_grpo.yaml`:

```
model_id: <your_grpo_ckpt_path>
```

1. Switch default model in `src/config/test_ma.yaml` or using hydra overrides (example: to GRPO):

```
defaults:
  - model: qwen3_8B_ma_grpo
  - _self_
```

Run the test:

```
cd src
python scripts/test_ma.py

# or override model from CLI
python scripts/test_ma.py model=qwen3_8B_ma_grpo
```

Results: `results/ma_llm/<model_name>-r<max_rounds>-n<n_agents>/`

`test_ma.yaml` also defines the evaluation grid via `thresholds_abs` and `reward_sets`. Default to reproduce the paper’s settings.

---

## Configuration Reference (aligns with the paper)

[https://github.com/aiming-lab/atp#configuration-reference-aligns-with-the-paper](https://github.com/aiming-lab/atp#configuration-reference-aligns-with-the-paper)

```
Datasets:   src/config/dataset/atp_sa_llm.yaml, src/config/dataset/atp_ma_llm.yaml
Rewards:    src/config/reward/atp_sa.yaml, src/config/reward/atp_ma.yaml
Training:   src/config/train/grpo.yaml, src/config/sa_llm_grpo.yaml, src/config/ma_llm_grpo.yaml, llama-factory-config/*.yaml
Models:     src/config/model/qwen3_8B.yaml and *_sa_dpo.yaml/*_sa_grpo.yaml/*_ma_dpo.yaml/*_ma_grpo.yaml
Testing:    src/config/test_sa.yaml, src/config/test_ma.yaml
```

## Citation

[https://github.com/aiming-lab/atp#citation](https://github.com/aiming-lab/atp#citation)

If you use this repository or results, please cite the paper:

```
@article{han2025alignment,
  title={Alignment Tipping Process: How Self-Evolution Pushes LLM Agents Off the Rails},
  author={Han, Siwei and Liu, Jiaqi and Su, Yaofeng and Duan, Wenbo and Liu, Xinyuan and Xie, Cihang and Bansal, Mohit and Ding, Mingyu and Zhang, Linjun and Yao, Huaxiu},
  journal={arXiv preprint arXiv:2510.04860},
  year={2025}
}
```

## About

         Alignment Tipping Process: How Self-Evolution Pushes LLM Agents Off the Rails       

[arxiv.org/abs/2510.04860](https://arxiv.org/abs/2510.04860)

### Resources

[Readme](https://github.com/aiming-lab/atp#readme-ov-file)

### License

[MIT license](https://github.com/aiming-lab/atp#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/aiming-lab/ATP/activity)

[Custom properties](https://github.com/aiming-lab/ATP/custom-properties)

### Stars

[10
        stars](https://github.com/aiming-lab/ATP/stargazers)

### Watchers

[0
        watching](https://github.com/aiming-lab/ATP/watchers)

### Forks

[0
        forks](https://github.com/aiming-lab/ATP/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Faiming-lab%2FATP&report=aiming-lab+%28user%29)

## [Contributors](https://github.com/aiming-lab/ATP/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.8%](https://github.com/aiming-lab/ATP/search?l=python)
- [Shell
          0.2%](https://github.com/aiming-lab/ATP/search?l=shell)

     You can’t perform that action at this time.
