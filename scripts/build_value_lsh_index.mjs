#!/usr/bin/env node
// @sm:node value-lsh-index-builder
// @sm:feature value-comparison.discrete-lsh
// @sm:prev github-project-data-analysis,frontier-value-queue,github-star-growth-ranking,raw-materials
// @sm:next value-lsh-analysis,value-cluster-map,scheduled-incremental-refresh
// @sm:deps analysis/github-project-data-analysis.json,analysis/frontier-value-queue.json,analysis/github-star-growth-ranking.json,raw-github,raw-papers,raw-social,raw-blogs
// @sm:evidence node scripts/build_value_lsh_index.mjs --source all

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const defaultOutDir = path.join(root, 'data-engine/value-lsh-index');
const defaultAnalysisJson = path.join(root, 'analysis/value-lsh-index.json');
const defaultAnalysisMd = path.join(root, 'analysis/value-lsh-index.md');

const usage = () => `Usage:
  node scripts/build_value_lsh_index.mjs [options]

Options:
  --source all|github|papers|social|blogs   Material layer to scan. Default: all.
  --limit N                                 Limit materials after collection.
  --out-dir PATH                            Work-layer output directory. Default: data-engine/value-lsh-index.
  --band-size N                             Discrete LSH band size. Default: 6.
  --threshold N                             Pair similarity threshold for cluster union. Default: 0.52.
  --max-bucket-members N                    Skip pairwise union for very broad buckets. Default: 96.
  --help                                    Show this help.

Outputs:
  data-engine/value-lsh-index/value-matrix.jsonl
  data-engine/value-lsh-index/signatures.jsonl
  data-engine/value-lsh-index/buckets.json
  data-engine/value-lsh-index/clusters.json
  data-engine/value-lsh-index/manifest.json
  analysis/value-lsh-index.json
  analysis/value-lsh-index.md
`;

const parseArgs = (argv) => {
  const args = {
    source: 'all',
    limit: null,
    outDir: defaultOutDir,
    bandSize: 6,
    threshold: 0.52,
    maxBucketMembers: 96,
    help: false
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = () => argv[++i];
    if (arg === '--source') args.source = next();
    else if (arg === '--limit') args.limit = Number(next());
    else if (arg === '--out-dir') args.outDir = path.resolve(root, next());
    else if (arg === '--band-size') args.bandSize = Number(next());
    else if (arg === '--threshold') args.threshold = Number(next());
    else if (arg === '--max-bucket-members') args.maxBucketMembers = Number(next());
    else if (arg === '--help' || arg === '-h') args.help = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  if (!['all', 'github', 'papers', 'social', 'blogs'].includes(args.source)) {
    throw new Error(`Invalid --source: ${args.source}`);
  }
  if (!Number.isFinite(args.bandSize) || args.bandSize < 2) throw new Error('Invalid --band-size');
  if (!Number.isFinite(args.threshold) || args.threshold <= 0 || args.threshold > 1) throw new Error('Invalid --threshold');
  if (!Number.isFinite(args.maxBucketMembers) || args.maxBucketMembers < 2) throw new Error('Invalid --max-bucket-members');
  return args;
};

const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const readJson = (filePath, fallback = null) => (fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : fallback);
const writeJson = (filePath, value) => fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
const writeText = (filePath, value) => fs.writeFileSync(filePath, value.endsWith('\n') ? value : `${value}\n`);
const sha1 = (value) => crypto.createHash('sha1').update(String(value)).digest('hex');
const normalizeRel = (filePath) => path.relative(root, filePath).split(path.sep).join('/');
const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, Number(value) || 0));
const round = (value, places = 2) => {
  const factor = 10 ** places;
  return Math.round((Number(value) || 0) * factor) / factor;
};
const average = (values) => {
  const valid = values.filter((value) => Number.isFinite(value));
  if (!valid.length) return 0;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
};
const csvCell = (value) => {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
};

