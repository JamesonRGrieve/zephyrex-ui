// SPDX-License-Identifier: AGPL-3.0-or-later
// Public API surface for @zephyrex/ui.
//
// Consumers import from this entry point rather than reaching into individual
// files; the depcruise `no-orphans` rule keeps new modules connected to this graph.

export { default as AnimatedNumber } from './AnimatedNumber';
export type { AnimatedNumberProps } from './AnimatedNumber';

export { default as FadeIn } from './FadeIn';
export type { FadeInProps } from './FadeIn';

export { default as Stagger } from './Stagger';
export type { StaggerProps } from './Stagger';

export { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

export { cn } from './lib/utils';
export { default as log } from './lib/log';
