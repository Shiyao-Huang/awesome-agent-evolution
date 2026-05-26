# Survey Publication Pack: Value-First Release Plan

> Layer: results / publishing package  
> Source chain: `survey/latex/main.tex`, `paper-drafts/`, `work/wiki/`, `raw-*`, `projects/`, `site/src/content/blog/`  
> Updated: 2026-05-26

## One-Sentence Judgment

The survey should be published as a decision tool, not as a chapter dump: each release slice must help readers decide what is real, what is usable, what evidence exists, and what to build next.

## Three-Sentence Value Frame

Self-evolving AI is noisy because papers, GitHub projects, demos, benchmark claims, and social hype all use similar words for very different mechanisms. This survey is valuable when it turns that noise into a ranked map: which systems truly modify themselves, which merely optimize prompts, which have reproducible evidence, and which fail in production. The publication plan therefore splits the survey by reader decision, not by LaTeX chapter.

## Publication Slices

| Slice | Reader Question | Core Value | Primary Source | Best Channel |
|---|---|---|---|---|
| 01 Field Map | "What is self-evolving AI, really?" | Shared vocabulary and mechanism map | `survey/latex/chapters/ch1-intro.tex`, `ch2-theory.tex`, `work/wiki/sources/essential-taxonomy-framework.md` | Blog, GitHub README, regular HN submission |
| 02 True vs Pseudo Evolution | "Which projects actually evolve?" | Screening rubric for GitHub projects | `work/wiki/sources/project-evolution-grading-full.md`, `raw-github/`, `projects/` | GitHub report, HN regular submission |
| 03 Evaluation Bottleneck | "Why do self-improving agents fail to prove improvement?" | Benchmark and evaluator risk model | `survey/latex/chapters/ch5-evaluation.tex`, `paper-drafts/ch5-evaluation.tex`, `work/wiki/sources/papers-digest.md` | Technical blog, research communities |
| 04 Demo to Production Gap | "What breaks when agents leave the demo?" | Engineering checklist from user pain points | `survey/latex/chapters/ch6-industry.tex`, `ch7-painpoints.tex`, `paper-drafts/ch7-painpoints.tex` | Engineering blog, Reddit, LinkedIn |
| 05 Open-Source Evidence Atlas | "What should I inspect before using a repo?" | Evidence-first repo triage workflow | `site/public/reports/projects/`, `work/wiki/sources/github-digest.md`, `CONTENT_INDEX.md` | GitHub, search landing page, HN if framed as a tool |

## Hacker News Fit

HN has two different fits:

- Regular submission: use for a strong report or interactive index, because HN accepts intellectually interesting links when the title is plain and non-promotional.
- Show HN: only use when the submitted object is something readers can try. HN's Show HN page says blog posts, newsletters, lists, and pure reading material are not Show HN because users cannot try them.

Therefore:

- Do not submit the survey as `Show HN: A survey of self-evolving AI`.
- Submit the report/index as a regular link first, for example: `A map of self-evolving AI agents`.
- Use `Show HN` later only if the graph/search/project atlas is positioned as a usable tool: `Show HN: An evidence atlas for self-evolving AI agents`.

## Release Order

1. Publish Slice 03 first if the goal is discussion quality. Evaluation bottlenecks attract serious readers because they expose what current claims cannot prove.
2. Publish Slice 02 first if the goal is GitHub stars. A true-vs-pseudo rubric gives immediate utility to developers browsing repos.
3. Publish Slice 01 only after it links to the deeper slices. Broad introductions perform better when they point to tools, tables, and examples.
4. Publish Slice 04 for engineering communities after adding concrete checklists and failure examples.
5. Publish Slice 05 as the long-term evergreen entry: it should become the page people bookmark.

## Quality Bar

Every public slice must satisfy five tests:

1. **Decision**: It helps the reader choose, reject, compare, or build something.
2. **Evidence**: It names the source layer: raw, paper, project, wiki, benchmark, or pain point.
3. **Compression**: It has a one-sentence thesis, three-sentence summary, and full version.
4. **Counterexample**: It says where the claim fails or is incomplete.
5. **Next action**: It links to a report, project page, search query, or source file.

## HN-Ready Titles

Use plain titles, not marketing titles:

- `A map of self-evolving AI agents`
- `Which AI agents actually self-improve?`
- `The evaluation problem in self-evolving AI agents`
- `Why self-evolving agents break after the demo`
- `An evidence atlas for self-evolving AI projects`

Avoid:

- `The ultimate self-evolving AI survey`
- `We analyzed everything about agent evolution`
- `Show HN: A blog series about self-evolving AI`
- `10 amazing self-evolving AI projects`

## Initial Landing Targets

| Purpose | URL Path |
|---|---|
| Homepage | `https://agent-evolution.com/` |
| Blog series | `https://agent-evolution.com/blog/` |
| Search | `https://agent-evolution.com/search/` |
| Knowledge graph | `https://agent-evolution.com/graph/` |
| Projects | `https://agent-evolution.com/projects/` |
| Reports | `https://agent-evolution.com/reports/` |

## Source Anchors

- Survey corpus statement: `survey/latex/main.tex`
- English paper chapters: `paper-drafts/ch1-intro.tex` through `paper-drafts/ch8-future.tex`
- GitHub project digest: `work/wiki/sources/github-digest.md`
- Paper digest: `work/wiki/sources/papers-digest.md`
- Full project evolution grading: `work/wiki/sources/project-evolution-grading-full.md`
- Social and blog mechanism analysis: `work/wiki/sources/raw-social-blogs-mechanism-analysis.md`
- Existing SEO blog map: `docs/seo/blog-series-keyword-map.md`

