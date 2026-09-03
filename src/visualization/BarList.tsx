// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX } from 'react';
import { cn } from '../lib/utils';

const FULL_PERCENT = 100;

export interface BarListItem {
  label: string;
  value: number;
}

export interface BarListProps {
  data: BarListItem[];
  className?: string;
  valueFormatter?: (value: number) => string;
}

const defaultFormatter = (value: number): string => String(value);

/** Ranked horizontal bars (Tremor pattern), themed to the primary token. */
export function BarList({ data, className, valueFormatter = defaultFormatter }: BarListProps): JSX.Element {
  const max = Math.max(...data.map((item) => item.value), 1);
  return (
    <div data-slot='bar-list' className={cn('flex flex-col gap-2', className)}>
      {data.map((item) => (
        <div key={item.label} className='flex items-center gap-2'>
          <div className='relative h-8 flex-1 overflow-hidden rounded-md bg-muted'>
            <div
              className='absolute inset-y-0 left-0 rounded-md bg-primary/30'
              style={{ width: `${(item.value / max) * FULL_PERCENT}%` }}
            />
            <span className='absolute inset-y-0 left-2 flex items-center text-sm text-foreground'>{item.label}</span>
          </div>
          <span className='w-16 text-right text-sm tabular-nums text-muted-foreground'>{valueFormatter(item.value)}</span>
        </div>
      ))}
    </div>
  );
}
