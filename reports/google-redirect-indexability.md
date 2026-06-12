# Google Redirect Indexability Triage

Generated: 2026-06-06T06:24:35.009Z

Canonical origin: https://agent-evolution.com

Global status: **FAIL**

## 一句话结论 / One-Sentence Verdict

中文：当前 build 的 sitemap 没有把会重定向的 URL 当成 canonical 提交；Search Console 的“网页会自动重定向”更可能来自 `http`、`www`、无尾斜杠或 GitHub Pages 旧域这些非规范入口，但 GitHub Pages HTTPS 证书和强制 HTTPS 仍必须修好。

The generated sitemap is not submitting redirecting URLs in the checked build. Search Console redirect notices are most likely from non-canonical entry points such as www, slashless paths, HTTP, or the legacy GitHub Pages URL.

## 三句话证据 / Three-Sentence Evidence

1. 本地 sitemap 观察到 987 条 URL，canonical hygiene 通过：没有 `http`、`www`、fragment、query 或缺尾斜杠的 sitemap URL。
2. 抽样 canonical URL 在 relaxed HTTPS 下返回 200；但 strict HTTPS 仍受证书阻断，GitHub Pages API 当前显示 HTTPS enforced = `false`。
3. 抽样非规范入口会出现可解释的 301：`www` 归并到 apex，无尾斜杠归并到尾斜杠，legacy GitHub Pages URL 归并到自定义域；这些 URL 不应被要求单独索引，应该让 Google 看到最终 HTTPS canonical URL。

In English: the generated sitemap is clean in this build, so Google Search Console redirect rows should be interpreted by URL class. Non-canonical entry points are expected to redirect; canonical sitemap URLs should return 200 and are the URLs to inspect after HTTPS is fixed.

## What To Fix Now

1. Keep sitemap, canonical, robots, and internal links on `https://agent-evolution.com/.../` final URLs.
2. In GitHub Pages, finish custom-domain certificate issuance and enable **Enforce HTTPS**. Until then, GitHub Pages can expose `http://agent-evolution.com/` and redirect legacy Pages URLs to HTTP.
3. In Search Console, inspect canonical URLs such as `https://agent-evolution.com/graph/`, not `http`, `www`, slashless, fragment, or `github.io` variants.
4. If Search Console lists a canonical sitemap URL as redirecting, rerun `node scripts/audit_google_redirect_indexability.mjs <affected-url>` and fix that route.

## Blocking Failures

- GitHub Pages HTTPS enforcement is disabled.
- TLS certificate does not cover agent-evolution.com.

## Warnings

- Strict HTTPS requests fail until the custom-domain certificate is issued.
- 11 sampled HTTP apex URL(s) return 200; after HTTPS is fixed they should redirect to HTTPS canonical URLs.
- 22 sampled GitHub Pages legacy URL(s) redirect to http://agent-evolution.com; after HTTPS is fixed they should resolve to HTTPS canonical URLs.

## GitHub Pages And TLS State

| Field | Value |
|---|---|
| CNAME | agent-evolution.com |
| HTML URL | http://agent-evolution.com/ |
| HTTPS enforced | false |
| Certificate covers `agent-evolution.com` | false |
| Certificate SAN | DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com |

## Sitemap Canonical Hygiene

| Metric | Value |
|---|---:|
| Sitemap URLs | 987 |
| Problem URLs | 0 |
| Canonical hygiene pass | true |

| URL | Problems |
|---|---|
| None | None |

## Checked Redirect Samples

