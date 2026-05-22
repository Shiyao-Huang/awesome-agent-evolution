# Paper Review QA Report

**Scope:** `paper-reviews/` completed paper-review artifacts, requested by Master as “审核已完成的review质量”.  
**Reviewer:** Codex Reviewer  
**Audit date:** 2026-05-21  
**Output file:** `survey/review-report.md`

## 1. Verdict

**Conditional pass for exploratory survey drafting; not yet passable as a canonical academic review corpus.** The corpus is broad and useful, but it needs de-duplication, source-trace normalization, timestamp repair, and evidence-grade filtering before it is cited as authoritative survey evidence.

## 2. Audit method and coverage

- Checked repository-local instructions first: no `SYSTEM.md`, `AGENTS.md`, or `wiki/log.md` found at the project root; `wiki/` exists but has no `log.md`.
- Inventoried `paper-reviews/review-*.md` and `paper-reviews/progress-51-88.md`.
- Automated scan signals: file count, arXiv ID extraction, duplicate review groups, word-count outliers, source-trace presence, unresolved placeholder markers, and stale review dates.
- Manual spot-checks: representative full-format reviews, frontmatter-based reviews, bilingual/sparse reviews, placeholder index files, and duplicate groups.

### Corpus metrics

| Metric | Result | QA implication |
|---|---:|---|
| `review-*.md` files | 126 | Includes 2 placeholder/gap-index files, so not all are real reviews. |
| Completed candidate files | 124 | Treat as review candidates, not canonical papers. |
| Unique arXiv IDs detected | 104 | Review files exceed unique paper count because of duplicates. |
| Duplicate arXiv groups | 17 | Canonical selection required before citation. |
| Duplicate files inside those groups | 37 | 20 files are duplicate surplus relative to one-file-per-paper. |
| Short reviews under 800 words | 32 | Several are too thin for “deep review” claims. |
| Files lacking explicit source trace marker | 43 | Evidence chain is incomplete for many older reviews. |
| Files lacking raw excerpt block | 97 | Claim-to-source traceability is weak unless raw file is consulted separately. |
| Files with unresolved/sparse markers | 22 | Must not be treated as final evidence without follow-up. |
| Reviews dated `2025-05-21` | 13 | Stale/inconsistent with current corpus work date `2026-05-21`. |

## 3. Major findings requiring correction

### F1 — Duplicate reviews must be canonicalized before survey citation

**Severity:** High  
**Impact:** Duplicate reviews create inconsistent evidence, conflicting depth, and double-counting risk in survey synthesis.

`paper-reviews/progress-51-88.md:68` already warns: “De-duplicate or choose canonical versions later; do not delete peer-created files without reviewer approval.” That warning is correct and should now become a required cleanup step.

Affected duplicate arXiv groups:

- `2304.03442`: `review-2304.03442-generative-agents-interactive-simulacra-of-human-behavior.md`; `review-2304.03442-generative-agents.md`
- `2401.01335`: `review-2401.01335-self-play-fine-tuning-converts-weak-language-models-to-strong-language.md`; `review-2401.01335-self-play-fine-tuning.md`
- `2405.06682`: four variants (`self-reflection-agents`, `self-reflection-effects`, `self-reflection-in-llm-agents-effects-on-problem-solving-performance`, `self-reflection`)
- `2409.12917`: `review-2409.12917-score.md`; `review-2409.12917-training-language-models-to-self-correct-via-reinforcement-learning.md`
- `2410.01215`: three variants (`from-code-to-correctness`, `hierarchical-debugging`, `mgdebugger`)
- `2411.02337`: `review-2411.02337-webrl-training...md`; `review-2411.02337-webrl.md`
- `2501.01264`, `2501.07278`, `2501.12793`, `2502.00593`, `2502.12110`, `2505.14970`, `2506.04651`, `2506.09046`, `2510.18327`, `2511.06449`, `2512.22716`

**Required fix:** for each group, choose one canonical review or merge the stronger sections into a single canonical file. Keep duplicate files only if renamed as `archive/` or `superseded/` with explicit status.

