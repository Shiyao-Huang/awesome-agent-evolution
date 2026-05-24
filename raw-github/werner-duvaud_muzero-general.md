---
repo: werner-duvaud/muzero-general
url: https://github.com/werner-duvaud/muzero-general
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - werner-duvaud/muzero-general: MuZero · GitHub

**Source**: https://github.com/werner-duvaud/muzero-general

---

[Skip to content](https://github.com/werner-duvaud/muzero-general#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[werner-duvaud](https://github.com/werner-duvaud)

/
**[muzero-general](https://github.com/werner-duvaud/muzero-general)**

Public

- [Notifications](https://github.com/login?return_to=%2Fwerner-duvaud%2Fmuzero-general)You must be signed in to change notification settings
- [Fork
    671](https://github.com/login?return_to=%2Fwerner-duvaud%2Fmuzero-general)
- 
[Star
          2.8k](https://github.com/login?return_to=%2Fwerner-duvaud%2Fmuzero-general)

[https://github.com/werner-duvaud/muzero-general](https://github.com/werner-duvaud/muzero-general)

[Branches](https://github.com/werner-duvaud/muzero-general/branches)[Tags](https://github.com/werner-duvaud/muzero-general/tags)

[https://github.com/werner-duvaud/muzero-general/branches](https://github.com/werner-duvaud/muzero-general/branches)[https://github.com/werner-duvaud/muzero-general/tags](https://github.com/werner-duvaud/muzero-general/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History132 Commits132 Commits |  |  |  |
| .github | .github |  |  |
| docs | docs |  |  |
| games | games |  |  |
| results | results |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| diagnose_model.py | diagnose_model.py |  |  |
| models.py | models.py |  |  |
| muzero.py | muzero.py |  |  |
| notebook.ipynb | notebook.ipynb |  |  |
| replay_buffer.py | replay_buffer.py |  |  |
| requirements.lock | requirements.lock |  |  |
| requirements.txt | requirements.txt |  |  |
| self_play.py | self_play.py |  |  |
| shared_storage.py | shared_storage.py |  |  |
| trainer.py | trainer.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://camo.githubusercontent.com/1274dfc9f0fedc4e838a4f7d6f618394d75c2055c658cf8ec2b3cfb8b4d226e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c6174666f726d2d4c696e75782532302537432532304d616325323025374325323057696e646f777325323028736f6f6e292d393239323932](https://camo.githubusercontent.com/1274dfc9f0fedc4e838a4f7d6f618394d75c2055c658cf8ec2b3cfb8b4d226e4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c6174666f726d2d4c696e75782532302537432532304d616325323025374325323057696e646f777325323028736f6f6e292d393239323932)[https://camo.githubusercontent.com/8ffe4fefa966277dc0a9c0b5f77cdc8cb87bf52a4ecd69f24addce9165acd8c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d253345253344253230332e362d333036393938](https://camo.githubusercontent.com/8ffe4fefa966277dc0a9c0b5f77cdc8cb87bf52a4ecd69f24addce9165acd8c6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d253345253344253230332e362d333036393938)[https://camo.githubusercontent.com/a7fc24d99fabd868aaef9caadc4130129e03203cc29cfb080bc22abbf102cfd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646570656e64656e636965732d7570253230746f253230646174652d627269676874677265656e](https://camo.githubusercontent.com/a7fc24d99fabd868aaef9caadc4130129e03203cc29cfb080bc22abbf102cfd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646570656e64656e636965732d7570253230746f253230646174652d627269676874677265656e)[https://github.com/psf/black](https://github.com/psf/black)[https://camo.githubusercontent.com/3ef3a60905856fc0db0e8019fad3d2d1e8cc4691d54cc38e42205735dfa9db15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e63652d4d49542d677265656e](https://camo.githubusercontent.com/3ef3a60905856fc0db0e8019fad3d2d1e8cc4691d54cc38e42205735dfa9db15/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e63652d4d49542d677265656e)[https://discord.gg/GB2vwsF](https://discord.gg/GB2vwsF)

[https://github.com/werner-duvaud/muzero-general/workflows/CI%20testing/badge.svg](https://github.com/werner-duvaud/muzero-general/workflows/CI%20testing/badge.svg)

# MuZero General

[https://github.com/werner-duvaud/muzero-general#muzero-general](https://github.com/werner-duvaud/muzero-general#muzero-general)

A commented and [documented](https://github.com/werner-duvaud/muzero-general/wiki/MuZero-Documentation) implementation of MuZero based on the Google DeepMind [paper](https://arxiv.org/abs/1911.08265) (Schrittwieser et al., Nov 2019) and the associated [pseudocode](https://arxiv.org/src/1911.08265v2/anc/pseudocode.py). It is designed to be easily adaptable for every games or reinforcement learning environments (like [gym](https://github.com/openai/gym)). You only need to add a [game file](https://github.com/werner-duvaud/muzero-general/tree/master/games) with the hyperparameters and the game class. Please refer to the [documentation](https://github.com/werner-duvaud/muzero-general/wiki/MuZero-Documentation) and the [example](https://github.com/werner-duvaud/muzero-general/blob/master/games/cartpole.py). This implementation is primarily for educational purpose.
[Explanatory video of MuZero](https://youtu.be/We20YSAJZSE)

MuZero is a state of the art RL algorithm for board games (Chess, Go, ...) and Atari games. It is the successor to [AlphaZero](https://arxiv.org/abs/1712.01815) but without any knowledge of the environment underlying dynamics. MuZero learns a model of the environment and uses an internal representation that contains only the useful information for predicting the reward, value, policy and transitions. MuZero is also close to [Value prediction networks](https://arxiv.org/abs/1707.03497). See [How it works](https://github.com/werner-duvaud/muzero-general/wiki/How-MuZero-works).

## Features

[https://github.com/werner-duvaud/muzero-general#features](https://github.com/werner-duvaud/muzero-general#features)

-  Residual Network and Fully connected network in [PyTorch](https://github.com/pytorch/pytorch)
-  Multi-Threaded/Asynchronous/[Cluster](https://docs.ray.io/en/latest/cluster-index.html) with [Ray](https://github.com/ray-project/ray)
-  Multi GPU support for the training and the selfplay
-  TensorBoard real-time monitoring
-  Model weights automatically saved at checkpoints
-  Single and two player mode
-  Commented and [documented](https://github.com/werner-duvaud/muzero-general/wiki/MuZero-Documentation)
-  Easily adaptable for new games
- [Examples](https://github.com/werner-duvaud/muzero-general/blob/master/games/cartpole.py) of board games, Gym and Atari games (See [list of implemented games](https://github.com/werner-duvaud/muzero-general#games-already-implemented))
- [Pretrained weights](https://github.com/werner-duvaud/muzero-general/tree/master/results) available
-  Windows support (Experimental / Workaround: Use the [notebook](https://github.com/werner-duvaud/muzero-general/blob/master/notebook.ipynb) in [Google Colab](https://colab.research.google.com))

### Further improvements

[https://github.com/werner-duvaud/muzero-general#further-improvements](https://github.com/werner-duvaud/muzero-general#further-improvements)

Here is a list of features which could be interesting to add but which are not in MuZero's paper. We are open to contributions and other ideas.

- [Hyperparameter search](https://github.com/werner-duvaud/muzero-general/wiki/Hyperparameter-Optimization)
- [Continuous action space](https://github.com/werner-duvaud/muzero-general/tree/continuous)
- [Tool to understand the learned model](https://github.com/werner-duvaud/muzero-general/blob/master/diagnose_model.py)
-  Batch MCTS
-  Support of more than two player games

## Demo

[https://github.com/werner-duvaud/muzero-general#demo](https://github.com/werner-duvaud/muzero-general#demo)

All performances are tracked and displayed in real time in [TensorBoard](https://www.tensorflow.org/tensorboard) :

[https://github.com/werner-duvaud/muzero-general/blob/master/docs/cartpole-training-summary.png](https://github.com/werner-duvaud/muzero-general/blob/master/docs/cartpole-training-summary.png)

Testing Lunar Lander :

[https://github.com/werner-duvaud/muzero-general/blob/master/docs/lunarlander-training-preview.png](https://github.com/werner-duvaud/muzero-general/blob/master/docs/lunarlander-training-preview.png)

## Games already implemented

[https://github.com/werner-duvaud/muzero-general#games-already-implemented](https://github.com/werner-duvaud/muzero-general#games-already-implemented)

- Cartpole      (Tested with the fully connected network)
- Lunar Lander  (Tested in deterministic mode with the fully connected network)
- Gridworld     (Tested with the fully connected network)
- Tic-tac-toe   (Tested with the fully connected network and the residual network)
- Connect4      (Slightly tested with the residual network)
- Gomoku
- Twenty-One / Blackjack    (Tested with the residual network)
- Atari Breakout

Tests are done on Ubuntu with 16 GB RAM / Intel i7 / GTX 1050Ti Max-Q. We make sure to obtain a progression and a level which ensures that it has learned. But we do not systematically reach a human level. For certain environments, we notice a regression after a certain time. The proposed configurations are certainly not optimal and we do not focus for now on the optimization of hyperparameters. Any help is welcome.

## Code structure

[https://github.com/werner-duvaud/muzero-general#code-structure](https://github.com/werner-duvaud/muzero-general#code-structure)

[https://github.com/werner-duvaud/muzero-general/blob/master/docs/code-structure-werner-duvaud.png](https://github.com/werner-duvaud/muzero-general/blob/master/docs/code-structure-werner-duvaud.png)

Network summary:

[https://github.com/werner-duvaud/muzero-general/blob/master/docs/muzero-network-werner-duvaud.png](https://github.com/werner-duvaud/muzero-general/blob/master/docs/muzero-network-werner-duvaud.png)

## Getting started

[https://github.com/werner-duvaud/muzero-general#getting-started](https://github.com/werner-duvaud/muzero-general#getting-started)

### Installation

[https://github.com/werner-duvaud/muzero-general#installation](https://github.com/werner-duvaud/muzero-general#installation)

```
git clone https://github.com/werner-duvaud/muzero-general.git
cd muzero-general

pip install -r requirements.lock
```

### Run

[https://github.com/werner-duvaud/muzero-general#run](https://github.com/werner-duvaud/muzero-general#run)

```
python muzero.py
```

To visualize the training results, run in a new terminal:

```
tensorboard --logdir ./results
```

### Config

[https://github.com/werner-duvaud/muzero-general#config](https://github.com/werner-duvaud/muzero-general#config)

You can adapt the configurations of each game by editing the `MuZeroConfig` class of the respective file in the [games folder](https://github.com/werner-duvaud/muzero-general/tree/master/games).

## Related work

[https://github.com/werner-duvaud/muzero-general#related-work](https://github.com/werner-duvaud/muzero-general#related-work)

- [EfficientZero](https://arxiv.org/abs/2111.00210) (Weirui Ye, Shaohuai Liu, Thanard Kurutach, Pieter Abbeel, Yang Gao)
- [Sampled MuZero](https://arxiv.org/abs/2104.06303) (Thomas Hubert, Julian Schrittwieser, Ioannis Antonoglou, Mohammadamin Barekatain, Simon Schmitt, David Silver)

## Authors

[https://github.com/werner-duvaud/muzero-general#authors](https://github.com/werner-duvaud/muzero-general#authors)

- Werner Duvaud
- Aurèle Hainaut
- Paul Lenoir
- [Contributors](https://github.com/werner-duvaud/muzero-general/graphs/contributors)

Please use this bibtex if you want to cite this repository (master branch) in your publications:

```
@misc{muzero-general,
  author       = {Werner Duvaud, Aurèle Hainaut},
  title        = {MuZero General: Open Reimplementation of MuZero},
  year         = {2019},
  publisher    = {GitHub},
  journal      = {GitHub repository},
  howpublished = {\url{https://github.com/werner-duvaud/muzero-general}},
}
```

## Getting involved

[https://github.com/werner-duvaud/muzero-general#getting-involved](https://github.com/werner-duvaud/muzero-general#getting-involved)

- [GitHub Issues](https://github.com/werner-duvaud/muzero-general/issues): For reporting bugs.
- [Pull Requests](https://github.com/werner-duvaud/muzero-general/pulls): For submitting code contributions.
- [Discord server](https://discord.gg/GB2vwsF): For discussions about development or any general questions.

## About

         MuZero       

[github.com/werner-duvaud/muzero-general/wiki/MuZero-Documentation](https://github.com/werner-duvaud/muzero-general/wiki/MuZero-Documentation)

### Topics

[machine-learning](https://github.com/topics/machine-learning)[reinforcement-learning](https://github.com/topics/reinforcement-learning)[deep-learning](https://github.com/topics/deep-learning)[neural-network](https://github.com/topics/neural-network)[deep-reinforcement-learning](https://github.com/topics/deep-reinforcement-learning)[python3](https://github.com/topics/python3)[pytorch](https://github.com/topics/pytorch)[gym](https://github.com/topics/gym)[mcts](https://github.com/topics/mcts)[rl](https://github.com/topics/rl)[tensorboard](https://github.com/topics/tensorboard)[residual-network](https://github.com/topics/residual-network)[monte-carlo-tree-search](https://github.com/topics/monte-carlo-tree-search)[self-learning](https://github.com/topics/self-learning)[alphago](https://github.com/topics/alphago)[model-based-rl](https://github.com/topics/model-based-rl)[alphazero](https://github.com/topics/alphazero)[muzero](https://github.com/topics/muzero)[muzero-general](https://github.com/topics/muzero-general)

### Resources

[Readme](https://github.com/werner-duvaud/muzero-general#readme-ov-file)

### License

[MIT license](https://github.com/werner-duvaud/muzero-general#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/werner-duvaud/muzero-general/activity)

### Stars

[2.8k
        stars](https://github.com/werner-duvaud/muzero-general/stargazers)

### Watchers

[73
        watching](https://github.com/werner-duvaud/muzero-general/watchers)

### Forks

[671
        forks](https://github.com/werner-duvaud/muzero-general/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fwerner-duvaud%2Fmuzero-general&report=werner-duvaud+%28user%29)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/werner-duvaud/muzero-general/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/werner-duvaud/muzero-general/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2019
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

