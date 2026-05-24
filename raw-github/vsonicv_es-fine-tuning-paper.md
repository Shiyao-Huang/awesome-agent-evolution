---
repo: vsonicv/es-fine-tuning-paper
url: https://github.com/vsonicv/es-fine-tuning-paper
content_timestamp: 2025-10-27
time_slice: 2025-10
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - VsonicV/es-fine-tuning-paper: This repo contains the source code for the paper "Evolution Strategies at Scale: LLM Fine-Tuning Beyond Reinforcement Learning" · GitHub

**Source**: https://github.com/vsonicv/es-fine-tuning-paper

---

[Skip to content](https://github.com/vsonicv/es-fine-tuning-paper#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[VsonicV](https://github.com/VsonicV)

/
**[es-fine-tuning-paper](https://github.com/VsonicV/es-fine-tuning-paper)**

Public

- [Notifications](https://github.com/login?return_to=%2FVsonicV%2Fes-fine-tuning-paper)You must be signed in to change notification settings
- [Fork
    38](https://github.com/login?return_to=%2FVsonicV%2Fes-fine-tuning-paper)
- 
[Star
          356](https://github.com/login?return_to=%2FVsonicV%2Fes-fine-tuning-paper)

[https://github.com/VsonicV/es-fine-tuning-paper](https://github.com/VsonicV/es-fine-tuning-paper)

[Branches](https://github.com/VsonicV/es-fine-tuning-paper/branches)[Tags](https://github.com/VsonicV/es-fine-tuning-paper/tags)

[https://github.com/VsonicV/es-fine-tuning-paper/branches](https://github.com/VsonicV/es-fine-tuning-paper/branches)[https://github.com/VsonicV/es-fine-tuning-paper/tags](https://github.com/VsonicV/es-fine-tuning-paper/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History35 Commits35 Commits |  |  |  |
| countdown | countdown |  |  |
| utils | utils |  |  |
| LICENSE.txt | LICENSE.txt |  |  |
| README.md | README.md |  |  |
| es_fine-tuning_conciseness.py | es_fine-tuning_conciseness.py |  |  |
| es_fine-tuning_conciseness_iid.py | es_fine-tuning_conciseness_iid.py |  |  |
| es_fine-tuning_countdown_accl.py | es_fine-tuning_countdown_accl.py |  |  |
| requirement.txt | requirement.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# es-fine-tuning-paper

[https://github.com/vsonicv/es-fine-tuning-paper#es-fine-tuning-paper](https://github.com/vsonicv/es-fine-tuning-paper#es-fine-tuning-paper)

This repo contains the source code for the paper "Evolution Strategies at Scale: LLM Fine-Tuning Beyond Reinforcement Learning" ([https://arxiv.org/abs/2509.24372](https://arxiv.org/abs/2509.24372)). Evolution strategies (ES) is used to directly optimize billions of parameters of large language models (LLMs).

Feel free to join the ES fine-tuning forum in [Discussions](https://github.com/VsonicV/es-fine-tuning-paper/discussions).

### News

[https://github.com/vsonicv/es-fine-tuning-paper#news](https://github.com/vsonicv/es-fine-tuning-paper#news)

10/27/2025: 🔥🔥🔥 An accelerated version with **10X+ speed-up** in running time is added to the repo!  See [here](https://github.com/VsonicV/es-fine-tuning-paper?tab=readme-ov-file#accelerated-version-10x-speed-up). 🚀🚀🚀

Note: we are still actively adding more experimental codes into this repo. We expect breaking change to the accelerated implementations.

## Setup

[https://github.com/vsonicv/es-fine-tuning-paper#setup](https://github.com/vsonicv/es-fine-tuning-paper#setup)

Create a virtual environment with python version >= 3.10 and activate it

```
python -m venv es
source es/bin/activate
```

From the root of the repository run following command to install all the relevant python packages

```
pip install -r requirement.txt
```

## Usage

[https://github.com/vsonicv/es-fine-tuning-paper#usage](https://github.com/vsonicv/es-fine-tuning-paper#usage)

For running the main ES code on conciseness fine-tuning

```
accelerate launch \
    --num_processes 2 \
    --num_machines 1 \
    --machine_rank 0 \
    es_fine-tuning_conciseness.py \
    --gpu_threads=1 \
    --model_name=Qwen/Qwen2.5-7B-Instruct
```

`--num_processes` specifies the number of GPUs to use and `--gpu_threads` specifies the number of threads inside each GPU. The total number of parallel evaluations is thereby equal to `num_processes`*`gpu_threads`.

For running the main ES code on the Countdown task

```
accelerate launch \
    --num_processes 4 \
    --num_machines 1\
    --machine_rank 0 \
    countdown/es_fine-tuning_countdown.py \
    --data_sample 200 \
    --model_name Qwen/Qwen2.5-3B-Instruct \
    --gpu_threads 1
```

### Other Parameters

[https://github.com/vsonicv/es-fine-tuning-paper#other-parameters](https://github.com/vsonicv/es-fine-tuning-paper#other-parameters)

- `--gpu_ids`: Specify which GPUs to use (CUDA device id), argument for `accelerate launch`
- `--model_name`: HuggingFace model to fine-tune
- `--hf_cache_dir`: Directory for HuggingFace cache
- `--precision`: Model precision, default to be `bf16`
- `--verbose`: Enable detailed logging if this argument is present in the command line

Note: The original implementation uses a partially correlated noise. To use complete i.i.d. noise, please use `es_fine-tuning_conciseness_iid.py` and `countdown/es_fine-tuning_countdown_iid.py` instead. See [here](https://github.com/VsonicV/es-fine-tuning-paper/discussions/7) for more details.

## Accelerated Version (10X+ Speed-up)

[https://github.com/vsonicv/es-fine-tuning-paper#accelerated-version-10x-speed-up](https://github.com/vsonicv/es-fine-tuning-paper#accelerated-version-10x-speed-up)

If you are using the latest accelerated version `es-fine-tuning_countdown_accl.py`, please also install the `vllm` and `tensorboard` by:

```
pip install vllm==0.11.0
pip install tensorboard
```

For running the accelerated version on the Countdown task:

```
# Single-GPU quickstart
python es_fine-tuning_countdown_accl.py \
  --model_name Qwen/Qwen2.5-3B-Instruct \
  --cuda_devices 0 \
  --num_engines 1 \
  --population_size 30 \
  --num_iterations 1000

# Multi-GPU run (one vLLM engine per GPU)
python es_fine-tuning_countdown_accl.py \
  --model_name Qwen/Qwen2.5-3B-Instruct \
  --cuda_devices 0,1,2,3 \
  --num_engines 4 \
  --population_size 30 \
  --num_iterations 1000 \
  --sigma 0.001 \
  --alpha 0.0005 \
  --experiment_dir es-ft-experiment
```

On preliminary 4xH100 setting, accelerated version achieves ~10 times speed-up with similar convergence rate.

## Citation

[https://github.com/vsonicv/es-fine-tuning-paper#citation](https://github.com/vsonicv/es-fine-tuning-paper#citation)

If you find this work helpful in your research, please cite:

```
@misc{qiu2026evolutionstrategiesscalellm,
      title={Evolution Strategies at Scale: LLM Fine-Tuning Beyond Reinforcement Learning}, 
      author={Xin Qiu and Yulu Gan and Conor F. Hayes and Qiyao Liang and Yinggan Xu and Roberto Dailey and Elliot Meyerson and Babak Hodjat and Risto Miikkulainen},
      year={2026},
      eprint={2509.24372},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2509.24372}, 
}
```

## About

         This repo contains the source code for the paper "Evolution Strategies at Scale: LLM Fine-Tuning Beyond Reinforcement Learning"       

### Resources

[Readme](https://github.com/vsonicv/es-fine-tuning-paper#readme-ov-file)

### License

[View license](https://github.com/vsonicv/es-fine-tuning-paper#License-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/VsonicV/es-fine-tuning-paper/activity)

### Stars

[356
        stars](https://github.com/VsonicV/es-fine-tuning-paper/stargazers)

### Watchers

[10
        watching](https://github.com/VsonicV/es-fine-tuning-paper/watchers)

### Forks

[38
        forks](https://github.com/VsonicV/es-fine-tuning-paper/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FVsonicV%2Fes-fine-tuning-paper&report=VsonicV+%28user%29)

## [Releases
      1](https://github.com/VsonicV/es-fine-tuning-paper/releases)

[v0.1.0: Accelerated Version with 10X+ Speed-up
        
          Latest
      
      Oct 27, 2025](https://github.com/VsonicV/es-fine-tuning-paper/releases/tag/v0.1.0)

## [Packages
      0](https://github.com/users/VsonicV/packages?repo_name=es-fine-tuning-paper)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/VsonicV/es-fine-tuning-paper/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/VsonicV/es-fine-tuning-paper/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025-10-27
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-10
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

