# MoonWitness Showcase Component Inventory

This repository is the **public showcase / compatibility bridge / visual review mirror** for MoonWitness UI. It is **not** the canonical reusable production UI owner.

Canonical reusable implementation lives in:

- `ArsyBelovedLabs/moonwitness-frontend-platform`

Canonical component-first execution guidance lives in:

- `moonwitness-blueprint/07-ui-ux/FIGMA-COMPONENT-FIRST-WORKFLOW-V1.md`
- `moonwitness-blueprint/07-ui-ux/FIGMA-SHOWCASE-SCREEN-MATRIX-V1.md`

Status legend:

- **mirror** — public Storybook/showcase specimen corresponding to a canonical reusable concept.
- **story** — demonstrated in Storybook.
- **reference** — useful visual evidence but not a production owner.
- **next** — intentionally reserved for later.

## Existing showcase component families

| Family | Showcase component | Status | Canonical relationship |
| --- | --- | --- | --- |
| Foundation | `MoonWitnessProvider` | mirror + story | mirrors frontend-platform provider/theme root |
| Foundation | `ApplicationShell` | mirror + story | mirrors reusable application boundary |
| Foundation | `InstrumentPanel` | mirror + story | mirrors engineered surface family |
| Command | `CommandDeck` | mirror + story | showcase composition; applications own final pages |
| Command | `MissionRail` | mirror + story | mirrors canonical navigation geometry |
| Command | `ArchiveGate` | mirror + story | mirrors canonical search/command entry |
| Command | `ActionRail` | mirror + story | mirrors action family |
| Command | `SegmentedRail` | mirror + story | mirrors filters/modes family |
| Layout | `InstrumentHeader` | mirror + story | mirrors page hierarchy component |
| Layout | `InstrumentGrid` | mirror + story | showcase layout specimen |
| Layout | `InspectorDock` | mirror + story | mirrors contextual inspector |
| Observatory | `OrbitalCore` | mirror + story | mirrors central spatial instrument |
| Observatory | `TemporalOrrery` | mirror + story | mirrors temporal geometry |
| Observatory | `ChronologyTrack` | mirror + story | mirrors chronology instrument |
| Observatory | `SignalBeacon` | mirror + story | mirrors status/signal semantics |
| Observatory | `MetricRail` | mirror + story | mirrors inline metric instrument |
| Evidence | `EvidenceSpine` | mirror + story | mirrors verification chain |
| Evidence | `WitnessThread` | mirror + story | mirrors evidence/candidate thread |
| Evidence | `ProvenanceRail` | mirror + story | mirrors source provenance register |
| Evidence | `SourceSeal` | mirror + story | mirrors source/reliability object |
| Evidence | `EvidenceRules` | mirror + story | mirrors evidence contract/guardrails |
| Evidence | `ObservationShard` | mirror + story | mirrors bounded observation record |
| Evidence | `ReliabilityPrism` | mirror + story | mirrors reliability instrument |
| Geo | `MapRift` | mirror + story | mirrors map viewport family |
| Causality | `CausalityGuardrail` | mirror + story | exact non-causality contract |
| Data | `TruthAperture` | mirror + story | mirrors signature score aperture |
| Data | `CausalityLattice` | mirror + story | mirrors relation graph |
| Data | `SignalWave` | mirror + story | mirrors signal/time waveform |
| Data | `StateVector` | mirror + story | mirrors multi-axis state strips |
| Data | `EventPulse` | mirror + story | mirrors event/metric pulse |
| Interaction | `InstrumentButton` | mirror + story | maps to canonical button/control family |
| Interaction | `StatusMatrix` | mirror + story | mirrors dense state matrix |
| Interaction | `FilterDock` | mirror + story | mirrors contextual filters |
| Interaction | `ProgressRail` | mirror + story | mirrors progress/integrity state |
| Interaction | `LoadingOrbit` | mirror + story | mirrors branded loading state |
| Interaction | `EmptySignal` | mirror + story | mirrors branded empty state |
| Interaction | `InspectorRows` | mirror + story | mirrors key/value inspection rows |
| Revelation | `RevelationLens` | mirror + story | exactly four product channels |
| Motion | orbital/reveal transitions | next | optional after behavior contracts stabilize |
| Icons | MoonWitness icon set | next | dedicated icon language |

## Canonical component-first layers

The canonical frontend platform now provides an explicit executable hierarchy:

```text
semantic tokens
  ↓
raw primitives
  ↓
components + variants
  ↓
domain instruments
  ↓
page templates
  ↓
application composition
```

### Raw primitive contract

Canonical raw primitives include layout, typography, controls, states and instrument geometry such as:

`RawSurface`, `RawPanel`, `RawDivider`, `RawStack`, `RawInline`, `RawScrollRegion`, `RawViewportFrame`, `RawLabel`, `RawTelemetry`, `RawCoordinate`, `RawEvidenceId`, `RawTimestamp`, `RawButton`, `RawIconButton`, `RawInput`, `RawSearchInput`, `RawSelect`, `RawToggle`, `RawCheckbox`, `RawSegment`, `RawTab`, `RawChip`, `RawTooltip`, `RawStatusDot`, `RawStatusLabel`, `RawProgressTrack`, `RawBadge`, `RawSignalMark`, `RawHairline`, `RawTickMark`, `RawCalibrationRing`, `RawReticle`, `RawNode`, `RawConnector`, `RawScale`, and `RawLegendItem`.

This showcase repository should **mirror or demonstrate** those contracts rather than become a second implementation owner.

### Canonical domain instruments

- `ResearchStateCore`
- `EvidenceTraversal`
- `ObservationLedgerInstrument`
- `CorrelationLatticeInstrument`
- `ChronologyInstrument`
- `SpreadMapInstrument`
- `DisasterMapInstrument`
- `PracticeReviewInstrument`
- `FourRevelationLensInstrument`
- `CandidatePipelineInstrument`
- `ResearchRunTrajectory`
- `SystemPosture`

### Canonical page templates

- `ObservatoryPageTemplate`
- `LedgerPageTemplate`
- `MapPageTemplate`
- `AnalysisPageTemplate`
- `PipelinePageTemplate`
- `OperationsPageTemplate`
- `SettingsPageTemplate`
- `MobileInstrumentPageTemplate`

Templates define reusable hierarchy only. Application repositories own routes and product composition.

## Storybook workbench

`MoonWitnessComponentFirst.stories.tsx` is the preferred visual-workbench entry point while Figma is unavailable or rate-limited. It organizes review into:

1. Constitution + semantic tokens
2. Raw primitive contract
3. Components + variants
4. Domain instruments
5. Page template skeletons
6. Component-system readiness gate

Page/showcase generation remains blocked until the reusable masters are visually reviewed.

## Legacy / page reference stories

Existing Storybook page archetypes remain useful **reference compositions**, not product-scope authorities:

- Command Center
- Celestial Observatory
- Evidence Ledger
- August 2026 — Disaster Map
- Correlation & Chronology Engine
- Practice-Level Review
- Four Revelation Lens
- Candidate Pipeline
- Mobile Instrument Mode
- Theme Lab
- Component Lab
- Signature Data Instruments
- Evidence / Provenance System

These compositions must be reconciled against the Blueprint screen matrix before being treated as current page targets. In particular, Celestial Observatory remains component/showcase-only, and Command Center navigation must follow its actual four-route application contract.
