# Hourly Public Metadata Update - 2026-05-25 12:21 +0800

## One Sentence

Added seven browser-observed public GitHub signals for agent skills, harness optimization and paper workflow skills while marking local GitHub API freshness as blocked.

## Three-Sentence Compression

The direct user goal is to keep raw evidence, processed analysis, work notes and public site outputs synchronized for AI agent self-evolution research. Local shell access still cannot resolve api.github.com and the stored gh token is invalid, so current GitHub API metadata is not claimed fresh. Browser-observed GitHub evidence was promoted through raw captures, repo classification, project model cards, public report copies, site project data and Mermaid graph views.

## Added Repositories

- OthmanAdi/planning-with-files: Persistent Agent Planning Skill; raw=raw-github/othmanadi_planning-with-files.md; report=projects/178-planning-with-files-agent-planning-skill.md; evidence=web GitHub page observed 239 commits, MIT license, Python/Shell/PowerShell/TypeScript stack, 22k stars and 2k forks; README describes persistent markdown planning, session recovery, platform hooks, Codex setup, OpenClaw/Hermes support, and v2.41.0 release on 2026-05-24
- affaan-m/ECC: Agent Harness Optimization System; raw=raw-github/affaan-m_ecc.md; report=projects/179-ecc-agent-harness-optimization-system.md; evidence=web GitHub page observed 1,976 commits, MIT license, JavaScript/Rust/Python/Shell/TypeScript stack, 191k stars and 29.5k forks; README describes skills, instincts, memory, security, research-first development, context monitor, strategic compaction and v1.10.0 release on 2026-04-05
- kks0488/vibe-codex: Codex Skills and Agent Teams Kit; raw=raw-github/kks0488_vibe-codex.md; report=projects/180-vibe-codex-codex-skills-teams.md; evidence=web GitHub page observed 69 commits, JavaScript/PowerShell/Shell stack, 10 stars and 0 forks; README describes Codex-first skills, retry/self-healing/completion proof, vc teams commands, JSON mailboxes, MCP docs setup, and v0.4.1 release on 2026-02-09
- farmage/opencode-skills: OpenCode Agent Skills and Workflow Commands; raw=raw-github/farmage_opencode-skills.md; report=projects/181-opencode-skills-workflow-commands.md; evidence=web GitHub page observed 158 commits, MIT license, Python/JavaScript/Shell/HTML/Makefile/Astro stack, 28 stars and 6 forks; README describes 66 skills, 9-10 workflow commands, OpenCode adaptation, installer, validation and Atlassian MCP command flows
- cyijun/agent-smith: Directory-Isolated Multi-Agent Protocol; raw=raw-github/cyijun_agent-smith.md; report=projects/182-agent-smith-directory-isolated-multi-agent.md; evidence=web GitHub page observed 20 commits, MIT license, 18 stars and 2 forks; README describes recursive self-similar multi-agent execution, directory isolation, Claude Code skill entry, OpenCode/OpenClaw topics, max depth 3 and max 5 children constraints
- galyarderlabs/galyarder-framework: Agentic Skills Orchestration Framework; raw=raw-github/galyarderlabs_galyarder-framework.md; report=projects/183-galyarder-agentic-skills-orchestration.md; evidence=web GitHub page observed 278 commits, 11 stars and 2 forks; README describes agentic skills framework orchestration, .codex/.opencode support, marketplace plugin installation, universal plugin architecture, verified logic, context economy and 8 high-integrity department silos
- quzhiii/thesis-skills: Paper Workflow Agent Skills; raw=raw-github/quzhiii_thesis-skills.md; report=projects/184-thesis-skills-paper-workflow-skills.md; evidence=web GitHub page observed 148 commits, MIT license, Python/HTML/CSS stack, 71 stars and 6 forks; README lists Word-to-LaTeX, reference, language, format, compile, readiness, hallucination-risk and claim-citation skill modules, plus v1.0.0 release on 2026-04-30

## Blockers

- Shell GitHub API: `curl -I -L --max-time 12 https://api.github.com/rate_limit` failed with `Could not resolve host: api.github.com`.
- GitHub CLI: `gh auth status` reports the token for `Shiyao-Huang` is invalid.
- GitNexus: local binary `/Users/copizzah/.local/bin/gitnexus` is available; reused temp HOME failed due LadybugDB FTS extension download/index state, then fresh temp HOME analyze succeeded with FTS degraded.

## Working Principle

raw GitHub capture -> repo-classification row -> raw timestamp index -> GitHub data analysis -> project model card -> site/public report -> site project page -> Mermaid graph learning note.

## Final Validation

- Syntax: `jq empty research/repo-classification.json .mermaid/current/graph.json`, `node --check site/src/data/projects.ts`, and `node --check scripts/generate_project_indexes.mjs` passed.
- Indexes: `node scripts/generate_project_indexes.mjs` passed after README count refresh.
- Raw timestamps: `python3 scripts/enforce_raw_timestamps.py` passed with raw-github md=475, md_ok=475, missing_count=0.
- GitHub analysis: `node scripts/analyze_github_project_data.mjs` passed with raw=475, classified=475, analyzed_projects=193, strict_evolution=79, broad_evolution=175.
- Visual assets: `node scripts/generate_visual_assets.mjs` regenerated 4 SVG assets.
- GitNexus: fresh `HOME=/private/tmp/gitnexus-home-1221` analyze succeeded with 10,623 nodes, 11,534 edges, 31 clusters, 15 flows; FTS degraded because LadybugDB extension download could not connect.
- Site: `(cd site && npm run build)` passed with 274 pages and existing Astro `z` deprecation hints.
- Paper: `(cd paper-drafts && xelatex -interaction=nonstopmode -halt-on-error main.tex)` passed; main.pdf remains 213 pages with existing font/overfull/underfull warnings.
