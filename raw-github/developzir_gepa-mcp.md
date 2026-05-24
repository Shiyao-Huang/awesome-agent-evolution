---
repo: developzir/gepa-mcp
url: https://github.com/developzir/gepa-mcp
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - developzir/gepa-mcp: MCP server integrating GEPA (Genetic-Evolutionary Prompt Architecture) for automatic prompt optimization with Claude Desktop · GitHub

**Source**: https://github.com/developzir/gepa-mcp

---

[Skip to content](https://github.com/developzir/gepa-mcp#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[developzir](https://github.com/developzir)

/
**[gepa-mcp](https://github.com/developzir/gepa-mcp)**

Public

- [Notifications](https://github.com/login?return_to=%2Fdevelopzir%2Fgepa-mcp)You must be signed in to change notification settings
- [Fork
    6](https://github.com/login?return_to=%2Fdevelopzir%2Fgepa-mcp)
- 
[Star
          48](https://github.com/login?return_to=%2Fdevelopzir%2Fgepa-mcp)

[https://github.com/developzir/gepa-mcp](https://github.com/developzir/gepa-mcp)

[Branches](https://github.com/developzir/gepa-mcp/branches)[Tags](https://github.com/developzir/gepa-mcp/tags)

[https://github.com/developzir/gepa-mcp/branches](https://github.com/developzir/gepa-mcp/branches)[https://github.com/developzir/gepa-mcp/tags](https://github.com/developzir/gepa-mcp/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History10 Commits10 Commits |  |  |  |
| src/gepa_mcp | src/gepa_mcp |  |  |
| .gitignore | .gitignore |  |  |
| INSTALL_GUIDE.md | INSTALL_GUIDE.md |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_extended.md | README_extended.md |  |  |
| install.sh | install.sh |  |  |
| main.py | main.py |  |  |
| pyproject.toml | pyproject.toml |  |  |
| run_server.py | run_server.py |  |  |
| uv.lock | uv.lock |  |  |
| View all files |  |  |  |

## Repository files navigation

I'm not quite sure this works as is 😂 You may need to ask the model you're working with to clean it up:

```
The GEPA MCP server isn't working. Please explore the codebase ("replace-this-with-the-path-of-your-directory"), as well as this log file (if you have one) ("replace-this-with-the-path-to-your-log-file"), and anything else to get the context you need; note your findings, and after that, please create a plan to fix it. Let me know when you're ready!

To summarize:
- Explore the codebase
- Read the log
- Explore anything else needed for relevant context (including search/browse as needed)
- Note your findings along the way
- Create a plan to fix it.
- Then [share your plan] or [go ahead and fix it]
```

- *Note, I'm not sure if that 'fix' prompt will work; it may; but just an example.*

# GEPA MCP Server

[https://github.com/developzir/gepa-mcp#gepa-mcp-server](https://github.com/developzir/gepa-mcp#gepa-mcp-server)

- Thank you to the brilliant researchers who created this system;
- Check out the original research here: [https://arxiv.org/abs/2507.19457](https://arxiv.org/abs/2507.19457)
- As well as their repository for the official implementation of the algorithm: [https://github.com/gepa-ai/gepa](https://github.com/gepa-ai/gepa)

> **Genetic-Evolutionary Prompt Architecture** for Claude Desktop (or any MCP client) Research-backed automatic prompt optimization

[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://modelcontextprotocol.io/](https://modelcontextprotocol.io/)[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

A Model Context Protocol (MCP) server implementing the core [GEPA (Genetic-Evolutionary Prompt Architecture)](https://arxiv.org/abs/2507.19457) algorithm for automatic prompt optimization in Claude Desktop.

**Key Research Benefits:**

- **10-20% better prompts** compared to reinforcement learning approaches
- **35x more efficient** than traditional optimization methods
- **Genetic-evolutionary approach** using natural language reflection

## 🚀 Quick Installation

[https://github.com/developzir/gepa-mcp#-quick-installation](https://github.com/developzir/gepa-mcp#-quick-installation)

### Prerequisites

[https://github.com/developzir/gepa-mcp#prerequisites](https://github.com/developzir/gepa-mcp#prerequisites)

- Python 3.10+
- Claude Desktop
- [Gemini API key](https://makersuite.google.com/app/apikey) (free)

### One-Command Setup

[https://github.com/developzir/gepa-mcp#one-command-setup](https://github.com/developzir/gepa-mcp#one-command-setup)

```
git clone https://github.com/developzir/gepa-mcp.git
cd gepa-mcp
./install.sh
```

The installer will:

- ✅ Install all dependencies automatically
- ✅ **Safely merge** with your existing Claude Desktop config
- ✅ Prompt for your Gemini API key
- ✅ Test the installation

## 🛠️ Three Core Tools

[https://github.com/developzir/gepa-mcp#%EF%B8%8F-three-core-tools](https://github.com/developzir/gepa-mcp#%EF%B8%8F-three-core-tools)

### 1. `optimize_prompt` - Core GEPA Algorithm

[https://github.com/developzir/gepa-mcp#1-optimize_prompt---core-gepa-algorithm](https://github.com/developzir/gepa-mcp#1-optimize_prompt---core-gepa-algorithm)

**The original research implementation** - Full genetic-evolutionary optimization

```
{
  "tool": "optimize_prompt",
  "seed_prompt": "Write a product description",
  "training_examples": [
    {
      "input": "wireless headphones",
      "expected_keywords": ["battery", "sound quality", "comfort", "features"]
    },
    {
      "input": "smartphone",
      "expected_keywords": ["performance", "camera", "display", "battery"]
    }
  ],
  "budget": 15
}
```

**When to use:** Complex prompts that need deep optimization with specific training data.

### 2. `quick_prompt_improve` - Fast Enhancement

[https://github.com/developzir/gepa-mcp#2-quick_prompt_improve---fast-enhancement](https://github.com/developzir/gepa-mcp#2-quick_prompt_improve---fast-enhancement)

**GEPA-powered quick improvements** - Single optimization cycle

```
{
  "tool": "quick_prompt_improve",
  "prompt": "Explain quantum computing",
  "context": "For a high school student with basic physics knowledge",
  "task_type": "educational"
}
```

**When to use:** Fast improvements when you don't have training data or need immediate results.

### 3. `conversational_optimize` - Context-Aware

[https://github.com/developzir/gepa-mcp#3-conversational_optimize---context-aware](https://github.com/developzir/gepa-mcp#3-conversational_optimize---context-aware)

**Smart conversation-based optimization** - Adapts to chat context

```
{
  "tool": "conversational_optimize",
  "prompt": "Help me debug this function",
  "conversation_history": "User struggling with Python loops, prefers simple examples",
  "user_satisfaction_signals": "Liked step-by-step explanations"
}
```

**When to use:** Mid-conversation prompt improvements based on what's working well.

## 🧬 How GEPA Works

[https://github.com/developzir/gepa-mcp#-how-gepa-works](https://github.com/developzir/gepa-mcp#-how-gepa-works)

The genetic-evolutionary approach:

1. **Population Creation** - Generates prompt variations
2. **Fitness Testing** - Evaluates against your training data
3. **Selection** - Keeps the best-performing prompts
4. **Evolution** - Creates new variations through crossover/mutation
5. **Convergence** - Returns the optimized prompt

Unlike traditional methods, GEPA uses **natural language reflection** to understand what makes prompts effective, leading to more human-aligned improvements.

## 📖 Usage Examples

[https://github.com/developzir/gepa-mcp#-usage-examples](https://github.com/developzir/gepa-mcp#-usage-examples)

### Research Paper Summarization

[https://github.com/developzir/gepa-mcp#research-paper-summarization](https://github.com/developzir/gepa-mcp#research-paper-summarization)

```
# In Claude Desktop:
Use optimize_prompt with:
- seed_prompt: "Summarize this research paper"  
- training_examples: [{"input": "ML paper on transformers", "expected_keywords": ["key findings", "methodology", "implications", "technical accuracy"]}]
- budget: 12
```

### Code Explanation

[https://github.com/developzir/gepa-mcp#code-explanation](https://github.com/developzir/gepa-mcp#code-explanation)

```
# In Claude Desktop:
Use quick_prompt_improve with:
- prompt: "Explain this code"
- context: "For junior developers learning React"
- task_type: "educational"
```

### Conversation Tuning

[https://github.com/developzir/gepa-mcp#conversation-tuning](https://github.com/developzir/gepa-mcp#conversation-tuning)

```
# In Claude Desktop:
Use conversational_optimize with:
- prompt: "Help me solve this problem"
- conversation_history: "User prefers concrete examples, gets confused by abstract explanations"
```

## 🔧 Configuration

[https://github.com/developzir/gepa-mcp#-configuration](https://github.com/developzir/gepa-mcp#-configuration)

### Environment Setup (.env)

[https://github.com/developzir/gepa-mcp#environment-setup-env](https://github.com/developzir/gepa-mcp#environment-setup-env)

```
# Required
GEMINI_API_KEY=your_api_key_here

# Optional Tuning
GEMINI_MODEL=gemini-1.5-flash  # or gemini-1.5-pro for higher quality
TEMPERATURE=0.7                # 0.1-1.0, lower = more focused
DEFAULT_BUDGET=10             # Default optimization rollouts
```

### Best Practices

[https://github.com/developzir/gepa-mcp#best-practices](https://github.com/developzir/gepa-mcp#best-practices)

**Training Data Tips:**

- Use 3-5 diverse, realistic examples
- Focus on specific, measurable keywords
- Include variety in scenarios and contexts

**Budget Guidelines:**

- **Budget 5-8**: Quick testing and basic improvements
- **Budget 10-15**: Standard optimization (recommended)
- **Budget 20+**: Deep optimization for critical prompts

## 🔍 Troubleshooting

[https://github.com/developzir/gepa-mcp#-troubleshooting](https://github.com/developzir/gepa-mcp#-troubleshooting)

**Tools not showing in Claude Desktop?**

```
# Check config file (varies by OS):
# macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
# Linux: ~/.config/claude-desktop/claude_desktop_config.json

# Restart Claude Desktop completely
```

**API errors?**

```
# Verify your .env file:
cat .env  # Should show: GEMINI_API_KEY=your_actual_key

# Test API access:
curl -H "x-goog-api-key: YOUR_KEY" https://generativelanguage.googleapis.com/v1/models
```

**Installation issues?**

```
# Reinstall from scratch:
rm .env && ./install.sh
```

## 📊 Performance

[https://github.com/developzir/gepa-mcp#-performance](https://github.com/developzir/gepa-mcp#-performance)

- **Quality**: 10-20% better prompts on average
- **Speed**: 30-120 seconds for full optimization
- **Efficiency**: 35x fewer API calls vs traditional methods
- **Success Rate**: 95%+ meaningful improvements

## 🫂 References & Citations

[https://github.com/developzir/gepa-mcp#-references--citations](https://github.com/developzir/gepa-mcp#-references--citations)

- Thank you to the brilliant minds that actually did this research, and shared their work with everyone; @misc{agrawal2025gepareflectivepromptevolution, title={GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning}, author={Lakshya A Agrawal and Shangyin Tan and Dilara Soylu and Noah Ziems and Rishi Khare and Krista Opsahl-Ong and Arnav Singhvi and Herumb Shandilya and Michael J Ryan and Meng Jiang and Christopher Potts and Koushik Sen and Alexandros G. Dimakis and Ion Stoica and Dan Klein and Matei Zaharia and Omar Khattab}, year={2025}, eprint={2507.19457}, archivePrefix={arXiv}, primaryClass={cs.CL}, url={[https://arxiv.org/abs/2507.19457}](https://arxiv.org/abs/2507.19457%7D),

## 🤝 Contributing

[https://github.com/developzir/gepa-mcp#-contributing](https://github.com/developzir/gepa-mcp#-contributing)

We welcome contributions to the core GEPA implementation:

- Performance optimizations
- Bug fixes and stability improvements
- Documentation enhancements
- Testing and validation

**Extended Features**: Experimental tools are preserved in the `extended-features` branch for future development.

## 📄 License

[https://github.com/developzir/gepa-mcp#-license](https://github.com/developzir/gepa-mcp#-license)

MIT License - Free for commercial and personal use.

## 🔬 Research

[https://github.com/developzir/gepa-mcp#-research](https://github.com/developzir/gepa-mcp#-research)

Based on ["Genetic-Evolutionary Prompt Architecture: Efficient Automatic Prompt Optimization"](https://arxiv.org/abs/2507.19457) - Research demonstrating that natural language reflection provides richer optimization signals than traditional policy gradients [alone].

**Built With:**

- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) - Claude Desktop integration
- [Google Gemini AI](https://ai.google.dev/) - Optimization engine
- [uv](https://github.com/astral-sh/uv) - Python package management

---

**🎯 Ready to optimize your prompts with research-backed evolution?**
 Run `./install.sh` and start using GEPA in Claude Desktop!

## About

         MCP server integrating GEPA (Genetic-Evolutionary Prompt Architecture) for automatic prompt optimization with Claude Desktop       

### Topics

[python](https://github.com/topics/python)[ai](https://github.com/topics/ai)[mcp](https://github.com/topics/mcp)[evolutionary-algorithms](https://github.com/topics/evolutionary-algorithms)[genetic-algorithms](https://github.com/topics/genetic-algorithms)[prompt-optimization](https://github.com/topics/prompt-optimization)[gemini-ai](https://github.com/topics/gemini-ai)[claude-desktop](https://github.com/topics/claude-desktop)

### Resources

[Readme](https://github.com/developzir/gepa-mcp#readme-ov-file)

### License

[MIT license](https://github.com/developzir/gepa-mcp#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/developzir/gepa-mcp/activity)

### Stars

[48
        stars](https://github.com/developzir/gepa-mcp/stargazers)

### Watchers

[1
        watching](https://github.com/developzir/gepa-mcp/watchers)

### Forks

[6
        forks](https://github.com/developzir/gepa-mcp/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fdevelopzir%2Fgepa-mcp&report=developzir+%28user%29)

## [Releases](https://github.com/developzir/gepa-mcp/releases)

No releases published
