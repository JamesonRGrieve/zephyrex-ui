// SPDX-License-Identifier: AGPL-3.0-or-later
import type { HTMLAttributes, JSX } from 'react';
import { cn } from '../lib/utils';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string;
}

/** Indeterminate loading indicator. Spin is gated behind `motion-safe`; announced via `role=status`. */
export function Spinner({ className, label = 'Loading', ...props }: SpinnerProps): JSX.Element {
  return (
    <span role='status' aria-label={label} className={cn('inline-block text-current', className)} {...props}>
      <svg className='h-5 w-5 motion-safe:animate-spin' viewBox='0 0 24 24' fill='none' aria-hidden>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
      </svg>
    </span>
  );
}

export default Spinner;
