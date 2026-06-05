# User Direct Inputs Reference

> Last updated: 2026-06-04. This file extracts direct user inputs only. Do not add team instructions, subagent summaries, tool outputs, assistant summaries, or inferred project state as user input.

## L1

用户要把 `awesome-agent-evolution` 做成 AI Agents 自进化领域的开源索引站、深度分析站、论文工程和 SEO 网站，并要求 raw、加工、work、结果全部分层、索引化、可追溯。

## L0 Highest Guidance

公开文案质量是最高指导。用户明确要求所有公开文案经过 `3-5` 个读者/编辑 agents 和 `3` 个学术 agents 审查，尤其网页和 README；随后强调当前严重问题是“造了一堆网页”但缺少逻辑、可读性、可吸收的信息、知识型高质量文案和全球双语表达，并确认“这条就是最高的一个指导”。

## L2

1. 公开文案质量是最高指导：网站和 README 必须有逻辑、可读、可吸收、知识型高质量、双语同证据链，并经过 `3-5` 个读者/编辑 agents 和 `3` 个学术 agents 审查。
2. 用户输入是精确目标，不等于 team 输入。
3. 项目必须同时有 raw 素材、加工后的论文、完整博客/SEO 网站、项目深度分析/model-card 式教学材料；但网站数量和 SEO 覆盖必须服从最高文案质量指导。
4. 论文当前重点是 GitHub 数据：原始收集有哪些、分析了哪些、进化相关有哪些、按时间顺序发布/创建的有哪些。
5. 项目管理重点是目录重整：raw 归 raw，加工归 processed，work 归 work，结果归 results，全部索引覆盖。
6. AGENTS 和 CLAUDE 必须把这些用户原话作为工作参考。
7. 不符合四层构成的材料也要先归类、查引用、索引化，不要直接删除。
8. 定时任务和每次迭代都要形成闭环：主动更新相关 README、网站和索引，并主动提交本轮改动。
9. 新增 `agent-swarm` / `agent-swarm evolve` 作为 multi-agent / harness 下面的一个内容部分，纳入 README、分析、wiki 和网站入口。
10. GitHub 项目排序不能再把累计 Star 当成主要价值信号；要挖掘全量项目历史 star 数据，重点看 2026 新增 Star / 当前阶段增长，并形成可发布到 Hugging Face 的数据库。
11. i18n 是网站和公开内容的核心完成项；AGENTS 和 CLOUD 必须把双语支持写成严格约束。
12. 建立新的价值分类体系：用离散 LSH 遍历比较所有项目、paper、X/social、GitHub 素材，并把 Mom Test 访谈关注度、分类方法、语言/embedding/gbrain/TSNE 等信号作为 facet 来源。

## High-Priority User Requirements

| Rank | Requirement | Direct Evidence |
|---:|---|---|
| 1 | 公开文案质量是最高指导，尤其网页和 README | `所有的文案都经过3-5个 读者以及 编辑 agents 进行审查 + 3个学术agents 进行审查 保证质量` / `尤其网页` / `readme` / `现在里面有个非常严重的问题,就是造了一堆网页,但是这些网页有逻辑吗?可读吗?我能获取什么信息吗?我都吸收不了...并非高质量的...Hacker News这样子的高质量的文案...必须是双语的...` / `这条就是最高的一个指导` |
| 2 | 只以用户直接输入作为当前目标来源 | `用户的输入非常精确，并不是team的输入。` |
| 3 | 保留 raw 素材，并从 raw 进入论文和网站 | `第一个，它需要有raw的素材。第二个，它需要加工成论文。第三个，它需要有网站...` |
| 4 | 网站必须服务博客和 SEO，但不得牺牲最高文案质量指导 | `这个网站必须完完整整的为博客及SEO准备。` |
| 5 | 所有项目都要有深度分析/model-card 式教学材料 | `所有的项目都有深度分析，都有model card类似这样子的教学使用的东西。` |
| 6 | 论文要补 GitHub 数据链路和时间序列 | `GitHub的项目原始收集的有哪些？进行分析的有哪些？进化相关的有哪些？按时间顺序发布的有哪些？` |
| 7 | 项目结构要按 raw/processed/work/results 整理并索引化 | `raw归raw 加工后的归加工的 、work 产物归work 、结果输出归结果、、全部都要索引化 覆盖` |
| 8 | AGENTS/CLAUDE 要引用用户输入 | `用户的输入你得提取出来，然后作为Agent和Claude里边的参考。` |
| 9 | 每次迭代后主动更新 README、网站并提交 | `修改定时任务 、注意每次迭代后都要主动提交 、主动更新 相关的 readme 、相关的 网站、` |
| 10 | 非四层材料先归类，不要乱删 | `不符合这些构成的素材怎么归类和清理一下？尽量怎样归类不要乱删` |
| 11 | 每次修改都要关联更新网站/主页/相关分析并同步 GitHub | `每次修改的时候都要去关联修改 网站、主页、其他方向的分析以及与之对应的内容、修改后 完成 github 同步` |
| 12 | 增加 agent-swarm / agent-swarm evolve 部分 | `增加 一部分 去做 agent-swarm` / `增加一部分去做 agent-swarm evolve` |
| 13 | 建立 GitHub star-history 数据库，按 2026 新增 Star / 当前增长重排项目价值 | `Star没有意义，因为他只是一个历史累计的过程。... 2026年的这个项目是不是在当前阶段的时候。... 形成一个数据库。这个data可以放到HF上。` |
| 14 | 核心完成 i18n，并把网页/公开内容双语约束写入 AGENTS 和 CLOUD | `核心完成 i18N !!! 对于网页，对于所有东西都需要去严格的约束起来，写到Agents和Cloud的MD当中，这个作为我们需要去约束的双语支持。` |
| 15 | 用 value facet + LSH + embedding/graph 建立新的分类与聚类体系 | `Compare is anything... LSH局部哈希索引... 无数无数的标签... 把这些项目分成负一和一... 所有的paper、AX以及Gitup项目，都可以用这个方式来进行扫描。` / `新的分类体系` / `openai 的embedding... 三维的graph... TSNE` / `Mom Test... facet维度也就变成了LSH的每一次判别用的维度` |

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

