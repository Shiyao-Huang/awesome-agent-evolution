#!/usr/bin/env python3
"""Unified analysis pipeline — handles GitHub stats flat files + subdirectory data."""
import json,math,os,sys
from datetime import datetime,timezone,timedelta
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
def flatten(data,platform):
    if not data:return[]
    r=data.get("results",{})
    if isinstance(r,dict):return[v for vals in r.values() if isinstance(vals,list) for v in vals]
    return r if isinstance(r,list) else[]
def discover(sd):
    p={}
    for e in os.listdir(sd):
        ep=os.path.join(sd,e)
        if os.path.isdir(ep) and e not in("analysis","propagation"):
            for f in os.listdir(ep):
                if f.endswith(".json"):
                    d=load_json(os.path.join(ep,f))
                    if d:p.setdefault(f.replace(".json",""),{})[e]=d
        elif e.endswith(".json"):
            n=e.replace(".json","")
            nm=n[:-6] if n.endswith("_stats") else n
            parts=nm.split("_",1)
            proj=parts[1] if len(parts)==2 else nm
            d=load_json(ep)
            if d:p.setdefault(proj,{})[e]=d
    return p
def score(name,src):
    sc,info={},{}
    for k,v in src.items():
        if "_stats" in k and isinstance(v,dict):
            d=v.get("data",v)
            stars=d.get("stars",0)
            sc["github"]=min(25,(math.log1p(stars)/math.log1p(200000))*25)
            info["github"]={"stars":stars,"forks":d.get("forks",0),"repo":v.get("metadata",{}).get("repo","")}
            break
    hn=flatten(src.get("hn"),"hn")
    if hn:
        pts=[i.get("points",0)for i in hn];avg=sum(pts)/len(pts)
        sc["hn"]=min(35,(math.log1p(avg)/math.log1p(1000))*35)
        info["hn"]={"items":len(hn),"avg_pts":round(avg,1)}
    rd=flatten(src.get("reddit"),"reddit")
    if rd:
        ups=[i.get("score",i.get("ups",0))for i in rd];avg=sum(ups)/len(ups)
        sc["reddit"]=min(25,(math.log1p(avg)/math.log1p(500))*25)
        info["reddit"]={"items":len(rd),"avg_ups":round(avg,1)}
    raw=sum(sc.values())
    mx=sum({"hn":35,"reddit":25,"github":25,"scholar":15}.get(k,0)for k in sc)
    comp=round(raw/mx*100,1)if mx>0 else 0
    cls="viral"if comp>=65 else"steady"if comp>=45 else"organic"
    return{"project":name,"composite_score":comp,"classification":cls,
           "platforms":info,"data_sources":list(src.keys())}
def anomalies(name,src):
    aa=[]
    for pl in["hn","reddit"]:
        items=flatten(src.get(pl),pl)
        if not items:continue
        titles=[i.get("title","").strip().lower()for i in items if i.get("title")]
        tc=Counter(titles);dups=sum(1 for c in tc.values()if c>1)
        if dups>=2:aa.append({"check":"duplicate_content","detail":f"{dups} dup on {pl}"})
    return{"project":name,"anomaly_count":len(aa),"anomalies":aa,"status":"flagged"if aa else"clean"}
def chain(name,src):
    tl,pl={},{}
    for pl_name in["hn","reddit"]:
        items=flatten(src.get(pl_name),pl_name)
        for i in items:tl.setdefault("events",[]).append({"date":parse_date(i.get("created_at"if pl_name=="hn"else"created_utc",i.get("created_at"))),"platform":pl_name})
        if items:pl[pl_name]=len(items)
    for k,v in src.items():
        if"_stats"in k and isinstance(v,dict):
            d=v.get("data",v);pl["github"]=1
            tl.setdefault("events",[]).append({"date":parse_date(d.get("created_at","")),"platform":"github","title":f"Stars: {d.get('stars',0):,}"})
            break
    events=tl.get("events",[]);events.sort(key=lambda e:e.get("date",""))
    return{"project":name,"timeline":events,"platforms":pl,"total_events":len(events)}
def report(scores,anoms,chains,od):
    now=datetime.now(timezone.utc);ds=now.strftime("%Y-%m-%d")
    lines=[f"# Data Engine Daily Report\n",f"> {now.isoformat()}\n## Hype Scores\n"]
    lines.append("| # | Project | Score | Class | Stars |")
    lines.append("|---|---------|-------|-------|-------|")
    for i,s in enumerate(scores[:20],1):
        st=s.get("platforms",{}).get("github",{}).get("stars","-")
        lines.append(f"| {i} | {s['project']} | {s['composite_score']} | {s['classification']} | {st} |")
    fl=[a for a in anoms if a["status"]=="flagged"]
    lines.append(f"\n## Anomalies\n\nFlagged: {len(fl)}/{len(anoms)}\n")
    mu=[c for c in chains if len(c["platforms"])>1]
    lines.append(f"\n## Propagation\n\nMulti-platform: {len(mu)}/{len(chains)}\n")
    lines.append(f"\n---\n*{ds}*")
    p=os.path.join(od,f"daily_report_{ds}.md");os.makedirs(od,exist_ok=True)
    with open(p,"w",encoding="utf-8") as f:f.write("\n".join(lines))
    print(f"\n[report] -> {p}")
def main():
    sd=os.path.abspath(sys.argv[1]if len(sys.argv)>1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),"storage"))
    od=os.path.join(sd,"analysis");pd=os.path.join(sd,"propagation")
    projects=discover(sd)
    if not projects:print(f"No data in {sd}");return
    print(f"Discovered {len(projects)} projects")
    scores=sorted([score(n,s)for n,s in projects.items()],key=lambda x:x["composite_score"],reverse=True)
    save_json(os.path.join(od,"hype_scores.json"),{"generated_at":datetime.now(timezone.utc).isoformat(),"total":len(scores),"scores":scores})
    print(f"[hype] {len(scores)}")
    for s in scores[:10]:
        st=s.get("platforms",{}).get("github",{}).get("stars","")
        e=f" ⭐{st}"if st else""
        print(f"  {s['project']:<25s} {s['composite_score']:>5} {s['classification']}{e}")
    anoms=sorted([anomalies(n,s)for n,s in projects.items()],key=lambda x:x["anomaly_count"],reverse=True)
    save_json(os.path.join(od,"anomaly_report.json"),{"generated_at":datetime.now(timezone.utc).isoformat(),"total":len(anoms),"results":anoms})
    print(f"[anomaly] {sum(1 for a in anoms if a['status']=='flagged')}/{len(anoms)} flagged")
    chains=sorted([chain(n,s)for n,s in projects.items()],key=lambda x:x["total_events"],reverse=True)
    save_json(os.path.join(pd,"propagation_chains.json"),{"generated_at":datetime.now(timezone.utc).isoformat(),"total":len(chains),"chains":chains})
    print(f"[propagation] {len(chains)}")
    report(scores,anoms,chains,od)
if __name__=="__main__":main()
