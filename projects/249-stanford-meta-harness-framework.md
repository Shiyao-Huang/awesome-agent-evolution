# Meta-Harness (Stanford IRIS) Model Card

## One Sentence

Meta-Harness remains the cleanest outer-loop harness-search reference in the public corpus: fixed model, mutable harness, benchmark-driven selection.

## Three Sentences

It matters because it isolates harness mutation from base-model change, which is exactly the mechanism many production systems implicitly use without naming it. The public repository still anchors two stories: domain onboarding and reference experiments for harness search. The 2026-06-17 morning packet moved the public star count again, so this reference surface still needs active metadata sync.

## Model Card

| Field | Value |
|---|---|
| Repository | `stanford-iris-lab/meta-harness` |
| Source | `raw-github/stanford-iris-lab_meta-harness.md` |
| Category | Meta-harness framework and reference experiments |
| Pattern | define domain spec -> search harness candidates -> run reference experiments -> compare outcomes -> retain stronger harness |
| Evidence | Authenticated GitHub API snapshot, 2026-06-17 08:29 +0800 |

## Teaching Use

Use Meta-Harness to explain outer-loop search over prompts, workflows, or scaffolds. It is the clearest contrast case to weight-level self-evolution.

## Evidence And Limits

The raw capture now reflects a GitHub metadata packet observed on 2026-07-01: 1,175 stars, 113 forks, 11 commits, 5 open issues, and 0 open pull requests. This packet is fresher than the previous authenticated packet at 2026-06-30 23:06 +0800 where a delta was observed. This run did not execute the repository locally, validate workflows end to end, or independently rerun benchmark claims. Product, memory, benchmark, and automation claims therefore remain repository-scoped unless separately tested.
