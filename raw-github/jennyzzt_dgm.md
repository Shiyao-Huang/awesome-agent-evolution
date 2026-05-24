---
repo: jennyzzt/dgm
url: https://github.com/jennyzzt/dgm
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - jennyzzt/dgm: Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents · GitHub

**Source**: https://github.com/jennyzzt/dgm

---

[Skip to content](https://github.com/jennyzzt/dgm#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[jennyzzt](https://github.com/jennyzzt)

/
**[dgm](https://github.com/jennyzzt/dgm)**

Public

- [Notifications](https://github.com/login?return_to=%2Fjennyzzt%2Fdgm)You must be signed in to change notification settings
- [Fork
    416](https://github.com/login?return_to=%2Fjennyzzt%2Fdgm)
- 
[Star
          2.1k](https://github.com/login?return_to=%2Fjennyzzt%2Fdgm)

[https://github.com/jennyzzt/dgm](https://github.com/jennyzzt/dgm)

[Branches](https://github.com/jennyzzt/dgm/branches)[Tags](https://github.com/jennyzzt/dgm/tags)

[https://github.com/jennyzzt/dgm/branches](https://github.com/jennyzzt/dgm/branches)[https://github.com/jennyzzt/dgm/tags](https://github.com/jennyzzt/dgm/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| analysis | analysis |  |  |
| initial | initial |  |  |
| initial_polyglot | initial_polyglot |  |  |
| misc | misc |  |  |
| polyglot | polyglot |  |  |
| prompts | prompts |  |  |
| swe_bench | swe_bench |  |  |
| tests | tests |  |  |
| tools | tools |  |  |
| utils | utils |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| DGM_outer.py | DGM_outer.py |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| coding_agent.py | coding_agent.py |  |  |
| coding_agent_polyglot.py | coding_agent_polyglot.py |  |  |
| llm.py | llm.py |  |  |
| llm_withtools.py | llm_withtools.py |  |  |
| pytest.ini | pytest.ini |  |  |
| requirements.txt | requirements.txt |  |  |
| requirements_dev.txt | requirements_dev.txt |  |  |
| self_improve_step.py | self_improve_step.py |  |  |
| test_swebench.py | test_swebench.py |  |  |
| View all files |  |  |  |

## Repository files navigation

#      Darwin Gödel Machine:
Open-Ended Evolution of Self-Improving Agents 

[https://github.com/jennyzzt/dgm#----darwin-g%C3%B6del-machineopen-ended-evolution-of-self-improving-agents](https://github.com/jennyzzt/dgm#----darwin-g%C3%B6del-machineopen-ended-evolution-of-self-improving-agents)

[https://github.com/jennyzzt/dgm/blob/main/LICENSE](https://github.com/jennyzzt/dgm/blob/main/LICENSE)[https://arxiv.org/abs/2505.22954](https://arxiv.org/abs/2505.22954)[https://sakana.ai/dgm/](https://sakana.ai/dgm/)[https://x.com/SakanaAILabs/status/1928272612431646943](https://x.com/SakanaAILabs/status/1928272612431646943)[https://drive.google.com/drive/folders/1Kcu9TbIa9Z50pJ7S6hH9omzzD1pxIYZC?usp=sharing](https://drive.google.com/drive/folders/1Kcu9TbIa9Z50pJ7S6hH9omzzD1pxIYZC?usp=sharing)

Repository for **Darwin Gödel Machine (DGM)**, a novel self-improving system that iteratively modifies its own code (thereby also improving its ability to modify its own codebase) and empirically validates each change using coding benchmarks.

[https://github.com/jennyzzt/dgm/blob/main/misc/overview.gif](https://github.com/jennyzzt/dgm/blob/main/misc/overview.gif)

## Setup

[https://github.com/jennyzzt/dgm#setup](https://github.com/jennyzzt/dgm#setup)

```
# API keys, add to ~/.bashrc
export OPENAI_API_KEY='...'
export ANTHROPIC_API_KEY='...'
```

```
# Verify that Docker is properly configured in your environment.
docker run hello-world
 
# If a permission error occurs, add the user to the Docker group
sudo usermod -aG docker $USER
newgrp docker
```

```
# Install dependencies
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Optional: for running analysis
sudo apt-get install graphviz graphviz-dev
pip install -r requirements_dev.txt
```

```
# Clone SWE-bench
cd swe_bench
git clone https://github.com/princeton-nlp/SWE-bench.git
cd SWE-bench
git checkout dc4c087c2b9e4cefebf2e3d201d27e36
pip install -e .
cd ../../

# Prepare Polyglot
# Make sure git is properly configured in your environment with username and email
python -m polyglot.prepare_polyglot_dataset
```

## Running the DGM

[https://github.com/jennyzzt/dgm#running-the-dgm](https://github.com/jennyzzt/dgm#running-the-dgm)

```
python DGM_outer.py
```

By default, outputs will be saved in the `output_dgm/` directory.

## File Structure

[https://github.com/jennyzzt/dgm#file-structure](https://github.com/jennyzzt/dgm#file-structure)

- `analysis/` scripts used for plotting and analysis
- `initial/` SWE-bench logs and performance of the initial agent
- `initial_polyglot/` Polyglot logs and performance of the initial agent
- `swe_bench/` code needed for SWE-bench evaluation
- `polyglot/` code needed for Polyglot evaluation
- `prompts/` prompts used for foundation models
- `tests/` tests for the DGM system
- `tools/` tools available to the foundation models
- `coding_agent.py` main implementation of the initial coding agent
- `DGM_outer.py` entry point for running the DGM algorithm

## Logs from Experiments

[https://github.com/jennyzzt/dgm#logs-from-experiments](https://github.com/jennyzzt/dgm#logs-from-experiments)

This [google drive folder](https://drive.google.com/drive/folders/1Kcu9TbIa9Z50pJ7S6hH9omzzD1pxIYZC?usp=sharing) contains all the foundation model output logs from the experiments shown in the paper.

## Safety Consideration

[https://github.com/jennyzzt/dgm#safety-consideration](https://github.com/jennyzzt/dgm#safety-consideration)

Warning

This repository involves executing untrusted, model-generated code. We strongly advise users to be aware of the associated safety risks. While it is highly unlikely that such code will perform overtly malicious actions under our current settings and with the models we use, it may still behave destructively due to limitations in model capability or alignment. By using this repository, you acknowledge and accept these risks.

## Acknowledgement

[https://github.com/jennyzzt/dgm#acknowledgement](https://github.com/jennyzzt/dgm#acknowledgement)

The evaluation framework implementations are based on the [SWE-bench](https://github.com/swe-bench/SWE-bench) and [polyglot-benchmark](https://github.com/Aider-AI/polyglot-benchmark) repositories.

## Citing

[https://github.com/jennyzzt/dgm#citing](https://github.com/jennyzzt/dgm#citing)

If you find this project useful, please consider citing:

```
@article{zhang2025darwin,
  title={Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents},
  author={Zhang, Jenny and Hu, Shengran and Lu, Cong and Lange, Robert and Clune, Jeff},
  journal={arXiv preprint arXiv:2505.22954},
  year={2025}
}
```

## About

         Darwin Gödel Machine: Open-Ended Evolution of Self-Improving Agents       

### Resources

[Readme](https://github.com/jennyzzt/dgm#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/jennyzzt/dgm#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/jennyzzt/dgm/activity)

### Stars

[2.1k
        stars](https://github.com/jennyzzt/dgm/stargazers)

### Watchers

[51
        watching](https://github.com/jennyzzt/dgm/watchers)

### Forks

[416
        forks](https://github.com/jennyzzt/dgm/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fjennyzzt%2Fdgm&report=jennyzzt+%28user%29)

## [Contributors](https://github.com/jennyzzt/dgm/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          55.6%](https://github.com/jennyzzt/dgm/search?l=python)
- [Shell
          44.3%](https://github.com/jennyzzt/dgm/search?l=shell)
- [Dockerfile
          0.1%](https://github.com/jennyzzt/dgm/search?l=dockerfile)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

