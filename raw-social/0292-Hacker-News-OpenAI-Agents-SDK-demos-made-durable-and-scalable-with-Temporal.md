# OpenAI Agents SDK demos made durable and scalable with Temporal

- URL: https://news.ycombinator.com/item?id=44736713
- Platform: Hacker News
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "OpenAI agents"

## Raw Content

## Show HN: OpenAI Agents SDK demos made durable and scalable with Temporal | Hacker News

**Source**: https://news.ycombinator.com/item?id=44736713

---

| Hacker Newsnew | past | comments | ask | show | jobs | submitlogin |  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Show HN: OpenAI Agents SDK demos made durable and scalable with Temporal (github.com/steveandroulakis)15 points by stevea-temporal 9 months ago  | hide | past | favorite | 2 commentsSteve from Temporal here. Temporal is an MIT open source project for reliable execution at scale. I adapted+extended some of OpenAI's Agents SDK samples to integrate with Temporal.These demo agents can survive process crashes, scale to millions of executions in parallel and have easy-to-implement human interactivity. Just add a couple of Python decorators to your OpenAI agent code, run Temporal workers and you're ready to go.Check the video I did with OpenAI showing this in action (it's linked in the repo).OpenAI actually use us for ChatGPT Images and also their Codex code writing agent so I figure this may be a viable path for others to code something easy that's also reliable at scale.Happy to answer questions.
webchick 9 months ago  [–]
A thing that was interesting in reading through your code and comparing to the original repo's examples (https://github.com/openai/openai-agents-python/tree/main/exa...) is it's really not all that different. Some metadata to denote things as a workflow or activity and some different function calls but otherwise they seem quite similar.g8oz 9 months ago  | parent [–]
Temporal's durable execution is the value add. The decorators that denote workflow or activity let the Temporal engine know they it needs to ensure that those functions get completed in the face of any failures (network, application, process). |  |  | Show HN: OpenAI Agents SDK demos made durable and scalable with Temporal (github.com/steveandroulakis) |  | 15 points by stevea-temporal 9 months ago  | hide | past | favorite | 2 comments |  | Steve from Temporal here. Temporal is an MIT open source project for reliable execution at scale. I adapted+extended some of OpenAI's Agents SDK samples to integrate with Temporal.These demo agents can survive process crashes, scale to millions of executions in parallel and have easy-to-implement human interactivity. Just add a couple of Python decorators to your OpenAI agent code, run Temporal workers and you're ready to go.Check the video I did with OpenAI showing this in action (it's linked in the repo).OpenAI actually use us for ChatGPT Images and also their Codex code writing agent so I figure this may be a viable path for others to code something easy that's also reliable at scale.Happy to answer questions. | webchick 9 months ago  [–]
A thing that was interesting in reading through your code and comparing to the original repo's examples (https://github.com/openai/openai-agents-python/tree/main/exa...) is it's really not all that different. Some metadata to denote things as a workflow or activity and some different function calls but otherwise they seem quite similar. |  |  | webchick 9 months ago  [–]
A thing that was interesting in reading through your code and comparing to the original repo's examples (https://github.com/openai/openai-agents-python/tree/main/exa...) is it's really not all that different. Some metadata to denote things as a workflow or activity and some different function calls but otherwise they seem quite similar. | g8oz 9 months ago  | parent [–]
Temporal's durable execution is the value add. The decorators that denote workflow or activity let the Temporal engine know they it needs to ensure that those functions get completed in the face of any failures (network, application, process). |  |  | g8oz 9 months ago  | parent [–]
Temporal's durable execution is the value add. The decorators that denote workflow or activity let the Temporal engine know they it needs to ensure that those functions get completed in the face of any failures (network, application, process). |
|  |  | Show HN: OpenAI Agents SDK demos made durable and scalable with Temporal (github.com/steveandroulakis) |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 15 points by stevea-temporal 9 months ago  | hide | past | favorite | 2 comments |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Steve from Temporal here. Temporal is an MIT open source project for reliable execution at scale. I adapted+extended some of OpenAI's Agents SDK samples to integrate with Temporal.These demo agents can survive process crashes, scale to millions of executions in parallel and have easy-to-implement human interactivity. Just add a couple of Python decorators to your OpenAI agent code, run Temporal workers and you're ready to go.Check the video I did with OpenAI showing this in action (it's linked in the repo).OpenAI actually use us for ChatGPT Images and also their Codex code writing agent so I figure this may be a viable path for others to code something easy that's also reliable at scale.Happy to answer questions. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| webchick 9 months ago  [–]
A thing that was interesting in reading through your code and comparing to the original repo's examples (https://github.com/openai/openai-agents-python/tree/main/exa...) is it's really not all that different. Some metadata to denote things as a workflow or activity and some different function calls but otherwise they seem quite similar. |  |  | webchick 9 months ago  [–]
A thing that was interesting in reading through your code and comparing to the original repo's examples (https://github.com/openai/openai-agents-python/tree/main/exa...) is it's really not all that different. Some metadata to denote things as a workflow or activity and some different function calls but otherwise they seem quite similar. |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | webchick 9 months ago  [–]
A thing that was interesting in reading through your code and comparing to the original repo's examples (https://github.com/openai/openai-agents-python/tree/main/exa...) is it's really not all that different. Some metadata to denote things as a workflow or activity and some different function calls but otherwise they seem quite similar. |  |  |  |  |  |  |  |  |  |  |  |  |  |
| g8oz 9 months ago  | parent [–]
Temporal's durable execution is the value add. The decorators that denote workflow or activity let the Temporal engine know they it needs to ensure that those functions get completed in the face of any failures (network, application, process). |  |  | g8oz 9 months ago  | parent [–]
Temporal's durable execution is the value add. The decorators that denote workflow or activity let the Temporal engine know they it needs to ensure that those functions get completed in the face of any failures (network, application, process). |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | g8oz 9 months ago  | parent [–]
Temporal's durable execution is the value add. The decorators that denote workflow or activity let the Temporal engine know they it needs to ensure that those functions get completed in the face of any failures (network, application, process). |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
Search: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
