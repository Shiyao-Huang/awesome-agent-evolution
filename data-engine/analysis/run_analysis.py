#!/usr/bin/env python3
"""Unified analysis pipeline — scans storage/, storage-github/, storage-social/."""
import json,math,os,sys
from datetime import datetime,timezone
from collections import Counter
def load_json(p):
    if not os.path.exists(p):return None
    try:
        with open(p,"r",encoding="utf-8") as f:return json.load(f)
    except:return None
def save_json(p,d):
    os.makedirs(os.path.dirname(p),exist_ok=True)
    with open(p,"w",encoding="utf-8") as f:json.dump(d,f,indent=2,ensure_ascii=False)
def parse_date(s):
    if not s:return""
    if isinstance(s,(int,float)):return datetime.utcfromtimestamp(s).strftime("%Y-%m-%dT%H:%M:%SZ")
    try:return datetime.fromisoformat(str(s).replace("Z","+00:00")).strftime("%Y-%m-%dT%H:%M:%SZ")
    except:return str(s)[:19]
def flatten(data):
    if not data:return[]
    r=data.get("results",{})
    if isinstance(r,dict):return[v for vals in r.values() if isinstance(vals,list) for v in vals]
    return r if isinstance(r,list) else[]
def discover(base_dir):
    """Scan storage/, storage-github/, storage-social/ for project data."""
    projects={}
    storage_dirs=["storage","storage-github","storage-social"]
    for sd_name in storage_dirs:
        sd=os.path.join(base_dir,sd_name)
        if not os.path.isdir(sd):continue
        for e in os.listdir(sd):
            ep=os.path.join(sd,e)
            if os.path.isdir(ep) and e not in("analysis","propagation"):
                for f in os.listdir(ep):
                    if f.endswith(".json"):
                        d=load_json(os.path.join(ep,f))
                        if d:projects.setdefault(f.replace(".json",""),{})[f"{sd_name}/{e}"]=d
            elif e.endswith(".json"):
                n=e.replace(".json","")
                nm=n[:-6] if n.endswith("_stats") else n
                parts=nm.split("_",1)
                proj=parts[1] if len(parts)==2 else nm
                d=load_json(ep)
                if d:projects.setdefault(proj,{})[f"{sd_name}/{e}"]=d
    return projects
def score(name,src):
    sc,info={},{}
    for k,v in src.items():
        if"_stats"in k and isinstance(v,dict):
            d=v.get("data",v)
            stars=d.get("stars",0)
            sc["github"]=min(25,(math.log1p(stars)/math.log1p(200000))*25)
            info["github"]={"stars":stars,"forks":d.get("forks",0),"repo":v.get("metadata",{}).get("repo","")}
            break
    for pl in["hn","reddit"]:
        items=flatten(src.get(pl))
        if items:
            key="points"if pl=="hn"else"score"
            vals=[i.get(key,i.get("ups",0))for i in items];avg=sum(vals)/len(vals)
            w=35 if pl=="hn"else 25
            sc[pl]=min(w,(math.log1p(avg)/math.log1p(1000 if pl=="hn"else 500))*w)
            info[pl]={"items":len(items),"avg":round(avg,1)}
    raw=sum(sc.values())
    mx=sum({"hn":35,"reddit":25,"github":25,"scholar":15}.get(k,0)for k in sc)
    comp=round(raw/mx*100,1)if mx>0 else 0
    cls="viral"if comp>=65 else"steady"if comp>=45 else"organic"
    return{"project":name,"composite_score":comp,"classification":cls,"platforms":info,"data_sources":list(src.keys())}
def report(scores,od):
    now=datetime.now(timezone.utc);ds=now.strftime("%Y-%m-%d")
    lines=[f"# Data Engine Daily Report\n",f"> {now.isoformat()}\n\n## Hype Scores ({len(scores)} projects)\n"]
    lines.append("| # | Project | Score | Class | Stars |")
    lines.append("|---|---------|-------|-------|-------|")
    for i,s in enumerate(scores[:25],1):
        st=s.get("platforms",{}).get("github",{}).get("stars","-")
        lines.append(f"| {i} | {s['project']} | {s['composite_score']} | {s['classification']} | {st} |")
    lines.append(f"\n---\n*{ds}*")
    p=os.path.join(od,f"daily_report_{ds}.md");os.makedirs(od,exist_ok=True)
    with open(p,"w",encoding="utf-8") as f:f.write("\n".join(lines))
    print(f"[report] -> {p}")
def main():
    base=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    sd=sys.argv[1]if len(sys.argv)>1 else os.path.join(base,"storage")
    # If given a specific storage dir, use its parent as base for multi-scan
    if os.path.basename(sd)=="storage":base=os.path.dirname(sd)
    od=os.path.join(base,"storage","analysis")
    projects=discover(base)
    if not projects:print(f"No data found");return
    print(f"Discovered {len(projects)} projects")
    scores=sorted([score(n,s)for n,s in projects.items()],key=lambda x:x["composite_score"],reverse=True)
    save_json(os.path.join(od,"hype_scores.json"),{"generated_at":datetime.now(timezone.utc).isoformat(),"total":len(scores),"scores":scores})
    print(f"[hype] {len(scores)}")
    for s in scores[:10]:
        st=s.get("platforms",{}).get("github",{}).get("stars","")
        e=f" {st:,}⭐"if st else""
        print(f"  {s['project']:<25s} {s['composite_score']:>5} {s['classification']}{e}")
    report(scores,od)
if __name__=="__main__":main()
