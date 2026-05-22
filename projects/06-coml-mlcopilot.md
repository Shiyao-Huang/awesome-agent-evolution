# CoML (原 MLCopilot): 交互式 ML 编程助手

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/microsoft/CoML |
| 开发者 | Microsoft Research |
| 论文 | MLCopilot: Unleashing the Power of Large Language Models in Machine Learning (arXiv: 2304.14979) |
| 技术栈 | Python, OpenAI GPT-3.5-turbo-16k, Jupyter Lab/Notebook, TypeScript |
| 许可证 | MIT |
| 安装 | `pip install mlcopilot` |

## 项目简介

CoML (原 MLCopilot) 是微软研究院开发的交互式 ML 编程助手，通过 LLM 帮助数据科学家在 Jupyter 环境中编写、修复和优化 ML 代码。

核心功能：
1. **自然语言编程**：用自然语言描述任务，自动生成代码
2. **代码修复**：`%comlfix` 自动修复错误
3. **灵感建议**：`%comlinspire` 推荐下一步操作
4. **配置建议**：Config Agent 为新任务推荐 ML 超参数配置

## 目录结构

```
CoML/
├── coml/
│   ├── __init__.py
│   ├── configagent/        # Config Agent（MLCopilot 核心）
│   │   ├── suggest.py      # 配置推荐引擎
│   │   ├── knowledge/      # ML 知识库
│   │   └── ...
│   ├── magic.py            # Jupyter Magic 命令
│   └── ...
├── assets/
│   └── coml.db             # ML 知识库数据库
├── src/                    # Jupyter 扩展前端 (TypeScript)
├── test/                   # 测试
├── examples/               # 示例脚本
├── package.json            # Jupyter 扩展包
├── pyproject.toml          # Python 包配置
└── tsconfig.json           # TypeScript 配置
```

## 核心模块分析

### 1. 知识库驱动的配置推荐

Config Agent 是 CoML 的核心创新，实现了**基于知识库的 ML 配置迁移**：

```
输入: 任务描述 + 搜索空间
  ↓
知识库检索: 找到最相似的历史任务
  ↓
LLM 推理: 基于历史配置生成新配置建议
  ↓
输出: 推荐的 ML 配置 + 置信度
```

**知识库结构**（`coml.db`）：
- 存储了大量历史 ML 任务和对应的最佳配置
- 支持基于任务相似性的检索
- 持续积累新知识

### 2. Jupyter Magic 命令

CoML 提供三个核心 Jupyter Magic：

```python
# 1. 生成代码
%coml 对香蕉质量数据集进行分类

# 2. 修复错误
%comlfix  # 自动修复上一个 cell 的错误
%comlfix 分割数据时列数不匹配

# 3. 灵感建议
%comlinspire  # 推荐下一步操作
```

### 3. Prompt 工程模式

**Config Agent Prompt**：
```python
from coml.configagent.suggest import suggest

space = import_space("YOUR_SPACE_ID")  # 导入搜索空间
task_desc = "YOUR_TASK_DESCRIPTION"     # 新任务描述
suggest_configs, knowledge = suggest(space, task_desc)
```

**模式**：
- 知识库检索 + LLM 推理的混合模式
- 将历史经验编码为向量，新任务通过相似性匹配获得初始配置
- LLM 在历史配置基础上进行推理和调整

### 4. 评估框架

- 基于实际 ML 任务的端到端评估
- 比较自动生成配置 vs. 默认配置的效果
- 在公开数据集上验证

## 技术亮点

1. **知识库驱动**：ML 知识的持续积累和迁移
2. **Jupyter 原生集成**：无缝融入数据科学家工作流
3. **三合一交互**：代码生成 + 修复 + 灵感建议
4. **配置迁移**：将历史 ML 经验迁移到新任务
5. **微软出品**：工业级质量

## 与 Self-Evolve 关联

| 维度 | CoML 贡献 |
|------|-----------|
| 知识积累 | ML 知识库的持续积累和迁移机制可参考 |
| 交互式 | Jupyter 原生集成的交互模式 |
| 配置优化 | 基于历史经验的配置推荐，是一种经验驱动的自我改进 |
| 启示 | "知识库 + LLM 推理" 的模式适用于 Agent 系统的经验积累 |

## 参考资料

- 论文：[MLCopilot](https://arxiv.org/abs/2304.14979)
- Microsoft Research 官方实现

## GitNexus 深度架构分析
- **源码位置**：`projects/repos/microsoft__coml`（指向 `repos/microsoft__coml` 的本地浅克隆）。
- **分析命令**：`gitnexus analyze repos/microsoft__coml --index-only --skip-git --name CoML`。
- **知识图谱规模**：937 symbols / 1693 edges / 36 clusters / 78 flows。
- **查询语句**：`machine learning copilot workflow planner model data evaluate`。
- **核心执行流程候选**：
  - Post_validation → Get_llm
  - Deconstruct → Is_numeric
  - Deconstruct → Is_datetime
  - Post_validation → Get_token_count_func
- **关键符号/文件**：
  - `ipython_utils.py`（`coml/ipython_utils.py`）
  - `get_last_cell`（`coml/ipython_utils.py`）
  - `parse_cell_outputs`（`coml/ipython_utils.py`）
  - `test_utils.py`（`test/configagent/test_utils.py`）
  - `test_parser_configs`（`test/configagent/test_utils.py`）
  - `test_format_config`（`test/configagent/test_utils.py`）
- **调用关系上下文**：
  - 符号 `ipython_utils.py` 位于 `coml/ipython_utils.py` 第 ?–? 行
  - 入边/被依赖关系：imports: 1
- **架构结论**：该图谱结果用于把报告中的“进化循环 / Prompt 工程 / 评估框架 / Agent 编排”定位到具体符号、文件和流程，后续前端可把本节作为深度源码证据。
