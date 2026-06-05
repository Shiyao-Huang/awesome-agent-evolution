---
title: Text Asset Indexability Coverage
type: synthesis
rank: A
tags: [seo, text-assets, google-indexability, publication-gate]
sources: [reports/text-asset-indexability.md, scripts/audit_text_asset_indexability.mjs]
updated: 2026-06-05
---

# Text Asset Indexability Coverage

> Route-level SEO PASS is not repository-wide text coverage. A text file becomes a Google-indexable asset only after it has a public HTML route or another explicit public indexing surface.

## One-Sentence Rule

[KNOWN] The generated sitemap routes are indexable, but repository-wide text coverage remains incomplete because many processed analyses, project cards, paper reviews, drafts, and reports are not yet mapped to public HTML. — Source: `reports/text-asset-indexability.md`

## Working Principle

[KNOWN] The coverage audit classifies Markdown, MDX, and TeX files into public Google-indexable sources, GitHub README/root assets, processed-but-unrouted files, raw-do-not-publish sources, external mirrors, internal work, ops/docs, and generated data indexes. — Source: `scripts/audit_text_asset_indexability.mjs`

[KNOWN] Raw sources and external repository mirrors must not be promoted directly as polished public copy; raw remains raw and mirrors remain mirrors. — Source: `reports/text-asset-indexability.md`

[INFERRED] The next scalable publication step is not to expose everything at once; it is to promote high-value processed analyses and reports through reviewed HTML wrappers with bilingual same-evidence summaries. — Source: `reports/text-asset-indexability.md`

## Cross-references

- [[google-indexing-custom-domain-triage]]
- [[github-topic-indexing-readiness]]
- [[resource-library-coverage-audit]]
