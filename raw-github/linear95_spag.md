---
repo: linear95/spag
url: https://github.com/linear95/spag
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Linear95/SPAG: Self-playing Adversarial Language Game Enhances LLM Reasoning, NeurIPS 2024 · GitHub

**Source**: https://github.com/linear95/spag

---

[Skip to content](https://github.com/linear95/spag#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Linear95](https://github.com/Linear95)

/
**[SPAG](https://github.com/Linear95/SPAG)**

Public

- [Notifications](https://github.com/login?return_to=%2FLinear95%2FSPAG)You must be signed in to change notification settings
- [Fork
    24](https://github.com/login?return_to=%2FLinear95%2FSPAG)
- 
[Star
          144](https://github.com/login?return_to=%2FLinear95%2FSPAG)

[https://github.com/Linear95/SPAG](https://github.com/Linear95/SPAG)

[Branches](https://github.com/Linear95/SPAG/branches)[Tags](https://github.com/Linear95/SPAG/tags)

[https://github.com/Linear95/SPAG/branches](https://github.com/Linear95/SPAG/branches)[https://github.com/Linear95/SPAG/tags](https://github.com/Linear95/SPAG/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History34 Commits34 Commits |  |  |  |
| configs | configs |  |  |
| data | data |  |  |
| figures | figures |  |  |
| tools | tools |  |  |
| .gitignore | .gitignore |  |  |
| DATA_LICENSE | DATA_LICENSE |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| arguments.py | arguments.py |  |  |
| dataloaders.py | dataloaders.py |  |  |
| requirements.txt | requirements.txt |  |  |
| train.py | train.py |  |  |
| trainers.py | trainers.py |  |  |
| utils.py | utils.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Play of Adversarial Language Game (SPAG)

[https://github.com/linear95/spag#self-play-of-adversarial-language-game-spag](https://github.com/linear95/spag#self-play-of-adversarial-language-game-spag)

[https://github.com/Linear95/SPAG/blob/main/LICENSE](https://github.com/Linear95/SPAG/blob/main/LICENSE)[https://github.com/Linear95/SPAG/blob/main/DATA_LICENSE](https://github.com/Linear95/SPAG/blob/main/DATA_LICENSE)[https://www.python.org/downloads/release/python-380/](https://www.python.org/downloads/release/python-380/)

This repo contains the implementation of NeurIPS 2024 paper:

- [Self-playing Adversarial Language Game Enhances LLM Reasoning](https://arxiv.org/abs/2404.10642)

We explore the **S**elf-**P**lay training of LLMs in an **A**dversarial language **G**ame (SPAG) named [Adversarial Taboo](https://arxiv.org/abs/1911.01622). In the following game examples with the target word "conversation", the attacker wins left while the defender wins right:

[https://github.com/Linear95/SPAG/blob/main/figures/game_examples.png](https://github.com/Linear95/SPAG/blob/main/figures/game_examples.png)

With the training epoch of SPAG increasing, the LLM reasoning ability continuously improves as shown in the plots below:

[https://github.com/Linear95/SPAG/blob/main/figures/spag-reasoning-plot.png](https://github.com/Linear95/SPAG/blob/main/figures/spag-reasoning-plot.png)

Many thanks to [@thwu1](https://github.com/thwu1), who has reproduced the SPAG experiments and released model checkpoints ([Imitation Model](https://huggingface.co/ThWu/spag_im_ckpt), [SPAG-1](https://huggingface.co/ThWu/spag_spag1_ckpt), [SPAG-2](https://huggingface.co/ThWu/spag_spag2_ckpt), [SPAG-3](https://huggingface.co/ThWu/spag_spag3_ckpt)) on Huggingface 🤗!

## Environment

[https://github.com/linear95/spag#environment](https://github.com/linear95/spag#environment)

To build the running environment, use the following command:

```
pip3 install -r requirements.txt
```

We train models and sampling episodes using 32 40G A100 GPUs with CUDA 11.0. The commands below are also compatible with 8 A100 GPUs.

## Imitation Learning

[https://github.com/linear95/spag#imitation-learning](https://github.com/linear95/spag#imitation-learning)

To ensure the instruction-following ability of LLMs to the game rules, we first let LLMs imitate the winning behaviors of GPT-4. To launch the imitation learning on LLaMA-2-7B-base, use the following command:

```
torchrun --nproc_per_node=8 --master_port=6000 train.py \
    --output_dir <path_to_save_your_imitation_checkpoint> \
    --model_name_or_path "Llama-2-7b-hf" \
    --ref_model_name_or_path "Llama-2-7b-hf" \
    --lm_kl_coeff 0.1 \
    --train_method "SFTwithKL" \
    --train_data_path "./data/train_imitation_gpt4.json" \
    --remove_unused_columns False \
    --num_train_epochs 1 \
    --per_device_train_batch_size 2 \
    --gradient_accumulation_steps 8 \
    --evaluation_strategy no \
    --padding_side "right" \
    --truncation_side "left" \
    --max_length 2048 \
    --save_strategy epoch \
    --learning_rate 5e-6 \
    --lr_scheduler_type "cosine" \
    --warmup_ratio 0.03 \
    --logging_steps 1 \
    --weight_decay 0. \
    --deepspeed "./configs/default_offload_opt_param.json" \
    --gradient_checkpointing True \
    --tf32 True  --bf16 True
```

Here [Llama-2-7b-hf](https://huggingface.co/meta-llama/Llama-2-7b-hf) can be replaced by [Baichuan2-13B-Base](https://huggingface.co/baichuan-inc/Baichuan2-13B-Base) to reproduce the Baichuan-2 results in our paper.

## Self-play Episode Collection

[https://github.com/linear95/spag#self-play-episode-collection](https://github.com/linear95/spag#self-play-episode-collection)

After the imitation learning, we can conduct the self-play with the imitation-learned model on all targets words:

```
export PYTHONPATH=.

torchrun --nproc_per_node=8 --master_port=6000 tools/play_llm_game.py \
    --taboo_max_turns 5 \
    --attacker_model_name_or_path <path_to_imitation_learned_model> \
    --defender_model_name_or_path <path_to_imitation_learned_model> \
    --model_prefix "im_llama2" \
    --data_path "./data/all_target_words.txt" \
    --output_dir "./data/self_play_results" \
    --per_device_eval_batch_size 1 \
    --task_type "sampling" \
    --data_suffix "all_words" \
    --max_length 2048 \
    --max_new_tokens 256 \
    --logging_steps 5 \
    --bf16 True  --tf32 True
```

When the self-play collection is finished, we can access all the game episodes in `im_llama2_sampling_all_words_results.json` at `data/self_play_results/`.

## Reinforcement Learning on Self-play Episodes

[https://github.com/linear95/spag#reinforcement-learning-on-self-play-episodes](https://github.com/linear95/spag#reinforcement-learning-on-self-play-episodes)

To conduct reinforcement learning on game episodes, we first calculate the outcomes by rule-based judgment and assign rewards to actions:

```
export PYTHONPATH=.

python3 tools/assign_rewards.py \
    --input_data_path data/self_play_results/im_llama2_sampling_all_target_words_results.json \
    --output_data_path data/train_spag_data_im_llama2.json \
    --sft_data_path data/alpaca_train.json
```

The output file `train_spag_data_im_llama2.json` is already in an instruction-tuning format, with the following keywords:

- `query` & `target`: the input and label for language modeling,
- `reward`: the reward assigned to the current utterance (`target`),
- `weight`: the re-weighting parameter to ensure that both attacker and defender have an equal learning coefficient 1/2 in expectation.

Then the SPAG model can be learned with the following command:

```
torchrun --nproc_per_node=8 --master_port=6000 train.py \
    --output_dir <path_to_save_your_SPAG_checkpoint> \
    --model_name_or_path <path_to_your_imitation_checkpoint> \
    --ref_model_name_or_path <path_to_your_imitation_checkpoint> \
    --lm_kl_coeff 0.2 \
    --lm_sft_coeff 0.5 \
    --train_method "OfflinePO" \
    --train_data_path "./data/train_spag_data_im_llama2.json" \
    --remove_unused_columns False \
    --num_train_epochs 1 \
    --per_device_train_batch_size 2 \
    --gradient_accumulation_steps 8 \
    --evaluation_strategy no \
    --padding_side "right" \
    --truncation_side "left" \
    --max_length 2048 \
    --save_strategy epoch \
    --learning_rate 2e-6 \
    --lr_scheduler_type "cosine" \
    --warmup_ratio 0.03 \
    --logging_steps 1 \
    --weight_decay 0. \
    --deepspeed "./configs/default_offload_opt_param.json" \
    --gradient_checkpointing True \
    --tf32 True  --bf16 True
```

By repeating the episode-collection and SPAG-learning processes, we can observe continous improvements on reasoning benchmarks. For LLM reasoning evaluation, we use the [lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness) repo with the setups described in our paper.

## Citation

[https://github.com/linear95/spag#citation](https://github.com/linear95/spag#citation)

Please cite our paper if you find the code useful.

```
@inproceedings{cheng2024spag,
 title = {Self-playing Adversarial Language Game Enhances LLM Reasoning},
 author = {Cheng, Pengyu and Hu, Tianhao and Xu, Han and Zhang, Zhisong and Dai, Yong and Han, Lei and du, nan and Li, Xiaolong},
 booktitle = {Advances in Neural Information Processing Systems},
 pages = {126515--126543},
 volume = {37},
 year = {2024}
}
```

## About

         Self-playing Adversarial Language Game Enhances LLM Reasoning, NeurIPS 2024       

### Resources

[Readme](https://github.com/linear95/spag#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/linear95/spag#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Linear95/SPAG/activity)

### Stars

[144
        stars](https://github.com/Linear95/SPAG/stargazers)

### Watchers

[4
        watching](https://github.com/Linear95/SPAG/watchers)

### Forks

[24
        forks](https://github.com/Linear95/SPAG/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FLinear95%2FSPAG&report=Linear95+%28user%29)

## [Releases](https://github.com/Linear95/SPAG/releases)

No releases published

## [Packages
      0](https://github.com/users/Linear95/packages?repo_name=SPAG)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Linear95/SPAG/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/Linear95/SPAG/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

