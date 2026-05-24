---
repo: zhentingwang/dump
url: https://github.com/zhentingwang/dump
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ZhentingWang/DUMP · GitHub

**Source**: https://github.com/zhentingwang/dump

---

[Skip to content](https://github.com/zhentingwang/dump#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ZhentingWang](https://github.com/ZhentingWang)

/
**[DUMP](https://github.com/ZhentingWang/DUMP)**

Public

- [Notifications](https://github.com/login?return_to=%2FZhentingWang%2FDUMP)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2FZhentingWang%2FDUMP)
- 
[Star
          33](https://github.com/login?return_to=%2FZhentingWang%2FDUMP)

[https://github.com/ZhentingWang/DUMP](https://github.com/ZhentingWang/DUMP)

[Branches](https://github.com/ZhentingWang/DUMP/branches)[Tags](https://github.com/ZhentingWang/DUMP/tags)

[https://github.com/ZhentingWang/DUMP/branches](https://github.com/ZhentingWang/DUMP/branches)[https://github.com/ZhentingWang/DUMP/tags](https://github.com/ZhentingWang/DUMP/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History32 Commits32 Commits |  |  |  |
| combined_logic_dataset | combined_logic_dataset |  |  |
| images | images |  |  |
| kk | kk |  |  |
| local_save_dir | local_save_dir |  |  |
| verl | verl |  |  |
| README.md | README.md |  |  |
| main_grpo_Qwen2.5-7B-Instruct-1M_combined_logic_longseq_combinedkk.sh | main_grpo_Qwen2.5-7B-Instruct-1M_combined_logic_longseq_combinedkk.sh |  |  |
| main_grpo_Qwen2.5-7B-Instruct-1M_combined_logic_longseq_combinedkk_nocl.sh | main_grpo_Qwen2.5-7B-Instruct-1M_combined_logic_longseq_combinedkk_nocl.sh |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# DUMP

[https://github.com/zhentingwang/dump#dump](https://github.com/zhentingwang/dump#dump)

[https://arxiv.org/abs/2504.09710](https://arxiv.org/abs/2504.09710)

This is code repo for paper [DUMP: Automated Distribution-Level Curriculum Learning for RL-based LLM Post-training](https://arxiv.org/pdf/2504.09710)

## 🔥 What is DUMP?

[https://github.com/zhentingwang/dump#-what-is-dump](https://github.com/zhentingwang/dump#-what-is-dump)

**DUMP** is a plug-and-play curriculum learning module for RL-based LLM post-training.
 It automatically prioritizes data distributions that are most beneficial for learning—
 based on live advantage signals from your model—and schedules them using a bandit-based UCB strategy.

🧠 If you're training LLMs with PPO / GRPO / RLHF on a mixture of training data from diverse distributions and difficulties, DUMP will:

- Improve convergence speed
- Boost performance on hard distributions
- Reduce wasted training on saturated samples

📈 Effectiveness of DUMP on the K&K puzzle dataset mixed with 12 distributions defined by the number of characters in each puzzle. DUMP consistently achieves higher answer reward on test dataset compared to baseline:

- Red: RL with DUMP curriculum; Green: RL without curriculum
- Each subplot shows a different logic puzzle difficulty (3–14 characters)

[https://github.com/ZhentingWang/DUMP/blob/main/images/effectiveness1.png](https://github.com/ZhentingWang/DUMP/blob/main/images/effectiveness1.png)[https://github.com/ZhentingWang/DUMP/blob/main/images/effectiveness2.png](https://github.com/ZhentingWang/DUMP/blob/main/images/effectiveness2.png)

## 🧩 Key Components

[https://github.com/zhentingwang/dump#-key-components](https://github.com/zhentingwang/dump#-key-components)

The project builds upon and integrates several existing components:

1. **verl** - An existing framework for implementing reinforcement learning training pipelines, with custom curriculum learning modifications
2. **kk/data_gen_kk.py** - Script used for generating Knights and Knaves logic puzzles datasets
3. **combined_logic_dataset** - Custom tools for combining multiple datasets

## ⚙️ Requirements

[https://github.com/zhentingwang/dump#%EF%B8%8F-requirements](https://github.com/zhentingwang/dump#%EF%B8%8F-requirements)

- Python 3.9
- CUDA support
- 8 A100/H100 GPUs for training (Recommended) [todo: provide scripts for training on fewer GPUs.]

## 🛠️ Installation

[https://github.com/zhentingwang/dump#%EF%B8%8F-installation](https://github.com/zhentingwang/dump#%EF%B8%8F-installation)

Follow these steps to set up the environment:

```
# Create and activate conda environment
conda create -n dump python=3.9
conda activate dump

# Clone the repository
git clone https://github.com/ZhentingWang/DUMP.git
cd DUMP

# Install PyTorch
pip install torch==2.4.0 --index-url https://download.pytorch.org/whl/cu121

# Install vllm and ray
pip3 install vllm==0.5.4 ray

# Install flash-attention
pip3 install flash-attn --no-build-isolation

# Install project dependencies
pip install -e .  # For verl integration

# Install additional tools
pip install wandb IPython matplotlib
pip install tensordict==0.5.0
pip install scipy
```

## 🔐 Service Authentication

[https://github.com/zhentingwang/dump#-service-authentication](https://github.com/zhentingwang/dump#-service-authentication)

Before using the project, you need to authenticate with Weights & Biases (for experiment tracking) and Hugging Face (for model uploading):

### Weights & Biases (Wandb)

[https://github.com/zhentingwang/dump#weights--biases-wandb](https://github.com/zhentingwang/dump#weights--biases-wandb)

```
# Install wandb if you haven't already
pip install wandb

# Log in to wandb
wandb login

# Follow the instructions to enter your API key
```

You can find your Wandb API key in your [Wandb account settings](https://wandb.ai/settings).

### Hugging Face

[https://github.com/zhentingwang/dump#hugging-face](https://github.com/zhentingwang/dump#hugging-face)

```
# Install huggingface_hub if you haven't already
pip install huggingface_hub

# Log in to Hugging Face
huggingface-cli login

# Follow the instructions to enter your token
```

You can find or create your Hugging Face token in your [Hugging Face account settings](https://huggingface.co/settings/tokens).

The training scripts automatically use these credentials for:

- Logging training metrics and model performance to Wandb
- Optionally uploading trained models to Hugging Face (configured in the training scripts via `trainer.hf_account`)

**Important**: Before running the training scripts, you need to modify the `trainer.hf_account` parameter in the `.sh` files from `xxx` to your own Hugging Face username. For example:

```
# Change this line in the training scripts
trainer.hf_account=xxx  # Change to your Hugging Face username
```

## Knights and Knaves (K&K) Puzzles

[https://github.com/zhentingwang/dump#knights-and-knaves-kk-puzzles](https://github.com/zhentingwang/dump#knights-and-knaves-kk-puzzles)

Knights and Knaves puzzles are classic logical reasoning problems where:

- An island is inhabited by knights (who always tell the truth) and knaves (who always lie)
- The solver must determine who is a knight and who is a knave based on statements made by the inhabitants
- The puzzles require deductive reasoning and logical inference

The project uses K&K puzzles of varying complexity (from 3 to 14 people) to train and evaluate LLMs' logical reasoning capabilities.

## 🎯 Training Details

[https://github.com/zhentingwang/dump#-training-details](https://github.com/zhentingwang/dump#-training-details)

- **Base Model**: Qwen2.5-7B-Instruct-1M
- **Sequence Length**: Long sequence training with up to 20K token responses
- **Training Strategy**: Two variants are available: 
  - With curriculum learning (`combinedkk.sh`) - Custom implementation focus of this project
  - Without curriculum learning (`combinedkk_nocl.sh`) - For comparative evaluation

- **Hardware Requirements**: 8 GPUs per node (Recommended. For the training on fewer GPUs, you can adjust the parameters in .sh files.)

## 🧪 Training Scripts

[https://github.com/zhentingwang/dump#-training-scripts](https://github.com/zhentingwang/dump#-training-scripts)

The project includes two primary training scripts:

### With DUMP Curriculum Learning

[https://github.com/zhentingwang/dump#with-dump-curriculum-learning](https://github.com/zhentingwang/dump#with-dump-curriculum-learning)

```
conda activate dump
./main_grpo_Qwen2.5-7B-Instruct-1M_combined_logic_longseq_combinedkk.sh
```

### Without DUMP Curriculum Learning

[https://github.com/zhentingwang/dump#without-dump-curriculum-learning](https://github.com/zhentingwang/dump#without-dump-curriculum-learning)

```
conda activate dump
./main_grpo_Qwen2.5-7B-Instruct-1M_combined_logic_longseq_combinedkk_nocl.sh
```

**Important**: Before running these scripts, remember to modify the `trainer.hf_account` parameter in the scripts from `xxx` to your own Hugging Face username to enable model uploading.

## 📘 Dataset Generation Process (Optional)

[https://github.com/zhentingwang/dump#-dataset-generation-process-optional](https://github.com/zhentingwang/dump#-dataset-generation-process-optional)

The dataset generation process is optional, you can directly use our generated data located in ./combined_logic_dataset/generate_combined_kk. The dataset generation process consists of the following steps:

1. 

**Generate K&K puzzles**:

```
cd kk
conda env create -f environment.yml
conda activate kk
cd ..
python kk/data_prep/data_gen_kk.py
```

This generates various Knights and Knaves puzzles in JSONL format.

2. 

**Move generated files to combined_logic_dataset**:

```
# Move all generated JSONL files to the appropriate directory
mv data/*/clean/*.jsonl combined_logic_dataset/kk/
```

3. 

**Generate combined dataset**:

```
# Run the dataset combiner in background
conda activate dump
nohup python ./combined_logic_dataset/generate_combined_kk.py --local_dir ./combined_logic_dataset/generate_combined_kk > generate_combined_kk.log 2>&1 &
```

This processes the JSONL files into parquet files with carefully formatted prompts suitable for instruction-tuned models.

## 🗂️ Project Structure

[https://github.com/zhentingwang/dump#%EF%B8%8F-project-structure](https://github.com/zhentingwang/dump#%EF%B8%8F-project-structure)

```
├── verl/                  # Reinforcement learning framework (external dependency with modifications)
│   ├── trainer/           # RL training implementation
│   └── ...
├── kk/                    # Knights and Knaves utilities
│   ├── data_prep/         # Data preparation utilities
│   │   └── data_gen_kk.py # Main data generation script used in this project
│   └── ...                # Other utilities (not directly used)
├── combined_logic_dataset/  # Combined dataset generation
│   ├── kk/                # Location for generated KK dataset files
│   ├── generate_combined_kk/ # Output directory for processed datasets
│   └── generate_combined_kk.py # Dataset combination script
└── main_grpo_*.sh         # Training scripts
```

## 🚀 Quick Start
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

