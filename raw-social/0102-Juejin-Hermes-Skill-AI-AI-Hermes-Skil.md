# 手搓 Hermes 自我进化 Skill：从"会用 AI"到"AI 自己进化自己"手搓 Hermes 自我进化 Skil - 掘金

- URL: https://juejin.cn/post/7631122827959894066
- Platform: Juejin
- Extraction status: ok
- content_timestamp: Skill, lessons: list[ExtractedLesson]
    ) -> float:
        """快速评估候选变体"""
        # 这里简化为让 LLM 打分
        # 生产系统会跑真实 eval dataset
        prompt = f"""Rate this skill on a 0-1 scale
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

## 手搓 Hermes 自我进化 Skill：从"会用 AI"到"AI 自己进化自己"手搓 Hermes 自我进化 Skil - 掘金

**Source**: https://juejin.cn/post/7631122827959894066

---

#              手搓 Hermes 自我进化 Skill：从"会用 AI"到"AI 自己进化自己"             

[神舟路车神](https://juejin.cn/user/2511759678899485/posts)

                     2026-04-21                   
                     177                   

                     阅读23分钟                   

## 手搓 Hermes 自我进化 Skill：从"会用 AI"到"AI 自己进化自己"

![640.png](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/708eb2a0e53d4c7eb36bd48e4d6bb98e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56We6Iif6Lev6L2m56We:q75.awebp?rk3s=f64ab15b&x-expires=1779800348&x-signature=aLTpzpQDWAkSUcwUMSEcfjEhkhU%3D)

> 作者：**来一碗茶泡饭**
>  用代码泡一碗茶，边喝边聊技术
>  欢迎关注微信公众号「来一碗茶泡饭」

---

最近在折腾 Agent 的时候，碰到一个绕不过去的问题：

> Skill 写好了，上线了，能用。但过两周发现——**模型升级了**，Skill 的效果变差了；用户换了问法，Skill 又兜不住了；业务加了个新场景，Skill 压根覆盖不到。

改 prompt？改描述？加约束？每次都是**人肉调参**，改完还得手动测试，测完发版，发版后又发现新的边界 case。

**人肉调参这件事，跟手工测试一样，永远跟不上变化。**

直到 **Nous Research** 的 **Hermes Agent** 开源自进化系统发布，我才意识到这件事可以换个思路：**与其人调 Skill，不如让 Skill 自己调自己。**

不是让模型瞎改自己的 prompt，而是用**真实执行数据驱动进化**——跑任务、收轨迹、打分、提取经验、优化 prompt，跑一个完整闭环。

- **2026年2月25日**，Nous Research 发布了 `hermes-agent-self-evolution` 开源仓库（MIT 协议）。
- 到 **4月8日** 已经迭代到 **v0.8.0**。
- 它的核心能力只有一个：让 Agent 的 Skill 文件**自动进化**——通过**执行 → 评估 → 提取 → 优化 → 检索**，跑通一个闭环。

这篇文章想做的，是把这套系统拆开，然后**手搓一个最小版本**。

先看它做了什么，再写一个能跑的骨架，最后逐层补上真实工程需要的边界。

---

### 先说结论

没时间通读全文的话，抓住这一条就行：

> **Skill 进化的核心是一个闭环：`执行 → 评估 → 提取 → 优化 → 检索`。每一轮都拿真实执行数据说话，不是玄学调参。**

把这个闭环跑起来只需要**几百行代码**，但"能跑"和"能用"之间，差的是**评估数据集质量、约束门控、语义保持和人工审核**。Hermes 的开源实现把这些边界都做了，值得拆。

#### 几条我比较确定的事：

1. **Skill 不是 prompt**，它是带元数据、带测试、带版本经验的**可执行知识单元**。
2. **自我进化不是让模型自己改自己的 prompt**，而是用**真实执行轨迹 + 评估信号**驱动优化。
3. **GEPA（Genetic-Pareto Prompt Evolution）算法**是 **ICLR 2026 Oral** 论文，核心思路是用遗传算法搜索 prompt 变体空间，用 Pareto 前沿平衡质量与约束。
4. 进化过程中最大的工程挑战**不是算法**，而是**评估信号的可信度**和**约束门控的严格性**。
5. **人类审核不是可选项，是必选项**——进化结果以 PR 形式提交，人说了算。

---

### 动手之前先框定范围

别想太多，先把边界画出来。

我不可能也没打算在本文里复刻 Hermes Agent 的完整自进化系统。一个支持 **DSPy + GEPA 优化引擎**、**50+ 内置 Skill**、**多平台 Gateway** 的生产系统，工程量不小。

**这次只做一个最小自进化 Skill 系统。**

它做五件事：

1. 读取一个 Skill 文件（Markdown + YAML frontmatter）；
2. 用这个 Skill 执行真实任务，收集执行轨迹；
3. 根据执行轨迹生成评估信号；
4. 用评估信号驱动 Skill prompt 的优化迭代；
5. 对优化结果跑约束门控，通过后输出候选版本。

先不上 GEPA 遗传算法。先用最朴素的 **"生成变体 → 评估 → 选优"** 流程。

这个选择有点保守，但更接近我自己的实战经验：**新系统第一版先用最简单能跑的方式验证数据通路，再换更强的优化器。**

这也是自进化系统里很容易被忽略的第一层边界：

> **进化的可信度不取决于优化算法多花哨，而取决于评估信号多可靠。**

---

### 从 Skill 文件开始：不只是 prompt

在 Hermes 的体系里，**Skill 不是一个文本文件**。

它是一个**带结构化元数据的可执行知识单元**。

先看一个真实的 Skill 文件长什么样：

```
---
name: github-code-review
description: "Review pull requests with focus on security, performance, and maintainability."
version: "2.3.1"
author: hermes
metadata:
  openclaw:
    requires:
      bins: ["gh", "git"]
      env: ["GITHUB_TOKEN"]
    targets:
      - pull_request
    eval:
      dataset: "skills/github-code-review/eval.jsonl"
      metric: "accuracy_and_completeness"
---
```

```
# GitHub Code Review Skill

## Overview
Review pull requests with structured feedback.

## Steps
1. Fetch the PR diff using `gh pr diff`
2. Analyze changes for security issues, performance regressions, and readability
3. Generate structured review comments grouped by severity
4. Post review comments via `gh api`

## Output Format
- **Critical**: Security vulnerabilities or data loss risks
- **Warning**: Performance regressions or anti-patterns
- **Suggestion**: Readability and maintainability improvements

## Constraints
- Never approve a PR that introduces SQL injection or path traversal
- Always verify test coverage for new functions
- Respect .gitignore patterns when analyzing file changes
```

- **YAML frontmatter** 里存的是**元数据**：名字、版本、依赖、评估配置。
- **Markdown 正文**里存的是**执行逻辑**：步骤、格式、约束。

这种设计有几个很实际的好处：

- **可搜索**：元数据里的 `name` 和 `description` 让系统不需要加载整个文件就能判断相关性。
- **可测试**：`eval` 字段直接指向评估数据集，优化时自动拿来跑。
- **可版本化**：`version` 字段配合 git，每次进化都有据可查。
- **人可读**：Markdown 正文让开发者能直接阅读和编辑。

#### 手搓版 Skill 结构定义

手搓版先定义一个最小 Skill 结构：

```
from dataclasses import dataclass, field
from typing import Optional
import yaml

@dataclass
class Skill:
    name: str
    description: str
    version: str = "0.1.0"
    content: str = ""  # Markdown 正文
    eval_dataset: Optional[str] = None
    metadata: dict = field(default_factory=dict)

    @classmethod
    def from_file(cls, path: str) -> "Skill":
        with open(path, "r") as f:
            raw = f.read()

        # 解析 YAML frontmatter
        if raw.startswith("---"):
            parts = raw.split("---", 2)
            frontmatter = yaml.safe_load(parts[1])
            content = parts[2].strip()
        else:
            frontmatter = {}
            content = raw

        return cls(
            name=frontmatter.get("name", "unnamed"),
            description=frontmatter.get("description", ""),
            version=frontmatter.get("version", "0.1.0"),
            content=content,
            eval_dataset=frontmatter.get("metadata", {})
                              .get("openclaw", {})
                              .get("eval", {})
                              .get("dataset"),
            metadata=frontmatter,
        )

    def to_file(self, path: str):
        frontmatter = {
            "name": self.name,
            "description": self.description,
            "version": self.version,
            **self.metadata,
        }
        with open(path, "w") as f:
            f.write("---\n")
            f.write(yaml.dump(frontmatter, allow_unicode=True))
            f.write("---\n\n")
            f.write(self.content)
```

这段代码只做一件事：把 Skill 文件的**结构化部分**和**自由文本部分**拆开，让后面的优化器可以分别读取和修改。

结构很朴素，但这是整个系统的**基石**。

> ⚠️ 如果 Skill 的结构定义不清楚，后面的执行、评估、优化全都建立在沙子上。

---

### 学习闭环：五步走，不是玄学

Hermes 的自进化引擎跑的是一个**五阶段闭环**：

```
Execute → Evaluate → Extract → Refine → Retrieve
```

翻译成人话：

1. **Execute（执行）**：用当前 Skill 跑真实任务，收集完整的执行轨迹（输入、工具调用、输出、耗时）。
2. **Evaluate（评估）**：对执行结果打分——完成度、准确度、效率，生成结构化评估信号。
3. **Extract（提取）**：从评估信号中提取经验——哪些步骤做对了，哪些做错了，错在哪里。
4. **Refine（优化）**：用提取的经验驱动 Skill 内容的改进——改步骤描述、加约束、调输出格式。
5. **Retrieve（检索）**：把优化后的候选版本存入版本库，下次执行时检索最佳版本。

这个闭环不神秘。它的本质就是**软件工程里的 CI/CD 循环**，只不过 CI/CD 验证的是代码，自进化验证的是 **prompt 和 skill**。

![640 (1).png](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/6e3c2f97ea6d45a5928e521974577d0c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56We6Iif6Lev6L2m56We:q75.awebp?rk3s=f64ab15b&x-expires=1779800348&x-signature=EIPrQWMBRvFg32ZI4FGcQ%2FGrI%2BA%3D)

#### 手搓版骨架

手搓版先把五阶段的骨架写出来：

```
import json
from pathlib import Path

class SelfEvolutionEngine:
    def __init__(self, skill: Skill, model_client):
        self.skill = skill
        self.model = model_client
        self.traces = []       # 执行轨迹
        self.evaluations = []   # 评估信号
        self.extractions = []   # 提取的经验
        self.candidates = []    # 候选版本

    async def run_cycle(self, tasks: list[str], iterations: int = 3):
        """跑一轮完整的进化循环"""
        for i in range(iterations):
            print(f"\n=== Evolution Iteration {i + 1}/{iterations} ===")

            # Phase 1: Execute
            traces = await self.execute(tasks)
            self.traces.extend(traces)

            # Phase 2: Evaluate
            evals = await self.evaluate(traces)
            self.evaluations.extend(evals)

            # Phase 3: Extract
            lessons = await self.extract(evals)
            self.extractions.extend(lessons)

            # Phase 4: Refine
            candidate = await self.refine(lessons)
            self.candidates.append(candidate)

            # Phase 5: Retrieve — 约束门控 + 选优
            passed = self.constraint_gate(candidate)
            if passed:
                self.skill = candidate
                print(f"  ✅ Candidate v{candidate.version} passed gates")
            else:
                print(f"  ❌ Candidate v{candidate.version} blocked by gates")

        return self.skill
```

这段代码把五个阶段串成一个循环。每个阶段的输入是上一个阶段的输出，**每一轮迭代都基于真实数据**。

接下来逐个展开每个阶段。

---

### Phase 1：Execute —— 收集真实执行轨迹

执行阶段的核心任务不是"跑得快"，而是**"记录得全"**。

一个完整的执行轨迹应该包含：

```
@dataclass
class ExecutionTrace:
    task: str                    # 输入任务
    skill_version: str           # 当前 skill 版本
    steps: list[dict]            # 每一步的动作（工具调用 + 参数 + 结果）
    final_output: str            # 最终输出
    tool_calls_count: int        # 工具调用总次数
    total_tokens: int            # token 消耗
    duration_seconds: float      # 执行耗时
    error: Optional[str] = None  # 如果失败，记录错误

async def execute(self, tasks: list[str]) -> list[ExecutionTrace]:
    """用当前 Skill 执行任务，收集轨迹"""
    traces = []
    for task in tasks:
        trace = await self._run_skill(task)
        traces.append(trace)
    return traces

async def _run_skill(self, task: str) -> ExecutionTrace:
    """实际执行 Skill，记录每一步"""
    import time
    start = time.time()
    steps = []
    tokens = 0

    # 把 Skill 内容作为 system prompt
    messages = [
        {"role": "system", "content": self.skill.content},
        {"role": "user", "content": task},
    ]

    for step_num in range(10):  # 最多10步
        response = await self.model.create(messages=messages)
        tokens += response.get("usage", {}).get("total_tokens", 0)

        step_info = {
            "step": step_num,
            "assistant_response": response["content"],
            "tool_call": None,
            "tool_result": None,
        }

        if not response.get("tool_call"):
            # 没有工具调用，任务完成
            duration = time.time() - start
            return ExecutionTrace(
                task=task,
                skill_version=self.skill.version,
                steps=steps,
                final_output=response["content"],
                tool_calls_count=len([s for s in steps if s["tool_call"]]),
                total_tokens=tokens,
                duration_seconds=round(duration, 2),
            )

        # 执行工具调用
        tool_call = response["tool_call"]
        step_info["tool_call"] = tool_call
        tool_result = await self._execute_tool(tool_call)
        step_info["tool_result"] = tool_result

        steps.append(step_info)
        messages.append({"role": "assistant", "content": response["content"]})
        messages.append({"role": "tool", "content": tool_result})

    # 超出步数限制
    duration = time.time() - start
    return ExecutionTrace(
        task=task,
        skill_version=self.skill.version,
        steps=steps,
        final_output="STOPPED: step limit reached",
        tool_calls_count=len(steps),
        total_tokens=tokens,
        duration_seconds=round(duration, 2),
        error="step_limit_exceeded",
    )
```

#### 设计选择说明

- 

**为什么记录每一步？**
 因为评估阶段需要知道**"哪一步做错了"**。如果只记录最终输出，优化器只能猜"结果不好是因为什么"。有了逐步轨迹，它就能精确定位到"第三步的参数格式不对"或"第五步选错了工具"。

- 

**为什么限制10步？**
 和手搓 Agent 一样的思路——无限制的执行只会烧钱和污染数据。Hermes 的真实实现也有严格的步数和 token 预算。

- 

**为什么用 `dataclass` 而不是 `dict`？**
**类型安全**。自进化系统的数据通路很长，每一步的输入输出如果都是 dict，到了后面几层你会完全搞不清"这个字段到底是谁加的、什么时候可能为空"。用结构化类型，IDE 能帮你提前拦住一大批运行时错误。

---

### Phase 2：Evaluate —— 把"好不好"变成数字

评估是整个闭环里**最关键也最容易被低估**的阶段。

很多人会觉得"让模型自己给自己的输出打分不就行了"。**不行。** 模型自我评估的偏差已经有大量研究证实。

Hermes 的做法更工程化：**用评估数据集 + 多维度打分**。

```
@dataclass
class EvaluationSignal:
    trace_id: str
    task: str
    scores: dict[str, float]  # 多维度分数
    overall: float            # 综合得分
    issues: list[str]         # 发现的问题
    passed: bool              # 是否通过

async def evaluate(self, traces: list[ExecutionTrace]) -> list[EvaluationSignal]:
    """对执行轨迹进行评估"""
    signals = []

    for trace in traces:
        # 加载评估数据集（如果有的话）
        expected = self._load_expected_output(trace.task)

        # 多维度评估
        scores = {}

        # 1. 完成度：任务是否真正完成了
        scores["completion"] = self._eval_completion(trace, expected)

        # 2. 准确度：输出内容是否正确
        scores["accuracy"] = await self._eval_accuracy(trace, expected)

        # 3. 效率：用了多少步/token
        scores["efficiency"] = self._eval_efficiency(trace)

        # 4. 格式合规：输出格式是否符合 Skill 定义
        scores["format_compliance"] = self._eval_format(trace)

        # 综合得分（加权平均）
        weights = {
            "completion": 0.35,
            "accuracy": 0.35,
            "efficiency": 0.15,
            "format_compliance": 0.15,
        }
        overall = sum(scores[k] * weights[k] for k in scores)

        # 发现的问题
        issues = self._identify_issues(trace, scores)

        signals.append(EvaluationSignal(
            trace_id=f"{trace.task[:20]}_{trace.skill_version}",
            task=trace.task,
            scores=scores,
            overall=overall,
            issues=issues,
            passed=overall >= 0.7 and scores["completion"] >= 0.8,
        ))

    return signals

def _eval_completion(self, trace: ExecutionTrace, expected) -> float:
    """评估任务完成度"""
    if trace.error:
        return 0.0
    if "STOPPED" in trace.final_output:
        return 0.3
    if not trace.final_output or len(trace.final_output) < 10:
        return 0.2
    return 1.0

def _eval_efficiency(self, trace: ExecutionTrace) -> float:
    """评估执行效率"""
    # 步数越少越好，但至少要有1步
    if trace.tool_calls_count == 0:
        return 0.5  # 没调用工具可能说明没干活
    if trace.tool_calls_count <= 3:
        return 1.0
    if trace.tool_calls_count <= 6:
        return 0.7
    return 0.4  # 步数太多，效率低
```

#### 几个工程判断

- 

**为什么是 0.7 的通过线？**
 这个数字没有理论依据，是 Hermes 团队在大量实验后选的经验值。太高会拦住很多有价值的改进，太低会让劣质变体混进来。实际部署时应该根据你的业务场景调。

- 

**为什么多维度打分？**
 单一维度的分数很容易被"hack"。比如只看准确度，模型可能输出非常简短但正确的回答来刷分。**多维度加权能减少这种 degenerate solution**。

- 

**评估数据集从哪来？**
 Hermes 支持三种来源：

  1. **人工标注**（质量最高，成本最高）；
  2. **合成生成**（用另一个模型生成测试用例和期望输出）；
  3. **历史日志**（从过去成功的执行中挖掘）。

*手搓版可以先不搞这么复杂，用少量人工标注的测试用例起步。*

---

### Phase 3：Extract —— 从信号中提取经验

评估给了分数，但分数本身不告诉模型**"怎么改"**。

Extract 阶段做的，是**把评估信号翻译成可操作的改进方向**。

```
@dataclass
class ExtractedLesson:
    category: str       # improvement / regression / neutral
    dimension: str      # completion / accuracy / efficiency / format
    observation: str    # 观察到什么
    suggestion: str     # 建议怎么改
    confidence: float   # 置信度

async def extract(self, evals: list[EvaluationSignal]) -> list[ExtractedLesson]:
    """从评估信号中提取改进经验"""
    lessons = []

    for ev in evals:
        # 找到得分最低的维度
        worst_dim = min(ev.scores, key=ev.scores.get)

        # 用 LLM 分析失败原因并生成改进建议
        analysis_prompt = f"""Analyze this execution result and suggest improvements.

