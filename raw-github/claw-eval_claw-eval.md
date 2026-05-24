---
repo: claw-eval/claw-eval
url: https://github.com/claw-eval/claw-eval
content_timestamp: 2026-03
time_slice: 2026-03
timestamp_source: web_github_page_open_2026-05-24
collected_at: 2026-05-24T15:00:00+08:00
source: github_web
---

## GitHub - claw-eval/claw-eval

**Source**: https://github.com/claw-eval/claw-eval

**Collection note**: Captured through browser-accessible GitHub page text because local shell DNS resolution for `api.github.com` failed during this automation run.

## Public metadata snapshot

- Repository: `claw-eval/claw-eval`
- Stars observed: 606
- Forks observed: 52
- Commits observed: 43
- Visible paths: `mock_services`, `scripts`, `src/claw_eval`, `tasks`, `Dockerfile.agent`, `README.md`, `cleanup_traces.py`, `config_general.yaml`, `config_multimodal.yaml`, `config_user_agent.yaml`, `pyproject.toml`, `requirements.txt`, `score_summary.py`

## Raw README signals

# Claw-Eval

Claw-Eval: Towards Trustworthy Evaluation of Autonomous Agents.

300 human-verified tasks, 2,159 rubrics, 9 categories, completion, safety, and robustness.

Evaluation logic updated March 2026:

- Primary metric: Pass^3.
- A task is only marked as passed if the model meets success criteria in all three independent runs.
- The codebase is being audited so benchmark results can be verified by the community.
- API instability is handled by manually re-triggering evaluation until exactly 3 trajectories are successfully generated.

Task split signals:

- `general`: 161 tasks.
- `multimodal`: 101 tasks.
- `multi_turn`: 38 conversational tasks.

Agents are graded through full-trajectory auditing.
