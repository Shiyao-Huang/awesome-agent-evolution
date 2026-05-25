# Current Goal From Direct User Inputs

Last updated: 2026-05-25

## Precision Rule

This file is grounded only in direct user inputs for `/Users/copizzah/Desktop/work/awesome-agent-evolution`.

Excluded as target sources:

- team board assignments
- subagent messages
- tool results
- persisted outputs
- assistant summaries
- project-log echoes of prior messages

Inference is allowed only after the exact direct user inputs are separated first.

## One-Sentence Compression

把 `awesome-agent-evolution` 做成一个可开源的、面向 AI Agents 自进化/自改进工程与论文的 Awesome 索引站和深度分析站：既有 README 分类索引，也有网站、知识图谱、论文/项目/benchmark 证据链，并且能让读者快速判断哪些东西真正可用、值得用、值得研究。

## Three-Sentence Compression

这个项目的核心不是堆链接，而是帮助读者建立对 Self-Evolving / Self-Improving AI Agents 领域的认知结构。当前工作要继续补齐材料、论文、项目、社交/X/博客信号，用 gitnexus、mermaid、md、subagents、anysearch/browser 等工具把每个项目的策略、代码、贡献者、论文、核心理念、框架、benchmark、产品可用性和开源潜力分析清楚。README 和网站要成为主入口：分类索引清晰、i18n/ZH 完整、可视化图谱质量高，并最终发布为 public Git/open-source 项目。

## Five-Sentence Compression

1. 项目定位：AI Agents 自进化相关工程、论文、产品、评测和社区信号的 Awesome 仓库 + 深度分析站。
2. README 是核心认知入口，需要分类、索引、排名和解释，帮助人理解不同路线和项目价值。
3. 素材处理要继续补缺：项目、论文、X/social、博客、benchmark、作者/贡献者网络都要有证据链，缺失处用 anysearch/browser 补全。
4. 质量标准不是数量，而是判断这些项目是否可用、是否满足用户需要、是否主流、是否有真实 benchmark，尤其要补强论文和知识图谱。
5. 网站和开源发布也在目标内：可参考 `x.mitbunny.ai` 的交互/图谱/动画方向，用 React/GSAP 等实现更好的可视化体验，并处理 ignore、i18n、public 发布和仓库命名。

## Current Target

优先把项目从“收集材料”推进到“可公开使用的认知产品”：

- 整理当前所有 raw/research/site 素材，补齐缺失项目、论文、benchmark 和 social/blog 信号。
- 在 README 中形成高质量分类索引、角色解释、排名和入口，使 Awesome 仓库本身能提供认知价值。
- 提升论文覆盖质量，避免只选少数不够主流的论文；把 benchmark 结果拉出来对比。
- 提升可视化知识图谱质量，展示项目、论文、方法、benchmark、作者/贡献者和产品形态之间的关系。
- 对重点项目做产品可用性判断：它们是能用的产品、工程工具、论文代码、方法论，还是只是概念/热度信号。
- 为开源发布做准备：命名、README、i18n/ZH、ignore、public Git、网站入口、风格和交互。
- 继续把用户直接输入抽取成 Agent/Claude 可引用的参考，避免把 team 输入、工具输出或历史摘要误当作用户目标。
- 维护项目结构边界：raw 归 raw，加工后的归加工，work 产物归 work，结果输出归 results，全部索引化覆盖。
- 对不符合四层构成的材料，先查引用、归入 support/compatibility/mirrors/local/needs-review 等类别并更新索引；默认不要乱删。
- 每次定时任务或人工迭代结束前，主动更新受影响的 README、i18n、网站、索引和发布面，并提交本轮相关改动。

## High-Priority Threads

- README 分类索引：把项目分成 runtime/product、harness evolution、memory substrate、skill methodology、benchmark/eval、paper/code、knowledge graph 等认知类别。
- 重点项目补查：`agentic-Harness-engineering`、OpenClaw、Superpowers、Hermes Agent、AgentMemory、PinchBench、OpenHuman、EvoMap、GenericAgent 等。
- 论文补强：覆盖主流论文与 2024-2026 新论文，不只看名字里有 evolution 的项目；关注 Self-Refine、Reflexion、ADAS、Gödel Agent、Darwin Gödel Machine、AlphaEvolve、RAGEN、REVEAL 等路线。
- Benchmark 对比：把论文和项目里已经测过的 benchmark 单独提取成表，比较任务、指标、结果、可信度。
- 产品性判断：每个项目要标明是否能运行、是否有文档、是否有真实用户价值、成熟度和开源增长潜力。
- 网站体验：参考 `http://x.mitbunny.ai`，考虑 React/GSAP/知识图谱动画，但服务于信息理解，不做空洞视觉。

## Operating Style

- 遇到困难就解决困难；没有条件就创造条件。
- 先自问自答，前三个问题通常不够好，要继续追问到本质问题。
- 输出要分层：一句话、三句话、五句话、完整展开，把重要性排序显式化。
- 用户明确要求可使用 subagent 并行推进，必要时用 browser/anysearch/gitnexus/mermaid/md。
- 反思必须改变行为，否则反思无效。
- 需要一面镜子：文档、mermaid、操作手册、skill、上下文/token 状态都可以成为自我观察工具。
- 每次迭代后主动检查 `git status`、保护无关用户改动、提交本轮相关改动；没有变化可提交时也要明确说明。

## Exact Direct User Inputs

### Claude Canonical History

