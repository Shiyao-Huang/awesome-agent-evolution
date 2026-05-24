---
repo: madaan/self-refine
url: https://github.com/madaan/self-refine
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - madaan/self-refine: LLMs can generate feedback on their work, use it to improve the output, and repeat this process iteratively. · GitHub

**Source**: https://github.com/madaan/self-refine

---

[Skip to content](https://github.com/madaan/self-refine#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[madaan](https://github.com/madaan)

/
**[self-refine](https://github.com/madaan/self-refine)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmadaan%2Fself-refine)You must be signed in to change notification settings
- [Fork
    70](https://github.com/login?return_to=%2Fmadaan%2Fself-refine)
- 
[Star
          805](https://github.com/login?return_to=%2Fmadaan%2Fself-refine)

[https://github.com/madaan/self-refine](https://github.com/madaan/self-refine)

[Branches](https://github.com/madaan/self-refine/branches)[Tags](https://github.com/madaan/self-refine/tags)

[https://github.com/madaan/self-refine/branches](https://github.com/madaan/self-refine/branches)[https://github.com/madaan/self-refine/tags](https://github.com/madaan/self-refine/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History122 Commits122 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| colabs | colabs |  |  |
| data | data |  |  |
| docs | docs |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| CITATION.bib | CITATION.bib |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Refine: Iterative Refinement with Self-Feedback

[https://github.com/madaan/self-refine#self-refine-iterative-refinement-with-self-feedback](https://github.com/madaan/self-refine#self-refine-iterative-refinement-with-self-feedback)

*With Self-Refine, LLMs can generate feedback on their work, use it to improve the output, and repeat this process.*

[https://raw.githubusercontent.com/madaan/self-refine/main/docs/static/images/animation_oldstyle_oneloop.gif](https://raw.githubusercontent.com/madaan/self-refine/main/docs/static/images/animation_oldstyle_oneloop.gif)

#### [Website](https://selfrefine.info) | [Paper](https://arxiv.org/pdf/2303.17651.pdf)

[https://github.com/madaan/self-refine#--website---paper-](https://github.com/madaan/self-refine#--website---paper-)

---

**Table of Contents**

- [Updates](https://github.com/madaan/self-refine#updates)
- [Setup](https://github.com/madaan/self-refine#setup)
- [Getting Started with Acronym Generation](https://github.com/madaan/self-refine#getting-started-with-acronym-generation)
- [Dialogue Response Generation](https://github.com/madaan/self-refine#dialogue-response-generation)
- [Code Readability Improvement](https://github.com/madaan/self-refine#code-readability-improvement)
- [Commongen](https://github.com/madaan/self-refine#commongen)
- [GSM-8k](https://github.com/madaan/self-refine#gsm-8k)
- [Yelp](https://github.com/madaan/self-refine#yelp)
- [PIE](https://github.com/madaan/self-refine#pie)
- [General setup](https://github.com/madaan/self-refine#general-setup)
- [Citation](https://github.com/madaan/self-refine#citation)

---

## Updates

[https://github.com/madaan/self-refine#updates](https://github.com/madaan/self-refine#updates)

- **Nov 2023**: Added [visual self-refine examples](https://github.com/madaan/self-refine/blob/main/docs/visual_self_refine_examples) and [colabs](https://github.com/madaan/self-refine/blob/main/colabs/Visual-Self-Refine-GPT4V.ipynb). Use GPT4-V to write tikz code for diagrams, and improve them iteratively.

**Stokes' Theorem Example**
[https://github.com/madaan/self-refine/blob/main/docs/visual_self_refine_examples/stokes__theorem.gif](https://github.com/madaan/self-refine/blob/main/docs/visual_self_refine_examples/stokes__theorem.gif)

**Unicorn Example**
[https://github.com/madaan/self-refine/blob/main/docs/visual_self_refine_examples/unicorn.gif](https://github.com/madaan/self-refine/blob/main/docs/visual_self_refine_examples/unicorn.gif)

## Setup

[https://github.com/madaan/self-refine#setup](https://github.com/madaan/self-refine#setup)

- We use [prompt-lib](https://github.com/reasoning-machines/prompt-lib) for querying LLMs. You can install `prompt-lib` by running the following commands:

```
git clone https://github.com/reasoning-machines/prompt-lib
pip install prompt-lib/
```

Depending on your default settings, you may want to use the following to set a PYTHONPATH:

```
export PYTHONPATH=".:../:.:src:../:../../:.:prompt-lib"
```

## Getting Started with Acronym Generation

[https://github.com/madaan/self-refine#getting-started-with-acronym-generation](https://github.com/madaan/self-refine#getting-started-with-acronym-generation)

```
python -u src/acronym/run.py "Using language models of code for few-shot commonsense"
```

- Since we sample with temperature 0.7, you'll get different results each time you run the above command.

```
0 INIT> Using language models of code for few-shot commonsense

0 GEN> CLoCK
0 SCORES> * Ease of pronunciation: CLoCK is pronounced "clah-k". This is easy acronym to pronounce. 4/5 
* Ease of spelling: CLoCK is easy to spell. 5/5 
* Relation to title: CLoCK stands for "Code Language Models of Commonsense Knowledge" which is related to the title. 5/5 
* Positive connotation: CLoCK is a positive acronym. It implies accuracy and efficiency. 5/5 
* Well-known: CLoCK is not a well-known acronym. 2/5

* Total score: 21/25

1 GEN> CMNSC
1 SCORES> * Ease of pronunciation: CMNSC is pronounced "see-min-es-see". This is a difficult acronym to pronounce. 1/5 
* Ease of spelling: CMNSC is difficult to spell. 1/5 
* Relation to title: CMNSC stands for "Commonsense" which is related to the title. 4/5 
* Positive connotation: CMNSC is a neutral acronym. 3/5 
* Well-known: CMNSC is not a well-known acronym. 1/5

* Total score: 10/25

2 GEN> COMMIT
2 SCORES> * Ease of pronunciation: COMMIT is pronounced "com-mit". This is an easy acronym to pronounce. 4/5
* Ease of spelling: COMMIT is easy to spell. 5/5
* Relation to title: COMMIT stands for "Commonsense Model of Code for Intuitive Training" which is related to the title. 5/5 
* Positive connotation: COMMIT is a positive acronym. It implies commitment and dedication. 5/5
* Well-known: COMMIT is not a well-known acronym. 2/5

* Total score: 21/25
```

---

## Dialogue Response Generation

[https://github.com/madaan/self-refine#dialogue-response-generation](https://github.com/madaan/self-refine#dialogue-response-generation)

```
PYTHONPATH="." python -u src/responsegen/run.py --output <OUTPUT FILE> --size <DATA SIZE>
```

- Use size 0 for running on all test instances

---

## Code Readability Improvement

[https://github.com/madaan/self-refine#code-readability-improvement](https://github.com/madaan/self-refine#code-readability-improvement)

- Note: Please unzip 'data/tasks/codeclean/code_readability/codenet-python-train.jsonl.zip' before running the following commands!

- Running:

```
PYTHONPATH="." python -u src/readability/readability.py --output <OUTPUT FILE>
```

- Evaluation:

```
PYTHONPATH="." python -u src/readability/{count_comment|count_function|count_meaningful_var}.py --file <INPUT FILE>
```

---

## Commongen

[https://github.com/madaan/self-refine#commongen](https://github.com/madaan/self-refine#commongen)

- We use a hard version of commongen. The data is located in `data/prompt/commongen`. You can download the data by running the following commands:

```
python -u src/commongen/run.py cmd stair bubble team dryer puppy aliens cat
```

---

## GSM-8k

[https://github.com/madaan/self-refine#gsm-8k](https://github.com/madaan/self-refine#gsm-8k)

- To run the GSM-8k task:

```
python -u src/gsm/run.py
```

- 

The outputs will be saved in `data/tasks/gsm/gsm_outputs.jsonl`

- 

To evaluate the outputs:

```
python src/gsm/gsm_selfref_eval.py --path  data/tasks/gsm/gsm_outputs.jsonl
```

- The evaluation script will also generate a report (`data/tasks/gsm/gsm_outputs.jsonl.reports.txt`) showing examples of wrong generations, feedback, and refined feedback generations.

---

## Yelp

[https://github.com/madaan/self-refine#yelp](https://github.com/madaan/self-refine#yelp)

- To run the Yelp task:

```
python -u src/sentiment_transfer_sr/run.py data/tasks/yelp/yelp-extreme.jso
nl 4 none
```

- The outputs will be saved in `data/tasks/yelp/`

---

## PIE

[https://github.com/madaan/self-refine#pie](https://github.com/madaan/self-refine#pie)

- To run the PIE task:

```
python -u src/pie/run.py --slow_programs_file data/tasks/pie/codenet-python-test-1k.jsonl --max_attempts 4 --outfile data/tasks/pie/output --feedback_type rich
```

- For evaluation details, please see [docs/pie_eval.md](https://github.com/madaan/self-refine/blob/main/docs/pie_eval.md).

---

## General setup

[https://github.com/madaan/self-refine#general-setup](https://github.com/madaan/self-refine#general-setup)

- Each task has three different types of prompts:

1. 

`Init`: used to initialize the task. This is how the initial output is generated.

2. 

`Feedback`: used to get feedback from the model on the intermediate results.

3. 

`Iterate`: used to get the next iteration from the model, based on the feedback.

- 

Every task has a `run.py` that initializes the prompts and runs the task.

- 

As an example, the prompts for commongen are as follows:

1. Init prompt:

```
python src/commongen/task_init.py
```

1. Feedback prompt:

```
python src/commongen/feedback.py
```

1. Iterate prompt:

```
python src/commongen/task_iterate.py
## gBrain Temporal Metadata

- content_timestamp: 2023
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2023-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

