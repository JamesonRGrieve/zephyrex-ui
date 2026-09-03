// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX } from 'react';
import { cn } from '../lib/utils';
import { AnimatedNumber } from '../motion/AnimatedNumber';
import { Badge } from '../primitives/Badge';
import { Card } from '../primitives/Card';
import { Sparkline } from './Sparkline';

const SPARKLINE_WIDTH = 220;

export interface KpiCardProps {
  label: string;
  value: number;
  format?: (value: number) => string;
  /** Period-over-period change, as a percentage. Positive renders success, negative destructive. */
  delta?: number;
  /** Optional trend series rendered as a sparkline. */
  trend?: number[];
  className?: string;
}

/**
 * KPI tile (Tremor pattern) composed from cohesive primitives: a Card wrapping an
 * animated metric, an optional delta Badge, and an optional Sparkline.
 */
export function KpiCard({ label, value, format, delta, trend, className }: KpiCardProps): JSX.Element {
  return (
    <Card className={cn('p-5', className)}>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-medium text-muted-foreground'>{label}</span>
        {delta !== undefined && (
          <Badge variant={delta >= 0 ? 'success' : 'destructive'}>{`${delta >= 0 ? '+' : ''}${delta}%`}</Badge>
        )}
      </div>
      <div className='mt-2 text-3xl font-semibold text-foreground'>
        <AnimatedNumber value={value} format={format} />
      </div>
      {trend !== undefined && trend.length > 0 && (
        <Sparkline data={trend} width={SPARKLINE_WIDTH} className='mt-3 w-full' label={`${label} trend`} />
      )}
    </Card>
  );
}
