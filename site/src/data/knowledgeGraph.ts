import { projects } from './projects';
import { featuredResearch, researchClusters } from './research';
import { curatedFrontierProjects } from './curatedFrontier';
import { generatedKnowledgeEdges, generatedKnowledgeNodes } from './generatedKnowledgeGraph';

export type KnowledgeNodeType = 'project' | 'paper' | 'concept' | 'cluster';

export type KnowledgeNode = {
  id: string;
  label: string;
  type: KnowledgeNodeType;
  url?: string;
  summary?: string;
  weight: number;
};

export type KnowledgeEdge = {
  source: string;
  target: string;
  type: 'uses' | 'belongs_to' | 'same_theme';
  label: string;
};

const encodeId = (prefix: string, value: string) =>
  `${prefix}:${encodeURIComponent(value.toLowerCase().trim().replace(/\s+/g, '-'))}`;

const nodes = new Map<string, KnowledgeNode>();
const edges: KnowledgeEdge[] = [];

const addNode = (node: KnowledgeNode) => {
  const existing = nodes.get(node.id);
  if (!existing || node.weight > existing.weight) nodes.set(node.id, node);
};

const addEdge = (edge: KnowledgeEdge) => {
  if (edge.source === edge.target) return;
  if (edges.some((item) => item.source === edge.source && item.target === edge.target && item.type === edge.type)) return;
  edges.push(edge);
};

const mergeNode = (node: KnowledgeNode) => addNode(node);
const mergeEdge = (edge: KnowledgeEdge) => addEdge(edge);

for (const cluster of researchClusters) {
  const clusterId = encodeId('cluster', cluster.title);
  addNode({
    id: clusterId,
    label: cluster.title,
    type: 'cluster',
    summary: cluster.summary,
    weight: 8
  });

  for (const item of cluster.items) {
    const conceptId = encodeId('concept', item);
    addNode({ id: conceptId, label: item, type: 'concept', summary: cluster.summary, weight: 3 });
    addEdge({ source: conceptId, target: clusterId, type: 'belongs_to', label: 'belongs to cluster' });
  }
}

for (const project of projects) {
  const projectId = encodeId('project', project.repo);
  addNode({
    id: projectId,
    label: project.name,
    type: 'project',
    url: project.url,
    summary: project.description,
    weight: Math.max(3, Math.min(10, Math.log10(Math.max(project.stars, 10)) * 2))
  });

  for (const tag of project.tags) {
    const conceptId = encodeId('concept', tag);
    addNode({ id: conceptId, label: tag, type: 'concept', summary: project.pattern, weight: 5 });
    addEdge({ source: projectId, target: conceptId, type: 'uses', label: 'uses mechanism' });
  }

  const categoryId = encodeId('concept', project.category);
  addNode({ id: categoryId, label: project.category, type: 'concept', summary: project.pattern, weight: 4 });
  addEdge({ source: projectId, target: categoryId, type: 'belongs_to', label: 'belongs to category' });
}

for (const project of curatedFrontierProjects) {
  const projectId = encodeId('project', project.repo);
  mergeNode({
    id: projectId,
    label: project.name,
    type: 'project',
    url: project.url,
    summary: `${project.role}: ${project.quality}${project.caution ? ` ${project.caution}` : ''}`,
    weight: Math.max(8, 12 - project.rank)
  });

  const roleId = encodeId('concept', project.role);
  mergeNode({ id: roleId, label: project.role, type: 'concept', summary: project.quality, weight: 7 });
  mergeEdge({ source: projectId, target: roleId, type: 'belongs_to', label: 'quality-ranked role' });

  for (const tag of project.tags) {
    const conceptId = encodeId('concept', tag);
    mergeNode({ id: conceptId, label: tag, type: 'concept', summary: project.quality, weight: 5 });
    mergeEdge({ source: projectId, target: conceptId, type: 'uses', label: 'frontier project signal' });
  }
}

for (const paper of featuredResearch) {
  const paperId = encodeId('paper', paper.slug || paper.title);
  addNode({
    id: paperId,
    label: paper.title,
    type: 'paper',
    url: paper.url,
    summary: paper.insight,
    weight: 5
  });

  if (paper.cluster) {
    const clusterId = encodeId('cluster', paper.cluster);
    addNode({ id: clusterId, label: paper.cluster, type: 'cluster', weight: 8 });
    addEdge({ source: paperId, target: clusterId, type: 'belongs_to', label: 'belongs to research cluster' });
  }

  for (const tag of paper.tags) {
    const conceptId = encodeId('concept', tag);
    addNode({ id: conceptId, label: tag, type: 'concept', summary: paper.relation, weight: 4 });
    addEdge({ source: paperId, target: conceptId, type: 'uses', label: 'uses mechanism' });
  }
}

for (const left of projects) {
  for (const right of featuredResearch) {
    const shared = left.tags.filter((tag) => right.tags.includes(tag));
    if (shared.length > 0) {
      addEdge({
        source: encodeId('project', left.repo),
        target: encodeId('paper', right.slug || right.title),
        type: 'same_theme',
        label: `shared theme: ${shared.join(', ')}`
      });
    }
  }
}

for (const node of generatedKnowledgeNodes) mergeNode(node);
for (const edge of generatedKnowledgeEdges) mergeEdge(edge);

export const knowledgeNodes = [...nodes.values()];
export const knowledgeEdges = edges;
export const knowledgeGraph = { nodes: knowledgeNodes, edges: knowledgeEdges };
export const coreKnowledgeNodes = knowledgeNodes
  .filter((node) => node.type !== 'paper' || node.weight >= 4)
  .sort((left, right) => right.weight - left.weight || left.label.localeCompare(right.label))
  .slice(0, 150);
const coreIds = new Set(coreKnowledgeNodes.map((node) => node.id));
export const coreKnowledgeEdges = knowledgeEdges.filter((edge) => coreIds.has(edge.source) && coreIds.has(edge.target));
export const coreKnowledgeGraph = { nodes: coreKnowledgeNodes, edges: coreKnowledgeEdges };
export const knowledgeGraphStats = {
  nodes: knowledgeNodes.length,
  edges: knowledgeEdges.length,
  projects: knowledgeNodes.filter((node) => node.type === 'project').length,
  papers: knowledgeNodes.filter((node) => node.type === 'paper').length,
  concepts: knowledgeNodes.filter((node) => node.type === 'concept').length,
  clusters: knowledgeNodes.filter((node) => node.type === 'cluster').length
};
