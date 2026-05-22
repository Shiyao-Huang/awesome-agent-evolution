# AnySearch Verification Audit — Author Profiles + Repo Classification

- content_timestamp: 2026-05-21
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- scope: `research/blog-author-profiles.md`, `research/repo-classification.md`
- method: AnySearch `batch_search` with 5-query parallel batches; temporary API key used in-memory only, not saved to repo or `.env`.

## 1. Blog author/profile verification sample

| Entity | AnySearch signal | Verification outcome | Action for profile data |
|---|---|---|---|
| Anthropic | GitHub org `github.com/anthropics` returned as verified org with `anthropic.com`; LinkedIn posts also returned but not official company page. | GitHub confirmed; X/LinkedIn should remain official-mapping only unless official result is returned. | Keep `github.com/anthropics`; avoid using random LinkedIn posts as company LinkedIn. |
| OpenAI | GitHub org `github.com/OpenAI` returned as verified org; X profile tracker for `@OpenAI` returned. | GitHub confirmed; X likely official but should prefer direct `x.com/OpenAI`/`OpenAIDevs` mapping. | Keep official GitHub; mark X as official mapping rather than inferred from unrelated posts. |
| LangChain | Returned official site `langchain.com`, GitHub repos under `langchain-ai`, and X status from `x.com/LangChainAI`. | GitHub/X/site confirmed; LinkedIn result was a specific post, not company page. | Keep `github.com/langchain-ai`, `x.com/LangChainAI`; LinkedIn only if official company URL known. |
| Humanloop | Returned `github.com/humanloop`, official homepage saying Humanloop joins Anthropic, and org metadata with Twitter `@humanloop`. | GitHub/Twitter/homepage confirmed; acquisition/sunset context should be captured. | Profile should note Humanloop is now joined/acquired by Anthropic; maintain M3 evals relevance. |
| Weights & Biases | Returned `github.com/wandb`, LinkedIn product page, official site `wandb.ai`, and GitHub org metadata with Twitter `@wandb`. | GitHub/LinkedIn/site confirmed; strong M3 eval/observability anchor. | Keep W&B as high-confidence eval/observability source. |

## 2. Repo classification README verification sample

| Repo | AnySearch README signal | Classification implication |
|---|---|---|
| `Argus-Framework/argus-ai-debate` | README says multi-agent AI debate framework with Bayesian reasoning, provenance, audit trails, 50+ integrations. | Supports `框架`; also strongly relevant to M3 evaluator/audit mismatch. |
| `beeevita/EvoPrompt` | README says official implementation of ICLR 2024 paper “Connecting LLMs with Evolutionary Algorithms Yields Powerful Prompt Optimizers.” | Supports `论文代码`; not merely generic eval/tooling. |
| `algorithmicsuperintelligence/openevolve` | Search result says open-source implementation of AlphaEvolve; examples optimize code/kernels through evolutionary coding pipeline. | Supports `框架` or `工具` depending taxonomy; should not be labeled tutorial. |
| `browser-use/browser-use` | README says “Make websites accessible for AI agents,” browser automation library/cloud/CLI. | Supports `工具`/`框架`; production-security caveat exists via RCE article, relevant to M5/M3. |
| `Agent-on-the-Fly/Memento` | README says official code for memory-based continual-learning LLM agents without weight updates; planner-executor + case memory + MCP tooling. | Supports `论文代码` plus M4 memory-persistence lens. |

## 3. Required follow-up policy

- Do not promote arbitrary search hits into X/LinkedIn/GitHub fields; only use official org pages or self-matching personal profiles.
- For profile entities that are cohorts (YouTube creators, Product Hunt makers, Zhihu/CSDN authors), split into exact channel/author extraction in Phase 2 before assigning personal socials.
- For uncertain repo categories, require at least one README/GitHub result or local README evidence before final category changes.
- Carry the 5 Mismatch lens forward: M1 production failure, M2 business-cost gap, M3 evaluator/audit gap, M4 memory persistence gap, M5 multi-agent operability gap.
