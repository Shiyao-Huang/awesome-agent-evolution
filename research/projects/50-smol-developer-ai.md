# Smol Developer: 以人为中心的最小化 AI 全程序合成智能体

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/smol-ai/developer |
| Star | 15k+ |
| 技术栈 | Python, OpenAI API, OpenAI Function Calling, Modal, Agent Protocol, Poetry |
| 许可证 | MIT |
| 开发者 | swyx (Shawn Wang) / Smol AI |
| 版本 | v0 (Modal) / v1 (Library + API) |

## 项目简介

Smol Developer 是一个极简主义的 AI 开发者智能体,核心理念是"Human-centric & Coherent Whole Program Synthesis"——以人为中心的连贯全程序合成。它扮演一个"初级开发者"角色,根据用户的产品规格描述自动生成完整代码库,或者提供可嵌入应用的构建块。与传统脚手架工具 (如 create-react-app) 不同,Smol Developer 通过自然语言 prompt 实现了 `create-anything-app` 的愿景。项目由 AI 社区知名开发者 swyx (Shawn Wang) 创建,在 Hacker News 上引发广泛讨论,推动了 AI 辅助代码生成工具的发展浪潮。

项目的工作流程体现了"engineering with prompts, rather than prompt engineering"的理念:用户编写应用需求描述,AI 生成代码,人类运行和审阅代码后可以将错误信息粘贴回 prompt 进行迭代,直到满意为止。这种模式让 AI 在能创造价值时辅助开发,一旦 AI 成为阻碍,人类可以无缝接管代码,没有摩擦也没有"受伤的感情"。

v1 版本将核心逻辑重构为可导入的 Python 库 `smol_dev`,支持 Git 仓库模式、Library 模式和 API 模式 (通过 Agent Protocol) 三种使用方式,极大提升了灵活性和可集成性。项目使用 Poetry 管理依赖,核心依赖仅包括 openai、openai-function-call、tenacity 和 agent-protocol 四个包,保持了极低的依赖复杂度。社区已衍生出 JS/TS、C#、Golang 等多语言实现,验证了架构的普适性。

## 目录结构

```
smol_ai__developer/
├── smol_dev/                 # v1 核心库 (可 pip install)
│   ├── __init__.py           # 包入口
│   ├── prompts.py            # 核心提示词与 LLM 交互逻辑
│   ├── main.py               # 库模式主流程编排
│   ├── api.py                # Agent Protocol API 服务
│   └── utils.py              # 文件/文件夹操作工具
├── v0/                       # 原始版本 (Modal 依赖)
│   ├── main.py               # v0 主入口
│   ├── main_no_modal.py      # 无 Modal 版本
│   ├── debugger.py           # 代码调试器
│   ├── code2prompt.py        # 代码转 prompt 工具
│   ├── code2prompt/          # code2prompt 辅助模块
│   ├── code2prompt2code/     # code2prompt2code roundtrip 流水线
│   ├── constants.py          # 常量定义
│   ├── exampleChromeExtension/ # 示例 Chrome 扩展输出
│   └── static/               # 静态资源
├── examples/                 # 示例项目
│   └── v1_pong_game/         # Pong 游戏生成示例
├── dist/                     # 构建产物
├── main.py                   # CLI 入口
├── prompt.md                 # 示例 prompt 文件 (Chrome 扩展)
├── pyproject.toml            # 项目配置 (Poetry)
├── Makefile                  # 常用命令
└── poetry.lock               # 依赖锁定文件
```

## 核心模块分析

### 1. 三阶段代码生成管线 (smol_dev/prompts.py)

Smol Developer 的核心是一个精心设计的三阶段代码生成流程,整个 `prompts.py` 约 185 行代码实现了完整的程序合成能力。第一阶段 `plan()` 函数接收用户 prompt,以流式方式让 LLM 生成 GitHub Markdown 格式的完整开发计划,内容涵盖文件结构、导出变量、数据 schema、DOM 元素 ID 和函数名称等关键信息。第二阶段 `specify_file_paths()` 利用 OpenAI Function Calling API 通过 `@openai_function` 装饰器定义 `file_paths` 函数,确保 LLM 返回值始终是合法的 JSON 字符串数组。第三阶段 `generate_code()` (含异步版本) 针对每个文件路径逐一调用 LLM 生成代码,并通过正则表达式自动清理 markdown 代码围栏,返回纯净的源代码。

### 2. Agent Protocol API 层 (smol_dev/api.py)

实现了基于 Agent Protocol 标准的异步 API 服务,将三阶段生成流程拆分为可追踪的任务步骤。`StepTypes` 枚举定义了 PLAN、SPECIFY_FILE_PATHS、GENERATE_CODE 三种步骤类型。`task_handler` 在收到任务后创建初始规划步骤,`step_handler` 根据 `step.name` 路由到对应的处理函数:`_generate_shared_deps` 生成共享计划,`_generate_file_paths` 解析文件列表并为每个文件创建后续步骤,`_generate_code` 逐文件生成代码并注册为 artifact。生成的文件自动写入 `Agent.get_workspace(task_id)` 目录。

### 3. 代码调试器 (v0/debugger.py)

Debugger 模块实现了"cat 整个代码库 + 错误信息 = 精准修复建议"的创新调试模式。`walk_directory()` 函数递归遍历指定目录,过滤掉图片等不可读文件 (`EXTENSION_TO_SKIP`),将所有源文件内容收集到字典中。然后将完整代码上下文与用户描述的错误信息拼接为 prompt,发送给 LLM 获取针对具体文件的修复建议。该模块基于 Modal 平台实现云端执行,配置了重试机制 (最多 3 次,退避系数 2.0) 和并发限制 (5 个),是"paste error into prompt"理念的工程化体现。

