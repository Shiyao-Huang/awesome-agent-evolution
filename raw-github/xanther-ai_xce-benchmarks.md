---
repo: xanther-ai/xce-benchmarks
url: https://github.com/xanther-ai/xce-benchmarks
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - Xanther-Ai/xce-benchmarks: XCE SWE-bench Verified benchmark results — predictions, analysis, and trajectory download scripts · GitHub

**Source**: https://github.com/xanther-ai/xce-benchmarks

---

[Skip to content](https://github.com/xanther-ai/xce-benchmarks#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Xanther-Ai](https://github.com/Xanther-Ai)

/
**[xce-benchmarks](https://github.com/Xanther-Ai/xce-benchmarks)**

Public

- [Notifications](https://github.com/login?return_to=%2FXanther-Ai%2Fxce-benchmarks)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2FXanther-Ai%2Fxce-benchmarks)
- 
[Star
          0](https://github.com/login?return_to=%2FXanther-Ai%2Fxce-benchmarks)

[https://github.com/Xanther-Ai/xce-benchmarks](https://github.com/Xanther-Ai/xce-benchmarks)

[Branches](https://github.com/Xanther-Ai/xce-benchmarks/branches)[Tags](https://github.com/Xanther-Ai/xce-benchmarks/tags)

[https://github.com/Xanther-Ai/xce-benchmarks/branches](https://github.com/Xanther-Ai/xce-benchmarks/branches)[https://github.com/Xanther-Ai/xce-benchmarks/tags](https://github.com/Xanther-Ai/xce-benchmarks/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History1 Commit1 Commit |  |  |  |
| analysis | analysis |  |  |
| assets | assets |  |  |
| results | results |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# XCE Benchmarks — SWE-bench Verified Results

[https://github.com/xanther-ai/xce-benchmarks#xce-benchmarks--swe-bench-verified-results](https://github.com/xanther-ai/xce-benchmarks#xce-benchmarks--swe-bench-verified-results)

[https://github.com/Xanther-Ai/xce-benchmarks/blob/main/assets/xce-benchmarks.png](https://github.com/Xanther-Ai/xce-benchmarks/blob/main/assets/xce-benchmarks.png)

**Reproducible benchmark results for Xanther Context Engine on SWE-bench Verified.**

[Website](https://xanther.ai) •   [Interactive Dashboard](https://xanther.ai/benchmarks) •   [Discord](https://discord.gg/Y768kBRS) •   [XCE MCP Server](https://github.com/Xanther-Ai/xce-mcp)

---

## Results Summary

[https://github.com/xanther-ai/xce-benchmarks#results-summary](https://github.com/xanther-ai/xce-benchmarks#results-summary)

All experiments run on **mini-swe-agent** against [SWE-bench Verified](https://www.swebench.com/) (500 instances).

| Model | XCE | Resolve Rate | Cost/Instance | Instances |
|---|---|---|---|---|
| Sonnet 4.0 | No | 66.0% | — | 500 |
| Sonnet 4.0 | Yes | 73.4% | $0.22 | 500 |
| Sonnet 4.0 + cascade hybrid | Yes | 76.8% | — | 500 |
| Sonnet 4.5 | No | 72.0% | — | 500 |
| Sonnet 4.6 | No | 72.0% | — | 500 |
| Opus 4.5 | No | 76.8% | — | 500 |
| MiniMax M2.5 | No | 75.8% | — | 500 |
| MiniMax M2.5 | Yes | 78.2% | $0.22 | 500 |

Key findings:

- Sonnet 4.0 + XCE (73.4%) beats raw Sonnet 4.5 and 4.6 — an older-gen model outperforming newer ones
- MiniMax M2.5 + XCE (78.2%) beats Claude Opus 4.5 at 16x lower cost
- XCE reduces token usage by ~20% per task

## Repository Structure

[https://github.com/xanther-ai/xce-benchmarks#repository-structure](https://github.com/xanther-ai/xce-benchmarks#repository-structure)

```
xce-benchmarks/
├── README.md
├── results/
│   ├── summary.json              # Aggregated results across all runs
│   ├── sonnet40-xce/
│   │   ├── metadata.json         # Run configuration
│   │   ├── preds.jsonl           # Predictions (one per line)
│   │   └── resolved_ids.json     # Instance IDs that were resolved
│   ├── sonnet45-xce/
│   │   ├── metadata.json
│   │   ├── preds.jsonl
│   │   └── resolved_ids.json
│   ├── minimax-m25-xce/
│   │   ├── metadata.json
│   │   ├── preds.jsonl
│   │   └── resolved_ids.json
│   ├── minimax-m25-high-reasoning/
│   │   ├── metadata.json
│   │   ├── preds.jsonl
│   │   └── resolved_ids.json
│   └── combined-best/
│       ├── metadata.json
│       ├── preds.jsonl
│       └── resolved_ids.json
├── analysis/
│   ├── download_trajectories.py  # Download trajectory files from S3
│   ├── per_repo_analysis.py      # Per-repository breakdown
│   └── cost_analysis.py          # Token usage and cost analysis
└── assets/
    └── xce-benchmarks.png
```

## Predictions

[https://github.com/xanther-ai/xce-benchmarks#predictions](https://github.com/xanther-ai/xce-benchmarks#predictions)

Each run's `preds.jsonl` contains one prediction per SWE-bench instance:

```
{
  "instance_id": "django__django-16379",
  "model_name_or_path": "sonnet-4.0-xce",
  "model_patch": "diff --git a/...",
  "full_output": "..."
}
```

## Downloading Trajectories

[https://github.com/xanther-ai/xce-benchmarks#downloading-trajectories](https://github.com/xanther-ai/xce-benchmarks#downloading-trajectories)

Trajectory files are large (100MB-600MB per run) and stored in S3. To download:

```
# Install dependencies
pip install boto3

# Download all trajectories
python analysis/download_trajectories.py --all

# Download a specific run
python analysis/download_trajectories.py --run sonnet40-xce

# Download to a custom directory
python analysis/download_trajectories.py --run minimax-m25-xce --output ./my-trajectories
```

Requires AWS credentials (any AWS account works — the bucket is public-read).

## Per-Repository Breakdown

[https://github.com/xanther-ai/xce-benchmarks#per-repository-breakdown](https://github.com/xanther-ai/xce-benchmarks#per-repository-breakdown)

XCE shows the largest improvements on complex, multi-module repositories:

| Repository | Sonnet 4.0 | Sonnet 4.0 + XCE | Delta |
|---|---|---|---|
| django/django | 62% | 74% | +12% |
| scikit-learn/scikit-learn | 58% | 71% | +13% |
| sympy/sympy | 45% | 62% | +17% |
| matplotlib/matplotlib | 52% | 65% | +13% |
| pytest-dev/pytest | 70% | 78% | +8% |

XCE provides the most value on repos with deep architectural dependencies where understanding the codebase structure matters.

## Reproducing Results

[https://github.com/xanther-ai/xce-benchmarks#reproducing-results](https://github.com/xanther-ai/xce-benchmarks#reproducing-results)

### Prerequisites

[https://github.com/xanther-ai/xce-benchmarks#prerequisites](https://github.com/xanther-ai/xce-benchmarks#prerequisites)

- [mini-swe-agent](https://github.com/xanther-ai/mini-swe-agent) installed
- XCE API key from [xanther.ai](https://xanther.ai/signup)
- SWE-bench Verified dataset

### Running

[https://github.com/xanther-ai/xce-benchmarks#running](https://github.com/xanther-ai/xce-benchmarks#running)

```
# Index the target repo
npx xanther-cli init --api-key xce_your_key

# Run mini-swe-agent with XCE
mini-swe-agent run \
  --model claude-sonnet-4-20250514 \
  --dataset swe-bench-verified \
  --mcp-config '{"xanther": {"url": "https://mcp.xanther.ai/sse", "headers": {"Authorization": "Bearer xce_your_key"}}}'
```

## Evaluation

[https://github.com/xanther-ai/xce-benchmarks#evaluation](https://github.com/xanther-ai/xce-benchmarks#evaluation)

Results were evaluated using [sb-cli](https://github.com/swe-bench/sb-cli):

```
sb submit --predictions results/sonnet40-xce/preds.jsonl
```

## Citation

[https://github.com/xanther-ai/xce-benchmarks#citation](https://github.com/xanther-ai/xce-benchmarks#citation)

If you use these results in your research, please cite:

```
@misc{xanther2026xce,
  title={Xanther Context Engine: Deep Codebase Understanding for Coding Agents},
  author={Xanther AI},
  year={2026},
  url={https://xanther.ai}
}
```

## Links

[https://github.com/xanther-ai/xce-benchmarks#links](https://github.com/xanther-ai/xce-benchmarks#links)

- [Xanther Website](https://xanther.ai)
- [Interactive Benchmark Dashboard](https://xanther.ai/benchmarks)
- [XCE MCP Server](https://github.com/Xanther-Ai/xce-mcp)
- [Xanther CLI](https://github.com/Xanther-Ai/xanther-cli)
- [Discord](https://discord.gg/Y768kBRS)

## License

[https://github.com/xanther-ai/xce-benchmarks#license](https://github.com/xanther-ai/xce-benchmarks#license)

MIT — see [LICENSE](https://github.com/Xanther-Ai/xce-benchmarks/blob/main/LICENSE) for details.

## About

         XCE SWE-bench Verified benchmark results — predictions, analysis, and trajectory download scripts       

### Resources

[Readme](https://github.com/xanther-ai/xce-benchmarks#readme-ov-file)

### License

[MIT license](https://github.com/xanther-ai/xce-benchmarks#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/Xanther-Ai/xce-benchmarks/activity)

[Custom properties](https://github.com/Xanther-Ai/xce-benchmarks/custom-properties)

### Stars

[0
        stars](https://github.com/Xanther-Ai/xce-benchmarks/stargazers)

### Watchers

[0
        watching](https://github.com/Xanther-Ai/xce-benchmarks/watchers)

### Forks

[0
        forks](https://github.com/Xanther-Ai/xce-benchmarks/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FXanther-Ai%2Fxce-benchmarks&report=Xanther-Ai+%28user%29)

## [Releases](https://github.com/Xanther-Ai/xce-benchmarks/releases)

No releases published

## [Packages
      0](https://github.com/orgs/Xanther-Ai/packages?repo_name=xce-benchmarks)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/Xanther-Ai/xce-benchmarks/graphs/contributors)

- 

-
## gBrain Temporal Metadata

- content_timestamp: 2026
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

