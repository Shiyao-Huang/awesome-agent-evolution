---
repo: nickatomlin/lm-selfplay
url: https://github.com/nickatomlin/lm-selfplay
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - nickatomlin/lm-selfplay: Code for the paper "Efficacy of LM Self-Play in Non-Zero-Sum Games" · GitHub

**Source**: https://github.com/nickatomlin/lm-selfplay

---

[Skip to content](https://github.com/nickatomlin/lm-selfplay#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[nickatomlin](https://github.com/nickatomlin)

/
**[lm-selfplay](https://github.com/nickatomlin/lm-selfplay)**

Public

- [Notifications](https://github.com/login?return_to=%2Fnickatomlin%2Flm-selfplay)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fnickatomlin%2Flm-selfplay)
- 
[Star
          9](https://github.com/login?return_to=%2Fnickatomlin%2Flm-selfplay)

[https://github.com/nickatomlin/lm-selfplay](https://github.com/nickatomlin/lm-selfplay)

[Branches](https://github.com/nickatomlin/lm-selfplay/branches)[Tags](https://github.com/nickatomlin/lm-selfplay/tags)

[https://github.com/nickatomlin/lm-selfplay/branches](https://github.com/nickatomlin/lm-selfplay/branches)[https://github.com/nickatomlin/lm-selfplay/tags](https://github.com/nickatomlin/lm-selfplay/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| data | data |  |  |
| games | games |  |  |
| notebooks | notebooks |  |  |
| prompts | prompts |  |  |
| web_interface | web_interface |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| analysis.py | analysis.py |  |  |
| finetuning.py | finetuning.py |  |  |
| play.py | play.py |  |  |
| players.py | players.py |  |  |
| requirements.txt | requirements.txt |  |  |
| utils.py | utils.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Analyzing Language Model Self-Play

[https://github.com/nickatomlin/lm-selfplay#analyzing-language-model-self-play](https://github.com/nickatomlin/lm-selfplay#analyzing-language-model-self-play)

Code for the paper ["Efficacy of Language Model Self-Play in Non-Zero-Sum Games."](https://arxiv.org/abs/2406.18872) We run experiments on a modified version of the Deal or No Deal game, originally introduced in [Lewis, et al. (2017)](https://arxiv.org/abs/1706.05125). This repository includes code for (1) evaluating language models on Deal or No Deal, (2) finetuning language models via self-play, and (3) a web interface for human-LM experiments.

[https://private-user-images.githubusercontent.com/13228316/343997867-51fac111-a590-4ee7-844d-1109e17376fe.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTg3NzQsIm5iZiI6MTc3OTI5ODQ3NCwicGF0aCI6Ii8xMzIyODMxNi8zNDM5OTc4NjctNTFmYWMxMTEtYTU5MC00ZWU3LTg0NGQtMTEwOWUxNzM3NmZlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3MzQzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzOTAzMGI2NDY0ZDRjNWI3MTY0NDVkZWI3NjEyNzA2Mzc5ZWZlMzZiMTk3YjBiN2ZjODAxYWRkYTc5N2EyY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9._9RO5T99kSXCskDRj9at5V0lYH1wwqcl1ptRIB83Dx8](https://private-user-images.githubusercontent.com/13228316/343997867-51fac111-a590-4ee7-844d-1109e17376fe.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzkyOTg3NzQsIm5iZiI6MTc3OTI5ODQ3NCwicGF0aCI6Ii8xMzIyODMxNi8zNDM5OTc4NjctNTFmYWMxMTEtYTU5MC00ZWU3LTg0NGQtMTEwOWUxNzM3NmZlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA1MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNTIwVDE3MzQzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWIzOTAzMGI2NDY0ZDRjNWI3MTY0NDVkZWI3NjEyNzA2Mzc5ZWZlMzZiMTk3YjBiN2ZjODAxYWRkYTc5N2EyY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9._9RO5T99kSXCskDRj9at5V0lYH1wwqcl1ptRIB83Dx8)

## Setup

[https://github.com/nickatomlin/lm-selfplay#setup](https://github.com/nickatomlin/lm-selfplay#setup)

To install necessary packages, run the following command:

```
pip install -r requirements.txt
```

We use the OpenAI API for model inference and finetuning. In order to run the code in this repository, you will need to set the `OPENAI_API_KEY` and `OPENAI_ORG_ID` environment variables. The current code will default to using the `gpt-3.5-turbo` model unless otherwise specified.

## Language Model Self-Play

[https://github.com/nickatomlin/lm-selfplay#language-model-self-play](https://github.com/nickatomlin/lm-selfplay#language-model-self-play)

Game logic is available in `games/negotiation.py` and LM prompts are available in the `prompts/` folder. The `data/` folder contains detokenized data from [Lewis, et al. (2017)](https://arxiv.org/abs/1706.05125).

### play.py

[https://github.com/nickatomlin/lm-selfplay#playpy](https://github.com/nickatomlin/lm-selfplay#playpy)

Script for running self-play (or human play) for a specific model. To run the script through the command line, specify the following parameters:

- 

`--objective` ["self", "coop", "comp"]: the objective that the games should be played under

- 

`--model` (e.g., `gpt-3.5-turbo`): the language model queried by the OpenAI chat endpoint for self-play

- 

`--temp` (defaults to `1`): temperature parameter for output generation

- 

`--num_runs` (int): the number of games of self-play to run

- 

`--output_dir`: path of the directory to be used for game logging

Example usage:

```
python3 play.py --objective "self" --model "gpt-4" --temp 1 --num_runs 10 --output_dir "data/gpt-4"
```

### finetuning.py

[https://github.com/nickatomlin/lm-selfplay#finetuningpy](https://github.com/nickatomlin/lm-selfplay#finetuningpy)

Script for creating a finetuning job for the data of a specific model. To run the script through the command line, specify the following parameters:

- 

`--dir`: the data directory (specified by the --output_dir flag used by play.py) used to create the training file

- 

`--objective` ["self", "coop", "comp"]: the objective that the training data was generated under (required to determine filtering criteria). Should be one of

- 

`--filter` ["above_avg", "nonzero", "all"]: the criteria on which game samples are filtered. Should be one of "above_avg" (include only game samples that score above the average for this round of self-play), "nonzero" (include any game samples that scored above 0), or "all" (include all game samples)

- 

`--model_id`: the full ID of the OpenAI model to train. For training a base gpt-3.5-turbo model, this should be set to "gpt-3.5-turbo"

- 

`--suffix`: Specifies the desired suffix for the finetuned model. Useful for creating descriptive model IDs.

```
python3 finetuning.py --dir "data/gpt-4/" --objective "self" --filter "above_avg" --model_id "gpt-3.5" --suffix "semi-iter01"
```

### analysis.py

[https://github.com/nickatomlin/lm-selfplay#analysispy](https://github.com/nickatomlin/lm-selfplay#analysispy)

Specifies functions for analysis. Running this script will call the `analyze()` function, which prints a set of statistics for a particular round of self-play. To run the script through the command line, specify the following parameters:

- `--path`: the data directory (specified by the --output_dir flag used by play.py)
- `--objective`: the objective that the round of self-play was played under

```
python3 analysis.py --action "analyze" --path "data/gpt4_ftbm_coop/gpt-4/" --objective "coop"
```

Important: to run this script, you will need to modify the `create_csv()` function with the paths generated by the finetuning code.

### utils.py

[https://github.com/nickatomlin/lm-selfplay#utilspy](https://github.com/nickatomlin/lm-selfplay#utilspy)

Helper functions for extracting info from game data, along with creating training JSONs and starting fine-tuning jobs.

## Human Experiments

[https://github.com/nickatomlin/lm-selfplay#human-experiments](https://github.com/nickatomlin/lm-selfplay#human-experiments)

We also include a Flask website for running human-LM experiments on trained models. To launch the website, run the following  code:

```
cd web_interface
flask run
```

If you run into any issues with our code, please feel free to open a GitHub Issue or email the authors. Thanks!

## Citation

[https://github.com/nickatomlin/lm-selfplay#citation](https://github.com/nickatomlin/lm-selfplay#citation)

```
@misc{liao2024efficacylanguagemodelselfplay,
      title={Efficacy of Language Model Self-Play in Non-Zero-Sum Games}, 
      author={Austen Liao and Nicholas Tomlin and Dan Klein},
      year={2024},
      eprint={2406.18872},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2406.18872}, 
}
```

## About

         Code for the paper "Efficacy of LM Self-Play in Non-Zero-Sum Games"       

[arxiv.org/abs/2406.18872](https://arxiv.org/abs/2406.18872)

### Resources

[Readme](https://github.com/nickatomlin/lm-selfplay#readme-ov-file)

### License

[MIT license](https://github.com/nickatomlin/lm-selfplay#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/nickatomlin/lm-selfplay/activity)

### Stars

[9
        stars](https://github.com/nickatomlin/lm-selfplay/stargazers)

### Watchers

[2
        watching](https://github.com/nickatomlin/lm-selfplay/watchers)

### Forks

[3
        forks](https://github.com/nickatomlin/lm-selfplay/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fnickatomlin%2Flm-selfplay&report=nickatomlin+%28user%29)

## [Releases](https://github.com/nickatomlin/lm-selfplay/releases)

No releases published

## [Packages
      0](https://github.com/users/nickatomlin/packages?repo_name=lm-selfplay)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/nickatomlin/lm-selfplay/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          60.9%](https://github.com/nickatomlin/lm-selfplay/search?l=python)
- [JavaScript
          17.5%](https://github.com/nickatomlin/lm-selfplay/search?l=javascript)
- [HTML
          14.7%](https://github.com/nickatomlin/lm-selfplay/search?l=html)
- [CSS
          4.9%](https://github.com/nickatomlin/lm-selfplay/search?l=css)
- [Jupyter Notebook
          2.0%](https://github.com/nickatomlin/lm-selfplay/search?l=jupyter-notebook)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2017
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

