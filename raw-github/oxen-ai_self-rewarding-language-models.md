---
repo: oxen-ai/self-rewarding-language-models
url: https://github.com/oxen-ai/self-rewarding-language-models
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Oxen-AI/Self-Rewarding-Language-Models: This is work done by the Oxen.ai Community, trying to reproduce the Self-Rewarding Language Model paper from MetaAI. · GitHub

**Source**: https://github.com/oxen-ai/self-rewarding-language-models

---

[Skip to content](https://github.com/oxen-ai/self-rewarding-language-models#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Oxen-AI](https://github.com/Oxen-AI)

/
**[Self-Rewarding-Language-Models](https://github.com/Oxen-AI/Self-Rewarding-Language-Models)**

Public

- [Notifications](https://github.com/login?return_to=%2FOxen-AI%2FSelf-Rewarding-Language-Models)You must be signed in to change notification settings
- [Fork
    11](https://github.com/login?return_to=%2FOxen-AI%2FSelf-Rewarding-Language-Models)
- 
[Star
          134](https://github.com/login?return_to=%2FOxen-AI%2FSelf-Rewarding-Language-Models)

[https://github.com/Oxen-AI/Self-Rewarding-Language-Models](https://github.com/Oxen-AI/Self-Rewarding-Language-Models)

[Branches](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/branches)[Tags](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/tags)

[https://github.com/Oxen-AI/Self-Rewarding-Language-Models/branches](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/branches)[https://github.com/Oxen-AI/Self-Rewarding-Language-Models/tags](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History25 Commits25 Commits |  |  |  |
| images | images |  |  |
| scripts | scripts |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| llm_as_a_judge_prompt.txt | llm_as_a_judge_prompt.txt |  |  |
| self-reward.sh | self-reward.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🐂 Oxen.ai Self-Rewarding Language Models 🔁

[https://github.com/oxen-ai/self-rewarding-language-models#-oxenai-self-rewarding-language-models-](https://github.com/oxen-ai/self-rewarding-language-models#-oxenai-self-rewarding-language-models-)

This is work done by the [Oxen.ai Community](https://oxen.ai/community), trying to reproduce the [Self-Rewarding Language Model paper](https://arxiv.org/abs/2401.10020) from MetaAI. Thanks to [@raulc0399](https://github.com/raulc0399) for putting in all the original effort reproducing. Check out his repository [here](https://github.com/raulc0399/self-rewarding-language-models).

Every Friday we get together for a paper club called [Arxiv Dives](https://www.oxen.ai/community/arxiv-dives) where we read interesting research papers. We thought the Self-Rewarding Language Models paper felt very approachable and reproducible, so we spent some time implementing it.

[https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/images/SRLM.png](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/images/SRLM.png)

If you want to learn more about Self-Rewarding Language Models you can find our deep dive on it [here](https://www.oxen.ai/blog/arxiv-dives-self-rewarding-language-models).

## 🤖 Goal

[https://github.com/oxen-ai/self-rewarding-language-models#-goal](https://github.com/oxen-ai/self-rewarding-language-models#-goal)

The goal is to have a single script that can take in a base LLM and put it into a Self-Reward loop. The initial experiments were run with `mistralai/Mistral-7B-v0.1` as the base model, but in theory could be run with any model.

```
./self-reward.sh scripts mistralai/Mistral-7B-v0.1 M0
```

Currently this script will get you from M0 to M1, but in theory we can wrap it in a loop and kick off a self-reward cycle.

## 🏃‍➡️ Steps

[https://github.com/oxen-ai/self-rewarding-language-models#%E2%80%8D%EF%B8%8F-steps](https://github.com/oxen-ai/self-rewarding-language-models#%E2%80%8D%EF%B8%8F-steps)

There are 5 main steps in each iteration of the Self-Rewarding loop.

1. [00_sft.py](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/scripts/00_sft.py) - Supervised Fine-Tuning (SFT) of a base model to give it instruction following and evaluation skills.
2. [01_gen_prompts.py](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/scripts/01_gen_prompts.py) - Generate new prompts to add to the training set.
3. [02_gen_responses.py](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/scripts/02_gen_responses.py) - Generate N Responses per prompt, so that we can create preference pairs.
4. [03_gen_scores.py](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/scripts/03_gen_scores.py) - Score each response from 1-5 for how well it answered the prompt.
5. [04_gen_preferences.py](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/scripts/04_gen_preferences.py) - Generate preference pairs given the scores to create a DPO dataset
6. [05_dpo.py](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/scripts/05_dpo.py) - Run Direct Preference Optimization (DPO) to train the next iteration of the model

## 🐂 Setup Oxen.ai

[https://github.com/oxen-ai/self-rewarding-language-models#-setup-oxenai](https://github.com/oxen-ai/self-rewarding-language-models#-setup-oxenai)

We use [Oxen.ai](https://oxen.ai) to version the intermediate models and datasets that are generated throughout the process.

If you are not familiar with Oxen.ai, it is an open source, blazing fast, version control system that is built from the ground up to handle large model files, large datasets, and large sets of multi-modal data that is a pain to version in git or git-lfs.

Feel free to checkout our [GitHub project](https://github.com/Oxen-AI/oxen-release) to learn more.

## 🌎 Create Remote Data Repository

[https://github.com/oxen-ai/self-rewarding-language-models#-create-remote-data-repository](https://github.com/oxen-ai/self-rewarding-language-models#-create-remote-data-repository)

If you have not already, create an account on [Oxen.ai](https://oxen.ai/register). This script is setup to upload all the intermediate steps to an Oxen.ai data repository so that we can explore the data the model is generating, as well as version each intermediate step.

Once you have an account, you can create your repository.

[https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/images/CreateRepository.jpg](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/images/CreateRepository.jpg)

## 👨‍💻 Clone Locally

[https://github.com/oxen-ai/self-rewarding-language-models#%E2%80%8D-clone-locally](https://github.com/oxen-ai/self-rewarding-language-models#%E2%80%8D-clone-locally)

Clone a [data repository](https://docs.oxen.ai/getting-started/learn-the-basics) to your local machine to get Oxen ready to version the data.

```
export USERNAME=my-username
export REPOSITORY_NAME=my-repo-name
oxen clone https://hub.oxen.ai/$USERNAME/$REPOSITORY_NAME
cd $REPOSITORY_NAME
```

You can copy the command in the upper right hand corner of the page to get the exact URL to clone. In the screenshot below it is:

```
oxen clone https://hub.oxen.ai/oxbot/My-SRLM
```

[https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/images/MyRepo.png](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/blob/main/images/MyRepo.png)

## ⬇️ Download Starter Data

[https://github.com/oxen-ai/self-rewarding-language-models#%EF%B8%8F-download-starter-data](https://github.com/oxen-ai/self-rewarding-language-models#%EF%B8%8F-download-starter-data)

Download the initial datasets from our [datasets/Self-Rewarding-Language-Models](https://www.oxen.ai/datasets/Self-Rewarding-Language-Models) Oxen.ai data repository. We took care of cleaning up the initial datasets so you can copy them into your own reward loop.

```
mkdir -p M0/train
oxen download datasets/Self-Rewarding-Language-Models M0/train/ift_eft.jsonl -o M0/train
oxen download datasets/Self-Rewarding-Language-Models M0/train/ift.jsonl -o M0/train
```

Use the `add` and `commit` commands to track the initial training data and push it to your own Oxen.ai repository.

```
oxen add M0
oxen commit -m "adding initial ift & eft training data"
oxen push origin main
```

If you are familiar with git, the Oxen command line tool should be pretty intuitive.

## ⚽️ Kick it off

[https://github.com/oxen-ai/self-rewarding-language-models#%EF%B8%8F-kick-it-off](https://github.com/oxen-ai/self-rewarding-language-models#%EF%B8%8F-kick-it-off)

Run the self-reward.sh script to generate the first end to end model

```
./self-reward.sh scripts mistralai/Mistral-7B-v0.1 M0
```

TODO: Put this in a loop for M0, M1, M2, etc...

## About

         This is work done by the Oxen.ai Community, trying to reproduce the Self-Rewarding Language Model paper from MetaAI.       

### Resources

[Readme](https://github.com/oxen-ai/self-rewarding-language-models#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/activity)

[Custom properties](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/custom-properties)

### Stars

[134
        stars](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/stargazers)

### Watchers

[4
        watching](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/watchers)

### Forks

[11
        forks](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FOxen-AI%2FSelf-Rewarding-Language-Models&report=Oxen-AI+%28user%29)

## [Releases](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/releases)

No releases published

## [Packages
      0](https://github.com/orgs/Oxen-AI/packages?repo_name=Self-Rewarding-Language-Models)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          89.4%](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/search?l=python)
- [Shell
          10.6%](https://github.com/Oxen-AI/Self-Rewarding-Language-Models/search?l=shell)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

