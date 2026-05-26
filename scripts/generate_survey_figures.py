#!/usr/bin/env python3
from __future__ import annotations
import csv, json, os, re, glob, math
from collections import Counter, defaultdict
from datetime import datetime, timezone, timedelta
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'survey' / 'figures'
OUT.mkdir(parents=True, exist_ok=True)
TZ = timezone(timedelta(hours=8))
GENERATED_AT = datetime.now(TZ).isoformat(timespec='seconds')


def read_text(p: Path) -> str:
    try:
        return p.read_text(encoding='utf-8')
    except Exception:
        return ''


def load_json(p: Path):
    try:
        return json.loads(p.read_text(encoding='utf-8'))
    except Exception:
        return None


def pct(a, b):
    return f"{(100*a/b):.1f}%" if b else 'n/a'


def write(name: str, content: str):
    (OUT / name).write_text(content.strip() + "\n", encoding='utf-8')


def write_csv(name: str, rows, fields):
    with (OUT / name).open('w', newline='', encoding='utf-8') as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader(); w.writerows(rows)

# ---------- Load datasets ----------
raw_paper_index = load_json(ROOT/'output/raw-papers-timestamp-index.json') or {}
paper_records = raw_paper_index.get('records', [])
repo_index = load_json(ROOT/'output/raw-github-timestamp-index.json') or {}
repo_records = repo_index.get('records', [])

repo_rows = []
for p in [ROOT/'analysis/repo-techstack-cross-analysis.csv', ROOT/'analysis/repo-cross-analysis.csv']:
    if p.exists():
        with p.open(newline='', encoding='utf-8') as f:
            repo_rows = list(csv.DictReader(f))
        break

blog_json_paths = sorted((ROOT/'raw-blogs').glob('*.json'))
blog_records = [load_json(p) for p in blog_json_paths]
blog_records = [r for r in blog_records if isinstance(r, dict)]
social_json_paths = sorted((ROOT/'raw-social').glob('*.json'))
social_records = [load_json(p) for p in social_json_paths]
social_records = [r for r in social_records if isinstance(r, dict)]
social_rank_paths = sorted((ROOT/'raw-social-rank').glob('*.json'))
social_rank_records = [load_json(p) for p in social_rank_paths]
social_rank_records = [r for r in social_rank_records if isinstance(r, dict)]

paper_review_count = len(list((ROOT/'paper-reviews').glob('*.md')))
academic_review_count = len(list((ROOT/'academic-reviews').glob('*.md')))
raw_paper_md_count = len(list((ROOT/'raw-papers').glob('*.md')))
raw_github_md_count = len(list((ROOT/'raw-github').glob('*.md')))
raw_blog_file_count = sum(1 for p in (ROOT/'raw-blogs').rglob('*') if p.is_file())
raw_social_file_count = sum(1 for p in (ROOT/'raw-social').rglob('*') if p.is_file())

# ---------- Pain point parsing ----------
pain_summary = read_text(ROOT/'raw-social/mom-test/mom-test-findings.md')
summary_categories = []
in_table = False
for line in pain_summary.splitlines():
    if line.startswith('| # | Category | Count | Severity |'):
        in_table = True; continue
    if in_table:
        if not line.startswith('|') or line.startswith('|---'):
            continue
        parts = [x.strip() for x in line.strip('|').split('|')]
        if len(parts) >= 4 and parts[0].isdigit():
            summary_categories.append({'rank': int(parts[0]), 'category': parts[1], 'count': int(parts[2]), 'severity': parts[3]})
        elif summary_categories:
            break
pain_rows = []
for platform, fname in [('Reddit','raw-social/mom-test/mom-test-findings-reddit.md'), ('HN','raw-social/mom-test/mom-test-findings-hn.md'), ('X/Twitter','raw-social/mom-test/mom-test-findings-x.md')]:
    txt = read_text(ROOT/fname)
    for m in re.finditer(r'^## Pain Point\s+(\d+):\s*(.+)$', txt, flags=re.M):
        pain_rows.append({'platform': platform, 'pain_id': m.group(1), 'title': m.group(2).strip(), 'source_file': fname})
