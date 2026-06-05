# MetaGPT: 多智能体框架

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/FoundationAgents/MetaGPT (原 geekan/MetaGPT) |
| Star | 50k+ |
| 技术栈 | Python 3.9-3.11, OpenAI/Azure/Ollama LLM API, Node.js, pnpm |
| 许可证 | MIT |
| 安装 | `pip install --upgrade metagpt` |
| 产品 | [MGX (MetaGPT X)](https://mgx.dev/) |

## 项目简介

MetaGPT 是高可见度的多智能体协作框架之一。核心理念：**Code = SOP(Team)** — 将软件公司的标准操作流程（SOP）应用于 LLM 团队。

公开 README 展示了从一句话需求生成软件项目材料的流程线索（如用户故事、竞品分析、需求文档、数据结构、API、代码等）；实际完整性需要按示例、版本和本地运行复查。

内部角色：**产品经理 / 架构师 / 项目经理 / 工程师**，按照软件公司的 SOP 协作。

## 目录结构

```
MetaGPT/
├── metagpt/
│   ├── roles/                 # 角色定义（PM, Architect, Engineer 等）
│   ├── actions/               # Action 基类与具体动作
│   ├── schema.py              # 核心数据结构（Message, Document 等）
│   ├── memory/                # 记忆系统
│   │   ├── memory.py          # 基础记忆（消息列表 + 索引）
│   │   ├── brain_memory.py    # 大脑记忆（长期/短期）
│   │   ├── longterm_memory.py # 长期记忆（持久化）
│   │   ├── memory_storage.py  # 记忆存储后端
│   │   └── role_zero_memory.py
│   ├── learn/                 # 学习模块
│   │   ├── skill_loader.py    # 技能加载器
│   │   ├── text_to_embedding.py  # 文本嵌入
│   │   └── google_search.py   # 搜索工具
│   ├── ext/                   # 扩展模块
│   │   └── sela/              # SELA: 树搜索增强 AutoML
│   │       ├── search/        # MCTS 搜索实现
│   │       ├── runner/        # 实验运行器
│   │       ├── evaluation/    # 评估
│   │       └── insights/      # 洞察分析
│   ├── provider/              # LLM 提供者抽象
│   ├── prompts/               # Prompt 模板
│   ├── tools/                 # 工具集
│   └── utils/                 # 工具函数
├── config/                    # 配置示例
├── docs/                      # 文档
├── examples/                  # 示例（含 SPO, AOT 论文代码）
├── tests/                     # 测试
└── setup.py
```

## 核心模块分析

### 1. 多 Agent 协作模式

MetaGPT 的核心是 **Role-Action-Message** 模式：

```
Role (角色)
  ├── 接收 Message (消息)
  ├── 执行 Action (动作)
  └── 发布 Message (消息)
```

**SOP 流程**：
```
用户需求 → ProductManager(写PRD) → Architect(设计架构) → ProjectManager(分解任务) → Engineer(写代码)
```

每个 Role 有：
- `name`: 角色名称
- `profile`: 角色描述
- `goal`: 目标
- `constraints`: 约束
- `actions`: 可执行的动作列表

### 2. 进化/自我改进相关

**SELA（Self-Evolving Learning with MCTS）**：
- 位于 `metagpt/ext/sela/`
- 将 ML 流水线配置表示为树结构
- 使用蒙特卡洛树搜索（MCTS）探索配置空间
- Agent 基于实验反馈迭代改进策略
- 论文：[SELA: Tree-Search Enhanced LLM Agents for Automated Machine Learning](https://arxiv.org/abs/2410.17238)

**AFlow（Automating Agentic Workflow Generation）**：
- ICLR 2025 口头报告线索；具体百分位和同类排名需要回到 OpenReview/论文版本复核
- 自动生成 Agent 工作流
- 论文：[AFlow](https://openreview.net/forum?id=z5uVAKwmjf)

**记忆与学习系统**：
- `memory/`: 多层记忆（短期/长期/大脑记忆）
- `learn/`: 技能加载、嵌入、搜索
- Agent 通过记忆系统积累经验

### 3. Prompt 工程模式

MetaGPT 使用结构化的 Prompt 管理：

```python
# 角色定义中内嵌 prompt
class ProductManager(Role):
    name: str = "Alice"
    profile: str = "Product Manager"
    goal: str = "Create products that users love"

    async def _act(self) -> Message:
        # 使用 prompt 模板生成 PRD
        prompt = self.prompt_template.format(requirement=msg.content)
        prd = await self._llm.aask(prompt)
```

**Prompt 模板** 存储在 `prompts/` 目录，按角色和任务分类。

### 4. 评估框架

- **Benchmark**: 通过 `agbenchmark` 进行标准化测试
- **SELA 评估**: `metagpt/ext/sela/evaluation/` 自动 ML 流水线评估
- **代码质量**: 输出完整可运行的项目代码
- **多域验证**: 软件开发、数据分析、ML 任务

## 技术亮点

1. **SOP(Team) 哲学**：将企业流程应用于 AI Agent 团队
2. **完整记忆系统**：多层记忆架构支持经验积累
3. **SELA + AFlow**：树搜索增强的 AutoML + 自动工作流生成
4. **MGX 产品化**：[mgx.dev](https://mgx.dev/) 是相关产品化入口；Product Hunt 等传播信号需要按日期和页面来源复查
5. **ICLR 2025 Oral**: AFlow 论文获得顶会认可
6. **丰富生态**: 50k+ stars，活跃社区

## 与 Self-Evolve 关联

| 维度 | MetaGPT 贡献 |
|------|-------------|
| 多 Agent | **SOP 多 Agent 框架样本**，角色-动作-消息模式参考 |
| 自我改进 | SELA (MCTS+LLM) 和 AFlow（自动工作流生成）是自我进化的实践 |
| 记忆 | 多层记忆系统设计可参考 |
| 学习 | skill_loader + 技能积累机制 |
| 启示 | "SOP(Team) = Code" 的理念可扩展到 Agent 系统的自我进化 SOP |

## 参考资料

- [MetaGPT GitHub](https://github.com/FoundationAgents/MetaGPT)
- [SELA 论文](https://arxiv.org/abs/2410.17238)
- [AFlow 论文](https://openreview.net/forum?id=z5uVAKwmjf) (ICLR 2025 Oral)
- [MGX 产品](https://mgx.dev/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/foundation_agents__metagpt`（指向 `repos/foundation_agents__metagpt` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/foundation_agents__metagpt --index-only --skip-git --name MetaGPT`。
- **知识图谱规模**：18107 symbols / 36116 edges / 833 clusters / 300 flows。
- **查询语句**：`multi agent role action memory environment workflow software company`。
- **核心执行流程候选**：
  - Plan → Get_embedding
  - Plan → Cos_sim
  - Plan → Extract_importance
  - Plan → Extract_recency
- **关键符号/文件**：
  - `agent_creator.py`（`examples/agent_creator.py`）
  - `AgentCreator`（`examples/agent_creator.py`）
  - `__init__`（`examples/agent_creator.py`）
  - `test_team_recover`（`tests/metagpt/serialize_deserialize/test_team.py`）
  - `test_team_recover_multi_roles_save`（`tests/metagpt/serialize_deserialize/test_team.py`）
  - `test_team.py`（`tests/metagpt/serialize_deserialize/test_team.py`）
- **调用关系上下文**：
  - 符号 `agent_creator.py` 位于 `examples/agent_creator.py` 第 ?–? 行
  - 出边/调用或包含关系：calls: 1，imports: 6
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
