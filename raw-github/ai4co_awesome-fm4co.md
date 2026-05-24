---
repo: ai4co/awesome-fm4co
url: https://github.com/ai4co/awesome-fm4co
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - ai4co/awesome-fm4co: Recent research papers about Foundation Models for Combinatorial Optimization · GitHub

**Source**: https://github.com/ai4co/awesome-fm4co

---

[Skip to content](https://github.com/ai4co/awesome-fm4co#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[ai4co](https://github.com/ai4co)

/
**[awesome-fm4co](https://github.com/ai4co/awesome-fm4co)**

Public

- [Notifications](https://github.com/login?return_to=%2Fai4co%2Fawesome-fm4co)You must be signed in to change notification settings
- [Fork
    42](https://github.com/login?return_to=%2Fai4co%2Fawesome-fm4co)
- 
[Star
          534](https://github.com/login?return_to=%2Fai4co%2Fawesome-fm4co)

[https://github.com/ai4co/awesome-fm4co](https://github.com/ai4co/awesome-fm4co)

[Branches](https://github.com/ai4co/awesome-fm4co/branches)[Tags](https://github.com/ai4co/awesome-fm4co/tags)

[https://github.com/ai4co/awesome-fm4co/branches](https://github.com/ai4co/awesome-fm4co/branches)[https://github.com/ai4co/awesome-fm4co/tags](https://github.com/ai4co/awesome-fm4co/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History174 Commits174 Commits |  |  |  |
| .gitignore | .gitignore |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Foundation Models for Combinatorial Optimization

[https://github.com/ai4co/awesome-fm4co#foundation-models-for-combinatorial-optimization](https://github.com/ai4co/awesome-fm4co#foundation-models-for-combinatorial-optimization)

FM4CO contains interesting research papers (1) using **Existing Large Language Models for Combinatorial Optimization**, and (2) building **Domain Foundation Models for Combinatorial Optimization**.

---

### LLMs for Combinatorial Optimization

[https://github.com/ai4co/awesome-fm4co#llms-for-combinatorial-optimization](https://github.com/ai4co/awesome-fm4co#llms-for-combinatorial-optimization)

Most research utilizes existing FMs from language and vision domains to generate/improve solutions* or algorithms* (hyper-heuristic), yielding impressive results when integrated with problem-specific heuristics or general meta-heuristics. Other studies employ LLMs to investigate the interpretability* of COP solvers, automate problem formulation*, or simplify the use of domain-specific tools through text prompts. Given the capabilities of LLMs, this area of research is likely to garner increasing interest.

| Date | Paper | Link | Problem | Venue | Remark* |
|---|---|---|---|---|---|
| 2023.07 | Large Language Models for Supply Chain Optimization |  | Supply_Chain | arXiv | Algorithm w. Interpretability |
| 2023.09 | Can Language Models Solve Graph Problems in Natural Language? |  | Graph | NeurIPS 2023 | Solution |
| 2023.09 | Large Language Models as Optimizers |  | TSP | ICLR 2024 | Solution |
| 2023.10 | Chain-of-Experts: When LLMs Meet Complex Operations Research Problems |  | MILP | ICLR 2024 | Formulation |
| 2023.10 | OptiMUS: Scalable Optimization Modeling with (MI)LP Solvers and Large Language Models |  | MILP | ICML 2024 | Formulation |
| 2023.10 | AI-Copilot for Business Optimisation: A Framework and A Case Study in Production Scheduling |  | JSSP | arXiv | Formulation |
| 2023.11 | Large Language Models as Evolutionary Optimizers |  | TSP | CEC 2024 | Solution |
| 2023.11 | Algorithm Evolution Using Large Language Model |  | TSP | arXiv | Algorithm |
| 2023.12 | Mathematical discoveries from program search with large language models |  | BPP | Nature | Algorithm |
| 2023.12 | NPHardEval: Dynamic Benchmark on Reasoning Ability of Large Language Models via Complexity Classes |  | TSP,KP, GCP,MSP | ACL 2024 | Benchmark |
| 2024.02 | ReEvo: Large Language Models as Hyper-Heuristics with Reflective Evolution |  | TSP,VRP,OP, MKP,BPP,EDA | NeurIPS 2024 | Algorithm |
| 2024.02 | AutoSAT: Automatically Optimize SAT Solvers via Large Language Models |  | SAT | arXiv | Algorithm |
| 2024.02 | From Large Language Models and Optimization to Decision Optimization CoPilot: A Research Manifesto |  | MILP | arXiv | Formulation |
| 2024.03 | How Multimodal Integration Boost the Performance of LLM for Optimization: Case Study on Capacitated Vehicle Routing Problems |  | VRP | 2025 IEEE MCII | Solution |
| 2024.03 | RouteExplainer: An Explanation Framework for Vehicle Routing Problem |  | VRP | PAKDD 2024 | Interpretability |
| 2024.03 | Can Large Language Models Solve Robot Routing? |  | TSP,VRP | arXiv | Algorithm |
| 2024.05 | Evolution of Heuristics: Towards Efficient Automatic Algorithm Design Using Large Language Model |  | TSP,BPP,FSSP | ICML 2024 | Algorithm |
| 2024.05 | ORLM: Training Large Language Models for Optimization Modeling |  | General OPT | Operations Research | Formulation |
| 2024.05 | Self-Guiding Exploration for Combinatorial Problems |  | TSP,VRP,BPP, AP,KP,JSSP | NeurIPS 2024 | Solution |
| 2024.06 | Eyeballing Combinatorial Problems: A Case Study of Using Multimodal Large Language Models to Solve Traveling Salesman Problems |  | TSP | ISBCom 2024 | Solution |
| 2024.07 | Visual Reasoning and Multi-Agent Approach in Multimodal Large Language Models (MLLMs): Solving TSP and mTSP Combinatorial Challenges |  | TSP,mTSP | 2024 MDPI MAKE | Solution |
| 2024.07 | Solving General Natural-Language-Description Optimization Problems with Large Language Models |  | MILP | NAACL 2024 | Formulation |
| 2024.08 | Diagnosing Infeasible Optimization Problems Using Large Language Models |  | MILP | INFOR | Formulation |
| 2024.08 | LLMs can Schedule |  | JSSP | arXiv | Solution |
| 2024.09 | Multi-objective Evolution of Heuristic Using Large Language Model |  | TSP,BPP | AAAI 2025 | Algorithm |
| 2024.10 | Towards Foundation Models for Mixed Integer Linear Programming |  | MILP | ICLR 2025 | Formulation |
| 2024.10 | LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch |  | General OPT | ICLR 2025 | Formulation |
| 2024.10 | OptiBench: Benchmarking Large Language Models in Optimization Modeling with Equivalence-Detection Evaluation |  | MILP | Under Review | Benchmark |
| 2024.10 | OptiBench Meets ReSocratic: Measure and Improve LLMs for Optimization Modeling |  | MILP | ICLR 2025 | Benchmark |
| 2024.10 | DRoC: Elevating Large Language Models for Complex Vehicle Routing via Decomposed Retrieval of Constraints |  | 48VRPs | ICLR 2025 | Formulation |
| 2024.10 | STARJOB: Dataset for LLM-Driven Job Shop Scheduling |  | JSSP | Under Review | Solution |
| 2024.10 | LLM4Solver: Large Language Model for Efficient Algorithm Design of Combinatorial Optimization Solver |  | MILP | Under Review | Algorithm |
| 2024.10 | Unifying All Species: LLM-based Hyper-Heuristics for Multi-objective Optimization |  | TSP | Under Review | Algorithm |
| 2024.10 | Evo-Step: Evolutionary Generation and Stepwise Validation for Optimizing LLMs in OR |  | MILP | Under Review | Formulation |
| 2024.10 | Automatic programming via large language models with population self-evolution for dynamic job shop scheduling problem |  | DyJSSP | IEEE Trans. Fuzzy Syst. | Algorithm |
| 2024.11 | Large Language Models for Combinatorial Optimization of Design Structure Matrix |  | DSM | Proceedings of the Design Society 2025 | Solution |
| 2024.12 | HSEvo: Elevating Automatic Heuristic Design with Diversity-Driven Harmony Search and Genetic Algorithm Using LLMs |  | TSP,BPP,OP | AAAI 2025 | Algorithm |
| 2024.12 | Evaluating LLM Reasoning in the Operations Research Domain with ORQA |  | General OR | AAAI 2025 | Benchmark |
| 2024.12 | QUBE: Enhancing Automatic Heuristic Design via Quality-Uncertainty Balanced Evolution |  | OBP,TSP,CSP | arxiv | Algorithm |
| 2025.01 | Monte Carlo Tree Search for Comprehensive Exploration in LLM-Based Automatic Heuristic Design |  | TSP,CVRP,KP, BPP,MKP,ASP | ICML 2025 | Algorithm |
| 2025.01 | Bridging Visualization and Optimization: Multimodal Large Language Models on Graph-Structured Combinatorial Optimization |  | Influence Maximization, Network Dismantling | arXiv | Algorithm |
| 2025.01 | Can Large Language Models Be Trusted as Black-Box Evolutionary Optimizers for Combinatorial Problems? |  | Influence Maximization | IEEE Transactions on Network Science and Engineering | Algorithm |
| 2025.02 | Improving Existing Optimization Algorithms with LLMs |  | MIS | arXiv | Algorithm |
| 2025.02 | Planning of Heuristics: Strategic Planning on Large Language Models with Monte Carlo Tree Search for Automating Heuristic Optimization |  | TSP,FSSP | arXiv | Algorithm |
| 2025.02 | GraphThought: Graph Combinatorial Optimization with Thought Generation |  | MIS,MVC,TSP | arXiv | Algorithm |
| 2025.02 | EquivaMap: Leveraging LLMs for Automatic Equivalence Checking of Optimization Formulations |  | MILP | arXiv | Algorithm |
| 2025.02 | ARS: Automatic Routing Solver with Large Language Models |  | VRP | arXiv | Benchmark & Algorithm |
| 2025.02 | Text2Zinc: A Cross-Domain Dataset for Modeling Optimization and Satisfaction Problems in MiniZinc |  | LP,MIP,CP | arXiv | Formulation (Dataset) |
| 2025.02 | GraphArena: Evaluating and Exploring Large Language Models on Graph Computation |  | MVC,MIS,MCP, TSP,MCS,GED | ICLR 2025 | Benchmark & Dataset & Model |
| 2025.03 | Leveraging Large Language Models to Develop Heuristics for Emerging Optimization Problems |  | UPMP | arXiv | Algorithm |
| 2025.03 | OR-LLM-Agent: Automating Modeling and Solving of Operations Research Optimization Problem with Reasoning Large Language Model |  | OP | arXiv | Formulation |
| 2025.03 | Combinatorial Optimization for All: Using LLMs to Aid Non-Experts in Improving Optimization Algorithms |  | TSP | Inteligencia Artificial 2026 | Algorithm |
| 2025.03 | Automatic MILP Model Construction for Multi-Robot Task Allocation and Scheduling Based on Large Language Models |  | MILP | IROS 2025 | Formulation |
| 2025.03 | Code Evolution Graphs: Understanding Large Language Model Driven Design of Algorithms |  | BBO,TSP,BPP | GECCO 2025 | Interpretability |
| 2025.04 | CO-Bench: Benchmarking Language Model Agents in Algorithm Search for Combinatorial Optimization |  | General COP | AAAI 2026 | Benchmark |
| 2025.04 | Algorithm Discovery With LLMs: Evolutionary Search Meets Reinforcement Learning |  | BPP,TSP,FP | COLM 2025 | Algorithm |
| 2025.04 | OptimAI: Optimization from Natural Language Using LLM-Powered AI Agents |  | MILP | arXiv | Formulation |
| 2025.04 | Fitness Landscape of Large Language Model-Assisted Automated Algorithm Search |  | OBP,TSP, CVRP,VRPTW | arXiv | Benchmark & Interpretability |
| 2025.04 | Large Language Models powered Neural Solvers for Generalized Vehicle Routing Problems |  | VRP | ICLR 2025 Workshop AgenticAI | Algorithm |
| 2025.05 | Efficient Heuristics Generation for Solving Combinatorial Optimization Problems Using Large Language Models |  | TSP,CVRP,BPP, MKP,OP | KDD 2025 | Algorithm |
| 2025.05 | CALM: Co-evolution of Algorithms and Language Model for Automatic Heuristic Design |  | TSP,KP,OBP,OP | ICLR 2026 | Algorithm |
| 2025.05 | Know the Ropes: A Heuristic Strategy for LLM-based Multi-Agent System Design |  | KP | arXiv | Solution |
| 2025.05 | A Comprehensive Evaluation of Contemporary ML-Based Solvers for Combinatorial Optimization |  | MIS,MDS, TSP,CVRP,CFLP, CPMP,FJSP,STP | ICML 2025 Workshop AI4Math | Benchmark |
| 2025.05 | LLM-Meta-SR: In-Context Learning for Evolving Selection Operators in Symbolic Regression |  | SR | arXiv | Algorithm |
| 2025.05 | RedAHD: Reduction-Based End-to-End Automatic Heuristic Design with Large Language Models |  | TSP,CVRP, KP,BPP,MKP | arXiv | Algorithm |
| 2025.05 | Generalizable Heuristic Generation Through Large Language Models with Meta-Optimization |  | TSP,CVRP,BPP | ICLR 2026 | Algorithm |
| 2025.05 | Large Language Model-driven Large Neighborhood Search for Large-Scale MILP Problems |  | MILP | ICML 2025 | Algorithm |
| 2025.05 | Solver-Informed RL: Grounding Large Language Models for Authentic Optimization Modeling |  | General OPT | NeurIPS 2025 | Formulation |
| 2025.06 | LLM-Driven Instance-Specific Heuristic Generation and Selection |  | OBPP,CVRP | arXiv | Algorithm |
| 2025.06 | ORMind: A Cognitive-Inspired End-to-End Reasoning Framework for Operations Research |  | OR | ACL 2025 | Formulation |
| 2025.06 | EALG: Evolutionary Adversarial Generation of Language Model–Guided Generators for Combinatorial Optimization |  | TSP,OP | arXiv | Algorithm |
| 2025.06 | CP-Bench: Evaluating Large Language Models for Constraint Modelling |  | CP | ECAI 2025 | Benchmark |
| 2025.06 | REMoH: A Reflective Evolution of Multi-objective Heuristics approach via Large Language Models |  | FJSSP | arXiv | Algorithm |
| 2025.06 | HeuriGym: An Agentic Benchmark for LLM-Crafted Heuristics in Combinatorial Optimization |  | TSP,SAT | ICLR 2026 | Benchmark |
| 2025.06 | ALE-Bench: A Benchmark for Long-Horizon Objective-Driven Algorithm Engineering |  | General OPT | NeurIPS 2025 Datasets and Benchmarks Track | Benchmark |
| 2025.06 | OPT-BENCH: Evaluating LLM Agent on Large-Scale Search Spaces Optimization Problems |  | GCP,KP,MCP, MIS,SCP,TSP | arXiv | Benchmark |
| 2025.06 | STRCMP: Integrating Graph Structural Priors with Language Models for Combinatorial Optimization |  | SAT | NeurIPS 2025 | Solution |
| 2025.06 | AlphaEvolve: A coding agent for scientific and algorithmic discovery |  | OPT | arXiv | Algorithm |
| 2025.06 | OpenEvolve: an open-source evolutionary coding agent |  | OPT | GitHub | Algorithm |
| 2025.06 | HeurAgenix: Leveraging LLMs for Solving Complex Combinatorial Optimization Challenges |  | TSP,CVRP,JSSP, MaxCut,MKP | arXiv | Algorithm |
| 2025.07 | Large Language Models for Combinatorial Optimization: A Systematic Review |  | CO | ACM Computing Surveys 2025 | Review |
| 2025.07 | Fine-tuning Large Language Model for Automated Algorithm Design |  | ASP,TSP,CVRP | arXiv | Algorithm |
| 2025.07 | DHEvo: Data-Algorithm Based Heuristic Evolution for Generalizable MILP Solving |  | MILP | arXiv | Algorithm |
| 2025.07 | MeLA: A Metacognitive LLM-Driven Architecture for Automatic Heuristic Design |  | TSP,BPP,ACS | arXiv | Algorithm |
| 2025.07 | Pareto-Grid-Guided Large Language Models for Fast and High-Quality Heuristics Design in Multi-Objective Combinatorial Optimization |  | TSP,CVRP,KP | AAAI 2026 | Algorithm |
| 2025.07 | Automatically discovering heuristics in a complex SAT solver with large language models |  | SAT | arXiv | Algorithm |
| 2025.07 | Nested-Refinement Metamorphosis: Reflective Evolution for Efficient Optimization of Networking Problems |  | TSP,MKP,CVRP | ACL 2025 | Algorithm |
| 2025.08 | ReflecSched: Solving Dynamic Flexible Job-Shop Scheduling via LLM-Powered Hierarchical Reflection |  | DFJSP | arxiv | Solution |
| 2025.08 | OptiHive: Ensemble Selection for LLM-Based Optimization via Statistical Modeling |  | MDVRP,WSCP | arxiv | Formulation |
| 2025.08 | EoH-S: Evolution of Heuristic Set using LLMs for Automated Heuristic Design |  | OBP,TSP,CVRP | AAAI 2026 | Algorithm |
| 2025.08 | X-evolve: Solution space evolution powered by large language models |  | CSP,BPP, Shannon capacity | arxiv | Algorithm |
| 2025.08 | EvoCut: Strengthening Integer Programs via Evolution-Guided Language Models |  | MILP | arxiv | Formulation |
| 2025.08 | HIFO-PROMPT: Prompting with Hindsight and Foresight For LLM-Based Automatic Heuristic Design |  | TSP,OBP,FSSP | ICLR 2026 | Algorithm |
| 2025.08 | MOTIF: Multi-strategy Optimization via Turn-based Interactive Framework |  | TSP,CVRP,OP,BPP,MKP | AAAI 2026 | Algorithm |
| 2025.09 | LLM-QUBO: An End-to-End Framework for Automated QUBO Transformation from Natural Language Problem Descriptions |  | MILP | AAAI Symposium on Quantum Information & Machine Learning | Formulation |
| 2025.09 | AutoPBO: LLM-powered Optimization for Local Search PBO Solvers |  | PBO | arxiv | Solution |
| 2025.09 | Autonomous Code Evolution MeetsNP-Completeness |  | SAT | arxiv | Solution |
| 2025.09 | LLM-based Instance-driven Heuristic Bias in the Context of a Biased Random Key Genetic Algorithm |  | LRS | arxiv | Algorithm |
| 2025.09 | Learn to Relax with Large Language Models: Solving Nonlinear Combinatorial Optimization Problems via Bidirectional Coevolution |  | MDD,SFL,TSPTW | arxiv | Algorithm |
| 2025.09 | DaSAThco: Data-Aware SAT Heuristics Combinations Optimization via Large Language Models |  | SAT | arxiv | Algorithm |
| 2025.09 | Large Language Models as End-to-end Combinatorial Optimization Solvers |  | TSP,OP,CVRP, MIS,MVC,PFSP,JSSP | NeurIPS 2025 | Solution |
| 2025.09 | Large Language Models and Operations Research: A Structured Survey |  | OR | arxiv | Review |
| 2025.09 | ShinkaEvolve: Towards Open-Ended And Sample-Efficient Program Evolution |  | OPT | ICLR 2026 | Algorithm |
| 2025.09 | StepORLM: A Self-Evolving Framework With Generative Process Supervision For Operations Research Language Models |  | OR | ICLR 2026 | Formulation |
| 2025.09 | OptiMind: Teaching LLMs to Think Like Optimization Experts |  | MILP | arxiv | Formulation |
| 2025.09 | AutoEP: LLMs-Driven Automation of Hyperparameter Evolution for Metaheuristic Algorithms |  | TSP,CVRP,FSSP | ICLR 2026 | Algorithm |
| 2025.09 | ViTSP: A Vision Language Models Guided Framework for Large-Scale Traveling Salesman Problems |  | TSP | ICLR 2026 | Algorithm |
| 2025.09 | Experience-guided reflective co-evolution of prompts and heuristics for automatic algorithm design |  | TSP,BPP | arxiv | Algorithm |
| 2025.10 | EvoSpeak: Large Language Models for Interpretable Genetic Programming-Evolved Heuristics |  | DFJSS | arxiv | Algorithm |
| 2025.10 | VRPAgent: LLM-Driven Discovery of Heuristic Operators for Vehicle Routing Problems |  | VRP | arxiv | Algorithm |
| 2025.10 | Refining Hybrid Genetic Search for CVRP via Reinforcement Learning-Finetuned LLM |  | CVRP | ICLR 2026 | Algorithm |
| 2025.10 | CodeEvolve: an open source evolutionary coding agent for algorithm discovery and optimization |  | OPT | arXiv | Algorithm |
| 2025.10 | An Agentic Framework with LLMs for Solving Complex Vehicle Routing Problems |  | VRP | ICLR 2026 | Formulation |
| 2025.10 | OptiTree: Hierarchical Thoughts Generation with Tree Search for LLM Optimization Modeling |  | OR | NeurIPS 2025 | Formulation |
| 2025.10 | Glia: A Human-Inspired AI for Automated Systems Design and Optimization |  | Systems routing + scheduling | arxiv | Algorithm |
| 2025.10 | Discovering Heuristics with Large Language Models (LLMs) for Mixed-Integer Programs: Single-Machine Scheduling |  | SMTT | Computers & Operations Research | Algorithm |
| 2025.11 | Bridging Synthetic and Real Routing Problems via LLM-Guided Instance Generation and Progressive Adaptation |  | TSP,CVRP | AAAI 2026 | Algorithm |
| 2025.11 | irace-evo: Automatic Algorithm Configuration Extended With LLM-Based Code Evolution |  | VSBPP | arxiv | Algorithm |
| 2025.11 | LLM4EO: Large Language Model for Evolutionary Optimization in Flexible Job Shop Scheduling |  | FJSP | arxiv | Algorithm |
| 2025.11 | ACCORD: Autoregressive Constraint-satisfying Generation for COmbinatorial Optimization with Routing and Dynamic attention |  | FSSP,JSSP,BPP, KP,TSP,VRP | Under Review | Solution & Benchmark |
| 2025.11 | AutoFloorplan: Evolving Heuristics for Chip Floorplanning with Large Language Models and Textual Gradient-Guided Repair |  | Floorplanning | Under Review | Algorithm |
| 2025.11 | TPD-AHD: Textual Preference Differentiation for LLM-Based Automatic Heuristic Design |  | TSP,CVRP,JSSP, MKP, VRP,MASP,CFLP | Under Review | Algorithm |
| 2025.11 | Aligning LLMs with Graph Neural Solvers for Combinatorial Optimization |  | TSP,CVRP,KP, MVCP,MISP | Under Review | Algorithm |
| 2025.11 | Large Language Model Guided Dynamic Branching Rule Scheduling in Branch-and-Bound |  | MILP | Under Review | Algorithm |
| 2025.11 | Online Algorithm Configuration for MILP Re-Optimization with LLM Guidance |  | MILP | Under Review | Algorithm |
| 2025.11 | Experience-Guided Reflective Co-Evolution of Prompts and Heuristics for Automatic Algorithm Design |  | TSP, BPP | Under Review | Algorithm |
| 2025.11 | Adversarial examples for heuristics in combinatorial optimization: An LLM based approach |  | KP,BPP | Under Review | Algorithm |
| 2025.11 | Rethinking Code Similarity for Automated Algorithm Design with LLMs |  | ASP,TSP,CPP | ICLR 2026 | Algorithm |
| 2025.11 | AutoMOAE: Multi-Objective Auto-Algorithm Evolution |  | GCP,TSP | Under Review | Algorithm |
| 2025.11 | Fusing LLMs with Scientific Literature for Heuristic Discovery |  | TSP | Under Review | Algorithm |
| 2025.11 | Cognitively Inspired Reflective Evolution: Interactive Multi-Turn LLM–EA Synthesis of Heuristics for Combinatorial Optimization |  | TSP,BPP | Under Review | Algorithm |
| 2025.11 | Hierarchical Representations for Cross-task Automated Heuristic Design using LLMs |  | TSP,CVRP,FSSP, BPP,ASP | Under Review | Algorithm |
| 2025.11 | ThetaEvolve: Test-time Learning on Open Problems |  | HadamardMatrix, CirclePacking | arxiv | Algorithm |
| 2025.11 | Leveraging large language models for efficient scheduling in Human–Robot collaborative flexible manufacturing systems |  | DFJSP | npj Adv. Manuf. | Algorithm |
| 2025.12 | RoCo: Role-Based LLMs Collaboration for Automatic Heuristic Design |  | TSP,OP,CVRP, MKP,offline BPP | arxiv | Algorithm |
| 2025.12 | CogMCTS: A Novel Cognitive-Guided Monte Carlo Tree Search Framework for Iterative Heuristic Evolution with Large Language Models |  | TSP,OP,CVRP, MKP,KP | arxiv | Algorithm |
| 2025.12 | Behavior and Representation in Large Language Models for Combinatorial Optimization: From Feature Extraction to Algorithm Selection |  | BP,GCP,JSP,KP | arxiv | Analysis |
| 2025.12 | LAPPI: Interactive Optimization with LLM-Assisted Preference-Based Problem Instantiation |  | TSP,OP | IEEE Access | Formulation |
| 2026.01 | DRAGON: LLM-Driven Decomposition and Reconstruction Agents for Large-Scale Combinatorial Optimization |  | TSP,CVRP, BPP,MKP | AAMAS 2026 | Algorithm |
| 2026.01 | LLM-Assisted Automatic Dispatching Rule Design for Dynamic Flexible Assembly Flow Shop Scheduling |  | Dynamic FAFSP | arxiv | Algorithm |
| 2026.01 | Evolving Interdependent Operators with Large Language Models for Multi-Objective Combinatorial Optimization |  | MOCP | arxiv | Algorithm |
| 2026.01 | Algorithmic Prompt-Augmentation for Efficient LLM-Based Heuristic Design for A* Search |  | SP,ULPMP | arxiv | Algorithm |
| 2026.01 | Rethinking LLM-Driven Heuristic Design: Generating Efficient and Specialized Solvers via Dynamics-Aware Optimization |  | TSP,CVRP, BPP,MKP | arxiv | Algorithm |
| 2026.01 | PathWise: Planning through World Model for Automated Heuristic Design via Self-Evolving LLMs |  | TSP,KP,CVRP, MKP,OP,BPP | arxiv | Algorithm |
| 2026.01 | LLaMEA-SAGE: Guiding Automated Algorithm Design with Structural Feedback from Explainable AI |  | BBO | arxiv | Algorithm |
| 2026.01 | Game-Theoretic Co-Evolution for LLM-Based Heuristic Discovery |  | OBP,TSP,CVRP | arxiv | Algorithm |
| 2026.01 | Beyond the Node: Clade-level Selection for Efficient MCTS in Automatic Heuristic Design |  | TSP,KP,CVRP, MKP,BPP | arxiv | Algorithm |
| 2026.02 | Hard Constraints Meet Soft Generation: Guaranteed Feasibility for LLM-based Combinatorial Optimization |  | TSP,OP,CVRP,MIS, MVC,PFSP,JSSP | arxiv | Solution |
| 2026.02 | Reasoning in a Combinatorial and Constrained World: Benchmarking LLMs on Natural-Language Combinatorial Optimization |  | COP | arxiv | Benchmark |
| 2026.02 | G-LNS: Generative Large Neighborhood Search for LLM-Based Automatic Heuristic Design |  | TSP,CVRP,OVRP | arxiv | Algorithm |
| 2026.02 | OR-Agent: Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery |  | OR | arxiv | Solution |
| 2026.02 | Heuristic Search as Language-Guided Program Optimization |  | PDPTW,crew pairing, TMP,Intra-op scheduling | arxiv | Algorithm |
| 2026.02 | AdaEvolve: Adaptive LLM Driven Zeroth-Order Optimization |  | CirclePacking | arxiv | Algorithm |
| 2026.02 | ConstraintBench: Benchmarking LLM Constraint Reasoning on Direct Optimization |  | Optimization | arxiv | Benchmark |
| 2026.02 | Enhancing CVRP Solver through LLM-driven Automatic Heuristic Design |  | CVRP | arxiv | Algorithm |
| 2026.02 | EvoX: Meta-Evolution for Automated Discovery |  | CirclePacking | arxiv | Algorithm |
| 2026.03 | From Heuristic Selection to Automated Algorithm Design: LLMs Benefit from Strong Priors |  | OneMax | arxiv | Method |
| 2026.03 | DyACE: Dynamic Algorithm Co-evolution for Online Automated Heuristic Design with Large Language Model |  | JSSP,TSP,CVRP | arXiv | Algorithm |
| 2026.03 | CDEoH: Category-Driven Automatic Algorithm Design With Large Language Models |  | OBP,TSP | arXiv | Algorithm |
| 2026.03 | AVO: Agentic Variation Operators for Autonomous Evolutionary Search |  | Kernel Optimization | arXiv | Algorithm |
| 2026.03 | DSevolve: Enabling Real-Time Adaptive Scheduling on Dynamic Shop Floor with LLM-Evolved Heuristic Portfolios |  | DFJSP | arXiv | Algorithm |
| 2026.04 | Infeasibility Aware Large Language Models for Combinatorial Optimization |  | Minor-embedding, k-coloring | arXiv | Solution |
| 2026.04 | NED-Tree: Bridging the Semantic Gap with Nonlinear Element Decomposition Tree for LLM Nonlinear Optimization Modeling |  | OR | arXiv | Formulation |
| 2026.04 | ReVEL: Multi-Turn Reflective LLM-Guided Heuristic Evolution via Structured Performance Feedback |  | BPP,TSP,CVRP | arXiv | Algorithm |
| 2026.04 | PyVRP^+: LLM-Driven Metacognitive Heuristic Evolution for Hybrid Genetic Search in Vehicle Routing Problems |  | VRP | AAMAS 2026 | Algorithm |
| 2026.04 | BEAM: Bi-level Memory-adaptive Algorithmic Evolution for LLM-Powered Heuristic Design |  | TSP,CVRP, BPP,MIS | arXiv | Algorithm |
| 2026.04 | AutoOR: Scalably Post-training LLMs to Autoformalize Operations Research Problems |  | `` | arXiv | Formulation |
| 2026.04 | Co-evolving Agent Architectures and Interpretable Reasoning for Automated Optimization |  | OR | arXiv | Formulation |
| 2026.04 | GR-Evolve: Design-Adaptive Global Routing via LLM-Driven Algorithm Evolution |  | EDA | arXiv | Algorithm |
| 2026.04 | A2DEPT: Large Language Model–Driven Automated Algorithm Design via Evolutionary Program Trees |  | MIS,CVRP, CFLP,FJSP | arXiv | Algorithm |
| 2026.04 | AutoQResearch: LLM-Guided Closed-Loop Policy Search for Adaptive Variational Quantum Optimization |  | MIS,CVRP | arXiv | Algorithm |
| 2026.04 | Design Structure Matrix Modularization with Large Language Models |  | DSM modularization | arXiv | Solution |
| 2026.05 | Back to the Beginning of Heuristic Design: Bridging Code and Knowledge with LLMs |  | TSP,CVRP,JSSP,OP,QAP | arXiv | Algorithm |
| 2026.05 | CoupleEvo: Evolving Heuristics for Coupled Optimization Problems Using Large Language Models |  | IRP,MRMUPMP | arXiv | Algorithm |
| 2026.05 | HMACE: Heterogeneous Multi-Agent Collaborative Evolution for Combinatorial Optimization |  | TSP,BPP, MKP,PFSP | arXiv | Algorithm |
| 2026.05 | AHD Agent: Agentic Reinforcement Learning for Automatic Heuristic Design |  | TSP,OP,MKP, CVRP,OVRP | arXiv | Algorithm |
| 2026.05 | LLM4Branch: Large Language Model for Discovering Efficient Branching Policies of Integer Programs |  | MILP | ICML 2026 | Algorithm |
| 2026.05 | Teacher-Aware Evolution of Heuristic Programs from Learned Optimization Policies |  | JSSP,TSP, CVRP,MaxCut | arxiv | Algorithm |
| 2026.05 | Formalize, Don’t Optimize: The Heuristic Trap in LLM-Generated Combinatorial Solvers |  | COP | arxiv | Benchmark |
| 2026.05 | Distribution-Aware Algorithm Design with LLM Agents |  | COP | arxiv | Algorithm |
| 2026.05 | LLM-Enabled Automated Algorithm Design for Multiuser Fluid Antenna Communications |  | FAS | arxiv | Algorithm |
| 2026.05 | Latent Heuristic Search: Continuous Optimization for Automated Algorithm Design |  | TSP,CVRP,OBP,KSP | arxiv | Algorithm |
| 2026.05 | Memory-Guided Tree Search with Cross-Branch Knowledge Transfer for LLM Solver Synthesis |  | ALP,PVRP,CLP, CLPWR,RCSPP, CSP,ESTP | arxiv | Algorithm |
| 2026.05 | Beyond Inference-Time Search: Reinforcement Learning Synthesizes Reusable Solvers |  | SDS | arxiv | Algorithm |

---

### Domain FMs for Combinatorial Optimization

[https://github.com/ai4co/awesome-fm4co#domain-fms-for-combinatorial-optimization](https://github.com/ai4co/awesome-fm4co#domain-fms-for-combinatorial-optimization)

Developing a domain FM capable of solving a wide range of COPs presents an intriguing and formidable challenge. Recent efforts in this area aim towards this ambitious goal by creating a unified architecture or representation applicable across various COPs.

| Date | Paper | Link | Problem | Venue |
|---|---|---|---|---|
| 2022.08 | One Model, Any CSP: Graph Neural Networks as Fast Global Search Heuristics for Constraint Satisfaction |  | CSP | IJCAI 2023 |
| 2023.05 | Efficient Training of Multi-task Combinatorial Neural Solver with Multi-armed Bandits |  | TSP,VRP,OP,KP | TMLR |
| 2024.02 | Multi-Task Learning for Routing Problem with Cross-Problem Zero-Shot Generalization |  | 16VRPs | KDD 2024 |
| 2024.03 | Towards a Generic Representation of Combinatorial Problems for Learning-Based Approaches |  | SAT,TSP,COL,KP | CPAIOR 2024 |
| 2024.04 | Cross-Problem Learning for Solving Vehicle Routing Problems |  | TSP,OP,PCTSP | IJCAI 2024 |
| 2024.05 | MVMoE: Multi-Task Vehicle Routing Solver with Mixture-of-Experts |  | 16VRPs | ICML 2024 |
| 2024.06 | RouteFinder: Towards Foundation Models for Vehicle Routing Problems |  | 48VRPs | TMLR |
| 2024.06 | GOAL: A Generalist Combinatorial Optimization Agent Learner |  | (A)TSP,5VRPs,OP,JSSP, OSSP,UMSP,KP,MVC, MIS,MCLP,TRP,SOP | ICLR 2025 |
| 2024.08 | UNCO: Towards Unifying Neural Combinatorial Optimization through Large Language Model |  | TSP,CVRP,KP, MVCP,SMTWTP | arXiv |
| 2024.09 | MAPF-GPT: Imitation Learning for Multi-Agent Pathfinding at Scale |  | MAPF | AAAI 2025 |
| 2024.10 | Toward Learning Generalized Cross-Problem Solving Strategies for Combinatorial Optimization |  | TSP,VRP,SDVRP, OP,PCTSP,SPCTSP | Under Review |
| 2024.10 | Learning General Representations Across Graph Combinatorial Optimization Problems |  | 7GDPs | Under Review |
| 2024.10 | Solving Diverse Combinatorial Optimization Problems with a Unified Model |  | (A)TSP,CVRP,OP,PCTSP, SPCTSP,KP,MIS,FFSP | Under Review |
| 2024.10 | SHIELD: Multi-task Multi-distribution Vehicle Routing Solver with Sparsity & Hierarchy in Efficiently Layered Decoder |  | 16VRPs | ICML 2025 |
| 2024.10 | Unified Neural Solvers for General TSP and Multiple Combinatorial Optimization Tasks via Problem Reduction and Matrix Encoding |  | (A)TSP,DHCP,3SAT | ICLR 2025 |
| 2024.10 | Foundation Models for Boolean Logic |  | Boolean Logic | Under Review |
| 2024.11 | CaDA: Cross-Problem Routing Solver with Constraint-Aware Dual-Attention |  | 16VRPs | ICML 2025 |
| 2024.12 | Multi-task Representation Learning for Mixed Integer Linear Programming |  | MILP | CPAIOR 2025 |
| 2025.05 | A Mixed-Curvature based Pre-training Paradigm for Multi-Task Vehicle Routing Solver |  | VRP | ICML 2025 |
| 2025.07 | LRM-1B: Towards Large Routing Model |  | VRP | arxiv |
| 2025.08 | FORGE: Foundational Optimization Representations from Graph Embeddings |  | MIP | arxiv |
| 2025.09 | Graph Foundation Models: Bridging Language Model Paradigms and Graph Optimization |  | OR | arxiv |
| 2025.11 | Foundation Models for Industrial Scheduling Leveraging the Techniques from LLMs |  | FJSP | Under Review |
| 2025.12 | COFormer: Towards a Foundation Model for Solving Combinatorial Optimization Problems |  | COP | Under Review |
| 2025.12 | OPTFM: A Scalable Multi-View Graph Transformer for Hierarchical Pre-Training in Combinatorial Optimization |  | General COP | NeurIPS 2025 |

## About

         Recent research papers about Foundation Models for Combinatorial Optimization       

### Topics

[lists](https://github.com/topics/lists)[machine-learning](https://github.com/topics/machine-learning)[awesome](https://github.com/topics/awesome)[awesome-list](https://github.com/topics/awesome-list)[combinatorial-optimization](https://github.com/topics/combinatorial-optimization)[neural-combinatorial-optimization](https://github.com/topics/neural-combinatorial-optimization)[foundation-models](https://github.com/topics/foundation-models)

### Resources

[Readme](https://github.com/ai4co/awesome-fm4co#readme-ov-file)

### License

[MIT license](https://github.com/ai4co/awesome-fm4co#MIT-1-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/ai4co/awesome-fm4co/activity)

[Custom properties](https://github.com/ai4co/awesome-fm4co/custom-properties)

### Stars

[534
        stars](https://github.com/ai4co/awesome-fm4co/stargazers)

### Watchers

[18
        watching](https://github.com/ai4co/awesome-fm4co/watchers)

### Forks

[42
        forks](https://github.com/ai4co/awesome-fm4co/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fai4co%2Fawesome-fm4co&report=ai4co+%28user%29)

## [Releases](https://github.com/ai4co/awesome-fm4co/releases)

No releases published

## [Packages
      0](https://github.com/orgs/ai4co/packages?repo_name=awesome-fm4co)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/ai4co/awesome-fm4co/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

     You can’t perform that action at this time.
