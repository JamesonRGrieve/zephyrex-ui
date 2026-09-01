// SPDX-License-Identifier: AGPL-3.0-or-later
import { motion } from 'motion/react';
import type { JSX, ReactNode } from 'react';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { cn } from './lib/utils';

const MS_PER_SECOND = 1000;
const DEFAULT_DURATION_MS = 500;
const DEFAULT_Y_OFFSET_PX = 12;

export interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Delay before the animation begins, in milliseconds. */
  delayMs?: number;
  /** Animation duration, in milliseconds. */
  durationMs?: number;
  /** Vertical travel distance the content rises from, in pixels. */
  yOffsetPx?: number;
}

/**
 * Fade-and-rise entrance animation built on the Motion engine. Under
 * `prefers-reduced-motion`, children render in their final position with no motion.
 */
export function FadeIn({
  children,
  className,
  delayMs = 0,
  durationMs = DEFAULT_DURATION_MS,
  yOffsetPx = DEFAULT_Y_OFFSET_PX,
}: FadeInProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: yOffsetPx }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: durationMs / MS_PER_SECOND, delay: delayMs / MS_PER_SECOND }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
