#!/usr/bin/env python3
"""
All-in-one: Generate stat CSVs + SVG charts + Mermaid diagrams
@sm:node chart-generation-pipeline
@sm:input survey/figures/*.csv, analysis/*.csv, research/repo-classification.csv
@sm:output site/public/visuals/*.svg, survey/figures/*.mmd, survey/figures/stat-*.csv
@sm:verify python3 scripts/generate_charts.py
"""
import csv, json, math, os
from collections import Counter, defaultdict
from pathlib import Path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

BASE = Path(__file__).resolve().parents[1]
FIGS = BASE / "survey" / "figures"
VIS = BASE / "site" / "public" / "visuals"
VIS.mkdir(parents=True, exist_ok=True)

plt.rcParams.update({
    'font.size': 11, 'figure.facecolor': 'white',
    'axes.facecolor': '#fafafa', 'axes.grid': True,
    'grid.alpha': 0.3, 'savefig.bbox': 'tight',
})

def read_csv(p):
    with open(p, newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))

def read_json(p):
    with open(p, encoding='utf-8') as f:
        return json.load(f)

def mean(v): return sum(v)/len(v) if v else 0
def stddev(v):
    if len(v) < 2: return 0
    m = mean(v)
    return (sum((x-m)**2 for x in v)/(len(v)-1))**0.5
def pctile(sv, p):
    if not sv: return 0
    k = (len(sv)-1)*p/100
    f, c = int(k), int(k)+1 if k != int(k) else int(k)
    return sv[min(f, len(sv)-1)] if f == c else sv[f]*(c-k)+sv[min(c, len(sv)-1)]*(k-f)

def desc(vals, label=""):
    s = sorted(vals); sd = stddev(s)
    return {"label":label,"n":len(s),"mean":round(mean(s),2),"median":round(pctile(s,50),2),
            "std":round(sd,2),"min":s[0] if s else 0,"max":s[-1] if s else 0,
            "p25":round(pctile(s,25),2),"p75":round(pctile(s,75),2)}

# ── Load all data ──
print("Loading data...")
repo_data = read_csv(BASE/"analysis"/"repo-cross-analysis.csv")
for r in repo_data: r['stars'] = int(r.get('stars',0) or 0)
repo_cls = read_csv(BASE/"research"/"repo-classification.csv")
for r in repo_cls: r['stars'] = int(r.get('stars',0) or 0)
papers_raw = read_csv(FIGS/"paper-method-classification-snapshot.csv")
papers = [p for p in papers_raw if not p['title'].startswith('Computer Science')]
radar = read_csv(FIGS/"framework-radar-scores.csv")
for r in radar:
    for k in ['adoption_signal','observability_signal','production_fit_signal','self_evolution_fit','safety_governance_signal','repo_mentions','pain_mentions']:
        r[k] = int(r.get(k,0) or 0)
cross_source = read_csv(FIGS/"cross-source-validation-matrix.csv")
for r in cross_source:
    for k in ['paper_signal','repo_signal','painpoint_signal','blog_signal']:
        r[k] = int(r.get(k,0) or 0)
cat_stack = read_csv(FIGS/"repo-category-stack-cross-tab.csv")
main_ana = read_json(BASE/"analysis"/"github-project-data-analysis.json")
print(f"Loaded {len(repo_data)} repos, {len(papers)} papers")

# ── Generate stat CSVs ──
print("Generating stat CSVs...")

# Theme stars
theme_stars = defaultdict(list)
for r in repo_cls:
    if r.get('base_theme'): theme_stars[r['base_theme']].append(r['stars'])
theme_stats = [desc(theme_stars[t],t) for t in sorted(theme_stars, key=lambda x:-len(theme_stars[x]))]

# Method trends
method_by_year = defaultdict(lambda: Counter())
for p in papers:
    ts = p.get('time_slice','')
    if ts and ts[:4].isdigit(): method_by_year[ts[:4]][p['method_category']] += 1
trend_rows = []
mc = defaultdict(int)
for yr in sorted(method_by_year):
    for m, c in sorted(method_by_year[yr].items()):
        mc[m] += c
        trend_rows.append({"year":yr,"method_category":m,"annual_count":c,"cumulative":mc[m]})

