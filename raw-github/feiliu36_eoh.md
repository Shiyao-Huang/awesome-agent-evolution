---
repo: feiliu36/eoh
url: https://github.com/feiliu36/eoh
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - FeiLiu36/EoH: Evolution of Heuristics · GitHub

**Source**: https://github.com/feiliu36/eoh

---

[Skip to content](https://github.com/feiliu36/eoh#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[FeiLiu36](https://github.com/FeiLiu36)

/
**[EoH](https://github.com/FeiLiu36/EoH)**

Public

- [Notifications](https://github.com/login?return_to=%2FFeiLiu36%2FEoH)You must be signed in to change notification settings
- [Fork
    60](https://github.com/login?return_to=%2FFeiLiu36%2FEoH)
- 
[Star
          319](https://github.com/login?return_to=%2FFeiLiu36%2FEoH)

[https://github.com/FeiLiu36/EoH](https://github.com/FeiLiu36/EoH)

[Branches](https://github.com/FeiLiu36/EoH/branches)[Tags](https://github.com/FeiLiu36/EoH/tags)

[https://github.com/FeiLiu36/EoH/branches](https://github.com/FeiLiu36/EoH/branches)[https://github.com/FeiLiu36/EoH/tags](https://github.com/FeiLiu36/EoH/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History89 Commits89 Commits |  |  |  |
| baseline/funsearch | baseline/funsearch |  |  |
| docs | docs |  |  |
| eoh | eoh |  |  |
| examples | examples |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_CN.md | README_CN.md |  |  |
| version_log.txt | version_log.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

#  EoH: Evolution of Heuristics  

[https://github.com/feiliu36/eoh#eoh-evolution-of-heuristics-](https://github.com/feiliu36/eoh#eoh-evolution-of-heuristics-)

###  A Platform of Evolutionary Computation (EC) + Large Language Model (LLM) for Efficient Automatic Algorithm Design  

[https://github.com/feiliu36/eoh#a-platform-of-evolutionary-computation-ec--large-language-model-llm-for-efficient-automatic-algorithm-design-](https://github.com/feiliu36/eoh#a-platform-of-evolutionary-computation-ec--large-language-model-llm-for-efficient-automatic-algorithm-design-)

[Chinese Version 中文版本](https://github.com/FeiLiu36/EoH/blob/main/README_CN.md)

[https://github.com/FeiLiu36/EOH](https://github.com/FeiLiu36/EOH)[https://github.com/FeiLiu36/EOH/blob/main/LICENSE](https://github.com/FeiLiu36/EOH/blob/main/LICENSE)[https://github.com/FeiLiu36/EOH/releases](https://github.com/FeiLiu36/EOH/releases)[https://github.com/FeiLiu36/EOH/tree/main/docs](https://github.com/FeiLiu36/EOH/tree/main/docs)

Important

This Rep will be maintained at a low frequency. Please visit our latest general-purpose Platform [LLM4AD](https://github.com/Optima-CityU/llm4ad)!

LLM4AD has a modulized framework with diverse methods (EoH, FunSearch, etc) and tasks (Optimization, Machine learning, etc).

A Platform for **Evolutionary Computation** + **Large Language Model** for automatic algorithm design.

[https://github.com/FeiLiu36/EoH/blob/main/docs/figures/eoh.JPG](https://github.com/FeiLiu36/EoH/blob/main/docs/figures/eoh.JPG)

---

## News 🔥

[https://github.com/feiliu36/eoh#news-](https://github.com/feiliu36/eoh#news-)

- 2025.6 🎉🎉 We're excited to share that **EoH** recently set a **New World Record in Circle Packing Problem**, achieving a score of 2.63594 for 26 circles !  [Results here](https://github.com/Optima-CityU/llm4ad/tree/main/example/circle_packing)
- 2024.10.30, Survey Paper [A Systematic Survey on Large Language Models for Algorithm Design](https://arxiv.org/pdf/2410.14716) has been uploaded to Arxiv ! 🎉
- 2024.5.31, [Evolve Cost-aware Acquisition Functions Using Large Language Models](https://arxiv.org/abs/2404.16906) has been accepted at **PPSN 2024 (Best Paper Nomination)** ! 🎉
- 2024.5.31, [Understanding the Importance of Evolutionary Search in Automated Heuristic Design with Large Language Models](https://arxiv.org/pdf/2407.10873) has been accepted at **PPSN 2024**! 🎉
- 2024.5.5, [L-AutoDA: Leveraging Large Language Models for Automated Decision-based Adversarial Attacks](https://arxiv.org/abs/2401.15335) has been accepted at **GECCO 2024**! 🎉
- 2024.5.2, [EoH (Evolution of Heuristics: Towards Efficient Automatic Algorithm Design using Large Language Model)](https://arxiv.org/abs/2401.02051) has been accepted at **ICML 2024 (Oral, Top 1.5%)**! 🎉

---

## Introduction 📖

[https://github.com/feiliu36/eoh#introduction-](https://github.com/feiliu36/eoh#introduction-)

Heuristics are indispensable for tackling complex search and optimization problems. However, manual heuristic design is tedious and demands significant human intuition and experience.

EOH introduces a novel paradigm that leverages the synergy between Large Language Models (LLMs) and Evolutionary Computation (EC) for Automatic Heuristic Design (AHD). The coevolution of thoughts and codes within an evolutionary framework offers superior AHD performance while mitigating computational expenses.

[https://github.com/FeiLiu36/EoH/blob/main/docs/figures/framework.jpg](https://github.com/FeiLiu36/EoH/blob/main/docs/figures/framework.jpg)

EOH designs very competetive algorithms/heuristics in minutes/hours.  Notably, It surpasses FunSearch, identifying superior heuristics with significantly fewer computational budgets (i.e., queries to LLMs) on online bin packing problem.

The following Figure shows the Evolution of EOH on the online bin packing problem. We outline the key **thoughts** and the corresponding **code****snippets** that have contributed to the best results during evolution. Additionally, we mark the prompt strategies that result in improvement. Finally, we present the optimal heuristic in the final population and compare it to the heuristics designed by humans and from FunSearch.

[https://github.com/FeiLiu36/EoH/blob/main/docs/figures/evolution.jpg](https://github.com/FeiLiu36/EoH/blob/main/docs/figures/evolution.jpg)

If you find EoH helpful for your research or applied projects:

```
@inproceedings{fei2024eoh,
    title={Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model},
    author={Fei Liu, Xialiang Tong, Mingxuan Yuan, Xi Lin, Fu Luo, Zhenkun Wang, Zhichao Lu, Qingfu Zhang},
    booktitle={International Conference on Machine Learning (ICML)},
    year={2024},
    url={https://arxiv.org/abs/2401.02051}
}
```

If you are interested on LLM4Opt or EoH, you can:

1. Contact us through email [fliu36-c@my.cityu.edu.hk](mailto:fliu36-c@my.cityu.edu.hk).
2. Visit [a collection of references and research papers on LLM4Opt](https://github.com/FeiLiu36/LLM4Opt)
3. Join our Group (coming soon)

If you encounter any difficulty using the code, you can contact us through the above or submit an [issue](https://github.com/FeiLiu36/EoH/issues)

## Requirements

[https://github.com/feiliu36/eoh#requirements](https://github.com/feiliu36/eoh#requirements)

- python >= 3.10
- numba
- numpy
- joblib

## EoH Example Usage 💻

[https://github.com/feiliu36/eoh#eoh-example-usage-](https://github.com/feiliu36/eoh#eoh-example-usage-)

#### Step 1: Install EoH

[https://github.com/feiliu36/eoh#step-1-install-eoh](https://github.com/feiliu36/eoh#step-1-install-eoh)

We suggest install and run EoH in [conda](https://conda.io/projects/conda/en/latest/index.html) env with python>=3.10

```
cd eoh

pip install .
```

#### Step 2: Try Example:

[https://github.com/feiliu36/eoh#step-2-try-example](https://github.com/feiliu36/eoh#step-2-try-example)

**
Setup your Endpoint and Key for remote LLM or Setup your local LLM before start !
**

For example, set the llm_api_endpoint to "api.deepseek.com", set llm_api_key to "your key", and set llm_model to "deepseek-chat".

```
from eoh import eoh
from eoh.utils.getParas import Paras

# Parameter initilization #
paras = Paras() 

# Set parameters #
paras.set_paras(method = "eoh",    # ['ael','eoh']
                problem = "bp_online", #['tsp_construct','bp_online']
                llm_api_endpoint = "xxx", # set your LLM endpoint
                llm_api_key = "xxx",   # set your LLM key
                llm_model = "gpt-3.5-turbo-1106",
                ec_pop_size = 5, # number of samples in each population
                ec_n_pop = 5,  # number of populations
                exp_n_proc = 4,  # multi-core parallel
                exp_debug_mode = False)

# initilization
evolution = eoh.EVOL(paras)

# run 
evolution.run()
```

###### Example 1: Constructive Algorithm for TSP

[https://github.com/feiliu36/eoh#example-1-constructive-algorithm-for-tsp](https://github.com/feiliu36/eoh#example-1-constructive-algorithm-for-tsp)

```
cd examples/tsp_construct

python runEoH.py
```

**Evaluation**

```
cd examples/tsp_construct/evaluation

copy your heuristic to heuristic.py (Note that the function name/input/output must align with the evaluation block!!)

python runEval.py
```

###### Example 2: Online Bin Packing

[https://github.com/feiliu36/eoh#example-2-online-bin-packing](https://github.com/feiliu36/eoh#example-2-online-bin-packing)

(**
Generate new best heuristic and Beat Funsearch in 30 minutes on your personal computer !
**  i7-10700 2.9Ghz, 32 GB)

```
cd examples/bp_online

python runEoH.py
```

**Evaluation**

```
cd examples/bp_online/evaluation

copy your heuristic to heuristic.py (Note that the function name/input/output must align with the evaluation block!!)

python runEval.py
```

###### Example 3: Use EoH solve your local problem

[https://github.com/feiliu36/eoh#example-3-use-eoh-solve-your-local-problem](https://github.com/feiliu36/eoh#example-3-use-eoh-solve-your-local-problem)

```
cd examples/user_XXX

python runEoH.py
```

### More Examples using EoH Platform (Code & Paper)

[https://github.com/feiliu36/eoh#more-examples-using-eoh-platform-code--paper](https://github.com/feiliu36/eoh#more-examples-using-eoh-platform-code--paper)

| Area | Problem | Paper | Code |
|---|---|---|---|
| Combinatorial Optimization | Online Bin Packing, greedy heuristic | [paper] | code |
|  | TSP, construct heuristic | [paper] | code |
|  | TSP, guided local search | [paper] | code |
|  | Flow Shop Scheduling Problem (FSSP), guided local search | [paper] | code |
| Machine Learning | Attack | paper | code |
| Bayesian Optimization | Cost-aware Acquisition Function Design | paper | code |
| Mathematics | Admissible sets |  |  |
| Physics | Computational fluid dynamics |  |  |

## Use EoH in Your Application

[https://github.com/feiliu36/eoh#use-eoh-in-your-application](https://github.com/feiliu36/eoh#use-eoh-in-your-application)

A Step-by-step guide is provided in [here](https://github.com/FeiLiu36/EoH/blob/main/docs/QuickGuide.md) (coming soon)

## LLMs

[https://github.com/feiliu36/eoh#llms](https://github.com/feiliu36/eoh#llms)

1. Remote LLM + API (e.g., GPT3.5, Deepseek, Gemini Pro) (**Recommended !**): 
  - OpenAI API.
  - [Deepseek API](https://platform.deepseek.com/)
  - Other APIs: 
    - [https://yukonnet.site/](https://yukonnet.site/)
    - [https://github.com/chatanywhere/GPT_API_free](https://github.com/chatanywhere/GPT_API_free)
    - [https://www.api2d.com/](https://www.api2d.com/)

2. Local LLM Deployment + API (e.g., Llamacode, instruct Llama, gemma, deepseek, ...): 
  - Step 1: Download Huggingface Model, for example, download gemma-2b-it (git clone [https://huggingface.co/google/gemma-2b-it](https://huggingface.co/google/gemma-2b-it))
  - Step 2: 
    - cd llm_server
    - python gemma_instruct_server.py

  - Step 3: Copy your url generated by running your server to request.py ( For example, set url='[http://127.0.0.1:11012/completions](http://127.0.0.1:11012/completions)') to test your server deployment.
  - Step 4: Copy your url generated by running your server to runEoH.py in your example. (For example, set url='[http://127.0.0.1:11012/completions](http://127.0.0.1:11012/completions)')
  - Step 5: Python runEoH.py

3. Your Implementation: 
  - If you want to use other LLM or if you want to use your own GPT API or local LLMs, please add your interface in ael/llm

## Related Works on LLM4Opt

[https://github.com/feiliu36/eoh#related-works-on-llm4opt](https://github.com/feiliu36/eoh#related-works-on-llm4opt)

Welcome to visit [a collection of references and research papers on LLM4Opt](https://github.com/FeiLiu36/LLM4Opt)

## Contributors

[https://github.com/feiliu36/eoh#contributors](https://github.com/feiliu36/eoh#contributors)

[https://github.com/RayZhhh.png](https://github.com/RayZhhh.png)[Rui Zhang](https://github.com/RayZhhh)[https://github.com/yzy1996.png](https://github.com/yzy1996.png)[Zhiyuan Yang](https://github.com/yzy1996)[https://github.com/pgg3.png](https://github.com/pgg3.png)[Ping Guo](https://github.com/pgg3)
[https://github.com/ShunyuYao6.png](https://github.com/ShunyuYao6.png)[Shunyu Yao](https://github.com/ShunyuYao6)

## About

         Evolution of Heuristics       

### Resources

[Readme](https://github.com/feiliu36/eoh#readme-ov-file)

### License

[MIT license](https://github.com/feiliu36/eoh#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/FeiLiu36/EoH/activity)

### Stars

[319
        stars](https://github.com/FeiLiu36/EoH/stargazers)

### Watchers

[4
        watching](https://github.com/FeiLiu36/EoH/watchers)

### Forks

[60
        forks](https://github.com/FeiLiu36/EoH/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FFeiLiu36%2FEoH&report=FeiLiu36+%28user%29)

## [Releases](https://github.com/FeiLiu36/EoH/releases)

No releases published

## [Packages
      0](https://github.com/users/FeiLiu36/packages?repo_name=EoH)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/FeiLiu36/EoH/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.4%](https://github.com/FeiLiu36/EoH/search?l=python)
- [Jupyter Notebook
          2.6%](https://github.com/FeiLiu36/EoH/search?l=jupyter-notebook)

     You can’t perform that action at this time.
