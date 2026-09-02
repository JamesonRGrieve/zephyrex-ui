// SPDX-License-Identifier: AGPL-3.0-or-later
import { motion } from 'motion/react';
import type { JSX, ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const MS_PER_SECOND = 1000;
const DEFAULT_DURATION_MS = 400;
const DEFAULT_FROM_SCALE = 0.9;

export interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  fromScale?: number;
}

/** Scale-and-fade entrance on the Motion engine; static under reduced motion. */
export function ScaleIn({
  children,
  className,
  delayMs = 0,
  durationMs = DEFAULT_DURATION_MS,
  fromScale = DEFAULT_FROM_SCALE,
}: ScaleInProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, scale: fromScale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: durationMs / MS_PER_SECOND, delay: delayMs / MS_PER_SECOND }}
    >
      {children}
    </motion.div>
  );
}

export default ScaleIn;
