// SPDX-License-Identifier: AGPL-3.0-or-later
import { motion } from 'motion/react';
import type { JSX, ReactNode } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { cn } from '../lib/utils';

const MS_PER_SECOND = 1000;
const DEFAULT_DURATION_MS = 15000;

export interface MarqueeProps {
  children: ReactNode;
  className?: string;
  durationMs?: number;
  reverse?: boolean;
}

/** Seamless infinite horizontal scroll. Under reduced motion it renders a static row. */
export function Marquee({
  children,
  className,
  durationMs = DEFAULT_DURATION_MS,
  reverse = false,
}: MarqueeProps): JSX.Element {
  const prefersReduced = usePrefersReducedMotion();

  if (prefersReduced) {
    return <div className={cn('flex gap-8 overflow-hidden', className)}>{children}</div>;
  }

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        initial={{ x: reverse ? '-50%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-50%' }}
        transition={{ duration: durationMs / MS_PER_SECOND, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
      >
        <div className='flex shrink-0 gap-8'>{children}</div>
        <div className='flex shrink-0 gap-8' aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default Marquee;
