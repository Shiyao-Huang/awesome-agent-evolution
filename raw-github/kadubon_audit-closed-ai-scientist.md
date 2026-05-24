---
repo: kadubon/audit-closed-ai-scientist
url: https://github.com/kadubon/audit-closed-ai-scientist
content_timestamp: 2026-03-05
time_slice: 2026-03
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - kadubon/audit-closed-ai-scientist: Benchmark for statistically valid AI scientist systems, using audit-closed protocols, transparency logs, and sequential inference to prevent false discoveries in autonomous research agents. · GitHub

**Source**: https://github.com/kadubon/audit-closed-ai-scientist

---

[Skip to content](https://github.com/kadubon/audit-closed-ai-scientist#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[kadubon](https://github.com/kadubon)

/
**[audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist)**

Public

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

- [Notifications](https://github.com/login?return_to=%2Fkadubon%2Faudit-closed-ai-scientist)You must be signed in to change notification settings
- [Fork
    1](https://github.com/login?return_to=%2Fkadubon%2Faudit-closed-ai-scientist)
- 
[Star
          0](https://github.com/login?return_to=%2Fkadubon%2Faudit-closed-ai-scientist)

[https://github.com/kadubon/audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist)

[Branches](https://github.com/kadubon/audit-closed-ai-scientist/branches)[Tags](https://github.com/kadubon/audit-closed-ai-scientist/tags)

[https://github.com/kadubon/audit-closed-ai-scientist/branches](https://github.com/kadubon/audit-closed-ai-scientist/branches)[https://github.com/kadubon/audit-closed-ai-scientist/tags](https://github.com/kadubon/audit-closed-ai-scientist/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| .github | .github |  |  |
| audit_protocol | audit_protocol |  |  |
| baseline_ai_scientist | baseline_ai_scientist |  |  |
| benchmarks | benchmarks |  |  |
| configs | configs |  |  |
| docs | docs |  |  |
| figures | figures |  |  |
| paper | paper |  |  |
| results | results |  |  |
| scripts | scripts |  |  |
| simulations | simulations |  |  |
| tests | tests |  |  |
| theory | theory |  |  |
| .gitignore | .gitignore |  |  |
| CITATION.cff | CITATION.cff |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| environment.yml | environment.yml |  |  |
| gitignore | gitignore |  |  |
| regenerate_figures.py | regenerate_figures.py |  |  |
| requirements.txt | requirements.txt |  |  |
| result_summary.md | result_summary.md |  |  |
| run_all_experiments.py | run_all_experiments.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://doi.org/10.5281/zenodo.18870260](https://doi.org/10.5281/zenodo.18870260)

# audit-closed-ai-scientist

[https://github.com/kadubon/audit-closed-ai-scientist#audit-closed-ai-scientist](https://github.com/kadubon/audit-closed-ai-scientist#audit-closed-ai-scientist)

Audit-Closed AI Scientist is a benchmark for evaluating the statistical validity of autonomous research systems.

The repository demonstrates failure modes of naive AI scientist pipelines (p-hacking, optional stopping, hypothesis shopping) and provides a reproducible implementation of an audit-closed protocol based on transparency logs and sequential e-process inference.

This benchmark is intended for developers of AI scientist systems, autonomous research agents, and self-driving laboratories.

It is designed for:

- AI scientist developers
- autonomous research agents
- automated scientific discovery pipelines
- self-driving laboratories
- agentic AI research frameworks

The benchmark studies where naive autonomous discovery fails, and how an audit-closed protocol mitigates those failures using:

- transparency logs
- deterministic replay
- sequential e-process inference
- explicit alpha accounting

## Why this benchmark exists

[https://github.com/kadubon/audit-closed-ai-scientist#why-this-benchmark-exists](https://github.com/kadubon/audit-closed-ai-scientist#why-this-benchmark-exists)

Naive autonomous research loops are statistically unsafe under adaptive search. In this benchmark, naive pipelines are stress-tested under:

- optional stopping
- p-hacking / many-hypothesis search
- candidate and design shopping
- adversarial experiment submissions

The benchmark compares:

- naive discovery policies (publish when significance appears)
- audit-closed policies (`Accept_t = f(Log_0:t)`)

## Reference paper

[https://github.com/kadubon/audit-closed-ai-scientist#reference-paper](https://github.com/kadubon/audit-closed-ai-scientist#reference-paper)

- Takahashi, K. (2026). *Audit-Closed AI Scientist Protocol*. Zenodo. [https://doi.org/10.5281/zenodo.18728589](https://doi.org/10.5281/zenodo.18728589)
- Repository manuscript: [paper/audit_closed_ai_scientist_protocol.tex](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/paper/audit_closed_ai_scientist_protocol.tex)

## What is implemented

[https://github.com/kadubon/audit-closed-ai-scientist#what-is-implemented](https://github.com/kadubon/audit-closed-ai-scientist#what-is-implemented)

Core simulations:

1. `simulations/p_hacking_simulation.py`
2. `simulations/candidate_shopping.py`
3. `simulations/optional_stopping.py`
4. `simulations/power_curve.py`
5. `simulations/adversarial_agents.py`

Protocol-extension benchmark modules:

1. `audit_protocol/physical_sentinels.py` + `simulations/sentinel_hierarchy.py`
2. `audit_protocol/drift_localization.py` + `simulations/drift_localization_simulation.py`
3. `audit_protocol/certificate_schema.py` + `simulations/certificate_schema_validation.py`

Integrated benchmark:

- `benchmarks/discovery_validity_benchmark.py`
  - false discovery rate
  - replication success
  - sequential evidence stability
  - adversarial robustness

## Reproduce results

[https://github.com/kadubon/audit-closed-ai-scientist#reproduce-results](https://github.com/kadubon/audit-closed-ai-scientist#reproduce-results)

### Pip

[https://github.com/kadubon/audit-closed-ai-scientist#pip](https://github.com/kadubon/audit-closed-ai-scientist#pip)

```
git clone https://github.com/kadubon/audit-closed-ai-scientist
cd audit-closed-ai-scientist
python -m pip install -r requirements.txt
python run_all_experiments.py --profile standard
```

### Conda

[https://github.com/kadubon/audit-closed-ai-scientist#conda](https://github.com/kadubon/audit-closed-ai-scientist#conda)

```
conda env create -f environment.yml
conda activate audit-closed-ai-scientist
python run_all_experiments.py --profile standard
```

### Make targets

[https://github.com/kadubon/audit-closed-ai-scientist#make-targets](https://github.com/kadubon/audit-closed-ai-scientist#make-targets)

```
make reproduce
make benchmark
make figures
make test
```

Output artifacts:

- `results/experiment_results.json`
- `figures/*.png`
- `result_summary.md`

Figure regeneration from raw JSON:

```
python regenerate_figures.py --input results/experiment_results.json --output-dir figures
```

## External agent API

[https://github.com/kadubon/audit-closed-ai-scientist#external-agent-api](https://github.com/kadubon/audit-closed-ai-scientist#external-agent-api)

Use the benchmark as an evaluation harness for your own AI scientist:

```
from benchmarks import benchmark

# my_ai_scientist: callable or object with evaluate_trial(...)
report = benchmark.evaluate(my_ai_scientist)
print(report["null_world"]["false_discovery_rate"])
print(report["signal_world"]["replication_probability"])
```

Adapter contract (minimum return fields):

- `accepted: bool`
- `winner: str | None`

See [docs/integration_with_ai_scientist_systems.md](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/docs/integration_with_ai_scientist_systems.md).

## Security and audit integrity

[https://github.com/kadubon/audit-closed-ai-scientist#security-and-audit-integrity](https://github.com/kadubon/audit-closed-ai-scientist#security-and-audit-integrity)

Implemented safeguards:

- append-only hash-chained transparency log
- Merkle checkpoint verification
- fail-closed transcript checks
- candidate-set commitment before evaluation
- deterministic replay validation
- tamper tests for payload/hash/commitment/alpha rewrites

Security tests:

```
python -m unittest discover -s tests -p "test_*.py"
```

## Scientific integrity statement

[https://github.com/kadubon/audit-closed-ai-scientist#scientific-integrity-statement](https://github.com/kadubon/audit-closed-ai-scientist#scientific-integrity-statement)

This repository is a benchmark-focused implementation. It supports benchmark-level claims about statistical governance and replayability. It does not claim full deployment implementation of all physical protocol components in the paper.

Detailed audits:

- [docs/paper_alignment_audit.md](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/docs/paper_alignment_audit.md)
- [docs/security_audit.md](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/docs/security_audit.md)
- [docs/reproducibility.md](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/docs/reproducibility.md)
- [docs/repository_audit_report.md](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/docs/repository_audit_report.md)
- [result_summary.md](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/result_summary.md)

## Citation

[https://github.com/kadubon/audit-closed-ai-scientist#citation](https://github.com/kadubon/audit-closed-ai-scientist#citation)

Software (repository DOI):

- Takahashi, K. (2026). *audit-closed-ai-scientist* (v0.1.0). Zenodo. [https://doi.org/10.5281/zenodo.18870261](https://doi.org/10.5281/zenodo.18870261)

Protocol paper:

- Takahashi, K. (2026). *Audit-Closed AI Scientist Protocol*. Zenodo. [https://doi.org/10.5281/zenodo.18728589](https://doi.org/10.5281/zenodo.18728589)

Machine-readable metadata is in [CITATION.cff](https://github.com/kadubon/audit-closed-ai-scientist/blob/main/CITATION.cff).

## About

         Benchmark for statistically valid AI scientist systems, using audit-closed protocols, transparency logs, and sequential inference to prevent false discoveries in autonomous research agents.       

[kadubon.github.io/github.io/](https://kadubon.github.io/github.io/)

### Topics

[reproducible-science](https://github.com/topics/reproducible-science)[audit-log](https://github.com/topics/audit-log)[ai-agents](https://github.com/topics/ai-agents)[p-hacking](https://github.com/topics/p-hacking)[scientific-machine-learning](https://github.com/topics/scientific-machine-learning)[scientific-discovery](https://github.com/topics/scientific-discovery)[autonomous-research](https://github.com/topics/autonomous-research)[transparency-log](https://github.com/topics/transparency-log)[statistical-validity](https://github.com/topics/statistical-validity)[e-values](https://github.com/topics/e-values)[self-driving-lab](https://github.com/topics/self-driving-lab)[ai-governance](https://github.com/topics/ai-governance)[automated-science](https://github.com/topics/automated-science)[research-automation](https://github.com/topics/research-automation)[agentic-ai](https://github.com/topics/agentic-ai)[ai-scientist](https://github.com/topics/ai-scientist)[sequential-inference](https://github.com/topics/sequential-inference)[deterministic-replay](https://github.com/topics/deterministic-replay)[e-process](https://github.com/topics/e-process)[optional-stopping](https://github.com/topics/optional-stopping)

### Resources

[Readme](https://github.com/kadubon/audit-closed-ai-scientist#readme-ov-file)

### License

[View license](https://github.com/kadubon/audit-closed-ai-scientist#License-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/kadubon/audit-closed-ai-scientist/activity)

### Stars

[0
        stars](https://github.com/kadubon/audit-closed-ai-scientist/stargazers)

### Watchers

[0
        watching](https://github.com/kadubon/audit-closed-ai-scientist/watchers)

### Forks

[1
        fork](https://github.com/kadubon/audit-closed-ai-scientist/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fkadubon%2Faudit-closed-ai-scientist&report=kadubon+%28user%29)

## [Releases
      1](https://github.com/kadubon/audit-closed-ai-scientist/releases)

[v0.1.0 Audit-Closed AI Scientist Benchmark - Reproducible Evaluation Framework for Statistically Valid Autonomous Scientific Discovery
        
          Latest
      
      Mar 5, 2026](https://github.com/kadubon/audit-closed-ai-scientist/releases/tag/v0.1.0)

## Sponsor this project

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

- 

[https://kadubon.github.io/github.io/](https://kadubon.github.io/github.io/)

[Learn more about GitHub Sponsors](https://github.com/sponsors)

## [Packages
      0](https://github.com/users/kadubon/packages?repo_name=audit-closed-ai-scientist)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/kadubon/audit-closed-ai-scientist/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          60.0%](https://github.com/kadubon/audit-closed-ai-scientist/search?l=python)
- [TeX
          38.8%](https://github.com/kadubon/audit-closed-ai-scientist/search?l=tex)
- 

Other

1.2%

     You can’t perform that action at this time.
