# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router portfolio. `app/page.tsx` is the home page; `app/(routes)/<route>/page.tsx` defines the other pages, with shared layout and styles in `app/layout.tsx` and `app/globals.css`. Put reusable UI in `components/`, shared content in `data.tsx`, animation helpers in `utils/motion-transitions.tsx`, and the React Three Fiber effect in `components/liquid-effects.tsx`. Images and other static files belong in `public/`; the downloadable résumé is in `Cv/`. Check `openspec/specs/` before changing an established feature, and keep proposals and tasks in `openspec/changes/`.

## Build, Test, and Development Commands

Use Node.js 22.22.0 or newer, then run `npm ci` to install locked dependencies.

- `npm run dev` starts the local site at `http://localhost:3000`.
- `npx tsc --noEmit` checks TypeScript without writing output.
- `npm run build` creates the production build and catches compilation errors.
- `npm run start` serves the completed production build.

The package declares `npm run lint`, but has no ESLint configuration or dependency; do not count that script as a working quality check until linting is configured.

## Coding Style & Naming Conventions

Follow the existing TypeScript/TSX style: two-space indentation, double-quoted strings, semicolons, and typed props. Use kebab-case route and component filenames where practical, and import from the repository root with `@/`. Keep user-facing text in Spanish and update shared portfolio content in `data.tsx` instead of duplicating it in components. Prefer Tailwind utilities and the `my-green` and `tamarillo` color tokens in `tailwind.config.ts`. Components using Framer Motion, React Three Fiber, or browser APIs need `"use client"`; honor reduced-motion preferences.

## Testing Guidelines

There is no automated test framework or coverage target yet. Before a pull request, run the TypeScript check and production build, then manually check affected routes, navigation, responsive layouts, and interactive controls. If you add automated tests, use `*.test.ts` or `*.test.tsx` filenames and add a documented `npm test` script.

## Commit & Pull Request Guidelines

History uses short, informal commit subjects rather than a strict convention. Write a concise, action-oriented subject that names the change, such as `Update services carousel`. Keep each commit focused. Pull requests should summarize the change, link the relevant issue or OpenSpec change when applicable, list verification performed, and include before-and-after screenshots for visible UI changes.