### 4. 共享依赖机制 (shared_dependencies.md)

为了解决跨文件依赖一致性问题,Smol Developer 创造性地引入了 `shared_dependencies.md` 中间产物。`plan()` 函数生成的计划不仅包含架构描述,还详细列出每个文件将导出的变量、数据 schema、DOM 元素 ID 和消息名称。在 `generate_code()` 的 system prompt 中明确要求"do not stray from the names of the files and the plan we have decided on",确保每个文件的生成过程都严格遵循共享计划。这实质上让 GPT 在不同文件间"自己与自己对话",是实现全程序连贯合成的关键创新。

### 5. Code2Prompt 与逆向工程 (v0/code2prompt.py)

v0 版本中的 `code2prompt` 模块实现了从现有代码库逆向生成描述性 prompt 的能力,是项目追求"quine smol developer"——能生成自身代码的 AI 开发者——的重要尝试。`code2prompt2code/` 目录实现了完整的 roundtrip 流水线:代码转 prompt,再从 prompt 生成代码,验证生成保真度。虽然 swyx 坦承这一方向"not very good yet",但它展示了 AI 代码生成工具自我理解和自我复制的长期愿景。

## 创新洞察

Smol Developer 提出了多个影响深远的创新思路。**Markdown is all you need** 指出 Markdown 是混合自然语言和代码的完美载体,代码围栏与变量名自然共存,且 GPT-4 能严格遵循嵌入 prompt 的代码规范。**Copy and paste programming** 让开发者通过粘贴 curl 请求/响应教会 AI 使用截止日期之后的 API,通过粘贴错误实现"日志驱动的编程"。**低门槛激活不熟悉的 API** 让开发者无需深读 Chrome Extension Manifest V3 等复杂文档,用自然语言描述意图即可获得可工作的代码。这些洞察深刻影响了后续 AI 编程工具的设计哲学。

## 技术亮点

1. **三阶段分解式代码生成**: 将全程序合成分解为 plan -> specify_file_paths -> generate_code 三个阶段,通过 shared_dependencies.md 中间产物维护跨文件一致性,有效缓解了 LLM 在长程序生成中的幻觉问题
2. **OpenAI Function Calling 保证结构化输出**: 在文件路径指定阶段使用 Function Calling API,确保返回值始终是合法的 JSON 数组,避免了传统 prompt 方式下解析不确定的问题
3. **三种使用模式统一架构**: Git Repo 模式、Library 模式 (pip install smol_dev)、Agent Protocol API 模式共享同一套核心函数,通过不同入口暴露,满足从个人开发到服务集成的多种需求
4. **Tenacity 重试与容错**: 代码生成函数使用 tenacity 库实现了随机指数退避重试策略 (最少 1 秒,最多 60 秒,最多 6 次尝试),有效应对 OpenAI API 的速率限制和网络波动
5. **极简架构哲学**: 整个 v1 核心库仅包含 5 个文件、约 200 行有效代码,展示了用最少抽象实现 AI 代码生成的可能性,是对过度工程化的有力反证
6. **多语言 Fork 生态**: 社区已衍生出 JS/TS (smol-dev-js)、C#/.NET (smol-ai-dotnet)、Golang (smol-dev-go) 等多种语言实现,验证了三阶段架构设计的普适性

## 适用场景

- 快速原型开发:用一句话描述需求即可生成完整的前端应用、Chrome 扩展或 Node.js 项目
- AI 编程助手集成:通过 Library 模式将代码生成能力嵌入自己的应用或 IDE 插件
- 教学演示:作为理解 LLM 代码生成原理的最佳入门项目,整个 v1 核心仅 5 个文件约 200 行
- 自动化代码生成流水线:通过 Agent Protocol API 接入 CI/CD 流程,实现从需求到代码的自动化
- 不熟悉 API 的快速入门:通过自然语言描述即可使用 CSS 动画、Chrome Extension Manifest 等复杂 API

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 分阶段代码生成 | plan -> specify -> generate 的三阶段流水线为 Self-Evolve 的代码自动进化提供了经过验证的生成范式,可在进化循环中复用 |
| 共享依赖一致性 | shared_dependencies.md 机制解决了多文件生成中的一致性问题,Self-Evolve 可借鉴此模式在多模块协同进化中维护接口契约 |
| 人机协作循环 | Human-in-the-loop 的迭代模式——人类审阅、粘贴错误、AI 修复——为 Self-Evolve 的进化反馈循环提供了交互范式参考 |
| Agent Protocol 集成 | 基于 Agent Protocol 的 API 模式展示了如何将代码生成智能体标准化为可远程调用的服务,Self-Evolve 可采用相同协议暴露进化能力 |
| 极简智能体架构 | 用最小代码量实现完整 AI 开发者的思路,启示 Self-Evolve 在架构设计上应追求核心流程的简洁性而非功能堆砌 |
| 错误驱动修复 | Debugger 模块的"cat 代码库 + 错误信息"模式为 Self-Evolve 提供了自动错误反馈和迭代修复的工程思路 |

## 参考资料

- [Smol Developer GitHub](https://github.com/smol-ai/developer)
- [Agent Protocol Specification](https://github.com/e2b-dev/agent-protocol)
- [swyx: Build the thing that builds the thing](https://twitter.com/swyx/status/1657578738345979905)
- [Latent Space - AI Developer Insights](https://latent.space/)
- [Smol Developer JS/TS Fork](https://github.com/PicoCreator/smol-dev-js)
- [Smol Developer Golang Fork](https://github.com/tmc/smol-dev-go)

## GitNexus 深度架构分析

- **源码位置**: `projects/repos/smol_ai__developer`
- **分析命令**: `gitnexus analyze repos/smol_ai__developer --index-only --skip-git --name "Smol Developer"`
