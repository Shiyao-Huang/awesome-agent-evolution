#!/usr/bin/env python3
from __future__ import annotations
import json,re,urllib.parse
from pathlib import Path
from collections import defaultdict, Counter
from datetime import datetime,timezone,timedelta
ROOT=Path(__file__).resolve().parents[1]; OUT=ROOT/'research'; OUT.mkdir(exist_ok=True)
TZ=timezone(timedelta(hours=8)); now=datetime.now(TZ).isoformat(timespec='seconds')

def load_records():
    rec=[]
    for p in sorted((ROOT/'raw-blogs').glob('*.json')):
        try: d=json.loads(p.read_text(encoding='utf-8'))
        except Exception: continue
        items=d if isinstance(d,list) else [d]
        for x in items:
            if isinstance(x,dict):
                x['_file']=str(p.relative_to(ROOT)); rec.append(x)
    return rec

def host(url):
    try: return urllib.parse.urlparse(url).netloc.replace('www.','')
    except: return ''

def author_key(r):
    url=r.get('url','') or ''; h=host(url); ap=r.get('author_profile') or {}; name=ap.get('name_or_id') or ''
    content=r.get('content','') or ''
    # Specific handles when visible.
    if h=='dev.to':
        m=re.search(r'dev\.to/([^/]+)/',url); 
        if m: return '@'+m.group(1),'Dev.to','Developer blogger'
    if 'medium.com' in h:
        m=re.search(r'medium\.com/@([^/]+)',url)
        if m: return '@'+m.group(1),'Medium','Medium practitioner/blogger'
        if h.endswith('medium.com') and h!='medium.com': return h.split('.')[0],'Medium','Publication/author'
    if h.endswith('substack.com'):
        return h.split('.')[0],'Substack','Newsletter author'
    if 'csdn.net' in h:
        m=re.search(r'blog\.csdn\.net/([^/]+)',url)
        if m: return m.group(1),'CSDN','Chinese developer blogger'
    if 'segmentfault.com' in h:
        m=re.search(r'\n\[([^\]\n]{2,30})\]\(https://segmentfault\.com/u/',content)
        if m: return m.group(1),'SegmentFault','Chinese developer/community author'
    known_orgs=[('anthropic.com','Anthropic','AI safety/research organization'),('openai.com','OpenAI','AI research/product organization'),('developers.openai.com','OpenAI Developers','AI developer platform'),('langchain.com','LangChain','Agent framework organization'),('humanloop.com','Humanloop','LLMOps/evaluation organization'),('wandb.ai','Weights & Biases','ML tooling organization'),('modal.com','Modal','AI infrastructure organization'),('aws.amazon.com','AWS','Cloud provider'),('cloud.google.com','Google Cloud','Cloud provider'),('github.com','GitHub maintainers','Open-source maintainers'),('producthunt.com','Product Hunt maker/team','Product launch/maker community'),('youtube.com','YouTube creator/channel','Video educator/creator')]
    for dom,n,role in known_orgs:
        if h.endswith(dom): return n,r.get('platform') or h,role
    if name and name not in ['unknown','source_platform_or_domain']:
        return name,r.get('platform') or h, ap.get('title_position_company') or 'unknown'
    return h or r.get('platform','unknown'), r.get('platform') or h, ap.get('title_position_company') or 'unknown'

def infl_score(ent):
    platform_weight={'YouTube':2.2,'Product Hunt':2.0,'Anthropic Blog':3.5,'OpenAI Blog':3.5,'LangChain Blog':3.0,'Medium/TDS':1.8,'Substack':1.8,'GitHub Blog/Docs':2.2,'Tencent Cloud Dev':2.0,'Alibaba Cloud Dev':2.0,'Zhihu':1.7,'CSDN':1.4,'Dev.to':1.4,'InfoQ China':2.1,'36Kr':2.1,'Leiphone':2.0,'QbitAI':2.0,'Machine Heart':2.0}
    count=len(ent['records']); plats=ent['platforms']
    w=max([platform_weight.get(p,1.0) for p in plats] or [1.0])
    org_bonus=20 if ent['role'] and any(x in ent['role'].lower() for x in ['organization','platform','cloud','provider','maintainer']) else 0
    return round(count*10*w + org_bonus + len(ent['urls'])*1.5)
