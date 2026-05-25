# Common Pattern Taxonomy for Self-Evolving Systems

> Generated: 2026-05-25 | Source: Cross-system analysis of 13 papers + ch3/ch4 formalizations
> Status: [VERIFIED] patterns extracted from published systems; category assignments are [INFERENCE]

---

## 1. Feedback Loop Pattern Taxonomy

### 1.1 The Four Fundamental Loop Types

Every self-evolution system implements one of four loop architectures:

#### Pattern FL-1: Single-Pass Refinement (Generator → Critic → Revisor)

```
Generate(y₀) → Critique(y₀) → Refine(y₀, c₀) → ... → y_final
```

**Characteristic**: Fixed model, variable output. Loop terminates when critic reports no issues or budget exhausted.

**Systems**: Self-Refine, Self-Debug

**Formal signature**:
$$y_{t+1} = R_\theta(x, y_t, C_\theta(x, y_t)),\quad \text{stop when } C_\theta(x, y_t) \in \mathcal{F}_{\text{no-change}}$$

**When it works**: Task has known rubric, correct answer is reachable from current knowledge, constraint violations are local.

**When it fails**: Critic has no new information beyond generator, cosmetic convergence, instruction drift.

---

#### Pattern FL-2: Episodic Memory Accumulation (Act → Evaluate → Reflect → Store)

```
Act(aₑ) → Evaluate(rₑ) → Reflect(fₑ) → Memory(Mₑ₊₁) → Act(aₑ₊₁)
```

**Characteristic**: Fixed model, growing context. Each episode adds linguistic experience.

**Systems**: Reflexion, Voyager (skill library)

**Formal signature**:
$$\mathcal{M}_{e+1} = \mathcal{M}_e \cup \{M_r(x, a_e, \tau_e, r_e)\},\quad a_{e+1} \sim M_a(\cdot|x, \mathcal{M}_e)$$

**When it works**: Failure modes are learnable from verbal description, similar tasks recur, memory stays relevant.

**When it fails**: Overgeneralization from single episode, stale memory, context overflow, reflection hallucination.

---

#### Pattern FL-3: Archive-Based Evolution (Propose → Evaluate → Select → Archive)

```
Sample(parent) → Propose(child) → Evaluate(child) → Select → Archive(Aₜ₊₁)
```

**Characteristic**: Population of artifacts, not single trajectory. Diversity is first-class.

**Systems**: FunSearch, AlphaEvolve, DGM, ADAS

**Formal signature**:
$$a_{child} = \text{LLM}(a_{parent}, \text{edit}),\quad \text{keep if } \Phi(a_{child}) > \Phi(a_{parent}),\quad A_{t+1} = A_t \cup \{a_{child}\}$$

**When it works**: Large search space, many local optima, evaluators are reliable, diversity matters.

**When it fails**: Archive bloat, evaluation cost, false improvements (evaluator hacking), credit assignment across edits.

---

#### Pattern FL-4: Self-Play Training (Propose Task → Solve → Verify → Train)

```
Propose(task) → Solve(task) → Verify(solution) → Reward → Update(weights)
```

**Characteristic**: Model generates its own training signal. No external data required.

**Systems**: Absolute Zero, SPIN, STaR

**Formal signature**:
$$t \sim \pi_{\text{propose}},\ s \sim \pi_{\text{solve}}(t),\ r = V(t, s),\ \theta_{t+1} = \text{RL-update}(\theta_t, r)$$

**When it works**: Verifiable tasks exist (code, math), model is strong enough for bootstrapping, curriculum control works.

**When it fails**: Mode collapse (proposer-solver trivial agreement), task distribution narrowing, reward hacking.

---

### 1.2 Loop Type Decision Matrix

| Condition | FL-1 | FL-2 | FL-3 | FL-4 |
|-----------|------|------|------|------|
| No weight access | ✅ | ✅ | ✅ | ❌ |
| Single task | ✅ | ⚠️ | ❌ | ❌ |
| Recurring tasks | ⚠️ | ✅ | ⚠️ | ✅ |
| Novel architecture search | ❌ | ❌ | ✅ | ❌ |
| Zero external data | ✅ | ✅ | ⚠️ | ✅ |
| Need durable improvement | ❌ | ⚠️ | ✅ | ✅ |
| Low compute budget | ✅ | ⚠️ | ❌ | ❌ |

---

## 2. Memory Pattern Taxonomy

### 2.1 The Memory Spectrum

