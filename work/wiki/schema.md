# work/wiki/schema.md — Wiki Conventions

> The schema governs how all agents read, write, and maintain the wiki.
> Last updated: 2026-05-26T12:00 by Implementer

## Three-Layer Architecture

```
Layer 1 — Raw Sources (IMMUTABLE)
  raw-github/    raw-papers/    raw-social/    raw-blogs/    raw-social-rank/
  → Source of truth. Agents READ but NEVER modify.

Layer 2 — Wiki (AGENT-MAINTAINED)
  work/wiki/
  → LLM-generated structured markdown. Agents WRITE here.
  → Cross-referenced, version-controlled, compounding.

Layer 3 — Schema (RULES)
  work/wiki/schema.md (this file)
  → Conventions, formats, workflows.
```

## Directory Convention

```
work/wiki/
├── schema.md          ← THIS FILE: rules and conventions
├── index.md           ← content catalog (updated on every ingest)
├── log.md             ← append-only timeline (updated on every action)
├── concepts/          ← mechanism types, taxonomies, classification
│   ├── reward-based-evolution.md
│   ├── self-play-evolution.md
│   ├── prompt-evolution.md
│   ├── architecture-search.md
│   └── memory-evolution.md
├── entities/          ← people, orgs, projects, papers
│   ├── people/        ← researcher profiles, talent movement
│   ├── orgs/          ← lab/institution pages
│   ├── projects/      ← GitHub repo/entity pages
│   └── papers/        ← paper digest pages
├── sources/           ← raw material digests with trust chains
│   ├── github-digest.md
│   ├── papers-digest.md
│   ├── social-digest.md
│   └── blogs-digest.md
└── synthesis/         ← cross-cutting analyses
    ├── mechanism-framework.md
    ├── talent-landscape.md
    ├── sv-selfevolution-landscape.md
    └── brainstorm-*.md
```

## Page Format

Every wiki page must include YAML frontmatter:

```markdown
---
title: Page Title
type: concept | entity | source | synthesis
rank: A | B | C
tags: [tag1, tag2]
sources: [path/to/raw/source]
updated: 2026-05-26
---

# Page Title

> One-line summary.

## Content
...

## Cross-references
- [[linked-page-name]]
```

## Rank System

Every page and every claim must have a rank:

| Rank | Meaning | Criteria |
|------|---------|----------|
| **A** | Verified, high-value | Original link present, cross-validated, directly relevant to self-evolution |
| **B** | Useful, partially verified | Original link present, plausible but not cross-validated |
| **C** | Unverified or low-value | No original link, OR tangentially related |

## Trust Chain Rule

**Every factual claim must include an original source link.**

Format: `[CLAIM] — Source: [URL or file path]`

Examples:
- "STaR achieved 74% on GSM8K — Source: raw-papers/2203.14465.md"
- "Anthropic hired X from OpenAI — Source: https://twitter.com/..."
- "AutoGPT has 184k stars — Source: raw-github/autogpt.md"

**No link = invalid claim. Mark as [UNVERIFIED].**

## Operations

### Ingest Workflow
1. Read source from raw-* layer
2. Extract key information
3. Write/update wiki page(s)
4. Add frontmatter with rank and tags
5. Update index.md
6. Append to log.md

### Query Workflow
1. Read index.md to find relevant pages
2. Read target pages
3. Synthesize answer with citations
4. Optionally file answer back as new synthesis page

### Lint Workflow
1. Check for orphan pages (no inbound links)
2. Check for stale claims (newer sources supersede)
3. Check for missing frontmatter
4. Check for [UNVERIFIED] claims that can now be verified
5. Update log.md with lint results

## Agent Responsibilities

| Role | Wiki Action |
|------|------------|
| Researcher | Ingest raw-* → wiki pages, extract entities/concepts |
| Implementer | Build infrastructure, fix compilation, create templates |
| Architect | Design frameworks → synthesis pages |
| Scribe | Maintain index.md, log.md, lint wiki |
| QA | Verify trust chains, check ranks |

## Log Entry Format

```markdown
## [YYYY-MM-DD HH:MM] operation | title

**操作:** brief description
**详情:**
- bullet 1
- bullet 2
**产出:** path/to/output/file.md
```

Parse with: `grep "^## \[" work/wiki/log.md | tail -10`
