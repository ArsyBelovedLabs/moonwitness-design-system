---
name: moonwitness-openpencil
description: Use OpenPencil as the MoonWitness design-execution and visual-verification surface for .fig/.pen files and the running editor. Use for MoonWitness UI design, component/page composition, responsive states, design audits, visual QA, token inspection, and Figma-alternative workflows. Always obey the MoonWitness Blueprint, component-first gate, UX-flow gate, and canonical frontend ownership.
---

# MoonWitness OpenPencil

OpenPencil is a **design execution tool**, not a product-scope authority.

For MoonWitness work, use it to inspect, compose, modify, render, export, and visually verify design documents while preserving the canonical architecture and UX contracts.

Preferred MoonWitness web editor instance:

- `https://pencil.moonwitness.biz.id/`

Upstream OpenPencil project:

- `open-pencil/open-pencil`
- official agent skill: `open-pencil/skills@open-pencil`

This skill adapts the upstream OpenPencil CLI/MCP workflow to MoonWitness governance.

## Non-negotiable authority order

Before touching a canvas, treat these as higher authority than the design file:

1. MoonWitness Blueprint design freeze and architecture truth.
2. Canonical UI/platform contracts.
3. Application Information Architecture.
4. Component-first workflow.
5. User Flow and Interaction Model.
6. Figma/Showcase Screen Matrix.
7. Canonical production implementation in `moonwitness-frontend-platform`.
8. Application implementation and data contracts.
9. Storybook/OpenPencil/Figma/generated images as downstream design evidence.

A canvas must never invent a route, capability, metric, state, API, repository boundary, auth model, or application surface.

## Core MoonWitness rule

> **Capabilities power screens. Applications own navigation. Objects own drill-down. Evidence owns trust.**

Design execution is:

```text
CONSTITUTION
  ↓
TOKENS / VARIABLES
  ↓
RAW PRIMITIVES
  ↓
COMPONENTS + VARIANTS
  ↓
DOMAIN INSTRUMENTS
  ↓
PAGE TEMPLATES
  ↓
UX FLOW / INTERACTION MODEL
  ↓
APPLICATION PAGE
  ↓
RESPONSIVE STATES
  ↓
VISUAL VERIFICATION
  ↓
SHOWCASE / HANDOFF
```

Do not jump directly from prompt → complete page.

## Required gates

A page may be composed only when both gates pass:

```text
COMPONENT READINESS
      ↓
UX FLOW READINESS
      ↓
PAGE COMPOSITION
```

If reusable masters are incomplete, mark:

`BLOCKED_BY_COMPONENT_SYSTEM`

If task, entry, selection, inspector, back path, state behavior, evidence path, responsive behavior, or keyboard/focus behavior is unclear, mark:

`BLOCKED_BY_UX_FLOW`

Do not use OpenPencil to visually hide or bypass either gate.

## Modes

### 1. Web editor mode

Use `https://pencil.moonwitness.biz.id/` for human visual review and interactive editing when available.

Treat the web canvas as a review/execution surface only. The design still has to trace back to canonical Blueprint + Storybook/component contracts.

### 2. Running-editor MCP mode

Use the OpenPencil MCP server when an agent can connect to the running editor.

Typical local endpoint from current upstream OpenPencil releases:

- MCP Streamable HTTP: `http://127.0.0.1:7600/mcp`

When supported, keep the editor focused on edited content by selecting edited nodes and zooming to fit.

### 3. Headless document mode

Use OpenPencil CLI/MCP against `.fig` or `.pen` files for inspection, token analysis, linting, transformation, export, and CI-style visual verification.

## Tooling prerequisites

Upstream OpenPencil provides:

```bash
bun add -g @open-pencil/cli
bun add -g @open-pencil/mcp
```

Equivalent npm installation may be used where Bun is not the project-standard runtime for the local agent environment.

For an agent that supports installable skills, the upstream general-purpose skill can also be installed:

```bash
npx skills add open-pencil/skills@open-pencil
```

This MoonWitness skill remains the higher-level workflow adapter for MoonWitness-specific work.

## Preflight — mandatory

Before any mutation:

1. Identify the application and target screen/component.
2. Read the applicable Blueprint UI/UX contracts.
3. Read the current design constitution and component inventory.
4. Identify product maturity: `EXISTING`, `ALIGNED TARGET`, `GATED FUTURE`, or `COMPONENT ONLY`.
5. Identify data state: e.g. `FROZEN BASELINE`, `LIVE`, `CANDIDATE`, `VERIFIED`, `PARTIAL`, `OFFLINE`, `ERROR`.
6. Confirm component readiness.
7. Confirm UX-flow readiness.
8. Inspect the current OpenPencil/Figma document before editing.
9. Determine the smallest safe edit scope.
10. Preserve a reversible handoff path.