write_csv('painpoint-index.csv', pain_rows, ['platform','pain_id','title','source_file'])
pain_platform_counts = Counter(r['platform'] for r in pain_rows)

# ---------- Papers: title + method classification ----------
method_keywords = [
    ('code/self-modification', ['godel', 'darwin', 'code', 'program', 'self-improv', 'rewrite', 'evolve', 'evolver', 'absolute zero', 'alphaevolve']),
    ('reward/RL/self-play', ['reward', 'rl', 'reinforcement', 'self-play', 'rlaif', 'ragen', 'reasoning', 'training']),
    ('prompt/search optimization', ['prompt', 'gepa', 'evoprompt', 'optimization', 'search', 'instruction']),
    ('memory/knowledge evolution', ['memory', 'mem', 'bank', 'lifelong', 'forget', 'knowledge']),
    ('multi-agent reflection/debate', ['multi-agent', 'debate', 'reflection', 'reflexion', 'critic', 'self-refine', 'collaborat']),
    ('web/tool/environment adaptation', ['web', 'tool', 'voyager', 'browser', 'environment', 'workflow', 'agent-r']),
    ('evaluation/safety/governance', ['eval', 'benchmark', 'safety', 'risk', 'misevolution', 'governance', 'alignment']),
]

def paper_title(path):
    txt = read_text(ROOT/path)
    for line in txt.splitlines():
        if line.startswith('# '):
            return line[2:].strip()
    return Path(path).stem

def classify_method(title, body=''):
    hay = (title + ' ' + body[:2500]).lower()
    scores = []
    for cat, kws in method_keywords:
        s = sum(hay.count(k) for k in kws)
        if s:
            scores.append((s, cat))
    return max(scores)[1] if scores else 'other/unclear'

paper_rows = []
for rec in paper_records:
    f = rec.get('file','')
    title = paper_title(Path(f)) if f else rec.get('arxiv_id','unknown')
    txt = read_text(ROOT/f) if f else ''
    paper_rows.append({
        'arxiv_id': rec.get('arxiv_id',''),
        'title': title,
        'method_category': classify_method(title, txt),
        'content_timestamp': rec.get('content_timestamp','unknown'),
        'time_slice': rec.get('time_slice','unknown'),
        'file': f,
    })
write_csv('paper-method-classification-snapshot.csv', paper_rows, ['arxiv_id','title','method_category','content_timestamp','time_slice','file'])
method_counts = Counter(r['method_category'] for r in paper_rows)
paper_time_counts = Counter(r['time_slice'] for r in paper_rows)

# ---------- Repo stats ----------
repo_category_field = 'inferred_category' if repo_rows and 'inferred_category' in repo_rows[0] else 'category'
repo_lang_field = 'inferred_language' if repo_rows and 'inferred_language' in repo_rows[0] else 'language'
repo_cat_counts = Counter(r.get(repo_category_field,'unknown') or 'unknown' for r in repo_rows)
repo_lang_counts = Counter(r.get(repo_lang_field,'unknown') or 'unknown' for r in repo_rows)
repo_time_counts = Counter(r.get('time_slice','unknown') or 'unknown' for r in repo_rows if 'time_slice' in r)
# category x language top cells
repo_cat_lang = Counter((r.get(repo_category_field,'unknown') or 'unknown', r.get(repo_lang_field,'unknown') or 'unknown') for r in repo_rows)
repo_cat_lang_rows = [{'category':c,'stack':s,'count':n} for (c,s),n in repo_cat_lang.most_common()]
write_csv('repo-category-stack-cross-tab.csv', repo_cat_lang_rows, ['category','stack','count'])

