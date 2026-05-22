# AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery

> arXiv: 2408.06292 | August 2024 (Nature 2026) | Sakana AI
> Authors: Chris Lu, Cong Lu, Robert Tjarko Lange, Jakub Foerster, Jeff Clune, Yujing Hu, Shengran Hu, Cong Lu, et al. (Sakana AI team)
> Follow-up: AI Scientist-v2 (arXiv: 2504.08066, 2025)

---

## Summary

First comprehensive framework for fully automated scientific discovery. LLM-based agent performs the entire research lifecycle: idea generation, experimental design, code execution, manuscript writing, and peer review. AI Scientist-v2 achieved the first AI-generated paper accepted through peer review at a workshop level (score 6.33, top 45%).

---

## Core Method

### End-to-End Research Pipeline

```
1. Idea Generation
   - LLM generates novel research ideas from a topic/area
   - Semantic novelty checking against existing literature

2. Experimental Design
   - LLM designs experiments to validate ideas
   - Generates Python experiment code

3. Code Execution
   - Automated sandbox execution of experiments
   - Collects results, metrics, and visualizations

4. Manuscript Writing
   - LLM writes full LaTeX paper
   - Includes Introduction, Method, Experiments, Results, Conclusion

5. Automated Peer Review (LLM-based)
   - LLM reviews generated papers using ICLR-style rubrics
   - Scores: Soundness, Presentation, Contribution, Rating, Confidence
```

### Key Innovation
The entire loop is autonomous — no human intervention. The system can iterate on ideas that receive low review scores, improving them in subsequent rounds.

---

## Key Formulas

| Component | Description |
|---|---|
| Idea score | f(idea) = novelty × feasibility × significance |
| Review score | R = Σ w_i × r_i (soundness + presentation + contribution) |
| Acceptance threshold | Accept if R > threshold (configurable) |

---

## Benchmarks & Results

### AI Scientist v1 (2024)
- Generated papers across 3 ML topics: diffusion models, language modeling, grokking
- Cost: ~$15 per paper (using Claude/GPT-4 API)
- Papers were evaluated by both LLM reviewers and human reviewers

### AI Scientist v2 (2025)
| Metric | Result |
|---|---|
| Peer review score | **6.33** (workshop level) |
| Ranking | Top 45% of submissions |
| Milestone | **First entirely AI-generated paper accepted through peer review** |

### Evaluation Results (Independent, arXiv:2502.14297)
| Finding | Detail |
|---|---|
| Review quality | AI Scientist rejected 9/10 papers including 4 human-accepted ones |
| Generalization | Fails to generalize beyond initial training domains (LSTMs) |
| Theoretical depth | Lacks theoretical motivation in generated papers |
| Architectural diversity | Limited to known architectures, lacks creative jumps |

---

## Authors & Affiliations

| Author | Affiliation | Notable |
|---|---|---|
| **Sakana AI team** | Sakana AI (Tokyo, Japan) | Founded by David Ha (ex-Google Brain) |
| **Cong Lu** | UBC / Sakana AI | Also co-authored ADAS and DGM |
| **Robert Tjarko Lange** | Sakana AI | Also co-authored ShinkaEvolve |
| **Jeff Clune** | UBC/Wyoming | Also authored ADAS, DGM |

### Key Connection
- **Cong Lu** bridges Sakana AI and UBC (Clune Lab) — AI Scientist and DGM share team members
- **Robert Tjarko Lange** is the author of ShinkaEvolve (evolutionary optimization framework)

### Lab Context
- **Sakana AI**: Tokyo-based AI lab founded by David Ha (formerly Google Brain)
- Focus on nature-inspired AI and evolutionary methods
- GitHub: https://github.com/sakanaai/ai-scientist

---

## Limitations

1. Generated papers lack theoretical depth
2. Cannot generalize beyond narrow domains
3. LLM-based peer review is unreliable (rejects good papers)
4. Cost scales linearly with number of experiments
5. Ethical concerns: automated paper generation could flood conferences

---

## Citation Context

- Extends earlier work on automated ML research (AutoML-Zero, etc.)
- Related to evolutionary code search (AlphaEvolve) — but focused on scientific papers rather than algorithms
- Complements DGM/ADAS: AI Scientist discovers scientific knowledge, while DGM discovers agent architectures
- AI Scientist-v2 demonstrates the feasibility of autonomous scientific contribution
- Critiqued by evaluation paper (2502.14297) showing significant limitations in review quality
