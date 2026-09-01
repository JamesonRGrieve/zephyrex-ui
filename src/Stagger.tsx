// SPDX-License-Identifier: AGPL-3.0-or-later
import { type Variants, motion } from 'motion/react';
import { Children, type JSX, type ReactNode } from 'react';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { cn } from './lib/utils';

const MS_PER_SECOND = 1000;
const DEFAULT_STAGGER_MS = 80;
const DEFAULT_DURATION_MS = 500;
const DEFAULT_Y_OFFSET_PX = 12;

export interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child's entrance, in milliseconds. */
  staggerMs?: number;
  /** Per-child animation duration, in milliseconds. */
  durationMs?: number;
  /** Vertical travel distance each child rises from, in pixels. */
  yOffsetPx?: number;
}

/**
 * Reveal a sequence of children one after another on the Motion engine. Under
 * `prefers-reduced-motion`, all children render at once with no motion.
 */
export function Stagger({
  children,
  className,
  staggerMs = DEFAULT_STAGGER_MS,
  durationMs = DEFAULT_DURATION_MS,
  yOffsetPx = DEFAULT_Y_OFFSET_PX,
}: StaggerProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerMs / MS_PER_SECOND } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: yOffsetPx },
    visible: { opacity: 1, y: 0, transition: { duration: durationMs / MS_PER_SECOND } },
  };

  return (
    <motion.div className={cn(className)} variants={container} initial='hidden' animate='visible'>
      {Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

export default Stagger;
