---
repo: pathway/alphaxos
url: https://github.com/pathway/alphaxos
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - pathway/alphaxos: Deep Reinforcement Learning with Self-Play · GitHub

**Source**: https://github.com/pathway/alphaxos

---

[Skip to content](https://github.com/pathway/alphaxos#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[pathway](https://github.com/pathway)

/
**[alphaxos](https://github.com/pathway/alphaxos)**

Public

- [Notifications](https://github.com/login?return_to=%2Fpathway%2Falphaxos)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fpathway%2Falphaxos)
- 
[Star
          12](https://github.com/login?return_to=%2Fpathway%2Falphaxos)

[https://github.com/pathway/alphaxos](https://github.com/pathway/alphaxos)

[Branches](https://github.com/pathway/alphaxos/branches)[Tags](https://github.com/pathway/alphaxos/tags)

[https://github.com/pathway/alphaxos/branches](https://github.com/pathway/alphaxos/branches)[https://github.com/pathway/alphaxos/tags](https://github.com/pathway/alphaxos/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History20 Commits20 Commits |  |  |  |
| .idea | .idea |  |  |
| templates | templates |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| agents.py | agents.py |  |  |
| alphaxos.py | alphaxos.py |  |  |
| aws.txt | aws.txt |  |  |
| envs.py | envs.py |  |  |
| http.py | http.py |  |  |
| params.py | params.py |  |  |
| rlparts.py | rlparts.py |  |  |
| tforce2.py | tforce2.py |  |  |
| tforcedemo.py | tforcedemo.py |  |  |
| webxos.py | webxos.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# AlphaXos

[https://github.com/pathway/alphaxos#alphaxos](https://github.com/pathway/alphaxos#alphaxos)

## Project status

[https://github.com/pathway/alphaxos#project-status](https://github.com/pathway/alphaxos#project-status)

- experimental!

### Self play with Deep Reinforcement Learning: Deep Q-Learning using board games in an Open AI Gym-like Environment

[https://github.com/pathway/alphaxos#self-play-with-deep-reinforcement-learning-deep-q-learning-using-board-games-in-an-open-ai-gym-like-environment](https://github.com/pathway/alphaxos#self-play-with-deep-reinforcement-learning-deep-q-learning-using-board-games-in-an-open-ai-gym-like-environment)

What?

- Concise working example of self-play Deep Q-Learning
- You may find it a useful example in contrast to Alpha Zero / AlphaGo Zero (AZ/AGZ)
- Environment similar to those in OpenAI gym at gym/envs/toy_text/
- General approach to piece-placement board games

Agents:

- ChaosAgent: Same as DQNAgent, but Epsilon-greedy during play (not just during training)
- DQNAgent: Double-Deep Q-Learning agent trained with keras-rl
- RandomAgent: always plays a random (but valid) move
- HumanAgent: takes keyboard input

### Comparison with AlphaZero / AlphaGo Zero

[https://github.com/pathway/alphaxos#comparison-with-alphazero--alphago-zero](https://github.com/pathway/alphaxos#comparison-with-alphazero--alphago-zero)

There is no tree search here, its just one-step DQN for now.  So a completely different type of RL (model-free) than AlphaZero (model-based with tree search).

Similar to AZ/AGZ:

- reinforcement learning for a binary board game
- game state represented via board input matrix
- uses single neural network (aside from the fact it uses double DQN), instead of separate policy and value networks like earlier AlphaGos
- learns entirely from self-play (in the case of AlphaXos, also learns from play against purely random player, as well as self-play)
- no human-engineered features or logic

Different from AZ/AGZ:

- AX uses Double Deep Q Learning (via keras-rl), as opposed to the novel Monte Carlo Tree Search variation of Policy Improvement used by AZ/AGZ, which I think was the meat of their contribution
- AGZ used rotated/reflected board positions to increase sample efficiency.  AZ did not do this.  AlphaXos does not currently do this.
- uses a simple shallow keras FF network (instead of a deep residual convolutional network in the case of AGZ)
- uses single 2D matrix for representing board including both players, instead of a multi-layer matrix like AZ/AGZ.  The games we consider here do not require previous timesteps in order to completely capture game state.  Ie. here the current board state is sufficient to satisfy the Markhov assumption for an MDP.
- adjusts representation of board depending on turn side, as opposed to AGZ which provides turn side as input to the network
- probably many other things!

### Next steps

[https://github.com/pathway/alphaxos#next-steps](https://github.com/pathway/alphaxos#next-steps)

- lots

### References

[https://github.com/pathway/alphaxos#references](https://github.com/pathway/alphaxos#references)

- Alpha Zero: [https://arxiv.org/abs/1712.01815](https://arxiv.org/abs/1712.01815)
- AlphaGo Zero: [https://deepmind.com/documents/119/agz_unformatted_nature.pdf](https://deepmind.com/documents/119/agz_unformatted_nature.pdf)
- OpenAI gym: [https://github.com/openai/gym/](https://github.com/openai/gym/)
- Keras-RL: [https://github.com/keras-rl/keras-rl](https://github.com/keras-rl/keras-rl)
- Keras: [https://keras.io/](https://keras.io/)
- DQNs: [https://www.nature.com/articles/nature14236](https://www.nature.com/articles/nature14236)
- Double DQN: [https://arxiv.org/abs/1509.06461](https://arxiv.org/abs/1509.06461)

Copyright (c) 2018 Robin Chauhan

License: The MIT License

## About

         Deep Reinforcement Learning with Self-Play       

### Resources

[Readme](https://github.com/pathway/alphaxos#readme-ov-file)

### License

[MIT license](https://github.com/pathway/alphaxos#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/pathway/alphaxos/activity)

### Stars

[12
        stars](https://github.com/pathway/alphaxos/stargazers)

### Watchers

[1
        watching](https://github.com/pathway/alphaxos/watchers)

### Forks

[3
        forks](https://github.com/pathway/alphaxos/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fpathway%2Falphaxos&report=pathway+%28user%29)

## [Releases](https://github.com/pathway/alphaxos/releases)

No releases published

## [Packages
      0](https://github.com/users/pathway/packages?repo_name=alphaxos)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/pathway/alphaxos/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          86.3%](https://github.com/pathway/alphaxos/search?l=python)
- [HTML
          13.7%](https://github.com/pathway/alphaxos/search?l=html)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2018
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

