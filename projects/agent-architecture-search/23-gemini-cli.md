# Gemini CLI: Google 官方终端 AI Agent

> GitHub: https://github.com/google-gemini/gemini-cli
> Stars: 新项目 | 语言: TypeScript (Node.js)
> 许可证: Apache 2.0
> 机构: Google
> 本地: `repos/google_gemini__gemini_cli/`

---

## 核心定位

Google 官方推出的终端 AI Agent，将 Gemini 模型能力直接带入命令行。终端优先、可扩展的 AI Agent 工具，与 Claude Code、Claw Code 构成 2026 年 CLI Agent 竞争格局。

## 技术架构

### Monorepo 结构 (npm workspaces)

```
packages/cli       — 终端 UI、输入处理、显示渲染
packages/core      — 后端逻辑、Gemini API 编排、提示构建、工具执行
packages/a2a-server — 实验性 Agent-to-Agent 服务器
packages/sdk       — 编程 SDK
packages/devtools  — 开发者工具（网络/控制台检查器）
packages/vscode-ide-companion — VS Code 扩展
packages/test-utils — 测试工具
```

### 核心技术栈

- **运行时**: Node.js >= 20.0.0（推荐 ~20.19.0）
- **语言**: TypeScript
- **UI 框架**: React (Ink for CLI rendering)
- **测试**: Vitest
- **打包**: esbuild
- **Lint/Format**: ESLint, Prettier

### 关键特性

1. **1M Token 上下文窗口** — Gemini 模型的原生优势
2. **ReAct 循环** — 思考-行动-观察的迭代推理
3. **MCP 支持** — Model Context Protocol 集成
4. **多包架构** — 模块化设计，可独立使用 SDK
5. **Agent-to-Agent** — 实验性的 A2A 协议支持
6. **VS Code 集成** — IDE companion 扩展

## 开发规范

- Google CLA 签署要求
- Conventional Commits 标准
- Apache 2.0 许可证头强制（ESLint 执行）
- Preflight 检查: clean → install → build → lint → typecheck → test

## Self Evolve 关联

### 直接关联

- **CLI Agent 作为进化载体**: 终端 Agent 是自进化能力最直接的应用场景
- **A2A 协议**: Agent-to-Agent 通信可能是多 Agent 自进化的基础设施
- **MCP 生态**: 工具协议的标准化为 Agent 技能进化提供接口

### 间接关联

- **开源 Agent 三巨头**: Claude Code + Gemini CLI + Claw Code 构成 2026 CLI Agent 格局
- **模型-工具协同进化**: Gemini 模型与 CLI 工具的共同迭代

## 与同类项目对比

| 维度 | Gemini CLI | Claude Code | Claw Code |
|------|-----------|-------------|-----------|
| **语言** | TypeScript | TypeScript | Rust |
| **模型** | Gemini | Claude | Claude |
| **上下文** | 1M tokens | 200K tokens | 取决于 API |
| **开源** | Apache 2.0 | 部分开源 | MIT |
| **A2A** | 实验性 | 无 | 规划中 |
| **MCP** | 支持 | 支持 | 支持 |

## 技术亮点

1. **React-based CLI UI** — 使用 Ink 框架实现富终端界面
2. **SDK 可编程** — 可将 Gemini CLI 能力嵌入其他应用
3. **DevTools 集成** — 内置网络/控制台检查器
4. **Monorepo 工程化** — npm workspaces + 清晰的包边界

---

*分析日期: 2026-05-22 | 分析者: Researcher-1*
