# AndroidEnv - Android强化学习环境
- **仓库**: google-deepmind/android_env
- **GitHub**: https://github.com/google-deepmind/android_env
- **Stars**: ~700
- **语言**: Python
- **许可**: Apache-2.0
- **最近活跃**: 2025-03
- **模式**: 训练/数据循环

## 概述
AndroidEnv是DeepMind开发的Android强化学习环境，将Android设备暴露为RL环境，支持智能体通过触摸屏动作与任意Android应用交互。该平台为研究通用智能体在真实世界应用中的行为提供了标准化测试平台。

## 核心特性
- 真实Android模拟器作为环境，支持任意应用
- 触摸屏通用动作接口（触摸+抬起事件）
- RGB像素观察空间，支持分辨率降采样
- 提供多种预定义任务和自定义任务框架

## 技术栈
- Python
- Android Emulator
- NumPy
- Acme (RL框架)

## 与 Self Evolve 的关联
AndroidEnv为具身智能体在真实移动应用中的自我进化提供了训练环境，智能体可通过持续的交互-反馈循环学习新技能。

## 分类
- **类别**: 具身智能 Agent
- **标签**: android, reinforcement-learning, embodied-ai, deepmind, gui-agent
