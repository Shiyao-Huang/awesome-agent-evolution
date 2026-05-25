# Hourly Public Metadata Update - 2026-05-24

## One Sentence

This run promoted fresh public harness, benchmark, skill, and memory-adjacent GitHub evidence from raw captures into classification, analysis, Mermaid graph notes, and public site project cards.

## Three Sentences

The primary user intent is the raw -> processed -> work -> results chain for Self Evolve, not any team summary. Shell GitHub API freshness was blocked by DNS and an invalid `gh` token, so current public evidence came from browser-accessed GitHub pages and the limitation is explicit. GitNexus is installed and `doctor` passes, but `gitnexus analyze` cannot write `/Users/copizzah/.gitnexus/registry.json` under the current sandbox, so this run records a degraded GitNexus evidence lane.

## Updated Data Flow

| Layer | Updated paths | Role |
|---|---|---|
| Raw | `raw-github/claw-bench_claw-bench.md`, `raw-github/openclaw_clawbench.md`, `raw-github/claw-eval_claw-eval.md`, `raw-github/raphaelchristi_harness-evolver.md`, `raw-github/ai-boost_awesome-harness-engineering.md` | New web-observed GitHub raw captures. |
| Processed | `research/repo-classification.*`, `output/raw-github-timestamp-index.*`, `analysis/github-project-data-analysis.*` | Classification, timestamp index, and corpus analysis refresh. |
| Work | `.mermaid/current/graph.json`, `.mermaid/current/graph.mmd`, `.mermaid/current/graph.md`, this note | Working principle, evidence limits, and handoff graph. |
| Results | `site/src/data/projects.ts`, `projects/53-*.md` to `projects/57-*.md`, `site/public/reports/projects/53-*.md` to `57-*.md` | Public model-card/site impact. |

## Hourly Delta Repositories

| Repo | Why it matters |
|---|---|
| `claw-bench/claw-bench` | Real agent benchmark using skill instructions, task execution, pytest verification, and leaderboard submission. |
| `openclaw/clawbench` | Trace-based benchmark that separates final output from trajectory, reliability, and harness/config effects. |
| `claw-eval/claw-eval` | Human-verified autonomous-agent evaluation with Pass^3 and full-trajectory auditing signals. |
| `raphaelchristi/harness-evolver` | Agent harness self-evolution loop that edits prompts, routing, tools, and architecture behind evaluation gates. |
| `ai-boost/awesome-harness-engineering` | Resource taxonomy for harness primitives: context, tools, skills/MCP, memory, verification, permissions, sandbox, observability. |

## Evidence Limits

- `curl https://api.github.com/rate_limit` failed with DNS resolution error: `Could not resolve host: api.github.com`.
- `gh auth status` reports the active token for `Shiyao-Huang` is invalid; `gh api rate_limit` could not connect.
- `gitnexus doctor` succeeded on GitNexus `1.6.5`.
- `gitnexus analyze --skip-git --index-only --name awesome-agent-evolution-hourly .` failed with `EPERM: operation not permitted, open '/Users/copizzah/.gitnexus/registry.json'`.

## Working Principle

The public metadata loop should be treated as a funnel: direct user intent governs raw capture scope; raw GitHub captures preserve source evidence; classification and timestamp indexes turn raw into queryable processed data; analysis files answer corpus questions for the paper; project cards and public reports expose the result to the site. When external freshness is blocked, the correct behavior is to preserve best local/web evidence, mark the blocker, and avoid inventing API freshness.
