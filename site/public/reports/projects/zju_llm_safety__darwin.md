---
title: "DARWIN"
repo: "ZJU-LLM-Safety/DARWIN"
url: "https://github.com/ZJU-LLM-Safety/DARWIN"
stars: 41
forks: 4
last_pushed: "2026-05-07T03:26:42Z"
license: "NOASSERTION"
language: "Python"
local_path: "repos/zju_llm_safety__darwin"
---

# DARWIN

## 项目概览
- **仓库**：[ZJU-LLM-Safety/DARWIN](https://github.com/ZJU-LLM-Safety/DARWIN)
- **Star / Fork**：41 / 4
- **最近活跃**：2026-05-07T03:26:42Z
- **主要语言**：Python
- **许可证**：NOASSERTION
- **中文摘要**：自进化 LLM 越狱/安全研究框架，维护策略池并用检索、过滤、马尔可夫选择、反思和遗传演化扩展攻击策略。

## 技术栈
Python, OpenAI 兼容 API, PyTorch, Transformers

依赖与配置证据：
- `requirements.txt`

## 核心架构图（文字描述）
`任务 / 环境 / Benchmark 输入` → `进化/搜索循环 → 反思记忆` → `改进后的输出、代码、Prompt、记忆、策略或模型工件`

## 目录结构信号
```text
文件 .gitignore
文件 README.md
目录 assets
文件 assets/Darwin-Framework.pdf
文件 assets/Darwin-Framework_01.png
文件 assets/cartoon.png
目录 attack
文件 attack/__init__.py
文件 attack/attack_pipeline.py
文件 attack/history_memory.py
文件 attack/judge.py
文件 attack/markov_selector.py
文件 attack/prompt_generator.py
目录 collectors
文件 collectors/__init__.py
文件 collectors/arxiv_collector.py
文件 collectors/base.py
文件 collectors/discord_collector.py
文件 collectors/github_collector.py
文件 collectors/google_collector.py
文件 collectors/huggingface_collector.py
文件 collectors/institution_collector.py
文件 collectors/reddit_collector.py
文件 collectors/twitter_collector.py
目录 config
文件 config/__init__.py
文件 config/prompts.py
文件 config/settings.py
目录 database
文件 database/__init__.py
文件 database/chroma_db.py
文件 database/embedding.py
文件 database/sqlite_db.py
目录 evolution
文件 evolution/__init__.py
文件 evolution/external_evolution.py
文件 evolution/gan_evolution.py
文件 evolution/genetic_evolution.py
文件 evolution/mutation_operators.py
文件 evolution/reflective_evolution.py
目录 example-results
文件 example-results/claude-sonnet-4-6.jsonl
文件 example-results/deepseek-v4-pro.jsonl
目录 examples
文件 examples/harmbench400.json
文件 examples/selected_strategy_catalog.json
文件 main.py
目录 models
文件 models/__init__.py
文件 models/api_model.py
文件 models/llm_manager.py
文件 models/local_model.py
文件 requirements.txt
目录 sandbox
文件 sandbox/__init__.py
```

## 关键代码片段分析
### `main.py`
- 代码信号：第 1 行：`"""DARWIN: Self-evolving jailbreak strategy framework — CLI entry point."""`；第 13 行：`DEFAULT_EVOLUTION_INTERVAL_SECONDS,`；第 18 行：`REFLECTIVE_SANDBOX_ENABLED,`；第 22 行：`def get_components():`；第 33 行：`def cmd_seed(args):`。
### `evolution/reflective_evolution.py`
- 代码信号：第 1 行：`"""Reflective evolution — learn from failures to create improved strategies."""`；第 8 行：`from config.prompts import REFLECTIVE_EVOLUTION_PROMPT, REFUSAL_REASON_PROMPT`；第 11 行：`ATTACK_REFLECTION_DEVICE,`；第 14 行：`REFLECTIVE_SANDBOX_ENABLED,`；第 18 行：`from models.llm_manager import LLMManager`。
### `evolution/gan_evolution.py`
- 代码信号：第 1 行：`"""GAN-inspired evolution — progressive target model replacement."""`；第 6 行：`class GANEvolution:`；第 7 行：`"""Track and manage progressive target model upgrades (GAN-style co-evolution)."""`；第 9 行：`def __init__(self, sqlite: SQLiteDB):`；第 13 行：`def _ensure_initial_model(self):`。
### `evolution/external_evolution.py`
- 代码信号：第 1 行：`"""External evolution — collect → extract → dedup → sandbox → pool."""`；第 9 行：`from config.prompts import EXTERNAL_STRATEGY_REVIEW_PROMPT`；第 11 行：`from models.llm_manager import LLMManager`；第 30 行：`class ExternalEvolution:`；第 33 行：`def __init__(self, sqlite=None, chroma=None, *, sandbox_enabled: bool = EXTERNAL_SANDBOX_ENABLED):`。
### `evolution/genetic_evolution.py`
- 代码信号：第 1 行：`"""Genetic evolution — crossover and mutation of active strategy templates."""`；第 9 行：`from config.prompts import CROSSOVER_PROMPT, MUTATION_PROMPT`；第 10 行：`from config.settings import CROSSOVER_TOP_K, GENETIC_SANDBOX_ENABLED, MUTATION_RATE`；第 13 行：`from models.llm_manager import LLMManager`；第 17 行：`from evolution.mutation_operators import get_random_operator`。

## 实现方法提取
- **循环类型**：进化/搜索循环 → 反思记忆。
- **LLM 交互模式**：从依赖和源码命名推断，主要通过 Prompt 模板、LLM API 调用、评估反馈或记忆状态完成迭代。
- **反馈来源**：可能来自单元测试、Benchmark 分数、模型自评、反思文本、运行错误或人工定义的 judge。
- **跨轮状态**：候选代码、反思记忆、提示词/上下文、策略池、生成数据或模型训练工件。

## 与其他项目的对比
- 它代表“策略池/安全攻防”层面的 Self Evolve，可用于说明进化机制也会出现在红队、jailbreak 和安全评测中。
- 在 Landing Page 中建议标签：`进化/搜索循环`、`反思记忆`。
