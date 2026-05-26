# Source: Material Ranking Framework (素材Rank与价值区分)

> **Type**: Framework design | **Rank**: A | **Date**: 2026-05-26
> **Origin**: paper-reviews (137, 50 classified), repo-classification.json (527 repos), paper-method-classification (196 papers)
> **Full analysis**: [work/research/material-ranking-framework.md](../../research/material-ranking-framework.md)

## Key Findings

1. **统一6套分类系统**: 6 independent classification systems unified into one 4-dimensional scoring framework
2. **四维评分**: 机制维度 + 方法族维度 + 三维tag + 可操作性
3. **核心原则**: 没有rank的素材 = 无效素材 (user iron rule #3)
4. **覆盖范围**: 137 reviews, 527 repos, 196 papers classified

## Unified Scoring Dimensions

| Dimension | Source | Metric |
|-----------|--------|--------|
| Mechanism depth | paper-reviews | 6-class method_category |
| Method family | paper-method-classification | 7-family F1-F7 |
| 3D tags | repo-classification | category + function_tag + base_theme |
| Actionability | strategy taxonomy | 107 repos rated |

## Cross-references

- → [concepts/self-improvement.md](../concepts/self-improvement.md) — M3 mechanism depth spectrum
- → [concepts/self-evaluation.md](../concepts/self-evaluation.md) — M2 evaluation feeds into ranking
- → [sources/raw-papers-mechanism-analysis.md](raw-papers-mechanism-analysis.md) — F1-F7 method families
- → [sources/raw-github-mechanism-analysis.md](raw-github-mechanism-analysis.md) — repo classification input

## Trust Chain

- 6 source classification systems, all documented in frontmatter
- Scores traceable to individual review/repo entries