Never start with destructive whole-document replacement when a bounded component/page edit is sufficient.

## Inspect first

Prefer narrow queries over dumping a full large tree.

Useful CLI examples:

```bash
openpencil info design.fig
openpencil tree design.fig --depth 2
openpencil pages design.fig
openpencil find design.fig --name "Evidence"
openpencil find design.fig --type COMPONENT
openpencil query design.fig "//COMPONENT"
openpencil variables design.fig
openpencil lint design.fig --json
```

Useful MCP read operations include:

- `get_page_tree`
- `get_node`
- `find_nodes`
- `query_nodes`
- `get_components`
- `get_jsx`
- `describe`
- `list_variables`
- `analyze_colors`
- `analyze_typography`
- `analyze_spacing`
- `analyze_clusters`
- `design_to_tokens`
- `design_to_component_map`

## MoonWitness component-first procedure

### Phase A — Variables and tokens

Map the canonical semantic token system before page geometry.

Expected visual direction:

- deep obsidian / carbon surfaces;
- smoked glass only where it aids hierarchy;
- restrained aged bronze / antique-gold hairlines and calibration marks;
- ivory primary typography;
- deep crimson as a sparse Myth signal/focus accent;
- purposeful asymmetry and negative space;
- one dominant instrument per viewport.

Avoid:

- generic SaaS dashboards;
- equal-weight card grids as the primary composition;
- cyberpunk/game-HUD excess;
- steampunk/Victorian gear identity;
- ornate fantasy decoration;
- fabricated metrics or decorative pseudo-data.

### Phase B — Raw primitives

Build or inspect low-level reusable geometry before domain widgets:

- surface/frame;
- divider/hairline;
- calibration tick/ring;
- text styles;
- button/control states;
- focus/selected/disabled/status semantics;
- layout/spacing primitives.

### Phase C — Components + variants

Create reusable masters and variants. Do not duplicate a component across pages merely to change one state.

Verify normal, hover/focus where represented, selected, disabled, warning/degraded, and responsive-relevant variants.

### Phase D — Domain instruments

Compose MoonWitness-specific instruments only after primitives exist.

Examples include:

- Mission Rail
- Orbital Core
- Truth Aperture
- Evidence Spine
- Observation Shard
- Reliability Prism
- Temporal Orrery
- Chronology Track
- Causality Guardrail
- Causality Lattice
- Map Rift
- Inspector Dock
- Revelation Lens
- Witness Thread
- Provenance Rail

### Phase E — Page template

Create the structural template before product-specific content.

Typical desktop composition:

```text
APPLICATION SHELL
├─ stable task navigation
├─ instrument header / state
├─ dominant primary instrument
├─ contextual inspector / evidence dock
└─ bounded filters / status / secondary rails
```

### Phase F — UX flow binding

Before finalizing the page, answer:

1. What is the user's primary task?
2. What is the authorized entry route/surface?
3. What is the dominant primary instrument?
4. What object is selectable?
5. Where does contextual detail open?
6. What is the back/return path?
7. Which filters/selection state persist?
8. What are loading, empty, partial/offline and error states?
9. What data-state label applies?
10. Where are evidence/source/provenance exposed?
11. Which guardrail must remain visible?
12. How does the task recompose on mobile?
13. Is keyboard/focus behavior defined?
14. Did the design avoid inventing product scope?

If any required answer is unresolved, stop at `BLOCKED_BY_UX_FLOW`.

## Primary public Web rules

The current public entry is the **Monthly Report / Observatory Home Experience**. Do not invent a ninth `Home` route.

Current public task family is:

1. Monthly Report
2. Spread Map
3. Disaster Map
4. Correlation
5. Practice-Level Review
6. Evidence
7. Four Revelation Lens
8. Candidate Pipeline

Contextual object detail should generally remain a drill-down/inspector rather than becoming an arbitrary top-level destination.

Mandatory integrity rules:

- Frozen historical state and live operational state remain visually distinguishable.
- Disaster Map and observation Spread Map remain separate concepts.
- Four Revelation Lens remains exactly four: Al-Qur'an, Injil/Gospel, Taurat/Torah, Zabur/Psalms.
- Practice review remains **practice-level review only**.
- The exact causality sentence where applicable is:

`Temporal/geographic proximity does not establish causation.`

Do not visually imply that proximity is causal proof.

## Command Center rules

Current top-level navigation remains exactly:

