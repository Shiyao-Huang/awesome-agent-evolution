---
repo: pingcy/ace-langgraph
url: https://github.com/pingcy/ace-langgraph
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - pingcy/ace-langgraph: ACE LangGraph: ReAct Agent with Adaptive Learning - Integrating ACE framework with LangGraph for self-improving agents · GitHub

**Source**: https://github.com/pingcy/ace-langgraph

---

[Skip to content](https://github.com/pingcy/ace-langgraph#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[pingcy](https://github.com/pingcy)

/
**[ace-langgraph](https://github.com/pingcy/ace-langgraph)**

Public

- [Notifications](https://github.com/login?return_to=%2Fpingcy%2Face-langgraph)You must be signed in to change notification settings
- [Fork
    8](https://github.com/login?return_to=%2Fpingcy%2Face-langgraph)
- 
[Star
          46](https://github.com/login?return_to=%2Fpingcy%2Face-langgraph)

[https://github.com/pingcy/ace-langgraph](https://github.com/pingcy/ace-langgraph)

[Branches](https://github.com/pingcy/ace-langgraph/branches)[Tags](https://github.com/pingcy/ace-langgraph/tags)

[https://github.com/pingcy/ace-langgraph/branches](https://github.com/pingcy/ace-langgraph/branches)[https://github.com/pingcy/ace-langgraph/tags](https://github.com/pingcy/ace-langgraph/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History4 Commits4 Commits |  |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| README.md | README.md |  |  |
| __init__.py | __init__.py |  |  |
| ace_react_agent.py | ace_react_agent.py |  |  |
| curator.py | curator.py |  |  |
| enable_langsmith.sh | enable_langsmith.sh |  |  |
| evaluator.py | evaluator.py |  |  |
| playbook.py | playbook.py |  |  |
| prompts.py | prompts.py |  |  |
| react_agent.py | react_agent.py |  |  |
| reflector.py | reflector.py |  |  |
| requirements.txt | requirements.txt |  |  |
| setup_env.sh | setup_env.sh |  |  |
| train_ace_react.py | train_ace_react.py |  |  |
| train_questions.json | train_questions.json |  |  |
| types.py | types.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# ACE LangGraph - ReAct Agent with Adaptive Learning

[https://github.com/pingcy/ace-langgraph#ace-langgraph---react-agent-with-adaptive-learning](https://github.com/pingcy/ace-langgraph#ace-langgraph---react-agent-with-adaptive-learning)

ACE (Agentic Context Engine) + LangGraph 集成，为 ReAct Agent 提供自适应学习能力。

## 🌟 特性

[https://github.com/pingcy/ace-langgraph#-%E7%89%B9%E6%80%A7](https://github.com/pingcy/ace-langgraph#-%E7%89%B9%E6%80%A7)

- **自适应学习**：通过 ACE 框架让 ReAct Agent 从经验中学习策略
- **向量检索**：使用 ChromaDB 实现策略的语义检索
- **工具集成**：支持计算器、网络搜索等工具
- **可观测性**：可选的 LangSmith 追踪支持

## 📦 安装

[https://github.com/pingcy/ace-langgraph#-%E5%AE%89%E8%A3%85](https://github.com/pingcy/ace-langgraph#-%E5%AE%89%E8%A3%85)

```
# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入你的 API keys
```

## 🚀 快速开始

[https://github.com/pingcy/ace-langgraph#-%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B](https://github.com/pingcy/ace-langgraph#-%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

### 基本使用

[https://github.com/pingcy/ace-langgraph#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8](https://github.com/pingcy/ace-langgraph#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)

```
from ace_langgraph.ace_react_agent import ACEReActWorkflow, ReactQuestion

# 创建工作流
workflow = ACEReActWorkflow(
    model_name="gpt-4o-mini",
    use_vector_retrieval=True
)

# 训练模式（提供 ground_truth）
question = ReactQuestion(
    question="计算 (25 + 17) * 3 - 8",
    ground_truth="118"
)
result = workflow.run(question)

# 生产模式（不提供 ground_truth，只获取答案）
question = ReactQuestion(question="Python 是谁创建的？")
answer = workflow.ask(question)
```

### 运行示例

[https://github.com/pingcy/ace-langgraph#%E8%BF%90%E8%A1%8C%E7%A4%BA%E4%BE%8B](https://github.com/pingcy/ace-langgraph#%E8%BF%90%E8%A1%8C%E7%A4%BA%E4%BE%8B)

```
# 训练 ACE ReAct Agent
python ace_react_agent.py

# 或使用训练脚本
python train_ace_react.py
```

## 📚 核心组件

[https://github.com/pingcy/ace-langgraph#-%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6](https://github.com/pingcy/ace-langgraph#-%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6)

- `ace_react_agent.py` - ACE + ReAct 集成工作流
- `react_agent.py` - ReAct Agent 实现
- `evaluator.py` - 答案评估器
- `reflector.py` - 推理过程反思器
- `curator.py` - 策略提取与管理
- `playbook.py` - 策略存储（支持向量检索）
- `types.py` - 类型定义

## 🔧 配置

[https://github.com/pingcy/ace-langgraph#-%E9%85%8D%E7%BD%AE](https://github.com/pingcy/ace-langgraph#-%E9%85%8D%E7%BD%AE)

### 环境变量

[https://github.com/pingcy/ace-langgraph#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F](https://github.com/pingcy/ace-langgraph#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

在 `.env` 文件中配置：

```
# 必需
OPENAI_API_KEY=your-key-here

# 可选 - LangSmith 追踪
LANGSMITH_TRACING=true
LANGSMITH_API_KEY=your-key-here
LANGSMITH_PROJECT=your-project-name
```

### 启用 LangSmith 追踪

[https://github.com/pingcy/ace-langgraph#%E5%90%AF%E7%94%A8-langsmith-%E8%BF%BD%E8%B8%AA](https://github.com/pingcy/ace-langgraph#%E5%90%AF%E7%94%A8-langsmith-%E8%BF%BD%E8%B8%AA)

```
source enable_langsmith.sh
```

## 🎯 工作原理

[https://github.com/pingcy/ace-langgraph#-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86](https://github.com/pingcy/ace-langgraph#-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)

1. **Generator (ReAct Agent)**: 执行任务，使用学到的策略
2. **Evaluator**: 评估答案正确性
3. **Reflector**: 分析推理过程，识别成功/失败模式
4. **Curator**: 提取可复用策略，更新 Playbook

## 📄 许可

[https://github.com/pingcy/ace-langgraph#-%E8%AE%B8%E5%8F%AF](https://github.com/pingcy/ace-langgraph#-%E8%AE%B8%E5%8F%AF)

MIT License - 查看主项目的 LICENSE 文件

## About

         ACE LangGraph: ReAct Agent with Adaptive Learning - Integrating ACE framework with LangGraph for self-improving agents       

### Resources

[Readme](https://github.com/pingcy/ace-langgraph#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/pingcy/ace-langgraph/activity)

### Stars

[46
        stars](https://github.com/pingcy/ace-langgraph/stargazers)

### Watchers

[0
        watching](https://github.com/pingcy/ace-langgraph/watchers)

### Forks

[8
        forks](https://github.com/pingcy/ace-langgraph/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fpingcy%2Face-langgraph&report=pingcy+%28user%29)

## [Releases](https://github.com/pingcy/ace-langgraph/releases)

No releases published

## [Packages
      0](https://github.com/users/pingcy/packages?repo_name=ace-langgraph)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/pingcy/ace-langgraph/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          97.4%](https://github.com/pingcy/ace-langgraph/search?l=python)
- [Shell
          2.6%](https://github.com/pingcy/ace-langgraph/search?l=shell)

     You can’t perform that action at this time.
