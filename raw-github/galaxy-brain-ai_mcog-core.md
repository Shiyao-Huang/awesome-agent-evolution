---
repo: galaxy-brain-ai/mcog-core
url: https://github.com/galaxy-brain-ai/mcog-core
content_timestamp: unknown
time_slice: unknown
timestamp_source: unknown_not_present_in_raw_capture
collected_at: 2026-05-20T17:44:59Z
source: github
---

## GitHub - galaxy-brain-ai/mcog-core: Metacognitive Core Ontology (MCog Core): A domain-agnostic, foundational ontology for representing metacognitive constructs. Designed for AI systems, cognitive architectures, and applications requiring a metacognitive layer. · GitHub

**Source**: https://github.com/galaxy-brain-ai/mcog-core

---

[Skip to content](https://github.com/galaxy-brain-ai/mcog-core#start-of-content)

You signed in with another tab or window. Reload to refresh your session.

You signed out in another tab or window. Reload to refresh your session.

You switched accounts on another tab or window. Reload to refresh your session.
Dismiss alert

{{ message }}

[galaxy-brain-ai](https://github.com/galaxy-brain-ai)

/
**[mcog-core](https://github.com/galaxy-brain-ai/mcog-core)**

Public

- [Notifications](https://github.com/login?return_to=%2Fgalaxy-brain-ai%2Fmcog-core)You must be signed in to change notification settings
- [Fork
    3](https://github.com/login?return_to=%2Fgalaxy-brain-ai%2Fmcog-core)
- 
[Star
          19](https://github.com/login?return_to=%2Fgalaxy-brain-ai%2Fmcog-core)

[https://github.com/galaxy-brain-ai/mcog-core](https://github.com/galaxy-brain-ai/mcog-core)

[Branches](https://github.com/galaxy-brain-ai/mcog-core/branches)[Tags](https://github.com/galaxy-brain-ai/mcog-core/tags)

[https://github.com/galaxy-brain-ai/mcog-core/branches](https://github.com/galaxy-brain-ai/mcog-core/branches)[https://github.com/galaxy-brain-ai/mcog-core/tags](https://github.com/galaxy-brain-ai/mcog-core/tags)

Open more actions menu

## Folders and files

| Name | Name | Last commit message | Last commit date |
|---|---|---|---|
| Latest commit History6 Commits6 Commits |  |  |  |
| README.md | README.md |  |  |
| mcog-core.ttl | mcog-core.ttl |  |  |
| View all files |  |  |  |

## Repository files navigation

# MCog Core: A Metacognition Ontology

[https://github.com/galaxy-brain-ai/mcog-core#mcog-core-a-metacognition-ontology](https://github.com/galaxy-brain-ai/mcog-core#mcog-core-a-metacognition-ontology)

[https://creativecommons.org/licenses/by/4.0/](https://creativecommons.org/licenses/by/4.0/)

## Overview

[https://github.com/galaxy-brain-ai/mcog-core#overview](https://github.com/galaxy-brain-ai/mcog-core#overview)

MCog Core is a domain-agnostic ontology designed to represent fundamental metacognitive constructs. It provides a reusable and extensible framework for modeling reasoning, reflection, and learning processes. This ontology is particularly relevant for AI systems, cognitive architectures, decision support tools, and educational applications that require a metacognitive layer.

## Key Features

[https://github.com/galaxy-brain-ai/mcog-core#key-features](https://github.com/galaxy-brain-ai/mcog-core#key-features)

- **Domain Agnostic:**  MCog Core is intentionally designed to be independent of any specific domain.
- **Focus on Metacognition:** The ontology captures core metacognitive elements, including: 
  - `ReasoningProcess`: Different types of reasoning (currently represented at a high level).
  - `Heuristic`: Mental shortcuts or rules of thumb.
  - `Hypothesis`: Testable assumptions or propositions.
  - `Reflection`: Introspective analysis of reasoning processes.
  - `Bias`: Systematic errors in judgment.
  - `ConfidenceAssessment`: Evaluation of certainty.
  - `FeedbackLoop`: Mechanisms for refining reasoning.
  - `LearningProcess`: Processes for updating knowledge and strategies (with basic representation of double and triple-loop learning).

- **Modularity:** Designed to be imported and extended by other ontologies.
- **Extensibility:**  The ontology is designed to be extended with more specific metacognitive concepts as needed.
- **Open Source:** Released under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.

## Ontology File

[https://github.com/galaxy-brain-ai/mcog-core#ontology-file](https://github.com/galaxy-brain-ai/mcog-core#ontology-file)

The MCog Core ontology is available in Turtle (.ttl) format: [mcog-core.ttl](https://github.com/galaxy-brain-ai/mcog-core/blob/main/mcog-core.ttl)

## Design Principles

[https://github.com/galaxy-brain-ai/mcog-core#design-principles](https://github.com/galaxy-brain-ai/mcog-core#design-principles)

- **Clarity:** Terms are defined clearly and concisely using `dct:description` annotations.
- **Flexibility:** The ontology avoids overly restrictive constraints to allow for flexibility in real-world applications.
- **Reusability:** The domain-agnostic nature of MCog Core makes it suitable for reuse in a variety of applications.
- **Iterative Development:** MCog Core is intended to be refined and expanded iteratively based on feedback and practical use.

## Example Usage

[https://github.com/galaxy-brain-ai/mcog-core#example-usage](https://github.com/galaxy-brain-ai/mcog-core#example-usage)

```
# Example instance of a Hypothesis with a ConfidenceAssessment

@prefix mcog-core: <https://github.com/galaxy-brain-ai/mcog-core#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<MyHypothesis> a mcog-core:Hypothesis ;
  mcog-core:hypothesisContent "This is an example hypothesis."@en ;
  mcog-core:hasConfidenceAssessment [
    a mcog-core:ConfidenceAssessment ;
    mcog-core:confidenceValue "0.8"^^xsd:float ;
    mcog-core:confidenceRationale "Based on initial evidence."@en
  ] .
```

## Future Directions

[https://github.com/galaxy-brain-ai/mcog-core#future-directions](https://github.com/galaxy-brain-ai/mcog-core#future-directions)

Future development of MCog Core may involve:

- **Bias Taxonomy:**  Expanding the `Bias` class to include a hierarchy of specific types of biases.
- **Heuristic Modeling:**  Developing a more detailed representation of heuristics.
- **Formalization of Uncertainty:**  Adding more nuanced representations of uncertainty and confidence.
- **Integration with Cognitive Architectures:** Exploring integration with existing cognitive architectures.

## Contributing

[https://github.com/galaxy-brain-ai/mcog-core#contributing](https://github.com/galaxy-brain-ai/mcog-core#contributing)

We welcome contributions to MCog Core! If you have suggestions for improvements or extensions, please open an issue or submit a pull request on this repository.

## License

[https://github.com/galaxy-brain-ai/mcog-core#license](https://github.com/galaxy-brain-ai/mcog-core#license)

MCog Core is released under the [Creative Commons Attribution 4.0 International (CC BY 4.0) license](https://creativecommons.org/licenses/by/4.0/).

## Citation

[https://github.com/galaxy-brain-ai/mcog-core#citation](https://github.com/galaxy-brain-ai/mcog-core#citation)

If you use MCog Core in your research or applications, please cite it as follows:

Shep Bryan, Galaxy Brain AI. (2025). MCog Core: A Metacognition Ontology (Version 1.0) [Ontology Resource]. Retrieved from ([https://github.com/galaxy-brain-ai/mcog-core](https://github.com/galaxy-brain-ai/mcog-core)).

## Contact

[https://github.com/galaxy-brain-ai/mcog-core#contact](https://github.com/galaxy-brain-ai/mcog-core#contact)

Shep Bryan, Galaxy Brain

[shep@galaxy-brain.ai](mailto:shep@galaxy-brain.ai)

galaxy-brain.ai

## About

         Metacognitive Core Ontology (MCog Core): A domain-agnostic, foundational ontology for representing metacognitive constructs. Designed for AI systems, cognitive architectures, and applications requiring a metacognitive layer.       

[galaxy-brain.ai](https://galaxy-brain.ai)

### Resources

[Readme](https://github.com/galaxy-brain-ai/mcog-core#readme-ov-file)

###         Uh oh! 

There was an error while loading. Please reload this page.

[Activity](https://github.com/galaxy-brain-ai/mcog-core/activity)

### Stars

[19
        stars](https://github.com/galaxy-brain-ai/mcog-core/stargazers)

### Watchers

[1
        watching](https://github.com/galaxy-brain-ai/mcog-core/watchers)

### Forks

[3
        forks](https://github.com/galaxy-brain-ai/mcog-core/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fgalaxy-brain-ai%2Fmcog-core&report=galaxy-brain-ai+%28user%29)

## [Releases](https://github.com/galaxy-brain-ai/mcog-core/releases)

No releases published

## [Packages
      0](https://github.com/users/galaxy-brain-ai/packages?repo_name=mcog-core)

###         Uh oh! 

There was an error while loading. Please reload this page.

## [Contributors](https://github.com/galaxy-brain-ai/mcog-core/graphs/contributors)

- 

- 

- 

###         Uh oh! 

There was an error while loading. Please reload this page.

     You can’t perform that action at this time.