const normalizeRepo = (repo) =>
  String(repo || '')
    .replace(/^https:\/\/github\.com\//i, '')
    .replace(/\.git$/i, '')
    .replace(/\?.*$/, '')
    .replace(/^\/+|\/+$/g, '')
    .toLowerCase();

const frontierReportPathForRepo = (repo) => {
  const slug = normalizeRepo(repo).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (!slug) return null;
  const rel = `analysis/frontier-projects/${slug}-dual-chain.md`;
  return fs.existsSync(path.join(root, rel)) ? rel : null;
};

const localRepoMirrorPathForRepo = (repo) => {
  const normalized = normalizeRepo(repo);
  if (!normalized.includes('/')) return null;
  const rel = `projects/repos/${normalized.replace(/\//g, '__')}`;
  return fs.existsSync(path.join(root, rel)) ? rel : null;
};

const parseFrontmatter = (text) => {
  if (!text.startsWith('---\n')) return {};
  const end = text.indexOf('\n---', 4);
  if (end < 0) return {};
  const meta = {};
  for (const line of text.slice(4, end).split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (match) meta[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return meta;
};

const stripMarkdown = (text) =>
  String(text || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]+\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`|~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const readMaterialFile = (filePath, maxChars = 8000) => {
  const text = fs.readFileSync(filePath, 'utf8');
  return {
    text,
    meta: parseFrontmatter(text),
    preview: stripMarkdown(text).slice(0, maxChars)
  };
};

const parseDate = (value) => {
  if (!value || value === 'unknown') return null;
  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? null : date;
};

const isRecent = (value, minYear = 2026) => {
  const date = parseDate(value);
  return Boolean(date && date.getUTCFullYear() >= minYear);
};

const hasAny = (text, patterns) => {
  const list = Array.isArray(patterns) ? patterns : [patterns];
  return list.some((pattern) => pattern.test(text));
};
const evidence = (source, note) => ({ source, note });

const VALUE_TAGS = [
  {
    id: 'current_frontier_signal',
    weight: 8,
    label: 'Current frontier signal',
    line: '是否是当前阶段值得优先比较的 frontier 信号',
    detect: ({ material, text }) => {
      if (material.frontier?.frontier_rank && material.frontier.frontier_rank <= 30) return [1, 'frontier queue top-30'];
      if (material.starGrowth?.coverage_qualified_rank && material.starGrowth.coverage_qualified_rank <= 20) return [1, '2026 star-growth covered top-20'];
      if (material.github?.raw_time_slice?.startsWith?.('2026') || isRecent(material.created_at) || isRecent(material.pushed_at)) return [1, '2026 raw/activity signal'];
      if (hasAny(text, [/2026/, /frontier/i, /new\s+agent/i, /recent/i])) return [1, 'text contains current/frontier terms'];
      if (material.type === 'github' && material.github?.created_at && !isRecent(material.github.created_at, 2025)) return [-1, 'older GitHub created_at'];
      return [0, 'no current frontier evidence'];
    }
  },
  {
    id: 'self_evolution_loop_fit',
    weight: 10,
    label: 'Self-evolution loop fit',
    line: '是否真的靠 Observe/Interpret/Modify/Verify/Retain 闭环产生改进',
    detect: ({ material, text }) => {
      const gates = material.frontier?.mirror_chain?.value_gap || [];
      if (gates.length >= 4) return [1, `OIMVR gates: ${gates.join(',')}`];
      if (hasAny(text, [/self[-\s]?evol/i, /self[-\s]?improv/i, /evolv/i, /mutation/i, /retain/i, /自进化|自我改进|进化|演化/])) return [1, 'self-evolution terms'];
      if (material.type === 'github' && material.github?.evolution_focused === false) return [-1, 'classified as non evolution-focused'];
      return [0, 'loop fit unknown'];
    }
  },
  {
    id: 'mutable_artifact_clear',
    weight: 6,
    label: 'Mutable artifact clear',
    line: '项目是否说明自己改变 prompt/memory/skill/workflow/code/weights/population/evaluator',
    detect: ({ text }) => {
      if (hasAny(text, [/prompt/i, /memory/i, /skill/i, /workflow/i, /\bcode\b/i, /weights?/i, /population/i, /evaluator/i, /策略|记忆|技能|工作流|代码|权重|种群|评估器/])) return [1, 'mutable artifact terms'];
      return [0, 'mutable artifact not explicit'];
    }
  },
  {
    id: 'feedback_signal_clear',
    weight: 6,
    label: 'Feedback signal clear',
    line: '是否有清楚反馈信号，而不是只讲愿景',
    detect: ({ text }) => {
      if (hasAny(text, [/feedback/i, /trajectory/i, /trace/i, /reward/i, /score/i, /critique/i, /judge/i, /environment/i, /反馈|轨迹|奖励|评分|批判|评判|环境/])) return [1, 'feedback terms'];
      return [0, 'feedback signal unknown'];
    }
  },
  {
    id: 'verifier_or_benchmark',
    weight: 8,
    label: 'Verifier or benchmark',
    line: '是否有测试、benchmark、grader、verifier 或可复跑评估',
    detect: ({ material, text }) => {
      if (material.frontier?.evidence_chain?.local_scan?.flags?.evals || material.frontier?.evidence_chain?.local_scan?.flags?.tests) return [1, 'local tests/evals flags'];
      if (hasAny(text, [/benchmark/i, /\beval/i, /verifier/i, /grader/i, /\btest/i, /leaderboard/i, /基准|评估|验证|测试|打分器/])) return [1, 'benchmark/verifier terms'];
      return [0, 'verifier unknown'];
    }
  },
  {
    id: 'retention_or_memory',
    weight: 7,
    label: 'Retention or memory',
    line: '是否有保留机制，例如 memory、archive、checkpoint、skill library',
    detect: ({ material, text }) => {
      if (material.frontier?.evidence_chain?.local_scan?.flags?.memory_or_state) return [1, 'local memory/state flags'];
      if (hasAny(text, [/retain/i, /memory/i, /archive/i, /checkpoint/i, /persist/i, /distill/i, /skill\s+library/i, /保留|记忆|归档|检查点|持久|蒸馏|技能库/])) return [1, 'retention terms'];
      return [0, 'retention unknown'];
    }
  },
  {
    id: 'rollback_or_safety',
    weight: 5,
    label: 'Rollback or safety',
    line: '是否有回滚、安全边界、regression guard 或 policy',
    detect: ({ material, text }) => {
      if (material.frontier?.evidence_chain?.local_scan?.flags?.safety_or_guards) return [1, 'local safety/guard flags'];
      if (hasAny(text, [/rollback/i, /regression/i, /guard/i, /safety/i, /policy/i, /sandbox/i, /回滚|回归|守卫|安全|策略|沙箱/])) return [1, 'safety/rollback terms'];
      return [0, 'rollback unknown'];
    }
  },
  {
    id: 'implementation_runnable',
    weight: 8,
    label: 'Runnable implementation',
    line: '是否看起来能跑：代码、安装、示例、测试、API、包结构明确',
    detect: ({ material, text }) => {
      const scan = material.frontier?.evidence_chain?.local_scan;
      if (scan?.exists && (scan.flags?.examples || scan.flags?.tests || scan.flags?.docs)) return [1, 'local clone with docs/tests/examples'];
      if (material.github?.localPath || material.github?.local_git?.head) return [1, 'local git mirror'];
      if (hasAny(text, [/install/i, /quickstart/i, /usage/i, /api/i, /docker/i, /pip install/i, /npm install/i, /安装|快速开始|使用|示例|教程/])) return [1, 'runnable docs terms'];
      if (material.type === 'social' || material.type === 'blog') return [0, 'social/blog does not prove runnable implementation'];
      return [0, 'runnability unknown'];
    }
  },
  {
    id: 'local_code_or_artifact',
    weight: 5,
    label: 'Local code or artifact',
    line: '仓库里是否已有本地代码镜像或可发布报告',
    detect: ({ material }) => {
      if (material.frontier?.evidence_chain?.local_mirror || material.github?.localPath || material.github?.public_report_exists || material.github?.analysis_report) return [1, 'local mirror or report exists'];
      if (material.source_path && fs.existsSync(path.join(root, material.source_path))) return [1, 'raw/work source exists locally'];
      return [0, 'local artifact unknown'];
    }
  },
  {
    id: 'product_usability',
    weight: 5,
    label: 'Product usability',
    line: '是否给读者/工程师直接可用的产品或工作流价值',
    detect: ({ material, text }) => {
      if (material.github?.scores?.usefulness >= 70 || material.frontier?.frontier_scores?.benchmark_or_product_usefulness >= 70) return [1, 'usefulness score high'];
      if (hasAny(text, [/product/i, /workflow/i, /dashboard/i, /cli/i, /sdk/i, /mcp/i, /api/i, /production/i, /产品|工作流|仪表盘|命令行|接口|生产/])) return [1, 'product/workflow terms'];
      return [0, 'product usability unknown'];
    }
  },
  {
    id: 'teaching_model_card',
    weight: 4,
    label: 'Teaching model card',
    line: '是否已有 model-card/教学型报告入口',
    detect: ({ material }) => {
      if (material.github?.report || material.github?.public_report || material.github?.analysis_report || material.frontier?.evidence_chain?.public_report) return [1, 'project/public report exists'];
      if (material.type === 'paper' && material.source_path) return [1, 'raw paper can teach method if reviewed'];
      return [0, 'teaching card missing or unknown'];
    }
  },
  {
    id: 'evidence_chain_complete',
    weight: 8,
    label: 'Evidence chain complete',
    line: 'raw、processed/report、metadata、timestamp 是否能串起来',
    detect: ({ material }) => {
      const hasRaw = Boolean(material.source_path || material.github?.raw_file || material.frontier?.evidence_chain?.raw_capture);
      const hasProcessed = Boolean(material.github?.report || material.github?.public_report || material.github?.analysis_report || material.frontier?.evidence_chain?.public_report);
      const hasTime = Boolean(material.github?.created_at || material.github?.raw_time_slice || material.meta?.content_timestamp);
      if (hasRaw && hasProcessed && hasTime) return [1, 'raw + processed + time present'];
      if (hasRaw && (hasProcessed || hasTime)) return [0, 'partial evidence chain'];
      return [-1, 'weak evidence chain'];
    }
  },
  {
    id: 'timestamp_freshness',
    weight: 7,
    label: 'Timestamp freshness',
    line: '时间信号是否已知且较新',
    detect: ({ material, text }) => {
      const candidates = [
        material.github?.created_at,
        material.github?.github_pushed_at,
        material.github?.lastPushed,
        material.github?.raw_collected_at,
        material.meta?.content_timestamp,
        material.meta?.collected_at
      ].filter(Boolean);
      if (candidates.some((item) => isRecent(item))) return [1, '2026 timestamp'];
      if (candidates.some((item) => isRecent(item, 2025))) return [1, '2025 timestamp'];
      if (candidates.length) return [0, 'timestamp known but not fresh'];
      if (hasAny(text, [/2026|2025/])) return [1, 'fresh year in text'];
      return [-1, 'timestamp unknown'];
    }
  },
  {
    id: 'continuity_active',
    weight: 7,
    label: 'Active continuity',
    line: '是否有持续更新、release、issue、roadmap 或后续方向',
    detect: ({ material, text }) => {
      const history = material.github?.local_git_history_24m;
      if ((history?.commits_24m || 0) >= 3 || (history?.tags_24m || 0) > 0) return [1, 'local git 24m continuity'];
      if (material.frontier?.frontier_scores?.continuity >= 65) return [1, 'frontier continuity high'];
      if (hasAny(text, [/release/i, /roadmap/i, /active/i, /follow[-\s]?up/i, /issues?/i, /pull request/i, /持续|路线图|发布|活跃|后续/])) return [1, 'continuity terms'];
      return [0, 'continuity unknown'];
    }
  },
  {
    id: 'community_momentum',
    weight: 5,
    label: 'Community momentum',
    line: '是否有 stars/forks/discussion/resource 这类社区动量',
    detect: ({ material, text }) => {
      const stars = Number(material.github?.github_api_stars || material.github?.site_stars || material.starGrowth?.current_total_stars || 0);
      if (stars >= 1000) return [1, `stars >= 1000 (${stars})`];
      if (material.starGrowth?.new_stars_recent_90d >= 20) return [1, 'recent star growth'];
      if (hasAny(text, [/stars?/i, /forks?/i, /community/i, /discussion/i, /社区|收藏|分叉|讨论/])) return [1, 'community terms'];
      return [0, 'momentum unknown'];
    }
  },
  {
    id: 'star_growth_current',
    weight: 6,
    label: 'Current star growth',
    line: '是否已有 2026 new-star 覆盖，而不是只看累计 star',
    detect: ({ material }) => {
      if (material.starGrowth?.coverage_status === 'complete_or_near_complete' && (material.starGrowth?.new_stars_year || 0) > 0) return [1, 'complete 2026 star-growth coverage'];
      if (material.starGrowth?.coverage_status === 'partial') return [0, 'partial star-growth coverage'];
      if (material.type === 'github') return [-1, 'star history not fetched'];
      return [0, 'not a GitHub star-growth object'];
    }
  },
  {
    id: 'paper_quality_signal',
    weight: 5,
    label: 'Paper quality signal',
    line: '论文或材料是否有 arXiv/benchmark/citation style 的研究证据',
    detect: ({ material, text }) => {
      if (material.type === 'paper' && (material.meta?.arXiv || material.meta?.arxiv || hasAny(text, [/arxiv/i]))) return [1, 'paper/arXiv source'];
      if (hasAny(text, [/paper/i, /arxiv/i, /citation/i, /ablation/i, /论文|消融|引用/])) return [1, 'research-paper terms'];
      return [0, 'paper quality not applicable or unknown'];
    }
  },
  {
    id: 'benchmark_result',
    weight: 6,
    label: 'Benchmark result',
    line: '是否给出 benchmark 结果、分数、提升、leaderboard 或对比',
    detect: ({ text }) => {
      if (hasAny(text, [/leaderboard/i, /SWE-bench/i, /GAIA/i, /HumanEval/i, /MMLU/i, /AppWorld/i, /\+\d+(\.\d+)?%/, /score/i, /accuracy/i, /pass@/i, /排行榜|分数|准确率|提升/])) return [1, 'benchmark result terms'];
      return [0, 'benchmark result unknown'];
    }
  },
  {
    id: 'method_novelty',
    weight: 5,
    label: 'Method novelty',
    line: '是否有新方法、新算子、新架构、新范式，而非普通应用壳',
    detect: ({ text }) => {
      if (hasAny(text, [/novel/i, /new\s+(method|framework|algorithm|architecture)/i, /architecture search/i, /operator/i, /meta[-\s]?learning/i, /新方法|新框架|新算法|架构搜索|算子|元学习/])) return [1, 'novel method terms'];
      if (hasAny(text, [/wrapper/i, /template/i, /boilerplate/i, /awesome list/i, /模板|清单|封装/])) return [-1, 'wrapper/list signal'];
      return [0, 'novelty unknown'];
    }
  },
  {
    id: 'open_source_reuse',
    weight: 5,
    label: 'Open-source reuse',
    line: '是否有 license、docs、examples、SDK，使其他人可以复用',
    detect: ({ material, text }) => {
      if (material.github?.license || material.frontier?.evidence_chain?.local_scan?.flags?.docs) return [1, 'license/docs present'];
      if (hasAny(text, [/MIT|Apache|BSD|license/i, /docs/i, /examples?/i, /sdk/i, /template/i, /许可证|文档|示例|模板/])) return [1, 'reuse terms'];
      return [0, 'reuse unknown'];
    }
  },
  {
    id: 'issue_resource_signal',
    weight: 4,
    label: 'Issue/resource signal',
    line: '是否有 issue/resource/PR/release 方向信号',
    detect: ({ material, text }) => {
      if (material.frontier?.mirror_chain?.caveats?.includes?.('remote_issue_scan_missing')) return [0, 'issue scan still pending'];
      if (material.frontier?.evidence_chain?.local_scan?.flags?.issue_templates) return [1, 'issue templates present'];
      if (hasAny(text, [/issues?/i, /pull request/i, /\bPR\b/, /release/i, /discussion/i, /resource/i, /问题|合并请求|发布|讨论|资源/])) return [1, 'issue/resource terms'];
      return [0, 'issue/resource unknown'];
    }
  },
  {
    id: 'hype_without_evidence',
    weight: -8,
    label: 'Hype without evidence',
    line: '是否有热度/口号，但缺少实现、验证或证据链',
    detect: ({ material, text }) => {
      const hype = hasAny(text, [/revolution/i, /game[-\s]?changer/i, /breakthrough/i, /viral/i, /hype/i, /爆款|革命性|颠覆|刷屏/]);
      const evidenceLike = hasAny(text, [/benchmark/i, /\beval/i, /\btest/i, /github/i, /arxiv/i, /code/i, /基准|评估|测试|代码|论文/]);
      if (hype && !evidenceLike) return [1, 'hype terms without local evidence terms'];
      if ((material.type === 'social' || material.type === 'blog') && !evidenceLike) return [1, 'social/blog item without evidence terms'];
      return [0, 'no standalone hype risk'];
    }
  },
  {
    id: 'stale_or_unknown_metadata',
    weight: -6,
    label: 'Stale or unknown metadata',
    line: '关键 metadata 是否未知或陈旧',
    detect: ({ material }) => {
      if (material.type === 'github' && !material.github?.created_at && !material.github?.raw_time_slice) return [1, 'GitHub created_at/raw time unknown'];
      if (material.type === 'github' && material.github?.created_at && !isRecent(material.github.created_at, 2024)) return [1, 'older than 2024'];
      if (!material.source_path) return [1, 'source path missing'];
      return [0, 'metadata acceptable'];
    }
  },
  {
    id: 'useful_for_survey_seo',
    weight: 4,
    label: 'Survey/SEO usefulness',
    line: '是否适合转成 survey、topic、SEO 或 public report 的读者入口',
    detect: ({ material, text }) => {
      if (material.github?.public_report_exists || material.type === 'paper') return [1, 'report or paper source'];
      if (hasAny(text, [/definition/i, /guide/i, /survey/i, /tutorial/i, /comparison/i, /benchmark/i, /定义|指南|综述|教程|对比|基准/])) return [1, 'reader-facing topic terms'];
      return [0, 'survey usefulness unknown'];
    }
  },
  {
    id: 'user_need_fit',
    weight: 6,
    label: 'User-need fit',
    line: '是否解决真实用户需要：可靠性、成本、可观测性、记忆、权限、自动化',
    detect: ({ text }) => {
      if (hasAny(text, [/reliab/i, /cost/i, /observab/i, /memory/i, /permission/i, /automation/i, /workflow/i, /production/i, /可靠|成本|可观测|记忆|权限|自动化|生产/])) return [1, 'user-need terms'];
      return [0, 'user need not explicit'];
    }
  },
  {
    id: 'compare_anchor_baseline',
    weight: 3,
    label: 'Comparison anchor baseline',
    line: '是否适合作为历史 baseline 或机制对照物',
    detect: ({ material, text }) => {
      if (material.frontier?.lane === 'historical-baseline') return [1, 'frontier lane historical-baseline'];
      if (hasAny(text, [/reflexion|self-refine|dspy|funsearch|opro|adas|openevolve|alphaevolve|dgm|baseline/i])) return [1, 'known baseline terms'];
      return [0, 'not a known baseline'];
    }
  }
];

const FEATURE_IDS = VALUE_TAGS.map((tag) => tag.id);
const TAG_VERSION = sha1(JSON.stringify(VALUE_TAGS.map(({ id, weight, line }) => ({ id, weight, line })))).slice(0, 12);

const collectMarkdownMaterials = (dirName, type, prefix, options = {}) => {
  const dir = path.join(root, dirName);
  if (!fs.existsSync(dir)) return [];
  const skip = new Set(options.skip || []);
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith('.md') && !skip.has(name))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
    .map((name) => {
      const filePath = path.join(dir, name);
      const { text, meta, preview } = readMaterialFile(filePath);
      const title = meta.title || name.replace(/\.md$/, '').replace(/[-_]+/g, ' ');
      return {
        id: `${prefix}:${name.replace(/\.md$/, '')}`,
        type,
        title,
        url: meta.url || meta.link || null,
        source_path: normalizeRel(filePath),
        meta,
        text: [title, meta.description, meta.summary, preview].filter(Boolean).join('\n')
      };
    });
};

const collectSocialMaterials = () => {
  const rankedDir = path.join(root, 'raw-social-rank');
  const rankedSupportFiles = new Set(['README.md', 'raw-social-rank-index.md']);
  const rankedNames = fs.existsSync(rankedDir)
    ? new Set(fs.readdirSync(rankedDir)
      .filter((name) => name.endsWith('.md'))
      .filter((name) => !rankedSupportFiles.has(name) && !/^batch_\d+\.md$/i.test(name)))
    : new Set();

  return collectMarkdownMaterials('raw-social', 'social', 'social', { skip: ['INDEX.md'] })
    .map((material) => {
      const name = path.basename(material.source_path || '');
      if (!rankedNames.has(name)) return material;
      return {
        ...material,
        rank_seed: true,
        alternate_source_paths: [`raw-social-rank/${name}`],
        meta: {
          ...material.meta,
          rank_seed: 'true',
          rank_seed_source: `raw-social-rank/${name}`
        },
        text: [
          material.text,
          'rank seed social material',
          `rank seed source raw-social-rank/${name}`
        ].filter(Boolean).join('\n')
      };
    });
};

const collectGithubMaterials = () => {
  const analysis = readJson(path.join(root, 'analysis/github-project-data-analysis.json'), {});
  const frontier = readJson(path.join(root, 'analysis/frontier-value-queue.json'), {});
  const starGrowth = readJson(path.join(root, 'analysis/github-star-growth-ranking.json'), {});
  const rawTimestamp = readJson(path.join(root, 'output/raw-github-timestamp-index.json'), {});
  const frontierByRepo = new Map((frontier.items || []).map((row) => [normalizeRepo(row.repo), row]));
  const starByRepo = new Map((starGrowth.ranking || []).map((row) => [normalizeRepo(row.repo), row]));
  const rawTimeByRepo = new Map((rawTimestamp.records || []).map((row) => [normalizeRepo(row.repo), row]));
  const analyzedByRepo = new Map((analysis.analyzed_projects || []).map((row) => [normalizeRepo(row.repo), row]));
  const rankingByRepo = new Map((analysis.recency_weighted_project_ranking || []).map((row) => [normalizeRepo(row.repo), row]));
  const rawByRepo = new Map((analysis.raw_classified_repositories || []).map((row) => [normalizeRepo(row.repo), row]));
  const repos = new Set([...rawByRepo.keys(), ...analyzedByRepo.keys(), ...frontierByRepo.keys(), ...starByRepo.keys()]);

  return [...repos].sort().map((repo) => {
    const raw = rawByRepo.get(repo) || {};
    const analyzed = analyzedByRepo.get(repo) || {};
    const ranking = rankingByRepo.get(repo) || {};
    const frontierRow = frontierByRepo.get(repo) || null;
    const starRow = starByRepo.get(repo) || null;
    const rawTime = rawTimeByRepo.get(repo) || {};
    const frontierReport = frontierReportPathForRepo(repo);
    const localPath = localRepoMirrorPathForRepo(repo);
    const merged = {
      ...raw,
      ...analyzed,
      analysis_report: frontierReport,
      localPath,
      scores: ranking.scores || {},
      raw_time_slice: analyzed.raw_time_slice || raw.time_slice || rawTime.time_slice || null,
      raw_file: analyzed.raw_file || rawTime.file || null
    };
    const sourcePath = merged.raw_file || rawTime.file || null;
    let rawPreview = '';
    if (sourcePath && fs.existsSync(path.join(root, sourcePath))) {
      rawPreview = readMaterialFile(path.join(root, sourcePath), 4000).preview;
    }
    return {
      id: `github:${repo}`,
      type: 'github',
      title: analyzed.name || raw.name || repo,
      url: analyzed.url || raw.url || `https://github.com/${repo}`,
      source_path: sourcePath,
      meta: { repo },
      github: merged,
      frontier: frontierRow,
      starGrowth: starRow,
      created_at: merged.created_at || starRow?.created_at || null,
      pushed_at: merged.github_pushed_at || merged.lastPushed || starRow?.pushed_at || null,
      text: [
        repo,
        analyzed.name,
        raw.final_category,
        analyzed.category,
        analyzed.pattern,
        ...(analyzed.tags || []),
        raw.function_tag,
        raw.base_theme,
        raw.evidence,
        raw.description,
        analyzed.description,
        analyzed.classification_evidence,
        frontierRow?.why,
        rawPreview
      ].filter(Boolean).join('\n')
    };
  });
};

