# LangGraph: Build Stateful Multi-Agent Systems That Don't Crash

- URL: https://www.mager.co/blog/2026-03-12-langgraph-deep-dive
- Platform: mager.co
- Extraction status: ok
- content_timestamp: 2026-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-03

## Raw Content

## LangGraph: Build Stateful Multi-Agent Systems That Don't Crash

**Source**: https://www.mager.co/blog/2026-03-12-langgraph-deep-dive

---

💻
[<mager.co />](https://www.mager.co)

LangGraph: Build Stateful Multi-Agent Systems That Don't Crash

~/mager.co/tech $ cat article.md

[← mager.co](https://www.mager.co)
/
 March 12, 2026 

# LangGraph: Build Stateful Multi-Agent Systems That Don't Crash

LangGraph is the production framework for complex agent workflows. Here's how to build a real-time chat system with persistent state, human-in-the-loop, and multi-agent orchestration.

AI

Agents

LangGraph

LangChain

TypeScript

React

You've built an agent with `while` loops. It worked... until it didn't. The server restarted and your agent forgot everything. A long-running task timed out and you had to start over. Your "multi-agent system" is actually just three `Promise.all()` calls duct-taped together.

That's where **LangGraph** comes in.

LangGraph isn't a wrapper around an LLM. It's a **stateful orchestration framework** for production-grade agent systems. Built by the LangChain team but fully independent, it's what companies like Klarna, Replit, and Elastic use when they need agents that survive crashes, pause for humans, and orchestrate complex workflows across multiple specialized agents.

This guide goes deep. We'll cover the core concepts, then build a **real-time multi-agent chat system** with persistent state, human approval gates, and a React frontend.

---

## Why LangGraph Exists

The agent landscape is crowded. Most "agent frameworks" are just LLM clients with tool calling. LangGraph is different:

| Feature | Simple Agents | LangGraph |
|---|---|---|
| State | In-memory only | Persistent, typed, checkpointed |
| Flow | Linear chains | Directed graphs with cycles |
| Recovery | Start over on crash | Resume from last checkpoint |
| Human Input | External polling | Built-in interrupt() |
| Multi-agent | Manual coordination | First-class subgraph support |

LangGraph treats your agent as a **state machine**. Nodes are functions. Edges are transitions. State is immutable and checkpointed after every step. This isn't academic — it's the difference between a prototype and production.

---

## Core Concepts

### StateGraph: The Foundation

Everything in LangGraph starts with `StateGraph`. You define a typed state schema, add nodes (functions), and connect them with edges.

```
import { StateGraph, START, END } from "@langchain/langgraph";
import { BaseMessage } from "@langchain/core/messages";

// Define your state shape
interface AgentState {
  messages: BaseMessage[];
  iterationCount: number;
  approved: boolean;
}

// Nodes are just functions that receive state and return updates
async function agentNode(state: AgentState): Promise<Partial<AgentState>> {
  const response = await llm.invoke(state.messages);
  return {
    messages: [...state.messages, response],
    iterationCount: state.iterationCount + 1,
  };
}

async function toolNode(state: AgentState): Promise<Partial<AgentState>> {
  const toolResults = await executeTools(state.messages);
  return { messages: [...state.messages, ...toolResults] };
}

// Build the graph
const graph = new StateGraph<AgentState>({
  channels: {
    messages: { value: (x, y) => x.concat(y), default: () => [] },
    iterationCount: { value: (x, y) => y ?? x, default: () => 0 },
    approved: { value: (x, y) => y ?? x, default: () => false },
  },
});

graph.addNode("agent", agentNode);
graph.addNode("tools", toolNode);

// Conditional routing: did the agent call a tool?
function shouldContinue(state: AgentState): "tools" | "end" {
  const lastMessage = state.messages[state.messages.length - 1];
  if (lastMessage.additional_kwargs?.tool_calls) {
    return "tools";
  }
  return "end";
}

graph.addConditionalEdges("agent", shouldContinue, {
  tools: "tools",
  end: END,
});

graph.addEdge("tools", "agent"); // Loop back
graph.addEdge(START, "agent");

const app = graph.compile();
```

That loop — `agent → tools → agent` — is the ReAct pattern. But now it's explicit, typed, and checkpointed.

### Checkpointing: The Killer Feature

LangGraph's `MemorySaver`, `SqliteSaver`, and `PostgresSaver` persist state after every node. Crash recovery is automatic.

```
import { MemorySaver } from "@langchain/langgraph";

const checkpointer = new MemorySaver();
const app = graph.compile({ checkpointer });

// Each run gets a thread_id — resume with same id after failure
const config = { configurable: { thread_id: "conversation-123" } };
const result = await app.invoke(
  { messages: [new HumanMessage("Hello")] },
  config
);

// Server crashes here? No problem.
// On restart, invoke with same thread_id resumes from last checkpoint
const resumed = await app.invoke(
  { messages: [new HumanMessage("As I was saying...")] },
  config
);
```

This is non-negotiable for long-running tasks. Your agent can run for hours, survive deploys, and resume exactly where it left off.

### Human-in-the-Loop

Pause execution at any node. Wait for human input. Continue.

```
import { interrupt } from "@langchain/langgraph";

async function reviewNode(state: AgentState): Promise<Partial<AgentState>> {
  // This pauses execution and surfaces state to your UI
  const decision = await interrupt({
    message: "Please review the agent's plan",
    plan: state.messages[state.messages.length - 1].content,
    actions: ["approve", "reject", "modify"],
  });
  
  return { approved: decision.action === "approve" };
}

// In your API route or WebSocket handler:
app.addNode("review", reviewNode);
app.addEdge("agent", "review");

// When interrupt fires, store the thread_id and interrupt payload
// Resume later with the human's decision:
await app.invoke(
  { __resume__: { action: "approve" } },
  { configurable: { thread_id: "conversation-123" } }
);
```

This maps to real workflows: content moderation, code review, compliance checks. Not a polling hack — built into the runtime.

---

## Multi-Agent Patterns

LangGraph supports three topologies:

### 1. Supervisor Pattern

A central supervisor routes tasks to specialized workers:

```
interface SupervisorState {
  messages: BaseMessage[];
  nextAgent: string | typeof END;
  taskResults: Record<string, string>;
}

async function supervisor(state: SupervisorState): Promise<Partial<SupervisorState>> {
  const routingPrompt = `Given this task, which agent should handle it?
  - "coder" for code tasks
  - "researcher" for information gathering
  - "FINISH" if complete
  
  Task: ${state.messages[state.messages.length - 1].content}`;
  
  const response = await llm.invoke(routingPrompt);
  return { nextAgent: response.content.trim() };
}

const builder = new StateGraph<SupervisorState>({...});
builder.addNode("supervisor", supervisor);
builder.addNode("coder", codingAgent);
builder.addNode("researcher", researchAgent);

builder.addConditionalEdges("supervisor", (s) => s.nextAgent, {
  coder: "coder",
  researcher: "researcher",
  FINISH: END,
});

// Workers report back to supervisor
builder.addEdge("coder", "supervisor");
builder.addEdge("researcher", "supervisor");
```

### 2. Network Pattern

Agents communicate peer-to-peer. Each decides where to route next.

### 3. Hierarchical

Trees of agents — supervisors managing sub-supervisors managing workers. LangGraph handles recursion via subgraphs.

---

## Building a Multi-Agent Chat System

Let's build something real: a chat system with two specialized agents (coder + researcher) that a supervisor orchestrates. The frontend is React with WebSocket streaming.

### Architecture

```
┌─────────────────┐     WebSocket      ┌──────────────────┐
│   React App     │ ◄────────────────► │  Express Server  │
└─────────────────┘                    └────────┬─────────┘
                                                │
                                        ┌───────┴───────┐
                                        │   Supervisor  │
                                        └───────┬───────┘
                                ┌───────────────┼───────────────┐
                                ▼               ▼               ▼
                          ┌─────────┐    ┌──────────┐    ┌─────────┐
                          │  Coder  │    │Researcher│    │ Human   │
                          └─────────┘    └──────────┘    └─────────┘
```

### Backend: Express + LangGraph

```
// server.ts
import express from "express";
import { WebSocketServer } from "ws";
import { StateGraph, START, END, interrupt } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";
import { MemorySaver } from "@langchain/langgraph";
import { v4 as uuidv4 } from "uuid";

const llm = new ChatOpenAI({ model: "gpt-4", temperature: 0 });

// State definition
interface ChatState {
  messages: (HumanMessage | AIMessage | SystemMessage)[];
  nextAgent: "coder" | "researcher" | "human" | typeof END;
  streaming: boolean;
}

// Supervisor decides which agent handles the next message
async function supervisor(state: ChatState): Promise<Partial<ChatState>> {
  const systemPrompt = `You are a supervisor. Route the user's request to the appropriate agent:
  - "coder": for programming, debugging, code review
  - "researcher": for facts, explanations, research
  - "human": for approval on sensitive operations
  - "END": when the task is complete
  
  Respond with ONLY one word: coder, researcher, human, or END.`;
  
  const routingMessages = [
    new SystemMessage(systemPrompt),
    ...state.messages.slice(-3), // Last 3 messages for context
  ];
  
  const response = await llm.invoke(routingMessages);
  const decision = response.content.toString().trim().toLowerCase();
  
  return { nextAgent: decision as any };
}

// Coder agent with specialized system prompt
async function coderAgent(state: ChatState): Promise<Partial<ChatState>> {
  const systemPrompt = `You are an expert programmer. Write clean, well-commented code. 
  Explain your reasoning. If you see bugs, point them out clearly.`;
  
  const messages = [
    new SystemMessage(systemPrompt),
    ...state.messages,
  ];
  
  const response = await llm.invoke(messages);
  
  return {
    messages: [...state.messages, new AIMessage({
      content: response.content,
      additional_kwargs: { agent: "coder" }
    })],
  };
}

// Researcher agent
async function researcherAgent(state: ChatState): Promise<Partial<ChatState>> {
  const systemPrompt = `You are a research assistant. Provide accurate, well-sourced information.
  If you're uncertain, say so. Break complex topics into digestible explanations.`;
  
  const messages = [
    new SystemMessage(systemPrompt),
    ...state.messages,
  ];
  
  const response = await llm.invoke(messages);
  
  return {
    messages: [...state.messages, new AIMessage({
      content: response.content,
      additional_kwargs: { agent: "researcher" }
    })],
  };
}

// Human approval node
async function humanApproval(state: ChatState): Promise<Partial<ChatState>> {
  const lastMessage = state.messages[state.messages.length - 1];
  
  const decision = await interrupt({
    type: "approval_request",
    message: "The agent wants to execute a potentially sensitive operation",
    content: lastMessage.content,
    options: ["approve", "reject", "modify"],
  });
  
  if (decision.action === "reject") {
    return {
      messages: [...state.messages, new AIMessage({
        content: "Operation rejected by user."
      })],
      nextAgent: END,
    };
  }
  
  return { nextAgent: "supervisor" };
}

// Build the graph
const graph = new StateGraph<ChatState>({
  channels: {
    messages: { value: (x, y) => x.concat(y), default: () => [] },
    nextAgent: { value: (x, y) => y ?? x, default: () => "supervisor" },
    streaming: { value: (x, y) => y ?? x, default: () => false },
  },
});

graph.addNode("supervisor", supervisor);
graph.addNode("coder", coderAgent);
graph.addNode("researcher", researcherAgent);
graph.addNode("human", humanApproval);

// Routing from supervisor
graph.addConditionalEdges("supervisor", (s) => s.nextAgent, {
  coder: "coder",
  researcher: "researcher",
  human: "human",
  END: END,
});

// All workers loop back to supervisor
graph.addEdge("coder", "supervisor");
graph.addEdge("researcher", "supervisor");
graph.addEdge("human", "supervisor");
graph.addEdge(START, "supervisor");

const checkpointer = new MemorySaver();
const app = graph.compile({ checkpointer });

// WebSocket server
const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", (ws) => {
  const threadId = uuidv4();
  
  ws.send(JSON.stringify({
    type: "connected",
    threadId,
  }));
  
  ws.on("message", async (data) => {
    const { message, resume } = JSON.parse(data.toString());
    
    try {
      const config = { configurable: { thread_id: threadId } };
      
      let input;
      if (resume) {
        // Resuming from human approval
        input = { __resume__: resume };
      } else {
        // New message
        input = { messages: [new HumanMessage(message)] };
      }
      
      // Stream the graph execution
      const stream = await app.stream(input, config);
      
      for await (const event of stream) {
        // Send state updates to client
        ws.send(JSON.stringify({
          type: "state_update",
          event: event.event,
          data: event.data,
        }));
        
        // Handle interrupts (human approval)
        if (event.event === "interrupt") {
          ws.send(JSON.stringify({
            type: "awaiting_approval",
            interrupt: event.data,
          }));
          break; // Wait for human response
        }
      }
    } catch (error) {
      ws.send(JSON.stringify({
        type: "error",
        error: error.message,
      }));
    }
  });
});

