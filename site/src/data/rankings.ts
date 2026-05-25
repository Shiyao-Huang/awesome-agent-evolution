export interface RankingProfile {
  system_id: string;
  system_name: string;
  dimensions: Record<string, number>;
  metadata: {
    maturity_level: number;
    tier: string;
    composite_score: number;
    confidence_factor: number;
  };
  summary: string;
}

export const tierColors: Record<string, string> = {
  'A': '#FF5B00',
  'B+': '#FF8C42',
  'B': '#007AFF',
  'B-': '#8E8E93'
};

export const maturityLabels: Record<number, string> = {
  2: 'Prompt/Output Refinement',
  3: 'Memory/Skill Accumulation',
  4: 'Arch/Code Self-Modification'
};

const rawData: RankingProfile[] = [
  { system_id: "alphaevolve", system_name: "AlphaEvolve", dimensions: {D1:9.5,D2:8.0,D3:7.5,D4:7.0,D5:4.0,U1:2.0,U2:8.0,U3:9.0,U4:8.5}, metadata: {maturity_level:4,tier:"A",composite_score:7.06,confidence_factor:0.80}, summary: "56yr matrix multiplication record; Borg 0.7% compute recovery; 75% SOTA recovery on 50+ math problems" },
  { system_id: "dgm", system_name: "Darwin Godel Machine (DGM)", dimensions: {D1:9.0,D2:7.5,D3:7.0,D4:6.0,D5:5.0,U1:4.0,U2:7.0,U3:8.5,U4:7.0}, metadata: {maturity_level:4,tier:"A",composite_score:6.78,confidence_factor:0.90}, summary: "SWE-bench 20%→50%; Polyglot 14.2%→30.7%; archive-based agent evolution with lineage" },
  { system_id: "funsearch", system_name: "FunSearch", dimensions: {D1:8.5,D2:7.5,D3:6.0,D4:6.5,D5:5.0,U1:3.0,U2:7.0,U3:8.5,U4:7.0}, metadata: {maturity_level:4,tier:"A",composite_score:6.56,confidence_factor:0.85}, summary: "New cap-set constructions; improved bin-packing heuristics; Nature publication" },
  { system_id: "adas", system_name: "ADAS", dimensions: {D1:7.0,D2:7.5,D3:7.0,D4:5.5,D5:5.5,U1:4.5,U2:8.0,U3:8.0,U4:6.5}, metadata: {maturity_level:4,tier:"A",composite_score:6.50,confidence_factor:0.85}, summary: "Discovers agent architectures automatically; cross-domain transfer of discovered designs" },
  { system_id: "openevolve", system_name: "OpenEvolve", dimensions: {D1:7.5,D2:7.0,D3:6.5,D4:6.0,D5:6.0,U1:6.5,U2:7.5,U3:7.0,U4:6.0}, metadata: {maturity_level:4,tier:"B+",composite_score:6.42,confidence_factor:0.90}, summary: "Open-source AlphaEvolve implementation; evolutionary program search; accessible to researchers" },
  { system_id: "reflexion", system_name: "Reflexion", dimensions: {D1:8.0,D2:6.5,D3:5.0,D4:5.0,D5:7.0,U1:7.0,U2:6.0,U3:7.5,U4:6.5}, metadata: {maturity_level:2,tier:"B+",composite_score:6.39,confidence_factor:0.95}, summary: "HumanEval 91% pass@1 (GPT-3.5); ALFWorld 97%; verbal reflection memory" },
  { system_id: "absolute-zero", system_name: "Absolute Zero Reasoners", dimensions: {D1:7.0,D2:6.5,D3:7.0,D4:5.0,D5:6.0,U1:4.5,U2:7.5,U3:7.5,U4:6.0}, metadata: {maturity_level:2,tier:"B",composite_score:6.33,confidence_factor:0.85}, summary: "Self-play without external data; code→math transfer" },
  { system_id: "dspy", system_name: "DSPy", dimensions: {D1:6.0,D2:7.0,D3:6.5,D4:5.0,D5:6.5,U1:8.0,U2:7.0,U3:7.5,U4:6.0}, metadata: {maturity_level:2,tier:"B",composite_score:6.15,confidence_factor:0.95}, summary: "Declarative prompt optimization; widest adoption" },
  { system_id: "self-refine", system_name: "Self-Refine", dimensions: {D1:6.0,D2:6.0,D3:4.0,D4:5.0,D5:8.0,U1:8.5,U2:5.0,U3:6.5,U4:5.0}, metadata: {maturity_level:2,tier:"B",composite_score:6.00,confidence_factor:0.95}, summary: "Math 56→67%; simplest self-evolution technique" },
  { system_id: "se-agent", system_name: "SE-Agent", dimensions: {D1:6.5,D2:6.0,D3:5.5,D4:5.5,D5:6.0,U1:5.5,U2:6.5,U3:7.0,U4:5.5}, metadata: {maturity_level:3,tier:"B",composite_score:5.96,confidence_factor:0.80}, summary: "Code agent self-evolution via execution feedback" },
  { system_id: "reveal", system_name: "ReVeal", dimensions: {D1:6.5,D2:7.5,D3:5.5,D4:6.0,D5:5.0,U1:4.0,U2:6.5,U3:8.0,U4:6.0}, metadata: {maturity_level:2,tier:"B",composite_score:5.89,confidence_factor:0.85}, summary: "LiveCodeBench 36.9→42.4; verification co-evolution" },
  { system_id: "voyager", system_name: "Voyager", dimensions: {D1:7.5,D2:6.0,D3:4.5,D4:5.5,D5:6.5,U1:5.0,U2:6.5,U3:7.0,U4:5.5}, metadata: {maturity_level:3,tier:"B",composite_score:5.78,confidence_factor:0.90}, summary: "3.3x unique items; skill library accumulation" },
  { system_id: "gptswarm", system_name: "GPTSwarm", dimensions: {D1:6.0,D2:6.0,D3:5.0,D4:5.0,D5:5.5,U1:5.5,U2:6.0,U3:7.0,U4:5.5}, metadata: {maturity_level:3,tier:"B",composite_score:5.72,confidence_factor:0.85}, summary: "RL + prompt optimization swarm" },
  { system_id: "a-evolve", system_name: "A-Evolve", dimensions: {D1:6.0,D2:5.5,D3:5.0,D4:5.0,D5:5.5,U1:5.0,U2:6.5,U3:6.5,U4:5.0}, metadata: {maturity_level:3,tier:"B",composite_score:5.61,confidence_factor:0.80}, summary: "Generic self-improving agent infrastructure" },
  { system_id: "evoskill", system_name: "EvoSkill", dimensions: {D1:5.5,D2:5.5,D3:5.0,D4:5.0,D5:5.5,U1:5.5,U2:6.0,U3:6.0,U4:5.5}, metadata: {maturity_level:3,tier:"B",composite_score:5.56,confidence_factor:0.80}, summary: "Failure trajectories → reusable skills" },
  { system_id: "skillrl", system_name: "SkillRL", dimensions: {D1:5.5,D2:5.5,D3:5.0,D4:5.0,D5:5.0,U1:5.0,U2:6.0,U3:6.5,U4:5.0}, metadata: {maturity_level:3,tier:"B-",composite_score:5.44,confidence_factor:0.80}, summary: "Trajectory → skill library + RL co-evolution" },
  { system_id: "webrl", system_name: "WebRL", dimensions: {D1:6.0,D2:5.5,D3:4.5,D4:5.0,D5:5.5,U1:5.0,U2:6.0,U3:6.5,U4:5.0}, metadata: {maturity_level:3,tier:"B-",composite_score:5.39,confidence_factor:0.80}, summary: "Self-evolving web agent curriculum RL" },
  { system_id: "coral", system_name: "CORAL", dimensions: {D1:5.5,D2:5.0,D3:5.0,D4:5.5,D5:5.0,U1:4.5,U2:6.5,U3:6.0,U4:5.0}, metadata: {maturity_level:4,tier:"B-",composite_score:5.33,confidence_factor:0.75}, summary: "Multi-agent open-ended discovery infrastructure" },
  { system_id: "autoresearchclaw", system_name: "AutoResearchClaw", dimensions: {D1:5.0,D2:4.5,D3:4.5,D4:4.5,D5:5.0,U1:6.0,U2:6.0,U3:5.5,U4:6.0}, metadata: {maturity_level:3,tier:"B-",composite_score:5.28,confidence_factor:0.75}, summary: "Research idea → paper pipeline; multi-agent debate" },
  { system_id: "agentic-harness", system_name: "Agentic Harness Eng.", dimensions: {D1:5.5,D2:5.0,D3:4.5,D4:5.0,D5:5.0,U1:5.0,U2:6.0,U3:6.0,U4:5.0}, metadata: {maturity_level:3,tier:"B-",composite_score:5.22,confidence_factor:0.75}, summary: "Observability-driven harness evolution" }
];

export const profiles: RankingProfile[] = rawData;
export const rankedProfiles = [...profiles].sort((a, b) => b.metadata.composite_score - a.metadata.composite_score);
