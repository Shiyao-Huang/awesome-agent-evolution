# Agenta: 开源 LLMOps 评测平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/Agenta-AI/agenta |
| Star | 8k+ |
| 技术栈 | Python, FastAPI, TypeScript, React, Docker |
| 许可证 | MIT |
| 开发者 | Agenta AI |
| 产品 | [Agenta Cloud](https://cloud.agenta.ai) |

## 项目简介

Agenta 是一个开源的 **LLMOps 平台**，专注于 LLM 应用的**提示管理、评估和可观测性**。它提供集成的工具链，帮助开发者构建可靠的 LLM 应用。

核心理念：**Prompt Engineering + Evaluation + Observability = Reliable LLM Apps** — 通过系统化的评测和监控确保 LLM 应用的质量。

## 目录结构

```
agenta/
├── api/                        # ★ FastAPI 后端
│   ├── oss/                    # 开源版 API
│   │   └── src/
│   │       ├── apis/           # API 路由
│   │       ├── core/           # ★ 核心业务逻辑
│   │       │   ├── workflows/  # 工作流引擎
│   │       │   ├── queries/    # 查询管理
│   │       │   ├── testsets/   # ★ 测试集
│   │       │   ├── evaluators/ # ★ 评估器
│   │       │   ├── git/        # Git 风格版本管理
│   │       │   └── folders/    # 文件夹管理
│   │       └── dbs/            # 数据库层
│   └── ee/                     # 企业版扩展
├── web/                        # ★ React 前端
│   ├── oss/                    # 开源版前端
│   │   └── src/
│   │       ├── components/     # UI 组件
│   │       ├── pages/          # 页面
│   │       ├── state/          # Jotai 状态管理
│   │       └── lib/            # 工具库
│   ├── ee/                     # 企业版前端
│   └── packages/               # ★ 共享包
│       ├── agenta-ui/          # UI 组件库
│       ├── agenta-entities/    # 实体状态管理
│       └── agenta-entity-ui/   # 实体 UI 组件
├── sdk/                        # Python SDK
└── docs/                       # 文档
```

## 核心模块分析

### 1. 评估框架

Agenta 的核心是系统化的 LLM 应用评估：

```
Prompt 版本 → 测试集 → 评估器 → 结果分析
     ↓               ↓          ↓
  Git 版本管理    多维度评估   可视化报告
```

- **测试集（Testsets）**：定义输入-期望输出对
- **评估器（Evaluators）**：自动评估 LLM 输出质量
- **变体（Variants）**：管理不同 Prompt 版本

### 2. Git 风格版本管理

Agenta 使用类 Git 的版本控制系统：
- **Artifact**：可版本化的实体（Workflow、Query 等）
- **Variant**：Artifact 的分支
- **Revision**：具体的版本快照
- 支持 commit、log、retrieve 操作

### 3. 工作流引擎

`core/workflows/` 提供：
- 可视化工作流定义
- 节点和边的编排
- 支持条件分支和并行

### 4. 实体状态管理（Molecule 模式）

前端使用创新的 **Molecule 模式**：
- 统一的 CRUD 操作接口
- Draft 状态管理
- TanStack Query 缓存
- Jotai 响应式状态

### 5. 企业级功能

- **组织管理**：多租户支持
- **计费系统**：使用量追踪
- **权限控制**：细粒度 RBAC

## 技术亮点

1. **系统化评测**：Prompt + 测试集 + 评估器完整评测流水线
2. **Git 版本管理**：类 Git 的 Prompt 版本控制系统
3. **Molecule 模式**：创新的实体状态管理架构
4. **Monorepo 架构**：前后端共享包、类型安全的 API
5. **OSS/EE 分离**：开源版和企业版代码分离但共享核心

## 与 Self-Evolve 关联

| 维度 | Agenta 贡献 |
|------|------------|
| 评测 | **系统化 LLM 应用评测框架**：测试集 + 评估器 + 变体管理 |
| 版本管理 | Git 风格的 Prompt/Workflow 版本控制 |
| 可观测性 | LLM 应用的执行追踪和监控 |
| 工作流 | 可视化工作流编排引擎 |
| 启示 | Agenta 的评测框架可作为 Self-Evolve 中 Agent 行为评测的参考 |

## 参考资料

- [Agenta GitHub](https://github.com/Agenta-AI/agenta)
- [Agenta 文档](https://agenta.ai/docs/)
- [Agenta Cloud](https://cloud.agenta.ai)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/agenta_ai__agenta`（指向 `repos/agenta_ai__agenta` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/agenta_ai__agenta --index-only --skip-git --name Agenta`。
- **知识图谱规模**：待分析。
- **查询语句**：`evaluator testset workflow variant revision prompt evaluation`。
- **核心执行流程候选**：
  - Testset → Evaluator → Variant → Revision → Report
  - Workflow → Node → Edge → Execute
- **关键符号/文件**：
  - `evaluators/`（`api/oss/src/core/evaluators/`）
  - `testsets/`（`api/oss/src/core/testsets/`）
  - `workflows/`（`api/oss/src/core/workflows/`）
  - `git/`（`api/oss/src/core/git/`）
- **调用关系上下文**：
  - Evaluator 服务调用 Workflow 服务执行评测。
  - Git 模块为所有实体提供版本控制能力。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
