---
repo: naivoder/mctsr
url: https://github.com/naivoder/mctsr
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - naivoder/MCTSr: Monte Carlo Tree Search Self-Refine (MCTSr) · GitHub

**Source**: https://github.com/naivoder/mctsr

---

[Skip to content](https://github.com/naivoder/mctsr#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[naivoder](https://github.com/naivoder)

/
**[MCTSr](https://github.com/naivoder/MCTSr)**

Public

- [Notifications](https://github.com/login?return_to=%2Fnaivoder%2FMCTSr)You must be signed in to change notification settings
- [Fork
    2](https://github.com/login?return_to=%2Fnaivoder%2FMCTSr)
- 
[Star
          22](https://github.com/login?return_to=%2Fnaivoder%2FMCTSr)

[https://github.com/naivoder/MCTSr](https://github.com/naivoder/MCTSr)

[Branches](https://github.com/naivoder/MCTSr/branches)[Tags](https://github.com/naivoder/MCTSr/tags)

[https://github.com/naivoder/MCTSr/branches](https://github.com/naivoder/MCTSr/branches)[https://github.com/naivoder/MCTSr/tags](https://github.com/naivoder/MCTSr/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| extractor.py | extractor.py |  |  |
| generate.py | generate.py |  |  |
| main.py | main.py |  |  |
| mctsr.py | mctsr.py |  |  |
| requirements.txt | requirements.txt |  |  |
| utils.py | utils.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Monte Carlo Tree Search with Self-Refine

[https://github.com/naivoder/mctsr#monte-carlo-tree-search-with-self-refine](https://github.com/naivoder/mctsr#monte-carlo-tree-search-with-self-refine)

This repository contains an implementation of [Monte Carlo Tree Search (MCTS) with self-refinement](https://arxiv.org/pdf/2406.07394), using a locally hosted LLaMA instance for generating answers. This implementation specifically focuses on handling `gsm8k` and `MATH` datasets using the Hugging Face `datasets` library.

❗Note: This repository is *very* much based on [Trotsky1997's implementation](https://github.com/trotsky1997/MathBlackBox), which is (presumably) much better tested than mine. If you're looking for working code I recommend using theirs, but if you're looking to learn more by getting your hands dirty, I would love to collaborate!

## Installation

[https://github.com/naivoder/mctsr#installation](https://github.com/naivoder/mctsr#installation)

1. 

**Clone the repository:**

```
git clone https://github.com/naivoder/MCTSr.git
cd MCTSr/
```

2. 

**Set up a virtual environment and activate it:**

```
conda create -n mctsr python=3.11     # Use conda like a sane person
python -m venv env                    # Otherwise use venv
source env/bin/activate               # On Windows use `env\Scriptsctivate`
```

Please use conda. Why does anyone use venv anymore??

3. 

**Install the required dependencies:**

```
pip install -r requirements.txt
```

4. 

**Download and set up the LLaMA model:**

Follow the instructions provided by Hugging Face to download and set up the LLaMA model.

## Usage

[https://github.com/naivoder/mctsr#usage](https://github.com/naivoder/mctsr#usage)

1. 

**Modify the `MODEL_NAME` and `DATA_NAME` variables in `main.py` as needed:**

```
MODEL_NAME = "meta-llama/Meta-Llama-3-8B"
DATA_NAME = "gsm8k-rs-mistral7B"
```

2. 

**Run the main script:**

```
python main.py
```

## About

         Monte Carlo Tree Search Self-Refine (MCTSr)       

[cameronredovian.com](https://cameronredovian.com)

### Topics

[pytorch](https://github.com/topics/pytorch)[monte-carlo-tree-search](https://github.com/topics/monte-carlo-tree-search)[self-reflection](https://github.com/topics/self-reflection)[llm](https://github.com/topics/llm)[chain-of-thought](https://github.com/topics/chain-of-thought)[chain-of-thought-reasoning](https://github.com/topics/chain-of-thought-reasoning)[llama3](https://github.com/topics/llama3)[mctsr](https://github.com/topics/mctsr)

### Resources

[Readme](https://github.com/naivoder/mctsr#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/naivoder/MCTSr/activity)

### Stars

[22
        stars](https://github.com/naivoder/MCTSr/stargazers)

### Watchers

[1
        watching](https://github.com/naivoder/MCTSr/watchers)

### Forks

[2
        forks](https://github.com/naivoder/MCTSr/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fnaivoder%2FMCTSr&report=naivoder+%28user%29)

## [Releases](https://github.com/naivoder/MCTSr/releases)

No releases published

## [Packages
      0](https://github.com/users/naivoder/packages?repo_name=MCTSr)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/naivoder/MCTSr/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          100.0%](https://github.com/naivoder/MCTSr/search?l=python)

     You can’t perform that action at this time.
