export const researchCoverage = {
  "rawPaperFiles": 185,
  "rawUniqueIds": 115,
  "reviewFiles": 135,
  "reviewedUniqueIds": 86,
  "frontstageFeaturedPapers": 19,
  "identifiedCoverageGaps": 9,
  "coverageWarning": "Paper collection is useful but not enough: the public site must expose full-corpus reviews and track mainstream survey, benchmark, safety, and experience-learning gaps explicitly.",
  "coverageGaps": [
    {
      "title": "A Survey on Self-Evolution of Large Language Models",
      "year": "2024",
      "url": "https://arxiv.org/abs/2404.14387",
      "status": "frontier-gap",
      "reason": "LLM self-evolution survey; needed as the top-down taxonomy anchor."
    },
    {
      "title": "A Survey of Self-Evolving Agents",
      "year": "2025",
      "url": "https://arxiv.org/abs/2507.21046",
      "status": "frontier-gap",
      "reason": "Agent-specific survey; needed to benchmark our scope against an external taxonomy."
    },
    {
      "title": "A Comprehensive Survey of Self-Evolving AI Agents",
      "year": "2025",
      "url": "https://arxiv.org/abs/2508.07407",
      "status": "frontier-gap",
      "reason": "Independent survey candidate; useful for cross-checking missed branches."
    },
    {
      "title": "Large Language Models Can Self-Improve At Web Agent Tasks",
      "year": "2024",
      "url": "https://arxiv.org/abs/2405.20309",
      "status": "frontier-gap",
      "reason": "WebArena self-improvement benchmark signal; important for agent eval coverage."
    },
    {
      "title": "OPT-BENCH: Evaluating the Iterative Self-Optimization of LLM Agents in Large-Scale Search Spaces",
      "year": "2026",
      "url": "https://arxiv.org/abs/2605.08904",
      "status": "frontier-gap",
      "reason": "Benchmark for iterative self-optimization; should become an eval anchor."
    },
    {
      "title": "Experiential Reflective Learning for Self-Improving LLM Agents",
      "year": "2026",
      "url": "https://arxiv.org/abs/2603.24639",
      "status": "frontier-gap",
      "reason": "Experience-to-heuristic learning; fills memory/reflection transfer branch."
    },
    {
      "title": "Specification Self-Correction",
      "year": "2025",
      "url": "https://arxiv.org/abs/2507.18742",
      "status": "frontier-gap",
      "reason": "Turns reward hacking into a diagnostic signal for correcting the objective."
    },
    {
      "title": "Inference-Time Reward Hacking in Large Language Models",
      "year": "2025",
      "url": "https://arxiv.org/abs/2506.19248",
      "status": "frontier-gap",
      "reason": "Safety baseline for proxy reward over-optimization in inference-time improvement."
    },
    {
      "title": "Safety is Essential for Responsible Open-Ended Systems",
      "year": "2025",
      "url": "https://arxiv.org/abs/2502.04512",
      "status": "frontier-gap",
      "reason": "Open-ended evolution risk framing; needed for governance layer."
    }
  ]
};
