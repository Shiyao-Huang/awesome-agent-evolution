# SWE-Agent: 软件工程智能体

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/princeton-nlp/SWE-agent |
| Star | 15k+ |
| 技术栈 | Python 3.11+, Jinja2 模板, swerex (执行引擎) |
| 许可证 | MIT |
| 安装 | `pip install sweagent` |
| 开发者 | Princeton NLP |
| 论文 | SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering (ICLR 2025 Oral) |

## 项目简介

SWE-Agent 是 Princeton NLP 开发的**软件工程自动化 Agent**，专门解决 GitHub Issue。它在 SWE-bench 上取得了顶级成绩（ICLR 2025 Oral）。

核心创新：**Agent-Computer Interface (ACI)** — 为 LLM 设计专用的交互接口，类似 HCI 但面向 Agent。通过精心设计的命令集和输出格式，让 LLM 能高效地浏览代码库、编辑文件、运行测试。

## 目录结构

```
swe_agent/
├── sweagent/
│   ├── agent/
│   │   ├── agents.py            # ★ Agent 核心逻辑
│   │   ├── models.py            # 模型抽象（支持多种 LLM）
│   │   ├── action_sampler.py    # 动作采样器
│   │   ├── history_processors.py # 历史处理（压缩/裁剪）
│   │   ├── reviewer.py          # ★ Reviewer（重试/选择最优解）
│   │   ├── problem_statement.py # 问题描述解析
│   │   ├── hooks/               # Agent 钩子
│   │   └── extra/               # 额外功能
│   ├── environment/
│   │   ├── swe_env.py           # ★ SWE 环境（Docker 隔离）
│   │   ├── repo.py              # Git 仓库操作
│   │   └── hooks/               # 环境钩子
│   ├── tools/
│   │   ├── tools.py             # ★ 工具配置（ACI 核心）
│   │   ├── commands.py          # 命令定义
│   │   ├── parsing.py           # 输出解析
│   │   ├── bundle.py            # 工具打包
│   │   └── utils.py             # 工具辅助
│   ├── run/
│   │   ├── run.py               # 运行入口
│   │   ├── rich_test.py         # 测试展示
│   │   └── hooks/               # 运行钩子
│   ├── inspector/               # 可视化检查器（Web UI）
│   ├── utils/
│   │   ├── config.py            # 配置管理
│   │   ├── github.py            # GitHub API
│   │   ├── patch_formatter.py   # Patch 格式化
│   │   └── files.py             # 文件操作
│   ├── types.py                 # 类型定义
│   └── exceptions.py            # 异常定义
└── tests/
```

## 核心模块分析

### 1. Agent-Computer Interface (ACI)

SWE-Agent 的核心创新是为 LLM 设计的专用命令接口：

```yaml
# 工具配置示例
commands:
  - name: search_dir
    doc: "在目录中搜索模式"
  - name: search_file
    doc: "在文件中搜索模式"
  - name: open
    doc: "打开文件并跳转到指定行"
  - name: edit
    doc: "编辑文件的指定行"
  - name: create
    doc: "创建新文件"
  - name: submit
    doc: "提交解决方案"
```

ACI 设计原则：
- **简洁输出**：避免大量无关信息
- **精确导航**：`open file:line` 直接跳转
- **搜索优先**：`search_dir` / `search_file` 定位代码
- **行级编辑**：`edit start:end` 精确修改

### 2. Agent 主循环

```python
# agents.py 核心循环（简化）
class Agent:
    def run(self, problem_statement):
        # 初始化环境
        env.reset(problem_statement)

        while not done:
            # 1. 构建消息（system + history + observation）
            messages = self._build_messages(trajectory)

            # 2. LLM 生成动作
            action = self.model.generate(messages)

            # 3. 解析动作
            command, args = self.parser.parse(action)

            # 4. 环境执行
            observation = env.execute(command, args)

            # 5. 记录轨迹
            trajectory.append((action, observation))

        return trajectory
```

### 3. Reviewer 重试机制

SWE-Agent 内置**多轮重试 + 最优选择**：

