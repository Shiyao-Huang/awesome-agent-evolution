# Ask HN: What agent frameworks are you using, and how well do they work? | Hacker News

- URL: https://news.ycombinator.com/item?id=46265482
- Platform: Hacker News
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com "LangGraph" "agents"

## Raw Content

## Ask HN: What agent frameworks are you using, and how well do they work? | Hacker News

**Source**: https://news.ycombinator.com/item?id=46265482

---

| Hacker Newsnew | past | comments | ask | show | jobs | submitlogin |  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Ask HN: What agent frameworks are you using, and how well do they work?2 points by istvan_intrnd 5 months ago  | hide | past | favorite | 3 commentsWe’ve built and used our own custom agent framework for a while (before “agents” became a mainstream term), mainly because existing tools didn’t fit our needs around control, observability, and composability.I’m curious what others are actually running in production today—custom frameworks, LangGraph, AutoGen, CrewAI, homegrown pipelines, etc. and how satisfied you are with them.What’s working well? What breaks down at scale (debuggability, cost, determinism, tool orchestration, evals)?
sshadmand 5 months ago  | next [–]
A friend of mine is using N8N a lot, but he isn't a developer and I think that is the main reason. I think LangChain is the most popular, but there is always a trade off between upstart costs, and the cost of forcing a pre-fab to fit your needs as you grow. I personally have used NextJS's AI SDK a a lot since it is very web friendly (nodejs/JS) https://ai-sdk.dev/docs/introduction.walpurginacht 5 months ago  | prev [–]
i'm enjoying langgraph the most, it's got nice integration with langfuse for observability and langchain (despite its shortcomings) with its plethora of integrations makes things easier to do, and the way to define the graph and transitions is pretty intuitivecurrently trying out pydantic's own graph based approach to use together with dspyistvan_intrnd 5 months ago  | parent [–]
I did use langchain in the very early days and was a contributor as well, but I just found myself needing to constantly have to change it for my needs...so that's why I moved away.Do you get into situations like that where the framework just can't serve your needs? if yes, would you please list up a couple. |  |  | Ask HN: What agent frameworks are you using, and how well do they work? |  | 2 points by istvan_intrnd 5 months ago  | hide | past | favorite | 3 comments |  | We’ve built and used our own custom agent framework for a while (before “agents” became a mainstream term), mainly because existing tools didn’t fit our needs around control, observability, and composability.I’m curious what others are actually running in production today—custom frameworks, LangGraph, AutoGen, CrewAI, homegrown pipelines, etc. and how satisfied you are with them.What’s working well? What breaks down at scale (debuggability, cost, determinism, tool orchestration, evals)? | sshadmand 5 months ago  | next [–]
A friend of mine is using N8N a lot, but he isn't a developer and I think that is the main reason. I think LangChain is the most popular, but there is always a trade off between upstart costs, and the cost of forcing a pre-fab to fit your needs as you grow. I personally have used NextJS's AI SDK a a lot since it is very web friendly (nodejs/JS) https://ai-sdk.dev/docs/introduction. |  |  | sshadmand 5 months ago  | next [–]
A friend of mine is using N8N a lot, but he isn't a developer and I think that is the main reason. I think LangChain is the most popular, but there is always a trade off between upstart costs, and the cost of forcing a pre-fab to fit your needs as you grow. I personally have used NextJS's AI SDK a a lot since it is very web friendly (nodejs/JS) https://ai-sdk.dev/docs/introduction. | walpurginacht 5 months ago  | prev [–]
i'm enjoying langgraph the most, it's got nice integration with langfuse for observability and langchain (despite its shortcomings) with its plethora of integrations makes things easier to do, and the way to define the graph and transitions is pretty intuitivecurrently trying out pydantic's own graph based approach to use together with dspy |  |  | walpurginacht 5 months ago  | prev [–]
i'm enjoying langgraph the most, it's got nice integration with langfuse for observability and langchain (despite its shortcomings) with its plethora of integrations makes things easier to do, and the way to define the graph and transitions is pretty intuitivecurrently trying out pydantic's own graph based approach to use together with dspy | istvan_intrnd 5 months ago  | parent [–]
I did use langchain in the very early days and was a contributor as well, but I just found myself needing to constantly have to change it for my needs...so that's why I moved away.Do you get into situations like that where the framework just can't serve your needs? if yes, would you please list up a couple. |  |  | istvan_intrnd 5 months ago  | parent [–]
I did use langchain in the very early days and was a contributor as well, but I just found myself needing to constantly have to change it for my needs...so that's why I moved away.Do you get into situations like that where the framework just can't serve your needs? if yes, would you please list up a couple. |
|  |  | Ask HN: What agent frameworks are you using, and how well do they work? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 2 points by istvan_intrnd 5 months ago  | hide | past | favorite | 3 comments |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | We’ve built and used our own custom agent framework for a while (before “agents” became a mainstream term), mainly because existing tools didn’t fit our needs around control, observability, and composability.I’m curious what others are actually running in production today—custom frameworks, LangGraph, AutoGen, CrewAI, homegrown pipelines, etc. and how satisfied you are with them.What’s working well? What breaks down at scale (debuggability, cost, determinism, tool orchestration, evals)? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| sshadmand 5 months ago  | next [–]
A friend of mine is using N8N a lot, but he isn't a developer and I think that is the main reason. I think LangChain is the most popular, but there is always a trade off between upstart costs, and the cost of forcing a pre-fab to fit your needs as you grow. I personally have used NextJS's AI SDK a a lot since it is very web friendly (nodejs/JS) https://ai-sdk.dev/docs/introduction. |  |  | sshadmand 5 months ago  | next [–]
A friend of mine is using N8N a lot, but he isn't a developer and I think that is the main reason. I think LangChain is the most popular, but there is always a trade off between upstart costs, and the cost of forcing a pre-fab to fit your needs as you grow. I personally have used NextJS's AI SDK a a lot since it is very web friendly (nodejs/JS) https://ai-sdk.dev/docs/introduction. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | sshadmand 5 months ago  | next [–]
A friend of mine is using N8N a lot, but he isn't a developer and I think that is the main reason. I think LangChain is the most popular, but there is always a trade off between upstart costs, and the cost of forcing a pre-fab to fit your needs as you grow. I personally have used NextJS's AI SDK a a lot since it is very web friendly (nodejs/JS) https://ai-sdk.dev/docs/introduction. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| walpurginacht 5 months ago  | prev [–]
i'm enjoying langgraph the most, it's got nice integration with langfuse for observability and langchain (despite its shortcomings) with its plethora of integrations makes things easier to do, and the way to define the graph and transitions is pretty intuitivecurrently trying out pydantic's own graph based approach to use together with dspy |  |  | walpurginacht 5 months ago  | prev [–]
i'm enjoying langgraph the most, it's got nice integration with langfuse for observability and langchain (despite its shortcomings) with its plethora of integrations makes things easier to do, and the way to define the graph and transitions is pretty intuitivecurrently trying out pydantic's own graph based approach to use together with dspy |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | walpurginacht 5 months ago  | prev [–]
i'm enjoying langgraph the most, it's got nice integration with langfuse for observability and langchain (despite its shortcomings) with its plethora of integrations makes things easier to do, and the way to define the graph and transitions is pretty intuitivecurrently trying out pydantic's own graph based approach to use together with dspy |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| istvan_intrnd 5 months ago  | parent [–]
I did use langchain in the very early days and was a contributor as well, but I just found myself needing to constantly have to change it for my needs...so that's why I moved away.Do you get into situations like that where the framework just can't serve your needs? if yes, would you please list up a couple. |  |  | istvan_intrnd 5 months ago  | parent [–]
I did use langchain in the very early days and was a contributor as well, but I just found myself needing to constantly have to change it for my needs...so that's why I moved away.Do you get into situations like that where the framework just can't serve your needs? if yes, would you please list up a couple. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | istvan_intrnd 5 months ago  | parent [–]
I did use langchain in the very early days and was a contributor as well, but I just found myself needing to constantly have to change it for my needs...so that's why I moved away.Do you get into situations like that where the framework just can't serve your needs? if yes, would you please list up a couple. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
Search: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
