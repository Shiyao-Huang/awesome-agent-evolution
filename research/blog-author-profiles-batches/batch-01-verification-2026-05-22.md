# Blog Author Profiles Batch 01 — Verification Pass A

- content_timestamp: 2026-05-22
- collected_at: 2026-05-22T00:00:00+08:00
- time_slice: 2026-05
- batch_index: 1
- verification_status: partial_web_fallback_after_anysearch_quota_exhausted
- operator_session: cmpfdm89c0905mr23jzvz3yje

## Method note

AnySearch CLI was attempted first as requested for author-profile enrichment, but the service returned daily quota exhaustion. I did not persist the auto-generated key to disk; this pass uses web fallback with official/company/GitHub/LinkedIn/X evidence where available. Entries below are high-impact Batch 01 authors/platforms whose original fields were still `pending_anysearch_batch`.

## Verified / enriched profiles

| Batch ID | Author / source | Enriched role / company | X/Twitter | LinkedIn | GitHub | Evidence URLs | Confidence | Notes |
|---:|---|---|---|---|---|---|---|---|
| 14 | Anthropic | AI safety/research organization; publishes agent engineering, Claude, computer-use, and safety guidance | `@AnthropicAI` | https://www.linkedin.com/company/anthropicresearch | https://github.com/anthropics | https://www.anthropic.com ; https://www.linkedin.com/company/anthropicresearch ; https://github.com/anthropics ; https://x.com/AnthropicAI/status/2025997928242811253 | high | GitHub org is domain-verified for anthropic.com; strong Tier 1 institutional source. |
| 15 | OpenAI | AI research/product organization; developer/blog source for Apps SDK, Codex, Agents SDK, evals, and platform updates | `@OpenAI` | https://www.linkedin.com/company/openai | https://github.com/openai | https://openai.com ; https://help.openai.com/en/articles/11725090-verifying-communications-from-openai ; https://www.linkedin.com/company/openai ; https://github.com/orgs/openai/repositories | high | OpenAI Help Center lists official social handles; GitHub org has active official agents repositories. |
| 20 | LangChain | Agent engineering platform / open-source framework company; LangGraph/LangSmith/Deep Agents ecosystem | `@LangChainAI` | https://www.linkedin.com/company/langchain | https://github.com/langchain-ai | https://www.langchain.com ; https://www.linkedin.com/company/langchain ; https://github.com/langchain-ai ; https://github.com/langchain-ai/langchain | high | GitHub org contains `langchain`, `langgraphjs`, `deepagents`, and `open-swe`; LinkedIn describes agent-engineering platform. |
| 18 | Humanloop | LLM evals / prompt management / observability platform; team has joined Anthropic per company LinkedIn update | unknown | https://www.linkedin.com/company/humanloop | unknown | https://humanloop.com ; https://humanloop.com/about ; https://www.linkedin.com/company/humanloop | medium-high | LinkedIn and company site verify company identity; social/GitHub handles not confidently verified in this pass. |
| 25 | Modal | Serverless AI compute / GPU infrastructure platform; relevant for agent sandboxes and production agent workloads | `@modal` | https://www.linkedin.com/company/modal-labs | https://github.com/modal-labs | https://modal.com ; https://www.linkedin.com/company/modal-labs ; https://github.com/modal-labs ; https://x.com/modal_labs/status/1775215210229272730 | high | GitHub org lists `@modal`, company LinkedIn, and examples/client SDK repositories. |
| 27 | Weights & Biases | AI developer platform for MLOps/LLMOps, experiment tracking, Weave/evals, agentic workflow observability | `@wandb` / `@WeightsBiases` | https://www.linkedin.com/company/wandb | https://github.com/wandb | https://wandb.ai ; https://www.linkedin.com/company/wandb ; https://github.com/wandb ; https://x.com/weights_biases/status/1796568156229505033 | high | GitHub org is domain-verified for wandb.ai and lists both social handles; LinkedIn verifies company profile. |
| 21 | The New Stack | Developer/cloud-native/DevOps technology media; publishes practical agent-framework and production-AI articles | unknown | https://www.linkedin.com/company/the-new-stack | n/a | https://thenewstack.io ; https://www.linkedin.com/company/the-new-stack | medium-high | Reliable media source; not an individual technical author. Keep as outlet-level profile unless article bylines are extracted. |
| 23 | QbitAI / 量子位 | Chinese AI technology media and community operator; high reach in AI news, WeChat/community dissemination | n/a | n/a | n/a | https://www.qbitai.com ; https://www.qbitai.com/关于我们 | medium-high | Strong Chinese media/source profile; treat as outlet-level rather than individual author. |
| 3 | Product Hunt maker/team | Product-discovery platform/maker pages; source is useful for launch/trend signal, not author expertise | n/a | n/a | n/a | https://www.producthunt.com | medium | Need per-product maker extraction for true author profiles; generic `maker/team` should not be counted as individual influence. |
| 6 | GitHub author/repository maintainers | Open-source maintainers; high developer-impact signal when repository stars/forks are available | n/a | n/a | per repo | https://github.com/Baburnana/EvoMaster ; https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents ; https://github.com/evoagentx/evoagentx | medium | Needs repo-level enrichment by owner/org (`EvoAgentX`, `modelscope`, etc.) rather than one generic maintainer row. |

## Data files updated

- Updated `raw-blogs/raw-blogs-index.json` for 80 records across 8 high-impact Batch 01 sources.
- Updated the matching 80 per-record `raw-blogs/*.json` files with `profile_type`, `github_profile`, `verification_status`, `verification_sources`, higher confidence, and `needs_enrichment=false` where identity was verified.
- Updated `research/blog-author-profiles-batches/batch-01.md` status to `partial_verified_pass_a_2026-05-22`.

## Recommended normalization fixes

1. Split outlet-level rows from person/org rows: `Product Hunt maker/team`, `YouTube creator/channel`, `知乎作者`, `微信公众号作者`, and `GitHub author/repository maintainers` are aggregation buckets, not author profiles.
2. Add `profile_type` with values: `individual`, `company_org`, `media_outlet`, `platform_bucket`, `repository_org`, `unknown_domain`.
3. Keep `confidence` separate from `influence_rating`: a source can be high-confidence identity but low author-level specificity.
4. For Batch 01 next pass, prioritize rows 1–13 and 16–17 by extracting bylines/account names from representative URLs before searching social handles.
5. AnySearch is currently quota-blocked in this session; next agent should either configure a valid team API key or continue with web fallback and cite official pages.
