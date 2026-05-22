# WebRL: 自进化 Web Agent 训练

> GitHub: https://github.com/THUDM/WebRL
> Stars: 500+ | 语言: Python
> 论文: arXiv:2411.02337 | 会议: **ICLR 2025**
> 机构: **清华大学 (THUDM, 唐杰教授组)**
> 应用: AutoGLM (手机/浏览器 Agent)

---

## 核心定位

自进化在线课程强化学习框架，用于训练 **Web Agent**。从失败尝试中自动生成新训练任务，配合 Outcome-supervised Reward Model (ORM) 提供可靠奖励信号。

## 技术栈

- **语言**: Python 3.10
- **训练框架**: LLaMA-Factory (SFT baseline)
- **模型**: GLM-4-9B, LLaMA-3.1-8B/70B
- **环境**: WebArena (Web 导航)
- **发布**: HuggingFace + ModelScope

## 核心机制

### 自进化课程学习

```
Agent 尝试任务 → 失败的任务 → 转化为新训练指令 → 重新训练
                                                    ↓
                                          难度逐步提升
```

1. **失败转课程**: 不成功的任务自动变成新训练数据
2. **ORM 奖励模型**: Outcome-supervised Reward Model 提供可靠信号
3. **KL 约束**: KL-divergence 约束确保策略更新稳定

### 训练流程

```
SFT 基线 → WebRL RL 训练 → 自进化课程 → 多阶段迭代
```

## 性能

- WebArena 基准上开源 LLM 最强表现
- 被 **AutoGLM** 采用（手机使用 + 浏览器使用基础 Agent）
- GLM-4-9B 和 LLaMA-3.1-8B/70B 均有 checkpoint

## Self Evolve 关联

- **Web 领域的自进化**: 将自进化课程学习应用到 Web Agent
- **失败驱动**: 从失败中学习的自进化范式
- **ICLR 2025**: 顶会验证了自进化在 Web 领域的有效性
- **清华 THUDM**: 国内顶级 NLP 团队的自进化实践

## 本地路径

`repos/thudm__webrl/`
