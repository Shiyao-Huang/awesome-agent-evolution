---
repo: zanwenfu/auto-code-rover
url: https://github.com/zanwenfu/auto-code-rover
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - zanwenfu/auto-code-rover: A project structure aware autonomous software engineer aiming for autonomous program improvement. Resolved 37.3% tasks (pass@1) in SWE-bench lite and 51.6% tasks (pass@3) in SWE-bench verified with each task costs less than $0.7. · GitHub

**Source**: https://github.com/zanwenfu/auto-code-rover

---

[Skip to content](https://github.com/zanwenfu/auto-code-rover#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zanwenfu](https://github.com/zanwenfu)

/
**[auto-code-rover](https://github.com/zanwenfu/auto-code-rover)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzanwenfu%2Fauto-code-rover)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Fzanwenfu%2Fauto-code-rover)
- 
[Star
          0](https://github.com/login?return_to=%2Fzanwenfu%2Fauto-code-rover)

[https://github.com/zanwenfu/auto-code-rover](https://github.com/zanwenfu/auto-code-rover)

[Branches](https://github.com/zanwenfu/auto-code-rover/branches)[Tags](https://github.com/zanwenfu/auto-code-rover/tags)

[https://github.com/zanwenfu/auto-code-rover/branches](https://github.com/zanwenfu/auto-code-rover/branches)[https://github.com/zanwenfu/auto-code-rover/tags](https://github.com/zanwenfu/auto-code-rover/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| app | app |  |  |
| conf | conf |  |  |
| demo_vis | demo_vis |  |  |
| results | results |  |  |
| ACR.py | ACR.py |  |  |
| Dockerfile | Dockerfile |  |  |
| Dockerfile.experiment | Dockerfile.experiment |  |  |
| Dockerfile.minimal | Dockerfile.minimal |  |  |
| Dockerfile.scratch | Dockerfile.scratch |  |  |
| EXPERIMENT.md | EXPERIMENT.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| action.yml | action.yml |  |  |
| environment.windows.yml | environment.windows.yml |  |  |
| environment.yml | environment.yml |  |  |
| preprint.pdf | preprint.pdf |  |  |
| requirements-dev.txt | requirements-dev.txt |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# AutoCodeRover v2 — Interactive

[https://github.com/zanwenfu/auto-code-rover#autocoderover-v2--interactive](https://github.com/zanwenfu/auto-code-rover#autocoderover-v2--interactive)

**Autonomous Program Repair via Iterative Specification Inference, Multi-Agent Orchestration, and Human-in-the-Loop Feedback**

[https://python.org](https://python.org)[https://github.com/zanwenfu/auto-code-rover/blob/main/LICENSE](https://github.com/zanwenfu/auto-code-rover/blob/main/LICENSE)[https://www.swebench.com/](https://www.swebench.com/)[https://doi.org/10.1145/3650212.3680384](https://doi.org/10.1145/3650212.3680384)

AutoCodeRover-Interactive is a fully autonomous software engineering agent that resolves real-world GitHub issues end-to-end — from bug reproduction through fault localization, specification inference, patch generation, review, and self-correction — with optional human feedback at every stage.

**[Paper (ISSTA 2024)](https://doi.org/10.1145/3650212.3680384)** · **[SpecRover (arXiv)](https://arxiv.org/abs/2408.02232)** · **[Sonar Foundation Agent](https://www.sonarsource.com/blog/introducing-sonar-foundation-agent/)**

---

## Highlights

[https://github.com/zanwenfu/auto-code-rover#highlights](https://github.com/zanwenfu/auto-code-rover#highlights)

- **51.6% resolve rate** on SWE-bench Verified (Jan 2025) at **$0.65 per issue** average cost
- **Sequential multi-agent pipeline** with immutable state transitions (functional paradigm)
- **Specification-driven patching** — infers function-level intended behavior to guide code generation
- **Reviewer agent** that cross-validates patches against reproducer tests and issue semantics
- **Self-correction loop** — diagnoses inapplicable patches, identifies the responsible agent, and replays from that stage
- **Interactive replay** — engineers inject feedback at any pipeline stage; the system replays from that point forward
- **8 programming languages** supported via tree-sitter AST-based code search
- **Provider-agnostic model layer** — OpenAI, Anthropic, Google, DeepSeek, AWS Bedrock, OpenRouter, Ollama
- **Acquired by Sonar** — evolved into the Sonar Foundation Agent ([#1 on SWE-bench, 79.2%, Feb 2026](https://www.sonarsource.com/company/press-releases/sonar-claims-top-spot-on-swe-bench-leaderboard/))

---

## Table of Contents

[https://github.com/zanwenfu/auto-code-rover#table-of-contents](https://github.com/zanwenfu/auto-code-rover#table-of-contents)

- [How It Works](https://github.com/zanwenfu/auto-code-rover#how-it-works)
- [System Architecture](https://github.com/zanwenfu/auto-code-rover#system-architecture)
  - [Pipeline Overview](https://github.com/zanwenfu/auto-code-rover#pipeline-overview)
  - [Orchestration Layer](https://github.com/zanwenfu/auto-code-rover#orchestration-layer)
  - [Action / State Machine](https://github.com/zanwenfu/auto-code-rover#action--state-machine)
  - [Agent Layer](https://github.com/zanwenfu/auto-code-rover#agent-layer)
  - [Specification Inference](https://github.com/zanwenfu/auto-code-rover#specification-inference)
  - [Multi-Language Code Search Backend](https://github.com/zanwenfu/auto-code-rover#multi-language-code-search-backend)
  - [Patch Generation & Validation](https://github.com/zanwenfu/auto-code-rover#patch-generation--validation)
  - [Self-Correction Loop](https://github.com/zanwenfu/auto-code-rover#self-correction-loop)
  - [Interactive Replay & Feedback](https://github.com/zanwenfu/auto-code-rover#interactive-replay--feedback)
  - [Model Abstraction Layer](https://github.com/zanwenfu/auto-code-rover#model-abstraction-layer)

- [Getting Started](https://github.com/zanwenfu/auto-code-rover#getting-started)
- [Usage](https://github.com/zanwenfu/auto-code-rover#usage)
- [Advanced Configuration](https://github.com/zanwenfu/auto-code-rover#advanced-configuration)
- [Project Structure](https://github.com/zanwenfu/auto-code-rover#project-structure)
- [Output Artifacts](https://github.com/zanwenfu/auto-code-rover#output-artifacts)
- [License](https://github.com/zanwenfu/auto-code-rover#license)

---

## How It Works

[https://github.com/zanwenfu/auto-code-rover#how-it-works](https://github.com/zanwenfu/auto-code-rover#how-it-works)

Given a bug report (GitHub issue, local file, or SWE-bench task), AutoCodeRover-Interactive autonomously:

1. **Reproduces** the bug — generates a test that triggers the reported failure
2. **Localizes** the fault — LLM-driven structural code search with optional Spectrum-Based Fault Localization (SBFL)
3. **Infers specifications** — extracts function-level intended behavior as natural-language specifications to guide patching
4. **Generates** a patch — dedicated patch-writing agent with iterative refinement
5. **Reviews** the patch — independent reviewer agent cross-validates against the reproducer test, issue statement, and inferred specifications
6. **Self-corrects** — if the patch is inapplicable, a self-fix agent diagnoses the root cause and replays the pipeline from the responsible stage
7. **Selects** the best patch — aggregates candidates across retries, runs regression validation, and selects via majority vote

The **Interactive** variant adds a **human-in-the-loop feedback mechanism**: engineers can inject corrections at the context retrieval or patch generation stages, and the system replays from that point with feedback incorporated into subsequent LLM prompts.

---

## System Architecture

[https://github.com/zanwenfu/auto-code-rover#system-architecture](https://github.com/zanwenfu/auto-code-rover#system-architecture)

### Pipeline Overview

[https://github.com/zanwenfu/auto-code-rover#pipeline-overview](https://github.com/zanwenfu/auto-code-rover#pipeline-overview)

The pipeline executes **sequentially**, not in parallel. Each stage produces an immutable state snapshot that the next stage extends.

```
┌──────────────────────────┐
                        │          INPUT            │
                        │  GitHub Issue | Local File│
                        │  | SWE-bench Task         │
                        └────────────┬─────────────┘
                                     │
                                     ▼
                        ┌──────────────────────────┐
                        │   META-AGENT              │
                        │   (Orchestrator)           │
                        │                            │
                        │   Hardcoded: deterministic │
                        │   sequence of actions      │
                        │   LLM-driven: dynamic      │
                        │   action selection          │
                        └────────────┬─────────────┘
                                     │
              ┌──────────────────────┼── sequential ──────────────────┐
              │                      │                                │
              ▼                      ▼                                ▼
   ┌─────────────────┐   ┌─────────────────┐            ┌──────────────────┐
   │   Reproduce     │   │   SBFL          │            │ Context Retrieval│
   │   Bug           │──▶│   (optional)    │──────────▶ │ + Spec Inference │
   └─────────────────┘   └─────────────────┘            └────────┬─────────┘
                                                                  │
                                                                  ▼
                                                       ┌─────────────────┐
                                                       │   Write Patch   │
                                                       └────────┬────────┘
                                                                 │
                                                                 ▼
                                                       ┌─────────────────┐
                                                       │  Review Patch   │
                                                       └────────┬────────┘
                                                                 │
                                                    ┌────────────┴────────────┐
                                                    │                         │
                                                    ▼                         ▼
                                              patch OK?                 patch failed
                                                    │                         │
                                                    │                         ▼
                                                    │               ┌─────────────────┐
                                                    │               │   Self-Fix      │
                                                    │               │   Agent         │
                                                    │               └────────┬────────┘
                                                    │                        │
                                                    │              diagnose failure,
                                                    │              replay from the
                                                    │              responsible stage
                                                    │                        │
                                                    │                        └──────▶ (loops back to
                                                    │                                  Context Retrieval
                                                    │                                  or Write Patch)
                                                    │
                                                    ▼
                                      ┌──────────────────────────┐
                                      │    Select Patch          │
                                      │    (Best-of-N across     │
                                      │     retry iterations)    │
                                      └────────────┬─────────────┘
                                                   │
                                                   ▼
                                      ┌──────────────────────────┐
                                      │    selected_patch.json   │
                                      └──────────────────────────┘
```

**Key design decisions:**

- The pipeline is **sequential by default** (HardcodedMetaAgent). The LLM-driven MetaAgent variant can dynamically reorder actions but follows the same state contract.
- The Self-Fix Agent is **not a parallel peer** of Write Patch and Review Patch — it is a **recovery loop** triggered only on failure, routing corrective feedback back to the responsible upstream stage.
- Select Patch operates **across retry iterations**, not within a single pass. Multiple Write → Review → Self-Fix cycles produce candidate patches; Select Patch aggregates and picks the best one.

### Orchestration Layer

[https://github.com/zanwenfu/auto-code-rover#orchestration-layer](https://github.com/zanwenfu/auto-code-rover#orchestration-layer)

The system supports two orchestration strategies:

| Strategy | Class | How It Works |
|---|---|---|
| Hardcoded | HardcodedMetaAgent | Executes a deterministic sequence: Reproduce → SBFL → Context Retrieval → Write Patch → Review → Self-Fix. This is the default and most battle-tested mode. |
| LLM-Driven | MetaAgent | An LLM dynamically decides the next action based on accumulated state. Enabled with --enable-meta-agent. More flexible but less predictable. |

Both implement a **Python generator-based coroutine loop** — each action yields its type and receives a state-change description, enabling the orchestrator to make informed decisions about the next step.

### Action / State Machine

[https://github.com/zanwenfu/auto-code-rover#action--state-machine](https://github.com/zanwenfu/auto-code-rover#action--state-machine)

Every pipeline stage is modeled as an **Action** — an immutable, serializable unit of work. Actions consume and produce `ActionState`, a **frozen, slotted dataclass** that captures the full pipeline state. State transitions produce new `ActionState` instances (functional paradigm), ensuring clean reproducibility and enabling deterministic replay.

| Action | Purpose |
|---|---|
| GenerateReproducer | Generates a reproducing test for the bug via the TestAgent. |
| GenerateSBFL | Runs Spectrum-Based Fault Localization to rank suspicious code regions by coverage. |
| ContextRetrieval | Drives the SearchAgent through multi-round conversational code search, collecting buggy locations and function-level specifications. |
| WritePatch | Invokes the PatchAgent to generate a candidate patch from the search context and inferred specifications. Validates diff applicability. |
| ReviewPatch | Cross-validates the patch against the reproducer test using the ReviewerAgent. Produces a binary accept/reject decision with an explanation. |
| SelfFix | Diagnoses why a patch was inapplicable: collects failure reasons → analyzes root cause → identifies the responsible agent → generates corrective feedback → replays from that stage. |
| SelectPatch | Aggregates patches across retries, runs regression validation, and selects the best candidate via LLM-guided majority vote. |
| TerminalExecution | Executes shell commands via an LLM-driven terminal agent for exploratory debugging. |
| FeedbackContext | Re-runs context retrieval with human feedback injected into the LLM prompt. |
| FeedbackPatch | Re-runs patch generation with human feedback injected into the LLM prompt. |

Every action execution is **recorded to JSON** (`recording/*.json`), enabling full deterministic replay and interactive feedback injection at any point.

### Agent Layer

[https://github.com/zanwenfu/auto-code-rover#agent-layer](https://github.com/zanwenfu/auto-code-rover#agent-layer)

Each action delegates to specialized LLM agents:

| Agent | Role |
|---|---|
| SearchFrontend + SearchAgent | Multi-round conversational code search. The LLM issues API-style calls (search_class, search_method, search_code, etc.) that are parsed by a ProxyAgent and dispatched to language-specific SearchBackend implementations. |
| PatchAgent | Generates patches from the search context and inferred specifications. Supports iterative retries with temperature escalation and validates diff applicability before committing. |
| TestAgent | Generates a reproducer test that triggers the reported bug. Validates reproduction by executing the test against the buggy program. Supports feedback-driven refinement. |
| ReviewerAgent | Executes the reproducer test against both the original and patched programs, then asks an LLM to judge correctness of both the patch and the test simultaneously. Produces structured accept/reject decisions with explanations. |
| SelfFixAgent | Analyzes inapplicable patches through a 4-step chain: collect failure reasons → analyze → identify the responsible upstream agent → generate targeted corrective feedback for replay. |
| ProxyAgent | Converts free-form LLM search responses into structured JSON API calls for the search backend. |
| TerminalAgent | Executes shell commands with timeout protection, captures stdout/stderr, and uses an LLM to review results and decide next steps. |
| SelectionAgent | Selects the best patch from multiple candidates by analyzing root causes and comparing candidate approaches against the issue description. |
| TestBlacklistAgent | Identifies irrelevant tests that should be excluded from regression validation. |

All agents use a **`MessageThread` abstraction** for conversation management, supporting serialization, template substitution, and tool-call interleaving.

### Specification Inference

[https://github.com/zanwenfu/auto-code-rover#specification-inference](https://github.com/zanwenfu/auto-code-rover#specification-inference)

A core contribution of the SpecRover extension is **iterative specification inference** — the system doesn't just find buggy code, it infers *why* the code should behave differently.

**Function summaries.** During context retrieval, whenever the `SearchAgent` retrieves a code snippet, it is explicitly prompted to analyze the *intended behavior* of that function in the context of the current issue. These function-level specifications serve as local guides for the `PatchAgent`, decomposing a repository-level issue into smaller, specification-driven function modification tasks.

**Reviewer feedback as meta-specification.** The `ReviewerAgent` produces structured feedback that reconciles the patch, the reproducer test, and the issue statement. This feedback is a reflection on the specifications inferred in previous steps — identifying where the inferred intent and the actual patch diverge. Critically, the reviewer examines both the patch and the test without assuming either is correct, enabling it to reject a faulty test while approving a correct patch.

**Evidence generation.** Along with the final patch, SpecRover outputs: buggy locations with their inferred intended behaviors, the reproducer test, the reviewer's rationale for acceptance/rejection, and the selection agent's reason for choosing the final patch. These artifacts serve as auditable evidence for why a particular fix was selected.

### Multi-Language Code Search Backend

[https://github.com/zanwenfu/auto-code-rover#multi-language-code-search-backend](https://github.com/zanwenfu/auto-code-rover#multi-language-code-search-backend)

The search backend uses **tree-sitter** parsers for language-aware structural code search, indexed at startup for fast lookup:

| Language | Supported Operations |
|---|---|
| Python | Classes, methods, functions, top-level definitions, code snippets |
| Java | Classes, methods, fields, imports |
## gBrain Temporal Metadata

- content_timestamp: 2024
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