```text
每次修改的时候都要去关联修改 网站、主页、其他方向的分析以及与之对应的内容、修改后 完成 github 同步
```

```text
https://github.com/topics/agent-evolution?o=desc&s=stars

为什么当前的项目没有在这个话题当中？需要去修改我们核心的一些内容，来适应它能被Git 索引？？
```

```text
增加 一部分 去做 agent-swarm

增加一部分去做 agent-swarm evolve
```

```text
Star没有意义，因为他只是一个历史累计的过程。 Star新的新增Star的增长，这样其实最重要的是需要看的是2026年的这个项目是不是在当前阶段的时候。 未来需要制作的是关于这些所有的GitHub project的历史数据挖掘。 这个非常重要，要形成一个数据库。 这个data可以放到HF上。
```

```text
核心完成 i18N !!! 对于网页，对于所有东西都需要去严格的约束起来，写到Agents和Cloud的MD当中，这个作为我们需要去约束的双语支持。
```

```text
核心来说，对于这些素材里边，谁是好的，谁是坏的，谁有价值，谁没有价值，现在的评价并没有遍历，并没有对比出来。 Compare is anything... LSH局部哈希索引... 无数无数的标签... 把这些项目分成负一和一... 所有的paper、AX以及Gitup项目，都可以用这个方式来进行扫描... 做成定时任务... 增量的处理方式需要考虑。
```

```text
是一个新的分类体系。
```

```text
然后我们可以为这个新的分类体系结合。 gbreain 以及 对其内容进行 openai 的embeddinG... 展示可以用一种三维的graph的形式展示... 降维和聚类就可以使用。 TSNE
```

```text
从用户访谈中的关注度去获取。我们用这个Ask the mom test这个方式去获得的访谈。它就可以得到了各种facet维度，这个facet维度也就变成了LSH的每一次判别用的维度。
```

```text
所有的文案都经过3-5个 读者以及 编辑 agents 进行审查 + 3个学术agents 进行审查 保证质量
```

```text
尤其网页
```

```text
readme
```

```text
现在里面有个非常严重的问题,就是造了一堆网页,但是这些网页有逻辑吗?可读吗?我能获取什么信息吗?我都吸收不了,它并不是爆款的文案,也不是知识型的文案,并非高质量的,比如说Hacker News这样子的高质量的文案。而且注意,这里边必须是双语的呀,又不是for Chinese,for Global World之类的。
```

```text
这条就是最高的一个指导
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
- GitHub topic / search / repository metadata 也是开源发布面：发现 topic 页、GitHub search、README、Linguist 语言识别或站点 metadata 不一致时，要用 raw evidence 记录并同步修正公开入口。
- 增加 agent-swarm / agent-swarm evolve 部分，并把它接入分析、README、wiki 和网站。
- 建立 GitHub star-history / new-star growth 数据库，把累计 Star 降为历史 adoption prior，重点看 2026 新增 Star、当前增长和覆盖完整性，并预留 Hugging Face dataset 发布路径。
- 核心完成 i18n：公开网站、README、SEO 页面、论文页、项目入口和 metadata 都要有中文默认入口与英文镜像约束，并写入 AGENTS/CLOUD。
- 最高指导：公开文案质量优先于页面数量、SEO 覆盖、视觉效果和内部 workflow；所有文案，尤其网页和 README，必须有逻辑、可读、可吸收、双语同证据链，并经过 `3-5` 个读者/编辑 agents 与 `3` 个学术 agents 审查；未完成审查时不能宣称质量完成。

## Agent Usage Rule

任何 agent 开始工作前，先读本文件并回答三个问题：

1. 这次任务是否触发最高指导：公开文案是否有逻辑、可读、可吸收、双语同证据链，并经过双通道审查？
2. 它属于 raw、processed、work、results、ops 中哪一层？
3. 完成后哪个索引、论文、网站或结果文件要更新？
4. 本轮是否已经主动提交相关改动，或确认没有变化可提交？
5. 如果本轮涉及网页、README 或其他公开文案，是否完成读者/编辑 agents 与学术 agents 双通道审查，或明确记录缺口？

## Canonical Goal Snapshot

完整目标快照以 [../../CURRENT_GOAL.md](../../CURRENT_GOAL.md) 为准；本文件是 AGENTS/CLAUDE 的快速用户原话索引。两者冲突时，先检查是否混入了非用户输入，再以最新用户直接输入修正。
