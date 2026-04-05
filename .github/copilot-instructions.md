# Copilot Instructions for PAR Garden UX

## Project Context

This repository is an Obsidian vault published with Quartz 4.
Primary UX goals:

- Make wayfinding obvious within 5 seconds.
- Reduce dead-end pages.
- Keep navigation consistent across desktop and mobile.
- Preserve the digital-garden character while improving readability.

## Navigation Standards

When changing layout or content navigation:

- Keep these top-level navigation targets easy to reach:
  - `/`
  - `/start-here`
  - `/about`
  - `/tags`
  - `/Atlas`
  - `/Efforts`
- Prefer stable, short slugs for hub pages.
- Do not add links to pages that do not exist.
- Ensure onboarding pages (`content/start-here.md`, `content/About.md`, `content/_index.md`) reference valid internal destinations.

## UX Conventions

For Quartz layout edits in `quartz.layout.ts`:

- Keep search visible in the left sidebar.
- Keep the Explorer enabled on desktop.
- Keep recent-note discovery visible (desktop right sidebar; mobile condensed variant is acceptable).
- Preserve breadcrumbs and content metadata for context.
- Keep footer links as practical wayfinding links, not framework defaults.

For styling edits in `quartz/styles/custom.scss`:

- Use existing theme variables (`--light`, `--dark`, `--secondary`, `--tertiary`) instead of hardcoded palette overrides.
- Favor subtle panel separation (border, radius, light shadow) to improve scanability.
- Preserve good mobile behavior under 800px width.
- Prefer low-motion, purposeful animation only.

## Content Editing Rules

When editing notes used for navigation:

- Always maintain valid YAML frontmatter (single frontmatter block).
- Keep headings concise and scannable.
- Provide clear next actions with internal links.
- Avoid overlong intro prose on hub pages.

## Ideaverse Consistency

When editing effort, area, project, and work notes based on Linking Your Thinking / Ideaverse patterns:

- Use one valid frontmatter block only.
- Keep core effort fields consistent where applicable:
  - `effort: true`
  - `status: active|simmering|sleeping|dormant`
  - `rank: 1-5`
  - `tags:` including `effort` and one structural tag (`effort-area`, `effort-project`, or `effort-work`).
- Preserve existing LYT note style (MOC-first, map notes, and intentional cross-links).
- Prefer adding 2-4 meaningful internal links that connect across domains, not just within one folder.

## Quality Checks Before Finishing

After any UX or navigation change:

1. Run `npm run check` when feasible.
2. Run a local build preview with `npx quartz build --serve` when feasible.
3. Verify no malformed markdown in edited onboarding pages.
4. Verify internal links added in onboarding pages are valid routes.

## Non-Goals

- Do not redesign Quartz core architecture.
- Do not remove graph, backlinks, or tags unless explicitly requested.
- Do not introduce heavy dependencies for visual effects.