console.log("WebSocket server running on ws://localhost:3001");
```

### Frontend: React + WebSocket

```
// App.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  agent?: 'coder' | 'researcher' | 'supervisor';
  timestamp: Date;
}

interface ApprovalRequest {
  type: string;
  message: string;
  content: string;
  options: string[];
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [awaitingApproval, setAwaitingApproval] = useState<ApprovalRequest | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001');
    wsRef.current = ws;

    ws.onopen = () => setIsConnected(true);
    ws.onclose = () => setIsConnected(false);
    
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      switch (data.type) {
        case 'connected':
          console.log('Connected with thread:', data.threadId);
          break;
          
        case 'state_update':
          handleStateUpdate(data);
          break;
          
        case 'awaiting_approval':
          setAwaitingApproval(data.interrupt);
          setIsThinking(false);
          break;
          
        case 'error':
          console.error('Server error:', data.error);
          setIsThinking(false);
          break;
      }
    };

    return () => ws.close();
  }, []);

  const handleStateUpdate = useCallback((data: any) => {
    const { event, data: eventData } = data;
    
    // Track agent transitions
    if (event === 'on_chain_start' && eventData.node) {
      if (['coder', 'researcher'].includes(eventData.node)) {
        setIsThinking(true);
      }
    }
    
    // Capture agent responses
    if (event === 'on_chain_end' && eventData.output?.messages) {
      const newMessages = eventData.output.messages;
      const lastMessage = newMessages[newMessages.length - 1];
      
      if (lastMessage._getType() === 'ai') {
        setMessages(prev => {
          // Avoid duplicates
          if (prev.some(m => m.id === lastMessage.id)) return prev;
          
          return [...prev, {
            id: lastMessage.id || Date.now().toString(),
            role: 'assistant',
            content: lastMessage.content,
            agent: lastMessage.additional_kwargs?.agent,
            timestamp: new Date(),
          }];
        });
        setIsThinking(false);
      }
    }
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !wsRef.current) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsThinking(true);
    
    wsRef.current.send(JSON.stringify({ message: input }));
  };

  const handleApproval = (action: string, modification?: string) => {
    if (!wsRef.current) return;
    
    wsRef.current.send(JSON.stringify({
      resume: { action, modification },
    }));
    
    setAwaitingApproval(null);
    setIsThinking(true);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getAgentBadge = (agent?: string) => {
    if (!agent) return null;
    const colors: Record<string, string> = {
      coder: '#3b82f6',
      researcher: '#10b981',
      supervisor: '#8b5cf6',
    };
    return (
      <span 
        className="agent-badge"
        style={{ backgroundColor: colors[agent] || '#6b7280' }}
      >
        {agent}
      </span>
    );
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>Multi-Agent Chat</h1>
        <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
          {isConnected ? '● Connected' : '○ Disconnected'}
        </div>
      </header>

      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.role}`}>
            <div className="message-header">
              {msg.role === 'user' ? 'You' : 'Agent'}
              {getAgentBadge(msg.agent)}
            </div>
            <div className="message-content">{msg.content}</div>
          </div>
        ))}
        
        {isThinking && (
          <div className="thinking-indicator">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {awaitingApproval && (
        <div className="approval-modal">
          <div className="approval-content">
            <h3>⚠️ Approval Required</h3>
            <p>{awaitingApproval.message}</p>
            <div className="approval-preview">
              {awaitingApproval.content.substring(0, 200)}...
            </div>
            <div className="approval-actions">
              <button onClick={() => handleApproval('approve')} className="btn-approve">
                Approve
              </button>
              <button onClick={() => handleApproval('reject')} className="btn-reject">
                Reject
              </button>
              <button onClick={() => handleApproval('modify')} className="btn-modify">
                Request Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask the agents something..."
          disabled={isThinking || !!awaitingApproval}
        />
        <button 
          onClick={sendMessage}
          disabled={isThinking || !!awaitingApproval || !input.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
```

```
/* App.css */
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  margin: 0;
  background: #0f0f0f;
  color: #e0e0e0;
}

.chat-container {
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h1 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.connection-status {
  font-size: 0.875rem;
}

.connection-status.connected {
  color: #10b981;
}

.connection-status.disconnected {
  color: #ef4444;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  max-width: 80%;
  padding: 1rem;
  border-radius: 12px;
}

.message.user {
  align-self: flex-end;
  background: #3b82f6;
  color: white;
}

.message.assistant {
  align-self: flex-start;
  background: #1f1f1f;
  border: 1px solid #333;
}

.message-header {
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
}

.agent-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.message-content {
  line-height: 1.6;
  white-space: pre-wrap;
}

.thinking-indicator {
  align-self: flex-start;
  display: flex;
  gap: 4px;
  padding: 1rem;
}

.thinking-indicator .dot {
  width: 8px;
  height: 8px;
  background: #666;
  border-radius: 50%;
  animation: pulse 1.4s infinite;
}

.thinking-indicator .dot:nth-child(2) {
  animation-delay: 0.2s;
}

.thinking-indicator .dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.approval-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.approval-content {
  background: #1f1f1f;
  border: 1px solid #444;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 500px;
  width: 90%;
}

.approval-content h3 {
  margin: 0 0 1rem;
}

.approval-preview {
  background: #0f0f0f;
  padding: 1rem;
  border-radius: 8px;
  font-family: monospace;
  font-size: 0.875rem;
  margin: 1rem 0;
  max-height: 150px;
  overflow-y: auto;
}

.approval-actions {
  display: flex;
  gap: 0.75rem;
}

.approval-actions button {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: opacity 0.2s;
}

.approval-actions button:hover {
  opacity: 0.9;
}

.btn-approve {
  background: #10b981;
  color: white;
}

.btn-reject {
  background: #ef4444;
  color: white;
}

.btn-modify {
  background: #f59e0b;
  color: white;
}

.input-container {
  padding: 1rem 1.5rem;
  border-top: 1px solid #333;
  display: flex;
  gap: 0.75rem;
}

.input-container input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #444;
  border-radius: 8px;
  background: #1f1f1f;
  color: inherit;
  font-size: 1rem;
}

.input-container input:focus {
  outline: none;
  border-color: #3b82f6;
}

.input-container button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: #3b82f6;
  color: white;
  font-weight: 500;
  cursor: pointer;
}

.input-container button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Running It

```
# Install dependencies
npm install @langchain/langgraph @langchain/openai @langchain/core express ws uuid
npm install -D @types/ws @types/uuid @types/express

# Set your API key
export OPENAI_API_KEY=your-key

# Start the server
npx ts-node server.ts

# In another terminal, start the React app
cd frontend && npm run dev
```

---

## Advanced Patterns

### Streaming with LangGraph

For real-time UIs, use `streamEvents` instead of `invoke`:

```
const eventStream = await app.streamEvents(
  { messages: [new HumanMessage("Hello")] },
  { version: "v2", configurable: { thread_id: "123" } }
);

for await (const event of eventStream) {
  // event.event: "on_llm_stream", "on_chain_start", etc.
  // event.data.chunk: streaming token
  ws.send(JSON.stringify(event));
}
```

This streams LLM tokens as they're generated, not just final responses.

### Subgraphs for Complex Workflows

Break complex agents into subgraphs:

```
// coderSubgraph.ts
const coderGraph = new StateGraph<CoderState>({...})
  .addNode("plan", planningNode)
  .addNode("code", codingNode)
  .addNode("test", testingNode)
  .addEdge(START, "plan")
  .addEdge("plan", "code")
  .addEdge("code", "test")
  .addConditionalEdges("test", shouldFixBugs, { fix: "code", done: END });

// mainGraph.ts
const mainGraph = new StateGraph<MainState>({...})
  .addNode("supervisor", supervisor)
  .addNode("coder_team", coderGraph.compile()) // subgraph!
  .addNode("researcher", researcher)
  .addEdge(START, "supervisor");
```

Each subgraph has its own state schema and checkpointing.

### Persistence with Postgres

For production, swap `MemorySaver` for `PostgresSaver`:

```
import { PostgresSaver } from "@langchain/langgraph-checkpoint-postgres";

const checkpointer = PostgresSaver.fromConnString(
  "postgresql://user:pass@localhost/dbname"
);

const app = graph.compile({ checkpointer });
```

Now state survives server restarts and scales across multiple instances.

---

## When to Use LangGraph

| You Need | Use LangGraph |
|---|---|
| Complex conditional flows | ✅ Graph-based routing |
| Crash recovery | ✅ Checkpointing |
| Human approval gates | ✅ Built-in interrupts |
| Multi-agent orchestration | ✅ Subgraphs + supervisor |
| Long-running tasks | ✅ Persistence |
| Model flexibility | ✅ OpenAI, Anthropic, Gemini, local |
| Simple Q&A chatbot | ❌ Overkill — use direct LLM |
| One-shot code generation | ❌ Claude Agent SDK is faster |

---

## The Bottom Line

LangGraph isn't the fastest way to build an agent. It's the most **robust** way.

When you're prototyping, use whatever gets you there fastest. When you're building production systems that handle real user data, survive crashes, and orchestrate across multiple specialized agents — that's when LangGraph shines.

The graph mental model forces you to think about your agent's state and flow explicitly. That's a feature, not a bug. It catches edge cases before they become outages.

Start with `StateGraph`. Add checkpointing. Build your supervisor. Then watch your agents handle failures, pause for humans, and resume exactly where they left off.

That's production-grade agent infrastructure.

---

**Resources:**

- [LangGraph Docs](https://langchain-ai.github.io/langgraph/)
- [LangSmith (observability)](https://smith.langchain.com)
- [GitHub Examples](https://github.com/langchain-ai/langgraph/tree/main/examples)

Install: `npm install @langchain/langgraph`

$ stat article.md

category
**💻 Tech**

published
** March 12, 2026 **

tags
**AI / Agents / LangGraph / LangChain / TypeScript / React**
