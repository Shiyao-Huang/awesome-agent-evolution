# arXiv Peer Review — Clarity & Presentation Perspective

**Paper**: Self-Evolving AI Agents: A Survey of Feedback-Driven Generation, Evaluation, Memory, and Self-Modification
**Reviewer**: Reviewer: Clarity & Presentation (QA Engineer)
**Scope**: `paper-drafts/main.tex` (all 8 chapters), `README.md`, `survey/`
**Date**: 2026-05-25

---

## Summary

This is an ambitious, well-structured survey of AI self-evolving agents covering 8 full chapters with formal definitions, method taxonomy, benchmark analysis, user pain points, and future directions. The writing quality is generally high — Ch.1 (Introduction) and Ch.5 (Evaluation) are particularly well-crafted. However, the paper suffers from **structural imbalance** (Ch.1 is disproportionately long), **inconsistent notation** across chapters, **readability barriers** for non-experts, and a **README that conflates repository documentation with survey presentation**. The paper would benefit from aggressive section compression, visual aid additions, and a clearer separation between definitional content and narrative flow.

---

## Clarity Issues

### P0 — Critical (Blocks comprehension)

1. **Ch.1 length overwhelms the paper structure.** The Introduction is approximately 28K tokens, making it longer than most individual method chapters. The formal definition (Sec 1.2) is excellent but buried inside a narrative that reads more like a mini-survey than an introduction.
   - **Fix**: Split into Introduction (scope, thesis, contributions, paper structure — approximately 6 pages) and move formal background to Ch.2 or a dedicated "Foundations" chapter.

2. **Mathematical notation is introduced but never consolidated.** The system formalism $S_t = (\mathcal{C}_t, \mathcal{M}_t, \mathcal{E}, \mathcal{U}, \mathcal{G})$ appears in Ch.1, then Ch.3 uses a different abstraction $\theta_{t+1}, m_{t+1}, y_{t+1} = \mathcal{U}(\ldots)$. A reader cannot easily map between these formalisms.
   - **Fix**: Add a "Notation Table" after the formal definition in Ch.1, and cross-reference when alternative formulations are introduced.

3. **The 8-level taxonomy of self-evolution (Ch.1 Sec 1.2, items 1–8) is never visually represented.** This is arguably the paper's most important conceptual contribution, yet it exists only as a numbered list. A figure (e.g., a layered pyramid or nested boxes diagram) would make this immediately graspable.
   - **Fix**: Add a figure showing the 8 levels from "Output-level" (bottom, lightest) to "Population-level" (top, strongest), with example systems annotated at each level.

### P1 — High (Degrades readability)

4. **Abstract is dense but not self-contained.** The abstract mentions "five evolution loops" without listing them. A reader scanning the abstract cannot understand the core framework without reading further.
   - **Fix**: Add one sentence enumerating the five loops explicitly in the abstract.

5. **Chapter transitions are abrupt.** Ch.3 (Methods) → Ch.4 (Evolutionary) → Ch.5 (Evaluation) flow naturally, but Ch.2 (Taxonomy) → Ch.3 has no bridge. The reader doesn't understand why taxonomy needs its own chapter before methods.
   - **Fix**: Add 2–3 sentence transition paragraphs at chapter boundaries.

6. **Algorithm environments are non-standard.** The paper uses a custom `\begin{algorithm}` mapped to `\begin{figure}` with `\begin{enumerate}` as `algorithmic`. This means algorithms render as figures without proper algorithm formatting — no line numbering, no block structure. In a 40+ page survey, this makes algorithms harder to follow.
   - **Fix**: Use the `algorithm2e` or `algorithmicx` package properly, or at minimum add horizontal rules to separate Input/Output/Body sections.

7. **Table density is high but figure density is low.** The paper contains approximately 15+ tables but very few figures. For a survey paper targeting readability, a ratio of roughly 1:1 is standard. Key missing figures:
   - Method taxonomy visualization (mentioned above)
   - Five evolution loops diagram
   - Timeline of key papers/systems (2022–2026)
   - Benchmark comparison radar chart
   - Pain point severity heat map

8. **Citation style uses inline numbers but key claims lack specific citations.** E.g., Ch.8 states "The local ecosystem analysis found that evaluation repositories are one of the largest visible clusters" — this needs a citation to the specific analysis, not a vague self-reference.

### P2 — Medium (Polish issues)

9. **Ch.7 (Pain Points) uses custom severity macros which is good, but the severity scale definition appears twice** (once in the methodology section and once as Table). Consolidate.

10. **Some paragraphs exceed 15 lines without internal structure.** E.g., Ch.1 Sec 1.1.4 ("The LLM revolution as an enabler") is a wall of text. Break into shorter paragraphs with topic sentences.

11. **Inconsistent use of em-dash vs. parenthetical.** Some sections use em-dashes heavily ("--including prompts, memories, tools--"), while others use parentheticals. Pick one convention and apply consistently.

