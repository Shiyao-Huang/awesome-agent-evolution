# 如何构建通用深度反思(deep-research)能力的Agent?

- URL: https://blog.csdn.net/zhangzhentiyes/article/details/147870438
- Platform: CSDN
- Extraction status: ok
- content_timestamp: 2026-02
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-02
- Query: site:blog.csdn.net AI Agent 自我改进

## Raw Content

## 如何构建通用深度反思(deep-research)能力的Agent?_agent反思-CSDN博客

**Source**: https://blog.csdn.net/zhangzhentiyes/article/details/147870438

---

# 如何构建通用深度反思(deep-research)能力的Agent?

最新推荐文章于 2026-02-05 00:29:22 发布

原创

最新推荐文章于 2026-02-05 00:29:22 发布

·

1k 阅读

·
![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Active.png)![](https://csdnimg.cn/release/blogv2/dist/pc/img/newHeart2023Black.png)
                       18                   

·
22
·

CC 4.0 BY-SA版权

                                   版权声明：本文为博主原创文章，遵循[CC 4.0 BY-SA](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和本声明。                       

文章标签：

[#Agent](https://so.csdn.net/so/search/s.do?q=Agent&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#LLM](https://so.csdn.net/so/search/s.do?q=LLM&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)[#langchain](https://so.csdn.net/so/search/s.do?q=langchain&t=all&o=vip&s=&l=&f=&viparticle=&from_tracking_code=tag_word&from_code=app_blog_art)

[大模型核心技术深度解析
                                    专栏收录该内容](https://blog.csdn.net/zhangzhentiyes/category_12895550.html)

28 篇文章

订阅专栏

Python3.8

Python 是一种高级、解释型、通用的编程语言，以其简洁易读的语法而闻名，适用于广泛的应用，包括Web开发、数据分析、人工智能和自动化脚本

要让Agent从简单的任务执行者进化为能够进行复杂问题解决、持续学习和自我优化的智能体，赋予其“深度反思”能力至关重要。本文将借鉴 `langchain`[local-deep-researcher](https://github.com/langchain-ai/local-deep-researcher)等项目的核心思想，探讨如何构建一个具备通用深度反思能力的Agent，并提供从0到1的实践指南，直至高级应用案例。

**为什么需要深度反思能力？**

传统的Agent往往遵循“感知-规划-行动”的线性模式。当任务复杂、环境多变或初步结果不理想时，它们缺乏有效的自我纠错和策略调整机制。深度反思能力允许Agent：

1. **评估当前状态**：审视已执行的动作、收集到的信息以及与目标的差距。
2. **识别不足与偏差**：发现知识的盲点、逻辑的谬误或策略的缺陷。
3. **生成改进策略**：基于反思结果，调整后续的规划和行动。
4. **迭代优化**：通过持续的“行动-反思-再行动”循环，逐步逼近最优解。

这种能力使得Agent在研究、写作、编程、复杂决策等领域表现更出色，更接近人类的认知模式。

#### 一、深度反思Agent的核心思路与流程

一个通用的深度反思Agent其核心思路可以概括为：**迭代式提问、探索、整合与批判性评估**。

**通用流程图：**

1. **初始任务定义**：用户提出一个高层次的目标或问题。
2. **初始规划与提问**：Agent将初始任务分解为一系列可执行的子问题或研究方向。
3. **子任务执行/信息搜集**：Agent利用其工具执行子任务，收集相关信息。
4. **信息整合与初步结论**：Agent对收集到的信息进行处理、去重、摘要，并尝试形成初步的答案或理解。
5. **深度反思与批判**：**核心环节**。Agent（或一个专门的“反思模块”）对当前的结果进行审视其充分性、准确性、相关性、深度和逻辑性。
6. **重新规划/生成新问题**：基于反思的结果，Agent调整其计划，可能包括生成更具体的新问题、调整信息搜集策略等，然后返回步骤3继续执行。
7. **生成最终报告/答案**：当反思环节认为结果已足够满意，Agent将整合所有有效信息，生成最终的、结构化的输出。

#### 二、架构设计

一个通用的深度反思Agent可以包含以下核心模块：

1. **Orchestrator (主控模块)**：负责整个流程的调度和控制。
2. **Planner (规划模块)**：接收任务和当前状态，生成或调整行动计划。
3. **Executor (执行模块)**：执行Planner生成的具体子任务，可能使用工具箱。
4. **Reflector (反思模块)**：评估Executor的结果和当前整体进展，进行批判并提出改进建议。
5. **Memory (记忆模块)**：存储和检索Agent运行过程中的短期和长期信息。
6. **Toolbox (工具箱)**：提供Agent与外部环境交互或执行特定任务的能力（如搜索引擎、代码解释器等）。

#### 三、通用深度反思Agent代码实现

我们将使用Python和OpenAI的API来实现一个简化的研究型反思Agent。

**环境准备：**

```
pip install openai python-dotenv
```

创建一个`.env`文件并填入你的OpenAI API密钥：

```
OPENAI_API_KEY="sk-your_api_key_here"
```

**核心代码：**

```
import os
import json
from openai import OpenAI
from dotenv import load_dotenv
from typing import List, Dict, Any, Tuple

# 加载环境变量
load_dotenv()

# 初始化OpenAI客户端
# 确保在你的环境中设置了 OPENAI_API_KEY
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

MODEL_NAME = "gpt-4o" # 或者选择 "gpt-4o-mini" 等其他适用模型

def call_llm(prompt: str, system_prompt: str = "你是一个有帮助的AI助手。") -> str:
    """调用LLM的辅助函数"""
    try:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7, # 温度可以根据任务调整，较低的值产生更确定的输出
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"调用LLM时出错: {e}")
        return f"错误: 无法从LLM获取响应。 {e}"

class PlannerAgent:
    """规划智能体，负责生成和调整计划。"""
    def generate_initial_plan(self, main_task: str) -> List[str]:
        """根据主任务生成初步的子任务列表。"""
        system_prompt = "你是一位专家规划智能体。请将给定的任务分解为一系列可操作的子问题或研究步骤。输出一个JSON字符串列表。"
        prompt = f"""
        主任务: "{main_task}"

        根据此主任务，生成一个包含3-5个初始子问题或研究步骤的列表，以开始调查。
        例如，如果任务是“理解人工智能对气候变化的影响”，子问题可以是：
        - "当前有哪些旨在减缓气候变化的人工智能应用？"
        - "人工智能如何为气候变化建模和预测做出贡献？"
        - "人工智能的能源消耗问题及其对气候的影响是什么？"

        请严格按照JSON字符串列表的格式输出。例如：["问题1", "问题2", "问题3"]
        """
        response_str = call_llm(prompt, system_prompt)
        try:
            # 尝试解析JSON，如果失败则进行回退处理
            plan = json.loads(response_str)
            if isinstance(plan, list) and all(isinstance(item, str) for item in plan):
                return plan
            else:
                print(f"规划器警告: LLM输出不是预期的字符串列表格式: {response_str}")
                # 回退逻辑：尝试按行分割，取看起来像问题的行
                return [q.strip().replace("- ", "") for q in response_str.split('\n') if q.strip() and len(q.strip()) > 10][:3]
        except json.JSONDecodeError:
            print(f"规划器错误: 无法从LLM响应解码JSON: {response_str}")
            # 回退逻辑：同上
            return [q.strip().replace("- ", "") for q in response_str.split('\n') if q.strip() and len(q.strip()) > 10][:3]

class ExecutorAgent:
    """执行智能体，负责执行具体的子任务。"""
    def execute_task(self, sub_task: str, context: List[str] = None) -> str:
        """
        执行子任务。在本示例中，这简化为向LLM提问以“模拟”研究过程。
        在实际应用中，这里可能会调用工具（如搜索引擎API）。
        """
        system_prompt = "你是一位研究助理。请根据你的知识，针对给定的问题提供一个简洁明了的答案。如果提供了上下文信息，请结合上下文进行回答。"
        
        full_prompt = f"问题: {sub_task}\n"
        if context:
            full_prompt += "\n现有上下文参考 (除非与问题直接相关，否则不必在回答中明确提及这些上下文信息):\n"
            full_prompt += "\n".join([f"- {c}" for c in context])
        
        full_prompt += "\n请针对以上问题，提供一个简洁的回答。"

        # 注意：在真实的研究型Agent中，这里会调用如TavilySearchResults等工具
        # response = TavilySearchResults(max_results=1).invoke(sub_task) # 使用工具的示例
        response = call_llm(full_prompt, system_prompt)
        return f"关于 '{sub_task}': {response}"

class ReflectorAgent:
    """反思智能体，负责批判性评估并提出改进建议。"""
    def reflect_and_critique(self, main_task: str, plan: List[str], execution_results: List[Dict[str, str]], current_summary: str) -> Tuple[str, List[str]]:
        """
        对当前进展进行反思和批判。
        返回: (批判意见字符串, 建议的下一步任务列表)
        """
        system_prompt = """你是一位细致且具有批判性思维的AI审查员。你的职责是评估研究任务的进展情况，识别存在的不足之处，并提出具体的改进建议。
你的批判和建议都必须具体明确。
请以字符串形式输出你的批判意见，并以一个包含新的或经过优化的研究问题/任务的JSON列表形式，给出你建议的后续步骤。
如果你认为当前的信息对于完成主要任务已经足够全面和深入，那么建议的后续步骤列表可以为空。"""
        
        results_str = "\n".join([f"已执行任务: {res['task']}\n对应结果: {res['result']}\n---" for res in execution_results])

        prompt = f"""
        主任务: "{main_task}"

        当前研究计划:
        {json.dumps(plan, indent=2, ensure_ascii=False)}

        到目前为止的执行结果汇总:
        {results_str}

        当前成果总结:
        "{current_summary if current_summary else '尚未形成总结。'}"

        基于以上所有信息，请进行评估:
        1. 批判当前进展:
           - 收集到的信息是否与主要任务相关？信息量是否足够？
           - 是否存在明显的知识空白、信息不一致，或者哪些方面需要更深入的研究？
           - 考虑到已有的执行结果，目前的总结是否准确和全面？
        2. 提出具体的下一步行动建议:
           - 应该研究哪些新的、更具体的问题？
           - 哪些现有的问题需要更详尽的答案？
           - 如果你认为目前的研究对主要任务来说已经比较完整，可以提供一个空的下一步行动列表。

        请将你的完整响应格式化为**一个单独的JSON对象**，该对象包含两个键: "critique" (其值为字符串类型的批判意见) 和 "next_steps" (其值为字符串列表类型的下一步任务建议)。
        例如:
        {{
          "critique": "初步的发现对X提供了一个不错的概述，但在Y和Z方面的细节不足。与主任务的子方面A的联系尚未明确。",
          "next_steps": ["更详细地调查Y。", "Z如何与主任务的子方面A相关联？"]
        }}
        """
        response_str = call_llm(prompt, system_prompt)
        try:
            reflection = json.loads(response_str)
            critique = reflection.get("critique", "未能提供有效的批判意见。")
            next_steps = reflection.get("next_steps", [])
            if not isinstance(next_steps, list): # 确保 next_steps 是列表
                print(f"反思器警告: next_steps 的输出不是列表类型: {next_steps}")
                next_steps = [] # 出错时回退到空列表
            return critique, next_steps
        except json.JSONDecodeError:
            print(f"反思器错误: 无法从LLM的反射响应中解码JSON: {response_str}")
            # 在JSON解析失败时，提供通用的批判意见和空的下一步建议
            return "错误: 无法解析反思结果。收集到的信息可能不完整，或LLM的响应格式不正确。", []

class Orchestrator:
    """主控智能体，负责协调各个模块并管理整个研究流程。"""
    def __init__(self):
        self.planner = PlannerAgent()
        self.executor = ExecutorAgent()
        self.reflector = ReflectorAgent()
        self.memory = { # 用于存储Agent运行过程中的各种信息
            "main_task": "",
            "current_plan": [], # 当前迭代中要执行的计划
            "executed_tasks_results": [], # 存储所有已执行任务及其结果的列表，格式为 {"task": str, "result": str}
            "overall_summary": "",
            "critiques": [] # 存储每次迭代的批判意见
        }

    def run(self, main_task: str, max_iterations: int = 3):
        """执行主研究循环。"""
        print(f"🤖 开始为任务进行研究: \"{main_task}\"\n")
        self.memory["main_task"] = main_task
        # 为新的运行重置历史记录
        self.memory["executed_tasks_results"] = []
        self.memory["critiques"] = []
        self.memory["overall_summary"] = ""

        # 1. 初始规划
        print("📝 阶段 1: 初始规划...")
        # current_plan_for_iteration 用于当前迭代的任务列表，会随着迭代更新
        current_plan_for_iteration = self.planner.generate_initial_plan(main_task)
        self.memory["current_plan"] = list(current_plan_for_iteration) # 保存一份到memory中作为参考
        if not current_plan_for_iteration:
            print("🛑 规划器未能生成初始计划。任务中止。")
            return
        print(f"初始计划: {current_plan_for_iteration}\n")

        for i in range(max_iterations):
            print(f"🔄 迭代 {i + 1} / {max_iterations}\n")

            # 2. 执行阶段
            # iteration_execution_results 存储当前这一轮迭代的执行结果，用于后续传递给反思器
            iteration_execution_results = [] 
            print(f"🛠️ 阶段 2: 执行 (本轮任务数: {len(current_plan_for_iteration)})...")
            if not current_plan_for_iteration:
                print("当前计划中没有任务。可能直接进入反思或完成阶段。")
            
            for sub_task in current_plan_for_iteration:
                # 简单检查是否已执行过完全相同的任务��符串，避免简单重复（更复杂的检查可能需要语义相似度）
                # if sub_task in [res['task'] for res in self.memory["executed_tasks_results"]]:
                #     print(f"跳过已执行过的任务: {sub_task}")
                #     # 将之前的结果加入到本轮迭代结果中，供反思器参考
                #     prev_res = next((res for res in self.memory["executed_tasks_results"] if res['task'] == sub_task), None)
                #     if prev_res:
                #         iteration_execution_results.append(prev_res)
                #     continue

                print(f"正在执行任务: \"{sub_task}\"")
                # 将最近的部分历史结果作为上下文传递给执行器
                context_for_execution = [res['result'] for res in self.memory['executed_tasks_results']][-3:] # 取最近3条结果作为上下文
                result = self.executor.execute_task(sub_task, context=context_for_execution)
                print(f"结果预览: \"{result[:150]}...\"\n") # 打印结果的前150个字符作为预览
                
                task_result_pair = {"task": sub_task, "result": result}
                self.memory["executed_tasks_results"].append(task_result_pair) # 存入长期记忆
                iteration_execution_results.append(task_result_pair) # 存入本轮迭代结果
            
            # 3. 信息综合/总结阶段
            print("📄 阶段 3: 信息综合...")
            # 将所有已执行任务的结果文本汇总起来
            all_results_text = "\n\n".join([res["result"] for res in self.memory["executed_tasks_results"]])
            
            # 让LLM根据所有结果生成一个连贯的总结
            summary_prompt = f"""给定以下一系列研究发现，请将它们综合成一个针对主任务“{self.memory['main_task']}”的连贯、全面的总结。
请确保总结流畅、准确，并突出最重要的信息。

研究发现汇总:
{all_results_text}

综合总结:
"""
            self.memory["overall_summary"] = call_llm(summary_prompt, "你是一位专业的研究总结员。")
            print(f"当前总结预览: \"{self.memory['overall_summary'][:200]}...\"\n") # 打印总结的前200个字符

            # 4. 反思与批判阶段
            print("🤔 阶段 4: 反思与批判...")
            critique, next_steps = self.reflector.reflect_and_critique(
                self.memory["main_task"],
                self.memory["current_plan"], # 传递本轮执行的计划给反思器
                iteration_execution_results, # 传递本轮迭代的执行结果给反思器
                self.memory["overall_summary"]
            )
            self.memory["critiques"].append(critique) # 保存批判意见
            print(f"批判意见: {critique}")
            print(f"建议的下一步骤: {next_steps}\n")

            # 5. 决策与重新规划
            if not next_steps: # 如果反思器认为不需要更多步骤
                print("✅ 反思表明当前研究已足够深入和全面。")
                break # 结束迭代
            
            current_plan_for_iteration = next_steps # 更新计划，用于下一次迭代
            self.memory["current_plan"] = list(next_steps) # 同时更新内存中的计划备份

            if i == max_iterations - 1: # 如果达到最大迭代次数
                print("⚠️ 已达到最大迭代次数。")
                break # 结束迭代
        
        # 6. 最终输出
        print("\n🏁 研究完成。最终总结报告:")
        print(self.memory["overall_summary"])
        print("\n在研究过程中收集到的批判意见:")
        for idx, c_text in enumerate(self.memory["critiques"]):
            print(f"- 第 {idx+1} 轮迭代批判: {c_text}")

if __name__ == "__main__":
    print("\n--- 基础Orchestrator测试 ---")
    base_orchestrator = Orchestrator()
    base_orchestrator.run(
        main_task="解释机器学习中的'零样本学习'概念，并至少提供一个在当前不常见领域的新颖应用想法。",
        max_iterations=2
    )
    print("\n" + "="*50 + "\n")
```

##### 代码解读

- **`call_llm`**: 通用的LLM调用函数，封装了与OpenAI API的交互，包含基本的错误处理。
- **`PlannerAgent`**:    
  - `generate_initial_plan`: 通过精心设计的Prompt引导LLM将主任务分解为子任务列表（JSON格式）。增加了对LLM输出格式不符合预期时的回退处理。

- **`ExecutorAgent`**:    
  - `execute_task`: 模拟执行子任务。在实际应用中，这里会调用各种工具（如搜索引擎API）。当前实现是让LLM直接回答子问题作为“研究结果”。它也可以接收一些历史结果作为上下文。

- **`ReflectorAgent`**:    
  - `reflect_and_critique`: 反思能力的核心。接收主任务、当前计划、本轮执行结果和当前总结。其Prompt引导LLM进行批判性思考（信息充分性、相关性、深度等），并输出结构化的“批判意见”和“下一步任务建议”（JSON格式）。这个结构化输出对主控器的决策至关重要。

- **`Orchestrator`**:    
  - `__init__`: 初始化各个Agent组件和`memory`（用于存储状态和产出）。
  - `run`: 实现了核心的“规划-执行-总结-反思”迭代循环。      
    1. **初始规划**：调用`PlannerAgent`生成首版计划。
    2. **迭代循环**：        
      - **执行**：遍历当前计划中的任务，调用`ExecutorAgent`执行。结果存入`memory`和本轮迭代结果列表。
      - **综合**：汇总所有结果，让LLM生成一个`overall_summary`。
      - **反思**：调用`ReflectorAgent`，获取批判意见和新的计划（`next_steps`）。
      - **决策**：如果`next_steps`为空，则结束。否则，用`next_steps`更新计划，进入下一轮。

    3. **最终输出**：打印最终总结和所有迭代中的批判意见。

---

#### 四、 高级技能与拓展案例

在掌握了基础的深度反思Agent构建之后，我们可以探索一些高级技能来进一步增强其能力。

##### 4.1：动态规划与适应性 (Dynamic Planning & Adaptability)

**理念：**

在传统的固定迭代周期之间，Agent可能在执行某个子任务时遇到“惊喜”——一个意料之外但极其重要的信息，或者发现当前路径是错误的。动态规划与适应性允许Agent在迭代周期内，根据这些即时出现的关键发现，迅速调整其后续的行动计划，而不是等待整个迭代周期的反思阶段。

**实现方案：**

1. **执行器信号**：`ExecutorAgent` 在执行任务时，如果判断当前获得的信息具有颠覆性或高度重要性，可以返回一个特殊标志和该关键信息。
2. **主控器即时响应**：`Orchestrator` 在每次执行完一个子任务后，检查这个信号。如果收到关键信息信号，它会暂停当前计划的其余部分。
3. **规划器适应性调整**：`Orchestrator` 将当前任务、已执行的步骤、累积结果以及这个新的“关键信息”传递给 `PlannerAgent`，要求其基于新信息更新计划。
4. **继续执行新计划**：`Orchestrator` 使用更新后的计划继续执行。

**代码实现 (动态规划)：**

```
# 文件顶部引入等与基础Agent部分相同
# import os
# import json
# from openai import OpenAI
# from dotenv import load_dotenv
# from typing import List, Dict, Any, Tuple

# load_dotenv()
# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# MODEL_NAME = "gpt-4-turbo-preview"

# def call_llm(...): 与基础Agent部分相同

# --- 对 ExecutorAgent 进行修改以支持关键信息检测 ---
class ExecutorAgentWithDynamicSignal(ExecutorAgent): # 继承自基础的ExecutorAgent
    def execute_task(self, sub_task: str, context: List[str] = None) -> Dict[str, Any]:
        """
        执行任务，并可能返回关键信息信号。
        返回: 一个字典 {"result": str, "is_critical": bool, "critical_info": Optional[str]}
        """
        system_prompt = """你是一名研究助理。请根据你的知识简明扼要地回答给出的问题。
如果提供了上下文，请用它来辅助你的回答。
重要提示：如果你的发现在当前研究背景下具有高度的意外性、极端重要性或可能彻底改变研究方向，请在回答后明确指出，并使用以下特定格式封装你的关键发现：
CRITICAL_INFO_START<<[此处填写你的关键发现简述，不要超过100字]>>CRITICAL_INFO_END"""
        
        full_prompt = f"问题: {sub_task}\n"
        if context:
            full_prompt += "\n现有上下文参考 (除非相关，否则不必明确提及):\n"
            full_prompt += "\n".join([f"- {c}" for c in context])
        
        full_prompt += "\n请简明扼要地回答问题。如果发现任何颠覆性的信息，请按指定格式指出。"

        raw_response = call_llm(full_prompt, system_prompt)
        
        result_text = raw_response # 初始化结果文本
        is_critical_signal = False
        critical_information = None

        # 检查是否包含关键信息标记
        critical_start_tag = "CRITICAL_INFO_START<<"
        critical_end_tag = ">>CRITICAL_INFO_END"
        if critical_start_tag in raw_response and critical_end_tag in raw_response:
            start_idx = raw_response.find(critical_start_tag) + len(critical_start_tag)
            end_idx = raw_response.find(critical_end_tag)
            if start_idx < end_idx: # 确保标记有效
                critical_information = raw_response[start_idx:end_idx].strip()
                # 从主要结果中移除标记（或者选择保留，取决于设计）
                # result_text = raw_response.replace(f"{critical_start_tag}{critical_information}{critical_end_tag}", "").strip()
                is_critical_signal = True
                print(f"⚡️ 执行器发现关键信息: {critical_information}")

        return {
            "result": f"关于 '{sub_task}': {result_text}", # 返回包含或不含标记的完整原始回复，由后续处理决定
            "is_critical": is_critical_signal,
            "critical_info": critical_information
        }

# --- 对 PlannerAgent 进行扩展以支持适应性规划 ---
class AdaptivePlannerAgent(PlannerAgent): # 继承自基础的PlannerAgent
    def adapt_plan(self, main_task: str, current_plan: List[str], executed_results: List[Dict[str,str]], critical_info: str) -> List[str]:
        """根据新的关键信息调整现有研究计划。"""
        system_prompt = """你是一位适应性规划专家。你的任务是根据新出现的关键信息，来审查并调整当前的研究计划。
你需要仔细评估原始任务、当前计划（包括已完成和未完成的部分）、已执行工作的摘要，以及这个新的关键信息。
然后，输出一个经过深思熟虑调整后的、最优的JSON任务列表，用以指导后续的研究工作。"""

        executed_results_summary = "\n".join([f"- 任务 '{res['task']}': 结果摘要 '{res['result'][:100]}...'" for res in executed_results])

        prompt = f"""
        主任务: "{main_task}"

        当前计划 (其中部分任务可能已经执行完毕，剩下的任务是接下来要做的):
        {json.dumps(current_plan, indent=2, ensure_ascii=False)}

        已执行的任务和结果摘要:
        {executed_results_summary if executed_results_summary else "尚未执行任何任务。"}

        ‼️ 新出现的、需要立即关注的关键信息: "{critical_info}"

        鉴于这一新的关键信息，请对当前计划的有效性和优先级进行重新评估。
        你需要生成一个新的、经过优化的任务列表 (严格按照JSON字符串列表的格式输出)。
        这个新计划应充分整合这一关键信息，可能需要：
        1. 添加新的、针对此关键信息的调查任务。
        2. 修改现有未执行任务的优先级或内容。
        3. 删除因新信息而变得不再相关或优先级降低的任务。
        确保整个计划仍然紧密围绕主任务展开，并旨在最高效地达成研究目标。
        输出调整后的JSON任务列表。例如：["新任务1基于关键信息", "调整后的旧任务2", "新任务3"]
        """
        response_str = call_llm(prompt, system_prompt)
        try:
            new_plan = json.loads(response_str)
            if isinstance(new_plan, list) and all(isinstance(item, str) for item in new_plan):
                return new_plan
            else:
                print(f"适应性规划器警告: LLM输出不是预期的字符串列表格式: {response_str}")
                # 提供一个基于关键信息的回退计划
                return [f"深入调查关键信息: {critical_info}", current_plan[0] if current_plan else f"基于'{critical_info}'重新评估主任务"]
        except json.JSONDecodeError:
            print(f"适应性规划器错误: 无法从LLM响应解码JSON: {response_str}")
            return [f"深入调查关键信息: {critical_info}", current_plan[0] if current_plan else f"基于'{critical_info}'重新评估主任务"]

# --- 对 Orchestrator 进行修改以支持动态规划 ---
class DynamicOrchestrator(Orchestrator): # 继承自基础Orchestrator
    def __init__(self):
        super().__init__() # 调用父类的__init__
        self.planner = AdaptivePlannerAgent() # 使用新的规划器
        self.executor = ExecutorAgentWithDynamicSignal() # 使用新的执行器
        # ReflectorAgent 保持不变，仍使用父类中的 self.reflector

    def run(self, main_task: str, max_iterations: int = 3):
        """执行主研究循环，包含动态规划逻辑。"""
        print(f"🤖 (动态规划模式) 开始为任务进行研究: \"{main_task}\"\n")
        self.memory["main_task"] = main_task
        self.memory["executed_tasks_results"] = []
        self.memory["critiques"] = []
        self.memory["overall_summary"] = ""

        print("📝 阶段 1: 初始规划...")
        tasks_for_current_iteration = self.planner.generate_initial_plan(main_task)
        self.memory["current_plan"] = list(tasks_for_current_iteration)
        if not tasks_for_current_iteration:
            print("🛑 规划器未能生成初始计划。任务中止。")
            return
        print(f"初始计划: {tasks_for_current_iteration}\n")

        for i in range(max_iterations):
            print(f"🔄 迭代 {i + 1} / {max_iterations}\n")
            
            iteration_execution_results = [] # 本轮迭代的执行结果
            
            # 使用一个索引来遍历 tasks_for_current_iteration，因为列表可能在循环中被动态修改
            task_idx = 0
            while task_idx < len(tasks_for_current_iteration):
                sub_task = tasks_for_current_iteration[task_idx]
                print(f"🛠️ 正在执行任务 ({task_idx + 1}/{len(tasks_for_current_iteration)}): \"{sub_task}\"")

                context_for_execution = [res['result'] for res in self.memory['executed_tasks_results']][-3:]
                execution_output = self.executor.execute_task(sub_task, context=context_for_execution)
                
                task_result_pair = {"task": sub_task, "result": execution_output["result"]}
                self.memory["executed_tasks_results"].append(task_result_pair)
                iteration_execution_results.append(task_result_pair)
                print(f"结果预览: \"{execution_output['result'][:150]}...\"\n")

                # 关键的动态规划检查点
                if execution_output["is_critical"] and execution_output["critical_info"]:
                    print(f"⚠️ 检测到关键信息，触发动态重规划流程...")
                    critical_info_text = execution_output["critical_info"]
                    
                    # 调用适应性规划器，传入当前计划（包括未完成的任务）和所有已执行结果
                    # 注意：传入 tasks_for_current_iteration 而不是 self.memory["current_plan"] 的原始副本
                    # 因为 tasks_for_current_iteration 反映了当前迭代的动态状态
                    new_dynamic_plan = self.planner.adapt_plan(
                        self.memory["main_task"],
                        tasks_for_current_iteration, 
                        self.memory["executed_tasks_results"], 
                        critical_info_text
                    )
                    print(f"由关键信息“{critical_info_text}”触发，动态调整后的新计划: {new_dynamic_plan}\n")
                    tasks_for_current_iteration = new_dynamic_plan # 更新当前迭代要执行的计划
                    self.memory["current_plan"] = list(new_dynamic_plan) # 更新内存中的主计划参考
                    
                    # 重规划后，通常从新计划的第一个任务开始
                    task_idx = 0 
                    # 对于本轮迭代的执行结果，可以选择清空（因为计划大改，旧结果可能不再直接适用反思）
                    # 或保留并让反思器处理混合信息。这里选择清空以简化逻辑。
                    iteration_execution_results = [] 
                    if not tasks_for_current_iteration: # 如果新计划为空
                        print("动态调整后的计划为空，可能需要提前结束或进入特殊反思。")
                        break # 跳出while循环，进入迭代末尾的反思
                    continue # 跳过 task_idx++，从新计划的第一个任务开始

                task_idx += 1 # 正常推进到下一个任务
            
            # 如果 tasks_for_current_iteration 在动态规划后变为空 (例如所有任务都被关键信息取代或完成)
            if not tasks_for_current_iteration and i < max_iterations -1 : 
                print("⚠️ 当前迭代计划在动态调整后已空。为简化，我们将继续到迭代末尾的反思阶段。")
            
            # --- 后续的总结和反思阶段与基础Orchestrator类似 ---
            print("📄 阶段 3: 信息综合...")
            all_results_text = "\n\n".join([res["result"] for res in self.memory["executed_tasks_results"]])
            summary_prompt = f"""给定以下一系列研究发现，请将它们综合成一个针对主任务“{self.memory['main_task']}”的连贯、全面的总结。
请确保总结流畅、准确，并突出最重要的信息。

研究发现汇总:
{all_results_text}

综合总结:
"""
            self.memory["overall_summary"] = call_llm(summary_prompt, "你是一位专业的研究总结员。")
            print(f"当前总结预览: \"{self.memory['overall_summary'][:200]}...\"\n")

            print("🤔 阶段 4: 反思与批判...")
            # 注意：这里的self.reflector仍然是基础版本，也可以替换为更复杂的反思器
            critique, next_steps = self.reflector.reflect_and_critique(
                self.memory["main_task"],
                self.memory["current_plan"], # 传递当前（可能是动态调整后的）计划
                iteration_execution_results, 
                self.memory["overall_summary"]
            )
            self.memory["critiques"].append(critique)
            print(f"批判意见: {critique}")
            print(f"建议的下一步骤: {next_steps}\n")

            if not next_steps:
                print("✅ 反思表明当前研究已足够深入和全面。")
                break
            
            tasks_for_current_iteration = next_steps
            self.memory["current_plan"] = list(next_steps)

            if i == max_iterations - 1:
                print("⚠️ 已达到最大迭代次数。")
        
        # 最终输出部分与基础Orchestrator相同
        print("\n🏁 研究完成。最终总结报告:")
        print(self.memory["overall_summary"])
        print("\n在研究过程中收集到的批判意见:")
        for idx, c_text in enumerate(self.memory["critiques"]):
            print(f"- 第 {idx+1} 轮迭代批判: {c_text}")

if __name__ == "__main__":

    print("\n--- DynamicOrchestrator (含动态规划) 测试 ---")
    # 注意：为了稳定触发动态规划，你可能需要在ExecutorAgentWithDynamicSignal中模拟或确保LLM返回CRITICAL_INFO
    # 例如，在call_llm的返回中手动添加 "CRITICAL_INFO_START<<模拟的关键发现：零样本学习可用于预测罕见病>>CRITICAL_INFO_END"
    dynamic_orchestrator = DynamicOrchestrator()
    dynamic_orchestrator.run(
        main_task="探索宇宙中最神秘的天体现象及其对基础物理学可能产生的颠覆性影响。",
        max_iterations=2
    )
    print("\n" + "="*50 + "\n")
```

###### 代码解读 (动态规划)

- `ExecutorAgentWithDynamicSignal`:    
  - `execute_task` 方法现在返回一个包含 `is_critical` (布尔值) 和 `critical_info` (字符串或None) 的字典。
  - 它通过修改对LLM的系统提示，指导LLM在发现极端重要或颠覆性信息时，使用特定标记（`CRITICAL_INFO_START<<...>>CRITICAL_INFO_END`）封装这些信息。代码随后解析这个标记。

- `AdaptivePlannerAgent`:    
  - 新增 `adapt_plan` 方法。此方法接收主任务、当前计划（包括已执行和未执行的部分）、所有已执行结果的摘要，以及新发现的“关键信息”。
  - 其核心是一个精心设计的Prompt，引导LLM基于这些输入，特别是新的关键信息，来重新评估和调整计划，输出一个新的JSON格式的任务列表。

- `DynamicOrchestrator`:    
  - 在其 `run` 方法的核心执行循环 (`while task_idx < len(tasks_for_current_iteration)`) 中：      
    - 在每个子任务执行完毕后，检查 `execution_output["is_critical"]`。
    - 如果为 `True`，则打印检测到的关键信息，并立即调用 `self.planner.adapt_plan` 方法。
    - 使用 `adapt_plan` 返回的新计划 (`new_dynamic_plan`) 替换当前迭代的任务列表 (`tasks_for_current_iteration`)。
    - 重置任务索引 `task_idx` 为0，意味着从新计划的第一个任务开始执行。
    - （可选）清空当前迭代的执行结果 `iteration_execution_results`，因为计划已发生重大改变。
    - 使用 `continue` 跳过当前 `while` 循环的剩余部分，直接开始执行新计划。

这种机制使得Agent能够更敏捷地响应研究过程中的意外发现，而不是僵硬地等待一个完整的迭代周期结束才进行调整。

##### 4.2：多Agent协作反思 (Multi-Agent Collaborative Reflection)

**理念：**

单一反思模块可能存在视角局限。通过引入多个具有不同专长或角色的Agent进行协作反思，可以实现更全面、更深入的评估。例如，一个Agent负责生成初步内容，一个“批判家Agent”负责挑错和质疑，一个“改进家Agent”负责基于批判来优化内容。

**实现方案：**

1. **角色定义**：    
  - `GeneratorAgent`（可选，或由`ExecutorAgent`的结果扮演）：负责产出初步内容（例如，本轮迭代的总结）。
  - `CritiqueAgent`：专门负责从不同维度（如准确性、完整性、逻辑性、创新性等）对生成的内容进行批判。
  - `ImproverAgent`：接收原始内容和`CritiqueAgent`的批判意见，然后生成改进后的内容或提出具体的修改步骤。

2. **协作流程**：    
  - `Orchestrator` 在其“反思”阶段，不再调用单一的 `ReflectorAgent`。
  - 而是先将当前成果（如`overall_summary`）交给 `CritiqueAgent`。
  - 然后将成果和批判意见一起交给 `ImproverAgent`。
  - `ImproverAgent` 的输出（改进后的总结和下一步计划建议）再反馈给 `Orchestrator`，用于决定整体进程。

**代码实现 (多Agent协作反思)：**

```
# 文件顶部引入等与基础Agent部分相同
# ... (call_llm, 基础PlannerAgent, 基础ExecutorAgent 定义) ...

# --- 新增协作反思的Agent ---
class CritiqueAgent:
    """批判智能体，负责对产出进行批判性评估。"""
    def critique_output(self, main_task: str, current_output: str, executed_tasks_results: List[Dict[str,str]]) -> str:
        """
        对当前产出进行批判性评估。
        返回: 结构化的批判意见 (字符串)。
        """
        system_prompt = """你是一位极其挑剔、眼光独到且洞察力深刻的AI批判家。
你的核心任务是严格审查所提供的研究总结以及支撑该总结的相关执行结果，找出其中所有潜在的缺陷、不足和可疑之处。
请重点关注但不限于：逻辑上的漏洞、信息之间的不一致性、分析深度的缺乏、潜在的认知偏见、未被充分探讨的关键方面，以及内容与主要任务目标的偏差。
你的批判必须具体、有建设性，并且清晰地指出需要改进的关键领域。请不要害怕提出尖锐或挑战性的问题。
直接输出你的详细批判意见。"""

        # 准备已执行任务结果的简报，供批判家参考
        results_summary_for_critique = "\n".join([f"- 对于任务 '{res['task']}': 获得结果摘要 '{res['result'][:100]}...'" for res in executed_tasks_results])
        if not results_summary_for_critique:
            results_summary_for_critique = "尚未有详细的执行结果可供参考。"

        prompt = f"""
        主研究任务: "{main_task}"

        当前需要被批判的研究总结:
        "{current_output}"

        支持该总结的已执行任务及结果摘要:
        {results_summary_for_critique}

        请对上述总结进行一次深入、严厉且全面的批判。明确指出其所有弱点、不足之处以及任何可疑的论断。
        例如，你可以思考以下问题：
        - 总结中的X观点是否缺乏来自Y的充分证据支持？
        - Z方面是否被完全忽略了，而它对于主任务的完成至关重要？
        - 总结中对A和B之间联系的解释是否过于肤浅或模糊不清？
        - 这份总结是否成功地解决了最初研究计划中提出的某个关键问题？
        - 总结中是否存在任何未经证实的假设或可能引起误解的表述？

        请提供你的详细批判意见:
        """
        critique = call_llm(prompt, system_prompt)
        return critique

class ImproverAgent:
    """改进智能体，负责根据批判意见改进产出并建议下一步。"""
    def improve_and_suggest_next_steps(self, main_task: str, original_output: str, critique: str, current_plan_context: List[str]) -> Tuple[str, List[str]]:
        """
        根据批判意见改进产出，并建议下一步行动。
        返回: (改进后的产出字符串, 建议的下一步JSON任务列表)
        """
        system_prompt = """你是一位专业的AI内容改进者和研究策略师。
你的核心任务是基于所提供的批判性意见，显著提升原始内容的质量，并为整个研究项目规划出清晰、有效的下一步行动。
你需要仔细分析原始输出内容和针对它的批判意见，然后完成以下两项工作：
1. 生成一个经过改进的、更加完善的内容版本。这个版本应该直接解决批判中指出的所有问题，力求在深度、准确性和完整性上都有显著提升。
2. 提出一个清晰、可操作的JSON任务列表，作为下一步的研究计划。如果经过你的改进，当前阶段的信息已足够应对主任务，则任务列表可以为空。"""

        prompt = f"""
        主研究任务: "{main_task}"

        需要改进的原始总结:
        "{original_output}"

        针对该总结的详细批判意见:
        "{critique}"
        
        当前的研究计划上下文（供你参考，你可能需要基于批判意见对其进行调整或提出全新步骤）:
        {json.dumps(current_plan_context, indent=2, ensure_ascii=False)}

        基于以上所有信息:
        1. 请撰写一份改进后的总结。这份新总结应直接回应批判中指出的每一个问题点，致力于提升内容的深度、准确性、逻辑性和完整性。
        2. 提出一个具体的、JSON格式的字符串任务列表，作为下一步的研究计划。这些任务应旨在进一步加强总结的论证、填补知识空白、或探索由批判意见揭示出的新的相关研究领域。如果经过你的改进，现有信息已非常完善，可以返回一个空的任务列表。

        请将你的完整响应严格格式化为**一个单独的JSON对象**，该对象必须包含两个键: 
        - "improved_summary" (其值为字符串类型，即你撰写的改进后的总结)
        - "next_steps" (其值为字符串列表类型，即下一步任务建议)
        例如:
        {{
            "improved_summary": "这里是经过大幅改进的、更加全面和深入的总结内容...",
            "next_steps": ["深入研究批判意见中提到的Y方面与主任务的深层联系。", "为改进后的总结寻找更多最新的数据来支持Z论点。", "对比分析A和B在不同场景下的表现。"]
        }}
        """
        response_str = call_llm(prompt, system_prompt)
        try:
            improvement_data = json.loads(response_str)
            improved_summary = improvement_data.get("improved_summary", original_output) # 若解析失败或键不存在，返回原始内容
            next_steps = improvement_data.get("next_steps", [])
            if not isinstance(next_steps, list): # 确保next_steps是列表
                print(f"改进器警告: next_steps 的输出不是列表类型: {next_steps}")
                next_steps = [] # 出错时回退到空列表
            return improved_summary, next_steps
        except json.JSONDecodeError:
            print(f"改进器错误: 无法从LLM响应解码JSON: {response_str}")
            # 如果解析失败，返回原始内容和包含错误提示的下一步
            return original_output, [f"错误：改进器未能正确处理批判并生成下一步。请检查批判内容：'{critique[:100]}...'"]

# --- 修改 Orchestrator 以使用协作反思 ---
# 我们创建一个新的Orchestrator类，或者可以修改原有的DynamicOrchestrator
class CollaborativeOrchestrator(DynamicOrchestrator): # 继承自DynamicOrchestrator以复用其动态规划逻辑
    def __init__(self):
        super().__init__() # 调用父类的__init__来初始化planner, executor
        # 添加协作反思的Agent
        self.critique_agent = CritiqueAgent()
        self.improver_agent = ImproverAgent()
        # 如果DynamicOrchestrator中还保留了旧的self.reflector, 可以考虑是否移除或保留作为备用
        if hasattr(self, 'reflector'): # 确保父类中可能存在的 reflector 被处理
             print("CollaborativeOrchestrator 将使用 CritiqueAgent 和 ImproverAgent进行反思。")
             # del self.reflector # 如果确定不再使用旧的单一反思器

    def run(self, main_task: str, max_iterations: int = 3):
        """执行主研究循环，包含动态规划和多Agent协作反思。"""
        print(f"🤖 (协作反思模式) 开始为任务进行研究: \"{main_task}\"\n")
        self.memory["main_task"] = main_task
        self.memory["executed_tasks_results"] = []
        self.memory["critiques"] = [] # 在协作模式下，critiques主要来自CritiqueAgent
        self.memory["overall_summary"] = ""

        print("📝 阶段 1: 初始规划...")
        # tasks_for_current_iteration 会在循环中被动态修改
        tasks_for_current_iteration = self.planner.generate_initial_plan(main_task)
        self.memory["current_plan"] = list(tasks_for_current_iteration)
        if not tasks_for_current_iteration:
            print("🛑 规划器未能生成初始计划。任务中止。")
            return
        print(f"初始计划: {tasks_for_current_iteration}\n")

        for i in range(max_iterations):
            print(f"🔄 迭代 {i + 1} / {max_iterations}\n")
            
            iteration_execution_results = [] # 本轮迭代的执行结果
            # ----- 执行阶段 (复用DynamicOrchestrator的逻辑) -----
            task_idx = 0
            current_plan_snapshot_for_iteration = list(tasks_for_current_iteration) # 当前迭代要执行的计划快照

            while task_idx < len(current_plan_snapshot_for_iteration):
                sub_task = current_plan_snapshot_for_iteration[task_idx]
                print(f"🛠️ 正在执行任务 ({task_idx + 1}/{len(current_plan_snapshot_for_iteration)}): \"{sub_task}\"")
                
                context_for_execution = [res['result'] for res in self.memory['executed_tasks_results']][-3:]
                execution_output = self.executor.execute_task(sub_task, context=context_for_execution)
                
                task_result_pair = {"task": sub_task, "result": execution_output["result"]}
                self.memory["executed_tasks_results"].append(task_result_pair)
                iteration_execution_results.append(task_result_pair)
                print(f"结果预览: \"{execution_output['result'][:150]}...\"\n")

                if execution_output["is_critical"] and execution_output["critical_info"]:
                    print(f"⚠️ 检测到关键信息，触发动态重规划流程...")
                    critical_info_text = execution_output["critical_info"]
                    new_dynamic_plan = self.planner.adapt_plan(
                        self.memory["main_task"],
                        current_plan_snapshot_for_iteration,
                        self.memory["executed_tasks_results"],
                        critical_info_text
                    )
                    print(f"由关键信息触发，动态调整后的新计划: {new_dynamic_plan}\n")
                    current_plan_snapshot_for_iteration = new_dynamic_plan
                    self.memory["current_plan"] = list(new_dynamic_plan)
                    task_idx = 0 
                    iteration_execution_results = [] 
                    if not current_plan_snapshot_for_iteration:
                        break 
                    continue
                task_idx += 1
            
            if not current_plan_snapshot_for_iteration and i < max_iterations -1:
                 print("⚠️ 当前迭代计划在动态调整后已空。为简化，我们将继续到迭代末尾的反思阶段。")
            # ----- 执行阶段结束 -----

            print("📄 阶段 3: 初步信息综合...")
            all_results_text = "\n\n".join([res["result"] for res in self.memory["executed_tasks_results"]])
            summary_prompt

...(内容已截断)
