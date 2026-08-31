# MoonWitness OpenPencil Master Pack

Status: **DESIGN EXECUTION SOURCE / STORYBOOK-MIRRORED**

This directory contains OpenPencil design-JSX sources aligned to the frozen MoonWitness Blueprint, the component-first workflow, the canonical UX-flow model, and the executable Storybook master pages.

## Authority

1. MoonWitness Blueprint / design freeze / ADR-025.
2. Canonical API + application contracts.
3. `moonwitness-frontend-platform` reusable production UI.
4. Storybook component + UX-flow workbenches.
5. This OpenPencil pack.
6. Generated showcase images.

OpenPencil is a downstream visual-design and review tool. It does not own product scope or reusable production code.

## Preferred editor

MoonWitness browser/editor surface:

`https://pencil.moonwitness.biz.id/`

When a local/remote OpenPencil MCP is available, use the repository skill:

`skills/moonwitness-openpencil/SKILL.md`

## Execution order

```text
00-foundations.jsx
  ↓
01-raw-primitives.jsx
  ↓
02-domain-instruments.jsx
  ↓
03-ux-flow.jsx
  ↓
pages/*.jsx
  ↓
responsive/mobile.jsx
  ↓
states/shared-states.jsx
  ↓
export_image / lint / visual review
```

Every application page must clear both:

- `BLOCKED_BY_COMPONENT_SYSTEM`
- `BLOCKED_BY_UX_FLOW`

before being treated as a golden page.

## Render workflow

With an OpenPencil MCP client:

1. `new_document` or `open_file`.
2. Create/switch the intended page.
3. Call `get_codegen_prompt` if the installed version differs from the source assumptions.
4. Feed exactly one source file to `render`.
5. `select_nodes` and `viewport_zoom_to_fit` on the created root.
6. Run `describe`, `analyze_spacing`, `analyze_colors`, and `lint`.
7. Export the single screen with `export_image`.
8. Compare against the matching Storybook master page and Blueprint screen matrix.

Do not place multiple golden screens into a single collage frame.

## Current pack scope

- Foundations and tokens.
- Raw primitive visual contract.
- Domain-instrument reference.
- UX-flow reference.
- Eight current public tasks + default Observatory Home Experience.
- Four current Command Center routes.
- Shared states.
- Mobile recomposition.

CRAYON Lab remains target/future and is intentionally excluded from the active golden pack until its application integration is authorized.
