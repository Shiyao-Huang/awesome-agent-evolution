---
repo: tzussman/openevolve
url: https://github.com/tzussman/openevolve
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - tzussman/openevolve: Open-source implementation of AlphaEvolve · GitHub

**Source**: https://github.com/tzussman/openevolve

---

[Skip to content](https://github.com/tzussman/openevolve#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[tzussman](https://github.com/tzussman)

/
**[openevolve](https://github.com/tzussman/openevolve)**

Public

       forked from [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve)

- [Notifications](https://github.com/login?return_to=%2Ftzussman%2Fopenevolve)You must be signed in to change notification settings
- [Fork
    0](https://github.com/login?return_to=%2Ftzussman%2Fopenevolve)
- 
[Star
          0](https://github.com/login?return_to=%2Ftzussman%2Fopenevolve)

[https://github.com/tzussman/openevolve](https://github.com/tzussman/openevolve)

[Branches](https://github.com/tzussman/openevolve/branches)[Tags](https://github.com/tzussman/openevolve/tags)

[https://github.com/tzussman/openevolve/branches](https://github.com/tzussman/openevolve/branches)[https://github.com/tzussman/openevolve/tags](https://github.com/tzussman/openevolve/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History820 Commits820 Commits |  |  |  |
| .github | .github |  |  |
| configs | configs |  |  |
| examples | examples |  |  |
| openevolve | openevolve |  |  |
| scripts | scripts |  |  |
| tests | tests |  |  |
| .gitignore | .gitignore |  |  |
| .pre-commit-config.yaml | .pre-commit-config.yaml |  |  |
| CLAUDE.md | CLAUDE.md |  |  |
| CONTRIBUTING.md | CONTRIBUTING.md |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| MANIFEST.in | MANIFEST.in |  |  |
| Makefile | Makefile |  |  |
| README.md | README.md |  |  |
| openevolve-architecture.png | openevolve-architecture.png |  |  |
| openevolve-logo.png | openevolve-logo.png |  |  |
| openevolve-run.py | openevolve-run.py |  |  |
| openevolve-visualizer.png | openevolve-visualizer.png |  |  |
| pyproject.toml | pyproject.toml |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# OpenEvolve

[https://github.com/tzussman/openevolve#openevolve](https://github.com/tzussman/openevolve#openevolve)

[https://github.com/tzussman/openevolve/blob/main/openevolve-logo.png](https://github.com/tzussman/openevolve/blob/main/openevolve-logo.png)

**🧬 The most advanced open-source evolutionary coding agent**

*Turn your LLMs into autonomous code optimizers that discover breakthrough algorithms*

[https://github.com/algorithmicsuperintelligence/openevolve/stargazers](https://github.com/algorithmicsuperintelligence/openevolve/stargazers)[https://pypi.org/project/openevolve/](https://pypi.org/project/openevolve/)[https://pypi.org/project/openevolve/](https://pypi.org/project/openevolve/)[https://github.com/algorithmicsuperintelligence/openevolve/blob/main/LICENSE](https://github.com/algorithmicsuperintelligence/openevolve/blob/main/LICENSE)

[🚀 Quick Start](https://github.com/tzussman/openevolve#quick-start) • [Examples](https://github.com/tzussman/openevolve#examples-gallery) • [System Messages](https://github.com/tzussman/openevolve#crafting-effective-system-messages) • [Discussions](https://github.com/algorithmicsuperintelligence/openevolve/discussions)

*From random search to state-of-the-art: Watch your code evolve in real-time*

---

## Why OpenEvolve?

[https://github.com/tzussman/openevolve#why-openevolve](https://github.com/tzussman/openevolve#why-openevolve)

| Autonomous Discovery
LLMs don't just optimize—they discover entirely new algorithms. No human guidance needed. | Proven Results
2-3x speedups on real hardware. State-of-the-art circle packing. Breakthrough optimizations. | Research Grade
Full reproducibility, extensive evaluation pipelines, and scientific rigor built-in. |
|---|---|---|

**OpenEvolve vs Manual Optimization:**

| Aspect | Manual Optimization | OpenEvolve |
|---|---|---|
| Time to Solution | Days to weeks | Hours |
| Exploration Breadth | Limited by human creativity | Unlimited LLM creativity |
| Reproducibility | Hard to replicate | Fully deterministic |
| Multi-objective | Complex tradeoffs | Automatic Pareto optimization |
| Scaling | Doesn't scale | Parallel evolution across islands |

## Proven Achievements

[https://github.com/tzussman/openevolve#proven-achievements](https://github.com/tzussman/openevolve#proven-achievements)

| Domain | Achievement | Example |
|---|---|---|
| GPU Optimization | Hardware-optimized kernel discovery | MLX Metal Kernels |
| Mathematical | State-of-the-art circle packing (n=26) | Circle Packing |
| Algorithm Design | Adaptive sorting algorithms | Rust Adaptive Sort |
| Scientific Computing | Automated filter design | Signal Processing |
| Multi-Language | Python, Rust, R, Metal shaders | All Examples |

## 🚀 Quick Start

[https://github.com/tzussman/openevolve#-quick-start](https://github.com/tzussman/openevolve#-quick-start)

Get from zero to evolving code in **30 seconds**:

```
# Install OpenEvolve
pip install openevolve

# The example uses Google Gemini by default (free tier available)
# Get your API key from: https://aistudio.google.com/apikey
export OPENAI_API_KEY="your-gemini-api-key"  # Yes, use OPENAI_API_KEY env var

# Run your first evolution!
python openevolve-run.py examples/function_minimization/initial_program.py \
  examples/function_minimization/evaluator.py \
  --config examples/function_minimization/config.yaml \
  --iterations 50
```

**Note:** The example config uses Gemini by default, but you can use any OpenAI-compatible provider by modifying the `config.yaml`. See the [configs](https://github.com/tzussman/openevolve/blob/main/configs) for full configuration options.

### **Library Usage**

[https://github.com/tzussman/openevolve#library-usage](https://github.com/tzussman/openevolve#library-usage)

OpenEvolve can be used as a library without any external files:

```
from openevolve import run_evolution, evolve_function

# Evolution with inline code (no files needed!)
result = run_evolution(
    initial_program='''
    def fibonacci(n):
        if n <= 1: return n
        return fibonacci(n-1) + fibonacci(n-2)
    ''',
    evaluator=lambda path: {"score": benchmark_fib(path)},
    iterations=100
)

# Evolve Python functions directly
def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr)-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j] 
    return arr

result = evolve_function(
    bubble_sort,
    test_cases=[([3,1,2], [1,2,3]), ([5,2,8], [2,5,8])],
    iterations=50
)
print(f"Evolved sorting algorithm: {result.best_code}")
```

**Prefer Docker?** See the [Installation & Setup](https://github.com/tzussman/openevolve#installation--setup) section for Docker options.

## See It In Action

[https://github.com/tzussman/openevolve#see-it-in-action](https://github.com/tzussman/openevolve#see-it-in-action)
**Circle Packing: From Random to State-of-the-Art**

**Watch OpenEvolve discover optimal circle packing in real-time:**

| Generation 1 | Generation 190 | Generation 460 (Final) |
|---|---|---|
|  |  |  |
| Random placement | Learning structure | State-of-the-art result |

**Result**: Matches published benchmarks for n=26 circle packing problem.

**GPU Kernel Evolution**

**Before (Baseline)**:

```
// Standard attention implementation
kernel void attention_baseline(/* ... */) {
    // Generic matrix multiplication
    float sum = 0.0;
    for (int i = 0; i < seq_len; i++) {
        sum += query[tid] * key[i];
    }
}
```

**After Evolution (2.8x faster)**:

```
// OpenEvolve discovered optimization
kernel void attention_evolved(/* ... */) {
    // Hardware-aware tiling + unified memory optimization
    threadgroup float shared_mem[256];
    // ... evolved algorithm exploiting Apple Silicon architecture
}
```

**Performance Impact**: 2.8x speedup on Apple M1 Pro, maintaining numerical accuracy.

## How OpenEvolve Works

[https://github.com/tzussman/openevolve#how-openevolve-works](https://github.com/tzussman/openevolve#how-openevolve-works)

OpenEvolve implements a sophisticated **evolutionary coding pipeline** that goes far beyond simple optimization:

[https://github.com/tzussman/openevolve/blob/main/openevolve-architecture.png](https://github.com/tzussman/openevolve/blob/main/openevolve-architecture.png)

### **Core Innovation**: MAP-Elites + LLMs

[https://github.com/tzussman/openevolve#core-innovation-map-elites--llms](https://github.com/tzussman/openevolve#core-innovation-map-elites--llms)

- **Quality-Diversity Evolution**: Maintains diverse populations across feature dimensions
- **Island-Based Architecture**: Multiple populations prevent premature convergence
- **LLM Ensemble**: Multiple models with intelligent fallback strategies
- **Artifact Side-Channel**: Error feedback improves subsequent generations

### **Advanced Features**

[https://github.com/tzussman/openevolve#advanced-features](https://github.com/tzussman/openevolve#advanced-features)
**Scientific Reproducibility**
- **Comprehensive Seeding**: Every component (LLM, database, evaluation) is seeded
- **Default Seed=42**: Immediate reproducible results out of the box
- **Deterministic Evolution**: Exact reproduction of runs across machines
- **Component Isolation**: Hash-based isolation prevents cross-contamination

**Advanced LLM Integration**
- **Universal API**: Works with OpenAI, Google, local models, and proxies
- **Intelligent Ensembles**: Weighted combinations with sophisticated fallback
- **Test-Time Compute**: Enhanced reasoning through proxy systems (see [OptiLLM setup](https://github.com/tzussman/openevolve#llm-provider-setup))
- **Plugin Ecosystem**: Support for advanced reasoning plugins

**Evolution Algorithm Innovations**
- **Double Selection**: Different programs for performance vs inspiration
- **Adaptive Feature Dimensions**: Custom quality-diversity metrics
- **Migration Patterns**: Ring topology with controlled gene flow
- **Multi-Strategy Sampling**: Elite, diverse, and exploratory selection

## Perfect For

[https://github.com/tzussman/openevolve#perfect-for](https://github.com/tzussman/openevolve#perfect-for)

| Use Case | Why OpenEvolve Excels |
|---|---|
| Performance Optimization | Discovers hardware-specific optimizations humans miss |
| Algorithm Discovery | Finds novel approaches to classic problems |
| Scientific Computing | Automates tedious manual tuning processes |
| Competitive Programming | Generates multiple solution strategies |
| Multi-Objective Problems | Pareto-optimal solutions across dimensions |

## 🛠 Installation & Setup

[https://github.com/tzussman/openevolve#-installation--setup](https://github.com/tzussman/openevolve#-installation--setup)

### Requirements

[https://github.com/tzussman/openevolve#requirements](https://github.com/tzussman/openevolve#requirements)

- **Python**: 3.10+
- **LLM Access**: Any OpenAI-compatible API
- **Optional**: Docker for containerized runs

### Installation Options

[https://github.com/tzussman/openevolve#installation-options](https://github.com/tzussman/openevolve#installation-options)
**📦 PyPI (Recommended)**

```
pip install openevolve
```

**🔧 Development Install**

```
git clone https://github.com/algorithmicsuperintelligence/openevolve.git
cd openevolve
## gBrain Temporal Metadata

- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- timestamp_confidence: unknown
- timestamp_source: no reliable publication/creation timestamp found in raw artifact

