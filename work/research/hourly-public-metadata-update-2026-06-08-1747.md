# Hourly Public Metadata Update

Date: 2026-06-08 17:47 +0800

## One Sentence

This hourly run synchronized the public GitHub metadata packet for five actively surfaced swarm, harness, memory, and benchmark repositories, with explicit freshness boundaries and one canonical-owner correction.

## Three Sentences

1. The largest factual change was `ComposioHQ/agent-orchestrator` redirecting to `AgentWrapper/agent-orchestrator`, so the canonical repo field was updated across raw capture, classification, project card, site project registry, public report, and Mermaid run graph.
2. `desplega-ai/agent-swarm`, `VRSEN/agency-swarm`, `AQ-MedAI/MedMemoryBench`, and `wanxingai/LightAgent` all changed visible public metadata, including release recency, issue/PR counts, commit counts, or even license/fork/star snapshots.
3. Freshness remains public-page scoped rather than GitHub-API verified because shell DNS/API access is blocked and `gh auth` is invalid in this workspace; the run records those limits instead of fabricating API certainty.

## Five-Point Working Principle

1. Read direct user intent and current goal first, not team summaries.
2. Pull live public GitHub evidence when possible, and mark any API/auth failure explicitly.
3. Update `raw-github` first, then propagate canonical repo metadata into classification, project cards, site data, and public reports.
4. Keep a Mermaid object graph and a short learning note as the truth-preserving mirror of the run.
5. Rebuild indexes and public outputs after the facts move, then stage and commit only the iteration-specific files.

## Repo Packet

| Repo | What changed | Public risk |
|---|---|---|
| `AgentWrapper/agent-orchestrator` | canonical owner changed from `ComposioHQ`; stars/forks/issues/PRs/commits moved | redirect could create duplicate old references if not normalized |
| `desplega-ai/agent-swarm` | commits/PRs/releases moved; release date only visible relatively | latest date is conservative, not API exact |
| `VRSEN/agency-swarm` | forks/commits/PRs/releases moved | stars/forks are rounded public-badge values |
| `AQ-MedAI/MedMemoryBench` | stars/forks/commits/license/release snapshot changed sharply | current public footprint is much smaller than prior snapshot |
| `wanxingai/LightAgent` | commits/issues/PRs/releases moved | stars remain rounded from public badge |

## Blockers

- `curl https://api.github.com/...` is not reliable in this workspace because shell network/DNS is blocked.
- `gh auth status` for the default `github.com` account is invalid.
- GitNexus MCP tools are not exposed here; the local `gitnexus` CLI exists but reports a stale index.
- Public copy review gate remains unmet; this run updates evidence surfaces only.
