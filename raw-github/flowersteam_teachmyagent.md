---
repo: flowersteam/teachmyagent
url: https://github.com/flowersteam/teachmyagent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - flowersteam/TeachMyAgent: TeachMyAgent is a testbed platform for Automatic Curriculum Learning methods in Deep RL. · GitHub

**Source**: https://github.com/flowersteam/teachmyagent

---

[Skip to content](https://github.com/flowersteam/teachmyagent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[flowersteam](https://github.com/flowersteam)

/
**[TeachMyAgent](https://github.com/flowersteam/TeachMyAgent)**

Public

- [Notifications](https://github.com/login?return_to=%2Fflowersteam%2FTeachMyAgent)You must be signed in to change notification settings
- [Fork
    5](https://github.com/login?return_to=%2Fflowersteam%2FTeachMyAgent)
- 
[Star
          77](https://github.com/login?return_to=%2Fflowersteam%2FTeachMyAgent)

[https://github.com/flowersteam/TeachMyAgent](https://github.com/flowersteam/TeachMyAgent)

[Branches](https://github.com/flowersteam/TeachMyAgent/branches)[Tags](https://github.com/flowersteam/TeachMyAgent/tags)

[https://github.com/flowersteam/TeachMyAgent/branches](https://github.com/flowersteam/TeachMyAgent/branches)[https://github.com/flowersteam/TeachMyAgent/tags](https://github.com/flowersteam/TeachMyAgent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History46 Commits46 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| TeachMyAgent | TeachMyAgent |  |  |
| benchmark_scripts | benchmark_scripts |  |  |
| notebooks | notebooks |  |  |
| .gitignore | .gitignore |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| run.py | run.py |  |  |
| setup.py | setup.py |  |  |
| slurm_campain_launcher.py | slurm_campain_launcher.py |  |  |
| to_run.txt | to_run.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# TeachMyAgent: a Benchmark for Automatic Curriculum Learning in Deep RL

[https://github.com/flowersteam/teachmyagent#teachmyagent-a-benchmark-for-automatic-curriculum-learning-in-deep-rl](https://github.com/flowersteam/teachmyagent#teachmyagent-a-benchmark-for-automatic-curriculum-learning-in-deep-rl)

- [Paper](https://arxiv.org/abs/2103.09815)
- [Website](http://developmentalsystems.org/TeachMyAgent/)
- [Documentation](http://developmentalsystems.org/TeachMyAgent/doc/)

---

`TeachMyAgent` is a testbed platform for **Automatic Curriculum Learning** methods. We leverage Box2D procedurally generated environments to assess the performance of teacher algorithms in continuous task spaces. Our repository provides:

- **Two parametric Box2D environments**: Stumps Tracks and Parkour
- **Multiple embodiments** with different locomotion skills (e.g. bipedal walker, spider, climbing chimpanzee, fish)
- **Two Deep RL students**: SAC and PPO
- **Several ACL algorithms**: ADR, [ALP-GMM](https://github.com/flowersteam/teachDeepRL), Covar-GMM, SPDL, GoalGAN, Setter-Solver, RIAC
- **Two benchmark experiments** using elements above: Skill-specific comparison and global performance assessment
- **Three notebooks for systematic analysis** of results using statistical tests along with visualization tools (plots, videos...) allowing to reproduce our figures

See our [documentation](http://developmentalsystems.org/TeachMyAgent/doc/) for an exhaustive list.

[https://github.com/flowersteam/TeachMyAgent/blob/master/TeachMyAgent/graphics/readme_graphics/global_schema.png](https://github.com/flowersteam/TeachMyAgent/blob/master/TeachMyAgent/graphics/readme_graphics/global_schema.png)

Using this, we performed a benchmark of the previously mentioned ACL methods which can be seen in our [paper](https://arxiv.org/abs/2103.09815). We also provide additional visualization on our [website](http://developmentalsystems.org/TeachMyAgent/).

## Installation

[https://github.com/flowersteam/teachmyagent#installation](https://github.com/flowersteam/teachmyagent#installation)

1- Get the repository

```
git clone https://github.com/flowersteam/TeachMyAgent
cd TeachMyAgent/
```

2- Install it, using Conda for example (use Python >= 3.6)

```
conda create --name teachMyAgent python=3.6
conda activate teachMyAgent
pip install -e .
```

**Note: For Windows users, add `-f https://download.pytorch.org/whl/torch_stable.html` to the `pip install -e .` command.**

## Import baseline results from our paper

[https://github.com/flowersteam/teachmyagent#import-baseline-results-from-our-paper](https://github.com/flowersteam/teachmyagent#import-baseline-results-from-our-paper)

In order to benchmark methods against the ones we evaluated in our [paper](https://arxiv.org/abs/2103.09815) you must download our results:

1. Go to the `notebooks` folder
2. Make the `download_baselines.sh` script executable: `chmod +x download_baselines.sh`
3. Download results: `./download_baselines.sh`

> ***WARNING:***  This will download a zip weighting approximayely 4.5GB. Then, our script will extract the zip file in `TeachMyAgent/data`. Once extracted, results will weight approximately 15GB.

## Usage

[https://github.com/flowersteam/teachmyagent#usage](https://github.com/flowersteam/teachmyagent#usage)

See our [documentation](http://developmentalsystems.org/TeachMyAgent/doc/) for details on how to use our platform to benchmark ACL methods.

## Development

[https://github.com/flowersteam/teachmyagent#development](https://github.com/flowersteam/teachmyagent#development)

See [CONTRIBUTING.md](https://github.com/flowersteam/TeachMyAgent/blob/master/CONTRIBUTING.md) for details.

## Citing

[https://github.com/flowersteam/teachmyagent#citing](https://github.com/flowersteam/teachmyagent#citing)

If you use `TeachMyAgent` in your work, please cite the accompanying [paper](https://arxiv.org/abs/2103.09815):

```
@inproceedings{romac2021teachmyagent,
  author    = {Cl{\'{e}}ment Romac and
               R{\'{e}}my Portelas and
               Katja Hofmann and
               Pierre{-}Yves Oudeyer},
  title     = {TeachMyAgent: a Benchmark for Automatic Curriculum Learning in Deep
               {RL}},
  booktitle = {Proceedings of the 38th International Conference on Machine Learning,
               {ICML} 2021, 18-24 July 2021, Virtual Event},
  series    = {Proceedings of Machine Learning Research},
  volume    = {139},
  pages     = {9052--9063},
  publisher = {{PMLR}},
  year      = {2021}
}
```

## About

         TeachMyAgent is a testbed platform for Automatic Curriculum Learning methods in Deep RL.       

### Resources

[Readme](https://github.com/flowersteam/teachmyagent#readme-ov-file)

### License

[MIT license](https://github.com/flowersteam/teachmyagent#MIT-1-ov-file)

### Contributing

[Contributing](https://github.com/flowersteam/teachmyagent#contributing-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/flowersteam/TeachMyAgent/activity)

[Custom properties](https://github.com/flowersteam/TeachMyAgent/custom-properties)

### Stars

[77
        stars](https://github.com/flowersteam/TeachMyAgent/stargazers)

### Watchers

[7
        watching](https://github.com/flowersteam/TeachMyAgent/watchers)

### Forks

[5
        forks](https://github.com/flowersteam/TeachMyAgent/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fflowersteam%2FTeachMyAgent&report=flowersteam+%28user%29)

## [Releases](https://github.com/flowersteam/TeachMyAgent/releases)

No releases published

## [Packages
      0](https://github.com/orgs/flowersteam/packages?repo_name=TeachMyAgent)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/flowersteam/TeachMyAgent/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Jupyter Notebook
          62.5%](https://github.com/flowersteam/TeachMyAgent/search?l=jupyter-notebook)
- [Python
          37.5%](https://github.com/flowersteam/TeachMyAgent/search?l=python)

     You can’t perform that action at this time.
