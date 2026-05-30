# QF-Bench Model Card

| Field | Value |
|---|---|
| Repository | [QF-Bench/QuantitativeFinance-Bench](https://github.com/QF-Bench/QuantitativeFinance-Bench) |
| Category | State-Aware Financial Agent Benchmark Suite |
| Stars / forks snapshot | 28 / 35 |
| Language | Python |
| License | CC-BY-NC-4.0 |
| Raw capture | raw-github/qf-bench_quantitativefinance-bench.md |
| Updated by | hourly public metadata update, 2026-05-30 19:17 +0800 |

## 1. Role in Self Evolve

QF-Bench is a state-aware benchmark dataset for evaluating AI agents on realistic quantitative finance workflows under sandboxed verification. It matters because self-evolving agents need repeatable harness control, measurable feedback loops, and reusable skill procedures before claiming stable improvement.

## 2. Working Principle

package stateful quantitative tasks in reproducible sandboxes -> run oracle and real-agent evaluation paths -> enforce test-based numeric verification -> use benchmark deltas to tune agent harness and reasoning reliability

## 3. Evidence Path

web-observed GitHub page showed 28 stars, 35 forks, 372 commits, and README documentation that the benchmark runs on Harbor with verifiable task outputs. Shell GitHub API access remained blocked by DNS and local `gh` auth was invalid, so this card treats the snapshot as web-observed rather than API-verified.

## 4. Teaching Use

Use this card to explain State-Aware Financial Agent Benchmark Suite: it shows how harness/runtime/benchmark layers convert agent behavior into reproducible and auditable engineering workflows.

## 5. Limits

The repository was not cloned in this iteration; no benchmark run, plugin install, workflow execution, or agent loop experiment was executed. Counts and claims are visible public-page/search signals unless independently revalidated later.
