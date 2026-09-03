<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->

# @zephyrex/ui

A cohesive, animated React UI library — one semantic theme, reduced-motion-first,
licensed **AGPL-3.0-or-later**. It homologates the vetted, permissively-licensed
building blocks catalogued by the `custom-ui-dev` skill (anime.js, Motion, Paper
Shaders, and the shadcn/Radix + Tremor patterns) into a single tokenized system.

Every bundled dependency is free and commercially usable under a real OSI license
(MIT / Apache-2.0). Nothing paid, noncommercial, or source-available is included —
see `THIRD-PARTY-LICENSES.md`.

## Install

```bash
pnpm add @zephyrex/ui react react-dom
```

`react` and `react-dom` (>=18) are peer dependencies. Import the design-token
stylesheet once at your app root so components inherit the theme (Tailwind v4
`@theme` block + light/dark token layers):

```ts
import '@zephyrex/ui/styles.css';
```

## Catalog

All components read from one semantic token set (light + dark) and gate every
animation behind `prefers-reduced-motion`.

| Category                            | Components                                                                                                                                                       |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **motion** (anime.js + Motion)      | `AnimatedNumber`, `FadeIn`, `SlideIn`, `ScaleIn`, `Stagger`, `TextShimmer`, `Marquee`                                                                            |
| **primitives** (shadcn/Radix)       | `Button`, `Card` (+ `CardHeader/Title/Description/Content/Footer`), `Badge`, `Input`, `Label`, `Separator`, `Skeleton`, `Switch`, `Alert`, `Spinner`, `Progress` |
| **backgrounds** (Paper Shaders)     | `MeshGradientBackground`, `GrainGradientBackground`                                                                                                              |
| **visualization** (Tremor patterns) | `Sparkline`, `BarList`, `KpiCard`                                                                                                                                |
| **blocks** (composed sections)      | `Hero`, `FeatureGrid`, `CTASection`, `PricingCard`                                                                                                               |
| **forms** (`@jgrieve/forms`)        | `DynamicForm`, `Field`, `TextField`, `PasswordField`, `SelectField`, `RadioField`, `CheckField`                                                                  |
| **foundation**                      | `usePrefersReducedMotion`, `cn`, `log`                                                                                                                           |

```tsx
import { Hero, FeatureGrid, KpiCard, Button, MeshGradientBackground } from '@zephyrex/ui';

export function Landing() {
  return (
    <Hero
      title='Ship polished UI, fast'
      subtitle='One cohesive, animated kit.'
      actions={<Button size='lg'>Get started</Button>}
      background={<MeshGradientBackground colors={['#6d28d9', '#0ea5e9']} className='opacity-40' />}
    />
  );
}
```

## Principles

- **Reduced-motion first.** Every animated component gates motion behind
  `usePrefersReducedMotion` (or `motion-safe:` utilities) and renders its final
  state immediately when the user asks for less. Animation resources are released
  on unmount.
- **One theme.** Components never hardcode a color — they use semantic tokens
  (`bg-primary`, `text-muted-foreground`, …), so a source drawn from anywhere
  renders on-brand in light and dark.
- **One engine per job.** anime.js for imperative value/DOM motion; Motion for
  component-level entrance/gesture/layout. No overlapping engines on one surface.
- **Accessible by default.** Roles, labels, keyboard focus, and ARIA state ship
  with every interactive component; a11y warnings fail the lint gate.

## Develop

```bash
pnpm install
pnpm compile         # build to dist/ (tsc)
pnpm test            # vitest (behavior)
pnpm storybook       # component workbench on :6006
pnpm test:storybook  # build storybook + Playwright storyshots + play interactions
pnpm check           # full ratchet suite (see CLAUDE.md)
```

Storybook is the visual workbench: every component has a story, and
`tests/storybook/stories.spec.ts` renders each one in a real browser (Playwright),
asserting no render/console errors, with `play()` interaction tests on the
interactive components.

## License

AGPL-3.0-or-later. SPDX header on every source file. See `LICENSE`, `NOTICE`, and
`THIRD-PARTY-LICENSES.md`.