# Radar composites
sig_keys = ['adoption_signal','observability_signal','production_fit_signal','self_evolution_fit','safety_governance_signal']
dim_v = {k:[r[k] for r in radar] for k in sig_keys}
dim_m = {k:mean(v) for k,v in dim_v.items()}
dim_s = {k:stddev(v) for k,v in dim_v.items()}
radar_out = []
for r in radar:
    zs = {k+'_z': round((r[k]-dim_m[k])/dim_s[k],4) if dim_s[k]>0 else 0 for k in sig_keys}
    comp = round(mean([r[k] for k in sig_keys]),3)
    pmr = round(r['pain_mentions']/r['repo_mentions'],4) if r['repo_mentions']>0 else None
    radar_out.append({"framework":r['framework'],"composite":comp,"self_evo_fit":r['self_evolution_fit'],
        "self_evo_z":zs['self_evolution_fit_z'],"repo_mentions":r['repo_mentions'],
        "pain_mentions":r['pain_mentions'],"pmr":pmr,**zs})

# Cross-source gaps
gap_rows = []
srcs = ['paper_signal','repo_signal','painpoint_signal','blog_signal']
snames = ['paper','repo','pain','blog']
for r in cross_source:
    sigs = [r[k] for k in srcs]; total = sum(sigs); mx = max(sigs)
    gap_rows.append({"topic":r['topic'],"paper":sigs[0],"repo":sigs[1],"pain":sigs[2],"blog":sigs[3],
        "total":total,"gap_ratio":round(mx/total,4) if total>0 else 0,
        "range":mx-min(sigs),"std":round(stddev(sigs),2),
        "dominant":snames[sigs.index(mx)]})

# Write CSVs
def write_csv(path, rows, fields):
    with open(path,'w',newline='',encoding='utf-8') as f:
        w = csv.DictWriter(f, fieldnames=fields); w.writeheader()
        for row in rows: w.writerow(row)

write_csv(FIGS/"stat-star-by-theme.csv", theme_stats,
    ["label","n","mean","median","std","min","max","p25","p75"])
write_csv(FIGS/"stat-method-trend.csv", trend_rows,
    ["year","method_category","annual_count","cumulative"])
write_csv(FIGS/"stat-framework-radar-composite.csv", radar_out,
    ["framework","composite","self_evo_fit","self_evo_z","repo_mentions","pain_mentions","pmr",
     "adoption_signal_z","observability_signal_z","production_fit_signal_z","self_evolution_fit_z","safety_governance_signal_z"])
write_csv(FIGS/"stat-cross-source-gap.csv", gap_rows,
    ["topic","paper","repo","pain","blog","total","gap_ratio","range","std","dominant"])
print("Stat CSVs written.")

# ── Generate Charts ──
print("\nGenerating SVG charts...")

# 1. Method Distribution
method_totals = defaultdict(int)
for r in trend_rows: method_totals[r['method_category']] += int(r['annual_count'])
lm = {'reward/RL/self-play':'Reward/RL','code/self-modification':'Code/Self-Mod',
      'memory/knowledge evolution':'Memory/Evolve','multi-agent reflection/debate':'Multi-Agent',
      'web/tool/environment adaptation':'Web/Tool','prompt/search optimization':'Prompt/Search',
      'evaluation/safety/governance':'Eval/Safety'}
sm = sorted(method_totals.items(), key=lambda x:-x[1])
fig, ax = plt.subplots(figsize=(10,5))
colors = plt.cm.Set2(np.linspace(0,1,len(sm)))
ax.barh(range(len(sm)), [m[1] for m in sm], color=colors)
ax.set_yticks(range(len(sm))); ax.set_yticklabels([lm.get(m[0],m[0]) for m in sm])
ax.set_xlabel('Papers'); ax.set_title('Paper Method Distribution (2022–2026)')
for i,v in enumerate([m[1] for m in sm]): ax.text(v+0.5,i,str(v),va='center')
ax.invert_yaxis(); fig.tight_layout()
fig.savefig(VIS/'method-distribution.svg',format='svg'); fig.savefig(FIGS/'method-distribution.svg',format='svg'); plt.close()
print("[1/10] Method distribution")

# 2. Category × Theme Heatmap
ct = defaultdict(lambda: Counter())
cat_en = {}
for r in repo_cls:
    fc = r.get('final_category','')
    parts = fc.split('/') if fc else []
    cat = parts[-1] if parts else ''
    if len(parts) > 1: cat_en[parts[0]] = parts[-1]
    theme = r.get('base_theme','')
    if cat and theme: ct[cat][theme] += 1