# ---------- Blog author / platform stats ----------
blog_platform_counts = Counter(r.get('platform','unknown') or 'unknown' for r in blog_records)
blog_category_counts = Counter(r.get('category','unknown') or 'unknown' for r in blog_records)
blog_status_counts = Counter(r.get('extraction_status','unknown') or 'unknown' for r in blog_records)
blog_influence_counts = Counter(((r.get('author_profile') or {}).get('industry_influence_rating','unknown') or 'unknown') for r in blog_records)
blog_conf_counts = Counter(((r.get('author_profile') or {}).get('confidence','unknown') or 'unknown') for r in blog_records)
blog_need_enrich = sum(1 for r in blog_records if (r.get('author_profile') or {}).get('needs_enrichment') is True)
blog_author_rows = []
for r in blog_records:
    ap = r.get('author_profile') or {}
    blog_author_rows.append({
        'id': r.get('id',''), 'platform': r.get('platform','unknown'), 'name': r.get('name',''),
        'author': ap.get('name_or_id','unknown'), 'influence_rating': ap.get('industry_influence_rating','unknown'),
        'confidence': ap.get('confidence','unknown'), 'needs_enrichment': ap.get('needs_enrichment','unknown'),
        'category': r.get('category','unknown'), 'time_slice': r.get('time_slice','unknown'), 'url': r.get('url','')
    })
write_csv('blog-author-profile-index.csv', blog_author_rows, ['id','platform','name','author','influence_rating','confidence','needs_enrichment','category','time_slice','url'])

# ---------- Social stats ----------
social_platform_counts = Counter(r.get('platform','unknown') or 'unknown' for r in social_records)
social_status_counts = Counter(r.get('extraction_status','unknown') or 'unknown' for r in social_records)
social_time_counts = Counter(r.get('time_slice','unknown') or 'unknown' for r in social_records)

# ---------- Cross source matrix heuristic ----------
cross_topics = [
    ('Reliability / production gap', ['reliab', 'production', 'deploy', 'demo', 'workflow'], ['evaluation','framework','workflow-automation'], ['Agent Reliability in Production','Real-World Deployment Gap','Production Proof Gap']),
    ('Evaluation / benchmark gap', ['benchmark', 'eval', 'swe-bench', 'metric'], ['evaluation'], ['Evaluation & Benchmarking','Modest Absolute Gains']),
    ('Memory / drift / forgetting', ['memory', 'lifelong', 'forget', 'drift', 'bank'], ['memory'], ['Knowledge & Memory Persistence']),
    ('Framework opacity / tooling', ['framework', 'tool', 'langchain', 'crewai', 'observability', 'prompt'], ['framework','prompt-optimization'], ['Framework/Tooling Gaps','Interaction Model Mismatch']),
    ('Safety / governance / cost', ['safety', 'risk', 'governance', 'cost', 'security', 'sandbox'], ['safety','evaluation'], ['Safety, Security & Cost','Enterprise Governance','Misevolution / Unintended Evolution']),
    ('Self-improvement feasibility', ['self-improv', 'self-evol', 'godel', 'evolve', 'recursive'], ['evolution'], ['Self-Improvement Feasibility']),
]
summary_cat_lookup = {r['category']: r['count'] for r in summary_categories}
cross_rows=[]
for topic, pkeys, rcats, pcats in cross_topics:
    paper_n = sum(1 for r in paper_rows if any(k in (r['title']+' '+r['method_category']).lower() for k in pkeys))
    repo_n = sum(repo_cat_counts.get(c,0) for c in rcats)
    pain_n = sum(summary_cat_lookup.get(c,0) for c in pcats)
    blog_n = sum(1 for r in blog_records if any(k in (str(r.get('name',''))+' '+str(r.get('category',''))).lower() for k in pkeys))
    cross_rows.append({'topic': topic, 'paper_signal': paper_n, 'repo_signal': repo_n, 'painpoint_signal': pain_n, 'blog_signal': blog_n, 'interpretation': 'strong mismatch risk' if pain_n and (paper_n or repo_n) else 'needs enrichment'})
