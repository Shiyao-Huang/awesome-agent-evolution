# Ollama: 本地大语言模型推理运行时

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/ollama/ollama |
| Star | 140,000+ |
| 技术栈 | Go, C/C++, CMake, llama.cpp, MLX, GGUF |
| 许可证 | MIT |
| 开发者 | Ollama 团队 (Jeffrey Morgan 等) |

## 项目简介

Ollama 是目前最流行的本地大语言模型（LLM）推理运行时，为用户提供了一键式模型下载、管理和推理服务。项目以 Go 语言编写核心服务层，底层基于 llama.cpp（Georgi Gerganov 创立的 ggml 项目）实现高性能推理，在 macOS 上还集成了 Apple MLX 框架以充分利用 Apple Silicon 的 GPU 加速能力。Ollama 的核心价值在于将复杂的模型量化、GPU 调度、内存管理等底层细节完全封装，让用户只需一条命令 `ollama run gemma3` 即可在本地运行最先进的开源模型。

项目的架构设计采用了客户端-服务器模式：`ollama serve` 启动一个常驻后台的 API 服务器（默认端口 11434），提供兼容 OpenAI 风格的 REST API；CLI 工具和官方 Python/JavaScript SDK 通过 HTTP 与服务器通信。服务器负责模型加载、GPU/CPU 调度、KV Cache 管理、并发请求调度等核心功能。Runner 子系统通过进程隔离的方式执行实际的推理计算，确保主服务的稳定性。Ollama 还提供了 Modelfile 机制，允许用户基于基础模型创建自定义变体（设定系统提示、参数、模板等），类似于 Dockerfile 的概念。

Ollama 的生态极为庞大，官方库（ollama.com/library）托管了 Llama、Gemma、Mistral、Qwen、DeepSeek、Phi 等主流开源模型，社区集成了 100+ 客户端界面、50+ SDK/库和几乎所有主流 AI 编程工具（Claude Code、Copilot、Codex、Cline 等）。项目支持 macOS、Windows、Linux 三大平台，提供 Docker 镜像和各平台原生安装包。

## 目录结构

```
ollama__ollama/
├── main.go                    # ★ 入口文件
├── cmd/                       # ★ CLI 命令层
│   ├── cmd.go                     # 根命令定义
│   ├── start.go                   # 服务启动命令
│   ├── interactive.go             # 交互式聊天
│   ├── runner/                    # 模型运行器命令
│   ├── tui/                       # 终端 UI
│   └── launch/                    # 应用启动集成
├── server/                    # ★ 核心服务器
│   ├── routes.go                  # API 路由定义
│   ├── sched.go                   # ★ 请求调度器
│   ├── model.go                   # 模型管理
│   ├── create.go                  # Modelfile 创建
│   ├── images.go                  # 镜像管理
│   ├── auth.go                    # 认证
│   ├── prompt.go                  # 提示词处理
│   └── internal/                  # 内部辅助模块
├── llm/                       # ★ LLM 推理层
│   ├── server.go                  # 推理服务器
│   ├── status.go                  # 状态管理
│   ├── llm_darwin.go             # macOS 特定实现
│   ├── llm_linux.go              # Linux 特定实现
│   └── llm_windows.go            # Windows 特定实现
├── runner/                    # ★ 进程隔离 Runner
│   ├── runner.go
│   ├── llamarunner/               # llama.cpp Runner
│   └── ollamarunner/              # Ollama 原生 Runner
├── ml/                        # ★ 机器学习后端
│   ├── backend.go                 # 后端抽象
│   ├── device.go                  # 设备管理
│   └── nn/                        # 神经网络基础
├── model/                     # ★ 模型处理
│   ├── model.go                   # 模型加载
│   ├── parsers/                   # GGUF 解析器
│   ├── renderers/                 # 渲染器
│   ├── models/                    # 模型定义
│   └── input/                     # 输入处理
├── api/                       # Go 客户端 SDK
│   ├── client.go
│   └── types.go
├── template/                  # ★ Prompt 模板引擎
│   ├── template.go
│   └── *.gotmpl                   # 各模型模板文件
├── openai/                    # OpenAI 兼容层
├── anthropic/                 # Anthropic 兼容层
├── harmony/                   # Harmony 协议支持
├── discover/                  # GPU/硬件检测
│   ├── gpu.go
│   ├── cpu_linux.go
│   └── cpu_windows.go
├── kvcache/                   # KV Cache 管理
├── tokenizer/                 # 分词器
├── convert/                   # 模型转换工具
│   └── sentencepiece/             # SentencePiece 支持
├── auth/                      # 认证模块
├── envconfig/                 # 环境配置
├── format/                    # 输出格式化
├── fs/                        # 文件系统工具
│   ├── ggml/                      # GGML 格式支持
│   └── gguf/                      # GGUF 格式支持
├── app/                       # 桌面应用
│   ├── cmd/                       # 应用命令
│   ├── ui/                        # 应用 UI
│   ├── darwin/                    # macOS 特定
│   └── updater/                   # 自动更新
├── tools/                     # 工具调用支持
├── integration/               # 集成测试
└── docs/                      # 文档
```

