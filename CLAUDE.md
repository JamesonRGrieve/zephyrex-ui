# Claude Code Instructions — @zephyrex/ui

A cohesive, animated React UI library. Homologates only the free +
commercially-usable (OSI-licensed) building blocks vetted by the user-level
`custom-ui-dev` skill into one tokenized system. AGPL-3.0-or-later.

## Stack Standards

Read **before your first edit**:

- `/home/jameson/Source/ai-prompts/typescript.md`
- `/home/jameson/Source/ai-prompts/react-next.md`

---

## Architecture

Components are organized by category under `src/<category>/`, each with a barrel
`index.ts`; the root `src/index.ts` re-exports every category. Shared foundation
lives in `src/hooks/` and `src/lib/`.

| Category         | Engine / basis                                   | Components                                                                                          |
| ---------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| `motion/`        | anime.js (imperative) + Motion (component-level) | AnimatedNumber, FadeIn, SlideIn, ScaleIn, Stagger, TextShimmer, Marquee                             |
| `primitives/`    | shadcn convention + Radix (Label, Separator)     | Button, Card(+subparts), Badge, Input, Label, Separator, Skeleton, Switch, Alert, Spinner, Progress |
| `backgrounds/`   | Paper Shaders (WebGL)                            | MeshGradientBackground, GrainGradientBackground                                                     |
| `visualization/` | Tremor patterns, native SVG/DOM                  | Sparkline, BarList, KpiCard                                                                         |
| `blocks/`        | composition of the above                         | Hero, FeatureGrid, CTASection, PricingCard                                                          |
| `forms/`         | re-exported from `@jgrieve/forms` (AGPL sibling) | DynamicForm, Field, TextField, PasswordField, SelectField, RadioField, CheckField                   |
| foundation       | —                                                | `usePrefersReducedMotion`, `cn`, `log`                                                              |

The **design-token substrate** is `src/app/globals.css` (Tailwind v4 `@theme` +
`:root`/`.dark` token layers, zephyrex purple brand). Components use semantic token
utilities (`bg-primary`, `text-muted-foreground`, …) — never a hardcoded color.

### Adding a component

1. Prefer building on an already-bundled engine (anime.js / Motion) or Radix over
   a new dependency. Interactive primitives should wrap Radix for a11y.
2. If vendoring a copy-paste component from a vetted source (Motion Primitives,
   Aceternity free, Vengeance, Watermelon, UIverse, ShaderGradient), place it under
   `src/<category>/`, add the SPDX line + an attribution comment, and update
   `THIRD-PARTY-LICENSES.md`.
3. Every animated component must respect `prefers-reduced-motion` (via the hook or
   `motion-safe:` utilities) and release its resources on unmount.
4. Components are plain function components (shadcn/React-19): no `forwardRef` —
   `ref` flows through props; type props with `ComponentProps<'el'>`; add a
   `data-slot` attribute to the root element; named exports only.
5. Colocate a `*.stories.tsx` (realistic prop matrix; `play()` for interactive) and
   a `*.test.tsx` (behavior). Add the export to the category barrel.
6. WebGL/shader components can't render in happy-dom — unit tests mock the shader
   boundary and assert wrapper logic; real rendering is validated in Storybook.

### Licensing bar (hard)

Only bundle projects that are **free and commercially usable under a real OSI
license** (MIT / Apache-2.0) or a free-culture asset license (CC BY). **Never** add
anything paid, noncommercial, or source-available (Commons Clause, GreenSock's
custom license, BSL, CC-NC). Excluded on purpose: GSAP, React Bits, OriginKit,
Skiper UI, HorizonX, Animmaster Lib, and Tremor's npm package (React-18 peer +
conflicting styling system — its _patterns_ are realized natively instead).

---

## Commands

```bash
pnpm install
pnpm compile          # tsc build to dist/
pnpm test             # vitest (behavior)
pnpm storybook        # workbench on :6006
pnpm test:storybook   # storybook build + Playwright storyshots + play interactions
pnpm check            # full ratchet suite (blocks pre-commit)
pnpm fix              # prettier + eslint autofix
```

## Ratchets

Tooling copied from the canonical `dynamic-form` template (biome, eslint, prettier,
vitest, storybook, the `scripts/*.mjs` ratchets, git-hooks via `.githooks`). Every
metric is a one-way valve: a PR may improve it, never regress it. When a baseline
legitimately moves, run the matching `pnpm <metric>:ratchet:update` in the **same
commit**. `--no-verify` is forbidden without explicit authorization. Current state:
lint 0 warnings, biome 0, tsc 0, type-coverage 100% strict, story-symmetry 0 missing.

## License

AGPL-3.0-or-later. SPDX header on every source file. See `LICENSE`, `NOTICE`,
`THIRD-PARTY-LICENSES.md`.
