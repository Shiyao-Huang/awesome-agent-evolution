# E2B Code Interpreter: AI 代码安全沙箱执行环境

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/e2b-dev/code-interpreter |
| Star | 5k+ |
| 技术栈 | Python, TypeScript, Docker, Cloud Sandbox, Firecracker MicroVM |
| 许可证 | Apache 2.0 |
| 开发者 | E2B (e2b.dev) |

## 项目简介

E2B Code Interpreter 是一个开源基础设施项目,允许在云端安全隔离的沙箱中运行 AI 生成的代码。它提供 Python 和 JavaScript/TypeScript 双语言 SDK,支持代码执行、文件操作、图表生成和环境定制。作为构建 AI 编程助手和代码智能体的关键基础设施,E2B 为 AI 生成代码的安全执行提供了工业级解决方案,被众多 AI 编程工具 (如 Cursor、Devin 等) 作为底层执行引擎。

## 目录结构

```
e2b__code_interpreter/
├── python/                  # Python SDK
│   └── e2b_code_interpreter/
│       ├── __init__.py               # 包入口与公共 API
│       ├── code_interpreter_sync.py  # 同步代码解释器
│       ├── code_interpreter_async.py # 异步代码解释器
│       ├── charts.py                 # 图表数据提取
│       ├── models.py                 # 执行结果数据模型
│       ├── constants.py              # 沙箱配置常量
│       └── exceptions.py             # 异常类型定义
├── js/                      # JavaScript/TypeScript SDK
│   └── src/
│       ├── sandbox.ts                # 沙箱核心逻辑
│       ├── charts.ts                 # 图表处理模块
│       ├── messaging.ts              # 沙箱通信协议
│       ├── consts.ts                 # 常量定义
│       └── utils.ts                  # 工具函数
├── chart_data_extractor/    # 图表数据提取模块
├── template/                # 沙箱环境模板配置
└── readme-assets/           # README 文档资源
```

## 核心模块分析

### 1. 沙箱核心引擎 (python/e2b_code_interpreter/ + js/src/sandbox.ts)

基于 Firecracker MicroVM 技术构建的云端安全沙箱,为每次代码执行请求创建完全隔离的轻量级虚拟机环境。SDK 同时提供同步和异步两种调用模式:同步模式适合脚本和批处理场景,异步模式适合 Web 服务和智能体应用。每个沙箱拥有独立的文件系统、进程空间和网络配置,确保 AI 生成的任意代码都不会影响宿主系统。

### 2. 有状态代码执行与结果管理

SDK 支持在同一个沙箱内逐步执行代码并保持变量状态。例如先执行 `x = 1`,再执行 `x += 1`,变量值在多次执行间保持一致。这种有状态执行模式模拟了 Jupyter Notebook 的交互式编程体验,使 AI 智能体可以分步构建和调试代码。执行结果通过结构化的 `models.py` 数据模型返回,包含文本输出、错误信息、执行日志等多种类型。

### 3. 图表数据提取 (chart_data_extractor/ + charts.py/charts.ts)

专门用于从代码执行结果中提取 Matplotlib、Plotly、Seaborn 等图表库生成的可视化数据。该模块将图表图像转换为结构化的数据格式 (包括数据点、坐标轴标签、图例等),使 AI 智能体能够理解和分析代码生成的可视化输出,而不仅仅是处理图像文件。

### 4. 模板系统 (template/)

提供沙箱环境的定制化模板机制,支持预装特定的 Python 包、系统依赖和环境配置。用户可以根据不同需求创建定制化的沙箱镜像,例如数据分析环境 (预装 pandas、numpy)、机器学习环境 (预装 torch、scikit-learn) 或 Web 开发环境。模板确保每次创建的沙箱拥有一致的运行环境。

## 技术亮点

1. **Firecracker MicroVM 安全隔离**: 基于 AWS 开源的 Firecracker 虚拟化技术,每个沙箱是独立的轻量级虚拟机,提供内核级别的安全隔离,启动时间仅毫秒级,远快于传统 Docker 容器方案
2. **有状态代码执行**: 支持在同一沙箱中多次执行代码并保持变量状态,完美模拟 Jupyter Notebook 的交互式编程体验,是 AI 编程助手的核心能力基础
3. **双语言 SDK 统一 API**: Python 和 JavaScript/TypeScript SDK 提供完全一致的 API 接口设计和使用体验,支持跨语言项目集成
4. **图表结果结构化提取**: 创新的图表数据提取能力,将可视化输出转化为结构化数据,使 AI 智能体能够理解和操作图表内容
5. **云端弹性伸缩**: 沙箱在云端按需创建和销毁,支持高并发场景下的弹性伸缩,无需用户管理底层基础设施
6. **简洁的集成方式**: 仅需安装 SDK 包和设置 API Key 即可使用,大幅降低了将安全代码执行能力集成到 AI 应用中的门槛

## 适用场景

- AI 编程助手的代码执行后端 (如 Cursor, Devin 等工具的底层执行层)
- 需要安全执行用户提交代码的在线教育平台
- AI 智能体的工具调用执行环境,如数据分析智能体和科研自动化智能体
- 需要隔离执行环境的 CI/CD 流水线和自动化测试框架

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 安全执行环境 | 提供 AI 生成代码的安全沙箱执行方案,Self-Evolve 可直接集成用于安全执行自动生成的代码和测试用例 |
| 代码执行基础设施 | 作为底层执行引擎,支撑 Self-Evolve 中"代码生成 -> 安全执行 -> 结果收集 -> 迭代改进"的完整闭环 |
| 有状态执行模式 | 支持多次执行间的状态保持,非常适用于 Self-Evolve 的迭代式代码改进流程,避免每次执行都重新初始化环境 |
| 图表结果解析 | 将可视化输出结构化的能力,可扩展为 Self-Evolve 的执行结果分析组件,自动解读测试覆盖率图和性能曲线 |
| 云端弹性架构 | 按需创建和销毁的沙箱管理方案,为 Self-Evolve 在大规模并行进化场景下提供基础设施层面的弹性支持 |
