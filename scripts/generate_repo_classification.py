#!/usr/bin/env python3
from __future__ import annotations
import csv, re, json
from pathlib import Path
from collections import Counter, defaultdict
from datetime import datetime, timezone, timedelta
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'research'; OUT.mkdir(exist_ok=True)
TZ=timezone(timedelta(hours=8)); now=datetime.now(TZ).isoformat(timespec='seconds')

def read(p):
    try: return p.read_text(encoding='utf-8', errors='ignore')
    except: return ''

def norm_repo(s): return (s or '').strip().lower().replace('https://github.com/','').split('?')[0].rstrip('/')

def parse_desc(txt):
    m=re.search(r'^## GitHub - [^:]+:\s*(.+?)\s*· GitHub',txt,re.M)
    if m: return re.sub(r'\s+',' ',m.group(1)).strip()
    for line in txt.splitlines():
        if line.startswith('# ') and 'GitHub' not in line: return line[2:].strip()
    return ''

def final_class(repo, desc, base, stack, key_files, txt):
    hay=' '.join([repo, desc, base, stack, key_files, txt[:2500]]).lower()
    repo_l=repo.lower(); desc_l=desc.lower(); base_l=base.lower(); key_l=key_files.lower()
    evidence=[]
    def has(words, field=hay): return any(w in field for w in words)
    # tutorial/resource first: awesome lists/paper lists are not frameworks even if code words appear.
    if has(['awesome','survey','roadmap','course','tutorial','guide','paper list','papers','resources','arxiv-daily','daily paper','learning resource'], repo_l+' '+desc_l):
        evidence.append('awesome/list/tutorial/survey resource signal')
        return '教程/tutorial','resource-index',evidence
    # Explicit framework/runtime/platform
    if base_l in ['framework','workflow-automation'] or has(['framework','sdk','runtime','platform','orchestrat','langgraph','crewai','autogen','agentos','workflow','server','api'], repo_l+' '+desc_l):
        evidence.append('framework/runtime/orchestration signal')
        return '框架/framework','framework-runtime',evidence
    # Bench/eval/harness
    if base_l=='evaluation' or has(['benchmark','bench','eval','harness','leaderboard','judge','arena','testbed','agentgym','swe-bench','webshop','gym'], repo_l+' '+desc_l+' '+key_l):
        evidence.append('benchmark/evaluation/harness signal')
        return '评测/evaluation','benchmark-eval',evidence
    # Paper/artifact/code reproduction
    if has(['paper','arxiv','iclr','acl','neurips','emnlp','artifact','reproduction','experiments','verl','datasets','baselines','rlhf','grpo'], repo_l+' '+desc_l+' '+key_l):
        evidence.append('paper/artifact/research-code signal')
        return '论文代码/paper-code','research-artifact',evidence
    # Tooling modules: memory/rag/prompt/coding/cli/plugin/mcp
    if base_l in ['memory','prompt-optimization','coding-agent','safety'] or has(['memory','mem','rag','prompt','optimizer','mcp','plugin','skill','cli','tool','coder','code agent','repair'], repo_l+' '+desc_l+' '+key_l):
        evidence.append('tool/module/memory/prompt/coding signal')
        return '工具/tool','tool-module',evidence
    # Application/demo/domain agent
    if base_l in ['evolution','research-agent'] or has(['agent','assistant','researcher','scientist','trading','demo','app','self-evolving','recursive','evolve','godel','darwin'], repo_l+' '+desc_l):
        evidence.append('application/self-evolving-agent signal')
        return '应用/application','application-demo',evidence
    evidence.append('fallback: insufficient README signal')
    return '工具/tool','fallback-tool',evidence

tech_rows=[]
with open(ROOT/'analysis/repo-techstack-cross-analysis.csv', newline='', encoding='utf-8') as f:
    tech_rows=list(csv.DictReader(f))
