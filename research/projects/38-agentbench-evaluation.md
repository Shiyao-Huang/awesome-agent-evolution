# AgentBench: 大语言模型智能体多维度评估基准

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/THUDM/AgentBench |
| Star | 3k+ |
| 技术栈 | Python, Docker, Redis, YAML配置 |
| 许可证 | Apache-2.0 |
| 开发者 | THUDM (清华大学知识工程实验室) |

## 项目简介

AgentBench是首个专为评估"LLM-as-Agent"能力而设计的综合性基准框架,发表于ICLR 2024。它涵盖8个不同环境,包括操作系统(OS)、数据库(DB)、知识图谱(KG)、数字卡牌游戏(DCG)、横向思维谜题(LTP)等5个全新领域,以及ALFWorld、WebShop、Mind2Web等3个已有数据集。2025年发布了基于AgentRL的AgentBench FC(Function Calling)版本,采用函数调用风格交互并支持完全容器化部署。

## 目录结构

```
thudm__agentbench/
├── src/                              ★ 核心源码
│   ├── server/                       ★ 服务端
│   │   ├── analysis.py               ★ 结果分析
│   │   ├── assigner.py               ★ 任务分配器
│   │   ├── configs.py                ★ 配置管理
│   │   └── tasks/                    ★ 任务定义
│   ├── client/                       ★ 客户端(Agent端)
│   │   ├── agent.py                  ★ Agent基类
│   │   ├── agents/                   ★ 不同LLM Agent实现
│   │   └── task.py                   ★ 任务交互接口
│   ├── utils/                        ★ 工具函数
│   └── typings/                      ★ 类型定义
├── configs/                          ★ 配置文件
│   ├── agents/                       ★ Agent配置(OpenAI等)
│   ├── tasks/                        ★ 8个任务环境配置
│   │   ├── alfworld.yaml             ★ 家务任务
│   │   ├── dbbench.yaml              ★ 数据库操作
│   │   ├── kg.yaml                   ★ 知识图谱推理
│   │   ├── os.yaml                   ★ 操作系统交互
│   │   ├── webshop.yaml              ★ 网络购物
│   │   ├── card_game.yaml            ★ 卡牌游戏
│   │   ├── ltp.yaml                  ★ 横向思维谜题
│   │   └── avalon.yaml              ★ 阿瓦隆多Agent博弈
│   └── assignments/                  ★ 评估配置
├── data/                             ★ 任务数据
├── extra/                            ★ Docker Compose部署
│   └── docker-compose.yml            ★ 容器化部署配置
└── docs/                             ★ 文档
```

## 核心模块分析

### 1. 评估框架架构

AgentBench采用客户端-服务器架构:
- **Server端**: 运行任务环境,管理任务分配(assigner),收集评估结果(analysis)
- **Client端**: 封装LLM Agent,通过API与环境交互,支持多种LLM后端
- **Redis**: 管理Docker容器资源分配和任务调度

### 2. 八大评估环境

**操作系统交互(OS)**: Agent在Docker容器中执行Linux命令,完成文件操作、进程管理等任务。需要预先构建三种Docker镜像(default/packages/ubuntu)。

**数据库操作(DB)**: Agent使用SQL查询MySQL数据库,完成数据检索和分析任务。基于MySQL 8 Docker镜像。

**知识图谱推理(KG)**: Agent通过SPARQL查询Freebase知识图谱,回答多跳推理问题。依赖本地Freebase服务器。

**数字卡牌游戏(DCG)**: Agent在卡牌游戏环境中进行策略决策。

**横向思维谜题(LTP)**: Agent通过提问和推理解决脑筋急转弯问题。

**家务任务(ALFWorld)**: Agent在文本模拟的家庭环境中完成指令(文本版具身任务)。

**网络购物(WebShop)**: Agent在电商网站上完成购物任务(约16GB内存需求)。

**阿瓦隆博弈(Avalon)**: 多Agent博弈环境,评估Agent的社交推理和欺骗能力。

### 3. AgentBench FC版本 (2025)

基于AgentRL(Function Calling)的升级版本:
- 函数调用风格的交互方式,更贴近实际Agent应用
- 完全容器化Docker部署(Docker Compose)
- 支持alfworld、dbbench、knowledgegraph、os_interaction、webshop五个核心任务
- 集成AgentRL Controller统一管理多任务Worker

### 4. 评估流程

```
1. 配置Agent (configs/agents/openai-chat.yaml)
2. 启动任务服务器 (python -m src.start_task -a)
3. 启动任务分配器 (python -m src.assigner)
4. Agent在8个环境中执行多轮交互
5. 收集结果并生成排行榜
```

Dev集需要约4k次LLM生成,Test集需要约13k次LLM生成。

## 技术亮点

1. **多维度评估**: 横跨8个截然不同的环境,全面评估LLM的Agent能力
2. **真实环境交互**: 非简单文本问答,而是真实Docker容器、数据库、Web环境的操作
3. **完整基础设施**: 提供任务分配、并发控制、结果收集的完整评估流水线
4. **容器化部署**: Docker Compose一键部署,支持Redis资源管理和多Worker并发
5. **可扩展架构**: 提供扩展指南(docs/Extension_en.md),支持添加新任务环境
6. **Lite模式**: 提供资源受限环境下的轻量级评估配置(1 Worker/任务)

## 与 Self-Evolve 关联

| 维度 | AgentBench 贡献 |
|------|----------------|
| 评估框架 | 提供8维Agent评估环境,可作为Self-Evolve自我评估的参考基准 |
| 多环境测试 | OS/DB/KG/Web等环境为Self-Evolve的多场景验证提供测试平台 |
| Agent交互协议 | 客户端-服务器架构设计为Self-Evolve的Agent-环境交互提供参考 |
| 容器化部署 | Docker化环境管理方案为Self-Evolve的安全执行环境设计提供借鉴 |
| 进化评估 | Agent在不同环境中的表现差异可指导Self-Evolve的定向进化策略 |
| 多Agent博弈 | Avalon任务的多Agent博弈环境可评估Self-Evolve的协作与竞争能力 |

## 参考资料

- Liu et al., "AgentBench: Evaluating LLMs as Agents," ICLR 2024
- AgentRL: https://github.com/THUDM/AgentRL
- VisualAgentBench: https://github.com/THUDM/VisualAgentBench
