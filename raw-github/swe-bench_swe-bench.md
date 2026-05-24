---
repo: swe-bench/swe-bench
url: https://github.com/swe-bench/swe-bench
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - SWE-bench/SWE-bench: SWE-bench: Can Language Models Resolve Real-world Github Issues? · GitHub

**Source**: https://github.com/swe-bench/swe-bench

---

[Skip to content](https://github.com/swe-bench/swe-bench#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[SWE-bench](https://github.com/SWE-bench)

/
**[SWE-bench](https://github.com/SWE-bench/SWE-bench)**

Public

- [Notifications](https://github.com/login?return_to=%2FSWE-bench%2FSWE-bench)You must be signed in to change notification settings
- [Fork
    868](https://github.com/login?return_to=%2FSWE-bench%2FSWE-bench)
- 
[Star
          5k](https://github.com/login?return_to=%2FSWE-bench%2FSWE-bench)

[https://github.com/SWE-bench/SWE-bench](https://github.com/SWE-bench/SWE-bench)

[Branches](https://github.com/SWE-bench/SWE-bench/branches)[Tags](https://github.com/SWE-bench/SWE-bench/tags)

[https://github.com/SWE-bench/SWE-bench/branches](https://github.com/SWE-bench/SWE-bench/branches)[https://github.com/SWE-bench/SWE-bench/tags](https://github.com/SWE-bench/SWE-bench/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History608 Commits608 Commits |  |  |  |
| .github | .github |  |  |
| docs | docs |  |  |
| swebench | swebench |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| codecov.yml | codecov.yml |  |  |
| mkdocs.yml | mkdocs.yml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| View all files |  |  |  |

## Repository files navigation

[http://swe-bench.github.io](http://swe-bench.github.io)

**[ [Read the Docs](https://swebench.com/SWE-bench/) ]**

[日本語](https://github.com/SWE-bench/SWE-bench/blob/main/docs/other_languages/README_JP.md) |   [中文简体](https://github.com/SWE-bench/SWE-bench/blob/main/docs/other_languages/README_CN.md) |   [中文繁體](https://github.com/SWE-bench/SWE-bench/blob/main/docs/other_languages/README_TW.md)

[https://www.python.org/](https://www.python.org/)[https://copyright.princeton.edu/policy](https://copyright.princeton.edu/policy)[https://badge.fury.io/py/swebench](https://badge.fury.io/py/swebench)

---

Code and data for the following works:

- [ICLR 2025] [SWE-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?](https://arxiv.org/abs/2410.03859)
- [ICLR 2024 Oral] [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770)

## 📰 News

[https://github.com/swe-bench/swe-bench#-news](https://github.com/swe-bench/swe-bench#-news)

- **[Jan. 13, 2025]**: We've integrated [SWE-bench Multimodal](https://swebench.com/multimodal) ([paper](https://arxiv.org/abs/2410.03859), [dataset](https://huggingface.co/datasets/SWE-bench/SWE-bench_Multimodal)) into this repository! Unlike SWE-bench, we've kept evaluation for the test split *private*. Submit to the leaderboard using [sb-cli](https://github.com/swe-bench/sb-cli/tree/main), our new cloud-based evaluation tool.
- **[Jan. 11, 2025]**: Thanks to [Modal](https://modal.com/), you can now run evaluations entirely on the cloud! See [here](https://github.com/swe-bench/SWE-bench/blob/main/docs/assets/evaluation.md#%EF%B8%8F-evaluation-with-modal) for more details.
- **[Aug. 13, 2024]**: Introducing *SWE-bench Verified*! Part 2 of our collaboration with [OpenAI Preparedness](https://openai.com/preparedness/). A subset of 500 problems that real software engineers have confirmed are solvable. Check out more in the [report](https://openai.com/index/introducing-swe-bench-verified/)!
- **[Jun. 27, 2024]**: We have an exciting update for SWE-bench - with support from [OpenAI's Preparedness](https://openai.com/preparedness/) team: We're moving to a fully containerized evaluation harness using Docker for more reproducible evaluations! Read more in our [report](https://github.com/swe-bench/SWE-bench/blob/main/docs/20240627_docker/README.md).
- **[Apr. 2, 2024]**: We have released [SWE-agent](https://github.com/SWE-agent/SWE-agent), which sets the state-of-the-art on the full SWE-bench test set! ([Tweet 🔗](https://twitter.com/jyangballin/status/1775114444370051582))
- **[Jan. 16, 2024]**: SWE-bench has been accepted to ICLR 2024 as an oral presentation! ([OpenReview 🔗](https://openreview.net/forum?id=VTF8yNQM66))

## 👋 Overview

[https://github.com/swe-bench/swe-bench#-overview](https://github.com/swe-bench/swe-bench#-overview)

SWE-bench is a benchmark for evaluating large language models on real world software issues collected from GitHub. Given a *codebase* and an *issue*, a language model is tasked with generating a *patch* that resolves the described problem.

[https://github.com/SWE-bench/SWE-bench/blob/main/docs/assets/figures/teaser.png](https://github.com/SWE-bench/SWE-bench/blob/main/docs/assets/figures/teaser.png)

To access SWE-bench, copy and run the following code:

```
from datasets import load_dataset
swebench = load_dataset('princeton-nlp/SWE-bench', split='test')
```

## 🚀 Set Up

[https://github.com/swe-bench/swe-bench#-set-up](https://github.com/swe-bench/swe-bench#-set-up)

SWE-bench uses Docker for reproducible evaluations. Follow the instructions in the [Docker setup guide](https://docs.docker.com/engine/install/) to install Docker on your machine. If you're setting up on Linux, we recommend seeing the [post-installation steps](https://docs.docker.com/engine/install/linux-postinstall/) as well.

Finally, to build SWE-bench from source, follow these steps:

```
git clone git@github.com:princeton-nlp/SWE-bench.git
cd SWE-bench
pip install -e .
```

Test your installation by running:

```
python -m swebench.harness.run_evaluation \
    --predictions_path gold \
    --max_workers 1 \
    --instance_ids sympy__sympy-20590 \
    --run_id validate-gold
```

Note

If using a MacOS M-series or other ARM-based systems, add `--namespace ''` to the above script. By default, the evaluation script pulls images (built for Linux) from [DockerHub](https://hub.docker.com/u/swebench). Adding `--namespace ''` will cause evaluation images to be built locally instead.

## 💽 Usage

[https://github.com/swe-bench/swe-bench#-usage](https://github.com/swe-bench/swe-bench#-usage)

Evaluate patch predictions on SWE-bench Lite with the following command:

```
python -m swebench.harness.run_evaluation \
    --dataset_name princeton-nlp/SWE-bench_Lite \
    --predictions_path <path_to_predictions> \
    --max_workers <num_workers> \
    --run_id <run_id>
    # use --predictions_path 'gold' to verify the gold patches
    # use --run_id to name the evaluation run
    # use --modal true to run on Modal
```

This command will generate docker build logs (`logs/build_images`) and evaluation logs (`logs/run_evaluation`) in the current directory.

The final evaluation results will be stored in the `evaluation_results` directory.

Warning

SWE-bench evaluation can be resource intensive We recommend running on an `x86_64` machine with at least 120GB of free storage, 16GB of RAM, and 8 CPU cores. We recommend using fewer than `min(0.75 * os.cpu_count(), 24)` for `--max_workers`.

If running with Docker desktop, make sure to increase your virtual disk space to ~120 free GB. Set max_workers to be consistent with the above for the CPUs available to Docker.

Support for `arm64` machines is experimental.

To see the full list of arguments for the evaluation harness, run:

```
python -m swebench.harness.run_evaluation --help
```

See the [evaluation tutorial](https://github.com/SWE-bench/SWE-bench/blob/main/docs/guides/evaluation.md) for the full rundown on datasets you can evaluate. If you're looking for non-local, cloud based evaluations, check out...

- [sb-cli](https://github.com/swe-bench/sb-cli), our tool for running evaluations automatically on AWS, or...
- Running SWE-bench evaluation on [Modal](https://modal.com/). Details [here](https://github.com/SWE-bench/SWE-bench/blob/main/docs/guides/evaluation.md#Cloud-Based-Evaluation)

Additionally, you can also:

- [Train](https://github.com/swe-bench/SWE-bench/tree/main/swebench/inference/make_datasets) your own models on our pre-processed datasets. (🆕 Check out [SWE-smith](https://swesmith.com/), a dedicated toolkit for creating SWE training data.)
- Run [inference](https://github.com/SWE-bench/SWE-bench/blob/main/docs/reference/inference.md) on existing models (both local and API models). The inference step is where you give the model a repo + issue and have it generate a fix.
- Run SWE-bench's [data collection procedure](https://github.com/swe-bench/SWE-bench/blob/main/swebench/collect/) ([tutorial](https://github.com/SWE-bench/SWE-bench/blob/main/docs/guides/collection.md)) on your own repositories, to make new SWE-Bench tasks. 
  - ⚠️ We are temporarily pausing support for queries around creating SWE-bench instances. Please see the note in the tutorial.

## ⬇️ Downloads

[https://github.com/swe-bench/swe-bench#%EF%B8%8F-downloads](https://github.com/swe-bench/swe-bench#%EF%B8%8F-downloads)

| Datasets | Models | RAG |
|---|---|---|
| 💿 SWE-bench | 🦙 SWE-Llama 13b | 🤗 "Oracle" Retrieval |
| 💿 SWE-bench Lite | 🦙 SWE-Llama 13b (PEFT) | 🤗 BM25 Retrieval 13K |
| 💿 SWE-bench Verified | 🦙 SWE-Llama 7b | 🤗 BM25 Retrieval 27K |
| 💿 SWE-bench Multimodal | 🦙 SWE-Llama 7b (PEFT) | 🤗 BM25 Retrieval 40K |
|  |  | 🤗 BM25 Retrieval 50K (Llama tokens) |

## 💫 Contributions

[https://github.com/swe-bench/swe-bench#-contributions](https://github.com/swe-bench/swe-bench#-contributions)

We would love to hear from the broader NLP, Machine Learning, and Software Engineering research communities, and we welcome any contributions, pull requests, or issues! To do so, please either file a new pull request or issue and fill in the corresponding templates accordingly. We'll be sure to follow up shortly!

Contact person: [Carlos E. Jimenez](http://www.carlosejimenez.com/) and [John Yang](https://john-b-yang.github.io/) (Email: [carlosej@princeton.edu](mailto:carlosej@princeton.edu), [johnby@stanford.edu](mailto:johnby@stanford.edu)).

## ✍️ Citation & license

[https://github.com/swe-bench/swe-bench#%EF%B8%8F-citation--license](https://github.com/swe-bench/swe-bench#%EF%B8%8F-citation--license)

MIT license. Check `LICENSE.md`.

If you find our work helpful, please use the following citations.

For SWE-bench (Verified):

```
@inproceedings{
    jimenez2024swebench,
    title={{SWE}-bench: Can Language Models Resolve Real-world Github Issues?},
    author={Carlos E Jimenez and John Yang and Alexander Wettig and Shunyu Yao and Kexin Pei and Ofir Press and Karthik R Narasimhan},
    booktitle={The Twelfth International Conference on Learning Representations},
    year={2024},
    url={https://openreview.net/forum?id=VTF8yNQM66}
}
```

For SWE-bench Multimodal

```
@inproceedings{
    yang2024swebenchmultimodal,
    title={{SWE}-bench Multimodal: Do AI Systems Generalize to Visual Software Domains?},
    author={John Yang and Carlos E. Jimenez and Alex L. Zhang and Kilian Lieret and Joyce Yang and Xindi Wu and Ori Press and Niklas Muennighoff and Gabriel Synnaeve and Karthik R. Narasimhan and Diyi Yang and Sida I. Wang and Ofir Press},
    booktitle={The Thirteenth International Conference on Learning Representations},
    year={2025},
    url={https://openreview.net/forum?id=riTiq3i21b}
}
```

For SWE-bench Multilingual

```
@misc{yang2025swesmith,
    title={SWE-smith: Scaling Data for Software Engineering Agents},
    author={John Yang and Kilian Lieret and Carlos E. Jimenez and Alexander Wettig and Kabir Khandpur and Yanzhe Zhang and Binyuan Hui and Ofir Press and Ludwig Schmidt and Diyi Yang},
    year={2025},
    eprint={2504.21798},
    archivePrefix={arXiv},
    primaryClass={cs.SE},
    url={https://arxiv.org/abs/2504.21798},
}
```

## Our Other Projects

[https://github.com/swe-bench/swe-bench#our-other-projects](https://github.com/swe-bench/swe-bench#our-other-projects)

[https://github.com/SWE-bench/sb-cli](https://github.com/SWE-bench/sb-cli)[https://github.com/SWE-bench/SWE-smith](https://github.com/SWE-bench/SWE-smith)[https://github.com/SWE-agent/SWE-agent](https://github.com/SWE-agent/SWE-agent)[https://github.com/codeclash-ai/codeclash](https://github.com/codeclash-ai/codeclash)[https://github.com/SWE-agent/Mini-SWE-Agent](https://github.com/SWE-agent/Mini-SWE-Agent)[https://github.com/SWE-agent/SWE-ReX](https://github.com/SWE-agent/SWE-ReX)

## About

         SWE-bench: Can Language Models Resolve Real-world Github Issues?       

[www.swebench.com](https://www.swebench.com)

### Topics

[benchmark](https://github.com/topics/benchmark)[software-engineering](https://github.com/topics/software-engineering)[language-model](https://github.com/topics/language-model)

### Resources

[Readme](https://github.com/swe-bench/swe-bench#readme-ov-file)

### License

[MIT license](https://github.com/swe-bench/swe-bench#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/SWE-bench/SWE-bench/activity)

[Custom properties](https://github.com/SWE-bench/SWE-bench/custom-properties)

### Stars

[5k
        stars](https://github.com/SWE-bench/SWE-bench/stargazers)

### Watchers

[36
        watching](https://github.com/SWE-bench/SWE-bench/watchers)

### Forks

[868
        forks](https://github.com/SWE-bench/SWE-bench/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FSWE-bench%2FSWE-bench&report=SWE-bench+%28user%29)

## [Releases](https://github.com/SWE-bench/SWE-bench/releases)

[42
      tags](https://github.com/SWE-bench/SWE-bench/tags)

## [Packages
      0](https://github.com/orgs/SWE-bench/packages?repo_name=SWE-bench)
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