records=load_records(); by_url={}
for r in records:
    if r.get('url'): by_url.setdefault(r['url'], r)
records=list(by_url.values())
ents={}
for r in records:
    name,plat,role=author_key(r); key=(name,plat)
    e=ents.setdefault(key, {'name':name,'platforms':set(),'role':role,'records':[],'urls':set(),'categories':Counter(),'time_slices':Counter(),'works':[]})
    e['platforms'].add(plat or r.get('platform','unknown')); e['records'].append(r); e['urls'].add(r.get('url',''))
    e['categories'][r.get('category','unknown')]+=1; e['time_slices'][r.get('time_slice','unknown')]+=1
    if len(e['works'])<5: e['works'].append({'title':r.get('name',''), 'url':r.get('url','')})
profiles=[]
for e in ents.values():
    score=infl_score(e)
    q=f"{e['name']} AI agent X LinkedIn GitHub"
    profiles.append({'name':e['name'],'influence_score':score,'source_count':len(e['records']),'platforms':sorted(e['platforms']),'role':e['role'],'domains':[k for k,_ in e['categories'].most_common(5)],'time_slices':[k for k,_ in e['time_slices'].most_common(5)],'representative_works':e['works'],'x_twitter':'unknown_pending_external_verification','linkedin':'unknown_pending_external_verification','github':'unknown_pending_external_verification','anysearch_query':q,'enrichment_note':'AnySearch anonymous quota exhausted; live X/LinkedIn/GitHub profile lookup not completed in this pass.'})
profiles=sorted(profiles,key=lambda x:(-x['influence_score'],-x['source_count'],x['name']))[:50]
out={'generated_at':now,'anysearch_status':'anonymous quota exhausted; auto-generated key was not saved or used without approval','raw_blog_json_files':len(list((ROOT/'raw-blogs').glob('*.json'))),'deduplicated_blog_records_by_url':len(records),'unique_author_or_source_entities':len(ents),'profiles':profiles}
(OUT/'blog-author-profiles.json').write_text(json.dumps(out,ensure_ascii=False,indent=2),encoding='utf-8')
lines=["# Blog Author Influence Profiles — Top 50 / 博客作者影响力画像 Top 50",'',f"- content_timestamp: 2026-05-21",f"- regenerated_at: {now}",f"- raw_blog_json_files: {out['raw_blog_json_files']}",f"- deduplicated_blog_records_by_url: {out['deduplicated_blog_records_by_url']}",f"- unique_author_or_source_entities: {out['unique_author_or_source_entities']}","- enrichment_scope: Top 50 by raw-source frequency + platform influence","- anysearch_status: anonymous quota exhausted; external X/LinkedIn/GitHub enrichment not retried without user-approved API key","- output_json: `research/blog-author-profiles.json`",'',"## 方法说明 / Method",'',"先从 `raw-blogs/*.json` 的 `author_profile`、URL handle、平台名和内容中的 maker/team 线索抽取作者或机构实体；再按出现频次、平台影响力、代表作数量构建 Top 50 画像。由于 AnySearch 匿名额度已耗尽，本批先给出 raw-data grounded profiles；X/LinkedIn/GitHub 粉丝数标记为待外部验证，避免编造。",'',"## Top 50 作者/机构画像 / Profiles",'']
for i,p in enumerate(profiles,1):
    lines += [f"### {i}. {p['name']}",'',f"- Influence score: {p['influence_score']}",f"- Source count / 去重文章数: {p['source_count']}",f"- Platforms / 平台: {', '.join(p['platforms'])}",f"- Role/company / 职位机构: {p['role']}",f"- Domains / 领域: {', '.join(p['domains'])}",f"- Time slices / 时间切片: {', '.join(p['time_slices'])}","- X/Twitter followers: unknown_pending_external_verification","- LinkedIn followers: unknown_pending_external_verification","- GitHub impact: unknown_pending_external_verification",f"- AnySearch query to run / 待执行查询: `{p['anysearch_query']}`",'',"Representative works / 代表作:"]
    for w in p['representative_works']:
        lines.append(f"- [{(w['title'] or w['url'])[:140]}]({w['url']})")
    lines.append('')
(OUT/'blog-author-profiles.md').write_text('\n'.join(lines),encoding='utf-8')
print('wrote profiles',len(profiles),'records',len(records),'entities',len(ents))
