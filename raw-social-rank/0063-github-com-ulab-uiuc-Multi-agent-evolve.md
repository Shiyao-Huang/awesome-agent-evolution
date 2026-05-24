# ulab-uiuc/Multi-agent-evolve

- URL: https://github.com/ulab-uiuc/Multi-agent-evolve
- Platform: github.com
- Extraction status: ok
- content_timestamp: 2025-10
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-10
- Query: site:twitter.com "agent evolution" "LLM"

## Raw Content

## GitHub - ulab-uiuc/Multi-agent-evolve · GitHub

**Source**: https://github.com/ulab-uiuc/Multi-agent-evolve

---

[Skip to content](https://github.com/ulab-uiuc/Multi-agent-evolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ulab-uiuc](https://github.com/ulab-uiuc)

/
**[Multi-agent-evolve](https://github.com/ulab-uiuc/Multi-agent-evolve)**

Public

- [Notifications](https://github.com/login?return_to=%2Fulab-uiuc%2FMulti-agent-evolve)You must be signed in to change notification settings
- [Fork
    7](https://github.com/login?return_to=%2Fulab-uiuc%2FMulti-agent-evolve)
- 
[Star
          150](https://github.com/login?return_to=%2Fulab-uiuc%2FMulti-agent-evolve)

[https://github.com/ulab-uiuc/Multi-agent-evolve](https://github.com/ulab-uiuc/Multi-agent-evolve)

[Branches](https://github.com/ulab-uiuc/Multi-agent-evolve/branches)[Tags](https://github.com/ulab-uiuc/Multi-agent-evolve/tags)

[https://github.com/ulab-uiuc/Multi-agent-evolve/branches](https://github.com/ulab-uiuc/Multi-agent-evolve/branches)[https://github.com/ulab-uiuc/Multi-agent-evolve/tags](https://github.com/ulab-uiuc/Multi-agent-evolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History17 Commits17 Commits |  |  |  |
| absolute_zero_reasoner | absolute_zero_reasoner |  |  |
| assets | assets |  |  |
| data | data |  |  |
| evaluation | evaluation |  |  |
| extras | extras |  |  |
| scripts | scripts |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Multi-Agent Evolve: LLM Self-Improve through Co-Evolution

[https://github.com/ulab-uiuc/Multi-agent-evolve#multi-agent-evolve-llm-self-improve-through-co-evolution](https://github.com/ulab-uiuc/Multi-agent-evolve#multi-agent-evolve-llm-self-improve-through-co-evolution)

[https://arxiv.org/abs/2510.23595](https://arxiv.org/abs/2510.23595)[https://huggingface.co/collections/ulab-ai/multi-agent-evolve](https://huggingface.co/collections/ulab-ai/multi-agent-evolve)

[⚙️ Algorithm Flow](https://github.com/ulab-uiuc/Multi-agent-evolve#algorithm-flow) •     [📊 Results](https://github.com/ulab-uiuc/Multi-agent-evolve#results)[✨ Getting Started](https://github.com/ulab-uiuc/Multi-agent-evolve#getting-started)

[🏋️ Training](https://github.com/ulab-uiuc/Multi-agent-evolve#training) •     [📃 Evaluation](https://github.com/ulab-uiuc/Multi-agent-evolve#evaluation-code)[🎈 Citation](https://github.com/ulab-uiuc/Multi-agent-evolve#citation)

[🌻 Acknowledgement](https://github.com/ulab-uiuc/Multi-agent-evolve#acknowledgement) •     [📧 Contact](https://github.com/ulab-uiuc/Multi-agent-evolve#contact) •     [📈 Star History](https://github.com/ulab-uiuc/Multi-agent-evolve#star-history)

[https://github.com/ulab-uiuc/Multi-agent-evolve/blob/main/assets/teaser_00.jpg](https://github.com/ulab-uiuc/Multi-agent-evolve/blob/main/assets/teaser_00.jpg)

- **[2025/10/27]****Multi-Agent Evolve** is available on [arXiv](https://arxiv.org/abs/2510.23595)
- **[2025/11/10]** We release the code for **Multi-Agent Evolve**

# ⚙️ Algorithm Flow

[https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-algorithm-flow](https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-algorithm-flow)

---

Our approach builds a self-evolving system for enhancing LLMs' general reasoning capabilities through three collaborative roles:

1. 

**Proposer**
: Generates new reasoning questions wrapped in <question>...</question>. Each question is evaluated for quality, difficulty, and format. Only high-quality and learnable questions are kept for training.

2. 

**Solver**
: Answers the valid questions within <answer>...</answer>. Its performance helps measure task difficulty and provides feedback for both question generation and model improvement.

3. 

**Judge**
: Evaluates questions and answers, reasoning in <think>...</think> and producing numeric scores in <score>...</score>. These scores serve as rewards for Proposer and Solver, enabling stable reinforcement learning.

All three roles share one underlying model and are updated together using Task-Relative REINFORCE++. The system forms a continuous self-improving loop that strengthens reasoning without external supervision.

[https://github.com/ulab-uiuc/Multi-agent-evolve/blob/main/assets/workflow_00.jpg](https://github.com/ulab-uiuc/Multi-agent-evolve/blob/main/assets/workflow_00.jpg)

# 📊 Results

[https://github.com/ulab-uiuc/Multi-agent-evolve#-results](https://github.com/ulab-uiuc/Multi-agent-evolve#-results)

---

## Main Results

[https://github.com/ulab-uiuc/Multi-agent-evolve#main-results](https://github.com/ulab-uiuc/Multi-agent-evolve#main-results)

| Model | ID Avg | OOD Avg | Total Avg |
|---|---|---|---|
| w/o reference questions |  |  |  |
| Qwen2.5-3B-Instruct | 63.34 | 41.32 | 55.33 |
| AZR | 67.09 | 41.33 | 57.72 |
| MAE (zero) | 68.37 | 42.48 | 58.51 |
| w/ reference questions |  |  |  |
| SFT | 67.08 | 41.89 | 57.92 |
| MAE (with reference) | 65.07 | 43.18 | 57.11 |
| MAE (no reference) | 69.45 | 43.99 | 60.19 |
| MAE (half reference) | 68.95 | 43.96 | 59.87 |

# ✨ Getting Started

[https://github.com/ulab-uiuc/Multi-agent-evolve#-getting-started](https://github.com/ulab-uiuc/Multi-agent-evolve#-getting-started)

---

## 🎄 Environment Setup

[https://github.com/ulab-uiuc/Multi-agent-evolve#-environment-setup](https://github.com/ulab-uiuc/Multi-agent-evolve#-environment-setup)

```
conda create -n mae python=3.10
conda activate mae
pip install -r requirements.txt
pip install flash-attn==2.7.4.post1 --no-build-isolation
pip install flashinfer-python==0.2.2.post1
python scripts/prepare_test_datasets.py 
python -m absolute_zero_reasoner.data_construction.process_code_reasoning_data
```

## 🔗 Prepare API Key(s)

[https://github.com/ulab-uiuc/Multi-agent-evolve#-prepare-api-keys](https://github.com/ulab-uiuc/Multi-agent-evolve#-prepare-api-keys)

If you plan to use NVIDIA's integrated LLM service (NIM) for evaluation, you can obtain free API key(s) by registering an account at [https://build.nvidia.com/nim](https://build.nvidia.com/nim).

Steps to register and save your API key(s):

1. Go to [https://build.nvidia.com/nim](https://build.nvidia.com/nim) and create an account (or sign in with your existing NVIDIA account).
2. After signing in, navigate to the [API_KEYS](https://build.nvidia.com/settings/api-keys) section and create a new API key. You may create multiple keys (probably through multiple acounts) if you want to distribute load.
3. Copy the generated API key(s).
4. In the root of this repository, create a file named `api.json` at the repository root (same directory as `README.md`) and store your keys in the following format:

```
{
  "api_keys": [
    "sk-xxxxxxx-your-first-key-xxxx",
    "sk-yyyyyyy-your-second-key-yyyy"
  ]
}
```

## 🛠️ Prompts

[https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-prompts](https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-prompts)

Specializing the prompt can make the model tend to produce questions in certain domain or give scores according to desired rules. Make sure that the prompts are in similar format as the default prompt we provide and put under `absolute_zero_reasoner/data_construction/initial_prompt_templates`.

# 🏋️ Training

[https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-training](https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-training)

---

## 🌚 Resuming Runs

[https://github.com/ulab-uiuc/Multi-agent-evolve#-resuming-runs](https://github.com/ulab-uiuc/Multi-agent-evolve#-resuming-runs)

Three resume modes are supported: `disable`, `auto` and `resume_path`. `disable` allows you to train from scratch. `auto` resumes the run from the latest checkpoint inside `resume_dir`. `resume_path` allows you to resume from any checkpoint you want.

```
trainer.resume_mode=auto \
    trainer.resume_dir=<path_to_your_run_directory>\ # resume_dir has to be appointed if resume_mode is not `disable`
    trainer.resume_from_path=<path_to_your_checkpoint>\ # resume_from_path can be set to any specific checkpoint you wish to resume training from
```

When resuming runs, you can also put the original run wandb id into the script, i.e., `trainer.wandb_run_id=<run_id>`.

## ♟️ Multi-Agent Evolve Training

[https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-multi-agent-evolve-training](https://github.com/ulab-uiuc/Multi-agent-evolve#%EF%B8%8F-multi-agent-evolve-training)

We use 8x80GB GPUs for 3B models, scripts can be modified to achieve the same overall accumulated batch size for reproduction.

```
bash scripts/selfplay/mae.sh
# To explore different settings on reference questions, modify `include_references` to 0 or 1 for no reference and with reference
```

Other models are also supported in Multi-Agent Evolve framework, you can start the training for your own model by modifying `actor_rollout_ref.model.path` in scripts.

## 🤗 Converting veRL checkpoints to HF format

[https://github.com/ulab-uiuc/Multi-agent-evolve#-converting-verl-checkpoints-to-hf-format](https://github.com/ulab-uiuc/Multi-agent-evolve#-converting-verl-checkpoints-to-hf-format)

```
python -m absolute_zero_reasoner.utils.convert2hf \
  <veRL_ckpt_path>/actor \
  <veRL_ckpt_path>/actor/huggingface/ \
  <hf_ckpt_path>
```

# 📃 Evaluation

[https://github.com/ulab-uiuc/Multi-agent-evolve#-evaluation](https://github.com/ulab-uiuc/Multi-agent-evolve#-evaluation)

---

## General Benchmarks

[https://github.com/ulab-uiuc/Multi-agent-evolve#general-benchmarks](https://github.com/ulab-uiuc/Multi-agent-evolve#general-benchmarks)

The general benchmarks will be evaluated during the training process. For complete evaluation on general benchmarks, run the following scripts by setting the resume checkpoint.

```
bash scripts/evaluation/eval_ID.sh
bash scripts/evaluation/eval_OOD.sh
# If you wish to evaluate base model, just set resume_mode to `disable` in these scripts
```

### 📴 Offline Evaluation

[https://github.com/ulab-uiuc/Multi-agent-evolve#-offline-evaluation](https://github.com/ulab-uiuc/Multi-agent-evolve#-offline-evaluation)

If you encounter network stability issues with the integrated LLM service or wish to evaluate on a local machine, you can use the offline evaluation pipeline:

1. 

**Dump Evaluation Data**: Enable data dumping in your evaluation scripts by adding `+azr.dump_eval_data=True`. This will skip online API calls and save model generations to a JSONL file in your checkpoint directory (e.g., `evaluation_dump_EXPERIMENT_NAME.jsonl`).

2. 

**Run Offline Evaluator**: Use the provided script to evaluate the dumped results. This script supports resuming and incremental saving.

```
python scripts/evaluation/offline_eval.py \
    --input_file <path_to_dumped_file> \
    --output_file evaluation_results.jsonl \
    --summary_file evaluation_summary.json \
    --api_keys_file api.json \
    --workers 20
```

## Code Benchmarks

[https://github.com/ulab-uiuc/Multi-agent-evolve#code-benchmarks](https://github.com/ulab-uiuc/Multi-agent-evolve#code-benchmarks)

We use evalplus for code evaluation. A new conda env is needed for evalplus.

```
conda create -n evalplus python=3.11
pip install --upgrade "evalplus[vllm] @ git+https://github.com/evalplus/evalplus@d362e933265c3e7e3df8101c930a89c3c470cd9f"
Evaluation:
```bash
condda activate evalplus
bash evaluation/code_eval/scripts/run_evalplus.sh <humaneval|mbpp> <hf_ckpt_path>
```

# 🎈 Citation

[https://github.com/ulab-uiuc/Multi-agent-evolve#-citation](https://github.com/ulab-uiuc/Multi-agent-evolve#-citation)

---

If you find Multi-Agent Evolve helpful, please cite us.

```
@misc{chen2025multiagentevolvellmselfimprove,
      title={Multi-Agent Evolve: LLM Self-Improve through Co-evolution}, 
      author={Yixing Chen and Yiding Wang and Siqi Zhu and Haofei Yu and Tao Feng and Muhan Zhan and Mostofa Patwary and Jiaxuan You},
      year={2025},
      eprint={2510.23595},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2510.23595}, 
}
```

# 🌻 Acknowledgement

[https://github.com/ulab-uiuc/Multi-agent-evolve#-acknowledgement](https://github.com/ulab-uiuc/Multi-agent-evolve#-acknowledgement)

---

This project is inspired by and partially adapted from the [Absolute Zero Reasoner (AZR)](https://github.com/LeapLabTHU/Absolute-Zero-Reasoner) project. We thank the AZR authors for their open-source contributions and ideas.

# 📧 Contact

[https://github.com/ulab-uiuc/Multi-agent-evolve#-contact](https://github.com/ulab-uiuc/Multi-agent-evolve#-contact)

---

Feel free to contact Yixing Chen and Yiding Wang via the following emails: [polaris_dane@sjtu.edu.cn](mailto:polaris_dane@sjtu.edu.cn), [yidingw@stu.pku.edu.cn](mailto:yidingw@stu.pku.edu.cn)

# 📈 Star History

[https://github.com/ulab-uiuc/Multi-agent-evolve#-star-history](https://github.com/ulab-uiuc/Multi-agent-evolve#-star-history)

---

[https://star-history.com/#ulab-uiuc/Multi-agent-evolve&Date&from=2025-10-29](https://star-history.com/#ulab-uiuc/Multi-agent-evolve&Date&from=2025-10-29)

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/ulab-uiuc/Multi-agent-evolve#readme-ov-file)

### License

[MIT license](https://github.com/ulab-uiuc/Multi-agent-evolve#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ulab-uiuc/Multi-agent-evolve/activity)

[Custom properties](https://github.com/ulab-uiuc/Multi-agent-evolve/custom-properties)

### Stars

[150
        stars](https://github.com/ulab-uiuc/Multi-agent-evolve/stargazers)

### Watchers

[7
        watching](https://github.com/ulab-uiuc/Multi-agent-evolve/watchers)

### Forks

[7
        forks](https://github.com/ulab-uiuc/Multi-agent-evolve/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fulab-uiuc%2FMulti-agent-evolve&report=ulab-uiuc+%28user%29)

## [Releases](https://github.com/ulab-uiuc/Multi-agent-evolve/releases)

No releases published

## [Packages
      0](https://github.com/orgs/ulab-uiuc/packages?repo_name=Multi-agent-evolve)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ulab-uiuc/Multi-agent-evolve/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.7%](https://github.com/ulab-uiuc/Multi-agent-evolve/search?l=python)
- [Shell
          2.3%](https://github.com/ulab-uiuc/Multi-agent-evolve/search?l=shell)

     You can’t perform that action at this time.
