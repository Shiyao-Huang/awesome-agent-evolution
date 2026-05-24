---
repo: cellium-project/cellium-agent
url: https://github.com/cellium-project/cellium-agent
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Cellium-Project/Cellium-Agent: Self-Evolving AI Agent Framework | Decision-Loop Driven Microkernel Architecture with Hot-Pluggable Components & Triple-Layer Memory | Agent Infinite Evolution Engine that Learns from Failures · GitHub

**Source**: https://github.com/cellium-project/cellium-agent

---

[Skip to content](https://github.com/cellium-project/cellium-agent#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Cellium-Project](https://github.com/Cellium-Project)

/
**[Cellium-Agent](https://github.com/Cellium-Project/Cellium-Agent)**

Public

- [Notifications](https://github.com/login?return_to=%2FCellium-Project%2FCellium-Agent)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2FCellium-Project%2FCellium-Agent)
- 
[Star
          41](https://github.com/login?return_to=%2FCellium-Project%2FCellium-Agent)

[https://github.com/Cellium-Project/Cellium-Agent](https://github.com/Cellium-Project/Cellium-Agent)

[Branches](https://github.com/Cellium-Project/Cellium-Agent/branches)[Tags](https://github.com/Cellium-Project/Cellium-Agent/tags)

[https://github.com/Cellium-Project/Cellium-Agent/branches](https://github.com/Cellium-Project/Cellium-Agent/branches)[https://github.com/Cellium-Project/Cellium-Agent/tags](https://github.com/Cellium-Project/Cellium-Agent/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History227 Commits227 Commits |  |  |  |
| .github | .github |  |  |
| app | app |  |  |
| builder | builder |  |  |
| components | components |  |  |
| config | config |  |  |
| dll | dll |  |  |
| html | html |  |  |
| memory | memory |  |  |
| sandbox_root | sandbox_root |  |  |
| tests | tests |  |  |
| ui | ui |  |  |
| workspace | workspace |  |  |
| .gitattributes | .gitattributes |  |  |
| .gitignore | .gitignore |  |  |
| .nojekyll | .nojekyll |  |  |
| INSTALL.md | INSTALL.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_EN.md | README_EN.md |  |  |
| app_icon.ico | app_icon.ico |  |  |
| logo.png | logo.png |  |  |
| main.py | main.py |  |  |
| requirements.txt | requirements.txt |  |  |
| View all files |  |  |  |

## Repository files navigation

# Cellium Agent

[https://github.com/cellium-project/cellium-agent#cellium-agent](https://github.com/cellium-project/cellium-agent#cellium-agent)

[https://github.com/Cellium-Project/Cellium-Agent/blob/main/logo.png](https://github.com/Cellium-Project/Cellium-Agent/blob/main/logo.png)
[https://www.producthunt.com/products/cellium-agent?utm_source=badge-follow&utm_medium=badge](https://www.producthunt.com/products/cellium-agent?utm_source=badge-follow&utm_medium=badge)

[https://www.python.org/](https://www.python.org/)[https://fastapi.tiangolo.com/](https://fastapi.tiangolo.com/)[https://github.com/Cellium-Project/Cellium-Agent/blob/main/LICENSE](https://github.com/Cellium-Project/Cellium-Agent/blob/main/LICENSE)[https://react.dev/](https://react.dev/)[https://www.typescriptlang.org/](https://www.typescriptlang.org/)[https://github.com/Cellium-Project/Cellium-Agent/blob/main](https://github.com/Cellium-Project/Cellium-Agent/blob/main)

**这是一个自进化AI Agent**

[English](https://github.com/Cellium-Project/Cellium-Agent/blob/main/README_EN.md) | 中文

> **传统 Agent 重复犯错、陷入死循环、不会总结经验。所以我们选择让Agent无限进化**

基于微内核架构（EventBus + DI + BaseTool），支持任意 OpenAI 兼容 API

核心设计：决策环（Control Loop）驱动的自学习 Agent，通过贝叶斯 Bandit 实现自适应决策优化。

> 感谢 [Strategy Gene](https://arxiv.org/abs/2604.15097) 研究团队，本项目参考并使用了其提出的紧凑经验表示方法，让 Agent 从失败中自动进化，持续优化决策策略。

## 能做什么

[https://github.com/cellium-project/cellium-agent#%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88](https://github.com/cellium-project/cellium-agent#%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88)

Cellium Agent 是一个通用的 AI 助手，可以帮助你完成各种任务：

| 功能 | 示例 |
|---|---|
| 文件操作 | 读取、写入、搜索文件，管理目录结构 |
| 代码开发 | 编写代码、调试、重构、解释代码逻辑 |
| 网页搜索 | 搜索互联网获取实时信息，总结网页内容 |
| 数据分析 | 处理数据文件，生成报告和可视化 |
| 自动化任务 | 创建定时任务，如"每天早上8点查询天气" |
| 组件扩展 | 通过自然语言创建新组件，扩展 Agent 能力 |
| 多平台接入 | 支持 WebUI、QQ、Telegram 等多平台对话 |

**使用示例**：

- "帮我读取 workspace 目录下的所有文件，统计每个文件的函数数量"
- "搜索最新的 AI 技术发展动态，并创建一个word组件，总结成一份报告发给我"
- "创建一个定时任务，每小时检查一次服务器状态，当状态异常时自动通知我。"
- "帮我写一个 Python 脚本处理 CSV 文件，自动生成数据可视化图表"
- "创建一个新组件，用于监控股票价格，当价格波动超过 5% 时自动通知我"

## 特性

[https://github.com/cellium-project/cellium-agent#%E7%89%B9%E6%80%A7](https://github.com/cellium-project/cellium-agent#%E7%89%B9%E6%80%A7)

| 特性 | 说明 |
|---|---|
| Agent 运行时自感知 | 实时感知运行状态（进度、停滞、循环、饱和度），动态调整决策 |
| 决策环架构 | 每轮决策 - 执行 - 反馈 - 学习的闭环控制 |
| 自学习系统 | 基于贝叶斯 Bandit 的 Action 选择，持续优化决策策略 |
| 三层记忆系统 | 人格记忆 + 会话记忆 + 长期记忆（FTS5全文检索 + 96维哈希向量混合召回） |
| 启发式决策引擎 | 规则提取特征 + Bandit 做 tie-break，兼顾可解释性与学习能力 |
| 工具使用控制 | 动态禁止/推荐工具切换，避免重复调用同一工具陷入循环 |
| 敏感信息控制 | 自动检测并脱敏私钥、Token、密码等敏感信息，支持写入拦截 |
| 组件热插拔 | app/components/ 下文件 3 秒自动加载生效 |
| 组件沙箱安全 | 三层防护：进程隔离 + 路径透明映射 + 危险方法拦截 |
| 事件驱动架构 | 基于 EventBus 的发布-订阅模式，组件松耦合 |
| Flash 模式 | 跳过记忆注入，加速简单任务 |
| 多通道接入 | 支持 QQ 等外部平台（目前只支持qqbot,telegram,持续更新中），通过 ChannelManager 统一管理消息路由、文件传输与注入 |
| 定时任务调度 | 支持间隔任务、每日任务、每周任务，通过自然语言创建任务，触发时自动调用 Agent 执行并推送结果到对应平台 |
| 后台组件事件触发 | 组件可在后台运行并主动触发 Agent 执行任务，支持实时场景（如虚拟币价格监控、实时数据推送、Agent 自动总结分析） |

## 快速开始

[https://github.com/cellium-project/cellium-agent#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B](https://github.com/cellium-project/cellium-agent#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

### 一键安装启动 (带环境)

[https://github.com/cellium-project/cellium-agent#%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E5%90%AF%E5%8A%A8-%E5%B8%A6%E7%8E%AF%E5%A2%83](https://github.com/cellium-project/cellium-agent#%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E5%90%AF%E5%8A%A8-%E5%B8%A6%E7%8E%AF%E5%A2%83)

**Windows:**

```
powershell -Command "Invoke-WebRequest -Uri 'https://github.com/Cellium-Project/Cellium-Agent/releases/latest/download/Cellium-Agent-Windows.zip' -OutFile 'Cellium-Agent-Windows.zip'; Expand-Archive -Path 'Cellium-Agent-Windows.zip' -DestinationPath '.' -Force; cd Cellium-Agent-Windows; .\CelliumAgent.exe"
```

**Linux x64:**

```
curl -LO https://github.com/Cellium-Project/Cellium-Agent/releases/latest/download/Cellium-Agent-Linux.tar.gz && tar -xzf Cellium-Agent-Linux.tar.gz && cd Cellium-Agent-Linux && ./start-cellium.sh
```

**Linux ARM64:**

```
curl -LO https://github.com/Cellium-Project/Cellium-Agent/releases/latest/download/Cellium-Agent-Linux-ARM64.tar.gz && tar -xzf Cellium-Agent-Linux-ARM64.tar.gz && cd Cellium-Agent-Linux-ARM64 && ./start-cellium.sh
```

**macOS:**

```
curl -LO https://github.com/Cellium-Project/Cellium-Agent/releases/latest/download/Cellium-Agent-macOS.tar.gz && tar -xzf Cellium-Agent-macOS.tar.gz && cd Cellium-Agent-macOS && ./start-cellium.sh
```

> 更多安装选项见 [INSTALL.md](https://github.com/Cellium-Project/Cellium-Agent/blob/main/INSTALL.md)

### 从源码运行

[https://github.com/cellium-project/cellium-agent#%E4%BB%8E%E6%BA%90%E7%A0%81%E8%BF%90%E8%A1%8C](https://github.com/cellium-project/cellium-agent#%E4%BB%8E%E6%BA%90%E7%A0%81%E8%BF%90%E8%A1%8C)

```
pip install -r requirements.txt
python main.py
```

主要依赖：

- FastAPI + Uvicorn（Web 框架）
- PyYAML（配置解析）
- Jieba（中文分词）
- DrissionPage（用于网页搜索和操作浏览器）
- openai（OpenAI API 客户端）
- websockets（QQ Bot WebSocket 客户端）
- httpx（HTTP 客户端，用于外部平台文件上传）

### 配置模型

[https://github.com/cellium-project/cellium-agent#%E9%85%8D%E7%BD%AE%E6%A8%A1%E5%9E%8B](https://github.com/cellium-project/cellium-agent#%E9%85%8D%E7%BD%AE%E6%A8%A1%E5%9E%8B)

编辑 `config/agent/llm.yaml` 文件，配置 API 密钥、服务地址和模型名称。

### 启动服务

[https://github.com/cellium-project/cellium-agent#%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1](https://github.com/cellium-project/cellium-agent#%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1)

```
python main.py
```

启动后访问 [http://localhost:18000](http://localhost:18000) 打开聊天界面，访问 [http://localhost:18000/docs](http://localhost:18000/docs) 查看 API 文档。 （默认端口 18000，如被占用会自动切换，请查看启动日志获取实际端口）

## 核心架构：决策环 + 自学习

[https://github.com/cellium-project/cellium-agent#%E6%A0%B8%E5%BF%83%E6%9E%B6%E6%9E%84%E5%86%B3%E7%AD%96%E7%8E%AF--%E8%87%AA%E5%AD%A6%E4%B9%A0](https://github.com/cellium-project/cellium-agent#%E6%A0%B8%E5%BF%83%E6%9E%B6%E6%9E%84%E5%86%B3%E7%AD%96%E7%8E%AF--%E8%87%AA%E5%AD%A6%E4%B9%A0)

Cellium Agent 的核心是 **Control Loop（控制环）** 驱动的决策系统，结合 **贝叶斯 Bandit** 实现自学习优化。

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           自学习层 (Learning)                            │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────────────┐  │
│  │   Policy    │    │  Bayesian   │    │      PolicyBanditMemory     │  │
│  │  Templates  │───▶│   Bandit    │◄───│  (Thompson Sampling 统计)    │  │
│  │ (策略模板)   │    │ (策略选择)   │    │                             │  │
│  └─────────────┘    └──────┬──────┘    └─────────────────────────────┘  │
│                            │                                            │
└────────────────────────────┼────────────────────────────────────────────┘
                             │ 选择 Policy
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                          决策环层 (Control Loop)                         │
│                                                                         │
│   ┌──────────┐     ┌──────────────┐     ┌──────────────┐               │
│   │  Step    │────▶│   Feature    │────▶│    Rule      │               │
│   │ (每轮开始)│     │  Extraction  │     │  Evaluation  │               │
│   └──────────┘     │  (特征提取)   │     │  (规则评估)   │               │
│        │           └──────────────┘     └──────┬───────┘               │
│        │                                        │                       │
│        │           ┌────────────────────────────┘                       │
│        │           ▼                                                    │
│        │     ┌──────────────┐     ┌──────────────┐                     │
│        │     │   Action     │◄────│   Action     │                     │
│        │     │  Candidates  │     │   Bandit     │                     │
│        │     │  (候选动作)   │     │ (Tie-break)  │                     │
│        │     └──────┬───────┘     └──────────────┘                     │
│        │            │                                                  │
│        │            ▼                                                  │
│        │     ┌──────────────┐                                         │
│        │     │   Control    │                                         │
│        │     │   Decision   │                                         │
│        │     │   (决策输出)  │                                         │
│        │     └──────┬───────┘                                         │
│        │            │                                                  │
│        │     ┌──────┴───────┐     ┌──────────────┐                    │
│        └────▶│   Execute    │────▶│  End Round   │                    │
│              │   (执行)      │     │  (每轮结束)   │                    │
│              └──────────────┘     └──────┬───────┘                    │
│                                          │                             │
│                                          ▼                             │
│                              ┌──────────────────────┐                  │
│                              │  Feedback Evaluator  │                  │
│                              │    (反馈评估)         │                  │
│                              │   - 分段式评估        │                  │
│                              │   - n-step return    │                  │
│                              └──────────┬───────────┘                  │
│                                         │                              │
│                              ┌──────────┴───────────┐                  │
│                              ▼                      ▼                  │
│                    ┌─────────────────┐   ┌─────────────────┐          │
│                    │   Bandit Update │   │   Stats Persist │          │
│                    │   (更新统计)     │   │   (持久化)       │          │
│                    └─────────────────┘   └─────────────────┘          │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 决策环（Control Loop）工作流程

[https://github.com/cellium-project/cellium-agent#%E5%86%B3%E7%AD%96%E7%8E%AFcontrol-loop%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B](https://github.com/cellium-project/cellium-agent#%E5%86%B3%E7%AD%96%E7%8E%AFcontrol-loop%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B)

[https://github.com/Cellium-Project/Cellium-Agent/blob/main/tests/img/1.png](https://github.com/Cellium-Project/Cellium-Agent/blob/main/tests/img/1.png) 每轮循环包含 5 个阶段：

1. 

**特征提取（Feature Extraction）**

  - 启发式引擎提取当前状态特征
  - 包括：停滞迭代数、进展趋势、重复分数、上下文饱和度等

2. 

**规则评估（Rule Evaluation）**

  - 硬规则给出 action 候选集合
  - 例如：检测到循环时候选 [redirect, compress]

3. 

**Bandit Tie-break（Action 选择）**

  - 当候选 action 多于 1 个时，Bandit 介入
  - 使用 Thompson Sampling + Heuristic Bias 选择最优 action

4. 

**执行与反馈（Execute & Feedback）**

  - 执行选中的 action（continue/retry/redirect/compress/terminate）
  - FeedbackEvaluator 分段式评估本轮表现

5. 

**学习与更新（Learning & Update）**

  - 使用 n-step return 累积 reward
  - 更新 Bandit 的 Beta 分布参数
  - 定期衰减旧数据防止过拟合

### PEOP 循环（Plan-Execute-Observe-RePlan 循环）

[https://github.com/cellium-project/cellium-agent#peop-%E5%BE%AA%E7%8E%AFplan-execute-observe-replan-%E5%BE%AA%E7%8E%AF](https://github.com/cellium-project/cellium-agent#peop-%E5%BE%AA%E7%8E%AFplan-execute-observe-replan-%E5%BE%AA%E7%8E%AF)

PEOP 循环是决策环的扩展模块，实现**自适应计划-执行循环**。该模块根据任务复杂度动态调整策略：简单任务直接响应，复杂任务自动启用多步规划；执行过程中持续验证结果，发现偏差时局部重规划，通过显式状态管理实现高效、可靠的任务分解与执行：

```
┌─────────────────────────────────────────────────────────────┐
│                 计划执行引擎状态机                            │
│                                                             │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                 │
│  │ OBSERVE │───▶│  PLAN   │───▶│ EXECUTE │◄─────────────┐  │
│  │  观察   │    │  规划   │    │  执行   │   验证成功    │  │
│  └─────────┘    └─────────┘    └────┬────┘   继续下一步  │  │
│       ▲                             │                     │  │
│       │                      验证失败│                     │  │
│       │                             ▼                     │  │
│       │                        ┌─────────┐   重规划成功   │  │
│       │                        │ REPLAN  │───────────────┘  │
│       │                        │ 重规划  │                  │  │
│       │                        └────┬────┘                  │  │
│       │                             │                     │  │
│       └─────────────────────────────┘   重规划次数超限      │  │
│                                         或任务完成          │  │
│                                         ▼                  │  │
│                                       ┌─────┐              │  │
│                                       │DONE │              │  │
│                                       │完成 │              │  │
│                                       └���────┘              │  │
└─────────────────────────────────────────────────────────────┘
```

**核心机制**：

| 机制 | 说明 |
|---|---|
| 批量规划 | 一次生成多步执行计划（1-5步）支持并行执行工具调用（如果无依赖关系），减少 LLM 调用次数 |
| 状态驱动 | 5阶段显式状态机（OBSERVE/PLAN/EXECUTE/REPLAN/DONE） |
| 执行内验证 | 每步执行后自动验证结果 |
| 局部重规划 | 验证失败时保留成功步骤，仅重新规划失败及后续步骤 |

**工作流程**：

1. **观察（OBSERVE）**：分析用户输入，理解任务目标与上下文
2. **规划（PLAN）**：LLM 生成结构化计划，每步包含：工具名、参数、执行目的、预期结果
3. **执行（EXECUTE）**：按顺序执行计划步骤，每步执行后自动验证结果 
  - 验证成功 → 继续执行下一步
  - 验证失败 → 进入 REPLAN 阶段

4. **重规划（REPLAN）**：保留已成功的步骤，仅对失败及后续步骤重新生成计划
5. **完成（DONE）**：所有步骤执行成功，或重规划次数超限

**设计特点**：

- **高效**：多步计划一次生成，执行阶段零 LLM 调用
- **稳定**：局部重规划避免全盘推翻，保持上下文连续性
- **可观测**：5阶段状态机提供清晰的执行轨迹，便于调试与监控
- **协同**：状态信息实时同步给 Control Loop，重规划触发 redirect 决策

**配置参数**：

- `max_plan_steps=5`：单次规划最多 5 个步骤
- `max_replans=3`：最多允许 3 次重规划

### Action 类型与策略

[https://github.com/cellium-project/cellium-agent#action-%E7%B1%BB%E5%9E%8B%E4%B8%8E%E7%AD%96%E7%95%A5](https://github.com/cellium-project/cellium-agent#action-%E7%B1%BB%E5%9E%8B%E4%B8%8E%E7%AD%96%E7%95%A5)

代码定义：`ACTION_TYPES = ["continue", "retry", "redirect", "compress", "terminate"]`

| Action | 说明 | Heuristic Bias 条件 |
|---|---|---|
| continue | 继续当前方向 | 进展分数 > 0.5 或停滞迭代为 0 |
| retry | 保持方向但修正策略 | 轻微停滞（1 <= stuck < threshold）或进展趋势在 0~0.3 |
| redirect | 换方向/换工具 | 重复分数 > 0.5 或停滞 >= stuck_threshold |
| compress | 压缩上下文 | 上下文饱和度 > 0.6 或停滞 >= stuck_threshold // 2 |
| terminate | 终止会话 | 硬规则触发：输出循环且 exact_repetition_count >= 5 |

### 自学习机制

[https://github.com/cellium-project/cellium-agent#%E8%87%AA%E5%AD%A6%E4%B9%A0%E6%9C%BA%E5%88%B6](https://github.com/cellium-project/cellium-agent#%E8%87%AA%E5%AD%A6%E4%B9%A0%E6%9C%BA%E5%88%B6)

[https://github.com/Cellium-Project/Cellium-Agent/blob/main/tests/img/2.png](https://github.com/Cellium-Project/Cellium-Agent/blob/main/tests/img/2.png)**Policy - Bandit - Action 三层架构**：

```
┌─────────────────────────────────────────┐
│           Policy Templates              │
