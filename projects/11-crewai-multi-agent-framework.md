# CrewAI - 多Agent协作框架
- **仓库**: crewAIInc/crewAI
- **GitHub**: https://github.com/crewAIInc/crewAI
- **Stars**: ~47,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-05
- **模式**: 智能体编排

## 概述
CrewAI 是一个面向多Agent协作的开源框架，采用 Crew（团队）和 Flow（流程）双架构设计，支持用户以角色扮演的方式定义多个AI Agent，协同完成复杂任务。它强调Agent之间的分工协作与流程编排，是企业级多Agent应用开发的重要基础设施。

## 核心特性
- Crew + Flow 双架构：Crew 负责Agent团队定义，Flow 负责任务流程编排，两者独立又可组合
- 角色驱动的Agent设计：每个Agent拥有明确的角色、目标和背景故事，模拟真实团队协作
- 丰富的工具生态：支持自定义工具、预置工具集以及与LangChain工具的无缝集成
- 内存与上下文管理：支持短期、长期和实体记忆，Agent可在交互中积累经验
- 人机协作支持：提供人类输入节点，允许在关键决策点介入人工审批

## 技术栈
- Python 3.10+
- LangChain（工具集成）
- OpenAI / Anthropic / 开源LLM（多模型支持）
- Pydantic（数据验证与配置）
- FastAPI（API服务）

## 与 Self Evolve 的关联
CrewAI 的多Agent编排能力为自我进化系统提供了团队协作的基础模式，其角色定义和任务分配机制可直接用于构建自我改进的Agent团队，实现任务分解、执行、评审的自动化闭环。

## 分类
- **类别**: 多Agent协作框架
- **标签**: multi-agent, crew, workflow, role-play, collaboration, orchestration
