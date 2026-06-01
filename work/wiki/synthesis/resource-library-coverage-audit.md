---
title: Resource Library Coverage Audit
type: synthesis
rank: A
tags: [coverage, survey, evidence-chain, resource-library, public-readme]
sources:
  - analysis/resource-library-coverage-audit.md
  - analysis/survey-seo-topic-map.md
  - analysis/self-evolution-definition-criteria.md
  - analysis/five-evolution-loops-topic.md
  - docs/indexes/master-index.md
  - analysis/github-project-data-analysis.md
  - site/src/data/survey.ts
  - site/src/data/projects.ts
  - site/src/pages/resource-library/index.astro
  - site/src/pages/topics/index.astro
  - site/src/pages/topics/self-evolving-ai-agents/index.astro
  - site/src/pages/topics/five-evolution-loops/index.astro
  - docs/ops/audience-boundary-workflow.md
updated: 2026-06-01
---

# Resource Library Coverage Audit

## One Sentence

[KNOWN] The repository already contains a multi-layer self-evolving agents resource library; the next public-facing problem is explaining the coverage and count boundaries so readers understand what has been collected, analyzed, published, and synthesized. Source: `analysis/resource-library-coverage-audit.md`

## Three Sentences

1. [KNOWN] Governance counts currently include 639 raw GitHub captures, 639 classified repositories, 232 analyzed model-card reports, 92 strict evolution repositories, 199 broad evolution repositories, 201 raw paper files, 171 paper reviews, and 434 public project reports. Source: `docs/indexes/master-index.md`
2. [KNOWN] The site survey layer uses a separate display-oriented count: 196 papers, 348 repos, 97 pain points, 1306 blog artifacts, 5 evolution loops, 7 method families, and 6 case studies. Source: `site/src/data/survey.ts`
3. [INFERRED] These counts should be treated as complementary coverage surfaces, not contradictions: raw answers what was collected, processed answers what was analyzed, site/report answers what readers can browse, and survey answers how evidence becomes thesis.

## Count Boundary

| Count | Meaning |
|---:|---|
| 639 | Raw GitHub captures and classified repository rows. |
| 232 | Repositories in the analyzed model-card report funnel. |
| 434 | Public project report files under `site/public/reports/projects/`. |
| 232 | Current website project records in `site/src/data/projects.ts`. |
| 801 | Markdown files under `projects/`, including indexes/support/history. |
| 196 | Site survey paper display count; raw paper files are 201. |

## Use In Future Work

- README/site public language should say what each count means before claiming coverage.
- The consumer-facing coverage page now lives at `site/src/pages/resource-library/index.astro`.
- The public topic map now lives at `site/src/pages/topics/index.astro` and turns coverage into survey/SEO clusters.
- The public definition page now lives at `site/src/pages/topics/self-evolving-ai-agents/index.astro`.
- The public five-loop page now lives at `site/src/pages/topics/five-evolution-loops/index.astro`.
- Reader-facing and internal workflow boundaries now live at `docs/ops/audience-boundary-workflow.md`.
- Paper/survey methodology should cite the audit when explaining corpus boundaries.
- Agent docs can use this page as the persistent memory of what the repo already contains.
- SEO pages should be generated from evidence clusters in the audit, not from ungrounded keywords.