```
M0: Stateless ←——→ M1: Episodic ←——→ M2: Skill ←——→ M3: Archive ←——→ M4: Dataset ←——→ M5: Weights ←——→ M6: Population
```

### 2.2 Common Memory Patterns

#### Pattern MM-1: FIFO Reflection Buffer (Reflexion-style)

```python
memory = []
for episode in episodes:
    reflection = reflect(episode)
    memory.append(reflection)
    if len(memory) > BUDGET:
        memory.pop(0)  # oldest removed
```

**Properties**: O(1) update, O(n) retrieval, no compression, no indexing.

**Failure**: Stale entries, no priority, no cross-referencing.

---

#### Pattern MM-2: Named Skill Library (Voyager-style)

```python
skills = {}
for episode in episodes:
    skill = extract_skill(episode)
    skills[skill.name] = skill  # overwrite by name
# retrieval by semantic similarity
skill = max(skills.values(), key=lambda s: similarity(task, s.description))
```

**Properties**: O(1) update by name, O(n) retrieval by similarity, auto-deduplication.

**Failure**: Skill descriptions may not match task needs, no versioning.

---

#### Pattern MM-3: Quality-Diversity Archive (MAP-Elites / AlphaEvolve)

```python
archive = {}  # grid cells by behavior descriptors
for candidate in candidates:
    cell = behavior_descriptor(candidate)
    if cell not in archive or fitness(candidate) > fitness(archive[cell]):
        archive[cell] = candidate
```

**Properties**: Guarantees coverage, bounded by grid size, preserves stepping stones.

**Failure**: Grid resolution vs coverage tradeoff, descriptor design is critical.

---

#### Pattern MM-4: Growing Training Dataset (STaR / ReST-EM)

```python
dataset = initial_data
for round in rounds:
    candidates = generate(model, dataset)
    filtered = select(candidates, reward_threshold)
    dataset = dataset ∪ filtered
    model = train(model, dataset)
```

**Properties**: Amortizes improvement into weights, unbounded growth (needs pruning).

**Failure**: Distribution shift, catastrophic forgetting, reward hacking.

---

#### Pattern MM-5: Population Pool (Evolutionary)

```python
population = [random_agent() for _ in range(N)]
for generation in generations:
    parents = select(population, fitness)
    children = crossover + mutate(parents)
    population = select_survivors(population ∪ children)
```

**Properties**: Parallel exploration, implicit diversity maintenance.

**Failure**: Premature convergence, diversity loss, evaluation cost × population size.

---

## 3. Search Strategy Taxonomy

### 3.1 Strategy Types

| Strategy | Description | Exploration | Exploitation | Systems |
|----------|------------|-------------|--------------|---------|
| **SS-1: Best-first refinement** | Improve single best candidate | Low | High | Self-Refine, Self-Debug |
| **SS-2: Beam search** | Maintain top-K candidates | Medium | High | OPRO |
| **SS-3: Hill climbing** | Accept if better, local neighborhood | Low | High | DGM (per-branch) |
| **SS-4: MAP-Elites** | Quality-diversity grid | High | Medium | AlphaEvolve, FunSearch |
| **SS-5: Island model** | Parallel populations with migration | Very High | Low | FunSearch (islands) |
| **SS-6: Tournament selection** | Compete candidates pairwise | Medium | Medium | Evolutionary strategies |
| **SS-7: Policy gradient** | Gradient through reward signal | Continuous | Continuous | RISE, RAGEN |
| **SS-8: Self-play curriculum** | Generate own training tasks | Very High | Variable | Absolute Zero |

### 3.2 Exploration-Exploitation Tradeoff Formalization

$$\text{EffectiveSearch} = \alpha \cdot \text{Exploration} + (1-\alpha) \cdot \text{Exploitation}$$

Where α depends on:
- **Budget remaining**: α decreases as budget depletes (exploit more)
- **Improvement rate**: α increases when improvement stalls (explore more)
- **Archive diversity**: α decreases when diversity is sufficient (exploit)

$$\alpha_t = f\left(\frac{B_{\text{remaining}}}{B_{\text{total}}},\ \frac{d(\Phi_t - \Phi_{t-k})}{k},\ \text{diversity}(A_t)\right)$$

---

## 4. Cross-Cutting Patterns: Composable Design Elements

These patterns can be combined. A well-designed self-evolution system often combines multiple:

### 4.1 Asymmetric Evaluation Pattern

**Principle**: Generator and evaluator should see different information.