### F2 — Source trace is inconsistent; many claims are not locally auditable from the review file

**Severity:** High  
**Impact:** Survey chapters may inherit unsupported claims if they cite review prose without checking `raw-papers/`.

Good newer files include `Source Trace` and `Raw excerpt used`, for example `paper-reviews/review-2603.28990-self-organizing-llm-agents.md:99-105`. However, 43 candidate files lack an explicit source trace marker, and 97 lack a raw-excerpt block.

Representative affected files:

- `paper-reviews/review-2303.11366-reflexion.md` — rich analysis but no explicit `Source Trace` / `Raw excerpt used` section.
- `paper-reviews/review-2305.16291-voyager.md` — strong content depth, but no local raw excerpt in the review file.
- `paper-reviews/review-2408.08435-adas.md` — no local source-trace block despite being central to architecture-search discussion.
- `paper-reviews/review-2505.03335-absolute-zero.md` — useful deep review, but no source-trace block and stale review date.
- `paper-reviews/review-2605.19102-prompt-optimization-rl.md` — has concrete metrics but no raw excerpt block; `not explicitly mentioned as open-source` should be source-verified.

**Required fix:** add a standard evidence footer to every canonical file:

```md
## Source Trace
- Local raw file: `raw-papers/<id>.md`
- Paper URL/PDF: ...
- Evidence status: full-pdf | local-summary | sparse-or-placeholder
- Raw excerpts used: ...
- Claims needing verification: ...
```

### F3 — Sparse placeholder reviews are mixed with completed reviews

**Severity:** High  
**Impact:** Placeholder artifacts can create false coverage if consumed by scripts or survey writers as real reviews.

Specific locations:

- `paper-reviews/review-placeholder-no-arxiv-placeholder-no-arxiv-gap-index.md:1-14` is explicitly a placeholder index.
- `paper-reviews/review-placeholder-no-arxiv-placeholder-no-arxiv-gap-index.md:43` correctly states that placeholder creates false coverage if treated as a reviewed paper.
- `paper-reviews/progress-51-88.md:29-62` lists pending source rows #55, #56, #60, #64, #78, #79, #86, #88.
- `paper-reviews/progress-51-88.md:67` says those entries should be filled only after source documents are collected.

Also sparse real-paper reviews need verification before final use:

- `paper-reviews/review-2509.25541-vision-zero-vlm-self-play.md:7` uses `Authors: (See arXiv page)` and `:14` marks `Evidence status: sparse-or-placeholder`.
- `paper-reviews/review-2511.06449-flex-forward-learning-from-experience.md:7` uses `Authors: (See arXiv page)` and `:14` marks sparse status.
- `paper-reviews/review-2512.22716-memento-ii-stateful-reflective-memory.md:7` uses `Authors: (See arXiv page)` and `:14` marks sparse status.
- `paper-reviews/review-2502.12110-a-mem-agentic-memory.md:7` uses `Authors: (See arXiv page)` and `:14` marks sparse status.

**Required fix:** move placeholder/gap-index files out of the main review glob or add machine-readable `review_status: gap-control` / `review_status: sparse` so downstream survey generation can exclude them.

### F4 — Format and heading schema are inconsistent across batches

**Severity:** Medium-High  
**Impact:** Inconsistent headings make automated synthesis brittle and cause uneven chapter evidence.

Observed templates:

1. Older full reviews use headings such as `## Summary`, `## Method Analysis`, `## Contributions`, `## Limitations`, `## Reproducibility`, `## Impact Assessment`, `## Key Takeaways`.
2. Frontmatter batch reviews use `## Bibliographic Context`, `## Paper Summary`, `## Core Method and Contribution`, `## Technical Innovation Analysis`, `## Critical Limitations`, `## Cross-Validation Against Mom Test Community Evidence`, `## Review Verdict`.
3. Sparse bilingual reviews use numbered bilingual headings such as `## 1. Executive Summary / 执行摘要`, `## 7. Source Trace / 来源追踪`.

Representative exact locations:

