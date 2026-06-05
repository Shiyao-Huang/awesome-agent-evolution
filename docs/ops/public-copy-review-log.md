# Public Copy Review Log

> Owner layer: ops. This file records public-copy review conclusions, quality gates, remaining risks, and follow-up edit queues. It is not public reader copy.

## 2026-06-05 Review Gate Baseline

### One-Sentence Verdict

Core entry pages are no longer in a P0/P1 misleading-copy state, but the full public website is not quality-complete until long-tail pages, generated metadata, and bilingual mirrors pass the same gate.

### Three-Sentence Verdict

1. The first repair wave fixed the most dangerous reader-facing problem: public pages were drifting from evidence guides into ranking/index claims that looked stronger than the evidence.
2. Reader/editor review pressure converged on Mom Test clarity, next-step guidance, count consistency, and readable bilingual entry points; academic review pressure converged on claim strength, benchmark scope, star/adoption signal boundaries, and survey-draft limitations.
3. The project does not currently need a visual redesign, but it does need a content-governance overhaul across the long tail: blog/topic/project/SEO/generated copy must be reviewed as knowledge pages, not as automatically produced web pages.

### Review Coverage Recorded

| Channel | Coverage This Wave | Main Judgment |
|---|---|---|
| Reader/editor agents | Core README/site entry copy reviewed for Mom Test clarity, evidence path, count consistency, and bilingual entry. | Pass for the core entry wave after fixes; not a pass for all long-tail pages. |
| Academic agents | Core EAI, star/rank, paper, benchmark, and survey claims reviewed for terminology, evidence chain, limitations, and claim strength. | P1 issues were found and fixed; long-tail generated claims remain a review queue. |
| Browser/SEO verification | Homepage, paper page, EAI page, and evaluation blog checked at desktop and 390px mobile; SEO audit passed after fixes. | Core checked pages render without horizontal overflow or console errors. |

### Fixed In The Previous Repair Wave

| Area | Prior Risk | Current State |
|---|---|---|
| Evolve-AGI Index | Could be read as a field index or AGI score. | Reframed as an evidence worksheet; main benchmark family separated from adjacent MPA/MIRA evidence. |
| Star/rank pages | Star and heuristic scores could be read as project quality or academic value rankings. | Reframed as visibility signals, adoption priors, evidence queues, and review candidates. |
| Paper page | Survey page overclaimed as a comprehensive finished survey. | Reframed as a working survey draft with remaining evidence audit/source cleanup. |
| Counts | README/site counts used inconsistent denominators. | Counts aligned to the latest generated master index and public corpus stats. |
| Mobile paper page | Paper page had horizontal overflow on small screens. | Responsive table/radar layout fixed and browser-verified. |
| Blog evaluation copy | `Star quality` wording leaked into public blog copy. | Rewritten as `Star visibility signals` and evidence triage. |

### Not Yet Quality-Complete

| Queue | Why It Matters | Required Action |
|---|---|---|
| Long-tail blog/topic pages | SEO pages can still be readable in isolation but weak as a knowledge path. | Batch review for one-sentence/three-sentence/five-sentence structure, reader question, evidence link, and bilingual boundary. |
| Generated project/report summaries | Generated descriptions may repeat strong words such as quality, ranking, best, reliable, or maturity without review context. | Rewrite templates or source summaries so generated pages inherit conservative wording. |
| Project model cards | Many project pages may still be link summaries rather than teaching artifacts. | Enforce model-card teaching sections: problem, mechanism, evidence, limitation, fit, self-evolution relation. |
| English mirrors | English entry exists, but not every public path is a full same-evidence-chain mirror. | Track which pages are full mirrors, summary mirrors, or Chinese-first pages with explicit English entry limits. |
| Review artifacts | Prior review findings existed in the working session but were not persistently queryable. | Keep this log updated and add batch-level findings before claiming quality completion. |

### Does This Require A Major Rewrite?

| Scope | Verdict | Rationale |
|---|---|---|
| Visual/design system | No major rewrite now. | The current editorial style remains within the style lock, and the problem is copy logic rather than visual skin. |
| Core entry pages | No full rewrite now. | README, homepage, paper, EAI, rank/star/value pages have had the strongest misleading claims corrected. |
| Whole public content system | Yes, content-governance overhaul required. | The project still contains many generated or long-tail public pages whose logic, bilingual status, and claim strength are not proven by review. |

