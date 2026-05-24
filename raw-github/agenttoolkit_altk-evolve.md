---
repo: agenttoolkit/altk-evolve
url: https://github.com/agenttoolkit/altk-evolve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - AgentToolkit/altk-evolve: Self improving agents through iterations · GitHub

**Source**: https://github.com/agenttoolkit/altk-evolve

---

[Skip to content](https://github.com/agenttoolkit/altk-evolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[AgentToolkit](https://github.com/AgentToolkit)

/
**[altk-evolve](https://github.com/AgentToolkit/altk-evolve)**

Public

- [Notifications](https://github.com/login?return_to=%2FAgentToolkit%2Faltk-evolve)You must be signed in to change notification settings
- [Fork
    11](https://github.com/login?return_to=%2FAgentToolkit%2Faltk-evolve)
- 
[Star
          85](https://github.com/login?return_to=%2FAgentToolkit%2Faltk-evolve)

[https://github.com/AgentToolkit/altk-evolve](https://github.com/AgentToolkit/altk-evolve)

[Branches](https://github.com/AgentToolkit/altk-evolve/branches)[Tags](https://github.com/AgentToolkit/altk-evolve/tags)

[https://github.com/AgentToolkit/altk-evolve/branches](https://github.com/AgentToolkit/altk-evolve/branches)[https://github.com/AgentToolkit/altk-evolve/tags](https://github.com/AgentToolkit/altk-evolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History208 Commits208 Commits |  |  |  |
| .claude-plugin | .claude-plugin |  |  |
| .github | .github |  |  |
| altk_evolve | altk_evolve |  |  |
| demo | demo |  |  |
| docs | docs |  |  |
| examples/low_code | examples/low_code |  |  |
| explorations/claudecode | explorations/claudecode |  |  |
| platform-integrations | platform-integrations |  |  |
| plugin-source | plugin-source |  |  |
| sandbox | sandbox |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| .python-version | .python-version |  |  |
| .secrets.baseline | .secrets.baseline |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile.core | Dockerfile.core |  |  |
| LICENSE | LICENSE |  |  |
| MANIFEST.in | MANIFEST.in |  |  |
| README.md | README.md |  |  |
| justfile | justfile |  |  |
| mkdocs.yaml | mkdocs.yaml |  |  |
| pyproject.toml | pyproject.toml |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# Evolve: On‑the‑job learning for AI agents

[https://github.com/agenttoolkit/altk-evolve#evolve-onthejob-learning-for-ai-agents](https://github.com/agenttoolkit/altk-evolve#evolve-onthejob-learning-for-ai-agents)

[https://www.python.org/](https://www.python.org/)[https://camo.githubusercontent.com/d2656a901783e71666d7809f3464464fa4464d567a223f27ce4a2b747864f169/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d6163746976652d627269676874677265656e](https://camo.githubusercontent.com/d2656a901783e71666d7809f3464464fa4464d567a223f27ce4a2b747864f169/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d6163746976652d627269676874677265656e)[https://agenttoolkit.github.io/altk-evolve](https://agenttoolkit.github.io/altk-evolve)[https://arxiv.org/pdf/2603.10600](https://arxiv.org/pdf/2603.10600)[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0)[https://camo.githubusercontent.com/832d8f9b9c49e2f0bc9ae61c0557f8a84f9ec08ebce2028d1b43e59881063d4f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f4167656e74546f6f6c6b69742f616c746b2d65766f6c76653f7374796c653d736f6369616c](https://camo.githubusercontent.com/832d8f9b9c49e2f0bc9ae61c0557f8a84f9ec08ebce2028d1b43e59881063d4f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f4167656e74546f6f6c6b69742f616c746b2d65766f6c76653f7374796c653d736f6369616c)

**Blog posts:**[IBM announcement](https://www.ibm.com/new/announcements/altk-evolve-on-the-job-learning-for-ai-agents) | [Hugging Face blog](https://huggingface.co/blog/ibm-research/altk-evolve)

Coding agents repeat the same mistakes because they start fresh every session. Evolve gives agents memory — they learn from what worked and what didn't, so each session is better than the last.

Evolve is a system designed to help agents improve over time by learning from their trajectories. The Lite version is designed to effortlessly slot into existing agent assistants like Claude Code and Codex. It uses a combination of an MCP server for tool integration, vector storage for memory, and LLM-based conflict resolution to refine its knowledge base.

On the AppWorld benchmark, Evolve improved agent reliability by +8.9 points overall, with a 74% relative increase on hard multi-step tasks. Evolve is a system designed to help agents improve over time by learning from their trajectories. It uses a combination of an MCP server for tool integration, vector storage for memory, and LLM-based conflict resolution to refine its knowledge base.

Important

⭐ **Star the repo**: it helps others discover it.

## Quick Start (Lite)

[https://github.com/agenttoolkit/altk-evolve#quick-start-lite](https://github.com/agenttoolkit/altk-evolve#quick-start-lite)

[IBM Bob →](https://agenttoolkit.github.io/altk-evolve/examples/hello_world/bob/)

[Claude Code →](https://agenttoolkit.github.io/altk-evolve/examples/hello_world/claude)

[Codex →](https://agenttoolkit.github.io/altk-evolve/examples/hello_world/codex/)

## Quick Start (Evolve MCP Server)

[https://github.com/agenttoolkit/altk-evolve#quick-start-evolve-mcp-server](https://github.com/agenttoolkit/altk-evolve#quick-start-evolve-mcp-server)

### Installation

[https://github.com/agenttoolkit/altk-evolve#installation](https://github.com/agenttoolkit/altk-evolve#installation)

Prerequisites:

- Python 3.12 or higher
- `uv` (recommended) or `pip`

From Source

```
# Clone the repository and install dependencies
git clone https://github.com/agenttoolkit/altk-evolve.git
cd altk-evolve
uv venv --python=3.12 && source .venv/bin/activate
uv sync
# Build the UI
cd frontend/ui
npm ci && npm run build
cd ../..
```

From PyPI

```
pip install altk-evolve
```

**Optional Backend Dependencies:**

The default filesystem backend uses simple text matching and requires no additional dependencies. For semantic vector similarity search, install one of these backends:

For PostgreSQL with pgvector support (recommended for production):

```
uv sync --extra pgvector
```

For Milvus support (optimized for large-scale vector search):

```
uv sync --extra milvus
```

See the [Backend Configuration Guide](https://github.com/AgentToolkit/altk-evolve/blob/main/docs/guides/backend-configuration.md) for detailed comparison and setup instructions.

### Configuration

[https://github.com/agenttoolkit/altk-evolve#configuration](https://github.com/agenttoolkit/altk-evolve#configuration)

For direct OpenAI usage:

```
export OPENAI_API_KEY=sk-...
```

For LiteLLM proxy usage and model selection (including global fallback via `EVOLVE_MODEL_NAME`), see [the configuration guide](https://github.com/AgentToolkit/altk-evolve/blob/main/docs/guides/configuration.md).

### Running Services

[https://github.com/agenttoolkit/altk-evolve#running-services](https://github.com/agenttoolkit/altk-evolve#running-services)

Start the Web UI and MCP server

```
uv run evolve-mcp
```

The Web UI can be accessed from: `http://127.0.0.1:8000/ui/`

### Starting the Web UI and MCP Server

[https://github.com/agenttoolkit/altk-evolve#starting-the-web-ui-and-mcp-server](https://github.com/agenttoolkit/altk-evolve#starting-the-web-ui-and-mcp-server)

If you only want to access the Web UI and API (without the MCP server stdio blocking the terminal), you can run the FastAPI application directly using `uvicorn`:

```
uv run uvicorn altk_evolve.frontend.mcp.mcp_server:app --host 127.0.0.1 --port 8000
```

Then navigate to `http://127.0.0.1:8000/ui/`.

### Starting only the MCP Server

[https://github.com/agenttoolkit/altk-evolve#starting-only-the-mcp-server](https://github.com/agenttoolkit/altk-evolve#starting-only-the-mcp-server)

If you're attaching Evolve to an MCP client that requires a direct command (like Claude Desktop):

```
uv run evolve-mcp
```

Or for SSE transport:

```
uv run evolve-mcp --transport sse --port 8201
```

Verify it's running:

```
npx @modelcontextprotocol/inspector@latest http://127.0.0.1:8201/sse --cli --method tools/list
```

**Available tools:**

- `get_entities(task: str, entity_type: str = "guideline", include_public: bool = False)`: Get relevant entities for a specific task. Set `include_public=True` to merge in public entities from all other namespaces; those results are annotated with `[public: {owner_id}]`.
- `get_guidelines(task: str)`: Get relevant guidelines for a specific task (backward compatibility alias for `get_entities`).
- `save_trajectory(trajectory_data: str, task_id: str | None, owner_id: str | None)`: Save a conversation trajectory and generate new guidelines.
- `create_entity(content: str, entity_type: str, metadata: str | None, enable_conflict_resolution: bool, owner_id: str | None, visibility: str = "private")`: Create a single entity. Pass `visibility="public"` and `owner_id` to make it immediately discoverable by other namespaces.
- `publish_entity(entity_id: str, user_id: str | None)`: Make an entity publicly visible to all namespaces. Records the caller as owner and stamps `published_at`.
- `unpublish_entity(entity_id: str, user_id: str | None = None)`: Revert an entity to private visibility. Ownership is enforced server-side: if the entity has an `owner_id`, `user_id` must match it.
- `delete_entity(entity_id: str)`: Delete a specific entity by its ID.

### Filter Migration Note

[https://github.com/agenttoolkit/altk-evolve#filter-migration-note](https://github.com/agenttoolkit/altk-evolve#filter-migration-note)

Entity search filters reserve bare keys for top-level schema columns only: `id`, `type`, `content`, and `created_at`.

If you need to filter on JSON metadata, use the `metadata.<key>` form. For example, use `filters={"type": "trajectory", "metadata.task_id": "123"}` instead of `filters={"type": "trajectory", "task_id": "123"}`.

Existing integrations that stored custom fields in entity metadata should update filter writers to add the `metadata.` prefix for those keys.

## Features

[https://github.com/agenttoolkit/altk-evolve#features](https://github.com/agenttoolkit/altk-evolve#features)

- **Proactive**: Learns how to recognize problems and their solutions, and generates guidelines that get automatically applied to new tasks.
- **Conflict Resolution**: Update existing guidelines when new information contradicts them.
- **On Command**: An array of tools to manage guidelines whether in the agent or through a CLI
- **Sharing**: Publish individual entities so other agents can discover and retrieve them across namespaces.

## Architecture

[https://github.com/agenttoolkit/altk-evolve#architecture](https://github.com/agenttoolkit/altk-evolve#architecture)

Evolve is built on a modular architecture which forms a feedback loop, taking conversation traces (trajectories) from an agent, extracting key insights into a database, feeding it back into the agent.

*Lite Mode omits the Interaction layer. All activity is performed in-agent*

[https://github.com/AgentToolkit/altk-evolve/blob/main/docs/assets/architecture-wide-light.svg](https://github.com/AgentToolkit/altk-evolve/blob/main/docs/assets/architecture-wide-light.svg)

## Entity Sharing

[https://github.com/agenttoolkit/altk-evolve#entity-sharing](https://github.com/agenttoolkit/altk-evolve#entity-sharing)

Evolve supports sharing entities across namespaces using a simple public/private visibility model.

**Visibility** is stored in each entity's metadata and is private by default. Existing entities without a `visibility` field are unaffected.

| Metadata field | Description |
|---|---|
| owner_id | User ID who created or last published the entity |
| visibility | "private" (default) or "public" |
| published_at | ISO-8601 timestamp of the most recent publish |

### MCP Tools

[https://github.com/agenttoolkit/altk-evolve#mcp-tools](https://github.com/agenttoolkit/altk-evolve#mcp-tools)

**Publishing an entity:**

```
publish_entity(entity_id="42", user_id="alice")
```

Sets `visibility=public` and records the owner and publish timestamp.

**Unpublishing:**

```
unpublish_entity(entity_id="42", user_id="alice")
```

Reverts the entity to private. The entity stays in its namespace — only its visibility changes.

**Retrieving public entities from all namespaces:**

```
get_entities(task="write safer code", include_public=True)
```

Merges results from the caller's namespace with public entities from all other namespaces. Public results are annotated with `[public: {owner_id}]`.

**Creating an entity with visibility:**

```
create_entity(content="...", entity_type="guideline", visibility="public", owner_id="alice")
```
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

