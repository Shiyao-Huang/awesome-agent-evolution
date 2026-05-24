---
repo: chuacheowhuan/gym-continuousdoubleauction
url: https://github.com/chuacheowhuan/gym-continuousdoubleauction
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - ChuaCheowHuan/gym-continuousDoubleAuction: A custom MARL (multi-agent reinforcement learning) environment where multiple agents trade against one another (self-play) in a zero-sum continuous double auction. Ray [RLlib] is used for training. · GitHub

**Source**: https://github.com/chuacheowhuan/gym-continuousdoubleauction

---

[Skip to content](https://github.com/chuacheowhuan/gym-continuousdoubleauction#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ChuaCheowHuan](https://github.com/ChuaCheowHuan)

/
**[gym-continuousDoubleAuction](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction)**

Public

- [Notifications](https://github.com/login?return_to=%2FChuaCheowHuan%2Fgym-continuousDoubleAuction)You must be signed in to change notification settings
- [Fork
    31](https://github.com/login?return_to=%2FChuaCheowHuan%2Fgym-continuousDoubleAuction)
- 
[Star
          153](https://github.com/login?return_to=%2FChuaCheowHuan%2Fgym-continuousDoubleAuction)

[https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction)

[Branches](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/branches)[Tags](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/tags)

[https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/branches](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/branches)[https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/tags](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History429 Commits429 Commits |  |  |  |
| docker | docker |  |  |
| gym_continuousDoubleAuction.egg-info | gym_continuousDoubleAuction.egg-info |  |  |
| gym_continuousDoubleAuction | gym_continuousDoubleAuction |  |  |
| pic | pic |  |  |
| .gitignore | .gitignore |  |  |
| .travis.yml | .travis.yml |  |  |
| CITATION.cff | CITATION.cff |  |  |
| CODEOWNER | CODEOWNER |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Changes from original_v1 to Current Version 2 (update 20251224)

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#changes-from-original_v1-to-current-version-2-update-20251224](https://github.com/chuacheowhuan/gym-continuousdoubleauction#changes-from-original_v1-to-current-version-2-update-20251224)

This repository has undergone significant modernization since the `original_v1` branch (the original release from 2020).

For a detailed breakdown of codebase modernizations, please refer to the [change.md](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/blob/master/gym_continuousDoubleAuction/doc/change.md) document.

---

# Below are the information for the `original_v1` branch (released more than 5 years ago):

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#below-are-the-information-for-the-original_v1-branch-released-more-than-5-years-ago](https://github.com/chuacheowhuan/gym-continuousdoubleauction#below-are-the-information-for-the-original_v1-branch-released-more-than-5-years-ago)

1. [Update](https://github.com/chuacheowhuan/gym-continuousdoubleauction#update)
2. [Purpose of this repository](https://github.com/chuacheowhuan/gym-continuousdoubleauction#purpose-of-this-repository)
3. [Example](https://github.com/chuacheowhuan/gym-continuousdoubleauction#example)
4. [Dependencies](https://github.com/chuacheowhuan/gym-continuousdoubleauction#dependencies)
5. [Installation](https://github.com/chuacheowhuan/gym-continuousdoubleauction#installation)
6. [TODO](https://github.com/chuacheowhuan/gym-continuousdoubleauction#todo)
7. [Acknowledgements](https://github.com/chuacheowhuan/gym-continuousdoubleauction#acknowledgements)
8. [Contributing](https://github.com/chuacheowhuan/gym-continuousdoubleauction#contributing)
9. [Disclaimer](https://github.com/chuacheowhuan/gym-continuousdoubleauction#disclaimer)

# Appendix:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#appendix](https://github.com/chuacheowhuan/gym-continuousdoubleauction#appendix)

1. [Observation space](https://github.com/chuacheowhuan/gym-continuousdoubleauction#observation-space)
2. [Action space](https://github.com/chuacheowhuan/gym-continuousdoubleauction#action-space)
3. [Reward](https://github.com/chuacheowhuan/gym-continuousdoubleauction#Reward)
4. [Making sense of the render output](https://github.com/chuacheowhuan/gym-continuousdoubleauction#making-sense-of-the-render-output)
5. [Generated LOB](https://github.com/chuacheowhuan/gym-continuousdoubleauction#generated-lob)

---

[https://travis-ci.com/ChuaCheowHuan/gym-continuousDoubleAuction](https://travis-ci.com/ChuaCheowHuan/gym-continuousDoubleAuction)

---

# Update:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#update](https://github.com/chuacheowhuan/gym-continuousdoubleauction#update)

See latest PR.

---

# Purpose of this repository:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#purpose-of-this-repository](https://github.com/chuacheowhuan/gym-continuousdoubleauction#purpose-of-this-repository)

The purpose of this repository is to create a custom MARL (multi-agent reinforcement learning) environment where multiple agents trade against one another in a CDA (continuous double auction).

The environment doesn't use any external data. Data is generated by self-play of the agents themselves through their interaction with the limit order book.

At each time step, the environment emits the top k rows of the aggregated order book as observations to the agents. Each agent then samples an action from the action space & all actions are randomly shuffled before execution in each time step.

Each time step is a snapshot of the limit order book & a key assumption is that all traders(agents) suffer the same lag (wait for all traders to have their orders executed before seeing the next LOB snapshot).

---

# Example:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#example](https://github.com/chuacheowhuan/gym-continuousdoubleauction#example)

The example is available in this Jupyter notebook implemented with RLlib: `CDA_NSP.ipynb`. This notebook is tested in Colab.

This example uses two trained agents & N random agents. All agents compete with one another in this zero-sum environment, irregardless of whether they're trained or random.

**competitive self-play**

The policy weights of the winning trained agent(trader) is used to replace the policy weights of the other trained agents after each training iteration. Winning here is defined as having the highest reward per training iteration.

The reward function requires the agents to maximize profit while minimizing number of trades made in an episode (trading session). As the number of trades accumulates in the later stages of a session, profits will be scaled down by the number of trades & losses will be magnified.

The trained agents are P0 & P1, both using separate PPO policy weights. The rest are random agents.

The results with 10 agents are shown in the figures below:

[https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/blob/master/pic/penalize_r.png](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/blob/master/pic/penalize_r.png)

[https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/blob/master/pic/penalize_PandL.png](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/blob/master/pic/penalize_PandL.png)

---

If you're running locally, you can run the following command & navigate to `localhost:6006` in your browser to access the **tensorboard graphs**:

```
$ tensorboard --logdir ~/ray_results
```

---

**Other ways** to run this environment:

By using the python `CDA_env_rand.py` script which is basically running a CDA simulator with dummy (non-learning) random agents.

---

# Dependencies:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#dependencies](https://github.com/chuacheowhuan/gym-continuousdoubleauction#dependencies)

1. tensorFlow
2. ray[rllib]
3. pandas
4. sortedcontainers
5. sklearn

For a full list of dependencies & versions, see `requirements.txt` in this repository.

---

# Installation:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#installation](https://github.com/chuacheowhuan/gym-continuousdoubleauction#installation)

The environment is installable via pip.

```
$ cd gym-continuousDoubleAuction

$ pip install -e .
```

---

# TODO:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#todo](https://github.com/chuacheowhuan/gym-continuousdoubleauction#todo)

1. 

Better documentation.

2. 

Generalize the environment to use more than 1 LOB.

3. 

Parametric or hybrid action space (or experiment with different types of action space).

4. 

Expose the limit orders (that are currently in the LOB or aggregated LOB) which belongs to a particular trader as observation to that trader.

5. 

Allow traders to have random starting capital.

6. 

Instead of traders(agents) having the same lag, introduce zero lag (Each LOB snapshot in each t-step is visible to all traders) or random lag.

7. 

Allows a distribution of previous winning policies to be selected for trained agents. (training)

8. 

Custom RLlib workflow to include custom RND + PPO policies. (training)

9. 

Update current model (deprecated) or use default from RLlib. (training)

10. 

Move TODO to issues.

---

# Acknowledgements:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#acknowledgements](https://github.com/chuacheowhuan/gym-continuousdoubleauction#acknowledgements)

The orderbook matching engine is adapted from [https://github.com/dyn4mik3/OrderBook](https://github.com/dyn4mik3/OrderBook)

---

# Contributing:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#contributing](https://github.com/chuacheowhuan/gym-continuousdoubleauction#contributing)

Please see [CONTRIBUTING.md](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/blob/master/CONTRIBUTING.md).

---

# Disclaimer:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#disclaimer](https://github.com/chuacheowhuan/gym-continuousdoubleauction#disclaimer)

This repository is only meant for research purposes & is **never** meant to be used in any form of trading. Past performance is no guarantee of future results. If you suffer losses from using this repository, you are the sole person responsible for the losses. The author will **NOT** be held responsible in any way.

---

# Appendix:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#appendix-1](https://github.com/chuacheowhuan/gym-continuousdoubleauction#appendix-1)

---

# Observation space:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#observation-space](https://github.com/chuacheowhuan/gym-continuousdoubleauction#observation-space)

Each obs is a snapshot in each environment step.

```
obs = [array([1026., 2883., 1258., 1263., 3392., 1300., 1950., 1894., 2401., 4241.],          # bid size list
       array([64., 63., 62., 61., 60., 59., 58., 57., 56., 55.]),                             # bid price list
       array([ -519., -2108.,  -215., -1094., -1687., -2667., -3440., -2902., -1440 -3078.]), # ask size list
       array([-65., -66., -67., -68., -69., -70., -71., -72., -73., -74.])]                   # ask price list
```

---

# Action space:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#action-space](https://github.com/chuacheowhuan/gym-continuousdoubleauction#action-space)

See [PR 9](https://github.com/ChuaCheowHuan/gym-continuousDoubleAuction/pull/9) for the current action space.

---

# Reward:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#reward](https://github.com/chuacheowhuan/gym-continuousdoubleauction#reward)

If `NAV_chg` is used as the reward. The `episode_reward` from RLlib training output will be 0, indicating a zero-sum game.

```
NAV_chg = float(trader.acc.nav - trader.acc.prev_nav)

# maximize NAV
#rewards[trader.ID] = NAV_chg
```

However, if the `NAV_chg` is scaled, then the `episode_reward` from RLlib training output will NOT be 0.

```
# maximize NAV, minimize num of trades (more trades gets penalized).
if NAV_chg >= 0:
    rewards[trader.ID] = NAV_chg / (trader.acc.num_trades + 1)
else:
    rewards[trader.ID] = NAV_chg * (trader.acc.num_trades + 1)

trader.acc.reward = rewards[trader.ID]
```

---

# Making sense of the render output:

[https://github.com/chuacheowhuan/gym-continuousdoubleauction#making-sense-of-the-render-output](https://github.com/chuacheowhuan/gym-continuousdoubleauction#making-sense-of-the-render-output)

**The step separator:**

```
************************************************** t_step = 306 **************************************************
```

---

**Actions:**

Actions output from the model:

1. Each column represents the action from each trader(agent).
2. Row 1 represents the side: none, bid, ask (0 to 2).
3. Row 2 represents the type: market, limit, modify, cancel.
4. Row 3 represents the mean for size selection.
5. Row 4 represents the sigma for size selection.
6. Row 5 represents the price: based on LOB market depth from 0 to 11.

```
Model actions:
 --  --  --  --
 1   1   1   2
 1   0   0   1
39  29   6  17
19  89  13   0
 7   4   9  10
--  --  --  --
```

1. Column 1 represents the ID of each trader(agent).
2. Column 2 the side: none, bid, ask (0 to 2).
3. Column 3 type: market, limit, modify, cancel.
4. Column 4 represents the order size.
5. Column 5 represents the order price.

```
Formatted actions acceptable by LOB:
 -  ---  ------  -----  --
0  bid  limit   38982  15
1  bid  market   5779   0
2  bid  market    999   0
3  ask  limit   17001  47
-  ---  ------  -----  --
Shuffled action queue sequence for LOB executions:
 -  ---  ------  -----  --
3  ask  limit   17001  47
2  bid  market    999   0
1  bid  market   5779   0
0  bid  limit   38982  15
-  ---  ------  -----  --
```

---

**Rewards, dones, & infos:**

```
rewards:
 {0: 0.0, 1: 0.0, 2: 0.0, 3: 0.0}

dones:
 {'__all__': True}

infos:
 {0: {}, 1: {}, 2: {}, 3: {}}
```

---

**Aggregated LOB:**

1. The columns represents the 10 levels (1 to 10, left to right) of the market depth in the LOB.
2. Row 1 represents the bid size.
3. Row 2 represents the bid price.
4. Row 3 represents the ask size.
5. Row 4 represents the ask price.

```
agg LOB @ t-1
 ------  -----  ------  ------  ------  ------  ------  ------  ------  ------
