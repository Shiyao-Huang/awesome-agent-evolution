# EverOS: 面向自进化 Agent 的长期记忆操作系统与评估基准

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/EverMind-AI/EverOS |
| Star | 500+ |
| 技术栈 | Python, Docker, Milvus, Elasticsearch, Vectorize, FastAPI, HuggingFace |
| 许可证 | Apache 2.0 |
| 开发者 | EverMind AI |
| 论文 | EverMemOS: A Self-Organizing Memory Operating System (arXiv 2026) 等 |

## 项目简介

EverOS（原名 Everos）是一个统一平台，用于**应用、构建和评估自进化 Agent 中的长期记忆**。项目围绕三个核心部分组织：使用案例（展示记忆在真实 Agent 工作流中的作用）、架构方法（可运行的记忆系统与算法）和基准测试（记忆质量与 Agent 自进化的开放评估套件）。其核心组件 EverCore 是一个受生物印记启发的自组织记忆操作系统，能从对话中提取、结构化和检索长期知识，使 Agent 具备记忆、理解和持续进化的能力。

## 目录结构

```
everos/
├── methods/                           # ★ 架构方法
│   ├── EverCore/                      # ★ 核心记忆系统
│   │   ├── src/                       # 源码
│   │   │   ├── run.py                 # 入口
│   │   │   ├── agentic_layer/         # Agent 层
│   │   │   │   └── memory_manager.py  # ★ 记忆管理器
│   │   │   ├── memory_layer/          # ★ 记忆层
│   │   │   │   └── prompts/           # EN/ZH 双语提示
│   │   │   ├── infra_layer/           # 基础设施层
│   │   │   │   └── adapters/input/api/ # REST API
│   │   │   └── ...
│   │   ├── evaluation/                # ★ 评估运行器
│   │   ├── demo/                      # 演示
│   │   └── docs/                      # 文档
│   └── HyperMem/                      # 超图记忆架构
├── benchmarks/                        # ★ 基准测试
│   ├── EverMemBench/                  # 记忆质量评估
│   │   └── dataset/                   # HuggingFace 数据集
│   └── EvoAgentBench/                 # Agent 自进化评估
├── use-cases/                         # 使用案例
│   ├── game-of-throne-demo/           # 权力游戏记忆演示
│   ├── claude-code-plugin/            # Claude Code 插件
│   └── ...                            # 更多集成
└── .github/                           # 社区文件
```

## 核心模块分析

### 1. EverCore 记忆操作系统（methods/EverCore/）

EverCore 是 EverOS 的核心组件，实现了三层架构：

- **Agent 层（agentic_layer/）**：提供记忆管理器接口，协调 Agent 与记忆系统的交互
- **记忆层（memory_layer/）**：实现记忆的提取、结构化、存储和检索，支持 EN/ZH 双语提示
- **基础设施层（infra_layer/）**：REST API、数据库适配器（Milvus 向量库、Elasticsearch）等

```python
# 记忆存储与检索 API
import requests
API_BASE = "http://localhost:1995/api/v1"

# 存储记忆
requests.post(f"{API_BASE}/memories", json={
    "message_id": "msg_001",
    "content": "I love playing soccer on weekends"
})

# 检索记忆（混合检索）
response = requests.get(f"{API_BASE}/memories/search", json={
    "query": "What sports does the user like?",
    "memory_types": ["episodic_memory"],
    "retrieve_method": "hybrid"
})
```

### 2. HyperMem 超图记忆（methods/HyperMem/）

基于超图的层次化记忆架构，通过超边捕获高阶关联，包含主题层、事件层和事实层的粗到细对话检索。在 LoCoMo 基准上达到 92.73% 的准确率。

### 3. EverMemBench 基准（benchmarks/EverMemBench/）

三层记忆质量评估框架：
- **事实回忆（Factual Recall）**：验证基础记忆检索的准确性
- **应用推理（Applied Reasoning）**：测试在复杂场景中的记忆应用能力
- **个性化泛化（Personalized Generalization）**：评估对用户偏好的理解和泛化

配套数据集发布在 HuggingFace 上，支持动态评估场景。

### 4. EvoAgentBench 基准（benchmarks/EvoAgentBench/）

Agent 自进化评估基准，通过四个维度衡量进化能力：
- **纵向成长曲线**：Agent 在持续交互中的性能提升趋势
- **迁移效率**：从一个任务学到的能力迁移到新任务的效率
- **错误避免**：Agent 从错误中学习并避免重复犯错的能力
- **技能命中质量**：Agent 在何时选择使用何种技能的准确性

### 5. 多租户架构

EverCore 采用多租户设计，所有数据严格按租户隔离，支持并发访问和独立配置。所有 I/O 操作均为异步实现，确保高吞吐和低延迟。

## 技术亮点

1. **生物印记启发的记忆组织**：EverCore 借鉴生物印记机制设计记忆的自组织提取和结构化过程，使记忆系统具有类人的学习特性
2. **记忆性能报告**：公开资料报告 LoCoMo（93.05%）和 LongMemEval（83.00%）结果；是否为同版本最优需要复核 leaderboard、任务设置和评测日期
3. **超图层次记忆**：HyperMem 通过超边建模多实体间的高阶关联，突破了传统图结构在复杂关系建模上的限制
4. **双语记忆支持**：提示系统原生支持 EN/ZH 双语，覆盖全球主要用户群体
5. **丰富的集成生态**：涵盖 Rokid AI 眼镜、Claude Code 插件、TEN Framework、Live2D 角色、Browser Agent 等十余种实际应用

## 与 Self-Evolve 关联

| 维度 | EverOS 贡献 |
|------|------------|
| 长期记忆基础设施 | EverCore 为 Self-Evolve 系统提供了完整的长期记忆基础设施，使 Agent 能够跨会话积累知识、避免重复错误、持续改进 |
| 自进化评估基准 | EvoAgentBench 提供了衡量 Agent 自进化能力的标准化框架，填补了 Self-Evolve 评估维度的空白 |
| 记忆驱动的进化 | 通过记忆检索将历史经验注入当前决策过程，实现了"基于过去经验的自我改进"，是 Self-Evolve 的关键能力 |
| 自组织记忆架构 | 记忆的自组织提取和结构化机制为 Self-Evolve 系统的内部知识管理提供了架构参考 |
| 多场景验证 | 丰富的使用案例展示了记忆增强 Agent 在医疗、教育、娱乐、编程等多领域的实际价值 |

## 参考资料

- [EverMemOS 论文](https://arxiv.org/abs/2601.02163)
- [HyperMem 论文](https://arxiv.org/abs/2604.08256)
- [EverMemBench 论文](https://arxiv.org/abs/2602.01313)
- [EverOS 文档](https://docs.evermind.ai)
- [EverMemBench 数据集](https://huggingface.co/datasets/EverMind-AI/EverMemBench-Dynamic)
- [EvoAgentBench 数据集](https://huggingface.co/datasets/EverMind-AI/EvoAgentBench)
