---
repo: mfolsom/rlvr-world
url: https://github.com/mfolsom/rlvr-world
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - mfolsom/RLVR-World: Official repository for "RLVR-World: Training World Models with Reinforcement Learning" (NeurIPS 2025), https://arxiv.org/abs/2505.13934 · GitHub

**Source**: https://github.com/mfolsom/rlvr-world

---

[Skip to content](https://github.com/mfolsom/rlvr-world#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[mfolsom](https://github.com/mfolsom)

/
**[RLVR-World](https://github.com/mfolsom/RLVR-World)**

Public

       forked from [thuml/RLVR-World](https://github.com/thuml/RLVR-World)

- [Notifications](https://github.com/login?return_to=%2Fmfolsom%2FRLVR-World)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fmfolsom%2FRLVR-World)
- 
[Star
          0](https://github.com/login?return_to=%2Fmfolsom%2FRLVR-World)

[https://github.com/mfolsom/RLVR-World](https://github.com/mfolsom/RLVR-World)

[Branches](https://github.com/mfolsom/RLVR-World/branches)[Tags](https://github.com/mfolsom/RLVR-World/tags)

[https://github.com/mfolsom/RLVR-World/branches](https://github.com/mfolsom/RLVR-World/branches)[https://github.com/mfolsom/RLVR-World/tags](https://github.com/mfolsom/RLVR-World/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History56 Commits56 Commits |  |  |  |
| assets | assets |  |  |
| lang_wm | lang_wm |  |  |
| vid_wm | vid_wm |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🌏 RLVR-World: Training World Models with Reinforcement Learning (NeurIPS 2025)

[https://github.com/mfolsom/rlvr-world#-rlvr-world-training-world-models-with-reinforcement-learning-neurips-2025](https://github.com/mfolsom/rlvr-world#-rlvr-world-training-world-models-with-reinforcement-learning-neurips-2025)

[https://thuml.github.io/RLVR-World/](https://thuml.github.io/RLVR-World/)[https://arxiv.org/abs/2505.13934](https://arxiv.org/abs/2505.13934)[https://huggingface.co/collections/thuml/rlvr-world-682f331c75a904b8febc366a](https://huggingface.co/collections/thuml/rlvr-world-682f331c75a904b8febc366a)

This is the official code base for the paper [RLVR-World: Training World Models with Reinforcement Learning](https://arxiv.org/abs/2505.13934).

Give it a star 🌟 if you find our work useful!

## 🔥 News

[https://github.com/mfolsom/rlvr-world#-news](https://github.com/mfolsom/rlvr-world#-news)

- 🚩 **2025.10.28**: NeurIPS 2025 camera-ready version is released on [arXiv](https://arxiv.org/abs/2505.13934v2).
- 🚩 **2024.09.18**: RLVR-World has been accepted by NeurIPS 2025, congrats!
- 🚩 **2025.05.26**: We release all models and datasets.
- 🚩 **2025.05.21**: We open-source our training codes.
- 🚩 **2025.05.21**: Our paper is released on [arXiv](https://arxiv.org/abs/2505.13934).

## 📋 TL;DR

[https://github.com/mfolsom/rlvr-world#-tldr](https://github.com/mfolsom/rlvr-world#-tldr)

We pioneer training world models through RLVR:

- World models across various modalities (particularly, language and videos) are unified under a sequence modeling formulation;
- Task-specific prediction metrics serve as verifiable rewards directly optimized by RL.

[https://github.com/mfolsom/RLVR-World/blob/main/assets/concept.png](https://github.com/mfolsom/RLVR-World/blob/main/assets/concept.png)

## 🤗 Models and Datasets

[https://github.com/mfolsom/rlvr-world#-models-and-datasets](https://github.com/mfolsom/rlvr-world#-models-and-datasets)

At the moment, we provide the following models and datasets:

| Modality | Type | Domain | Name |
|---|---|---|---|
| Language | Dataset | Text game | bytesized32-world-model-cot |
| Language | World model | Text game | bytesized32-world-model-sft |
| Language | World model | Text game | bytesized32-world-model-rlvr-binary-reward |
| Language | World model | Text game | bytesized32-world-model-rlvr-task-specific-reward |
| Language | Dataset | Web navigation | webarena-world-model-cot |
| Language | World model | Web navigation | webarena-world-model-sft |
| Language | World model | Web navigation | webarena-world-model-rlvr |
| Video | Tokenizer | Robot manipulation | rt1-frame-tokenizer |
| Video | World model | Robot manipulation | rt1-world-model-single-step-base |
| Video | World model | Robot manipulation | rt1-world-model-single-step-rlvr |
| Video | Tokenizer | Robot manipulation | rt1-compressive-tokenizer |
| Video | World model | Robot manipulation | rt1-world-model-multi-step-base |
| Video | World model | Robot manipulation | rt1-world-model-multi-step-rlvr |

## 💬 Evaluating Language World Models

[https://github.com/mfolsom/rlvr-world#-evaluating-language-world-models](https://github.com/mfolsom/rlvr-world#-evaluating-language-world-models)

See [lang_wm](https://github.com/mfolsom/RLVR-World/blob/main/lang_wm):

- Text game state prediction
- Web page state prediction
- Application: Model predictive control for web agents

## 🎇 Evaluating Video World Models

[https://github.com/mfolsom/rlvr-world#-evaluating-video-world-models](https://github.com/mfolsom/rlvr-world#-evaluating-video-world-models)

See [vid_wm](https://github.com/mfolsom/RLVR-World/blob/main/vid_wm):

- Robot manipulation trajectory prediction
- Application: Real2sim policy evaluation

## 🎥 Showcases

[https://github.com/mfolsom/rlvr-world#-showcases](https://github.com/mfolsom/rlvr-world#-showcases)

[https://github.com/mfolsom/RLVR-World/blob/main/assets/showcase.png](https://github.com/mfolsom/RLVR-World/blob/main/assets/showcase.png)

## 🚀 Release Progress

[https://github.com/mfolsom/rlvr-world#-release-progress](https://github.com/mfolsom/rlvr-world#-release-progress)

-  Video world model with RLVR
-  Pre-trained & post-trained video world model weights
-  Real2sim policy evaluation with video world models
-  Text game SFT data
-  Web page SFT data
-  Language world model on text games with RLVR
-  Language world model on web pages with RLVR
-  Post-trained language world model weights
-  Web agents with language world models

## 📜 Citation

[https://github.com/mfolsom/rlvr-world#-citation](https://github.com/mfolsom/rlvr-world#-citation)

If you find this project useful, please cite our paper as:

```
@inproceedings{wu2025rlvr,
    title={RLVR-World: Training World Models with Reinforcement Learning}, 
    author={Jialong Wu and Shaofeng Yin and Ningya Feng and Mingsheng Long},
    booktitle={Advances in Neural Information Processing Systems},
    year={2025},
}
```

## 🤝 Contact

[https://github.com/mfolsom/rlvr-world#-contact](https://github.com/mfolsom/rlvr-world#-contact)

If you have any questions, please contact [wujialong0229@gmail.com](mailto:wujialong0229@gmail.com).

## 💡 Acknowledgement

[https://github.com/mfolsom/rlvr-world#-acknowledgement](https://github.com/mfolsom/rlvr-world#-acknowledgement)

We sincerely appreciate the following github repos for their valuable codebase we build upon:

- [https://github.com/volcengine/verl](https://github.com/volcengine/verl)
- [https://github.com/thuml/iVideoGPT](https://github.com/thuml/iVideoGPT)
- [https://github.com/kyle8581/WMA-Agents](https://github.com/kyle8581/WMA-Agents)
- [https://github.com/cognitiveailab/GPT-simulator](https://github.com/cognitiveailab/GPT-simulator)
- [https://github.com/web-arena-x/webarena](https://github.com/web-arena-x/webarena)
- [https://github.com/simpler-env/SimplerEnv](https://github.com/simpler-env/SimplerEnv)

## About

         Official repository for "RLVR-World: Training World Models with Reinforcement Learning" (NeurIPS 2025), [https://arxiv.org/abs/2505.13934](https://arxiv.org/abs/2505.13934)

[thuml.github.io/RLVR-World/](https://thuml.github.io/RLVR-World/)

### Resources

[Readme](https://github.com/mfolsom/rlvr-world#readme-ov-file)

### License

[MIT license](https://github.com/mfolsom/rlvr-world#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/mfolsom/RLVR-World/activity)

### Stars

[0
        stars](https://github.com/mfolsom/RLVR-World/stargazers)

### Watchers

[0
        watching](https://github.com/mfolsom/RLVR-World/watchers)

### Forks

[0
        forks](https://github.com/mfolsom/RLVR-World/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fmfolsom%2FRLVR-World&report=mfolsom+%28user%29)

## [Releases](https://github.com/mfolsom/RLVR-World/releases)

No releases published

## [Packages
      0](https://github.com/users/mfolsom/packages?repo_name=RLVR-World)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/mfolsom/RLVR-World/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- 

Python

81.6%

- 

Jupyter Notebook

12.2%

- 

Shell

5.9%

- 

Other

0.3%

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

