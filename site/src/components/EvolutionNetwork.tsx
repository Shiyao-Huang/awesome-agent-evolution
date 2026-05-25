import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

type NetworkNode = {
  id: string;
  label: string;
  role: string;
  x: number;
  y: number;
  size: number;
  tone: 'mint' | 'violet' | 'amber' | 'rose';
};

const nodes: NetworkNode[] = [
  { id: 'core', label: 'Self Evolve', role: 'graph hub', x: 330, y: 258, size: 30, tone: 'mint' },
  { id: 'memory', label: 'Memory', role: 'experience store', x: 188, y: 154, size: 18, tone: 'violet' },
  { id: 'eval', label: 'Evaluator', role: 'fitness signal', x: 468, y: 142, size: 22, tone: 'amber' },
  { id: 'code', label: 'Code Repair', role: 'self modification', x: 510, y: 338, size: 17, tone: 'mint' },
  { id: 'papers', label: 'Papers', role: 'evidence layer', x: 154, y: 354, size: 20, tone: 'rose' },
  { id: 'agents', label: 'Agents', role: 'runtime systems', x: 330, y: 426, size: 16, tone: 'violet' },
  { id: 'bench', label: 'Benchmarks', role: 'regression gates', x: 326, y: 88, size: 15, tone: 'amber' },
  { id: 'graph', label: 'Knowledge Graph', role: 'relations', x: 88, y: 246, size: 14, tone: 'mint' }
];

const links = [
  ['core', 'memory'],
  ['core', 'eval'],
  ['core', 'code'],
  ['core', 'papers'],
  ['core', 'agents'],
  ['core', 'bench'],
  ['core', 'graph'],
  ['memory', 'papers'],
  ['eval', 'bench'],
  ['eval', 'code'],
  ['agents', 'code'],
  ['graph', 'papers']
] as const;

const toneColor = {
  mint: '#7cf7d4',
  violet: '#9f7cff',
  amber: '#ffcf7c',
  rose: '#ff7cae'
};

export default function EvolutionNetwork() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState('core');
  const selected = useMemo(() => nodes.find((node) => node.id === selectedId) || nodes[0], [selectedId]);
  const byId = useMemo(() => new Map(nodes.map((node) => [node.id, node])), []);

  useEffect(() => {
    if (!rootRef.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.network-link',
        { strokeDashoffset: 46, opacity: 0 },
        { strokeDashoffset: 0, opacity: 0.72, duration: 1.4, stagger: 0.05, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.network-node-group',
        { scale: 0.55, opacity: 0, transformOrigin: 'center center' },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.06, ease: 'back.out(1.8)' }
      );
      gsap.to('.network-link', {
        strokeDashoffset: -92,
        duration: 8,
        repeat: -1,
        ease: 'none'
      });
      gsap.to('.network-node-group', {
        y: (_, target) => (target.dataset.float === 'up' ? -8 : 8),
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
        ease: 'sine.inOut'
      });
      gsap.to('.network-core-ring', {
        scale: 1.18,
        opacity: 0.18,
        duration: 1.9,
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center center',
        ease: 'sine.inOut'
      });
      gsap.to('.signal-bar', {
        scaleX: 0.22,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        transformOrigin: 'left center',
        ease: 'power1.inOut'
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="network-stage" ref={rootRef}>
      <div className="network-topline">
        <span>Live mechanism map</span>
        <span>{nodes.length} nodes / {links.length} edges</span>
      </div>
      <svg className="network-svg" viewBox="0 0 640 520" role="img" aria-label="Animated Self Evolve knowledge graph">
        <defs>
          <filter id="network-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="network-core-fill">
            <stop offset="0%" stopColor="#f6f8ff" />
            <stop offset="42%" stopColor="#7cf7d4" />
            <stop offset="100%" stopColor="#9f7cff" />
          </radialGradient>
        </defs>

        {links.map(([sourceId, targetId]) => {
          const source = byId.get(sourceId);
          const target = byId.get(targetId);
          if (!source || !target) return null;
          const active = sourceId === selectedId || targetId === selectedId;
          return (
            <line
              className="network-link"
              key={`${sourceId}-${targetId}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={active ? toneColor[selected.tone] : 'rgba(246,248,255,.24)'}
              strokeWidth={active ? 2.2 : 1.1}
              strokeDasharray="9 14"
            />
          );
        })}

        {nodes.map((node, index) => {
          const active = node.id === selectedId;
          const isCore = node.id === 'core';
          return (
            <g
              key={node.id}
              className="network-node-group"
              data-float={index % 2 === 0 ? 'up' : 'down'}
              transform={`translate(${node.x} ${node.y})`}
              onClick={() => setSelectedId(node.id)}
              onMouseEnter={() => setSelectedId(node.id)}
              tabIndex={0}
              role="button"
              aria-label={`${node.label}: ${node.role}`}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') setSelectedId(node.id);
              }}
            >
              {isCore && <circle className="network-core-ring" r="66" fill="none" stroke="#7cf7d4" strokeWidth="1.5" />}
              <circle
                r={node.size + 12}
                fill={isCore ? 'url(#network-core-fill)' : toneColor[node.tone]}
                opacity={active ? 0.28 : 0.12}
                filter={active ? 'url(#network-glow)' : undefined}
              />
              <circle
                r={node.size}
                fill={isCore ? 'url(#network-core-fill)' : '#090b1e'}
                stroke={toneColor[node.tone]}
                strokeWidth={active ? 3 : 1.5}
                filter={active ? 'url(#network-glow)' : undefined}
              />
              <text y={node.size + 25} textAnchor="middle" className={active ? 'network-label active' : 'network-label'}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="network-card">
        <div>
          <span className="network-card-kicker">Selected</span>
          <h2>{selected.label}</h2>
          <p>{selected.role}</p>
        </div>
        <div className="signal-stack" aria-hidden="true">
          <span className="signal-bar" />
          <span className="signal-bar" />
          <span className="signal-bar" />
        </div>
      </div>
    </div>
  );
}

