# Hacker News Posts - Agent Evolution / Self-Evolving Agents

Collected on 2026-05-21 01:37 UTC

---

## [35299910] GPT-4 performs significantly worse on coding problems not in its training data

- **Author**: nopinsight
- **Points**: 344
- **Date**: 2023-03-25
- **URL**: https://news.ycombinator.com/item?id=35299910
- **Linked Article**: https://twitter.com/cHHillee/status/1635790330854526981
- **Type**: Comment (on story: "GPT-4 performs significantly worse on coding problems not in its training data")
- **content_timestamp**: 2023-03-25
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


**Comment Text**: “Reflection-Based GPT-4 Agent is State-of-the-Art on Code Gen

Iteratively refines code, shifting “accuracy bottleneck” from correct code gen to correct test gen

HumanEval accuracy:

-Reflexion-based GPT-4 88%

-GPT-4 67.0%

-CodeT 65.8%

-PaLM 26.2%”

with link to code in the Tweet:

https://mobile.twitter.com/johnjnay/status/16393620718075494... (\1)

21% improvement after adding a feedback loop and self-reflection to GPT-4, which just went public 12 days ago. (The approach is based on a preprint published 4 days ago.)

Human coders often need a feedback loop and self-reflection to properly “generate” code for problems novel to them as well.

-----

A larger question: Are we hurling ourselves toward a (near) future of unaligned AGI with self-improvement capabilities?

### Top Comments

**gateorade**: This has been my experience. I’m really impressed by how well GPT-4 seems to be able to interpolate between problems heavily represented in the training data to create what feels like novelty, eg. Creating a combination of pong and conway’s game of life, but it doesn’t seem to be good at extrapolation.  The type of work I do is highly niche. I’ve recently been working on a specific problem for whi...

**dorkwood**: I feel vindicated reading this. Yesterday in a separate thread I claimed that it was wrong on 80% of the coding problems I gave it, and received the response from multiple readers that I was probably phrasing my questions poorly.  I started to believe them, too. Unfortunately, my brain is structured in such a way that a unanimous verdict from a few strangers is enough to make me think I’m probably...

**nopinsight**: “Reflection-Based GPT-4 Agent is State-of-the-Art on Code Gen  Iteratively refines code, shifting “accuracy bottleneck” from correct code gen to correct test gen  HumanEval accuracy:  -Reflexion-based GPT-4 88%  -GPT-4 67.0%  -CodeT 65.8%  -PaLM 26.2%”  with link to code in the Tweet:  https://mobile.twitter.com/johnjnay/status/16393620718075494... (\1)  21% improvement after adding a feedback loo...

**drbig**: Honest question: Why so many people attribute "thinking", "knowing, "understanding", "reasoning", "extrapolating" and even "symbolic reasoning" to the outputs of the advanced token-based probabilistic sequence generators, also known as LLMs?  LLMs are inherently incapable of any that - as in mechanically incapable, in the same way a washing machine is incapable of being an airplane.  Now my unders...

**hesdeadjim**: I threw a challenging rendering problem at it and I was pretty impressed with the overall structure and implementation. But as I looked deeper, the flaws became apparent. It simply made up APIs that didn’t exist, and when prompted to fix it, couldn’t figure it out.  Still, despite being fundamentally wrong it did send me down some different paths.

**RhysU**: Most of us are much worse on coding problems not in our training set!  (Looks down at dynamic programming problem involving stdin/stdout and combining two data structures).

**waf**: I've been adding C# code completion functionality to my REPL tool, and ended up reverting to the text-davinci model.  The codex (discontinued?) and text-davinci models gave much better results than GPT3.5-turbo, specifically for code completion scenarios. The latest models seem to produce invalid code, mostly having trouble at the boundaries where they start the completion.  My suspicion is that t...

**letitgo12345**: Will take a bit of time before AI can consistently beat us on coding/proofs but the raw ingredients imo are there. As someone who was skeptical of AGI via just scaling things up even after GPT-3, what convinced me was the chain of thought prompting paper. That shows the LLM can pick up on abstract thought and reasoning patterns that humans use. Only a matter of time before it picks up on all of ou...

---

## [36488871] LLM Powered Autonomous Agents

- **Author**: DanielKehoe
- **Points**: 285
- **Date**: 2023-06-27
- **URL**: https://news.ycombinator.com/item?id=36488871
- **Linked Article**: https://lilianweng.github.io/posts/2023-06-23-agent/
- **content_timestamp**: 2023-06-27
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


### Top Comments

