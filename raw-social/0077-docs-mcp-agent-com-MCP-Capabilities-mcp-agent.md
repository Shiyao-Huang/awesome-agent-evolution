# MCP Capabilities - mcp-agent

- URL: https://docs.mcp-agent.com/mcp/overview
- Platform: docs.mcp-agent.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

## MCP Capabilities - mcp-agent

**Source**: https://docs.mcp-agent.com/mcp/overview

---

[Skip to main content](https://docs.mcp-agent.com/mcp/overview#content-area)

Deploy agents, MCP servers and ChatGPT apps to our cloud, [mcp-c](https://docs.mcp-agent.com/cloud/deployment-quickstart)! Free while in Beta.

[mcp-agent home page](https://docs.mcp-agent.com/)

##### 
Get Started

- [Welcome](https://docs.mcp-agent.com/get-started/welcome)
- [Quickstart](https://docs.mcp-agent.com/get-started/quickstart)
- [Installation](https://docs.mcp-agent.com/get-started/install)
- [Cloud](https://docs.mcp-agent.com/get-started/cloud)

##### 
MCP Agent SDK

- [Overview](https://docs.mcp-agent.com/mcp-agent-sdk/overview)
- 
- 
- 
- 

##### 
Deployment

- [Overview](https://docs.mcp-agent.com/cloud/overview)
- [Cloud Quickstart](https://docs.mcp-agent.com/cloud/deployment-quickstart)
- 
- 
- [Observability](https://docs.mcp-agent.com/cloud/observability)
- 

##### 
Test and Evaluate

- [mcp-eval](https://docs.mcp-agent.com/test-evaluate/mcp-eval)
- [Agent Evaluation](https://docs.mcp-agent.com/test-evaluate/agent-evaluation)
- [MCP Server Evaluation](https://docs.mcp-agent.com/test-evaluate/server-evaluation)

##### 
Reference

- [Configuration](https://docs.mcp-agent.com/reference/configuration)
- [CLI Reference](https://docs.mcp-agent.com/reference/cli)
- [Decorators](https://docs.mcp-agent.com/reference/decorators)

- 

Deploy agents, MCP servers and ChatGPT apps to our cloud, [mcp-c](https://docs.mcp-agent.com/cloud/deployment-quickstart)! Free while in Beta.

[mcp-agent home page](https://docs.mcp-agent.com/)

[Documentation](https://docs.mcp-agent.com/get-started/welcome)[Examples](https://github.com/lastmile-ai/mcp-agent/tree/main/examples)[GitHub](https://github.com/lastmile-ai/mcp-agent)[Discord](https://lmai.link/discord/mcp-agent)

[Documentation](https://docs.mcp-agent.com/get-started/welcome)[Examples](https://github.com/lastmile-ai/mcp-agent/tree/main/examples)[GitHub](https://github.com/lastmile-ai/mcp-agent)[Discord](https://lmai.link/discord/mcp-agent)

> ## Documentation Index
> 
> 
> 
> Fetch the complete documentation index at: [https://docs.mcp-agent.com/llms.txt](https://docs.mcp-agent.com/llms.txt)
> 
> 
> 
> Use this file to discover all available pages before exploring further.

## 
[​](https://docs.mcp-agent.com/mcp/overview#what-is-mcp)

What is MCP?

The Model Context Protocol (MCP) is an open standard for exposing tools, data, prompts, and other capabilities to AI applications. If you are new to the protocol, start with:

- [Official MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- [FastMCP documentation](https://gofastmcp.com/getting-started/welcome) for a deeper dive into server/client behavior

mcp-agent treats MCP servers as the “toolbelt” for your agents: they provide the commands and resources that LLMs can invoke. Any MCP client (Claude Desktop, Cursor, VS Code extensions, custom apps) can connect to those same servers—including the ones you expose with mcp-agent.

## 
[​](https://docs.mcp-agent.com/mcp/overview#learn-by-example)

Learn by example

The [examples/mcp](https://github.com/lastmile-ai/mcp-agent/tree/main/examples/mcp) directory contains runnable demonstrations for the major MCP capabilities:

| Example | What it shows | Transport |
|---|---|---|
| mcp/mcp_streamable_http | Connecting to a remote HTTP MCP server with streaming responses | streamable_http |
| mcp/mcp_sse | Subscribing to an SSE MCP server | sse |
| mcp/mcp_websockets | Bi-directional communication over WebSockets | websocket |
| mcp/mcp_elicitation | Using elicitation (interactive prompts) | stdio + elicitation |
| mcp/mcp_prompts_and_resources | Listing and consuming prompts/resources | stdio |
| mcp/mcp_roots | Browsing server roots (filesystem-style access) | stdio |

Each folder includes both the server configuration and client scripts that connect via `gen_client`, making them ideal templates when wiring new transports or capabilities into your own project.

## 
[​](https://docs.mcp-agent.com/mcp/overview#configuring-mcp-servers-in-mcp-agent)

Configuring MCP servers in mcp-agent

Add MCP servers to `mcp_agent.config.yaml`. mcp-agent will automatically launch stdio servers, or connect to remote ones via SSE, WebSocket, or streamable HTTP.

```
mcp:
  servers:
    filesystem:
      command: "npx"
      args: ["-y", "@modelcontextprotocol/server-filesystem", "/data"]

    database:
      command: "python"
      args: ["database_server.py"]
      env:
        DATABASE_URL: "postgresql://localhost/mydb"

    docs_api:
      transport: "streamable_http"
      url: "https://api.example.com/mcp"
      headers:
        Authorization: "Bearer ${API_TOKEN}"
```

Configure secrets in `mcp_agent.secrets.yaml` or environment variables (see [Specify Secrets](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/specify-secrets)) and mcp-agent will merge them automatically at startup.

## 
[​](https://docs.mcp-agent.com/mcp/overview#using-mcp-capabilities-from-an-agent)

Using MCP capabilities from an Agent

Once a server is configured, every attached agent and AugmentedLLM can access its tools, resources, prompts, and roots:

```
from mcp_agent.agents.agent import Agent

agent = Agent(
    name="mcp_demo",
    instruction="Use all available MCP capabilities.",
    server_names=["filesystem", "database", "docs_api"],
)

async with agent:
    tools = await agent.list_tools()
    resources = await agent.list_resources()
    prompts = await agent.list_prompts()
    roots = await agent.list_roots()

    print("Tools:", [t.name for t in tools.tools])
    print("Resources:", [r.uri for r in resources.resources])
    print("Prompts:", [p.name for p in prompts.prompts])
    print("Roots:", [r.uri for r in roots.roots])
```

Key primitives you will use:

- **Tools**: `await agent.call_tool("tool_name", arguments={...})`
- **Resources**: `await agent.list_resources()` / `await agent.read_resource(uri)`
- **Prompts**: `await agent.list_prompts()` / `await agent.get_prompt(name, arguments)`
- **Roots**: `await agent.list_roots()` for filesystem-style exploration
- **Sampling**: Some servers expose `sampling` endpoints; see [examples/mcp/mcp_sampling](https://github.com/lastmile-ai/mcp-agent/tree/main/examples/mcp/mcp_sampling)

## 
[​](https://docs.mcp-agent.com/mcp/overview#connecting-programmatically-gen-client)

Connecting programmatically (`gen_client`)

Use `gen_client` for a lightweight MCP client in Python. The examples above rely on it; here is the minimal template:

```
from mcp_agent.app import MCPApp
from mcp_agent.mcp.gen_client import gen_client

app = MCPApp(name="mcp_client_demo")

async def main():
    async with app.run():
        async with gen_client("filesystem", app.server_registry, context=app.context) as session:
            tools = await session.list_tools()
            print("Tools:", [t.name for t in tools.tools])
```

Swap `"filesystem"` for any server defined in your config. For more advanced patterns (persistent connections, aggregators) see [Connecting to MCP Servers](https://docs.mcp-agent.com/mcp-agent-sdk/core-components/connecting-to-mcp-servers).

## 
[​](https://docs.mcp-agent.com/mcp/overview#authentication-&-security)

Authentication & security

Many MCP servers require authentication—API tokens, OAuth flows, or custom headers. mcp-agent supports:

- Secrets from `mcp_agent.secrets.yaml` or environment variables
- Header-based tokens for remote transports
- Full OAuth flows (loopback, pre-authorised tokens, Redis-backed token storage)

See [Server Authentication](https://docs.mcp-agent.com/mcp-agent-sdk/mcp/server-authentication) for detailed configuration based on the OAuth examples under `examples/basic/oauth_basic_agent` and `examples/oauth`.

## 
[​](https://docs.mcp-agent.com/mcp/overview#additional-resources)

Additional resources

- [Official MCP documentation](https://modelcontextprotocol.io/docs/getting-started/intro)
- [FastMCP docs](https://gofastmcp.com/getting-started/welcome) for implementation details
- [mcp-agent MCP examples](https://github.com/lastmile-ai/mcp-agent/tree/main/examples/mcp) for runnable code

⌘I
