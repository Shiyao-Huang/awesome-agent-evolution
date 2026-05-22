# 代码生成强化学习项目

> 核心方向：RL 驱动的代码生成自我改进

---

## 1. CodeRL

| 字段 | 值 |
|------|---|
| **仓库** | salesforce/CodeRL |
| **会议** | NeurIPS 2022 |
| **论文** | "CodeRL: Mastering Code Generation through Pretrained Models and Deep RL" |
| **Self Evolve 关联** | ⭐⭐⭐ 核心 |

### 核心特性
- **Actor-Critic 架构**：代码生成 LM 作为 actor，critic 预测程序功能正确性
- **Critical Sampling**：推理时基于单元测试反馈和 critic 分数重新生成程序
- 基于 **CodeT5 (770M)** 编码器-解码器模型
- 完整流水线：程序生成 → 单元测试执行 → critic 训练 → RL 微调

### 评测基准
- APPS (程序合成)
- MBPP (基础 Python 编程)

### 技术栈
Python, PyTorch, HuggingFace Transformers, DeepSpeed

### 关键方法

```
训练循环:
1. CodeT5 生成候选代码
2. 执行单元测试 → 获取功能正确性
3. Critic 网络预测代码质量
4. RL 更新生成器 (Actor) 基于 critic 反馈
5. 推理时用 critical sampling 重选最优方案
```

### 与 Self Evolve 的关系
critic 引导的 RL 循环：代码生成 → 单元测试 → critic 评分 → 改进生成器。推理时基于反馈重新生成是迭代自改进的早期形式。**这是 CodeRL 对代码自我进化的关键贡献**。

---

## 2. CodeT5 / CodeT5+

| 字段 | 值 |
|------|---|
| **仓库** | salesforce/CodeT5 |
| **定位** | 标识符感知的统一预训练编码器-解码器代码模型 |
| **Self Evolve 关联** | ⭐⭐ 相关 |

### 核心特性
- **标识符感知预训练**：通过标识符 token 捕获代码语义
- **统一模型**：支持代码理解（摘要、搜索）和代码生成（文本→代码、补全）
- **CodeT5+**：扩展为更大的开放代码 LLM，灵活的编码器-解码器架构
- 部署为 **VS Code 插件** AI 编程助手

### 模型规模
- CodeT5: 220M / 770M 参数
- CodeT5+: 多尺寸灵活组合

### 技术栈
Python, PyTorch, HuggingFace Transformers

### 与 Self Evolve 的关系
代码生成的基础模型。作为 CodeRL 的骨干网络，CodeT5 为 RL 自我改进提供了代码理解和生成的底层能力。
