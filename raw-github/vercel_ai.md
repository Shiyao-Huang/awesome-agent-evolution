---
repo: vercel/ai
url: https://github.com/vercel/ai
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - vercel/ai: The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building AI-powered applications and agents · GitHub

**Source**: https://github.com/vercel/ai

---

[Skip to content](https://github.com/vercel/ai#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[vercel](https://github.com/vercel)

/
**[ai](https://github.com/vercel/ai)**

Public

- [Notifications](https://github.com/login?return_to=%2Fvercel%2Fai)You must be signed in to change notification settings
- [Fork
    4.4k](https://github.com/login?return_to=%2Fvercel%2Fai)
- 
[Star
          24.4k](https://github.com/login?return_to=%2Fvercel%2Fai)

[https://github.com/vercel/ai](https://github.com/vercel/ai)

[Branches](https://github.com/vercel/ai/branches)[Tags](https://github.com/vercel/ai/tags)

[https://github.com/vercel/ai/branches](https://github.com/vercel/ai/branches)[https://github.com/vercel/ai/tags](https://github.com/vercel/ai/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History7,012 Commits7,012 Commits |  |  |  |
| .changeset | .changeset |  |  |
| .claude | .claude |  |  |
| .cursor | .cursor |  |  |
| .github | .github |  |  |
| .husky | .husky |  |  |
| .vscode | .vscode |  |  |
| architecture | architecture |  |  |
| assets | assets |  |  |
| content | content |  |  |
| contributing | contributing |  |  |
| examples | examples |  |  |
| packages | packages |  |  |
| skills | skills |  |  |
| tools | tools |  |  |
| .gitignore | .gitignore |  |  |
| .kodiak.toml | .kodiak.toml |  |  |
| .npmrc | .npmrc |  |  |
| .oxfmtrc.jsonc | .oxfmtrc.jsonc |  |  |
| .oxlintrc.json | .oxlintrc.json |  |  |
| AGENTS.md | AGENTS.md |  |  |
| CHANGELOG.md | CHANGELOG.md |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CODE_OF_CONDUCT.md | CODE_OF_CONDUCT.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| package.json | package.json |  |  |
| pnpm-lock.yaml | pnpm-lock.yaml |  |  |
| pnpm-workspace.yaml | pnpm-workspace.yaml |  |  |
| socket.yaml | socket.yaml |  |  |
| tsconfig.json | tsconfig.json |  |  |
| tsconfig.with-examples.json | tsconfig.with-examples.json |  |  |
| turbo.json | turbo.json |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/vercel/ai/blob/HEAD/assets/hero.gif](https://github.com/vercel/ai/blob/HEAD/assets/hero.gif)

# AI SDK

[https://github.com/vercel/ai#ai-sdk](https://github.com/vercel/ai#ai-sdk)

The [AI SDK](https://ai-sdk.dev/docs) is a provider-agnostic TypeScript toolkit designed to help you build AI-powered applications and agents using popular UI frameworks like Next.js, React, Svelte, Vue, Angular, and runtimes like Node.js.

To learn more about how to use the AI SDK, check out our [API Reference](https://ai-sdk.dev/docs/reference) and [Documentation](https://ai-sdk.dev/docs).

## Installation

[https://github.com/vercel/ai#installation](https://github.com/vercel/ai#installation)

You will need Node.js 22+ and npm (or another package manager) installed on your local development machine.

```
npm install ai
```

## Skill for Coding Agents

[https://github.com/vercel/ai#skill-for-coding-agents](https://github.com/vercel/ai#skill-for-coding-agents)

If you use coding agents such as Claude Code or Cursor, we highly recommend adding the AI SDK skill to your repository:

```
npx skills add vercel/ai
```

## Unified Provider Architecture

[https://github.com/vercel/ai#unified-provider-architecture](https://github.com/vercel/ai#unified-provider-architecture)

The AI SDK provides a [unified API](https://ai-sdk.dev/docs/foundations/providers-and-models) to interact with model providers like [OpenAI](https://ai-sdk.dev/providers/ai-sdk-providers/openai), [Anthropic](https://ai-sdk.dev/providers/ai-sdk-providers/anthropic), [Google](https://ai-sdk.dev/providers/ai-sdk-providers/google), and [more](https://ai-sdk.dev/providers/ai-sdk-providers).

By default, the AI SDK uses the [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) to give you access to all major providers out of the box. Just pass a model string for any supported model:

```
const result = await generateText({
  model: 'anthropic/claude-opus-4.6', // or 'openai/gpt-5.4', 'google/gemini-3-flash', etc.
  prompt: 'Hello!',
});
```

You can also connect to providers directly using their SDK packages:

```
npm install @ai-sdk/openai @ai-sdk/anthropic @ai-sdk/google
```

```
import { anthropic } from '@ai-sdk/anthropic';

const result = await generateText({
  model: anthropic('claude-opus-4-6'), // or openai('gpt-5.4'), google('gemini-3-flash'), etc.
  prompt: 'Hello!',
});
```

## Usage

[https://github.com/vercel/ai#usage](https://github.com/vercel/ai#usage)

### Generating Text

[https://github.com/vercel/ai#generating-text](https://github.com/vercel/ai#generating-text)

```
import { generateText } from 'ai';

const { text } = await generateText({
  model: 'openai/gpt-5.4', // use Vercel AI Gateway
  prompt: 'What is an agent?',
});
```

### Generating Structured Data

[https://github.com/vercel/ai#generating-structured-data](https://github.com/vercel/ai#generating-structured-data)

```
import { generateText, Output } from 'ai';
import { z } from 'zod';

const { output } = await generateText({
  model: 'openai/gpt-5.4',
  output: Output.object({
    schema: z.object({
      recipe: z.object({
        name: z.string(),
        ingredients: z.array(
          z.object({ name: z.string(), amount: z.string() }),
        ),
        steps: z.array(z.string()),
      }),
    }),
  }),
  prompt: 'Generate a lasagna recipe.',
});
```

### Agents

[https://github.com/vercel/ai#agents](https://github.com/vercel/ai#agents)

```
import { ToolLoopAgent } from 'ai';

const sandboxAgent = new ToolLoopAgent({
  model: 'openai/gpt-5.4',
  system: 'You are an agent with access to a shell environment.',
  tools: {
    shell: openai.tools.localShell({
      execute: async ({ action }) => {
        const [cmd, ...args] = action.command;
        const sandbox = await getSandbox(); // Vercel Sandbox
        const command = await sandbox.runCommand({ cmd, args });
        return { output: await command.stdout() };
      },
    }),
  },
});
```

### UI Integration

[https://github.com/vercel/ai#ui-integration](https://github.com/vercel/ai#ui-integration)

The [AI SDK UI](https://ai-sdk.dev/docs/ai-sdk-ui/overview) module provides a set of hooks that help you build chatbots and generative user interfaces. These hooks are framework agnostic, so they can be used in Next.js, React, Svelte, and Vue.

You need to install the package for your framework, e.g.:

```
npm install @ai-sdk/react
```

#### Agent @/agent/image-generation-agent.ts

[https://github.com/vercel/ai#agent-agentimage-generation-agentts](https://github.com/vercel/ai#agent-agentimage-generation-agentts)

```
import { openai } from '@ai-sdk/openai';
import { ToolLoopAgent, InferAgentUIMessage } from 'ai';

export const imageGenerationAgent = new ToolLoopAgent({
  model: 'openai/gpt-5.4',
  tools: {
    generateImage: openai.tools.imageGeneration({
      partialImages: 3,
    }),
  },
});

export type ImageGenerationAgentMessage = InferAgentUIMessage<
  typeof imageGenerationAgent
>;
```

#### Route (Next.js App Router) @/app/api/chat/route.ts

[https://github.com/vercel/ai#route-nextjs-app-router-appapichatroutets](https://github.com/vercel/ai#route-nextjs-app-router-appapichatroutets)

```
import { imageGenerationAgent } from '@/agent/image-generation-agent';
import { createAgentUIStreamResponse } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  return createAgentUIStreamResponse({
    agent: imageGenerationAgent,
    messages,
  });
}
```

#### UI Component for Tool @/component/image-generation-view.tsx

[https://github.com/vercel/ai#ui-component-for-tool-componentimage-generation-viewtsx](https://github.com/vercel/ai#ui-component-for-tool-componentimage-generation-viewtsx)

```
import { openai } from '@ai-sdk/openai';
import { UIToolInvocation } from 'ai';

export default function ImageGenerationView({
  invocation,
}: {
  invocation: UIToolInvocation<ReturnType<typeof openai.tools.imageGeneration>>;
}) {
  switch (invocation.state) {
    case 'input-available':
      return <div>Generating image...</div>;
    case 'output-available':
      return <img src={`data:image/png;base64,${invocation.output.result}`} />;
  }
}
```

#### Page @/app/page.tsx

[https://github.com/vercel/ai#page-apppagetsx](https://github.com/vercel/ai#page-apppagetsx)

```
'use client';

import { ImageGenerationAgentMessage } from '@/agent/image-generation-agent';
import ImageGenerationView from '@/component/image-generation-view';
import { useChat } from '@ai-sdk/react';

export default function Page() {
  const { messages, status, sendMessage } =
    useChat<ImageGenerationAgentMessage>();

  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput('');
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

