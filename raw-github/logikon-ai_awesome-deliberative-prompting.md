---
repo: logikon-ai/awesome-deliberative-prompting
url: https://github.com/logikon-ai/awesome-deliberative-prompting
content_timestamp: 2021-03-24
time_slice: early
timestamp_source: github_latest_commit_or_update_text
collected_at: 2026-05-20T17:45:19Z
source: github
---

## GitHub - logikon-ai/awesome-deliberative-prompting: Awesome deliberative prompting: How to ask LLMs to produce reliable reasoning and make reason-responsive decisions. · GitHub

**Source**: https://github.com/logikon-ai/awesome-deliberative-prompting

---

[Skip to content](https://github.com/logikon-ai/awesome-deliberative-prompting#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

     This repository was archived by the owner on Feb 3, 2025. It is now read-only.   

[logikon-ai](https://github.com/logikon-ai)

/
**[awesome-deliberative-prompting](https://github.com/logikon-ai/awesome-deliberative-prompting)**

Public archive

- [Notifications](https://github.com/login?return_to=%2Flogikon-ai%2Fawesome-deliberative-prompting)You must be signed in to change notification settings
- [Fork
    8](https://github.com/login?return_to=%2Flogikon-ai%2Fawesome-deliberative-prompting)
- 
[Star
          126](https://github.com/login?return_to=%2Flogikon-ai%2Fawesome-deliberative-prompting)

[https://github.com/logikon-ai/awesome-deliberative-prompting](https://github.com/logikon-ai/awesome-deliberative-prompting)

[Branches](https://github.com/logikon-ai/awesome-deliberative-prompting/branches)[Tags](https://github.com/logikon-ai/awesome-deliberative-prompting/tags)

[https://github.com/logikon-ai/awesome-deliberative-prompting/branches](https://github.com/logikon-ai/awesome-deliberative-prompting/branches)[https://github.com/logikon-ai/awesome-deliberative-prompting/tags](https://github.com/logikon-ai/awesome-deliberative-prompting/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History123 Commits123 Commits |  |  |  |
| .github/workflows | .github/workflows |  |  |
| LICENSE | LICENSE |  |  |
| README.md | README.md |  |  |
| code-of-conduct.md | code-of-conduct.md |  |  |
| contributing.md | contributing.md |  |  |
| View all files |  |  |  |

## Repository files navigation

# Awesome Deliberative Prompting [https://awesome.re](https://awesome.re)

[https://github.com/logikon-ai/awesome-deliberative-prompting#awesome-deliberative-prompting-](https://github.com/logikon-ai/awesome-deliberative-prompting#awesome-deliberative-prompting-)

Note

*Deliberative prompting*, *chain-of-thought*, *self-reflection* and *thinking* have become mainstream techniques in AI. This archived opinionated reading lists documents the journey the community has taken to achieve this feat in less than 4 years, from the beginnings in 2021 to January 2025, when Deepseek R1 has been released. Thanks for following.

**How to ask Large Language Models (LLMs) to produce reliable reasoning and make reason-responsive decisions.**

> **deliberation**, n.
> 
> 
> 
> The action of thinking carefully about something, esp. in order to reach a decision; careful consideration; an act or instance of this. (OED)

## Contents

[https://github.com/logikon-ai/awesome-deliberative-prompting#contents](https://github.com/logikon-ai/awesome-deliberative-prompting#contents)

- [Success Stories](https://github.com/logikon-ai/awesome-deliberative-prompting#success-stories)
- [Prompting Patterns and Strategies](https://github.com/logikon-ai/awesome-deliberative-prompting#prompting-patterns-and-strategies)
  - [Beyond "Let's think step by step"](https://github.com/logikon-ai/awesome-deliberative-prompting#beyond-lets-think-step-by-step)
  - [Multi-Agent Deliberation](https://github.com/logikon-ai/awesome-deliberative-prompting#multi-agent-deliberation)
  - [Reflection and Meta-Cognition](https://github.com/logikon-ai/awesome-deliberative-prompting#reflection-and-meta-cognition)

- [Text Generation Techniques](https://github.com/logikon-ai/awesome-deliberative-prompting#text-generation-techniques)
- [Self-Correction](https://github.com/logikon-ai/awesome-deliberative-prompting#self-correction)
- [Reasoning Analytics](https://github.com/logikon-ai/awesome-deliberative-prompting#reasoning-analytics)
- [Limitations, Failures, Puzzles](https://github.com/logikon-ai/awesome-deliberative-prompting#limitations-failures-puzzles)
- [Datasets](https://github.com/logikon-ai/awesome-deliberative-prompting#datasets)
- [Tools and Frameworks](https://github.com/logikon-ai/awesome-deliberative-prompting#tools-and-frameworks)
- [Other Resources](https://github.com/logikon-ai/awesome-deliberative-prompting#other-resources)

## Success Stories

[https://github.com/logikon-ai/awesome-deliberative-prompting#success-stories](https://github.com/logikon-ai/awesome-deliberative-prompting#success-stories)

*Striking evidence for effectiveness of deliberative prompting.*

- 🎓 One of the first attempts to elicit reasoning traces from LLMs to improve performance, includes experiments with GPT-2. "Thinking Aloud: Dynamic Context Generation Improves Zero-Shot Reasoning Performance of GPT-2." 2021-03-24. [[>paper](https://arxiv.org/abs/2103.13033)]
- 🎓 The original "chain of though" (CoT) paper, first to give clear evidence that deliberative prompting works. "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." 2022-01-28. [[>paper](https://arxiv.org/abs/2201.11903)]
- 🎓 Deliberative prompting improves ability of Google's LLMs to solve unseen difficult problems, and instruction-finetuned (Flan-) models are much better at it. 
  - "Scaling Instruction-Finetuned Language Models." 2022-12-06. [[>paper](https://arxiv.org/abs/2210.11416)]
  - "PaLM 2 Technical Report." 2023-05-17. [[>paper](https://arxiv.org/abs/2305.10403)]

- 🎓 Deliberative prompting is highly effective for OpenAI's models (Text-Davinci-003, ChatGPT, GPT-4), increasing accuracy in many (yet not all) reasoning tasks in the EvalAGI benchmark. "AGIEval: A Human-Centric Benchmark for Evaluating Foundation Models." 2023-04-13. [[>paper](https://arxiv.org/abs/2304.06364)]
- 🎓 Deliberative prompting unlocks latent cognitive skills and is more effective for bigger models. "Challenging BIG-Bench tasks and whether chain-of-thought can solve them." 2022-10-17. [[>paper](https://arxiv.org/abs/2210.09261)]
- 🎓 Experimentally introducing errors in CoT reasoning traces decreases decision accuracy, which provides indirect evidence for reason-responsiveness of LLMs. "Stress Testing Chain-of-Thought Prompting for Large Language Models." 2023-09-28. [[>paper](https://arxiv.org/abs/2309.16621)]
- 🎓 Reasoning (about retrieval candidates) improves RAG. "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection." 2023-10-17. [[>paper](https://arxiv.org/abs/2310.11511)]
- 🎓 Deliberative reading notes improve RAG. "Chain-of-Note: Enhancing Robustness in Retrieval-Augmented Language Models." 2023-11-15. [[>paper](https://arxiv.org/abs/2311.09210)]
- 🎓 Good reasoning (CoT) causes good answers (i.e., LLMs are reason-responsive). "Causal Abstraction for Chain-of-Thought Reasoning in Arithmetic Word Problems." 2023-12-07. [[>paper](https://aclanthology.org/2023.blackboxnlp-1.12.pdf)]
- 🎓 Logical interpretation of internal layer-wise processing of reasoning tasks yields further evidence for reason-responsiveness. "Towards a Mechanistic Interpretation of Multi-Step Reasoning Capabilities of Language Model." 2023-12-07. [[>paper](https://arxiv.org/abs/2310.14491)]
- 🎓 Reasoning about alternative drafts improves text generation. "Self-Evaluation Improves Selective Generation in Large Language Models." 2023-12-14. [[>paper](https://arxiv.org/abs/2312.09300)]
- 🎓 CoT with carefully retrieved, diverse reasoning demonstrations boosts multi-modal LLMs. "Retrieval-augmented Multi-modal Chain-of-Thoughts Reasoning for Large Language Models." 2023-12-04. [[>paper](https://arxiv.org/abs/2312.01714)]
- 🎓 Effective multi-hop CoT for visual question answering. "II-MMR: Identifying and Improving Multi-modal Multi-hop Reasoning in Visual Question Answering." 2024-02-16. [[>paper](https://arxiv.org/abs/2402.11058)]
- 🎓 👩‍💻 DPO on synthetic CoT traces increases reason-responsiveness of small LLMs. "Making Reasoning Matter: Measuring and Improving Faithfulness of Chain-of-Thought Reasoning" 2024-02-23. [[>paper](https://arxiv.org/abs/2402.13950)] [[>code](https://debjitpaul.github.io/reasoningmatter)]
- 🎓 The impressive Deepseek R1 demonstrates that LLMs can learn effective problem solving, reflection, self-validation and self-correction through RL alone. "Deepseek R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" 2025-02-03. [[>paper](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf)]

## Prompting Patterns and Strategies

[https://github.com/logikon-ai/awesome-deliberative-prompting#prompting-patterns-and-strategies](https://github.com/logikon-ai/awesome-deliberative-prompting#prompting-patterns-and-strategies)

*Prompting strategies and patterns to make LLMs deliberate.*

### Beyond "Let's think step by step"

[https://github.com/logikon-ai/awesome-deliberative-prompting#beyond-lets-think-step-by-step](https://github.com/logikon-ai/awesome-deliberative-prompting#beyond-lets-think-step-by-step)

*Instructing LLMs to reason (in a specific way).*

- 🎓 Asking GPT-4 to provide a correct and a wrong answers boosts accuracy. "Large Language Models are Contrastive Reasoners." 2024-03-13. [[>paper](https://arxiv.org/abs/2403.08211)]
- 🔥🎓 Guided dynamic prompting increases GPT-4 CoT performance by up to 30 percentage points. "Structure Guided Prompt: Instructing Large Language Model in Multi-Step Reasoning by Exploring Graph Structure of the Text" 2024-02-20. [[>paper](https://arxiv.org/abs/2402.13415)]
- 🎓 Letting LLMs choose and combine reasoning strategies is cost-efficient and improves performance. "SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures." 2024-02-06. [[>paper](https://arxiv.org/abs/2402.03620)]
- 🎓 CoA: Produce an abstract reasoning trace first, and fill in the details (using tools) later. "Efficient Tool Use with Chain-of-Abstraction Reasoning." 2024-01-30. [[>paper](https://arxiv.org/abs/2401.17464)]
- 🎓 Reason over and over again until verification test is passed. "Plan, Verify and Switch: Integrated Reasoning with Diverse X-of-Thoughts." 2023-10-23. [[>paper](https://arxiv.org/abs/2310.14628)]
- 🎓 Generate multiple diverse deliberations, then synthesize those in a single reasoning path. "Ask One More Time: Self-Agreement Improves Reasoning of Language Models in (Almost) All Scenarios." 2023-11-14. [[>paper](https://arxiv.org/abs/2311.08154)]
- 🎓 Survey of CoT regarding task types, prompt designs, and reasoning quality metrics. "Towards Better Chain-of-Thought Prompting Strategies: A Survey." 2023-10-08. [[>paper](https://arxiv.org/abs/2310.04959)]
- 🎓 Asking a LLM about a problem's broader context leads to better answers. "Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models." 2023-10-09. [[>paper](https://arxiv.org/abs/2310.06117)]
- Weighing Pros and Cons: This universal deliberation paradigm can be implemented with LLMs. 
  - 👩‍💻 A *{{guidance}}* program that does: 1. Identify Options → 2. Generate Pros and Cons → 3. Weigh Reasons → 4. Decide. [[>code](https://github.com/guidance-ai/guidance/blob/main/README.md#role-based-chat-model-example-notebook)]

- 🎓 👩‍💻 Plan-and-Solve Prompting. "Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models." 2023-05-06. [[>paper](https://aclanthology.org/2023.acl-long.147.pdf)] [[>code](https://github.com/AGI-Edgerunners/Plan-and-Solve-Prompting)]
- 🎓 Note-Taking. "Learning to Reason and Memorize with Self-Notes." 2023-05-01. [[>paper](https://arxiv.org/abs/2305.00833)]
- 🎓 Deliberate-then-Generate improves text quality. "Deliberate then Generate: Enhanced Prompting Framework for Text Generation." 2023-05-31. [[>paper](https://arxiv.org/abs/2305.19835)]
- 🎓 Make LLM spontaneously interleave reasoning and Q/A. "ReAct: Synergizing Reasoning and Acting in Language Models." 2022-10-06. [[>paper](https://arxiv.org/abs/2210.03629)]
- 🎓 'Divide-and-Conquer' instructions substantially outperform standard CoT. "Least-to-Most Prompting Enables Complex Reasoning in Large Language Models" 2022-05-21. [[>paper](https://arxiv.org/pdf/2205.10625.pdf)]

### Multi-Agent Deliberation

[https://github.com/logikon-ai/awesome-deliberative-prompting#multi-agent-deliberation](https://github.com/logikon-ai/awesome-deliberative-prompting#multi-agent-deliberation)

*Let one (or many) LLMs simulate a free controversy.*

- 🎓 👩‍💻 Carefully selected open LLMs that iteratively review and improve their answers outperform GPT4-o. "Mixture-of-Agents Enhances Large Language Model Capabilities." 2024-06-10. [[>paper](https://arxiv.org/abs/2406.04692)] [[>code](https://github.com/togethercomputer/moa)]
- 🎓 More elaborate and costly multi-agent-system designs are typically more effective, according to this review: "Are we going MAD? Benchmarking Multi-Agent Debate between Language Models for Medical Q&A." 2023-11-19. [[>paper](https://arxiv.org/abs/2311.17371)]
- 🎓 Systematic peer review is even better than multi-agent debate. "Towards Reasoning in Large Language Models via Multi-Agent Peer Review Collaboration." 2023-11-14. [[>paper](https://arxiv.org/abs/2311.08152)]
- 🎓 Collective critique and reflection reduce factual hallucinations and toxicity. "N-Critics: Self-Refinement of Large Language Models with Ensemble of Critics." 2023-10-28. [[>paper](https://arxiv.org/abs/2310.18679)]
- 🎓 👩‍💻 Delphi-process with diverse LLMs is veristically more valuable than simple debating. "ReConcile: Round-Table Conference Improves Reasoning via Consensus among Diverse LLMs." 2023-09-22. [[>paper](https://arxiv.org/abs/2309.13007)] [[>code](https://github.com/dinobby/ReConcile)]
- 🎓 Multi-agent debate increases cognitive diversity increases performance. "Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate." 2023-05-30. [[>paper](https://arxiv.org/abs/2305.19118)]
- 🎓 Leverage wisdom of the crowd effects through debate simulation. "Improving Factuality and Reasoning in Language Models through Multiagent Debate." 2023-05-23. [[>paper](https://arxiv.org/abs/2305.14325)]
- 🎓 👩‍💻 Emulate Socratic dialogue to collaboratively solve problems with multiple AI agents. "The Socratic Method for Self-Discovery in Large Language Models." 2023-05-05. [[>blog](https://princeton-nlp.github.io/SocraticAI/)] [[>code](https://github.com/RunzheYang/SocraticAI)]

### Reflection and Meta-Cognition

[https://github.com/logikon-ai/awesome-deliberative-prompting#reflection-and-meta-cognition](https://github.com/logikon-ai/awesome-deliberative-prompting#reflection-and-meta-cognition)

*Higher-order reasoning strategies that may improve first-order deliberation.*

- 🎓 👩‍💻 Keeping track of *general* insights gained from CoT problem solving improves future accuracy and efficiency. "Buffer of Thoughts: Thought-Augmented Reasoning with Large Language Models." 2024-06-06. [[>paper](https://arxiv.org/abs/2406.04271)] [[>code](https://github.com/YangLing0818/buffer-of-thought-llm)]
- 🎓 👩‍💻 Processing task in function of self-assessed difficulty boosts CoT effectiveness. "Divide and Conquer for Large Language Models Reasoning." 2024-01-10. [[>paper](https://arxiv.org/abs/2401.05190)] [[>code](https://github.com/AiMijie/Divide-and-Conquer)]
- 🎓 👩‍💻 Reflecting on task allows LLM to autogenerate more effective instructions, demonstration, and reasoning traces. "Meta-CoT: Generalizable Chain-of-Thought Prompting in Mixed-task Scenarios with Large Language Models." 2023-10-11. [[>paper](https://arxiv.org/abs/2310.06692)] [[>code](https://github.com/Anni-Zou/Meta-CoT)]
- 🎓 👩‍💻 LLM-based AI Instructor devises effective first-order CoT-instructions (open source models improve by up to 20%). "Agent Instructs Large Language Models to be General Zero-Shot Reasoners." 2023-10-05. [[>paper](https://arxiv.org/abs/2310.03710)] [[>code](https://github.com/wang-research-lab/agentinstruct)]
- 🎓 👩‍💻 Clarify→Judge→Evaluate→Confirm→Qualify Paradigm. "Metacognitive Prompting Improves Understanding in Large Language Models." 2023-08-10. [[>paper](https://arxiv.org/abs/2308.05342)] [[>code](https://github.com/EternityYW/Metacognitive-Prompting)]
- 🎓 👩‍💻 Find-then-simulate-an-expert-for-this-problem Strategy. "Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm." 2021-02-15. [[>paper](https://arxiv.org/abs/2102.07350)] [[>lmql](https://lmql.ai/playground)]

## Text Generation Techniques

[https://github.com/logikon-ai/awesome-deliberative-prompting#text-generation-techniques](https://github.com/logikon-ai/awesome-deliberative-prompting#text-generation-techniques)

*Text generation techniques, which can be combined with prompting patterns and strategies.*

- 🔥🎓 Iterative revision of reasoning in light of previous CoT traces improves accuracy by 10-20%. "RAT: Retrieval Augmented Thoughts Elicit Context-Aware Reasoning in Long-Horizon Generation". 2024-03-08. [[>paper](https://arxiv.org/abs/2403.05313)]
- 🎓 Pipeline for self-generating & choosing effective CoT few-shot demonstrations. "Universal Self-adaptive Prompting". 2023-05-24. [[>paper](https://arxiv.org/abs/2305.14926)]
- 🎓 More reasoning (= longer reasoning traces) is better. "The Impact of Reasoning Step Length on Large Language Models". 2024-01-10. [[>paper](https://arxiv.org/abs/2401.04925)]
- 🎓 Having (accordingly labeled) correct *and* erroneous (few-shot) reasoning demonstrations improves CoT. "Contrastive Chain-of-Thought Prompting." 2023-11-17. [[>paper](https://arxiv.org/abs/2311.09277)]
- 🎓 Better problem-solving and deliberation through few-shot trial-and-error (in-context RL). "Reflexion: Language Agents with Verbal Reinforcement Learning." 2023-03-20. [[>paper](https://arxiv.org/abs/2303.11366)]
- 🎓 External guides that constrain generation of reasoning improve accuracy by up to 35% on selected tasks. "Certified Reasoning with Language Models." 2023-06-06. [[>paper](https://arxiv.org/abs/2306.04031)]
- 🎓 👩‍💻 Highly effective beam search for generating complex, multi-step reasoning episodes. "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." 2023-05-17. [[>paper](https://arxiv.org/abs/2305.10601)] [[>code](https://github.com/princeton-nlp/tree-of-thought-llm)] 
  - 👩‍💻 A minimalistic implementation of Tree-of-Thoughts as plain prompt. [[>code](https://github.com/dave1010/tree-of-thought-prompting)]
  - 👩‍💻 An experimental [LMQL](https://lmql.ai/) implementation of Tree-of-Thoughts. [[>code](https://github.com/LachlanGray/lmql-tree-of-thoughts)]

- 🎓 👩‍💻 LLM auto-generates diverse reasoning demonstration to-be-used in deliberative prompting. "Automatic Chain of Thought Prompting in Large Language Models." 2022-10-07. [[>paper](https://arxiv.org/abs/2210.03493)] [[>code](https://github.com/amazon-science/auto-cot)]

## Self-Correction

[https://github.com/logikon-ai/awesome-deliberative-prompting#self-correction](https://github.com/logikon-ai/awesome-deliberative-prompting#self-correction)

*Let LLMs self-correct their deliberation.*

- 🎓 Consistency between multiple CoT-traces is an indicator of reasoning reliability, which can be exploited for self-check / aggregation. "Can We Verify Step by Step for Incorrect Answer Detection?" 2024-02-16. [[>paper](https://arxiv.org/abs/2402.10528)]
- 🎓 Turn LLMs into intrinsic self-checkers by appending self-correction steps to standard CoT traces for finetuning. "Small Language Model Can Self-correct." 2024-01-14. [[>paper](https://arxiv.org/abs/2401.07301)]
- 🎓 Reinforced Self-Training improves retrieval-augmented multi-hop Q/A. "ReST meets ReAct: Self-Improvement for Multi-Step Reasoning LLM Agent." 2023-12-15. [[>paper](https://arxiv.org/abs/2312.10003)]
- 🎓 Conditional self-correction depending on whether critical questions have been addressed in reasoning trace. "The ART of LLM Refinement: Ask, Refine, and Trust." 2023-11-14. [[>paper](https://arxiv.org/abs/2311.07961)]
- 🎓 Iteratively refining reasoning given diverse feedback increases accuaracy by up tp 10% (ChatGPT). "MAF: Multi-Aspect Feedback for Improving Reasoning in Large Language Models." 2023-10-19. [[>paper](https://arxiv.org/abs/2310.12426)]
- 🎓 Instructing a model just to "review" its answer and "find problems" doesn't lead to effective self-correction. "Large Language Models Cannot Self-Correct Reasoning Yet." 2023-09-25. [[>paper](https://arxiv.org/abs/2310.01798)]
- 🎓 LLMs can come up with, and address critical questions to improve their drafts. "Chain-of-Verification Reduces Hallucination in Large Language Models." 2023-09-25. [[>paper](https://arxiv.org/abs/2309.11495)]
- 🎓 LogiCoT: Self-check and revision after each CoT step improves performance (for selected tasks and models). "Enhancing Zero-Shot Chain-of-Thought Reasoning in Large Language Models through Logic." 2023-09-23. [[>paper](https://arxiv.org/abs/2309.13339)]
- 🎓 Excellent review about self-correcting LLMs, with application to unfaithful reasoning. "Automatically Correcting Large Language Models: Surveying the landscape of diverse self-correction strategies." 2023-08-06. [[>paper](https://arxiv.org/abs/2308.03188)]

## Reasoning Analytics

[https://github.com/logikon-ai/awesome-deliberative-prompting#reasoning-analytics](https://github.com/logikon-ai/awesome-deliberative-prompting#reasoning-analytics)

*Methods for analysing LLM deliberation and assessing reasoning quality.*

- 🎓👩‍💻 Comprehensive LLM-based reasoning analytics that breaks texts down into individual reasons. "DCR-Consistency: Divide-Conquer-Reasoning for Consistency Evaluation and Improvement of Large Language Models." 2024-01-04. [[>paper](https://arxiv.org/abs/2401.02132)] [[>code](https://github.com/intuit-ai-research/DCR-consistency)]
- 🎓🤗 Highly performant, open LLM (T5-based) for inference verification. "Minds versus Machines: Rethinking Entailment Verification with Language Models." 2024-02-06. [[>paper](https://arxiv.org/abs/2402.03686)] [[>model](https://github.com/logikon-ai/awesome-deliberative-prompting/blob/main/soumyasanyal/entailment-verifier-xxl)]
- 🎓👩‍💻 Test dataset for CoT evaluators. "A Chain-of-Thought Is as Strong as Its Weakest Link: A Benchmark for Verifiers of Reasoning Chains." 2023-11-23. [[>paper](https://arxiv.org/abs/2402.00559)] [[>dataset](https://huggingface.co/datasets/google/reveal)]
- 🎓👩‍💻 Framework for evaluating reasoning chains by viewing them as informal proofs that derive the final answer. "ReCEval: Evaluating Reasoning Chains via Correctness and Informativeness." 2023-11-23. [[>paper](https://arxiv.org/abs/2304.10703)] [[>code](https://github.com/archiki/ReCEval)]
- 🎓 GPT-4 is 5x better at predicting whether math reasoning is correct than GPT-3.5. "Challenge LLMs to Reason About Reasoning: A Benchmark to Unveil Cognitive Depth in LLMs." 2023-12-28. [[>paper](https://arxiv.org/abs/2312.17080)]
- 🎓 Minimalistic GPT-4 prompts for assessing reasoning quality. "SocREval: Large Language Models with the Socratic Method for Reference-Free Reasoning Evaluation." 2023-09-29. [[>paper](https://arxiv.org/abs/2310.00074)] [[>code](https://github.com/facebookresearch/ParlAI/tree/main/projects/roscoe#meta-evaluation)]
- 🎓👩‍💻 Automatic, semantic-similarity based metrics for assessing CoT traces (redundancy, faithfulness, consistency, etc.). "ROSCOE: A Suite of Metrics for Scoring Step-by-Step Reasoning." 2023-09-12. [[>paper](https://arxiv.org/abs/2212.07919)]

## Limitations, Failures, Puzzles

[https://github.com/logikon-ai/awesome-deliberative-prompting#limitations-failures-puzzles](https://github.com/logikon-ai/awesome-deliberative-prompting#limitations-failures-puzzles)

*Things that don't work, or are poorly understood.*

- 🎓 Structured generation risks to degrade reasoning quality and CoT effectiveness. "Let Me Speak Freely? A Study on the Impact of Format Restrictions on Performance of Large Language Models." 2024-08-05. [[>paper](https://arxiv.org/abs/2408.02442)]
- 🎓 Filler tokens can be as effective as sound reasoning traces for eliciting correct answers. "Let's Think Dot by Dot: Hidden Computation in Transformer Language Models." 2024-04-24. [[>paper](https://arxiv.org/abs/2404.15758)]
- 🔥🎓 Causal analysis shows that LLMs sometimes ignore CoT traces, but reason responsiveness increases with model size, and is shaped by fine-tuning. "LLMs with Chain-of-Thought Are Non-Causal Reasoners" 2024-02-25. [[>paper](https://arxiv.org/abs/2402.16048)]
- 🎓 Bad reasoning may lead to correct conclusions, hence better methods for CoT evaluation are needed. "SCORE: A framework for Self-Contradictory Reasoning Evaluation." 2023-11-16. [[>paper](https://arxiv.org/abs/2311.09603)]
- 🎓 LLMs may produce "encoded reasoning" that's unintelligable to humans, which may nullify any XAI gains from deliberative prompting. "Preventing Language Models From Hiding Their Reasoning." 2023-10-27. [[>paper](https://arxiv.org/abs/2310.18512)]
- 🎓 LLMs judge and decide in function of available arguments (reason-responsiveness), but are more strongly influenced by fallacious and deceptive reasons as compared to sound ones. "How susceptible are LLMs to Logical Fallacies?" 2023-08-18. [[>paper](https://arxiv.org/abs/2308.09853)]
- 🎓 Incorrect reasoning improves answer accuracy (nearly) as much as correct one. "Invalid Logic, Equivalent Gains: The Bizarreness of Reasoning in Language Model Prompting." 2023-07-20. [[>paper](https://arxiv.org/abs/2307.10573)]
- 🎓 Zeroshot CoT reasoning in sensitive domains increases a LLM's likelihood to produce harmful or undesirable output. "On Second Thought, Let's Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning." 2023-06-23. [[>paper](https://arxiv.org/abs/2212.08061)]
- 🎓 LLMs may systematically fabricate erroneous CoT rationales for wrong answers, NYU/Anthropic team finds. "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting." 2023-05-07. [[>paper](https://arxiv.org/abs/2305.04388)]
- 🎓 LLMs' practical deliberation is not robust, but easily let astray by re-wording scenarios. "Despite 'super-human' performance, current LLMs are unsuited for decisions about ethics and safety" 2022-12-13. [[>paper](https://arxiv.org/abs/2212.06295)]

## Datasets

[https://github.com/logikon-ai/awesome-deliberative-prompting#datasets](https://github.com/logikon-ai/awesome-deliberative-prompting#datasets)

*Datasets containing examples of deliberative prompting, potentially useful for training models / assessing their deliberation skills.*

- Instruction-following dataset augmented with "reasoning traces" generated by LLMs. 
  - 🎓 *ORCA* - Microsoft's original paper. "Orca: Progressive Learning from Complex Explanation Traces of GPT-4." 2023-06-05. [[>paper](https://arxiv.org/abs/2306.02707)]
  - 👩‍💻 *OpenOrca* - Open source replication of ORCA datasets. [[>dataset](https://huggingface.co/datasets/Open-Orca/OpenOrca)]
  - 👩‍💻 *Dolphin* - Open source replication of ORCA datasets. [[>dataset](https://huggingface.co/datasets/ehartford/dolphin)]
  - 🎓 *ORCA 2* - Improved Orca by Microsoft, e.g. with meta reasoning. "Orca 2: Teaching Small Language Models How to Reason." 2023-11-18. [[>paper](https://arxiv.org/abs/2311.11045)]

- 🎓👩‍💻 *CoT Collection* - 1.84 million reasoning traces for 1,060 tasks. "The CoT Collection: Improving Zero-shot and Few-shot Learning of Language Models via Chain-of-Thought Fine-Tuning." [[>paper](https://arxiv.org/abs/2305.14045)] [[>code](https://github.com/kaistAI/CoT-Collection)]
- 👩‍💻 *OASST1* - contains more than 200 instructions to generate pros and cons (acc. to nomic.ai's [map](https://huggingface.co/spaces/nomic-ai/OpenAssistant_oasst1)). [[>dataset](https://huggingface.co/datasets/OpenAssistant/oasst1)]
- 🎓 *LegalBench* - a benchmark for legal reasoning in LLMs [[>paper](https://arxiv.org/abs/2308.11462)]
- 🎓👩‍💻 *ThoughtSource* - an open resource for data and tools related to chain-of-thought reasoning in large language models. [[>paper](https://www.nature.com/articles/s41597-023-02433-3.pdf)] [[>code](https://github.com/OpenBioLink/ThoughtSource)]
- 🎓👩‍💻 Review with lots of hints to CoT relevant datasets. "Datasets for Large Language Models: A Comprehensive Survey" [[>paper](https://arxiv.org/pdf/2402.18041.pdf)] [[>code](https://github.com/lmmlzn/Awesome-LLMs-Datasets)]
- 👩‍💻 Maxime Labonne's LLM datasets list [[github](https://github.com/mlabonne/llm-datasets)]

## Tools and Frameworks

[https://github.com/logikon-ai/awesome-deliberative-prompting#tools-and-frameworks](https://github.com/logikon-ai/awesome-deliberative-prompting#tools-and-frameworks)

*Tools and Frameworks to implement deliberative prompting.*

- 👩‍💻 *LMQL* - a programming language for language model interaction. [[>site](https://lmql.ai/)] [https://camo.githubusercontent.com/4764beb03d8bd5e9edf2d51efa676116758ac10743d129993046728cf57d24f1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6574682d7372692f6c6d716c](https://camo.githubusercontent.com/4764beb03d8bd5e9edf2d51efa676116758ac10743d129993046728cf57d24f1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6574682d7372692f6c6d716c)
  - 👩‍💻 Interactive LMQL Playground [[>site](https://lmql.ai/playground)]
  - 🎓 "Prompting Is Programming: A Query Language for Large Language Models." 2022-12-12. [[>paper](https://arxiv.org/abs/2212.06094)]

- 👩‍💻 *{{guidance}}* - a language for controlling large language models. [[>code](https://github.com/guidance-ai/guidance)] [https://camo.githubusercontent.com/0d94055243dd66677c5befc036d70d9e2bee9362c1298e5cccf7f0c8110fe09a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f67756964616e63652d61692f67756964616e6365](https://camo.githubusercontent.com/0d94055243dd66677c5befc036d70d9e2bee9362c1298e5cccf7f0c8110fe09a/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f67756964616e63652d61692f67756964616e6365)
- 👩‍💻 *outlines ~* - a language for guided text generation. [[>code](https://github.com/outlines-dev/outlines)] [https://camo.githubusercontent.com/11b07ba01ac1c73c65afcff1e7a4aaf05a4815506575dd4a6fd8f45c5bf9c117/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6f75746c696e65732d6465762f6f75746c696e6573](https://camo.githubusercontent.com/11b07ba01ac1c73c65afcff1e7a4aaf05a4815506575dd4a6fd8f45c5bf9c117/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6f75746c696e65732d6465762f6f75746c696e6573)
- 👩‍💻 *DSPy* - a programmatic interface to LLMs. [[>code](https://github.com/stanfordnlp/dspy)] [https://camo.githubusercontent.com/06fc3769591867c19e8e8289b8c312f275eb3e7e996edaa4a9281a759eb6489d/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7374616e666f72646e6c702f64737079](https://camo.githubusercontent.com/06fc3769591867c19e8e8289b8c312f275eb3e7e996edaa4a9281a759eb6489d/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f7374616e666f72646e6c702f64737079)
- 👩‍💻 *llm-reasoners* – A library for advanced large language model reasoning. [[>code](https://github.com/Ber666/llm-reasoners)] [https://camo.githubusercontent.com/f221aef163420e9ec8abddf1dfde6ffc22a8d729a716700a069143dd546d0306/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f4265723636362f6c6c6d2d726561736f6e657273](https://camo.githubusercontent.com/f221aef163420e9ec8abddf1dfde6ffc22a8d729a716700a069143dd546d0306/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f4265723636362f6c6c6d2d726561736f6e657273)
- 👩‍💻 *ThinkGPT* - framework and building blocks for chain-of-thought workflows. [[>code](https://github.com/jina-ai/thinkgpt#readme)] [https://camo.githubusercontent.com/844c54f8dbb9772747fc39509c3620d5c4e4414f74b07a89b0e6342f5dae0b82/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6a696e612d61692f7468696e6b677074](https://camo.githubusercontent.com/844c54f8dbb9772747fc39509c3620d5c4e4414f74b07a89b0e6342f5dae0b82/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6a696e612d61692f7468696e6b677074)
- 👩‍💻 *LangChain* - a python library for building LLM chains and agents. [[>code](https://github.com/langchain-ai/langchain)] [https://camo.githubusercontent.com/4235f15d87de5243fb6e503c9a576919b119c35abfa5c72d986eee0e5e37858f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6c616e67636861696e2d61692f6c616e67636861696e](https://camo.githubusercontent.com/4235f15d87de5243fb6e503c9a576919b119c35abfa5c72d986eee0e5e37858f/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6c616e67636861696e2d61692f6c616e67636861696e)
- 👩‍💻 *PromptBench* -a unified library for evaluating LLMS, inter alia effectiveness of CoT prompts. [[>code](https://github.com/microsoft/promptbench)] [https://camo.githubusercontent.com/a131c33beabae433cc16cdc38b5863495ebd216e729f8cd1b6aa581ff8c7315c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6d6963726f736f66742f70726f6d707462656e6368](https://camo.githubusercontent.com/a131c33beabae433cc16cdc38b5863495ebd216e729f8cd1b6aa581ff8c7315c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f6d6963726f736f66742f70726f6d707462656e6368)
- 👩‍💻 *SymbolicAI* - a library for compositional differentiable programming with LLMs. [[>code](https://github.com/ExtensityAI/symbolicai)] [https://camo.githubusercontent.com/8feece801cc2a8a8c8c2762eb428d29f734d8ca01f6eb17bed220420b9ec088b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f457874656e7369747941492f73796d626f6c69636169](https://camo.githubusercontent.com/8feece801cc2a8a8c8c2762eb428d29f734d8ca01f6eb17bed220420b9ec088b/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f457874656e7369747941492f73796d626f6c69636169)

## Other Resources

[https://github.com/logikon-ai/awesome-deliberative-prompting#other-resources](https://github.com/logikon-ai/awesome-deliberative-prompting#other-resources)

*More awesome and useful material.*

- 📚 *Survey of Autonomous LLM Agents* (continuously updated). [[>site](https://github.com/Paitesanshi/LLM-Agent-Survey)]
- 👩‍💻 *LLM Dashboard* - explore task-specific reasoning performance of open LLMs [[>app](https://huggingface.co/spaces/CoreyMorris/MMLU-by-task-Leaderboard)]
- 📚 *Prompt Engineering Guide* set up by [DAIR](https://dair.ai). [[>site](https://www.promptingguide.ai/)]
- 📚 *ATLAS* - principles and benchmark for systematic prompting [[>code](https://github.com/VILA-Lab/ATLAS)]
- 📚 *Deliberative Prompting Guide* set up by [Logikon](https://logikon.ai). [[>site](https://logikon.ai/docs/delib_prompting)]
- 📚 *Arguing with Arguments* – recent and wonderful piece by H. Siegel discussing what it actually means to evaluate an argument. [[>paper](https://informallogic.ca/index.php/informal_logic/article/download/7667/5647)]

## About

         Awesome deliberative prompting: How to ask LLMs to produce reliable reasoning and make reason-responsive decisions.        

### Topics

[awesome](https://github.com/topics/awesome)[awesome-list](https://github.com/topics/awesome-list)[reasoning](https://github.com/topics/reasoning)[deliberation](https://github.com/topics/deliberation)[large-language-models](https://github.com/topics/large-language-models)[prompt-engineering](https://github.com/topics/prompt-engineering)[chain-of-thought](https://github.com/topics/chain-of-thought)[generative-ai](https://github.com/topics/generative-ai)

### Resources

[Readme](https://github.com/logikon-ai/awesome-deliberative-prompting#readme-ov-file)

### License
## gBrain Temporal Metadata

- content_timestamp: 2025-02-03
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: 2025-02
- timestamp_confidence: derived
- timestamp_source: extracted from markdown content/metadata

