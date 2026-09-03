// SPDX-License-Identifier: AGPL-3.0-or-later
import { motion } from 'motion/react';
import type { JSX, ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const MS_PER_SECOND = 1000;
const DEFAULT_DURATION_MS = 2000;

export interface TextShimmerProps {
  children: ReactNode;
  className?: string;
  durationMs?: number;
}

/** Looping light-sweep across text, gradient-clipped. Static solid text under reduced motion. */
export function TextShimmer({ children, className, durationMs = DEFAULT_DURATION_MS }: TextShimmerProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return (
      <span data-slot='text-shimmer' className={cn('text-foreground', className)}>
        {children}
      </span>
    );
  }

  return (
    <motion.span
      data-slot='text-shimmer'
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage:
          'linear-gradient(90deg, hsl(var(--muted-foreground)), hsl(var(--foreground)), hsl(var(--muted-foreground)))',
        backgroundSize: '200% 100%',
      }}
      initial={{ backgroundPositionX: '150%' }}
      animate={{ backgroundPositionX: '-150%' }}
      transition={{ duration: durationMs / MS_PER_SECOND, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
    >
      {children}
    </motion.span>
  );
}
