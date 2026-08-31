# MoonWitness Showcase Selection

Curated visual archive copied from `moonwitness_showcase_ALL_GENERATED_archive.zip`.
The archive uses generated filenames, so the files below use stable showcase names
for documentation and review.

| Showcase file | Archive source |
| --- | --- |
| `00_CURATED_CONTACT_SHEET.jpg` | `images/_compare_sheet.jpg` |
| `01_login_archive_access.png` | `images/a_dark_sci_fi_ui_login_screen_concept_art_scene.png` |
| `02_command_center.png` | `images/moonwitness_intelligence_command_center.png` |
| `03_celestial_observatory.png` | `images/moonwitness_observatory_dashboard.png` |
| `04_evidence_ledger.png` | `images/moonwitness_evidence_dashboard.png` |
| `05_chronology_track.png` | `images/moonwitness_august_2026_report_02_analytics_review_v2.png` |
| `06_disaster_map.png` | `images/moonwitness_indonesia_disaster_map.png` |
| `07_reports.png` | `images/moonwitness_monthly_reports_dashboard.png` |
| `08_mobile_instrument_mode.png` | `images/moonwitness_mobile_interaction_lab.png` |
| `09_component_library.png` | `images/moonwitness_experimental_design_system_board.png` |
| `10_data_visualizations.png` | `images/moonwitness_august_2026_analytics_dashboard.png` |
| `11_settings_theme_lab.png` | `images/moonwitness_ritual_tech_observatory.png` |

## Authority

These files are **visual reference/showcase assets only**.

They do not:

- create application product scope;
- prove that a screen or capability is implemented;
- replace executable Storybook stories;
- replace Figma review;
- supersede the frozen Blueprint;
- supersede `moonwitness-frontend-platform` as canonical reusable UI owner.

For page-level design work, use the Blueprint execution control:

- `moonwitness-blueprint/07-ui-ux/APPLICATION-INFORMATION-ARCHITECTURE-V1.md`
- `moonwitness-blueprint/07-ui-ux/FIGMA-SHOWCASE-SCREEN-MATRIX-V1.md`

The matrix is the authoritative implementation-aligned checklist for deciding whether a visual reference is `EXISTING`, `ALIGNED TARGET`, `GATED FUTURE`, or `COMPONENT ONLY`, and for deciding which dedicated one-screen-per-image reference should be generated next.

## Current classification

| Showcase file | Matrix classification | Use |
| --- | --- | --- |
| `01_login_archive_access.png` | `GATED FUTURE` | authentication concept only; no canonical global login/app launcher is defined today |
| `02_command_center.png` | `EXISTING` reference needing rework | regenerate against the actual four-route Command Center IA |
| `03_celestial_observatory.png` | `COMPONENT ONLY` | OrbitalCore / TemporalOrrery visual reference; not a current public route |
| `04_evidence_ledger.png` | `EXISTING` | Evidence Ledger reference |
| `05_chronology_track.png` | `EXISTING` / partial | valid chronology reference; not sufficient as the full Correlation Engine page |
| `06_disaster_map.png` | `EXISTING` | Disaster Map reference |
| `07_reports.png` | `EXISTING` reference needing rework | regenerate as dedicated August 2026 Monthly Report golden page |
| `08_mobile_instrument_mode.png` | `COMPONENT ONLY` | responsive composition reference |
| `09_component_library.png` | `COMPONENT ONLY` | shared component reference |
| `10_data_visualizations.png` | `COMPONENT ONLY` | signature data-instrument reference |
| `11_settings_theme_lab.png` | `COMPONENT ONLY` / needs rework | Theme/Visual Lab only; never substitute for Command Center Settings |

## Generation rule

Golden page references must be generated **one screen per image**. Contact sheets remain index/archive aids only and must never replace an individual golden screen.
