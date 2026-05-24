---
repo: internlm/polar
url: https://github.com/internlm/polar
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - InternLM/POLAR: Pre-trained, Scalable, High-performance Reward Models via Policy Discriminative Learning. · GitHub

**Source**: https://github.com/internlm/polar

---

[Skip to content](https://github.com/internlm/polar#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[InternLM](https://github.com/InternLM)

/
**[POLAR](https://github.com/InternLM/POLAR)**

Public

- [Notifications](https://github.com/login?return_to=%2FInternLM%2FPOLAR)You must be signed in to change notification settings
- [Fork
    4](https://github.com/login?return_to=%2FInternLM%2FPOLAR)
- 
[Star
          163](https://github.com/login?return_to=%2FInternLM%2FPOLAR)

[https://github.com/InternLM/POLAR](https://github.com/InternLM/POLAR)

[Branches](https://github.com/InternLM/POLAR/branches)[Tags](https://github.com/InternLM/POLAR/tags)

[https://github.com/InternLM/POLAR/branches](https://github.com/InternLM/POLAR/branches)[https://github.com/InternLM/POLAR/tags](https://github.com/InternLM/POLAR/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History11 Commits11 Commits |  |  |  |
| assets | assets |  |  |
| examples | examples |  |  |
| src/polar | src/polar |  |  |
| verl @ 8fdc4d3 | verl @ 8fdc4d3 |  |  |
| .gitignore | .gitignore |  |  |
| .gitmodules | .gitmodules |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| README_zh-CN.md | README_zh-CN.md |  |  |
| View all files |  |  |  |

## Repository files navigation

[https://github.com/InternLM/POLAR/blob/main/assets/logo.png](https://github.com/InternLM/POLAR/blob/main/assets/logo.png)

[https://github.com/InternLM/POLAR/blob/main/LICENSE](https://github.com/InternLM/POLAR/blob/main/LICENSE)[https://github.com/InternLM/xtuner/](https://github.com/InternLM/xtuner/)[https://github.com/InternLM/lmdeploy/](https://github.com/InternLM/lmdeploy/)[https://github.com/sgl-project/sglang/](https://github.com/sgl-project/sglang/)[https://github.com/vllm-project/vllm/](https://github.com/vllm-project/vllm/)[https://github.com/volcengine/verl](https://github.com/volcengine/verl)

[🤗 HuggingFace](https://huggingface.co/collections/internlm/polar-68693f829d2e83ac5e6e124a) | [🤖 ModelScope](https://www.modelscope.cn/organization/Shanghai_AI_Laboratory) | [📜 Paper](https://arxiv.org/abs/2507.05197)

[English](https://github.com/InternLM/POLAR/blob/main/README.md) | [简体中文](https://github.com/InternLM/POLAR/blob/main/README_zh-CN.md)

# Latest News 🎉

[https://github.com/internlm/polar#latest-news-](https://github.com/internlm/polar#latest-news-)

- **[2025/09]** Our POLAR paper has been accepted by Neurips 2025.
- **[2025/09]** POLAR now supports RFT (Reinforcement Fine-tuning) training using VERL.

# Introduction

[https://github.com/internlm/polar#introduction](https://github.com/internlm/polar#introduction)

POLAR represents a significant breakthrough in scalar-based reward models achieved through large-scale pre-training. It leverages the innovative **POL**icy Discrimin**A**tive Lea**R**ning (**POLAR**) paradigm——a scalable, high-level optimization objective——to effectively discriminate between policies using a large-scale synthetic corpora. Following pre-training, POLAR RMs are fine-tuned with minimal preference data, rapidly aligning with human preferences. Key features of POLAR include:

- 

**Innovative Pre-training Paradigm:**  POLAR trains a reward model to discern identical policies and discriminate different ones. Unlike traditional reward modeling methods relying on absolute preferences, POLAR captures the relative difference between two policies, which is a scalable, high-level optimization objective suitable for modeling generic ranking relationships.

- 

**Tailored for Reinforcement Fine-tuning:** POLAR assigns rewards to LLM trajectories based on given references, perfectly aligning with the Reinforcement Fine-tuning (RFT) framework. POLAR provides a promising solution for applying RFT in generic scenarios.

- 

**Superior Performance and Generalization:** POLAR achieves state-of-the-art results on downstream reinforcement learning tasks, consistently delivering accurate and reliable reward signals that generalize effectively to unseen scenarios and significantly reducing reward hacking.

- 

**Easy to Customize:** Pre-trained checkpoints of POLAR are available, enabling researchers to conveniently fine-tune the RM for various customized scenarios, thus facilitating straightforward adaptation and expansion tailored to specific applications and experimental requirements.

[https://github.com/InternLM/POLAR/blob/main/assets/intro.jpeg](https://github.com/InternLM/POLAR/blob/main/assets/intro.jpeg)

# Model Zoo

[https://github.com/internlm/polar#model-zoo](https://github.com/internlm/polar#model-zoo)

We release POLAR reward models in sizes of 1.8B and 7B parameters. The "base" models (POLAR-1.8B-Base and POLAR-7B-Base) refer to pre-trained-only checkpoints, ideal for customized fine-tuning according to specific preferences. The "ready-to-use" checkpoints (POLAR-1.8B and POLAR-7B) have been already fine-tuned on general preference data, making them suitable for immediate use in most scenarios.

| Model | Transformers(HF) | ModelScope(HF) |
|---|---|---|
| POLAR-1.8B-Base | 🤗 POLAR-1_8B-Base | 🤖 POLAR-1_8B-Base |
| POLAR-1.8B | 🤗 POLAR-1_8B | 🤖 POLAR-1_8B |
| POLAR-7B-Base | 🤗 POLAR-7B-Base | 🤖 POLAR-7B-Base |
| POLAR-7B | 🤗 POLAR-7B | 🤖 POLAR-7B |

# Performance

[https://github.com/internlm/polar#performance](https://github.com/internlm/polar#performance)

We conducted a comprehensive evaluation of POLAR via the Proximal Policy Optimization (PPO) algorithm. We evaluate the downstream RL performances of four different policy models using [OpenCompass](https://github.com/internLM/OpenCompass/). More details are available in our [Paper](https://arxiv.org/abs/2507.05197).

[https://github.com/InternLM/POLAR/blob/main/assets/result.png](https://github.com/InternLM/POLAR/blob/main/assets/result.png)

# Quick Start

[https://github.com/internlm/polar#quick-start](https://github.com/internlm/polar#quick-start)

This repository provides a `RewardModelClient` class (`src/polar/reward_func.py`) for querying reward values from a remote POLAR server. It handles input encoding, communication with different backends (sglang, vllm, lmdeploy), and returns the reward scores.

```
from src.polar import RewardModelClient
```

Optionally, you can also use [XTuner](https://github.com/InternLM/xtuner)’s implementation by installing XTuner and importing the class from XTuner.

```
from xtuner.utils import RewardModelClient
```

For XTuner installation instructions, see the [Fine-tune](https://github.com/internlm/polar#fine-tune) section below.

## Inference

[https://github.com/internlm/polar#inference](https://github.com/internlm/polar#inference)

We support reward inference through [lmdeploy](https://github.com/InternLM/lmdeploy/), [sglang](https://github.com/sgl-project/sglang/), and [vllm](https://github.com/vllm-project/vllm/). We recommend setting up a virtual environment with conda when using these inference engines to prevent potential dependency conflicts.

### Data format

[https://github.com/internlm/polar#data-format](https://github.com/internlm/polar#data-format)

Unlike traditional reward models, POLAR requires an additional reference trajectory as a demonstration and evaluate candidate trajectories by measuring their consistency with the provided reference.

```
data = [
    {
        "prompt": [{"role": "user", "content": "What is the capital of China?"}],
        "reference": [{"role": "assistant", "content": "Beijing."}],
        "output": [{"role": "assistant", "content": "Beijing."}]
    },
    {
        "prompt": [{"role": "user", "content": "What is the capital of China?"}],
        "reference": [{"role": "assistant", "content": "Beijing."}],
        "output": [{"role": "assistant", "content": "Shanghai."}]
    }
]
```

### Inference with transformers

[https://github.com/internlm/polar#inference-with-transformers](https://github.com/internlm/polar#inference-with-transformers)

#### Reward request

[https://github.com/internlm/polar#reward-request](https://github.com/internlm/polar#reward-request)

To load the POLAR model using transformers, use the following code to get rewards:

```
from transformers import AutoModel, AutoTokenizer
from src.polar import RewardModelClient
# from xtuner.utils import RewardModelClient

model_name = 'internlm/POLAR-7B'

model = AutoModel.from_pretrained(
    model_name,
    device_map="cuda", 
    trust_remote_code=True
)
tokenizer = AutoTokenizer.from_pretrained(model_name, trust_remote_code=True)

client = RewardModelClient(model_name)
encoded_data = client.encode(data)
batch = tokenizer(encoded_data, return_tensors='pt', padding=True).to('cuda')
outputs = model(**batch)
rewards = outputs[0].squeeze(-1).cpu().tolist()
print(rewards)
# [-0.5702977776527405, -11.030370712280273] for previous example data
```

### Inference with lmdeploy

[https://github.com/internlm/polar#inference-with-lmdeploy](https://github.com/internlm/polar#inference-with-lmdeploy)

[LMDeploy](https://github.com/InternLM/lmdeploy) is a toolkit for compressing, deploying, and serving LLMs.

#### Requirements

[https://github.com/internlm/polar#requirements](https://github.com/internlm/polar#requirements)

- lmdeploy >= 0.9.1

#### Server Launch

[https://github.com/internlm/polar#server-launch](https://github.com/internlm/polar#server-launch)

```
lmdeploy serve api_server internlm/POLAR-7B --backend pytorch --server-port 30000
```

#### Client Request

[https://github.com/internlm/polar#client-request](https://github.com/internlm/polar#client-request)

```
from src.polar import RewardModelClient
# from xtuner.utils import RewardModelClient

client = RewardModelClient("internlm/POLAR-7B",
                           server_type="lmdeploy",
                           server_address="127.0.0.1:30000")

# Request rewards directly
rewards = client(data)
print(rewards)

# First encode data and then get rewards via the request function.
encoded_data = client.encode(data)
rewards = client.lmdeploy_request_reward(encoded_data)
print(rewards)
```

### Inference with sglang

[https://github.com/internlm/polar#inference-with-sglang](https://github.com/internlm/polar#inference-with-sglang)

#### Requirements

[https://github.com/internlm/polar#requirements-1](https://github.com/internlm/polar#requirements-1)

- 0.4.3.post4 <= sglang <= 0.4.4.post1

#### Server Launch

[https://github.com/internlm/polar#server-launch-1](https://github.com/internlm/polar#server-launch-1)

```
python3 -m sglang.launch_server --model internlm/POLAR-7B --trust-remote-code --is-embedding --dp 4 --tp 2 --mem-fraction-static 0.9 --port 30000
```

#### Client Request

[https://github.com/internlm/polar#client-request-1](https://github.com/internlm/polar#client-request-1)

```
from src.polar import RewardModelClient
# from xtuner.utils import RewardModelClient

client = RewardModelClient("internlm/POLAR-7B",
                           server_type="sglang",
                           server_address="127.0.0.1:30000")

# Request rewards directly
rewards = client(data)
print(rewards)

# First encode data and then get rewards via the request function.
encoded_data = client.encode(data)
rewards = client.sglang_request_reward(encoded_data)
print(rewards)
```

### Inference with vllm

[https://github.com/internlm/polar#inference-with-vllm](https://github.com/internlm/polar#inference-with-vllm)

#### Requirements

[https://github.com/internlm/polar#requirements-2](https://github.com/internlm/polar#requirements-2)

- vllm >= 0.8.0

#### Server Launch

[https://github.com/internlm/polar#server-launch-2](https://github.com/internlm/polar#server-launch-2)

```
vllm serve internlm/POLAR-7B --task=reward --trust-remote-code --tensor-parallel-size=2 --port 30000
```

#### Client Request

[https://github.com/internlm/polar#client-request-2](https://github.com/internlm/polar#client-request-2)

```
from src.polar import RewardModelClient
# from xtuner.utils import RewardModelClient

client = RewardModelClient("internlm/POLAR-7B",
                           server_type="vllm",
                           server_address="127.0.0.1:30000")

# Request rewards directly
rewards = client(data)
print(rewards)

# First encode data and then get rewards via the request function.
encoded_data = client.encode(data)
rewards = client.vllm_request_reward(encoded_data)
print(rewards)
```

## RFT with VERL

[https://github.com/internlm/polar#rft-with-verl](https://github.com/internlm/polar#rft-with-verl)

POLAR can be easily integrated into various reinforcement learning frameworks. This repository provides an example showing how to use [VERL](https://github.com/volcengine/verl) for reinforcement fine-tuning (RFT) with POLAR reward models.

### Environment Setup

[https://github.com/internlm/polar#environment-setup](https://github.com/internlm/polar#environment-setup)

Please refer to the [VERL official installation guide](https://github.com/volcengine/verl) for detailed environment setup instructions.

> **Note**: For training Qwen2.5 series, we recommend using the inference backend **vLLM 0.8.3** and **Transformers 4.50.3** for optimal performance. A higher version of transformers may cause training instability of Qwen2.5 series.

### Data Format

[https://github.com/internlm/polar#data-format-1](https://github.com/internlm/polar#data-format-1)

Training data should be in Parquet format with the following structure:

```
{
    "data_source": "dataset_name",
    "prompt": [{"role": "user", "content": "..."}, ...],
    "ability": "alility_type",
    "reward_model": {
        "style": "polar",
        "ground_truth": [{"role": "assistant", "content": "..."}]
    }
    "extra_info": {
        # The same as prompt. The purpose is for compatibible usage of verl and polar.
        "prompt": [{"role": "user", "content": "..."}, ...],
    }
}
```

### Training steps

[https://github.com/internlm/polar#training-steps](https://github.com/internlm/polar#training-steps)

- 

**Step 1:** POLAR Deployment

Deploy the POLAR reward model following the above [Inference](https://github.com/internlm/polar#inference) instructions. Update the server configuration in `src/polar/reward_func.py`:

```
# Config reward model server
ADDRESS = "your_server_ip:port"  # Modify according to your server address
SERVER_TYPE = "sglang"  # Options: "sglang", "vllm", "lmdeploy"
MODEL_PATH = "internlm/POLAR-7B"
```

- 

**Step 2:** Data Preparation

Prepare your training data in Parquet format. You can use the provided data preprocessing scripts:

```
# Example: Process HH-RLHF dataset
python examples/data_preprocess/full_hh_rlhf.py --local_dir ~/data/hh_rlhf
```

- 

**Step 3:** Configure Training Script

An example of training script: `examples/ppo/qwen2_5-7b_hh-rlhf.sh`.

- 

**Step 4:** Run Training

```
cd verl
bash ../examples/ppo/qwen2_5-7b_hh-rlhf.sh
```

### Results

[https://github.com/internlm/polar#results](https://github.com/internlm/polar#results)