## 核心模块分析

### 1. 服务器与请求调度 (`server/`)

server 包是 Ollama 的核心，实现了 HTTP API 服务和请求调度系统。`routes.go` 定义了完整的 REST API 端点，包括 `/api/chat`、`/api/generate`、`api/create`、`api/pull` 等。`sched.go` 实现了请求调度器，负责管理 GPU 显存分配、模型加载/卸载、并发请求排队等关键逻辑。调度器采用"懒加载"策略——模型在首次请求时加载到 GPU，空闲一段时间后自动卸载以释放显存。模型管理模块（`model.go`、`images.go`）处理 GGUF 文件的解析、分层存储和增量下载。`create.go` 实现了 Modelfile 解析和自定义模型构建，支持 FROM、SYSTEM、PARAMETER、TEMPLATE 等指令。

### 2. LLM 推理后端 (`llm/`, `runner/`, `ml/`)

Ollama 的推理层采用了进程隔离架构。`llm/server.go` 管理推理子进程的生命周期，通过 IPC 与 Runner 进程通信。Runner 子系统（`runner/`）包含两个实现：`llamarunner` 封装 llama.cpp 的推理能力，`ollamarunner` 是 Ollama 自研的推理引擎。`ml/` 包提供了硬件抽象层，统一管理 CPU、CUDA、ROCm、Metal 等不同计算后端。`device.go` 实现了设备发现和能力查询，`nn/` 包含神经网络基础算子。这种分层设计使得 Ollama 能够灵活切换底层推理引擎，同时保持上层 API 的稳定性。

### 3. 模型处理与转换 (`model/`, `convert/`, `fs/gguf/`)

模型处理流水线是 Ollama 技术栈的关键环节。`model/parsers/` 实现 GGUF 文件格式的解析，提取模型权重、元数据和词汇表信息。`model/renderers/` 负责将模型特定的聊天模板渲染为标准格式。`convert/` 目录包含模型转换工具，支持将 HuggingFace 格式的模型（含 SentencePiece 分词器）转换为 GGUF 格式。`fs/gguf/` 提供了 GGUF 文件系统的底层操作，支持分块读写和内存映射，这对于处理大型模型文件（数十 GB）至关重要。

### 4. Prompt 模板引擎 (`template/`)

Ollama 的模板引擎是其用户友好性的关键技术。不同开源模型使用不同的聊天格式（如 ChatML、Alpaca、Llama2-Chat 等），模板引擎通过 Go template 文件（`.gotmpl`）定义每种模型的提示格式，并配以 JSON 配置文件描述模板元数据。`template.go` 实现了模板的解析、缓存和渲染逻辑，确保用户在与不同模型交互时无需关心底层格式差异。当前支持 20+ 种模型模板，包括 Gemma、Llama3、Mistral、Qwen、DeepSeek 等。

### 5. 硬件检测与 GPU 调度 (`discover/`, `kvcache/`)

`discover/` 模块负责检测运行环境的硬件配置，包括 GPU 型号、显存大小、CUDA/ROCm 可用性等。在 macOS 上通过 Metal 框架检测 Apple Silicon GPU，在 Linux 上检测 NVIDIA（通过 CUDA）和 AMD（通过 ROCm）显卡，在 Windows 上检测 DirectX 兼容设备。`kvcache/` 包管理推理过程中的 KV Cache，这是 LLM 推理性能的核心——合理的 KV Cache 管理可以显著降低重复计算的内存占用和延迟。

## 技术亮点

