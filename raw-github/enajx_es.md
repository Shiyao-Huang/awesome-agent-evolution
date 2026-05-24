---
repo: enajx/es
url: https://github.com/enajx/es
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - enajx/ES: Evolution Strategy (ES) implementation of https://arxiv.org/abs/1703.03864 · GitHub

**Source**: https://github.com/enajx/es

---

[Skip to content](https://github.com/enajx/es#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[enajx](https://github.com/enajx)

/
**[ES](https://github.com/enajx/ES)**

Public

- [Notifications](https://github.com/login?return_to=%2Fenajx%2FES)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fenajx%2FES)
- 
[Star
          7](https://github.com/login?return_to=%2Fenajx%2FES)

[https://github.com/enajx/ES](https://github.com/enajx/ES)

[Branches](https://github.com/enajx/ES/branches)[Tags](https://github.com/enajx/ES/tags)

[https://github.com/enajx/ES/branches](https://github.com/enajx/ES/branches)[https://github.com/enajx/ES/tags](https://github.com/enajx/ES/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History21 Commits21 Commits |  |  |  |
| .gitignore | .gitignore |  |  |
| evaluate_static.py | evaluate_static.py |  |  |
| evolution_strategy_static.py | evolution_strategy_static.py |  |  |
| fitness_functions.py | fitness_functions.py |  |  |
| policies.py | policies.py |  |  |
| readme.md | readme.md |  |  |
| requirements.txt | requirements.txt |  |  |
| train_static.py | train_static.py |  |  |
| wrappers.py | wrappers.py |  |  |
| View all files |  |  |  |

## Repository files navigation

---

# Evolution Strategies as Scalable Alternative to Reinforcement Learning

[https://github.com/enajx/es#evolution-strategies-as-scalable-alternative-to-reinforcement-learning](https://github.com/enajx/es#evolution-strategies-as-scalable-alternative-to-reinforcement-learning)

This reposistory contains the code to train agents on any Gym, pyBullet, or MuJoCo environment using an Evolution Strategy (ES) algorithm. It's adapted from [this OpenAI implementation](https://github.com/openai/evolution-strategies-starter) of the distributed Evolution-Strategy (ES) introduced in [Evolution Strategies as Scalable Alternative to Reinforcement Learning, Salimans et al. 2017](https://arxiv.org/abs/1703.03864).

This code was used to create the non-plastic baselines for our paper [Meta-Learning through Hebbian Plasticity in Random Networks](https://arxiv.org/abs/2007.02686).

## How to run

[https://github.com/enajx/es#how-to-run](https://github.com/enajx/es#how-to-run)

First, install dependencies. Use `Python >= 3.8`:

```
# clone project   
git clone https://github.com/enajx/ES

# install dependencies   
cd ES 
pip install -r requirements.txt
```

Next, use `train_static.py` to train an agent. You can train any of OpenAI Gym's or pyBullet environments:

```
# train agent to solve the racing car
python train_static.py --environment CarRacing-v0

# train agent specifying evolution parameters, eg. 
python train_static.py --environment CarRacing-v0 --generations 300 --popsize 200 --print_every 1 --lr 0.2 --sigma 0.1 --decay 0.995 --threads -1
```

Use `python train_static.py --help` to display all the training options:

```
train_static.py [--environment] [--popsize] [--print_every] [--lr] [--decay] [--sigma] [--generations] [--folder] [--threads]

arguments:
  --environment   Environment: any OpenAI Gym or pyBullet environment may be used
  --popsize       Population size.
  --print_every   Print and save every N steps.
  --lr            ES learning rate.
  --decay         ES decay.
  --sigma         ES sigma: modulates the amount of noise used to populate each new generation
  --generations   Number of generations that the ES will run.
  --folder        folder to store the evolved weights
  --threads       Number of threads used to run evolution in parallel.
```

Once trained, use `evaluate_static.py` to test the evolved agent:

```
python evaluate_static.py --environment CarRacing-v0 --path_weights weights.dat
```

When running on a headless server some environments will require a virtual display to run -eg. CarRacing-v0-, in this case run:

```
xvfb-run -a -s "-screen 0 1400x900x24 +extension RANDR" -- python train_static.py --environment CarRacing-v0
```

## Citation

[https://github.com/enajx/es#citation](https://github.com/enajx/es#citation)

If you use the code for academic or commecial use, please cite the associated paper:

```
@inproceedings{Najarro2020,
	title = {{Meta-Learning through Hebbian Plasticity in Random Networks}},
	author = {Najarro, Elias and Risi, Sebastian},
	booktitle = {Advances in Neural Information Processing Systems},
	year = {2020},
	url = {https://arxiv.org/abs/2007.02686}
}
```

## Some notes on training performance

[https://github.com/enajx/es#some-notes-on-training-performance](https://github.com/enajx/es#some-notes-on-training-performance)

In the paper we have tested the CarRacing-v0 and AntBulletEnv-v0 environments. For both of them we have written custom functions to bound the action activations; the rest of the environments have a simple clipping mechanism to bound their actions. Environments with a continuous action space (ie. *Box*) are likely to benefit from a continous scaling -rather than clipping- of their action spaces, either with a custom activation function or with Gym's RescaleAction wrapper.

Another element that greatly affects performance -if you have bounded computational resources- is the choice of a suitable early stop meachanism such that less CPU cycles are wasted, eg. for the CarRacing-v0 environment we use 20 consecutive steps with negative reward as an early stop signal.

Finally, some pixel-based environments would likely benefit from using grayscaling + stacked frames approach rather than feeding the network the three RGB channels as we do in our implementation, eg. by using Gym's [Frame stack wrapper](https://github.com/openai/gym/blob/master/gym/wrappers/frame_stack.py#L58) or the [Atari preprocessing wrapper](https://github.com/openai/gym/blob/master/gym/wrappers/atari_preprocessing.py#L12).

## About

         Evolution Strategy (ES) implementation of [https://arxiv.org/abs/1703.03864](https://arxiv.org/abs/1703.03864)

### Resources

[Readme](https://github.com/enajx/es#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/enajx/ES/activity)

### Stars

[7
        stars](https://github.com/enajx/ES/stargazers)

### Watchers

[1
        watching](https://github.com/enajx/ES/watchers)

### Forks

[3
        forks](https://github.com/enajx/ES/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fenajx%2FES&report=enajx+%28user%29)

## [Contributors](https://github.com/enajx/ES/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/enajx/ES/search?l=python)

     You can’t perform that action at this time.