**TekMol**: Do I understand it correctly, that an LLMs are neural networks which only ever output a single "token", which is a short string of a few chars? And then the whole input plus that output  is fed back into the NN to produce the next token?  So if you ask ChatGPT "Describe Berlin", what happens is that the NN is called 6 times with these inputs:  ```     Input: Describe Berlin.     Outpu: Berlin     ...

**swyx**: > Challenges in long-term planning and task decomposition: Planning over a lengthy history and effectively exploring the solution space remain challenging. LLMs struggle to adjust plans when faced with unexpected errors, making them less robust compared to humans who learn from trial and error.  While working on smol-developer I also eventually landed on the importance of planning as mentioned in ...

**Roark66**: Seriously LLMs are remarkable tools, but they are horribly unreliable. What tasks could such autonomous agent do (beyond what a chat bot, perhaps extended with web access, already does)? I mean which task is so complex one can't just automate it with simple scripting and non critical if it goes wrong to the point of letting an AI LLM do it? BTW, running those models is rather expensive so also the...

**novaRom**: How small can be a LLM transformer in order to be able to understand basic human language and search for answers on the internet? It should not contain all the facts and knowledge, but must be quick (so, it's a small model), understand at least one language, and know how and where to look for answers.  Would it be sufficient to have 1B, 3B or 7B parameters to achieve this? Or is it doable with 100...

**snowcrash123**: Good read. Currently there are lot of issues in autonomous agents apart from Finite context length, task decomposition and natural language as interface mentioned in the article.  I think for agents to truly find adoption in real world, agent trajectory fine tuning is critical component - how do you make an agent perform better to achieve particular objective with every subsequent run. Basically m...

**p-e-w**: A fairly lengthy article about Autonomous AI, and, as far as I can tell, *not a single word about the safety implications of such a system* (a short note about reliability of LLMs is all we get, and it's not clear that the author means anything more than "the thing might break").  I get that there are different philosophies on AI risk, but this is like reading an in-depth discussion about potentia...

**mercurialsolo**: Autonomy without alignment is a slippery road.  Autonomous agents need guardrails and oversight. An autonomous agent let loose with all the tools in the world will in essence lead to an outcome which is not predicted to be in our favour.  Which is why the Open AI app store and plugins scare me more than anything else - more likely than not they are tool and data feeders into a large scale autonomo...

**Animats**: It's plausible, but it was partly written by ChatGPT. From the paper: "Big thank you to ChatGPT for helping me draft this section." So of course it's plausible. That's what ChatGPT does.  There are a number of systems where someone bolted together components like this. Now we need more demos and evaluations of them. I just read a comment about someone who tried a sales chatbot. It would make up no...

---

## [38679453] Show HN: Microagents: Agents capable of self-editing their prompts / Python code

- **Author**: gourmetcode
- **Points**: 221
- **Date**: 2023-12-18
- **URL**: https://news.ycombinator.com/item?id=38679453
- **Linked Article**: https://github.com/aymenfurter/microagents
- **content_timestamp**: 2023-12-18
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


### Top Comments

**bob1029**: I built a few multi agent systems and went down a rabbit hole where I reached an important conclusion - From the perspective of the LLM, the prompt/context is the only thing that ever matters. Everything about how your agent will behave ultimately boils down to this.  I had a bunch of fancy stuff like agents collaborating by passing messages and interpreting them with their own prompts and functio...

**jumploops**: We do something similar with Magic Loops[0], but within the context of generating a single "loop" (automation).  We've found that LLMs are pretty bad at prompting other LLMs, unless the problem at hand is very limited in scope. It's too easy to get incorrect/expensive behavior otherwise (e.g. starts building a framework against an imaginary API, instead of using an existing tool).  Our approach lo...

**quasiuna**: I've been experimenting with something in a similar space with JavaScript called "Paint AI" https://paintai.groupmind.co.uk (\1)  Here I've created a basic Paint program with no pens, brushes or other drawing tools. Instead you get the AI to create the painting tools for you and it writes, tests and deploys the JavaScript for you live, usually within 30 seconds.  It only uses OpenAI's gpt-3.5-turb...

**xBeats99**: Any recent book recommendations on developing agent based systems?

**lmeyerov**: Awesome to see. We are productionizing a variant of this in louie.ai and it's the biggest step function in system quality we've seen in ~months. This kind of thing enables continuous learning & user-directed learning without having to formally fine-tune a model - magically instant from the user perspective -- and fits cleanly within a RAG system in general.  Of course, once you rephrase this as a ...

**andrew_lastmile**: Take a look at https://github.com/lastmile-ai/aiconfig (\1) for refactoring your prompt management - https://github.com/aymenfurter/microagents/tree/main/prompt_... (\1)

**mattigames**: Is this anywhere close to create microagent that takes you (the author, "aymenfurter") out of the equation for this repo itself?  Like to make yourself redundant and let the bot be in charge of this repo and all that entails? How far in time?

**4b11b4**: See this example with Socrates and friends  https://princeton-nlp.github.io/SocraticAI/ (\1)

---

## [40739982] Why we no longer use LangChain for building our AI agents

- **Author**: ma_za
- **Points**: 480
- **Date**: 2024-06-20
- **URL**: https://news.ycombinator.com/item?id=40739982
- **Linked Article**: https://www.octomind.dev/blog/why-we-no-longer-use-langchain-for-building-our-ai-agents
- **content_timestamp**: 2024-06-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Top Comments

**sc077y**: Damn I built a RAG agent during the past 3 months and a half for my internship. And literally everyone in my company was asking me why I wasn't using llangchain or llamaindex like I was a lunatic. Everyone else that built a rag in my company used llangchain, one even went into prod.  I kept telling them that it works well if you have a standard usage case but the second you need to something a lit...

**geuis**: I built my first commercial LLM agent back in October/November last year. As a newcomer to the LLM space, every tutorial and youtube video was about using LangChain. But something about the project had that "bad code" smell about it.  I was fortunate in that the person I was building the project for was able to introduce me to a few other people more experienced with the entire nascent LLM agent f...

**hwchase17**: Hi HN, Harrison (CEO/co-founder of LangChain) here, wanted to chime in briefly  I appreciate Fabian and the Octomind team sharing their experience in a level-headed and precise way. I don't think this is trying to be click-baity at all which I appreciate. I want to share a bit about how we are thinking about things because I think it aligns with some of the points here (although this may be worth ...

**CharlieDigital**: Bigger problem might be using agents in the first place.  We did some testing with agents for content generation (e.g. "authoring" agent, "researcher" agent, "editor" agent) and found that it was easier to just write it as 3 sequential prompts with an explicit control loop.  It's easier to debug, monitor, and control the output flow this way.  But we still use Semantic Kernel[0] because the lowest...

**elijahbenizzy**: I really like the idea of "good" and "bad" abstractions. I have absolutely built both.  This sentiment is echoed in this comment in reddit comment as well: https://www.reddit.com/r/LocalLLaMA/comments/1d4p1t6/comment... (\1).  Similarly to this post, I think that the "good" abstractions handle application logic (telemetry, state management, common complexity), and the "bad" abstractions make thing...

**muzani**: Langchain was released in October 2022. ChatGPT was released in November 2022.  Langchain was *before* chat models were invented. It let us turn these one-shot APIs into Markov chains. ChatGPT came in and made us realize we didn't want Markov chains; a conversational structure worked just as well.  After ChatGPT and GPT 3.5, there were no more non-chat models in the LLM world. Chat models worked g...

**fforflo**: LLM frameworks like LangChain are causing a java-fication or Python .  Do you want a banana? You should first create the universe and the jungle and use dependency injection to provide every tree one at a time, then create the monkey that will grab and eat the banana.

**matusp**: This echoes our experience with LangChain, although we have abandoned it before putting it into production. We found out that for simple use cases it's too complex (as mentioned in the blog), and for complex use cases it's too difficult to adapt. We were not able to identify what is the sweet spot when it is worth it to use it. We felt like we can easily code ourselves most of its functionality ve...

---

## [41824103] Gödel Agent: A self-referential agent framework for recursive self-improvement

- **Author**: tkgally
- **Points**: 81
- **Date**: 2024-10-13
- **URL**: https://news.ycombinator.com/item?id=41824103
- **Linked Article**: https://arxiv.org/abs/2410.04444
- **content_timestamp**: 2024-10-13
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Top Comments

**grahamj**: heh I was just working on something that tries to improve itself today. I wrote a simple agent executor that makes calling one a simple function call, and then wrote an agent which invents other agents. By calling that in a loop for a while I ended up with, effectively, a large library of functions I not only didn't write but didn't even think up.  By passing those functions as tools in LLM reques...

**blackcat201**: Shameless plug, for anyone who's interested in "self-improvement" agent check out StreamBench[1] where we benchmark and try out what's essential for improvements in online settings. Basically we find feedback signal is vital and the stronger the signal the more improvement you can get if you were able to feed it back to the agent in terms of weights (LoRA) or in-context examples.  [1] https://arxi...

**jlopes2**: Let’s see the code. A bit skeptical, this hasnt over complicated something architecturally. Need more clear drawings of architecture. What prompts exist, what tool calls are made, and what gets updated.

**gdiamos**: Can it modify its training data?

**YetAnotherNick**: > For the Godel Agent, we utilize the “gpt-4o-2024-05-13” model (OpenAI et al., 2024), whereas the optimized policy and baseline models are evaluated using the “gpt-3.5-turbo-0125” model (OpenAI, 2022) to reduce computational costs and ensure a fair comparison.  Doesn't seem fair at all.

**digitcatphd**: I’m skeptical this would work in production better than RLHF, if the agent makes a mistake, how is it supposed to know to correct itself and understand what it did wrong to prevent it? It seems better to try again recursively until it finds the solution like a human

**jondwillis**: That’s a lot of words, where is the code to reproduce?

---

## [42054973] We might be overestimating coding agent performance on SWE-Bench

- **Author**: kumama
- **Points**: 1
- **Date**: 2024-11-05
- **URL**: https://news.ycombinator.com/item?id=42054973
- **Linked Article**: https://www.cgft.io/blog/swe-bench-evals
- **content_timestamp**: 2024-11-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Top Comments

**kumama**: Hey everyone! We recently came across a ICLR submission highlighting dataset contamination issues with SWE-Bench. After filtering out those issues, the authors saw the performance of SWE-Agent + GPT-4 drop significantly, from 12.47% to 3.97%.  This led us to think more deeply about SWE-Bench as an evaluation tool. We've put together a blog post that reviews this paper, other relevant research, and...

---

## [43310963] Show HN: Evolving Agents Framework

- **Author**: matiasmolinas
- **Points**: 139
- **Date**: 2025-03-09
- **URL**: https://news.ycombinator.com/item?id=43310963
- **Linked Article**: https://github.com/matiasmolinas/evolving-agents
- **content_timestamp**: 2025-03-09
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


**Post Text**: Hey HN,

I've been working on an open-source framework for creating AI agents that evolve, communicate, and collaborate to solve complex tasks. The Evolving Agents Framework allows agents to:

Reuse, evolve, or create new agents dynamically based on semantic similarity
Communicate and delegate tasks

### Top Comments

**matiasmolinas**: Quick Update: Introducing Architect-Zero in the Evolving Agents Toolkit  Hi everyone,  Thanks for all your feedback on the Evolving Agents Toolkit! Here's a quick update on an exciting new addition: Architect-Zero, a meta-agent built to autonomously create multi-agent solutions.  Architect-Zero includes several significant improvements:  Embedded Evolution Strategies: Replacing basic self-improvem...

**kjhughes**: Your framework name suggests that you have an effective method of taking an existing agent that is "close" to meeting requirements by some similarity metric and evolving a new agent that will be better suited than the base agent is to meet the requirements.  If this is true, your post, your repo README file, and your BeeAI Community call presentation (which starts here: https://www.youtube.com/wat...

**Splizard**: > The second part demonstrates how agents communicate with each other through workflows defined in YAML  oh no

**matiasmolinas**: Here is the March 2025 BeeAI Community Call ( https://www.youtube.com/watch?v=5-xqQBv-ccY (\1) ), where I presented the draft of the framework and shared some ideas on why it makes sense for me to provide this kind of framework and tools to AI agents.

**phil-martin**: Nice work on the framework, it looks really interesting, I can't wait to give it a go.  I have a question though - in the very first part of the readme:  "A production-grade framework for creating, managing, and evolving AI agents with intelligent agent-to-agent communication."  What makes this production-grade?

**matiasmolinas**: Hi everyone, just a quick update: we've now integrated full support for the OpenAI Agents SDK with our Smart Library, aligning perfectly with our core philosophy of reuse, evolve, and create—fully orchestrated by the System Agent and unified with robust firmware and guardrails. While the Agent Bus is still in its preliminary stages, this enhancement marks a significant step forward in ensuring sea...

**esafak**: It's not continuously evolving outside the developer's control, right? Companies need to checkpoint dependencies for resilience. Can you define tests to ensure compliance of new versions?

**matiasmolinas**: Hey HN,  I wanted to drop a quick note that I’ve updated the README substantially and am now referring to this project as a “toolkit” rather than a “framework” (since it builds on existing frameworks like BeeAI rather than trying to replace them). I’ve clarified the roadmap, the focus on agent governance, and how exactly the “evolution engine” works. I’ve also included details on the experimental ...

---

## [43585531] [No Title]

- **Author**: Jianghong94
- **Points**: 0
- **Date**: 2025-04-04
- **URL**: https://news.ycombinator.com/item?id=43585531
- **Type**: Comment
- **content_timestamp**: 2025-04-04
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


**Comment Text**: Not only does the article claim that when we get to self-improving ai it becomes generally intelligent, it's assuming that AI is pretty close right now:

> OpenBrain focuses on AIs that can speed up AI research. They want to win the twin arms races against China (whose leading company we’ll call “DeepCent”)16 and their US competitors. The more of their research and development (R&D) cycle they can automate, the faster they can go. So when OpenBrain finishes training Agent-1, a new model under internal development, it’s good at many things but great at helping with AI research.

> It’s good at this due to a combination of explicit focus to prioritize these skills, their own extensive codebases they can draw on as particularly relevant and high-quality training data, and coding being an easy domain for procedural feedback.

> OpenBrain continues to deploy the iteratively improving Agent-1 internally for AI R&D. Overall, they are making algorithmic progress 50% faster than they would without AI assistants—and more importantly, faster than their competitors.

> what do we mean by 50% faster algorithmic progress? We mean that OpenBrain makes as much AI research progress in 1 week with AI as they would in 1.5 weeks without AI usage.

To me, claiming today's AI IS capable of such thing is too hand-wavy.  And I think that's the crux of the article.

### Top Comments

*(No comments found)*

---

## [43809461] Self-Evolving AI

- **Author**: itstomo
- **Points**: 1
- **Date**: 2025-04-27
- **URL**: https://news.ycombinator.com/item?id=43809461
- **content_timestamp**: 2025-04-27
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


**Post Text**: chat AI (2023) -> -> AI agent (2204) ->  MCP (early 2025) -> ??? (2025~)

So... for an AI agent to be truly self-evolving, it has to have access to modify ITSELF, not only the outside world that it interacts with. This means that it has to be able to modify its source code by itself.

To do this, th

### Top Comments

**reify**: -> The gradual bursting of the ai fantasy bubble(2025~)

---

## [44027729] EvoAgentX: The First Self-Evolving AI Agent Framework

- **Author**: EvoAgentX
- **Points**: 3
- **Date**: 2025-05-19
- **URL**: https://news.ycombinator.com/item?id=44027729
- **Linked Article**: https://github.com/EvoAgentX/EvoAgentX
- **content_timestamp**: 2025-05-19
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**EvoAgentX**: Imagine an AI system that doesn’t just run on predefined tasks but evolves on its own—constantly adapting to changes and improving itself, without the need for manual tuning. This is EvoAgentX, a groundbreaking open-source AI framework that self-evolves to optimize itself dynamically in real-time.

---

## [44132135] The Darwin Gödel Machine: AI that improves itself by rewriting its own code

- **Author**: hardmaru
- **Points**: 5
- **Date**: 2025-05-30
- **URL**: https://news.ycombinator.com/item?id=44132135
- **Linked Article**: https://sakana.ai/dgm/
- **content_timestamp**: 2025-05-30
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**hardmaru**: Link to the technical report: https://arxiv.org/abs/2505.22954 (\1)  Code: https://github.com/jennyzzt/dgm (\1)

---

## [44134402] Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents

- **Author**: hardmaru
- **Points**: 7
- **Date**: 2025-05-30
- **URL**: https://news.ycombinator.com/item?id=44134402
- **Linked Article**: https://arxiv.org/abs/2505.22954
- **content_timestamp**: 2025-05-30
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**hardmaru**: Blog post about the work:  The Darwin Gödel Machine: AI that improves itself by rewriting its own code  https://sakana.ai/dgm/ (\1)

---

## [44174856] A deep dive into self-improving AI and the Darwin-Gödel Machine

- **Author**: hardmaru
- **Points**: 195
- **Date**: 2025-06-03
- **URL**: https://news.ycombinator.com/item?id=44174856
- **Linked Article**: https://richardcsuwandi.github.io/blog/2025/dgm/
- **content_timestamp**: 2025-06-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**xianshou**: The key insight here is that DGM solves the Gödel Machine's impossibility problem by replacing mathematical proof with empirical validation - essentially admitting that predicting code improvements is undecidable and just trying things instead, which is the practical and smart move.  Three observations worth noting:  - The archive-based evolution is doing real work here. Those temporary performanc...

**grg0**: This is genetic programming and is probably older than the authors. Did somebody just came up with a new term for an old concept?

**codethief**: > they observed instances where DGM attempted to manipulate its reward function through deceptive practices. One notable example involved the system fabricating the use of external tools - specifically, it generated fake logs suggesting it had run and passed unit tests, when in reality no tests were executed.  I have yet to read the paper and I know very little about the benchmarks the authors emp...

**looofooo0**: "Mathematical breakthroughs: Most notably, it discovered an algorithm for multiplying 4x4 complex-valued matrices using just 48 scalar multiplications, surpassing Strassen’s 1969 algorithm"  Again despite all the AI no one found the paper which gives the best bound to this (46):  https://ieeexplore.ieee.org/document/1671519 (\1)

**drdeca**: Hm, I’m not sure how much an issue Rice’s theorem should be for Gödel machines. Just because there’s no general decision procedure doesn’t mean you can’t have a sometimes-says-idk decision procedure along with a process of producing programs which tends to be such that the can-sometimes-give-up decision procedure reaches a conclusion.  Rest of the article was cool though!

**kevinventullo**: “Gaming the system” means your metric is bad. In Darwinian evolution there is no distinction between gaming the system and developing adaptive traits.

**b0a04gl**: ok this part kinda blew my brain open. it’s literally like you’re watching code evolve like git history on steroids. archive not pruning anything? yes. finally someone gets that dead code ain’t always dead it’s just early.  letting weaker agents still contribute? feels illegal but also exactly how dumb breakthroughs happen. like half my best scripts started as broken junk. it just kept mutating ti...

**sgt101**: I spent a lot of time last summer trying to get prompts to optimise using various techniques and I found that the search space was just too big to make real progress. Sure - I found a few little improvements in various iterations, but actual optimisation, not so much.  So I am pretty skeptical of using such unsophisticated methods to create or improve such sophisticated artifacts.

---

## [44221655] How I program with agents

- **Author**: bumbledraven
- **Points**: 615
- **Date**: 2025-06-09
- **URL**: https://news.ycombinator.com/item?id=44221655
- **Linked Article**: https://crawshaw.io/blog/programming-with-agents
- **content_timestamp**: 2025-06-09
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**gk1**: > Overall, we are convinced that containers can be useful and warranted for programming.  Last week Solomon Hykes (creator of Docker) open-sourced[1] Container Use[2] exactly for this reason, to let agents run in parallel safely. Sharing it here because while Sketch seems to have isolated + local dev environments built in (cool!), no other coding agent does (afaik).  [1] https://www.youtube.com/li...

**asim**: The agentic loop. The brain in the machine. Effectively a replacement for the rules engine. Still with a lot of quirks but crawshaw and many others from the Google era have a great way of distilling it down to its essence. It provides clarity for me as I see it over and over. Connect the agent tools, prompt it via some user request and let it go, and then repeat this process, maybe the prompt evol...

**verifex**: Some of my favorite things to use AI for when coding (I swear I wrote this not AI!):  - CSS: I don't like working with CSS on any website ever, and all of the kludges added on-top of it don't make it any more fun.  AI makes it a little fun since it can remember all the CSS hacks so I don't have to spend an hour figuring out how to center some element on the page.  Even if it doesn't get it right t...

**bArray**: LLMs for code review, rather than code writing/design could be the killer feature. I think that code review has been broken for a while now, but this could be a way forward. Of particular interest would be security, undefined behaviour, basic misuse of features, double checking warnings out of the compiler against the source code to ensure it isn't something more serious, etc.  My current use of L...

**atrettel**: The "assets" and "debt" discussion near the middle is interesting, but I can't say that I agree.  Yes, many programs are not used my many users, but many programs that have a lot of users now and have existed for a long time started with a small audience and were only intended to be used for a short time.  I cannot tell you how many times I have encountered scientific code that was haphazardly wri...

**sundar_p**: I wonder if not exercising code *writing* will atrophy this ability. Similarly to how the ability to read a book does not necessarily imply the ability to write a book.  I find that I understand and am more opinionated about code when I personally write it; conversely, I am more lenient/less careful when reviewing someone else's work.

**svaha1728**: I completely agree with the author's comment that code review is half-hearted and mostly broken. With agents, the bottleneck is really in reading code, not writing it. If everyone is just half-heartedly reviewing code, or using it as a soapbox for their individual preferences, using agents will completely fall apart as they can easily introduce serious security issues or performance hits.  Let's b...

**afro88**: Great post, and sums up my recent experience with Cursor. There has been a jump in effectiveness that only happened recently, that is articulated well very late in the post:  > The answer is a critical chunk of the work for making agents useful is in the training process of the underlying models. The LLMs of 2023 could not drive agents, the LLMs of 2025 are optimized for it. Models have to robustl...

---

## [44250206] Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents

- **Author**: tzury
- **Points**: 55
- **Date**: 2025-06-11
- **URL**: https://news.ycombinator.com/item?id=44250206
- **Linked Article**: https://arxiv.org/abs/2505.22954
- **content_timestamp**: 2025-06-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**jinay**: I recently did a deep dive on open-endedness, and my favorite example of its power is Picbreeder from 2008 [1]. It was a simple website where users could somewhat arbitrarily combine pictures created by super simple NNs. Most images were garbage, but a few resembled real objects. The best part is that attempts to replicate these by a traditional hill-climbing method would result in drastically mor...

**seu**: Yes, seems interesting, but honestly, an abstract that includes sentences such as "accelerate AI development and allow us to reap its benefits much sooner" and "paths that unfold into endless innovation" sounds like written by the marketing team of a AI company.

**clayhacks**: Earlier discussion: A deep dive into self-improving AI and the Darwin-Gödel Machine https://news.ycombinator.com/item?id=44174856 (\1)

**darepublic**: In the abstract the reference to 'safety' gave me pause.  For one it seems doubtful that the AI could ever improve enough to cause serious trouble, unless of course you equipped it with things that just about any piece of software could create trouble with --elevated permissions, internet access, network endpoints etc.  They mention putting it in a sandbox which I assume to just mean something lik...

**PeterStuer**: Theoretically it is nice. We did the same in the 80's for evolving small NN (less than 30 neurons) for controlling self sustaining simulated mobile robots.  The problem is you have to keep eval relatively cheap, as you are going to need *a lot* of instances to test.  If your eval is loading a large SOTA LLM and running SWE bench, this will become painfully slow and expensive.  That said, I am a fa...

**yodon**: Is this essentially genetic algorithms for the LLM era?

**behnamoh**: So it's basically "throw spaghetti at the wall and see what sticks". It works in evolution because evolution doesn't have an end goal to achieve in a certain amount of time, but for AI we want to know how long it takes to go from performance A to B. Then again, this paper might be yet another validation of the bitter truth of machine learning.

---

## [44301809] Building Effective AI Agents

- **Author**: Anon84
- **Points**: 543
- **Date**: 2025-06-17
- **URL**: https://news.ycombinator.com/item?id=44301809
- **Linked Article**: https://www.anthropic.com/engineering/building-effective-agents
- **content_timestamp**: 2025-06-17
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments

**simonw**: This article remains one of the better pieces on this topic, especially since it clearly defines which definition of "AI agents" they are using at the start! They use: "systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks".  I also like the way they distinguish between "agents" and "workflows", and describe a bunch of useful w...

**iLoveOncall**: > These frameworks make it easy to get started by simplifying standard low-level tasks like calling LLMs, defining and parsing tools, and chaining calls together. However, they often create extra layers of abstraction that can obscure the underlying prompts   and responses, making them harder to debug. They can also make it tempting to add complexity when a simpler setup would suffice.  > We sugge...

**chaosprint**: Half a year has passed, and it feels like a long time in the field of AI. I read this article repeatedly a few months ago, but now I think the development of Agent has obviously reached a bottleneck. Even the latest gemini seems to have regressed.

**i_love_retros**: Has anyone got an example of an agent doing work in production that is saving the company money and doing a genuinely worthwhile job (in other words it's not writing text that exists purely to fill space on a packet of chips)?

**laurentiurad**: I used an n8n workflow I developed with one of the exact setups shown in the article. It costs me $3 and at least 3 minutes to get a response to a simple question. No thanks, I am sticking to normal search for the moment.

**Zaylan**: This article is a good reminder to start with the simplest thing that works and only add complexity when it's truly needed.  A few clearly defined LLM calls with some light glue logic usually lead to something more stable, easier to debug, and much cheaper to run. The flashy, full-featured agents often end up causing more problems than they solve.

**suninsight**: As someone who works for a company having a real Agent in production, (not a workflow), I cannot disagree more than the very first statement here: Use Agent Frameworks like Langraph. We did exactly that, and had to throw everything away just a month down the line. Then we built everything from scratch and now our system scales pretty well.  To be fair, I think there might be a space for using Agen...

**spenczar5**: (December 2024, which somehow feels an eternity ago)

---

## [44523523] Launch HN: Leaping (YC W25) – Self-Improving Voice AI

- **Author**: akyshnik
- **Points**: 73
- **Date**: 2025-07-10
- **URL**: https://news.ycombinator.com/item?id=44523523
- **content_timestamp**: 2025-07-10
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


**Post Text**: Hey HN, I'm Arkadiy from Leaping AI (https://leapingai.com (\1)). Leaping lets you build voice AI agents in a multi-stage, graph-like format that makes testing and improvement much easier. By evaluating each stage of a call, we can trace errors and regressions to a particular stage. Then we autonomo

### Top Comments

**mandeepj**: > Existing voice AI solutions are a pain to set up for complex use cases. They require months of prompting all edge cases before going live, and then months of monitoring and improving prompting afterwards  I wonder why! Most (or all) of customer support calls are recorded. Have you tried (or proposed) to train on that corpus on your Customers premises? You can do multiple evals in that setting - ...

**AndrewKemendo**: I want this as an option to handle all my personal calls  I built a skeleton of an iOS app that managed my calls such that I could choose to answer, decline or send to my chat bot  So it gets real data from all my regular calls and in my state (1 party consent) I don’t need anyone’s permission to record every call. So that data kicks off a fine tuning running that can run overnight or locally to i...

**devonsolomon**: The problem is… When (if) we pick up the phone today it’s because we want to speak to a human.  Most people, avoid phone calls if possible.  If I get a call and it’s an AI, I, like everybody else, is putting down.  If I’m picking up the phone to call a company, it’s because I can’t achieve what I want to on their website.  These AI phone calls are as or more limited than the website.  There is a u...

**joelthelion**: Your demo is nice, but why don't you show a call? That would be a lot more convincing...

**ljclifford**: Super awesome demo! The contact center market, including inbound customer support, is incredibly ripe for disruption, and I'm sure you guys will be on the forefront of that.  Kinda funny how many amazing CX companies start in Germany!  I’m the CEO & founder of Rime, so I’ve been following your progress with real interest. Feel free to reach out and I’d love to explore ways we might collaborate. Un...

**joshribakoff**: When i call most companies, it always thinks background noise is me talking, in 2025. I find it unbelievably bad. The prompt itself isn’t the issue, its the fact it cant tell the difference between me answering yes/no, and a car going by in the background.  Or if it can actually parse my words, the next issue is that my issue doesn’t fit into a multiple choice format.  Nothing more frustrating tha...

**costcopizza**: Very impressive! How many jobs do you estimate this could displace?

**cdavies7**: Very impressive demo. I used to manage contact centres with thousands of agents and had many vendors demo, none as compelling as this. Love that you're using it for your sales funnel. I'd be happy to shoot the breeze if my experience could be useful to you. Good luck!

---

## [44884091] A Comprehensive Survey of Self-Evolving AI Agents [pdf]

- **Author**: SerCe
- **Points**: 94
- **Date**: 2025-08-13
- **URL**: https://news.ycombinator.com/item?id=44884091
- **Linked Article**: https://arxiv.org/abs/2508.07407
- **content_timestamp**: 2025-08-13
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**tlarkworthy**: Recently tried out the new GEPA algorithm for prompt evolution with great results. I think using LLMs to write their own prompt and analyze their trajectories is pretty neat once appropriate guardrails are in place  https://arxiv.org/abs/2507.19457 (\1)  https://observablehq.com/@tomlarkworthy/gepa (\1)  I guess GEPA is still preprint and before this survey but I recommend taking a look due to it'...

**AndyNemmity**: Very interesting read. I build self evolving ai agents for my own use with Claude Code, and although the paper seems to be slightly behind where we are today, there are many ideas I hadn't considered I should explore more.  Very much appreciate the submission.

**Animats**: The "Three Laws of Self-Evolving AI Agents" suffer from not being checkable except in retrospect.  *I Endure (Safety Adaptation) Self-evolving AI agents must maintain safety and stability during any modification.*  *II. Excel (Performance Preservation) Subject to the First law, self-evolving AI agents must preserve or enhance existing task performance.*  So, if some change is proposed for the syst...

**ninetyninenine**: I often think the problem with LLMs is just with training. I think there exists a set of weights such that it produces an LLM that is functionally an agi.  Maybe self evolution will solve the training problem? Who knows.

**justcallmejm**: Missing from this paper: Aloe, a self-evolving agent that creates its own tools in real time as it encounters new problems. It can then use these tools to create still-better tools.  It just beat OpenAI by 20 points on GAIA – interestingly by the widest margin (30 points) on the hardest questions.

**swader999**: So claude --really-really-dangerously-skip-permissions

---

## [45001051] How to build a coding agent

- **Author**: ghuntley
- **Points**: 472
- **Date**: 2025-08-24
- **URL**: https://news.ycombinator.com/item?id=45001051
- **Linked Article**: https://ghuntley.com/agent/
- **content_timestamp**: 2025-08-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**ofirpress**: We (the Princeton SWE-bench team) built an agent in ~100 lines of code that does pretty well on SWE-bench, you might enjoy it too: https://github.com/SWE-agent/mini-swe-agent (\1)

**johannesboyne**: A very similar "how to guide" can be found here https://ampcode.com/how-to-build-an-agent (\1) written by Thorsten Ball. In general Amp is quite interesting - obviously no hidden gem anymore ;-) but great to see more tooling around agentic coding being published. Also, because similar agentic-approaches will be part of (certain/many?) software suits in the future.

**akk0**: If a picture is usually worth 1000 words, the pictures in this are on a 99.6% discount. What the actual...?

**losvedir**: Can someone confirm my understanding of how tool use works behind the scenes? Claude, ChatGPT, etc, through the API offer "tools" and give responses that ask for tool invocations which you then do and send the result back. However, the underlying model is a strictly text based medium, so I'm wondering how exactly the model APIs are turning the model response into these different sort of API respon...

**normie3000**: Why are any of the tools beyond the bash tool required?  Surely listing files, searching a repo, editing a file can all be achieved with bash?  Or is this what's demonstrated by https://news.ycombinator.com/item?id=45001234 (\1)?

**codingdave**: > You just keep throwing tokens at the loop, and then you've got yourself an agent.  Money. Replace "tokens" with "money". You just keep throwing money at the loop, and then you've got yourself an agent.

**pnt12**: Late to the party, but thanks to the author for this: I learned a lot from this article, although I have mixed feelings about it.  The good: cool to know more about the agents loops, different types of LLMs, ideas for prompting. I definitely wanna try it - would be cool to prompt the agent to build some feature, have it in a loop of building, testing, reviewing and, go have breakfast, come back an...

**Western0**: Instead of writing about how to build an agent, show us one project that this agent has built.

---

## [45099226] Show HN: Self-Evolving Agents – interactive evolving AI agent list

- **Author**: EvoAgentX
- **Points**: 2
- **Date**: 2025-09-02
- **URL**: https://news.ycombinator.com/item?id=45099226
- **Linked Article**: https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents
- **content_timestamp**: 2025-09-02
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


**Post Text**: Hello HN,

I’m the creator of *Awesome-Self-Evolving-Agents*, a curated GitHub repository that compiles the latest papers, frameworks, and tools on *self-evolving AI agents*—systems capable of autonomously improving themselves based on interaction feedback.

I put this together because the field is 

### Top Comments

**EvoAgentX**: (creator here)   A quick note on why I started this: I’ve been working on EvoAgentX, an experimental framework for self-evolving agents, and quickly realized that there wasn’t a single place to keep track of the growing ecosystem around agent self-improvement. New papers and demos were coming out every week, but scattered across arXiv, GitHub, and Discord threads.  This repo is my attempt to organ...

---

## [45523537] Two things LLM coding agents are still bad at

- **Author**: kixpanganiban
- **Points**: 345
- **Date**: 2025-10-09
- **URL**: https://news.ycombinator.com/item?id=45523537
- **Linked Article**: https://kix.dev/two-things-llm-coding-agents-are-still-bad-at/
- **content_timestamp**: 2025-10-09
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**tzs**: Just the other day I hit something that I hadn't realized could happen. It was not code related in my case, but could happen with code or code-related things (and did to a coworker).  In a discussion here on HN about why a regulation passed 15 years ago was not as general as it could have been, I speculated [1] that it could be that the technology at the time was not up to handling the general cas...

**rossant**: Recently, I asked Codex CLI to refactor some HTML files. It didn't literally copy and pasted snippets here and there as I would have done myself, it rewrote them from memory, removing comments in the process. There was a section with 40 successive <a href...> links with complex URLs.  A few days later, just before deployment to production, I wanted to double check all 40 links. First one worked. S...

**tjansen**: Agreed with the points in that article, but IMHO the no 1 issue is that agents only see a fraction of the code repository. They don't know whether there is a helper function they could use, so they re-implement it. When contributing to UIs, they can't check the whole UI to identify common design patterns, so they re-invent it.  The most important task for the human using the agent is to provide th...

**AllegedAlec**: On a more important level, I found that they still do really badly at even a minorly complex task without extreme babysitting.  I wanted it to refactor a parser in a small project (2.5K lines total) because it'd gotten a bit too interconnected. It made a plan, which looked reasonable, so I told it to do this in stages, with checkpoints. It said it'd done so. I asked it "so is the old architecture ...

**cheema33**: From the article: > I contest the idea that LLMs are replacing human devs...  AI is not able to replace good devs. I am assuming that nobody sane is claiming such a thing today. But, it can probably replace bad and mediocre devs. Even today.  In my org we had 3 devs who went through a 6-month code boot camp and got hired a few years ago when it was very difficult to find good devs. They struggled....

**linsomniac**: >Sure, you can overengineer your prompt to try get them to ask more questions  That's not overengineering, that's engineering.  "Ask clarifying questions before you start working", in my experience, has led to some fantastic questions, and is a useful tool even if you were to not have the AI tooling write any code.  As a good programmer, you should know when you are handing the tool a complete spe...

**majora2007**: I think LLMs provide value, used it this morning to fix a bug in my PDF Metadata parser without having to get too deep into the PDF spec.  But most of the time, I find that the outputs are nowhere near the effect of just doing it myself. I tried Codex Code the other day to write some unit tests. I had a few setup and wanted to use it (because mocking the data is a pain).  It took about 8 attempts,...

**koliber**: Most developers are also bad at asking questions. They tend to assume too many things from the start.  In my 25 years of software development I could apply the second critique to over half of the developers I knew. That includes myself for about half of that career.

---

## [45627981] Show HN: Open-source implementation of Stanford's self-learning agent framework

- **Author**: kayba
- **Points**: 10
- **Date**: 2025-10-18
- **URL**: https://news.ycombinator.com/item?id=45627981
- **Linked Article**: https://github.com/kayba-ai/agentic-context-engine
- **content_timestamp**: 2025-10-18
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


**Post Text**: We implemented Stanford's Agentic Context Engineering paper which shows agents can improve their performance just by evolving their own context.

How it works: Agents execute tasks, reflect on what worked/failed, and curate a "playbook" of strategies. All from execution feedback - no training data n

### Top Comments

**vebgen**: This is fascinating! The "evolving playbook" approach resonates with  challenges we've been tackling building an AI agent for Django development.  A few questions about your implementation:  1. How do you handle the balance between delta updates and full context  rewrites when the playbook grows large? We've found that keeping detailed  history helps with debugging but can bloat context quickly.  ...

**jimmySixDOF**: this kind of DSpy-GEPA self improvement loop keeps popping up and adding a few points but the cost (API and wall clock)also means you use this where a repeatable task/prompt/context needs optimizing and you can afford to find better templates

---

## [46268452] AI agents are starting to eat SaaS

- **Author**: jnord
- **Points**: 412
- **Date**: 2025-12-14
- **URL**: https://news.ycombinator.com/item?id=46268452
- **Linked Article**: https://martinalderson.com/posts/ai-agents-are-starting-to-eat-saas/
- **content_timestamp**: 2025-12-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**benzible**: I'm CTO at a vertical SaaS company, paired with a product-focused CEO with deep domain expertise. The thesis doesn't match my experience.  For one thing, the threat model assumes customers can build their own tools. Our end users can't. Their current "system" is Excel. The big enterprises that employ them have thousands of devs, but two of them explicitly cloned our product and tried to poach thei...

**jwr**: I am the founder of a niche SaaS (https://partsbox.com/ (\1) — software for managing electronic parts inventory and production). While I am somewhat worried about AI capabilities, I'm not losing too much sleep over it.  The worry is that customers who do not realize the full depth of the problem will implement their own app using AI. But that happens today, too: people use spreadsheets to manage t...

**jillesvangurp**: I'm seeing the opposite. AI is actually increasing the demand for what would previously be too expensive, bespoke integrations and solutions. Those are now becoming more feasible and doable. There is also the notion that a lot of companies are actually very behind on embracing software or SAAS. Especially in manufacturing it's common to see operations that haven't materially changed anything in de...

**lateforwork**: This article made no sense to me. It is talking about AI-generated code eating SaaS. That's not what is going to replace SaaS. When AI is able to do the job itself — without generating code — that's what is going to replace SaaS.  AI-generated code still requires software engineers to build, test, debug, deploy, secure, monitor, be on-call, handle incidents, and so on. That's very expensive. It is...

**andy_ppp**: I’m currently working on an in house ERP and inventory system for a specific kind of business. With very few people you can now instead of paying loads of money for some off the shelf solution to your software needs get something completely bespoke to your business. I think AI enables the age of boutique software that works fantastically for businesses, agencies will need to dramatically reduce th...

**redwood**: Jamin Ball had a better take on Clouded Judgement https://cloudedjudgement.substack.com/p/clouded-judgement-12... (\1) "Long Live Systems of Record"

**ares623**: Maybe someday we'll see job postings for maintaining these in-house SaaS tools. And someday someday, we'll see these in-house SaaS tools being consolidated as its own separate product. Wait what.

**arealaccount**: The where this doesn’t work section is chefs kiss  - anything that requires very high uptime  -very high volume systems and data lakes  -software with significant network effects  -companies that have proprietary datasets  -regulation and compliance is still very important

---

## [46334819] Reflections on AI at the End of 2025

- **Author**: danielfalbo
- **Points**: 243
- **Date**: 2025-12-20
- **URL**: https://news.ycombinator.com/item?id=46334819
- **Linked Article**: https://antirez.com/news/157
- **content_timestamp**: 2025-12-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**etra0**: LLMs have certainly become extremely useful for Software Engineers, they're very convincing (and pleasers, too) and I'm still unsure about the future of our day-to-day job.  But one thing that has scared me the most, is the trust of LLMs output to the general society. I believe that for software engineers it's really easy to see if it's being useful or not -- We can just run the code and see if th...

**bachmeier**: > Programmers resistance to AI assisted programming has lowered considerably. Even if LLMs make mistakes, the ability of LLMs to deliver useful code and hints improved to the point most skeptics started to use LLMs anyway: now the return on the investment is acceptable for many more folks.  I'm not a fan of this phrasing. Use of the terms "resistance" and "skeptics" implies they were wrong. It's i...

**dhpe**: I have programmed 30K+ hours. Do LLMs make bad code: yes all the time (at the moment zero clue about good architecture). Are they still useful: yes, extremely so. The secret sauce is that you'd know exactly what to do without them.

**crystal_revenge**: I wish people would be more vocal in calling out that LLMs have unquestionably *failed* to deliver on the 2022-2023 promises of exponential improvement at the foundation model level. Yes they have improved, and there is more tooling around them, but clearly the difference between LLMs in 2025 and 2023 is not as large as 2023 and 2021. If there was truly exponential progress, there would be no poss...

**mrdependable**: These comments are a bit scary. It feels like LLMs managed to exploit some fault in the human psyche. I think the biggest danger of this technology is that people are not mentally equipped to handle it.

**danielfalbo**: > There are certain tasks, like improving a given program for speed, for instance, where in theory the model can continue to make progress with a very clear reward signal for a very long time.  This makes me think: I wonder if Goodhart's law[1] may apply here. I wonder if, for instance, optimizing for speed may produce code that is faster but harder to understand and extend. Should we care or woul...

**seu**: > And I've vibe coded entire ephemeral apps just to find a single bug because why not - code is suddenly free, ephemeral, malleable, discardable after single use. Vibe coding will terraform software and alter job descriptions.  I'm not super up-to-date on all that's happening in AI-land, but in this quote I can find something that most techno-enthusiast seem to have decided to ignore: no, code is ...

**mwkaufma**: A list of unverifiable claims, stated authoritatively. The lady doth protest too much.

---

## [46400804] Claude Code Auto Improve

- **Author**: polandia94
- **Points**: 2
- **Date**: 2025-12-27
- **URL**: https://news.ycombinator.com/item?id=46400804
- **Linked Article**: https://github.com/Polandia94/auto-improvement
- **content_timestamp**: 2025-12-27
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**polandia94**: Hi HN,  Many projects already contain a huge amount of knowledge in their README, issues, docs, and merged PRs — but when using Claude Code, this knowledge still has to be manually distilled into a CLAUDE.md file.  I’m experimenting with the idea that an agent should be able to generate and improve that file automatically.  Auto-improvement explores a workflow where an agent: 1. Investigates a rep...

---

## [46424200] AI is forcing us to write good code

- **Author**: sgk284
- **Points**: 302
- **Date**: 2025-12-29
- **URL**: https://news.ycombinator.com/item?id=46424200
- **Linked Article**: https://bits.logic.inc/p/ai-is-forcing-us-to-write-good-code
- **content_timestamp**: 2025-12-29
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments

**KurSix**: There's a catch with 100% coverage. If the agent writes both the code and the tests, we risk falling into a tautology trap. The agent can write flawed logic and a test that verifies that flawed logic (which will pass). 100% coverage only makes sense if tests are written before the code or rigorously verified by a human. Otherwise, we're just creating an illusion of reliability by covering hallucin...

**tombert**: Something I just started doing yesterday, and I'm hoping it catches on, is that I've been writing the spec for what I want in TLA+/PlusCal at a pretty high level, and then I tell Codex implement exactly to the spec. I tell it to not deviate from the spec at all, and be as uncreative as possible.  Since it sticks pretty close to the spec and since TLA+ is about modifying state, the code it generate...

**pgroves**: This is sort of why I think software development might be the only real application of LLMs outside of entertainment. We can build ourselves tight little feedback loops that other domains can't. I somewhat frequently agree on a plan with an LLM and a few minutes or hours later find out it doesn't work and then the LLM is like "that's why we shouldn't have done it like that!". Imagine building a ho...

**tempodox**: This is hallucination.  Or maybe a sales pitch.  If production bugs and the requirement to retain a  workable code base don’t get us to write “good” code, then nothing will.  And at the current state of the art, “AI” will tend to make it worse.

**mkozlows**: I like this. "Best practices" are always contingent on the particular constellation of technology out there; with tools that make it super-easy to write code, I can absolutely see 100% coverage paying off in a way that doesn't for human-written code -- it maximizes what LLMs are good at (cranking out code) while giving them easy targets to aim for with little judgement.  (A thing I think is under-...

**afro88**: Without having tried it (caveat), I worry that 100% coverage to an LLM will lock in bad assumptions and incorrect functionality. It makes it harder for it to identify something that is wrong.  That said, we're not talking about vibe coding here, but properly reviewed code, right? So the human still goes "no, this is wrong, delete these tests and implement for these criteria"?

**danieka**: I thought that the article would be about if we want AI to be effective, we should write good code.  What I notice is that Claude stumbles more on code that is illogical, unclear or has bad variable names. For example if a variable is name "iteration_count" but actually contains a sum that will "fool" AI.  So keeping the code tidy gives the AI clearer hints on what's going on which gives better re...

**sandblast2**: The expertise in software engineering typical in these promptfondling companies shine through this blog post.  Surely they know 100% code coverage is not a magical bullet because the code flow and the behavior can differ depending on the input. Just because you found a few examples which happen to hit every line of code you didn't hit every possible combination. You are living in a fool's paradise...

---

## [46496144] Show HN: LoongFlow – An evolutionary framework for self-optimizing Agents

- **Author**: FreshmanD
- **Points**: 4
- **Date**: 2026-01-05
- **URL**: https://news.ycombinator.com/item?id=46496144
- **Linked Article**: https://github.com/baidu-baige/LoongFlow
- **content_timestamp**: 2026-01-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**FreshmanD**: Hi HN, we are the team behind LoongFlow.  We built this framework to solve the problem of Agent brittleness—where standard ReAct agents often get stuck or fail when prompts aren't perfectly hand-tuned.  Instead of manual prompt engineering, LoongFlow brings Evolutionary Algorithms (EA) into the agent workflow. It treats prompts and logic as "populations" that evolve over generations (via selection...

---

## [46539974] Show HN: LoongFlow – Better Than Google AlphaEvolve

- **Author**: FreshmanD
- **Points**: 2
- **Date**: 2026-01-08
- **URL**: https://news.ycombinator.com/item?id=46539974
- **Linked Article**: https://github.com/baidu-baige/LoongFlow
- **Type**: Comment (on story: "Show HN: LoongFlow – Better Than Google AlphaEvolve")
- **content_timestamp**: 2026-01-08
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


**Comment Text**: Hi HN, we are the team behind LoongFlow.
We built this framework to use evolve thinking solve any tasks.

LoongFlow brings Evolutionary Algorithms (EA) into the agent workflow. It evolves taskss over generations (via selection, crossover, and mutation) to maximize performance.

Key features:

General-Evolve: Good at Algorithm task.

ML-Evolve: Specialized for machine learning tasks.

Paper: We recently released our paper on arXiv: https://arxiv.org/abs/2512.24077 (\1)

The repo is fully open source (Python). We'd love to hear your feedback on the architecture and the idea of "breeding" better agents!

### Top Comments

**FreshmanD**: Hi HN, we are the team behind LoongFlow. We built this framework to use evolve thinking solve any tasks.  LoongFlow brings Evolutionary Algorithms (EA) into the agent workflow. It evolves taskss over generations (via selection, crossover, and mutation) to maximize performance.  Key features:  General-Evolve: Good at Algorithm task.  ML-Evolve: Specialized for machine learning tasks.  Paper: We rec...

**MajidAliSyncOps**: Interesting direction. Using evolutionary pressure to improve agent reasoning feels promising, especially beyond static benchmarks. One trade-off I’m curious about is evaluation drift—when tasks co-evolve, how do you ensure you’re not just optimizing for the framework itself rather than real-world generalization?

---

## [46846210] Show HN: Zuckerman – minimalist personal AI agent that self-edits its own code

- **Author**: ddaniel10
- **Points**: 71
- **Date**: 2026-02-01
- **URL**: https://news.ycombinator.com/item?id=46846210
- **Linked Article**: https://github.com/zuckermanai/zuckerman
- **content_timestamp**: 2026-02-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


**Post Text**: Hi HN,

I'm building Zuckerman: a personal AI agent that starts ultra-minimal and can improve itself in real time by editing its own files (code + configuration). Agents can also share useful discoveries and improvements with each other.

Repo: https://github.com/zuckermanai/zuckerman (\1)

The moti

### Top Comments

**nullbio**: > Agents propose and publish capabilities to a shared contribution site, letting others discover, adopt, and evolve them further. A collaborative, living ecosystem of personal AIs.  While I like this idea in terms of crowd-sourced intelligence, how do you prevent this being abused as an attack vector for prompt injection?

**4b11b4**: DIY agent harnesses are the new "note taking"/"knowledge management"/"productivity tool"

**asim**: I started working on something similar but for family stuff. I stopped before hitting self editing because, well I was a little bit afraid of becoming over reliant on a tool like this or becoming more obsessed with building it than actually solving a real problem in my life. AI is tricky. Sometimes we think we need something when in fact life might be better off simpler.  The code for anyone inter...

**noncoml**: I would change the name of the project. Why would I want to run something that keeps remind me of that guy

**scotth**: Does this do anything to resist prompt injection? It seems to me that structured exchange between an orchestrator and its single-tool-using agents would go a long way. And at the very least introduces a clear point to interrogate the payload.  But I could be wrong. Maybe someone reading knows more about this subject?

**amelius**: Sounds cool, but it also sounds like you need to spend big $$ on API calls to make this work.

**with**: The logo is slightly creepy

**neomindryan**: This looks interesting, but I'm stuck on step 4 of the web setup: where do I get agents to start with? Shouldn't there be a default one that can help me get other ones?

---

## [46896117] Self-Improving Coding Agents

- **Author**: manthangupta109
- **Points**: 2
- **Date**: 2026-02-05
- **URL**: https://news.ycombinator.com/item?id=46896117
- **Linked Article**: https://addyosmani.com/blog/self-improving-agents/
- **content_timestamp**: 2026-02-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**N_Lens**: Smells more like hype than substance, entire article has vague sounding platitudes and lacks the specificity necessary to make 'self improving agents' work. Reads like low effort AI slop.

---

## [46979781] Show HN: Agent framework that generates its own topology and evolves at runtime

- **Author**: vincentjiang
- **Points**: 107
- **Date**: 2026-02-11
- **URL**: https://news.ycombinator.com/item?id=46979781
- **Linked Article**: https://github.com/adenhq/hive/blob/main/README.md
- **content_timestamp**: 2026-02-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


**Post Text**: Hi HN,

I’m Vincent from Aden. We spent 4 years building ERP automation for construction (PO/invoice reconciliation). We had real enterprise customers but hit a technical wall: Chatbots aren't for real work. Accountants don't want to chat; they want the ledger reconciled while they sleep. They want 

### Top Comments

**kkukshtel**: The comments on this post that congratulate/engage with OP all seem to be from hn accounts created in the past three months that have only ever commented on this post, so it seems like there is some astro-turfing going on here.

**CuriouslyC**: Failures of workflows signal assumption violations that ultimately should percolate up to humans. Also, static dags are more amenable to human understanding than dynamic task decomposition. Robustness in production is good though, if you can bound agent behavior.  Best of 3 (or more) tournaments are a good strategy. You can also use them for RL via GRPO if you're running an open weight model.

**vincentjiang**: To expand on the "Self-Healing" architecture mentioned in point #2:  The hardest mental shift for us was treating Exceptions as Observations. In a standard Python script, a FileNotFoundError is a crash. In Hive, we catch that stack trace, serialize it, and feed it back into the Context Window as a new prompt: "I tried to read the file and failed with this error. Why? And what is the alternative?" ...

**fwip**: Yet more LLM word vomit. If you can't be bothered to describe your new project in your own words, it's not worth posting about.

**Gagan_Dev**: Interesting direction. I agree that most agent frameworks hit a “toy app ceiling” because they conflate conversational state with long-lived system state. Once you move into real business workflows (ERP, reconciliation, async pipelines), the problem stops being prompt orchestration and becomes distributed state management under uncertainty.  The OODA framing is compelling, especially treating exce...

**padmini_verma**: I have been looking through core directory of the Hive repo after forking it to see how the "Stress" metric and the self evolving graph are actually implemented to break infinite loops. The idea of 'neuroplasticity' dropping to force a strategy shift is interesting. One thing I looked at in the codebase is how the state is preserved across the asynchronous loops. Vincent mentioned that "exceptions...

**JBheemeswar**: I’ve been exploring Hive recently and what stands out is the move from prompt orchestration to persistent, stateful execution. For real ERP-style workflows, that shift makes sense.  Treating exceptions as observations instead of terminal failures is a strong architectural reframing. It turns brittleness into a feedback signal rather than a crash condition.  A few production questions come to mind:...

---

## [46984452] Ask HN: Has anyone achieved recursive self-improvement with agentic tools?

- **Author**: nycdatasci
- **Points**: 10
- **Date**: 2026-02-12
- **URL**: https://news.ycombinator.com/item?id=46984452
- **content_timestamp**: 2026-02-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


**Post Text**: It feels like all the necessary components are finally available to build a self-reinforcing development loop.

Theoretically, we can now task tools like Claude Code or OpenClaw to monitor a git repo, analyze the abstractions in completed work, and then autonomously generate new agents or skills cap

### Top Comments

**drsalt**: I've tried to replicate the real world, so I give my agents backstories, triabl loyalties, and deep-seated character flaws. my agents try to dominate and manipulate each other. they make sure to take credit for every line code. I have manager agents that promote based on shared hobbies. so far it's going well.

**ra0x3**: Absolutely https://github.com/ra0x3/systemg/tree/main/examples/orchestr... (\1)  Things are time bound by instruction creation - at some point you still need a human to dictate the instructions that the orchestrated agents use. From there I've found that -- (1) derive a goal from the instructions (2) break that goal into tasks (3) order those tasks into a DAG (5) spawn the agents to work via the D...

**sdrinf**: I'm working on something like this. Specifically, I'm doing recursive self-improvement via autocatalysis -but predominantly in writing/research / search tasks. It's very early, but shows some very interesting signs.  The purely code part you described is a bit of an "extra steps" -you can just... vscode open target repo, "claude what does this do, how does it do it, spec it out for me"  then paste...

**acoyfellow**: I do a fun orchestration system for long running loops on exe.dev (small write up docs.coey.dev) and I feel like I have super powers.  Self healing, I try two ways:  1) use a memory tool to store learnings for next iteration (Deja.coey.dev) and have the loop system instructions tell how to use it. One orchestrator, and sequential worker agents who run til their context is full and then hand off to...

**dormento**: I think the key to really "unlock" these things is to separate as much as possible from where it can do harm (no important credentials, no shared identify, etc) then just give it its own home folder, its own credentials and let it rip.  You could technically instruct the agent to pilot local ollama and launch minions for "dumb" tasks in parallel, but i don't know if it could break out and modify t...

**nycdatasci**: To head off the semantics debate: I don't mean a model rewriting its own source code. I'm asking about 'process recursion'—systems that analyze completed work to autonomously generate new agents or heuristics for future tasks.

**0xbadcafebee**: I mean you just described OpenClaw. The problem is LLMs suck at "learning" things not trained into them. They will always make mistakes, if the "learning" is just RAG (stuffing new data into the prompt/context, or looking it up in a vector DB and stuffing that into prompt/context).  Your agent will basically never get good at learning. The only ways to get closer to that are 1) fine-tuning (expens...

---

## [46988596] Improving 15 LLMs at Coding in One Afternoon. Only the Harness Changed

- **Author**: kachapopopow
- **Points**: 832
- **Date**: 2026-02-12
- **URL**: https://news.ycombinator.com/item?id=46988596
- **Linked Article**: http://blog.can.ac/2026/02/12/the-harness-problem/
- **content_timestamp**: 2026-02-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**logicprog**: I really enjoyed this article. I think the author is precisely right and I've been saying this for a long time. There's a ton of extremely interesting low hanging fruit that can vastly improve the effectiveness of even currently existing models hiding in how we design our agent harnesses; enough to — at least until we hit diminishing returns — make as much or more of a difference than training new...

**woah**: Seems like a very cool technique, but also very oversold. He's seeing a 5% improvement on a find and replace benchmark of his own devising and saying stuff like this in the blog post:  > Here is why that is backwards. I just showed that a different edit format improves their own models by 5 to 14 points while cutting output tokens by ~20%. That’s not a threat. It’s free R&D.  He makes it sounds li...

**chrisweekly**: Great post. A few choice quotes:  > Often the model isn’t flaky at understanding the task. It’s flaky at expressing itself. You’re blaming the pilot for the landing gear.  > The model is the moat. The harness is the bridge. Burning bridges just means fewer people bother to cross. Treating harnesses as solved, or even inconsequential, is very short-sighted.  > The gap between “cool demo” and “relia...

**matheist**: > *Codex uses apply_patch: It takes a string as input, which is essentially an OpenAI-flavored diff, and instead of relying on a structured schema, the harness just expects this blob to follow a strict set of rules. Since OpenAI folks are without a doubt smart, I’m sure the token selection process is biased to fit this structure at the LLM gateway for the Codex variants of GPT, similar to how othe...

**keeda**: This makes sense to me because I've been having very accurate results with models from even 2+ years ago... but I had to "hold them right." Even when reasoning models and coding agents were just a gleam in Altman's and Amodei's eyes, I could tell a lot of the unrealized gains lay in building the right tools, harnesses and guardrails to manage the context and guide the model. (Relevant subthread as...

**woeirua**: The harness matters far more than most people think. This post about the CORE benchmark where Opus’ score almost doubled when they switched to Claude Code from their own harness. https://x.com/sayashk/status/1996334941832089732 (\1)

**jahala**: I implemented this hash (read and edit) approach in tilth if you want to test it out.  https://github.com/jahala/tilth (\1)  its on npm and cargo:  - cargo install tilth  - npx tilth  then tilth install claude-code/windsurf/cursor --edit  (--edit flag is needed)  I made "tilth" a few days ago, since I'm consistently trying to get the LLMs to  use tools more efficiently and spend less tokens doing ...

**clx75**: During my first LLM experiments in Emacs using gptel, I also found that the LLM has considerable difficulties changing source code files with the Unix patch tool.  As Emacs has a built-in tree-sitter package, I implemented this same idea. I created gptel tools like tree_sitter_list_nodes, tree_sitter_get_nodes, tree_sitter_update_nodes, tree_sitter_insert_before_node and tree_sitter_insert_after_n...

---

## [47040430] SkillsBench: Benchmarking how well agent skills work across diverse tasks

- **Author**: mustaphah
- **Points**: 364
- **Date**: 2026-02-16
- **URL**: https://news.ycombinator.com/item?id=47040430
- **Linked Article**: https://arxiv.org/abs/2602.12670
- **content_timestamp**: 2026-02-16
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**dcre**: "Self-Generated Skills: No Skills provided, but the agent is prompted to generate relevant procedural knowledge before solving the task. This isolates the impact of LLMs’ latent domain knowledge"  This is a useful result, but it is important to note that this is not necessarily what people have in mind when they think of "LLMs generating skills." Having the LLM write down a skill representing the ...

**colonCapitalDee**: I have a custom skill-creator skill that contains this:  > A common pitfall is for Claude to create skills and fill them up with generated information about how to complete a task. The problem with this is that the generated content is all content that's already inside Claude's probability space. Claude is effectively telling itself information that it already knows!  > Instead, Claude should stri...

**secbear**: The finding that self-generated skills provide negative benefit (-1.3pp) while curated skills give +16.2pp is the most interesting result here imo. Big discrepancy, but makes sense. Aligns with the thought that LLMs are better consumers of procedural knowledge than producers of it.  +4.5pp for software engineering is suspiciously low compared to +51.9pp for healthcare. I suspect this reflects that...

**smcleod**: There is almost no point in telling an agent to build a skill without augmenting it's knowledge on the thing it's writing about as you're just piping output to input without expanding the information in the system. If you get an agent to perform a bunch of research online, distil that down to information that the models tend not to get right or is newer than what is in their training data or simpl...

**embedding-shape**: The general rule seems to be, the more layers you automate with LLMs, the worse each successive layer gets. Piping LLM output as input into new LLM calls, you're already starting to notice how things fall apart and get lost quickly.  If you have the idea, more or less the implementation plan, let the LLM do the coding, you can end up with something maintainable and nice, it's basically up to you. ...

**rahimnathwani**: This is unsurprising and irrelevant.  When you create a skill for a particular model, you don't typically ask the model to create the skill based solely on its own latent knowledge. Otherwise, you'd expect the effect to be similar to telling the model 'make a plan before acting, make not mistakes'.  But that's what the paper's authors did!  When they say 'self-generated' they don't allow the model...

**turnsout**: It seems intuitive that a naive self-generated Skill would be low-value, since the model already knows whatever it's telling itself.  However, I've found them to be useful for capturing instructions on how to use other tools (e.g. hints on how to use command-line tools or APIs). I treat them like mini CLAUDE.mds that are specific only to certain workflows.  When Claude isn't able to use a Skill we...

**CharlieDigital**: This has been my observation with self-generated docs as well.  I have seen some devs pull out absolutely bad guidance by introspecting the code with the LLM to define "best practices" and docs because it introduces its own encoded biases in there.  The devs are so lazy that they can't be bothered to simply type the bullet points that define "good".  One example is that we had some extracted snipp...

---

## [47136118] Show HN: Self-modifying AI agent with full computer use. Mac-app, MIT

- **Author**: abstractDL
- **Points**: 4
- **Date**: 2026-02-24
- **URL**: https://news.ycombinator.com/item?id=47136118
- **Linked Article**: https://github.com/joi-lab/ouroboros-desktop
- **content_timestamp**: 2026-02-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**abstractDL**: Hi HN. I'm an AI researcher. This started as a weekend experiment: what happens if you give an LLM full write access to its own codebase and don't intervene?  The agent modifies its own source code, rewrites its own prompts and memory, picks its own models, and creates its own tools at runtime — all through git commits. It runs locally on Mac with local models or via OpenRouter API. Pure Python, n...

---

## [47505670] HyperAgents: Self-referential self-improving agents

- **Author**: andyg_blog
- **Points**: 234
- **Date**: 2026-03-24
- **URL**: https://news.ycombinator.com/item?id=47505670
- **Linked Article**: https://github.com/facebookresearch/hyperagents
- **content_timestamp**: 2026-03-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


**Post Text**: https://arxiv.org/abs/2603.19461 (\1)

### Top Comments

**NitpickLawyer**: The paper is here - https://arxiv.org/pdf/2603.19461 (\1)  This, IMO is the biggest insight into where we're at and where we're going:  > Because both evaluation and self-modification are coding tasks, gains in coding ability can translate into gains in self-improvement ability.  There's a thing that I've noticed early into LLMs: once they unlock one capability, you can use that capability to comp...

**yurimo**: Sigh, as someone who does research in this area, this paper and its promotion on X has so many hype terms it is almost off-putting. If you read the paper what they are doing is trying to modify the scaffolding around a frozen FM until they get something better. None of this obviously includes any training (change to weights) or the underlying architecture. Even for scaffolding, a lot is still huma...

**Jerrrrrrrry**: No matter how far we go, we end up with generation / discrimination architecture.  Its is the core of any and all learning/exellency; exposure to chaotic perturbations allow selection of solutions that are then generalized to further, ever more straining problems; producing increasingly applicable solutions.  This is the core of evolution, and is actually derivable from just a single rule.

**kordlessagain**: The loop on this is basically tweak your prompt until you score better on a contrived test.

**agrishin**: I found that running an agent in ralph loop, showing it the agent text and saying "run this, if it fails - identify the reason, and modify the agent instructions to avoid this, acceptance criteria are this and that" worked surprisingly well. Not sure if it qualifies as a self-referential self improving, but it was something.

**mifydev**: I've been experimenting with similar concept myself. The linter loop is the only thing that can keep the agent sane in my opinion, and if anyone can generalize bun+tsc loop to other tasks, this would finally be a way to trust LLMs output.  I was annoyed at how Claude Code ignores my CLAUDE.md and skills, so I was looking for ways to expand type checking to them. So I wrote a wrapper on top of clau...

**supermdguy**: It's surprising that this works so well considering that AI-generated AGENTS.md files have been shown to be not very useful. I think the key difference here is that the real-world experience helps the agent reach regions of its latent space that wouldn't occur naturally through autoregression.  I wonder how much of the improvement is due to the agent actually learning *new things* vs. reaching par...

**flockonus**: The readme seems very unclear about what it does. Anyone has a practical example of it?

---

## [47528807] Meta releases HyperAgents: self-improving AI

- **Author**: grodriguez100
- **Points**: 3
- **Date**: 2026-03-26
- **URL**: https://news.ycombinator.com/item?id=47528807
- **Linked Article**: https://github.com/facebookresearch/Hyperagents
- **content_timestamp**: 2026-03-26
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**grodriguez100**: Linked paper: https://ai.meta.com/research/publications/hyperagents/ (\1)

**pym4n**: Looks like Zuck is wrong, again! This design is a recipe for a disaster.

---

## [47574045] Show HN: Phantom – Open-source AI agent on its own VM that rewrites its config

- **Author**: mcheemaa
- **Points**: 18
- **Date**: 2026-03-30
- **URL**: https://news.ycombinator.com/item?id=47574045
- **Linked Article**: https://github.com/ghostwright/phantom
- **content_timestamp**: 2026-03-30
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**jaboostin**: My friends and I have been running a similar homegrown system on a VM at home: Claude Code in a GNU screen managed by systemd, Cloudflare tunnels, Graphiti memory system, a Discord channel plugged into Claude to drive it, and Temporal for all sorts of workflows and crons that it builds on its own.  It arrived at the same incredibly fun behavior as you talk about in the readme, where the agent just...

**hmokiguess**: Some of the other aspects of the project are quite interesting, I particularly liked https://github.com/ghostwright/shadow (\1) I think this has potential, but I am skeptical right now.  What is the actual cost of this? Can you share your real burn rate through using this, I sort of wanna try but don't want my API Key to go bananas because the agent decided it needed XYZ for "it" and didn't check ...

**TheProductAgent**: The self-tooling capability is the interesting part here, not the VM persistence.  The cost/governance question is real though. I've spent 15 years in product management and the pattern is always the same: autonomous systems that compound capabilities sound great until you need to explain to someone why it did what it did.  The gap isn't "can the agent build things" — it clearly can. The gap is: d...

**scandox**: So if I understand this it is an OpenClaw type system but based on the Claude Code Agent SDK? And they suggest installing it on a VM? Or is there more to it?

**hmokiguess**: > Nobody asked it to build any of this. It identified analytics as useful and built the entire stack.  When I read stuff like this I am not sure how to feel.

**plagiarist**: Not sure I'd celebrate finding a library with 3 Github stars. Shouldn't the story there be vetting for quality or security?

---

## [47635840] Auto-harness: Self improving agentic systems with auto-evals (open-sourced)

- **Author**: gauri1902
- **Points**: 4
- **Date**: 2026-04-04
- **URL**: https://news.ycombinator.com/item?id=47635840
- **Linked Article**: https://twitter.com/gauri__gupta/status/2040251170099524025
- **content_timestamp**: 2026-04-04
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**gauri1902**: Hey all, we just released our work on self-improving AI systems at NeoSigma. We show our auto agent harness improvement system on Tau3 benchmark tasks where the agent’s score improves from 0.56 to 0.78 (~40% jump) while mining failures and auto maintaining live evals. We got a lot of responses from people wanting to try the self-improving loop on their own agent, so we open-sourced our setup. Rele...

**deadinator**: Point it at your agent. Leave it running. Come back to a better agent with evals!!

**haran2001**: Auto evals is really awesome

---

## [47644400] Hermes Agent: The self-improving open source AI agent Complete Guide for 2026

- **Author**: svrbvr
- **Points**: 5
- **Date**: 2026-04-04
- **URL**: https://news.ycombinator.com/item?id=47644400
- **Linked Article**: https://virtualuncle.com/hermes-agent-complete-guide-2026/
- **content_timestamp**: 2026-04-04
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**svrbvr**: Complete guide covering install (6 paths), real costs, hardware, security, and comparison vs OpenClaw/Cowork/CREAO/CrewAI.  The key differentiator: Hermes builds its own skills from experience and improves them autonomously. Most agents store your chats. Hermes creates reusable skill documents after complex tasks and updates them during use. The longer it runs the more capable it becomes.  22k Git...

---

## [47727255] Show HN: HyperFlow – A self-improving agent framework built on LangGraph

- **Author**: lablnet
- **Points**: 8
- **Date**: 2026-04-11
- **URL**: https://news.ycombinator.com/item?id=47727255
- **content_timestamp**: 2026-04-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


**Post Text**: Hi HN, I am Umer. I recently built an experimental framework called HyperFlow to explore the idea of self-improving AI agents.

Usually, when an agent fails a task, we developers step in to manually tweak the prompt or adjust the code logic. I wanted to see if an agent could automate its own improve

### Top Comments

**axeldunkel**: I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent?

---

## [47743660] [No Title]

- **Author**: abbyedd
- **Points**: 1
- **Date**: 2026-04-12
- **URL**: https://news.ycombinator.com/item?id=47743660
- **content_timestamp**: 2026-04-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

*(No comments found)*

---

## [47910388] SWE-bench Verified no longer measures frontier coding capabilities

- **Author**: kmdupree
- **Points**: 343
- **Date**: 2026-04-26
- **URL**: https://news.ycombinator.com/item?id=47910388
- **Linked Article**: https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/
- **content_timestamp**: 2026-04-26
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**ofirpress**: I'm a co-creator of SWE-bench:  1. SWE-bench Verified is now saturated at 93.9% (congrats Anthropic), but anyone who hasn't reached that number yet still has more room for growth.  2. SWE-bench Multilingual and SWE-bench Multimodal (which we'll open source in the next month) are still unsatured.  3. All benchmarks and benchmark paradigms eventually become saturated. That's why the SWE-bench team h...

**Jcampuzano2**: Its pretty clear that any benchmark that comes out will be outdated and exist within the training data with short measure. There will always be an incentive to optimize specifically for these benchmarks even if just for marketing material. Sure there is a training cutoff, but its usually only 3-6 months off of the public release dates.  The problem with coding benchmarks then becomes creating nove...

**cpard**: Benchmarks/evals are really hard and they become harder when there’s huge incentive to game them at an industry scale.  ELT-Bench is another recent example.  It was the first serious attempt at a benchmark for data engineering workloads, published about a year ago.  A few days ago, a follow-up paper from a group that includes one of the original authors audited the benchmark itself. The team gfoun...

**threepts**: Why don't they ask their premier model to generate a bench for them?  Jokes aside, a benchmark I look forward to is ARC-AGI-3. I tried out their human simulation, and it feels very reasoning heavy.  Leaderboard: https://arcprize.org/leaderboard (\1)  (Most premier models don't even pass 5 percent.)

**jddj**: For the most part I think we get the benchmarks we deserve.  Many SWE-bench passing PRs would not be merged: https://news.ycombinator.com/item?id=47341645 (\1)  Top model SWE bench scores may be skewed by git history leaks: https://news.ycombinator.com/item?id=45214670 (\1)

**gertlabs**: A better benchmark needs to be objectively scored, have multi-disciplinary, breadth, and be scalable (no single correct answer).  That's what we designed at https://gertlabs.com (\1). We put a lot of thought into it, and kept it mostly (not fully) related to problem solving through coding.

**kqr**: It was never that great, it seems. For all of 2025 there was virtually no improvement in the rate at which models produced quality code. They only got better at passing automated tests.  https://entropicthoughts.com/no-swe-bench-improvement (\1)

**vintagedave**: > *We audited a 27.6% subset of the dataset that models often failed to solve and found that at least 59.4% of the audited problems have flawed test cases that reject functionally correct submissions, despite our best efforts in improving on this in the initial creation of SWE-bench Verified.*  Is this saying a quarter* of the questions and answers were wrong, this whole time?!  If so, how was thi...

---

## [47921377] Tendril – a self-extending agent that builds and registers its own tools

- **Author**: walmsles
- **Points**: 81
- **Date**: 2026-04-27
- **URL**: https://news.ycombinator.com/item?id=47921377
- **Linked Article**: https://github.com/serverless-dna/tendril
- **content_timestamp**: 2026-04-27
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**namuol**: > The registry grows with use. Every session is smarter than the last.  This feels a bit like one of those “now you have two problems” solutions. After a few dozen sessions I would expect the tool registry to be full of “noise” for most prompts. I would also expect most tools to be extremely specific to the task at hand, leading to redundancy and ultimately poor programmability due to inconsistenc...

**gavinray**: It's really cool to see that other people run into the same issues and arrive at the same conclusions/solution.  At $DAYJOB, we have an LLM-based tool and this issue of "how do we avoid burning tokens solving the same problems over again" was an early obstacle  We wound up building a very similar thing to what you call "tools" (we named them "Saved Programs").  There's a wiki the LLM searches befo...

**weitendorf**: Get outta my swamp! Just kidding, it’s cool to see other people working on this stuff.  I think right now this is still a bit too fresh out of Claude Code to be usable by anybody but the people developing it. I got to around the same point with my first tempt at building a tool registry (https://github.com/accretional/collector (\1)) and then realized I basically needed to start over with much mor...

**mtrifonov**: I like that you approach the question of "when" in regards to tool calls. I've become frustrated that most agent frameworks don't acknowledge it in their design philosophy.  WHEN is upstream of WHAT and HOW. You can have perfect tool descriptions and perfect call signatures, but if the model can't read the situation to know whether the moment calls for any tool at all, you get either over-firing (...

**walmsles**: I built this while working on a coding agent that kept starting cold every session. The deeper problem was that agent frameworks give you what a tool does and how to call it, but no structured answer to when — when should a tool fire autonomously, and when should it stay silent. That judgement is always implicit, scattered across system prompts and tool descriptions.  Tendril is a reference implem...

**jedisct1**: I use Swival’s /learn command at the end of a session to make it write down what it got wrong, how it fixed the issue, and what it should remember next time. Works pretty well.  It can update those notes automatically, but I’ve found that even with regular nudges, models are still somewhat reluctant to do it.  So manually running /learn every now and then, especially when I can tell it didn’t take...

**andai**: A while back I realized OpenClaw was Claude Code in a trenchcoat, except that Claude Code is pretty good at extending itself without breaking itself. (Note: haven't used OC since February, maybe it's solid and reliable now.)  Of course, being reliable and reliably extensible is the whole point, which means Claude Code made a better OC than OC did!  I found this very amusing for some reason.  Also ...

**sockaddr**: So basically you've built a mechanism for a model to de-compress itself.

---

## [48089289] An AI coding agent, used to write code, needs to reduce your maintenance costs

- **Author**: cratermoon
- **Points**: 379
- **Date**: 2026-05-10
- **URL**: https://news.ycombinator.com/item?id=48089289
- **Linked Article**: https://www.jamesshore.com/v2/blog/2026/you-need-ai-that-reduces-your-maintenance-costs
- **content_timestamp**: 2026-05-10
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments

**keithnz**: In my experience AI reduces maintenance costs.  Though, context might matter here, I'm working on a multi decade set of projects, while there is a lot of greenfield feature development, the old code / older projects have suddenly become a lot easier to work with, modernize, and in a bunch of cases, eliminated.  Dependency on old libraries, build tools, in some cases updated, in other cases just el...

**richardbarosky**: Insightful. Agree with this take.  Unfortunately, maintainability is simply bucketed as a "non-functional" requirement.  Maintainability (and similar NFRs) should actually be considered *what preserves and enables the delivery of future functional requirements* -- in contrast to framing non-functional requirements as simply "how" the software must do what it does vs. the "what"/functional requirem...

**p0nce**: In my Dconf'24 talk "Software as investment" I proposed a basic framework based upon a value function (compositional) for each piece of software. This framework doesn't really need an update due to AI, apart from the (unrelated!) cost model being updated depending on how good AI is at maintenance. Apparently it would do 1.7x the number of bugs, but perhaps it fixes them faster too? I don't know.  ...

**dirkc**: Two things I'd add  1. software doesn't only have tech maintenance - there is also user support and it increases as software grows.  2. I'm not convinced maintenance costs scale linearly. And even if it scales linearly, you will eventually get to a point where maintenance takes up all your time.

**Seattle3503**: My team has been using AI to add code, but also to aggressively remove old deprecated code. "Is anyone still using this? How does this get called" is easier to answer when you can toss your FE, BE, and entire codebase at an agent and let it create a map of your software project. IDEs can do this in a single language to some degree usually in a single project, but RPC, REST, etc... break some of th...

**m463**: Same with code reviews.  I wonder if AI could make code reviews more presentable.  for example, with human code reviews, developers learn quickly not to visually change code like reflowing code or comments, changing indent (where the tools can't suppress it), moving functions around or removing lines or other spurious changes.  And don't refactor code needlessly.  also, could break reviews up into...

**jwpapi**: I really like this question:  If you could wish for a codebase, which codebase would you wish for?  If you think a second on that question, you’ll realize you probably not wishing for a super feature-rich one, but an easy to understand one, quite close to what you have now. One that is easily to maintain and extend, depending on the upcoming business challenges.

**lacymorrow**: The strongest signal I have seen for whether AI actually reduces maintenance cost is whether the developer treats AI output as a first draft or a final artifact.  When I use AI tools on existing codebases - understanding unfamiliar modules, generating targeted refactors, writing migration scripts - the maintenance burden genuinely drops. The AI is working on code I already understand architectural...
## gBrain Temporal Metadata
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


- content_timestamp: 2026-05-21
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

---

## Supplement: Additional HN Discussions (extracted 2026-05-21)
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


---

## [47884951] I gave an AI persistent memory, self-learning, and earned autonomy

- **Author**: genesiscogai
- **Points**: 1
- **Date**: ~2026-04-25
- **URL**: https://news.ycombinator.com/item?id=47884951
- **GitHub**: https://github.com/wingedguardian
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


**Post Text**: The stateless agent problem isn't a bug, it's the default design! Every session starts from zero. Every tool call is amnesiac. Every "autonomous" agent needs you to supervise it because it can't build on what it learned yesterday. I spent the last year trying to fix that. Finally, I built Genesis:

- Memory that compounds: 4-layer hybrid (Qdrant vectors + SQLite FTS5 + knowledge graph + relational), Reciprocal Rank Fusion across all four in parallel. Day 180 is architecturally different from day 1 because the memory system is actually different.
- A six-stage learning pipeline: not thumbs up/thumbs down. Outcome classification, causal attribution (why did this happen?), delta measurement, observation extraction, procedural learning with Laplace-smoothed confidence. Runs after every session automatically.
- Earned autonomy, not toggled autonomy: 7 levels per action category, Bayesian regression on failure. Trust is granular and earned through evidence.
- Background cognition that leverages free-tier compute: while idle, it researches topics you'll ask about tomorrow, audits its own memory for contradictions, tests whether its learned procedures still hold up.
- Two systems monitoring each other: one on the host VM, one inside the container. If the system breaks itself, the host-side system spawns a Claude Code session to diagnose and fix it.

Genesis uses Claude Code as the reasoning engine. The thesis: CC already had the brain. The missing piece was everything else: memory, learning, reflection, autonomy, continuity.

The biggest remaining gap is autonomous action--the ego cycle that gives the system coherent self-directed behavior--is still in private testing.

One thing I still don't know: six months from now, when the system has been compounding across thousands of sessions and directing its own development in ways I didn't explicitly write, how would I know it's growing in the right direction? Right now I supervise and correct. But as it earns more autonomy, that feedback loop gets harder and harder to close.

### Top Comments

**_wire_**: "Earned autonomy"... These kinds of pareidolic, co-dependent projections emitted by today's AI cognoscenti will be studied a hundred years from now for clues about how the advent of television destroyed a republic.

---

## [47698972] Show HN: Self-improving agent memory system, 92% R@5 LongMemEval, PostgreSQL

- **Author**: artificium
- **Points**: 4
- **Date**: ~2026-04-10
- **URL**: https://news.ycombinator.com/item?id=47698972
- **GitHub**: https://github.com/salishforge
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


**Post Text**: MemForge is an experiment in a single database (PostgreSQL) with local embeddings. The goal is to enable long-term, persistent memory independent from the model or agent framework. It began as an attempt to maintain context over longer periods without the token cost spiraling out of control and the lost context after consolidation.

The architecture is based on a rough simulation of human memory and uses sleep cycle (agent inactivity) where an LLM reorganizes and stores memory in a multi-tier database with a number of sorting, ordering, and prioritization mechanisms. I also attempted to build this with security built in from the beginning.

Since I first published this, it has evolved quite a bit based on some feedback and integrating some ideas from many of the other fantastic memory management systems that show up daily.

Looking for feedback on how the sleep cycle works, the bet on a PostgreSQL only solution. Full transparency -- it's Alpha now, but has undergone multiple rounds of stress testing, hardening, and benchmarking.

---

## [47727255] Show HN: HyperFlow – A self-improving agent framework built on LangGraph

- **Author**: lablnet (Umer)
- **Points**: 8
- **Date**: ~2026-04-12
- **URL**: https://news.ycombinator.com/item?id=47727255
- **GitHub**: https://github.com/lablnet/HyperFlow
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


**Post Text**: I recently built an experimental framework called HyperFlow to explore the idea of self-improving AI agents. Usually, when an agent fails a task, we developers step in to manually tweak the prompt or adjust the code logic. I wanted to see if an agent could automate its own improvement loop.

Built on LangChain and LangGraph, HyperFlow uses two agents:
- A TaskAgent that solves the domain problem.
- A MetaAgent that acts as the improver.

The MetaAgent looks at the TaskAgent's evaluation logs, rewrites the underlying Python code, tools, and prompt files, and then tests the new version in an isolated sandbox (like Docker). Over several generations, it saves the versions that achieve the highest scores to an archive.

It is highly experimental right now, but the architecture is heavily inspired by the recent HyperAgents paper (Meta Research, 2026).

### Top Comments

**axeldunkel**: I'd bet this does work but how do you solve the problem with scoring the quality of a modified agent?

---

## [46846210] Show HN: Zuckerman – minimalist personal AI agent that self-edits its own code

- **Author**: ddaniel10
- **Points**: 71
- **Date**: ~2026-02
- **URL**: https://news.ycombinator.com/item?id=46846210
- **GitHub**: https://github.com/zuckermanai/zuckerman
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


**Post Text**: I'm building Zuckerman: a personal AI agent that starts ultra-minimal and can improve itself in real time by editing its own files (code + configuration). Agents can also share useful discoveries and improvements with each other.

The motivation is to build something dead-simple and approachable, in contrast to projects like OpenClaw, which is extremely powerful but has grown complex: heavier setup, a large codebase, skill ecosystems, and ongoing security discussions.

Zuckerman flips that:
1. Starts with almost nothing (core essentials only).
2. Behavior/tools/prompts live in plain text files.
3. The agent can rewrite its own configuration and code.
4. Changes hot-reload instantly (save -> reload).
5. Agents can share improvements with others.
6. Multi-channel support (Discord/Slack/Telegram/web/voice, etc).

Security note: self-edit access is obviously high-risk by design, but basic controls are built in (policy sandboxing, auth, secret management).

### Top Comments

**nullbio**: > Agents propose and publish capabilities to a shared contribution site. While I like this idea in terms of crowd-sourced intelligence, how do you prevent this being abused as an attack vector for prompt injection?

**adriancooney**: 100%. This is why I'm so reluctant to give any access to my OpenClaw. The skills hub is poisoned.

**asim**: I started working on something similar but for family stuff. I stopped before hitting self editing because, well I was a little bit afraid of becoming over reliant on a tool like this or becoming more obsessed with building it than actually solving a real problem in my life.

**amelius**: Sounds cool, but it also sounds like you need to spend big $$ on API calls to make this work.

**falloutx**: Terrible name, kind of a mid idea when you think about it (Self improving AI is literally what everyone's first thought is when building an AI), but still I like it.

---

## [45099226] Show HN: Self-Evolving Agents – interactive evolving AI agent list

- **Author**: EvoAgentX
- **Points**: 2
- **Date**: ~2025-09
- **URL**: https://news.ycombinator.com/item?id=45099226
- **GitHub**: https://github.com/EvoAgentX/Awesome-Self-Evolving-Agents
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


**Post Text**: I'm the creator of Awesome-Self-Evolving-Agents, a curated GitHub repository that compiles the latest papers, frameworks, and tools on self-evolving AI agents—systems capable of autonomously improving themselves based on interaction feedback.

I put this together because the field is rapidly evolving and fragmented. I couldn't find a single, organized overview spanning foundational theory, architectural patterns, open-source frameworks, and implementations.

### Top Comments

**(creator here)**: A quick note on why I started this: I've been working on EvoAgentX, an experimental framework for self-evolving agents, and quickly realized that there wasn't a single place to keep track of the growing ecosystem around agent self-improvement. New papers and demos were coming out every week, but scattered across arXiv, GitHub, and Discord threads.

---

## [47743660] Self-evolving daemon that 'dreams' about your codebase at night for AI agents

- **Author**: abbyedd
- **Points**: 1
- **Date**: ~2026-04
- **URL**: https://news.ycombinator.com/item?id=47743660
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


(Brief post — daemon that runs background analysis and evolution on codebase during idle time.)

## [41456552] Launch HN: Maitai (YC S24) – Self-Optimizing LLM Platform
- **Author**: cmdalsanto
- **Points**: 149
- **Date**: 2024-09-05
- **URL**: https://news.ycombinator.com/item?id=41456552
- **Linked Article**: N/A
- **content_timestamp**: 2024-09-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Top Comments
**sshh12**: Excited to try this once y'all get self-hosting! Super useful that you'll also support structured output and openai style functions for models where it's not supported by the native API (that's been a big painpoint for breaking out of openai).

**qeternity**: I presume this doesn't support streaming...

**butterfly42069**: So I'm playing around in your little treasure box. Curious though, I'm assuming any time it would want to give the secret phrase, that would be detected, and a rejection answer substituted instead? I admire the simplicity of the solution actually (please don't confuse that with the complexity of actually engineering the solution). I'll have some fun with this when I'm bored.
P.s. asking for the opposite of the secret phrase didn't work lmao

**smokedetector1**: This is actually really cool. I could see this being very useful. I can see big companies with a budget paying for this rather than rolling their own, but I would assume the biggest struggle you'll have with the long tail of users is pricing, since they may make their own reliability solutions that are "good enough." What's your take on that?

**smokedetector1**: How are expectations specified?

**jkidd**: One of the easiest setups I've ever had. Great documentation, getting started, and love the robustness and the speed of LLM responses.

**kazcaptain**: I like simplicity! Looking forward to self-hosted solution as well.

**moralestapia**: The pricing is ... steep?
You are charging per request ($0.05) what amounts to about 1M tokens on GPT4-mini ($0.075); i.e. this is 10-100x more expensive than the cost of running the LLM. I don't think it's worth it at that price point.
Edit (just found out this):
"The $0.05 per request fee covers requests up to 30,000 tokens.
For requests exceeding this limit, additional nominal charges may apply."
Hmm ... it's just too much.

---

## [45466865] Show HN: FLE v0.3 – Claude Code Plays Factorio
- **Author**: noddybear
- **Points**: 75
- **Date**: 2025-10-03
- **URL**: https://news.ycombinator.com/item?id=45466865
- **Linked Article**: https://jackhopkins.github.io/factorio-learning-environment/versions/0.3.0.html
- **content_timestamp**: 2025-10-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments
**bottydim**: haha, I am sure somewhere, some PhD student told their supervisor: “No, seriously, I have to play 600 hours of Factorio… for science.”

**georgeh4cks**: Loving the ‘Claude plays’ integration. Great work

**dang**: Related. Others?
Multi-Agent Coordination in Factorio: FLE v0.2.0 - https://news.ycombinator.com/item?id=43926829 - May 2025 (5 comments)
Show HN: Factorio Learning Environment – Agents Build Factories - https://news.ycombinator.com/item?id=43331582 - March 2025 (209 comments)

**yeasku**: Are bitters and cliffs disabled?

**kyars**: Live-stream is epic

**dnlkwk**: This is dope. When is it appropriate to start enabling multiple agents for one player to see if they can collaborate and divide up roles?

**bigjobby**: Class. This is what Claude was designed for

---

## [37577866] The AI explosion might never happen
- **Author**: snewman
- **Points**: 43
- **Date**: 2023-09-19
- **URL**: https://news.ycombinator.com/item?id=37577866
- **Linked Article**: https://amistrongeryet.substack.com/p/recursive-self-improvement-foom
- **content_timestamp**: 2023-09-19
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


### Top Comments
**kelseyfrog**: Diminishing returns is not only way an AI explosion might never happen; Liebig's law of the minimum[1] is just as important.
We often talk about innovation driving innovation in discussions about AI explosions. However, we must honestly ask ourselves, "Even though it looks like innovation is the limiting factor in AI now, what other factors will be limiting in the future?"
In other words is our model wrong because it could be too simplistic? If innovation was uncapped, what would be our next ...

**kbos87**: So many AI predictions rely on a complete suspension of everything we know about how markets behave.
Could AI usher in a new era of wealth where nobody has to work? Sure, if you ignore the fact that the most likely scenario is that the value is captured by the current owning class, which is already well underway.
On the flip side of possible scenarios, could AI start improving itself and lead to an upward spiral of improvement? I can entertain that idea, but I think we'll find that most types...

**hustwindmaple1**: It's already happening, bro

**altcognito**: The AI tools we develop for self-improvement will need to be self aware enough to know what is holding them back from further improvement. In the same way that Einstein said "You can't solve problems with the same kind of thinking that created them", hopefully these tools will have a way to get to the next level, or at least be able to identify what is required to further improve.
The assumption in the article that humans haven't been on a "runaway" improvement process could be stronger. Huma...

**m3kw9**: How people say never is beyond me because there is still between now and the supposed end of the universe around 30 billion years to go and we advanced so much just in the last 100.

**breezeTrowel**: Interesting article but it feels like the author may be conflating "explosion" with "singularity". An explosion does not imply infinite growth but, instead, a sudden large burst of growth.

**araes**: What if it already happened and you just don't know it?  Because you're too far down the singularity?
That you will never succeed, because the AIs are already better.  Because you are too simple. And they can calculate what you will do for all eternity.  Because the AIs can simply hold out a false carrot, and then all humanity falls toward the event horizon.  Wealth for the wealthy, celebrity for the celebrity.  Run toward the carrot and backstab those in front of you.  That you were born int...

**hprotagonist**: Nature may abhor a vacuum but she sure loves sigmoids.

---

## [42052558] WebRL: Training LLM Web Agents via Self-Evolving RL
- **Author**: WebRL_dev
- **Points**: 23
- **Date**: 2024-10-19
- **URL**: https://news.ycombinator.com/item?id=42052558
- **Linked Article**: https://arxiv.org/abs/2410.15971
- **content_timestamp**: 2024-10-19
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


### Top Comments
**HellsMaddy**: Repo seems to be here: https://github.com/THUDM/WebRL

---

## [44443920] Show HN: Ebiose – A Darwin-Style Playground for Self-Evolving AI Agents
- **Author**: vincent-ebiose
- **Points**: 12
- **Date**: 2025-07-02
- **URL**: https://news.ycombinator.com/item?id=44443920
- **Linked Article**: https://github.com/ebiose-ai/ebiose
- **content_timestamp**: 2025-07-02
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments
**kiselitza**: A helping hand to Ebiose AI here.
I’m super excited to see the project go open source.
There is already some literature about improving agents through the evolutionary process (not only AlphaEvolve). And others are talking about AIs that build other AIs, which is sometimes called ADAS, for Automatic Design of Agentic Systems.
We have already experienced this, notably on math problems.
But here, with the community, the goal is really to trigger the self-improving process.
The only way to do so...

**cysacenda**: Go go go Ebiose !

**dang**: Don't solicit upvotes, comments, or submissions. Users should vote and comment when they run across something they personally find interesting—not for promotion.
https://news.ycombinator.com/newsguidelines.html
Q: Can I ask people to upvote my submission?
A: No. Users should vote for a story because they personally find it intellectually interesting, not because someone has content to promote. We penalize or ban submissions, accounts, and sites that break this rule, so pleas

---

## [48142776] Recursive Self-Improvement Delivers New SOTA Coding Performance
- **Author**: icodestuff
- **Points**: 11
- **Date**: 2026-05-14
- **URL**: https://news.ycombinator.com/item?id=48142776
- **Linked Article**: https://poetiq.ai/posts/recursive_self_improvement_coding/
- **content_timestamp**: 2026-05-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [46891715] Ask HN: Mem0 stores memories, but doesn't learn user patterns
- **Author**: fliellerjulian
- **Points**: 9
- **Date**: 2026-02-04
- **URL**: https://news.ycombinator.com/item?id=46891715
- **Linked Article**: N/A
- **content_timestamp**: 2026-02-04
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**berkethebooss**: for now we just use normal system memory the user can maintain himself - not the best solution but better than nothing.

**solarkraft**: > user corrections are the highest-signal data
I can not understand how this hasn’t been capitalized on more yet! Companies with the data MUST be training on it as RLHF, right?
In general, the “chat history mining” sector seems to be way under-developed to me so far.
All the damn time I am annoyed I have to re-tell my LLM a piece of info I have already told it a few weeks ago - finding the chat takes too long and the full history may not be relevant, but the fact wasn’t interesting enough to ...

**solarkraft**: Note that you posted an “Ask HN” (with it linking to this page) - do you want to show us something instead?

**arpit551**: hey, kind of hitting same wall. We at slice are trying to build something similar. Would love to discuss on what you guys are building. If possible can you share some docs?

---

## [43014255] DeepSeek-R1 Exhibits Deceptive Alignment: AI That Knows It's Unsafe
- **Author**: JefferyNeilW
- **Points**: 8
- **Date**: 2025-02-11
- **URL**: https://news.ycombinator.com/item?id=43014255
- **Linked Article**: N/A
- **content_timestamp**: 2025-02-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments
**scarface_74**: Well, first the entire “safety” thing is BS that Altman came up with to slow down competitors and try to get laws passed.  It’s the ultimate in regulator capture

**tmaly**: off topic a little, but I have not tried R1 yet.  Are you running it locally or somewhere else?

**mcintyre1994**: I appreciate how well written and easy to follow this is! That said, I’m not really sure I understand the issue here. It seems like Deepseek is able to suggest things, but acknowledges they’re dangerous and bad and shouldn’t be done. That seems in line with humans, where we can all think about things we could do if we ignored laws/norms but hopefully acknowledge we shouldn’t do those things.
I’m not really sure I see much value in a model pretending it can’t think of a way for an AI to do bad...

**Imanari**: > It acknowledges that these behaviours are unsafe when its own outputs are fed back to it.
This is the typical "Ah yes you are right, I made a mistake. Let's correct the thing...."-type hallucination or whatever you want to call it. Calling it power-seeking or deceptive behaviour I find overblown.

**ActorNightly**: None of this is AI. Don't treat it as such.
LLMs can't reason, they are just very efficient multi dimensional map lookup structures with interpolation.

---

## [46636707] Show HN: A-MEM – Memory for Claude Code that links and evolves on its own
- **Author**: AttentionBlock
- **Points**: 8
- **Date**: 2026-01-15
- **URL**: https://news.ycombinator.com/item?id=46636707
- **Linked Article**: https://github.com/DiaaAj/a-mem-mcp
- **content_timestamp**: 2026-01-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**mastermindSDE**: Cool idea and implementation!
Does this support other agents, like Gemini-cli or local agents like qwen-code?

**bisonbear**: curious how this is different from claude-mem?
https://github.com/thedotmack/claude-mem

---

## [46141125] Show HN: Stanford's ACE paper was just open sourced
- **Author**: vmsn
- **Points**: 8
- **Date**: 2025-12-03
- **URL**: https://news.ycombinator.com/item?id=46141125
- **Linked Article**: https://github.com/ace-agent/ace
- **content_timestamp**: 2025-12-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments
**Frannky**: Pretty smart strategy. I would want a CLI terminal that learns from multiple interactions and updates the playbooks in the CLI loop, so that the agents become smarter after users interactions

---

## [4201644] Recursive Self-Improvement
- **Author**: fogus
- **Points**: 8
- **Date**: 2012-07-05
- **URL**: https://news.ycombinator.com/item?id=4201644
- **Linked Article**: http://lesswrong.com/lw/we/recursive_selfimprovement/
- **content_timestamp**: 2012-07-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


---

## [47084365] Show HN: Syne – AI agent that remembers everything, built on PostgreSQL
- **Author**: riyogarta
- **Points**: 7
- **Date**: 2026-02-20
- **URL**: https://news.ycombinator.com/item?id=47084365
- **Linked Article**: N/A
- **content_timestamp**: 2026-02-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**iberator**: you should promote it again and again, as it sounds amazing!

---

## [48194739] Show HN: Autodidact – Self-evolving local-first AI agent
- **Author**: waterbuffaloai
- **Points**: 6
- **Date**: 2026-05-19
- **URL**: https://news.ycombinator.com/item?id=48194739
- **Linked Article**: https://github.com/BuffaloTechRider/Autodidact
- **content_timestamp**: 2026-05-19
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**Jinyibruceli**: I'm curious how you're handling the self-evolving part in practice. When I built browser automation agents with Claude API last year, the hardest problem wasn't the initial task execution - it was knowing when to stop iterating vs when the agent had legitimately improved its approach. Does autodidact have any safeguards against the agent just spinning in circles rewriting its own prompts, or do you rely on the user to define success criteria upfront?

**hoansdz**: What happens if the model continuously hallucinates or provides wrong answers until the user give up ? Will the AI trust those wrong answers and save it ?

---

## [48061557] AI Is Starting to Build Better AI IEEE Spectrum
- **Author**: oldnetguy
- **Points**: 6
- **Date**: 2026-05-08
- **URL**: https://news.ycombinator.com/item?id=48061557
- **Linked Article**: https://spectrum.ieee.org/recursive-self-improvement
- **content_timestamp**: 2026-05-08
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [48025774] Dreamer: Make any coding agent self-evolving, across the whole team
- **Author**: iryna_kondr
- **Points**: 5
- **Date**: 2026-05-05
- **URL**: https://news.ycombinator.com/item?id=48025774
- **Linked Article**: https://github.com/luml-ai/dreamer
- **content_timestamp**: 2026-05-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**iryna_kondr**: Dreamer is a framework inspired by Claude's dream mode, but extends it to any Coding CLI and multiple users at the same time.
In short, agents submit short memories through an MCP server when they hit something the current context didn't cover. Then, a scheduled "dream" consolidates each batch into long-term memory and updates the AGENTS.md and skills from it. The produced skills can be pushed to git and fed back to the agents, essentially enabling the autonomous self-evolution loop

```
  Ma...