### Next Required Edit Batches

1. **Batch A — public strong-claim scan:** scan `README*.md`, `site/src/pages`, `site/src/content`, `site/src/data/*.ts`, and `docs/seo` for ranking/quality/reliability/superlative wording; downgrade unsupported claims. First fix wave completed for obvious public-page hits; generated-data hits remain queued for template/source-level review.
2. **Batch B — bilingual route audit:** mark pages as `full mirror`, `summary mirror`, or `Chinese-first with English entry`; do not imply global bilingual completion where it is missing.
3. **Batch C — project model-card template audit:** sample project reports and generated site project pages; convert shallow summaries into teaching model-card shape.
4. **Batch D — review evidence persistence:** after each batch, record reader/editor findings, academic findings, edits made, validation commands, and residual risks here.

### Release Claim Rule

No agent may say "public copy quality is complete" for the whole site until every public surface has a recorded batch verdict and all P0/P1 findings are fixed. It is acceptable to say "core entry wave passed after fixes" only for the scoped pages that were actually reviewed and verified.

## 2026-06-05 Batch A Findings And Fixes

### Reader/Editor Findings

| Priority | Finding | Action |
|---|---|---|
| P1 | Several long-tail pages used unsupported superlatives such as `最强`, `最佳`, `最值得`, `终极`, and `指数级`, which made evidence guides read like promotional copy. | Downgraded high-risk wording in blog, topic, and survey pages to evidence-bounded phrasing. |
| P1 | Public pages sometimes told readers about internal maintenance, build, ops, or agent workflow boundaries instead of explaining the evidence boundary directly. | Rewrote public boundary copy to focus on what readers can verify. |
| P2 | The five-loop blog used a reflection example that looked like an internal tool-call log. | Reframed it as a corpus-level research/coding memory example without leaking local operation details. |
| P2 | The open-source project roundup used old counts and ranking-like language. | Updated counts to 678 raw GitHub captures and 286 project/model-card analyses; reframed the article as an entry route, not a quality ranking. |

### Academic Findings

| Priority | Finding | Action |
|---|---|---|
| P1 | `strongest/best` phrasing implied a comparative academic claim without controlled evidence. | Replaced with `more reliable`, `evidence concentrated`, `clear`, or limitation-bearing phrasing. |
| P1 | Survey case-study copy overclaimed code, memory, and real-world environments as universal laws. | Added constraints: tests, rollback, migration checks, stale-memory risk, benchmark limitations. |
| P2 | LLaMEA and population-loop wording could be read as stronger than the cited examples support. | Rewrote as mechanism interpretation with benchmark/reproduction boundaries. |

### Residual Queue

Generated source data such as `site/src/data/generatedKnowledgeGraph.ts` and `site/src/data/projects.ts` still contains public-facing claim fragments inherited from raw/project metadata. These should be handled through generated-copy templates or source-summary normalization, not one-off hand edits to generated files.

## 2026-06-05 Batch C Template Findings, Review Failures, And Fixes

### Reader/Editor Findings

| Priority | Finding | Action |
|---|---|---|
| P1 | Project detail pages displayed `Verified evidence path`, which readers could interpret as quality certification or local reproduction. | Replaced the visible status with `Source-traceable snapshot`, `Evidence candidate`, or `Verification pending`, and added a bilingual reading boundary before the model card. |
| P1 | Project report HTML pages explained themselves as `Indexable asset`, which is internal SEO/ops language rather than reader value. | Rewrote the report template around evidence snapshots, source trails, and explicit non-ranking/non-endorsement boundaries. |
| P1 | Project report links still pointed at `.md` routes from project pages and the project index. | Updated report links to the canonical HTML route `/reports/projects/<slug>/`. |
| P2 | Project index ranks were visually shown as `#001`, encouraging a quality-ranking read. | Reframed the sequence as adoption-prior order and added a visible caveat that cumulative Star is historical visibility, not quality or academic value. |

### Academic Findings

