---
repo: george-salafatinos/tictactoe-self-play
url: https://github.com/george-salafatinos/tictactoe-self-play
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - George-Salafatinos/TicTacToe-Self-Play · GitHub

**Source**: https://github.com/george-salafatinos/tictactoe-self-play

---

[Skip to content](https://github.com/george-salafatinos/tictactoe-self-play#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[George-Salafatinos](https://github.com/George-Salafatinos)

/
**[TicTacToe-Self-Play](https://github.com/George-Salafatinos/TicTacToe-Self-Play)**

Public

- [Notifications](https://github.com/login?return_to=%2FGeorge-Salafatinos%2FTicTacToe-Self-Play)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FGeorge-Salafatinos%2FTicTacToe-Self-Play)
- 
[Star
          0](https://github.com/login?return_to=%2FGeorge-Salafatinos%2FTicTacToe-Self-Play)

[https://github.com/George-Salafatinos/TicTacToe-Self-Play](https://github.com/George-Salafatinos/TicTacToe-Self-Play)

[Branches](https://github.com/George-Salafatinos/TicTacToe-Self-Play/branches)[Tags](https://github.com/George-Salafatinos/TicTacToe-Self-Play/tags)

[https://github.com/George-Salafatinos/TicTacToe-Self-Play/branches](https://github.com/George-Salafatinos/TicTacToe-Self-Play/branches)[https://github.com/George-Salafatinos/TicTacToe-Self-Play/tags](https://github.com/George-Salafatinos/TicTacToe-Self-Play/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History19 Commits19 Commits |  |  |  |
| hyperparam_plots_coplay_reinforce | hyperparam_plots_coplay_reinforce |  |  |
| hyperparam_plots_self-play_reinforce | hyperparam_plots_self-play_reinforce |  |  |
| imgs | imgs |  |  |
| models | models |  |  |
| static | static |  |  |
| templates | templates |  |  |
| training | training |  |  |
| utils | utils |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| __init__.py | __init__.py |  |  |
| app.py | app.py |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Tic-Tac-Toe RL Project

[https://github.com/george-salafatinos/tictactoe-self-play#tic-tac-toe-rl-project](https://github.com/george-salafatinos/tictactoe-self-play#tic-tac-toe-rl-project)

This repository contains an educational and experimental tic-tac-toe environment plus a set of reinforcement-learning (RL) agents (using REINFORCE, PPO, and random search). The project is not meant for production-level game AI but rather to explore and experiment with RL techniques in a simple environment.

## Overview

[https://github.com/george-salafatinos/tictactoe-self-play#overview](https://github.com/george-salafatinos/tictactoe-self-play#overview)

### Flask Web App:

[https://github.com/george-salafatinos/tictactoe-self-play#flask-web-app](https://github.com/george-salafatinos/tictactoe-self-play#flask-web-app)

- Lets you train a tic-tac-toe agent using different algorithms (Random Search, REINFORCE, PPO)
- You can specify hyperparameters (learning rate, gamma, steps) and choose the opponent type (random, self-play, co-play)
- The trained agent (O) can then be tested interactively via a browser

### Hyperparameter Sweeps:

[https://github.com/george-salafatinos/tictactoe-self-play#hyperparameter-sweeps](https://github.com/george-salafatinos/tictactoe-self-play#hyperparameter-sweeps)

- Standalone Python scripts (`hyperparam_sweep.py`, `hyperparam_sweep_coplay.py`)
- Systematically vary parameters (lr, gamma, hidden-layer sizes)
- Produce charts of training performance for educational analysis

### RL Agents:

[https://github.com/george-salafatinos/tictactoe-self-play#rl-agents](https://github.com/george-salafatinos/tictactoe-self-play#rl-agents)

- **Random Search**: Baseline approach, no real learning
- **REINFORCE**: Policy gradient with optional entropy bonus
- **PPO**: More advanced policy gradient approach
- **"co-play" variant**: Trains two separate agents X and O simultaneously, each with its own policy and updates

## Observations & Insights

[https://github.com/george-salafatinos/tictactoe-self-play#observations--insights](https://github.com/george-salafatinos/tictactoe-self-play#observations--insights)

### 1. Training Against a Random Opponent

[https://github.com/george-salafatinos/tictactoe-self-play#1-training-against-a-random-opponent](https://github.com/george-salafatinos/tictactoe-self-play#1-training-against-a-random-opponent)

If you train the model against a randomly choosing opponent, its accuracy will continue to climb and reach quite high. What you observe when you play against it, however, is that while it knows how to win, and will do so if you move randomly, it has no idea how to *prevent you* from winning, and we always go first, we can win almost every time.

[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/imgs/random_opponent_win.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/imgs/random_opponent_win.png)

### 2. Training Against Itself (Self-Play)

[https://github.com/george-salafatinos/tictactoe-self-play#2-training-against-itself-self-play](https://github.com/george-salafatinos/tictactoe-self-play#2-training-against-itself-self-play)

Of course, when we train it against itself, it is much better at preventing you from winning. But it still fails. Now, perfect play in tictactoe of course results in a draw every time, and training seems to stall at around ~45% win rates. So something isn't working here.

But then I thought of a major issue. Now, while waiting for the hyperparameter sweep to finish, I came across a strange idea: when the model trains against a bot with the same policies, it's actually incentivized to *lose* in a very particular way. Because if its generated policy is so bad on specifically off-turns that it loses, that actually rewards the model we are training. *We're basically training it to win on even turns and lose on odd ones, not just to win.*

Therefore we should try this solution: we train two distinct models at once. That way, its policy set is simply never rewarded for losing. They call it "co-play."

### 3. Hyperparameter Analysis (Self-Play)

[https://github.com/george-salafatinos/tictactoe-self-play#3-hyperparameter-analysis-self-play](https://github.com/george-salafatinos/tictactoe-self-play#3-hyperparameter-analysis-self-play)

First, let's look at the charts though.

[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_1_lr_gamma085.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_1_lr_gamma085.png)[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_2_lr_gamma099.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_2_lr_gamma099.png)

We see gamma had little effect on the best learning rate for 800 steps, and that the best learning rate for these two gamma values seemed to be about .08, peaking at ~.5 win rate.

[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_3_gamma_lr001.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_3_gamma_lr001.png)[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_4_gamma_lr008.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_4_gamma_lr008.png)

We see that at learning rate .001, gamma mostly made no difference and win rate was hampered. But with .008, we got a competitive win rate of .5 with a gamma of .95.

[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_5_hidden_sizes.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_5_hidden_sizes.png)

As one could predict, we increasing the size of the hidden layer generally improved the model, though with diminishing returns.

[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_6_arch.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_self-play_reinforce/hyper_6_arch.png)

Interestingly, the number of layers had little affect overall, and if anything seemed only to reduce the performance.

### 4. Co-Play (Training Two Distinct Models)

[https://github.com/george-salafatinos/tictactoe-self-play#4-co-play-training-two-distinct-models](https://github.com/george-salafatinos/tictactoe-self-play#4-co-play-training-two-distinct-models)

- Train two distinct agents, X and O, in one environment
- Each agent has its own policy network, log probs, and updates
- Helps avoid the "policy sabotage" issue
- In practice (especially in small, zero-sum games), you may see instabilities or collapses in training

While our objective function may have become closer aligned with winning tic-tac-toe, co-play seemed to induce model collapse. I tried varying the optimizer from adam to SGD, in case adam was sending the learning rate too dommedly low levels, and this helped some, but still mostly led to collapse.

Adam: [https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/imgs/model_collapse_adam.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/imgs/model_collapse_adam.png) SGD: [https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/imgs/model_collapse_sgd.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/imgs/model_collapse_sgd.png)

Likewise, hyperparameter plots were significantly worse [https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_coplay_reinforce/hyper_1_lr_gamma085.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_coplay_reinforce/hyper_1_lr_gamma085.png)[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_coplay_reinforce/hyper_2_lr_gamma099.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_coplay_reinforce/hyper_2_lr_gamma099.png)[https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_coplay_reinforce/hyper_3_gamma_lr001.png](https://github.com/George-Salafatinos/TicTacToe-Self-Play/blob/main/hyperparam_plots_coplay_reinforce/hyper_3_gamma_lr001.png)

## Educational Takeaways

[https://github.com/george-salafatinos/tictactoe-self-play#educational-takeaways](https://github.com/george-salafatinos/tictactoe-self-play#educational-takeaways)

- Simple RL Agents in a small game can produce interesting behaviors but quickly hit fundamental limits
- Self-Play vs. Co-Play demonstrates how multi-agent incentives can cause complicated reward dynamics
- Entropy Bonus helps exploration but doesn't solve fundamental problems
- Batch-based policy updates and advanced multi-agent RL methods can improve learning stability

## Disclaimer

[https://github.com/george-salafatinos/tictactoe-self-play#disclaimer](https://github.com/george-salafatinos/tictactoe-self-play#disclaimer)

This project is primarily for learning and experimentation. The code is not optimized or guaranteed to converge on "perfect play." For a deeper or more stable multi-agent approach, consider:

- Larger batch rollouts
- Multi-epoch policy updates (common in PPO)
- Techniques specifically designed for multi-agent zero-sum scenarios

## Folder Structure

[https://github.com/george-salafatinos/tictactoe-self-play#folder-structure](https://github.com/george-salafatinos/tictactoe-self-play#folder-structure)

```
app.py                      # Flask server that hosts the tic-tac-toe web interface
templates/
  └── index.html           # Front-end page with training forms, board
static/scripts/
  └── tictactoe.js         # Client-side JavaScript for user interaction
utils/
  ├── tic_tac_toe.py       # Tic-tac-toe environment logic
  └── plot.py              # Plotting helpers for training graphs
models/
  ├── random_search.py
  ├── reinforce.py         # with optional entropy
  └── ppo.py
training/
  └── train.py            # Orchestrates which model to train
```

## Future Work

[https://github.com/george-salafatinos/tictactoe-self-play#future-work](https://github.com/george-salafatinos/tictactoe-self-play#future-work)

- **Batching Episodes**: Collect multiple episodes before updates
- **Replay Buffers**: Accumulate experiences from both agents
- **Self-Play Enhancements**: Maintain historical "best" snapshots
- **Exploration**: Tune entropy_coef or add sophisticated exploration
- **More Complex Environments**: Move beyond tic-tac-toe's limitations

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/george-salafatinos/tictactoe-self-play#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/George-Salafatinos/TicTacToe-Self-Play/activity)

### Stars

[0
        stars](https://github.com/George-Salafatinos/TicTacToe-Self-Play/stargazers)

### Watchers

[1
        watching](https://github.com/George-Salafatinos/TicTacToe-Self-Play/watchers)

### Forks

[0
        forks](https://github.com/George-Salafatinos/TicTacToe-Self-Play/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FGeorge-Salafatinos%2FTicTacToe-Self-Play&report=George-Salafatinos+%28user%29)

## [Releases](https://github.com/George-Salafatinos/TicTacToe-Self-Play/releases)

No releases published

## [Packages
      0](https://github.com/users/George-Salafatinos/packages?repo_name=TicTacToe-Self-Play)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/George-Salafatinos/TicTacToe-Self-Play/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          80.4%](https://github.com/George-Salafatinos/TicTacToe-Self-Play/search?l=python)
- [JavaScript
          13.5%](https://github.com/George-Salafatinos/TicTacToe-Self-Play/search?l=javascript)
- [HTML
          5.4%](https://github.com/George-Salafatinos/TicTacToe-Self-Play/search?l=html)
- [CSS
          0.7%](https://github.com/George-Salafatinos/TicTacToe-Self-Play/search?l=css)

     You can’t perform that action at this time.
