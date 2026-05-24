---
repo: zjunlp/knowself
url: https://github.com/zjunlp/knowself
content_timestamp: 2024-08-06
time_slice: 2024-Q3
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - zjunlp/KnowSelf: [ACL 2025] Agentic Knowledgeable Self-awareness · GitHub

**Source**: https://github.com/zjunlp/knowself

---

[Skip to content](https://github.com/zjunlp/knowself#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zjunlp](https://github.com/zjunlp)

/
**[KnowSelf](https://github.com/zjunlp/KnowSelf)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzjunlp%2FKnowSelf)You must be signed in to change notification settings
- [Fork
    9](https://github.com/login?return_to=%2Fzjunlp%2FKnowSelf)
- 
[Star
          93](https://github.com/login?return_to=%2Fzjunlp%2FKnowSelf)

[https://github.com/zjunlp/KnowSelf](https://github.com/zjunlp/KnowSelf)

[Branches](https://github.com/zjunlp/KnowSelf/branches)[Tags](https://github.com/zjunlp/KnowSelf/tags)

[https://github.com/zjunlp/KnowSelf/branches](https://github.com/zjunlp/KnowSelf/branches)[https://github.com/zjunlp/KnowSelf/tags](https://github.com/zjunlp/KnowSelf/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History9 Commits9 Commits |  |  |  |
| assets | assets |  |  |
| envs/webshop | envs/webshop |  |  |
| eval_agent | eval_agent |  |  |
| knowledge_system_construction | knowledge_system_construction |  |  |
| textworld | textworld |  |  |
| train | train |  |  |
| training_data_construction | training_data_construction |  |  |
| util | util |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| alfworld_game_files.json | alfworld_game_files.json |  |  |
| construct_knowledge_system.sh | construct_knowledge_system.sh |  |  |
| construct_rpo_data.sh | construct_rpo_data.sh |  |  |
| construct_training_data.sh | construct_training_data.sh |  |  |
| eval_knowself.sh | eval_knowself.sh |  |  |
| ignore_task_id.json | ignore_task_id.json |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.sh | setup.sh |  |  |
| train_stage1.sh | train_stage1.sh |  |  |
| train_stage2.sh | train_stage2.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

#  KnowSelf 

[https://github.com/zjunlp/knowself#-knowself-](https://github.com/zjunlp/knowself#-knowself-)

###  Agentic Knowledgeable Self-awareness 

[https://github.com/zjunlp/knowself#-agentic-knowledgeable-self-awareness-](https://github.com/zjunlp/knowself#-agentic-knowledgeable-self-awareness-)

[📄arXiv](https://arxiv.org/abs/2504.03553) •   [𝕏 Blog](https://x.com/zxlzr/status/1909101837216891010) •   [🤗HuggingFace](https://huggingface.co/collections/zjunlp/knowself-67b89580a9fa33106100115d)

[https://github.com/zjunlp/KnowSelf](https://github.com/zjunlp/KnowSelf)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://camo.githubusercontent.com/c822b4e8be75fcb074ad384127950599b53c1b6c1e3b8dd65bcf4bb58fd7b8a6/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6173742d636f6d6d69742f7a6a756e6c702f4b6e6f7753656c663f636f6c6f723d677265656e](https://camo.githubusercontent.com/c822b4e8be75fcb074ad384127950599b53c1b6c1e3b8dd65bcf4bb58fd7b8a6/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6173742d636f6d6d69742f7a6a756e6c702f4b6e6f7753656c663f636f6c6f723d677265656e)

## Table of Contents

[https://github.com/zjunlp/knowself#table-of-contents](https://github.com/zjunlp/knowself#table-of-contents)

- [🌻Acknowledgement](https://github.com/zjunlp/knowself#acknowledgement)
- [🌟Overview](https://github.com/zjunlp/knowself#overview)
- [🔧Installation](https://github.com/zjunlp/knowself#installation)
- [🚀QuickStart](https://github.com/zjunlp/knowself#quickstart)
- [📚Knowledge-System-Construction](https://github.com/zjunlp/knowself#knowledge-system-construction)
- [📝Training-Data-Construction](https://github.com/zjunlp/knowself#training-data-construction)
- [📉Training](https://github.com/zjunlp/knowself#training)
- [🧐Evaluation](https://github.com/zjunlp/knowself#evaluation)
- [🚩Citation](https://github.com/zjunlp/knowself#citation)
- 🎉[Contributors](https://github.com/zjunlp/knowself#%F0%9F%8E%89contributors)

---

## 🌻Acknowledgement

[https://github.com/zjunlp/knowself#acknowledgement](https://github.com/zjunlp/knowself#acknowledgement)

Our code of the training module is referenced from [self-rag](https://github.com/AkariAsai/self-rag), while the code of the inference module is implemented based on [ETO](https://github.com/Yifan-Song793/ETO) and [IPR](https://github.com/WeiminXiong/IPR). And our code of the knowledge generation and consolidation module is referenced and adapted from [AutoManual](https://github.com/minghchen/automanual). The templator module of models is referenced from [OneGen](https://github.com/zjunlp/OneGen). Various baseline codes are sourced from [ReAct](https://github.com/ysymyth/ReAct), [Reflexion](https://github.com/noahshinn/reflexion), [ExpeL](https://github.com/LeapLabTHU/ExpeL), [ETO](https://github.com/Yifan-Song793/ETO), [KnowAgent](https://github.com/zjunlp/KnowAgent), [WKM](https://github.com/zjunlp/WKM). We use [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory) to deploy our models. Thanks for their great contributions!

[https://github.com/zjunlp/KnowSelf/blob/main/assets/method.jpg](https://github.com/zjunlp/KnowSelf/blob/main/assets/method.jpg)

## 🌟Overview

[https://github.com/zjunlp/knowself#overview](https://github.com/zjunlp/knowself#overview)

Large Language Models (LLMs) have achieved considerable performance across various agentic planning tasks. However, traditional approaches adopt a ''flood irrigation'' methodology that indiscriminately injects gold trajectories, external feedback, and domain knowledge into agent models. This practice overlooks the fundamental human cognitive principle of self-awareness - the ability to dynamically assess situational demands and strategically employ resources during decision-making. We propose **agentic knowledgeable self-awareness** to address this gap, a novel paradigm enabling LLM-based agents to autonomously regulate knowledge utilization.

Specifically, we propose ***KnowSelf***, a data-centric approach that applies agents with ***know***ledgeable ***self***-awareness like humans. Concretely, we devise a heuristic situation judgement criterion to mark special tokens on the agent's self-explored trajectories for collecting training data. Through a two-stage training process, the agent model can switch between different situations by generating specific special tokens, achieving optimal planning effects with minimal costs. Our experiments demonstrate that ***KnowSelf*** can outperform various strong baselines on different tasks and models with minimal use of external knowledge.

## 🔧Installation

[https://github.com/zjunlp/knowself#installation](https://github.com/zjunlp/knowself#installation)

We recommend that you create a new conda environment to run our project.

```
conda create -n knowself python=3.10
conda activate knowself
git clone https://github.com/zjunlp/KnowSelf
cd KnowSelf
bash setup.sh
```

## 🚀QuickStart

[https://github.com/zjunlp/knowself#quickstart](https://github.com/zjunlp/knowself#quickstart)

Our train datasets are saved at `train/knowself_train_data`. You can use the following command to train the model and evaluate it.

```
# You should modify the path in the script before running it.

# train the stage 1 model
bash train_stage1.sh

# train the stage 2 model
bash train_stage2.sh

# evaluate the model
bash eval_knowself.sh
```

Also, our datasets and models have been uploaded to [huggingface](https://huggingface.co/collections/zjunlp/knowself-67b89580a9fa33106100115d).

## 📚Knowledge-System-Construction

[https://github.com/zjunlp/knowself#knowledge-system-construction](https://github.com/zjunlp/knowself#knowledge-system-construction)

In the section on knowledge system construction, we construct a knowledge system. Before starting the knowledge system construction, please ensure that you have openai api key and modify the file `eval_agent/configs/model/openai.json` to set the `api_key` and `api_base`. And set the global variable.

```
export OPENAI_API_KEY=<your_openai_api_key>
export OPENAI_BASE_URL=<your_openai_base_url>
export OPENAI_API_BASE=<your_openai_base_url>
```

The bash script `construct_knowledge_system.sh` implements the knowledge system construction process. You can run the following command.

```
bash construct_knowledge_system.sh
```

The script performs the pipeline of knowledge system construction, including the following steps:

1. 

**Step-level Trajectory Pair Generation.** We generate step-level trajectory pairs by using gpt-4o-2024-08-06. For ALFWorld, we generate 36 trajectory pairs, which include 6 pairs for each of task type. For WebShop, we generate 20 trajectory pairs.

2. 

**Knowledge Generation and Consolidation.** We follow [AutoManual](https://github.com/minghchen/automanual) to generate and consolidate knowledge. We use gpt-4o-2024-08-06 to generate and consolidate knowledge. We limit the knowledge base to 24 entries for ALFWorld and 10 for WebShop.

## 📑Training-Data-Construction

[https://github.com/zjunlp/knowself#training-data-construction](https://github.com/zjunlp/knowself#training-data-construction)

In the section on training data construction, we generate personalized training data for each model. Before starting the training data construction, please ensure that you have deployed the model using [LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory). And modify the file `eval_agent/configs/model/llama_factory.json` to set the `url`.

The bash script `construct_training_data.sh` implements the training data construction process. You can run the following command.

```
bash construct_training_data.sh
```

The script performs the pipeline of training data construction, including the following steps:

1. 

**Step-level Trajectory Pair Sampling.** We first sample step-level trajectory pairs for each model to prepare for constructing the data for slow thinking and knowledgeable thinking.

2. 

**Reflection for Pair Data.** We then allow the model to reflect on the pair data. If the model fails to reflect on the pair data, we will select knowledge for the failed reflection data. If the model can reflect on the pair data, we will format the data for slow thinking.

3. 

**Select Knowledge for Failed Reflection Data.** We select knowledge for the failed reflection data. We use DeepSeek-V3 to select knowledge for the failed reflection data. After selecting knowledge, we will format the data for knowledgeable thinking.

4. 

**Format Training Data.** We format the training data for slow thinking and knowledgeable thinking. And merge with the normal data (fast thinking) to form the final training data. The data will be saved at `train/train_data`.

## 📉Training

[https://github.com/zjunlp/knowself#training](https://github.com/zjunlp/knowself#training)

### Training Stage 1 Model

[https://github.com/zjunlp/knowself#training-stage-1-model](https://github.com/zjunlp/knowself#training-stage-1-model)

Use the following command to train for the stage 1. Or you can use the script `train_stage1.sh` to train the stage 1 model.

```
MODEL_NAME=llama3-8b-alfworld
MODEL_TYPE=llama3
NUM_GPUS=8
BATCH_SIZE_PER_GPU=1
TOTAL_BATCH_SIZE=8
TRAIN_TYPE=knowself
GRADIENT_ACC_STEPS=$(($TOTAL_BATCH_SIZE/$NUM_GPUS/$BATCH_SIZE_PER_GPU))

export LOCAL_RANK=0
echo "Training model ${MODEL_NAME} using $NUM_GPUS GPUs, $BATCH_SIZE_PER_GPU batch size per GPU, $GRADIENT_ACC_STEPS gradient accumulation steps"

CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 accelerate launch \
    --mixed_precision fp16 \
    --num_machines 1 \
    --num_processes $NUM_GPUS \
    --use_deepspeed \
    --deepspeed_config_file stage3_no_offloading_accelerate.conf \
    train/finetune.py \
    --model_name_or_path <path/to/llama-3.1-8b-instruct> \
    --model_type ${MODEL_TYPE} \
    --tokenizer_name <path/to/llama-3.1-8b-instruct> \
    --use_slow_tokenizer \
    --train_file <path/to/train_data> \
    --max_seq_length 3072 \
    --preprocessing_num_workers 16 \
    --per_device_train_batch_size $BATCH_SIZE_PER_GPU \
    --gradient_accumulation_steps $GRADIENT_ACC_STEPS \
    --learning_rate 2e-5 \
    --lr_scheduler_type cosine \
    --weight_decay 0. \
    --num_train_epochs 3 \
    --output_dir train/output/${TRAIN_TYPE}_${MODEL_NAME}/ \
    --with_tracking \
    --report_to tensorboard \
    --logging_steps 1 \
    --use_special_tokens
```

### Construct RPO Training Data

[https://github.com/zjunlp/knowself#construct-rpo-training-data](https://github.com/zjunlp/knowself#construct-rpo-training-data)

The bash script `construct_rpo_data.sh` implements the RPO training data construction process. You can run the following command.

```
bash construct_rpo_data.sh
```

The script performs the pipeline of RPO training data construction, including the following steps:

1. 

**Failed Trajectories Sampling.** We first sample failed trajectories for each model trained in stage 1 to prepare for constructing the data for RPO training.

2. 

**Format RPO Training Data.** We format the RPO training data using the failed trajectories and the corresponding golden trajectories.

### Training Stage 2 Model

[https://github.com/zjunlp/knowself#training-stage-2-model](https://github.com/zjunlp/knowself#training-stage-2-model)

Use the following command to train for the stage 2. Or you can use the script `train_stage2.sh` to train the stage 2 model.

```
MODEL_NAME=llama3-8b-alfworld-rpo
MODEL_TYPE=llama3
NUM_GPUS=8
BATCH_SIZE_PER_GPU=1
TOTAL_BATCH_SIZE=8
GRADIENT_ACC_STEPS=$(($TOTAL_BATCH_SIZE/$NUM_GPUS/$BATCH_SIZE_PER_GPU))

export LOCAL_RANK=0
echo "Training model ${MODEL_NAME} using $NUM_GPUS GPUs, $BATCH_SIZE_PER_GPU batch size per GPU, $GRADIENT_ACC_STEPS gradient accumulation steps"

CUDA_VISIBLE_DEVICES=0,1,2,3,4,5,6,7 accelerate launch \
    --mixed_precision fp16 \
    --num_machines 1 \
    --num_processes $NUM_GPUS \
    --use_deepspeed \
    --deepspeed_config_file stage3_no_offloading_accelerate.conf \
    train_dpo.py \
## gBrain Temporal Metadata

- content_timestamp: 2024-08-06
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q3
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

