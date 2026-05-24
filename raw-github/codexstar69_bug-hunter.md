---
repo: codexstar69/bug-hunter
url: https://github.com/codexstar69/bug-hunter
content_timestamp: 2026-03-12
time_slice: 2026-03
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - codexstar69/bug-hunter: Adversarial AI bug hunter with auto-fix skill for Claude Code, Cursor, Codex CLI, GitHub Copilot CLI, Kiro CLI, Opencode, Pi Coding Agent, and more. Multi-agent pipeline finds security vulnerabilities, logic errors, and runtime bugs — then fixes them autonomously on a safe branch. · GitHub

**Source**: https://github.com/codexstar69/bug-hunter

---

[Skip to content](https://github.com/codexstar69/bug-hunter#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[codexstar69](https://github.com/codexstar69)

/
**[bug-hunter](https://github.com/codexstar69/bug-hunter)**

Public

- [Notifications](https://github.com/login?return_to=%2Fcodexstar69%2Fbug-hunter)You must be signed in to change notification settings
- [Fork
    46](https://github.com/login?return_to=%2Fcodexstar69%2Fbug-hunter)
- 
[Star
          380](https://github.com/login?return_to=%2Fcodexstar69%2Fbug-hunter)

[https://github.com/codexstar69/bug-hunter](https://github.com/codexstar69/bug-hunter)

[Branches](https://github.com/codexstar69/bug-hunter/branches)[Tags](https://github.com/codexstar69/bug-hunter/tags)

[https://github.com/codexstar69/bug-hunter/branches](https://github.com/codexstar69/bug-hunter/branches)[https://github.com/codexstar69/bug-hunter/tags](https://github.com/codexstar69/bug-hunter/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History71 Commits71 Commits |  |  |  |
| .github | .github |  |  |
| agents | agents |  |  |
| bin | bin |  |  |
| docs | docs |  |  |
| evals | evals |  |  |
| modes | modes |  |  |
| prompts | prompts |  |  |
| schemas | schemas |  |  |
| scripts | scripts |  |  |
| skills | skills |  |  |
| templates | templates |  |  |
| test-fixture | test-fixture |  |  |
| .gitignore | .gitignore |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| SKILL.md | SKILL.md |  |  |
| llms-full.txt | llms-full.txt |  |  |
| llms.txt | llms.txt |  |  |
| package.json | package.json |  |  |
| test.txt | test.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/hero.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/hero.png)

# Bug Hunter

[https://github.com/codexstar69/bug-hunter#bug-hunter](https://github.com/codexstar69/bug-hunter#bug-hunter)

**AI code review that argues with itself — adversarial multi-agent bug finding, security scanning, and auto-fix for any coding agent.**

[https://www.npmjs.com/package/@codexstar/bug-hunter](https://www.npmjs.com/package/@codexstar/bug-hunter)[https://github.com/codexstar69/bug-hunter/blob/main/LICENSE](https://github.com/codexstar69/bug-hunter/blob/main/LICENSE)[https://camo.githubusercontent.com/c1aa4d33be3fa6ab6ea96037fc5b43a3c6491548eee1c44d667da42305d1705b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74657374732d31313325323070617373696e672d627269676874677265656e](https://camo.githubusercontent.com/c1aa4d33be3fa6ab6ea96037fc5b43a3c6491548eee1c44d667da42305d1705b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74657374732d31313325323070617373696e672d627269676874677265656e)[https://camo.githubusercontent.com/9f4124944b5afca98e1d5234775449594d596dc679514e7d60a3eb460b3863d8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652d25334525334431382d626c7565](https://camo.githubusercontent.com/9f4124944b5afca98e1d5234775449594d596dc679514e7d60a3eb460b3863d8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652d25334525334431382d626c7565)

[Install](https://github.com/codexstar69/bug-hunter#install) ·   [Quick Start](https://github.com/codexstar69/bug-hunter#quick-start) ·   [How It Works](https://github.com/codexstar69/bug-hunter#how-adversarial-ai-code-review-works) ·   [What It Finds](https://github.com/codexstar69/bug-hunter#bugs-and-vulnerabilities-detected) ·   [Auto-Fix](https://github.com/codexstar69/bug-hunter#safe-auto-fix-with-canary-rollout) ·   [CLI Reference](https://github.com/codexstar69/bug-hunter#cli-flags)

---

Bug Hunter is an open-source AI code review and security vulnerability scanner that works as a skill/plugin for AI coding agents. Three AI agents — a Hunter, a Skeptic, and a Referee — independently analyze your code in an adversarial pipeline. The Hunter finds bugs. The Skeptic tries to disprove them. The Referee delivers the final verdict. Only bugs that survive all three stages make the report, eliminating the false positive overload that plagues other AI code review tools.

It then auto-fixes confirmed bugs with a safe canary rollout pipeline — git branching, test baselines, per-fix commits, automatic rollback on failure, and post-fix re-scanning.

---

## Install

[https://github.com/codexstar69/bug-hunter#install](https://github.com/codexstar69/bug-hunter#install)

```
npx skills add codexstar69/bug-hunter
```

Or via npm:

```
npm install -g @codexstar/bug-hunter
bug-hunter install     # auto-detects your IDE/agent
bug-hunter doctor      # verify environment
```

Or clone:

```
git clone https://github.com/codexstar69/bug-hunter.git ~/.agents/skills/bug-hunter
```

> **Requirements:** Node.js 18+ recommended. Core pipeline works without it.
> 
> 
> 
> **Compatible with:** Claude Code, Cursor, Codex CLI, Windsurf, Kiro, Copilot, Opencode, [Pi](https://github.com/mariozechner/pi-coding-agent) — or any AI agent that can read files and run shell commands.

---

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-pr-review-flow.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-pr-review-flow.png)

## Quick Start

[https://github.com/codexstar69/bug-hunter#quick-start](https://github.com/codexstar69/bug-hunter#quick-start)

```
/bug-hunter                      # scan project, auto-fix confirmed bugs
/bug-hunter src/                 # scan a specific directory
/bug-hunter --scan-only src/     # report only, no code changes
/bug-hunter --pr                 # review the current pull request
/bug-hunter --pr-security        # PR security review + threat model + CVEs
/bug-hunter --deps --threat-model # full security audit
```

---

## How Adversarial AI Code Review Works

[https://github.com/codexstar69/bug-hunter#how-adversarial-ai-code-review-works](https://github.com/codexstar69/bug-hunter#how-adversarial-ai-code-review-works)

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/pipeline-overview.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/pipeline-overview.png)

```
Triage  → Recon → Hunter → Skeptic → Referee → Fix Plan → Fixer → Verify
  (<2s)              ↕ doc verify    ↕ doc verify
```

1. **Triage** — classifies every file by risk in <2 seconds, zero AI tokens
2. **Recon** — maps tech stack, auth mechanisms, attack surfaces
3. **Hunter** — deep behavioral scan for logic errors, security vulnerabilities, race conditions
4. **Skeptic** — adversarial review that tries to *disprove* every finding with counter-evidence
5. **Referee** — independent final judge, re-reads code, delivers CVSS-scored verdicts
6. **Fixer** — applies canary-first patches with per-fix rollback safety

Claims are verified against official library documentation via [Context Hub](https://github.com/andrewyng/context-hub) + [Context7](https://context7.com) before any agent asserts framework behavior.

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/doc-verify-fix-plan.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/doc-verify-fix-plan.png)

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/adversarial-debate.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/adversarial-debate.png)

| Agent | Rewarded For | Penalized For |
|---|---|---|
| Hunter | Confirmed real bugs | False positives |
| Skeptic | Disproving false positives | Missing real bugs (2x penalty) |
| Referee | Accurate independent verdicts | Blind trust in either side |

---

## Bugs and Vulnerabilities Detected

[https://github.com/codexstar69/bug-hunter#bugs-and-vulnerabilities-detected](https://github.com/codexstar69/bug-hunter#bugs-and-vulnerabilities-detected)

**Runtime behavioral bugs only** — not style, naming, or TODOs:

- **Security** — SQL injection, XSS, command injection, path traversal, IDOR, auth bypass, SSRF
- **Logic** — wrong comparisons, off-by-one, inverted conditions, unreachable branches
- **Concurrency** — race conditions, TOCTOU, deadlocks
- **Error handling** — swallowed exceptions, unhandled promise rejections
- **Data integrity** — silent truncation, encoding corruption, resource leaks
- **API contracts** — type mismatches, incorrect callback signatures

Every security finding gets **STRIDE classification**, **CWE ID**, and **CVSS 3.1 scoring** with proof-of-concept payloads.

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/security-finding-card.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/security-finding-card.png)

### Supported Languages and Frameworks

[https://github.com/codexstar69/bug-hunter#supported-languages-and-frameworks](https://github.com/codexstar69/bug-hunter#supported-languages-and-frameworks)

**Languages:** TypeScript, JavaScript, Python, Go, Rust, Java, Kotlin, Ruby, PHP

**Frameworks:** Express, Next.js, Django, Flask, FastAPI, Gin, Spring Boot, Rails, Laravel — and any framework with docs in Context7.

---

## Safe Auto-Fix with Canary Rollout

[https://github.com/codexstar69/bug-hunter#safe-auto-fix-with-canary-rollout](https://github.com/codexstar69/bug-hunter#safe-auto-fix-with-canary-rollout)

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-fix-plan-rollout.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-fix-plan-rollout.png)

When bugs are confirmed, the Fixer engineers patches — not just edits:

1. **Git branch** — dedicated fix branch with restore point
2. **Test baseline** — captures passing tests before any edits
3. **Strategy** — classifies each bug: safe-autofix / manual-review / larger-refactor / architectural
4. **Confidence gate** — only auto-fixes bugs confirmed at >=75% confidence
5. **Canary rollout** — top 1-3 Critical bugs fixed first; if tests break, pipeline halts
6. **Per-fix checkpoint** — each fix committed individually; failures auto-revert
7. **Post-fix re-scan** — catches bugs the Fixer itself introduced

`--plan-only` to see the strategy. `--dry-run` to preview diffs. `--safe` to approve each fix.

---

## Security Scanning Features

[https://github.com/codexstar69/bug-hunter#security-scanning-features](https://github.com/codexstar69/bug-hunter#security-scanning-features)

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-security-pack.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-security-pack.png)

| Flag | Capability |
|---|---|
| --threat-model | STRIDE threat model generation |
| --deps | Dependency CVE scanning (npm, pip, go, cargo, bun) with reachability analysis |
| --pr-security | PR-scoped security review with threat model + CVE context |
| --security-review | Enterprise security audit workflow |
| --validate-security | Exploitability validation with CVSS scoring |

Bundled security skills: `commit-security-scan`, `security-review`, `threat-model-generation`, `vulnerability-validation`.

---

## CLI Flags

[https://github.com/codexstar69/bug-hunter#cli-flags](https://github.com/codexstar69/bug-hunter#cli-flags)

| Flag | Behavior |
|---|---|
| (no flags) | Scan + auto-fix confirmed bugs |
| src/ or file.ts | Scan specific path |
| --scan-only / --review | Report only, no edits |
| --fix --approve / --safe | Approve each fix interactively |
| --plan-only / --plan | Generate fix strategy without editing |
| --dry-run / --preview | Preview fixes as diffs |
| -b branch | Scan branch diff vs main |
| --pr / --pr 123 / --pr recent | Review a pull request |
| --staged | Scan staged files (pre-commit hook) |
| --deps | Dependency CVE scan |
| --threat-model | STRIDE threat model |
| --no-loop | Single-pass scan (loop is on by default) |
| --autonomous | Zero-intervention auto-fix |

All flags compose: `/bug-hunter --deps --threat-model --fix src/`

---

## Output Files

[https://github.com/codexstar69/bug-hunter#output-files](https://github.com/codexstar69/bug-hunter#output-files)

[https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-machine-readable-artifacts.png](https://github.com/codexstar69/bug-hunter/blob/main/docs/images/2026-03-12-machine-readable-artifacts.png)

Every run creates `.bug-hunter/` (add to `.gitignore`):

| File | Purpose |
|---|---|
| findings.json | Machine-readable findings (CI/CD gating, dashboards) |
| report.md | Human-readable report |
| referee.json | Final verdicts with CVSS scores and PoC payloads |
| fix-strategy.json | Remediation classification |
| fix-plan.json | Canary rollout execution plan |
| fix-report.json | Fix results |
| triage.json | File risk classification |
| threat-model.md | STRIDE threat model |
| dep-findings.json | Dependency CVE results |

---

## Self-Test

[https://github.com/codexstar69/bug-hunter#self-test](https://github.com/codexstar69/bug-hunter#self-test)

Ships with 6 planted bugs and **113 regression tests**:

```
/bug-hunter test-fixture/     # validate pipeline
npm test                      # run test suite
```

---

## Project Structure

[https://github.com/codexstar69/bug-hunter#project-structure](https://github.com/codexstar69/bug-hunter#project-structure)

```
bug-hunter/
├── SKILL.md              # Pipeline orchestration
├── bin/bug-hunter         # CLI installer
├── skills/                # 10 agent skills (hunter, skeptic, referee, fixer, recon, + 5 more)
├── modes/                 # Execution strategies (single-file → large-codebase)
├── schemas/               # JSON artifact contracts
├── scripts/               # Node.js helpers + 113 tests
├── templates/             # Subagent dispatch template
└── test-fixture/          # 6 planted bugs for validation
```

---

## License

[https://github.com/codexstar69/bug-hunter#license](https://github.com/codexstar69/bug-hunter#license)

MIT

## About

         Adversarial AI bug hunter with auto-fix skill for Claude Code, Cursor, Codex CLI, GitHub Copilot CLI, Kiro CLI, Opencode, Pi Coding Agent, and more. Multi-agent pipeline finds security vulnerabilities, logic errors, and runtime bugs — then fixes them autonomously on a safe branch.       

### Topics

[opencode](https://github.com/topics/opencode)[devtools](https://github.com/topics/devtools)[vscode](https://github.com/topics/vscode)[multi-agent](https://github.com/topics/multi-agent)[code-quality](https://github.com/topics/code-quality)[cursor](https://github.com/topics/cursor)[security-scanner](https://github.com/topics/security-scanner)[claude](https://github.com/topics/claude)[bug-detection](https://github.com/topics/bug-detection)[github-copilot](https://github.com/topics/github-copilot)[auto-fix](https://github.com/topics/auto-fix)[llm](https://github.com/topics/llm)[ai-code-review](https://github.com/topics/ai-code-review)[claude-code](https://github.com/topics/claude-code)[codex-cli](https://github.com/topics/codex-cli)[coding-agent](https://github.com/topics/coding-agent)[adversarial-ai](https://github.com/topics/adversarial-ai)[kiro](https://github.com/topics/kiro)[pi-coding-agent](https://github.com/topics/pi-coding-agent)

### Resources

[Readme](https://github.com/codexstar69/bug-hunter#readme-ov-file)

### License

[MIT license](https://github.com/codexstar69/bug-hunter#MIT-1-ov-file)

### Code of conduct

[Code of conduct](https://github.com/codexstar69/bug-hunter#coc-ov-file)

### Contributing

[Contributing](https://github.com/codexstar69/bug-hunter#contributing-ov-file)

### Security policy

[Security policy](https://github.com/codexstar69/bug-hunter#security-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/codexstar69/bug-hunter/activity)

### Stars

[380
        stars](https://github.com/codexstar69/bug-hunter/stargazers)

### Watchers

[3
        watching](https://github.com/codexstar69/bug-hunter/watchers)

### Forks

[46
        forks](https://github.com/codexstar69/bug-hunter/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fcodexstar69%2Fbug-hunter&report=codexstar69+%28user%29)

## [Releases
      4](https://github.com/codexstar69/bug-hunter/releases)

[v3.0.8 — Reliability Hardening
        
          Latest
      
      Mar 13, 2026](https://github.com/codexstar69/bug-hunter/releases/tag/v3.0.8)
[+ 3 releases](https://github.com/codexstar69/bug-hunter/releases)

## [Packages
      0](https://github.com/users/codexstar69/packages?repo_name=bug-hunter)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/codexstar69/bug-hunter/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages
