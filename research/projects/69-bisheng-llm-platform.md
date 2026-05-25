# Bisheng: 开源 LLM 应用开发平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/dataelement/bisheng |
| Star | 7,800+ |
| 技术栈 | Python, FastAPI, React, LangChain, Docker, Milvus, Elasticsearch, Celery, SQLAlchemy |
| 许可证 | Apache License 2.0 |
| 开发者 | DataElement (数衍科技) |

## 项目简介

毕昇（Bisheng）是一款面向企业场景的开源 LLM 应用 DevOps 平台，以活字印刷术发明者"毕昇"命名，寓意为智能应用的广泛落地提供有力支撑。该项目已被大量行业领先机构和世界 500 强企业采用，是目前国内最具影响力的开源 LLM 应用平台之一，同时提供中文、英文和日文三种语言的文档和界面。

平台的核心亮点是其独创的 Bisheng Workflow 引擎：与同类产品依赖 bot 调用或分离 chatflow/workflow 模块不同，Bisheng 在单一框架内实现所有任务编排。该工作流引擎支持循环、并行、批处理、条件逻辑等复杂控制结构，并实现了 Human-in-the-loop（人机协作）机制，允许用户在执行过程中（包括多轮对话）进行干预和反馈。操作直观如画流程图——画圈即循环，对齐即并行，多选即批处理。

毕昇还集成了 Linsight 通用 Agent，通过 AGL（Agent Guidance Language）框架将领域专家的偏好、经验和业务逻辑嵌入 AI，使 Agent 在处理任务时展现出"专家级理解"。此外，平台提供了高精度文档解析能力（印刷/手写文本识别、表格识别、版面分析、印章识别），以及完善的企业级特性：安全审查、RBAC 权限、用户组管理、流量控制、SSO/LDAP、漏洞扫描与修补、高可用部署等。部署基于 Docker Compose，最低要求 4 核 CPU / 16GB 内存。

## 目录结构

```
dataelement__bisheng/
├── src/
│   ├── backend/
│   │   ├── bisheng/
│   │   │   ├── api/                ★ REST API 接口层
│   │   │   ├── workflow/           ★ 工作流引擎核心
│   │   │   ├── linsight/           ★ Linsight Agent 模块
│   │   │   ├── chat_session/       对话会话管理
│   │   │   ├── knowledge/          ★ 知识库管理
│   │   │   ├── llm/                ★ LLM 适配层
│   │   │   ├── database/           数据库模型与操作
│   │   │   ├── core/               核心配置与基础设施
│   │   │   ├── common/             公共工具模块
│   │   │   ├── mcp_manage/         MCP 工具管理
│   │   │   ├── tool/               工具管理模块
│   │   │   ├── user/               用户管理模块
│   │   │   ├── worker/             Celery 异步任务
│   │   │   ├── finetune/           模型微调模块
│   │   │   ├── message/            消息处理模块
│   │   │   ├── channel/            通道管理
│   │   │   ├── open_endpoints/     开放 API 端点
│   │   │   ├── telemetry/          遥测与监控
│   │   │   ├── server.py           服务入口文件
│   │   │   └── main.py             主入口文件
│   │   ├── bisheng_langchain/      LangChain 扩展库
│   │   ├── test/                   测试目录
│   │   └── pyproject.toml          Python 项目配置
│   └── frontend/
│       ├── client/                 前端客户端
│       ├── platform/               平台前端
│       └── nginx.conf              Nginx 配置
├── docker/                         ★ Docker Compose 部署配置
├── README.md                       英文文档
├── README_CN.md                    中文文档
└── README_JPN.md                   日文文档
```

## 核心模块分析

### 1. Workflow 引擎 (workflow/)

Bisheng 的核心差异化能力。实现了独立完整的应用编排框架，支持在单一框架内执行各种任务。关键特性包括：循环（画圈即可）、并行（对齐即可）、批处理（多选即可）的可视化操作；多类型输入输出处理；报告生成、内容审核等复杂场景支持；Human-in-the-loop 机制允许工作流执行中的人工干预和多轮对话反馈。不同于 LangFlow 等工具，Bisheng 的工作流引擎是一个完全自研的编排系统。

