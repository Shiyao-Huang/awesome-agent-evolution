#!/usr/bin/env node
// @sm:node value-embedding-projection-builder
// @sm:feature value-comparison.embedding-projection
// @sm:prev value-lsh-index-builder
// @sm:next value-3d-graph,semantic-cluster-review
// @sm:deps data-engine/value-lsh-index/value-matrix.jsonl,raw-*,analysis/value-lsh-index.json
// @sm:evidence node scripts/build_value_embedding_projection.mjs --provider value --projection pca

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const defaultWorkDir = path.join(root, 'data-engine/value-lsh-index');
const defaultMatrixPath = path.join(defaultWorkDir, 'value-matrix.jsonl');
const defaultClustersPath = path.join(defaultWorkDir, 'clusters.json');
const defaultSignaturesPath = path.join(defaultWorkDir, 'signatures.jsonl');
const defaultOutPath = path.join(defaultWorkDir, 'projection-3d.json');
const defaultGraphPath = path.join(root, 'analysis/value-lsh-graph-3d.json');
const defaultGbrainConfigPath = path.join(process.env.HOME || '', '.gbrain', 'config.json');

const usage = () => `Usage:
  node scripts/build_value_embedding_projection.mjs [options]

Options:
  --provider value|value-regularized|hash|openai|gbrain Embedding provider. Default: value.
  --projection pca|tsne|pca-tsne     3D projection method. Default: pca.
  --k N                              K-means cluster count. Default: 24.
  --limit N                          Limit rows for quick experiments.
  --openai-model MODEL               Embedding model. Default: OPENAI_EMBEDDING_MODEL, gbrain config, text-embedding-3-large for gbrain, or text-embedding-3-small.
  --openai-base-url URL              OpenAI-compatible base URL. Default: OPENAI_BASE_URL, gbrain embedding URL, or https://api.openai.com/v1.
  --gbrain-config PATH               gbrain config path for provider base URLs. Default: ~/.gbrain/config.json.
  --cache PATH                       Embedding cache JSONL. Default: data-engine/value-lsh-index/embeddings-<provider>.jsonl.
  --matrix PATH                      Input value matrix JSONL. Default: data-engine/value-lsh-index/value-matrix.jsonl.
  --out PATH                         Output projection JSON. Default: data-engine/value-lsh-index/projection-3d.json.
  --help                             Show this help.

Projection notes:
  pca    = stable default for discrete value vectors; preserves broad variance and avoids claiming LSH has metric geometry.
  tsne   = exact semantic-neighborhood explorer; prefer it with hash/openai/gbrain embeddings, not raw LSH buckets.
  pca-tsne = exact t-SNE over 3D PCA coordinates; useful when discrete value vectors need clearer visual communities.

Provider notes:
  value  = discrete facet vector from value-matrix.jsonl.
  value-regularized = weighted, centered, whitened value facets for continuous projection.
  hash   = deterministic lexical hash embedding from title/source text.
  openai = calls an OpenAI-compatible embeddings API when OPENAI_API_KEY is set; otherwise fails.
  gbrain = OpenAI-compatible embeddings with base URL read from ~/.gbrain/config.json provider_base_urls["openai:embedding"].
           Keys are never read from or written to the repo; provide them through OPENAI_API_KEY.
`;

