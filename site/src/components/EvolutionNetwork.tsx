import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type NodeItem = {
  label: string;
  meta: string;
  x: number;
  y: number;
};

const nodes: NodeItem[] = [
  { label: 'Raw', meta: '519 captures', x: 18, y: 24 },
  { label: 'Processed', meta: 'analysis', x: 42, y: 18 },
  { label: 'Work', meta: 'paper/site', x: 66, y: 28 },
  { label: 'Results', meta: 'reports', x: 82, y: 52 },
  { label: 'Benchmarks', meta: 'eval', x: 34, y: 58 },
  { label: 'Model cards', meta: 'teaching', x: 58, y: 62 }
];

const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
  [5, 3]
];

export default function EvolutionNetwork() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.network-node',
        { opacity: 0, y: 5 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.network-edge',
        { strokeDashoffset: 80, opacity: 0.18 },
        { strokeDashoffset: 0, opacity: 1, duration: 1.2, stagger: 0.05, ease: 'power2.out' }
      );
      gsap.to('.network-caret.active', {
        opacity: 0.25,
        duration: 0.72,
        repeat: -1,
        yoyo: true,
        ease: 'steps(1)'
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="evolution-network" ref={rootRef} aria-label="Self Evolve research pipeline mockup">
      <svg viewBox="0 0 100 78" role="img">
        <title>Self Evolve evidence pipeline</title>
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
              pathLength="80"
            />
          );
        })}
        <rect className="network-core" x="33" y="32" width="34" height="14" rx="2.7" />
        <line className="network-caret active" x1="37" y1="35" x2="37" y2="43" />
        <text className="network-core-text" x="51" y="38.2">
          self evolve index
        </text>
        <text className="network-core-text small" x="51" y="42.6">
          raw to evidence to public site
        </text>
        {nodes.map((node, index) => (
          <g className="network-node" key={node.label} transform={`translate(${node.x} ${node.y})`}>
            <rect className="network-card" x="-9.5" y="-6.6" width="19" height="13.2" rx="2.2" />
            <line
              className={`network-caret ${index === 2 ? 'active' : 'ghost'}`}
              x1="-6.4"
              y1="-3.9"
              x2="-6.4"
              y2="3.9"
            />
            <text x="1.5" y="-0.8">
              {node.label}
            </text>
            <text className="network-meta" x="1.5" y="3.8">
              {node.meta}
            </text>
          </g>
        ))}
      </svg>
      <div className="network-caption">
        <strong>Evidence chain first</strong>
        <span>raw, processed analysis, work artifacts, public results</span>
      </div>
    </div>
  );
}
