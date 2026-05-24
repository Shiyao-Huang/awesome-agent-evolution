---
repo: facebookresearch/hyperagents
url: https://github.com/facebookresearch/hyperagents
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - facebookresearch/HyperAgents: Self-referential self-improving agents that can optimize for any computable task · GitHub

**Source**: https://github.com/facebookresearch/hyperagents

---

[Skip to content](https://github.com/facebookresearch/hyperagents#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[facebookresearch](https://github.com/facebookresearch)

/
**[HyperAgents](https://github.com/facebookresearch/HyperAgents)**

Public

- [Notifications](https://github.com/login?return_to=%2Ffacebookresearch%2FHyperAgents)You must be signed in to change notification settings
- [Fork
    323](https://github.com/login?return_to=%2Ffacebookresearch%2FHyperAgents)
- 
[Star
          2.5k](https://github.com/login?return_to=%2Ffacebookresearch%2FHyperAgents)

[https://github.com/facebookresearch/HyperAgents](https://github.com/facebookresearch/HyperAgents)

[Branches](https://github.com/facebookresearch/HyperAgents/branches)[Tags](https://github.com/facebookresearch/HyperAgents/tags)

[https://github.com/facebookresearch/HyperAgents/branches](https://github.com/facebookresearch/HyperAgents/branches)[https://github.com/facebookresearch/HyperAgents/tags](https://github.com/facebookresearch/HyperAgents/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History9 Commits9 Commits |  |  |  |
| agent | agent |  |  |
| analysis | analysis |  |  |
| baselines | baselines |  |  |
| domains | domains |  |  |
| utils | utils |  |  |
| .gitignore | .gitignore |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE.md | LICENSE.md |  |  |
| README.md | README.md |  |  |
| ensemble.py | ensemble.py |  |  |
| generate_loop.py | generate_loop.py |  |  |
| meta_agent.py | meta_agent.py |  |  |
| requirements.txt | requirements.txt |  |  |
| requirements_dev.txt | requirements_dev.txt |  |  |
| run_meta_agent.py | run_meta_agent.py |  |  |
| run_task_agent.py | run_task_agent.py |  |  |
| select_next_parent.py | select_next_parent.py |  |  |
| setup_initial.sh | setup_initial.sh |  |  |
| task_agent.py | task_agent.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# HyperAgents

[https://github.com/facebookresearch/hyperagents#hyperagents](https://github.com/facebookresearch/hyperagents#hyperagents)

Self-referential self-improving agents that can optimize for any computable task

[https://github.com/facebookresearch/HyperAgents/blob/main/LICENSE.md](https://github.com/facebookresearch/HyperAgents/blob/main/LICENSE.md)[https://arxiv.org/abs/2603.19461](https://arxiv.org/abs/2603.19461)[https://ai.meta.com/research/publications/hyperagents/](https://ai.meta.com/research/publications/hyperagents/)[https://x.com/jennyzhangzt/status/2036099935083618487](https://x.com/jennyzhangzt/status/2036099935083618487)

---

## Setup

[https://github.com/facebookresearch/hyperagents#setup](https://github.com/facebookresearch/hyperagents#setup)

```
# API keys, put these into .env file
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...
GEMINI_API_KEY=...
```

```
# Install things
sudo dnf install -y python3.12-devel
sudo dnf install -y graphviz graphviz-devel cmake ninja-build bzip2-devel zlib-devel ncurses-devel libffi-devel
```

```
# Create virtual environment
python3.12 -m venv venv_nat
source venv_nat/bin/activate
pip install -r requirements.txt
pip install -r requirements_dev.txt
# To build the docker container
docker build --network=host -t hyperagents .
```

```
# Setup initial agents
bash ./setup_initial.sh
```

## Running HyperAgents

[https://github.com/facebookresearch/hyperagents#running-hyperagents](https://github.com/facebookresearch/hyperagents#running-hyperagents)

```
# See the script for args, and baseline selections
python generate_loop.py --domains <domain>
```

By default, outputs will be saved in `outputs/` directory.

## File Structure

[https://github.com/facebookresearch/hyperagents#file-structure](https://github.com/facebookresearch/hyperagents#file-structure)

- `agent/` code for using foundation models
- `analysis/` scripts used for plotting and analysis
- `domains/` code for each domain
- `utils/` common code used in the repo
- `run_meta_agent.py` script to help run the meta agent and get the diffs
- `meta_agent.py` main implementation of the meta agent
- `task_agent.py` main implementation of the task agent
- `generate_loop.py` entry point for running the algorithm

## Logs from Experiments

[https://github.com/facebookresearch/hyperagents#logs-from-experiments](https://github.com/facebookresearch/hyperagents#logs-from-experiments)

The experiment logs can be downloaded here: [https://drive.google.com/drive/folders/164fKQWgLM18foOzSnpv0F_I3TNpX8u8-?usp=sharing](https://drive.google.com/drive/folders/164fKQWgLM18foOzSnpv0F_I3TNpX8u8-?usp=sharing)

## Safety Consideration

[https://github.com/facebookresearch/hyperagents#safety-consideration](https://github.com/facebookresearch/hyperagents#safety-consideration)

Warning

This repository involves executing untrusted, model-generated code. We strongly advise users to be aware of the associated safety risks. While it is highly unlikely that such code will perform overtly malicious actions under our current settings and with the models we use, it may still behave destructively due to limitations in model capability or alignment. By using this repository, you acknowledge and accept these risks.

## Citing

[https://github.com/facebookresearch/hyperagents#citing](https://github.com/facebookresearch/hyperagents#citing)

If you find this project useful, please consider citing:

```
@misc{zhang2026hyperagents,
      title={Hyperagents}, 
      author={Jenny Zhang and Bingchen Zhao and Wannan Yang and Jakob Foerster and Jeff Clune and Minqi Jiang and Sam Devlin and Tatiana Shavrina},
      year={2026},
      eprint={2603.19461},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2603.19461}, 
}
```

## About

         Self-referential self-improving agents that can optimize for any computable task       

### Resources

[Readme](https://github.com/facebookresearch/hyperagents#readme-ov-file)

### License

[View license](https://github.com/facebookresearch/hyperagents#License-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/facebookresearch/hyperagents#coc-ov-file)

### Contributing

[Contributing](https://github.com/facebookresearch/hyperagents#contributing-ov-file)

### Security policy

[Security policy](https://github.com/facebookresearch/hyperagents#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/facebookresearch/HyperAgents/activity)

[Custom properties](https://github.com/facebookresearch/HyperAgents/custom-properties)

### Stars

[2.5k
        stars](https://github.com/facebookresearch/HyperAgents/stargazers)

### Watchers

[29
        watching](https://github.com/facebookresearch/HyperAgents/watchers)

### Forks

[323
        forks](https://github.com/facebookresearch/HyperAgents/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Ffacebookresearch%2FHyperAgents&report=facebookresearch+%28user%29)

## [Releases](https://github.com/facebookresearch/HyperAgents/releases)

No releases published

## [Packages
      0](https://github.com/orgs/facebookresearch/packages?repo_name=HyperAgents)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/facebookresearch/HyperAgents/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          99.0%](https://github.com/facebookresearch/HyperAgents/search?l=python)
- 

Other

1.0%

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

