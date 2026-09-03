// SPDX-License-Identifier: AGPL-3.0-or-later
// Public API surface for @zephyrex/ui, organized by category.
//
// Consumers import from this entry point (or a category subpath) rather than
// reaching into individual files; the depcruise `no-orphans` rule keeps new
// modules connected to this graph.
//
// Categories:
//   motion/       animated presentation (anime.js + Motion engines)
//   primitives/   tokenized building blocks (button, card, badge, …)
//   backgrounds/    shader / gradient surfaces (Paper Shaders, ShaderGradient)
//   visualization/  charts and KPIs (Tremor)
//   blocks/       composed marketing / layout sections

export * from './motion';
export * from './primitives';
export * from './backgrounds';
export * from './visualization';
export * from './blocks';
export * from './forms';

// Shared foundation.
export { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
export { cn } from './lib/utils';
export { default as log } from './lib/log';
