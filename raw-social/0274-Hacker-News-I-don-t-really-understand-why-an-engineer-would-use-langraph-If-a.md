# I don't really understand why an engineer would use langraph. If a ...

- URL: https://news.ycombinator.com/item?id=41203639
- Platform: Hacker News
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "LangGraph"

## Raw Content

## I don't really understand why an engineer would use langraph. If a graph based i... | Hacker News

**Source**: https://news.ycombinator.com/item?id=41203639

---

| Hacker Newsnew | past | comments | ask | show | jobs | submitlogin |  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| peab on Aug 9, 2024  | parent | context | favorite |  on: LangGraph Engineer
I don't really understand why an engineer would use langraph. If a graph based interface for coding was useful, wouldn't they already be used for regular programming? Regular software functions can be viewed as graphs already, what's new about LLMs that make a graph based UI desired? Maybe for really basic no-code programs for non-programmers?
nfcampos on Aug 9, 2024  | next [–]
Langgraph is not a no-code tool for visual programming, it's an implementation of the Pregel algorithm for execution of cyclical computation graphs (ie not DAGs)peab on Aug 9, 2024  | parent | next [–]
Oh I see - that's interesting.Honestly I'm happy to be proven wrong about the usefulness of it.I've used langsmith and found it quite useful. I think I was just so jaded by my bad experience with Langchain, that I'm immediately skeptical of other "lang" products.sbrother on Aug 9, 2024  | root | parent | next [–]
I almost didn't try langgraph because I had similar experiences with langchain. IMO it is a lot better than langchain; its abstractions are lower level and more appropriate at least for the projects I've taken on. I think it's probably the best toolkit with which to prototype an agent-based workflow right now.That being said, it's not doing that much. And you still end up having to use some of langchain's abstractions. If this current "make a cyclical graph of LLM agents that send messages to each other" thing has any staying power than I imagine we'll see a more robust option soon. Personally I'd love a way to build agent graphs in a strongly typed language with first class concurrency.esafak on Aug 9, 2024  | parent | prev | next [–]
What's your opinion of Langgraph, if you're not affiliated with it?nfcampos on Aug 9, 2024  | root | parent | next [–]
I'm one of the authors so my opinion would be biased hakrawczstef on Aug 9, 2024  | parent | prev | next [–]
Really? Can you point to code for that? To me it's just a way to describe a graph and execute it, exactly like https://github.com/dagworks-inc/burr (I'm an author).esafak on Aug 9, 2024  | root | parent | next [–]
https://github.com/langchain-ai/langgraph/tree/main/libs/lan...krawczstef on Aug 10, 2024  | root | parent | next [–]
Wow. Implemented pregel to run a 3 node graph... Jokes aside, that's an interesting thesis to have in there...fsndz on Aug 9, 2024  | prev | next [–]
all that could be implemented simply using instructor: https://www.lycee.ai/courses/a1ba236b-59e8-48e3-8577-a3e7bc6...peab on Aug 9, 2024  | parent | next [–]
I had built out a few util functions for llms using pydantil that I used all the time until I found instructor - it's so simple but so so usefulfsndz on Aug 9, 2024  | root | parent | next [–]
it is really amazing indeed !swyx on Aug 9, 2024  | prev | next [–]
i recently learned that superhuman uses langgraph fwiw https://www.youtube.com/watch?v=Pt3xdZ5vcxEaaronvg on Aug 9, 2024  | prev [–]
One of the issues with LLMs is that each function needs to be tested and observed more thoroughly than regular functions, which leads to these UIs to figure out what the heck is actually going on.For our DSL (BAML https://github.com/BoundaryML/baml ) we found that adding a VSCode playground to visualize LLM function inputs and outputs was a massive win in terms of debuggability and testability, so I can see why langraph is going this way. |  |  | peab on Aug 9, 2024  | parent | context | favorite |  on: LangGraph Engineer
I don't really understand why an engineer would use langraph. If a graph based interface for coding was useful, wouldn't they already be used for regular programming? Regular software functions can be viewed as graphs already, what's new about LLMs that make a graph based UI desired? Maybe for really basic no-code programs for non-programmers? |  |  | nfcampos on Aug 9, 2024  | next [–]
Langgraph is not a no-code tool for visual programming, it's an implementation of the Pregel algorithm for execution of cyclical computation graphs (ie not DAGs) |  |  | nfcampos on Aug 9, 2024  | next [–]
Langgraph is not a no-code tool for visual programming, it's an implementation of the Pregel algorithm for execution of cyclical computation graphs (ie not DAGs) | peab on Aug 9, 2024  | parent | next [–]
Oh I see - that's interesting.Honestly I'm happy to be proven wrong about the usefulness of it.I've used langsmith and found it quite useful. I think I was just so jaded by my bad experience with Langchain, that I'm immediately skeptical of other "lang" products. |  |  | peab on Aug 9, 2024  | parent | next [–]
Oh I see - that's interesting.Honestly I'm happy to be proven wrong about the usefulness of it.I've used langsmith and found it quite useful. I think I was just so jaded by my bad experience with Langchain, that I'm immediately skeptical of other "lang" products. | sbrother on Aug 9, 2024  | root | parent | next [–]
I almost didn't try langgraph because I had similar experiences with langchain. IMO it is a lot better than langchain; its abstractions are lower level and more appropriate at least for the projects I've taken on. I think it's probably the best toolkit with which to prototype an agent-based workflow right now.That being said, it's not doing that much. And you still end up having to use some of langchain's abstractions. If this current "make a cyclical graph of LLM agents that send messages to each other" thing has any staying power than I imagine we'll see a more robust option soon. Personally I'd love a way to build agent graphs in a strongly typed language with first class concurrency. |  |  | sbrother on Aug 9, 2024  | root | parent | next [–]
I almost didn't try langgraph because I had similar experiences with langchain. IMO it is a lot better than langchain; its abstractions are lower level and more appropriate at least for the projects I've taken on. I think it's probably the best toolkit with which to prototype an agent-based workflow right now.That being said, it's not doing that much. And you still end up having to use some of langchain's abstractions. If this current "make a cyclical graph of LLM agents that send messages to each other" thing has any staying power than I imagine we'll see a more robust option soon. Personally I'd love a way to build agent graphs in a strongly typed language with first class concurrency. | esafak on Aug 9, 2024  | parent | prev | next [–]
What's your opinion of Langgraph, if you're not affiliated with it? |  |  | esafak on Aug 9, 2024  | parent | prev | next [–]
What's your opinion of Langgraph, if you're not affiliated with it? | nfcampos on Aug 9, 2024  | root | parent | next [–]
I'm one of the authors so my opinion would be biased ha |  |  | nfcampos on Aug 9, 2024  | root | parent | next [–]
I'm one of the authors so my opinion would be biased ha | krawczstef on Aug 9, 2024  | parent | prev | next [–]
Really? Can you point to code for that? To me it's just a way to describe a graph and execute it, exactly like https://github.com/dagworks-inc/burr (I'm an author). |  |  | krawczstef on Aug 9, 2024  | parent | prev | next [–]
Really? Can you point to code for that? To me it's just a way to describe a graph and execute it, exactly like https://github.com/dagworks-inc/burr (I'm an author). | esafak on Aug 9, 2024  | root | parent | next [–]
https://github.com/langchain-ai/langgraph/tree/main/libs/lan... |  |  | esafak on Aug 9, 2024  | root | parent | next [–]
https://github.com/langchain-ai/langgraph/tree/main/libs/lan... | krawczstef on Aug 10, 2024  | root | parent | next [–]
Wow. Implemented pregel to run a 3 node graph... Jokes aside, that's an interesting thesis to have in there... |  |  | krawczstef on Aug 10, 2024  | root | parent | next [–]
Wow. Implemented pregel to run a 3 node graph... Jokes aside, that's an interesting thesis to have in there... | fsndz on Aug 9, 2024  | prev | next [–]
all that could be implemented simply using instructor: https://www.lycee.ai/courses/a1ba236b-59e8-48e3-8577-a3e7bc6... |  |  | fsndz on Aug 9, 2024  | prev | next [–]
all that could be implemented simply using instructor: https://www.lycee.ai/courses/a1ba236b-59e8-48e3-8577-a3e7bc6... | peab on Aug 9, 2024  | parent | next [–]
I had built out a few util functions for llms using pydantil that I used all the time until I found instructor - it's so simple but so so useful |  |  | peab on Aug 9, 2024  | parent | next [–]
I had built out a few util functions for llms using pydantil that I used all the time until I found instructor - it's so simple but so so useful | fsndz on Aug 9, 2024  | root | parent | next [–]
it is really amazing indeed ! |  |  | fsndz on Aug 9, 2024  | root | parent | next [–]
it is really amazing indeed ! | swyx on Aug 9, 2024  | prev | next [–]
i recently learned that superhuman uses langgraph fwiw https://www.youtube.com/watch?v=Pt3xdZ5vcxE |  |  | swyx on Aug 9, 2024  | prev | next [–]
i recently learned that superhuman uses langgraph fwiw https://www.youtube.com/watch?v=Pt3xdZ5vcxE | aaronvg on Aug 9, 2024  | prev [–]
One of the issues with LLMs is that each function needs to be tested and observed more thoroughly than regular functions, which leads to these UIs to figure out what the heck is actually going on.For our DSL (BAML https://github.com/BoundaryML/baml ) we found that adding a VSCode playground to visualize LLM function inputs and outputs was a massive win in terms of debuggability and testability, so I can see why langraph is going this way. |  |  | aaronvg on Aug 9, 2024  | prev [–]
One of the issues with LLMs is that each function needs to be tested and observed more thoroughly than regular functions, which leads to these UIs to figure out what the heck is actually going on.For our DSL (BAML https://github.com/BoundaryML/baml ) we found that adding a VSCode playground to visualize LLM function inputs and outputs was a massive win in terms of debuggability and testability, so I can see why langraph is going this way. |
|  |  | peab on Aug 9, 2024  | parent | context | favorite |  on: LangGraph Engineer
I don't really understand why an engineer would use langraph. If a graph based interface for coding was useful, wouldn't they already be used for regular programming? Regular software functions can be viewed as graphs already, what's new about LLMs that make a graph based UI desired? Maybe for really basic no-code programs for non-programmers? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| nfcampos on Aug 9, 2024  | next [–]
Langgraph is not a no-code tool for visual programming, it's an implementation of the Pregel algorithm for execution of cyclical computation graphs (ie not DAGs) |  |  | nfcampos on Aug 9, 2024  | next [–]
Langgraph is not a no-code tool for visual programming, it's an implementation of the Pregel algorithm for execution of cyclical computation graphs (ie not DAGs) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | nfcampos on Aug 9, 2024  | next [–]
Langgraph is not a no-code tool for visual programming, it's an implementation of the Pregel algorithm for execution of cyclical computation graphs (ie not DAGs) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| peab on Aug 9, 2024  | parent | next [–]
Oh I see - that's interesting.Honestly I'm happy to be proven wrong about the usefulness of it.I've used langsmith and found it quite useful. I think I was just so jaded by my bad experience with Langchain, that I'm immediately skeptical of other "lang" products. |  |  | peab on Aug 9, 2024  | parent | next [–]
Oh I see - that's interesting.Honestly I'm happy to be proven wrong about the usefulness of it.I've used langsmith and found it quite useful. I think I was just so jaded by my bad experience with Langchain, that I'm immediately skeptical of other "lang" products. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | peab on Aug 9, 2024  | parent | next [–]
Oh I see - that's interesting.Honestly I'm happy to be proven wrong about the usefulness of it.I've used langsmith and found it quite useful. I think I was just so jaded by my bad experience with Langchain, that I'm immediately skeptical of other "lang" products. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| sbrother on Aug 9, 2024  | root | parent | next [–]
I almost didn't try langgraph because I had similar experiences with langchain. IMO it is a lot better than langchain; its abstractions are lower level and more appropriate at least for the projects I've taken on. I think it's probably the best toolkit with which to prototype an agent-based workflow right now.That being said, it's not doing that much. And you still end up having to use some of langchain's abstractions. If this current "make a cyclical graph of LLM agents that send messages to each other" thing has any staying power than I imagine we'll see a more robust option soon. Personally I'd love a way to build agent graphs in a strongly typed language with first class concurrency. |  |  | sbrother on Aug 9, 2024  | root | parent | next [–]
I almost didn't try langgraph because I had similar experiences with langchain. IMO it is a lot better than langchain; its abstractions are lower level and more appropriate at least for the projects I've taken on. I think it's probably the best toolkit with which to prototype an agent-based workflow right now.That being said, it's not doing that much. And you still end up having to use some of langchain's abstractions. If this current "make a cyclical graph of LLM agents that send messages to each other" thing has any staying power than I imagine we'll see a more robust option soon. Personally I'd love a way to build agent graphs in a strongly typed language with first class concurrency. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | sbrother on Aug 9, 2024  | root | parent | next [–]
I almost didn't try langgraph because I had similar experiences with langchain. IMO it is a lot better than langchain; its abstractions are lower level and more appropriate at least for the projects I've taken on. I think it's probably the best toolkit with which to prototype an agent-based workflow right now.That being said, it's not doing that much. And you still end up having to use some of langchain's abstractions. If this current "make a cyclical graph of LLM agents that send messages to each other" thing has any staying power than I imagine we'll see a more robust option soon. Personally I'd love a way to build agent graphs in a strongly typed language with first class concurrency. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| esafak on Aug 9, 2024  | parent | prev | next [–]
What's your opinion of Langgraph, if you're not affiliated with it? |  |  | esafak on Aug 9, 2024  | parent | prev | next [–]
What's your opinion of Langgraph, if you're not affiliated with it? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | esafak on Aug 9, 2024  | parent | prev | next [–]
What's your opinion of Langgraph, if you're not affiliated with it? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| nfcampos on Aug 9, 2024  | root | parent | next [–]
I'm one of the authors so my opinion would be biased ha |  |  | nfcampos on Aug 9, 2024  | root | parent | next [–]
I'm one of the authors so my opinion would be biased ha |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | nfcampos on Aug 9, 2024  | root | parent | next [–]
I'm one of the authors so my opinion would be biased ha |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| krawczstef on Aug 9, 2024  | parent | prev | next [–]
Really? Can you point to code for that? To me it's just a way to describe a graph and execute it, exactly like https://github.com/dagworks-inc/burr (I'm an author). |  |  | krawczstef on Aug 9, 2024  | parent | prev | next [–]
Really? Can you point to code for that? To me it's just a way to describe a graph and execute it, exactly like https://github.com/dagworks-inc/burr (I'm an author). |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | krawczstef on Aug 9, 2024  | parent | prev | next [–]
Really? Can you point to code for that? To me it's just a way to describe a graph and execute it, exactly like https://github.com/dagworks-inc/burr (I'm an author). |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| esafak on Aug 9, 2024  | root | parent | next [–]
https://github.com/langchain-ai/langgraph/tree/main/libs/lan... |  |  | esafak on Aug 9, 2024  | root | parent | next [–]
https://github.com/langchain-ai/langgraph/tree/main/libs/lan... |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | esafak on Aug 9, 2024  | root | parent | next [–]
https://github.com/langchain-ai/langgraph/tree/main/libs/lan... |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| krawczstef on Aug 10, 2024  | root | parent | next [–]
Wow. Implemented pregel to run a 3 node graph... Jokes aside, that's an interesting thesis to have in there... |  |  | krawczstef on Aug 10, 2024  | root | parent | next [–]
Wow. Implemented pregel to run a 3 node graph... Jokes aside, that's an interesting thesis to have in there... |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | krawczstef on Aug 10, 2024  | root | parent | next [–]
Wow. Implemented pregel to run a 3 node graph... Jokes aside, that's an interesting thesis to have in there... |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| fsndz on Aug 9, 2024  | prev | next [–]
all that could be implemented simply using instructor: https://www.lycee.ai/courses/a1ba236b-59e8-48e3-8577-a3e7bc6... |  |  | fsndz on Aug 9, 2024  | prev | next [–]
all that could be implemented simply using instructor: https://www.lycee.ai/courses/a1ba236b-59e8-48e3-8577-a3e7bc6... |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | fsndz on Aug 9, 2024  | prev | next [–]
all that could be implemented simply using instructor: https://www.lycee.ai/courses/a1ba236b-59e8-48e3-8577-a3e7bc6... |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| peab on Aug 9, 2024  | parent | next [–]
I had built out a few util functions for llms using pydantil that I used all the time until I found instructor - it's so simple but so so useful |  |  | peab on Aug 9, 2024  | parent | next [–]
I had built out a few util functions for llms using pydantil that I used all the time until I found instructor - it's so simple but so so useful |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | peab on Aug 9, 2024  | parent | next [–]
I had built out a few util functions for llms using pydantil that I used all the time until I found instructor - it's so simple but so so useful |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| fsndz on Aug 9, 2024  | root | parent | next [–]
it is really amazing indeed ! |  |  | fsndz on Aug 9, 2024  | root | parent | next [–]
it is really amazing indeed ! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | fsndz on Aug 9, 2024  | root | parent | next [–]
it is really amazing indeed ! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| swyx on Aug 9, 2024  | prev | next [–]
i recently learned that superhuman uses langgraph fwiw https://www.youtube.com/watch?v=Pt3xdZ5vcxE |  |  | swyx on Aug 9, 2024  | prev | next [–]
i recently learned that superhuman uses langgraph fwiw https://www.youtube.com/watch?v=Pt3xdZ5vcxE |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | swyx on Aug 9, 2024  | prev | next [–]
i recently learned that superhuman uses langgraph fwiw https://www.youtube.com/watch?v=Pt3xdZ5vcxE |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| aaronvg on Aug 9, 2024  | prev [–]
One of the issues with LLMs is that each function needs to be tested and observed more thoroughly than regular functions, which leads to these UIs to figure out what the heck is actually going on.For our DSL (BAML https://github.com/BoundaryML/baml ) we found that adding a VSCode playground to visualize LLM function inputs and outputs was a massive win in terms of debuggability and testability, so I can see why langraph is going this way. |  |  | aaronvg on Aug 9, 2024  | prev [–]
One of the issues with LLMs is that each function needs to be tested and observed more thoroughly than regular functions, which leads to these UIs to figure out what the heck is actually going on.For our DSL (BAML https://github.com/BoundaryML/baml ) we found that adding a VSCode playground to visualize LLM function inputs and outputs was a massive win in terms of debuggability and testability, so I can see why langraph is going this way. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | aaronvg on Aug 9, 2024  | prev [–]
One of the issues with LLMs is that each function needs to be tested and observed more thoroughly than regular functions, which leads to these UIs to figure out what the heck is actually going on.For our DSL (BAML https://github.com/BoundaryML/baml ) we found that adding a VSCode playground to visualize LLM function inputs and outputs was a massive win in terms of debuggability and testability, so I can see why langraph is going this way. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
Search: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
