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

## Canonical interaction primitives

The first reusable signature set is now implemented:

- `MoonWitnessProvider`
- `InstrumentPanel`
- `SignalBeacon`
- `MissionRail`
- `OrbitalCore`
- `EvidenceSpine`
- `TemporalOrrery`
- `CausalityGuardrail`
- `ObservationShard`
- `ReliabilityPrism`
- `MapRift`
- `CommandDeck`

These components are application-agnostic and consume semantic `--mw-*` tokens rather than project-specific data contracts.

## Theme engine

Built-in semantic themes currently include:

- `myth-fade`
- `crimson`
- `cyan`
- `amber`
- `emerald`
- `violet`
- `neutral`

Themes alter semantic accent/material values while component interaction contracts remain stable.

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

The full cinematic Command Center specimen is available under `MoonWitness/Full Showcase`.

## Consumer integration

A consumer may install the repository directly while package publishing is not yet enabled:

```json
{
  "dependencies": {
    "@arsybelovedlabs/moonwitness-design-system": "github:ArsyBelovedLabs/moonwitness-design-system#main"
  }
}
```

```tsx
import { MoonWitnessProvider } from '@arsybelovedlabs/moonwitness-design-system'
import '@arsybelovedlabs/moonwitness-design-system/styles.css'

<MoonWitnessProvider theme="myth-fade">
  <App />
</MoonWitnessProvider>
```

`ArsyBelovedLabs/moonwitness-wheremythfadetolegend` is the first live consumer of this contract.

## Figma

Design source: **MoonWitness Design System — Experimental Observatory UI**

https://www.figma.com/design/LP5AwOwe6QGeXRNpeZWsjd

The Starter Figma plan limits MCP design edits. The file is organized into three master pages with Sections so the complete system can remain in one design file without exceeding the page limit.

## Repository policy

This repository uses `main` as the single working branch by project decision. Do not duplicate primitives inside application repositories. Applications may add integration CSS or compositions, but canonical reusable components and tokens belong here.

## Status

Core semantic tokens, Storybook, reusable observatory primitives, cinematic showcase composition, CI verification, and first consumer integration are implemented. High-fidelity Figma refinement continues against the generated showcase boards as the visual benchmark.
