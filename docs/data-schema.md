# Data Schema

This project treats every public page as a projection of structured records.
Markdown is the reading surface; metadata is the source of repeatable indexing,
ranking, search, and graph generation.

## Core Record Types

### Project

```json
{
  "id": "project:algorithmicsuperintelligence/openevolve",
  "type": "project",
  "name": "openevolve",
  "url": "https://github.com/algorithmicsuperintelligence/openevolve",
  "category": "evolutionary-code-optimization",
  "description": "Open-source AlphaEvolve-style coding agent.",
  "stars": 6358,
  "license": "Apache-2.0",
  "language": "Python",
  "tags": ["evolution-loop", "evaluator"],
  "content_timestamp": "2026-05-22",
  "evidence_source": "raw-github/..."
}
```

### Paper

```json
{
  "id": "paper:2408.08435",
  "type": "paper",
  "title": "ADAS",
  "url": "https://arxiv.org/abs/2408.08435",
  "year": 2025,
  "mechanism": "agent architecture search",
  "benchmark": "cross-domain agent tasks",
  "claim": "automated design can discover transferable agent architectures",
  "tags": ["meta-search", "agent-evolution"],
  "evidence_source": "paper-reviews/..."
}
```

### Concept

Concepts are reusable mechanism labels. They should be stable enough to connect
multiple projects and papers.

Examples:

- `concept:evolution-loop`
- `concept:reflective-memory`
- `concept:evaluator`
- `concept:self-play`
- `concept:code-self-modification`

## Timestamps

Use explicit timestamps:

- `content_timestamp`: when the source content itself was last known current.
- `collected_at`: when this repository collected it.
- `updated_at`: when our analysis record changed.

## Evidence Strength

Use a conservative rank:

| Rank | Meaning |
|---|---|
| `primary` | Paper, official repo, official docs, or maintainer statement. |
| `derived` | Our analysis derived from primary sources. |
| `community` | HN, X, Reddit, blogs, newsletters, or discussion sites. |
| `unverified` | Useful lead, not yet validated. |