Task: {ev.task}
Scores: {json.dumps(ev.scores, indent=2)}
Issues found: {json.dumps(ev.issues, indent=2)}
Weakest dimension: {worst_dim} (score: {ev.scores[worst_dim]})

Output a JSON object with:
- category: "improvement" or "regression"
- dimension: which score dimension
- observation: what went wrong
- suggestion: specific change to the skill prompt
- confidence: 0.0-1.0

Only output the JSON, nothing else."""

        response = await self.model.create(
            messages=[{"role": "user", "content": analysis_prompt}],
            temperature=0.3,
        )

        try:
            lesson_data = json.loads(response["content"])
            lessons.append(ExtractedLesson(
                category=lesson_data["category"],
                dimension=lesson_data["dimension"],
                observation=lesson_data["observation"],
                suggestion=lesson_data["suggestion"],
                confidence=lesson_data["confidence"],
            ))
        except (json.JSONDecodeError, KeyError):
            # LLM 输出格式不对，跳过
            continue

    return lessons
```

这个阶段有一个很容易踩的坑：**LLM 生成的改进建议可能看起来合理，但实际改了以后效果更差。**

所以 Extract 输出的不是**"改什么"**，而是**"建议改什么"**。最终改不改、改成什么样，要经过下一阶段的 **Refine 和约束门控**。

> 💡 Hermes 的真实实现在这里做了一件很聪明的事：它不只看当前这一轮的经验，还会**对比历史多轮的提取结果**，找出反复出现的模式。如果一个建议连续三轮都被提取出来，它的优先级就更高。

---

### Phase 4：Refine —— 把经验写回 Skill

有了改进建议，下一步就是把它写回 Skill 文件。

这里有两种策略：

- **朴素策略**：直接让 LLM 根据 suggestion 改写 Skill 内容。
- **GEPA 策略**：用遗传算法在 prompt 变体空间里搜索，找 Pareto 最优。

#### 朴素策略实现

手搓版先用朴素策略：

```
async def refine(self, lessons: list[ExtractedLesson]) -> Skill:
    """根据提取的经验优化 Skill"""
    # 按置信度排序，取 top 建议
    top_lessons = sorted(lessons, key=lambda l: l.confidence, reverse=True)[:5]

    improvement_text = "\n".join([
        f"- [{l.dimension}] {l.observation} → Suggestion: {l.suggestion}"
        for l in top_lessons
    ])

    refine_prompt = f"""You are a skill optimizer. Improve the following skill based on execution feedback.

