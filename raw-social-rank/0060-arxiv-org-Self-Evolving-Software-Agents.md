# Self-Evolving Software Agents

- URL: https://arxiv.org/html/2604.27264
- Platform: arxiv.org
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown
- Query: site:twitter.com "self-evolving agents"

## Raw Content

## Self-Evolving Software Agents

**Source**: https://arxiv.org/html/2604.27264

---

[License: CC BY 4.0](https://info.arxiv.org/help/license/index.html#licenses-available)
 arXiv:2604.27264v1 [cs.SE] 29 Apr 2026

\setcopyright

ifaamas 
\acmConference
[AAMAS ’26]Proc. of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026)May 25 – 29, 2026 Paphos, CyprusC. Amato, L. Dennis, V. Mascardi, J. Thangarajah (eds.) 
\copyrightyear
2026 
\acmYear
2026 
\acmDOI

\acmPrice

\acmISBN

\acmSubmissionID
1194
\affiliation

\institution
University of Trento 
\city
Trento 
\country
Italy 
\affiliation

\institution
University of Trento 
\city
Trento 
\country
Italy 

# Self-Evolving Software Agents

Extended Abstract 

Marco Robol 

[marco.robol@unint.it](https://arxiv.org/html/2604.27264v1/mailto:marco.robol@unint.it)

 and 

Paolo Giorgini 

[paolo.giorgini@unitn.it](https://arxiv.org/html/2604.27264v1/mailto:paolo.giorgini@unitn.it)

###### Abstract.

Autonomous agents can adapt their behaviour to changing environments, but remain bound to requirements, goals, and capabilities fixed at design time, preventing genuine software evolution. This paper introduces *self-evolving software agents*, combining BDI reasoning with LLMs to enable autonomous evolution of goals, reasoning, and executable code. We propose a BDI–LLM architecture in which an automated evolution module operates alongside the agent’s reasoning loop, eliciting new requirements from experience and synthesizing corresponding design and code updates. A prototype evaluated in a dynamic multi-agent environment shows that agents can autonomously discover new goals and generate executable behaviours from minimal prior knowledge. The results indicate both the feasibility and current limits of LLM-driven evolution, particularly in terms of behavioural inheritance and stability.

###### Key words and phrases: 

Software Evolution; Adaptation; Autonomous Agents; BDI model; Artificial Intelligence; LLMs 

###### doi: 

HKPK4104 

{CCSXML}

¡ccs2012¿ ¡concept¿ ¡concept_id¿10010147.10010178¡/concept_id¿ ¡concept_desc¿Computing methodologies Artificial intelligence¡/concept_desc¿ ¡concept_significance¿500¡/concept_significance¿ ¡/concept¿ ¡concept¿ ¡concept_id¿10010147.10010178.10010216¡/concept_id¿ ¡concept_desc¿Computing methodologies Philosophical/theoretical foundations of artificial intelligence¡/concept_desc¿ ¡concept_significance¿100¡/concept_significance¿ ¡/concept¿ ¡concept¿ ¡concept_id¿10010147.10010178.10010219.10010221¡/concept_id¿ ¡concept_desc¿Computing methodologies Intelligent agents¡/concept_desc¿ ¡concept_significance¿100¡/concept_significance¿ ¡/concept¿ ¡concept¿ ¡concept_id¿10010147.10010257.10010293.10011809.10011815¡/concept_id¿ ¡concept_desc¿Computing methodologies Generative and developmental approaches¡/concept_desc¿ ¡concept_significance¿300¡/concept_significance¿ ¡/concept¿ ¡concept¿ ¡concept_id¿10010147.10010341.10010370¡/concept_id¿ ¡concept_desc¿Computing methodologies Simulation evaluation¡/concept_desc¿ ¡concept_significance¿100¡/concept_significance¿ ¡/concept¿ ¡concept¿ ¡concept_id¿10011007.10011074¡/concept_id¿ ¡concept_desc¿Software and its engineering Software creation and management¡/concept_desc¿ ¡concept_significance¿300¡/concept_significance¿ ¡/concept¿ ¡concept¿ ¡concept_id¿10011007.10010940¡/concept_id¿ ¡concept_desc¿Software and its engineering Software organization and properties¡/concept_desc¿ ¡concept_significance¿300¡/concept_significance¿ ¡/concept¿ ¡/ccs2012¿ 
\ccsdesc
[500]Computing methodologies Artificial intelligence 
\ccsdesc
[100]Computing methodologies Philosophical/theoretical foundations of artificial intelligence 
\ccsdesc
[100]Computing methodologies Intelligent agents 
\ccsdesc
[300]Computing methodologies Generative and developmental approaches 
\ccsdesc
[100]Computing methodologies Simulation evaluation 
\ccsdesc
[300]Software and its engineering Software creation and management 
\ccsdesc
[300]Software and its engineering Software organization and properties 

## 
1. 
Motivation and Background

Modern software systems increasingly operate in open and dynamic environments shaped by machine learning, IoT, and cloud computing 
paris2021
; 
bettini2015
, where requirements, assumptions, and operational contexts evolve over time 
bohm2020
; 
davenport2019
. While self-adaptive systems and autonomous agents can modify their behaviour at runtime, they typically remain bound to goals, requirements, and capabilities defined at design time. As a result, they can adapt, but not genuinely evolve. Software evolution, originally limited to code fixes and incremental updates 
lehman1980
, now entails revising system objectives, internal reasoning structures, and executable capabilities in response to emerging needs 
cheng2009
. Despite extensive research on software evolution 
Fernandez-Ramil06
; 
swchange1999
; 
somerville2010
; 
pressman2005
, requirements engineering 
parnas1994
; 
boehm1988
; 
jackson1995
, and self-managing systems 
deLemos2001
; 
oreizy1999
; 
garlan2004
, current agent architectures lack explicit mechanisms to autonomously evolve their own requirements and code while preserving architectural coherence 
mcKinley2004
; 
swadaptation1997
. Recent advances in Large Language Models 
bommasani2021
 offer new opportunities to automate parts of the software evolution process, including requirement elicitation, design revision, and code synthesis. However, existing agentic AI approaches largely rely on prompt-driven behaviour and externally defined objectives, providing limited support for structured, long-term evolution.

This work addresses this gap by introducing a framework for self-evolving software agents that integrates automated software evolution principles within a BDI architecture, enabling agents to evolve goals, reasoning, and actions autonomously.

## 
2. 
Self-Evolving Agents Architecture

Figure [1](https://arxiv.org/html/2604.27264#S2.F1) illustrates the proposed BDI–LLM architecture for self-evolving software agents 
franklin1996
; 
wooldridge2009
; 
luck2021agent
. The model builds on a classical BDI reasoning loop 
rao1995
; 
wooldridge1995
; 
wooldridge2009
, where the agent continuously updates beliefs, deliberates over desires, selects intentions, and executes plans in response to environmental perceptions. In addition to the standard reasoning loop, the architecture introduces an *Automated Evolution Module* that operates independently from runtime decision making. This module monitors the agent’s experience and identifies unmet needs or novel opportunities that cannot be addressed by the current knowledge, goals, or action repertoire. When triggered, it initiates an automated software evolution cycle based on variation, selection, and inheritance.

The evolution process acts on three architectural layers of the agent: (i) knowledge representation and reasoning, by extending or revising perceptual and inference mechanisms; (ii) goal generation and decision making, by introducing new goals and intention-selection policies; and (iii) execution, by synthesizing or adapting executable actions and plans. By isolating evolution from the reasoning loop, the architecture preserves behavioural coherence while enabling autonomous, long-term evolution of the agent’s internal structure. This approach addresses challenges in adaptive systems 
muller2014application
; 
whittle2011
; 
cheng2009
 and leverages recent advances in LLMs for automated code generation 
brown2020language
; 
chen2021evaluating
; 
bommasani2021
; 
li2022alphacode
.

![Refer to caption](https://arxiv.org/html/2604.27264v1/images/self-evolving-BDI-agent.drawio.png)
\Description

Diagram showing the architecture of a self-evolving BDI agent.

Figure 1. 
BDI–LLM architecture for self-evolving software agents. An automated evolution module operates alongside the classical BDI reasoning loop, enabling autonomous evolution of knowledge, goals, and executable actions.

## 
3. 
Prototype and Preliminary Evaluation

We implemented a prototype of the proposed self-evolving agent using a BDI control loop extended with an LLM-driven evolution module 
openai2024gpt4o
; 
vaccari2023
. The agent operates in a dynamic multi-agent environment inspired by the Deliveroo.js framework, where it must perceive the environment, discover goals, and generate executable plans while interacting with other agents and environmental constraints. The agent is initially provided only with a textual description of the environment and a minimal set of APIs, without predefined domain-specific knowledge or goals. The evolution module is triggered when perceived information cannot be interpreted or exploited using the current knowledge and goal structures. In such cases, the agent autonomously generates new goals, revises its reasoning structures, and synthesizes executable actions, which are then validated through interaction with the environment. Successful behaviours are retained and reused in subsequent situations, while ineffective ones are discarded.

Preliminary experiments show that the agent is able to autonomously discover operational goals and generate executable behaviours starting from minimal prior knowledge. At the same time, the results highlight current limitations of LLM-driven evolution, particularly in terms of behavioural inheritance and robustness as environmental complexity increases. These observations confirm the feasibility of autonomous software evolution while motivating further investigation on mechanisms for stabilising and reinforcing evolved behaviours.

## 
4. 
Conclusions and Outlook

This paper introduced a framework for self-evolving software agents that integrates automated software evolution principles within a BDI architecture augmented by LLMs. By separating runtime reasoning from an explicit evolution module, the proposed approach enables agents to autonomously revise goals, reasoning structures, and executable actions, moving beyond traditional notions of behavioural adaptation. The prototype and preliminary evaluation demonstrate the feasibility of autonomous evolution in dynamic multi-agent environments, while also revealing current limitations in behavioural inheritance, stability, and scalability. These challenges point to the need for reinforcement mechanisms, memory consolidation, and more robust selection strategies.

Future work will focus on strengthening inheritance and long-term consistency, extending the evaluation to more complex multi-agent scenarios, and exploring collective and cooperative forms of software evolution among agents, as well as leveraging retrieval-augmented generation 
lewis2020rag
 to enhance LLM reasoning with external knowledge.

## References

BETA
[javascript:toggleReadingMode();](javascript:toggleReadingMode();)
