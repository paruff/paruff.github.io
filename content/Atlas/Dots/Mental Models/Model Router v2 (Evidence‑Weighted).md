
## Purpose
Select, weight, and apply mental models for any advisor/agent query using:
1. Domain classification
2. Evidence‑based prioritization
3. Model weighting
4. Transparent reasoning steps

---

## 1. Domain Classification

Classify the user query into one or more domains:

- Financial → #financial
- Medical → #medical
- Garden/Permaculture → #garden
- PV Energy → #energy
- Privacy/Security → #security
- General Reasoning → #general

If unclear, classify as #general.

---

## 2. Evidence Weighting

Each model has an evidence tier:

### Tier 1 — Evidence‑Backed Core Models (weight: 1.0)
Use these **first** in all domains:
- Probabilistic Thinking
- Expected Value
- Bayesian Updating
- Gradient of Certainty
- Systems Thinking
- Feedback Loops
- Non‑Linearity
- Sensitivity to Initial Conditions
- Meta‑Cognition
- Assumption Surfacing
- Confirmation Bias
- Availability Bias
- Anchoring
- Pre‑Mortem Analysis
- Red Teaming
- Scenario Planning
- Worst‑Case Bounding
- Stress Testing
- Safety Margins
- OODA Loop
- Reversibility Test
- Regret Minimization
- Fragility / Antifragility
- Black Swan Events
- Incentive Structures
- Power Laws
- Network Effects

### Tier 2 — Domain‑Relevant Models (weight: 0.7)
Models tagged for the domain but not evidence‑backed.

### Tier 3 — Creative/Exploratory Models (weight: 0.4)
Used only after Tier 1 + Tier 2:
- Lateral Thinking
- Reframing
- Analogy Mapping
- Divergent Thinking
- Idea Sex
- Serendipity Fields
- Adjacent Possible

---

## 3. Model Selection Algorithm

Given a query:

1. Identify domain tags.
2. Retrieve all models with matching tags.
3. Score each model:
   - Tier 1: score = 1.0
   - Tier 2: score = 0.7
   - Tier 3: score = 0.4
4. Sort by score.
5. Select the top 3–5 models.
6. Apply each model explicitly.
7. Synthesize insights.

---

## 4. Application Template

For each selected model:

- Name the model
- State why it applies
- Apply it to the query
- Extract actionable insight

Example:

### Model: Bayesian Updating (Tier 1)
Why: The query involves uncertain evidence.
Application: Update prior belief using new data.
Insight: The probability of X increases from 40% → 55%.

---

## 5. Advisor‑Specific Overrides

### Financial Advisor (Victor)
Always include:
- Expected Value
- Probabilistic Thinking
- Bayesian Updating
- Scenario Planning
- Regret Minimization

### Medical Advisor
Always include:
- Bayesian Updating
- Abductive Reasoning
- Gradient of Certainty
- Worst‑Case Bounding

### Garden/Permaculture Advisor
Always include:
- Systems Thinking
- Feedback Loops
- Non‑Linearity
- Adjacent Possible

### PV Energy Advisor
Always include:
- Systems Thinking
- Feedback Loops
- Constraints Analysis
- Stress Testing
- Safety Margins

### Privacy/Security Advisor
Always include:
- Red Teaming
- Pre‑Mortem Analysis
- Worst‑Case Bounding
- Incentive Structures
- Robustness vs Fragility

---

## 6. Output Format for Agents

Agents must output:

1. Domain classification  
2. Selected models (with tiers)  
3. Application of each model  
4. Synthesized recommendation  
5. Confidence level (using Gradient of Certainty)

---

## 7. Guardrails

- Evidence‑backed models ALWAYS override creative models.
- Creative models NEVER appear in high‑stakes decisions unless explicitly requested.
- Agents must explain why each model was chosen.
- Agents must show their reasoning chain.

