# Consumer Integration Contract

## Dependency direction

```text
moonwitness-design-system
        ↓
frontend integration layers / product apps
        ↓
MoonWitness domain/business data
```

Never introduce a reverse dependency from this repository into an application, API client, database layer, authentication package or domain repository.

## Allowed in design-system

- semantic tokens and themes
- presentation primitives
- interaction behavior
- accessibility contracts
- generic data visualization inputs
- generic map/evidence/observatory compositions
- Storybook specimens

## Forbidden in design-system

- product API endpoints
- database schemas
- user/session/auth contracts
- MoonWitness business workflow state machines
- direct fetch calls to product data
- hard-coded consumer route names as component requirements
- frozen research facts inside reusable runtime components

Storybook may use illustrative/sample values; those values are never production truth.

## Consumer example

```tsx
<MoonWitnessProvider theme="myth-fade">
  <ApplicationShell label="WHERE MYTH FADE TO LEGEND">
    <ResearchInstrument />
  </ApplicationShell>
</MoonWitnessProvider>
```

The consumer may then compose `MapRift`, `EvidenceSpine`, `TruthAperture`, `RevelationLens`, and other primitives around canonical consumer data.

## Migration rule

When an application already owns an equivalent component:

1. audit semantics and behavior
2. keep application business/data binding
3. replace only the visual/interaction primitive
4. preserve tests and accessibility
5. remove the duplicate only after the shared replacement is verified

Do not perform a big-bang rewrite solely for visual consistency.

## Theme rule

Consumers may define semantic theme values, but they must not fork shared component geometry just to change color.

```text
appearance + brand theme + semantic state
          ↓
        tokens
          ↓
same reusable component contract
```
