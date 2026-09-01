<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->

# @zephyrex/ui

Custom, animated UI component library for React — reduced-motion-first, built on
the **anime.js** and **Motion** engines, and licensed **AGPL-3.0-or-later**.

It is the code home for the vetted building blocks catalogued by the `custom-ui-dev`
skill: only components and engines that are **free and commercially usable** under a
real OSI license (MIT / Apache-2.0) are bundled here. Nothing paid, noncommercial,
or source-available (Commons Clause, GreenSock's license, etc.) is included — see
`THIRD-PARTY-LICENSES.md`.

## Install

```bash
pnpm add @zephyrex/ui react react-dom
```

`react` and `react-dom` (>=18) are peer dependencies.

## Use

```tsx
import { AnimatedNumber, FadeIn, Stagger, usePrefersReducedMotion, cn } from '@zephyrex/ui';

export function Stats() {
  return (
    <FadeIn>
      <AnimatedNumber value={4999} format={(n) => `$${(n / 100).toFixed(2)}`} />
      <Stagger>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </Stagger>
    </FadeIn>
  );
}
```

## Public surface

| Export                    | Kind                                     | Engine   |
| ------------------------- | ---------------------------------------- | -------- |
| `AnimatedNumber`          | count-up number                          | anime.js |
| `FadeIn`                  | fade-and-rise entrance                   | Motion   |
| `Stagger`                 | sequential child reveal                  | Motion   |
| `usePrefersReducedMotion` | a11y hook                                | —        |
| `cn`                      | class-name merge (clsx + tailwind-merge) | —        |
| `log`                     | verbosity-gated diagnostic logger        | —        |

## Principles

- **Reduced-motion first.** Every animated component gates its motion behind
  `usePrefersReducedMotion` and renders its final state immediately when the user
  asks for less motion. Animation resources are released on unmount.
- **One engine per job.** anime.js for imperative, value/DOM-level motion; Motion
  for component-level entrance/gesture/layout. No overlapping engines on one surface.
- **Bundling discipline.** Copy-paste components adopted from the vetted sources
  live under `src/vendor/` with an SPDX line and an upstream-attribution comment,
  and are logged in `THIRD-PARTY-LICENSES.md`. Vendored code is brought fully under
  this repo's lint / type / format / test gates before it ships.

## Develop

```bash
pnpm install
pnpm compile        # build to dist/ (tsc)
pnpm test           # vitest
pnpm storybook      # component workbench on :6006
pnpm check          # full ratchet suite (see CLAUDE.md)
```

## License

AGPL-3.0-or-later. SPDX header on every source file. See `LICENSE`, `NOTICE`, and
`THIRD-PARTY-LICENSES.md`.
