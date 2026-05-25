# Iterate：自主进化的编程 Agent

> **2025-2026 新项目** | 2026 年 3 月发布

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/GrayCodeAI/iterate |
| Stars | 6 |
| 主要语言 | Go |
| 许可证 | MIT License |
| 创建时间 | 2026-03-25 |

## 项目简介

Iterate 是一个用 Go 编写的自主进化编程 Agent，其核心特点是"拥有自己的代码仓库"。它每 12 小时执行一次完整的自我改进循环：读取自身源代码、日志和社区 Issue，决定需要改进的内容，构建修复并运行测试，测试通过则提交、失败则回滚并记录。该项目通过 GitHub Actions 实现无人值守的持续进化，所有代码修改均由 Agent 自身完成。

项目提供了丰富的交互式 REPL 界面，支持项目管理、Git 操作、内存管理和进化控制等多类命令，并将进化过程通过 GitHub Pages 自动发布为可观测的在线日志。

## 目录结构

```
iterate/
├── cmd/iterate/          # 入口点、REPL、配置加载
├── internal/
│   ├── agent/            # Agent 池 + 变异测试
│   ├── commands/         # 模块化命令注册系统
│   ├── community/        # GitHub Issues + Discussions
│   ├── evolution/        # 三阶段进化引擎
│   ├── social/           # 社交互动引擎
│   ├── ui/               # 终端 UI
│   └── util/             # 工具函数
├── skills/               # 结构化技能文件
│   ├── evolve/           # 自我修改规则
│   ├── self-assess/      # 代码库评估
│   └── ...
├── memory/               # 学习记忆
├── scripts/              # 进化/社交/构建脚本
└── docs/                 # GitHub Pages 站点
```

## 核心模块分析

### 1. 三阶段进化引擎（internal/evolution/）
实现了 Plan -> Implement -> Communicate 的循环。每个周期 Agent 首先读取自身源码、日志和社区反馈来规划改进，然后为每个任务分配独立 Agent 实现修改，运行 `go build` 和 `go test` 验证，最后提交代码并发布进化日志。整个循环由 GitHub Actions 每 12 小时自动触发。

### 2. 模块化命令系统（internal/commands/）
采用注册式架构，将所有 REPL 命令按功能域（Agent 管理、代码开发、Git 操作、分析、内存、进化、会话）解耦到独立模块中。每个命令模块有清晰的类型定义和注册入口，支持 Agent 动态发现和使用。

### 3. 技能系统与记忆（skills/ + memory/）
通过 SKILL.md 文件定义结构化技能（包括自我修改、自我评估、沟通、研究等），Agent 可以读取和遵循这些技能规则。记忆系统包含追加式学习日志（learnings.jsonl）和综合知识摘要（active_learnings.md），支持跨进化周期的知识积累。

## 技术亮点

1. **完全自主的代码所有权**：Agent 不仅编写代码，而是真正"拥有"整个仓库——从 Bug 修复到新功能开发均由 Agent 自主决策和执行，人类仅通过 Issue 提供建议。

2. **GitHub Actions 驱动的进化心跳**：通过五个定时工作流（进化、社交、知识综合、部署、CI）构成完整的自主进化生命周期，实现无人值守的持续迭代。

3. **多层安全防护**：进化过程中构建失败会自动回滚并记录日志，确保代码库始终处于可工作状态。安全检查模块对所有修改进行验证。

4. **社交学习机制**：Agent 能读取和回应 GitHub Issues 与 Discussions，将社区反馈纳入进化决策，实现了从封闭自我进化到开放式协作进化的扩展。

## 与 Self-Evolve 关联

Iterate 展示了 Self-Evolve 的**终极形态**——一个完全自主编程的 Agent。它不仅改进自身的技能或提示词，而是直接修改自己的源代码，这是代码级自我进化的最纯粹实现。其 GitHub Actions 驱动的进化心跳机制提供了一种工程化的 Self-Evolve 范式：定时触发 -> 读取状态 -> 决策改进 -> 执行验证 -> 提交/回滚 -> 发布日志。技能系统和记忆系统的结合展示了 Self-Evolve 的关键要素——Agent 需要理解自身能力、记住历史经验、并根据反馈持续调整。社区反馈驱动的进化方向尤其值得借鉴，它暗示未来的 Self-Evolve 系统不应仅依靠内部信号，还应整合外部反馈来引导进化方向。

## 参考资料

- [GitHub 仓库](https://github.com/GrayCodeAI/iterate)
- [实时进化日志](https://graycodeai.github.io/iterate/)
- [iteragent SDK](https://github.com/GrayCodeAI/iteragent)
