# Hourly Public Metadata Update - 2026-05-24 16:59 +08:00

## One Sentence

Added six web-observed GitHub metadata captures across official/community agent skills, scientific skills, production harness, and skill-effect benchmarking, then propagated them into classification, project reports, public site data, and Mermaid evidence.

## Three Sentences

Direct user intent still prioritizes raw -> processed -> work -> results traceability. Shell GitHub API access remains blocked by DNS and gh auth is invalid, so this run uses browser-observed GitHub pages and marks freshness as web-observed rather than API-verified. GitNexus now indexes the repository successfully under a sandboxed HOME, but FTS remains degraded because the extension download cannot connect.

## Data Flow

1. Raw GitHub captures: new files in `raw-github/` with frontmatter timestamps.
2. Processed classification: `research/repo-classification.*` gains matching rows.
3. Results/public site: `site/src/data/projects.ts`, `projects/`, and `site/public/reports/projects/` gain model-card entries.
4. Graph evidence: `.mermaid/current/graph.json` remains truth source; `.mmd` and `.md` are rendered views.

## GitNexus / Freshness Notes

- GitNexus 1.6.5 is installed and `gitnexus doctor` reports graph/full-text/vector capabilities.
- `HOME=/private/tmp/gitnexus-home gitnexus analyze --skip-git --index-only --name awesome-evolution-hourly .` succeeded: 8,654 nodes, 8,878 edges, 27 clusters, 9 flows.
- GitNexus FTS is degraded: extension download could not connect, so exact graph/index evidence is available without FTS.
- GitHub API freshness is blocked: `curl https://api.github.com/rate_limit` cannot resolve host and gh has an invalid token.

## Added Repositories

- anthropics/skills: 官方 Agent Skills 标准样例库; raw=raw-github/anthropics_skills.md; report=projects/64-anthropic-skills.md
- ComposioHQ/awesome-claude-skills: Agent Skills 社区资源索引; raw=raw-github/composiohq_awesome-claude-skills.md; report=projects/65-awesome-claude-skills.md
- MicrosoftDocs/Agent-Skills: 企业文档驱动 Agent Skills; raw=raw-github/microsoftdocs_agent-skills.md; report=projects/66-microsoft-agent-skills.md
- K-Dense-AI/scientific-agent-skills: 科研 Agent Skills 工作流库; raw=raw-github/k-dense-ai_scientific-agent-skills.md; report=projects/67-scientific-agent-skills.md
- aden-hive/hive: 生产级 Multi-Agent Harness; raw=raw-github/aden-hive_hive.md; report=projects/68-aden-hive.md
- GeniusHTX/SWE-Skills-Bench: Agent Skills 效果基准; raw=raw-github/geniushtx_swe-skills-bench.md; report=projects/69-swe-skills-bench.md

## Expected Validation

Run `node scripts/generate_project_indexes.mjs`, `python3 scripts/enforce_raw_timestamps.py`, `node scripts/analyze_github_project_data.mjs`, `(cd site && npm run build)`, and paper build if paper-facing generated analysis changes.
