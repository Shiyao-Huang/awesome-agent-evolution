---
repo: rishab-agrawal/humanoid-curriculum-rl
url: https://github.com/rishab-agrawal/humanoid-curriculum-rl
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Rishab-Agrawal/humanoid-curriculum-rl: MuJoCo-based reinforcement learning with Q-learning-driven curriculum for robust humanoid locomotion under perturbations. · GitHub

**Source**: https://github.com/rishab-agrawal/humanoid-curriculum-rl

---

[Skip to content](https://github.com/rishab-agrawal/humanoid-curriculum-rl#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Rishab-Agrawal](https://github.com/Rishab-Agrawal)

/
**[humanoid-curriculum-rl](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl)**

Public

- [Notifications](https://github.com/login?return_to=%2FRishab-Agrawal%2Fhumanoid-curriculum-rl)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FRishab-Agrawal%2Fhumanoid-curriculum-rl)
- 
[Star
          1](https://github.com/login?return_to=%2FRishab-Agrawal%2Fhumanoid-curriculum-rl)

[https://github.com/Rishab-Agrawal/humanoid-curriculum-rl](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl)

[Branches](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/branches)[Tags](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/tags)

[https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/branches](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/branches)[https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/tags](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History14 Commits14 Commits |  |  |  |
| assets | assets |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| demo.gif | demo.gif |  |  |
| env_humanoid_v4_custom.py | env_humanoid_v4_custom.py |  |  |
| main_humanoid_custom.py | main_humanoid_custom.py |  |  |
| ql_env.py | ql_env.py |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Adaptive Gravity Curriculum Learning for MuJoCo Humanoid

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#adaptive-gravity-curriculum-learning-for-mujoco-humanoid](https://github.com/rishab-agrawal/humanoid-curriculum-rl#adaptive-gravity-curriculum-learning-for-mujoco-humanoid)

This project implements **Automated Curriculum Learning** for a MuJoCo Humanoid robot using a custom **Q-Learning-based meta-environment**. The idea is to perturb the robot's gravity conditions (in the x and y directions) during training in a way that optimally challenges and aids the agent’s learning process—an example of learning *how to teach* a reinforcement learning agent.

The Q-learning environment observes the robot’s training performance and learns when to modify the gravitational conditions to improve the agent’s ability to learn walking under diverse perturbations.

**Publication**: [Mitigating the Trade-Off Between Robustness, Optimality and Sample Efficiency in Simulated Legged Locomotion - IEEE Xplore](https://ieeexplore.ieee.org/document/10654466)

---

## Demo

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#demo](https://github.com/rishab-agrawal/humanoid-curriculum-rl#demo)

The demo showcases a side-by-side comparison of humanoid agents trained with and without curriculum learning under varying gravity conditions.

[https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/blob/main/demo.gif](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/blob/main/demo.gif)

---

## Features

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#features](https://github.com/rishab-agrawal/humanoid-curriculum-rl#features)

- Custom meta-environment that applies perturbations to gravity.
- Q-Learning for environment-level curriculum scheduling.
- Trains a MuJoCo humanoid agent using **Stable Baselines3** (`SAC`, `TD3`, or `A2C`).
- Logs and saves training checkpoints and Q-tables.

---

## Repository Structure

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#repository-structure](https://github.com/rishab-agrawal/humanoid-curriculum-rl#repository-structure)

```
.
├── main_humanoid_custom.py      # Main script for training/testing the RL agent
├── ql_env.py                    # Q-learning logic for the meta-environment (curriculum learning)
├── env_humanoid_v4_custom.py    # Custom wrapper for the Humanoid-v4 environment
├── requirements.txt             # Python dependencies for setting up the environment
├── README.md                    # Project overview and instructions
├── demo.gif                     # Trained humanoid agents comparison
├── .gitignore                   # Specifies untracked files to ignore in version control
├── LICENSE                      # MIT License for usage and distribution
├── assets/
│   └── xml_humanoid_custom.xml  # Custom MuJoCo XML file defining the humanoid model
│
├── models/                      # (Generated) Directory where trained RL models are saved
├── logs/                        # (Generated) Directory for TensorBoard logs
├── env_q_table.pkl              # (Generated) Saved Q-table for curriculum policy
```

---

## How It Works

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#how-it-works](https://github.com/rishab-agrawal/humanoid-curriculum-rl#how-it-works)

1. **Base Environment:** The Humanoid-v4 MuJoCo environment.
2. **Meta-Environment:** A Q-table that learns when to apply gravity changes during training.
3. **States to Q-Learning:**`(robot_reward, gravity_x, gravity_y)`
4. **Actions:** Changes in x and y gravity — chosen from 9 discrete pairs.
5. **Reward to Meta-Env:** Based on recent rewards + time-decay to encourage progressive challenges.

---

## Installation & Setup

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#installation--setup](https://github.com/rishab-agrawal/humanoid-curriculum-rl#installation--setup)

### 1. Clone the repository

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#1-clone-the-repository](https://github.com/rishab-agrawal/humanoid-curriculum-rl#1-clone-the-repository)

```
git clone https://github.com/Rishab-Agrawal/humanoid-curriculum-rl.git
cd humanoid-curriculum-rl
```

### 2. Create and activate a virtual environment (recommended)

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#2-create-and-activate-a-virtual-environment-recommended](https://github.com/rishab-agrawal/humanoid-curriculum-rl#2-create-and-activate-a-virtual-environment-recommended)

```
conda create -n humanoid-curriculum python=3.10
```

```
conda activate humanoid-curriculum
```

### 3. Install dependencies

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#3-install-dependencies](https://github.com/rishab-agrawal/humanoid-curriculum-rl#3-install-dependencies)

```
pip install -r requirements.txt
```

If `gymnasium[mujoco]` fails, try installing manually:

```
pip install gymnasium
pip install mujoco
```

---

## Training and Testing

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#training-and-testing](https://github.com/rishab-agrawal/humanoid-curriculum-rl#training-and-testing)

### Train a Humanoid agent with curriculum learning

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#train-a-humanoid-agent-with-curriculum-learning](https://github.com/rishab-agrawal/humanoid-curriculum-rl#train-a-humanoid-agent-with-curriculum-learning)

```
python main_humanoid_custom.py Humanoid-v4 SAC -t
```

The program will prompt:

```
Train environment? (y/n):
```

- Type `y` to allow the Q-learning environment to learn the curriculum.

IMPORTANT: You will need to manually stop the training by pressing `Ctrl + C` in the terminal when you're satisfied with the number of timesteps. A minimum of **25,000 timesteps** (defined in the code) must be completed before testing can be performed.

You can track the progress of training by looking for log tables like the one below, printed in the terminal:

```
---------------------------------
| rollout/           |          |
|    ep_len_mean     | 21.9     |
|    ep_rew_mean     | 111      |
| time/              |          |
|    episodes        | 8        |
|    fps             | 63       |
|    time_elapsed    | 2        |
|    total_timesteps | 175      |
| train/             |          |
|    actor_loss      | -23      |
|    critic_loss     | 58.7     |
|    ent_coef        | 0.978    |
|    ent_coef_loss   | -0.614   |
|    learning_rate   | 0.0003   |
|    n_updates       | 74       |
---------------------------------
```

Keep an eye on the `total_timesteps` field — once this reaches **25,000 or more**, you can safely stop training using `Ctrl + C` and proceed to testing.

### Test a trained model

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#test-a-trained-model](https://github.com/rishab-agrawal/humanoid-curriculum-rl#test-a-trained-model)

To test a trained model, use the following command format:

```
python main_humanoid_custom.py Humanoid-v4 SAC -s ./models/<MODEL_FILENAME>.zip
```

Replace `<MODEL_FILENAME>` with the name of the specific model file you would like to test. Multiple models may be saved at different training stages (e.g., `SAC_25000.zip`, `SAC_50000.zip`), and you can choose any of them depending on which checkpoint you want to evaluate.

Examples:

- To test the model saved after 25,000 timesteps: 

```
python main_humanoid_custom.py Humanoid-v4 SAC -s ./models/SAC_25000.zip
```

- To test the model saved after 50,000 timesteps: 

```
python main_humanoid_custom.py Humanoid-v4 SAC -s ./models/SAC_50000.zip
```

Make sure the selected model file exists in the `./models/` directory before running the command.

---

## Visualize Training with TensorBoard

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#visualize-training-with-tensorboard](https://github.com/rishab-agrawal/humanoid-curriculum-rl#visualize-training-with-tensorboard)

```
tensorboard --logdir logs/
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

---

## Notes

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#notes](https://github.com/rishab-agrawal/humanoid-curriculum-rl#notes)

- The perturbations are constrained to `[-2, 2]` in both x and y axes to maintain physical realism.
- Gravity is updated every episode based on the Q-table’s selected action.
- `env_q_table.pkl` stores the meta-environment's learned curriculum knowledge.
- Rewards to the Q-environment are based on robot performance and how recently that performance occurred.

---

## Future Extensions

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#future-extensions](https://github.com/rishab-agrawal/humanoid-curriculum-rl#future-extensions)

- Replace Q-table with a deep RL model (e.g., DQN or PPO) for more flexible curriculum shaping.
- Add curriculum control over other physics parameters like friction, motor strength, or joint limits.

---

## Author

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#author](https://github.com/rishab-agrawal/humanoid-curriculum-rl#author)

Rishab Agrawal

---

## License

[https://github.com/rishab-agrawal/humanoid-curriculum-rl#license](https://github.com/rishab-agrawal/humanoid-curriculum-rl#license)

This project is licensed under the MIT License. See [LICENSE](https://github.com/Rishab-Agrawal/humanoid-curriculum-rl/blob/main/LICENSE) for more details.

## About

         MuJoCo-based reinforcement learning with Q-learning-driven curriculum for robust humanoid locomotion under perturbations.       

[ieeexplore.ieee.org/document/10654466](https://ieeexplore.ieee.org/document/10654466)

### Topics

[python](https://github.com/topics/python)[reinforcement-learning](https://github.com/topics/reinforcement-learning)[simulation](https://github.com/topics/simulation)[openai-gym](https://github.com/topics/openai-gym)[humanoid-robot](https://github.com/topics/humanoid-robot)[q-table](https://github.com/topics/q-table)[mujoco](https://github.com/topics/mujoco)[curriculum-learning](https://github.com/topics/curriculum-learning)[stable-baselines3](https://github.com/topics/stable-baselines3)
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