## Current Skill Content
{self.skill.content}

## Execution Feedback
{improvement_text}

## Rules
1. Keep the overall structure and format
2. Only modify sections related to the feedback
3. Add new constraints if safety issues were found
4. Do NOT remove existing constraints
5. Keep the total content under 15KB

Output the improved skill content as Markdown. Do not include YAML frontmatter."""

    response = await self.model.create(
        messages=[{"role": "user", "content": refine_prompt}],
        temperature=0.5,
    )

    # 创建候选版本
    version_parts = self.skill.version.split(".")
    new_minor = str(int(version_parts[-1]) + 1)
    new_version = ".".join(version_parts[:-1] + [new_minor])

    return Skill(
        name=self.skill.name,
        description=self.skill.description,
        version=new_version,
        content=response["content"],
        eval_dataset=self.skill.eval_dataset,
        metadata=self.skill.metadata,
    )
```

朴素策略跑起来没问题，但它有一个**本质局限**：每次只生成一个候选版本。

#### 最小 GEPA 实现

GEPA 做的事本质上很简单——**一次生成多个候选版本，交叉组合它们的优点，淘汰表现差的**。就像生物进化：变异、选择、遗传。

下面是一个最小 GEPA 实现的核心逻辑：

```
import random

class GepaOptimizer:
    """最小 GEPA (Genetic-Pareto Prompt Evolution) 优化器"""

    def __init__(self, skill: Skill, model_client, population_size: int = 5):
        self.base_skill = skill
        self.model = model_client
        self.pop_size = population_size

    async def evolve(self, lessons: list[ExtractedLesson], generations: int = 3) -> list[Skill]:
        """跑遗传进化，返回 Pareto 前沿的候选版本"""
        # 初始化种群：从 base skill 生成多个变体
        population = await self._init_population()

        for gen in range(generations):
            print(f"  GEPA Generation {gen + 1}/{generations}")

            # 评估每个变体
            scored = []
            for candidate in population:
                fitness = await self._evaluate_candidate(candidate, lessons)
                scored.append((candidate, fitness))

            # Pareto 排序：多目标优化
            pareto_front = self._pareto_sort(scored)

            # 选择 + 交叉 + 变异
            survivors = [c for c, _ in pareto_front[:self.pop_size // 2]]
            offspring = await self._crossover_and_mutate(survivors, lessons)

            population = survivors + offspring

        # 返回最终 Pareto 前沿
        final_scored = []
        for candidate in population:
            fitness = await self._evaluate_candidate(candidate, lessons)
            final_scored.append((candidate, fitness))
        return [c for c, _ in self._pareto_sort(final_scored)]

    async def _init_population(self) -> list[Skill]:
        """生成初始种群——每个变体在 base 基础上做小幅修改"""
        variants = [self.base_skill]  # 保留原始版本
        for i in range(self.pop_size - 1):
            variant = await self._mutate(self.base_skill, mutation_rate=0.3)
            variants.append(variant)
        return variants

    async def _mutate(self, skill: Skill, mutation_rate: float = 0.2) -> Skill:
        """变异：让 LLM 对 Skill 做小幅随机修改"""
        mutation_types = [
            "reorder the steps",
            "add one new constraint",
            "rephrase the most important instruction",
            "split a long step into two shorter steps",
        ]
        chosen = random.choice(mutation_types)

        prompt = f"""Make a small mutation to this skill: {chosen}

