# Meta-Harness (Stanford IRIS) Model Card

## One Sentence

Meta-Harness is the cleanest outer-loop harness-search reference in the public corpus: fixed model, mutable harness, benchmark-driven selection.

## Three Sentences

It matters because it isolates harness mutation from base-model change, which is exactly the mechanism many production systems implicitly use without naming it. The public repository still anchors two stories: domain onboarding and reference experiments for harness search. This run upgrades Meta-Harness from a stale May snapshot to authenticated GitHub API counts.

## Model Card

| Field | Value |
|---|---|
| Repository | `stanford-iris-lab/meta-harness` |
| Source | `raw-github/stanford-iris-lab_meta-harness.md` |
| Category | Meta-harness framework and reference experiments |
| Pattern | define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness |
| Evidence | Authenticated GitHub API snapshot, 2026-06-13 |

## Teaching Use

Use Meta-Harness to explain outer-loop search over prompts, workflows, or scaffolds. It is the clearest contrast case to weight-level self-evolution.

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot: 1,062 stars, 103 forks, 11 commits, 4 open issues, 0 open pull requests, and MIT license metadata observed on 2026-06-13. This run did not execute the onboarding flow, Terminal-Bench-2 experiment, or any text-classification search workflow. Claims stay repository-scoped unless rerun.

