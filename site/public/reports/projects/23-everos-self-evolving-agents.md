# EverOS: 具备长期记忆的自进化 Agent 操作系统与评测基准

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/EverMind-AI/EverOS |
| Star | 1.0k+ |
| 技术栈 | Python, FastAPI, Docker, Milvus, Elasticsearch, Vectorize |
| 许可证 | Apache 2.0 |
| 安装 | `uv sync` + `docker compose up -d` |

## 项目简介

EverOS 是一个面向自进化 Agent 的统一平台，围绕**长期记忆**这一核心能力，提供应用场景展示、记忆架构方法和评测基准三大模块。该项目的核心理念是：真正的自进化 Agent 必须具备跨会话的记忆能力，能够从历史交互中提取知识、积累经验，并利用这些记忆持续改进自身行为。

EverOS 的核心组件 EverCore 是一个受生物印刻 (biological imprinting) 启发的自组织记忆操作系统，能够从对话中自动提取、结构化和检索长期知识。公开材料报告了 LoCoMo 93.05% 和 LongMemEval 83.00% 结果；这些数字应作为 benchmark 复查入口，不能在未核对任务设置、版本和 leaderboard 的情况下写成“最佳水平”。

除了记忆系统本身，EverOS 还提供了 HyperMem（超图记忆架构）、EverMemBench（三层记忆质量评测基准）和 EvoAgentBench（Agent 自进化评测基准），形成了一套完整的"构建-评测-进化"工具链。项目同时展示了 15+ 个基于长期记忆的应用场景，涵盖 AI 助手、创意工具、游戏、医疗辅助等。

## 目录结构

```
everos/
├── methods/                       # 记忆架构方法
│   ├── EverCore/                  # 自组织记忆操作系统
│   │   ├── src/
│   │   │   ├── run.py             # 服务入口
│   │   │   ├── agentic_layer/     # Agent 层 (记忆管理器)
│   │   │   │   └── memory_manager.py  # 核心记忆管理
│   │   │   ├── memory_layer/      # 记忆层 (提取、存储)
│   │   │   │   └── prompts/       # 提示词 (EN/ZH)
│   │   │   ├── infra_layer/       # 基础设施层 (API、搜索、持久化)
│   │   │   │   ├── adapters/
│   │   │   │   │   ├── input/api/ # REST API 控制器
│   │   │   │   │   └── out/       # 输出适配器 (ES, Milvus, ...)
│   │   │   │   └── ...
│   │   │   ├── biz_layer/         # 业务逻辑层
│   │   │   └── core/              # 核心工具
│   │   ├── evaluation/            # 评估运行器
│   │   └── docs/                  # 文档
│   └── HyperMem/                  # 超图记忆架构
├── benchmarks/                    # 评测基准
│   ├── EverMemBench/              # 记忆质量评测
│   │   └── (三层评估: 事实回忆、应用推理、个性化泛化)
│   └── EvoAgentBench/             # Agent 自进化评测
│       └── (纵向成长曲线、迁移效率、错误规避、技能命中)
├── use-cases/                     # 应用场景
│   ├── game-of-throne-demo/       # 权力的游戏记忆演示
│   ├── claude-code-plugin/        # Claude Code 记忆插件
│   └── ...                        # 15+ 应用
└── evermemos-openclaw-plugin/     # OpenClaw Agent 记忆插件
```

## 核心模块分析

### 1. EverCore 记忆操作系统

EverCore 的核心是多层记忆架构，将 Agent 的记忆分为五种类型：

- **情景记忆 (Episodic Memory)**：具体的对话事件和交互记录
- **原子事实 (Atomic Fact)**：从对话中提取的离散知识事实
- **预见 (Foresight)**：对用户未来行为或需求的预测性记忆
- **Agent 案例 (Agent Case)**：Agent 处理过的任务案例库
- **Agent 技能 (Agent Skill)**：Agent 积累的可复用技能

```python
# 记忆存储 API
import requests
API_BASE = "http://localhost:1995/api/v1"

# 存储记忆
requests.post(f"{API_BASE}/memories", json={
    "message_id": "msg_001",
    "create_time": "2025-02-01T10:00:00+00:00",
    "sender": "user_001",
    "content": "I love playing soccer on weekends"
})

# 搜索记忆
response = requests.get(f"{API_BASE}/memories/search", json={
    "query": "What sports does the user like?",
    "user_id": "user_001",
    "memory_types": ["episodic_memory"],
    "retrieve_method": "hybrid"
})
```

