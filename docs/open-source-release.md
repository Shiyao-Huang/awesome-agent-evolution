# Open Source Release Plan

One sentence: Self Evolve should open source as a structured knowledge index,
not as a loose dump of collected files.

Three sentences:

1. The public value is the curated taxonomy, evidence links, bilingual analysis,
   graph relationships, and reproducible static site.
2. The risky layer is raw scraped material, copied article text, private API
   responses, and source data with unclear redistribution rights.
3. The first release should publish the site, normalized metadata, original
   analysis, contribution rules, and graph schema while keeping raw data reviewable
   but not automatically republished.

## Release Layers

| Layer | Public by default | Notes |
|---|---:|---|
| Website code | yes | MIT licensed. |
| Original docs and analysis | yes | CC BY 4.0 licensed. |
| Project and paper metadata | yes | Link-first, factual metadata. |
| Raw source mirrors | no | Review source terms before publishing. |
| Generated rankings | yes | Include timestamp and method. |
| Knowledge graph | yes | Nodes and edges should cite evidence. |

## First Release Checklist

- [x] Add code and content licenses.
- [x] Add contribution and security policy.
- [x] Define publication boundary for raw data.
- [x] Ship a static site under `site/`.
- [x] Add a first knowledge graph route.
- [ ] Initialize or connect the intended public Git repository.
- [ ] Replace placeholder social/community URLs.
- [ ] Audit raw data before including it in a public release artifact.

