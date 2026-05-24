# HyperAgents | Research - AI at Meta

- URL: https://ai.meta.com/research/publications/hyperagents
- Platform: ai.meta.com
- Extraction status: ok
- content_timestamp: unknown
- collected_at: 2026-05-21T00:00:00+08:00
- time_slice: unknown

## Raw Content

## HyperAgents | Research - AI at Meta

**Source**: https://ai.meta.com/research/publications/hyperagents

---

ProductsAI ResearchResourcesAbout[Get Llama](https://www.llama.com/?utm_source=ai_meta_site&utm_medium=web&utm_content=AI_nav&utm_campaign=09252025_moment)[Try Meta AI](https://applink.meta.ai/?utm_source=ai_meta_site&utm_medium=web&utm_content=AI_nav&utm_campaign=04082026_moment)[https://ai.meta.com/](https://ai.meta.com/)

#### NLP

#### OPEN SOURCE

# HyperAgents

March 24, 2026

## Abstract

Self-improving AI systems aim to reduce reliance on human engineering by learning to improve their own learning and problem-solving processes. Existing approaches to recursive self-improvement typically rely on fixed, handcrafted meta-level mechanisms, which fundamentally limit how fast such systems can improve. The Darwin Gödel Machine (DGM)(Zhang et al., 2025b) demonstrates that open-ended self-improvement is achievable in coding. Starting from a single coding agent, the DGM repeatedly generates and evaluates self-modified variants, forming a growing archive of stepping stones for future improvement. Because both evaluation and self-modification are coding tasks, gains in coding ability can translate into gains in self-improvement ability. However, this alignment does not generally hold beyond coding domains. We introduce hyperagents, self-referential agents that integrate a task agent (which solves the target task) and a meta agent (which modifies itself and the task agent) into a single editable program. Crucially, the meta-level modification procedure is itself editable, enabling metacognitive self-modification, improving not only task-solving behavior, but also the mechanism that generates future improvements. We instantiate this framework by extending DGM to create DGM-Hyperagents (DGM-H). By allowing the improvement procedure to evolve, the DGM-H eliminates the assumption of domain-specific alignment between task performance and self-modification skill, and can potentially support self-accelerating progress on any computable task. Across diverse domains (coding, paper review, robotics reward design, and Olympiad-level math-solution grading), the DGM-H improves performance over time and outperforms baselines without self-improvement or open-ended exploration, as well as prior self-improving systems like DGM. We further show that the DGM-H improves the process by which it generates new agents (e.g., persistent memory, performance tracking), and that these meta-level improvements transfer across domains and accumulate across runs. All experiments were conducted with safety precautions (e.g., sandboxing, human oversight). We discuss what safety entails in this setting and the broader implications of self-improving systems. DGM-Hyperagents offer a glimpse of open-ended AI systems that do not merely search for better solutions, but continually improve their search for how to improve.

[Download the Paper](https://scontent-sea1-1.xx.fbcdn.net/v/t39.2365-6/651318792_1484042123139269_5924122875180468134_n.pdf?_nc_cat=104&ccb=1-7&_nc_sid=3c67a6&_nc_ohc=lL6dVoy2v2wQ7kNvwFPgyqk&_nc_oc=Adq4CZIklr8br5WSOQAl2jriz0S-PyaVjNIKyZfgwYeXPs9SQUZ58SIRoGlbT46PCiY&_nc_zt=14&_nc_ht=scontent-sea1-1.xx&_nc_gid=V6xbg2BvAEvNuJCm3AbVNw&_nc_ss=7b20f&oh=00_Af76qhSTp7d0lS9uWrB4vRejK1JvfTAqC5BR5gB40aBesQ&oe=6A145E5A)

#### 作者

Written by

Jenny Zhang

Bingchen Zhao

Jakob Foerster

Sam Devlin

Tatiana Shavrina

Winnie Yang

Publisher

arXiv

Research Topics

[Conversational AI](https://ai.meta.com/research/conversational-ai/)

[Systems Research](https://ai.meta.com/research/systems-research/)

[Human & Machine Intelligence](https://ai.meta.com/research/human-and-machine-intelligence/)

[Natural Language Processing (NLP)](https://ai.meta.com/research/nlp/)

### Related Publications

May 12, 2026

#### HUMAN & MACHINE INTELLIGENCE

#### RESEARCH

#### NeuralSet: A High-Performing Python Package for Neuro-AI

Corentin Bel

, 

Linnea Evanson

, 

Julien Gadonneix

, 

Andrea Santos Revilla

, 

Mingfang (Lucy) Zhang

, 

Julie Bonnaire

, 

Charlotte Caucheteux

, 

Alexandre Défossez

, 

Théo Desbordes

, 

Pablo Diego-Simón

, 

Shubh Khanna

, 

Juliette Millet

, 

Pierre Orhan

, 

Saarang Panchavati

, 

Antoine Ratouchniak

, 

Alexis Thual

, 

Hubert Jacob Banville

, 

Jarod Levy

, 

Jean Remi King

, 

Josephine Raugel

, 

Jérémy Rapin

, 

Katelyn Begany

, 

Marlene Careil

, 

Simon Dahan

, 

Sophia Houhamdi

, 
[Stéphane d'Ascoli](https://ai.meta.com/people/7732427943457653/stephane-d-ascoli/)
, 

Teon Brooks

, 

Yohann Benchetrit

May 12, 2026

[Read the Paper](https://ai.meta.com/research/publications/neuralset-a-high-performing-python-package-for-neuro-ai/)

May 06, 2026

#### HUMAN & MACHINE INTELLIGENCE

#### RESEARCH

#### NeuralBench: A Unifying Framework to Benchmark NeuroAI Models

Saarang Panchavati

, 

Antoine Ratouchniak

, 

Mingfang (Lucy) Zhang

, 

Elisa Cascardi

, 

Hubert Banville

, 

Jarod Levy

, 

Jean-Rémi King

, 

Jérémy Rapin

, 

Katelyn Begany

, 

Marlene Careil

, 

Simon Dahan

, 
[Stéphane d'Ascoli](https://ai.meta.com/people/7732427943457653/stephane-d-ascoli/)
, 

Teon Brooks

, 

Yohann Benchetrit

May 06, 2026

[Read the Paper](https://ai.meta.com/research/publications/neuralbench-a-unifying-framework-to-benchmark-neuroai-models/)

May 04, 2026

#### NLP

#### Compute Optimal Tokenization

Sachin Mehta

, 

Alisa Liu

, 

Margaret Li

, 

Artidoro Pagnoni

, 

Gargi Ghosh

, 
[Luke Zettlemoyer](https://ai.meta.com/people/1450721039196474/luke-zettlemoyer/)
, 

Mike Lewis

, 

Srini Iyer

, 

Tomasz Limisiewicz

May 04, 2026

[Read the Paper](https://ai.meta.com/research/publications/compute-optimal-tokenization/)

March 17, 2026

#### RESEARCH

#### NLP

#### Omnilingual MT: Machine Translation for 1,600 Languages

Omnilingual MT Team

, 

Niyati Bafna

, 

Ioannis Tsiamas

, 

Mark Duppenthaler

, 

Albert Ventayol-Boada

, 

Alexandre Mourachko

, 

Andrea Caciolai

, 

Arina Turkatenko

, 

Artyom Kozhevnikov

, 

Belen Alastruey

, 

Charles-Eric Saint-James

, 

Chierh CHENG

, 

Christophe Ropers

, 

Cynthia Gao

, 

David Dale

, 

Edan Toledo

, 

Eduardo Sánchez

, 

Gabriel Mejia Gonzalez

, 
[Holger Schwenk](https://ai.meta.com/people/271799079300984/holger-schwenk/)
, 

Jean Maillard

, 

Joe Chuang

, 

João Maria Janeiro

, 

Kevin Heffernan

, 

Marta R. Costa-jussa

, 

Mary Williamson

, 

Nate Ekberg

, 

Paul-Ambroise Duquenne

, 

Pere Lluís Huguet Cabot

, 

Rashel Moritz

, 

Shireen Yates

, 

Surya Parimi

March 17, 2026

[Read the Paper](https://ai.meta.com/research/publications/omnilingual-mt-machine-translation-for-1600-languages/)

[See All Papers](https://ai.meta.com/global_search/?content_types%5B0%5D=publication&page=1)

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.2365-6/91935997_2545519405719235_7197863690534649856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=KvcTFkMedfQQ7kNvwGRGUs7&_nc_oc=Adqb4EBIQ0yMDvatz3vrD5mB5ofI9-FTKsP0sARFrylqd9XO2vKsbn0BA8NvA-aanmQ&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=V6xbg2BvAEvNuJCm3AbVNw&_nc_ss=7b20f&oh=00_Af6iBq4yixPp69sosfLcqzzBVsk2bnEaErjnpjX0c8D-QQ&oe=6A28EB81)

## Help Us Pioneer The Future of AI

##### We share our open source frameworks, tools, libraries, and models for everything from research exploration to large-scale production deployment.

[Join our Team](https://ai.meta.com/join-us/)

[Our approach](https://ai.meta.com/about)****

[About AI at Meta](https://ai.meta.com/about)

[People](https://ai.meta.com/results/?content_types%5B0%5D=person&sort_by=random)

[Careers](https://www.metacareers.com/jobs/?is_leadership=0&sub_teams[0]=Artificial%20Intelligence&is_in_page=0)

[Research](https://ai.meta.com/research)****

[Infrastructure](https://ai.meta.com/infrastructure)

[Resources](https://ai.meta.com/resources)

[Demos](https://aidemos.meta.com/)

[Meta AI](https://ai.meta.com/meta-ai/)****

[Explore Meta AI](https://ai.meta.com/meta-ai/)

[Get Meta AI](https://ai.meta.com/get-meta-ai/)

[AI Studio](https://ai.meta.com/ai-studio/)

[Latest news](https://ai.meta.com/blog)****

[Blog](https://ai.meta.com/blog)

[Newsletter](https://ai.meta.com/subscribe)

Foundational models

****

[Llama](https://www.llama.com/)

![](https://scontent-sea5-1.xx.fbcdn.net/v/t39.2365-6/87524316_2677189655726266_6338721200264445952_n.svg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z8DNIEuKF1YQ7kNvwHqZNBH&_nc_oc=AdoCohZe8h9wgR_LiX7FYbgE8zP8iXvIdSM0h56i7i9DrAAyCQ9SRd4jw8SMuNc6Q60&_nc_zt=14&_nc_ht=scontent-sea5-1.xx&_nc_gid=V6xbg2BvAEvNuJCm3AbVNw&_nc_ss=7b20f&oh=00_Af72zI3E1BbxFC0Ikdf1P2NpBW9LutuegB_E75bjUZ4YPA&oe=6A28E738)

[https://www.facebook.com/aiatmeta/](https://www.facebook.com/aiatmeta/)

[https://twitter.com/aiatmeta/](https://twitter.com/aiatmeta/)

[https://www.linkedin.com/showcase/aiatmeta](https://www.linkedin.com/showcase/aiatmeta)

[https://www.youtube.com/@aiatmeta](https://www.youtube.com/@aiatmeta)

Our approach

****

[Our approach](https://ai.meta.com/about)[About AI at Meta](https://ai.meta.com/about)[People](https://ai.meta.com/results/?content_types%5B0%5D=person&sort_by=random)[Careers](https://www.metacareers.com/jobs/?is_leadership=0&sub_teams[0]=Artificial%20Intelligence&is_in_page=0)

Research

****

[Research](https://ai.meta.com/research)[Infrastructure](https://ai.meta.com/infrastructure)[Resources](https://ai.meta.com/resources)[Demos](https://aidemos.meta.com/)

Meta AI

****

[Meta AI](https://ai.meta.com/meta-ai/)[Explore Meta AI](https://ai.meta.com/meta-ai/)[Get Meta AI](https://ai.meta.com/get-meta-ai/)[AI Studio](https://ai.meta.com/ai-studio/)

Latest news

****

[Latest news](https://ai.meta.com/blog)[Blog](https://ai.meta.com/blog)[Newsletter](https://ai.meta.com/subscribe)

Foundational models

****

[Llama](https://www.llama.com/)

[https://www.facebook.com/aiatmeta/](https://www.facebook.com/aiatmeta/)

[https://twitter.com/aiatmeta/](https://twitter.com/aiatmeta/)

[https://www.linkedin.com/showcase/aiatmeta](https://www.linkedin.com/showcase/aiatmeta)

[https://www.youtube.com/@aiatmeta](https://www.youtube.com/@aiatmeta)

[Privacy Policy](https://www.facebook.com/about/privacy/)

[Terms](https://www.facebook.com/policies/)

[Cookies](https://www.facebook.com/policies/cookies/)

 Meta © 2026

[https://www.facebook.com/aiatmeta/](https://www.facebook.com/aiatmeta/)

[https://twitter.com/aiatmeta/](https://twitter.com/aiatmeta/)

[https://www.linkedin.com/showcase/aiatmeta](https://www.linkedin.com/showcase/aiatmeta)

[https://www.youtube.com/@aiatmeta](https://www.youtube.com/@aiatmeta)
