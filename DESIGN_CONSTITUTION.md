# MoonWitness Design Constitution

## North star

MoonWitness UI is a **cinematic observatory instrument**: ancient observatory × forensic evidence machine × celestial instrument × cinematic archive × modern interaction system.

It is not a generic dark SaaS dashboard and it is not a game HUD skin.

## Priority order

1. information integrity
2. visual hierarchy / fidelity
3. component reusability
4. accessibility
5. responsiveness
6. motion
7. decoration

## Signature rules

- one dominant instrument per viewport
- purposeful asymmetry and breathing zones
- data integrated into rails, apertures, lattices, spines and orreries
- generic cards/tables remain utility surfaces, never the identity
- semantic state colors must have meaning; avoid rainbow decoration
- main brand accent is themeable and must not be hard-coded in consumers
- raw brand colors belong in tokens, not application components
- every interactive primitive must expose focus/disabled/loading/error behavior where applicable
- reduced motion must remain usable

## Canonical MoonWitness primitives

Use signature components before reaching for a generic dashboard equivalent when the data semantics fit:

| Generic pattern | MoonWitness signature |
| --- | --- |
| KPI donut | `TruthAperture` / `MetricRail` |
| relation diagram | `CausalityLattice` |
| generic timeline cards | `TemporalOrrery` / `ChronologyTrack` |
| evidence card stack | `EvidenceSpine` / `WitnessThread` / `ObservationShard` |
| generic map card | `MapRift` |
| sidebar-only navigation | `MissionRail` + contextual command surfaces |
| search bar | `ArchiveGate` |
| source confidence progress | `ReliabilityPrism` |

## Causality guardrail

When displaying temporal/geographic relationships, preserve a strict separation between measurement and causal finding.

Canonical sentence:

> Temporal/geographic proximity does not establish causation.

Distance, ΔT and proximity scores are measurements/discovery aids. They are not causal verdicts.

## Product boundaries

`moonwitness-design-system` owns reusable interface language.

Consumer apps own application logic, routes, database/API contracts, data fetching and product-specific composition.

A consumer must not duplicate a reusable primitive merely to change its accent color; use semantic themes/tokens instead.