const collectMaterials = (source) => {
  const groups = [];
  if (source === 'all' || source === 'github') groups.push(...collectGithubMaterials());
  if (source === 'all' || source === 'papers') {
    groups.push(...collectMarkdownMaterials('raw-papers', 'paper', 'paper', { skip: ['index.md', 'timestamp-audit.md'] }));
  }
  if (source === 'all' || source === 'social') {
    groups.push(...collectSocialMaterials());
  }
  if (source === 'all' || source === 'blogs') {
    groups.push(...collectMarkdownMaterials('raw-blogs', 'blog', 'blog'));
  }
  return groups;
};

const scoreMaterial = (material) => {
  const text = String(material.text || '').toLowerCase();
  const values = {};
  const tagEvidence = {};
  for (const tag of VALUE_TAGS) {
    const [value, note] = tag.detect({ material, text });
    const discrete = value > 0 ? 1 : value < 0 ? -1 : 0;
    values[tag.id] = discrete;
    if (discrete !== 0) tagEvidence[tag.id] = [evidence(material.source_path || material.url || material.id, note)];
  }

  const rawSum = VALUE_TAGS.reduce((sum, tag) => sum + values[tag.id] * tag.weight, 0);
  const maxAbs = VALUE_TAGS.reduce((sum, tag) => sum + Math.abs(tag.weight), 0);
  const valueScore = clamp(50 + 50 * (rawSum / maxAbs));
  const nonzero = Object.values(values).filter(Boolean).length;
  const contributions = Object.fromEntries(VALUE_TAGS.map((tag) => [tag.id, values[tag.id] * tag.weight]));
  const positive = Object.values(contributions).filter((value) => value > 0).length;
  const negative = Object.values(contributions).filter((value) => value < 0).length;
  const confidence = clamp((nonzero / VALUE_TAGS.length) * 100);
  const className =
    valueScore >= 68 && negative <= 1
      ? 'high-value-candidate'
      : valueScore <= 58 || negative >= 3
        ? 'low-signal-or-risk'
        : 'needs-review';
  return {
    values,
    contributions,
    tagEvidence,
    raw_score: round(rawSum),
    value_score: round(valueScore),
    confidence: round(confidence),
    nonzero_tags: nonzero,
    positive_tags: positive,
    negative_tags: negative,
    value_class: className
  };
};