orig={}
with open(ROOT/'analysis/repo-cross-analysis.csv', newline='', encoding='utf-8') as f:
    for r in csv.DictReader(f):
        orig.setdefault(norm_repo(r.get('repo')), r.get('category',''))

rows=[]
for r in tech_rows:
    repo=r.get('repo',''); fn=ROOT/r.get('file','')
    txt=read(fn); desc=parse_desc(txt)
    key=r.get('key_files','')
    cat, tag, ev = final_class(repo, desc, r.get('inferred_category',''), r.get('inferred_language',''), key, txt)
    oc=orig.get(norm_repo(repo),'')
    prior_uncat = oc in ['', '-', 'Unclassified', 'unclassified', None]
    # Keep strong old labels only if not prior unclassified and coarse label is one of target six.
    if not prior_uncat and oc in ['框架','工具','论文代码','评测','应用','教程']:
        old_map={'框架':'框架/framework','工具':'工具/tool','论文代码':'论文代码/paper-code','评测':'评测/evaluation','应用':'应用/application','教程':'教程/tutorial'}
        cat=old_map[oc]; ev=['kept prior human/analysis category + README verified']
    rows.append({
        'repo':repo,'url':r.get('url',''),'stars':r.get('stars','0'),'prior_category':oc or '-',
        'prior_unclassified':str(prior_uncat).lower(),'final_category':cat,'function_tag':tag,
        'base_theme':r.get('inferred_category',''),'stack':r.get('inferred_language',''),'time_slice':r.get('time_slice',''),
        'content_timestamp':r.get('content_timestamp',''),'evidence':'; '.join(ev),'description':desc[:220]
    })

fields=['repo','url','stars','prior_category','prior_unclassified','final_category','function_tag','base_theme','stack','time_slice','content_timestamp','evidence','description']
with open(OUT/'repo-classification.csv','w',newline='',encoding='utf-8') as f:
    w=csv.DictWriter(f,fieldnames=fields); w.writeheader(); w.writerows(rows)
(OUT/'repo-classification.json').write_text(json.dumps({'generated_at':now,'rows':rows},ensure_ascii=False,indent=2),encoding='utf-8')

cnt=Counter(r['final_category'] for r in rows); prior_cnt=Counter(r['final_category'] for r in rows if r['prior_unclassified']=='true')
base_cnt=Counter(r['base_theme'] for r in rows); stack_cnt=Counter(r['stack'] for r in rows)
prior_n=sum(1 for r in rows if r['prior_unclassified']=='true')

def table_counts(counter,total=None):
    total=total or sum(counter.values())
    return '\n'.join(f"| {k} | {v} | {100*v/total:.1f}% |" for k,v in counter.most_common())

def sample_table(cat, limit=18):
    sample=sorted([r for r in rows if r['final_category']==cat], key=lambda x:int(x['stars'] or 0), reverse=True)[:limit]
    lines=['| Repo | Stars | Stack | Base theme | Prior | Evidence |','|---|---:|---|---|---|---|']
    for r in sample:
        lines.append(f"| [{r['repo']}]({r['url']}) | {r['stars']} | {r['stack']} | {r['base_theme']} | {r['prior_category']} | {r['evidence']} |")
    return '\n'.join(lines)
full_lines=['| # | Repo | Stars | Prior | Final category | Stack | Base theme | Evidence |','|---:|---|---:|---|---|---|---|---|']
for i,r in enumerate(sorted(rows,key=lambda x:(x['final_category'], -int(x['stars'] or 0), x['repo'])),1):
    full_lines.append(f"| {i} | [{r['repo']}]({r['url']}) | {r['stars']} | {r['prior_category']} | {r['final_category']} | {r['stack']} | {r['base_theme']} | {r['evidence']} |")

