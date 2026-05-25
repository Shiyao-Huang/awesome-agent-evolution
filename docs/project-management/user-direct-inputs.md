# User Direct Inputs Reference

> Last updated: 2026-05-25. This file extracts direct user inputs only. Do not add team instructions, subagent summaries, tool outputs, assistant summaries, or inferred project state as user input.

## L1

用户要把 `awesome-Agent-evolution` 做成 AI Agents 自进化领域的开源索引站、深度分析站、论文工程和 SEO 网站，并要求 raw、加工、work、结果全部分层、索引化、可追溯。

## L2

1. 用户输入是精确目标，不等于 team 输入。
2. 项目必须同时有 raw 素材、加工后的论文、完整博客/SEO 网站、项目深度分析/model-card 式教学材料。
3. 论文当前重点是 GitHub 数据：原始收集有哪些、分析了哪些、进化相关有哪些、按时间顺序发布/创建的有哪些。
4. 项目管理重点是目录重整：raw 归 raw，加工归 processed，work 归 work，结果归 results，全部索引覆盖。
5. AGENTS 和 CLAUDE 必须把这些用户原话作为工作参考。
6. 不符合四层构成的材料也要先归类、查引用、索引化，不要直接删除。
7. 定时任务和每次迭代都要形成闭环：主动更新相关 README、网站和索引，并主动提交本轮改动。

## High-Priority User Requirements

| Rank | Requirement | Direct Evidence |
|---:|---|---|
| 1 | 只以用户直接输入作为当前目标来源 | `用户的输入非常精确，并不是team的输入。` |
| 2 | 保留 raw 素材，并从 raw 进入论文和网站 | `第一个，它需要有raw的素材。第二个，它需要加工成论文。第三个，它需要有网站...` |
| 3 | 网站必须服务博客和 SEO | `这个网站必须完完整整的为博客及SEO准备。` |
| 4 | 所有项目都要有深度分析/model-card 式教学材料 | `所有的项目都有深度分析，都有model card类似这样子的教学使用的东西。` |
| 5 | 论文要补 GitHub 数据链路和时间序列 | `GitHub的项目原始收集的有哪些？进行分析的有哪些？进化相关的有哪些？按时间顺序发布的有哪些？` |
| 6 | 项目结构要按 raw/processed/work/results 整理并索引化 | `raw归raw 加工后的归加工的 、work 产物归work 、结果输出归结果、、全部都要索引化 覆盖` |
| 7 | AGENTS/CLAUDE 要引用用户输入 | `用户的输入你得提取出来，然后作为Agent和Claude里边的参考。` |
| 8 | 每次迭代后主动更新 README、网站并提交 | `修改定时任务 、注意每次迭代后都要主动提交 、主动更新 相关的 readme 、相关的 网站、` |
| 9 | 非四层材料先归类，不要乱删 | `不符合这些构成的素材怎么归类和清理一下？尽量怎样归类不要乱删` |

## Exact Recent Workspace Inputs

```text
去查看历史有关这个Workspace的所有的输入，过滤出用户的输入，来作为当前的目标。
```

```text
用户的输入非常精确，并不是team的输入。
```

```text
好的，围绕这个去做吧。然后做之前检查一下，第一个，它需要有raw的素材。第二个，它需要加工成论文。第三个，它需要有网站，这个网站必须完完整整的为博客及SEO准备。第四个，所有的项目都有深度分析，都有model card类似这样子的教学使用的东西。
```

```text
把它全部改好啊，全部改好之后，我们的项目，我们的论文也还没完全写完呢。
```

```text
现在论文上有一些问题，比如说第一个数据。 GitHub的项目原始收集的有哪些？进行分析的有哪些？进化相关的有哪些？按时间顺序发布的有哪些？这些还没有分析呢。核心，我们写作的和关注的注意力也是和这个相关的。
```

```text
金核心，整个项目需要梳理，重新梳理一下项目结构不要乱放 ，该放哪的放哪，更新一下read me，更新一下整个项目的管理方式，更新一下Agent和Cloud的MD。 raw归raw 加工后的归加工的 、work 产物归work 、结果输出归结果、、全部都要索引化 覆盖
```

```text
OK，然后用户的输入你得提取出来，然后作为Agent和Claude里边的参考。
```

```text
不符合这些构成的素材怎么归类和清理一下？尽量怎样归类不要乱删
```

```text
修改定时任务 、注意每次迭代后都要主动提交 、主动更新 相关的 readme 、相关的 网站、
```

## Longer Historical Goal Signals

这些输入已经在 [../../CURRENT_GOAL.md](../../CURRENT_GOAL.md) 中保留完整列表。AGENTS/CLAUDE 执行时优先读本文件的近期目标，再回到 CURRENT_GOAL 查看更长历史。

- 做成 `Awesome Evolver` / Self Evolve 相关的开源聚合站、索引站和详细分析站。
- README 要提供分类、索引和认知价值，不只是链接堆叠。
- 项目、论文、X/social、博客、benchmark、作者/贡献者网络都要形成证据链。
- 重点判断项目是否真能用、是否满足用户需要、是否有产品价值。
- 论文覆盖不能只选少数不主流项目，要补主流论文和 2024-2026 新论文。
- 可视化图谱质量要提高，网站可参考 `x.mitbunny.ai` 的交互方向。
- 输出要分层：一句话、三句话、五句话、完整展开。
- 自动化和人工迭代都要闭环：相关 README、网站、索引更新后主动提交；没有可提交变化也要明确说明。

## Agent Usage Rule

任何 agent 开始工作前，先读本文件并回答三个问题：

1. 这次任务对应哪条用户原话？
2. 它属于 raw、processed、work、results、ops 中哪一层？
3. 完成后哪个索引、论文、网站或结果文件要更新？
4. 本轮是否已经主动提交相关改动，或确认没有变化可提交？

## Canonical Goal Snapshot

完整目标快照以 [../../CURRENT_GOAL.md](../../CURRENT_GOAL.md) 为准；本文件是 AGENTS/CLAUDE 的快速用户原话索引。两者冲突时，先检查是否混入了非用户输入，再以最新用户直接输入修正。