top_themes = ['memory','evaluation','evolution','skill','framework','research-agent','prompt-optimization','coding-agent']
top_cats = sorted(ct.keys(), key=lambda x:-sum(ct[x].values()))[:7]
matrix = np.array([[ct[c].get(t,0) for t in top_themes] for c in top_cats])
fig, ax = plt.subplots(figsize=(10,6))
im = ax.imshow(matrix, cmap='YlOrRd', aspect='auto')
ax.set_xticks(range(len(top_themes))); ax.set_xticklabels(top_themes, rotation=45, ha='right', fontsize=9)
ax.set_yticks(range(len(top_cats))); ax.set_yticklabels(top_cats, fontsize=9)
for i in range(len(top_cats)):
    for j in range(len(top_themes)):
        v = int(matrix[i][j])
        if v > 0: ax.text(j,i,str(v),ha='center',va='center',fontsize=8,color='white' if v>matrix.max()/2 else 'black')
ax.set_title('Category × Theme Cross-Tab (486 repos)'); fig.colorbar(im,ax=ax,label='Count')
fig.tight_layout(); fig.savefig(VIS/'category-theme-heatmap.svg',format='svg'); fig.savefig(FIGS/'category-theme-heatmap.svg',format='svg'); plt.close()
print("[2/10] Category × Theme heatmap")

# 3. Time Series
years = sorted(method_by_year.keys())
fig, ax = plt.subplots(figsize=(10,5))
cm = plt.cm.tab10(np.linspace(0,1,7))
for idx,(method,label) in enumerate([('reward/RL/self-play','Reward/RL'),('code/self-modification','Code/Self-Mod'),
    ('memory/knowledge evolution','Memory'),('multi-agent reflection/debate','Multi-Agent'),
    ('prompt/search optimization','Prompt/Search'),('web/tool/environment adaptation','Web/Tool'),
    ('evaluation/safety/governance','Eval/Safety')]):
    ax.plot(years,[method_by_year[y].get(method,0) for y in years],marker='o',label=label,color=cm[idx],linewidth=2)
ax.set_xlabel('Year'); ax.set_ylabel('Papers'); ax.set_title('Paper Method Trends (2022–2026)')
ax.legend(loc='upper left',fontsize=8,ncol=2); fig.tight_layout()
fig.savefig(VIS/'method-trend-timeseries.svg',format='svg'); fig.savefig(FIGS/'method-trend-timeseries.svg',format='svg'); plt.close()
print("[3/10] Time series")

# 4. Corpus Funnel
counts = main_ana['counts']
fl = [('Raw GitHub Captures',counts['raw_captures']),('Classified Repos',counts['classified_repos']),
      ('Cross-Analyzed',counts.get('repo_cross_analysis_rows',359)),('Model Cards',counts['analyzed_projects']),
      ('Broad Evolution',counts['raw_broad_evolution']),('Strict Evolution',counts['raw_core_evolution'])]
fig, ax = plt.subplots(figsize=(10,5))
cf = plt.cm.Blues(np.linspace(0.3,0.9,len(fl)))[::-1]
ax.barh(range(len(fl)),[f[1] for f in fl],color=cf)
ax.set_yticks(range(len(fl))); ax.set_yticklabels([f[0] for f in fl])
ax.set_xlabel('Count'); ax.set_title('Corpus Funnel')
for i,v in enumerate([f[1] for f in fl]): ax.text(v+5,i,str(v),va='center')
ax.invert_yaxis(); fig.tight_layout()
fig.savefig(VIS/'corpus-funnel.svg',format='svg'); fig.savefig(FIGS/'corpus-funnel.svg',format='svg'); plt.close()
print("[4/10] Corpus funnel")

# 5. Strict vs Broad
fig, ax = plt.subplots(figsize=(6,4))
bars = ax.bar(['Strict\nSelf-Evolution','Broad\nEvolution-Related'],
    [counts['raw_core_evolution'],counts['raw_broad_evolution']],color=['#e74c3c','#3498db'],width=0.5)
ax.set_ylabel('Repos'); ax.set_title('Evolution Repository Classification')
for b,v in zip(bars,[counts['raw_core_evolution'],counts['raw_broad_evolution']]):
    ax.text(b.get_x()+b.get_width()/2,b.get_height()+3,str(v),ha='center',fontsize=12,fontweight='bold')
