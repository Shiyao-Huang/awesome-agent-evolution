---
repo: emartin59/text-game-llm-improver
url: https://github.com/emartin59/text-game-llm-improver
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - emartin59/text-game-llm-improver: Code and Models for "Evolving LLMs Through Text-Based Self-Play: Achieving Emergent Performance", an AI research paper from Eric Martin · GitHub

**Source**: https://github.com/emartin59/text-game-llm-improver

---

[Skip to content](https://github.com/emartin59/text-game-llm-improver#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[emartin59](https://github.com/emartin59)

/
**[text-game-llm-improver](https://github.com/emartin59/text-game-llm-improver)**

Public

- [Notifications](https://github.com/login?return_to=%2Femartin59%2Ftext-game-llm-improver)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Femartin59%2Ftext-game-llm-improver)
- 
[Star
          3](https://github.com/login?return_to=%2Femartin59%2Ftext-game-llm-improver)

[https://github.com/emartin59/text-game-llm-improver](https://github.com/emartin59/text-game-llm-improver)

[Branches](https://github.com/emartin59/text-game-llm-improver/branches)[Tags](https://github.com/emartin59/text-game-llm-improver/tags)

[https://github.com/emartin59/text-game-llm-improver/branches](https://github.com/emartin59/text-game-llm-improver/branches)[https://github.com/emartin59/text-game-llm-improver/tags](https://github.com/emartin59/text-game-llm-improver/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History9 Commits9 Commits |  |  |  |
| 500-game-challenge-run-output.txt | 500-game-challenge-run-output.txt |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| Sample-Output.txt | Sample-Output.txt |  |  |
| evolving_llms_through_text-based_self-play.pdf | evolving_llms_through_text-based_self-play.pdf |  |  |
| game-model-showdown-1000-games.py | game-model-showdown-1000-games.py |  |  |
| text-based-game-LLM-trainer.py | text-based-game-LLM-trainer.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# text-game-llm-improver

[https://github.com/emartin59/text-game-llm-improver#text-game-llm-improver](https://github.com/emartin59/text-game-llm-improver#text-game-llm-improver)

Code and Models for *"Evolving LLMs through Text-Based Self-Play: Achieving Emergent Performance"*, an AI research paper by Eric Martin.

## Overview

[https://github.com/emartin59/text-game-llm-improver#overview](https://github.com/emartin59/text-game-llm-improver#overview)

This repository contains the implementation of a pioneering framework where Large Language Models (LLMs) autonomously evolve through self-play in a text-based, multi-agent game that blends cooperation and competition. The project demonstrates how LLM-controlled bots can navigate a grid, harvest resources, communicate, and clone, iteratively refining strategies via parameterized rivalry.

Starting with TinyLlama, our proof of concept (POC) yielded 67 enhanced iterations in 47 hours, with the final model achieving an 89.4% win rate against the baseline in 500 randomized games. This framework serves as a testbed for multi-agent dynamics, autonomous decision-making, and emergent intelligence.

## Repository Contents

[https://github.com/emartin59/text-game-llm-improver#repository-contents](https://github.com/emartin59/text-game-llm-improver#repository-contents)

- **`text-based-game-LLM-trainer.py`**: The main script for running the self-play framework, training LLMs, and simulating the text-based game.
- **`game-model-showdown-1000-games.py`**: A script to run a showdown between models for 1000 games.
- **`LICENSE`**: The MIT License for this project.
- **`README.md`**: This file.

## Models

[https://github.com/emartin59/text-game-llm-improver#models](https://github.com/emartin59/text-game-llm-improver#models)

The trained 8-bit models (including the base TinyLama model and 3 of the 67 iterations derived from TinyLlama) are available for download at the following Google Drive link:

[Download Models](https://drive.google.com/drive/folders/1GkmEAckJUo9fFoUJgW9NRyS39F6umCtO?usp=sharing)

## Getting Started

[https://github.com/emartin59/text-game-llm-improver#getting-started](https://github.com/emartin59/text-game-llm-improver#getting-started)

### Prerequisites

[https://github.com/emartin59/text-game-llm-improver#prerequisites](https://github.com/emartin59/text-game-llm-improver#prerequisites)

- Python 3.12+
- PyTorch 2.6+
- Transformers library (Hugging Face)
- A CUDA-capable GPU (e.g., NVIDIA RTX with at least 6GB VRAM)
- Conda environment recommended

### Setup

[https://github.com/emartin59/text-game-llm-improver#setup](https://github.com/emartin59/text-game-llm-improver#setup)

1. Clone this repository: 

```
git clone https://github.com/emartin59/text-game-llm-improver.git
cd text-game-llm-improver
```

#### Install dependencies:

[https://github.com/emartin59/text-game-llm-improver#install-dependencies](https://github.com/emartin59/text-game-llm-improver#install-dependencies)

bash

conda create -n llm-game python=3.12 conda activate llm-game pip install torch transformers

Optionally download the models from the Google Drive link and place them in a directory of your choice (e.g., models/). These include the base model and some of the models created in the research run, reproduced here for testing and for comparison to models you might create.

[Download Models](https://drive.google.com/drive/folders/1GkmEAckJUo9fFoUJgW9NRyS39F6umCtO?usp=sharing)

#### Running the Code

[https://github.com/emartin59/text-game-llm-improver#running-the-code](https://github.com/emartin59/text-game-llm-improver#running-the-code)

To run the main self-play training loop using text-based-game-LLM-trainer.py: bash

python text-based-game-LLM-trainer.py

This script will: Load the TinyLlama-1.1B-Chat-v1.0 model with 8-bit quantization.

Simulate games on a 7×7 grid (9×9 with boundary walls).

Evolve the LLM through self-play by creating modified clones and evaluating their performance.

Save winning models to directories like New-LLM-Winner-01/.

To run a showdown between two models for 1000 games: bash

python game-model-showdown-1000-games.py

Hardware Requirements The proof of concept was run on: Windows PC

6GB NVIDIA RTX GPU

64GB RAM

AMD Ryzen 7 7700 (3.80 GHz)

## Paper Results

[https://github.com/emartin59/text-game-llm-improver#paper-results](https://github.com/emartin59/text-game-llm-improver#paper-results)

Iterations: 67 improved LLMs over 47 hours.

Performance: The final model achieved an 89.4% win rate against the baseline TinyLlama in 500 randomized games (p < 0.001, t-test).

Emergent Behaviors: While complex tactics like alliances or sabotage did not seem to emerge with TinyLlama, the framework shows potential for strategic optimization with more advanced models.

## Future Work

[https://github.com/emartin59/text-game-llm-improver#future-work](https://github.com/emartin59/text-game-llm-improver#future-work)

Scale to larger grids (e.g., 500×500) or 3D environments.

Test with advanced LLMs (e.g., models from OpenAI, xAI, or Anthropic).

Integrate reinforcement learning techniques like PPO or Q-learning for faster convergence.

## License

[https://github.com/emartin59/text-game-llm-improver#license](https://github.com/emartin59/text-game-llm-improver#license)

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

[https://github.com/emartin59/text-game-llm-improver#acknowledgments](https://github.com/emartin59/text-game-llm-improver#acknowledgments)

Thanks to the open-source community for TinyLlama.

Inspired by DeepMind's AlphaZero project.

## About

         Code and Models for "Evolving LLMs Through Text-Based Self-Play: Achieving Emergent Performance", an AI research paper from Eric Martin       

[ai.vixra.org/abs/2506.0018](https://ai.vixra.org/abs/2506.0018)

### Resources

[Readme](https://github.com/emartin59/text-game-llm-improver#readme-ov-file)

### License

[MIT license](https://github.com/emartin59/text-game-llm-improver#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/emartin59/text-game-llm-improver/activity)

### Stars

[3
        stars](https://github.com/emartin59/text-game-llm-improver/stargazers)

### Watchers

[1
        watching](https://github.com/emartin59/text-game-llm-improver/watchers)

### Forks

[1
        fork](https://github.com/emartin59/text-game-llm-improver/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Femartin59%2Ftext-game-llm-improver&report=emartin59+%28user%29)

## [Releases](https://github.com/emartin59/text-game-llm-improver/releases)

No releases published

## [Packages
      0](https://github.com/users/emartin59/packages?repo_name=text-game-llm-improver)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/emartin59/text-game-llm-improver/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/emartin59/text-game-llm-improver/search?l=python)

     You can’t perform that action at this time.