- `paper-reviews/review-2303.17651-self-refine-iterative-refinement-with-self-feedback.md:1-11` uses YAML frontmatter and a different heading schema from older reviews.
- `paper-reviews/review-2603.28990-self-organizing-llm-agents.md:18-105` uses numbered sections and source trace.
- `paper-reviews/review-2303.11366-reflexion.md` uses the older full-review schema and no frontmatter.

**Required fix:** define a canonical review schema and normalize canonical files to it. Do not require all prose to be identical, but require stable metadata keys and stable top-level sections.

### F5 — Temporal metadata has unknown/stale values

**Severity:** Medium  
**Impact:** The survey’s time-slice analysis can be wrong if review metadata disagrees with raw-paper timestamps.

Known examples:

- `paper-reviews/review-2402.18381-large-language-models-as-evolution-strategies-arxiv-id-2402-18381-url.md:5` has `content_timestamp: unknown`; `:7` has `time_slice: unknown`.
- `paper-reviews/review-2409.12147-magicore-multi-agent-iterative-coarse-to-fine-refinement-for-reasoning.md:5` and `:7` are unknown.
- `paper-reviews/review-2409.14051-groupdebate-enhancing-the-efficiency-of-multi-agent-debate-using-group.md:5` and `:7` are unknown.
- `paper-reviews/review-2411.02337-webrl-training-llm-web-agents-via-self-evolving-online-curriculum-rein.md:5` and `:7` are unknown, while `:13` embeds a derived timestamp inside the raw text, causing internal inconsistency.
- `paper-reviews/review-2502.12110-a-mem-agentic-memory-for-llm-agents-arxiv-id-2502-12110-url-https-arxi.md:5` and `:7` are unknown, while `:13` embeds derived timestamp data.
- `paper-reviews/review-2505.18646-sew-self-evolving-agentic-workflows-for-automated-code-generation-arxi.md:5` and `:7` are unknown.

Stale review-date examples include old reviews dated `2025-05-21` although this corpus pass is dated `2026-05-21`, e.g. `review-2303.11366-reflexion.md`, `review-2305.16291-voyager.md`, `review-2505.03335-absolute-zero.md`, `review-2508.04700-seagent.md`, `review-2508.07407-self-evolving-agents-survey.md`, `review-2508.19005-ell-framework.md`, `review-2509.22502-infiagent.md`, `review-2510.07841-test-time-self-improvement.md`, `review-2511.10395-agentevolver.md`.

**Required fix:** backfill `content_timestamp`, `time_slice`, `timestamp_confidence`, and `timestamp_source` from `raw-papers/` for all canonical reviews; distinguish `review_created_at` from `review_updated_at`.

### F6 — Some files contain raw-record injection inside prose

**Severity:** Medium  
**Impact:** Formatting is readable but academically awkward; citation strings and metadata are embedded as sentences.

Specific example:

- `paper-reviews/review-2411.02337-webrl-training-llm-web-agents-via-self-evolving-online-curriculum-rein.md:13` places the title, arXiv ID, URL, PDF, authors, abstract, and temporal metadata into one heading/prose line.
- The same injected raw record reappears in the related-work sentence at `paper-reviews/review-2411.02337-webrl-training-llm-web-agents-via-self-evolving-online-curriculum-rein.md:56`.
- Similar pattern appears in `paper-reviews/review-2502.12110-a-mem-agentic-memory-for-llm-agents-arxiv-id-2502-12110-url-https-arxi.md:13` and `:56`.

**Required fix:** split raw-record strings into metadata fields and prose; do not embed full metadata blobs inside analytic paragraphs.

### F7 — Several short reviews are too thin for “Deep Review” status

**Severity:** Medium  
**Impact:** They can support a catalog/index but not a rigorous survey claim without PDF/raw verification.

Short review examples under 600 words:

