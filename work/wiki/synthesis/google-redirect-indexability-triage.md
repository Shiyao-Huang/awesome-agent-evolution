---
title: Google Redirect Indexability Triage
type: synthesis
rank: A
tags: [seo, google-search-console, redirects, canonical, github-pages]
sources: [reports/google-redirect-indexability.md, scripts/audit_google_redirect_indexability.mjs]
updated: 2026-06-06
---

# Google Redirect Indexability Triage

[KNOWN] The generated sitemap is not currently submitting redirecting URLs: the latest audit observed `985` sitemap URLs, `0` sitemap problem URLs, and `0` unexpected canonical redirects in the checked sample. — Source: `reports/google-redirect-indexability.md`

[KNOWN] Search Console "Page with redirect" rows should be classified by URL family: `http`, `www`, slashless paths, fragments, and legacy GitHub Pages URLs are non-canonical entry points; sitemap/canonical final URLs should return `200` and should not redirect. — Source: `reports/google-redirect-indexability.md`

[KNOWN] The remaining publication blocker is external GitHub Pages HTTPS readiness: `https_enforced=false` and the served certificate does not cover `agent-evolution.com`. — Source: `reports/google-redirect-indexability.md`

[INFERRED] If Google lists a redirected URL that starts with `https://agent-evolution.com/.../` and exactly matches the sitemap form, treat it as a route/hosting bug and rerun `node scripts/audit_google_redirect_indexability.mjs <affected-url>` before requesting validation. — Source: `scripts/audit_google_redirect_indexability.mjs`

## Working Rule

Do not ask Google to index non-canonical redirect entry points. Fix GitHub Pages certificate/HTTPS enforcement, inspect final canonical URLs, and only debug route generation when a sitemap/canonical URL itself redirects.

## Cross-references

- [[google-indexing-custom-domain-triage]]
- [[text-asset-indexability-coverage]]
- [[public-i18n-route-audit]]
