---
title: "SCOPE"
repo: "JarvisPei/SCOPE"
url: "https://github.com/JarvisPei/SCOPE"
stars: 77
forks: 6
last_pushed: "2026-03-26T03:01:04Z"
license: "MIT"
language: "Python"
local_path: "repos/jarvispei__scope"
---

# SCOPE

## 项目概览
- **仓库**：[JarvisPei/SCOPE](https://github.com/JarvisPei/SCOPE)
- **Star / Fork**：77 / 6
- **最近活跃**：2026-03-26T03:01:04Z
- **主要语言**：Python
- **许可证**：MIT
- **中文摘要**：Self-evolving Context Optimization via Prompt Evolution，通过提示词/上下文演化优化 LLM 的任务表现。

## 技术栈
Python, OpenAI 兼容 API, Anthropic/Claude, pytest

依赖与配置证据：
- `pyproject.toml`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
文件 .env.template
目录 .github
目录 .github/ISSUE_TEMPLATE
文件 .github/ISSUE_TEMPLATE/bug_report.md
文件 .github/ISSUE_TEMPLATE/feature_request.md
文件 .github/pull_request_template.md
目录 .github/workflows
文件 .github/workflows/test.yml
文件 .gitignore
文件 .pre-commit-config.yaml
文件 CHANGELOG.md
文件 CONTRIBUTING.md
文件 LICENSE
文件 README.md
目录 assets
文件 assets/README_zh.md
文件 assets/SCOPE_logo.png
目录 examples
文件 examples/basic_usage.py
文件 examples/custom_adapter.py
文件 examples/demo.py
文件 examples/quick_start.py
文件 examples/test_scope_deep.py
文件 examples/test_simple.py
文件 pyproject.toml
目录 scope
文件 scope/__init__.py
文件 scope/history_store.py
文件 scope/memory_optimizer.py
目录 scope/models
文件 scope/models/__init__.py
文件 scope/models/anthropic_adapter.py
文件 scope/models/base.py
文件 scope/models/litellm_adapter.py
文件 scope/models/openai_adapter.py
文件 scope/optimizer.py
文件 scope/prompts.py
文件 scope/strategic_store.py
文件 scope/synthesizer.py
文件 scope/utils.py
目录 tests
文件 tests/__init__.py
文件 tests/test_basic.py
文件 tests/test_integration.py
文件 tests/test_models.py
文件 tests/test_strategic_store.py
文件 tests/test_synthesizer.py
```

## 关键代码片段分析
### `scope/prompts.py`
- 代码信号：第 2 行：`Prompt templates for SCOPE components.`；第 4 行：`This module centralizes all LLM prompts used in SCOPE for:`；第 9 行：`Each prompt uses Python format string syntax with named placeholders.`；第 13 行：`# GUIDELINE SYNTHESIS PROMPTS (synthesizer.py)`；第 16 行：`ERROR_REFLECTION_PROMPT = """You are a prompt engineering expert analyzing agent execution errors.`。

## GitNexus 知识图谱分析
- **分析命令**：`gitnexus analyze repos/jarvispei__scope --index-only --skip-git --name ae-jarvispei__scope`。
- **图谱规模**：754 nodes / 1336 edges / 23 clusters / 29 flows。
- **查询语句**：`prompt evolution context optimization evaluator`。
- **相关执行流程**：
  - Demo_scope_optimizer → _classify_and_check_duplicate
  - Main → _classify_and_check_duplicate
  - Main → _classify_and_check_duplicate
  - Add_strategic_rule → Optimize_rules
- **关键符号/文件**：
  - `TestSCOPEOptimizer`（`tests/test_basic.py`）
  - `test_on_step_complete_with_error`（`tests/test_basic.py`）
  - `test_on_step_complete_returns_none_without_context`（`tests/test_basic.py`）
  - `TestGuidelineSynthesizer`（`tests/test_synthesizer.py`）
  - `test_generate_update_from_error`（`tests/test_synthesizer.py`）
  - `test_generate_handles_invalid_json`（`tests/test_synthesizer.py`）
- **符号上下文**：
  - 符号 `TestSCOPEOptimizer` 位于 `tests/test_basic.py` 第 60–186 行
  - 出边/调用或包含关系：has_method: 9
- **架构解读**：GitNexus 结果用于校验本报告的循环/评估/反思/演化模块定位；如果流程与手动轻量扫描不一致，后续以 GitNexus 图谱为优先证据。

## 实现方法提取
- **循环类型**：进化/搜索循环。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“Prompt/Context 优化”层面的 Self Evolve，适合放在从提示工程到自进化上下文的谱系中。
- 在 Landing Page 中建议标签：`进化/搜索循环`。
