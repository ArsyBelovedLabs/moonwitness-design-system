# MoonWitness Design System

Public showcase, compatibility bridge, and experimental visual reference for MoonWitness products under ArsyBelovedLabs.

> Canonical reusable UI ownership belongs to `ArsyBelovedLabs/moonwitness-frontend-platform` under the frozen MoonWitness Blueprint and ADR-025. This repository is not a second canonical UI owner.

## Scope

This repository provides executable Storybook showcases, experimental observatory instruments, visual-fidelity exploration, curated design references, compatibility mirrors, and Figma-linked design evidence.

Reusable concepts may be proven here, but production-canonical tokens, primitives, patterns, and reusable domain UI kits must be promoted to `moonwitness-frontend-platform` through the normal issue/PR/verification workflow.

Product repositories own routes, page composition, product data integration, and business/domain orchestration through their authorized contracts.

## Design direction

- cinematic observatory / evidence-machine language
- asymmetric and instrument-like composition instead of generic SaaS card grids
- fully themeable semantic color system
- reusable visual exploration across MoonWitness public Web, Command Center, CRAYON Lab, and future products
- accessible states and reduced-motion support
- information integrity before decoration
- proximity measurements are never rendered as causal proof

## v0.3 showcase surface

### Foundation

- `MoonWitnessProvider`
- `ApplicationShell`
- `InstrumentPanel`
- semantic `--mw-*` tokens
- `myth-fade`, `crimson`, `cyan`, `amber`, `emerald`, `violet`, `neutral` themes

### Navigation / command

- `MissionRail`
- `ArchiveGate`
- `ActionRail`
- `SegmentedRail`
- `CommandDeck`
- `InstrumentHeader`

### Observatory / temporal

- `OrbitalCore`
- `TemporalOrrery`
- `ChronologyTrack`
- `SignalBeacon`
- `MetricRail`
- `InspectorDock`

### Evidence / provenance

- `EvidenceSpine`
- `WitnessThread`
- `ProvenanceRail`
- `SourceSeal`
- `EvidenceRules`
- `ObservationShard`
- `ReliabilityPrism`

### Geo / causality

- `MapRift`
- `CausalityGuardrail`
- `CausalityLattice`

### Signature data instruments

- `TruthAperture`
- `CausalityLattice`
- `SignalWave`
- `StateVector`
- `EventPulse`

### States / interaction

- `InstrumentButton`
- `StatusMatrix`
- `FilterDock`
- `ProgressRail`
- `LoadingOrbit`
- `EmptySignal`
- `InspectorRows`

### Revelation

- `RevelationLens`

These implementations are showcase/compatibility evidence. Application-agnostic primitives that become canonical belong in `moonwitness-frontend-platform`.

## Toolchain

Development and CI use Node `24.20.0` with pnpm `11.24.0`. The checked-in
`pnpm-lock.yaml` is the install source of truth; use `pnpm install --frozen-lockfile`.

## Storybook

```bash
pnpm install --frozen-lockfile
pnpm storybook
```

Verification:

```bash
pnpm typecheck
pnpm build
pnpm build-storybook
```

Storybook contains:

- `MoonWitness/00 Component First Workspace` — constitution → tokens → raw contract → component families → domain instruments → templates → component readiness gate.
- `MoonWitness/01 UX Flow Workbench` — task entry → primary instrument → object selection → contextual detail → evidence/provenance → return path, shared states, responsive recomposition, and `BLOCKED_BY_UX_FLOW` review.
- `MoonWitness/Full Showcase`
- `MoonWitness/Benchmark Screens` — the five golden reference screens: Command Center, Evidence Cathedral, Geo Intelligence, Four Revelation Lens, and Mobile Instrument
- `MoonWitness/Pages` — Command Center, Observatory, Evidence Ledger, Disaster Map, Correlation Engine, Practice-Level Review, Four Revelation Lens, Candidate Pipeline, Mobile Instrument Mode, Theme Lab
- `MoonWitness/Component Lab`
- `MoonWitness/Data Visualization`
- `MoonWitness/Evidence System`

The first two workbenches are design-execution controls, not product routes. Golden page work should be reviewed against both before a generated showcase image is accepted.

## Compatibility bridge integration

This public repository may be consumed as a compatibility/showcase bridge while canonical private package distribution is being completed. Such consumption does not transfer canonical component ownership away from `moonwitness-frontend-platform`.

Example bridge dependency:

```json
{
  "dependencies": {
    "@arsybelovedlabs/moonwitness-design-system": "github:ArsyBelovedLabs/moonwitness-design-system#main"
  }
}
```

```tsx
import {
  ApplicationShell,
  MoonWitnessProvider,
} from '@arsybelovedlabs/moonwitness-design-system'
import '@arsybelovedlabs/moonwitness-design-system/styles.css'

<MoonWitnessProvider theme="myth-fade">
  <ApplicationShell label="WHERE MYTH FADE TO LEGEND">
    <App />
  </ApplicationShell>
</MoonWitnessProvider>
```

`ArsyBelovedLabs/moonwitness-wheremythfadetolegend` uses this bridge for visual integration while keeping routes, research/data logic, and application composition in the application repository.

## Ownership contract

```text
moonwitness-frontend-platform
  canonical owner:
    tokens
    primitives
    patterns
    reusable domain UI kits

moonwitness-design-system
  showcase / compatibility bridge:
    Storybook references
    visual experiments
    compatibility mirrors
    curated design evidence

application repositories
  own:
    routes
    page composition
    product data integration
    application-specific presentation
```

Do not fork canonical platform primitives in consumer applications. If a showcase primitive proves reusable across MoonWitness products, promote it to `moonwitness-frontend-platform` instead of creating a second canonical implementation here.

## Curated showcase references

Curated generated references live under `docs/showcase/`. They are visual-review assets only. They do not create product scope, prove implementation, or supersede Figma/Storybook/canonical frontend-platform contracts.

## Figma

Design reference: **MoonWitness Design System — Experimental Observatory UI**

https://www.figma.com/design/LP5AwOwe6QGeXRNpeZWsjd

Figma and Storybook are visual/specification tools. Storybook is the executable visual workbench when Figma access is constrained. Canonical reusable production implementation remains governed by `moonwitness-frontend-platform`.

## Repository policy

Active development uses:

```text
dev   → integration / active work
main  → stable promoted state
```

Changes are verified on `dev` and promoted to `main` through review/CI. Historical branches are not active working targets.

## Status

**v0.3.x showcase bridge** — cinematic shell experiments, component-first and UX-flow review workbenches, page-level instruments, interaction states, signature data visualizations, evidence/provenance references, multi-page Storybook showcase, and curated visual references are available. Canonical reusable UI ownership remains in `moonwitness-frontend-platform`.
