# Hourly Public Metadata Update - 2026-05-25 23:35 +0800

## One Sentence

Added six web-observed memory, git-native agent, auto-memory/skill and continuity-evaluation repositories while keeping API freshness caveats explicit.

## Three Sentences

The direct user goal remains the raw -> processed -> work -> results public metadata loop. This iteration adds cxxz/awesome-agent-memory, zhangfengcdt/memoir, DEEP-PolyU/Awesome-GraphMemory, Kenotic-Labs/ATANT, open-gitagent/gitagent and google-gemini/gemini-cli to raw captures, classification, model-card reports, site data and graph views. GitHub API metadata is not fabricated: shell `curl https://api.github.com/rate_limit` failed DNS resolution and `gh auth status` reports an invalid token.

## Added Repositories

- cxxz/awesome-agent-memory: Agent Memory Resource Index; raw=raw-github/cxxz_awesome-agent-memory.md; report=projects/209-cxxz-awesome-agent-memory.md.
- zhangfengcdt/memoir: Git-like Agent Auto-Memory; raw=raw-github/zhangfengcdt_memoir.md; report=projects/210-memoir-agent-auto-memory.md.
- DEEP-PolyU/Awesome-GraphMemory: Graph-Based Agent Memory Index; raw=raw-github/deep-polyu_awesome-graphmemory.md; report=projects/211-awesome-graphmemory.md.
- Kenotic-Labs/ATANT: Agent Continuity Evaluation; raw=raw-github/kenotic-labs_atant.md; report=projects/212-atant-agent-continuity-eval.md.
- open-gitagent/gitagent: Git-Native Agent Framework; raw=raw-github/open-gitagent_gitagent.md; report=projects/213-gitagent-git-native-agent-framework.md.
- google-gemini/gemini-cli: Agent CLI Auto-Memory and Skills; raw=raw-github/google-gemini_gemini-cli.md; report=projects/214-gemini-cli-auto-memory-skills.md.

## Working Principle

Browser/search-observed GitHub evidence -> `raw-github/*.md` -> `research/repo-classification.*` -> `output/raw-github-timestamp-index.*` -> `analysis/github-project-data-analysis.*` -> `projects/` + `site/public/reports/projects/` -> `site/src/data/projects.ts` -> README/i18n/site build.

## Evidence Quality

- GitHub shell/API freshness blocker: DNS failure for `api.github.com` and invalid local `gh` token.
- GitNexus blocker/status: local `npx gitnexus status` was available but stale before this iteration; `npx gitnexus analyze` is required after updates.
- No cloned code was executed and no benchmark claim was independently rerun.
- Mermaid truth source: `.mermaid/current/graph.json`.