const parseArgs = (argv) => {
  const args = {
    provider: 'value',
    projection: 'pca',
    k: 24,
    limit: null,
    openaiModel: process.env.OPENAI_EMBEDDING_MODEL || null,
    openaiBaseUrl: process.env.OPENAI_BASE_URL || null,
    gbrainConfigPath: defaultGbrainConfigPath,
    matrixPath: defaultMatrixPath,
    outPath: defaultOutPath,
    cachePath: null,
    help: false
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => argv[++i];
    if (arg === '--provider') args.provider = next();
    else if (arg === '--projection') args.projection = next();
    else if (arg === '--k') args.k = Number(next());
    else if (arg === '--limit') args.limit = Number(next());
    else if (arg === '--openai-model') args.openaiModel = next();
    else if (arg === '--openai-base-url') args.openaiBaseUrl = next();
    else if (arg === '--gbrain-config') args.gbrainConfigPath = path.resolve(root, next());
    else if (arg === '--cache') args.cachePath = path.resolve(root, next());
    else if (arg === '--matrix') args.matrixPath = path.resolve(root, next());
    else if (arg === '--out') args.outPath = path.resolve(root, next());
    else if (arg === '--help' || arg === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (!['value', 'value-regularized', 'hash', 'openai', 'gbrain'].includes(args.provider)) throw new Error(`Invalid --provider: ${args.provider}`);
  if (!['pca', 'tsne', 'pca-tsne'].includes(args.projection)) throw new Error(`Invalid --projection: ${args.projection}`);
  if (!Number.isFinite(args.k) || args.k < 2) throw new Error('Invalid --k');
  if (!args.cachePath) args.cachePath = path.join(defaultWorkDir, `embeddings-${args.provider}.jsonl`);
  return args;
};

const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const sha1 = (value) => crypto.createHash('sha1').update(String(value)).digest('hex');
const readJson = (filePath, fallback = null) => (fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : fallback);
const writeJson = (filePath, value) => fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
const clamp = (value, min = -Infinity, max = Infinity) => Math.max(min, Math.min(max, Number(value) || 0));
const round = (value, places = 6) => {
  const factor = 10 ** places;
  return Math.round((Number(value) || 0) * factor) / factor;
};

const readJsonl = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
};

const appendJsonl = (filePath, rows) => {
  if (!rows.length) return;
  ensureDir(path.dirname(filePath));
  fs.appendFileSync(filePath, `${rows.map((row) => JSON.stringify(row)).join('\n')}\n`);
};

const stripMarkdown = (text) =>
  String(text || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]+\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`|~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const readSourceText = (row, maxChars = 5000) => {
  const chunks = [row.title, row.id, row.type, row.value_class];
  if (row.source_path) {
    const filePath = path.join(root, row.source_path);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      chunks.push(stripMarkdown(fs.readFileSync(filePath, 'utf8')).slice(0, maxChars));
    }
  }
  return chunks.filter(Boolean).join('\n').slice(0, maxChars + 500);
};

const normalizeVector = (vector) => {
  const norm = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => value / norm);
};

const sortedValueKeys = (row) => Object.keys(row.values).sort();

const valueEmbedding = (row) => normalizeVector(sortedValueKeys(row).map((key) => Number(row.values[key] || 0)));

const valueRegularizedEmbeddings = (rows) => {
  const keys = sortedValueKeys(rows[0]);
  const raw = rows.map((row) => keys.map((key) => {
    const value = Number(row.values[key] || 0);
    const contribution = Math.abs(Number(row.contributions?.[key] || row.score?.contributions?.[key] || 0));
    const weight = contribution || Math.max(1, Math.abs(value));
    const confidenceScale = 0.65 + clamp(Number(row.confidence || 0), 0, 100) / 285;
    return value * Math.log1p(weight) * confidenceScale;
  }));
  const means = keys.map((_, dim) => raw.reduce((sum, row) => sum + row[dim], 0) / raw.length);
  const stds = keys.map((_, dim) => {
    const variance = raw.reduce((sum, row) => sum + (row[dim] - means[dim]) ** 2, 0) / raw.length;
    return Math.sqrt(variance) || 1;
  });
  return raw.map((row) => normalizeVector(row.map((value, dim) => clamp((value - means[dim]) / stds[dim], -4, 4))));
};

const hashEmbedding = (text, dims = 96) => {
  const vector = Array.from({ length: dims }, () => 0);
  const tokens = String(text || '').toLowerCase().match(/[a-z0-9_\-\u4e00-\u9fff]{2,}/g) || [];
  for (const token of tokens.slice(0, 1600)) {
    const digest = crypto.createHash('sha256').update(token).digest();
    for (let i = 0; i < 4; i += 1) {
      const idx = digest[i] % dims;
      vector[idx] += digest[i + 4] % 2 ? 1 : -1;
    }
  }
  return normalizeVector(vector);
};

const loadCache = (filePath) => {
  const cache = new Map();
  for (const row of readJsonl(filePath)) cache.set(row.key, row);
  return cache;
};

const readOptionalJson = (filePath) => {
  try {
    if (!filePath || !fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
};

const resolveEmbeddingEndpoint = (args) => {
  const config = readOptionalJson(args.gbrainConfigPath);
  const providerUrls = config?.provider_base_urls || config?.providerBaseUrls || {};
  const gbrainBaseUrl =
    providerUrls['openai:embedding'] ||
    providerUrls.openai_embedding ||
    providerUrls.embedding ||
    providerUrls.openai ||
    null;
  const baseUrl =
    args.openaiBaseUrl ||
    (args.provider === 'gbrain' ? gbrainBaseUrl : null) ||
    process.env.OPENAI_BASE_URL ||
    'https://api.openai.com/v1';
  const normalizedBaseUrl = String(baseUrl).replace(/\/+$/, '');
  return {
    base_url: normalizedBaseUrl,
    embeddings_url: `${normalizedBaseUrl}/embeddings`,
    source: args.openaiBaseUrl
      ? 'cli'
      : args.provider === 'gbrain' && gbrainBaseUrl
        ? 'gbrain_config'
        : process.env.OPENAI_BASE_URL
          ? 'env'
          : 'default'
  };
};

const resolveEmbeddingModel = (args) => {
  if (args.openaiModel) return args.openaiModel;
  const config = readOptionalJson(args.gbrainConfigPath);
  return (
    config?.embedding_model ||
    config?.embeddingModel ||
    config?.models?.embedding ||
    config?.providers?.openai?.embedding_model ||
    (args.provider === 'gbrain' ? 'text-embedding-3-large' : 'text-embedding-3-small')
  );
};

const openAIEmbedding = async (text, args, cache) => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error(`OPENAI_API_KEY is required for --provider ${args.provider}. Use --provider value or --provider hash for offline runs.`);
  }
  const endpoint = resolveEmbeddingEndpoint(args);
  const model = resolveEmbeddingModel(args);
  const key = sha1(JSON.stringify({ provider: args.provider, base_url: endpoint.base_url, model, text }));
  const cached = cache.get(key);
  if (cached?.embedding) return { key, embedding: cached.embedding, cached: true };
  const response = await fetch(endpoint.embeddings_url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model,
      input: text
    })
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(`Embeddings request failed: ${response.status} ${JSON.stringify(body).slice(0, 500)}`);
  }
  const embedding = body.data?.[0]?.embedding;
  if (!Array.isArray(embedding)) throw new Error('OpenAI embeddings response did not include data[0].embedding');
  return { key, embedding: normalizeVector(embedding), cached: false };
};

const buildEmbeddings = async (rows, args) => {
  const cache = loadCache(args.cachePath);
  const additions = [];
  const embeddings = [];
  if (args.provider === 'value-regularized') {
    const vectors = valueRegularizedEmbeddings(rows);
    return rows.map((row, index) => ({ id: row.id, vector: vectors[index], text_hash: sha1(readSourceText(row)) }));
  }

  for (const row of rows) {
    const text = readSourceText(row);
    if (args.provider === 'value') {
      embeddings.push({ id: row.id, vector: valueEmbedding(row), text_hash: sha1(text) });
    } else if (args.provider === 'hash') {
      embeddings.push({ id: row.id, vector: hashEmbedding(text), text_hash: sha1(text) });
    } else {
      const result = await openAIEmbedding(text, args, cache);
      if (!result.cached) additions.push({
        key: result.key,
        provider: args.provider,
        model: resolveEmbeddingModel(args),
        id: row.id,
        text_hash: sha1(text),
        embedding: result.embedding
      });
      embeddings.push({ id: row.id, vector: result.embedding, text_hash: sha1(text) });
    }
  }
  appendJsonl(args.cachePath, additions);
  return embeddings;
};

const transpose = (matrix) => matrix[0].map((_, col) => matrix.map((row) => row[col]));
const dot = (a, b) => a.reduce((sum, value, index) => sum + value * b[index], 0);
const subtractProjection = (matrix, component) =>
  matrix.map((row) => {
    const scale = dot(row, component);
    return row.map((value, index) => value - scale * component[index]);
  });

const centeredMatrix = (vectors) => {
  const dims = vectors[0].length;
  const means = Array.from({ length: dims }, (_, dim) => vectors.reduce((sum, row) => sum + row[dim], 0) / vectors.length);
  return vectors.map((row) => row.map((value, dim) => value - means[dim]));
};

const powerComponent = (matrix, iterations = 40) => {
  const dims = matrix[0].length;
  let vector = normalizeVector(Array.from({ length: dims }, (_, index) => Math.sin(index + 1)));
  for (let iter = 0; iter < iterations; iter += 1) {
    const projected = matrix.map((row) => dot(row, vector));
    const next = Array.from({ length: dims }, (_, dim) =>
      matrix.reduce((sum, row, rowIndex) => sum + row[dim] * projected[rowIndex], 0)
    );
    vector = normalizeVector(next);
  }
  return vector;
};

const pca3 = (vectors) => {
  let matrix = centeredMatrix(vectors);
  const components = [];
  for (let c = 0; c < 3; c += 1) {
    const component = powerComponent(matrix);
    components.push(component);
    matrix = subtractProjection(matrix, component);
  }
  return vectors.map((row) => components.map((component) => dot(row, component)));
};

const pairwiseDistances = (vectors) => {
  const n = vectors.length;
  const distances = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const d = Math.sqrt(vectors[i].reduce((sum, value, dim) => {
        const delta = value - vectors[j][dim];
        return sum + delta * delta;
      }, 0));
      distances[i][j] = d;
      distances[j][i] = d;
    }
  }
  return distances;
};

const deterministicJitter = (index, axis) => {
  const value = Math.sin((index + 1) * (axis * 97.173 + 12.9898)) * 43758.5453;
  return (value - Math.floor(value) - 0.5) * 0.0002;
};

const hbeta = (distances, beta, selfIndex) => {
  const probs = distances.map((distance, index) => (index === selfIndex ? 0 : Math.exp(-distance * beta)));
  const sum = probs.reduce((acc, value) => acc + value, 0) || 1e-12;
  const entropy = Math.log(sum) + (beta * probs.reduce((acc, value, index) => acc + value * distances[index], 0)) / sum;
  return { entropy, probs: probs.map((value) => value / sum) };
};

const binarySearchConditionalP = (distances, perplexity = 30, tolerance = 1e-5) => {
  const n = distances.length;
  const targetEntropy = Math.log(Math.min(perplexity, Math.max(2, n - 1)));
  const p = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let i = 0; i < n; i += 1) {
    let beta = 1;
    let betaMin = -Infinity;
    let betaMax = Infinity;
    let result = hbeta(distances[i], beta, i);
    for (let tries = 0; tries < 60 && Math.abs(result.entropy - targetEntropy) > tolerance; tries += 1) {
      if (result.entropy > targetEntropy) {
        betaMin = beta;
        beta = Number.isFinite(betaMax) ? (beta + betaMax) / 2 : beta * 2;
      } else {
        betaMax = beta;
        beta = Number.isFinite(betaMin) ? (beta + betaMin) / 2 : beta / 2;
      }
      result = hbeta(distances[i], beta, i);
    }
    p[i] = result.probs;
  }
  const symmetric = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const normalizer = 2 * n;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i !== j) symmetric[i][j] = Math.max((p[i][j] + p[j][i]) / normalizer, 1e-12);
    }
  }
  return symmetric;
};

const centerPoints = (points) => {
  const dims = points[0].length;
  const means = Array.from({ length: dims }, (_, dim) => points.reduce((sum, point) => sum + point[dim], 0) / points.length);
  return points.map((point) => point.map((value, dim) => value - means[dim]));
};

const tsne3 = (vectors, iterations = 520, learningRate = 120, perplexity = 35) => {
  const n = vectors.length;
  if (n <= 3) return pca3(vectors);
  const squaredDistances = pairwiseDistances(vectors).map((row) => row.map((value) => value ** 2));
  const p = binarySearchConditionalP(squaredDistances, perplexity);

  let y = centerPoints(pca3(vectors).map((point, index) => [
    point[0] * 0.0001 + deterministicJitter(index, 1),
    point[1] * 0.0001 + deterministicJitter(index, 2),
    point[2] * 0.0001 + deterministicJitter(index, 3)
  ]));
  let velocity = y.map(() => [0, 0, 0]);
  for (let iter = 0; iter < iterations; iter += 1) {
    const qNum = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
    let qSum = 0;
    for (let i = 0; i < n; i += 1) {
      for (let j = i + 1; j < n; j += 1) {
        const dist2 = y[i].reduce((sum, value, dim) => {
          const delta = value - y[j][dim];
          return sum + delta * delta;
        }, 0);
        const value = 1 / (1 + dist2);
        qNum[i][j] = value;
        qNum[j][i] = value;
        qSum += value * 2;
      }
    }
    const grads = y.map(() => [0, 0, 0]);
    const exaggeration = iter < 120 ? 12 : 1;
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        if (i === j) continue;
        const q = qNum[i][j] / (qSum || 1);
        const coeff = 4 * (exaggeration * p[i][j] - q) * qNum[i][j];
        for (let dim = 0; dim < 3; dim += 1) grads[i][dim] += coeff * (y[i][dim] - y[j][dim]);
      }
    }
    const momentum = iter < 160 ? 0.5 : 0.82;
    const eta = iter < 120 ? learningRate : learningRate * 0.72;
    y = y.map((point, i) => point.map((value, dim) => {
      velocity[i][dim] = momentum * velocity[i][dim] - eta * grads[i][dim];
      return clamp(value + velocity[i][dim], -100, 100);
    }));
    if (iter % 10 === 0) y = centerPoints(y);
  }
  return centerPoints(y);
};

const normalizePoints = (points) => {
  const cols = transpose(points);
  const ranges = cols.map((col) => {
    const min = Math.min(...col);
    const max = Math.max(...col);
    return { min, max, scale: max - min || 1 };
  });
  return points.map((point) => point.map((value, index) => round(((value - ranges[index].min) / ranges[index].scale) * 2 - 1)));
};

const nearestCentroid = (vector, centroids) => {
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < centroids.length; i += 1) {
    const dist = vector.reduce((sum, value, dim) => {
      const delta = value - centroids[i][dim];
      return sum + delta * delta;
    }, 0);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  }
  return best;
};

const kmeans = (vectors, k, iterations = 40) => {
  const n = vectors.length;
  const actualK = Math.min(k, Math.max(2, n));
  let centroids = Array.from({ length: actualK }, (_, index) => vectors[Math.floor((index * n) / actualK)]);
  let assignments = Array.from({ length: n }, () => 0);
  for (let iter = 0; iter < iterations; iter += 1) {
    assignments = vectors.map((vector) => nearestCentroid(vector, centroids));
    const sums = Array.from({ length: actualK }, () => Array.from({ length: vectors[0].length }, () => 0));
    const counts = Array.from({ length: actualK }, () => 0);
    for (let i = 0; i < n; i += 1) {
      const cluster = assignments[i];
      counts[cluster] += 1;
      for (let dim = 0; dim < vectors[i].length; dim += 1) sums[cluster][dim] += vectors[i][dim];
    }
    centroids = sums.map((sum, index) => counts[index] ? normalizeVector(sum.map((value) => value / counts[index])) : centroids[index]);
  }
  return assignments.map((cluster) => `emb-${String(cluster + 1).padStart(3, '0')}`);
};

const buildLshNeighborMap = (rows) => {
  const signatures = readJsonl(defaultSignaturesPath);
  const byId = new Map(rows.map((row) => [row.id, row]));
  const bucketWeights = new Map();
  const bucketInfo = new Map();
  const bucketsById = new Map();

  for (const signature of signatures) {
    if (!byId.has(signature.id)) continue;
    for (const band of signature.bands || []) {
      const bucket = bucketInfo.get(band.key) || { key: band.key, band: band.band, features: band.features || [], chars: band.chars || '', members: [] };
      bucket.members.push(signature.id);
      bucketInfo.set(band.key, bucket);
      const list = bucketsById.get(signature.id) || [];
      list.push(band.key);
      bucketsById.set(signature.id, list);
    }
  }

  for (const bucket of bucketInfo.values()) {
    const weight = 1 / Math.log2(Math.max(3, bucket.members.length + 1));
    bucketWeights.set(bucket.key, weight);
  }

  const neighborScores = new Map();
  for (const bucket of bucketInfo.values()) {
    const weight = bucketWeights.get(bucket.key) || 0;
    for (let i = 0; i < bucket.members.length; i += 1) {
      for (let j = i + 1; j < bucket.members.length; j += 1) {
        const a = bucket.members[i];
        const b = bucket.members[j];
        const key = a < b ? `${a}\u0000${b}` : `${b}\u0000${a}`;
        const current = neighborScores.get(key) || { score: 0, buckets: [] };
        current.score += weight;
        current.buckets.push(bucket.key);
        neighborScores.set(key, current);
      }
    }
  }

  const neighbors = new Map(rows.map((row) => [row.id, []]));
  for (const [pairKey, value] of neighborScores.entries()) {
    const [a, b] = pairKey.split('\u0000');
    const rowA = byId.get(a);
    const rowB = byId.get(b);
    if (!rowA || !rowB) continue;
    const sharedBuckets = value.buckets
      .map((key) => bucketInfo.get(key))
      .filter(Boolean)
      .sort((left, right) => left.members.length - right.members.length)
      .slice(0, 3);
    const entryA = {
      id: b,
      title: rowB.title,
      type: rowB.type,
      value_score: rowB.value_score,
      value_class: rowB.value_class,
      shared_bucket_count: value.buckets.length,
      shared_features: [...new Set(sharedBuckets.flatMap((bucket) => bucket.features || []))].slice(0, 8),
      relation_weight: round(value.score, 4)
    };
    const entryB = {
      id: a,
      title: rowA.title,
      type: rowA.type,
      value_score: rowA.value_score,
      value_class: rowA.value_class,
      shared_bucket_count: value.buckets.length,
      shared_features: [...new Set(sharedBuckets.flatMap((bucket) => bucket.features || []))].slice(0, 8),
      relation_weight: round(value.score, 4)
    };
    neighbors.get(a)?.push(entryA);
    neighbors.get(b)?.push(entryB);
  }

  for (const [id, list] of neighbors.entries()) {
    neighbors.set(id, list.sort((a, b) => b.relation_weight - a.relation_weight || b.value_score - a.value_score).slice(0, 10));
  }
  return { neighbors, bucketsById };
};

const main = async () => {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage());
    return;
  }
  ensureDir(defaultWorkDir);
  const rows = readJsonl(args.matrixPath).slice(0, args.limit || undefined);
  if (!rows.length) {
    throw new Error(`No rows found in ${args.matrixPath}. Run node scripts/build_value_lsh_index.mjs first.`);
  }
  const embeddings = await buildEmbeddings(rows, args);
  const endpoint = ['openai', 'gbrain'].includes(args.provider) ? resolveEmbeddingEndpoint(args) : null;
  const embeddingModel = ['openai', 'gbrain'].includes(args.provider) ? resolveEmbeddingModel(args) : null;
  const vectors = embeddings.map((row) => row.vector);
  const basePca = pca3(vectors);
  const points = normalizePoints(
    args.projection === 'pca'
      ? basePca
      : args.projection === 'pca-tsne'
        ? tsne3(basePca)
        : tsne3(vectors)
  );
  const embeddingClusters = kmeans(vectors, args.k);
  const lshClusters = readJson(defaultClustersPath, { clusters: [] })?.clusters || [];
  const lshClusterByMember = new Map();
  for (const cluster of lshClusters) {
    for (const representative of cluster.representatives || []) lshClusterByMember.set(representative.id, cluster.cluster_id);
  }
  const lshNeighborMap = buildLshNeighborMap(rows);

  const nodes = rows.map((row, index) => ({
    id: row.id,
    type: row.type,
    title: row.title,
    url: row.url,
    source_path: row.source_path,
    value_score: row.value_score,
    confidence: row.confidence,
    value_class: row.value_class,
    embedding_cluster: embeddingClusters[index],
    lsh_cluster_hint: lshClusterByMember.get(row.id) || null,
    top_lsh_neighbors: lshNeighborMap.neighbors.get(row.id) || [],
    x: points[index][0],
    y: points[index][1],
    z: points[index][2]
  }));

  const byCluster = nodes.reduce((acc, node) => {
    const list = acc.get(node.embedding_cluster) || [];
    list.push(node);
    acc.set(node.embedding_cluster, list);
    return acc;
  }, new Map());
  const clusters = [...byCluster.entries()].map(([cluster, members]) => ({
    cluster,
    size: members.length,
    type_counts: members.reduce((acc, node) => {
      acc[node.type] = (acc[node.type] || 0) + 1;
      return acc;
    }, {}),
    score_avg: round(members.reduce((sum, node) => sum + node.value_score, 0) / members.length, 3),
    representatives: [...members].sort((a, b) => b.value_score - a.value_score).slice(0, 8).map((node) => ({
      id: node.id,
      title: node.title,
      type: node.type,
      value_score: node.value_score,
      url: node.url
    }))
  })).sort((a, b) => b.size - a.size);

  const output = {
    generated_at: new Date().toISOString(),
    method: {
      provider: args.provider,
      projection: args.projection,
      openai_model: embeddingModel,
      embedding_base_url: endpoint?.base_url || null,
      embedding_base_url_source: endpoint?.source || null,
      k: args.k,
      note: '3D coordinates are for exploration and graph display; value claims still require source evidence from the LSH matrix.'
    },
    summary: {
      nodes: nodes.length,
      embedding_clusters: clusters.length,
      value_classes: nodes.reduce((acc, node) => {
        acc[node.value_class] = (acc[node.value_class] || 0) + 1;
        return acc;
      }, {})
    },
    nodes,
    clusters
  };
  ensureDir(path.dirname(args.outPath));
  writeJson(args.outPath, output);
  writeJson(defaultGraphPath, output);
  console.log(`Generated ${path.relative(root, args.outPath)} and ${path.relative(root, defaultGraphPath)} (${nodes.length} nodes)`);
};

await main();