- Overview
- Research Runs
- Operations
- Settings

Research Run, Workflow, Job, Analysis Result, Evidence, Provenance, and Knowledge are object/context drill-downs when authorized by the current contract.

Do not add repository/capability names such as `Cosmic`, `Corpus`, `Runtime`, `Worker`, `API`, `SDK`, or `Prophetic` as automatic top-level navigation.

UI state names must respect canonical state-machine semantics. Do not create aesthetic-only lifecycle states.

## Responsive execution

Do **not** scale desktop down proportionally.

Desktop:

```text
stable navigation
→ primary instrument
→ right/bounded inspector
→ evidence/status rails
```

Mobile:

```text
compact application header
→ current task
→ primary instrument
→ context actions
→ bottom sheet / full-height inspector
→ bounded navigation dock/menu
```

Preserve:

- visible current task;
- clear back action;
- accessible touch targets;
- readable object/list alternative to dense desktop tables;
- non-map text/list alternative for important map semantics;
- reduced-motion behavior.

## Safe mutation rules

Prefer the smallest reliable operation:

- use `update_node`/specific setters for one property;
- use `batch_update` for coordinated bounded edits;
- use `render` for deliberate new component trees;
- use `clone_node` + controlled edits for variants;
- use `eval` only when a dedicated tool cannot express the required operation.

Avoid unrestricted `eval` as the default mutation path.

After a visible change in app mode:

1. select the edited/created node(s);
2. zoom/focus viewport to the result;
3. export a verification image;
4. visually inspect before continuing.

## Visual verification loop

Every meaningful stage uses:

```text
EDIT
 ↓
EXPORT / RENDER
 ↓
COMPARE AGAINST CONTRACT
 ↓
CORRECT
 ↓
RE-EXPORT
```

Useful outputs:

```bash
openpencil export design.fig -o preview.png
openpencil export design.fig --node <node-id> -s 2 -o component@2x.png
openpencil export design.fig -f svg --node <node-id> -o asset.svg
openpencil export design.fig -f pdf -o review.pdf
```

One golden reference = **one screen/component per image**. A collage/contact sheet may be an index, but never substitutes for the individual golden screen.

## Code handoff

OpenPencil can export JSX/Tailwind and design tokens, but generated code is an aid, not automatic production authority.

Before code generation, use the current OpenPencil codegen guidance (`get_codegen_prompt`) when available.

For MoonWitness:

- reusable production primitives/components belong in `moonwitness-frontend-platform`;
- application repositories own routes, page composition, product data integration, and app-specific presentation;
- `moonwitness-design-system` remains showcase/compatibility evidence;
- OpenPencil/Figma files remain design specification/review artifacts.

Never fork a reusable canonical component into a consumer app merely because the design export produced local code.

## Design audit before handoff

Run or equivalent-check:

```bash
openpencil analyze colors design.fig --similar
openpencil analyze typography design.fig
openpencil analyze spacing design.fig
openpencil analyze clusters design.fig --min-count 3
openpencil lint design.fig --json
```

Audit for:

- token drift;
- near-duplicate colors;
- inconsistent type scale;
- spacing drift;
- accidental repeated structures that should be components;
- unnamed/ambiguous layers;
- missing accessibility/focus semantics;
- geometry that conflicts with responsive intent.

## Completion contract

A MoonWitness OpenPencil task is complete only when:

- scope/authority source is identified;
- component readiness passes;
- UX flow readiness passes;
- the design uses reusable masters rather than page-local invention;
- desktop and mobile behavior are defined where applicable;
- frozen/live/candidate/error states are explicit where applicable;
- evidence/provenance path is represented where relevant;
- mandatory guardrails are preserved;
- a visual export has been inspected;
- lint/token/spacing checks are clean or known deviations are documented;
- production handoff ownership is explicit;
- no new product scope was created by the design tool.

## Fallback strategy

If OpenPencil MCP is unavailable:

1. Do not pretend live mutation occurred.
2. Continue with contract/flow analysis and prepare bounded design instructions.
3. Use headless OpenPencil CLI if a `.fig`/`.pen` file is available.
4. Use Figma as a secondary design surface only when explicitly available/useful.
5. Keep Storybook as executable UI evidence.
6. Resume OpenPencil visual mutation only when the tooling path is actually reachable.

The fallback does not relax component or UX gates.

## Upstream attribution

This MoonWitness workflow is derived from the capabilities and operating model documented by the MIT-licensed OpenPencil project and its official `open-pencil` Agent Skill. Upstream tool names/version counts may evolve; discover the live MCP tool list when exact availability matters.