Current skill:
{skill.content}

Output the mutated skill as Markdown. Keep it under 15KB."""

        response = await self.model.create(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.7,
        )

        return Skill(
            name=skill.name,
            description=skill.description,
            version=f"{skill.version}-m{random.randint(100,999)}",
            content=response["content"],
            eval_dataset=skill.eval_dataset,
            metadata=skill.metadata,
        )

    async def _crossover_and_mutate(
        self, survivors: list[Skill], lessons: list[ExtractedLesson]
    ) -> list[Skill]:
        """交叉 + 变异：组合优秀个体的特征"""
        offspring = []
        for _ in range(self.pop_size - len(survivors)):
            # 随机选两个父代
            p1, p2 = random.sample(survivors, min(2, len(survivors)))

            crossover_prompt = f"""Combine the best aspects of these two skill variants.

Variant A:
{p1.content}

Variant B:
{p2.content}

Create a new variant that:
1. Takes the stronger structure
2. Merges unique constraints from both
3. Adds improvement: {random.choice(lessons).suggestion if lessons else 'general clarity'}

Output the combined skill as Markdown."""

            response = await self.model.create(
                messages=[{"role": "user", "content": crossover_prompt}],
                temperature=0.6,
            )

            offspring.append(Skill(
                name=p1.name,
                description=p1.description,
                version=f"{p1.version}-c{random.randint(100,999)}",
                content=response["content"],
                eval_dataset=p1.eval_dataset,
                metadata=p1.metadata,
            ))

        return offspring

    def _pareto_sort(self, scored: list[tuple]) -> list[tuple]:
        """Pareto 排序：质量 vs 约束 的多目标"""
        # 简化版：按综合得分排序
        # 真实 GEPA 用 NSGA-II 算法做 Pareto 前沿分解
        return sorted(scored, key=lambda x: x[1], reverse=True)

    async def _evaluate_candidate(
        self, candidate: Skill, lessons: list[ExtractedLesson]
    ) -> float:
        """快速评估候选变体"""
        # 这里简化为让 LLM 打分
        # 生产系统会跑真实 eval dataset
        prompt = f"""Rate this skill on a 0-1 scale.

