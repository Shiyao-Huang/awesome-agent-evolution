# smol developer: 以人为中心的 AI 全程序合成助手

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/smol-ai/developer |
| Star | 14,000+ |
| 技术栈 | Python, OpenAI API, Poetry |
| 许可证 | MIT |
| 开发者 | smol-ai（swyx 等） |

## 项目简介

smol developer 是一个"初级开发者"Agent，旨在成为人类开发者的个人编程助手。它的核心理念是"构建构建事物的事物"（Build the thing that builds the thing），通过自然语言产品规格描述自动生成完整代码库。项目强调人机协作的增量式开发循环——人类编写提示词，AI 生成代码，人类审阅并反馈错误，循环迭代直到满意。smol developer 同时提供 Git 仓库模式（命令行工具）和库模式（可集成的 Python 包），体现了从工具到基础设施的设计哲学。

## 目录结构

```
smol_ai__developer/
├── smol_dev/                  # 核心 Python 包（库模式）
│   ├── __init__.py            # 包初始化
│   ├── api.py                 # 核心 API 接口
│   ├── main.py                # 主逻辑（plan, specify, generate）
│   ├── prompts.py             # 提示词模板
│   └── utils.py               # 工具函数
├── main.py                    # CLI 入口（Git 仓库模式）
├── prompt.md                  # 示例提示词
├── dist/                      # 构建产物
├── v0/                        # v0 版本存档
├── pyproject.toml             # 项目配置与依赖
├── poetry.lock                # 依赖锁定
└── readme.md                  # 项目文档
```

## 核心模块分析

### 1. 三步代码生成流水线

smol developer 的核心是一个简洁的三步代码生成流程：

```python
shared_deps = plan(prompt)                        # 第一步：生成编码计划
file_paths = specify_file_paths(prompt, shared_deps)  # 第二步：确定文件结构
code = generate_code_sync(prompt, shared_deps, file_path)  # 第三步：逐文件生成代码
```

这种"规划 -> 分解 -> 生成"的流水线设计清晰地将代码合成过程分解为可独立优化和审查的阶段。

### 2. 提示词模板系统（prompts.py）

提示词模板系统封装了与 LLM 交互的提示工程：
- `plan()`：根据产品规格生成整体编码计划
- `specify_file_paths()`：利用 OpenAI Function Calling API 保证 JSON 格式输出，确定需要创建的文件列表
- `generate_code_sync()`：基于上下文生成单个文件的完整代码

### 3. 人机协作循环

smol developer 的设计哲学是"工程化提示词，而非提示工程"（Engineering with prompts, rather than prompt engineering）：
- 人类编写产品需求提示词
- AI 生成代码
- 人类运行/审阅代码
- 人类通过修改提示词或粘贴错误信息来反馈问题
- 循环迭代，直到满意为止

当 AI 不再增加价值时，人类可以随时接管代码库，无需任何额外操作。

### 4. 库模式（Library Mode）

v1 版本引入的库模式将 smol developer 从独立工具转变为可嵌入其他应用的组件：
- `pip install smol_dev` 即可使用
- 核心函数（plan, specify_file_paths, generate_code_sync）可直接导入
- 支持在任何 Python 应用中构建 AI 驱动的代码生成能力

## 技术亮点

1. **极致简洁**：整个核心逻辑只有约 100 行有效代码，证明了 AI Agent 不一定需要复杂的框架和抽象层。三个核心函数（plan, specify, generate）覆盖了代码合成的全流程。
2. **Function Calling 保证结构化**：利用 OpenAI 的 Function Calling API 确保文件路径列表以 JSON 格式返回，避免了正则解析的脆弱性。
3. **共享依赖上下文**：`shared_deps` 变量作为全局编码计划贯穿所有文件生成，确保多文件代码库的一致性和连贯性。
4. **人机协作优先**：不追求完全自动化，而是将人类判断嵌入每个关键决策点，保持人类对代码质量的最终控制权。
5. **create-anything-app 范式**：取代 create-react-app 等固定的项目模板，通过自然语言驱动实现真正的通用项目脚手架。

## 与 Self-Evolve 关联

| 维度 | 贡献 |
|------|------|
| 代码生成流水线 | "规划 -> 分解 -> 生成"的三步流水线为 Self-Evolve 的代码自生成提供了清晰的流程参考 |
| 人机协作循环 | 增量式的人机反馈循环为 Self-Evolve 的人工审核和纠正机制提供了简洁范式 |
| 极简架构 | 证明自改进系统不一定需要复杂框架，核心逻辑的简洁性是可维护自改进的基础 |
| 共享上下文 | shared_deps 模式展示了如何在多文件生成中保持上下文一致性 |
| 库模式集成 | 从工具到库的模式转换为 Self-Evolve 的可嵌入设计提供了参考 |
| 提示词驱动 | 提示词驱动的开发模式为 Self-Evolve 的自动提示词优化提供了应用场景 |