```python
# reviewer.py
class ChooserRetryLoop:
    """多次尝试，选择最佳提交"""
    def should_retry(self, submission):
        # LLM 评估提交质量
        result = self.model.evaluate(submission)
        return not result.accept

class ScoreRetryLoop:
    """评分式重试"""
    def score(self, trajectory):
        return self.model.score(trajectory)
```

**重试策略**：
- `ChooserRetryLoop`：LLM 评判是否需要重试
- `ScoreRetryLoop`：评分式选择最优解
- 支持多轨迹比较（`Preselector` 预筛选）

### 4. Jinja2 模板系统

SWE-Agent 使用模板定义 Agent 的消息格式：

```python
class TemplateConfig(BaseModel):
    system_template: str = ""       # 系统消息
    instance_template: str = ""     # 问题实例消息
    next_step_template: str = "Observation: {{observation}}"
    # 观察截断处理
    next_step_truncated_observation_template: str = ...
    max_observation_length: int = 100_000
```

### 5. 环境隔离

通过 Docker 容器实现安全隔离：
- `SWEEnv`：管理 Docker 容器生命周期
- `repo.py`：Git 仓库的 checkout、apply、diff 操作
- 每次运行在独立容器中，保证可重复性

### 6. 评估框架

- **SWE-bench**：标准软件工程基准测试
- **SWE-smith**：合成基准生成器
- **Inspector**：Web UI 查看运行轨迹

## 技术亮点

1. **ACI 设计**：为 LLM 量身定制的 Agent-Computer Interface
2. **ICLR 2025 Oral**：SWE-bench 结果需要按论文、leaderboard 与评测日期复核
3. **多轮重试**：Reviewer 机制 + 多轨迹选择最优解
4. **Docker 隔离**：安全的代码执行环境
5. **Inspector**：可视化运行轨迹分析
6. **模块化模板**：Jinja2 模板灵活定制 Agent 行为

## 与 Self-Evolve 关联

| 维度 | SWE-Agent 贡献 |
|------|---------------|
| ACI 设计 | **Agent-Computer Interface** 是设计 Agent 与环境交互的参考 |
| 代码进化 | Agent 自动修改代码 + Reviewer 评估的循环是代码级自我改进 |
| 评估 | SWE-bench 标准化评估 + 多轨迹比较选择 |
| 重试 | 多轮重试 + 最优选择的重试机制 |
| 启示 | ACI 设计原则（简洁输出、精确导航、搜索优先）可推广到其他 Agent 系统 |

## 参考资料

- [SWE-Agent GitHub](https://github.com/princeton-nlp/SWE-agent)
- [SWE-Agent 论文](https://arxiv.org/abs/2405.15793) (ICLR 2025 Oral)
- [SWE-bench](https://www.swebench.com/)

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/swe_agent__swe_agent`（指向 `repos/swe_agent__swe_agent` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/swe_agent__swe_agent --index-only --skip-git --name SWEAgent`。
- **知识图谱规模**：3658 symbols / 6874 edges / 165 clusters / 165 flows。
- **查询语句**：`agent environment tool action review retry`。
- **核心执行流程候选**：
  - Query → _sleep
  - Query → _update_stats
  - Query → Get_role
  - Step → _get_format_dict
  - Step → Handle_submission
- **关键符号/文件**：
  - `Agent`（`sweagent/agent/agents.py`）
  - `Reviewer`（`sweagent/agent/reviewer.py`）
  - `SWEEnv`（`sweagent/environment/swe_env.py`）
  - `ToolHandler`（`sweagent/tools/tools.py`）
  - `TemplateConfig`（`sweagent/agent/agents.py`）
- **调用关系上下文**：
  - `Agent` 的 `Step` 方法是主循环入口，调用 `_get_format_dict` 构建消息后发送给 LLM。
  - `Handle_submission` 是 Agent 提交解决方案的关键流程。
- **架构结论**：该图谱结果用于把报告中的"进化循环 / Prompt 工程 / 评估框架 / Agent 编排"定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
