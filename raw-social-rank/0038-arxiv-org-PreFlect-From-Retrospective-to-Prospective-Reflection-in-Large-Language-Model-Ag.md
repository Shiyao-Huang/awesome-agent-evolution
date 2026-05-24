# PreFlect: From Retrospective to Prospective Reflection in Large Language Model Agents

- URL: https://arxiv.org/html/2602.07187
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:x.com "AI agents" "memory" "reflection"

## Raw Content

## PreFlect: From Retrospective to Prospective Reflection in Large Language Model Agents

**Source**: https://arxiv.org/html/2602.07187

---

# PreFlect: From Retrospective to Prospective Reflection  
in Large Language Model Agents

Hanyu Wang 

Yuanpu Cao 

Lu Lin 

Jinghui Chen 

###### Abstract

Advanced large language model agents typically adopt self-reflection for improving performance, where agents iteratively analyze past actions to correct errors. However, existing reflective approaches are inherently retrospective: agents act, observe failure, and only then attempt to recover. In this work, we introduce 
PreFlect
, a prospective reflection mechanism that shifts the paradigm from post hoc correction to pre-execution foresight by criticizing and refining agent plans before execution. To support grounded prospective reflection, we distill planning errors from historical agent trajectories, capturing recurring success and failure patterns observed across past executions. Furthermore, we complement prospective reflection with a dynamic re-planning mechanism that provides execution-time plan update in case the original plan encounters unexpected deviation. Evaluations on different benchmarks demonstrate that PreFlect significantly improves overall agent utility on complex real-world tasks, outperforming strong reflection-based baselines and several more complex agent architectures. Code will be updated at [https://github.com/wwwhy725/PreFlect](https://github.com/wwwhy725/PreFlect).

Machine Learning, ICML 

## 
1 
Introduction

Large language model agents (Wu et al., [2024](https://arxiv.org/html/2602.07187v1#bib.bib28); Hu et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib11); Li et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib13)), empowered by advanced LLMs (Guo et al., [2025a](https://arxiv.org/html/2602.07187v1#bib.bib9); Comanici et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib5); Yang et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib30)), have demonstrated competence in handling various real-world tasks. However, when faced with tasks requiring highly complex reasoning and multiple tools handling, even a minor error may ruin all the efforts (Press et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib16)). To overcome the fragility of single-pass reasoning, recent research has increasingly integrated self-reflection mechanisms into agent architecture (Gou et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib8); Shinn et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib21); Zhou et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib35)). Unlike standard CoT approaches, reflection enables agents to act as their own critics: scrutinizing past execution trajectories, diagnosing action-level errors, and iteratively refining their future strategies (Madaan et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib14)).

![Refer to caption](https://arxiv.org/html/x1.png)

Figure 1
: 

Retrospective vs. Prospective Reflection.
 (Left) The retrospective agent triggers reflection only after encountering a failure. (Right) The prospective agent anticipates potential risks before execution, allowing it to adjust its plan and successfully bypass the obstacle.

Despite these advances, most existing reflection paradigms remain fundamentally 
retrospective
, operating in a reactive manner that triggers correction only after failures have already occurred. While effective in some settings, such post-hoc reflection faces several inherent limitations in complex environments. Specifically, retrospective correction is often inadequate when actions produce 
irreversible consequences
, such as accidentally deleting an important file. Additionally, diagnosing errors after execution can introduce substantial 
trajectory-level noise
: by storing both failed attempts and subsequent fixes in memory, agents may suffer from contextual interference that destabilizes future decision-making. Furthermore, retrospective methods typically rely on repeated trial-and-error cycles, leading to significant computational cost and increased token latency as agents iteratively recover from mistakes.

To address these limitations, we propose 
P
rospective 
Reflect
ion (
PreFlect
), a novel framework that shifts the reflection paradigm from reactive correction to proactive prevention, equipping agents with a prospective capability to anticipate potential pitfalls. Central to this shift is identifying when reflection should intervene in the agent’s decision process. Existing methods typically reflect only after actions have been executed, when errors may already be costly or irreversible. In contrast, we observe that the planning stage provides a critical opportunity for proactive control: it is the point at which the agent commits to a strategy, yet has not begun to act on it. Building on this insight, we introduce a planning-phase reflection mechanism that operates in the cognitive window between plan generation and action execution. By evaluating and revising plans before they are carried out, PreFlect decouples error detection from irreversible outcomes, allowing agents to scrutinize their strategies for potential risks prior to execution.

However, the efficacy of prospective reflection is often constrained by the inherent difficulty of anticipating future failures. In the absence of structured guidance, aimless critique may even introduce more risks, such as hallucinations (Zhu et al., [2025b](https://arxiv.org/html/2602.07187v1#bib.bib37)). To resolve this issue, we incorporate the “Planning Errors” into PreFlect, which serves as an experiential anchor by distilling recurrent failure and success patterns from past agent trajectories. Specifically, upon generating a plan, the agent cross-references its proposed strategies against the planning errors to diagnose specific vulnerabilities such as hazardous tool usage. This guided reflection allows the agent to transform abstract foresight into concrete diagnosis by identifying semantic similarities between the current plan and historical pitfalls. Consequently, the agent can proactively substitute risky components with reliable alternatives, resulting in a robust and optimal trajectory that is empirically grounded before any action is committed to the environment.

Moreover, although the planning errors provide reliable and grounded references, proactively reflecting on future errors may still be insufficient under the uncertainty of complex environments. Relying solely on pre-execution critique can leave blind spots during execution and lead to oversights. Therefore, we incorporate a dynamic re-planning mechanism to complement planning-phase reflection by adaptively updating the agent’s plan during execution. Unlike traditional architectures that adhere to rigid, fixed interval planning cycles, the dynamic re-planning continuously monitors the execution state to evaluate whether the current trajectory remains viable or necessitates a strategic shift. For instance, if the agent originally plans to search for a certain query while repeated failures, indicating infeasibility, the agent can trigger re-planning to revise its strategy and pivot toward alternative approaches.

Together, prospective reflection and dynamic re-planning form a unified framework that supports both proactive planning and robust execution. To validate PreFlect, we conduct comprehensive experiments across multiple benchmarks. Results show that PreFlect achieves consistent performance improvements while maintaining reasonable token overhead. To sum up, our contributions are threefold:

- 
•

We propose PreFlect, a prospective reflection framework that enables LLM agents to proactively identify and avoid critical failures before execution.

- 
•

To further improve the effectiveness and efficiency of PreFlect, we introduce two key components: the planning errors and dynamic re-planning mechanism, which respectively provide experiential priors to assist reflection and adaptively revise plans during execution.

- 
•

Extensive experiments demonstrate that PreFlect significantly outperforms existing reflection-based baselines and competitive agent frameworks. Furthermore, transferability results show that PreFlect generalizes across different agent architectures.

![Refer to caption](https://arxiv.org/html/x2.png)

Figure 2
: 

The architecture of 
PreFlect
 comparing with basic agent workflow (top). PreFlect integrates a prospective reflection loop (pink box) into the planning stage. The bottom-right panel illustrates dynamic re-planning workflow.

## 
2 
Related Work

LLM Agents.
 LLM-based agents enhance reasoning by integrating external modules for planning, memory, and tool use. The ReAct (Yao et al., [2022](https://arxiv.org/html/2602.07187v1#bib.bib32)) architecture established the iterative “reason-act” paradigm, which has since evolved into specialized research on test-time searching (Yao et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib33); Besta et al., [2024](https://arxiv.org/html/2602.07187v1#bib.bib1)), tool tuning (Zeng et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib34); Qian et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib17); Jiang et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib12)), and memory structuring (Xu et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib29); Chhikara et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib4)). Beyond modular improvements, recent frameworks introduce diverse coordination strategies: AutoAgent (Chen et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib3)) and OWL (Hu et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib11)) utilize dynamic multi-agent coordination and role-playing for task decomposition, while Alita (Qiu et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib18)) enables autonomous expansion via refined task-specific MCPs. Finally, Smolagents (Roucher et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib20)) prioritizes efficiency through lightweight, code-based actions and local deployment integration.

Self-Reflection.
 Self-reflection enables LLM agents to autonomously critique past executions and iteratively refine subsequent strategies. Reflexion (Shinn et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib21)) established the foundation for this paradigm by introducing verbal reinforcement to store linguistic feedback to prevent recurring errors. Self-Refine (Madaan et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib14)) employs an iterative loop where the model generates, critiques, and corrects its own output without external supervision. Recent advancements explore more granular reflection strategies: AR (Wang et al., [2024](https://arxiv.org/html/2602.07187v1#bib.bib24)) focuses on real-time adaptation by preparing backup moves and switching to alternatives upon primary execution failure. MIRROR (Guo et al., [2025b](https://arxiv.org/html/2602.07187v1#bib.bib10)) further extends this by integrating inter-agent communication with intra-agent self-critique. SAMULE (Ge et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib7)) shifts from prompting to specialized training, fine-tuning a reflection LLM to provide high-quality feedback to an executor agent.

## 
3 
Methodology

We organize this section as follows: Section [3.1](https://arxiv.org/html/2602.07187v1#S3.SS1) provides an overview of our proposed method. In Section [3.2](https://arxiv.org/html/2602.07187v1#S3.SS2), we expand on the core concept of prospective reflection, with Section [3.2.1](https://arxiv.org/html/2602.07187v1#S3.SS2.SSS1) introducing planning errors and Section [3.2.2](https://arxiv.org/html/2602.07187v1#S3.SS2.SSS2) explaining how PreFlect reflects on and revises the plan. Finally, in Section [3.3](https://arxiv.org/html/2602.07187v1#S3.SS3), we show how dynamic re-planning and prospective reflection complement each other.

### 
3.1 
Overview of PreFlect

Figure [2](https://arxiv.org/html/2602.07187v1#S1.F2) provides an overview of PreFlect by contrasting it with a standard agent workflow and illustrating how prospective reflection and execution-time dynamic re-planning are integrated into a unified loop. The top of the figure shows the *basic agent workflow*. Given a task input, the agent first generates a plan that decomposes the task into a sequence of steps based on the currently known conditions. The agent then executes the plan through an iterative 
think–act–observe
 loop, during which it reasons about the next step, takes an action, and observes the environment. This execution loop repeats until the task is completed, at which point the final output is produced. The bottom of the figure depicts the workflow of PreFlect. The left part highlights the *planning and prospective reflection module*. After an initial plan is generated, a reflector examines the plan *before execution* by leveraging a set of distilled planning errors, which summarize common failure and success patterns observed from historical agent trajectories. The reflector detects potential planning errors and revises the plan accordingly. This process iterates until a validated plan is produced, which is then passed to the execution stage. The right part of the figure shows how execution proceeds under PreFlect and how *execution-time dynamic re-planning* is handled. Similar to the basic workflow, the agent executes the validated plan using the 
think–act–observe
 loop. During execution, the agent continuously monitors the trajectory. When the current trajectory becomes infeasible or deviates from the validated plan, a re-planning trigger is activated. Importantly, dynamic re-planning does not rewind or discard the past trajectory; instead, it *appends a new planning and prospective reflection phase* that is conditioned on the execution history so far. As illustrated inside the dynamic re-planning workflow, this re-planning step reuses the same planning and prospective reflection module shown on the left, ensuring that all newly generated plans, whether initial or re-generated during execution, are validated prospectively before further actions are taken.

Overall, PreFlect forms a single closed-loop system in which prospective reflection is applied both prior to initial execution and whenever re-planning is required, enabling the agent to anticipate and mitigate planning errors before they manifest as irreversible execution failures. In the following, we will step into the design details of each component.

### 
3.2 
Prospective Reflection

The core component of our proposed PreFlect is a 
prospective reflection
 mechanism where the agent reflects on the plan based on distilled error patterns, identifies critical errors, and replaces the original plan with a revised one to avoid future failures.

#### 
3.2.1 
Planning Errors

Unlike retrospective reflection, which corrects errors through post-execution trajectory review, prospective reflection must reason about potential failures before they occur, and is therefore subject to greater uncertainty. Without grounded guidance, such forward-looking critique can become unreliable or overly speculative. To address this challenge, we adopt an *offline* distillation process that extracts common error modes and success/failure patterns from an agent’s past experience, providing experiential priors that enable more accurate prospective reflection.

Trajectory Collection.
 Constructing Planning Errors requires leveraging the agent’s own experience across diverse tasks. For each task, we sample three trajectories and identify cases with 
mixed outcomes
, where the agent produces both successful and failed attempts. This contrastive setting highlights the key differences between effective and ineffective strategies, facilitating the extraction of recurring planning-level failure patterns. To promote generalization and avoid overfitting, the data used for Planning Error construction is disjoint from all evaluation benchmarks.

Diagnosis.
 Given these mixed trajectories, we prompt an LLM to conduct a comparative diagnostic analysis. The diagnosis focuses on identifying critical errors in failed trajectories that arise from planning deficiencies and could be avoided through improved planning. In parallel, it analyzes how successful trajectories circumvent or resolve these pitfalls. Each diagnostic result produces one or more error types, along with corresponding descriptions, impacts, and supporting evidence. This process allows us to isolate the exact planning failures that differentiate success from failure.

Aggregation.
 The final stage of our framework synthesizes individual diagnoses into a unified taxonomy of planning errors. We employ an LLM-based aggregator to construct this taxonomy by iteratively comparing each new diagnostic entry against the existing error set. For each entry, the aggregator determines whether to instantiate a new error category, merge it into an existing profile, or discard it as redundant. This process distills generalizable planning-level failure modes that transcend specific task instances, ensuring broad applicability. In parallel, the LLM summarizes empirical evidence and trajectory impacts into concrete success and failure patterns. The resulting Planning Errors therefore connect high-level reasoning deficiencies with recurring behavioral signatures, providing informative priors for downstream reflection. After the initial LLM-driven synthesis, we perform a final manual refinement step to remove categories that are overly narrow or task-dependent (e.g., errors specific to a particular query formulation). This yields a finalized set of three core error types: 

1)

insufficient constraint verification 

2)

ineffective tool selection 

3)

shallow content verification, 

 capturing failures in constraint maintenance, tool usage, and content understanding. Notably, these errors are designed to be domain-agnostic, maximizing their utility across diverse agentic tasks. For more details, please refer to Appendix [B](https://arxiv.org/html/2602.07187v1#A2).

#### 
3.2.2 
Reflection & Revision

Error Identification.
 After a plan is generated, a reflector agent evaluates it to identify potential critical errors before execution. To improve accuracy and reduce false positives, the reflector leverages the distilled Planning Errors as grounded reference priors. By conditioning reflection directly on these domain-agnostic failure modes, the agent can perform more structured and reliable prospective critique.

Particularly, the agent summarizes its previous actions to have a comprehensive understanding of the task and current states. Meanwhile, the agent analyzes available tools and learns how and why some tools fail or succeed in the environment of the current task. This self-awareness helps foster more accurate and fact-based prospective reflection, enabling foresight into future scenarios, such as knowing whether a tool should be avoided under a certain circumstance before even attempting it. After gathering enough information about the current states, the reflector critiques the proposed plan by checking whether it exhibits patterns aligned with any known Planning Errors. If a flaw is detected, the agent revises the plan accordingly, producing a higher-quality strategy prior to action execution.

Plan Revision.
 Given the identified errors in the previous step, the agent now switches its attention to how to comprehensively develop an updated plan to impact the future positively. Notably, the planning errors collection contains contrastive examples of short trajectory segments where positive examples demonstrate how the agent avoids such an error, while negative ones expand on how the agent is misled to failure. Combining the high-level error description with these concrete cases, the agent is enabled to match its current state with the error information and find out the optimal path toward success.

### 
3.3 
Dynamic Re-Planning

Although Planning Errors provide grounded experiential priors for prospective reflection, reasoning about future failures remains inherently uncertain, and the agent may still overlook critical risks during execution. To complement planning-phase reflection, we introduce a dynamic re-planning mechanism that enables the agent to adapt its strategy online when the environment reveals unexpected obstacles. Notably, whenever re-planning is triggered, prospective reflection is invoked again to assess potential risks in the updated plan.

Dynamic Plan Updating.
 During execution, the agent continuously gathers new observations through interaction with the environment. Such feedback may invalidate earlier assumptions, causing the original plan to become suboptimal or infeasible. Since many execution-time constraints are only revealed at runtime (e.g., unavailable tool outputs or missing external information), proactive reflection alone cannot guarantee optimal trajectories under evolving states. To address this, we equip the agent with a 
re-plan
 operation that can be triggered whenever progress stalls or feasibility conditions are violated. Following the ReAct paradigm, the agent explicitly reasons about the current execution state and identifies why the existing plan is no longer effective before invoking re-planning. The agent then generates an updated strategy and immediately resumes execution under the revised plan. Implementation details are provided in Appendix [A](https://arxiv.org/html/2602.07187v1#A1).

## 
4 
Experiments

Table 1
: 

 Main experimental results on GAIA and SimpleQA benchmarks. PreFlect is built upon Smolagents framework. All the results are using the pass@1 metric. The best results are shown in 
bold
. 

| Agent

Framework | Reflective

Method | GAIA (%) | SimpleQA (%) |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|
| Level 1 (↑\uparrow) | Level 2 (↑\uparrow) | Level 3 (↑\uparrow) | Total (↑\uparrow) | Corr. (↑\uparrow) | Incor. (↓\downarrow) | N.A. (↓\downarrow) | C./Att. (↑\uparrow) |  |  |
| \rowcolorgray!15      Backbone LLM: GPT-4.1 |  |  |  |  |  |  |  |  |  |
| ReAct | - | 41.51 | 33.72 | 7.69 | 32.12 | 61 | 19 | 20 | 76.25 |
| ReAct | Reflexion | 49.06 | 34.88 | 15.38 | 36.36 | 71 | 21 | 8 | 77.17 |
| ReAct | Self-Refine | 39.62 | 39.53 | 11.54 | 35.15 | 74 | 18 | 8 | 80.43 |
| Smolagents | - | 56.60 | 47.67 | 19.23 | 46.06 | 72 | 16 | 12 | 81.82 |
| Smolagents | Reflexion | 56.60 | 54.65 | 19.23 | 49.70 | 79 | 20 | 1 | 79.80 |
| Smolagents | Self-Refine | 58.49 | 52.33 | 23.08 | 49.70 | 78 | 18 | 4 | 81.25 |
| Smolagents | PreFlect (ours) | 71.70 | 55.81 | 38.46 | 58.18 | 83 | 15 | 2 | 84.69 |
| \rowcolorgray!15      Backbone LLM: Gemini-2.5-pro |  |  |  |  |  |  |  |  |  |
| ReAct | - | 56.60 | 45.35 | 30.77 | 46.67 | 55 | 16 | 29 | 77.46 |
| ReAct | Reflexion | 56.60 | 47.67 | 30.77 | 47.88 | 70 | 18 | 12 | 79.55 |
| ReAct | Self-Refine | 56.60 | 44.19 | 34.62 | 46.67 | 62 | 24 | 14 | 72.09 |
| Smolagents | - | 54.72 | 52.32 | 34.62 | 50.30 | 76 | 18 | 6 | 80.85 |
| Smolagents | Reflexion | 60.38 | 52.33 | 38.46 | 52.73 | 78 | 22 | 0 | 78.00 |
| Smolagents | Self-Refine | 60.38 | 50.00 | 34.62 | 50.91 | 81 | 17 | 2 | 82.65 |
| Smolagents | PreFlect (ours) | 67.92 | 60.47 | 38.46 | 59.39 | 81 | 13 | 6 | 86.17 |

### 
4.1 
Experiment Settings

Datasets.
 To evaluate the general task completion performance of PreFlect, we conduct comprehensive experiments on the following datasets with complete agentic settings. 

1)

GAIA
(Mialon et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib15))
is a general AI assistant benchmark that evaluates AI agent’s ability to complete real-world tasks, covering multi-step reasoning, fact checking, web browsing, and tool usage. We select the validation set. 

2)

SimpleQA
(Wei et al., [2024](https://arxiv.org/html/2602.07187v1#bib.bib27))
is a challenging benchmark that evaluates the ability to answer fact-seeking questions. Due to resource limitations, we randomly select 100 samples from the test set. 

 Note that for constructing the planning errors, we leverage 
HotpotQA
(Yang et al., [2018](https://arxiv.org/html/2602.07187v1#bib.bib31)) and 
MuSiQue
(Trivedi et al., [2022](https://arxiv.org/html/2602.07187v1#bib.bib23)) datasets, ensuring no overlap with the test benchmarks while challenging the agent’s diverse capabilities.

Baselines.
 We compare with various baselines to validate the effectiveness of our proposed method. In particular, we select Reflexion (Shinn et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib21)) and Self-Refine (Madaan et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib14)), which are standard retrospective reflection methods. We omit Wang et al. ([2024](https://arxiv.org/html/2602.07187v1#bib.bib24)) as it targets step-level anticipation and is not directly applicable to GAIA-style long-horizon planning tasks. Also, we compare with several agent frameworks, such as ReAct (Yao et al., [2022](https://arxiv.org/html/2602.07187v1#bib.bib32)), Smolagents and its Open Deep Research (ODR) system (Roucher et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib20)), AutoAgent (Chen et al., [2023](https://arxiv.org/html/2602.07187v1#bib.bib3)), Magnetic-1 (Fourney et al., [2024](https://arxiv.org/html/2602.07187v1#bib.bib6)), HAL (Stroebl et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib22)), OWL (Hu et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib11)), and OAgent (Zhu et al., [2025a](https://arxiv.org/html/2602.07187v1#bib.bib36)).

Evaluation Metrics.
 For GAIA, we use standard “pass@1” which refers to the percentage of problems solved correctly when 1 candidate solution is sampled per task. For SimpleQA, we follow the standard evaluation to report 
Correct
 (
Corr.
), 
Incorrect
 (
Incor.
), 
Not Attempted
 (
N.A.
), and 
Correct Given Attempted
 (
C./Att.
), which refer to the number of correct, incorrect, not attempted, and correct given attempted answers out of all the answers, respectively.

Agent Implementations.
 PreFlect (built upon Smolagents) operates under a maximum budget of 20 execution steps and is equipped with standard web search and webpage navigation tools. To satisfy the multimodal tool requirements of GAIA tasks (e.g., involving images or audio), we additionally provide a set of lightweight modality-specific inspection tools. Importantly, all compared methods are evaluated under the same tool access and execution constraints to ensure a fair comparison in our main experiments. Further implementation details are deferred to Appendix [A](https://arxiv.org/html/2602.07187v1#A1).

Figure 3
: 

An example of how PreFlect triggers dynamic re-planning, reflects on the plan based on the planning errors, and finally revises the plan to avoid failure.

### 
4.2 
Main Results

Table [4](https://arxiv.org/html/2602.07187v1#S4) presents the primary experimental results comparing PreFlect against various baselines on the GAIA and SimpleQA benchmarks. To ensure a rigorous and equitable comparison, we maintain strictly identical settings, such as tool set and inference parameters, across all evaluated methods, thereby eliminating confounding factors related to environmental configuration.

Quantitative Analysis.
 Table [4](https://arxiv.org/html/2602.07187v1#S4) presents the performance of PreFlect compared to representative agentic and reflective baselines on GAIA and SimpleQA benchmarks. On GAIA, PreFlect achieves the highest total score of 58.18%58.18\% (GPT-4.1) and 59.39%59.39\% (Gemini-2.5-pro), representing an average improvement of 17.14%17.14\% and 11.68%11.68\% over baselines. Besides, the performance gap on Level 3 tasks, where PreFlect outperforms baselines by 14.29%14.29\% on average, suggests that prospective reflection excels at high-complexity reasoning where error propagation is most severe.

On the SimpleQA benchmark, PreFlect significantly enhances factuality, achieving an average improvement of 12.79%12.79\% in the Correct metric compared to all baselines across both LLM backbones. The simultaneous increase in the Correct Given Attempted metric (6.08%6.08\% on average for GPT-4.1 and 7.73%7.73\% on average for Gemini-2.5-pro) and decrease in the Not Attempted metric (12.29%12.29\% on average for GPT-4.1 and 4.00%4.00\% on average for Gemini-2.5-pro) indicate that our method allows agents to locate grounded information. Different from traditional methods to improve the factuality of an LLM without tools (Wang et al., [2025a](https://arxiv.org/html/2602.07187v1#bib.bib25); Cao et al., [2024](https://arxiv.org/html/2602.07187v1#bib.bib2)), the performance gain under the agentic setting demonstrates that our proposed method results in a more comprehensive and robust system that further avoids hallucinations.

Qualitative Analysis.
 Figure [3](https://arxiv.org/html/2602.07187v1#S4.F3) illustrates how PreFlect handles a complex Level-3 GAIA task to 
identify the meaning of a specific symbol on Eva Draconis’ personal website which can be accessed on her YouTube page
. The task is particularly challenging because both the target YouTube channel and the personal webpage is no longer active. While the agent initially struggles for 14 steps with empty pages and missing links, PreFlect triggers a “turning point” at step 15 via prospective reflection. Recognizing that standard searches are futile, the agent performs dynamic re-planning to pivot toward the Wayback Machine. Crucially, to mitigate potential 
ineffective tool selection
 problem, the revised plan shifts from direct image retrieval to source-code excavation. By extracting raw HTML via the “visit_webpage” tool, the agent successfully locates the archived symbol description, completing a task that would otherwise result in a failure state.

### 
4.3 
Comparison with Complex Agent Frameworks

Beyond the controlled reflection-based comparisons in Table [4](https://arxiv.org/html/2602.07187v1#S4), Table [2](https://arxiv.org/html/2602.07187v1#S4.T2) situates PreFlect within a broader landscape of sophisticated agent frameworks. These systems are typically evaluated under non-standardized and substantially more resource-rich settings, often involving more powerful tool access, different backbone models, larger action budgets, and specialized prompt or memory designs. As a result, their reported performance is not directly comparable to our controlled experimental setting. We therefore cite these results directly from the original publications and present them separately to provide qualitative context rather than a strict head-to-head evaluation. Detailed configurations and sources for these agent frameworks are provided in Appendix [C](https://arxiv.org/html/2602.07187v1#A3).

Table 2
: 

Comparative results on the GAIA validation set between various agentic frameworks. Results are directly cited from their respective original reports or other sources.

| Frameworks | Backbone LLM | GAIA (%) |  |  |  |
|---|---|---|---|---|---|
| L1 (↑\uparrow) | L2 (↑\uparrow) | L3 (↑\uparrow) | Total (↑\uparrow) |  |  |
| AutoAgent | Claude-Sonnet-3.5 | 71.70 | 53.49 | 26.92 | 55.15 |
| Magnetic-1 | o1 | 56.60 | 46.51 | 23.08 | 46.06 |
| HAL Agent | GPT-4.1 | 52.83 | 55.81 | 23.08 | 49.70 |
| HF-ODR | GPT-4.1 | 58.49 | 50.00 | 34.62 | 50.30 |
| HF-ODR | o1 | 67.92 | 53.49 | 34.62 | 55.15 |
| OWL | GPT-4.1 | 71.70 | 50.00 | 26.92 | 53.33 |
| OAgent | GPT-4.1 | 67.92 | 53.49 | 34.62 | 55.15 |
| Smolagents

+ PreFlect | GPT-4.1 | 71.70 | 55.81 | 38.46 | 58.18 |
| Smolagents

+ PreFlect | Gemini-2.5-pro | 67.92 | 60.47 | 38.46 | 59.39 |

As shown in Table [2](https://arxiv.org/html/2602.07187v1#S4.T2), PreFlect outperforms significantly more complex multi-agent architectures (e.g., AutoAgent and OWL) by over 3%3\%. These results underscore that effective prospective reflection can surpass simply increasing execution steps or orchestrating additional agent roles. Importantly, PreFlect is 
orthogonal
 to these frameworks and can in principle be integrated as a reflection module to further improve their planning and execution robustness.

### 
4.4 
Transferability

Although we primarily instantiate PreFlect within the Smolagents framework, we further evaluate its transferability across different agent architectures. Specifically, we integrate PreFlect into a distinct agent framework, OWL (Hu et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib11)). To ensure a fair comparison, we evaluate both variants under the same setting as in our main experiments (identical tool access, execution budgets, and hyperparameter settings), and report pass@1 accuracy on the GAIA validation set.

Table 3
: 

Transferability results across different agentic systems.

| Frameworks | Level 1 | Level 2 | Level 3 | Total |
|---|---|---|---|---|
| Smolagents | 56.60 | 47.67 | 19.23 | 46.06 |
| + PreFlect | 71.70 | 55.81 | 38.46 | 58.18 |
| OWL | 60.38 | 51.16 | 26.92 | 50.30 |
| + PreFlect | 73.58 | 58.14 | 42.31 | 60.61 |

As shown in Table [3](https://arxiv.org/html/2602.07187v1#S4.T3), PreFlect consistently improves performance over the corresponding backbone, indicating that prospective reflection can serve as a general add-on module beyond a single agent implementation.

### 
4.5 
Error Distribution

To further reveal the error patterns exhibited by our proposed reflection mechanism, we analyze the reflective processes and error recognition of PreFlect with GPT-4.1 backbone on the GAIA validation set. Across all 165 tasks, the defect rate, defined as the proportion of plans identified as risky among all updated plans, is 74.44%74.44\%, revealing that most of the plans are reflected as carrying critical errors. As illustrated in Figure [4](https://arxiv.org/html/2602.07187v1#S4.F4), the error distribution is heavily skewed: insufficient constraint verification (64.92%64.92\%) and ineffective tool selection (32.84%32.84\%) account for nearly all identified errors.

This concentration suggests a fundamental gap in planning. While the agent aims for concise, high-level strategies, the high frequency of constraint-related and tool-related errors reveals that critical task boundaries and reasonable tool selection are often lost in abstraction. This indicates that for complex reasoning tasks, conciseness may come at the cost of operational rigor. Without explicit grounding in task-specific environments, the agent tends to neglect something that can be the key to completing the task correctly.

![Refer to caption](https://arxiv.org/html/x3.png)

Figure 4
: 

Error distribution of PreFlect on GAIA using GPT-4.1 as the backbone LLM.

### 
4.6 
Ablations

To rigorously assess the individual contributions of the Planning Errors (PE) and Dynamic Re-Planning (DRP) modules, we conducted an ablation study using Smolagents as our baseline framework. The results, summarized in Table [4](https://arxiv.org/html/2602.07187v1#S4.T4), isolate the impact of removing each component while keeping the experimental setting consistent.

Table 4
: 

Ablation studies on the planning errors (denoted as PE) and the dynamic re-planning (denoted as DRP). Results are from GPT-4.1 as the backbone LLM on the GAIA validation set.

| Method | Level 1 | Level 2 | Level 3 | Total |
|---|---|---|---|---|
| Smolagents | 56.60 | 47.67 | 19.23 | 46.06 |
| PreFlect w/o PE | 58.49 | 53.49 | 23.08 | 50.30 |
| PreFlect w/o DRP | 54.72 | 54.65 | 34.62 | 51.52 |
| PreFlect | 71.70 | 55.81 | 38.46 | 58.18 |

Planning Errors as Empirical Priors.
 The ablated results indicate that the Planning Errors is essential for the transition from retrospective to prospective reflection. Removing it leads to a significant performance drop, particularly on Level 3 tasks (decreasing from 38.46%38.46\% to 23.08%23.08\%). This aligns with our hypothesis that predicting future errors is inherently difficult without historical context. PE acts as an “empirical prior”, grounding the prospective reflection and allowing the agent to anticipate and avoid potential pitfalls before execution begins.

Dynamic Re-Planning as Compensation.
 While PE aids in pre-execution error avoidance, the 
w/o DRP
 variant reveals the necessity of runtime flexibility. Despite having access to historical error experiences, the agent may still fail to detect or mitigate every risk during the planning phase. The 6.66%6.66\% total performance gap between PreFlect and 
w/o DRP
 demonstrates that re-planning serves as a critical safety net, without which, the added complexity of prospective reflection might lead to rigid plans that the agent cannot recover from if a minor execution error occurs.

### 
4.7 
Cost Analysis

To evaluate the practical scalability of PreFlect, we analyze its operational costs relative to performance on the GAIA validation set. We compare results of GPT-4.1 as the backbone LLM whose input price is $2 per million tokens while the output price is $8 per million tokens. As illustrated in Figure [5](https://arxiv.org/html/2602.07187v1#S4.F5), PreFlect achieves a superior performance-cost trade-off compared to existing frameworks. While the baseline Smolagents costs $46.31, our method reaches a highest score of 58.18% with only a marginal 17.64% cost increase ($54.48). In stark contrast, advanced agents like HAL and HF-ODR incur significantly higher expenditures ($74.19 and $109.88, respectively) yet yield lower performance (49.70% and 50.30%).

![Refer to caption](https://arxiv.org/html/x4.png)

Figure 5
: 

Performance-cost trade-off on the GAIA validation set. The primary axis shows the total cost (USD) and the secondary axis shows the corresponding GAIA scores.

## 
5 
Conclusion

In this work, we propose PreFlect, a prospective reflection mechanism that shifts from reactive correction to proactive failure prevention. Our approach introduces distilled planning errors to provide structured and grounded error detection, while a dynamic re-planning mechanism brings up an updated plan in case errors are neglected during execution. Experimental results demonstrate that PreFlect’s significant improvements in complex task solving and remarkable transferability across different agent architectures.

## Impact Statement

This work introduces a novel prospective reflection mechanism to enhance general capability of LLM agents. By addressing significant weaknesses of previous reflection methods, PreFlect contributes to the development of more reliable and advanced agent systems.

## References

- 
Besta et al. (2024)

 Besta, M., Blach, N., Kubicek, A., Gerstenberger, R., Podstawski, M., Gianinazzi, L., Gajda, J., Lehmann, T., Niewiadomski, H., Nyczyk, P., et al. 

Graph of thoughts: Solving elaborate problems with large language models. 

In *Proceedings of the AAAI conference on artificial intelligence*, volume 38, pp.  17682–17690, 2024. 

- 
Cao et al. (2024)

 Cao, Y., Zhang, T., Cao, B., Yin, Z., Lin, L., Ma, F., and Chen, J. 

Personalized steering of large language models: Versatile steering vectors through bi-directional preference optimization. 

*Advances in Neural Information Processing Systems*, 37:49519–49551, 2024. 

- 
Chen et al. (2023)

 Chen, G., Dong, S., Shu, Y., Zhang, G., Sesay, J., Karlsson, B. F., Fu, J., and Shi, Y. 

Autoagents: A framework for automatic agent generation. 

*arXiv preprint arXiv:2309.17288*, 2023. 

- 
Chhikara et al. (2025)

 Chhikara, P., Khant, D., Aryan, S., Singh, T., and Yadav, D. 

Mem0: Building production-ready ai agents with scalable long-term memory. 

*arXiv preprint arXiv:2504.19413*, 2025. 

- 
Comanici et al. (2025)

 Comanici, G., Bieber, E., Schaekermann, M., Pasupat, I., Sachdeva, N., Dhillon, I., Blistein, M., Ram, O., Zhang, D., Rosen, E., et al. 

Gemini 2.5: Pushing the frontier with advanced reasoning, multimodality, long context, and next generation agentic capabilities. 

*arXiv preprint arXiv:2507.06261*, 2025. 

- 
Fourney et al. (2024)

 Fourney, A., Bansal, G., Mozannar, H., Tan, C., Salinas, E., Niedtner, F., Proebsting, G., Bassman, G., Gerrits, J., Alber, J., et al. 

Magentic-one: A generalist multi-agent system for solving complex tasks. 

*arXiv preprint arXiv:2411.04468*, 2024. 

- 
Ge et al. (2025)

 Ge, Y., Romeo, S., Cai, J., Sunkara, M., and Zhang, Y. 

Samule: Self-learning agents enhanced by multi-level reflection. 

In *Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing*, pp.  16602–16621, 2025. 

- 
Gou et al. (2023)

 Gou, Z., Shao, Z., Gong, Y., Shen, Y., Yang, Y., Duan, N., and Chen, W. 

Critic: Large language models can self-correct with tool-interactive critiquing. 

*arXiv preprint arXiv:2305.11738*, 2023. 

- 
Guo et al. (2025a)

 Guo, D., Yang, D., Zhang, H., Song, J., Zhang, R., Xu, R., Zhu, Q., Ma, S., Wang, P., Bi, X., et al. 

Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning. 

*arXiv preprint arXiv:2501.12948*, 2025a. 

- 
Guo et al. (2025b)

 Guo, Z., Xu, B., Wang, X., and Mao, Z. 

Mirror: Multi-agent intra-and inter-reflection for optimized reasoning in tool learning. 

*arXiv preprint arXiv:2505.20670*, 2025b. 

- 
Hu et al. (2025)

 Hu, M., Zhou, Y., Fan, W., Nie, Y., Xia, B., Sun, T., Ye, Z., Jin, Z., Li, Y., Chen, Q., et al. 

Owl: Optimized workforce learning for general multi-agent assistance in real-world task automation. 

*arXiv preprint arXiv:2505.23885*, 2025. 

- 
Jiang et al. (2025)

 Jiang, D., Lu, Y., Li, Z., Lyu, Z., Nie, P., Wang, H., Su, A., Chen, H., Zou, K., Du, C., et al. 

Verltool: Towards holistic agentic reinforcement learning with tool use. 

*arXiv preprint arXiv:2509.01055*, 2025. 

- 
Li et al. (2025)

 Li, X., Dong, G., Jin, J., Zhang, Y., Zhou, Y., Zhu, Y., Zhang, P., and Dou, Z. 

Search-o1: Agentic search-enhanced large reasoning models. 

*arXiv preprint arXiv:2501.05366*, 2025. 

- 
Madaan et al. (2023)

 Madaan, A., Tandon, N., Gupta, P., Hallinan, S., Gao, L., Wiegreffe, S., Alon, U., Dziri, N., Prabhumoye, S., Yang, Y., et al. 

Self-refine: Iterative refinement with self-feedback. 

*Advances in Neural Information Processing Systems*, 36:46534–46594, 2023. 

- 
Mialon et al. (2023)

 Mialon, G., Fourrier, C., Wolf, T., LeCun, Y., and Scialom, T. 

Gaia: a benchmark for general ai assistants. 

In *The Twelfth International Conference on Learning Representations*, 2023. 

- 
Press et al. (2023)

 Press, O., Zhang, M., Min, S., Schmidt, L., Smith, N. A., and Lewis, M. 

Measuring and narrowing the compositionality gap in language models. 

In *Findings of the Association for Computational Linguistics: EMNLP 2023*, pp.  5687–5711, 2023. 

- 
Qian et al. (2025)

 Qian, C., Acikgoz, E. C., He, Q., Wang, H., Chen, X., Hakkani-Tür, D., Tur, G., and Ji, H. 

Toolrl: Reward is all tool learning needs. 

*arXiv preprint arXiv:2504.13958*, 2025. 

- 
Qiu et al. (2025)

 Qiu, J., Qi, X., Zhang, T., Juan, X., Guo, J., Lu, Y., Wang, Y., Yao, Z., Ren, Q., Jiang, X., et al. 

Alita: Generalist agent enabling scalable agentic reasoning with minimal predefinition and maximal self-evolution. 

*arXiv preprint arXiv:2505.20286*, 2025. 

- 
Radford et al. (2023)

 Radford, A., Kim, J. W., Xu, T., Brockman, G., McLeavey, C., and Sutskever, I. 

Robust speech recognition via large-scale weak supervision. 

In *International conference on machine learning*, pp.  28492–28518. PMLR, 2023. 

- 
Roucher et al. (2025)

 Roucher, A., del Moral, A. V., Wolf, T., von Werra, L., and Kaunismäki, E. 

‘smolagents‘: a smol library to build great agentic systems. 

[https://github.com/huggingface/smolagents](https://github.com/huggingface/smolagents), 2025. 

- 
Shinn et al. (2023)

 Shinn, N., Cassano, F., Gopinath, A., Narasimhan, K., and Yao, S. 

Reflexion: Language agents with verbal reinforcement learning. 

*Advances in Neural Information Processing Systems*, 36:8634–8652, 2023. 

- 
Stroebl et al. (2025)

 Stroebl, B., Kapoor, S., and Narayanan, A. 

Hal: A holistic agent leaderboard for centralized and reproducible agent evaluation. 

[https://github.com/princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness), 2025. 

- 
Trivedi et al. (2022)

 Trivedi, H., Balasubramanian, N., Khot, T., and Sabharwal, A. 

𝅘𝅥𝅮 musique: Multihop questions via single-hop question composition. 

*Transactions of the Association for Computational Linguistics*, 10:539–554, 2022. 

- 
Wang et al. (2024)

 Wang, H., Li, T., Deng, Z., Roth, D., and Li, Y. 

Devil’s advocate: Anticipatory reflection for llm agents. 

*arXiv preprint arXiv:2405.16334*, 2024. 

- 
Wang et al. (2025a)

 Wang, H., Cao, B., Cao, Y., and Chen, J. 

Truthflow: Truthful llm generation via representation flow correction. 

*arXiv preprint arXiv:2502.04556*, 2025a. 

- 
Wang et al. (2025b)

 Wang, N., Hu, X., Liu, P., Zhu, H., Hou, Y., Huang, H., Zhang, S., Yang, J., Liu, J., Zhang, G., et al. 

Efficient agents: Building effective agents while reducing cost. 

*arXiv preprint arXiv:2508.02694*, 2025b. 

- 
Wei et al. (2024)

 Wei, J., Karina, N., Chung, H. W., Jiao, Y. J., Papay, S., Glaese, A., Schulman, J., and Fedus, W. 

Measuring short-form factuality in large language models. 

*arXiv preprint arXiv:2411.04368*, 2024. 

- 
Wu et al. (2024)

 Wu, Q., Bansal, G., Zhang, J., Wu, Y., Li, B., Zhu, E., Jiang, L., Zhang, X., Zhang, S., Liu, J., et al. 

Autogen: Enabling next-gen llm applications via multi-agent conversations. 

In *First Conference on Language Modeling*, 2024. 

- 
Xu et al. (2025)

 Xu, W., Liang, Z., Mei, K., Gao, H., Tan, J., and Zhang, Y. 

A-mem: Agentic memory for llm agents. 

*arXiv preprint arXiv:2502.12110*, 2025. 

- 
Yang et al. (2025)

 Yang, A., Li, A., Yang, B., Zhang, B., Hui, B., Zheng, B., Yu, B., Gao, C., Huang, C., Lv, C., et al. 

Qwen3 technical report. 

*arXiv preprint arXiv:2505.09388*, 2025. 

- 
Yang et al. (2018)

 Yang, Z., Qi, P., Zhang, S., Bengio, Y., Cohen, W., Salakhutdinov, R., and Manning, C. D. 

Hotpotqa: A dataset for diverse, explainable multi-hop question answering. 

In *Proceedings of the 2018 conference on empirical methods in natural language processing*, pp.  2369–2380, 2018. 

- 
Yao et al. (2022)

 Yao, S., Zhao, J., Yu, D., Du, N., Shafran, I., Narasimhan, K. R., and Cao, Y. 

React: Synergizing reasoning and acting in language models. 

In *The eleventh international conference on learning representations*, 2022. 

- 
Yao et al. (2023)

 Yao, S., Yu, D., Zhao, J., Shafran, I., Griffiths, T., Cao, Y., and Narasimhan, K. 

Tree of thoughts: Deliberate problem solving with large language models. 

*Advances in neural information processing systems*, 36:11809–11822, 2023. 

- 
Zeng et al. (2025)

 Zeng, Y., Ding, X., Hou, Y., Wang, Y., Du, L., Dai, J., Ding, Q., Tang, D., Tu, D., Liu, W., et al. 

Tool zero: Training tool-augmented llms via pure rl from scratch. 

In *Findings of the Association for Computational Linguistics: EMNLP 2025*, pp.  9135–9147, 2025. 

- 
Zhou et al. (2023)

 Zhou, A., Yan, K., Shlapentokh-Rothman, M., Wang, H., and Wang, Y.-X. 

Language agent tree search unifies reasoning acting and planning in language models. 

*arXiv preprint arXiv:2310.04406*, 2023. 

- 
Zhu et al. (2025a)

 Zhu, H., Qin, T., Zhu, K., Huang, H., Guan, Y., Xia, J., Yao, Y., Li, H., Wang, N., Liu, P., et al. 

Oagents: An empirical study of building effective agents. 

*arXiv preprint arXiv:2506.15741*, 2025a. 

- 
Zhu et al. (2025b)

 Zhu, K., Liu, Z., Li, B., Tian, M., Yang, Y., Zhang, J., Han, P., Xie, Q., Cui, F., Zhang, W., et al. 

Where llm agents fail and how they can learn from failures. 

*arXiv preprint arXiv:2509.25370*, 2025b. 

## 
Appendix A 
Implementation Details

### 
A.1 
Agent Framework

We build PreFlect based upon Smolagents (Roucher et al., [2025](https://arxiv.org/html/2602.07187v1#bib.bib20)) framework. Specifically, we add the prospective reflection mechanism and dynamic re-planning to the 
CodeAgent
 class. Therefore, the agent that executes all the tool calls and reasonings is a single agent. Due to resource limitations, we set the maximum action steps to 20. For re-planning, we enforce at least 2 extra planning steps to ensure there’s room for the agent to perform periodic summarization and planning. Therefore, except for the initial planning stage, if there is not at least one updated planning step between the 1st to 6th steps, and 7th to 12th steps, we enforce the agent to update the plan at the 6th and 12th steps. The prompt for planning follows the default prompt in Smolagents for the 
CodeAgent
 class.

### 
A.2 
Tools

We use the minimum necessary tools for both GAIA and SimpleQA, and all the experiments except Table [2](https://arxiv.org/html/2602.07187v1#S4.T2) are done with the same tool set.

- 
•

Web Search: Due to resource limitations, we use the default web search tool in Smolagents and use the DuckDuckGoSearch as the search engine.

- 
•

Visit Webpage: Similarly, we use the default visit webpage tool in Smolagents, which is powered by ‘requests’ and ‘markdownify’ libraries.

- 
•

Text Inspector: This tool enables the agent to parse diverse document types (e.g., .pdf, .docx, .pptx, .xlsx, .html) into Markdown text via a MarkdownConverter. It supports both raw content retrieval and query-based analysis, returning structured responses with brief answers, detailed analysis, and document context. This tool can also be found in Smolagent’s example of using the ODR agent to run GAIA tasks.

- 
•

Visual Inspector: Designed for image processing (.jpg, .png, .gif, .bmp), this tool utilizes a Vision-Language Model to interpret visual data. It automatically generates detailed captions or performs targeted visual question-answering b

...(内容已截断)
