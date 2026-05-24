# 解密Prompt系列31. LLM Agent之从经验中不断学习的智能体 - 风雨中的小七 - 博客园

- URL: https://www.cnblogs.com/gogoSandy/p/18234318
- Platform: cnblogs.com
- Extraction status: ok
- content_timestamp: 2024-06
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q2

## Raw Content

## 解密Prompt系列31. LLM Agent之从经验中不断学习的智能体 - 风雨中的小七 - 博客园

**Source**: https://www.cnblogs.com/gogoSandy/p/18234318

---

[https://www.cnblogs.com/gogoSandy/](https://www.cnblogs.com/gogoSandy/)

# [风雨中的小七](https://www.cnblogs.com/gogoSandy)

## 

- [博客园](https://www.cnblogs.com/)
- [首页](https://www.cnblogs.com/gogoSandy/)
- [新随笔](https://i.cnblogs.com/EditPosts.aspx?opt=1)
- [联系](https://msg.cnblogs.com/send/%E9%A3%8E%E9%9B%A8%E4%B8%AD%E7%9A%84%E5%B0%8F%E4%B8%83)
- [订阅](javascript:void(0))
- [管理](https://i.cnblogs.com/)

# [解密Prompt系列31. LLM Agent之从经验中不断学习的智能体](https://www.cnblogs.com/gogoSandy/p/18234318)

![解密Prompt系列31. LLM Agent之从经验中不断学习的智能体](https://img2024.cnblogs.com/blog/1326688/202406/1326688-20240606081656782-2138636507.png)         模型想要完成自主能力进化和自主能力获得，需要通过Self-Reflection from Past Experience来实现。那如何获得经历，把经历转化成经验，并在推理中使用呢？本章介绍三种方案     

Agent智能体的工作流可以简单分成两种：一种是**固定的静态工作流，一种是智能体自主决策的动态工作流**。

静态流程的Agent举几个例子，例如新闻热点追踪推送Agent，每日新论文摘要总结Agent，它们的优点是可控，稳定，可复现，缺点是一种流程基本只能固定适配一种场景，就像工厂的流水线。

而动态流程的Agent，也叫自主智能体，例如AutoGPT，BabyAgent，它们自主感知环境，基于观测进行决策，并做出行动，然后基于行动结果进行反思，并给出下一步行动。优点自然是'理论上'可以泛化到任意场景，不需要基于经验的预置工作流的抽象，但缺点就是不可控，不稳定，不能复现，且任务完成率有限，尤其是在非通用的垂直领域。

影响自主智能体在垂直领域任务完成率的有以下2个亟待解决的问题

- 模型自主能力进化：失败是成功之母，模型该如何基于失败的任务流进行反思和探索，一步步提高自己的任务完成率呢？
- 模型自主能力获得：最初模型如何掌握该领域的技能，之前的方案多数是依赖SFT，通过人工，或者人工+模型来构建领域样本来教会模型部分能力。说白了还是人手把手教模型。那这一步能否自主化让模型在trial and error里面自主进行学习呢？毕竟人类也是靠实验和探索一步步掌握新的技能的。

其实以上两个问题都可以通过**Self-Reflection from past experience**来解决，那问题就转变成了如何获得past-experience，past-experience如何转化成经验，如何在新的推理中使用这些经验。这一章会介绍三个模型自主探索学习和经验总结的方案分别是：AppAgent，Trial and Error和AutoGuide

## APPAgent

> - AppAgent: Multimodal Agents as Smartphone Users
> - [https://github.com/mnotgod96/AppAgent](https://github.com/mnotgod96/AppAgent)

APPAgent是腾讯实验室推出出的和Andriod手机自主交互的智能体，整体方案和上一章我们讲过的WebVoyager的方案类似，使用多模态大模型和SOM页面元素分割来识别每一步模型和页面的哪些元素进行交互。而自主学习的部分，论文**基于模型的前期自主探索，来构建工具说明书，帮助模型了解每款APP的使用，从而提高推理阶段的任务完成率**。这里论文在9个android app上进行了测试，一些测试任务如下

那如何使用模型来自主生成APP操作说明书呢？类比人类在使用一个新工具时通过Trial and Error来不断更新自己对工具的认知和使用方式，这里的模型探索也是如此。论文先生成了一组基于APP的任务指令，然后基于每个指令模型会对APP的使用进行自主探索，每一步模型的输入包括

- 手机交互的4种功能的功能介绍：包括点击、键入、长按、左右滑动
- 任务描述
- 历史的交互行为的总结
- 当前手机应用页面的截图

每一步模型的输出包括，如下图

- Thought：完成任务下一步做啥
- Action：使用以上哪个功能的Function Calling或者FINISH
- Summary:加入最新的Action，对所有历史行为进行总结，作为下一步的输入

APP操作的具体prompt（省略细节）如下：

self_explore_task_template = """You are an agent that is trained to complete certain tasks on a smartphone. You will be
 given a screenshot of a smartphone app. The interactive UI elements on the screenshot are labeled with numeric tags
 starting from 1.

You can call the following functions to interact with those labeled elements to control the smartphone:

1. tap(element: int)
 功能介绍。。。

2. text(text_input: str)
 功能介绍。。。

3. long_press(element: int)
 功能介绍。。。

4. swipe(element: int, direction: str, dist: str)
 功能介绍。。。

The task you need to complete is to <task_description>. Your past actions to proceed with this task are summarized as
 follows: <last_act>
 Now, given the following labeled screenshot, you need to think and call the function needed to proceed with the task.
 Your output should include three parts in the given format:
 Observation: 
 Thought: <To complete the given task, what is the next step I should do>
 Action: <The function call with the correct parameters to proceed with the task. If you believe the task is completed or
 there is nothing to be done, you should output FINISH. You cannot output anything else except a function call or FINISH
 in this field.>
 Summary: 
 You can only take one action at a time, so please directly call the function."""

然后基于以上模型自主探索生成的行为序列，我们可以记录每一步操作前后，收集页面的变化，并基于变化让大模型总结，该操作步骤究竟是干什么的，从而生成APP中每个按钮的交互说明书。以下是点击类操作的说明书prompt，如果一个按钮被使用多次，则模型会不断更新该按钮的说明文档。

tap_doc_template = """I will give you the screenshot of a mobile app before and after tapping the UI element labeled
 with the number <ui_element> on the screen. The numeric tag of each element is located at the center of the element.
 Tapping this UI element is a necessary part of proceeding with a larger task, which is to <task_desc>. Your task is to
 describe the functionality of the UI element concisely in one or two sentences. Notice that your description of the UI
 element should focus on the general function. For example, if the UI element is used to navigate to the chat window
 with John, your description should not include the name of the specific person. Just say: "Tapping this area will
 navigate the user to the chat window". Never include the numeric tag of the UI element in your description. You can use
 pronouns such as "the UI element" to refer to the element."""

这样基于前期的模型探索我们可以得到每个APP上各种按钮的一份操作说明书。然后在推理阶段，模型会同时使用当前手机界面的UI+前期生成的说明书+5种交互行为说明+历史操作，来生成下一步的交互操作。

论文验证了，前期自主探索形成的说明书，对模型的任务完成准确率有很大的提升，几乎可以逼近基于人工探索形成的说明书（Watching Demos），以及直接手工编写说明书(Manually Crafted)的水平。

## STE：Simulated Trial and Error

> - LLMs in the Imaginarium: Tool Learning through Simulated Trial and Error
> - [https://github.com/microsoft/simulated-trial-and-error](https://github.com/microsoft/simulated-trial-and-error)

**上面APPAgent帮助模型自我学习如何进行前端交互，微软提出的STE是针对后端API交互**，让模型通过前期的多轮API交互学习API调用，并通过In-Context-Learning或者SFT使用前期探索的结果帮助模型更好的使用API来完成任务。

这里STE使用了BmTools的API作为工具池，前期的工具探索阶段分成以下3个步骤

1. **Query生成**：基于工具名称和工具描述，让模型生成一条能使用该API回答的问题。prompt指令如下

Your task is to answer the user's query as best you can. You have access to the following tools which you can use via API call to help with your response:

{api_descriptions}

Now you have the chance to explore the available APIs. You can do this by 1) synthesizing some natural user query that calling the API could help, and 2) trying to respond to the user query with the help of the APIs. Here, you can focus on queries that only require calling the API once.

Now, first input your synthesized user query. You should make the query natural - for example, try to avoid using the provided API descriptions or API names in the query, as the user does not know what APIs you have access to. Also try to make the query as specific as possible. Input just the user query alone; do NOT solve the query for now.

User Query:

1. **工具调用推理**：基于以上生成的Query+工具描述，模型使用ReACT范式来生成工具调用语句。把推理语句解析成API调用后，调用API并获取返回值，然后让模型基于返回进行反思。这一步可以最多重复4次，直到模型判断API调用结果可以回答用户提问，并且每次都会使用之前N-1次的推理结果和观测作为上文，也就是上图中的Short-Memory部分，来帮助模型从错误中进行迭代和优化。这里论文使用ChatGPT，prompt如下

Now, try to respond to the query using the available APIs.

The format you use the API is by specifying 1) Action: the API function name you'd like to call 2) Action Input: the input parameters of the API call in a json string format. The result of the API call will be returned starting with "Observation:". Remember that you should only perform a SINGLE action at a time, do NOT return a list of multiple actions.

Reminder:
 1) the only values that should follow "Action:" are: {api_names}
 2) use the following json string format for the API arguments:

Action Input:
 {{
 "key_1": "value_1",
 ...
 "key_n": "value_n",
 }}

Remember to ALWAYS use the following format:

Thought: you should always think about what to do next
 Action: the API function name
 Action Input: the input parameters of the API call in json string format
 Observation: the return result of the API call. This is what I will provide you with; you do not need to repeat it in your response.
 ... (this Thought/Action/Action Input/Observation can repeat N times)
 Thought: I now know the final answer
 Final Answer: the response to the user query

Begin! Remember that your response should never start with "Observation:" since that is what I will provide you with. Once you have enough information, please immediately use \nThought: I now know the final answer\nFinal Answer:

User Query (the same you just synthesized): {query}

1. **扩展Query**: 这里论文针对每个API会进行15次query生成和尝试，并且为了提高query的多样性，在生成新query时会加入历史已经生成的query和每个query模型是否成功调用工具完成。也就是上图Long-Term Memory的部分，判断query是否成功执行也是使用大模型prompt，这里使用了能力更强的GPT4。

Now you know a bit more about the API. You can synthesize another user query to explore the API a bit further and consolidate your understanding of the API, based on things that you discovered about this API. Again, just input the user query alone; do NOT solve the query for now.

User Query:

每个API会重复15次以上的步骤2和步骤3，并记录每一次尝试的路径，用于训练或者后续的In-Context-Learning。

这里我们只关注ICL的方案，因为泛化性更好，能更快拓展新工具和新场景。**和上面APPAgent不同的，这里的ICL不是使用前期探索生成的工具说明书，而是直接使用模型调用工具的历史操作，类似于案例。** 当用户有新的提问时，会基于query的Embedding(SentenceBert），召回前期探索阶段中最相似的15个query和最终模型的API调用结果作为推理上文，进行工具推理。

效果上论文对比了多个模型直接进行工具调用推理，使用前期探索的案例作为上文，和构建样本进行SFT的效果。小模型还是需要微调才能获得最高的任务完成率，但GPT4这类能力强的模型，只需要ICL就可以达到很好的任务完成率，以及不论是SFT还是ICL相比BaseLine都有很明显的效果提升。

## AutoGuide

> - AutoGuide: Automated Generation and Selection of State-Aware Guidelines for Large Language Model Agents

**对比AppAgent是把经验在APP按钮的操作级别进行总结形成工具说明书，推理时召回当前工具的说明书。STE是直接使用原始经验，推理时召回相关历史经验作为上文，而AutoGuide则是通过对比成功和失败的经验在每一步的状态级别进行总结，在推理时召回相关的状态和状态经验作为上文。通俗点说AppAgent是使用说明书，STE是操作案例集，AutoGuide是使用指南。**

想要构建并使用指南，AutoGuide包含三个核心模块：状态总结模块（State Summarization），指南抽取模块(Guideline Extraction)，和指南召回模块。论文针对不同的Agent场景设计了不同的状态总结和抽取prompt，这里还是用我们上一章刚提过的webagent中的WebArena数据集为例，分别说下两个模块

1. State Summarization

状态总结模块是基于模型的规划链路（Thought+Action）来总结模型处于的状态。具体来说是基于同一个任务的成功和失败的两条行为链路，定位到两个链路首次出现不同行为的时间节点T，使用"<T"的链路行为作为输入，使用以下prompt进行状态总结。

举个例子，以下的任务中，两条行为链路是在Action1的时候出现了差异，则会使用Action1之前的观察和行为作为输入(current trajectory) 进行状态总结。这里得到的状态应该是"You are on the List of forum Page"

1. Guideline Extraction

得到状态后则需要生成该状态下的行为指南，这里同样分别用到成功和失败的行为链路，以及前面的状态总结，作为输入来生成指南，具体prompt如下

同样是上面的例子，针对状态"You are on the List of forum Page"，以上prompt得到的指南是
 "if you want to navigate to a specific forum, you can click on the link that exactly matches the forum name you are looking for."

在不断基于state生成guideline的过程中，论文还会使用大模型prompt对相似的状态进行合并，最终得到的是一个字典{state:guidelines}。以下是webArena场景中，最终生成的状态指南示例

1. Apply Guideline at Test

基于以上获取的状态和状态指南，在推理阶段，每一步执行会先使用State Summarization模块对当前状态进行总结，然后基于当前的状态去构建好的状态指南中先定位相似的状态，这里使用了和上面状态消重合并相同的大模型prompt，然后基于定位到的状态，获取所有的相关指南。如果指南数量太多，则使用下面的prompt对指南进行筛选，只保留Top-K。然后基于这Top-K指南进行下一步思考和行为的推理。

## 其他相关论文

以上三篇论文覆盖了当前自主学习的几个大的方向，这个领域还有一些其他相关的论文，思路有些相似，感兴趣的朋友可以自己看下

- A Survey on Self-Evolution of Large Language Models
- Investigate-Consolidate-Exploit: A General Strategy for Inter-Task Agent Self-Evolution
- Empowering Large Language Model Agents through Action Learning
- Trial and Error: Exploration-Based Trajectory Optimization for LLM Agents
- OS-COPILOT: TOWARDS GENERALIST COMPUTER AGENTS WITH SELF-IMPROVEMENT
- LLAMA RIDER: SPURRING LARGE LANGUAGE MODELS TO EXPLORE THE OPEN WORLD
- PAST AS A GUIDE: LEVERAGING RETROSPECTIVE LEARNING FOR PYTHON CODE COMPLETION
- ExpeL: LLM Agents Are Experiential Learners

**想看更全的大模型相关论文梳理·微调及预训练数据和框架·AIGC应用，移步Github >> [DecryPrompt](https://github.com/DSXiangLi/DecryptPrompt/)**

posted @  
2024-06-11 07:34
[风雨中的小七](https://www.cnblogs.com/gogoSandy)  阅读(
1475
)  评论(
0
)    [收藏](javascript:void(0))[举报](https://report.cnblogs.com?targetLink=https%3A%2F%2Fwww.cnblogs.com%2FgogoSandy%2Fp%2F18234318&targetId=18234318&targetType=0)

刷新页面[返回顶部](https://www.cnblogs.com/gogoSandy/p/18234318#top)

[https://ais.cn/u/3Qf22e](https://ais.cn/u/3Qf22e)

[博客园](https://www.cnblogs.com/)
  ©  2004-2026

[浙公网安备 33010602011771号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011771)[浙ICP备2021040463号-3](https://beian.miit.gov.cn)