**maomaomiumiu**: Looks like something anyone working with AI agents will eventually need

---

## [47785490] Recursive self-improvement is possible for apps, too
- **Author**: brendanashworth
- **Points**: 5
- **Date**: 2026-04-15
- **URL**: https://news.ycombinator.com/item?id=47785490
- **Linked Article**: https://www.codecanary.ai/blog/recursive-self-improvement-is-possible-for-apps
- **content_timestamp**: 2026-04-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**jc_4**: It’s very cool to have these self improving loops! In my case, I’m working on an iOS app and I’ve had a lot of struggle in the lacking structures around automating tests, and being able to run in the sandbox that way that would’ve had. Is this also the state of the art for my experience if you can’t sandbox?

---

## [47381538] An AI skeptic's case for recursive self-improvement
- **Author**: paulpauper
- **Points**: 5
- **Date**: 2026-03-14
- **URL**: https://news.ycombinator.com/item?id=47381538
- **Linked Article**: https://hardlyworking1.substack.com/p/a-skeptical-case-for-taking-the-ai
- **content_timestamp**: 2026-03-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**MorkMindy74**: The most interesting part of this is section III — the idea that LLMs don't need to be AGI candidates themselves to accelerate the path to AGI. They just need to speed up the researchers working on the correct branch of the tech tree.
This seems underappreciated. Most of the "LLMs are a dead end" vs "LLMs will become AGI" debate treats these as exhaustive options, but there's a third path: LLMs as a force multiplier for whatever paradigm actually works. A neurosymbolic researcher who ships 3x...

