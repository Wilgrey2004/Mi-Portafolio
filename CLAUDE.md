# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also the compile check used before shipping)
npm run lint     # next lint
npm run start    # Serve the production build
npx tsc --noEmit # Type-check without emitting — run this to verify changes compile
```

There is no test suite. Requires Node >= 22.22.0 (see `engines` in package.json).

## Architecture

Single-page-per-route **Next.js 16 App Router** portfolio, TypeScript + React 19, styled with Tailwind. The UI language is Spanish; keep user-facing copy in Spanish.

- **Routing:** Pages live under `app/(routes)/<name>/page.tsx` (route group keeps URLs flat, e.g. `/about-me`, `/services`, `/portfolio`, `/technologies`, `/contact`). The home page is `app/page.tsx`. `app/layout.tsx` renders global `Header` + `Navbar` around all pages and sets metadata.
- **`data.tsx` is the single content source.** All page content — nav items, social links, timeline (`dataAboutPage`), counters, services, tech categories, portfolio projects, contact channels — is exported as typed arrays/objects from this one file and consumed by components via `.map(...)`. Lucide icons are embedded as JSX inside these data objects. Edit content here, not in component markup.
- **Path alias:** `@/*` maps to the repo root (e.g. `@/components/...`, `@/data`, `@/utils/...`).

### Animation system (framer-motion)

Animation is a core, deliberate part of this project — most reveals go through shared variants in `utils/motion-transitions.tsx` rather than ad-hoc inline animation:

- `staggerContainer(stagger, delay)` + a child item variant (`staggerItem`, `timelineItem`) is the standard pattern for sequentially revealing lists. Set `initial="hidden"` + `whileInView="visible"` with `viewport={{ once: true }}` for scroll-triggered reveals.
- `MotionTransition` / `RevealOnScroll` in `components/transition-components.tsx` wrap children in the common fade/slide patterns.
- `TransitionPages` (`components/transition-pages.tsx`) is the red wipe overlay rendered at the top of each page for route-change transitions.
- Any component using framer-motion hooks/`motion` must be a Client Component (`"use client"`).

### Styling

Tailwind with two custom brand color scales defined in `tailwind.config.ts`: **`my-green`** (dark green background theme) and **`tamarillo`** (red accent). Use these tokens (e.g. `bg-my-green-950`, `text-tamarillo-500`) rather than raw hex. `bg-gradient-cover` is the standard page background gradient. Pages wrap content in `ContainerPage` (`components/container.tsx`) for consistent max-width/padding.

## Spec-driven workflow (OpenSpec)

This repo uses OpenSpec (`openspec/`, `schema: spec-driven`). Capability specs live in `openspec/specs/`; proposed changes and their archived history live in `openspec/changes/`. Feature work is expected to flow through a change proposal → tasks → implementation → archive cycle, driven by the `openspec-*` / `opsx:*` skills. Consult the relevant `openspec/specs/*/spec.md` before altering an established capability's behavior.
