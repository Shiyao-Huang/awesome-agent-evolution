---
repo: bennettschwartz/membrane
url: https://github.com/bennettschwartz/membrane
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - BennettSchwartz/membrane: A selective learning and memory substrate for agentic systems — typed, revisable, decayable memory with competence learning and trust-aware retrieval. · GitHub

**Source**: https://github.com/bennettschwartz/membrane

---

[Skip to content](https://github.com/bennettschwartz/membrane#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[BennettSchwartz](https://github.com/BennettSchwartz)

/
**[membrane](https://github.com/BennettSchwartz/membrane)**

Public

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

- [Notifications](https://github.com/login?return_to=%2FBennettSchwartz%2Fmembrane)You must be signed in to change notification settings
- [Fork
    8](https://github.com/login?return_to=%2FBennettSchwartz%2Fmembrane)
- 
[Star
          93](https://github.com/login?return_to=%2FBennettSchwartz%2Fmembrane)

[https://github.com/BennettSchwartz/membrane](https://github.com/BennettSchwartz/membrane)

[Branches](https://github.com/BennettSchwartz/membrane/branches)[Tags](https://github.com/BennettSchwartz/membrane/tags)

[https://github.com/BennettSchwartz/membrane/branches](https://github.com/BennettSchwartz/membrane/branches)[https://github.com/BennettSchwartz/membrane/tags](https://github.com/BennettSchwartz/membrane/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History148 Commits148 Commits |  |  |  |
| .github | .github |  |  |
| api | api |  |  |
| clients | clients |  |  |
| cmd | cmd |  |  |
| docs | docs |  |  |
| examples/agent-harness | examples/agent-harness |  |  |
| pkg | pkg |  |  |
| src | src |  |  |
| static/img | static/img |  |  |
| tests | tests |  |  |
| tools/eval | tools/eval |  |  |
| .assetsignore | .assetsignore |  |  |
| .coderabbit.yaml | .coderabbit.yaml |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| docusaurus.config.js | docusaurus.config.js |  |  |
| go.mod | go.mod |  |  |
| go.sum | go.sum |  |  |
| package-lock.json | package-lock.json |  |  |
| package.json | package.json |  |  |
| rfc.md | rfc.md |  |  |
| sidebars.js | sidebars.js |  |  |
| wrangler.jsonc | wrangler.jsonc |  |  |
| View all files |  |  |  |

## Repository files navigation

# Membrane

[https://github.com/bennettschwartz/membrane#membrane](https://github.com/bennettschwartz/membrane#membrane)

[https://github.com/BennettSchwartz/membrane/actions/workflows/ci.yml](https://github.com/BennettSchwartz/membrane/actions/workflows/ci.yml)[https://goreportcard.com/report/github.com/BennettSchwartz/membrane](https://goreportcard.com/report/github.com/BennettSchwartz/membrane)[https://pkg.go.dev/github.com/BennettSchwartz/membrane](https://pkg.go.dev/github.com/BennettSchwartz/membrane)[https://github.com/BennettSchwartz/membrane/blob/master/LICENSE](https://github.com/BennettSchwartz/membrane/blob/master/LICENSE)

Membrane is a selective learning and memory substrate for LLM agents. It gives agents typed, revisable memory instead of an append-only transcript or a flat vector store.

Use it when an agent needs to remember facts, retrieve prior context, revise stale knowledge, preserve task state, and cite the records that informed an answer.

## What It Provides

[https://github.com/bennettschwartz/membrane#what-it-provides](https://github.com/bennettschwartz/membrane#what-it-provides)

- **Five memory layers plus entities**: episodic, working, semantic, competence, plan graph, and canonical entity nodes that connect them.
- **Entity-connected retrieval**: `RetrieveGraph` returns ranked records plus bounded graph neighborhoods, not only top-k chunks.
- **Capture-first ingestion**: `CaptureMemory` accepts events, observations, tool outputs, working state, and facts, then creates linked records and edges.
- **Revision operations**: supersede, fork, retract, merge, and contest records with audit trails.
- **Decay and reinforcement**: salience changes over time and can be reinforced or penalized by outcomes.
- **Trust-aware access**: retrieval filters or redacts records using sensitivity, authentication, and scope checks.
- **Multiple runtimes**: run `membraned` over gRPC, use the embedded Go API, or call it from TypeScript/Python SDKs.
- **Self-hosted docs**: docs are Docusaurus-based and deployable to Cloudflare Workers with Wrangler.

## Memory Model

[https://github.com/bennettschwartz/membrane#memory-model](https://github.com/bennettschwartz/membrane#memory-model)

| Layer | Purpose | Typical contents |
|---|---|---|
| Episodic | Raw experience | Tool calls, incidents, observations, agent turns |
| Working | Active task state | Current goal, next actions, open questions |
| Semantic | Durable facts | Preferences, system facts, relationships |
| Competence | Learned procedures | Debugging playbooks, success rates, applicability |
| Plan graph | Reusable plans | Rollout DAGs, checkpoints, dependencies |
| Entity | Graph spine | Projects, services, tools, files, people, databases |

The entity layer is not a replacement for the five memory layers. It is the shared graph layer that lets facts, episodes, procedures, plans, and task state retrieve together.

## Quick Start

[https://github.com/bennettschwartz/membrane#quick-start](https://github.com/bennettschwartz/membrane#quick-start)

### Requirements

[https://github.com/bennettschwartz/membrane#requirements](https://github.com/bennettschwartz/membrane#requirements)

- Go 1.22+
- Make
- Node.js 20+ for the TypeScript SDK, docs, and examples
- Python 3.10+ for the Python SDK
- `protoc` only when regenerating protobuf code

### Build And Run

[https://github.com/bennettschwartz/membrane#build-and-run](https://github.com/bennettschwartz/membrane#build-and-run)

```
git clone https://github.com/BennettSchwartz/membrane.git
cd membrane

make build
./bin/membraned
```

By default, `membraned` uses local SQLite storage. To use Postgres:

```
./bin/membraned \
  --postgres-dsn "postgres://membrane:membrane@localhost:5432/membrane?sslmode=disable"
```

Useful commands:

```
make test                 # Go test suite
make proto                # Regenerate Go protobuf bindings
make ts-build             # Build the TypeScript SDK
make eval-all             # Targeted evaluation suite
```

## TypeScript SDK

[https://github.com/bennettschwartz/membrane#typescript-sdk](https://github.com/bennettschwartz/membrane#typescript-sdk)

```
npm --prefix clients/typescript install
npm --prefix clients/typescript run build
```

```
import {
  MembraneClient,
  MemoryType,
  Sensitivity,
  SourceKind,
} from "@bennettschwartz/membrane";

const client = new MembraneClient("localhost:9090", {
  apiKey: process.env.MEMBRANE_API_KEY,
});

const capture = await client.captureMemory(
  {
    subject: "auth-service",
    predicate: "uses_database",
    object: "PostgreSQL",
  },
  {
    source: "agent",
    sourceKind: SourceKind.OBSERVATION,
    summary: "auth-service uses PostgreSQL",
    tags: ["auth-service", "postgres"],
    scope: "project-orion",
    sensitivity: Sensitivity.LOW,
  },
);

const graph = await client.retrieveGraph("debug auth-service latency", {
  trust: {
    max_sensitivity: Sensitivity.MEDIUM,
    authenticated: true,
    actor_id: "debug-agent",
    scopes: ["project-orion"],
  },
  memoryTypes: [
    MemoryType.ENTITY,
    MemoryType.EPISODIC,
    MemoryType.WORKING,
    MemoryType.SEMANTIC,
    MemoryType.COMPETENCE,
    MemoryType.PLAN_GRAPH,
  ],
  rootLimit: 12,
  nodeLimit: 64,
  edgeLimit: 160,
  maxHops: 2,
});

console.log(capture.primary_record.id, graph.nodes.length);
client.close();
```

See [clients/typescript](https://github.com/BennettSchwartz/membrane/blob/master/clients/typescript) for the full SDK.

## Python SDK

[https://github.com/bennettschwartz/membrane#python-sdk](https://github.com/bennettschwartz/membrane#python-sdk)

```
python -m pip install -e "clients/python[dev]"
python -m pytest clients/python/tests
```

```
from membrane import MembraneClient, MemoryType, Sensitivity, SourceKind

client = MembraneClient("localhost:9090")

capture = client.capture_memory(
    {
        "thread_id": "incident-42",
        "state": "investigating auth-service latency",
        "next_actions": ["check database wait", "hold canary"],
    },
    source="agent",
    source_kind=SourceKind.WORKING_STATE,
    summary="Incident state updated",
    tags=["auth-service", "incident"],
    sensitivity=Sensitivity.LOW,
)

graph = client.retrieve_graph(
    "auth-service canary incident",
    memory_types=[
        MemoryType.ENTITY,
        MemoryType.WORKING,
        MemoryType.SEMANTIC,
        MemoryType.COMPETENCE,
        MemoryType.PLAN_GRAPH,
    ],
)

print(capture.primary_record.id, len(graph.nodes))
client.close()
```

See [clients/python](https://github.com/BennettSchwartz/membrane/blob/master/clients/python) for package details.

## Go Library

[https://github.com/bennettschwartz/membrane#go-library](https://github.com/bennettschwartz/membrane#go-library)

Membrane can also run embedded in a Go process:

```
package main

import (
	"context"
	"log"

	"github.com/BennettSchwartz/membrane/pkg/ingestion"
	"github.com/BennettSchwartz/membrane/pkg/membrane"
	"github.com/BennettSchwartz/membrane/pkg/retrieval"
	"github.com/BennettSchwartz/membrane/pkg/schema"
)

func main() {
	m, err := membrane.New(membrane.DefaultConfig())
	if err != nil {
		log.Fatal(err)
	}
	defer m.Stop()

	ctx := context.Background()
	if err := m.Start(ctx); err != nil {
		log.Fatal(err)
	}

	capture, err := m.CaptureMemory(ctx, ingestion.CaptureMemoryRequest{
		Source:     "agent",
		SourceKind: "observation",
		Content: map[string]any{
			"subject":   "auth-service",
			"predicate": "uses_database",
			"object":    "PostgreSQL",
		},
		Summary: "auth-service uses PostgreSQL",
		Tags:    []string{"auth-service", "postgres"},
	})
	if err != nil {
		log.Fatal(err)
	}

	graph, err := m.RetrieveGraph(ctx, &retrieval.RetrieveGraphRequest{
		TaskDescriptor: "debug auth-service latency",
		Trust: &retrieval.TrustContext{
			MaxSensitivity: schema.SensitivityMedium,
			Authenticated:  true,
		},
		MemoryTypes: []schema.MemoryType{
			schema.MemoryTypeEntity,
			schema.MemoryTypeSemantic,
			schema.MemoryTypeCompetence,
		},
		RootLimit: 10,
		MaxHops:   2,
	})
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("captured=%s graph_nodes=%d", capture.PrimaryRecord.ID, len(graph.Nodes))
}
```

## Documentation

[https://github.com/bennettschwartz/membrane#documentation](https://github.com/bennettschwartz/membrane#documentation)

The docs site lives in [docs](https://github.com/BennettSchwartz/membrane/blob/master/docs), is built with Docusaurus, and is deployed to Cloudflare Workers at [https://membrane.gustycube.com](https://membrane.gustycube.com).

```
npm install
npm run docs:dev
npm run docs:build

# Deploy to Cloudflare Workers when Wrangler is configured
npm run docs:deploy
```

Cloudflare configuration is in [wrangler.jsonc](https://github.com/BennettSchwartz/membrane/blob/master/wrangler.jsonc). The GitHub Actions deploy workflow runs when docs files change and deploys when `CLOUDFLARE_API_TOKEN` is present as a repository secret. The `membrane.gustycube.com` DNS record must be proxied through Cloudflare for the Worker route to receive production traffic. Sidebar and theme configuration live in [sidebars.js](https://github.com/BennettSchwartz/membrane/blob/master/sidebars.js) and [docusaurus.config.js](https://github.com/BennettSchwartz/membrane/blob/master/docusaurus.config.js).

## API Surface

[https://github.com/bennettschwartz/membrane#api-surface](https://github.com/bennettschwartz/membrane#api-surface)

The gRPC API is defined in [api/proto/membrane/v1/membrane.proto](https://github.com/BennettSchwartz/membrane/blob/master/api/proto/membrane/v1/membrane.proto). Core RPCs include:

- `CaptureMemory`
- `RetrieveGraph`
- `RetrieveByID`
- `Supersede`
- `Fork`
- `Retract`
- `Merge`
- `Contest`
- `Reinforce`
- `Penalize`
- `GetMetrics`

Generated Go, TypeScript, and Python bindings are committed so consumers do not need protobuf tooling for normal development.

## Storage And Configuration

[https://github.com/bennettschwartz/membrane#storage-and-configuration](https://github.com/bennettschwartz/membrane#storage-and-configuration)

Membrane supports SQLite for local and embedded use, and Postgres for concurrent deployments. Postgres can optionally use pgvector for embedding-backed ranking.

Common environment variables:

| Variable | Purpose |
|---|---|
| MEMBRANE_API_KEY | Bearer token for gRPC requests |
| MEMBRANE_ENCRYPTION_KEY | SQLCipher encryption key |
| MEMBRANE_POSTGRES_DSN | Postgres connection string |
| MEMBRANE_EMBEDDING_API_KEY | API key for embedding-backed retrieval |
| MEMBRANE_LLM_API_KEY | API key for background semantic extraction |
| MEMBRANE_INGEST_LLM_API_KEY | API key for ingest-time interpretation |

See [docs/guides/configuration.mdx](https://github.com/BennettSchwartz/membrane/blob/master/docs/guides/configuration.mdx) for full configuration details.

## Project Layout

[https://github.com/bennettschwartz/membrane#project-layout](https://github.com/bennettschwartz/membrane#project-layout)

```
