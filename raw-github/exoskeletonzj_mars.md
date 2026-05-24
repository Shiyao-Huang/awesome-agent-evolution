---
repo: exoskeletonzj/mars
url: https://github.com/exoskeletonzj/mars
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - exoskeletonzj/MARS: A Multi-Agent Approach Integrating Socratic Guidance for Automated Prompt Optimization · GitHub

**Source**: https://github.com/exoskeletonzj/mars

---

[Skip to content](https://github.com/exoskeletonzj/mars#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[exoskeletonzj](https://github.com/exoskeletonzj)

/
**[MARS](https://github.com/exoskeletonzj/MARS)**

Public

- [Notifications](https://github.com/login?return_to=%2Fexoskeletonzj%2FMARS)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Fexoskeletonzj%2FMARS)
- 
[Star
          18](https://github.com/login?return_to=%2Fexoskeletonzj%2FMARS)

[https://github.com/exoskeletonzj/MARS](https://github.com/exoskeletonzj/MARS)

[Branches](https://github.com/exoskeletonzj/MARS/branches)[Tags](https://github.com/exoskeletonzj/MARS/tags)

[https://github.com/exoskeletonzj/MARS/branches](https://github.com/exoskeletonzj/MARS/branches)[https://github.com/exoskeletonzj/MARS/tags](https://github.com/exoskeletonzj/MARS/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History13 Commits13 Commits |  |  |  |
| Dataset | Dataset |  |  |
| Dataset_format | Dataset_format |  |  |
| Output | Output |  |  |
| Preprocess | Preprocess |  |  |
| Prompt | Prompt |  |  |
| Agents.py | Agents.py |  |  |
| Config.py | Config.py |  |  |
| README.md | README.md |  |  |
| environment.yml | environment.yml |  |  |
| main_MARS.py | main_MARS.py |  |  |
| requirements.txt | requirements.txt |  |  |
| run.sh | run.sh |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧝‍♀️MARS

[https://github.com/exoskeletonzj/mars#%E2%80%8D%EF%B8%8Fmars](https://github.com/exoskeletonzj/mars#%E2%80%8D%EF%B8%8Fmars)

This repository contains the official implementation of the following paper:

🎉🎉[ *AAAI-26* ] **MARS: Multi-Agent Adaptive Reasoning with Socratic Guidancefor Automated Prompt Optimization**

arXiv: [https://arxiv.org/abs/2503.16874](https://arxiv.org/abs/2503.16874)

We propose a Multi-Agent Approach Integrating Socratic Guidance (MARS). Specifically, our multi-agent architecture autonomously plans the optimization path to mitigate uncertainty and employs a "teacher-critic-student" Socratic guidance interaction pattern to iteratively optimize the prompts while providing interpretability.

---

## 📌 Environment Setup Guide

[https://github.com/exoskeletonzj/mars#-environment-setup-guide](https://github.com/exoskeletonzj/mars#-environment-setup-guide)

This project supports both `pip` and `conda` for environment setup. Choose the method that suits your setup.

### 🔹 Method 1: Using `requirements.txt`

[https://github.com/exoskeletonzj/mars#-method-1-using-requirementstxt](https://github.com/exoskeletonzj/mars#-method-1-using-requirementstxt)

If you are using **pip**, follow these steps to install all dependencies:

```
# Install dependencies
pip install -r requirements.txt
```

### 🔹 Method 2: Using `environment.yml` --[Recommend!]

[https://github.com/exoskeletonzj/mars#-method-2-using-environmentyml---recommend](https://github.com/exoskeletonzj/mars#-method-2-using-environmentyml---recommend)

If you are using **conda**, follow these steps:

```
# Create a conda environment from environment.yml
conda env create -f environment.yml

# Activate the environment
conda activate MultiAgent
```

## 💡How to Run

[https://github.com/exoskeletonzj/mars#how-to-run](https://github.com/exoskeletonzj/mars#how-to-run)

To run the model, please use the following command.

### 🔹 step 1: Configuring the OpenAI API key

[https://github.com/exoskeletonzj/mars#-step-1-configuring-the-openai-api-key](https://github.com/exoskeletonzj/mars#-step-1-configuring-the-openai-api-key)

Configure your API Key in the ***Config.py*** file and select the model you want to use as the base

```
API_KEY = "---YOUR_API_KEY---"
BASE_URL = "---YOUR_BASE_URL---"
MODEL = "deepseek-chat" # anyone you want
```

### 🔹 step 2: Setting up the test dataset(optional)

[https://github.com/exoskeletonzj/mars#-step-2-setting-up-the-test-datasetoptional](https://github.com/exoskeletonzj/mars#-step-2-setting-up-the-test-datasetoptional)

Set the test dataset corresponding to the task you chose in ***config.py***.

```
# For example
DATASET_PATH = './Dataset_format/BBH/geometric_shapes.csv'
```

### 🔹 step 3: Setting Prompts(optional)

[https://github.com/exoskeletonzj/mars#-step-3-setting-promptsoptional](https://github.com/exoskeletonzj/mars#-step-3-setting-promptsoptional)

Depending on the task you want to use, select the corresponding content from the ***Prompt/ALL_userproxy_task_input.md*** and ***Prompt/ALL_prompt_planner_template.md*** files to copy into ***Prompt/EDIT_1_userproxy_task_input.txt*** and ***Prompt/EDIT_2_prompt_planner_template.txt***.

Of course, if you want to optimize other tasks, you can also write the content in the ***Prompt/EDIT_1_userproxy_task_input.txt*** and ***Prompt/EDIT_2_prompt_planner_template.txt*** directly yourself.

### 🔹 step 4: Run the script

[https://github.com/exoskeletonzj/mars#-step-4-run-the-script](https://github.com/exoskeletonzj/mars#-step-4-run-the-script)

We have designed the program to support two question types. Exactly which one to use depends on the type of questions in the dataset.

If it is a choice question please run:

```
bash run.sh choice
```

If it is a short answer question, please run:

```
bash run.sh short_answer
```

The results of each run will be displayed in ***Output*** folder.

## 🗂️ Documentation

[https://github.com/exoskeletonzj/mars#%EF%B8%8F-documentation](https://github.com/exoskeletonzj/mars#%EF%B8%8F-documentation)

### Dataset

[https://github.com/exoskeletonzj/mars#dataset](https://github.com/exoskeletonzj/mars#dataset)

The data used in this experiment are stored in two folders, ***Dataset*** and ***Dataset_format***. The Dataset folder stores the original dataset of the data used in this experiment, and the Dataset_format folder stores the processed data that can be used directly.

The data in Dataset_format is the result of processing the Dataset's corresponding task using the preprocess_XX.py file. The ***Preprocess/preprocess_XX.py*** file used to process the data is given here.

### Preprocess

[https://github.com/exoskeletonzj/mars#preprocess](https://github.com/exoskeletonzj/mars#preprocess)

The Preprocess folder holds the preprocessors used in the different tasks in this experiment, the results of running these programs have been placed in the ***Dataset_format*** folder.

### Work process

[https://github.com/exoskeletonzj/mars#work-process](https://github.com/exoskeletonzj/mars#work-process)

***run.sh***: script for automated execution of code optimization

***main_MARS***: The entry point of the program that implements the Agent calls.

***Agents***: the implementation methods of specific Agents.

***Config***: Stores various configuration parameters, file paths, and APIs for calling LLM.

### Results

[https://github.com/exoskeletonzj/mars#results](https://github.com/exoskeletonzj/mars#results)

The best prompt for all tasks after iteration is in the ***Optimized prompt*** folder.

## 📚 Citation

[https://github.com/exoskeletonzj/mars#-citation](https://github.com/exoskeletonzj/mars#-citation)

If you find this work useful in your research, please consider citing:

```
@article{zhang2025mars,
  title={Mars: A multi-agent framework incorporating socratic guidance for automated prompt optimization},
  author={Zhang, Jian and Wang, Zhangqi and Zhu, Haiping and Liu, Jun and Lin, Qika and Cambria, Erik},
  journal={arXiv preprint arXiv:2503.16874},
  year={2025}
}
```

## About

         A Multi-Agent Approach Integrating Socratic Guidance for Automated Prompt Optimization       

### Resources

[Readme](https://github.com/exoskeletonzj/mars#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/exoskeletonzj/MARS/activity)

### Stars

[18
        stars](https://github.com/exoskeletonzj/MARS/stargazers)

### Watchers

[1
        watching](https://github.com/exoskeletonzj/MARS/watchers)

### Forks

[1
        fork](https://github.com/exoskeletonzj/MARS/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fexoskeletonzj%2FMARS&report=exoskeletonzj+%28user%29)

## [Releases](https://github.com/exoskeletonzj/MARS/releases)

No releases published

## [Packages
      0](https://github.com/users/exoskeletonzj/packages?repo_name=MARS)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/exoskeletonzj/MARS/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          98.4%](https://github.com/exoskeletonzj/MARS/search?l=python)
- [Shell
          1.6%](https://github.com/exoskeletonzj/MARS/search?l=shell)

     You can’t perform that action at this time.
