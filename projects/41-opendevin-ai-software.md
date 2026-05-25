# OpenDevin/OpenHands: 开源 AI 软件工程师平台

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/OpenDevin/OpenDevin |
| Star | 50k+ |
| 技术栈 | Python, React, Docker, PyTorch, Claude/GPT API, FastAPI |
| 许可证 | MIT (核心), 企业版另设许可 |
| 安装 | `pip install openhands` 或 Docker 部署 |

## 项目简介

OpenDevin(现更名为 OpenHands)是一个开源的 AI 驱动软件开发平台,旨在构建能够自主完成软件工程任务的 AI 智能体。该项目是 AI 软件工程师领域的标杆级开源项目,在 SWE-bench 基准上达到 77.6% 的解决率,被 TikTok、Amazon、Netflix、NVIDIA、Google 等众多科技公司的工程师采用。

OpenHands 提供多种使用方式:SDK(可组合的 Python 库)、CLI(命令行界面)、Local GUI(本地图形界面)、Cloud(云服务)和 Enterprise(企业版)。其核心能力包括代码编写与修改、文件操作、命令行执行、Web 浏览、Git 操作等,能够自主完成从需求理解到代码实现、测试和调试的完整软件开发循环。

从架构上看,OpenHands 是一个典型的 Agent 系统:LLM 作为"大脑"进行推理和决策,通过沙箱化的执行环境进行代码操作,通过观察执行结果来迭代改进。这种"思考-行动-观察"的循环与 Self-Evolve 的自我进化理念高度契合。

## 目录结构

```
opendevin__opendevin/
├── README.md                    # 项目文档
├── LICENSE                      # MIT 许可证
├── pyproject.toml               # Python 项目配置
├── Makefile                     # 构建脚本
├── docker-compose.yml           # Docker 编排
├── config.template.toml         # 配置模板
├── openhands/                   # 后端核心代码
│   ├── __init__.py
│   ├── version.py               # 版本管理
│   ├── app_server/              # Web 应用服务器
│   │   ├── app.py               # FastAPI 应用
│   │   ├── config.py            # 配置管理
│   │   ├── conversation_paths/  # 会话管理
│   │   ├── event/               # 事件系统
│   │   ├── event_callback/      # 事件回调
│   │   ├── file_store/          # 文件存储
│   │   ├── git/                 # Git 操作
│   │   ├── integrations/        # 外部集成 (Slack, Jira 等)
│   │   ├── mcp/                 # Model Context Protocol
│   │   ├── sandbox/             # 沙箱执行环境
│   │   └── secrets/             # 密钥管理
│   ├── server/                  # 服务器模块
│   └── analytics/               # 分析模块
├── frontend/                    # React 前端
├── containers/                  # Docker 容器配置
├── tests/                       # 测试套件
├── skills/                      # Agent 技能定义
├── enterprise/                  # 企业版功能
├── scripts/                     # 辅助脚本
├── docs/                        # 文档
├── dev_config/                  # 开发配置
└── kind/                        # Kubernetes 部署配置
```

## 核心模块分析

### 1. Agent 架构

OpenHands 的核心是一个基于 LLM 的 Agent 循环:

```python
# OpenHands Agent 循环的概念表示
class AgentLoop:
    def run(self, task: str):
        while not task_completed:
            # 1. 思考: LLM 分析当前状态和任务需求
            thought = llm.think(task, observation, history)

            # 2. 行动: 执行代码修改、命令行操作等
            action = llm.plan_action(thought)
            observation = execute(action)  # 在沙箱中执行

            # 3. 观察: 获取执行结果
            feedback = parse_observation(observation)

            # 4. 迭代: 更新历史并继续
            history.append((thought, action, feedback))
```

### 2. 沙箱化执行环境

```python
# 沙箱环境确保安全执行
# Agent 可以在隔离容器中:
# - 执行任意 shell 命令
# - 读写文件
# - 运行测试
# - 安装依赖
# - Git 操作
```

所有代码操作都在 Docker 容器中执行,确保主机系统的安全性。

### 3. 多模式支持

OpenHands 提供多种使用模式:

**SDK 模式**:
```python
from openhands import Agent

agent = Agent(model="claude-sonnet-4-20250514")
result = agent.run("Fix the bug in src/main.py that causes NullPointerException")
```

**CLI 模式**: 类似 Claude Code 的命令行体验

**GUI 模式**: 类似 Devin 的图形界面,包含 REST API 和单页应用

**Cloud 模式**: 托管在 app.all-hands.dev,支持 GitHub/GitLab 登录

### 4. 事件系统与回调

```python
# 事件驱动架构
# Agent 的每个操作都产生事件,可以被监听和记录
# 支持的事件类型包括:
# - 代码修改事件
# - 命令执行事件
# - 文件操作事件
# - Git 操作事件
# - 观察反馈事件
```

### 5. 集成与扩展

OpenHands 支持丰富的外部集成:
- **Slack/Jira/Linear**: 项目管理集成
- **MCP (Model Context Protocol)**: 工具和上下文协议
- **GitHub/GitLab**: 代码仓库集成
- **多 LLM 支持**: Claude、GPT、或其他兼容模型

## 技术亮点

1. **SWE-bench 77.6%**: 在真实 GitHub Issue 解决基准上取得领先成绩
2. **全栈 Agent 能力**: 从需求理解、代码编写、测试执行到 Git 操作的全流程自动化
3. **多形态部署**: SDK、CLI、GUI、Cloud、Enterprise 五种部署方式,适配不同使用场景
4. **安全沙箱**: Docker 容器隔离执行,确保 AI Agent 的操作不会影响宿主系统
5. **活跃社区**: 50k+ Star, 被众多一线科技公司工程师采用
6. **MCP 协议**: 支持 Model Context Protocol,可与多种工具和数据源集成

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 自主代码修改 | OpenHands 展示了 AI Agent 自主读取、理解、修改代码的能力,是 Self-Evolve 代码自我进化的直接参考实现 |
| 迭代改进循环 | "思考-行动-观察"的 Agent 循环与 Self-Evolve 的"生成-评估-改进"自我进化循环高度一致 |
| 沙箱化测试 | Docker 容器隔离的安全测试机制为 Self-Evolve 系统的代码验证提供安全模型 |
| 多 LLM 适配 | 支持多种 LLM 后端的设计为 Self-Evolve 的模型无关性提供参考 |

## 参考资料

- 技术报告: arXiv:2511.03690
- SWE-bench 排行榜: https://docs.google.com/spreadsheets/d/1wOUdFCMyY6Nt0AIqF705KN4JKOWgeI4wUGUP60krXXs
- SDK 文档: https://docs.openhands.dev/sdk
- OpenHands Cloud: https://app.all-hands.dev
