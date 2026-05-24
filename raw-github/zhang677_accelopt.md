---
repo: zhang677/accelopt
url: https://github.com/zhang677/accelopt
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - zhang677/AccelOpt: [MLSys 2026] AccelOpt: Self-improving Agents for AI Accelerator Kernel Optimization · GitHub

**Source**: https://github.com/zhang677/accelopt

---

[Skip to content](https://github.com/zhang677/accelopt#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zhang677](https://github.com/zhang677)

/
**[AccelOpt](https://github.com/zhang677/AccelOpt)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzhang677%2FAccelOpt)You must be signed in to change notification settings
- [Fork
    5](https://github.com/login?return_to=%2Fzhang677%2FAccelOpt)
- 
[Star
          43](https://github.com/login?return_to=%2Fzhang677%2FAccelOpt)

[https://github.com/zhang677/AccelOpt](https://github.com/zhang677/AccelOpt)

[Branches](https://github.com/zhang677/AccelOpt/branches)[Tags](https://github.com/zhang677/AccelOpt/tags)

[https://github.com/zhang677/AccelOpt/branches](https://github.com/zhang677/AccelOpt/branches)[https://github.com/zhang677/AccelOpt/tags](https://github.com/zhang677/AccelOpt/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History67 Commits67 Commits |  |  |  |
| .github | .github |  |  |
| NKIBench | NKIBench |  |  |
| accelopt | accelopt |  |  |
| experiments | experiments |  |  |
| img | img |  |  |
| prompts | prompts |  |  |
| samples | samples |  |  |
| scripts | scripts |  |  |
| skills/accelopt | skills/accelopt |  |  |
| templates | templates |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/zhang677/AccelOpt/blob/master/img/main-method-with-fixer.png](https://github.com/zhang677/AccelOpt/blob/master/img/main-method-with-fixer.png)

# AccelOpt: Self-improving Agents for AI Accelerator Kernel Optimization

[https://github.com/zhang677/accelopt#accelopt-self-improving-agents-for-ai-accelerator-kernel-optimization](https://github.com/zhang677/accelopt#accelopt-self-improving-agents-for-ai-accelerator-kernel-optimization)

[https://arxiv.org/pdf/2511.15915](https://arxiv.org/pdf/2511.15915)[https://ppl.stanford.edu/accelopt.html](https://ppl.stanford.edu/accelopt.html)[https://huggingface.co/datasets/Genghan/NKIBench](https://huggingface.co/datasets/Genghan/NKIBench)

AccelOpt is a self-improving large language model (LLM) agentic system that autonomously optimizes kernels for emerging AI acclerators, eliminating the need for expert-provided hardware-specific optimization knowledge. AccelOpt explores the kernel optimization space through iterative generation, informed by an optimization memory that curates experiences and insights from previously encountered slow-fast kernel pairs.

🚧 This repository is still under construction.

## Setup

[https://github.com/zhang677/accelopt#setup](https://github.com/zhang677/accelopt#setup)

### AWS Trainium

[https://github.com/zhang677/accelopt#aws-trainium](https://github.com/zhang677/accelopt#aws-trainium)

#### Machines

[https://github.com/zhang677/accelopt#machines](https://github.com/zhang677/accelopt#machines)

EC2 Instance: trn1.32xlarge

AMI: Deep Learning AMI Neuron (Ubuntu 22.04)

#### Install

[https://github.com/zhang677/accelopt#install](https://github.com/zhang677/accelopt#install)

```
source /opt/aws_neuronx_venv_pytorch_2_7/bin/activate # Check the PyTorch version of your AMI
pip install logfire
pip install openai-agents
git clone git@github.com:zhang677/AccelOpt.git
cd AccelOpt
python setup.py install
```

#### Run

[https://github.com/zhang677/accelopt#run](https://github.com/zhang677/accelopt#run)

`experiments/full_complete_local` shows how to run AccelOpt on NKIBench with a local served gpt-oss-120b.

### NVIDIA GPU

[https://github.com/zhang677/accelopt#nvidia-gpu](https://github.com/zhang677/accelopt#nvidia-gpu)

#### Machines

[https://github.com/zhang677/accelopt#machines-1](https://github.com/zhang677/accelopt#machines-1)

EC2 Instance: p5.48xlarge

AMI: Deep Learning OSS Nvidia Driver AMI GPU PyTorch 2.8 (Ubuntu 24.04)

#### Install

[https://github.com/zhang677/accelopt#install-1](https://github.com/zhang677/accelopt#install-1)

```
# Create a PyTorch environment first
pip install logfire
pip install openai-agents
git clone https://github.com/zhang677/flashinfer-bench.git # DPS is not consistent with flashinfer-trace now
cd flashinfer-bench
pip install -v -e .
cd ..
git clone git@github.com:zhang677/AccelOpt.git
cd AccelOpt
python setup.py install
```

#### Run

[https://github.com/zhang677/accelopt#run-1](https://github.com/zhang677/accelopt#run-1)

`experiments/flb_full_complete_local` shows how to run AccelOpt on [FlashInfer-Bench](https://github.com/flashinfer-ai/flashinfer-bench) with a local served gpt-oss-120b.

## Kernel Database

[https://github.com/zhang677/accelopt#kernel-database](https://github.com/zhang677/accelopt#kernel-database)

Developed concurrently, NKIBench and FlashInfer-Bench share similar kernel schema, demonstrating the benefits of structual storage. `./templates/schema_v2.txt` shows the SQL schema we use to manage generated kernels for Flashinfer-Bench. `./accelopt/db_utils.py` captures the common usage patterns of this kernel database with [supabase](https://supabase.com/).

# NKIBench: Agent Environment for AWS Trainium accelerators

[https://github.com/zhang677/accelopt#nkibench-agent-environment-for-aws-trainium-accelerators](https://github.com/zhang677/accelopt#nkibench-agent-environment-for-aws-trainium-accelerators)

NKIBench is the first agent environemt for AWS Trainium accelerators that contain a profiling service and a set of NKI kernels with varying complexity extracted from real-world LLM workloads. Huggingface dataset can be found here [Genghan/NKIBench](https://huggingface.co/datasets/Genghan/NKIBench).

## Dataset

[https://github.com/zhang677/accelopt#dataset](https://github.com/zhang677/accelopt#dataset)

All the kernels are under `/NKIBench`. Kernels are grouped by operator name and configuration in a structured storage format as shown in the `/NKIBench/summary.json`

## Profiling

[https://github.com/zhang677/accelopt#profiling](https://github.com/zhang677/accelopt#profiling)

AccelOpt provides a `NKIKernel` class that is pluggable to any AI optimizers. `/tests` shows how to use the profiling API for single and a group of NKI kernels.

```
from accelopt.kernel_wrapper import NKIKernel
nki_kernel = NKIKernel(program_path, base_numpy_path)
result = nki_kernel.profile(save_fields)
```

NKIBench estimates the best achievable performance offered by the Trainium hardware, which offers additional insights on how effective AccelOpt has been in exploring the entire optimization landscape. The best achievable performance is calculated in `experiments/full_complete_local/calculate_percentage_of_peak.py`

# Results

[https://github.com/zhang677/accelopt#results](https://github.com/zhang677/accelopt#results)

## NKIBench

[https://github.com/zhang677/accelopt#nkibench](https://github.com/zhang677/accelopt#nkibench)

[https://github.com/zhang677/AccelOpt/blob/master/img/ratio_bars_trn1.png](https://github.com/zhang677/AccelOpt/blob/master/img/ratio_bars_trn1.png)
 Per-task kernel improvement achieved using Claude Sonnet 4 and AccelOpt (gpt-oss-120b + Qwen3-Coder-480B) on Trainium 1 of NKIBench. 

## FlashInfer-Bench

[https://github.com/zhang677/accelopt#flashinfer-bench](https://github.com/zhang677/accelopt#flashinfer-bench)

[https://github.com/zhang677/AccelOpt/blob/master/img/compare_bars_with_flashinfer.png](https://github.com/zhang677/AccelOpt/blob/master/img/compare_bars_with_flashinfer.png)
 Triton kernel improvement achieved using AccelOpt with Fixer on H100 SXM5 over FlashInfer across 8 attention workload of FlashInfer-Bench. Fixers and executors use the same model and all the other agents use gpt-oss-120b. These experiements used `./templates/fib/complete_local_prompts/run_single_loop.sh` with `PROMPT_BASE_DIR=./prompts/fib`.  

# Citation

[https://github.com/zhang677/accelopt#citation](https://github.com/zhang677/accelopt#citation)

This work will appear in MLSys 2026. This is a follow-up to *Adaptive Self-improvement LLM Agentic System for ML Library Development* (ICML 2025) [[paper](https://proceedings.mlr.press/v267/zhang25at.html)] [[blog](https://zhang677.github.io/blog_md/aspl.html)] [[code](https://github.com/zhang677/PCL-lite)]. If you find this project useful, please cite:

```
@inproceedings{zhang2025adaptive,
  title={Adaptive Self-improvement LLM Agentic System for ML Library Development},
  author={Zhang, Genghan and Liang, Weixin and Hsu, Olivia and Olukotun, Kunle},
  booktitle={Proceedings of the 42nd International Conference on Machine Learning},
  year={2025}
}

@article{zhang2025accelopt,
  title={AccelOpt: A Self-Improving LLM Agentic System for AI Accelerator Kernel Optimization},
  author={Zhang, Genghan and Zhu, Shaowei and Wei, Anjiang and Song, Zhenyu and Nie, Allen and Jia, Zhen and Vijaykumar, Nandita and Wang, Yida and Olukotun, Kunle},
  journal={arXiv preprint arXiv:2511.15915},
  year={2025}
}
```

## About

         [MLSys 2026] AccelOpt: Self-improving Agents for AI Accelerator Kernel Optimization       

[ppl.stanford.edu/accelopt.html](https://ppl.stanford.edu/accelopt.html)

### Resources

[Readme](https://github.com/zhang677/accelopt#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/zhang677/accelopt#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/zhang677/AccelOpt/activity)

### Stars

[43
        stars](https://github.com/zhang677/AccelOpt/stargazers)

### Watchers

[0
        watching](https://github.com/zhang677/AccelOpt/watchers)

### Forks

[5
        forks](https://github.com/zhang677/AccelOpt/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fzhang677%2FAccelOpt&report=zhang677+%28user%29)

## [Releases](https://github.com/zhang677/AccelOpt/releases)

No releases published

## [Packages
      0](https://github.com/users/zhang677/packages?repo_name=AccelOpt)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/zhang677/AccelOpt/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          90.7%](https://github.com/zhang677/AccelOpt/search?l=python)
- [Shell
          9.3%](https://github.com/zhang677/AccelOpt/search?l=shell)

     You can’t perform that action at this time.
