---
repo: chrisworsey55/atlas-gic
url: https://github.com/chrisworsey55/atlas-gic
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - chrisworsey55/atlas-gic: ATLAS by General Intelligence Capital — Self-improving AI trading agents using Karpathy-style autoresearch · GitHub

**Source**: https://github.com/chrisworsey55/atlas-gic

---

[Skip to content](https://github.com/chrisworsey55/atlas-gic#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[chrisworsey55](https://github.com/chrisworsey55)

/
**[atlas-gic](https://github.com/chrisworsey55/atlas-gic)**

Public

- [Notifications](https://github.com/login?return_to=%2Fchrisworsey55%2Fatlas-gic)You must be signed in to change notification settings
- [Fork
    346](https://github.com/login?return_to=%2Fchrisworsey55%2Fatlas-gic)
- 
[Star
          1.9k](https://github.com/login?return_to=%2Fchrisworsey55%2Fatlas-gic)

[https://github.com/chrisworsey55/atlas-gic](https://github.com/chrisworsey55/atlas-gic)

[Branches](https://github.com/chrisworsey55/atlas-gic/branches)[Tags](https://github.com/chrisworsey55/atlas-gic/tags)

[https://github.com/chrisworsey55/atlas-gic/branches](https://github.com/chrisworsey55/atlas-gic/branches)[https://github.com/chrisworsey55/atlas-gic/tags](https://github.com/chrisworsey55/atlas-gic/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History5 Commits5 Commits |  |  |  |
| architecture | architecture |  |  |
| prompts/examples | prompts/examples |  |  |
| results | results |  |  |
| src | src |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

## 🚀 ATLAS Agents — Launching Next Week

[https://github.com/chrisworsey55/atlas-gic#-atlas-agents--launching-next-week](https://github.com/chrisworsey55/atlas-gic#-atlas-agents--launching-next-week)

The platform built on top of this repo is launching next week.

**Three ways to use it:**

1. 

**Copy ATLAS** — trade alongside the autoresearch system in this repo. Live signals, auto-execution, full transparency. Up 30% since launch.

2. 

**Build your own** — describe a strategy in plain English, backtest on 18 months of real data, deploy live.

3. 

**Marketplace** — publish your agent, earn when others copy it.

SIMONS is already live on Kalshi prediction markets. 60% win rate.

As a thank you for all the feedback, ideas, and support that helped shape this project — we're giving the GitHub community 20% off. Forever, not just the first month.

→ **[atlasagents.co](https://atlasagents.co)** Use code **GITHUB20** at checkout. First 100 only.

---

# ATLAS - Self-Improving AI Trading Agents

[https://github.com/chrisworsey55/atlas-gic#atlas---self-improving-ai-trading-agents](https://github.com/chrisworsey55/atlas-gic#atlas---self-improving-ai-trading-agents)

**Built by [General Intelligence Capital](https://generalintelligencecapital.com)**

[Karpathy's autoresearch](https://github.com/karpathy/autoresearch) + [Soros's reflexivity](https://en.wikipedia.org/wiki/Reflexivity_(social_theory)) + [MiroFish swarm simulation](https://github.com/666ghj/MiroFish) applied to financial markets.

The agent prompts are the weights. Sharpe ratio is the loss function. No GPU needed.

⭐ 944 stars · 202 forks

---

## What Is This?

[https://github.com/chrisworsey55/atlas-gic#what-is-this](https://github.com/chrisworsey55/atlas-gic#what-is-this)

ATLAS is a framework for autonomous AI trading agents that improve their own prompts through market feedback, train on different market regimes, create new agents when they detect knowledge gaps, and simulate reflexive futures to prepare for what's coming.

25+ agents debate markets daily across 4 layers. Every recommendation is scored against real outcomes. The worst-performing agent gets its prompt rewritten. If performance improves, the git commit survives. If not, git revert.

Now running live with real capital.

---

## Architecture

[https://github.com/chrisworsey55/atlas-gic#architecture](https://github.com/chrisworsey55/atlas-gic#architecture)

### Layer 1 - Macro (10 agents)

[https://github.com/chrisworsey55/atlas-gic#layer-1---macro-10-agents](https://github.com/chrisworsey55/atlas-gic#layer-1---macro-10-agents)

Central bank, geopolitical, China, dollar, yield curve, commodities, volatility, emerging markets, news sentiment, institutional flow.

These agents set the regime. Risk on or risk off? What's the macro backdrop?

### Layer 2 - Sector Desks (7 agents)

[https://github.com/chrisworsey55/atlas-gic#layer-2---sector-desks-7-agents](https://github.com/chrisworsey55/atlas-gic#layer-2---sector-desks-7-agents)

Semiconductor, energy, biotech, consumer, industrials, financials, plus a Bloomberg-style relationship mapper that tracks supply chains, ownership, analyst coverage, and competitive dynamics.

### Layer 3 - Superinvestors (4 agents)

[https://github.com/chrisworsey55/atlas-gic#layer-3---superinvestors-4-agents](https://github.com/chrisworsey55/atlas-gic#layer-3---superinvestors-4-agents)

- **Druckenmiller** - macro/momentum: what's the big asymmetric trade?
- **Aschenbrenner** - AI/compute: who benefits from the capex cycle?
- **Baker** - deep tech/biotech: who has real IP moats?
- **Ackman** - quality compounder: pricing power + FCF + catalyst?

### Layer 4 - Decision (4 agents)

[https://github.com/chrisworsey55/atlas-gic#layer-4---decision-4-agents](https://github.com/chrisworsey55/atlas-gic#layer-4---decision-4-agents)

- **CRO** - adversarial risk officer: attacks every idea, finds correlated risks
- **Alpha Discovery** - finds names nobody else mentioned
- **Autonomous Execution** - converts signals to sized trades
- **CIO** - synthesises all prior layers, weighted by Darwinian agent scores, makes the final call

---

## The Autoresearch Loop

[https://github.com/chrisworsey55/atlas-gic#the-autoresearch-loop](https://github.com/chrisworsey55/atlas-gic#the-autoresearch-loop)

Inspired by [Karpathy's autoresearch](https://github.com/karpathy/autoresearch). Same pattern, different domain.

- System identifies worst agent by rolling Sharpe
- Generates one targeted prompt modification
- Runs for 5 trading days
- Checks if agent's Sharpe improved
- Keep (git commit) or revert (git reset)

The agent prompts are the weights being optimised. Each trading day is one training iteration. A $20/month VM replaces the H100.

**Darwinian Weights:** Each agent has a weight between 0.3 (minimum) and 2.5 (maximum). Top quartile agents get weight × 1.05 daily. Bottom quartile get × 0.95. The CIO proportionally weights input by these scores. Good agents get louder. Bad agents get quieter.

---

## 18-Month Backtest Results

[https://github.com/chrisworsey55/atlas-gic#18-month-backtest-results](https://github.com/chrisworsey55/atlas-gic#18-month-backtest-results)

**Period:** September 2024 - March 2026 (378 trading days)

- Prompt modifications attempted: 54
- Survived (kept): 16 (30%)
- Reverted: 37 (70%)
- Deployment phase return: **+22% in 173 days**
- Best individual pick: **AVGO at $152, held for +128%**

The system independently discovered its own portfolio manager (CIO) was its weakest component — downweighting it to minimum before we diagnosed the same issue manually.

### Equity Curve

[https://github.com/chrisworsey55/atlas-gic#equity-curve](https://github.com/chrisworsey55/atlas-gic#equity-curve)

[https://github.com/chrisworsey55/atlas-gic/blob/main/results/equity_curve.png](https://github.com/chrisworsey55/atlas-gic/blob/main/results/equity_curve.png)

---

## Agent Spawning

[https://github.com/chrisworsey55/atlas-gic#agent-spawning](https://github.com/chrisworsey55/atlas-gic#agent-spawning)

The system detects recurring knowledge gaps in its own debates. When the same blind spot appears 3+ times in 5 days, it autonomously creates a new specialist agent at neutral weight.

During a 6-month spawning test (Jul-Dec 2024):

- 9 agents spawned autonomously — credit markets, earnings calendar, options flow, liquidity conditions, positioning data, earnings guidance, retail sentiment, technical levels
- 3 went extinct (stuck at minimum weight for 20+ days)
- 6 survived Darwinian selection and reached maximum weight
- Zero human involvement in deciding what to create or when

The system grew its own team from 25 to 31 agents based on what it learned it didn't know.

---

## All Seasons (PRISM) — Regime-Specific Training

[https://github.com/chrisworsey55/atlas-gic#all-seasons-prism--regime-specific-training](https://github.com/chrisworsey55/atlas-gic#all-seasons-prism--regime-specific-training)

We don't train one set of agents and hope they work everywhere. We train separate cohorts on distinct market regimes.

Same starting agents. Same vanilla prompts. Different evolutionary environments. Completely different survival instincts.

| Cohort | Period | Return | Modifications Kept | Key Learning |
|---|---|---|---|---|
| Bull/Low Vol | 2016-2018 | +7.7% | 180/509 (35%) | Exit vol longs when events resolve peacefully |
| Crisis (COVID) | 2020 Q1-Q2 | -13.1% | 0/3 (0%) | Crashes too fast for autoresearch — agents need to arrive pre-trained |
| Rate Tightening | 2022-2023 | -30.2% | 38/89 (43%) | Don't flip-flop during Fed weeks — 15-day minimum between reversals |
| Recovery | 2020 Q2-Q4 | -29.0% | 0/1 (0%) | Same problem as crisis — too fast for the feedback loop |
| Euphoria | 2021 | +14.3% | 119/243 (49%) | Momentum confirmation before shorts, cap conviction during political crises |

**Convergent Evolution:** All five cohorts independently discovered the same meta-rules — cap conviction, use VIX as regime filter, enforce hard position limits, never override risk management. Nobody programmed caution. Every cohort learned it from losing money when overconfident.

**Divergent Evolution:** The same volatility agent started at 844 bytes in every cohort:

- Bull markets: grew to 121,260 bytes (143x). Learned "exit vol longs immediately when events resolve peacefully."
- Rate tightening: grew to 10,354 bytes. Learned "NEVER buy VXX when VIX is 15-25."
- Euphoria: grew to 1,998 bytes. Learned "require VIX above 30 before going long vol."

Same agent. Same starting prompt. Three completely different survival strategies shaped by three different markets.

---

## JANUS Meta-Layer

[https://github.com/chrisworsey55/atlas-gic#janus-meta-layer](https://github.com/chrisworsey55/atlas-gic#janus-meta-layer)

Multiple trained cohorts produce different recommendations. JANUS sits above all cohorts and algorithmically weights them by recent accuracy.

The weight differential between cohorts is an emergent regime detector:

- When short-window agents outperform → **NOVEL REGIME**
- When long-window agents outperform → **HISTORICAL REGIME**
- When they're roughly equal → **MIXED**

We didn't build a regime detector. It emerged from tracking which cohort gets things right.

---

## Soros Reflexivity Engine

[https://github.com/chrisworsey55/atlas-gic#soros-reflexivity-engine](https://github.com/chrisworsey55/atlas-gic#soros-reflexivity-engine)

Markets don't just reflect reality — they change it. We built reflexive feedback loops into the simulation framework.

Five feedback loops modelled:

1. **Price → Fundamentals**: Stock drops >15% trigger credit downgrades, talent flight, capex cuts. Rises >20% trigger cheap capital, talent attraction, customer confidence.
2. **P&L → Behaviour**: Fund drawdown >10% → forced selling cascade. Gains >15% → increased position sizes and concentrated bets.
3. **Narrative → Flows**: 3+ analysts converge on thesis → retail flow follows. Contrarian narratives emerge after extended consensus.
4. **Market → Policy**: Equity drawdown >15% → central bank signals easing. Oil >$130 → strategic reserve releases.
5. **Reflexive Reversal Detection**: Feedback loop running 5+ rounds in one direction → flagged as reflexive extreme. Maximum consensus = maximum fragility.

First detection: Gold bullish consensus appeared in 4 of 5 simulation rounds — flagged as a crowded trade with 32% reversal probability. That's Soros in code.

---

## MiroFish Swarm Simulation Integration

[https://github.com/chrisworsey55/atlas-gic#mirofish-swarm-simulation-integration](https://github.com/chrisworsey55/atlas-gic#mirofish-swarm-simulation-integration)

Integrated with [MiroFish](https://github.com/666ghj/MiroFish), a swarm intelligence engine that generates parallel digital worlds populated by thousands of AI agents.

Our trading agents don't just learn from the past — they train on simulated futures:

- Overnight, the system generates branching scenarios (geopolitical escalation, Fed policy, earnings shocks, black swans)
- Thousands of simulated agents (fund managers, central bankers, retail traders, corporate executives) interact with reflexive feedback
- ATLAS trading agents are trained inside these simulated futures using the same Darwinian loop
- Agents that navigate simulated futures well get upweighted
- Predictions scored against actual outcomes to improve simulation accuracy

**First result:** Druckenmiller-style agent scores 1.0 in simulated crashes but 0.22 in melt-ups. Quality compounder agent is the opposite. The system knows which instincts to trust before the regime arrives — not after.

---

## Key Insight

[https://github.com/chrisworsey55/atlas-gic#key-insight](https://github.com/chrisworsey55/atlas-gic#key-insight)

The orchestration layer matters as much as the intelligence layer.

Individual agents improved measurably through autoresearch. But portfolio returns depend on how agent signals are converted to sized positions. The synthesis/decision layer is the bottleneck. Improving individual agent intelligence without improving orchestration yields diminishing returns.

---

## What's Included

[https://github.com/chrisworsey55/atlas-gic#whats-included](https://github.com/chrisworsey55/atlas-gic#whats-included)

- Framework architecture and pipeline structure
- Autoresearch loop design
- Backtest results and equity curve
## gBrain Temporal Metadata

- content_timestamp: 2016
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: early
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

