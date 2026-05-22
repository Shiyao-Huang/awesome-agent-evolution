# AgentVerse - 多Agent协作与模拟
- **仓库**: openbmb/agentverse
- **GitHub**: https://github.com/openbmb/agentverse
- **Stars**: ~4,000
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2024-12
- **模式**: 智能体编排

## 概述
AgentVerse 是一个面向多Agent协作与模拟的任务求解框架，提供灵活的Agent编排机制，支持多种协作模式包括小组讨论、结对编程等。它为研究多Agent系统的涌现行为和协作效率提供了统一的实验平台。

## 核心特性
- 多样化协作模式：支持小组讨论（Group Discussion）、结对编程（Pair Programming）等多种Agent组织形式
- 可配置的Agent能力：支持为Agent配置不同的LLM后端、工具集和记忆系统
- 任务分解与分配：自动将复杂任务分解为子任务，并分配给最合适的Agent
- 模拟环境支持：提供多Agent社会模拟的环境，用于研究群体行为
- 可视化界面：内置Web界面，便于观察和分析Agent间的交互过程

## 技术栈
- Python 3.8+
- OpenAI API
- Gradio（Web界面）
- Diffusers（图像生成支持）

## 与 Self Evolve 的关联
AgentVerse 的多Agent模拟环境为研究自我进化策略提供了实验平台，其任务分解和动态分配机制可用于实现进化过程中的适应性资源调度，不同Agent角色间的协作模式为构建自我改进系统提供了组织参考。

## 分类
- **类别**: 多Agent协作与模拟
- **标签**: agentverse, simulation, collaboration, task-solving, multi-agent, emergence
