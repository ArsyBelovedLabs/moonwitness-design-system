# MoonWitness OpenPencil Skill

MoonWitness-specific agent workflow for using OpenPencil as a programmable design editor, Figma-compatible review surface, and visual-verification tool.

## Purpose

This skill makes OpenPencil a downstream execution layer for the existing MoonWitness design system and UX contracts. It does **not** replace the Blueprint, Storybook, or canonical reusable production UI ownership.

Preferred MoonWitness web editor:

- https://pencil.moonwitness.biz.id/

Upstream tooling:

- `@open-pencil/cli`
- `@open-pencil/mcp`
- official skill: `open-pencil/skills@open-pencil`

## Recommended setup

```bash
bun add -g @open-pencil/cli @open-pencil/mcp
npx skills add open-pencil/skills@open-pencil
```

Then install/copy this repository skill into the agent environment as `moonwitness-openpencil`.

## MCP example

See `mcp.example.json`.

The MCP surface is local by design. The hosted MoonWitness OpenPencil URL is the browser/editor review surface; agent mutation should use an actually reachable OpenPencil MCP/CLI path rather than assuming the web URL itself exposes MCP.

## Required workflow

```text
Blueprint / contracts
  ↓
Component readiness
  ↓
UX flow readiness
  ↓
OpenPencil component/page composition
  ↓
Responsive states
  ↓
Visual export + audit
  ↓
Storybook / production handoff
```

A page cannot become a golden design when it is `BLOCKED_BY_COMPONENT_SYSTEM` or `BLOCKED_BY_UX_FLOW`.

## Important ownership rule

- `moonwitness-frontend-platform` — canonical reusable production UI owner.
- application repositories — routes, data integration, application composition.
- `moonwitness-design-system` — Storybook/showcase/compatibility evidence.
- OpenPencil/Figma — design specification and visual review/execution surfaces.
