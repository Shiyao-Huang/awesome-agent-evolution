---
repo: adiban17/ppo-ping-pong-agent-
url: https://github.com/adiban17/ppo-ping-pong-agent-
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - adiban17/PPO-Ping-Pong-Agent- · GitHub

**Source**: https://github.com/adiban17/ppo-ping-pong-agent-

---

[Skip to content](https://github.com/adiban17/ppo-ping-pong-agent-#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[adiban17](https://github.com/adiban17)

/
**[PPO-Ping-Pong-Agent-](https://github.com/adiban17/PPO-Ping-Pong-Agent-)**

Public

- [Notifications](https://github.com/login?return_to=%2Fadiban17%2FPPO-Ping-Pong-Agent-)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fadiban17%2FPPO-Ping-Pong-Agent-)
- 
[Star
          0](https://github.com/login?return_to=%2Fadiban17%2FPPO-Ping-Pong-Agent-)

[https://github.com/adiban17/PPO-Ping-Pong-Agent-](https://github.com/adiban17/PPO-Ping-Pong-Agent-)

[Branches](https://github.com/adiban17/PPO-Ping-Pong-Agent-/branches)[Tags](https://github.com/adiban17/PPO-Ping-Pong-Agent-/tags)

[https://github.com/adiban17/PPO-Ping-Pong-Agent-/branches](https://github.com/adiban17/PPO-Ping-Pong-Agent-/branches)[https://github.com/adiban17/PPO-Ping-Pong-Agent-/tags](https://github.com/adiban17/PPO-Ping-Pong-Agent-/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History3 Commits3 Commits |  |  |  |
| README.md | README.md |  |  |
| agent_training.ipynb | agent_training.ipynb |  |  |
| play.py | play.py |  |  |
| pong_Env.py | pong_Env.py |  |  |
| pong_champion_final.zip | pong_champion_final.zip |  |  |
| pong_stage1.zip | pong_stage1.zip |  |  |
| pong_stage2.zip | pong_stage2.zip |  |  |
| pong_stage3.zip | pong_stage3.zip |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🏓 RL Pong Agent

[https://github.com/adiban17/ppo-ping-pong-agent-#-rl-pong-agent](https://github.com/adiban17/ppo-ping-pong-agent-#-rl-pong-agent)

**An AI Agent trained using Proximal Policy Optimization (PPO) and Curriculum Learning.**

[https://camo.githubusercontent.com/7e492a4d28f5273e7fb7c38fcc6f073b51015c1de61bce258951a1d12d91e39b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374617475732d436f6d706c657465642d73756363657373](https://camo.githubusercontent.com/7e492a4d28f5273e7fb7c38fcc6f073b51015c1de61bce258951a1d12d91e39b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5374617475732d436f6d706c657465642d73756363657373)[https://camo.githubusercontent.com/ac095efffec6ac483a78a54200d72e16c1eeeb3c29542653715e7dd2eb56ef00/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31302532422d626c7565](https://camo.githubusercontent.com/ac095efffec6ac483a78a54200d72e16c1eeeb3c29542653715e7dd2eb56ef00/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d332e31302532422d626c7565)[https://camo.githubusercontent.com/45cb68216f969a687293660eaedfc05ddf683efaf3b49b669eb9835b90fc7790/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6962726172792d537461626c652d2d426173656c696e6573332d6f72616e6765](https://camo.githubusercontent.com/45cb68216f969a687293660eaedfc05ddf683efaf3b49b669eb9835b90fc7790/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6962726172792d537461626c652d2d426173656c696e6573332d6f72616e6765)[https://camo.githubusercontent.com/8a4bcb9d24b2af4886327859ab2072b00e61deea8730c245c0932cd3ac3bf855/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456e762d47796d6e617369756d2d677265656e](https://camo.githubusercontent.com/8a4bcb9d24b2af4886327859ab2072b00e61deea8730c245c0932cd3ac3bf855/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456e762d47796d6e617369756d2d677265656e)

> **The Challenge:** Train an AI agent that plays Ping Pong using Reinforcement Learning from scratch and then deploy it for real-time play against a human.

---

## 📖 About The Project

[https://github.com/adiban17/ppo-ping-pong-agent-#-about-the-project](https://github.com/adiban17/ppo-ping-pong-agent-#-about-the-project)

This project implements a **Reinforcement Learning (RL)** agent capable of playing Pong at a basic level. Unlike standard tutorials that use pre-made environments, this project features a **custom-built Gymnasium environment** with physics-based mechanics (velocity, friction, collision angles).

The agent was trained using **Curriculum Learning**, a technique where the difficulty of the opponent gradually increases. This allowed the agent to overcome the "Sparse Reward" problem and learn complex strategies like corner shots and fast counters.

### Key Features

[https://github.com/adiban17/ppo-ping-pong-agent-#key-features](https://github.com/adiban17/ppo-ping-pong-agent-#key-features)

- **Custom Gymnasium Environment:** Built from scratch using Python & NumPy.
- **PPO Algorithm:** Utilizes Stable-Baselines3's Proximal Policy Optimization with a custom neural network architecture (256x256).
- **Curriculum Learning Pipeline:** Automated training stages moving from "Clumsy Opponent" (25% error rate) to "God Mode" (0% error rate).
- **Real-Time Inference:** A Pygame interface to play against the trained agent in real-time at 60 FPS.
- **Domain Randomization:** The agent is trained to handle random ball velocities and serving angles to prevent overfitting.

---

## 🛠️ Technical Architecture

[https://github.com/adiban17/ppo-ping-pong-agent-#%EF%B8%8F-technical-architecture](https://github.com/adiban17/ppo-ping-pong-agent-#%EF%B8%8F-technical-architecture)

### The Brain (Neural Network)

[https://github.com/adiban17/ppo-ping-pong-agent-#the-brain-neural-network](https://github.com/adiban17/ppo-ping-pong-agent-#the-brain-neural-network)

- **Algorithm:** PPO (Proximal Policy Optimization)
- **Policy:** MLP (Multi-Layer Perceptron)
- **Architecture:** 2 Hidden Layers (256 neurons each)
- **Entropy Coefficient:**`0.01` (To force exploration and creative shots)
- **Observation Space:** 6-dimensional vector `[ball_x, ball_y, ball_vx, ball_vy, player_y, enemy_y]`

### The Training Curriculum

[https://github.com/adiban17/ppo-ping-pong-agent-#the-training-curriculum](https://github.com/adiban17/ppo-ping-pong-agent-#the-training-curriculum)

To prevent the agent from getting stuck in local minima (Lazy Strategy), training was split into 3 stages:

1. **Rookie Stage:** Opponent has a **25% error rate**. The agent learns the basics of hitting the ball.
2. **Pro Stage:** Opponent has a **10% error rate**. The agent learns to aim and rally.
3. **Grandmaster Stage:** Opponent has a **0% error rate** (Perfect Wall). The agent must find mathematical exploits in the physics engine to score.

---

## 🚀 Installation

[https://github.com/adiban17/ppo-ping-pong-agent-#-installation](https://github.com/adiban17/ppo-ping-pong-agent-#-installation)

1. 

**Clone the Repo**

```
git clone https://github.com/adiban17/PPO-Ping-Pong-Agent-
cd PPO-Ping-Pong-Agent-
```

2. 

**Install Dependencies**

```
pip install gymnasium stable-baselines3 shimmy pygame numpy
```

---

## 🎮 How to Run

[https://github.com/adiban17/ppo-ping-pong-agent-#-how-to-run](https://github.com/adiban17/ppo-ping-pong-agent-#-how-to-run)

### 1. Play Against the AI (Pre-Trained)

[https://github.com/adiban17/ppo-ping-pong-agent-#1-play-against-the-ai-pre-trained](https://github.com/adiban17/ppo-ping-pong-agent-#1-play-against-the-ai-pre-trained)

If you just want to test your skills against the agent:

```
python play.py
```

- **Controls:** Use `UP` and `DOWN` arrow keys.
- **Goal:** Try to play some basic ping-pong moves against the agent.

### 2. Train the AI from Scratch

[https://github.com/adiban17/ppo-ping-pong-agent-#2-train-the-ai-from-scratch](https://github.com/adiban17/ppo-ping-pong-agent-#2-train-the-ai-from-scratch)

To replicate the training process and generate your own model:

```
python train_curriculum.py
```

- *Note: Training takes approximately 30 minutes - 1 hour on a local device depending on system capabilities.*
- The script will save checkpoints (e.g., `pong_stage1.zip`) as it progresses.

---

## 📂 File Structure

[https://github.com/adiban17/ppo-ping-pong-agent-#-file-structure](https://github.com/adiban17/ppo-ping-pong-agent-#-file-structure)

```
RL-Pong-Champion/
├── ping_pong_env.py        # The Custom Gymnasium Environment (Physics & Rules)
├── play.py                 # Pygame script for Human vs. AI interaction
├── train_curriculum.py     # The automated training pipeline (Stages 1-3)
├── pong_champion_final.zip # The trained model weights (The Brain)
└── README.md               # Documentation
```

## 🧠 Lessons Learned

[https://github.com/adiban17/ppo-ping-pong-agent-#-lessons-learned](https://github.com/adiban17/ppo-ping-pong-agent-#-lessons-learned)

- **Sparse Rewards:** Without a curriculum, the agent failed to learn because beating a perfect opponent instantly is impossible. Lowering the difficulty initially was crucial.
- **Entropy Matters:** Training without an entropy coefficient led to "Premature Convergence," where the agent found a lazy strategy (standing still) and refused to learn further.
- **Sim vs. Real:** A model trained purely on math needs a "Wrapper" (in `play.py`) to interface with human inputs effectively.

---

## 📜 License

[https://github.com/adiban17/ppo-ping-pong-agent-#-license](https://github.com/adiban17/ppo-ping-pong-agent-#-license)

Distributed under the MIT License. See `LICENSE` for more information.

---

### 👤 Author

[https://github.com/adiban17/ppo-ping-pong-agent-#-author](https://github.com/adiban17/ppo-ping-pong-agent-#-author)

**Aditya Banerjee**

- [LinkedIn](https://www.linkedin.com/in/aditya-banerjee-08117b310/)
- [GitHub](https://github.com/adiban17)
- [Medium](https://medium.com/https://medium.com/@adityabanerjee171/reinforcement-learning-training-a-ppo-agent-to-play-ping-pong-with-curriculum-learning-1693c2370f97)

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/adiban17/ppo-ping-pong-agent-#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/adiban17/PPO-Ping-Pong-Agent-/activity)

### Stars

[0
        stars](https://github.com/adiban17/PPO-Ping-Pong-Agent-/stargazers)

### Watchers

[0
        watching](https://github.com/adiban17/PPO-Ping-Pong-Agent-/watchers)

### Forks

[0
        forks](https://github.com/adiban17/PPO-Ping-Pong-Agent-/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fadiban17%2FPPO-Ping-Pong-Agent-&report=adiban17+%28user%29)

## [Releases](https://github.com/adiban17/PPO-Ping-Pong-Agent-/releases)

No releases published

## [Packages
      0](https://github.com/users/adiban17/packages?repo_name=PPO-Ping-Pong-Agent-)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/adiban17/PPO-Ping-Pong-Agent-/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          99.8%](https://github.com/adiban17/PPO-Ping-Pong-Agent-/search?l=jupyter-notebook)
- [Python
          0.2%](https://github.com/adiban17/PPO-Ping-Pong-Agent-/search?l=python)

     You can’t perform that action at this time.