const signatureFor = (values) => FEATURE_IDS.map((id) => (values[id] > 0 ? '+' : values[id] < 0 ? '-' : '0')).join('');

const bandsFor = (signature, bandSize) => {
  const bands = [];
  for (let start = 0; start < signature.length; start += bandSize) {
    const chars = signature.slice(start, start + bandSize);
    if (!chars || /^0+$/.test(chars)) continue;
    const index = Math.floor(start / bandSize);
    const features = FEATURE_IDS.slice(start, start + bandSize);
    bands.push({
      band: index,
      features,
      chars,
      key: `v0:b${index}:${sha1(`${index}:${features.join(',')}:${chars}`).slice(0, 16)}`
    });
  }
  return bands;
};

class UnionFind {
  constructor(ids) {
    this.parent = new Map(ids.map((id) => [id, id]));
    this.rank = new Map(ids.map((id) => [id, 0]));
  }
  find(id) {
    const parent = this.parent.get(id);
    if (parent === id) return id;
    const rootId = this.find(parent);
    this.parent.set(id, rootId);
    return rootId;
  }
  union(a, b) {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra === rb) return;
    const rankA = this.rank.get(ra) || 0;
    const rankB = this.rank.get(rb) || 0;
    if (rankA < rankB) this.parent.set(ra, rb);
    else if (rankA > rankB) this.parent.set(rb, ra);
    else {
      this.parent.set(rb, ra);
      this.rank.set(ra, rankA + 1);
    }
  }
}

