# Knowledge Graph Model

One sentence: the graph exists to make the mechanism map visible, not to decorate
the site.

## Node Types

| Type | Purpose |
|---|---|
| `project` | GitHub repositories, products, demos, and frameworks. |
| `paper` | Research papers and technical reports. |
| `concept` | Mechanisms such as reflection, evaluator loops, memory, self-play, or code mutation. |
| `benchmark` | Evaluation environments and datasets. |
| `organization` | Labs, companies, universities, and open-source groups. |
| `claim` | A specific assertion that needs evidence. |
| `source` | Evidence URL, raw record, or review file. |

## Edge Types

| Edge | Meaning |
|---|---|
| `uses` | A project or paper uses a mechanism. |
| `implements` | A project implements a paper, concept, or benchmark. |
| `evaluates_on` | A project or paper reports results on a benchmark. |
| `extends` | A system extends another project or idea. |
| `cites` | A paper or page cites another source. |
| `same_theme` | Two items share a stable mechanism cluster. |
| `has_risk` | A claim has a known limitation or failure mode. |

## First Public Graph

The first graph route is `site/src/pages/graph/index.astro`. It is generated from
the current curated `projects` and `featuredResearch` arrays, then grouped by
mechanism tags and research clusters.

That is intentionally simple:

- It can build statically.
- It keeps the source of truth visible.
- It avoids adding a graph database before the ontology is stable.
- It creates a place to later swap in Sigma.js, Cytoscape.js, or graph JSON.

## Quality Rule

Every important edge should be explainable in one sentence:

> `project:openevolve uses concept:evaluator` because it runs generated program
> variants through scoring/evaluation before retaining candidates.

