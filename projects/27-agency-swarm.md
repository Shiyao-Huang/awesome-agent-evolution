# Agency Swarm - Swarm Agent框架
- **仓库**: VRSEN/agency-swarm
- **GitHub**: https://github.com/VRSEN/agency-swarm
- **Stars**: ~3,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-04
- **模式**: 智能体编排

## 概述
Agency Swarm 是一个受OpenAI Swarm启发的多Agent框架，采用Agency（机构）隐喻组织Agent层级关系。它以简洁的API设计实现Agent间的通信和协作，支持自定义工具、共享上下文和灵活的Agent拓扑结构。

## 核心特性
- 机构层级模型：以CEO、Agent等角色组织Agent层级，模拟企业决策结构
- 简洁通信机制：Agent间通过send_message和get_response进行类型安全的通信
- 自定义工具系统：支持为Agent定义专用工具，工具间可共享状态
- 共享文件存储：Agent之间可通过共享文件系统交换大型数据
- OpenAI API 原生集成：与OpenAI的Assistant API深度集成，利用线程和文件等原生能力

## 技术栈
- Python 3.8+
- OpenAI API / Assistants API
- Pydantic（数据验证）

## 与 Self Evolve 的关联
Agency Swarm 的层级化Agent组织模型为自我进化系统提供了一种可能的架构范式——通过不同层级的Agent分别负责规划、执行和评估，可以构建出具有自上而下决策和自下而上反馈的进化系统。

## 分类
- **类别**: 多Agent框架
- **标签**: agency-swarm, swarm, hierarchy, multi-agent, openai, communication
