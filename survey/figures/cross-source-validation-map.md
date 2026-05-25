# 数据交叉验证图：论文声称 × Repo实践 × 社区痛点 × 博客传播

- generated_at: 2026-05-25T15:25:19+08:00
- purpose: 给后续综述提供“矛盾点/验证点”导航，不替代深度review。

```mermaid
flowchart LR
    Papers["论文：方法与效果声称<br/>196 records"] --> Claims["claims: improvement / eval / safety"]
    Repos["Repo实践：技术栈与类别<br/>359 rows"] --> Practice["practice: framework / memory / eval / workflow"]
    Pain["Mom Test痛点<br/>97 detailed points"] --> Reality["reality: production reliability / cost / governance"]
    Blogs["博客/视频传播<br/>652 json records"] --> Narrative["narrative: tutorials / hype / product launches"]
    Claims --> Gap交叉验证缺口
    Practice --> Gap
    Reality --> Gap
    Narrative --> Gap
    Gap --> G1["demo成功 ≠ production成功"]
    Gap --> G2["高star/高曝光 ≠ 低痛点"]
    Gap --> G3["论文热点 ≠ 实践成熟"]
    Gap --> G4["benchmark gain ≠ 业务价值"]
```

| Topic | Paper signal | Repo signal | Painpoint signal | Blog signal | Interpretation |
|---|---:|---:|---:|---:|---|
| Reliability / production gap | 2 | 131 | 19 | 43 | strong mismatch risk |
| Evaluation / benchmark gap | 6 | 85 | 10 | 28 | strong mismatch risk |
| Memory / drift / forgetting | 16 | 59 | 10 | 34 | strong mismatch risk |
| Framework opacity / tooling | 87 | 66 | 14 | 85 | strong mismatch risk |
| Safety / governance / cost | 4 | 86 | 11 | 6 | strong mismatch risk |
| Self-improvement feasibility | 60 | 59 | 12 | 116 | strong mismatch risk |

详表：`cross-source-validation-matrix.csv`。
