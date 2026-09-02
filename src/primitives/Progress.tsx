// SPDX-License-Identifier: AGPL-3.0-or-later
import type { HTMLAttributes, JSX } from 'react';
import { cn } from '../lib/utils';

const FULL_PERCENT = 100;

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

/** Determinate progress bar with the `progressbar` role and aria value semantics. */
export function Progress({ className, value = 0, max = FULL_PERCENT, ...props }: ProgressProps): JSX.Element {
  const pct = Math.max(0, Math.min(FULL_PERCENT, (value / max) * FULL_PERCENT));
  return (
    <div
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}
    >
      <div className='h-full bg-primary motion-safe:transition-all' style={{ width: `${pct}%` }} />
    </div>
  );
}

export default Progress;
