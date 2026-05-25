import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type NodeItem = {
  label: string;
  x: number;
  y: number;
  kind: 'paper' | 'project' | 'memory' | 'eval' | 'safety';
};

const nodes: NodeItem[] = [
  { label: 'Papers', x: 18, y: 22, kind: 'paper' },
  { label: 'Harness', x: 56, y: 16, kind: 'project' },
  { label: 'Memory', x: 82, y: 36, kind: 'memory' },
  { label: 'Eval', x: 72, y: 72, kind: 'eval' },
  { label: 'Safety', x: 30, y: 76, kind: 'safety' },
  { label: 'Skills', x: 46, y: 48, kind: 'project' }
];

const edges = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 3],
  [0, 3],
  [1, 3],
  [2, 4]
];

export default function EvolutionNetwork() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.network-node',
        { opacity: 0, scale: 0.72 },
        { opacity: 1, scale: 1, duration: 0.7, stagger: 0.08, ease: 'back.out(1.5)' }
      );
      gsap.to('.network-node', {
        y: (index) => (index % 2 === 0 ? -8 : 8),
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.12
      });
      gsap.fromTo(
        '.network-edge',
        { strokeDashoffset: 160, opacity: 0.18 },
        { strokeDashoffset: 0, opacity: 0.72, duration: 1.6, stagger: 0.06, ease: 'power2.out' }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="evolution-network" ref={rootRef} aria-label="Self Evolve knowledge network">
      <svg viewBox="0 0 100 100" role="img">
        <defs>
          <radialGradient id="network-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7cf7d4" />
            <stop offset="55%" stopColor="#9f7cff" />
            <stop offset="100%" stopColor="#050615" />
          </radialGradient>
        </defs>
        {edges.map(([sourceIndex, targetIndex]) => {
          const source = nodes[sourceIndex];
          const target = nodes[targetIndex];
          return (
            <line
              className="network-edge"
              key={`${source.label}-${target.label}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              pathLength="160"
            />
          );
        })}
        <circle className="network-core" cx="50" cy="50" r="13" fill="url(#network-core)" />
        <text className="network-core-text" x="50" y="48">
          Observe
        </text>
        <text className="network-core-text small" x="50" y="54">
          Patch / Verify
        </text>
        {nodes.map((node) => (
          <g className={`network-node ${node.kind}`} key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <circle r="6.8" />
            <text y="13">{node.label}</text>
          </g>
        ))}
      </svg>
      <div className="network-caption">
        <strong>Full corpus graph</strong>
        <span>papers, repos, skills, memory, eval, safety</span>
      </div>
    </div>
  );
}