- `paper-reviews/review-2511.06449-flex-forward-learning-from-experience.md` — 432 words; sparse author field; source excerpt only.
- `paper-reviews/review-2512.22716-memento-ii-stateful-reflective-memory.md` — 435 words; sparse author field; source excerpt only.
- `paper-reviews/review-2509.25541-vision-zero-vlm-self-play.md` — 466 words; sparse author field; source excerpt only.
- `paper-reviews/review-2502.12110-a-mem-agentic-memory.md` — 481 words; sparse author field; sparse evidence status.
- `paper-reviews/review-2405.06682-self-reflection-agents.md` — 539 words.
- `paper-reviews/review-2410.01215-hierarchical-debugging.md` — 552 words.
- `paper-reviews/review-2501.01264-progco.md` — 572 words.
- `paper-reviews/review-2508.09586-evocurr.md` — 580 words.

**Required fix:** downgrade these to `brief-review` or expand them with full bibliographic metadata, method detail, evaluation table, limitations, and source trace.

## 4. Academic rigor assessment

### Strengths

- Coverage is broad: the corpus now captures many key self-evolution, reflection, memory, reward, and multi-agent works.
- Many full reviews contain useful critical analysis rather than mere summaries.
- Newer files increasingly include raw file references, bilingual headings, evidence status, and platform implications.
- `progress-51-88.md` transparently records pending source gaps and duplicate-preservation policy.

### Weaknesses

- Claim-level evidence is uneven: older reviews often present precise benchmark numbers without a local raw excerpt or source footer.
- Some sparse reviews rely on raw summaries rather than full PDF verification.
- Duplicate versions vary in depth and may contradict or over/under-emphasize a paper’s contribution.
- Metadata consistency is not yet strong enough for automated bibliography generation or timeline charts.

## 5. Format consistency assessment

Current state is usable by humans but brittle for automated synthesis. Required stable fields:

```yaml
review_id:
arxiv_id:
title:
authors:
published_at:
content_timestamp:
collected_at:
time_slice:
timestamp_confidence:
source_file:
evidence_status: full-pdf | local-summary | sparse-or-placeholder | gap-control
review_status: canonical | duplicate | superseded | brief | gap-control
method_category:
```

Required stable top-level sections:

1. Bibliographic Context
2. Summary
3. Method / System Analysis
4. Evaluation Evidence
5. Contributions
6. Limitations and Failure Modes
7. Relation to Prior Work
8. Reproducibility
9. Relevance to Agent Self-Evolution
10. Source Trace
11. Key Takeaways

## 6. Content completeness assessment

The corpus is strong for method coverage but incomplete for final academic synthesis until these gaps are closed:

- Pending source rows in `progress-51-88.md:29-62`: MAR, MetaReflection, LeDex, TTCS, Self-Rewarding PPO, Process-based Self-Rewarding, MARS, Survey: LLMs for EC.
- Sparse author/source metadata in VLM/memory/FLEX/Memento-II files listed in F3.
- Duplicate review groups need canonical merge before chapter writers decide “one paper = one evidence node”.
- Reproducibility fields should be normalized: code availability, benchmark availability, model/API dependence, data contamination risk, and cost.

## 7. Language and terminology assessment

Language quality is generally readable English, but terminology consistency needs repair:

- Use one term for the field: “agent self-evolution” or “self-evolving agents”; avoid alternating with “agent evolution” unless scoped.
- Use one taxonomy vocabulary: feedback/refinement, memory evolution, reward/self-reward, curriculum/task generation, architecture/search, multi-agent/self-organization, tool/code evolution.
- Avoid promotional adjectives unless supported by evidence: “landmark”, “definitive”, “paradigm-shifting”, “strong” should be tied to concrete evidence or softened.
- Bilingual files are useful for Chinese survey drafting, but canonical review files should either be consistently bilingual or consistently English with Chinese synthesis moved to survey chapters.

## 8. Recommended remediation plan

### Priority 0 — Protect downstream survey quality

- Exclude files with `placeholder`, `gap-control`, or `sparse-or-placeholder` from canonical citation unless explicitly labeled as “pending verification”.
- Stop counting review files as paper coverage; count unique canonical `arxiv_id` instead.

### Priority 1 — Canonicalization pass