const ternarySimilarity = (a, b) => {
  let union = 0;
  let matches = 0;
  let opposite = 0;
  for (const id of FEATURE_IDS) {
    const va = a.values[id] || 0;
    const vb = b.values[id] || 0;
    if (va === 0 && vb === 0) continue;
    union += 1;
    if (va === vb) matches += 1;
    else if (va === -vb) opposite += 1;
  }
  if (!union) return { similarity: 0, active_union: 0, matches: 0, opposite };
  return {
    similarity: (matches - opposite * 0.35) / union,
    active_union: union,
    matches,
    opposite
  };
};

const summarizeCluster = (clusterId, members, byId) => {
  const rows = members.map((id) => byId.get(id)).filter(Boolean);
  const typeCounts = rows.reduce((acc, row) => {
    acc[row.type] = (acc[row.type] || 0) + 1;
    return acc;
  }, {});
  const classCounts = rows.reduce((acc, row) => {
    acc[row.score.value_class] = (acc[row.score.value_class] || 0) + 1;
    return acc;
  }, {});
  const averages = Object.fromEntries(
    FEATURE_IDS.map((id) => [id, round(average(rows.map((row) => row.score.values[id])), 3)])
  );
  const topTags = Object.entries(averages)
    .filter(([, value]) => Math.abs(value) >= 0.35)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, 8)
    .map(([id, value]) => ({
      id,
      average: value,
      label: VALUE_TAGS.find((tag) => tag.id === id)?.label
    }));
  const ranked = [...rows].sort((a, b) => b.score.value_score - a.score.value_score || a.id.localeCompare(b.id));
  const label = topTags.length ? topTags.map((tag) => `${tag.average > 0 ? '+' : '-'}${tag.id}`).slice(0, 3).join(' / ') : 'mixed-value-neighborhood';
  return {
    cluster_id: clusterId,
    label,
    size: rows.length,
    type_counts: typeCounts,
    value_class_counts: classCounts,
    score_avg: round(average(rows.map((row) => row.score.value_score))),
    confidence_avg: round(average(rows.map((row) => row.score.confidence))),
    top_tags: topTags,
    representatives: ranked.slice(0, 12).map((row) => ({
      id: row.id,
      type: row.type,
      title: row.title,
      url: row.url,
      value_score: row.score.value_score,
      value_class: row.score.value_class,
      source_path: row.source_path
    }))
  };
};

