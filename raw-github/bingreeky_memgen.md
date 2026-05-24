---
repo: bingreeky/memgen
url: https://github.com/bingreeky/memgen
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - bingreeky/MemGen: MemGen: Weaving Generative Latent Memory for Self-Evolving Agents · GitHub

**Source**: https://github.com/bingreeky/memgen

---

[Skip to content](https://github.com/bingreeky/memgen#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[bingreeky](https://github.com/bingreeky)

/
**[MemGen](https://github.com/bingreeky/MemGen)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbingreeky%2FMemGen)You must be signed in to change notification settings
- [Fork
    35](https://github.com/login?return_to=%2Fbingreeky%2FMemGen)
- 
[Star
          378](https://github.com/login?return_to=%2Fbingreeky%2FMemGen)

[https://github.com/bingreeky/MemGen](https://github.com/bingreeky/MemGen)

[Branches](https://github.com/bingreeky/MemGen/branches)[Tags](https://github.com/bingreeky/MemGen/tags)

[https://github.com/bingreeky/MemGen/branches](https://github.com/bingreeky/MemGen/branches)[https://github.com/bingreeky/MemGen/tags](https://github.com/bingreeky/MemGen/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History3 Commits3 Commits |  |  |  |
| assets | assets |  |  |
| common | common |  |  |
| configs | configs |  |  |
| data | data |  |  |
| interactions | interactions |  |  |
| memgen | memgen |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| main.py | main.py |  |  |
| memgen.yml | memgen.yml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# MemGen: Weaving Generative Latent Memory for Self-Evolving Agents

[https://github.com/bingreeky/memgen#memgen-weaving-generative-latent-memory-for-self-evolving-agents](https://github.com/bingreeky/memgen#memgen-weaving-generative-latent-memory-for-self-evolving-agents)

## 👋 Introduction

[https://github.com/bingreeky/memgen#-introduction](https://github.com/bingreeky/memgen#-introduction)

This repo is the official implementation of [[ICLR 2026] MemGen: Weaving Generative Latent Memory for Self-Evolving Agents](https://arxiv.org/pdf/2509.24704).

Inspired by the human brain’s ability to dynamically integrate memory and reasoning, MemGen introduces a novel framework that empowers AI agents to evolve through experience—without relying on rigid parameter updates or external databases.

Unlike traditional approaches, MemGen generates latent memory tokens directly within the model’s reasoning stream. It features:

- A Memory Trigger that decides when to recall memory.
- A Memory Weaver that synthesizes past experiences into compact, latent sequences—seamlessly enriching ongoing reasoning.

[https://github.com/bingreeky/MemGen/blob/main/assets/memgen.png](https://github.com/bingreeky/MemGen/blob/main/assets/memgen.png)

## ❓ FAQ

[https://github.com/bingreeky/memgen#-faq](https://github.com/bingreeky/memgen#-faq)

#### Q1: Why does the code encounter issues when running on multiple GPUs?

[https://github.com/bingreeky/memgen#q1-why-does-the-code-encounter-issues-when-running-on-multiple-gpus](https://github.com/bingreeky/memgen#q1-why-does-the-code-encounter-issues-when-running-on-multiple-gpus)

**A:** DDP is supported, but FSDP is not currently supported. Thank you for your understanding.

#### Q2: Where is the multi-turn GRPO code (e.g., for AlfWorld and TriviaQA)?

[https://github.com/bingreeky/memgen#q2-where-is-the-multi-turn-grpo-code-eg-for-alfworld-and-triviaqa](https://github.com/bingreeky/memgen#q2-where-is-the-multi-turn-grpo-code-eg-for-alfworld-and-triviaqa)

**A:** We plan to release the MemGen-GRPO eval/train scripts and checkpoints after releasing those for MemGen-SFT. Thank you for your patience and understanding.

#### Q3: What improvements are included in the latest MemGen codebase?

[https://github.com/bingreeky/memgen#q3-what-improvements-are-included-in-the-latest-memgen-codebase](https://github.com/bingreeky/memgen#q3-what-improvements-are-included-in-the-latest-memgen-codebase)

**A:** In the previous version, single-turn training did not use the ChatML template (for both the baseline and MemGen), which led to lower performance. In addition, we identified a small but impactful formatting issue: for the 1.5B model, whether the prompt ends with `\boxed{}` followed by `.` or `\n` significantly affects performance. In particular, appending  `\n` after *“Put your answer within \boxed{}”* can noticeably degrade results compared with appending `.`. While surprising, this behavior was consistent in our tests. The updated codebase consistently applies the ChatML template across all datasets and resolves these formatting inconsistencies. We still observe stable performance gains from MemGen under this unified setup.

We apologize for any inconvenience caused by the earlier version.

## 🌎 Setup

[https://github.com/bingreeky/memgen#-setup](https://github.com/bingreeky/memgen#-setup)

Create and activate the MemGen environment:
 Option 1: Install via `requirements.txt`

```
conda create -n memgen python=3.10
conda activate memgen
pip install -r requirements.txt
```

Option 2: Install via `memgen.yml`

```
conda env create -f memgen.yml
conda activate memgen
```

Option 3: Set Up Search Environment
 Please follow the instructions in the [Search-R1](https://github.com/PeterGriffinJin/Search-R1?tab=readme-ov-file#retriever-environment-optional) to configure the retriever environment.

## 🤗 Quick Evaluation

[https://github.com/bingreeky/memgen#-quick-evaluation](https://github.com/bingreeky/memgen#-quick-evaluation)

Below are several MemGen models based on Qwen2.5-1.5B-Instruct and SmolLM3-3B across multiple datasets. We are currently in the process of carefully validating additional checkpoints to ensure they are fully reproducible and can be released in a clean, one-click setup. We appreciate your patience as we complete this verification process.

| model | dataset | mode | link | eval_script | train_script |
|---|---|---|---|---|---|
| Qwen2.5-1.5B-Instruct | KodCode | weaver-sft | huggingface link | scripts/eval/qwen2_5_kodcode_sft.sh | scripts/train/qwen2_5_kodcode_sft.sh |
| Qwen2.5-1.5B-Instruct | KodCode | weaver-grpo | huggingface link | scripts/eval/qwen2_5_kodcode_grpo.sh | scripts/train/qwen2_5_kodcode_grpo.sh |
| Qwen2.5-1.5B-Instruct | GSM8K | weaver-sft | huggingface link | scripts/eval/qwen2_5_gsm8k_sft.sh | scripts/train/qwen2_5_gsm8k_sft.sh |
| Qwen2.5-1.5B-Instruct | GSM8K | weaver-grpo | huggingface link | scripts/eval/qwen2_5_gsm8k_grpo.sh | scripts/train/qwen2_5_gsm8k_grpo.sh |
| Qwen2.5-1.5B-Instruct | TriviaQA | weaver-sft | huggingface link | scripts/eval/qwen2_5_triviaqa.sh | scripts/train/qwen2_5_triviaqa.sh |
| SmolLM3-3B | KodCode | weaver-sft | huggingface link | scripts/eval/smollm_kodcode.sh | scripts/train/smollm_kodcode.sh |
| SmolLM3-3B | TriviaQA | weaver-sft | huggingface link | scripts/eval/smollm_triviaqa.sh | scripts/train/smollm_triviaqa.sh |

If you prefer to evaluate the vanilla model instead of MemGen, simply modify `memgen/model/modeling_memgen.py` by replacing the current `generate` function (Lines 452–629) with the commented alternative `generate` implementation (Lines 379–450), and then run the standard evaluation script.

## ▶️ How to Run

[https://github.com/bingreeky/memgen#%EF%B8%8F-how-to-run](https://github.com/bingreeky/memgen#%EF%B8%8F-how-to-run)

MemGen consists of **two modules**: *Weaver* and *Trigger*. We follow a two-stage training approach, training each module separately.

If you would like to reproduce results for a specific dataset + model, please refer to the table above. If the corresponding checkpoint is not yet available, we kindly ask for your patience as we are actively preparing more comprehensive releases.

### Weaver Model

[https://github.com/bingreeky/memgen#weaver-model](https://github.com/bingreeky/memgen#weaver-model)

- 

**Train the Weaver model**

```
bash weaver_train.sh
```

- 

**Evaluate the Weaver model**
 Before running, make sure to update `LOAD_MODEL_PATH` in `eval.sh` to point to the trained checkpoint: `<weaver_dir>`

```
bash eval.sh
```

### Trigger Model

[https://github.com/bingreeky/memgen#trigger-model](https://github.com/bingreeky/memgen#trigger-model)

- **Train the Trigger model**

```
bash trigger_train.sh
```

- **Evaluate the Trigger model**
 Before running, make sure to update `LOAD_MODEL_PATH` in `eval.sh` to point to the trained checkpoint: `<trigger_dir>`

```
bash eval.sh
```

## 🫡 Citation

[https://github.com/bingreeky/memgen#-citation](https://github.com/bingreeky/memgen#-citation)

If you find this repository helpful, a citation to our paper would be greatly appreciated:

```
@article{zhang2025memgen,
  title={MemGen: Weaving Generative Latent Memory for Self-Evolving Agents},
  author={Zhang, Guibin and Fu, Muxin and Yan, Shuicheng},
  journal={arXiv preprint arXiv:2509.24704},
  year={2025}
}
```

## 🙏 Acknowledgement

[https://github.com/bingreeky/memgen#-acknowledgement](https://github.com/bingreeky/memgen#-acknowledgement)

- We sincerely thank [Search-R1](https://github.com/PeterGriffinJin/Search-R1) for open-sourcing their search web environment.
- We sincerely thank the previous latent reasoning works such as [LatentSeek](https://arxiv.org/abs/2505.13308), [SoftCoT](https://arxiv.org/abs/2502.12134), [R3Mem](https://arxiv.org/abs/2502.15957v1) and so on.
- We also extend our heartfelt thanks to [LAVIS](https://github.com/salesforce/LAVIS) for their code framework design.

## About

         MemGen: Weaving Generative Latent Memory for Self-Evolving Agents       

[arxiv.org/pdf/2509.24704](https://arxiv.org/pdf/2509.24704)

### Resources

[Readme](https://github.com/bingreeky/memgen#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/bingreeky/MemGen/activity)

### Stars

[378
        stars](https://github.com/bingreeky/MemGen/stargazers)

### Watchers

[1
        watching](https://github.com/bingreeky/MemGen/watchers)

### Forks

[35
        forks](https://github.com/bingreeky/MemGen/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fbingreeky%2FMemGen&report=bingreeky+%28user%29)

## [Releases](https://github.com/bingreeky/MemGen/releases)

No releases published

## [Packages
      0](https://github.com/users/bingreeky/packages?repo_name=MemGen)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/bingreeky/MemGen/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          87.0%](https://github.com/bingreeky/MemGen/search?l=python)
- [Shell
          13.0%](https://github.com/bingreeky/MemGen/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

