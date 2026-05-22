# Self-Debug: 教大语言模型自我调试

> arXiv: 2304.05128 | ICLR 2024 | Google Research + UC Berkeley
> 作者: Xinyun Chen, Maxwell Lin, Nathanael Schärli, Denny Zhou

---

## 摘要

提出 Self-Debugging 框架，通过 few-shot 示范教 LLM 调试自己生成的程序。核心创新是"橡皮鸭调试"——模型通过解释自己的代码来发现错误，无需人工反馈。在 Spider（text-to-SQL）、TransCoder（代码翻译）、MBPP（Python 生成）上达到 SOTA。

---

## 核心方法

### 调试循环

```
1. GENERATE: LLM 生成初始程序 p_0
2. EXECUTE: 执行 p_0，收集反馈
3. DEBUG: LLM 根据反馈修改程序 → p_1
4. 重复步骤 2-3 直到程序通过或达到最大轮数
```

### 三种反馈类型

| 反馈类型 | 描述 | 需要执行环境 |
|---------|------|------------|
| **Simple Feedback (SF)** | 仅通过/失败信号 | 是 |
| **Unit Test Feedback (UT)** | 单元测试输入/输出对 | 是 |
| **Code Explanation (Expl)** | LLM 逐行解释自己的代码（橡皮鸭调试） | **否** |

### 关键设计

- **Few-shot 示范**：通过示例调试轨迹教会模型调试流程，无需微调
- **橡皮鸭调试**：灵感来自人类程序员实践——向他人解释代码时自己发现问题
- **闭循环**：代码生成 → 执行 → 反馈 → 修复 → 再执行

---

## 关键公式

| 组件 | 公式/描述 |
|------|---------|
| 初始生成 | $p_0 = \text{LLM}(x, \text{prompt})$ |
| 执行反馈 | $f_t = \text{Execute}(p_t, \text{test\_cases})$ |
| 代码解释 | $e_t = \text{LLM}(p_t, \text{"explain this code"})$ |
| 调试修复 | $p_{t+1} = \text{LLM}(p_t, f_t, e_t, \text{debug\_prompt})$ |
| 收敛条件 | $p_t$ 通过所有测试 或 $t = t_{\max}$ |

---

## 实验结果

### Spider（text-to-SQL，无单元测试）

| 方法 | 准确率提升 |
|------|----------|
| Baseline（无调试） | — |
| Self-Debug + 代码解释 | **+2~3%** 整体 |
| Self-Debug + 代码解释（最难级别） | **+9%** |

### TransCoder（C++→Python 翻译）& MBPP（Python 生成）

| 基准 | 最大准确率提升 |
|------|-------------|
| TransCoder | **+12%** |
| MBPP | **+12%** |

### 采样效率

- Self-Debug 效率远超 best-of-K 采样
- 可匹配或超越生成 **10 倍以上**候选程序的基线方法

---

## 作者与机构网络

| 作者 | 机构 | 备注 |
|------|------|------|
| **Xinyun Chen** | UC Berkeley / Google | 一作，代码生成专家 |
| **Maxwell Lin** | Google Research | |
| **Nathanael Schärli** | Google Research | |
| **Denny Zhou** | Google Research | 资深研究科学家，LLM 推理 |

### 关键关系

- **Xinyun Chen** 与 Denny Zhou 长期合作（Google Research）
- 该团队与程序合成、代码生成方向紧密相关
- Xinyun Chen 此前在程序验证和代码生成领域发表多篇重要工作

---

## 与 Self Evolve 的关联

1. **闭环自我改进**：Self-Debug 展示了 LLM 通过执行反馈自我改进代码的可行性
2. **无权重更新**：纯 prompting 方法，与 Self-Refine 类似的无训练范式
3. **橡皮鸭调试 = 自我反思**：代码解释机制与 Reflexion 的 verbal feedback 异曲同工
4. **可扩展性**：无需人工标注，适合集成到自动化代码进化流程

---

## 局限性

1. 依赖执行环境（无单元测试时效果下降）
2. 调试轮数增加带来计算开销
3. 复杂逻辑错误的调试能力有限
4. Few-shot 示范质量影响调试效果

---

## 引用上下文

- 与 Self-Refine（迭代优化）互补：Self-Debug 专注代码领域，利用执行反馈
- 受 Reflexion 的"语言反馈"思想启发，但聚焦于程序调试场景
- 为后续 AlphaEvolve、DGM 等代码进化系统提供了自我修复的基础范式
