---
repo: agent-on-the-fly/memento
url: https://github.com/agent-on-the-fly/memento
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - Memento-Teams/Memento: Official Code of Memento: Fine-tuning LLM Agents without Fine-tuning LLMs · GitHub

**Source**: https://github.com/agent-on-the-fly/memento

---

[Skip to content](https://github.com/Memento-Teams/Memento#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[Memento-Teams](https://github.com/Memento-Teams)

/
**[Memento](https://github.com/Memento-Teams/Memento)**

Public

- [Notifications](https://github.com/login?return_to=%2FMemento-Teams%2FMemento)You must be signed in to change notification settings
- [Fork
    285](https://github.com/login?return_to=%2FMemento-Teams%2FMemento)
- 
[Star
          2.4k](https://github.com/login?return_to=%2FMemento-Teams%2FMemento)

[https://github.com/Memento-Teams/Memento](https://github.com/Memento-Teams/Memento)

[Branches](https://github.com/Memento-Teams/Memento/branches)[Tags](https://github.com/Memento-Teams/Memento/tags)

[https://github.com/Memento-Teams/Memento/branches](https://github.com/Memento-Teams/Memento/branches)[https://github.com/Memento-Teams/Memento/tags](https://github.com/Memento-Teams/Memento/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History79 Commits79 Commits |  |  |  |
| Figure | Figure |  |  |
| client | client |  |  |
| data | data |  |  |
| memory | memory |  |  |
| searxng-docker | searxng-docker |  |  |
| server | server |  |  |
| .env.example | .env.example |  |  |
| .gitignore | .gitignore |  |  |
| .python-version | .python-version |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| pyproject.toml | pyproject.toml |  |  |
| requirements.txt | requirements.txt |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

# Memento: Fine-tuning LLM Agents **without** Fine-tuning LLMs

[https://github.com/Memento-Teams/Memento#memento-fine-tuning-llm-agents-without-fine-tuning-llms](https://github.com/Memento-Teams/Memento#memento-fine-tuning-llm-agents-without-fine-tuning-llms)

> A memory-based, continual-learning framework that helps LLM agents improve from experience **without** updating model weights.

**Planner–Executor Architecture** • **Case-Based Reasoning** • **MCP Tooling** • **Memory-Augmented Learning**

---

| Memento vs. Baselines on GAIA validation and test sets. | Ablation study of Memento across benchmarks. |
|---|---|
| Continual learning curves across memory designs. | Memento’s accuracy improvement on OOD datasets. |

## 📰 News

[https://github.com/Memento-Teams/Memento#-news](https://github.com/Memento-Teams/Memento#-news)

- [2025.10.05] We’re excited to announce that our parametric Case-Based Reasoning inference code is now officially open-sourced! 🎉
- [2025.09.05] We’ve added support to deploy a local LLM as the executor using vLLM, please see client/agent_local_server.py. 🎉
- [2025.09.03] We’ve set up a WeChat group to make it easier to collaborate and exchange ideas on this project. Welcome to join the Group to share your thoughts, ask questions, or contribute your ideas! 🔥 🔥 🔥 [Join our WeChat Group Now!](https://github.com/Memento-Teams/Memento/blob/main/Figure/wechat.jpg)
- [2025.08.30] We’re excited to announce that our no-parametric Case-Based Reasoning inference code is now officially open-sourced! 🎉
- [2025.08.28] We’ve created a Discord server to make discussions and collaboration around this project easier. Feel free to join and share your thoughts, ask questions, or contribute ideas! 🔥 🔥 🔥 [Join our Discord!](https://discord.gg/y4FP2EDXyX)
- [2025.08.27] Thanks for your interest in our work! We’ll release our CBR code next week and our Parametric Memory code next month. We’ll keep updating on our further development.
- [2025.08.27] We add a new Crawler MCP in `server/ai_crawler.py` for web crawling and query-aware content compression to reduce token cost.
- [2025.08.26] We add the SerpAPI ([https://serpapi.com/search-api](https://serpapi.com/search-api)) MCP tool to help you avoid using the search Docker and speed up development.

## 🔥 Key Features

[https://github.com/Memento-Teams/Memento#-key-features](https://github.com/Memento-Teams/Memento#-key-features)

- **No LLM weight updates.** Memento reframes continual learning as **memory-based online reinforcement learning** over a **memory-augmented MDP**. A neural **case-selection policy** guides actions; experiences are stored and reused via efficient Read/Write operations.
- **Two-stage planner–executor loop.** A CBR-driven **Planner** decomposes tasks and retrieves relevant cases; an **Executor** runs each subtask as an MCP client, orchestrating tools and writing back outcomes.
- **Comprehensive tool ecosystem.** Built-in support for web search, document processing, code execution, image/video analysis, and more through a unified MCP interface.
- **Strong benchmark performance.** Achieves competitive results across GAIA, DeepResearcher, SimpleQA, and HLE benchmarks.

---

## 🧠 Core Concept

[https://github.com/Memento-Teams/Memento#-core-concept](https://github.com/Memento-Teams/Memento#-core-concept)

**Learn from experiences, not gradients.** Memento logs successful & failed trajectories into a **Case Bank** and **retrieves by value** to steer planning and execution—enabling low-cost, transferable, and online continual learning.

---

## 🏗️ Architecture

[https://github.com/Memento-Teams/Memento#%EF%B8%8F-architecture](https://github.com/Memento-Teams/Memento#%EF%B8%8F-architecture)

### Core Components

[https://github.com/Memento-Teams/Memento#core-components](https://github.com/Memento-Teams/Memento#core-components)

- **Meta-Planner**: Breaks down high-level queries into executable subtasks using GPT-4.1
- **Executor**: Executes individual subtasks using o3 or other models via MCP tools
- **Case Memory**: Stores final-step tuples **(s_T, a_T, r_T)** for experience replay
- **MCP Tool Layer**: Unified interface for external tools and services

### Tool Ecosystem

[https://github.com/Memento-Teams/Memento#tool-ecosystem](https://github.com/Memento-Teams/Memento#tool-ecosystem)

- **Web Research**: Live search and controlled crawling via SearxNG
- **Document Processing**: Multi-format support (PDF, Office, images, audio, video)
- **Code Execution**: Sandboxed Python workspace with security controls
- **Data Analysis**: Excel processing, mathematical computations
- **Media Analysis**: Image captioning, video narration, audio transcription

---

## 🚀 Quick Start

[https://github.com/Memento-Teams/Memento#-quick-start](https://github.com/Memento-Teams/Memento#-quick-start)

### Prerequisites

[https://github.com/Memento-Teams/Memento#prerequisites](https://github.com/Memento-Teams/Memento#prerequisites)

- Python 3.11+
- OpenAI API key (or compatible API endpoint)
- SearxNG instance for web search
- FFmpeg (system-level binary required for video processing)
- PyTorch 2.0+ with CUDA support (for Parametric Memory)

📖 **For detailed installation instructions, see [INSTALL.md](https://github.com/Memento-Teams/Memento/blob/main/INSTALL.md)**

### Installation

[https://github.com/Memento-Teams/Memento#installation](https://github.com/Memento-Teams/Memento#installation)

#### Method 1: Using uv (Recommended - Fast & Modern)

[https://github.com/Memento-Teams/Memento#method-1-using-uv-recommended---fast--modern](https://github.com/Memento-Teams/Memento#method-1-using-uv-recommended---fast--modern)

```
# Clone repository
git clone https://github.com/Agent-on-the-Fly/Memento
cd Memento

# Install uv if not already installed
curl -LsSf https://astral.sh/uv/install.sh | sh

# Sync dependencies and create virtual environment automatically
uv sync

# Activate the virtual environment
source .venv/bin/activate  # On Windows: .venv\Scriptsctivate
```

#### Method 2: Using pip with requirements.txt

[https://github.com/Memento-Teams/Memento#method-2-using-pip-with-requirementstxt](https://github.com/Memento-Teams/Memento#method-2-using-pip-with-requirementstxt)

```
# Clone repository
git clone https://github.com/Agent-on-the-Fly/Memento
cd Memento

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scriptsctivate

# Install dependencies
pip install -r requirements.txt
```

#### PyTorch Installation

[https://github.com/Memento-Teams/Memento#pytorch-installation](https://github.com/Memento-Teams/Memento#pytorch-installation)

**For GPU support (Recommended for Parametric Memory):**

```
# CUDA 11.8
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# CUDA 12.1
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# CPU only
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
```

For more PyTorch installation options, visit: [https://pytorch.org/get-started/locally/](https://pytorch.org/get-started/locally/)

### System Dependencies Installation

[https://github.com/Memento-Teams/Memento#system-dependencies-installation](https://github.com/Memento-Teams/Memento#system-dependencies-installation)

#### FFmpeg Installation (Required)

[https://github.com/Memento-Teams/Memento#ffmpeg-installation-required](https://github.com/Memento-Teams/Memento#ffmpeg-installation-required)

**FFmpeg is required for video processing functionality.** The `ffmpeg-python` package in our dependencies requires a system-level FFmpeg binary.

**Windows:**

```
# Option 1: Using Conda (Recommended for isolated environment)
conda install -c conda-forge ffmpeg

# Option 2: Download from official website
# Visit https://ffmpeg.org/download.html and add to PATH
```

**macOS:**

```
# Using Homebrew
brew install ffmpeg
```

**Linux:**

```
# Debian/Ubuntu
sudo apt-get update && sudo apt-get install ffmpeg
```

#### Web Scraping & Search Setup

[https://github.com/Memento-Teams/Memento#web-scraping--search-setup](https://github.com/Memento-Teams/Memento#web-scraping--search-setup)

```
# Install and setup crawl4ai
crawl4ai-setup
crawl4ai-doctor

# Install playwright browsers
playwright install
```

### Environment Variables Configuration

[https://github.com/Memento-Teams/Memento#environment-variables-configuration](https://github.com/Memento-Teams/Memento#environment-variables-configuration)

After creating the `.env` file, you need to configure the following API keys and service endpoints:

```
#===========================================
# OpenAI API Configuration
#===========================================
USE_AZURE_OPENAI=False

OPENAI_API_KEY=your_openai_api_key_here
OPENAI_BASE_URL=https://api.openai.com/v1  # or your custom endpoint

AZURE_OPENAI_API_KEY=your_azure_openai_api_key_here
AZURE_OPENAI_API_VERSION=your_azure_openai_api_version_here
AZURE_OPENAI_ENDPOINT=your_azure_openai_endpoint_here

#===========================================
# Tools & Services API
#===========================================
# Chunkr API (https://chunkr.ai/)
CHUNKR_API_KEY=your_chunkr_api_key_here

# Jina API
JINA_API_KEY=your_jina_api_key_here

# ASSEMBLYAI API
ASSEMBLYAI_API_KEY=your_assemblyai_api_key_here
```

**Note**: Replace `your_*_api_key_here` with your actual API keys. Some services are optional depending on which tools you plan to use.

### SearxNG Setup

[https://github.com/Memento-Teams/Memento#searxng-setup](https://github.com/Memento-Teams/Memento#searxng-setup)

For web search capabilities, set up SearxNG: You can follow [https://github.com/searxng/searxng-docker/](https://github.com/searxng/searxng-docker/) to set the docker and use our setting.

```
# In a new terminal
cd ./Memento/searxng-docker
docker compose up -d
```

### Basic Usage

[https://github.com/Memento-Teams/Memento#basic-usage](https://github.com/Memento-Teams/Memento#basic-usage)

#### Interactive Mode

[https://github.com/Memento-Teams/Memento#interactive-mode](https://github.com/Memento-Teams/Memento#interactive-mode)

```
python client/agent.py
```

#### Parametric Memory Mode (Advanced - With Memory Retriever)

[https://github.com/Memento-Teams/Memento#parametric-memory-mode-advanced---with-memory-retriever](https://github.com/Memento-Teams/Memento#parametric-memory-mode-advanced---with-memory-retriever)

**Parametric Memory** enables the agent to learn from past experiences using a trained neural retriever model.

**Step 1: Train the Memory Retriever**

First, you need to train the retriever model with initial training data:

```
cd memory

# Train the retriever model
python train_memory_retriever.py \
  --train training_data.jsonl \
  --output_dir ./ckpts/retriever \
  --use_plan \
  --val_ratio 0.1 \
  --batch_size 32 \
  --lr 2e-5 \
  --epochs 10 \
  --save_best
```

**Step 2: Configure Environment Variables**

Add the following to your `.env` file:

```
# Memory Configuration
MEMORY_JSONL_PATH=../memory/memory.jsonl
TRAINING_DATA_PATH=../memory/training_data.jsonl
RETRIEVER_MODEL_PATH=../memory/ckpts/retriever/best.pt
MEMORY_TOP_K=8
MEMORY_MAX_POS_EXAMPLES=8
MEMORY_MAX_NEG_EXAMPLES=8
```

**Step 3: Run Parametric Memory Agent**

```
cd client

python parametric_memory.py
```

---

## 🔧 Configuration

[https://github.com/Memento-Teams/Memento#-configuration](https://github.com/Memento-Teams/Memento#-configuration)

### Model Selection

[https://github.com/Memento-Teams/Memento#model-selection](https://github.com/Memento-Teams/Memento#model-selection)

- **Planner Model**: Defaults to `gpt-4.1` for task decomposition
- **Executor Model**: Defaults to `o3` for task execution
- **Custom Models**: Support for any OpenAI-compatible API

### Tool Configuration

[https://github.com/Memento-Teams/Memento#tool-configuration](https://github.com/Memento-Teams/Memento#tool-configuration)

- **Search**: Configure SearxNG instance URL
- **Code Execution**: Customize import whitelist and security settings
- **Document Processing**: Set cache directories and processing limits

---

## 📊 Performance

[https://github.com/Memento-Teams/Memento#-performance](https://github.com/Memento-Teams/Memento#-performance)

### Benchmark Results

[https://github.com/Memento-Teams/Memento#benchmark-results](https://github.com/Memento-Teams/Memento#benchmark-results)

- **GAIA**: 87.88% (Val, Pass@3 Top-1) and **79.40%** (Test)
- **DeepResearcher**: **66.6% F1 / 80.4% PM**, with **+4.7–9.6** absolute gains on OOD datasets
- **SimpleQA**: **95.0%**
- **HLE**: **24.4% PM** (close to GPT-5 at 25.32%)

### Key Insights

[https://github.com/Memento-Teams/Memento#key-insights](https://github.com/Memento-Teams/Memento#key-insights)