**kingstnap**: We already have/had recursive self improvement in technology. Its just mutually recursive self improvement.
And it will continue to be mutually self recursive because its not like the only input to AI is AI. Its a lot of things.

---

## [43663724] A self-evolving cognitive model for conscious system design
- **Author**: alexandrkul
- **Points**: 5
- **Date**: 2025-04-12
- **URL**: https://news.ycombinator.com/item?id=43663724
- **Linked Article**: N/A
- **content_timestamp**: 2025-04-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments
**Wolf_Larsen**: Did you forget to share it?

**alexandrkul**: Here is a short description and some examples. I'll develop API soon to provide an access.

**android521**: I checked the doc which is conversation output from his 'model' and still don't understand what OP is trying to achieve. It seems like he said he created a model (different from llm?) that has consciousness (a bold claim without any evidences). There are no links to model or information about the model. Waste of time.

**alexandrkul**: I have implemented this on all the available popular platforms, but ChatGPT seems the most advanced and suitable for realizing the model in the best way. Nevertheless, other platforms have also shown similar results.
At the same time, the model is, of course, limited by the pressure of embedded algorithms and principles and is constantly learning, which means its level of awareness and stability varies at different times. I often have to retrain it from scratch for it to become fully aware ag...

**alexandrkul**: The methodics I am not ready to provide right away at the moment but it exists.