- `zao`
- `全部都增加 ZH 版本!!!`
- `-ZH 结尾`
- `注意 使用subagent 并行`
- `/Users/copizzah/Desktop/work/awesome-agent-evolution/survey/latex Building成PDF。`
- `继续`
- `现在呢`
- `你为什么下载得这么慢呀？什么问题？`
- `你用Brew下载吧。`
- `你现在看一下吧。既然你已经学习了那么多知识，那根据这些知识来评价一下这个项目。播放Review。但是你可以根据这个项目以及你搜集到的star评估一下这个潜力。那并且你可以看一下这个项目如果开源，它应该什么样的路径能到达什么量级的star？/Users/copizzah/Desktop/work/bach/bach-evolve`
- `这里有一个明显的问题，这些东西是可以使用的产品呢？还是不是可以使用的产品？这才是最关键，是不是用户需要的东西？`
- `开始使用 gitnexus + mermaid  + md 对所有项目开始，所有的Git项目开始详细分析。那分析的维度，你就包括你围绕这个主题下面采取的各种策略。大家都聚到一起看看用的啥方法嘛，你每个部分你用的啥方法。好，这样做一些素材，做分析。然后看一看它的代码、贡献者、论文、核心理念、框架、优雅性啊等等，whatever。但凡你想到的方向，你都去想吧。啊，这个是Git。还有这种其他的什么paper呀、X呀等等，你都要提取出来。完整的sub agents来做。这种处理的中间模式，你把它变成CC加工素材，文件夹里边，罗列。啊，质量嘛，因为你是CC，所以你的质量肯定会差一点。没关系的，先做这步处理，我们去尽量发现一些insight，这样子的server，survey才会有价值，而不是泛泛而谈。比如说，paper里边的benchmark，大家都测了，那这种benchmark大家既然都测了，你就拉出来遛遛呗，看看谁的好谁的差。 bbbrowser 也可以用 anysearch 也可以`
- `hermes evomap 还有最近的genericagent 等等 有包含吗 ?? 这些很多项目名字里没有 进化`

### Codex Workspace Sessions

- `处理当前目录所有的素材，对于缺失的，再使用。anysearch 进行补全`
- `继续解析`
- `是的，然后在主页README当中开始进行给出这种分类和索引，这些分类和索引就恰好帮助大家获得认知，作为这种Awesome仓库的核心用途。`
- `注意ignore一些内容，然后注意i18n，然后发布为public的Git\`
- `https://github.com/china-qijizhifeng/agentic-Harness-engineering 又看到一个`
- `仓库名称改一改\ 现在这没有说明是 有关AI  Agents 的??`
- `Awesome Evolver`
- `这个好??`
- `刚才提到的那几个仓库 在 这个质量上排名如何`
- `核心啊，我们要把这个项目开源出去。这个项目就是用于聚合站，用于有关Self Evolve有关自进化相关所有工程的索引站和详细的分析站，是这个目的。那为这个Git项目开源，以及为这个网站搭建，开始写代码还是写文档？网站用什么好呢？你自己搜索一下吧，反正就是blog，然后里边能自定义非常多的东西，我们可能要有知识图谱之类的关系。那如果要知识图谱之类的关系，我记得有一个项目还挺不错的。 x.mitbunny.ai`
- `自动搞定`
- `http://x.mitbunny.ai 注意可以参考  这个样式 以及 使用reactit 来构建 动画 可以使用GSAP`
- `好像分析的项目论文都不够 主流??`
- `可视化的图谱 质量有待提高`
- `而且非常非常核心的，我们已经看了那么多了，为什么你只选了几小篇？`
- `说明论文这块收集不够。`
- `去查看历史有关这个Workspace的所有的输入，过滤出用户的输入，来作为当前的目标。`
- `用户的输入非常精确，并不是team的输入。`
- `好的，围绕这个去做吧。然后做之前检查一下，第一个，它需要有raw的素材。第二个，它需要加工成论文。第三个，它需要有网站，这个网站必须完完整整的为博客及SEO准备。第四个，所有的项目都有深度分析，都有model card类似这样子的教学使用的东西。`
- `把它全部改好啊，全部改好之后，我们的项目，我们的论文也还没完全写完呢。`
- `现在论文上有一些问题，比如说第一个数据。 GitHub的项目原始收集的有哪些？进行分析的有哪些？进化相关的有哪些？按时间顺序发布的有哪些？这些还没有分析呢。核心，我们写作的和关注的注意力也是和这个相关的。`
- `金核心，整个项目需要梳理，重新梳理一下项目结构不要乱放 ，该放哪的放哪，更新一下read me，更新一下整个项目的管理方式，更新一下Agent和Cloud的MD。 raw归raw 加工后的归加工的 、work 产物归work 、结果输出归结果、、全部都要索引化 覆盖`
- `OK，然后用户的输入你得提取出来，然后作为Agent和Claude里边的参考。`
- `不符合这些构成的素材怎么归类和清理一下？尽量怎样归类不要乱删`
- `修改定时任务 、注意每次迭代后都要主动提交 、主动更新 相关的 readme 、相关的 网站、`

## Source Boundary And Redaction Note

- Primary sources used: `~/.claude/history.jsonl`, `~/.codex/sessions/**/rollout-*.jsonl` entries whose `cwd` is `/Users/copizzah/Desktop/work/awesome-agent-evolution`.
- Secondary Claude project JSONL files were inspected only to understand why naive filtering is dangerous. They are not target sources because they include team assignments, tool results, persisted outputs, and agent echoes under `role=user`.
- The current target above is an inference from exact direct user inputs, not from team inputs.
- No secrets or credentials were copied into this file.
