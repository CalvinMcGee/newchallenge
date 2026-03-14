# New Challenge Astro Rewrite

Astro (TypeScript) rewrite scaffold for the New Challenge site.

This project is configured for static output and currently contains placeholder-only content.

## Stack

- Astro
- TypeScript (`strict`)
- pnpm
- Static build output (`output: "static"`)

## Run

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Implemented Placeholder Structure

- Header
- Navigation
- Page layout wrapper
- Contact section
- Footer

Main layout and components:

- `src/layouts/BaseLayout.astro`
- `src/components/SiteHeader.astro`
- `src/components/SiteNav.astro`
- `src/components/ContactSection.astro`
- `src/components/SiteFooter.astro`

## Placeholder Routes (mirroring `../newchallenge` URLs)

- `/`
- `/tjanster-pris/`
- `/tjanster-pris/idrottspsykologisk-forelasning/`
- `/tjanster-pris/individuell-radgivning/`
- `/om-foretaget/`
- `/om-foretaget/natverk-samarbeten/`
- `/om-sidan/`
- `/success/`
- `/404`
