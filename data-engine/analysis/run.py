#!/usr/bin/env python3
import json,math,os,sys
from datetime import datetime,timezone
def lj(p):
    if not os.path.exists(p):return None
    try:
        with open(p) as f:return json.load(f)
    except:return None
def sj(p,d):
    os.makedirs(os.path.dirname(p),exist_ok=True)
    with open(p,"w") as f:json.dump(d,f,indent=2,ensure_ascii=False)
def disc(b):
    P={}
    for s in["storage","storage-github","storage-social"]:
        sd=os.path.join(b,s)
        if not os.path.isdir(sd):continue
        for e in os.listdir(sd):
            ep=os.path.join(sd,e)
            if os.path.isdir(ep) and e not in("analysis","propagation"):
                for f in os.listdir(ep):
                    if f.endswith(".json"):
                        d=lj(os.path.join(ep,f))
                        if d:P.setdefault(f[:-5],{})[e]=d
            elif e.endswith(".json"):
                n=e[:-5];nm=n[:-6]if n.endswith("_stats")else n;p=nm.split("_",1)
                d=lj(ep)
                if d:P.setdefault(p[1]if len(p)==2 else nm,{})[e]=d
    return P
def sc(n,S):
    s,i={},{}
    for k,v in S.items():
        if"_stats"in k and isinstance(v,dict):
            d=v.get("data",v);st=d.get("stars",0)
            s["gh"]=min(25,(math.log1p(st)/math.log1p(200000))*25)
            i["gh"]={"stars":st};break
    r=sum(s.values());m=sum({"gh":25}.get(k,0)for k in s)
    c=round(r/m*100,1)if m>0 else 0
    cl="viral"if c>=65 else"steady"if c>=45 else"organic"
    return{"project":n,"score":c,"class":cl,"info":i}
def main():
    b=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    P=disc(b)
    if not P:print("No data");return
    r=sorted([sc(n,s)for n,s in P.items()],key=lambda x:x["score"],reverse=True)
    sj(os.path.join(b,"storage","analysis","scores.json"),{"t":len(r),"r":r,"ts":datetime.now(timezone.utc).isoformat()})
    print(f"{len(r)} projects")
    for s in r[:10]:
        st=s.get("info",{}).get("gh",{}).get("stars","")
        e=f" {st:,}⭐"if st else""
        print(f"  {s['project']:<25s} {s['score']:>5} {s['class']}{e}")
if __name__=="__main__":main()
