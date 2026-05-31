---
title: Resource Library Coverage Audit
type: synthesis
rank: A
tags: [coverage, survey, evidence-chain, resource-library, public-readme]
sources:
  - analysis/resource-library-coverage-audit.md
  - docs/indexes/master-index.md
  - analysis/github-project-data-analysis.md
  - site/src/data/survey.ts
  - site/src/data/projects.ts
  - site/src/pages/resource-library/index.astro
updated: 2026-06-01
---

# Resource Library Coverage Audit

## One Sentence

[KNOWN] The repository already contains a multi-layer self-evolving agents resource library; the next public-facing problem is explaining the coverage and count boundaries so readers understand what has been collected, analyzed, published, and synthesized. Source: `analysis/resource-library-coverage-audit.md`

## Three Sentences

1. [KNOWN] Governance counts currently include 631 raw GitHub captures, 631 classified repositories, 224 analyzed model-card reports, 91 strict evolution repositories, 198 broad evolution repositories, 201 raw paper files, 171 paper reviews, and 426 public project reports. Source: `docs/indexes/master-index.md`
2. [KNOWN] The site survey layer uses a separate display-oriented count: 196 papers, 348 repos, 97 pain points, 1306 blog artifacts, 5 evolution loops, 7 method families, and 6 case studies. Source: `site/src/data/survey.ts`
3. [INFERRED] These counts should be treated as complementary coverage surfaces, not contradictions: raw answers what was collected, processed answers what was analyzed, site/report answers what readers can browse, and survey answers how evidence becomes thesis.

## Count Boundary

| Count | Meaning |
|---:|---|
| 631 | Raw GitHub captures and classified repository rows. |
| 224 | Repositories in the analyzed model-card report funnel. |
| 426 | Public project report files under `site/public/reports/projects/`. |
| 119 | Current curated project records in `site/src/data/projects.ts`. |
| 793 | Markdown files under `projects/`, including indexes/support/history. |
| 196 | Site survey paper display count; raw paper files are 201. |

## Use In Future Work

- README/site public language should say what each count means before claiming coverage.
- The consumer-facing coverage page now lives at `site/src/pages/resource-library/index.astro`.
- Paper/survey methodology should cite the audit when explaining corpus boundaries.
- Agent docs can use this page as the persistent memory of what the repo already contains.
- SEO pages should be generated from evidence clusters in the audit, not from ungrounded keywords.