**Instances**:
- Self-Refine: Same model but different prompts (gen/crit/rev)
- Self-Debug: Generator writes code; evaluator runs it (execution asymmetry)
- DGM: LLM proposes code changes; benchmark evaluates (agent-environment asymmetry)
- Absolute Zero: Proposer creates tasks; solver solves them (role asymmetry)

**Formal condition**: System has asymmetry if ∃ information I such that evaluator sees I but generator does not.

---

### 4.2 Progressive Difficulty Pattern

**Principle**: Start easy, increase difficulty as the system improves.

**Instances**:
- STaR: Rationale bootstrapping from easy to hard examples
- Absolute Zero: Curriculum reward favors solvable but challenging tasks
- ReST-EM: Threshold schedule increases over rounds

**Formal condition**: System is progressive if $\Phi_{\text{threshold}}(t)$ is non-decreasing in t.

---

### 4.3 Diversity Preservation Pattern

**Principle**: Maintain multiple distinct solutions, not just the best.

**Instances**:
- MAP-Elites: Grid cells preserve qualitatively different solutions
- DGM: Archive with diversity-weighted sampling
- Island models: Parallel evolution with occasional migration

**Formal condition**: System preserves diversity if $\text{diversity}(A_{t+1}) \geq \delta \cdot \text{diversity}(A_t)$ for some δ > 0.

---

### 4.4 Rollback Safety Pattern

**Principle**: Never accept a change without a way to undo it.

**Instances**:
- DGM: Keep parent in archive alongside child
- AlphaEvolve: Version control on evolved programs
- Training: Checkpoint model weights periodically

**Formal condition**: System has rollback if ∀ t, ∃ k > 0 such that restore(Θ_{t-k}) is available and valid.

---

### 4.5 Credit Assignment Pattern

**Principle**: Determine which part of the change caused the improvement.

**Instances**:
- Agent Symbolic Learning: Layer-by-layer language gradient backpropagation
- AlphaEvolve: Diff-level tracking of which edits improved which metrics
- RISE: Multi-turn trajectory credit assignment via RL

**Formal condition**: System has credit assignment if it can decompose $\Phi(\Theta_{t+1}) - \Phi(\Theta_t)$ into per-component contributions.

---

## 5. Anti-Patterns (Common Failure Patterns)

### 5.1 Evaluator Gaming

**Pattern**: The system optimizes for the evaluator metric without genuinely improving.

**Detection**: High benchmark scores but poor performance on held-out or real-world tasks.

**Mitigation**: Frozen evaluators, adversarial test generation, human spot-checks.

### 5.2 Distribution Collapse

**Pattern**: The proposal distribution narrows to a small region.

**Detection**: Decreasing archive diversity, repeated similar proposals.

**Mitigation**: Diversity constraints (MAP-Elites), injection of random perturbations, archive reset.

### 5.3 Feedback Loop Degeneracy

**Pattern**: The system's self-evaluation becomes circular (A says B is good, B says A is good).

**Detection**: Improvement claims not reproducible on fresh instances.

**Mitigation**: External evaluators, held-out test sets, human audits.

### 5.4 Memory Poisoning

**Pattern**: Incorrect reflections or skills corrupt future behavior.

**Detection**: Performance degradation after adding new memory entries.

**Mitigation**: Validation before memory insertion, memory decay, contradiction detection.

### 5.5 Premature Convergence

**Pattern**: System converges to local optimum early and stops improving.

**Detection**: Flat improvement curve before budget exhaustion.

**Mitigation**: Island models, restart strategies, adaptive exploration rates.

---

## 6. Known, Inferred, Unverified

### Known
- FL-1 through FL-4 cover all surveyed systems without exception
- Memory types M0-M6 form a strict hierarchy of persistence and capability
- Asymmetric evaluation is present in all systems that report reliable improvement
- Diversity preservation (MAP-Elites, archives) correlates with sustained improvement in evolutionary systems

### Inferred
- Progressive difficulty likely accelerates convergence across all loop types
- Credit assignment quality determines ceiling for complex substrates (L3-L5)
- Anti-patterns (evaluator gaming, distribution collapse) account for the majority of reported failure modes
- The exploration-exploitation tradeoff is the primary axis for search strategy selection

### Unverified
- Whether FL-4 (self-play) can work without execution-grounded verification (currently requires code executor)
- Optimal diversity threshold δ for the diversity preservation pattern
- Whether anti-pattern detection can be automated or requires human judgment
- The relationship between memory type and transfer learning capability across domains
