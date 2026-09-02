// SPDX-License-Identifier: AGPL-3.0-or-later
import { motion } from 'motion/react';
import type { JSX, ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const MS_PER_SECOND = 1000;
const DEFAULT_DURATION_MS = 500;
const DEFAULT_DISTANCE_PX = 24;

export type SlideDirection = 'left' | 'right' | 'up' | 'down';

export interface SlideInProps {
  children: ReactNode;
  className?: string;
  direction?: SlideDirection;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number;
}

/** Directional slide-and-fade entrance on the Motion engine; static under reduced motion. */
export function SlideIn({
  children,
  className,
  direction = 'left',
  delayMs = 0,
  durationMs = DEFAULT_DURATION_MS,
  distancePx = DEFAULT_DISTANCE_PX,
}: SlideInProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  const offsets = {
    left: { x: -distancePx, y: 0 },
    right: { x: distancePx, y: 0 },
    up: { x: 0, y: distancePx },
    down: { x: 0, y: -distancePx },
  } as const;
  const { x, y } = offsets[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: durationMs / MS_PER_SECOND, delay: delayMs / MS_PER_SECOND }}
    >
      {children}
    </motion.div>
  );
}

export default SlideIn;
