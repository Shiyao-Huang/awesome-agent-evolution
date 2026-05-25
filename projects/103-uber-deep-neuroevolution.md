# Deep Neuroevolution - Uber 深度神经进化
- **仓库**: uber-common/deep-neuroevolution
- **GitHub**: https://github.com/uber-common/deep-neuroevolution
- **Stars**: 1663
- **语言**: Python
- **许可**: NOASSERTION
- **最近活跃**: 2024-01
- **模式**: 进化/搜索循环

## 概述
Uber AI Labs 发布的深度神经进化工具包，包含进化策略和遗传算法在深度强化学习中的系统性实验。该研究证明，简单的遗传算法可以在 Atari 游戏和机器人控制任务中与最先进的强化学习方法竞争，甚至在某些场景下表现更优。

## 核心特性
- 遗传算法训练深度网络：使用 tournament selection 和 mutation 训练深度策略网络
- 安全性进化的创新方法：引入 Novelty Search 与 QD 算法确保多样性
- 大规模并行评估：通过异步分布式架构加速适应度评估
- Atari 和机器人任务基准：在标准 RL 基准上与 PPO、A3C 等方法对比

## 技术栈
- Python, NumPy
- OpenAI Gym, Atari, MuJoCo
- Ray (分布式计算)

## 与 Self Evolve 的关联
该项目揭示了简单进化算法在深度学习领域的潜力，表明 AI 系统可以通过遗传变异和自然选择实现自我改进，为无梯度自动优化提供了理论和实践基础。

## 分类
- **类别**: 进化策略/ES
- **标签**: neuroevolution, genetic-algorithm, reinforcement-learning, deep-learning, Uber
