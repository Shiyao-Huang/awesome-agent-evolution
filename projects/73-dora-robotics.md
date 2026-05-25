# Dora - 面向机器人应用的数据流架构框架
- **仓库**: dora-rs/dora
- **GitHub**: https://github.com/dora-rs/dora
- **Stars**: ~3.8K
- **语言**: Rust / Python
- **许可**: Apache-2.0
- **最近活跃**: 2026-05
- **模式**: 智能体编排

## 概述
Dora（Dataflow-Oriented Robotic Architecture）是一个用Rust编写的高性能机器人中间件，通过声明式YAML数据流定义AI机器人应用，支持低延迟零拷贝通信，并提供Rust、Python、C/C++多语言绑定。

## 核心特性
- 比ROS2 Python快10-17倍的零拷贝共享内存IPC
- Apache Arrow原生支持，零序列化开销
- 声明式YAML数据流定义，支持热重载
- 分布式部署、故障容忍、动态拓扑变更
- ROS2双向桥接和MAVLink 2集成

## 技术栈
- Rust
- Python (PyO3)
- Apache Arrow
- Zenoh
- C/C++

## 与 Self Evolve 的关联
Dora为具身智能体提供了灵活的编排框架，使多智能体和多模块之间的协同进化成为可能，是智能体编排模式在机器人领域的典型实践。

## 分类
- **类别**: 具身智能 Agent
- **标签**: robotics, dataflow, rust, middleware, embodied-ai, real-time
