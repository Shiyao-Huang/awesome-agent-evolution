---
repo: faveos8758/reflexion-agent-ts
url: https://github.com/faveos8758/reflexion-agent-ts
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - faveos8758/reflexion-agent-ts: Self-improving LLM agent in TypeScript using Reflexion (verbal RL): custom evaluators, reflexion memory, HTTP API, CLI. Built with Vercel AI SDK. · GitHub

**Source**: https://github.com/faveos8758/reflexion-agent-ts

---

[Skip to content](https://github.com/faveos8758/reflexion-agent-ts#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[faveos8758](https://github.com/faveos8758)

/
**[reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts)**

Public

- [Notifications](https://github.com/login?return_to=%2Ffaveos8758%2Freflexion-agent-ts)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Ffaveos8758%2Freflexion-agent-ts)
- 
[Star
          20](https://github.com/login?return_to=%2Ffaveos8758%2Freflexion-agent-ts)

[https://github.com/faveos8758/reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts)

[Branches](https://github.com/faveos8758/reflexion-agent-ts/branches)[Tags](https://github.com/faveos8758/reflexion-agent-ts/tags)

[https://github.com/faveos8758/reflexion-agent-ts/branches](https://github.com/faveos8758/reflexion-agent-ts/branches)[https://github.com/faveos8758/reflexion-agent-ts/tags](https://github.com/faveos8758/reflexion-agent-ts/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History2 Commits2 Commits |  |  |  |
| src | src |  |  |
| tests | tests |  |  |
| .dockerignore | .dockerignore |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| docker-compose.yml | docker-compose.yml |  |  |
| package-lock.json | package-lock.json |  |  |
| package.json | package.json |  |  |
| tsconfig.json | tsconfig.json |  |  |
| vitest.config.ts | vitest.config.ts |  |  |
| View all files |  |  |  |

## Repository files navigation

# reflexion-agent-ts

[https://github.com/faveos8758/reflexion-agent-ts#reflexion-agent-ts](https://github.com/faveos8758/reflexion-agent-ts#reflexion-agent-ts)

**Self-improving TypeScript agent with the Reflexion pattern** — run, fail, reflect, retry, and persist lessons.

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)[https://sdk.vercel.ai/](https://sdk.vercel.ai/)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)[https://nodejs.org/](https://nodejs.org/)

## What is this?

[https://github.com/faveos8758/reflexion-agent-ts#what-is-this](https://github.com/faveos8758/reflexion-agent-ts#what-is-this)

`reflexion-agent-ts` implements the **Reflexion** pattern: an agent that **learns from failed attempts** instead of repeating the same mistakes. It runs a loop of **execute → evaluate → reflect → store feedback → retry** until the evaluator passes or a max attempt count is reached.

- **Execute** — LLM produces an answer for the task.
- **Evaluate** — Your `evaluator` decides pass/fail (rules, tests, or another model).
- **Reflect** — Default reflector asks the model what went wrong; you can plug in your own.
- **Remember** — `InMemoryReflexionMemory` stores feedback and retrieves similar past lessons by **keyword similarity** (no external vector DB required). Implement `ReflexionMemory` yourself to back it with Chroma, pgvector, etc.

## Features

[https://github.com/faveos8758/reflexion-agent-ts#features](https://github.com/faveos8758/reflexion-agent-ts#features)

| Feature | Description |
|---|---|
| Reflexion loop | Configurable maxAttempts, full feedbackHistory in results. |
| Evaluators | createCodeFixEvaluator, createMathEvaluator, createLenientEvaluator, createFlexibleEvaluator (API-friendly). |
| Memory | InMemoryReflexionMemory with saveToFile / loadFromFile for persistence. |
| REST API | GET /health, POST /run on port 3000 (configurable). |
| CLI | Interactive npm run cli with optional success substring. |
| Vercel AI SDK | generateText with OpenAI or OpenAI-compatible endpoints (e.g. Ollama). |

## Installation

[https://github.com/faveos8758/reflexion-agent-ts#installation](https://github.com/faveos8758/reflexion-agent-ts#installation)

```
cd reflexion-agent-ts
npm install
npm run build
```

Requires **Node.js 20+**.

## Environment

[https://github.com/faveos8758/reflexion-agent-ts#environment](https://github.com/faveos8758/reflexion-agent-ts#environment)

Copy `.env.example` to `.env`:

```
OPENAI_API_KEY=sk-...
# Optional OpenAI-compatible API (e.g. Ollama):
# OLLAMA_BASE_URL=http://localhost:11434
PORT=3000
```

If neither `OPENAI_API_KEY` nor `OLLAMA_BASE_URL` is set, the default reflector falls back to a **template** reflector (no extra API call for reflection), which is enough for tests and offline demos.

## Quick start (library)

[https://github.com/faveos8758/reflexion-agent-ts#quick-start-library](https://github.com/faveos8758/reflexion-agent-ts#quick-start-library)

After `npm run build`, import from the compiled output (or add this package as a local/file dependency and use the package name):

```
import { ReflexionAgent, createCodeFixEvaluator } from 'reflexion-agent-ts';

const agent = new ReflexionAgent({
  model: 'openai/gpt-4o-mini',
  task: 'fix-bug',
  maxAttempts: 3,
  evaluator: createCodeFixEvaluator(),
});

const result = await agent.run({
  prompt: 'Fix the bug: function add(a,b) { return a - b; }',
  expected: { fix: '+' },
});

console.log(`Success: ${result.success}, attempts: ${result.attempts}`);
console.log(result.output);
console.log(result.feedbackHistory.join('
'));
```

Runnable examples (configure `.env` first):

```
npm run example:code
npm run example:math
```

## REST API

[https://github.com/faveos8758/reflexion-agent-ts#rest-api](https://github.com/faveos8758/reflexion-agent-ts#rest-api)

```
npm run dev
# or: npm run build && npm start
```

- `GET /health` — returns `ok`.
- `POST /run` — JSON body (paths may include a query string, e.g. `/run?trace=1`; it is ignored for routing):

```
{
  "prompt": "Your task text",
  "task": "optional-task-label",
  "maxAttempts": 3,
  "model": "gpt-4o-mini",
  "expected": { "fix": "+" }
}
```

`expected` is optional. If omitted, the server uses a **lenient** length-based evaluator. If `expected.fix` or `expected.answer` is present, stricter evaluators are used.

`maxAttempts` is optional (default `3`), clamped between **1** and **50** on the server. The `ReflexionAgent` constructor applies the same bounds for programmatic use.

Example:

```
curl -s -X POST http://localhost:3000/run \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Fix the bug: function square(x) { return x * x; }"}'
```

## CLI

[https://github.com/faveos8758/reflexion-agent-ts#cli](https://github.com/faveos8758/reflexion-agent-ts#cli)

```
npm run cli
```

You will be prompted for a task and an optional substring that must appear in the output for success. If you leave the substring empty, success is based on minimum output length.

## How it works

[https://github.com/faveos8758/reflexion-agent-ts#how-it-works](https://github.com/faveos8758/reflexion-agent-ts#how-it-works)

```
Task → Execute (LLM) → Evaluate
              ↑            |
              |           fail
              |            ↓
              |      Reflect + Store in memory
              |            ↓
              └──── Retry with feedback + similar lessons
```

## API reference

[https://github.com/faveos8758/reflexion-agent-ts#api-reference](https://github.com/faveos8758/reflexion-agent-ts#api-reference)

### `ReflexionAgent`

[https://github.com/faveos8758/reflexion-agent-ts#reflexionagent](https://github.com/faveos8758/reflexion-agent-ts#reflexionagent)

- `config.model` — `string` (e.g. `openai/gpt-4o-mini` or `gpt-4o-mini`) or a Vercel AI SDK `LanguageModel`.
- `config.task` — Label used for memory scoping.
- `config.maxAttempts` — Default `3`, clamped to **1–50** (invalid values fall back to `3`). Numeric strings are accepted at runtime.
- `config.evaluator` — `(output, expected?) => Promise<{ passed, reason?, score? }>`.
- `config.reflector` — Optional; default uses `generateText` when an API is configured.
- `config.memory` — Optional; default `InMemoryReflexionMemory`.
- `config.onAttempt` — Called **once per attempt**: on success `(attempt, output)`; on failure after reflection `(attempt, output, feedback)`.
- `config.generateTextOverride` — Optional; bypasses `generateText` (used in tests or custom routing).

### `createReflexionHttpServer`

[https://github.com/faveos8758/reflexion-agent-ts#createreflexionhttpserver](https://github.com/faveos8758/reflexion-agent-ts#createreflexionhttpserver)

- Returns a `node:http``Server` with `GET /health` and `POST /run`. Does not call `.listen()` — safe to import in tests. Use `src/api/server.ts` (or `npm run dev` / `npm start`) for a listening process.

### `ReflexionResult`

[https://github.com/faveos8758/reflexion-agent-ts#reflexionresult](https://github.com/faveos8758/reflexion-agent-ts#reflexionresult)

- `success`, `output`, `attempts`, `feedbackHistory`, optional `finalFeedback` on failure.

### Memory

[https://github.com/faveos8758/reflexion-agent-ts#memory](https://github.com/faveos8758/reflexion-agent-ts#memory)

- `InMemoryReflexionMemory` — `store`, `retrieveSimilar`, `saveToFile`, `loadFromFile`.
- To use **Chroma** or another DB, implement the `ReflexionMemory` interface and pass it in `config.memory`.

## Docker

[https://github.com/faveos8758/reflexion-agent-ts#docker](https://github.com/faveos8758/reflexion-agent-ts#docker)

```
docker compose up --build
```

Ensure `OPENAI_API_KEY` is set in the environment or in a `.env` file used by Compose.

## Testing

[https://github.com/faveos8758/reflexion-agent-ts#testing](https://github.com/faveos8758/reflexion-agent-ts#testing)

```
npm test
npm run test:reflexion
npm run test:memory
npm run test:api
```

`tests/api.test.ts` covers `GET /health`, `POST /run`, validation, query strings on paths, and 404 handling — no live LLM. The full suite (**15 tests**) runs **offline**; no `OPENAI_API_KEY` is required for `npm test`.

## Project layout

[https://github.com/faveos8758/reflexion-agent-ts#project-layout](https://github.com/faveos8758/reflexion-agent-ts#project-layout)

```
src/
  reflexion/          # Core agent, evaluators, reflector, memory
  api/reflexion-api.ts # `createReflexionHttpServer()` — no side effects (embed or test)
  api/server.ts       # Loads `.env` and listens (`npm run dev` / `npm start`; run `npm run build` before `npm start`)
  cli/index.ts        # CLI
  examples/           # Runnable examples (excluded from `tsc` output)
  index.ts            # Library exports (includes `createReflexionHttpServer`)
tests/
```

You can embed the API in your own process with `createReflexionHttpServer()` (also exported from the package root).

## Scripts and paths

[https://github.com/faveos8758/reflexion-agent-ts#scripts-and-paths](https://github.com/faveos8758/reflexion-agent-ts#scripts-and-paths)

If your project directory contains a colon (`:`) in its path, some systems break `PATH` for npm binaries. This repo uses explicit `node ./node_modules/...` paths in `package.json` so `build`, `test`, and `dev` work reliably.

## License

[https://github.com/faveos8758/reflexion-agent-ts#license](https://github.com/faveos8758/reflexion-agent-ts#license)

MIT

## References

[https://github.com/faveos8758/reflexion-agent-ts#references](https://github.com/faveos8758/reflexion-agent-ts#references)

- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366)
- [Vercel AI SDK](https://sdk.vercel.ai/)

## About

         Self-improving LLM agent in TypeScript using Reflexion (verbal RL): custom evaluators, reflexion memory, HTTP API, CLI. Built with Vercel AI SDK.       

### Topics

[typescript](https://github.com/topics/typescript)[reinforcement-learning](https://github.com/topics/reinforcement-learning)[openai](https://github.com/topics/openai)[ai-agents](https://github.com/topics/ai-agents)[reflexion](https://github.com/topics/reflexion)[self-improving](https://github.com/topics/self-improving)[llm](https://github.com/topics/llm)[prompt-engineering](https://github.com/topics/prompt-engineering)[chain-of-thought](https://github.com/topics/chain-of-thought)[ollama](https://github.com/topics/ollama)[vercel-ai-sdk](https://github.com/topics/vercel-ai-sdk)[agentic-ai](https://github.com/topics/agentic-ai)

### Resources

[Readme](https://github.com/faveos8758/reflexion-agent-ts#readme-ov-file)

### License

[MIT license](https://github.com/faveos8758/reflexion-agent-ts#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/faveos8758/reflexion-agent-ts/activity)

### Stars

[20
        stars](https://github.com/faveos8758/reflexion-agent-ts/stargazers)

### Watchers

[0
        watching](https://github.com/faveos8758/reflexion-agent-ts/watchers)

### Forks

[0
        forks](https://github.com/faveos8758/reflexion-agent-ts/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Ffaveos8758%2Freflexion-agent-ts&report=faveos8758+%28user%29)

## [Releases](https://github.com/faveos8758/reflexion-agent-ts/releases)

No releases published

## [Packages
      0](https://github.com/users/faveos8758/packages?repo_name=reflexion-agent-ts)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/faveos8758/reflexion-agent-ts/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [TypeScript
          98.8%](https://github.com/faveos8758/reflexion-agent-ts/search?l=typescript)
- [Dockerfile
          1.2%](https://github.com/faveos8758/reflexion-agent-ts/search?l=dockerfile)

     You can’t perform that action at this time.
