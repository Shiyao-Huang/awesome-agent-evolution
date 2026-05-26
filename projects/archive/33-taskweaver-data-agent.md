# TaskWeaver - 数据分析Agent
- **仓库**: microsoft/TaskWeaver
- **GitHub**: https://github.com/microsoft/TaskWeaver
- **Stars**: ~5,000
- **语言**: Python
- **许可**: MIT
- **最近活跃**: 2025-03
- **模式**: 反馈-精炼

## 概述
TaskWeaver 是微软开发的数据分析Agent框架，支持将自然语言查询转化为可执行的数据分析代码。它采用Planner-CodeGenerator组合架构，能够处理复杂的数据分析任务，并支持自定义插件扩展分析能力。

## 核心特性
- 自然语言到代码：将用户的自然语言查询自动转化为Python数据分析代码
- Planner-CodeGenerator 架构：规划器分解任务，代码生成器将计划转化为可执行代码
- 插件系统：支持自定义分析插件，可扩展支持新的数据处理和分析能力
- 上下文感知：自动维护对话上下文，支持多轮交互式数据分析
- 安全执行环境：在受控环境中执行生成的代码，保障数据安全

## 技术栈
- Python 3.10+
- OpenAI API / Azure OpenAI
- Pandas / NumPy（数据处理）
- AutoGen（Agent通信框架）

## 与 Self Evolve 的关联
TaskWeaver 的规划-代码生成-执行验证的闭环流程体现了自我进化中的反馈精炼模式——通过执行分析代码获取结果，验证结果是否满足查询意图，并据此修正代码，这种能力可直接应用于进化系统中的自我评估环节。

## 分类
- **类别**: 数据分析Agent
- **标签**: taskweaver, data-analysis, code-generation, microsoft, planner, plugin-system
