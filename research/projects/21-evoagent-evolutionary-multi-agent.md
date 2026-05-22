# EvoAgent: 基于进化算法的多智能体自动生成

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/siyuyuan/evoagent |
| Star | 0.2k+ |
| 技术栈 | Python, OpenAI API, Gemini API, LangChain, ScienceWorld |
| 许可证 | 学术使用 |
| 安装 | `pip install -r requirements.txt` |

## 项目简介

EvoAgent 是 NeurIPS 2024 接收并在 NAACL 2025 展示的研究工作，提出了通过进化算法自动将专家 Agent 扩展为多智能体系统的通用方法。其核心类比来自人类社会：每个 Agent 可视为一个"个体"，能够通过多代繁衍来扩充其"种群"。EvoAgent 模拟这种人类社会的繁衍机制，从任意预定义的专家 Agent 出发，自动生成具有多样化能力和视角的多智能体系统。

该框架的创新在于将进化计算中的选择、变异和继承机制映射到 Agent 系统设计中：每个新生成的 Agent 继承父代的核心能力，同时发展出独特的专业化特征。多个 Agent 之间通过协作机制共同完成复杂任务，实现了"单 Agent 到多 Agent"的自动化扩展。

EvoAgent 在四类任务上进行了验证：NLP 知识密集型任务（逻辑网格谜题、创意写作、Codenames 协作游戏）、多模态任务 (MMMU)、交互式科学推理 (ScienceWorld) 和旅行规划 (TravelPlanner)。实验表明，自动生成的多智能体系统能够显著超越单个专家 Agent 的表现。

## 目录结构

```
evoagent/
├── spp/                        # Solo Performance Prompting 任务
│   ├── llm_evoagent.py         # NLP 任务主程序
│   ├── llm_evoagent_codenames.py  # Codenames 协作游戏
│   ├── data/                   # 任务数据
│   │   ├── trivia_creative_writing/
│   │   └── logic_grid_puzzle/
│   └── util_func.py            # 工具函数
├── mmmu/                       # 多模态任务
│   └── run_evoagent.py         # MMMU 运行脚本
├── scienceworld/               # 交互式科学推理
│   ├── eval_evoagent.py        # ScienceWorld 评估
│   └── requirements.txt
├── travelplanner/              # 旅行规划
│   ├── tools/planner/          # 规划工具
│   │   └── sole_planning.py    # 规划主程序
│   └── TravelPlanner/          # 数据库
├── assets/
│   └── framework.png           # 框架图
└── requirements.txt
```

## 核心模块分析

### 1. 进化式多智能体生成

EvoAgent 的核心是模拟人类繁衍的 Agent 生成机制。每个 Agent 被视为一个"个体"，具有独特的角色设定和能力描述。进化过程包括：

```bash
# NLP 任务运行示例
export task=writing
export MODEL_NAME=gpt-4-1106-preview
export IND=3  # 进化迭代次数

python3 llm_evoagent.py \
    --model_name $MODEL_NAME \
    --data_type openai \
    --method evoagent \
    --ind $IND
```

### 2. 协作机制

EvoAgent 的关键设计在于 Agent 间的协作模式：

- **个体生成**：从初始专家 Agent 出发，通过 LLM 生成具有不同视角和专长的子代 Agent
- **群体协作**：多个 Agent 对同一问题给出各自的答案，通过聚合机制产生最终结果
- **迭代进化**：多轮进化迭代逐步提升 Agent 群体的整体能力

```python
# 核心协作函数
answer_list, answer = collaboration_func(
    args.ind,          # 迭代次数
    input_data,        # 输入数据
    clean_result,      # 初始结果
    model_name,        # 模型名称
    data_type          # 数据类型
)
```

### 3. 多任务适配

EvoAgent 在不同任务中展现了其通用性：

**NLP 任务 (SPP)**：
- 逻辑网格谜题 (Logic Grid Puzzle)：需要多步推理的知识密集型任务
- 创意写作 (Trivia Creative Writing)：需要融合多个知识点的生成任务
- Codenames 协作游戏：需要多角色协作的策略任务

**多模态任务 (MMMU)**：
```bash
cd mmmu/
export MODEL_NAME=gpt-4v
export IND=3
python3 run_evoagent.py --model_name $MODEL_NAME --ind $IND
```

**科学推理 (ScienceWorld)**：
```bash
# 30 个科学任务的批量评估
for task in {0..29}; do
    python eval_evoagent.py \
        --task_nums $task \
        --output_path logs/$MODEL_NAME \
        --model_name $MODEL_NAME
done
```

**旅行规划 (TravelPlanner)**：
```bash
# 支持多种策略对比
export STRATEGY=evoagent  # direct/cot/react/evoagent/group
export GROUP_NUM=3        # 每代种群大小
export SELECT_STRATEGY=all  # random/all/pk
```

### 4. 选择策略

EvoAgent 支持多种选择策略来控制 Agent 种群的进化方向：

| 策略 | 描述 |
|------|------|
| `random` | 随机选择 Agent 参与协作 |
| `all` | 所有 Agent 参与协作 |
| `pk` | 基于性能的选择淘汰 |

## 技术亮点

1. **人类社会类比**：创新性地将 Agent 视为社会个体，用繁衍机制类比多 Agent 生成，为多智能体系统设计提供了直观的生物学启发性框架。
2. **零配置扩展**：从任意预定义的专家 Agent 出发，无需额外的系统设计知识即可自动生成多智能体系统，极大地降低了多 Agent 系统的构建门槛。
3. **跨任务通用性**：在 NLP 推理、多模态理解、交互式环境和规划等四类截然不同的任务上均取得了显著提升，证明了方法的通用性。
4. **进化与协作融合**：将进化的多样性生成机制与 Agent 间的协作决策机制有机结合，既保证了能力覆盖的广度，又实现了任务执行的精度。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| Agent 自动生成 | EvoAgent 首次提出了从单个 Agent 自动生成多 Agent 系统的进化方法，是 Self-Evolve 系统中 Agent 群体自动扩展的直接先驱 |
| 进化驱动的多样性 | 通过进化算子生成具有多样化能力的 Agent，为 Self-Evolve 系统维护多样化的 Agent 生态提供了方法论 |
| 群体智能与协作 | 展示了进化生成的多 Agent 群体通过协作超越个体能力的可能性，启发 Self-Evolve 系统设计更高效的多 Agent 协作机制 |

## 参考资料

- [EvoAgent: Towards Automatic Multi-Agent Generation via Evolutionary Algorithms (NeurIPS 2024)](https://arxiv.org/abs/2406.14228)
- [EvoAgent Website](https://evo-agent.github.io/)
- [ScienceWorld](https://github.com/allenai/ScienceWorld)
- [TravelPlanner](https://github.com/OSU-NLP-Group/TravelPlanner)
