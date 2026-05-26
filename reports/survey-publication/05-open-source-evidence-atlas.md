# Slice 05 — An Evidence Atlas for Self-Evolving AI Projects

## One-Sentence Thesis

The long-term asset is not a survey PDF; it is an evidence atlas that connects papers, repos, benchmarks, model cards, social signals, and failure modes into one navigable map.

## Reader Value

This slice turns the project into a practical tool: readers can search a method, inspect projects, compare evidence, and trace claims back to raw sources.

## Three-Sentence Summary

Most AI surveys age quickly because the field changes faster than a PDF. The durable value is a living atlas: raw sources remain immutable, processed analysis becomes model cards and wiki pages, and the website exposes search, graph, blog, reports, and project pages. That makes the survey a gateway into an updating evidence system rather than a one-time document.

## Evidence Chain

| Claim | Evidence |
|---|---|
| The repo is organized around raw, processed, work, results, and ops layers. | `AGENTS.md`, `docs/project-management/project-structure.md`, `docs/indexes/master-index.md` |
| Site routes already expose graph, search, blog, project pages, reports, and research pages. | `site/src/pages/`, `site/src/content/` |
| Project reports and model cards are already published as site artifacts. | `site/public/reports/projects/`, `projects/` |
| Wiki pages preserve cross-source synthesis. | `work/wiki/index.md` |

## Public Report Shape

1. Introduce the atlas as a way to inspect claims.
2. Show the data pipeline: raw → wiki/analysis → survey/blog/model cards → site/report.
3. Explain how a reader should use it: search a method, inspect graph, open project report, trace source.
4. Highlight high-value pages: graph, projects, search, blog series.
5. Invite issues/PRs for missing projects and evidence corrections.

## HN Submission Candidate

Regular title: `An evidence atlas for self-evolving AI projects`

Show HN title later, if framed as a usable tool and not a reading list:

`Show HN: An evidence atlas for self-evolving AI agents`

## Counterexamples And Limits

An atlas can become stale if indexing, source traces, and update cadence are weak. It needs recurring audits and clear `[UNVERIFIED]` labels where evidence is missing.