1. **进程隔离架构**：推理计算在独立 Runner 子进程中执行，主服务进程仅负责调度和 API 服务，确保推理崩溃不会影响整体服务稳定性
2. **GGUF 格式生态**：基于 GGUF（GPT-Generated Unified Format）实现模型分发，支持多种量化级别（Q4_0、Q5_1、Q8_0 等），在模型大小和推理质量之间灵活权衡
3. **跨平台 GPU 支持**：统一抽象了 CUDA（NVIDIA）、ROCm（AMD）、Metal（Apple Silicon）三大 GPU 平台，自动检测并选择最优后端
4. **Modelfile 自定义机制**：类似 Dockerfile 的声明式模型定制，支持 FROM 继承、SYSTEM 提示、PARAMETER 调参、TEMPLATE 定义，实现了模型复用的标准化
5. **OpenAI/Anthropic 兼容层**：在 `/v1/` 路径下提供 OpenAI API 兼容接口，在 `/anthropic/` 路径下提供 Anthropic API 兼容接口，使 Ollama 可无缝替换云端 API
6. **MLX Apple Silicon 加速**：在 macOS 上集成 MLX 框架，充分利用 Apple Silicon 的统一内存架构，实现高效的 CPU-GPU 协同推理
7. **Harmony 协议集成**：支持 Harmony 协议用于模型间的协作和编排，为多模型 Agent 系统提供了基础通信层

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 本地推理基础设施 | Ollama 为 Self-Evolve 提供了零依赖的本地 LLM 推理能力，是自进化 Agent 进行代码生成、测试、反思的认知引擎基础 |
| 模型管理 | Modelfile 机制展示了如何通过声明式配置管理模型变体，对 Self-Evolve 的 Prompt 版本管理和模型适配有参考价值 |
| GPU 调度 | 请求调度器和 KV Cache 管理展示了如何在资源受限环境下高效运行多个推理任务，对 Agent 的推理资源管理有启发 |
| API 兼容层 | OpenAI/Anthropic 兼容 API 设计为 Self-Evolve 实现云端/本地推理的无缝切换提供了标准化方案 |
| 模板引擎 | Prompt 模板系统展示了如何为不同模型适配统一的交互接口，对 Self-Evolve 的多模型适配层设计有指导意义 |
| 生态集成 | 140k+ Star 和庞大的工具生态证明了本地推理方案的巨大需求，Self-Evolve 可直接复用 Ollama 作为推理后端 |

## 参考资料

- [Ollama 官方网站](https://ollama.com)
- [Ollama GitHub 仓库](https://github.com/ollama/ollama)
- [Ollama 文档](https://docs.ollama.com)
- [Ollama REST API 参考](https://docs.ollama.com/api)
- [Ollama Modelfile 参考](https://docs.ollama.com/modelfile)
- [Ollama CLI 参考](https://docs.ollama.com/cli)
- [llama.cpp 项目](https://github.com/ggml-org/llama.cpp)
- [GGUF 格式规范](https://github.com/ggml-org/ggml/blob/master/docs/gguf.md)

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/ollama__ollama`
- **分析命令**：`gitnexus analyze repos/ollama__ollama --index-only --skip-git --name Ollama`
- **知识图谱规模**：待分析
- **查询语句**：`sched scheduler request routing; runner subprocess inference; gguf model parser; template render prompt; discover gpu detect; kvcache memory management`
- **核心执行流程候选**：`ollama run` -> `cmd/interactive.go` -> `server/routes.go` -> `server/sched.go` -> `llm/server.go` -> `runner/` -> `ml/backend.go` -> 推理计算
- **关键符号/文件**：`server/sched.go`（调度器）、`server/routes.go`（API 路由）、`llm/server.go`（推理服务）、`runner/runner.go`（Runner 管理）、`ml/backend.go`（计算后端）、`model/model.go`（模型加载）、`template/template.go`（模板引擎）、`discover/gpu.go`（GPU 检测）、`fs/gguf/`（GGUF 解析）
- **调用关系上下文**：CLI 入口 -> API 服务器 -> 请求调度 -> Runner 进程 -> 计算后端 -> GPU/CUDA；模型管理 -> GGUF 解析 -> 权重加载 -> 内存映射
- **架构结论**：该图谱结果用于把报告中的"推理运行时 / 进程隔离 / GPU 调度 / 模板引擎 / 模型管理"定位到具体符号、文件和流程