| Priority | Finding | Action |
|---|---|---|
| P1 | Value LSH region labels such as `最先进` and `最高质量` implied final comparative claims from heuristic scores. | Reframed them as `前沿证据`, `高关注证据`, and `证据密度`, preserving triage utility without claiming final quality. |
| P2 | Cluster descriptions could still sound like a settled "best path." | Rewrote affected meanings as candidate paths, evidence-dense zones, and review prompts rather than final judgments. |

### Residual Queue

Initial template changes reduced propagation risk, but the six-agent follow-up review did **not** pass Batch C. It does not certify every generated project report body; long-tail report bodies still need sampling, rewrite/strengthen/demotion decisions, and per-batch reader/editor plus academic review before the whole public site can be called quality-complete.

### Six-Agent Follow-Up Verdict

| Channel | Verdict | Blocking Findings | Follow-Up Fix |
|---|---|---|---|
| Reader/editor 1 | Fail | Value LSH report links still opened raw `.md`; visible `High value/value/quality` labels pulled the page back toward value ranking. | Normalized report links to `/reports/projects/<slug>/`; changed visible labels to priority review, triage score, and evidence density. |
| Reader/editor 2 | Fail | Report lead extracted legacy body before the boundary; report bodies still exposed legacy/internal sections; model cards remained template-like. | Replaced report lead with conservative evidence-summary extraction; added legacy-body warning before `<Content />`; status-gated project model-card copy. |
| Reader/editor 3 | Fail | Project, report, and Value LSH pages lacked enough English same-evidence summary, and `/projects/` split Chinese understanding from English search. | Added compact English evidence-path summaries and rewrote `/projects/` lead to say Chinese/English point to the same evidence chain. |
| Academic 1 | Fail | `quality/value/high value` semantics remained visible; project details overclaimed importance/teaching value for candidate or pending projects. | Reframed Value LSH public labels; changed project detail role/teaching copy by `verified/candidate/pending` status. |
| Academic 2 | Fail | Unreviewed project reports were indexable without a strong enough reader boundary, while the SEO goal requires text/report assets to remain crawlable. | Kept generated project reports indexable and in sitemap, but added stronger bilingual evidence-boundary copy and changed the SEO audit to fail any accidental `noindex`. |
| Academic 3 | Fail | MetaGPT, SWE-bench, Aider, EverOS, and related reports still contained strong claims without dated/source-limited evidence. | Downgraded sampled strong claims to versioned review cues; remaining report bodies stay in the indexable rewrite/review queue. |

### Current Batch C Status

Batch C is **not passed**. The current state is safer than before because generated project reports now expose clearer bilingual evidence boundaries while remaining indexable SEO assets, but project reports and model-card bodies still require a later per-report rewrite/review campaign before they can be called quality-complete public knowledge pages.

## 2026-06-05 Agent Review Conclusions

### Does This Need Major Revision?

Yes, but not a visual/design-system rewrite. The required major revision is academic and editorial governance for core public surfaces: paper, Evolve-AGI, survey, retrospective, generated graph, and early blog entries. README and the homepage remain structurally usable after the earlier repair wave, but they still need later compression and terminology smoothing.

### P0/P1 Findings Accepted

| Area | Accepted Severity | Required Fix |
|---|---|---|
| Paper page | P1/P0 depending on reviewer | Replace fake coverage percentages with dated corpus status; move release-gate language into reader-facing version status; mark framework scores as `[INFERRED]`; downgrade bilingual schema claim. |
| Evolve-AGI page | P1 | Reframe large score, rank, rough score, and priority as worksheet/triage signals rather than ranking. |
| Survey pages/data | P1 | Stop calling public discussion analysis "interviews"; downgrade "every conclusion has evidence chain"; add snapshot and limitation language. |
| Retrospective | P0 | Remove from homepage reader path, mark noindex, and rewrite internal ops/tool language as research-method lessons. |
| Generated knowledge graph | P0 | Fix the generator's arXiv/title/url extraction and regenerate; do not hand-edit generated data. |
| Early blogs | P1/P2 | Downgrade promotional or universal claims and remove internal workflow language from public articles. |

### P2/P3 Deferred Queue

README compression, full English mirrors for every public path, project-card verification-level taxonomy, and site-wide template treatment of `verified` project status remain open. These are real quality tasks, but the current commit focuses on P0/P1 public-copy risks found by the review agents.
