---
repo: xizaoqu/worldmem
url: https://github.com/xizaoqu/worldmem
content_timestamp: 2025-11-30
time_slice: 2025-11
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - xizaoqu/WorldMem: [NeurIPS 2025] WorldMem: Long-term Consistent World Simulation with Memory · GitHub

**Source**: https://github.com/xizaoqu/worldmem

---

[Skip to content](https://github.com/xizaoqu/worldmem#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[xizaoqu](https://github.com/xizaoqu)

/
**[WorldMem](https://github.com/xizaoqu/WorldMem)**

Public

- [Notifications](https://github.com/login?return_to=%2Fxizaoqu%2FWorldMem)You must be signed in to change notification settings
- [Fork
    16](https://github.com/login?return_to=%2Fxizaoqu%2FWorldMem)
- 
[Star
          359](https://github.com/login?return_to=%2Fxizaoqu%2FWorldMem)

[https://github.com/xizaoqu/WorldMem](https://github.com/xizaoqu/WorldMem)

[Branches](https://github.com/xizaoqu/WorldMem/branches)[Tags](https://github.com/xizaoqu/WorldMem/tags)

[https://github.com/xizaoqu/WorldMem/branches](https://github.com/xizaoqu/WorldMem/branches)[https://github.com/xizaoqu/WorldMem/tags](https://github.com/xizaoqu/WorldMem/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History54 Commits54 Commits |  |  |  |
| algorithms | algorithms |  |  |
| assets | assets |  |  |
| configurations | configurations |  |  |
| datasets | datasets |  |  |
| experiments | experiments |  |  |
| utils | utils |  |  |
| .gitattributes | .gitattributes |  |  |
| LICENSE.md | LICENSE.md |  |  |
| README.md | README.md |  |  |
| app.py | app.py |  |  |
| calculate_fid.py | calculate_fid.py |  |  |
| data_generator.py | data_generator.py |  |  |
| evaluate.sh | evaluate.sh |  |  |
| infer.sh | infer.sh |  |  |
| main.py | main.py |  |  |
| requirements.txt | requirements.txt |  |  |
| train_stage_1.sh | train_stage_1.sh |  |  |
| train_stage_2.sh | train_stage_2.sh |  |  |
| train_stage_3.sh | train_stage_3.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/xizaoqu/WorldMem/blob/main/assets/worldmem_logo.png](https://github.com/xizaoqu/WorldMem/blob/main/assets/worldmem_logo.png)

# **WorldMem: Long-term Consistent World Simulation 
 with Memory**

[https://github.com/xizaoqu/worldmem#worldmem-long-term-consistent-world-simulation--with-memory](https://github.com/xizaoqu/worldmem#worldmem-long-term-consistent-world-simulation--with-memory)

[https://github.com/xizaoqu/WorldMem/blob/main](https://github.com/xizaoqu/WorldMem/blob/main)
[Zeqi Xiao1](https://xizaoqu.github.io)[Yushi Lan1](https://nirvanalan.github.io/)[Yifan Zhou1](https://zhouyifan.net/about/)[Wenqi Ouyang1](https://vicky0522.github.io/Wenqi-Ouyang/)[Shuai Yang2](https://williamyang1991.github.io/)[Yanhong Zeng3](https://zengyh1900.github.io/)[Xingang Pan1](https://xingangpan.github.io/)
1S-Lab, Nanyang Technological University, 
2Wangxuan Institute of Computer Technology, Peking University,
3Shanghai AI Laboratory     

[https://arxiv.org/abs/2504.12369](https://arxiv.org/abs/2504.12369)[https://xizaoqu.github.io/worldmem/](https://xizaoqu.github.io/worldmem/)[https://huggingface.co/spaces/yslan/worldmem](https://huggingface.co/spaces/yslan/worldmem)

demo.1.1.mp4

## Installation

[https://github.com/xizaoqu/worldmem#installation](https://github.com/xizaoqu/worldmem#installation)

```
conda create python=3.10 -n worldmem
conda activate worldmem
pip install -r requirements.txt
conda install -c conda-forge ffmpeg=4.3.2
```

## Quick start

[https://github.com/xizaoqu/worldmem#quick-start](https://github.com/xizaoqu/worldmem#quick-start)

```
python app.py
```

## Run

[https://github.com/xizaoqu/worldmem#run](https://github.com/xizaoqu/worldmem#run)

To enable cloud logging with [Weights & Biases (wandb)](https://wandb.ai/site), follow these steps:

1. 

Sign up for a wandb account.

2. 

Run the following command to log in:

```
wandb login
```

3. 

Open `configurations/training.yaml` and set the `entity` and `project` field to your wandb username.

---

### Training

[https://github.com/xizaoqu/worldmem#training](https://github.com/xizaoqu/worldmem#training)

Download pretrained weights from [Oasis](https://github.com/etched-ai/open-oasis).

Training the model on 4 H100 GPUs, it converges after approximately 500K steps. We observe that gradually increasing task difficulty improves performance. Thus, we adopt a multi-stage training strategy: ,

```
sh train_stage_1.sh   # Small range, no vertical turning
sh train_stage_2.sh   # Large range, no vertical turning
sh train_stage_3.sh   # Large range, with vertical turning
```

To resume training from a previous checkpoint, configure the `resume` and `output_dir` variables in the corresponding `.sh` script.

---

### Inference

[https://github.com/xizaoqu/worldmem#inference](https://github.com/xizaoqu/worldmem#inference)

To run inference:

```
sh infer.sh
```

You can either **load the diffusion model and VAE separately**:

```
+diffusion_model_path=zeqixiao/worldmem_checkpoints/diffusion_only.ckpt \
+vae_path=zeqixiao/worldmem_checkpoints/vae_only.ckpt \
+customized_load=true \
+seperate_load=true \
```

Or **load a combined checkpoint**:

```
+load=your_model_path \
+customized_load=true \
+seperate_load=false \
```

### Evaluation

[https://github.com/xizaoqu/worldmem#evaluation](https://github.com/xizaoqu/worldmem#evaluation)

To run evaluation:

```
sh evaluate.sh
```

This script reproduces the results in Table 1 (beyond context window). It will generate PSNR and Lpips. Evaluating 1 case on 1 A100 GPU takes approximately 6 minutes. You can adjust `experiment.test.limit_batch` to specify the number of cases to evaluate.

Visual results will be saved by default to a timestamped directory (e.g., `outputs/2025-11-30/00-02-42`).

To calculate the FID score, run:

```
python calculate_fid.py --videos_dir <path_to_videos>
```

For example:

```
python calculate_fid.py --videos_dir outputs/2025-11-30/00-02-42/videos/test_vis
```

**Expected Results:**

| Metric | Value |
|---|---|
| PSNR | 24.01 |
| LPIPS | 0.1667 |
| FID | 15.13 |

*Note: FID is computed over 5000 frames.*

---

## Dataset

[https://github.com/xizaoqu/worldmem#dataset](https://github.com/xizaoqu/worldmem#dataset)

Download the Minecraft dataset from [Hugging Face](https://huggingface.co/datasets/zeqixiao/worldmem_minecraft_dataset)

Place the dataset in the following directory structure:

```
data/
└── minecraft/
    ├── training/
    └── validation/
    └── test/
```

## Data Generation

[https://github.com/xizaoqu/worldmem#data-generation](https://github.com/xizaoqu/worldmem#data-generation)

After setting up the environment as described in [MineDojo's GitHub repository](https://github.com/MineDojo/MineDojo), you can generate data using the following command:

```
xvfb-run -a python data_generator.py -o data/test -z 4 --env_type plains
```

**Parameters:**

- `-o`: Output directory for generated data
- `-z`: Number of parallel workers
- `--env_type`: Environment type (e.g., `plains`)

## TODO

[https://github.com/xizaoqu/worldmem#todo](https://github.com/xizaoqu/worldmem#todo)

-  Release inference models and weights;
-  Release training pipeline on Minecraft;
-  Release training data on Minecraft;
-  Release evaluation scripts and data generator.

## 🔗 Citation

[https://github.com/xizaoqu/worldmem#-citation](https://github.com/xizaoqu/worldmem#-citation)

If you find our work helpful, please cite:

```
@inproceedings{xiaoworldmem,
  title={WorldMem: Long-term Consistent World Simulation with Memory},
  author={Xiao, Zeqi and Yushi, LAN and Zhou, Yifan and Ouyang, Wenqi and Yang, Shuai and Zeng, Yanhong and Pan, Xingang},
  booktitle={The Thirty-ninth Annual Conference on Neural Information Processing Systems}
}
```

## 👏 Acknowledgements

[https://github.com/xizaoqu/worldmem#-acknowledgements](https://github.com/xizaoqu/worldmem#-acknowledgements)

- [Diffusion Forcing](https://github.com/buoyancy99/diffusion-forcing): Diffusion Forcing provides flexible training and inference strategies for our methods.
- [Minedojo](https://github.com/MineDojo/MineDojo): We collect our Minecraft dataset from Minedojo.
- [Open-oasis](https://github.com/etched-ai/open-oasis): Our model architecture is based on Open-oasis. We also use pretrained VAE and DiT weight from it.

## About

         [NeurIPS 2025] WorldMem: Long-term Consistent World Simulation with Memory       

### Resources

[Readme](https://github.com/xizaoqu/worldmem#readme-ov-file)

### License

[View license](https://github.com/xizaoqu/worldmem#License-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/xizaoqu/WorldMem/activity)

### Stars

[359
        stars](https://github.com/xizaoqu/WorldMem/stargazers)

### Watchers

[4
        watching](https://github.com/xizaoqu/WorldMem/watchers)
## gBrain Temporal Metadata

- content_timestamp: 2025-11-30
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-11
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

