# STaR: 通过推理引导推理（Self-Taught Reasoner）

> arXiv: 2203.14465 | NeurIPS 2022 | Stanford
> 作者: Eric Zelikman, Yuhuai Wu, Jesse Mu, Noah D. Goodman

---

## 摘要

提出 Self-Taught Reasoner（STaR），一种迭代式自我引导推理方法。核心循环：生成推理链（rationale）→ 过滤正确答案 → 在正确推理链上微调 → 重复。关键创新：对于答错的问题，给出正确答案作为提示重新生成推理链（"rationalization"）。在 CommonsenseQA 上，STaR 用小模型达到与 30 倍大模型相当的效果。Google Scholar 引用 1679+。

---

## 核心方法

### STaR 循环

```
输入: 数据集 D = {(x_i, y_i)}，少量示范 rationales F

For iteration t = 1, 2, ...:
  1. GENERATE: 对每个问题 x_i，用当前模型生成 rationale r_i 和答案 â_i
     (r_i, â_i) = Model(x_i, F)
  2. FILTER: 保留 â_i = y_i 的 (x_i, r_i) 对
     D_correct = {(x_i, r_i) : â_i = y_i}
  3. RATIONALIZE: 对 â_i ≠ y_i 的样本，用正确答案 y_i 作为提示重新生成 rationale
     r_i' = Model(x_i, y_i, "hint: the answer is y_i")
     将成功的 (x_i, r_i') 加入 D_correct
  4. FINETUNE: 在 D_correct 上微调模型
  5. REPEAT: 用微调后的模型重复步骤 1
```

### Rationalization（合理化）

这是 STaR 的关键创新：
- 当模型答错时，不直接丢弃
- 而是告诉模型正确答案，让它"倒推"出正确的推理链
- 类似于"事后合理化"——知道答案后构造推理过程
- 这显著增加了训练数据量

---

## 关键公式

| 组件 | 公式/描述 |
|------|---------|
| 推理生成 | $(r_t, \hat{y}_t) = \arg\max_{r,y} p_\theta(r, y | x, F)$ |
| 正确过滤 | $D_{\text{correct}} = \{(x_i, r_i) : \hat{y}_i = y_i\}$ |
| 合理化 | $r_i' = \arg\max_r p_\theta(r | x_i, y_i, F)$ |
| 微调目标 | $\mathcal{L} = -\sum_{(x,r) \in D_{\text{correct}}} \log p_\theta(r | x, F)$ |
| 收敛 | STaR 迭代直到性能不再提升 |

---

## 实验结果

### CommonsenseQA

| 方法 | 模型规模 | 准确率 |
|------|---------|-------|
| 直接预测（无 rationale） | 540M | 53.3% |
| Few-shot CoT | 540M | 55.6% |
| **STaR** | **540M** | **72.5%** |
| 微调大模型 | 175B | ~73% |

**关键结论**: STaR 用 540M 参数模型达到了 175B 模型（30 倍大）的相当效果。

### 其他基准

| 基准 | 改进幅度 |
|------|---------|
| GSM8K（数学推理） | 显著提升 |
| ARC（科学问答） | 提升 |
| OpenBookQA | 提升 |

### Rationalization 的效果

- 加入 rationalization 后准确率额外提升 ~5%
- 对难题效果更明显

---

## 作者与机构网络

| 作者 | 机构 | 备注 |
|------|------|------|
| **Eric Zelikman** | Stanford | 一作，后续提出 Quiet-STaR |
| **Yuhuai Wu** | Google Brain / Stanford | 数学推理专家 |
| **Jesse Mu** | Stanford | |
| **Noah D. Goodman** | Stanford | 导师，认知科学与 NLP |

### 关键学术关系

- **Eric Zelikman** 后续发表 **Quiet-STaR**（2024）：将 STaR 扩展到让 LLM 在每个 token 上进行"内心推理"
- **Noah Goodman** 是 Stanford 认知科学教授，Probabilistic Programming 领域先驱
- **Yuhuai Wu** 是数学推理自动化领域核心人物（Minerva 相关工作）

---

## 与 Self Evolve 的关联

1. **推理引导推理**：STaR 证明模型可以通过自己的推理输出来改进自身——这是自我进化的核心思想
2. **过滤+微调范式**：generate → filter → finetune 循环与 ReST、SPIN 等方法共享
3. **Rationalization = 事后反思**：知道正确答案后反推推理过程，类似 Reflexion 的"从失败中学习"
4. **小模型追大模型**：自我改进可以弥补规模差距，对资源受限场景意义重大

---

## 局限性

1. 需要答案标签（有标准答案的问题才适用）
2. Rationalization 生成的推理链可能"伪造"（逻辑不严谨但凑出正确答案）
3. 需要初始少量示范 rationales
4. 迭代次数受限于模型容量

---

## 引用上下文

- 建立在 Chain-of-Thought (Wei et al., 2022) 基础上
- 与 ReST (Gulcehre et al., 2023) 共享 generate-filter-finetune 范式
- 后续工作 Quiet-STaR (Zelikman et al., 2024) 扩展到 token 级推理
- 与 ReST-EM 共同构成"自我训练"方法族