| Kind | Path | Status | Location/Error | Classification |
|---|---|---:|---|---|
| canonical-relaxed-https | / | 200 |  | canonical-200 |
| canonical-strict-https | / | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | / | 200 |  | http-serves-200-without-https-enforcement |
| https-www | / | 301 | https://agent-evolution.com/ | expected-redirect-to-canonical |
| http-www | / | 301 | http://agent-evolution.com/ | redirects-to-http-canonical-host |
| github-pages-legacy | / | 301 | http://agent-evolution.com/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /graph/ | 200 |  | canonical-200 |
| canonical-strict-https | /graph/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /graph/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /graph/ | 301 | https://agent-evolution.com/graph/ | expected-redirect-to-canonical |
| http-www | /graph/ | 301 | http://agent-evolution.com/graph/ | redirects-to-http-canonical-host |
| slashless-https | /graph/ | 301 | https://agent-evolution.com/graph/ | expected-redirect-to-canonical |
| github-pages-legacy | /graph/ | 301 | http://agent-evolution.com/graph/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /en/ | 200 |  | canonical-200 |
| canonical-strict-https | /en/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /en/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /en/ | 301 | https://agent-evolution.com/en/ | expected-redirect-to-canonical |
| http-www | /en/ | 301 | http://agent-evolution.com/en/ | redirects-to-http-canonical-host |
| slashless-https | /en/ | 301 | https://agent-evolution.com/en/ | expected-redirect-to-canonical |
| github-pages-legacy | /en/ | 301 | http://agent-evolution.com/en/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /topics/self-evolving-ai-agents/ | 200 |  | canonical-200 |
| canonical-strict-https | /topics/self-evolving-ai-agents/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /topics/self-evolving-ai-agents/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /topics/self-evolving-ai-agents/ | 301 | https://agent-evolution.com/topics/self-evolving-ai-agents/ | expected-redirect-to-canonical |
| http-www | /topics/self-evolving-ai-agents/ | 301 | http://agent-evolution.com/topics/self-evolving-ai-agents/ | redirects-to-http-canonical-host |
| slashless-https | /topics/self-evolving-ai-agents/ | 301 | https://agent-evolution.com/topics/self-evolving-ai-agents/ | expected-redirect-to-canonical |
| github-pages-legacy | /topics/self-evolving-ai-agents/ | 301 | http://agent-evolution.com/topics/self-evolving-ai-agents/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /reports/live-publication-readiness/ | 200 |  | canonical-200 |
| canonical-strict-https | /reports/live-publication-readiness/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /reports/live-publication-readiness/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /reports/live-publication-readiness/ | 301 | https://agent-evolution.com/reports/live-publication-readiness/ | expected-redirect-to-canonical |
| http-www | /reports/live-publication-readiness/ | 301 | http://agent-evolution.com/reports/live-publication-readiness/ | redirects-to-http-canonical-host |
| slashless-https | /reports/live-publication-readiness/ | 301 | https://agent-evolution.com/reports/live-publication-readiness/ | expected-redirect-to-canonical |
| github-pages-legacy | /reports/live-publication-readiness/ | 301 | http://agent-evolution.com/reports/live-publication-readiness/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /blog/tag/AI%20Self%20Evolution/ | 200 |  | canonical-200 |
| canonical-strict-https | /blog/tag/AI%20Self%20Evolution/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /blog/tag/AI%20Self%20Evolution/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /blog/tag/AI%20Self%20Evolution/ | 301 | https://agent-evolution.com/blog/tag/AI%20Self%20Evolution/ | expected-redirect-to-canonical |
| http-www | /blog/tag/AI%20Self%20Evolution/ | 301 | http://agent-evolution.com/blog/tag/AI%20Self%20Evolution/ | redirects-to-http-canonical-host |
| slashless-https | /blog/tag/AI%20Self%20Evolution/ | 301 | https://agent-evolution.com/blog/tag/AI%20Self%20Evolution/ | expected-redirect-to-canonical |
| github-pages-legacy | /blog/tag/AI%20Self%20Evolution/ | 301 | http://agent-evolution.com/blog/tag/AI%20Self%20Evolution/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /benchmark/ | 200 |  | canonical-200 |
| canonical-strict-https | /benchmark/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /benchmark/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /benchmark/ | 301 | https://agent-evolution.com/benchmark/ | expected-redirect-to-canonical |
| http-www | /benchmark/ | 301 | http://agent-evolution.com/benchmark/ | redirects-to-http-canonical-host |
| slashless-https | /benchmark/ | 301 | https://agent-evolution.com/benchmark/ | expected-redirect-to-canonical |
| github-pages-legacy | /benchmark/ | 301 | http://agent-evolution.com/benchmark/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /blog/ | 200 |  | canonical-200 |
| canonical-strict-https | /blog/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /blog/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /blog/ | 301 | https://agent-evolution.com/blog/ | expected-redirect-to-canonical |
| http-www | /blog/ | 301 | http://agent-evolution.com/blog/ | redirects-to-http-canonical-host |
| slashless-https | /blog/ | 301 | https://agent-evolution.com/blog/ | expected-redirect-to-canonical |
| github-pages-legacy | /blog/ | 301 | http://agent-evolution.com/blog/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /blog/adas-to-dgm-evolution/ | 200 |  | canonical-200 |
| canonical-strict-https | /blog/adas-to-dgm-evolution/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /blog/adas-to-dgm-evolution/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /blog/adas-to-dgm-evolution/ | 301 | https://agent-evolution.com/blog/adas-to-dgm-evolution/ | expected-redirect-to-canonical |
| http-www | /blog/adas-to-dgm-evolution/ | 301 | http://agent-evolution.com/blog/adas-to-dgm-evolution/ | redirects-to-http-canonical-host |
| slashless-https | /blog/adas-to-dgm-evolution/ | 301 | https://agent-evolution.com/blog/adas-to-dgm-evolution/ | expected-redirect-to-canonical |
| github-pages-legacy | /blog/adas-to-dgm-evolution/ | 301 | http://agent-evolution.com/blog/adas-to-dgm-evolution/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /blog/agent-evolution-layer/ | 200 |  | canonical-200 |
| canonical-strict-https | /blog/agent-evolution-layer/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /blog/agent-evolution-layer/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /blog/agent-evolution-layer/ | 301 | https://agent-evolution.com/blog/agent-evolution-layer/ | expected-redirect-to-canonical |
| http-www | /blog/agent-evolution-layer/ | 301 | http://agent-evolution.com/blog/agent-evolution-layer/ | redirects-to-http-canonical-host |
| slashless-https | /blog/agent-evolution-layer/ | 301 | https://agent-evolution.com/blog/agent-evolution-layer/ | expected-redirect-to-canonical |
| github-pages-legacy | /blog/agent-evolution-layer/ | 301 | http://agent-evolution.com/blog/agent-evolution-layer/ | redirects-to-http-canonical-host |
| canonical-relaxed-https | /blog/agent-frameworks-evolution-layer/ | 200 |  | canonical-200 |
| canonical-strict-https | /blog/agent-frameworks-evolution-layer/ | ERR_TLS_CERT_ALTNAME_INVALID | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com | fetch-error |
| http-apex | /blog/agent-frameworks-evolution-layer/ | 200 |  | http-serves-200-without-https-enforcement |
| https-www | /blog/agent-frameworks-evolution-layer/ | 301 | https://agent-evolution.com/blog/agent-frameworks-evolution-layer/ | expected-redirect-to-canonical |
| http-www | /blog/agent-frameworks-evolution-layer/ | 301 | http://agent-evolution.com/blog/agent-frameworks-evolution-layer/ | redirects-to-http-canonical-host |
| slashless-https | /blog/agent-frameworks-evolution-layer/ | 301 | https://agent-evolution.com/blog/agent-frameworks-evolution-layer/ | expected-redirect-to-canonical |
| github-pages-legacy | /blog/agent-frameworks-evolution-layer/ | 301 | http://agent-evolution.com/blog/agent-frameworks-evolution-layer/ | redirects-to-http-canonical-host |

## Manual GSC Inputs

Pass affected Search Console URLs as arguments to classify them directly, for example: `node scripts/audit_google_redirect_indexability.mjs https://agent-evolution.com/graph`.

| URL | Status | Location/Error | Classification |
|---|---:|---|---|
| None supplied | — | — | — |

## How To Read Search Console Rows

- `http://agent-evolution.com/*`, `https://www.agent-evolution.com/*`, `http://www.agent-evolution.com/*`, slashless paths like `/graph`, and the legacy GitHub Pages repository URL are non-canonical entry points. It is normal for them to be excluded as redirecting pages.
- `https://agent-evolution.com/.../` URLs that appear in `sitemap-0.xml` should not redirect. If one does, it is a route or hosting bug.
- Fragment URLs such as `/graph/#coverage-debt` should be collapsed to `/graph/` for inspection and canonicalization.

## Evidence Commands

- `node scripts/audit_google_redirect_indexability.mjs`
- `gh api repos/Shiyao-Huang/awesome-agent-evolution/pages`
- `curl -I https://agent-evolution.com/graph`
- Legacy Pages URL check: `curl -I https://shiyao-huang.github.io/<repo>/graph/`
