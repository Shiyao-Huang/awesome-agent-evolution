# Open WebUI: 功能丰富的自托管 AI 平台

## 基本信息
| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/open-webui/open-webui |
| Star | 124,000+ |
| 技术栈 | SvelteKit + TypeScript (前端), Python/FastAPI (后端), SQLite/PostgreSQL (数据库), Docker (部署) |
| 许可证 | Open WebUI License (含品牌保护条款) |
| 开发者 | Timothy Jaeryang Baek (tjbck) 及社区 |

## 项目简介

Open WebUI 是一个功能极其丰富的自托管 AI 平台，设计为完全离线运行，支持 Ollama 和 OpenAI 兼容 API 等多种 LLM 运行器，并内置了 RAG（检索增强生成）推理引擎。该项目以 12 万+ Star 成为 GitHub 上最受欢迎的 AI 平台项目之一，代表了自托管 AI 部署的事实标准。

Open WebUI 的核心设计哲学是"功能全面、开箱即用、完全离线"。它不只是一个聊天界面，而是一个完整的 AI 部署解决方案：涵盖用户权限管理（RBAC）、9 种向量数据库的 RAG 集成、15+ 搜索引擎的 Web 搜索注入、多模型并行对话、Pipelines 插件框架、Python 函数调用工具、语音/视频通话、图像生成编辑、企业级认证（LDAP/AD、SCIM 2.0、SSO）等数十项企业级功能。

平台采用 SvelteKit 前端 + FastAPI 后端的架构，支持 Docker 一键部署，并提供了从 pip 安装、Docker Compose 到 Kubernetes Helm 的多种部署方式。Open WebUI 的成功在于它将复杂的 AI 基础设施集成到一个统一、易用的 Web 界面中。

## 目录结构
```
open-webui/
├── backend/                 ★ Python FastAPI 后端
│   └── open_webui/          后端核心模块
├── src/                     ★ SvelteKit 前端源码
│   ├── lib/                 前端核心库与组件
│   ├── routes/              页面路由
│   └── i18n/                多语言国际化
├── static/                  静态资源
├── test/                    测试套件
├── cypress/                 E2E 测试
├── scripts/                 辅助脚本
├── docs/                    文档
├── pyproject.toml           Python 项目配置
├── docker-compose.yaml      ★ Docker 编排（含 GPU 支持）
├── Dockerfile               容器构建文件
├── svelte.config.js         Svelte 配置
├── vite.config.ts           Vite 构建配置
└── tailwind.config.js       Tailwind CSS 配置
```

## 核心模块分析

### 1. LLM 运行器集成层
原生支持 Ollama 和 OpenAI 兼容 API 两大 LLM 运行器，可无缝连接 LMStudio、GroqCloud、Mistral、OpenRouter 等第三方服务。支持多模型并行对话，用户可在同一会话中同时调用不同模型并对比输出。Model Builder 功能允许用户通过 Web UI 直接创建和导入自定义 Ollama 模型。

### 2. RAG 与知识管理
内置完整的 RAG 流水线，支持 ChromaDB、PGVector、Qdrant、Milvus、Elasticsearch、Pinecone 等 9 种向量数据库。文档可通过拖拽直接加载到对话或文档库中，使用 # 命令触发检索。支持 Tika、Docling、Document Intelligence、Mistral OCR 等多种内容提取引擎。

### 3. Pipelines 插件框架
Open WebUI Pipelines 是一个强大的插件框架，允许用户将自定义 Python 逻辑集成到平台中。通过 Pipelines 可以实现函数调用、速率限制、使用监控（Langfuse 集成）、实时翻译、消息过滤等扩展功能。Pipelines 实例作为独立的 OpenAI 兼容服务运行。

### 4. 企业级安全与认证
提供完整的基于角色的访问控制（RBAC），支持 LDAP/Active Directory 集成、SCIM 2.0 自动化用户配置、OAuth SSO。管理员可创建细粒度的用户角色和权限，控制模型创建、拉取等敏感操作的访问。支持 SQLite（可选加密）、PostgreSQL 和云存储后端（S3、GCS、Azure Blob）。

### 5. 多模态交互
集成语音输入/输出（Whisper、Deepgram、Azure STT + ElevenLabs、OpenAI TTS 等）、图像生成与编辑（DALL-E、ComfyUI、AUTOMATIC1111）、Web 浏览和搜索注入。Progressive Web App（PWA）支持提供移动端原生应用体验。

## 技术亮点
1. **完全离线运行**：设计为可在完全断网环境中运行，HF_HUB_OFFLINE=1 环境变量即可禁用所有外部模型下载
2. **9 种向量数据库**：RAG 系统支持 9 种向量数据库后端，适应不同规模和性能需求的部署场景
3. **15+ 搜索引擎**：Web 搜索集成 SearXNG、Google PSE、Brave、Kagi 等 15+ 搜索引擎
4. **Pipelines 插件框架**：可扩展的 Python 插件系统，将 Open WebUI 从聊天界面升级为可编程 AI 平台
5. **12 万+ Star**：GitHub 上最受欢迎的自托管 AI 项目，拥有庞大的社区和持续更新

## 与 Self-Evolve 关联
| 关联维度 | 分析 |
|----------|------|
| 进化循环 | Open WebUI 的 Pipelines 插件框架提供了 Self-Evolve 进化循环的可扩展执行层 |
| Prompt 工程 | Model Builder 和自定义角色/Agent 创建功能展示了 Prompt 工程的工程化实践 |
| 评估框架 | 多模型并行对话功能天然支持 A/B 对比评估，可作为 Self-Evolve 评估层的前端参考 |
| Agent 编排 | Pipelines 框架的插件编排模式和 Python 函数调用工具为 Agent 工具集成提供了参考 |
| 可观测性 | 内置的 OpenTelemetry 支持和 Redis 支持的会话管理为生产监控提供了基础设施 |

## 参考资料
- [Open WebUI GitHub](https://github.com/open-webui/open-webui)
- [Open WebUI 官方文档](https://docs.openwebui.com)
- [Open WebUI Community](https://openwebui.com)
- [Pipelines 插件框架](https://github.com/open-webui/pipelines)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/open_webui__open_webui`
- **分析命令**：`gitnexus analyze repos/open_webui__open_webui --index-only --skip-git --name OpenWebUI`
- **知识图谱规模**：待分析
- **查询语句**：`RAG pipeline, vector database, Pipelines plugin, RBAC authentication, Ollama integration, SvelteKit routing`
- **核心执行流程候选**：User Input -> Model Selection -> RAG Retrieval -> LLM Inference -> Response Stream -> Plugin Hooks
- **关键符号/文件**：`backend/` (FastAPI 后端), `src/` (SvelteKit 前端), `docker-compose.yaml` (部署配置)
- **调用关系上下文**：SvelteKit 前端通过 WebSocket/REST 与 FastAPI 后端通信，后端路由请求至 Ollama 或 OpenAI 兼容 API，RAG 模块通过向量数据库检索文档片段注入 Prompt 上下文
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程
