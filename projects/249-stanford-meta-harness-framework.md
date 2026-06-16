# Meta-Harness (Stanford IRIS) Model Card

## One Sentence

Meta-Harness remains the cleanest outer-loop harness-search reference in the public corpus: fixed model, mutable harness, benchmark-driven selection.

## Three Sentences

It matters because it isolates harness mutation from base-model change, which is exactly the mechanism many production systems implicitly use without naming it. The public repository still anchors two stories: domain onboarding and reference experiments for harness search. This 2026-06-16 refresh keeps the outer-loop reference on the newest authenticated GitHub packet.

## Model Card

| Field | Value |
|---|---|
| Repository | `stanford-iris-lab/meta-harness` |
| Source | `raw-github/stanford-iris-lab_meta-harness.md` |
| Category | Meta-harness framework and reference experiments |
| Pattern | define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness |
| Evidence | Authenticated GitHub API snapshot, 2026-06-16 |

## Teaching Use

Use Meta-Harness to explain outer-loop search over prompts, workflows, or scaffolds. It is the clearest contrast case to weight-level self-evolution.

## Evidence And Limits

The raw capture now reflects an authenticated GitHub API snapshot: 1,079 stars, 104 forks, 11 commits, 4 open issues, and 0 open pull requests observed on 2026-06-16. Relative to the previous 2026-06-16 08:26 +0800 packet: stars = 1,079; forks = 104; issues = 4; commits = 11; pushedAt unknown -> 2026-04-29T16:39:58Z; updatedAt unknown -> 2026-06-16T05:34:26Z. This run did not execute the onboarding flow, Terminal-Bench-2 experiment, or any text-classification search workflow. Claims stay repository-scoped unless rerun.