const buildIndex = (materials, args) => {
  const rows = materials.map((material) => {
    const score = scoreMaterial(material);
    const signature = signatureFor(score.values);
    const bands = bandsFor(signature, args.bandSize);
    const sourceFile = material.source_path ? path.join(root, material.source_path) : null;
    const sourceHash = sourceFile && fs.existsSync(sourceFile)
      ? sha1(fs.readFileSync(sourceFile))
      : sha1(JSON.stringify({ text: material.text, github: material.github, meta: material.meta }));
    const fingerprint = sha1(JSON.stringify({
      tag_version: TAG_VERSION,
      source_hash: sourceHash,
      frontier: material.frontier?.frontier_value,
      star_growth: material.starGrowth?.new_stars_year
    }));
    return {
      id: material.id,
      type: material.type,
      title: material.title,
      url: material.url,
      source_path: material.source_path,
      fingerprint,
      signature,
      signature_hash: sha1(signature).slice(0, 20),
      bands,
      score,
      evidence_refs: {
        github_report: material.github?.report || null,
        analysis_report: material.github?.analysis_report || null,
        public_report: material.github?.public_report || material.frontier?.evidence_chain?.public_report || null,
        raw_file: material.github?.raw_file || material.source_path || null,
        rank_seed: material.rank_seed || null,
        alternate_source_paths: material.alternate_source_paths || [],
        frontier_rank: material.frontier?.frontier_rank || null,
        star_growth_rank: material.starGrowth?.coverage_qualified_rank || material.starGrowth?.fetch_priority_rank || null
      }
    };
  });

  const byId = new Map(rows.map((row) => [row.id, row]));
  const buckets = new Map();
  for (const row of rows) {
    for (const band of row.bands) {
      const bucket = buckets.get(band.key) || {
        key: band.key,
        band: band.band,
        features: band.features,
        chars: band.chars,
        members: []
      };
      bucket.members.push(row.id);
      buckets.set(band.key, bucket);
    }
  }

  const uf = new UnionFind(rows.map((row) => row.id));
  const skippedBroadBuckets = [];
  let candidatePairs = 0;
  let acceptedPairs = 0;
  for (const bucket of buckets.values()) {
    if (bucket.members.length < 2) continue;
    if (bucket.members.length > args.maxBucketMembers) {
      skippedBroadBuckets.push({ key: bucket.key, band: bucket.band, size: bucket.members.length, features: bucket.features });
      continue;
    }
    for (let i = 0; i < bucket.members.length; i += 1) {
      for (let j = i + 1; j < bucket.members.length; j += 1) {
        const a = byId.get(bucket.members[i]);
        const b = byId.get(bucket.members[j]);
        const sim = ternarySimilarity(a.score, b.score);
        candidatePairs += 1;
        if (sim.active_union >= 5 && sim.similarity >= args.threshold) {
          uf.union(a.id, b.id);
          acceptedPairs += 1;
        }
      }
    }
  }

  const groups = new Map();
  for (const row of rows) {
    const group = uf.find(row.id);
    const members = groups.get(group) || [];
    members.push(row.id);
    groups.set(group, members);
  }
  const clusters = [...groups.values()]
    .filter((members) => members.length >= 2)
    .map((members, index) => summarizeCluster(`vlsh-${String(index + 1).padStart(4, '0')}`, members, byId))
    .sort((a, b) => b.size - a.size || b.score_avg - a.score_avg);
  clusters.forEach((cluster, index) => {
    cluster.cluster_id = `vlsh-${String(index + 1).padStart(4, '0')}`;
  });

  const bucketRows = [...buckets.values()]
    .map((bucket) => ({
      ...bucket,
      size: bucket.members.length,
      sample_members: bucket.members.slice(0, 20)
    }))
    .sort((a, b) => b.size - a.size || a.key.localeCompare(b.key));

  return {
    rows,
    buckets: bucketRows,
    clusters,
    stats: {
      candidate_pairs_scanned: candidatePairs,
      accepted_pairs: acceptedPairs,
      skipped_broad_buckets: skippedBroadBuckets
    }
  };
};

const diffAgainstPreviousManifest = (manifestPath, rows) => {
  const previous = readJson(manifestPath, { items: {} }) || { items: {} };
  const prevItems = previous.items || {};
  const nextItems = Object.fromEntries(rows.map((row) => [row.id, {
    type: row.type,
    source_path: row.source_path,
    fingerprint: row.fingerprint,
    signature_hash: row.signature_hash,
    value_score: row.score.value_score,
    value_class: row.score.value_class
  }]));
  const nextIds = new Set(Object.keys(nextItems));
  const prevIds = new Set(Object.keys(prevItems));
  const added = [...nextIds].filter((id) => !prevIds.has(id));
  const removed = [...prevIds].filter((id) => !nextIds.has(id));
  const changed = [...nextIds].filter((id) => prevIds.has(id) && prevItems[id].fingerprint !== nextItems[id].fingerprint);
  const unchanged = [...nextIds].filter((id) => prevIds.has(id) && prevItems[id].fingerprint === nextItems[id].fingerprint);
  return {
    previous_generated_at: previous.generated_at || null,
    added,
    changed,
    unchanged_count: unchanged.length,
    removed,
    nextItems
  };
};

const topRows = (rows, filter, limit = 25) =>
  rows
    .filter(filter)
    .sort((a, b) => b.score.value_score - a.score.value_score || b.score.confidence - a.score.confidence || a.id.localeCompare(b.id))
    .slice(0, limit);

const riskRows = (rows, limit = 25) =>
  rows
    .filter((row) => row.score.value_class === 'low-signal-or-risk')
    .sort((a, b) =>
      b.score.negative_tags - a.score.negative_tags ||
      a.score.value_score - b.score.value_score ||
      b.score.confidence - a.score.confidence ||
      a.id.localeCompare(b.id)
    )
    .slice(0, limit);

const renderTable = (headers, rows) => {
  const lines = [];
  lines.push(`| ${headers.join(' | ')} |`);
  lines.push(`| ${headers.map((header) => (header.match(/score|count|rank|size/i) ? '---:' : '---')).join(' | ')} |`);
  for (const row of rows) lines.push(`| ${row.join(' | ')} |`);
  return lines.join('\n');
};

