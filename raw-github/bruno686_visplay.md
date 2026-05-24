---
repo: bruno686/visplay
url: https://github.com/bruno686/visplay
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - bruno686/VisPlay: [CVPR'26] VisPlay: Self-Evolving Vision-Language Models · GitHub

**Source**: https://github.com/bruno686/visplay

---

[Skip to content](https://github.com/bruno686/visplay#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[bruno686](https://github.com/bruno686)

/
**[VisPlay](https://github.com/bruno686/VisPlay)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbruno686%2FVisPlay)You must be signed in to change notification settings
- [Fork
    9](https://github.com/login?return_to=%2Fbruno686%2FVisPlay)
- 
[Star
          57](https://github.com/login?return_to=%2Fbruno686%2FVisPlay)

[https://github.com/bruno686/VisPlay](https://github.com/bruno686/VisPlay)

[Branches](https://github.com/bruno686/VisPlay/branches)[Tags](https://github.com/bruno686/VisPlay/tags)

[https://github.com/bruno686/VisPlay/branches](https://github.com/bruno686/VisPlay/branches)[https://github.com/bruno686/VisPlay/tags](https://github.com/bruno686/VisPlay/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History21 Commits21 Commits |  |  |  |
| .github | .github |  |  |
| Evaluation | Evaluation |  |  |
| assets | assets |  |  |
| evaluation | evaluation |  |  |
| question_evaluate | question_evaluate |  |  |
| question_generate | question_generate |  |  |
| scripts_MIMO-VL-7B | scripts_MIMO-VL-7B |  |  |
| scripts_Qwen-VL-3B | scripts_Qwen-VL-3B |  |  |
| scripts_Qwen-VL-7B | scripts_Qwen-VL-7B |  |  |
| train_examples | train_examples |  |  |
| validation_examples | validation_examples |  |  |
| verl | verl |  |  |
| vllm_service_init | vllm_service_init |  |  |
| .DS_Store | .DS_Store |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| =10.1 | =10.1 |  |  |
| Dockerfile | Dockerfile |  |  |
| Dockerfile.legacy | Dockerfile.legacy |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| anyscalecompute.ray-distributed-debugger-0.1.6.vsix | anyscalecompute.ray-distributed-debugger-0.1.6.vsix |  |  |
| config.py | config.py |  |  |
| configuration_utils.py | configuration_utils.py |  |  |
| index.html | index.html |  |  |
| merge.sh | merge.sh |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| setup.sh | setup.sh |  |  |
| tokens.json | tokens.json |  |  |
| View all files |  |  |  |

## Repository files navigation

## VisPlay: Self-Evolving Vision-Language Models

[https://github.com/bruno686/visplay#visplay-self-evolving-vision-language-models](https://github.com/bruno686/visplay#visplay-self-evolving-vision-language-models)

Reinforcement learning (RL) provides a principled framework for improving vision-language models (VLMs) on complex reasoning tasks. However, existing RL approaches often depend on human-annotated labels or task-specific heuristics to define verifiable rewards—both costly and limited in scalability. We introduce VisPlay, a self-evolving RL framework that enables VLMs to autonomously improve their reasoning capabilities from massive unlabeled image data. Starting from a single base VLM, VisPlay assigns the model into two interacting roles: an Image-Conditioned Questioner that formulates challenging yet answerable visual questions, and a Multimodal Reasoner that generates silver responses. These roles are jointly trained using Group Relative Policy Optimization (GRPO), which uses diversity and difficulty rewards to balance the difficulty of generated questions with the quality of silver answers. VisPlay scales efficiently across two model families. Trained on Qwen2.5-VL and MiMo-VL, VisPlay achieves consistent improvements in visual reasoning, compositional generalization, and hallucination reduction across eight benchmarks including MM-Vet and MMMU, and establishes a scalable path toward self-evolving multimodal intelligence.

[https://bruno686.github.io/VisPlay/](https://bruno686.github.io/VisPlay/)

[https://github.com/bruno686/VisPlay/blob/main/assets/Visplay.png](https://github.com/bruno686/VisPlay/blob/main/assets/Visplay.png)

## Requirements

[https://github.com/bruno686/visplay#requirements](https://github.com/bruno686/visplay#requirements)

The code base adopted from [R-Zero](https://github.com/Chengsong-Huang/R-Zero/tree/main) and [Vision-SR1](https://github.com/zli12321/Vision-SR1).

### Software Requirements

[https://github.com/bruno686/visplay#software-requirements](https://github.com/bruno686/visplay#software-requirements)

- Python 3.9+
- transformers=4.49.0

### Self-Evolving Setup

[https://github.com/bruno686/visplay#self-evolving-setup](https://github.com/bruno686/visplay#self-evolving-setup)

```
git clone https://github.com/bruno686/VisPlay.git
cd VisPlay
conda create -n VisPlay python=3.11
bash setup.sh

# Set an environment variable for your storage path in every main script.
# This is a large directory where checkpoints and generated data will be saved.
export STORAGE_PATH="/path/to/your/storage"
export HUGGINGFACENAME="yourhuggingfacename"

mkdir -p \
  "$STORAGE_PATH/evaluation" \
  "$STORAGE_PATH/models" \
  "$STORAGE_PATH/generated_question" \
  "$STORAGE_PATH/temp_results"
```

### Self-Play Training Scripts

[https://github.com/bruno686/visplay#self-play-training-scripts](https://github.com/bruno686/visplay#self-play-training-scripts)

```
bash scripts_Qwen-VL-3B/main.sh
bash scripts_Qwen-VL-7B/main.sh
bash scripts_MIMO-VL-7B/main.sh
```

### Evaluation & LLM-as-a-Judge Evaluation

[https://github.com/bruno686/visplay#evaluation--llm-as-a-judge-evaluation](https://github.com/bruno686/visplay#evaluation--llm-as-a-judge-evaluation)

We use ChatGLM-flash as the Judge. Different LLM judges will result in different evaluation results. For reference, we also comput the rule-based evaluation accuracies, which is lower than LLM-as-Judges on Math datasets.

1. 

##### Prepare Benchmark

[https://github.com/bruno686/visplay#prepare-benchmark](https://github.com/bruno686/visplay#prepare-benchmark)

All we benchmark are from [zli12321/datasets](https://huggingface.co/zli12321/datasets), you can directly download them. Ensuring consistency in evaluation is crucial.

1. 

##### Generate responses from trained LLM

[https://github.com/bruno686/visplay#generate-responses-from-trained-llm](https://github.com/bruno686/visplay#generate-responses-from-trained-llm)

We provide all the historic LLM generations for a quick reference and access to the results

```
bash validation_examples/eval_gen_questions.sh $experiment_name $your_model_path
```

For example:

```
bash validation_examples/eval_gen_questions.sh MIMO-VL-7B-solver_v3 /your_path/vr-zero/storage/models/MiMo-VL-7B-SFT_solver_v3/global_step_20/actor/huggingface
```

1. 

##### Use LLM-as-a-judge to generate result

[https://github.com/bruno686/visplay#use-llm-as-a-judge-to-generate-result](https://github.com/bruno686/visplay#use-llm-as-a-judge-to-generate-result)

```
bash Evaluation/eval.sh
```

## Notes

[https://github.com/bruno686/visplay#notes](https://github.com/bruno686/visplay#notes)

To facilitate your further review of our experiments, I've made our WandB logs publicly available. However, please note that these logs may be incomplete and may not include all iterations. Additionally, the actual number of training steps completed per iteration might not be fully recorded.

**Because, as mentioned in other issues, server limitations forced us to upload manually, so omissions or incorrect curves may exist** (only a few—I haven't cleaned them yet, because you know, sometimes parameters are wrong but get uploaded anyway). **Still, I believe most curves are accurate. I'm providing these for your reference. And we recommend increasing the training iterations as much as possible—for example, to 40 or more—to ensure adequate training. If iteration 1 fails to train effectively, iteration 2 may fall into a local minimum. Thank you again for your attention to our work!**

[visplay_wandb_log_public](https://wandb.ai/bruno686/Visplay/table?nw=nwuserbruno686)

To fully reproduce our results, the same benchmark should be used.

## Citation

[https://github.com/bruno686/visplay#citation](https://github.com/bruno686/visplay#citation)

If you find our works helpful, please cite

```
@misc{he2025visplay,
      title={VisPlay: Self-Evolving Vision-Language Models from Images}, 
      author={Yicheng He and Chengsong Huang and Zongxia Li and Jiaxin Huang and Yonghui Yang},
      year={2025},
      eprint={2511.15661},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2511.15661}, 
}
```

Our framework is directly based on the great work of Vision-SR1 and R-Zero. So,we recommend to also cite the sourcecode work.

```
@misc{li2025selfrewardingvisionlanguagemodelreasoning,
      title={Self-Rewarding Vision-Language Model via Reasoning Decomposition}, 
      author={Zongxia Li and Wenhao Yu and Chengsong Huang and Rui Liu and Zhenwen Liang and Fuxiao Liu and Jingxi Che and Dian Yu and Jordan Boyd-Graber and Haitao Mi and Dong Yu},
      year={2025},
      eprint={2508.19652},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2508.19652}, 
}

@article{huang2025rzeroselfevolvingreasoningllm,
      title={R-Zero: Self-Evolving Reasoning LLM from Zero Data}, 
      author={Chengsong Huang and Wenhao Yu and Xiaoyang Wang and Hongming Zhang and Zongxia Li and Ruosen Li and Jiaxin Huang and Haitao Mi and Dong Yu},
      year={2025},
      eprint={2508.05004},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2508.05004}, 
}
```

## About

         [CVPR'26] VisPlay: Self-Evolving Vision-Language Models       

### Resources

[Readme](https://github.com/bruno686/visplay#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/bruno686/visplay#Apache-2.0-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/bruno686/visplay#coc-ov-file)

### Contributing

[Contributing](https://github.com/bruno686/visplay#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/bruno686/VisPlay/activity)

### Stars

[57
        stars](https://github.com/bruno686/VisPlay/stargazers)

### Watchers

[1
        watching](https://github.com/bruno686/VisPlay/watchers)

### Forks

[9
        forks](https://github.com/bruno686/VisPlay/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fbruno686%2FVisPlay&report=bruno686+%28user%29)

## [Releases](https://github.com/bruno686/VisPlay/releases)

No releases published

## [Packages
      0](https://github.com/users/bruno686/packages?repo_name=VisPlay)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/bruno686/VisPlay/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          94.0%](https://github.com/bruno686/VisPlay/search?l=python)
- [Shell
          3.6%](https://github.com/bruno686/VisPlay/search?l=shell)
- 

Other

2.4%

     You can’t perform that action at this time.