Skill: {candidate.name}
Content preview: {candidate.content[:500]}

Known issues to avoid:
{chr(10).join([f'- {l.observation}' for l in lessons[:3]])}

Output only a number between 0 and 1."""

        response = await self.model.create(
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
        )
        try:
            return float(response["content"].strip())
        except ValueError:
            return 0.5
```

#### GEPA 核心思路

1. 从 base skill 生成一组变体（**变异**）；
2. 评估每个变体（**打分**）；
3. 选择表现好的（**Pareto 排序**）；
4. 组合优秀变体的特征（**交叉**）；
5. 循环多代，最终返回 **Pareto 前沿**。

和朴素策略的区别在于：**GEPA 不是只改一个方向，而是同时探索多个方向，让数据说话，哪个方向好就往哪个方向走。**

这也是遗传算法在 prompt 优化里特别有用的原因——prompt 空间太大，穷举不可能，梯度没有，但评估一个候选很便宜（就是一次 LLM 调用）。

---

### Phase 5：Retrieve —— 约束门控 + 版本管理

最后一个阶段，也是最容易被跳过的阶段。

候选版本出来了，**不能直接上线**。要过约束门控。

```
class ConstraintGate:
    """约束门控：决定候选版本能不能上线"""

    def __init__(self, max_skill_size_kb: float = 15.0, max_tool_desc_chars: int = 500):
        self.max_skill_size_kb = max_skill_size_kb
        self.max_tool_desc_chars = max_tool_desc_chars

    def check(self, candidate: Skill, test_results: dict = None) -> tuple[bool, list[str]]:
        """运行所有约束检查，返回 (通过, 失败原因列表)"""
        failures = []

        # 1. 大小限制
        size_kb = len(candidate.content.encode("utf-8")) / 1024
        if size_kb > self.max_skill_size_kb:
            failures.append(
                f"Size limit: {size_kb:.1f}KB > {self.max_skill_size_kb}KB"
            )

        # 2. 结构完整性：必须有 name、description、content
        if not candidate.name or not candidate.description or not candidate.content:
            failures.append("Missing required fields: name/description/content")

        # 3. 语义保持：关键约束不能被删除
        preserved = self._check_semantic_preservation(candidate)
        if not preserved:
            failures.append("Semantic preservation failed: critical constraints removed")

        # 4. 测试通过率（如果有测试数据）
        if test_results:
            pass_rate = test_results.get("pass_rate", 0)
            if pass_rate < 1.0:
                failures.append(
                    f"Test pass rate {pass_rate:.0%} < 100%"
                )

        # 5. 工具描述长度
        if candidate.metadata:
            tool_descs = (
                candidate.metadata
                .get("metadata", {})
                .get("openclaw", {})
                .get("requires", {})
                .get("bins", [])
            )
            for desc in tool_descs:
                if len(desc) > self.max_tool_desc_chars:
                    failures.append(
                        f"Tool description too long: {desc[:50]}..."
                    )

        return len(failures) == 0, failures

    def _check_semantic_preservation(self, candidate: Skill) -> bool:
        """检查关键语义约束是否被保留"""
        # 简化实现：检查是否包含必要的关键词
        # 生产系统会用 embedding 相似度做更精确的检查
        critical_keywords = ["constraint", "step", "output"]
        content_lower = candidate.content.lower()
        return all(kw in content_lower for kw in critical_keywords)
```

#### Hermes 的真实约束门控

Hermes 的真实约束门控更严格，包括：

| 约束 | 说明 |
|---|---|
| 测试全通过 | 100% pass rate，不能降 |
| 大小限制 | Skill 文件 ≤ 15KB |
| 工具描述限制 | 每个 ≤ 500 字符 |
| 缓存兼容 | 改动不能破坏已有缓存 |
| 语义保持 | 关键约束不能被删除 |

这些约束不是装饰。它们是**防止进化过程失控的最后一道防线**。

> ⚠️ 没有约束门控的自进化，就像没有刹车的自动驾驶——跑得越快，出事越惨。

---

### 把所有拼起来：一个完整的最小自进化系统

```
# main.py — 完整的最小自进化系统

import asyncio
from pathlib import Path

async def main():
    # 1. 加载 Skill
    skill = Skill.from_file("skills/my-skill/SKILL.md")
    print(f"Loaded skill: {skill.name} v{skill.version}")

    # 2. 准备评估任务
    eval_tasks = [
        "Review the PR at https://github.com/org/repo/pull/42",
        "Review the PR at https://github.com/org/repo/pull/43",
        "Review the PR at https://github.com/org/repo/pull/44",
    ]

    # 3. 初始化模型客户端（伪代码）
    model = ModelClient(api_key="your-key", model="claude-sonnet-4-6-20250514")

    # 4. 选择优化策略
    use_gepa = True  # 切换 GEPA / 朴素策略

    if use_gepa:
        optimizer = GepaOptimizer(skill, model, population_size=5)
        # 先跑一轮收集执行轨迹和经验
        engine = SelfEvolutionEngine(skill, model)
        traces = await engine.execute(eval_tasks)
        evals = await engine.evaluate(traces)
        lessons = await engine.extract(evals)

        # 再跑 GEPA 进化
        candidates = await optimizer.evolve(lessons, generations=3)
        best = candidates[0]  # Pareto 前沿第一个
    else:
        engine = SelfEvolutionEngine(skill, model)
        best = await engine.run_cycle(eval_tasks, iterations=3)

    # 5. 约束门控
    gate = ConstraintGate()
    passed, failures = gate.check(best)

    if not passed:
        print(f"Evolution blocked: {failures}")
        return

    # 6. 输出候选版本
    output_path = f"skills/my-skill/SKILL.v{best.version}.md"
    best.to_file(output_path)
    print(f"Evolved skill saved to {output_path}")
    print(f"  Version: {skill.version} → {best.version}")

    # 7. （生产环境）生成 PR，等待人工审核
    # generate_pr(base="main", head=f"evolve/{skill.name}-v{best.version}")

if __name__ == "__main__":
    asyncio.run(main())
```

#### 这个完整版做了什么？

1. ✅ 加载现有 Skill；
2. ✅ 准备评估任务（真实场景用 eval dataset）；
3. ✅ 选择优化策略（朴素 or GEPA）；
4. ✅ 跑进化循环：执行 → 评估 → 提取 → 优化；
5. ✅ 约束门控检查；
6. ✅ 输出候选版本文件；
7. ✅ 生成 PR，等人审。

整个流程不依赖 GPU，全靠 API 调用。Hermes 的文档里也明确说了：**一次完整进化成本大约 $2-10**，取决于 Skill 复杂度和迭代轮数。

---

### 回头看 Hermes：它把这个骨架做厚了

到这里，回头看 Hermes Agent 的开源实现就会顺很多。

#### 手搓版 vs. Hermes 完整版

| 组件 | 手搓版 | Hermes 完整版 |
|---|---|---|
| 执行层 | 3 个工具 | 47 个工具、19 个工具集 |
| 评估层 | 少量标注用例 | 结构化 eval dataset + 多指标打分 |
| 经验提取 | 单轮分析 | 跨轮次模式挖掘 |
| 优化引擎 | 朴素改写 / 简化 GEPA | DSPy + GEPA 或 Darwinian Evolver |
| 约束门控 | 基础检查 | 测试、大小、缓存、语义 |
| 发布流程 | 输出文件 | 生成 PR，强制人工审核 |
| 存储 | 内存 | SQLite + FTS5 全文检索 |
| 平台接入 | 无 | 18 个平台适配器 |

它没有把自进化变成玄学。

它做的是把我们手搓的朴素循环放进**真实工程环境**里，然后一层层补上边界。

*（图 5：从手搓版到 Hermes 完整版的进化）*

#### 几个值得单独拎出来说的差异

- 

**DSPy 集成**
 Hermes 不只���让 LLM 直接改 prompt，而是用 **DSPy 的 Signature + Module** 体系做结构化 prompt 编程。这让优化过程更可控——不是在自然语言的汪洋大海里搜，而是在一个有结构的搜索空间里搜。

- 

**双引擎**
 除了 **DSPy + GEPA**，Hermes 还提供 **Darwinian Evolver** 作为备选优化引擎。后者更接近传统遗传算法，适合评估信号比较弱的场景。这种"主引擎 + 备选引擎"的设计在工程上很常见，也给不同场景留了选择空间。

- 

**47 个工具、19 个工具集**
 手搓版只用了 3 个工具。Hermes 的工具注册表有 47 个工具，涵盖文件操作、代码执行、Web 搜索、GitHub API 等。这意味着它的 Skill 可以执行更复杂的任务，也意味着评估信号更丰富。

- 

**SQLite + FTS5 会话存储**
 手搓版把轨迹放在内存里。Hermes 用 SQLite 做持久存储，FTS5 做全文检索。这让历史轨迹可以被跨会话查询和分析——对发现长期优化模式非常重要。

- 

**18 个平台适配器**
 Gateway 层支持 Telegram、Discord、Slack、微信、飞书等 18 个平台的接入。这意味着同一个 Skill 可以在不同平台上进化，收集不同场景的执行数据。

---

### 写在最后

手搓一个自进化 Skill 系统，很容易让人兴奋。

让 Agent 自己变强，这个概念本身就很有吸引力。跑起来那一刻，看到 Skill 的版本号从 `0.1.0` 变成 `0.4.0`，评估分数从 `0.65` 涨到 `0.82`，那种**"它真的在进化"**的感觉很强烈。

但我自己写下来最大的收获，其实在后半段。

> **自进化的核心不是优化算法，而是评估信号的可信度。**

GEPA 很好，遗传算法很酷，DSPy 很强。但如果**评估数据集的质量不行**，**评估指标的权重不对**，**约束门控的规则不严格**，再好的算法也只会把错误方向优化到极致。

这也是 Hermes 值得学习的地方：它在优化器上花了很多心思，但在**评估和门控**上花的精力一点不少。每一轮进化的结果不是直接覆盖，而是**生成 PR 等人审**。

**人类审核不是流程上的形式主义。它是自进化系统的安全阀。**

#### 另一个体会：自进化不是万能的

它适合的是那些**"执行模式稳定、评估标准清晰、改进方向可量化"**的 Skill。对于需要创意、需要判断力、需要领域知识的任务，自进化的效果会打折扣。

这时候更靠谱的做法可能是：**让自进化系统处理那些重复性的、可评估的 Skill，让人来处理那些需要判断力的部分。**

不是所有东西都要自动化，但该自动化的部分确实应该自动化。

---

所以这篇算是一个起点。

后面可以继续拆：

- DSPy 在自进化中的具体用法
- GEPA 算法的数学细节
- 多 Skill 联合进化的工程挑战

如果你也在做 Skill 进化相关的工作，欢迎留言聊聊你遇到的最大瓶颈——据我观察，大概率是**评估信号的质量问题**。

---

### 📚 参考资料与延伸阅读

1. [Hermes Agent 自进化仓库](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FNousResearch%2Fhermes-agent-self-evolution)
2. [Hermes Agent 架构文档](https://link.juejin.cn?target=https%3A%2F%2Fhermes-agent.nousresearch.com%2Fdocs%2Fdeveloper-guide%2Farchitecture)
3. [Hermes Agent Skills Hub](https://link.juejin.cn?target=https%3A%2F%2Fhermes-agent.nousresearch.com%2Fdocs%2Fskills%2F)
4. **GEPA 论文（ICLR 2026 Oral）**：*Genetic-Pareto Prompt Evolution*
5. [DSPy 框架](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstanfordnlp%2Fdspy)
6. [ReAct 论文](https://link.juejin.cn?target=https%3A%2F%2Farxiv.org%2Fabs%2F2210.03629)
7. [Nous Research 官方博客](https://link.juejin.cn?target=https%3A%2F%2Fnousresearch.com)
8. [OpenClaw Agent 框架](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fopenclaw%2Fopenclaw)
9. [Claude Code 官方文档](https://link.juejin.cn?target=https%3A%2F%2Fdocs.anthropic.com%2Fen%2Fdocs%2Fclaude-code)

---

*作者：来一碗茶泡饭*

*欢迎关注微信公众号「来一碗茶泡饭」，每周分享 AI 工程实战、Agent 架构拆解和技术深度文章。*

*如果觉得这篇文章对你有帮助，欢迎转发分享，你的支持是我持续写作的动力。*

**·END·**

[神舟路车神
       
        AI高级工程师 @CVTE](https://juejin.cn/user/2511759678899485/posts)
[4
       文章](https://juejin.cn/user/2511759678899485/posts)[279
       阅读](https://juejin.cn/user/2511759678899485/posts)[1
       粉丝](https://juejin.cn/user/2511759678899485/followers)
