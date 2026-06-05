# Cline — VS Code 自主 AI 编程智能体

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/cline/cline |
| Stars | 58,000+ |
| 主要语言 | TypeScript |
| 许可证 | Apache License 2.0 |

## 项目简介

Cline 是一款运行在 VS Code 中的开源自主 AI 编程智能体，能够独立完成创建文件、执行终端命令、浏览网页和使用各种工具等开发任务。它采用"人在回路"（human-in-the-loop）的设计理念，AI 的每一步操作都需要用户确认后方可执行，确保安全可控。Cline 支持 Plan/Act 双模式切换，集成了 MCP（Model Context Protocol）协议，兼容 Anthropic、OpenAI 等多家模型提供商，目前已获得超过 800 万开发者的信任使用。

## 目录结构

```
cline/
├── src/
│   ├── core/                # 核心控制器
│   │   ├── Cline.ts         # 主控制器类
│   │   ├── task/            # 任务管理与执行
│   │   └── promote.ts       # 提示词管理
│   ├── services/            # 后端服务
│   │   ├── tree-sitter/     # 代码解析服务
│   │   ├── browser/         # 浏览器自动化
│   │   └── mcp/             # MCP 协议集成
│   ├── integrations/        # IDE 集成
│   │   ├── terminal/        # 终端集成
│   │   ├── editor/          # 编辑器集成
│   │   └── diagnostics/     # 诊断信息集成
│   ├── api/                 # LLM API 适配
│   │   ├── providers/       # 各模型提供商适配器
│   │   └── transform/       # 消息格式转换
│   └── shared/              # 共享类型与工具
├── webview-ui/              # 前端 UI 组件
├── e2e/                     # 端到端测试
└── package.json
```

## 核心模块分析

### 1. 核心控制器 (`src/core/Cline.ts`)
Cline 的中央调度引擎，管理完整的智能体循环（agent loop）。控制器负责接收用户指令、调用 LLM 生成执行计划、解析工具调用请求、执行文件操作或终端命令，并将结果反馈给 LLM 进行下一轮迭代。支持 Plan 模式（仅规划不执行）和 Act 模式（规划并执行）的灵活切换。

### 2. MCP 协议集成 (`src/services/mcp/`)
实现了 Model Context Protocol 的完整客户端，允许 Cline 连接和使用外部 MCP 工具服务器。这使得 Cline 的能力可以无限扩展——通过 MCP 服务器接入数据库、API、文件系统等外部资源，构建真正的开放生态。

### 3. 浏览器自动化服务 (`src/services/browser/`)
内置浏览器自动化能力，使 Cline 能够自主浏览网页、读取文档、获取 API 信息。当遇到不熟悉的库或 API 时，Cline 可以主动上网查找文档并学习，显著提升了自主解决新问题的能力。

## 技术亮点

- **Plan/Act 双模式设计**：支持规划模式（Plan）和执行模式（Act）的切换。Plan 模式下仅生成执行计划供用户审核，Act 模式下逐步执行并等待用户确认，兼顾了自主性和可控性
- **MCP 协议深度集成**：作为首批全面集成 Model Context Protocol 的编程智能体之一，Cline 可通过 MCP 服务器动态扩展能力边界，支持连接文件系统、数据库、API 等各类外部工具
- **常见工具链自主操作**：能够在 VS Code 环境中创建/编辑文件、执行终端命令、浏览网页、管理项目结构，覆盖多类常见软件开发工具表面
- **差分编辑而非全文件重写**：采用精确的差分编辑策略，仅修改需要变更的代码部分，避免全文件重写带来的风险，提升了编辑精度和上下文利用效率

## 与 Self-Evolve 关联

Cline 代表了 AI 编程智能体从"被动补全"向"自主规划与执行"演进的关键节点，其 MCP 协议集成和全工具链操作能力为 AI 系统自我修改代码、自我测试验证提供了完整的技术栈，是构建 Self-Evolving AI Agent 的重要基础设施。

## 参考资料

- Cline 官方网站 (https://cline.bot/)
- Cline VS Code Marketplace (https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev)
- Model Context Protocol (https://modelcontextprotocol.io/)
- Cline v3.1 更新说明 (https://cline.bot/changelog)
