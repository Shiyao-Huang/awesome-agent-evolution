---
repo: immanuelxiv/ppo-self-play
url: https://github.com/immanuelxiv/ppo-self-play
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - ImmanuelXIV/ppo-self-play: Reinforcement Learning | Multi-Agent RL | Self-Play | Proximal Policy Optimization Algorithm (PPO) agent | Unity Tennis environment · GitHub

**Source**: https://github.com/immanuelxiv/ppo-self-play

---

[Skip to content](https://github.com/immanuelxiv/ppo-self-play#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ImmanuelXIV](https://github.com/ImmanuelXIV)

/
**[ppo-self-play](https://github.com/ImmanuelXIV/ppo-self-play)**

Public

- [Notifications](https://github.com/login?return_to=%2FImmanuelXIV%2Fppo-self-play)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2FImmanuelXIV%2Fppo-self-play)
- 
[Star
          20](https://github.com/login?return_to=%2FImmanuelXIV%2Fppo-self-play)

[https://github.com/ImmanuelXIV/ppo-self-play](https://github.com/ImmanuelXIV/ppo-self-play)

[Branches](https://github.com/ImmanuelXIV/ppo-self-play/branches)[Tags](https://github.com/ImmanuelXIV/ppo-self-play/tags)

[https://github.com/ImmanuelXIV/ppo-self-play/branches](https://github.com/ImmanuelXIV/ppo-self-play/branches)[https://github.com/ImmanuelXIV/ppo-self-play/tags](https://github.com/ImmanuelXIV/ppo-self-play/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| checkpoints | checkpoints |  |  |
| imgs | imgs |  |  |
| python | python |  |  |
| report | report |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| Tennis.ipynb | Tennis.ipynb |  |  |
| policy.py | policy.py |  |  |
| ppo_agent.py | ppo_agent.py |  |  |
| train.py | train.py |  |  |
| unity-environment.log | unity-environment.log |  |  |
| watch_trained_agent.py | watch_trained_agent.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Reinforcement Learning | Multi-Agent RL | Self-Play | Proximal Policy Optimization Algorithm (PPO) agent | Unity Tennis environment

[https://github.com/immanuelxiv/ppo-self-play#reinforcement-learning--multi-agent-rl--self-play--proximal-policy-optimization-algorithm-ppo-agent--unity-tennis-environment](https://github.com/immanuelxiv/ppo-self-play#reinforcement-learning--multi-agent-rl--self-play--proximal-policy-optimization-algorithm-ppo-agent--unity-tennis-environment)

---

This repository, shows how to implement and train an actor-critic [PPO](https://arxiv.org/abs/1707.06347) (Proximal Policy Optimization) Reinforcement Learning agent to play Tennis against itself. Have a look at a trained DDPG agent underneath.

[https://github.com/ImmanuelXIV/ppo-self-play/blob/master/imgs/tennis-self-play.gif%5C](https://github.com/ImmanuelXIV/ppo-self-play/blob/master/imgs/tennis-self-play.gif%5C)

Checkout similar environments [here](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Learning-Environment-Examples.md).

In this README.md you'll see how to install dependencies and run the code on your own machine. To understand the learning algorithm PPO checkout the `Tennis.ipynb` notebook.

**Why?** Reinforcement Learning (RL) is one of the most fascinating areas of Machine Learning! It is quite intuitive, because we use positive and negative feedback to learn tasks via interaction with the environment. The PPO algorithm, by Schulman et al. 2017, has been used at OpenAi to solve complex real-world tasks such as manipulating physical objects with a robot hand. Check out this [Learning Dexterity: Uncut](https://www.youtube.com/watch?time_continue=1&v=DKe8FumoD4E&feature=emb_logo) video, or the ones about simulated humanoid robots from their website [here](https://openai.com/blog/openai-baselines-ppo/) to get an idea!

**What?** In this Tennis environment, two agents control rackets to bounce a ball over a net. If an agent hits the ball over the net, it receives a reward of +0.1. If an agent lets a ball hit the ground or hits the ball out of bounds, it receives a reward of -0.01. Thus, the goal of each agent is to keep the ball in play.

**How?** Checkout the `Tennis.ipynb` notebook to learn more about the PPO algorithm, and check the implementations in `ppo_agent.py`, `policy.py`. If you want to train an agent, or see a trained agent play tennis then `train.py`, and `watch_trained_agent.py` are the go-to files.

## State Space

[https://github.com/immanuelxiv/ppo-self-play#state-space](https://github.com/immanuelxiv/ppo-self-play#state-space)

The observation space consists of 8 variables corresponding to the position and velocity of the ball and racket. Each agent receives its own, local observation. Two continuous actions are available, corresponding to movement toward (or away from) the net, and jumping.

```
# Number of agents: 2
# Size of each action: 2
# There are 2 agents. Each observes a state with length: 24
# The state for the first agent e.g. looks like: 
[ 0.          0.          0.          0.          0.          0.
  0.          0.          0.          0.          0.          0.
  0.          0.          0.          0.         -6.65278625 -1.5
 -0.          0.          6.83172083  6.         -0.          0.]

 # The actions of the first agent are in the range of [-1 1], such as:
 [ 0.56803014  0.51175739]
```

## Solving the Environment

[https://github.com/immanuelxiv/ppo-self-play#solving-the-environment](https://github.com/immanuelxiv/ppo-self-play#solving-the-environment)

The task is episodic, and in order to solve the environment, the agents must get an average score of +0.5 (over 100 consecutive episodes, after taking the maximum over both agents). Specifically,

- After each episode, we add up the rewards that each agent received (without discounting), to get a score for each agent. This yields 2 (potentially different) scores. We then take the maximum of these 2 scores.
- This yields a single score for each episode.

The environment is considered solved, when the average (over 100 episodes) of those scores is at least +0.5.

## Dependencies

[https://github.com/immanuelxiv/ppo-self-play#dependencies](https://github.com/immanuelxiv/ppo-self-play#dependencies)

To set up your python environment and run the code in this repository, follow the instructions below.

1. 

Create and activate a new conda environment with Python 3.6. If you don't have *Conda*, click here for [Conda installation instructions](https://docs.conda.io/projects/conda/en/latest/user-guide/install/).

  - **Linux** or **Mac**:

```
conda create --name ppo python=3.6
source activate ppo
```

  - **Windows**:

```
conda create --name ppo python=3.6 
activate ppo
```

2. 

Clone this repository, and navigate to the `ppo-self-play/python/` folder. Then, install several dependencies related to the Unity environment. Check the dir for details.

```
git clone https://github.com/ImmanuelXIV/ppo-self-play.git
cd ppo-self-play/python
pip install .
```

1. Download the Tennis environment from one of the links below. You only need to select the environment that matches your operating system. Place it in the `ppo-self-play/` dir, decompress it and change the `file_name` in the `train.py`, and the `Tennis.ipynb` (Section 5) accordingly.

Downloads

- Mac OSX: [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis.app.zip)
- Linux: [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Linux.zip)
- Windows (32-bit): [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Windows_x86.zip)
- Windows (64-bit): [click here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Windows_x86_64.zip)

Paths

- **Mac**: `"path/to/Tennis.app"`
- **Windows** (x86): `"path/to/Tennis_Windows_x86/Tennis.exe"`
- **Windows** (x86_64): `"path/to/Tennis_Windows_x86_64/Tennis.exe"`
- **Linux** (x86): `"path/to/Tennis_Linux/Tennis.x86"`
- **Linux** (x86_64): `"path/to/Tennis_Linux/Tennis.x86_64"`
- **Linux** (x86, headless): `"path/to/Tennis_Linux_NoVis/Tennis.x86"`
- **Linux** (x86_64, headless): `"path/to/Tennis_Linux_NoVis/Tennis.x86_64"`

For instance, if you are using a Mac then line 13 in `train.py` file, and in Section 5 in the `Tennis.ipynb` the path should appear as follows:

```
env = UnityEnvironment(file_name="Reacher.app")
```

(For Windows users) Check out [this link](https://support.microsoft.com/en-us/help/827218/how-to-determine-whether-a-computer-is-running-a-32-bit-version-or-64) if you need help with determining if your computer is running a 32-bit version or 64-bit version of the Windows operating system.

(For AWS) If you'd like to train the agent on AWS (and have not [enabled a virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md)), then please use this link [here](https://s3-us-west-1.amazonaws.com/udacity-drlnd/P3/Tennis/Tennis_Linux_NoVis.zip) to obtain the "headless" version of the environment. You will not be able to watch the agent without enabling a virtual screen, but you will be able to train the agent. (To watch the agent, you should follow the instructions to [enable a virtual screen](https://github.com/Unity-Technologies/ml-agents/blob/master/docs/Training-on-Amazon-Web-Service.md), and then download the environment for the Linux operating system above.)

1. Create an [IPython kernel](http://ipython.readthedocs.io/en/stable/install/kernel_install.html) for the `ppo` environment.

```
python -m ipykernel install --user --name ppo --display-name "ppo"
```

1. Run the following code and follow the instructions in the notebook. The notebook has more explanations, e.g. about the learning algorithm, than the `train.py` file. However, the code is basically the same. If you haven't done so, activate the conda environment first (see 1.).

```
cd ppo-self-play/
jupyter notebook
```

If you want to train an agent without the notebook, then run:

```
cd ppo-self-play/
python train.py
```

1. Before running code in the `Tennis.ipynb` notebook, change the kernel to match the `ppo` environment by using the drop-down `Kernel` menu in the toolbar.

## About

         Reinforcement Learning | Multi-Agent RL | Self-Play | Proximal Policy Optimization Algorithm (PPO) agent | Unity Tennis environment       

### Resources

[Readme](https://github.com/immanuelxiv/ppo-self-play#readme-ov-file)

### License

[MIT license](https://github.com/immanuelxiv/ppo-self-play#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ImmanuelXIV/ppo-self-play/activity)

### Stars

[20
        stars](https://github.com/ImmanuelXIV/ppo-self-play/stargazers)

### Watchers

[2
        watching](https://github.com/ImmanuelXIV/ppo-self-play/watchers)

### Forks

[1
        fork](https://github.com/ImmanuelXIV/ppo-self-play/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FImmanuelXIV%2Fppo-self-play&report=ImmanuelXIV+%28user%29)

## [Releases](https://github.com/ImmanuelXIV/ppo-self-play/releases)

No releases published

## [Packages
      0](https://github.com/users/ImmanuelXIV/packages?repo_name=ppo-self-play)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ImmanuelXIV/ppo-self-play/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/ImmanuelXIV/ppo-self-play/search?l=python)

     You can’t perform that action at this time.
