---
repo: imgeorgiev/pwm
url: https://github.com/imgeorgiev/pwm
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - imgeorgiev/PWM: PWM: Policy Learning with Large World Models · GitHub

**Source**: https://github.com/imgeorgiev/pwm

---

[Skip to content](https://github.com/imgeorgiev/pwm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[imgeorgiev](https://github.com/imgeorgiev)

/
**[PWM](https://github.com/imgeorgiev/PWM)**

Public

- [Notifications](https://github.com/login?return_to=%2Fimgeorgiev%2FPWM)You must be signed in to change notification settings
- [Fork
    6](https://github.com/login?return_to=%2Fimgeorgiev%2FPWM)
- 
[Star
          68](https://github.com/login?return_to=%2Fimgeorgiev%2FPWM)

[https://github.com/imgeorgiev/PWM](https://github.com/imgeorgiev/PWM)

[Branches](https://github.com/imgeorgiev/PWM/branches)[Tags](https://github.com/imgeorgiev/PWM/tags)

[https://github.com/imgeorgiev/PWM/branches](https://github.com/imgeorgiev/PWM/branches)[https://github.com/imgeorgiev/PWM/tags](https://github.com/imgeorgiev/PWM/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History19 Commits19 Commits |  |  |  |
| external | external |  |  |
| figures | figures |  |  |
| pedagogical | pedagogical |  |  |
| results | results |  |  |
| scripts | scripts |  |  |
| src/pwm | src/pwm |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| environment.yaml | environment.yaml |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# PWM: Policy Learning with Large World Models

[https://github.com/imgeorgiev/pwm#pwm-policy-learning-with-large-world-models](https://github.com/imgeorgiev/pwm#pwm-policy-learning-with-large-world-models)

[Ignat Georgiev](https://www.imgeorgiev.com/), [Varun Giridhar](https://www.linkedin.com/in/varun-giridhar-463947146/), [Nicklas Hansen](https://www.nicklashansen.com/), [Animesh Garg](https://animesh.garg.tech/)

[Project website](http://imgeorgiev.com/pwm)[Paper](https://arxiv.org/abs/2407.02466)[Models & Datasets](https://huggingface.co/imgeorgiev/pwm)

This repository is a soft fork of [FoRL](https://github.com/pairlab/FoRL).

## Overview

[https://github.com/imgeorgiev/pwm#overview](https://github.com/imgeorgiev/pwm#overview)

[https://github.com/imgeorgiev/PWM/blob/main/figures/teaser.png](https://github.com/imgeorgiev/PWM/blob/main/figures/teaser.png)

We introduce Policy learning with large World Models (PWM), a novel Model-Based RL (MBRL) algorithm and framework aimed at deriving effective continuous control policies from large, muti-task world models. We utilize pre-trained TD-MPC2 world models to efficiently learn control policies with first-order gradients in <10m per task. Our empirical evaluations on complex locomotion tasks indicate that PWM not only achieves higher reward than baselines but also outperforms methods that use ground-truth simulation dynamics.

## Installation

[https://github.com/imgeorgiev/pwm#installation](https://github.com/imgeorgiev/pwm#installation)

Tested only on Ubuntu 22.04. Requires Python, conda and an Nvidia GPU with >24GB VRAM.

```
git clone --recursive git@github.com:imgeorgiev/PWM.git
cd PWM
conda env create -f environment.yaml
conda activate pwm
ln -s $CONDA_PREFIX/lib $CONDA_PREFIX/lib64  # hack to get CUDA to work inside conda
pip install -e .
pip install -e external/tdmpc2
```

## Single environment tasks

[https://github.com/imgeorgiev/pwm#single-environment-tasks](https://github.com/imgeorgiev/pwm#single-environment-tasks)

The first option for running PWM is on complex single-tasks with up to 152 action dimensions in the Dflex simulator. These runs used pre-trained world models which can be [downloaded from hugging face](https://huggingface.co/imgeorgiev/pwm/tree/main/dflex/pretrained).

```
cd scripts
conda activate pwm
python train_dflex.py env=dflex_ant alg=pwm general.checkpoint=path/to/model
```

> Due to the nature of GPU acceleration, it is impossible to currently impossible to guarantee deterministic experiments. You can make them "less random" by using `seeding(seed, True)` but that slows down GPUs.

### Single environment with pretraining

[https://github.com/imgeorgiev/pwm#single-environment-with-pretraining](https://github.com/imgeorgiev/pwm#single-environment-with-pretraining)

Instead of loading a pre-trained world model, you pretrain one yourself using the [data](https://huggingface.co/imgeorgiev/pwm/tree/main/dflex/data):

```
cd scripts
conda activate pwm
python train_dflex.py env=dflex_ant alg=pwm general.pretrain=path/to/model pretrain_steps=XX
```

To recreate results from the original paper:

| Task | Pretrain gradient steps |
|---|---|
| Hopper | 50_000 |
| Ant | 100_000 |
| Anymal | 100_000 |
| Humanoid | 200_000 |
| SNU Humanoid | 200_000 |

## Multitask setting

[https://github.com/imgeorgiev/pwm#multitask-setting](https://github.com/imgeorgiev/pwm#multitask-setting)

### Training large world model

[https://github.com/imgeorgiev/pwm#training-large-world-model](https://github.com/imgeorgiev/pwm#training-large-world-model)

We evaluate on the MT30 and MT80 task settings proposed by [TD-MPC2](https://www.tdmpc2.com/).

1. Download the data for each task following the [TD-MPC2 instructions](https://www.tdmpc2.com/dataset).
2. Train a world model from the TD-MPC2 repository using the settings below. Note that `horizon=16` and `rho=0.99` are crucial. Note that training takes ~2 weeks on an RTX 3900. Alternatively, you can also use some of the pre-trained [multi-task world models we provide](https://huggingface.co/imgeorgiev/pwm/tree/main/multitask).

```
cd external/tdmpc2/tdmpc2
python -u train.py task=mt30 model_size=48 horizon=16 batch_size=1024 rho=0.99 mpc=false disable_wandb=False data_dir=path/to/data
```

where `path/to/data` is the full TD-MPC2 dataset for either MT30 or MT80.

### Evaluate multi-task

[https://github.com/imgeorgiev/pwm#evaluate-multi-task](https://github.com/imgeorgiev/pwm#evaluate-multi-task)

Train a policy for a specific task using the pre-trained world model

```
cd scripts
python train_multitask.py -cn config_mt30 alg=pwm_48M task=pendulum-swingup general.data_dir=path/to/data general.checkpoint=path/to/model
```

- where `path/to/data` is the full TD-MPC2 dataset for either MT30 or MT80.
- where `path/to/model` is the pre-trained world model as provided [here](https://huggingface.co/imgeorgiev/pwm/tree/main/multitask).

We also provide scripts which launch slurm tasks across all tasks. `scripts/mt30.bash` and `scripts/mt80.bash`

### Configs

[https://github.com/imgeorgiev/pwm#configs](https://github.com/imgeorgiev/pwm#configs)

```
cfg
├── alg
│   ├── pwm_19M.yaml - different sized PWM models which the main models that should be used. Paired with train_multitask.py
│   ├── pwm_317M.yaml - to be used with train_multitask.py
│   ├── pwm_48M.yaml 
│   ├── pwm_5M.yaml
│   ├── pwm.yaml - redunant but provided for reproducability; to be run with train_dflex.py
│   └── shac.yaml - works only with train_dflex.py
├── config_mt30.yaml - to be used with train_multitask.py
├── config_mt80.yaml - to be used with train_multitask.py
├── config.yaml  - to be used with train_dflex.py
└── env - dflex env config files
    ├── dflex_ant.yaml
    ├── dflex_anymal.yaml
    ├── dflex_cartpole.yaml
    ├── dflex_doublependulum.yaml
    ├── dflex_hopper.yaml
    ├── dflex_humanoid.yaml
    └── dflex_snu_humanoid.yaml
```

## Citation

[https://github.com/imgeorgiev/pwm#citation](https://github.com/imgeorgiev/pwm#citation)

```
@misc{georgiev2024pwm,
    title={PWM: Policy Learning with Large World Models},
    author={Ignat Georgiev, Varun Giridha, Nicklas Hansen, and Animesh Garg},
    eprint={2407.02466},
    archivePrefix={arXiv},
    primaryClass={cs.LG},
    year={2024}
}
```

## About

         PWM: Policy Learning with Large World Models       

### Resources

[Readme](https://github.com/imgeorgiev/pwm#readme-ov-file)

### License

[MIT license](https://github.com/imgeorgiev/pwm#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/imgeorgiev/PWM/activity)

### Stars

[68
        stars](https://github.com/imgeorgiev/PWM/stargazers)

### Watchers

[2
        watching](https://github.com/imgeorgiev/PWM/watchers)

### Forks

[6
        forks](https://github.com/imgeorgiev/PWM/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fimgeorgiev%2FPWM&report=imgeorgiev+%28user%29)

## [Releases](https://github.com/imgeorgiev/PWM/releases)

No releases published

## [Packages
      0](https://github.com/users/imgeorgiev/packages?repo_name=PWM)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/imgeorgiev/PWM/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          89.1%](https://github.com/imgeorgiev/PWM/search?l=jupyter-notebook)
- [Python
          10.6%](https://github.com/imgeorgiev/PWM/search?l=python)
- [Shell
          0.3%](https://github.com/imgeorgiev/PWM/search?l=shell)

     You can’t perform that action at this time.
