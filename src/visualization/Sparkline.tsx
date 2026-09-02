// SPDX-License-Identifier: AGPL-3.0-or-later
import type { JSX, SVGProps } from 'react';
import { cn } from '../lib/utils';

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 32;
const DEFAULT_STROKE = 2;

export interface SparklineProps extends Omit<SVGProps<SVGSVGElement>, 'points'> {
  data: number[];
  width?: number;
  height?: number;
  strokeWidth?: number;
  label?: string;
}

function toPoints(data: number[], width: number, height: number, pad: number): string {
  if (data.length === 0) {
    return '';
  }
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const innerHeight = height - pad * 2;
  const step = data.length > 1 ? width / (data.length - 1) : 0;
  return data
    .map((value, index) => {
      const x = index * step;
      const y = pad + innerHeight - ((value - min) / range) * innerHeight;
      return `${x},${y}`;
    })
    .join(' ');
}

/** Compact inline trend line (SVG), stroked in the theme's primary color. */
export function Sparkline({
  data,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  strokeWidth = DEFAULT_STROKE,
  label = 'Trend',
  className,
  ...props
}: SparklineProps): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role='img'
      aria-label={label}
      className={cn('text-primary', className)}
      {...props}
    >
      <polyline
        points={toPoints(data, width, height, strokeWidth)}
        fill='none'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Sparkline;
