# VoltAgent – Open-Source Observability-First TS AI Agent Framework

- URL: https://news.ycombinator.com/item?id=43888290
- Platform: Hacker News
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:news.ycombinator.com/item "AI agent framework"

## Raw Content

## Show HN: VoltAgent – Open-Source Observability-First TS AI Agent Framework | Hacker News

**Source**: https://news.ycombinator.com/item?id=43888290

---

| Hacker Newsnew | past | comments | ask | show | jobs | submitlogin |  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | Hacker Newsnew | past | comments | ask | show | jobs | submit | login |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Show HN: VoltAgent – Open-Source Observability-First TS AI Agent Framework (github.com/voltagent)32 points by omeraplak on May 4, 2025  | hide | past | favorite | 6 commentsHi HN,I'm founder of VoltAgent, a new open-source TypeScript-based framework for building AI agents.We know there are many frameworks out there. Our short story of why we built VoltAgent goes like this:We were developing an AI application ourselves. Initially, we tried existing frameworks. We also explored different flows using no-code tools.We noticed something interesting: the visual approach of tools like n8n made AI workflows much clearer and easier to understand. Building flows visually was neat and provided great visibility.However, we quickly ran into problems with no-code tools: we felt locked in by their limitations, particularly the inability to customize deeply or integrate custom code the way we wanted. So, we returned to framework solutions.While frameworks gave us code control, we missed the clear visibility that visual tools provided. To achieve observability, we integrated standard AIOps tools (like LangFuse and LangSmith), but they didn't quite replicate the step-by-step execution clarity we'd seen in tools like n8n for understanding the flow itself.This gap led us to build VoltAgent for our own use. We shared it with developers in our network, received positive feedback, and decided to release it open-source.What VoltAgent Offers:- Core Building Blocks: It provides essential components for agents like tools, memory management, and state handling out-of-the-box. It's also LLM agnostic and supports multi-agent setups.- Visual Debugging Console: This is a key feature we built to address the visibility problem. You can connect it locally to your running agent (your data stays on your machine) to visually trace how the agent thinks step-by-step. You can inspect messages and see the execution flow, similar to how visual tools like n8n show workflows, but designed specifically for debugging agent execution written in code.You can find the code and documentation here:
https://github.com/voltagent/voltagentWe're actively developing VoltAgent, and our public roadmap is available here:
https://github.com/orgs/VoltAgent/projects/1We'd love to hear your feedback, suggestions, or any questions you might have.
yigitkonur35 on May 5, 2025  | next [–]
finally someone has made something like n8n that’s easy to observe but also offers coding flexibility, i was just about to dive into making an agent with a prompt chain that generates workflows on n8n when i found you. if llms.txt becomes a bit more practical, it’s written simply enough to have the potential to go from prompt to agent. shadcn level simplicity for writing agent is needed. if the right decisions are made, this product may be the new toolkit of the market is looking for.omeraplak on May 5, 2025  | parent | next [–]
Wow, thank you for this thoughtful message. You really got what we’re trying to build. We’re pushing hard to bring shadcn-level simplicity to agents. Your feedback means a lot!jerryseff on May 4, 2025  | prev | next [–]
This is awesome!omeraplak on May 4, 2025  | parent | next [–]
Thank you! Really appreciate it. Let us know if you try it out.sakalsiz on May 5, 2025  | prev [–]
The UI is sick.omeraplak on May 5, 2025  | parent [–]
Thanks!! We spent a lot of time on the details. Glad you liked it |  |  | Show HN: VoltAgent – Open-Source Observability-First TS AI Agent Framework (github.com/voltagent) |  | 32 points by omeraplak on May 4, 2025  | hide | past | favorite | 6 comments |  | Hi HN,I'm founder of VoltAgent, a new open-source TypeScript-based framework for building AI agents.We know there are many frameworks out there. Our short story of why we built VoltAgent goes like this:We were developing an AI application ourselves. Initially, we tried existing frameworks. We also explored different flows using no-code tools.We noticed something interesting: the visual approach of tools like n8n made AI workflows much clearer and easier to understand. Building flows visually was neat and provided great visibility.However, we quickly ran into problems with no-code tools: we felt locked in by their limitations, particularly the inability to customize deeply or integrate custom code the way we wanted. So, we returned to framework solutions.While frameworks gave us code control, we missed the clear visibility that visual tools provided. To achieve observability, we integrated standard AIOps tools (like LangFuse and LangSmith), but they didn't quite replicate the step-by-step execution clarity we'd seen in tools like n8n for understanding the flow itself.This gap led us to build VoltAgent for our own use. We shared it with developers in our network, received positive feedback, and decided to release it open-source.What VoltAgent Offers:- Core Building Blocks: It provides essential components for agents like tools, memory management, and state handling out-of-the-box. It's also LLM agnostic and supports multi-agent setups.- Visual Debugging Console: This is a key feature we built to address the visibility problem. You can connect it locally to your running agent (your data stays on your machine) to visually trace how the agent thinks step-by-step. You can inspect messages and see the execution flow, similar to how visual tools like n8n show workflows, but designed specifically for debugging agent execution written in code.You can find the code and documentation here:
https://github.com/voltagent/voltagentWe're actively developing VoltAgent, and our public roadmap is available here:
https://github.com/orgs/VoltAgent/projects/1We'd love to hear your feedback, suggestions, or any questions you might have. | yigitkonur35 on May 5, 2025  | next [–]
finally someone has made something like n8n that’s easy to observe but also offers coding flexibility, i was just about to dive into making an agent with a prompt chain that generates workflows on n8n when i found you. if llms.txt becomes a bit more practical, it’s written simply enough to have the potential to go from prompt to agent. shadcn level simplicity for writing agent is needed. if the right decisions are made, this product may be the new toolkit of the market is looking for. |  |  | yigitkonur35 on May 5, 2025  | next [–]
finally someone has made something like n8n that’s easy to observe but also offers coding flexibility, i was just about to dive into making an agent with a prompt chain that generates workflows on n8n when i found you. if llms.txt becomes a bit more practical, it’s written simply enough to have the potential to go from prompt to agent. shadcn level simplicity for writing agent is needed. if the right decisions are made, this product may be the new toolkit of the market is looking for. | omeraplak on May 5, 2025  | parent | next [–]
Wow, thank you for this thoughtful message. You really got what we’re trying to build. We’re pushing hard to bring shadcn-level simplicity to agents. Your feedback means a lot! |  |  | omeraplak on May 5, 2025  | parent | next [–]
Wow, thank you for this thoughtful message. You really got what we’re trying to build. We’re pushing hard to bring shadcn-level simplicity to agents. Your feedback means a lot! | jerryseff on May 4, 2025  | prev | next [–]
This is awesome! |  |  | jerryseff on May 4, 2025  | prev | next [–]
This is awesome! | omeraplak on May 4, 2025  | parent | next [–]
Thank you! Really appreciate it. Let us know if you try it out. |  |  | omeraplak on May 4, 2025  | parent | next [–]
Thank you! Really appreciate it. Let us know if you try it out. | sakalsiz on May 5, 2025  | prev [–]
The UI is sick. |  |  | sakalsiz on May 5, 2025  | prev [–]
The UI is sick. | omeraplak on May 5, 2025  | parent [–]
Thanks!! We spent a lot of time on the details. Glad you liked it |  |  | omeraplak on May 5, 2025  | parent [–]
Thanks!! We spent a lot of time on the details. Glad you liked it |
|  |  | Show HN: VoltAgent – Open-Source Observability-First TS AI Agent Framework (github.com/voltagent) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | 32 points by omeraplak on May 4, 2025  | hide | past | favorite | 6 comments |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  | Hi HN,I'm founder of VoltAgent, a new open-source TypeScript-based framework for building AI agents.We know there are many frameworks out there. Our short story of why we built VoltAgent goes like this:We were developing an AI application ourselves. Initially, we tried existing frameworks. We also explored different flows using no-code tools.We noticed something interesting: the visual approach of tools like n8n made AI workflows much clearer and easier to understand. Building flows visually was neat and provided great visibility.However, we quickly ran into problems with no-code tools: we felt locked in by their limitations, particularly the inability to customize deeply or integrate custom code the way we wanted. So, we returned to framework solutions.While frameworks gave us code control, we missed the clear visibility that visual tools provided. To achieve observability, we integrated standard AIOps tools (like LangFuse and LangSmith), but they didn't quite replicate the step-by-step execution clarity we'd seen in tools like n8n for understanding the flow itself.This gap led us to build VoltAgent for our own use. We shared it with developers in our network, received positive feedback, and decided to release it open-source.What VoltAgent Offers:- Core Building Blocks: It provides essential components for agents like tools, memory management, and state handling out-of-the-box. It's also LLM agnostic and supports multi-agent setups.- Visual Debugging Console: This is a key feature we built to address the visibility problem. You can connect it locally to your running agent (your data stays on your machine) to visually trace how the agent thinks step-by-step. You can inspect messages and see the execution flow, similar to how visual tools like n8n show workflows, but designed specifically for debugging agent execution written in code.You can find the code and documentation here:
https://github.com/voltagent/voltagentWe're actively developing VoltAgent, and our public roadmap is available here:
https://github.com/orgs/VoltAgent/projects/1We'd love to hear your feedback, suggestions, or any questions you might have. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| yigitkonur35 on May 5, 2025  | next [–]
finally someone has made something like n8n that’s easy to observe but also offers coding flexibility, i was just about to dive into making an agent with a prompt chain that generates workflows on n8n when i found you. if llms.txt becomes a bit more practical, it’s written simply enough to have the potential to go from prompt to agent. shadcn level simplicity for writing agent is needed. if the right decisions are made, this product may be the new toolkit of the market is looking for. |  |  | yigitkonur35 on May 5, 2025  | next [–]
finally someone has made something like n8n that’s easy to observe but also offers coding flexibility, i was just about to dive into making an agent with a prompt chain that generates workflows on n8n when i found you. if llms.txt becomes a bit more practical, it’s written simply enough to have the potential to go from prompt to agent. shadcn level simplicity for writing agent is needed. if the right decisions are made, this product may be the new toolkit of the market is looking for. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | yigitkonur35 on May 5, 2025  | next [–]
finally someone has made something like n8n that’s easy to observe but also offers coding flexibility, i was just about to dive into making an agent with a prompt chain that generates workflows on n8n when i found you. if llms.txt becomes a bit more practical, it’s written simply enough to have the potential to go from prompt to agent. shadcn level simplicity for writing agent is needed. if the right decisions are made, this product may be the new toolkit of the market is looking for. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| omeraplak on May 5, 2025  | parent | next [–]
Wow, thank you for this thoughtful message. You really got what we’re trying to build. We’re pushing hard to bring shadcn-level simplicity to agents. Your feedback means a lot! |  |  | omeraplak on May 5, 2025  | parent | next [–]
Wow, thank you for this thoughtful message. You really got what we’re trying to build. We’re pushing hard to bring shadcn-level simplicity to agents. Your feedback means a lot! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | omeraplak on May 5, 2025  | parent | next [–]
Wow, thank you for this thoughtful message. You really got what we’re trying to build. We’re pushing hard to bring shadcn-level simplicity to agents. Your feedback means a lot! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| jerryseff on May 4, 2025  | prev | next [–]
This is awesome! |  |  | jerryseff on May 4, 2025  | prev | next [–]
This is awesome! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | jerryseff on May 4, 2025  | prev | next [–]
This is awesome! |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| omeraplak on May 4, 2025  | parent | next [–]
Thank you! Really appreciate it. Let us know if you try it out. |  |  | omeraplak on May 4, 2025  | parent | next [–]
Thank you! Really appreciate it. Let us know if you try it out. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | omeraplak on May 4, 2025  | parent | next [–]
Thank you! Really appreciate it. Let us know if you try it out. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| sakalsiz on May 5, 2025  | prev [–]
The UI is sick. |  |  | sakalsiz on May 5, 2025  | prev [–]
The UI is sick. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | sakalsiz on May 5, 2025  | prev [–]
The UI is sick. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| omeraplak on May 5, 2025  | parent [–]
Thanks!! We spent a lot of time on the details. Glad you liked it |  |  | omeraplak on May 5, 2025  | parent [–]
Thanks!! We spent a lot of time on the details. Glad you liked it |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  | omeraplak on May 5, 2025  | parent [–]
Thanks!! We spent a lot of time on the details. Glad you liked it |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Guidelines | FAQ | Lists | API | Security | Legal | Apply to YC | Contact
Search: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
