# GitHub Topic Indexing Check — 2026-06-05

## One-Sentence Judgment

`Shiyao-Huang/awesome-agent-evolution` 已经具备 `agent-evolution` topic 元数据，并且 GitHub search 已收录；网页 topic 页仍显示旧 `EvoMap/awesome-agent-evolution`，属于 GitHub 渲染页缓存/同步滞后或旧仓库身份展示问题。

## Three-Sentence Evidence

GitHub API returned `Shiyao-Huang/awesome-agent-evolution` as public, non-fork, 136 stars, MIT licensed, homepage `https://agent-evolution.com/`, and with `agent-evolution` in its 20 repository topics. `gh search repos 'topic:agent-evolution'` returned `Shiyao-Huang/awesome-agent-evolution` second after `EvoMap/evolver`, while the rendered topic page still showed `EvoMap/awesome-agent-evolution` at 132 stars. The API also reported primary language as TeX, so `.gitattributes` was added to keep raw captures, paper drafts, generated reports, and outputs from dominating GitHub Linguist classification.

## Five-Sentence Operational Reading

1. 不是当前仓库没有设置 topic；API 和 search 已经证明 `agent-evolution` 存在。
2. 当前可见异常是 GitHub topic web page 的 rendered listing 与 API/search index 不一致。
3. README/README-EN 已在前部加入 topic indexing status，避免读者误以为仓库没被收录。
4. `.gitattributes` 把论文、raw、reports、output、site/dist 标为 documentation/generated/vendored，减少 GitHub 把仓库主语言识别为 TeX 的概率。
5. 后续应继续监控 topic 页是否刷新为 `Shiyao-Huang/awesome-agent-evolution`，但不要为了搜索排名堆关键词或删除真实研究资产。

## Evidence Files

- Raw capture: `raw-github/shiyao-huang_awesome-agent-evolution.md`
- README surfaces: `README.md`, `README-EN.md`
- GitHub Linguist rule: `.gitattributes`
- Mermaid truth source: `.mermaid/current/graph.json`

## Boundary

This note does not claim that GitHub has completed the rendered topic-page refresh. It only records current evidence from GitHub API, GitHub search, and the public topic page observed on 2026-06-05.
