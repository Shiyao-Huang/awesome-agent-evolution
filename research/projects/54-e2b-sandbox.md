# E2B Code Interpreter: 安全隔离的 AI 代码执行沙箱

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/e2b-dev/code-interpreter |
| Star | 6,000+ |
| 技术栈 | Python SDK, JavaScript/TypeScript SDK, Docker (沙箱隔离), 云原生基础设施 |
| 许可证 | Apache 2.0 (SDK), E2B 商业许可 (云服务) |
| 开发者 | E2B (e2b-dev) |

## 项目简介

E2B Code Interpreter 是一个开源的安全代码执行沙箱基础设施，专为 AI 生成代码的安全运行而设计。它允许开发者在云端的安全隔离环境中运行 AI 生成的任意代码，通过 Python SDK 或 JavaScript SDK 提供简洁的沙箱创建和代码执行接口。

E2B 的核心价值在于解决了 AI Agent 执行代码时的安全性问题：通过轻量级沙箱隔离机制，确保 AI 生成的代码不会影响宿主系统。每个沙箱都是一个独立的运行环境，拥有自己的文件系统、进程空间和网络命名空间。沙箱支持有状态执行——可以在多次 `run_code` 调用之间保持变量状态，非常适合需要迭代执行的 AI 编程场景。

E2B 已成为众多 AI 编程 Agent 的核心执行基础设施，包括 OpenHands (原 OpenDevin)、Cursor、GPT Engineer 等主流 AI 编程工具均采用或参考了 E2B 的沙箱方案。

## 目录结构
```
e2b_code_interpreter/
├── python/                  ★ Python SDK 实现
├── js/                      ★ JavaScript/TypeScript SDK 实现
├── template/                ★ 沙箱镜像模板
├── readme-assets/           README 资源文件
├── CODEOWNERS               代码所有者配置
├── LICENSE                  许可证
├── Makefile                 构建脚本
├── package.json             Node.js 项目配置
├── pnpm-workspace.yaml      Monorepo 工作空间配置
└── README.md
```

## 核心模块分析

### 1. Python SDK (python/)
提供 `e2b-code-interpreter` PyPI 包，核心接口为 `Sandbox.create()` 和 `sandbox.run_code()`。支持有状态代码执行，变量在多次调用间持久化。支持安装自定义依赖包、文件上传/下载、执行结果结构化输出（文本、图表、错误信息）。

### 2. JavaScript/TypeScript SDK (js/)
提供 `@e2b/code-interpreter` NPM 包，API 设计与 Python 版保持一致。支持异步操作和 TypeScript 类型推断，执行结果包含 text、error、results 等结构化字段，便于前端集成和结果展示。

### 3. 沙箱隔离引擎
基于轻量级虚拟化技术构建的隔离运行环境。每个沙箱拥有独立的文件系统、进程树和网络栈，确保 AI 生成代码的安全执行。沙箱支持快速创建和销毁（毫秒级启动），适合高频 Agent 交互场景。

### 4. 代码解释器
内置的代码解释器支持 Python 等主流编程语言，能够处理数据可视化（matplotlib、plotly 等）、科学计算（numpy、pandas 等）和通用编程任务。执行结果支持多种格式输出，包括文本、图片、JSON 等。

### 5. Cookbook 示例集
E2B 提供了丰富的 Cookbook 示例，展示了与不同 LLM（OpenAI、Anthropic、Gemini 等）和 AI 框架（LangChain、AutoGen 等）的集成方案，为开发者提供快速上手参考。

## 技术亮点
1. **毫秒级沙箱启动**：轻量级虚拟化技术实现沙箱的快速创建和销毁，适合高频 Agent 交互
2. **有状态执行**：支持在多次 `run_code` 调用间保持变量和运行时状态，完美匹配 AI Agent 的迭代编程模式
3. **双语言 SDK**：同时提供 Python 和 JavaScript SDK，覆盖服务端和前端两大开发场景
4. **结构化结果输出**：执行结果包含 text、error、results 等结构化字段，便于下游处理和展示
5. **行业广泛采用**：被 OpenHands、Cursor、GPT Engineer 等主流 AI 编程工具采用为执行基础设施

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 进化循环 | E2B 为 Self-Evolve 的"代码生成 -> 执行 -> 验证"循环提供了安全执行层，是进化循环中执行环节的基础设施 |
| Agent 编排 | 作为 Agent 执行代码的标准沙箱方案，E2B 可集成到 Self-Evolve 的 Agent 编排框架中作为代码执行后端 |
| 评估框架 | 沙箱提供了隔离的执行环境，确保评估过程中代码执行的安全性和可重复性 |
| 安全性 | E2B 的沙箱隔离机制是 Self-Evolve 自我进化过程中保障系统安全的关键组件 |
| 可扩展性 | 双语言 SDK 和云原生架构支持 Self-Evolve 在不同技术栈中集成代码执行能力 |

## 参考资料
- [E2B GitHub](https://github.com/e2b-dev/code-interpreter)
- [E2B 官方文档](https://e2b.dev/docs)
- [E2B Cookbook](https://github.com/e2b-dev/e2b-cookbook)
- [E2B 官网](https://e2b.dev)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/e2b__code_interpreter`
- **分析命令**：`gitnexus analyze repos/e2b__code_interpreter --index-only --skip-git --name E2B`
- **知识图谱规模**：待分析
- **查询语句**：`sandbox creation, code execution, stateful execution, isolation mechanism, SDK interface`
- **核心执行流程候选**：Sandbox.create() -> run_code() -> Parse Results -> Next Iteration / Cleanup
- **关键符号/文件**：`python/` (Python SDK), `js/` (JS SDK), `template/` (沙箱模板)
- **调用关系上下文**：SDK 通过 API 调用 E2B 云端沙箱服务，沙箱内部执行代码解释器，结果通过结构化格式返回
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