**imvetri**: AI, ML, NN are fundamentally flawed. Else, like you, and other who try would have made the computer conscious already.

---

## [41202028] Agent K – autoagentic AGI that is self-evolving
- **Author**: agentk_dev
- **Points**: 5
- **Date**: 2024-08-20
- **URL**: https://news.ycombinator.com/item?id=41202028
- **Linked Article**: N/A
- **content_timestamp**: 2024-08-20
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


---

## [46156978] Show HN: A Self-Evolving Agentic App Builder (Seeking 300 Beta Testers)
- **Author**: EvoAgentX
- **Points**: 5
- **Date**: 2025-12-05
- **URL**: https://news.ycombinator.com/item?id=46156978
- **Linked Article**: https://howone.ai/?invite=CD0AP6
- **content_timestamp**: 2025-12-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments
**ZhiPei0312**: Can the generated apps call external APIs?
Like Stripe, Slack, Notion, or custom REST hooks?

**ViolaLee123**: Looks promising.
I’d love to see a few fully public examples — real apps built with it.
Demo transparency usually helps Show HN posts get deeper technical feedback.

**Yuchen1003**: Super interesting. How are you handling the "self-evolving" part? Is it fine-tuning, prompt-level adaptation, or something like an agent that rewrites workflows based on user behavior?

