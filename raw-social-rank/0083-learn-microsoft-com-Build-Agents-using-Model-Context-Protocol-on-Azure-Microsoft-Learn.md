# Build Agents using Model Context Protocol on Azure | Microsoft Learn

- URL: https://learn.microsoft.com/en-us/azure/developer/ai/intro-agents-mcp
- Platform: learn.microsoft.com
- Extraction status: ok
- content_timestamp: 2025-09
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-09
- Query: site:twitter.com "MCP" "AI agent"

## Raw Content

## Build Agents using Model Context Protocol on Azure | Microsoft Learn

**Source**: https://learn.microsoft.com/en-us/azure/developer/ai/intro-agents-mcp

---

Read in English[Edit](https://github.com/MicrosoftDocs/azure-dev-docs/blob/main/articles/ai/intro-agents-mcp.md)

---

---

Note

 Access to this page requires authorization. You can try signing in or changing directories. 

 Access to this page requires authorization. You can try changing directories. 

# Build Agents using Model Context Protocol on Azure

The [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) lets apps provide capabilities and context to a large language model. A key feature of MCP is defining tools that AI agents use to complete tasks. MCP servers can run locally, but remote MCP servers are crucial for sharing tools at cloud scale. The article aims to help developers understand these tools to create innovative solutions.

Developers can use the MCP in two main ways:

- 

**Consume existing MCP servers**: Most developers use existing MCP servers, like the [Azure MCP Server](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/), to build agentic functionality into intelligent apps.

Explore the [OpenAI MCP Agent Building Block AI template](https://aka.ms/mcp/openai), an example of consuming an existing MCP server. This template creates an MCP agent app in .NET that uses Azure OpenAI and connects to a remote MCP server written in TypeScript.

The following diagram shows a simple architecture of the OpenAI MCP Agent Building Block: 
![Diagram showing architecture from MCP client to MCP server.](https://learn.microsoft.com/en-us/azure/developer/ai/media/intro-agents-mcp/openai-mcp-agent-building-block-diagram.png)

- 

**Develop your own MCP server**: Some developers create their own MCP servers to offer custom tools, resources, and prompts for specific needs.

Explore the [MCP Container App Building Block AI template](https://aka.ms/mcp/aca), an example of developing your own MCP server. This template sets up a remote Model Context Protocol (MCP) server using Azure Container Apps.

The following diagram shows a simple architecture of the MCP Container App Building Block: 
![Diagram showing architecture of MCP server.](https://learn.microsoft.com/en-us/azure/developer/ai/media/intro-agents-mcp/mcp-container-app-building-block-diagram.png)

## Consume existing MCP servers

Most developers consume existing MCP clients in an MCP Host and AI agents instead of developing MCP servers from scratch. Your application or GitHub Copilot Agent Mode is the host. The agent component is the part of the application that contains the AI intelligence, while the MCP client component is responsible for MCP server communication.

### How MCP is integrated in your app

- **Host Application**: The overall application (like VS Code, a web app, etc.) 
  - 

The host application is the environment where the MCP client and agent components run. Within the host, two key components interact:

    - 

**Agent Component**: The part that contains the AI intelligence (like GitHub Copilot Agent Mode or a custom agent built with Azure AI Agent Service or another framework).

      - This component is responsible for processing user requests and determining what external capabilities it needs.
      - It can be a separate module or integrated into the host application.
      - It might use AI models to interpret user input and generate responses.
      - The agent component is responsible for managing the flow of information between the user and the MCP client component.

    - 

**MCP Client Component**: The part that implements the MCP protocol.

      - This component is responsible for managing the connection to the MCP server and handling the communication between the agent component and the server.
      - The client can be a separate module or integrated into the host application.
      - The client component is responsible for sending requests to the MCP server and receiving responses.

## Develop your own MCP server

Some developers create their own MCP servers to offer custom tools, resources, and prompts for specific needs. This allows for greater flexibility and control over the capabilities provided to AI agents.

### How MCP servers are integrated in your app

- **MCP Server**: The server that implements the Model Context Protocol 
  - The MCP server is responsible for providing tools, resources, and prompts to the agent component.
  - It can be hosted on Azure or any other cloud platform, or even run locally.
  - The server can be developed using various programming languages and frameworks, depending on the requirements and preferences of the developer.

There are two main scenarios for building your own MCP server:

- 

You build MCP servers that use features from existing MCP servers. In this case, your server calls existing MCP Server tool commands directly.

For example, you can build a custom Cosmos DB MCP server that uses tools from the Azure MCP Server. This scenario lets you create a new server that uses existing features and adds your own custom features.

- 

You build a custom MCP server that offers its own tools, resources, and prompts for your specific needs. This scenario lets you create a custom experience for your users while still using AI.

For example, you can build a custom MCP server that provides tools for managing an in-house inventory system. This server could have tools for searching, adding, and updating inventory items, and resources that give information about the inventory system.

## Related resources

- [Build a TypeScript MCP server using Azure Container Apps](https://learn.microsoft.com/en-us/azure/developer/ai/build-mcp-server-ts)
- [Build a .NET OpenAI Agent using an MCP server on Azure Container Apps](https://learn.microsoft.com/en-us/azure/developer/ai/build-openai-mcp-server-dotnet)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Azure MCP Server](https://learn.microsoft.com/en-us/azure/developer/azure-mcp-server/)
- [Use MCP servers in VS Code (Preview)](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
- [Use MCP servers in Visual Studio (Preview)](https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers)

---

## Feedback

 Was this page helpful? 

No

 Need help with this topic? 

 Want to try using Ask Learn to clarify or guide you through this topic? 

---

##  Additional resources 

---

- 

Last updated on  2025-09-05
