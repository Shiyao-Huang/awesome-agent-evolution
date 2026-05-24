---
repo: aimagelab/mammoth
url: https://github.com/aimagelab/mammoth
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - aimagelab/mammoth: An Extendible (General) Continual Learning Framework based on Pytorch - official codebase of Dark Experience for General Continual Learning · GitHub

**Source**: https://github.com/aimagelab/mammoth

---

[Skip to content](https://github.com/aimagelab/mammoth#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[aimagelab](https://github.com/aimagelab)

/
**[mammoth](https://github.com/aimagelab/mammoth)**

Public

- [Notifications](https://github.com/login?return_to=%2Faimagelab%2Fmammoth)You must be signed in to change notification settings
- [Fork
    151](https://github.com/login?return_to=%2Faimagelab%2Fmammoth)
- 
[Star
          812](https://github.com/login?return_to=%2Faimagelab%2Fmammoth)

[https://github.com/aimagelab/mammoth](https://github.com/aimagelab/mammoth)

[Branches](https://github.com/aimagelab/mammoth/branches)[Tags](https://github.com/aimagelab/mammoth/tags)

[https://github.com/aimagelab/mammoth/branches](https://github.com/aimagelab/mammoth/branches)[https://github.com/aimagelab/mammoth/tags](https://github.com/aimagelab/mammoth/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History502 Commits502 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| backbone | backbone |  |  |
| datasets | datasets |  |  |
| docs | docs |  |  |
| examples/notebooks | examples/notebooks |  |  |
| hub/model_cards | hub/model_cards |  |  |
| models | models |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| utils | utils |  |  |
| .gitignore | .gitignore |  |  |
| AGENTS.md | AGENTS.md |  |  |
| LICENSE | LICENSE |  |  |
| NOTICE.md | NOTICE.md |  |  |
| README.md | README.md |  |  |
| REPRODUCIBILITY.md | REPRODUCIBILITY.md |  |  |
| __init__.py | __init__.py |  |  |
| gem_license | gem_license |  |  |
| main.py | main.py |  |  |
| py.typed | py.typed |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements-optional.txt | requirements-optional.txt |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/aimagelab/mammoth/blob/master/docs/_static/mammoth_banner.svg](https://github.com/aimagelab/mammoth/blob/master/docs/_static/mammoth_banner.svg)

[https://camo.githubusercontent.com/a05ae52d1a9eab7c6825367fc62992b1a62d3c19361f0a2f58937331b33ebc46/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f636f6d6d69742d61637469766974792f6d2f61696d6167656c61622f6d616d6d6f7468](https://camo.githubusercontent.com/a05ae52d1a9eab7c6825367fc62992b1a62d3c19361f0a2f58937331b33ebc46/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f636f6d6d69742d61637469766974792f6d2f61696d6167656c61622f6d616d6d6f7468)[https://aimagelab.github.io/mammoth/index.html](https://aimagelab.github.io/mammoth/index.html)[https://camo.githubusercontent.com/eb0826828da6a6fb5ba83f91884e9a801eed421b98b3cb020c9ca289660cc958/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f61696d6167656c61622f6d616d6d6f74683f7374796c653d736f6369616c](https://camo.githubusercontent.com/eb0826828da6a6fb5ba83f91884e9a801eed421b98b3cb020c9ca289660cc958/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f61696d6167656c61622f6d616d6d6f74683f7374796c653d736f6369616c)[https://camo.githubusercontent.com/bcd4468f67b0ce83e87267d3d338e0b83f71f442ab999cf6a9ccf931d29103a9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5079546f7263682d2532334545344332432e7376673f266c6f676f3d5079546f726368266c6f676f436f6c6f723d7768697465](https://camo.githubusercontent.com/bcd4468f67b0ce83e87267d3d338e0b83f71f442ab999cf6a9ccf931d29103a9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5079546f7263682d2532334545344332432e7376673f266c6f676f3d5079546f726368266c6f676f436f6c6f723d7768697465)

# 🦣 Mammoth - A PyTorch Framework for Benchmarking Continual Learning

[https://github.com/aimagelab/mammoth#-mammoth---a-pytorch-framework-for-benchmarking-continual-learning](https://github.com/aimagelab/mammoth#-mammoth---a-pytorch-framework-for-benchmarking-continual-learning)

*Mammoth* is built to streamline the development and benchmark of continual learning research. With **more than 70 methods and 20 datasets**, it includes the most complete list competitors and benchmarks for research purposes.

The core idea of Mammoth is that it is designed to be modular, easy to extend, and - most importantly - *easy to debug*.

With Mammoth, nothing is set in stone. You can easily add new models, datasets, training strategies, or functionalities.

## 📢 News

[https://github.com/aimagelab/mammoth#-news](https://github.com/aimagelab/mammoth#-news)

### [Task Arithmetic with KFAC regularization](https://arxiv.org/pdf/2602.17385)

[https://github.com/aimagelab/mammoth#task-arithmetic-with-kfac-regularization](https://github.com/aimagelab/mammoth#task-arithmetic-with-kfac-regularization)

- Accepted @ ICLR 2026

You can now run it as:

```
python main.py --loadcheck <hf-checkpoint-url>
python main.py --model tak --load_fisher 1 --fisher_cache hf://<user-or-org>/<repo>/<path>
```

## 📖 Table of Contents

[https://github.com/aimagelab/mammoth#-table-of-contents](https://github.com/aimagelab/mammoth#-table-of-contents)

- [Documentation](https://aimagelab.github.io/mammoth/index.html)
  - [Getting Started](https://aimagelab.github.io/mammoth/getting_started/index.html)
  - [How to Run](https://aimagelab.github.io/mammoth/how_to_run/index.html)
  - [How to Upgrade](https://aimagelab.github.io/mammoth/how_to_upgrade/index.html)
  - [Models Reference](https://aimagelab.github.io/mammoth/models/index.html)
  - [Datasets Reference](https://aimagelab.github.io/mammoth/datasets/index.html)
  - [Backbone Reference](https://aimagelab.github.io/mammoth/backbone/index.html)
  - [Utils Reference](https://aimagelab.github.io/mammoth/utils/index.html)

- [Setup](https://github.com/aimagelab/mammoth#setup)
- [Examples](https://github.com/aimagelab/mammoth#examples)
  - [Run a model](https://github.com/aimagelab/mammoth#run-a-model)
  - [Build a new model](https://github.com/aimagelab/mammoth#build-a-new-model)
  - [Build a new dataset](https://github.com/aimagelab/mammoth#build-a-new-dataset)

- [New Features](https://github.com/aimagelab/mammoth#new-features)
- [Update Roadmap](https://github.com/aimagelab/mammoth#update-roadmap)
- [Models](https://github.com/aimagelab/mammoth#models)
- [Datasets](https://github.com/aimagelab/mammoth#datasets)
- [Citing the library](https://github.com/aimagelab/mammoth#citing-the-library)
- [On the reproducibility of Mammoth](https://github.com/aimagelab/mammoth#on-the-reproducibility-of-mammoth)
- [Contributing](https://github.com/aimagelab/mammoth#contributing)

## 📚 Documentation

[https://github.com/aimagelab/mammoth#-documentation](https://github.com/aimagelab/mammoth#-documentation)

[Check out our guides on using Mammoth for continual learning research](https://aimagelab.github.io/mammoth/)

## ⚙️ Setup

[https://github.com/aimagelab/mammoth#%EF%B8%8F-setup](https://github.com/aimagelab/mammoth#%EF%B8%8F-setup)

- 📥 Install with `pip install -r requirements.txt` or run it directly with `uv run python main.py ...`

> **Note**: PyTorch version >= 2.1.0 is required for scaled_dot_product_attention. If you cannot support this requirement, uncomment the lines 136-139 under `scaled_dot_product_attention` in `backbone/vit.py`.

- 🚀 Use `main.py` to run experiments.
- 🧩 New models can be added to the `models/` folder.
- 📊 New datasets can be added to the `datasets/` folder.

## 🧪 Examples

[https://github.com/aimagelab/mammoth#-examples](https://github.com/aimagelab/mammoth#-examples)

### Run a model

[https://github.com/aimagelab/mammoth#run-a-model](https://github.com/aimagelab/mammoth#run-a-model)

The following command will run the model `derpp` on the dataset `seq-cifar100` with a buffer of 500 samples the some random hyperparameters for *lr*, *alpha*, and *beta*:

```
python main.py --model derpp --dataset seq-cifar100 --alpha 0.5 --beta 0.5 --lr 0.001 --buffer_size 500
```

To run the model with the best hyperparameters, use the `--model_config=best` argument:

```
python main.py --model derpp --dataset seq-cifar100 --model_config best
```

> NOTE: the `--model_config` argument will look for a file `<model_name>.yaml` in the `models/config/` folder. This file should contain the hyperparameters for the best configuration of the model. You can find more information in [the documentation](https://aimagelab.github.io/mammoth/models/model_arguments.html#model-configurations-and-best-arguments).

### Build a new model

[https://github.com/aimagelab/mammoth#build-a-new-model](https://github.com/aimagelab/mammoth#build-a-new-model)

See the [documentation](https://aimagelab.github.io/mammoth/models/build_a_model.html) for a detailed guide on how to create a new model.

### Build a new dataset

[https://github.com/aimagelab/mammoth#build-a-new-dataset](https://github.com/aimagelab/mammoth#build-a-new-dataset)

See the [documentation](https://aimagelab.github.io/mammoth/datasets/build_a_dataset.html) for a detailed guide on how to create a new dataset.

### Upload artifacts to Hugging Face

[https://github.com/aimagelab/mammoth#upload-artifacts-to-hugging-face](https://github.com/aimagelab/mammoth#upload-artifacts-to-hugging-face)

Mammoth provides a generic uploader script for checkpoints, caches, and any other artifacts:

```
uv run python scripts/upload_to_hf.py --repo-id <user-or-org>/<repo> --local-dir /path/to/artifacts --pattern "**/*"
```

Useful options:

- `--remote-dir <path/in/repo>`
- `--repo-type model|dataset|space`
- `--revision <branch-or-tag>`
- `--exclude <glob>` (can be repeated)
- `--dry-run`

## 🆕 New Features

[https://github.com/aimagelab/mammoth#-new-features](https://github.com/aimagelab/mammoth#-new-features)

- 

`--loadcheck` option now can load the arguments saved from the checkpoint, so you can resume the training from the last checkpoint by just running `python main.py --loadcheck <checkpoint_name>`.

- 

The training now captures the SIGINT signal (Ctrl+C) to gracefully stop the training process and save the current state. The checkpoint is saved in `checkpoints/paused/` directory. This can be disabled by setting `--save_after_interrupt=0` in the command line.

- 

Add the option `--checkpoint_path` to specify a custom path for saving checkpoints. By default, checkpoints are saved in the `checkpoints/` directory.

- 

Now Mammoth can be installed with pip to be used as a library. You can install it with `pip install -e .` (or just `uv sync`) and then import it in your Python scripts. Examples of usage can be found in the `examples/` directory.

NOTE: Mammoth is not yet available on PyPI, so you need to clone the repository and run the command above to install it.

## 🗺️ Update Roadmap

[https://github.com/aimagelab/mammoth#%EF%B8%8F-update-roadmap](https://github.com/aimagelab/mammoth#%EF%B8%8F-update-roadmap)

All the code is under active development. Here are some of the features we are working on:

- 🧠 **New models**: We are continuously working on adding new models to the repository.
- 🔄 **New training modalities**: New training regimes, such a *regression*, *segmentation*, *detection*, etc.
- 📊 **Openly accessible result dashboard**: The ideal would be a dashboard to visualize the results of all the models in both their respective settings (to prove their reproducibility) and in a general setting (to compare them). *This may take some time, since compute is not free.*

All the new additions will try to preserve the current structure of the repository, making it easy to add new functionalities with a simple merge.

## 🧠 Models

[https://github.com/aimagelab/mammoth#-models](https://github.com/aimagelab/mammoth#-models)

Mammoth currently supports **more than 70** models, with new releases covering the main competitors in literature.

**Click to expand model list**
- AttriCLIP: A Non-Incremental Learner for Incremental Knowledge Learning (AttriCLIP): `attriclip`.
- Bias Correction (BiC): `bic`.
- CaSpeR-IL (on DER++, X-DER with RPC, iCaRL, and ER-ACE): `derpp_casper`, `xder_rpc_casper`, `icarl_casper`, `er_ace_casper`.
- CODA-Prompt: COntinual Decomposed Attention-based Prompting for Rehearsal-Free Continual Learning (CODA-Prompt) - *Requires*`pip install timm==0.9.8`: `coda-prompt`.
- Continual Contrastive Interpolation Consistency (CCIC) - *Requires*`pip install kornia`: `ccic`.
- Continual Generative training for Incremental prompt-Learning (CGIL): `cgil`
- Contrastive Language-Image Pre-Training (CLIP): `clip` (*static* method with no learning).
- CSCCT (on DER++, X-DER with RPC, iCaRL, and ER-ACE): `derpp_cscct`, `xder_rpc_cscct`, `icarl_cscct`, `er_ace_cscct`.
- Dark Experience for General Continual Learning: a Strong, Simple Baseline (DER & DER++): `der` and `derpp`.
- DualPrompt: Complementary Prompting for Rehearsal-free Continual Learning (DualPrompt) - *Requires*`pip install timm==0.9.8`: `dualprompt`.
- Efficient Lifelong Learning with A-GEM (A-GEM, A-GEM-R - A-GEM with reservoir buffer): `agem`, `agem_r`.
- Experience Replay (ER): `er`.
- Experience Replay with Asymmetric Cross-Entropy (ER-ACE): `er_ace`.
- eXtended-DER (X-DER): `xder` (full version), `xder_ce` (X-DER with CE), `xder_rpc` (X-DER with RPC).
- Function Distance Regularization (FDR): `fdr`.
- Generating Instance-level Prompts for Rehearsal-free Continual Learning (DAP): `dap`.
- Gradient Episodic Memory (GEM) - *Unavailable on windows*: `gem`.
- Greedy gradient-based Sample Selection (GSS): `gss`.
- Greedy Sampler and Dumb Learner (GDumb): `gdumb`.
- Hindsight Anchor Learning (HAL): `hal`.
- Image-aware Decoder Enhanced à la Flamingo with Interleaved Cross-attentionS (IDEFICS): `idefics` (*static* method with no learning).
- Incremental Classifier and Representation Learning (iCaRL): `icarl`.
- Joint training for the General Continual setting: `joint_gcl` (*only for General Continual*).
- Large Language and Vision Assistant (LLAVA): `llava` (*static* method with no learning).
- Learning a Unified Classifier Incrementally via Rebalancing (LUCIR): `lucir`.
- Learning to Prompt (L2P) - *Requires*`pip install timm==0.9.8`: `l2p`.
- Learning without Forgetting (LwF): `lwf`.
- Learning without Forgetting adapted for Multi-Class classification (LwF.MC): `lwf_mc` (from the iCaRL paper).
- Learning without Shortcuts (LwS): `lws`.
- LiDER (on DER++, iCaRL, GDumb, and ER-ACE): `derpp_lider`, `icarl_lider`, `gdumb_lider`, `er_ace_lider`.
- May the Forgetting Be with You: Alternate Replay for Learning with Noisy Labels (AER & ABS): `er_ace_aer_abs`.
- Meta-Experience Replay (MER): `mer`.
- Mixture-of-Experts Adapters (MoE Adapters): `moe_adapters`.
- Online Continual Learning on a Contaminated Data Stream with Blurry Task Boundaries (PuriDivER): `puridiver`.
- online Elastic Weight Consolidation (oEWC): `ewc_on`.
- Progressive Neural Networks (PNN): `pnn`.
- Random Projections and Pre-trained Models for Continual Learning (RanPAC): `ranpac`.
- Regular Polytope Classifier (RPC): `rpc`.
- Rethinking Experience Replay: a Bag of Tricks for Continual Learning (ER-ACE with tricks): `er_ace_tricks`.
- Semantic Two-level Additive Residual Prompt (STAR-Prompt): `starprompt`. Also includes the first-stage only (`first_stage_starprompt`) and second-stage only (`second_stage_starprompt`) versions.
- SLCA: Slow Learner with Classifier Alignment for Continual Learning on a Pre-trained Model (SLCA) - *Requires*`pip install timm==0.9.8`: `slca`.
- Slow Learner with Classifier Alignment (SLCA): `slca`.
- Synaptic Intelligence (SI): `si`.
- Task Arithmetic with KFAC regularization (TAK): `tak`.
- Transfer without Forgetting (TwF): `twf`.
- ZSCL: Zero-Shot Continual Learning: `zscl`.

## 📊 Datasets

[https://github.com/aimagelab/mammoth#-datasets](https://github.com/aimagelab/mammoth#-datasets)

**NOTE**: Datasets are automatically downloaded in `data/`.

- This can be changed by changing the `base_path` function in `utils/conf.py` or using the `--base_path` argument.
- The `data/` folder should not be tracked by *git* and is created automatically if missing.

**Click to expand dataset list**

Mammoth currently includes **23** datasets, covering *toy classification problems* (different versions of MNIST), *standard natural-image domains* (CIFAR, Imagenet-R, TinyImagenet, MIT-67), *fine-grained classification domains* (Cars-196, CUB-200), *aerial domains* (EuroSAT-RGB, Resisc45), *medical domains* (CropDisease, ISIC, ChestX).

- Sequential MNIST (*Class-Il / Task-IL*): `seq-mnist`.
- Permuted MNIST (*Domain-IL*): `perm-mnist`.
- Rotated MNIST (*Domain-IL*): `rot-mnist`.
- MNIST-360 (*General Continual Learning*): `mnist-360`.
- Sequential CIFAR-10 (*Class-Il / Task-IL*): `seq-cifar10`.
- Sequential CIFAR-10 resized 224x224 (ViT version) (*Class-Il / Task-IL*): `seq-cifar10-224`.
- Sequential CIFAR-10 resized 224x224 (ResNet50 version) (*Class-Il / Task-IL*): `seq-cifar10-224-rs`.
- Sequential Tiny ImageNet (*Class-Il / Task-IL*): `seq-tinyimg`.
- Sequential Tiny ImageNet resized 32x32 (*Class-Il / Task-IL*): `seq-tinyimg-r`.
- Sequential CIFAR-100 (*Class-Il / Task-IL*): `seq-cifar100`.
- Sequential CIFAR-100 resized 224x224 (ViT version) (*Class-Il / Task-IL*): `seq-cifar100-224`.
- Sequential CIFAR-100 resized 224x224 (ResNet50 version) (*Class-Il / Task-IL*): `seq-cifar100-224-rs`.
- Sequential CUB-200 (*Class-Il / Task-IL*): `seq-cub200`.
- Sequential ImageNet-R (*Class-Il / Task-IL*): `seq-imagenet-r`.
- Sequential Cars-196 (*Class-Il / Task-IL*): `seq-cars196`.
- Sequential RESISC45 (*Class-Il / Task-IL*): `seq-resisc45`.
- Sequential EuroSAT-RGB (*Class-Il / Task-IL*): `seq-eurosat-rgb`.
- Sequential ISIC (*Class-Il / Task-IL*): `seq-isic`.
- Sequential ChestX (*Class-Il / Task-IL*): `seq-chestx`.
- Sequential MIT-67 (*Class-Il / Task-IL*): `seq-mit67`.
- Sequential CropDisease (*Class-Il / Task-IL*): `seq-cropdisease`.
- Sequential CelebA (*Biased-Class-Il*): `seq-celeba`. *This dataset is multi-label (i.e., trains with binary cross-entropy)*

## 📝 Citing the library

[https://github.com/aimagelab/mammoth#-citing-the-library](https://github.com/aimagelab/mammoth#-citing-the-library)

```
@article{boschini2022class,
  title={Class-Incremental Continual Learning into the eXtended DER-verse},
  author={Boschini, Matteo and Bonicelli, Lorenzo and Buzzega, Pietro and Porrello, Angelo and Calderara, Simone},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  year={2022},
  publisher={IEEE}
}

@inproceedings{buzzega2020dark,
 author = {Buzzega, Pietro and Boschini, Matteo and Porrello, Angelo and Abati, Davide and Calderara, Simone},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {H. Larochelle and M. Ranzato and R. Hadsell and M. F. Balcan and H. Lin},
 pages = {15920--15930},
 publisher = {Curran Associates, Inc.},
 title = {Dark Experience for General Continual Learning: a Strong, Simple Baseline},
 volume = {33},
 year = {2020}
}
```

## 🔬 On the reproducibility of Mammoth

[https://github.com/aimagelab/mammoth#-on-the-reproducibility-of-mammoth](https://github.com/aimagelab/mammoth#-on-the-reproducibility-of-mammoth)

We take great pride and care in the reproducibility of the models in Mammoth and we are commited to provide the community with the most accurate results possible. To this end, we provide a *REPRODUCIBILITY.md* file in the repository that contains the results of the models in Mammoth.

The performance of each model is evaluated on the same dataset used in the paper and we report in *REPRODUCIBILITY.md* the list of models that have been verified. We also provide the exact command used to train the model (most times, it follows `python main.py --model <model-name> --dataset <dataset-name> --model_config best`).

We encourage the community to report any issues with the reproducibility of the models in Mammoth. If you find any issues, please open an issue in the GitHub repository or contact us directly.

**Disclaimer**: Since there are many models in Mammoth (and some of them predate PyTorch), the process of filling the *REPRODUCIBILITY.md* file is ongoing. We are working hard to fill the file with the results of all models in Mammoth. If you need the results of a specific model, please open an issue in the GitHub repository or contact us directly.

> Does this mean that the models that are not in the *REPRODUCIBILITY.md* file do not reproduce?

No! It means that we have not yet found the appropriate dataset and hyperparameters to fill the file with the results of that model. We are working hard to fill the file with the results of all models in Mammoth. If you need the results of a specific model, please open an issue in the GitHub repository or contact us directly.

## 🤝 Contributing

[https://github.com/aimagelab/mammoth#-contributing](https://github.com/aimagelab/mammoth#-contributing)

Pull requests are welcome!

[https://github.com/aimagelab/mammoth/graphs/contributors](https://github.com/aimagelab/mammoth/graphs/contributors)

Please use autopep8 with parameters:

```
--aggressive
--max-line-length=200
--ignore=E402
```

## Previous versions

[https://github.com/aimagelab/mammoth#previous-versions](https://github.com/aimagelab/mammoth#previous-versions)

If you're interested in a version of this repo that only includes the original code for *"Dark Experience for General Continual Learning: a Strong, Simple Baseline"* or *"Class-Incremental Continual Learning into the eXtended DER-verse"*, please use the following tags:

`neurips2020` for DER (NeurIPS 2020).
`tpami2023` for X-DER (TPAMI 2022).

## About

         An Extendible (General) Continual Learning Framework based on Pytorch - official codebase of Dark Experience for General Continual Learning       

### Topics

[deep-learning](https://github.com/topics/deep-learning)[pytorch](https://github.com/topics/pytorch)[knowledge-distillation](https://github.com/topics/knowledge-distillation)[der](https://github.com/topics/der)[continual-learning](https://github.com/topics/continual-learning)[experience-replay](https://github.com/topics/experience-replay)[neurips2020](https://github.com/topics/neurips2020)[dark-experience-replay](https://github.com/topics/dark-experience-replay)

### Resources

[Readme](https://github.com/aimagelab/mammoth#readme-ov-file)