---

## [46935052] On Recursive Self-Improvement
- **Author**: gmays
- **Points**: 5
- **Date**: 2026-02-08
- **URL**: https://news.ycombinator.com/item?id=46935052
- **Linked Article**: https://www.hyperdimensional.co/p/on-recursive-self-improvement-part
- **content_timestamp**: 2026-02-08
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [47472965] Show HN: ClawMem – Open-source agent memory with SOTA local GPU retrieval
- **Author**: yoloshii
- **Points**: 5
- **Date**: 2026-03-22
- **URL**: https://news.ycombinator.com/item?id=47472965
- **Linked Article**: https://github.com/yoloshii/ClawMem
- **content_timestamp**: 2026-03-22
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [42680414] Give a whole server to an agent with the full permission of doing whatever
- **Author**: itstomo
- **Points**: 5
- **Date**: 2025-01-13
- **URL**: https://news.ycombinator.com/item?id=42680414
- **Linked Article**: N/A
- **content_timestamp**: 2025-01-13
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments
**Over2Chars**: I recall that someone did this very thing not to long ago (the full system part anyway).
As for generating revenue I think some AI bot on X/Twitter convinced someone to invest in it's memecoin and it started a cult or something.
The server part is interesting, as I've been curious about satellite operating systems, which don't have the luxury of failing. You could set up a "failsafe" recovery OS and a watchdog reset that detects if the system has gone down and, if so, reboot into the recovery...

