---
repo: rucbm/laser
url: https://github.com/rucbm/laser
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - RUCBM/LaSeR: [ICLR 2026] Official repository for the paper "LaSeR: Reinforcement Learning with Last-Token Self-Rewarding" · GitHub

**Source**: https://github.com/rucbm/laser

---

[Skip to content](https://github.com/rucbm/laser#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[RUCBM](https://github.com/RUCBM)

/
**[LaSeR](https://github.com/RUCBM/LaSeR)**

Public

- [Notifications](https://github.com/login?return_to=%2FRUCBM%2FLaSeR)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2FRUCBM%2FLaSeR)
- 
[Star
          36](https://github.com/login?return_to=%2FRUCBM%2FLaSeR)

[https://github.com/RUCBM/LaSeR](https://github.com/RUCBM/LaSeR)

[Branches](https://github.com/RUCBM/LaSeR/branches)[Tags](https://github.com/RUCBM/LaSeR/tags)

[https://github.com/RUCBM/LaSeR/branches](https://github.com/RUCBM/LaSeR/branches)[https://github.com/RUCBM/LaSeR/tags](https://github.com/RUCBM/LaSeR/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History6 Commits6 Commits |  |  |  |
| data | data |  |  |
| imgs | imgs |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| verl | verl |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# LaSeR: Reinforcement Learning with Last-Token Self-Rewarding

[https://github.com/rucbm/laser#laser-reinforcement-learning-with-last-token-self-rewarding](https://github.com/rucbm/laser#laser-reinforcement-learning-with-last-token-self-rewarding)

[https://arxiv.org/abs/2510.14943](https://arxiv.org/abs/2510.14943)[https://huggingface.co/collections/Keven16/laser-68eddd427d58817e2b09373a](https://huggingface.co/collections/Keven16/laser-68eddd427d58817e2b09373a)

We propose **LaSeR**, a lightweight and effective algorithm that simultaneously optimizes both the reasoning and self-rewarding capabilities of LLMs with minimal additional cost, by introducing a simple MSE loss into the standard RLVR objective. The optimized self-rewarding scores can serve as auxiliary reward signals in both training and testing stages to enhance model performance.

[https://github.com/RUCBM/LaSeR/blob/main/imgs/laser.png](https://github.com/RUCBM/LaSeR/blob/main/imgs/laser.png)

---

## News

[https://github.com/rucbm/laser#news](https://github.com/rucbm/laser#news)

- [2025.10.16] We release our paper on [arxiv](https://arxiv.org/pdf/2510.14943). We release the source code and the checkpoints.

## Models

[https://github.com/rucbm/laser#models](https://github.com/rucbm/laser#models)

| Name |  |
|---|---|
| Octothinker-3B-Short-LaSeR | hf model |
| Qwen2.5-7B-LaSeR | hf model |
| ORZ-7B-LaSeR | hf model |

## Data

[https://github.com/rucbm/laser#data](https://github.com/rucbm/laser#data)

The evaluation data is in the `data/` directory. The processed training data can be downloaded from [here](https://huggingface.co/datasets/Keven16/LaSeR_training_data).

## Installation

[https://github.com/rucbm/laser#installation](https://github.com/rucbm/laser#installation)

Our code is mainly based on [verl](https://github.com/volcengine/verl) (v0.5.0). To prepare the environment, please follow these steps:

```
conda create -n verl python==3.10
conda activate verl
cd verl/
USE_MEGATRON=0 bash scripts/install_vllm_sglang_mcore.sh
pip install math-verify
```

## Training

[https://github.com/rucbm/laser#training](https://github.com/rucbm/laser#training)

We provide example scripts for GRPO and LaSeR training in the `examples/grpo_trainer/`. Before running, please download the related datasets to the appropriate locations.

### Quick Start

[https://github.com/rucbm/laser#quick-start](https://github.com/rucbm/laser#quick-start)

For experiments on Qwen2.5-7B-Base and ORZ-7B:

```
cd verl/
bash examples/grpo_trainer/run_qwen2_5_7b.sh
```

For experiments on OctoThinker-3B-Short-Base:

```
cd verl/
bash examples/grpo_trainer/run_octothinker_3b.sh
```

You can modify these scripts to adapt training parameters and paths for your own settings. The scripts include all necessary hyper-parameters. Detailed hyper-parameter explanations are in the `verl/verl/trainer/config/actor/actor.yaml`.

Make sure to set your `WANDB_API_KEY` if you want to use Weights & Biases logging.

## Evaluation

[https://github.com/rucbm/laser#evaluation](https://github.com/rucbm/laser#evaluation)

Our evaluation code is in the `src/` folder.

Ideally, the self-rewarding score can be calculated directly by performing an additional forward process after the model generates the `<EOS>` token, obtaining the prediction probability for the pre-specified self-rewarding token. However, this requires modifying the underlying sampling logic of [vLLM](https://github.com/vllm-project/vllm). In the current version, we have chosen to concatenate the pre-specified tokens after the solutions have been fully generated and then perform separate forward process to obtain the self-rewarding scores. We welcome the community to contribute a PR for a vLLM version that adapts to our method to enable more efficient self-rewarding!

For now, users can run the following script to perform evaluation on the reasoning and self-rewarding capabilities of the target model:

```
CUDA_VISIBLE_DEVICES=0,1,2,3 sh scripts/run_eval_math.sh
```

## Acknowledgments

[https://github.com/rucbm/laser#acknowledgments](https://github.com/rucbm/laser#acknowledgments)

Our training code is mainly based on [verl](https://github.com/volcengine/verl). Our training data is adopted from [DeepMath-103K](https://github.com/zwhe99/DeepMath). We sincerely thank the contributors for their open-sourcing!

## Citation

[https://github.com/rucbm/laser#citation](https://github.com/rucbm/laser#citation)

If you find our work helpful, please kindly cite as

```
@article{yang2025laser,
  title={LaSeR: Reinforcement Learning with Last-Token Self-Rewarding},
  author={Yang, Wenkai and Liu, Weijie and Xie, Ruobing and Guo, Yiju and Wu, Lulu and Yang, Saiyong and Lin, Yankai},
  journal={arXiv preprint arXiv:2510.14943},
  year={2025}
}
```

## About

         [ICLR 2026] Official repository for the paper "LaSeR: Reinforcement Learning with Last-Token Self-Rewarding"       

### Resources

[Readme](https://github.com/rucbm/laser#readme-ov-file)

### License

[MIT license](https://github.com/rucbm/laser#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/RUCBM/LaSeR/activity)

[Custom properties](https://github.com/RUCBM/LaSeR/custom-properties)

### Stars

[36
        stars](https://github.com/RUCBM/LaSeR/stargazers)

### Watchers

[1
        watching](https://github.com/RUCBM/LaSeR/watchers)

### Forks

[2
        forks](https://github.com/RUCBM/LaSeR/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FRUCBM%2FLaSeR&report=RUCBM+%28user%29)

## [Releases](https://github.com/RUCBM/LaSeR/releases)

No releases published

## [Packages
      0](https://github.com/orgs/RUCBM/packages?repo_name=LaSeR)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/RUCBM/LaSeR/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          88.2%](https://github.com/RUCBM/LaSeR/search?l=python)
- [Shell
          10.5%](https://github.com/RUCBM/LaSeR/search?l=shell)
- 

Other

1.3%

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

