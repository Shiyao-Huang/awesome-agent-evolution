---
repo: maxnorm8650/medagentsim
url: https://github.com/maxnorm8650/medagentsim
content_timestamp: 2026-05-21
time_slice: 2026-05
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - MAXNORM8650/MedAgentSim: MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions, MICCAI 2025 (oral and early accepted) · GitHub

**Source**: https://github.com/maxnorm8650/medagentsim

---

[Skip to content](https://github.com/maxnorm8650/medagentsim#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[MAXNORM8650](https://github.com/MAXNORM8650)

/
**[MedAgentSim](https://github.com/MAXNORM8650/MedAgentSim)**

Public

- [Notifications](https://github.com/login?return_to=%2FMAXNORM8650%2FMedAgentSim)You must be signed in to change notification settings
- [Fork
    18](https://github.com/login?return_to=%2FMAXNORM8650%2FMedAgentSim)
- 
[Star
          163](https://github.com/login?return_to=%2FMAXNORM8650%2FMedAgentSim)

[https://github.com/MAXNORM8650/MedAgentSim](https://github.com/MAXNORM8650/MedAgentSim)

[Branches](https://github.com/MAXNORM8650/MedAgentSim/branches)[Tags](https://github.com/MAXNORM8650/MedAgentSim/tags)

[https://github.com/MAXNORM8650/MedAgentSim/branches](https://github.com/MAXNORM8650/MedAgentSim/branches)[https://github.com/MAXNORM8650/MedAgentSim/tags](https://github.com/MAXNORM8650/MedAgentSim/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History97 Commits97 Commits |  |  |  |
| MedPromptSimulate | MedPromptSimulate |  |  |
| Simulacra | Simulacra |  |  |
| assets | assets |  |  |
| datasets | datasets |  |  |
| examples | examples |  |  |
| magent.egg-info | magent.egg-info |  |  |
| medsim | medsim |  |  |
| outputs | outputs |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE.txt | LICENSE.txt |  |  |
| README.md | README.md |  |  |
| SECURITY.md | SECURITY.md |  |  |
| __init__.py | __init__.py |  |  |
| environment.yml | environment.yml |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions

[https://github.com/maxnorm8650/medagentsim#medagentsim-self-evolving-multi-agent-simulations-for-realistic-clinical-interactions](https://github.com/maxnorm8650/medagentsim#medagentsim-self-evolving-multi-agent-simulations-for-realistic-clinical-interactions)

[https://github.com/MAXNORM8650/MedAgentSim/blob/master/assets/Tom_Moreno_scaled_10x_pngcrushed.jpg](https://github.com/MAXNORM8650/MedAgentSim/blob/master/assets/Tom_Moreno_scaled_10x_pngcrushed.jpg)

*An open-source framework for simulating realistic doctor-patient interactions*

[https://arxiv.org/abs/2503.22678](https://arxiv.org/abs/2503.22678)[https://www.youtube.com/watch?v=0qmC0ovWcr4](https://www.youtube.com/watch?v=0qmC0ovWcr4)[https://github.com/MAXNORM8650/MedAgentSim/graphs/contributors](https://github.com/MAXNORM8650/MedAgentSim/graphs/contributors)[https://github.com/MAXNORM8650/MedAgentSim/stargazers](https://github.com/MAXNORM8650/MedAgentSim/stargazers)[https://github.com/MAXNORM8650/MedAgentSim/network/members](https://github.com/MAXNORM8650/MedAgentSim/network/members)[https://github.com/MAXNORM8650/MedAgentSim/issues](https://github.com/MAXNORM8650/MedAgentSim/issues)[https://github.com/MAXNORM8650/MedAgentSim/blob/main/LICENSE](https://github.com/MAXNORM8650/MedAgentSim/blob/main/LICENSE)[https://medagentsim.netlify.app/](https://medagentsim.netlify.app/)[https://www.python.org/downloads/](https://www.python.org/downloads/)[https://huggingface.co/datasets/ItsMaxNorm/MedAgentSim-datasets](https://huggingface.co/datasets/ItsMaxNorm/MedAgentSim-datasets)

## 📣 Recent Updates

[https://github.com/maxnorm8650/medagentsim#-recent-updates](https://github.com/maxnorm8650/medagentsim#-recent-updates)

- [13/05/2025] 🎉 Our paper **MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions** has been accepted early at **MICCAI 2025**.
- [31/03/2025] 🔥 We release **MedAgentSim: Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions**.

## 🔍 Overview

[https://github.com/maxnorm8650/medagentsim#-overview](https://github.com/maxnorm8650/medagentsim#-overview)

MedAgentSim is an open-source simulated hospital environment designed to evaluate and enhance large language model (LLM) performance in dynamic diagnostic settings. Unlike prior approaches, our framework requires doctor agents to actively engage with patients through multi-turn conversations, requesting relevant medical examinations and imaging results to mimic real-world diagnostic processes.

Key features:

- **Multi-Agent Architecture**: Doctor, patient, and measurement agents interact in a realistic clinical setting
- **Self-Improvement Mechanisms**: Models iteratively refine their diagnostic strategies through experience
- **Experience Replay**: Past successful diagnoses inform future cases through knowledge retrieval
- **Visual Game Simulation**: Built with Phaser for an intuitive, interactive environment
- **Multi-Modal Capabilities**: Integration with vision language models for medical image interpretation

## 🚀 Quick Start

[https://github.com/maxnorm8650/medagentsim#-quick-start](https://github.com/maxnorm8650/medagentsim#-quick-start)

### Prerequisites

[https://github.com/maxnorm8650/medagentsim#prerequisites](https://github.com/maxnorm8650/medagentsim#prerequisites)

```
# Clone the repository
git clone https://github.com/MAXNORM8650/MedAgentSim.git
cd MedAgentSim
conda env create -f environment.yml
conda activate mgent
pip install e .
# Install dependencies
pip install -r requirements.txt
# Ensure
pip install --upgrade torch torchao torchvision transformers
pip install --upgrade openai
python -m pip install replicate
python -m pip install  anthropic
python -m pip install groq
python -m pip install accelerate
python -m pip install openai-cost-tracker
python -m pip install django==2.2
```

### Running the Simulation

[https://github.com/maxnorm8650/medagentsim#running-the-simulation](https://github.com/maxnorm8650/medagentsim#running-the-simulation)

```
# Start the server
python -m medsim.server

# In a separate terminal, launch the client
python -u -m medsim.simulate --doctor_llm meta-llama/Llama-3.2-3B-Instruct --patient_llm meta-llama/Llama-3.2-3B-Instruct --measurement_llm meta-llama/Llama-3.2-3B-Instruct --moderator_llm meta-llama/Llama-3.2-3B-Instruct
```

Visit `http://localhost:8000/simulator_home` in your browser. Make sure to keep that tab open and active during the simulation.

### Host models using vLLM to query

[https://github.com/maxnorm8650/medagentsim#host-models-using-vllm-to-query](https://github.com/maxnorm8650/medagentsim#host-models-using-vllm-to-query)

```
vllm serve unsloth/Llama-3.2-11B-Vision-Instruct-unsloth-bnb-4bit --dtype 'auto'  --quantization "bitsandbytes" --load_format "bitsandbytes" --tensor-parallel-size 4 --max-model-len 8192 --limit-mm-per-prompt image=1

vllm serve meta-llama/Llama-3.2-3B-Instruct --tensor-parallel-size 4
vllm serve unsloth/Llama-3.3-70B-Instruct-bnb-4bit --quantization "bitsandbytes" --load_format "bitsandbytes"
```

## 🏥 Simulation Modes

[https://github.com/maxnorm8650/medagentsim#-simulation-modes](https://github.com/maxnorm8650/medagentsim#-simulation-modes)

MedAgentSim supports three core interaction modes:

1. **Generation Mode**: Patient agent autonomously creates cases, generating illnesses, symptoms, and test results
2. **Dataset Mode**: Patient responses derived from predefined medical datasets
3. **Control Mode**: Human users can control either the doctor or patient agent for real-time interaction

## 🧠 Model Support

[https://github.com/maxnorm8650/medagentsim#-model-support](https://github.com/maxnorm8650/medagentsim#-model-support)

MedAgentSim is compatible with various LLMs:

- **Open-Source Models**: LLaMA 3.3, Mistral, Mixtral, Qwen2
- **Vision-Language Models**: LLaVA 1.5, QwenVL
- **Custom Models**: Integrate your own models following our documentation

## 📊 Benchmarks

[https://github.com/maxnorm8650/medagentsim#-benchmarks](https://github.com/maxnorm8650/medagentsim#-benchmarks)

MedAgentSim has been evaluated on several medical benchmarks:

| Benchmark | Description | #Cases |
|---|---|---|
| NEJM | Complex real-world cases | 15 |
| NEJM Extended | Additional complex cases | 120 |
| MedQA | Simulated diagnostic scenarios | 106 |
| MedQA Extended | Extended diagnostic scenarios | 214 |
| MIMIC-IV | Real-world clinical cases | 288 |

1. Launch the vLLM server (with appropriate GPUs):

```
CUDA_VISIBLE_DEVICES=0,1,2,3 vllm serve meta-llama/Llama-3.1-70B-Instruct \
    --tensor-parallel-size 4 \
    --max-model-len 8192
```

1. Run the simulation:

```
python medsim/main.py \
    --doctor_llm meta-llama/Llama-3.1-70B-Instruct \
    --patient_llm meta-llama/Llama-3.1-70B-Instruct \
    --measurement_llm meta-llama/Llama-3.1-70B-Instruct \
    --moderator_llm meta-llama/Llama-3.1-70B-Instruct \
    --agent_dataset MedQA
```

We also support ollama,

```
python medsim/main.py \
    --doctor_llm llama3.3:70b \
    --patient_llm llama3.3:70b \
    --measurement_llm llama3.3:70b \
    --moderator_llm llama3.3:70b \
    --agent_dataset MedQA
```

## 🧩 Project Structure

[https://github.com/maxnorm8650/medagentsim#-project-structure](https://github.com/maxnorm8650/medagentsim#-project-structure)

```
MedAgentSim/
├── assets/               # Images, CSS, and other static files
├── datasets/             # Sample datasets and medical knowledge base. Put your dataset here
├── docs/                 # Documentation. Coming soon
├── medsim/               # Core simulation code
│   ├── configs/          # configs for for models
│   ├── core/             # Agent implementations
│   ├── server/           # Simulation environment server
│   ├── simulate/         # Multi-agnet running interfaces
│   ├── utils/            # Utility functions
├── Simulacra/            # Backend support
├── MedPromptSimulate/    # Dignosis memory support
├── examples/             # Example scenarios and configurations
├── tests/                # Unit and integration tests. Coming soon
├── requirements.txt      # Python dependencies
├── LICENSE               # License information
└── README.md             # This file
```

## Datasets

[https://github.com/maxnorm8650/medagentsim#datasets](https://github.com/maxnorm8650/medagentsim#datasets)

```
from datasets import load_dataset

# Load all files
ds = load_dataset("ItsMaxNorm/MedAgentSim-datasets")

# Load a specific file
ds = load_dataset("ItsMaxNorm/MedAgentSim-datasets", data_files="medqa_v1.parquet")

# Access the data
print(ds["train"][0])
```

## 👥 Contributing

[https://github.com/maxnorm8650/medagentsim#-contributing](https://github.com/maxnorm8650/medagentsim#-contributing)

We welcome contributions to MedAgentSim! Please see [CONTRIBUTING.md](https://github.com/MAXNORM8650/MedAgentSim/blob/master/CONTRIBUTING.md) for details on how to get started.

## 📄 License

[https://github.com/maxnorm8650/medagentsim#-license](https://github.com/maxnorm8650/medagentsim#-license)

This project is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0) - see [https://creativecommons.org/licenses/by-nc-sa/4.0/](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.

## 📚 Citation

[https://github.com/maxnorm8650/medagentsim#-citation](https://github.com/maxnorm8650/medagentsim#-citation)

If you use MedAgentSim in your research, please cite our paper:

```
@inproceedings{almansooriandkumarMedAgentSim,
  title={Self-Evolving Multi-Agent Simulations for Realistic Clinical Interactions},
  author={Mohammad Almansoori and Komal Kumar and Hisham Cholakkal},
  booktitle={International Conference on Medical Image Computing and Computer-Assisted Intervention},
  year={2025}
}
```

## 🙏 Acknowledgements

[https://github.com/maxnorm8650/medagentsim#-acknowledgements](https://github.com/maxnorm8650/medagentsim#-acknowledgements)

- Thanks to [AgentClinic](https://github.com/samuelschmidgall/agentclinic), [Microsoft PromptBase](https://github.com/microsoft/promptbase), and [Generative Agents](https://github.com/joonspk-research/generative_agents) for open-sourcing their works
- Mohamed bin Zayed University of Artificial Intelligence for supporting this research
- We encourage you to support the following three talented artists whose assets were used in this project, especially if you are planning to use the assets included here for your own project: 
  - Background art: [PixyMoon (@_PixyMoon_)](https://twitter.com/_PixyMoon_)
  - Furniture/interior design: [LimeZu (@lime_px)](https://twitter.com/lime_px)
  - Character design: [ぴぽ (@pipohi)](https://twitter.com/pipohi)

## Other Resources

[https://github.com/maxnorm8650/medagentsim#other-resources](https://github.com/maxnorm8650/medagentsim#other-resources)

- Open-source multi-agent framework: [CAMEL-AI OWL](https://github.com/camel-ai/owl)
- Multi-agent framework: [OpenMANAUS](https://github.com/mannaandpoem/OpenManus)
- MedPrompt Blog: [The Power of Prompting](https://www.microsoft.com/en-us/research/blog/the-power-of-prompting/)
- MedPrompt Research Paper: [https://arxiv.org/abs/2311.16452](https://arxiv.org/abs/2311.16452)
- MedPrompt+: [Steering at the Frontier: Extending the Power of Prompting](https://www.microsoft.com/en-us/research/blog/steering-at-the-frontier-extending-the-power-of-prompting/)
## gBrain Temporal Metadata

- content_timestamp: 2025
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-01
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