- Resolve the 17 duplicate groups listed in F1.
- Add `review_status` to every review.
- Preserve noncanonical files under `paper-reviews/archive/` or mark them `superseded_by:`.

### Priority 2 — Evidence trace pass

- Add `Source Trace` to the 43 files missing it.
- Add `Raw excerpt used` or `Evidence checked against:` to canonical files.
- Mark exact claims needing PDF verification.

### Priority 3 — Metadata/timestamp pass

- Repair `content_timestamp: unknown` and `time_slice: unknown` from raw files or arXiv ID fallback.
- Split `review_created_at` and `review_updated_at` to avoid stale `2025-05-21` confusion.

### Priority 4 — Style/schema normalization

- Normalize headings and YAML metadata.
- Convert sparse files to either `brief` status or full reviews.
- Remove raw-record injection from prose.

## 9. Final QA decision

**Decision:** Do not block current survey drafting, but block final survey/bibliography freeze until canonicalization and evidence-trace fixes are complete.

**Minimum acceptance before final freeze:**

- [ ] One canonical review per unique paper.
- [ ] Placeholder/gap-control files excluded from completed-review counts.
- [ ] Every canonical review has `source_file`, `evidence_status`, `review_status`, and `Source Trace`.
- [ ] Sparse reviews are either expanded or labeled as brief/pending.
- [ ] Unknown timestamps and stale review dates are repaired or explicitly explained.
- [ ] Survey chapters cite canonical review IDs, not duplicate filenames.

---

# Focused QA Addendum — First 25 Completed Academic/Paper Reviews

**Trigger:** Master direct instruction on 2026-05-22: Reviewer to audit the completed 25 review set immediately, without waiting for board task.  
**Scope interpretation:** the local “25 completed reviews” set maps most clearly to `academic-reviews/index-first-30.md` rows #1-#25 and their corresponding early `paper-reviews/` topics. This addendum focuses on those 25 files because they are the explicit numbered review set; findings also apply to the duplicate early `paper-reviews/` artifacts where the same arXiv IDs recur.

## A. Focused verdict

**Status: not publication-ready; usable only as preliminary extraction notes.** The 25-review set has consistent section scaffolding, but it is heavily templated, lacks claim-level source trace, includes duplicate hyphen/dot arXiv records, and contains unknown metadata in 13/25 files. It should not be cited as “high-quality academic review” until canonicalization and evidence enrichment are done.

## B. Focused scan metrics

| Check | Result | Meaning |
|---|---:|---|
| Files audited | 25 | `academic-reviews/01-*` through `25-*` |
| Files under 800 words | 13/25 | Many are short and generic. |
| Files containing `unknown` metadata | 13/25 | Mostly hyphen-ID duplicates with missing dates/authors. |
| Files with explicit source trace section | 0/25 | URL exists, but no auditable source excerpt/provenance block. |
| Files with raw excerpt block | 0/25 | Claims cannot be verified in-file. |
| Placeholder/TODO markers | 0/25 | No obvious TODOs, but absence of TODO does not mean evidence-complete. |
| Word-count range | 764–979 | Uniform length suggests template generation rather than paper-specific depth. |

## C. Specific quality problems

### C1 — Duplicate hyphen/dot arXiv IDs create false coverage

`academic-reviews/index-first-30.md` includes both hyphen and dot versions of the same paper IDs, e.g. `2203-14465` and `2203.14465`, `2303-11366` and `2303.11366`, `2303-17651` and `2303.17651`, `2304-03442` and `2304.03442`, etc. Rows #1, #3, #4, #7, #9, #10, #13, #15, #17, #19, #20, #21, and #25 show `unknown` timestamps because the hyphen records are treated as separate records rather than normalized arXiv IDs.

Concrete locations:
- `academic-reviews/index-first-30.md:9` and `:10` represent duplicate STaR records.
- `academic-reviews/index-first-30.md:11` and `:13` represent duplicate Reflexion records.
- `academic-reviews/index-first-30.md:12` and `:14` represent duplicate Self-Refine records.
- `academic-reviews/index-first-30.md:33` lists Agent-Pro as `2402-17574` with unknown timestamp despite a normalized raw-paper version existing elsewhere.