### 2. Linsight Agent (linsight/)

基于 AGL（Agent Guidance Language）框架的通用 Agent 系统。通过将领域专家的偏好、经验和业务逻辑结构化嵌入 AI 模型，使 Agent 具备"专家级理解"能力。AGL 是一个独立的开源项目（github.com/dataelement/AgentGuidanceLanguage），它代表了一种将人类专业知识编码到 AI 系统中的工程化方法，区别于纯提示工程或 RAG 方法。

### 3. 知识库系统 (knowledge/)

集成了高精度文档解析能力，基于 5 年高质量数据积累训练的文档解析模型。包括高精度印刷文本/手写文本/罕见字符识别、表格识别、版面分析、印章识别等多模态文档理解能力，支持私有化部署。知识库模块与 Milvus 向量数据库和 Elasticsearch 搜索引擎深度集成，提供文档摄取、分块、索引和检索的完整流水线。

### 4. LLM 适配层 (llm/)

统一的大语言模型接入层，兼容主流 LLM 提供商。基于 LangChain 构建（目录下有 `bisheng_langchain` 扩展库），支持模型配置、切换和管理。为上层的工作流引擎和 Agent 系统提供统一的模型调用接口。同时通过 MCP 管理模块（`mcp_manage/`）支持外部工具协议。

### 5. 企业级基础设施 (user/ + worker/ + database/)

数据库管理（SQLAlchemy，支持 PostgreSQL）、用户认证（RBAC/SSO/LDAP）、流量控制（按用户组）、Celery 异步任务队列（`worker/`，含 Celery Beat 定时任务）、高可用部署方案等。这些企业级特性是平台被大型企业采用的基石，也是 Bisheng 区别于一般开源 LLM 工具的关键。

## 技术亮点

1. **独创 Workflow 引擎**：单一框架内实现所有编排能力，循环/并行/批处理通过可视化操作完成，无需专用组件
2. **AGL 专家知识编码**：通过 Agent Guidance Language 将领域专家经验结构化注入 AI，实现"专家级 Agent"
3. **Human-in-the-loop**：工作流执行过程中支持人工干预和多轮对话反馈，确保复杂任务的可靠性
4. **高精度文档解析**：5 年数据积累的多模态文档理解能力，支持私有化免费部署
5. **企业级特性完备**：RBAC/SSO/LDAP/流量控制/漏洞扫描/高可用部署全覆盖
6. **多语言文档支持**：提供中/英/日三种语言的文档和界面，面向全球开发者

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 工作流编排 | Bisheng Workflow 的可视化编排思路可用于 Self-Evolve 的任务流程设计 |
| Agent 引导 | AGL 框架将专家知识编码到 Agent 的方式为 Self-Evolve 的知识注入提供参考 |
| 知识管理 | 高精度文档解析和知识库系统可借鉴于 Self-Evolve 的知识获取模块 |
| 企业级架构 | 完善的企业级特性（认证/权限/部署）为 Self-Evolve 的生产化提供工程参考 |
| MCP 集成 | MCP 工具管理模块展示了工具协议在实际平台中的集成模式 |
| 异步处理 | Celery 异步任务队列架构可用于 Self-Evolve 的长时间运行任务管理 |

## 参考资料

- 官方文档：https://dataelem.feishu.cn/wiki/ZxW6wZyAJicX4WkG0NqcWsbynde
- 自部署指南：https://dataelem.feishu.cn/wiki/BSCcwKd4Yiot3IkOEC8cxGW7nPc
- GitHub 仓库：https://github.com/dataelement/bisheng
- AGL 项目：https://github.com/dataelement/AgentGuidanceLanguage
- 致谢项目：LangChain, LangFlow, Unstructured, LLaMA-Factory

## GitNexus 深度架构分析

- **源码位置**：`projects/repos/dataelement__bisheng`
- **分析命令**：`gitnexus analyze repos/dataelement__bisheng --index-only --skip-git --name Bisheng`
