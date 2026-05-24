---
repo: os-copilot/os-copilot
url: https://github.com/os-copilot/os-copilot
content_timestamp: 2024-03-29
time_slice: 2024-Q1
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - OS-Copilot/OS-Copilot: An self-improving embodied conversational agent seamlessly integrated into the operating system to automate our daily tasks. · GitHub

**Source**: https://github.com/os-copilot/os-copilot

---

[Skip to content](https://github.com/os-copilot/os-copilot#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[OS-Copilot](https://github.com/OS-Copilot)

/
**[OS-Copilot](https://github.com/OS-Copilot/OS-Copilot)**

Public

- [Notifications](https://github.com/login?return_to=%2FOS-Copilot%2FOS-Copilot)You must be signed in to change notification settings
- [Fork
    202](https://github.com/login?return_to=%2FOS-Copilot%2FOS-Copilot)
- 
[Star
          1.8k](https://github.com/login?return_to=%2FOS-Copilot%2FOS-Copilot)

[https://github.com/OS-Copilot/OS-Copilot](https://github.com/OS-Copilot/OS-Copilot)

[Branches](https://github.com/OS-Copilot/OS-Copilot/branches)[Tags](https://github.com/OS-Copilot/OS-Copilot/tags)

[https://github.com/OS-Copilot/OS-Copilot/branches](https://github.com/OS-Copilot/OS-Copilot/branches)[https://github.com/OS-Copilot/OS-Copilot/tags](https://github.com/OS-Copilot/OS-Copilot/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History380 Commits380 Commits |  |  |  |
| .github/ISSUE_TEMPLATE | .github/ISSUE_TEMPLATE |  |  |
| docs | docs |  |  |
| examples | examples |  |  |
| fronted | fronted |  |  |
| oscopilot | oscopilot |  |  |
| pic | pic |  |  |
| test | test |  |  |
| working_dir | working_dir |  |  |
| .env_template | .env_template |  |  |
| .gitignore | .gitignore |  |  |
| .readthedocs.yaml | .readthedocs.yaml |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| course_learning.py | course_learning.py |  |  |
| environment.yml | environment.yml |  |  |
| quick_start.py | quick_start.py |  |  |
| requirements.txt | requirements.txt |  |  |
| setup.py | setup.py |  |  |
| View all files |  |  |  |

## Repository files navigation

# OS-Copilot: Towards Generalist Computer Agents with Self-Improvement

[https://github.com/os-copilot/os-copilot#os-copilot-towards-generalist-computer-agents-with-self-improvement](https://github.com/os-copilot/os-copilot#os-copilot-towards-generalist-computer-agents-with-self-improvement)

[https://os-copilot.github.io/](https://os-copilot.github.io/)[https://arxiv.org/pdf/2402.07456.pdf](https://arxiv.org/pdf/2402.07456.pdf)[https://os-copilot.readthedocs.io/en/latest/](https://os-copilot.readthedocs.io/en/latest/)[https://camo.githubusercontent.com/b5ee2140b8002196a21d37a714a79eb491f005f5c2026df62aeb675021374255/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d332e31302d626c7565](https://camo.githubusercontent.com/b5ee2140b8002196a21d37a714a79eb491f005f5c2026df62aeb675021374255/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d332e31302d626c7565)[https://discord.com/invite/rXS2XbgfaD](https://discord.com/invite/rXS2XbgfaD)[https://twitter.com/oscopilot](https://twitter.com/oscopilot)

[https://github.com/OS-Copilot/OS-Copilot/blob/main/pic/demo.png](https://github.com/OS-Copilot/OS-Copilot/blob/main/pic/demo.png)

## 🔥 News

[https://github.com/os-copilot/os-copilot#-news](https://github.com/os-copilot/os-copilot#-news)

- *2024.9*: 🎉 Now Friday is equipped with vision! Try out the new [friday_vision](https://github.com/OS-Copilot/OS-Copilot/tree/main/examples/friday_vision)! Currently still under development but more stable versions are expected soon.
- *2024.6*: 🎉 The front-end interface of OS-Copilot is now available. Go check it out in the [frontend](https://github.com/OS-Copilot/OS-Copilot/tree/main/fronted) directory!
- *2024.3*: 🎉 OS-Copilot is accepted at the [LLM Agents Workshop](https://llmagents.github.io/)@ICLR 2024!

## What is OS-Copilot

[https://github.com/os-copilot/os-copilot#what-is-os-copilot](https://github.com/os-copilot/os-copilot#what-is-os-copilot)

OS-Copilot is an open-source library to build generalist agents capable of automatically interfacing with comprehensive elements in an operating system (OS), including the web, code terminals, files, multimedia, and various third-party applications.

## ⚡️ Quickstart

[https://github.com/os-copilot/os-copilot#%EF%B8%8F-quickstart](https://github.com/os-copilot/os-copilot#%EF%B8%8F-quickstart)

1. 

**Clone the GitHub Repository:**

```
git clone https://github.com/OS-Copilot/OS-Copilot.git
```

2. 

**Set Up Python Environment and Install Dependencies:**

```
conda create -n oscopilot_env python=3.10 -y
conda activate oscopilot_env

cd OS-Copilot
pip install -e .
```

3. 

**Set OpenAI API Key:** Configure your OpenAI API key in [.env](https://github.com/OS-Copilot/OS-Copilot/blob/main/.env).

```
cp .env_template .env
```

4. 

**Now you are ready to have fun:**

```
python quick_start.py
```

* **FRIDAY currently only supports single-round conversation**.

## 🛠️ Tutorial

[https://github.com/os-copilot/os-copilot#%EF%B8%8F-tutorial](https://github.com/os-copilot/os-copilot#%EF%B8%8F-tutorial)

| Level | Tutorial | Description |
|---|---|---|
| Beginner | Installation | Explore three methods to install FRIDAY. |
| Beginner | Getting Started | The simplest demonstration of FRIDAY with a quick_start.py script. |
| Intermediate | Adding Your Tools | Adding and removing tools to the FRIDAY. |
| Intermediate | Deploying API Services | Demonstrate the deployment of API services for FRIDAY. |
| Intermediate | Example: Automating Excel Tasks | Automating Excel control using FRIDAY. |
| Intermediate | Enhancing FRIDAY with Self-Learning for Excel Task Automation | Improved Excel control with self-directed learning. |
| Advanced | Designing New API Tools | Guides on deploying custom API tools for FRIDAY to extend its functionalities. |

## 💻 User Interface (UI)

[https://github.com/os-copilot/os-copilot#-user-interface-ui](https://github.com/os-copilot/os-copilot#-user-interface-ui)

**Enhance Your Experience with Our Intuitive Frontend!** This interface is crafted for effortless control of your agents. For more details, visit [OS-Copilot Frontend](https://github.com/OS-Copilot/OS-Copilot/tree/main/fronted).

## 🏫 Community

[https://github.com/os-copilot/os-copilot#-community](https://github.com/os-copilot/os-copilot#-community)

Join our community to connect with other enthusiasts, researchers and developers:

- **[Discord](https://discord.com/invite/rXS2XbgfaD)**: Join our Discord server for real-time discussions and support.
- **[Twitter](https://twitter.com/oscopilot)**: Follow our Twitter to get latest new or tag us to share your demos!

## 👨‍💻‍ Contributing

[https://github.com/os-copilot/os-copilot#%E2%80%8D%E2%80%8D-contributing](https://github.com/os-copilot/os-copilot#%E2%80%8D%E2%80%8D-contributing)

**Visit [the roadmap](https://github.com/OS-Copilot/OS-Copilot/blob/main/docs/roadmap.md) to preview what the community is working on and become a contributor!**

[https://github.com/OS-Copilot/OS-Copilot/graphs/contributors](https://github.com/OS-Copilot/OS-Copilot/graphs/contributors)

## 🛡 Disclaimer

[https://github.com/os-copilot/os-copilot#-disclaimer](https://github.com/os-copilot/os-copilot#-disclaimer)

OS-Copilot is provided "as is" without warranty of any kind. Users assume full responsibility for any risks associated with its use, including **potential data loss** or **changes to system settings**. The developers of OS-Copilot are not liable for any damages or losses resulting from its use. Users must ensure their actions comply with applicable laws and regulations.

## 🔎 Citation

[https://github.com/os-copilot/os-copilot#-citation](https://github.com/os-copilot/os-copilot#-citation)

```
@article{wu2024copilot,
  title={Os-copilot: Towards generalist computer agents with self-improvement},
  author={Wu, Zhiyong and Han, Chengcheng and Ding, Zichen and Weng, Zhenmin and Liu, Zhoumianze and Yao, Shunyu and Yu, Tao and Kong, Lingpeng},
  journal={arXiv preprint arXiv:2402.07456},
  year={2024}
}
```

## 📬 Contact

[https://github.com/os-copilot/os-copilot#-contact](https://github.com/os-copilot/os-copilot#-contact)

If you have any inquiries, suggestions, or wish to contact us for any reason, we warmly invite you to email us at [wuzhiyong@pjlab.org.cn](mailto:wuzhiyong@pjlab.org.cn).

## Star History

[https://github.com/os-copilot/os-copilot#star-history](https://github.com/os-copilot/os-copilot#star-history)

[https://camo.githubusercontent.com/cb7113f54263a4979c887f321a3aab1ef02a2a642a596013e4c6824da961bdbc/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d4f532d436f70696c6f742f4f532d436f70696c6f7426747970653d44617465](https://camo.githubusercontent.com/cb7113f54263a4979c887f321a3aab1ef02a2a642a596013e4c6824da961bdbc/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d4f532d436f70696c6f742f4f532d436f70696c6f7426747970653d44617465)

## About

         An self-improving embodied conversational agent seamlessly integrated into the operating system to automate our daily tasks.        

### Resources

[Readme](https://github.com/os-copilot/os-copilot#readme-ov-file)

### License

[MIT license](https://github.com/os-copilot/os-copilot#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/OS-Copilot/OS-Copilot/activity)

[Custom properties](https://github.com/OS-Copilot/OS-Copilot/custom-properties)

### Stars

[1.8k
        stars](https://github.com/OS-Copilot/OS-Copilot/stargazers)

### Watchers

[21
        watching](https://github.com/OS-Copilot/OS-Copilot/watchers)

### Forks

[202
        forks](https://github.com/OS-Copilot/OS-Copilot/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FOS-Copilot%2FOS-Copilot&report=OS-Copilot+%28user%29)

## [Releases
      1](https://github.com/OS-Copilot/OS-Copilot/releases)

[v0.1.0
        
          Latest
      
      Mar 29, 2024](https://github.com/OS-Copilot/OS-Copilot/releases/tag/v0.1.0)

## [Packages
      0](https://github.com/orgs/OS-Copilot/packages?repo_name=OS-Copilot)

###         Uh oh! 

There was an error while loading. Please reload this page.

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/OS-Copilot/OS-Copilot/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

## Languages

- [Python
          91.9%](https://github.com/OS-Copilot/OS-Copilot/search?l=python)
- [JavaScript
          4.6%](https://github.com/OS-Copilot/OS-Copilot/search?l=javascript)
- [CSS
          3.4%](https://github.com/OS-Copilot/OS-Copilot/search?l=css)
- [HTML
          0.1%](https://github.com/OS-Copilot/OS-Copilot/search?l=html)

     You can’t perform that action at this time.
## gBrain Temporal Metadata

- content_timestamp: 2024-03-29
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2024-Q1
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

