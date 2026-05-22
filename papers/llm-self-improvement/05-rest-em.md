# ReST: 增强自我训练（Reinforced Self-Training）

> arXiv: 2308.08998 | Google DeepMind | 2023 年 8 月
> 作者: Caglar Gulcehre, Tom Le Paine, Srivatsan Srinivasan, Ksenia Konyushkova, Lotte Weerts, Abhishek Sharma, Zheyuan Ryan Shi, Richards Bird, Max Bartolo, Jeff Stanway, Laurence Fontaine, Akash Srivastava, George Tucker, Misha Khalman, Nando de Freitas

---

## 摘要

提出 Reinforced Self-Training（ReST），一种受增长批量强化学习启发的 LLM 对齐算法。核心流程：E-step（生成样本）→ M-step（在过滤后的高质量样本上微调）。关键优势：不需要额外人工标注数据，通过奖励模型过滤模型自身生成的数据来实现自我改进。在机器翻译任务上，ReST 在自动指标和人类评估中均显著提升翻译质量。

---

## 核心方法

### EM 风格迭代

```
输入: 初始模型 π_0, 数据集 D = {x_i}, 奖励模型 R

For iteration t = 1, 2, ...:
  E-step（期望步骤）:
    对每个 x_i，用当前模型 π_{t-1} 生成 N 个候选回复
    D_gen = {(x_i, y_ij) : y_ij ~ π_{t-1}(·|x_i), j=1..N}

  M-step（最大化步骤）:
    用奖励模型对 (x_i, y_ij) 打分: s_ij = R(x_i, y_ij)
    按分数过滤: 保留 top-k 或 s > threshold 的样本
    在过滤后的数据集 D_filtered 上微调模型
    π_t = finetune(π_{t-1}, D_filtered)
```

### 与标准 RL 的区别

| 方面 | 标准 RL (PPO) | ReST |
|------|--------------|------|
| 数据收集 | 在线（实时采样） | 离线（批量生成后过滤） |
| 训练方式 | 策略梯度 | 监督微调（在过滤数据上） |
| 稳定性 | 不稳定，需要大量调参 | 更稳定 |
| 计算效率 | 持续交互 | 批量处理 |

### ReST-EM 变体

ReST-EM 是 ReST 的一个变体，使用 Expectation-Maximization 框架更明确地定义迭代：
- E-step: 用当前策略生成多个样本
- M-step: 在获得高奖励的样本上更新策略
- 可以与不同的奖励信号结合（规则、模型、人类）

---

## 关键公式

| 组件 | 公式/描述 |
|------|---------|
| 生成 | $y_j \sim \pi_\theta(\cdot | x)$, $j = 1, ..., N$ |
| 打分 | $s_j = R(x, y_j)$ （奖励模型分数） |
| 过滤 | $D_{\text{filtered}} = \{(x, y_j) : s_j > \tau\}$ |
| 微调 | $\theta_{t+1} = \arg\max_\theta \sum_{(x,y) \in D_{\text{filtered}}} \log \pi_\theta(y | x)$ |
| 收敛 | 迭代直到验证集性能不再提升 |

---

## 实验结果

### 机器翻译

| 方法 | BLEU ↑ | 人类评估 ↑ |
|------|--------|-----------|
| 基线 SFT 模型 | 基准 | 基准 |
| ReST (iter 1) | +1.0~2.0 | 提升 |
| ReST (iter 2) | +1.5~3.0 | 显著提升 |
| ReST (iter 3) | 收敛 | — |

### 数学推理（与 ReST-EM 相关工作）

| 基准 | 改进幅度 |
|------|---------|
| MATH | 显著提升 |
| GSM8K | 提升 |

### 关键发现

1. **过滤阈值至关重要**：太严苛会减少数据量，太宽松会引入噪声
2. **2-3 轮迭代后收敛**
3. **奖励模型质量**直接影响过滤效果
4. ReST 比 PPO 更容易实现和调参

---

## 作者与机构网络

| 作者 | 机构 | 备注 |
|------|------|------|
| **Caglar Gulcehre** | Google DeepMind | 一作，RL 与 NLP 交叉 |
| **Tom Le Paine** | Google DeepMind | |
| **George Tucker** | Google DeepMind | RL 理论 |
| **Nando de Freitas** | Google DeepMind | 加拿大 AI 先驱，UBC 教授 |

### DeepMind 的自我训练研究线

- ReST 是 DeepMind 在 LLM 对齐方向的代表作之一
- 与 Gopher/Chinchilla 团队有交叉
- Nando de Freitas 是 DeepMind 高级研究总监

---

## 与 Self Evolve 的关联

1. **Generate-Filter-Finetune 范式**：这是自我改进的基础模式，与 STaR、SPIN 共享
2. **离线训练 > 在线 RL**：ReST 证明了离线过滤+微调比 PPO 更稳定
3. **奖励模型作为进化压力**：奖励函数定义了"什么是好的"，类似于进化算法中的适应度函数
4. **可扩展性**：批量处理模式适合大规模部署

---

## 局限性

1. 依赖奖励模型质量（奖励模型的偏差会被放大）
2. 过滤阈值需要手动调整
3. 收敛后无法继续改进
4. 在某些任务上可能不如在线 RL 方法

---

## 引用上下文

- 与 STaR (Zelikman et al., 2022) 共享 generate-filter-finetune 框架
- ReST-EM 被 "Beyond Human Data" (Singh et al., 2023) 扩展到更大规模
- Re-ReST (2024) 加入自我反思机制
- 与 Constitutional AI 的 RLAIF 互补：ReST 用奖励模型，CAI 用宪法原则
