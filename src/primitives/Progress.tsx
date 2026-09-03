// SPDX-License-Identifier: AGPL-3.0-or-later
import * as ProgressPrimitive from '@radix-ui/react-progress';
import type { ComponentProps, JSX } from 'react';
import { cn } from '../lib/utils';

const FULL_PERCENT = 100;

export type ProgressProps = ComponentProps<typeof ProgressPrimitive.Root>;

/** Determinate progress bar on Radix Progress (shadcn); indicator transform is `motion-safe`. */
export function Progress({ className, value, ...props }: ProgressProps): JSX.Element {
  const pct = Math.max(0, Math.min(FULL_PERCENT, value ?? 0));
  return (
    <ProgressPrimitive.Root
      data-slot='progress'
      value={value}
      className={cn('relative h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot='progress-indicator'
        className='h-full w-full flex-1 bg-primary motion-safe:transition-all'
        style={{ transform: `translateX(-${FULL_PERCENT - pct}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
