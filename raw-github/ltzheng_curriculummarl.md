---
repo: ltzheng/curriculummarl
url: https://github.com/ltzheng/curriculummarl
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - ltzheng/CurriculumMARL: Code of "Towards Skilled Population Curriculum for MARL" + Implementation of Curriculum MARL algorithms based on Ray · GitHub

**Source**: https://github.com/ltzheng/curriculummarl

---

[Skip to content](https://github.com/ltzheng/curriculummarl#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ltzheng](https://github.com/ltzheng)

/
**[CurriculumMARL](https://github.com/ltzheng/CurriculumMARL)**

Public

- [Notifications](https://github.com/login?return_to=%2Fltzheng%2FCurriculumMARL)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fltzheng%2FCurriculumMARL)
- 
[Star
          13](https://github.com/login?return_to=%2Fltzheng%2FCurriculumMARL)

[https://github.com/ltzheng/CurriculumMARL](https://github.com/ltzheng/CurriculumMARL)

[Branches](https://github.com/ltzheng/CurriculumMARL/branches)[Tags](https://github.com/ltzheng/CurriculumMARL/tags)

[https://github.com/ltzheng/CurriculumMARL/branches](https://github.com/ltzheng/CurriculumMARL/branches)[https://github.com/ltzheng/CurriculumMARL/tags](https://github.com/ltzheng/CurriculumMARL/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| algorithms | algorithms |  |  |
| configs | configs |  |  |
| env | env |  |  |
| models | models |  |  |
| scripts | scripts |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| dockerfile_requirements.txt | dockerfile_requirements.txt |  |  |
| requirements.txt | requirements.txt |  |  |
| run_experiments.sh | run_experiments.sh |  |  |
| train.py | train.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# CurriculumMARL: Implementation of Curriculum MARL algorithms

[https://github.com/ltzheng/curriculummarl#curriculummarl-implementation-of-curriculum-marl-algorithms](https://github.com/ltzheng/curriculummarl#curriculummarl-implementation-of-curriculum-marl-algorithms)

This is the code for [Towards Skilled Population Curriculum for Multi-Agent Reinforcement Learning](https://arxiv.org/pdf/2302.03429.pdf). We also provide well-organized implementations of curriculum MARL algorithms based on Ray 2.0:

| Task Generator | Paper |
|---|---|
| SPC | Towards Skilled Population Curriculum for Multi-Agent Reinforcement Learning |
| VACL | Variational Automatic Curriculum Learning for Sparse-Reward Cooperative Multi-Agent Problems |
| ALP-GMM | Absolute Learning Progress and Gaussian Mixture Models for Automatic Curriculum Learning |
| Uniform | / |
| Non-curriculum (IPPO) | / |

## How to Start

[https://github.com/ltzheng/curriculummarl#how-to-start](https://github.com/ltzheng/curriculummarl#how-to-start)

### Docker

[https://github.com/ltzheng/curriculummarl#docker](https://github.com/ltzheng/curriculummarl#docker)

Docker is recommended.

To install:

```
docker build --build-arg USER_UID=$(id -u) --build-arg USER_GID=$(id -g) -t spc -f Dockerfile .
```

To run experiments with detached mode:

```
./run_experiments.sh
```

If you want to run in interactive mode, change the `-d` parameter to `-it`.

Configurations can be found in the `configs/` directory.

### Conda

[https://github.com/ltzheng/curriculummarl#conda](https://github.com/ltzheng/curriculummarl#conda)

```
sudo apt-get install git cmake build-essential libgl1-mesa-dev libsdl2-dev \
libsdl2-image-dev libsdl2-ttf-dev libsdl2-gfx-dev libboost-all-dev \
libdirectfb-dev libst-dev mesa-utils xvfb x11vnc python3-pip

conda create -n spc python=3.8
conda activate spc
conda install -c anaconda libffi
python -m pip install ray[rllib]==2.0.1
python -m pip install -r requirements.txt
python -m pip install torch==1.9.1+cu111 torchvision==0.10.1+cu111 torchaudio==0.9.1 -f https://download.pytorch.org/whl/torch_stable.html
```

Training Examples:

```
python train.py -f configs/football/ppo/corner.yaml
```

## Cite Our Paper

[https://github.com/ltzheng/curriculummarl#cite-our-paper](https://github.com/ltzheng/curriculummarl#cite-our-paper)

Please cite our paper if you've found this repository useful:

```
@article{wang2023towards,
  title={Towards Skilled Population Curriculum for Multi-Agent Reinforcement Learning},
  author={Wang, Rundong and Zheng, Longtao and Qiu, Wei and He, Bowei and An, Bo and Rabinovich, Zinovi and Hu, Yujing and Chen, Yingfeng and Lv, Tangjie and Fan, Changjie},
  journal={arXiv preprint arXiv:2302.03429},
  year={2023}
}
```

## About

         Code of "Towards Skilled Population Curriculum for MARL" + Implementation of Curriculum MARL algorithms based on Ray       

### Resources

[Readme](https://github.com/ltzheng/curriculummarl#readme-ov-file)

### License

[MIT license](https://github.com/ltzheng/curriculummarl#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ltzheng/CurriculumMARL/activity)

### Stars

[13
        stars](https://github.com/ltzheng/CurriculumMARL/stargazers)

### Watchers

[2
        watching](https://github.com/ltzheng/CurriculumMARL/watchers)

### Forks

[0
        forks](https://github.com/ltzheng/CurriculumMARL/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fltzheng%2FCurriculumMARL&report=ltzheng+%28user%29)

## [Releases](https://github.com/ltzheng/CurriculumMARL/releases)

No releases published

## [Packages
      0](https://github.com/users/ltzheng/packages?repo_name=CurriculumMARL)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ltzheng/CurriculumMARL/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          95.1%](https://github.com/ltzheng/CurriculumMARL/search?l=python)
- [Shell
          3.2%](https://github.com/ltzheng/CurriculumMARL/search?l=shell)
- [Dockerfile
          1.7%](https://github.com/ltzheng/CurriculumMARL/search?l=dockerfile)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2023
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2023-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

