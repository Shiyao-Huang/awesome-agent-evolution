---
repo: luh-ai-devnerds/llm-guided-curriculum-rl
url: https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - LUH-AI-devnerds/llm-guided-curriculum-rl · GitHub

**Source**: https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl

---

[Skip to content](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[LUH-AI-devnerds](https://github.com/LUH-AI-devnerds)

/
**[llm-guided-curriculum-rl](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl)**

Public

- [Notifications](https://github.com/login?return_to=%2FLUH-AI-devnerds%2Fllm-guided-curriculum-rl)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FLUH-AI-devnerds%2Fllm-guided-curriculum-rl)
- 
[Star
          1](https://github.com/login?return_to=%2FLUH-AI-devnerds%2Fllm-guided-curriculum-rl)

[https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl)

[Branches](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/branches)[Tags](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/tags)

[https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/branches](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/branches)[https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/tags](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History52 Commits52 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| curriculum_seed_analysis | curriculum_seed_analysis |  |  |
| experiments | experiments |  |  |
| logs | logs |  |  |
| multi_seed_results_20250816_121202 | multi_seed_results_20250816_121202 |  |  |
| no_curriculum_analysis | no_curriculum_analysis |  |  |
| paper | paper |  |  |
| scripts | scripts |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| blackjack_gui.py | blackjack_gui.py |  |  |
| curriculum_agent_dqn_0.pth | curriculum_agent_dqn_0.pth |  |  |
| environment.yml | environment.yml |  |  |
| logo.png | logo.png |  |  |
| no-curriculum.sh | no-curriculum.sh |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| test.py | test.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# LLM-Guided Curriculum Learning for Multi-Agent Reinforcement Learning

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#llm-guided-curriculum-learning-for-multi-agent-reinforcement-learning](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#llm-guided-curriculum-learning-for-multi-agent-reinforcement-learning)

[https://arxiv.org/abs/2604.00076](https://arxiv.org/abs/2604.00076)[https://arxiv.org/pdf/2604.00076](https://arxiv.org/pdf/2604.00076)[https://huggingface.co/papers/2604.00076](https://huggingface.co/papers/2604.00076)

[https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/blob/main/logo.png](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/blob/main/logo.png)

A research framework for studying LLM-guided curriculum learning in multi-agent reinforcement learning (Blackjack). The system progressively unlocks actions and adjusts targets based on stage-wise performance, enabling efficient skill acquisition for DQN and Tabular Q-learning agents.

## Overview

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#overview](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#overview)

- Curriculum stages introduce actions in increasing complexity: Stand/Hit → +Double → +Split → +Surrender/Insurance
- An LLM (Gemini) proposes stages and thresholds from concise logs (win rate, reward, error modes) and returns a JSON stage spec
- Multi-agent training: DQN with replay/target network; Tabular Q-learning baseline
- Environment: full casino rules; finite and infinite shoe; card-count features (running/true count)
- Logging: per-stage JSON; analysis scripts produce tables/plots and summaries

## Publication

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#publication](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#publication)

**Learning to Play Blackjack: A Curriculum Learning Perspective** — Amirreza Alasti, Efe Erdal, Yücel Celik, Theresa Eimer. [arXiv:2604.00076](https://arxiv.org/abs/2604.00076) (31 Mar 2026).

- PDF: [arXiv PDF](https://arxiv.org/pdf/2604.00076)
- Citation: [paper/CITATION.bib](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/blob/main/paper/CITATION.bib)

Badges above link to the abstract, PDF, and the [Hugging Face paper page](https://huggingface.co/papers/2604.00076) for this arXiv ID (create or claim the page from your HF account if it is not live yet). To surface on [Trending Papers](https://huggingface.co/papers/trending), the paper needs to be indexed on the hub and receive upvotes from the community.

## Installation

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#installation](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#installation)

```
# Option A: Conda
conda env create -f environment.yml
conda activate llm-guided-curriculum-rl

# Option B: pip
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```

Set your Google AI API key (for curriculum mode):

```
export GOOGLE_AI_API_KEY=your_key_here
```

## Reproducible Runs

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#reproducible-runs](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#reproducible-runs)

### 1) Curriculum learning (LLM-guided)

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#1-curriculum-learning-llm-guided](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#1-curriculum-learning-llm-guided)

```
# 8-deck, 90% penetration, default episodes
python scripts/curriculum_multi_agent_rl.py \
  --episodes 500000 --eval-episodes 100000 --deck-type 8-deck --penetration 0.9
```

- Produces logs under `logs/` with stage-wise evaluation and a report JSON

### 2) Standard (no curriculum)

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#2-standard-no-curriculum](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#2-standard-no-curriculum)

```
python scripts/curriculum_multi_agent_rl.py --no-curriculum \
  --episodes 500000 --eval-episodes 100000 --deck-type 8-deck --penetration 0.9
```

### 3) Analysis

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#3-analysis](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#3-analysis)

```
# Single run summary
python scripts/analyze_logs.py logs/<run>/run_summary_*.json

# Comparative/aggregate analysis
python scripts/analyze_logs.py --comparative logs/
```

## LLM Prompting (High-Level)

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#llm-prompting-high-level](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#llm-prompting-high-level)

- Model: Gemini 2.0 Flash, temperature 0.2, top-p 0.9
- Prompt includes: deck config, action vocabulary and complexity, last-stage summary (win rate, avg reward, bust rate, key errors), and a strict JSON schema
- Response is validated against a schema; thresholds are clamped to [0.35, 0.50]; malformed outputs are retried with a corrective system prompt
- Offline fallback: if the key is missing or the call fails, continue using the last valid curriculum file

## Key Results (8-deck, 0.9 penetration)

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#key-results-8-deck-09-penetration](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#key-results-8-deck-09-penetration)

- DQN achieves best performance at Stage 4 (Full Basic: Stand/Hit/Double/Split): ~49.4% win rate (vs. ~42.3% baseline without curriculum)
- Later stages adding Insurance/Surrender can reduce performance without strong count signals
- Training efficiency improves substantially vs. no-curriculum by narrowing early exploration

## Project Structure

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#project-structure](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#project-structure)

```
llm-guided-curriculum-rl/
├── scripts/
│   ├── curriculum_multi_agent_rl.py     # main entry; curriculum and baseline
│   ├── MultiAgentStandardSystem.py      # standard training helper
│   ├── MultiAgentCurriculumSystem.py    # curriculum implementation
│   ├── RLAgent.py                       # DQN and Tabular agents
│   ├── BlackJackENV.py                  # environment with full rules
│   ├── LLM.py                           # Gemini client
│   ├── LLMGuidedCurriculum.py           # LLM-driven stage generation
│   └── analyze_logs.py                  # analysis and plots
├── logs/                                # run outputs (evaluation/training/reports/analysis)
├── paper/                               # citation (arXiv 2604.00076)
├── environment.yml / requirements.txt   # dependencies
└── README.md
```

## Configuration Notes

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#configuration-notes](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#configuration-notes)

- Environment: `deck_type ∈ {infinite, 1-deck, 4-deck, 8-deck}`, `penetration∈(0,1)`; dealer stands on 17+
- Actions: Stand(0), Hit(1), Double(2), Split(3), Early Surrender(4), Insurance(5)
- Rewards: +1 win, 0 push, −1 loss, +1.5 blackjack; doubles multiply payout; surrender −0.5; insurance conditional payout
- DQN defaults: lr=5e-4–1e-3, target update=1k, replay=50k–100k, epsilon min=0.05

## Releasing Artifacts

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#releasing-artifacts](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#releasing-artifacts)

- We publish: trained weights, per-stage evaluation JSONs, analysis figures
- See `logs/` for date-stamped runs and reports

## License

[https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#license](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#license)

MIT License (see `LICENSE`).

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/luh-ai-devnerds/llm-guided-curriculum-rl#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/activity)

[Custom properties](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/custom-properties)

### Stars

[1
        star](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/stargazers)

### Watchers

[0
        watching](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/watchers)

### Forks

[0
        forks](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FLUH-AI-devnerds%2Fllm-guided-curriculum-rl&report=LUH-AI-devnerds+%28user%29)

## [Releases](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/releases)

No releases published

## [Packages
      0](https://github.com/orgs/LUH-AI-devnerds/packages?repo_name=llm-guided-curriculum-rl)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          98.9%](https://github.com/LUH-AI-devnerds/llm-guided-curriculum-rl/search?l=python)
- 

Other

1.1%

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

