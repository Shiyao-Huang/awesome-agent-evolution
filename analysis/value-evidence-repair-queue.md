# Value Evidence Repair Queue

> Generated: 2026-06-02T02:53:27.634Z. This queue converts value-LSH comparison into concrete evidence repair actions for GitHub projects.

## One Sentence

The value map is now actionable: high-scoring or contradictory GitHub projects are ordered by which evidence gaps block trustworthy comparison.

## Three Sentences

This run inspected 717 GitHub rows from the value matrix and found 682 projects with at least one repair gap. The top lanes are raw/meta repair, deep code/report reading, issue/resource scanning, star-growth repair, and loop verification. A high repair score does not mean the project is bad; it means the project is important enough, or contradictory enough, that missing evidence should be fixed before public claims.

## Lane Counts

| lane | count |
| --- | ---: |
| deep-read-needed | 453 |
| issue-resource-scan | 138 |
| raw-meta-repair | 52 |
| loop-verification | 35 |
| star-growth-repair | 4 |

## Gap Counts

| gap | count |
| --- | ---: |
| evidence_chain_incomplete | 505 |
| frontier_queue_missing | 466 |
| deep_report_missing | 453 |
| self_evolution_unclear | 435 |
| issue_resource_unclear | 330 |
| implementation_unclear | 52 |
| raw_meta_missing | 52 |
| star_growth_missing | 20 |

## Top Repair Queue

