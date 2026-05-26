# Self-Improving-Agent：即插即用的 Agent 自改进循环

> **2025-2026 新项目** | 2026 年 5 月发布

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/BerriAI/self-improving-agent |
| Stars | 4 |
| 主要语言 | TypeScript |
| 许可证 | MIT License |
| 创建时间 | 2026-05-05 |

## 项目简介

Self-Improving-Agent 是由 BerriAI（LiteLLM 团队）开发的轻量级 Agent 自改进框架，核心理念是"两个工具 + 一个技能"即可为任何 AI Agent 添加自改进能力。当 Agent 发现自身存在可修复的缺陷（如跳过步骤、提示词模糊、工具路由错误）时，它会自动生成改进提案（diff），经人类确认后创建 Draft PR。

该框架设计为 Agent 生态的通用适配层，原生支持 Claude Agent SDK、pi-agent-core，以及任何接受 JSON Schema 工具定义的框架（OpenAI SDK、Vercel AI SDK、LangChain 等），无需修改用户的系统提示词。

## 目录结构

```
self-improving-agent/
├── src/                 # TypeScript 源码
├── skills/              # 技能定义
├── examples/            # 使用示例
├── package.json         # NPM 包配置
└── tsconfig.json        # TypeScript 配置
```

## 核心模块分析

### 1. 双工具系统
框架提供两个核心工具：**write_improvement_proposal**（写改进提案）让 Agent 识别自身缺陷并生成代码 diff；**apply_proposal**（应用提案）在获得人类明确批准后将 diff 推送到分支并创建 PR。两个工具的描述中内置了完整的工作流和安全规则，Agent 无需额外系统提示词即可正确使用。

### 2. 多框架适配层
通过导出不同子路径实现跨框架适配：`self-improving-agent/claude` 提供 `feedbackMcp()` 返回 MCP 服务器配置；`self-improving-agent/pi` 提供标准工具数组；根路径导出通用 JSON Schema 工具定义。设计原则是"追加到现有工具列表，不触碰系统提示词"。

### 3. 四层安全防护
应用提案时触发四层安全检查：(1) 工具描述层面要求 Agent 仅在用户最近消息中明确批准后调用；(2) Schema 门控要求 `userConfirmedInThisMessage: true`；(3) `onBeforeApply` 钩子允许自定义拒绝逻辑；(4) PAT 权限限制 GitHub 操作范围。还验证文件存在性和代码片段唯一性匹配。

## 技术亮点

1. **极简集成设计**：仅需 `npm install` 和两个环境变量即可集成，不修改用户的系统提示词或现有工具链，实现了真正的"即插即用"。

2. **人机协作的改进审批流**：Agent 提案、人类审批、自动创建 PR 的三步流程，在自动化和安全性之间取得平衡。Token 仅在 clone/push 期间使用，从不持久化到 `.git/config`。

3. **框架无关的通用性**：通过标准化的 JSON Schema 工具接口，支持所有主流 Agent 框架，降低了 Self-Evolve 能力的集成门槛。

4. **回调扩展机制**：提供 `onProposed`、`onApplied`、`onBeforeApply` 三个回调钩子，支持将改进流程集成到 Slack/Discord 等通知渠道。

## 与 Self-Evolve 关联

Self-Improving-Agent 代表了 Self-Evolve 的**产品化路径**。与学术研究不同，它关注的是如何将 Agent 自改进能力以最低成本集成到现有系统中。其核心洞察是：大多数 Agent 的失败模式是可重复的（跳过步骤、模糊提示、错误路由），这些可以通过 Agent 自身生成 diff 来修复。这为 Self-Evolve 提供了一个实用的工程范式——不需要重新设计 Agent 架构，只需添加"自我诊断 + 代码修复"的闭环。人机协作的审批流程也指出了当前阶段 Self-Evolve 的合理边界：完全自主修改代码尚不可靠，但在人类监督下的自动提案-审批机制已具有实用价值。

## 参考资料

- [GitHub 仓库](https://github.com/BerriAI/self-improving-agent)
- [BerriAI/LiteLLM](https://github.com/BerriAI/litellm)
- [Claude Agent SDK 文档](https://code.claude.com/docs/en/agent-sdk/custom-tools)
