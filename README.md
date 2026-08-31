# MoonWitness Design System

Canonical reusable visual and interaction system for MoonWitness products under ArsyBelovedLabs.

## Scope

This repository owns reusable design tokens, themes, primitives, experimental observatory instruments, evidence/data/map UI, motion language, Storybook documentation, and Figma-linked design references. Product repositories compose these building blocks and keep their business logic outside this repository.

## Design direction

- cinematic observatory / evidence-cathedral language
- asymmetric and instrument-like composition instead of generic SaaS card grids
- fully themeable semantic color system
- reusable across MoonWitness Web, Command Center, Where Myth Fade to Legend, Cosmic, Crayon, and future products
- accessible states and reduced-motion support
- information integrity before decoration
- proximity measurements are never rendered as causal proof

## v0.3 reusable surface

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

All reusable components are application-agnostic and consume semantic tokens rather than MoonWitness API/database contracts.

## Storybook

```bash
npm install
npm run storybook
```

Production verification:

```bash
npm run typecheck
npm run build
npm run build-storybook
```

Storybook now contains:

- `MoonWitness/Full Showcase`
- `MoonWitness/Benchmark Screens` — the five golden reference screens: Command Center, Evidence Cathedral, Geo Intelligence, Four Revelation Lens, and Mobile Instrument
- `MoonWitness/Pages` — Command Center, Observatory, Evidence Ledger, Disaster Map, Correlation Engine, Practice-Level Review, Four Revelation Lens, Candidate Pipeline, Mobile Instrument Mode, Theme Lab
- `MoonWitness/Component Lab`
- `MoonWitness/Data Visualization`
- `MoonWitness/Evidence System`

## Consumer integration

Until package publishing is enabled, consumers may install `main` directly:

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

`ArsyBelovedLabs/moonwitness-wheremythfadetolegend` is the first production consumer and uses the shared provider/application shell while keeping research/data logic local.

## Ownership contract

```text
moonwitness-design-system
  owns: tokens + themes + reusable interaction primitives + visual instruments

consumer repositories
  own: routes + business logic + data fetching + domain orchestration + application composition
```

Do not fork shared primitives in consumer repositories. If a component can be reused by more than one MoonWitness product, its canonical implementation belongs here.

## Figma

Design source: **MoonWitness Design System — Experimental Observatory UI**

https://www.figma.com/design/LP5AwOwe6QGeXRNpeZWsjd

The Starter Figma plan currently limits MCP calls, so production code + Storybook are the executable source while Figma high-fidelity refinement catches up when the limit becomes available again.

## Repository policy

This repository uses `main` as the single working branch by project decision.

## Status

**v0.3.0** — semantic theme engine, cinematic application shell, page-level instrument primitives, interaction states, signature data visualizations, evidence/provenance primitives, multi-page Storybook showcase, CI verification, and the first production consumer integration are implemented.