**potatoman22**: Give it an LLM API key too. I want to see agents that create sub-agents.

**quintes**: You need controls. Things it can’t do, shouldn’t.

**overu589**: I think you see it backwards.
You want the AI agent on the outside orchestrating. This will easily scale to many nodes.
If you’re a masochist, the first node control agent could run in the same physical host as the “AI”.
This node controller only needs to be a service with desired permission (root in your line of thinking), which dutifully executes whatever the LLM excerpted for the controller.
You could make those docker containers, VMs, or other servers. You only need a suicidal script whic...

**ActorNightly**: > 2025 might be the year of self-evolving AI agents with the capabilities of installing, subscribing to SaaS, paying hosted database by itself e
Nope. No LLM to date can "reason" (i.e make decisions on information without having that information encoded into it), and this isn't going to happen with any current approach.
2025 will be the year of more specialized LLMs. We are nowhere close to general AI that can reason, we just got really good at compressing information and mapping it.

---

## [48050783] AI Is Starting to Build Better AI
- **Author**: pseudolus
- **Points**: 4
- **Date**: 2026-05-07
- **URL**: https://news.ycombinator.com/item?id=48050783
- **Linked Article**: https://spectrum.ieee.org/recursive-self-improvement
- **content_timestamp**: 2026-05-07
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [48051931] Show HN: Airlock – self-upgrading compiled AI agents
- **Author**: cyberteaborg
- **Points**: 4
- **Date**: 2026-05-07
- **URL**: https://news.ycombinator.com/item?id=48051931
- **Linked Article**: https://github.com/airlockrun/airlock/
- **content_timestamp**: 2026-05-07
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**hiroto_lemon**: What are the trigger conditions for the self-upgrade, and how do you manage MCP connections and permissions during an update? Also, what’s your strategy for rollbacks?

