---
title: Google Indexing Custom Domain Triage
type: synthesis
rank: B
tags: [seo, google-search-console, github-pages, canonical]
sources: [docs/seo/google-indexing-triage-2026-06-01.md, site/astro.config.mjs, site/src/data/site.ts]
updated: 2026-06-01
---

# Google Indexing Custom Domain Triage

> `agent-evolution.com` is the public canonical domain; the sitemap is populated, while the observed blocking issue is the GitHub Pages custom-domain HTTPS certificate.

## Claims

- [KNOWN] The public canonical domain for the site is `agent-evolution.com`. — Source: `site/src/data/site.ts`, `site/astro.config.mjs`
- [KNOWN] The sitemap endpoint should remain `https://agent-evolution.com/sitemap-index.xml`. — Source: `docs/seo/google-indexing-triage-2026-06-01.md`
- [KNOWN] Live triage found the generated sitemap has URLs, with `sitemap-0.xml` containing `388` `<loc>` entries. — Source: `docs/seo/google-indexing-triage-2026-06-01.md`
- [KNOWN] Live TLS verification found `agent-evolution.com` serving a `*.github.io` certificate, so strict HTTPS fetches fail until GitHub Pages serves a certificate covering `agent-evolution.com`. — Source: `docs/seo/google-indexing-triage-2026-06-01.md`
- [KNOWN] `agent-evolution.com/graph/#coverage-debt` should be inspected as `https://agent-evolution.com/graph/`, because the fragment is a section anchor rather than an indexable page. — Source: `docs/seo/google-indexing-triage-2026-06-01.md`

## Cross-references

- [[survey-seo-topic-map]]
- [[resource-library-coverage-audit]]
