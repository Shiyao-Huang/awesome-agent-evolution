---
repo: opendilab/awesome-exploration-rl
url: https://github.com/opendilab/awesome-exploration-rl
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - opendilab/awesome-exploration-rl: A curated list of awesome exploration RL resources (continually updated) · GitHub

**Source**: https://github.com/opendilab/awesome-exploration-rl

---

[Skip to content](https://github.com/opendilab/awesome-exploration-rl#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[opendilab](https://github.com/opendilab)

/
**[awesome-exploration-rl](https://github.com/opendilab/awesome-exploration-rl)**

Public

- [Notifications](https://github.com/login?return_to=%2Fopendilab%2Fawesome-exploration-rl)You must be signed in to change notification settings
- [Fork
    26](https://github.com/login?return_to=%2Fopendilab%2Fawesome-exploration-rl)
- 
[Star
          689](https://github.com/login?return_to=%2Fopendilab%2Fawesome-exploration-rl)

[https://github.com/opendilab/awesome-exploration-rl](https://github.com/opendilab/awesome-exploration-rl)

[Branches](https://github.com/opendilab/awesome-exploration-rl/branches)[Tags](https://github.com/opendilab/awesome-exploration-rl/tags)

[https://github.com/opendilab/awesome-exploration-rl/branches](https://github.com/opendilab/awesome-exploration-rl/branches)[https://github.com/opendilab/awesome-exploration-rl/tags](https://github.com/opendilab/awesome-exploration-rl/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History53 Commits53 Commits |  |  |  |
| assets | assets |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome Exploration Methods in Reinforcement Learning

[https://github.com/opendilab/awesome-exploration-rl#awesome-exploration-methods-in-reinforcement-learning](https://github.com/opendilab/awesome-exploration-rl#awesome-exploration-methods-in-reinforcement-learning)

`Updated on 2025.12.02`

- 

Here is a collection of research papers for **Exploration methods in Reinforcement Learning (ERL)**. The repository will be continuously updated to track the frontier of ERL. Welcome to follow and star!

- 

The balance of **exploration and exploitation** is one of the most central problems in reinforcement learning. In order to give readers an intuitive feeling for exploration, we provide a visualization of a typical hard exploration environment in [MiniGrid](https://github.com/Farama-Foundation/Minigrid) below. In this task, a series of actions to achieve the goal often require dozens or even hundreds of steps, in which the agent needs to fully explore different state-action spaces in order to learn the skills required to achieve the goal.

[https://github.com/opendilab/awesome-exploration-rl/blob/main/assets/minigrid_hard_exploration.png](https://github.com/opendilab/awesome-exploration-rl/blob/main/assets/minigrid_hard_exploration.png)
*A typical hard-exploration environment: MiniGrid-ObstructedMaze-Full-v0.*

## Table of Contents

[https://github.com/opendilab/awesome-exploration-rl#table-of-contents](https://github.com/opendilab/awesome-exploration-rl#table-of-contents)

- [Awesome Exploration Methods in Reinforcement Learning](https://github.com/opendilab/awesome-exploration-rl#awesome-exploration-methods-in-reinforcement-learning)
  - [Table of Contents](https://github.com/opendilab/awesome-exploration-rl#table-of-contents)
  - [A Taxonomy of Exploration RL Methods](https://github.com/opendilab/awesome-exploration-rl#a-taxonomy-of-exploration-rl-methods)
  - [Papers](https://github.com/opendilab/awesome-exploration-rl#papers)
    - [NeurIPS 2025](https://github.com/opendilab/awesome-exploration-rl#neurips-2025)
    - [ICML 2025](https://github.com/opendilab/awesome-exploration-rl#icml-2025)
    - [ICLR 2025](https://github.com/opendilab/awesome-exploration-rl#iclr-2025)
    - [NeurIPS 2024](https://github.com/opendilab/awesome-exploration-rl#neurips-2024)
    - [ICML 2024](https://github.com/opendilab/awesome-exploration-rl#icml-2024)
    - [ICLR 2024](https://github.com/opendilab/awesome-exploration-rl#iclr-2024)
    - [NeurIPS 2023](https://github.com/opendilab/awesome-exploration-rl#neurips-2023)
    - [ICML 2023](https://github.com/opendilab/awesome-exploration-rl#icml-2023)
    - [ICLR 2023](https://github.com/opendilab/awesome-exploration-rl#iclr-2023)
    - [NeurIPS 2022](https://github.com/opendilab/awesome-exploration-rl#neurips-2022)
    - [ICML 2022](https://github.com/opendilab/awesome-exploration-rl#icml-2022)
    - [ICLR 2022](https://github.com/opendilab/awesome-exploration-rl#iclr-2022)
    - [NeurIPS 2021](https://github.com/opendilab/awesome-exploration-rl#neurips-2021)
    - [Classic Exploration RL Papers](https://github.com/opendilab/awesome-exploration-rl#classic-exploration-rl-papers)

  - [Contributing](https://github.com/opendilab/awesome-exploration-rl#contributing)
  - [License](https://github.com/opendilab/awesome-exploration-rl#license)

## A Taxonomy of Exploration RL Methods

[https://github.com/opendilab/awesome-exploration-rl#a-taxonomy-of-exploration-rl-methods](https://github.com/opendilab/awesome-exploration-rl#a-taxonomy-of-exploration-rl-methods)
(Click to Collapse)

In general, we can divide reinforcement learning process into two phases: *collect* phase and *train* phase. In the *collect* phase, the agent chooses actions based on the current policy and then interacts with the environment to collect useful experience. In the *train* phase, the agent uses the collected experience to update the current policy to obtain a better performing policy.

According to the phase the exploration component is explicitly applied, we simply divide the methods in `Exploration RL` into two main categories: `Augmented Collecting Strategy`, `Augmented Training Strategy`:

- 

`Augmented Collecting Strategy` represents a variety of different exploration strategies commonly used in the *collect* phase, which we further divide into *four* categories:

  - `Action Selection Perturbation`
  - `Action Selection Guidance`
  - `State Selection Guidance`
  - `Parameter Space Perturbation`

- 

`Augmented Training Strategy` represents a variety of different exploration strategies commonly used in the *train* phase, which we further divide into *seven* categories:

  - `Count Based`
  - `Prediction Based`
  - `Information Theory Based`
  - `Entropy Augmented`
  - `Bayesian Posterior Based`
  - `Goal Based`
  - `(Expert) Demo Data`

> Note that there may be overlap between these categories, and an algorithm may belong to several of them. For other detailed survey on exploration methods in RL, you can refer to [Tianpei Yang et al](https://arxiv.org/abs/2109.06668) and [Susan Amin et al](https://arxiv.org/abs/2109.00157).

[https://github.com/opendilab/awesome-exploration-rl/blob/main/assets/erl_taxonomy.png](https://github.com/opendilab/awesome-exploration-rl/blob/main/assets/erl_taxonomy.png)
**A non-exhaustive, but useful taxonomy of methods in Exploration RL.     We provide some example methods for each of the different categories, shown in blue area above. **

Here are the links to the papers that appeared in the taxonomy:

> [1] [Go-Explore](https://www.nature.com/articles/s41586-020-03157-9): Adrien Ecoffet et al, 2021
>  [2] [NoisyNet](https://openreview.net/pdf?id=rywHCPkAW), Meire Fortunato et al, 2018
>  [3] [DQN-PixelCNN](https://arxiv.org/abs/1606.01868): Marc G. Bellemare et al, 2016
>  [4] [#Exploration](http://papers.neurips.cc/paper/6868-exploration-a-study-of-count-based-exploration-for-deep-reinforcement-learning.pdf) Haoran Tang et al, 2017
>  [5] [EX2](https://papers.nips.cc/paper/2017/file/1baff70e2669e8376347efd3a874a341-Paper.pdf): Justin Fu et al, 2017
>  [6] [ICM](https://arxiv.org/abs/1705.05363): Deepak Pathak et al, 2018
>  [7] [RND](https://arxiv.org/abs/1810.12894): Yuri Burda et al, 2018
>  [8] [NGU](https://arxiv.org/abs/2002.06038): Adrià Puigdomènech Badia et al, 2020
>  [9] [Agent57](https://arxiv.org/abs/2003.13350): Adrià Puigdomènech Badia et al, 2020
>  [10] [VIME](https://arxiv.org/abs/1605.09674): Rein Houthooft et al, 2016
>  [11] [EMI](https://openreview.net/forum?id=H1exf64KwH): Wang et al, 2019
>  [12] [DIYAN](https://arxiv.org/abs/1802.06070): Benjamin Eysenbach et al, 2019
>  [13] [SAC](https://arxiv.org/abs/1801.01290): Tuomas Haarnoja et al, 2018
>  [14] [BootstrappedDQN](https://arxiv.org/abs/1602.04621): Ian Osband et al, 2016
>  [15] [PSRL](https://arxiv.org/pdf/1306.0940.pdf): Ian Osband et al, 2013
>  [16] [HER](https://arxiv.org/pdf/1707.01495.pdf) Marcin Andrychowicz et al, 2017
>  [17] [DQfD](https://arxiv.org/abs/1704.03732): Todd Hester et al, 2018
>  [18] [R2D3](https://arxiv.org/abs/1909.01387): Caglar Gulcehre et al, 2019

## Papers

[https://github.com/opendilab/awesome-exploration-rl#papers](https://github.com/opendilab/awesome-exploration-rl#papers)

```
format:
- [title](paper link) (presentation type, openreview score [if the score is public])
  - author1, author2, author3, ...
  - Key: key problems and insights
  - ExpEnv: experiment environments
```

### NeurIPS 2025

[https://github.com/opendilab/awesome-exploration-rl#neurips-2025](https://github.com/opendilab/awesome-exploration-rl#neurips-2025)
(Click to Collapse)
- 

[State Entropy Regularization for Robust Reinforcement Learning](https://openreview.net/forum?id=rtG7n93Ru8)

  - Yonatan Ashlag, Uri Koren, Mirco Mutti, Esther Derman, Pierre-Luc Bacon, Shie Mannor
  - Key: Robust Reinforcement Learning, Risk-Averse Reinforcement Learning, Regularized Reinforcement Learning
  - ExpEnv: MiniGrid, MuJoCo

- 

[Geometry Meets Incentives: Sample-Efficient Incentivized Exploration with Linear Contexts](https://openreview.net/forum?id=nwlX15Wnr9)

  - Benjamin Schiffer, Mark Sellke
  - Key: Multi-armed bandits, Bayesian Incentive Compatible, Exploration
  - ExpEnv: Multi-Armed Bandit

- 

[LLM-Explorer: A Plug-in Reinforcement Learning Policy Exploration Enhancement Driven by Large Language Models](https://openreview.net/forum?id=VA5P0rUZPx)

  - Qianyue Hao, Yiwen Song, Qingmin Liao, Jian Yuan, Yong Li
  - Key: Reinforcement learning, large language model, policy exploration
  - ExpEnv: Atari, MuJoCo

- 

[Exploration via Feature Perturbation in Contextual Bandits](https://openreview.net/forum?id=gAddPMjmUc)

  - Seouh-won Yi, Min-hwan Oh
  - Key:  Generalized Linear Bandits, Contextual Bandits, Thompson Sampling, Feature Perturbation
  - ExpEnv: Synthetic Data, UCI Datasets, MNIST

- 

[REINFORCE Converges to Optimal Policies with Any Learning Rate](https://openreview.net/forum?id=YzriuQGaNX)

  - Samuel McLaughlin Robertson, Thang D. Chu, Bo Dai, Dale Schuurmans, Csaba Szepesvari, Jincheng Mei
  - Key: Reinforcement learning, Policy gradient, Convergence, Bandits
  - ExpEnv: Multi-armed Bandits, ChainMDP, DeepSea, CartPole

- 

[Asymmetric REINFORCE for off-Policy Reinforcement Learning: Balancing positive and negative rewards](https://openreview.net/forum?id=Ql3sENn0mi)

  - Charles Arnal, Gaëtan Narozniak, Vivien Cabannes, Yunhao Tang, Julia Kempe, Remi Munos
  - Key: reinforcement learning, off-policy RL, LLM finetuning, bandits
  - ExpEnv: Stochastic Bandits, MATH dataset

- 

[Off-policy Reinforcement Learning with Model-based Exploration Augmentation](http://openreview.net/forum?id=JGkZgEEjiM)

  - Likun Wang, Xiangteng Zhang, Yinuo Wang, Guojian Zhan, Wenxuan Wang, Haoyu Gao, Jingliang Duan, Shengbo Eben Li
  - Key: Model-based reinforcement learning, Model-based Exploration, Generative model, World model
  - ExpEnv: OpenAI Gym, DMC

- 

[Cognitive Predictive Processing: A Human-inspired Framework for Adaptive Exploration in Open-World Reinforcement Learning](https://openreview.net/forum?id=2fFRIIwau6)

  - boheng liu, Ziyu Li, Chenghua Duan, YuTian Liu, Zhuo Wang, Xiuxing Li, Qing Li, Xia Wu
  - Key: Open-World Reinforcement Learning, Human-inspired Artificial Intelligence, Cognitive Architectures
  - ExpEnv:  MineDojo, Minecraft

- 

[Novel Exploration via Orthogonality](https://openreview.net/forum?id=yJS1eZSNUv)

  - Andreas Theophilou, Özgür Şimşek
  - Key: Laplacian, Novelty, Reinforcement Learning, Exploration, Eigenvectors, Spectral Methods
  - ExpEnv: GridWorld

- 

[Infrequent Exploration in Linear Bandits](https://openreview.net/forum?id=STLolzI6q1)

  - Harin Lee, Min-hwan Oh
  - Key: linear bandits, greedy selection
  - ExpEnv: Multi-Armed Bandit

- 

[Deployment Efficient Reward-Free Exploration with Linear Function Approximation](https://openreview.net/forum?id=ByzRO25Bjr)

  - Zihan Zhang, Yuxin Chen, Jason D. Lee, Simon Shaolei Du, Lin Yang, Ruosong Wang
  - Key:  Reinforcement learning, linear MDP, deployment efficiency
  - ExpEnv: None

- 

[Wonder Wins Ways: Curiosity-Driven Exploration through Multi-Agent Contextual Calibration](https://openreview.net/forum?id=1fOGTbO5Sx)

  - Yiyuan Pan, Zhe Liu, Hesheng Wang
  - Key:   Multi-Agent Reinforcement Learning, Intrinsic Reward, Artificial Curiosity
  - ExpEnv: VMAS, Meltingpot, SMACv2

- 

[Scalable Exploration via Ensemble++](https://openreview.net/forum?id=M226WElHp5)

  - Yingru Li, Jiawei Xu, Baoxiang Wang, Zhi-Quan Luo
  - Key:  Reinforcement Learning, Ensemble Sampling, Thompson Sampling, Exploration, Posterior Approximation, Scalable Computation
  - ExpEnv: linear bandits, quadratic bandits, neural bandits, GPT-based contextual bandits

- 

[Uncertainty-Guided Exploration for Efficient AlphaZero Training](https://openreview.net/forum?id=3q6lJTN45T)

  - Scott Cheng, Meng-Yu Tsai, Ding-Yong Hong, Mahmut Kandemir
  - Key:  AlphaZero, uncertainty, exploration
  - ExpEnv: Go

- 

[Exploration from a Primal-Dual Lens: Value-Incentivized Actor-Critic Methods for Sample-Efficient Online RL](https://openreview.net/forum?id=A5Y8Uh5Szl)

  - Tong Yang, Bo Dai, Lin Xiao, Yuejie Chi
  - Key:  exploration-exploitation trade-off, actor-critic, RL theory
  - ExpEnv: MuJoCo

- 

[Reinforcement Learning with Action Chunking](https://openreview.net/forum?id=XUks1Y96NR)

  - Qiyang Li, Zhiyuan Zhou, Sergey Levine
  - Key:  reinforcement learning, offline-to-online RL, exploration
  - ExpEnv: OGBench, robomimic

- 

[DISCOVER: Automated Curricula for Sparse-Reward Reinforcement Learning](https://openreview.net/forum?id=guZBnsKPsw)

  - Leander Diaz-Bone, Marco Bagatella, Jonas Hübotter, Andreas Krause
## gBrain Temporal Metadata

- content_timestamp: 2002
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