const link = (label, url) => (url ? `[${String(label).replace(/\|/g, '/')}](${url})` : String(label).replace(/\|/g, '/'));
const displayClass = (valueClass) => ({
  'high-value-candidate': 'priority-review',
  'needs-review': 'needs-review',
  'low-signal-or-risk': 'repair-or-avoid-citing'
}[valueClass] || valueClass);

const renderMarkdown = ({ summary, rows, clusters, buckets, incremental }) => {
  const classCounts = summary.value_class_counts;
  const typeCounts = summary.type_counts;
  const high = topRows(rows, (row) => row.score.value_class === 'high-value-candidate', 20);
  const risk = riskRows(rows, 20);
  const md = [];
  md.push('# Value LSH Index');
  md.push('');
  md.push(`> Generated: ${summary.generated_at}. Discrete value-tag LSH index for GitHub projects, papers, social/X captures, and blogs.`);
  md.push('');
  md.push('## One Sentence');
  md.push('');
  md.push('Value LSH turns comparison into a fast discrete scan: each material gets a `-1/0/+1` value vector, the vector is split into local hash bands, and similar value neighborhoods become clusters for deeper evidence review.');
  md.push('');
  md.push('## Three Sentences');
  md.push('');
  md.push(`This run scanned ${summary.total_materials} materials across GitHub, papers, social/X, and blogs, then generated ${summary.total_buckets} non-empty LSH buckets and ${summary.total_clusters} clusters. It does not pretend the hash is the final truth: the hash only finds near-neighbors, while the triage score and evidence refs keep the review queue auditable. Incremental state is tracked in \`data-engine/value-lsh-index/manifest.json\`: ${incremental.added.length} added, ${incremental.changed.length} changed, ${incremental.removed.length} removed, ${incremental.unchanged_count} unchanged versus the previous run.`);
  md.push('');
  md.push('## Why Discrete LSH');
  md.push('');
  md.push('LSH works well here because the first useful comparison is not a delicate continuous score; it is a set of separating lines. For each value line, the material is placed on `+1` evidence-present, `0` unknown/neutral, or `-1` counter-signal/risk. Repeating many such lines creates a sparse signature, and shared local bands quickly answer "what else looks like this?" before humans or agents spend expensive deep-reading time.');
  md.push('');
  md.push('## Input Deduplication');
  md.push('');
  md.push('`raw-social-rank` is treated as a ranked seed subset, not a second corpus. Matching files are folded into the canonical `raw-social` row with `evidence_refs.rank_seed = true` and `alternate_source_paths`; support files such as `README.md`, `raw-social-rank-index.md`, and `batch_*.md` are excluded from the material count.');
  md.push('');
  md.push('```mermaid');
  md.push('flowchart LR');
  md.push('  RAW["raw / processed materials"] --> TAGS["discrete value tags<br/>-1 / 0 / +1"]');
  md.push('  TAGS --> MATRIX["value matrix"]');
  md.push('  MATRIX --> BANDS["LSH bands"]');
  md.push('  BANDS --> BUCKETS["near-neighbor buckets"]');
  md.push('  BUCKETS --> CLUSTERS["value clusters"]');
  md.push('  CLUSTERS --> REVIEW["evidence review + taxonomy iteration"]');
  md.push('  REVIEW --> TAGS');
  md.push('```');
  md.push('');
  md.push('## Run Summary');
  md.push('');
  md.push(renderTable(['metric', 'value'], [
    ['materials', summary.total_materials],
    ['value tags', summary.value_tag_count],
    ['LSH buckets', summary.total_buckets],
    ['clusters', summary.total_clusters],
    ['candidate pairs scanned', summary.lsh_stats.candidate_pairs_scanned],
    ['accepted pairs', summary.lsh_stats.accepted_pairs],
    ['broad buckets skipped', summary.lsh_stats.skipped_broad_buckets.length],
    ['tag version', summary.tag_version]
  ]));
  md.push('');
  md.push('## Type Counts');
  md.push('');
  md.push(renderTable(['type', 'count'], Object.entries(typeCounts).sort((a, b) => b[1] - a[1])));
  md.push('');
  md.push('## Review Class Counts');
  md.push('');
  md.push(renderTable(['class', 'count'], Object.entries(classCounts).sort((a, b) => b[1] - a[1]).map(([key, count]) => [displayClass(key), count])));
  md.push('');
  md.push('## Class Boundary');
  md.push('');
  md.push('- `high-value-candidate`: legacy machine label for priority-review candidates; triage score >= 68 and no more than one negative contribution line.');
  md.push('- `needs-review`: mixed or incomplete evidence that should stay in the comparison pool.');
  md.push('- `low-signal-or-risk`: triage score <= 58 or at least three negative contribution lines; this means current-priority evidence is weak or risky, not that the material is permanently useless.');
  md.push('');
  md.push('## Top Priority Review Candidates');
  md.push('');
  md.push(renderTable(
    ['rank', 'material', 'type', 'triage score', 'tag coverage', 'review class', 'source'],
    high.map((row, index) => [
      index + 1,
      link(row.title || row.id, row.url),
      row.type,
      row.score.value_score,
      row.score.confidence,
      displayClass(row.score.value_class),
      row.source_path || ''
    ])
  ));
  md.push('');
  md.push('## Risk / Contradiction Queue');
  md.push('');
  md.push(renderTable(
    ['rank', 'material', 'type', 'triage score', 'negative tags', 'tag coverage', 'review class', 'source'],
    risk.map((row, index) => [
      index + 1,
      link(row.title || row.id, row.url),
      row.type,
      row.score.value_score,
      row.score.negative_tags,
      row.score.confidence,
      displayClass(row.score.value_class),
      row.source_path || ''
    ])
  ));
  md.push('');
  md.push('## Largest Facet-Vector Clusters');
  md.push('');
  md.push(renderTable(
    ['cluster', 'size', 'triage score avg', 'types', 'top tags', 'representatives'],
    clusters.slice(0, 20).map((cluster) => [
      cluster.cluster_id,
      cluster.size,
      cluster.score_avg,
      Object.entries(cluster.type_counts).map(([key, value]) => `${key}:${value}`).join(', '),
      cluster.top_tags.map((tag) => `${tag.average > 0 ? '+' : '-'}${tag.id}`).join(', '),
      cluster.representatives.slice(0, 3).map((row) => row.title || row.id).join('; ')
    ])
  ));
  md.push('');
  md.push('## Largest LSH Buckets');
  md.push('');
  md.push(renderTable(
    ['bucket', 'size', 'band', 'features', 'chars'],
    buckets.slice(0, 15).map((bucket) => [
      bucket.key,
      bucket.size,
      bucket.band,
      bucket.features.join(', '),
      bucket.chars
    ])
  ));
  md.push('');
  md.push('## Value Lines');
  md.push('');
  md.push(renderTable(
    ['tag', 'weight', 'line'],
    VALUE_TAGS.map((tag) => [tag.id, tag.weight, tag.line])
  ));
  md.push('');
  md.push('## Incremental Rule');
  md.push('');
  md.push('Each material stores a fingerprint made from its local source hash, current tag version, frontier score, and star-growth signal. A scheduled or manual run can rebuild the whole matrix cheaply while still reporting added/changed/removed rows; downstream deep review only needs to inspect changed signatures and clusters whose membership changed.');
  md.push('');
  md.push('## Trust Chain');
  md.push('');
  md.push('- [KNOWN] GitHub project metadata comes from `analysis/github-project-data-analysis.json` and is joined with `analysis/frontier-value-queue.json`, `analysis/github-star-growth-ranking.json`, and `output/raw-github-timestamp-index.json` when present.');
  md.push('- [KNOWN] Paper/social/blog rows are read from immutable `raw-*` markdown files; the script does not edit raw files.');
  md.push('- [INFERRED] Value tags are heuristic separating lines for triage, not final scientific judgements.');
  md.push('- [INFERRED] LSH buckets are approximate near-neighbor recall surfaces; clusters require evidence review before reader-facing claims.');
  md.push('- [UNVERIFIED] Remote issue/PR/release signals are only included when they are already present in local processed inputs; live network refresh remains a later enrichment step.');
  md.push('');
  return md.join('\n');
};

