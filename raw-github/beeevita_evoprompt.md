---
repo: beeevita/evoprompt
url: https://github.com/beeevita/evoprompt
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - beeevita/EvoPrompt: Official implementation of the paper Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers · GitHub

**Source**: https://github.com/beeevita/evoprompt

---

[Skip to content](https://github.com/beeevita/evoprompt#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[beeevita](https://github.com/beeevita)

/
**[EvoPrompt](https://github.com/beeevita/EvoPrompt)**

Public

- [Notifications](https://github.com/login?return_to=%2Fbeeevita%2FEvoPrompt)You must be signed in to change notification settings
- [Fork
    37](https://github.com/login?return_to=%2Fbeeevita%2FEvoPrompt)
- 
[Star
          238](https://github.com/login?return_to=%2Fbeeevita%2FEvoPrompt)

[https://github.com/beeevita/EvoPrompt](https://github.com/beeevita/EvoPrompt)

[Branches](https://github.com/beeevita/EvoPrompt/branches)[Tags](https://github.com/beeevita/EvoPrompt/tags)

[https://github.com/beeevita/EvoPrompt/branches](https://github.com/beeevita/EvoPrompt/branches)[https://github.com/beeevita/EvoPrompt/tags](https://github.com/beeevita/EvoPrompt/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History22 Commits22 Commits |  |  |  |
| BBH | BBH |  |  |
| data | data |  |  |
| scripts | scripts |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE.txt | LICENSE.txt |  |  |
| README.md | README.md |  |  |
| args.py | args.py |  |  |
| auth.yaml | auth.yaml |  |  |
| dataset.py | dataset.py |  |  |
| evaluator.py | evaluator.py |  |  |
| evoluter.py | evoluter.py |  |  |
| evolution.py | evolution.py |  |  |
| get_result.py | get_result.py |  |  |
| infer.py | infer.py |  |  |
| llm_client.py | llm_client.py |  |  |
| metrics.py | metrics.py |  |  |
| requirements.txt | requirements.txt |  |  |
| run.py | run.py |  |  |
| utils.py | utils.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# 🧬 EvoPrompt

[https://github.com/beeevita/evoprompt#-evoprompt](https://github.com/beeevita/evoprompt#-evoprompt)

This is the official implementation of the paper [Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers](https://openreview.net/pdf?id=ZG3RaNIsO8), accepted by ICLR'2024.

## 📃 Abstract

[https://github.com/beeevita/evoprompt#-abstract](https://github.com/beeevita/evoprompt#-abstract)

Large Language Models (LLMs) excel in various tasks, but they rely on carefully crafted prompts that often demand substantial human effort. To automate this process, in this paper, we propose a novel framework for discrete prompt optimization, called EvoPrompt, which borrows the idea of evolutionary algorithms (EAs) as they exhibit good performance and fast convergence. To enable EAs to work on discrete prompts, which are natural language expressions that need to be coherent and human-readable, we connect LLMs with EAs. This approach allows us to simultaneously leverage the powerful language processing capabilities of LLMs and the efficient optimization performance of EAs. Specifically, abstaining from any gradients or parameters, EvoPrompt starts from a population of prompts and iteratively generates new prompts with LLMs based on the evolutionary operators, improving the population based on the development set. We optimize prompts for both closed- and open-source LLMs including GPT-3.5 and Alpaca, on 31 datasets covering language understanding, generation tasks, as well as BIG-Bench Hard (BBH) tasks. EvoPrompt significantly outperforms human-engineered prompts and existing methods for automatic prompt generation (e.g., up to 25% on BBH). Furthermore, EvoPrompt demonstrates that connecting LLMs with EAs creates synergies, which could inspire further research on the combination of LLMs and conventional algorithms.

## 🚀 Quick Start

[https://github.com/beeevita/evoprompt#-quick-start](https://github.com/beeevita/evoprompt#-quick-start)

### ⚙️ Preparation

[https://github.com/beeevita/evoprompt#%EF%B8%8F-preparation](https://github.com/beeevita/evoprompt#%EF%B8%8F-preparation)

1. **Environmental** settings: `pip install -r requirements.txt`
2. **Data** download: The test data for the language understanding task can be found [here](https://nlp.cs.princeton.edu/projects/lm-bff/datasets.tar). Put the test file in the folder `./data/cls/{dataset_name}`. For datasets of BBH, download from the repo [CoT-hub](https://github.com/FranxYao/chain-of-thought-hub/tree/main/BBH/data) and put them in the folder `BBH/data/{dataset_name}`.
3. **OpenAI API key** required: add your OpenAI API key and other related settings in the file `auth.yaml`

### ♻ Evolution

[https://github.com/beeevita/evoprompt#-evolution](https://github.com/beeevita/evoprompt#-evolution)

We instanciate two evolutionary algorithms, GA (genetic algorithm) and DE (diffenrential evolution) to evolve upon the initial population. Evolve your prompts using the following commands:

Customize the parameter `--llm_type` to use `text-davinci-003`, `gpt-3.5-turbo`, `gpt-4`.

```
# understanding task on Alpaca
bash scripts/cls/run_ga_alpaca.sh  # Genetic algorithm
bash scripts/cls/run_de_alpaca.sh  # Differential evolution

# simplification task on Alpaca
bash scripts/sim/run_de_alpaca.sh
bash scripts/sim/run_ga_alpaca.sh

# summarization task on Alpaca
bash scripts/sum/run_de_alpaca.sh
bash scripts/sum/run_ga_alpaca.sh

# for BBH tasks
cd BBH
bash scripts/run_de_cot.sh  # DE 
bash scripts/run_ga_cot.sh  # GA
```

### 🤔 Inference

[https://github.com/beeevita/evoprompt#-inference](https://github.com/beeevita/evoprompt#-inference)

To evaluate a single instruction, run the following, set the argument `--content` to evaluate a performance of a specific prompt

```
bash scripts/cls/eval_single_alpaca.sh  # understanding task on alpaca
bash scripts/sim/eval_single_alpaca.sh  # simplification
bash scripts/sum/eval_single_alpaca.sh  # summarization

# BBH
cd BBH
bash scripts/eval.sh  # few-shot evaluation
```

### 📌 Notes

[https://github.com/beeevita/evoprompt#-notes](https://github.com/beeevita/evoprompt#-notes)

Note that we have two language models used in our framework, one is for evolution (argument `--llm_type`), the other for the task implementation (`--language_model`).

#### 💡Tips for Usage

[https://github.com/beeevita/evoprompt#tips-for-usage](https://github.com/beeevita/evoprompt#tips-for-usage)

The number of iteration and the population size effect the performance of EvoPrompt. There exists a trade-off between the cost and the performance. For relative simple tasks, a size of 10 and 10 iterative steps are enough, or even less. While for complex tasks, a larger population with diversity is required.

#### 🔢 Arguments

[https://github.com/beeevita/evoprompt#-arguments](https://github.com/beeevita/evoprompt#-arguments)

You may need to set the following arguments to customize your own configuration.

- `task`: the task category, such as `sim` (simplification), `cls`(classification), `sum`(summarization). If you need to extend this to other tasks, you may override the metric to evaluate
- `dataset`: the dataset you want to evolve prompt on
- `dev_file`: the path of the devlopment set
- `language model`: the model used for task implementation
- `llm_type`: the LLM used to evolve prompts
- `position`: this argument mainly indicates whether to use demonstration (zero-shot or few-shot)
- `sample_num`: the size of dev set, mainly used for generation task where there is no need to set the `dev_file`
- `prompt_num`: number of examples for few-shot demonstrations

## 📎 Framework

[https://github.com/beeevita/evoprompt#-framework](https://github.com/beeevita/evoprompt#-framework)

For the pipeline of EvoPrompt, there are mainly three steps as follows, while for each of them algorthms, there exists slight differences to instantiate.

- 

**Initialization**: We apply prompts generated manually written or generated by GPT as the initial population. (see in the `prompts.txt` and `prompts_auto.txt` under the path of each dataset)

- 

**Evolution** (mutation and crossover): For templates used for DE and GA, see the file `./data/templates_ga` and `./data/templates_de`. We use a demonstration including one example of the algorithm implementation to get precise and expected prompt following the steps of evolution. To avoid the LLMs copying the demonstration,the demonstration of the task is different from the task of implementation.

- 

**Evaluation and update**: After each iteration, we need select which prompts should be maintained in the population to update. For GA, we maintain top-$N$ prompts in each iteration while for DE, we replace the old prompt if the newly generated is better.

### 🧬 Genetic Algorithm

[https://github.com/beeevita/evoprompt#-genetic-algorithm](https://github.com/beeevita/evoprompt#-genetic-algorithm)

- **Selection strategy**: in each iteration, we need to select parents for mutation and crossover, as donors to child prompts. Set the argument `sel_mode` to apply different strategy. There are three choices: `["wheel", "random", "tour"]`, we use `wheel` by default.
- **Update**: After generating a population with the same size of the original population, $N$, we select top-$N$ as the new population.

### 🧬 Differential Evolution

[https://github.com/beeevita/evoprompt#-differential-evolution](https://github.com/beeevita/evoprompt#-differential-evolution)

- **Design in DE**: We apply different DE templates for ablations. Specify the argument `template` to use different settings. 
  - Eliminate Prompt 3: `--template v2`
  - Prompt 3 (random): add the argument `--donor_random`
  - Prompt 3 (best): `--template v1` (default setting)
  - Different part: `--template v3`

- **Update**: Different from GA, in each iteration for each prompt `p`, several donor prompts are used for the new prompt `p'`, if `p'` is better than `p`, `p` will be replaced by `p'`. Otherwise, it will be maintained.

## 🌳 Code Strucutre

[https://github.com/beeevita/evoprompt#-code-strucutre](https://github.com/beeevita/evoprompt#-code-strucutre)

```
.
├── args.py
├── auth.yaml
├── BBH  # code for BBH tasks
├── data  # dataset, templates used
│   ├── cls
│   ├── sim
│   ├── sum
│   ├── template_de.py  # templates of prompt evolution by DE
│   ├── template_ga.py  # templates of prompt evolution by GA
│   ├── template_v2.json  # templates for task implementation
│   └── templates.py  # wrapper
├── dataset.py  # dataset class
├── evaluator.py  # evaluators on different tasks
├── evoluter.py  # DE, GA, APE
├── evolution.py  # DE, GA, APE
├── get_result.py
├── infer.py  # main file for inference
├── llm_client.py  # LLM query
├── metrics.py  # metric calculation
├── requirements.txt
├── run.py  # main file for evolution
├── scripts  # scripts to run the code
└── utils.py  # auxiliary functions
```

## 🧩 Possible Extension

[https://github.com/beeevita/evoprompt#-possible-extension](https://github.com/beeevita/evoprompt#-possible-extension)

- **Aggregation**: Based on the final population of high quality, ensembling strategies can be effectively applied upon the prompts.
- **More fine-grained metrics**: to select prompt maintained in the population, we need to evaluate the performance on dev set. However, for understanding tasks, metrics such as accuracy or F1 are coarse-grained, sometimes it's not accurate anough to select which to keep in the population since the performances of them are the same.
- **More complex tasks** are left to explore.

## ☕️ Citation

[https://github.com/beeevita/evoprompt#%EF%B8%8F-citation](https://github.com/beeevita/evoprompt#%EF%B8%8F-citation)

If you find this repository helpful, please consider citing our paper:

```
@inproceedings{
guo2024connecting,
title={Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers},
author={Qingyan Guo and Rui Wang and Junliang Guo and Bei Li and Kaitao Song and Xu Tan and Guoqing Liu and Jiang Bian and Yujiu Yang},
booktitle={The Twelfth International Conference on Learning Representations},
year={2024},
url={https://openreview.net/forum?id=ZG3RaNIsO8}
}
```

## Acknowledgements

[https://github.com/beeevita/evoprompt#acknowledgements](https://github.com/beeevita/evoprompt#acknowledgements)

Our codebase is based on the following repos. Thanks for open-sourcing!

- [CoT-hub](https://github.com/FranxYao/chain-of-thought-hub)
- [APE](https://github.com/keirp/automatic_prompt_engineer)
- [LM-BFF](https://github.com/princeton-nlp/LM-BFF)

## Contributing

[https://github.com/beeevita/evoprompt#contributing](https://github.com/beeevita/evoprompt#contributing)

This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit [https://cla.opensource.microsoft.com](https://cla.opensource.microsoft.com).

When you submit a pull request, a CLA bot will automatically determine whether you need to provide a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

[https://github.com/beeevita/evoprompt#trademarks](https://github.com/beeevita/evoprompt#trademarks)

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party's policies.

## About

         Official implementation of the paper Connecting Large Language Models with Evolutionary Algorithms Yields Powerful Prompt Optimizers       

### Resources

[Readme](https://github.com/beeevita/evoprompt#readme-ov-file)

### License

[MIT license](https://github.com/beeevita/evoprompt#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/beeevita/EvoPrompt/activity)

### Stars

[238
        stars](https://github.com/beeevita/EvoPrompt/stargazers)

### Watchers

[2
        watching](https://github.com/beeevita/EvoPrompt/watchers)

### Forks

[37
        forks](https://github.com/beeevita/EvoPrompt/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fbeeevita%2FEvoPrompt&report=beeevita+%28user%29)

## [Releases](https://github.com/beeevita/EvoPrompt/releases)

No releases published

## [Packages
      0](https://github.com/users/beeevita/packages?repo_name=EvoPrompt)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/beeevita/EvoPrompt/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          91.8%](https://github.com/beeevita/EvoPrompt/search?l=python)
- [Shell
          8.2%](https://github.com/beeevita/EvoPrompt/search?l=shell)

     You can’t perform that action at this time.
