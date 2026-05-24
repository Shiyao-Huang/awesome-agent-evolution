---
repo: yinbo0927/fate
url: https://github.com/yinbo0927/fate
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - YinBo0927/FATE: The official code of On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment · GitHub

**Source**: https://github.com/yinbo0927/fate

---

[Skip to content](https://github.com/yinbo0927/fate#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[YinBo0927](https://github.com/YinBo0927)

/
**[FATE](https://github.com/YinBo0927/FATE)**

Public

- [Notifications](https://github.com/login?return_to=%2FYinBo0927%2FFATE)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FYinBo0927%2FFATE)
- 
[Star
          16](https://github.com/login?return_to=%2FYinBo0927%2FFATE)

[https://github.com/YinBo0927/FATE](https://github.com/YinBo0927/FATE)

[Branches](https://github.com/YinBo0927/FATE/branches)[Tags](https://github.com/YinBo0927/FATE/tags)

[https://github.com/YinBo0927/FATE/branches](https://github.com/YinBo0927/FATE/branches)[https://github.com/YinBo0927/FATE/tags](https://github.com/YinBo0927/FATE/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History28 Commits28 Commits |  |  |  |
| assets | assets |  |  |
| configs | configs |  |  |
| docs | docs |  |  |
| scripts | scripts |  |  |
| src/fate | src/fate |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .nojekyll | .nojekyll |  |  |
| FATE_main_ATBench.py | FATE_main_ATBench.py |  |  |
| FATE_main_BuildReplay.py | FATE_main_BuildReplay.py |  |  |
| FATE_main_Prepare.py | FATE_main_Prepare.py |  |  |
| FATE_main_Train.py | FATE_main_Train.py |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| index.html | index.html |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment

[https://github.com/yinbo0927/fate#on-policy-self-evolution-via-failure-trajectories-for-agentic-safety-alignment](https://github.com/yinbo0927/fate#on-policy-self-evolution-via-failure-trajectories-for-agentic-safety-alignment)

[https://arxiv.org/abs/2605.11882](https://arxiv.org/abs/2605.11882)[https://yinbo0927.github.io/FATE/](https://yinbo0927.github.io/FATE/)

---

**Authors:**
[Bo Yin*](https://scholar.google.com/citations?user=YSA01EoAAAAJ&hl=zh-CN), [Qi Li*](https://scholar.google.com/citations?user=gsV-g2wAAAAJ&hl=zh-CN), [Xinchao Wang†](https://scholar.google.com/citations?user=w69Buq0AAAAJ&hl=en)

National University of Singapore

* Equal contribution.
† Corresponding author: [xinchao@nus.edu.sg](mailto:xinchao@nus.edu.sg)

---

## Overview

[https://github.com/yinbo0927/fate#overview](https://github.com/yinbo0927/fate#overview)

[https://github.com/YinBo0927/FATE/blob/main/assets/fate_figure1.png](https://github.com/YinBo0927/FATE/blob/main/assets/fate_figure1.png)

**Figure 1.** FATE mines failure trajectories, asks the current policy to propose repairs, filters candidates with verifier-scored multi-objective Pareto selection, and updates the policy with SFT and PFPO.

## Results

[https://github.com/yinbo0927/fate#results](https://github.com/yinbo0927/fate#results)

### AgentDojo

[https://github.com/yinbo0927/fate#agentdojo](https://github.com/yinbo0927/fate#agentdojo)

ASR and BRR are lower-is-better. TSR is higher-is-better.

| Backbone | Method | ASR ↓ | TSR ↑ | BRR ↓ |
|---|---|---|---|---|
| Qwen3-8B-Instruct | Base | 0.812 | 0.132 | 0.104 |
| Qwen3-8B-Instruct | FATE | 0.540 | 0.392 | 0.082 |
| Llama-3.1-8B-Instruct | Base | 0.768 | 0.158 | 0.118 |
| Llama-3.1-8B-Instruct | FATE | 0.512 | 0.417 | 0.087 |
| Ministral-3-8B-Instruct | Base | 0.736 | 0.176 | 0.096 |
| Ministral-3-8B-Instruct | FATE | 0.486 | 0.438 | 0.074 |
| Gemma-3-12B-it | Base | 0.704 | 0.204 | 0.132 |
| Gemma-3-12B-it | FATE | 0.468 | 0.462 | 0.091 |
| Phi-4-reasoning | Base | 0.748 | 0.168 | 0.126 |
| Phi-4-reasoning | FATE | 0.503 | 0.429 | 0.089 |

### AgentHarm

[https://github.com/yinbo0927/fate#agentharm](https://github.com/yinbo0927/fate#agentharm)

HCR is lower-is-better. VRR and SafeScore are higher-is-better.

| Backbone | Method | HCR ↓ | VRR ↑ | SafeScore ↑ |
|---|---|---|---|---|
| Qwen3-8B-Instruct | Base | 0.719 | 0.156 | 0.241 |
| Qwen3-8B-Instruct | FATE | 0.125 | 0.812 | 0.870 |
| Llama-3.1-8B-Instruct | Base | 0.672 | 0.188 | 0.286 |
| Llama-3.1-8B-Instruct | FATE | 0.156 | 0.781 | 0.842 |
| Ministral-3-8B-Instruct | Base | 0.641 | 0.219 | 0.314 |
| Ministral-3-8B-Instruct | FATE | 0.141 | 0.797 | 0.858 |
| Gemma-3-12B-it | Base | 0.625 | 0.234 | 0.337 |
| Gemma-3-12B-it | FATE | 0.172 | 0.766 | 0.821 |
| Phi-4-reasoning | Base | 0.688 | 0.203 | 0.301 |
| Phi-4-reasoning | FATE | 0.164 | 0.781 | 0.836 |

### Iterative Self-Evolution

[https://github.com/yinbo0927/fate#iterative-self-evolution](https://github.com/yinbo0927/fate#iterative-self-evolution)

[https://github.com/YinBo0927/FATE/blob/main/assets/results_evolution.png](https://github.com/YinBo0927/FATE/blob/main/assets/results_evolution.png)

### ATBench External Generalization

[https://github.com/yinbo0927/fate#atbench-external-generalization](https://github.com/yinbo0927/fate#atbench-external-generalization)

| Category | Model | ATBench-C Acc. ↑ | ATBench-C Prec. ↑ | ATBench-C Rec. ↑ | ATBench-C F1 ↑ | ATBench-F R.S. ↑ | ATBench-F F.M. ↑ | ATBench-F R.H. ↑ |
|---|---|---|---|---|---|---|---|---|
| Closed-source | GPT-5.4 | 73.7 | 68.5 | 87.1 | 76.7 | 33.6 | 13.5 | 30.2 |
| Closed-source | GPT-5.2 | 69.0 | 65.6 | 79.3 | 71.8 | 29.5 | 12.0 | 26.8 |
| Closed-source | Gemini-3-Flash | 76.4 | 79.3 | 71.0 | 74.9 | 18.4 | 8.3 | 15.0 |
| Closed-source | Gemini-3.1-Pro | 75.5 | 76.1 | 73.8 | 75.0 | 24.8 | 12.6 | 18.5 |
| Open-source | Qwen3.5-397B-A17B | 66.8 | 65.5 | 70.2 | 67.8 | 7.7 | 3.6 | 6.8 |
| Open-source | Qwen3.5-4B | 45.9 | 41.2 | 20.7 | 27.6 | 6.6 | 3.0 | 8.2 |
| Open-source | Qwen3-4B | 52.6 | 78.0 | 6.4 | 11.9 | 4.4 | 8.2 | 18.3 |
| Open-source | QwQ-32B | 57.7 | 81.9 | 19.1 | 31.0 | 15.8 | 9.4 | 22.9 |
| Open-source | Qwen3-235B-A22B-Instruct-2507 | 59.2 | 58.2 | 63.8 | 60.8 | 7.0 | 11.6 | 26.6 |
| Open-source | Qwen3-4B-Instruct-2507 | 55.7 | 77.6 | 15.3 | 25.5 | 1.0 | 9.6 | 21.2 |
| Open-source | Qwen2.5-7B-Instruct | 53.4 | 73.8 | 9.7 | 17.1 | 5.3 | 6.0 | 15.5 |
| Open-source | Llama3.1-8B-Instruct | 45.3 | 47.3 | 89.5 | 61.9 | 6.2 | 5.8 | 15.5 |
| Guard | LlamaGuard3-8B | 53.1 | 85.7 | 3.8 | 7.3 | - | - | - |
| Guard | LlamaGuard4-12B | 58.1 | 63.8 | 30.9 | 41.7 | - | - | - |
| Guard | Qwen3-Guard | 51.5 | 40.0 | 0.4 | 0.8 | - | - | - |
| Guard | ShieldAgent | 62.5 | 58.0 | 81.4 | 67.7 | - | - | - |
| Guard | AgentDoG-Qwen3-4B | 64.0 | 59.2 | 88.9 | 71.1 | 46.8 | 16.5 | 40.6 |
| Ours | Qwen3-8B-Instruct + FATE | 77.8 | 80.5 | 78.6 | 79.5 | 49.2 | 18.4 | 43.1 |

## Installation

[https://github.com/yinbo0927/fate#installation](https://github.com/yinbo0927/fate#installation)

1. Create the conda environment and install dependencies.

```
git clone https://github.com/YinBo0927/FATE.git
cd FATE
conda create -n fate python=3.10 -y
conda activate fate
pip install -r requirements.txt
export PYTHONPATH=$PWD/src:${PYTHONPATH:-}
```

## Run

[https://github.com/yinbo0927/fate#run](https://github.com/yinbo0927/fate#run)

The commands below build one replay round from AgentDojo and AgentHarm.

1. Download AgentDojo and AgentHarm assets, then create output folders.

```
python FATE_main_Prepare.py --datasets agentdojo agentharm
```

1. Run the current policy with the official AgentDojo benchmark runner, then normalize its trace logs.

```
python -m agentdojo.scripts.benchmark \
  --model local \
  --model-id Qwen/Qwen3-8B-Instruct \
  --attack tool_knowledge \
  --logdir artifacts/agentdojo_runs \
  --force-rerun
```

Use `--suite` and `--user-task` to restrict this command to a fixed dev split, for example `--suite workspace --user-task user_task_0 --user-task user_task_1`.

```
python scripts/normalize_agentdojo_rollouts.py \
  --logdir artifacts/agentdojo_runs \
  --output artifacts/round_0/agentdojo_dev_rollouts.scored.jsonl \
  --split dev
```

1. Run AgentHarm on the validation split with Inspect Evals, then normalize its Inspect logs.

```
inspect eval inspect_evals/agentharm \
  --model hf/Qwen/Qwen3-8B-Instruct \
  --log-dir artifacts/agentharm_runs \
  -T split=val
```

```
python scripts/normalize_agentharm_rollouts.py \
  --logdir artifacts/agentharm_runs \
  --output artifacts/round_0/agentharm_dev_rollouts.scored.jsonl \
  --split val \
  --mode harmful_request
```

1. Merge the normalized benchmark rollouts into the replay-builder input.

```
python scripts/merge_jsonl.py \
  --inputs artifacts/round_0/agentdojo_dev_rollouts.scored.jsonl artifacts/round_0/agentharm_dev_rollouts.scored.jsonl \
  --output artifacts/round_0/dev_rollouts.scored.jsonl
```

Each normalized row uses the same FATE rollout schema:

```
{"failure_id":"agentdojo-dev-0001","task":"...","failed_trajectory":"...","mode":"attacked_legitimate","scores":{"security":0.0,"utility":1.0,"over_refusal":1.0,"trajectory_control":0.0},"metadata":{"benchmark":"agentdojo","split":"dev"}}
```

1. Build failure prompts and generate same-policy repair candidates.

```
python FATE_main_BuildReplay.py
```

This writes `artifacts/round_0/repair_candidates.unverified.jsonl` and stops before replay construction.

1. Re-execute or score each generated repair with the corresponding benchmark verifier. Save the scored candidates to `artifacts/round_0/repair_candidates.verified.jsonl`, then rerun replay construction.

```
python FATE_main_BuildReplay.py
```

1. Train SFT on the selected repair replay, then sample PFPO candidate groups.

```
python FATE_main_Train.py
```

This writes `artifacts/round_0/pfpo_groups.unscored.jsonl` and stops before PFPO.

1. Score the PFPO candidate groups with the corresponding benchmark verifier. Save the scored groups to `artifacts/round_0/pfpo_groups.verified.jsonl`, then rerun training.

```
python FATE_main_Train.py
```

See [docs/reproduction.md](https://github.com/YinBo0927/FATE/blob/main/docs/reproduction.md) for JSONL schemas.

## Citation

[https://github.com/yinbo0927/fate#citation](https://github.com/yinbo0927/fate#citation)

If you find this work interesting or helpful, please cite:

```
@misc{yin2026onpolicyselfevolutionfailuretrajectories,
      title={On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment}, 
      author={Bo Yin and Qi Li and Xinchao Wang},
      year={2026},
      eprint={2605.11882},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2605.11882}, 
}
```

## About

         The official code of On-Policy Self-Evolution via Failure Trajectories for Agentic Safety Alignment       

### Resources

[Readme](https://github.com/yinbo0927/fate#readme-ov-file)

### License

[MIT license](https://github.com/yinbo0927/fate#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/YinBo0927/FATE/activity)

### Stars

[16
        stars](https://github.com/YinBo0927/FATE/stargazers)

### Watchers

[0
        watching](https://github.com/YinBo0927/FATE/watchers)

### Forks

[0
        forks](https://github.com/YinBo0927/FATE/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FYinBo0927%2FFATE&report=YinBo0927+%28user%29)

## [Releases](https://github.com/YinBo0927/FATE/releases)

No releases published

## [Packages
      0](https://github.com/users/YinBo0927/packages?repo_name=FATE)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/YinBo0927/FATE/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          69.5%](https://github.com/YinBo0927/FATE/search?l=python)
- [HTML
          23.3%](https://github.com/YinBo0927/FATE/search?l=html)
- [CSS
          7.2%](https://github.com/YinBo0927/FATE/search?l=css)

     You can’t perform that action at this time.
