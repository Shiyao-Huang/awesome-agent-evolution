# AI Agent 如何自我进化？Hermes Agent Self-Evolution 深度解析- iTech

- URL: https://www.cnblogs.com/itech/p/19867914
- Platform: cnblogs.com
- Extraction status: ok
- content_timestamp: 2026-04
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2026-04

## Raw Content

## AI Agent 如何自我进化？Hermes Agent Self-Evolution 深度解析 - iTech - 博客园

**Source**: https://www.cnblogs.com/itech/p/19867914

---

[https://www.cnblogs.com/itech/](https://www.cnblogs.com/itech/)

# [iTech's Blog](https://www.cnblogs.com/itech)

## AI人工智能时代   [www.theaiera.cn](https://www.theaiera.cn)

- [博客园](https://www.cnblogs.com/)
- [首页](https://www.cnblogs.com/itech/)
- [新随笔](https://i.cnblogs.com/EditPosts.aspx?opt=1)
- [联系](https://msg.cnblogs.com/send/iTech)
- [订阅](javascript:void(0))
- [管理](https://i.cnblogs.com/)

# [AI Agent 如何自我进化？Hermes Agent Self-Evolution 深度解析](https://www.cnblogs.com/itech/p/19867914)

# AI Agent 如何自我进化？Hermes Agent Self-Evolution 深度解析

如果 AI Agent 能够自己改进自己，会是什么样子？

这不是科幻小说，而是 Nous Research 正在实现的技术。他们刚刚开源了 **Hermes Agent Self-Evolution** 项目 —— 一个让 AI Agent 通过进化算法自动优化自身技能、工具描述、系统提示和代码的系统。

**关键点**：不需要 GPU 训练，成本仅 $2-10 每次优化，通过 API 调用实现，所有改进都需要人工审查。

今天深入拆解这个项目，看看 AI 自我进化的未来。

---

## 一、核心概念：什么是 Hermes Agent Self-Evolution？

**定义**：一个独立的优化管道，通过自动化优化循环系统性地改进 Hermes Agent 的性能。

**工作原理**：读取 Agent 的技能文件、工具描述、系统提示和代码 → 生成评估数据集 → 使用进化算法生成变体 → 评估性能 → 选择最佳版本 → 创建 PR 供人工审查。

**三大引擎**：

| 引擎 | 优化目标 | 许可证 | 集成方式 |
|---|---|---|---|
| DSPy + GEPA | 技能、提示、指令、工具描述 | MIT | 原生 Python，主引擎 |
| Darwinian Evolver | 代码文件、算法、工具实现 | AGPL v3 | 外部 CLI |
| DSPy MIPROv2 | Few-shot 示例、指令文本 | MIT | 原生 Python，备用优化器 |

**核心亮点**：

⚡ **无需 GPU 训练**：所有操作通过 API 调用完成，DSPy+GEPA 和 MIPROv2 优化的是提示、指令和示例的文本，不是模型权重。

**理解"为什么"失败**：GEPA 读取执行追踪来理解为什么失败（不仅仅是失败的事实），然后提出有针对性的改进。

**低成本**：每次优化运行成本约 $2-10，不是昂贵的 GPU 训练。

**安全可控**：所有变化通过 PR 人工审查，永不直接提交到主分支。

---

## 二、核心技术：DSPy + GEPA

### 2.1 什么是 GEPA？

**GEPA (Genetic-Pareto Prompt Evolution)** 是集成到 DSPy 中的进化式提示优化算法，具有以下特点：

- ✅ **反射性分析**：读取执行追踪，理解失败原因
- ✅ **少样本高效**：仅需 3 个示例即可工作
- ✅ **超越 RL**：性能优于强化学习和之前的 DSPy 优化器
- ✅ **ICLR 2026 Oral**：已发表于顶级会议

### 2.2 GEPA 如何工作？

```
读取当前 skill/prompt/tool
         ↓
   生成评估数据集
         ↓
   GEPA 优化器 ←── 执行追踪
     │    ▲
     ▼    │
  候选变体 ────→ 评估
     │
  约束门控（测试、大小限制、基准测试）
     ↓
  最佳变体 ────→ PR 到 hermes-agent
```

**关键创新**：GEPA 不只是看到"失败了"，而是通过执行追踪理解**为什么**失败，然后提出有针对性的改进。

例如，如果 Agent 在某个任务上总是错误地选择了工具，GEPA 会分析执行追踪，发现混淆点，然后修改工具描述来减少这种混淆。

### 2.3 DSPy 在其中的作用

DSPy 为 Hermes Agent Self-Evolution 提供了：

- **模块化抽象**：将技能、工具描述、提示包装为 DSPy 模块
- **优化框架**：统一的优化接口
- **评估管道**：批量运行评估任务
- **追踪收集**：捕获执行过程用于反射分析

---

## 三、五阶段进化路线图

Hermes Agent Self-Evolution 的实施分为 5 个阶段，每个阶段都建立在前一阶段的基础上。

### Phase 1: 技能文件优化（SKILL.md）✅ 已实现

**目标**：优化 Agent 技能文件，这些是 Agent 遵循的程序化指令。

**方法**：
 1. 将技能文本包装为 DSPy 模块
 2. 通过 batch_runner 在测试任务上评估
 3. 使用 GEPA 进化优化

**为什么有效**：
 - 技能是纯文本，易于变异
 - 性能可直接测量（Agent 是否正确完成了任务）
 - 改进效果明显且易于验证

**示例**：进化 `github-code-review` 技能，通过测试已知良好代码审查的数据集，产生更好的代码审查。

**进度**：✅ 已实现

---

### Phase 2: 工具描述优化  计划中

**目标**：优化工具架构中的描述字段（Agent 在决定使用哪个工具时看到的内容）。

**方法**：
 - GEPA 进化描述
 - 评估 Agent 是否为给定任务选择了正确的工具

**为什么有效**：
 - 工具选择是一个分类问题，非常适合 DSPy 优化
 - 描述的微小改进可以显著提高选择准确性

**示例**：进化 `search_files` 的描述，使 Agent 更可靠地选择它而不是 `terminal(grep)`。

**约束**：
 - 每个工具描述最多 500 字符（每次 API 调用都发送）
 - 每个参数描述最多 200 字符
 - 必须保持事实准确（不能声称工具做了它做不到的事）
 - Schema 结构（参数名称、类型、必填字段）是**冻结**的 —— 只有文本进化

**进度**： 计划中

---

### Phase 3: 系统提示优化  计划中

**目标**：优化系统提示的部分（人格、策略、格式说明）。

**方法**：
 - 将 `prompt_builder.py` 部分参数化为 DSPy Signatures
 - 使用 GEPA 优化

**为什么有效**：
 - 系统提示质量直接决定 Agent 行为质量
 - 小的提示改进可以产生大的行为变化

**风险**：
 - ⚠️ 必须小心不要破坏提示缓存 —— 只能离线优化，部署为新版本

**示例**：进化"工具使用指南"部分，减少不必要的工具调用。

**进度**： 计划中

---

### Phase 4: 工具代码优化  计划中

**目标**：优化工具实现代码、辅助函数。

**方法**：
 - Darwinian Evolver（外部 CLI）
 - 通过 pytest + batch_runner 测试

**为什么有效**：
 - 某些工具实现有微妙的 bug 或低效
 - 进化搜索可以找到这些问题

**风险**：
 - ⚠️ 代码更改可能破坏东西 —— 需要强大的测试套件作为护栏

**示例**：进化 `file_tools.py` 补丁匹配以处理更多边缘情况。

**进度**： 计划中

---

### Phase 5: 持续改进循环  计划中

**目标**：自动化管道，无人值守运行。

**进度**： 计划中

---

## 四、完整工作流程

### 4.1 高层流程

```
┌─────────────────────────────────────────────┐
│ 1. SELECT TARGET                            │
│ - 选择技能、提示部分或工具                   │
│ - 加载当前版本作为基线                       │
│                                              │
│ 2. BUILD EVALUATION DATASET                 │
│ - 从 session_db 挖掘真实使用示例             │
│ - 或使用手工制作的测试用例                   │
│ - 分割：训练 / 验证 / 测试                   │
│                                              │
│ 3. WRAP AS DSPy MODULE                      │
│ - 技能文本 → dspy.Signature                 │
│ - Agent 工作流 → dspy.ReAct                  │
│ - 工具选择 → dspy.Predict                   │
│                                              │
│ 4. RUN OPTIMIZER                            │
│ - 主要：dspy.GEPA（反射性进化）             │
│ - 备用：dspy.MIPROv2（贝叶斯优化）         │
│ - 代码：Darwinian Evolver（外部 CLI）       │
│                                              │
│ 5. EVALUATE & COMPARE                       │
│ - 在保留测试上运行优化版本                   │
│ - 比较：准确性、成本、延迟                   │
│ - 统计显著性检验                             │
│                                              │
│ 6. DEPLOY (with approval)                   │
│ - Git 提交改进版本                           │
│ - A/B 测试（可选）                           │
│ - 通过 git revert 回滚机制                   │
└─────────────────────────────────────────────┘
```

### 4.2 详细架构

```
SessionDB（真实对话）
         │
         ▼
  评估数据集构建器
         │
         ├──► DSPy 模块包装器（将技能/提示/工具包装为可优化模块）
         │   │
         │   ▼
         │   GEPA 优化器 ←── 执行追踪（来自 batch_runner）
         │     │ ▲
         │     │ │
         │     ▼ │
         │     候选变体 ────► batch_runner（并行评估）
         │     │
         │     ├──► 约束验证（测试、字符限制、缓存兼容性）
         │     │
         │     ▼
         │     最佳有效变体
         │     │
         ▼     ▼
  Git 分支 + PR（包含 diff、指标、前后对比）
         │
         ▼
  人工审查与合并
```

---

## 五、评估数据来源

Hermes Agent Self-Evolution 支持四种评估数据来源：

### Source A: 合成生成（主要，引导）

使用强模型（如 Claude Opus）为技能生成测试用例：

1. 读取技能文件 → 理解它的作用
2. 生成 15-30 个真实的 `(task_input, expected_behavior)` 对
3. `expected_behavior` 是一个评分标准，不是确切文本 —— 例如，"应该识别第 42 行的 SQL 注入"而不是"输出这个确切的字符串"
4. 分割：10 训练 / 5 验证 / 5-10 保留

GEPA 仅需 3 个示例即可工作，这足够开始。

### Source B: SessionDB 挖掘（真实使用，LLM-as-judge 评分）

1. 查询 SessionDB 找到加载技能的会话（在消息中搜索技能名称）
2. 提取用户给出的任务和 Agent 的完整响应
3. 使用 LLM-as-judge 根据评分标准对每个 `(task, response)` 对评分
4. 高分对成为"好"示例；低分对成为 GEPA 反射分析的失败案例

随着更多真实使用积累，这会逐渐改善。

### Source C: 手工制作的黄金集（可选，高价值技能）

手工编写的测试用例和预期输出，存储为 JSONL：

```
~/.hermes/evolution/datasets/<skill-name>/golden.jsonl
```

最高质量的信号，但需要人工努力 —— 保留给关键技能。

### Source D: 特定技能的自动评估（适用时）

- **systematic-debugging**：植入 bug，运行技能，检查测试是否通过
- **arxiv**：搜索已知论文，检查是否找到
- **github-code-review**：创建包含植入问题的 PR，检查是否被捕获

不是所有技能都有自然的自动评估 —— 这是奖励，不是要求。

---

## 六、评分：LLM-as-judge with Rubrics

对于大多数技能，没有明确的对/错 —— 质量是主观的。适应度函数使用 LLM 评分器根据评分标准评分：

- **Agent 是否遵循了技能的过程？**（0-1）
- **输出是否正确/有用？**（0-1）
- **是否简洁（在 token 预算内）？**（0-1）

评分标准是特定于技能的，并存储在评估数据集旁边。

---

## 七、约束与护栏

每个进化变体必须通过：

✅ **完整测试套件**：`pytest tests/ -q` 必须 100% 通过

✅ **大小限制**：
 - 技能 ≤ 15KB
 - 工具描述 ≤ 500 字符

✅ **缓存兼容性**：无对话中途更改

✅ **语义保持**：不得偏离原始目的

✅ **PR 审查**：所有更改都经过人工审查，从不直接提交

---

## 八、项目结构

```
hermes-agent-self-evolution/  # 独立仓库
├── PLAN.md                   # 本文件
├── README.md                 # 设置、使用、示例
├── pyproject.toml            # 包配置 + 依赖（dspy, gepa）
│
├── evolution/                # 主包
│   ├── core/                 # 共享基础设施
│   │   ├── __init__.py
│   │   ├── dataset_builder.py      # 评估数据集生成
│   │   ├── fitness.py              # 适应度函数
│   │   ├── constraints.py          # 约束验证器
│   │   ├── benchmark_gate.py       # 基准门控
│   │   └── pr_builder.py           # 自动生成 PR
│   │
│   ├── skills/               # Phase 1: 技能进化
│   │   ├── evolve_skill.py         # 主入口
│   │   └── skill_module.py         # 将 SKILL.md 包装为 DSPy 模块
│   │
│   ├── tools/                # Phase 2: 工具描述进化
│   ├── prompts/              # Phase 3: 系统提示进化
│   ├── code/                 # Phase 4: 代码进化（Darwinian Evolver）
│   └── monitor/              # Phase 5: 持续循环
│
├── datasets/                 # 生成的评估数据集（gitignored，本地）
│   ├── skills/
│   └── tools/
│
└── tests/                    # 测试套件
```

---

## 九、使用示例

### 安装

```
# 克隆并安装
git clone https://github.com/NousResearch/hermes-agent-self-evolution.git
cd hermes-agent-self-evolution
pip install -e ".[dev]"

# 指向 hermes-agent 仓库（从 ~/.hermes/hermes-agent 或环境变量自动检测）
export HERMES_AGENT_REPO=~/.hermes/hermes-agent
```

### Phase 1: 进化一个技能

```
# 使用会话历史的自动生成评估数据
python -m evolution.skills.evolve_skill \
  --skill github-code-review \
  --iterations 10 \
  --eval-source sessiondb

# 或使用合成评估数据
python -m evolution.skills.evolve_skill \
  --skill github-code-review \
  --iterations 10 \
  --eval-source synthetic
```

### Phase 2: 进化工具描述

```
python -m evolution.tools.evolve_tool_descriptions \
  --iterations 5 \
  --benchmark-gate tblite-fast
```

### Phase 3: 进化系统提示部分

```
python -m evolution.prompts.evolve_prompt_section \
  --section MEMORY_GUIDANCE \
  --iterations 5
```

### Phase 4: 进化工具代码

```
python -m evolution.code.evolve_tool_code \
  --tool file_tools \
  --bug-issue 742 \
  --iterations 10
```

**所有命令都输出针对 hermes-agent 的 PR 分支 + 摘要。人工合并。**

---

## 十、关键设计决策

### 10.1 为什么独立仓库？

Hermes Agent Self-Evolution 存在于自己的仓库中，**独立于 hermes-agent**。它：

- pip 安装或克隆 hermes-agent 来访问其基础设施
- 将进化版本输出到 git 分支
- 创建 PR 供人工审查

**hermes-agent 代码库无需任何更改**。

### 10.2 为什么需要人工审查？

所有变化都通过 PR 人工审查：

-  安全性：防止恶意或错误的自我修改
-  语义保持：确保进化不偏��原始目的
-  质量控制：人工验证改进是真实的
-  可追溯性：完整的 Git 历史记录所有进化谱系

### 10.3 为什么阶段式实施？

阶段是顺序的 —— 每个阶段都建立在前一个阶段的基础设施上，并且必须在进入下一个阶段之前证明自己。

**流程**：

```
Phase 1 ──► 验证门控 ──► Phase 2 ──► 验证门控 ──► Phase 3 ──► ...
  构建      是否真的       构建      是否有效       构建
  & 测试     有改进？      & 测试     且没有破坏     & 测试
```

如果某个阶段没有产生有意义的改进（进化变体不比基线好），我们停止并重新评估再进入下一个阶段。

---

## 十一、实际影响与意义

### 11.1 对 AI Agent 开发的意义

**1. 持续改进**：Agent 可以在人工监督下不断自我改进

**2. 低门槛优化**：无需大规模 GPU 训练，任何团队都可以使用

**3. 数据驱动**：基于真实使用数据和评估指标优化，而非猜测

**4. 可追溯性**：完整的 Git 历史记录所有改进，可以回滚

### 11.2 对 AI 安全的意义

**1. 人工审查**：所有改进都需要人工批准，防止不受控制的自我修改

**2. 测试护栏**：完整的测试套件确保改进不会破坏现有功能

**3. 语义保持**：约束确保进化不会偏离原始目的

**4. 透明性**：PR 中的 diff 清晰显示所有更改

### 11.3 对 AI 研究的意义

**1. 理论到实践**：将 ICLR 2026 Oral 论文 GEPA 应用于真实系统

**2. 新范式**：探索 AI Agent 自我进化的新范式

**3. 可复现**：开源实现，社区可以复现和扩展

---

## 十二、局限性

**1. 依赖评估数据质量**：进化效果取决于评估数据集的质量和代表性

**2. 计算成本**：虽然比 GPU 训练便宜，但多次迭代仍需 API 调用成本

**3. 需要人工审查**：每个改进都需要人工审查，可能成为瓶颈

**4. 适用范围**：主要适用于基于文本的优化，不适用于所有类型的改进

**5. 局部最优**：进化算法可能陷入局部最优，需要多次运行或随机重启

---

## 十三、未来展望

### 短期（1-3 个月）

- ✅ 完成 Phase 1-3 的实施和验证
- ✅ 在多个技能上证明改进效果
- ✅ 建立完整的评估和基准测试基础设施

### 中期（3-6 个月）

-  完成 Phase 4-5 的实施
-  建立自动化持续改进管道
-  扩展到更多 AI Agent 系统

### 长期（6-12 个月）

-  探索跨 Agent 的知识共享
-  开发更高级的进化策略
-  建立社区贡献的评估数据集

---

## 十四、如何贡献？

如果你想为 Hermes Agent Self-Evolution 做出贡献：

1. **报告问题**：在 GitHub Issues 中报告 bug
2. **提交 PR**：改进代码、文档或测试
3. **贡献评估数据**：为特定技能贡献高质量的测试用例
4. **分享经验**：在你的项目中使用并分享经验

---

## 十五、相关资源

- **GitHub 仓库**：https://github.com/NousResearch/hermes-agent-self-evolution
- **PLAN.md**：完整的架构、评估数据策略、约束、基准测试集成和阶段性时间表
- **DSPy**：https://github.com/stanfordnlp/dspy
- **GEPA 论文**：ICLR 2026 Oral（待发布）
- **Nous Research**：https://nousresearch.com/

---

## 十六、总结

Hermes Agent Self-Evolution 代表了 AI Agent 自我进化的一个重要里程碑。通过结合 DSPy 和 GEPA，它实现了一个既安全又有效的自我改进系统。

**核心优势**：
 -  **数据驱动**：基于真实使用数据和评估指标
 -  **安全可控**：所有改进需要人工审查
 -  **低成本**：无需 GPU，仅 $2-10 每次优化
 -  **持续改进**：自动化循环，无人值守运行
 -  **可追溯**：完整的 Git 历史记录所有改进

**未来展望**：随着更多阶段的完成和社区的参与，我们有理由相信 AI Agent 的自我进化将成为一个标准能力，推动整个行业的发展。

---

**作者**: TheAIEra
**来源**: 公众号：AI 人工智能时代

*本文首发于 AI 人工智能时代，转载请注明出处。*

*关注公众号，获取更多 AI 技术干货！*

     公众号：AI人工智能时代。 每日AI新闻和技术博客，主页：https://www.theaiera.cn 

posted @  
2026-04-14 22:19
[iTech](https://www.cnblogs.com/itech)  阅读(
2035
)  评论(
0
)    [收藏](javascript:void(0))[举报](https://report.cnblogs.com?targetLink=https%3A%2F%2Fwww.cnblogs.com%2Fitech%2Fp%2F19867914&targetId=19867914&targetType=0)

刷新页面[���回顶部](https://www.cnblogs.com/itech/p/19867914#top)

[https://www.trae.com.cn/?utm_source=advertising&utm_medium=cnblogs_ug_cpa&utm_term=hw_trae_cnblogs](https://www.trae.com.cn/?utm_source=advertising&utm_medium=cnblogs_ug_cpa&utm_term=hw_trae_cnblogs)

### 公告

[博客园](https://www.cnblogs.com/)
  ©  2004-2026

[浙公网安备 33010602011771号](http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010602011771)[浙ICP备2021040463号-3](https://beian.miit.gov.cn)
