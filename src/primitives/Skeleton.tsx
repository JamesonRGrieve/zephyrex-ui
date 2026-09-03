// SPDX-License-Identifier: AGPL-3.0-or-later
import type { ComponentProps, JSX } from 'react';
import { cn } from '../lib/utils';

export type SkeletonProps = ComponentProps<'div'>;

/** Loading placeholder. The pulse is gated behind `motion-safe`. */
export function Skeleton({ className, ...props }: SkeletonProps): JSX.Element {
  return (
    <div
      data-slot='skeleton'
      aria-hidden
      className={cn('motion-safe:animate-pulse rounded-md bg-muted', className)}
      {...props}
    />
  );
}