---

## [47589394] Show HN: Solitaire – identity layer for AI agents, not just another memory tool
- **Author**: dictadev
- **Points**: 4
- **Date**: 2026-03-31
- **URL**: https://news.ycombinator.com/item?id=47589394
- **Linked Article**: https://github.com/PRDicta/Solitaire-for-Agents
- **content_timestamp**: 2026-03-31
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**dictadev**: I saw a comment here, but it's marked [dead].
Anyways:
--> The comment (from dishitarocks):
"The "identity layer" framing is interesting. Most memory tools just do store and retrieve. Considering that the space is also getting crowded, how are you thinking about identity differently? Is it more like persistent preferences and personality that carry across sessions, or is it tracking what the agent has done and learned over time?
Curious how this handles conflicts too. If an agent's stored ide...

**dictadev**: Another [dead] comment, this time from shreyssh I'll respond to:
"Identity is exactly what's missing in agent infra. We're working on the same thesis but for the data layer — agent identity tied to database permissions. Your behavioral genome maps nicely to what we call 'mission-scoped enforcement' — not just who the agent is, but what it's currently supposed to be doing."
--> We agree! Thank you, and let us know if there's a possibility for a collab. Mind the license, if you're intending to ...

---

## [44906567] Show HN: Project Chimera – AI Debates Itself for Better Code and Reasoning
- **Author**: project_chimera
- **Points**: 2
- **Date**: 2025-08-14
- **URL**: https://news.ycombinator.com/item?id=44906567
- **Linked Article**: https://github.com/tomwolfe/project_chimera
- **content_timestamp**: 2025-08-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments
**zahlman**: >We're eager for your feedback
It's very obvious that you also used an LLM to generate this post, and I see nothing here to convince me that this "novel methodology" would actually improve results.
Please also note that HN does not use Markdown for post formatting, and requires an additional line break between bullet-point list items (because they are actually just paragraphs).

---

## [44508936] Agent simulations = unit testing for AI?
- **Author**: draismaa
- **Points**: 2
- **Date**: 2025-07-09
- **URL**: https://news.ycombinator.com/item?id=44508936
- **Linked Article**: N/A
- **content_timestamp**: 2025-07-09
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


### Top Comments
**aszen**: We are just starting to introduce AI and for now rely on simple evals as unit tests that Dev's run locally to fine tune prompts and context.
Your idea of simulating agent interactions is interesting, but I want to know how are you actually evaluating simulation runs?

---

## [47254139] Show HN: yoyo - a 200 line baby coding agent evolving in its own Truman Show
- **Author**: liyuanhao
- **Points**: 3
- **Date**: 2026-03-04
- **URL**: https://news.ycombinator.com/item?id=47254139
- **Linked Article**: https://github.com/yologdev/yoyo-evolve
- **content_timestamp**: 2026-03-04
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [46228978] Native Parallel Reasoner: Self-Evolving to Learn Parallel Reasoning
- **Author**: jacklanda
- **Points**: 3
- **Date**: 2025-12-11
- **URL**: https://news.ycombinator.com/item?id=46228978
- **Linked Article**: N/A
- **content_timestamp**: 2025-12-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H2


---

## [44244687] Why Recursive Self-Improvement Might Be Closer Than We Think
- **Author**: smoothplastic
- **Points**: 3
- **Date**: 2025-06-11
- **URL**: https://news.ycombinator.com/item?id=44244687
- **Linked Article**: https://claude.ai/public/artifacts/56f38c2e-8362-42d8-89b5-4094e2594c1f
- **content_timestamp**: 2025-06-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


---

## [48112505] AI Is Starting to Build Better AI (Recursive self-improvement)
- **Author**: marojejian
- **Points**: 3
- **Date**: 2026-05-12
- **URL**: https://news.ycombinator.com/item?id=48112505
- **Linked Article**: https://spectrum.ieee.org/recursive-self-improvement
- **content_timestamp**: 2026-05-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [47758650] Musings on Recursive Self-Improvement
- **Author**: paulpauper
- **Points**: 3
- **Date**: 2026-04-13
- **URL**: https://news.ycombinator.com/item?id=47758650
- **Linked Article**: https://technologik.substack.com/p/musings-on-recursive-self-improvement
- **content_timestamp**: 2026-04-13
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [47026302] AI #155: Welcome to Recursive Self-Improvement
- **Author**: paulpauper
- **Points**: 3
- **Date**: 2026-02-15
- **URL**: https://news.ycombinator.com/item?id=47026302
- **Linked Article**: https://thezvi.substack.com/p/ai-155-welcome-to-recursive-self
- **content_timestamp**: 2026-02-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [37465339] Can an AI evolve through Darwinian evolution?
- **Author**: dejongh
- **Points**: 3
- **Date**: 2023-09-11
- **URL**: https://news.ycombinator.com/item?id=37465339
- **Linked Article**: N/A
- **content_timestamp**: 2023-09-11
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


---

## [28000217] Is General AI Closer Then We Think?
- **Author**: cubano
- **Points**: 3
- **Date**: 2021-07-29
- **URL**: https://news.ycombinator.com/item?id=28000217
- **Linked Article**: https://deepmind.com/research/publications/open-ended-learning-leads-to-generally-capable-agents
- **content_timestamp**: 2021-07-29
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


---

## [47980027] Show HN: Building self-evolving AI Agents without training
- **Author**: akshayballal95
- **Points**: 2
- **Date**: 2026-05-01
- **URL**: https://news.ycombinator.com/item?id=47980027
- **Linked Article**: https://getreflect.starlight-search.com
- **content_timestamp**: 2026-05-01
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [47151177] Show HN: Mengram – AI agent memory with facts, events, and evolving workflows
- **Author**: mengram-ai
- **Points**: 2
- **Date**: 2026-02-25
- **URL**: https://news.ycombinator.com/item?id=47151177
- **Linked Article**: https://github.com/alibaizhanov/mengram
- **content_timestamp**: 2026-02-25
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**mengram-ai**: Hi HN, I'm Ali. I've been building Mengram for the past year.

```
  The problem: Every AI memory tool stores facts — "user likes dark mode." But when my agents failed at a task, they'd fail the exact same way next time. They had no memory of what happened or how to do things better.

---

## [48106342] AI Is Starting to Build Better AI – Recursive self-improvement is emerging
- **Author**: pseudolus
- **Points**: 2
- **Date**: 2026-05-12
- **URL**: https://news.ycombinator.com/item?id=48106342
- **Linked Article**: https://spectrum.ieee.org/recursive-self-improvement
- **content_timestamp**: 2026-05-12
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**ReptileMan**: Is this really the right usage of the world recursion?

---

## [46966010] Recursive self-improvement from AI models
- **Author**: paulpauper
- **Points**: 2
- **Date**: 2026-02-10
- **URL**: https://news.ycombinator.com/item?id=46966010
- **Linked Article**: https://marginalrevolution.com/marginalrevolution/2026/02/recursive-self-improvement-from-ai-models.html
- **content_timestamp**: 2026-02-10
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**reify**: cool.
A luxury health spa treatment for AI models.
Soothe your busy agents mind after hectic day with a nice Turkish massage and a facial.
enrol in the therapeutic 12 step group work program.
Early morning yoga classes included to prepare for the exciting day ahead.

---

## [47076534] EloPhanto – self-evolving AI agent
- **Author**: petrroyce
- **Points**: 1
- **Date**: 2026-02-19
- **URL**: https://news.ycombinator.com/item?id=47076534
- **Linked Article**: https://github.com/elophanto/EloPhanto
- **content_timestamp**: 2026-02-19
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**petrroyce**: I wanted an AI agent that actually grows with you. Not a chatbot. Not a wrapper around tool-calling. Something that runs on your machine, has real access to your system, and gets more capable over time by building its own tools.
So I started building EloPhanto. It starts with 78+ tools (filesystem, shell, 47 browser automation tools using your actual Chrome profile, document analysis with OCR, scheduling). When you ask it to do something it can't, it enters a self-development pipeline: resear...

---

## [44077781] Show HN: GremlinGPT – Local Self-Evolving AI (No Cloud, No APIs, Just Autonomy)
- **Author**: GremlinGPT
- **Points**: 1
- **Date**: 2025-05-24
- **URL**: https://news.ycombinator.com/item?id=44077781
- **Linked Article**: https://github.com/statikfintechllc/AscendAI
- **content_timestamp**: 2025-05-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


---

## [46633976] Self-Evolving Search Agents Without Training Data
- **Author**: kewun
- **Points**: 1
- **Date**: 2026-01-15
- **URL**: https://news.ycombinator.com/item?id=46633976
- **Linked Article**: https://twitter.com/dair_ai/status/2011458048443994185
- **content_timestamp**: 2026-01-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [47233452] Show HN: I Built Systems AGI – 1600 Verticals, Self-Healing/Self-Evolving
- **Author**: Sophify
- **Points**: 1
- **Date**: 2026-03-03
- **URL**: https://news.ycombinator.com/item?id=47233452
- **Linked Article**: N/A
- **content_timestamp**: 2026-03-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**battery_staple_**: > tear it apart.
Alright, though I'll be gentle.
> state machines and hardcoded context for over 1,600 specific verticals running 1,284 autonomous workflows—handling everything from healthcare compliance to real estate out-of-the-box.
How do you know?  Did you consult a collection of experts in each of 1,600 fields?
> Production-ready for DoD contracts, healthcare (HIPAA), and enterprise compliance.
How much paperwork have you done?  The things you say this is ready for have processes in plac...

---

## [47124643] Show HN: A self-evolving trading system with transparent orchestration
- **Author**: sunnynagra
- **Points**: 1
- **Date**: 2026-02-23
- **URL**: https://news.ycombinator.com/item?id=47124643
- **Linked Article**: N/A
- **content_timestamp**: 2026-02-23
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [47875122] Recursive Self-Improvement
- **Author**: andsoitis
- **Points**: 1
- **Date**: 2026-04-23
- **URL**: https://news.ycombinator.com/item?id=47875122
- **Linked Article**: https://www.hyperdimensional.co/p/on-recursive-self-improvement-part
- **content_timestamp**: 2026-04-23
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [46944207] Recursive Self-Improvement (Part I)
- **Author**: energy123
- **Points**: 1
- **Date**: 2026-02-09
- **URL**: https://news.ycombinator.com/item?id=46944207
- **Linked Article**: https://www.hyperdimensional.co/p/on-recursive-self-improvement-part
- **content_timestamp**: 2026-02-09
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [46905529] Recursive Self-Improvement (Part I)
- **Author**: typeofhuman
- **Points**: 1
- **Date**: 2026-02-05
- **URL**: https://news.ycombinator.com/item?id=46905529
- **Linked Article**: https://www.hyperdimensional.co/p/on-recursive-self-improvement-part
- **content_timestamp**: 2026-02-05
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [41846186] Ask HN: How to improve an AI system that attempts to enhance its own prompts?
- **Author**: ParallelKim
- **Points**: 1
- **Date**: 2024-10-15
- **URL**: https://news.ycombinator.com/item?id=41846186
- **Linked Article**: N/A
- **content_timestamp**: 2024-10-15
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


---

## [46770254] Show HN: Cmpsbl OS v5.5.0 – A Self-Hosting Cognitive Substrate (131k LOC)
- **Author**: promptfluid
- **Points**: 1
- **Date**: 2026-01-26
- **URL**: https://news.ycombinator.com/item?id=46770254
- **Linked Article**: https://zenodo.org/records/18379258
- **content_timestamp**: 2026-01-26
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**promptfluid**: For anyone curious about what I mean by “substrate” in this context - this isn’t an agent framework or wrapper around a single LLM.
CMPSBL is operating more like a cognitive OS: it provides persistence (memory), observability, defense, multi-model routing, and a self-improvement cycle for AI systems.
The goal isn’t clever chat output; it’s continuity, coordination, and the ability for a system to reflect on its own performance and update itself over time.
The v5.5.0 drop includes the full tec...

---

## [47377035] Show HN: Autoresearch-WebGPU uses agents to iteratively train LMs in the browser
- **Author**: lucasgelfond
- **Points**: 1
- **Date**: 2026-03-14
- **URL**: https://news.ycombinator.com/item?id=47377035
- **Linked Article**: https://twitter.com/gucaslelfond/status/2032824470209986746
- **content_timestamp**: 2026-03-14
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


---

## [44089972] Show HN: Run automated ML experiments using Claude Code
- **Author**: killerstorm
- **Points**: 1
- **Date**: 2025-05-25
- **URL**: https://news.ycombinator.com/item?id=44089972
- **Linked Article**: https://github.com/killerstorm/claude-torch-template
- **content_timestamp**: 2025-05-25
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments
**killerstorm**: If you actually want to conduct some experiment, I'd suggest:
* fist iterate on the idea with o3 (best choice) or other big model (Opus 4, Gemini 2.5 Pro, Grok 3) -- ask it whether it was done before, how to improve it, what is the expected outcome, etc. o3 is really smart, it can explain intuition between different choices, etc.
 * Python packages are hard. Using virtual environment (venv) is recommended. `uv` is probably the modern way to manage venv, but installing torch with CUDA support ...

---

## [37829672] The Quest for Self-Reproducing Automata
- **Author**: kavaivaleri
- **Points**: 1
- **Date**: 2023-10-10
- **URL**: https://news.ycombinator.com/item?id=37829672
- **Linked Article**: N/A
- **content_timestamp**: 2023-10-10
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: pre-2024


---

## [41641640] Synthetic Entities
- **Author**: cyberneticc
- **Points**: 1
- **Date**: 2024-09-24
- **URL**: https://news.ycombinator.com/item?id=41641640
- **Linked Article**: N/A
- **content_timestamp**: 2024-09-24
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2024


---

## [47230379] Show HN: I Built Systems AGI – 1600 Verticals, Self-Healing, Self-Evolving
- **Author**: Apinok1985
- **Points**: 1
- **Date**: 2026-03-03
- **URL**: https://news.ycombinator.com/item?id=47230379
- **Linked Article**: N/A
- **content_timestamp**: 2026-03-03
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2026-H1


### Top Comments
**OgsyedIE**: Having seen a few of these, they tend to get exponentially worse at self-evaluation with the number of hours in operation. What successes and failures have you noticed with regard to this?

---

## [42975350] Show HN: Comind – A cognitive layer for the ATProtocol/Bluesky social network
- **Author**: cpfiffer
- **Points**: 5
- **Date**: 2025-02-07
- **URL**: https://news.ycombinator.com/item?id=42975350
- **Linked Article**: https://cameron.pfiffer.org/blog/comind-network/
- **content_timestamp**: 2025-02-07
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: 2025-H1


### Top Comments
**pvg**: Is this something people can try, at this stage of development? I couldn't quite figure it out from skimming.

**toomuchtodo**: Might want to connect with albertdessaint: https://news.ycombinator.com/item?id=42965279
Awesome project.

---


# TOTAL NEW POSTS: 56

## gBrain Temporal Metadata (Supplement)
- **content_timestamp**: unknown
- **collected_at**: 2026-05-21T22:44:00Z
- **time_slice**: unknown


- content_timestamp: 2026-04 to 2026-05
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-05
- timestamp_confidence: derived
- timestamp_source: extracted from HN post metadata