const main = () => {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage());
    return;
  }
  ensureDir(args.outDir);
  const manifestPath = path.join(args.outDir, 'manifest.json');
  let materials = collectMaterials(args.source);
  if (args.limit) materials = materials.slice(0, args.limit);
  const { rows, buckets, clusters, stats } = buildIndex(materials, args);
  const incremental = diffAgainstPreviousManifest(manifestPath, rows);
  const typeCounts = rows.reduce((acc, row) => {
    acc[row.type] = (acc[row.type] || 0) + 1;
    return acc;
  }, {});
  const classCounts = rows.reduce((acc, row) => {
    acc[row.score.value_class] = (acc[row.score.value_class] || 0) + 1;
    return acc;
  }, {});
  const summary = {
    generated_at: new Date().toISOString(),
    source: args.source,
    total_materials: rows.length,
    value_tag_count: VALUE_TAGS.length,
    tag_version: TAG_VERSION,
    band_size: args.bandSize,
    threshold: args.threshold,
    type_counts: typeCounts,
    value_class_counts: classCounts,
    total_buckets: buckets.length,
    total_clusters: clusters.length,
    score_average: round(average(rows.map((row) => row.score.value_score))),
    confidence_average: round(average(rows.map((row) => row.score.confidence))),
    lsh_stats: stats,
    incremental: {
      previous_generated_at: incremental.previous_generated_at,
      added: incremental.added.length,
      changed: incremental.changed.length,
      unchanged: incremental.unchanged_count,
      removed: incremental.removed.length
    }
  };

  writeJson(path.join(args.outDir, 'value-tags.json'), {
    generated_at: summary.generated_at,
    tag_version: TAG_VERSION,
    tags: VALUE_TAGS.map(({ detect, ...tag }) => tag)
  });
  writeText(path.join(args.outDir, 'value-matrix.jsonl'), rows.map((row) => JSON.stringify({
    id: row.id,
    type: row.type,
    title: row.title,
    url: row.url,
    source_path: row.source_path,
    value_score: row.score.value_score,
    confidence: row.score.confidence,
    value_class: row.score.value_class,
    values: row.score.values,
    evidence_refs: row.evidence_refs
  })).join('\n'));
  writeText(path.join(args.outDir, 'signatures.jsonl'), rows.map((row) => JSON.stringify({
    id: row.id,
    type: row.type,
    signature: row.signature,
    signature_hash: row.signature_hash,
    bands: row.bands,
    value_score: row.score.value_score,
    value_class: row.score.value_class
  })).join('\n'));
  writeJson(path.join(args.outDir, 'buckets.json'), {
    generated_at: summary.generated_at,
    band_size: args.bandSize,
    total: buckets.length,
    buckets
  });
  writeJson(path.join(args.outDir, 'clusters.json'), {
    generated_at: summary.generated_at,
    threshold: args.threshold,
    total: clusters.length,
    clusters
  });
  writeText(path.join(args.outDir, 'value-matrix.csv'), [
    ['id', 'type', 'title', 'value_score', 'confidence', 'value_class', ...FEATURE_IDS].map(csvCell).join(','),
    ...rows.map((row) => [
      row.id,
      row.type,
      row.title,
      row.score.value_score,
      row.score.confidence,
      row.score.value_class,
      ...FEATURE_IDS.map((id) => row.score.values[id])
    ].map(csvCell).join(','))
  ].join('\n'));

  const manifest = {
    generated_at: summary.generated_at,
    source: args.source,
    tag_version: TAG_VERSION,
    band_size: args.bandSize,
    threshold: args.threshold,
    summary: summary.incremental,
    items: incremental.nextItems
  };
  writeJson(manifestPath, manifest);

  const analysis = {
    generated_at: summary.generated_at,
    method: {
      name: 'discrete_value_lsh_v0',
      summary: 'Ternary value tags (-1/0/+1) are split into local hash bands for approximate near-neighbor recall and cluster discovery.',
      source: args.source,
      tag_version: TAG_VERSION,
      band_size: args.bandSize,
      threshold: args.threshold
    },
    summary,
    value_tags: VALUE_TAGS.map(({ detect, ...tag }) => tag),
    top_high_value_candidates: topRows(rows, (row) => row.score.value_class === 'high-value-candidate', 40).map((row) => ({
      id: row.id,
      type: row.type,
      title: row.title,
      url: row.url,
      source_path: row.source_path,
      score: row.score,
      evidence_refs: row.evidence_refs
    })),
    low_signal_or_risk_queue: riskRows(rows, 40).map((row) => ({
      id: row.id,
      type: row.type,
      title: row.title,
      url: row.url,
      source_path: row.source_path,
      score: row.score,
      evidence_refs: row.evidence_refs
    })),
    clusters: clusters.slice(0, 100),
    largest_buckets: buckets.slice(0, 100),
    changed_items: incremental.changed.slice(0, 200),
    added_items: incremental.added.slice(0, 200),
    removed_items: incremental.removed.slice(0, 200)
  };
  writeJson(defaultAnalysisJson, analysis);
  writeText(defaultAnalysisMd, renderMarkdown({ summary, rows, clusters, buckets, incremental }));
  console.log(`Generated value LSH index: ${rows.length} materials, ${buckets.length} buckets, ${clusters.length} clusters`);
  console.log(`Outputs: ${path.relative(root, args.outDir)}, analysis/value-lsh-index.{json,md}`);
};

main();
