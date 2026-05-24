---
repo: zaixizhang/stella
url: https://github.com/zaixizhang/stella
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - zaixizhang/STELLA: STELLA: Self-Evolving LLM Agent for Biomedical Research · GitHub

**Source**: https://github.com/zaixizhang/stella

---

[Skip to content](https://github.com/zaixizhang/stella#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[zaixizhang](https://github.com/zaixizhang)

/
**[STELLA](https://github.com/zaixizhang/STELLA)**

Public

- [Notifications](https://github.com/login?return_to=%2Fzaixizhang%2FSTELLA)You must be signed in to change notification settings
- [Fork
    17](https://github.com/login?return_to=%2Fzaixizhang%2FSTELLA)
- 
[Star
          141](https://github.com/login?return_to=%2Fzaixizhang%2FSTELLA)

[https://github.com/zaixizhang/STELLA](https://github.com/zaixizhang/STELLA)

[Branches](https://github.com/zaixizhang/STELLA/branches)[Tags](https://github.com/zaixizhang/STELLA/tags)

[https://github.com/zaixizhang/STELLA/branches](https://github.com/zaixizhang/STELLA/branches)[https://github.com/zaixizhang/STELLA/tags](https://github.com/zaixizhang/STELLA/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History60 Commits60 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| Tool_Creation_Benchmark | Tool_Creation_Benchmark |  |  |
| asset | asset |  |  |
| cases | cases |  |  |
| data | data |  |  |
| docker | docker |  |  |
| new_tools | new_tools |  |  |
| prompts | prompts |  |  |
| skills | skills |  |  |
| stella | stella |  |  |
| .dockerignore | .dockerignore |  |  |
| .gitignore | .gitignore |  |  |
| Dockerfile | Dockerfile |  |  |
| LICENSE | LICENSE |  |  |
| MANIFEST.in | MANIFEST.in |  |  |
| README.md | README.md |  |  |
| predefined_tools.py | predefined_tools.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| skill_manager.py | skill_manager.py |  |  |
| skill_retriever.py | skill_retriever.py |  |  |
| skill_schema.py | skill_schema.py |  |  |
| skill_store.py | skill_store.py |  |  |
| skill_summarizer.py | skill_summarizer.py |  |  |
| start_stella_web.py | start_stella_web.py |  |  |
| stella_core.py | stella_core.py |  |  |
| stella_ui_english.py | stella_ui_english.py |  |  |
| tool_governance.py | tool_governance.py |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/zaixizhang/STELLA/blob/main/asset/stella_logo.png](https://github.com/zaixizhang/STELLA/blob/main/asset/stella_logo.png)

# STELLA

[https://github.com/zaixizhang/stella#stella](https://github.com/zaixizhang/stella#stella)

### Self-Evolving Multimodal Agents for Biomedical Research

[https://github.com/zaixizhang/stella#self-evolving-multimodal-agents-for-biomedical-research](https://github.com/zaixizhang/stella#self-evolving-multimodal-agents-for-biomedical-research)

[https://github.com/zaixizhang/STELLA](https://github.com/zaixizhang/STELLA)[https://github.com/zaixizhang/STELLA/blob/main/LICENSE](https://github.com/zaixizhang/STELLA/blob/main/LICENSE)[https://www.biorxiv.org/content/10.1101/2025.07.01.662467v2](https://www.biorxiv.org/content/10.1101/2025.07.01.662467v2)[https://arxiv.org/abs/2507.02004](https://arxiv.org/abs/2507.02004)[https://stella-agent.com/](https://stella-agent.com/)

[Paper](https://www.biorxiv.org/content/10.1101/2025.07.01.662467v2) | [Online Demo](https://stella-agent.com/) | [arXiv](https://arxiv.org/abs/2507.02004) | [Twitter](https://x.com/BiologyAIDaily/status/1941122955850993966)

### 🚀 [Try STELLA Online — No Installation, No API Keys, One Click to Start!](https://stella-agent.com/)

[https://github.com/zaixizhang/stella#rocket-try-stella-online--no-installation-no-api-keys-one-click-to-start](https://github.com/zaixizhang/stella#rocket-try-stella-online--no-installation-no-api-keys-one-click-to-start)

**[🌐 stella-agent.com](https://stella-agent.com/)**

**Authors:** Ruofan Jin1, Mingyang Xu2, Fei Meng3,4, Guancheng Wan5, Qingran Cai6, Yize Jiang7, Jin Han8, Yuanyuan Chen9, Wanqing Lu9, Mengyang Wang10, Zhiqian Lan11, Yuxuan Jiang11, Junhong Liu7,✉, Dongyao Wang3,4,✉, Le Cong12,✉, and Zaixi Zhang1,✉

1Princeton University, 2University of Michigan, 3The First Affiliated Hospital, USTC, 4National Key Laboratory of Immune Response and Immunotherapy 5UCLA, 6Shanghai Jiao Tong University, 7Microcyto, 8Nanjing University, 9Tianjin University of Science and Technology 10Peking University, 11The University of Hong Kong, 12Stanford University ✉[liujunhong@microcyto.cn](mailto:liujunhong@microcyto.cn), [dywsn@ustc.edu.cn](mailto:dywsn@ustc.edu.cn), [congle@stanford.edu](mailto:congle@stanford.edu), [zz8680@princeton.edu](mailto:zz8680@princeton.edu)

---

## Contents

[https://github.com/zaixizhang/stella#contents](https://github.com/zaixizhang/stella#contents)

- [Overview](https://github.com/zaixizhang/stella#overview)
- [Demo Video](https://github.com/zaixizhang/stella#demo-video)
- [Key Results](https://github.com/zaixizhang/stella#key-results)
- [Quick Start](https://github.com/zaixizhang/stella#quick-start)
- [Installation](https://github.com/zaixizhang/stella#installation)
- [Resource Download](https://github.com/zaixizhang/stella#resource-download--setup)
- [API Keys](https://github.com/zaixizhang/stella#api-keys)
- [Tool Creation Benchmark](https://github.com/zaixizhang/stella#tool-creation-benchmark)
- [Case Studies & Reproducibility](https://github.com/zaixizhang/stella#case-studies--reproducibility)
- [Citation](https://github.com/zaixizhang/stella#citation)
- [Related Projects](https://github.com/zaixizhang/stella#related-projects)
- [License](https://github.com/zaixizhang/stella#license)

## Overview

[https://github.com/zaixizhang/stella#overview](https://github.com/zaixizhang/stella#overview)

[https://github.com/zaixizhang/STELLA/blob/main/asset/stella_illustration.png](https://github.com/zaixizhang/STELLA/blob/main/asset/stella_illustration.png)

*Overview of the STELLA framework. The framework consists of four main components: a manager agent, a dev agent, a critic agent, and a tool ocean. The template system provides structured workflows learned from successful runs.*

| Component | Description |
|---|---|
| Manager Agent | Decomposes scientific objectives, retrieves relevant templates, orchestrates sub-agents |
| Dev Agent | Executes bioinformatics analyses, runs code, queries databases and literature |
| Critic Agent | Evaluates result quality, identifies gaps, recommends improvements |
| Tool Creation Agent | Dynamically creates new tools when existing ones are insufficient |
| Tool Ocean | 60+ predefined and self-evolving tools for literature search, databases, virtual screening |
| Template System | Retrieves, applies, and auto-creates structured workflow skills from successful runs |

Models are configurable via [OpenRouter](https://openrouter.ai/). Edit model variables in `stella_core.py` to switch between GPT, Claude, Gemini, and other providers.

**Try STELLA online at [stella-agent.com](https://stella-agent.com/) — no installation required.**

## Demo Video

[https://github.com/zaixizhang/stella#demo-video](https://github.com/zaixizhang/stella#demo-video)

[https://drive.google.com/file/d/1a6PoJWZMMix8zyccWVOZxU47NKhABO_W/view?usp=sharing](https://drive.google.com/file/d/1a6PoJWZMMix8zyccWVOZxU47NKhABO_W/view?usp=sharing)

*Click the thumbnail above to watch the STELLA demonstration video on Google Drive.*

## Key Results

[https://github.com/zaixizhang/stella#key-results](https://github.com/zaixizhang/stella#key-results)

[https://github.com/zaixizhang/STELLA/blob/main/asset/Stella_results.png](https://github.com/zaixizhang/STELLA/blob/main/asset/Stella_results.png)

Key achievements:

- Best performance on built tool creation benchmark and public benchmark (LabBench, HLE)
- Identified **BTN3A1** as a novel regulator in acute myeloid leukemia, verified through CRISPR studies across 4 cell lines
- Developed enzyme variants showing **>2x improvement** in catalytic activity
- Robotic laboratory automation with success rates improving from **17% to 82%**

## Quick Start

[https://github.com/zaixizhang/stella#quick-start](https://github.com/zaixizhang/stella#quick-start)

**Option 1: Use the online version (recommended)**

Visit [stella-agent.com](https://stella-agent.com/) to use STELLA directly in your browser.

**Option 2: Docker image**

A pre-built Docker image package (including ablation variants) is available on [Google Drive](https://drive.google.com/file/d/1iN9AOJpi0FBDz7i_gjmW8EbcjTY0z8bF/view). See [docker/README.md](https://github.com/zaixizhang/STELLA/blob/main/docker/README.md) for download and usage instructions.

**Option 3: Run locally (from source)**

```
# Clone and install
git clone https://github.com/zaixizhang/STELLA.git
cd STELLA
pip install -r requirements.txt

# Configure API key
echo "OPENROUTER_API_KEY=your_key_here" > .env

# Launch web UI
python stella_core.py
```

Open [http://localhost:7860](http://localhost:7860) in your browser. A public Gradio link is also generated automatically.

### Usage Options

[https://github.com/zaixizhang/stella#usage-options](https://github.com/zaixizhang/stella#usage-options)

| Mode | Command | Description |
|---|---|---|
| Web UI | python stella_core.py | Full Gradio interface with skill retrieval (recommended) |
| No Skills | python stella_core.py --no_template | Disable skill/template retrieval |
| Tool Creation | python stella_core.py --enable_tool_creation | Enable dynamic tool creation agent |
| Custom Port | python stella_core.py --port 8080 | Run on a different port |
| Web Launcher | python start_stella_web.py | Alternative launcher with preset config |

### Programmatic Usage

[https://github.com/zaixizhang/stella#programmatic-usage](https://github.com/zaixizhang/stella#programmatic-usage)

```
from stella_core import initialize_stella

manager_agent = initialize_stella(
    use_template=True,
    enable_tool_creation=True,
)
result = manager_agent.run("What genes are associated with breast cancer resistance?")
```

## Installation

[https://github.com/zaixizhang/stella#installation](https://github.com/zaixizhang/stella#installation)

### Option 1: Using Conda (Recommended)

[https://github.com/zaixizhang/stella#option-1-using-conda-recommended](https://github.com/zaixizhang/stella#option-1-using-conda-recommended)

```
# Clone the repository
git clone https://github.com/zaixizhang/STELLA.git
cd STELLA

# Create conda environment
conda create -n stella python=3.12 -y
conda activate stella

# Install scientific packages via conda
conda install -c conda-forge numpy pandas scikit-learn matplotlib seaborn -y

# Install remaining dependencies via pip
pip install -r requirements.txt
```

### Option 2: Using pip only

[https://github.com/zaixizhang/stella#option-2-using-pip-only](https://github.com/zaixizhang/stella#option-2-using-pip-only)

```
pip install -r requirements.txt
```

### Option 3: Using Docker

[https://github.com/zaixizhang/stella#option-3-using-docker](https://github.com/zaixizhang/stella#option-3-using-docker)

A pre-built Docker image package is available. See [docker/README.md](https://github.com/zaixizhang/STELLA/blob/main/docker/README.md) for download and usage instructions.

### Optional Dependencies

[https://github.com/zaixizhang/stella#optional-dependencies](https://github.com/zaixizhang/stella#optional-dependencies)

```
# For biomedical analysis
pip install biopython rdkit-pypi

# For MCP tools integration
pip install mcp uvx
```

## Resource Download & Setup

[https://github.com/zaixizhang/stella#resource-download--setup](https://github.com/zaixizhang/stella#resource-download--setup)

**Large Resource Files**: Due to the size of biomedical datasets, additional resources are available for download:

```
# Download the resource package (optional for basic usage)
# Manual download from: https://drive.google.com/file/d/1n8I-gkM58wL1OZysdpYhr-Q9ZApd9yU4/view?usp=sharing
# File: resource_backup_20250719_055729.zip (2.0GB compressed)

# Create resource directory and extract
mkdir -p resource/
unzip resource_backup_20250719_055729.zip -d resource/
```

> **Note**: Resources are optional for basic STELLA functionality but enhance performance for complex biomedical tasks.

## API Keys

[https://github.com/zaixizhang/stella#api-keys](https://github.com/zaixizhang/stella#api-keys)

> **Don't have API keys?** No worries — you can directly try our online version at **[stella-agent.com](https://stella-agent.com/)**. No installation, no API keys needed — just one click and start using STELLA right away!

For local deployment, configure the following API keys:

| Key | Required | Purpose |
|---|---|---|
| OPENROUTER_API_KEY | Yes | Powers all LLM agents via OpenRouter |
| SERPAPI_API_KEY | No | Enhanced web search results |
| PAPERQA_API_KEY | No | Academic literature analysis |

```
# Create .env file with your API keys
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

