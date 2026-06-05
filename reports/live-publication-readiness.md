# Live Publication Readiness Audit

Generated: 2026-06-05T16:31:22.166Z

Canonical host: https://agent-evolution.com

Global status: **FAIL**

## One-Sentence Verdict

The generated site is locally indexable, but the public custom domain is not yet strict-HTTPS ready for Google-style crawling.

## Boundary

Live publication readiness checks external crawl prerequisites. It complements local sitemap/metadata audits and can fail even when the generated site build is valid.

Related generated-site audits: [SEO indexable assets](https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/reports/seo-indexable-assets.md), [Google indexable routes](https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/reports/google-indexable-routes.md), and [public i18n route audit](https://github.com/Shiyao-Huang/awesome-agent-evolution/blob/main/reports/public-i18n-route-audit.md).

## Reader Impact And Next Action

- What still works today: the generated site builds, sitemap/meta audits pass locally, and relaxed HTTPS/HTTP checks return `200` from GitHub Pages.
- What is blocked: strict HTTPS crawlers cannot trust `https://agent-evolution.com` until GitHub Pages issues a certificate that covers the custom domain.
- Next action: keep the GitHub Pages CNAME on `agent-evolution.com`, wait for certificate issuance or repair domain/DNS verification, enable HTTPS enforcement, then rerun `node scripts/audit_live_publication_readiness.mjs`.

## Blocking Failures

- GitHub Pages HTTPS enforcement is disabled
- TLS certificate does not cover agent-evolution.com
- Strict HTTPS homepage is not reachable: Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com
- Strict HTTPS sitemap is not reachable: Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com

## GitHub Pages State

| Field | Value |
|---|---|
| CNAME | agent-evolution.com |
| HTML URL | http://agent-evolution.com/ |
| HTTPS enforced | false |
| Protected domain state | null |
| Pending domain unverified at | null |

## TLS Certificate

| Field | Value |
|---|---|
| Covers `agent-evolution.com` | false |
| Subject | {"CN":"\*.github.io"} |
| Issuer | {"C":"US","O":"Let's Encrypt","CN":"R12"} |
| Valid from | Apr  6 23:32:36 2026 GMT |
| Valid to | Jul  5 23:32:35 2026 GMT |
| SAN | DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com |

## Request Checks

| Check | OK | Status/Error |
|---|---:|---|
| Strict HTTPS homepage | false | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com |
| Relaxed HTTPS homepage | true | 200 |
| HTTP homepage | true | 200 |
| Strict HTTPS sitemap | false | Hostname/IP does not match certificate's altnames: Host: agent-evolution.com. is not in the cert's altnames: DNS:\*.github.com, DNS:\*.github.io, DNS:\*.githubusercontent.com, DNS:github.com, DNS:github.io, DNS:githubusercontent.com |
| Relaxed HTTPS sitemap | true | 200 |

## DNS Observation

DNS values are recorded as observed from the current runner. The decisive blockers are GitHub Pages HTTPS enforcement and certificate coverage, not local DNS formatting alone. `198.18.0.0/15` values, when present, are runner/resolver-local observations and are not treated as authoritative public DNS evidence.

## Evidence Commands

- GitHub Pages API: `gh api repos/Shiyao-Huang/awesome-agent-evolution/pages`
- Strict HTTPS check: `curl -I https://agent-evolution.com/`
- TLS certificate check: `openssl s_client -connect agent-evolution.com:443 -servername agent-evolution.com`

```json
{
  "apex_a": [
    "198.18.0.151"
  ],
  "apex_aaaa": {
    "error": "queryAaaa ENODATA agent-evolution.com",
    "code": "ENODATA"
  },
  "www_cname": [
    "shiyao-huang.github.io"
  ],
  "www_a": [
    "198.18.0.155"
  ]
}
```
