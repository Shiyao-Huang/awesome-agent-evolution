---
repo: maitrix-org/promptagent
url: https://github.com/maitrix-org/promptagent
content_timestamp: 2024-05-17
time_slice: 2024-Q2
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - maitrix-org/PromptAgent: This is the official repo for "PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization". PromptAgent is a novel automatic prompt optimization method that autonomously crafts prompts equivalent in quality to those handcrafted by experts, i.e., expert-level prompts. · GitHub

**Source**: https://github.com/maitrix-org/promptagent

---

[Skip to content](https://github.com/maitrix-org/promptagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[maitrix-org](https://github.com/maitrix-org)

/
**[PromptAgent](https://github.com/maitrix-org/PromptAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fmaitrix-org%2FPromptAgent)You must be signed in to change notification settings
- [Fork
    45](https://github.com/login?return_to=%2Fmaitrix-org%2FPromptAgent)
- 
[Star
          353](https://github.com/login?return_to=%2Fmaitrix-org%2FPromptAgent)

[https://github.com/maitrix-org/PromptAgent](https://github.com/maitrix-org/PromptAgent)

[Branches](https://github.com/maitrix-org/PromptAgent/branches)[Tags](https://github.com/maitrix-org/PromptAgent/tags)

[https://github.com/maitrix-org/PromptAgent/branches](https://github.com/maitrix-org/PromptAgent/branches)[https://github.com/maitrix-org/PromptAgent/tags](https://github.com/maitrix-org/PromptAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History46 Commits46 Commits |  |  |  |
| datasets | datasets |  |  |
| images | images |  |  |
| src | src |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| example_config.yaml | example_config.yaml |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/maitrix-org/PromptAgent/blob/main/images/Header.png](https://github.com/maitrix-org/PromptAgent/blob/main/images/Header.png)

## News

[https://github.com/maitrix-org/promptagent#news](https://github.com/maitrix-org/promptagent#news)

- Aug. 04, 2024: PromptAgent now support vllm LLMs, which speed up the local inference. Thanks Jiazheng for the commit!
- Jun. 27, 2024: LLM Reasoners library now integrates PromptAgent! See the **adapted PromptAgent** here: [Link](https://github.com/maitrix-org/llm-reasoners/tree/main/examples/PromptAgent/MedQA)
- May 17, 2024: Modify arguments control, use yaml file to set arguments for PromptAgent.
- May  15, 2024: Different models (openai, palm, huggingface models) are supported by PromptAgent.
- Jan. 16, 2024: PromptAgent has been accepted by ICLR 2024!
- Dec. 17, 2023: Refined the code for ease of reading and use by users.

# PromptAgent

[https://github.com/maitrix-org/promptagent#promptagent](https://github.com/maitrix-org/promptagent#promptagent)

This is the official repo for "PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization".   PromptAgent is a novel automatic prompt optimization method that autonomously crafts prompts equivalent in quality to those handcrafted by experts, i.e., expert-level prompts. [[arXiv](https://arxiv.org/abs/2310.16427)]

[https://github.com/maitrix-org/PromptAgent/blob/main/images/expert_prompt_00.jpg](https://github.com/maitrix-org/PromptAgent/blob/main/images/expert_prompt_00.jpg)

 Unlike discovering magic/local prompt variants as existing prompt optimization methods, expert-level prompting is still an untapped area that solves challenging problems. And PromptAgent serves as a principled framework to study prompt optimization by unifying prompt sampling and rewarding using MCTS algorithm.  

[https://github.com/maitrix-org/PromptAgent/blob/main/images/mcts_00.jpg](https://github.com/maitrix-org/PromptAgent/blob/main/images/mcts_00.jpg)

## Installation

[https://github.com/maitrix-org/promptagent#installation](https://github.com/maitrix-org/promptagent#installation)

```
git clone https://github.com/XinyuanWangCS/PromptAgent.git
cd PromptAgent
conda create -n prompt_agent
conda activate prompt_agent
pip install -r requirements.txt
```

## Quick Start

[https://github.com/maitrix-org/promptagent#quick-start](https://github.com/maitrix-org/promptagent#quick-start)

The following command run PromptAgent to craft an expert prompt for a BIG-bench task, [penguins_in_a_table](https://github.com/google/BIG-bench/tree/main/bigbench/benchmark_tasks/penguins_in_a_table). The running could take some time depending on the inference speed of OpenAI APIs and size of datasets.

**Note**: Before running this command, please add your (OpenAI) api key to the example_config.yaml file (base_model_setting: api_key and optim_model_setting: api_key). You can also check all the other auguments in the yaml file.

```
python src/main.py --config_dir example_config.yaml
```

`penguins_in_a_table` is an table understanding task to answer questions about animals contained in tables. An example from the original dataset looks like this:

```
Here is a table where the first line is a header and each subsequent line is a penguin:

name, age, height (cm), weight (kg)
Louis, 7, 50, 11
Bernard, 5, 80, 13
Vincent, 9, 60, 11
Gwen, 8, 70, 15

For example: the age of Louis is 7, the weight of Gwen is 15 kg, the height of
Bernard is 80 cm.

Which penguin is taller than the other ones? Answer:
```

Then, the expected result is `Bernard`.

The initial query from the BIG-bench dataset is `Answer questions about a table of penguins and their attributes.` Starting with such an ordinary prompt, PromptAgent will strategically sample model errors (from the base model), generate error feedbacks (actions), simulate future rewards, and search for high-reward paths leadning to expert prompts. The optimized prompt for `penguins_in_a_table` will look like this (exact results may vary as this is not deterministic):

```
As you delve into a dataset of penguins, assess essential attributes like names, ages, 
and gender. Decode the significance of each attribute in the context of every penguin 
while keeping in mind that the dataset may be modified, including addition or removal 
of penguins. When such modifications are made, immediately revise your understanding, 
redo your computations, and ensure that your subsequent calculations consider these 
changes. The crux of your task is to identify relationships and patterns within 
the attributes, giving special attention to the names and ages of the penguins.

For complex tasks, break them down into manageable chunks ensuring no essential detail 
is missed. When a change is made to the dataset, recompute your values taking into 
consideration these changes, paying extra attention to cumulative computations. Ensure 
that your understanding of ’more than’, ’less than’, and ’equal to’ is precise and 
that you correctly interpret these in context of the question.

...
```

It takes around two hours to run the above experiment, which costs around $5 using OpenAI API (around $4 for GPT-4 and $1 for GPT-3.5). After finishing the optimization, all the intermediate nodes and paths will be stored in a json file. We will keep the top-k reward nodes, the last node in the highest average reward path, and the highest reward node in the highest average reward path. In the paper, we use the highest reward node in the highest average reward path as the selection strategy.

### Test

[https://github.com/maitrix-org/promptagent#test](https://github.com/maitrix-org/promptagent#test)

We can run `test.py` to test any prompt performance with the following commands:
 Enter the prompt in the command line:

```
python src/test.py --task_name bigbench --prompt "Answer questions about a table of penguins and their attributes." --prompt_file "prompt file path" --train_size 70 --eval_size 50 --test_size 79 --seed 42 --base_model_type "openai" --base_model_name 'gpt-3.5-turbo' --data_dir "datasets/penguins_in_a_table.json" --base_api_key "your_api"
```

or
 Put prompt in a .txt file if the prompt is very long:

```
python src/test.py --task_name bigbench --prompt_file "prompt file path" --train_size 70 --eval_size 50 --test_size 79 --seed 42 --base_model_type "openai" --base_model_name 'gpt-3.5-turbo' --data_dir "datasets/penguins_in_a_table.json" --base_api_key "your_api"
```

## Huggingface TextGeneration Model

[https://github.com/maitrix-org/promptagent#huggingface-textgeneration-model](https://github.com/maitrix-org/promptagent#huggingface-textgeneration-model)

If you are using Huggingface TextGeneration model, please modify the base_model_setting or optim_model_setting in the .yaml file. If you plan to use open-source models, we recommand using instruction-tuned models with a moderate size, such as mistralai/Mistral-7B-Instruct-v0.2. As we mentioned in the paper, expert-level prompt are prepared for relatively advanced LLMs.

**Note**: You may modify the parameters of the huggingface model (such as max_new_tokens), since these models may have different input windows or other settings.

Here is an example of using mistralai/Mistral-7B-Instruct-v0.2:

```
base_model_setting:
  model_type: hf_textgeneration # openai | palm | hf_text2text | hf_textgeneration | ct_model
  model_name: mistralai/Mistral-7B-Instruct-v0.2 # api-based model'name or huggingface model name
  temperature: 0.0
  api_key: null # if need api key
  device: cuda # cuda | cpu | cuda:x, e.g. 0,1,2...
  model_path: null # ct model requires the downloaded model's path
```

## How to add new models?

[https://github.com/maitrix-org/promptagent#how-to-add-new-models](https://github.com/maitrix-org/promptagent#how-to-add-new-models)

You can add a new .py file including your new model. The model's class requires two functions: batch_forward_func: input a batch of prompts, output a batch of model's responses.

```
def batch_forward_func(self, batch_prompts: List(str)):
  ...
  return List(str)
```

generate: input one prompt, output one response

```
def generate(self, input: str):
  ...
  return str
```

Then you may add the model_type name and the class name in the **init**.py in the language_model folder. You can also contact us, if you meet any issue or would like to add to the official PromptAgent repo.

## How to add a new task?

[https://github.com/maitrix-org/promptagent#how-to-add-a-new-task](https://github.com/maitrix-org/promptagent#how-to-add-a-new-task)

Our base task class can be seen in the tasks/base_task.py file, where the tasks specific functions are explained in detail. Our current tasks includes selection question tasks and NER tasks. Adding new selection tasks is relatively easy. Please refer to the .py files in the tasks folder. First, create a new task.py file and a new CustomTask class. Then, there are several task-specific functions to be implemented in your customized task.py file:

1. Load your dataset: We recommend spliting your dataset into "train" and "test" and storing them into json file. Related functions: load_task_dataset, transform_format
2. Input formating: For selection questions, it is necessary to combine question and options before inputing into the pred_model. Related functions: clean_labels, build_forward_prompts_completion
3. Answer extraction: Extract the final answer from the model's response. Related functions: clean_response
4. Design correction metric: For each task, we need a define "correctness" for two reasons. In PromptAgent, we need to sample one batch and find the errors of base models, so cal_correct is needed for comparing the predictions and labels. Also. we need a reward for MCTS (cal_metric), which is the validation set accuracy for most of the tasks.

After that, you can run PromptAgent on your customized dataset!

## TODO

[https://github.com/maitrix-org/promptagent#todo](https://github.com/maitrix-org/promptagent#todo)

- We will extend the features to enable flexible training/testing pipeline with new tasks.
- Support open-source models or huggingface models.

## Citations

[https://github.com/maitrix-org/promptagent#citations](https://github.com/maitrix-org/promptagent#citations)

If you find the paper and code useful, please kindly star this repo and cite the following paper. Feel free to contact [xywang626@gmail.com](mailto:xywang626@gmail.com) and [zhenwang9102@gmail.com](mailto:zhenwang9102@gmail.com), or open an issue if you have any questions. Thanks so much!

```
@article{wang2023promptagent,
  title={PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization},
  author={Wang, Xinyuan and Li, Chenxi and Wang, Zhen and Bai, Fan and Luo, Haotian and Zhang, Jiayou and Jojic, Nebojsa and Xing, Eric P and Hu, Zhiting},
  journal={arXiv preprint arXiv:2310.16427},
  year={2023}
}
```

## About

         This is the official repo for "PromptAgent: Strategic Planning with Language Models Enables Expert-level Prompt Optimization". PromptAgent is a novel automatic prompt optimization method that autonomously crafts prompts equivalent in quality to those handcrafted by experts, i.e., expert-level prompts.       

[arxiv.org/abs/2310.16427](https://arxiv.org/abs/2310.16427)

### Topics

[python](https://github.com/topics/python)[nlp](https://github.com/topics/nlp)[llm](https://github.com/topics/llm)[prompt-engineering](https://github.com/topics/prompt-engineering)

### Resources

[Readme](https://github.com/maitrix-org/promptagent#readme-ov-file)

### License

[Apache-2.0 license](https://github.com/maitrix-org/promptagent#Apache-2.0-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/maitrix-org/PromptAgent/activity)

[Custom properties](https://github.com/maitrix-org/PromptAgent/custom-properties)

### Stars

[353
        stars](https://github.com/maitrix-org/PromptAgent/stargazers)

### Watchers

[4
        watching](https://github.com/maitrix-org/PromptAgent/watchers)

### Forks

[45
        forks](https://github.com/maitrix-org/PromptAgent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fmaitrix-org%2FPromptAgent&report=maitrix-org+%28user%29)

## [Releases](https://github.com/maitrix-org/PromptAgent/releases)

No releases published

## [Packages
      0](https://github.com/orgs/maitrix-org/packages?repo_name=PromptAgent)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/maitrix-org/PromptAgent/graphs/contributors)
## gBrain Temporal Metadata

- content_timestamp: 2024-05-17
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q2
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

