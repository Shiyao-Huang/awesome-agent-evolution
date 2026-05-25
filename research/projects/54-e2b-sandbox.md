# E2B: AI 代码安全执行沙箱

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/e2b-dev/e2b |
| Star | 7k+ |
| 技术栈 | Python, TypeScript, gRPC, Firecracker |
| 许可证 | MIT |
| 开发者 | E2B (e2b.dev) |
| 产品 | [E2B Platform](https://e2b.dev) |

## 项目简介

E2B 是一个开源的**AI 代码安全执行基础设施**，允许 AI Agent 在云端的隔离沙箱中安全地运行生成的代码。提供 Python 和 JavaScript SDK，支持文件系统操作、进程管理和代码解释器。

核心理念：**安全沙箱 = AI 代码执行的信任基础** — 通过 Firecracker 微虚拟机实现毫秒级启动的隔离执行环境。

## 目录结构

```
e2b/
├── packages/                   # ★ SDK 包
│   ├── python/                 # Python SDK
│   │   └── e2b/               # 核心模块
│   │       ├── sandbox/        # ★ 沙箱控制
│   │       ├── code_interpreter/ # ★ 代码解释器
│   │       └── file_interpreter/ # 文件解释器
│   └── js/                     # JavaScript SDK
│       └── packages/
│           ├── code-interpreter/ # ★ JS 代码解释器
│           └── sandbox/         # JS 沙箱控制
├── libs/                       # 共享库
├── scripts/                    # 脚本
├── supabase/                   # 数据库
└── api/                        # API 服务
```

## 核心模块分析

### 1. 沙箱架构

E2B 使用 Firecracker 微虚拟机实现沙箱：

```
AI Agent
    ↓
[SDK (Python/JS)]
    ↓ gRPC
[Orchestrator]
    ↓
[Firecracker VM] ← 隔离执行环境
    ├── 文件系统
    ├── 进程管理
    └── 网络控制
```

### 2. Code Interpreter

代码解释器提供：
- Python/JS 代码执行
- 支持安装包
- 数据可视化（Matplotlib/Plotly）
- 变量持久化

```python
from e2b_code_interpreter import Sandbox

sbx = Sandbox()
execution = sbx.run_code('x = 1 + 1; x')
print(execution.text)  # 2
```

### 3. 文件操作

沙箱支持完整的文件系统操作：
- 读写文件
- 目录管理
- 权限控制

### 4. 进程管理

在沙箱中运行长时间进程：
- 启动/停止进程
- 进程输出监控
- 后台服务管理

## 技术亮点

1. **Firecracker 沙箱**：基于微虚拟机的安全隔离，毫秒级启动
2. **双 SDK**：Python + JavaScript SDK 支持
3. **代码解释器**：内置代码执行和数据可视化
4. **云端执行**：无需本地环境，API Key 即可使用
5. **AI Agent 集成**：专为 AI 代码执行场景设计

## 与 Self-Evolve 关联

| 维度 | E2B 贡献 |
|------|---------|
| 沙箱 | **Firecracker 微虚拟机**安全执行环境 |
| 代码执行 | AI 生成代码的安全执行基础设施 |
| 集成 | Python/JS SDK 方便集成到 Agent 系统 |
| 启示 | Self-Evolve 中代码进化需要安全执行环境，E2B 提供了参考架构 |

## 参考资料

- [E2B GitHub](https://github.com/e2b-dev/e2b)
- [E2B 文档](https://e2b.dev/docs)
- [E2B Platform](https://e2b.dev)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/e2b__code_interpreter`（指向 `repos/e2b__code_interpreter` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/e2b__code_interpreter --index-only --skip-git --name E2B`。
- **知识图谱规模**：待分析。
- **查询语句**：`sandbox firecracker code interpreter execution file process`。
- **核心执行流程候选**：
  - SDK → gRPC → Orchestrator → Firecracker VM → Execute Code
- **关键符号/文件**：
  - `sandbox/`（`packages/python/e2b/sandbox/`）
  - `code_interpreter/`（`packages/python/e2b/code_interpreter/`）
- **调用关系上下文**：
  - SDK 通过 gRPC 与编排器通信。
  - 编排器管理 Firecracker 虚拟机的生命周期。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
