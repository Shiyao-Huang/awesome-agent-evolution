# Goose — 可扩展 AI 智能体

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/block/goose |
| Stars | 10,000+ |
| 主要语言 | Rust |
| 许可证 | MIT License |

## 项目简介

Goose（代号 codename goose）是由 Block（前 Square 公司，Jack Dorsey 创立）开发的开源可扩展 AI 智能体，能够自主执行计算机上的各类任务。与传统的代码补全工具不同，Goose 能够将 LLM 的输出转化为实际的行动——编写代码、运行命令、操作文件系统、浏览网页等。它采用 Rust 构建以实现高性能和可移植性，支持 15+ 种 LLM 提供商，并通过 70+ 个扩展（Extension）实现能力的无限扩展。Goose 于 2025 年 1 月以 MIT 许可证开源后迅速获得广泛关注。

## 目录结构

```
goose/
├── crates/                  # Rust 核心模块
│   ├── goose/               # 核心 Agent 引擎
│   │   ├── src/
│   │   │   ├── agent.rs     # 智能体主循环
│   │   │   ├── session.rs   # 会话管理
│   │   │   └── flow.rs      # 工作流编排
│   │   └── Cargo.toml
│   ├── goose-mcp/           # MCP 协议实现
│   ├── goose-cli/           # 命令行界面
│   ├── goose-server/        # HTTP API 服务器
│   └── goose-extensions/    # 内置扩展
├── extensions/              # 扩展目录
│   ├── developer/           # 开发者工具扩展
│   ├── browser/             # 浏览器自动化扩展
│   ├── filesystem/          # 文件系统扩展
│   └── ...                  # 70+ 其他扩展
├── bindings/                # 语言绑定（Python 等）
├── ui/                      # 桌面 UI（Tauri）
├── examples/                # 使用示例
├── tests/                   # 测试套件
└── Cargo.toml
```

## 核心模块分析

### 1. 智能体引擎 (`crates/goose/`)
Goose 的核心智能体引擎，用 Rust 实现了完整的智能体循环（agent loop）。引擎负责接收用户任务、调用 LLM 生成执行计划、选择并调用合适的扩展（Extension）来执行具体操作、收集执行结果并反馈给 LLM 进行下一轮决策。支持多步推理和任务分解，能够将复杂任务拆解为可执行的子步骤。

### 2. MCP 协议层 (`crates/goose-mcp/`)
实现了 Model Context Protocol 的完整支持，使 Goose 能够通过 MCP 兼容的工具服务器动态扩展能力。MCP 层提供了标准化的工具注册、调用和结果返回机制，任何实现了 MCP 协议的工具服务都可以被 Goose 直接使用，构建了开放的智能体工具生态。

### 3. 扩展系统 (`extensions/`)
Goose 的差异化核心竞争力——提供了 70+ 个内置扩展，覆盖文件操作、终端命令执行、浏览器自动化、代码编辑、Git 操作、数据库交互等开发工作流的方方面面。每个扩展都是独立的模块，用户可以根据需要启用或禁用，也可以自行开发新的扩展来定制 Goose 的能力边界。

## 技术亮点

- **Rust 原生高性能架构**：核心引擎采用 Rust 构建，在保证内存安全和线程安全的同时实现了出色的性能和低资源占用，支持在本地机器上高效运行复杂的智能体工作流
- **MCP 驱动的可扩展生态**：基于 Model Context Protocol 构建开放的扩展生态，70+ 个内置扩展覆盖开发全流程，任何 MCP 兼容工具都可以即插即用，实现了智能体能力的无限扩展
- **自主行动而非被动建议**：与传统的代码补全或聊天式 AI 助手不同，Goose 能够直接执行文件操作、运行终端命令、浏览网页等实际操作，将 LLM 输出转化为真实世界的行动
- **多提供商灵活接入**：支持 Anthropic、OpenAI、Google、本地模型等 15+ 种 LLM 提供商，用户可自由选择和切换模型，同时保持扩展和工作流的一致性

## 与 Self-Evolve 关联

Goose 的可扩展智能体架构直接展示了 AI 系统如何通过 MCP 工具协议动态扩展自身能力边界，其"LLM 决策 + 扩展执行"的架构模式为构建能自主获取新工具、学习新技能并持续进化的 Self-Evolving AI Agent 提供了系统设计参考。

## 参考资料

- Block 官方博客: Introducing codename goose (https://block.xyz/inside/block-open-source-introduces-codename-goose)
- Goose GitHub (https://github.com/block/goose)
- Gradient Flow: Can a Single Agent Automate 90% of Tasks (https://gradientflow.substack.com/p/can-a-single-agent-automate-90-of)
- OSSInsight: Rust AI Agent Infrastructure Trends 2026 (https://ossinsight.io/blog/rust-ai-agent-infrastructure-2026)
