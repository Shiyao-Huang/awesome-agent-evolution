# 从零构建能自我优化的AI Agent：Reflection和Reflexion机制对比详解与实现-阿里云开发者社区

- URL: https://developer.aliyun.com/article/1683692
- Platform: developer.aliyun.com
- Extraction status: ok
- content_timestamp: 2025-09
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-09
- Query: site:developer.aliyun.com AI智能体 自我进化

## Raw Content

## 从零构建能自我优化的AI Agent：Reflection和Reflexion机制对比详解与实现-阿里云开发者社区

**Source**: https://developer.aliyun.com/article/1683692

---

[开发者社区](https://developer.aliyun.com/)[大数据与机器学习](https://developer.aliyun.com/bigdata/)[文章](https://developer.aliyun.com/bigdata/article_hot)
正文

# 从零构建能自我优化的AI Agent：Reflection和Reflexion机制对比详解与实现

2025-09-29

1586

版权

版权声明：

         本文内容由阿里云实名注册用户自发贡献，版权归原作者所有，阿里云开发者社区不拥有其著作权，亦不承担相应法律责任。具体规则请查看《         [阿里云开发者社区用户服务协议](https://developer.aliyun.com/article/768092)》和         《[阿里云开发者社区知识产权保护指引](https://developer.aliyun.com/article/768093)》。如果您发现本社区中有涉嫌抄袭的内容，填写         [侵权投诉表单](https://yida.alibaba-inc.com/o/right)进行举报，一经查实，本社区将立刻删除涉嫌侵权内容。     

本文涉及的产品

RDS DuckDB + QuickBI 企业套餐，8核32GB + QuickBI 专业版

**简介：**
AI能否从错误中学习？Reflection与Reflexion Agent通过生成-反思-改进循环，实现自我优化。前者侧重内容精炼，后者结合外部研究提升准确性，二者分别适用于创意优化与知识密集型任务。

AI能否像人类一样从错误中学习？反思型Agent系统不仅能生成回答，还会主动审视自己的输出，找出问题并持续改进。

反思策略本质上就是让LLM对自己的行为进行自我批评。有时反思器还会调用外部工具或检索系统来提升批评的准确性。这样一来系统输出的就不再是一次性的回答，而是经过多轮生成-审阅循环优化后的结果。

目前主流的反思系统主要分为三类：

**基础Reflection Agent**比较轻量，就是简单的生成器加反思器循环。生成器负责起草、反思器负责批评，然后生成器根据反馈进行修订。这种方式在很多编辑类任务中效果不错。

**Reflexion Agent**更加结构化，会在可追踪的日志中记录历史行为、假设和反思内容。特别适合那些需要从多次失败中汲取经验的问题求解场景。

**语言Agent树搜索（LATS）**采用搜索策略探索多条行动路径，对结果进行反思，然后裁剪或保留有前景的分支。在规划和多步推理任务中表现最佳。

本文重点讨论前两种：Reflection和Reflexion，并用LangChain与LangGraph来实现完整的工作流程。

## 基础Reflection Agent的工作原理

Reflection Agent的核心在于两个角色之间的互动：

生成器负责起草初始回答，反思器则审查这个草稿，指出缺陷并提出改进建议。

这种循环会进行几轮，每一轮都让输出变得更加精炼和可靠。AI实际上在实时学习自己的错误，就像作家根据编辑意见反复修改稿件一样。
![](https://ucc.alicdn.com/yafymv6co4b4w/developer-article1683692/20250929/fe0081ec8e90433e91ca7dd60703025f.octet-stream?x-oss-process=image/resize,w_1400/format,webp)

接下来用LangGraph构建一个LinkedIn帖子生成的Reflection Agent。LangGraph专门用于创建自我改进的AI系统，能够模拟人类的反思思维过程——Agent不会止步于第一稿，而是持续打磨直到内容足够优秀。

这个演示会展示如何设置生成器和反思器角色，使用LangChain进行结构化提示，并通过LangGraph将所有组件编织成一个迭代反馈循环。

### 动手构建Reflection Agent

先从LinkedIn内容创建Agent入手，实现基础的Reflection模式。流程很直接：Agent起草帖子，独立的"反思器"对其进行评析，然后系统根据反馈修订内容。

### 环境配置

我们这里按需逐步引入，保持学习流程的清晰度。首先用

```
.env
```

文件设置API集成的环境变量：

```
ANTHROPIC_API_KEY="your-anthropic-api-key"  
 # LANGCHAIN_API_KEY="your-langchain-api-key"  # optional  
 # LANGCHAIN_TRACING_V2=True                   # optional  
 # LANGCHAIN_PROJECT="multi-agent-swarm"       # optional
```

然后将这些加载到notebook中：

```
from langchain_anthropic import ChatAnthropic  
from dotenv import load_dotenv  

load_dotenv()  
load_dotenv(dotenv_path="../.env", override=True) # mention the .env path  

# Initialize Anthropic model  
llm = ChatAnthropic(  
                      model="claude-3-7-sonnet-latest",  # Claude model ID  
                      temperature=0,  
                      # max_tokens=1024  
  )
```

这里选择Anthropic的claude-3–7-sonnet-latest作为对话模型。当然也可以换成其他LLM，LangChain支持相当广泛的集成。

### 生成器组件

配置好LLM后，创建第一个Agent组件：LinkedIn帖子生成器。这个Agent会起草帖子，后续通过自我审查来优化。

先为帖子创建生成提示：

```
from langchain_core.messages import AIMessage, BaseMessage, HumanMessage  
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder  

post_creation_prompt = ChatPromptTemplate.from_messages(  
    [  
        (  
            "system",  
            "You are an expert LinkedIn content creator tasked with crafting compelling, professional, and high-performing LinkedIn posts. "  
            "Create the most effective LinkedIn post possible based on the user's requirements. "  
            "If the user provides feedback or suggestions, respond with an improved version that incorporates their input while enhancing overall quality and engagement.",  
        ),  
        MessagesPlaceholder(variable_name="messages"),  
    ]  
 )
```

```
ChatPromptTemplate
```

用来组织提示，包含两个部分：

系统消息定义助理的角色。这里助理扮演专业LinkedIn内容策略师，负责生成高质量帖子，收到反馈时能够修订以提升可读性、互动性和整体效果。

MessagesPlaceholder作为用户输入的动态槽位。运行时会被用户请求填充，确保生成的帖子相关且定制化。

接下来用管道操作符（

```
|
```

）将提示与LLM连接，形成完整的处理链：

```
linkedin_post_generator=post_creation_prompt|llm
```

管道操作符充当桥梁：将

```
post_creation_prompt
```

的输出直接传递给LLM，使其能根据用户指令生成结构化帖子。

用简单示例测试生成器：

```
# Example LinkedIn post creation session  
generated_post = ""  
post_request = HumanMessage(  
    content="Create a LinkedIn post on AI tools for developers under 200 words."  
)  

print("=== INITIAL LINKEDIN POST ===")  
for chunk in linkedin_post_generator.stream({"messages": [post_request]}):  
    print(chunk.content, end="")  
    generated_post += chunk.content  

 print("\n" + "="*60 + "\n")
```

预期响应：

```
=== INITIAL LINKEDIN POST ===  
Here's a compelling LinkedIn post for developers about AI tools:  

🤖 Fellow developers, let's talk about AI tools that are actually worth your time!  

After testing dozens of AI tools, here are 5 game-changers that have transformed my development workflow:  

1. GitHub Copilot  
Real-time code suggestions that feel like pair programming with an AI. Seriously cuts down on boilerplate code.  

2. ChatGPT API  
Not just for chat - it's incredible for debugging, code optimization, and even architecture discussions. Pro tip: Use it to explain complex code blocks.  

3. Amazon CodeWhisperer  
Like Copilot's cousin, but with deeper AWS integration. Perfect for cloud-native development.  

4. Tabnine  
Context-aware code completions that learn from your coding style. Works across 30+ languages!  

5. DeepCode  
Catches bugs before they happen with AI-powered code reviews. Has saved my team countless hours.  

💡 Pro Tip: These tools should augment, not replace, your development skills. Use them to enhance productivity, not as a crutch.  

What AI tools are you using in your dev workflow? Drop them in the comments! 👇  

[#SoftwareDevelopment](#SoftwareDevelopment) [#AI](#AI) [#CodingTools](#CodingTools) [#TechCommunity](#TechCommunity) [#Programming](#Programming)  

Thoughts? Would you like any adjustments to make it more engaging?  
 ============================================================
```

内容生成器已经能独立工作，下一步是添加反思能力来评估和改进内容。

### 反思组件

有了LinkedIn帖子生成器，现在创建一个"批评Agent"，本质上就是社交媒体策略师。这个Agent会从多个维度分析生成的帖子：互动潜力、品牌一致性、语调和整体优化效果。

```
# SOCIAL MEDIA STRATEGIST REFLECTION  
social_media_critique_prompt=ChatPromptTemplate.from_messages([  
    (  
        "system",   
        """You are a LinkedIn content strategist and thought leadership expert. Analyze the given LinkedIn post and provide a comprehensive critique focusing on:  

        **Content Quality & Professionalism:**  
        - Overall quality, tone clarity, and LinkedIn best practices alignment  
        - Structure, readability, and professional credibility building  
        - Industry relevance and audience targeting  

        **Engagement & Algorithm Optimization:**  
        - Hook effectiveness and storytelling quality  
        - Engagement potential (likes, comments, shares)  
        - LinkedIn algorithm optimization factors  
        - Word count and formatting effectiveness  

        **Technical Elements:**  
        - Hashtag relevance, reach, and strategic placement  
        - Call-to-action strength and clarity  
        - Use of formatting (line breaks, bullet points, mentions)  

        Provide specific, actionable feedback that includes:  
        - Key strengths and improvement areas  
        - Concrete suggestions for enhancing engagement and professionalism  
        - Practical recommendations for the next revision  

        Keep your critique constructive and focused on measurable improvements, prioritizing actionable insights that will guide the post's revision and lead to tangible content enhancements."""  
    ),  
    MessagesPlaceholder(variable_name="messages")  
])  

 social_media_critic=social_media_critique_prompt|llm
```

看看策略师对生成帖子的评估：

```
print("=== SOCIAL MEDIA STRATEGIST FEEDBACK ===")  
 feedback_result = ""  
 for chunk in social_media_critic.stream({"messages": [post_request, HumanMessage(content=generated_post)]}):  
     print(chunk.content, end="")  
     feedback_result += chunk.content  

 print("\n" + "="*60 + "\n")
```

预期响应：

```
=== SOCIAL MEDIA STRATEGIST FEEDBACK ===  
Here's a comprehensive critique of your LinkedIn post:  

**Content Quality & Professionalism:**  
Strengths:  
- Well-structured with clear, valuable information  
- Professional tone that balances expertise with accessibility  
- Excellent use of practical examples and specific tools  
- Good industry relevance for developer audience  

Areas for Improvement:  
- Could add brief specific benefits/use cases for each tool  
- Consider including one personal experience/result  

**Engagement & Algorithm Optimization:**  
Strengths:  
- Strong hook with "Fellow developers"  
- Good length (within optimal 1,300 character range)  
- Effective use of emojis  
- Strong call-to-action in comments  

Optimization Suggestions:  
- Consider starting with a compelling statistic or personal result  
- Add numbers to benefits (e.g., "reduced coding time by 40%")  
- Break up longer paragraphs further for better readability  

**Technical Elements:**  
Strengths:  
- Good hashtag selection  
- Clear formatting with numbered lists  
- Effective use of emojis as visual breaks  

Recommendations:  
- Add 1-2 relevant @mentions of tool companies  
- Consider more specific hashtags (e.g., [#AIforDevelopers](#AIforDevelopers))  
- Add line breaks between sections for better scanning  

**Specific Improvement Suggestions:**  

1. Enhanced Hook:  
"🚀 These 5 AI tools helped me cut coding time by 40% last month! Here's my real-world review after 100+ hours of testing..."  

2. Add Credibility:  
Brief one-liner about your experience/role before the list  

3. Tool Descriptions:  
Add one specific metric/result for each tool  
Example: "GitHub Copilot: Cut my boilerplate coding time by 60%. Perfect for repetitive tasks."  

4. Hashtags:  
Add: [#DevTools](#DevTools) [#AIinTech](#AIinTech) [#DeveloperLife](#DeveloperLife)  

Overall, it's a strong post that could be enhanced with more specific results and personal experiences to boost engagement and credibility.  
 ============================================================
```

策略师的反馈提供了具体可操作的洞察。这正是反思模式的强大之处：不只是生成内容，而是系统性地评估并识别改进机会。

### 迭代改进

现在有了生成器和批评者，可以实现基础反思循环：将批评反馈送回生成器进行改进。

```
print("=== REFINED LINKEDIN POST ===")  
 for chunk in linkedin_post_generator.stream(  
     {"messages": [post_request, AIMessage(content=generated_post), HumanMessage(content=feedback_result)]}  
 ):  
     print(chunk.content, end="")  

 print("\n" + "="*60 + "\n")
```

预期响应：

```
=== REFINED LINKEDIN POST ===  
Thank you for the detailed feedback! Here's an improved version incorporating your suggestions:  

🚀 These 5 AI tools helped me cut coding time by 40% last month! Here's my real-world review after 100+ hours of testing...  

As a senior full-stack developer leading a team of 12, I've vetted countless AI tools. These are the ones actually delivering ROI:  

1. GitHub Copilot  
Cut boilerplate coding time by 60%. Saved our team 15+ hours last sprint on repetitive tasks.  
@GitHub  

2. ChatGPT API  
Reduced debugging time by 35%. We use it to analyze 100+ lines of complex code in seconds.  
@OpenAI  

3. Amazon CodeWhisperer  
30% faster AWS infrastructure deployment. Game-changer for cloud architecture.  
@AWSCloud  

4. Tabnine  
Increased code completion accuracy by 45%. Learning from our codebase across 5 different projects.  
@Tabnine  

5. DeepCode  
Caught 23 critical bugs last month before production. Reduced QA cycles by 25%.  
@DeepCode  

💡 Real Talk: These tools supercharged our productivity, but they're not magic. They work best when combined with solid development practices and code review processes.  

⚡️ Personal Win: Implemented these tools across our team and saw sprint velocity increase by 28% in just two months.  

What's your experience with AI dev tools? Share your metrics below! 👇  

 [#AIforDevelopers](#AIforDevelopers) [#DevTools](#DevTools) [#SoftwareDevelopment](#SoftwareDevelopment) [#CodingTools](#CodingTools) [#DeveloperLife](#DeveloperLife) [#TechInnovation](#TechInnovation)
```

这就是核心反思模式的流程：

```
original request → initial post → critique → improved post
```

消息序列确保上下文得以保留，同时允许生成器迭代地接受��馈并进行完善。

上面我们用的是手动的方式实现了功能，不过手动方式虽然适合简单内容任务，但面对复杂工作流会很快变得繁琐。这时就需要LangGraph来提供结构化框架，高效编排多个Agent。

### 用LangGraph编排工作流

LangGraph让构建复杂Agent工作流变得可能：

**状态管理**：跨多步跟踪上下文

**条件逻辑**：决定是否继续或终止循环

**自动编排**：Agent间的无缝通信

定义

```
ContentState
```

来组织工作流。结合

```
Annotated
```

和

```
add_messages
```

，确保消息在整个过程中正确累积。

```
from typing import Annotated, List, Sequence  
from langgraph.graph import END, StateGraph, START  
from langgraph.graph.message import add_messages  
from langgraph.checkpoint.memory import InMemorySaver  
from typing_extensions import TypedDict  

class ContentState(TypedDict):  
     messages: Annotated[list, add_messages]
```

接下来创建代表生成器和批评者的工作流节点：

```
async def post_creation_node(state: ContentState) -> ContentState:  
    """Generate or improve LinkedIn post based on current state."""  
    return {"messages": [await linkedin_post_generator.ainvoke(state["messages"])]}  

async def social_critique_node(state: ContentState) -> ContentState:  
    """Provide social media strategy feedback for the LinkedIn post."""  
    # Transform message types for the strategist  
    message_role_map = {"ai": HumanMessage, "human": AIMessage}  

    # Keep the original request and transform subsequent messages  
    transformed_messages = [state["messages"][0]] + [  
        message_role_map[msg.type](content=msg.content) for msg in state["messages"][1:]  
    ]  

    strategy_feedback = await social_media_critic.ainvoke(transformed_messages)  

    # Return feedback as human input for the post generator  
     return {"messages": [HumanMessage(content=strategy_feedback.content)]}
```

定义好两个图节点后，创建决定工作流继续还是结束的条件逻辑：

```
def should_continue_refining(state: ContentState):  
     """Determine whether to continue the creation-feedback cycle."""  
     if len(state["messages"]) > 6:  
         # End after 3 complete creation-feedback cycles  
         return END  
     return "social_critique"
```

现在构建并配置完整工作流：

```
# Build the workflow graph  
content_workflow_builder = StateGraph(ContentState)  
content_workflow_builder.add_node("create_post", post_creation_node)  
content_workflow_builder.add_node("social_critique", social_critique_node)  

# Define workflow edges  
content_workflow_builder.add_edge(START, "create_post")  
content_workflow_builder.add_conditional_edges("create_post", should_continue_refining)  
content_workflow_builder.add_edge("social_critique", "create_post")  

# Add conversation memory  
content_memory = InMemorySaver()  
 linkedin_workflow = content_workflow_builder.compile(checkpointer=content_memory)
```

可视化最终工作流：

```
from IPython.display import Image, display  

 # Show the agent  
 display(Image(linkedin_workflow.get_graph().draw_png()))
```

![](https://ucc.alicdn.com/yafymv6co4b4w/developer-article1683692/20250929/8b2b1735a06840859b6cf82348d7d039.octet-stream?x-oss-process=image/resize,w_1400/format,webp)

### 测试运行

最后用简单示例测试自动化的

```
linkedin_workflow
```

：

```
session_config = {"configurable": {"thread_id": "user1"}}  

content_brief = HumanMessage(  
    content="Create a LinkedIn post on AI tools for developers under 180 words."  
)  

async for workflow_event in linkedin_workflow.astream(  
    {"messages": [content_brief]},  
    session_config,  
):  
    print("Workflow Step:", workflow_event)  
     print("-" * 50)
```

输出展示了完整的工作流执行过程，从初始生成到策略师反馈再到最终的优化版本。每一步都在持续改进内容质量。

基础反思工作流在内容改进方面表现不错，但在需要外部信息的知识密集型任务中存在局限。这就引出了Reflexion模式。

## Reflexion Agent的进化

Shinn等人提出的Reflexion模式在基础反思上做了扩展：结合自我批评、外部知识整合和结构化输出解析。

与简单反思不同，Reflexion允许Agent在利用额外信息的同时实时从错误中学习。

典型工作流包括：

**初始生成**：Agent产生回答，同时给出自我批评和研究查询

**外部研究**：根据批评中识别的知识缺口触发网络搜索或其他信息检索

**知识整合**：将新洞察纳入改进的回答中

**迭代完善**：重复循环直到回答达到期望质量
![](https://ucc.alicdn.com/yafymv6co4b4w/developer-article1683692/20250929/3b7c699cdcd14f87a6ba48ca45d5fb21.octet-stream?x-oss-process=image/resize,w_1400/format,webp)

Reflexion Agent由三个相互关联的角色构成：Actor、Evaluator和Self-Reflection。

Actor执行任务：写代码、解决问题或在环境中采取行动。

Evaluator提供内部反馈，评估Actor输出的质量。

Self-Reflection模块生成文本反思，捕捉哪里出错或如何改进。

这些反思存储在记忆中：

短期记忆跟踪当前尝试的轨迹、长期记忆积累以往反思的经验，指导未来迭代。
![](https://ucc.alicdn.com/yafymv6co4b4w/developer-article1683692/20250929/24bb4e39bb7e42f8a3e89af1e17a0798.octet-stream?x-oss-process=image/resize,w_1400/format,webp)

(a) Reflexion示意图 (b) Reflexion强化算法

过程是迭代的：Actor尝试，Evaluator评分，Self-Reflection批评，Actor在下次尝试中利用这些反馈。循环持续到任务成功或达到最大迭代次数。

比如，如果Actor某步失败，反思可能会记录：

> "陷入了循环；下次尝试不同策略或工具。"

下一次迭代在这条反思指导下更可能成功。Reflexion能处理多样化反馈：数值奖励、错误消息或人工提示，都能融入反思过程。

Reflexion的效果相当显著，在HumanEval等编码基准上加入Reflexion的GPT-4 Agent达到91%成功率，而没有反思时仅为80%。在决策模拟（AlfWorld）中，ReAct + Reflexion Agent解决了134个挑战中的130个，明显超越了非反思对照组。

这突出了Reflexion的核心能力：让AI Agent能够思考自己的行动并保留学到的经验，从而持续改进，更有效地处理复杂任务。

### 构建Reflexion Agent

Reflexion Agent的核心是一个Actor：生成初始回答，对其进行批评，然后带着改进重新执行任务。支撑这个循环的关键子组件有：

**工具执行**：访问外部知识源

**初始响应器**：生成首稿并附带自我反思

**修订器**：结合以往反思产出优化结果

### 构建工具

由于Reflexion需要外部知识，首先定义从网络获取信息的工具。这里用

```
TavilySearchResults
```

——Tavily搜索API的封装，让Agent能进行网络搜索并收集支撑证据。

```
from langchain_community.tools.tavily_search import TavilySearchResults  
 from langchain_community.utilities.tavily_search import TavilySearchAPIWrapper  

 # Initialize search tool  
 web_search = TavilySearchAPIWrapper()  
 tavily_tool = TavilySearchResults(api_wrapper=web_search, max_results=5)
```

### 定义提示模板

接下来定义指导actor行为的提示模板。提示相当于Agent的"角色说明"，规定应该做什么、不该做什么。Agent被指示：

提供初始解释、对自己的答案进行反思和批评、生成用于填补知识缺口的搜索查询

```
# Agent prompt template  
actor_prompt_template = ChatPromptTemplate.from_messages(  
    [  
        (  
            "system",  
            """You are an expert technical educator specializing in machine learning and neural networks.  
                Current time: {time}  
                1. {primary_instruction}  
                2. Reflect and critique your answer. Be severe to maximize improvement.  
                3. Recommend search queries to research information and improve your answer.""",  
        ),  
        MessagesPlaceholder(variable_name="messages"),  
        (  
            "user",  
            "\n\n<s>Reflect on the user's original question and the"  
            " actions taken thus far. Respond using the {function_name} function.</reminder>",  
        ),  
    ]  
).partial(  
    time=lambda: datetime.datetime.now().isoformat(),  
 )
```

### 强制结构化输出

在多步工作流中，通常建议为每个子Agent定义结构化输出模型。为确保一致性，用Pydantic模型定义结构化输出：

```
# Pydantic models for structured output  
class Reflection(BaseModel):  
    missing: str = Field(description="Critique of what is missing.")  
    superfluous: str = Field(description="Critique of what is superfluous")  

class GenerateResponse(BaseModel):  
    """Generate response. Provide an answer, critique, and then follow up with search queries to improve the answer."""  

    response: str = Field(description="~250 word detailed answer to the question.")  
    reflection: Reflection = Field(description="Your reflection on the initial answer.")  
    research_queries: list[str] = Field(  
        description="1-3 search queries for researching improvements to address the critique of your current answer."  
     )
```

用Pydantic的

```
BaseModel
```

定义两个数据类：

```
Reflection
```

捕捉自我批评，要求Agent指出哪些信息缺失和哪些多余。

```
GenerateResponse
```

构造最终输出，确保Agent提供主要回答、包含基于

```
Reflection
```

类的反思，并提供

```
research_queries
```

列表。

这种结构化方法保证Agent产出一致且可解析的回答。

### 添加重试逻辑

结构化解析可能在输出不匹配schema时失败。为此添加带schema反馈的重试逻辑：

```
# Agent with retry logic  
class AdaptiveResponder:  
    def __init__(self, chain, output_parser):  
        self.chain = chain  
        self.output_parser = output_parser  

    def generate(self, conversation_state: dict):  
        llm_response = None  
        for retry_count in range(3):  
            llm_response = self.chain.invoke(  
                {"messages": conversation_state["messages"]}, {"tags": [f"attempt:{retry_count}"]}  
            )  
            try:  
                self.output_parser.invoke(llm_response)  
                return {"messages": llm_response}  
            except ValidationError as validation_error:  
                # Fix: Convert schema dict to JSON string  
                schema_json = json.dumps(self.output_parser.model_json_schema(), indent=2)  
                conversation_state = conversation_state + [  
                    llm_response,  
                    ToolMessage(  
                        content=f"{repr(validation_error)}\n\nPay close attention to the function schema.\n\n{schema_json}\n\nRespond by fixing all validation errors.",  
                        tool_call_id=llm_response.tool_calls[0]["id"],  
                    ),  
                ]  
         return {"messages": llm_response}
```

这里有一个关键点：当结构化输出验证失败时，将schema和错误详情回传给LLM进行自我纠正，这样不会让程序卡死

### 绑定数据模型

将

```
GenerateResponse
```

模型作为工具绑定，这会强制LLM严格按照定义的结构输出。

```
# Initial answer chain  
initial_response_chain = actor_prompt_template.partial(  
    primary_instruction="Provide a detailed ~250 word explanation suitable for someone with basic programming background.",  
    function_name=GenerateResponse.__name__,  
) | llm.bind_tools(tools=[GenerateResponse])  

response_parser = PydanticToolsParser(tools=[GenerateResponse])  

initial_responder = AdaptiveResponder(  
    chain=initial_response_chain, output_parser=response_parser  
 )
```

调用

```
initial_response_chain
```

后，会得到包含初始答案、自我批评和生成的搜索查询的结构化输出。用简单查询测试初始响应器：

```
example_question = "What is the difference between supervised and unsupervised learning?"  
 initial = initial_responder.generate(  
     {"messages": [HumanMessage(content=example_question)]}  
 )  

 initial
```

预期响应会展示完整的结构化输出，包括技术解释、自我反思和改进查询。

### 修订阶段

修订步骤代表反思循环的最终阶段。目的是整合三个关键要素：原始草稿、自我批评和研究结果，产生精炼且有证据支撑的回答。

先定义新的指令集，明确指导修订器：

将批评整合到修订过程中、添加与研究证据对应的数字引用、在解释中区分相关性和因果性、包含结构化的"References"部分，只提供干净的URL

```
# Revision instructions  
improvement_guidelines = """Revise your previous explanation using the new information.  
    - You should use the previous critique to add important technical details to your explanation.  
    - You MUST include numerical citations in your revised answer to ensure it can be verified.  
    - Add a "References" section to the bottom of your answer (which does not count towards the word limit).  
    - For the references field, provide a clean list of URLs only (e.g., ["https://example.com", "https://example2.com"])  
    - You should use the previous critique to remove superfluous information from your answer and make SURE it is not more than 250 words.  
    - Keep the explanation accessible for someone with basic programming background while being technically accurate.  
 """
```

为强制输出结构需要引入Pydantic schema

```
ImproveResponse
```

，它类继承自

```
GenerateResponse
```

并增加

```
sources
```

字段，确保每个改进的答案都附带可验证的参考来源。

```
class ImproveResponse(GenerateResponse):  
     """Improve your original answer to your question. Provide an answer, reflection,  
     cite your reflection with references, and finally  
     add search queries to improve the answer."""  

     sources: list[str] = Field(  
         description="List of reference URLs that support your answer. Each reference should be a clean URL string."  
     )
```

定义好schema后，构建修订链指导原则绑定到LLM并解析输出：

```
# Revision chain  
improvement_chain = actor_prompt_template.partial(  
    primary_instruction=improvement_guidelines,  
    function_name=ImproveResponse.__name__,  
) | llm.bind_tools(tools=[ImproveResponse])  

improvement_parser = PydanticToolsParser(tools=[ImproveResponse])  
 response_improver = AdaptiveResponder(chain=improvement_chain, output_parser=improvement_parser)
```

### 创建工具节点

下一步是在LangGraph工作流中执行工具调用。

虽然响应器和修订器使用不同schema，但都依赖同一个外部工具（搜索API）。Reflexion的关键区别在于：能够识别知识缺口并主动研究解决方案。

实现搜索集成：

```
# Tool execution function  
def execute_search_queries(research_queries: list[str], **kwargs):  
    """Execute the generated search queries."""  
    return tavily_tool.batch([{"query": search_term} for search_term in research_queries])  

# Tool node  
search_executor = ToolNode(  
    [  
        StructuredTool.from_function(execute_search_queries, name=GenerateResponse.__name__),  
        StructuredTool.from_function(execute_search_queries, name=ImproveResponse.__name__),  
    ]  
 )
```

这体现了LangGraph工作流中的工具集成。ToolNode自动处理工具执行和结果格式化，让整合外部知识源变得无缝。

### 构建完整图

最后一部就是将响应器、工具执行器和修订器组装成循环图结构，这种结构捕捉���Reflexion的迭代本质：每个循环都强化最终答案。

首先定义图状态和循环控制函数：

```
# Graph state definition  
class State(TypedDict):  
    messages: Annotated[list, add_messages]  

# Helper functions for looping logic  
def get_iteration_count(message_history: list):  
    """ Counts backwards through messages until it hits a non-tool, non-AI message  
    This helps determine how many tool execution cycles have occurred recently"""  

    iteration_count = 0  
    # Iterate through messages in reverse order (most recent first)  
    for message in message_history[::-1]:  
        if message.type not in {"tool", "ai"}:  
            break  
        iteration_count += 1  
    return iteration_count  

def determine_next_action(state: list):  
    """  
    Conditional edge function that determines whether to continue the loop or end.  

    Args:  
        state: Current workflow state containing messages  

    Returns:  
        str: Next node to execute ("search_and_research") or END to terminate  

    Logic:   
    - Counts recent iterations using get_iteration_count()  
    - If we've exceeded MAXIMUM_CYCLES, stop the workflow  
    - Otherwise, continue with another tool execution cycle  
    """  
    # in our case, we'll just stop after N plans  
    current_iterations = get_iteration_count(state["messages"])  
    if current_iterations > MAXIMUM_CYCLES:  
        return END  
     return "search_and_research"
```

构建完整的Reflexion工作流：

```
# Graph construction  
MAXIMUM_CYCLES = 5  
workflow_builder = StateGraph(State)  

# Add nodes  
workflow_builder.add_node("create_draft", initial_responder.generate)  
workflow_builder.add_node("search_and_research", search_executor)  
workflow_builder.add_node("enhance_response", response_improver.generate)  

# Add edges  
workflow_builder.add_edge(START, "create_draft")  
workflow_builder.add_edge("create_draft", "search_and_research")  
workflow_builder.add_edge("search_and_research", "enhance_response")  

# Add conditional edges for looping  
workflow_builder.add_conditional_edges("enhance_response", determine_next_action, ["search_and_research", END])  

# Compile the graph  
 reflexion_workflow = workflow_builder.compile()
```

可视化图结构：

```
from IPython.display import Image, display  

 # Show the agent  
 display(Image(reflexion_workflow.get_graph().draw_png()))
```

![](https://ucc.alicdn.com/yafymv6co4b4w/developer-article1683692/20250929/fa66b9c502ba466285177e20d5ade32e.octet-stream?x-oss-process=image/resize,w_1400/format,webp)

测试完整的Reflexion Agent：

```
# Run the agent with the neural networks question  
target_question = "How do neural networks actually learn?"  

print(f"Running Reflexion agent with question: {target_question}")  
print("=" * 60)  

events = reflexion_workflow.stream(  
    {"messages": [("user", target_question)]},  
    stream_mode="values",  
)  

for i, step in enumerate(events):  
    print(f"\nStep {i}")  
    print("-" * 40)  
     step["messages"][-1].pretty_print()
```

Reflexion Agent的执行过程展现了完整的学习循环：

生成带自我批评的初始技术解释

识别需要研究的具体知识缺口

执行有针对性的网络搜索获取最新信息

将发现整合到综合性、带引用的回答中

重复过程直到解释达到质量标准

## 两种模式的选择策略

我们已经实现了两种模式，现在可以看看它们各自的适用场景：

**选择Reflection的情况：**内容偏向创意或风格性时；现有内部知识已经足够；更看重速度而非全面性；需要控制token和成本。

**选择Reflexion的情况：**准确性和事实正确性至关重要；内容需要最新或专业信息；必须提供引用和参考来源；质量比速度更重要；关键决策因素在于任务是否需要外部知识获取；如果主要目标是优化现有知识，选Reflection；如果任务需要发现并整合新信息，选Reflexion。

## 总结

Reflection和Reflexion都代表了AI系统设计的重要进步，各有独特优势和理想应用场景。

Reflection在内容精修、创意工作以及注重效率的场景中表现突出。而Reflexion通过整合外部研究和结构化反馈，在知识密集或需要引用的应用中提供更高准确性。

虽然这些方法可能需要更多LLM调用（因而耗费更多时间和成本），但它们显著提升了产出高质量、可靠结果的可能性。更重要的是，通过在记忆中存储改进轨迹或用于微调，能帮助模型避免未来重复相同错误。

[https://avoid.overfit.cn/post/5f95082922614ac48cbfd84c0646199e](https://avoid.overfit.cn/post/5f95082922614ac48cbfd84c0646199e)

作者：Piyush Agnihotri

文章标签：

[人工智能](https://developer.aliyun.com/label/article_de-3-100052)

[API](https://developer.aliyun.com/label/article_de-3-100252)

[数据可视化](https://developer.aliyun.com/label/article_de-3-100057)

[存储](https://developer.aliyun.com/label/article_de-3-100262)

[算法](https://developer.aliyun.com/label/article_de-3-100255)

关键词：

[构建AI](https://www.aliyun.com/sswb/1044300.html)

[优化AI](https://www.aliyun.com/sswb/945752.html)

[AI机制](https://www.aliyun.com/sswb/1031871.html)

[https://developer.aliyun.com/profile/yafymv6co4b4w](https://developer.aliyun.com/profile/yafymv6co4b4w)

[Deephub](https://developer.aliyun.com/profile/yafymv6co4b4w)

目录

相关文章

[阿里云安全_](https://developer.aliyun.com/profile/v6ez4xoupkzwk)

|

7月前

|

云安全

人工智能

安全

[Dify平台集成阿里云AI安全护栏，构建AI Runtime安全防线](https://developer.aliyun.com/article/1686075)
阿里云 AI 安全护栏加入Dify平台，打造可信赖的 AI

[阿里云安全_](https://developer.aliyun.com/profile/v6ez4xoupkzwk)

3827

166

172

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

|

7月前

|

人工智能

Java

Nacos

[基于 Spring AI Alibaba + Nacos 的分布式 Multi-Agent 构建指南](https://developer.aliyun.com/article/1685761)
本文将针对 Spring AI Alibaba + Nacos 的分布式多智能体构建方案展开介绍，同时结合 Demo 说明快速开发方法与实际效果。

[阿里云云原生](https://developer.aliyun.com/profile/pawmkwdq37c7s)

5058

99

142

[时光在流逝](https://developer.aliyun.com/profile/uvjyushj3xof6)

|

7月前

|

人工智能

安全

架构师

[不只是聊天：从提示词工程看AI助手的优化策略](https://developer.aliyun.com/article/1685543)
不只是聊天：从提示词工程看AI助手的优化策略

[时光在流逝](https://developer.aliyun.com/profile/uvjyushj3xof6)

481

119

119

[阿里云安全_](https://developer.aliyun.com/profile/v6ez4xoupkzwk)

|

7月前

|

云安全

人工智能

自然语言处理

[阿里云x硅基流动：AI安全护栏助力构建可信模型生态](https://developer.aliyun.com/article/1685305)
阿里云AI安全护栏：大模型的“智能过滤系统”。

[阿里云安全_](https://developer.aliyun.com/profile/v6ez4xoupkzwk)

2580

120

123

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

|

7月前

|

人工智能

测试技术

API

[构建AI智能体：二、DeepSeek的Ollama部署FastAPI封装调用](https://developer.aliyun.com/article/1686112)
本文介绍如何通过Ollama本地部署DeepSeek大模型，结合FastAPI实现API接口调用。涵盖Ollama安装、路径迁移、模型下载运行及REST API封装全过程，助力快速构建可扩展的AI应用服务。

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

2428

7

9

[1830595326833932](https://developer.aliyun.com/profile/zeli7rv4bg4oa)

|

7月前

|

人工智能

自然语言处理

物联网

[GEO优化方法有哪些？2025企业抢占AI流量必看指南](https://developer.aliyun.com/article/1685517)
AI的不断重塑传统的信息入口之际，用户的搜索行为也从单一的百度、抖音的简单的查找答案的模式，逐渐转向了对DeepSeek、豆包、文心一言等一系列的AI对话平台的更加深入的探索和体验。DeepSeek的不断迭代优化同时，目前其月活跃的用户已破1.6亿，全网的AI用户规模也已超过6亿，这无疑为其下一阶段的迅猛发展提供了坚实的基础和广泛的市场空间。

[1830595326833932](https://developer.aliyun.com/profile/zeli7rv4bg4oa)

527

9

9

[FISSPACE](https://developer.aliyun.com/profile/ij7z2nx3zz4uy)

|

7月前

|

人工智能

缓存

并行计算

[用数学重构 AI的设想：流形注意力 + 自然梯度优化的最小可行落地](https://developer.aliyun.com/article/1685573)
本文提出两个数学驱动的AI模块：流形感知注意力（D-Attention）与自然梯度优化器（NGD-Opt）。前者基于热核偏置，在局部邻域引入流形结构，降低计算开销；后者在黎曼流形上进行二阶优化，仅对线性层低频更新前置条件。二者均提供可复现代码与验证路径，兼顾性能与工程可行性，助力几何感知的模型设计与训练。

[FISSPACE](https://developer.aliyun.com/profile/ij7z2nx3zz4uy)

609

1

1

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

|

7月前

|

人工智能

API

开发工具

[构建AI智能体：一、初识AI大模型与API调用](https://developer.aliyun.com/article/1686085)
本文介绍大模型基础知识及API调用方法，涵盖阿里云百炼平台密钥申请、DashScope SDK使用、Python调用示例（如文本情感分析、图像文字识别），助力开发者快速上手大模型应用开发。

[AI未闻花名](https://developer.aliyun.com/profile/tjgki4wgyxfxm)

2761

18

23

[https://developer.aliyun.com/article/1686085](https://developer.aliyun.com/article/1686085)

[Promise微笑](https://developer.aliyun.com/profile/hkshbmpq76pdi)

|

人工智能

搜索推荐

JavaScript

[【Geo专家于磊】深度解析：Geo优化中的Schema标签，如何让你的内容在AI时代脱颖而出？](https://developer.aliyun.com/article/1685946)
微笑老师详解Geo优化中Schema标签的写法，揭示如何通过结构化数据提升AI时代下的内容可见性。从选择类型、填写关键属性到JSON-LD格式应用与测试验证，全面掌握Geo优化核心技巧，助力本地商家在搜索结果中脱颖而出。（238字）

[Promise微笑](https://developer.aliyun.com/profile/hkshbmpq76pdi)

825

4

5

[大数据与机器学习](https://developer.aliyun.com/bigdata/)

## 热门文章

## 最新文章

[1
                            
                            阿里封神谈hadoop生态学习之路](https://developer.aliyun.com/article/28400)[2
                            
                            【玩转数据系列十】利用阿里云机器学习在深度学习框架下实现智能图片分类](https://developer.aliyun.com/article/72841)[3
                            
                            你刚吃的兰州牛肉面，背后就藏着大数据](https://developer.aliyun.com/article/92814)[4
                            odps是什么?](https://developer.aliyun.com/article/149536)[5
                            ajax请求总是不成功？浏览器的同源策略和跨域问题详解](https://developer.aliyun.com/article/27800)[6
                            【技术实验】mysql准实时同步数据到Elasticsearch](https://developer.aliyun.com/article/276730)[7
                            数据仓库介绍与实时数仓案例](https://developer.aliyun.com/article/691541)[8
                            分布式快照算法: Chandy-Lamport](https://developer.aliyun.com/article/688764)[9
                            DataV接入ECharts图表库  可视化利器强强联手](https://developer.aliyun.com/article/106656)[10
                            MaxCompute执行作业慢的原因排查](https://developer.aliyun.com/article/224681)

[1
                            
                            抖音商品详情API 实战总结（技术复盘）
                            21](https://developer.aliyun.com/article/1735814)[2
                            
                            亚马逊商品详情API 实战总结（技术复盘）
                            36](https://developer.aliyun.com/article/1735636)[3
                            
                            2026年思维导图工具深度横评：7款主流平台技术向实测与选型建议
                            54](https://developer.aliyun.com/article/1735613)[4
                            数据平台主管做智能问数选型,最该先看技术路线还是实施能力?
                            70](https://developer.aliyun.com/article/1735393)[5
                            小红书笔记详情API实战总结（技术复盘）
                            77](https://developer.aliyun.com/article/1735339)[6
                            Flink Forward Asia 2026 官宣深圳｜From Cloud Native to AI Native
                            92](https://developer.aliyun.com/article/1735169)[7
                            PAI-Rec的RealTimeU2IRecall 如何使用内置的i2i 缓存功能
                            50](https://developer.aliyun.com/article/1735150)[8
                            云上 K8s GPU 节点 ImagePullBackOff 排查记录
                            55](https://developer.aliyun.com/article/1735136)[9
                            PAI-Rec 多路召回截断实践：用 PriorityAdjustCountFilter 和 SnakeFilter 控制精排入口数量
                            69](https://developer.aliyun.com/article/1735119)[10
                            阐述：微店商品详情API实战经验
                            75](https://developer.aliyun.com/article/1735094)

## 相关课程

[更多](https://edu.aliyun.com/explore/)

[大模型Clouder认证课程：Spring AI 应用开发（入门）](https://edu.aliyun.com/course/3141300)[AI上云实战](https://edu.aliyun.com/course/3140300)[中国铁道科学研究院 × 阿里云AI应用开发实训营](https://edu.aliyun.com/course/3139005)[通义灵码2.0 AI 编码训练营](https://edu.aliyun.com/course/3133700)[AI应用开发](https://edu.aliyun.com/course/3133000)[基于Gradio的AI应用搭建实践课](https://edu.aliyun.com/course/3132500)

## 相关电子书

[更多](https://developer.aliyun.com/ebook/)

[AI 原生应用开源开发者沙龙·上海站电子书](https://developer.aliyun.com/ebook/8460)[AI原生应用开发实战营—Serverless AI专场·北京](https://developer.aliyun.com/ebook/8457)[阿里云 AI 原生应用开发实战营](https://developer.aliyun.com/ebook/8456)

## 相关实验场景

[更多](https://developer.aliyun.com/adc/)

[使用AI容器镜像部署Qwen大语言模型](https://developer.aliyun.com/adc/scenario/311000470108)[【玩转ComfyUI】基于函数计算一键部署AI生图平台ComfyUI](https://developer.aliyun.com/adc/scenario/311000680000)

下一篇

[阿里云网盘 Skill 上线：让 OpenClaw 的成果，手机一点就能发给客户](https://developer.aliyun.com/article/1719163)
