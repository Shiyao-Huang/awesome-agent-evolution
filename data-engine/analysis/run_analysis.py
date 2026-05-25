#!/usr/bin/env python3
import json,math,os,sys
from datetime import datetime,timezone
def load_json(p):
    if not os.path.exists(p):return None
    try:
        with open(p,"r",encoding="utf-8") as f:return json.load(f)
    except:return None
def save_json(p,d):
    os.makedirs(os.path.dirname(p),exist_ok=True)
    with open(p,"w",encoding="utf-8") as f:json.dump(d,f,indent=2,ensure_ascii=False)
def discover(base):
    projects={}
    for sd_name in["storage","storage-github","storage-social"]:
        sd=os.path.join(base,sd_name)
        if not os.path.isdir(sd):continue
        for e in os.listdir(sd):
            ep=os.path.join(sd,e)
            if os.path.isdir(ep) and e not in("analysis","propagation"):
                for f in os.listdir(ep):
                    if f.endswith(".json"):
                        d=load_json(os.path.join(ep,f))
                        if d:projects.setdefault(f.replace(".json",""),{})[e]=d
            elif e.endswith(".json"):
                n=e.replace(".json","");nm=n[:-6] if n.endswith("_stats") else n
                parts=nm.split("_",1);proj=parts[1] if len(parts)==2 else nm
                d=load_json(ep)
                if d:projects.setdefault(proj,{})[e]=d
    return projects
def score(name,src):
    sc,info={},{}
    for k,v in src.items():
        if"_stats"in k and isinstance(v,dict):
            d=v.get("data",v);stars=d.get("stars",0)
            sc["github"]=min(25,(math.log1p(stars)/math.log1p(200000))*25)
            info["github"]={"stars":stars,"forks":d.get("forks",0)}
            break
    raw=sum(sc.values());mx=sum({"github":25}.get(k,0)for k in sc)
    comp=round(raw/mx*100,1)if mx>0 else 0
    cls="viral"if comp>=65 else"steady"if comp>=45 else"organic"
    return{"project":name,"composite_score":comp,"classification":cls,"platforms":info,"data_sources":list(src.keys())}
def main():
    base=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    projects=discover(base)
    if not projects:print("No data");return
    print(f"Discovered {len(projects)} projects")
    scores=sorted([score(n,s)for n,s in projects.items()],key=lambda x:x["composite_score"],reverse=True)
    od=os.path.join(base,"storage","analysis")
    save_json(os.path.join(od,"hype_scores.json"),{"generated_at":datetime.now(timezone.utc).isoformat(),"total":len(scores),"scores":scores})
    for s in scores[:15]:
        st=s.get("platforms",{}).get("github",{}).get("stars","")
        e=f" {st:,}⭐"if st else""
        print(f"  {s['project']:<25s} {s['composite_score']:>5} {s['classification']}{e}")
    print(f"[hype] {len(scores)} projects")
if __name__=="__main__":main()
