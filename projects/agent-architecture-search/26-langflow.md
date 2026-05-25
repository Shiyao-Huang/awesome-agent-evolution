# Langflow: AI Agent 可视化构建平台

> GitHub: https://github.com/langflow-ai/langflow
> Stars: 60K+ | 语言: Python + TypeScript
> 许可证: MIT
> 机构: Langflow AI
> 网站: https://langflow.org
> 本地: `repos/langflow__langflow/`

---

## 核心定位

Langflow 是一个强大的 AI Agent 和工作流构建/部署平台。提供可视化拖拽界面 + Python 代码自定义 + API/MCP 服务器部署能力。支持所有主流 LLM、向量数据库和 AI 工具。

## 技术架构

### 三包 + 前端结构

```
src/lfx/                    — 执行器核心（组件基类、图引擎、内置组件）
src/backend/base/langflow/  — 平台层（FastAPI 路由、认证、持久化、Alembic）
src/langflow/               — 集成分发包
src/frontend/               — React 19 + TypeScript + Vite + Zustand + @xyflow/react
```

### 依赖方向（单向）

```
frontend → langflow → langflow-base → lfx
```

### 核心技术栈

- **前端**: React 19 + TypeScript + Vite + Zustand + @xyflow/react
- **后端**: Python 3.10-3.13 + FastAPI + Alembic
- **包管理**: uv (推荐)
- **测试**: pytest (后端) + Jest (前端) + Playwright (E2E)
- **代码质量**: Ruff + Biome

### 关键特性

1. **可视化构建器** — 拖拽式 AI 流程设计
2. **源码访问** — Python 自定义任何组件
3. **交互式 Playground** — 即时测试 + 逐步控制
4. **多 Agent 编排** — 对话管理 + 检索
5. **API 部署** — 一键生成 REST API
6. **MCP 服务器** — 将工作流暴露为 MCP 工具
7. **可观测性** — LangSmith, LangFuse 集成
8. **Langflow Desktop** — 桌面应用（Windows/macOS）

## Self Evolve 关联

### 直接关联

- **Agent 工作流可视化**: 为 Agent 架构搜索提供可视化界面
- **组件作为进化单元**: Langflow 的组件系统天然适合作为进化的基本单位
- **MCP 服务器部署**: 进化后的 Agent 可直接作为工具服务化

### 间接关联

- **流程即数据**: 工作流的 JSON 表示可版本控制、对比、进化
- **组件市场**: 组件复用生态是集体进化的体现
- **可视化调试**: 为 Agent 自进化的过程提供可观测性

## 设计哲学（六条不可妥协原则）

1. **Flow 是用户制品** — 组件接口一旦发布即冻结
2. **每个后端功能必须上画布** — 否则属于 SDK，不属于平台
3. **组件是工作单元** — 一个组件一个职责
4. **可见数据流胜过巧妙魔法** — 通过输入输出传递数据
5. **组合优于能力** — 分裂优于第十个输入
6. **无证据不算修复** — 错误处理不算修复

## 与同类项目对比

| 维度 | Langflow | n8n | Flowise |
|------|----------|-----|---------|
| **定位** | AI Agent 可视化 | 通用工作流 | LangChain 可视化 |
| **Stars** | 60K+ | 80K+ | 35K+ |
| **语言** | Python + TS | TypeScript | TypeScript |
| **AI 深度** | 原生 AI | LangChain 节点 | LangChain 专用 |
| **组件系统** | Python 自定义 | Node.js 自定义 | 预制组件 |
| **MCP** | 支持 | 支持 | 不支持 |

## 技术亮点

1. **React 19 前端** — 采用最新 React 版本
2. **@xyflow/react** — 专业的流编辑器框架
3. **uv 包管理** — Rust 实现的极速 Python 包管理器
4. **Alembic 迁移** — 数据库版本控制
5. **完善的开发者文档** — PHILOSOPHY, ARCHITECTURE, COMPONENTS, CONTRACTS, TESTING, ANTI-PATTERNS

---

*分析日期: 2026-05-22 | 分析者: Researcher-1*