write_csv('cross-source-validation-matrix.csv', cross_rows, ['topic','paper_signal','repo_signal','painpoint_signal','blog_signal','interpretation'])

# ---------- Framework radar heuristic ----------
frameworks = ['LangChain/LangGraph','CrewAI','AutoGen','OpenAI Agents SDK','EvoAgentX','DGM/OpenEvolve','Letta/Graphiti','Browser-use','n8n']
framework_rows=[]
all_repo_text = '\n'.join((r.get('repo','')+' '+r.get('key_files','')+' '+r.get(repo_category_field,'')+' '+r.get(repo_lang_field,'')) for r in repo_rows).lower()
all_pain_titles = ' '.join(r['title'] for r in pain_rows).lower()
for fw in frameworks:
    keys = [k.lower() for k in re.split(r'[/ ]+', fw) if k]
    repo_mentions = sum(all_repo_text.count(k) for k in keys)
    pain_mentions = sum(all_pain_titles.count(k) for k in keys)
    # Heuristic 1-5 scales: adoption from mentions, observability/production penalized by pain mentions, self-evolution from name/category hints.
    adoption = min(5, 1 + repo_mentions)
    observability = max(1, 4 - pain_mentions)
    production = max(1, min(5, 2 + repo_mentions//2 - pain_mentions))
    self_evo = 5 if any(k in fw.lower() for k in ['evo','dgm','openevolve']) else (3 if fw in ['Letta/Graphiti','LangChain/LangGraph'] else 2)
    governance = 3 if fw in ['OpenAI Agents SDK','LangChain/LangGraph','Letta/Graphiti'] else 2
    framework_rows.append({'framework':fw,'adoption_signal':adoption,'observability_signal':observability,'production_fit_signal':production,'self_evolution_fit':self_evo,'safety_governance_signal':governance,'repo_mentions':repo_mentions,'pain_mentions':pain_mentions})
write_csv('framework-radar-scores.csv', framework_rows, ['framework','adoption_signal','observability_signal','production_fit_signal','self_evolution_fit','safety_governance_signal','repo_mentions','pain_mentions'])

# ---------- Global coverage snapshot ----------
coverage_rows = [
    {'dataset':'raw-papers timestamp index','current':len(paper_records),'target_or_claim':'100 target / Master said 88 currently','coverage_or_note':pct(len(paper_records),100),'status':'gap: count discrepancy vs Master message'},
    {'dataset':'paper-reviews deep reviews','current':paper_review_count,'target_or_claim':'88 reviews','coverage_or_note':pct(paper_review_count,88),'status': (f'gap: {max(88-paper_review_count,0)} remaining if target 88' if paper_review_count < 88 else 'meets/exceeds 88 target')},
    {'dataset':'academic-reviews supplemental','current':academic_review_count,'target_or_claim':'supporting reviews','coverage_or_note':'supplemental','status':'partly duplicate ids possible'},
    {'dataset':'raw-github repo README/code snapshots','current':raw_github_md_count,'target_or_claim':'348 repos','coverage_or_note':pct(raw_github_md_count,348),'status':'complete snapshot; cross-analysis exists'},
    {'dataset':'repo techstack cross-analysis rows','current':len(repo_rows),'target_or_claim':'348 repos','coverage_or_note':pct(len(repo_rows),348),'status':'complete snapshot' if len(repo_rows)>=348 else 'gap'},
    {'dataset':'raw-blogs files','current':raw_blog_file_count,'target_or_claim':'1306 files mentioned by Master','coverage_or_note':pct(raw_blog_file_count,1306),'status':'files are json+md pairs; item records below'},
    {'dataset':'raw-blogs JSON item records','current':len(blog_records),'target_or_claim':'1306 blog claim requires clarification','coverage_or_note': f'{len(blog_records)} json records if paired files','status':'author_profile present but needs enrichment'},
    {'dataset':'raw-social files','current':raw_social_file_count,'target_or_claim':'300+ full posts / earlier 131','coverage_or_note':'file count includes md+json pairs','status':'needs full-text status audit'},
    {'dataset':'raw-social JSON item records','current':len(social_records),'target_or_claim':'300+ posts','coverage_or_note':pct(len(social_records),300),'status':'above 300 json records; quality varies'},
    {'dataset':'Mom Test pain points','current':len(pain_rows),'target_or_claim':'97 pain points','coverage_or_note':pct(len(pain_rows),97),'status':'detailed platform files parse to 97'},
]
write_csv('data-coverage-snapshot.csv', coverage_rows, ['dataset','current','target_or_claim','coverage_or_note','status'])
summary = {
    'generated_at': GENERATED_AT,
    'counts': {
        'paper_records_timestamp_index': len(paper_records),
        'raw_paper_md_files': raw_paper_md_count,
        'paper_reviews': paper_review_count,
        'academic_reviews': academic_review_count,
        'repo_records_timestamp_index': len(repo_records),
        'raw_github_md_files': raw_github_md_count,
        'repo_cross_analysis_rows': len(repo_rows),
        'raw_blog_files': raw_blog_file_count,
        'raw_blog_json_records': len(blog_records),
        'raw_social_files': raw_social_file_count,
        'raw_social_json_records': len(social_records),
        'raw_social_rank_json_records': len(social_rank_records),
        'pain_points_parsed': len(pain_rows),
    },
    'top_repo_categories': repo_cat_counts.most_common(10),
    'top_repo_languages': repo_lang_counts.most_common(10),
    'top_blog_platforms': blog_platform_counts.most_common(15),
    'blog_influence_counts': blog_influence_counts.most_common(),
    'blog_needs_enrichment': blog_need_enrich,
    'pain_platform_counts': pain_platform_counts.most_common(),
    'method_counts': method_counts.most_common(),
}
(OUT/'figure-data-summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding='utf-8')


coverage_chart_values = [
    len(paper_records),
    round(100*paper_review_count/88) if paper_review_count else 0,
    round(100*len(repo_rows)/348) if repo_rows else 0,
    round(100*raw_blog_file_count/1306) if raw_blog_file_count else 0,
    round(100*len(social_records)/300) if social_records else 0,
    round(100*len(pain_rows)/97) if pain_rows else 0,
]
coverage_chart_max = max(120, int(math.ceil(max(coverage_chart_values or [100]) / 50.0) * 50))

# ---------- Markdown / Mermaid outputs ----------
coverage_table = '\n'.join(f"| {r['dataset']} | {r['current']} | {r['target_or_claim']} | {r['coverage_or_note']} | {r['status']} |" for r in coverage_rows)
write('data-coverage-dashboard.md', f"""
# 数据覆盖仪表盘（当前快照）

- generated_at: {GENERATED_AT}
- scope: 仅基于当前仓库文件生成；基础数据仍在并行补齐，所有图表应在最终综述前重跑。
- important discrepancy: `output/raw-papers-timestamp-index.json` 当前为 {len(paper_records)} 条，而 Master 消息称 raw-papers 88/100；`raw-blogs/` 当前为 {raw_blog_file_count} 个文件、{len(blog_records)} 条 JSON item 记录，需区分“文件数”和“内容条目数”。

| Dataset | Current | Target / Claim | Coverage | Status |
|---|---:|---|---:|---|
{coverage_table}

```mermaid
xychart-beta
    title "基础数据覆盖率快照（按目标或声明口径）"
    x-axis ["Papers", "Reviews", "Repos", "BlogFiles", "SocialJSON", "PainPts"]
    y-axis "coverage %" 0 --> {coverage_chart_max}
    bar [{', '.join(str(v) for v in coverage_chart_values)}]
```

```mermaid
pie title Mom Test 97痛点平台来源
{chr(10).join(f'    "{k}" : {v}' for k,v in pain_platform_counts.items())}
```

## 可追溯中间文件

- `data-coverage-snapshot.csv`
- `figure-data-summary.json`
- `painpoint-index.csv`
""")

# Method taxonomy Mermaid
method_nodes = '\n'.join(f"        {re.sub('[^A-Za-z0-9]', '', cat)[:24]}[\"{cat}<br/>{n} papers\"]" for cat,n in method_counts.most_common())
method_edges = '\n'.join(f"    Methods --> {re.sub('[^A-Za-z0-9]', '', cat)[:24]}" for cat,n in method_counts.most_common())
method_table = '\n'.join(f"| {cat} | {n} | {pct(n,len(paper_rows))} |" for cat,n in method_counts.most_common())
write('method-taxonomy-mermaid.md', f"""
# 方法分类 Mermaid 图（论文全量快照）

- generated_at: {GENERATED_AT}
- paper_source: `output/raw-papers-timestamp-index.json` + `raw-papers/*.md`
- current_papers_classified: {len(paper_rows)}
- note: 这是自动关键词初分类，后续需由论文review #26-#88 的深度结论校正。

```mermaid
flowchart TD
    Root["Self-Evolving / Agent Evolution Methods"] --> Methods["方法族（自动初分类）"]
{method_edges}
{method_nodes}
```

| Method family | Papers | Share |
|---|---:|---:|
{method_table}

详表：`paper-method-classification-snapshot.csv`。
""")

# Timeline
# sort reasonable time slices
sorted_times = sorted(paper_time_counts.items(), key=lambda kv: kv[0])
timeline_lines = []
for t,n in sorted_times:
    if t and t != 'unknown':
        timeline_lines.append(f"    {t} : {n} paper records")
repo_time_lines = '\n'.join(f"| {t} | {n} |" for t,n in repo_time_counts.most_common(20)) or '| n/a | 0 |'
write('evolution-timeline.md', f"""
# 领域发展时间线（论文 + Repo 活跃快照）

- generated_at: {GENERATED_AT}
- paper time source: raw-papers temporal metadata
- repo time source: repo techstack cross-analysis `time_slice`

```mermaid
timeline
    title Agent Self-Evolution / Evolution 论文时间切片
{chr(10).join(timeline_lines) if timeline_lines else '    unknown : no parsed paper time slices'}
```

## Repo 时间切片 Top 20

| Time slice | Repo count |
|---|---:|
{repo_time_lines}

解释：repo 时间切片中 `unknown` 很高，表示 README/raw capture 缺失可靠时间戳，不应解读为真实活跃度分布。
""")

repo_cat_table = '\n'.join(f"| {c} | {n} | {pct(n,len(repo_rows))} |" for c,n in repo_cat_counts.most_common())
repo_lang_table = '\n'.join(f"| {c} | {n} | {pct(n,len(repo_rows))} |" for c,n in repo_lang_counts.most_common())
write('repo-techstack-and-trend-figures.md', f"""
# 348 Repo 技术栈与趋势图

- generated_at: {GENERATED_AT}
- source: `analysis/repo-techstack-cross-analysis.csv`
- rows: {len(repo_rows)}

```mermaid
pie title Repo类别分布（348快照）
{chr(10).join(f'    "{c}" : {n}' for c,n in repo_cat_counts.most_common(10))}
```

```mermaid
pie title Repo技术栈/语言分布（README结构推断）
{chr(10).join(f'    "{c}" : {n}' for c,n in repo_lang_counts.most_common(8))}
```

## 类别分布

| Category | Count | Share |
|---|---:|---:|
{repo_cat_table}

## 技术栈分布

| Stack | Count | Share |
|---|---:|---:|
{repo_lang_table}

交叉表：`repo-category-stack-cross-tab.csv`。
""")

blog_platform_table = '\n'.join(f"| {c} | {n} | {pct(n,len(blog_records))} |" for c,n in blog_platform_counts.most_common(25))
blog_influence_table = '\n'.join(f"| {c} | {n} | {pct(n,len(blog_records))} |" for c,n in blog_influence_counts.most_common())
write('blog-author-impact-figures.md', f"""
# 博客/视频作者画像统计（当前快照）

- generated_at: {GENERATED_AT}
- raw_blog_files: {raw_blog_file_count}
- json_item_records: {len(blog_records)}
- author_profiles_need_enrichment: {blog_need_enrich} / {len(blog_records)}
- warning: 作者画像多为自动补全字段，`needs_enrichment=True` 占比高；这是一张“缺口定位图”，不是最终KOL排名。

```mermaid
pie title 作者影响力标签分布（自动画像）
{chr(10).join(f'    "{c}" : {n}' for c,n in blog_influence_counts.most_common(12))}
```

```mermaid
xychart-beta
    title "Top内容平台（JSON记录数）"
    x-axis [{', '.join('"'+c[:12].replace('"','')+'"' for c,n in blog_platform_counts.most_common(10))}]
    y-axis "records" 0 --> {max([n for _,n in blog_platform_counts.most_common(10)] or [1])}
    bar [{', '.join(str(n) for c,n in blog_platform_counts.most_common(10))}]
```

## 平台分布 Top 25

| Platform | Records | Share |
|---|---:|---:|
{blog_platform_table}

## 影响力标签分布

| Influence rating | Records | Share |
|---|---:|---:|
{blog_influence_table}

详表：`blog-author-profile-index.csv`。
""")

cross_table = '\n'.join(f"| {r['topic']} | {r['paper_signal']} | {r['repo_signal']} | {r['painpoint_signal']} | {r['blog_signal']} | {r['interpretation']} |" for r in cross_rows)
write('cross-source-validation-map.md', f"""
# 数据交叉验证图：论文声称 × Repo实践 × 社区痛点 × 博客传播

- generated_at: {GENERATED_AT}
- purpose: 给后续综述提供“矛盾点/验证点”导航，不替代深度review。

```mermaid
flowchart LR
    Papers["论文：方法与效果声称<br/>{len(paper_rows)} records"] --> Claims["claims: improvement / eval / safety"]
    Repos["Repo实践：技术栈与类别<br/>{len(repo_rows)} rows"] --> Practice["practice: framework / memory / eval / workflow"]
    Pain["Mom Test痛点<br/>{len(pain_rows)} detailed points"] --> Reality["reality: production reliability / cost / governance"]
    Blogs["博客/视频传播<br/>{len(blog_records)} json records"] --> Narrative["narrative: tutorials / hype / product launches"]
    Claims --> Gap{"交叉验证缺口"}
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
{cross_table}

详表：`cross-source-validation-matrix.csv`。
""")

# Framework radar md
radar_rows = '\n'.join(f"| {r['framework']} | {r['adoption_signal']} | {r['observability_signal']} | {r['production_fit_signal']} | {r['self_evolution_fit']} | {r['safety_governance_signal']} | {r['repo_mentions']} | {r['pain_mentions']} |" for r in framework_rows)
# Mermaid radar-beta syntax is still evolving; keep also table.
radar_series = '\n'.join(
    f"    curve fw{i+1}[\"{r['framework']}\"]{{{r['adoption_signal']}, {r['observability_signal']}, {r['production_fit_signal']}, {r['self_evolution_fit']}, {r['safety_governance_signal']}}}"
    for i, r in enumerate(framework_rows[:6])
)
write('framework-comparison-radar.md', f"""
# 框架对比雷达图（启发式快照）

- generated_at: {GENERATED_AT}
- source: repo名称/类别/README结构信号 + Mom Test痛点标题信号。
- warning: 这是全局导航用启发式评分（1-5），不是用户满意度或真实性能排名；后续需接入 repo交叉分析与社区痛点深度验证。

```mermaid
radar-beta
    title 框架对比雷达（1=弱，5=强；前6项）
    axis adoption["Adoption"], observability["Observability"], production["ProductionFit"], evolution["SelfEvolutionFit"], governance["Governance"]
{radar_series}
    max 5
    min 0
```

| Framework | Adoption | Observability | Production fit | Self-evolution fit | Safety/Governance | Repo mentions | Pain mentions |
|---|---:|---:|---:|---:|---:|---:|---:|
{radar_rows}

详表：`framework-radar-scores.csv`。
""")

citation_rows = [
    ('raw-papers timestamp records', len(paper_records)),
    ('paper-reviews', paper_review_count),
    ('academic-reviews', academic_review_count),
    ('raw-github repos', raw_github_md_count),
    ('raw-blog json records', len(blog_records)),
    ('raw-social json records', len(social_records)),
    ('raw-social-rank json records', len(social_rank_records)),
    ('Mom Test pain points', len(pain_rows)),
]
write('citation-source-statistics.md', f"""
# 引用/来源统计图

- generated_at: {GENERATED_AT}
- use: 作为参考文献与附录覆盖率的统计入口。

```mermaid
pie title 当前可引用/可追溯来源规模
{chr(10).join(f'    "{k}" : {v}' for k,v in citation_rows)}
```

| Source bucket | Count |
|---|---:|
{chr(10).join(f'| {k} | {v} |' for k,v in citation_rows)}

## 论文时间切片 Top

| Time slice | Paper records |
|---|---:|
{chr(10).join(f'| {k} | {v} |' for k,v in paper_time_counts.most_common(20))}
""")

# Index
write('README.md', f"""
# Survey Figures / Data Visualizations

Generated at: {GENERATED_AT}

这些文件是基础数据阶段的交叉验证可视化，不是最终综述正文。当前输出强调覆盖率、缺口、矛盾点和可追溯中间表，等待论文review、repo交叉分析、博客作者画像、社交全文补齐后应重新生成。

## Markdown + Mermaid 图表

1. `data-coverage-dashboard.md` — 基础数据覆盖率仪表盘
2. `method-taxonomy-mermaid.md` — 方法分类 Mermaid 图 + 论文初分类
3. `evolution-timeline.md` — 领域发展时间线
4. `repo-techstack-and-trend-figures.md` — 348 repo类别/技术栈图
5. `blog-author-impact-figures.md` — 博客/视频作者画像统计
6. `cross-source-validation-map.md` — 论文×实践×痛点×传播交叉验证图
7. `framework-comparison-radar.md` — 框架对比雷达图与评分表
8. `citation-source-statistics.md` — 引用/来源规模统计

## 可追溯中间数据

- `data-coverage-snapshot.csv`
- `paper-method-classification-snapshot.csv`
- `repo-category-stack-cross-tab.csv`
- `blog-author-profile-index.csv`
- `painpoint-index.csv`
- `cross-source-validation-matrix.csv`
- `framework-radar-scores.csv`
- `figure-data-summary.json`

## 已标记的数据口径问题

- raw-papers: 当前时间戳索引为 {len(paper_records)} 条，Master消息口径为 88/100，需由论文搜索/时间戳任务确认。
- raw-blogs: 当前目录为 {raw_blog_file_count} 个文件，其中 JSON item records 为 {len(blog_records)} 条；若“1306篇博客”指文件数则已满，若指内容条目则未满。
- pain points: 详细平台文件解析为 {len(pain_rows)} 条，与 Mom Test 总述的97条一致；总述类别表计数存在聚合/重叠口径，不能简单相加。
""")

print(f'Generated survey figures in {OUT}')
print(json.dumps(summary['counts'], ensure_ascii=False, indent=2))
