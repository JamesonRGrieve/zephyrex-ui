# Claude Code Instructions — @zephyrex/ui

Custom animated UI component library for React. Bundles only the free +
commercially-usable (OSI-licensed) building blocks vetted by the user-level
`custom-ui-dev` skill. AGPL-3.0-or-later.

## Stack Standards

Read **before your first edit**:

- `/home/jameson/Source/ai-prompts/typescript.md`
- `/home/jameson/Source/ai-prompts/react-next.md`

---

## Architecture

Animation is layered by engine:

| Engine             | Used for                                    | Components          |
| ------------------ | ------------------------------------------- | ------------------- |
| **anime.js** (MIT) | imperative value/DOM-level motion           | `AnimatedNumber`    |
| **Motion** (MIT)   | component-level entrance / gesture / layout | `FadeIn`, `Stagger` |

Cross-cutting: `usePrefersReducedMotion` (every animated component gates on it),
`cn` (clsx + tailwind-merge), `log` (verbosity-gated diagnostics).

### Adding a component

1. Prefer building on an already-bundled engine (anime.js / Motion) over adding a
   new dependency.
2. If adopting a copy-paste component from a vetted source (Motion Primitives,
   Aceternity free, Vengeance, Watermelon, UIverse, Tremor, Paper Shaders,
   ShaderGradient), place it under `src/vendor/`, add the SPDX line + an
   attribution comment naming the upstream source and license, and update
   `THIRD-PARTY-LICENSES.md`.
3. Every animated component must respect `prefers-reduced-motion` and release its
   animation resources (anime.js instances, Motion, listeners, RAF) on unmount.
4. Colocate a `*.stories.tsx` and a `*.test.tsx` (story + test symmetry ratchets).

### Licensing bar (hard)

Only bundle projects that are **free and commercially usable under a real OSI
license** (MIT / Apache-2.0) or a free-culture asset license (CC BY). **Never**
add anything paid, noncommercial, or source-available (Commons Clause, GreenSock's
custom "no-charge" license, BSL, CC-NC). Excluded on purpose: GSAP, React Bits,
OriginKit, Skiper UI, HorizonX, Animmaster Lib.

---

## Commands

```bash
pnpm install
pnpm compile          # tsc build to dist/
pnpm test             # vitest
pnpm storybook        # workbench on :6006
pnpm check            # full ratchet suite (blocks pre-commit)
pnpm fix              # prettier + eslint autofix
```

## Ratchets

The tooling is copied from the canonical `dynamic-form` template (biome, eslint,
prettier, vitest, the `scripts/*.mjs` ratchets, git-hooks via `.githooks`). Every
metric is a one-way valve: a PR may improve it, never regress it. When a baseline
legitimately moves, run the matching `pnpm <metric>:ratchet:update` in the **same
commit**. `--no-verify` is forbidden without explicit authorization.

## License

AGPL-3.0-or-later. SPDX header on every source file. See `LICENSE`, `NOTICE`,
`THIRD-PARTY-LICENSES.md`.
