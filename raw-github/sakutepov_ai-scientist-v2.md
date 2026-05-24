---
repo: sakutepov/ai-scientist-v2
url: https://github.com/sakutepov/ai-scientist-v2
content_timestamp: 2024-09-12
time_slice: 2024-Q3
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - sakutepov/AI-Scientist-v2: The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search · GitHub

**Source**: https://github.com/sakutepov/ai-scientist-v2

---

[Skip to content](https://github.com/sakutepov/ai-scientist-v2#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[sakutepov](https://github.com/sakutepov)

/
**[AI-Scientist-v2](https://github.com/sakutepov/AI-Scientist-v2)**

Public

       forked from [SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2)

- [Notifications](https://github.com/login?return_to=%2Fsakutepov%2FAI-Scientist-v2)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fsakutepov%2FAI-Scientist-v2)
- 
[Star
          0](https://github.com/login?return_to=%2Fsakutepov%2FAI-Scientist-v2)

[https://github.com/sakutepov/AI-Scientist-v2](https://github.com/sakutepov/AI-Scientist-v2)

[Branches](https://github.com/sakutepov/AI-Scientist-v2/branches)[Tags](https://github.com/sakutepov/AI-Scientist-v2/tags)

[https://github.com/sakutepov/AI-Scientist-v2/branches](https://github.com/sakutepov/AI-Scientist-v2/branches)[https://github.com/sakutepov/AI-Scientist-v2/tags](https://github.com/sakutepov/AI-Scientist-v2/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7 Commits7 Commits |  |  |  |
| ai_scientist | ai_scientist |  |  |
| docs | docs |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| bfts_config.yaml | bfts_config.yaml |  |  |
| launch_scientist_bfts.py | launch_scientist_bfts.py |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/SakanaAI/AI-Scientist_v2/blob/main/docs/logo_v1.jpg](https://github.com/SakanaAI/AI-Scientist_v2/blob/main/docs/logo_v1.jpg)

# **The AI Scientist-v2: Workshop-Level Automated**
**Scientific Discovery via Agentic Tree Search**

[https://github.com/sakutepov/ai-scientist-v2#----the-ai-scientist-v2-workshop-level-automated----scientific-discovery-via-agentic-tree-search--](https://github.com/sakutepov/ai-scientist-v2#----the-ai-scientist-v2-workshop-level-automated----scientific-discovery-via-agentic-tree-search--)

   📚 [[Paper]](https://pub.sakana.ai/ai-scientist-v2/paper) |   📝 [[Blog Post]](https://sakana.ai/ai-scientist-first-publication/) |   📂 [[ICLR2025 Workshop Experiment]](https://github.com/SakanaAI/AI-Scientist-ICLR2025-Workshop-Experiment)

Fully autonomous scientific research systems are becoming increasingly capable, with AI playing a pivotal role in transforming how scientific discoveries are made. We are excited to introduce The AI Scientist-v2, a generalized end-to-end agentic system that has generated the first workshop paper written entirely by AI and accepted through peer review.

This system autonomously generates hypotheses, runs experiments, analyzes data, and writes scientific manuscripts. Unlike [its predecessor](https://github.com/SakanaAI/AI-Scientist), the AI Scientist-v2 removes reliance on human-authored templates, generalizes across ML domains, and employs a progressive agentic tree-search guided by an experiment manager agent.

> **Note:** The AI Scientist-v2 doesn’t necessarily produce better papers than v1, especially when a strong starting template is available. V1 follows well-defined templates, leading to high success rates, while v2 takes a broader, more exploratory approach with lower success rates. V1 works best for tasks with clear objectives and a solid foundation, whereas v2 is designed for open-ended scientific exploration.

> **Caution!** This codebase will execute LLM-written code. There are various risks and challenges associated with this autonomy, including the use of potentially dangerous packages, web access, and potential spawning of processes. Use at your own discretion.

## Table of Contents

[https://github.com/sakutepov/ai-scientist-v2#table-of-contents](https://github.com/sakutepov/ai-scientist-v2#table-of-contents)

1. [Requirements](https://github.com/sakutepov/ai-scientist-v2#requirements)
  - [Installation](https://github.com/sakutepov/ai-scientist-v2#installation)
  - [Supported Models and API Keys](https://github.com/sakutepov/ai-scientist-v2#supported-models-and-api-keys)

2. [Run AI Scientist-v2 Paper Generation Experiments](https://github.com/sakutepov/ai-scientist-v2#run-ai-scientist-v2-paper-generation-experiments)
3. [Citing The AI Scientist-v2](https://github.com/sakutepov/ai-scientist-v2#citing-the-ai-scientist-v2)
4. [Frequently Asked Questions](https://github.com/sakutepov/ai-scientist-v2#frequently-asked-questions)
5. [Acknowledgement](https://github.com/sakutepov/ai-scientist-v2#acknowledgement)

## Requirements

[https://github.com/sakutepov/ai-scientist-v2#requirements](https://github.com/sakutepov/ai-scientist-v2#requirements)

This code is designed to run on Linux with NVIDIA GPUs using CUDA and PyTorch.

### Installation

[https://github.com/sakutepov/ai-scientist-v2#installation](https://github.com/sakutepov/ai-scientist-v2#installation)

```
conda create -n ai_scientist python=3.11
conda activate ai_scientist
conda install pytorch torchvision torchaudio pytorch-cuda=12.4 -c pytorch -c nvidia
conda install anaconda::poppler # for pdftotext
conda install conda-forge::chktex # for writeup

pip install -r requirements.txt
```

### Supported Models and API Keys

[https://github.com/sakutepov/ai-scientist-v2#supported-models-and-api-keys](https://github.com/sakutepov/ai-scientist-v2#supported-models-and-api-keys)

#### OpenAI models

[https://github.com/sakutepov/ai-scientist-v2#openai-models](https://github.com/sakutepov/ai-scientist-v2#openai-models)

By default, this uses the `OPENAI_API_KEY` environment variable.

#### Claude Models via Bedrock

[https://github.com/sakutepov/ai-scientist-v2#claude-models-via-bedrock](https://github.com/sakutepov/ai-scientist-v2#claude-models-via-bedrock)

For Claude models provided by Amazon Bedrock, please install these additional packages:

```
pip install anthropic[bedrock]
```

Next, specify a set of valid [AWS Credentials](https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-envvars.html) and the target [AWS Region](https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html) by setting the environment variables: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION_NAME`.

#### Semantic Scholar API (Literature Search)

[https://github.com/sakutepov/ai-scientist-v2#semantic-scholar-api-literature-search](https://github.com/sakutepov/ai-scientist-v2#semantic-scholar-api-literature-search)

Our code can also optionally use a Semantic Scholar API Key (`S2_API_KEY`) for higher throughput [if you have one](https://www.semanticscholar.org/product/api), though it should work without it in principle. If you have problems with Semantic Scholar, you can skip the literature search and citation phases of paper generation.

Be sure to provide the key for the model used for your runs, e.g.:

```
export OPENAI_API_KEY="YOUR KEY HERE"
export S2_API_KEY="YOUR KEY HERE"
```

## Run AI Scientist-v2 Paper Generation Experiments

[https://github.com/sakutepov/ai-scientist-v2#run-ai-scientist-v2-paper-generation-experiments](https://github.com/sakutepov/ai-scientist-v2#run-ai-scientist-v2-paper-generation-experiments)

You can specify models for the writeup and review phases using command-line arguments. The best-first tree search configuration can be found in `bfts_config.yaml`. Make any necessary changes to that file.

Relevant tree search config parameters are:

- 

`agent` config:

  - Set `num_workers` and `steps`. `steps` is the maximum number of nodes to explore. e.g. If you set `num_workers=3`, `steps=21`, the tree will grow up to 21 nodes, 3 nodes at a time. Other agent params like `k_fold_validation`, `expose_prediction`, and `data_preview` are not used in the current version.
  - `num_seeds`: should be the same as num_workers if num_workers < 3. Otherwise, set it to be 3.

- 

`search` config:

  - `max_debug_depth`: the agent tries to debug a node this many times until it gives up the whole chain.
  - `debug_prob`: probability of debugging nodes
  - `num_drafts`: the number of root nodes at the beginning (the number of trees to grow) during Stage 1.

An example command to run AI-Scientist-v2 on one of the generated ideas (please take a look at bfts_config.yaml for tree search parameters, which includes claude-3-5-sonnet):

```
python launch_scientist_bfts.py \
 --load_ideas "ai_scientist/ideas/i_cant_believe_its_not_better.json" \
 --load_code \
 --add_dataset_ref \
 --model_writeup o1-preview-2024-09-12 \
 --model_citation gpt-4o-2024-11-20 \
 --model_review gpt-4o-2024-11-20 \
 --model_agg_plots o3-mini-2025-01-31 \
 --num_cite_rounds 20
```

Once stage 1 is complete, you should see a timestamped log folder inside the `experiments` directory. Inside that folder, navigate to `"timestamp_ideaname"/logs/0-run` to find `unified_tree_viz.html`.

## Citing The AI Scientist-v2

[https://github.com/sakutepov/ai-scientist-v2#citing-the-ai-scientist-v2](https://github.com/sakutepov/ai-scientist-v2#citing-the-ai-scientist-v2)

If you use **The AI Scientist-v2** in your research, please cite it as follows:

```
@misc{aiscientist_v2,
 title = {The {AI} Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search},
 author = {Yamada, Yutaro and Lange, Robert Tjarko and Lu, Cong and Hu, Shengran and Foerster, Jakob and Clune, Jeff and Ha, David},
 year = {2025},
 month = {April},
 howpublished = {Sakana AI Blog Post. Available online: \url{https://pub.sakana.ai/ai-scientist-v2/paper}},
}
```

## Frequently Asked Questions

[https://github.com/sakutepov/ai-scientist-v2#frequently-asked-questions](https://github.com/sakutepov/ai-scientist-v2#frequently-asked-questions)

**Why has a PDF or a review not been generated?**

The AI Scientist-v2 finishes an idea with a success rate that depends on the template, the base foundation model, and the complexity of the idea. The highest success rates are observed with Claude Sonnet 3.5 for experiments.

**What is the cost of each experiment?**

It usually costs about $15–20 per experiment when using Claude Sonnet 3.5. Writing adds another ~$5 when using the default models, as shown in the example above. Using GPT-4o is strongly recommended for `model_citation` to help lower writing costs.

**How do I run The AI Scientist-v2 for different subject fields?**

You can add a new idea JSON file to the `ai_scientist/ideas/` directory. For reference, take a look at the example: `ai_scientist/ideas/i_cant_believe_its_not_better.json`.

**What if I have problems accessing the Semantic Scholar API?**

We use the Semantic Scholar API to check ideas for novelty and collect citations for the paper write-up. You may be able to skip these phases if you don't have an API key or the API is slow to access.

**Got an error that says "CUDA Out of Memory"**

This usually means the AI Scientist-v2 is trying to load a model that's too large for your GPU. You can update your idea JSON file to suggest using a smaller model.

## Acknowledgement

[https://github.com/sakutepov/ai-scientist-v2#acknowledgement](https://github.com/sakutepov/ai-scientist-v2#acknowledgement)

The tree search component inside `ai_scientist` is built on top of [AIDE](https://github.com/WecoAI/aideml). We thank the AIDE developers for their valuable contributions and for sharing their work.

## About

         The AI Scientist-v2: Workshop-Level Automated Scientific Discovery via Agentic Tree Search       

### Resources

[Readme](https://github.com/sakutepov/ai-scientist-v2#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/sakutepov/ai-scientist-v2#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/sakutepov/AI-Scientist-v2/activity)

### Stars

[0
        stars](https://github.com/sakutepov/AI-Scientist-v2/stargazers)

### Watchers

[0
        watching](https://github.com/sakutepov/AI-Scientist-v2/watchers)

### Forks

[0
        forks](https://github.com/sakutepov/AI-Scientist-v2/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fsakutepov%2FAI-Scientist-v2&report=sakutepov+%28user%29)

## [Releases](https://github.com/sakutepov/AI-Scientist-v2/releases)

No releases published

## [Packages
      0](https://github.com/users/sakutepov/packages?repo_name=AI-Scientist-v2)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/sakutepov/AI-Scientist-v2/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- 

Python

70.5%

- 

TeX

18.1%
## gBrain Temporal Metadata

- content_timestamp: 2024-09-12
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q3
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