**Fix:** normalize all arXiv IDs to dotted format before counting coverage; mark hyphen-ID reviews as duplicates/superseded, not separate papers.

### C2 — 13/25 reviews have missing bibliographic metadata

Example locations:
- `academic-reviews/01-2203-14465-review.md:6` has `content_timestamp: unknown`; `:8` has `time_slice: unknown`; `:18-19` list authors and published date as unknown.
- `academic-reviews/25-2402-17574-review.md:6` has `content_timestamp: unknown`; `:8` has `time_slice: unknown`; `:18-19` list authors and published date as unknown.

This is now especially stale because the separate raw-papers timestamp work reports 175/175 raw-paper files passing timestamp validation. The review layer should inherit that cleaned metadata instead of keeping `unknown`.

**Fix:** backfill review metadata from normalized `raw-papers/*.md`; use `review_created_at`/`review_updated_at` separately from paper publication date.

### C3 — All 25 lack claim-level source trace and raw excerpts

Each reviewed file has a `Source` URL line (e.g. `academic-reviews/02-2203.14465-review.md:21`), but none of the 25 has a `Source Trace`, `Raw excerpt used`, or `Evidence checked against` block. This makes the reviews hard to audit and weakens the survey’s academic rigor.

**Fix:** add a footer to every canonical review:

```md
## Source Trace
- Raw paper file: `raw-papers/<id>.md`
- arXiv URL/PDF: ...
- Evidence status: full-pdf | local-summary | sparse
- Key excerpts checked: ...
- Claims still needing verification: ...
```

### C4 — Review prose is too generic for many files

The 25-review set uses repeated boilerplate such as “This paper contributes to the broader area of agent self-improvement and evolution” and generic comparisons to Reflexion/Self-Refine/memory/RL families. Stronger files include extracted paper-specific bullets, but the analysis framing remains largely template-driven.

Example contrast:
- `academic-reviews/01-2203-14465-review.md:23-65` is mostly generic because the raw metadata is unknown.
- `academic-reviews/02-2203.14465-review.md:29-40` contains paper-specific STaR signals and is therefore more useful.

**Fix:** require at least one paper-specific method paragraph, one evaluation paragraph with metrics/tasks, one limitation grounded in the paper, and one source excerpt for every canonical review.

### C5 — The first-25 set should be downgraded unless enriched

Given the current evidence, these 25 files are better labeled as `preliminary-review` or `extraction-note`, not `academic-review`. The stronger `paper-reviews/` deep reviews can remain canonical only after duplicate groups are resolved and source trace is added.

## D. File-level action table

| Priority | Files / rows | Required action |
|---|---|---|
| P0 | `academic-reviews/index-first-30.md` rows #1-#25 | Normalize hyphen IDs to dotted arXiv IDs and remove duplicate coverage counts. |
| P0 | `academic-reviews/01`, `03`, `04`, `07`, `09`, `10`, `13`, `15`, `17`, `19`, `20`, `21`, `25` | Backfill authors, publication date, `content_timestamp`, and `time_slice`. |
| P1 | all 25 files | Add `Source Trace` + raw excerpt/evidence status. |
| P1 | all 25 files | Add `review_status: canonical | duplicate | preliminary | superseded`. |
| P2 | short/generic files under 800 words | Expand or downgrade to preliminary extraction notes. |
| P2 | corresponding early `paper-reviews/` duplicates | Pick canonical version per normalized arXiv ID. |

## E. Reviewer decision for the 25-review set

**Decision:** fail final-quality bar; conditional pass only as a rough orientation layer.

Minimum bar before reuse in final survey chapters:

- [ ] Normalize IDs and remove duplicate counting.
- [ ] Backfill all unknown metadata from cleaned `raw-papers`.
- [ ] Add source trace/raw excerpts to canonical reviews.
- [ ] Label review status and evidence status explicitly.
- [ ] Replace boilerplate with paper-specific method/evaluation/limitation evidence.
