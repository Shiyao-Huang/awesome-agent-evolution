# Open WebUI: 自托管 AI 平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/open-webui/open-webui |
| Star | 124k+ |
| 技术栈 | Python, Svelte, Docker, Ollama |
| 许可证 | MIT |
| 开发者 | Open WebUI Team |
| 产品 | [Open WebUI](https://docs.openwebui.com/) |

## 项目简介

Open WebUI 是一个功能丰富的**自托管 AI 平台**，设计为完全离线运行。支持 Ollama 和 OpenAI 兼容 API 等多种 LLM 运行器，内置 RAG 推理引擎。

核心理念：**完全离线 + 自托管 = 私有化 AI 平台** — 提供类似 ChatGPT 的体验但完全在用户控制之下。

## 目录结构

```
open-webui/
├── backend/                    # ★ Python 后端
│   ├── open_webui/            # 核心模块
│   │   ├── apps/              # 应用
│   │   ├── routers/           # API 路由
│   │   ├── models/            # 数据模型
│   │   ├── utils/             # 工具函数
│   │   ├── internal/          # 内部模块
│   │   └── config.py          # 配置
│   └── dev.sh                 # 开发脚本
├── src/                        # ★ Svelte 前端
│   ├── lib/                   # 组件库
│   │   ├── components/        # UI 组件
│   │   ├── apis/              # API 调用
│   │   ├── utils/             # 工具函数
│   │   └── stores/            # 状态管理
│   ├── routes/                # 路由
│   └── app.html               # 入口
├── kubernetes/                 # K8s 部署
└── docker-compose.yaml        # Docker 部署
```

## 核心模块分析

### 1. 多 LLM 集成

Open WebUI 支持多种 LLM 后端：
- **Ollama**：本地模型运行
- **OpenAI API**：GPT 系列
- **兼容 API**：LMStudio、GroqCloud、Mistral、OpenRouter 等

### 2. RAG 引擎

内置检索增强生成（RAG）支持：
- 9 种向量数据库选择
- 多种内容提取引擎（Tika、Docling、Mistral OCR 等）
- 直接在聊天中加载文档

### 3. 工具/插件系统

可扩展的工具系统：
- 原生 Python 函数调用工具
- BYOF（Bring Your Own Function）
- 工具工作空间和代码编辑器

### 4. 权限和用户组

企业级权限管理：
- 管理员创建详细用户角色
- 细粒度权限控制
- 用户组管理

### 5. 高级功能

- **语音/视频通话**：多 STT/TTS 引擎集成
- **模型构建器**：通过 Web UI 创建自定义模型
- **Artifact 存储**：键值存储 API
- **PWA 支持**：移动端原生体验
- **Markdown/LaTeX**：完整渲染支持

## 技术亮点

1. **124k+ Stars**：GitHub 上最受欢迎的自托管 AI 平台
2. **完全离线**：无需网络即可运行
3. **多 LLM**：Ollama + OpenAI + 兼容 API 统一接口
4. **RAG 内置**：9 种向量数据库 + 多种文档提取引擎
5. **插件生态**：Python 函数工具 + Community 集成
6. **企业功能**：权限、分组、持久化存储

## 与 Self-Evolve 关联

| 维度 | Open WebUI 贡献 |
|------|----------------|
| 平台 | **自托管 AI 平台**的完整参考实现 |
| 多 LLM | 统一接口支持多种 LLM 后端 |
| RAG | 内置检索增强生成引擎 |
| 插件 | 可扩展的工具/插件系统 |
| 启示 | Open WebUI 的多 LLM 集成和插件架构可用于 Self-Evolve 的 LLM 接入层设计 |

## 参考资料

- [Open WebUI GitHub](https://github.com/open-webui/open-webui)
- [Open WebUI 文档](https://docs.openwebui.com/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/open_webui__open_webui`（指向 `repos/open_webui__open_webui` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/open_webui__open_webui --index-only --skip-git --name OpenWebUI`。
- **知识图谱规模**：待分析。
- **查询语句**：`model rag tool plugin ollama openai user permission`。
- **核心执行流程候选**：
  - User Chat → Router → LLM Backend → RAG → Response
  - Tool System → Python Function → Execute → Result
- **关键符号/文件**：
  - `routers/`（`backend/open_webui/routers/`）
  - `models/`（`backend/open_webui/models/`）
  - `components/`（`src/lib/components/`）
- **调用关系上下文**：
  - Svelte 前端通过 API 与 Python 后端通信。
  - 后端统一管理 Ollama/OpenAI 等多个 LLM 后端。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
