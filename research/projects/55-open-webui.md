# Open WebUI: 功能丰富的自托管 AI 平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/open-webui/open-webui |
| Star | 80k+ |
| 技术栈 | Python, SvelteKit, TypeScript, SQLite/PostgreSQL, Docker, Ollama |
| 许可证 | MIT (核心) + 商业许可 (企业版) |
| 开发者 | Open WebUI 团队 (tjbck) |

## 项目简介

Open WebUI 是一个功能丰富、用户友好的自托管 AI 平台,设计为完全离线运行。它支持 Ollama 和 OpenAI 兼容 API 等多种 LLM 运行器,内置 RAG 推理引擎,提供文档检索、语音/视频通话、图像生成、Python 函数调用等丰富功能。作为目前最活跃的开源 AI 前端项目之一,Open WebUI 已成为本地部署 AI 的首选方案。

## 目录结构

```
open_webui__open_webui/
├── backend/                 # Python 后端
│   └── open_webui/
│       ├── main.py          # 应用入口
│       ├── routers/         # API 路由
│       ├── models/          # 数据模型
│       ├── retrieval/       # RAG 检索模块
│       ├── storage/         # 存储管理
│       ├── socket/          # WebSocket 处理
│       ├── utils/           # 工具函数
│       ├── tasks.py         # 异步任务
│       ├── config.py        # 配置管理
│       ├── functions.py     # Python 函数调用
│       ├── tools/           # 内置工具
│       ├── internal/        # 内部模块
│       ├── migrations/      # 数据库迁移
│       └── constants.py     # 常量定义
├── src/                     # SvelteKit 前端
│   ├── lib/
│   │   ├── apis/            # API 调用封装
│   │   ├── components/      # Svelte 组件
│   │   ├── stores/          # 状态管理
│   │   ├── i18n/            # 国际化
│   │   ├── utils/           # 工具函数
│   │   ├── workers/         # Web Workers
│   │   └── pyodide/         # 浏览器端 Python
│   └── routes/              # 页面路由
├── static/                  # 静态资源
├── cypress/                 # E2E 测试
├── docs/                    # 文档
├── scripts/                 # 构建脚本
└── test/                    # 测试文件
```

## 核心模块分析

### 1. RAG 检索增强生成 (backend/open_webui/retrieval/)

内置完整的 RAG 支持,可选择 9 种向量数据库 (ChromaDB, PGVector, Qdrant, Milvus, Elasticsearch, OpenSearch, Pinecone, S3Vector, Oracle 23ai)。支持多种文档提取引擎 (Tika, Docling, Document Intelligence, Mistral OCR, PaddleOCR-vl),支持通过 `#` 命令直接在聊天中引用文档或网页内容。

### 2. 模型管理与推理集成 (backend/open_webui/routers/)

统一管理 Ollama 本地模型和 OpenAI 兼容 API 远程模型,支持 LMStudio, GroqCloud, Mistral, OpenRouter 等多种后端。提供模型构建器工具,允许用户通过 Web UI 创建自定义 Ollama 模型和角色/智能体。

### 3. 插件系统 - Pipelines (backend/open_webui/functions.py + tools/)

支持通过 Pipelines 插件框架集成自定义逻辑,包括函数调用、速率限制、使用监控 (Langfuse)、实时翻译、有毒消息过滤等。同时内置原生 Python 函数调用工具,支持在工具工作区中使用纯 Python 函数扩展 LLM 能力。

### 4. 多模态交互 (src/lib/components/)

支持语音/视频通话 (集成 Whisper, Deepgram, Azure, ElevenLabs 等多种 STT/TTS 引擎)、图像生成与编辑 (DALL-E, Gemini, ComfyUI, AUTOMATIC1111)、Markdown/LaTeX 渲染等丰富的多模态交互功能。

## 技术亮点

1. **完全离线运行**: 设计为可在完全断网环境下运行,所有核心功能 (推理、RAG、语音、图像) 均可本地化部署
2. **9 种向量数据库支持**: 提供业界最广泛的向量数据库选择,适应不同规模和场景的 RAG 需求
3. **企业级认证**: 支持 LDAP/Active Directory、SCIM 2.0 自动化配置、SSO 和 OAuth,满足企业部署需求
4. **水平扩展能力**: Redis 会话管理和 WebSocket 支持,可通过负载均衡器实现多节点部署
5. **OpenTelemetry 可观测性**: 内置追踪、指标和日志支持,可集成到现有的可观测性基础设施中
6. **灵活存储选项**: 支持 SQLite (含可选加密)、PostgreSQL,以及 S3、Google Cloud Storage、Azure Blob Storage 等云存储后端
7. **PWA 渐进式 Web 应用**: 在移动设备上提供接近原生应用的使用体验

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 自托管 AI 平台架构 | 提供了完整的自托管 AI 平台参考实现,Self-Evolve 可借鉴其插件系统和模型管理架构 |
| RAG 工程实践 | 9 种向量数据库的集成方案和多种文档提取引擎的实现,为 Self-Evolve 的知识检索提供技术参考 |
| 插件扩展模式 | Pipelines 插件框架的设计模式,可应用于 Self-Evolve 的工具扩展和功能模块化 |
| 多模型统一管理 | 多种 LLM 后端的统一接口设计,Self-Evolve 可复用该模式支持多种代码生成模型 |
| 企业级特性 | 认证、权限、存储、可观测性等企业级功能的实现方案,为 Self-Evolve 的生产部署提供参考 |