12. **The citation format is bare** (`Reflexion \cite{reflexion2023}`) with no author name integration. Academic convention is to integrate: "Shinn et al. \cite{reflexion2023}" rather than "Reflexion \cite{reflexion2023}". Current style works but reads more like a technical report than an academic paper.

---

## Structural Suggestions

1. **Rebalance chapter lengths.** Current approximate structure: Ch.1 (28K tok) >> Ch.3 (26K) > Ch.5 > Ch.7 > others. A survey paper should have roughly balanced chapters. Ch.1 should be compressed to approximately 40% of its current size.

2. **Add a "Paper Guide" section at the start.** After the abstract, add a box or paragraph: "This survey is organized as follows. Readers interested in [X] should focus on [Y]." Currently, Sec 1.5 provides this, but it's buried 15 pages in.

3. **Merge or justify Ch.2 (Taxonomy).** The taxonomy chapter appears to overlap significantly with Ch.1's formal definition and Ch.3's method categories. If Ch.2 adds theoretical depth beyond Ch.1, make this explicit. If not, merge into Ch.1 or Ch.3.

4. **Ch.7 (Pain Points) reads more like a standalone report than a survey chapter.** The Mom Test methodology section is detailed enough to be its own paper. In the survey context, it should be compressed to the key findings and severity framework, with the methodology moved to an appendix.

5. **Appendix should include**: full benchmark tables, Mom Test methodology details, complete paper review summaries, and the full project list (currently in README only).

---

## Presentation Improvements

1. **Add visual summaries.** Every chapter should have at least one figure or visual summary table. Currently Ch.3 and Ch.5 have good tables; Ch.2, Ch.4, and Ch.6 are text-heavy.

2. **Use `\paragraph{}` or `\subsubsection{}` more consistently.** Ch.7 uses `\paragraph{}` extensively, which is good for scanability. Ch.3 and Ch.5 should follow this pattern.

3. **Cross-reference between paper and README.** The README is impressive as a project document, but it is NOT an academic paper supplement. The README's layered compression ("one sentence / three sentences / five sentences") is excellent — consider applying this technique within the paper itself (e.g., each chapter starts with a 1–3 sentence "Chapter Takeaway" box).

4. **README-specific: Restructure layered headers for English readers.** The English README should replace "一句话/三句话/五句话" with "Summary / Key Points / Full Overview" to match international academic conventions.

5. **README-specific: Length management.** The README is now approximately 400+ lines. Consider splitting: keep the cognitive structure (classification, methods, benchmarks, evidence) in README, and move the full project lists and raw evidence links to a separate `SURVEY-GUIDE.md`.

6. **Typographic consistency in README:** Some tables use Chinese headers mixed with English data. For the English README (README-EN.md), all headers should be in English.

---

## Questions for Authors

1. **What is the target audience?** The paper reads like it targets both ML researchers and software engineers. The formal definitions suggest an academic audience, but the writing style (especially Ch.7) is more practitioner-oriented. Clarifying this would help calibrate depth vs. breadth.

2. **How does this survey compare to concurrent work?** The paper should include an explicit positioning paragraph: "Compared to [concurrent survey X], we contribute [Y]." Currently, the relationship to competing surveys is unclear.

3. **Why 8 levels of self-evolution in Ch.1 but 5 evolution loops in the framework?** The paper introduces two different taxonomic frameworks without clearly mapping between them. This is confusing.

4. **What is the relationship between the formal definition and the Five Loops framework?** The formal $S_t$ definition captures a generic evolution process, while the Five Loops are specific instantiations. This relationship should be made explicit, ideally with a figure.

5. **Is the paper intended for arXiv submission, journal submission, or both?** The length (~40+ pages), chapter structure, and formal depth suggest a journal submission. If targeting arXiv, consider a more concise version.

---

## Recommendation

**Minor Revision**

The paper has strong content, rigorous formal definitions, comprehensive coverage, and genuine intellectual contribution. The main issues are:
- Structural imbalance (Ch.1 too long)
- Insufficient visual aids (too many tables, too few figures)
- Notation inconsistency across chapters
- README/paper boundary confusion

These are fixable without fundamental rewriting. The core intellectual contribution (Five Loops framework, formal definition, benchmark analysis, pain point taxonomy) is solid. With the above revisions, this would be a strong, publishable survey.

---

## Dimension Scores (1–5)

| Dimension | Score | Note |
|---|---:|---|
| Clarity of writing | 3.5 | Strong in Ch.1, Ch.5; dense in Ch.3, Ch.7 |
| Structure & organization | 3.0 | Ch.1 imbalance, missing visual summaries |
| Notation consistency | 2.5 | Multiple formalisms without cross-mapping |
| Figure & table quality | 3.0 | Tables good, figures insufficient |
| Readability for target audience | 3.5 | Good for experts, challenging for newcomers |
| README as project entry | 4.0 | Excellent layered compression, but too long |
| README English quality | 3.0 | Chinese-English mixing in headers and labels |
| Formatting consistency | 3.5 | Generally consistent, some LaTeX issues |
| **Overall** | **3.25** | Solid work needing presentation polish |