### 2. 记忆管理器 (memory_manager.py)

记忆管理器是 EverCore 的核心组件，负责记忆的提取、结构化和检索：

- 支持**混合检索** (hybrid retrieval)：结合向量相似度搜索 (Milvus) 和文本搜索 (Elasticsearch)
- 支持**多租户**隔离：数据严格按租户作用域管理
- 全异步 I/O：所有操作均为异步，确保高并发性能
- 多语言提示：提示词支持中英文双语

### 3. HyperMem 超图记忆架构

HyperMem 使用超图 (Hypergraph) 捕获高阶关联关系：

- **主题层 (Topic Layer)**：粗粒度的话题分类
- **事件层 (Event Layer)**：中粒度的事件序列
- **事实层 (Fact Layer)**：细粒度的原子事实
- 通过**超边 (Hyperedges)** 连接不同层的节点，捕获跨层关联

### 4. EvoAgentBench: Agent 自进化评测

EvoAgentBench 提供了首个系统性的 Agent 自进化能力评测框架：

| 评测维度 | 说明 |
|---------|------|
| 纵向成长曲线 | Agent 在持续交互中的能力提升轨迹 |
| 迁移效率 | Agent 将已学知识迁移到新任务的能力 |
| 错误规避 | Agent 从错误中学习并避免重复犯错的能力 |
| 技能命中质量 | Agent 调用正确技能的准确度 |

### 5. EverMemBench: 记忆质量评测

三层评测架构：
1. **事实回忆 (Factual Recall)**：记忆的准确性和完整性
2. **应用推理 (Applied Reasoning)**：利用记忆进行推理的能力
3. **个性化泛化 (Personalized Generalization)**：基于用户记忆进行个性化响应的能力

### 6. 应用生态系统

EverOS 展示了 15+ 个基于长期记忆的应用，包括：

- **Rokid AI 助手**：智能眼镜中的长期记忆
- **创意助手**：带记忆的创作工具
- **Memory Graph 可视化**：记忆图谱的图形化界面
- **Claude Code 插件**：为编码 Agent 提供持久记忆
- **阿尔茨海默症记忆助手**：医疗辅助场景

## 技术亮点

1. **受生物印刻启发的自组织记忆**：EverCore 借鉴生物印刻机制，使 Agent 能够从原始对话数据中自主提取和结构化知识，无需人工标注。
2. **五类记忆分层架构**：情景记忆、原子事实、预见、案例、技能五类记忆的分层设计，覆盖了 Agent 自进化过程中不同粒度和不同时间尺度的记忆需求。
3. **混合检索与超图关联**：结合向量搜索和文本搜索的混合检索策略，以及超图捕获的高阶关联，实现了记忆的高效存取和深层推理。
4. **双基准评测体系**：EverMemBench 和 EvoAgentBench 分别从记忆质量和进化能力两个维度，为自进化 Agent 的评估提供了标准化工具。
5. **丰富的应用生态**：15+ 个应用展示了长期记忆在 AI 助手、创意工具、游戏、医疗等场景中的实际价值。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 记忆驱动的自我进化 | EverOS 明确提出并实现了"记忆是自进化的基础"这一理念，为 Self-Evolve 系统提供了关键的长期记忆基础设施 |
| 自进化能力评测 | EvoAgentBench 首次系统性地定义了 Agent 自进化的评测维度（成长曲线、迁移效率、错误规避、技能命中），为 Self-Evolve 系统的评估提供了标准化框架 |
| 知识积累与复用 | 通过案例库和技能库的积累机制，展示了 Agent 如何将历史经验转化为可复用的结构化知识，这是 Self-Evolve 系统知识管理的直接参考 |

## 参考资料

- [EverMemOS: A Self-Organizing Memory Operating System (arXiv 2026)](https://arxiv.org/abs/2601.02163)
- [HyperMem: Hypergraph Memory for Long-Term Conversations (arXiv 2026)](https://arxiv.org/abs/2604.08256)
- [Evaluating Long-Horizon Memory for Multi-Party Collaborative Dialogues (arXiv 2026)](https://arxiv.org/abs/2602.01313)
- [EverOS Documentation](https://docs.evermind.ai)
- [EverOS HuggingFace](https://huggingface.co/EverMind-AI)