fig.tight_layout(); fig.savefig(VIS/'strict-vs-broad.svg',format='svg'); fig.savefig(FIGS/'strict-vs-broad.svg',format='svg'); plt.close()
print("[5/10] Strict vs Broad")

# 6. Framework Radar
dims = ['adoption_signal_z','observability_signal_z','production_fit_signal_z','self_evolution_fit_z','safety_governance_signal_z']
dlabels = ['Adoption','Observability','Production\nFit','Self-Evolution\nFit','Safety']
angles = np.linspace(0,2*np.pi,len(dims),endpoint=False).tolist()+[0]
fig, ax = plt.subplots(figsize=(8,8),subplot_kw=dict(polar=True))
for r in radar_out:
    vals = [float(r.get(d,0)) for d in dims]+[float(r.get(dims[0],0))]
    ax.plot(angles,vals,'o-',linewidth=1.5,label=r['framework'],markersize=4)
    ax.fill(angles,vals,alpha=0.05)
ax.set_xticks(angles[:-1]); ax.set_xticklabels(dlabels,fontsize=9)
ax.set_title('Framework Radar (z-scored)',y=1.08)
ax.legend(loc='upper right',bbox_to_anchor=(1.35,1.1),fontsize=8)
fig.tight_layout(); fig.savefig(VIS/'framework-radar.svg',format='svg'); fig.savefig(FIGS/'framework-radar.svg',format='svg'); plt.close()
print("[6/10] Framework radar")

# 7. Star Distribution
all_stars = [int(r.get('stars',0) or 0) for r in repo_data]
nz = [s for s in all_stars if s > 0]
fig, (a1,a2) = plt.subplots(1,2,figsize=(12,5))
a1.hist(all_stars,bins=50,color='#3498db',edgecolor='white',alpha=0.8)
a1.set_xlabel('Stars'); a1.set_ylabel('Count'); a1.set_title(f'All {len(all_stars)} repos')
a1.axvline(np.mean(all_stars),color='red',linestyle='--',label=f'Mean={np.mean(all_stars):.0f}')
a1.legend(fontsize=8)
if nz:
    a2.hist(np.log10(nz),bins=30,color='#e74c3c',edgecolor='white',alpha=0.8)
    a2.set_xlabel('log₁₀(Stars)'); a2.set_ylabel('Count'); a2.set_title(f'Non-zero ({len(nz)} repos)')
fig.suptitle('Star Distribution (power-law, skew=14.5)',fontsize=12); fig.tight_layout()
fig.savefig(VIS/'star-distribution.svg',format='svg'); fig.savefig(FIGS/'star-distribution.svg',format='svg'); plt.close()
print("[7/10] Star distribution")

# 8. Cross-Source Gap
fig, ax = plt.subplots(figsize=(10,5))
topics = [r['topic'] for r in gap_rows]
x = np.arange(len(topics)); w = 0.2
for i,(src,col) in enumerate(zip(['paper','repo','pain','blog'],['#2ecc71','#3498db','#e74c3c','#f39c12'])):
    ax.bar(x+i*w,[int(r[src]) for r in gap_rows],w,label=src.title(),color=col)
ax.set_xticks(x+w*1.5); ax.set_xticklabels([t[:25]+'…' if len(t)>25 else t for t in topics],rotation=30,ha='right',fontsize=8)
ax.set_ylabel('Signal Count'); ax.set_title('Cross-Source Signal Gap Analysis'); ax.legend()
fig.tight_layout(); fig.savefig(VIS/'cross-source-gap.svg',format='svg'); fig.savefig(FIGS/'cross-source-gap.svg',format='svg'); plt.close()
print("[8/10] Cross-source gap")

# 9. Theme Star Comparison
fig, ax = plt.subplots(figsize=(10,5))
themes = [r['label'] for r in theme_stats]; x = np.arange(len(themes)); w = 0.35
ax.bar(x-w/2,[float(r['mean']) for r in theme_stats],w,label='Mean',color='#3498db',alpha=0.8)
ax.bar(x+w/2,[float(r['median']) for r in theme_stats],w,label='Median',color='#e74c3c',alpha=0.8)
ax.set_xticks(x); ax.set_xticklabels(themes,rotation=45,ha='right',fontsize=8)
ax.set_ylabel('Stars'); ax.set_title('Star Distribution by Theme'); ax.set_yscale('log'); ax.legend()
fig.tight_layout(); fig.savefig(VIS/'theme-star-comparison.svg',format='svg'); fig.savefig(FIGS/'theme-star-comparison.svg',format='svg'); plt.close()
print("[9/10] Theme stars")