| rank | project | class | value score | repair score | lane | gaps | first action |
| ---: | --- | --- | ---: | ---: | --- | ---: | --- |
| 1 | [sethkarten/continual-harness](https://github.com/sethkarten/continual-harness) | high-value-candidate | 76.75 | 135.75 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 2 | [inclusionai/agenticlearning](https://github.com/inclusionai/agenticlearning) | high-value-candidate | 71.02 | 135.02 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 3 | [tylerdotai/meta-harness-evolver](https://github.com/tylerdotai/meta-harness-evolver) | high-value-candidate | 80.89 | 134.89 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 4 | [krzysztofdudek/researcherskill](https://github.com/krzysztofdudek/researcherskill) | high-value-candidate | 75.8 | 134.8 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 5 | [sola-st/repairagent](https://github.com/sola-st/repairagent) | high-value-candidate | 75.8 | 134.8 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 6 | [zhang677/accelopt](https://github.com/zhang677/accelopt) | high-value-candidate | 80.57 | 134.57 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 7 | [hwfengcs/dm-code-agent](https://github.com/hwfengcs/dm-code-agent) | high-value-candidate | 81.53 | 134.53 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 8 | [rucbm/laser](https://github.com/rucbm/laser) | high-value-candidate | 81.53 | 134.53 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 9 | [arthurmgraf/graphmind](https://github.com/arthurmgraf/graphmind) | high-value-candidate | 75.48 | 134.48 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 10 | [clawbio/clawbio](https://github.com/ClawBio/ClawBio) | high-value-candidate | 75.48 | 134.48 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 11 | [mem0ai/memory-benchmarks](https://github.com/mem0ai/memory-benchmarks) | high-value-candidate | 75.48 | 134.48 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 12 | [signet-ai/signetai](https://github.com/Signet-AI/signetai) | high-value-candidate | 75.48 | 134.48 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 13 | [vectorize-io/agent-memory-benchmark](https://github.com/vectorize-io/agent-memory-benchmark) | high-value-candidate | 75.48 | 134.48 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 14 | [xinhuagu/aceclaw](https://github.com/xinhuagu/aceclaw) | high-value-candidate | 75.48 | 134.48 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 15 | [pinchbench/skill](https://github.com/pinchbench/skill) | high-value-candidate | 76.43 | 134.43 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 16 | [rlhflow/self-rewarding-reasoning-llm](https://github.com/rlhflow/self-rewarding-reasoning-llm) | high-value-candidate | 70.38 | 134.38 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 17 | [agent-on-the-fly/memento](https://github.com/agent-on-the-fly/memento) | high-value-candidate | 81.21 | 134.21 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 18 | [angrysky56/reflective-agent-architecture](https://github.com/angrysky56/reflective-agent-architecture) | high-value-candidate | 75.16 | 134.16 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 19 | [neo4j-labs/agent-memory](https://github.com/neo4j-labs/agent-memory) | high-value-candidate | 75.16 | 134.16 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 20 | [shiqichen17/spa](https://github.com/shiqichen17/spa) | high-value-candidate | 70.06 | 134.06 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 21 | [budecosystem/claudeevolve](https://github.com/budecosystem/claudeevolve) | high-value-candidate | 79.94 | 133.94 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 22 | [privkeyio/evolve-mcp](https://github.com/privkeyio/evolve-mcp) | high-value-candidate | 79.94 | 133.94 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 23 | [rllm-org/rllm](https://github.com/rllm-org/rllm) | high-value-candidate | 74.84 | 133.84 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 24 | [camel-ai/owl](https://github.com/camel-ai/owl) | high-value-candidate | 80.57 | 133.57 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 25 | [evomap/awesome-agent-evolution](https://github.com/evomap/awesome-agent-evolution) | high-value-candidate | 80.57 | 133.57 | deep-read-needed | deep_report_missing, frontier_queue_missing, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 26 | [logikon-ai/awesome-deliberative-prompting](https://github.com/logikon-ai/awesome-deliberative-prompting) | high-value-candidate | 80.57 | 133.57 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 27 | [teleai-uagi/awesome-agent-memory](https://github.com/teleai-uagi/awesome-agent-memory) | high-value-candidate | 80.57 | 133.57 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 28 | [feesuu/cluerag](https://github.com/feesuu/cluerag) | high-value-candidate | 74.52 | 133.52 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 29 | [seetrex-ai/laimark](https://github.com/seetrex-ai/laimark) | high-value-candidate | 74.52 | 133.52 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 30 | [agenttoolkit/altk-evolve](https://github.com/agenttoolkit/altk-evolve) | high-value-candidate | 79.3 | 133.3 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 31 | [ventr1c/memma](https://github.com/ventr1c/memma) | high-value-candidate | 79.3 | 133.3 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 32 | [ilearn-lab/evoharness](https://github.com/ilearn-lab/evoharness) | high-value-candidate | 80.25 | 133.25 | deep-read-needed | deep_report_missing, frontier_queue_missing, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 33 | [bennettschwartz/membrane](https://github.com/bennettschwartz/membrane) | high-value-candidate | 73.89 | 132.89 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 34 | [square-mind/squaremind](https://github.com/square-mind/squaremind) | high-value-candidate | 73.89 | 132.89 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 35 | [mitchellgordon95/dspy](https://github.com/mitchellgordon95/dspy) | high-value-candidate | 68.79 | 132.79 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 36 | [oxen-ai/self-rewarding-language-models](https://github.com/oxen-ai/self-rewarding-language-models) | high-value-candidate | 68.79 | 132.79 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, self_evolution_unclear, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 37 | [feiliu36/eoh](https://github.com/feiliu36/eoh) | high-value-candidate | 78.66 | 132.66 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 38 | [sakanaai/shinkaevolve](https://github.com/sakanaai/shinkaevolve) | high-value-candidate | 78.66 | 132.66 | deep-read-needed | deep_report_missing, frontier_queue_missing, issue_resource_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 39 | [noahshinn024/reflexion-human-eval](https://github.com/noahshinn024/reflexion-human-eval) | high-value-candidate | 79.62 | 132.62 | deep-read-needed | deep_report_missing, frontier_queue_missing, self_evolution_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |
| 40 | [shaoshuai0605/misevolution](https://github.com/shaoshuai0605/misevolution) | high-value-candidate | 79.62 | 132.62 | deep-read-needed | deep_report_missing, frontier_queue_missing, implementation_unclear, evidence_chain_incomplete | clone/read code and create model-card style deep report |

## Trust Chain

- [KNOWN] Input rows come from `data-engine/value-lsh-index/value-matrix.jsonl` generated by `scripts/build_value_lsh_index.mjs`.
- [KNOWN] Repair gaps are derived from existing evidence refs and value tags; this script does not fetch remote GitHub data.
- [INFERRED] Repair score is an action-priority score, not a quality score.
- [UNVERIFIED] Live issue/release/code claims remain unverified until the listed repair action is executed.
