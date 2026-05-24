---
repo: self-play-language-models/spin-peft
url: https://github.com/self-play-language-models/spin-peft
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Self-Play-Language-Models/spin-peft · GitHub

**Source**: https://github.com/self-play-language-models/spin-peft

---

[Skip to content](https://github.com/self-play-language-models/spin-peft#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Self-Play-Language-Models](https://github.com/Self-Play-Language-Models)

/
**[spin-peft](https://github.com/Self-Play-Language-Models/spin-peft)**

Public

- [Notifications](https://github.com/login?return_to=%2FSelf-Play-Language-Models%2Fspin-peft)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FSelf-Play-Language-Models%2Fspin-peft)
- 
[Star
          4](https://github.com/login?return_to=%2FSelf-Play-Language-Models%2Fspin-peft)

[https://github.com/Self-Play-Language-Models/spin-peft](https://github.com/Self-Play-Language-Models/spin-peft)

[Branches](https://github.com/Self-Play-Language-Models/spin-peft/branches)[Tags](https://github.com/Self-Play-Language-Models/spin-peft/tags)

[https://github.com/Self-Play-Language-Models/spin-peft/branches](https://github.com/Self-Play-Language-Models/spin-peft/branches)[https://github.com/Self-Play-Language-Models/spin-peft/tags](https://github.com/Self-Play-Language-Models/spin-peft/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History15 Commits15 Commits |  |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| generate_data.py | generate_data.py |  |  |
| import_data.py | import_data.py |  |  |
| inspect_data.py | inspect_data.py |  |  |
| run_dpo.py | run_dpo.py |  |  |
| run_spin.py | run_spin.py |  |  |
| sft.py | sft.py |  |  |
| spin.ipynb | spin.ipynb |  |  |
| spin.py | spin.py |  |  |
| spin2-Copy1.py | spin2-Copy1.py |  |  |
| spin2-Copy2.py | spin2-Copy2.py |  |  |
| spin2.ipynb | spin2.ipynb |  |  |
| spin2.py | spin2.py |  |  |
| spin_training.py | spin_training.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models

[https://github.com/self-play-language-models/spin-peft#self-play-fine-tuning-converts-weak-language-models-to-strong-language-models](https://github.com/self-play-language-models/spin-peft#self-play-fine-tuning-converts-weak-language-models-to-strong-language-models)

This is an implementation of the paper:

> [Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models](https://arxiv.org/abs/2401.01335)
>  Zixiang Chen, Yihe Deng, Huizhuo Yuan, Kaixuan Ji, Quanquan Gu

---

# Summary

[https://github.com/self-play-language-models/spin-peft#summary](https://github.com/self-play-language-models/spin-peft#summary)

## Abstract

[https://github.com/self-play-language-models/spin-peft#abstract](https://github.com/self-play-language-models/spin-peft#abstract)

> Harnessing the power of human-annotated data through Supervised Fine-Tuning (SFT) is pivotal for advancing Large Language Models (LLMs). In this paper, we delve into the prospect of growing a strong LLM out of a weak one without the need for acquiring additional human-annotated data. We propose a new fine-tuning method called Self-Play fIne-tuNing (SPIN), which starts from a supervised fine-tuned model. At the heart of SPIN lies a self-play mechanism, where the LLM refines its capability by playing against instances of itself. More specifically, the LLM generates its own training data from its previous iterations, refining its policy by discerning these self-generated responses from those obtained from human-annotated data. Our method progressively elevates the LLM from a nascent model to a formidable one, unlocking the full potential of human-annotated demonstration data for SFT. Theoretically, we prove that the global optimum to the training objective function of our method is achieved only when the LLM policy aligns with the target data distribution. Empirically, we evaluate our method on several benchmark datasets including the HuggingFace Open LLM Leaderboard, MT-Bench, and datasets from Big-Bench. Our results show that SPIN can significantly improve the LLM’s performance across a variety of benchmarks and even outperform models trained through direct preference optimization (DPO) supplemented with extra GPT-4 preference data. This sheds light on the promise of self-play, enabling the achievement of human-level performance in LLMs without the need for expert opponents.

## Algorithm

[https://github.com/self-play-language-models/spin-peft#algorithm](https://github.com/self-play-language-models/spin-peft#algorithm)

For each iteration ( t ):

- The **opponent** is the model with parameters ( \theta_t ) from the previous iteration.
- The **main player** is conceptually the role of the updated model for the current iteration, which is being trained and will have parameters ( \theta_{t+1} ) after the update.

When we move to the next iteration ( t+1 ):

- The newly updated model with parameters ( \theta_{t+1} ) becomes the opponent for this iteration.
- The main player will again be the role of this model after it is updated in the current iteration, which will result in a new set of parameters ( \theta_{t+2} ).

So, for each iteration, the same model updates its parameters and switches roles from the main player (the model being updated) to the opponent (the model generating synthetic responses) for the next iteration. This cycle continues until the training process concludes after ( T ) iterations.

To put it simply, after each training step, the same model takes on the role of the opponent for generating synthetic data for the next iteration, and then it is trained (as the main player) to update its parameters.

### Objective

[https://github.com/self-play-language-models/spin-peft#objective](https://github.com/self-play-language-models/spin-peft#objective)

⚠️ This repository includes additional LoRA code to use the SPIN algorithm with parameter efficient training

We are implementing a fine-tuning method for a pre-trained language model (LM), specifically GPT-Neo, using the Self-Play Fine-Tuning (SPIN) approach described in a research paper. The goal is to enhance the LM's performance by iteratively training it to distinguish between its own synthetic responses and ground truth responses.

#### Methodology - Self-Play Fine-Tuning (SPIN)

[https://github.com/self-play-language-models/spin-peft#methodology---self-play-fine-tuning-spin](https://github.com/self-play-language-models/spin-peft#methodology---self-play-fine-tuning-spin)

1. 

**Two Roles – Opponent and Main Player**: The LM takes on two roles during training:

  - **Opponent**: Generates synthetic responses based on prompts from a dataset.
  - **Main Player**: Trains to differentiate between these synthetic responses and the ground truth responses.

2. 

**Iterative Training Process**: The process involves multiple iterations where the model in the main player role is trained against its own outputs (synthetic responses) generated in the opponent role from the previous iteration.

3. 

**Low-Rank Adaptation (LoRA) (Optional, skip for full parameter training)**: To make this training process efficient, we utilize LoRA, a parameter-efficient fine-tuning method that adds trainable low-rank matrices to certain layers of the LM. This approach drastically reduces the number of parameters that need fine-tuning, facilitating rapid adaptation.

4. 

**Adapting to New Roles**: After each training iteration, the roles switch – the updated model becomes the new opponent for the next iteration.

## Implementation Details

[https://github.com/self-play-language-models/spin-peft#implementation-details](https://github.com/self-play-language-models/spin-peft#implementation-details)

1. 

**Model Setup**:

  - Utilize GPT-Neo 2.7B as the base model.
  - Implement LoRA for parameter-efficient training.

2. 

**LoRA Configuration**:

  - Apply LoRA to the LM's linear layers.
  - Configure LoRA with specific parameters like rank (`r`), scaling factor (`lora_alpha`), and dropout (`lora_dropout`).

3. 

**Training Procedure**:

  - In each iteration, first generate synthetic responses (opponent role).
  - Then, train the model (main player role) using a specialized loss function.

4. 

**Specialized Loss Function**:

  - Implement SPIN loss that maximizes the difference in predicted probabilities for ground truth and synthetic responses.
  - Use logistic loss to calculate this difference.

5. 

**Parameter-Efficient Training with LoRA**:

  - Use `LoraModel` from the PEFT library to add LoRA layers to the LM.
  - Toggle LoRA layers' trainability using `disable_adapter_layers` and `enable_adapter_layers` for switching between opponent and main player roles.

6. 

**Optimizer**:

  - Use AdamW optimizer, ensuring it only updates parameters that are currently set to be trainable (i.e., the LoRA parameters during the main player phase).

7. 

**Considerations**:

  - Memory Efficiency: By using LoRA, we efficiently manage memory usage since we don't have to duplicate the entire model for the two roles but only modify a small set of additional parameters.
  - Iterative Role Switching: Carefully manage the role switching between opponent and main player to ensure that the model correctly learns to distinguish between synthetic and real responses.
  - Dataset and Loss Function: The choice of dataset and the design of the SPIN loss function are crucial for the success of the training process.

### Conclusion

[https://github.com/self-play-language-models/spin-peft#conclusion](https://github.com/self-play-language-models/spin-peft#conclusion)

This implementation aims to improve the LM's performance by iteratively training it in a self-play manner, leveraging the efficiency of LoRA for fine-tuning. The process involves careful handling of roles, efficient use of memory, and a specific training regimen that aligns with the principles outlined in the SPIN methodology.

## About

         No description, website, or topics provided.       

### Resources

[Readme](https://github.com/self-play-language-models/spin-peft#readme-ov-file)

### License

[MIT license](https://github.com/self-play-language-models/spin-peft#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Self-Play-Language-Models/spin-peft/activity)

[Custom properties](https://github.com/Self-Play-Language-Models/spin-peft/custom-properties)

### Stars

[4
        stars](https://github.com/Self-Play-Language-Models/spin-peft/stargazers)

### Watchers

[1
        watching](https://github.com/Self-Play-Language-Models/spin-peft/watchers)

### Forks

[0
        forks](https://github.com/Self-Play-Language-Models/spin-peft/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FSelf-Play-Language-Models%2Fspin-peft&report=Self-Play-Language-Models+%28user%29)

## [Releases](https://github.com/Self-Play-Language-Models/spin-peft/releases)

No releases published

## [Packages
      0](https://github.com/orgs/Self-Play-Language-Models/packages?repo_name=spin-peft)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Self-Play-Language-Models/spin-peft/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          56.4%](https://github.com/Self-Play-Language-Models/spin-peft/search?l=jupyter-notebook)
- [Python
          43.6%](https://github.com/Self-Play-Language-Models/spin-peft/search?l=python)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