# 10. Pain Point Platform Distribution
painpoints = read_csv(FIGS/"painpoint-index.csv")
ppc = Counter(p['platform'] for p in painpoints)
fig, ax = plt.subplots(figsize=(6,6))
ax.pie(ppc.values(), labels=ppc.keys(), autopct='%1.1f%%', colors=['#3498db','#e74c3c','#f39c12'],
       startangle=90, textprops={'fontsize':11})
ax.set_title('Pain Points by Platform (97 total)')
fig.tight_layout(); fig.savefig(VIS/'painpoint-platform.svg',format='svg'); fig.savefig(FIGS/'painpoint-platform.svg',format='svg'); plt.close()
print("[10/10] Pain point platform")

# ── Mermaid Diagrams ──
print("\nGenerating Mermaid diagrams...")

mmd1 = """graph TD
    subgraph Methods["Self-Evolution Method Taxonomy"]
        RL["reward/RL/self-play<br/>47 papers (37.3%)"]
        Code["code/self-modification<br/>24 papers (19.0%)"]
        Mem["memory/knowledge evolution<br/>15 papers (11.9%)"]
        MA["multi-agent reflection/debate<br/>14 papers (11.1%)"]
        PS["prompt/search optimization<br/>10 papers (7.9%)"]
        Web["web/tool adaptation<br/>12 papers (9.5%)"]
        Eval["evaluation/safety/governance<br/>4 papers (3.2%)"]
    end
    RL -->|"selection pressure"| Code
    RL -->|"reward signal"| MA
    Code -->|"modifies"| PS
    Mem -->|"stores experience"| RL
    Mem -->|"informs"| MA
    MA -->|"generates feedback"| PS
    Web -->|"environment feedback"| RL
    Eval -->|"verifies"| Code
    style RL fill:#3498db,color:#fff
    style Code fill:#e74c3c,color:#fff
"""
mmd2 = """graph LR
    subgraph Early["2022-2023: Foundation"]
        R1["Reflection/Self-Refine"]
        R2["Prompt Engineering"]
        R3["RLHF"]
    end
    subgraph Mid["2024: Agent Runtime"]
        A1["Multi-Agent Systems"]
        A2["Agent Frameworks"]
        A3["Code Generation"]
    end
    subgraph Now["2025-2026: Infrastructure"]
        B1["Code Self-Modification"]
        B2["Memory Systems"]
        B3["Skill Libraries"]
        B4["Evaluation Harness"]
    end
    R1 -->|"evolves"| A1
    R2 -->|"automated"| A3
    R3 -->|"extends"| B1
    A1 -->|"needs"| B2
    A2 -->|"packages"| B3
    A3 -->|"requires"| B4
    style Early fill:#e8f4f8
    style Mid fill:#fff3cd
    style Now fill:#d4edda
"""
mmd3 = """graph TD
    Raw["Raw Captures<br/>490 repos + 198 papers"]
    Class["Classified<br/>490 repos"]
    Cross["Cross-Analyzed<br/>359 repos"]
    Cards["Model Cards<br/>204 projects"]
    Broad["Broad Evolution<br/>176 repos"]
    Strict["Strict Evolution<br/>79 repos"]
    Raw --> Class --> Cross
    Class --> Cards
    Class --> Broad --> Strict
    Papers["196 Papers<br/>7 methods"] -->|"method evidence"| Cross
    Pain["97 Pain Points"] -->|"community signal"| Cross
    style Raw fill:#3498db,color:#fff
    style Strict fill:#e74c3c,color:#fff
"""

for name, content in [('method-crossrelation-dag.mmd',mmd1),('theme-evolution-flow.mmd',mmd2),('corpus-pipeline-dag.mmd',mmd3)]:
    for d in [FIGS, VIS]:
        with open(d/name,'w') as f: f.write(content)

print("3 Mermaid diagrams generated.")

# Summary
svgs = sorted(VIS.glob('*.svg'))
mmds = sorted(VIS.glob('*.mmd'))
csvs = sorted(FIGS.glob('stat-*.csv'))
print(f"\nDone! {len(svgs)} SVGs, {len(mmds)} Mermaid, {len(csvs)} stat CSVs")
for f in svgs: print(f"  {f}")
for f in mmds: print(f"  {f}")
