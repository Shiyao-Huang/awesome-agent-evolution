# Tutorial-GP-LLM: 基于大语言模型的遗传编程教学实现

## 基本信息

| 字段 | 内容 |
|------|------|
| GitHub | https://github.com/alfa-group/tutorial_gp_llm |
| Star | 50+ |
| 技术栈 | Python 3, OpenAI API, YAML配置, 符号回归 |
| 许可证 | 未明确 |
| 开发者 | ALFA Group (MIT, Erik Hemberg等) |

## 项目简介

Tutorial-GP-LLM是由MIT ALFA小组开发的教学项目,展示了如何将大语言模型集成到遗传编程的进化算子中。该项目扩展了pony_gp框架,基于论文arXiv:2401.07102的思想,实现了LLM驱动的个体初始化、交叉和变异操作。以符号回归为示例任务,代码设计简洁,便于理解LLM与进化计算结合的核心机制。

## 目录结构

```
alfa_group__tutorial_gp_llm/
├── main.py                            ★ 程序入口
├── requirements.txt                   ★ 依赖列表
├── tutorial.ipynb                     ★ 教学Notebook
├── alfa_ec_llm/
│   └── algorithms/
│       ├── evolutionary_algorithm.py  ★ 进化算法基类(Individual/Population/Selection)
│       ├── tutorial_gp.py             ★ 传统GP实现(对照组)
│       └── tutorial_llm_gp.py         ★ LLM-GP实现(核心)
├── tests/
│   ├── test_main.py                   ★ 单元测试
│   └── configurations/                ★ YAML配置文件
│       ├── tutorial_gp_sr.yml         ★ GP配置
│       └── tutorial_llm_gp_sr.yml     ★ LLM-GP配置
└── README.md
```

## 核心模块分析

### 1. tutorial_llm_gp.py -- LLM驱动的遗传编程

实现了`TutorialLLMGPMuXo`类,核心创新在于用LLM替代传统GP中的随机遗传算子:

**LLM驱动的种群初始化** (`initialize_population`):
利用LLM零样本生成初始个体(数学表达式),而非传统GP的随机语法树生成。通过`form_prompt_individual_generation()`构建提示词,LLM直接生成可解析的表达式。

**LLM驱动的交叉操作** (`crossover`):
将两个父代表达式交给LLM进行语义交叉。LLM理解数学语义后生成后代,而非传统的子树交换。包含完善的异常处理:当LLM输出格式异常时回退到原始父代。

**LLM驱动的变异操作** (`mutation`):
通过`form_prompt_rephrase_mutation`构建提示词,LLM对表达式进行语义重述,实现语义级变异。

**进化搜索循环** (`search_loop`):
标准(mu + lambda)进化策略:锦标赛选择 -> LLM交叉 -> LLM变异 -> 适应度评估 -> 精英保留代换。支持缓存机制避免重复评估。

### 2. evolutionary_algorithm.py -- 进化算法基础设施

- `Individual`: 包含genome(基因型)和phenotype(表型/表达式字符串)以及fitness
- `Population`: 种群容器,关联适应度函数
- 通用操作:锦标赛选择、精英保留代换、排序、适应度评估与缓存

### 3. OpenAI接口封装

封装了与OpenAI API的交互,支持温度参数控制、token使用量记录、指数退避重试机制。

## 技术亮点

1. **语义级进化操作**: LLM在语义空间执行交叉和变异,而非传统GP的语法树操作
2. **零样本初始化**: 利用LLM先验知识生成初始种群,避免随机初始化产生大量无效个体
3. **教学友好设计**: 分离GP和LLM-GP两种实现,便于对比学习;YAML配置驱动
4. **完整日志记录**: 记录每次LLM调用的prompt、响应、token使用量和响应时间
5. **容错机制**: 对LLM输出格式异常有完善的异常处理,确保搜索循环稳定运行
6. **模块化架构**: 进化算法基类与LLM特定操作分离,易于扩展到其他问题域

## 与 Self-Evolve 关联

| 维度 | Tutorial-GP-LLM 贡献 |
|------|---------------------|
| 进化循环 | 提供LLM驱动进化搜索的最小完整实现,是理解LLM+EA核心机制的教学参考 |
| 提示工程 | 展示三种LLM提示模式:零样本生成、交叉提示、重述变异提示 |
| 评估框架 | 符号回归适应度评估与缓存机制,可作为通用评估模式参考 |
| 个体表示 | phenotype字符串表示方案展示LLM输出与进化个体的映射方法 |
| 自我改进 | LLM重述变异本质是基于语义理解的自我改进操作 |
| 代码级进化 | LLM对表达式/代码的迭代改进范式,可直接迁移到Self-Evolve的代码进化 |

## 参考资料

- arXiv:2401.07102 -- LLM as Crossover Operators in Genetic Programming
- pony_gp: https://github.com/flexgp/pony_gp
- ALFA Group: https://github.com/alfa-group
