# ChatDev 2.0 (DevAll): 零代码多 Agent 编排平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/OpenBMB/ChatDev |
| Star | 26,000+ |
| 技术栈 | Python, React, Next.js, LLM API |
| 许可证 | Apache 2.0 |
| 开发者 | 清华大学 OpenBMB 团队 |

## 项目简介

ChatDev 最初是一个虚拟软件公司多 Agent 系统，通过 CEO、CTO、程序员等角色 Agent 的协作自动化软件开发生命周期。ChatDev 2.0（DevAll）演化为一个零代码多 Agent 编排平台，用户可以通过简单配置（无需编码）定义 Agent、工作流和任务，编排数据可视化、3D 生成、深度研究等复杂场景。其核心研究贡献包括多 Agent 协作网络（MacNet）、迭代经验精炼（IER）、以及基于强化学习的 Puppeteer 编排范式（NeurIPS 2025）。

## 目录结构

```
openbmb__chatdev/
├── server/                    # 后端服务
│   ├── app.py                 # Flask 应用入口
│   ├── bootstrap.py           # 初始化逻辑
│   ├── routes/                # API 路由
│   ├── services/              # 业务逻辑服务层
│   ├── models.py              # 数据模型
│   ├── settings.py            # 配置管理
│   └── state.py               # 状态管理
├── frontend/                  # 前端界面
│   ├── src/                   # React 源码
│   ├── public/                # 静态资源
│   └── vite.config.js         # Vite 构建配置
├── functions/                 # Agent 功能函数
├── workflow/                  # 工作流引擎
├── runtime/                   # 运行时执行环境
├── tools/                     # 工具集
├── entity/                    # 实体定义
├── schema_registry/           # Schema 注册表
├── yaml_instance/             # YAML 配置实例
├── yaml_template/             # YAML 配置模板
├── run.py                     # 运行入口
├── server_main.py             # 服务启动入口
└── tests/                     # 测试
```

## 核心模块分析

### 1. 工作流引擎（Workflow Engine）

ChatDev 2.0 的核心创新是从链式拓扑升级为通用工作流编排。用户通过 YAML 配置定义工作流，支持条件分支、并行执行、循环等控制结构。工作流引擎负责解析配置、调度 Agent 执行、管理中间状态传递，实现了从"虚拟软件公司"到"通用编排平台"的转变。

### 2. 多 Agent 协作网络（MacNet）

MacNet 是 ChatDev 团队提出的有向无环图（DAG）协作范式，支持多种拓扑结构下超过千个 Agent 的协作而不会超出上下文限制。相比 v1 的链式拓扑，MacNet 提供了更丰富、更具扩展性的协作模式，已应用于逻辑推理、数据分析、故事生成等非软件开发场景。

### 3. Puppeteer 编排范式（NeurIPS 2025）

最新研究成果：利用可学习的中央编排器（Central Orchestrator），通过强化学习优化，动态激活和排序 Agent 以构建高效的上下文感知推理路径。Puppeteer 范式不仅提高了推理质量，还降低了计算成本，实现了可扩展和自适应的多 Agent 协作。

### 4. 迭代经验精炼（IER）

IER 方法让指导者（Instructor）和助手（Assistant）Agent 通过跨任务的经验获取、利用、传播和消除来增强面向快捷方式的经验。这使得 Agent 在面对新任务时能够更高效地适应，减少重复错误，缩短开发流程。

### 5. 零代码配置系统

通过 YAML 模板和 Schema Registry 实现零代码编排：
- `yaml_template/` 提供预定义模板
- `yaml_instance/` 存储用户实例
- `schema_registry/` 管理配置验证
- 前端提供可视化编辑界面

## 技术亮点

1. **角色扮演对话范式**：ChatDev 首创的"虚拟软件公司"模式——Agent 扮演 CEO、CTO、程序员等角色通过对话协作完成软件开发生命周期，成为多 Agent 协作的经典范式。
2. **Puppeteer 强化学习编排**：基于 RL 的可学习编排器，能够根据任务特征动态选择最优 Agent 序列，在效率和效果之间取得平衡（NeurIPS 2025 收录）。
3. **千级 Agent 扩展**：MacNet 支持 1000+ Agent 的协作而不超出上下文窗口，通过 DAG 结构实现消息的高效路由和上下文隔离。
4. **经验驱动的持续改进**：IER 机制让 Agent 在跨任务执行中积累和精炼经验，每次执行都比上次更高效，体现了自进化的核心理念。
5. **从代码到配置的进化**：从 v1 需要编写 Python 代码到 v2 纯 YAML 配置，大幅降低了多 Agent 系统的使用门槛。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 多 Agent 协作范式 | 角色扮演对话模式为 Self-Evolve 的多 Agent 自评估提供了协作模型参考 |
| 经验精炼 | IER 的跨任务经验积累和精炼机制直接对应 Self-Evolve 的经验驱动自改进 |
| 可学习编排 | Puppeteer 的 RL 编排器为 Self-Evolve 的自适应工作流优化提供了思路 |
| 大规模协作 | MacNet 的千级 Agent 扩展方案为 Self-Evolve 的规模化自改进提供了架构参考 |
| 零代码编排 | YAML 配置驱动的编排模式为 Self-Evolve 的任务定义和流程管理提供了简化方案 |
| 增量开发 | 增量开发模式允许在现有代码基础上迭代，体现了渐进式自改进的理念 |