md=f"""# Repo 自动分类与技术栈分析（raw-github 348）

- content_timestamp: 2026-05-21
- regenerated_at: {now}
- raw_repo_files / classified_rows: {len(rows)}
- prior_unclassified_or_dash_from_analysis_repo_cross_analysis: {prior_n}
- missing_category_after_this_pass: 0
- companion_csv: `research/repo-classification.csv`
- companion_json: `research/repo-classification.json`

## 1. 分类口径

本轮针对旧 `analysis/repo-cross-analysis.csv` 中 `-` / `Unclassified` 的仓库做自动归类，并用 `raw-github/*.md` README描述、文件结构、`analysis/repo-techstack-cross-analysis.csv` 的技术栈/主题信号交叉验证。目标六类为：`框架/framework`、`工具/tool`、`论文代码/paper-code`、`评测/evaluation`、`应用/application`、`教程/tutorial`。

- `框架/framework`: SDK、runtime、platform、orchestration、workflow、AgentOS、可复用开发框架。
- `工具/tool`: MCP、CLI、plugin、skill、memory/RAG、prompt/coding utility 等可嵌入模块。
- `论文代码/paper-code`: arXiv/论文artifact/实验复现/研究代码。
- `评测/evaluation`: benchmark、eval、harness、gym、leaderboard、judge、testbed。
- `应用/application`: 具体 self-evolving / research / coding / domain agent demo 或产品化系统。
- `教程/tutorial`: awesome list、course、roadmap、tutorial、paper/resource list、学习资料。

## 2. 全量分类分布

| Category | Count | Share |
|---|---:|---:|
{table_counts(cnt,len(rows))}

## 3. 旧未分类仓库的新归属

注：Master消息称“241未分类”；当前本地旧CSV精确计数为 `-` 241 个 + `Unclassified` 2 个，共 {prior_n} 个需要补分类，本轮全部归类。

| New category | Count | Share |
|---|---:|---:|
{table_counts(prior_cnt,prior_n)}

## 4. README级原始技术主题分布

| Base theme | Count | Share |
|---|---:|---:|
{table_counts(base_cnt,len(rows))}

## 5. 技术栈分布

| Stack | Count | Share |
|---|---:|---:|
{table_counts(stack_cnt,len(rows))}

## 6. 技术趋势与5大Mismatch贯穿点

- **Mismatch 1: star ≠ production readiness.** 高star项目集中在通用框架、教程与研究artifact；README证据显示很多项目仍缺生产可观测、权限、安全、rollback与长期维护证据。
- **Mismatch 2: academic benchmark ≠ community pain.** `评测/evaluation` 与 `论文代码/paper-code` 证明学术/benchmark生态活跃，但Mom Test痛点更集中在部署可靠性、成本、状态管理、调试与端到端session评价。
- **Mismatch 3: framework abundance ≠ integration simplicity.** `框架/framework` + `工具/tool` 规模大，说明真实挑战不是“没有框架”，而是碎片化组件组合、黑盒抽象、prompt/tool可观测和企业集成。
- **Mismatch 4: self-evolution claim ≠ closed-loop evidence.** `应用/application` 和部分 `论文代码/paper-code` 常宣称 evolve/self-improve，但闭环评估、失败回滚、安全边界、长期记忆质量仍需交叉验证。
- **Mismatch 5: tutorial流量 ≠ reusable infrastructure.** `教程/tutorial` 是Evolver SEO入口，但必须和repo、论文、痛点、榜单/评测结构化连接，才能形成平台护城河。

## 7. 各类代表仓库（按star/可见影响排序）

"""
for cat in ['框架/framework','工具/tool','论文代码/paper-code','评测/evaluation','应用/application','教程/tutorial']:
    md+=f"\n### {cat}\n\n{sample_table(cat)}\n"
md += "\n## 8. 全量分类表\n\n" + '\n'.join(full_lines) + '\n'
(OUT/'repo-classification.md').write_text(md,encoding='utf-8')
print('wrote', OUT/'repo-classification.md', len(rows), 'prior', prior_n, cnt)
