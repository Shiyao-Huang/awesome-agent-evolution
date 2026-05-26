# EvoAgent: 基于进化算法的多智能体自动生成方法

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/siyuyuan/EvoAgent |
| Star | 100+ |
| 技术栈 | Python, OpenAI API, Google Gemini API, LangChain, ScienceWorld |
| 许可证 | 未明确 |
| 开发者 | Siyu Yuan 等 |
| 论文 | EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms (arXiv 2024) |

## 项目简介

EvoAgent 是一种将进化算法应用于**多智能体系统自动生成**的通用方法。核心思想是将智能体类比为生物个体，模拟人类社会中的繁衍和进化机制，从预定义的专家智能体出发，自动生成多样化的多智能体系统。项目在 NLP 推理任务、多模态任务（MMMU）、交互式科学问题求解（ScienceWorld）和旅行规划（TravelPlanner）等多种场景中验证了方法的有效性。

核心理念：每个 Agent 可视为"个体"，通过多代繁衍扩充"种群"，实现从单个专家 Agent 到多 Agent 系统的自动化扩展。

## 目录结构

```
evoagent/
├── spp/                          # ★ Solo Performance Prompting 实验
│   ├── llm_evoagent.py           # ★ 主入口（NLP 任务）
│   ├── llm_evoagent_codenames.py # Codenames 协作任务
│   ├── agent_prompt_writing.py   # 写作任务 Agent 提示
│   ├── agent_prompt_logic.py     # 逻辑推理 Agent 提示
│   ├── agent_prompt_code.py      # 代码任务 Agent 提示
│   ├── util_func.py              # ★ 工具函数（进化核心逻辑）
│   └── data/                     # 任务数据集
├── mmmu/                         # 多模态 MMMU 实验
│   ├── run_evoagent.py           # MMMU 入口
│   ├── agent_prompt.py           # 多模态 Agent 提示
│   └── llm.py                    # LLM 封装
├── scienceworld/                 # ★ ScienceWorld 交互实验
│   ├── eval_evoagent.py          # ScienceWorld 评估入口
│   ├── collaboration_prompt.py   # 协作提示
│   ├── metrics.py                # 评估指标
│   └── prompts/                  # 提示模板
├── travelplanner/                # 旅行规划实验
│   └── tools/planner/            # 规划工具
└── assets/
    └── framework.png             # 框架图
```

## 核心模块分析

### 1. 进化式 Agent 生成（util_func.py）

EvoAgent 的核心进化逻辑在 `util_func.py` 中实现，主要包括：

- **协作函数（collaboration_func）**：实现多 Agent 协作的进化循环
- **自精炼函数（refine_func）**：实现自我反思改进的基线方法
- **评估构建（evaluator_construction）**：统一封装 LLM 调用与结果解析

```python
# 进化式 Agent 协作的核心流程
def collaboration_func(ind, question, answer, model_name, data_type):
    # ind = 进化迭代次数
    # 每轮迭代：
    # 1. 基于当前答案生成反馈 Agent
    # 2. 反馈 Agent 评估并提出改进建议
    # 3. 新 Agent 根据建议生成改进答案
    # 4. 选择最优答案作为下一代输入
    i = 0
    answer_list = []
    while i < ind:
        prompt = feedback_agent_prompt.format(question=question, answer=answer)
        feedback_description = evaluator_construction(messages, model_name, question, data_type)
        prompt = self_refine_agent_prompt.format(question=question, answer=answer, feedback=feedback_description)
        new_answer = evaluator_construction(messages, model_name, question, data_type)
        answer_list.append({"time": i, "results": answer, "refine": feedback_description, "new_results": new_answer})
```

### 2. Agent 提示工程（agent_prompt_*.py）

每个任务领域有独立的提示模块，包含三类 Agent 的提示模板：
- **初始 Agent**：直接处理原始任务输入
- **反馈 Agent**：分析当前答案的质量，提出改进建议
- **改进 Agent**：根据反馈生成改进版本

以写作任务为例，提示模板包括：
- `feedback_agent_prompt`：评估写作质量并给出反馈
- `self_refine_agent_prompt`：基于反馈进行自我修正
- `evo_agent_prompt`：基于反馈和其他 Agent 的输出生成新答案

### 3. 多场景评估

EvoAgent 支持四类评估场景：

| 场景 | 任务 | 评估指标 |
|------|------|----------|
| NLP 推理 | Logic Grid Puzzle, Trivia Creative Writing, Codenames | 准确率/质量评分 |
| 多模态 | MMMU | 多选题准确率 |
| 交互环境 | ScienceWorld (30 个科学任务) | 任务完成度 |
| 规划 | TravelPlanner | 约束满足率 |

### 4. 选择策略

EvoAgent 提供多种种群选择策略（`SELECT_STRATEGY`）：
- `random`：随机选择 Agent 参与协作
- `all`：全部 Agent 参与协作
- `pk`：基于历史表现的排序选择

## 技术亮点

1. **生物进化类比**：将 Agent 视为生物个体，通过"繁衍"和"选择"机制自动生成多智能体系统，降低了多智能体系统设计的门槛
2. **通用框架设计**：方法不依赖于特定的 Agent 架构或 LLM，可应用于从文本推理到多模态、从静态任务到交互环境的广泛场景
3. **自反射与协作结合**：每个 Agent 既具备自我反思改进能力，又能在多 Agent 协作中通过交叉学习实现更高质量的输出
4. **迭代式种群生成**：通过 `GROUP_NUM` 控制每轮生成的 Agent 数量，通过 `IND` 控制进化迭代次数，实现灵活的计算预算分配
5. **兼容多种 LLM**：支持 OpenAI GPT 系列、Google Gemini 以及本地部署的 LLaMA 模型

## 与 Self-Evolve 关联

| 维度 | EvoAgent 贡献 |
|------|-------------|
| Agent 自动生成 | 提供了从单个专家 Agent 出发自动扩展为多 Agent 系统的进化范式，为 Self-Evolve 中 Agent 架构的自我进化提供了直接参考 |
| 进化式协作 | 将进化选择机制应用于 Agent 协作场景，展示了"竞争-选择-改进"循环在多 Agent 系统优化中的有效性 |
| 反馈驱动的自我改进 | 通过反馈 Agent 评估当前输出并提出改进建议的机制，与 Self-Evolve 中的自我评估模块高度一致 |
| 多场景验证 | 在推理、多模态、交互环境、规划等多种场景中的验证，为 Self-Evolve 系统的泛化能力评估提供了基准参考 |
| 零配置扩展 | 从预定义专家自动扩展多 Agent 的设计理念，启发了 Self-Evolve 系统中自动化系统扩展的能力 |

## 参考资料

- [EvoAgent 论文](https://arxiv.org/abs/2406.14228)
- [EvoAgent 网站](https://evo-agent.github.io/)
- [ScienceWorld](https://github.com/allenai/ScienceWorld)
- [TravelPlanner](https://github.com/OSU-NLP-Group/TravelPlanner)
